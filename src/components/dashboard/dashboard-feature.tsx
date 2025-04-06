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
    "FzY4UpyYWZpALTjcJZqsSvjkPm7CtiAhgmiwNTyWuRp31KGFKDNgDkxd8CxsKCGUKs3FK5MVfSkZ3L7owkKL7aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542Pdm94Tyg5rrP8tXYoy1GNkFAFrn664eCHLdC65Y8VJmtCgYjQPWvd4xy4jh1N2n3GKcRJyPjovnk8xYuaxBes",
  "key1": "BFQ2ib52wQwsHth9mHg5sokAfJPTq3DJuuBFiEPfNW4zwex6WJNTAJXAPe95Q4kxmyXPeDrBcjMdVf5QENw6VLr",
  "key2": "2qeeAQ3yYGgv8o8uAGfy4KNj4EwWTMNpWvb7H54KnQU9WP2Ms2H5pqXihUhVtzW2HMoThqzdzPPPU22tuBRvynPx",
  "key3": "6128kiakZ7Y1SHDJCndfVCaFux78pGkpQEuT9rWqio3MFhnhzbZaT4EUymKeuEH5TLx3xRvb9gWvQmm4VdKZUyPQ",
  "key4": "41rYAecbK4eMstZ15tw6XRa2soeknrYhstAHDVPzzHXE59GzE19kX71vMsUJ6bKVJ3vYTth8wNN97PuBD3JzXzpK",
  "key5": "2GdPukyeSeStgoWwqgxnN9EsKvYaGBFFts2tLrEQhe6ZuYVueKQQjHFAi6yJFyCrhZW3if1bqZx3CSQyfQZ9wJtU",
  "key6": "5xjjsoUiZrfqzasmyGPJvbt2G4ocd6NauDHwJiynZaZYYwim3HjTwuEDJTzk1UdjSaVCRm34j6FparRyhWGybGYH",
  "key7": "5ojf39ZoCWQbvqWzVWcwtSmh5PkDLTjW48ZmRHSGiWMWDGwfXtP46gGFfDi275bMgkcYhGZjFFMKacokL2SxJqer",
  "key8": "3Ph8K8dpD1rnLPPnnLcES76vgbcPJQ8q91NNA1ePpLZJbU5VWAQjoXM1R7VSiEgAXUXVxX9D85NJSBFcV7gwrZzs",
  "key9": "2SxnMzYJLmHejqXZQ3cqnnmMe3GX51HLD2KVqipduaEZnaisnLMcYwu1DiJKhzGfkuHk7GoG7TfUWcLDc9WKK9CR",
  "key10": "3QKuQ6Rtgjzi2C2BJMnqPK6w1ErZTNwVZJac1LymJLuf7EzetbPQc3fCNvRwA8KmdCVzDJqdaBcG7ngjNTrkpuFh",
  "key11": "2SU7HzHjef1UjPusqKxgKqKqznvQAt7YkybgNp6T7LSovHRKrkdbpWMjeac1HgR9DKYZNmz178Uj8BS6q2gsFUnZ",
  "key12": "457c7EUnqA5KEDngeSpxSZABreJkrPn58p3g2AdqSmZsZe7vEAxj8mRhHFvUVkErgzRnuHnTx52mpSZ3Fh9wvNBm",
  "key13": "49MxkZYEudTvnpkDDL8vTfdd98VJn9gp7RsVEMNTp8SwF4q92tRuxtmXTPBxY4JaTogQ7AHi6o4xL88rVsk1iYGU",
  "key14": "5DPAbPjGdiHNYhwZfvmycX2RRQwwjx1uR2TtthCDjcSDbskDEFS3idFEhPJnv1vwnwp5yMS7NKBwcfoCH2mGCmE",
  "key15": "4dMa7mwL3gPVq56DSes1qxTeAvsC69xB8918KhWjD6wDmAui8SiGhX7qwvm9wom6gnWx4TMGvxhbJy2ZvvZKFRue",
  "key16": "4FH3G7XXgfM8ysMUf2uA7rUFUBbrX4fvaSa8pTDTohfWbt9PedJcZCt1zqXSvNt5n9H976ojjKxmGcoH4nbzqzro",
  "key17": "2KLHX5jYMkYWu4TfetryyxHBsB8QPJjSXAXKXmZGuPtiEViwSeiMCiWe6Up7mpaG2oZXDKhjQhcapDrHytZpXkg1",
  "key18": "ugCfvVvDFLE3LmikYXhY8fM2tmDS1D5HXyt4BG45Pqb1JingahEBMSQqAwp6tJKiPKzU1S6y7hNpKBg5rRGF2kk",
  "key19": "YGLXCNHUf8fN8WPsRENpCEcK6pB3J8PAxebFGwiU21Dc7Kuo5CyDgaAyJLwxdD7ihQ8Gkpni1krm6eLWpC5KLsE",
  "key20": "4NgnEDJdbinayenXyzxEujUPjEy7axvk1U6FRDzhGgVjJjtrmB4nC2LkwwVRxzwkubTnpwZbzyAdvWgAfMez38U2",
  "key21": "2rzXjGEKAtZa2SxYSc5uJMScvEZRWu1ZKD2JtMrDTetDZ7DybAwZxSusvBtRj62ZVKymTExsj8ZtJFo3DkUPK9Z1",
  "key22": "2KGU4jpCRXYCPTM1Xkk1wanvDyoTjSC6jcJm8BvGncCYiakonjcZavMmNbUUvcreeW6yGG4gfAKhFxtmvqyyd1bd",
  "key23": "7vJWZXg6nBpBEk4rwmqUCoyYDGrccnm5CZHDwzmLyStfnaXDUfeeUPrk91mzsf3vU7xgbHkbrk4DuJRuCMnM6rq",
  "key24": "4iMUHfHCZCDQk6wMSYGLMNAnHS6w2gKYEhf7QvHxHKFbMajN8imrYXYD26Tjt4DncQ5KGPy7CMnY3FX5jQSs6Pr1",
  "key25": "3Z8gchZsVhnoHHpzRXPa6x1UWrWBNUvf2r3gMiZoVqDj9HeUM9sMVjjcz6tgRfLmZ4i3iREXTDEhaY2vMEmkbvB8",
  "key26": "5tY4Tpb6PLoF1snoFTBTaMdqbXsymAFeLvtMb1zzXn9WfUuyntv4T8ddyP5xPmnQPrRFm1srBAbrmunM14te3q6H"
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
