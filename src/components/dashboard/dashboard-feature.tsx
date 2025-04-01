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
    "ni72zc2hCKde53WsWDc5yWpTot21rWZg2oAmsjdWYqVegS7NE4WKgvo9AtNJWd3HrDeUDmCoGdBh3auRgm29rTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s46PaLhhsMCuWCsmJmgKC9drU2U2kypAAYwZZq1RbjScUPJPTpwJGYmY5i9W2WpjxpWrHLQgY8GHUYocoTxc8x2",
  "key1": "4WkFdrXXVhJgLjgmJxAKCW8tJ5NP4Mne787cxbrKQeHTZWLkMXkyJjKamtvKL36m1ZFUCnmg5m8hMY7E71ujrQaq",
  "key2": "5w2bSApXKtkRqGyCgzDHg3LSHa14HLLuhTo9gZP5vkHXpJMomKiDtPQiaR4omEdAccyPDrbSviybQ2iBM2eCpUqv",
  "key3": "43AMHREAycyqZvRb6AwQhQmRdWBDBFLHhjndE5ww8aqBJ7HZoqivr33KthY12B2nnUzU5qyyr5owQTszcox85bJV",
  "key4": "AdivvhMFoYMtwh611tv5x5zaweuSm6uHavMTSnAADksrbkbVFNpe1yR8cSRUwHeQpei44jqBdJXXNujhNEHKnVa",
  "key5": "jfT3YUz3Sa6szoRDFrRA1GUMqAArJVB4W31BVigJSCgsSzMab6V73isamqQVQqD8c8jaCbb6NKEsyb2xNaoBdPE",
  "key6": "5m1MEDaePewpmQiZAwWHVV188Yb6z4xH5rvWf8kFHFTSQdsSPvUV3XybmQbKR8dAfPjiS2dSBZwYmdNguG5yfMfW",
  "key7": "NuFKHuVuPR1GmuYRmoLaeWWcWQ1zux2RosSzBD3KnMB4djBiSMR3zvFVNkFMKYRgapgBFPK8FmbFJefxe4DfgZw",
  "key8": "4ntXVVQEKCiJUZYpfjBhESeSwcXE2EWEsyefFu4fqdrBVjqCjHSXTjpRN9HEukVxDKwqbjMJAuJHTkaXKdK4ZfjE",
  "key9": "4DVgTvs4on8PR8UUsdRZ7ZUWK9vqEPBBAWUETabAKfMeZyt5M5wNue3k6KyGHmxxrFjQXWPgP2n4yQpgC3JnzoTe",
  "key10": "3ca98kQ8xpyjC1V2eUcH2raBXEExzcjKvyFHqXnZ9BoD5iycZVtzb79FvmkhSHA5YdsBX6fXdrD5gzvLKidcY6cN",
  "key11": "3mpQgzVFeAFupVFbSnDGMiK43ZkE4k5zi1SsJ8CRcjHyjeq5mV18cMJzG7jtRurvVaWkdwRMVFqYFmX22Jp4rqow",
  "key12": "29ripxKjWqqyb2qsrzFFpqu2XvxuDe5u1HzA1W33aSAqQfwyia8XxEVV75V2aCG1NQJzyJ2uXogSLw4mwKjebem9",
  "key13": "237hcB9Lz9FxR9Nrac3tDY93jtWAnBYYuSox2MXV6BFTn1Qv7mEjBR37QzLCSs6wRZ7Gozdj2VqsW9RxtTA9zqmx",
  "key14": "3JhGm7GVoJCbsk4jc2kyRZeVxFgHuN2Lbi8J1nK3aDR3PyWyX6fuJhuykCh1J3tmVRXurgS3fJxTzTPrid53fo8V",
  "key15": "2NewvTPHPV1MiG6w58s4TNPTJUthwQBtTVfgYVr4Gz7hpxM2zgqwXXVnbyCpPnfqY99UC5fvs7hqkoVBA2FEUENt",
  "key16": "2HyXnchgHLBxt7qa2pAnJh6TEtTxbwLgZ3cud4PtwbSMC6w7dv8ni4XjzA5117L4SH9zCg9TFXKK3gRSN3mCRCQ3",
  "key17": "2LcNjoFgCw65AeGHE4juKT5L1C3XcBiHW5wrGW6oPfjmiVvXaQNtmc62FRRXcrfJyaywUf4iKyv1GeZJKyxe1NCx",
  "key18": "oaFVk9sM3tAT9rUzqVDZoBSE6BrhRR9bfkC6JKD7UWzUq8yV3EL3etMjgnuAgjMuhhosvPn1mef8WMwQCoB4C6K",
  "key19": "56RWdc65Eyv1H3LYtWaDgTatR79MALEKsL69gvV8Jg5qWc2QHDaongNQ9iDaEQNqWn9JNJt4wk6hXvxEjWYqy7Vu",
  "key20": "5PRvkKvT8VuBpoqfxvSnCuTdwk7yyhBufbcSHcZkv7t2wfqPoZvty8zmFU3xF9rGEAmZT1qHYpvmEtiGFzLXrb89",
  "key21": "2W3EzMJ8AsbB2N3Cs7trMtCdsWvyPTtwkozEAQ6oHFFocZbfyfiu9HTSfqYXfpEpuMbZYhuz7HhgJSs66v8rfCBp",
  "key22": "2S1ArYGiFLtreyQHSZBUnFSCrDWqeQACh5cPHjXprHZJNqEknEh2RR6iBKh17eJ2pPEMwA8BkWZKfyyTMg6DpZYn",
  "key23": "33RnzHoHyqhGhwTjyGsibdCDuDYfHNgWxuutJNhYruqMQPinjxzaSRbGggr9wqPnRiu3hch1Q62LudUSKHGUCp6n",
  "key24": "2qXdLHwcxg72gQEtYhr85yx11P1B7djTAyp3w5pRhQVN9SPwfhxM5RLCgks7rU7TTsPd2qKrjSYf2skaKhNXo73i",
  "key25": "2oYHWTvPqGPgZsiR3Ge2XnUKeqvVQ1UG5yiaKd4FBywNJkv5MCUZo6NUgpRVmgNo1m7brA24dtaFe8u7P6LSqrFm",
  "key26": "yW2haUhTswVcVpZGiNMUhWoH1LTTThC6gPudXTunDvgqmeukbxuzuw7wtMtztGGJ2VutbNNvaNhwamozb3JUw5w",
  "key27": "3iceYDXqj2Fg7bFRGTnyHVA4hgdErrnTXzvMygwDDnsSU6V6kF69WN6Hp9zQKLVXVEYntbkTdd5wVh727W4ZCP23",
  "key28": "3usnJdDWkK8zFy8ZZep5XXf5TMBfjA9RkaCd4br8t5XUgpVfGFM4yRg6muhw6EQwxyBnpLKx1rhUwQd2NNce5pjN",
  "key29": "4j6koM6R567V5Gu2vMYRHmdFMYC7MG5fam5d8vJeHzyDxGyzwGc8fpgskGdWbB8q6XxHdZMyNMydx9Sg6qCoWj1b",
  "key30": "3nBWxmdaqcPPd2JJyz8TmTZD5Pw2cvnA3rqcVWMwct3poqCXws4yvMhzLDskMLpKvHMey3UNyfbCsiiFAiiBbDdD",
  "key31": "57nexHZTf717xzjmorTaPTvCs2j7V1RFZxbR9vUEMCPQVyL7GARQBMGXEBN4JN9FTdTXkwBevGpPFbiMt8DkDN4U",
  "key32": "4GMuAbDqyP5ofHZpo6AHy8KMQn5U5Dwg1pczJ9Qq5A8Xixa8HxEDgc3unv5aubKjfunQJbw6fC3Ygks95qfjPqpv",
  "key33": "5HnFgJayGRPwmWmdhuKevQ4Wv7xh5f8e7jFY9sGSmYSKW2hNjDH2zFr3mDD9HZWfmrpB9WoSXUdGQ4T7HExE5ph5",
  "key34": "YTBJmkCwkh8ijFxRcboBMMnft45vudLcqLTDFLSb6CMVnXmTbyCM3zNPCqq2Hnih1qSH6GwLV8g286aYnZGA17r",
  "key35": "5MhHHbrHENzn7AuMv5xXY3ep93x79pDPKCHBHe4XZ26tT6xnr7KzMQVDFfZ5mkG1j7RKJzZCUqaaRzznoa1zAUu9",
  "key36": "5NkP7SJCihTjGGhb74Sa66xdGX8BSUW5agWDg8XszTETjHU1hM8pBWf8rAQTGptC7sz2hHvz7tHfNuX4Mfcfz8xE",
  "key37": "3ut5K1xueVWRd1YHNmnwKPYJdyu43tzwiz2uzBfsTmpf7PsgN9X76bTtMRZkpNvPuT1VFo2mHz1KwRNDWEFagNho",
  "key38": "3finMZUgFGAqh5rreR6YF1eWRgJusHuAwynnPou56tGhni1F72Vu5PEQMtVxWvpoAX9KuzJE2CYUC7dLiNUnbihM",
  "key39": "42SA33pNPKuK5PchVR2qAVMvwau4jY3CvEBY4je3ema6SsTL7FjQ9oC6FPMV7ReHzvx11Rx4Zdxm8kabowKuTFYW",
  "key40": "fqpmt9uU7fSrJ2HPSZESP1tVk74GfFHwAKHtoQdpiLwLw5cSAyRAxsdNmuvuVwAD9PRYw7M83KQsFCyfgPGqrTf",
  "key41": "32FegTSDWYiLnnFoHnLQiuSzxGdV6szXGx4dfwoKx6uRbZD93oxMzdevWiNZEtyN4cWCgVHQnL2y3QErPboY85x2"
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
