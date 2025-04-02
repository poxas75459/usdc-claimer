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
    "4dnzTn4DcLTPbZ4PbLtfY57YGoCEtN6qKZcEoomxqLb49QQiZXER9XTT1Ti5W5mhYv6UjtdeBdgMampnGyxSy7dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rf7yGsEJ2EjqD8FNRBCaX4W7e3ZwS1dUkRZWH91REa6eNmudU8n2xmQ6TpJzCTokmVdJeHY7Z5ScrKko7QVbYVE",
  "key1": "dJFZz5zpc173r4Va3mDZRa8b8c7KxYKiiY7f7jbtSKE8aEKUSPw6HBisvd1ziifX8tAQ6Ahi1vg6RjzQ8Nuk9YE",
  "key2": "3yNYNeSLE8ARZmeDCGquzqQgBepkXRVZfNtxPVkev9NaT1SrjVKF42H7usihUN4ktMKX1Wa3JypgYoN1RPh4JpdD",
  "key3": "4Vi54UNngk4XgDPiQLcowU9D7eqi7L5RbGdqvwqUoW1Nm7kDXbt13fs3zLgBQpqpjx15T1tT4XJ4vozr6Qsa8snV",
  "key4": "2syjNSKz43QtRqGFdWpYNc1KHdTJ5uzguwZgg89ReFj7a5k3jcnWm2JXNB5EYhtyGN1k639ci5puwrDmtESPkGaK",
  "key5": "4szvZR65pPjdsP38L2bNtmJ2sjvKMg7tyWULWub3BwUAeDo2QKAdfa6b4ix8ooJEnZbyxYnW3zZwuDnhivSad1gT",
  "key6": "3HKVshyoJ9ruhYy8mLSrEd2bHMJ8EcGcuUkn6SGwDdXnbKabA6BNoonW3XKFS2rThLRa4SCry3WKYaUTLyEm3UBU",
  "key7": "25hTG8ZG2fgCZBhPW5qA1o2uMhCvyG3TLmcKX6aLwckXsAnmT7XkuWdicS6TF5ETqd53iUTLUbBbrFQ91mUQ4ASj",
  "key8": "32g3nuHZ81dU2xDUGEmvmoy78foY1es5FVRmerAgYYmeLyidCwcabiM5g5DCuRryLztHkKuez3uovGS6tpg2H6Xv",
  "key9": "8aQKCRaf8orKYRMsjcmmMw9NcUJMJPQckmC8Cy3dfHpa1FdZP2vKBuo8tP35D5BJHZPkHsx8ef7AjBhVMd6ba3j",
  "key10": "35Csqw5LLumgiBAGPAxNu2tzKRbhYoMQMSsiZsRqP8JLyxPMLgRT1DhgvveumsaiYzMjP7WGX8gNPwMuFzwvL8Cx",
  "key11": "2PG1s5q6zw8Bf4XypUNuYypc2L4NpCMCSJ8c8GKpCg2evWPfpgbssVY1ytQc6338fPc2L728pJS25kTxRsaYMxoa",
  "key12": "52WHygiEcDRNUsG3UaBT8nUn7ueRwxjrJissjatxSertkx359THiLmYDeenFnDQSQ3o6dJFVJwLXiXJw31uRQTCv",
  "key13": "32jfEcQyvagwojUCaHaR576kWbYBNarjYvwDX3Wyb8dDU5UNSQTRrX7rNAZGg4nP13sdfWGFtq9EvMFjku7afoML",
  "key14": "2TNqE4i1F5TQG1bGbGdRui6uWE4cBFFDsEfmQ3cWMJMubZAFer3yxZg4UDe16cZ6deNodRt1r3W2SZUNzAZzqBTJ",
  "key15": "4hLHhxhTms6RxFNzA6teLHQPHcswtSDtMr3P4jb7NVpBNfwEoqZjBcihZiZpZj3A275eu1b7xWUbdNPMwCmB3L71",
  "key16": "3oHc8B45poFhFKQVeWCeiDGx22iqUVF4bpEsiKLyadXLuY6uYLK6Gd3QdkBumUkdDQcUthRJeZtoXeoBy8eM9Su4",
  "key17": "536gEEhcLF92h3k3K3vAVXd2ZSZbYPQxGbPso8CNaBGyfwr4K7Xo9wgBWb2YhK1KvYqryvuWzh24w1tFxQmQsrVe",
  "key18": "V2Tn9puSMK1zp6F49JcDnxEzq3Cgdoq5DcUy4e3mjmJBThgSYHnksn7p2vBCLFrqFGtjgAQZrqVmFjvfFq2Rp39",
  "key19": "5c91vX2ma1SivQcCLyNMQLTBG5kk86Yn49nGM9CUyrJX853RuneG6GyXjG8tY6dJaTtWjKkLUTT8vWFspADK3T2e",
  "key20": "4qCqWRRKM3dWjjVYZZYyEqq1Qh7AbtZBENv2mQHao5b32ihEhywBJSVxpGUM2VteVdwddqp2Wcxfj1hcdJsE6vMZ",
  "key21": "5eikJD8FoDT8Nh2xEpucFA9ek78osWpLDkXyLvpFGct9VdNVPNQTk4ka1BzPGK16mxc698Pe5XJ8MzVmvpZj4yb5",
  "key22": "2kH99GRZzamTXLymoXqBK5FtC1m6AZejNkcsBFfwS8PDfdnXWpB8Nh5SvwewuhJgGdbbuBaUVGkTcnX2k38tNkbU",
  "key23": "2qbQ9BVh2mbYYTGBpJcRXZjshR9U1HisvhzJqxjksT3JX7WpYhEJG4WPWbeKWAMJgUhVG7wWNn75G1KoxcS9U1yR",
  "key24": "3FnNCAScoVBWxnP3NwnYyEWo7QjJJsi8EXpFotc4tcVnBLrbNNppRyQiJVy46PF6zBohZzFKyzz6qJSXq3BiK8FE",
  "key25": "MFtAz3rrrtgVePZXiBYf6bvjeSK5svN5Gi6Q1a9d8xunes72icVxeZ6oXahc3r5JMxj2AstPkoCs32jGuCMoaZk",
  "key26": "3CKumxHdSurB4tvcpH519zwfsrNFiQQvS4rEV5TUxEwCMjYLE5k5WtvqFsM5aF5rm6xwvfHoXruCHj16ceprtSE9",
  "key27": "387X3yv8Gj1tp4tScmYvn1kk6ALed7pjhbxuZthpCeAWu6znKM5EKU6KEri4xyccXmfpKCScgamTJquicxATJDC2",
  "key28": "4MhUYxJMLqHwGWw2pgbS54i6bpL8vCWHRyFSuhGSBrDSEb3GxatoquFCqBxCmbvquN9bSTeAwSkPwg7VAhuZZJ1p",
  "key29": "5ZNDR75MT1Q23EbDsjiGjDzx45cTEJCEED6foH23aEZW39eG8aeeGbpHp1zHatTtfPy5exG9cjpCCAa9dsc86SAV",
  "key30": "4tRN6wvvD3eQb66uhuEAjR8EkK62VEPhXjRrBFiRMTRbofcdCoHpwAUWsym1PGtoQR9Kc4HtzQUmX1EXgC8xTqu",
  "key31": "5ivEWJDJNctHQ2vHad1Xk3L9xtFRJTJDLQ6rz3XYQKYL7SZRWME81GaZVGUZEpfQxf8PmNKHWxUEP8rHD1i26pST",
  "key32": "5K5XMavHdSptSsSXLajgzmEWMondxoFQbHga1AD1EsQ3zErvpacN6G1Hdia8kJm7Qo6AUP3wt6DMeWpSCsDPt3hg",
  "key33": "3pi7RjzpyiFkxJZ5vDj7Qtz4ugcSqJ98tAD1nezRfDxRT3U8YfXMK3cMzK1nMJYb39HFcZF3dck8mR5b1zdB1LyS",
  "key34": "22QoNUSyfnC8JNWunk7A51fm6btrYwFvmpGqtR3VBeyxz6ma2Zv5qUeoAXXegLpSuE8KgjAdiVNubm7YCvStbBo1",
  "key35": "5uD4DkPzp6AEnNcaXJgxSYvLRYqTLDNLVqnVRb3FC9VQ1MCXkGNMioQUB3pNF95uKb7XA8NF42ichFQRrhVvpuPw",
  "key36": "2uq2paXvhcKgMryu9g34YPuZzDyzBDQYW8VYV9pqhwCzA5EVnBR4EQGRL1Am3TnjR6ZGpHMcNhwXHAgrmWYssk3w",
  "key37": "2ijYvBQABgtkybEy6NkJLJHfJ4hsYPi27vmjH8cDojr7d58kscpTvZUXNgD1KyGL2VWf2MxLcYSjjSiyf5roB8nF",
  "key38": "2YvcQHRyCNc3EnzGoSYu7dKh2hZCPsw8aK4cEt2XpuFX3viXDR32mmDxGutGByxfqN5pqQZ95dVKdrBNriYajsmE",
  "key39": "24PxbY2bqMF5hHH13FUtMB6rPhWVVjAorHFMA98VfsWjyD783tnCPMA5z57PAhn5NwcrL8jt7SympZiAJb34Gf12",
  "key40": "5FaBQDAWT8o45K64MPPhNJFNeyxA5M5HU9jpLJ294sJcrKKKxhmfQKyUM6EvrvPuwzDWfoCwaJt77fG5d198v1ma",
  "key41": "5jZ5EKdjQ3F3zjcx3C417zHcguVYfaoozxzXXEqhuzKeobsuqEZRnzecEiX38DQzpLDHtcTb3G5NNN3PiYnb9Joo",
  "key42": "id1Z9XvS9caVnzU42mNQnLxAaZQquxN2VtadAHoMVcuAosSNJaajSPHWCAs2f9mHuv1Ed7Z8L4Ff1r17EUCWW1d",
  "key43": "3uwTwGKDtqTsGyi11ahTxWzBNrhLRTC8AajQPFbmFiNVStjDmpH8vktFjGtPskDo2awUH29QSdfZesguDp8HJWgr",
  "key44": "4M4tRy1S1pwrqqJ1aRMPJrWMft2fYcDUkMx5SeQLG512qSVfeARtHPerGnJeYpcHNamQhACjXHBwd4d5kCoE4sgz",
  "key45": "5Yym9yTPPCdNpEQxKen5Rc1CNBbYWg5iRHirjMXt8AhQJXJqWFZzN7u8b1xLQ4GyqDDbyzxjXu1foxbR11gPPJVH",
  "key46": "9G3Ze3EBZQRdijZVDKf5nqhmYXpk2fQVhuJE4sGZP67Ex3SHQTuUJ3hy5aHZaCoJd1MNKnzDaiA7aFvfPyCva66",
  "key47": "Yi6L151ExFA4fC2PeadyG9Q2RgcGLFyD1qU3VCSxk4XJRdvLXK9hFs8cepY1FnUYmQwpBtwoN6qrSjQp1spsN2w"
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
