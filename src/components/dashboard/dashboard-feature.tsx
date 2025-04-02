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
    "5DZMojAfRDyudhUvt5NhN4kFxWGmxLhP4zQ14wyyPcC8bdxbZvK3fTBeag2aTkUNHraUVd5kazTXtszcYhH3eyRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBt2zyz1e9SmakaAXuxXnun7qjZ15qLBNXpHamYvT6csFZ1h1eBcFKAQqsWK3PryagW8HTM8zYcSFofc5sfLQus",
  "key1": "2WPVMH1BJAkWoaLQuaWVCtwvTkVtxEuL6G4WHpxYKeF5U4zTdmWAWFfAZve2Kz6NJeEY8Z929GXKVdv7ikRaumVi",
  "key2": "4RjmMxFazZdoBLhSF61PNQBZYcYepdjCSXvTdj9c5W17VkZMCHSoqEhA28H3gX4BJZQEYcwgJaW4A5yrWb9qjPQT",
  "key3": "5Hbq17LusjNRNit3qACBDpnXTXttTi5nzU11B4SpTCimBxqnajFsvMpVeLCprSgh6KrCT8fCa1dAUG7Z6Hocmo5u",
  "key4": "awUq8QLpFLvhv4Gov1gN6BugHZcien2S23tVm4QBDQqPwGqkW6r1q379h6JuYo6tquHkxhkp77sAaEkLfTtJ81e",
  "key5": "5a6R49dRnJ1ocGLCV3ZnCPNLcKuwv7KFRH25XDGwSL8nFpWUkhUpPhwK3DsEUmzyRa6V3Fzm4D2b7exKh8Jsifci",
  "key6": "3tUbwLTZGSMNAx3iF9v7smkX1dajBXzHHES6oKGUGkQG7CjgNod27ZsCGVdCwFbz1EEx25ag2mRfVdG8226322Sf",
  "key7": "4oqP8ttFx6y7boAsVNNv6ffZr751ALrPxQte6BXpbGYGZb1aKV41E3S1YXBSfgWZdLhPoS7hsPvNkbCgT8jEkWwJ",
  "key8": "4WTC5WSoqnAyuNEhw9PJhutwwC595n8qoqcmyeVFka4y7zW3WDejTKZqj3UGmjNLRxevkST6rjPzCzrYfgn2Ua49",
  "key9": "339C4NRNNdrzT6K5cANabs47uMvqJq6o8SrFbUv2XL6An9XxoNfbV1XXPGrLC5tpyEckjEbWsMGZjFQRr7tVC2mL",
  "key10": "TzkSuKPxRWdye717rfcPvw51cG6j6iEjYcYxURmF6XKHGixxKVG5BFsD4v1PU7iVi9EMedd5znMTg4EB3g21Hvr",
  "key11": "5xYxs8hNf2eqZGXX1iyXdm79U1FUH4dQ4KcvWNJqBASGUAqB4WdV1Zhh8Zjug7PA8tQwx5LWQRE9RtzZPaeAV8pE",
  "key12": "AJYJVPUARrtX2z2JcFGXkLf7WaRsPN2xrfVKcLSXX9cXp9MtX8JEp53TKQD55RkEkVdErSWQ82Aq7F2z85de4Du",
  "key13": "3BBB6Sn9PnR1rJN3jpabwVsZWRZLEpSpMTysKCb2n4r5CJ2vHD4uYi7WSqkejAypU78mqmzo8a4YXzmhuQUdEmz5",
  "key14": "41MXqWSBQXGMvjMi8cHpUw89yGfy3dDqhKGTt6P6eCwFaAFEcdLzGtkGr1fQQD2WhMSFh5jsqYueruCFVArayBwy",
  "key15": "4zr2CqQyjhiUUf2xHjKvVRzeE8BB8XJpWDnwWeceTJ9mCUqB84EE2f8m6oUATmmHm2e329c3y4ZtpN6V9jjcWpjq",
  "key16": "G6XNrHzYugZvN13XcuhkjW3KEtNEUtjS5MS2wc5iA83oYFxthdgRtVqFShRSyc94eJZe2DAZQzrgaZ8ivnAJP56",
  "key17": "5TcirwFv8jo3rU7yc4dkTQ74KpbgygtTeMma1GBPyXHw3bLYNyD7Yrr1WDXkLSnnSFsYcntyUJ7XaBjvZ1t59PJd",
  "key18": "3enkrU7JLCPwJfWwvdpDF9Fb3Kta5GMCRninTAzD13ygmxWzH8CxdEMJGCL5KmZAhbCSi2ecUtA7bwmqnduEgDeC",
  "key19": "eU9qy3QBYtXAEhJJ1b1mCReojooV6nUDvoPGXDYHuXu7DfqMpnoBsBRBj6bUdJRHKvj5TXKTbKZrxsedtvycSem",
  "key20": "5s15UDKFbmZM8pDE6d1YG4vTiZUvPZfrmThb534MQxuQshwaDq1GxgT5CACTseZkWVP2Bot8ziiqcD3Zhi7sahYN",
  "key21": "5htSowqpq753qhAws7vwtC6kiiNE4eLaUCX6VZb7i4rA4UuDcrPfHLKrx5Ugb7FU5seMytF46kwaf6q6wH5oPfUD",
  "key22": "64Gqkzi2ydL3EANfieEADf7SBcKxKMi9YU7qvxzVz4Y8AmuhoyscbtVsifNifbDqDVSerGcTg4k7oNcAwGScEuXF",
  "key23": "3KEEnsC6QLXFzdvA5UzFCGM82KsCvA8KvZEbMfp5VHaZ52QpkK9cq5Tv4epxQkZBSpKn2kopd5vjE8NRhu5qiJLq",
  "key24": "2ySoM1QeJgo8Tr4A9HZ48ryHogBEZjJcrX2PbZLBkmZ9Zh6ZP9RLghxbR32E57rsXmFGamXmQ9F88Dw7LSvG5oEn",
  "key25": "BSAdvBwHZeGdJQefty9tTpXGZokykAQ4oQ4FDgQt2CmSUG4AKnirBBVpmD9x7qm3UGJou6wC43VYZUX7L9Xz7hH",
  "key26": "GPka5PUKVXRMTo63vUPEXoTyFUraFjCPG7m1eS6kU5dBSEsu7pY3QwaKyeeQpFZvUG24WhitevyWQdzRRoH372V",
  "key27": "wHJu7tYny6nMNJgh8zrnq4eoEnRUePpqz1KqwR9nZCJUXjCrcr1pLouCt1sZsWQDsLWKRv2XxXULZ4VoVgA8ueH",
  "key28": "tHPENybZvs79D8V3kZ56KReNJF58dkEvJdguVu38psBbvcTXeP23cd3mc66m6unGctdTgjH6gTy8eyP1FjWhqL6",
  "key29": "5DNgcwZjSoWyEuNMTrndW5Q7FcRFAZeHWfWeGMWKRp6FWTx3kJQPaw8qzZcdhcbXtZHbQZKLQ3Xkh65kPqQQSJ9V",
  "key30": "92coxK119a9WyCzst5eQZgATHc1fzDB3eTCMWoKftVTHrRUQV4v6GVtzBncwH5pukuspkDsrWKvY9UrAKGeXoGe",
  "key31": "2djTynge4ffRD5mi4yVc9rnzUdGBTwi2Rbs1yHaPtgkPcqXUNCZPDBt3MhJYZ19hFYZxmpM3mCYqjSYpEttzdSyp",
  "key32": "4mPbezcPf7ugp41ELjwK4CiktrymGbCvE2ipfcXUJ4mTXSxZMcHnsVCPBRLhervkPvPZXENEJn2o9wFwASVdUb2b",
  "key33": "3GhRugbW4xM5MebsGA7hbuw4zSNaUr47NTmY6B9tdn3iYCgvgkQLgmaBtBZQSA9qpqUkZyiu58LpNPWWtJH8F7ua",
  "key34": "5tN1Wq3Czq9PMtLzegxajkWo5Nwooa3GjGkmPZNQFD1MZSGYAL6pYGJpBeY7hWdmP3d2phA9i36UpBMHp6cGHmqt",
  "key35": "2HsJ1Y3MHyH24X6zxSRdAMHqhJQzRxUTrdSQUGFmJeLBaBJo3gJatoCdEMmthSTQ375wBWWiEz3wG9UdGHxFNYHL"
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
