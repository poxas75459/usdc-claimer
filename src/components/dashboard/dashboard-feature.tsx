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
    "n47UELiNJJMM8bT9W2Scmtg8RpyQzvAn8ut76CdsA1ieRUouLS6MJuf85h18Rpbpb8PYqqnbkACYeKScRRzHAB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufH729FQxDGSTA2L4aERaiDCaEFjjchjiETtXAtvg79uHFxwGDnSjCqLuH2oD12HyoDtYVURyipEkYzefko8M8g",
  "key1": "46hgd1p2ehyeQroBmBaTHoMSfaG6xEgmgPSD6SkQRVrBvkfWPXwMpNGhdq5s8cGp6dSCHb5RSdRG9jZX3GsgQXAs",
  "key2": "49ncEnN1vqeVAuKUZUAuqPX8xrW7CBHCUCovpCcNAjWBxrGhWE85HWNfmDH8jz4HsbzLZR1agYHGZXcmjnyygEx4",
  "key3": "2a9vGEifjFpU9efmqWVkej64EMGuQFs4gnitnDsKcMUrisdLF5x65ZgaXgHgmYvio3ogsiLNF8Dxven9xLeNgTdY",
  "key4": "5XTn5dEyvCBE5xaPZ6WpNQVztE4H1jiC6LhAxcDFw9D8rLafXpNhuVZkC6QP2ftKzvWv5sX6tbGpaFWw9senbgXy",
  "key5": "4rkiEwZ3UjMFterbS9qrLZ6P3i9Hxktr5QJPDvFerZU7TuFfX2W5pedMCyVUBHmwSv1rVW7UJJrQbBxg1SLQwvw7",
  "key6": "5zn35r1b5TAYyXgBqb8L5piPFbvu46f1fcHm5z8paCU2imKRvDW1Co5s3BGqqFTjngyk6gYiz98gR3yMrFUs1wFk",
  "key7": "5K6bvf7QLthXjDmoYGaKKbS9Qqi4ChqVoeWdGsCsmRvF6WRs7PPwvXp4vriugoFRcyphvfdqe3tF5vwaSogHRSPa",
  "key8": "SH9wSmcpbk8dtF8GScwvX7nV8fyBKJ1LyMnSQDfXmi7hUCYJQd6wU6t3U8nU8oF5XQFprbjw7vT9wAPUeYBkVwx",
  "key9": "99R6VVYUVdVxKfs3MJWvz4svx4QxiAdLvJuK8ZJqo1zH2iMJkcNgBVWgmRD1TqWe2bJH9QozGNg81pJzLmGTeTy",
  "key10": "21DLC2F7dSHDsEawmhex5gHfNe92JRvXcRX2wo1sDiSScYpDjWPs9xsJ3WWwN6y2oMvBYJ2wEUiFbPBSPz6bipuu",
  "key11": "3jTBxjPbBhuw7x7si8rxcVEjwJhMYQF1Qqz5zTFqRHz4fK4mBvPeELLFY8T4ScECu5cMBsagkAVwmASsbRFL86bH",
  "key12": "5Tteo9LwsjW7Xmca7z6nyXVuiZU7U4TWEhxz8B8ceFQPyYahqufRjUS9Gxo6sGaToE4p9RoQ6TVXCkMMnBc3qWML",
  "key13": "goPoSLU2jMrnaFq5rmCmMrnvzjmd1khD17iHMe1iayStt6MMGqV2v2BPTbavf57kzZzj1jZHjenF8VjmiWb23K9",
  "key14": "rsWg2Yyem1ZCHRhwjCiTqouYukiavLaMiT6gZdvBerDjtoUXBDgo4K1yNsKr2SKLxYqops3F4MSm9g96xJEsV7g",
  "key15": "2H7VvjgZ3azzmvk62k8mb34fDFGuJJJ4dQMy473A1dXKeMY5p5e2Gpt1g9GLcCUzdqRDGfHD4nU22PjzELRCZ25E",
  "key16": "5NigGuJWkrBRqu3nQtq1vKW1N2yv35EU9zZ8MAFKmyfLgZeWP5JJStqQJuxkvnwCDvNjbDo4E582cXYBKKB4XbMq",
  "key17": "3ejrMtbbU34u5iMk6xaZjNNwbZkkJRGqQ3PRb5wChYN337K8ieffXAwWzWjby75DCAN7TNNuL6U8B5NxbT6f9dx1",
  "key18": "3RKfEcfHdEvRQkA7xzEwkAshXvwkDP8rLH2sa93EtkskXfQfvcT1SFLb1gWuqo7Y7WsDEXQjehpTFTBnsCkzDUTe",
  "key19": "64MgY4K414tMPFNySQXdYDkoFpP1eQ1CEhsHgfNo9LdxSisyRxNQHMwapvELtF5cYt9vbXKGkrsJMantsj18j2Ei",
  "key20": "3vKVWZVmG4kAMWWVfJZXQvDucapJgCCsc6HhrYmCPmSowgkP2X3ku3jX9naKWrTVZ3XQzeLUqL8czFXftBeNwDci",
  "key21": "mj8sbYXkgvTVL3b6c7Y2CS3Kg3aziNZhGa52YtJXFLgXvYgqaMskHMtdrLyT8tNHWCoxmVspNKvZ24M6LLVGy4p",
  "key22": "3Per8kgaKYi7Hd2wq7dZa8xXHkNicit15QsJwtBoPjpgLsnqTZ6JFj2LZg9gAvthTt89UE1QDt92X7qaE2gXAs4K",
  "key23": "2TW9NKda5DYUFPsdRjF2TYiK7DCH31cXNHYKomc2TWJVDVGr5kADuk7zyDfAjmz7y5NnS1ihR9xvT3wzbdBzhPSf",
  "key24": "oEW6GWBgYz43RVmurEVra6jQymiimJCRrhXaAb1ZgHGdap5GjgprxBcTHWLyLBSRKt9AFvwBNrmF6hGUnmLEWqy",
  "key25": "aKRR7sr3ijfBrKwsCChyHJaMu2pFimao5P3NLemoaZRwZfgtq3Vh9QLAeumwWEw5pJTw8sKxbRrSpx53Qhz8i4F",
  "key26": "4K4aceyV4NMUoMgrGxJPrPecwcctCDRMM6f2AetTLJdmEZb2sGeFdmQgCwDV1myLSxDbZnjc5uYhRh9ZoAyyMDh1",
  "key27": "4rWTkY8ZUaddeZcU5Grbj2SjKSsa4pgwzsUsgbjB9buE13k4bomWzRNLGm9KuK27kzqNsbvw3ZCQhdK2heqfKjVr",
  "key28": "44HqwCLv66CrYHMWsFJZp1ucVQd6Afxozfy23wn336F2QsGQGCBZVJcc5Leib84nVZ7nefjTzPxcZhAJT2Af8Dxt",
  "key29": "5sh3ByDRZuU5EP6HozAs7Zm9WUKUT28jCHCsnExsTm8dCsRoG9kVCWFsymDFpoybttZA3v2ME3N1eqZkrZdURJb6",
  "key30": "5ti8ERmRTA1Bj4KaoJfp1i7LBDdH1jxgECia7JMwNSdodogFDAPfCH8SJHQy5TfacfDRkCBExa6xuKC8HMGCJxvj",
  "key31": "4GtFpUvumzsTfonm4LPLt8ky17u1iLZsyJPpgVPY4R6wgmpJpGwtBgZkYDA5F5GyGwhvkv1V1bzY8JZRt3kuXueL",
  "key32": "4sAhTZRWvbknek1tc7mEgQNwU6DW2H7cjuDQnwFB9wdSzW1RHPvNi2pBc4SxUmz4RrAhkS3qsvm41QrujdQHMs3e",
  "key33": "3ErRMiyF2Lgg6TgbQxdgcJhrarK5HxWUJjyjMouk5XMHQazckk1tJpXomPbC3Y6o9VNMvDJzecCgo57oSnCanx9E",
  "key34": "5pFCZnUUcikAcMhninm6sT8GfbaxtTGReTQuq5ofErb8r6x47svsDNHLB4zcQrif31oGQRfiv8iaNb2P3AXiyigJ",
  "key35": "4yEmgk7oNBASuSnfyjfoFHfDxxAWQaTBDEQ6LQy2w6N6BG1apV1jvsk8f9wzwUUSmAi4724LKbukSnqww7VFeY5S",
  "key36": "3gvt3LHx7V4XPgMmSre5PLVkiXev1fZeJbJQk5vLdwa8iuhBJEQ1151iuWBiWzFkDww9tnqG4B9oMoNBaGRhVM6Y",
  "key37": "5GZwYLWYwtv5eNLD7nUd5uv63ugrhxenoZ4Du1sDS1jr376BtX8z1gf9sd9qb9LdjphWyTxsBw3VD98ERQfCcV1j",
  "key38": "5huEL4WAnRfcSXU5j39AowD8d17GHzzKLTbdEFCpbKpdANpxJTimMFvmKQXFqa5GjtGRJ3GWpFoEFK1UBrAQZyoL",
  "key39": "3drUs8wSXnig5pUWLkrweWKQEmVc4XGJeGbphQVy2x6RibTfyCgNN1LAMqkFMyFvcsaQ8BMoxfT8dmU87kttLdFw",
  "key40": "2ZHNKacjqKHmc2CwfuyK2HWYz8ZhFJ8fJzLtQxw9TbCqUcVCvYMDcpnUcfF4nAcBh4ebnS2Re3svimjvz2MZnn9E",
  "key41": "2rUVmq9tfTUmt4mcoJWPN6sALEDzCyqfB87uzVhQBncUNGBBBAzeaiH4dSeXn7urrpmTHrqkLo4LRA7xEzjSQXom",
  "key42": "39jNambQ1suG6DWLq5JxY4puMQrHZw28dPyBApQ4LaACHFh75bEVngTzmZXdZzzP1EKuXoQN3piqVyCMqmGZhErJ",
  "key43": "2wQw4y64gnLfLvZ8x3VZXehVxntd9ZVjGZeB6ZaAeda12mnpEyTANsX5gG6UyECVuSKJkJdCpUKehSp5kgjq4HWq"
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
