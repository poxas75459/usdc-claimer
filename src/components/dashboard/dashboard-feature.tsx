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
    "5vWuEqVwHuESVeKqpzxvGynsFr3Aash9HnonWBjWg242zVQfWcwuCfYUi9ip6233y3ib8P8jLmUCaCjaqAPqpJn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFF1oRPbDfEas8LeqkYCwzYKmQkcPvvNUtRRxXjWpzVFzMgKhYhteoKqaG66Taw1rrTyj6feN4XmyEn3BKQB94L",
  "key1": "5WduztNvXmUnwUUqe6SaXkE4t9vZQjyoU7B3gURhiSd9AfoB9KPfUgxYtegxDCeyyEpGYFGU9r5auRmD5YatV8M1",
  "key2": "55Z6AsK6beEpJriDXDUNnTBrXveWjLoatB3E9oeccuSMNPWq3Jz59CmTHDsAPh7vd5ecM535aaRUo7839tcLBt2U",
  "key3": "2M99K4qN2ocjkJJvWiCp628YWZJgYh6KFw5NRC9Q4NckRZAWpDB1aHB2xf1EwnWMJCKTQp2L6XnJ7FhgUyUnWvB4",
  "key4": "2hcu56mUX9AMhZep2na9wkR7VS7ogRWdsYzEssUpkj8Z3YqbJN15FDJS49EuvVhfyk3zkThdq3FUgRnTv7wLp5WT",
  "key5": "5tLfhuLr3pRUuxc9gpNMWifqvbHZZW4XZtwmgQoXbrfYAKATZbXVQ78iuhSjQmKmVt9BeiJM8dKgEnu4Jf7STGC6",
  "key6": "5NnP6nA12orV5Egdrsxwoo3EeV1heau8KGyLVZtgoJRAv9ACK3j4SRLPL7XMHyY5eusJwi7a4hP7fKPDS4EfDLFT",
  "key7": "39wub6UjUzQ2oJxiYyrGMBbGztm12LYUVXKporsJpHcbovPXqqbYS1VmHs1A9etxdW8K5HMZCg6ykgykJoAK5pdC",
  "key8": "5uAKNndwudiE1sob6SDgHQTTHmrDzDYeD6jeLzKj2ymUdtLRDdMV9TKyNLRLV3NPTAEjrt1fLKVLdcZX3RQGiCNP",
  "key9": "4f6V62ueXj7Xg25MDJaB1WnVRCnhYH8oy9p6vWLRFFFBqu1haW9Eu5GhSd8SPZDAVw4pr8854yu3aHJ1MLwKom4Q",
  "key10": "43sdJ1r4agRcRfSuK3xYM19k5BKq1rgsR2BNEbxuNiih9aWmL9D72y5akWjX64xQ1Zi5XgzBoXNv32DCx6kBbWL9",
  "key11": "4nYi1WseNYPWBRKHcTqsXbKs6iCkom9fhB7E8Vu2tMAzc3fxMQFiUJtXgbcDpwnLfwDgjBAZCYUMafHjhdCZbL6d",
  "key12": "4TdtksYeZqKbFs93gTvQJQD9LhEZ2cuUo639GTWuH1qpm3HLxheriSeL3J5wm2jiKfhkEAyHSHvmd7kwzqUWhR8X",
  "key13": "4Z22G1i7XKLb1P2FeMrtQ6uH4jLzsyBEKDMsg7qpeL59Mkw22ynKQRvexU4LhfBJwBFvS39psTKA7X1ZQcDABMsa",
  "key14": "45g2FbekNQ5HDgBwjZSZpSxPPGujzseepy8jCW9X4Su1JRWvpagiMbp77mXzW2jMY9tA4iN9CjCPrwBgCPEy6zK2",
  "key15": "4xCFmmXRc75jGqaoWVKRDqRwmArU9R3Kva1CF5x5pYZij2r6h18DWxqV4JWEaChPbEBHfX8Lc8BRFwFB9V1ksbp6",
  "key16": "5dWrGrVrkPbBdCgLmLheQDSsuiPpc1F98taeFBNc7grZkAQBgDvGzPD9PQMaNMLnARmfnEPSiK9W6ELpDFZAq6oT",
  "key17": "5DHpV1MoXhSJckxCkRA9qspV5DPFkvV2zf7Juj25vYLuH4RVP6CGqyShcFTWqECstCTy3uc723RMNbwyHrx9rmVa",
  "key18": "5WZKYZNczGwA4vCazf2ufEpdaK8M7pu4NoQ9HbHzY4W1vNWKJ2mVAdwzBUYBthYC1GBK6WJsQh2niZ9EtV4vUBDK",
  "key19": "5gFMsekWGehQ1m2qriCdfiaFMpBkk57NhzyBCTwXAxa7f51cDZp1mQjJb88vuKt4CodP17HVfy1uNkgjuJxC6ofA",
  "key20": "35ckQ9FksBeKnEeLZxVcTNfy5sEyuQ3StD5GpeEqMHowqXgwR2ndSUTPz1WngZrPVJS8vSvp7frDizMZpfBsgWDg",
  "key21": "3qWqrogAzkRK4EJrxqJnuUQ6TGRST5omN8awTgGaMFvSv3jEo3ConC8YxE7ipaRwfhxvCgHzAajfadxAUC7DVxEN",
  "key22": "3tKd4B8JLj2q9TnzHKBMC259W7fwqKMpFSrArWKM7R6cg6DJfG2shJWG6JaYdkUfMBamQWLenyfeed9rPRVP3vpi",
  "key23": "3sC5AaZXgGGayKqjCVyNy8TuH7CiFxS9M4VNa3AR4MC2Dqu1cjniaerU7FN2zECW4Exn5LqJn5EpU8FtDwiY8ZZ1",
  "key24": "59AecxodhfQmBwVuNviSxwjgCok5JZaU5dSeKBYjMSpbast8fYVXhvZBHsMDhuqujKxwxxW1KJ8HC7GMKrr28hBb",
  "key25": "EHWuwmvBjVwTtRE2UDz2nQCpq2JDXYgw1K4QgE3LKYh2HCscKYycGcs5JsQJTp5J54P6AAPz5HaJQ5aE6PVxVUG"
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
