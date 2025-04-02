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
    "3MvzEmH3LVNFK473eRsL6nvvdqefMdiTxPJkaXwxw2WmbdAEKbusFEXoeYj5XHNcRwHakQht9AMoGjKCXZB6YcFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8SzxtgYwaDEeVC4KdhvX3MiAdfeVVAS6h7vGbEvQubM3S5mdiB3uAFUVfdEJMT6Wdz34geLxiHv5Ytv6iE6wGA",
  "key1": "27ALwoFjy3uJqSE7pCfetuPRrqj4M7HN8eSVXP7ctnmuExKApVLQTmAV5exVZHB7SabaaL2fMj2XNLngNUmMnbA5",
  "key2": "3sVs2aVabcgQEXMtXyCRKjYdTWbHLiMiosWUhh4hn6SmYzHADPtRYTK8pVUHZnbdx2uJkgAcUFJkTTUJ35x77s8z",
  "key3": "3d6zv1jTZtvXYikKwunrxrGb6sh3Cshu6P3E9KfsTv8uAXq72Ae3Bnqk3GSDf9JRHanVwaTs9vQF6TWTMBhBuu5F",
  "key4": "28PPUgta8GUbLCVYDQxef4DY2xY9eT9XPFYuR8LcKCEFHExRNpqSrJcuQzxwvXeNBAvexYqvT9gyLG789NarZd47",
  "key5": "4koaLdu7aSUc6PNZXsVUzkkkVUZhuUrLYmXZNCkrjWgrny4EPAvw49ZqJqaPdb5Ne3MyZM1xsnL9TkGjpBvRhkG2",
  "key6": "4SXdrEqgXQx4KWXp3nTyQr6MQg2nYCdXUkJC9zShwLgTQ2TXJggc7TDyb62TiqSuts6zJZ7jVCdVHNY1ChjCQZsb",
  "key7": "4sRTZvGVASAb8aW6aekySVRxmpTJ2NsDEuRGY6zXQFvdZuvJTD4BJXYUw2p7oBF3kER4yKj9grKkYgRj2e4Gp7bV",
  "key8": "4UFyNqCYTYQgSSTVmfY6Kg6JmqfkeZqmxQpSrixSpgyLLEFZc9GWKVZ8Gzmw9qYmL77RcEnoWz6FyqPy43Q1LyaT",
  "key9": "dzHedh22pbVaMEGCCCXsku563hz7nLpEiUVCbJz6emsTFJeegwF8QjvyehD6EmzAt5TGwBRmMa3yXFPwV9jmLu6",
  "key10": "27yBeRWfPe9ChA1wqWafWR9JxYzFU9XGMDCSYgYKe5wUQXmkcnKZG3TBPFUDoPwFJT21rZDfjvN7YwrFNk2X1kkz",
  "key11": "5d914Ftur8bb4NJSqrwMRKND8argQin5iDYVNDrx3mNLYihRRHf87ed3RF825RiGCYHYEwUaWRAoAiv8rabLSTxX",
  "key12": "26dRGY9tnHMGiBAzNuq6E29jCPZ2rwSfXoFfYgLK7yNwr5Lyn1EboyoQNh3YXGrZNwFMbEXeF95ZKzqBgWDeSVmg",
  "key13": "321881AAgvCUge1PSEZAxk35DPiEZ2YrvPbJKWD9VucjS9jBSgKDvCnE9ccqQ87juHK5JZNVwE3FGkSsrRSKiNZD",
  "key14": "2SBBFPf7JbfauNMKY8xoQnMRyaaBiFPgR27cBmFDorRsF5KHprKTHcGJJs2reaBbmvtBu9njkEFGEjnjEpEr4HUB",
  "key15": "5E8WAVLyQjPLK7N2N2mZCHUAS7z6KoB4ZKf5YAXxu82wJEj8wSdt1UJMamkyr5LFAVvbkwiDrZMinH2agJcgi6y2",
  "key16": "5DqwQJbezSvHerSjMehUrX9ZMgrD7p28PicAsD8sB2m3ui4bxLaMTZekFQnT781QKgVLPSk4rHfBSqazcoCwZEqa",
  "key17": "3GQn3MomeLKwxkCmNN7QnLuDLTMd5X68zjJz7JZrXoXfAxuGEHCaZC7QRwVfDgBcqcurDjwy8ws1GvpZeLC1CwwK",
  "key18": "4vHoMQVcWg1eYQuxf9zeu6iQWSazxnEMYXba1Yi59wFHnQwFWieZnzB2sKheu9vx5AuKxMjez2EGriyBidCLzpaf",
  "key19": "zuVs2QjmcoTDt8KpBYc7p8SvoNiRg5B4btaLsh5QP5wu1JHmMtauGs6kDn6GQHdHyViqyNMjsczWzWVJ6CBtkU2",
  "key20": "3cAq7RH4hbPz4fVWTjd8UXd9rk8NAHCVU3JpnM24q3JaMM6zy1GUYPWVAgqK46TKXCWxk3U3tsDRFQgdFt8mdaC8",
  "key21": "4Tu24QwcaYBF8PL3kNUZT61p116XDb44m5yMqiX6iz2HcrwD4wsnqqhcq2S3eL3Xinqra9az64e4wydPbBzWM4Y2",
  "key22": "4xsm2YCL9K616d1c19tfUHmfsD5E9fcm5TkwLSmZ3b1HzmxfgDPkeeoqqnC2G6SafxgJ3aH4eqnP7zNt6deTpFZa",
  "key23": "2pZVMxFjcJAEBb3RsrrbwRqotUSCV2sKkMiKpQW8mTbRxx9tEFdv1gAXw4XkhbCpwhfcb6u6y9kH5c9rduDb3NQr",
  "key24": "5J1aRQDv8JnKvdPXtL8Z2hrMLN7NtwXxGV8UKfs2iuoNkpuKtGgfCEn2uRcswLxfnH2NpEaj91Uv1BwUVVwMz2q7"
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
