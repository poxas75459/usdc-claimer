/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4qiPGCbfDMG1C26ToZPUXJReJxJpyyP2M6vd9ePmx3c8aeHWqwVbJvU26YYGRbVTSNAnhWJScL2qpLBGBGpa5fEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHrA1Xf8kiarzJAnztka2oGnLXDYPsaZfuUgXq7cnMriBdYGXeYPNyyWpCTo2EoxXhqVSjpY3H5rdXutgibB5bM",
  "key1": "2E3kduLmd8YVeGsB7ozL5MYVLU5yeFSnyi5MKLaQxSZ7W5PD9mFtkgTugVsSYvvL1wod5CLzLWpGBe3KPxBgRPQQ",
  "key2": "2g6hfA9VGrVwrQcUXb3sgntAjYXy5G6h6XsdZpaVApahEEFPM7bNLwxAErTRHb4f2pLxWuzSNsDqL197sJiBhDXz",
  "key3": "4Qq14qHuZ8LobNdHY16C7n6dNiBZMRwpwgrMBB52J1bEsANUDEn7nQPVcKvEetBvyZCR5F2oH5iHNxTkPA7iNmph",
  "key4": "3Ra6GNYnfnfLZbRaeYs2JZTxT6PiqxvuEUh9aKFJwj8Y8EnVGjm77Yq1SeKo5oF5P7b6ZW6s31ibCqH44na48RX3",
  "key5": "3oPFnwN8rKdMEpDcTJxhsrfz44RS3hkbFdV8Zx9Xtiu6w9KcGCPDApDoskz8bnid44FhKPrEBjUs2wKH6BUPoGbp",
  "key6": "4Ug4HTsoPMTc8yCN5VfAQNB4xNhz5ZpectiXNY4ydJY1xrmGLTvrg5eLzb9utS7RyCVhUywVXfvBg9r4JexmXavd",
  "key7": "Bmyoi5YrLGN1e82oV398Sy6YQi1ccbgAUqN8iGWdEKhTkR4q95zEyYSasJ42RdjbyBH4n5mupadbbjAFtxCc18B",
  "key8": "rriUTuYzsDt2K4fyJp6sXdk4cT9ZhDnDhouxj9R1JXmppvh2A7e75g9JpoSNpfmYohcRBb9hNe7Z4bdtxrt9sQZ",
  "key9": "3jZfLo8rbMCS3kwbmpDhi16DQQdarNjsWry3oeFWZzCNaqW9bJNYCiMrqpQzNRvigEAJK2WjXYQL9uSuFxhAthXD",
  "key10": "2ikUhKHPWV4KWhzD6xYgcvdT2ZEnXLUnAr2bUjnLYLMBPTRNYZn6UnjR5incxAL1yyP2PdZ1S99B1XH7uHxC3YBQ",
  "key11": "5P9HoeJqWV24qELm28WDqSKNui1d1Sv9RPraXDE9p5A996enLKw7eJdu8mZEUmMrpkpGMcBMKwkxPjwvincTYFrn",
  "key12": "32YsKHQw9ncokven6oAh4yLhswaVHcFjSnU6RWEozfUWKPb9F1cu3uy35tNY1HGrS8LmCFdCFgJcE7Fo6Tv98fwe",
  "key13": "N2KgqZ7yCspt5jnseUPRfwggjR8vHsZPThsNDMwEUrE1zXSGQCm3ouYCJqgDSBCXgPVgUkAQK9GcxTxJ8Ey5uPX",
  "key14": "5C3LagnvB5bef9ByqAvVzS2zezqamnCM8UhrZSz5m3xoFB3k3sDarnbQwKfd8ffc1ZFRATR3eY8YUCjuc6qSUixf",
  "key15": "3DiccHUdiHTC5yVeFEQeMkgQWNQU1ds2BjwHCDAn7HibFksnWKdEBuh6AMfLAsvJ72B3uykCu3VHySNXTYZqVvg8",
  "key16": "3AU15V3ePhpz2W72uQ45Z2qkE5QdM6BimzSxEQ9epJBLy2p48J2rPSXB19nMK2ZRBp3yM2ocAE3djC3UwWeF3bKz",
  "key17": "gMgmBGvXjcFwry6bkvu3tJ3BHg7VdS4sevyfm5BbRunCyQjQdE66NysSx9qaaNKx9XJ93Gd6eSE2roi3vKMKnrc",
  "key18": "SHwoSBWQqah4TY2aEeDSwh1px8An3CVCme75Cer2UCxJkTwkQk7os79hyV7gMgXeqDLtSeVdSi5PULA65C45kyU",
  "key19": "Bof9BELn98DZ31ZETWaDSD4JfLaRMfCq2EVHhp1FfPTRHKZ5kEHZCVyrKsRVtWgpHHCnzgLaFjpmPsMyB648ub2",
  "key20": "5NXXsF9gDsPdgtymvGdbJ4P176z5ShsFVqWYKRtFyhtZFJZGbpZCmwwDDpF2f6TwwWDGs6mR7DkaHAdqzcWLkcsv",
  "key21": "5d9TUkAcdtpbeHH8dZTyioGivL5guoyS4zp2ykS3DDWqC8RpthMAjSP2CMQRjdUybnJ5b3z1MytnkUXgWJ9Bee5J",
  "key22": "3nXy955kYHkRivvvhEEJCPfy9Qfvk1tb52ZEruQZcGoTrQC51P6hqqGubk1dnk8nPkv1J9cmN32ANQ48w7a7tXvk",
  "key23": "3VJHTxREh7axZcTvftH1xm8hRgCzSS3mtyPUhyQbyz8fXSwsmHCAgcKyeavdapeFJjgmvepC48RXf46w1FHn5Lqn",
  "key24": "4MxF5Dpd4TL6d3qq4ini9U7EqhdmnHiDJm8gL1LF4uBY5F4F3dBaFNvaifCSmqVmrPAUGCKd8fqSUrGiuv2yaGVs",
  "key25": "3MAGwYjjjiwhQ6zmWAEmyEqN6A4bJB9TDpUyyE6qNu53Y5Mtosw7bJb755RVqweRsMTbFmaEWUqBiNpBFru4q4yz",
  "key26": "4Jq5ERXJbUhqUDxt356vxGPMK5HEP8xXXA723YiPkNwLMzWE8MxpvJZE8DpAvuMdg1cgDH4E831jFHdUFcUbyfAt",
  "key27": "3mMmA73emnjhsNHUVA6aX3P9FDbagPdUm89BSaBmDHbidyZGjyMW2gCTiNhG6ZEcvZmVxHmjqzcmCNAst2QHenUe",
  "key28": "4d1CZE3ga6gfnLMVUvQnte4Fev3drTzPfjch248Wy3zzEYsESctVr1FBGevCVZqJ61nzwRdUTG39rKAFvBT5hG5r",
  "key29": "FeaZGKvj86DVygvRPxvBq2ukrHLtJpj5aT3b9eksanausy1ivKVVkM7XAoUeHMZ5RKAdADY4WSNx6m31hTe5id2",
  "key30": "5hUhKrKREAXCw6kmeaZpcnemejnXbPQnRikEUPQeEhhwUp6vXfZeJJqvqMSfbk9ZShKyPEzmxyS9PLP9ZKj8hibZ",
  "key31": "66bPYbuWAMpmF4DDnz16wyEgHjSG66GoEmjJcRYioWmNLXsDxxmi2JZmBGPLckbqdeDV6NtixxYP6EA59hnf3KKT",
  "key32": "4r4iM4naHW629tYAQFgnsYjGgzhnEnD5zpKQgLHPVbCTGkG5FDKihUcgTdeHhMccMxPaibUjEfEv4Ss96TgLPWfi",
  "key33": "43kqRqQmBvYzQoZpxwTxNyvh9hGcvUJacM6SPNtTa5mKVfqyQLsHaxDwiDESg1D31uPidQ6JbHgdUFWS4VRG9b82",
  "key34": "4ibDukp62DvVrvVmRpVPDC4gykYASuQez7ZL29LfYQ3BTZBUV44Fe1xq13Zuqqv3GeQF9sEokCvJA2DqR7BqwAWq",
  "key35": "4MAZY4xoMbahBAqLvqV3noL8KsFrJaSW8Wf7h3aQXLa1aCTzkv3cLBa3ct4hVBuEDx36Q9FyXVhtEtoiHDNfnLkt",
  "key36": "3YXvmTsMLux9f9Vbza9wxxJmjMN5kzdR5qfHZjMSGA9JgnajJDrkHsZeaNnvGNApoafsh5TMegTUCQX9Ry8qY3Yt",
  "key37": "tq7G77w3fLLbuDXi421AVRdWvwj2NHrtbDfvRyxYVpfcmSBfeVvdmMKNzJamyehYwm44xVQYNYviUjwSvcw1TKX",
  "key38": "2qzHQKLkHz5SiJUFsjit4n58LKBHgqedBqbXfDNT2CKZEnwCBK8xmgom6exB51VLEdxky2cR6GFvDurJAtA7Njx6",
  "key39": "2SCE57rdbbcUk5ZH416cSFZxG6CZhh4iGY76EYKDVy9rFfV2U91VU4x58Z3yzqcSwnpSEmenJaakfTnsFE2SoW3a",
  "key40": "4LqgP4swMsDNj6tiJ1BNigN9owJYjYbbj2tMsxKCGeCjMitY9EijjAt5LxHqAEFNiCuZhJnmc5X9YmckgEHgmxkE",
  "key41": "5xHEngEWnAuF2oqdJNLdyWsqpimy84S91c83smPuJtc1V9WQeLqvmx2VZFwT2H12MAJGPj62v6rdE5EN4rGpvdyf",
  "key42": "f3AZZdRmArfF3tUbK7G1utg9LPSvNMnkb5MHPH84CdLqSkixr6sf6pA7R363JX769Bfj4TZTYooWZ57W9ibtqAc",
  "key43": "2kENc3ejkSNsX4BsL8EEcTsFpG4eAX4fD894d3QtFD6Dr4qKbPKMJq5ZH7zkw61dRCTKVK2bCRU61KBoJYQLM9Vw",
  "key44": "2DTegPijUPi1sVPyRRRusWs6w137ZHms5Kj6cHGVHvdBZrrwJSH9PmBRqc3mqZuQyNq8CHabFP7KxLLMm261vM5x",
  "key45": "3wU8tQQ46dbqAGa93XGnANoQKS2WzmPPWMiY27pPEnXCD2Q1asmhUbfrwxjki3YjyZRDKCe5UqnvhX8ebJ1HnRms",
  "key46": "2jWpt5YFZU2K7VDhBTcaECT7qohiBqJs3Hf2aHT2BsCHVQtxsHZBKuy9CD9qXyJ7mCk3PZJoyEKkXXR4CbQXpqfd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
