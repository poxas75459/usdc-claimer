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
    "5RoHkGKuc75DRR8Sv5eQJMxHW82sxcShViMewCznDHmUkD2p8JMZpsxzq9V25xZ4eLcChruktdyCGCxVpS6MUFRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RzS2cx6ukrWRnmZP4Fvvx3AmeXPPsmWULKTD4Pj1ECQbco7aVSWY7JUPRvdef5GU6oYKs7DSAPqeiPtSS75YZ4t",
  "key1": "3BYtHEZxpm2dF8iEiqhqw3qYLUmoEG642c4472cKyW6NbMjFKpuuqSEddgkuYmogBwqBWHPopPobeE5G1mnGgubZ",
  "key2": "2qNtge9VETAHUtSkYe4L8WwzhMPBccpppznWUiSVkGjRnJpJLYad9NAMVsbwUFHUgdxHs2ux78U5mKEP2uovdHuE",
  "key3": "3ar4J2S665pri8f9csRgccmWRsu1y8VEtLuboVpnYM9H46muviZbq8uqkd4xMba3ofzdqvwFZLKQNbMDYdVdtgJr",
  "key4": "5RHPSAXum31Uha5TjgXwGnLs2xqiyvk8g1yWpJfuefoFYExa6NfcZu95WxakfbdJVSz1XkmrJ4tbxDfi92w1hoxk",
  "key5": "4JgG297AjWHyYBXLEGrjEw3Ks21SdeVACgNpTVbKFvus8oXM7yoKMJuUoc2mrq54MW7Y1iWTQNt1gbGKmjbwwZUg",
  "key6": "4ASAEDZF7AX9CzGEeq2QpSjgeVRX1TEBjmKAjmcLwqoLaXEkmx53R2T2s7Mmb3qi5eNfMfFraVmAHJuhM7LSW3Bx",
  "key7": "4Z11tdCwSMm1kgE7h9zjuXAAfzBhmb7RfwAKNVfjsbdfgfWjahVvWyFbj3KrXyNzmpVieMJTCN1rk2Y3QfFgRDbt",
  "key8": "PWcsS26E1bb8XwnHszpCuvoFeAnhW15c4ECjD4igZ5jLhzrAcpGPRZuE7EaY7SAkqT4jum18Zo3b2k88xvRpzwD",
  "key9": "JowhAnqh2nRZxd1etzQYVW1LmscnPbgTq9nvM7MXvfKqW8CEDwyHLXnmTfXAcWVxKXd5vqEEbLwvSBZ7bf9CmuV",
  "key10": "3BrySQiRof54NRoBpS2Mbu4p1TUk6wcqykkhw1ge9s9BfMx42WB3WZcuSrEWM5nQodzgZBuLiqqjoz5KLnoBNMDr",
  "key11": "fhWXxxi38RrH71kihoqFgTEDTPfQrYXSNxE9NC5H8BGZG4vdbpHygbT4SZ61hViYegexSbAPihcmCFHBBoDtvvZ",
  "key12": "5QLpyGakEj4YPabHuqc5Ap5uapqLzjyTgTa1gzweVv4SW2K5tRs1qwgfEcDeveMQiPYx1jSzFSSbUSs5aE9LhsCb",
  "key13": "5EKdKgumEqdt6Hpp3yEjCjs8bJFciyEttCutvfaQGBdGPpHQWKxDq9E5v1BxJaXod5AmrueyiaRhaFWXTMgdQqqJ",
  "key14": "2aUA3LjG8qDTr24pmgBnHrLnvmWMRDWJyRSasdjeW6mNACTWadqyutq9YsFsekyNUriFqctLXTygdcfe6y9FGDLs",
  "key15": "21beAAXeXWfxZMLspzBg7ZnYdUZgJw6Xxs8q8xhuV6FYFhcLiayWGXH3Xp99FETS3CRjBzHAthJqP7pwctAFpdt6",
  "key16": "2KzQfhrrThaSDPGUkDcE1iMB1P5gMUUE2MvxPxN1jrmWdYtXEm3RdA1w6zqa6Sj9Q9TKbbFFmno9rX7vqFtzQRC",
  "key17": "3A2bCJtJrB2XmSxFoNrC4VuMTgXuYMbEKUQ33TSR1eqa61xDPPR3Ld45peKBwrDY21Dtv6gkZYbuKLBCP9mDnNds",
  "key18": "3DVZWgqAMbY6WDDiSbANZ6dgCQgZMY3zNBo9M4bi8Rhk1GZ2GaWfiog7s86qMNyA5ZD5ACa7U3qhjFt7JSchNmA8",
  "key19": "52Dt5n3Wkdg5oSBcSdmCENdq1LY2KRP8uAdCZ7L9wGA6yHepNYzXemenf6PCP66gxucHx9NRmR9cDgpTLxxYs4mU",
  "key20": "5UQnUMnERiw4c8SADxJZSCHAapZjit9HE63VMpGe1EzqrAq18csozDUotXrgPyuX4qjfG7mmmJgP2HzBgzFeeYfy",
  "key21": "2d6MCfwqiRz4xCi8MMGneRCYjnQkNnCJrGNRmva7KSDU2nz1X2UGiGfuBBGF7aLKdxRvKxixAaJeVDEzUT14eMLP",
  "key22": "2WBvXniyuMyDTJjkbfGY4yxHq6T7rsPiHQUpN2kCf6KshN6VnQYJVfGBn9wMZoXZNRNZpc6Fz6DecpGEzsoQyTKc",
  "key23": "5c12PCu48yxrhxHSMqsaR4XMhtQd7wRAa7J2nEeP3JoDBh4kuD6VU7j7wnw2MS3xKRJLAz4raN4iGnDWrEphdhan",
  "key24": "28nMyya1LhnKSgB7oPNsBB1BMReqH2aRgUT2KaqDKhAzKmez3o7546cHpc4jBQHYpcU5xf5kNf6JhFzceCosmwnN",
  "key25": "2xA3GFVz7skUtKJuaFX3eExW961rbTRzJ6Fgxda8fUcxktHEVPRb4FrpNvV1B8SXxuZ1Mxvp4madYbGdKvMwJDJm",
  "key26": "2MyWY6zK6wLcrQPx4LofTG2iPadYhrgyxqTqExw3ybtZWQkFLeFzu7C97yQASF1H24XTXoJhKapjE5GA15D5X8Jw",
  "key27": "bYP6JvgdhxjPgCMiKBPfQ4oTw4UFcpoSovU6kweGnY1gcNs7tAQeMXfFKpdCyCb8FKcYEkWk5frQpoEhvZwNeFb",
  "key28": "N2JDJS42mffdt9yVNiuXJUv2ESWxo4yeamp2HuJ5ttU3zg8jjoqz3dYJo7RgQ7b3uNgWRb9jmfN5gYNSx3cXKLw",
  "key29": "4wGXEFNTPqJteVruDJzKs1J17hFSW6wzpixjY3cCBfuJNwJY9C7hAaVHMQbp3Ya6CABTA5LtHhz8vkHFPPTUfAYX",
  "key30": "4ys2ogJe9QpmvuHLPJkpa18Dvj91tMFZY2SbAA8rJgk7i8cEpB4Jt3nctEy5K2Se7EXXNPxQ78mghYB8NgBhBJLQ"
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
