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
    "5mKHBmBTTNnRhtPBGazbb99qKmCycjq1E2NjrQizQ9L7yMA6S3GRK8QWzKZqVL1VMTCo8zAMNthAT2sx4PiYTeiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NMRX1dLShNgyriHkA2dHzaXHN4bnZ9ChXdg5qBSKEGBEsic26hHFyfBwBfypqZP9zQc8jcU9QAeLq6CNZHTHc8",
  "key1": "RdJaeY6NjXf8cMYu5Gj5AiysqUEyh4Qxo6vtE2LtTpijyQjNMCpEwf7AacEWSdp5SG6J4CPiN39ETa5iPfeTurh",
  "key2": "4YHAVJtV4r1VH9VXw49nWegspa7PjwHYsfmN3bzkBcVNGgMkQTYZrmdi22AdAzTWhr7Y2BXscv2ANq6EyB5izxAB",
  "key3": "2LBDjwZ6JWDtpt9SdzfgYyGTyL9nACjPJRYAKYgyBD5GySyXyy3hgSymjXJKVjRKEYujSwieaeYckjyn1TARcZEo",
  "key4": "5utmadKtqtYieUz9yuY8N2kWEKsqtnmCT5pZ9qHXi7C6y6zHt14avbNei7zjvtfJa7yWyuKJw6dN38sfMsdoZHQr",
  "key5": "2KpYNcUtQecqKUdd7D279rorWtYpV6CFHPWmXbgWzXGGvBnvTKKcDKMfTRNhePzeGZgNYzYJT5eEUo5t9EpWLxZK",
  "key6": "5fVtdWRj8yKFVTrUTfY5Dbk3XhZegrd7EKfLeRwaeuEuxNeUQcjEHkcxmW4cACf4CoQecWv27JLXaS2hVi7WGdjH",
  "key7": "4r5Myrz5mN4oe9UoNr536uqpk19mqVDUM22asczohzgXpvztyjxZRAzk9ja8w7nAyde6qP2QXo91M8aGcaAWjRmY",
  "key8": "qxv12JYxKeLAMNGvdfvMEXxAL8SJkW8CbXAoZxDcfwL9v1mUmwXwZcxR1LS5zmJKoAjTnE5dZpARCzfDypeGok4",
  "key9": "3haiHdWrxXF1NyWVBT5AaNafczMYx4mRrBPE7A5GRF8sZ7p1LmwLxdoT5LExTq8X5zqaFt4Vx51xoMsSPUb9TQLB",
  "key10": "4YfGEAkE7wqDxyERSCA3VX1PsZ2qZDkMjVs3jRLoFncHwN7YYNBZ1iQCZ59Xsna8jFNKFq9c6V7U9QLS1G19AZAk",
  "key11": "5RTtWtdS1yWaPMF8UuGk1Y24zpRbS5HA51w5qtTqE6RBbGkBfbaP19c95TDChMM3UPhbcPCL2A8s2icwLCbzo5r",
  "key12": "29fJ5Sjw6TvatrXuovUTtG6FjSXbZUzukmGo5XUHuJEJsyyQ4xR9mew4YJ2sbfRNCQYdgEpKfu1HztXG2wSnnnuo",
  "key13": "56AWGsTiaZgGRoKyydf8EbUt9pFwDJYsb3fK8L97x1hvfx2dy1pv1rcmvxrDHrriG9b7TKjtNP2y4kUcefJFdC1T",
  "key14": "4iJ6pL8592ERwJzwQ9zhTXuoH8hvpE2Xumh8dtMqqxsSkWRjFR415xxkWEtEUDAgimTHRNzhrVERJe3jbyrZeTyK",
  "key15": "5GEwA8wf8DfAtsNar3b8wyf3gkHsruY1XEW6tF37HeQS67R3Cjyi4gtiKdC36AAQ91CQg6LVdKGtvvggxJ83fTeZ",
  "key16": "5f4dhYjPxJkS7mpkLQgBPGfTsiDtxzSQDfWXSuHZZgqwDpRbBXnaWEcFcc6S2zLXw7nYaBsUybELPR8EKsMWzHmg",
  "key17": "43m8RrBahYAPMz3VAf958uZzCKSNgJnWh9ZPsWSMSGaMNwmivRJXw5qak4jwThKBS62vAABJjUdDkyqPFvho6KXT",
  "key18": "53F7VVhvX1hYE5bH5xgvmxySV7PEpB7LhvxyzqaQGDKfXXnRwMFrxZEYbrVhDp6wnncaSSMp2uMjRVc8YEXXAhpo",
  "key19": "28cmzSFfKrTWXiseXd8QARNb4SQpMzuZbYSzzD9KECB1cPui5RdnUpxmWJ8C4P3jimVwN96K7Nm64Dz2bwcAFZfu",
  "key20": "Nk6Cgb8yZqA4b1dTsAiDYoYEFpD4HskGKDZ4283e2Td1NzqLykV4Hwe6GswGm5s5gvqBzRwSYs8bgWtVdaQSLcC",
  "key21": "5iZkJuPSMWBUykM5AA8G8peeuqeUg5GvbuYsHNwGiy6HRHRSGCLLNyFAcrhi6fXHB9N7qEaw3tTMv4qkxgcZi1eC",
  "key22": "4Uc9jh3QfvpHV57cWas6pBqfKSUDiAj9mKXCSwak7k1ncM8e6NjvDG9SoNLH1iHrUCUcQi9EDt6yoLGpcoCfii9r",
  "key23": "2RgJd4sR6HYZ8JbEzsgGTQf33J9yrrvqStbpZQiK2wbhxjg7cXtUVDVbVEhLJfZ9Yzhprpdjs4YCERYj3o74jec",
  "key24": "2G6QYzuxTyBApn55Baw6f1ovwxMrB7hHdFG8ibkptPXK7fdGFX5Khs6tcJRJDvM4a2Nc7ee6t9Kgh9XatUowNzc4",
  "key25": "5hqYipKBsmA11nkJepKEiGVAWWdNV8V4pQRLYaUecHveEGnNsEYKdPEGERqqy9DN5AEWjpikxqUwjVzSmKeu83wK",
  "key26": "6sYqbKjtcrJ1GQD8A9B5oebTRNCgBqZKQpCrNxjJU2CcnuksggGX2Soc3K2nHef37sBLnZRdrbisDE1TYKtxZLZ",
  "key27": "56bNSBb6FvxSU4V79KJTZ5goMaj2XAb3hzxJqnVboRHnYcGytx7gHW5oAo1omE9p7MeYy8s6PZUAVGTgM19cRwpf",
  "key28": "4weR3MnVSQRtNo3TUFPQhyPFYu2TdVnsqEssfnZkznvTSHZyuNsUzHkF3NG2uQLmngX5dSPkFQr2TbyH8AUtn31Z",
  "key29": "4uBrLhQqvwCs9y9HwhoDv4yYRDNgnjEW4jn3mWY6rRAmcZcBkbbNQhhmcLa8reNr1tj4Um9KYgz8c1y5UfxLWq3h",
  "key30": "4KeeH7BarkT4wsUJXo7s9STxrbYhQwUcyimof48pfrnzbXZwdc5qmca7dBSLDSnRQSAbRJ96sRfDyGoCmNS4Gz1K",
  "key31": "3bbRooaThZM6aekJbvKTB4s75mtUHMukG69vXPs9s5u5wHrQst7ycqKyeoFpuXUbzGJPe63T4jxk7zmN83ngKC94",
  "key32": "5wmoZCNcXpw6jHfJsjuXgqETQkSSUM7iG8YtLzDDjU2DJEuAE3C7h9HwbWd1HNtSFwUntbHjQV6Ba7MTiynZMpkE",
  "key33": "s2NNRMDkFkuuD8ZavDiENDHHGH9waLyKhABakYhCpqu668PaxBVf8pdDmBepQ5g9VjJs9zc8pyBqSRNZm4nGaVH",
  "key34": "545jRERMmW1NGHwmrjLyJmSqPTHiAmzc9BkLJF27uGKECLdm8a3n3vPSkKd7GWUpSiHfgnDhUYw4cyNz5LDoMTZc",
  "key35": "34magNtYM1avZxVNAb6kPx339vBvFNfoRMEGSUHC6EwXh7cx4qcjvQm6CYC7naPfqy9eT6v9TxoDYiLgK6mhkg1V",
  "key36": "44sBusnYxDfJ5tjXSrnTNgNkadCuSDYzTWNqUCfxk6x1aG73W7T8T3xnbPMdtiFgRTv8YQ9UF23fnt9rgNyhQxe5"
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
