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
    "4WQ9kSnuEweSn9YTwDwXiE9J91FktXLrPfHXH2qq9FCwUahp66WNGBGJhpQ5dsiWH3KydAjunKpCAkxJTqLrBTTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fz6Yv5u4rLNp9KjyikVFRK2f4yEG4u1Ku6r5J3F8eMnd2CwWGQrRqNjForksNck25QSQiPGdfQGpk3QPALYYhRf",
  "key1": "2Tnppeit6G8d9A9gbtsN6rj6FxsaFphAq5RtDn7odGwgJ1suE9JyngWZ9i4PDJrC5n9d4UZKV4xpqCLZwC49EeaL",
  "key2": "2FQQyjaUeysxSUdfjJC9kmph9bvT9WkAxsCarh6jhGc7PVQRMPjf3Dq3oScHDc4Epg3c9GsEFZJ7Y3EybBN2waLB",
  "key3": "uywCxZRGZ7W7QwR15wbLiD89uQ98tZCWVPCcjVhx3GbRE5zC5xte65inXuFDnZsN6BzLfHc7h3KrQthvtP1r9TT",
  "key4": "bVvmJDRjGoapVh1pPFh6AzGUZ3m2kC6WhTRXjitMCLMBcJimCjr3gT4ikB9ziZykChkgkzGhJq62XyJrwJNb6c4",
  "key5": "nzghE4rMWQVB1YEqefdMSvggF27gHgwT2Rm7b9WvStXVyYavGz1kaKCwKLs4sxkpAJcRwGNht1bpEmTj8o8xMjg",
  "key6": "5rYdLHykrRQNzafyUaejm4gFMtobF9LPt6zjbEhDsuEzzHULQJNttyJU2ko9QiJ4LiRn1pBdzBnQthfu7SxyBzsn",
  "key7": "3Z5oZjhXiTKzcKTj8kieHj82hKF8JyxoB4beuMsMSEpeT1Fw6HQrVwZAMdks6QVdAxLGzPPANYHceGar2JhpqSsb",
  "key8": "4ETGcBwL8t5XaCiwKhbK6y7ChQ7736GREK9aLPXDnzfT6jEoqGvhfPwPCR5VmYvWvjjX9ZAGk5rY7JoCWQrsP97D",
  "key9": "4M7QuhY7P2n41AidXVFasc6Xm6E3jwX7HKHt2qbdanCKrnRWDh1WUzSod568q3dwockeyeGeahnoAaS3YmDdKFjv",
  "key10": "28qsZTCWCuoGzJh3QajPv1vGmwcuGAvGJv97w9agwWqkPPd53KYfMC1fMoqMurWK2fw3WrL1JT23LxdQS7Bxjw7q",
  "key11": "2D2tJ5bFpPXZSUAf3TDu61fUTDkNbE6CTWF4mbTnr1H66UMyxHWWo2YdS8meCDFcHXpngNcVZuyZ4tPJLtBWLQ78",
  "key12": "54VHaF2HgC5kTpPSuNQFdUVhx42tJWBFJzkGbKpnK8aA5y5fWgGLZYYXRHnj1hkR5YFoPLGaWSqpqJAdyVmfWEfL",
  "key13": "Rc6MpBfjGG2jJMdX1q6mtCdKYG8Zn9RcHQcgvTiJYH6vxhTFffBCr4jNx2dwULRjHxz7UZP5QGkxVHvT1uDYrtt",
  "key14": "5chpvGjvNteSBQTapj3MxwAkT4WJKtH37u4ZJtdsFq8nmAHweU1GDKQaTwhsozWsgsiQK8SCb1oyStVf8ijgTFfa",
  "key15": "5j7XTtttQHJ3ckwZeRSprd8HMX81YRpg85WTwtb1KSJg753zDyS9jJ8HoRDyxNmnevHEhJyLr8oyGMsS9voZfhTv",
  "key16": "2FHtWs99FVhbQAh3Kz3LFcWxAugvXXJtsc9wwuESm4Kcd6LcPPJATCEX8WK3qxmKPgwEzzT6zg62DFcZGWUvfVx1",
  "key17": "3D5SkFakCwV3c33KVFwzussT1LMekpTbGczJ2skrYWB1MSRfJJ17wHG98orZtoKsXnBEtEpM3A9hHR4VnVpdEFwD",
  "key18": "29VfLKrDs7mWaUUWQqDJzVtpuYPXnnSyz3eykyqvca4oetRwk9GbDuTnX3SQLewW5jTFwPZZsacYVHFNPwAbVm1Y",
  "key19": "5TAjjYHzKPceRzo4cVH8AbGSbydbcTE6sQyafj1eAFDZnq9QCCeR4HmaRh41hAqRTovaVPGuZZiYjnnqeKVzgdBN",
  "key20": "2dxtNCEipobniyJL2TRSAUJAA6HzvccyKV2a3DH1MuJimPDgxd8GzYA7SrJU1S14fMUJDhzBtpRcCwrTBSpa33So",
  "key21": "XEAHhqCDHbE3BvcNMBN5D2bD9UnV9onp7tKR8dKssooNiLSWRU6ARaSHTUATZLG411zjFE2bKzYL2RRGopk4hoM",
  "key22": "xkED1KEBDZnhjhLz6UeHTSvh6suUDpz9yjE8k2LNrvhho7Duu2zkJstFD2uKX5v5BZEjBQ1kCnrAV2FNj2ErxGh",
  "key23": "3k8uKoZMBFU3mYm83ChQDVJQkd2Q5a8Wn49U6EXdpVAx943kC71PZE52rBq2zjYakhKuEkuFH7b4vur62kuEzRSx",
  "key24": "24GMrExtVinFVZ3sj9Y2gUPuZGvpzkFUbkw4QCfMyK9EWKcSY3W41ruDd5K8PT4xqikHja4ixmsq1KeAsVM1nfrZ",
  "key25": "4aXjBdVhmXbQpaJNoxnmYWEu1umZh9YzDx4HuXekqQbot6RvegnTMeuD9czU71QoMzeyRHrf4LF4VY51rHVzu6Gj",
  "key26": "Ao5pX1orKHamiC3N8r3Sse1ixBBmss28HV7WKV46FpRTqQYheaJ1SwAXoB4PZjjbTNruqSKiMa6MW3RHhwWdrnA",
  "key27": "4mpLN2L5QE8BGXT1rTNKu1Np2DA4WdgzmuiqnBcBWLuJhKozxfvDa4oRMwTVbtkNhJvgDHQEz2goevrTiZkFMJBN"
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
