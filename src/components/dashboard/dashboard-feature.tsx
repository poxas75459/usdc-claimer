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
    "iTTrNuiXC5XtAPdvop56Grc1QTLBdbAB8JWwttX4pBSWZssDARJVyroGqPwajLHWJj9wqPP6FK8mgHup7ZWG5HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dorEdeygsGhHCfH7PPihtbbFNNYgoiMgvee4YZkKWqHawiRzNHFkVkAVNRNUVmEQ9PAakHSXqotVVuEbKSjQMq2",
  "key1": "5ivqQX9FVHZHqXkuw59C3Re6FwPuuuih8tfTfRL6bSQr15jCKkrHHfVrMHZzphs7tujZBDQuLc2DxS32NMM69Tgb",
  "key2": "5tcw8NdqFcNh4FJfF7JeEij8C4zoZCBXHh6QvhZYMfjeB5gyVgqWEjLKRGiyvbqBp4jKBT87X1koDmSVYiWEigQb",
  "key3": "3MSfpn6u2Gb7jDnzQExZs5VeVaaPiZuba4eYdwUAoQv4MSc4D4uSn1J6oTHfwQ1th9pKn4HxdVHUHgC3U3GU9jSo",
  "key4": "2pZhSocMhNGdJpB6TbyNDHi9qrNNUhetAbz9SjawEbZKx8Rmu1hV9AzgGqvYySMGPWPWa23SCZYZMor6oybwZjMd",
  "key5": "2TAksRWrkWQq9LZy2CgLknF9KdXRY18tAK3MAuCBkVe9c2YAm8J8CbFHfz6GhiqcZkrdynRa34CX8bRzw33mdkk3",
  "key6": "2ayByGqStJRwaYsEuCpoeEq4TzoZsFYMg5c4YnvzvaThaas9r9uJZT3aBEwgjT5jxKAhNhnGva1D5Mo83FEx1E6b",
  "key7": "35fXdNTuMDjRMyhxyMoi7Nd1N23QGDXAqvTYZmCTJxVixbRBi7ozSGzRWyN5bzjDi8eHCuZc6jPp4Jdj8qvuTzib",
  "key8": "5jtdrDiAf7RBbHwa2H2zW4vdWo6TeWznDukynLWkSqCv8WRBdRPTXpNW77x8f91yUvP67ygbDtfVrSUKRPyUq88K",
  "key9": "5Kgsw1Lqqmsq7YVobur4ScErkwdgUUv5apFr2PghqyB1s89dyYqjGv7accD7EwsjKdcHe3FFcE8gHYFiC7faCVGV",
  "key10": "5bGJDu5VBjU7QqZYHyWsVewDSVKVVUi4caqESfSBr9NFhv915gqzmaNxH2ziZnHBQ3L3xrP7FGXU3SbjBm6fP6zM",
  "key11": "5RybMwpfyhzQerNqMsX4ymqdxtuf691Ta6KHc4R4Jeq47MEK7GTxYeiri7Y8GyAQrUEMrsH4vcAuc9HYdCbuS4h6",
  "key12": "39UeGJbCy6nFSEfYL3ToXZeaK9CuzJg2DcS4ktKhGXsgeMGRhBSRoKG89s2DCqm8kUHcBLQtKM9Ykihbb1YZ22S7",
  "key13": "4t2uooaRQDYGa1QRJwnFx56bqjuZGcSpJ66Tz2Rmb7gpX9YPwJkRuAjRPa3kiaVMCwacdMoqQ6uVayVgmjjiZtN",
  "key14": "5w69JxTwTzL1U1RzAfFuNpmXk172tdudHUUumbQ6bX8eMwErVFw7T6JaZQSwwweffmvXmvgoNo5oxqNMXwbG73qz",
  "key15": "2jBzq6JG1Z8bRMCD3cmCyA2JPn8VMWLhGYe7BPXi4WBcrmvu1eoekdxWdxYrKQT9njgKCHGxwQr1D92HQQTxd1KY",
  "key16": "b34g3JdVoSAU3N3F8QgtvJdNV4jx4pcFKahnUPXxJf4pvN5SE74bg3fPDXedTLxNU9ZALhm7tA7NK5e1R7MK8Aq",
  "key17": "5bMsAA3uUai7jYJicJo1hRmJmNK5kN1ShxujE75zcGVypcjLDVAeiSSiNAYkymTKXsLnJjNjGycGSHsYcCWJBiJm",
  "key18": "5Fko5NaGMop2JvUzRSr1VxX9ch9q1cxgx4mFPriokX6sPb1LRBFCvSM2CKcuZbWMn1wywCQSDG5uki5MM9YcMSDs",
  "key19": "4rbYo9cbHieihBuEv9X8T88CcnyAbmeoBVr3ej2Ad9YjTUimpPD897NzNKJ6n15C4UrqCk68BiPpyR27tkmqwS8g",
  "key20": "45127JMRFhLM8cccPRKUWxW7GUnVc8m1EJB2evuAEwDAH5Z7puxysnZD2SQ9bWbjQ7a9dc2JA5ercJWbgTTWmy9g",
  "key21": "7tCSa7SSA3Ti1YRz9ZEpk1LjKeuZ2ZUkDXticFqFMBqPvqwK1hFP7p8gLTtmQgYpofWUTXSZViza1QTJqDdgbxS",
  "key22": "4wW13TfmyoYVusFeXDR2bD9aNUvXjM7M5ZFMDKwvJ7UBw5WFeX8Mb9RXH8fZxkY7s6AsBeDfKWNUVMGuYEVczYFW",
  "key23": "ErzGkrCBgVTkASNoyqRT8m7acZype1iFbY1GSmGN6St21ZKhjYaoWDtfDi4sMo72gjUerE71i5DsH2GPHt9aFCu",
  "key24": "4pSxtaE1ViTDyDRThLn4frTHUeBxcTSBhAZrFksugLwsKgSSs7AzdLCNiDnqMkcjJX7FmCDs2QkmA5TtzjfECVke",
  "key25": "2mAAPgevPs4d3kPHZC7RPSECquadZG6HT6icjnmZqU5hYWCMg4gdejFikbtP5w74LrJVPQWAkBo2PkbU5U4czEYp",
  "key26": "2wtbUUn16qF1AmVPvJmg5GxykJfrTyUaiChyKSVpu8gv6RqbF33VEPZr383j43P9yaoGqeFShC4fkr8P3Jk1TW2Q",
  "key27": "5X915KKJcwwKtJeYq4M875B5qeeJ1bmLU83LW7wQL7QWjJY3kX59yFdjm1hgcSrH9bbTuhJMoNuodKC8fUpszUfb",
  "key28": "299Ncq3YC3aPp6ik7HRi2k4CZaSquj27Pm5DwbY4qxJfFH4HqUCtbJ2xQrHkFJJYPD8pSrgjDrKxfC8TZAoAzPGX",
  "key29": "7REjmwVjeEWXSXQyJSTbpR76wFkVgo6RikYXyVNzhajwMnQ4o9sUgvNLLkF3cK4LyW7jamMusvDuPr7i8jP6NTi",
  "key30": "3FEpbuJ4vwwEPhV82jHUTN9nkvuWPpKUDn8r884kwqYFhmjfoAooYwddju7QiDesfW5G2bAxBHFtiCwnJDjGQpu4",
  "key31": "3whRS19gnYRGptgjpEjc5eA8XrJRRksKM74MFpeeBGx4PyCJGrwMDzzWPWqSMkWT6dXrsegphsfgMoKAoBzRxUgk",
  "key32": "5HA4iUsUBDYk1cRANwvGSZ3gk41JdFPd1yv9o8FF13dT6qGYMftrCNwokADSvJDqDDRKj4RviBsufduNidhBAP9",
  "key33": "4fcdp9ioVfMqBbM9oKBBrbTmmPCYH3H4Ua4R58SeYqE3bwQTrgsuPrU8airF6GmeYVFyYvxfd4VhgDHSRKp6XqED",
  "key34": "39iVg9GmbgyT4CfXkuapjqZeyA5eP9DddMyMUe2Gp8J2G7ufeDs3DXxZAvMxJFuHAUcDir3y2HPmAMwvDzWLUZq7",
  "key35": "4JTJYFvjRmHcDSog348t9EXA1zb5r6a5ZzUbydPYYPyfd32yVrbS3JVYTxoBEZDPdXMcnTmtxNBgK7y9LdhbBA9G",
  "key36": "2PwKWEZ3FYXyPn3jArYHFpHrWBE6E5UzXj7wKR96gvSp7w7EojRJ9hSLuimr5p62vbKqzZLr3PiY1aLBLRT3Qmu1",
  "key37": "2BsY2P9MHPL9oUpuae4zcD2pEdAh19SkNWDksyXJLEZpQUfurZSsopDR9SX88E4eQ4rBYeM6FTCTQefbXXwmw33j",
  "key38": "4SwRLQ7EJf3BPpQSF6EgccwVD68tBm2QGVZLSZiPrJ8oYTFCHPrsmH3M1QKYmDx31bofZixjox2BP4hybgZ6KkWe",
  "key39": "j1H2YWiAzbNiXapfKTtS2FSHCKFNABwGVJoF89YY5xEhyGSuinb4GNF5VZJaXHzQH5EgkhmK9rUqmjSvSvLu6Cy",
  "key40": "64whU3JJu1xHLoqxoWSZKzQxWEsHmRAkm8ahTafSg9J2FzG9CUZnxTv9SAbEbaYieEj2pMVcN38YRdxW2YQydVwW"
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
