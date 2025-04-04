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
    "4WRvkjNEkbxK2H6W6E8sJXNnuEZpfXmt93nMeh5oo1ewAsE3UMzgohf4TSzE2Vchfn5TB7jxbmxaT2HuaqwFGNHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgMfXp8VeFnzLQpByQe9cGcy32Lm8tKtyw3MVowbJFSpHZ1FYXor7iEC8Bvvt5Qo4dmLzt5ybC8bMXm8Nf9hXgx",
  "key1": "TJZezkqFj4NnAq51uvnTEw248Mu6xDjGZnNgKeVxREnQ6VLXUjfAnUSHB5GyCADc1WJMX6bh5zsyp5MiaBWL3ss",
  "key2": "42ZJxMGa3syPhoYMA2hwnNWMpPNk1fAPBzChPZFLNBdyrZ3ZbUMUsGsZcXsERUWM2sjJwkMW7RFzsr1F1prePPBX",
  "key3": "27QHVi9TEfAQAzjxRJ91MbkATnuU3TNhZSnTStrgDrsKnaWvfwMqoBcQpvaEEgkgra17a1Azmi5pNSbVZzTtdfym",
  "key4": "2oTrdZUK9dPZarbnDjF3NjuFx5kvYPmN6HFWKKg5eVJUo3Jwt6huSrrTiXTZzDNYegXXAwhoS5UrM16rgLgLsX24",
  "key5": "3UAPNvaPC14wXkAq5j9aBx967wySFxfbY5rkxpxszYWeJzGaFqgHC6hTYtykfaUVFafbrY9hzqx3f163nayuKVyx",
  "key6": "BnJJoxodj8dzGCU1ydS2nx7RYqrMiJWxpXKQN74PXKEpcZb4gFfwz7DaucqPQ8QzwwNbkVCDXHvUHheENS8xx1J",
  "key7": "2L2qRurS5zFdDWnGnVc22RyBkjdTeUNkArUzHtbUstLKZZAnug7kw34i3FfYPSfGrHpCysPNCwHBtHK7xwsQd9io",
  "key8": "2HGWak7GvhEpSTYAMGTZGaYBPSikfBDLRs6urHc99Y27kHBrEW8gjgZ2QEfjNbr3izDBqK2g1ceRNadKqDGpCJfb",
  "key9": "2JUoBx2VNuLE98BVVXqKyLYyYV2RArCNLBMabfuDtoqUxsse8MDET5vQbxjZKdcDuYoJpaCJoivEuBxdbNWFDCpG",
  "key10": "3CyzxshQDs4LtpcfF4wwFEBBJrzASy57Tmu6anXR9VWW7Lp7Wt7HDXQm175AvDVfDxxm5yaEgZqFFS2LyniCG7uh",
  "key11": "igkk2B46NHGmsjtX6sYEvjQbTmir1AQVRws4jo8utsTi7eHSLgMSNcr63kZeoM3eCu3J5TxGu5QyJPHe1YRR4Tu",
  "key12": "5ywpauTxwTJrrsa4L6QkpCmxBMaojAbhbdoUKgZdhMbGCFxwjbZcwZt1Ecbg3t4NQktYbbfrY226wc346PVHJ5VR",
  "key13": "4D7srcs7VMgrx7SzcdZwVg2aDbcbnAQLooDXdqfxMWh7Vp4GYKBsPqPv6C43J3p9yYDAWNvZHaW2M75Rt9aJ3oTs",
  "key14": "4vQWtx7NFjAK4cdtskjm79kJEwcAPuRrQtQjSBDtsSba5NusuSarTypmtbAbBX1fLrzNpQNYvCas5uqzQXjg4vgD",
  "key15": "5aQ6FKE9rmo9fjtYmVRgVteXysWCX4mby1mknry5pUK5E9viYLNn7Eutfm95nCPVGfeh1GxCLy19mBCt63e3xqt5",
  "key16": "4s1pgVqhn4hPxG9QYW8YTov4TCsqYUhTHaToXe5H2tDj8JiGwREDnjV6EsCwJ8VVJ2iwSZKS9LfWkv63yM33YCCT",
  "key17": "3PKdLbnqm7vMVFqxfUQowMzaVpnk2aQMnL2wELEE8cAGVXfzDi3V6ZEdTQsdC8KUqYrb7UhfyY2tvJ7SAZcsfmE1",
  "key18": "4rUpwPK838GrcApsvKg2bTAU7xiY8AHzqGvt9TCizgMZLcRrbVmJgWfqXhEEU8WjWDoFLcb8N1YKvtGWhVAvvkZm",
  "key19": "2JxyvPf3DBUeEu8jH6CiQTdnfc3fUHctjR3MnhGm2vsuah7hxs655y5bZ4TLM437djJq9eXRdXoDJj7MVvVwpvt",
  "key20": "2g41EG9WSdSVhavzLiDNqyBRghqKiUzGtLDHbnHdPy7wGiEdZhMJN67VcRtEQUhjCHg5FCaTuMrrzPjhMpHpakbr",
  "key21": "2rbMukSuHENzQRQ2u69PKV8PLvvX5ybGgkaVj9LsmxoCLvW4U3VvcBPji6iMjyck2x54CffQ9uGArVGf1vFQTo27",
  "key22": "iqUTptAZYFBf5Vi6Zb3FnK7UmbD3t9accHPF32vWrtS5qMaYftH271S1se9uPqyUiNEtd9bHQCi7KeYEGMZY54t",
  "key23": "kNZVodRsAuTiBMc5XffEmkRLGwd9S9U9q7UCvz4raewucL1sqhA6oXm9xBNV3FomEsFKWMey2L1W7Y9d4y1hiEj",
  "key24": "3tJzsptcFvRM3a7DXgTDocXTAVZoyoEYZfVtwFSewwN2xhx8smZCMAERLauNrNEXvAK9MNMfabbaGi4tAzKbCVVv",
  "key25": "4oM6gAp82eeqChMiuZZk767fsVpr12ciwCLrNzKecN8T9gjaZfZKW4M8ikJtbdELGLoMqsKo9U1QyDndeTQ4Mjrr",
  "key26": "2KkB6DKxCXKdwyYLcbL9oirv6ic8aWUt4dpHxigxDn9KoXjn4B3u7b2f4YXYa8JbjLecu9pvonbty1B7u51NZQng",
  "key27": "jkGGrp4hBQmwaMeCLVSs8PDjqfHTmuuwu4JN1nTFW6zs11BtfTbZ331jacj5tGe1miceva2N4FLe5yeLNQfMpTb",
  "key28": "5Bzn8rEZbUWaxCPC9jNXmwW8jMmU1CBpsDRxXFV2punKGAA4YoH7dwcapaCMwtmkHB8mjux7fHsjfE5sxmbD2tib",
  "key29": "4sXB5TeC3tbzSX6hzexrCbhS2KQK6rPqKHuLjVFL4hPEKqPkrghLN2bCxcwA7tbtv8d7NXH71Uw1EheK99S2B63H",
  "key30": "2j8GCGfo3ZCmRfrg7myDcPdfNZzapGS8wEMxN9n8GMSWT2cV9XmGSTR5mE9nVQ4QpW1KfcbNmHhbVx8jz3ePmGCJ",
  "key31": "2Ad1tNxk8qZb5Sxsby2QcApRvvwh23WerSnXgyn8nDEYNuwyPTQk6YL3X24ppW6NBCedKjLjEpoWgskw3fG64mRC",
  "key32": "36w2Y22jB31KEt4dHxKd9LhkfJjGZPzrrec9TtHmkM1YWHtXFvqvY5SddN7kL8SUgSWRZZhLUXMBtCtTV4dvFbCt",
  "key33": "5tt6obn9TUFf7mQtBRbzPHfucgeHpM14A4ymmLdhszLkJcGMzSj6pAp2KggASBnaFbccihjzY1ydG3VwU1nr3FSJ",
  "key34": "2V2xPx9kQ3KYZoYqPscd7FfLWqtSxzo9bq863MoH24zUh4EgHPBtYnF2FMmF9RVKM3AyPZQAC63hKPHfLiXxLn7y",
  "key35": "62DJnm55Wzx2XMhT1dA5gSA4tCKYPQ5uuwEmsALwXSxaNeCgwtcuVPWvuayRGH6cxXkGGTh4fQoJv28opNvPUwrP",
  "key36": "2sjKvvYsQ7tefSVHAGWB3JMxvTwSao6Fh8GKMTmLPTXD6CoTJtYauNttbfXAdVyphAFS1ciaZSpLsHzk1tiNo52p",
  "key37": "36HNReZQMPXxUeSz2LHpCrV3TH6KUMupmCqsFFwhLoqvTU8grb5jQFwobXsVGsQrcLbeSvWkVvrGH5zfX7fuyGpF",
  "key38": "4MkKT4rfNy5CWUYUvo7moQtj9GMVftUF4e23wb7CfmXzH6GZFsBzJrCxpXVRFdsk6TcVmJGPijJZQ57hbE7ykLe8",
  "key39": "1XthbMa6HiE8JqCd6UP8KU47Q5Eo1F5CNsMGAB1iZDW87rsQyqLvUs3WcGPu4fkBEyrTyuRnhio1ADZYbUzFP5j",
  "key40": "4U3iwiEULnL8kpm7CjvLSe1Db2j83v8Z2n3HPpTtUtgkxEUCG6uPnLCguQxBhKh8oUmqLzYahHm6r7v2eKv32N3D",
  "key41": "3K8wVrt5WqA7GMASSpuevUjZMHsGhwzk8e7HU3X4X8yBaZ7PARtcVeT6C4LJxinDEpPmAKdWmPxXKfgQLLmdzgF7"
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
