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
    "2dqLgGGKXmJxpBTRV4PhtktmrWQryavxVEfLWRJ9bp5JRVmPx7dppCGLM7EWM9RPxv9UhLcVe8SYpVsHsHpTWa7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otn1Z5qyuweZcFi658JMvWoX3WaGEUBELZocfqSS2mb6bap66SoR2seLgSWaE8Xka2MzN65PbfcHzPkyj2SyaPN",
  "key1": "Ndw889xDN6ecAQuTJy2no9Xn7xnLpgufPESwBXxU16uj12ZE4ZNVxrejBbZB7PK2uvLkF3EHXNcrPu1GGvrR3ac",
  "key2": "3jFYv8e9aGuCggtkeWTgwv36JyHMtXCRhKjZoZqyt8r6BhDjdqg544ucXUyYUCCW9AfdS34xs3mGTkwWE8wqMYPA",
  "key3": "pdxwtXLgFGKBPLPzy9u71c9XfmJQGtUuuWNWLSRPEWu8P5JJE3f1wL5Ctqp79qVq7YmCNb38hkmifog7cDtnit9",
  "key4": "5ykeQmsTdVgSeJHaK81JegTBUL6ukyThhGMCj8hraRmcu2GF9fYTD4cKneojyV7ApH7Mah1FrwQZncATMAWrK9sg",
  "key5": "3xLh5egwjHGz1Q2TXT7LNDpQoTWd6sXQ4DGGnfEGS8GWVnhwGX3CqS1pQd6dzUx1xNK1ARMwYrTRxkJkX3q3XHyP",
  "key6": "2WJ7MmdV38RN7QJ2N8jD7ZVJou2KkzqdmEfiMRpPBQrhWKfMXgZx5URsqEntW7nK4A2MPLVuW3xLhiXJk6VNv5sZ",
  "key7": "5NzJrfJRAVDXrQoRANUFj9azZiWLN7TFDCvn3oeffbc5bSxeUmS4wABVmZitrT22knuhz6wAi2zXw6Wpf9NkMPHw",
  "key8": "3kHLQr3SHVQfdxK95xQ33skhRyARzfmpJZ3SxFnpdjCUm7WuSQi6oFA4DSx5vbP6VFqLxmxYPg1Pxj1wbASR6S7G",
  "key9": "3chCCswRKLoidBK11ymu1oZX4arWHdZTEojLZECrrWye6uiE1oMix37f713XBwJZr471zhCTvqSard4feb6pYfS2",
  "key10": "37v7r4U7qc1Xazqwry9oHEz2gRQSWpn86ir4pEqtFm3WzKnuTNFht8CdnoMhDnV5xbidgfjNx9qeLpNZg7nFCeAt",
  "key11": "3BxAhGxitgH79hJWx9fjpUkyiPBjQBarmt27k3f2CEs8KsCrjLNx4cy7k7veEDcGBi8Kxjxpr7FhRHyWgUJ8e4Ag",
  "key12": "2DAQPS4TZ4DKVCMVg9D194Qu2LDrQ5Hn2cX95rc5oNR6M39sr14E7nXzZoxsEst7MWuEcGKJiJzBZgT17u27JYgN",
  "key13": "2fB2pAyF8UCx6BTWEJtz3NCpT4Xyrb8zLor5THKg9kn34bvSZeEekbBQTa8uqTYQ2JkrBeXRhA7ZrgaALggjBr4p",
  "key14": "2cvp9dZ7r65yAy7wUcBtFuBy1NYzjNrQqPjteoDqndgHv7f5maxgJsPY6NNtsz7ofAg2GtP2LrGsq7goVLCnwfGV",
  "key15": "4z5dodaQnvRgNSTP9V21FQoLngriGDY6M9i5PVaCKCz5ct8MhNfT8MPHbU4QVaxeT9euksA7Kt4qcnqSmFVSiE6J",
  "key16": "5mkwsmiybHjA4LHFAq2T78TkLNamgDFUvZGmhmk4wjgrbskBgVsDbuT33DqSHuZhU4ELadij1u3K5PDLLDYgQD7p",
  "key17": "53rZJ5JhmFWEDYtWbQZWtXstHZqArpQywm55DHvncDBZvDW3pQbfratsNB22TrLa7jiRgZTLuWa6vhhsgLLUutbh",
  "key18": "485yZi3zwcL6jQfzM2ni9y7jeQMt1UAoEbEXNdjcG4TwW8TDyeNCZKmEqrq4dMyG2Pd1wVriaRRGbiZdqFQ8myu4",
  "key19": "51y9UDKAgokbj7Vu1vdNZQ8KyEoVd63FGtkYAPgEAf7SWUdi3vCvai1SLZCEFgXXrifPD6DthAmi81Xu5wF5D1rA",
  "key20": "48H5fR1tgPGiRSDm6BJoXDSC99seJieeXiF3pq5AGTpeQUxWi7n7gPDpvp2xBmeFfHiXFsxx5N7FEznu7BDYbPSN",
  "key21": "4RcgW4jQzN47rA737v7H1vexJJci4XE78PTDXB2gkL4THRQkp1Ro8ZWJLh5jxPAVQSqMKtuGn7dyrDQyeP8Ns3bb",
  "key22": "55fsc9vuzEtRRFAfhQtmFCHFYTzgLyBiLJCtmqpM91qz1bNNYY8wjXXkpmtH7xtmL5nKg4kWcLJVCFdj7SvewCvN",
  "key23": "6WizhFgfhSZzX2XPqeXk5RsgkGvkVpjPU2WMxmsWSJ4ihdJMQ71Yzfj1eyYgefY3vVEnxLYXyiS6s6Q2wAj8HHz",
  "key24": "DUoMi33ZGZgdhsidpB7VuAMRky3qrKFMMBCoU7Gm1twZCfbDyJqrkVDR86LbEzTtz7XAqGqe7xkn6GLbQbtECqZ",
  "key25": "5ufV9hLKq2JDaSksLjRJYnxcYzjKXhCk75bjZqV7Yr55a4iKH3tYUn5nzETw6ttW33JHoGgWxN9YqszPGmgb1mAg",
  "key26": "2fxv4qLTqX2Ng4N4cnXpB5TPeSpfKu38xDhU7T9EvPDwfWZPGKuzi2rXGkC9Gsagwn9aDXubs6nDJL2xg5kPXwuG",
  "key27": "2ZLuoCEoTbXPaUKTLUAoE31fTRNR5HY6CHR7ePuiHyFhEJFZWYFQBvnx5aji6T4jSpzFPtWejh1uevjS9CbbFnfB",
  "key28": "3BdBSLvqjw9WYRQSGVkwfD2nes5vqunj2ePywtNRQp5JGzCkn35tULFbDmCw4XqLtRcb5g7y8VaQmJNmKxS9Mi1y",
  "key29": "3uV7KVEzjGqs9thnL7UeNhSbWiCtKjcbGE3LABBkEMZBzCxooZLWitZhoHsqPckhx1buQ4DyLnqGPsWwY189zwNS",
  "key30": "2bcBeuWvZvwoprJcZsd4kKbuP96om3mSqJassXLgUY7xy2A3FWkvJTh3LVpkGZHhFmvvLrcMB6Z627gYtpW66hL9",
  "key31": "5u3G7tF2pfvNuvvUwUhUCFARSkHRbvbLPqJJTMPmw6QfrPczpK1Tqa55TucCZUX33BA7rtTpL9iBTxEgHP8DtJbs",
  "key32": "R5QmKHbPkRk4SoEdBabyZvnQscyeaKinNc6Qc25qFMTkhW6HKD9SdHz9pxszEKEEgjpF2VRhCzffcGnv4sNUnNU",
  "key33": "4aFnwJUkjFV6QXSNkC2FN3hTgRYD67BQr9k7q6MSNy19SJk4F4Htdy3x3xeMstC8t1GFQoMgmbcSNa176PaeRDNa",
  "key34": "3RgrfAEbpgofhu9HeQWirMVybbdELRVnFHp4TzmRFKEJ8MrjAwKMTjwve4ANmhBVcwnyPCMMdf1uxgwddcJWrWkn",
  "key35": "irRVjQnrqJVYYngXaLNE1YHuxXkQ1ddy99E5B4euNGXVNXnVbYsbTNxACDL2fevmBSGdzejAqfFBEJQ4d8Tokws",
  "key36": "3T5pU1YU1ksX7GZkhFh4ZVt1u93gqRemG4yxWC6SxiHD6u2s86Pwmj9LQE5yoiJWVZuHN5vs5frB18vL9dFWKfUu",
  "key37": "3CAtHdNCkDVpYFcSXy1jyz71rzJofMRxMsBbjYikgREFT88bWpcVBxwBpJpoAikp96do1Bc8DpTrU9jKye4ubtDD",
  "key38": "35SdMdDwgtEky1mF74JKV6CwyZMUXk7bJUWeZyJLyrBUBirLuhgB7B6QehSwrtc9kepw3pGi3w57JmpUbXxFSRPZ",
  "key39": "5jR8cjLWxhq6J1HrZQ9x8f7guzz7vVzG6xTG6nBPL4emFkRcmj1N8a6H5VLfGdE7tEGpV9SD9ce6WYFivYgSw3kw",
  "key40": "24xoNPNvfrfaBqfPv9JczB5hH7due4PWWytkMgjtajLkcWtsn2F8fdFP5yH5CncNsrhwW7Ub9iQNKUw8LNpD7qH3",
  "key41": "3fdbe4qzwHSwreFjZwRxiLzgv5JGQ49vJxqv77WysyErCyAvpwBjd38yMyXWrec3X15GyPKFgg4uzLf51Sqyw9dv",
  "key42": "wUhPx6YWaQdG6KEPqaWaY2RXqQ9zrgH1dCTHWmpW9GDTfRuGAQtCrCC9KeTmz5U7myK3z45necfsCwTZvRphjAF",
  "key43": "t42h4n89WJLavRVoLWm5s2sAXS8vRSPjQnhg1pimL4UZT56uswngXTrRkaTqsR9WXLHHFid9RTLmW1DrEZpKhgX"
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
