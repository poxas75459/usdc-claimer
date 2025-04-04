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
    "4oa6wU1ezDKtQN4D9vypm8BfdsoPePk5WRVDPeuKjUxfZvZnvwLiFWJs4C4aoQLHNXzXf1LDYbtPYCga4bPxSUD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45H1N7WcUUCXXuKbbEfTBQ6xCyysLbSRw2X6D3k5y2LPzeeHbbmDZNsxrXT6HnUJP1g2zi2Y8FrpwjjP3kJXNzWE",
  "key1": "5HJBWk3hmYHx1udaS38GUqTngrmypMUtygkKqEs3LCnEgdiFNjMWjHrAZJcjv86jFaoRdNVsH9aW7tkerFMQJau6",
  "key2": "3i9zaKs8NFWesDGJLVFTpcQGL63D3dsEe6XPiATq7HPQdWB8YMKLsj2ZfZc7HU5qmnU9GnXkchZ5hErvjYHAtGHX",
  "key3": "3o4wR54syXdATiUJRNZc8LzzQ9HYZvmhen2mT6ob5ZMPccrKWugmYf9szDoVYZSmNpMRffnk4cGqTe6xFeV3wPYA",
  "key4": "4aPDs9ovN48KRYXWELW97Loe759bMyrcx9iqewirAC2sAgEGgK2KZ25FcaJhKPbDrX49YV42fwUTpD942LwKPA2X",
  "key5": "3bTFt8sjeckN9uE6BrRSfsbLk1nAsgdCqQLHN6CyjwPp1M5jwndrD5rTKoq4G3LijeFyeqij8UpDddJCWrGgYtaU",
  "key6": "2cGPaUkmXdRcQAuGGkcUJTX6BKzUFsS5ZKwgK1zLNAivcCt2ke5mYFQinMmKEDzwfnmNGYCBGskVrxn7hTm2boyZ",
  "key7": "5VtGbemzL13W3GedSiQ6NhathKjaUZUqKXKHEojoUZ4F6yByAL8S38tKPKPngYSGoorazQXG498WN9wqtnLYCAsK",
  "key8": "4jJ8wt1kk86bhq8VM8TPMXRgxwzsrgNzqrBoAofUVJ3KnT2DBtSKDAx5gEwKYsZGJvDPqNRMNuDjBXaTrn5u4Hc5",
  "key9": "g5QnLvTHGnDD4LX6wi9ipBophZxPTLKipqKRVmABdZ7Wd69qkQ1n3itr6L64o6LFu885Nd1Fq5DGHsw63JvvExS",
  "key10": "5J6uSQKqNDk3sU815vpyRS1r5urFYkkyFsHen7APgok99d3q92u7FFf8VcBbRkeZHtJZDvcw3vADzbfbWcG3rGdd",
  "key11": "5QznqRRuGxnCgRBX7XGrnStUVaeavRALUZkSZ1V6WN5rgjrwU3K1yeswmLzJfdYwsDtDCig5yDb5tprec2ghu74U",
  "key12": "3APXTzYaqMeLFanowVcmZSyZ7S7LYRLebJcbbe4PFWJXS75x77cYiPY6F13Amb67GaTvKuKDimgx7qGbapxFtKKf",
  "key13": "4ANdgAgik3vZruLwTMFHsizUfU9QKFSrmQDBZRHVgoiwvfLbcV8chhck2W2yfMMLEpk6CHSbX3WHPbjwahpYmCjy",
  "key14": "3oukax31X8rVjMRtqx68k1cVP67C4a8G5pTxbRAynB2mrNxjHc8RNcVcRMWp8EjBLvB3zV21XS7B1DRkJpDxACv2",
  "key15": "5mzRN1Vy6VyxWtfEQwqci8uLNsocw9TPAertek9DMR4ds9pNvqfukaHt2qVGMvuXwPZRqWLsdvpM9EtLj2Qzb3S9",
  "key16": "jinoXr7gmy72yUArDTYhnv4TYstgVYrzaqdyFNK7DNhupskVizcyfbZQpKwX8DqKfDtb7qLZggvocYKKs55GkkH",
  "key17": "4N5yyEHjFdDEpUPApVHEm7yZnyinQB2ig5SMkgoJcaEB9fGYQvL1rvsXoLd4pQ8EtU1jx84bJ1fBHFDBe7K7TrMo",
  "key18": "4TXUfCTVGgZFtbUxRi3w6NxFhtPAjU3b6yRgNmNuY7YGLSpkeDdiesni51er9VFiV9UfAHZyEUuCuKnazy2ibzMM",
  "key19": "5swYHxcvEKrcwCaVKRfN8P2aja7bzXnC4u4sxJQ3HcyqwPrE4YTDQyVhXG1npCVDpPLJziHQmbYURS848wYKtiET",
  "key20": "4Nzj6uW7mhXhJ52vaoxU41mV6rCUeSDmdC8kR1ZNoxorC2H1kqWpcLjC3Qa5h5co6JivveLAo6mtjHZfUPHLS7zR",
  "key21": "58M2y5hmEjCkB5LsJgVVRZcRXahMhQLwXZGgnfxWfb1vLXDrtaYSAbhqzWwRWJ3dwKoSmNfbUjLSZhnWTVFiJvdF",
  "key22": "474ovmd7m9gGKPQYLHcC1FRDZqNdDXATjKFG47brw9ba7mzieYbSveasPxAHW9W9JeCKN9k4Yp4WbM7BAMqXXJwb",
  "key23": "3V5MhZCNj3bAWYBA51aKVHhZ8aYk1kSx8twtQj4Cyvbq45MqoajDbSb4a6x4SPw8mYX6JBykFJvbmStX6cdHJj1C",
  "key24": "44c5PmDUwR3R4iBzuhQoLJaP8gWJjeRzdmhHkV7ZcJV6UWdTsGzpYrZG426pWn6UJq8a33Pob8zCWsNfUDdKFVX1",
  "key25": "4xJwZSgHDC2h2gJJYbthuxnHXeWcbm7oHsJvbXsZVBNLR4L3FraJrVb6DNqDecSZaVbWaznSLLKLDCnuUpwNVovF",
  "key26": "4vsbnCkf2W6X3uWVFGKnU9jeVMbXybsbFCE2tBiCbwmyxtbLwBdkQHgndcnmLGHbnVqpoLsAP45iCM2MUELkiVsE",
  "key27": "5MSQdmXdq76E9v9uZ3pg7vPfrDDe2i2hquahxU5YFxCrPGHREpn53pv3P7HZEmZfeHFB8vdeRx5wS41BqP11KB9i",
  "key28": "5Aarpn49NJqTDA6SDeteGAVbvyNecatcqEYegzXGd7RrBj4WK3436CjTV8FSBxQ7ZrV4XFP2nuC6rzkD2oUgqw65",
  "key29": "51KNQPPVH2EqFCxQcswBFxmroNWXkxunxg7QQrnUmV1bReGR3GLyHZtPLo5ZNyKNio79kgXmr7BmG6rKSn6ztsAL",
  "key30": "FMknYKmYif8zicKpdz1imKKRZYXPDb2b3tYe7FW4g3aPecksB8efgFbEMduGN4VEzpSWD86hXeVgLZXSLYiNZe4",
  "key31": "3gBQiKtwKrftVqhiZVkWzmAzsPj8HeLGTntJ4WgF69LyzxCP8TjpY2GBTVQwZ2CmA12vJ2vByjooLxAwyf9hjfJg",
  "key32": "uH3rrHYx9TiDzRu5jRZjhtR3ZDCo16bZEw7ksPFRWRYP6hVUYh9J7fuj5mXtVXH6xEDdUq89XK1T83USbVFinKd",
  "key33": "2KgRazraWAsBrujwFcMnm1JrSJ7qjRffSMC7UeSwy5AcpnGmZ3tT99Eeo3CbEBB75JkgRJfVHyXW29aKshgtyind"
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
