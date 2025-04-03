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
    "5T53HkezWfrbd3G2g9Z21DLdfgU3RKKLPuY9NmLfbJSsq5bYMLTcH68uZMJN5JHBXvzrM6XKRNkcFsWUikTPtVvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQaRZwrwNDgYwde1NxrruTAjP1eS1Qaq9JAniLCZYyKB9pyuw5genWQbrUT5ZtYgKCGaKydWKkTYKRgAENzBjqE",
  "key1": "4RJmUzYbPo746V4HqcQML3Kp3A9ZMvZJ8PWgXghiSecVjs1MFgp2eJaQLY1quR4xYVMLik173ZurW6rDsGmmpQd3",
  "key2": "5WgYBbukXKdvB5ohLZsCcdLkHAFHg5Dt2783JbQ4DL5pA6bFjTttLLg9jrc9aE9qhwRvmhducUy2feF64bTBq84M",
  "key3": "3Ys2S9n9fjJrePNoakw11hUWh3fRfVEa7mjzhkSRbQsNMjMckEHTnw7UuxsaigVPe2rbFVZKMo9s1GNYhtBby7BD",
  "key4": "5sPG6pNj4y9sfzvzhhhLUwezaYsSbpZkAxjbeA4GLVFbFkNxkSprdw5az4yDd7SkdSuHjUqg5CGiRH7iwtBpUCTE",
  "key5": "23Lk9Uk1sGhcLRAZsBmc3CCUNDcqr9eaX4Bh8gDs21SgWZs9E2mNfeyYe5GoibgSb5fM2qCeUqg2UpzS3dzrHj1w",
  "key6": "3FhEhhkTiArXgUHrzt7VtdQzAXXpMjyvV1M1Qyjy9P2HN8rB4AUp3cgMkCHNdVzRSXwQssS7BdjLaKWpYUH1RYTT",
  "key7": "5R5c69AAfdBPRQCDpJEhoCnn8qr2QxSZGHU8iD64U1DUqUEMPsDQ4UnFgt3QMQFifZgzTArNLpgdEG9hnZz4m2zU",
  "key8": "3Aa1dpaMPa4SSvgTJwvnKrmf9kmwBNwhxis6dEMAd54GviscaaMiWmZ5aK9AS2hhJCRNzXy9adQdxHqCt7wQMcN",
  "key9": "4KyeAb8rTcFF8jvr7iBZPQbTxyQeKiRs4dB9arbhZ3sC2LQuqVCPfnqX97KWX9oHphZFiqZCuhpRVqCUGME2eQCa",
  "key10": "4vomLHZbnK3R6xFMhvXTf3BLu1WUNnk2ce571Sf8mmpNZCahNXAAMaeJdB2i8bBpKL2oageXcwaBJzJL1fcUXEym",
  "key11": "3S6Cv23wFJJvguMZsxkxwi5zhb9WyuHo3MoGvcypS3JSGDYduYgC9bZH3T9dQjE9gkrGnD5GszUqKRYJuvWe1Ki9",
  "key12": "32yivxATEZ8XTXXFyYQRfDZq29gu6JALiK5k359DA3xzcKDZytdjGyYREARNxJx4vmHFF5zNxgu5u45apG12uCXu",
  "key13": "eDzEWPBYAEkAoe4iBa4rtaWu5JCmCk53kbBfiiXaR36Z27RHvG7o5iGmEGm1GjSeFuQFXcHGKSPyyax7Yvfb3cN",
  "key14": "41ABbih3pq4cPpWN5RihuRx6BALYnev1iHtZmwuuwPMAxDzZtE8n5i1U76HJdCVj9BZkDuGqvDPQZKXibrwwGWYn",
  "key15": "2XexYP9VTJFvFVRSG5n7R55gwxcLbXbeN1F3umJUvZSdouSZdnHQbn1z3QsLxYhiVnoojF9H4rGkkqzXKM2kUo7r",
  "key16": "3oqqGsqUZKbK17GCXhsq7P47D9rr83SxoXd9vFqMF4yX9gfkJxxFDCLeidSwftKMsyo61qdb925vaqn75xHfMJEt",
  "key17": "5JTDbhoChnXDYHtA5XXMNVAQsf2db4ADF6gY1DWCs1Mb6WmaKZLNdUCJxZwFf4pJ7qW1Dr8mdCfDj6UCeTCHYzQv",
  "key18": "ygnayM4nQytmikJjApsKhPRaJMkieyB8tbySNaTPueN1AczVb7jsYAYhRy8oK4xz6izMTLA9xttLnmnXWgryTz7",
  "key19": "1iYBPQwEuQFCNgDhxnM3XVHfzCtABbp74DGTLN77vSv9gAqKLnwSGkHc2gv4HTsjiQud4eqbMs5CFaincVp7Cnm",
  "key20": "4eEEvGTA5o5p1f2zGURWiBFPEG9Pd5U8Tm2NDewdMD2Ei9cKrCa9GKV9osbhhwZtgtgFpv8vXHqic5mLTd9vo7y1",
  "key21": "4dxBbpVc1pkRcayYcXsH73vWiRLab3128SigjNmwqxiaQsUjneU3hN47PHWtxH7CYpPGQ7RRKCqry3v6Rat3DQLb",
  "key22": "2hckjLeocg2sZqGKMCDpz5qMKoiFCnyZcWn1DpTcYVRPjjgb4pkvFRMnjtanYGGET4ayhMh8mTQdiWxLq2foB3qh",
  "key23": "64rzFyVuNCWKQNwKLuosE33jcXSzxmbtSwivtfTDasd7AGA4ZhQ2UaUELSKVpR3d5qcB6MoU2thYtdbZoZyg7ZLe",
  "key24": "3tB3sPGZRhSebLBZYGXvXzxNoEi376rWqNdGfNqjVM9CTjkJP88MaUdaiKPtsXEw9AKv6gqtEMgcryn23b8ys8St",
  "key25": "441Hj2Jg8NJ3hueAzAaAssGYa9UrR5NfcgSWMbV2JuucM1BxLh6tHUME92o1J61EDKY85NDwnj2rVq58U2dMzsnN",
  "key26": "2Ge5YbXh7f3PgGDL18jV7bMtL3ZnDRSPzWTxwFpkRA9p3jUsuRqnBmLwYMhx9VbEdw3LvdWaGvWmg6W4vFKjkDFE",
  "key27": "3VgojGKJZqZticMmWJaf4YvNDfBbahECZMUEpUd5bxqcTpgXqqozbXgMw2AEcfsUmJ2a1hjEgs4pqDT9d8CpzVRn",
  "key28": "2MGBk1zmWiU5o63D74kf5dCSHtmojzooFRCU7krvx3ecTVRPU7jDiWQze82f3mw9WscVe17V8L9yKrXicPRTdjsf",
  "key29": "62KxRAVdYbjAqUfM9wNZoLig6V1d3Cgq5W9XoztyLGknNWYBsw8bwf7wh9XVTxwfp9uCZytfBitHARp12uWwyEAf",
  "key30": "5ZTBEvTdzx3CHWiKeGMKFkLPvXDUaCEPywo9N4xrv24GQFgp6Y44SMeQbkxTnm8AEePZtMKwiYvfGzUYsQVPVgdz",
  "key31": "jt3mCsawds7uwxA5QF13GdMbR9N5YEQcPfurmMYEPPvZg9KFDAaRFLMZJ7H7aoXRMBAXL9tam9p8XP3nvUxT9TQ",
  "key32": "2TCZrHvwyddPPNVk2VSMpyZ1m9Vp3Xf7Fa5YeoRZLg65dmDDZuyu3UgRBQgW7DSrsFiSH7ozuVeQig3jURHJzi3s",
  "key33": "3Cg9TwAdTUvndjHYggCrjF7f39ZKyikwfrCggMfUDTYAzTHXb5AN9XfHnQe5Ho9DSxt5WkuEXZBTcMYNtnA73MfM",
  "key34": "3bY92ZB8a9bBGTCxP77P7t8Mag5WGeb1MSa5woocAPZEKeQMA9Zn5pY15TVHk2p4R9iLAhxg1EkpUGJsymD2Kfgd",
  "key35": "3KW5PuJXkwuQCTfqhLN54o8WnwK3TgtKWQLMcZRBytnDjeeRGXRkEDZFRpepSqGWp11tCZ9SN8BA2Mq6JHJnTkJd",
  "key36": "55JucgzMJMYUeJzDkycvqa2jv6AHkZcHmjLmkZ8M5bfu7bRWZtrKj9m3S3UQJQfE1dRQBMsE318ZypzqeykH7Eqf"
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
