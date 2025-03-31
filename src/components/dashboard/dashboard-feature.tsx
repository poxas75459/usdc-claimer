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
    "54xyKFpBLaQaR86tArNyc1WdPWMbMvuLqK69PoDv8ffwPwnW7HWZLkwNWorbqgQuWPcjy9EXZ3gZCNDDPWJ1Pkz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXgKQsjihWnKDYE3TKttXTmPpenysicUQhAY8gCqRvGqZHUXVT5tUbDRmaUS2TjDzFXtpDUcAAFZPhDcRpAxVZA",
  "key1": "3RN43A3Qe3etgxTikMG686VbeYeRYdkUHdFALUZv7K1rqv4bVSovm2c1t4w5ruoPwAJPMruZSeQFT5jM97tF7zMG",
  "key2": "2KSSB1fyWUiLD9pq7B1qXJa8KVL3JjWYEUixgRcJFKrdP8hsr94m5Pgdg3EZb53sQxzzRnnLP7x8F8i97aymGNDo",
  "key3": "3HYU9R16Kj6as2aqQMhDYw5GK9wd7wGTDN4GVUzL8Ai3RiZ36ayjBXsxc6QSYARMZ4xFjYc4rfnmJDVUS1JE2gdU",
  "key4": "52jFcsCqjRivU5ezyacYdByuot7SqVwvf9ZPzsYA7SRCcCA9EATbcWu8nSGckCmdd72BZ5Er2DkRTLohLJArsW57",
  "key5": "52oPoJ6P1CVGeiRhtgwVW3crqwfVLVAnPDEzugzgWQVGGRRjnuoD2M2sPgRs1znmbbWTyFRDbMgj3G8gSH85WPh7",
  "key6": "1Zv5zkc1twmYW2eA3Zfmj4ovpnbkNoY8BrcbC8GddaR5eoy294e37AaoeBtumwsjZ6HJcne1nZrqM5Ruo68Ewbf",
  "key7": "QD6DJpFtCDgyp9D9FPhEpcEyUat5zK4XTFq6LWzBh2HTdzSSxwuH4e5HUAmXR1xdrVR1xuxrRHPfhEajEy2xpVj",
  "key8": "5j7jpeDHWQjDMKgeuMkwtd2zygEVa6i4ajWQAJm5bvx6gvJHakp5WNyFQbrkhfaceoii62JdyvTv6jDJAMBZwj2G",
  "key9": "4uJ8Pkd2SvLKEswXQkLQaC7rcdgkNbsqvrgiD3QvoFLCfuTEcjeq25zn8z5vEBVkTjXSXMRXQNtXhNWFudh6BZ5b",
  "key10": "3y1JDuVaaZEiAtcXb7tGQXqmngENW5yDRuf5vy7eNvTe6DMu4NaEFAc7QTR5JGXjA1Jw7ahgVFLY28MfSucpy7PF",
  "key11": "4Gd4Tac9MdRsPKWzswddVS3WEnT1purgf4cCrvGr6n4nArDpWfqLb7C65BXycYLrBAjNKF7y8PimwLdSK9B9NMr3",
  "key12": "2qhSPCCxhZ8Z9XUfPzkcXvGVT4jRuFo5TZymBPpjaetVYPtnV1DMhZ6efJhCYARBNNeZMeobUK8hESzvJmzRGJ2u",
  "key13": "3th9U2b5pPoDAd5wuN8fwSigh34bvsarkLA8hv9qTzjGRZhdQWFeKbmov2t7Q3WRJh1SFVQgfZtQbQpRrmb8zit7",
  "key14": "qC6vfYiBrKnWiAoKsPaVRrk6rEKf9D6ZnifnRweL4aD6urgQyoZyTMTd36UgQtzv6C75FHbMAHPCHX18bnnEw6K",
  "key15": "4c41UfNF8grRgEdPb6AG2UcbQU8fHXUB1g3YLiNCEZRpVRbJ1qJfCz5Kcj3xto7d2Nne2AXDrZYvepXuAhNs5d3h",
  "key16": "5RRJNm82Q4ic2HmSPeDE6uD65YUZTScEQf6oyAUrz2TGwTKdwZvf7bgzr8ggCL8XEP9fsjNDVhuJcM8NatQTQN1A",
  "key17": "fcpFBJtqyrVtdSqoipwRzPW8du4zUUzv28786Y1ex46iCPFdNgmA3cu2rawjCBEyRyhGU5fYyrfVZzuNW5Vqu5v",
  "key18": "55VvLhEhnTNQSVifwgK6k9CWmsQfdEaaCwteu7oN27LqKGMofZUg97nVoo3RrLUAtmcaSAkzbjYZ8eJ9L2NtkgrY",
  "key19": "gnXRJam9JK2kpCBZwXibNw3uY3fg1vin7KFHHPYuSRjfXLGoQH4CAnJ5jSXJPPJhhbmvhLmUadd369NLom5hpt5",
  "key20": "MkpbjQHut8y4vg4QKAgt3t9KWMp7cxL6FpNjmU7xgsXC898wCp1ZhJTUganE47fJLi2H13scGgtMAJtxirJeC2v",
  "key21": "258Q9uNYnxD3Lg4fcmLa1iRUw5mLi43CnaWdQAFd6FuQnVTW3c3WgcigwuYP64YdC5s9Hxx9Yh6gzjjtnxbC1KkR",
  "key22": "2jPBtE7unnf7U3jUpgpq7T8knq8NGWVi9T4hY2DU8oiuDni3TaX97Vm7WW1QravRNRxJYSLc5NP3zqQ9b6v32d4t",
  "key23": "3b8ANsq1iur7aaG9HmFR3LAVy7qneoSdQeRVvVEmxoQwva2HR3sr677tiACDY2XTY9mtafySNJ9VWRDa894874eK",
  "key24": "2NXG2c32MxxeEvRfDWmfwVE7vaAKGekbNUnvDZpAwVq96TdQPZMvDBqJQgzUUhUcr6gMSs1wX5GGKAkz1ticmqqQ",
  "key25": "2hHfPkuanWohBB7DLrtcARQk77GksWaj1V8yBetKhpFpyQ9dPQhdsYgNRAysfuLRmmsGXdSfJviUYTV3CckG4SoN",
  "key26": "65hS6pme4Jb3sR4Zncp8vA7vqaiARDwgVhLqggtmGSs7y7mVavbYjjD8bwa4ihdcdgfK1Xg86UAvnSxGp6qtMYXD",
  "key27": "srwS2zALtZNLrGgY2sBp6wkH9bNhbX5WTNiM5quqAcBwojkdktuj19GuJPMGW9MURLZsR55Z3XTkv9ZRvzZq35q",
  "key28": "ye2aSnHEDcubY8P7Z8NepnDzn4thqCipzruRQTJZmS4BugUwX9eXL49mm52H93ybvLZw6RqKuinj5DWp7EcViYH",
  "key29": "4zoy4GLbSwiqh78zJs7Ts7dZddLPu43RjTMnCQR45uGGsWUUU45aSvQArXQQsETJ98m5hPXwdbYQV9KkpCBTFaQX"
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
