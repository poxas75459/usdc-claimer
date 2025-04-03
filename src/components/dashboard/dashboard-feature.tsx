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
    "4yRuXuMQAnh5qnFqPFaAStQHbsvgZwEoqcNMQNnLaQ8pVPnJZbDfLqCttaLpR4JVup3rTQExzdeMQ69wFw7Wm9gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nBKVC6jXZRB97qduiVCxCiyoAR3PTspERA2Kbiha64znry2CSbdbRTvmXTuLFn59XQnA5DTrcp7vRFJVrbj8Hd",
  "key1": "2NB8U2aEzA2AzchKJDzuqrdLZm6gx7nmqrxA6Lm95PQfKJS6kKbDyeoMSuABoADG9wmhpx1L5c2hXyCzVx18MVuz",
  "key2": "3LAt4izrchD7nsDbSRGjSmjhAgrvDipLv7HUkRtpTg5SrBUuYmDoSuqmNsVGCPR1H6f5vZ6K1CUJeprss4Yn8RAn",
  "key3": "w1Re4uWH7m4GGZBjPo52RbwsZBp5Yke9mmu7GYiP2BdRDS4HVWDQxpmcewm9b4wSDobGfqKQXuG2Z95hBJDs7tt",
  "key4": "2oFky4DZv8E19rtfJnUZPoGRvkYVxD3wFy8P5VcfNTuLPcYeRXaCHt2sWhCuk4bmVVB5TGMJJ1ZMnV7At2S3vS6T",
  "key5": "CVeaUey9h3enYXv5hR7ULr89borBibTsqa5nfqN6TTujV5VftKN5E2Qr5fmJczGwstqGtAcwaFDXM862tcsavL1",
  "key6": "3j57tTDfbVnRVK1D8V1RUvNL9SyZVBMkxCBcgu3ykYuSx5ir9Mkd8vQbxCqypBtS32JrsW8Aszibs4UVwqgRumUj",
  "key7": "3SEKvncY45XTQ9qu2WTQ7pTpg3Wy2kQtMJSaR64ZJsLCVNWXdcFBVnYD3X1DK2wGEUkJh8U4Z3VBxkhf1kPssin7",
  "key8": "3n5LeqHJWWGkkVStsEF6Cs1YkaL3RkqPHe9M7cxbwUhabsBeGhGnNJ6TtrVtq7G4aNqm7N6yDM68PmEfiAHTjJ1Y",
  "key9": "3poTTpAFQafqt77h3MaqV4qRoM5mvWZ55a1s34i83UzYefNWNjweeurFLwXFYVyj5sek5BHQwrFZ3BhFgLYFdDm2",
  "key10": "3PNUyMxToBFjxx9zso3Q6qXym2VSmBTVAxLWomUAPMZH5UEF4kA4NnoWNRpFLvqFDe7efCxusqATueEqfoJcNF6j",
  "key11": "3j8z9NWmWmKoEfC5yycFyySWWEbVsvoT4nW1khwfL8AUFUVU9KHNg3h3kYZWHY2EcGyxqu1stsMmDg224oFQruFM",
  "key12": "5QZDWiev5vUFMCarr3dvP4H26rnUmMwu9qnjF8MmJ32esezzJCmSXszJ8wE3tN5nPx9Nv9KmKERQtuRYowQSEZ9K",
  "key13": "3P9TU8zATpezok8XsK41qATWgtkdqAwNcGGDEFNWWhtn2t4wLZTzLSWpYQbCSxVqqoaPmA6uRYPRNMjb29b8SMAY",
  "key14": "5pcEyuhXh2v3qcicbA9vavmuGvHKgB2w9i8LQrmqf5YdVqXMPaaAa1KgeabCzjFSAmQaTX6g8vAAhUcGUHQCoXDk",
  "key15": "3kCbiw3DTiDpudG9haicd6tSoaKqmeDHAfZtmPuizW47V2SsmsoJrziPPvJNaTywMe8E77JUjMZCdXLQT1L8CpZp",
  "key16": "33rLcAD7cajQTKWi4uk4RKzg9w9QdeCJb3dSymgymoBYjng3NNWzZt6CXov5CJeA2e8yzDDasiT5rWxcTbbuQKXZ",
  "key17": "4d4ZguEiHAYKEU1YTZYN4jcj42bcSZSupMTUNnU9Xo9KzA6vxUbVic41k37mbGgD1X3uCv5CuFBZoweiF7vtP1KC",
  "key18": "XzQp9EkvkAU6G6eZZtMWscNTwErHx4CxgfnG9MNtzQHTWjdrFfvZCjZoxV3f2Njf9vtFetCv2RrBymfmHUtmebi",
  "key19": "3RuhdvsEqJuS71kJ21rADSqSamCuwTG92UwHYct2uQBPMxUY2FvsyVssc4yjjTCkx3XYHcHDPCmazynuLnXuDstJ",
  "key20": "5pxzejddgrCNttW8iD8qvHMEGeX46MaEEQJ14Zm6amFEVDj72ov3QWZEcfkMSgYBgK7tyKEH37MEYktiY2hfCa7G",
  "key21": "5XE6r1pdxKhcLuqE5uBVxeD27uX3cSvDcd7znhWdyu2Mf9Qsg2GFNiNaFPJQFmRWjQimBSCDKoGybhZgD3tmKceY",
  "key22": "3HMUsQzmRaGoyijMLUmBZ2c7RTVHbbxhPbdEPiKRjAT63nN4H42PwvqbrCkqALxaFfSy7eHs4fevcYMRs6pbASQa",
  "key23": "5JPnqw5hbZHVdqmKfYfDomfJNHUnjz6qPBdoNutqXnQs6KZh9oh4YPruCCNyLq59hm7tb7RuLVicgSKHsRumt1VA",
  "key24": "4WcNV95nkEUZBViwA6G3czqKHqoZQFN4CyhmiSozysYRWmbkFrLHK1m2LLGMnKBKKHdUihqMGLnij83wzkPdg9E9",
  "key25": "2xQYNBphA9zY72NwAVEE7FL2smbnG76xKaWqPdYSBaTE12RL1oFKyhuHpUJ1mRSGjvG6eLjquShutFc5uUFHWFMK",
  "key26": "zhaaRqUoBRmoKjjgXnoeebMSN1nVvCwWugz5Q2uxP8kEECKbhAgWPnf66iRRvVDnwMDyRjgakkEu2R7C3YEyX8L",
  "key27": "5g8VCsRVMnfW5s7k7dMrGsKCaxnBFvx7L2efA8GnqAtm9B3fnysvygakG16YdhzV1RzRUxkUGjWLibcTB9VPDf1U",
  "key28": "59Hco831phs5oZDy5qYSSk7CmE9SjWRXrYHQfDUFuSnoYMSXbn1oX813BchFTDS4nrXVTcdRadUbUz6nMJNgRv6g",
  "key29": "3UWcGd3tEfAzLxAUFhaV95XAug6EQXoNpkZfPVFkTeV9tEAeFqpfpsq7jpGiwjtzQmkRS1qLJ7qLDCrCsprb5qqF",
  "key30": "4noxmqSSseAnQSv33TC4qSTMws2Fd1wHocH1Nt6Y79aw53auNcoJqk3GBjDBhdF1rKGLjrXgFeFojnRBrvH4XZuP",
  "key31": "2Cn4Y4LZD83uJM3EVwhoSBk6oGEVth9BWTx3WnBJD5tUWb5RdvX9PiQxZiGTTMYZtPdxUBjqxEQzKWN6gpKZ9YAb",
  "key32": "3XqWgyUZUBxnVvikP5dXRyc6d4VycH6FzUBHsunRsVatsUeXB3LsvSXRvcVW8yYAXYmgFVFqkkWnn5Qc8jHPq7xs",
  "key33": "2oGe7sLZQMQCWdHRD5b7y5fMU3fvevWs2wFH1HYALw2Nt8hNWuREvwUjoQ8uyyhzgs7gJfmxsZ4aYXqMNNnvi31T",
  "key34": "3gZAatvMMiY72SSVe5rHCBrK62d99zoXucXw8ztTe8x3PWgaJXJmuHRUog5wUXEcnd8Gow6woT1FFYRxxbL7JJRD"
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
