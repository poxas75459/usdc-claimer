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
    "2HBuPSqE2UTREJeNKcxhpgfQ4giCXs3hjm5e82H6xWUx3crSetMqvoiYSi1ur3b5WQBGFo9J2Mcsk8U5rL4aNR7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdktqYWc3ks4r4eP9EhXoE5yZEMgqTE2qoDx6EvHdgXTVkuupcrTFywGM2pcxcYJK1z4E9PQ3kiVdVguTbcZ71A",
  "key1": "4edMAs54LYdYC4eC38oApKoZEKa6uLaE5iH5UiTCQM4S54foq8GdNpNMEHKAwmDcvFcvVZd859wEmuGArVjRdSma",
  "key2": "27F6LtvwyVonL6Lcx8ZM67r3gWTpM81f7DkDgZqyCmCs7my65AC8jtYRfwa3VibGzh16QsLXLaAiZPe4PtBeLQK4",
  "key3": "3XBXbvxa91m8RVQMrx8XaivA6ASGVm5U9myacuvTPBi5CkwLbDRMAEEJcqvQ7zy96YQpo8NDBiTrFJSkmqDPXRiz",
  "key4": "YuGGW2vi6XAbKp3hkJCAKiauDHameefM6akBh9LzkiwiRCwumEdzWAy3aX86SpeZB81xibC8zvH6v31My5VsFFk",
  "key5": "5GVFJ3CCFvCysyFJLGELpFEirUXavSHNUTVQj43HUWu5yqqfaL15qc2GHNNSKCetJVApFhvkQGoeJ9MwSVHW6Ycm",
  "key6": "5AKhbQdzk28iPN8Sg34rpyxbVbyiacnYjQbC5YVgZC1VbdNrJNcJKXwDcmftNnfbK21Su3sUALSEqS1fkrt5sgre",
  "key7": "QPi2f3CFVY5EnpBiYSfcAXi8ZC73qTcxgCfUj21kdHuzAgfoqh4sXkigP7QaQw5kfJYAqXR7r2DBbhf45ToCc63",
  "key8": "2FcdiU1VLEpfNLA7tQKLH5eFcvRY6kwdNJopiQouExsP3ZYK2UEk9ZxaqH1jpHQjsvpbhp7aMSsmotbwPY7Vstfo",
  "key9": "4C1NYxdF3LYf8gpY7EXLmCib4XPJMGGk3uhWE1U728zGMAJ4UJ6xxACScuJ9kZKfZjrupM6xsfe8DpJRgYsmJsgz",
  "key10": "KuDMn4BXkPgcCWK8SiHc5BUb28g2Q1yBnFDCzzA3wAQncfxbPDH4xjRQWRyGuyy4RbfsoWfzTmou3BtuKSQqJC9",
  "key11": "jDVPqQhjwGGTZBLwWqoLo72PjTpZTw1U8y8CAMV9SZ6M7euQ2gU4cb74BD6GQUCZAvqtFwgCDepPUmpLBregfmZ",
  "key12": "3NJCKAvVZFkoNqVeXHdNcfNXhW6pc2vtemdUhY2gMCyZuNKiyKxWUf6A4Dgube9QLmdibhNV4YC5Ay2PgYabtFRo",
  "key13": "3qKhCdM74Vr5xBhCjsQWJp55EE5hDFX1vg3JetnDhfPRAN3MLXbuNChHtVKZPNiChtgm3XHJTSyU1v6zA8jvvvN7",
  "key14": "2CrjEmRfErXXpQWfqpj8LousKcehyATaMNHk6T7n5vEHve6XgahnKRCTq16se1uHMSff9iekQ9qYpntg2n8Gudbc",
  "key15": "XGZTwqoePL6YjNPFqPTQXh9nWkK4h2kYzwufFZM6qTrruXMmsBvoMPoiTEGuiqDk2voi183pVNNdp8J6ofhTfNX",
  "key16": "QQd5F8XpfqUm44KXgauuY3PSzaN55Mb5YAqkEe6w8kZqb7vYVqWdbLuGcXtcJc5hR9YQZg1NnZK2kxw5jHJPek4",
  "key17": "4yXPVPE75q5B81zrnmQCLdzGvB5WNDX23TdBACVgmBtyfWhgjG9Ny1eKewsaBiWyFcizJ5wsQJuw5BMB1K3wtCWC",
  "key18": "53kfsa2o86p7SFp7zUup3mVePhaXdrcxTocKFTn95wNpjiymh3enYguoPJ6SuJrRhBNeP7MWSRvErxWqt2mZBgsa",
  "key19": "4T2SUGEzQNZGEe7uRYLxsSJ6HCht8r9n42GzxGj8hoiyQ5yUatnFwDoADye9S4G6mkfKLV3n5ojDxGQJNToHxc9z",
  "key20": "3f89S7hdGNhmhxWrCSVNJMV7G5nUzY1KfBCo91yJk7SyAoPPU2RkiBRuBHQyB8rogF3Ar3KKWV27bmnFy6GnhUUj",
  "key21": "2aBTSXTTgxzAuMQkeZeo3vP9n4zgNA9SYY6tDbcUzH5zvmcqcL87zp9AUBzjDLiJi1zFoetcDoWyy58CM3HfWQoS",
  "key22": "4MWqD6LLxr5TzqLj8Th5uHUVYa7VHuasT2XPw6BjJtu6rAgRFdLYpRpaC3SmJ8y9i9XF8YnNG3MfdrLU4SZWx9Zw",
  "key23": "wHMiH769ooRmrcDu5cUDeJus7MEPANesnbSGumtU7UV3Chx3vANoGaBGjZiKQAX4GKQMonzTXo7pXzUq6qbKA2L",
  "key24": "3U2iX74Feu5P4EJFmCiocYiBFKpKWehwUTk386oXsT2yiHN4B8KPUDRQ3zcSPGxbqsp13EjdbaSZCUr3oTKGJCtx",
  "key25": "51JPnpaQ74NYXnd2eZihwPB7KzJditoK9ugCQVrDV7GPJ2P4XHktCLqkUoAtcYF2KwGPqGk3tiJVzRzMPqZn9w8P",
  "key26": "2S9VsHX5VAw2Pe8MMpWZTJsy9tyx6PyvwG4VQW8dctvYzNzRRoymX187iPMUgfqzmnE9VXRRLC8Uh6gXPQMuzk1k",
  "key27": "4CH5R2Za1SRpUSJf8Wx1cxn4u1tXguYp4CktxDiRhdwDenLWd4JHrbHhw2TC8G61XGCBtGEn7fLKfosrUKv3hpc6",
  "key28": "39Znmc5EqA2V9LzGgC6sE3aoBJP23cP9rCDbcw2AFMCbjPjpmqU3X31VVbNSYvZNph5dvTwTMpjwhop2e7j2tWa1",
  "key29": "2pPz8urSCEKer6kx7HrK5CCAr12xcHEvFsE2p4FFSYowshhGcQSSriRN1T1Uh7V41zseX8Qq3ZFAuQSRPK45RSgQ",
  "key30": "429YkXqHzW5WU84kBPaQnTAVzM1L6E5jVkeE8P2XS42mkmoqeqhsMpKzuj5Mn2crZA8uu5FZ9YpnZJUxUJikoMYf",
  "key31": "2syvNpL5tUifS42BcBEUFBz6QSCH6g5ELvHypA4J5PGdEtwXmTgoPsNf3KES5CGviLCRPwxu4ivwYGAi3LGJ5s2T",
  "key32": "5tsNVBaHjwpjVgmyY6T9hUEkJeG27PHR24gGDLeQtavepPYd7PNyG5wTmKQYUGyCdVLfn49yPMwYdSzGDM7GgNVf",
  "key33": "3xTYNhdDi54oVuWCEiD28kr4erZgWvepWSATfyZKsRaZRQBELPFZb6ZfG5W58zDyD7VycTLAA4puvDosfTaHtGmW",
  "key34": "4HJQJWpA3x4F9Z3jJrzGe7NkZEYUfGeEQvxDcN55xpv7oz7WJVgd1rKo2jnCWaTAXHU4zn3oCggnhpQXk2dnNLB5",
  "key35": "3z3bJ39cgfyCedAtxWmPiqJRVpsWmemSjZfGqTHH9cDdkRR1V12Hj8aqgYSYoV9MBTpLUCtQ9Xsc9MGttzW6Vmhz",
  "key36": "4vRkJ9GaZ7rC6hTtHRyhBbKK8Ysqa9T7UG4kQztnUMU4LWg7hpHeTPaUXcXoo4BvdnpoCktuu9amHfk8GMHQDsx6",
  "key37": "5J8aaZbtV8Sram5XmT9hp733ZEr7WcDsEtzPRyHnSSNQF2PoZMsCZcKSKF5dUyc925BCFjpnDTahXwwr273qJ8Fv",
  "key38": "2pX8oa5hLjF9BR3PEpCfUAyKQ529n7wLuWBPU7UE6h6qRCbhLgUY7KTVDiRBVXubkX12A1h3Kyvw9NLe2YPdeCks",
  "key39": "32o2X8DCZ3Xo7nrQLiUgo6dM3JdAXgn4NKrFzJJnM9ijPtB3XptXjKkfekpRUWSwpepiqcDeuDDJUfRUuyaBRa5k",
  "key40": "t18Vvy1jpNLWaXSC8kNjdgS8h9WGAMTG6eQCAkVwaFSUd3A7KJvkGEktLNKgTbMw2RPgtCrmis8tfiNQQv7vYSc",
  "key41": "3WAhvNnMQ3ZDquoCTXcvecHg4hq29Epe3MK8frZkzQTC7mMnBV2eDQsneVSBWiWAcRrWWE7KfzExqChrj2nKZQU1",
  "key42": "4MNMZu1fCJvYp3CwrQhDswJEaszXgNTXFxW5UYwYB8uyScnKN1bYLmAksdriNKRVrquFNHbTL8iHsuSttmsjbtRe",
  "key43": "WbnLfCASanZfAAZSjt4AXAJcWAQ8a1UmWSKAUFcn7h6v6PWiHL231b8tbtk8P8BbshD4xa25VytQYV41N5rjYyM",
  "key44": "ek16KqdLXN4YRciuKWV98t3r74GGWxheRxpszUt42mPgdoLAGbH7RaiMUibd7jbNGyx7hFX9fymwJFm8jaVVd7H",
  "key45": "yBF8YWqRoy9Gs9T5ppgK41z12WfbCBJbnFvzeeSeMjTPDfS3GfYmVH5Ao7BfoCCHfhc4iiiZeCfwtHN1fR96A1U",
  "key46": "3XeA9kSmvLvHXQcRzYYcnkM8JsH7FX38AevfaFY8aXU1EtX3zzfEGSDPkLZ76YzJ9rvFjH7F9KofQFHQYCRhYutY"
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
