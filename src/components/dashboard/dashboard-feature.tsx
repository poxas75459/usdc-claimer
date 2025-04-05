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
    "sEvyVxad8HovvB7wgFT4ZDySeLzzq6ErNiwJikVTmpQrXdJ9tCCYDDTVjE94x77NT3wk7GH6Cb5NL4jGBKKacWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56icPtXEeuCLwU2CaZLfi57p8FSFcNVqcpyCv3AJZtEezUBv3bfyMLMy9F94KDGEQHWGngb8pTbuYm5qZPs98cMv",
  "key1": "5KrDvicDimR8Yv5TV3856Nw6tmMokYjmgkP8kfVgkpwMRPF6fmodcqdn784t5nJFG33tdgthJg8wUVDKitotsP7b",
  "key2": "3s4ARQaV46ze6XRtUN381EE8GNsTXv6UUfcgkUV6G6dQKMGJjhCRWRpP9JZTgPTrcQS9Xe3yCqK7nLP3HmdTKy5H",
  "key3": "4wKuwL4BrLhu1ymDAYfzNL8shkCC8YAKrLbcYgFxAUicqGchfLh52eGkk7L12tna4VPwpzxNFpaBjE57LPYR9ank",
  "key4": "57aomgHfy8TMjeNuSojC3D6K9geRQxCQKj3m9uhX7LEStt2xmddFY96QcJaueAfNyArLvwyUaUnogzdBri9aKdTB",
  "key5": "5HGs3VJnaAzbdLbd47vYjVxKraKNh356i2RuAe5UK4iQvhTc7mZeg2Ga6GyEhDm2rsqRZZrPDcuWcnQhzsdG8awi",
  "key6": "v2Y1u5GK2ciB6JAEq4o5FMYdGQuTcCWgdkMRVZwh86yCSNm2EayqzhnFPcBAZCksjPyspkNPyxjc8Xujrp38wtA",
  "key7": "2BVCBZ42K45uozbLKCPH9iNFCvZtRVyf1Y8wdomBKKMPnRugM5vT8yP35TrsP6aRf6t3FxcHfv6aR4ijSdwAmTs6",
  "key8": "3ts2Sb8BBwyC5zLTBicCy6PpLLgiYR4zeAgiPMqF7cApqpjkgoLJX4Po6sHco3fWkwyTP87zxsZHYUgtRm57gAFP",
  "key9": "3yVVcVpFR1eF2153F9dsJJj7G8V4oDTRbxN4Z5SzuG3wAATQ4CHPTbmEXhCm6HrX92zcGrYfBn6VwtYWR8j3Ph8w",
  "key10": "3PGwoLNGLeQz3PWu99DirpmoDfiZyn1EyXCE46L1CXXVkPNg27cVWGUWjSEwSYjcD4Eg3xuiJXfdmS33VoPfZwWp",
  "key11": "2LekuiC3haC6GbnqdmB8wPtx2aeYzhfrhRRGw8XAgnQKF3DYm7qx4QxBR9mjURHtykyw442ubLufommLqrsfKEtF",
  "key12": "4e78y5LreiDkSfZcdxhJ81eQzBqFEfxGGpLGgstuVNuw4q6MGd16svkUoe6xeicVHtZQCn4RnCdipV5hm85yAhso",
  "key13": "4fCqeZtZxBtTdCRc71nZ5gfFuKrhf99G3CjVHXuiPAdC7SkyGEgjjf16U8nPk91SXn1Gd79aCtEQoLEtQthAVcNk",
  "key14": "57AX3jPGe9Mkhbuqfo9cBVdqekr9CWdGHKFLnzUosZvu3fhkTwaWKEuGGTSDBXHJxh8qJDVZg22PCZaLuEfJdZ9g",
  "key15": "3B4hVCtot2nQpieqhD1omLvBxYSJAzAVWYdLnUt7dPtrDsib916seDVQTPBzewadsUmPc61ifg2LnxmVaHbYVyym",
  "key16": "5ibZoQaACeihgQN751qVbjqg7JFaBoRj3LBTwCfb1adz8eydLrPzyPBhvPFT9raMa7T7UF1NTkUfAn9WZSgDB5VC",
  "key17": "qd4v8XLRJLaVXMCWFWuPWHRnHCoumvfYBj3tvkXdu55DbKTcEG9VjgE4QgJS2hC9vMrwzjzeGLjmb3VC9e6HRgT",
  "key18": "4ANjgpsftvNb1mq9aY99nKjeqUKQKTGwnjbp9k6cWMD7jicYiqwaPCFTPXFgjcWDXfaE9ArWkBCXQhTibR5UbvYo",
  "key19": "29gmkM5pfK22MWSP9GvS9w39S6iUBGgFwDA8AQb648P9jesBLTJ5ryH774cdCtKboKAAvXcKrBEJFsohqeBWuqLU",
  "key20": "46R93YQUpPLfpSXvkNZH6v25SJg5mPCJZcsWt6BL5RHWqYTbp1c6iNUWjt35R589gF9aut86rJVUrtSR9MTWfvgG",
  "key21": "3QBQWaxqTLKhesdnWx4nNh2J25ZiFmQzoqpx7fw3xFcr8B5YUbFjw3uiZpC5WXsBgiiyMBkJ47x5KPhLoJrWbJEe",
  "key22": "5N2uFAxMtX4Uf8a47XV9qkseFAUPh6svR6Kv8PfFJxKvVHzCTbgqpQsC7zGShH4aSz1zAogoyKJeCfnUEiavyPCv",
  "key23": "3BrGinsrGhwbcLAQpr1zKsTKG1WvFi8dfM7fWDDy5XMNJ6aiSP4GdsoiwfmW8krh1DeHTv4N5aADgDjUF8jNufWf",
  "key24": "52eWxGUP9VD9U7AVVibdVWzXGtPnqSeEu2nK1wtBvV54D32caNhDy4kWe8kTs9FTi8rEBHk3MuEpSKYdb79Z2upm",
  "key25": "HwrmwfN1Jo4mHAFuNk8BpUep4qeNTPqsDA1PmLV88yLhZpq9MW4L5oFAqF59brn6xhisEcykgyNqErJweapZV8S",
  "key26": "4gv9gMXCjNoJKESydeGSvLLnTaE5kPPKczmRhSKAJpV5WvaSRTg6Ch56hwkAroWFCg64UWmee4MPygVFvGi1bHmo",
  "key27": "pE7Du91MmWia8qrj6LLbaCLEoWPJNueGkEi21BfqRXsvVS7uPSxpZNzxj9guHMYMRoEFF7vQjsmYF9R9MpJ8C6y",
  "key28": "3Nb1nhoSYQXBojd8ycFrmRKvoCZZFcHhMUr6S3tvyZiEDqVUTjjpfcc87JVf3MyaSdxB4vLkZYoyuSU83gJcwXuz",
  "key29": "2aQSUCVLUa8eixp13kvxYtBxX8XzQ9uSGY49fBSQoueTSQ9dYr8nJX4wxgGm1aSbD88ZCPs9GCexuwMack61BLo7",
  "key30": "5JvNWx14YfNfF1D35Fe9QMCpCFBHM4xo2e53Erz1sGDn1qZpCUFJ3tWvVuY6hFKAauKhfP71VoPraUqTYMftJS4W",
  "key31": "53ULJePTf6Az6okPpevRU21EmQCm1MoS9SVDZL4PkgL46LUKgqz48oJKHBuYnigtVafMEaQ53JmUjTHLyAXGx7Ge",
  "key32": "3qtYn6nhJXfDAy3EoggthirR3TWfrRZMGnaFpRRevMk1MdJ6fm7CNcko77NbFLFvhnU7hePvYpbgEtqANVWn7bHB",
  "key33": "4UgZUocRQiipT98E9CbMkZdXAZn4KRqz4Zi7owHJ2Z4kPy51wuH6xyUB96PAteAfkpQsAmSXhgcscTAxYxqK5M3V",
  "key34": "5yL2P8xV9T41fpaDRcDLJzqtu42tigS5xmFG7NbdTC7RTjiebsBz9pgvvUzZJnW6uYcTaFnvxMoQfDNUxZFF8fpY",
  "key35": "3YYFnx6Dp9bHoTz8q2bo25ZmhxPWBSQcFj9tTqV1amF231VddAb2PoBEfXqnRpJHbhffyt4o8hnsUe8zVbK4gnEt",
  "key36": "DNjc4imHXEPU5EjxmhHVke2zPtrUTMwWNhS9XtKDdEshNcTPtpGB4zpjWR9VpYGsr1mjDqDum2kwWh5divZHvwW",
  "key37": "5pnSwRr3gHTzhpVmQRA84Abdpqyjx2eXz8DefDoQirrcXzYbHy5WxmLXgXDZ61HxXhkZHUj9Eu5DcZJkXiaKZfix",
  "key38": "4DsDQWYvDYeURbPVrM8Anc4v5mGXs5CE26DdHi9BdLZpPD1AxAMe6uxiKkqwj5bmD72vef9m6cdm2Ut1pcEb1YRp",
  "key39": "7oMeexmcpt5ZrBggL7HsnzJ3ZiM9N5FYWZrpNvA2cPFWpjNoBRz9Jt4twUiCEL21p6dB6oT4ETJxLPyes9jeqGc",
  "key40": "4zNb4RQzFc4pKXNgZ5dujo46HC5XEr2Dd5fWPkcBEHJfmAyimgU2srbADu8vuVGAn4NE58hJXtzUSrg3Rgd48JjU",
  "key41": "3GDfGnnGAKiy881i4FFTroeEcLm4uUdZQfK1M3HVQaijTnutfxAvHgEqGpaCTMKfC2Uu2dENLM1uZbWpHCzdhnUD",
  "key42": "43k5EVnG3jg84xQbu24Ajd1PhcZcA99XLwzqykZDJjXtsD6EBz91raNQzK32RmKLh7KAoiFLL7CwE5pjWkq9Zjkv",
  "key43": "4Udt9x7QoEoFdFRFxgancq4NYC5jMkQysi26Vb87XuMvBbnia9Cr5B9FgNEfv3RXdZN5WjjV1zEcKJyPgZT49FGZ",
  "key44": "5JRz9xBhX1Bxp5hgLNNGmNxezmDjWPC9GpmFYb34PBpipK73ZvzTRsDYrPNyW1gjqyCEXwVWfYwh2EhF9nZ4xM9W"
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
