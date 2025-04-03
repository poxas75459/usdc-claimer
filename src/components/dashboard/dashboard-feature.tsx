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
    "2vonShF62brGLLx7euPYt8xXD7EzNiEy7ZTcCnZv1p4fM3hzJQvt7K38Ww1KZRuns78qm1iWye5ipNZTeprHLecB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bz1518UVBbw2XKf6zuVo8YYiAmCExFKkHVE6jYzGTTutWNQhUzEj2wfvAwrtYm2scKJCCPsswMeWf427hSQYZqQ",
  "key1": "5U18YFxAAipYstu4BDkgrLWrXB6JS8MriSWmppfp2qLfPvCJpy4pWeTqUR8jNbha2xjxsCJa8oJ3uxzGt6j3BBk4",
  "key2": "4hmHnMadLBmYqsRHefLiTbTA6NoFaWCvqpiEHLYGP5HU5RELeVy6SVoxtRjgfNtp7DR1N7V1dZuUcsFG4eT5mHLR",
  "key3": "5u44XzjFjPPrB4yu7xawNZo1P2E3qyQgkaGoRFFDLd4tGUCvY9DhVRgbRJQw5s4z62FX4Q1Ek9CiYCnLN7waxPzt",
  "key4": "4Nh3gGKMExZkcw2BZbfXhu5eKZrjXARWWsv5HL7Q7o3x4shFhkx9n1toCEZJ4qtkAPn2zpUwEd7SCwCm9PEfXC58",
  "key5": "41tqmRYMrkLDNJSjnWK57f3NUubgckhQGTtRatLkUPuFUsT9ijeY6XxpH6zRUc4RpjVfQd3rzzmXsYa25ZneGaUG",
  "key6": "iyPCY1hBE3n6CLtiHFYoYU3p38o5PKioze2WVYgD3HRTcNLtU6PXjy3bz1yhDUJ2reqRZRapT39S9L5DCHgBMwT",
  "key7": "3K7aNbn9uZFWmj6P1RXR8bs41KvTHNjqnVCs1m2MeCdy3QyxPte5BMjQDxNS5Tr6eFus7o1Jboe1wv3wo8M4tk19",
  "key8": "5YtN2o9Qrf4v9tgDrRAfSf7zWPb1Fn2bJg4BLkudj6fskNA8y6eHGw41JwN75ejSqkK7x7KeYUJ19Lc8Kgk5qP1s",
  "key9": "2vZp9wMVuqX2r2kcZvEwovZ9EL4wLq5puh7boKN8cshvFgCQe64VHbTxeVTQtUNowrk8P27dkADz3bcpfawGJrzs",
  "key10": "47GZz2HBcyk1EwUGbwjRhH3RMnHdoeiMBp9RMWiFiEsWt3hbJdVdRjXKSTDgf8bpng6N2WthQfeoNxz2QNpALVtT",
  "key11": "8Dp3TaJkjBTvp7KoWCvTV7P9uPXdyNHQ2rT2P6i6GVMS2GSZRGPi83oXhdTCSqUUkXrrM149zoJjsynPgxLdKrW",
  "key12": "56NcaLxxLXzWg9YFiVgH43c7aEETPvZphnA3xKbFkrZupTBpFGRorYk38b3ubKDvrB4WSYj6aq54SXNy7t157aK5",
  "key13": "BSY9pttvZ2mnoPc31nXR3EpuRmtDqfGsWeRkY7Uev4audWiUiCLpFeKAp1zvf5TBPQHJJ5D9JDGHpUzUSo5AK9D",
  "key14": "2EU277edxAGvYQaDn3SrTJ6mNA6gEQZBd5DkCAUv2toVJDtpFseUacq3tckr6t2r1GBFR8PPWjHkdGqywYv3eamC",
  "key15": "4Gp2UzUaPLLa6PG8Yam1UkTKeKF2N7QU9hNaCjFqpwQo4DBVkTuf86z55i2bkq2uWPxjPTPTZ32gVMd9esH34S6u",
  "key16": "49qKRzwLRDh8saFmoJK13AP4KDJWD1FkfwWgyo1DLN6TMZUzsmauzcRsYGnmeJ1CvUyxzA1JKVYWgeaMC1gBtBkn",
  "key17": "4GifRq4afzpqHN5ZBVYti6eBxdUuibsqBRWnVTnk5ZCUzedExAmQVbdJr7FL6RMzCeEhbWepAMGZKrbXRq5cZ9Un",
  "key18": "1zAotUosVMAXpCgM2Hk42he8DRx947mR7sDSimLY8qj4SNLKRSZAnT6p33US3cvg4oAPmMkZ2bBEFuZXf7Yu33H",
  "key19": "5NTnQEMf6yNYZfj2fDwTJZW3XQhMTDTWmJ3ZubJRG3nijGzRGqHP4kkkLnq3WhtFKekUjoT9PnNEf6m8WZ5fiRZt",
  "key20": "S7DhgzUJHfCQ2ffv25QDhu8VQGDtVTUsA5rvXTkudVvQiJxXcvaHrz1v1hFqeiqZbr8AH773gNTKmSs3b3HQkv6",
  "key21": "3Uv2VpSCbwZsCv1yRMka4enTwQj9fDBzmfnTjMN3TCmQZJtNAq8BkLef7z64heRBq2YfBQWFDMbxSFKjxN9SvatT",
  "key22": "2eYUevTAKKABMzjEG4WVvMgfbWAPzyUt2ez3kX5kZrbvmCcSmALqVff7V4vAwyejkk1pc8HHWASkysnHc8APkZ2E",
  "key23": "4gj7Yaw9Fgt1zcp9dVdzkY62aAJQMfZKFKGCMgB825RkN1ad4RjdRFwh6MHgY11KLLJQrPS5wr2WduMoNZgeDLZU",
  "key24": "4VFgPGTJn1NREpcC4pYAgHZNQz1rfzVPFYV5PuP6gk4BbnKhzJMNr5sqsy5j8vdmAxGtrxGBRWFtKyyv2BQ9DCAb",
  "key25": "5XdXPcfnPu6iDYA6ATq8pUkFT9LhWLMAf2zJ7b1a4CqCpUPcWJwFhge58kVNtyxF5NZPVHYDUBMHr4oaXHzHq5oP",
  "key26": "4jYnK92EBVXKcfDQ5zjNGLtU7t7iYm4xsxG7MxSwJDwtyaKPepuC4PbkPSj3PdCBQoCjdTfnjrD1pwha8TzJeB48",
  "key27": "5zS9KmjXosod6y7Mta36zmtWuBna6ydYrXq4UTVi99W1vJMeLBSsSwPXahPiebYaTFHfVeDXgGMSqCTvdjHavLPg",
  "key28": "27PjYi1cV9BxQfzexhQ4YS5zHyGJfALpxmUXdGBjWa59v5yDzf46bHpSteDv7rsF6EDwysUijz1mpHSLcEVgvJR9",
  "key29": "2w3s7kno5i7Kiym94bJkFJisXh5Kx8uX5TTno9kZGNUochxUtRZBfzVNd4v74aJQnyLX5gv2zP2Bgm7FGXjyoNwr",
  "key30": "2sHgtMqZ5C677WzNKWrkrT5d6PK51nkCd6kZMiTJHS5xqymbv8w65HKCjFczoQbWDkzv6M4nNyW5pkz9DnQrijXc",
  "key31": "3pj48gj17enNKJNJxi5EPGt2FDrsNZAFNRkn2Zrh5mshFM1aKyDduV2FLvqEP6cSvc3o5c6gc4QgAqSJCQh1Has8",
  "key32": "22noa6Ue3JC1L23Sz9HZq4aRE4R2cGSxhnksBV1jVV1w3qMECdd5etNpFFtoBakFtu9wv53wM2B68mNe8QeAvcoo",
  "key33": "5E2qyyCWc8xmMRs8yPdzMq67DJ13WwYPbjDe3vzbEs2V4FM8sRRPpp2nDEpGE5UEWUNANiaS4R8zarnEhiYjpF34"
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
