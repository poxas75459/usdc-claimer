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
    "56BTWQvZKrTZziJYRqo2SMqh3zU9wxkX7gUG4EpaDdPKxf7gzrb6GbetzuMtMU5LMxkyzS4uVs8DM17HJgD8bGV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDFYJ2uxWvMkqyTzHLktgUYm4UPga59uCBhcs87PLX8RDuNtB9DLYPxkdE4vWQxAQQWVtyRd2KUY6HkqUCoLSn5",
  "key1": "3c8WFPKRJtQgV9fnDEFK79ShHrttRAxPdL54AD3eSporQpEqrb7aDA8vxWT9YZtaek8zGC9WJzSWG4FbrQ2DcLER",
  "key2": "4RSxQD8ph64TBq51QFdGR4hYLUevufgHEWvhyYb3YJJhMtg5cGH3QCSVyJT9yHjDgjXLqJsqEzBDRoPMredMYfdC",
  "key3": "4uCiy2JL8eeBFeYt3vzcUAiAinB3tExSRojqUGvoKvAbnthwqzN24gxRgvUCFG7ymmHL8Aad7oAbePVmbcR3rmQk",
  "key4": "4LJoJTcg14g7bUNBzZjNtxyxPuFQrvNEnf37epi2Wr5qZu2sq8pQf4ShYxePJDYNTJ3jAGfuzPA756H2XRcCMLhH",
  "key5": "5N1GGPwUgAyVou5LNB83biqjpubNqvdH9xAxtM53p98fZmogWddCRHpgoLZ4yfX9QH9KHaPzoFoWy3pvUFLEXhZu",
  "key6": "4pAf4PMr5Kd66NHp3SRhtRAhzEogjx9CjMdXQ7iYDDQ7Uz5ULe3rUHKHosUk5CknGJVZPF1Fj8aKHW59TJakoMUv",
  "key7": "25kLFiET2n3mp63Hcc4bz3qN2XGNmM2kD1jnY4k35vttKxWBu6N1bbxpQ8ECPtvEwGgHbj8f5S9TEJEG2ae3h21X",
  "key8": "3g3dnkmVJMkRbKCjbyCiWDptYHvjukDz7K73Um81VPjLRiv5TQAsCkBrp8BcGAJwCZ64C7KAxY89tr7cTrbNgKbo",
  "key9": "2AVVnBf5vWYkzBZU7m4TXKMfNHmnkVyeXrx1GNSws9LPy8ji8PzLZCjtG9Fb47ZuD11vwLpQzQHuqxjj3DhSBT8a",
  "key10": "5bVqDBbm4eA4skYLjSF5Ush6aKHvgnK2S8udtguXDk6nzrrWMrat7qTk7YbqYbs8KtuN6kaXTZKyZcMvj1nAQiSB",
  "key11": "3nkGA21aT4towf3ETYYkZHSDzG3BXNrH8Qsy51FcmuSsaf3YEXQwgp2LPDX4jzV4ZQqrfSvas1WmJyheuTCjwCHj",
  "key12": "23TR2mG6mxoyPtwNuf729poRyoMD6SY7Fw97Mk3a83jMN6hiJ7jc96x8QXvafjV47g5JKJ8EVJuJ5ZJPrYSQEcrY",
  "key13": "5yMPmjeq6CE9ZHNTYj2mu5ZMrLUG24x719Z1x25aRM2uCC2DLYUPP92hwXwetso1onJNrhJpZZJMpYMuBRYw5LgL",
  "key14": "3cVoVNc9tQXS76RPsS4tLVmZDpxqPqAwpyAe7qhZnrYLXNt8YJn5XKWH5ucsbGNDCQ8qPKN4vJoubwZYZt1DKpm9",
  "key15": "H19edjvC8R75CrmsVjZNcJSBPT1rvoXHjXB33XUsyk31nAdkNozHr6MXk95yryjdxsz2P6rH2MswzRbAXNeU6hM",
  "key16": "6tM7euuRgTJry6CT56NHKhyJimSNKi5tdPzZNH1rRRPmbKTgJ9PYcd9Rz7DYNhF3z6WVsp2qPwFeDAFTJPEHNmU",
  "key17": "5mYKpERveoLahJF4JKM5Argm7n5viitP31Aw76fvb6wHRHfR1ngKeFAqYmWc3rG5177tqtzKUqpw2aqv5x4Bv3uY",
  "key18": "2sEnQ6iyrwLGFgEKEK7dNUbAXVaZbdbvhX1ER879tB6RgLbXavPYkj8UVMaQLmDbv1FK534bEwiZ4t1c87z4rV9t",
  "key19": "5EEwC1Z21ewoig6a8KegUxnTPN94BMrVkQKw2NuoD4qiE3j2EXQBrioMLuXDpWZRj5NWBbYbB4zS7WncqfSRGafQ",
  "key20": "4AdxNDu8J89EGM5eA1ZsX1fA9zGeAATkXYmfXWHZ6GSAp4AT5D3qShEHZUp675a6gzUTWV7NhDdXaFoNmRmbPeMp",
  "key21": "2xKLroRCS8vmeQ2pHLrotAjexQnNjmN2dvhrZAFSCbAKaGf5Uwt1EjnMKwe2ie8TxJhki1Z5X5cPgu1pVMSYYpau",
  "key22": "5pR5xq4k4wfiYxpJ7fqCSQg9EAmGrkzeSmgrtQucqWFcPR83gb9XLG9fhcMZqoktrUMuaaoRMEhHC1ur7jGvDaGD",
  "key23": "3pHvbbG1LARvWnNnH3kqXMZZkMctP3ScBpxRQfL24pUMCoz42WFavbwSFzcqiF24rwXzWhg3VtNMGgTtHTxYPo5M",
  "key24": "2PX8k5q5SK9AiaGDqRxkcwnZWn2KbDyVVeZWk8rcUfaE53dQssaHqYdXDjHhP2PzGPJaHcAikH64e6AcQTnEbfuF",
  "key25": "4roLjnRSYZh3FvYva259sQRP8wpCAALgRyqcqrGNTFZ7nFbX1TzVQbDHmTN5UMvanQHppUxJ972Dn5HqK6A43Y4x",
  "key26": "AaZYgwQZfdMArJyU9hnoDAf7aGsqGKBJuTifKQ7Up9pMfTULn68A8zCVRco3yQWLYxm2PvxzfzsJLMM2HqZnrB9",
  "key27": "5oaQXjkQQRPaLboHBbxkw5eAi9EpcwKUNuundonKBfJhj1uMYVYJUijfiaZA2mw6EwWwFMgrmYfMJsoJwMkpA8zY",
  "key28": "44JBiWKavParw4tHE1mBKCBQ2fskUqNEhYUqhSKg3vtYvd8ud3s1WVKSPCSVxC8mQtXiAihyneXQJkLjHXanxiJo"
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
