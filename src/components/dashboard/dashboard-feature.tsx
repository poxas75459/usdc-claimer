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
    "54Wy8FGEbNRisfmNwNz8bJ5qxUXb5TBSeGxeNjSEg9JvT6jcqJnzLaVR6X8a4nqnPR6bEBxdUcENNsYWrdq5mYqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQNZS6cPfExRYSS2A3oW9TT5GBv9wXbcQGnUbFpnYs81eNjzs1syD6xihLiEbq34SzmbuAYxyxRFkNCuTDZQtQr",
  "key1": "5GJeaZEJYc6oCmZrKn7y7QkB8tDk67DxjHUENXS8rBAKxWMf2beYf5VcDwWuL2HMMYbJVmudoEy9uTVUKKrsTwjG",
  "key2": "4yiT62Hpp3K1TBvVEbxCRkMTMLU6TKdBCABkKuDnSwhmTcnsUuvhg332o5AdsaocAWQxzXt8xu2yrw5fMWigJrVk",
  "key3": "FGLrVQh1FyxDSewupBZSUYHZRiUzf7MW91YcMWvoYVjyX5XWE4j9wuh8QbsDm6rtwjbXkM17ApMsZsk1MYfXoxL",
  "key4": "AQsL4XqJuFD7ziurmK4aQwzUnpZxb3yoqb5aaudDUSoCTxC1uMrREZP5rvHKFodAns6kPRkVWTBnoiHuxPRJ8DJ",
  "key5": "5tLM3ntSFDMgAQFKsv5swDZ77PeBdcSkKHB5Yc2UnFQv4wkDfSS3qy2izTzE6ui2gbFt2b2288VKfWVSC8bJkebm",
  "key6": "4ogKvg1kykWuJZ6JaBveSZvLPWnHiiQLhNLvr7mGHNBkWMiZkFn9g6zUQdCv8SSgcb4a7u3u8NqwxxnScWsjYFJV",
  "key7": "3b643WLbnyJKuQuHa7H4se3FFXzyJEUEwnJijjtZDTf9o3gKXRXSbRqnrFYaSzjsazgjKZqcpA2W9AKzzRVoHBYd",
  "key8": "4tbC5vZn4EPrcwWphx9cgwdNtqhvjAAvUZnWWvCTz98giwKMH4cLzGreJkEpwFDDNmt9tdofPPAemTVZhNefcSDb",
  "key9": "TdMoK7urxBS5XTxAk7GkXiFDPmNGQQM3r31Gc8qqtSGkxHebKkMoUgRFAxvs1vE7rTLoHh7Zy8VazrXoBxqT5Vq",
  "key10": "Rn6B5bC7BMaZ5Q5cgam23S3GF6RTKWSYtJ2QGE7sTWGThvnt38AZe92H7AURBwkBpEsduHszZdR7LvbxkxbtVgT",
  "key11": "4SBoh6yjMeJk7wceFCcpwXFrm1ccCtps167LZSMcNkgqdupVE6TKe2fAc6r3aVMWeicCmBfU7cgKCbuWZmSWgtpg",
  "key12": "4yDeqZ1PMDB5dqU3vrzxfDiusabeyiFpiLBtAWxxzGu85pAAMFSu3C1CuzymHx881R6evKieXNRQEGWbiwhDa1n8",
  "key13": "5FHE2xE5H6yeVebMG7dbB9KRZ9Cmn5QgGKXxJ3AWkEkADXMA2GBDvGpdvAPxLLzYTk4LyW8B9ZtUkYXrVkJhxfvN",
  "key14": "5TQxiagG2ARt9v6LAKf8WBToejA7R7qDG9Q4Ce2i3EobXhiJwWWv3EURdZPW5LhUfzAanh1GwF2RisJ9HSMRG6VF",
  "key15": "dSCdy1sUbGpZtBAsfugP4wktPWsesTZdrAgisgsHQnQqSaybeYmjNfHepuCQqQ3c3v4xhxUUvSSnowXRytpFuS3",
  "key16": "5y8HZnVtQTkkMHg2X8KsR3VLDWfRuyr9S5fM5MwQjBRPvEd1wU3sk4eahyCPEu7G7Mgfa8Y8JVTTg9BoG7KDtHct",
  "key17": "LyNmcH3vntuuroBdrAMTfz4gsBWK8wWRu9KE3Exq4QXWoCrvVk4R2HsfbNyPT9W4GxCEuNLQ3DVNsXXw9qyYALR",
  "key18": "ZngRkBShaSiVxQZef6t5BVdbkBeJN42NBVZj2D179tKGF7pdhLHB5y5B59G4BX8d4GvKQwRVL6t6ezFf69XxdGU",
  "key19": "3NXW5WBTCUDTj8QY8vj8VHHj5BTogZ4oW7BGrX2trXN8EReAJSyMdvweVApsGD7muZ3hjXURDFWiKXQXUBkBuB8d",
  "key20": "5USzApcAietPCxH5JxjbgifrH7rjmDc6vScrrhJ1u6CmKdkLwiDgKUsHd48kDLWXP8vmhuBzmvj8XYdpYP5NYQsY",
  "key21": "61rHPmMeSCueqaWvbYZMRiPhGXw26vjyBAXTM1HpZ8Mq56u8nuMdDneFzqWRpNt8W8xYZPDZ1diPq3PgmCubtWfx",
  "key22": "LVQRwa8f7kMmm2inUsZmxMM7YmUeTJYYKPHY3i3vKaLu3Rg3jayg2UxYi7t2g7uKfZv5GUxt7D8nmUtCyxRXqwG",
  "key23": "4dnE3yGgE8WAX6cxZu4fCp5umANSQf2of16F2Sk1ggLRSTnTF7ufSjfV4Zk3R6veVBNAyb1aedMGh8d4Bk7xiyFK",
  "key24": "2W3At9hwAP4E23T1ezbidLohGbRYeTRoHbJUGiLdzeT55d9x8ueXhMrpD7YyfrRiENYRYk7N6dJm8dRDbW2YWdtV",
  "key25": "5CNczkmShrdu7ittSopaRCLsNJTnRHsWGs5ve9jUVvb2Gd9eKtYQg1ohLs3dpCYZXbq8eULwfyEX3jSJCBd482Y9",
  "key26": "3ygjxs88v6MAYTtAe3YBtcrQ4JzA3tNinvXxB3mG2jb9iAw5X82TKSRDtPLR5MhZnSaCDMYCzC9C1aEYrKrKddg6",
  "key27": "2HZyKnBTGUSuvXAoqTqyJntNZvcPhMue3RLEYZ8zb19ZcgXbkMCWBLKm6oTSZM4rYtkRRZLvxSTRGMXHRrEwBgWA",
  "key28": "2cMCQzvtLm8N3kDyoKUaSHU1a75vn9a7Nfm9F2S7RjW9q49NbAbXL2V8NkbszzJRVeqxFX2oUyw45mcqbtkSpsjf",
  "key29": "DEFXunjTY4adAM8rdbHVs5S369ZAhWi2FKMnWxgGN7SUy62UHamGJ7Rj42Q59YY1totg4PU34vnJFFtsZE4j9pm",
  "key30": "3rpjmyiJGqgJbJ3jS1BJbyeMMM28vVc3brbDdgEPk92gdyigDJQHrNmXhptwHvELHCVBTdJxCHQtAQT6bYBXphcN"
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
