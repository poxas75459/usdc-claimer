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
    "4tQZ6RkEPBwt1wBEdoN3b9G7NWnRtqNfXmNnHGuChYh4uzXmxuARLn2zbFMfkwuvLb657feq3HBfk4nSG7sWk3h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSeivMC6zcbUerBBkQpkRec7Huiy1XN7ASfn87pgBzsmepNg2aR8hZ1xUtj2i59cbwmDZtkfPGLhSmsukzEgja1",
  "key1": "2JGtNz6SaL7orcKyeZtJaBhp1DZjaokqgFrHsmQWvLAsZ8JAtfiGWd3RYTgKW4ENoRNACW3zP5PvdozoHBJ8f5Rx",
  "key2": "3e7uSp4QTFmjVxMZWatR5XKW4V9HCET84nMkuHt4GxHb5JJztV6rjAEb8YPMa49JQnWnMXXnKU9YxdETjT7Z8Cts",
  "key3": "3nXt2LAcWzCoGtDySEK9beBD7LM2vKNhJN53D7zubL5kc2jR4nV399F81SwtWU898a5sFCAigpmk4UACskjXGmXR",
  "key4": "3p56WnsFCWjetikp47h77jEfpDSsbN48anByC3p7mdEJmqepvysAYjTCvQg8VsShUtQvjWF9dybWkYbC3LCZEMBh",
  "key5": "3kv2MR3YN9aiirLGZNbm9JsNYyVmCipPAKoPUD5d1JUgDo1N6Z3hye9g28KDAYdmTqWzpczmGNNXkwvJj8zpxgFD",
  "key6": "EM9JgmLXMaMgxsi691SGo1cWwTvvCKJQfFWp7sD81uqQJThyKWaC2EnXsatxB3GQFs6a8JEzS6E5ceA3B1bS1TU",
  "key7": "2fw5xaJ8DHrGTARyJdsXuEU5skYjW2uk6ccefQwQdJUiL43gbw73MMcw8kvFiZxFmAN1pBuFWuEFU1SqEyQwEnza",
  "key8": "F2ZCVPqZ6EGG2YtaKDhC51tRVwPfskfigDnttcusqeLvnMeMYZwLso6Kg4vbmkjWBp6LNpiH7L82w8o4ys8JkYW",
  "key9": "5mkoBXkDPHMX4oaeuMGDSMTGeP7iv8oR4uY6L1NiNY95JpodgSWab9VMiB8vJJVBuJrwrRbAp2RWZsWr7x7v3sc3",
  "key10": "5cDP9pXWriyrKSYda2hKjDAWQBQhZTDzHcET864Gs4SdQjKMqGiksFGjJhL4psS9Gh774DwvuL2kWpXKc4461p4K",
  "key11": "vYCMdYxym1rWbWLPkZdFZsrcUVgP81bPMYG85hxBuQ3dp7VbfxAHis2L4hkWoqDpzwgt4fcdAPA5j7Q7QnKnpxB",
  "key12": "3EVZytSZNVRjgvwWSTQXVGgS9UykD4jRj4EFAcL3mzRstMsNdML3nLqVNg69qoX8WXXkn97YiduRejSi5RyuRCJo",
  "key13": "2HqCzyXFptAs9kpvidAzvP59oYk4DqaPbBxUaZuqdbWMdyavo8BusSaDMXeCMLUtuUfvwyVvrGEp96XVeuVFVrB1",
  "key14": "4zSeUWkLVFnNkWn9SFVgz6MWzvc77CxH7esXRzzByDLQMJ7faa7AmMzarr95RkF5V6d9tXrciqG8KUSXvGSPdA9y",
  "key15": "56bHXN4RPMUKpuE19ohwi1S3LYHaaoAUqkF4dfWbSeH9gTxodXnn4vLDPZMzJseBrKN8yhBmukwV4xeXMCHmcTh5",
  "key16": "5t9yG7j959i6BMtPxYX8rWXFQhdJmCVgF85dQeEYyNaaiUkpBHWkWFXvWa6tftigjhs51bZiv9CB7EvHwPVriH8K",
  "key17": "2KuF7vmSGygJ7UGWV3YqrKyA6hz2hbePhjqacKYEVYuB6jHoFwX4LkyS7ZCUTKcJSRDSEqXujjadd3Dc2AANiZrf",
  "key18": "2QyY9SEaSUbyozaT1xCypbtWp3C9w4UHk2eDWZf8zkFNJqYj6KRpauP6bYfyRmY6swFzDLibgr118SFizarY2czn",
  "key19": "5WJngGLUg9H6pFZjvY76uC5B4v9JaopKf8KFqfMmUfJ5dMYHtTUPJchDCcaznXTFSdUVyvinu1d38htzZtVu6U3d",
  "key20": "343WfE4AeADHd537SBRf5qeitNQY33mzuGibQaXZGSaQYR5ue3UrvYPmAa5gVGLEKS54U4nif5SzfKd2yT6mkjYd",
  "key21": "3bGz9kCmkdCosAuqU9xYAZq7Y3KHVRJ4UmmYm9vnVxGuEBHUHMjF1aquXdFfnhESRSDmSUxyzC3ibxkbgFJEt7gt",
  "key22": "4TntUsUdeVspQBpqAmGv5cfLCuKZFxdWuhDzNdgxtz8mZcToDQQBHyeeZsrWwfrz1nFDfCpcGpv72bBGzpp2111P",
  "key23": "4Tarnz9y2WN4zHpJ9DjaEEnT6aXpuKsvG5MgD5gPSBWQN1bdcCjw4DJTuuQresVciFhSsCrUhA5yCwMN6MqMSBva",
  "key24": "3eUzGttncW9V98qFQT6gq16idQvr8KmpSiwL6JBGuAFUmqfSKC4ZuZJMUXbAyYfELwtm7VMmCbqr3nBb1Lizrqr6",
  "key25": "2QsHYEMFsnSUmBCQTx8F8ob7dss7wEFrg22TmBJsbkEDSEkz338waBQp4Lc2qEbAX8kKapC6NVXAHnJmwjwJAv4J",
  "key26": "31F5SG6X2Ugq43ayoirHDCT9RPWtm3pngzdgRe2a5e9GPQw4DJwEhLjUuv3PNhekU9kbimWzTnzGwEjsX2HSB7Re",
  "key27": "5fFBZYuFqESqis2hZ7LWqt16nM6JbbvSA4VUg332Z79FAXj3HmgmFxVsWY41aEVJHDXomeXoMqr63h7zvAuejcVJ"
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
