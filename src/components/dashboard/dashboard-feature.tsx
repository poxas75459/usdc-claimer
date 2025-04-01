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
    "5AYkum5b82oe6DLcD3JVUhiBEGpXFkg8shSxRCcGwVSjNtKSnB4sNgHNziFkc2ujgZgiQaTPswze1TbKxAZ73kNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67irDdngELaNHqjph4iBGJiPp2jFFVBLYUUmFHTKGjYM6gNsvroVBwUyjFy4G3EctDUTzQ94n9JJjv5orSZH9Z47",
  "key1": "2ZWQodBfSSE12RsQ1xLEiP1PpMKKisNc2aNNb6JPqSTwhAt1j9oCNuVgrJTxowKNeuG17yZVwbvzmZmTh84LBFE",
  "key2": "4Ja4ENBvaUQKRU4qY5PmQdfcH5341UGm5j9p9ErWGCQGyposDeG6cN41WVY7CSMtkgbDruhZD8m2zrHHX7RP2Eu9",
  "key3": "8KJ5JzQd2E55jACLC7Kyq951gAphjWKYZV7y8eQJhBXvM1FvgfngHEdrmpLca97x6XYaD6AQD1JFFducvGzNebe",
  "key4": "5M4eaa6hK5pyopR3pEDjTbH7kTHR6SPVnt32K9P9y7zKZrbk8cT8ZseWB8p2NtuPSZctq2E7FhJXizvJFRAkGK7C",
  "key5": "5XaXV8mkkN3oixYUpWaYLskeRmcs9H8JGvoHLyr8H8GCbmfMoEYALRfETQBV9XKhaBjsUQLHRbeYE9RgyqkLUeeb",
  "key6": "3qdyuqXcSq62cnmEiNogRoxerZqvtXvE1DnqTZEgzRvg1La2a5aLjcmmz2ngrcdEmqsT13TnTGJMTihKCqCGmArQ",
  "key7": "4Bc2q3bmbZUpxmZXYzwFpTT7YsBGTtUi9dj633Q8yD8ikzuRGaiCZpAfgmgy3DFQP2fjGPmzXJgQT7X1QZCZ2uma",
  "key8": "AZtPPWzCZJ5nE2aj3x7wmxCpHChzQMU5uaXqUnq3WdNB7TpmGoCCeturegp27rsaGvCe5ozMdtZtfvyKDdkiC7T",
  "key9": "2d1A4neSHry5txpu7GQgeG3jHZjRNxqofBQ8sQF33TKetgdkTNngTFGAErAH6ocfvNusVWjt5nFdVDgv1Q4uXv8a",
  "key10": "35d11q9c8wzv92rLDMcD4NrbQE6Qx3JSP4Cv8xpyboGHb6PL98zjgQhnqKFzpk2gutbjsrDhJ2CLayG6BvqKRZax",
  "key11": "dpgZKuhSjH3BhfwwDgKAc6ZYgdaw3ekfkyUor3NxCaTcpbfUfhh5h5zWaJVyAMSryEEgb7hEG2KZNPwZ3juA7YH",
  "key12": "3erTGieWMriMCbdLFhimAVvUswacih9PPx74xBnpMqr34eH3nriJS9MWLQoN6yJ1WqgWR21XbLn9qNnrE6sJocLj",
  "key13": "2Qcze5F2pZqQhvpG6wVYZysdvDSLNWknwz7yisv7k4ZamfYEiwS5QEQQ93bU6du9g76d3EqunjksNexo71SdSX1R",
  "key14": "VTJYxR5DQpmZm73isgAMKjr6qg6JZ1e8tap5EjYZUAkGAF2MyNkyMDaWhvAhsG29DHJbDBuZmig9kyPdhi3eCSZ",
  "key15": "4tQyynbprQZ218H12dgW4pmVSBL1uzU5wVbVMEeeNZFEeKAsXPxzBRgGrKCvq7sZvU9dr7hMgpzvbBuzA3r9uHTe",
  "key16": "mZNSwsTJEDiiVz8D5KP4jCeRFsijpJER2iNgGvYzQQUo2nWhGrBRH2zm3aF9qA5P1fSaXYWWQUvdpViEHJi81Ko",
  "key17": "29ryZhoF1JjLYmZxqEo9pgyq2CCdbVXxJCizVcHfravHnahF8JQyqU3ta9j5ZNxd7WVdWKqxkwoYcmJ8ybG4Fd9r",
  "key18": "2HeBuJ33Swn2HKSbfbyN5xerg35vGUSkKBEVPGJ6sqkm73ZQxpCPBLeQsDDhHj5YxT9pY9wnt7nYAXDGef2DRikb",
  "key19": "43y8FF8GqBjm9FNxjnnQSkSHDrUouUjmCf9wVjSxdxBemJQ6MUyKUd9BGtxei4B5WYeFqGPGGDgS4YfUgMTJ8n4L",
  "key20": "XDPb1aBXRgbXMRSLHkmj3hUv1Lkr5gguFej8eGufi2Yh43Sd8QsccBp4i2tA7j8eVe1B1JBgYd3SynvYAsDPUz2",
  "key21": "AbAodEU4QXmHmhFwQF1vybpZ8KWfPiZej7G4TFCuX2nJBV7tCASvodeBZmXzGEhMdm3eUu6KXaN23xHzJs5YTrt",
  "key22": "4B3ggCdzATov5KRmcno7KEgrpCvDXBDmAPBuk3uX2Gmhpgj4QAobeA4LQdfnRBjDtiL2S5xjTBrJvFmafuzk2TES",
  "key23": "4NiBnsHrrsAQVRJao3pKD1XcL6RgYEgoKbQZyUvmE9Tbt5KJ1VeeHr2re8hhateCHQ6shKQfRj66sKtaUkyMMXDq",
  "key24": "2KBS9qq6NGYMLAVzSAMAkQ2mscVSaGhpEke4W9CwZaJfnyMbhH9VaLa4rav7guKz8PuMrK6jbYQWbAweA5LmuhiQ",
  "key25": "4Z6bTHABB3VMQPG8DYUCRifyhkPWydXHDJBah9E177LbqqBY4Xq7qRo2KXKudB33SVHhgqsZzWwdqWYAJVVYAHYJ",
  "key26": "3cpHDg5835eNrt4aT2UMMhyjPC7b2VV96tje47stGXMmHD1JtwBnAjKXuadyyx2EaYdL2jMbafNCqQxYjzMPiixz",
  "key27": "BpPcj6zer9A847z1vGYVzyqH9T99nL3S23iWbPFu6PmuJZWSjYfQNVZA8YWNyuTVWL6qjFt7vMjqw6T83ytECBC",
  "key28": "2AQduG95k9gvGP8wcPgmXpWxDjqpKZcbGWDRXdj5Khpsh2TD3k4qzVf67RMzjZuWFpRQ8x3yckjMoKcxwhxzp2jg",
  "key29": "3PQVFHKEYuq5jXR3DUgxBn8nVEgiqAPHsKhzbByL63s3GYdgZraivgv4MYZrBhQib9dtH8gmjhGGkCGmPHQQ3DKJ",
  "key30": "kzkQZ2Tx6uUWxKn34Nh12ByFfpr9Sin1xVGMeFkeHCHhbfxkmWjXD65XcE15zsUkZRd6TN7i6sK1sV7HTcJ612M",
  "key31": "35bSLXftgP8m22RytA29e3Y1UmgnM6ffRwZY7mnS7tXygdsTiQa2sSFpTh5c5nP6fK7eFkxEj13rgpT7tYi25KcG",
  "key32": "Eeux7yk8cvaUygJkodrM6XixGNRz9acyvZnAw7oQKoq9bYrU7ZCUkWF5Z9cjjVMT9fsDPDLJqoUHe1nmnXZRxZV",
  "key33": "5tcL4VzdeCUa4teZXsntNAKzvjfwowBLKmywVKbUwKTTiXJDLP6fSR2xqPu6tCJrzQFGMRvkoa3vMMkyWzf36ac2",
  "key34": "2wT4ZfaLb5fbgfwSwhvKhdZB33czJZ3Z1QSseWTKBUsHRPBTBfZ1yKs2UVxg4yyKaTebLaCyRgKrstTr3PixVQyX",
  "key35": "3MvHVqHvNJQuCxPfgfJ6cVh5WbAds4ds1jkpFFRrHtTXzBFyWnCM7G2yUYSwfEJFZrrR6VRiYnodSjKtGsvJs2Xd",
  "key36": "2yUV34bUgN8SMtdK9UcRNZSGb7aM3qud3ceLGn2wo6HhU5YHfVzxsbCRuCHB2GNgRWqF88boVRF1ehXzDADrNyx6"
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
