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
    "3GYwYrkDSsws8i8DntGsTq7v95s3kpYs5PG7nJvhprMeXyiHxMcaUArF5nQf64UftDvsu1FY3PWnwaTKYWGqPQDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NN8QLbngTa4DUjMiptcZkdN75thDepmtXkbjcoQYRnPUrTBTF3Yi4DJfLF3CXjvVF4e4ZCtb4LHsfjRa5YbVewd",
  "key1": "3DaSLsoVa9BG9aGdAuXC56opTyjUhbK4xjRfp2xoikqWXdoCN3Tq9qaUJWyj1VvUhjj1q6eJESBq3oBRsrASpWyU",
  "key2": "2GchXQe75Ri3LiY1NGrwZHRvLZDiNtt6WjRPVbNMSRxqvQZbeUV1VoSgZFsKFQztFjK9RqqoTTF5rRNz7fcfCYb5",
  "key3": "24AEQD3m7N871W8fchUBern6EoAPruzvptiAj1LkG6qtyBqHdhBVKpZwvM1o4C239bZY7JVUFgcLW7MDS8CqrYwZ",
  "key4": "3xiYVzuSfmRWTDbsoM5T9K3xTSEmhGpKvDztKPxt41T8YL8gNQmE1qoLbWK2j5VEDByKrPociUcG4cA8JLAeP2TM",
  "key5": "4tNJ521dsbK5eQ7SaUYkNWEfM8TJVQjmoHKNBzFkycuaqtNANDqq5oV917G1SQoLHJSRNj4JmHmH9AvNFa3Y1auj",
  "key6": "4pnvkN6CnAmzrew8VTQAmWkAdh2cy4x2EqEsHfbghtbwfS5WdXeabnu7Xeestwxwy9hPxYwVXDyhN9GnHSVFnGGE",
  "key7": "4LcBEAh82HAQY237c6ygJC7YrqY7vegNg9BTBr9hDyTGPgsVWt9WkF763QvSeEt6M79aNv4MXb559gzV5xUAZMi4",
  "key8": "4sMAgAgFHykjQiysfB4VvkkqrcNJSRzwSNsuCWPbR3YsMztgKb1mVCnJBRn1qAytXurxKBwp3xFXMXvU8QCSi1EJ",
  "key9": "5aF3NMasBCCpKSxpCDc8zuYio46MGFriyYA8vzW5YMVBY3oHYP9kJpaYtrGTpX9q6sRntAcbrHwjdcScrKpPcLDu",
  "key10": "2tykVTgSr7CwqKCdLa1wNiemkAzfjW4ME363e453yHDo2TPNZDfCf7vWBRr3AmZpPbXaFwsziF2aWWUpxCqE2jGK",
  "key11": "2cfnfii5VNrupnsgugMggDknVMYuueYRirNu8ddndg4g2DevQdKdUiEC4RdnKJndaUvBSAoAFCmQhGQ214ScccNp",
  "key12": "2S99Qco2gexNk8f8NsLK2emG54bj3EVnAwHTXL93Z3PJatkQWFBnPQBVrCU7a83JHJ8BUa9vFyRB4w5TPHfSiXJH",
  "key13": "4wMH4nVd2guBpsNcLftf6zH4tidNinnkqjZtjpGrrmSEzhmL9hZz5V1oAVwKNHsxw4etBsGacXrdRNpVHnMQYFut",
  "key14": "2W5yrYAQuYfHv3GrhWnbHQb6q3ixPGoNCTCzxzVVxcmyce3wpthB3QULLVi5dP5gybjR9jDP79jjYm9YZy9jVWLN",
  "key15": "37dRyuNFGqjTUqeBYMyJMqVhFyPxKpuK7sw29numkeKBDatoiyEmxC3JUgDMA6b7GACazDiB62mphGfXsvPffvdd",
  "key16": "5G9PeFtGevZTbW7MYPTTtCMeYbBqkAPKGKpKFV2CcWkhb4AsMLPxzFnWTSYY7Sd6t5XpWWiUuG7Z18jxpNkaU8JS",
  "key17": "5aJjGComsgp2PCXj3NmpqFGW9bDnYYhW1Q2DCNs2ULX7LJsrJyAh6zgSM4n8ibfss3LF1wsnH6dmdCRwGTZDk26Z",
  "key18": "62q6XBnthAhX1RKpDqTMFKyoq1kGeuRz7SWaKgxiLbA8eSCtXxNJ6cAk7asprMRpXxFzQwkc9sdjfcr3wz2BTwkK",
  "key19": "ThhrvwTWs7TPajvGtNBvjE1Tg6Uk6oAKaLrs96NrJLGGqvJVCjExPXbodd8voMoNh3s4TjWU8kRL9yJ9ZSxpEPW",
  "key20": "2ixmU8u6qkGhLZGZysdYs3zBTFhP5P53ax6xE31J5HGRrvvdrYSPQLCfP8epGmL63YvpCga7LNzDXfkksat81Fo5",
  "key21": "4eXRsUKTM8hisVfdvFRTd83GN5VxheoZ83TJYRy9E7Y6f1JPpixMeU26KcR2R7qnyYrJVMqhMfUbJBYTQSCBsazE",
  "key22": "43tnHfRgzKPiVhfx1iYXmACypwCv1TcrVP3GhEhp5pXmGRzBgvSj1tH2eCm4gMgW9PUH6xiu5xWJHU8JBiMKJWoy",
  "key23": "66QF2pxwvCHfU3sy78KpefoGrL83g5z5L2RGkntTTw5PaNsMw86h5cGt9Ewh531DxfUi5WrNKWHNfMKT88dpdMUJ",
  "key24": "uS2mtemGHpxfqy8dtPkVP61ibZhZB5XqGeNJKoASUjW1ccywfKwpuCDvz6isEeeydef1BUnHHXg2qvJ8hAPujMt"
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
