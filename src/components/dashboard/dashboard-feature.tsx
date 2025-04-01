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
    "4UkqFURqPbBM42SVqW1RDJuEaCbCs64idUiyPnjrhDdnYXUmK9KbzqgbKoBZs42h42bwm5kX94pBrBFTfGhpnkWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fc973dKVgZnPGp1z3XSxMjTBAD3hPqRCyT9vEmvJfCPyayNPrewcFQLi6M8M55xao1koegVkmte9JotQvh7hb6b",
  "key1": "5gubRdw1ES8mCx1aR3jVxyyd5KjbeCoaiaVaDSuzJaEzdNKRvWT7yVKqihqiaJkDX2KM3dycjuw7gtzwpc2tk5if",
  "key2": "46AFGDduKAaBT3dbvRkZKLSXh6B3MFAXAcMxuuKWeVHkof7Ltd3oLX6RXYSpChA4SiDyouRYmyYn5UJxZhsSsoKL",
  "key3": "3bCLPBbBxbGZzuc6t6dcu7rVoeNk14b5r8jAkGKwD6jN91cDktKRexGEcuX2d1AKTSakEjP5yJzEgTvPfvFp9HwF",
  "key4": "RAfin9nqLJB9RwQhGH66Z4BMk8mChjhKopSQLh4hKDV7zftkLBJtqxSFmUmaU9n6Jx5V7ZekGGUDAHkU3qix4b5",
  "key5": "3xEYRRB8zhkkcjvuriJyrZNtCAqXtPmqZ6DM4RMXJUHnX6TGCagaiZnqRfpXYBDa8SUTtt8TqXFWP3vraDndie4Z",
  "key6": "Nbz3Q912HvceXK4E9iZvAJ4LP9yCkjkjzJKmD4NMsTTrgti6Pj1FiayNcPCNwmMPWkpSrkjNKVjaQGzfeSMWcuQ",
  "key7": "3ArX1zYtLGax6EvLEe7ZKCB2b9aL5Lf3dMrCesTzdU9PzyeABDuYJPToMJcKphsV2XWWq1Nx4FZMbE8w9MMMJVvG",
  "key8": "5ZTUs8NKLy6VDqXncuPPkvehyx1pj56DrESmMrfiTYAtwzbBM4aookzY1y9qFfFMcsdGE4ZrJq7PRJpipRYrvean",
  "key9": "2Y4KzpoMNb5zEtNVWy9RqUZArFGBrphnb2XRXRt3JKBFKAve4bsisjg5dm4sDuMXeenf77yDVVBdVkAH91nQqmk",
  "key10": "5zHPUs4omp3jnaTAR7hZL8NgGJ9emerLsxA9PFM6S9ithGkJGwkdKwXANDz4udSUoGNJ9jfvd1qHZ5bJETRC2Rbp",
  "key11": "3qASsXPnFLyJJwXWsUp7xDDt5dNyW4dB9juiJnimSjgZ8r2M9DM6qraCdYC3G6eag6jsZJDcVgpSYyniL7QfayjV",
  "key12": "BKjhUYiKA77XRyHJzo8Zy6HTX3K7GNJdUtYHBJmAUie8go3Hq36Q3c2mGdjTbvtUupdH2UVWRy1uSQjTuQRQbzh",
  "key13": "gvVAKsERsg9rqEkjb9Ghcpfgg9DzBcjBy1WgouQ4Eteu5ZixaR2HqvcsvdPYm9WyLyrqu4FJm52xQUw1HHvNafw",
  "key14": "53sM6Te6QqzhH5x3bzDwmg3pT2LqCe18d4fqtNKFyXJa6NWkocTb4NG3ybvNNsrQ3eMBCYbcubw9pWAv8hUW5PEt",
  "key15": "3N4W9aYtPRJ4voPj8PFTUtnfmACtQzpWQNuNQTrqAiTTjp1aLPy2Q7wpW4Tike9718Z4xPHec2sS59vCEWMoSjPD",
  "key16": "GATETkMhFsDFUcLKZKcyEb44CwuN1TB9XBN4ZC6xqQ4MZNpguo752ato37jpW1noTchBCTQ6uLyZxm68fNUa6Tc",
  "key17": "2KjgZvv8K5cNYCNZArMKoxRinqoNH1UxHsUR2SRWE6MbixiCqePZ34SQ7YLceypBFbYDCQS8d6JQvB9oECeZBXEG",
  "key18": "5oJDjwhsMT1ZcgFoSrHR99TE3ZpJVesXvRgHJRcsJnGaLSzpmGQK7UrNwbTA1NKm3LsxTKT8UVfSm8VCabNmWDP9",
  "key19": "61MeyPa12fDuEnsNt61bzgS5rM9eLHQMg3J3dwvrcKPBkn4f6LReznJvpnUbTNRf9WJJwjKKtzj3FkiSXsAYP2q3",
  "key20": "3ikQUAMxQ8YQfYLEwKiPzWbuS23QivpqU5xrUsBpP36SEYWyRvLjRwPULta5e7H8cpx5D5TjH9Gk2QDVZcZPWbwV",
  "key21": "63MFZ68KSZVK2iYNvoUdtRMkVC7dynVPyxBvuktpJf5dcnP9rSZgvEWtg8rZStTqCjgPwtwqg9MCL7nfS524oPt7",
  "key22": "4nMY5MYE3NjQ9BVHFAN8kT7TcNEqipECrZ9AfgqyY4wP9gTnUkg1PsbpmefEaNBYqk9tgfBtxigtKRqkYrNEtvU6",
  "key23": "2A11e1F3gcXGHGNaMQL2vUdnKUtLrLzAzv56TxZBEWG1KmmdgGqdAhxAa2ggpioQnhZDr2s2zu5jYqwQrtAb7Cq3",
  "key24": "jt8agDBACQymVfCkJHB5WCuqQFiemdFZpoSSEBUFyDvnz4f3mE2CQ58RVqcJCfmooWhWEdZ6c8QNyrh8GoCC9SE"
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
