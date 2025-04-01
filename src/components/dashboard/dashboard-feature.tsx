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
    "5NfW9XxNXez1zC5VYYgfAwBXYtm6fZcVw1AbiJDE87CzwkUXCoPsihX3GeNd1EnACjAwPkyiBWFeBzgPifnHWwbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVr283Zj6aSrewU4bEcQ9icSZgGF7gRabTSeDjm38J4kGwbKJRJdCSwaQjWyJb8BSHf83WkkVmQfA7nLPraBfw7",
  "key1": "568uqChniqrfFjWUMBYEWx5Sra39xefkGxhsj8hsTzQ2vr5D9shk7tCkBZErMuYYbDiLdWwnbKHTpRZkPGYAdqik",
  "key2": "5xSqGBAWTTP7CD8DsCVJhTVU5qjM6bAevduigXsyAPmAuQKdSbCxUNQbXeUiMCrHHUWAQGVFEHqgrgcHXso4TGFt",
  "key3": "UrLj9GAvDwSjbvim3j2mqWvmenNbfnEZvnwhmnzwac3TakjPL32dtW9rk1aHWyaBVvkJxHkeiYmR6Cd4j3YoPwY",
  "key4": "4WSn7rDyp8vG9QBmv35r8bU5cfFscUxL5Cti3PFvftrSyWBfC4HTZNtWHvqaCnLcPcnbimCeuRcDzQBT4FpaXhyB",
  "key5": "Rpipe2p66fGoCDsMYtkr9XihVE9zkzsGKoDsj9j4w1BReeULc7RsupR8gjs2T9sbotimCukdx5Dm1so316TicNZ",
  "key6": "2sjvocvwJNQni6K3ween94KDKe6xu7r3EbSPUuyUv6XsfUikAkX63Jy6BUb2nbY4jYo5rfFmL5XdUL6jpmxSm5WC",
  "key7": "5etbwXgcHgp6MtB61ydgRGp9AphocTf2zgU23bWU5vhmMwJdNBP9X3MWMEqZxHHV6Mra3CBtViwEAyA9GxnUSTGm",
  "key8": "5WdtwNrhnUmi3wKgbAkS4GKDxTMJzMZebV5iWDrHeGPkXyvA9Vn9JGZ9fgQ2KVADZP1seY64iSwhVQNt4Kasyuc3",
  "key9": "4KcjVWtN29mCvdEPv9i5n5zhjF5AdZum15D5Ui2EQJrEvGAWj1CSW83jB3b3kf9fDCvL9UgUS6c44RzrBvZhLwMm",
  "key10": "4bJxgiu73Ao8AmS42q1xtTaoK3siTyeECNvAWxVUMoHXe7bsu6bdHZNHgAVNJbiXGEYLA3pydvmhYCXMAJHkaiPC",
  "key11": "3o2xVod1zS6xiJJvieqEYpztWNC1gvDgtoaPpuzCcDy4te8ajHzHPMQ1XRfVbjCqrh2FAZCJss4QhGPKiPRfq9Yg",
  "key12": "3kA8stjPr2KKDuCJpBz924Re7o2s75rZqPnTkNeeqVpWrTN3TjrKzfbEhdKzTGWvvfFSPcC5JQQM4SQ1GA71D5Cq",
  "key13": "45sE68h9zst8vCirK7tua8hKwMLgqLgQnoT75GMS99EbioTdaAa6CbqDxqqHt1mZRP8PGcwLzajt64TTgy6Rg268",
  "key14": "ZooMf5NoBzX8psfPoeVBPkKtacskTHfPDb35xsjtxVGN4DVuTxLjkmWBfNMtQ9FpepuaXChHHHBLoG1uPuGT3nU",
  "key15": "3ru3PQyc6tcW1phH7QFYiXQxoZvMEur8vNgVe8Wd8Upy5nXtWVgSiZXUyo5xGiQaFkWbRLfwsDQLph6c6wz9uSSy",
  "key16": "3AJngXmAQz8C1yZtMbGxdRJNFxR5YFNiGcPWPftPfeSJgsCFahLdU3ZaqjtanVk9rXiQ7bPUQ56sWtjQxJah68pB",
  "key17": "2q3xrrCYKu9UAqHvPkvmQkQyeBfWmWYZckkby65BS36GDbU61jd3QKmUjTnQPfw44LHk1p2prGfjtpJjYoXFBc4m",
  "key18": "3VQy9JfjbV53mLiK3rPPVsvCQDt8fN7D5HHWhoU16Nf4b8U3sQ156b2wMsjQyEQvZu46oXMGiWjYd38bNfR3vWvg",
  "key19": "4BzXi7GPeuNk2X2PGjvrGSX4qzPHZryoUCScBv6iK3gySsBJDEkyyM9W52irRwS5bq84hkEnJrg5dSRFjeDiiAb9",
  "key20": "4xeNoic6v6eNQJTzUiv6qhamHwvKJZv2otEyupVwUFGDGYhxiHc5w6q4ZEM4ukPZBzp8UvAJM9CHnp2gRjgYGsaG",
  "key21": "5TAYfMniv4uPv8aNqRMqNdchb7YaQE4iqpiN8jWpnNnN1Rg3TADeiC9QwguVmqRjuNZutz2Hi3mK9W8PXhhdTDZR",
  "key22": "2GaRi2bF7FAFvFxDHd3pdFMw3H6RsuenvCgWrU5RmJ4RboUhGVpkbkQqDAQAt6FYTBERu2r5n8jXV7jKdBVoEKNk",
  "key23": "5LGfbAQWmf2nWXQf6vA5faoGyhmJtkas5qijqZiwRtX1jJFa6ChpqWP8HoZV2YaQSgwbhpb8XSjcCb66yPvki2pK",
  "key24": "5dE1VeYyRuNuxq8FeXFsHKWip3SkPsqxqvShmFAuRGqk4ZEdBJn9wKG134uvwT6McrTENjVDMr9WAGm2aXTcSbuB",
  "key25": "5u9r3TnQ85hicEvsGMdS6Bda8EWm2MaF2btADj5TD6NSTALdpvwzx7zCwxTb2es7cSwZZTtmpBXdrdJN7XNmLt7r",
  "key26": "33zSrQB82PmFrAtmTmHFoxrynLrvqXYsisJ2aybX5pUJ5n6pxwHdZQaHqftUAspg4etjaAFknVV8H59A6b8mPgGq",
  "key27": "3z8QYTNAegGGx2NRikCSPynUZFcwRMVd9rQY5xJVCVwQfyaonBy52WK4nbiucp3b87zbLAAXnmkCPoPPSHUdDctA",
  "key28": "1s4HovbHfUt7byPmyTgkrdZ58uWh2hKZpSj1EmcS2TMp6i5G4hL1CneWHDKgwZhnArKGGWCVWbUXLhfyDKKX5Ft",
  "key29": "2ms18M7MXG6HyshxTpuHWXzn7owCNn4FwDBnj44Mx4MKX5DBXStvYzLSXWaB8oXvJCnsPgSckTjwFLXQZzVyEyrx",
  "key30": "21df8ehuxpzrHojpP6MSirDQXFCjCUGqx9LEFm6eWuSUxWy37HKm2f7UYiLQhiHmqxt4JcTpfnvu73JVLjDL6es6",
  "key31": "55heT9VU1HLjwkwT7JcpYki4S6nHaC5D5uShRwVrimQXFusBoUeKDyQ4xdph5P2wcsQ97n953HFRBDCTX5WfJwp5",
  "key32": "2enNEGQVQ926czquHeeu7qD5sd4CMq5oJByYm9v4ZAAnUueBgrA8GPjYJ473sMYVtZ8FcctdJhYmDxMYaTJpr2DG",
  "key33": "4p13AwtPmwxJ11Di4PbJfyn4aZPjVneQk1f3GcX6cFWiAq1BVG6VcXsHPjAvk5AHZy4PX7umu6TDhea5GmrhDiPn",
  "key34": "5CnVVz8z1EDa4Ag1UV7yUYemyRxAGh3FdLvogNqWKM3cv1L82LfP1shtg5HLqENMDGGhYgenGE8VitUTkxFJbFFp",
  "key35": "7i5VePSaiyidsYEKRaLN9a8V3khgpsCLgHGWMgQDKi8Hzh1P6j2TxcPMGaGW6NuuMZVe41mfaMRt4K5VnGW1yxj",
  "key36": "2yQs4bhkHZrHoJs124AdNDygi94cwsqRhSuftUTm9FnKuXdUQiRoftu7E16WCrjaYMTEJU8kUoQyv3BAuhM2rULd",
  "key37": "pFGq5QbDuhRvLHg1SQ4796i37YWsM3GHx6rT5DQ4WmS73NcMv3cw5pqxaAmMEXYdZmN4R5kfJ9Li4oQot5fVdF6",
  "key38": "3U4izwMaqF4VpfTo4huxxBR2ASdqsqrGeo8CZtX3V1nJf9uWmTijGG6UN9f6bKcE7CoTYB1NNjnpoGuNhGwmjsjY",
  "key39": "2SDAaixfSmfMhM9u5wz3wi5wRkBygHBZSqtyYN8x11ubJRhGaBhwtCDfY75xLCXSZcKd9EvT2hugXPf2WbmrKPMR",
  "key40": "EUoDB2VtednV5B6mBFwqa6MbUjfXKyLkgDeEoPzGLzEjgH5ibyfuEbmsq1fr3319TNotSRecWXWXkbQR5UNJZS3",
  "key41": "65oQyBGepqSbLLPEtn3ZB5W3FYwTFXJqiPZYHxF9UW8oFKNLSZtsoPMNQZMo1TqpyL9E7wgLPe5xcoViEDXQ2ZPT",
  "key42": "7EHpwi7bDhKjXjvpkcAHPt37rzwxpMeChwTnDqmH7sAQxezM1ZRefN8JMTSDm2y9FcJQYcy5d7RsDJYc1XXYAcq"
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
