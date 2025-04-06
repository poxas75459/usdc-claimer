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
    "3HufyiFkQdHUJfCimGL53t9Lunu2N79VyZUkf9CibYLrccYKd4sRaFAqrrhKtQG7s5SZ7Sx5nSSnZNMWipY8DKzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzYFEoDJPmM7K5RnfgpqWJvD5eM4X4mLVAcLy7mdfRx5BVDvVkpDCsN3SLUHzDdXqELTsanaAtW7HDb4nW5cmD5",
  "key1": "ya7jghknHpkaTrogS7aSTQpDCMbYcd888r6NGfK7rhtZkqfCnzM2WnFdSDkgtCMPoUc5gvnhaRjK2MWExRhFt2q",
  "key2": "3wK7QGaDbMuCPfvbTZK8wAkQxypgig3H875YeaPrmWzK5PtpXBqmxQjQZEvUbdCtbweB4WHs3cupHgrA6w3fGiZD",
  "key3": "4Xj8kjAVKv44gspefUpSZ6QajJDChTtbJ3VPeLURvmzuzUButg3997MDAocK6w4W7TCETbm6a91aBnK8FmLozmaY",
  "key4": "5cLMH3xHbq1TNgxKfLaYMbPzUNUmb7P7vAixGpEaQvWaasZb8ExpB3dNLQysqLgJs6cZNqZvqdohDBGpqiCNhM2b",
  "key5": "QfzKBZeh9MvWqA6LZMCaqvokoSyie9oWqsEFpyZhsBnMLMZgThMgjYmyf4gfNAfu6M7pygdmwMPogz3tPgm55Dm",
  "key6": "3gMxEGuTJ84TW749F2RTyvAe2eoiasVZC6iuNkyU8nHJCcpzqajqJxMzcd1zMRSgWGtGsg6wbpuh7vsXzG9Mj9HV",
  "key7": "4WnmpRZGJM28A2LZ96yy17RnvmPKUCff9gWihT5Egrr734cwJ5PCkqFPd8efLJk6xvdG4RZuqbwnEgYNJVUcA3ow",
  "key8": "3riN6Q8ruqiSBZYr9fxRiZ13FS1Rrdd594TEumVxQwaYr3DrkuSDquoPy7KPPtNCoYmTR3UiGVTVNLaJmoh4N28h",
  "key9": "3x7hkz8UpRVNGRXwRUQMLzUHZhEBdVnFxL2zaJ1tGs5a9L26VjCbaBLPaT1ryEAYcu2Ht7drex82kk5t9FyyXK6",
  "key10": "3QzxMc9gnSzFZAckLKoXQwwy4JZedBPjdsFv1mXt9NbwbSbT3ndhzEmqwnNW2v5W9GSZmBjdFVB7yEBqQJDHJY3x",
  "key11": "hXCoYLGDHq2iTZLGf2iFn2LwxaC4ZNdk7EQ4Cvc1E3wuLMBjc9bAejPhmmbBDyuwWzCUsh2e7DWnTQZa7hysGan",
  "key12": "5MRv7R3tnvmHp2zvG77XCQ9e356uX91EbfN6DrtskdzzHst8jZbWz1mf5h7M8M6LhF4WmaxBGhHsUfWYeJt7rkgA",
  "key13": "4fChHkniiiGRmbr8134ATdLUMeGjdfMUjFWaaQzZjFwg9iYFLHBwPc8kuhDCA7s25JyPPbAyceBpH6knuJRyaU6x",
  "key14": "2eNqdmD8fLqZ5FYeqiW8SN4iijdZJnVcqeme5pojYBYQuLTWF2xG41ba32wFzWYnhLef2sZeqfkjvhXsXMVKAwGq",
  "key15": "2M3PZHXZbhFm7ZeJjNh53z7Ndag4AC7qaxsAq83TG6wbSycyZjpoEXDpuPmvbuW95WXifsNVYMoqjztvJREEgzK9",
  "key16": "5uxgG2VpRmRnhT4vzXHJ4Dvhf2PC9AehHZ6dJBaQ3ft4d3YbHUk45DsyTb7avYu228X2734uQfnhKYpqossRhsBZ",
  "key17": "1R2dNZUvaQLXh6xdr3MPNdqBrj4LbUHKhhkYiBzYPvnZM8a3nmRwbipRXn8LERjoqs3oxuFKijgctTQiJxyC394",
  "key18": "55RPWY4ZmUFaRWhQATWZ9P4D9SaGnkxVQqotsSn4Tt5vn3jW1TtgZP3dNGRtezT2UpVUTgrg7NHSx6tteyu46b7k",
  "key19": "5HHoPmRNa39RZKMUKjUoHK8T9Qym6d1kgzg2oxvsqo2g8n568bYFerLhpKbTfY8j8fckZ5eusUjhvRpdn7kG4bMz",
  "key20": "3GGNJGNqSLUpV7MoTKwTDN5esg3APV1aYSHfH3s2tCfx1pcr1o7TBYdXyKFkdg9xodDghyRQFCWYLiJNaKHtHr8m",
  "key21": "38WkMPCDofrcXGpdRsqnK99gKFT1bxCfNksRWWZoR4m715pukyEa4Ud2vTH35or576VpkwB4kbw9jh7P9FTBJujn",
  "key22": "4kRs7vFCDzdLQCKdBeopz3yMQ8XUi61mBXGWKNaQekt2VdZFNFXZZkw4R5qKN4tdfZHGhy7Q7q7CDn94LF4Vs6qn",
  "key23": "5Bx88kpv5KvVm3SjT3zZWk8qmmGo6V572fampF1W2vWSHtt9JvKguCascdqNih5XqE8cUtyEzHMbvMqb2fpoSx72",
  "key24": "3q9H2hvJbzCHFL7tR35wdeuxAmErKe1ctipRGcUN9nr7cLfWpYgAYdif5kVCzVtBJqXbCCpYhwMUrXo545twjdFm"
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
