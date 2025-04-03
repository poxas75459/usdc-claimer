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
    "n2a9ry8CdEL2aiSmb53AXSgk6rM8CcdLrMpx5vkTK88JCUwXykxfdQ3DGCR2gBT9SM4YrLQcmuUHTagzMLcGrng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gkgv9S6iNpgjEbRGh7fewzz7xJbV39Z5a6GPMxf8DCs9h6F8LH4FmLW5iK5hVCUoZX2ubdweesWT2Q59tsjWfze",
  "key1": "8AvRWbWJ3Ymu8vYaR6obFuh4PRhUDHNH14s41tNzxdD1ag18kTFH7EHbQFzNHRoqaJn53VvD5qkreLE3R856g3A",
  "key2": "4MY9r8QSFDbv6Bn8qbU6vwkeufRYrj4x27pzMToxoQnSa2JaRaDmwzPy39hp83S3ALSVCCCAaoSCF48iNCojnKuM",
  "key3": "5pJ4jP839e7Db3pV3YonQ8DaTf5NuTN9eBGcfm1rFjeTEDwBN7a1GTkGXgrWakst8nLPdVe7FkaTdP3r3me6mtbM",
  "key4": "237VMYFMKC5n1sxDt528osm75VUFHzECpnEJEHHAGomwRWjhB3HRXrFcpUykXdAo6xqt81rQaKsARsdSsDvRSMYH",
  "key5": "2TzMsFhu7sfC41pHBcuPPWNv7PVd7kZbYa7cmxw34KdhgpF8sJbK7KJZ8msw9cb7suumFRvapyZt7ddS8PzBsQx1",
  "key6": "4wPCCtJjksJF8Hs7jdFnb5Yz8Z3mEaokfcqBrNHkafF43jh87Pz4193dohxRUQotY7PeNUxNp8AhLULnp7K5mdks",
  "key7": "4hSEsMVhSe8nDembKb16nu8cnJVWtp7demLmSbjwwC3LvgnrWes6Bdad3R2vyXWmsPbcWP95EAunUDDYpSZ1fjHK",
  "key8": "2oU2a4f4tVPDwMLPTXQA6jebH1haYxVD4ooxreFwraNaSEb8CJDYQUQaA24GfJYaY5X2VH3tiaBPNeRGhsV2G5wY",
  "key9": "2utNfVhuD2WowVW9WdBmKdpfwL6U1tkuShRFgcb8yADpuKkbAphgeqXcvRNAT6nNQnHEeFqL9CFGvzFW5yyAwEKm",
  "key10": "26C18ziZ7MCaMyzKvr791sPsrrxVQjVzr5xnUNBmFAoGQQrjy9dsfJrGJkZq5mCcHdBAKka9XevU1PX5beYaSW7y",
  "key11": "5yvrsfHbSfM8YXzLtaWee97bdGDam2vvat7iDR8m8PGXqfZ9XD6i2FAWoZ1WVtM39CwcWaDodWfM9zX2VuyjqXzd",
  "key12": "23vRPKS4ckRkePrepphhwcXT3S34pV1hR2QEm4DBpRmbB4RMT6RgZt6ZgefnSyEyMS5CJRs3YxRFi1bMVtuHCW3R",
  "key13": "5iRq1TjxFjf16eFdMerAknX7dU1Mswni3aMsENfjCixGDEevtPuaDsQjqVF9W3LtHUiy2DgWCqZk8TcjSkTrzFr8",
  "key14": "5HAY3MA6vsn7ccHMjjuxUeznLtmiAzyaFaYLBPgJuHs8sCjKDY3ZHMzX4jyrV7houXhCYa79dt8xT6Niw4CYsJe2",
  "key15": "LZqC9qQUn4edp74qU9cqtnQ8gydW68B4sJ3VLxvJEpXrnYHX58arSJ4kUSsZK4MzNez6pkzGhMcytGUAEW5dURn",
  "key16": "46yFAV3P5bwycoQNeekCCMEjMszananbPKWagVTFxWkGpD9fYiVRU4TZdttS48B2a575a5YzhjzZXLVn4a2XuWbX",
  "key17": "5MYucQTCDm9mdnqVQU6d9bKuxYg1jUiAApY2J1r6pDYrKCKjWC6Tnkv5hDnRxPqXTvihmvH9WcmyqNB3oWBZomxB",
  "key18": "4ZLEQPL9jRrh6LLeSZsVWvfcafuC8TJeesXWrDdv9Pir1Hzv6JaqK8Ju4Aw7vcq6QwyvByQY8TdRBcLdxH1ii8Xz",
  "key19": "2GmXrCMB9GriY6FR4nwTeHWKzaQQmcZdsv4qWPjeq4k9xkvoj8BvvH56EyfaZK4v9KeigH9n2yESsQqciRiCUk7y",
  "key20": "4bUasrAGd6qURXhuwLFVAr96ksH7jWDdohwkSeLoADoS3irjghk2TGYjHVBFzJ2cnZM3zaurALUwSCjDF2wNF3pz",
  "key21": "3Q2u5uav9BkdXNBWd9WuyXdbAiwBNv8TWns5ViyTXwaSZyvm1ah1Bt2ssmDCpLTesyjvtMb2ciNxEQwVauGbpabz",
  "key22": "35bWxD5D6ZFiLjwyJ4QPX9fWu1SciKjFiK4QWP3kekiJJKB3dtEFkqEyVXmUUe9FVKrz4n1DduHcoDrmDA9xLyvx",
  "key23": "23DLFNLhsCJsbk9LS7vtSTrP6dytYP4tvu4SnaR8HYcSDWEtZpTx9vCcV9XMxPv97H7MnechmXZVX3JcYcuvD2Lm",
  "key24": "4jSLFUHos4FMmhFt8Nwbn8QUiUXFr3dXmE8FBzZKcAKyZe94e5kKX6Sa1wQcd7dPFddtCxzM5xJ3R8avYP8B7XbK",
  "key25": "4sgBimcTtRaZtAmHpp8fUbgxHmpgpJbr7P7i4qr2jUJKJD5iSTtdJ5nXYQ7zdmBhfvc6cgCJvUNitG4Bzz11BqnY",
  "key26": "3egvBqEYCMgaYbRncNp8Vv6Xtx3n6nLS1zqWs1CkXK1yN9CDuQ1fx1yen2WS5DeCNcg2E4GDRbB86NpcE2cPVQB",
  "key27": "4tUeDdETrZJbAakbHWC32HtK83Xb1SwJBF7EzToU4u7SiuHao4AsBn4hguPgbXV8KjY5EJmWpJujLrcs8Jdoogix",
  "key28": "5oyTpLd88DatT9Jgx5aTwmUQKA9phJ8iiyR78AJb9WEwzQHKYdKiueuTr22hqaN1jsAcjwTNgn3bvYgLTq82vwKj"
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
