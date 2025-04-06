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
    "4LTti2nMGSgZ44o2B8uuppHctn1EQXbD4irHgdv58D82iTQDYaQp3vkPHEx3EWvrthWiwiDrfTE43NVAVkkYFVmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWsd8wVuErCFAKEfzGXnmYA5YanmLn7E4vABTvWokyMvz6CGGxt2gHx5mEVfD2c6DnUyhDskg9u6Z1ofuhzfswA",
  "key1": "4RhMazgFwtc3bFeMpWxkuz13uCYdXjE79dcqBMJUiaJcievZ347kv7CUHnzxsqyQKGeTWSVDNvSfkuT7oadqF97o",
  "key2": "W8y7WXjTh53dFXxj6cg4YYcAY3bbAuPVoS36Dd7GxmzL9GC1cVjyZqbLdnCWbtzCkRHGyZ3kRMGA1Q7F8YvbF9t",
  "key3": "4Vc2s6Sg3S1nMtGRuXdBCuTC5i7aNoHe6cHA9N2sB7BFufpUCaVykwZEp1CLcGuRu5ehWaxeH4KxZqPtnqDSiNRm",
  "key4": "5WA8vNwYP1rMrhBZQk6DKzbKXu1g5AQkSQySoABtR5RixfVvpRJ9zZmaWgrypQ3TfzrPNWAdVUhCp1mqgAnWTd34",
  "key5": "4vLWbvDHRtsoVDNP4iZaDKiZGGy6qA4hD7UHQrEjSQ57g4CJycgfe6NdhBDQnHXXu9uNt19NaMmJXHkqRvwf4oRR",
  "key6": "3rkcFVG3yFYNDXPBiTX33Wm2WYDEPHKnzREikDh2tsBoYhbod4HWpfpLMriNuQ9UpsDi99WcHyNCX4kyMFpvr1P6",
  "key7": "2Vw3PA662DPf3ysS3QDn3EsRxrtJt99Zkyp8RtZPNcbyxoowL9CQdSn4vJxadizNBVEjfiwDS311tc2FBbmdfEHK",
  "key8": "3Cq7jveZRXeVivgqDWF4a8xB5LUUJgDjgCw6qTrcUhJ4Nw5gRgpspqAwZWE3RLVmj59y5TKR8Uw7m43sUtYu92cK",
  "key9": "2cVz8Wy4nE1uZbyJwk6uzg5q4wQQYYZvtiZsWkqEqtTTJmxvadhXqmokn9W2Wyj8WHzN7nco3vKPtheEakaXxo5z",
  "key10": "4czFt7ECrQiD7HX65P8M1dKobjBHwCb9aMncxDsK83GLPKtBnD7whhvSmJ1P2JpcYdvzujGfP9yBzt1eLDr2ynzM",
  "key11": "3hkKBjRgFgjrBcjAhM7XqPfrnve6Y2ny3GgYGPt1yFruAuVoEAiGhAnvhfFR4pkHSuZmLEqy2CWKPYQv2ipWbHRE",
  "key12": "ZunmkwRgSqeNJ4dmmguouDagh8sqLeDZ3HadEi5HwbzdC2ghr2q5oByiRyMN3zoPR2zQBBoU9gD9XwEPNKHjGT9",
  "key13": "66Utm5H6eZjrwJ3MZ8NPHQcd7MYD3k4bgauH6vgrDF81ddVSuhQFngZx8MirvES86XnjvqqSsy5T6MFqTZG6cNTf",
  "key14": "4wzJzk7BzGoDnA2u35oajq5dxd21xnyEtpyGD1B1R1ghvc3qYfCmvrUka2mWyjGZ5dWxWjv2kgrjG6mt8YWurYKn",
  "key15": "5Qmn1nCGWMZeH3mxBbve8epj4nG925phufUBXk3pD3UXK2oHCqbcikwjiKpe3zdQNA5nefXGShMtxmEJJrhrTxVx",
  "key16": "3GYs1WPcbvTBvsH2FVRtk5e9XKb8Dpj7doCx1RYFfqtP9BnKL6xdtBip8TsdTHQ2bkfki6mPQpr7iLLcRWGHF43K",
  "key17": "2rRa3N5WVmRY6zHBpAhYB5V11HnBvrQcBQfKUz5tTEHmEF4FCE8aFrhwJ1Gtkcmq8am9mEN7eavqkvzPKDTAJQNV",
  "key18": "4JcYMPKf6irbSdSM9BRYB2ccwAik6Z5h9sSsfBeoz8dnjcWhUypzeBnh9J9HaAmKLU9UiE27AZCoRWuzKERPa34Q",
  "key19": "31smuqY63TUKB39AFr3Gf8hmKYFjqMUCkgdSAbyZJat1dk5MdYUvjdkwf7FkY6Efdhpr2gmapJo2JtrY5hRfAFxJ",
  "key20": "6uaDUJXbLeaAHbUVWhEgwRaNGQ8a2M8vBEBB2qyqmDxByhUaBi2hyM3emYiQJJpYcrsNBN69pANqwNx2g7j9XaB",
  "key21": "YLfmwooLxKAm6xwQ9NuxZRun59JJUiSdBRZkPmbtN3uWWuHBeoY7rzJaFGTgbM5TCDZPhHTjimf2rCAUcRxVoQL",
  "key22": "3KsfYL1SLnT888fTqCdt45GeDMEKJr7FGQ5FAfz5eN81se9LSKhHSkTeQe7pxAaDdRvgbUwkMg5P6P6XAmXSJ9gR",
  "key23": "L3XfhzBhm1jfQnt5N6G2pjCuP4P8JmPjUEZfcae5CwJGaUQBqab7goBWng7coGx96vvzyjAa4gHiW1WhpcXf8ev",
  "key24": "2SG7q1aVKoXeSEnrNhAPUbbyaQDdw7iGCubqWXKYJW3hZjr9txFXH763SaY4aQtHE915soybe85BytFgjCtPZ75y"
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
