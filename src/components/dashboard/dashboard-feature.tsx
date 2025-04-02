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
    "356R27m6nLpjirBboq1NN8qjGqB3MyBBwZTtGF8Zw24HThYgpjL9RR5bHUDzRhxrUt9QXM6Ejn7ZcxeBU3WAvsxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22H3xkv4rfKStnoB4yi5uiAQD1RN6audbkAtpnByVdkZoWExBmt433Y1EKpFaxa5Rz4YQN2cyMEwBRUQWjUduUfT",
  "key1": "FALmcQb1SMdB8jKMhRg9trzLo9BrKPfYHgdbsWHFKmnm7FcZs4eXBRKMi1jX4YrXeTtkoQpet1z9c6478T3JXSM",
  "key2": "sT3vmLXCdoi2gY6fwkYYc2gYf5Sf837PyHY1KbgArj6fATh4fSpxek2wCWGjStRzASesxGLyWQmrmHNnNP14MPu",
  "key3": "4j1bNpVmNqYEEVVxdNwAvVcKpJD7fbgWLKCDwna2Vzz8KovBzvCFU42H91vKr7G872RbeMTvDqipyqsnqWp4RMnN",
  "key4": "4uHyxkVPUMKpZsuSQvz8qpcfbFtbcjzAkSv8xCfWsNULLrhfEFCMrjYDqV5rFEkb4yqNTh45uVbQwp9S8pGxYdtL",
  "key5": "4rutsm7cykxeQD5NChiVY4JDMFM2ZopqCPmiHZTQ8M7JyfeNXpNfDpYppBZCsc2r7rE9HReCCLfMZ2XaRgkXx7h2",
  "key6": "2HW8MBJQ4HHCXdSRM2FM1u52Dp2Cnfa9GgoiNo1u1qMBzv5xWKAz77kvdbzrL5MYSzwWqNuDAHvn27zYmcJMGRCa",
  "key7": "2sCfQfsxsaGJKJCWnNrzMVusGoEeGCzswhQLb3hq8UVc17e63cz2uTvfiM26eTSuRk2E5uH1vfDGpH1WZRgnVURH",
  "key8": "5QYFGoHZACqxfzV9ZQ51N159jEDBH8Jh2rMcaBoL2SpbcawfXfCpqq6R1bo7cQJX8hVrTSzMLdPPSW7PM3aWZQUn",
  "key9": "2K6Dy8CLVEL1fps8eAyjPrY2wJxraw1hxM7KobTqQnd2ecTw6V49V3tyJHXLTUimB6PQ8JJsXkfk1p9Jv649wRqj",
  "key10": "4mgZX9NdrYuY1GzJ7x1AfxzXriccJr8CjXqviGEtuAaWDwvAcijDjEwG2ugU1u9aNBEFJjLuk3NUBAUQqR6AGVYp",
  "key11": "2fFHmBGvsHctSVqUbNVBrqKDQ31Pa84YwVE6LJcGriH2S7K9pHkE7NpUvjUGPBD96tCdvAk5FyTUKiWtEG4q3v66",
  "key12": "5S3NXgJiWJDCd6rJBgctgzFsGwDWfoUjWec7ejXfRnKLhEWAmBZ75KUfUzGcXqnjoQ9stxmL3ss1if8sJVbY75ju",
  "key13": "2YryzWkoiAAmErw4xHuQKqsNG9pTr7vrEXNShSKqv1WcvVePCvZ1gZcCgbprZqGDrdd6SBzjgtAF9WpGMPnf7Dng",
  "key14": "4qTzweQ3DsGqLzLqv5wkaMWZoEN8zJ8hcgDJzXvzqo7mCmCACAmUddMksfNuza9AudZ28LB8iQJ3xYRFjQuYN4jS",
  "key15": "PJCfrr8Y39i5DR4qneNfC8rc7tHfLZhqjKLTfA7kbPkdMREtkdEXn28xFwiHxpJs8musiro3vszfPKqZDhZiNgE",
  "key16": "DXcWzkDCCJfnATgxCDCwNXqZjwv8ApUCTakEUPWQv89YvaTBVjDTG4A5ZfQqcBkdRspgFCAwa31DQbaoAXT2jpM",
  "key17": "4BLMhSeYTrxoQBxGMenFo2WioriX84cT5kjfvc8fE81mY99iaf13d7oHk2WBmEgQ7m5Ayje2gGH1kMYzrYZaYud6",
  "key18": "3s2YkV7jGXB9mpTsgcz6e8Ly7bdKfwPRThLx4Kuhorr4WxVLtntPRRWBVKCDpM6VSjBn9f7HGkJvU12FFiN5bL7o",
  "key19": "4jsfJFMzAfCsFvddmohpPLiKXj4UAdZ7Ymo52UWZtLjShWLrvWnryE2Ap5scAB7TDgjRw35hQDa54kELvQKfeTpj",
  "key20": "3pyf1MfcZa1cu61KKXuGziBKTDxo1jLN8XQUJuJwyNUPQ5ymVuiAXGkDvY8BptuFQdwGhwY4dafztxhQXUnEBxs2",
  "key21": "63ixfu3U9EKouo8HPSFbUdKkJmyeirNvbjYZAMfYLwqikAR6NRnsjKorgRVdHuKXFnEZpLfK58t5nA29iBPznnwx",
  "key22": "4x4ECJXqJfoqnp5FiX1HtJpTEbX72UvHna3BPEM7JptTdd1miBZdW4uffCi42iBXZx4DTrnfAXFutGcv8yj15yyw",
  "key23": "15vZ3AAm5AbJmkkHfbHBJNKuebNSh2MMnzug6WhTqNxTo8PrT8ZKNjJaxZnWRZLrTjoyRLQuzKkn6EPT6DGDxTk",
  "key24": "3DEMFbQgYmiAqdEfpphEJRizzYw9uniyAnNGS4T5UNfzxgxdor4aCrzHX8kQP4s5vifGNSPNEorbQgdx81UUQ3hY",
  "key25": "4d1Hdu7WHRA8dZqHj1ZJEsKrSQ6uDBucoLffFpkoGEybETWYAykjbC7Etk1azdBfQNe1dAZndVQEcrPDGGHqzRxk",
  "key26": "3PiSbmj6bJGHsZvg8Xzsxs1M2FimgqtsyNYB7iSP63Z3seyXLgL38g3QM7MTzQHupfb9yVhY2L9aRmnja7rG4y7h",
  "key27": "nWoGiFpoCT1own8gmpSNTAEaxMRRGwQFLvMCeAofpDi4kEdZR1A8M56USdjorPLSQ88aSmmYaetQwLnTNyX2YdX",
  "key28": "5zXDd4xsrRqed3kMYwXU7XY6uK9MuVVRr4jzKhWKdCBbrXQGm97NFAeWk9XLWQuSHgMoEE5wcBGH8x59eABVg9Rg",
  "key29": "4jAkHktKoqW92QkhY9DzbfppxpQ5BeZu2W5G73pjmcfiCq1LgcVgJtYEpB8y5ThExvzzmdAgNQD3xJiSynSU8oNv",
  "key30": "5jSppR4XaXtzg5kHBc2FoL7tmJf94DLTZ4XV1aQmrbrJ7PYAqi7ng9iqXi24TCKaeCmgzfaUWGNe5bbVh4jBbccK",
  "key31": "2pHpGwLG5hzxcXLC9uDAwGRfWQZFZ8JnRNimUkwnCe9VTa59f8aFzGfNWJLDL3WVFKm9fxTY6rTZ2xPWUSU3ueq",
  "key32": "5dT1desDvG8fE4q4AwpprAAZoCxd5VmvZtb73UXAg8GPnXQEmp8oQWAGmikZteBvJJKzwASkMvVYpyLZhXWJjuiL",
  "key33": "33AyBU2NEedQiAEYE584y19k4cZkpFoRhnVuUjnLAkdyBs4En15EarRsr3bPXGWRMhLsCMr5CWwf8tkBPwn1YmLa",
  "key34": "4xqHJYsH4omu4VQsViX92iCEZAS4jc3Mt7n8wTXPRApx8NZUNiHPk44c9L8f4RSgNszdogLABPSSdFLMyH5QATSE",
  "key35": "5CjQf5NmJ39qevSkvuHbsMy4EqDVMRzmq3diHA7Hr7UTjuZYqv6Az3poBww9FPUe4avifCrj35fYLAb6u8RpsZ4A",
  "key36": "28y53HVAFLiz7gjMXuD8Wd59TUCvyBprvtkGkS18UoSt89iBeX8VDxWHQxJK7NudcNzU4ZJJp9CrU7Z1mhmxz3oe",
  "key37": "3cgM1UevGmMtRCfxBDaCBe6Lx6pzCFDBrRqsKiXUjZCJeqniBdAKvbk6HG8yRdXL1ZzoTQGMQyQR3QMHYkvq9E9G",
  "key38": "2wiUGohba9kH4REBbS3vR32j6Bpg5Y1QNsTWNRYJRyTuYx5Kn9YxETkVuNSJ9RHqwBZ4n7vZtPAoNC4si6uc63QB",
  "key39": "5BaRRwA38qxsT25aJafoXNgnYwehpAHEvZ3Jct5qnX35Er5CKNBxRGLvkPNeXyCoLr5mt8Wcicv3ZhJnKRaxLcLC",
  "key40": "4XxJUi7DLusgstawNHu7d2tSES23kSr7aeC7TvmDhyHQ8mpc2TfCnM2DhcGrXJJQLu8XRqR2Zfz98wochzmQkHNy"
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
