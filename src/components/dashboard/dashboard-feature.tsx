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
    "4gCoVP5rtPccQTg6SuVJjx7Xi3eRsn4ubYkmVCcE5QJPM2Tmxa7XXby73k1gxpeCfhvB2M3wKSh7p32YDYSpWvtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ff4ZUEuykKfYv36GiEs25QBhy4jnuE2cMVpQXtUYw9q2j3fSBvePNhLMaS56rxXB1GKfNa8ahoTkVA11TVuKEGn",
  "key1": "3LPDSWGUPZeefKzQSZCab1PhaQwjhNfPqpNNFr3twe4VfNupWdHNCtfXXjy9dpG9R96gNnPFhG5nfeUETLG2njgm",
  "key2": "HWB165q5D2tgSUTjqdNcWhJQXeXswQYHXN1HUzhkB4rt1PBKXwyicARR6FwRocba5aze4pDpdTS6D1WbAdDezsu",
  "key3": "2KNLHZpbzgdNMAkacb7MVKFfiafcCf8de9W9Jg9GnyAQCK6F2BTi4H79rxMuCTQPQecES1zPiXnY51NgjFWQkk2e",
  "key4": "3xTZ4v4YipCjoBhdQu4QsjGvef7rpRvKvW61VugfTfZ6LFNTwMa8kPyXxFhpDEWrUoKLgutNGFm2yNLtDDkRrzYG",
  "key5": "3ym4XexNgc5GZJwiQC8L25M9MJnQ4Tyn7NCrpHs4oNhHyuAqUPBU5nemz1Ctauqv1D6EZ43w9NHkkB1SkPLcot6P",
  "key6": "4ciJiWPV34xBgrXWaRoTpaiQAKnyJfoLTHKzwUcuhrR2TUyhSYECJrZgPnJv6aTUipq9rQikh8NEWvsuq321BcvF",
  "key7": "63wSKfhmm53mUBCgCTNVkvr1kLBKbtX9kGWgtpQg7rFt3NjCwqSSyg1CBGebpFK1gFEzgWGG4YNPwjuX6pyXJyUU",
  "key8": "4icbULwXmrUhzein7ExsXJ9es1bL9nX7k5UEbN2vTt98v5QFUsZKDcgkbkAsvZFwcLdYrC4z13RG7JLFoKDhw972",
  "key9": "2q7Rbg1X7kwuBatXmFbYTk4vnkzzz8VomRbwEnpChDGK3h7xVF7ALg8cY4mzm585dMgciuvHrkt5iUojs2ak8Jqn",
  "key10": "4mi1c74j5tfQuZz8xJSxRDPei6mFihRMpbyejWGiVjHCuAhWFVrTVGr364hKcbBE7Anck8V5ydT3kevotvQSpUk6",
  "key11": "5NH5ZFXHJRxo4EpdPYUjK4jZE3wh2TGQnLHzvAX5UfmbPPBhxnuLbpNLmAWemqyw8qeMPN8yWdbfzWFEM1dCNKUs",
  "key12": "x4PDkApP42NZs34JuVUvi9T1St43F7Vt4B9GxBYgAhJsQJyAx5yekKeAZtW7tB8hkRncVELGwZBSsoQVySNZh3Q",
  "key13": "5YPCkMJ32WyKSyWkA2mEK6wvZ2AyQfVNkZkG7yebhtdsi1q1rPbXiQFV16cy8pMbSUhNQM9WtKnD3sRB1nZi8CD7",
  "key14": "36uX7zFRZSsYGjzUX3rrRtF5zhNdPpAkVc2QPGufujbNn5tDbrgswb3UPErown2rgWr3htvZWZraKYvzTh1Wv4R",
  "key15": "5D2WXEBiv3GqYsaVhiXAgd8E5VEqx8iPLbCrcrMarn6AQqAEiSdWukMqS576fcG6d7ZvqrhYkU9brKmAm3PgqNkk",
  "key16": "4t7PWiNprByeuDoNJF8S2k11tsKPmAt8KXYS1QPKJ4i7Sa3smCKFSCXZPoS11cR5WuC25tBgyydnsrK8cAkboWvc",
  "key17": "2kxe6T5cLdjF2kWXyYyMcNgGGSeGiTRKt21WE5dSaRh6X4SLHmySL3UFrgmoSjFTscEUYzWY4R75fYkN6KrAvJm4",
  "key18": "51hn1wyDGhP2MtFRTYq3sXNqrgMMe4bDbc3j9UH4iRTEEEgvXG8VncutJr3ht5oQoQk34v4YnGyCg94yVgmJRCnr",
  "key19": "3VHVJATN5ZxadWRtX24prf3VCXMMkgoCrjes2fSSbyC4X7RjUX6nmx7R73vuiEsGXBZJsrdCqfDfWP86BEUVDZxS",
  "key20": "h8rS6bT24hS9yrL6iumNqDsE9R5BMViGeJtd2PhBEh1sCSSyb6hZeQWA4GU3ydGrhVhFU6vmon5zcTy9kkkp4N1",
  "key21": "d8Tznt3Ve6t5zEPTUQzp4mfJzGnL8XDRBMQMcA3NRXeRw7JmByYv8eJKiwjfdtjj4ZobHoni4jTwUo9pq8xngcK",
  "key22": "5mXpXLFRxws5htNWCqEYZgc1ZtRAVtsd848kc8TChzmB9jtmgDHtMTbUSCybqt1H9fwPL3kZM2A4Qp8b1GSJ8CwN",
  "key23": "4CcKcK4V4iUDM2TSQgt8ZDZX3XbcszAuDFhHssi5RDukFac7kHAq9BPA5v8yyfU5Ywcx2qeLSvKdLufUXxTVFdt7",
  "key24": "SMLXV1MjbR6f6BZdHhzfZu1YTi2DZaLDnYHpkvp4oSqRgXHsLvwwbndKMjwcPQ5hwb1g3TPKXNA7nx3TSzXtq7g",
  "key25": "PnHcbLBKzqjdUUd7kdGbAnrrehJQJoemwMbgkWSrdLjFHRppEMD7wbtUgaopWX27wk1B5cwDs1QQzifVmstyu3K",
  "key26": "3sKQfyXARQ2e4i3xL357Jmwxknv8hLzeuWMdLg6Q63rhf9qu1vwLPXcMyY11CL9HkqBjWQDm3FhiuVGYg5DSkZ54",
  "key27": "3wXvNZ21NSeHLF5LnTS7zkqQYrjLqcfuHbERgNdN7eeeMUjci9XRhgBup6uRci49ErAiVgaMqGag8vDWrxLhW2Xn",
  "key28": "3qx3JHkggQZHnvko8rwcMoyDaZcVmc9xQvHacyd51Bmed7ebcjRrFm3eHv8oNwNeK52SJ1aRRtR4v3qimo4R73Az",
  "key29": "2DRSTo5nnJri3bpKveT8FnU2e8wDtkxe3pt7J54G2b7ry2cPbgRht1GHfzxcAx513FZWd2x53n3aWAkqysW73uYs",
  "key30": "5wDdzttGhf7PXJJBCLt7RFXEyDeZCeKd4TMyr5sg3oxhYdTanNPX7ZyXXboQQeRczriak5q2z6ZMJbqzSxzcjfiy",
  "key31": "4Dj9f2WiqgmTKn8BeniZxPmjzZrDaDTVLhRZLuN5cJTE2qobu9reF547BUrBL5fHdzpvwMkkbx75BXUhvqftbnwQ",
  "key32": "5aHkHQ1FDPM6VyJmhrKCmqMP4rL7uTy72fDMtKrE3FL1Lit6uUrcbtEgA9QnWvr9E6qDq6kywYmWfYUaPE6a333U",
  "key33": "4M9zgVHWpquW7g1oz8xvuhQ3LmsdsS8wzQXur5hK96CM6vv8oZSv3Cf79ecSDdVpFtwfFTDFhmLDzXeFc6zQkM6s",
  "key34": "2xMEqSHRerJKc2QkkUWefHe72GcRsePXyzEyQm6dLkebPCeiQ6D7EWGZRUEjUJeR3MPKbXAWeu1Kx7w3e3ujYtLU"
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
