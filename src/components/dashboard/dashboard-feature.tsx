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
    "4sR2mSuGXp1GFVTvuKaYGYn6z7uaATbguaHMa1mJbDR3VuU21v7FV91w9DwFcWfhQqsNzbfKANJCiqhBgV4sks9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qkbBR6mm4eAYXuk37y7k4N9GRnYQQrPW9xPUSyyBJ7FMkykyb3f5W6nHMZWxzsq8nmSQWM5PMfSXn6QmcMyGy5",
  "key1": "2Jd1Ch1nrJQcfveFE4fm7ERahnaBAFYtJAv2es9L6fBM7pemZCv8ymNrNsstK97MAQx4VLnMx56LVExat5Ey67FH",
  "key2": "4TYQc3MoT59HfQzJATAH1qNxF7Z8KzuiZAuqJuukxz6rTCjiaXLxWrGhiGsxwdqrQuCHePZKpqd19w3BxAKmZzdH",
  "key3": "314pktwgpr3ENE7j2cWqEiugzv8RL7KwNhDJF5phv4HUEGv9kRjLRqY4cBAaX3E6aYJ6xXkeshvRQoEYngmiVEi1",
  "key4": "24hH7Mp1fKvvSDxF2WWCyqLsj9i4MPLX8fK7V6yxb5Z6DBHsZ2fktiYtstLmreHkFsPdyJpP5e2tMxLSvXZbAKfh",
  "key5": "3mKqTP6WxejB4nrBw38qrmSssuBfBeTuXfS7nSv9bnqA5nvWNVupAiaqvK3rhfMoR9PjyzYJUGf8p8ihMAwJSWet",
  "key6": "4veCCq4pRvAhjhVSHKR8TpVfNxDAUN68wQLnLQULCpV2jWvRYzmd74Pk2bLFaSQnpqRkkKZ88GuG4JQ3z5dhzmzt",
  "key7": "3KiYi2Hv3Nmw9vK4Bg8WgBv7DkA5th9bDP5km3Sc8CmASJ7Ap7BsgH9fb5v8PFYzbFXCnfibLbZNKNsmfHTAFsWc",
  "key8": "KNm9NDDKhm8YXmriwiaGpfkaH7wVwLomc5QUPEbUBhLYQJWQNoxHBbmPQ7j5ffDHPvoDXB1ci4yeH8gxqYhDvo2",
  "key9": "5wr11awwhJia7yLYfQavg3eHtUXvn1ah889zZZtaQYfoRBBjVo1iaGvSio14nrJaxBjv1DzxWP33sPoMtotxSu2",
  "key10": "3ec43gdgvBKmd1sbfsvmeaCoZiCoz2o5Mj4vhuq3XuXNfaqjyi5bJ5MzvadmdpqA3Yq7Dnae1N6Qg7G5EX7FBP5r",
  "key11": "GBhATXtokXprHmUt85cjXeWB9UrRSY7sdyRHF7Sca1aPKcWj8hQ4WReseTaF2nFHobp9vSE8vH6Xapk1RY7aVNg",
  "key12": "4ZmGbvkHjRhz35WeBYeNJSFbzrNgCKn99X9hQLU5emuG4RANAVzgkJRPq73WGeKYVQirZCYSVyGRF9h5HHizQcn4",
  "key13": "qDzC1BXu1oDjZbwGvH4VbjckUja1MXquFzWAYVWmGYJYjUtvKQMyc9NwoNxtf6nm645MSpzwe5zWutmCKkco7SV",
  "key14": "24gYrH5kWLdPQN1XqQhn5axNUDupNvHsvARoZqXiojHNhw5L1UZ4sFPpLbipV9H7DLt1dfHR7T2LpPeHwJ7hHE6c",
  "key15": "2ak96JR72rvAobVi3J82TTkZfCrCqorexcKffzBjmpCRwYo8pAUKUTQsfzTa7yGHiyTLWLymLQEKpUG9UQJnn7WV",
  "key16": "5d92fGzUFNqKNmDBz2QjrQiWikjbJhatkG2Vxo38oit7ivLAiKKYcx56PsFb7Rtc4SH4nqACzahkcQCVxqVkZUFA",
  "key17": "4ZGk9rfTVBHxxRF95yG5ni6aSc3K4h9hfL1iPjSw3KNXxRVmSWzqURfm22tnJEBwspCK1dL2rzkLq9KsDZvk4pwd",
  "key18": "4mpXqh1GTTJC15rYKmQf7pxsoWLVM22Bbz1NfLQGb3nntWxtto4pVJ7PhydquMkoS2A54uFWAg8DApstAJzqwcc",
  "key19": "4YhrrzAHREYp4mvz6kEymt6MXTDC2V68AfTQz7bjGpeTGGPgkgH5DxLSJ34Zz9KxDaqDyktQ26CB5x4e5AstcTGp",
  "key20": "2vYFj3ZLs4v8uDiHb3o4GJjDMpAHNmJp68K4zna2KFEpiLRatY7WmidEAaRmtJUvM7MLfz5poz1toYT8hBC8yL6c",
  "key21": "NQENZVioaFxRwEkPhKoPuKpT35F37tW7ZrTqL9KUUokTYUnpG8Ara6gdw48LsLqCRo5ukLd7VnXUqcdwLt6HhwK",
  "key22": "5E8DuwUDgr8KBCUqmgvrUfadYZjoREVQS8DScxhMppfE7Z1AsJ5QbXfnFboCj3LdUzHk1xEbS8SHbNEe8np3dfS1",
  "key23": "4zNmJs3xbjG9daFoRy74pyPy28TJqsBBaCySsGr1a56SQLKeHLQrRyLnFiwmBbFzaAtrqqqien6mNfLRkadTW8ME",
  "key24": "3Yx8psjf4dEMQj6EChZee5rWHB6YApNhBUxFgC1NZR98zqtqRHo9Sa28PnDf1dJhwjXfvb9bZjBBjD8t1BLx7mSg",
  "key25": "3DHG3r6Bk2XQ88jHY5RcJHnNJhAt8y6H9uTckNqejKoLEWngJxn5BGrKgEb36v4s4dUWh4AgSFkZjHc8zyhvk8YV",
  "key26": "imqJooE5PvkTHhFNBey4jdPGnJeZQ47QwpizbDxak1H7ud9RJPv8mttxCtzqPaxvU353n7ekUrKbQDX1uS3X8zU",
  "key27": "5PTK9yMWELxywAfunhqNSBxZ91TxWcv99qHoSGsV8GPxYjZkncd3HqNb5W3WQ5cgQnxxHTXjPXjVdVrFAtQtHQuz",
  "key28": "2MerTasn6WTeNxu9PbGfFwxduK1zt6mCB5oEhy8MAow1gkAMVoZB5VmR8SPcsG9hJBaahBDs2XuTq4fMYZQBHabz"
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
