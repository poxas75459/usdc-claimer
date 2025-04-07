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
    "5Km8ZVVnZN1nX7QuCayQPGmWtbVjeC573o66oDUsKmAwUsZn2CFcucf25iSVJK9hFbUfFxdEnB8rGSMac6CYXpvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfMuBaHcwky2Ukk76bdtcgD4je2sdJUWAptt14h7x9m4Jbnyw8nBg3b2i8TStjiEsfYDEYoSjJDXrWqwb8aGbay",
  "key1": "2gLeyc5fa8qNCy1CF1yjNsFcYG54xK3i7c26ytxuHB4j34uu6LM9LUSLHvGrnXgpZxz5vaANjzL5vEW3WouaMHNT",
  "key2": "4TXqdbMXpe97CsMAPpMtsvWqVf7omBTih45rZu4iJbRzga4PTHJJHEj8PwQQDoisEJL5EjTfL5dSrKxcjkDsX36K",
  "key3": "57Khk1KnGY1oijGhaqeopKvgcXbXHhQ2LVYWu4UHmc8dfjK5b8YWbUaXffCmBqJgQKohmBPYHUC8FZ2KNVKcbhna",
  "key4": "5F25fMteLA1iXbWxPAQ71R3hSEkRzqR3pEve9wr4upx39ACxcmHMCGiKB72DT7Yu852BmLR9PzJe3tm45GqaSuLh",
  "key5": "61xpMVdvjdB4Mrvgbwgs3DmAULYppoF2NfwCtEee4SdkLSas6u4Ve5iz5ATZdEiKq5DUehpmh67mH3wpAcZoMQbS",
  "key6": "33y5xQFdzvbS7sKCUbgxXTek3PgjGWyf9ckjK2ZDRzd9Tv6q19XitD8wrGUm5jYgwevVkigDDsP63rkjXupWvCj5",
  "key7": "33ZgFidr492FZWhu4Y9VCnPJvb4FPXfBxgirLp1hUoLbYpewegReEaX3Zi8Tt18ZWSjdFXNW2NH3rcnrKAFBnxX4",
  "key8": "5UNckZv7FAjnzpW4LeyqeHkgPVNEu1gY9nxhyPRHoJMPyg2afQKis5d29TQA5DB5XhFAMzYPPrLjA5dmYPK8LxCC",
  "key9": "5FM7grjQCb5TjVKHGVDPSqi7PZM4mHidFSHknJoNtRNTACV4Yq6HHUJtfAmSCkArfs5xHghxDy877NnTELKBAuuW",
  "key10": "UQ76sCjagCbm9kDmCWXJSzvDgajJgeRK4h3SCk8MV3FSd6VpDfLf4LeP7jUDR19aQxQjWYUr5zThNSUR7XD82pe",
  "key11": "4GY2pMcJEzbyERpA39ncaZ69fXzeVHasMiWhJyoBZK6kmMvtqfsafisae3GMPM5Kq66rBmHL53scxvQ6W8j4NzmD",
  "key12": "4SxNaojGwveb62wEc5tDffidAq3pQPwQqkmVfkUjQVaZr73osshbeGhTYAxRwK2xJ1QmUHaT7cDLubwy9VPdLmkP",
  "key13": "64691MvJWeD9Uy1TZAJdD4VMMpCtiPVxEXFytVAsv1gtQtSX4Dg4BgXXBAcUE8poB8ZJ1m3zgt5VnPgzM8rVAzf2",
  "key14": "4txWWSjC72vtchHBkUdgCVVCAYj3RwScTCwZAVunQQ56P4kPp3qkP1f5xns9iZKy3Hb7muWoWqU4vs3Q3Zpu8NQr",
  "key15": "2zxDQrokim8Yk2qBkxf5Gsu6h76xfg5VKuBcCqqb1xgQwrVWCmCfxfDFgJYYoLMEDwKqN1pG4CWNymvtSs1zEirX",
  "key16": "tbZ7BCarxqFvjmtABcT3kR9ZhQEpSrMDQYvrBfPyXS2LvFHd5aPs4vtwTviYTcPU3VJLZcSz6zogQ8vBqbtjW7a",
  "key17": "RagETSdTsteVp3wApmaBaGXbdD1caFwR5wbUikFwSLZYNPxa364Vph4Z7CLTwHXYVN7HR8YZLaMMVRCxCaifFmC",
  "key18": "5gxLmwpNup5Nqg8TtYAZeXL15Mm196axd59WxEstxfGFrQP3vaCvDDh9jqH7YhgemcKrjFAdze5X7wkbNHrm5VCe",
  "key19": "TtdsttjMuKERQf75dmNvKu2aS56L8gX3yBfHDAfqGNPUzUEMeEr3rM32iaSY9tfnZaMWyKtkhp3Qgr4ZWYVuVXp",
  "key20": "3q6F3dSYGZYPSh1cFq22x3hat5FK3GC9o7DgeGd41LpWdP1SoNvmFsYqVNffa19hGN1bEsG9dBxbXhxcMAqXq4hS",
  "key21": "Z9tFT1LWMpGNCzEiF2BMVkswPA4cwQrqxsACWsDAkwdPPhnicnnhtaNT2sKVTnPnDMPdchXTwvxdGXbiWCEkyic",
  "key22": "A74nHhBFsRzsggYptfJNGEZ6U1Btv31wYscGbURgwwz4fWmeecZKpqd85dWJFLoLjgqUrEgFxquJNTGwvfRqSHd",
  "key23": "2UAK63Y4NVwSxunzgECXC4AiDvBvEKjpXSBe7sjRGghWXZMbr5F7zMRpsDGVQXjbWy2EsFsdAnXhSvtyHL9bhjed",
  "key24": "3bGrQS2PcAYBY2MngpKxLGk2YLFtvzz5quRTLnC1f1g6Wc4MniozwcMSbN8daCXqTC8UthpZ6AMZFWeGZ75CiBXo",
  "key25": "KKkLa1ESwpH3AAxFn9VYXj1GccpB5oS8bM7gD9MADmTXXmLckcPyEqKvqipLUE3yiY6Hixn3YcecJ6ZALKhdccF",
  "key26": "VczmAc5cEyeR6kJgtKziuaSPrwXSogTDH6NmkY9B5ZcLAVvYyiSz4sryYH2h92E48njroroRgmCWYE6rY4ntz9X",
  "key27": "5LeHTQSanDLiU5PnThxqPLQVAVnKe3nXEqFcL1hy5ZnZ86LKERmeNVURQN8CiAhc1VNcRjkQSTPCZYf6cS51ecMx",
  "key28": "3rAoRzf1WtutVHXzyCBxMvojTw5RNpyjwtAP9eW6BmxQJYgt3nJm3Fj8sYaqYfm1D8zKiA9LHeh6bui9RL1wMMZ1",
  "key29": "3oAbc6QumrQxmJmbwaWjWq7587Lqf2RjTQHapsnKxQN9js8Q4v8MBpA5eVTMnc3bGr7skfycL3STMYo8VUBNCLd",
  "key30": "KhHk9ZUPhqGDZ12ag3DjQ26nk9PRfqmCyRywc75AfsZgrHBSHUawMr7yyNym3aq9XMd86tjm2r8j7jEyNNk6Jb6",
  "key31": "4agUmQeEZY2KsK7vMGumcDLSkkGwtmBYYyKtcoRviG8xLGjrqqr4gcpk5AMSVJUNTfwVvHySbgof9ERYA6Y4J9eu",
  "key32": "4mnRwN7NHVYUj2bQaPDTnf6wmy8WQVgHSQ5MTyjxwbBw94yXVEAR7HVyB3vxyv7kJedcB4v3P8SReF39uaPNNdwd",
  "key33": "JkfrsvC3qTRBisekxPnq8kqd7hb1WTs8fdWQGmyB9hoq1QfVcmpxnxV5V69ysFLn6GD1b1UusGxJgj11agP2W1z",
  "key34": "5wztr3VnU1AMNiNdx6fbfnzB9iLcQ8MhSnbyfxqhTL6hVu2xDcNMPz1g7CtB6RmV6qj9iwbUeF79ZHziw1nZsfgd",
  "key35": "4LP3Zs3pDMNoj5MbmVGLpJMwcwqkviGBqjFphyCzXMBFCivmhiCG98xSAEPG8oD1kcphTBRJv7Sg2VjDYR6cENbm",
  "key36": "3Wi2xryAy7hNdVdpKEYBxPewCXWqXkquTiZoHq8HCEp9JzuLtx3PBs7rbEScKJBuXy89qqJgo7ngRdKT9GueRmj5",
  "key37": "2GQPZdfeN7t5SVrvGJSCEMfCxoXanDQpj8wAUpmmA7ZUnrooxcAG1QX4dcbn3rYsmgUNLpdZpGcH8oidYiintDXV",
  "key38": "gRH8b6eWEeVSmKHMYqmHbzXT3CLHyKszCmFUYFhhYua4m8VuEAJE6PD6qavaPHKXAwEVP8ZqMibLRnJHjDRVsmR",
  "key39": "wQNXwNMtHfQVwfdJD17exuYaL1rceenDmCch4PjdYJpoo9D389Ho7bANgMYw46185X1wX3WG9tjkT1ZMYtfyJg8",
  "key40": "UuM9vNP7zXnau9FkHrYKDF3kX4Wg4w974jQunfmMK7mHG9AGzQjQatDQ96NWK659RbcrdqaskJg5tdkpaFDCaFL",
  "key41": "42SJRV22NLv4Qn6yZYo5uwTMMoL5J2DozZQUJE37ZWo5UV6D6D7KUiE4Bkpmbn4yX85LJgHYeBDq1QNB3R8pSq5F",
  "key42": "2ESBgPbTibGMRXgQ6zkyyWvYYkgAocwJNCgpPwfvTUgiywXeoJTBarb21eyfuwKk1H9zZjzoz72E23zJ3or2nBF1"
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
