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
    "5ZCw6u8ScnKmjd5BTu5UbCPrQytSGyhngTprGoPxGg437iatYje5jB5GPjukUXEJLy5h8EpHqTcMAc2PuQRYr3Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kQkiJmNBopctLNko2ZQWikeCifHZ8z5pisXx5JzgEbBhJ5DvAUMmdCGnmqG6UWn2TUnGspiU6Rhnb7v9TPc2YEA",
  "key1": "2RDpYb5kvnxo4eL4MfGZkK1BQU1BLjYJivw9hFa5GpreC58Bw9w67wa4Q8w3Rxm3xK4RrYwMTu2pMgnFKyM9cKMF",
  "key2": "2Y332WXkXw7gvDqrcDEQCz9wt41JrNadnXM1QTbmmWgFPe663FvaP6B1aMPoRVHc6pBd2DmrTHERWE9cr7vrjePg",
  "key3": "5RNouBDNunmsfSXp4QoEf22Qc5WpQZQmC6RkdwSM7Nz1sFcDFH5TvEr2rqPTytQM4yta3mwq7JHsDpdfKKKzith2",
  "key4": "2BDxhqChj4aF8Dw64osft64cLgdJQkbQ42k7hwuokrjY4TUpyAWghQ4UCxmvKsLa881t9gx7r9UVMAKZXAmkD8TG",
  "key5": "3por82aAw7UZKY7H62aAWZoitg9onnqh19NARyuoYWZQrtx3tkbaczuchZDTcZhfMsH39Tut6eQnG3cYVAvhcPbB",
  "key6": "3h7nJMdgfQysmMMYvLiS4qbu6eEv7V9JncYACbnrKYL2ocSRRzpvxvLsBBFYyD3H5UwGzshntg6QWvYKG8xCZ7Uq",
  "key7": "LXGXRUScwrLcEBGeztcZUdhzCyWzr1ZE4bB5ppVwMPKq5L2pwahxewMU1Wo4u1EATKw8cXZ2L8qfx9NN2MPQEkn",
  "key8": "4rYydvmGKoFEvn3bmFQdjLysiGaqnjb8pUZF9daTmpaz6Wb2unweTMiWyeB7ZdQwXGBjyDHvrCKKUUjzfDY2LF3w",
  "key9": "2nWpL9m9FNwziWhtSXwtyPmzAsdz8zVsEKYgg91oT2Q3oVpjc4ZQ4U7yfLntdYztS7hf7WcLgbLn4mRToe7j7SBs",
  "key10": "5LiQkfjVTVUtndnhv8FNGDTYPghpN8sk3euaXsXUt72H2wGgZuXcEuBYGBH4uNzNH9MgGwKpnYMhRbbrvtUdswZH",
  "key11": "3AbWZzLtPceZ2Uh1pqeLNRd6m9jE9rvLY4ZRJVBioxcFESVa8HkYDPbUGxE3kCe92JxaM9ZXeaBxzBGhNEAtu8pL",
  "key12": "5ybDJjbyKpYW3DVHYSnyKS7M4JQH8JZCW1Urqd5MuhFh5WNXFTCjeU6uL9AZFQw2dgmBR7fJ4RzA8dN3DQ3LwtM7",
  "key13": "3DuwuV345GyAG8UXxWdQU7WTeKqyT3MbUngpgGoL6jivrm2xa2gyJoxfv4Y7jWiZZXQJYPyCXWftPe1zJeCfNkH7",
  "key14": "4sSeYye9eM3HP2TuF93m7WTA52kpyow2SajzY5Y8p8cQVng87nhEv7pCnSYUDLAQ6d8ULtfRZcU4Tu5CbbuDd5fa",
  "key15": "536vUb5NXjqbyAWf73dt1xZk4CwZnhAf27qHkeuBNUbwgur5NnympaBJ6zFXPc32RCVEmJ6mWNeq8KcwmddMpEgT",
  "key16": "5dvGFb2oLAzWdmC6vFVCm1Vsj2iDGjARfbjRosWVJH1WhXpJMd6VGznL3U4G99fF55ST5X5Attttb1jhEaF1sWtG",
  "key17": "3ScJdDy4ykzixnhRg9SGmmR5VjweJEAfREcupnpSrPiKDMCRD4RDHcH2oWjRzUq7eSW5V9Rgo6CTBvvWfof6haKk",
  "key18": "5o74fJFVMhHAp4NVFbNsvJbj7L7BLzonGX2JKuSKEqB3oAtH1wxPnqRUipfeWUPnbAeXrBafcoR7s9vV8NgA8yxh",
  "key19": "5DUQfZu6TCQmTZDTqRTqwwJZ6qmW7hN3FFEajQiXfvLnLtREdqiTV8GzUZBwQPuyP5UiG8bcVnmXJ1Avguexizwo",
  "key20": "2G1vuBknJZgb3sGfzA7AsxkRPjZ7vawQJXgqye4PScXdqFEfXLB9QYZZzEL13XgW2ip3GNr6wGMKG5YsG6h9xsgb",
  "key21": "58QvQTdJLMkFjKPVnjjHHMVPuobKZzioWKaao9FS5Pdf1HetzShJ87mfMZBQyDJXmZdu7k4jcbfhmYFPjtSmzTf3",
  "key22": "3HxoHLukUhT3BL86Yb5xZM5Pzj4vRjheQxai6gtqrYWkYwrLiUWNYzFPNxE7sKD8SDdAtbzRLVuwjRPvQGnVwPMJ",
  "key23": "2mcLDq2M4EbVSQoW7EAg1MFAmVXmmJLBY12oTkVaoZJgjyHh9erJP6s2GGV4q1bUdnB7DEQJuZKaWHJBC5N8Gksc",
  "key24": "58JAqaqWtek5SCNPJEgUghC2K3a9HsJfp4hdtFwN2mMzdneUnDmsfvwG1QhoGDnpZGMBM9xC546VYKR1Z5J7TPtP",
  "key25": "5psmLHPqCmbptvvAKr3BBbpExAVBwhMkQLLXjHa3e2WsxEwkM5RW73858wRUUBtUcPzViQr4BrC3UszadWjQxKAj",
  "key26": "GwmXkuBM6uhGxu6AbiHcNWkFat7PRKqLeKzYNWiTbwhsJtpJAUReXe2CdCrbbdrLSRos3oSooNM6AUCAePLbHxE",
  "key27": "2dWuWkx7nAkgMeeZmGA2BKmLWxnaDqQ813QjSexhtqYEhR3GJbYRTYPtiJAzYrBxEYohM9mKVMj8fYEsuJEpqyM5",
  "key28": "4WUmce5tpci6gHyswmSbUYQVs3M6Y66PkaAWbSPbxSbUfgtATRgLcQN5mBwpqra2zEfLCUkiEEj9Z2rbkThmVaym",
  "key29": "5LnW7kCUpGMGzHHJxzGSD1841yBUs2AZmTxDUvx1DbwhJtuECcC4yUfHRSQjBaz8QibDXsARg2NBnrkoAon8WzbC",
  "key30": "ZhtacKu6butFwCQ2hV3nnLerWaa3c3adjh3jEvJKyHCL3qzqFK779u2bGAVAzCc7RL9bzsExs7Jsf16dCbhGCEc",
  "key31": "67mymrCsWzdv6eN3a2CjyXHgMWXf27NhUa7HmxqE5UDDm3EWoiD1XV5jB8woPhyCk7uZqG1cNLuLRctQBZ9QEjhg",
  "key32": "fU9hq2Jqo8ujNReHyP13BshMjcdNQmGqej99LUeTzRkPa7S3edLeheKU5gjQ6FoLoD2WVgX6H7nac4B7tav6Ugr",
  "key33": "4QSoA2jRaocfzMpSjXXGk3VNakAedttcjVKEvYdf6vzH7z6hfa6p2j7gZbZJkwFESbMeA3hkYD32LALLHti1ttFD",
  "key34": "32XYSkh6zoqp9cYF5LCMnquEP6pT1kB24JAxKdinRxx3pDc4Z6XqEVHeCG1TJ6TmDBeBbGPw3LEGw8L6mPLkzJdq",
  "key35": "21prvgazvKd8K3QBrWSppohGru4pmqAhPE7AMTcoqSvLK1SXd4Gsn6fs1qNNUSpchjApq5GuC1zDk9dLLDXLeDMF",
  "key36": "fGdpy6TLKKMFZUTTQ9MN49EbPAFxMFsy8sD9HPPAsCYM18tF3V94mkVaqd6Y23ws4u6Z7sbenWRXAWsfngdcp3v",
  "key37": "63jv3shVKJAC97sEHJpLgGjJHPN5E58DsCmMcCrtqQARwFPcUgo8cg4WMQo6RnHt2TdU9JTgzNwZYJnmLPY8Cu68",
  "key38": "2XdMeRE3mRHKetei29j3WzViwgFXVzPvTYcj7gfSdkZF5HqJzwxKMdrmaVWDMi7prEkEZ2DgzT9ygaVs8KxR8e4m",
  "key39": "5EiuS9n18K9d3X8gyMTnMirV4VuAUSjDgwEvf6S9LTYu2LUg4ZWfYSbD5os5TKHKNRYisKuKPJHmPiEmH72wy1jh",
  "key40": "TCHy5WuPWXNVC4sDZ5uQiBzL7ExGBuDdGzUaMPNyDBoiwCVnUvs5ThWZwMpkhMSFa1C7vJVRdj1hCCt3Trv7a22",
  "key41": "4oGVvSBSLzhHYFx32PTW99uxQc8ts6LsPdMzMCy3AQ3qUwRR8rus62pTJ3niQicQAo3gNg6vrCToFJEWcosbP8Wg",
  "key42": "2dYma9izXYztBUkD18FjN4tye1TLj3CZJLznei46qQRRTdmcGMuP66U1M2bPkAnUSCG679YH6GVmrjowa1HQaE1S",
  "key43": "3iYeTSmAguWTQ7sp2TTCecnXzWVuwb7YvrPGWcXbvWSrvooVnkba1V6a6KdUxtLvHRP1uZKN6aJ8vTJBnN7fvXRg",
  "key44": "464yo7PSkxdgMBQSg2ZVBg7kU6aoiShF9LQnMNAXZ68axRugzCYMAsw4fjmTwPa5XKQUN561hH6rouySVJA1jSj8",
  "key45": "5QZjaSDens8NMAzTktBzsc2pbB4vNNyFGiu7574RciKwHMd9iA5X6h7VGtK8fk8owXs8LEahnyRFqX1HqpnyequW",
  "key46": "2Vv2MjXhVmPREiQ2BRgetYtA8c9mUQQZUkADGRu8rVZ868i6cFJR8WPDuNPKxe5pyeUBhjBfiu8VXJAAyK3hUk9e",
  "key47": "4QXeCf4Xgf6BFcWGTp3VmvgCrnnwS8suPy6t2Atgn9RwRY5s4TNP3Bngivvz1q4HfNVEptzjN2h8f5MijwzpB1a9"
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
