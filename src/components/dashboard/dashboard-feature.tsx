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
    "3NcytCEw2Qn4rZLZiWiEf1uKUaNjGHCrfHtzh1kyFLqVDXBfXta7m1hDPj8DoDwhtZmvsX2wNLwTxrnJHkYJhy5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BV8B3od4czXPfjm5yBUJAeUodjtaPXULXXyvr5sWcUFNGmgBVxYqaEdPwUKq8zSNUd5iaE6sobZpXsk6FhYq4ge",
  "key1": "21pV6bjxEk3BWotiyKYyYGwMHNSJL9KfQkHtPumuX2QjJEFhmhmfvNmv5mu1Hx77uBkNB2X9eewFBeF28DeUvyrT",
  "key2": "5n6Wbn31NW73A1RSjiaziZe5wMb3Y1irWZuuzbDj6ef1hrEmrcsvDp38hyJ5n3yR1eTcPjoQWb4DRRx2hKeL1Mym",
  "key3": "2zi16D5HUn4nnfqUccgnzq5KAGhRn86CTSGrs8jmuPqJbe5XCZLAF4fJcLWFBNb3QzmPhKBraXAZeZHJEGDX2iW9",
  "key4": "2ogPWMtfLmqmUAnzv8jRTH5cFCe79PQpmnknsMGARnRNJoYoPMX2bSS8hcnmNV5ywJkhupSQXRMX3XMfN6yQymjj",
  "key5": "63uzie8GVBoTusW9DzM1QZtTSUND1vLgfR1iNVyVaYZp8oKhPKHVxnh3uGR2Nh6MBV7XMCqAuoE7kEVqjmpMCzD4",
  "key6": "4tPKWgV2sTcJ5mx3mt6Zqtx6gQR4YxBJsFesfWgZBFiVJC1TUxGx6vpAJm3fr1qTa2MHnmZhMUF8H3oVtFBfgaTG",
  "key7": "2BVxad4XyMKtQQoStvY83H5FerJrF4zfXnYWFNGNM9GswhNNrprRMNQJfUreZFzaHkgoiQmPb8HMwsQrYhR5VxkG",
  "key8": "2hNSfrQaLdR9nwfmxo9gHy2Dw8R4WkyXoDFkedML575GsE6gWYzhbttWjqRH2uCxu5XW7JXbsoNCqonxzGHczvvT",
  "key9": "2G5RCoFmYKXgWKyEz8SiFUwMMeHwNtv9WDww1aUTfHZmBqPgtrg1RBMVWqyUfcU4KgTVjv6ZEMz9onKALibrBEC4",
  "key10": "3n6e5rn3ddLSgze9c97nk2SZJwSpbNNko1n6DLRPpWDEreWaVWcSGxeh4K26uiMY4WSn24hKYKa7tPkr69NscjQV",
  "key11": "GhFHjPq1EenU2ok1WAkabGhtDmhw85c8dL6hY5cRdZ15XSoQLFr8ZPuAB7cvedZ4damjoCmdjrnLG6GEpjAV9qp",
  "key12": "XFhEnG9cxC6Wp1rs9BWS3KV72a3MaNZ7Lndrbc8GqBGCsGRMN8v9ZW4UX5dDek5DSL7E9zCkfNvxR9yWEsKZZLE",
  "key13": "JsGYpHizsUBfUQoedyZPeNN3Sb1Dfjr7dcauEWoTChpqiYGTnaDVH1Cq1WdEheLMq9WVrcuBLQ7yszvXrvHdtFM",
  "key14": "53V8AiwEo9RtfEw5gwwJF4RopyrFY5ENBvoK2HKAeEf7T49wiBTXRnJZihqqmSzdQbW4aA4CsW4PrV2BXmUAkfux",
  "key15": "4RCevTFMawAzXaAZqupvbKbLiQSsbqNyYmXd5Xmgs885kBRYE9xo376cv4mCji9q9AyiUhtzxyoJRhfXF7yYZV2M",
  "key16": "3eLYeXYoHEbqDrbME5mdphRmT6yzQogxyDUYJ9xT4jqTBDJNnqQw7Gr6Rt2S6qLDvdvKt4JAUQQm1iVkpkoHFYnt",
  "key17": "PpGdDZeDLTj5b2GuLUC9cCCkAoaoifH1xo7S68t3PvTnX9Z6EW9Lvktqt9cF1i1ffN28zTzrSnerHSCXuHtDVD8",
  "key18": "Rt6BKyvQVenycXHi9t4YdTygArcaNMSCqqFMife7oZyXds85KvhYi4PznGdJZmXLnGiCdXPapv7uyAhMCugQYVH",
  "key19": "3KeZpLrx1tXgLcmzDwJQqs14gzfTvegSaej1e17WsKFQh1UbH6Jbz4tZpLo6ousG1KS8pMGHiCioU5XzTAJiUNRu",
  "key20": "253kadyh4xZB9eZ9pqCdaBnmuYrUht5HCCraFSqa2uoT6MLB6KNQ3tuu8AzRyHZrhu3m2T8iRZvJNjyFeWHuUFSx",
  "key21": "9DTyaAkiSCCgVea4VYA5nZyau7XTNGBpzikv2dmgTr454BHJMx5wmy7niwhADjtHzw85HbL8DM1Y4nM6di9q3SM",
  "key22": "kk6P3JkyQSGCrkCpks3Zsn6JnN5SEmCciAeoWRHspGn8pGKU1D1saysUJVoVLGdSEPNKJnqsAo38iTKPnbsxbq8",
  "key23": "ps3XNLDSLqA9pnTZvjLxmhjuNyD5if28spsgQScqFNKN5SsBPzJsjHELaL2YQYzySLGGvxzp98Mcm5qySKYAiz7",
  "key24": "gyR6YUWahZEXzkrnaMHL6HQhJNYoheM9grxpRfAwwTaVkqAHAfanqNR4M5uK2MyMfUhgfpQV1URDNHczra8UbJA",
  "key25": "5k1xNFDBP5riBuitWFmotZRGABbnEGzYxhaVuvjX6tcHjL9v9LM9uN9mYEdACPjEEqZLUb4KbdfGnWZz4EF8MEfu",
  "key26": "2MXzmR2Ei22bD6Yu4x6ZMBDj1WNzPqn7p7odGsZPacXwY1NV1w8D8mSdd2DzH9KwKT61NmVHVYZGpn7wdNGCNGAo",
  "key27": "2DSmGeoKiRFzhWPsxqFnA5vWCk3LyH9xiDH4ibaM2sXZjc6xL3oDoqTcyzAZuPU51tDo7Xac3ZJYxLD1Lkcjh58j",
  "key28": "3ZXResvb258DwSp9mcaUwwFbK2SnRN2BUMKGkLncSJswjxFVeX9sftAnLRCNZZHuKEUCLXqZHtf1b44brUTGndAG",
  "key29": "5xkr6ZUV8XNxrH2NYN5YctR19eN27JNioPfKdEbcnUEe59TVhZUsp2shVa7Gu9D9f7M5EuoiXbtkpkrb5d6yZaUY"
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
