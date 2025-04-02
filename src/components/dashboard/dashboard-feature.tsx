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
    "YbH83FBDkHeKkoA34CjFrFrjjQ4gafJBauJhPHPT3ZrVyQkoxfBaaCwymRQxX5eYuzvLxeM6rM62znZWSqygM9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44e937PSjjeYVp2gyoNCghgL5gcdKZqyLCtyuPwfTcGqr16rzeERHriTSx9R1Ge6UfLDM4aEa1ueucEFPT5rFVYJ",
  "key1": "4babSNZq3cjeuykxcgGpzhL7qrCWaKyRmUPTz7AbCR1szzJBHb8pqerGboPeierS7QZLkq7MgfBpQTV3nHPzPgH6",
  "key2": "2xQyLLMYtT7YNuubeeT5EDssKc3CwT2vfVL7NZbTgYDnQw7DcBi32M4uVEoZKv4Gj8m1h3KB82zBd9n16jKuRNaE",
  "key3": "3Mf1medv8hByiZJizdKmRRmAFpbUZBsc9FvaBbhs6SrEmjKcGKvfZCkez8jD1hZAVp1GWpaD4EJnHWTzMYc7aoWp",
  "key4": "4H1CXRGKg2omCcFmLY6pbRNss7iGPzHNcsszSAkQB1yVq6KsfN5AU3PLENkHsvLoDqevtKUYqMRPAngDXiD5NqwK",
  "key5": "5JDZjm5QKtAaZ6kC3ji6c9WRKnfuNNsjpaZKJvi2P2Fcn8TSeYNGtBbLWYjXuBsbowtmwPhFnXgphi2N5JGa2C9F",
  "key6": "3RMDDBwkaKS9JgC33Sn4Sq6f4jnntzqiTLTyZRosXUkKeBhNENZdYaEZ9Su6GXh1Wf5oXJkXFU71Qpx5X2nEHeV5",
  "key7": "5uu3HNwCyT8LfeQaMoLpJfcVp26PSfNVUsrAZyqrojRvcN9UQCfFW9SSYk1u9RBTwqwD1g2o5LoXvEcPFxEGUrjT",
  "key8": "3iLEvfnx4FhX3qCP7kxohLv7trm4LjMvbN8hCNasgSj9t3q1vi4KtwrseiGhCcrpCdXocuJELbbjF8TvKjiKgWjG",
  "key9": "3m4ABHcPM1w9g3Jwjnji2oE7ujEtLq58bbnA83bQjtAEF2Jb5nn9nDfZ26QXco2pni1xFPfD2nNvm2e2jWxfsApM",
  "key10": "5hbFCpvxUBiM8CsvAaPmUGdtSwmWKActLvtT49RJhXvBaJMANR47QaDDz3xobjV5ZWtPW5zVq5U7UfghbrxKuD9Q",
  "key11": "4WpEZcCgwohSLut4QcLDYFbUDeLJDvB4UAHm9NWw4JNjMhwV6Z4UbhkrGox9vVfhaHiTLE3dTFXSYkqTiwmMFH9U",
  "key12": "5EhpMKNmsfLgCEuWZWnQ7NipmVRWdKzLRdvZhJPgFY6vEgDwKsm3kfdbcVajtLfreGgUHKZKFo3AwDtEiFuHQLWC",
  "key13": "5uUBFqRB1HCcYCK1bqKJ7Bd9qQuB5Caf7XDKoLDWBpxFGorMwHrnJe58EVJK4XaEZXGANhRp3unQDhspK8nUwngF",
  "key14": "3xt4KzHw33XqXScqEBZxuVZXYbXMjj2NgeeojzrrhER6je8gFP6wFgUYsa1U8kbwinwNEzCR2uuXqjuho9HKNdpV",
  "key15": "58dfbLrnqU8Qg5hAM1V8fr6zjq8EZwGAR43UKn28NwyophL2x5bRfjwZ6NSohSASohZviPuEn6jskmB67PxH8t8P",
  "key16": "5ZG1vLRCQUtG3NvVjbBLipDKuQPjovfsaEfjcaNneTF3cqW5KFfTjoeEGLDAYPCnxDEmzBDCYCeJtPoW4fJpvR4Z",
  "key17": "VVT9gJ9uKJGGC3fP3fQwMK4kN8SnqTqstdj3Lg4QJ3XMHYnUrpatCq4NLrLKTCH39N5UpKY7voJDDNv6kJHD2GW",
  "key18": "2K8uuVffn9Zz5778tWyAE5k4AjER8x5rUesmCvAQoKM5okMGMzj9xabyKHqC5nrvkpQxJL4MjCwuQ5ZnB9CAn4ze",
  "key19": "2FG5rQm3zBtDGsFEkjEXWDC5CDuLnHB9NtYPvDxs88LqusutXzWb6HrF3tDqdNS4FqWD8psAagjsQEWmEL2gB4Em",
  "key20": "2GAV8h9ZsYoRi1nBWX2bX9CJLmqY4fJ8hFTxCZuz6X4qQW1M1TJGgkkLH43HFgCyDqJq1Wa5Siteb8nMG8jbhVoK",
  "key21": "39ZVNeMVCH5xCMcyepwtknvXqLYKZy2sVcqq8fAoxxtfoLkqrtCVsSqRtEUqZqV2XXSp9MswghkibBtZcfFsbcLt",
  "key22": "34HFe9sSkdubBj8XRNB2B6tGoQ1xgeVtWhGmd9x52JR7GHWaP8Jx2kg8fMvGmhYwAHeZ5Fcbr83sbhxDSmyPofLc",
  "key23": "32EAzvL3JasdyypAMMGSHzQTY2Nr3aXm7dcUAhMRSnZu6QqUE4xxyFRghS3Zs9UPztuFUAS1q61tshicGXmG2nLd",
  "key24": "33F5j9e885GDG4a3RzJPUEBLXVpsVwwjhGfwdjm18VpyvH9CapbNeHmTz4pZfB3F2NazhNmQtpjtuVJyFFmXQaU8",
  "key25": "7y1L2x3VrD5VDm4eiPqAAf8WgadhYSWXusaHuqEbSHkCwzVeKQJruLGDiQpwSUmVoCVC6uERzEX6y3LwY9GQtQg",
  "key26": "4rTZJSz7nrpNcizT9cRKU3mst9V715QGQMRcJivYNAJC7c7zp52Pk9wM2dhdrffnD2zya5qiGuYAhCnNH24ocXN6",
  "key27": "2V9dodWaZFM9hd2huLyx8jEfrFep4zs2V4How4RT3QEmWe7k7Vu8H826mWGLwJGNy3fhcJZtKgULUnhWcQiHR4XA",
  "key28": "4UyrLmTVBqHYhshK22jw3fw1RXfZH3iMCxC18vXyUpGnhQ6k5qKJa4KGpJRz7xS92BTHGwWmYfECKSPQAkkVvcek",
  "key29": "751nnMa36Df1tgtmgyAV57Vxx4dFWZDWyCFLFFXnipqmqSzeoNCkL226UFUBPiCpzRWDFh5jw2mynZJiANCy5An",
  "key30": "EC7ABc9zRtqBPi116LroDWbKHkuxwu5Mpo7ZDApmUvsv8fBjnb96YPTqrzS4Nb3mxyWomHNZHfVnQVBjefzpYMF",
  "key31": "3rRtcwh4cuaBQBfMfzmoUze4uvKLhghZ8AMkZpxFaDwNai6BUseiGbJmFfqVoRyU9bzcN6AWkvJrfvsmsnGmPqB8",
  "key32": "34h2WNm6Xo2t5RqZAVjGB8HEwvQt3g2RpsEbu86Uy9KeHdGguhaq4s32JZCDrwzCqCCkVMT7KmnHFb7knHhby7LU",
  "key33": "mHhhSZQpaDFM4ScDZ8jvri9D5HssVBGGneymxjmLfSeyb5BtJCHZQxXjeiUakN5NjruqNzWGZR3gqaVVUMxTeDQ",
  "key34": "5JiaFyUM4uoLKXSsPEaw68uoSjGtZRLKS4YeG1dGF1UK2F4cKiicMrpW62xHF7RqQxMqPhjeHhKZaDULCEtv3HG8",
  "key35": "3526QbHjpUu27cHcK1d9SxFKUFb6gX68JjTXna8CSYgZLdXxDFR3gwVrLZDZ6Z6zXDgxNiU7BujWQFZncnTdafv5",
  "key36": "3Lgw9UWtsezgvsSQbLiBNpnwr1FczKoFCf46MUMxGximo9qNFVixtnx74LJ7NToZjGdvpY6RkJKF5DUkRV1YpLQJ"
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
