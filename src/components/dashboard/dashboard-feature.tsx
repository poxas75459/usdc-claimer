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
    "2THqae1so1DRVrzw9zxXM3AaZkUFjZ8CHdB6wsSic33oNXujv4oYr5NwJJNAGpsCddwwssazJJLM6cMixXu3FuxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWFhHK6eNtYHZDaJ4WEogAJiGryxRdiX7cAVEQYZfEf4bm59zFwddsPcR9idEGcwqCTj1rV1VEApYoGuCTuDGSZ",
  "key1": "5cjPViepzg6WUdQv8oHttKRBrnhdG8kX6V1PGqcgrjynoUM6DovTxQzQ8k5nA4LjJkw719MN9XbkuDM77SzqCd4m",
  "key2": "2yhEfVzRZFJo1ydQNSeo9vppp47upSp982967S9bQJqdpsHn8DKarzkYtHco6u5EdmpjY5sLU8nzVALK11Z5i922",
  "key3": "2Bo1uhc377b3d5poePojMwqNKbM1P2cLZYgdS8oL3Vj5Sg7dBP13yiLLWev3eHawQ6Ji8dPFN1FJwb4A9aDkS24g",
  "key4": "kxpvCdr6VJnae1Y5h1JLWSSqcqn1M8DfURnFq2fgLH9cpCSZJfW7pg7jhD1AesckV7RsoNqYgTjt1p3mS88cCnr",
  "key5": "4a9nFZfEw2MqiLSHwdS4gn2FMC7ZdySkyWjkXT5vUmgxvWempWtGauHKf613GGe2DxVa1GZJu8r8yWX3krRMKBqF",
  "key6": "4VBhKsTZBeiHZvSNChjaG2SyQW1gXbit5j8P1GCu3VVYaxnQ4QEdc5JaXtiyfuqD5dEYrAPDDAZYLtzE8piFUgme",
  "key7": "239X1RRuTXnfMhysnfHKuxfXPUJKrmhjQygCJh9j7iE1gAc9XW9HjdttZFvDugf9hX5ptRMN6y1R3K5fpRCqfSQC",
  "key8": "3pViSMgdBspn9QtHEUJuD6Edy6t7UmuyxiA9uXbt4FcFB9nE8LmfFhWcEmMkwjksR3zXBZw9fupKPeV5KxFkPtHm",
  "key9": "2hQHFNSSHfY8YdPU7xG7ArfLbhNPKJwLQyTig5KoGkv8r7nKTQF7AiMG2Nf9t1Uc47unUVi3m4qLD7qicuWgoNJD",
  "key10": "2yec6gbJXaxoNzzsdV9tGYoGYBn1JxLt75yACvi8neKoTpWeKBNWVzHbTSH5NdCv7zTbTnwbnYtaT5GVozQyhALw",
  "key11": "4nXzpNCjzE6xAq4g7jkFWc4ntikMdew6cUY7iqQZg2weL4Yw627Qp8S9koekuMEjxx76HhvLTVKuaE8k2CecFEBQ",
  "key12": "5rNWQ9jPWkQiEnHhKFpX6TCWCJs73Ppvtwi1YCznrZs5Cm9HdGqsFKYR1Eaxs2bynXMSKNo4V92Xpd5EWjW3X9V5",
  "key13": "5aKzgVQsp8bKwmU38oS2csRjfrm36RSxHYJUX8Anqy1wo3ANGyEbepWsgWNAFSUTQVyaxGJ1yJ4JSbPrJKZrseqh",
  "key14": "5vx433VfKG21NqGQcq2RnM6XzjxjsoyRsV85ixJZaw5WFTXmJNpaSPkv7jXiBcdwM8gHpS7rDyFr89FoXgH4K42g",
  "key15": "2zbdjQ4LZ1FvcRBGa1eg5JQjgbhTmeKkJmhLRmzY7vvtcEXmXETwzv3y5x9eE4vXZiK5ix3MP7GUbNgRvRVET2HP",
  "key16": "4s3RoWcqRyWVay3uWNyuhwtHzoGddzXKyqPzDGacAaxwmztWUmapUHNLjM82GRLSuJ1z4cFroTfTkj8uq8pFtLhR",
  "key17": "hoHXjcGg5rGF2WGrtMMc8ZV1NFRvNAoWjzybWXQQinAv7rdwwqZn2QkzFwqLgDpb1J9eaReys51rWJ9Q8BSXfJU",
  "key18": "4RBBkAaHzCzcsLZfqxZWVAwakL4HxsxyvKpezRKSNrD5y7KXHYJQPqXEfZFddqnK8LegiEYdsJPQu9zFioMa538o",
  "key19": "32aZSYs2eVNX7U39PVM5q1wp3TV2vdFxQkteoexrBKC1MsihtTNibmPSKxufKMm2UQhcppdg42Uns41JGc6wN6BD",
  "key20": "2evNhVzQtwLZTtua1pKGTdTZumy1XCnPM1vPMHRNgNRnW3NYGJF9gRFk83RvQ3CPLRBFVxzFenEkUghrQLVaQ59Q",
  "key21": "2tad1vWE4BJZPacFsrZSJrZM1pSWNTBY4ULs22FBoDG7gwfyHZJgu1HkAc1eTFqgP2R9uXfhZNVgTAemNuPJ7MvY",
  "key22": "3GK2pi1nTqTnobeczjZ4rbFaupdpEAmvEKkaJ47K1z5cARSVY6VRtCP5fbXzCQTi4Y6CWRrxem4CPLn7Zic3MotH",
  "key23": "5qYLuWAdP7sTsVzo9SvuaRj32phCoRXntcwLK9FwFo2rAh4oC1pTGCQpwuTDfQgpdGtz2MowNB3bHeZuWMPuVus9",
  "key24": "5EML8TAADnCtzdVGN2vqGRd2fgaC8yLcV7MVHSbCzVJWjVM821Z7uGuX7G8NepAh6KmqAqy4BcqFczggVXdZPu9x",
  "key25": "3n963ZKktG1k3GwNVnu4y2jnTbm8CfjfVpWmUWhgjtZmMaXD2q4dEP4bJuQ59RENpNVK8tUNs1RNrwauEbMN44Q6",
  "key26": "5BbSCsZ69CMrUgvHVc6dUSJy3K4BAw5X9e5DuuGAX85AHLeg7Kvn9xXzQr6kbHj1HTZKKmjXkycwaVMhX1hG2DJP",
  "key27": "2XLeBkZzLQngwViHXDwgzipm2Cvoiu1EvDWJuULisbK5YQBEQwmQVZS8mAQdC44hr2GSoDKwJLLeKp8vYhNqbRW9",
  "key28": "3WVnJ7LS1DZZxhix9CW37sMwehzQWD22P4TFpCCtQhaPnV3DCSHD2UYeQNj2aDHT5xvJB6B8Z4B7KDrtmoGZsnsT"
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
