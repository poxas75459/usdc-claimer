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
    "4C9xJRoS4Yqv7ZLqZfYQZ2eJmYE3HXw7TmRVNzDYiF4LbTxovmEhrndFKqAwkbxeuDZnFHvtYjs74D9gCTbdRPEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrWpCjK9F3oALTwPweyKmeVyY4bv4YShrK99bM73zaXJdQW58F6fxsBe2tvE8WZbm4GtvVTRHofpGw6r53bhD6w",
  "key1": "53wdotZSmnNrcomXsyae5BBJtzqrPBP8LNzCzZ5s7PR8k9VkVy4mU5HxUbPgVg7Df2pcKhCAGzMCcnLJxPE8Sojp",
  "key2": "4BTnxSUstq5HSY69qy93GgHJWaVHVywMpcDaHVja6bsMxu3FeXVWPSmP9rhjkZLzPTQrUbGRenqeRpZuQYxnSsp6",
  "key3": "5YMKhjdSdpiGhp2h1ixYfAjgeKVaN35u5566wSibfXF9azghDCTqVs1BY1TDFTrAvguVpMDGNgCwZez2xLTmHDbm",
  "key4": "4gdrhKEvw66KhjJDBVQyQLyxiYM6RFQJBwZu5dLKcP9knRQoxE7BSJD6yRiv3Q2PBZX9bebfwTWivFs59aUsewkk",
  "key5": "5b94fr5CMsPmQPgcx2tmbH4xU1TMzNbd9zXcndAhSgXaFybRZ58mXdhPcmZ1pdQVpE1rYtTK2emKMKJd69bextrR",
  "key6": "5vshKVNa8acHZTbVWYRTQ4BT8zeidfPCugWxNRBcsHLcADSkD3zvGUeTs5BZQim7BpnorrdmBYsKLuhN8WhtCwEy",
  "key7": "2uRKuxeC6LAh4GbcFUYHVkRWZyvvxhpGsjHWEiTXsZwURrXwK3vhRt271koQrCFVmShZBbJNLeCSPCNUmjqhnnFE",
  "key8": "3qFQzhTbTurWW51oGBgRDoFgLVDKF7Y6iZSJMoDedv3dHyqh5YkxNwAWvdm766okyQWXFCBYvc8XmdrwkuKDurXB",
  "key9": "3fvqvdDqobhAzSHCmPXX1ia1ikAfGc9T2V5zYa6QAkwErQczmSBzTuejNoYkhUVLCwmTNTjzvAsccuP3Cheqtdvk",
  "key10": "4BUFiHZu22CZMm5PhGu6UwRZXtH68zTwXT3ycbdqW45e6hsExDsHbiKkrq9KndjRu8obXc8TuR3hFaHAmU8RviAY",
  "key11": "2yYsvWy95p7uN54eefriTaBUMVhMeoBFHtuy7KdjGDTaWYcZSRjaWgkKyf9mfuExr81oggZChh1oB1Wft7WfQmUS",
  "key12": "5TxfXDdteyTkupmGJCe2pg18rcTFZzLrjnFdRJv89UPWMoJ9biNJSjFq3fyeKzDKqikAgFTP7vNnNhEEZRMuDtqW",
  "key13": "2nezKYoj91KjmsH3UeXX8csJ5UmwVuzMYkh6arozUJhehY517buo82tnjU7w29ZsTrTtxZDdLJbJCFVhuVo7UCNF",
  "key14": "4Q2hCgGBZtc2V3SRWgXtur1z7Y7cz7nGK7iKpxRv7L7XCe5y6iWr87wcoFxYS2LrRQYXSwwVspNJ6Hz9xiRXyRyx",
  "key15": "5W7SrtC8U11ADodyzjvh5QX9Mz9kTtq2Hznk79b15nS2BAwtisPuYYKpgFAacLtzxorua5U5Z2QzpPFyufbrfW9Q",
  "key16": "3YzgsJmZCsvZ8bZcqzAyNVU4TqHUf6M2V19Uyw5JUDj5JXMNYSSg7Ee4MbjXAxSZMkeCsZK7Ans9x5CesZCFqEaM",
  "key17": "UH5YGdJNB9xQBFdd1dHfXvZpM8ww75w9WpyZQQqwU1oYMd9m3x9i2WYMxnquqqM2W5WtytJEu9UCBytzZfP3xk9",
  "key18": "3XwrJKSCWNNfnhshpDKQx1LJ3udBDr22H4vbycnE6mFiy84fv2wMa7vSCiGRTYjSwprUWoh9ZTr4rnHWVWmd3gyb",
  "key19": "2iG4PuXq9xsxS8UKMqDUQtd7NrwrA5CURPBwrdBdUBaMWcpYjneKdXqHTSe7dDo3BM7amywjxMHaVWAtTSkHEHe1",
  "key20": "5Dg3PC3avHu4VwPx6SaCSCiv4mFknk8JY5Cuug4gzcLwQ7RGdsuL948hUm3MwHkm4oR3KNEE6pxntXjDLWqCGm8r",
  "key21": "5DTD9aLR8aWwQZo9mPdoprJEbMQVCjdbf3RzUqYPAZgtLtdzNAPQtqrkkpyr2qMWAk4dw2Uw7wnWYmdfwcRq1a4x",
  "key22": "3P9YWafzZEvUmvg6CaCqvA7NesXNcxFRdbFhJLJMNctAfF6ua61NuhSwruATdk1BAE6nuNpcwTNxYFLw5aL2mDTy",
  "key23": "5tfcVvdNSHzbzJFjUotygwYjpNbVBPfL1bGdrL2j3gdF9NcJPmMu8Y2gE23eLmms5jWZu8nkD97NfzkdEt3C6Vf5",
  "key24": "58csdgdbGw3uHLJSkAozjohe4erfHCRgnJePVZ3YSo9Er1Av7vVKGDoWW7t3hRygtF7ciNegzaGr7kap38J69aXL",
  "key25": "nyNBTRtVPMw28mnRrjHEUxtXT7aXuFbg71NFArWMCbzW5L5aeP4suoKNRZtX1KKbgBKNVyJ37HwFHi1EUMrGv7r",
  "key26": "JR2mzQaVid8o5m5tBrpVDTs9bF32p1zLoN51XStzx5pTnMXuzk3T96VrUnxkZWK6dHPZc5RfQSmDCMYxMj2pGoE",
  "key27": "rdyqpNgLmwJLpZU6GEMMWF1U8kKr288a8eM1CbV6VVTYGKFd8uF18cVWLdcunJBA8TGH4kNrEmYbd8M9Ay7c9GN",
  "key28": "57HZ5XeW9N3hD4Uogr4Z8nVep3dF7ZVwUbaDEqYdVjDBi7EBgwmnEan3bKfg3i4gJ97EcuLWt4NjsVUvjLZUJetC"
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
