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
    "2Q8DrbzTVFxzkjNkNjx9qq5tqztpamfAHGRwe2wmmzMEwjR6nqSECKMr5vqLu2Xwfo21uRMZPqDcNwM8oHqG7gAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqahp6UeanxbPJmRvsygjk8UB2ztSPrJ2Hm8EskHGYoDronwrDNsyAYDRRNssr1hRkWfFxZbs1y7WPNRExadfrs",
  "key1": "3QB4CHf2GM9VkUZtPVp5kwFHLtexnwq1CL5hoCgrASoBmwnb9gpq6GrJgy6mh9EpAvaSCamqtzungddVpJG9TkLe",
  "key2": "5ygSp4FywZ3Bx6jTL6SBvyEJg9dfaGYpyHFPoegXupTXrFeWt43yURQwCqHzg7u3jCdiWug3zAcmUjDdczSDaW59",
  "key3": "55jNJcMGX1SjCLGt3UyaTiyXDTTh1mUpAW1Ne45A8H8RnREDC2wKXbhZQpG8jzF6MMt9PkonaKYvo2KW6qVviUCe",
  "key4": "5kuwCdcdhYSPgfo2vEkt4xf36eWudWDUYwkwp9t3hayqLnRFrd572zCeSKdofUjP54WAukk1cTyrJVPnQgBHQhPm",
  "key5": "39YJ4moCWkNroC3zDEbz2N8r1rB8CUms4sND7iQLymyZbVerAYp1mGaif2AKVtoEKnPCHgqyCYqVKnVcyf9CmzDP",
  "key6": "3VPJw4cmiNzpdP2DoQQMQ66QGWfcvBDr4zhokyVfnKZcZQ4HBAjjQ7SRc37f7PuyoqwGwUsU2Rf824HSceFnbDZ",
  "key7": "5sdreVbrRRuxJ3Q7NmB7pvRfP3V3XmckMpMfNnJ7jyWLsG4NkYc4hj4syG1CeubvS7gwkKv16P93D6AUNU4YQPjh",
  "key8": "mBqHZVghSmHPD7WK6WvFJuA8rnHBhzQBStL7sYePjMMBBD3yp5AQRX89AcaXiJvHoowXtxCryjEpVNV6QT4ZRrE",
  "key9": "5ToX1CKhJfSHBjMcpCTJ9rLiAPYP4fSn9xh9a22WjfQpQ2vfHegsEQdUjRACcTKyLGxUsarSZ4sc8n3CPrfUYWho",
  "key10": "5582KRhf6MLbGXJsLW25KqpWc1ZhLYSssy1FdM3iMKgN28txv3Gbia6noU2kAFbxccLASFawRKmnGoFDrqqULVTx",
  "key11": "3yLWdeVGgt9rVWrxFEwgKxBYmYppEsDkWXB4beEM5ufomzapdx4coMDyfyWJreQiphJMdrn4iK7CyMG5j6HcFYmV",
  "key12": "261wNXp5ih6iqaSJvap9hAXB6wLM558cNhZNGmupa66teDQWhyntsTgbPP4HBnTNmLQJeRMkP2XxmfCwJos52aoE",
  "key13": "5EHR4PDRAUYkFc2PnwA8QhJLyaofSXZ9XPqeaR1kywBc1m1bHhoQBXce7KmxFjZjn5X5xKVWmByaPxTKdKSJQzLW",
  "key14": "5ZR84iAsXQFEibdLdR3Rz18pWarf71xbvp2Z5CbyLatBo42ENnnsA1jGNnXjhuD7WKMaW6iToBfRWTWrMTzg1Svv",
  "key15": "3ooFWhVwa49TVAqv6sbyLQowP8VxKZwSKN31n3wCypCjLBHzXtNyJRHfKAmxTrRvkDvFkgyn6T6vwVKSPshCq8qK",
  "key16": "kxczqqkA5QX88N9PE73qSH3LKAuAGboy2bu7gmFhbxVcsihv3LyRRZSXLfB636KuTX4hUaqXcHxUFFwrVzjDU1R",
  "key17": "5TRngcAaKxhhrQaaMXWgJ5tgfboS4cfM1QGvZzVhqgyiNrRZ5kAzx9TEUXHwndwBKjStV4osPeFBNGG8vnEMJGiU",
  "key18": "2ZTxpHJivxJuMoktbxjxFvRFv1yxa39WeGAgWTWQ5eoGApy77eU6EbJTVymvfqFxqVxgFopXXR9b7urXVSPk1EPF",
  "key19": "5Z6NJPqjVNhbRwBEspsUUFq8QrGycTdF43ezF3a3pCGn8PHUQRVMGxTwrfU144g1PxwqWen2bv1r3sMypWMAx5GN",
  "key20": "64CrKvctBNSr3f72drEQo9gRTwkrWqsS5AbBsY7g2Dq9dyzAVwJhAguQ4KP29ctkTEa8tnjxTQYWbDHBdei84cxE",
  "key21": "3g4YxFJRYFWenDStoPvfS2UVjcoiVC5gm8A4WfvjhmeHMGD7XX39LsB8MizAdvwWbGB1a8Duy6nDzH15D4BesZib",
  "key22": "3Wpr9miUx7oUxfngnve9kb8HrBE1XwfTfRoxs8MEDTmpFxHjDVQadc6nLLwgQz8XuybSHpzoSHc84FRhuimsqzQG",
  "key23": "5M41wpVrZvff5GUazADfQrL8Q7sKuXfY4tvsrvZzEFTAUnXjsCAfbfsYBNK2aB2Xf6Q237EHefYgMh3kZXN6w9Bo",
  "key24": "J2Nfz4bUKxSDwYyyntkDUZu91pAaS9boS9oJGvpnBtPZSD3ubxTxsVAVfNV5W9Duej3RUEUvDYNCwD7nVxA5Npd",
  "key25": "3KNJUzzsRPBpCzoj3nAUCk5X2pQFYgUpiyQvPQUaP7N6LBBbUqYCCRWh18mnQxGe5yVwSRr8uDyC6GrzM7HAVxvX",
  "key26": "367ou53ZwNG8bMEyP2ztqE3jFJ7bhA81fzp1mDyNqtMrcEuVScWFnEdoB8QHHM2bViT4Uzh4cHEcbrieyVrBdjdQ",
  "key27": "3FXzCYP981L8tdq8qXAG1wDESc9vPJcT3HXML9N3dvCMYRVuXZz3iy9X788inauYfhuMz5z8B2xrAW1EbdcHJof7",
  "key28": "5MQNMwFwfY7JW58oNRHhBFhYjPRHsZKZnk3Zh97ttSi8LyUURMRhpmd6fJikY2gudyK8co2Xv3FGTYHkKjK6RKmV",
  "key29": "3eN9akUrh1XKECUsedDPfBAw25DXUC7s4a5kKdnzxkGLrsWgMg1o1Fy1p9BB8GJ5nVvZGQt2kLKhynbEHmZSsKiE",
  "key30": "RzZLhJ9Xgv6gMkwHCoFUtFrFcCPpL1P7x92D35bdKs4PGjZRJBVvC97d4Bui72gaAJPwQvGd9rNRZNP6t7rUCEP",
  "key31": "D3efEVhgVARCWM3adbJTGRFDFc3J1Ppqe5VGfjF9jFihojJpMFVKCT4CG5Kh8XXQVe2YGsKUtnJjq3Zjt7WWWoo",
  "key32": "3bMLaFyyvzY5U3b5yf4wDVJDQNgn8BfswjUK1V51CF363EJsQWr3KiHq7ZMnozrzyBZLxBe277xvgKbU3HjKWxVd",
  "key33": "3PPJyNSbNgSYH3tb9NfRtzzBxPv1LMgosAfTzcrDzPq4qtD6NoqqrHDwXkK7YPqdcxi5huMRPfiyGPnsQudjuREN",
  "key34": "5zGLxM17Fsf2BacBExGxFCsbf9cPQ7JJS1pCxPFaaazeJ6FVwnjo6LvgCVCQGDKCepCc33BtaAxxnr1YeACD96DD",
  "key35": "2mSqDfEn1sLEA9aasfUE5UH9dAuDWeN1QNKD7kyTiCqXnRU51qPYJa5SEbuogwK76Kzco3awBcPk9Sv2Svkmjswt",
  "key36": "3sHz8q75sr5HkL5TSe4iFmpmFWDSWZtnUexjcYnPNVqqUAJoogdRiA61QUyNzUQP9QvQouz2wkEhQ9p6hTTnBabZ",
  "key37": "2NXwtQp7w3XuuvZRFF8NNGRKHw3FY71G9WJuFSXSYLDERJYYcB3gQQgQGbKX3RKekJHpD9Dx1MgstrNb2ps3qTek",
  "key38": "5WEHxFSJS8xpRRdhCmsaG9PP1dtLWBMuhzvd8J3c8aXoR2VV5B1intjPbGGKLXQbSqxzTwx9rz5s4FG4RnzWq7oK",
  "key39": "4huSNvbaT4MuSEMPLsVa6uoAKzvCFZszBYWUJhsHBrdCdrHTFT6Knt91eL1o3TLvChP285CpwC7gXKyaXJBUo1bU",
  "key40": "3UmHrsVAMBktansevUVHhAi3eRcDkDLERfRpCNnWaqJgrbkaBcK5SSscMMo4mTAnk1Ph4nfyqEWwhAcXp3iK45fp",
  "key41": "4kX1URWsZxWqyG85EpaABDJ1vT68YNvAjcUdudG5JLpCgVdzrxqNdRq2nrBrmaQvPDmPgdnnUYo8KPDHKmpvEoj7",
  "key42": "3qtzYLNx5HF1ZFsHoGdjYGhD6MhBRWdSVsU9Y5U1be6zpssdj3n3PpYvc2GcY5ieev3BxfEuDQaMMJaTT7jda11J",
  "key43": "577oEwRTzgjTPckzPkvNeUuVivtHwF5r3mPC1NUurZWgU8UvHLh9H6bYmvxGXJN76KW7dFhZEEszWcd35YK4M915",
  "key44": "4e88f5ikq7KkwQo8agNFvEULrhF87hsE1nokuXGMFXyp21n1b9RYXcpxgGkXQDeiMPYyRZFRNJi9ALPFEmFATP9J",
  "key45": "V9iautLSF4DZAV1WAmeU5Vu9wu8i26JAQpYdRzdCyCN3aJ75WBCyw5SvHYxfint9g3GE4Z3hfbQe1jd16cxg5Bz"
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
