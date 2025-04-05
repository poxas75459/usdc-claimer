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
    "4hA4Sfzx1Nm4EtVGMzHbwF1tn5XA7a5tgPo6eX5bYMTg6CKcsz23NwcqVjUncBVa1EDjUX93z8DjMJBv8VhuwoXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CJN6iGu36HmDXLwiUeGrgLV8za3DSU4gWSwF3a2G1PQPnds1H7E4nh7qiQ6Kmd8vLLv27SUXztyguwwE8uFWJRr",
  "key1": "4GCmJabAJtw3pnPsazdw9wD6LZpNVJMU6wVxJniFckNr573bULfjKLFZvATgFGbNifchttLUSCAxStdXzZxEC5h5",
  "key2": "3r3KeMR335SLkSRPRiatyUbdGkSMWxU3mUPBSgD825eF9nesrrtdTs5wgrpz36B9Edp59bTq882Cc2q3kF4FHVWQ",
  "key3": "4xpC5PeHbmCzb1joSvH74WZUhcxXUR44Aph2NgYqrmLwmotSXEkNEk22x4azvRgjZ1JPtZgH4Epph64kn4mybGtu",
  "key4": "2oWhcFV51o7ra8ckxJ5cLYPsv2AjZznLKxCJYvtZ62Dev6N4AT5SSxuQgNWkv37w1PYq5N3gSBXN4zDEoLi2gL6u",
  "key5": "3aA12J6GTy7VcrfXwLD8ZSvHTmFqp6eswMYam7FxXHszC8C4fscaNc3ExkmNwCfosCphHYu9nVSnfQssKRpKUMfu",
  "key6": "5kMbKe3cJPGxyZmRLgKyzPCKhy5RWwdYPJhtVp7GPojbj9FLASfF5JwbvHkEyF41vAztwbFP8k5LxXyFGt3i66FP",
  "key7": "5a3Vw8mkjKGE7QQbFYz8m9tVrB8Uad7cFR9b3McumtBkNsPGbX2pA8tkMamazfEdUZ8yDgduiXZYbahEah3hMsdP",
  "key8": "5T4S1iwb8vDrgZofq74w8P5YbUVTYEBQ6fZq8CyfskSwYnoNeKuHaBsDKUMrJQqWSVZCiPigto8omycAuSKgijds",
  "key9": "258xZfsV4VP2DCYKQwQrHH7T2bf1m3EzKACTptvZ8dxVYKx38ttrDdeRD9fj5bZFmoZor5q9htWFsLQxGUVWnJ7S",
  "key10": "8tBARmkZbJFFoVdWL8btH9nE46Cm4Wk7JUoAGqo8FdbeBT4SLuNJhgiPXgHyP27SWka8nJbrdwZ63kwyxRGh8ts",
  "key11": "54wNUZkznNLihrGj1HBwBmzdWZTx2h4sJmJNTxyzwMVXEDNLyiSrAXH3UmqxnEfrtUNhmmAZ5mpAyZpNeprKuMYB",
  "key12": "5eKYKQUc2qDVGyE2yVjxCeYsPMWDyjK5xnewo4KwVBbgUsuNMfFZv54MyQ8cJhoaD8g4dUm7YRNgjzaHxDsF4JtQ",
  "key13": "56tdvL8EfVdSomxedc4o88oFPnbtQhrtKykBEpLzFBjF829Ye19qvN9BgY5wzcA9t6NmZsgeRqMNXMCX4EU1LXGT",
  "key14": "3PVQSm4t8LMckKsU25YWUBKLob1Hk5rY8THK7cZiEh1yNzY8suJUxjy8T78zkTw9xWDWLjEmG265ZKeic7BjQi2R",
  "key15": "38h4DKhfDckmcNUW2FFaeRnBwsHtYSfRFXphYzCvJajUD7tges9Z9hYNFcgWSmhver6dVbpGXCZ9iv8ZygupE9EV",
  "key16": "3wVcdaRB5XJN7mhpUrgnv9MCFEGG6sQSzN3A6TzD3Ex4sLkV4VDvqmKoSajGRig7EdkhfHPEyiDtocN3Ua5P8xm9",
  "key17": "xVEucMseBTVbAHk1HxidRcqJpcv9H1gnpDPc3GfkChrxiVQGyckQJp5i8FHa9j8D5S3ZH6hM6YEzYpkwHMC8Kbt",
  "key18": "3jWU5SYWxHprdKWtLaZgg6tXJutLbcmkFLbPVVgJHN1TvCfLWhukUiTUoSSmHn72vehNrfTmZE21bww88oNrzrZy",
  "key19": "5dsv3L6GU44pwXyCdbU3t77wzEi9XEBb2CWkUuG3axHUwQQHFhc4B5zpgCY5yiDyeL1iyLaDWiw9QMxz8NTjoTSU",
  "key20": "3xaKCWLgqAttgzWsQzGg1obmqQ3mx2bMm54Zc3t7ugEmH69WQog2BCuycrGkfn2GvGpZuPPTqqnVz3GKemVWdKYj",
  "key21": "3K9cEiQN61dHTeYS6TmuUbzzY4FsPDbajJVkQABSmpvbmVL6X3vbsBmz2xsaR8TbrJYTVRz3jEmGLzTp2oMXmsww",
  "key22": "5XYFUtrF4rnuThXXR7EicoPJcAabTY157uCVYqu4dwBVmeWULmTJQ2QWTr4mq9R9Xy4fX2KB8u7WH5t2ci6PJVRC",
  "key23": "24q79w7YmwGsBY816HnyurLJupxdKxkuG6jU9Fegk1CxUDfsPbKGWRrH78fAyyNjHziVML2XP4dZX7iPbu2tjKuz",
  "key24": "5LFo1JEgoXTPQWXGy172eFwwrEzZBpH7NZG9kjg5WPzpu71PxsihG6UA3K6wNpF4VRMw77cJ1cWqoNBNyDMa4QX4",
  "key25": "642h83fDFzRY6EzRQ7K9dAMQzsAR1LMp2oSQL9ThHqSJ16cUsLKU8CJpM89uTxajTUVNxhZwMBbGZubvybPresvr",
  "key26": "5iTy5QnFbVaB4kXuAW46mHomU6nnxw4nRBNdkWYnVxu87ajXVKnY3dLa2gXmcfGTv4TAM3cujnc4e5W2jyibEBHk",
  "key27": "5ae7AxCTNk6PLiDFEM39tPqCmptemi6pgDssnTFJiuKXDVMQdHDotonwNiR5fDjEmYTLFFxyYyq8TDUPZWPiPqBn",
  "key28": "5cHNhnEZvzN5y8VTFmoHwQFtNaXnVLrtST68Ae2YLo2j79VioQfTWM88X5KBjik4DzxJ21ySCdQbjmNkg4Z3PUc6",
  "key29": "Avh5UZ2qRKwWb3amW4MiKCsU746QCxYBtrHBpoCSo1QKgD1swDpeQMFc88FzVZDL1oQ2UG1wxSoBwZpLD3pCZ4T",
  "key30": "5iS7Jjz673vA2NSNB4XwsRE3Qy8iixvSb7yNm8Q3gVUZtvdWqeTpdBqsoibv7uyFGeCCJ3BjDAnVBn6daR1LnKGY",
  "key31": "3cquBLzKjoXsnYVj2dexDiYGVvWmyQiSdBVJ24zaRyFAe8FZW7W5bdPD7QuFtqq5wYhXjZB3SLVc4GxxuGCXQfVP",
  "key32": "3aqYeapXfPtXWtKmwBg4FpVJBspyZ6j6rMqbSZk1pUx2BeKYyNboDhRERHW3CmyGa8azBhLZ7ncE7DCu1zZUC9AC",
  "key33": "3nj3mqJu6PTptjPGsXcVMtwDgVfbEMMoiGQ3gVt9BDv1RhYeQwD1vmWwj56Apjj9nbKWuMTTiZfgqmTPCsjA5fvL",
  "key34": "5uaeN49hFLBoTpK7sHXgLx4V983JVZZxuUNyZRRSKVFGMkSzfKWPgCnJsyKvVE3vZ7GGom1XqVeDLJXEVi8J3Eqn",
  "key35": "LsfXnNrawiDtGpPwAdprwvyVZcxURjUQdBj1PvaPxLhC2v9iWFLVpN2fV4otwQR2CZd8vYzryLwYgvVXxkBHqsq",
  "key36": "3LZzJXZCNXe9a8jbtr7PUe2cUXrguCvLoBRskT1a4HmbWXjSmL3Nr8YJqghzvFCgpvdAt42QgqD88N3afL9XNiMU",
  "key37": "4gy2HgA1bncd92WSuQGJdisojg1tMEFwSMigZ52uhtpVF2X4AHmXvYUY9bK3MC614F4eGqUARAQHXhMPQJ7BknAA",
  "key38": "3ekncy94LHVTDuCaHas4HQwq1DtdH25Lpq3toCDprmom9wmzn2nuoRoox6dTnBqUqisaEdFCyNDGkSv4hGDKXXmz",
  "key39": "265THMGaoZQERe3tqjsTdtXVVAt8wLtRXj38DCBubLhDmTiQp8w6CxL5BHR6Kj6UHm2QK44KGGrphRq2QTdDRtqP",
  "key40": "3Kgt6ZVigecD7h1bpp6cvWyjHWNJwVFbyBqTwSh51PajbWSnPr1iXyG1fwx6dqcv7QDEXTf6ipHgdybrwH5w6cW8",
  "key41": "DwFNXvE7QK5T678u833jeRHLHLRk1CFpg3pkibFkHxZ62xR2iLWk4DPF2cTuSKVvbipsmEaBMBhft9ekbkbeyrg"
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
