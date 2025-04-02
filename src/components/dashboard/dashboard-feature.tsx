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
    "3e46ndLqYKgRoFhrDkWERhPvYNF1xVr7H1oNQLKDHXSg2DzD31KjFna3Nt6BCHXcK3tn3Sg7dCZNnnae4X7jJkFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5cQpyK3vYQ8FQprsePC5nfqgM8JEjJJbroJFNpxnWG3QhPM3ZmZFJac2bMbCEUnyGvFTC16EMNt8BYjtvrrtWM",
  "key1": "4iPteakxZpqb5gpQ5NwJDtiDYfLFQ85twuFAThLeNmeDmhMVoDgpEZQJjvszwD3Lo4xZpMNecXnhcaAQkfB8rc8L",
  "key2": "33G7W9pzTtrsJpN38UXVxxGS97tY2vDvqtnQj7ue7CoNRRZ2dajHBgrDvxczCvmZvDzw1rtU3x1QBuoVq6gjKunM",
  "key3": "5YS9U2vGJFYxH9nnFDvKYJaEntrbdVrr8UMR6exBgsiKgxLhf6GQHQTNw1L3SiDrj1bqrVnTr8uqSK9ZqYcF7FtX",
  "key4": "3S9B8qCbBTBFW5a2fhRcAwsVUM7jTsHvnRBuvBoNJAzYEzxHar1REGebqHCGPVD4nJxMMgxY4Tc368iqu5QVmuAW",
  "key5": "25XCK8i2khqZDHHkMgTM9722H9FZN4Gk8xv2HWgCHD6ay8PStGrbE27LH3YWRnfoY2GMrqW8vctHHXtwuyoMqGLh",
  "key6": "TsJ7ND3yVqtgpwKo2ctDggKNnhNzVqNUYXEuEVpuZYkaFoB5ZhSQ8LxKXUbnkLnFGEbcvM36wm1rHUHp8kCUPCq",
  "key7": "3asgQGuYp355zKD1vRZGXJFZtqrFGV5UxBGyT9hFGNRv9Bar1JeAvrfaFLQo23JjjZaFWRmajgUv2313HbtyUkHm",
  "key8": "o84RXy1fCaMrUXpS2TRnB7BygqEDEZsFZsvpR1StUbDvsWMJP6bEo6WVStfn8sLfYfgugp5rjAEnfwrUk3J7Rig",
  "key9": "91AGYAyKhGK5FNXxFF1mSJdrHQbeCxCmzaBoYRtk9YKEs7DNskboEqdJQpVTYpBz7wDV7hN7bm3Us62yZS81XWk",
  "key10": "36Hct1LXwQwJ2LiFj3DexS1M3Cun1AoCfX1eNExd4muBLEswqG3wvsSJaEAwuHxsnP8WJ8KF2jjnYUEeEKvpHYwt",
  "key11": "3R2Sx7ax8stKHXSvW76q9rfGPTkjrysWs7hjEjvzGQpJQV8o9jxVx333yFhF1cwDB871z57m6oEubaYgWcioZGrt",
  "key12": "2vfiX5TcVQodKTaeqoksbKv1nP1FyA2nMTDNdN31cHhBnyyYXNhJJZJLqAereTB9oPBx2CqaxR8wTsSyLr225n3o",
  "key13": "4n8BVpPEzWQNaNzf5vhALSGokvLGhxfCt8SvqCPRJ6ceWfc8u9cs8ULzcikSLmaCg7ZV635KigXpuMr5kJebrcha",
  "key14": "2bNbyCW86LfA8owFzSscbeocttecigG3haJuVgJrXBmy98pEgkuW57rjMSu9xB7mzaLZydwGyjezMpmHV3FnHetn",
  "key15": "2R5WV8pmm9y4X2y1J8rfqG6jXFgyuVjFE1am6aU6r9fYPH35TmsXap2VZDthBhjfM8vvxxU3aMj2coiyhCD8HDZ5",
  "key16": "2FVbXmSyUshEYD1kjHKdXKWYL33Gwvyey8LTjWhNZtxjjjMMMYvdguQmDrdHuj6avefG4SZG3kd345spyTrxEDn2",
  "key17": "5LAKkDj3SosdKZspx17849bB2nsQGP2axEbfwgpzxWMuGUEo33qaMnLJqYi64JJhbEbwe4FZGK6Bz68kzN1E2La5",
  "key18": "5qsE98kFVAxRiHkePb5wmZ3Q9RgdzmbAo8jRHHRFXcpzRgSqACSjGreebxnCXjXq9eGoFXGQzGV8Hs9fYhyBdjkz",
  "key19": "tBQWhmTr8oq5MsH99Fid2MAnWqFhjRkfVcnosVgGjaBUg41QaNpJzk74Pg8rtCT3T8PvrqSW6oAt3duSAuQVs3m",
  "key20": "BU8Yq2jJzvae3Vt18BWiGYoCECkJKHgWPowx3zb9d9bX2QvD7HbgDiBuotrKyZqfPWE5gfv6gHBLMZpK7rgpK7H",
  "key21": "bmCKr6QX6u64cFAmoWhk1aDQ2D1KkZ95XfjwzUC2NzXX8gAXFP7rp7rCmW9oYfJCdpKmUoh6dR8Yk68kdhMxr8C",
  "key22": "VYbN2pjp3pUsrwc69u8VgQhQs9ZE7AmYzuUWzj3v25YvQMZQfcHjWqqLUpsQzEoBup72YeohfmiSWzFCxVkJrBB",
  "key23": "B2NH4educhrYdTeJish6DfBjq3mAjAnuZL5sSVNj5QSQg9tun8QK4nS81wSYcEGtqnFQQw1SAJMAG7TpMFWLBg4",
  "key24": "3DuHzqoDh2m55KzbWV3oZ4t7NE2cVVYEri6VkhNVLnA5fioPrfAZKEDMDvwLwTNDrLRkUPqkPoXwprakReSxAm95",
  "key25": "5MqPjqmiXF84p7P9PqhSjjh7928UQogYpUfreaiX6bDV6pGxNCi1yvomA7cQMDGpf8TpqYHFJi2DGbHJxnnHWmFE",
  "key26": "d1CarqhfsKJbZy1ktUhnzirGQRknNrT3M6x4saiSbS2jLTPpGEW9TBgvVCKyvAiLiNUJnEK4TnEujUXcxEPJEXH"
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
