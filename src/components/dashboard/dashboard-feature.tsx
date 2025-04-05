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
    "2GzLnZ3NACkkBZJiGsFYETfMhacmthTwqRJZ8yFMS9cgnnCY9rYViFGrZNchb5WqTNdwXA8yuAUdJDacBDD66AXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VmfeYA6JwYa3Fn5suaZzrgJvVZTHB7bKzPJqrZA891vKBUaMiVP4FXxxo3XzpNseNHDa64q3mY8PKZySRmUoUP8",
  "key1": "2zzCyC8DF9wgP5cd1VBNPDcvjkicSbzR24FP2A6hHFsCYFBKZaBbw1wKmcvNks3JAs9apKWfsPaT25RpuTWcZxqQ",
  "key2": "kQTQM9FNNx5CnXzGdwu1PbmRVr85j7VHGem9A9Au8mddSMczJoWbDJYTP35ozTRqzUKWmTaqf9Lg76PsYbEbUEL",
  "key3": "4qNzw9bfkjTfR4amhc7t2j7dnKRB4oEvYhfqCzkZZxpedboUxn1zoiHBrVi2j9C1sLm9koJVkbvPdrifNonhQfo6",
  "key4": "2x3k85kQk2EghDYmM7bf6Ce9bz2kvPNB9jpBQ74hKMkXrC2gy2NL43DF6zSfwQAL93FPE8bKypFpNuFs9reQ8PT7",
  "key5": "5oTirTWQg9CfuCR4xEM68Fup13CPXfAPHikMQm18G2bM9gmEk7wYkMZLGUxbDvgwCHUswz8Pn3Y1GjpymGDCW7XW",
  "key6": "ipdmv3LYxaiRihcr4khkAGhsCn1RLEiLkYGPUrazpm49C19atFzjrvxo7pNkbXbcBfWDT6wWBH2r8JGP1X6xXup",
  "key7": "H1VYCKdbKK9GEaDZNzsyPwxw69BULwkVj6NVVXg3jQTQt2z8vpELSNtw4NiF2FBbwHUGDMrukTSYhDu1BCS1RvW",
  "key8": "MnN8GDjVkcfozJV1tQPDWCHHaDU527Ug8FcBN5osXEmBf8HtyyzDx3g8wpDsFe5EKfpMmT3PXmNtG7Yhb4CDzTB",
  "key9": "iHxMEm7rye5uNsKbnhcmnXNKATQhEh4iEcna5rWVxsuR3GhD9xTBqXUHxYVMNdF4Y7PJFTmjm9uehBHn1WGRsNT",
  "key10": "3NwqpdyruzWpdBK3WpNWa2pVU6p7xbD2GBn9HkU3MrZ9vDVYUuFAH8NxQum1uH5FgYwL7wrcUybiK2ohBNxNikAV",
  "key11": "5qrBJYVchwEpqkARkdPCKKggfSZoExtuSkznS6RmZrWqERPZwKcCqLG6PpTs9WJueJbdEuXUaB5X8TWEef5LBBKm",
  "key12": "2jVDQR8KUJGK5zVrHgrugHvVW7h4t5r27vqiLhW8Pwo7M8AvUXkCP56P5ZcTZJJd72N6fqbDghVMrQyUa6vWdsAT",
  "key13": "5zxUgtftrD5MZbHeBVCEwEecwtQKWQma31Nz7mouvBFVhcSixLJprZiAxcuX6oEV83Po7xSAeHhuUkxQhyLKqnAi",
  "key14": "26vF6RddZp4nuCV64xBzx9zA9mUhTyJmfARe49rHerwMCRg6BNVNLftM5cJBzMyef8bVq39PuVDD2iGec7FGPh83",
  "key15": "54W8JwkcMT1nBSM23fvkbkk8q5FGyPgkZxB4RFEExPWvds1513B6hW1JyZYGF3Q32SXb4E7yraX3vQxZg5uaiuhF",
  "key16": "3xcm8tk4m5aKkdHPmxxocF3HWRCaFr5V1RuXUsetaUhsUy7sFYkGNgpw5C39qVKKuKT4bd67E9spepd1rXErq5d5",
  "key17": "4C5LWgFeNAKFq9xCMxaqGGLyiMruMbjstRrLfqV1HaUffWLgjCUdJR1CMHTHxjYEQxrxfgzRpdCdn83JCoD4C8CK",
  "key18": "4baCSiAqq55SFiHXFxX19bgdWTXi6678PyA15ftYxSDgrLwnogvbNnpm6NsM66nCi7dcvB1XZ1MDRPw68c6gXShs",
  "key19": "2SehEv2Y67tcQuiPEnSPL7FFa9jxXBbb7QFs9wUvaviNYZDcxPPxAZbpBp8pXW444Ka6cjWNU5YbbtMPKb7Rwz4o",
  "key20": "5c5i2dqA2xbfq9G9G6T4efsCnZjau9rTWwUAvu26CcYCee1Ctm8nFq6q3EamWJhAji2vpjN1BRGHhzjYpqshzYA8",
  "key21": "49NwsCAKttS7jPigs6eCX8ue68HboJ3Q9RVvvstBfTCYv518MSYU8noYK8Gsy5mqso5tiQmdn2PuQgFaNsPU5DpE",
  "key22": "5Cvp8Th4jHEgX5kSKVmg9ngVjXEWYjzTuc9rKAEVccx4EfnaoQ9pfVJZdm462YCqPRb3Lqn8QpkRcj1yS6hBLSV5",
  "key23": "4zMJtruPm2Jw9n3TXGM7mf1CpfDo8NN5Fx33uNxZN1F1k8UMKmX62r8cPdPZR1J2QYhYLr5Y3Cs2BYYBR76wesgT",
  "key24": "3rTS3feujRGqRj2eNXGJ3R1Q5ziHcARVvQD1Jzi6hz8mdgKP3zG5SS3oWYb1ScZ5yTwQ4bSdR1VkWCAeDRpNMCT5",
  "key25": "2pF4kisvs4G6ZFNt2axCDr9Vhs8ds8QC7m8wcbrk2wzw3xCzcPfL1ewY4t7p8yoVP7LBeDXLoXe4Fz1y3p2kqCh4",
  "key26": "2ZszgUy71vY87yVfpLsTXRk78YnGn91tkhY7gq8vmJMk6D9g97xEWaQ8m6HYDkvm3L6fA1Zebxv3qdqnjLbtkwKv"
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
