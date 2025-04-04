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
    "2ovvXXTVBKAweHLfhwguqeFmYngHFnu6scu2iiuSSmg8bVpNXTTS6wZue2ZG5pmvpmc6GD342fwa7dmLRpTMMvqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2verguf81zngmucgj6WbGXBB81Aj4cWnWFb2kjZR4CjNefPMnNBL213gyYYxj8nTrqrVvPHm9B9B49MTCL9RDV",
  "key1": "5WNSUcsUJWAyeGhJeKbgD36KWfkkRWAw7fngxvLvozTbFDDjmLXsTUmb6M2ds5DYHmUpjP5gjuDuNgT6EqyZ9qUL",
  "key2": "4vne2Yi4Eyxf1F1tcsaZ3sStqiFzWcjXEQxfurpJMmEg5Don8sxFSCsEqzQDhVw35ZNHydUuSyCTDDWKXxkFDuUY",
  "key3": "2MKSXGNp3PdP96yLbLs1L3h2iMErWXHYe1z2BcZxLnQ68agS4HgvNQqarmeLFQYDmWyzM4L5ZYZ1BQUpRUE3n6gV",
  "key4": "3gdNoq27meNrKDcYjJfAhYvrCyjVNTrwTdk9QT9W9Wh9edas6SAD5XL74QiNrqEDHnM7LquWTvRQzhXYyx6iZgmH",
  "key5": "5NwaxzpUd4fZCmHECJmM2wANaVmV2cQCneYMWPDk3erLJ9KuHjatSMEBauV8w8GmWueva2NkBgcA2PHWFaqFSnwf",
  "key6": "3o552ynDLQVFbBu3j62vnNbkRr5xenbxjxd8CnYsaGhiMA6TkvFsn3vfrNeq1ycKtmzrMj7FWNAEVuDJ6uh3QMrp",
  "key7": "4uU6ReCDwLHnTYtQ78BK2XU9eLxQzKTKCJJrVjCqiLAEXWPebxddPDQnCtSyDxvNr5i1d7164evW3zUSZadvnq2a",
  "key8": "4mWUGnPsmkMjfZTCuuuEN5coBMgsGJ54SQ4ssmnJ5yhnMYwgmAanXDPEyLvbok5VncUYR2RWHYXt9HEmT7rnZBM3",
  "key9": "4d2dNzRJyKdjVkp1UA1w6urF2EcewM53GY18f22eSDUjPaMhZkKSbEamp3ShK2YiMhJDWetQq8XoNBnj2yro25A8",
  "key10": "3jHK9nzmjPzifA9xUaU1r1uNYSXEqz6g16y5Miz2Yf1TpxFCA51B1gwXhG7GQhxDruzEoKPc1qd19KQ46iEyDxmZ",
  "key11": "51bzfSSL1jeoLeGFx2KPFF2kBgpmTMap9CPr2zpfdsXDA8mcGJoRcvZRpjoDM2yThLxqLpbDvdQke77hqmfmh5Ft",
  "key12": "3bMfw3yr4uAcxkZ8wdx9wVH4cMZPYgpPFrPxcN9j5fDAEX3csFN2oknfinxmftiDKZrZf5PVJjsYFKhx4crzuBXz",
  "key13": "sV8XMngk626H8rJeqCTvgfUWQoXkXZy73NWz9Hp6AE7U6fq8VpfoQghUwVv73qouRph24sMzKm2rNHnFCUiwDwU",
  "key14": "4xkbAPDZQXTStgUGAFK8JpTsqjjtnMYMyadkEuASCE2A6sfmhUJUQB74k9xkZniDYWbmDGepmXKF7opkNt8vWxRc",
  "key15": "4gZ8cG85AJfs5hKx3p4RkkXbYbvbXst9zQNgk6VPiq9bh6KSJpXXPFVyzFuLKe8Q5ewvURDXZMTxGLAhPbLuefYG",
  "key16": "49rXHBU3kbqXK1wbcv8cngzyWRWPebP9jFN9pK281aR3p2KTfDdTouaSneWwZcqD9JHJj5dBxvWZ4u5JRMisZnEU",
  "key17": "25Jp5bWvrbN4Qcx1gpvKb14HWnYy8G8weYBeDTsZrNp3f9GuBqbkYQfu8yyaiBtVV5jPz9M1URTiZJ8AKKuZYVy4",
  "key18": "5mi7vv9sAskkJfpvX985T6KMB8whA9nCLK2DCtNBxVH2jpTt3hBeP1kGN6gg1FjK9fGHnzvRgKtgcMnC3jTy9BkB",
  "key19": "4FrzP6cAfrcth3YPogbzaWLaiCKvqLLG7AFYC9PHao8mnyNdb5jrS5L1ZJ62A5jE9yMnTnhuhSZ13vHVM3eVEttD",
  "key20": "36bCCDHpDSENgdxXFo2pKxvokFyL4Dw8kP6nUCvgz1gjSBrrCRJu4WER8jE5d7pPMU2QszepFAqhHH6YBgPZ7RJh",
  "key21": "4wPpY4Lnk8RyNfLhAikDxvfi2XZKyJGZnXVNEvDSZUNFi77dN9N5Eb8fXR2VUxKTJrPvmoMve9GUJmHFtoFLm5Pb",
  "key22": "4USQGHx1B85UdExhvWfoV1FcBjN9KD2yemgb9fZFjGCWJ6obVWEj5T5SzHni53fhU5YjXzpjzJd4Y56xmNRGBycx",
  "key23": "5wncpBkwaKsbbBdAnh9jBmT7gjHQ73L2Uu2V7xQVXpvBoE1daJxpQXT2SYAMfMGqifNnsKE5djCWMPaj3qM19HqT",
  "key24": "62kfTDJs5so5WMEarVNUbDbZFdDm5LviAz5UNQbNmCWnoTZqNeoZ2CZQzw4f5MH7ziMrt6uQDTR1APX6ry6ArBub",
  "key25": "4Q7ofgRsmwg4wKtmmeeyRHonBBTgJsGqNuuEXNYtFUky9T5w8nc6n43uj9VnrVNZ215nsoGrYPLajjYBjQMMtYTk",
  "key26": "5YCdcQCjJRf8qhwMfjEBBNY2v7afXzxh9D1BPHYuWCY2QJ8PKiXc56bGEAmwc6furQgVjj4toBH5799ZVkxwzPC7",
  "key27": "Q9ecFkGu4T1SRCmFqiHtwXMbGbTD7PRUZWHLUZSJRd5Zuvoyt7UY5TdWQHSf6SnWvZqvACFWmwYZNh7JD5Bv16N",
  "key28": "LzF5dLDKL435cN4NKXZXjVA5af9NCGLYAKgfADTjX8y3WjH7wf4VtiFRYhrD7BVeTVLmLYiwEmn5fbvPabs1BTd",
  "key29": "5sxmgSyUcXjwwthaNq9t4pXaUppgXehFWyt2smRDt6x2Ymx9iv6pK56EwPQEAUA3SYrCozPfVYVrZLSQekFsUDoG"
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
