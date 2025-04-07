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
    "2J9iKXdXxNteaG55dmWcJesrrJLYhGve96LEoM1vbfPcCnU2WSuvfusRYCmJYq9eG4qhrmVhhPHKRfuS9ZHkQt9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6pTXSrnzHSs9AFeEQAuSqbCHVSRPb6dEreCydjyoYscd3y4bDorjYd8CAwepwqyBmk1bjKddnBZhaEckv4F4hR",
  "key1": "5zGbXBNheAVXcsDaYtHo5z9hZ767PJSfyE1WgAmmw7nhdHNdj9hSXQ17XDmM4H7GupEzE1wLGwedNYW4JhD7bgmz",
  "key2": "3WFj6Yz7g4YELcw49nTqPnC9ap2xhL4pSKR1hZHUtXQUFCQmTkWJ4cvVyuXjyT8DDn6tb83DdAfDgpDv3c2B6CQt",
  "key3": "5uA7rdB1kncrcatq5PeJ7Tq8zvBUwTaCZYEPDPb9mnzD5sYjJr4uQKKVoUdTak4EYtn5yfrNduaT3KziwZbwhxJA",
  "key4": "38xxFY829zXvy3ycKNGAyJqbVK688UJbnshesHbduvZQnjztQdA73TKNkyegg5BzD63Yq384vYLVVXqq75y12TnG",
  "key5": "5DjwVA4jd4GmZBZbPDk7kFsFZXgcF99frkLcgUf4qmSYtACVMRh9U9wdazPopE9b6bBHq3dCEYWs89mfPpnc3bXn",
  "key6": "34rEEWjFycDgn6pK6ATFn4DN9hQ4Nb3sQhFeJLLNcio7s4f9LnNpXdAZ68xAwxew4enKviXoZC85b5TLSGSSrNcc",
  "key7": "2h2KfsABKdRXuwfLQoEcEi1pHsAP7ns4w7Exyyp9fkjevxR8gG1hZMe3zCdrYN22QYevTmBa5chUPyAnhofZDMvF",
  "key8": "5vRgTUYkBsuhdKahxMVakv2M2fwiMVhzQZxfHBWVumtZoawxkcqXHfizvhJsxv5gfeRP6kRvRru5VRLVcKdAdfCv",
  "key9": "3LDJaMTV3v632pUxnWsQJzov9qYTQFDh8FAm1s9611o2J78JaxCL8gq5qbE48GJmVb3P9icJBKuAB54DdDuAEt7e",
  "key10": "cr7Px8LDEwh1rKftsfBULuTvYJcKoeKh6BNrXUSmkoGKF5YkxbLPf12CEjgxEPcbgN244RDbPTuRuTZ9zwDgTs1",
  "key11": "4RcJG3UNtg5FZDjCc2YX2bsnnsB53kPyZxL9oaZDqBJhLYUAkMJ5Fiz8mMVWGuLHeUgGohXKmeR8MRzVd5PxwQW7",
  "key12": "3NtS9DT9FSg2EzpSzaTKS4TZhgrGMbELJNNfK2J9e3ogn7NXyphP92YtSjn3LHF4gKWGVcppdNXtP75LNP1U42BD",
  "key13": "2vTXbCYCR43A6DDQYTjKNKa7ttQGxrjzuUVZPZWwht4Ajfh4NTxEykFJNCVwh4nXU8P5UMADtgREQYaHr5TcmUGX",
  "key14": "HzioJa53nkkj7RkrTob9k3ef6t2gxbv9HSdMwZPv8PGLimuCFePiNoA3zpJytHz4GmAB78MjYCv81Xcv1J7Yujo",
  "key15": "7EB9CGJZa4fwhMLx3GuB97oaiBPHyKmuGBTR4UiheirUm6W2ydnPUKUn6kT15f6AvdmZzvyUNmRxZGZYLorkarW",
  "key16": "C3zxcrmkZNTVTWcpMjZgXya1KuxwezYzWABfjYRmMxS8gTjXKveHWpYakUaSU1gfWvfEE6Mb93dDbFVgYnUW89J",
  "key17": "5y5LpPjie98XWQ6AgKeRqvgKNMkTqQ47VQpW96EzmLyCDmYARNs1FAQKJQfBbuBzCBT8o27YCXspGU8PLFRUsRq2",
  "key18": "32D6menKM1uEPE1xceEf4oWg5RA39GaGDqT9VC35iE8BcVNvHBcxDD35v3kMYmAYPTNb8bYBMttceyezdZf7LUHq",
  "key19": "5DQrs4TQM9rjd9t5ShRCuD9Yn4PNxyC74wdcVSTmApjXadediVtpXTegxcHUtecFUukiw16twho9Nk5NYUfyR65z",
  "key20": "4E7V56c2H3CvD6wFWbJePmzpMsu7MkhpEq5aAvsNMAUykn7UcZ21Stzbe84ZPGj8ZLLRbzT6MzfMJMXBFAaPs7Ds",
  "key21": "4QL5AAWpnME1TtXkWcD6Wnft8TMSQTwdCSNLiToMXb1PFERGHoowAKGLL2vPTfmE4bwmybjLWNaERzmipfomiUKB",
  "key22": "TqLxAEnyYwnnGKnH54V5ap9LMmrztX4UWPbypGdCPURchH12oJTwN5C23BBniMMQZD9YUT6QPKDVoi2bZ1ExwGk",
  "key23": "3TNsHxYqtsXrD5mMhjcSBzUh5uhycMJ584KNujCYBbRJGuvkZU9j9pzqwDp5XkA5nj8yQ28H2KKWRLFkFbigKQcv",
  "key24": "4BfCxFN8c37yaRFpqrRR2cuKPXBzn2Mqcq6BbceEWrxvP2p2Pa7TEbx9EQwZC7j8RCbAGNsJ9rajZLzijbL2jCnp",
  "key25": "2Yw2o4okzPjd5d8L6auFoSwhQMU51t2yhCdppS8G1j2JT52wCLaD7Lj5MkAYRnyyhkiYZshDB3srzv1NDCwLXiqK",
  "key26": "64wzbhDLwR9bikXrYFGCyqvPHXDZMBnraWGyRS7CUUsyfpMT3QeiQm1N8PhS6FoWRNkyGeK8bVKCFuUVTVWP7kCL",
  "key27": "3b5h2EsEqomPLBTG1Utp9TtvgdrovWXfMZuxpkLz5ha8cAxjoux83HdZ8ZPzbSU5iGht6b3fhByeGgMnXQvY2pMQ",
  "key28": "Kf3gcuuLtUeo4bsw4sqWoiSjxUQeZD9yPMd9nX66x2GgiMp3zyQ1ZWYPrte2yoLAJA7ASPn3u2DxKcf1kzVizSJ",
  "key29": "mXwzsST1LyAjKonWYW4NdsFaKuD3DDeXjnZZrNUDp76hx2scrYsyATamdLa31zqpC4jwws7jVpJeDsY7bW9UyuN"
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
