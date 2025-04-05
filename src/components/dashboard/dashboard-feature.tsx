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
    "4KQeuEZXiFVDtquvZ6du7NcipMQgyycwVZjfD4bkSBuqAS5mJ6sQsP2JoK7Reatn7Y6uGLXVXmJfo7LeG32Y5fR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9T9mV5coffLTtNXYZMxejS5c4MuWju5KPoZUcyXudZZKtkFHWsnNzbisq8JTMFZhgiuditgNwtH7Jb5qetpiUq",
  "key1": "5WQYh9Dp9onKgWb3rFPmcFuyBgUUk3ptXfXQuvXKVFHRgKBGErr6ykgKjN2bn7htcYcMxMyBCFc72gzFnHBcmcXA",
  "key2": "538MMgfjWiyVSSE8bbsqyM44imTvy6YzAc3tiZ5W4pCRJ8mJwoHYcrHw54Ja9Z5BaZmfGo4UJ77ki1mmMscUUs7N",
  "key3": "3RmAU6uHLJaU52FXzWGkZ5W8MRHuVZFjDwF2Zesdbua1xk7XaNp56mEAK2BrtZasLE3m6L3zVMQKQxhkffEuai6Y",
  "key4": "4HS1A2vf5jT9mvrM8zNj31grpFTvjgEaRTjgA3U17fqsJvy9E5vs2hSsjCnLmVVSaF6NnCJpdS8QFszEeDZJfHKZ",
  "key5": "5bqu1pF8FHWUYZQeMP8KaEh3u2KzahLz7kd1GLnC2W4Y1mBPACs6UkrUHKHMXZceGcDjSRgj8EnU7WRv2bsgpqU3",
  "key6": "5okLBmw7qojpAH8kMf4NhxLpkEe3QS9phGc6kaJFbCzDkv1BRNap9bo3BVoDLiYWL8H1g7rKyEBCqQAGRgJwtCrf",
  "key7": "4jBV8jGaJSBx4mcGGsUPyJ6ok3sGPtXRWxvhQE6DSMTAX14ZKc6SeDC8mqWLtmfWk6GL1Y2NWVnjR32mGgdyw7qc",
  "key8": "52NjmRTop4BDyNLTMEjAoydytNwoLzuj5mSSAhEHZrTkKuhDP65AmkrZwoN3xLhDKi7tKbQVr9kWoaXoJhsn7qyb",
  "key9": "MCAyvW1P1agcvrnSyoMDrNy4Qi45d6yucbzj9rWPJEdETN1Ja1LNY7Ht2N5YHTag6KTFAdXJLr6Rj3kNdGV3owM",
  "key10": "2CjiUnbuT84k5fRrV9JLxJ6VxZ3YHPaUKH7tPB2sp4tCmT6PBu2x4t96Tey4ZJztYxdSFLueJCSUkoFttGYeXWnY",
  "key11": "GLwUNh6ABuc69XgTgP1C9LFynHgAEkqpYDNAgPu7mg5XCrPzfjMZENrYK4MVnJ1msZG6UNCrGqxN3JwmzP2CDAn",
  "key12": "4YvxZSTVre93on5ciziajmxYTSfatAGheLK1ETBzc52uAFZ5CUtt7E4kaWMdcRjUbHCih47vU5UdgqCu8mXkp5jw",
  "key13": "2i64BeUh56tbZjmJNFv8MRw6k1iUaGfmv8zJMCJVUjf4p4mufZfK4Cq7wp8xkjEatetKXjc3BwsF1jTBeNxVzroe",
  "key14": "4FCmENWkSo8UWjxmS8hCnpJ9c1qBA3sroRFoQPcbPQpwZ44zSoCTjj3tam4GZWpPBUQbd8MLsDyEzbR1BVfiWN8t",
  "key15": "4xRtRymgLN3XyZTu7XVwxcf65d96XrA7c2Eqh4YLMMxUCg19FEa9RHLAsG7QrXhBWZrrkQV1ii59PX2ptgpmZeLv",
  "key16": "3dXcMUGT6dwZQn5fZ4j2VtN8uewGMxyXfy1R165BxigYDmxet4n8kgarWFQwPH1VYCBuxSZYyXp5hcMyTJGhpdow",
  "key17": "2iipWBnxGU67K862hTQ9wmmXZSsTSWT6XZYVWDvKEkjZrDgCngTvsSxrDwJycQbLSJmykoB6ZnQuKZaL6DNrCvEC",
  "key18": "5hjuPE6QYhDfA5UP1tfCzvA7HVFF12iL7PjTnnoowGiR77qmrNeTBiqEsfggVAxBa78k5utDNRaRbJTjQgk3Ut5u",
  "key19": "fqmMzp5D3b13i55qGuuwmxRwTJyeTWbmHDsFxPnGPp2rJLNnM4xWn9DpSBohWt199fegRfKjJ7G327vnv8ZQX5A",
  "key20": "4YLSqX2o6Dd6CfvXqP3jmLHYfDzvxLbdjM9xYzqFaj16WmvDnjF7zeMrbfeHZwCarDGxbWFyZ2gPcfTgHodHDebv",
  "key21": "2NKPKh19em1jgbMcKsrgK5GRr7pKVc6RGt78FuyPk7yjY6CsK1r4Sauz3x3u2MCGpFR1uVCohcmTvfyZzD1rmL8f",
  "key22": "4pMdk5tfoe8tyBfm1RnRXKeQ3ZSyoR6ew7HkMqoyM2kXYBVefcvAhDeejdaoAMhW4dbWhA3SmF4aKr73wAVm788y",
  "key23": "39XvyYr7SW6zLKDetqKbpG6XXhLSgRQEUaHppqsLvZsWu6q4y9w6nq7VonuU8aqAjsGdqbYSmH5VmFRrBSS6kMgp",
  "key24": "61cWdcnDb5E37k89UTdixNKT31JbMvYD8SAnJnaCABeVtxHeNwBYFaQAgniWDLgmRCwUsZqaCQZz9uU4YcKR9CPF",
  "key25": "3cVGcLHAfHJwJmKdd3Bx6JyBbR8vEB8RdmqWcffpLKSVBoAqAWsAwM1eE6UZNNdTuZcoisNr5LfaNiZXAZkjdobB",
  "key26": "2XqDRFT4PqhEUkYHMb6GCBgnARhtevW8hEgbHuE3yEmSsLZxFFGMKtVrFVjHqRe9jxGT2C2D6nLeJfy1dQTEVA5M",
  "key27": "29sPNAFVhg24kaJMHFu7MJUkykbttjggPPV1e5UFEumoE4L9pXL1QNXdTRA1tzS4Z4ebEdQnRp9qSgHv3NT33i7b",
  "key28": "PHNtfo8Q3oGHJ1JuNcuta78f6WQAvNrejiPbZf5MFpkH3CcT26d6ogqZiYGTRHZnfneDHuF8nQ9xGtRiXJga7BY",
  "key29": "2ZYZXTQPSHdUmE4dHSdWabELqRKZBdZ1kyT4V8nqC18k6v8p9FHuuap6RY8ZmNKapzx9uUtrqVrJmAU9KsYbNXC3",
  "key30": "2jFdEqw9T85wqKjBRifSiQ3QCxGh9kE2G9qew3Qc1RXEMDThLF1JKYahQZ9HgMvG2XbXWrTpmZ8uES2YrVraRSD7",
  "key31": "3KnX9Nfg3UVxWMUHoYwwVm9s21hePshY7ZborLod2cy8QgeRTTuh2ZfQBnjp2uuCqeYok9vVb54NxSFRt6PgLsFc",
  "key32": "57Mut55wUNDug8z3mz6PzsxnypBqmAd9TdCV3BQw3dnT3WySuXYKfoxoE416ezTphF5cpU5tuKMwcqWQvuXGLcmE"
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
