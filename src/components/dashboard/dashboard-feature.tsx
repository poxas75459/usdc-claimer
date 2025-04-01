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
    "7qgwFN9kCfCsakySViAzZZ6Njq4HuELcc8BN5mp5F8zyR1nyHHN31r15xhJARH3wbH3hZoAtLzedLDiTZg2SSg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "owWHtguopaMBKh9dAECLmPuchqK7c3hhUmhwdKUjcEf9JRm3uJn14gmMvXJkxLbwLpsbAUkcYrnHj8SjybZmqSx",
  "key1": "kg9xRgdXMpZiqMbFqn2b9i445xyr8H1o2iCpnnbMvMY7o1fn3fzPuw27PRb5tAtfuWoGduWxYSitZXQioGXJqCm",
  "key2": "4v71rpAKciLKDmkaTRopqRHHsUxzmGb4kHnJEUoquKgGdU8kM7vMWSqVPCgDs6rwLsvn8iDipNs1MJeGBAZ9Xud5",
  "key3": "5EKs2akiEZ9zUZ3vbaoh1W9jbJKrNvdA9WYgwxZEi1LBiAjgb5uJcTMw3xR1JDm5ZWqCJrpxJZ7JuSoZzhfbo9Rg",
  "key4": "5uyYUoeAEMGcsucvKTzQT9LrtqK8wB5yHKXCsrzr3ZiCbgez1rSmZhiBhtC8wmXE15bzbZGhtG7HLhFoz6FpBVCy",
  "key5": "5StzkC8T5kkCPmrrL4gNxZGeu2rzWBFXLge5RppA7w2GqNdXkFfMAdQ5BRCV52eCif3GkwSddWKYfTHNNYvGhKPA",
  "key6": "64axQCXAeHJpnzTwxo8w83U19QHNEdwkSUZvUBpNwBs1qdPhHEqHVxHdJhKz6bzLeuKPNC8mjP6sTZx3udYps8yg",
  "key7": "3aNErvaHE3MitzCg1SwpqCtjdUA3NUkf9HbEb5dm5bGPDQUvvyTPj3E3BMfXiZgaEJqvv18qJajnFuJufo1LtQRW",
  "key8": "7GdxQban5oP3TzB2JaWkcscqKdiU7WWVT618bAoPCqoj8trdAJk4i1YeiLoXNdfTqQKfa59HE5cDTP8Z1Av73Tf",
  "key9": "4UJLN7FWo7NU4xtQU4dRgTWv4HbopLbLMEA4x8VEhXeuYwedpnME1fDjWt3FGnxDZjC1gq8vTsK5wPSVpPbhunsG",
  "key10": "5Z5tWf71XyRCabdCdusLtfM6LFMWb8rGdMbB6HhXp5dYvHAx9hjusEHaNPjtkwiuXWYAj3RynyiA5sCSfuDb62e2",
  "key11": "4ew3hfWsGFbcGJjmT1SChfWtYSgeWAJRzH8EiYRZjUmAsMsxShczCaSGQs8QbeRsVqGhYHN4yEmdk73E2EUzbuvr",
  "key12": "443Y46Vuk4QnYTV6T8fkVBSPRjtFeBYPnBvYVsCr9VQoAepTXxnVEBmbG45p3nQFjYRVpsHQToa82n5cYifGwQgb",
  "key13": "2L8Ts3QmVWx9jgi8UuayGV8J3mXeqe5j1td5KZ73RMu4KGJ9epLeJzV8BzHoUdLp3uyCHUmsRojM2Rym1qY3FbU",
  "key14": "4pnD3egjp61fMwVyNynvTGjTmA3ym6wQb7Xmufu537zJLpVeotGBT99iXafnispFDnCm9p7hPm27mP26F2j78o6w",
  "key15": "5LhTzCYnDu7MhPKUAfLfQFtA25ViMiQL273Pj3dmqjwQAtSmc2cuaYZ5xxvQZT7mTMWdyoxCsDVPeUkqKCyrZEz3",
  "key16": "5FeU2qWgjF5QHW4dWUFDbq1NwhThEmnJbSPetmxgfJgSSBGiTA1BndbnLTRNZpyMHBQhPW5yFfUC1avmwTniz4su",
  "key17": "5yr7nJANTsGY9mVx91N3AyVZugyB42H8roQHTp8QNfR56sKZS5Z9jUbCYhr5j1gfEVHJTKJoxzP12u8ecsU9YpWJ",
  "key18": "svBY8TYRkG9atrbpekuakE2LYzXiYn9FQkMmYD1oeJVHGrjK4FMCbD7dvafsWkqknVqRRqA5KsoYaBco1Cd1GvD",
  "key19": "3vdoDfLTiEFcmtKRfyF6NB1Z7NZv7jpVSK5U4wsZXydgDejUGx5zU3auV4GSEbCTvMyb9rHiJXsR2eDdzB5PG2Kc",
  "key20": "49UnddsA97xNHVXDFtoVU452MUNKL364wV4i26kv44vFtB5CFcNbCiy9vfCoj417xaTrn7J5RuZpVZc1ksUj1Fnm",
  "key21": "4NissbxU9irpLfSWvNTQU4udQgCFm7XaJyxshAmFn9tjrCM8u2rgXyy8abf2JwHxHzWnnb6fpKYaGFKNhoVTyfX",
  "key22": "csEeXazHzW5RkD1eDkp7VJ7fppDJHUhjfNDFuoAKbNem1zrWekEEEPAE7CUK8HZrfWM62oshxBLnbPFn1nWnSzy",
  "key23": "3vXi9epsbJVGJ8zNANucnHv2fGiWCy8bfwqAgaaXBMMzvo75ohC8gLrUqCmXz4Esswd8rY2J6zCoyzBnhGMdfuaY",
  "key24": "3WpS84GQTFqhd4QYxVa6MAPSyY8QnT8a6cpui4jQ95ETUP3Vd9ZWQq1EstSo8GsiQD73EyJHdYWPQx1t7SdidBHo",
  "key25": "vcVcmq7E1JjcqZdLFuhmMGwRKFEKUjR3vZGUUKcVdhY7XcLyzAPsqWp6KCNz4R5Vzp7caSbgzhtCt7hXp53ktzB"
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
