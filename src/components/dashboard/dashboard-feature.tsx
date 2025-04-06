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
    "32mP3NW5swHkJVGh4fzCUg99ZNQ2KQgYJaWh5G67A7yB8gSqskwrK1gcYdLYSPXeykdQC8R6yBPaefZXeEpfpire"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2jMHWT8YwuhPo2VWosHwpQsNS7uGy7fq1pvesvwWkvtCmBqeiA6yqimqXG4wRiqumnNwxmjhsn1dGJKCaLQkoY",
  "key1": "4ScGKmMP9vUr7eBYpU7wWBeYgZTTrATiTUXaz5Yvx7zkNZr8Nxs22iqVyojir9gkEpD4TyKxVUAs6G5T16VqtdfS",
  "key2": "fNYuVXuVQexhazuvALaFiFEVnVjvZhnDGLmAou6Fzc2yVtEaaGt2k6U1cYTu1736uUZjX31c1TEpXu7rZ5wJTQN",
  "key3": "5KquTjeGS28x3w3Vg4DRM7HrLEyFACywPgBGhHCXAQavvBJsdaXDTbAKz5pq1tuqQaA2mbtYypWqp2RQKVWeAvuj",
  "key4": "25K9gnWHmUwTTP6Vb6CaFkYfLPuxsGgSCHtQHfCaPp7o5uXKRonh1P4Tk49WiCg1ZNzbE26hCXmDLGcoHSh8K1C9",
  "key5": "4uYXZTp7HX9Q6C7kpMSTcEzNVPuJs56FGmH4Wts6EV93WRukL9BDDSL6ey279micKcYPgD7zTDanpUDDJuCVdnfq",
  "key6": "4myG1C8KUSPii4fVSf3pQXxxXihYAVjvoEz1sJ1Bfsn8G59ngqc5zUHJKRL7UmgLASi7Z4uMMY2ktY8PDPbxMiYY",
  "key7": "452pM6UYhzLA8pjWKLecdz8ELjq7bSPsWeNg9Q2joHgCGbNdPCGQMjgnuFcWhM15siMbkPJbkFZLPRE2Br6NUToU",
  "key8": "mfpYPqADpqDKxQy4b2M3JBa8kgd85W72AYHGF2BDocvXELabJkvDButMQo8sAzr4PTAsQ1uCzGxBtvBD7ngbqbN",
  "key9": "EUnZhDmfrHWACHUm7bj4LUhsQCchfxU8GoGGhJvztVjZect4ddubci7VKw8rtwjVxZMzpk6DtLvjPK9KmQtupMs",
  "key10": "ZBkwYLKCRY8w3aKZhkyFNdUDDF2o3iPBYjkVyDym2ngaKrdBseWDBKS7sKzr99T5x7pFayjk2yUQ6dqjbypxPEP",
  "key11": "48Xfkt6sba8MhKv5wQ313cVE3ehybCFYEJBDPZabFryzXeK3s7vmfQJZ8YGbNMVbPM44Jrivv8AzvuveVU6ASwDU",
  "key12": "HQnsMEEyM1HmyKUTMYXS4hvoHDHP1XCkuZ9pdPzUdmXzHufBgs5DEmfmL5iahBEqGKGMswMxA9veNi9oJn7KfBk",
  "key13": "4qtY8e3ifDKpBiiRDhTcDz773iQWWLnK9GoK3xWmCBqsatxNoWiAaHG9gAqh482ijKNkwJYkDav1WC2hJTp5a371",
  "key14": "4GrGB1qCAwCjiekcwF53aMXAEMorRXDLsWnUT1qT5L3JWdS5hLp9p388QF9XhRivWUGJ68ncrg86izFe4L6HhjsY",
  "key15": "3srUSTzhSQ5yKKzquSAobTEqzEqvdkqktSxLnVmwtEYMQRpRyXZHCxjpKBDiB93PQXt8jweVkEzpKcfpYdfh8Xcm",
  "key16": "5pPEbAkgph8R2XtwinqS47KutJ2YX67uyybgnFB5KcoB3bCwc4yhi6UxntvG3XxSAyQGDvYrUhoKh7XVEuYfxTSK",
  "key17": "54YX8kvi5ZiKQ4uy2LjSBSdwcMSzyumXfsAvGsnobzMfVAADVcbh6phKMGty6PBiZnB9VjkpUBZvbu1g1xho8XEd",
  "key18": "3d1kqSA9sjkusWT4J5WUSUmzKm98VRtXJHhqNxqsDoGcPB7t3k7zCvJ5twof9PEFFgEkxxoT2jQckHBoX1H4oadL",
  "key19": "3cn6jbNn7XNuDAcJ8kUMnPxiYiFrBpm8PVfrW8aovpJr8WRaNBtHpAgdUKVAjjCMgv3RpdmXwrxhw3BJWjYi2jQq",
  "key20": "4r49HS49JCKtfeu2YBQUaCoc9s9QN8XeYxQKfubZXUSkZeLway9RDF7rbJhVY1kzPqiHf4F9BH7A5Gghzc3oVPDg",
  "key21": "3fcXYdcdJ4Q2SQ226Yn8vUVQhbNoMKfWGTXnuDm4iUdDj1g9ta64k47MGMEA3GQtveESGK9rsK7Kw6VFDzGqmNfe",
  "key22": "2rK9krxcP3acJCGCf2eXp33dzRaxvwLCRDBv3qh1UKf5VKzGkaeGpj9Z49zbMDYfyqvh9GJ76JsSMbV29YpVFUuC",
  "key23": "3nR2UB1JpQHiWC8u4vD2Qqkmm4vBDjnAJK6PcvGQbtgN9tgnjBHE3MfgWEErqoiULZPSFGtRKC5vYMw3xLDPzuhU",
  "key24": "5QLd9qVCiUdG9MGtFtNpvGXTWg4yMSXNfK4YSiJjHYUuJdHE95BJd9xvRoJNTpFSfKBpuUBq6faoyCpad58EzenN",
  "key25": "24uAAiUj4sV6HA5UM7cNvrXbagsbWnVbYFq3BR9TQbC2jQKfX9bsLq6q7K2ayASh1FuonpUM5mGNDCsTWCr2LJDH",
  "key26": "66Lrm3YqbaRBH7CiJzg4KEa8uAYxmDLAS6WvSW6tt1aSWajhPubJkohpDpZYE14TueWJXZ457Mmja4TwzEuLkzUR",
  "key27": "29BA1vvwfth14FqZKq4ayrbSQzSibTD3WMmqFpds73RJiQPJhcWpZZHtGFFFaDRJ8kckQjRTHm5SxRduU1mWpcuL",
  "key28": "4GM3c6iAjC8Pj8wSMSJKavQw7WtoMkGfwrPtdbq1DczZWQ5q3vwAmJTxRHUtGhXWr6gCQusgTugAZYvHpa6XbiMs",
  "key29": "QAi1svvtMkT6CmA3Dn5xoFGVdBs482ZqQVPRPhQWNPskS7Sbr2hKU8uo6w1PPaM3uytD3xhKob4ekS5EMZFabqG",
  "key30": "5FyA6U7cm7QpBnmwyiqaBjGa2Sze2r9hnApPFexZEgZExUknwru7zpMXF61JbCwBqW6EfVWNZSE3sP7Q1azhUUJh",
  "key31": "LiGdGTq8FVW5FgmdGf5apHMxuZmdq6dbAkgkSbYou7DkZht8cSbGz2FfqVfsK46AHqJjdoMDbnMdhMX4jsiNwWF",
  "key32": "4uMwdbxttNU9XKpmR9B7ta7wCcpmDzigB2oevx2fCSv2nqsMXe6mapCiU7XbxQPpjRZCBGJbaj9aTrhRAkZsiEyh",
  "key33": "pyogbq5px6Gaakkc4WWAafA4MGY4mnpD6oLoSS1Pg5Fhgmf8Lpgz4dTbfRWD26nNcV4dA1SKEtz1CzWtN4BTJ4t",
  "key34": "3jLKwS5HvYkiWLgVSkXt3BT5272apHWMgHc7gvCBaNJkKLjuRSYWjyDvdAerFFwR9vfQ5fC2ZinL5m98TrCCXDPQ",
  "key35": "5nNDQFJmeFx6QQEDXmz8zjxfMRQHM4sbLNn6BY9jxoaNenEWt84zg6d7gWdggLPRNhbmrr7Y8d7ptvnDpVXMQ7h9",
  "key36": "2D8ScNZrsiXA55ipBdncjk8CvwWg1qyTyYXQjKsDteddqnHPWzkB8DKCFupEKNz3EnQK1Wqxs6x2ZjwjLxx7WEcU",
  "key37": "gKVtz4qbZKzeC5kZdkNC4jVrk7FDgMJNUHwyEdi2daSfWWGNw314FoLMjnC4rYAhD6T7wGESMnmYucUpZcxpLeq",
  "key38": "4MKMsLoGvBxVawKPH3S82wMpTDhuvGRnSLaXD7fcJRWEeezSXG4SMPotNHBBiCSJwLq61t8YqhPqWmRQ1ZBS25N2",
  "key39": "2vJHEGwsh1ywuA4ppkebAvzPFqU8JRzucBCMw39npnGvkMfa4TnMLY8VBBGrNabce26SuGBqD5aJeXrNvo4HwaEC",
  "key40": "4Y7s5GSRtMHi6AVSJoaTUfCHS6JJnYnDiZZ2mz8QPkczp91mgBWNtVebU4W68LgTq7TcQjVb4vudk1n82ZzSp2MJ",
  "key41": "FdNKQ9hE5rwExZ23gkZmQMDptSqnHELcnAvS7BAt5RistHw3VN53uuNLnC4cThsGeU3iy16McsNPVEFHUUQUVxR",
  "key42": "5h8Fh5kDFpCEGJ829uMiA6PaLgiCXir28adXtZw1tFGBVXkCCacsQ8jks5XHyTpgixXngdQQWN5i6KCGphyvWKhi",
  "key43": "5dkpwcDHfmFsXcUgMMi858o7pWA5beyBXDqyUhBhxWeDJgdmz2sabxLXz6PwUK2hn5kAJ4Bqz87JRp1jZTFRtWyX",
  "key44": "5NiGuPHL4zKtrCkxekQHU74swR3GWfYzrMB9ndLH5d5XmnH8AeCzUKSJBZFJjmdUhhbqnds54VKDq1KVSdzfwMx2",
  "key45": "62YajDZ9FAFYtvLKyVhFTbLsrgoF7yJVihRXTBhLPvw4jEV8o9NaSUQhvKYQJDfKwmen7f8NRE1BFGREyZH8veCL",
  "key46": "4ji3bauQkagPGARc8JS7he1whxRnkAVMsPmeqrDTXVtvd4LJ5v5TBMmq11EUwZt9iv1x1j1bhX6Y4iXKW3FVXaTu",
  "key47": "3BtK83jLQnatZQs8nfz5rVnB9PmeCRCxFqyN5RksDM2T8PF89rKD4yLaK7vbSmTZ7ycccF6pXTn8hXefXmJdz5WE"
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
