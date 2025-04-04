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
    "GDdHesvz5s55irmB7r3aRJzkQmkBgHJxTCXjzwSvPNNpzHnsFzmeGxodFkJG617EL9iy9DbZKE2yZSyPHPYjXWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34cYGfQVegRTcdnb61KvzXHx4GwWi3wBRpTF5EzsepMyu4cSRRTvm43eTUtxsSqSues88FjebbtwBMQGWh8chuXf",
  "key1": "4SDYJHuzKTadpUcF3GHXMXeq9BupZQHYSTh1wm8ZMbMA8i8uBUksZgbs42fyAn6VMaC7t1JSa3XJW569scJtSWBN",
  "key2": "25wV4xw8aExqai44J9dkbghCgSN5wQKc6BwsnjcuoR6Ssaq9HDULQd2VPsLDJNR4EFuE7f5Qt2cUYDeEjQZP8zrF",
  "key3": "viP2KEWEVoJkpaJDfJSqWHH6n4MqVEwS1V3aXPz7B16jrFQX24EgwoAKa9kXY2HdKASzLH4BqPCftvg6Ue2EuqV",
  "key4": "4TTq7YCrkefLp1p1Dn3RwaUovCUaycpFV2ZALFVgV2kum4RcJReryh9vibaKAJxjXs8VpFpptw4KpTYzvWxcK7va",
  "key5": "5PdLcakXpDFanNrcETLMXbEs8V9LY446JnNERCYMrZmp3jrwAM67Nyak636eCmoRKhAfhm4SkjyCngRsdJnpgh2W",
  "key6": "oeUCCsoLuw419TK4ncKiWe2csPNcNp3T6tUDUcqDJFjghBxtRFncKk7CJJriFkAjJjYjavqbMNHHZmQDMkV8i8g",
  "key7": "gHKaimXseXUPrHiY4m3fkc4soMQiN4YJkjcSkRKyeaQo3odXcC1BMhPYiiyKDqHriSArA4ZMa1ytmzNrfBPbV2A",
  "key8": "5qVgeVzxwxDw6KrNfGJHG4vE2X2BNNxW921RfLkzE8MG3P8Yx27oEctpDXTkyeXDqkZYKmAQxq9LU6bDAZYKC7q4",
  "key9": "5DqjTqH2zJJ8kF49e4ozN3mdv4FMSb7dXAb15g6zDTF7VUyffQmhDBYt9mwAH2pJWfvQmyaxnAMDKSzwPXUjUAzD",
  "key10": "iSmrT4xkYN26AFrXfF4eyRyVENd7q8BXGypq6Qwp9fKnTPk1aBpjYoBF7x9EWoUQfQ5T8BQRRRbuGwCkSMyjtxR",
  "key11": "67BydLFG5ML7rJgAszd6Fna1FVBHmwXT1GnagXzkRvBojRSETWDCvBXotP7bQa6Anyf3zca5aMHLzgvZUq2X6mTW",
  "key12": "3ZroMndkQ6DVGJyhtPbtMKkJrY4JXrqFfw3EdWGo2s6bVfoRb1a4A241z7fpMFGf5qxLSoJUwq5oVNvKKqsie3N2",
  "key13": "2tQfUi595srhP6iw8tNkurjaKzTH7awLXME5jYTX4m9g5vMqNfBF2UsqH4k1XRazUkCw4hPq6dxBvWD99Azv7GA",
  "key14": "2ZkUz4HHcpFFrs5eCQaYBKgp8eBwxwoN1dKERUfzVkXdVHac9cY73JcwoESh2mWHxercSd7mMpCg7fGfbTbuuLqY",
  "key15": "5gSXk4nBuSZBDqKrSGFkJMuTyBMpFGyRpmbFXp1eK5CGypLDQ5GBfi8Tq1FwyJPoXhMMf8QSsGxiMYk1u8CzFveh",
  "key16": "5GqGX61i4sCnvuap9hhvbT13huRV9cWuDt7smCV7nyBiHijrc7fTdv75v7yAzseRwcb3TfM6hg7cUiCibFdiyrLC",
  "key17": "2axonGu1vtU2SJKpiG19VMhTemuARDamoARB7966VgDhCRqDM9WHeB3tuvaNbscyvZYvGZoq2ZKnRqzxN68r78ab",
  "key18": "5GAzcZwezHu1bvc4k6pMCnqm8m3j3NNSBPmMAyXM2vgk33eTpJLw4VDo4UsebSqmFqR7QCq4ewf4bGfGinHxZyz5",
  "key19": "L2qoWnb4kaiss8BZRtz67dsSRhbcePhxbCnCbwtCmVnp7vkRXD7DYjHACkQYx7FYoE4EREmn7LQPRzwMmVbCY5F",
  "key20": "4sLQYkJ1ow4XRy1Btj6hJK8w9LJtX3kWDCQpcYkW49vAP6PGRCJGVYNZ63eHuQ77RLmd9j5dk4nmAPKxMxSh9fzw",
  "key21": "2T3WqJQeu6eYvnEZssPuY25dFbVCpcSNtT1iVHtjWdJpPWQuV6y4xLckLa5HWzSMMmvpu7QHQKuPJQTvj5fCViKY",
  "key22": "2x8proDjnCtU358SbX85SRjLKn8Ga7BfCGZ9yA9Cb7ckWmwCfY54X32XQTmDGiCk6keQhQXeDpHRtp5kh1Tk9mZv",
  "key23": "5tGP1djxX4s5SsBVva9VPuAgAFFNrRGgLRe5jRcp8BEfNEuBW5iGijzJJ1BUM2PxyomyHiUiiTbd6EVC1EMJXtuV",
  "key24": "J5Yode62UrU79kiVUzWQSV6T6WYmoKPZp8zQbyiDPQmVBVdydtqHRFHR5tjVjFBVMAdqUtPLnY4KihYDN7ArrKz"
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
