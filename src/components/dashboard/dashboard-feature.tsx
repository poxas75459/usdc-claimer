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
    "3aT7QCaYyvFSjH8hnSzcxWmST1MWUexxUbuCVNmY1qsWjTGhFMDebexdD4hvvieztA51k6grsNT9bEk7BLjmTupe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qonDZmwKpjRjdbkjYdkDM8V48fYqnzJGmJiPHjFyhFzFuMbHUMLt9Mm67zuezshZsks2eo7xosbo5nThtwbFRqd",
  "key1": "3ict44v8TH6FGrh6BWUg1SUX8dxejeacC8EkrR9yKXXRm2CggsQwySi9Ji6KKzvNSJCPj7Yb5DysKpZXQvFyoyeh",
  "key2": "2vta7tka2BHGVMsspgqoWB6jtbFafm8hkyCSpLQ92n2xvPbktFXoe4H24mejpn3iM6t6JxJNPAqhG58RpkCgpNse",
  "key3": "8zCmtr3G5LYU3WoJFcraxANqL4ZuBkArpfnSJnorwvGr6X5Wg6ejPxz7hxDkbJjEwoZKAD8gNXXJe1dFvh2HrQt",
  "key4": "3XmX8MU4sb4EoNM5rgzEzeTFubhymt1bFfxwimXFE4e5VDKwM7xKBXr2FhPPHZcmBEqRG36gyfBSiCTth5NUpkqc",
  "key5": "pGrx9n4gBUS2ZrfmdXXy2gogtyFrwkoxRzKoLzehoaj5bnyPHZpwXjgcorbcCJdNQEu3GSNuvf2uGyzxU6ub2e8",
  "key6": "3R5TWGJJkcX8NrmL4j5nYqtPNQ1TZa63oowyWH4HzrMWgUSEx2p7atFmmLUZ5WtLLVLsMejJgAfvSUkPNMp4sEpn",
  "key7": "vsY5hjfHSGsyeHXc7X1PMSABt1KJQAvXyi2yiucUDvgE5xq5pGh6izjQBqcyYPnfgxMyfNa3uw9f58EjW3iR8Pv",
  "key8": "4DBsHp9HGGCs1SwN4xMNhow75YMVU2bxHaxsBZxeysALNtGbmcXEMFUKyEmhtvxhs8KgWFa6BaELPqJcMy3iVKaM",
  "key9": "Bz9nmY6TbDVXS2htLJX7FqCSrfQ4KJLsMuVGKD6ii27B7wYaWQAcUwKCXfmhhhzdsF8AeeE32cbC4zSYmxJhL4o",
  "key10": "36G28UR2iEz6C7PnPwKJu7xceDGnnhM8f3tcJyUz5cVR9TEYRpfPWoKT9Tec9Wac6bgwqxX2TSz8pJPzN7WKj9uq",
  "key11": "5zxmPwtU2TzmAnN4qi8wktaueGADkdiTG6YArHGwry8pGTZNEkcREYJXH2EPjKGFnZevT4PXdS92uNayM36P32Sp",
  "key12": "4ccNFLCBPQzZdzbE2bjcrQpWwQPZqSqRqYwr8AonwXtV8z9CXmz9oXtwewMQ2KtZPAewRfVYu4wyKeqG1qdH4Fcx",
  "key13": "5uyf3CEe4Gz77ioAARYHqsLGxD6ub5cWv9ixHzGRDo2zmnEy67yt8SRpHwvLxbjuFFxJdFa4gwzYWvTohRf4z8U",
  "key14": "5UwPMgBohPCxSokR8Tzy2w9KaJ6nemQbucyACEdV7MHnpR1SDiwcN33bEc7MyKHw5qcdHo5RShSoLsJpWck2QYot",
  "key15": "2VNVazi9xcsRnFAqfyVofe6kWfSGgDVzNJQ87WJQKWXCn5r9aNA2XeA2Mh9SJAa8usuSYcc6BSejBaHMW1B9sE9D",
  "key16": "4AUJoU7QxTdzJMttebyJRuPbei7FxpMu1UvCrG2GL1nSFAkLhucMGxx2XZHKne85ynZ4hULrrdUgUHXT3n6hn9ht",
  "key17": "3jLe7uANSVQBsDBARP9q9ypf1M5G7D7whccot4nHiiqcyDzHButp7NQT5QmXXMr6LdEqzRdWfPMM71S8u8iqYCyf",
  "key18": "3NEAYDc4JXyn7NeyhGodJrEfTrjcC5wHdu6p9WgaRkoW3v7dd7GJKHTkLfULomo3hA5fiPmQa5XNFh9pzmnGB3vS",
  "key19": "4EnMG8DUcyKQc5rGyuiqkAxTzXBG7akV3VyUt9dSHqW49oGW52xftgdfyu4z2QipCQfQSM8PS5ZWaG7ipRyxAmZS",
  "key20": "5stktrAJW9iRkHVtygcTqcyrNTzfKXJpJqQLk6Ckw5MqBGmwpjH9c8WNkxeQfzapThuBq3sMBXXb9bFNsnDwT6p7",
  "key21": "1pfPy2J3yMPXt2LmuzNR4bHkbgexjASaPCMFCK1rAvRfHqEk83iwqw7DjWkTfBGrjrF8MmTuvB8tPFhJCoB4oVH",
  "key22": "2Jx9Nqx7xscAR1vWxnTRfAF3YznTYoprmTaMzV3kZn95pkJsX8JbeoQgBh335VxsTyYVZumzYhhAF2H4fGV6WZy4",
  "key23": "22oW11BbE6o4NLk54AMjc5dwXLWbQdVAK9aKCdzKa3Ly5dgmjHEshh7x1BrTUZfKtZ27yfBxKsMaMGcxqeUZEymT",
  "key24": "YhZ15n5NBmrwc264bmsPjhUND7kunSATPrTxJ3NoatDDqKAPVjejJDz738paaTXPGqkAyZTRxutnJD6vh2ToRsx"
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
