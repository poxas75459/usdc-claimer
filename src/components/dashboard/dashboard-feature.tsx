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
    "5QfktbdqerthEVaYebvtyQr4rhfeUFR4VXZGKxL8FAGYaA2mHVcuYMtS8VBA6mYKPSZYHxF5N6ZjsAv7uGKzeVTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7z8GAexFtEJ5bdnQpcFjDvSRoN64ZMKkA8iuSmCfMb875XTJGivb26E8Wm543rr4jvDovFqkmhBqGR4dBg49HW",
  "key1": "5NyXGnzM1yaSrwCdy9evknJCxHBmu7UxKoTNViVtBknwHiFNAZBK6sjYRi3V62DnSnDfS3gny3j1q71oauCMLnsA",
  "key2": "5v8CHXpXwtCzwVmyDoYM1KnbgfaDtMmd4xYUjpAy2RvpWF7jxLGc7YMieMB8wSF2ksTT6YLDjot3y6aJ6u7bHuf9",
  "key3": "eFP67h8ssSVmehXSV86BGt2yKzWiLGkgUsUSBWZtaXKTKCVbYUjtnSoReRqGkWTJsdUVABrCRgHiHn3V8egAi7f",
  "key4": "2bnpL1AqdxUoEuJn9aMexBWBiJZjrPnemnq5rXcpYkxYqd7r7aHFB4KGQmA2t1epXnS4FDv1u3JYSQwCGt32vxXY",
  "key5": "59LLdqQJnyCE43GoyMfvPgPsZjbFovw9PdXaqMNMfKrMKvDw57Wq7iVd6W59AA4DFbLSn4kHxc3vssXoZJ1dP7Jm",
  "key6": "5jQHoigRgKJVDzeYmRiCyfEm9CWaM6hzTEh3qUvhgerS6Jrbg7mWra1MV6KHwTvDaG2xBHmfnhBYyHtbHupqPyGM",
  "key7": "4SE1ghp523cLM1hjKp1KsSnb6ASrQFafe4BVcm8MUgqiX1mENeDhrCpAUAraMcWdiNAMVKvM8LHA9Ph7boFkhQyd",
  "key8": "4vidLTVLpg97nkE5JxD44bShCMAeoTpKok8ZtRwBAWgQEXvoqs1gtxwvJcCLVySadpPN5QqtDKFkPRgnW9REvHMm",
  "key9": "63fog39fteMp4rbcZ6fcfMeWTC6bWV1pfAmAvnaHrasF4CBuDzJ5EGHtMGr6SP8u24wBpwcDnWatQew3q66dzoCr",
  "key10": "3hZTraeSqbqFjR3M5SqbfMQPSzUMU1irRdsp3DibLHXpkoFjQhTVkVaZNuq7cW56h7BGZQ7WSZr8wiU95pbmatwU",
  "key11": "2kAhi9pkRRKpETPeXPnNRHAVFdVtafJeSzgyUADisa8JPJASqyWMZHtqHqVKBXUANTTAPaXAZ6YFNyhTn4AvpGW",
  "key12": "2guVPjSjey5gsu7TRo78yWicgLKDCSSXpj8RUTJncxnfdAA9Fx28TEXoMEHFp43X16EPpXrx7anTZvS65aJ4zxHX",
  "key13": "67proqLztwbp8Sm7qwh2ksjz34bpy2BMveuwvb9EdHfisXJvDZneu9ZLiuKQFQ8x2QaXyYbW478SfBGmsseRAhDJ",
  "key14": "NTzSLxW55TiGXMmdELAyNkNKorrk1zzUuvQLvmH1ghK8WmezhZoobASdsvyFWNTJDBdLUsmqmsjfKeasQrVkZUi",
  "key15": "3R83y6nf2wjx7tpZgf4m8x5nYC6yTfQPK483QsaRrjqLXsAKUKwYCsue5rDuzruddWWHrp18SGV7yzkzvMW1GgrF",
  "key16": "5PvDoT5a4MhdaCLtG2wSMepBgqmyQ9S9AGDQiyKoWSBzhs94NSwQPtHTP5YcecgVvBU8K9jZiGwDa1qxXx3NeHuT",
  "key17": "2kAwCx8ZhG1mefCCqSXNYF6zV2ukSs83wqVf53qzuRQavypbtgDim7NnbzBeMHZL8i9cCbMAcXYr8om337uiR6jR",
  "key18": "cZoFgtkS7V9UPMWmYwH1kaNL9pUTfNB3W6dZjx6tnhR1QzNGqZWjw6v2Qc4bGyQUnZaBmsdFRKyESjZeumsUDpn",
  "key19": "63StsJXrBXM2bfiCkn5NJnfvvGAX6ignoiwDAUKsg3u4v4b58KvR9SZv3HBnb2k4TQTwGJVmVXguk4E1od2kqChT",
  "key20": "2UvtUj7gYigDKLnJFgF3inJsKAXcfRt3k4Rw8VBpjaLdarqWGeJH4Bgwa5AwF8F5m4YumGAD5YPHgMroTh2pFWkp",
  "key21": "5wQQBX277EAYwivxbXwoyaSW44mCmABJfhQQNxuyWjE94wtzmhwQBGsMRpHQFXhUdqpFpyMwYzt9PpLBJEsabPsQ",
  "key22": "2Cg6C2h1yTrSDNKgKt7hWLfxJ7s9JhVG2t2sz3sM6mKidRxKu3rjUWrtcWkJDFdDkNkfKZfZMXBUBZae2nDSQDS",
  "key23": "Zcrtn8swQ98yo9p5cGWjcXoZF2TcnbzGkG4MDn6bTWzmNzX9zAaNDFUqVg5MVqvkv63kHx87Kt6FPoSBhapxW5u",
  "key24": "43sTbygf1PTxtU9zo7yoodGuuq9im3MpfKgtMXEp2Z8XQQ5WwFzC2aa2qL2RsfCcd4FdZP8xzaTWNCAuKZ7Jnr9Y",
  "key25": "2vqaAkrM8ikWG3LK64QHBQXXXUYxh9WviuggN2fwWFx8x7zrZfz4u6RGEqwqEPkoG1iHfcAjENXn8SGraiMSGPfn",
  "key26": "36RwpbgHg9VWHtY3J8d7HevFhJFBMHCCQXB94aspPhZRSt5kZ1gsvBiY2mgxuFEob8MZxjWwGF6bSM6RVxnNuncY",
  "key27": "61sx8MgkZh9EeKuGUk8meSyT5hiwFWEFudX9yERPfL9GVSDELAApWA61Ah58Swt2YCzC6LHCT6btPJjezb8LNF4Y",
  "key28": "5WfLiJjJxsyUqRESHiDjxcfSncEwJ1bJSvroCcrVrZ2BviuMZ48EhCXdntYpqejBsXiJWKrSrnRCbd4XFV3XkBcw",
  "key29": "44rLFMQBUGj4UMTj7cnXAwT4vaPWcZVEcnGMxk5A6hd9tN3Ju85HqW6bSzJrWF1WuqqpW5t7WwDDipEmvUVKoT7D",
  "key30": "Eor3fSiidLmTFFc1BYBkPoPwqD5Tf4uTBr2Cy2LjVwQm6XNXVeUDwDZz54XKRgSx6LeGG7sesF7W7ykrknuxiav",
  "key31": "VuYF4cVQXTFiNMDYUrvsPu5W4HJnZUZDrYYj6LAWubyuJhJJbYvjvmuVsZ5H45XicGs5BHon9bfXrYDwcESunYh",
  "key32": "35yj3q1rY6WwqVnnxwBbtSFxT1Z7KMRnHtkcH9tJHVhKc84K99a6drp2BoefwReJ4YBpETnWdbaix2rA8PDLfYGp"
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
