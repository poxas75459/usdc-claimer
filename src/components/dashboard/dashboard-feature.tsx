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
    "2FZ7NTHvJ4hGmKk6LjUdj4FkiM6NLeXjmaree3N6FdvaiNYwEhaebcRFpuAASMwGB7H7aU6bpU4M4aEyFzAR8zGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmzKPC6zPXQbEtGvQY7ycGhdJ7R6m4nyYZp2MQRCM6KQyqiFKfCRvA8dWQxerGA8SqkxUNL6xCm2vd3XTsTczDe",
  "key1": "vKT4PDvwM7kSt3c6VRb2KpJojh4tSGGZ3BPFT25BVrSdsiryiQhsnj8cfCRkv4y8WHYwPn129LJA3XLYojvkua9",
  "key2": "25yeZvDJgospmnqRXwhcWU7acBkxxc44ZWQC34WCY3op9Z3d2uE4pSpq1z2W3qRXwbF2GBCe1uTY9rdMfXyKBWi8",
  "key3": "2tcCCzAP3SooMm5q9wrTmqTExYJXUSnStxcxcA2PvxqdkvqY4tYHeJ62JwCtsw3Ux3zJLPbyL7DYy4MetqQBDAZF",
  "key4": "41FXzuK5gVZXLDABVykdk45MwkbenAzkjYJtJeHyU6DrqJ9F5UCofjzaviQtFAkXTsx3JfpFLXX32gvmV9vxpPS2",
  "key5": "4XVCnHxYvYkrAAs51CPgKoW6Tr8a29s7V3JZQUGkhpSjg6hQZsywoba13BFVMVznZrUzZiyAcAu3VapsX5kL4pdS",
  "key6": "57pKBjY7WPYuxfczZZfeFs1CCAjLcFRLvdip8GFj6zMDTDgCYFi7XwLJraSAuuPdRhS1RGhZeNNqJudeqxTotXnV",
  "key7": "4hTH3m3sXLzP5Dx4QUm4dusWNngWRDd69FeQjre6ZNXm9HM4rXvDfVLoqHFspU2waRFpgkqVgj6PiKhrWTsiDEtF",
  "key8": "iFxccETQCunBu9VLg6Kkfae1Y4ja9wxLZWPS2RP1Hody1oB3pK7jVwRud1Qswq28PdVyeUghi25rhwYsJ4ZNWnj",
  "key9": "3rGpbB344DBR5CvS9vkRKXL31RxdUoauiHR7E2ur87KtN2LGktkqeSBaRdnqzJWNjYVJAkKZi2k8JrhwfSqiZRey",
  "key10": "5pMqUbKEopRdfj2jqeYp27ajmDcQFekvmRo5ixf3ckfu3rkiaGBg7Z2HTN3jDJ2vgFi8e11aHrjuqVKjJi2TJ8PG",
  "key11": "2S4Nwy73ReWRWQtbXQ8anv8QinXr92GwBhYw6zJpQ9sMrJRcM1HpmFM18rB24quwHxFD6aAPce1g8zUQhWV9MM6e",
  "key12": "5NchcoH3Gg12B7mWiSbUDnXgpkkbrFAXvNUWF3Zz6PxxzbPRYJTBXTPnqKP8zZ9nBq5tCks3sM3drHAbbRtTM9YE",
  "key13": "21dxA2G1i5FGGZWDJAAa82dRhR7Kn1Wxta8SoFk73YjkaawqK6NrgAWozVE8BNfs5eiMR3tPq3h3P5Snp6fXaJb2",
  "key14": "4h5EnuPYtHrguL7AbPchiN8ipaQeK9iawa7Wk62mrvPG85YZqrXrhoadEPXMJXNREb1HFy2Z9X6KyMZiphKuMXx6",
  "key15": "SbcjjWN8TFewhUGJXp4VpUnXUzEN6pvrBEHQ5gwK88LPTfWEeAHzZHkRV5a1GyqLau9Bv4hsWds95hWjkpJS6XU",
  "key16": "4MeKd6rEt1bv3YvByaGKFXKhSKHMutz8P495d2eTnLsDzRxh6kwudtV1i1YbkWSBbv32ekzkR6kZKi1YqZwFZp3G",
  "key17": "4HMpJRpjbtQJosASMNddaPpktRthkBaBnAyqrRCCrNAuGWa9ACrHEfm7VPYs4MkURgFFj6W46eN9cggjfvYZZHEA",
  "key18": "3y76eDVM7PSkFkWqutYxwNzDsamcu1BAvYPgk8ZysZVUtp6pE8hRFo4zpuAV6SrDom7EMj8PzAa6AWcu56LRMfj",
  "key19": "3KGXJJfLH2k9jiTm8TmexLzHa8v1UUh5W43oUUZaaSWjkF9q2kzvgQjugxJXKJwQiNpLUsZftx8YKJhSPvG1yFEC",
  "key20": "ML4DPxrRYCH6kKxghM5KYaUeHTKAPQB6yPztF2hGi7MaPVkW529fPCrgfXRYB5WVX87ch3HtTqEamniThhVgvr9",
  "key21": "3WosNCPJugMFphpDfKyuowAAT3X9gRyrjCu8NxnjDggRspfUjG1iJ19iggsJy1MecgEgJtpaxcpoyWkSXBHQ2BmE",
  "key22": "5vbiHHxpPu3o9Fxg8HLkMcEx8itKbM496tzkNDL26vPYoe8pV2wqr1by2j6jRc26GPH64YQwyTpek6JfTTrNyXW9",
  "key23": "4h4SMQgZUPw1S2LLQHdfA3c1KDeHL2MPtK79bdQocFcviJ8NF2WwR7DzdzULyhiH8jhCZpXuLBnTTqso3sFkEWDp",
  "key24": "5HV3gSVcFksNk2me1w7YkvWyE7bqATVqNqBrReCY9Hx7WhHz7RKWf1G4qSz9XqQ5b4m8YMyRYupyLyJyfaJ3qwZL",
  "key25": "5ZaJsi6C1zoBq5LNvYYyZNR2Zoray3kZymuYGYFfeGXTJbktHFHHZjJZw2QRdYHCcaaYVHrFo2oVViFiXjPcYCHg",
  "key26": "493aWPz2CCvSPQtwRiCJPf7NZbporX424twg3X8fTvfW7Q1a5zM8oqEjLRYs4MFtLUbbmkMcA7pZy2T4CdLNzzvR",
  "key27": "2t2sjw8FdrSiKyoXdFdKcZgYE6CJ4afvZ9EVAqgPtuTr1bF1aGLddriEqnUg3LYFsbTNrRQFtM9nXx5JUMM2adaT",
  "key28": "4YxQcTc1h6pqUDvX5oRnenGDSeaS3f71uev6eVNKL85ZvnHMhfT2emoanuwzRvGhhP6rYfpYKg6KXUbHfV2keGoD",
  "key29": "23LbXj3ofzfCgR6zgzZUUc2ggoUdyGTE2VB2cdTN5ahhNpPRJdCf9ruboQGnC1GfHwWg5T6Qm6R3QVovb42FzrkB",
  "key30": "51A7aKkzwzLG1GGwKYxB4KCg9kQhmtSG3A4qrMGjSU5LKA2PaV5aihR9VLXCuS2u5zB83iYDMh1hhjburkVYjjAL"
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
