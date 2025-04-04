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
    "2hRM2DtzVwRNp9mY96xEhuHe35GxcvEN9rzueP1bMbVVjZPoc6CShX8SfBwHQ1XsgqYscjFw1PvjuwhR53QHZYhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdqci9B8WidvQ9YxMKMXdeTwfYzzoNyY3ar1EyGETCwwTxyp1peX2akUw1pT3yfACt21E4SoQtL2yb8Xe51tK1k",
  "key1": "4tHw9wjvyNTzuMaSXS7aKYJXbi7TbaF9KvhM4jsbhqN5jLAxMzDzw4fPfnC6MFcDWMdk4ZYjrbyiYtRMZ2DbdaBQ",
  "key2": "4z5XgSxqQ7YbivBPqb1cLymL1m1VAxmu4SXNNFV5zZafYvZHdfYgjV6H6S4GyMW1kQskaVaGiw9dxkRCGv5wTRNK",
  "key3": "4s4TmBeYBxa7T2B2VTMgxmhmm6tueBTjpy38oV4V6nFMdfYpKcrdcSAKCiJkoP6kEbaFKozxWa2mUX4QXPuh8u8X",
  "key4": "41cvFUv9bRvEtzHDkcpWDy56qiSpfbRsXPZuv5YW2GyHVkbXYr7G2fLHZht1bEWJUpiuJMT6eBWqkEE44THKSd8a",
  "key5": "5L3cEekrs3WGkp7BAh4QLXQ9fLxBfWdTvaAnEgDSYnY4EdbxfRLAdjeogKtdvVEe3JJnuoYkcKMaqWp5vzqzUEfL",
  "key6": "3bYu1mMavpgVe6ob5dJx1uZ9uAVYAupRDQRbwisuXaoXqeLkfjKpij5ZJ181zpcVEHy8cMMwiL5csZGz5cmCzzFb",
  "key7": "3ejnvVuuR2FWbVnwNxCexkKxpubpVYrQBukjzCzxqNm1exGLiDou6KYwxJRoQVc1W5XAcz16pTW1ECVWXJ5UKrYF",
  "key8": "5g376TZ5GPX4VWUeQpxCV87z76o7DVGhmAmX6gMBtqCEpespPwqvZWtVbs3JsyEKvUC8xboDmGxjJfmaQEpAKNun",
  "key9": "3LTCinvcJub2a36UoJX3Bb9kdzBiPLKGFJBsT3dFMkjhNjRMpgaMq9BzQKfGyt9K2XdKK8pewjAFBjUqtUKHShQm",
  "key10": "3ZXCFe9wGpVFvULVRZumSyssA52QcVpmqfXeyfqDbFQRtb3Kniye97sWdEuVS65AExH6T4zdS74MrmXLKtrE4wRw",
  "key11": "3vvbqtkVRjGdVk3Z4cWpbnSZpCaNtetuM2m1ffW4v2n8zXAT6jSGxTkTxz9rgkbRe5ZoAGGcH4sbwUD15nENihxh",
  "key12": "5r6ae3zS4QjfxPreqP3SbQmNR9Rnh8sZMR5DWEEotxaM6MLQuwJr8jrnETtwmU3TRpYMgvWhEJemiYmVywrTW9Ed",
  "key13": "24tTUbxHPd8TW3KnPVwY7wStBD3Ss39MBtX5FV6rFfDRp9bnPZbgsFTCLhhrgvufrDaszzptzCX38kqNu5X6sUsX",
  "key14": "2tj2niD2e762hKWFzC2WmK22bgkkfcq76yWX3PtCcAyJx39BXN4GwynELeSeaJ2ih9RX5Jk7zHG8HMinGA3Q2E8Q",
  "key15": "5ae2w4H8bjF21rCbJqTDBKBrzVnp6huSLs1AhUSzsz9QFfjTMhFEggqj9Xr1hsTw5ZSiQGBCMVELJK7ECBEWCzkU",
  "key16": "UBSU7nNfzruP7R2in4MrgB2bCjVh3JcGLwqhNg5858wQJJPAurYGMB3NkR5b8ogZbqPXp7CNrTGzFwcoHnjmCgB",
  "key17": "3HXUJXW2DApWtyJQuPDT2AujTt5X5aThgKKYtdtP92PfT3zn9mALtaHQxXw2YsBmJbyFSLMYgttnBEAn3kbnzhwB",
  "key18": "5qJyyoQ3NYe8N8WLQTUQvgG3EfSixQadAss5cS4XbUHzePZVowqJmFTi8dqgxtVW8mAZ2oaoSr9p6hk5sQHE6qt8",
  "key19": "5Yzwo3fDBjiPJm2xWqP833LabryN67jqkGFRxr8JU4hbH8ytfHckCvzvz7iBSx69H9gw7oRVRxwZyeoTXm4FAJjU",
  "key20": "3CfwYNvDs6U3TDFBnoWuACnpSYWxXJcekFs1A7CiC4yt3ogMkGcgiHbNXnvQEpoKpar2vrs2qHiqLMKUWjLbHgYH",
  "key21": "3586ud8YAmaeF7mDhpQ6QABn1yCQ17L7LezzdfEu9Dqc2sxwDpkDpbbm2968ypKGMBZouyrbVyQkfU1BZ9raggPj",
  "key22": "4N2H2dj47ZrbqTpdwsSCdtQNnueUBQDzjkfgK8DHF3tDZ3L6XMd8awdXJQxPJS5P4jrad5ZdEusFuoFknhesGNJA",
  "key23": "2vsPV87vUKJPuoHvPPwFcMwBzzmbg9xbhQoKLtUcu4Efok4NtNhvHEAJvHotFnmNadUCZj6Y5SGDC5zGymj78sES",
  "key24": "3P43CjyGrnWb5uH7FBgm7nvM6KMjzVf1h8wpHWRvwh8149uZtPdTerkbECYzbUZU48a5coRUNL9eGMukJhcNAZG2",
  "key25": "nSi3QKpL3fvdLS7vgEes6FYGxU11MBXvC8VUdAmbovQAxaj6BoW5KYF7ya8u6dQQXfAVa8UsfkrJpVCbVRDdZPw",
  "key26": "5XLCH27ZjYLtLi8yv4PHc8ngpxtcuk8VX7qsoc21pnX4hiCSQnuDXgDLFe5uoEt8dzYtFreNcxNN3aHY1JcGtBBS",
  "key27": "5FbcrYeXVRCVRSqmvbQrNaPKncnW967dEr8K8jdKo7D1VEZMUsjdQL3cZkC6B5jvZAn7xMnB82D9RzfZwtCy91Fh",
  "key28": "4suK43ZpatfwfNoei55gMFq3Cdg51FawdvwCqehcGXZjgq7ufchbSLKU51mcNfmahPFUP6c1yimzrWEJHtpJ525u",
  "key29": "5QrSuZJ26dMogn3dFL2cJLqBRWmV9TWJkrgW7CY1frxqEYSZCqPbq4oZSHkv7tdBQzTu7HmVD9cVZXLSKqMRd1JM"
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
