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
    "5hJJLkbeEcXBZrwShhqaouuEdEsz8z17nHkk4NRbCmL8YBKdSNw4y2gKoZR1ASkvLa6JDH5fJQbHjPZNFsBHL4VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPuRd462wqk9qQoWWGHUJBN7MnUgnGKJ9Yry54tBoHCeU9ypH4iK9iEEjyE169sye3mgxqeL2HbZY3fBPrwSYkJ",
  "key1": "45RuQFiz7EkS2SBStkU62GErrYfgHpfKUE5bQTmJ4nctrQyS6hfqadieoYZBoFtG88xSK97tYgqvBweobgw7dqeD",
  "key2": "MCbNYEgURifst685ThWq7jMd1Ehnir3dYeA6N9JrA53ojrm5PsGpUbNhhetvwr4FbEtenWrNPkeECnWHP9YRVtT",
  "key3": "4feD2ty6oxxgKXwudXqNdRmUtJ1oGbwGMKMVWqiWx4vE49TBHPg4JKhemGp8akoyKhJKGgAkbg6mDDHhPCnTUzYv",
  "key4": "3LcYvdg8S8VE37RL16vjnPQKvzCtvvppnUDJSWqNfSmgR5z3Uzjtt7urKYh6QHxHQNTVrteTJugc3m2HwNoZv8GZ",
  "key5": "3UfrfJiVJuBrHSbySfTWbzsv2oMUvy4jt1bX8Lgh8RhNwwwusKk3VSzJadVppeRx4G3t8t8kLH4Ri2JPdptCFYQ1",
  "key6": "QB6Td5a9VTAKNVkJzZLgQkLEnWtQZQHtZg1j5pf2ck7pvUJn9fEVWfGPU8SH6FhuebFtPdTTFSV3yRbgNrpAAhQ",
  "key7": "4gpq9EmY3MoQmGNVmobxfR16PZaM2EyRb8G2JEZC9oFuCWumzAs9BJJpugijjrhHKWoAR7EZRc5yFk4cvw1auYGP",
  "key8": "3yG4US6SRUdYZuWXC2CaRmrNoL3UEkdag3wkX8XK1dtHLkwhERMH3Pgw7Fuv9an5BCv6jb7VV1DD1DvgzCuFUTaF",
  "key9": "5sD3rgUvV94YguQdzBdBv9qw3aSU3jRrc2TMa47nY1LPYcNo3hA3ixMk84mN1HdW221GWCpBFSXMVLFv4aGN84re",
  "key10": "3kcJuknhqxkf1HkK8NRv1sjBdXeg5532CcrxQswjWwX2QqskwCBpqt4nLjJADE41sGyH2ZvXonzTTLKHjNDWp32i",
  "key11": "tjzXqTonot1LXTtqKeHgQRD3xLfByspo1zkmWV4ei37DdxLGxP4iQccae9jnzQr6EzicnsbmH5BJTqG9mVhKqRA",
  "key12": "4YaH2Lp9r3TtXvbkfMXP7NW2gd6ASSgLU6cYcNuA9dzZofxPoT3T5i9KtJHZnLPpD8ujwiuor6QjvWwAA9xgmJyT",
  "key13": "2gkGce7gRvgBcFPQyP78UTKqoa5eBR1UNoiFvFE8GZUxXmEsrDAVLVs9kRxwqZFrN4LizwFwzAd4nZaoudKuTLjD",
  "key14": "5uJrDmHjEvTvpXLF5vJeCit4VBcbixYGiJhzLE1uVUQgiQsULDeC92XyzBJAJAfpquyKYt237PTx2DAcG5ESWsLm",
  "key15": "3BDaXnJepba2n4AbBgJPHFT8JvKRdfJNFkGrEXAmyWaY3pUgZHjvAVCj6X1Wzx5RVZ8dtBGFFRLopTVZew1ku4iL",
  "key16": "28bekg2i36v5wforgAuLRYZ6X5kttMzPTvcJfVWH9W1C7DMVdK4wekwSmA3eTxKWQ6DtBttSovCiztgVCYEPvJEk",
  "key17": "3S3CzgJ4oC9boVFfHgHXoyViVdYXmcptB5jazsKNeXHp3YPpHyUZNq7GfTmZ3pTwE5Dux1MyN6wXQVfFf81GrHTT",
  "key18": "2zVfSd78xcfVS1jF32PCQtZyJqty6Wm9PA6YmkmLBLEJrFCn8fH5zgUgQcqqi3EWqWSh7UZpV81uCanQe6gzCqY7",
  "key19": "5yJwWwezfmxWzb1mdmPtZBMUuRypeJxr4APQRpeUhQ3hdKA2yboGjZTutcByBt457Uk7Jnn3RubrLNgSmDHGJUkb",
  "key20": "4o2xCvEmnDcUJGnHh9R2F3iKXtq9yhT5vTHK3vZft2xA8bmG2GHQN2M2ZJ8QFvkcERg8UAYAmM9oBgFj3PkHzzps",
  "key21": "L6NjX4Qi2i9sUft1mgB2c1CzcQvJ9KDPaX2HZFWAoJBPgjD2KmWVNLQjoPx9JfLtsvVzuqqzmWULMpbN3xYeefC",
  "key22": "3J2JeGhaNnEX4YiJbonG3BqHEzP8yWCNU8gqTfLFiKT5FFS2CjZZjtKPVw8qgS2rE2V2w7qBANmPCYAzK38xj9dG",
  "key23": "4itFDhjNLuBNLFH13b8dHWtLfGHDNenSy1zEqUYvAVx8UYs6J82A4dZDCQMbwjL4nFpMJaBnJs6f3jNmCYP4peG5",
  "key24": "61PzfkcskYSk8NHJDVUmvfe78JLafdZHLFhcQPc7w7YvNkWCdaw21fDmu6Pmavh9BivLCauUG986br13nmZHAgNg",
  "key25": "3eH8UB373rnuwo3FH6apVcgogKC8yfWXHHzNKRbxHbn5Rah3RXpfZoyfsohAkEKeh8YCQkN8J87rzJMCoSdAuea1",
  "key26": "3X1wXE5QqwULvYhnTC5iz54jBC8bgb3PoptjC6mnQkbkhrGgaTLcH7A6YMK4eEEbsp1JQZ2JHGvnc6iuRr4BDyyj",
  "key27": "46yMNTnJTW6uBV4C1KjMtDrzb8AbNtMSoXBSXE2yXUtpm4EmaCA4zLj3rCikQL5kmTps4PXwNxAs5yKig78jgHai",
  "key28": "2PAWvpS2g6VKxMPQNKiC45yEaPUmc3hBAyc6SBya3fiK45gyGZVeoemNMRRKWG81CEDVPazQ3tPjBEueV3zGyUvR",
  "key29": "2rWeDcaSrxzCh6zpzJNt8RCbKP5bK98QH2DA2XpVGsJ4zE6HvgTsBRRUPGxybzsZy824upGkYiHogzRyDQgt1erU",
  "key30": "4vEzPVKXhkG5RcUR2LvznVm8HHLKXUzPfdEutEk6rBgLedkhBh7VygcistPae47h2YTcLKpRzMEL1C92gY8KRfwH",
  "key31": "kE8QH1R6aToKxc6xB24UPs6dd4McN8uVNzyyrD9L1TPaCPUTNQ4ifdKyWXzvyigU8kwksWW6KRtqhaxGSjh7iTG",
  "key32": "2rC9PhaimU9nKQpAVtDqBcFqCr8UfPwCtP3fLbhTSMQhgX1WBpi6Ev7jNHUKQh2bAbLcqJGxzvrWjFu6SRNhKCiB",
  "key33": "5zrmRN3PjXQXb82gBUiavccvnQw4DCqrgRTxztZNqjLTuCeGiR4jPRWFWKfmxUFNUsL9BdBH1YuTumGFwouPtc8D",
  "key34": "3voSAbWYCiwEEiKp4Un12b7gWWSzQTvfjq2WuRSzKaZrXV3udNH42GVLRMnZoDPb3GpJqdARgXC7deN9XqzTUMZB",
  "key35": "4bNbHNb3mDmH83bq6TutAxyWsMy8xmejDoJxJaAReLNoy1gbk5RjJmyfqpWS2e6HDcN4U38VmXr2Tkp4CC4z9kac",
  "key36": "3ZD277iBxaEmA6Zns7SDTVkb8bjbpLFkx3mZb7XDEAhLsuGrJ57c6L8qU7E2FmzAMXn4tv4A3bREGNfsWcjLGAXW"
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
