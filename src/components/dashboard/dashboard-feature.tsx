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
    "WsbT9XYjTJQNrEJGKYqweGhoZNDD8gykigmFtx4b6yTQguUQMbD7ZqvXEvWsqL5sAxkW4sTWB8cw8wVK6fCrMrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yrp8rnsWX5PP1P5j5ovGqkREYpeQmHzyJxdC3jwSL7cLWzEF4LApcPVQViaPb9zfwqMtPjvwbbKAovSyqj5zeq9",
  "key1": "PWwjTLkQZku68edgcCqRazM9skLyKYiDsAFSCpwczhLmcfuj87Jr4bSQ6ZbA3z1TJfoujTjNnVTsKjerzTYmffH",
  "key2": "4jAxmTJAH73D5zXbQws9G2Rkcinrg27oLQCy87Z746HLAzXd2Dawbx6ZFDoepxuAE2a1rtwRqNrzFzFyLMB5mVnZ",
  "key3": "2Pgb9yAXHjbdLP5rGexBvrJSnWrmf5imSUU6SiJ3mekU1qbzSDio46EZ5NCwdEMxoodUbpTEzCVxq6WzYaTRLkj2",
  "key4": "5UppHh4wJG7bixvUPtF7WLDv963iSM5nA6Rhwtim8VFhrFh7UBznvCutx8scvxWod5hoWa8gvRBVCfEE2nZox75y",
  "key5": "3cU8Y58jW3gUGg9w9rz828YdoAMuuMfReojQawdHuEwh5BuuSETZ2kXwnRJRa1bow8gfG9dH9kbbpMmq2cnr5zf6",
  "key6": "37CkmzxAcv41Je28BvSVGa3TQVBH6Xv9uLhrcuzNb5T5RRA3UD26deMg92hD1dx4QEUG2wLAezRPDPTciZCG5f9k",
  "key7": "C3shhU5KrsBmTqpxoATfRCtfR85LeqtpAT2H6AF9hLE7cSiNmmrqCNVymqw1a9BJPWBe6HpjuNhDDtdbjpjfezd",
  "key8": "2xx7ikej57Nxyg4EUArGjpLj185UFjopfXGij9uLYJ4fgDH5TPv965uJ15TDbTwJY7myvbxxEVAaEnfqCfd6u6rS",
  "key9": "5JjrQFs8JnS3sCqYUokW2MNhsEGJKyUwRJ7KnNCrDo9EKcuRk3byLh3Rp1VgJVQgs1adMDN2jxtGcwHKcqEkTr6z",
  "key10": "4RAvYzRxwQLBfxCzvfEBCs3YeS5DvUTwXSvKEtBao6oRnDwY5j7hFBw2GzhAMjxH1hs5wEmhDyeUrPim81QSy4W4",
  "key11": "DCjC1v4NHJuvJxt1LBtzP7JHPSEpcu7QbREgKe8nNVk91JWMq4j7vw71bKe6K5JFDHfzL9UWqaVLevVrizcsFcT",
  "key12": "ZGbcNHXjxTVi7KhNzWEFgCBzYRBuhxZkLfdaFB3ApnXv7Mk8iHcPDRJVVtuoHfQhETZeoC1nRcPazNtEffDfDQr",
  "key13": "5ucfygo2WqhpKvMjBnqXZUp9Q6mfFFM4746G4oRxMgw3wJM5iJhCB2frVF6z5x6xNew5MMG8DTRLo4T6gXQK6P4e",
  "key14": "Gk8QDUBxz7hhNhmQE5DpE87ikQ5hGV6hsQHcy5q5AKffeB8MQ1KfQ9wzZd82zUkEoxFv3tMN3m6bD2BhVJ23tf2",
  "key15": "3dJNEZa95tQTPJo8uWJxBLXsRV8MAuxTuY33YTou5yenPeLEpoaBgvHFEbQPwGCkQUUQCsEARgyVbUsQanCWH8bq",
  "key16": "3AJeeo7aenWzXQw7VdDRExxZoEcF4SmTMd5SQbByyorzCjavhtTEXrXqnWWtHxx7HE7r1RfxteL1JBrVa91q1ZS9",
  "key17": "t6Yk9pgW6NyELSXLSCFBhpiihxBoivEfUGk8r1yckoiQ5Eyp8x3GA4xuxPHjCTMmGGfGb7EbTYLpA9piNYFp19k",
  "key18": "3WtyHBACJSaDM9tRi9kPNoDV462UeQj7oyEj56QkNquwu14XfKGGzSLyTBrDCV1cmJo3WuMNjiNKEEmLYcgFYRTa",
  "key19": "qaLfajw5QsF8axV2LSquztC5PT3PDKBZGGosapSKbftcxkS5FfVmQa76Qux34PcGt38gPrxcR5PCHr7GaQ1x4r7",
  "key20": "uwaSneCTfx3kntdMvaDFohRbgjNwyko9CiiRArsmr99AbHyrRW2evE5ZxYFSeBNuDg8SQHwxXUJA9XFAFCMMmzd",
  "key21": "65VJac8Mdb9mURaEJUrkWkmiaLUDobzrKQW2GVEhty4oocMeoAw1V29TVNznqttx4U3rq66GcS72TRVjtgdUKK3H",
  "key22": "5UvLuKWsDrUX72Eiwjariu48W3JswzXU9yL3cGjCgA6sriHJ7u3bbEnnB9n3QBsq8G23WJsvHjKyvoYTEgWYyVaS",
  "key23": "3yQn3e1quEXN72mRsQtqtj2zEm93ex9CkGuK3kKFJwoAPnECxCoUdyNdYVxzyDq4ypHcq4XekuzxkFRaMjKCJMen",
  "key24": "5pRoc26yAqD68ccVLPeAX7fu7Y1ibwYY2D7KLyRiR3Mr7iusS9syU48tzhkioJAAFBG4S47nVzkH687EnnaaAWeU",
  "key25": "5GS1buPGo49YgWGkh38qmQHi1wBfCbpTpGGJfpxeZtweDQCATbz59q9rq5gvY6jXm1DnnuFxoq8Fgn8A8DJMmczP",
  "key26": "3AzuqFV9WunDUgcDYHbaz1msUAMXVAUGqzMw4BU4Xqcr15UZRib6WrjtnwDQst76RRKkt929VX1ZzhSbqBxCkphm",
  "key27": "5NseeHNyxk2djaUNWmHCGNEkvrG5VNwrV6ELWM7eGweAAZb4qHUahfbmUrYh8nmxB9p7tnZCLK2pFLfWQPUJ1edZ",
  "key28": "NAS3yrZEArNAapL4DsGMkadMqYxY87Y1P41gKPohWHHGJTmMa9noEQVhqjfBFjw6rb9d6Rq56PaVN5Sczs8emhB",
  "key29": "H29hL3FDNPsqAYCgwP7qp7CFmq5JrtfM2aLZL5bYuVngHHJMM2jKyyPWeHnpd9aTHZmd8v51rDsT38gs1G2AyQK",
  "key30": "3UR8mVzpcga91TXZJ2akgB6BFc3xGHvBkbrEkTN9tt51khc4MyRUGDQQrLiSKnwhE87ukM1f17QGEnspgaMiF83u",
  "key31": "2b5ECH1G4WcJZYiWrTbBaPPedCfTbQFnyYCV4Nby8cNPbrwyxCW1LzqqtUqxVHGUePPfSDscyTpsMXscJumDWdmm",
  "key32": "4cBy6j5FAe7by5SR7gtmJRn9PknXti1rig7TsxCkNptajjatZq32JfFWzxzsn7dBFZHv8dttxZZWWqNnZzv4M4cK"
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
