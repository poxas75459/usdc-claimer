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
    "4QXFeiGEf4u62LUojdRCrAnxJ1ihSDbvztJcdmp1csauvd1qA2zj3ZqXaJHdnLEM1J3qDCouJd7YqdcTgvdhznbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cnFw9QwfzeDGinZwcSYz4zoEyvr7M5yUQ1Vqq8nMYycbiU6rhmtJ6tckrxCDE2HQoHgT5NAQkhDustub5snCqa",
  "key1": "4KXPHcdiVNsPSvhfwErhcm4yBgv1bYtXj4Kzw4vbu6vx1CYUjeqPasm1jqFERZnrzcxs4QHD5nS9UB6KrJJVuaX4",
  "key2": "33hVJWWDWVm9F8GdRXHmXvyrM2tT4UmyEisYA1Z8bxJs8tUq8R1YSDBoMUbM2D9XgEyR7uxGkYDtELLuVxQ6vWk6",
  "key3": "5qckKfQcF4b2AmSRGXghTK4zDiPySdWLzEKpHTKMWUCFpz2gpVkoyKzV45DSWT6YuinzNdK6H62prmDG4ePPyLJh",
  "key4": "gb2Az9H7yVdRobHPHL1ej7y1iBvDLmaqmcRj7nXjFAu7qaJKzNp2MjEnEm1CbiicVKm7M6XKSxyK3Fypuw7R8om",
  "key5": "5vLzxf9wR4LPKHHLwbRCYywz6Mp9VVa9QxQ6Z76AoaHg3GrRS7wgSqvYaKzvfr4bPBkawUyWwT3W8vqt4GZq3PsT",
  "key6": "RPLzsR2ws5NWV84ruDtYoADC537EhXykJn8mbkvA2GXF7d6qUtHQn9z3PaJJVqqtmUvvbNifJ4CM7dVgsS3owhZ",
  "key7": "25xx5FWJcpWpLrNbuKjCMue9JEdjf5W1hWWnnomQo1cMJqYxUWTKd1CA23UGNthjDo2tLE22HGEfNBAszzKiQSKy",
  "key8": "3fwpSTyqqKJHNNnGk1TtYSdEK2NrsyoyBA5qhaS8PKzTXBj6XrKvhNtQwxCM3mzJppsbGjwiTS8L97VHsCUNyJtp",
  "key9": "3DqdXT161pWXsjgur5tK34DigTD2rtojBKgQfEun5PuFbXRdkvMkVDrLCrSxkwCtEPDqduXpVeZwA1ev1zbjr9D4",
  "key10": "4jNsicmRm8BhUY7oYeCwVDRHAXQF1TdcsCp7kN7vGfq7Zfg1DBTHE635UicXo92fBZRLsim5dLQ26sng9nWGM4vt",
  "key11": "5gvQv69D6qhLEKMFVKdnXpu1KRywTWrCkjKc8ogqKLwo8JQXDNyksGbKTk3u6U4iUD71u1hALhKAx2yoaoh7uwNb",
  "key12": "4Dtio2sTYkd2nWK1G2w4GjBspA2HsHdEi9B7nHqYnkGpYgoXLDd6o542FPdx2hwXjbfWboQQhhmNSBSfB4x2nfSy",
  "key13": "2mSiawdo2qvKLyt4yQe4Q1B3XtDKPt68w69wnBTnPzYcSbGzUDT9RwRYXwKzkmQrSaRZwnaC2t7XC1q2oo44XM51",
  "key14": "Cp1xgtvwVCpebQ1s64xJFtLBs7LeVpgBED9MP94XzHC6HCiAN2s1gBCrFLnEKZbrPLa6vNUJSLPz8jpR7Zu3dsP",
  "key15": "2McjTXE3Ft8nq6VFrZfL5Dj35hb3kp4F4PoPR5LvZ5qpvEPATf3PMkp52avvCZ9UCbk9UBJgYuUR3SQynVF8y73H",
  "key16": "2AobCN2SrsC5auF24m6WNiH1T5PwKo17REVQ2wDdBdd314hi22cspf41h7t9vkHi5MKWxvdXn4AFVjYcFQZuueuQ",
  "key17": "4kcUDkfDcqcB6arjqjyzyoev2ZFjDjB7Q3jBN5DEYPgEBr34e1cA7gd1JYatKuunHMcXWgaGHnzs5djAuGq5DjRZ",
  "key18": "39KpoazJnemF3Fv6PZnx2LAUgQF8CYWFEWej7VYsfBcSVdNvppRR3rD73ogrgQ74EMQGHAsov6qyQduykgw6ZoWJ",
  "key19": "2QbzYMYsXugAVnAmC24Z4wg2PommBFEuZ3m7iSqjMQohDhkxh3xQLZwFzzYTcDwMvq1e7PBbUwbTYnukwRrk5o8F",
  "key20": "3cPkBYnCSGmCWh7Vh8tmwQp98JdSvnM7q4JgT2Db5VH8fHmVdu2FXpgNwdRGp4WRnjPstz45c9GhTR4W4DDpqVGg",
  "key21": "2qZcvwfStcHcDAyvvHCMAsyStbe3YtfVbTgZTeyqVhitR61c6yCLaYVX6ApRCuEFDqHmzUFovzz349R7WhcKGkuh",
  "key22": "4TA4tmUT7jz8o3U2iMDMRwSJEe7fc6sSBZQfiTc4YuaFwrZw6sSCLoyExz7fg5hS8xXNmibmfHxd8txibNaBMmdN",
  "key23": "21w7TiFu3Gj9wMRuxPtChZPau9NGFAp4Kjdj4rH75ec8ziuDHewgn9v7wwfPLwkihLTAcrjwY3YdxZioe7HdMVyt",
  "key24": "558SWN98CeWGhjZnGskiwNxaJqL6ics7SfE5BsSjXsH8DrtgDMHfyJH1ZN2UWAcTh3qiwCbp5M5S95mr8XNFDhBi",
  "key25": "5ymTwsKESgSmyMVWc87KZZMeGMD16LuYQgpdHcZey8oXcpry2D1sfqFj5fp3Y7xueuKHXWXePeHAHuKxrbHTWBQr"
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
