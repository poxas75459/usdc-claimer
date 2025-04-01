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
    "2nweW1VG2a9zPdLhUJz3LEi3RoZTTLUzyhsjRAT5DEcxn6YfRyyuQ3fbxMMFmCk9wnrZgapTq56ncA2Y26fkNBFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u21kXBAfzPcTri9vs35rtRPFHqvq7i2EURmBMFxW4k4zLYq6QjSE3txoDmeK3uew37mxBku1MTTsSX5vpY4ayNx",
  "key1": "6LxeMZge8ewz7sZN9CKC8fUMid8xyHxXgx9c992vq5Qbs1nx5BJPxAZDZ1MMvqXHZtEq4eBn7Y6eWhKsbwuZAay",
  "key2": "5DdCahEzAt53n3xkFdn8oT9ReWxyXA6myYwbM2h6LEYsmsvcWfNnDpt5jLLQMPHyn3BnVT1RVdjNHr3YywACGGJH",
  "key3": "4ZBZFAMtWmuzqq4i1hkJD19fQrvTwZnBYQZUKD328GDkEZwzXcnq42opynfX2KdHhPKdCMDduhwSLuSfabReW3y9",
  "key4": "qs2dwncicpNYNs2pN2jMrqBU21xPTXyUU4UKCMRhuABuNv7bopd499Ltnn8rHc72WVjtVBT7kRXmszJJcM8yYSp",
  "key5": "5qnh6TtzTojVFL3akFfueFrYwR26wXhTjG7S5Y6fwhfTGtYJnd8oWCiTbwycWfVkJPnq1gNfmMo2KN7fKGXDCwio",
  "key6": "2MFUncSM1UkhiFnRxuMoqDXntLTHyovmKpYcAYkP3ZwVkPppcQ88ayHFSLkZv9He1CPGwsE8i1sKpn3Y5XH6ukQe",
  "key7": "3dD6ZUC2bnNnqF1vokkU8cRufbY931rYKN93GDtkXvrUhoGNrWLq5e3FA73vYHBThBx1BQzQsWGkZjwwVLffjVaN",
  "key8": "5dui3iQxwmJsj51S9Uu3ycBcYGKQUzJRN9PpxxD2MJ2raLyyTksjrVkRxaX3hwhAuddZGeNnXY94SLxw1PLSvYsH",
  "key9": "pJpymHxknDHFF5U4AabgueqM9Gh6aNHQWsDg17jG5uHYXtS2eZGhmtQe9wACeG36opQZ2qk52QZgc3jaHuv6kpX",
  "key10": "28SQfUTAFJLa7uShPpw2JRhBL7rjd8a2MCVbs5o2wdB6roxdWGdQoY3KzEnUFs9BLKtHVEBpBvQetGKUxfVYqP1v",
  "key11": "oSf7jXHV5CBuA1RXaEiKoDTscm7SjTaCp9rggSMoBUceATQbM3Y4L62NFCytFhZHLNoqNWdYiD5tDsZXGWX39CU",
  "key12": "w76q5o2NNtnTvoYhztJqvzjmMV3Hk8q8pBrVdqZMjxyQyC1x5Snp869boTmhfrCQNTgLCbUzDiBcuYy8WuV7Bqg",
  "key13": "2qkAR1ouhwte8D2QjLu9vNdSK6h4Fwg7t9a5e8dVfppxNsHbbHC3Kzgb9VrddruTBchbV3PvpkbGTfJEZUakYpPF",
  "key14": "36KL7YQQzBZa8awNopDADtSRGjaxq9qpvp6R7e3amhDWdgskKWFdgGZxFQ1usdKxVa6kx4VEvn9QW8n3S85xZfW4",
  "key15": "kPRoryPUykAMCnQMkptWHdijXPeaBLL2eT4RoRFFjhEcMHL4pShcsj78LYS1CMCMkGZqUT7QuZasF88K8M4k4Md",
  "key16": "CcZQji6i8xwTXeqbNJyv3bfWU4dbqqFpKj1ARJ3E5eAQUBw2X5Ds5a4Zddap1cd8DJiP8Q1SPtR9ucc4zeav4hJ",
  "key17": "Qdkzy2n4dzfsQV15eroMectQKAxuqjFu8xGegh4CdDUo61nF1JTwD3NrGHkCyprZHUeucLTy3pakKCnvyW93m8b",
  "key18": "2CmsiAasEYrLRtDyN4CBWPZeFMU3H5A2ct4LceLBLAM1VPo8bbCG1VmUgL6XscU9TBRUFWDDaSqqt2Azt6KjZNd4",
  "key19": "3AT9tmMWNYbj9oHEUP5D1ZwzLX6jbmnaabnHRutKEgAcDdQujmgik4Zv6VLy8huh2THhjDcbuRPdEAkYDiZFu5P2",
  "key20": "5rtc3wBf9UG8why6tyMGsVcaja4BVm8fTDNCnu7jsrmKjudjt9J54m3XxG8CqAaxHQJ4aDQ45fjEpLM9QW51RRCv",
  "key21": "5n6QRKZTyVZejyFyY52SD1eBrFw8quLMee5XJh84XTXBWNVvGKMnzCGztCka9egV4tAkmGy5j7RFLANj8nuhZjiv",
  "key22": "2wSwvLfDmpmHdKRhuegi6PuFZSKirprAbo685HzZcyoJQKc3YUJY9NR35ugHJ63KWQ9FjfajtKi1nNNKSC9KUa9R",
  "key23": "34MiM7FcwAfYs5UySxm5dd3B4TezTTuyK4BgopnMwDYAuCV232QGBff8xEZYqPhjuKg4bscmTzJG9ibStxTKQAYX",
  "key24": "5HrmEQAnHsCHsZEV9dTib46s9qkRgiR4Y8Eo2i6d2dcTNCuieaAnqFtDXfq9dG3dKyENFXXD4NaPNZgh6Aonzvno",
  "key25": "3w4xa2oW5Tj97gQWJdLLLsrMw5N13qLviZn5hUGxAAhCeATcP2MyhtGToqfT7TSEEZi9tcqwKvqvqM4HfsyqnkNr",
  "key26": "4DSDTKdVDmm9Wc6GrrtzgkH89UeEDQeHTp4kBXfRFb4nDjPpUFUiQWjevKqa3ENtXC2xLDkkSZFCUXFcTCSvx8bk",
  "key27": "5tCqaAzQCZuwY8n8dUKH9oz3ZzUjcFn8gyzvL4wpUmUXKmdeFVd9vh5bPHdmfwRL1WVp7FcLjpDefu7hTdgkJfVU",
  "key28": "qWAYgZZ94vgYsw7VHztFxaDoeLfwVwzjssvQMcFNzioTgF3jozAFjNiGSc5jAVLJihnC4zmbd24d6wmHMoLmPrM",
  "key29": "2Ri7xrWe57DG7CZTYzt3uJoYmDoVYjp3mXVZKM7dNSyrnSLWNEMnjBzGjXEesNNq1akLGaN3rvUzpTf7GEKBCwBL"
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
