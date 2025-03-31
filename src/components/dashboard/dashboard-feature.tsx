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
    "38X6aaXEEyi8V78cr2azrDAQXt2RXRDvFjkzQo2QBJskYmoGXFaHMSz9UzsbtbyphBozJSwmsRQNJWaSYfvXaXjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enLyoAaqCmo3nvC7h7zMRmVfKbGZ6w5UoMvp6tsLjZy815C5zdfRDT5eDBrjQMZZuSeq8NYXCajNHhG6EJavU2E",
  "key1": "4X15RRYxrRZrD3qhcCUVy4rvFL4zx4CbiBbC7Pk3TtLCKpZVgBENHGXgdn6qaEhUL4aR1X5w348W8GpFCthfjJoq",
  "key2": "2LmjQh1HjhPdN9Mrv8SeTvnuaoFh6uf2bExQ6g7K25HicSZkkU36A9o726atCAEagjHdKiVbpPGMUG3m23radc9V",
  "key3": "2JUDfSH3gnKq2XXk4vkbSk4JKRX8gQ3ENWbx3AcoVp1nMmpfH8ko2cmhC78mb6WAQ8zDRcGYkPDrA8kFxQm1DB3H",
  "key4": "QnGKHRSVfPFcKzPJxPekvNPiRcZjFJLnMEYZqHVnrzEhdFpD2sh3ctbSypYPxhn3UPkhvcHAxzDcwVJVb5eCcgh",
  "key5": "5d24HxeVfD1AtjtESU12zuiigqB2R3eF5HY534jd2PCPcvUE59uUe1Vk2HC9Xq5wTNti34jhYpJ2iqZxbSYZRdQv",
  "key6": "2fbbK4apVniWEeCjyyEQcvnwQE4Jr2EzhvhBLMUndRH8YygA275UzpsmTFwbUYFVeNVvWHMz1SfJVSXcdBzBaNw7",
  "key7": "4AwhsasDVPVixL5Ht1KJoWRmriGynwHYhKrdEw4bXTryj39KR8tnvvfuac8EyxnmyDY6p9d36TyGe1Gmz7MtpDfZ",
  "key8": "GP4rqehUCs487HTGHFcJqLdsE9RbXr2vRUad4VkL8BP7x9rD262uM6aCjAXKqkCpLnJofenJ9nipSEu3neUqrDQ",
  "key9": "431Km7EEdXcHHujCVoeYzRWi9dooBLcnpGJb7FP3gtZUxQJZ2aDnJZQCCncq2g8RMveiYzUm1tDUeysmHCiGZ8oq",
  "key10": "8mrW81Vaz7ThU2kDovea4KB9CUG55BwSDkYdHdVaQZ6NyuyDP7BTrBF7xLHSnhmTiD7dyVUpsNhnGJs3NZPGQEw",
  "key11": "5S7tMujAYEtP9o91Smb5t3VVCd26dqxfnDvhxUGRM3JiSDDCbA1Vv61VEAEoji8bV9gP4bkbUZmrr68vkghLCoMS",
  "key12": "3TDhiEXesCUBRuoJrrQwWas51TNPuKkqPjcYnG9o33GaaPkgR3MN8vmn3TsQP6ff73rdf7K1kjd4moYTTQtPaiuZ",
  "key13": "2XNmUgWuPBMhjiYYGJxE9RC6xo8t9ZGi12mE3L98Bwzxmj9peS7UJrAyTCkwr3B11Fmup8JKFzmvp86VyX2zVu3P",
  "key14": "4s2ms5mrUpiMpfjB4xA9VSDm3B5nop4GQ6k95Q8YAab2yWVg6CuHQjsrP72du7ee3ZYT6dWzvg3oXVVxfA4GM2J2",
  "key15": "4DtYAoWJMnwdZoPZXL4idvEFEmkTHQcXU44orQMN5zefkGFwx5dUDnMdFeweuvw1AD6LGLnYrAqD8fGyXXpoXukY",
  "key16": "hEEFbRWS7pd23Cj9trc21okPNtNFBiT4kLLdBsxwVxYjNvzCdWhhDqs9yKYM1XZ896mQd3DcaU9b6Msk9VfQ8aL",
  "key17": "Q6jsMzoRyhunveZVmDfodL3QSDp3bHYw56HKWn1dcWPjgC7bFHPSFcg99oydXzQqUjU3Rde5iXqv53nqnirxA1y",
  "key18": "3ukdsYXhDdiSaX9Ln1XXQpD4ipLJrJ4nQgzvxVT28r4qhKE4VTzynN9gKeCrwTcX2JBtYAbrBkEZTPbTSwB29UJP",
  "key19": "5Ncj64r3sDeM7EKdU5QcY5R8xUzVNhrQsqaNCdi1X4yC6shTt7M4tPAWDJ7Qr1XdyiLV382VBCkPxdtawR73PGgg",
  "key20": "37PLtrVVU6XckWNzKyR1y43n344cft2GHzkWHHo3LtYU6WPqX859hqwLSswu4toB9Am9W8tDS5mdargup1zpKjdV",
  "key21": "3xGn5KB2dcwe1qHsfNr8Gh7Xb4MQbycUW6WtgTvBLMTvX7Jti87mVAGRGr1vZu9Wzdjw1FmB1RfmrLe1aTBzudoN",
  "key22": "2YMmZCvj1sdsqk2v9xpfbcogeoH42jzeizfnnULJEn5GKQ9HN1qSvWsEzhvuJnGcZNK4NUM6whBE7tctDYZmbaSe",
  "key23": "5hFpueC6CyjM7vnuzvPpcX9XrksHwfcaVkjXoti7Bhs48J4NGqs3NAda6NYXVvEkyLeiCQMxKCxzg5LCh7PAHBtw",
  "key24": "5aDdwCdAuFJvS2P4JGwa8yh1gUAasrTCeU3W9CCPX8hTbK64cUbGA6i4by1MVpjFNNXZu6hWLYuW2Sk2SqnKfixK",
  "key25": "gqtRecbH7PKNc436GUSbHCFwqhkiS71TY3k4XTDwXeLExb11EARsYr9yWoH79uYdPNqZ744tV4Jdyr6Nq6EjEei",
  "key26": "3Vurkqpu8hTnQaWfpgGetmu9wCLjenuNJDf5ikYtvfkP3HRKHQg5pQasxRBxELZ4cLXfM4krFh3S1R4pPaK4mmW1",
  "key27": "3YPCU4CLdCwMmVPgU2etZd9GGKXBBi9BWgvDkc5bYK7AUF7cMsUPiWkLY8jQ9QyNaXRycNhs8T9ojWyj82G1dzPM",
  "key28": "3XbsfyMnfwbGoYznnWP8MjtL9p1MxdyUySwZHJtdeGbEEN4NbkoV7ELQmHC1SoPsd3AMrGTDvf68iCUh31YxZeFS",
  "key29": "63TFYfJiRfZQSUAmTeRyP9yt2ozkAfpYysncAfAcviAwQ22eMcSmQ7AaZde8LvMraRaiLMaumYasg5af6xJyBxXB",
  "key30": "2Gdjipv1PcF6iByi4m55VkiYSUw8En3vezh1pQsSXHcgbfDK8o2bwcUocnSTNc5Bs2PKC9mTuNMQr7Vy4LX249Mu",
  "key31": "5Xuztoz9yTzpcB94C6o5FX8w6RXGKcQESdHbXrayLggrsfFefrsLkfW2bta7M3siZFbPG8mzFEtP5mPq8wdZN5To",
  "key32": "3arVfQ7agTkU15dVDFf9T3NnWakgh4qbsBSMvkhPBgdtrbjeNJXsRZdsUE1kQkbS5GrCT8E5fg2Tcmip6HwwiHoz",
  "key33": "sLPk4TLNuRU19vVEQYJogCPhK8p794LVC23KD9dncCDwVjXcZNPyAQskkVGZCJ6XicAaonMQ3Nfiryc4762kMUW",
  "key34": "5SWkYtPnqfoHwRyLdrSQgqzjFC13Rti1GuRMSrfoLLzDYiiBsenFjjpwJ9VhKQFYDVMrjGb3yXz78QiRP98DQSAJ",
  "key35": "2Z6MM8NfhoN7KaXmJF5nL85LjFyE79rChAvCea2oZJddnBxDeUc7w6QcsqjJmZX7kLNKd5MNKmhJCPb4iJ6F7EbD"
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
