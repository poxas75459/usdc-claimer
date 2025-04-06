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
    "5JUDyjkb9cgVuiZLBhJcFUMH26g5ZW2EfACaBE1X1VQEuod3y6KCacG7Nx4D9uEuTKjgHzFzhtsmTp7ZD3YcUYYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMSm9QGEPb3UHaHsPiBXo2x21u4qTmpJj9kJCEB7LKR2QzdBGA8ZeKQWjxcEJApezcoLEFWjSdr9QauQYsv1tur",
  "key1": "4JEkdYUxpnuibRzAVZLxqvYFCifdXoLaToNA2oXpWRMm6RBQbmoXsUYt3qbHnVf64UipTgby2gKK2MjKsqQdJfZG",
  "key2": "4iwdikLpHGriBvT9Bh2jhMhoLEkS8UQsLR1Lx2dinVzVaYS3oUCZJaJoX9RS6riyM6p2RBst3K8qQGnBLnyNfFab",
  "key3": "2QcHmnbkiMFVscmccwP1aZj27Sp5erT6yvdTLdkr7snZXz6B8uD7cz6DuvEkdigRWJxGycCofYeP4K3gtki78R88",
  "key4": "b8XcPnY9xGF2AXbVYNwyNwxWG73z5GSv8fDdP2k2o5xTZpAcdntfrkqgMZYyRL3e8Z6RwRouftzK6ZScnER5muC",
  "key5": "3U47T2x41RdsvBJAxfpoxvK1tC7KA4tkHgp2SQpUjLusCdnGxCtDU1dAoLixEE6wT1QZFzygMmD81bbiF9F7xRNk",
  "key6": "K7aNGoRVmmGoBfGZnKyEjrgHJk72UkoFQFrM8dMqCVjhdamusPWqRJLshWmPtcNKLpzoQtH3N4D5ZdJyHLhz8D4",
  "key7": "mA3rXa5keVoGLFBHS6LouzeUjaZk4s7pqFkgiLbjKfJwAtLg7LwnEXcfUGkDTuViBPbtSAbtnxGhL1bBEUrrP8z",
  "key8": "2EBFNrccaetoyoWJRdmVmNtiqNPZWC3LgQf8eUoV9urZnnnkVBxvkw5XDAoriQvSn41HbDRuQQkPVmBPSHrEoVhi",
  "key9": "QuKqmSPjdVL38DwgwnETVkWec2vF2qoS2SupJMvAC5QXuy8hQq15NVdskY1adPfqBrpE3FEQjNrPnsbDBoD91C8",
  "key10": "3ZLXRF283foWRhW71ffYdi5K1SGDSGwPuYcyxRsy86g5xvwSScjGR2vKUqEtYELLLwFaRKeCD1mnYHmEWssaP2Mg",
  "key11": "4ttZ3NBiyZj9B1yKJ4hBQ9NvUMoxpagPusSDrD6a3ZB2KcQ7MF6LJu8wM6wj3ZnthBN5ngHfFDKyBASppCZMa2ue",
  "key12": "3hTJCgwbP65eDQrnaUvEuxwxvE1FCbyvtA5QqWvFpdrfrBCCLPRtf8unEZvTRfgQZUHsPopubB6PxQwPfodNwtKQ",
  "key13": "S3PAdfoRLKyBB3af5P7Tf2SqUJQrCUMQriszTg3UZev9wtx4Eds6i8DSBisqVUxAWnCPTqnk7etcrbWgtWkSfHx",
  "key14": "YFZqcP7FVCnrVGpr8yTsasBAWEC32fxiAk16fPxCeunSptvJXfaWcA9mVTG7bBYWUqKW2Zm4re82maMpJXECAwT",
  "key15": "3enVWn3zdeEQGrpa6Nqhzp3SkEdVwwzmxrBNR6kkiR7yaQL82otNPjNE7MynHwFmxfT8fRveG6CokpCYXagU7PtM",
  "key16": "42rcBqfBZA3WuZ9Uo8SqrfoKhjvPJQf5ns768xAKuqcBukpBVcdYyftTjAp6v525qCmQNmwnamX7Xb7syhTWPju8",
  "key17": "23gVd3hS7aWfVZbjD3GE3dFk2BnWLeiD7AeRxJbssiZmMSSPs4wKbnmzfVSU1viEwoYuxMa617rLYfePUBH88fmu",
  "key18": "4MwD4PV4nWUwruDGcqt2GvPABQcrSQrikToSvhB8qdeANxswzgk5vZBpMD3adzGgQvQLpzsq4TgvySs9F3HjjEG5",
  "key19": "5xoUWzrNcWxh3GL7CeCZUNqJzMmk3SfdoqN22QuAYCKjYL6VSMxebcN3UDBEaNQYP5hK3P8KordMQbaGmUeUtoRs",
  "key20": "43onzyuuPwCoAUJo4jnFjuiLAUjALb9XFwx5tHWtuS7hUnUoTAirzc4oqcbtgrbGuA6ChB52VLkg3P9a9hRKYpqh",
  "key21": "3uVkkGPh4uRzVZuMyeFWJpo5s5wPbYTRF7wvWYyxZMCWLTxpGfWTbWZQkuW445JLGbe6hc11BiDwPgiJV8pmJZmj",
  "key22": "391SWdrzFUCMey9PsFVzrsxm3qxsLoGJ79Kcu29Ga6Rpu1HvmYJ48orkHz4jjBTdsSznyfQXmtqJWdS2EA386nJ5",
  "key23": "674HTnWXBA14xwEfAFb9pZgKDuKkpx4qcXjWbwiVs2LDLM8pqn34ec3LCmXLXPCfq3JkFp2kEtrjJnU2Hs1mwkUZ",
  "key24": "31zdZWxHYjJuFagDMGA2xraa71aCH83CTqgRJfWcR6PVRc37UB8RKpojBEmwUMcozV6u1WGA7LUVFpNmUUdfrHhV",
  "key25": "5yN26w4m9NWn75B6rLqmAsub7ovQK8sj23LxCrnKZRKqY3SBzAxzWX3Q1Xo3FGFKBM7a2xTXYpSLSC9sFefZ5trP",
  "key26": "2QZAHtw7QyX2BH2Ebdtvm1RhRtTVqygAHYmS6pAd27o755xM8vfFu55DMzMqUoSUcJ98uZdogXrRhXK31ooCanp9",
  "key27": "5VMyems2GD43H3Audanu5AieB7CQR9vcFAg2tGxBSgfRW1m7JrfHPWsZcwFW1sqWkgzuG2dizugpLeProKYngvpN",
  "key28": "2w7UnvmF3uxGLEryg2VNCNH5xziAzEeBuv4qWHV3Q5Dqiyt1F1JxZ3rY9cJNztZFmYfqXc5AhabCUCR2CsaeSjBV",
  "key29": "XbX12Q4Y24CXKLcfgPSXtCySij68ZJM9VaU2cTW6J4eWBv8bq1DQ9R5NTyrUh5jG45ViWzwkhKjWoN5QpSgWUyP",
  "key30": "4L6WzRuDNfRW82MpHzw59ujmMgBD5LkZTr71YZPekeAh6x7sU8LoQu7nLyxhEZkQrhJvbTv1CoAqv3p3ZWWsn177",
  "key31": "2cYUqE6PowrmA89FHPY28WQnYLX2atVde4QRD7AScS7RrXd3HMorwV1d8Grq9x5e4nHPchrt8UuVbT3X2yuqWFEW",
  "key32": "kk7X1SNjX1jiWQpSNAeUq4Ue6jgszcPPLHduh9TLfn1D7zgagz14N8EYobyJeE1J4HexwvLK6dXAU1ATCGepwwc",
  "key33": "3nT1qJPys3QN6eM4cf4TryVJe5SeUSHnAbmnNrJKi7DXQ9QtQZdeZhnxESckBQqh4D34to6hQ284R5EYdM6scn4"
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
