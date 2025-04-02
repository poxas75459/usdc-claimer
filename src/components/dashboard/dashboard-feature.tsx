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
    "2antR8XdEYq7xXgBDb49uCPnKP5Sx6ZU2t3jZqHuzkQti79dgGLKzTFynkFz6GzmdqN6BTbYkB7dvrbE7e8cJk2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uc5gPCi8qiieojnYdcALHtVJD3JvYrzgNG1mz57o6spsVqUAeCDQNxnNUwppp6bM4ffJyBh8aNuLCYx8ogh7NEv",
  "key1": "2gUnoWDNgAhJijveMH3tozHTD9duAiWLw4ZBnTEAon7cHcJadw6PQ9Mhwo6toqqgAWyErNAVxuDgqh2E6JSfjnQv",
  "key2": "5ggKdaYtBAeQtPrjgKGt25Qn1r5GB9q976E258JKm83vdK9Wqyoo6JXtNi1ELmUUKFfZNFzthF5vrqUNKcb7Sr8j",
  "key3": "4N7w2tEkf2s3Hinh5yCHqrJG1dPJ9KfY1U3NB6x6JGv6PWAYdYZy2vrrApWwNnNkUJypWAmHCf5GLDQkq89UigSX",
  "key4": "2sdLyD8PkFpxT54AMj9x55Y1Tq9Vbc8dsZahab2MCZfZT14BCA3rVawK7Nq4wx6FgnLkxJECVciWW7pVQaf6kDQ6",
  "key5": "kFKCTomepR9EDRfC8mSReHaz3Z87jja8i2wUxtZgxGoRdFALbAofmpzLhHyPphiyxpSE2xMWsE4ZQyQuKZ6PHpD",
  "key6": "3ohayFhTuEXRnUStENGdkcqnLZNaTL6CCcruvbNiqzfU79UArV8SUv6uw84Yjujn5DcGDbHcpqjgNDaDxUhYQUww",
  "key7": "3edD3mALRAFWFkBU59EWf4XCR6zDHLjUR6QVBM9AgqVqfRHggGdZqHt3jENqvScTQv7hzymTT8Vu6BhPcsikCgWe",
  "key8": "2Wsj9xRcL7UA4YiFYf5rxRUSwn67tsiJQtGCspiw5ydoyY4hrPQX2V6DNp6fVT8d2bKsUkkHdaDQMtsuLwoWQC7G",
  "key9": "3mDnmX3RfqfjuHgyQB7XCPdzfhyiECF5D8FaraAS4QwjUwCGcJmtze6WopEE8ZCuPnEdmEGgRwU4WDZtyvC6cAiE",
  "key10": "2QqYUCwxpnuw4z3zGV8JHwgJh6cqL199ZNZcrvoA8e8cdW3EGF3S3C8jSCSbN58veLDng27QvjEzhqHE3z1qDCxS",
  "key11": "6fKoM58CS1nWEz2V4ymk68nXQdtQsTEwujMs9WpnBuTZzsu2mQvzZNw2GBy8B1vLKz6dSTziDUJ1xNAU8s54vrM",
  "key12": "51rj5vF1gsSy9Y4SBMHyBbRyUecWQVacMqUifeUuLuc3bDjxp5CYVyKBRiWuRmLrYWb45Du7FxBohY3khDVFMb1r",
  "key13": "2831D21P57iQayjbB7biMea79zaXqQJc33ZBy3iW99SuBN1uj1YsBc6iiNDMqsfJnwtQTkb9QkiQ9tfag6jmFmko",
  "key14": "3LCT7MLaCvPrKk6yZ1Dur3wpXuDyZAWh4kmNPynV6CdLjPKxqgPuJyZPLw9SVPSev9S5gY5qRcJ17zdmroQNGGp5",
  "key15": "25ts2vNTskN2mfFfVeKYwmYBQDEKVQiGJNVrnnrW1moSDeUUv3G8SC1Ssa42MBRoWUHS7YnAQJfvoEuKqZMTg1Fk",
  "key16": "2gUb6WCMKFxiznFiAoyzT7hijQrA2ZAQgetfmRPEGL59oB5ZyubHUkyRRWAWZ6VNnr1YLbkbUF5rE39s8FQKzxjS",
  "key17": "5w7G81vSA79uHqen9X4wzshTmbbZrmeXvC6YnvLyicwNHGTWjDe9AJemq7gkaaJm78hhPqiYK37q8Ape5joy1P8Z",
  "key18": "42e3xTCsvYrqhc2QoXJZxyJZiowshFogLEbCXHZANq6qKyTjE5fw1Wj8vTpabLPqbb9fmUXSCF1mimbf3R8QHZTF",
  "key19": "G712yvD3ike97yZPzFk3GF761xPXrx26c9o9g8vRDuAUJNoF9bUHCTVt8Tpf1PRwrStcAgm3awZYdrJxMt6XUbT",
  "key20": "3iFogcgRTd1282tFERq3pbx3q8BnWLV1hftLvKvLBwBwFwnT2s9tnKEnuMx5foMQobnxVPY6F47JVJPxvKuWtENc",
  "key21": "2n9Zb5x4pcXYts2bdE5xmZ2Efmoo3oX9ibvmz84dHH6zZMPnn6eiBefXV8FUs5XdyMAXFyyuaj5RqLa3FpkKmpSw",
  "key22": "3yNkvvN4jNvnVLYVc3ibXbb1qZVZExyRzLEMTbcVSZ6Msz6Wk29R86kG66mPofZ6n5FD8mBPwHa2ggd4B4HYUwtz",
  "key23": "2s8zsA5v6fKHerUTYEtN4fh5XwJedxADVsvfQdibBrsQkDn6gMSVK8bjWAUJgYNabYWkcXsojNshpLFRUVGjHzYy",
  "key24": "559AUnFwugLRXxXMWBSMmgUxSg5sk4ZfCSsLApNSSKPCGwZuDsAEiESm2CPgwi4X91ehRnGypmZL6q6m7CCx8Dsh",
  "key25": "2CFwVc7PtnDEMHZWxMueN8jzj7VQyqyw2F8LLehrhnFLK2FLjKiuYMrcV8EfEWjYN6m6WRxbiJBFnrgKxdZ94HLg",
  "key26": "25GxTn4XrLVxJdquGCdvTtuaDgz6MDk4mirtCj8XbdY3r1dRLWdQmTV1wwu61jbxkjzqTnmvKXUVcf6wEELdc4Hi",
  "key27": "4G3P9ECBMwpNSvbqQCCt8mtjaKWgs5R2dc8pAhtSRr265C6D92sYuWR6bEad7wzzLJJcBEw6w1KgaUtvVcAVBr8v",
  "key28": "52KyBzNW29xjNeo6thH2ZHG7EjBnanhJyLhhPkmFSZuyy6sx6fEg3nyr38bSqjjTKJV4Wifd1Ru3KcMcWdNopiye",
  "key29": "qu29gDTyfjHKMPhkHggnQiC1BCwv82HRDfZX32AQFsN6soXDY7t9VdY6MSpGS5HHi77Z8mUg1JovoYuKHGvDdhs"
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
