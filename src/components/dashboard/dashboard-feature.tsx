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
    "5o7mSZzzm1SkdYEKYc6xznoVzKBKPtJjbYGuTmWWxt2PUwp4y6FAhmM4LRuhgPqMF4rQbPY4h4RenW7Lx4SJ94uT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hz4bJZZuVadnyeoGv9hJsqRti9RnU29t3kiK2zSqDQ91KF2KduWrghz3sHFzTfVhYE5QgrGcdsyPcGUU8BEGhE",
  "key1": "4jFrXdm61K1c2hCxz9jvqJpJVyTYGDDYcNBUiiV6Vq1bEv9JNufqHWA4B9vJ1V5YCu4NPx9wTi2Fz2zcL5ceGxDs",
  "key2": "6nKygb1nAynB3nuQ7f5Sp7wSQbpSfeqeso3JobK6oYp6aAXDAUiDgUfHcdCSBWjPZhNrXwPC3sHA6GaTze45oGh",
  "key3": "3nw9YKZs9mbRErC4z275prtAbqDDzEVm7wVsJordBCjQFW88mLwVSGUUFzHw6p5572ZyD7cJ8E4977V3MfwKsQVd",
  "key4": "5vkmgpXSkxsQFsgWn4CrZqQwoZC3Pfsv8GJTj4DvoXAYbL3CzpSVUEEZJVZVqusBxBGLFUJBgZhxhFzqpm1LjPqW",
  "key5": "4mhYW4hwmRLpJLxukAa5Kj83746SZWzrooAQhwbaonBXNMvyKfjP4k9ToWztJKdVBDajsnr81vDuBNKSpCVaN5Zq",
  "key6": "2Xc5vurFjjLDRT9ps3D3H6YWrCVYoyUPNS7PUTruh6NZyNBURj3ADQU6p6Sokvg7YgmrzgFU8W5bJnZc3aDpPRPk",
  "key7": "2omMmBQ4NzG6pKr4mbWC9s9y9RaA1ggqadfcPPxc4WbG63WY2Ye2jnY9jsZJYbudmTWvjeLiFPjo7SyTXKXxXfDn",
  "key8": "38cR1gaNdooFMY1aZyEJEXjqyypt23a7T5XwUf1mi6SgPUUEtVXP7yVx7PcSLPBspMquvP675XBkJfH99uMfuwQ9",
  "key9": "xcWTLy3zFHWALnjMZT6AGFF1QLZfSuwGet19BcvrUmdv6ZDMtYcNtc6kHwQXYXZBNNsnMzQV3Q5VWuhUHPKk96c",
  "key10": "24dv5XTB5KsHJpDwzwhuKwaRrGdiHZuojc7ZrjZB3eYLcLdaUduRDoS9VeeemAVfcP7VC6iCy965jhGAY3XF21wF",
  "key11": "5rsx92fqXiZnUhYv81AgdsAFwb4zVSnEUGrthaS39RuyhH1ZpW8rffTCkLRcKgte2PSKD189AWVaBJo2u1wQgRqs",
  "key12": "3m3rpXAgFAaAQSpJYnSJSETW1PV3z9Ngq68a5S6FoDBc5Epu3eeERifspPsYKpJrgRjXQvFauyswATX3fqQU7BQa",
  "key13": "67LPmwfQEJgFxf1UD9b898zghiarpByjqgR7TFfNK2vxT689VBq5mJPayhJfhyw57x3MpdoUCrCNpCFsRTm8s1ua",
  "key14": "4ZpQtfEP39wbELXu5EAtUJ2Pfmw87LTmGQjbLUp5x8553CT4htvMaAq68WhsDYsxHAgCpWTRB7Xcf7fScrTYzZwt",
  "key15": "3f1oNfbYSkcKm9QMTWzC3kBVWAmJvVow2Tp9Mxgxhkh9H8wbGLBqQvmr7rnbZ2gX3MuzjTKhvBGMy38tfDd1EWMg",
  "key16": "5YMpxNBcozJh3JV9XyJV16XkDU1SPSdb5E352qs4Y9c5Jd1UdJCYmP523XmZECQS1bx5ksYuAWxTmECBHCuKKjNF",
  "key17": "AT47qVsPKKxc9rz8T6ExdFDdMPDLa9iZuixUVc7x9UeYDvegi8sBtQVqP1JBZrYgYrFGzZVACSp1nzv4nqNg8c8",
  "key18": "4b2HDiUGwV4TBHru6VNxt8xg94yi9pgmtHENXLY2EBr9iuzZ6s14XNXBT4KTvq9376gnx4r3X4HRFPgHPSs43gH4",
  "key19": "2Zshr2nDuzUYvdK2xdfEEsvXrZAXzQFvpHo7Sw25Z6Ek2nsEVhoTVXCpK5PzudZ65oDTkAHvW5dZVKHmL16wbw4V",
  "key20": "4iRv9zwDdvw19xpevdQH8aXTRHD83MwV3xk1AWwTx4N1FxnNZUi3YQcnkFpYNjJR7iR5zHvDPiaUhtzQSzPj5psA",
  "key21": "4FeAwDfjx7mxJJVytQnE8kDztr2xDYsstqUnxJENf6BGKFoHKZFXnsnt8jrX5CRdpCVjjUL7a94DGZ57BtUEaPTd",
  "key22": "hMVGtLvsMxzv7wobrBs58bToRNKUFcJPGyXCVpVjPsm743v9k1L7tHYtKccFGxGwRJCeRy599JY8a4Yy64iJkj4",
  "key23": "AHTkHo2AMqmh3Fn9NdHLzoBgsBfL5qkMs5Xua8KA47YJuP89GPR3zNsv6L5WdaGSvthTadN42LPSh7SGByK2S7o",
  "key24": "4hhp1exdqaTohF3BuJH4g3zpYXW7EnVN3NvL75F5RcwKQbqHoL1egCArZqjqCPcWDEfJCRrnwBYRzRQT1MXANY5e",
  "key25": "3iaDtowFz6FyCCkioDmXi3qPjjYXDidbniP2qWaJw8h9mu9og8uzmYBxUnYR5mypQ3BMGXC43torzTSUwQUQqVKm",
  "key26": "49irWKqhCz4TF453hFWRF5M5KYFvejYgtFAB8tLExzaPH6D56ucDJLWr4AnQWttCd2ELvnbDBUad7hqNzBmHRfS1",
  "key27": "5RppjAnqxBpwARgv2xLw2biCsktrDt8gXhUQwWatQgmy1jKu5dfXNokQRTL5E4Yb4rczHDqcFyC4h1SJKN86RWKF",
  "key28": "2HndrkuexWbTNQvscQsihnRnuBgziyEHtr2PRHeoq88qyZb1f5vvvG5gyPSkULdGFUgj4oSHVAophFPyfdytWG16",
  "key29": "4khfw6gbM4iJ617jE1g6QkUTEibhyqD3hzGCqaB8TeLvrSsLZnN8pPYQeEC28Y5xu8WWaCbff7a6AA7VUcoZud8s",
  "key30": "5LzGjWk4dQt5PW5fKAgxAa2UtriJP7s4AtDn4Tuk9MQbtUnADgWcTj1fDZCWJUVqywRj5MUuCyZkWAs5BHhhRPVr",
  "key31": "2ufzViAsSLqwDckfwQ7UqzpxuXBije6Uvdbm83TTLELMDr9rnuEU3XPjSyq2mqMGcTovvqpPYkfJX6QeJdphEGbu",
  "key32": "5LT2uM9gCF57FBNZrx1ZLzV7XEsvB9noQ7tR7Wm1Yxyjqp8oXkRnZufMDKehYfPyq4Ahh9orCp9xrsS3yox5Kgbq",
  "key33": "3hSNkTwkHo2KJBZNocMRse267RYybta3PFjDdgos15NZgvYufypxqURhamFWdrQgr1sHpeaALfHbcd99dtnUPUQM",
  "key34": "47rjP6KGhU9B8DvKmRdngY4o7LAvpXcZV2UmZxbUWqHVKcJCGwTBbcAGw8nLQhjXuUhQbFWc52xfxjMsRAHhBQMS",
  "key35": "7wFxJdNigCr6xjvuW7RJkKEAYnHCHc89rrJtPQYEuy9mZsFqk1QTEHzDyKU1FCL8DiH3KuPgSdw53sE1mkEmsxt",
  "key36": "21o2bd3HCHr1U8ZmZReA1Q8oC3WcSLE7Xjz7MFGQshr2mgLjbGBNVoMqRLHcynV7CctwjRWUAsoJMGooqH2WKEmz",
  "key37": "56FfgDmq2iA4VkggpL2VL2Zce9DaBUMhZz6XTh5pCbtaR6w1YN7P2NyDNCv4zitJG3jeecQfaGXvncCU8yKfgniv",
  "key38": "5wmvxjDUUkZDcBqP8PRwzG7QVUomcyqHPQBLGVM92wVjgAn6DokrP5EkSfgTfYoj8koTmPXEH1J6PvZKTeSrQZAQ",
  "key39": "5R7Q8zZR55sPDE6yr9YgSmNBmWC3FufajoXxyGorZMUzCueCoPrkrVSw3Vx91ng81H4kZ2VCwENKcwtzB2NcfzEm",
  "key40": "3pEVmfXX8a4E5qsksJy6BXD6ozwz8BGij8hnjcDjBg8HPpAuMbN3rKRKYW3wyt5NTbBEfZVkuDKmSYctBUa8mMof",
  "key41": "2YJjjZUY82vgBWd61ctegQKDnagdJxcA2qKoZxZgp1QmYkoePGnDbraWXVLUPw1s7CNoNRXtytm6kB9xdqDAVS2D",
  "key42": "5fFwpShAGAZA3xR4UwFZJU1GQmWxXkcW4Qqq9HQVAKxXrAnuTmk46825aHTrWN2bF8SogSDJY7bXakJRcqmfLtkq",
  "key43": "3J5ew7E4vM875vrYNDaeUYs8GDvkkjoyEbUeCkiSAH81iUdhNn5W42M1eTVk9uS88xsugPgszfxwZLpEiRpuwo1g",
  "key44": "63xdz1ubasHQWEz6UPAejeBnK5pjU5U6SSTzYAs17J8v2B7XcswfssD6pYSchjgMtuh3zEvfrT4M2m1jqvP6v9Ni",
  "key45": "y9CRabBHUpNRtNzMfvNA4jaMDemFWK2UowtGfHSVfpSFDXbBasQDG8La681eCEkq2FJGzBKuzc87B192BhmsHQG",
  "key46": "2mFcmkNRvyYtH5dpqfHCooTHZcQKXBWpgUPW86QbMgQ8Udv2m1UbvpSETKPwqnxf2fzcsEFvX48VBUsypAUZicak"
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
