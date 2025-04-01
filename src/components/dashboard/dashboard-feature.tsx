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
    "2EPfjyieYV2BEgRR4XiLro62mqPaD9S8xD4hbYj9B7HBM35x23nvDExaU28XwyMbnKwAD8ZobMQzgLEZGnhAFbQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4tnfnjJDRtiQo2CanWZJBwyCkNKry26sjQ8qGYpVJNCXwyAvbZss5LW4xtpFfCianJamokMfuoQBFdpcjxPeCc",
  "key1": "5N19fXXRj1NgFuwG3nPB2s4FJ5JNpj8PauA643qREjb8VSYPAJuUPyDe1DurbN7YxctFp6J4kpAJw1nntRLfKzQY",
  "key2": "53kKN7EzqvohLYE6TCLCdWrmzJgUZ6L9CLE5q4gRCNkMQFRL14GHrgLzHHJn3SDY7QwBWKZWdqdJTAJPmcZN7Mhh",
  "key3": "5CFAQviAL7eeNCCt4jG1zfPYr3odCYhpVF5J59jP7xCqLfSs2u7Nui2E7MxxBMiUKNAUadAeeU4KHvxb2kfCWVGo",
  "key4": "2ZWdCQ8gSKGocPKhAjsjpE6owWQ8FY96LcimSk9MpPNetBNtcmDLWvMSbAnPoyJS4GsYArkUXZgu7sjbwyEWnPcm",
  "key5": "22ay266XQRhpadD2ucm2Lz5FGsG6URCnAmbkX43gTii7XDQXKKRR2KAMXse5qwEzWbZemN6DiAWBWRj3JYJfhVpn",
  "key6": "rCTjwjJRMftbKewxbdbex7cbBG1y7eK6ENHDYty3Fg8iYWu3mKvcwTucYk3TZfGmoWnkmLcfuDGcHiqN8cKobb6",
  "key7": "4Z4YgWcuPFPh43ePSfgaYN8iEaW4Jf4PnqxXG1ZrK5bLkiX9acTvUMkq2uNaFYPbGmyfTfxrVxeu6nuh75KYEzMV",
  "key8": "2Qe4b3gtWdq4rovwzU8jAQg1M81AbbDw4xq8HioYhxQmzf8a59vCzrbwiJoiDQPSQR2YhXT5Hz3gkf5ePCvd29k4",
  "key9": "PxfFEGfE9PbFMkwaqFt2ja6Y5ghAuP29uZVTcp8EUfEU9GpdhCqD1S8TnFmS4kaof4EX2yxssLvecafboRxELrZ",
  "key10": "2FTyGUQpmGJZCiLFgQyV8ge3EFCJs9EmfiEiYCRYpg6YGFECHrnx4YdTqR6kzUf6QCVxztR91t5MH2dxeGcyeBNZ",
  "key11": "42MULoVQzVocm6eEcAEgpiU29T121mDczouhV42qUAdKfyZKQaijpRYY93Z5tMJxugcbvPbtBYjBMfYhuqdQBWrg",
  "key12": "7Z5aGSmahyEjtujmYq9npm9fnUmvtUa3BW13h5Ti89ZWEzAwwXndQGHbNbpWhe8ZefCCJpYZ8ea76nBWFuitZq2",
  "key13": "gZJpEKLJ4wqZH6LUKLgKwXtidTVeKuZqUdAaVDEKdEibpDVZmh2HaKzwYzerc9dx9nqF6jp7PuXRjujXh6nrj8K",
  "key14": "28SkNt1t3CGw8WocsYbrARn9rUZHHi4Y5RuHs7sS8VLpvMvScu52mDvZaaFqpcY5tTnnwN22qfs8cC1Kt3L6dUkd",
  "key15": "4DdzcqTyp7bcjpLD9nEZgQmw6gcwygJkcwQHPoahXTWe9WryM4jbDfqhUcUFhftykRJXfzTMFWSQPTxzakLoLxng",
  "key16": "2FrvvUtwmp7KHe5tBt3ck6k4MFS8MiAYyHjrz3zQggxpYC79B6HFCd6mV8yBoeqgjUJ5ePES6hhheDDZhjLs7TvH",
  "key17": "xkKWMnqvXZvvvcY8haswn9hJFLfPMzqhDPwA4HWG4poU4SoM7bqVfjL2HcEMckRJJf3UvfGjP4iKpPfy3FicAFF",
  "key18": "FCoMcAnAiujVzUfwAp1CBJFyhF1tK9JCiZT7dEqqsTyAZwPdnKUMAKQaukV1ytiHPxHR65hju8nyMJ7KvSDr2a9",
  "key19": "39dYNkPjySp7tH8kedCEKo75txQbUJ8ACmhdLXEeT28P26BgC2xvUjmkPoymrnvnkGqninSRRAFm5o4cekfggytT",
  "key20": "4frnvBsHuM4TUDmK9duH6fwhmWNN3wRU1cUJ7BUiBL9ECYVqmZxjQBkKMRFc6oRaKZYUvAuykuw8pusMaVvKvZXM",
  "key21": "3GLFXimFYibtE9iSnCQSaSioNW7Hwxt7gqLWDDKgTDaqFHhEkQkGFMVdND34JRBJwDQWPmpue8hVQMnSnXhM1MZA",
  "key22": "2Twp1R8K6uZ4AxPJa8gDPTa3Z4WvyC7AVa1Uc1T3Y6kMuRtup8gaP7Uk96MvA52uKLjHL8yVhxuoLBcynH6HcTk",
  "key23": "LekC47HWP9jVLVDGNJLTWR5ByM7XU7539s8Rd6FmxsFEvEr4ebstTC2bZ89PAMPeztA1Pjq8SGMzzJLAsQdBpdf",
  "key24": "4PhGEEcewY4x3mpMuF53eRYcwoJYGFwuu4nf5kKyLfaXPWa1SS3mbz7GR6WntZGWa2ZQTbwjgvsF28w3FUKZxEy7",
  "key25": "bqWAFevLpnPoPNMyFsFgQGMDT3jhDcMP2dyQkotDGgt6GMfC54YcCiV1R3sS9LZn6wgYJSnJoZr12VuJRFF4eYq",
  "key26": "2f49MkAGvPxMXttrWe7XRL3utNHTesB6D4QRD7eKpGdZWSekryzjEH2BP9sfNMmZLRrpWWTCu6wNvKfXevRYUMCF",
  "key27": "2mTC8pffBQy3LhnfAiteUntUmaryg6nbmWwR6SDT38no7JT6Xmcex7cBCE2pPtqkVHgpWYayr2KCUheE7fDco2S3",
  "key28": "4zeyGn5xpWs8v4Ws6SBm8KzhF8PyY8GGN4EAYU9DQY1Vk9RmS9i7cSoPg8qXes5M2w2jk7JLZWcsGuDTBW3Fo5wZ",
  "key29": "c7dUfpn8G5jheTwGMyjM3SsHcc3VbNEjhyXUfEJ7NH9CboVuPNwnQH7L3sgQLjo77uEK3xRUrQWAzrxodyS78Bp",
  "key30": "3222akwexozPRajzzhBVkgbJH7iendG7GnZ6zV3suBKdBT6eVWXVTm2rbqKRdaudqxu8zLrFwtfmGq9sGPeeUqLP",
  "key31": "JLyTg5F9t6QqudQYhzAoyqLytYr99MBwG47VyJkxJ6bSCsyzhnZuhC5WjyaPnJUppg8oVZEckT5xoVEzFs1k1hF",
  "key32": "aosCiJcJjyDZtfLMyihGk7Tf2iL2tKaKFjyUkHQv7HoKR6UdefVqXzhpSfWCcfxtPCsbatUQyA5N181iWeWRUpd",
  "key33": "35nihEE2JBLwS2gR63rGM5HJnoHr2HGKSQCDVu2QFyQbQZaKwu1uCJNFKDQgqj41ctrv3hfMJUNm4rAA4doP3Q5U",
  "key34": "3rvXm76fjUSGemc8CQeY4TuouJNNgG16dgweJ3EXuxFQ5emGieYfJ8bZahUqkY3sULuSw3rqUD6WsPWVr1tRz8Mw",
  "key35": "5cikyhcAZd5AFUDW5LH35iuTrAc5bz4UbT7ryX3XXvfAJrUtcwLC28vj7jmBKuxMQCfgKxdqxEG295BeLwy9Lj8w"
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
