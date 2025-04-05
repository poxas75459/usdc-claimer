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
    "5qJMEmQJyEqMzM1cUSU72xyKYJr895JGHAxJdg1ny9jgkzUZ5rvTiBW5sodo2nGYWgQQ8tUP6gfjXcFGpALygTN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuESUwPCHFS6NBi96cD774jXppvDostHx3SsSZRQEcuRU1k1Nmj1RkRbxZa8z9C1YZQuqfZfuwpgb1TqmdBGH1m",
  "key1": "4KbKY9NeTGtKnMqb4RU4NmaTCgU7mAc8F1GCMERntfyxqewDVJomeiurs7xatUP7f8HEbzubYL8T5YbEWpridbGm",
  "key2": "2gBcyJJKCcdv6o7RjKuEL9UmbNCymf8mX6e4Am4yCMbUJkFrQHX5bLisQAfGtKtoMNmomsrysWtZVzx2ZbpS3qGq",
  "key3": "ZSnZdpEs7XgUjeQ62p14E1QAQSbz2gP5pSXorHYoMHT5RmJmJZfDNc3TgYyt7m6deTtuycyXtP8XD1iyz7xrLaK",
  "key4": "55aKRLbdyDSiDdn37pAULQGi3v2zPttWMFvGXTFQQDX5eLLeSTWmETK2avjt3Q2JBFVmGhuc5t9ggN2mVYyP3Jyg",
  "key5": "2AvvPxTXCeUD4gMQqJNzRs5d7HdRBCMRjJvsWj6CVcNdbmG1DymNgR7S8XG1SLDFjk7ibXSo9Jora7WyZGrLkfJX",
  "key6": "5sZ62D4PiqhnZtNMEoqysLVZdWV5eq7dxGoG6WQzBDHdE5yYfmzEkhywhVcTqd6sTg3HJ9sLFVmR9ahQcFcZd4Ak",
  "key7": "3mRHRGDWt6Msz64ns8zC7X5WoZhTszpU8QDLa69MMHNJdDFHFy3eya2VPifrTQi37HXm4Q38RUTiS4um1Bs5cFuh",
  "key8": "GYbTssxxfzSBzQyRR1tFUoRLv2BoYyQWHFFVVGsxvjCCry5Nz5gy6zxZMCiskdRtdS4xM6H4zmVmMeKm2cUm4to",
  "key9": "2kKV2eeSuZfsRtb6jrSWr8YSoHcu1CwSMyNfV2Vt4k8YauM87o8cQoVy2f3MhqCW2fJ1VsVCZ1sf1xjR31iJY7yf",
  "key10": "5nWPRQbeLWifkN3HApC46KCD4RaZNLrbKLhuy6o8x3CfA2KHJHQtkKVWUkHE7TCJKwhKjYz3bVnq29f7QsXB2NKc",
  "key11": "25vkBm1axMxu6fNwNXVZzHfPuvwMN1x8Fn2J8Gt6qtR1iHAcdZGC55cRuE8tZnSVyxsDaZBJCzg6xvmqt2up4nnP",
  "key12": "4XVNE4BXxRsWzAM2C36FBrEMNfWieFEg7p8AMv3UmWzPNbak35EhUxxwdr6wR1SBGc1EU7mw8kmAcqBNij9cwtYT",
  "key13": "DoTF8wTst98KM3ZLvGJwybBeVVmX6vgR41sMRFD1g6ebqpmBgTeuCvc8kTDQATryLdthFAVukiEeNdPo8srinUf",
  "key14": "4tBRBbqrn4upLXgtm5dTgMNYMuCTERjKzCHEBeFG4yQjxBHnpD1sS9YAnmkuNTnBhueNiAA5Kkn8utc1zDhSr8sv",
  "key15": "3VrLEfjNQrCWp6iDEW1yCJLWP9p1DWDT7v9FZ3hU2db36CTCuow8XG314vF7hfwr5YtmRPYfZDaJ7ytwJcVJbPDL",
  "key16": "2AVzENgQDkazrFbchFQAjMC2qUq3ysYmydaExLjWrDDWjYk7hYakqptFRGjyLwh8AAD7EMTJQedACU9iTEFDn6Wg",
  "key17": "4kf6r5vR1bBW58eKvZkAe7Y2ViaMssa8RGCFFg6gbVrXFPa9CQNySPsSVjstsaKFvXGvLDR4RVqdS9iUdn5tXu94",
  "key18": "sMpk2kyNHRX3w8VUp9Z5zZeBiTmvcF9F9MKRhfZMxeQebMLcfkpFUgSw7GKjUuj9pq39dQXRRWYt5F1yR5zSSh4",
  "key19": "5Y8PyDL76ZMwzgUDAYRVGWwnhM5rgB1ZFRb5HFQapPsA4cp57XGZpDcYmLNBeV6Jo2TaJjMRZMQwtWKZnsLKP5eW",
  "key20": "3ZBASdkSs4ZNbby14QxC3CuMmNMZFErBVLQABMBokunsgmTAsmtxBR2htrxphXWvSpcxqbgk3oUsdEyXYrVnnkFD",
  "key21": "4vr9tVBgz8iaVD2ZLYvcMjvG3A5NxrSCgQ1wM6kdfMKjpAEGufAGCma3iMMJg6gxDa1jcjgo9Y3yVwkjMoqcE6qA",
  "key22": "4W1wUSeg1xeKEiXRQtRZ19w3Fdgwagzy9BBbvpgzAonDytjC599P1dz2APYo2zRVekKiKtBnPQw5i1JCFK7Hkvkc",
  "key23": "5B6cu2Wn9TeBVY4pGBTHkTxy5npnNhQrBYe2o1GYyjDCk6DdwZuzqRPEwyu6KX4aT3gu9k43Xy2fj1DL5FeZmE4R",
  "key24": "5PqYW3DFsUY2i13QBiLqRYE2asfEFumgZudKR7XgUdk2BJEcKVajUrPoemz4fYKKT9MtxcgvSEbPt5speNjUJhsC"
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
