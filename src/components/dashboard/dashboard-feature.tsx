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
    "4FutcTgXGB31PdrWzxVhh4Va52EkStfamsKBFDBVfhpWQdoAtfzsvSqmYXAATEYrRx2TRfBc9rCt4iN3UnNfFM2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XKVWTx5f5hZXVPQLPJNWqfsWC7Sg2GdSheheVodiQ5JdvcK7gGJhuNYQVuSAY3nGCaCUn98eqJjLqqD9vYUbu4",
  "key1": "5o3freUXB3RkXjGxPa77HCGL8Pr94Wo7cfV78U74RhDfcmX7KymB4Y3axPfFCzLNXBeRFXQHoiT85zNjjF3Bx6vv",
  "key2": "4JrGFu6MwHnWVwPS5YBKmHgbwAMA61EcazmutgasVeyJx592cxAPxTNd4YTb3kiNyjMSbaoxnPWXcrFyJ2YnCrxp",
  "key3": "3eb6kA1yWnaB57KRq3Ajbxw7MQhxzd4sehwrAWD282xB1NnYn4mvrSRGpetW5Ebix3zgoTdQ6DFfK5s6sBEeVHDU",
  "key4": "Evk1wStSwyKA9yqQ9mXstRuaZGXCuHvCaaeQU3ZsLSrcjePjncvbkBPw24QwDGU4XBzaUmUKs86Vbo2qfBt2Cru",
  "key5": "3jfbC4yEAUJ4YZS1DmPDNmqGd2dosaTJaFmmMxA9XBcHxXvvbTnWJqEsBTi5gqHWrhe6MsgYp5qUGAwVc5Wg2UUS",
  "key6": "4DeG62c59Xt31o5nCrVyEtWQGiwk5zdk1DabNHTTshNWzdUgazxpqQP6ihXFCQEbqMgQniXgqJ4nrvK65iFvy3um",
  "key7": "2USCS4EV13wGsD33VXkYRLPS5ZfoKfS3xVPA12FtGbBXriMTHBsxHXpHhAcKHs6VNGU4HruwioJ1TXdNHotGgRxJ",
  "key8": "y1o4G36RwVcaLGLbaFDmheL2XQ8hA5t8u3pgcQ6SF3dz5crHWA62fBNQCGxJLzE15KbepdYNLjpUjv916KKAJS8",
  "key9": "4o4akxBddXurzQieTcVec3ViBEfeiTFfzTZmckafrubZCUKLaq7WEdDBn1BsFovypk6akngX96XXzFubo1J4MeWN",
  "key10": "2Xnn9bJniJXnU1gyFzt2ts8uegoLBDo4NeLgGkx9cYNoVGLbHbBgRyftzhCUMQWfLiPX1DDp36FkWrhh6gForBen",
  "key11": "4ua1tCqXKsC3hCsmUg3Dgs3T7wAMcXbUacHg1waHS6wJacbG7S58qCWZLjfmfheZYhjRpqj6PCrJGhPu6CuEgPZa",
  "key12": "4noT5cKbeWg3gjTvJemzSy2FxwaS1Qk3FhauP9mFDWBLYrEQjP8HM7hDua4vXbXiWnPFimiord7KiExRRonnL3Fj",
  "key13": "4WtGyoArV4bN9i9yWvbq1AJb16mDMEAD1YkHqtcQSKekBK3Q2n2MUve2rcxJXrRC26HUXKsBQg3keLsxUwnMD5yV",
  "key14": "5ghRKdZAWJnLXtrf53ok7TfvSBDwHQHfuMaxV6rQKJB1Fv5xUTiEfNq3Q75sy5yk8Ub4pvXyX8Raffgah1yrxAok",
  "key15": "p2H2FSyLY9Ukr7Q63UhVLrVp1WP61fnpLseZn4HJNS4JpGZvj4HaWFE9op1okHna1zxkybH3Jz4utghwp5nppjB",
  "key16": "2gkw66qsCMaiNrYFEBWWoGg8hnQnxFLDH6hfLkTN6WtTqPArbTDHHZFJB9Ctv8EVXwhtKABcJixriZFwStsnJDz3",
  "key17": "3L2sD49XVNn5s5d6proVmjvh4RYpwAxoucBDjFAi3PD6kZayuBaud7xfby6UZAg7s2STw9nD2516oL1fxuGfd5Dp",
  "key18": "4epJcThnw2XaJ8y6k1Fohe4zMcnhMTaU6JjwnpghSF9rjXNfqbgumCody34n2bzPHiRv9WFPHMqGbEnhAqDYRqaK",
  "key19": "3T9zEgcSmfBSzyJtRxnhKbg5cWQmE4URqgGEoyVUdq7kPQA2c4jE1jdenKJKLZSxujQbMqgiNqbQrSN5NEbkMjfh",
  "key20": "3TdgGx4wW1A1GdXu7UP1VtJRX7zc7hQibEsodXC7v4Sijb9p9eVyiv5tUdHwazdwFfGURnn8WtwGMuooiU5W1eb4",
  "key21": "5i7UavtECo2K6L4zUjFiadbdCW96X3gnHV5HL7iyjcpk2y4fBjoahepVmU7TzuYF7FHGkEW54pCANLtgeG9UciZc",
  "key22": "4j1WVygRQ6DK4xnPGToPSfQ24QAsTSRmGZrj7RZvohi8NthdG5JxbLjQSnZjEKxqPmp61gpyDnHaKGf4cQQk5e3J",
  "key23": "3WncKt6d6Uekts21QNGXX3vAnFfaptLqyY8VMqQGfsYCQGWvTmFjPpdvmNE5r9Eza1nGmTyuA1PvqVYVmrbBzn8w",
  "key24": "2iyaKu4XAb2uoBjFzv9kETe9vCQQCcwPGDJuzLCLzv1NY1GYz6BFChrqHinq58VLMBdjCgoWu3BTTfMXu7y6Fw1L",
  "key25": "ZjfjeXRMfYshbFchXXetfPdET4TAgbczFV87zgzvXoCJjHpHEkh2KZRNYjVVM6YKNThWsS96f1sGPQm5umfkPTk",
  "key26": "3F5ycA7wb6B5zsnheAoAJUkt2mPBofckqWs7rtkvfZUUnjHxPEz41wxWyq6fuik1tVc5KuoN18kGu6HtMjUGWiUb",
  "key27": "4qHAvrrUZNj2pSKZGkNvyShd9mKQteq8B5k9gyDGDebi1eMMoWGXVi5K3suJcHHyZA4Q6Jm1TUFNckNjha8GWSwi",
  "key28": "4huHU1dAVCh7WqZViMeRWVLHFcMJVPe2CvraiQ81KSG4HtusfSdJ7b77HPMfpQR2yesFqcKEpWtLGTJ88aai1vVr",
  "key29": "2NmPtwi5XnLG22Pfdifvgdvyzer14mdFDZGEahQ9u3z5dvUCR44qSy82V7UP3WJwni9P7pkQiD3egy6QsPbwimyr",
  "key30": "4KuvrPrEdKZvX7nvMKvJzer64iuW8veSbwiaaETG8ZRMtYSJ6uB8kDjVZ7Y5X36pBsx4K6HPxUiPCqCSCJCCt37S",
  "key31": "5KjkJyAn7YpNVQ9VQWRaD9tXmAZ4BtGYPsJ4Q3BuReTfSQmV5DqxWF1ryyPbLmPpVS8k6EPxiaiz3rn1QMPSJBVe",
  "key32": "4UgmoWV92BkrvSRCQoSSGjDBCU5UpAYayT6e6GN8a7CZEUoqUA1vPPZ1Gt6gBSFJHZPjUoNTPCK1oAv4qrtKZxTF",
  "key33": "3VyTDvp2YD7mQrtAqM1iKMY8z1m3jAEyDfEoqtVTHrmYgi6pDcXGXLufZ5ByC8NCX1GaB3SabW9sTxagBzTVrYWw",
  "key34": "3bDPddZH77K5Hmjuqno4kZ6nj3riNNb6HrTV8f3utTqFUmsGrnK2RFKS8qXwKU1xf8YUj8Q4UJ3RRi7skJd2eSQn",
  "key35": "27T4bou5Fzgm75VE2j6zTzsHirN4HQ3zRTb19yc6RTaEMwMF8RjhSZcssjoC55zQU5ohUmazCMGyuobjWQhfpQfQ",
  "key36": "5wBqEDHqfuViy4eUdeKLSWcqJK6FGAiB7nHBpoxkQ6Zk7ZceGeGgF7SzAAviBumiGSbee6hPhzmZrgqTB7a2eDmR"
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
