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
    "5S2Qt1Bzg6LnzVbCoCqstkXTr1ncdVc4YW5aCrdAhcYWDAmXV8ZPzxhoxuAELQWqxhQuWR7Y8JxZXkv48f321vWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCgiiQJp11P7nnvBDy421C1VBJHVc2c31o6GK4DsS2DArz28q265neMxHAzHxaSsfdfXAXcwnbKsRXv9agmrtEg",
  "key1": "5ukZBMZ1oCuHycxc6pTUyHGwLBzrfGsBNyMfTYSmzeG3sRZKPbVGto3xSKWYRaHa52x4D1tGHNwijk9JQhav99SV",
  "key2": "4u41kTuLshYjMgajJBCY9fvNAy5ymDA2hGYvSc9NrVxcdJbGpuVou9ikE4D29T7XXchCKmU9dfottMoMi9KnnRG9",
  "key3": "5GEFetPmDoR6VVjr45nnvN8erE5zbqb2mHVGYPoX3gJfxiLSoz9GqGcvRFLVbi7fXQvfyemGEypPkudfmtg8Zgeh",
  "key4": "4emdXYWmr3fVUsQsWcEojqFSNqRMoMijejhRLB2uzwPPABrirPfVvfHiJucEFy3rgkFtSmbqfKSaC4J1UhGfQoYQ",
  "key5": "2vyZeyRhBsjThQu6i5fH5of8dcU5fZSP3rYKtTGcdrZ4tVanumZL11SJxC7zfH37pUuGpecirf8yVL59toFUNhDY",
  "key6": "4X6dwm9B7kccN91PmjY9JyB8hSfdQFk8nWumywBgqt9rudYW9YXYZ8vkM4gAPhGdB1pHukhGeQQYYjRF2p5TzFL3",
  "key7": "23YWy4WA6hF33G6tsiyCahbty3LHNEx1z34EtwJ2kDEwQHax7aAbnn7NSQnuKGKZqcNee9JK972uimayxQgtYBHS",
  "key8": "2onSUUnJTkSw89wbzy5vTjHerDtRDhWAWtJWRTXQqofgLpbbfrCvFVNBkVB6gykajv1qwDYkX3mQVzzhQpgEYkVh",
  "key9": "5mUTwRqVTd8mkz3mY1fkgHLEiDzoUJRrHqABavVHM6ip2KQXSTudYiBv2vNjpLyZeDEKji5A8XJ19dgMGZw31umk",
  "key10": "4z3USa4xbHmjdAUGhL9JXcBgriNadv1EvbyZms4iGMsDcrHmFfhX24LdvafCAE9bNb8T2WHic6XWJHp7RFF7avfQ",
  "key11": "5yrtrThmB3TmJRPLMw8P7HJN8NbaF9nSeYjbqGA9KsyZ6czFCgWs5vCKzrrR45KxTAAfcwsoiWUpgH5TTQ2y9cyw",
  "key12": "2ZF4Hyf13L6Tz3kLJ9ogbH5M7csw8Lj2gov39LNUKfoUyzMNXvdgVXdWeSXbNtQVEJVpLuuSDnAs8MMxMjNVDR9z",
  "key13": "5quf3XXidKiTVDA6i1CPRcSr2XM16zD49bV47YH1XZGvXKMm9eoSm786M8nm35b9dN4wKoxbdKeDSwrKnbkp8V55",
  "key14": "6V2aou5EhJoo12PHY9iyeStejCe5kPS244efEJk9ZiMJTNUnueF5hmB7zEgjpWEWuk3LwdhUpWp92cTrUkiqXeq",
  "key15": "2YcZKdG1rJ4FMXpiDGS5nJLEQ5WCsuSfS8AwfnYzNHAuLf783rF4ch6VRuxAP9pZw1ZvdYjXaEWEnPLek4Am1bAr",
  "key16": "QfGG3nyzDYJvatMgApfVXz2fbxMVypvuNQTkuc77F98w3iSv37H33ba9araR2YEV8XV576JdpcmvVxtARYQmDmv",
  "key17": "2xNV5APkS4vdhs2nUmEAhWHzGg2jFWkgeK94A7DJKT8hnbyUUtnGDD5JQoaTSGTShyqbrVjsiTAd2GFPJ3aAeqSA",
  "key18": "5pojWCnEwjkuj5Rs5iyTMGBnqcf6dahtmHdcme5RPusFUowYVHGurgW7nN3TcNtQZf7pgXc41VAJbzsgi7VBL4x",
  "key19": "2zXYwqF6YJozHr5GCPYg8FXkY4e7yKTJN718M72HGtbBhbxHrgnPT2Ky37qqbTjz6Bb4hLeRSVWjDyQAdLiYS1uP",
  "key20": "2jBoAWNdSNM66t733y4rVC5BBmYeGgUxpGpQJdrZ8kTYjvsr1r4kgqR158BxT5YXikvT7tuixETdTRDVKGBynMcC",
  "key21": "5QFhXpnFYS5RbsLNrk3SuXG4vwW7HgyjqG7A9WrLNsXQe7Qrjd6UPmWkH4d6RFhXA6GZKQJyyeVrEK2SGogcWPQ",
  "key22": "4JmJL3AAjhFzrR1E2QLfu9ue3Y4kdUqBV882jqHWwKuxs6UjDTZ7UYMkfCFZDwimPgiEou3voVw4RzELHrH1C57c",
  "key23": "nfzLLd61oB6KGDH43ChYZ9fbqkje6V5oWxgZEBc7vdFYrfujiCxAhmYjxpgqYjXUuh4yentQLtKJMyWTf9otkmt",
  "key24": "522k9jWLB2WmzF69hUVnoKj1dfpE9Az5CnwLVyk3z2dJK6xsneX2Lvoq4jMCj9N7Z9LSdxkMeWidK11uvfkgPrYx",
  "key25": "3dtoo9JaFDJGvuXynYpaYcpuDHCCZBx7ySs6V5LwzGbDTBZW7vrxkp6Mpgejv3tkXtyejo2kYDNvbsJQUSu1zgox",
  "key26": "2rWUCLRYTyvZ5PMuZpaLxAHPT4hxRhwkwgEKPaQGyitA714ihjXUGNRhjUZE5boiskF7sMPMWVEWPhXEKUxziFVC",
  "key27": "4iFHay4qUmeRELQSCnQcYzjv1Kcf5YddbXh84HsN9mnFNugqcrVTXLE1RToynuvoxyrZzUatPNkDZSYwezfHZTaa",
  "key28": "3kd1d692bfurP8sQ6BAdGKnyX5NneNN8TRatjsBbff4mY4krYwbqQYpyt1HR8QPfuovin4pmx7rw9b2ybYskJDm3",
  "key29": "3Gj1wecyNYGh7ZkaHcJDaodVvKqNGqtzVVPA9YhEaeHehJuvqzko51MX6RiGAiCuGBg4BCr3hFMrg4pEdspxYcV3",
  "key30": "7JW5wU3pwiw1YqVYochmBt7BmDqVTUdySJdjkGqASbGApUAN3MM7zYgiRMwJ52bEC5hGT3YZCJf8QxaiPTjNTia",
  "key31": "46vasXCNy9orBrUjPc6vgijyAGKvy1WThmREpHhVFJzTBJSjoxMAZ5iQtQpQoN2fDnzsJQzRnmJk82URaHBfneas",
  "key32": "25CuuHu6QuY9YVm8ugEME8XMwfyQtp5k5X3tk8nJpzvUya6eBrtcoqiDpaGGLDqgYTzvuKX67z68bmauPKtLvqCw",
  "key33": "3eN8kFfYzRZVzoxUENgfCtRXPmhhCZxDiSti1yFRcTXwshuduFpSF1KcnsxDDcGjGZpvur9sq8hmNF8Y2eyZ3mUZ",
  "key34": "22fXRf8UiN7VimrBnyCksYZYhvKLGGTzh8iM9DEevfYSd6NZfGdK35LgETy8Rw7Tpcsf3veZYBGEoGjqvGckLVks",
  "key35": "29atRx2Hn7vJfCqqdTR2wDRAowkrHrZpG3tihNyvDZbQXBGhN3AHE9V577EnbJN2KVSw7mkXeRNRfiJ8xRzHFn9c",
  "key36": "5iKUpzH7CL4GVTW1xaw3VZaTA3mPa9Ty9RRKZZSrbKqMoHyRv8rF347jZZ4QeP7uzGCg9Y8cKFtNcVxu7vYYG5j",
  "key37": "48GmN2AUcuDvJV3RKS2KYBqhiumiqYJgZwsa6FuG8wiSepm4horu3ucdmLCbcFJGWz13j28yhAkFzBLnBeRTXyzG",
  "key38": "3oDG1JZrJqL7M5uK5fgpbKt5sMNM4GSrCJCVEWPevGAKPfjqgwDhC2DzCUd4YUwXhNGfZN2eAuBQSYFY9CTh9Agw",
  "key39": "66cU3QynGjhTX7gEdY5sorrkEmXBm71RMzAzJbnmE5bW3xnLexPDMNr81cg66Q6F9CBu2ZaV9qaSpCe1qidDMAks",
  "key40": "56TE7QbifnQcpoqKdYX2KRw3tGQUDeK9kttE37gnVmMVQefwiyLC3wEZm1AqnYNyRoXn4FbEot3VBYrWDDR8MPkN",
  "key41": "2B8rFF6HHLytn8BAYsKQZkSWVz3HT22sDBmM5WFEFwzs6HH3DqeRn69zVxCfbn9HHmdfp6XxHdpxrZVqcXaAzffp",
  "key42": "28FXiKw6rhKHWVj9GpX4LMKYj4bqnCJNk1hxcZxAMBJpCjqZq1T2j8E15JTjWcVPK8b3f24b7Ke1fNzjq5AC3NyX",
  "key43": "4gxHedbeKmiyYiPjUC6Mk8CJR73nvcEjqTxa1AWXhqK9cKJMJ1b2zAaGRw6JVfbHZUuT13scjPz8J47uB4fa2CEU",
  "key44": "4mFYCmxrhfTQTom3jxfjsoUvzNJYpDDUQd5K6DAWVWgvCkCf5PHq5mmscjh7wfoyKhhD2ytW5rkcDjoNw8DtnDws",
  "key45": "2PHNwaes1PH4R8NzZdLxFykhC4NPW3VN3JVgdNyXo72ms8DTTdhc3FVN9gwrAxaQKX39eQmAQtSom5mPig4m4RYt",
  "key46": "52rQYxtYYzBbyJRaxx8CYzcNPC54TMg7pskyh2vR4frWHP11CJEcfvU31Yi8KWFGJ9WWigdskKh2CSj3R548CyRN",
  "key47": "21k4un5mbcdUxkw5AaZ222qbFvHKBdtdcF56SQXJRUSDopWksRTn5vn4UV8t9M3hhBNK8t8oHZh38TQmaGCSYsHp",
  "key48": "i6A2ivDZur47HkEe5L1rAXsu4ei8oksWTpbEFnbsNmG25xrD9rjHXXvpAMxsVcAiKoA1pGmrwkhgBW8dBE9vt7t"
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
