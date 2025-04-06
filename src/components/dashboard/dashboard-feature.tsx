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
    "wvUJfxL62pZZMfLpg3xcFRNsxt1EyYukvU2i8SANBPb94cmgHWeFhx5qKZ7c5WdDYrrmyTSuVUbWP2CjUdYr3N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vG1SBcXmHHsXs6BQ69hh3zM2JBPHJeAKukJWgEaskjP8YBr367wxQzQVkninhVzQ66xm1d8K2Rxmv5HiB9TCHt",
  "key1": "4z7siKtvHJFmBK8RJFpU4oWYLBm3ze4HN9Q8NWms6snmWnvuJp3tMAXn3m9HTxJa4dJ1fw2pxemwcHDdBfEQYby9",
  "key2": "5vD5UT3V4qUz4dn1SfPaaP72HueiaCURbH9kBiiQoHVNpC2RwjgtMyFjQ3bwBGBLoHu3zK6SYeRKL74RKi6BpHYg",
  "key3": "5hcpQU1MAGhXvFYPeJvEGKDZjf3n3s24yvZMFX6R1dzzC1Unj7AQqtyhgWSkBYE2qjSKsEWxuHWVqus5rnhzZoWj",
  "key4": "r2E38mtdDgCGKRNopaeLkMkSZLmCpHdqnL3Vf2i1gny7CosGaUUFycqX3Pgdvb1NXeBx4VQjpH5qMzausbL1cxx",
  "key5": "XKj3Fx3CVxZrASJcE9mgxVS7SAQM2uktiAR15DgqGMFoqAyabKCJ3e1WvJEu8vrsYrYZt5qACLzkts3xkYNzVZF",
  "key6": "2UP7qsfttMdDNzaNo3S34ZbRJie8mywE5rvLchBADZ7j3cZeQLEuGKwzccwA7bMZFYMxdACNrj6t1Q6fsMCFVxTP",
  "key7": "3nAwTqBDA2xPCJJRQbjxF8W6FXmPb3HK9mgxfKyqwFH7i4JWK4vehWTKHZPLphdfmq3SBTY4LjD5CnP694QiitB9",
  "key8": "3eLMTAHeJdnq6tdDNuQY25HizA7UV7DGtHBqghQQw9V3KGHp46UpAxPqQnLqnGaJbGnoK2FN4CzSb6BmabQhCL53",
  "key9": "5QXSxm81vCdczrMn8ynQbiBKzjbGgqUHbG17BrhXL7Hrt789ZphnaCnSnQBY5Kem7gfDd1Y8LAJH2mvGXtMXzWzV",
  "key10": "46n7vfbCjoB4DBYRToVM5qGnVpXoV44rzQcqPr1DcgsdFJ2FZTRDV3Ga16rwig9ZLmdWUsFn2MY4tGAKKD22zrWe",
  "key11": "3DiTSv5piGXEShjorjxAsBVq1nLB4DNxdQs2emPfZAKNsyY2Kh6ohUegt82yZPuzdnsHTmfwT5V5kSogqMZD1SRD",
  "key12": "3tiYk8fqUZtVJ8njH8M38N9TSaf5JJCKasrzPxKEprRs4j7HKAmEuNtNBpaxJKhtUiTB7fkqZU8CNwoLwmS4SgML",
  "key13": "joFxPSvxPSZKjzMYyLQ5c6p4YJKULFFppXmDUKFPYE6o2ikJnvw4M33UFzkxtdZHj4VkrqF7MN4RwiNxAtZ3aCU",
  "key14": "4GTwxSioYapdnjLdfeAgKVcAThovJpfy67aSdviPd76Qooaza1Tq2mnbsvmptg8AJb2A97nM4jfQMYPDNgpJF9rf",
  "key15": "4AE8rCpUWxKmApkQCnhSogBAeKfLbevbDRgis73FKoTa4XehdVwFVkLn45AA4JePvjPNL19CnHmvhwcgPzXCTz73",
  "key16": "3cvepBoaBkXzX1RZ1fZh1GaMUUy3wS88gv2YwyqDDEmg1A9uFRNc7TQrnDgoz6BfzJGD7QK4gqXeeAFtpLNXxCFq",
  "key17": "5Bg36Qyq1EvkNRsAY4gn7WPa861eh4wypxQCq7A3FSCLwFzAHr5hV7a71aTsvdacF8iWDhmTkVWrSu1y65c1HNYK",
  "key18": "2pEJHdeSFAL5nYsTa7Awwtw9kaDXVe7zjrUK4ZyprWK5MJBJjdzk9XvUK6aonCjad8JWLeDdgp5j9qn7uvdXEkug",
  "key19": "R3tnzdycNstnTrt9bNGFzYXxFT5Lp9bvy3BkAEt8swpeya66L1GrTUsd8Qw1u9CDSDviig7Z2jATjSZ6rWiJWyP",
  "key20": "W2wb4kE4uKUp1usUXS9RedWLApjMvpWQJ2SVN21iWxvNqRcpQSkrdcsb2VL9jvryyH1LLUPRNoFZ3m5unNNHcDn",
  "key21": "3riBEKej9WjeMrGzSxw7d7TtzrpsiCBeQ2Rej4k4bv6QRCKRqGYNhZmm812bsbzRY7j6qEtW2qG13yymDLBkjc88",
  "key22": "2WYhnq3BDo3wk6fLXCFWirVCQnQUvoQSB6eWow3JinnPt8ax5VMQJVDUYwqZUYytUcrPEzpZMBHRfQanHFf6g2eH",
  "key23": "382Rp1oa8zCG6zvd3L1wPQ1rkG2LBneNeCxhL8SARGaF5CytkUFm9C6ZZjtHAEqtqwvvxv4FVMFxTxuzeRqeE2H1",
  "key24": "5frgGitkf9eZo5EF4Rsh7YU1MU43H8JDSrvRMxXToKfghPzSLdPJrRZcjrkcnCQsV3vWqRSiQUXJMqvzsA1UKhX7",
  "key25": "4ihdZX3JvhDSCWGrJzBBPfYHbCTvPjipThPHGG7bn2Lis2s1C7fibXCAEGMouvLzwt663bhC6BZxQEcEaZBsAw9m",
  "key26": "3DBw4GAJbC52x288LgGKwiBdjMxZWPm7PSF3ZMHcCvAu9aoPXYiLNrCUTaavVT5DFptu3xysctou8Y5nUrYA7MU2",
  "key27": "55uKmXkqPBXGhLwCFsHDngbmoN4mLEfcgH9vUsggozHTVBTJRo1qjGBhFpnoq4zXGWKTXE7kc83SLWAtJxguUWWk",
  "key28": "4XtmVq8cPVib71aPN4Qj3Zg8dkhgsCo22bpF3UP7DbUpKHSEK68VhybtcBiHKWgsGW7ppXjSj4cXowkiBARqysHQ",
  "key29": "2sDV4yRzADbJmFh4LFMRsPWMi3qbpmBY4AyX9W8mZaQmKQzRAdowTXFrFfZcP5LBTV1ztSRBXLgn2a7EAgoZu2B8",
  "key30": "2J7KQ48kcJTeXhATippxpgsNYLuXRUWFH8LtmCxuYWkn929o4ge2uB9QsTYVpJgy9TAcRLWUUn6DgoyFeu8G2R8M",
  "key31": "5jnr9bLyBFNzuqpQm6mrE3BSocwTEjzdG8f2hfBYxwyJB5XkgvmGDNqjXx5gNvfNpVN7U3UcBRnvR5hrQZ8F7Spd",
  "key32": "2WB99HKj8nsC1vFhzH9SKHy6TSVQB6wwqhLPUUphtD3Gw8oHxiXcraBUVogFBW3ae1AoX7AFMytNgG6BBukYXyNN",
  "key33": "wVsxjnyEcBU8X8sDW4eJtMWP9JYPT2jeePDbDJPPZNZiqXRQU1mzBnXwRYyzyszeJXsLHgLx28SsNLyR5BCfMe6",
  "key34": "5e1madskdfwHjdsUxj95JKDBCCi9DeJzqPnfiWNAz9yF8YQwK88UqW7Um4iwyFgXZs6tYkdGm3534Z6mJFB7Wctn",
  "key35": "3gUb3j9LZpLKg1hqTvEGMvFGQ7KiEZTTEanq3dRW9nyK7K4LroXjLqD82ZRtzbz6f5E9MY7mZgm3jzGBAXw79yRj",
  "key36": "55hsMf86kmZBd2Y8hecgxmZJEa2PFZDbZCaQHUKp6yWpALZwePup4nYrRPkKU4UwMLjJsiir5KZJ77S7rDWnAxYN",
  "key37": "vcDuu4wc4LpQ7sPVH3CgnBKBcxVSRDBZPDfqE8tYi8Q4UjiNS2Pj5ztKfQMhLTH3Qd8FNhYtwgfhm1dGrF37YsT",
  "key38": "3ATufCN5wmFrd74pR1tygE3ikr8Qghz1oUP34jLj6C5hc4dAqdVYiJbSAhUDe2FgWaQMyN6wsJpPGUBYqAHxyAZP",
  "key39": "24nnpJc6qhkDCcMHnWsoUJ6yXiXQgwBQPkcKSAoZZ84JdELhfZTBkJKEwsrFWFSczRR5jzRuD7ibi9rBHDiyrx9e",
  "key40": "3peTVrwTRSTzvQ7KernzteYffQwsQ5gyNgDxQTZSRYHeSv92BTkNWpyUjzxCinAVjxEDAe7z6vvTh2hs85rYqDry",
  "key41": "2TKPGSkZurmazN8bnHvHw8QhUvEccxF9grKDhDYYDuFMCtgMfqddntp6LKbahCuPt8JRnFGfQ75iMvJ9KL9YZpXL",
  "key42": "2TaAvp6e3Ugko6rfJhauk8iYpKPqMPC5ZnQxa6vhXQWXfqNFCSJnArU1DoW2gLp5X4WdbQf3n3r7g9ztVGYLggf1",
  "key43": "3nUqgVurtwNw3ArmyFd1ywcyTPBvBnQbqNBjkwN7h7GhZn4F36fwjbHcQLRav3MDxA9Lj6ZMRktobePG4kk4jJgG",
  "key44": "4f89Rp4wQZnRxSxJbwekMVpv4NsztoD8JDtmyidJmWsD74uveZTLARwwrrvGi1bh2kqfkHM2B6NjuDo3pftKBrgu",
  "key45": "237ZMCDPEcx9bi9ejbtYTkXH514b6h7GWLWyMcNhtoJqiFX9zsexuLWg3v5bdajxiCuKzL5Jtvr2BZ518rDoZrCm",
  "key46": "2PZkcshtkz96CgMC4tW2AHWT1XrPSLb2hXEFjMXHDc6X17GWyCnLiqxUtPaAN7DdGLC4oDXX2SyRY1kLnjjtzhqp",
  "key47": "3L8ao2V2oEJ2pMxsNmM4JKNLmSFvCKXaofpC2J5UjuUrQaV6ASaqcisuzb3LiBCNTQFxAjA96f24eJ81gMZeWE43"
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
