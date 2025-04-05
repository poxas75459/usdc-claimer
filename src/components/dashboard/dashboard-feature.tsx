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
    "44dzc3ihKDCcwhLaq5g6r6cwriMeebQDgdTuo5qbCS5vG1eKDP9k1vRjcuoGnq58pxR5F2r1zLZSiEwSPPfH9iEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548kyG5Re4HjZG87q8CJaT692Fposbd13uRWq3TsHsmLEMwiipJE7jwbY86bLoZRJsXWvMeZmX4nT9VVnviguHNr",
  "key1": "3YdYuqdQuFmswRcHwYzJiuPP4HPHmKQQ65FxfW66dEEtioCLJTTkvVfuVynSYeL18vf4cSESPd4WY5G6aU5ehKuo",
  "key2": "34yzTuYBFd5NGYcUSL1ACfVzgHxRmdqvUQkniA9mtch1WkZXhKcSyMdtQueJADxvQB8tQMikws4SjD3rzzVcta9i",
  "key3": "22uQXSFyPMXRPpk8Y5PXvkx4KQYRAn2EwkvJygsvrTeraPBYBDQE7sKHwGWkCYxUXgf2HWDUQMnLrt7XPY15vfHT",
  "key4": "2Hpaqzek8Awpghv8w6HsGi999pqh9tUpD43qvw9Wtjo1YnbWueSLrFvXtuSQaHJ7HaFH9BxtDkfUNfvvPbWD6Eiu",
  "key5": "2yvG9fEkgPC6HZhyXYdVv6gBbMAS6eGFVy3T75NLd5A2dyVEtNSks2aT6mqigCKeuMcuf7ygi1xZRL2ifvtCusx3",
  "key6": "2Z1UEqjt54rPjrp1vWJjqYB9u253W5EFHdx77AmNUVEAmEyQ55wa9docK2ZU1chDdVzpVMYNuXSeQA8ozxuaRH2m",
  "key7": "5kvX8HVH8njfYFgwgbC8uS1CihQg77cNkhEvtFH5Z21BuKnp9i8Z3bLPhemHKSQfagZG8ybFjQpaCEz8maXEKNu6",
  "key8": "3msJMAdSJcDgDLBajhP3mwiDWx91z8Mppa6hJEJTmKyVK7GnvwPpEavYaNmQzaWSy9tXDoaJc8vSP4Mtiht5jWwu",
  "key9": "3SqkyZVf1fJ8LS5iiCmAjeBn8jgLWZ9k9GZhQtaugVyYfS8k21is8Ub7rGXxuGSTeEq5dCDU4Bbbi4hRqehDz8C6",
  "key10": "QHTzhG85vLQRD61FCHVmQcun4DgQ6xQD1HUwFcziiyQzohaPuALywijbNSqfTXd9v2xBgStKRQadHAxHJ8bHME6",
  "key11": "4u4K1vvzZeUaQKxcicPhmz1q9e13HJdt3ZgN5QCGqAKZwN5KGk8cZvZkP9s7rnBwcofS4h2k7K9jNQroS1zi1HZM",
  "key12": "38AjxYDAeyKDPcbiYdonuxXnVcQYD45U8mTCe2MU8xHgLuAAGE21nc7kxykAJjmdXXjHCPyiJfhk2Yi3c6MmskUU",
  "key13": "2y8WUCeF8M71atSWKf7gvoMC56g3ZeHp3i6YHe2g4FvG1sRswvq6tX4tSX7wUVwThDYmGJdAgbj8kiFCcM9MT215",
  "key14": "381PHXUcTNLrRVTSVjjkLnAAGEQptPovseS4WxVL1GQtsLtLDacH9hGeby3GqKGhiB8xxbwsVDjgd9h2wjmTvWpa",
  "key15": "2DopnHpPWUiNroL7sonmGr6rK1nSPwkUNZ3ePVnxS6Zbmr68dmrRVC3j9V7AA3jASaCVZLV3LE9zhvCHisN1Po2p",
  "key16": "39aMVGmxcHxHBmDiPA7MhxzmecULZg3YZJ66GChVC7h8yRyDhEMYXtA9buAuJ1yvJNLL32QZkEgJ39aQ5xZ5M94",
  "key17": "5zo5hH7rdk2ZwpxFKxA5Hxoq4J3cyCFvaHUem2WKaV3WJPZU6geR9dqdyfiESdcmiCFKCJtqKbYGy8xcF6627dje",
  "key18": "2SNpjmR9Q7Yzui2sgEE4ixW5cyujHnqvgSC2EJ8mPPMgJi6ojk4XrNicQpHRBhR2uKUT38ge78ZwcPuJYpeEoR1Y",
  "key19": "2DhRKEjQ9GD77APzZb7uuuBh4xp5Bz8YRRe7GX9W9S65zWzD15FiDGzGpkdqQEskxhUsH7WcaUPYV3zfcKSiFgZ9",
  "key20": "5Rn8cDhPvyLjLuEYxrCs8EMWkZh7nBEMcsxiADZZBihVg7MAcv7kyvppz173JRTu6eEDcFK7RfA2wTBcwYMwN9gA",
  "key21": "2VR2EcQmE1Z2QnJNXuwVV7EAomeV2zQZAKVs6U3F7RbK7QAd4JoSBsjyqPwgbGTciTAeVGJ91yyBFQBMcqzJNA8i",
  "key22": "3vUY1hCXuNzkDSSWAveff1fiau9quWM7v3x7UMNZWh9qcrKJdfbLhvZHjRaFdLcG5kUBre2N5t8gJxvzoxJqiNev",
  "key23": "URksb9YVKd8eLWQT2BLQ5ThrqGhS7EHJjbZ1HYHMbKHxjrNFGA2AJZyChqyZ5owce4pnBqDijKfEkzawAXqvpVj",
  "key24": "49uhmcXuGmJfKUXWDDdrMY4WY3zurnmq8C3pxHL2ZxzEdpxVemmtDYEQMm1nKtUvpaHqwb9YfrxVPH4iKqR6trVH"
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
