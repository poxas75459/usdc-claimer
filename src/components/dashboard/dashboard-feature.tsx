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
    "5gLBmPBeG3zw1U8YovepmpzCFBup7jsfNvzu42UyKCMejrPMgZQFuvVSUghzkgDgaJrfUkQeTDdJQMKX1TdrL4zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vtMonHXWmzYnCEfzYoihu3BC6tEyte7TvKnhoa2v1Gqs7BzJTh78Lc3KzG4ry5K7LoJC9CW3q1QXcfNsxL9troU",
  "key1": "5QZUdeCUu1FLXa4xcUFAPLr9nMvnLjNM6xUX8Z97kwUJVWvb23dzMQrmeB4myS58V2AGgresa8JxBc9FPHkwg6Mw",
  "key2": "rfrXXEaNJ54hFLWHuZtg4UCfukMSBRPQzZTtXUhshruNafyB6wxeeFapRiC1jSXhzCjMziMriTA9pMyFNtV4v1s",
  "key3": "3JzHo8cs9XqMYz87hxCz8EGDYRWZ4bkmrigtvVEswHagfYG3Yqcof8V9Dsxf1cy7b7o9VpF6vbFxwHXLQUtPZWP2",
  "key4": "4Ga76SrqHiB3dreKeZRkDwFjAngWtaTyZ6xJnvpeZYMaE47PcQyFCPyg6D1H2x8bAismQ1JYUTuuyTkEAauPPzDG",
  "key5": "5f3mHha1eNVKR6PU7n1HGeAzBsRg5NRGSw2G91turWTDkStEkgt9XxkMNm7Azey3wHYw9WCirMjKVdNS63YcL7jB",
  "key6": "5xfmegKztV9kjJZcAUsX8jgNSnd83mgdbA5GrKdiYiMzbtSH4Y8nYi3GLum3KgNrreiX2iJjEpt9BQ7L5McgY8da",
  "key7": "334SoQhr2ApYFtbkGrLjkRtiZj7rqtwh2U992brCmGyEaWdQvs7722JUSmpw4gFLwbfF7g6EggxxuWiWV3iZBqug",
  "key8": "2HA3qaeEJq73Kuw9TT2vWjnE2EDzAEL7ew6drWNJM78UyiSaUrwAij8YNhEELUwfpAgW6LUepcRz9mMjdnXQkReD",
  "key9": "4NRQbUzoo2D7Qpo5S7p9vfQ9qApSnQw2UuktLKKNtZjyXuZrKQtYVFpERxqdCP738QySe4Zj8cy1pgPsJJDrjCrh",
  "key10": "563RXQe79B7F3rUwofS7xTw2vQBcHPHcPms9dfiG6QbieUkKFMTWLH9FQEq4tgi4gCjUAcUBGjb243PoQWp4gyn1",
  "key11": "guCepPHCUmGvMEBGiyvMiHaxYMuuH3KFmFTZNAw9wimxi7tzHa18prQFywhsaNZPMeN1NEsHPnqbPaoDQdDQa9k",
  "key12": "4oeg3ArqSzvXzL5geQVnhTpSw8TkKxZrZKEC5WUbMZWQLX3UtQyX5y8JUG52B3kqXRrndPrhuoe4h7HGU438vv1s",
  "key13": "228fw14Tjw85VW8TQURWsWfunub8H91mJNp4AiNTUQf2vDDSFUYu46wS1kDNSrzJJbthfDtLnVVVocSP86PTYhsR",
  "key14": "5Bwh2gqap1AbNG5G632eyj3GsN5gsEJB5mKixYCcUNvSZ8mKcGtoYpCqDo4joYPeptujpH2E1NMpYx6BwXXZcjmq",
  "key15": "MtcRfdPRs7FAbMHpU6yayBaf5qjEGw5ay9HTCjJ6kFoYYhVAMh7DXLVMHjmndgPkRTsRjKzC1Rxm9PHQ6nv3iGr",
  "key16": "4oNW3oPfKvJNzSjup3mfETvmC95Q4kchKgzMcWMdu6n8vuu3Fgt9FEVp7NeYX5aMyyiraLJLb6HeRyzNQWrYbN5H",
  "key17": "3YJ6KYfoGNtMmyDni9QMHzYu2ooiD8866aLGU9Hrxs3KQ3ZNZQ8EbXgcDP6X9gT3ve76jkynJ3r7FUmCG1h88Lnk",
  "key18": "5RLDJ6hY9rG53UR3Wb13jiyUq5qqAEU3RcDX2eL2jup87yBPQabXXv2DduhfAfbVqLEyXhJjUQiTt22uSUVjjzUL",
  "key19": "5CChP8ktgjyPFJsEhbW2HbLfMHhU53bByZFPSVhpe18wB9NqkmRENRnPfCyaSdnDT5LKaXwRRqZkjA2i8Dg5794h",
  "key20": "2jTHdHMVuoDMF6B3TrkAEvcgXMvij58VZQ3RL5ccx4iZpMiLkLCdpzaeBcVZmydpT49Z9AsnTJfw6ciVADZzUNRK",
  "key21": "3RZxwTooaiwx6MNjPX55MpPa8dcJCrkqcSCkf8nG3i87VRu6USbPxXsXSXwzBKbAMBN9UNT3byExbdsDiQRh496E",
  "key22": "4uWi2yrBDn2DudGiUVio5R15GfWYtZBwtJZ5aiTUyeVpTXQNH6KYv85h4Y8Azvt5AmZJouZSU5WjgpWenCRxTHE3",
  "key23": "4a3ZoCp7Rw1svm1fmWmm8vd4W7Smki5Mnj4mKJ1JSaTvoFUr293XPJf2vs4qtvNzAjXbdjYCGFcNRYsZFNFreJkG",
  "key24": "WcZUMumu9J5xKFL5TEs4Qk6qyBs6qiw2TpJPtLGM3TDo9EqRBvKi4extCM8Rk8XfGNP3ENzh8h8phcjbXDoSf3x",
  "key25": "39SUpEbtvReL5YUHeVBrYSuu8NcvpBtSq2WkEq4X2VafnpRY4DLFzhVxs7qNwC7ip2KZwr3Eje8StRRLRvqQtWv7",
  "key26": "4ufM1pbLqLzmUn8NRMDdVy2rCRNx5bo593NxNJrwzWfpikBsUArSyUHQrt1kz5wZDr5vXrqk7Tz355CQXngehL9B",
  "key27": "4gZKHpbJ31cZ8cxTjim7hkhNgQXRFGaapijoLQoSJ3xLjw6drB48hQ27iU1jSqiKRsSqTsFJsCG9ttAbgfLBB7gH"
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
