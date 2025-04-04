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
    "3wfhjWWxZdZ57J4d4c3GbG3qLJ2ydaAsfsdwceQg2ykKQUZKwfPWWL1YzyGKXP1J6gmBiywCztKxqoYcstkGonqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjBshubQRXZoSQKJJfEV9NmM7to72yqDSEPZSXwpH274gN9dBRNYBMZwkMH6mu8eBA8MWgfzu77g2a8UC56kKtV",
  "key1": "4Jua95pfCiiT41yyhGxnrfomhcD6RkYzQm44FeqfRKXpSqF9WskXtqY9EwXT6nsaxdeE5e3F49qNhRNEGAuYqZTH",
  "key2": "5ArF7ff62boyb5ns9b9DAEP16d8EpQPYw7BU8AcV5StbicBTZGMCBLkNqqo85B27vcu9RxPUbQhHuqtvQjirwDnf",
  "key3": "484uqUX9X7RVfPFFRtxFUtXAvgzySMDobprnbPXhqyx1FpQ6iMPA45XCM67MBntPX3XwQuSKTgeGxwHGiBjWNoip",
  "key4": "26UroNJnQTu3jQB8Q8b7PDmQjrRQT5kvfV5KZXxfYiLYYgp8prjQRPV2MUXXtF7dJkYbEH86sPFS9b4t5mQk2vNP",
  "key5": "3pjs4As4B4bSosJ893fGiDqdSoXsGyDCCW9nrQpb5WyqWLfxDb1SmqDLfReygLqhuihCdnTqeiRKXXsmWDbiNzHQ",
  "key6": "5z1PjPfYuEW7QfW8yrq43tjdbYbhJDcKYw5xMHR8BWv9E6WBLRbKAWjoRsmhMi1gHN4jym6d4XDJb5Az3VoK7mre",
  "key7": "5HuoCNFLhQWbeGVSb46ntV9njWHa1LeCagAVrF5KXJHBaRn8Bd4UTg9niSPi2ztDP1xZVLXevtjpTNnxXg8DMoiZ",
  "key8": "3bvNWLpDxkxGirH47Kyir6SMiKhNi2nYsFagXjqa8YemGr2Xx5HfBXi8kFy8ggomYf7RXRNbm6cjXUnZyq1WTBNP",
  "key9": "gvHvuzjRLgb9boRggrpRUky3neqDTsUEhjK3QMZPMz51GXzeAadD4BaxNMACxv7gV4ZgZCH9emH3r4GBzU2gk1w",
  "key10": "izaEXaG4Wic2a5am2RXEshr3ecwV7HkG8Ud9RN3QhJYeNDuzuikLuZYGRSFUgMgJn33capJpHFFuLEY5QRZiWoH",
  "key11": "LwACpk4QVnmpphSCMw3sUgQvVz9bmgt5DH1xtPXiZ6sHQbnMpnCru8z2oiBpGp5ZpLmM3ZAtLL1h9qoxfWNb3vv",
  "key12": "5jsTwGra3P3cnCvnGmk6WcgMUkzaf5yM8GPEuSuQRcE9g8ernzxsaym98xYXYRyajFStBHvUqhvjRs6iXgrh3mNW",
  "key13": "3kSYUqywCEvHCrXMuWbAp9hafVK1qpjYAJHFg5SvTU4seeMU8CG7pwX1236AYDHZRPUiSZjogDP3yVV3euhzYgYq",
  "key14": "5aGt8yDi72MnEB5Tt6R46Jqor5wvvssYbbChSr4yKQnD9SF5hwUrTx3J1x7ffPUjLro7Hk52F71fkp2zbv3Lqw3T",
  "key15": "3f1LL1vSSFbKdX8o2xupiUCkVJoHwb6ndChtuL1ZahVuQ9sXUL2Pv8TcMGUDgs2BRt9ip4argYFxbRhj3jXPjRPp",
  "key16": "24AFEwfM39HEjGc5ouCchuwBXCvD7cYZ7iRwadQHPSwwfVSbHVnZP6k5QEEHv26RdoSKNVdpqBWfRtdxjyeJy6gV",
  "key17": "Cfk6M49NwreZAgsf9Cpe6FvWA9dUrNGCGTtpM1eaPRNNywk8ryfMfbbiro3Z3RLwLsjwnY98rJ3J24UFqgAKVmX",
  "key18": "2jzfvtPv5X3ghmj8hgqxv2vafg9mwWTJHTj5xi7m5ChsYoB3MuvVQMzJGgjbxntpxbA3rqFErNrD6Vv4aBUR9npD",
  "key19": "4vjrVHLc1JEJABzVzazXn8sJoEwhxPkAmEjoar7Y6XBcSpC8Wa3buCiDdz7mHFM8EhCMHCw8Vc9egb3QCJcjXUKQ",
  "key20": "2SSeYUemZAfb9hb28yoPtJPR5GC5DQgCZNpV3sg9rivbkvvLg42MpmyQFDeUGz5xXppFedUHCLvgeSqbiGJDeRQ1",
  "key21": "4ifm8BAN4zdvo6kXAQEqmQe5PPVq2bJc1pVm5LMaiJjGPPSRvW36BGdXVszcZt6NcuQ74Xb5qMEqJanBuLFNeMUN",
  "key22": "46nXQG3HXoAjc2gQ9mpAxyuFJRZxiAU3BhWq51PhaUPR21dToqdKjwqnStYA7kJSFZMNbnWkz2Hopnmz4sE361W3",
  "key23": "3UkPBEKRJke8arGGoDDgGtm6j9h2KfTojnNXGWP1GaEeGSLtzE86HFWNRWVk4EfafV4gcBytoX4QZSuAzrAj1PsW",
  "key24": "5rbne3g21nT5mGHeeJDV1TeW1Bgb68wvvTTHwTjEYbgWSa1AL3gJ39DDDRf7FATrE3noCWT5U81GhJ55JgsKcTXn",
  "key25": "3s5i3qBzdUSqZx9jCXJBzTSBkhxgzZ15duuY27cpCKhvoEk8rHuSFgpRKPdDG1oUqNYyHFwbJS4iTUsVhEQbwj8U",
  "key26": "3FvnS5VZ3futkDcrimonTKmxCQGctYzth6QXS8RUVYjzaLrNZ1T3Yd6ddg3wv1nGKtmkRZT7G9RFRiYojTTguem6",
  "key27": "2p4TXaJuWZuQTDnWw7ZLmQPeG9M9LdJbgnpyZxxpLxupsbTMR2stjF8xftFmxazeR9adKXKcmXRwE6hu87yFnxuN",
  "key28": "3gHu86dNuLx4oY2VmB99TRVqjWu5mFe8agzGyqZxokAoGpT1RsUv3J7Wq5JhpEHz9ePBfktnjaan9yCSo8WqddmL",
  "key29": "5vajBbrQ8Yu564oMhNWeu4nSsw7EW9NGWKDve7pzufbwQqERWj1YYfNo3nkjHQwtZgiFmGQFxnThxYYUQJu5LvUK",
  "key30": "3x3aMWswz3EP3T5zz1YsVDJaYkwEcwDgVfPrPGmMGabRSp9npdzErvvuttYEqiWK9EE2AGsYnMZq75P6zS4CXZYf",
  "key31": "3ozKU2jxY94baFg8aXMMyjRRjbXyXuYcDsuNcX8kAtpL5dT9TxVa8nyQujD2WJZV3qCSD9V8W5Xn6s7XGnNn6xJR"
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
