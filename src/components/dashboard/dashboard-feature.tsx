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
    "3aNxzgQ5BMzBfDcocdiJ22qvfAJoLnzRMNGWCiWUMPybsNMCxG3jbvUB6JeLaMqR8Lia1XBbAk3Lpa3bDAsF7xMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfYhTbpfqzNePV2ynGdgUFFkvmCW4Vcva1sevyPhGVG2noUheeTN5ZhuHcxTzNSa3xuMUCL7joeKVA99LXCvrKS",
  "key1": "441QTYm8KMF2yFocfnNCv23D4FoNatX9dxrnAi8tZjtjnDFwGozjMPp8UxF1tn5G2NjYnhxA4rfZ6pEDmxc28HSs",
  "key2": "276mwvKkTEgByePXx7ceKnn4TLz5hbRUW4TfdQQ2YyHQk6ebGBSbqBJTaH2UQf4uroiYkiMN3JgXDmQi1xR1Nzmz",
  "key3": "39ji83pWgNtmdtU59ZjV8ScaUnK2CJiCfCWA3TSA4FRjj1RbveEUnqTFQJmD4BVxJGMEmeLvTZSgi1BJQ5tD9tWP",
  "key4": "mz3a6bZjM1nrov9BVh6NdXe9WVW6w23pDPbe2zvDKQibG9SbpgCMcgVPN4xPLi9VpjJmwZpPscUjiruYxLdx2p6",
  "key5": "2nPCoktxJreG6B92qwFpvHtqWNUBH6nbSdz3pjqUEdvLuX6mSR9a5i9QkETdvu3k4NmSpPDuXKLVrzU6wrZNn2Y4",
  "key6": "4afgTbRzdQ29eg2KNn3FxPG9Hnzx9rcTqTYKZoeCJE4qDfCxVP38j8H5HQbcyJYrnLbWrdePBPa1toxwyKwbBZFx",
  "key7": "3DMYgwhV8DqiH8vKRJapB8UJesjn8zwSssaVktV5oFnv9LsgV3Aeup7Fb14bm8BadZmncQ3M9iMnrEjB1JWSy1a",
  "key8": "4xp5MwUdyo2iLtpPnVC242anw7TpW2vKW7DmC9PjWDM9Yba5Zo9jaXGxRGTucs2Arb1FkMXkaapS7Wc6ZLGF1FZH",
  "key9": "3J99x7MjWDMFk2VCjWbcQYGGZKH1nbaD5ukgWHXrJ1CoBWcMgsfR6q7aNvQvdUjP8VKXDG6ia7C5eMHUy4vAAQqS",
  "key10": "47k1cRPV9gkz25fDNj642EY9w5aetBmz17QPWCrdRCApFgu6XfBCfsjYSTD1yikN3hBdcdGRvcGUZ4RAKGRUBUWd",
  "key11": "329d4W8kbYpx4Yc3GvsXoQqN1qxFJRjUxXoxV3hgyHg2Zg9YY8HT5tofDCyQjQ9zvVNS8K7p9Q3dY1FxJVbZD4ji",
  "key12": "2RnwWE3JdL92kc5yoinfgAZybSV79yjXxKtgNnZvAqr1JxFLY74BqoE35MttA4ejWH4zeZAnXcmTeUto2oRXSJNe",
  "key13": "2NYThkB7ZeuVQNB2TUuYcHZRZYi4y8LCTBeodc7R9dmDK2G5trA6djDb2DrZeTEg73MaV6cPp8rmQtdRo7wKLY5F",
  "key14": "5wKd4gp6uYL4PV8jJ6MBHYn2R6SS5JcFDK4j4ZeEvJe6n3njGici7p33LRiSzzXQzWYz4c1V7hdt1FoKxYR5jWsJ",
  "key15": "5Jt4cM75gcXDFy6uZEcnXxWPLRW76pQdKPf7nidaSaHbLiXo2zPpmfZt5HGfEsr9VfTEGKwT1Ub1V3zUvbfYiMmW",
  "key16": "3T3gVi9y5wiGuvdzjiR2UQReTGTChHQrsFqeNoJDbYgPYGbqYXtSeHxrjaFh93Amjp22eDZXN6jzVNps7sVw69y1",
  "key17": "3YVno37fTbScEen7pXcGc7x2Jp9FbK4utGcgJ7KWJJ8ZdtqCNyo2uXLiUnVTStmzTm4dSF3c5MMqm2uz1zCQbdQs",
  "key18": "MrZgQ2itgt3XjzxaGLbJxi1hfsooJLnQNvx77Arodmnm9uQvzy1gGKsLEeMdwSWGzPhQKcoK6ULGCxPjaGuMMqq",
  "key19": "641c8jCSB5eRvkwVwiUYB56mKfgdwFCaKQfh5jaFJbJSbaXpf2WFEkQ2vwRaEs3cKACcWk98Xfv6X6ncuNbQ79JF",
  "key20": "dKCiu8EYgrUUmn4Dd85VGpk7hJgWjXTrsjJ5aqjhEngqXqg7KCj4uiw1khCJmGBwWSz5F88szoJyuUoKofYYDug",
  "key21": "5mL6bW59bD6GN88oV1na2UfpnchA7UfXwdJHfEjd6FkdRt1uLYRNkDgwx2zkbY3SM3SddMpoxHtT4teu7wV3n9Lj",
  "key22": "2LvmcUXxP8r9t2BVgGrJuhPfSuqRtWJby1y1tJXfzK5PNTBY7x2VpPkufDTxygJTyyzC2s88B3dgTP3Wg2jeFX88",
  "key23": "54on9thUZbeH7yan36qidpS6ggBxQ9JZhZcxbguTsixDg7YAAmQY7ftKDYG4dWWbw2bhbvzS7rHkMVYRm8YBc9Zy",
  "key24": "HjHiwff6D1TZvPgGgr6rGnzAs7ed9swuRxbJcHXbXN6rNgv4xQW6VD5W9zigbw25GRFWvsZHxTx73cL34QQpiak",
  "key25": "3XnMe1WLtyXP4AsAvfxH2L3KQVtQ4UGJYYyUkBeQ41GgH6DFXugLxEBzLS9yeJrcDbHaM582N4WLcBAbjr7Au4yP",
  "key26": "59F6Pb4McpufAtosoE2CTX39jHfaKg88eCYhZLjuWALx623wahU5xTYe2nqjoXrj2EHE7Rd8Qy2ZS8fgWJPS5Mjw",
  "key27": "61zJEb4ZLsagy8BaZ3sMzqZcC8gCcwde8mcyQodbJHDrzdp2uRz1kWj7Mbs5aHFNie48upKEZGX5pNj6owihYFkE",
  "key28": "3vYm79sC2XwCN8pQrA3Cdq6mpgvmwekWwv7sz3vKW38zvfV1BVZXHtZR2FrEfJyZJEdFXZ5GL9eQvzBrqDDVmWZ4",
  "key29": "3YAwpfZnfyKwHKfdeZ4v5yKnG2upWziwPa2bhw6bRaJaECT1dd6ZVL88N7xMpqTGGRK8onX4y8LQoqskET131hVo",
  "key30": "2dHkrDiQJ5dCKm8MxVoU4FTDKHMghyFgoMKV323EPEDEC5F43zUjmvkENp9ZVd4wHVe595ZcBFGcmLXAfGFppy9p",
  "key31": "2UEWzQeagUkzYmCEWgR6MHbW7EfwXR6YVgk6J7wbeKj91CWq2peLHnvehGi6ZtUnRX8oTHjkDGDpCiUw69DwZuZm",
  "key32": "yMWh5D4XGop19oWRBGm25Xw7mp5LYgC4x8yuYtgvBAHJW2sqgKPh8jKfXcnGJzWudR4zcbhK7NGmmSKfSwX6HQG",
  "key33": "4SMs1JQjjip7wxm3vTWpxADEAm3CG8dM1z8QxmgBzEy8mB8tP5CiJaX4CZsNtY8kpPnCRVpUbKotcAR6TVgdeZ9w",
  "key34": "49RJbckhsCvF8ZYjG6VphUwjCnW9hx7Em7iYH9RmcwDv6TwFBUdAVMJb8Ji94cxVnsS13fFZr7VQUbJBCp29YbvN",
  "key35": "3Yz1kDMqqXiRaiEetEbdQCMrZWDrdZSrTCzErp7adzGmX9Yki5Rbpy8W3FAkjsn1iXa6UtWNLdD2pKqW7MBtzAaB",
  "key36": "5Jcs5fiF7vyJqBWDtnnfFTi7rGQP6ciqULHfy42mESyERdzYDn9AkqbrzyCjfqjuTimDNV4m5tfe7oFTgh84dQNP",
  "key37": "61JE7oX8FWJjAMmEveW1URXMHoqpZJG2yrEb7p4vVLHEtYQDTNVgNvDH9a2JtS4vy3DfA5rUdSk6grNwek28m2e",
  "key38": "635f4xPU3bCjvx8Bjq9Uy5N2zTtA9zDyNjgxPp2Q6pHJf8Xew8qDQ59QCBkiLdWtBME896UZq7LRuz1euksSmn7e",
  "key39": "7rCJLpVPF97kEiNFrH3zqVkryqFQpLYZYQ6qfi23X2HbnEUUP7ivptBUrWJF1A24EQF7fcTBpzikqX7eqvSCCvX",
  "key40": "33JdBWMB9U4pu76vNoXEW8md7fZTouXT7t29ByAW5JbUxwXymFaFWR3xrH3c7hw9PQihH8wyb4J6NHF3hw1qDSw6",
  "key41": "2SHJwjxxBPz3aDY1hx9CX7ABt9muPFAiQKgVAHfos5UjqkTs9wcyTWFLdezVnuGSBroCQnRwJfQqpYJU6AvovbNA",
  "key42": "3FVx8XprbXdKuCdQiNt6jsao8bpmQXYjywmHejXjXtwbmRFXGewAr5E2F5fDvb3EpjBnaubfgUE6ZNtSytCscjm3",
  "key43": "62dgKDpw2SSjuhy2wLA4s3RpT4WgA7NjaRmGNj2kTev2kSVEGDcZseptxAGcyMXqZZb9LaKY7PD6EjWYNSrnRcyW",
  "key44": "3s34LXsVXY1Zs7soKS9BNRRSV2BnjpmtnSKpXsfKoC7tkM86UbAnrnNHxJHAUuVE29eAbskf3aT9LxFg4Q9kjAmF",
  "key45": "Hkcpg8crN6kzvT18VDdADQT3iWkMJXtuyyL27CyhSftiC2DZJSR4Yz517rouLcZoGHLjX1Ncu3bRqerAUagRwaY",
  "key46": "4PfFt2DknbFBhjch2JqUoH8ckNMFSLXPCf1D5EBRLbt4dRzmtPhtTQkhgWLneeg1A54BNhkhTaDgJmygjRLszEij",
  "key47": "3BiScN5VMEbhH23od7KiqC9YTU3NLuNCCEnLKVD8YUJc77ocBuex2TDmBvZwxUhak9LrBBhibdfp6t1Y2ZYdzbF6",
  "key48": "3UEe7RN9gSRgPBYxLxrGCCMDgNfn46c9obv57dv2cV17hc9dvLMZKr2ZcKymioNm68yGWq4SJ3AFSKMRjrXLKYbC",
  "key49": "5sGrAjA4gwxAYeVHpchJ2RhHeAKpSWQngTaDWiXtfx4u2wMKXPGu8bkRfCyxRna9BsoJd9LuwLfyKau5FF99td22"
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
