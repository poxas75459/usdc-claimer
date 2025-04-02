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
    "2ZeNEwNH7HuP1fsksnPaZ88Sco3YGCrXjra3vamdyhABPKiToNy6zgjv1QmrSw1kpxxam6g8uFMTrbWpcKArmojo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFeQeKzrGfwdhSWLzYZ3LgBcZ8D2kTjT7GPoTpHhCUa89A4MgJgiMEARS7uudWEm6oiXmtoWVffpvad224h4FrW",
  "key1": "57NLbmNJNis1puXzpXEsp3Vo7xrQQtJP7UJiwm4qQcKuBZoNnVx77iJNMHWywHfmj1rGubrpnkJy1rdE22PP2yrQ",
  "key2": "2ipgGgrTG7iSnxpwyMyNBoBGdquoT6jN2Xu88JZyyqJwK2QSBgupcjWrbPDE6i77JZyf5uW4ftWacUCXccpUHgEd",
  "key3": "2E1uk2hnYfeHUrCbgZdfqq8JY2J4ACCCpz4i67aRKJMDMZPyAStVysLGQxEQuGeFVeiFPBkrHdro4ysPMHcUz8gv",
  "key4": "2wZNNCKFDbhzj94rRAu3HgpMSQbHg1QFLDP1v3PrwbGLb6msR5kFHmd8trDm7N4Zw86zgWWs2xCFR1sfjgMSYAoH",
  "key5": "21mH4McennSgG8F5Sx6eizK2BBjaTCGDiLjZY1F3u72MUvAKvL5XCXYAYEcVu6kwybjrcWhNM4NupBJ3hVhPjNVt",
  "key6": "2mPgYLm7xZa9aJVjH9PcsnyMXR8sUHcEFCJ6CVHFJYqSFe4dywuZXqAd6LU4HhLXWtpm8P4b4ykWKRYkN4nSvngA",
  "key7": "HAFfjozhNvFqG8CWufr5mF52ZACmWN5F2bQrDF5pgLBtJdE4KYgUufYULZYxpA1cB79sGcbLYEBuwn9ESAmfi23",
  "key8": "2XZ5tvLrwcZtingwR6fdrK8NcFjLAGaG26SYJF6Qfe1fZd2z6QXvrghq7xfGvJ39if4LTZQ6HwVJ2N3MEngR5qqX",
  "key9": "243b4gtgTB6rv6kkMgDXK7LUyWxJj1xr1GhrHMkwRRPNR4RbaiqtFcQvZAtjbKzicSzUK98iWoZARqeQGzZRFNB1",
  "key10": "57hdET3UNqDPm1bvEXDVfYKEdedoNdkYdvgtfLZoTczj6ybZfdpLT26YTnt8CFEqbM3AYQAb711VHT8EbRXQnZrT",
  "key11": "2q9ZSPVCREeX36gQctBq6CbamqZiXyzGmQQ5bK6A9uYyavnfxw9X2TyfvtQ9WD4qiTVpCxPyFnJv5Wa3B2Dne8pq",
  "key12": "RE9Adrspt5ifP9YZniyhCVBTvVrXpefxCnHEPfzeLmoc3ManFLznmacbshpmjSzXV8knDpFTNa9k5HXBgMhx3bZ",
  "key13": "PaRACr4MTiQZEPRkAui4DDqxA6BRxJJWC3f2r7tgSavWKaS4zNn9oJZKPvhV3bvoLjGWdRng8yooR6etLwR1wVS",
  "key14": "hs5RLYAvw466ykfFSCdv3pFgvWgoEZPo8wk5Lnc9cKYmm9Jo1dSnEDWQFWqVAbjZzftp5HrBqRvYE1gACtozon2",
  "key15": "4eJq5A5NKdSPfgE76zM6V5RnDE3ymByf2JjF9kwuX97nrK4JWZyi69durMHFngXCLUDtRNKMvnEqmwkZsutcZU21",
  "key16": "5uAaax3wQSM5QFqRktKgbrVKGTZYqUWU5foP7doPuZaKE2tBLVq4xgZdMDoKDFe4Q1bdHeifUup4hjVFnP7TzzfV",
  "key17": "4acDLbmDCVonvCLc28UEjb3xEcGTUjWm9gCADi17ZxYrU6ULW8AAmg2NwacbVxYmv3su2pxuStDx7Hc8WcUZ7QT",
  "key18": "5KrukdVk2SqTqKN8hoz3BD8LSTEz7aLAQ98EQfDrV9bBUATPESMBzmpkDEVRHY3iZsJbNCC1bC4hJgVktfrhBnEv",
  "key19": "3xDGueFU74b7MybjxLVH71f2qHDd8tkg9aDK6RFru9Yv6X3dXz9ewrjLAxVKFwdjLVbxphB4pEbpWLEnjcfs9sm2",
  "key20": "LuZPFemLxzC9EumMDZZD7qycenBj2FBe2RCemqemuhyhdgW3NYmKfVZ5Uzjv18gzQtw5LPnjrhELmkXLmhkJ6CB",
  "key21": "WaG2kXGUgyQsG2BF5DK9uW2gkhJLwWRvibS5gMpfkS5Z4ryNFQupKrkNahEKzoAf6ghh4mpytj7dexSZpq7hDMa",
  "key22": "y1ADRwEQz2kYnkgryyWzriYTFoVuyVyZfcx8MsHTATDDid8MDCsGPBQGisfTkPjbNnBxS5HYF4LVJho2ELwcdme",
  "key23": "4SZ16JN8JsH64kF34tN8HipLPsMLgPbHNMN4gB5koKWboQne8fQBw589iCyBADvfxLyiEfQ6YcRfM8sHgQ97rXx2",
  "key24": "4wDiC6HNgwrRFUuW5VQGUfAbeT9TJjV9DfDmBU43wmzJLjQsASXrvwQHmjX948UWsz2b4aA4y2CW6M1HQChewCsC"
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
