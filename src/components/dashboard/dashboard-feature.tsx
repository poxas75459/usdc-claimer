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
    "4L5HYmo8thP3KFeeb1RUrREHFCGP8FButrjicHchRSw6rHD9ZZwnFWNuphhssvGeJKR8o3ktbJZPqFzdUQFoFxiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykXzYhHQcXDMNcfUTangNss2mzUsHT3knhmVp1RbTbUwGG2eXk3mxtRM2vcEZqFkyCTYHcByE8iBMVUtmdn1a5N",
  "key1": "121qyP2qdeRFe5d4L3qHL29SEBCwoEojeExDk3or3roViopEyNXkzr38ZzEUogTwsA4QLziGPrpdfeWLFS2Bscf1",
  "key2": "4eHgwjzdporSL7yergTRMirS1duLda8p27amjbtXDT6LMqiKkhBBysY95QQYyt429Ldr937SXzwASq2hBMiN3kZV",
  "key3": "CfLMzxjx1fdKkCT3bQkacZgFzQj8n74Jj6Q2LmHKaBvUdvsqLFNJGqdg2DCsW8FEECme7sEUCsve5QxEcRWsdeV",
  "key4": "5Am5j3wgReeC1JbPx1k9TEHZajztQ7ZsXeeevN8sBkcwSivJUMnm13MV8hpjBNcbsnWbBntCT2yqdUn8kBgLBoD2",
  "key5": "TJwPTpWm6cPmF16AesgzHgNQpYK2sfR1zNRjPSiJMRBvXuinBBzhChW4QMwKRb6fyFkgXBN97Mvg2hakM6nor4c",
  "key6": "4GhuVi2euN37Af4RJhGdQztm5bhoDXs5P8JJ2orP5tz6MMUk8W97ZyPJyyh7MJuKs41uFPxLmh6W1C6uTN7xbCN9",
  "key7": "3Mw2tg4o6he3otEXxrEFCrmTAeW1Z5wzEdUTqWb1reBgwbL6UCzSVqLdndtK8JjZiXpx6hcXrzKDNRp8zywXnPvp",
  "key8": "3XbCQdWRyDPmj5G4ruLWVspYH8ueTtbEswzYeCL3FHgo52L8R1CwHcrxEh2MYaHDHVz2g2CatyWkq9TaWD6AMVqW",
  "key9": "4xeLU2r8CrP2rfXK2mVwxBSYsoBWVGegf4mAEhvMeKNGQz4kCVwDPUEtcVp5vYfwFYRsaY8Bx8a3zT93QMzcR8s4",
  "key10": "Mcg4kxw88RtgPKm4vZ7yvnr2oq4LbgmQn7NcSx92Rm2t3QsmpDUpKrGn7McUhEAasykoPoKaF5hTTmWKWZqhpni",
  "key11": "2rkwfBNwBqHE2G8VunFHVSmuASmaABEgaBgiGDqHseuJ7nhRhvhx9hJfxqYgZbB51bzFyDGwmJ7c7xctUzc5EQE",
  "key12": "58ynKnXJ7VWyQKBG6S1iwFcr61CVLtH9hcKKK4dju8HxQN91UP2N15kAcvdPpxaLhnYpe9RJwmP6phFux2fYyyWC",
  "key13": "3xsJKwWFniXM6JvLz6ojkQ76MqkDoTwzZPBNRwQfQAeA1tSFg3FC489wrPdgUVVKdemoeygBWa4e4xgEGREw9rxf",
  "key14": "WBZqknjvSbebpjc1L7ZKiNSoWXHbjeCGHPj186uuKWRBx7cuX61yjtxGq82bqr4HwdzEP9YojV4AC3kLHGWpL8K",
  "key15": "y7B2PxrrRBqTJyqH6rZAyJy4hYEQqxQVW1uiPCmkMRSmbfn3tT7fmaxjwnc9oAjQWvSFgiSejJZbFLcj8D6iCyM",
  "key16": "BkaAwpuVSz93uA6SWSweE4CSjPuU2ACe22wz1boCZVkkbpdTusb4DotXQ4UfNrP6p5ETHXdXrgpgrBKaDjZi8uo",
  "key17": "3UYffM46tZuYrgVKktGSQ6qNcLRtC4myrMBYxteELncbrGiAKFpshDgUg5jXKUcEjkpkFdTjeBDDc3BAm2AfZwxq",
  "key18": "5dgcm66JV9jt9uzKDLUdoxhLR22DFKmb7NnjyM2BYpFN9mRWx4CtUGALG2WLdLtcFmZ7j36CP4HnQtEuogAcQ9Tx",
  "key19": "516Aub1hAHUKEQ5sqYgt5j6Sj4zTpzcz2avjG4MVY8LxRcYBB7bEsCx7mVNpUpELnZVzF42KE6r5JKv4sAUZPFSG",
  "key20": "4HJVinafkjXREx959u66A8SBe35nDfG38PKU9iiHReRdX9xUhJ1Cj7wfoZJzcyNnogMUpBnadZAwMkQSVD2hJvg6",
  "key21": "44VwgTBumy9ZutwEot93fvNS28cMoXmuo1ymk4WAeuQVAy8jH1ixjU6FJ8YF9PBuCfJPxXSjfkK9d9PCRZFnjqor",
  "key22": "6FTV14y3L5eLFByq3MHGoEw1iJushinwbzktjgYQm6jpvyv9utZ3gokKV5UALGCAVw2crGEqxXN4MYasA8iejKo",
  "key23": "5LDDRyaWE8PezvyYhz1bpW9U6KF8LYd1xDBEeWjrbtG9atLfkQC2aXN45m1ejn5QAGtfiGytjWQLREZR6iVFiJpG",
  "key24": "c8Yxf4R8DVeWPwBnyiLhk9hTWN1UW2P4aESL3wEfk7RezP8QHcLVf7eBvTN6RpaeQUvL9ko9LQFGdkctuqm6KXY",
  "key25": "dYWBTcypERyQdacWJNfLGBndGiEuGzmJmHeEP1D1macCsGMjePwmoenobQfm6CfT9yMBVgYtaTEbxYHwcMHS9XW",
  "key26": "3Bd2V6LLBxUTrR3UTEUCzrv5nDAtD67hBCsDaM6miNTq6M8dye4pwEcniz1nmfCx2qjwA94jQteysQXw3wK31uJu",
  "key27": "58wxcFxwwtvL6wJCCD4jjTwUfixCaHb5GPh7TszBPM6n37tv3mgHmdvSKr4aWEqbEXyvmPZ6xu3KGR6zQ6wWNXRt",
  "key28": "4GkGKFaityYfx3s2Nfa2fevRresejV8uCcnV7DaH4RQQpQavki9PCnqtoUM1GRvsmronNisuKKhemYGmnKJ3nsw5",
  "key29": "2BYtmtTwcime7G5QqVyEL9hBGcbUSVJDJnJ6p25Gzi3uXeiZ4ohvbyJjp5szW9uSVBz8XDDNKXC5BzxtYfxDRoRj",
  "key30": "Dh3QapYgNG1YW3QXa69PVU6zmJp4YWY712T7XUXZe3euPEH4HE4Y66VU5AGxcQYckaL8NwR22jFvavVMEy62nPo",
  "key31": "4GmZhDL7AvqhXnNk71bnMULGz8huqzavZ6o27fnQ8KgemM8SVoNpCRdfqD8UqArkshyFHh1NHtBVySPMAYDJhUs3",
  "key32": "2GyHLKMeFuVGpyEuwGbC18fU59iRGVsmbBAZExYk25Zjpuy4bqyXRpB9KLvsKdb6wJsSHcqSv3sc4gTzpDnwvAN2",
  "key33": "2AKZNv6eJ9rZKSjrHz9tWgoSvDuyyakxQXzGanJGY4RdoZ1JVZmc2yrSoxEdT8cGzAapZa944J9hvMbkoLGpGZB4",
  "key34": "3eK5f35Hs3NuRx7sbQV6oarY2uMS7ftFk7DyqoAUnQPMCLUn5XDPRckQ2qN1HTumPTSrt7bmpdU5picc8xXgtLrX",
  "key35": "4D3pa4y9EicmVd8n7YNGrR5MXDH8TMX7yXGNYS5Kqe1zF7FSnjnmB2hG7mufQtphq5xmG2crLVtpPKLPUsJ4tndN",
  "key36": "JwSqk6rDShXWdWkC7h5dxaQ525fYHhjXods7ddJ1fvSeDrKHNkrz7qoXbDwiXSDsYia22sR4fG8pbkmnz4mhScf",
  "key37": "4SHBdeSwyzqHndZgaGbomkzCbvrtS1BV7fhYEj5pNyLZ8q8MPEMXSZow9HMXKv9j9xCsnVFjp2jatsHUiV8JK8LZ",
  "key38": "4krKe3cWeCDUx5oqgfNHFNrJEcqAkipXDrzw8dJX3zubgvrBpacdTYh4mYQkqpWpCztXcLhNcBUx7tGoCNhKunGL",
  "key39": "42w4MQZ8rJfCG9tnxiSpLPAYNowHRRr9ybDqHsZ1LYAAwTjarjhz6vTGhEJYwS7enivSYtxQFmTcMdQUKdArH93w",
  "key40": "5dc1qDQxo7fWaAS8BYPaYhtugvisXiifPh7aoKCygZ38qTuwSYw3bnj5imumfGg5xdVfxpQvvHc2c13MCtG757nS",
  "key41": "4iskh541wvq5SoDSFhS8PDK7DTzAzThiePdpMkVscgiNpHaWhFNs2Gx1Z7hnQ7MLsChe5qkG7xnKWYbUxgvYUUC8",
  "key42": "3ToHqui6q1xezCqGhE6efFGGsKS1juL3MMuRWhfvkfMUkE7TPwBPzXAeUaGLzATznxmWy6ZttSHGczDzoJGZvD67",
  "key43": "wE2K1nvbRBdJnMou1oc4F33RuuRPUSHurf4uft8sgFQZrfZDWd69Jqb75rKaTVceWNp8zYn2NpP7Uz1WTGRwq9t",
  "key44": "5jd2cpjdDtpdJayMtHEqLqKtEg52efQvivJVMqivMWhWibQpnXc5hkYYfs9d9X6gmDC7uzn1UiJJkEGrA1kUJq83",
  "key45": "65QjQKBz4vQtphh5JQ94A71KyMg2SSVm5izFHtvNzPoXXe7pSrFjDVN2MNiREifUAoLc1PzYxLo5DEoSmNLRiG1u",
  "key46": "3CGkbq4jdmkbpPYErSLn5GXo32ijAWYz9d16w4CDW9EhR8XVB1b6zyyFXhYKb1Kpt3J8paT8N5nJwHeXsRyAdHo9",
  "key47": "4Ne1MFdj8PxPn7mWuU2sYd2LYJNRi6iLmnp5ALdYRGdua1jKrCvLgRGGwZSVHN2NY6Cs68YwgnH196TKfgAZ9Rj7",
  "key48": "2hNWBtiKa4m5SKoLhZHGSaBXQGXmL9edFAYuB7jPfH5NH5NfEczbdLi2D9KgxitgAGPWpTJ7SxFQWA65VneyaDyV",
  "key49": "5q4GRD8YXJs6aBkognqADYj6EyBuR87w3Z3TjAQnHKxFLjmgR6p7iZmVeYKT6ce7LcoHyq1BcwsfmSr4kbgZ4BV4"
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
