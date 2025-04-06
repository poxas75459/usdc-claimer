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
    "346NRQrfNP7RLtnqeiZQnG6qZTQ48bofHFjFiEqVvRHmnkRVqYVehvGVXMgf4crUZp4jKNcxsCtSZNueb3vDfRoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBsGQ4FDTcm1gGKjAnsPHfpEuGPP5LEb9mT4vDAy2Bh5YNVqCBaCSppPdfMF2F5D59EaoDhBBfvaGj4Cz41wjYn",
  "key1": "2mKnkjPhYdxMXhTdFosBzb1AHBQzkUc6pCPhaVs1GCknr1sF33H3AtcC9EU2N88fyfWotPRmjjCGfnRFQM3wwAtJ",
  "key2": "kimXq7HbhdkGBs3so2BGzVyVULrXUBg7TZdL8S1nyKis2woVdEmmuMsXe6Puhn7RLpd7u3dk5GyMrruKGGLTCn5",
  "key3": "5rPHL445bt4mjAFB76X1uaoR8G2i15TYBLBwsZeEthvibuzdoGESqUCyRWhPAKACuM93A7VvKZwFMRFLEhSt4ViS",
  "key4": "3b21CYfwzRbzHa1haiFbsyQYHaga6PJYqwGNKZ4RSfv6ursesycfXrnGxNM6tDmrJV4H62jJwrEsy3j6ngSZKA6U",
  "key5": "4GYJXj5wMXjrsLwebfK5oxTN7g2uyQfkAH7678eDvNPeNvQxoQCKHNqGNHoQqkoPGakmi9o6WcmV1XusSzZ4WfSn",
  "key6": "4wSTZ4LWtjBeQpnxLS4BhX7CjG2MSoSy2hLUFRaLEKdLhnjHoyyEBY9HvAoyMNHC3JHjkM7w7DSbShVfRGthjiYd",
  "key7": "1sNF976hswZPag61GVQoYk7H8Raz1UGnY3mjnHUyvVhhXZJJsWuvBH23EhuH66jtB7FZSaDhWAXoW8gumLvrrX",
  "key8": "adWCwrPGCkXL6J39gHnrwQgcLzF6J7YGB5wTG5iiRQdYpVA1ARvu1ZiuveEmqdaqWX4BsNq2gnjpx9tq5LjpBDV",
  "key9": "2XC5U9CZm7PCXxdcsb7jErqiY7VyGENoZA4j1WdAY8FmdpSnwfVnMaDdhQAy8zMAUbCzN9fa4QfwNj1NSuCwAqYV",
  "key10": "3aLhGveEYjPskVgRtHEh19be4vPHrfXjTbWe5219yvX6yPNkNyzFuKeEVd7ML7qmnauea6KmqDaE5YQBe26oiZYn",
  "key11": "fvHaeTy85PB5mH1vQyXGW8b1SVxPsEXbXH5FEHxcHWy67tog18yESjJKjDyd8HQTdMZmwCH76ShHheX2tSmfvxR",
  "key12": "5aN2aH8H9bHdHidmPUiqG6k853dLU3YjJz6Y9xuBeRXrijSQSU5vh4z7CdFaDuTrgBPZSTosGq8spjVanT5Drc8B",
  "key13": "f6Ps61NuTV1sRz5Cuu9fmYqeTiRkuuLW4kR8yV6KVnHwox9jxzc3z3BKKGcHZz17nJx7Q7iWaS1FJGuXJ3y8NTK",
  "key14": "4vd9Lvhxz4xJrGxjJZzyoxQzm7uYSjxPUsL635J9eHJos4Z1QmXKrgRVBZnhHUR3ah14QVgHzENptYb6w7WFu3B2",
  "key15": "78PLMtyKE3V3mNeEELw1WHp2SyDJ6Z7P2ZmkPGqDpUKgY8Q1nBRk9dS5vu3x1smmd89uHMzzhvA3xz6b4Cz47MS",
  "key16": "2AXFjyZrUhGjkPAuHoRSp2Y4zGBjPNQBCgX9opqLHuwiW3AsizKZVUUr464fTkMhx6S3Pa78zTgKjScbNPx2hBRG",
  "key17": "3U9FkFDiFsuHzYVR6PKY2qLHbqPPyVbpFCiyMSzE9uCRwo38LwSp6H691g2vKregRYEo2jfEVYxnEJBaYxYDnorQ",
  "key18": "3FxyEbk5V1VQFgLQkCJdG2ReNJV8JjQHytFaA25PNMx6jykHg6Agj4vUQLDyhFenZ5qqAjEPVz5rndEyo5FP5u3N",
  "key19": "2m6ug93WWnEAHoin8DDxV15ZXZtsi6MB84e4oEaH4GoXU71TUuRBm6M7VwV9zpVz6ESRVUZA9WB6RA5kEQjQ1xUA",
  "key20": "3yuRez6tZaNmmaUzCmLsiKevSAwR6BrsNPQWMwUhCj3tS1tC7kLEXeS6yUmqkrRG7tfLzkkNzff9zyi1f7NfqXfV",
  "key21": "XGeFcdkuYhXyq2z4WdWMMkTuQd4ySiUmkGrdRLeSprVKsaPaJ4jS1bmbEDj1f97kxJpEmrs6uUMLtKjd59FaaiT",
  "key22": "3X5qH4jEerpQY1DEviZKjid3X74KBUgYVkLjHaqyq95UsUhu3KTd4yFbpKwTrs6THEswqD7DPEHxWZ7EaPZFEoGZ",
  "key23": "2Edy5D7HnGRF8RZwYAQ7n942RxaoiEeammcttmcQUEcLPNHr4c48HpMaUwqXKuidtPkEFX17wv8w7uDDtyVojK4m",
  "key24": "2QmSRa1P6nKp8en9Up2KneqYEyc55a49Yw173ZoJVS2WZkRtXWYCjQUBSQghMx8UpE6owPpSbDh4fjxrmrvhJQta",
  "key25": "5AHD5nSTn1QYJNkepJhCKwiiQGrBKaASrTAwPj8eShpPTZ11ipCZjWG8ifz9PEi2HUyiwza55xxrZ6xviwki6jJb",
  "key26": "4CFmtx8thpHAJ8nN3U29c6kbcodutfYQT8jCmhQf1pwV7CpsrpF5BKrESfq8vKeq4KpekNqJDBB45MBU5QJpCW3H",
  "key27": "2tGoaQYPysDNDArivJUtayfBXFzHv1WkaCPn86GTFZh8gzKBDFbNUan8h2DfdsVzrcHVCEzTTnsLQ6pj7SGh87sJ"
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
