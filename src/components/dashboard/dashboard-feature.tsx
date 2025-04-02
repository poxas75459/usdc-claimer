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
    "55bWo1pFh34K82BpYm7WdDD1bmjCzxRwdWpNS7vyoqdGC43kF9ox1KQhG9R9phTDhiAJ7B5Wp4343KenXT3nUoQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrckvRe4VyzZ4uL7fphqx9XyydBrdiwvCAKaRrMrfcmsqCGk3KjHy6ShJoD4xB9nxEWYJUav6oJAcaspQkKhMMx",
  "key1": "5AjzS6nDbVHCpGKYz2YZ4xvtYHk7yZsqjEenAPE92TedSXETpwWWxmUg9owL4BuQFDiGf7m4CJDJC4h6HYrwmg56",
  "key2": "2CryRFLgY6b2pSzfeEfu8W3GJbf31mbnWJ46QuW7WdRUi9b1q8HzmSf7HDgEGSofVCSiPNepdqrFC6PPGtuEakN3",
  "key3": "3MFbAT3V9jtCduQfpuBmh9HT1qDDVbtbxm2UZZRsAx6Jmw7it7FNnaHV4B3qjunZ8KKCQZVYF3jx7Q2Garjz1m2N",
  "key4": "2D4jr658wa5evjeTrteun5PP5WZj9B6vwXFp5TqcbjSRjTfhA1vcYgYbrs8bMVABBfGvrrXrkfCPzA8NNFiYTBJx",
  "key5": "54BLHaNGoVs18UjjaarPKipRh7NBXtX3GgBmJafRPzsTsdsPjwAuwHA55TCUg6JkkV3qzcM4i9biTXs6bigBC6z4",
  "key6": "4trGxqZaSJsqCTz1VC11wZ4bwpLEopPPp59MDSpx1YLaSHEJbgg2mazJhWSskD9eULbjWi1GGdfMcUu9KXzR1Q5j",
  "key7": "Xenb2cV5wme1AGtfp5aXKmfCZBRsgEjCRxb2eAvUJPp2S99VHrWQbU22WiEhxdm6gUvYTaYyhGnJYDNKMdKKhdB",
  "key8": "o4FPn7QpMn4EJzZHKHYkUM18ujfMpLVFv7eNouYvpbJbLgCaAkpoX4SA2uV4t7ZdEcfZwwBV4TNhKiCn1azGeGX",
  "key9": "2G2jFpXPpuAG2cmfjdkrD4JkQSNggHsDH7ZGJu37Bd5CuWVtGxAFYP8FiHocVw3ZctphXewfMVSSmdFjJrqpiiuJ",
  "key10": "2ftMBeRe8E5QZr2N9HPUg6KfaZRxezN5Nc4V6eXjBr7fM4oDdFKv8pLBuoX2JtL4GwCsNW9SRYuiPwAex1ScAyaT",
  "key11": "FV4ydPZjLW767QCuRhcVdNgJkGniNDPBRA6WQqaB1yLi1Lvbx3aB5e8hUmVn7nyP5cySiADJQEma68qpeuVh7si",
  "key12": "2TJwVs2vBHBHQmJMZpW9bPQCQaChCbZLFbYbyWR8qn6nZFzPtBFLh7k37k8A6vD1wQV5YWcqDE52E8N5Y2avAHug",
  "key13": "65Ax3o4MjnoXKXwkVhfAUtjqh7YfQx17YDpkbSuZ6SKprR1biDP3k5FmTP1jgYE8uM3c1W4oNgH4zDdhFmvSKZgL",
  "key14": "3oNuYhF6yvdo6sTfhiQUb1FGopsgQAXks2iKCQxEiJgDkjuT1rvH4kosiA6kQL5NXCxAUMj8HoxamUTWs476gsxF",
  "key15": "2WUSnfh9MtSwq8xqeXKUSwwUMmjdGaKZrY14irkqxCe4xz9W3vyJvpNhXYP2oajjFgrsrCVyJMXQwDL6PV1wzMR9",
  "key16": "2GRETTUGUDszBZJoCXEh33aGYye94s7qRboCmj2EmDg4KRxvd12L4EERCuUaJcGdBhETWhrpQ51xg7kd4nYM9NrL",
  "key17": "3hpPYzwpi9duZwr28N6XYrasE8gAg9RR9ELDoe4JQshXtoSFMNJJcF3pS3vRDJQsRH1gtRrKNixCBHfUyoxGPoif",
  "key18": "3U7R9agpfLFxAr3op8JuhReX3hg3x1ahHdZfoATjBN2r6JrF6ftKGUMT4ot3ExRRmPnZT5Nw54naYcLfuZ2f5gv2",
  "key19": "3UQFmYQ7RSeX9oKQNeXoLpWXFm4MrgZ4wEEF9KZ65af8toFrkTMJXobKs6y4Hg5MjrjXpvK4XGTD5C1LAWy6CUpj",
  "key20": "4yasdCxpUh8ufNVcbSVP1RJxH1EJQ2kksfw7P253FiMk54qVXaiZtSvMKTDSMpANYxf9bznnYjNj5N22m9fwwwNf",
  "key21": "2fsfcZ8R3vFMv7KoF38qdSQtZMyCymQE7wmcXVwZDNpyc5mM7FMjNhhC3MW2FnQBzgvDAB6Lixvy3JQweZybakcv",
  "key22": "44UhaQhJ3FDu4S11re9xgV1NsYuXnNMn6Ek1AwQCEJxJzJwy7RrPfJ9vC1qmkSj7zBnofZpw4CTJJysk4L1y1LH4",
  "key23": "4hv4KBSZcW7W86sE44GPZ8snUKqPZkL2jpGgSk9zhp6xshkaRfnaq8XVyAzBFGAM3gatUi7AqcYuSR1e1otvgVqu",
  "key24": "MQbMUkjByuDkuo6Q95kRG3SaufGwn9HfkP4QR3WA5X28miBPiq2AWj6s4nxKfTUah6xUHAsfD91YQd4BFy4DjX4",
  "key25": "3nJxRPui3vZwASjURfmcY3TckjmnfEaZa3VB8dymvkLbDEhsVRtCubfUvZrMd8R57LK2Sdb1h5QwYuBFYDpBnuuw",
  "key26": "2PtG2KVX5H65RBnGcS4QdxcanGKpsGwnR8rapVyF53A1h6ippTEA8EywnyDmzHK1odLn4mBeJzJU7NL2YaRekQtf",
  "key27": "2F9Wd74KDTU8MPPU96aAgXMmQM6SiLP2zLkRW57pfuAxxEAtT3TFjS2vthRmVoPiYxmZ53o5Z3F4w9Hfr6spxXgq",
  "key28": "3DjjsQQRDdoYAYDE1q2aN6qBYYz5iCLrvjR2AQMecZmKPnMWJi223gFMNXUoX8gtQEakMBqjcvnv69uP19JjoAw9",
  "key29": "28T6NeTZDm2qDvSTAWAGTD51o4CkEDNrjXDoMGQkr45rBH5Mht3MjnmHQZzUbhAA55DVxnSPR8S1ws7yVGzuosj7",
  "key30": "4ZZW9BL87mAwLhpbj5S9xaSJViyWTM86NvmaT5tYyYaydZuRUrwfaija6JNm6JMFMiKzALw6ZV9KvxEf9f4dupwL",
  "key31": "5JxvAx5e6BdeM6kbc9hzQbC6GurP5XUSbVW5SBJb81G3NvoLhXxsRtLST5Uynd8FiqYnjdUr4agM3gAFKqbWRtmC",
  "key32": "qoKYKi2mXYn6mAiWJbs2b6wuf2XnDefghr4ukCAFqfyLYiCNo1gxhhT5QribjCyW26VzrNzc1iPwpcP5y3k6EUq",
  "key33": "RDjFPuPjPiRv3mAjmKmajCYGKtpdBzHGestE1FDqvKwBX1a2RQvbJPzDqBtyWYvxEDxeeKH5xLTVAgrTtSaK2Q4",
  "key34": "3xPzr3PMSNzv6eiuPuhcvNNJKje9pK3JmUSxpsrgzVwPtKuZUzEPHvjhrSKdfhu3uPYzLgvAHR5S6xfjrPbbU56C",
  "key35": "2eWWPAfzyWzv5q4XgwQBLTNfEjsKVPiq9U3T8Ukksitd9V758Tm8ov3EAk3Zu7GdGydxLBHQ3n4iAx9RRbddtqoJ",
  "key36": "3KqsNEDj5M8MEBv6sZdfL3ALrNzSJia9QhLNPYxd1nNzZ7RU5AJyxPPBUToDxeeU6Ugx2JQhRpx4g4NFnCKBNCev",
  "key37": "44u7vUCggMSQZsY7jiGsUgfQzKSMV2Ksg4xJzQLEzoW1UUyHuNBxiEy7xRJMKTRVsYXbRJLffra589k6UvHHA73K",
  "key38": "27qpzBk8aZRX2u7XoZ6aiTGVA8TEbQ3ZyN1mS6MyVDwSSa56GeL7i2vvGS8H4SZr5mm5Yia8ztZqQqyFvvsQQqSf",
  "key39": "2mmFFwFbZTapT8yrmQtZ9FPtB8Gmz8WQ5QsQrwreGifG94ueSbvLAhczMACabzKftgUYZthjyhKXmJYYXSGiaf1",
  "key40": "43TtZxHVNuVeoryDZjey7aDG9rEcDoKjTQPGmarKKNBMT7Gi2VnD433i3FGz5GmTJvZEGEEoeEBGU7TrNLFr7h5T",
  "key41": "2CWDDy1U2SYpywvnGo8ms6i8vT3jTewoySHJieiFyvcaxB2UHk7NsFkdQE39tBCv3QtyrCK9xgrEtyePYUHS9s18",
  "key42": "599ZJoE1Q42iZaYh3Fv2YQ9wTJG5EzyX6CnRGddUHUgtAfngmkw4ud3DXJNNdHCWLLS2D2Lmb8E8Af4yQycf1PCp",
  "key43": "3CpY3F5tutH4BBXSheTxxHEBjESZoeVw4tx64yy8N4XMqDhw2rGX2wB1JSH23B6J54YPe3rRUVwFtNBqBUqXyr5R",
  "key44": "2Egg633QnmLXdLodSwd4qgVdHDheiSQ2Yg9vaB1WHLzRhZothXipCHVJSk2JAsDK5grL7C94JLG5UFTgrXxKKiuo"
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
