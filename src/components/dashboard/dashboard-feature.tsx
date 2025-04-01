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
    "352LG9CXP8Uqf4vHr79x5oDbpKjD2EzYnMNN5tYDhquiQrD2fTvGtFbQHHF3fYY1MjUXXcBkNheNdPTwQwxjAWUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WurUAj31F5vPm4zWbVoFjJwrTJR91DsVquJM4a8Szppsf46xkTZAzR5KKzDtRUjzDcxKA2sKEWMHsTRLYF3jHzz",
  "key1": "5D4AyJuPHBvazZtm25QhRR3xb7kicd2wvLFgwTeGTJCP7DU9ya5vdbFyVyMdh2KFDcETTwwd34H5e3Up45mndjFq",
  "key2": "MzwRjHLPbA6mvKgzRAusTHLx6fLDQcoPjUHMcSjYU114TDTEd6AfjVVx7ennbwvMYDnE7M2HJSrmt2MmwdN3tsM",
  "key3": "2WJtZNAaN93KSKsSWh5iBxj8ZhfcBC2rAcmcu5EY898Lhsgub5kDUJBRHkUbzWeNGjeRXyQ75nJ5deqn15V9UwVq",
  "key4": "2tjWoSuXstDkd9LyJ546mLdDGdzYSfkyc7Abzwf8L7Gx89TtDxoi177u4P9GuhAM5Lj6wzsbvYRuDkbd1d7crjrY",
  "key5": "3BmZwJcZziJBNvynxToewkQV4bm536C8edH12jfVtmf1vMR6uV8xaCTzZRHt9kN4ndYF1ENTXGnrXpf1LMNSSYQf",
  "key6": "RGAN59vpHxAtoaXUZkTLYwSPzPvuBvenTtefNZH5uPmKNKvToBXkvnMsPKJz5zETKCzRmMmb8R7ggBkqQqfJXUv",
  "key7": "27bhBAS6itgbDx1bCZMbpTy83mF31rMDWGyzG54m1dwAMtRucycN5cWfB1ZDx9aViVLwhyzYc5bfiTeDhJP87Fem",
  "key8": "2QqbF7rXDXXtvhfwpP7fwiLJ5bxJoe4iJRXrq6VtAq1hiEWKXkiwH7XkoV9u5m7Sf6YvMWaQQtAgx1YbkjnZ5re3",
  "key9": "Hsaj5nB5xDMaZUN9WpgSfwn7fNbJoJGegCCbiS2owrrQSKRHDkcAwknFh6fq6XFL2SRevkh1PB2YUYsVvoLzgJD",
  "key10": "3UuKCvu2GvaqVHgjZ85eMafLddj6chtPqKjEd7tEzhsAWQwFFUD9BCVXuAitCUhSDwz9amcboNbMA1uTXQGB4MSF",
  "key11": "51xA64KZh4DV6sKWqH7XGW5VAs8mrMUsbm27oaXkgBDk7XGLwrc38FZLRtZF5AbXaPNoKVx2u9ooR9ynV5BSntzr",
  "key12": "5kDkzz94Afh8ourryG4fkbUd2gWfPtAReccKqJqSraXhJag921ic3KpHBMa8zvmxn6RpuG5PeEBwwX8iaqemhZM3",
  "key13": "4SBX6ZoXj5vQnYU2Q9P9EfVgaQgggU1QYjSZBBBK9Vigo32y2rsaahXZzwbqfHYbhtsGyY8Gahd8ocAsPKyvqRmm",
  "key14": "5AoLCnqNV6Q76ETttJX1LYFUQToU2nrcuvgsJccr7n1rJyzQGirtibXPYMj83uMWtf5N8JwhLQQUKrVKER2M2ecE",
  "key15": "3J98TJd2McafmgPXUCTeHFxSqvv5Dxi5XBkSJ5Knx4aWzxuKZMF7rScV8ETsh9yzuToxvBa2CLA14vycBmXUdpYb",
  "key16": "3DJe3Ne1WLghbejuunXJ67KBrthKk5nQ87XmWc76AtsENEUb1fzrN5SrmmZjiwQfvps1msM7ZNovp7vB9ZpchPaY",
  "key17": "JjP78nhfcMks9eudYmNVAEmK7SfefcwsbVAgsmETFaCB5HFKsEVgv1rdQ9rhYdb5ihrRwHzAA3X5hfewuQ1jZJL",
  "key18": "3TYDAgCDfoXC1BitTJdtCgB9qWSaBCnvj8XJxJopomFXY2LWrCfgudhu3Zgs1mKMHYJVjzsw7HjqUtFtafemFYwb",
  "key19": "5MhnU8Npae3bK6wYDRR6YQpvk8BBMJYzcwGtyLJZvNrQ5RNomGhFY6Xq8jvyencRnY87z6vbuqMkjnDPeTmfPwpU",
  "key20": "5cwd1w1iUKLWmzDsfbcetVPjN5VQFr6CYD1M7dVjkhs3ruqgrxqEw4FPp4yPjc2a9pEujmhEwysChR7dJRvw97V5",
  "key21": "3evqkAQFzhgEaVpSgs2RgLiE3ExzSt45gSk443c6JwWvtXV73oS97SJs4K6yKgwifnZ6XKZZivrN5f5un8BxZZem",
  "key22": "24wMDHLJMXuDkW2XKzrWdpbzpYx3UbnK8zMPJVomAPN7mYxs8U6CtkeLeEdkWKkSruFzDsJdJvKfzif8LKzPbRuB",
  "key23": "2irbsjkLWQDMjHDgXVSVfBvSjBwCkDUYh6S138wAyYtqPGg2BwcsiDHjaViUkoTKyT9bwbzvfauGs4KSz7sA6Y33",
  "key24": "2AogXaBSXi7CCJ79ak3caAzazjp9128eSYaJ9Y4EhUVveJHRt7Rdq1RPeny3mSzYriPLmy4idzsEhZHAxuySeNZY",
  "key25": "56unuxRj28YcB8BzxKVjBmpFwg4W5oML8CzT5ALC3R6mgYp1AaKthK8GrESAPft5bfqwpeyFiWGFqfqXjrcqAWoX",
  "key26": "4Xm1cQW7Feg3RmjfFDR48aXCdVhhrmKPMYKAiZbBxyqhXn2VbnaWSbXwmVPsw1pJgu3AXqHtjrAysQu8YfGdpJVX",
  "key27": "5G1Hqr19GCG1MDdusJU8ZpMh6FUafYYv4QCwcfiY4b3dRREBR1K51vByS6Pj1MFzot41pdazsiK51yNp2H23qQZy",
  "key28": "2CSpXWLtPf7P7mAKRhSC6CWon4arvLU8pQoi69ATyjJJm5D5k8tNk2M88ifPYCqErHKDJWopxxnZmP7XcurjoJFU",
  "key29": "5psXBpsSDQEqNizUyxGd3hRZm3CHmoQW6SN5Fw33goXxz7RSq4TNQWSMUeGTZg9HJfWM1KnrLaSJUKDzeEP6kNKx",
  "key30": "4iRFqbLJsnEDmX8f6tfncPtVgbS25zEKxeMipa5YgiwpqMRxg7Pdk6rp1kHbMq8kHRT8pPkM5a2QLdjk6yVHjYSF",
  "key31": "nMdHKzFY24qccG7EeuCc6ZDNa1VT9uP6wBiQXnAxscFwc4ypw8F9DVRidejuT7gQ4c6hkhgD8opV8ZVs5wpM2yx",
  "key32": "5AHfeiGy5z3PHNNcjVArbQLYxymGba4F2VkTkM13AcMokiAbBFvEyAK7mnwHCZKj4211qFScMnu6wvn1coXUdQk",
  "key33": "3YTKGN9gdZbTkHzECnGdCbrccYEh4HL5Rwd53nt7hQgot6vYXn5UnDFEbBTv6cCbYptPjFdsDPU6XjF218tV23A",
  "key34": "hvKPcha7Gn6DSy8S4GcTQjQGiXGWSCNmMuvUM3HJA8SHSirE5Yepqi5uzSTrrTuJgtP4599fVrPVZUx2e7W1wp4",
  "key35": "54ibvbCqNxcLWYQV7BSxFypXuWzUfxgVskqczgjU6TFuX7SiKdsjCK7PGa2k3Wd4a4GohFjpUx4YSK5A252eCF6i",
  "key36": "2KHbsNBstJmTgWLruqkXmbJr5xUFNMTn5zCStFnQsLSy3jPdqqqgTcJreD1QTp2knxu8eFXpNfEFjrU2LuQvb9x4",
  "key37": "QQGZGCTAmtgMBvMfyBE4XbLpTaVAs39jToE6RHt9AxmCNtSg3X14dBfNq2jFqqiBh8aZJZ5QVCpikH3QnLYqmWe",
  "key38": "YoE6wcr3d9ygp3fFw9FkwFQxx297CEsvdHRWMrw7dLezLnceN3bMru61SFFU14fTYm8gaeqcuHPPm8MKE9m5QFE",
  "key39": "22MjnKHE6Z7v5KkN6wfapGfVh4r1uX7uUWUGNF5eJLUavynt1Wa3eHRAGMZ6G1wQEEeVLvVZpnyDVaFPvHnubRm3",
  "key40": "5EBAeMdFSbp8ueWcu9qXFNvtG4Uy4UK3Jtu12aghHQAgSqvXVtD5zJqyvesMd4pjpQEaTzxsYcuZRCTgLf16Mkkj",
  "key41": "57oT3KCY92Q8Vft2aBBU4XvwVHhb22kz32SW9TWWavc1dHqmNzLtVfa5USVc7boHUiHV4CXGRMutE5FRX3dk7cRq",
  "key42": "2fjavP82HCAzLo1faiZruymo7wWd8k8aMRG9ktqDej8R3bKHAQQa55DdiJ9ikpeoEB3zTA4i4tbnTkLDfCp7f64L",
  "key43": "ge9ZVCagRQWNRKNGh8FCit6TF1ttFXnPgdYWNC979cFZFtMe7yagTJRxmcywsDxfpkFUAssHhgY5pF4hQ1znVJn",
  "key44": "2UAF6v7wB2U4DG9cv6WvkiNPQj4RTKhx1WBHZgcnZ5SHJMgZ55bVe3AB8Kr3U9h5T7NoNFMPnnrgcAdTn3hFsZhR",
  "key45": "61NDVuqhPHVZu8SGv3EWpx3TxxK3mXo8sJKcAiF7iwWxCGGWBSF4SvzcD75bpXmrz4KkNBZAt8jCnk7KnJuWSM1s"
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
