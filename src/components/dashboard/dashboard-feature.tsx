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
    "4fX81kwykoQPTXFGPCpASWrdKxdQKZJ9sB8ExNnFWQGBCwXy3gvW4sBAQ7pkZh6yoJQa76AzLaZMiWnM7KR6wuzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zp3TUYxUcME7qvBuaBvZUtE4NvbJvVKSp7c1wXt8UgiroNEE6dpT8mkhegoepGymXPizA4WEDh8Vmj5P9xfLWf4",
  "key1": "3FfFNxgxNcU6YTXJVUP8UbMXRUK8XTBGeu1bCXMi3bSmJhPDAeXVwhhzWnTQAR7T6SmMKm69vquucoB56TZRrPJE",
  "key2": "3SM6Y6fHwX7G81oiiG2propkbhnucyqMm83uJksb4Hbh2QWSbLMYmPkCA4cDJBQkHcSVuZk5ET1G62K5DXVsFkeg",
  "key3": "2CB7onWV3VgnvmrTKps13TRFh7QExuUmP9iSv5CVptbjotCNWVJT9NYHwAEsBvrd6z8996X1wVEUjB8UbN7A17Pv",
  "key4": "1JwiVUdKVqrdnxbgpdRfxt1ERvcYGhXqFzdSbNZARpSNnrucREfprVQW4t7fBCWxdkkqnfcRZehPVoTxzrTvniC",
  "key5": "3BpszNboeYBvhdowUYN1d43Uh8NBiRvzKb5jXsXQ6d5k88riLrJkZnwQrwNSUG7Hzk96U5WPKEps8zAK9nbAS7RM",
  "key6": "gcijq3vkfkJiDy9PheGDwbCPKcu8WpysdHrRDyUSh8t4pgyVbGAx9FMhYW2VPiGLAwd3V7YHfswLPbAVqYGrYWd",
  "key7": "2CQHZMGZNwpmk3R6TzDMyNmmFoLAiSVwqq9z31C8bAuzeKDBh1QctWYrYMS2XRsuWVzFfAVxCk8s7k4wP4eYN64s",
  "key8": "3FLqmMkBPV6QuJ8D8n81exYkwjqpB8TZZfhdEM1r7TPp1b7MVv5NaZS84drVUStQVWviZyjNLdxv5xoaK4twH68m",
  "key9": "5HMGPTLwdLb3iPa4BjxPxfZBciwqjU5xSyAW5g9DNPJPRywi4w2uYcLMQFqdLbm1cQawJFnCfGgJNmhQN61WQmKe",
  "key10": "4QmjeWW39PyqQKFPxx7fEoRg8tw6BHgdRemtFfUPMVeBgHrbUBwhAxXVLiEWa4aFMTWP3MXuh37X3H6VW7hcVNb5",
  "key11": "3wRwcbwtScg9g73e9Zkh9tBpWRPPGF3GHn6D6tHdzxBZEP5vnZaXmCCAbwRq4MNLcWRRyF4gp5tV6qY13RoyskiL",
  "key12": "EW2hnVtdYVzSHwS9RhX1cukroLG9bGfh49H3vCFhpRywtY3LEbLdKagjhWNsQEqGxSjCx5dQpuUhpWRoL3GqKwp",
  "key13": "5xQQPQSSM1XENxNYCr4DgEBjEtiQbdbMeGjKfnaDYVixwCv74mN6JL68iYCWh9pmDdpNxdD2XvVfySorFitmXE2L",
  "key14": "b4EnC91iac5T9c3StRM1pHNu3W56oqbNdUxKLhEwTrAKqwnM1zc8cv4HRS5Koae4qjDLxgdpg6MCx9KZGMRUZ3G",
  "key15": "3wGDvM4N6Du36XXS9EgAjXxwdxSjJXUtLYsDRVwNs4njHJENE2s6upVgpvMi4y2z73t9rdWpyR6Hmy9V4EwicdRL",
  "key16": "3AQRipip1JCNyLyqbx19U6vqz3Ra89PGgZawhF1iTDgziM68DCaxoE6j3f9nCd6bRLAtM9XdCwUGbaDkDoqGNFBp",
  "key17": "4n5uT8jVrw4TanfmstMSnq8Jnq2ecZnDxgDomdseLEfw1msBnfFF1myiX3yddxczgaV71HDXXSqzNE8Xs1NDvtDM",
  "key18": "NZAWFt1sXmFh93YVEfapCV9XnxiU8zWnNHz2w1XqC74nxAcmUNbKHKtKsC66PPtxNnQ73bcMt9XgZsaJHRNFfLa",
  "key19": "5wmLPkpikwLDLtDto8rNND53Ky92THBwNAdoxGhJs5dLjBnTmzw2vB5r634jQY6KFUnR1f5zMi2yxMa3FmaGnQb7",
  "key20": "rgaZjSsZkDH5UXXyyN2zDVn2PowzRgLFEV4LfGfGTfTad7HZWqQwuyQNC7VWHMUw7hz82b2XXVjMZ3Pr8hQYVK5",
  "key21": "mrCLRj2FFc3WiW4t7XEFKRwoAWKePQaPqtgAHVBCrmDbjx2URBFvgDhsdfeCTdyqETNvH5vt5zvxxVahkpsRHBU",
  "key22": "WMT3LJZTmbFRbeGAFsiJccd7NYSxNk29viwrufRJwPrv1TwfGVxgG9MhayLew39ejbBkrckw3V9pmJdZ1eEbdCm",
  "key23": "5n4NC6MimBkVUhnroiAb6KrSYQ1ibfkBpqY2AvgUkYJZtgh81ARdq928mUVdFNrfKUqvtcCAtNBgX9BcEnZ6sdNe",
  "key24": "2uKKKcbXuKCwuBP1H9KELKGJuPMw1A9V5sUzEDNkktWTGYBU5fbBGu16jw5V6V1j7EvpfcZMCLvnFteCBbuzfFNS",
  "key25": "5DQHPys4RCRgBgb7Jr7Ft1dmDsviES8FVVubbQZEFWDjPmrpLd1xHMwcqzsSG3n1oyuAu5VwDZntAcourjGJ4huK",
  "key26": "54jDrUSk45Kd6tYWtLuHzn5A6ddVAeYY9AyfuKNrc4tU5Vh7xDEeM9vdbxAL6RBasUa5PVSRzNJcDEFvBjmxKj99"
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
