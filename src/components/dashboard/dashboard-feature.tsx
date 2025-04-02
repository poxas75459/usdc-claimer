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
    "2wfoSnedXUFWxoge3CqAHp39HqnFqd41dYkJWkxLmsmHbQqtXLTVQKtYePTFaBjPzTGCAzGhuZ3PnCAgX1mrivfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4kpUKUJd6Jbi91qTpqE9hhVqq2L6dRF9BwBLRoFxy4z33bnSbhZn6z37pacyXUjdjoc84jLr57xcGcv1fmoagW",
  "key1": "r7DxUF1DL7n9UigmnbwUFSX6szPdNKyoNLDuLBDxwFyudm9aVaRsSpzsAKZbRPafCH8HCR14N3tYoxDjfAoSPx3",
  "key2": "4gBSQR6Casrp7d54uXhyRuGb5F8QuBpk7qGjgap5QjiPSeoFywucH9816Zjde6P2dbWGbfRnhrzcZC579nBheKtr",
  "key3": "33Bo1ByXaqy5HR3sjonQXz1S1uYFS7jJAywwz7MRWqfWRro4516qSzzANk5YSctogqCMZm4gmsEutmCaLEkdvzZB",
  "key4": "3n9mnC9JQh3cfA6uN9oLWsusmhUF5KDesHKUin5J3L7GCgt54HpR57gY6BkgDP9eAYGHWdLYyGGAoSCi7Hx9P5XP",
  "key5": "2eMQyoJRJC9nX8xkZcofWC1uYsm7XSXDxFdnXo5fkBs6Z9xoSPJVWYMAr5jZR966zVonY19BkDfXq661pirujHwx",
  "key6": "4C5ntWNHcevAUs5LNuSzEjXw5Wx4soXjeEzHL8gybWe6R5oQkbzXdhv279LnEpCgSPgZMnsk5m3qRoPuFQyn8H62",
  "key7": "3e4AHP9XRVcUaMVU78h5C9iJK3MsepTh1K8DNMKJhLZAjSoR91f1Ydvd8rNRsuXwVy6KQpFeeLZtijJgHegFpnjB",
  "key8": "5HrPpWgzWzgcuTiJoUNL3vG79vjRwsiheyDGb1pm2PW3ixzCmCXS6pEruZN72ZK9GiCLn9mwMW2E8eAojDejhZgH",
  "key9": "4666xqneGLik7thgp6ZY2dbozJntHJuEnGEYEQKaKKGGw1AgW6Fk8JZL57yy1c94PHtqV6rcujmqA1WbppzBJz8U",
  "key10": "2iJKxoks8MKGr4f7aQPqSnnweABdk6T3Tudei414TfXTn5P4bmp6RtPLqpYBJ9UZpKxjuJt1SCyQLZNde5PnoVaC",
  "key11": "JzVhRzDXZ1Tc41jJeWUXWdLS1im7uUj5QvdZw5ArgLqyspPKYFccmxzFHqjKGDZhttn7b8Yw1cye9QDFdVPdCbE",
  "key12": "67n1Y5xEpUTD27tXCC6DWFnPXpLDWpRfie8xWcS2Q2cEVG1Pa63J8aAG8GuhsWdWQc96GA24XnDvFzUMEW9w19Ym",
  "key13": "2zfjBTrzLTCPG1ecpy41Ytgfu6KfeKsdpsQnx7UV6e2NPgUUNa7ctuuqpjgRKNEQqvkoGi9Kca6iqrCHqswRqYCt",
  "key14": "27sbELgxYGeANbo2W7amB89G7sJXUiHso3gzp6vSgSz5Zsy1ZaFYzk3wJugmvkx8GsCwAv594xnT8YxZ92ARm9AT",
  "key15": "EvYUGRzuEqUeYK1ZQ4bAq1k6hpdRJ4zd3DVqLHxvPikKprpY6QbwLKv7a46XLmGu6raMVYpEwyADWZF52pmL9n2",
  "key16": "2iW34TcDeKADZEZbADQvozTxctgRyKuKU1KUUg1x82ttY3ge6KYdjeCfApyRQ8Rc8V1dj4XBwmwUhWDMPUbzyRKP",
  "key17": "2usQLPrPeH7CHeCLScMkEoZM1KMb1QhDfps7uzKw1GwmLG6MBXNeoYx7dRXPGxWeBrVmqyhiB1LJUgzvnskJspR",
  "key18": "5FRwp6Dwkp7cSzBd87MusMEhL3ZTx7GeMQ8tELMweF4Ej8Y8VkVB2EVok3hGWyFx1uo5r9sQKmvkwBuprBCHWNKR",
  "key19": "3VhePrUENQMADnuwKCAkodszo4GFjxL2orowxma8DRnB4yDPwkkKRS5L2h2VqfCnX7jsrt53D2mGPe2RVqTzWTmn",
  "key20": "3WngqxgaWxPPo8RshGtNL7dVdiS9bd2GZLJUbvPGRy1ie6XWNfSuUaTb4L4ahvzTDp5zoVSeHCY5zBZ5Gj93V41n",
  "key21": "2VoCme6gC3dsiyQSNqwp7BEiUaefz1mGdEFGdtv8MrNHMiNnDdk3NMT4C71oJM3r5m5xSebeJFeVjYYNiVsnaxFJ",
  "key22": "3HxEY5EMKiKK1gVbgxRFcq7ZNGfx4y7mS8qjojbgAg8wYdL8jjLxiu6a72Q2mXp89qZYjju4rWCkXWVLUjTMfPaw",
  "key23": "2twtaf8UkQe1Cg641AWcTiomWxCmnj1ePXcg8UnQbGN21SpUoypsfKgzBEyzkR4DphtRexEaJp7msJHt1nHHaAdQ",
  "key24": "2qAQKE6c3Ygm6HMu1TSSoUvxQbmKGpMxriKjsf3TFzAnrRcjBFotLP9TtHwFcjUptzRfTKGsUUWYCpgQuHy3cTjj"
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
