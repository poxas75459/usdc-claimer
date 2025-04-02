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
    "5X3AnqTJmn3SNqpQk1efvSXMnQn2aacPp2SSYtvLA5L5giLdLHu1hoUA9sUXuBa4d1FKau9GLXbUPBx61FAqA6EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yk3xNNpJybXEkmB95xYDGzs7LDxZ3EUBLwJB6iDfEWLKcWYp6KaMcR2ggYvoqq8NwiX1nAfyXwu7sUZDcxDpkvF",
  "key1": "3Ee4m8QzMeEbVFeHQgbrJsfUoAWok8PTqNgEiCPF6QVwD8tyej9Lpratu6nSt9wL3U7kFhLqADEF8D5qKEHAZsLy",
  "key2": "3nBgMKEQAS1KBSRrjwoLfnwKFB8oM4AHYNixpvvJD5wRhufwH6rvFgoP2xQketSkc963bCwuc5PyV7cWAfoY4NSz",
  "key3": "5TzL9m5NHe6s7DdrGxJq6TgXuWjuzU1oYZVeP8FVos2dEtZ2RnVWzskVE1YLN6Pck9f8uEzfbnLYY1SxUbHCq7CE",
  "key4": "2mt5E9BQit3ozUWnscFeezZqbhf9siPmJM2m8gWFavakEtMsskMb1b8L4R68fqoq8MfrMEwf7Lfq2HkJbbGz6Y5V",
  "key5": "q2h7simqTqk3kpYuTiqBvWTdwB4tJUw78qXr1zrXZ2cBTq9NoGWKCqaePtK3SspFNmCjRmGexEAy3UAHzhqemxS",
  "key6": "65px86MqwSDZNoV3NaFVTya55sokkMQumxtwhxiVXPVcAcY6iBJpWtRivbbn7n3Kcq8fBZnNX7yQA9kZLTT79AyF",
  "key7": "Yw2D3FDsM5UFf1c8pYy1CKC69m61cbYRM1kCstGCHRaJsUNDueRfRd8s7q6EeEUnHo1En2ecZS9AUbRHxxums8F",
  "key8": "2qknGZRpDPHRRTnPC4DQXm7iQht1P4gx1UwNNSzRf5faGFxQ2EKdBtBetj8QdS6S8NwFaqydiFnkMChEKsfYuHc5",
  "key9": "tarK1qdH5WVzqgMtJ32Foj5UiPXeMUBQCmv76eGRr2w1ij9Y6z47ppKvCVicAG34ekVJXaBXGdcStmEPY491coD",
  "key10": "4PcPNy6kbKVPQ9PxC7cWD6RVee8yCUnJMMrFdRnwt5oGdwnuG9z45WTUfprX2bTA37CWDxSrfobPykkfGxDc5SbJ",
  "key11": "3F9BUvfN7kZsX2pezhNBYDFhW2qPP7TgMytRFH45U5fWnNTvdP7dykzudHj9E3bRhscNHeC2maSFg8j3W32RrbVn",
  "key12": "Jf7Q7eoqYBDN2PyHEuTgZr5NAc7M7DKNUvxd8kNusccZpj1UeUNwupa1n7kcnCS1BEkALKLbMem9NBBjayJV82b",
  "key13": "MTAcLng4b96vphbK7yqgK8JLfCZic8RjUG4AMAkqPG4YyMpBqAMo1ysx3VtJZbaE2t7QzMbB2FvoRBAMCCCUbvc",
  "key14": "3SusMXTUrbT39JBHhnvcRz79EhUdQUHUVzSiYg7SneqVLoY1FTk51zz29iEUQFtJrnQbUxafx76bm1fpdDxxeVL2",
  "key15": "2h2HhgNusY67uLemvPRazLQJjEMQAUEry3A2GmWh2pwnQFJCoj6jAbSFGkR2o6pJ6U5m2BNEpmtaesejt6AQDB8X",
  "key16": "4NimXiRWMe3pCPYdCrBp8CPsrsQwDPnYq7x2xcPSreFvzWChFSBZSnZXyqHtC4JWD33FK4Sve5PYSVPhmUHgXUie",
  "key17": "4UQx1QoLceQ3Uot59iJWDAJwPKYzf8yGJs4HZK4CiZDoDR8cW7MEHnC1ExnacFHsfzDpBXsnQvg3HZMqDnAahizX",
  "key18": "trj8NzuwKWVKbMUJ74Qkrs4XNk3b3UbZyWYRjeiLGdAy1Y4PySCtmhSLuk92Qqyo9Z6WcoJCr865BsTzmxmSQwm",
  "key19": "boMMxbt8VZyiLQgg9rn1ok8NfTZyDLYSB3N83vB7ipnhbhD8XaavBQX2ApGbwTJ5wG66NnkBXXR1cLMUmasNs9c",
  "key20": "3XzJJZ4gT7NuEott3TQpk4Pv8FVHxXxGdFoCXjoEpJFk8RwGvZwbKe1sJ6R6v8L2n7GsweLeHyFtzdZH5JRg5zXi",
  "key21": "7vknZubh2AucZMxTmYGBR3wTxf6wmBYKuYayoCiJwUfr2wDrZZoUqgdWy6jdYy5gGmrUM13azNjz23qVUznYYva",
  "key22": "5JiFV231BQNPzqExsowvWYrXSiWHB3xSG6qchUd23tBGAnoZ4amXYqby37PnFPgV9ykaqH4sWrnDyAK5QBA5358a",
  "key23": "29qJ9N8Xuvwv8oP8i8im7f8bYaq4T66D7ZA6CT3BBWgtGVbKHtrPAd982u7hBi8ceVfhNbNYXVu2djTSbeUqaZwb",
  "key24": "4JS4EDhL2vjTWsjWQzKTqRh8piEfvubHCbDaKwUUqQoUJKtnop5Prg6JKbQmPy3GjGiuQo8Bwcx2YQufr5TmVJwj",
  "key25": "3QF24ixZt3o41oth8YwJjza1aw4mRt5UmXkVoNKzcCw65wRTCjDysFLVhje4KaXhRRCSa2i57pkKiGqWi8VZN8p8",
  "key26": "3JtNKHtn5ZZ9JP7R4KvToLPpjp4WYQCUeuFP5d2JY5cG9G3Gf7NPgXGdgPSz21WpUFH9VuF9TiCryPBVz2v9joE1",
  "key27": "5jYPoUr3XSpzCLoBuvDruRXqA7cGr2DA3CG6dBtxgiqLda1MfaEGGAuE3H7S9ufm4rGJRmZKkojJz2jnS3XKnH7n",
  "key28": "mcqwvS7e3xsd5UF22xaYDuoX9GDfBcdGYFmJx8NF1QWaUduoNGCwkhzHJw1tyRq4fwgArvL6SucrGbYCHWYHPTg",
  "key29": "28CbMyLxPyhrsvwcN8wBrZJ84onGuJ6AGx3D1Qn8HHHzxdq28PKBvX4HSZBXCWcCCu75q4dKV3ms3JiZz5gBKvTV",
  "key30": "4kM4ZRqyrRjSHp9agDrQBcVB237DBR4wxmDEYGRiBviEgzh1YEksWQvHvL1K6CZjJSgf5ELx69QoR81VfMuYkp2d",
  "key31": "22kgtvRDj4NUSmejWS5xH44EyKnEVhE2jwgA6FNRAe2bHMSQr7S5uo143tmCVk5SjgiqK9jEeK1SH557ny8PYCG6",
  "key32": "2UiZpMT4dsj7MTKaq4PSMkp2Gu4bNUkFbq8CkNYx3tF71xHcSNgDt4n9iG89KKdTye6MFEVcBZQPN1AYVNZ4VtUn",
  "key33": "5UDGkSFFXhiPzqWRBoA6iwSUBikeCCX1nzDKMxmSGiyHkgfA6rtGy6iGwEHfR5iLDAMv8KvxNbrKWYfbKtpyHePa",
  "key34": "3CoUFjUjgwMGs3Z7zJemxaC2dHopHNxrSY5fs5ZqvDwtkwHYbmSPKyC58jzV6ZpTs27fRp3HpqqHjBSZZYA7Yvgh",
  "key35": "64bAp5cNMCxXS9MuQfLLcP3zs1PCEWvVk1iYdGDuBZrZnstw36NDmUQvARsjuQkCAKGBYWRkhSQmeat2zTY2JN8z",
  "key36": "3h35tUbSPbhMF8qgR5RT8ReFPtYmdXb4WiCM6qib1wn7RK8Cm6RsrwXmh3nWMjADTWFHxn6RiKCP3ukiDjr6UQix",
  "key37": "2GPs7X9UUBRExCJjUHzCFgZCbwHkcWfNfa9Etp7CqAR3RdagELRMJN2oHR4oRpagKjbtXTbWnAhKHQ4S73F3kn5n",
  "key38": "2aqYrHZtWaoEJhVdm9uCWtXComQUHFH4mvwAsXW2uKo198esarNjRjbKaTFDE5nEXg2wBpzEp9fo7uDsP4RDyvQG",
  "key39": "9h9AfWJzUF2h9WpvgyV4RdD5hbPLdrkoGZesa1mpzuqGk9BCUWuuFHyVbxEW58F6RPN1tgKMHvSdXH9FLVYDdvv",
  "key40": "3oLrQeebfZbPVTD52DLcppQ7RpjRrZJEDgWoCNF1YkAe5oM7ULHCX3JZ8fPF9ebdvUgfhgHg4NwNJM8dEJcuca3k",
  "key41": "5W3d5z5QtNwTqyYnFGFTPbUsQKXXUevCeDswRsCaLC6SVVaUmsLTTG1gmc4buvz9V2iXDMcXZkx8qt3pj3bDnxh8",
  "key42": "2VSfi1FRYXGC7kc6bcxsm3JKKJm7K42TafgsxTMegtoNsmuFtiFFxZYprYZgWBdxKrzMg9EkyVj61kJ55LkQrN4U",
  "key43": "5nYMrwMjkXqiKYr5tpGeag9wyqNGLeZbpfDUxgzmrv8sMXoEH7BUEH9oKjHkUyCxCJNMuGG1GJ2d231cQau4pQKF",
  "key44": "24TBBmESj8DsHEdiskoiTwnZfPZkT8igKgqtANNRWZJ7yMoqMT6AkJknhMkViAhx9RmT1DWEVaSfhQrFmFknLN7k",
  "key45": "XnksiDAFQ4b4oj2v2u7dcygJeueLmN58ERFRHuwa31Q4huAz75Ex95bU2JZQ8hKN67Gwds297eUePJaPBpfJj4x",
  "key46": "4Gjcds95xp3iHJUTNGeDvpmXu69zMsRMvH1HEQ4G53GXnxGLTASMfTvn5Brm31TvFgHEptA6w2yfqQMDov7uATjf"
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
