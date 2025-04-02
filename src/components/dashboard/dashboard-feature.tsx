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
    "2oefL9hgBf8AajVSRu48VDWX7WfFK14XjrGtCP86n3mu9rYw78cJbnVYJ2umZimwHP4g15w9C2QiVbg9s6y15Q8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bS3nd69s3wx4kkxFn93QR1vMLWGG5Y2zm4oAVzoUYgQrvsCnbomevPStRW5ibjCaKHHEoBgzJUjhbX8VCaEAmV4",
  "key1": "3Tp9cEx8YYs7Yx3zxhGFAAdg2LFFbPZHyjbjqYXinwhwxTZx3dfUnavFYvsZGEWg6JPdYSj9zPPrVZScF48RUdvd",
  "key2": "5kPYG9awvRJPmM8BUNxvXV7yWvAtQyRzK94riA8J1cXYXdCBJ5zXgw6Rgqfv8Qun3LuNugFWQV2n4aoEV82d5gfu",
  "key3": "28LwCCgtgtid6viiJnCbq7o4LXF98ykjHBw4krEpg585u6pURpBke7EVPxkK4jRQyxQjYmAgKGNvKYnaDUpWJUmC",
  "key4": "54ZRDMUFxdRm4gZgCApGthCSpmzzb9wA3mYzkKknQnJE6c1oKYUrQ4kTeU3QoZpvkM1dPnAsGr7ubF8g8tgMJ1TN",
  "key5": "LCSr2sohBL3C34rMiPjzWBwPkbRfnSc7PGAoQ3FX7r1wQFRyGkcMUw74jfyJL3ZSyM4g1X2LeakAvLJENDyc7nA",
  "key6": "3GVpASim3gqLyX9c9fevDW9AQEnpnKgguAMTj11wEfZx6XinZk89kQ8wjLTaqmTbaWup6fCWHDf8AtmfvwrnPSiV",
  "key7": "21bc5WwjiVNiXgDYdEN9WtbnNWpndFKJyU6hiucg3a4r7YaHyGb6D2xZZVjtSztGXf3PnefbuzPya3jADwBwfmBT",
  "key8": "5VGoXWHzXZGTSgrFFFoxda7LpkPiqtNJQRhufYatNUmZFmLbNieAEc6s22vR1pdAsY2KkZ5Xi7WrVwBLdysSL11B",
  "key9": "2u3ErjaSZaFSkW4R6VygZLnHfxrLcowoVvQ9KndQ6YnP292J57eu5axHcEp4o492pNaKJy6vsBpkyYeUrG64rBwv",
  "key10": "34QvszteLTn6gvDPuqLq2FF9vqmbEx2AJTeXvgKEpdGxrkreLtNuDZVSVueZ9pdKDnbHQi8dCRKBxFhzeTDVRDQN",
  "key11": "46me6jh3QgSzgnQq31sjxMcekYTXFPgPbgtxeqRdw6gYgzYYCtuzB1EenSvA7kSdmeUCgo29a884Lj1dKqajDYzK",
  "key12": "H6yHQMRFqYpZ92ZgEuHXsa7CQtfKkYDcfZBcSE68F68mDUpqGmbzi4Jt8Uhxx4DNx5YwxtTFHTGhqdGszwsjjmf",
  "key13": "8gna3HdaJEm8mJomAFkZHqKTvA4u5Sabd8ujfmd127gX3d5rLiKHxLXzF6VLgy8BBG1p1M3SwU8cgzdvYLwGW3r",
  "key14": "3CNgXUyWpdLuKMaQ2WacxfGNHAzwmvcWVaDCphLW33T9oTpjEooT9Xiq18dHiGxEvFLSxcJ2Reof5vPniRARK2SH",
  "key15": "33UUtaFcDT31RKNMgPa9puUkCpMgq2fyti5gCHt3geLZ9dqqKS5nLf9B5ayDcWqZJ9FkiQ7ZQMNfVXhdqNBrMgFi",
  "key16": "2vLUfDeHYaskJLi5p1eMAP4wpKaaecifsmpoM9TM5qJz91Sk3ybowVGFusgisUo8H5DBSZhes7C2VBxxbSNaZuwG",
  "key17": "4MFNYD97CBaKzgske8qZ6Wc575J28tZDcXcy5BDs9yoh1CXVQTRNLHHfAYatjg9WVH2LnuDtFESzeaNrYp1i4HaG",
  "key18": "T2q2Q4x1QnKGkeyDxGj91Aap4TxWdAey7n6QaG6iRzivpsp9QbtX9QquJjgT4UWF7btwaZLmrW4NyL1NZ5BwX8P",
  "key19": "cLajH46LmE3W67ERMQXEyfdywi1wzh8GgSYpPSz3jAW8fWBQpYQBZ3BEt9UtGaKvsz6y3d4u4g5VxLPbs4vNTAx",
  "key20": "cvqMPDfLvtAx6E4HznTDiK1RMrifSK98N7japFcQRDZHo4gwauMox7boGjen9rGMwJq3csPNvtQ9hTyrwPXbzHN",
  "key21": "2SpgZA6ZDcD3kuHLuKn2MkdvnCHmJg11eutRY346REDynX3pGuVDwVVm8svfkMeGCUifbrxujFXQtqJrKnQQGzBh",
  "key22": "3jQxn2WDeJC5nHU13P5GZdhWqULdZDrd57ZZkDAxf1kdiS54d5uHueLe345EgvVTHhDJ8zhwzGbuk2r4ak3ZALgR",
  "key23": "4Yyn6tPKzfY2bAAJ1Xu3RyNRBxtBRg7DLvVfruhADieyNRt8iFvQi1Nj27WGoU4C4oxe9nxz2coHSR3Cc6cJ29W8",
  "key24": "5PdMLRHGPzkTn4e9t5NPH4kjAT3MudFLsFG5UgnKRDD2PWESqsUhQJg4BipFR38wzgcB5J8DoU6AfqGHxruH16P7",
  "key25": "b7fCqNBxUqX7UM7dY3iQzNpS2eymHoqVjR4bvkeowifrk4D2uunWqUDKf8fV7EccLSBh4NuJYPHMQbdeqY2mreQ",
  "key26": "51JtVw7DHxPEcPjEmMz7QHANoi4YqRshCnvZUmNPT4c4heq8cyr4vmyDKJNYWzzfmB7zRErkwoKBWBut99XdwwHZ",
  "key27": "5eDfzxyUEhT3tnTmzCXBHSGMN9D4tyvkRSq7xjrQYfPGdgvKrcWhD44mapkZnmaRTTHHE5eoWkbDSAoSgYeYVMt5",
  "key28": "2U4ydj5F2epUnuwFYgk3dvos1sd3RFEF2NTGLZzmi53upHnAveX3A2RqNKat9oYqPJ3Ze4PmHLmD8vtPdvfdY6Yo",
  "key29": "5pE9edRkTs9virafkAa6PRycPhF1TLYJ6ks3zAAK8FcSerbdwsRAgoxqNugKGqrKBe8MQFi8mfdi8Ve4mk1Z9Eei",
  "key30": "9ZcSsYkRnqJAJVo2cfgZ1tS3wq8BTZmyVu7yjZeSrM6qJyutKNnrTAqF6rPQ8z3zJ2YnWPaEDwjAy6D94LcUpxW",
  "key31": "57CBjMtJhYDsbKG6BSMwEFbojc5f5CQYitKMz7oDzHni5kAWcg1Aqi4Zhrbk3FLzcmqocsLF89t6CmYh1vr6dQKM",
  "key32": "HGsR4CxeFCEijtnw4Gn2R9aq8mCvRghcXFjjWRYQR9kMi9DevX4LJb5H6Z6BhNpkacMjS3dfuBdGSbktGX16GyT",
  "key33": "5H2TDvhcVYC43oMXKi5BitodaJCMChSyDmKZQPN7ANeTVPHYGNH2fHGyFBMXfTk28UWmojGEUt7RzfNFj9wi6vxi"
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
