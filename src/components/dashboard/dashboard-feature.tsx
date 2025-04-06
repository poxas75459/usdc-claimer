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
    "5Kqif6gswKobeFbDRffCoByyp2fEveRskgUYSE4Gx9uAEcsMDpKkP6fjbgM8WCue3ncSnkifpnTNP6d5d6bhgPXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4RJZ8pmRjukrVN76EFnkFFYSN4KjpCu6kaokXaUYkGNPZJJx9uDJcgWAZ1YnWmej1ZpkHgdKX3C7REaXLL3a6s",
  "key1": "47Z5KUCk1HJgTtniMnVA25rBbwJun9mA1AFU77y1xMDPHhP7BJ9pS2ms7HDJiGAPm8QvxuAma9HYv7d8RgXKHFNY",
  "key2": "3Ms3vaKLntmBSKHNE6ukmZ8fnkFFW7k57MJkX8QaYpeLNJiUiKJznxYWpTjZF4z39LEjv31N72pLhVZFPHMV4HFr",
  "key3": "5jAgYjidvJar6F2JV4PLpYytT4qiUtwFt26ttcrZDuCfXqh8CpBY7ayAfDF2BoxM6fpURaUxFD57uKzeZErqMfb3",
  "key4": "4GDQVwStNNVwLj62RP7CXBeL6rSkVgMrYXaChzbAjUGKbJdQN1TNtcGAsc48iWyGrMFDriDqtkPBYGjPe4cxuECZ",
  "key5": "3Kb3ZWHzy44VwXYUrwQKEZJTGmQddb4KxNHZKtF1sojwps2o4L2NuaxXy2B2pN3X3j46WFgjZ3jwMCc1XUkoD4BZ",
  "key6": "CDK8bKgS7k4rih6wck5q2ig5GK2DreMqyMJGCgUAyJKmYzGmrNjn5aQowsFqedHNwjwGY2kCmSZjEmHGueSuv4e",
  "key7": "25hEMNSfWvTSbqqwYxnGuxEQzSH7wzFE6v4JTpmjMymM5FhQvgZnG3Utv8SRk8LRzojRALq3Nc6xdgXV3YqGWrxQ",
  "key8": "2GWJkDsSSq1GFxFd6uxjAahatzRZx6tBjbiGwYrdn3wRkyGMU57NgkKvukEKa6xkzaHHMBBHLAP5hDLVc4cXKp7g",
  "key9": "4aJrwj2DfedwVU57qSVpxdSik7879vXhE8t8DrffwPap7p4mi1v5dPCc9FadyYn6mD8GxYh1t9BbQ8MATLpBdJMf",
  "key10": "3WLi6ACGgjj41vojhSX6VE6nnvV1JERuah4UXzwZgzK1Y8ukA1tGjf4Ryqf57hMCa5DaTNJ3cc4BTtY28LYY8GE3",
  "key11": "22qupXjEiXeeYbHVB5LBt6KhSrQ2QB9QcupRDCyHrGw3tu6YQ3mdk3csLfeZwcVtqBnzqgWHz6PC2jMydGnbRsVB",
  "key12": "akLACATbygAtuQ9AU7aX7Q4LmkN4zYDGAzPUzDcGdyU4dYrjxLXJDt3xYiWgQP8Zw1BhMcLtKJCG3R571K8nuE8",
  "key13": "fQ2KJCXEeZj9pQbfTwDbWJSGnFAZwUfUqRAb4JwsxDuyxxV9kaAtQNmAHhzz6JXSHxpNZuQ8nrfXaxYoHEyqsij",
  "key14": "TRVctTbskCE3F4o3A3hZEKxzaSVu3B7J3XmRmSjFqrNzrk43Eg1ARdqFjsNaNa4dffB7en3FZkm171EoLzhQ76U",
  "key15": "5jYGmgCKyWHeJG7posnTN3qwkH4Lw6H7QuLoSsFvSKApBbSbvUwuPWQsSwjSTfvFNVKd4RqEqMn1vweq3Qn39Ltu",
  "key16": "455bh8MVf3tgrKDZFziKhNcLro16gF4uYTkeUPgysTPHsazb7NwvoYz1nLwWLTSeW8bdpScvhUQ617Pi2UjyStKK",
  "key17": "2S2nR1Md2ygP6YRTMTUEykF3A8MNSS8mPaXWYseCtPFtyQk3pg3FEzbct4CpDwsMbcvA57DCRaQfEFYBULgJ9Umk",
  "key18": "2cJP1PJxuzgGhznYybf7vSRMJuykibP2VY7DrRNwzHUEaLDTG7xtZfxgCEMrUY2L47vHrZTFm94rApjTMxSJkezs",
  "key19": "5tXjRogrL4zBaFXFyccStQnL36oVZS6Z1kHbR1tX77VaGSriM6gyqnt9h5BckxSCATMvch1D6mvR4TQ2jZHn9qfs",
  "key20": "Kx9SUBfMQMMkKe2jHwkKT4k8BdGLUR4BfVY3SNVERzEcmXoTwgjD7BE9RfzspvXFnhHKYhCaVxAqMjDSXzqGLff",
  "key21": "35bFTrB7W8Dyff6b3U2JggX63K4P7yh2PkvHEoJpRN86D5BeUHDWwV7MVnLPhAaqBSF62JexHr6u4D7ToJqHzYKz",
  "key22": "5A8aTdakUexjqGxmt69cTFxYeujc3RWkUbEomnTeSKtkhbBddChAM3RMhvVpZimVcFb8m2KbVw3vDBCMikqigQZ4",
  "key23": "4GFRit77ThUVuUryJwwobcDKkbxirVVcuP66t9EwPPrDF84nLaCZHDk6gtG6gAsjRK5UTAyf8jPZ1FUAnbYmeGDU",
  "key24": "3biFzwn9cvp2NznRVZN6f2kBJCHWq2QdWcnZWC3QuUeCCRscicSN49xiPr2yca8AzRCGMdyovsXf9CaaTGHaSh5z",
  "key25": "4foFn9o258ftVaJrSu4mrDxCcWrebun7qZEVp58XFtQwiSDGUMxnWetZV5YGy2pBPwU8AWtmgXRjXKooojjkn6MJ",
  "key26": "62zWRJ9p6jTNNQw4og7FAVuBLKKGTP1N9qBdM93Vnnyf3Z1w23s6bcPhRMr5UueL8UfvjGdyhMWkJcjo8e8kmxzm",
  "key27": "5w94hvR3RkA6PchxZQ4jkc9t9nzEeYQ3LQb8L3mZyErefDc7pGVUgMH6ErjdhJADYfexYpSZNCZYtRCWXgGxt6Cv",
  "key28": "3RafXgkpo3whMBBZM8eDey2ED1QzZqojCgoLKqgmsHXn3T9YDGtYJiZEoEB6XaixeZPj6fXnHh5Xi6CwSb1E6a5S",
  "key29": "4Wreg2sytcUXFij9WsTXw3HHqxa9bapppjojmN1ArkcCifBx6VuaJ1PRFr1tiKw1H5MhWEeXMWnPf9JkiW5jqpYN",
  "key30": "2EmsjAAHPCGnsRobZqeg3QRN6RRgQw9Bvagu3atabpYXidUcstx1tgB4Bmkx4SevXNc9LbZZD7ixkyMce4WGXYsV",
  "key31": "31Luc5YbRXHHPoFhmzQPVkPxYjDBw3mYAAz3Sm4GKT9ZH9aX4ki2ftUVYDewvAmQKK4TkiGdpvnjE4W7KbcdEm4f",
  "key32": "XcYjJai7sDiF8g9qKDzK86RNBtjb8cFRmdWwfDpCDdk1iq3WjUadkHRugcqSBkPrhnk7yYKyKCERQRgb3dSy2BR",
  "key33": "4pMMJ9r9yMygq4hESvuYhZqV9ypBp8C3n4ejPTnJJ4dCghzrjMe51hwkmrVPzk4LmakDGcLWvFMuf9LVNn8XPDFY",
  "key34": "3NcNqrQJ6m5rfHFuScvg4GjPxE7zWH21gG6eL8z1Giz7iYsD6ZLgzEiYVxFusnxoeojDv4MB3xpvN8vHvYdhdKur",
  "key35": "ZMy3spTYxCi8oGnQNLAD85968oxr4crLYeM8J7Jdtf6gA5NV296ZCRUpzKLjkH8rvo9NR14NkxhmjRLJb4naAfp",
  "key36": "hUo2uz4xecR3QmoiBYri4Cv4upaX38GQrJ4nC82VprSukqkLZx1TbPyHeJFPx8oSaLUMoGcJv7XGTMZFFir6ia7",
  "key37": "32pGwTSHSQwnd2Ks7188SUMxTLc97Yo4NqVBCdcGCqTLBeesfrUCNv7PoWDQtBZf82qzfppeasynfqAQWRVygh3U",
  "key38": "286byBWWGmcErLVKe6dUCtT7SzkzEJ2d5sZtTf3vR3dhA7eBnRLcqVCNzEVoFhHokoTxNCM7dtgqiFQYRTpKGBRz",
  "key39": "5GapoDdLK3LRMn2j2x5AxDuC2sddb5xDS8kfrCmqbrR9UKKLCKdAhQwY473ww3XmzW3nUDX1Jhja6uJTgsgdvXUL",
  "key40": "4Hk2C67Qc9ne42qsbSyX42tS5KepyHkcX9ThV2yNyFRcj3VdD21WA6Eywe76eq8xNSdtqyWZnqKGnUNx55kubRhr",
  "key41": "4MQYgnMW32GSRCLGYSegMGz69kvP5YGbxn32akPAJWKkywC4UvgVBMnmqYhEGGQrXscNFQvC4yfSafCoQgxtiFEC",
  "key42": "26prAqZRBwZ17kTBSDnsTBifXQkF84P2PGqSyCTX6imeLXKZ85SBCtorsoaTxEiXQaD21Jnihm5sDShr7sRoZzUg",
  "key43": "33s4WED1CudnsR1BWKDu51U2u4b3zyaDYGKuYTDPVNMXkHw77cZfibUeqZBHC6Xoos5Tuv9gqTciEFthhsbrgcPS",
  "key44": "54Y1raS7JG9WyxzNHYdeXPy12XbcadwmGvBy3yegd2nrEHuZ1ZRiXfUN6qVV6kveAKR3q6NFiRotckpy7JVwDhww",
  "key45": "7pNCcPMnfrC6LCxWYxVrchodvKHkJaj9hKeZXFgnhB6SdJoFxQaiyp4W4G6A8c8ceXsjGsqYvc6LPnPVqbLhKp5",
  "key46": "248FmWBTffgPd753Ue4EpTkyB1GggUoNh95MgBpUdvg9RhqW7NkpLney17pNe8KD7c3aoN2hUsPpm6nePEVYGVta",
  "key47": "5XgRrbNKDTx9FAuSCUp2vUv73T9ZMoKZEmgjffXSLHXEGQs6pPNApHkqzJrkZU9afNEtaWW1FhHNevWaz22qsHAT",
  "key48": "TSLhNn9DzqZiXC12Abw6dTSPj4Atw2ZkAonFYVc6YkWDs7HyMqdJzg6arobDAzJPqCcXvTYSYh2tzkSqgsuLRce",
  "key49": "dmygXbaTRxGPJKeJUtmEuzyivEmNcireoXM33xZeqfnnVmcVQgWVnM3RV5SAtzV9mXqTMXGuiG6JDirYXPhK8QS"
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
