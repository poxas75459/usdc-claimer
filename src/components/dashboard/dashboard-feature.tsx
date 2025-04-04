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
    "3pbuemfLu1W5Gzk8UVJsnDdmkJwFfDRyMKNfzsvoTuEQxY3uuwvLMabonewY98WYzRarYyfpVGDNCNBpQCke4Yba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahkDS5QxyaFZeAXuYE7iKXYgcYCZxSkZTqf9tCEVwrdTrrbTrCCL4dNHNmKnoVPnxfgyY2Kmy3v8AiLmFHNMvJG",
  "key1": "4vkz9v2RzRGUn32C7Konruh55M8v9twFDuEFzstRJwviXzeTc52K1JzeuZmyUr5pRuKSY9T4m3G3zaAwUJrDgEGw",
  "key2": "C1HNiWsZFDtsNviiFe4eveRzccHAuzzXniGphKuPC3NaazdXk6qTLrvDQuK2dnPQZrpdWkLY2thYpnTHRz1d6Ua",
  "key3": "5bSCA8fP8jfUAdXNLQ3Hudr4xEfy5shmrzY3YaCXhTzArxDgxz4wHL2VRfydaSxAPji6R5VcC9LtaAHR1xJgP21M",
  "key4": "cHbKffp7FahPuwDk2BetCft2YCQd13M8YkbSHm2zyA2PArLLeoxtaLCNHAN1o4yFT4VN5rp5C5Lqm9nK35LDvcL",
  "key5": "3Dv3ojQQf6SCq9TYAh8xNGxpYtpc6FwV7NwJY9RX1LQ8Y692AuPuGkgEwcBNeumU6gJw3GiSkffVhuH3kKRxJhP3",
  "key6": "WmxHTsgDibSk647J1EfNXGswGanppDtP5UYoBn7UgVi4r17nxSG8vhRRtfbdADzherZQwZiof9QTPAAf4RsZKP7",
  "key7": "5Qf4JhNL4DCSFUzC3kmBs5Vo8GbBD9XnULTpvJ6AzsBQJsQeUST4SyMidAe2FtCtwH2YbPdAM5esGyeNDmi6vhk1",
  "key8": "55Mihyhs2gKZfmn5PWuXWC8eDvMFY3w4NZE8xyoRaPjFYVChuUjm7aSVi4WXtShg89CgUw8Luz7DzSq6YMYZ7T1c",
  "key9": "4w4jhZkMArzGFvydRJ7zesjWikJfZGHJE6BAzMMXWS58zzLB4Hk2ou2HiCDtNiDb32vRih8QfLUYxzCfRQX8jA7A",
  "key10": "5BfdbG9pV9uyU8MpedQbjkEgekHNqVsFiMQ1otcDdQD5bPieAQwe5n6tJoN7Lx43XLKPFRUUjqAVsmekmVfps4Nb",
  "key11": "3D5J4TkD28WKdduMemqzbf15khRJvMi8wi2Ge8LLRNaXwR6WPZeXpjjSFCbm7cFGP6JDJtpBJRxp8UE8dvof8ZKx",
  "key12": "395DjWi7MV1MJCnWei8dhKA1iMoFaj7Rg69cijSZhjxhtwKtK1F1qR6F8HQcbxS6Ts26acse3j1U4qBx4L8xiKww",
  "key13": "2DeRJuczdVtQ7yqTwEg2bRUexVp1ixr93ZkHdhcyWZRmqCoMV6Y5SoZaJEjqeKqvSFM2AaUsevH2WpHyxTasF5au",
  "key14": "3FQcbMLsnwEnR6cEME6Ejj28tuMgMdawMXsT98Uy18mwUXkYbcfUaHhr3dq5SHDkxCeH8ia4Jdw9zvTXJGDoz36w",
  "key15": "2CU71i1JgVhFSnWVEA57AXMbDYToQkaGRSV9dc1jcAXtzqQsrKRkTxA7GVVmX6sPJDo1xCiykmsHYSaXGEYpDAKg",
  "key16": "5XWbqBN3aMbxBzVAFiU14BpfvieZj7cg9jpoLcRwVzdbt3wDvdYMivk1b4xaiXHfUf9RYp16UA7Rc1VnK8bujM4w",
  "key17": "pZR8NSiis1AjxbpcgeZieDudTYp3FHQAnjD4paxDomJwBhLigFmiwv3WFTMdGRUMwLcz2R2a2XQmXgVohcqcSHf",
  "key18": "5o6VoFenY7M3FXDSp7Ucr7JAUAXjrzm914V3ZzotPghGJRQDYUZn1C6FXHVEyMXsDvmLhAvQhwTHy9wxg68Db6WN",
  "key19": "4AreFLGRFn6Uuqd2vPWNt4UnttHqTpWhgsR4FX5cYQ3bKQHfHEvhwpW1wuyxs3NsTJiobf26saiGzacNv11Pan5R",
  "key20": "5AJuvt61eZa4Po5U1co22MQWNUmFUtWa6X3XU3DpY4Ji7g7rASapR5vaD6N3nkfqPccJRtVN4LYs2hL8ZBiZMSdV",
  "key21": "5RtBSesKbnwXRatR4Yxfx6buv6SMjH4mxYPyop5NsXjuRpSQQiXnhHWSKkmd4WRupRDd75HXywEmQUU2TPaZL5ZT",
  "key22": "4znoT4kAXdcY313p8wVx8JCMjFxceoYBYiXnuQUYjAVfokLYAVAXCb14JHysngh5R7W3NUVHkVyhKjEhzDyhbJRH",
  "key23": "3Pk2bgFHpo8uhmEu83Jg26Xgh5QH9XgZ9LfegQVmD55TVQ9pGBGQewSKTp2DSoYifdDSkgq9WpnHRynTVpGoiYVK",
  "key24": "2XqnWv8wYKQUzkyKpAnee82xHHtHgqXaGvw2esHkjitEKQSp7sTbza5U7qZphuVV2JVxmp5AwGEEbJpm13ynZVzi",
  "key25": "4BkXNFEdbidDTcFzhLBpoaDJJbB8SC32mEToYKjRXXkmJsnywfjNYKKi7SpofjAzXzGdzT9euVQDPrr9deNT6a4b",
  "key26": "3xtoJs1yU3fQHkHCZs7MgcoGutr4htqtBUf29ATDzNTan7F3ZaStcPtbAoaBssQ5KK3zKFBoycZAvJYXY3XNMdQQ",
  "key27": "5kPYnnB7rivgGowHNtxbx8HMzioP9g6JA1Wxp9Eq1V3FynCtb2p6Pk7GCT668a9rupuK9FJhqvfoYbqtnj7gdVYn",
  "key28": "5sgCQ4vLm4i1s54xvJJ8EimqndvB6sgYQT8gaZe3yGPPUYzHdz6uNkDFyCich152h9myotZLZ9p2en8XcwqReTeR",
  "key29": "31PRDQPYfXqp28QMydwVSpqKJACBe1sgySFj2ZWs5nzngc3L4LNthYDtAMGJLhG1vnD71hikmJrfZg51yr2n2U4Q",
  "key30": "4GnM6Z1esGCiRbBB9G59WaujAwtyiGtuHEXKjxB3T6kzax5ZtEDmfkS8zP9EoaugaQzW4LMJi4n63AkeE5deBhYg",
  "key31": "4dwybLz4BfkYg5TyhQEvhsJKqbUwa8wd7SCzZLiWtzQ4imcoSysbG5WFHvo1LTvnPaQW1KFqQyzmhnfbF7gPH722",
  "key32": "2NfbutwST4RNJnRwXB2oTtoivTZUrk3wdNAajPqYvCPQ6U9KTo7iyAXfyfpG7ZaMBXR7MpZtnkMztP4YpCt69tok",
  "key33": "2w1bL6Q2v2bZ97e1kSPXSNDKzE5pHj7nD8uQRbdweGdqNSWYKZArmbnAVBCQEDx8e65SJbU7F5SjYzHxhxSWwWCL",
  "key34": "ScaSyPd9d28RUsQfVpRvPm7c72Qhc6fguqiHbBAxq3Hw15GCFRyq6kAVfHNM5mmGUtAkf94JEKpyboGoh7mgFWy",
  "key35": "5oEpQsTEPf15XnocvWepzfnsp31XxXmFBWw8VmrQybBmjWZcKjGX8kDXeNYGQmoH4oC8wuArxfyE2qSJpWKWUuA2",
  "key36": "5Sb9hp52tSjh2R7vmLW7MPGS5wPo39N19j5TKj2redHicdpewtgyuNV5DxtpeHEP4e1yFv7JhahnK5eBtR68tN6J",
  "key37": "4KkxvE5jrpFco7nL1nUu3VZ2tYqv2qDaYwhueFLUAKRWpZdL42B2NPwpD1GGJEJvTKoEQUGfnYoVNcagrCce7VfQ",
  "key38": "2ddQ1Y6pA67DWFCDBxfH96ginxqajmFVu3ECRcCFNa2YYffdoDWnttvxCzP1coBcatrMSZUz9DeNj24Qxf4UzA3Q"
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
