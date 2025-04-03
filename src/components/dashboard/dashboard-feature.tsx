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
    "2X6ojh8J9wSHh57ibj5v9a5r9txXSCSzHQdYYXWdDjYawpBxjGcsY6wxebnsHL6awrmMxyuWN8oqzDMWAWiYv7va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tHarHWgPG47yupQFsahMAXwF5KV9Tyfqmgqnxf5vbSbKG8CoCXbGY4wLwDc6P6kd11bswA2CFVs9fKkJAdBLqv",
  "key1": "4Njtv6niBSXWLrQgknhovQ8nccGk9ddWXEEUkYd2CzygGdp5R19S4YrTWKK6ub8d4azSUTRYsdf4GJLfu2C2oFmR",
  "key2": "49fLmTLmwmkXRToy9PzxkAqBp1VgXdpLYYeg7fFnBKKH6H8Szc5hWpVn1zRqC8s2SbCtueAr5TS5n2L2REs8XZTQ",
  "key3": "46AD3JwXpSJT9EPbZ4d3PyjNQzkqB273B1Y4mb8VrVmNoaUpgenZo1KQ55MnfqLy941GaEwVRrnzp18he9B24cKH",
  "key4": "4r85PRHRa66pgS3K6HvRXVPvBUWyN7mxa3yC4K8fnphz1ym9AcUedfM3wv9HQPoBGnThfmPkiwoyUhbXvfvPAm3e",
  "key5": "Hr57b2up5EEySVQQeFZ4iP3ShGQMXfZFUAtiHhNundf36C6SFcb2eqAyS34tiTLeKrqLnBtmDLFpFcegXBmxvFj",
  "key6": "53GrDY8bXcybYzwGtYGKgYK2kC4QRg3vrR6yExeY3pZS3iHvTnD61AfL37eBhczpEp3v5ssgwayb4vgU4HnePpoB",
  "key7": "3uCrhJ1nGENxS1Coe6EoLc4Lci191WJPAaWHJYSSPcfDtt4YNTErvwt6HnRyMtqyXXuZsspCcbsZdLYV9fr8mvdc",
  "key8": "2kwY3Ppq76bXuu1SwvQEnsfoMy7eKuP2vZHrRQTEJ3WbbHpk1SVfLsgaCYUZEc8LceNZVmjhp99gLr7f4PVFnfCM",
  "key9": "EDKg7S7nVx6QKXhKrUWWePW4h3nMJmtZtXfvVYuKHnRdG2bgQwLF5gY5CmwET39Jsti9b7dnbSKBimnZ9GZJe1C",
  "key10": "vUa3bTwjDvmBUWatNb3ANNSuLGvxvJStUQuHnHdSdSVci9p4THrTBTrHmy9JAey1nHUfGLD3VH1pNjbQY9c3TaC",
  "key11": "b8F2PdXULnBoNby6XzYppnBxfuLMK1Jf4oP8mMYVtEhfp8uN8gF9SQny1VYJ9YUDVqEUohM8wyhnfs9Hpaw5A52",
  "key12": "5ktMyZB1cg48MGpWy3ZLtnnwz7eJHnFPZg8ippkmwBR9rzrWx4snix5iBhV3eMBHgvG4jymoxgdSxhcRF9GoMEmi",
  "key13": "3kAbtXpUV4UQsjzA4CiNurRH42hMboPhvES97q7d6ibyD2YAoi3cXyJLExfp78D3WbEhqmPNxjByRDj6CmqrTmZR",
  "key14": "AS5Kjdtia8asZ1vggzFUWZNJriJks9ASpUafRZicxakr15ipw1U2oa2v3CLFwuCJMedv3siLvR3wetoYniNNrux",
  "key15": "3rB6TL8wkXetdzd9BgJoP5Sg3njUUF4pCQTe8EPhHVk1914aWthd5D8ruiZTsTDC6GnCGJ5S5B6V7rJWGNNK1w5Y",
  "key16": "2WMjwRMsGXNJGqdDyBTtTx8uG7Gf979A91Rgnbnn3PLZRYWNUB9mzU9ZMhREuhWvd1b1LwT7EJrmDmFgXVHKyj4j",
  "key17": "3fBD2fP6C1siWDqHK7bBwKhVKRkzJ6YuG7tXBKPaEheZaSGdSPkEQEMrGUmPbvCc3fmRTvnfsvm3BvLMwozTfvYw",
  "key18": "2AFFCEdWRWeWjSQmeRnBe2FBrsL1VT3EgjCxwFsVrW6iCyug23zwJFoBzmfEXrZGGqeo5yZgFja9ZXMoFmzHLNJb",
  "key19": "2YjHj3a6eAfKoQV5KEjABh5W7DWbNuzUbqvYHEFYKgseWW4K7pYLFfsLxqCxJMxLq3zJoGeY359GNjuUX784TPS1",
  "key20": "xLFxUehcSQ61F2kmGV4dbbB88eiD3vDDkJd8GpYf8AdgJRt6sq94W5h4DB1MdsA8Gqon7XvQ5jfdw9HCh6wNL6z",
  "key21": "4Qian5B9np4r43ThBmK9A1Fwc615btrqgQ4iZVhxeysfqXgDroH236sHhhPMQKwbXCbYYi99ySUVF3ovPEugbnHi",
  "key22": "5aBAs28S36mJ2X5xopUwDFxk1aU1UfsLG7x1XVTR3QovBBcXYmkNN2kKC2PgbfKsm7ncafJarQncXhAaVmMxGHtj",
  "key23": "VcYupyusYExT1eF1YRt7ETvjxFiMjhTgxv2VKvEQqRTua2iFyEANpJLy1fxEHn8jgGSxuGYxW8Tk2NjRB8C1ost",
  "key24": "2tkjpSFJhYvkWcvKhxRgvo3pSGFbUpirxLiayVFwYFjWiAvWWr88LBTe2bKgnQCkZKY4oq8tgmofWQj25UgabHYZ",
  "key25": "5uRCqjigpXaF8MPaaGwwqvtSzUzXsU2swTVJ6NHfWNFudG8tFeBm6gG3kNirQCVGHSUo6c6sztdFL4vntwww7BY9",
  "key26": "5kYUefnBbj8rDJNQRP5ysFubPSVTXKEvqZB2CbXUn1RrnLwktkuA3sT5JFYty6er9aBZX8AfM37XnHCSLQRQre1L",
  "key27": "27haKZiSi4HL6rvYGUyUerwoqe5nSwxd25tutk95ZrJRVAR1NLqXpMSCm6UyrxXV8xQRqB8VoFaZhEFa9e98UDDf",
  "key28": "3UYW7iLR8oaovdv8JfShzXMnTdPmChtBS8dhrDzQZQv5WwZwvvemGhqHaD1rVNE6fkvWjLY1iuvq3AAAVFx4Sx2u",
  "key29": "xAoQfHZRQRB7Ds5rGAoY9ynP6RxZgWGMzhkGxqbsu6pUfhKQvsVsuf4Rj4F5TrK2UoQSty6gpqESnKrkNRYbDgA",
  "key30": "27tuut33464zpQaAbYgGvqvT9JBTvgygacQoawKgsTsk8AophUGUaGrjxsdwrJFmFgsrCSkBiUZ2rqXNDH8KAqzK",
  "key31": "63kNZqoJiaLywZWPsFEMXwmg5HYXCsd1Gr6cHYj1SH6Q2xpoXJS15woTn3TSWd9agnXYhNMKpkfEmtKrWaiVHzky",
  "key32": "4LKXcR7gGMxHmnF9Le68mwdfRwg6AYV2jsw8gz1Wmfc2z3zXfGrSarPccZjhavLc3K9zcEeqqifA72MJgHZF7qU9",
  "key33": "43qSaxVFci7yaL7PFncPSXY3ydQzv6u5GbC8HvWg7fTWFfcvAvqsVtvw931ebhmw4rbtZCo35nRwW3UwYZ7gCk3i",
  "key34": "3YqwbsVVjA1umj8iWFuSccEw7nfY8FRHuLW98H75cjYx9ZAv1B8hgmrPUH2pQ1LAtdSmuCPjC2ne4vYJuD9C5o37",
  "key35": "5sf32A3mFXofmQyRXtH6YuDBWmjZrMFywWmoS4uwWw9UvvjNedgvG3dwiAatrwNjCrxaRBmzVi1DYMGohxx7PLfz",
  "key36": "64vNoKsxA4c4PcwaUmBqM3KzBe7NDmvyLtqNdWKN1hAx8PkCopyCVcV9iVMbGzd4b4aAgopUFRNurUUiPQzyJcqf",
  "key37": "eSYB4b9JYGacMnH4g5kpHU53QVdVNjFnomttYyMQVqnbwqSAHNHh2wssALsTtHFtryioWC1ZvzN6iV7XfpZBDgA",
  "key38": "24fihKeF9vqDxj3PGFPj3Rm1t33s6B9tyYYDKxTcVdGwWxT63eEQgq3EUqVzPTn1219XX2eaKfQvebWVXiGCtbU3",
  "key39": "4PE9Womf27STMEvnLc2wF6c393aRa83D4ev8DtjDGrAp1N5yTjK6ZRrhTDk7vXsukUcnPEWR6AAokMBnzMqfsoU1",
  "key40": "cZ5ToWVezhuJHUoUSAQ8N22trVgXf6xSAJLMnq4AtChbpyBSFqusY5XY2xRJQu6irLpVioqvPUBzEkz5nmKyPBL",
  "key41": "THzrtjHQf5XA1Apzhji3rskXHZkeLDXstK3zSmyyaYFxgozaBBscStER8Jww4VscJ7dymVu7Xe9Bi23qV5BDXzv"
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
