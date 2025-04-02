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
    "3WQgzDdKt34LXHCop7Vr37vACW3KQVVuM4PzGibvo5ztTC82rMhh37RM8JNur9E8m4LQdegybxZVRvMwhdij784S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iw3NnoacEdXaLrDiKHDa93DZVz6kuBbwvQvhvJCQXTA78DMSBxUnP77vXV8buyqS6aqVkWaZfXew71fqZNDn3v",
  "key1": "DpFrxHkuAQ1fQk9oAKGFipTRd2HAm62QpFjRaT8jsApw8GxivxDBu6Wx9XNRsEN3m4MdDULeUXLrJ2dCVxtc294",
  "key2": "Dg5aGzPE1mnJU6vkujcJPWUWsaTFyP6No63whzMokuk9xo1aLEuXvXD8gwurqTjVNDUgWyceSnT85H1289wTh5S",
  "key3": "XpY4xEPieu2JDXyTMRKZb7nodXBjdDkmRWWMLsGJM8dM9aREGmrdH5We7u6kBhMyxMgpZFNg4azN2HT3GTryG4c",
  "key4": "4adCAFSQY7yeHNwR2PvsZ951moraHgQcwMsaM6zwJtGmksbrwet6bW9JW36Pk24xeG9YPxhKbxVbvPWmBrF4PkpK",
  "key5": "2PeZwYYcuGCfqCaZ92anqQ6gjsRJ7dHNW49XTZUQewbPZokfkanmogVUADs2Xvc9HQgi88L8ki7aP5vJ4Mb5uVN4",
  "key6": "2bEc7bS79CVue2KXAQFyS9t1EnoX68Fd34f54u9F9kG3JGjcKJxpjcX6DmV79m7pbHzGqrBV8pPFEiRvcLptfE18",
  "key7": "2Xynvxk17p3oY2ByuogdTjyi53ohkaU33XLG8Xq7NqFSvuGMXiRQBX9EykBSKtkdnK8xfWN5Je6ZBUTjMNQ1kWr8",
  "key8": "gdX8zNv3dyTdYxUkgbZ9CZLMhLseYiDimRA8Mm7exdEw12xaF3ZwBiDgG1oZBDHL774XogxUQvW2JNCWbh9kth6",
  "key9": "4A6nMpSyAnEkVabfs8XTVzMTKb5QyiGvt7SgqFUq8pUq5EK5xQbkDJwLJzokDxjHW46S7vr8QxDbySXs7wqYq2AY",
  "key10": "wQqWvrm3hov3xLsVqCqje2wL6R1iTnfBRByTVKKsc5oNuoWdqip9JX6L4FJPAYTyzf1EWdpEoiiLbhsmveapqxi",
  "key11": "Jumq5TapVjdxPgsMRAYE7jjyV5YZ7o7TBZ6ZiLvxAAPVeaWT83rkcJ9s5mNMwdcSBTm31CDaV6NrWytYadkeyfP",
  "key12": "26o6jBCGZpkQsn7pzAcTKpqVdLNmaQvXj6tib9KD6Hexm9csYX15NSNw7e7zX4MG6bW8AgibSGh1vZntCedrETpx",
  "key13": "3knNq4VCbQnuoMJdavceWmm5L18Sz9B2XcyUzJJqjJhPi9VJTGccy7vCARr7u5QTfBWZsNniVQipeDFSU6rxVySM",
  "key14": "5M1TwVcrWv7njWspa6L2fdubh4xePEo7SnbEAbs32zxDBo6TADpTWTwjrBXxvP8dEwWQSVK4LKVHrS3GsRjqF5ox",
  "key15": "5ygxPdHzBdhuyzyNrcN7uCm279PoxJ3vfmqCy7rfmJGvRhHpJ3W1ajyZXgBxNRL7AAuBes7jYhpPgKJR95DQnjVZ",
  "key16": "orNNRW5NvDSGc1zednnY19YgnL1stUDfJ5e14ERcCrgwoqCCJknW4uxVQZEHDJ946tgPssaBCaE1fM6EixRiyaw",
  "key17": "55iHmuAp1Y6vff8f4moZ7yJYJUh1N4yfFggpQ4gNcCdjCW9Lv5cDWWobiRdGqyUVdXS8mKRks2ErGRnke3J8ZnT",
  "key18": "4oiaGDSPoSruz7uTm9BHNpP7EKMxAgAwm7cW4cFad61rKCzhVw8PLUt7ygcMGK8jjsvrKYvexsnYC99s9qPiuGXk",
  "key19": "VBxxjU37ZWJXfDFhp9EA8rZqc8NHSBThLsdVLLyCwBpeRFeiTomdjznR9h44AvozTwJxkNL9aqiriL9Sr9rEZyu",
  "key20": "2LYyYduU77nTBFPhmLjMW6cLqJNPLuAAeNJ2CCQSeVn3HNQCoosyU6daoq9Q45GvNZvTctJb5kzk1FgorxuuJJjD",
  "key21": "5HqcFBkHmihyS1e9y1Xrd9tGTMF3DLMTeaUjV1WSx9az27BK8ZwkxxD4m7zfm4vLGHmPsjmX1VMTtg3bsWAjQ476",
  "key22": "4NMD754dGe5sJBiU7YHnQowtrgeQdFtVxYirtwdCuyKMm5raJG8UsUR9MYQLhFjfauLzmwDTKpCKuRWiGnMWAhk1",
  "key23": "67feRY3WWFYw6ywLzBE6R5REHspt4UREScHzZH5H2oHM6iJUSzz2du7e55c8UbQxkQkkmz6QXexbi7roQoRsKXuN",
  "key24": "5tmjR5VUiogQQMSUCSTEzptJYqJQRzT7MVi2oLttnLSbatDtkKm9UP74EuhubK325PrL7defQ2erGiHRiGJJxe55",
  "key25": "64td6hY7uMuxFNE18qxrxV1WfENvNB7FkQZUWC5wWovhXPTZttzNXzsRnUPFXF2Up1CK16Pyg6pyUZX1KELiyx7M",
  "key26": "4n2L5iw3QjY8G8VuU18V1eboEZiJNPMNPsd9j4M9VbhJNpAHb6mCfftciUu9anu988agmJ4o8wjCuHLpE5ZeshWf",
  "key27": "5tVa4QuGfpFXVkZHfgnVmke74w1D1wvK9ES5FoWx6EW6qkkmBT9angdLvct5zUSHebmF1gnyfPjsqyXQMqtTEcYU",
  "key28": "cH3Xi3dP5CczvBBMKJGh4yqGjoJgo8BxuhUrdJEb4tRZLJfADwBWMnm3pgYbFwmiqcRcCkezzsmZ5LXqxX1KvVC",
  "key29": "5eZT6xWyG7P98sL5hqRvoDDCcbSv1mWmj9WCijaNsEUwXxRxAj3S4ApWkzTp7Q7tubJWNXeuomrRx1katDMV7SLX",
  "key30": "33L7RNLhfXYZmA8Zfkafi32xiDwGPE1FH8z9hDsgJ4JV7bDD3NinjvUxxLdJZjosT6joNXyMmpXEDmRZrSYsXyc2",
  "key31": "4hpxggpw7DwYtPCA7onk4qJG2GZiyYT88ngoeLYQouiwy5E5Cu2Q75x4MCHhSXqiHbnR38JLZpPCaXAn28F1hjgj",
  "key32": "2t7iSt46Vm83ybCpMQdJnXSFbjQ4ssUMjpyWDpNUWNcWtH3pqcMCnkw26TVRisZibUjm68PYKo14rdhmCKvY47KW",
  "key33": "5tamPAgA7cH8Pp5XCK3iLq3vNmhPTa8RDUsGDhHdq8vxwQZGdrQZ1qinZDRM9Q4gsbkruD95hvJ1syX6JiwwUEb4",
  "key34": "42AfH5F2eXqiGt9WyncyC9fZwS2PvYGcT7tKhMdVEeXhm6uypirEVvtdrYB2PcRWLNb7ES6vsFWcUttvndsQDcKf",
  "key35": "ehs2cfwckKosx4o61qTrx2JoCp6E9aQpfn2xi8FWyEajV8PEZJwfS36JCUvuEettpb5EMHVH8LoBDsurmaajBgd",
  "key36": "9xv5utJ1FpVM5tDbtPKQ4yRf6qgnx15gGjNu9tcgqqFqeWuJeRLwXJE5qShu2LKs7KjUMXRRv4URqTp18JftSEw",
  "key37": "B6KoaTpUd3khfyBwF7gVFTAFhwe5RBnS2xLBqWaXMiTy67exBmWspx9HtB18j9yh7ccHfbixuwGC2jxGq2rFA97",
  "key38": "UWwVuVWJbjKT5YHwuuBDNP3pW8AGpZe42VWVtC5HsYhvqkjAHpb7RnPxTAQuKyykCAARRYApMUtNLZVH9uyyMrY",
  "key39": "39D1uib7EapUJM2RHfND2Q12kWHGkmK8wmgX1oPcHgzx83jdfs4ygVje1zDCUcWagZXRJv5vLRtpWT9aubYr4Shx",
  "key40": "mPVrxpNh2EqyV7bU9chVZ7wEP7emtvEAYBxgB4kkeGxLPFu6LgDbnjrUa9wGKGCsRNfqb1zV6pB6juuLBsHFeue",
  "key41": "gN8GSiHbYYaa32LxAyQqZRGfrQ4tr91Pgina3PpJTc6YvoBXW71nra8nL53yQnFqwKgSTDtjnLszmgY3Us6QUdz",
  "key42": "4bVrp8nTiv5rwySuR9M6oUg31eHyJ695XHo975EzndLTf2YpxvAiHnkUd2aHu3uPFE5PUvygeFzqhAWxjZ9DnNt4",
  "key43": "T5mtyTxnjVHW5Rkwtvsn615Gbm573CMtjNBC27wqGzqNpTV5RB74dz3cuJFAiGwc11Q4pCyufXhDAyV1qXyNm1c",
  "key44": "23pAkB2VPK5a6xtzuCEk5V4nxv2RjRXPcr1f4Zkd1XzLZe3sEQUdhYjTjRnLd44pAoAfhsTTNV2GNQH5yjSJYdAH",
  "key45": "3hnLhfVgWFfe6EGeg6Gn29HQPbr81g1qLPH3Jb1Av2xX5cWTAS1ovn8urz1cec18BEWZqv4APFFJ3rvYGRaBwRPG",
  "key46": "xEKd6x9o4ngKQZenAC2dFGT2y4BMnSAcwAon4K1w31HQ6wRHvEWdXAewWeuWDzeb5UTQ52Jk1Evh5rPwLoH43Tr",
  "key47": "JuP96E923RLSNgCUtMVH8FuUBfDa59AfHtaBUqMU1QWNUsip2c1FCk9cFKoWY9mkmcp5Qz7q9ZmEzNDWPo1fNRA",
  "key48": "4EuEA3ZKdVE1iyZvYtKD8eAy1yTnXxqxZbQxzhBdf2CEjkL318fjUmJtiMeTYkiecWdtvpvrTwHmWecGxr8zNSkH"
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
