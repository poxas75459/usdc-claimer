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
    "zd76fdKFTZ64sTSamMo2zm91fWaXLCMg1eqyGXPbhs9b41xxir86g2cNAHAcJMRMx8dHeC76X8qHCoYnymvgQn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7fsiEBkNxzAJfgchjY7r4Znpe51NtN1jV6jSuauBHmVdPQFb4qpLprjKj6LtLzqrveBu5x81joCBfQv6mV1SP1",
  "key1": "4Xtn7ntvUZsAz1DUhvMMgdNPXSni9ea2jq8Be99pk9XScGF2QdkZTUTi1dKSLL8n2zACqJayEbawbXgNJmQzmuiR",
  "key2": "3991KVmwM5VNDFkKL3iTqWDxV8F4k1ytQV78owV6DGWzeYth39GMTS36gWcxTukyHqT8pu7P4G4UuMKNxAipVyGo",
  "key3": "5r5ciSZF5tNsLx5Vncc4JbbGQc2iojsQv2c1oQdZejEfcxUoVhcnUp6gBnYTPp6pdkesvppiQFoBVNx8UdhTVo7P",
  "key4": "58Kannu5YLN9zCZyc7jpeVzT4TwLRMJn9Gj8uPbzco5syKJeKGj9vbTY2hbu22HxuNTy3Xp1Hfek9cFxRisUGSvL",
  "key5": "4ywwgp7LGNjpkZzSheVcaef4EYNzCFNf5gqMFTfHoad4CkF1WMhAqU7xbK3RJgqxKEUWeACuhyZz4N82fZryVt4m",
  "key6": "5rfG2Rtocv1nG6nfybnQ77EMkTyUdF7EZtt8sRUqJzWdcYXggyDdmXyTDuXSEavkpch2LgAaJeY6EGvohhKpYzoH",
  "key7": "2TvcG86Tn6efH9Ae7e6hUCQHxANdMfQcvzi7Qm8kAzSYjJK8kTL93Xu3LG455sddpxnCAGQ3xemeUvrMT1YEVCa7",
  "key8": "2YayfYo725iY1cdyBMUi5aWYSLxEDNhivBgj4sEWJyyzxGUszyY7XD6iwmbC5FL73nGjvx1jBzQaZdnB1cWAZnmc",
  "key9": "3YX1Anr4K53wy73K3gdHTacYtpCyaaXFqVm1vqbqYRbg9uYoF5mnJkrGJhdTHs84J4AzcuTsLtfUSeqFB3YpU3X6",
  "key10": "4rgaQEAw8RvzZoHfw6qy5KCfwEk3xM3jzm6Mk1tC4KzURRsnKEoPq1VCFj8uX1HD2drMhyeV6iBzrQKaWGzj59zH",
  "key11": "j4WLnimWSLJQNeXTG74Gw38t4ZsLxXoVPgLxpqy61ZmPJffYC2bWVVdLCGDLRVAw88fZXs1Kf5BxrzGTPVWLaJw",
  "key12": "5wjHp4DP6bdukAjL3M3EtgC9Gg6nqG3DPmR7BWPCbYg6mZrKpkdjgQiNoR142zdFfHSFEX2KDsCXbHXFUQis2PHG",
  "key13": "4E3fyAZ88PMDzQq5fcuHNUeQG5wE3HcWKUJhJ9HwJmg9W7nu3i9Bs8vrA5MPjSwaRFhYFpaJATeswqEnch432M1G",
  "key14": "3YybTvTDpPQkepQYRkEuuNFSMH7VhzPPXu9GNA2iVSbY5kbQ3kh8hyWqXzDy66NEzTHAp26eAju5f86wd1PekERy",
  "key15": "QUML1g94pQjT4QS7gMRCG5Q9AP8QdMjMDd2hPciz1uYj3C1VZipBeqgRbWaT7NS6zoik92CpTpRi9xR5fcmKRHB",
  "key16": "3eNabE4so8FrEZisasvk5NHWKTMHgbZqzD2YBwcXNzRfQqMaFbP9dBo3u82CspGs2ATRYE1jLAK8m7hJHVPwmd8y",
  "key17": "5QVf3mRK9z6bpqRiPFASAm7nHKc7AunDUaKBZm7Jq9fWHntoVYM5sFGNNxrwtkgZ7tvsJfjRWdSiiGJTrNZ1MzmH",
  "key18": "58QURV8wEPKztxB1v7kKgVPKi361B8qPP5ENLtCYLvSAMsBJy4nJjzQ6hDXZwHXNcZHSiKwJRx3KrQPXskZugaMB",
  "key19": "2fqiTjm1U6MPCA7LhGmkaMjK1CdeWU3ay2sreg9Xuzo68xGvw7JVtK76eXuyn5Hs31vXjumuGffjTvTfGAk8DwB2",
  "key20": "5stJa3WZz2FfHWrDegtUpRcfzSFrCVcmFJjBCrVu9WcocKc33XF7kAV5UGuLxH9KoXB1sz6YCJVwuYa5coB4mGPa",
  "key21": "4CZtQjkU3WEWc3DuNaqC5rFnqK945yrVND4w6qCycS2zugXybeiXWkA94Fce4xVBShQYc9B16k2YdcKZNM2WdhVs",
  "key22": "3QRb3ZoipbAHMuxxWjqVP88QGrDs553oBx26Grhj5sYhvEhRnZiZ1shosQL4kmd7EFeKSz8XP4vwe1H6EUMc8Px4",
  "key23": "2Q2tRmV8XPLZT14EGWd4Y4jtkzHVVKVc1L8N1opqEHFYTH3W6TuV6YRxDJWJs6DVbtJTDsugX43FggXJMS2CZc6i",
  "key24": "5PiGkia63mL9Ax5fHDBFsizdypdjbRH7sHNrpRihJ1e9z7uriubYE8yPPNs7mv415s87N4LCHzZm5dQMjKmVQ8f6",
  "key25": "4fT1Db7KCJbNMb8MngsvBEwhUbfXNfQHxkd6VBbwm5cUnzHHXyszYBVbVERxxb5Hk4XKXkPkbQePHUoCVAGRs3ak"
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
