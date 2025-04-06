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
    "5uk31xYgpZC5okHMaCAT61wuHDG4H9PuMkVpQPH7B9Fi6P6nLxdoSP4CPHWEjdk24jCEkJYgzXqujdkmbhR1XLGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XG4PLYJjYZfpWLvYQkjuCTRgr7tb5PnnFbQY36s7ChYW3HMFayLDojqjq9d6V81ZY7CGGqNrEYowqdmKEMBhxgj",
  "key1": "26mvWm6s3duDTVcD3ENczqKTwSQQeoMhTBRGyvPD7xm1aaXJugwvCKRL4kcWFJkThcCb5yKg4nff3oNahC8XYiw8",
  "key2": "FKXTAGiV2r9WfF6a8Nn4tQyLku3A3X8yJ5UFdP4PhTUxHNqbGs7ZYUW1GAbJdZVQsUmEQEKbgnBoq7sz1EkGcsJ",
  "key3": "3u6eLSQiKus8uuQpn2T5zr3bk875jsfoRBtQahFxebX7Ci87GvGhjniiBFJKNwi2ssRVNcpYRkKKGxfpEB56shzx",
  "key4": "4Pdcs3omNP2VRoSKDUh2xpXTcGUPjBZnn5xWQeTv9jgySkkQfDA2Tz8z9w1GHASTXTEu6aUHDUQqMkn4qWwBR2Fb",
  "key5": "5CtpvMv6zTw2Go2CNmcMwp5ry8Log4xP5E9qZTYQjh16p9tamisdS7G7KCz5T5gVm9LzbVgnrN8xA7j8gHTfUrKf",
  "key6": "4YMvxdxFHYuwv7KvpDa8QSuVRi4XpS1rZ5xe5GVyfdrVzmFeRHiPmm3xwWWVnrLxk2EvEvQcqcn7wtczstunxh3q",
  "key7": "5UqAhWfExpf8wLR5hM7oWEWajmhDQDXC8PQiZnZsMBQuRV8fzNiQfWpxkEzjyYMUYJAA9vdWXFTbP76VQSgYPcvB",
  "key8": "G3xWXPt6ggpiRVLDDFnuv8JCY67nQ6QitNsQQLDtX2gpFPjzZqxLQg6Up97MM88Ug78WBD3H4osnBpQ1byUf99b",
  "key9": "2qY7buej5K61mYCZGF11UqVNNmij7gbVWjyqHrNiHCaEy8v2aa9Q1ckqFHKwxnMmTK2qyxZqy7qPAnBJhSEJhqeF",
  "key10": "65pFBvsy9ZCLcBnS1FyWBZoDX5GWqpR4DkEXzS7Uh99AbGhjnomFteKCXvWEyYaWuJYP5ZwZFgxnWdXaUj8fY5j9",
  "key11": "5CpPpJNFJk4cFCdBiMxkDJ8gjvaFDpoy5ngkhMrkQG8ZLm9SeNuegS2qF1ipFvP4x4WEeYYUjmWr6c1k7jLk93Vn",
  "key12": "4M8ExZbmv8dogMU5sZwvgCmtvhicoS8iWZcZhubwrqKV2r9CU6WGqXdpSA1BPGt6pC6kr7R2tZgkxA3Q5Ya6ssJQ",
  "key13": "4hLbo3BibQY6YAAYsgtXz6ufD3twHQZVD3k7UzuREFcvCJAwaosbujJQbGKiS63sWhE5sm2NUeJs3UYu7DdPfz2R",
  "key14": "wwEzFzm3exsLGNag7jofiTrSjcP1Wsa2Gzy6KSwEHgqxsbzsq4hJLeQjYx3d6ExGCRLQwRUK9sBasv7yXpxFW14",
  "key15": "4sKfg9LRJyVf9HwKE7eVmtch12VUuURMMcY5hebvSwG5EAik1BsWvTFPfwJAMd29H7SyHhLs8eH9RM2cEEH27vw9",
  "key16": "547iUHwA7ZSsWBxbb8ihKCiuzapE61ww5nKaqxxKTXTn1gvxkv4coMSBX15LXwkCvcNWqhbtXpkzhTQW8QKEy4qk",
  "key17": "5BEbekdedvPwAoRe3sDVifjxQiq4CbKEZPVcG7RU8gCHsNatCPumV17EwG1f5WjwKQSubxpseJJTQJEdmjnxac1z",
  "key18": "5cHfDr7uFTf2y8UtAnWLe3Bx4MuNeZsNFrY6m5wQLHJXX2u4YHerjjCgAwQB3HGv7iwX7BaEgsiDZWLfLRTsdh3r",
  "key19": "2XDqXzjX5StDx92G46tC4372rmE5G1Wc5JXVsuKaJzAcKVMQge58TdNdHAgkfXGESr2w9n6zDTPG28rqjajTA1qt",
  "key20": "CVG9jn9JMGvPDLJpMDXJPboTzNEofFngLCJhyuyzVnX1einxGn58mi9DgWhANsNGN2tMYaTGkcAKQw79c7ahExU",
  "key21": "4TZ89HU6Q1YxE8kobrq7JYji3da7U5o5Gyk6kV9j7VhjgafMASHL3EkVvke6JfA5PqErxwNBhkiWjCAT98N44ubm",
  "key22": "54eKBaFabkwr31dbY6w7FrxUxjiUFu6GczYr8mcFLvRAgh4QWec5xi4LnSEcvqnnxKr5pnXZ8DkRmYQXmsMUm7SW",
  "key23": "5uPZdJQh18hoD5FujPM74R2bct6HsQNivAMiYJ5c6rMPPVd7RXfaepXD3jKM1L7DDL6ZboeqxtnwyB7EHDfMvnj",
  "key24": "5cqR1ABxWsPqXBrLFoXPmWEH9FMCtSzzQStp47VkbSNE9Ys7AcUSz9UA1DcdiMXqZMWp1Lz5pGkEfyoPZy5o1yGS",
  "key25": "4ak2uqt9hVujGb5MK8rYhrVC6bW2BdQiZSv5sdnwNpQyKTL5ucQeJbpU6tacW9xTdsykvowv7tTGH6vZBSc7DmSi",
  "key26": "23nQvk7us2BpRUdAHPrG1nWXHAG6sLh8GF9otmjyuCcY6EYK3HvQ3WpSxfJWYc8eTkcCXDuuLdLYiposfhyhZ5Xs",
  "key27": "3kvaL2GrtDc8jx7cmuMUraAjwKzDdZKXsKjTaymj1Ng68QEYgsqeYDsYjaLmDPyZgMZUnwxftHFu1UL54oeWL5GQ",
  "key28": "4Sw1T7GyPseBAKjJmhztRMFx8X5vkExZwQE9uMS196K7UcDiibnaiaxhc2ow9RsMWqrrU3rAKhnTtPds63AoCTDQ",
  "key29": "4DzSifcVCDeZ45tdGxJpq3yGtpjdDSnnApTLCEFnrsdkpcea3qKNF4wJcPVLdHLHzJdAEPQxTaJswtb23wWpVMz1",
  "key30": "4tWTMRUqWVCku5ETzKdrpfZba4ajkF82388DRqaxyb13Bb3BsA8yUigvBusNCSFbjXqtY3Ck5GJSZ4fbTScbEbET",
  "key31": "QL3LUo1Tx3UzuWhN8taCXA2o8tmTkReRPJgxE9LXWwRzUveTW6Xp8Jb3nTFoUAUfpoBxD9sjmFYaQdZYHACMGzd",
  "key32": "2jztJEgPZnx5BbtHXnqeUfKjMMHkmaTXWNwfba52m4969SkddxhcVV9vDR17biZ9DKv6YrvRb8xHeutKqC8ca6gX",
  "key33": "5inYFgAjQJGtPcw7NW5iYPdgajFbvvtoD56WLbneusxCP5xBVfJA11vabw6GUjrFQYAgyvg2pPvAGcL8b6SrEwVk",
  "key34": "38xoJZ83LzFcB9zRBv9hDzBVSQQFQoDcocbnPDSZe5nEZZXDBVkYCUousFGHRS3xCBUG9YpZM2H9PkobS5ASe3DE",
  "key35": "2PjLo787qk9AyHiaezd7fKjq1YjAytixUNTAEkwKMPGmxyN5RtTPiAew866NmXCF5CNuZsTSyjEXbj8B9x6aehMe",
  "key36": "cw7ZuHUw1Vz9uYVBF2DMxQbn3ZbmUaoWj4nr5CHScyJNtdS2mrcTnBHA344jGVx2f3VqXrcLJckE2sdKXjttbX8",
  "key37": "63NmfW6jKAQtnACYsF2Y9P9yK3iMnvfKaGcpccyiGL2KdBSvZahzZo1S33wM6nwRejszXVaF7t8sErunLozFkm12",
  "key38": "2wVCn7o7ekRrRWW2AaTLTR5r4n8XbacXTVeUwmkBPevxVStDMv7U1ZSTZ5Z5kRfi8yceB9MUhndmVvpnrqTG6E38",
  "key39": "2sXZfYVdhjGTjrD8SipS8r5VQYazwArWcqdYtqNpv3HvSYqU9Fn7h5GyqKrcDouKPN8iUM8xGrX5pKvpMNMrzn63",
  "key40": "2xMYWU4q1soc5Fufh8y3MMGzwVWGJPyygYiCk3e4w1UdoD5jLzUXxRiNZG1Bj7cd9VCj1rqgCx4fCNsgUmyQdvxa",
  "key41": "YjV2HrVz1M2NySLwVJRWU5x3GjErKrBd4wvDKih2R4apPCbcmYTtQZPLynJbr2soVsYpZYqMqXuHZnymNeLB7bW",
  "key42": "hZVsgABa4bufyystW8g8on6EMbzojSmBtdmYtwyrgGwMUVNG3hjcujQecKz8dCL8n9ZiczC68wT1AYHe94onMbU",
  "key43": "4nuzu7UhJi6zf7fhatiTuHYzmXPjjN9RhzDfDFJ6vwqF1KS6ZdqfHPCrijTG13iqgjA3pkDj3GfCzfKdE5khgbjt",
  "key44": "2QoKCehVf4L6TUJBUwmeiGRK7w4FKM5sXYvciE4n81UajdKufreZeSywCgnQqek836DV8W6mtm2rTqP4mFjkAf6H",
  "key45": "21UwnRHwPg4VXSN2d5JmpLq6Lopkf7Mv2Gy4Thn57XvP4VpBK4tHqwWEZrWcbk1shLJD9yJFBbpfyRF8AM8BjRYu",
  "key46": "cNTbLE6VeXx9Q45TZWn949FUUKhrnguBP7y8T4fUSGU86F7D7iHcoCzuW7WaZVnpro3qXqRdiecFcYhmYd3P2DZ",
  "key47": "4NC3rp7J6RnESwLDdgpVKALKwBaDCXPE5aD7fdtpPVXqactFCuX4Yj5Hvt8UnUDaBXB6wcYTYmxMbpgbb6uY78cf",
  "key48": "3jvwNass5p2JoRa7CketCcDYk2vGgRcJe6kK9i2QptX7mJ1jV7ZWRC9gD9LWtJd4ERrKS2r7mGZ9CCTuLdhUhYLg",
  "key49": "5929qDZ8AGfpuk23qL9zCiGz5y3YLMoLsNPdninHDSxWxceWFm8hB31hcJK3iCfMzrfj6MnWWB5sqZ4ogqBD6bHA"
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
