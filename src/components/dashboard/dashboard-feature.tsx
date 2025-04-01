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
    "RjnrYYkK9BhqC1RTJjLxhDqqYj31rArTnJqGHoNwjjPxV1TiSyCmZfmk5aKUKcP6gPQk3Twrr2tjf6dydTVbyZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ud2BKBqqgmov28WsSn7CgvJtPiWQwLMGbteb8d4T2fdhDhvqR9vAREZoyJ3jKHudubyineezkQYaNMj2m13qmRF",
  "key1": "ApKnjEkLSZAirM9kzzC24MxNQvvxzMz9gpQK5HP99f75nAi6zzmynxfkFVvMoAgViYMosux13gTkFF65H7zxTCH",
  "key2": "4CtVEADdhFWMESrH7dGxkBx1j9KHzgNS9FPuDSPUZk3x4bn7o2keKqCCAcLt5k37EjbrZHqoWWEuDJYSbRSfXhb2",
  "key3": "4JreQ3xr5i49dV4Yx6GAUEMfaKksVyYDZAKTfbuNfdUvEYsw5Q3Hcm1tvHZsLox3JZiP9xjYwXPa3cQkXnKjRdGv",
  "key4": "4UiMTafKfAF1NzZurgu2rKBC1y6LgnFq9DeA8CbfYq6oz6WNu9t3CvchukLm8EkHiom1Zht3dKhRuDKyPmY8CRWW",
  "key5": "3qqMC1GxgCCXpX3sivbaGfGSM7mQq4qxjTk3mm98WnRtY2Y3uf7fo29w7itBgQ47UHkjPgs9w4YQ7yFYAyGkqYw4",
  "key6": "2m2crCVxaKeDdfTdeot1bUtwm5BQcwg7hMQRpYQX6k7TKvcd1m3PkzU2FGeupCCiXfjtZzXUe218T4kEUGJzi5z9",
  "key7": "5o7Ee5d3eWNV5hSy6j3odwpiugAaLCnSpEUNuFgZ1n8k9gSpw9MeSezesbMdwsHtQ7TtYt9Hmj6ST9Ayn31otQpj",
  "key8": "3j1x7Ugga5vLjBSRBwqmcxgjP1s41pJDUMjzyRw21ysFtBENseS75wVkuitfjbHxqrDFdj7vECk9ryvFR5N83LzU",
  "key9": "q3zZ9M53eNGQ4GwjT8amYXyb7ZfVfnCkRnqiscQimbohzQhLTGitT1bKaKreqKCeaFj76hxrkZ1Cm7iKakZs1pt",
  "key10": "4viG3M6orTKarHuX5f2jcKr89HC5rpDBH42ayuYCWsRLTcG6LbPgGMTWyNb6diDVNaMYfTvV7u4pQn2kwwLNKpNg",
  "key11": "59A6b6aY8L5T3dAqDY1935owfzYQHtHHuJ9DLpuoVHhZqiPVE9ZXhPW7tt1Kytquc17pu1daZdSggzvBEL3QzEYg",
  "key12": "JmZiW9JzJxu7yqD4BcRiavD6aHBHLuMruq738BkSEZXespPfV85L8xgnkZycTs4ZjWw54CwNh7dUt8N4rSir9PZ",
  "key13": "21yNzF4tVcF7RbB12YuGEvTSmfYYPRM4UzSWsnZiYBbGRdvXqeifUSyBHAa47vMsSaqkYn8GnzixsXNVix3ctvej",
  "key14": "sAF237ko2viaENMYwjGmSAh2bL8ZFmsJNXf6sWp6Av6vdhmFYQATLTJMjnweDTJ98TE2dGVGfHvqFq6Y3ux5bfS",
  "key15": "5HHphtFn2XTvqRj5aARFdgyfUPnhSJsKokKpLLith9okaUwRdP7C6HrkCieAWrRKUo7cKrnThyXd8dSXgsFqga9o",
  "key16": "5byvSZfU4qBHLEPsRwNjLeVmAjXWmRLPexjoktm3u5eYBZ3xgwncXTYXwfKF64MkYNxBA9rcW6fXwuEN3SV1kEhT",
  "key17": "MHXNbGYZqgRwAKC5k3P1YEuQjHJFx3grMS68PSRo6CBSFVi5vJizZJ9WvKNVRfenCiAiuGVzd4Zj2u6yUePj5uf",
  "key18": "5CrWf1VDLPKAYvgMvZ1YSLN4g5yfb8rKnoSmUu2qx9pkZUk1JDppGu43EvK5beeALDaaBpE9ZGFTZmWmNwrjbhwR",
  "key19": "64DVXLcaW8Spuq2tS5tp49z2L5WmHaHiW9XNYy69ogRJAD9HRrs2KxaeLQMkDcYBPk7PUefCepKsLcDbt4ecThzq",
  "key20": "3KLo6z1qx1AM3FwrV5xeeUwi6May6pe6ceq18zx8g6e7SkPMUzeN8viiyTYr77LADQeViF7gkecPr7mVqtQiBeyG",
  "key21": "3iVdaCK72xC3Ri5KVq3csW9FJ4YQBV8gFYdtMTh2N1qQRfQtGywY5M2hSNcGdbszNZib69nSPjSLsZaVeQE7JnwV",
  "key22": "4Pv5DaVrQSgEyn8fpTp6yPk5Cq82TnxSVQEiJnFA2x46EUCWh5pdydGPPYyUx3AsRCarqUPYNvcb6iPctTteC6yN",
  "key23": "3uQxZvbqyabZv15S7AJtpsmoGmG9iriCGrkPqGqpvjo1pc6gkEzbb1pM5X42T9owXx8PJHqCYPsWfK5iWLnnfqZD",
  "key24": "2bfv1uQ1AZz2DhyuKdsBCA5Eb4nPShAmLcVjwRQD2aUJeDz66X6QUJxz8WXjwqybh5bCaWRBz2fYEyLLvRcHw2gH"
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
