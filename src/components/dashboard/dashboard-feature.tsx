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
    "4jHXC8BuochJpMF81PtU3ws5r6QZB8gmR6TGGMSV1ECakrjsAPnUm7s6esoFuhBphg2s65fHUPtrN3c3oskKAxB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mNiYyZ4hKav96sv1gmVL7xCU76kGzY7FCL85XxptmLthjwPVrUFG1GwZXr5VkdT5pVyWt7jXnYPAmKgZQa5RH1",
  "key1": "2fbX4w2wroToYNXADTahHDLo1fdSpLpxhmHbYVvuuznwEaNHBYwaL2iM9jnTsYJDU68qDakP7roNSWExDjy28Q34",
  "key2": "3g7kdj6gT73VE1CDF1ZBdVcLYvah1tnUsD3FvT7PC4NRe4X5SsLAJnMGjBtAgLp7qPxGPxmPHv1hT6LE1CEjsBke",
  "key3": "3EYVAE5RMMhfBNZzRnyYf8KpHoJyTC5LJrM4xitrZYXkioFeQrFk64u7AAayxHMUFZhM8iRTwgth4UFj7xuYqgNs",
  "key4": "pXS31HeJ2Mq9FNNR3FNjivZLqsjwAJL1GqGfWsg43uBXBCzPUFhfLtBJvAqRHQqHcpD3hjjnhTndBPNXjSZfkGk",
  "key5": "2JnaSKWSCw1wrrS4jmGL1dDMs3QjpgeTWcC6pKbJgMW9iK18D42NemuScSiQpWddGVKiuNLBbsrfSmYGJqM1bqwn",
  "key6": "5cPzbBYmzfNGxyoevHQsopHrq5idJLqTkRsDn8gbe61kMK38EK95nigtaVYJFsLPwgsDJiZDwU3qZTDpBXRhq9GX",
  "key7": "5AGY4q9uVozZ9x2MzLzW6dArpRUVDykhWvazCvgJnWjtaMk39ubfR8witFyhJpQis43kTZ7bKXp33rJBCgy7gE1a",
  "key8": "2JbRWzp8UQciWiJrPbQhGLB4LmreYKqhZsQAeFD6JGQSgfsN14LpaseAVgRwZ4VRZ5DYz52oMDo9TdEHnorQ2yqL",
  "key9": "2KsczkBDafuXPU3f6RrAsy3mWQKAsfmxaXGuZNEKLcxxYo8Ntw1LQX526KtPg4VE5sNmPHGJq2Y4k46sPLjUdAeB",
  "key10": "3LvaxG1VrLsjmGuu5fn6kxDDTtq7Ydbfz5bXmSoJcCFsQqxVoLVG199ZCW6KatUwSCMn5uj3meqdvbbZ3RQMvJk4",
  "key11": "VoB6ih3cReQvnGbN2Euw2GrtF5wV8ei95yPEp23XTqipnABYM1N1KdrnNP26uKNCC3CqpD1KUS6XkXyDULhmqNJ",
  "key12": "U4b5aUykkiNqUM1AtGkRKTaMmVwawzs3vXupzCQ8zUxjWhfBy1NhkxDQUnZkJPaJpJwbpZR7jKhy7saqaWXV3At",
  "key13": "56i7aPEdQBw4P2PrV2itDnFErraQZcmRpuhj6pLcHMxfkPr6e7ZU8de7vKxecJRetf9SrRR3H5qvesxQZUAxe4pE",
  "key14": "4nahhyz2a79kgw7fQvLENWq11QRezWfSqmiTRiH4g8hb4VugLEoL31nVVYPRyg5aBF3Qdz951ENKP9Jg2QDcD4of",
  "key15": "4Z6HpwqMyTertfF9wuUuYHo7MbcRCY8iqKGt18q8PJzsQmimaseqAbdbYrXU976JoBJmSP13qWZxKiMsbVuMTmu2",
  "key16": "bJfdc3KdqrvhtrK1joqSNr2Zb1xCtfV7CsUU728ixfbWjA6ESUSwx6SGKeB7BdfxCML3SGdWBGUm9nQCcfR5wjF",
  "key17": "46JzYQQs1zi67AiTf9uHcpjTqkdUR5UUa7Mac5MtaCu9WrX4CWzvrrDKYx2EtirMUcJ8davf2UQkx371W8k9FVtA",
  "key18": "4CUQnskCU6MfZY8kuAPauPis6jypQdAP3kN4cNmUtKB1EVZbpdFQcmsjEwVV2RF5yYsTZrLewkKM9jCAKwBwpmte",
  "key19": "534QsT1XRosZjyBJMLBk56i5a4jd5ufubz1NfdaDcaHaT8yTucKz5Dz3hbfBQq6AG9BFze4oB7fLyt6JsDpyfvtB",
  "key20": "A7RRZLsKN9AxNs82AwPRjLREq9P5bvfo6PHtdx49VE7L26YdM9p78WUSWHSyPM2bX5fUPjjxjswC8rJTLnFGewK",
  "key21": "41rcUA9RjJXSrCihwrQLmwE2ku2w1HwKxi6X2D5zAxrKsZ3VqJ27XNizPKSpoAzT6cscMaqs7tze32T4TSSRQdVR",
  "key22": "21KyRMX4ezYk3esuyncbCtBctNvqg83erJmoWCVpFCPQmneudsssHjFSrfBQJzqDaKxqsnxucoQb4rJ4g8jeuF3a",
  "key23": "3ss5cF5Y9WG6k5MXSunRTUHANauw9nsddjzmAaMNpSicAYcWcU5RTdMDdudBKqiXoKEoYXpP4QmW3Bgw1rXXuBiX",
  "key24": "2nDbu8Y4LvpHspWdkCUpvE5hiQpWrL4iq6t11Nr7CL4y6erxrm7ypydjVTwjmaw6NwAnLVosrKN6RKwqGHuDN2gQ",
  "key25": "5yH9WZ5VimF2RtPMXW8KYRRvUUK858k98emdRAtA1HFjPa4EPvVAdJqW47EsnCdY56FjuUMcVW6v1pANa4GcKMg3",
  "key26": "3zThP39dcv91bD87EGC8qewWSRY92E9xYZkX9vgky8qGwHkdgnLfhdVLfTwVApuxLvcbFtpsrioT4BBGBKQGxAqR",
  "key27": "5FP4MKaoSH3eXRA52ZFW2TJ7nqiMW9rjjR8urE2e5SfRo2E5eQ6jLLA14FS1GC4iaRiKVVCi8iKcXKvnjdqA166e",
  "key28": "xCqMXYiUW2PcvsDnQP1zxMGdzC6rYKh2Kk7SmJWHjMdSQrNoLW7Yo2G3rrUp2RM3UiGS3T1qVYvNHT8fG6YyEcT",
  "key29": "49y8g6hftpwujSPzcjWvox5mEJGT6FRJB8uQQT5cjjsxrap2KKMzjLSqWA5jcL5xsy3R1goZSZ9NY97zKC3aZmdT",
  "key30": "5PoRDdsT9SrgFmVLSDLmhS8xaDepEYPeVtzjhR8Q4osd9B8YEtRQ166aWvTVwcokccsvfmmrYJqiGuYWu3fBDaqx",
  "key31": "33iPFmB5BisncMtBEZUpMJZLyipUyem73u3c2vjj3VUr4Nbxnz4f7xV7NxsVw2LvkgQvRU17XndHzaZXcQ9sxPh1",
  "key32": "5cL8Z1uyjF2pNqddkgUqvYXNWbrTpMWnCcDVUYY8ttBKERGXwbZ1qY1BNpg9tcHf88PBsVAQRS1iWNZGexj81xH4",
  "key33": "53qejdMr9PAoM6mFvr25SVWRJJoWu8Jyy81cY15t1yKc3yLKHfMYFHEG5BbgnKKHsq2g2QsdoLWsxwcsRMaqhdAF",
  "key34": "2LtKw2bNLN2Vhaup8wovcrdXJV7aQ4zdc4KFsiyTqmrpdWvjnUfKfha7JmYKnUczDUGe9mgZHSq5jY7q7XM1zinS",
  "key35": "3GbHLiSmTf6Xk1HUPH31nCDYf6ZypTYA3CQeFYpGCY4AjteYn2uFGwyZy5MvqYaGivoemxNs8juLtdChgSSTRGup",
  "key36": "5B8Nar9rzwGwVhnZxi8o537QtjS6eiPXcXtGDKwHx4EmQrtkLg3PjQLTt5W9ykQ4wevbDjdGQt9tZUupx2RH7XpL",
  "key37": "4wgiFjKrZZXkq2jJDvKbUxCtrLBpm4bZ3Pcn3LDhWDW4gmEKXfEqfGk4JidxG7ZMRuqRVLHdWwcfUdaYAJPD5CgA",
  "key38": "4FZbCa55vMvAvo8xkDojAmZDzZLJKhkA8pg2oE7n2bL2sq7C9yYvXif6ZzdaQQJ81uXWYcLcFVoXkGKbsVxsdwT7",
  "key39": "27VuiZQ4JZPDunDXGZmv3S95KozJGuHo4HJSd5PZBHiCvqmRjXchjP7zsPFGuPiQoxXeSXoxgEhyKB3kfGMVGHzd",
  "key40": "RqQDpzwR9x8B5oNPN4YppWx8tQJfP5RAZ6Bwhtx1duNEcw1BGWrQCWDqGf7MVkR6AWWENNYRdqGq77yBhHm3Smr",
  "key41": "sG5AGjaQzSXVXmUJQY9BBk2tCny8DD17HPBMGzJJ6pKwWz1RDmVqCoZnLRNmbZ9JRCYLmjrNMgMjT27ij9p9fXS",
  "key42": "Pytubfyq2WcmQMrwyw9g3uTRiQ2Pmvf4KZ1mgD1nnvmLSk6K9JMqr8ASEVnJeRHimZji669MDNZS1ihtLDaVsJj",
  "key43": "5pUcqqP4BFTEFFhLrTZkwW7UDGNfTCffqTy6D7u78baE36zjkJuweU47BfQF9CAtjACAJQkTGuniDABJKgWTTmsT",
  "key44": "5WLynkutiS1TaintD5AJoLtu4cvRkTkB4CRcY5j7NumW9eLZfbF7Q26jxjH4JuphXaRQBHh8jRQSZTJvKepPjhKN"
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
