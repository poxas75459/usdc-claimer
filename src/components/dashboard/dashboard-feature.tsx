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
    "KfBFN63vtnZSKnTPDtMUJKGZr8jP91hN2CgPU85JKHuSp2hUbb2gVjeYfQ1a23sifmbr6puMbciHc7XtycxFsFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdRaZ5QxDj6tWingiLj86k7jgJ2evwtZ3YPSQ7SRB21fpg69FPZhetYkjaiYf5XDbN15Q3RgHqW7KmA1LdspnEo",
  "key1": "3NYLR9wfwjwqkEt9eAU8v7vuAaBqcLTa74WHqdG4jMBYad4xijnNLMUJLv7UpZxvQ1QwVweiq2xhYKJ6Ejpu7A4G",
  "key2": "3HvPJw4VhA8XAa11WNbVkQo8FQhWHrJ7bXKiLDkFWvm4gW9G35NEYcX1NJyxsY74r4vY6QJP9iU2kz9Y41ezeELG",
  "key3": "4tM8o8nfmcaBdp5YsqnmpjLVQhVUbnxQ9DEs6QVKbmP6KwRiqD9dQBYtsSJoE83FxpmhyBNmsxgP1kMPWEMeuoJT",
  "key4": "24zSqqdrMtsTxebnWKRtTdo349fBRD9QDSiN3K4EKVtu8M6vnDL9cPJuJMtKYumev1hQtnQ4X68PaHNsY7mczzsD",
  "key5": "58NFid7aCjbJSeiH6TwekrwdG9xo8iZ3s83mQ6xndsRVxXADwYTnRVQPZuACitZqpdZsGMVNYYovXLYn5VJ5vaeh",
  "key6": "2oMEg6qP9SvqBomUnDH8MFRAysEZwWSCPbyWzQEvSTqoX9oYPWucyW1CfezbbCx36DEzBA7q8e1ZjxY4KXgnCm2E",
  "key7": "2DWm2S6Zrgk6TuPPZR1swUJUNJssTZfFGbHPaPUN5WGSy5Q8DJ9ZbAJRwZs7SzaUHmE6pwbYmTT76NwKKtYWdNTX",
  "key8": "4G8sVRsopsbZjex8tHhNoGtKDt3CKU8vvYnSidz7wGCJHrpDxwH3BwLgoQFgKpZyjmhSQrcUwuftKU4TWvKvwavD",
  "key9": "5aZmtgLQaF94rfYMSuCiYmiS9hNoKvUaupahR6s753iyKCYfWaSfaET5zPjeEASrTz9VgPLCnJzZK4m2GKmnb7w4",
  "key10": "2tpWJaM1QnmSSkoFjMJ9hXeBd552NzyDYAhcP1cCu6k7czdxgMfFqdFZMASQhr3BZbHBDeN7e3uPf8uKDfXTiSUe",
  "key11": "2LynQuVG1brx1uyBqANroYekYrKhvqYDaYTWCSnmh7DdpS7MRrzKfiUU38d65jmJhA4H3zNjRdMTcCobRD1y5NFT",
  "key12": "3ifgCwWJNpRzgDj7bcWLWeaQtHUdUWJzUJc79rbG9AmcFD8EGoZmk6VhLfrRmrdicSvgJmmq4ZTNRqgWYjWvnmou",
  "key13": "27UuafMadxHerbeLvXAy9MoHeaG4zXkLkiHMXxiGATLhQRLH3W9yuCD6vHxMPeEvs8qNBNHBbawZtaqPGbzJbkkd",
  "key14": "33Q1KZMKqXgKG16AxfFYsnbqfn7EuLzHnNgfh7WobW7hi9rjX4Ras66YpKTQinXs2E4gXDJka1TEiSVqrKk1FmnH",
  "key15": "gWpLSAVPULkHdn34pxTvwKy2zBZJbscXtqgtwoDmXMT8q1HnzQMBJQMBj1YzxdJcuXzadXS3qZwN6fPN95ZXuMm",
  "key16": "779eQW9PeEf3Hi2XjUJSeu3JyvoNpYfwZ96A8PkXG5CxMdZSMCHWkP5CWK8DYY6RiTiD8dwULnCMfkrRhpUhQA4",
  "key17": "HkhLPkhdFM78a79kxYjTZnuirgJ51cn9fhM6VjXgmgk6rHzt3JADcysH8H3YqmTcr2Nbpr6RXaEisNvKtPpUb6K",
  "key18": "3jbokeJZuWdzMs2eWhpt8JCRsscEVGy6Dwt9vssY2iuej6hBfbgNo44QBEZTmZqSKNWfvNV155wG23bDAHFEm8qu",
  "key19": "28CszC9612ECFCknvfieJAa6G77NHuVuzrFCiNYCCFASjHqseyeZR8cUcT9BRMp17TtEpfFT3zGCLbeDCnr1TgNN",
  "key20": "2aEqjonoG7GGpeWNUYNoPB7KKfLeVHdPqwVovWUUjHK2wQxjSADZFYeTkLJbC8Y417DWsNyyYcYCSF4DYJrPEENT",
  "key21": "4gxPJsJg6KhzDM8DmQfuiSw6D4XcwfEAgB6qYHTTkjnmzKSqN3ThCt2rENuCPPUD5PQcsPj8HgHXeDSaRPA7Kvp8",
  "key22": "goDtf5R2i7mKtxvyQBX7nnkCyWstRh4SBMZEJkNkc6kpSrmSZ47xtrd3iuagZPqNeYkffd8niKQoCqPb2mPWuY8",
  "key23": "56cXmTreLoidvnQoK4fsmvE6iiLZyrNrd2vkhsBRUT7wPKPeqw7Vh7TwgYUuTNaS9yAmiqKLkWWCy59c5naxydkw",
  "key24": "4ozbvHcvgvBqms2iskR1W1BZcRRWNKiMr1KKAy1DacgtuuCvCawPBDCvaPrqDVZurXBPw4vt5egu2i2LyiY5eqK"
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
