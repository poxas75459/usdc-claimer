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
    "4fKGvbRiCNTyNAF3PboeNcbMRJzySdbRK4LZT9c1CkX8m4MqzdToGMinkJyi7PN2sPxXc9NRooz3ytBZkut81SjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qeAbx9JsfAT2W6jrwxAq6F3FtHUXxJnEmf46TTTcMf4g55i7bUhoPVY2UGGgD96E4ercJ9nRu17owYvoT62KWT",
  "key1": "2KncBQE5yrDsbuRYEYGfdUK5any4oj492teSFqPZcZKWpDDTDroXRAu19uHiExnp2yWAh1ecoZ66wBJ3xaVumSJc",
  "key2": "5ZkuY1i1oM3iHqscvr7g98XjaMZc7H26zFRkjJ7a5Wks4qmc5YbCA9WqEEtg3jVSAyckxZszEiLUXJ9w9WNwYxku",
  "key3": "5BivWreDQ7LgGVp2BQ3sKjYhgsUygkWwGfJSFzRKAfKYWkRYYB1fAKoHpBYJzFofVXWRo8UjudVESwSCQvVdRQfL",
  "key4": "2XZ44MDAsiLDiuG4w3y4dNTXC2ZZBzB9Umo8t7jkooAfDuBhYc4uaWKEfyYeei71CSoehP74zrG8eAq8PCKcsAoL",
  "key5": "2TDWHjwEDaMxsVM6kNQv6fMtr8kQHyhqgPbq5Vwst48ds9YLL1SMgi3HL8oU4ksWsicVbw83P6BhW7psJ4Jh9bGT",
  "key6": "3sLFf3H6KQbX1E4EdvqFwKkGn623HJvcXSCx2XnbGsfqWBXbHyaNBsy1tFGVrDuuuHdDFr6yk4Kbz4yv2BKu1hy9",
  "key7": "5JZxNwhwgv2gp2baJKQtgefjjasNwbqSKEJKFommEqLF73T4ujuGCtZ1xU2sWeLVqY9QsMFM7N1qhjuV6tE4CB4b",
  "key8": "5wM9gZix6QSfYBnZArjDqg7MuNAacQ7DLKSzGDpvaW2QSnrWeMqBr2kNQaU4HNMxejsmSPb4Ta7cPY6Por2M2Exz",
  "key9": "53UWp8YWRdKYxL7Av2hir6cFDNDjMPLdEEomkKMSy8J58QZpZXL4yQtEZJk9rdoax56uM7jHwuxrb6erUE5n57pt",
  "key10": "2M85LXo3DpMfukucpAgG79zBodMjiPxPzyTTWPN7eGtpGwh1cypDj1LPBFu6w34ruMLokwFFy7DVZt7wHTKAPL5C",
  "key11": "2GMGgEHg1GkUsaaF2ydFFwugpqRnb46yzdQvXgXvUBYgJU6dwdtHpNpaTyVRrwSMX5X6Un1FQXXCWSguzNueDnP6",
  "key12": "4YeNNKrkBVww8LhYtHdBYs1GwbHZvrQ3DU1fZFJu7SxyA83YgV46LQ2HDsNJDETDcJUiwoTXNS3if3Ss9PamwLkY",
  "key13": "29QmBvdSNLA7Um3yJbGjE5xS1oS34Pss8FrojzM1vAHXmDatW167nuqbeqroJ9iCbYzthjRsQy8Nk6915gSjkbwk",
  "key14": "3xupgRk83tQ9th5NupJ3zTpHnG6iu1fxZYcT3NZp3HTQKWisZEzvPHM6pwNVxNcSX586LeXic7zri8Ds553267BZ",
  "key15": "4rCShJMMCwPdx6x8z27L8zvL8AxRGczWEtsKwmZLJ2FA7GRcQwqx7aaupHnNpLTbxqyBxfUDgo8JFt5AVPUzZaQy",
  "key16": "eFSPz7v32S4K2W6fvJCUpb7HPcXvu91tFdGpEWKgCoTWBdnJVpo3hJMSuxgbvSezm12jqwAxZkvTDwjBZTFmnfK",
  "key17": "WtYZdaBPaJGU2cF2EB7U2VXNfLpkyrJpoVQ6Dm1urLv8vdQ6iYxZJY2AeHWheGGp2BmyDCGaaA5RKUCXDDduQm5",
  "key18": "5zduWkZCKsvThzRg6R2a1J8b7oFihjRndiXSwwXC62SmAPNVHN9cSuMAkV585jNdYdbSpe4KQgmiBJeodtiQBDe6",
  "key19": "maC98kJRgqWhvBgvuFbLUHsbRW6g19XwYrksaVGBwbXxsTobdGc1eWQJjuEUCrJ45RuDjPrnpbEsTWzVsRyMVL8",
  "key20": "4PNGHRMLhRdFBY6oVDNSECcqnhG7Wg4yoj3NjJfRrXQdjrqt7dAS4hFZTxjGnFTctG59yVhCX5Qw2HBLiqdKqvQ2",
  "key21": "3QLCwATmRPKjgWchBajLLYw14NbqRHcDfQa4hdvHQwmkY8WGaHxEsLPUnk5sJTRHM5UDrYAAmhLnsjj8xZCHfg4S",
  "key22": "4wTqcqh9EKLhpkVyQN3Wdn2qdJRDdMbULtfqcuvTSZfVz3DJmw6evrXySHi193dM5Pdg9kexnrKqkvDsZuvJY4mr",
  "key23": "2jQRCu7E24GUoQTcHPdp9Tcj6EWMkzDLZctWReWP39Q156B8GXsbPb6kNTPeTLreyZrt9aRGDVXrRVYTbh7ATZt5",
  "key24": "xX56ZN61MGvzwiXqcmVHdJdSm8Pzt96WuxivMgbqkTs6HPAgFzSAp3BLLa5ScgrszhJRJyXutMF9hYKhCyh8PGS",
  "key25": "5zimPLDZwd2MvQJppHNVyx62t3xAoxCthc5jspKmBcZUjJYZHDQxn3Paj2EeAtRdZ5hCfUD65rgBiw1jUthewj1s"
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
