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
    "3zLEHgeXAJDbykBzksoYNFJzmdthmq2VEpUPKY1MoZpKSCJe9xeW42EUB99euSvhPYkr5zKFKTtVx3CLDCegtA9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mLqKnSGRNN2SxUtC98wo6RRoD71Bm3EFgGtxhyNRxuYx3NqguYDogW2sdMqaNHmdYE4mBjW43XpRU9wmGQ8Ci2E",
  "key1": "4Ptw9eJ97R6CFjucFpDAWLwiEi4129x3FPknESWtCpDXeaXgAFFZDjMnpUYZ9MeB4VNF165DwR9wkWR4wZyap9Q1",
  "key2": "3kn2WkUAiMtJoujR46T7nFruyBjDpbhe61asXnQATsVpi5m8iXtiwb2w8mbwZ3C9F6R8sGkJecDnP1Jw4ppJGpFh",
  "key3": "5rkBMCDUvktcU5LbV3g2K8idNmfUHDBSFm4dffKqKL41wfUD9ihsvL3ezcpxpT4bPvHq4wozDbMkFh1kb8tZgnm9",
  "key4": "huEkgqvbEceMour4tjC5WAQi7g3EHP6raVveuubucZn8f9SJ5BYXTiSK7rMbAjLQHUewy1d8f7KDnEwwBArYgBK",
  "key5": "2wkFNpSPBgt3ykW2Bt1DHf4CooHn9Qa9dD4dufRcJxNATtyqbQDwR6RN6DsdAuGpZk7Q8EarcaE9SAiNq3Edih1Q",
  "key6": "3ZDLH4bU2T9ShP2nDLLLZYJxuZsLSzbEKhi18LnuwDC4pWntJQS9go8u6WDuAb2taKYEtMEeyZM2kKnhqxuGxeQS",
  "key7": "61yv8hxgt5HNjuiz4fxYAgz4mdJRE5naAb3rtwhRABYZnn93c7f5EKZRVLdNFuwpA6nBd9GiY7iCkdhTV3j14YhJ",
  "key8": "rfnzb1fKXT9q297eZAvym2PD6EHqf11CmSHk7cZyKHfrMEHh2heg5CnoxWNQcd5JB779ttqyVTYzG9HJTEcVdQy",
  "key9": "4BMU7ezMjx758v7eFy3N4McQgD8ZftLs6EPMjsUEFUeMFwyoFh1qCJsY7KzrrVZQP8NeLkamHtcmm79dNaWpGS5d",
  "key10": "3nsfd18xH9kExdwZM2QExkeKCvHaEzrXqZeqJSGH1ChnYyZZtzaEt5DchyEtPidBjek6ChfQUD7YDHN8YsCh4Yty",
  "key11": "3QEHRJkWdVaqNvVbqSbtHwPAHyErbqLr4Hy94amnnb1n2Ttd17nRboMHKKC35KNuZW62jMWs2XFAjkEuSKnAYJ8Y",
  "key12": "615csaeeYXVdTUsRQrKAe8BZFr1rYXMmKTVKZ5VKSx5xpr7UYLyzLeHtjA2ZogQgPRNdZit3WXm8C69aGLUZvGCM",
  "key13": "2kywxXWWHbK1o142xED3a4HJ6iJS7QpdJUcbX3fvXmSVmWATezqXWfnS9M2rD55f8cKf612JGH7f21yq6XL97Ej2",
  "key14": "2FdXt33z1p6eQdHkovxihVfFr15JHH5khQ1fT3UWyQkdvggcDrAT3FPtDavRtd4tDNiUHY2B5FJbSLGCsUMqyWjh",
  "key15": "4qR3XF2pbEkaWdPxUxNizZALx6RioGyi4fCVTRAGpif5Y1kA6U183ec4eJBWGfsskBmxRz4GvaSLEf98QgM9dAhw",
  "key16": "2qkCxfyESxQKJXkjHzoyRw2MkVvEX8YS43Q5oB3bUWyf6Mmz6jj19Xr53wctVky7NEe23DBRmrBSX3CsCSrcYhjb",
  "key17": "2f2jYf5XwYPYgBdydd5VQAQWkPzQFTi6DMQars66cvqyk9rNfr32REWKDm2hRyrZUCUnSRqiez52BW39oTiXNeFA",
  "key18": "2gHXbkWjUMzj2b6MiJMg2nr59tNsYidis8AzR8GeXbFmFkp1fha35uEjyvvrjwnEDmKzYrRvku2xQLhEP6sXcHJe",
  "key19": "4ZkwuyrQMCCfVe6S8JVSFCektAvqvTMftf1Qh3vB4i73i1pEZnZtHXbHjfnoYJyQxfhVSUukEbHug1BJ4GKXq1E1",
  "key20": "514HPN3XufhiHxGH1XRFwAKh5D8p6jR7GE2JrtR3Ppf9Ss1wZZ7nZRkniLfq1kURWHgE1RrEqNQ6cJNCX82rtx3k",
  "key21": "5oCcoxdwgBYo5Q58b65TUGEgyBNYtsQnWdJLjPXDgvXWr44T6ir8ZewXB7qyVYKxth25xHtQLTsysyuCds1jVaHn",
  "key22": "BCJb42vZ2Egz8Mg6WWT8VYh6kZd9r7KMbuzCYp6d1B6kec38xj6T6jc1MH6S5yrGw9pcwSW6mhoLsdHBVV6A2hj",
  "key23": "5NhrPs1uKtcCAeuQhHmqKxpgohR7ZLNvy8GPQY8GFxbXrnjR3xCPTxTCooKgD6FHq1xJeAmdbnxRMh6qyX81wPhc",
  "key24": "4SVpuivRA7EGH8Qk1Pq3H56jHfrg7hX8oq9wXU4QL1wtBE6QMcxG4CkVkdFcrsJbNTYAnGiBFDi3pWf6Zdzm5yMw",
  "key25": "4LvgFswf4zDtrjkqhc7AzwLh8gCcFdbwBtd4ZeXBisWuEKVyhfDCrNUj2Ms7pvKDKYwNWH1kppVy7KMnyLPgdKJ8",
  "key26": "2mF4kbJWFz8N9FT1cWcNdPi2oCfJUHUW4CWrFgMP8ciztTwXYUmL8zPhHafKUUfYTKAtZ6msTXbmmWg2hN3P82Fg",
  "key27": "5enXteCCqGAV7cFoUqwAeQxZGArEuEDAxDP8QTW9LjbLJxGLVU3tFmALdT5EaWEtMnjj4xk3QqeoZ89Vs4yjrEBy",
  "key28": "3mjnFdVrNeiUiinnhgQZX5FoCpkt3UxzHeQW9jyhCT99N5wYPberzcAiEWvyH8TF8HbaSKTjaRCDmAqsyrT99gMi",
  "key29": "GhGmHWdra9Pe92nWrtz4T8uC4ezgcNkH5xAdsgHx8GxX2qfmiypZ1xYqV56vSFVpyvJ7YJkuH6B8FbUJSosTXpg",
  "key30": "xXDQMLeNno7zSbLXq4nzuUWebLHXeR1RuRFuRdQpUskaB5KT7Fy3mfisvYD1x6L3oHGpPA4nfn3po4CC9ZRpXWf",
  "key31": "5NsHVBBzksxJJv3UowDYkXKgZuvw9ERNzE8MY46Q5XitsukfejpMFQ4HWNdsxcq6mUWHtjgH4zWY6GbrNvqyEnii",
  "key32": "2pgwWWTfA8QEAJHbEDj5YqoZtM4YoiMi55rSae1pVMnkRAzDnkcwBmcRc994fJiu9JEEPY4ZD9GHwVn1JgMwmw3v",
  "key33": "3PJkWDkpCBMzLQM7o7itGyJNCBBifC8xUrJgtia9QQ42zKufpMoKsMGZgiH93h42dWDHRDBm1Cc7cPPxZP2djVju",
  "key34": "2KRzoXy6ckbEzPydfaFq9nd4xD1LUboTYVhGZSDJBorA5LRX2tjuL4f5LVrAvCTswKR14HFLpXbCGFeAjxzDDhaK",
  "key35": "3MEewuTwadoAXuPvQAMPnKpM4EDBRio6xnoiNiijLkER9J1YdtcVcv5xXurSYMQHoKUpaf4dXhhMPBT1eXzer5XA",
  "key36": "Prke75UA9wdLLgw26Pd1pDCxYEJSQkQiwCPNEDuazrJkzX1kPRcFZXEckYHeNcKc6CxFJgcdt5WgwJftyTCyn1X",
  "key37": "5EEvG3Sy3rWArMRWhuTzVdo5GVgJXGBkwpqbMthQwHqcoRKTQaUyTowFgpmG56ee2a9RcpB7hjxRCvjcD63UzMsy",
  "key38": "AsLJTsvgSS9mxiCWNGSsZijMSffUQ8WmGcCPzn1Je2Q1iKJPy2pMR2ub4W2XQ2yJhvJZ5wjKMGia6upzm4Ld7B9",
  "key39": "5YXmXmXjUGLCd4ThYQnQLWgzXNagA9ig8vitRyLVKgLgz3V5aUC8GxT2CRMnZwR9DB38WRGfwAvVEdzGgKkeo7fi",
  "key40": "2sF2JovPB7kVdXYJo7Nwe31G1ypPrHifLCt2ggf9egiB2oXKC3qquN9AUZLKVVDF9MAMoFnqdk2pVjVtkcTyeQFY",
  "key41": "2Pwp929csRjzVTRF5Y8Dr8ViUc4QErWqco3PKC9tVn7ecBgirVtq8bs6eH3sTcrUxgziH3DsGGRKoLSbFZWsLiBM",
  "key42": "2ydbikNLxHrBjy7e3c3CzqyEKrsemFtRcWXHG9ToZrBJj5hL3pNAsu6tYfXxDyhmTi6njgjmvgUpa9qZznPToztU",
  "key43": "3MasDyHVVa51jzAeQKTNjbXLtUUH7PVsseLQku9bor5YG2SUKnD9tLUDFJY3RGzVW1ViKLt3gVmHetahTvmKXwFK",
  "key44": "2pAh89Hdr28UPnKTgBzBt6mGccFUp4Yh4d1iEtUJbAQnvQbpn9b4CZfzGivDXJuhnpGH51Dwg5s9thxbp4w4i7o4",
  "key45": "37n3HeHx8aq8uRBiYbPQmSEXyd2SnjQaBvBsZCCfV4q8kXYs4mtbAoikY5wpdPoAeeB5BMeTSVTQDLNDzwFqhnTr"
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
