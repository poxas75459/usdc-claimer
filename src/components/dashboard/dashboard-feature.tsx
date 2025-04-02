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
    "2HkpA7Z2ZjjtEm2XY9Nmj17wJYtGkzT78eFPzcjsXWzfbZLRcgw94G1g2CYgX3buA4qCMSNpdUJsHpwZq2q988uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6bxq7PEiikUAHzu7bpJcStPsnbnZQftoGa1as5ADZUtbch2LcT2cz2NkSskuW6bxGd5N5bzjbAGkK7dKMtYdsS",
  "key1": "5jP1T8jTrsKhN55Ftv1s9rz3rC3kEiwMVGTDFCK46d9r1zbdj16VWEZcDnxSjavDWJLfB3rVG6FpAB5hcE6g2SiT",
  "key2": "5KyX4qbSzL9D43CFq3A24aeUqVci8P5qAwYdR54rH98NA2E13ZeU9Xcg74aXjCcJvfRQN8auP7jtpjtsHS8LBJS4",
  "key3": "2MpyVC71N9PCdyDcbYVDkKL71hDu1EUfXTsgZLsoXAbyzkj9RY1uG9C1f4cpob9freKQsaQxFoyFefny75BHLsQY",
  "key4": "3Rdj1edyHC5Vb4RduLad5QnsCcU3vhoj56pK48kcSgisNaqGHmFWoPe7NPosb4uNqufZFdMqo93ukUGknFyryPaq",
  "key5": "5s1CmnyuAWoSpvEskJgmwCiyJZYagw1HMpj4dV9sjcQNAbxZg8XjAtrgt8FuxwS8dfv52oKmUHEuYhYRhWjzA8sC",
  "key6": "vQUe4949sSEaDetDY8GNoJUDSAWyPGkWYJbJ9GxPQrxu5VP5WP2GwRMxJHFu3sH4g3fyEmuxKANsYimsAAGKdb9",
  "key7": "2rWw5x94aa5YWDJZEtKDcvmniVh1A6WgF7RM1sHafx6RbbfLbJW5JpesfwsWSzdnZ5bYgDfgcdvULyRfZnPNg9Q5",
  "key8": "onVidiRbEYVtMUjmjaZEpxthyKDDEHbxCJ7uAfLXBQ9AdVZ7Qm25SV5d17fEZXCkgKSHcMnwudXmSTZr6pfULi8",
  "key9": "2BkeFtY77s3rBCW2mbCJQxaShPfkjcW6m7yB3abpXqxcBzBNsotrF6i4fvcG17dYLbGcSoE7JEHok7P6mAFP6LtM",
  "key10": "2dEKLpZjigXGwhF5MvLFYZByW4NgREuNyRQjKauVSsHc1reMswRXB1oPZsqjRzjBY3mawFj2A1PrJeG4T1ieBsQN",
  "key11": "5v4N9tBaaMN8LXd9meANwtYVo5eisatc5wWpivWXYbmq1Zx9MauPSHVtPD7gy3uZySVsqjNPuoDfdDR3jCQLXMAC",
  "key12": "cSAroofTQLXBqv7y7TyFsQG73BRZuuZTtfE2oCoBtrWpSmMz9TUgxfNG76dnnmmsoQheUxSkepyqADLVBue2dCR",
  "key13": "mtaEu2F8T7Jei9RycSBBjamEDv2pYYspkWFaf8Pi6ubnqBkup46SfxwRowGKZmm32akGma3fvYDT9v5ZdQd9scA",
  "key14": "5Y3FrNSMAKQW5AmJASjRgecPwb1HqQaANHLXQT1qUdU7MdgRiZEQs2SeNdyGZLzAGj2MQaEahXk695C7XkxNTUML",
  "key15": "7wCWftqzDVR4CdhjzUS3umg7qaCHNiTzkEHPcB9qEPWu8px61Kw59s7xri7MQXuyYmL4nvgLhZ8KQfQJxk2XCkV",
  "key16": "5qhrjNJ274rjSV4DWkdAbiBik5UipwujRFEogMssEijmPXaFxoMTFF8KxsvZ5azUXTEq6FQ8HMVi4B7jeEZDfQtA",
  "key17": "3Wtctzt6y1MfX4qHM1qyEDvoWQ8s2LN97caYiS6BWK6MNwbf4rXYY2AvMeaZyWPSybweHwbtUXwwaSbGU2KKsvDo",
  "key18": "5cfMGQppz6ho5GLD4GFtHkA1HXwb16JBCYKk3yp9aTY7dnZYFPpKNWhQj4p16um1NjMbapPU8MGKAjxTnqtU6Gpq",
  "key19": "5WJYx37v8NzqeVStFHP7h3irN76DEFAS9bNnh7M4L4gRvvKPaxSvWcC4gLqsbJi41h6VEDDFWuWpzxrqUsBSZy3h",
  "key20": "HvZMWghdxU4rtL75JpQRwdvUKSEHzdUmQEJJwEKHk2BbK99wDzePPZVfdny3XGpB316YXpp9kgyiwnWxT5RF6Mu",
  "key21": "47NEkZVbfyn8xAQkgRM4z3LKd1oESAV6PV4sxu7w6zB5CGDYUfRKNDFjGq2z7TvUqf7ayaCtd5Awb5aYwfE2bDmj",
  "key22": "5f5gUCfEaVrLeU2JPtkMNzNje3FchWUcxhA24tRMXSm3UpZ4AtZZpJHtuPYmvd5r3qdgi3QVA5qb7YntKTwANh42",
  "key23": "2iqVjFYSeoCM3oKJ4fCSe9y4DhAeiUR827sKXaHGJUJmw6nZNDpj95xBWVkMPHZtm734BGrkKj5nzanbDkcFKRGA",
  "key24": "3JwmXJeabFVZAGj7tiC96PwB9mUeEF5T3zTHQYNJCfVaRoXbh4qSL89GZ36wUea88tdpoBBZ5f9oTV9hjwgcjqor"
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
