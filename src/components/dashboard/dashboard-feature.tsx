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
    "q5SzBh8aydqiy8kLgiWZgMP8tWTYw9qnY7xBw1qJLSD8mGHQeKWpNahS4nebKxEoPrJhAn4D9FLPBCQAy9HCnN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tc2cMKtq41JWhLLGatGUZnmZNu17yjD1oKimd7cd6eoJKDH9Js6QykFdnaiLX6hEnE7VLBfGkMSE74BVM3ounNM",
  "key1": "5LYpPtvVWFzsR8YGRsCzUCaNuDeV15g8NmB5vwJp6ra5mAWVd9HpKpyQ8H2vfEcCfuwKgZ9XbLpwxmU6LL8qnKAG",
  "key2": "2HGNaqfcwP21f5BtjJ2kpoK7Nte922hDA9w8ScUHJb8W2ucf9r9wJ91eGiVCuc8iSPxeMPEFmom7gQT6nY2FAMgF",
  "key3": "5B5Y5idHBjpU2XjrjKP5rmeQYjmAHRRZCfdNJgCfKp4E6DEiwkA3dgMjZsmTsYgyryMuZyLLGqnb63P9nqVVGMmf",
  "key4": "5tj9jg2r36TYt3URFZSsMrAahdzpUZ4W34hKES4bPJqwVmSAuqvx9MiFUNnhAAFML7ZqPGkFLkj3mDd9dCqGqQnD",
  "key5": "YbwohVHey493Cwj2bm6uv7jLkeZgJTqGhrCEHjpmSvYdukmGpodqDx6A1bV5KzU1xxtRJTxsovsqY77yPSrCWPE",
  "key6": "4bvnDTAv5DziFMsvYF69NAmsjxBsSNVUqmWM2tzPeZyxxLN1uw2QUX3NZ7Z5vmhKLwabYG8vMgdKj9AXRLZHZR6X",
  "key7": "28sa5dwJWNUeVxknBdFt6Ai467QY4h2puNdj3yvWV3vr8NXAisDzbmdsQEmym9JTHNjiVAwCy4nWb7gcPr2DuHrw",
  "key8": "38cuebsMfTC7zDhJyAetaa3Y1YyBkN6CdePVExsyJ49FRjio6aFgG9sPFWioMAu5XvHZPCekXugUsPWJdzFyUULQ",
  "key9": "Yg8kbtnu6akqB7LUSs7r3XFp1fKiPQ5A4f7UktYPUzdaEB6MzAcvNZj4Dm5HdoAvvEPB9KutqYMFx5Xt7DoDQQp",
  "key10": "4ibwapXSk1jgZXPm9Qm3b7DLnYC2PnxWtRbvVSJrsqAZR3uj7LZjuYU2rpqRT46hfuRbqKGuwq8VSpsS7XMUpPk1",
  "key11": "41QpAY5ReRZXZXWmXFn2CRjYjjNuJSpn4HRf8i5icYqdDEqpEPMEKeYpbd9cCjojPGGvneFVSnzrfZ9nbdjsE2ov",
  "key12": "447A8NyybaXuEpJbJLBUgFjwBcoiH7SgSTi9MbmTuqC3rHf1WycrWqBiQ3d23ZNux2qnST3ZnrP2QpTZoADLrobT",
  "key13": "5e9LqWdMg1Z8fGXgmcsxYRcvLohk57zbetAQ1YDG75BqFk9NGjEsGFyuBKUjh8UmBQaV1cRWtMhaLb9CpMYy3icQ",
  "key14": "67JeFg3AJkcfjDSzfTgiCgwC5KRJkVQkr8fzEYXsYvyzzEeYpPEdiLwj21PS7oREEps1wn5g7ezVQcqECtELt2eT",
  "key15": "42eknp2oA1MzDqF9Yox8scnhFkGK6huQuuCmpGgGo3i59pPvhPifhdWStErqEJg8GeU6dJxS1kHTS4rvLEg6aEj3",
  "key16": "5G7ZzCtpgQoaG1xEEufzj9cDdV5wdephf7Xfe7a5gUS3fwfNXGX2bS4VNDvH6yenhrBNNiiD74LqSbuC9ApuXJ3r",
  "key17": "2Lgut4KzqFm4pBHiMDgBGnaLVTmRNGxb2AbMX1uyzdM2MTckK2hTCQUw97UfWavnoxp5AiTTLpuZQ9SBgYbUsdjb",
  "key18": "5Be6N4ns6KTgo2dUvUnjPZP2XiHtUxVpNTS6HCzkpQmk9Y8tmmnWiU3tKyEeGV1KR9xLVVVdfpxYsx59QV7wHNFH",
  "key19": "6ZgqFXjXSGP7nMG9awM25J36bERd5r3gf3oZhKcrhn3NKXC918QWpGaesrwQy5nzSyuhUjnY2wSVcGvrjEdwKWc",
  "key20": "2rjeFvXNaHXhS5NjNNc6t6bv9zvDycRGm4eUf5ebsM2giYYWDek6qYydtHZEtkvvBviu7tcM6iBvqzhR5U7JoVX4",
  "key21": "4SR2oH4Z1gLdT75zbtv8EH9uT859he4o41f4KpS3DkTK2q9gYRF6aFNJ5KnYu2E8M7MWxuhjwJArhMV3pjxS9aw1",
  "key22": "4TARzPFgi9oBah1yBDNY69fPZmcqeLzVU1cSejmKSyJzZRyRMdiWsyqH36k4M4Y2g34g5tTqXjXeqw8VzPgjUQpZ",
  "key23": "2QhPWKs3rE3rYv2A6p3aPNr6PW97qryJm2CjccReeQJ3xnY72dc6qTDmcwDzzvpUDMo3nnKPQLaZqG1eTgBkhDi6",
  "key24": "sQr5QnoX8ZkocDCvBXVD3DXTf6TcbAAvb1q7S9pvAcqz4Y9dhzQ4usQUkEpN5LZzUDdC81vUAe5HFonCzcXGDBZ",
  "key25": "2phh3pef3jc34mP7pCUbHbJEU9vJyfafELAoX4HQvTc2VoYF9Mry123jSjanHc2NRe35q7riu5GiTewtrpsLajMZ",
  "key26": "5vXsTXa3BQLZ3W5a8rNAJSsbdcDiewbAy7E2dMk7mjrTYdXbXvz7nNxjLDdpWdG7KVAZfEmEYNiWSL5vDsFw6rnw"
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
