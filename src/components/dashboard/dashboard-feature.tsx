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
    "sg6brSD6pd9fWkj5jKnoB1QoNLwJmGPN14JPZsB6CmcK77WGxi58nCKxJJDUDMyfuBeBJ8e16wyktg49crLwLyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sC292Rb3Lm5zoVHHhCocezwTKs1CDQc8FBUFVoSNKCKJPdH2Lcbd3LHVHVB3vvnqNzU6WWKvRz5SgibTeYTiHdN",
  "key1": "3tULoeEwHjhVYcwGHk7abGD8zyuKXYRbHk5EKMnLgySdBTY15oDmR6sHFc9nYYSfHq4hYbAz4pbhtsvrLkUDiNec",
  "key2": "5KYx72NGveyMtNM6KfqybjwonmmY8KFxivp5rg22uteMhNX1mPMEctgyfMn4hhLYrNaWuwyg2XLDSZt9yeaR2AUT",
  "key3": "55Rvq9UXWH4uVGqTALwaTAjA7JJXXbyYCJ3z6zfgHYmkQeGiT8FKXK4Ciivd3wBWXEPK8feMpV5QUcqJYSuSwJ9A",
  "key4": "3F1o4B5vzb6ax7Eeo3qusPJY7JrFpk9Xjz2WGPtTJtrKBAiqQyJFeKcgmhFhbp5UWBDtf2LbNRWvPi5CrKYKjvyz",
  "key5": "38MgfAMy1dtHFuAvVvz1pzSNaSYVffd1mPGCR4BchfpZDVKmq7fmscvSUGomR9k4jhktR3aPkb9swh6hAu7k4Y2j",
  "key6": "sdZHzNGrW4gPRYR9zgNUFFgc9yAtF6YbJQAfc2MmVqGGHtXrEErDnF7vckiPsxLEE52y1rZczzDe1f3t4kWyYjH",
  "key7": "3hJww4KhnLaJQWV4kNqepRPCDfxzNz35t4GXX4eUzy5r7VYqwpxPMrFXPBaKDwfLvDBRSBnAyZ9GwETbTDyg7nbu",
  "key8": "3xcZR5MExToDFyyzqWzQCCSTNK8K2GoQxecYbZn3jBaWwsq9C2g9i1uuArM4c3QVnUffuAFQWC2uGPVaKBZu5AY4",
  "key9": "25LhbrEE879hS8xvFQNmNaV53iv8xPhQG3ZYGYahyyYR71rrvSUfLMVEgw211Dsyb8fqbbjby99f57QCkWfR34CQ",
  "key10": "3UZxto2ewGGBisaoBQmTHZDq3EcZS3NsPN2wPEyxnYKQdYtw1KYQp76pq8yM6pr1tvesoS3kvsBHvFz3Tqk2qYD5",
  "key11": "2BXFvTKo7su98Ux4ZHLNAbfMh3YHue7yfEsxNM49doQwLZUpcJNFZZ5eNYt6M7zcdfkU5vdMx4BEw6b1ymstYXCy",
  "key12": "25kd2xj5VCA86Le8FFhxHXTteKjXujiicRVYFWGNKYsT51XY3SdUsRPq8mEu9S7BkcezpcMjfjyWN2JL561b8KGs",
  "key13": "2TayaMTBpFMfC7XBVbYLtNVS6yzNM75QmbTybcKv2WamDrYmt9uTL92xW9Ma6DK3Nrd3f2dWUZgmQ1EzDZMqkr6j",
  "key14": "3hv31Do1CpvtpThwMaRmpAFn6hrK8WQjMVTofRDZqk5f7ARhtFuLHmuCrN68ES53jY2eZPE2RtRJ43KR95umSyiQ",
  "key15": "pomutKK7Uqknn6mE7PSBAKX96gBQdGKUnDZhg5drST9iSxre1N89QNSt4E8e426vjPMjaYgTQ1xbKe5zmLdneyg",
  "key16": "4ML8j9V8Egc9z3uAUzSkksYWVdRj1WZgK3YP5Q6brBmgfjBA3nrK45iP64tzudVqp7Lekhtt1bDiaXhv6463h3uT",
  "key17": "4R7YeLgMjha72hkaBngu9iaaNSFbLHqMbx23yrihZe4LDSD9JtAy41ZAiuZc5ZyMASiyWu2cZqJu7mK2zwT9uBiG",
  "key18": "5P9sKiisaKW2ogESp8aWnzSRF8EfmmpEMG49rZb6CtBRCcMgz9oWZzhs1gvV68kb8ScHt3yUeKNA3F1n9vuhGWMj",
  "key19": "3H7Qagpv3mi4zyPbMattHAcnVYtq6D6snDo53aGfMTZM2EZDBYygZppzHZRY5qfCQ4yicbdKNsuDgoWNLC4P8kQL",
  "key20": "3BZjaQxm85qJdXmmci72BRFD8mywvpowpLjrbV3X4me6Yc8JfjXyB1zXhfJZYbsZRdeYsNhAbWoi57uqrCzDNEzq",
  "key21": "3YNPp69T5Z8JWSsTYuv9xASdTG7JSVGfJ5mg7fiWS4pJZpHaVgDRKHYSeY1jScJLTA9KJfvCT7nkefbaaP6aVhbL",
  "key22": "5vnXmEByK8RU8whSLRpBqawqpzVMiyAcWkHWYiDEbhm5sSS7Y1kPMDdgVeHzCEtHmGBvFuWQNQiMkSudj3SNAPDN",
  "key23": "5eZ4YKZEzucpmQAa9BzvzEpG2ZHeKo3Z2PU2UPxufcZjC1S94Pef7y84rkAzpstbyGEGK1aCcXYGmmvRizJ94wBY",
  "key24": "44qEX1zMj8Vwu6t6R7ABuL2j46Ly9q3G7QCsAWwpgEJaw37tTsUxrvmQpG28VfPGHmzrSnyqQVPRb8XHpxh8o6fi",
  "key25": "3nQGHMSLAGWx27JHy74ePG8TtxhtszDWpR5eaSmvMaZ1mN6KWnJ51msyQQikhGngsr2k4mcDFdLfFJLXKC3SCjWo",
  "key26": "4m3D4tthMvqQjwpMpTKN3WJKN1XKwXSTyrHJDBLby7Vts22Z6TPAuT4V7jC5qo4om6T8542zLMKxW7siYT8Lbcyt",
  "key27": "57Szo6iVbgmbi2VFrm3fGf3Hq35kmYvnSrmz2QnHuBzSng9efW8d8Lp3gWVmgLupNQbo4abxnJDTF4Kydk2d6NN7",
  "key28": "7mQy3wfkjKb7UB4fSfy6w6htuDtjN7ExnfEDySVsXs471VmGesc5BELY2W9bizZZTahiAGmX55SGQ28R4R59Ydm",
  "key29": "3e8xu4QiuK2xJg37hdqAmMn43nizGG27dvuAB3ZxVtc3BkcwBKQQyD6b6R4HWgXK1kpdUzySKUqamY3kJ2mR8Mev",
  "key30": "2npmeYBdJ1ZkC1WWfPawP5vHmPT1DeTLJtfEqV88kBHBggDaaNsdVGseKzJcymt9XwWVHC1nLn3LXwjYhxrLb7gG",
  "key31": "4qqxaQcduVdwfBjzxpw45VPtBPyAf1gRYLWS7G7k4ZnmBiT61WuQw1dibaHzoQpZyKkQQPMvK6PTKX2kCjxRqmCs",
  "key32": "2H5qk3v3UDCCUm5NU9JQpp9M7X5FMTD8k5t7LDyabptQ996wh5cBZfFZbjGVvd2CEGuWPEHLStgv45zBwufo8siz",
  "key33": "67X7XPwAjcX8NwLC27QV1onVKCAUywr7iyC7gPrjvakKbp8LRwP8guP3y6UaZyvVHGb5Zv2HJaVp5cd5Qma413Vw",
  "key34": "4yjJQXkwMmWr8zdwhfo3BydQ3e9oGXzWvnhP6UEK1UHeaspEnjuF6kcg9pDw8hF8KtQRBdLC4HE9fjfpXN398f6S",
  "key35": "64mAtuQW5KEc73KuSwTjNtVBpqpBFr1A9Zq9pdsjescd5PmY1W1uAiG7YBpTDiCXdsMcSG31u1imF4EFBhqYe4K7",
  "key36": "94jmQKWKeZADkcfanjoKRTECnh9zc4dAW7fcqciW4qUKBG8smx2Er9eXyFu6YMRd9SSBNFQAXAiivxPqj6FPzf3",
  "key37": "4UDxBf9RLASaiGZxsdtHV6XMJhD4heninHvPgU4vPfuXxzjXthqu53GPYGYJsdswRguDRao2gwGiSRXu3dh7vbpy",
  "key38": "Pm9BZjxXGS7RbfNmXvCb85hucUomp9tkNcuyB3RshEqG1WuztcRXoMSsTTzy6JzcM3GbZkR8NVQWqyJdmtusQAu",
  "key39": "42w4wtjqyWwRUhDatczgNTURDdsaa3u3E11NUg3kqbNU7QdfLLm5ySG9MNQ5QYv46gXvAbez2g2T8zqeZ3iyPo5T",
  "key40": "3bGdQNHCrnDfD2Rbhrd1cWB88tEjKWzLQamjG85n1KhMy8XQAN4DNMxv53gGQzzLDzbQBsPobgGr1rra8nuf3CiM",
  "key41": "49nPC8LAt23bGt37hSpQD3E9ghn6RLa9t1kk1kGwpAg6GYoSk5qoJKhRfirRp3r8g82cu8csTdwMYi3ggw4qFsRX",
  "key42": "ULdHRVTPqUJtgHu33Ctw4V2GpszYimyNgNmeRyM734mdcxTiFuX6mmxGFXVQycZ9i5gQ59pnQCUBU7Jvwz7Yh1H",
  "key43": "2kaNjxfQnwZWnM9nbwLp9MKnTL7PFBuTD3WNfMHqH3Jnz89NRU6Q412AFvrNBW2eSyPr36PsTs9Fm4uyNrcGjJQQ",
  "key44": "252XEdPTwvTuqDEyEV67AJxrFdPHKrusaseyAoky4wEm9hdPJ5ASerXE9Xaz2CFdzTimL5cqgKgKLJs2hELQab7T",
  "key45": "5S6zFM5VxofKH8QqmN5WhdCGSnVXB8weX3u75H5bYM3FEKkC3PrD1ksGgZN6aksNHdM7ZCT9cNAvkrSAf4zT4CDs",
  "key46": "5YGfzDXqWyRp9x3PBVSUZAZL4BM8nKEgWY3raki4c1L5nwzc7ww8WAdJwgjsdoXLLYbcksEAYDfMAJQpm1bVbC1o"
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
