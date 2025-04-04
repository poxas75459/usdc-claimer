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
    "26BH4iaDFNK6SwVvD8mDqnLnfg1DZHXTL271XqAJmG4CSLMGe3Nx7qpebpZGcuCtuF2NhDzd5t2BoTwVGgYGEvHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xDQLQoWreF8nYRFLLzniVmGuAnWnVaM8B89Bj2cqZhVSfP1jMNMyZaoRksktm21oYQji4cvZCehWTSqfpSPYYa",
  "key1": "rzdjKLYH3iKxkttCgwR72L8fVJiFDXwseSQkSGsB93sboxLK3hsvjY3PXwzSBmgz8db7rYqVBEzk7tRtNXUKyHe",
  "key2": "MQ7tk26HkyGCWm2KTjThqVyqDPguXRpTNogX8A8JtoN59cEK5dA68ihQqchWBjY3PLykXNtAS5KjP2mpwgCULhp",
  "key3": "2xndnkB26ahVZtFtutEMvdYbC3GGgRJAKsYn65wdTcb68WTonhpbhXaXYrzWGFGJTDKnMeqMmaESAiMzWaPPSehw",
  "key4": "42TRrKAxa176XyzrFTwVhvPkEJYnJAjNdiag2yMBPwUEetkMSAsmcJtFQEjS81XbJwPijMYpGJ47KTHkoZxHbtcE",
  "key5": "5yLoQFLhhfhD5cA38k3QtM6BE17VvgE8m4Ceag2NFGmhpkCxYj17StvvZQyzaznftHqtEtD5LEp83vCLqTyLkqg3",
  "key6": "31gWefdKajKb4DPeHLkTu68iWQfXjierrCGGoEgettKywC5o9UyyyaorqWUTS7WouESJgLnwTB6ZqKtZXguabBfT",
  "key7": "51nJW7mcCBJWWeKMhjGQVvxCanAYhtdQtRmQqt75UULKBawtLqB69UPjxJe6dGWJdXEySeXL2zqqMdqqA4ymwT4Y",
  "key8": "5n5ZkgkGnNBQVCQg4o6PtqJVbvqsAp3vNoN9vzx9VALCY4L5FiNtaCDDwjhcVkwQpK3hG7JWYL4gtinfRyUprJ8Y",
  "key9": "2tY8zZaBUoebFDDcraF9c6pWEA8cuad5CbXxxoRvB4hMHVbAGNkjSQiuuqwCK2thCbr72iR2Xf9qG6QRaN81n8eq",
  "key10": "4EfgXNgJdVNFd5jArXUDJeD8QoKcSzSPqmFxhNuoM7GA7XNDC3jM8DhPKBwgVQzJD9w77d7oczPjsEKfkqXnd31k",
  "key11": "4PWJ6iCrdeYrrRDqQYXkoSu7i1c7Acku34AdYDuRxvraSsaxgxABwmDDquJq2EZ7LqcWs9vvtzxSzJLP1uxDH9cZ",
  "key12": "39hkR2eQezRvSu9LDcTf3ETPEDM9L4HnBWtVkj9R5jRmjR2EuspswXLTnvQhhdBnwCMEAuhbV2L1wmF6pvyDqpJ6",
  "key13": "4CF5YtcNDMhvnZTccApDwSfp8X9Nag8Ui9PCQvyNuMhCX6iCjUoEjF6mtpVhJKwyQU4zqHZkPaCniR9hnJUt9oki",
  "key14": "4gVXEsmQVVpeKkNV26jFi6AVWovbTfvZRzCrQGMGAGCtk6ACS6P6qZbvxGX2umsYcnDZAwEVKVrsS1y2FokTKMsi",
  "key15": "2Xm2rn6tHLqRgzKg2ZJnBEeH2YM18tFM1RJmUG9WwJaM713BqTt1yeeVtYeCcR58mp5vKw8sckm3KrcaBQsXrFyK",
  "key16": "5T8iRdTf5hPr5Y9T5KEV3guiQsS5whgNH5pFr8bU2iyPikfmMEKDjmzigcS3LsdCUmdMSaH6Y371yiSb2CHLu12f",
  "key17": "Qm6hWxvBeMMi5hm518sF51f53FjAdYvEWedaELu3UuRJkpMdFse6TCfvxMxV3EvmJ2DusKAkJapJrsKDM1Pztae",
  "key18": "5znAwydaDnrbf5o4F52mWM3DMx5LfPsWg8xuTpBEEozBF1GqfZZVRtQoEWvC3SJoAxJeByWrsufhAsfgo9jAcnTC",
  "key19": "3Gw6KH9TJXjJ17dB8uJu8eYe5BNjG45nHPbxoo5Uak6aLMRS7BgowvWi7dVgRtP8qwP1mifxsgJoZbqxgG9EXnoK",
  "key20": "2pWSg163nZJZQ779NgnqKgstJj8Wc6KM3LT5gmYfbWW5hcoW5CMMmAGPcdg4iLpevBnoPDr1iaW3UqRi7UwSmQeC",
  "key21": "5dA1oaaMGw346C9EwQZEHV7dP2BEW96dXkLKEzzzrL427eUdDzjRsmkcaATjKNZhtqu5Fh9oGFP2vvcA4C85KcLV",
  "key22": "2HWuvJbpW6TGQkfPB6N81mSbnH8en4x5BM2riWYp3avTfYKMcr9bfqx9mwervX9gsmUJEhHrNqhHe5JGAhNkVt5s",
  "key23": "3ohQRJwPA9BoLd9pshYK184x4Z2mcK8ELSCESSQ4bnRdwo62JmrxRBudtj1gSM2ftpa6bRVjhWgnHAG2Txacm4DU",
  "key24": "3Z1zN9Rjb5NuUwVqYpo3wvfUTLLc9S88czKaW5aEg9vzaMtGCV6kD8LunBrBniS9NPG8hs5JQ5nn35x6X3qCeGom",
  "key25": "TtTsHqHXkxCULus7Dc76FZVtpXrQBWJrYZLnkMtQ4MrKjshv68QKas2GrL8L8PkhNaDM54EoMYerXPadfHKdpMa",
  "key26": "3LrLT71MRrqvBt3aNhvDt1jhfT8rgoB4EV62hTKk5zPHmiKRUGVZnTdJtZdfzHA8R2oBxGCtZResB1pn8JWfMyrC"
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
