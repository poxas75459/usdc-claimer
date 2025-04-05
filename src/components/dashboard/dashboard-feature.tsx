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
    "3xXxK7B41JRE8qVmK8BDzrsTxWPq3yaemY1AeKUBBUWJXLxZjaCp8Fnpzcc47eDPUSVCwwgQAWjXA5t7JUku8jJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgMUabxnejXDy7u9GBZB66rLNeA5atGPBknEr7UVqwJkUHANf8zpKn3eNx1pL7Xn5B46kbEdSCC6SMBVmi2Zv7H",
  "key1": "5tS4R8afu8LsPwEvJX1u17ToQsXb2tZijC2qvRqajxth4poyWssFDkCyumRSgKAF8GfDs1QjQXSUyzB5axbcVFVk",
  "key2": "5CdLsSsePEY5eJVW6nwrs7CTouu6F7PeyPx8ACdbzjtynpKohPqJeXqL3KZ5RccXbWVeKLGaQTyH2vLrx6giQrvy",
  "key3": "s22aqD5TBn456UuZX9c97pKN4nSyjvExanAH41EG4dwYAfLUWdKb16kfhACVerPQgtfgRKCxynuvi5rf7LMFLtk",
  "key4": "NtxYzJyRo6NdsjiJHyyoggk5ttZT5mZNKfyjrmd5MZqQsCxXc1F9oimwRwXTLRx1aWfxxuypoWrG3q5mFC5wHAg",
  "key5": "3iw9rFngQfLZd6RLhh43xsPUD733mhaFBU4vfMurgYQZYfiH1i78KZU4SDH8A4FPYpcTg1L3Y5vXyPf3xvYjvzX2",
  "key6": "47pQQmZSAd9vM84q7isYHXFXhxfCoN5DiDLdg6HxAZD9Ft6f1wR1TJrvSLKZBp4txWHz9XcXvPmqKQyReb6otAeB",
  "key7": "4V5WupjLyKbkBKcMJZSg7r1N1mw79kQTN5TCi45GeUfX48V6UZrYezeXRExmQtGJeSuNnPK64R4mLucPWSZwwb6V",
  "key8": "3Rdaz4kUQbZ5KkzMxZQAUaBe83Eyk7jNzgJb3M7EQe32wF1khXBgh6DWgWsBQydbb3WZCtzq1E5w2rrThMP69ZyE",
  "key9": "3cY6De8hx5KWxV7JNGvgMSQGU35YoG56QVbc9V4ryQZpQCqZgamRQR12jXJ4SS1CkJLRmuRDn7cF3rYE3UDUrF5C",
  "key10": "Ki61QkEDZiYGWAAQeywf6g2biz7h6BarYTkM4TDywjo2K9oBKdUucN3MzTKgzYL75hvqwz3wKfpL7m7pcy1yMjm",
  "key11": "4XKMwtwkuLc8Fb66iqWXQpB4x2kGDSu7Tjd1Gf8ZJVadCmfhutzi4KKHV2vDADXJ9WoLK27jq8UfdMQFYXMmuLm9",
  "key12": "2mgGoDnNFE4QT4DmiCz6HRbnqxwnU2XhZpWDdnFiyENW2SVUCuiJtVPRpP5JMCM6NjmmKJoM3sGW1gvaxLVZurSK",
  "key13": "8WNUCojzaVptEvm9iUt9BYd7jfUoAJ6vvcGXzDRfceZKkPxa6vsLHN4YRWsVN5Yruu2rssEiifcpHW8uAkbMWGk",
  "key14": "5HdfxN9df8mTgjdCy3dWpGmz3xJmC3HPLGUEsPFtpsrurXa6c8s8XnedESNZ41qRMBtnY2UsmhCWXJpXtAwh96cT",
  "key15": "4ZpFKUq6SkcgAuanekfqFtib7rnqzdwdbqcJ3LzZ8ELM7n93ovVmHpDJMcEf7G3k7U1eqL4NB2D7dSS5smAKuStk",
  "key16": "3M4HUukqJGoFSwosTtBEHf1EECENkhXFSHTYvX3N2ceqtJahuWcEtZdN23mRRsUXamALmXrcFi9eNyUVLLsp7nYU",
  "key17": "3Vqmkx5msE6MLerFdDHejb1KRCNqqMCgsmvCQWtBFNzUpKtRe3yAJQnvoLrw1tmoJgtiQtR3vugWbApgo2etRnY7",
  "key18": "fBpG6MUt5yHQw7PV3557cHiwGSKj86VsUZtG9o7YgWDUTggx52uwS3xPNFbebKdTmDSgh8j4b3LHvZHN39N6qW9",
  "key19": "4HDjEGNS5w1iaLQ7SYve7tN3QgCg4DuPhVnfLo6VNkRmvbipzBTedzLTz9xJmnN7WnwhKxSb5Wv8CaZgUoqLsur2",
  "key20": "3NHPaeKxgEqpY91hErWchxfKgBb3Sqc6EawCRhGekQZgy9SapKNNa8i5LCsvzhKqwjZJHteS8SV2NMKUs3aEvLL7",
  "key21": "6QXTzmLLrK9M3mbFXtWfQTvsw3EFi5m9Z14XG54Hs2buVfnZYfTmzAAKYnivyGEu9XEWp18RLrZLp4PYTM4pnSf",
  "key22": "rBnex3c8nR1NAgFuAsV3mqrHwJx9GBT9nW2f28SbH7V6mtXznyDmxJMgGt9VVL2ctvvoABixcNJNoz6HQNTvG2Y",
  "key23": "3vVqyjztza1q1jygH1iYJ82x7QTmm9qbHZi7Y3HR3QJyQ6SE7v6GMZPv4rk5ewrPWzXizAQ2Uw9VdYBtEA2UZNie",
  "key24": "5iaAhQfY7T9pStJ1XydzdQvbiUJG1njwq8Xcgt7p8R9KP4jgh1JpVMeFohrCH1B7Fhx8FRmy5s8EWHh5v5TJW849",
  "key25": "a6eTP63Hs2f8XPFtFjTwrdnSANsEpN3Yu94QUj3HQBoQYJsZR5xtVkzytaUXEzDNmKyLttBSywFQ6Gy1dk3iwCU",
  "key26": "299n3iPJYztMJbYPNvJynxi8vLnJrkcC3r3pysnNCaCNVmMu8rBgXV8ZytxnbrksV96T6xe4gJtdUWR2rTJwoget",
  "key27": "2SKNhPFKZLJnLxUrwcLdHAF3Khu1WDHhSTCGvTSh8tETiPB2Bs8PcdQHdXLay5t1Y64mdfsBTHsnYN8arJgEfs8E",
  "key28": "3SWhzMHc79t5hTtc4tQyG3EtGqedZGE6hDjbD9BZ3UQUjKsbrnPaB68txFwZ5XF7LptT4kwXLZGt1hmSBHFvViAc",
  "key29": "2gUjTRVk6gRGrWxPVbwUVUc6CJF7TSyK2ffQkh4oMu1dG26wYgvGSX1zDpJLeQTK3PhvmfJG7dN7EgiJU2TiWkeR",
  "key30": "43igA4cA36WWMiAbhqmLvHAcJ6ty7EzKZYDgnLrs2WjrLLERqTB2wSXofF3DTwfxXtVaesk9KpQYYUDPF7HLpXvm",
  "key31": "41Rxq33YcisaQQfNNNhng3ZtNgBcGrUsYTQhu5CWAJxEQpcnzd9YJYrguUJFX7Fa4SnFrk4968Cfjp8q5uiuWVkr",
  "key32": "41NbqRNmabXz33EFcGK3kGAfZzJXgKjZ9kBJTFEAquT9fN22hakmdN2ARCrG4TfnXNBbrRumBVeyzYufoq8Gwyur",
  "key33": "2ApqLa9GS7jXWhuYtxWLZTEKYcufY9ax4CZiDXJ7gLBfL2Vy5wuY19AL5DABVvu66zAi2aJku2abZsgwyeyaaAYE"
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
