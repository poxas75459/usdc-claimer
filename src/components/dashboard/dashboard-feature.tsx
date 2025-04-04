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
    "33Y1Njcuwi4vYUjycKV8LG2WQ4BRUBuCmpYHrmEACQgC9mZ5P2K9WQL1CgB7UPT2tM3uP1cBwp7qGpMJNMf62Hhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGZdbvPVYY6PvngLuaYYvyrxnJo7BLbRCJz1UtVn9hx5T4AxM9ejQAYnABASYpRPxEczpsyU26vyWS4P3vwv3x5",
  "key1": "3Z4LaMjVsMB7ZKJ5uLT6BxJMxoU4XSSvk9fzKxtjBBz9dcnG1qtBzsg3qBMsaNXv2wp3FHYXSNT1kHF4aA8c2pBS",
  "key2": "4eqogUPx2JRwwLdrWJagaTxo3FeMWfyFgwsXHq5DnfLgpnYWGCqngtxqj2L8HofooKZC2YTRAKWAVCBL1JD7MUJZ",
  "key3": "pjSPy5sVuEEhpgEcsxzRrdmSC4bPfuoDCWdQDqrP3jsB1mnr4DWYYeAeqRDC5vk6dra4xCRjXTPG5NBRwQ9aPYR",
  "key4": "3tN99ZVzJBZFF7iaRMFFaBNZN94kZX9rp7AqFT5V8cm3KfQYwrDWpHiXAVFzRKoDcJkCP9hxrjqZVCupwGT6aqjg",
  "key5": "2q6AzF2atvoNPbR6ygVsgTCvoJD8Z1JYP1KxHqiJzrxYscGyuBvmYLZBbsqV5H5w5eod2RpD3fQCGEhwhudx95gH",
  "key6": "5zLT256iUYzZi8uv19aULhpHrbMYS3ZSatz9LbkmbabXr26SSfWG5w63RVj8354SWP4xXmwVakYV4jV9Dbko8UdP",
  "key7": "5HXegrvnLp2k85ZcU8HwzhBxHNLozd75TNvyDmjUSveCnhcK3ziy35jvATjaV5TvDcBF95wpTRjCQ9eNeR2hjoJw",
  "key8": "42iwjNaqRH5unkD8W78jT5X1qmWwvn5YdsBZM7j48NnaDEK4AfQnn6koR8uwWpuS2XkPDXC5uBxKGh2HihGEVLf7",
  "key9": "3yWYfpAP5wFnqaMrkcxgD71WAUXuKHGVjZhUaxArneYufTgmVkW1NF1Qmi9sa3nxKHJsCpe67n7btJm7vEaPBY76",
  "key10": "3E5b5UjXzZ8yoxFnvEVNHVYNrXPiE2xbvVZEa5AWQA7xGmsjwaGBfALtZoErvMA3VXwgh1pgQdcaRxyEpVAaed5w",
  "key11": "2CwY8rf5tHTvhyqFqHLfTgP9vtaF6wJAe9CD8Ey3wmdjGQP1156w6TKFQrM2rWq9sQesZkNxTtKtM5d1Xp4mdgzL",
  "key12": "2549Zh5EwYpEFuGNYU853MgmQAYGS2hD69W61foRL2SPieKuCnS6YbfUM5AF5qYK7SEtTKd9QUuZB9K92iFkhfjX",
  "key13": "51vzJY31eKzKHAdy1bjgZd1EHgabMn9X8p46a9eXBEiNUwonSLBqsU8HQ9LgCw4H7Jxn8MB4G3PKMY3NFvv1YCuN",
  "key14": "2XitjQtZBu1LeZbok6wFHHvyFYX5nsMrYAzzb485mW1cKRZGXc3LveMcXXnihszTYrdG4rYGf4EbRwLMTdgBduof",
  "key15": "4nj2PpyWAPpyjgks2bfkkNfGowfwqb9owxZWRf4wfxJL75kqoZAhYvgufNbfXpLkLXscdfe4pSKMNYMCBKJwRXGb",
  "key16": "57gkAqfQyZ8qYMie7WB2hCPkD7c1xkRcq86YTPhwP4krjQg5LeC23CkDZkNfpjESjY5HxXhkPJ8E4wAaZyH4rRPA",
  "key17": "5cVyphG3S2ZQmeyFoH9LHYgyiPvJDqcSpURPTdiAQZxdrtxXigvU3B5Q5vUEW2TAK19wtxVV2o23eir7VAYMuehR",
  "key18": "3ZbFxzY9a8TWx2bJK61QtpLkjVeE7DFM5KtWFgYXBxVcFUEcori3vrkjQqofJD44UqoyxaDwVg67w7s41kvfv2HN",
  "key19": "EYayZjJFB5reF3b9VBn65dBu3Hxf6EeMKAeBLd5isuWo9uYdCMkp2kCReftk84SdbJ7KMLiewUfem3fkg8siMb4",
  "key20": "yr7A1xfKNCAxCfif9fpNuvD3CTg6Nm1yZpJBK6R8CbMN7XCKMwp2JNCGS5PRrRDnrB5dqLyGHxjxTjecLPAhCGT",
  "key21": "5wj34511NZuzvRzfWtbjBf6hyDkhUUstR1zQtgMvDGLqrsMLhtrJDz47hEYXVnRtp5SjznyoqEK1EHPvszTdNyfE",
  "key22": "3TAmLjhWSJXbUETFCXaLrdwSDLGhVG6pqKYPYXYQLqo6SzPibscqeipeRNkiFXYVALaHBbUGTjs5RXWVsm46QSc7",
  "key23": "3YqFBwh7KcKccKWxzpprNrmnxgc615d7VXVCXVSNoABeuH5h8nkadzJUTDka6RwXVDXsUnfWB3vg9oWqg8aPkYiw",
  "key24": "BdaaT9uAh9wFF8oBrywZHh9MGvaNj2vwPGB22dgB69pp6VBjWKoxga3AZEeEJpG2P9U3CFkivgaQpvhydF4VdTk",
  "key25": "5fZeCKpE8JFiSzD5atc7Ch9URYGWiSVJoRV3SD25fngEXhnm3C65WHe4wMBhU2WiHgCh7fwLQFcY5JxX9MAzA12j",
  "key26": "45UMGpj1EWzq7byTGJGFKvaevZEeKGkMNedvnppXMbhUjfiEZBkpKbERVzojE4G9QZoH4ZKnBAPXCRBhivsBYPrd",
  "key27": "rSPXN9VCSmeDNB4sZgDu3SngjEPQm55MRNCdYHG92rk6QPvb98zpgrdkH2bmvZiNcfHmW7HR7faNS7JPKifMR8j",
  "key28": "inBW786Uwbji6qrLBhwoVVBNMiLJZ4khqnCdzFkchMLzcsU8yPrJW53EChHqPZJ4A7nzb46yjApMJEJFxKfEzRc",
  "key29": "536JwAWd4pSk9dfLNoKGCJFeVhCjF49hvvqErWpduKjV8vRWyfP3XMxPAoxQW3kmqFyPeLuv3YW6sTQg9JqAZTaT",
  "key30": "4LakpYbcCxbEWxaG8o5RoMR2GxKTeoBmoLa8g85ePyH5oKuSvgH33F4fujxAdRXWnQiEfuJM26vaDNibZo8VRd5Y",
  "key31": "DPuu5Kuzn7sB84EVB5753xpyBHWYviQUhgTpPfboHR6yhGzFr2TyYY3Csh5rXtzsoLJ9Ky7TpZTbQwimdptwDR1",
  "key32": "BvkP5S2QmgmxfhMtgxMTfSevZGGDCRSDtUpvARFCB2oibGhQw29C2MZUL8SQHYFv2f6sAorXudJ8PKGoxmdc9Dg",
  "key33": "2GU8ZmN54j1sPZfLQwkyaicfdkmxYNBa1CVck6V583utbTFXdgRs3sCJUHmdmGh8QvuvoXkvHCY7od5muewgQjoz",
  "key34": "3hEu9w8gxZA9yyZYwi36D1i3g1RUGmPaZQqJ3ZKLXGVpdyLcCAckZGhBoWJoZrgQ7936Vskh7h75Ec2SV3Jnqohy",
  "key35": "5Yet1zgPujKEQXjR1ruk4TpbzqV4REohECKc1pk8QJHYJWADfxdQ2FdHxUNsbKHc6wS26AjpKjCYQNrnQNEnxzFF",
  "key36": "2sj4DsXpa8nEh8GQ9zsV3W3KbYVMiTVrQcKuxVDjManfB2i7okXxFmZzeGdZinUQqdqpMf8KCKZRY5XJPz36uWaK",
  "key37": "45WPon6o7jSR2sk9XV2keT4mQtL736qeffExbvGuSaaoQ4H5pvdL3LFuvYzjAPQrs6riK7ahsoDCtsHVkiQmDchH",
  "key38": "4pecRTpET9RBd3c5bMykHTKmquwPQwfPtk88Wbui1yEn9ArG7umPf9hKeJyoXDtfNfADNF2sPUCTXESQub8GLp8j",
  "key39": "2T1bXocGDR61JMxjkjyPjJx19FkEJ2RaZmq4dMSr7f4soAjzqbZupBKQuBLNcSmzvB5UyrCo5A9NS6vYv2ec8xhE",
  "key40": "2ZUrudZpJLb1rYLBVVYUvfaseuQdPR8S5ioNYrAKmtpu3tMsuYKek7U8kZHNMfmthot9WdoobwUAV8KNGNBV8w97",
  "key41": "5fZx4VLPx4Vu1GU6GdbfCrdFqJwbxbojwE6L1BFD7dWzNrJ6aPrTt4tjdwXXdUBL8X4Vfyu1mAw6qvTqKW9rTRZc",
  "key42": "3a36kTkVcVrpAMjbhxAgfd4XngND7Htp5XeEJgAuYMGLxqyvCNCQBNysrevAT814EpAgUMM4gNG6kHw64s9W4Jhc",
  "key43": "n1q7eUfuGjgTcKWhjZq2b3ZrALMmu5SN3zJTPmSRrkt3z7mUdFa6axtbpLzwzmMrLw1ui3vtv2Y3BjTtwz6eyvz",
  "key44": "3eQK6F1R5TF5QGcx1GgN1CyaivFPXAd4q88Yyf3i2EpHdq2wVnfMXpdPgSC2CruBkpajw8jSfts4Wx57ewqufYxB",
  "key45": "4tnGxWEa15cdHVMdwboEDqEac5Rp3NsyDhrMS6QSTvbtUHf4ZhKdm2HBXQkmoLBAytv51JKiXjdJUhYPvd8SfKVr",
  "key46": "qKerLyZBipHAZKkgce2hPJ1FpL95CoS5zP1LegYaVMgsusbLdMfVh6r2LWzTK7jwdPAYQyzCDa2ZixrrShY4Zxn",
  "key47": "2L5MidYTes6deUgrH6WuPo5RkzpdsjpTVoG1hWWzCcLyPaUk5Rj4anfPSpUsc4LPFTkHGuog1hNXrEKXLE9GyXE9",
  "key48": "s9Axaik24Ep5FZRSjFRAX4D4WkjUW3qW5C22VYk6KRwVpycKZKQ4yD9nTaMYrBPtUicjgfUpEHHgzhEFQZVeqhG"
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
