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
    "4eEDeLZj1QNkZb9gxnH1t7FdraYBj8cxeUy3dmkncQRtE37wHTsnzggYjLohag9aCfFnYofKi8RaWA1tFBNLUQWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1qwWWLBiwmsTXy7v9BxYGe9yeSwsj8QjrKuLeWTGESZ3Ftbrjg18JgbFB3sSAL7V44m9fVjjcegENBpmoREyvX",
  "key1": "3jQfkXYpJzL6ioqpmfN63FeJvUEg7nVSTVABHvBWmBMVMSo8gntvbKuX8eU7h2jY3QKY9G1RQkdqVfDhZEajD36g",
  "key2": "p3obBBbgK3Fiy9LenTjZa8qZZbTQ9Q2Ud1BdXmgSGdxfABpkCULfGFmi5FFFCR1u8XtcpdgSBKs4UjzAdqs9s4F",
  "key3": "3GgKt3FuFjnWfNUnwisqAiWCcT7GQLP9rqMhiP8qDfWjDZz4r8Gf85hHLCbFiiaPie2NDvQxgp1miGFo1aNCg5as",
  "key4": "4QKJQsyCr8ExAcZjnZeQpd1biZ7HCmPW7FtmnRAXYUaZAFDufCxXstRzVAvXezqhamNMev9M4wcBR3mZkYbe69N1",
  "key5": "4baJbGpRVDRzc37wpWVQEtZCSPkobzAUMr2SRnFrGyxhFFcmxifFmpXZuEizbEEqVkYy7iRodhnus1R96BQGWcYG",
  "key6": "2Wxwc1cCfLA8poNxo8e41eHh73us6KoNrStJBBGM4rG9SSTntBh6kLT1onWNA9qH4xSBhGqLNTRifWEXqT9gz8RA",
  "key7": "3R73yiUUtNzvEoyPiukZK3kEn4BRa8U4psjCimZVnGjafq3JQhnT2vqALkJBvPdvnyCzQRoft8c9X2mTNJcYhHr6",
  "key8": "5BpTTSVq6sYFw4cWXTvuoPTiUxqtEMYvW2aTFM8PGA9wEq6honVkrCxN9XDZ9B9ofDy3SzHGXET94CoLv8d1jKfC",
  "key9": "miJtnZCYgQpGkwuZCG36FBwQV9jxegem4Gr34HYmy7QguUS4AVisjjbr1hDycB5GZX8yuyjS3aq6FkVj4vUE5DW",
  "key10": "3kc4scQNDmQSCSDhnq1Z2TP2tHoy6maRx1pv3TiUgdUgNqeU4dNV9wDgShzEosCofKePcVzg51NSyij4FGAr8JkX",
  "key11": "2UWf76wqQghtFZj7Tyz8uGfddFKbwF2yGpswZww9tyz91Uw3rFtHLmFDUr6wNY5qdbBCF6J7URALGmRYD4hx27Xc",
  "key12": "5GAPANUQFZ9NPbSDmY192Qirb8HQEU2jUTceA4FVGR3ayQsUAnXH8ZJVKxP9k5S577eeUKeG7GC7wCK2Ld8oZR4m",
  "key13": "2Q4ycxvKPPWJsMrMhi3QNTCRsTDshcsnYUpWck8Z7RctUgGaVBWnFV17c1Bx3kDFPvH2FBzCuzXhRSmrG5wMri4i",
  "key14": "AAChZVXCTLV6HhMpi4xHAzcYfhMESujzrPiLk3uZYLQthvoA8oo6davQrMVvxZGFmvTmJJF5AngR7v2pe2ET62N",
  "key15": "57XmuPyE4nuj48BucvyVTtd3G9B3pd89WCEkxCNLHsHvSJ9APVj1jJeJ1uqcMZhaMT4ZSDwCLnAp7B8kU9CGKvxz",
  "key16": "5RJqseJHRmUQQJfhDVr5ZLuNCvjpbSun2kPm6WcQQqCztkuzE7ocS6XWoKMX7PK2GWAzvzQvo7deCFMXSeuHDrTn",
  "key17": "31RmkWMmeA25gtkwvYuZcXYK6G6PwV458ZDEBzx5N99a6vpGe6ctajf1WoG18Nn6Pz3nEkyG3safaGfS41d6xXxR",
  "key18": "4uVprK1D9XDb4D4xTKkYVohBH7voUSw1vn3XbtvL7nCYFK2ikSVTGpDbNSwucYTC58X9fN759y6LREXRJQ6EvHQP",
  "key19": "3QLQRr8Kveq8F1dLKnZYGuL29XnbCm11JYSRqsxKLJSvcQktdczENgQhAydLsTcGVu1zVG2Kpr96pV4u4Tsr1RfE",
  "key20": "5Q1Faj9ZdfvFb4Ps4mwGLzgHnKXLkmA4b13foYsxT8vfk7UVvepEEPdehNp7RVgvXZAPcWs1hiXHunJB62aNKp9g",
  "key21": "5JLSJtnm2d3VtYPaixVKg5toxbUYn8jM2uuNG4ZDR5YBMUR4CxNb8Hs5DkkgsWzA34bVQAwZoL8WvYmh9Lmx5J1e",
  "key22": "2PRQRUwPAVTTiqVQaGZNBd4urBaTirp2sQAnZ561LHmNPD5krvE8iyky5mj9y8SdfuftKEfokN7fgApt5zufcvdn",
  "key23": "25iVFQQHnrUryewdG7Um3wqEhjrWBm9WjQob8bxVKNj23eM8hUS1GqgykETjvvFjvvkfHFEQRdh9qoekQS7VG3Ra",
  "key24": "Joxkz7Vqnwhor9NaRxWK1QeuBvBUV3jEmMDLt5eNqnurvWFKPFv3cJ4S9UP2EpZGEfMfMdibSGmNWwZj8otTzme",
  "key25": "2j8WzTqk5fcJSyu1Fc6LChxEYJmzrnbW3BaQ2TFATvv8fnTc7UerVoF3UyE9RWpXYZA9GSk7tD8K9C1PzPL8o1N6",
  "key26": "55Mtmbi8mqtwsmJBa5vwBwgyhe8ctoYFw2nVEeY7JWqFtXJUB5ZAcfSeEnSCWGXDFRvrcy78oW3cjD8bxdfGzJGY",
  "key27": "3EyRuNeen7gfhmwrMpVojuR5G4FtDRCe8pn8kibz19N8h4ZEtVvarAXviQdq6BZVnMiE2sPTHnUmurCDXhU98Dxa",
  "key28": "FtXGo26ScDUfMMEZMTdUhc68XNz5NQxWw8Fh8SCzAPVqQrApPqf1LdaboRvbxzVWNn6FbwJzntyqCBivwRj6gGd"
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
