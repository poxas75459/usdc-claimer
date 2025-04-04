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
    "2FiAGj6bdARh9WYyEQhR3ATGGA8TZcBZUEQd2d1VLAcYqCP7FN4XfNWjWM5XjCpjj73d8ZKVovzawZ9DYft4CHkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56zvNH6jJJaKZKkgRWWpnmMKrg2pGRyLy8hykge8wZDDRYrdcHax7Kd26QU6jrsEZnXR67AETDNJsUB2X6maJMth",
  "key1": "aD3UUp1rUGuCdg63fU48oZ9sWAMx6XZ6fER9Ko1Pbb8z5Bk4CG7mgLrDx6BvMhZaFcqaaboUr91AaGNw9e15Ep5",
  "key2": "3b6cH9TWKC6YyQeEKf56ojv94SY1Qp6RjUWXRXNbAEeTYyqvqn4Z64o1d5otntscDaD4qr3pnZ7PYHJxP6b94ZMD",
  "key3": "oeGpHD87VYZzULrXKbGN2vpSQSjeuZuMHUoccoJr9rPFdS6Q2mKyCpZYDYX7wQnSKzV51bnJxgmQperp1UPsWh2",
  "key4": "2qv9QDeGWenNS1yn4AcvCBQ6Gy15HkQBz6kym5Wsfa659mBLCy4SU2ozNpLXJ94LazUas1tYDVPUkjoNioqwyYJP",
  "key5": "3tctWnRvfhq1cKsAhJiMbaTUqjMeeHVQDNxvxXPtrp4AeTNJZs1yqdnsRfnP5bdxMq6LPbdUGmiUQAKLgQtVsQVA",
  "key6": "5izPucMEVjMQp1phEdTGboWH4FRoLN7fYoKvUkzbx7R1YTksRby3K76Z1n5MfrZjJ5PwkPvRwbwVvJXBjjo8WYuN",
  "key7": "FfY6MM4g5U3NTGK4T8CX93tAckBbqc944BdDyrd8J6JxnDtDPgGfvdQd1vnmdDVVhcg5Hqb3snDLochSmzM1Q6u",
  "key8": "z28Yfk9oBmEpTxGto2KmCLH5W35Cvne5pWST6nHxFfTSh1f5hLkaxctG8UeYV6zW9Vkzxubayw9WLYQeC6JGDcd",
  "key9": "2Z7VFKkfngnvcdH1LweYefd818R8yUpxXX8EM5uaC8REqTn8KpAqRZG6MJSVDXjiwfcZdB397Cv9RT561XqyJ8kD",
  "key10": "52i2YADBkgmxjNHkweQSVDYyVo2DGYGm3zghbfmgsZkpnS15SFTp84tL4nCeJFVfocBpmVLPgTNbBYKmvyHVnET6",
  "key11": "54vYGCqEs9zV945c2YWmebP3ebs1i9dAvZwSYqY7BP47HuzgL4iVQVfaxFs8HPSJ7ahnsPtaechHcTzw4LsMxGAP",
  "key12": "2khv2tKjRFhDfDieKVJLqmc2zJ3Dyn6yhnJTCVcVYZupeg3snvMpAup4SFHmRYAbjVY8gYHHRiTLV7d2fo4NxPZj",
  "key13": "5afVQcy4FRqbUpoY4qq6PaJoEKpf3dwnpqfBVZsVTJvi1tFBYe5FVUZDBLXhkjmpjLtBQ1fqQ5s37sjxwYPJZWvQ",
  "key14": "5WibJmj64rDXXzbPgzpwHP152rgEyHZjtniJc2a2FZD2y2AohhaMTmwrrd6jHNNsCyGUmhwo6v8x7cJWASF4cBE6",
  "key15": "2Zz4nQyUtGLU7YnVcAYKcPbMqXGWQ9WynV3EeaFELLDMNbVxpfMeNeteYHt1QYPXvCxykfGqtqpwXcJcTyTvDGhu",
  "key16": "3dqapKseiKu3F2je3CFUZfKiNDu2dFhwkaB8hTNgDQe7UrAAn8DbybTHwtM1hVavwibhgCqcS1Gpw3p8AtpmPUB8",
  "key17": "3GzqJ5Ja4B2nN3icH5bBdtFcd5zrxRsvQt8uyZz3sS84iLBbpJTT8e18FLV2w3gTkd1uMTywpkZBW5QWCSzAUkdk",
  "key18": "3Q5NyUdphUkGnEtHVuNTE1LswzC9uzSsFXMUwsyrzfSCTarQ3NB9sGE4rxam1nBuNCk7cQMM55fddTt87zLyzVm3",
  "key19": "2RB2Rs7R4YYmHf32QrVS27HLwZuDVFH9WR5MJwbei2RJDHy29Uvq4zrLsiWSwXarVrjjbiijBsbEbgcd8LVfFF9x",
  "key20": "RCrNZkujjCxHY5kJL631d6EXw2avNL56fiFmREjUXmdn8Qfo7B82PTday7VUnnpU2QtpdJdwEx4Czaqs9eDHx43",
  "key21": "3t6sin1SyRRbEeR6DUC81CSgES3mzDPFuMMKyBg4TZz47xa8x2mLUSJD2HF7L2bVYveJDgEGVKBvHd1YRYM8W2Lq",
  "key22": "1q4b8ERMRUDt8AAAb1uVzETrHL3PWMDYbUdrCF3suRyEBG79vUzTwqgbzpL9JEaSp1T6Vz9FsiKLju9CjQXjW1e",
  "key23": "5ZhBGWpQk82Am1cMA8ZiDczFHSeY3VrByxJ2A4cLZu147BL9rxizPXnMkS4KiuTrEKzem7Uc2Yaedcce9cHQbBAM",
  "key24": "CzaroHLDLYZ4mHiZH5Ph6BsGq6sEtB3zmw9sutHjv1by5wJEt23EuFBS6zxHUQWeyEC2T7bhAdJs44Xn2AupQX8",
  "key25": "2v1gLE6LQPm2EovSNh3fkDSC54N9QynY68wQfCgsnc877MJukx9DbmAL68UKgCNedMzWv1LPXsK1MuJCb8uKpXxK",
  "key26": "3YkWvL5mA8pLcMn7P6YsXRwA1skEuqUup9VrCfQyqWbtNWFA4EJXgndfeY3w6Dt7CM9eRn1g2MiACsRB2FMtSp9e",
  "key27": "orP3oD155vqbdPs5jUxuKnRjKkcKFJ72rv8U4HfaWnhnAecc8u9FAHyzBhxuBNjHMzf6n1niUFbEyFajK2uTL2g",
  "key28": "2gVme6PHGRWE8PFwhFXKaZGi7eyZatjbAZ6Gjs84eQHkp1ekMGomRsqhUudud4E9NguP4vHVTfAkfEtkhgedSHHk",
  "key29": "KUVtmaAyRwHzubPToeaq2jKETvBCSzZmZADnuoZX2yhAY5toX89yrt6MjiVwRJwCnjNy7qbU9hpMfoVsUqutm3S",
  "key30": "9r7ZcwSvQsawbfFeTA4fEuSqACF5N6CeKVvdSZkj5Yt3tDFRx1qkPHJ3caxN4z4PdJoFSsm7mVjMW6oiFdA7kdp",
  "key31": "3QLTYonZf5BuNHw8pB8WhvvxRyMgnWDo7PV7bYR78htyJXuWm463cHpy81Pdczi5QQtXR2ZTqokWNufFpcsvhqjJ",
  "key32": "36FZjZXtUpMCKSPxAgqJCKc8v8tA4cnRBGh5f1wbSGHDWm2LbsmK56aSL9XzREbJwJHLHa7UiE94Jm9JWKunYSVT",
  "key33": "3YcuSp39nWcNGgePGfBa5aRWBfr5HQBAKFutypjJvXkbE9w3VVWcJ7S2ckbgihwg3KyV3XoaFzdhjs4tBK6j1nEE",
  "key34": "2dvAJPM4koGcJDR2ooLxrmkYpR41pCA6wXXLzQVf1xwe9y5KV5z8xPVX4qFWvkiFKFgeJBgaQdXPZYimXL2Z6oW7",
  "key35": "43JYvBozcDtLbaWmk1QtSuDsEjujpVvks9LovLkBDMJdy36v72Rir13kfYRsTJX6q4rNQFdjdwwvjEgxSAqM7ZrV",
  "key36": "2EJMJGyTRQpfuQ1wSMNNYjATZ9bQPLX6Y9wHJcC1k93bsUXEEg3ETtZEr1iFYyvoEPReCigrQT4hE8s4UEPx2qPB",
  "key37": "3BVzoeDnLZzWnZdpKv8DbvwSuMGVxhAZ8TNXojd63AaYa5fS2GzxedihkFAifWtqjFPKtebQJXcErjTby8FftoDb",
  "key38": "2EqCyw2bEvMdnFMexF5qTMBxfBNQqYHKaeZSYBoYLKCWnuQofmo4Eu8NSHBUFtb1RLH7s8S23iR2F7AmKTjaeABa",
  "key39": "5nDXya2FvNUNRgJZTFCtH1TWWUJkidn5ZcZDFjSXhA8DCNsdyxLkbvoWMF9A5L7T7EnSyz9MQSWVzXynCnhWqUqV",
  "key40": "5jLfh2xHZY6rR8cy8ci7NyFe8PHmz3sKmrsY2c3Z8ocuGYbpm3f4ekUqA1ukrXHscD4C5xnAYfmfpbKmmCjV7wD9",
  "key41": "61SSmGM4hpV8HXaJxwbpf1SGQNjtCbjkEbptjr6hnXi1TDyT8mLP5Rif5vUSUQbzEtSigPYaJKenJMFzqECsuNcu",
  "key42": "4aDiu4YeSabV3za3hHLuWsdKJiFXCKQxVvYCFNkbCwvmMUFNQtCFTF4bLiJUSax9xhaNZPLQiUFtbehnJJFS46mC",
  "key43": "2BQzgRsmCfF6TzH6tqa6eYFeGUUSn6VDSQszcAgKUUcf6qEtGnKWx4k3M2qVRxBFuQGJvSw1tsa3bp4krkt9D8EC",
  "key44": "3ZWzhD3qy984sE1vGKmnyuLMFKvgCW3TBRuekbaW3jguAkfRyFc7hVR5vSRqdrSxF2KuKkppR7vhhYPsPZPoWf9p",
  "key45": "5H1hYFDnsnfA2wWkLXfQD6p3nJNSUF5LDyrAhVDtaYJoxGwdEXEVmo8tTT4BykwKVBXTZXzWrT9grU91eQKtNJeX"
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
