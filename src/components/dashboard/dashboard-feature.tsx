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
    "5673J411bzXvUbKfP9KXkyG9W1C5bMNV2qa5PtHKdmfkfBw7CEcw1pKWJyPfBpGsVmDbHDKciZG618aH9E11bPH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wT8WhbMgARLYLFLgyctTFERqgFn46VUnA3BGTB9iFF2L1gWEoiWp4hLQqdqYxBuzJFFAuzDiHYDxaLLFUq2wCFp",
  "key1": "38kYMHB8d5Mxh1pB9ch7snYSRsXxtzDNCFYN763aFHHfHEwi13nwMW6DMT2GjgRCrrZAmsrD2EKUhAfaX37kWvGn",
  "key2": "xhKncMXTHATGTNFDRsKVwbj498VVD3JHCa35ZNtp7BX8vLxZfZB7yzgxbfupCKSVEzPRjxQbgr66wZKJHLrNCoF",
  "key3": "5QPrsJc9ybQfRJB6zt2GRnEuN5ZuDFHFjsUh7BtQomFBZBuDWRFZGFLsHLE5hRNSp4rTdwtd4cdDF2cq9PzZNRcs",
  "key4": "53qhAAE44REmD2vfzdd6Fv1XSE23fp4e8FTNJ2q99MXFXEFCystoaBD5PuyvDHn379z8BEpCFXUtY67CWxT6rWhB",
  "key5": "3iTyuqCoxrKBAXgxSBwSu2LqYvfFLXx3umMa8CBGqRN8vz7QrM94kYTNn9hSBz5iQcPcymKBBReQCo6jDtV7easE",
  "key6": "2bhxnWC1vgjducLfLCfb82cZBQiuQDQ5e8sXCb8cDYX4cHk46sMMNvkDccH37X4FW2dvPsQgedxhwusEaZRPQbNt",
  "key7": "e6kJUc6dTgKGaqkHSp6sFucCqeMCYTpbhPdQoqpQbPcWencXQUwsyTfBUdMA5fw4YRxhPsNqwrDeW2LiiQQHcSA",
  "key8": "2GYxdaRLwabQzw3DP74t9sc7V5CTz49vVxPpjv76qfRG3VB4JhQ8WBhvnpcx7popwhRyd5RbHUdbSSvJ4pQUztp1",
  "key9": "3UH5WineYmgaaNfcahhNzsBMvC8s3ANKxtUopiQkqJkbiQPCdnmptvGfgJZL7WkkHxKaaMBe6R9wtxY5t1RXSNBo",
  "key10": "58RrhL8oFWdSGkejpzRKfNzBfihGvpjctPii7eYn2YyNaBfHacRiYkrpU7q26VNHytAbMMqrUk6VZr4rkoZ4AKZV",
  "key11": "2vvFtJSswPieBWGKGQ5hFzDqnYsVR4VokG39FBf3fVTMuwQ2ooqp7gFhbNmQ48NH8byJYnPZ43coMQxo4byFrLhD",
  "key12": "3cDkDGs2kndHcs2kG8G2o1PZHRbxDg63NEsw1LSGdECwkyrF5WYpCxpA8BgtooRJ32ie2BxGkEZVqyTXjaKFSQGv",
  "key13": "4RmK7Yyq1xWWFnVrqvVXJThKc7P9XZnDDCdRJnku7e8DkZE4qtSs4qv4ZvViq6VaJoPFhVF2TmZamS5yByvR9MjW",
  "key14": "q1QqHXZBvsG9E19sx6c7anEHESPxRqbmz3mFtrji1GXbbMR9Z9QYFGehGZPhwaW2TGpg7MrCb3BG3KhBZFXqCg8",
  "key15": "62yd3EzkAhWABeYCYGnAooNWVAsvenbnLsr18oUT61q9rqbayedu5rsZq9k7hu5stDmmSF75r9Ht4Rm8fudNuhCB",
  "key16": "2pWRVksskwZMZYPZfpBjnB33XGShbxjgpYnPoUwDBwgUdvU71jpZn6LNaFzjdXyXZHPwNBkeoBTDbgJ9fFLXEUFh",
  "key17": "2nRzzmqwjvuCn1mQGNbX7JJ8dCiEFBATCeYzkcfHgbUsEjid3unUzcdexcr1QZzn4voJhXNVQLtmPSiDtH4m4nge",
  "key18": "4HN6uVBJ2fSmyumWT7oZVPYHm9kkdNsq6Vco2kt7NC1bjonDEzPfoJhfQymdBsmFbVV7sfeRP6AKYGsKaG2ZTFVy",
  "key19": "3mJ7i9WpiwyENG9Vesg7yc9Z7KxRQqVPX75dWKX3QzHg5tnr4AK2oiWS2NL4b1WZesETdyaQ9a5e87sy1j4HjJxd",
  "key20": "2exAQMdh3EDuFCghAKmMegfuXpGCtwUrsM4WHc1HBX6SBAcbttu1cU3D1P76nPyCDta2f2asjVVmmnSE2qWg3c4b",
  "key21": "4ajWSn76coR9vrkdwFvaQaN3DJ3RHgRLYEuBkhc5VzVLx47SDzLsBJYj7NJb3gkGPGhtHhU71kGQakFoEbKYQLqq",
  "key22": "3DwH9XTFeytwhKWCVrYFVu5GHeacw2vpJBTB2DEZHySbFVXgjVGaK69J38wGBBzkX8JHZQjcbY1oTsNp5tZd3CNG",
  "key23": "5pGnKKZLgYc7DvHcxTokh68xPwBEAf2Ajjcoa92uK1xnRW8LuwyLVQpQ3qR7SjDqPmwr6ccC2obbQ3FBWa9xjrVw",
  "key24": "3RfenXxeLqKcWXJBXieLsCbJ6ZTvwh67FEYQhXXVDJHWLR7g5zRQULwzz2xRLW75JzeCtZgQYva7aSJhKnBu54qE",
  "key25": "QSyyTfCCzuHifKsh9D2hbL3aaoxm1DgkAwHuM7BVVbKHQDvfz7otNnYxJVCV4WFHdKTUnouFtiMQBj6cGW4JRLf",
  "key26": "4zpkh2632ppunqS84vqHjcPCnKQu94YU8emcC3Mk1qiJgu1Dk48Rih3P8GoKUE1tZJi55xNbLpWVDRXqzcWnGvTK",
  "key27": "1UXNDBe4MmRqGVFrAmveVkL6NUZ7LBe29Jn4BdXR9VSHNqZW9kwpgm7LDWzCzo6zQ7s4FbwaHF7cNNtPUTS5QB4",
  "key28": "5aSzQyJtbFJHDtG6myS98sJY2v2HYtNwgRa3RRTWf3ybgUNN49Q9NHrpDSumgRGsSusBBSqdgQiJArcFkSmu4WU6",
  "key29": "zQj7sd6VjVUimVNTdPG1hiJRUWSHVqFDNwnK9qYqbKf4TRYPq1Cs3cEFgamqPkdSqgHpMKhNausXQ6eYzrdJZJA",
  "key30": "5tDEKiwZg9Mqs2kQ6VtHdv8HPTQ479sEHQz8R8BTgZrErCwLteVxYCSk8T5cvjZkMXFGkLDmnSAUxbSUfD7W1RXt",
  "key31": "JNaj37s97v4vXLCb4TCXLa7YLwtAdsrimSeBj2v9jVCzhz7L2rho1zr7zu4CNLr5WteFnLGQhF2waLKd6aHdCLC",
  "key32": "4NkCxKSRrtjWmH43DzXYHjBofPE5vKytVmijG62d6JeQ2SCViz4SZVTFbUFsJN1LuKihMtTfJS1o1Lg2P2XaYsg1",
  "key33": "2kr8BXnFFBMkVSrVPPNEWg9SH3ixe9VqVWLnN6huzTLmMZHrVjjtHtnD3wVnt7sS3fk5jSFqWJGuvebtVNk1M8Q9",
  "key34": "4KE9GzmB8dveNcGcFVX2BdkpCFC1Rb1fLHbpKAFVFXpRcgR14tpYDxzvSFkUXXRXeKojiVh8kDqv28HWjNaq4Tik",
  "key35": "2waSk2oadez3hqc9mkvHF54YXd1KzpGmnfLz8Q2UMQx5U3MoiHQyzPujjZDG2EbM8w8zYYg4TkJLbhVaod1tqBHE",
  "key36": "4ycYdXpGon5pH53BUhpnuRWWNfmX2p8tj5fLEzDbPT45obnCzjkMGjVqrN7demWKA9ZkgJZA7xmpRdsN2NSdZVRt",
  "key37": "iahypMtxsakGf8RugGm4bkxn2bD1ii4LrioMEkzvYX7aaJLGEW63tqg7QLdbHTSmzJPeC3zyrUu62bcJN4EaZPR",
  "key38": "2cBWK9AHJ8mQNSQeNRLL8x4PSoSGusLUWBgPSN24os5mo8GvBufHmewG1v3iweygnrqoPC6aEZihTERwj75qKasR",
  "key39": "3i5yuvwCYTbDJNiV88WAghNQH2asaimXnRMVoYzaJFJQVizDME7d8RqQTQMgAhkj2CSw4mQVosG5aw3RBKt1jTrK",
  "key40": "5D5qU6CiKvQoQQyY93oUmdzU9MfeRBWT4Waj6MYZTEex1nc1noefFtFH8pVV8owCWyugWAsqFen89fS4ZN2M1sS5",
  "key41": "3fY3tqsHNj7Kjg8VyfJB1F197qm4JipgZccraidPD3cb6zeKbmvDUjAF6uAZm8RUYEjJMmFQguN5GKYDNmyNw7F7",
  "key42": "5aK1X4frcZSDzKPBXEaovxMMCWEWrad8pmD7P3aswfNVVUd7TLYh7wsmb82A4JHpBaPEk7U45AMSb8US9RqyG5BN"
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
