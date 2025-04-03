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
    "2XYnbKrT4xFjErQmiK4ZVvDCUFBeVLasU5eRTDqw8UqKycVRH1s53swPKhgwEQMsy3sRqBY6kAMiiz9S51YZmfnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52wN7xN2fkQATXuK5mR8CyydfpzGCnjkMTwk8VWNqwTW3mMUZxosE3mBd52NVwih2Jmn3JfSV76pGCtfwPKshQM5",
  "key1": "3uBaS51XXX5ratfuovmgNJL4p2me36nNqb9q57nAcdtBLZ3rpCUfF4ieqNp9dosmnhYSEMktk5L7i6KSd8a2AVm",
  "key2": "FNFQAkuo2RsxPrmgndDS5Ypd2RefZosGsiUyu2ke68jXYc4nZ56MJY4REosFsStSGcUt1K7UXmK6UbUjYVJJXSL",
  "key3": "23G6ZdUvaznCfnWJuztnswp4GvkfscF1yhHMaMua8qKz74Prnq8DNmWSxSAtxQgCcRfxUgJmkBracKEmWuHd7qjd",
  "key4": "4NUCJhgwRAWzqo6aZYTfd3F323UGhJiDNYGcpn2wcPg3NdkEzYJbPzMLP27kGw3YJNiwNwZ4TkuJth1pUkfJpQ3B",
  "key5": "C4pDm8qRHemFsLoSHxGbLkBA4D9TudmCzs4TqKNPwbFkhKAZpfogiSjrPZcqZNnQz3UqS93w5AB2zAV2m6wRQR1",
  "key6": "QB54FtXYJ5WyEDtiZYwSqmmtY2Do1xSmL8jyLMzKrj5sc4YxmNuZCWeH1BuPXq6zFBErky5YddPARp4Wfc86dgM",
  "key7": "4iH1jMWU8aMRAQhBwEubr9nLQcaZwya5K7HyyL4F3eWYfwJqvxAiR27SadtTKfGosvuoKWLzChQgLCM2avrfvtRL",
  "key8": "5b3EUE3SKzBb8UKMrdyGMbV994S95RpkAxr1qY115TPktW3djq3ayZj8s12czUZNHdBTTeE8ioim24mn9xPRp9fV",
  "key9": "67TSW1rdxd9FjAf96cUVYqUVxay4k3uiMiZS8LP7Gv9gp4XAgxSK9ovgEbBPFqSgYtaKKgAjhXfMEnSiTXChCCHo",
  "key10": "3rynqCqNXwpB1TgJMTuXNGpmeDvR234mC2DUyitemDwBZayZxNM9yzsum519Nq6vcHfhxCjjRsSsbR2sQb5dcUaB",
  "key11": "4M8oSd4nibD3kpFB18E3ESdGFufNDu3TvHy1gmfV3AnD9YK1eQ5ntq9YaGom542ujs5z5BVfWwS3Kv3je1TFfNf2",
  "key12": "2mgX92gvx3bmYCNFQwsBj1BaRTdE2V5JJAx5vDbxW1tSrhwZVrCTP6p3jyCJ5H2Wqs8vXpKfEarEC7jTsT1GSwCi",
  "key13": "2WDQWRTf8XBCm8RyHk19EAZDj9Btw4vydcLqxH4Y5RcHBQV6Qhs3MHYcayfrgheGxHsAKg6ywuWf2yBHYT17C8Jd",
  "key14": "5Zu2zGefBXZzWKWjgAzrPR9Ygo9KcbUjiLWpNMqpPmsBcKZvz2hPFsWk4a5YXXN5Dyh2P2gAeqFXfMzZf4fsm4ZC",
  "key15": "3j2NafjkK28MF22j6FgRqvJaiwUkQCBcy3iKStUUpaS3zFMAzjqGWGdjGRNUqXxFJLZjTYFZmsZLcSfeut8qdx5k",
  "key16": "Gigfznsm6Qys1ZKsDhK8Hf9ybLjmu17qULVC8uUdCrhdZw7YWT8urX91pRbqJbpV3uCCU7MMHXsAd3ieins4jHA",
  "key17": "5BAnE6XEAwWnAtug5NHDeW8NGcWQTe2aDZzHQNVJ5CoRvYnw98ZYbQDhBAeZswW6eewVVNN6qjx1kfenfP3f7YEW",
  "key18": "2oRfhEJgxgAce4zcmLWiW49WYAJcfckoig95cCE19ZFXWqvzeafEWdko3n8DuTDATbKuoZxNKhmFwT8UXuL9RgUF",
  "key19": "4361WwWeTLFWWBLZAiXU2jP94P1msVfSFZTcYmLvZgrfFmCsB1jTTvRiDsFMjAM7dz6kNawpnTqkpj4kEH6sdhd4",
  "key20": "4SYkMsrfD7N58suaEJyjpYu8oiix7GwxBrKtCocrqeN3bhWKBZBQFd8oTu4xVhs9tZCxHtdU5apVsV6RztENnpXC",
  "key21": "2teUj7Y5sEyHbueU3BiuWDfotFQuX35c4nnwqhFwk6znzLzN3TRRmJBw6dWx9fXMPi7LLUDKEFxJFadds51MFfCu",
  "key22": "5cfXFJ4dFqFfWdywfPSoW9v3uyg9psi7yV6F6ifqkrJnS4CkrNz9m5CdCrVmJTSrZW2JsSquJPneJoHsGR6pa9b9",
  "key23": "59MMtZ7sf925LYeB4BrcgC4ygSQkt5oHVNznxtPK1rv5BATrSWWJphohjhjzDB2zvTZjvbT28Muz754TT1brFCU5",
  "key24": "58aREUtukrH35bKPJbhtHhVRK5VAi67n8vujMb2bpQ4Q6maTS4DnF3r4ThyoHYx9xQquWoPpZzULrBenV7UuXGxp",
  "key25": "2aP4iYL7qB6b2iSroYn1aZcFWVkEU6zUZd7gvhTvSWnjLaj8U5CwgMtdXGqi1VkXxaVnpcX3orvQuFGce2aL8M9L",
  "key26": "4a8hMPM4kgDYc2maahXbPU33pSgPiDJFXm1PXTH4QFEYgXwfMbDuYnQNH3nWWXUEuV3bkMd4SreJSTu8z7bKx5dw",
  "key27": "2dc5vK8M2o9Auu4KiJwi18ReHewQppU8W1ybkXF1BzLLKHtAkQSQiMsGRrUWUPx3eNKSZgL7SDY1rUenKdLZ9Cs8",
  "key28": "4Z4DiinQGQXRgj7zR5QtrUHH1B9VgxVCXxnPQaBejTCCFuinKmcs4WKTzMyyyKVUsneVFepfJaQSwkQLnSqZoPCQ",
  "key29": "eNT3SGxCTmb8PHu4DgKLMoZJ2bhVWbdAXNMkwMf5MQAkahkTt2boZYYbWti3abFHcrLRnJGd6CecfjWdbZSfsfa",
  "key30": "4mvLqBxcPCx9PPqKm6ADTT6WeAUySAxwxyTFFvhmLD4sKCgh7diGVGq5sB9NiZovABcW1UkZMMug4WXTxQMpNgQm"
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
