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
    "S6PVU5ahd7zREHwZ1AJFApRyiuadRsKWWSwBwYctcgG2T3aHdAXBRQ2bNs8DLn5XVG4WkN4fjMbWJfEfPSrt9PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJmYFNTnc9szVenM8XLZF9Ef6eq1rcicfZr94oDsuLPZsDihMBXTtHd6wvnzsABtwcwxJ8PoqBc2hiEcnKV7aQr",
  "key1": "4cj8GTcYo5hyvXmhvPW845jtWxF8PLPD1MNfjmWvUxLxYyHYHo78eA7u2TVtHbq8EZWQK6brunhrirSVrVSYy4h7",
  "key2": "3gdqTfhKmgP2XYdaFTXsaJbUqiQB2GLteGUDb5gmRadSFmwWGNkmbiupi1boJGGJnW4wHLbrTFE7jMv9bfgFg1M9",
  "key3": "3vd2Zcu7hNtN2Rdz8k3KpHkHk3NXKpWGPSnTywcmqSeVekccpFCPv7SPwi7hR5ekK3wsBAMEVTikbi8bjXAeZbCq",
  "key4": "2c2g2TTNo7WPkNWVtUNeXYwjkSFxXmvbMZ5UhEBryEhaobwnyps83bUiBrBftDCCYPRLuPUUmpHZsyuTCQBcy4J7",
  "key5": "3iq8Bs6EoUj16B5AsYihfTLuk98NwTL1p5ddbfuR5CAEJ8Zvvhjcx8sYzGKrGPucya7PSn9k9U1LpdR3NioaMSGY",
  "key6": "4TVDqAn8ZEoCnDNUevsMeDd9eJBdCcrdqTXvYEKzByJLr3n5ktQSEsbEtssYgd5gUHE1U1w8naW6TpWC7oGfnFXU",
  "key7": "5hhAthmYhoe8wMJEKvZB6fHoU98KadKkceEryBopxJ6eHEb1axJF85DURrMvVZfzA7igLrjyNt6n1WrvxZixg3YY",
  "key8": "5Mkc1K2aB83QoYRVfWxK8e1UQ8yUZnBTiG3ZrsKrffUFE5hX4r8yhAmjtThAbwnrK8a8WsrAuwnntNpUor4GhG8M",
  "key9": "22emum5gkAeEf96dpDmvQ7hsqQuh5jzUkoz5YpeM5bAxmEC8sRKJDRNvyjfi43D7TqjUX3sCZ4WrJgkmryoszXgq",
  "key10": "5UfTjH4Kaq2YDtPk9xcQSWP74DjVj1jnXsxKujaTvxam4P8MX9LACCyeDDKv3UG1VEUwJx1bxZxg8Bu5jnXcBrB8",
  "key11": "CkNEzqZasKR7XBpK6KYAsWA4SQhUB8c1HGTyfSPLtT8dwdkw5tneH3LLCujhm7FhhEGTLhrZ6dNRGSznRGjZDXM",
  "key12": "4p1jRTz2C88usxwF198SEtcmuAKufSGZQAf13rccXtsWdQuAKRTUj51HTwyje5PNvhb2YoNGe53hr5H3TCRp54Cp",
  "key13": "3EkT8q1JihVJWUisS3XSWsEgcp8ZrnQVK8NuP96tuJzwcv47V62HxYeEnhsdZCYLWkKpwQA61PTnfdAQnaKVTHYp",
  "key14": "5j3BVni5EnFeVgdxfrLbV1KAbrirSCGN9ixQhpeDEiS7tmsLo2rB7D7mt3oNHkn8WYWNZoRitgu22bvuP1HdAkhX",
  "key15": "3M4GNDmCmJBFtBcSQXgjtYDhTpF8PtapB8LjmcBkrSQ1fvTAgvT8c3vEAFXfapX7Fdwn5WtZ1n8mDX7Gfhoq13dB",
  "key16": "5Wp664fdPbyWAJYkGHJBpYSw3e9ZLufQ9fCAoz6wd7vAFWDgZP1ws5BSQt7725YkcNHtGM7nYZMqPoXEKdSp2Nhv",
  "key17": "42zSqKQnReHhngJYfidyhfUCYx6FkFdsDUkJxvtjTuRqTMpQ2pxfhVxrPQoV5usCb7iic8NMVuHMJWEviVWDSuF4",
  "key18": "q9GE9wsMG8TiMyRC6Y9V6ESrryyiWHHYVpTb5y2sYLhtqw7RXQrovnijad1BL69o2DAcqVE5fHsE8ZmoiNCZfKr",
  "key19": "3XpiUyjg7KhehLYXJh2vJRatB8kbYqczXku5cfXST4hbjUf4fY36S3fw5V1GdRRXGpW3ugpiMMQU4N7AHDr57M6L",
  "key20": "5Fyj2TUMcMqCWj8wAzhY9hcxYcRAHHfYKqn6XHnY4qN2dpAGRpYXRNkjtFP5PmTTAtp4gdjoRStxesEDP181maSx",
  "key21": "2dQgoaXtnZxVDSZinPnXxhY1bVakGecLFTVPPo3x53gWovjexTxssu6CPuo7hgPgpVXBLvmmNd35E3hzwixd68Ej",
  "key22": "61dzqqS5M1rUPepHtQkoDBEqp3LpXocVDAnLqDtuD7t8kvKTHPrfD96cKmRMeams8j29AVJCQPzMV95Tsj8fs7pi",
  "key23": "22S2KcL2WbKgbd1YrrBmvLZ4MaspX5VcEedmkvtrrPdsmAH4kJRRrd8AjDUviJTpLRCPzS5JNUz6HjtvFif4dHyJ",
  "key24": "35JmPdDgRysZBb58Wvsbi4FGCFu6EaM3toYESdJ2e6wqwCE5onSLMndxG4zpge9z9hmJP6MSfwLfkqdpKUMLyY3k",
  "key25": "46Sq2J7DB8XetGWbqsXqUorR7KqkDSF9uNTBogdFBk8K7AmFCSGfq9ASAWqCM4sUCcfyDCDJShyB3VPeQ4r6WBqF",
  "key26": "58XmgmGHaQMK2WcJfFFd3MnGZrMaAT59YeSwZT64ZvZ1ocTcysmreeBN7PySJLVrKLWhUo2J3iHhojbQZCjG3jtC",
  "key27": "Nn3NSqxDkHSFg4nfH8CKdux8xBCjBsBgUcDmBfsaki16Mb29f9gMvDZ75bkwJ3SugKgRVoFUXyijgkjtods5pth",
  "key28": "36rroHPtMW68tYfDhLZLzB67zPrrmt3fjvjEW4gMQa2LkB3ovoy6jZx1fG2bTeYJqDTLKqmcr52H7xJKZnR8szBk",
  "key29": "3cfsMDY2R7t31AqX3jJUPwmaGAtavhAD9gL6YbvBiJRbsHxtWqZU7eypfnbXX253MNNGVLggPC5nLirNVHtQSkPL",
  "key30": "27ZtfdoebjaMtBwwUFgmbtVfHQuHsvh3aHGJn3Cbf7xj2NMwGu6LbFV3fzK1WUnNEBbvmXgrh8zHAXLjMDUSeKHq",
  "key31": "bQVXz2ry1PUMHjRCrERVcW8YdVFRpwbf5H4NPWVkVfwicPStGgicWu1SGo9U9BLVanQKzAbfS9c9vBzAyzA3itg",
  "key32": "3HTUjRcuJeQW62UoyJWYiKvDeVHga4sxsdFvTErPJ6YVpiT5e6PYNfLWy3pyaQ4sNrbfXVza5VWiKJpDnEPNmBsk",
  "key33": "2DzozcPBdobjFgtgvJzWx8uJW5w17jkExiFvuBpdju9FHwJWwX5rQRLXMzYFzSL2LtK3xy5fn4sbf3jTEs34wCMJ",
  "key34": "2GL1JJmUytgN8ntgfoAVLjKLQunP2F5km9j1Sg18Gj9oHoiQus93LwTKGhQiEsR1PjU9T1v1c2CEmYkFxJVfBrdY",
  "key35": "3EEArGw1foDxnUf96uioyPg9Z5pphxvJPonRsJBAjDk8EmL8q8Ag3yTAFVmGVBsTwnWHzWur52FouPYdMjnKa9pJ",
  "key36": "Ai7B324Uy74USqtjmSvSZUofAdYWocoXg7YpxxkDJbf2oEqkjjuCyMc5sLZsSch82N3EfLk4WU5gBkHKRYErV3J",
  "key37": "tfXTSi6Z7apBAf4Wm4DvDREjg7L4FAtWB3GvZUE1ptGZdU9qWHMriUUQvNpDUzrETsDqfDZbDNW1uafpr7EqkMn",
  "key38": "61tjDjzHYXVRJBQBKqkGrd2DfEZkLmYGQNHq5UvQVTVQbXgB5ZBmm9j9X2W1MYFn5q9xzSTad8MrLZ9A2R1aAgbZ",
  "key39": "d33MzjrsngjXWNdjfXrFbqyq2jFFUv6dyZD4R7EFJubAhBHdUXtHBUNztTmbKeB9YJfVvWwSicpCsKYJUdNFDVh",
  "key40": "2Yd1Pdw4vqLtAMvVY9WiP3om8k8XrViCocYtAh2EbAy6mwwNnPypFn2JMuRqcCFPZausKv4cqVuKoD6d8xNwyPYw"
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
