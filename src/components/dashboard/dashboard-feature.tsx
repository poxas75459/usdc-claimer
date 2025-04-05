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
    "5qmbwnL6wBnt7w4QC1GeS5B6nmHVNAks2gw7iqiVWnPwx1HToENs1UGBYE6JqXW29mDmWYhS4ftkbnpGA2Sbx2yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5yY1x32xwY9TBgnN9BjggditTMKb8bwLx6Lpe8fbRNPV25Jqzd4tGPnmeUDwRQczhSWzeUYdpxSuhkWM89h539",
  "key1": "3v8HTAUegdroQK9DJHxvf1CDtZkNK1WhzEE1De5YjmGV5NwrYmuYCVi5o9PhqKL4U5pexwJQ8cVvJVWnQ3cpHBoV",
  "key2": "4qB3rvhogZd3vWL9H9Zts6RVtytg51C3noFtUq4rVEM9GpgJh8SLkaPUpJqF3rMnXjWgacFo7YoqRXYwvWbNe7wa",
  "key3": "4i6xMPXheW4fqK2cUgAsoAEKtiaBUXsxFPUynDGRW6DTTLmoWX9vig7E97QthzNrqRwC4CKaU2QvhNPduKYQdR5o",
  "key4": "5BGRPJSnEycSGzyjJCqeiSL9LUMQCuVg97Ld3HEswxMJwZhpeurmGryvM3opGdaAjuBEe4QsEQ6SWbABzfkqS8c2",
  "key5": "5omugCJ8BNNPNQwkrJ4DZPfuCRz5Zyz696pmhfSgZJBcckoyguB4huAq9sqkgtdWywqMwTCGTuW54Xu9Z5Q5FPJM",
  "key6": "fyCJCUsfp1V25D4TztedR6Ssu83WTK78EFmfFBX9w8Kh8FbXr1AFeWdNGRUXNT4rmsNS8aV2XuTLkekDtC1RwRm",
  "key7": "4PYWwFaedvaxEgSUURfVHgrwyGkXmw7j7ywwxaRnaSxwL78cmpL6b3qnzP2MGpkfYLiyZbM71ckuTbtsLiAvP5p",
  "key8": "5rtZmmKmhpv4KbbTVz7H1baX7fRGVhrX6LRbXB2MGdGDuRpuFsUkmwp2hFhKN76Piy3B8Q661TU4B7RqCGmY7a6P",
  "key9": "4rqHy4QBtZni7vWgWukAxtMwproZUun36ePjWNK7t1fiBiEyfT6rACMJt8XnxXAp2wsjDerKnNts6MPbWWTo49eG",
  "key10": "2Ca7uZ6M2jddgboRXSkLMRvyDbAjd686D6Zq2dfptjwGAjnWs8vQpBP5hArXKo3B8MfWPjeNNgaKJPAxE7YQL5RP",
  "key11": "e448eqDr1rvGRVPUrnyfp44dNvygerEPVQJMm214emzN3bCjsbo1RHxvMSY9Xw16rvm85S8HEjTLENuCbb48SUY",
  "key12": "4vZYJA2gvdAZvXxYKq7YcqWLpjv6mzxRuDiW8p2QiC8Ccoo4wtLUVJA6vEMTw9SbyZMe8yUUEwRBmax2ygrPoAQ8",
  "key13": "4fvE81RAF2g9c15uunnXUx89kuNDnUa1rSxwi9Rq4qddDrmmYCdDMDCydvPftyK1QwaC7PgNYkz9LCVvZ6eNTyKQ",
  "key14": "3nyVsd5DAzyz2xBhQDNrv2pTixeNcEM9r8pFfnJ2r82N6YNPesFyAR7cwpCyRCeb4e4LSV2wANKoib15LCdF7EoH",
  "key15": "355dJAxoLs4jFZHDvbBDTAks9omqHUbfWU5YjpMjhLG8Mf7ZeFH4TDzZ1Q9cwgVfoWnNCHJQGgh7oRJWtVYei85N",
  "key16": "3pu9DA8XnTU9KJTjBGTZ7BR9hG7pHSbM4chvjTt5kabLHstevUswL9nFyBUghf1g7MLe5ViY8gAKaw5TE2H36HuT",
  "key17": "3rXp4ycbnQRwKnb1LCvGeVFWAJCKdrcbAVsC42xN6fncpPEZQRnnWjfqNX9HBFzrS8xgMV2ctH6cb3ALD2TXv1cR",
  "key18": "3VcyZRViC3equUP4eBrQMftm6jBAYZniymhZefrgRPunomTgNLpbZj5R7N5e3MwyJKdVxY3s2JPPifGY2PDTq6Qh",
  "key19": "5ywSmTvk2FhFXEPvSfqUoZErEZpdwADfWUX9k7tWNgyVdG238cbyr5HBAGsdhtH5J9BANCqtRUTUUiARNS9j2brT",
  "key20": "2cNowQcEeamMxEETJwD9AgwKMj76aptaZG6Up1f3nHy9ygzUrsvoyDB5yXUFddrTJhXz3FUe3ntsSAw7ygnUM2Zp",
  "key21": "iN76Y9fMZSJGQHXN4UUBXywppj49u94f3gry4k2S25PfSBaTbEH4WqDWCzAB5iusb2qy2AUu5RwL7PBjggm4tFW",
  "key22": "2hh8UcefmKMRYsFBUZ4MAgs2YvKe1wpeLZLRH8XHZZPeheQANJkRmu51gD9E7FqccGK7VqQcktMpjC5ezo1ij4Bv",
  "key23": "2ZCGLJhxrftYPv5BVx4KfVe4D6ur5FvbB3Xwf7DspLaNWVTE77zQgn5GSJXr5s4DS3jjbDtcWssDcDh11CGVDsM",
  "key24": "5GSgMdJeSGG8S11JSZNjWN3rEcQvBYnCoE8xtn9qfNYzh7fsEm4e46YZWiQZ7faSFDULZGbAHR6M5kTsjiZqYTxN",
  "key25": "mcv7MEWLWk7v119ki61yyBjh8eqnS3VcUtJtKgnmCqhayzWUgtAh454CfA7Cp2tqYD8WEjzjLLugAKiBmRgnyu8",
  "key26": "5pVZ4X7gD1nE57qpaNUi1njJkvd2NXxmkvNXuA4BTMFtYpvoWCEYwaG9YPByZxkfoDSs8JKhJkDnyQKo8ukR5jUR"
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
