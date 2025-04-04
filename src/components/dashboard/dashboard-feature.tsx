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
    "5Siko6K1iJfpPyxhAKxEcmAV4ng6nfBxVqHCfZhoKPTbKrGpV9THsfYzPZDKP7XLXWWfP8bqC16RJhKXWo1nyfEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uymra5M8MzX64oZPmDauZ7YaEssv6ssAYDDGdLHX2g95eoerVY1KDHQrzHc3KUHm8916GQDzDKAWxCng64gBt2J",
  "key1": "33cf6S4yXquN1FPw9s6EsXikjNqYmpibutHBNffRJWCyckDwMBHU4pEsfEyQwBhdpNEg5r8bm9hU4zYXUTLV1rdp",
  "key2": "CsT58Q2ERwV6VeRJyBGGR7zMBBonPxXZjJ9auyaTqS6d9QQAib1FdDNu5BtsmadErhd9n11aopFaDW3xSdvrs61",
  "key3": "5Y5gvxhu99tYjHZB7Vpiyt5CAUC3xHEVZoAJ4Qa11YBMkWvZ5y5cxQSJYbgM1voViDNkD36pwJRJUBVcpdZt1ihQ",
  "key4": "4fPjD8LdRFxNrhdKKATLDjB9agtsuSFRi3BSRmQYU1eqKbDQ8KMkjbUHAdz99njyoybJ9WLHhCD1ZAwQVQqDQ9P1",
  "key5": "3TZGzAr1JYzAHtYENYg1LM94FHPzT1j5zce8L4MrJ41mUpnP1Kn1ZgEPu5T9xQcH2AjEAroT3M4s1GjBK44r2dt4",
  "key6": "hPJWTBWdrtotrnjNaFTgzcQwywi74ToaC1FhbJqJqLbVUELmvbhJtbebQA1MNm68ZzjNio2QdxuGL5ZSEUtgheZ",
  "key7": "2dBAB7X6qcZigk3mpFyXzYhvHSoVtHgdPRxVTmB7BXQGwHLpDyd8EjrjvPPzBPpvTf6DhG5gayMtVKfLFgKDEp8C",
  "key8": "29pyLkTYq1jmM5syUUJKSkGb4GkP8WGAma9uTuKYbeLXYNaC4k48Dziu9pvDouNiteqcVUD1FTpR5UZRWU1iRieK",
  "key9": "4UsVjDLT3V5t8ec2htUr6QjxdoTNCC1fd3rcEAjaQQrcg2mDsvBi82AZmym6yzM18CSsyBtaKiRbQwd7Yg4jcZhu",
  "key10": "AbCUKtfBH2Yty37JHztpTxvMfEfM7X992eNpsE8DzTEc63M85DF764AmhRxGV52DUyUTWZ4UzkMgttYR4ojTGGA",
  "key11": "3hVqUdF8jEACsdNsbKzcQ3RzCs41XRbzA2S8NF5qEJ5KX9JXD9Ct929vUKWiPNw4S5E8eYpsafqtcgr5YmxG9snw",
  "key12": "4ppbViHQLudLDWoWhwPk6LEHBCNCYoy9rvXoZEKPFgDCQyyUhuaotBjAezkb6jbPJLiHJ2jSBSQfW1SwVcAsZpLY",
  "key13": "5gcL8mSQqeky3TH66iRPxKAymqjYKMzqA1tndXVLJ5BNGiks3XmJqbEUS7KJGcMNt4Rg3M4ipFfLHLyyoaiGop8R",
  "key14": "3jAcS3LXC6RdC5jFwU4G7stcHvWKKG3v576tz8ob81WQ9SKUA3yygp3W2ScJyxVfsZcEnfomRWuuUbvHMfttxmr7",
  "key15": "PMz644AoL9cYyW8GCxv2RmoiepB91iJb3jRFyBvDCvK3FvsDcq2BcXiLJdHdTguDdfbSpj56Qy96Tar56ZVB6DV",
  "key16": "5azi6rNvtZn9piCwYeJ3mtM9ZXsK6Mj1BycWuLriCzy8xKVP9YypaU1NzFiZtJn8HTQsAn9TUecNMLnGQMLaevTV",
  "key17": "VWkhbW4XXdLWe8cYCuh5zyuynEueZ3BgNuVYjiK1jchz313v1u9BQ7zrbUPcJkdRrScDbGVikwaZQhVzz2hi7Uw",
  "key18": "ZKmpSpMWq6a2Spk97MVdUTV9NsvRKBhJ51x7wGxWSDX7ACmirxPGaYKxWFRQrHGzrz5ifei1QakcupjnqBfhRP1",
  "key19": "3uZgahB9b7FW8PXMsGvDNCeDccRjSPqDYsf9HJDB7Um6teJ8vXEdZCeQKtkjvW4mghspKMwZLwAHxeBaaQC2VPWr",
  "key20": "2PPAiLCN3muKRehoLm1BKoW9vLNKN1gf5SeUJgWWmPa8hr4XHPKkiJmWir8CfFps9t3G4A9tceKAf8ix4mEn9tNZ",
  "key21": "2v6jdaW8QS9QCPgVMGe2M6D4kKxqxrCREAHGAT4pvZFqQceBL4cHho55GYBWGxy8GQ2pcCQzvMNZmjWawmkUHiDS",
  "key22": "fJmRgFhTcuDy2m25ucBxF7AKH1bLCYxredTXKxshEfhFprhoYNgHie3bf5B4WVpYpTUfMCq6wzubDT1QwPnf3GV",
  "key23": "4SXzZcXovRrwFH2uuhKFhpjAJ8GgfqZffGrRoDD6RLk2yNaQpFwtMNxJdyqYrCh3ER1aPL71Vz5BkwjikQ89VhLi",
  "key24": "2Z8bDvZFTB2974zqsonCDbd3fNLDMGTJxRVzhYQ4k2EJNNW7jS8vwf3RKVaqVrZqhFjZr3DjG6B1aCoYHPMuXjYJ",
  "key25": "5QhUqyiNFZCv7ivWvJjwwc8FfqomVbBLpR2HqtXCcvQ5fUJxi64fUsYCpCrkwPKRHDw3op7c3sGCoixEFQo3Amgn",
  "key26": "jRLsPe4kmcumAoaKFpcKKX9Uyvz8PLhay6KqEWHHX3TF7tveWncDWwkjE2xhksf3n9pqhRmCbL8e16FGY8ZKyL1",
  "key27": "2fxEKJUbr5rCMe436D32wC6DAzEYh63jpDK3KSQKQKEb2PxHrZC7r8qWhHLjV8tquumkXJMDFqMKDm3kUifpph7H",
  "key28": "4zh1i6e4H6Dwb9ZJFACqcgH4vB6KhkgCqn4wDrukdqdt3QbjLrrtEQjWgqhEDdY7ixq9uxsni4swQZxD8WKdeSy4",
  "key29": "4zwGtMMbpzN984zDgfedPRbVjEw7otgk9cGbNUKQqyn2hfoTY1EvTvxFAi2Nkh2wp1rhJK3xh7jF9kiGLvDU7GKn",
  "key30": "3HHoydme4AH6NxKwbNwoeuc8dLUSPUazsJz9ShRPG4snthMgEuqvHWKZSUR16bi5oKRUjdWpHrVvyZxkFEmGQY4h",
  "key31": "5X3ZMZ9vHnyG14rsa5UPp8hazvWNY7k2gw5nXpPE1f8nKc3skoiFQXmvMEYSqTgdygTxcfhTf8DehN4boRYPUNFo",
  "key32": "2mHgWhdZjU3RG6ADcN1GwtcpAKzk4xVhBckLcW3DSAWeg8pPxqTf7TPG99E4ujtKvMKWT9ixPphwAqxMm4gPXCUL",
  "key33": "gay3bNsiuJ4D9pBphAfkAj9o7bEXohRhqd9fCn8ekbXYiVki8ctPAbDVo2VCSH8pQtg21tLcNrphNi5QftHuw1H",
  "key34": "1vmKXuEZ9rZdDYBNsFfMgVuCfn1Apjh1hnqjQcL9P99QqUuxjvMZFGqeJLAyzKyV3Zx36PVN83gt8FJBFL5Digv",
  "key35": "4EfsPqmA3vxHFBJDs2XJDXVULwo8MhaaX4m3xEyrkfzdbyMme89Mmfq2fmyXzsmDLhHveaoJcmm7N33CVfvatwCu"
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
