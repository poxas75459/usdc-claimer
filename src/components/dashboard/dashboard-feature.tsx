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
    "m6NjTTWSD7RiegA3BJFXxt1gipbsCUzZGWvafeo9RBjcFh5K776TNesJKo1SbRterJKH1HaavbDtg2FBTLLoVoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73gcGBqJGSc7GxjTSpES1jDSr3m4tCD1mFFMvJ52YVK1yHD2CRQZTgKGQ1nnydKXLufQoXqENse7ELkcSecrp9K",
  "key1": "4yFVChEvJRQaR9s3sJXHvdjkKcWQ93aECAFvmyogRUg9PVTCE2eX7qpf7QRnrS3GxUtTKpCvaBGgwQR7vEuwoggd",
  "key2": "4aisJ7exZ25NZxrQ5CU1mMFqo31yarrMs68npy9Pa5pu5PhMNxQ4PZGAbdANwWGCutQn4MZ9ig1LQeqZneZu9Fuv",
  "key3": "21sxBm83cqG3pR8Risn9x6BMjYebMJcgcTeMSJkohkAmSApuWbK9TT4rLmpk1WTFede9N9SjBPP7CT8NDD8uFx97",
  "key4": "2BwkEnPW2F2g2zkSK9HD8XeSbRLfsaswhtEx6YpsgXAsXULsecXdoJUMvrpWqFQ8MAs6DFp3JpLbnPC892q4mrC2",
  "key5": "5eaCDDSzMWcJtD5GJ5KcHbDD3DNB792G7d4JS1NWma7w3TkD4ckcCxGiUkTFkjmmkjmgDRuLKUt3ohW1EGhqE7s1",
  "key6": "3rbXmzLnQrFkN9bpzRnizwJYSHrs4yx9G3NvV2m32BmANprG8DrG8uDzta98FiKSo1dxu5HkkinXUGYS9pEmJTTV",
  "key7": "2e5aD6VxKnHxYcWAKzcS1RonVDasDHbLGEXdzra6Ryk1Zo6pjP3tMjhR7kjCKcmqUzuT3QvLKPTzKYEJkssixb6f",
  "key8": "5jJ99y8BfnjDcCqwTZz9tZv2b9KBfyPbBHNHr5AVGCH3Ec8paFyuotksUV5BrrcsdeY2C6ZxCRp3K36jZtafB72M",
  "key9": "5KjLWDgbJjPuRS6gjKkBsCbsgkrFuP8TmPCj4WxLBq9j5NbXi679x9U5LkgsMWWoBZAGfwhpY66QRjYVdvzFYfcc",
  "key10": "5EvZoNPxsHBT9tnk8tWBksbtK76dzDHWsufMBihcuN5A8pwwCpz7V3HHN4w9GSnobP5WKDebkPnFgTXMKXyPBB3y",
  "key11": "5nCYpMq7QRDArYiyUtvpzXvsmGLqUaobC6pspZoUDC1uAruvAjMcFCMLpTBxZMs1GRfBrRLmK3WbPMoGnmxCLN16",
  "key12": "4WgNRkMcBSNka42cEjzKuz2XZcuMKNY8c7XF56sEC2uMCEuUcZqqQ4a1jazZt6i52bMDA77dMKCP3qbKTyWFqe8N",
  "key13": "58p3SzjuMzjdVAySaN4kKiG6LBZURbA5UQM9McZPWMBqbihU85XVbnq465KfbTniDVZC1f86D746uaisjfg837sA",
  "key14": "2FdqpPvKu7rLHYNeKqZbpxFrkF9qjJFXPA11C5KBAdfbB8cG3R7pzQnxtcEoAasKyh4345JuxEFZfvB9cRJpdTLQ",
  "key15": "x3uFjSi3vVfLVidbSzeK3of9wn7A5zjr7EZT5LkdGM5aLoLCcnGN7xQ16jcBsxJHBMZnZA5fBYcVSuZ7uX1oQhq",
  "key16": "2iXRHz7hCVcnrAc2CAhjd128oWfwSgyNJrxXSsPRXTPSH3e5zG7RUPtrDuZnenpf6tA89Zt5fTMdEbpGzPstWvs6",
  "key17": "24BtZVqu6scRDcKQAL3HoBhXbNDcDXTCWNSntccCdk7qseCyuaEgeF7sKsrx4wMvLh9yFCEGrJ98d4UEVBSXcFki",
  "key18": "4bm6AgGgAkJeHnxBCde1GbSsEL63dvaqrjH1vJuNiY52XqtS3dG4FrducozyF65NuECs5Uhmob2sqMTrirD6jjCx",
  "key19": "51LbLovHzpBFh3ijTYPy3gUQnujyZh9ce3vgbRrjh7DVcoqtniWYSDcBJXKJS2HV8qXft9h9HqgifVznwXbQedjt",
  "key20": "2H8K5mu3BuZfZXE1JwSTHTpGzkicucd1araLM8aJwedubekuvKCy63waYvFDfkBauti6MfmfA63EFBYhQNJTfq5G",
  "key21": "3fmFMRxCRx6bAfTKQSvdMbKFuLmLnorcRA1H38hSFtkSDYQ7di5r2t6w3xbPcDsaSivXY5hFih8zCNF1cGZCDbVi",
  "key22": "323VAs1q4oyG8tuyDXnnWemNpSaRsfsyHNfzscsLPgHzxQW2RdZgF3jEhU9vTHw8ocPmiGQxXTUeMyuDNtWa9mxz",
  "key23": "42Qbpidm991Wt587Tj7t8NwoNyUzaZMBVWRYJn62fmxAb3UR5eaEeuvMz5xGb9WNY3vJ2xGGDtQ21gpUvMizhJHd",
  "key24": "4ZyJ6tAcSZYLcK1nKn67z6ZQx9tj74YY19ML4bFQrjYRBhHXhNFm8uYMee8cdNq5bsPj8L9VYUCbtv6NtcSfzgDU",
  "key25": "3ANFPioQP6DBy6D1arf8bMr8Ft7Sdr6CgKZpNKtT4NqPfLcHqddqDKPFEixQfbmc7d1kM9usRkiYbbLDwvzhqxHy",
  "key26": "5mFhtJhyUWWZAvabCWTA9hUiCe3WuQpHBr7j1BsUeXWXXV9LZqJs8yUBTNwAioeogtBb89Vid3buajSHfkfahJZg",
  "key27": "5JoZpK2Ax3Fy6vNiFYm7Q9iSAbFzX3atTM9mpM8Qt8hdJEYitodXMsCDDzqn9VCgoTyYGh31DAU1vu7p2Kw7kxWu",
  "key28": "23yqH8MHmfJMU41rgz7Xa83JXSzky1LqcL1k1BikV8Q4mLBT7mX1Vx1w7YRsMnTBoUMkKEnVJZtjCQnvv4s6y9Tu",
  "key29": "479Mv3FP6jppuW8NRx13QHKgcBEKc2D6ZrjPrQ57ESj1r3q8fhZu3HMFb82EgkKGJ17VLGUFfFAZT75SFsuGH8bD",
  "key30": "2rVoBfMXHCaw5VM6ZkPk8MoNPwspvrHRYETruHykVXMstCAuzFFohbYy5Gd9FzQA4cm3QcCWRopWQ8KPNgbLNhAi",
  "key31": "4wkEuBvTBdNAsho17A3ocbEiMNV8q9hgZRRZYzYV2PPyRNeySk3FngJE49oKGKxMLoUtSDeyW1ycy675toVr8bSq",
  "key32": "3J5HGngzETW1VeARb7g6PFybNZPEKEwj1MhiVTKQ9XyNrQqKvjY4WESg16Z5SNxJRjGQvTfD6kAbb1pmxKKpNnY1",
  "key33": "2Kb8h3qjdWf6J27UMhU7S8Cs5PXqmSSSNLWpYNdLzJanimn5CakYPBk6x1FsLtjd2Fx2ZsfN1mwrFoq2gMo6HmMB",
  "key34": "vui5Km8aiGHRpeaZFGfS1nm4skbpM6MPEQzgoi2bmi7wCRAAEg7F7yjThcq6M3aZuzRLiZwK3BgcbNpTX3g2bP8",
  "key35": "6dXw59gEQDi4VQBqNCbZBNNHbUEwwHA9icxCjSdGdhhZHogu7WzQJG5pLcAhLHe1mSWgirnfjvZv9RCiABXWaVY",
  "key36": "57QGN7sb8WSMBGCuez95k6WZxm22cEPVNf4ngZ3fK8kw7wmMgHEV1WAC5znxuzwoPGjvNaUybH9ZC56xnERnSndg",
  "key37": "HCtT3d1mqtkiyohcJfLXbbE8qn7gzEhi5wEugvVqKuFhGLqKKp31Zu3ZtK8HxpqybpDFMXw5bBpmvfogRnEWKZe"
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
