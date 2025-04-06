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
    "3KUeyups4UgwDTn5GneUiiboTeCKSWcr3TksXC1sWSHDdP8ETHiNpckDUNF6DxFtCY9Au9XGvEKKdLJz88Lg3Ays"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmX6svG1pZHxeNYaBG3Fx9SfjbwiC1dhj3AkMYDg984dVxsRD7CNN5GCuYsRJZmwHWrpLuV21hWTHvi31L1bCaa",
  "key1": "TFAwKFtWYwjAJq9rd56Nw23BZYo9p5kFL7iuKc9EZzeeMKW9YhACnz1oGaqsDMTHqfUVUk2eNZV1g8B39EMutGa",
  "key2": "5F4mi1QnMdzyRRnovR4M6ACJKMq2VXuRBk16JC2Ro4CRiiyduFaJGL2obpDWPUrtjCLLnkvtevTe9pPABu8LdzoB",
  "key3": "3XznFatWj1Tj9htvfgzFGrLYovUJXPossnhmyoJzeUFYodoUA9uJQDwYXgx31KPrR6AWbpgsswHJ1E27hRnoXujA",
  "key4": "jwvN1NXG4MnVkJh2wAmEhqYH6wTLEcANGyDuDhDkzPh9fsfZz7Bp5tPsqRnG792e6TEgeWUphigw6XN5UXc7Esa",
  "key5": "5q4P5ciaNPuvbCmGND9HsQhW2wg3UZbnrVrRRyrqMuVeb9U3WxRjXkH8ADQm4k7hxE5Csc5Kbp395n7SbQn9H9eq",
  "key6": "2EWySYvtAk44jbxyQ1UHkg2yHH9ZzoE3fo8Y6ZPZiMLsa14454bVRBp4zjz9rGBfA95HiZxUkD1Ewm112d77ckqV",
  "key7": "4A7jirVBU9vrwruNbN1UzbdXw9tgw7oeVUX6yX6bmjGSaQtmaTYhSK1PM6eVCVwyCbgpwVXF2HoRG7cBtJ7S2aFg",
  "key8": "QU765iHNDuMPKiGaGZnasSJiRpwp7k7pFuCF55ipJLea953NkjKCF2K99NCWKg8XN4Xa1YbydQrAGooCkjtyGNK",
  "key9": "61NG4Wi37JD4hv41oorpy9oM9U5a55VmCUvxkhzQNKqv6vBrw2BXp8uLJ8cyyo9FEdTggY8QDcaX1EQk12oVpDqo",
  "key10": "5Xfw8kX2GxgWcy9pJas51ruZjVATkpmFCsAfX51NR2aZje8LB69JD3Min27RUJgxMYqfweAU9Db5ALTRWQtuV7G5",
  "key11": "6hTJzzjaB8G245F9pkF6cz7xM3k8U6tQtXRbhutfCuBeYnztoMHroYv5Ktso6VLPDwSxbw9KqiRVKaAmxAGd6Zc",
  "key12": "4YWWQnzXPdQhpi3h3earJWB1GqELjHVyDQb3cukDmAE1paQGzyt6hhgoydSJhFRUbegqAsykaPorD5GSfsk7FwKm",
  "key13": "3xgPdyd8WtnTsdvwzYZqmQoGJtR7J4JX8mywzaYqe1DVamUwckuVrhoVYTksgBMP6uzd54Gi6hKU3XSNCpgkGDmx",
  "key14": "3dY8bq3D1Jxnvt22VCX9TKe7RtasFuvpGJFDagVQ81jRLvjDwbvB8gsPhJ1yCk1yGE8iGbSKS9rFt45ZV3LL2VVM",
  "key15": "3dvzVaXGvbRWVfbfPy2TdtYBNRUK4eDTs1X7LbJMzxVMY8yXT5vntNkgocum7urWLs3zvrCR7VFjRHpXCxxicshx",
  "key16": "2MG5Qz3yJTikHXuVZtBmjNK5U46ZboBS1Nh8fw6QQdySTJpmtpGucAwfzYYz7samQgnKEmjVU9LQk3amRLyJpbcn",
  "key17": "5x4BBYqgppoe8kKhEfzbHwedxqNwydcLutF3gFFhRphktS8uEB9hC6TZKnPaVBZarH15zKop6y6wMnQHDqac1LKH",
  "key18": "4bgNyGJkLkxRAFAGLwFTLYTcZVxekq1xmyHuhCRhGyJLVVxLfMQ95RQm2WFbnb4xmxhCJa25xUZRQNj9Ex911nuc",
  "key19": "4DWnAcrMc6qhKreES68empShNk7Xzw8xE5xmfLisGAJEWfZTkkxsG3jwhkf6JLKDqs3c8AGJWTkTPXj3He5jPYds",
  "key20": "2U1bEdV425dapPm2CgLzxmu43FWFKNxH69SyKNoNHePXSzRi33Npn2R83USgMxZoJ4nAv8z9cWvyDWdXAQorhW6K",
  "key21": "46AmPTdgekqkJXchGjGCjfL5ZgcwihvBCDuTG7dwHbFBXsej3SiXftVnzJjtDyHroHMcQT9DK2QWed6AFganCBHz",
  "key22": "5MUC98XM89DJU6RUoptmByDuihjn2ZSEHGCZakiCMmx9LNU6BNx9LdkHe1FpWycnGN1WxxWTGkpVLEqLgYEmMryU",
  "key23": "4Mz6M15ujuWRNSeQ1vvakjMHghASU5FS2CZytU2VfoZmdXrCKkQxPDvm5inj2v2tnv23obo8XYWW26zbmLhoJ9ju",
  "key24": "vdfTNsUC4cHn4NL8DN6kay4ZAZ93LZWNhVky2EgeTawHvQyT7BrcvYzXzz8Q9UtT1W1j9d32bmVdstBFaUei2Pd",
  "key25": "3FX9sZPrYDtAfrNJ8Uv4rBbcx1aU8GtKobL3LoAokQ2FKcHtZqhNKs2USGbP6eSbzbRV4UX43smmFwGNqtSbY4z9",
  "key26": "3wKPTx88HUnPKeUy3PtQxQcrosWMwQewgom14QSXgGg9Rkqc3nLuKeD7avavaqVvbxtUpQLW4sF7Kr4Zmh8k11C3",
  "key27": "KrWmf8vAK81iH5xhtYTTkfeMcSgR8Fseo1N3DSxE1mz6cruX8XYAP11wpHXQ5FyrkhQRGQ3yqBZD19bHVSjTwM4",
  "key28": "4R6UCJP9o9ibmMXfe4U1hFE4FVCu5xcRcsv39DX1hn2R9K7ec6RZ8kCkHJnDMCv4rBLATgECLV1mUCNotN7dU8YZ",
  "key29": "49XiWwp3EXvggHm4vbRjjE966YriEo4Ji4eYnHnT7Dbd3mwPJDvyJ8jR7u2BJRcV99WVUUD2wEzExnFRFePk7hxL",
  "key30": "2rrLRp445XqByr3CwXNwYK2uckFPrkgMaA6Yz4uhwrjkrcTiLdzfXaadnHsjujKX7WfYofG3vd4mHnGUNXHin5vz",
  "key31": "2EkL61Rn7DUHg9wBVT9hqsb53SgWxt8fRTzSUixPnBV7ipvftdvDC4Ujy1CxMXBvcNXjMy6pXjrjwStaiBg7uxLR",
  "key32": "QYExe5F2WXMvc4GF9XK9fQmw9YjHodsxQvanxnTAyKwya9g5TBVeSDnar6tn1HzLNRBtXFzpPvbLv2Sxc2aKhSq",
  "key33": "314yp8UmgfiH1bHWsMXk1HJYA7e59wEHL1Wr1BN9w8WaZzM3wtrW6pzFvTDb2ZQP43MgMFr4A5y1eEjVkuGssEgK",
  "key34": "5sFC43zdx1MCs55m8eFbq3ba7FaPBXXGiQb8kUqEYp7tnVZ9yVhCAMvAvXUY6bweCcay1sFx8vXie5QP75dNQf8U"
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
