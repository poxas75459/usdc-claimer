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
    "4pVPfv4WMfphTHNWuUXRBuTKSQwMKk96EnZd1Sqzmz9A5Ko8PKM4qJyupjJpQ9sDWWkveK5MjXMhhqJb9tvrtmL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhazaqCJf39qLBzKJucJtWVPjLLPyaCDqpiMf1RzFiGbNbQE9Y5tDirB3mbjx9tYWpYYjS9i1SVoiYC6SdUrv4z",
  "key1": "2RnWvQnd8A2NxtADUFx3mtzy6L9NtKrC7cBAWuKwhtDvqRthjLRoLSVX5jwuVLRfbEy2skGYJuZPVLNFjLKMri8T",
  "key2": "5QYEyBXG4qZfNKvvWikKCqWwX3cUVjkTfCpWVV5qzZAHpbgzhmcgLTxR44KthpRH37UwMZyq74RYg6cMMhxsMfmU",
  "key3": "42kXPwd3oQqti6zeXZVRP8N5BQkULE2mfuSa2c2a16GRyPsjgtSg41RoG86Zy3T9i3yBy5sFgGJXYSNdRroTvJaJ",
  "key4": "3mNchfCJDG9ucgpeWMnb3xjbxdMPPe39xaxwKb1hkCUhR4wS11BBPhQAgiapDZvUkPsvzFCpCJ3PBXaq7E3AqY4w",
  "key5": "YdRmXwQm2PGMxFhxYPZNLmqNX1VK8Xu6FDay8dbRMJF4dvz3KyhiGoyZqEHQuYnetvLVwUhBQVgtBCLjkiwEDm8",
  "key6": "91PvuPhP2rRConPAALUwa3PVTx3Md7h9kiDREhKfvfDL5x7FqZe1ay9PbZZFx6kPaqVWzfFNMRdiNHLhBZAMydS",
  "key7": "5PQZd856VUF8oggwnGHyeRMY5mrX9ye8EEWU7jqP2hYw5qcMaTXJoAVC3rSVkbPgMjYSiJ8LM4AGJjgoxYmfkpN6",
  "key8": "R9SKymqDVLzibmR6TNDyjFwgb9DY4f5suwQtaVaHohE55MzSkYfgTTZQogxYrbLzAVUdwnbhHM3A4WVEhFKvmiX",
  "key9": "2b4EWczC7MP49YN54D2hCFGp8LQVfApmJbjNiqv3vWHs1uVDzmtF9T7abVLsu1DLUbsuJakw89T2kuQGxUvSujrq",
  "key10": "ZsVuNbxbP5ydgTJXbXWJonJysBLPBfumD1Z3Nv7CqUuHK1nUwfJAdV3MKRDnSFbX1dZcToV8mGfauLRstKYUaKe",
  "key11": "hsF3WnoGsVaWKs3Q9KhpxLNVvVF4YYCdbZDVvexE9MU6gTzktys5BmMA2hv76Vd2LkDMXNySomSagXfDi2ffXJJ",
  "key12": "4mXYacuCo1awk4NaNRZpSMtHcLJJsWdx2XMmTVVqP2pjzxC1bFNDTqjjj4HencQwAAA4oYkRaVVyn2ANuJT916ia",
  "key13": "47aPmVkRypagNYzacALimGB2Byw1JuoZhy8EiMVrcHM1EdsroEZtZQha4tkbjy8UPNYqW4Dr6pdVAWGH8j1jaWFC",
  "key14": "nx8m8wzqPvhGPJVYD1nthdz96oRzm9r3oPeFYgsm5rsKo6yrqvYmJtfYxJMtGi5RThssULprTwcWwVyyAV5s27z",
  "key15": "49ubPJAkihCmdsAHX4T1SBA6KgYG6LP6Liyn7gVt2i8zeEPXp6eMUQXS9XDMy8A8nmC4YuQwpLbPdFicPPsmLygj",
  "key16": "2Tyw1jtVnmJ7nzWeCQ4yLTMDutDZTYepeY47KUAEy6XC7R8bWpPQQCXKw3BTiPBokMAi4G3gkpv5vGCTiY5Se19D",
  "key17": "5DPQ4846aZQjqZo8KdM1nZ7zn3cVWs37kSc7hFi8yxBVdB7JS4nYAsHBa5QxSYuEK7jKoFY7mT6WVLMzBefSCTib",
  "key18": "3ZyUaZJUBQBmy91kBQLd3Ge2sE45C6BbyFpWakFZcth9uDPQrCiBR7M6i4qEAVRATNdaoADzDWQtEXKYG4WazUbe",
  "key19": "3QPH9MV8Afox1VWNRzcudgZGPyTsmDu9dX3iS4EWW8jRHXb7cmdDB8sDwXxDaxC3EYcxc86EDx2eEoLMfCFnvxEe",
  "key20": "4D2Jx847DXT8YhsXKg88tvecTWwMD5b6BLAWYiExQSk7FNBuy41mGP4iGv2fg4Xt3paw15eH5p1XLTRujrqdMJC6",
  "key21": "5XC8roWj74kJz7cNfQM48E5aZGuhW1tapJ7tcy9iaQkbmS4HHo5bqhGZnZcwGwpzyizCpzQ5rGvf8jaxEPYvC3H9",
  "key22": "5bSPQQr6nWbjS9oQF41FpZfgMAXsvZG2EZXtQKdkkEFy3vV6GZK5SLFoagTNybJLTC7vuBqq9nvaB2UA6npoLMgz",
  "key23": "5oXVs7AyM4HHZqorr663LSsWL7iTMXX7MdxEmrPCyv5cQK1tPuoCToKhbDfMgJMhbg5jLAJe3BCm3temYfiBaiKB",
  "key24": "KmBAZk32W9MqxJTuTXEcL8JYhfwNYZSebR5gExfdbxXFUqHCrMDzw6yXRYAJgHarbi75i72TPrUxhbh7XxHRruA",
  "key25": "4C6NRYue5g1c8sHZVcqFFxySXX2AYkBmC3QYtmhjYQrrMwjX2aRa5hFg8iZdWkanqYWBiydhhVdMimYk5yRdzw9m"
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
