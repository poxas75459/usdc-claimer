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
    "2gSyAZFuW9zFXq3BBHzvLXn1ksQoV8Q2mBCnsx3PBPHz2G2JEY7rH2D8PReh7CfnPGRqxj5cAQjA8AeUUv7SdqLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nK7g8gT4M3XXpWeFjturHfie9BAHUYMzPyK6ADQTFENKGtuS4yX5fPQNA39EzBFuT5KtA89mXZcCzwrPJBpsGdg",
  "key1": "3P8GKnjWxfxrookm21WDmfyno4uCY2Py5seJ37qgxqpczfdHiTbz2gczfPyosswgfEnAUJ4iLpYtcNAGjxW2pxbr",
  "key2": "dnmYS2Qzi7fH94fkS7yfDpAyJMgvGASmt9Lf4GCLJPrevxJ4SNuJ6Mzvifcd3yCfnXyHxMd7aXt6ig7eHXmAzRa",
  "key3": "3w5rdhCbe1myp8SDrSUfTbD1avbyxjd4G9VciS4sHXdhx45nFhKNj4gCAQ6DpKUmQrMFP39oA4FZsk1TVHcL8fzB",
  "key4": "38vuREUEHDDH85apyYPkvirXevns5qauvDRMxohLCif9uLdSmwPmPMbvefAQpTSCdyJV2bD88fvt9Bu2M7ozue8s",
  "key5": "4pmCpCXNY4see1SqQ7o8xtfsCm4pQL6RcEhWndkARjLLmwHWCyR9G3PDvvuVDEsTGoETbKF2iTJTnAtGZsoNfUMq",
  "key6": "2JW9iWkudzG1SpRpgGSYWyf26PjJGi9GoP12xfK8ZixVUwSJQKC8FU5boAr9EArpzSERrtbNaTtRLSEdjQP2Gfid",
  "key7": "3fPUZRfAPb8gwupmfmPt2KJFA9hHt1BLqwJNVb37GF8T3ymm1NCzgQXUotRmQWzf2mfskzJLHQxeeHh9YD6BQxbk",
  "key8": "WfwrTNcTrdJLdsDMvKxdDQ4uBjoiGBUMThVbNwbjGwXgnSV9qQiSs2JHcda1288XM9yo6LhzH6vg1KS2Qm8zFdk",
  "key9": "4BevY5ScTCRrsQM2Nq84UbaLmUDNgdSk69LL8vfd9JPLpLRnL4fPqB2TPWMnU7er5HAe6mmZCwHWmw1UxcCTzJMs",
  "key10": "4zS7X85iNAiLhcbrEzKytFMYKAWGSeGRqKgVHBH73KNehbxJGxuo7hnKKkzhdLRmrvyo2HgLsbdBFMs3GdqRmioG",
  "key11": "3WtCVAMmDVQqoA4vckcSb7McXL4Lcx9GcvGv4TNoZGfRkBgakK7KyPfy5wjyKbJ2hgEGnvvW7y5SxHXL8kApQBYZ",
  "key12": "PR94GRAjrTzMvEff36q97wpcPUbvHsjiHgSfNfeTaySv5KwL7LTgD8YsBDE75RT3LeHRyZADXCH3BB9i36hz42C",
  "key13": "3sjeyMzSTbcxys1yqDzauBfDUXyBypj2QB1AcyozBjEKMbxu3tzK9AT4DAZfWinnoveCyUaRtccHr4X4eytk51sF",
  "key14": "5PAWW2NwNUXBXRMCVX1ng5SfMfqsYX6mnSEfHbNxD1C4kUdUSR85sE9s3Bqnfm3aoCxWcpbJjfiT2u6sUjXxfG4N",
  "key15": "3zwMTpovSihMs4wWHCTtkZY5P3YAmLVCRYbsLrLrfSj2R5DGAxwdruXtKNmz8nGQWgjPoowvzi8Hzq6eMCQUVTBe",
  "key16": "2mvz9M82qHcrRapF11As43rpxwkSUw7XJdoe4UGVr8ffiZFvZxz1EjRQRH2a7Dp9Q3VK5jKJUSNrAgz95LShPxDp",
  "key17": "5X97Db8gjt5Pd5TyKheTTDrq6emgqg6XsPdLJkN2o4AVzpmQfC42JGiPBnGLY4VnwGKJaBku65s1dGNH7vBgvA1U",
  "key18": "3i6J3ko1AmAzvhxmfdJeNsRq1rGeRCHEJJmCSar7jQsG5z7y8xkpcVJZXRn4mcUMTbiz9n3JMxxdzyECxNHmTNpR",
  "key19": "4iJSi9w8S5t5Rueowj88cPNZXdBeVTX3AECzNT92pwNNDJwP9uNZiAuAYnzEiLobLHxnF4Az7jbsARGAgH7gBAoc",
  "key20": "3VhNvxgcKXmftDYehMjJUUnwQgABbT4wVbMYdeaSyibhhEgxDDVwC4JuW7oLVEWsosFeXjKZfSVUkrer6sgbj7in",
  "key21": "3SJt5ANnR53Ndw6g69ozCkU9BDqkxQQPPQ3RXabrDeZ7X6R8SgEYnVqTB6tWJrEUcxxZzU42EbD9NNgRh2HJ4H2A",
  "key22": "46Kykn9V7yBEa54oaKhVN3s2g1SJC2HEGpxucTMkft91wmiAhkWfoqnRx55Avd3gXC5nfYA4tw4zPABkS8QPEbm6",
  "key23": "62Mpfi8wqekGE9ZjF7XeiHWbQZ3gLDxmyxAENsnhwoz5YXBsAiMgA8iNLh5T5a1q7RQ8Ews3qyLLdKreZZizdVDZ",
  "key24": "3xgpXHoqqSYvznbmGbyxCd7CnbPohegxKJegvbQXSQFLssgU5QZYdbejQLvUFiRHrJ54rjAH46eZmgSNuLneEjGx",
  "key25": "4vG3Aa65RDw4oH7uKvuj8nVJTSuHBpdTkeoc3G8UsYR91UD1dtePdmY7Yt427nPVLF8EyadW2rPa7R3dj3UhFbVN",
  "key26": "3ARxbdFvTnqmSbDRfew5K6zVhZ7TyvF9Nki2zRZgTr3beELjXdMcAZq8RNX3PQFq7TrcGkifqca6e4FSLAi1Jowf",
  "key27": "3hc8s3zpaPqKbY2sX9yZfNvw2N57zGNGZ4yyPFG4oDcuapGHe4WtJUPy5X72n4g1XYxKScFU3JA1y1QVsaFANKUH",
  "key28": "4aX6sZqkMnMaDapDEBMwYvZDWsqpgS14iJyZJSSmUW9ZtgELYeZ74QJ5TtLwrXoJTSv3ngPkrau6VWmaKNHB7vU5",
  "key29": "kE4Actnn3RL5N2FgSXsBP5QeRGJSWAvtCSek7Gg1NpzQXof5wKAKbcdPBgxZS32q3X7BBor3XHoR76F5w83rB25",
  "key30": "5jSckbEVSSZmgxPX3MQyVVLJ8WUiusTv5npch4YpWngrhhAvZF1jwGEj7jwexcoBit2VpcmFm5A4i2MwYBgXqspr",
  "key31": "2gzJWhwZJLVGjC97kiD2E9nvxkgTbEBYXMg84XHho38nc7FoNSEvdPm6AvQacbRZd3vYBF5QT1sErqAUvcnNBGYm",
  "key32": "4JUK1ghQMtnSfZTHcpUn5hFFAFtMTQxDRa43rdvVp6vUT7kn4z776n2rqVxpCUBiNVPpBGhwr5CshwUe92HgM1Rh",
  "key33": "2UDmjoF64Ureo1ka7VKmbkAUf6Rdf6YGuGSC757BG11PVyAEfLmffQQ7aNTUeWu9U7L5AoWN5xamJyzeXw5aWn7y",
  "key34": "QQwBtHH59X7xPySAfG2wHLUpohavAKHnZhNsrq8fQNhdCbh92jjMmgy9BY7QzMgNayyvbNhCxXg2RqVys1ZmLRg",
  "key35": "65HTGR1qRRzrfYQ1LvqLL8XqAMkn5AcM6vWgSyWpczrSYhH6FyeT8xaPftHddB5dBsYYNFtL9mRiR2bzChUwG5hE",
  "key36": "5BNjkGzD1EzvEjmePaPUgEJqvzbUVn7ZedGwzensPj4fm3LERFUGUwahhrssTtY7QU59zL8aXZycHQFKdnXpyQGo"
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
