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
    "32s27HEw3v5pkWsni7ckLzgZJLviPzbQvLLJvgMo7F2QEq2uEtyjx85qSBRHGRMt4ojrtXZNUaB7Af367fhPuESm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rYbmvpubYr3KHxGkGhJoth8pufTECM5w6y9p8ogmEGs5r6upZWZy3UdQfWVrCn7iJrqcEdRazbwSs9oAkgJqzAn",
  "key1": "2GpuvjsJKLGGNdq5hY94FAWceC8mUv8DpeAQ9xoqowrJJ8EBax8RS51YkrnzVPbm9LfPMEeu6dFG2AXwV6hWFu5z",
  "key2": "5UbioVKam3itN9we2KcRUYqEn4tv5gYh28o5waFATPHJNrYasAppmhqD9kF1EAQ1QJLHytGJUZXTrw4kGCfUe9KS",
  "key3": "5hcdRwFg95TACFLWynjEFNfw1SDT1Ac7zunPFqm84JUHux1LNrordbA2hP2SF8CRvs5wfWHHHwgHGXQw5MusEM99",
  "key4": "4mbYQmpCFXFnV2vr1THvj2mCvxiDCr6kXKMZodHqjemkxCGgSwcrhuPEHt4s7vghC8vBXpsNrakvtHUw7fhnahek",
  "key5": "3a83JrFdessXtAEEUHCvfBvnZbhudParS3HQ6RnUbE5MRUmNHQD1HRBwWuYwbCQM9iMzKofNFn7ADZDvNRftFcJx",
  "key6": "igobGkiEoN8vTjBuhEx5Q2MshjKjWCmjJPrui3bkhvkPU2ZgC53Fb3BXmPwsDRKrgGxUTMsDdSdhe36sTCA3Zw5",
  "key7": "2n7gbQqtn8qfVuYy9nYBJPRw87MaaL2mMZbif8BkVFHX9pzTNaMXKhFyfoR28gNDGzSEBvhHE8UVKrWDRMFbhN4E",
  "key8": "4oxX5VWk41zzQksXLyzgep9AzCA3UaLhcqLzshLPAajUc4sLx9wY8V6mrs7fMmu6venic3KagBxe8TLUnQB3VBrf",
  "key9": "3evYC6ohf2RnAPz45V9g945iHaLXDAEv1EPRUrXvcrbQEJJtaPwFMjEkFBWSi4MF42Hydg6yKRYdnVpxyHLeHzW3",
  "key10": "4ozXs8pYV1LyeCVfrnu25fFYxm7GNEsspZqgm926RWNuwPTDVnBQ8kpGAQo7Mix9NiAxuf7xEXxiJypewNYcvxw8",
  "key11": "3QTBPKFwV2essxbvMMVSoiNhzSdkGngB6juq73NzpquYg6pqjEfHgVkyen7GPtNsNk35fBSqgsQ82ozNFWyUmo12",
  "key12": "63rZL4krComPwKPz6nUVqdK4Bzh13BugFJ7oU1VPzBi4Yv17tL5cBtiMssCVS3uyytujkMDS6YqcpEE59U2AFQjD",
  "key13": "2Q9RUrLghxxr8KiCu2GgCt3o1mrjZTjhHJyuVGaryn38Xzt8BVm1mxVmZCqaKApvsYxvhVQQonU8yRDyqkWi6vvx",
  "key14": "37v4aQXmvUXiBZK2ZWTdQTizPDb1R26w8yCm4y4RGUqxisHqWSJQtuQUwNz9SCc2U6WjnnGbbC9M1wz9ucJZvNFj",
  "key15": "opy6VpumEg6nXUA5MqaxcJ3XfeyzaouZnorCvTqJWrGh3zgt7fgop4z3yjVTHqB585ZnsK8cieVCNCNM83yVdRU",
  "key16": "2AgtrAWwKi7XkYGkYNY34mHniTZk9fFQASZSLuqbzyZJAfWki6hoF2w1q1SZw5yw6f7DMKFeHr4HySb99YmK7L7E",
  "key17": "259aafafrUAuQ7neqecqp3YFH93tYq3HYDWR4yEaftaPJo9ZqUhqjKe5EANN9wuRuex8ZpVVcw7yFkr9gtRC88ox",
  "key18": "5o3ekQkgMNX5Shk9DkUEagnzUgc3kBffiUtHZcRZpdVZzMS6wDrZQxnvMALaDoVL5KBHALX9TdUGWZv3TZea7nnE",
  "key19": "4fyCZ9ewXVdgrytKRq4u5nFi1PFayA72nF4MbncQTdStFXrYeM4oj8ounBEzsLNFVxMY4pNoJ5Wyymxo1dhuTDu4",
  "key20": "4HWZrTZsfD8R4u4iCYGvyfB2fuJ8iuwG61VCUMmWuGi9iL1WcxAYG6QHnzg4fGhPf9pdjbpjxHUjig5TM59PN2hh",
  "key21": "5ewGpiGtdwtqU4fqumszTvFFrjybkC77TnFkLJk65QtcAZrHZXuK4ce2eN8jQj3icDKeDKzxVhb7rK3e7rKvxnPX",
  "key22": "SNuEP9Zx8GJBvA6ndwgMVSmfp5wcs38uSPUa9og3nJ59YGgGUUBVfnjVm5Lz68zcbrgqvDp4QznVB14jKkv3rNZ",
  "key23": "3m7YkrRhDaj8JgZ3nYya4jrh6GMV8D25o1CrAKoP2c6w8AoQ3fBbFKKRorjWUvRjEHLoJSTkPPAJTHpxLEgoGJSv",
  "key24": "37WqvqDmYUJozn3aFvticTboBVXXL6ouBzA2gBWQQih9YSnxbbKfXwEVuLkbCpLHAiE4Ltff1e9hZt7cgqNSzipP",
  "key25": "B1U378y2ixJFnvjs9QctPhJmGwr87JggJNkjq7XBQWG92fJu9THzYnAnZ8HwmpZPZNHTbwmt3i9e4BsvrN7LXqa",
  "key26": "2p8NmbsDuW7hQNQMBSpwyb8EXx9eCuCuuUDPq6MGeCSi9YiSxSaVbu7vhBH6qiPXdk2aoaJFxPsWQTokp19MpQBp",
  "key27": "zPByjeNWgfx7wyeeoa487hcD6SEpTt7CSmZMmVN3Rt8GdHwSz4f57vyJjaJJptEDAQkiGHj9Sgnt3iSsMXaZfYE",
  "key28": "44fMRzdhDmGzpCh9w5Wfr4KqeQ8SguLfGvtiwYVJdPtGEd2kdBBsnSxaDryymiW3XTUFYFdPxe1TNsyTVs6MLZRv"
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
