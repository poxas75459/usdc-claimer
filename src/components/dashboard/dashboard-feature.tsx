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
    "5GQ4QY17vvkzMdhx1vGKAeVzT5RPJo2eW5HwRSW1j56QZgJsujzpKJiUexp1ZuvXKg7VbRJfZHHeeV327iNZ7MF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51y7cX514J3aZPka2FEBhyWAARASquXv1YPH3a6ACzbon4zYG8rmDTZCZ9MzkckmpZs4WuyJM2xskxreQYP8zjyD",
  "key1": "3K86am8fyuV7gTSNE56MPsQRLZ2TQoQhSUbzXbmUjWhAtW7Uh5rVM1XhJq5DvSWMQ6SQkMsjzoJNNv4SjzMq3MYX",
  "key2": "5p6hRr7bBtcLgyHxUPtBMEuLnhGsRdZKFbeJVyHVHcRwPYeULVMnjvty5hU8v9rwMz9RtVEK7pkppYP1QXGWaZTs",
  "key3": "YRs93UEqswyEJEKaw3Q7r6dkqHGt9qcJ12ruHYVXyEQNUYNcKZH4dy1A4nP3z8xxqKbw78w6dpoTf1PyfYq7eor",
  "key4": "ypLgxSbYR1tuesQXmVCgL9s83Wm7CJxe52GU2QuKpBGQe6H84RBWKC6vFAPxDNWtXz8RYPqinH3493VdeCnNp3X",
  "key5": "3bkNcLT6cSHRuSeCAVmLiV1TPYRr7pcjUT31DKiDBCY6Lj7s1wC3bXNo5hAivTD45VMdNGGuMhj9P3MTauEt5woV",
  "key6": "3Y9ZY2pPQNxVk2SnwmM3J4NHw3q2PbMtffFQVnAL3k9GYu4G5vi7DidMM4uzjz7C9hGJgsn2jj9bYD6WzAerzbcc",
  "key7": "5g5gZBse9MykLtb8xteuKRrAhfNhuBJxud2NnC2rxmY1zbP1zq2bMnRFvSzT65KRFAJ9guzmNyKSqXFsFyMeFtAW",
  "key8": "K6z3jb4NjF3ssYeJXp5e4uxpbExcd7mWaqyjFAEkZ6K1jsLiG12sGY2DcpKRjTR415nvUZWcxrivD25g631w3NH",
  "key9": "5s66kTjYTpsuqu11BMN3c5FP1YiGi3ZPi4Ko6oxthst9ccXEcBKuB6xegRQF1KiMBH1wk1L8gLmEr3qXUXFVrvyP",
  "key10": "2kWCDv9VGmqgBKhCU8Aa65h213c68fqN993gijwymg5RRXrBZBouLwW3rkS33ytSW3LzrLqnWsi7vcpjdzorxGRx",
  "key11": "sxQNKKLWPXHh2HoJZ8zHNL5aT5rr128VNdG7pKEteR525u3YHnAmPdN9Jv3pSQTuaDYmafLZZxwmj22WB9to34N",
  "key12": "3mXVqoiGijovmH7JBkTF9dTRPcm3Qxkanc4qjXjtyCEYYUj7bTWs2wF3k41HeijGi9ojowTsNs8PDpnZdrqqmHsg",
  "key13": "3nZxQCYCGWbTiUroCoC72eciSR5nEAVdDogT1NbbejDx5Q8JjH41Qh7gw5h5i4PjQSo4c6VVocpojnbhXv8a8zo8",
  "key14": "2EAN4rr3ggTaoBEB2Z286bvKNDACpTA1ma3J4B9EAaSSP25oRcDCsxWZhxypRSVtHGjwwsFbVYQX6Ua16Mqo957V",
  "key15": "2mMicycxExgdGsoswobVoUEhF5yuxP7D3SZNAy5BcuQKAn11A75z7bDFLcxAKveMZSSZw6j7jj18ZNowMUu5UMdw",
  "key16": "4KQA3vVRcC23FUzCjAN83TyDz6ekp6RgZo7uosSG5EvDg28jjTo97Qm7sWgp56CB8SEKRoAyoFBHXP2mMzLuaZct",
  "key17": "2QYTryR3dyG95rw5CGvM5J3wVTCnDREnB53EJ3ZgNMBgJvR4wfWdRCGuRDBxonhhVQuhqZG1zHvR7Xi9hKaZ3Ntm",
  "key18": "8rq1XzofCoejnxAAdk4nwdzvGap1YwPptfxJpWpBkkwWSJDPgQGNNCQ89cX6gngjUr3GfRx1XfxbmoHWnQJDTv2",
  "key19": "4HbUbNV9u6sMVjLLAKJtwfEa2hGJoPKU2bQv9QMHJNJvbsAsxTebAb3ynEzJqpckj9bMcEZ99gnGSFK2eScYULCY",
  "key20": "2gaYmfxHWp9Rrr6zm3aGn7cWKC6TnQ9sxGXG4GkTrizwyDsXrPhtjwbAWhSzoKivJJUQpbALh2Ku4WhxaDL75kb9",
  "key21": "5sKDr3FDs6bfhwm4EhFkCtfu6pitMtCamsvqM3A5ekrPobAzXjTJ3x5mkRHvDVV93mfQGPo7Fd3sJ2YJ6JqPGv9w",
  "key22": "P1ca7Zh5FEM5KqSJw48v1YCP6gsEnrQcVrmtfkG5H8gk5cG5uemFE1y3AqSvZMvhw8Q6j8Thu2uqRc8GVjQyGND",
  "key23": "4HamXwh3xCjfwFqSBubLLQQuie7g5MM5EJ6YnDAqT2qP6P9eYN9h4BzakCLxsLiWgi6aBmhxNWELxyqLmGoaNgYj",
  "key24": "4knAUeZDUMo97QHewsfzoq58XxPr5JXPv4rQpodyGChRkP4Ven5xuywafwSXe59FwsWyj8tJA1SVDJoo1dvJr1nC",
  "key25": "3obnY5451xwWkxP8xRuuwS9eA9bgTZ2juS2FgXFaUXMx1QcuXDN8F1F7sY3T71cukCVCB3RNyYixbHoAi1CcRieT",
  "key26": "eBKTYRf2PYRnnP1dMYsHGYT3sKL2tfuQ4qD5ebeJoJRPQLMpfC5zAugUdkwxQQbtT5piHY4huENHg41iJDCVhN3",
  "key27": "2iUKrQQjpvX7o5zsNUgebChbpiuETfrw94D92NUPGR3f1XSzbVbaqkFVXsDcuhTq5xsoWUbjr6eGR6giFb6hvsDh",
  "key28": "2E2PZ8xBHnk9CjXyamRDAWqnxL9xKRcGhxpqy6G6CDaXrbEzQN4G3VgTozxzxzZkZb5PuVP6Ji2o86dGiQhHHsXN",
  "key29": "uonouZZ6xURp6q9McWXmjv2DMvGYU25idoGut8qZM8CM9kkanN4c4Ks7vKD1dEBvXMw9HxJcbKfwsHksJzGNpgq",
  "key30": "2DAuEGDbNNRKmA913fX6KR9bomtAFUSSCaeo9AN6ZAGmQwQxPDeXBU7fFFRT5QRcbLC1u9VsqjZBcrAZwBbr9iWR",
  "key31": "33t5EiBtZVYxMs3dLAdqhUaq8qSZDM46foGJX94uPT8Q5FFkNXTWAm1Ln4KVFUnYqNaZnwJEQNH3byRGwoxXywSA",
  "key32": "BH9onN3tZA3Ch9rrpsePhQpZp47qUbQ6NBxUmUoVixDAzSiZaatG5feg7wMAL1iiwGKKee5DT1sh6osqPkJVsQY",
  "key33": "3Sd2miRYutrFRtvaXRDYYRMqNcz8jtapmSZR9ymQLTZPrHVNbLxDYigP78LC9WMiSaV7RynVj1MSZixXgL8x1bqR",
  "key34": "4BF3dnP5e6D1vseqGZBnkWYvE1QvDDUxSYxUonGn8Nx4A1f61Hqk2GKCJ3LycoTXcaWb1Dkg46JnsRyb5bakkrkA",
  "key35": "pW4ZKaM4YRXohqDsu1CiQ9wpSnfiSjRb54pYrbBnvrUU6SD6qurZs4WaTMKFGB5uX2h2cm3osbq7v84ruC2MapR",
  "key36": "47rL35XJEHKAJYfvqbjUg8QtQu13V33hLnGxdvMRXr37a5D2H5aNHAZYA8byaCS193EitNeW8WYWuTFoVoP5QsCJ",
  "key37": "5st1f6HsMhoq5EY6SEwrz7MB64ANE4QkuVHUSXRjVD2gbW2dVRJUCbdWX7goh13efZxmNkB38qxHBJUK5hP4pmVm",
  "key38": "3iL4aTJ6J7hzg6heNSvxhsPPo8SZL6GuN3XotZufTTeqrGX5iwCtdNHgazTxSeyKVWVJa9f4GCBe8kZNw1CQBaBZ",
  "key39": "55EJug3XgczYoxebAtzGbbZsYp1HZXZSp4YRvXCw127eHFqjLUF5pVD3hvsuQUpAvkqJwzMsRHXHuq7sLTj5943V",
  "key40": "XrL41TvCQyz4bRfFHDfu6MwHCZUGwb5o6Z2F2ZT3FmJoWyvi7wMngcreLroZ84NhZB1kWUbXp66At8hinBX3TKM",
  "key41": "5s5u4uk412bRVwHCucA9tGhzogq6bi9ZcpQdEE2cYix4r9LMPmM26RGFPBCJnNAjptaj5P9BzydsRLduSGzJPVDo",
  "key42": "5xTmWc8Hgc5swmYBgwJhtG3yYW8Su6oCZpw5FQd61LpWn86GdSCqjxYcuMgzsJsFwCwEfHjdM3FvC8XAPyjZt2Gh",
  "key43": "3T2gw8QRUAKGSPGFJSEv9J4fvZUg8UXatu57V58yYPGEpi3oEgZesJaozFS5z74rEAjjmWoHgWa92YUcXQhbshfS",
  "key44": "3Q7p66aikDNmY1uQ1BzBkKXv1nJ3Ss6pG8FAo3mS1jLaPXdf2gEmB2dEwgfWgQmhM7iRm78zQfXTvFC1z2Gk6XRz",
  "key45": "4mp8mpD5ogvHDxYsHj53EqSTxmNVAG9XiaG35Et6RMw5Qicm3DDNzmYTjr7pUvxuoB19AvdgjjUkD1qFbjr6Xtjy"
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
