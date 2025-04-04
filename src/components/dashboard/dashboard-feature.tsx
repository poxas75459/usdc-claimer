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
    "Q9wnXSdCZLV8wwBvKnyDEoVPWaswnhW1P2Voio7NcwnqfPRZCCvf3k6oQ3ooNQ32WpjqbH2TjaWKVS5BpoAuMWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bo1Vk9VRo6hrqEG6D2DDccXoG1VkLBG2LRUTixx29ipPGornRH749H5gCbUWkhBmo7fUTa33BAbeLYYEnhmYa45",
  "key1": "65kPdpsCer64X62w9mW7bLi63a8NxiU1ZpUUeQBpt6sBz7pbEUmptqYUs1PUuSmdJYboNQ1DLYgCpaGgSfoJzi1s",
  "key2": "QfUFADdJxBLNd2DhgVngvyS8aWSC6SB9eVF9n412ZCGVFovtAZGbofFo5MmPmwNUtVsLkk4tmBRFMAscqFkY5KA",
  "key3": "FrPqYpAcmLDCjXqiRTExXqmxuBPLEgfegsA5XK4PxYLGYQ6ko2jUxKkekNL6rQFWRJnP1qAM886xTYymeGeGkht",
  "key4": "3wozDHw5Gg8qPcywo8uPbrq488HUzenHAundffcJGe2Ku8b1QESviaPkvpiEYoAp7dq1TBLSU3wUT3V3yAw3V77p",
  "key5": "21USEyNpVA9SbbuNb237wLycWvcn2mhsM8md3joaKzsMwg9r8CUqCcN8JHsWtfr511YfmyPXQ61nX2itHCDHrFHC",
  "key6": "5Y7dRg5G64tgfCaJQyWxWw32qkt8q2E3Y6Qodi3hFkvLQVH3xm45zQXU3Z2rG4sgFq1bpSU3Q95k9SgBN5Yz52H",
  "key7": "29bS5vMaC3yMLZkZLoW4KiZjiYwpao9zqRuvvqMPVuNATScCi4iJQZxpr9DMXahggKwDrHKnwL74E5iTSxmuoKeZ",
  "key8": "5pWDnQ8QuzVaJ7aVJ8fYhD3o92CYTnAufnxkXSPXJpVi1wy3KViS3hwbj8tVZjSvqAihB62uUqG26oGkNdRUgj4M",
  "key9": "5S4s2Nnepc2jSBYa4H913cJkKQFjuag9dcXi7AFAThzpnBqC5XArGhiBtsZTqXAS4Ji5bVZFWZVqPiC5f9oZY3tq",
  "key10": "2yMy9MLzhgGYpnCpHvC52JsLkBN3oNqLc2dDGLEY42ZLErmeK54CaJxzcCGANnPxSttgyY8bkUjcCuZSF8q7zvWX",
  "key11": "yhdWQ1rdzJZapaoSXfaVYAB6cV4atY8pDf6UTnfUxaWLuQZwdp61eGaerb9qkREjAEvveVL7pEdnR5x9vSsPLov",
  "key12": "5b41SEVUtUdoMVrEootkcQDTfTMHFKYs2mULpTd4VxwhQKRhYLRpWU3iSUcqkxdAMJTZ6PzsecqcRkuc5CrUhY8s",
  "key13": "epBUMDbDFFSMvVdffWxXJVW2k7c9yW59qtxCmQyw7XkWwJ9h2ifm8DPEy4YEQYH3GWXvDoKBUjoRYpzDWGQx4qu",
  "key14": "kHqnotMavmCyHm3xABFEaC1JnBppzAhXcbYoKfe5gsdK1eU4n7RQLb8pYpK4zjbEjQ18z16C5xZQzMxHtnYgcys",
  "key15": "4TzjSFuVK5ASE9qwR4KSgjd9xB9Tkxenby5QvoNmbUiMmbNa5UDLJnAjtkYY2UtXFk78ijzebujiHk1nQp6Vpxbx",
  "key16": "3xfAKHgF7BC6tLcS75o8ZgifyJzQUdB6se6LK1NxdLDZXbhxXgYt6HBE9TPqN8mHngBNaitc51SqkGX2RcsiFG9r",
  "key17": "5sf7x9RzPfWob5rmv4LuZFwFjWA4wCiQE3UvvdmNKFoHDs2mhGsRGaJDFMzr3uPCcTBpxyBD3e65Lw1MM9Z1ER49",
  "key18": "62tKVpdzTCBxUngnzjmK7UrgLoN1iFfbavRDyCoMqMifwwi4BEa4cd1HpRTaJSb5Hdsg4CNGiXmF2GL9jf6Drmhu",
  "key19": "k8zQJYmUEFVuiWUPN4jPsiHFZFoaQmdw2n24TeFjJPKmnAQFqeS9p2RYdbhwfc2ri77KpvmiCUy1EZ4ocLi1hnD",
  "key20": "2zSg5YxQTfpx6BnfbfrPJ9r9w7ZRbCjshaSxF9hEcxpLEwcUsp2UV1j3KhSLnxe9eMNd9v3Xi6WmLpYYqKKoFykx",
  "key21": "4PQ9MCTgpdkVPEfPmD8jMLmG7F8xRNmUqPsHAv5z7XPZswz1YYwDh7LvAdNS9hLcrzyU2L1Axxr6HNbqji3vwSya",
  "key22": "4TEg17GSWwDbfbKrTSRKonRGhZkgMuJpEkP4SrbMe6darz3fbjMu3E4FgJGo48GFTjaewMP4Rnd566aLePsU65iH",
  "key23": "acCeyEQZkeb3tBVXfGMpSDepf6bgnngNBFrQy5dcxJnVJRgQqA6pL8tfe61hi5f1msv4GtDdmR14ARFf9PN4MWy",
  "key24": "AVzRL7xQ2viTw1gwZ2MmuuaM7KohHivQfzXZuGzHixPd4F9ntKK2uW3kdU4Xce99JmcYN2ni24EV9EjfgVn4hH1",
  "key25": "5PRiHKuFMRCSnn5n4KtuEYNmrE72yQwF87dXDBSHYkvavjBNXvcug9VCixedeyveb9wZBN1HbWYsHzCqp2uKanhj",
  "key26": "2mjVPBSDmzMky861BpiDx3oA98dr5uPUfeYtzERoXPgbXm6qukguaA3vC5hutZoATHzjSV3S9D8WN1WT2EkFyJVL",
  "key27": "3FxyAHf86b8nrQJTV9P9uqUPMLWNKAhXk5gKw22YYZ7MD5GSeU714jgf8c6qf2JQRSx7Ngs8QqyDHosL2yoTxmuG",
  "key28": "k9DDMUHfuMce89m5aKAUDnzmeY9oHnCo4NtcAGQPWRYXxvfcwPjj8X6ptYQpUYpuNhtjqVZPSfmfaS6Khvh8keW",
  "key29": "49euMW9WpnEFoEYJMYpXo2av6j4ewJi1Jo3shdWn4doK6KnuvG8YdvU3kZq8sE8KL98w4dkkaZQJK2ZtH5JBpQVE",
  "key30": "4DoHHBcfp6khSvUkC7LYgCXtNSiBkrj7AUyQ6Sn7KHMcVBC7KnMzw8D8iSukDRWM7fbyu3whrWT52u8miYhbL7jP",
  "key31": "2cnKQQJxQ7GY3EbeGXB4sAQdNcNRT1f8sVYUpoJkYM4NGmusyqZQgyJoD2GBx5cNzqtHRzywfkWGFJEKwixNJFxj",
  "key32": "5jQ49xeiKpnTvpB3JYfSwNkZj2qpKGDXWidSit8DTJmTJQTR8v16NvspSQoangMhR2rfCdfbtH94EqgszacLX2wU",
  "key33": "3opjwydNT7csV62Be7tw8PjDBmrXGUXwh7pg52HoZVunw3HEdyhhr1qSaYv6V8acZHpi9ubWQ5qC9WMMpaHQM8dC",
  "key34": "4ns1SK9tkjFKAbkKCktqcExpndRXDVKEjN4piY8MuE1wnLTJKJxm58CejABFynbtyT12bDt1vr4Mmbe84Gz9ZL7s",
  "key35": "eNGdnPe49igchZw4GuQVPsvvjFogGMpjK7mRGqRbuHji1gfygzXyerbVKHws3GMeNpT1EgYhAgcLmHa7AsE6PpX",
  "key36": "4VLrrPFc2dzraFwn86MMbHuB4oJ9p7W3XF9qyK1N8FsGxPKsY81aDi7HjG5hNLVYpQVkov2j1HxCbPFGTJyQxLfA",
  "key37": "xrwaYJxxgimCiCVAwEauKzkoP5X7cRJwREse2vQBG6WUmX8Ped4HcKJf5CXXzbVKJiCshR9Sk6W295HwxncrT9k",
  "key38": "3WVswES3NXxnmwaqkDTyjJL7D36hpG6H9453ULKkwd3szm6TvPBsAunKRTXBLvpNPPEtGKkMRc1uRYWUKNSgYkBs",
  "key39": "2vVvP4R9UaazvckBSTkTipjmDCf9ToG2E35qnX2YoRRqiwzV1iefqTVSPxMPeVq9ny1vjNKKVP6j1MqYUXNaxf6r",
  "key40": "5hbh1pkPwmYkyuwMTg5DMZg4yXFgfuJPWQjDF9UUMZ2M5wUBVUANkeM86Xf4CFY4heh1sweRkRYRWCjrXxaCXgZu",
  "key41": "5bk7je2Mi4CUbuGHJ2VCPtGnbRcKdEycnCCbreN3tCFcJxc8bAsaaws48vLHQbh9kRVxLxpcHnLg2By8r3QJaFRM",
  "key42": "2xWvE4nnz4mS5mSFbkV8SMjNrJNxbQNf5x1iaesjxcDqqPfZZuwsfdTSitt7G9H6pxtvutHw1qHm6GeF3CawuPE7",
  "key43": "BCSMuySJiMgy7YP7j5cfq1EoK5TZEx63WWTbLmG6JV61cqKRoSVKB7q66nTc4t7bHLqJMTBdQkf2JGnNkMVzgP8"
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
