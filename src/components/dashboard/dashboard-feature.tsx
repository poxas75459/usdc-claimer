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
    "2KuBanSyfRNLk2VpagiA7CTJm2J8pUYA46dhbXNdHmfRHZTdQbuFRb9ZrhpGV16AGsVtMzmoqAJGqu1mzikyQLTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49g7tiyEtFzu5xa8BPf5DjiQ9WSGtxRmM4rfGQ6XCJRAHwiAaNm4mzqL1AXDUFTPr5vEDCm4WsdciVZaDwmms3QZ",
  "key1": "4ZthC7XF6sE7BivPCTsWngjDgjX3EfBi5xnj33F3oxzxbLVrw5MwqRhpdWiBiC5Qs9h5qxvVVeAi8bdM7HHs6f9a",
  "key2": "HNrGibYnQcTeKiZ3fo3NqJeLBEW6whYnA2mZPRF16ztbPUNjQsx5RwbSXorhTQicDuhpe8y6GtmhXLGCyy4vdeg",
  "key3": "4aNoX7iNzDCuM5n4DuPAgd2PnzrwVtzz5sjSDT56YCTv5ABCwVWVPzTwg5A6cGBCiG3BaWL5NK4qqzNxq3yebKpV",
  "key4": "53y2yiTwKwBAHMeJLx9JEnia2td552CqTpKsYcnNL4cjd7hRfBip6AHaCR7r1LpVuocX8GKrrhtc84uwxx3ir9DH",
  "key5": "we9PXHA6GafSqMzc4Bn63aGbhfiLQqDXEzGq3NjzVWV4ei4Sim6jPvMr3MMDUshZb3pRmBkV5bUdpVfypKzi7Sg",
  "key6": "5UcwkfS2vq3srchKiWuAPcXRAzbAVcPWVvUxdkEHsMN2WU4YowugNcw5qqS6cP6fCHXYZyfzrCrbejWgwMh9pQ8Z",
  "key7": "5naaHqhsE8Z879qXXXWcW5Qg9rDM6xtvrA3J4PENK3d2YWkcE9U1v7hSn32teGoG9QogjJARhAjh3X3uhHLiHTvV",
  "key8": "3WQ7XBzFxVuHomqmP8K6YrwBJGcEbXC1eYAkT7mHB47Lp3zxqRwq6k89dPrwgdiwYRafmrCvoUmcouNbZhmVrrkb",
  "key9": "2ESnDfj7sD4HK9ghVaxaGwwttchw2YXc6JKRcuYX5Rwg81V7XQpm7HYEt5okWNT7Sf4gGTJUrLWon3fDY8pHxbVL",
  "key10": "2ZXsnFhWz21LhZMCfmDgCcQhYXvoNCoog5K1HVV62Z1ZEtzDJangRQEMahi9Rvq1EH6hQxQVDF4u4tXaH7C1nv6U",
  "key11": "2YHMLN5kBqstY6XGzEdrwp8ijj66U1CqzKF5xTZbgWWWPJKtgaBuni3YK8q3aeh4qQfySiGsXtjtCrWL8aJbTHH7",
  "key12": "4H7eDJRiLsXHn467F1pAW8ZpGe2nmSA6fZLMRdtYHm3E2nXijDuYBgVd4TuuJ8SnexqcsQLeNucACcqjNBNEfv2K",
  "key13": "31oG9EAUoMbWiD8PmtyiciobYcBmW9NezT1JTZ6pnUea5G1WVGhWdDNV8uCKFvvESAwkRk11nELba2AWYsix9Uzr",
  "key14": "3MG6V6ZWyLvaF3jnkEKAEP5LCMmPnJQzKMsDFL5svaUXWAh6m2GHWNnkE5qd3MCsMRgHAeQgV1F1ood5kQeuPbae",
  "key15": "cKv2tZEmdHZXgu4HDZH7vGimHR6fXogTSVoTBNNLMnc2dFe9AauAHVq9uYuDtXYTEcfwKTRkgVpC6FPqT8gAZdh",
  "key16": "5MP7XKfvXjmV2X9cMv9dQBQAeqxXmiJX6RKg7S4UHDCg1CATuTTziKJUrqoZJjNWtELJhU79zvRNZspxNBWoHu2v",
  "key17": "7dGMBXGX9FtFfHetK3BQBqm6QsPiCAfqdVsYvA8eUR14Z9ewEb1B3KXAm56ofU292QuE9wtkH1x9gX1oGTo7KFa",
  "key18": "5af6oNHpGeaiy9Atyf8HTZcQQs1yuHQsWdf9e3t8A6c54FBcc74S8LoLGwymYLVtu9BTCsVXxk8UFB2Jt87kH771",
  "key19": "4M9Px2gAeYaxF6YWyVfFZvFjyz1unRF7sH74UGU99Jo1SxCXS26419kxo8pNkZ4zY6jbpKDQt9apE2ApeehS7oxG",
  "key20": "4dbqd8CySdRcvEKuM8vNEZ3A3yPFiViLVtNEbM3mC4XsWiv3qHtaN2M2HBwB6gY6cmsSEEXrXzJqTgbC9wfQ5Vqq",
  "key21": "3yqg7CFKKD2sq6NQFXtt94QqBeRgWg1ymVFZJRoUghmHHsfz7wPei1S26WQ8kdPEV7GDwwG7DwEpYirRZxPDVsZx",
  "key22": "5NrLApocGebKm5zqWkAKgUfZNsLZqf7hdZha2a8GhoETGrWKW53TmeHVjRLdGEioafV9DCoyRWYM9PzenxkvE4bm",
  "key23": "2cyvdzpMVpCbWwtXYJGcGBL1PP5SRXfucquhJ7jH4Hi1L2Z2iwHKReezwe6TJ3AjSbr3coTXK6TmbnDzkgJi2BhU",
  "key24": "3Gq31WfEHKqNTwHe9Y3b6ybegs6LGbrF2FJmidM6Kq7uKY6JL2PFhCF3XaWzZAi1QyyV4jLzYmaXZ5r8MUNYFT8x"
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
