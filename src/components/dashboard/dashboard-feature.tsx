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
    "N2p1uAgj6ydZBYrUFxKAKESMfbjbHiFYxz7AVXYWWUVK8QXppJfH48Atfa8AXf9SKp8uDcsdzhyjccvYo1DjTDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfbnnFjGeUGdR32V8n6bb5veU1p5FFUSvG29uzJ1VtGiqwHdNggkHHHstWQ3juiu4yGhJj124wkqAHxrzBYcfz6",
  "key1": "5p4wPCD3xeTTduDrcLzaPh1KLXtptqnZqfVz1qdHZZfmK5JdCyLk15ASU8NoXTRApNNZo9QQdULgHRimr8adULec",
  "key2": "2KXCN8gNTdj5mmykFy66PZ33idPbHXetDcZvgUkvY5Kvpdro17uHifPQ2t5YR46ehU5SJwZ7AYdiAC7GnicAFQvz",
  "key3": "2gTcdFN8KL3GRg3pUxt1yoehcZi9r96hWhDcGCK2mrb8zW4gUTdZE51dCSSqoMhNtycgtdDVuPtwpf3G8Y1SBHHd",
  "key4": "4UiaLrbKKMygt3ZUY9w2hQ4um1yDgWHkH33Xh5iGUN6qT2yCLRMn15p9vEChArJUe4hA1fQPHFHNFENYnwXj2ip4",
  "key5": "676PmtVSeZq2fXGHV4uykszvLkBJJ4UxLe2NsybG2FjKwUVSQUnfMJcgBhvutz5Ms5LxzuRoKYvb3uv73iJYGE1d",
  "key6": "38pfqecs5H4Wp9fwcVVwhyp7zrhEv5MqBJWca5wTAeTemGP7k9Nf2FgBTxQu9oV6zwGDiiP5eeKsAKozqgmQstfr",
  "key7": "BjjYzdg3vCAzPypKx1VdSfrha33G1p5QS5HSpwzrRcKVUwu2UFBtorwXNRQ5VUC2WL1ZxupQrvQB7VaPsSCrK7X",
  "key8": "2i83VBzeDc6njMS3u9SdBo9hbkP5fivxdsv2159SjrB1qxY21ueWxSDYUq3aJea1ra5Hki6eTNQR1Hc7EeyrvEQB",
  "key9": "25jycTCZ7ZEjZbUw5YTSni2UgxaEHbaHNaatebxRHMisENsAoexm4QgEQheeaBLcTzkjiSCFrgzeDuqymWqtubuX",
  "key10": "oeNGvo8qGk4UW65p8AAAXX52EJjttseViK4Up1oKKVM5EX7CpmKp9L9ypqVkTzuoDtic3H1JDbDXNfTHjUjqVyT",
  "key11": "65A4C4F8uEUBJ4a4JHXw51K1Fvn7dEXaCUPMTuDSXSs9k875VwaxYC6kWbpKKJQM8qqSA3k1Gm9QbqY6hHAVhwZ8",
  "key12": "3YYCLzMPXs6jwvML1HgUTadwogMfgBRYtmVuBrjoAprjmT2SESq4phrKGfjSgQyHqENqy1nEqBAkroYRKwzjjRZ2",
  "key13": "uXosuiC6oTmp4KpCe6Bo6PEUH3JWiJ1UBDc1bLvFdAFQfyAPNRWiXBNQ1GNvdfM4Fmmxtfy3N7G9tUJq11gcg4K",
  "key14": "4nzkebJv1JA471p97e3CvbqKRP2ztBJuZUrw6VLvPbqidR2WaynT4m9MuUhJoN8awTT9VU5XUnn8cGnHASPbua5",
  "key15": "5k5jnzb4X2fnjsTfCeJzPaiqkUMhn6KuF5qGCS5qev6GhriCuP1X3FowE9zZKUwBCRpUo4CpghMeGyj8xWPp7Vz8",
  "key16": "4FjYjpHECCsbAEgJQib6urE7QumUEeS4kQsFyvhry8WyPvpqujrDWwi47F3sbeao73gJrc4cH7NMbWKDk7K9Pjtb",
  "key17": "3XMxrLeNFrXEn4gPp2DipbA5gvrkBS4Qu8ShWj6ZTSJn4VD9uW4BhdLdfH84RL2v7fV7f9quBubfZe3eYnKg88qT",
  "key18": "28KD5JmrGKuQVmB62qBMQfgU6sjBx4FFEzSBhZ4JYKB6YmhUKC6Fzh2HyYB5pgsEreZ7F82wzZAoGaVNJ8Vkvvs5",
  "key19": "VtRdDZCAZ21UftT8LX8WQjzHkt7qn8z5mvE5DmUi19StARqwWbK8rxootWeti2u4geMd4AH5WwYgqbmQ5Ssicof",
  "key20": "p9QAGyNZUAzGeuPWLdV1mwznAfF91F6AJeBT2JD2aSytnmcPDuBbFAX5Q5nJkpKxTYrcErjAB31WPXnGCotuijD",
  "key21": "mzzGxQ1v6aL27zot66QYrZxcuy62TF15ZPyAuAAg6uvQeDFTieen74rPmnvS9Q1YKxAFb6mbrCA5etrriy2gc5s",
  "key22": "3J9Um68KxN42CXznbwxdBMHwK5C36ikynkavur23FGMmKAz8LcQ64AG5WbY7Nu8D6cTXyxTRunbNMku995EV82BK",
  "key23": "4FveA1UtvxABtGpZm6bjsAfoT3MyDruwo5eYWtokupjFwWcwSTVQf8xQambQYcTnhQWqib5mz192k2Q4BK8oHjiV",
  "key24": "53gxRT9FW4jLwBBjD3chnW1drbegX8kjraNsy6LPteojkqXdc5YfADaCqZXfCw3LWUQTt1377cThYExaoWYi9uYB",
  "key25": "3wCYauYpuR4vrBALjTvAu86idMZKxjKToV4yiVVuXwcF8pNja3BJS886nwtfjknPJGHehdsZpmtkF3TgFiApTaDm",
  "key26": "NTYstTfiSdLxC6f54wsgHNCdbxJ4nqBpMYWMEfUtcTbVZBShraztLp4bWbsQPZCxF29UddPhKE3jrBMgZ8KokEX",
  "key27": "4euiDJmFAtcvtHUw7MpCDN49Gh1Ljf6uQkVADRhh1rg549pYq4FtbisD6f1c9VyB3LzEZSPDHJ17TFrprUEi35hH",
  "key28": "4KYAJPBzSeff9Tj5iZSz73aBaxkPNs8PNoTjKGFGtac3kzA4aVJ2kbfrTjXggN4orbQYQbC16jSseZE1jZzSyAjC",
  "key29": "psAg4HkwTStMPjToARcuWAPozDLSvPegtGBYXJDdfy2QkYGcUvd1FmbLXvCbLPqnH7NqJgt9p6nR585vHVANKgS",
  "key30": "5yTB2cADMEJJ8ba5Gqie1s5jR2KAJ6xsnpat8WUKfcxE6gSY8GYyvgaWiScMHzhWMbKBgWoWaeYUaJx58K2c7K3D",
  "key31": "3m8gQ3JAz9FJGhD25m1QkpMbu6npZfzPUJ6nyBQRGT7j7UuUT2ZknVFUZW9pQ5HUALxyCeW7gkajXbgvkRoWro53",
  "key32": "NwoMPc2ak2tsciktXF9ysBqXSkdtUXDRpJSRG8a5ErL1h7yZVstzpGbUKJDHW9F4z3C1Tt8K2uBX2pU5CYWDjfS"
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
