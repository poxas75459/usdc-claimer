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
    "7wSgL6a4WPqksgJ9QDhxNRVizsyg5pYpnV4Y1fMzRLUHKKskhuMrW8XFX2bBL4dWeD7dunkCU4WqCGg8ygZtuQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6mXZaJzSWM3nPMXMFNE14y8pqTcR4RbKfbc5hdtMnYFSD6TqBsFewBv4CymHe6Nc5nGNXgi6XqFFFuPFuZjxHG",
  "key1": "XhvRuNiCicXVJmYchvwReT5i3HZxGYG59HwtEFiwXVHJWTCuLsMseadVuijwhyuVcpf5xJvPUUPz1kAJKFPJTTP",
  "key2": "4MfDPLETiuLgwChWDEAu8iQQM1JqBkqMUkuRSmHyVGpcxQYF9T8qiti2SGMZwcJL7B8EQYAqLfbC3SbtfDhqzFjT",
  "key3": "5QY5rFqXHuSVfwmdpyMwqdrnsFgYKo8ANeV4A9meNtsefSYhqd3xb6PoeaRbCUtQtoE9w4WC63U48TidR2mfx2ZT",
  "key4": "5S55zKVD8NCH585iBpXRvPB29XBK9DGTfjsb5hGbBGQKYnzU5j6UkPyL6mMQEucpCKufLT65hi5HjFXrDownFkg6",
  "key5": "TFKHXJZb8fBprqnuQKoQWeJEC12kXu32bJq5hQstuUt3mLuzf4H7sqjWENFTQok6QrXBJovrh129cyx8JJGeG3e",
  "key6": "4w65HyNWQfwV8URnTa3nyUsYHyc9HmGHxVbTPs23DMBGR7Lkr6anAFxedVKcdYDJ2oKCkTBbf3fBWSdb6MXX8Fm5",
  "key7": "5KDsudWeZiRc9pgbACYpUPJ2KUdz2c2s4Dkp5ZUd2gHbRNhYXd7PscQp83hNtDGQsYgA7R94JGtQcYccb61E46Dy",
  "key8": "3voX5QUGAjTkbXnuRvUyLCWicGZpwbXQfLcmns3aXJaQpLzQd33jFyh9ypcbdg4x4sfRtFhBbytZRfEVhJf1qVYK",
  "key9": "CLagQCspUY8b9YFYoTM8DkVCzBL5vMzRZmWsN5zveNyjCFSBy4qPwRFYT5TAoNTo9Ep7ekiaqcZfj3QNxFgPfq7",
  "key10": "3MUNB1bE5vaeCRCdmfRUj4Suvw21oVYw8rUSWJZu3rgGoxyJE8UgPBzbqwrQMMUXpLYLWMB7LQnLcHkReLbQvN4v",
  "key11": "4KhbyQsRZM3yYvsBJkvzYPorCuDvA5CRN5DnTjdVWeRZ9fqJ2GX9T47uemV4kBd6CsFX2Jsz9Ya2kiq7msb8uEiH",
  "key12": "2ufQ8FZSX4x6FV2keexWTSHUD62oGSSZtnVes1MApRE1HKTDVs1ovrFc1b9zc1i9wq4x69YPKmDsb75grziLLVQQ",
  "key13": "8R66c1AJJPYy4TqaYFmcZqFAiipEJQVu16EFakGK4ajw67NJF9zSi5JpxJzG5zN5euzsPXBMtKGmHd2qqV1wHan",
  "key14": "wDPKnXXKERt6euJpsR2mTcqNSnaEsi3ivg8Lt4VcL6kUivLKheqVAcXgkrS9Xw89PrXD21Qsts5Wmh5oVuW9C49",
  "key15": "3uwGTkEh59971FD4tmjshCKGPqSNYsqFqUQwg6vf1cAD5VzXznMQfhc5aC1WDbTMB4RRe15jb4nunWLbu2aVyf2c",
  "key16": "3UqiYQ9D1DrFWpT5yaybwCzgAufcB2k9XYWerABSRfKribLWZYmXBUHAiNLzzpZBUiLLwgXHg4DGky8HudXxnwvZ",
  "key17": "3xrU4CYFAW2J1b3k6AoDUeVWfiB4V6V8J5LXZBpUY5eqA1PJ8MAgZU7jmo7fS3cpH5TDu6YRZsz85veDRYotKgf",
  "key18": "2UqEhnGBUZZ9WDbRy4SuLJLSunjgCk2tk3BGfAz5jqY2FWFFpQDG4QUyuYDkQFfUwfpX8yCH2PRidLhoKf5Eawzb",
  "key19": "SKDyNENJzSGDPN6u8Njy6mbePiEgf6uD1jFpFS2xMZ3QYfpyUBowiMKWEQTkZ2ZAvJJyYDyQeHvKEXTyniJucNa",
  "key20": "AGgeDyr6AycETxkXqybnH4woaSJb5Ax18q2mrD71zmN54UcDzhFdANmd7S7ZVdeHdoQVNE3fsuEG2BXk5Gvx2gt",
  "key21": "f9w9MoHyW5d6DuYKyneAkNRMv9KB5vxLE5Bk3iVmtNsPJm1Ub3Z1gwLKss7CYTfxfYvTVNGiFp8A88U7qy52g3m",
  "key22": "63mWh2mZ7VqkZ4nLG5aSXMukGAKXgKB2uRZvapB2suUUf2uMbwW4sTVUox2noNJgjzfLncwsVQPYv9bEEyDRqb27",
  "key23": "SvdfVU83BoVvzSZ154PBMi8WSwSKoANyEzuhFycnoJTndcPnt63AZNjfWLxcmexnCcE1eTKy4Lt4z1QdDvZqfzY",
  "key24": "5m2mRgvBC9i69uikb36sXXewvrvHGAMm8dkMgciGgDS8kS2HdtoXzDqLezbpNykNur8jNfaERyXHAykmnKQUyCNt"
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
