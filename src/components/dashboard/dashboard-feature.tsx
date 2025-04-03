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
    "67rnfdbCs3J1if2oP9Xh5q6Eod5cuRAsMYeFz5XkAAiWPaUpzfFgQyWDrpmxQkYiChfYgmzEarTsZy46Hds7Xntz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pczPFeKBdJ42YPSv2RzaBjLEed7mKf6g8h4Yn1E5BbHjohJJGS6HqX7wup5F948KuP8NKn15F2XpVVnhYHk7h3r",
  "key1": "5YB7mhVVxpAHk8ntCf4u3iJtSMRGpE168ijKzeivPH9ejJV8ZGZwhYry6xPu58ajLgF96UmCki4kB2ZfM2tt5Pr1",
  "key2": "45z8tErazxfYNcoHf8Q11kkd4vMPPAGuumaNZ7eJYeY8HuVRiVWH6VWaHHthyVdpLHP2HAqZSGbVXjZMwUgC1QRE",
  "key3": "67rY7SQj9CD8rtGBs6GN3ShRMsnxJQtMRzwgtimTux39hHv9tyEWE3P4dBRP8qLWdMkSnkxtry3QpyFAuBxqRuHW",
  "key4": "2abZTHutBTU7aRyuuWHRQsXAXaAreWkxgWYNVVLpADftXxV4bEn19JMGsQHhRLWiqP248rHNBMaCdxnAPff2exqE",
  "key5": "51ZFLFyREocqmDdLK5s1s7KYQu4uydeAYd9Wpmajhhdj4s2c8AUYGL8RkcMMYuuVeo9V4Xts9mW5LvEyYZ2zHiMs",
  "key6": "CDuZGD8RMTwfAefiVCe2TJukskjRrtmFYpVBMvVvZ3tR3XUyVKr5CZxmmuabAznQHSvZRCiNpFQRpksEKCLWWTS",
  "key7": "2CaDPRRYBHKZauiadbmYrTJvCi1vZ6jLcDX643yjfGBvAVLWXmGS8L4FHcDyNk7Z1iSgq1rH83VMNZn2sjx6wRnc",
  "key8": "4x2ZdjcywGzEbtfYzxyVQiv6dDV2XcaYW8R7dnvBV9bQiURv2uYDJtp13W7VMQwwqtEZKENkfuR4ag6Cc8uPuR1C",
  "key9": "5RobANXxpWq5m92yWp8RzBLHqFmkjiFzAFZqH4Emtv9W6gmUxiDfxDoxBkvEmEkmBsGmJuLEjVT19kM49vZK6kSA",
  "key10": "4YRpSpvkaG5tCKX3KiiPuXrZxqPJsrqL5VrP8Tu3hNcYFRtzFwHjpJHUBDpWWSh5MThnY3UDLQoEo1ByLQBXGCey",
  "key11": "5kqga8jYYqHQWoTqLNmE1oYXLpiZeiekzfQuGNS7kCiTs7dS5yYmhWEPiiE7wV8T1SHW4rZrTLL9K5ypqumahuJk",
  "key12": "3D87XjFfqz7CgZVWcAEdMAAPTDa3cAuVFwURkd8RGhXUkSQj7q6eM1bLQghQhpUezaCKmLZoQu1fwz47ReVVBYAT",
  "key13": "YursdXYoBU2dctrwgiZk1Peq5Brgi7witjjQW9Am4QP7s7YmqkgFVKf37BhdeVMufZMYa4HvHxvdCdyLQskACPk",
  "key14": "3nDRKSgLqbmbZceCGN9n4JRqcz3c4qRMNMExbQ4wk6ucFaZG9MJWxxr7q1VrzNTErMdKGefg57sq2xRLt1BrYuxG",
  "key15": "vn92yeBvg3GjR3sLdBMXrkLTLt4grx1icybF5F1iUEPQhGcttDsDfaQ3kJxatp5oeCtWZhZ3WZCDd9Kco4a1bCX",
  "key16": "Yp4gDQRnraQ4BVhTDd3CFdPDKLNjqNPLNn32xctyKDPH4pebFYAxVkn6cTZdbCjiBehdciapYJNBRvRBatMaHYz",
  "key17": "5oxXkpj3nt1y1r4uA8oQegMLG9iehHEZo6TRRe2wuwAcbfTEkdfaQBvxAJ2CVpE1DrwR4fmcMyrQf5imZU5PzoXW",
  "key18": "4VBYSeyujCUpEkqG58Mf6KSef2jHC79DCLAn6PtMsjKydFABdwfuwhwpj9MKJV2tFacraBCa9NqjRh52G5YUABfJ",
  "key19": "4Gi13mvoCPzDMh1GzGg3VKq9SRMfb8dHqgBK7vTYZYbzCvNV1bStnL6pFo9g6dSqeQ1kUxY2nVyQDZdEbop34g6a",
  "key20": "3WnbVAmmcpKLXWnZjyB2cTmANgNCvFX24YHL342wfzwTVWCs3PM9cQJMeGXi77xc5tzB72xY4o1ZHCbWzLruaKnu",
  "key21": "54538oqZ6E9i115fzdLxnWVAqGA8zesDLhpg9SwsP4Ejy6H7DnXNbB9yg8hxtiACVWiodDqjJd9Q8f2HhfoPhrUh",
  "key22": "223p1Ua8Vo9gPJtxQFuZapwufwz1ePrc496tDTZpKrgJb5rmGsWXLGzgT967sj2a5jMdrq8bLWEqXsqFNeoTtzYQ",
  "key23": "JxYxEoaV1k7uJWSzM6ML4vyjzJtXawu3ZgBawTzhmBgQHGHp1bSRM8etq3tjnY9Lw4v8f2dFUdwydxsXXLZhm23",
  "key24": "456uwtHmqyaZt6z6SEfbQLNxT38E5VBFnoRCqqkJxQ7YLsKedUmAVKXCSPXGnMVm3gdurymqbjdViF2QbEuxgkDr",
  "key25": "5DDqhLPyRGU9o8heq6141EiZQjvEojye6JmhMVjxEWMpQFp49EQgqNbr7PWgvR5jjdkdDopwQ2gHvbJADZhDRQyu",
  "key26": "45ESFRwySF6fCjdnVnUouCENHyDvjfDXKux33L4vvWmG4v6wZiDYUzWRAFdC8y2Jd5NJLJGLX6QQNHkgzXCqJodo",
  "key27": "63rST5tNUWrkgHLeHjYBvbh7uafkxWKZd6iUVYjXUJ2ptjyS1oiEU6PGe33AenWq8fSayuPg1xj4ba91mchtsfud",
  "key28": "3qyARfFZBpQnjMJtbDn2pf4tkxUwVc5Xm2mTvaSUrLLBnFCuD3MHKTJEXYpSMGCVD6USiQL3kz1uoa2mCrM1AQC4",
  "key29": "4gz6CACbpZFMnDCtqZkk5LYx3ecS9gEPRLWd6qFwNDxDeXybNjStXmPbALMv4K3GdEe456YTKVmPxdtizyxAWLDa",
  "key30": "63QupVFPyL6tTcxSQCASAGAnzsow8YgMx6V7gXTM2tmJY4ng4RDsA3oBeyGiHNrnCEVfXkJyirGfr5tcDnDcPy6T",
  "key31": "7BSJWPKfuTTy1KtUCakGNAHoPFmLRYp7dzudnDNVkvk7Ys3gCvS5D9wzuVWNzFGqNG3RxzNDCUW2Umk6ofD3aMZ",
  "key32": "54qYTDabucx2YYk6QSEETeJuRY5qrWodbx2narTf4PS66DZRZygz66pgoXpZ2KnCLmRKEJooNHk7ynZsUyFzSDtT",
  "key33": "2SCztFkZEA53L9jrzg4h8d6viYLfZdPmgUXnFVjCLBEDUtDdT9EzCW3cdpkDhZB8L9wvCx21haqz9ALKoLSV1BwL",
  "key34": "3LTuFQJLRm8tGreDC1Zh6scTcgQGui78ZoiXiCWRpTVrWLHCNX6kpq4b84DWkuBgxHGSGk8SZmV9uXPMik1CifwN",
  "key35": "29hDHz9R5Fh7HGY2H1zZugoWN9tTXXiXnW7akwraM5KvgE74dzAWN7KE4pgbXv6u7fTLeRE2ZKvz6koB95kLe6LD",
  "key36": "3umm7J3fZCSpFdjvzBbjDqM8KZXbDw8U7butoH11DzaX2ayj57uQYER1YQV6ePh345B8qUm9Nh8C19dJJntcyMsz",
  "key37": "4wdKae4Siem1QYm6BY2H4N4xcbPvkFiuBNP3YCjmRKNojLm7SYxfHLFkbLefkCCCpdKdQBqxyXvQS5YzxuqNqfyk",
  "key38": "4hmPp8fYJGX6PeSHqzV1nMENethrhfJyDqb4SP9j7fq9AX4qktMVvK7hEMwxc6Z7g8i7h6hnNW7YgqaVYNUwmWFF"
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
