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
    "4r6J1wYQ4d6ZRT1DQ5C6zy9GWeJsftndrtqHFW8NYR8EHQAiXhEZPhfLFq5RzsSo2cFZyAK3EHL45w4hUN8pyze2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxJAmiLnxEiwL1katZipcmqwHwhK3xzBnjnP1gHFrKNLmDxLrnfhRqSd2zWQwicfjjDZm3CghuDPArBEAY7cjcj",
  "key1": "47AejpLq6XzyUe7UAtsgkhWPJz975HhQD52wAe69zfp12iDobTA88XD1sGySpCs9a9U5RnuQK7ij5LXGeEyW7oTS",
  "key2": "2gZTUZULRGkovwwu8HQvCJWW7at5z4G4CanvAs8MvYj4uYPvGb2LX5KP1KVTPUzmmjJcq9heDyLmz6ziTDeZCvRK",
  "key3": "35QZtqajq9VPk6f33CBRsLq4ytbwB91eVXxhUfzQYjwBsfHvJxov6xiqqgoz5Eczm8884eyjoui2pR8dsZEWeY7h",
  "key4": "2Y8HCoek3PJNkVmGFfG63DsWs3YiYUzPN5NqsSLHkGeueJb5gxSZ6p3SyFJCCwsVyhXUgVbnrbRr8gt5KsnL1Zid",
  "key5": "KLiKvBA54XAToNJnuMcQv4M3PzuPWay3nxRLJ4VsCa8tTQZyoiszTwewPbCVrNteMLM5CdaVyR7EQ55Xd3o3Eij",
  "key6": "3WMdEc5CevcC4QvDt5dYL8xcPP9rvCnP4X24euTngZRB5Zyin1xLtUs2Uzxvh31YNhBggQpJk7ud9aQe3WyQBoJz",
  "key7": "3wQkyCNXhtey9nLD1dE9ScfBtjNd9YbjgTdgPAiZohVNSwwS99cXwEkpPvofwEdiFZqDmCqNMo5wRTT32ktuUrfc",
  "key8": "LMPiYA4FgGtxjknc2fdqz8tLLSbvHPRBKzPq9nDGBPo1z1JLgBsEG7YnDZMPEGT9b3yyKkAXk1WVyJkCMHinTcy",
  "key9": "2UaANZVwJqnxiPfpcKp65ohuYJ9dA94e5KtHFLSZ6WTxpRCtVt5Pt1WhyVhcV6TddRdFp22pHbQN3fqNq3a9XQPy",
  "key10": "PfjUYQyJCfUHdivmdXJnJJzoJfRCUNFkZrycnHVm3Msdtye5cNQGSttRpF47fgCp7T3w8uXG5fj3qRqMuQy2JW8",
  "key11": "4dLHfnFbM3gEDHL93bQSAkCYVvfNkcXDKMFSXvYP3DJbNVYCux27ue2QKF5fyEBHjpBsLQsrf6enCyrENTsAovr1",
  "key12": "4MZeuTnj3kkjFFGjb2N3AfBfZVw2bTBPraeLU8rozXJiVEqbmU9oxLnbBgENpRe7V6sdKJwoeEc4PEWiL9DrdfAH",
  "key13": "4v13qvfEwVUu6N6ttjLdnySN9h3FH4u9CB9ZAFrNGQsJtJVamVTRs5gyW1tPWnU9Q2FG7NvejBV3TedKPogmEYxh",
  "key14": "63VL7sk1AoVKuJFEa6TruPRct9WG8YB5iwTVG8WMVaKjayhWiDZF4RdqogQZ1zsQkzrXwEYeYnwhPipCG6hZZpuh",
  "key15": "2LVF7BQ4MqqM7N4j1mdaLhB4gNnZDxreYXpX2tD6hRn3JtHpWpdBikea3dnYMUgCWGngQqQHi9p6JvtQ52oRfkmi",
  "key16": "5NdEKyZHeBHRbhTTwqFawN1y25EPD5fKGbgjqkCMVTnnTDkZ5C7YMTJogkUdpJ9GfKUEmN6nJ4y85VTtzfgAB8Nc",
  "key17": "5QPwQaCCnMitGoFq8EFVgB1XBX7PRDkHTrs2pf4QDLiDEZxvAQ6G87SHqeXMJy6TsAfrUVaCtAMwLgtXvnP9LTiG",
  "key18": "sHfyrvnFDmT4hYMDxz3bJA81ceFasgVpM3vZoKvqqMktHYRL31tRYb5wVybSWc82t87JsX8Ybkqa7gB8izKaKRg",
  "key19": "LosdyrpW1gXiPZV1HgmQKmBQoGVMQmVFtkH6gz4LNnHwUyxqbskLzx1dExEMszRHcPPAmWnsQSjbh1yMztFwRio",
  "key20": "5hdtB6kuJmtod7uTXw2tVEqP8NZRRLn4rBZu3Kzvwr1jJDu1LHrqNUKPK5M68QCb6PkQUgPsrSKjHQejgjKD4YXv",
  "key21": "4ZFnUPzBUc3D2VGEHZ1GYRzQDJcEWVnwjAn2uCqTQEBAFhATDptZxMQn5xHXCwS2aqDrxu12tcMztRWxaAiT8FEQ",
  "key22": "4uWKdvyJXRSJj4gWWyht9JU6Y3i8LH3KA9gZF5xFHvYWRsiY3oCSAnZuZjGrH3VaT5HwMvFuufEigc9JD8R88QnH",
  "key23": "Am7ikjCEBobiPX5AFEG8qTvP3bD9pNX2hKM1ZYcGneuB6hYg1A466CRUzg2hi8UnXFu61z6ak7hz2wMvZH2cu6b",
  "key24": "9ZVR9fE35uq8fFfkqFeLnRnysez1hwDZeRmSNuN9SqC34Ttcv1fcha7kvMTsqVofox8B6Eht9cALamiPunTuN6Z",
  "key25": "5qPSh24nkdMF53svEqntNLBke1r7EPGh9pzqxXGzobHrQVw13w38XC4wZyeCL1uNhs7XipFMZayrZSUpnHypLdkn",
  "key26": "5LSUvULjLyWLdctR9cLLvxBaV1KbMgiaxxDXL2F1HSoV8mYerzW1pvqhkQd4hdF7x7gWP4JASQMaQc33cQyZTCJu",
  "key27": "4wSDHuTS9ahDCNErf1E6gyWXdufzaHLLEBxThj8zfzMmh3av9V1LiAfkHFSZYu6y1aJfT7o97DLnkmKEbCXE3Vd",
  "key28": "S9JztshPuWvBSQbWZrV8ozYKUzh8XvT8oR98ig5bMP1fZ3tuqwP3T4r6gMFEU68Se4ANKGJQjd6qPCriDjB9KdX",
  "key29": "5c6qPqgqCWnwaXGQDUFXAgzTHathrPbNVaJ3upyi3xqaAf7XxfoP9TcgGtmR1YFc2gFxMuxQP1CcDXKCC36XEx1U",
  "key30": "YjjkgrbVxvu37gmcm1N7p6MNE1PT8WZppo4jDyMJwYoDyLeASQTCmjVudKFA53zKHyxDAqL4UxJqx3eGwErGzFj",
  "key31": "5Nc9CU9Kbeh17DLJkHs5z8NEit8MVKz8r37UwJjmkEQowfqTseE8tWiZpg3hVAcLPwdSXvjsBkV19j8VhQrDJp2C",
  "key32": "27xzdbtV51E2g6cAuAoA1RhrqsaEkRy5WeZUQRL1XQn5nWHG2ES3Hdb3SESLErFm4y11i3eq17oskrhqbPwKoxgx",
  "key33": "3MEGDQK5pwVvDeKJvZqfA4mgXLqAZbxq9e8QamMvJRMgmED5jqNUfZAwLKv7VjFTbjiC6pr61txMY1TiFjsaSdaW",
  "key34": "Dih1jm445mb8AQBhZhpYnWtbHJRnbR3TLn1m6vyKJYrWzNgAKstCrKh8pwGYqXxbESAnnipqnoydxV98xqLqjYX",
  "key35": "333Y2EQZX1qr3bGG3pDa7Pa42GgL17iTBdZzExexT6odANPLc6WhH8REjqtkidQic4kgBR8SDpvnoEqoiUV1KxNH",
  "key36": "4etKeKQHqEY4z6hLUwXFK5TuzcVvnZnF7mwYvYRox5cTAVFSAqkdUmdzmXbPrwrRGX7mZvwNw6RUv83jpu78ike5",
  "key37": "3DcLtsNcMVNmTrHrdUteJZNPa7MVtUfDByATZw3XMR6AdHVGGsj7P7NtxPac1XaWKyvSMGvrg4tpUmiMpT8ukH1c",
  "key38": "4wP6UNow1YfJHD55vC3a1FYjKdj71VDGFCEYKChKprvMJAPu5FKVqm8XP2h39nRzSjG1XezKuRifFDmqtR5mmZpe",
  "key39": "4AcsFZ4oJs5ziLfM67hbjzedM3zhdNSpNFTCsidJDW4tBpH297cBJtgqAZ99KwAN7Xgp3im7MuZEsEMaPxoAPUrX",
  "key40": "5W1GGR2k3AaGA3By5Ay5ymPyH2oXVxyPBDZCYRpyb6i3EHhmEQ6EwSpp3wFnUjX6sa1MyFGfsCxzjdfKi5Lrwp4D",
  "key41": "5wgw69fS7omoPGJcCQHZPjqzi5aXLApESPE8uydK8efbnUsue3uwarhEgAofGPTT73G7QCW8AR7rMCpFmbpwMPqY",
  "key42": "5EiaFip2ZW3R63whkX3xUQuxaqcZ4WkZ7PYfX2kHi4ETyxGGX9SKMwtiBzsf9Wci6xW5WkRvkEEWjcx3MChQSaHG",
  "key43": "JKuEVhP4iJrVDaF61UVzow1FDsvePgMetZU9QgYayzWYjvNQK2VmJufZxUSivCJeUCnVsMVLFEXxcTzFWac1toC",
  "key44": "5YQEWWPcWRU7pa1DiGbkYcWio8SjQr5tnsdfgz3VKAJf8ZPMMedTHumk3GM5b5uUxRJuiJ81og6QqJuKtgzBBgVx",
  "key45": "2NNmYhpPR5UBcGtXDSQgGtKe7Q31zWfTZ5q1xQiotcYv5HBMVmBpL5Tt2ZyA9QfwZoNismbJGwMt7Lenwq7yaWPQ"
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
