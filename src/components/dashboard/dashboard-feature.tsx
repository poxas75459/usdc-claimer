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
    "4s4BzXnMpGDC4g8uRoDuc5VpacbMFdF58jwvKZB8D7qpa6CgCF3LX6avcCwbYeYcjkSaow9TZC6S5DjyRAbx7UR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqjpFHTbpDwcEfRRZ64Ybj5vh28ejX4ULqevgRwP1kggRzj3D1iebWN7QtNet6Jxgadhg6mBh969nZjg2cXh2C3",
  "key1": "5bft7Gkdpywm84gnD3wTsWuTFpJecFqBE24kxnUxqQtHg7eVLCFQd6YiWHDJGMezCuYWGVKdpQw4q9XbXn8VU6HZ",
  "key2": "4kHrpbFCPvZSbRFAsBUerKmG3jVYF6LaUrA2N7P3L3guy1ByhS3fhmVQEvSzH6dATY3CAo7gwMoJYEAJiZNKkYtW",
  "key3": "2YBAwTsiyFcZPAzYLbVHNVWzLyRB32Z3cTPqNcHpxJyKbkQjQZkZsJ6naPnyj6bsgZKnWUVVEHxnp9KWCumqYL8d",
  "key4": "3tWwp4kychzAVQDvrDo96wcQha1ahVKRcERgfUZvbsDfyNsN76vRUfCNBQ6tjNpyNf8ddTSDLGXyVWXd3XXZDW6J",
  "key5": "pE7PGXaSQdUVkk3utbRpH7t63BQYUnEdz9eMT5UygQZ1uQXqv4Arwd4xbJYQHsJaCkC64eypd8NNfSgffLB7sSk",
  "key6": "5Sfun5pB2NR6ikYw5NzfFi6rvRxjzjpWgFhzDXBvB6fxpGbPogF2BQ6EECNQqmDcXasuGRpNaX1N3PaLC8AAJvmU",
  "key7": "5xWk4gsy5XWiJDFu4EjBg3cUnrkBhAFpCxmtuCC1wzteBpDvJTgJhisWFHvXexxRhg1VLhNWtMBrMhwbnDf4PiAe",
  "key8": "2s5oZ9k9XN249Vex14oPraCzEuCTZz2BS8gS7rjMjKG1e9qGJ9mgoobCiLcwigRtijcSj9NJRgkhFTDp9tJCPXUj",
  "key9": "5jUkyDmhZaNbMmC2AHpNY95aCiesGwnhs1ouWCbfHpvXJCD2hE2GwrTZmsK9Chanbej691FEQsc6EWvyxkAvCnze",
  "key10": "4f6Egof2vS4Q7moqRcYGLnSBtPwbRPrqJ3F2ZKu24hT8oL9rQZbY3zHX5nmSbbESQJ2kndkgq6qd4Wg4bXVxH75Q",
  "key11": "3ByzwKgjsrvSuXxESqPz7mkHRuUk88Spon7J1aQGx5W9zDHsodsF4W2iPLrV9hsy5F4AR3keMxjKgZjnSM1YFv8S",
  "key12": "g6kJmc6DNcasCfx4yuAxxQuv5XEVfSenfQHggSqUWHH2usvtg6yG96D9C3t158WaWh4zRpTbeub1fX2kK7mEFiC",
  "key13": "292fNQfXNHh1c6gNYWZbnS9ZjF4hfPFcKb21LGzgJXRxA1n8ik5o5jwCEvAGvd12kRSQtWFcurk5GUJxwZUAE3Sd",
  "key14": "3YxXivEhSfdHyNeevMXcj5AAsSuy4PXR8aXbRSsv93qNcG764aU7sYVvKdzKrBSz9yqgKU5GddHYSu5DpcErcqFg",
  "key15": "4NGwsMny149gmKtLwGHa2wVBPNaTrwzW1GmqrJkuMhahmqfMCmTtWfVZub33BTHvhAWoSYcaGdzrtqnMfVPVu3ty",
  "key16": "dpUyh7Y2xPgmnfBbJ32heS9zAxtHisPNyngKYekR2CA4QvZukdfV4dd16AXMfXz1PbsA6fg3aYBNdjQEPf4RYLm",
  "key17": "4i5Mj7wQzU9hrqzxQwFM5D8GCYFHcFQjcutpVTybbeswr3WpdU93YEREkJyvn4AAKTVYbsebh2caY3ZiT4pka2oD",
  "key18": "4ngXMcNBYtZLAuBgTpfwFB9TXrLQXH6acDzxCJNp4sYXnWvrjeAqXshjCYonNzU8fmALhbriqyjfuJ74MhBL51xu",
  "key19": "5a2nNimFqmv7LhpPdavhvBPfNANNTddGhSPBrzcMf36J3L6f2cxbJqRGvQJywp13k6vq8vpxv9QqLT5qzXPy6KZF",
  "key20": "5H81pf8Cvx9xe36Gwdq19vW54yfqLFdabxpNh5qLvdcWTh5vPaFSoByteVvweDha31jJsvCWUc8nH5EEMHenwfTT",
  "key21": "HHaNJst4XzvyvdNjB7uUp7EcmaWALmdZuUFw492qUM6rbGSD1XiyepFzfHqrgFsCZYkxCMF6SdT8EVDhrzqkZiS",
  "key22": "37rUWrxxEztqsTEDEtEjNQzBsHPPPKhSuqSDJVaLyezzFAcedDgY8zoKrwqLzZjp2QQqbZ5qH7SubiGcZk667UYF",
  "key23": "3jpJBFpp6Rfy3cZ3fhuZ65tA47Hc299PsVTjv7huvtPGemmsA7AU1C9x83dNJvPbW11baQ7ojF8KjgB11i2ooP3U",
  "key24": "5aUvKj7iMKNrBG4x4oS8uBWokNwW11ULq7mHLMuRN8pvhk6exQPFPvheYidkRhX9uEkTosd9ZGMJmn9y2hY5dmWT",
  "key25": "3yubPPe1tu3qkbmtkC3DaP4CGQcFmxKMhFYCbfmR7WZfZukV8eWedv3iHmSdc2x46WTdVwjP21y7Ltp7f3V7JL3P"
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
