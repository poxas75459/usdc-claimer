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
    "62w9HbsvuygQ5SY33oZxLkVWRZhAJHn7rbCYuKDRx7Xyxhob5YihT2UrdofCMZEszJsMf37vuGLjehcmyWzSoBtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1ykuPy5MQiqgXqjAGXAiefxNQLFC9kheVpwDiysHqfk7igxHekcAbawNRExmCUpKpFXDHirnvtjZv1Hz511tVc",
  "key1": "5jcBnhdquqtUidXmZVce8292J2zS1VzTG26TfN8Lh6GuG4VYKbZaZ6pDD1tCwa5NSaGDkGYcxBuz3oNvMviasPMC",
  "key2": "4t2i8ENoFDCqRq7Y6NceH9mKt5n7QxPPUpckVZjvNhRVLZ2zkWhwLoq8Lcz9e1xeKaEwkAREmPR2G8GLLDi87irz",
  "key3": "PAvKqm8T37cQHQrMpCDshnfYkJgr3CWY7rkTb3q13z8Tgo2g6fPYjnzt3FrLoBCgznLHV99TpUJ5cBvyWEYjoLg",
  "key4": "2CRjqqNsmkPocKHYUiGAVr8eZTL3xfUq9Kg2fs3kv3Pj4EfGpa9aapyXTZxcGZs5WzY4fWYkYxEVXwaeHuvT8rvS",
  "key5": "62xCAA5S6FrmPyu6AFB992mwnTiBHct9M2H3nPPbx2yJBx9amLsG6gwEnWKQGuyjEm13ErZZRimfVySPVxA8YHHL",
  "key6": "5fbU2idNYTrY4V4i1b9k5Amk8Ny8cs493hnmP6LrYG1DJcBBarU1y6yife9buWoon5bLY48CEsvBuk5SR9tt9je2",
  "key7": "4DbyJqdEcUnpmHPkVkpwB3SAddykqtYWyQuZxC6UiscvY7Eh5n2m99XfMaqErrxrWxFdFuDep72GFrMydKqXq6HH",
  "key8": "2RBd1bUyQCDJq9qPewuUiF4SwZkuPt7YCtxBgUmR6Hs4vTPWWtzmmNDgnRowbAJ7wwL1XoDFNS58GuJxQxPX1GkG",
  "key9": "59FRfAuQLiBwt9rhMA4ahnd13eKz1hYhZNdohWyc723wueZPPTZ2KWAyavZ63hjLCGyhi3eNwg8ANNNCHiFdMX4z",
  "key10": "3jbDW3LU9NPWb3dt5gEqyAzvSK5xoWWLgXMi3epQwenku8Pdprnq75R6YxbTWDb4Qii5LdxiGWcNKgyzrtdyHG4V",
  "key11": "3mc7ekXvZrEebNjP3vKuNKF8Pjf7Li2Ctdatwa93qh2jvoLKb51cf1WorK4zWhkz3R4i4EVwdrTwSJ9JoVkinpS",
  "key12": "4dfbEMLSEoZvGMLMU4CWdEm4WC334XDGAqeXY4kjPa7grHM4LJhwS9DStnxETHaT73gn3Xb9aRhAKe1hSQr71vEk",
  "key13": "3Ho2y6sWRVpgKXJJj6GDTWB2W1eA4Bz8bYW5xgHxKwzZRZd7qRAQf1SYJDyPoiKkYqUTKVCM6ohP6PjpJZupHT2W",
  "key14": "4YnDVki9C5yZz6Qwn6xqa77wnuaNEFPeNwMUwGXmVmcKmVKTD2Ms2fbUfuXhaFVUszcADpnDKiiwhVmyseUmHr5H",
  "key15": "4cJDKhcJhFmGpkVj5q31G8SEVD7zTwSZXZU2nH4SK6juMNpYphBn5xYEdCzmEy4KB9XcfYFLZapTaowDQjZPCowH",
  "key16": "NsScdwVkjT9bbeF7yVK1qsLdk7wEm5GZwoaYdmiFwsG7onUrMgzcwMQn1GM13TmV1UtNmKDoVxTCLFQpdw1LRxk",
  "key17": "5m8yxJmobftc9kJXminHXw2eSUBfoHJM3gBWQyRGWye2kGEtup3CMWc46A1PeZP4sUsXd9U1CC1gRGdDiDZ9VNNu",
  "key18": "3eGisqQcUPhNFrymXzFGWAa5onFWXhtuiQLEtMV4DSXSjAyC5Q9sjBsiZ4A2EKWSDFP5akRStTth7NJP4A7ykUGT",
  "key19": "61Zm6FJLW5rXRFtNrPBQAXoPXBmekZGPfkqbfegpKxmsV4sfXjHiUiVUVKoC96Ef78qg5R7JxVxN5J7Jk54JDivD",
  "key20": "4DQ2WTUL4t8WFDU21s5CYzRkJtwq55bGyQcuh9Nb5RCWRv7m9bXyBfmT2v5CSSPs16QXuXRBAjYwcbmkB58vQimb",
  "key21": "4Puk64NYtZPXJe1KSYF8n7Wk2B5BuNukXn7VngwjKe6HHdM9ZS5vRwYKQfJ1r86mp9uS4Pf87rusSk5n767d95oB",
  "key22": "546BiLbh1J9tYBocxZwTHAq7wn1g8Kwa6gToVUk2VCV1cVmUVXVtfDnqYVSFZDQnGrbbxD27HbFPmnVtNyMwBFkJ",
  "key23": "2Cjt8w2fhL5jkGyuoSZQ8oonfAa3zQoB1zoUMoWHg1yjSmj9VNR9wG4c23g9VAAiYwbyecrCYczqccX76Cp2RbAm",
  "key24": "37t9jd5vrMkYHFuRngmXpovrbef69FVD8jYZYq3SUzrbaxYY5YXmt2Nkj3sgzFJdJhvpe4aRtNGkFFPxRRWXXjT",
  "key25": "3mbqYEeNjMtXB4xPaUVodpWsrpmi2wAPmMrWPi1PMHSHb8GnzwnuZt1kSFLxTPdX9ziS1JT9T1Qgi7qQ2Cq5ouy7",
  "key26": "FYK8xFBonTkwYybK1Vi63dSWq9k9qji6kkg96tRGVtfvVo8VHYTH8kmaUYAopA9b2nsFPRgFsMHoRtnE5b4Kd57",
  "key27": "585YifyfGFh4GVw1chyhQSjoKZDmghWqy8duepDeMiQrtR7NQ7v1TLZmhuJujZXchoAxWhp67nL68wjHeLzkJS2J",
  "key28": "QfCH3B3dFz2ExAkvWZyqnbWyDesEabzDquvXXFa7fh2wZnTaBEoVmkmAZ67uETda5McgttRmt9xAjqiKu9uB8oD",
  "key29": "5FbsUxYumf6A5r7Ugq85P61XFTsfNGwGBKWM4cnfCP1LZL8vwPNJDTzxFbkpQjNZzvJXLBGVyUSXvsTWgKYeXrV7",
  "key30": "5ycjEFMgWERepnTRvoRd7Jz9sW29J2FZXS6ogQiKJAhDJAkHRfQXT5myBRaJ91XYXoDMdnvccK7x19yMMiXsjqeJ",
  "key31": "5yxCcd1U9vh2BXfcM1QsitGLChZCpQepZsNGJz3oQz12MnZZD5dcZnGTH3xUWrXENEimyvzLm5gNKbSL4K64D1nZ",
  "key32": "3ApvGVT1dXvHBb1rGsDfoU9nG8p42dLMGoJ1GcrcAkpaE347hEXeKpWxPp1eaX1bpNDbEpyVKKLZ9EQDMbzCdaQq",
  "key33": "3fSdFAzsYJhT9DLPV1bnS2E2NYpWLenDPJjPmBpbNfMYfVydpKRk9kvCMNksGCEusybdJobmbpSmtTHLuSbk2k3E",
  "key34": "2z9SMgD4dQQU2KWPMNe5rfdhiCuRKQ6yxQz24s2ryLxGiHAa217YkmasEodgprEzfXBNNtdUwpJG5kd6sknguZYV",
  "key35": "3syQ8fbFDYt8aHqkzuNvatdHCbGGp2GyeNyp1jC1LstGuEmWQR92gxiuj756kpQYaaDbLXBjj4N26y7VyPc6yHZ1",
  "key36": "57cLFdZrJFQDbfuWFqCkEPspEetiYdigZb2xLCDETBWQCXoZpM1qPaHor6naRn95BTh7eoRJXnefxsiaRw3eYbS5",
  "key37": "3gGef8xUmAJnPBWHzzfs8nodT5aUgfotDyVbWDTR7VTjgBjHQDyskFoyaPcCMoWNavYdqBbumzzHEi5JrptH5Hd5",
  "key38": "29R6WRWoPeJCv5TKRvLPWZFx3KdbzqEcEyQrBtg7KFCPTG1y1HiAZuoQahAqN5HhLeHAjXchzeSi4Zmep3SkkvLs",
  "key39": "NJTnETbc8etiHv7pdC2Z9353wqWbA1CAt6ebmMHUZjxuPmDVjwdkZcHMiWvnC4g2A3eXkZQjjZhCY6khSdYNtzi",
  "key40": "46zSj3qoogBEqtjh58nnThxs4ze2d2B11CWb5kg888mYfLQHLXgGbJj4V9wJZXbLoWscRNCn1XhTQeUfuaoETYzk",
  "key41": "5rjD8U4qerBkvM71VQKHgCPPo1axRLvGNcQtZZjLD4uemvex4G7QCUBML6Bsg888w4nfiqEgfewCffp5etnRDLKm",
  "key42": "2C9CKArLeXqbbXmsHB5G5C76UvEDieRiN2PrgeDnHV7CjShVBYEJV3Z3JkB8z5i3DRJeWMCYd9CRWFHEdd87qFhg",
  "key43": "3eEmajFwMGGkUuT2cUH1TfzWWbntdDh5CEbhrrSgj4MZiyRphwW54t7ajpHrq2KjDSgGTuqtenP2gzsyaawP89z5",
  "key44": "3zLCWoxFyyXcHS6cYMiyVARbtLCU2dgTddPvD5qrm2wHdq11eq4dainw92uMia9Aip8yBzAcJAoFQ17FCGN4DKaf"
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
