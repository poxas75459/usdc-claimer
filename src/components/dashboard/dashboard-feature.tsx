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
    "2c6YvgZa3qWmpJvKQjU8QuDdw6axV3SujULqXiYBmYHYstLjmorVvFvb7k1uvTZ512LEMqEYNQShpKddszhhkQQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65AKTAB5SkWbJ934Qa4wNXeasBq3knsrU8yf746B2Y3eTUJJacvxkTFTE3ZjzHxKq3tKWoGEwFAjY8tGLWFpeM3h",
  "key1": "3zySAa2tP6FKbkzphRZVu4B1RBsEPWH3sFKJXKb5TjfhAmbHrDUwEvec8CozbbRLTiqTUkaXbE2t9fyzYrMHxFSN",
  "key2": "4DD1MskB8zEB9ejyrqEWpZm579L2BTJSwcFfPJfs2t3uajbmsqRwkhaoFe8UMFxVj48Jdn9ng41LAB6qUn6gZ7nQ",
  "key3": "3ejzNt6gnzYudp76znbs63XfosuvWKKnkgDVrZ1TYnt343CpbDLCWKZ6qTsgb3uSvGNeYUP7Yrc7Vm6SWYs5f98c",
  "key4": "6CGsRefCN4LUALDVv2iWi1NkCcTeRu3up785wy7tevKUkUFkQR5QcA1TxbjdcNVxRBKVf84WBBqAqSk3pQBAu3a",
  "key5": "3S6NkLmepcz8Xt4qJTZccWHjEZpYPqGPvTyX9LLq8MLfQLuBKmkJaj5RVx49jtxRG4Bb212T9DC8RjxjtWQFU2VL",
  "key6": "3eBR6dhTtLQCvb9Qb6k7BHS9aGC57gje1Ju7Sccac957MaJkHFMZW3mAKgZ9e7Kd3JXyWvFMCBtpewcaiG2Zbnhp",
  "key7": "3xxZ7wMmVSbXbCBJMQ7wd9kAJKQzzMKDWvL5M2drr48BwMnc6Amrx9FaN8CqZEd3PGcmZN283vNp3GAqhvabdUdU",
  "key8": "1kh93FGTN9PvatrnohLQaKvpvLMiwQopeEafPKppgPyB46oDrgdj1K766JAmmXkoGafxazgSLttDmhYtjfxQC7t",
  "key9": "PtBbz7eUgUHuyLzX5wGDanhYGoQcjNDiU4nC49wk98Ywtc4KsShJ9i7PmJXuxjjbSWbGW8JsCfgQ7efBSx1oe7D",
  "key10": "63HfkSDMSX9s1U9sp3qxHQu8EStoeEK37gEuLzwtTv2gZPaj13StAnZJxWVywsMfN2SoEQ5BeYxYaRHRvvJJGz5a",
  "key11": "5AXrFFAwFec82s7p4oQVsnV16o2nuRWFF3Q22LiYXMZREe7desBjNYbyGJffqoFmGrpJeVkhuTgXD7Xz6DZkSamr",
  "key12": "3G6NY4mqdpeUCHieRTPbzKg42bMDsTcasC43EbJ97KWoQ337S85cAjfY4Bz3BbMwTXV2FsghWS4iY8Jt7LtahQiC",
  "key13": "4xMyA2aCRSe5xaNHSzPqTNeJLsgT6t3MnUQmBNGJqRDiTHERfTnAZ961mmgJQY3NuTcGghpq7R41N6jBdM1o9fsC",
  "key14": "earGFwGGjNb1oqUJHmTfGSdMy333yWZkSouNDA34i8H7WTT6YNKDsRiR7orYmWzFF6LPsWK2WRsRcCcvCMZwQ4d",
  "key15": "E5qUDH8whmPoQ2gB2zpXAQa6tnyY2R9X3Wqqhj8qkvNuYjWMquc7Gm3DSdbs5wu9z14G6Ci7S6ehCvnkC6TWhAF",
  "key16": "4oXh5dxxHZwZRKPCw28EcgT3X1DUUXWMwAT5JwuE9PyjKM6snpK2wCPx2kDEYaDJQEXDQsGbJvo2oJ59LvnhBe37",
  "key17": "2YRfsZqcfSVQKTaGSDEMvmAoeYidw5gy1uKapHQi9aehkCyHje1Eoeg3pKhJ11uThcfaV3xVFGcWbKw6oSY9u1w1",
  "key18": "8PfnDZ75fqvWprFhdhs3jEYmhiZhf7fjq6NtZTtACSgKZMp9RMGG5tEc19zdQzLav4xht9BRaASSLBpwgXVj7cP",
  "key19": "2WepFq7ghrGcMaLfMyy9bNmFhHVyWR5mDB84AXs2CQGVWDX8uu34SdBVjwkvaDGWpR1wuZ14fM9g52wXYHroyPZw",
  "key20": "m66HTG7gETX3pZszofaKxRshqdC4kupuPAJopdueA6QuZo1ND6WJFU78gCjgYPpFgPkFAe3XR8J8BLPgiLHFGG4",
  "key21": "4bNJPHMU9xC67jQDDLK881SCA6sGaJ98vD9Uya2bjBvcA5UPKYCMexCHpW3sq6FysDLSJ7rqbBVCT9E4kHgmMFJy",
  "key22": "Q49BSPxLdDCCHu8mSDtQECr3FSSjCEW8gv7RUmk1wY7Ff4e1bPN4s6Bz4FxmfMozLFojzVKF2qdrRzXabEu636C",
  "key23": "2wp1aYZRpNuKoUhBrD9J7DqVogznqmuEaErAZBLWVkgxZKMPxJgKACiEBYyLKcZ7NSHiypNPaVSJtA8PZ469kMCW",
  "key24": "9oGyESLVK3FFV9wGo2D3ABaTb7sio68ydmr4heG3nasfCDu1dVYFKUd6HSfcMy54ub5MtJK78bKxEtiQKHxN3Uc",
  "key25": "5Qhy9daoSQDVTsi2Ea9y2b1Ssw8cKWD32EZCrBCiQZCKg1KzwVUHadgiYKi6WnQwrG3A4FVPnL67hFmMEnXMBCU6",
  "key26": "5TopfYwpe3gY2KU6XKdJrLT77iFXy9q7DEssDhcsMnNMZbMC5pZFNHZ39fet1YoTzmx36BTtFYjhN4Ty2ZXwvyGX",
  "key27": "4BPutZ25uv8G5MVQBj5HXs11dit5hdbTBqWgsPsrG6kNYru5rW4uJURHQbuxHJuHDPfebvtPj6fMm1kCGALoAb8u",
  "key28": "4v4BU6eKUkjisDT9NnsH9jHddcx1iHB2nJjGHgRrehbsU2r1RicB9G1NdUNHg4hjEyWxACoMZxsTPE6b9Vw5b3qa",
  "key29": "4wUZHxXcJR1ngVQRFveRANyVPNmjAoNr7gk81jYehHAFJnXCafBS62RuVFdSTmz1qtb7rN4WhJFdzA1banWhRThf",
  "key30": "3TCq9exiY72jHXZTtpmoUykjGz8AL29Z4JVmdyF89ddVbsyNKbMpj1KRHL7VgK1qBsz1Uv4r3mH4j1AUzUvybTBk",
  "key31": "2T2cj3UgpH57qnXnkW3cvE58zkYdzf7edWtgJzmoxmTQrTiE1nygZmRPuF7d2zx97jffBuFcEhFnRYQ8DnTsPpZz",
  "key32": "5XyWmsoTpTeaLKkEzbrcHvcKhJd7RPPVUN2v3aYjej85MJCLzg4vwkuWiBkSXsLYvYViJ3uKyFjX6rAdqyf3CYXr",
  "key33": "bn6BaNCNYyFGa572VEFGfMuXjyKFJq9CYQEXuHgxqWfFk8Vg3KYKJPxpnkUcLeehRFmjQfopjcjWGc8QrtvfiGe",
  "key34": "5bXTxPAvXfyhA8BuotBdGJEdTPNBYZbpbxNLMbqewDpMQAtmZwAGHEQ1axtg6DdPfUHwksZBMrKmLrhDh5SbQvJy",
  "key35": "3oebruaGsFVDjH5dHtRvbJegpnMgEWxV6o5dzomFdHfuHoNbhWwASVSDfW3tqxuJhDGnHi3G1YRkRHUdpCGpqNL8",
  "key36": "42aY8ujezp2z9qyehDPnSM3ySrdwvciEVvAFFy9gcfbi6DsrgytbGbzysbNRCfPNXEwr7v8xTLgUDHVEsqsLQnhg",
  "key37": "4agMaeX1j42Uc6wnqYRsymmVYHkY1Sh5YyK4nMoociXkhMvZYBZLyaMyduWaGwbPTsK8vr1xxASCPNrbMm1JC9DV"
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
