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
    "5Dkps2J5Yopyq8nLe8Fhm7UdLi7si9ZpHp2DoMTuyzSLjaaZUTqnZFL2LxVS9gQ5eKVPZEUCNbrRyAAXrnXSrRsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61L5nYD5sThh8btVn3Qb4G7qSBVirbBNQ7dMpzV2ihLo8Gyyfkma4VxxzbZgFhJvS66jYaPkuv6WwgpE2dXEK8SW",
  "key1": "2HmWmLuA6abswuFnWL5vPTsuwapg7Y7sSSf3JtkfX6AhtjabbYQwdZZeHr7QxPeLiUgJ78g45byvEW2KzUKxAEcg",
  "key2": "3PNsiS2XE9xW7qYzaHoCxvfstpq51aruD14oc5dWdnm5Vxo9kUtzS24SV95oLE1kuCLNTtsTyfbNkDLnCdkFqzPX",
  "key3": "3uea1vchwXZ5ykoRmtN1eDNRi5jrNuhzuXZQjFoaWWXUQGvPeJUHpeDunBhKq4Hnwkvb3ndDRpXx1zYGXaCWUSgG",
  "key4": "ZWJsGPVrfW4HCpFhKtn5vSN7FH3QFmzkXpAreufh8YHCDqG7UiroKbtqAuvcsDNfQakSRd6CCs21bbfygFW8fkz",
  "key5": "sH5MuiFcyEztrhDRV8DFCjAWPyx9G5wzzFH9Z2e8uxGmHY45DQzmejLirLZwC3XBZXkCsaWZkPtpoFWGT85wibB",
  "key6": "8qYv1US5zUU1MGvAvvVPmmMpD84nWHxsDVhtBEXGSuf3XzZRDRWjK8utd63KRhyKZpkz5wk93cmz49t8GVEGxVM",
  "key7": "5GGeYjKEuWXE7JYHQp2mjhkDgHCTnwsT5VwEct3G47w8bggucbS7WQfzdzrZniCGG4rJWRzHzytpwUmoi7QF9SDw",
  "key8": "5iXRVTzRWvDCTyr7198DGR8L88kTzuACtsyFjtHwi7E1L1NWRcUhtWkYfT5KQnPqEWbuhj422swNxq9SWL99vUS5",
  "key9": "5WL2VZT9ShLKSnBefS4WkQVQP3pGBpcCnRsBsiptcArtA8xkG3TKANMn7P9DeVqLBvzvYcwYpVrLJbvfMAUyBZZk",
  "key10": "21yNCgS1kng8HPJkav2YCDc9JmHbKhu44gPaySx3S5Xn5aA9ourDNb5Z46nDr7mUYUQFLLmJiDk5wpEDE4cTGbu4",
  "key11": "ZkFPykyTxMLUFEPonLEAG4JmH8Cq7j3zkHuamvBV5pA7gVbtPN74mmvSqyDCAsqqo51ha9Kcg3zv3zjNzLqHbbB",
  "key12": "Pq8SCyhDVywbHi7XeZBH7jcKq6XMpTguwttTGpWENG7yYngHC9RsWdjtLjiqQi5rqqWxWcBTbeQ6wGYEc15vrEg",
  "key13": "4sXkeqbCuWFxrmwr1qG9zFQ5UsKf52jhW5RY7VBAVCA4ZksyNYCgFBzU3VKaRyC9tLUuRKUkvKJ4TuJbxvviouQg",
  "key14": "2Q5CmyBeZditq66iGpLErp1XCZZss9r4GpxzTDE5cdz6cZaYFMvUvwc7GxzNih1iGPgKstybsMdT5bDsRyRReWFW",
  "key15": "2XrdyPZtmZzJBRrLRra5p54H4JnqUHt7BgvEnbM87uxLv1jEC33D1ZoEBVU15EuLeneR5PZLWnBXZQF4tsnJqFVK",
  "key16": "4nAzhqJvCfHwR2n3fdLPYuQaFoVCsjc3ZzPLbBA4Ud7R2UXDmkRDYLq8e2YhUj9kTWT9VM5mHqcHqkFNS1LRxeNQ",
  "key17": "5xHXzLWUYxuXvunGH1L8ngjA4Tq6bdQMcEpPu3LJDYwnyJmpBm18XunWwM8prQeo46XAkQiH5idAZ8HbiCnrvcze",
  "key18": "4GpmbTM4rUgaknVH5H6Rc9WtpsPLigFS3UZ6jPcBNqP3fbEThsEvT5qWVMjrEV89L41EZBcbi4h8QxQDRU6uWdSP",
  "key19": "BGLxGM8Pkzr6fuWDZZCXwGH8J6rmMNR1pXioRcPC28bJhjmRsTR9U7SJf166fcMZRMkiuZBNyn2vMbVdZeApo8o",
  "key20": "5vv48EnFuiD9nwHHLJxHTqmwB9BbfxaKqGeP93jhGF5YpPSw6LgRZcv7RGnBfGvX2f5wznAH45xY8qHD8PRYKeZp",
  "key21": "43sVfo8FtzjLUqTc9nD2kEgQ6gVzwp9Ax6vSuYdpfBaVq1V16Y9QxERt2vtudBH2msYS3S47gNupyHr4KNWdcptC",
  "key22": "36Kj5E8DYGrNzyDkE6Ump4whpHiQV7v1nwQfnCDvw52UDMWLYjQijJ9mqUDjxzEFRk132zgqaxQB7YvHHYPaDDRo",
  "key23": "541eoEYx6umU4MhcrMurQUMmFiA1dQZtoN8NoGvbAHAGcaJ5WvcbinJGS1o41U9Sj88UPkrwqkX981VsZMLq9tFq",
  "key24": "4NZUnCt2uiuWUxbpnqHkU1sMrZXtbCEytPBM4jcgQbXVNrNEQwxW6qMyKMFPvhMaukjuNizPS6a7GbGVwK6ZP8hX",
  "key25": "3GP4DTak8ZEBdDfa8eS461t5bKhg6b3bVxANAPMWSjRn4veBaw6ToN7EiHSg8oQ2VFgQT3M83ssjifYZhhkMxFAQ",
  "key26": "kzF8KsYfynaXuXkyCLfuPe3wXmaP8CWkPDKTttfojzSBafUDrryaZeT6GAjCMj3WZhSEWYHeP6kLFahZ5kxnqy2",
  "key27": "32LCPjuNaLj3rEdXXhKUnPeCzN9cmH6f3HWEEGEHEZ4BssFZLq9UcacVxJVviwgG3dJn8D5JxVXfwEZmhFRGWwrc",
  "key28": "3DhhGf3QwsJaKPrtZwuB5NgocyYCZpWnLoH9nWjKrTN9QrFWME8mmeY3J9dmhxfBQd5v7eaHNURZQX5ygnunnwXs",
  "key29": "3WZUxq6haaseCJttPLKDWXpqJr2mzsxEz8dvbPRWKVuqS6urZjmkBKjmkN5vSb9uJ5K23QbkbXai5hFAo1Hm6PHw",
  "key30": "4C6KNNcQza1TGSWvea3EAuUZ9Hntx7skgsx6aRfvq2gjCLgRh75ZrUJJ2mKVe5xyagRyYLpAe17vXSckGx63rHjX",
  "key31": "4GURcdULxH9prf2NuPv2a2KxHn4DAYFCiu5WiaYFF6CfbM8WKsTcpJ12Jf62HvDrDX9jUc37wGqiwBTaFTi86VmU",
  "key32": "5hVkGvn4mY8oEJnKBgvKk8JdqmArMhWq3yAYfXxx6mHCRPzGqdMNZ2uXxqhtWs7bP6GZGnMJpb4rFAAvsTTnSz6S",
  "key33": "2HKawZcADwTtFmi3XaKjF7nHZZukRvvkrdPcZ5SGfaRXyUcqyE1i6kaMRzukPaXAX7doeN6AEPQmfGLiYyJNUUCc"
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
