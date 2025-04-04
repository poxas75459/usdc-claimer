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
    "g5XJChTUjR7uSheajUWo7ny71zxWFxbpKqpkBaoV7Vjt2omgBZkn4aSNLFFNTNYmyQhMUTbsWvSq9wy1Yqrg3Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAgQVZmwCCzvJT5PeBAPk9HuWzksgGnV2qGGDYtdKESQqoNVbqoYe2eULVbJXfFRBo6Yxo18QuXQQwQhDMy2P9a",
  "key1": "43sSGQi1UkjLDKiHvDoWC3NEtRNBxHvZxEFWgMddgjHFSQXvSRgVQJKZiN8ALDsqvPmsVEsyV4A9YrUV276QFpRY",
  "key2": "TwbR9BYeMdLxJuyPd37XceuJJUsWLNQ21aoq8PzyjfxBKRtLhQQkkVANFnZfryKXe6v66JAiHX6ytRobokbHCgc",
  "key3": "3MLyHCtR86UDHDXYMxkxyDbFArCKStrF24x8g4EKfoiXjSahZ1PTXmkd7t5iAxc53ofpBabBBiSjDNUhckFLpZQy",
  "key4": "4FRm2HQHB5AxEADZEVvQTMBfdM5jX2NNzRbekD7MNTnNnUBZyek6zp8MrKfoiLA4L5zAzmAW3iFoTg7c7pBcSjwk",
  "key5": "3RVDSbDQMiertK9Tk9FQFvmNB8MEoyJtgpoEVqEg8Q8DDAnqJxFe1o3VvttteAvqtScSSkJ8q2w74Z8TuT8JMPDk",
  "key6": "4b5tjCdwQK1p1Wy8sX8hdEJ4YsnPPLR3DGntcyRAXws51FALdHUJShPxUQUmhbjNRmx2SaY21fwf23M4NoEugVyW",
  "key7": "p8bC1aR3ngSY2GS65mF3bA7VQt2yrJQmfogqqsYDWsHrq7jfu9yYUv1kgA7ujENELjpmSaxCgGxjbKTjeNApQtH",
  "key8": "trt69JiH6bvJ4uqTte4vneThpWFmpt43mW1iCBjY4MpfCUHyYPbiTTqo9DzLs4mKdzXXefPnzoo33sQ3dibw3Lu",
  "key9": "39vvecGrTJSqRKJN8MS2ap4VKVcrgyh8PQ9KGxetwqvdmsaijgXqBWqAxVcY8Nkx8A683iDg3XehyZpmyDrfMxbQ",
  "key10": "3fsKRyKna9jfQxo79Q9h9ooTHCZ11eipV9ueN9YB6wqPEFMGUTqBzD5jYRsC6YrMrY5n5YAiUSE4z8msyB3GFVqk",
  "key11": "4WUF9Jg1b5cAjf8sDukXKksbYt1xQcyVtfbtjiqQNbgyygsTCU1w1UrBWi2CPb8KqjFF2ySy9SYBiQZ5WCvM9i69",
  "key12": "2HodMcm36j4kTPan1WsjAeUS78dp6fNt3ZuZw9kTMoc8HdAWg6muc1yEQoeu8qSvZZpe1LGkF67Uz3pHqWhouKZf",
  "key13": "4uNQHEBTwYz9aijQ3nRpGQviJUb6EeN5Tuehn4beuDe3W2MWDLw1RizHzVkAPad1WzwxcsjBw5gUxgetZA1hJtDH",
  "key14": "4RVuNGe6GL1tcmdfTagMQHAvuKacsgj4EtBR67xbRaTMuYo3Lupqwe4KpJwCmXzBPca1LfV17B2Jx3ankr6R13Hr",
  "key15": "4jp8yhm1WNQ2bfRUEjCPnNnALcXYxvTDkz7mtvHNx5LWiWuShcUF9LBSKQQi5snQAZ3FdyvN8oFmcWBw3vCmEaNm",
  "key16": "prNV1RdVuhuCzy58NYtYnjaNH517HDFY9DWctABmAQR6PgoYzjJrZeVSkvA2qydGNZTHBKuvUNpWKcynaYFsADR",
  "key17": "3wiQuiHumUDZYvmCPbAMHRaepVRFEGpQ6uiVD1WUmPefzQjymnaWmCmmaYapPEaiKQ71RFLsAnvFPVr9vZCorDMr",
  "key18": "3EtNsZeQgRkQ3Nq5apn9WhvKYC4BKQBejABYWim6S5yrxG33TQnyiEmovfabpAo4mpv75sb5UCbVzBWPPt4SM3FT",
  "key19": "2ttCqkzoD7sbK7PvAjuAP5Sd4aDth4E6zQxFyA4kXopxAhCHvGENh7gSv3HE2vwycFbU8FZ5whHHvDCLYLuHm9f4",
  "key20": "58WhWsK2hSvgLw2NMGNfB8zYpmRLAo5GLsqu7k2i1jZpM1yDHmq5wuPVdBbRCvids3nVXDtrpo7GJU6LmihyPu1s",
  "key21": "4YV7wE5CVyHuNu4CLQmYovFoLAqmF6ncGuz3Ka1xqmYCdt39e5mBwA8i3HoydoJfyc6bXZMoinch5zhutaDHoXtf",
  "key22": "5KfjjP9Gp5MxHEAw4AdBEz2JmPXyEHFoaH5oEfRXpkKS9PBLKuwmkeYjciXYd68jsiHnbEwUZL6LfgmauFGUBDj4",
  "key23": "3JwMXs3247nBqfDfeNbTmqmkPwMXkYzrPFzfTHcbz4KmqHKmj9SAQFghkpP6kmZahRJw4fw1seJ2Vi1NH9XxdAbD",
  "key24": "5nDFDGMYwSuZTrTP6ScFTP4UvJCDv8HsbpnGMQG1pnQNudW5adjw9P69gsxWRCgkDTVwrT97Htd3wkQ6dMYc1Cqa",
  "key25": "28cFsr8vaJX5YhXfMU7L2FwsjdueEoSy8YqErvhzY5AJvdfqybf8iNb9X7yHXvavYbsVujScveSy3Snd56K4N6ii",
  "key26": "8VvXKYCHA2YuCKKWWQaqW9j7cdjBeuJ8ZW3XmApFJf9v1QrZRixDEJvTMnZpryDSWaddsQBZPkmo7Css4FMGEbf",
  "key27": "QgT31PfUjh6fsuNajyJMJzqfzJJxduter42zADSB9ap39BLALaR4MbmD1qCkk2BVRtgJLP21bWBeatzRfEvVSb8",
  "key28": "eScQDqLZfuv53PHFFrz2FtQsa7LEc9ChDK1UoUVVdVRZKpKvc68Mg9E2te6V6Jk8yrjhV2fLkpCNeruDfezWapB",
  "key29": "5HzPntQVkKA97SSvVwoJwjKszbeHFpjMttLJ4TPBFJCey89pkfLHF9CxcKKSKJSAf2bPzW7hSPp1kmLRhvscbivz",
  "key30": "3rRwBMm6fxgbSXGd9KXBTm2B8e4TQjMHucqACAteZjcSitzW4k2LPtJBoCCK6qU9NfbkCxLfSFhJxWuCCfco7Bdv",
  "key31": "4sfLY55wRBCjvZPaM7wLNcXmfuiXpW3ofXjwRKMyB5nsGaLPjzUE5ufDpEhJ5Sp7TiPMATdbm32p8eWdxs9g9XzK"
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
