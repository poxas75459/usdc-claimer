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
    "3hbzTibcGGffPGQ2C5VADQjT7zqsqmS4waPLnUAVv8s5gwiH17A6WriZKJKvp3P5ehbuwCJRNijEk4v2ymmzN2Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2piYT53kL65mcqXyNZFpo3W7NCpFr1N36p7dWmdtzeqBSyjMEV4QffSBTuAfZwTDPnzTqEkACAHuWpAa9VmWATv5",
  "key1": "397kTsX637FswPRYfqcKprJsLWhtfbtz2oU26eQzMohPJegAnCaVtYU7EeDfpg6RLMADisFM8brGpaguCdXHcrqj",
  "key2": "4bQuQTYhXBDtyALCtvcQdhi8eWPZTvDdmVSahC4Sj5cP7wF6jzYAqoBgTbcSiSKnbmJ3WnNCx8Ka8LzYrdBY6h8a",
  "key3": "M3mC5ffFtjB76wjiZ33WN499aQ3niyRfyiREuj1b9wW6ufUtA7A1urgTA21KvMem5zinwqA93dqwo8KM6zJSxLL",
  "key4": "2gLSLXafXgz2p7LUUeAQXBuygWecGLWNjnHSRBh94bpGig5z5xeg78SifDimxKXscWiqXdN4pMHmNVUQwDEigWU4",
  "key5": "2G1o2bmP5eyLxjWfMGMLuodMJFZMvw5JZkNa8P11Wb7Y3PYcF7inRXtTdmUqg8TWfANjswDNBrJEWr3WaNgUrRv2",
  "key6": "2kRfBE1KwmYkB2nEavwsK31Wnw5pueVvPxpMUoLwbX1pCPvmh4vQ1zNUZeh4cPdpgqq7vWdMChpaJGgxdydz4Kys",
  "key7": "EhqkTJbPtNzJ6zbhaa5KjRiZBhqqsnjXkcpHzcZ1kA4zmby5AezCkzncseZqDJMj4UVVWgtx3ot4jBAUcmMyAe4",
  "key8": "dRnHsyvcSwr6Tu97DHBkcfVoCDdAmFNnD2NyFmBWB5E6ikmvuPezhXKAhtuZDTGrxb8Yse9VYUVCLekqCgh2MYb",
  "key9": "3qKNk1JLuNV8rjG27pnwUxvU9vF876EoFu4tmAYQmtsFBeP6nwMfxVq9vELNTRy6RZMM8rTzDwD16EUWWkX1bPUb",
  "key10": "37iqAzcnvNxypjbxNhjKfDp9AmBr98yRoKN8JbXGfiE7esMVgveCYU6CFMg5xNVzj6QjJE3WMFqEVZAisJAh8mCq",
  "key11": "2758162KVPDbhSAsCXnryJWSChgWjJGudhzNPzfuwDYaotiMtH1cnLpe34hpMqeHPKybESEV5mrEfaN1qPKAy1D8",
  "key12": "39AKhdBmETdMcgHegSyGHW5sHsRQbFCSefp1U58XENDh3kU6beB2DZVWCiTdSqhjo2sPrXycHYQk5KecNKMfZ1dC",
  "key13": "558TcLq6DhY7AAHMnjZqD4t7ytGxWVi3TwXLNXhQEmWuFwmMc4NbNnWubgCdJ64nLr4xt9wv7ueRTBcVMASdAxzw",
  "key14": "kb3zvxARRVXA2QaGGFoDf2YjoWQWrzxnD8Wzjz5B6M9EobVSrYRq6vgwuiMDFM27yu5L6tHCiJNVjSfrrwHzcED",
  "key15": "2wdoN45QWT73zkuuBb4h2ciMjksoc9XiwRwvDkNaR1aQBPtojm1qGhsw8da4uAXXZfmpkbij78SN8R8K3ETuXUeR",
  "key16": "4EgbJHgWQA62x6tbJgqQt3BzuLTDrbB1iMaNvqG2hY8h4rfohKF3zWPWHhpcML6dW7RfnMR1a8YKoGSSvJCGgXtr",
  "key17": "3Z5Rtjn3XhLkmaR9a4E6SEKKL4GqUe6ru4mxeNpAGcXzQGCi5EXFfzi9MnLg5w3Hewj8WESymJfC6ycwNZJ5fgxq",
  "key18": "51VoQThQYhfLogVs9Tcm8sMNH1wMLdARK9C8C2ouJL5NQFgEbvvwEgALiK16chTqpLZXLGb8pByjaoQePZQqQKqL",
  "key19": "RS7Z1iYtaQWz8gdCA2XQjnPnBjRNBgCutwAFqiaZX1jPRGXdNawVfbU9HgFMXu7GDRx4mXUDWboJpYSX3rv5bJb",
  "key20": "2L6ywdrfwkmrH3jzRgsFyrSDAvmZaAwoRzeF9zP4Wum59VKGmCzvAhhAnn1vjdEasTFubhXpgouio7qCJjiz9dCE",
  "key21": "5jh1PrFu6zxfVfFxi6RPno7PCNaNn8SQDxAPixQbG1ZwLf4gw1VLurENPnbUXUieqYtkgnKkLmYNP4Ruat1sokwb",
  "key22": "5JVZ14HRzNNrjWunJjgkhPEzhZg2BR4UxATo4JZQ3E1NaNw1fr4Q5xdWUt5aHyzhLWt4PJfDLuJKz5mqRomFDcLF",
  "key23": "42GZRwjLEVEDikGrdhzQzxZAGYGQM1CYyPK3niDaStnGv9XdccubcJfXjZsejWoxc4XcMRdR6iCMMExWxgF8zNfm",
  "key24": "5utNVjEfVAVMXEq2Bqn5RHDrxi6w4kS6BoYGa7CL2AAQLVZvGMG9ZSEsA8q4fu6CN3oGNk6hujAbQXW3R9fBpGvA",
  "key25": "3DZhWTPbBtTKP7rFpRZvKm2hthuZevymd1w6phBRGm5Nrb8z1N3wTjct4Swq1bsozdR6wX5rvUc4bKUapJGktCoE",
  "key26": "64BCsVKDJn9cFjwSrX9xjRqf17qVhwvksYLSy9iGo8rZUwuCgWHEkdB8HNBPZTbbA2VsMgq6Cd4JmgwmMC4dFTSE",
  "key27": "5mgFiHAz7RJ56yhpBFrcv9whEpiybuFch4gmm1rbpEbnjucU9zDReuVceAGMKWQ4rD9xBydBQUjmpgTSahBiMtU",
  "key28": "5FCjHVDHtps2zgZH7jV4168CrQBWjHsrea9XSbBX2hvn3MucCucf3a5BjA8gx6cUVuFq8kbp4XmwiGHEk9aJxUuk",
  "key29": "2EahGJTftWPP31efHcdoHGa7GZkCwvbTZMSArQQRn7oTya5HELPJbrayLXLzvKrJGy8rQRCVniyuM5caSPqs4ak1",
  "key30": "3tLiqUH15RztVKh15vagpgEyJd5jYD3iVpLdS4fe75eFkbPJ6o4n7nb5MqAED335yXDMW9t72H3pvb8ydkftbYDb",
  "key31": "2S9esgvUtpw9UFrZL5LT4F8mH2KubURXRABL6mq17rccrQTEyW5G1MvgoWmuADJEWiFLqRnrtvPJdPR1Qv9ft5XH",
  "key32": "1jeFSMWd1Wy79rFtPR7rTsR4FcXUgkdwEDur6dxbNVw9ep4gqKJR7LQfsMWSPSwNUXw9iTzKdWNXQFMdicy3mq5",
  "key33": "93kW95d8Cqc9EdGmsndmCgzpcwBYxWScP83v7y6Xjyhv5qvMqBRJyG1TPWmFB3nymuN8kVynBzHQTT4p677jP6T",
  "key34": "2EPV7Dv5vkFJxrmd6ez3tsG6KPxondQxhKK76G3j4u3TxWQiEZxu16uSe7H6JMTSRx5YyGyeVvcT214KY7nrjpoR",
  "key35": "2V7frm4BzLpMND92p34beAdiMPzPYCmXHhVxjLup5aXvhrTudgWH9Zm5w44wCzCqzZDLKgS1kSm6RQZ98yKX7iJZ",
  "key36": "4ngzXa7EBYNEUA5vR6ydsBYDjJAzYpQvjn5hJKK89Sbk6k3z7xFCJwooyhWCr2hnBzaC4aRkLQgyUyAER1uu5WgE",
  "key37": "3sthqBNujde6BcZZjwBDTbPrfUzHPck1xiHvWXBwrLBAnz1vq6koHeLuhT16oSmAsGodFMGVKWYEZMhb6MeMvwHP",
  "key38": "31TDdccp8rz4UURoQfPT718XZ667Kbju8AzgCJyrreMS1Lc58NJco8mvpwsbM8uWUyyoZs5dSDFW6mhHaWQBxEST"
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
