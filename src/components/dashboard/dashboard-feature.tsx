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
    "3DaJk9CwFgKSMu2mhskpQ66WnfTHTsBnNY9q7YGLSXMP27UkhYFdsCFuhi7cCV3icg2ZYRX1UqRqNgXUVEYR2fdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvVcjFJkpoMmeDvyiJPX7nbfWb5vJudFfmTLySJX5zEiFUmQaNfmQRpVviwCcJGwasVgCYGhxEGyEutcsA3bcht",
  "key1": "5ttWpfj46SWhfNVMNAeTS9ep5Ag6U3biAU1oPKa4mY9qAiCZDaYuuDnG4Cm9Wgq5xXJsN1aSukWgizra6YmDVFyq",
  "key2": "3J3rUpLHxyvXVCvKW1UPViArvbNDZ1rBypRoFihzXy8CGyEAXKW49oNX7Tax46xhTSzPRdBQ32kx4MzVAt9HtS7f",
  "key3": "3y1QbtBajS7ysQt4oa9JMLm5haUTXA6ZFmfhozvo78TExfPGg1q515SdLDUfDkXAtkqXgPfwhDu1YMi5sdJwWAoF",
  "key4": "3AoKr9V5R1aR6wozVfp3VzTdUw1vS64VyjpyAbB1uLcZmtTyVZBbwhj8ADhY8V5emB1f3ZinyTLRF8GSXaz5g7Fj",
  "key5": "vEUPTDgdjtKv26hLxRSu2f4upqnzf5UPDPT3rVBWwsSiY5KcKJwLMYdLbAPgpUULZhW4nYJCz2DmJjzEKTMVnWy",
  "key6": "2c8hfLf9pUAC8iHWugPRCeuK3pr63QXSpNqRmcBT8bZQfFuLiByvZLe9nfR4fFBUnwEqHeXqZMQ6fkcQCnsbLX51",
  "key7": "5zqYwZdSP7Zg6gGu6BaUod8CRTocJ7TaAVkaFQ2Vg6Qayi42T4qHMSevg4dRSHwfXuzBJpJTsBPj3bUFFjDyuVNf",
  "key8": "64BGSAQ4uHsbbSy1C5yrADYpLPfdpwQLEDS4HeCkGvcBXfmwXHx2gSVArCxQrSp9KVHDSmV3rfM7vp1uxruiMG7M",
  "key9": "543K1fqFfPyyMAq7voyCSZW7oAfS6uwEFydFEJA42JaUBqMSLst6eq95pRPUz1qs6L4m8k8p31uZecgoM8c57SSK",
  "key10": "4uJ4VsyzakSJJSMBkvKBvmDncVnurPS9VPQqnoU3qnkJnxbzf9yRi8drXAxSzZPs5ZYKm94HF4uarMj82s92LoSz",
  "key11": "2gNZaE4uJJq54yrYnRbYLGdwiALhmcDpob2Fvyqaa2kedgLRGN21SYQXCb8pbSfsJ2tGkK7BZT2gCPXrC7WZ86HV",
  "key12": "3zpWTZxw5Ti6FRJuXVn6m1R929Dwho34mTz6spAnMjrCtdJUmc21UqZXfVR2XAUvASnTg3HTHeNZTewZ1DUE83BG",
  "key13": "3wVZYCB8CNXSp4NJhffhHDUYYwUnRTyEv5ZgzpU4krSEbpdSMNKTXgFEtuLwYAq8u2hGSTCHmHvo9juP3NWEvfw",
  "key14": "4ZVX3ekphzsrHApJNPuH2kz13phhEfZZRB3h3GNU7LzKKuxGHK4L9EnJxJYrQXJbuayY3dT1QDrFs3sJocTbggqX",
  "key15": "45hivkdHs19xMpJE22N3yfjYtouhuC32UaPtn8qJeFbz7fiwrKQPmrw3kgkUo81opmR6yBRMepyJAxkzzkJJF8tS",
  "key16": "AjQYWSzmU4Vsiuni3XTvqxAW5yQSUipxayfeJtGGgRw4KppbTdn8uxp8xQsQCaWE82qSnqWJevJWDRiZCsiSVoF",
  "key17": "5H9xzHgjzSvWfeswXbQe8818KbMM8mY1ywk8NBwoS9VebUeHdjhC22RipreBXiSb4N439exgxA3DChTeFoFTVgrC",
  "key18": "3mm6LHfYxfyU5a9GYBafPoHsnJwjJ7p9QtPbp7cWYtTQt3JTL4NhPjYBNahC7Sqq9RwQtQCkbWDWRTEziq1x49sX",
  "key19": "2PqW1umfvSHQS5z5t3aWCFj9f26JqTRLmnYQj4qR2wGTRLfTnHdLDVJNYunuA4Zxj7hazNXkAhZ3gPTWzVcj5nYK",
  "key20": "63Fxo8fMhFQHjQduu6fi2mxBQxYRaWEVmLL7RW39J1ixMRrsRLz9CuSAQCnu5emjZMJuxBz1HR9b9gshmxx2P2Vv",
  "key21": "4RHTwDGgE1kPDJ5W1vjLFEX1hmKSmET4SaiMt5kp3NegdGZPR95cFXxnmWu3xupyMc14FbppF4Eq8CXMHmHyqPfF",
  "key22": "5uTYDvLn9WPpEvLb8eJMJPMcWonyWnjP5m6Pw8nSucpMsz4DN2sPZ5augWUVBMDwPqyVWfGg8SFnx1c5ffEBwvJt",
  "key23": "4kYTE3ticsSrwvssKxVdygfkJkbAB599xoAMvBENdQyVeUgjm7Lu68WayGc5QtwQRKy9FsGmkqNXxcJxCsrB8TNY",
  "key24": "ut6Z2NgaetRERBLb3FMJCfTc5aMdhVH6t3FJfSchzofwm7pQb61vqF1qxtu36KLaYZBkR9VjryrxLk1W1G3UZ14",
  "key25": "veF92U8vVV9yy4Ce1SpAcAw3HmkPp9AheVMHGj5V7Zku6hW64iiE1VJ2tSi4ufwFHMNWFJ3zyeae7QGZCCkPNU8",
  "key26": "5WwNFwFnLeLzLBqZPd8SgWJZcbC8m4SQayc3KsMC4LyMxPhe7NDxhcxLRhTQhTPJoUj5jG1fgF1izsrPTS8wifDG",
  "key27": "2NfnJ9eZGgDmu1BH2PhfkkWi8UhNhitnxjixvG3HU5sL9D5GVXpU4PrEK9EmKws8SiJkPWQo89KfBWtwQAK1xauc",
  "key28": "4HThL2QiuUZVyeAg3mNZ3iJhNmT2XR7JCgA45xR5jCs9n3gE2L6X93to3TTu1MmZ26PDVdrzThkogfzAafc7Tz7T",
  "key29": "jWv24AJs8avX2a1Gmn71tne1HUq1DHwftDvsbgCA7TtGCy9x63y18wpR1e2L9i2Bmb8PRcs5PC9fSA4nZg9t3YK",
  "key30": "4qRr7f61fLqGkNNaHLqswjGT1oPavHW5ZA9MgSetQLB5hNeDpx1193CMXtUo8LJ58oYc4mCdgjRsgZC4LKtRLLaj",
  "key31": "4oBjf9BRLFBBgY6XSeFjEPCkxiSw9pNpepLLyrQg9XCegYFL24PmaekubaNhf4ztupWPp5P8us8meWEKCU4DbX1G",
  "key32": "2ziCsZz7iK7aswC7CFvh2A8EJQeHssWCwyKKUyWRftMX9DEeY6Axq3qd5LVHDub5AD6dtUX1yiWFdCd4wq2VMahP",
  "key33": "5qWQFCsKS6AiQUBMQv1AcQd9P4AySjmAEwshgi6mSi3C2XcQJiNRFkoTC7FpZqVJdeW9ooXaswoYw2e45DwLaUzp"
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
