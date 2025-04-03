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
    "9xoQZCMpVoxNLEXMGoAYCKGXhUnuHX5GZ4myQK2GzNg766tdvv65MLmvWTvHwN1y1bwWUsrZ984hPEJKdt4c1n6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kSrN6T6V1Q4G84evMLKs3baERN3fi7UeF6qffP3t1nCHKJFhnWUYDCMMs7YWKgT7B3SgvfyZqRtJHtNKMHL4z21",
  "key1": "YpseDmvNGjATBFaSET5TiPvyWmhvRthv6j1JC5EbRaGmYvi9R9TnEFg6ppg9szocGryDG9qXwjpqcLNZPgsvyZE",
  "key2": "2T9u1v9j8T2UDSKkYckB3Whhb4Eps3uMHdapgQ2aUny7HpY7MMLFiHjCXysAsVVZ3q1JueXqRmtUcsPokRyy6Sxw",
  "key3": "279hamy4iApFoJbY5B1KR76zv2xQby1MGmoVeAsQizqnA3BFpQej2jfrTSFAcr8NN17tRmvAFncMGwZrSbQdjtey",
  "key4": "65kCXZ62y1y2TffAzQtJf2HZ7nhkLZQyj3JbqqY2zvjdk9b7S51DBxGhUXWr48MnTz2QuaQ56PVruHuNJSzXfvvp",
  "key5": "5i64c78UbE2M1f5eEsS8mqVYx7o8VuCbJr8kazJK1WcnydyNt8oKDmcvtrEAtjyoG2w25T3KcpTsWjzeUBk2LNad",
  "key6": "4uHEue8utTG7w6Y1kGMypk2e4bX3v1G9YBNc3X7GNBKDdXPEBi1a3vksczGTs33CYAw4Gj9j5BVAD6wez1xUfmu3",
  "key7": "kZPVmfrG4HBvTntnFLLEpuo5uK62et2Vg6DrV4rEzEF52MdQVCwZtkjyMSphU6NMd2C2qWRTfbVvzKzJKok6CCt",
  "key8": "2v8xaN7wSJBZViTpfcDVzj1T76Z81iUdmNqRA1ogtoACGj1Cd9CcQf3L4xxBs5xxY3kxAm1vSoy3h9F5YVqgi6Dc",
  "key9": "2xCVnHaKyBWB4R4vG2zLtTNg4Zj3zfYPMkkk3WwT1BzKiBq8n7Ph4oPPKRE8YBtMWETSwKQxFbNkpA3DX2Nssa4U",
  "key10": "4tEtBcWqaKbxcCUh2mKUJorg2jR9cx6jfXPisudyo4Wfk8UiMf5NjRnMKKrAxojZ7kxNaN7mswfAtbsbZp6oE5g9",
  "key11": "wGx7ULioLXkxWfd4t2gHGj7V4mZTqNEx9DHu42A1ogr6DoaWD9TRmUtg379KGnvzj6RhLrzbm2GsRXk2Rhy5AY6",
  "key12": "4Md7MwY4oK7zgF6PjDy3nfJSPCNEzQqE9TtVF44qwzTVAczCyhttM9XVBpXkAbFzqoBdkQRsgyPfXcZogXPxJxVG",
  "key13": "a1DKqTemJhw6RJp2ThfpXsKfXW3JzuGPBygpvqeWvWz18EPJ1njP7BQnN2ArCWKvRq2eTCw2aDtWJuXLgKskxAL",
  "key14": "M6pK4F9AwSt3yNiET5hYboQa6fbfXNZrFi9bbUS7gwXp2HqLu66QKc7iUTHSZU8mvkSrV2nmvGhQXpDQ8vU93tM",
  "key15": "tj17Lg4NH6d248U5MWx9gcVnTvtH2iqcq5BeLTZwjHxx5kRe1HV8Jt2JKyLGEquMpv2HMJuYVMuvQxWisKVtCSh",
  "key16": "2ZhG1JSB66Sir24yGVmN3pTpdwMNWfwYwKPzuqFHfDm8dx45QAC8yMc37T3LPjT8HhpwHhGbRFHWCnUqWYKhh2yG",
  "key17": "3AsG5aVDF1Vtd5ijtTy1R3Fm2Y8jz5H9zASenm5AWhcE6611kt6maJMki6FYuAbVuxuLAEqAarvwjh782VnbokZw",
  "key18": "3RXadSBhKn5nHhmtQxYJBZrroyfscvejbWjgvuz78TVCXBaHJ9JXCrBDLtDvS3pDYGCaz9JjPPDmTDK2W5nSgByQ",
  "key19": "3zZBRLytQxrPXqdJKktuKKXHa9d6ivnvrfWiDK7eMoc7mV62K4ZGSsq58Cp78pd9bK6cEHcaGQEha9c9k3qnsber",
  "key20": "5LgFNRyCvCponSS16mmRM1VM9JJAWeRwgj9ZHLrEVtuqriCnr4Di5oTyPjJeztM9av5ZWWoXLsjrE1FtsqB5YAC1",
  "key21": "4wLYWiuGzuU25QLxR7VoUafHWjtPqi3HndMHrnQpRPCVDey8DvhRDB4ZFipdWqqBteNmPbpefcdyRaB7EEGhQCzS",
  "key22": "65QHXvnUgMogm55j2enk68ohvKb6qjperFbcVbC87zv4s9jsbHM6baw3SWkdUuMN5bwbrybK8rsfeq3PYyABnRWb",
  "key23": "4VDbAZiHrxwBPPg5VqNRLPXxL8a2h2bm2FPfifUV8Qx9ejKD93ezNyF1T5fwiZG74ii2CTK5kmmxCoXm3W3QcW3k",
  "key24": "3pu8j5NKrxkHCfqvnUsVDgJXzsop3eXpJAwpR4MS128abTEz5mR9CUt6RYgS2BJXgjYFTS6TFZg4yCJnoYUwEEzX",
  "key25": "5bmv8vE1GiD1H5HPXPwQuc7zXP2YPJ6m2X8izQW1GkwCv6P4RSDxyEux114bKTG6GgoVmLjFKm7RVqf6mKWauW1U",
  "key26": "5MjUYCaV4LzAPJTDjVeanBfKsXuZBC3QM2EHRTxdCDqCQ1M5pXfgEVHPTrpdtujz4NaU3RAvHKB7s31QMz1Av4kL",
  "key27": "5szpkvFgviMLZr4YWH8tgy2we6L5zTS8bzJkf51mg9eRFysnEznzYZzBCKs9CV68UU8gXPN2YcE7dsexycbhykyS",
  "key28": "5E4vdVCi1d9XwTJPKWHg39t1j6YVZRc8ChTXY4vqoZuQ3NXA2AaLYZ2MN2JtLnfycwp4r8jeZRRfg5aau3Z78h52",
  "key29": "2VsiKZMn97t2HDNv4WSMZVf52CUGqWQevCV4W7HN8MNNPvKw1TUTj2fv2vW5rkHCE6bWoHhVJjwpjtJvWwCRFK8r",
  "key30": "2C7JDdFMcQUAFMuqUHNvfk8GXvv8cQ8VvbdgsL6EXGj5HDE9hbEpU85X3GUn6hVX9vw35xjWa1ZYwuELxJVQXnP1",
  "key31": "H5kWnndWhdoUN4rXNjkfHkEqzktL2RhzGoxHVE7MnGdBxD1upNYrLungzdAPcw54JCNvC58NBD761Yn3ArdNJuc",
  "key32": "Ez9z4VaW6w6t1AFLzG4uo1oaMHycmjBaieZMKFkzKgduaJ42GrA2q8DiaYvSRZv3GsVD36Gfp83uzBA5TDDgWC5",
  "key33": "5vDi8aSZNSqgCGoCQHtDJxKACsHAy9Vd2pVqX99XvanjNw8Aqxu5NEXQGBBMTBBNHibzYV2iCqeU5CDapv9XYi78",
  "key34": "2nvNRuXeB3QNxnyVujndFXvvm61qt2fExJyTEwCSPqi8zhguW468PbZe5jjGezrdTi3aU1MmN18uHeT2pqzW6wxQ",
  "key35": "3x2FEcf9xWSgAUYhWAumGM6vpvpzNpKf8iqA2hnS4fTnBgeJa2qjR1e7zYcPKqwcRwq1SqACvRUnV9FA6HVrCQAW",
  "key36": "4Z9oYKAUmXYvwkxsSzasbtKx7jEqrm3rMN41x9TbhiwZzycP3h9NxjJcnKcU24oVxNSxZttjRPWak7zW3mFSkrFf",
  "key37": "oYpU3Ez98Xj42N8LMW5rdb5LRAKGZEiR6CPRa8vp7ZUku3Fq3mpMj1zDQdfzmKhvryaPQavqX7EhKJHgKrEQMY7",
  "key38": "5nV786SfFLUFBZzYvqMgzazj8Ew4ahnBH1z2jWwUyHMpQe1x1DYqHA9KaZ62XpnP47y3ua7m9xnn1BqvEjTxsggL",
  "key39": "Xr2bcExAAtiXNJMP6zcxgXycCXuDZFMwrcS73t3pFZymmXT2EVJidbeELFfXBd4wRpckwsj6381tWrsWFvRcHwZ",
  "key40": "5odEoRSwyrQkZdqeNo4dAFCyGHsWQNCVycxmRpuYajySGCCr4JMdAD9S7nYcMBmqXATPAVVJXPpcK39Rz96nx4YA",
  "key41": "63BoSrXouvfJk3hd8pRxEqq97nubuyhaWFYbGFmrWjKeDPzKoW86FuTym1tXqwq7aJKUYxkEH5gDsNiCSGLBpRJ3",
  "key42": "3Qr4aTQ3WqxdEXUoHRJbAxDBDQcb6tBEEfhSLUM2wtFNfx7F3mDJZLX6uoq3eRnFACxWjGxUHK57v9e9Te6ZxaK1"
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
