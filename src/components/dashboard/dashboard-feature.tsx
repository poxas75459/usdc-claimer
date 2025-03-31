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
    "HKpha3L5NB8G7oM1wc7cXFidQb7hKZeN3YdweJW6jzMAshspsqXMUaRSuSgcAJzGJQyaez74krNe2fTZuymv6pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNWQHfwWKYQa18c8hjcWr9MkyUiet4iBS4jT6K2Hrj9jLWhJZVDpXbYEjXc9Ds5JLAVPLNGCv1LSVKWA7QfAUdQ",
  "key1": "4nxSrFqpoEEeHjA4Uq5Fa7KgNFnaPCzaAAVP6UTYqjL5eb2GsCr8hooE2v22cDRkQpvTM6CjKv4J62RH8cioeVEX",
  "key2": "2xX8bt7YJWwct6nSEngB1o1PnNEmYr7kDZAS6xdRDLSXJWofEdDfKDVkTSWhCnBo4u8L1N9GXRvdmHTQZB7APUvR",
  "key3": "4YRtM9WPoMXppD29zKTXyzDfZWBHSDUVgenaP9PD7z5efKoLruv8DXL9VgNQPauSc1Ni9XR6fzZcep1czyzU6Mgu",
  "key4": "5C3wgSmYQC5C8ScoLAb9oAmG251KsJy9iaSrmpyVtMZXUaFfHXrHCkZjWnBH2PbcMKxRusQLsNXvpJRP5QbrUFWq",
  "key5": "64DuyW1Zs5fSXtFnrDxWmsaWGHATuk6mPEyLLBpvpxNkk5qWSSpuwVtRGegHHiefpviv69QRnuhnZaR9R81R4mCn",
  "key6": "XQYqmUNtKPWpmYMPq2YetkxifJeJbi6Xrb6Sdw9jqttQ3U8pisD4BafX4Jtdmo7eJpD2FRz4ySpMuacXuCFShxm",
  "key7": "4FkNb9ZYkSNBqsVkyHCNQJ3cPADksd43pMdY7gGMakNMaFyNSDWnYFu3KmgZbmNzerZXxo4x4jAkLfp7FyxBew9s",
  "key8": "2vKEZbARbazqMCBxvPcRyAwP8uh31KdaMnP2Lk95GWEJEQiyLLktFwfopw63hcSg5utaGmsf5wMyrrnsZnQ48V3y",
  "key9": "2NTEasKxBqspzMGedhgwLQr2RdMiziamVYNTK7ZYEMn66yeoYeCmoGegrFdZJyJD56tRVzjmx6mdS5DqjsnvaBCs",
  "key10": "3sDp9GsXcvyJo4sV8tJcgJcSq3jtV83zUpPN5RC1XG9j9fBudPWY9wQGx6ae5fPstAL2daQAG9XV8Y5vUvvtnyXz",
  "key11": "3V3cZFFPHmQPx6iStzbXb5Deg5X8a5JfSf3mgv4XXEEi7F6rn4xGbVmbWGrbstuDKJ9Qwt2cRWDc9JeuVtbcEDVk",
  "key12": "5TNgnPe2XRRzneegfCkE5YbFNjyQfnPU1Xf5qyKEgdDm2RFoDPtVMnTHNnQHjWraMu5tXL2fJqvpiQLrYVfWdG8D",
  "key13": "5XdpsuXtCRB7pnNK4hnfofTjSPHGwhTVAoFTddK7zmNGS7ubHXJqCk9ozUb3ojvhF61hSnTXnXYbr58pbBw5qqit",
  "key14": "65LoNWcBRvY2FVFRvTRqJbBtMiYeyq76izsxgsrCNoXUtcEggmsN79gK5xYbmAVhGbagLZgA6NUvm36vJjw7cs8T",
  "key15": "kcjfocSz6S7KPXZmDsS4zYmEdgjtRu7SESc9RrGPLocVSerd5w4TeangUAjrfnVMw25YpJNJpruX8M6RCx6d9K6",
  "key16": "3N1XjpccML5CbRMqvet3PLD9N2RnXnbXzgw5Bq466TytimAi5agUERyeaD1oxVbWhXfJ4saNeLBaE1cUzEpP5SLC",
  "key17": "4VqVbmuySjdL2fHcskqhiFE6m6fLkBTzCvHRm8KHxHFX2kuYhEo2Ky4yquokPRZkvGD39AQJ9xsFbJcDsSgamKXQ",
  "key18": "3dMJgxM8BomiHVQfUfRgNB1rGHVTSuGFxbmuJM7Do4sUXp19YhB1mVNjuQYTz5P9PmjnRY8zAtAM8vBQs5TizeL3",
  "key19": "37H35n2LsVz9Wmwjy4aydqBzmo9CfhMJZ3Tw9Huo1dShtA1kPRot6rec3HeMpHoSKorXACBFynMt8gRjQbFfRKex",
  "key20": "2Mc8pGxbUsKN1i928d4N1vqFAuh2LPaKwz4JeRJ9y4Qe5d5qNh42o7eygdCpz8HyXiMGtUoiEk9jSyT66avdTNDr",
  "key21": "644ThBQdeJ3eY79haeEXXbWDctVT2GJGSWUQ2hUzpDYPAxzxfy5zAF371b7af2tL6eR56t5CBJ4ukJ2Xz4nC7GMP",
  "key22": "5iucGkmcFawA97cSCjnsHKoPUt9iyZcXF3fB8FXoF79tLtKuqiMT7h3P7McXAKynYJRuBvjQe3o8myrC79HNXr2Q",
  "key23": "5FT4WP9uULiwnVvxizVCbjtfN93zVGxRAZLPLPwmHSxhXXSrdFEkJ5uSn8rgKwQwYiBSWYVfWpg3xirZF5M9TQAQ",
  "key24": "43hWpKuQaw7x3W1D8v56oyUMcBTMTXmMg4PkPVpNKojYus9ANwN94EjB5GgyjncJG3zzYYSDm3MmoccSBo1KoBKz",
  "key25": "3rtVRVxdP51hnZb1SW27xCezCg1jz64JY825VjAG7FTtRPt1Lw7PosGaMZj1dwjM58C53EwtxLvZ3JXag8av2YUV",
  "key26": "4N66jnf55PBs4kA8x4fArVxmNJUVhXBV1uAFXuCoyLW3KTbAMDvx39wG3V7ZnshVnqLe9YsQ6j7X947m4sCbDNoT",
  "key27": "2kyWTg43auNaenFziwjJ28f9ApN9wT9eD3cgCesZoPr2jD5HkPmJDTRb1Guq5Sij8Rt6h9a3t1aZNyE6wEAXmEYD",
  "key28": "628kNhBTp1hwZcm9KWvytVAsaia8bGCD4r2kAbE5ZYYB3HfPvntoVy6LTGvnVJhJoyXxjAAKjSog6cgTcRVh6T3L",
  "key29": "rEZPzM74HMPfZXVEvALxhgFpHsiEhCVggjDAstSd4usT1pUzFKGmxpBGczKefbLGJdEDEMKExseCMdPddiJv73Z",
  "key30": "5n9QUW7v2e7fwUowmAj2yigAZhpjwvAGz6s4GPuErfvUQTNCHnDePy6qRdDQ5UTsDmxmSSPWMVY3AyQMVZAwvFJM",
  "key31": "5DU1YJ2btnrK5qGNNsGmoAu9VGEGUr87aFpcc98e8vJphXKZ2QGAfkqzh7RutSKnhAsvMxNDKeGT7cFbVujSAKaK",
  "key32": "5p6wVb17XrLYoiAtwTeBhEq9axJcUeJDJip3oXVKti3rwoxrJmwYCRpZ2YezQcpvgDhNMjNTpM9e3XkQqPim9pXk",
  "key33": "58brFg9kNYz4xfVTRonb3rwBjsRcHsRdXqGn7Rmb4Xt8dmzJb25Qw7XetKXXBkwD9a2Z9ZwzwHrzE7qpik9Wnj78",
  "key34": "4dCadUxoCt6z5fxWF7kbTrpVnhQ8CZ7W4BqRPJzoQWy6brJjLC6WP8fokrP2EmhAryWD4Yev9cC9ovhBtKbUSQqU",
  "key35": "bZoqh6bu1DrpCRSVeaY3jqcK7rnYxWJGwcpWBVmCa4gmtbBApwESz2XM2ZNtTjXe9QzFXuZxPXhgtvZWSQzs6yS",
  "key36": "26fjH7coy9149mqXiWinqph7RaFXCpyhNA98hJ4VayDE6VVqrne9b7JSyeS4ek3tvZHLuECNgFtkwwsmN6Za43Eb",
  "key37": "4ppMPkkHPc52yjCKN86KD6WGnqxZENVFJzLUx19syckdpCkRYohFEh5CYMBH95CgzJaG63fKRqyNqV9nWCQCYY5R",
  "key38": "4JCVTey4YWistWMhNXw4k5bDb7Ng1sUADtREx9jumBRRMZjRBitmp3YmH6iUHUML4dowxzp1Jyw3FwLZdaoKic2s",
  "key39": "5Jgd3UVSJPnN5dBU3EZ13KjdbHSxiCvoMfMa5P5wEnqDrDofsMpgP6ePjhPTq9gq1pAVBnLvMbaMuhawdXYW6wMH",
  "key40": "DH6zHzoMux64z8pF3hFNZn4iB4h2sDAWEgwfXoFJ9XiB3wie3qXjLtDvYZvT7FRzDQuUDLaCcLsx6VCiXXSB32M",
  "key41": "4MvkfhrW4gz8TQZSdoKWW7d3ARzVu8Uii2tsUFrwE9jGPvScT3rbRa2rwrapQWWuwTRPAB4vgGPuA7zPfndTRMUd"
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
