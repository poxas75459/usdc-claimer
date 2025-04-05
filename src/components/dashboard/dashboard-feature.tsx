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
    "x8Eor5C7cUsUTpRj8yGMoU3kSiZFaTwxbLsLetX4oTZvTqv5VopJDoXvkpR9fHHtEUbDbvHGCPf4t6ZZfkVr4Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5yyKHNvEEA6F3mGERYf8BBwPEvzZwCUfYfgQTzcYx6abU7E61LPjnfJ8otqJ1om1UoUNj92LWbV9XU1FQ8RHbq",
  "key1": "2y98hoQYZ6sAFC5cThEtN2BDoxc2Bpt2335j5hkRojHYu6NebWc7AWhnu1DWwBpzyubrXXxfq9dM27NEpu6ZM36x",
  "key2": "3B7MZXVmxiF7dprVPt5qDsnGALrdHdAGc1ZF6ryd9dgzgSXxnBuPscddPnH6YP2Qn69pCF8ucwyUofZinazA6Gnx",
  "key3": "5tCkJxR95ihYGcVeRAiem6cCkbV7XiEFe76w7SFgZpF8mnfDcUFbt6V8yfVu3DfdnNTRCtZL2LQfVArwTt782oG6",
  "key4": "2VP8sqXXafzXQBj2s49dJDQ6p5PPVw63wRDggjBNy28i7MxFHX4gw5P8CFCJRVfWMm8BDfoarY7QQXmZy2SLqe6T",
  "key5": "4ESVyT5b38beRUL7awHJ72htAods7Zm7rdEsKSYZEtuPtyq5En7t4zXMCujeN7zJ2v6UzCssCxoceRvWPPrjQxe",
  "key6": "3fRrMqVfKfpsG3keUxw6GgWZ4SqKtAEX2WjNEQgp9EYMZhu4pc2yF6ME9z2yxj8BXxx8D8g8KwCQSjqeVghqPQ8Y",
  "key7": "EuJnxgLeCea6yB6X9g9qEomLLhM7wkDrnQwSXiweLbgED1LCHetUfjp575bPLcHGF5dZ6kpE9tFg7suXP6Dxq57",
  "key8": "5mbDPWyR7VSLdZgnp6aPLTSAo4o3PimbeDKGz4sSxFkaaEZtCUD7u5MBnksVrdbE8m1pn4ndi5tjfRVz1AGPAJgK",
  "key9": "5qLM61p8xiBiRbxcpDJLr3F2QLfpssfcoy4Nct6y885fcjV77nkJoEMRn3ELoFtdoPATSQg6DYKvmRHq2Eh5DBLb",
  "key10": "5zeMb8q92KHJSG9cfCoLPVEPC9SbmL1uCNeQFwzLSoZwZtzE1EDk98Qj9KzB4n2PbHWHEtLBckNYRCQagq5kwfYP",
  "key11": "5zva6deYT9r5BRn1cGzc3x425tiYVcFNuNttcVY9MZJrfa5pBwqQG8z2suhVhLsL3dPWKFnB4GF7FyQunLz8UBFy",
  "key12": "2NH1VCqDgAxjQk5apCD49XuJPLvxpDk4d4doavQ9wy6EZ9qT2uoYA5HeTJ4mTvn6Bu5256FNb3nU9Y7QXgEboE1y",
  "key13": "4NGZhZGZNtWK7iwbmYfbxUYdkeXtnsWyHmGNHaPgEffBKRiBrDXZMibZ9wayLbp8TpSiAeSAg8wHN32GauxkH6uh",
  "key14": "dQU4i4VBoymsfVFheGQAxeeXdmcszHCpuW8Z9vAjr1JEtAm7YBQsjyAk5RpGWsyJqcPqNWDGSa9ZEraRHYjpYku",
  "key15": "2YhtcHLScJAJjGoytHWwicFz5JZdjK3jpig8A1ryB1Aj5vGfpXmsJ8iEN7XqbDsSX7LPpqYg3oKGjvKxqB5p9KGz",
  "key16": "5AYKUMWcNdCLofwPHa7t8dM3pKwEsZS9sQfjmKdigqzYPJPCf1ikt7c14a9DMcDA94g78BNfRdf24feVVXWFb2yu",
  "key17": "3LkpH1jGPaaCnn3ZNr8a167o75FA614xsjWVReyvUYcMaQd1jukEZg827MPCn9NVYn3P7m1qoz4r82FXhsj6Sc7e",
  "key18": "ucaA2Q6P98kLq4gikqszbpEyd9Sq5GfenumsfTRnD4dMKZgrDHo2ycf4KcGqyXsB6XmB7EFfe7SGVanf1ovS6U6",
  "key19": "3ck7jQWTwtgCHAup4HPM6rado7bUD7mGphZ1Y5mLUqXaD2zmNxdn8fUoMbhb7dGHoYwkoUhqJNetaWNTQB3VkeSL",
  "key20": "41cxt4R4pqVxNTT52rfD48633fpXRLePdeus3emkVKZd2JUT9TZD4jpGdLbfNxqSQbPTmxUQEY3uCVKhbWJxxL4S",
  "key21": "5oCUaWspwPn4ES98BoWVsUJUBp8tkY7kFfH2k3jK73ufrAZnMuaB16NsDP7vPa1G2xw372vkmKxGSKzPUQiXvXXx",
  "key22": "egZDaoq8VHcyWEhfRkKu1HHGzZRBtBVEsk3e5nT6pacxYXsRSiAY3xapvRQXjkVY4DUoVePZEQWHahbN9KeiYQY",
  "key23": "3s1smv9Pynv9dbqZCRyPWMR2hyftsweQ3jkwxyLhFD6FFg3M6SXNyL3qCqR6zsQjWjeudtpiYc7u92B1f2jhhteN",
  "key24": "2fiVdSS2rJSha4sZUUqTonewBo87X36dWb7EKp6UemXHoBBFqxqom5VYpJm8EHQC1zoS55sEMSwWPffvew3tA6qy",
  "key25": "iULgksZZqMbvGVoFFT2EEr5NsNykCe2uP14TooRvXbinKgeuTXQNTvFMK1eeNe3UYZ16AU9JZ7BmtEgfcASAKtX",
  "key26": "5td2tvgePQPRWY1GTAiP9eE5Pe33crNgWbbNDS6JtX9ATZC9wdV7djdXPhZUDJfwxyA8iPswQkHyyyY4wucVytgD",
  "key27": "2b3HrjJsnueE2bfbZCQqcA4arMSv5xmQv9Tck327npkfk7tqUachWKnET3wkBr6s27mbdnpFKkscdgvdtHD6DALf",
  "key28": "5u3NesS35UYZGkYNtEujV8yRTVAtKWdfgjubdQL5Y9MXjs4xVsCibhQ27JMtRkPZUjrWRLLrVLsEQtWJ7gfF8hM2",
  "key29": "3oSmexQeaoAcCo3E8n9CHywFqhY8oEAU3cKZGpoGoJypueWZ4J2p8tu8SsjEuAC3az8yxiAE6xrbKgVCc6t4K5oX",
  "key30": "4LVNMmxQGr9ws2h2364XpWT3aw9XXSHvh2EANKHGieRAmaqu3DUk1SKEp5rQiRNXxrw2ctZxHGn2M5WmkhZKqx3m",
  "key31": "4z8mw9QEyYZAET2hWd8QTuu4NgiwrTwwPNhYF39aq5jQ3QqMxSf9x6HjjybsJoGrcxznabsBitBYpApSMBtVH4hM",
  "key32": "5QnEHVzvfGCbEMPWaXymqNJ2kJWdnHYVmZ8C1pwCdg7xBy87MuxjVxkq7SK3Zuha28W9NQ18AiGpXB9rAShPewT9",
  "key33": "3FKSNEfLBDg6JFWHXB3vaXAPmeNg65SrcMnH5P3vq85diz5ThZX596FmmC3h2ZN4WY1aJLyax53JZMqBbku9k1fy",
  "key34": "bcayPYsyzojehkZLYMDZzN7ng6xZ1Ypg1Px1cFYvBkfAdCK477JYPpAjD7eTMfFvigDcCR3BwEkSge6cvxEq3d9",
  "key35": "3cefdPYnsfWAXpzH3Mbje3qffd8UMRThaW9tVCpQ6hq6o8Xmke7311XzMPRodY3ESWNqVFZaDUZ14pTJWKbQTrse"
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
