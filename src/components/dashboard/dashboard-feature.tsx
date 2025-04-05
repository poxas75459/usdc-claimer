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
    "5ULfiV4o7djDEZHpDSYSdFgJGV9anFW1mUjB5ikzAMW5RbkAoagKwYkNkLxtXmzewDLd9XeRABx3xtXRsf5Tz5mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azciMEycSStaC2TEu8xjiZ5uAtbWBcdBzjqMV9HczaWn4iCuXWmjjaeCGrGkg2RMNUupfY965SYwoLEjZMedXpQ",
  "key1": "4E3Rd3HhxsbEgQpcVK4sqpW3W4M21ubCMQCwTcQ3jnxFyGYjQE11cSap4ph3m5HMzcbSkiWx2EDYcVbmxqz2v988",
  "key2": "63Umk2kwFA2Dr7VXMpc61dtfPhCsw1267Nup9zgvMa3w4feBp4hsAkjBLiM95TFdyJdvMxEA7pxq8DUSXMw5UBTr",
  "key3": "3RxSVKcZeggo2smWzZydRtCYW8zg6N9nFsP6T747gSB3QsdKPBf1k2JDNWUgDuTdH5wSnGEWesnmg7E9yVb44yYQ",
  "key4": "CCBQXqw9N1or2xoMLPGnVRqiTg3RTyLwkiHjQg1T1PS1fpCeZBTj3r5jUnkMAKTJn18Tzhsw8wMgkVQuo5i1ij6",
  "key5": "5ALmpVSuByX1nJYyVLDH5K1T9pBv3bzRXhghqQUFKQFqGTGj5HVWwoqyNBmvtCSS4MGpiGJdWUge1QtL8z6Bue1s",
  "key6": "ghLH7dsDFy22maG1RBqphyjz1pAT9k2GE6FAiMyCco1vYh6kfN27WgS5syBbybZD8RX1tyNz8ktDiZtHsgTUxUX",
  "key7": "5AX1h7Uxf9LV2u6NQSfzKz4AFoUcjMdUEmDdqkuDzsFpfNuhjpJnPQsQ5c2yYCpJLAU6vffX4LekmosTLH7wNEWp",
  "key8": "2GgoV6TrsFY6QGZbFPz6xueUvy2P763Ayq1PQsYjE1WVGDJ1g2awzMdbhvY5SEo1QceymQPFX2KoevgGfkJDbJ9X",
  "key9": "53y4cvApCUQzhjYDZV9imFHQQqpa5SZMcWK3p7vwvH1yFwFun6jKH6F66q7Wg9mAGY4qy8qfFBvMtCrXYFWpV6DP",
  "key10": "TzmUBhBZ4pLtCwDkWfRW47k8T5iW5KfUgY384uFjubX2EjtCiZX8HT2EPCQ4mbEbqrYBKXhGos9gFq76CThbcuj",
  "key11": "3L3QyenmSTfSQY2syGeSfdZWC9qz9eqeC2hJCL5rbibbYqzSycJ4R4v3b5XFBFpwXarwUGuyBjF9zVcoFFHmvfLw",
  "key12": "5zeTELyREpLTFwTpgLUzjTxWaNVjayCim7hfYr5UqfpMgzhCafDRHGnF3CUHsSa75ceRLauwDML1L9GArij1n5kz",
  "key13": "4Ep4wVp6hrboKDD33HchczGwts3WTLbbbeSqQkK5wJR2G5mx7qLJ6Y7NVe8m4xw11K7jdrEP3aPvJk6pigP5XRRR",
  "key14": "5csx13hWNzETLzjXtavpHsb9GfpGDtmsPZaGMx3PHb7Rvo7G6TuAceJcJWgQ2qjUCevraPDd1rZULULbAppndQU9",
  "key15": "38tVAHUh8NViCGbnftWCehCMP7mECS5Z84z6x6FktQYzZWM4VJWJ9huNXSmXypajWwCMVmE9iwKopJBmg9i2p8J8",
  "key16": "5boYBshnFTePra2oXCVLC27UwhBdvHAXUmb3W23UC7MJNbXz54eZrwbRLHAwtTwVckuPzfZN8tSAuxZPuAUjiAH",
  "key17": "47GGF6Hw17f3sK2HMw5pUSAAPkZht7k5uXwc6ZCiCgxpRz56HuZcdKALhXFVp5BYBzU9KuDy9HJyb8HZGrYKp7U7",
  "key18": "3958orntXwnQzMqFBauD6EFTjK4kXjKQgQndft23D5nrd9NDbJuFvZkAR9f7i1AfFvUyx4Yrkk7eBVVTp25gdLQs",
  "key19": "2bbwfcpctGdoq83s9WYY8NvAxxYdS2pDbrXpCYByNpMBUBoBzmwpLZWs6To9GaoepckgtZnw4Hp4Qi1rASSe3Rmh",
  "key20": "5yTtfsWbH4KBswtyKoExxyLCcV168kmrdBSRK8WbDaEQjKtQMXbKE2KDBANAQdcgUvegtPYnLw7XSky6jAPjUPeT",
  "key21": "24FBGquRKbCByhX5MXzaLXdPVmTdnr1RMuPebYjdL5yYZc6d44Q3aNfTKcGDCZVP36UmZcPSZbB6FkYnZUxoQYof",
  "key22": "3GTZ234Ec88mkZyGfnx9t6Gp3fvH49hS15P6BhjBwKDzMhPqsowgNu9bh4YLKdDAveEuheoiHRojEHJDMPsg8kwS",
  "key23": "63cxwn5pswbcd1dmkmUMBak5QGp3VdomJd2mTb32UgdrzP3UH3mDMjbZYg9mtDzGDvnQ2HWXsToHgKG7v6qhhmgW",
  "key24": "5CpkAk7m5MJ4FVQNHZLiY5fhb82xeibKDEoZF9Sw8Si6QzK4ZJBcKhbnna4ewn8MJMX9Pvqd4pwPedAFdDHKk1fX",
  "key25": "2CMVhF5nmuNUwHTbzKH1TEQwFZStW4HTH2VG2FHRq7G5CkuiRfyh1vRkEWdCChuZXzWHRZFEiGKTGfUv48dUQRQH",
  "key26": "3ADBipNT84UpVkgk7KkwXPryhbZkHhGvQsnsPzfAiCgvTvrVUydWstySL5kQezxpBQjKJd33DwKc9KDGGh1AyUj3",
  "key27": "6xpcSWWkZxP627T14cMKpJzhqPCURiarKWq1svM8fEqKxr6ucBAc9QengsmCUHHyvAr2VrN9AuCuXwiaUDrXabG"
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
