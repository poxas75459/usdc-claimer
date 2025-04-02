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
    "3PuSmFEvkMbSVV6bHH9GiDQ5eMtZKi2LPViP8sKwh7k1Q9wuvnZHvUFjugHoHkQ8fRP5MU9ufMrtfwvKCxrx2ySk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rV86ygzo5rbyz6BF1SB3HBSrBMVrzKKEUT1a62ZiGi2phyuJGSWkjhsKz1KiS971M3sXKNwMnwHHpG1dhCR9Fac",
  "key1": "2egJBRpmRjk8xc3nnLRzbmZVdfe3EbPRDVAW9pLWUkhRMwywMAeXcLdcZduBBzk3G2jQj7vJwRMa7tjmr9eQqnMZ",
  "key2": "YJr8iZpurbr6HjrSJCjvGt8k6dhkaZz5FVAqeUSyV9rFdLLt9WtTdS5ycUfN6PEbCgCs3HW29rRwm6MHfv2YWcM",
  "key3": "3wxDTdYpoCUa4sBEeBwTLLfS7sVSnu4wBtkZ6ZzrwChmAjMUi5cUkPLuqr5CBstcuLX5FgGZrHW6Pemuf3958tzn",
  "key4": "wN3CiYfzEVHPLpuJEc4ohZooywskrM6fXeEuYEGftjCxKc7cJuzCKG8LQ1f7q3HyXvQbmxPx8qf1juPpydgQAMz",
  "key5": "4SwLExZfoo4SbtpHZMx5FAwPGQ25S8hBvUVUx8PscqQ6cNW8cjCL3qy7JvNPCqZ4xX7PPxayatxRpn1PtQrwgi1y",
  "key6": "2rtWB9bLYGxieboEp6TnNzu6gZnk7G7UX1HgNEJkVkfjCCnfiQNrA8T4Fvo4hJ43wAwWQmFk7iRV7HT25nTRnbvF",
  "key7": "23hXSVkXB3eyix15WEqn6RG2C4iQeDhNrUjyA87S6vYdGCUQCK8fhhyovFYrawizowPxJ6tGGiZ7jQ1ZyPxtMTsM",
  "key8": "2W2GFbMyEKdhqWQzMPMdhSajnajSPGTCynB4G8CxoySrAsioime2FcD5kEkKLiekE8XgcWu9Ly1AkD3BDcaQMAWJ",
  "key9": "3uWCAVXNYj9eByJeR847zPv9bPWCtVjWRMZ8rWyv5bUXQpzHd9spua7zeemuh5jpDCGD9SBcEeMKr3AaR2YKG7G7",
  "key10": "5shxtxTyrPNoYgwMnRdfER9MMxjSxgL944MhaEsxtGdsygSkH1YRECdVeZYeUJeBQv1w36y2vnt6U1A7JxvSEVbb",
  "key11": "3dEguWbxWsMkaQypMqdreTKSQBeSf14ucghwTjxUK93ker7Y9GdDjCEt9uXauzhCozpzjMbQ2yt8zrqwQuQVyFYJ",
  "key12": "2g7kHvPEXRZi245FPFHbvYtb47k8qa54LaNEmuPbfFK7BE5eB4woWTUdan4sqbafaSM97AjgERCzQM5qsrjfXiQV",
  "key13": "2gQCyHDz4bZHexDgj73d1tccwHmcA8GTHtD2uHsrBqWP22JzSvZR6QAkN5epHNsQkAinQAv9pjuesvHoB4DBHFor",
  "key14": "2hPggaRbVGLvHoX2jKtYTR26JbDkfJu54NkgJhdPbG6BYdfgNVSKn2UnVVvUJMVYWmRPfds1hN9wNEh43QW1mEFK",
  "key15": "4WphsdBm5HwfgV7UBFSCCWbvdUyxGRZ5tPTCKfpsHMxufynCmb8M7yvVvEeRvffUP9295hu2QaB79Nn3gxy6nwbM",
  "key16": "3JQJTRxGVqkaZr3hgHznhYCuQWbttP382E9CP1kJ1tQdStxHJeSUmzbSktRKoBmUgCgQjiU3Fk6M3XVuXGArr5XQ",
  "key17": "4PvFKpbyd1hLJZbGJNV9nYPmyQffTv5wLvBVHJEujbaNBEUbNq1UL7CT7AiteoieuGDYUEL6h4mF5n7GYLvUwZq5",
  "key18": "3d6x6UNyhgvTjqHQmvJittUagRtVKW5DWygZtKQ1H5dEGeoEGWzm9d3jJSJ5hNVFRUCT7XvZp5LqLQafKBzP1NPk",
  "key19": "WekQfi3njEt3JBbcdePrnF5qMVLxdi9mjWYj5YUuFSjgs2JPK4JMuDaiG3WgHWNZfj1zf2HQVmEfSaJ2bUwtwSL",
  "key20": "5n4XghUmhBmuqW3HxU2SVyNZRRfpdJfLhoaZVxbuEL8QjBQY6cTHrZZskiWbswHAJuV9AYrk5RGw9XWXJjhV1gYm",
  "key21": "c8xAugcThE8HGxGwPG7uGGi5U7b3qiVoWTpkpYomFnbZFEn9j5K1Ehb6BSjBi7z9kgxLbfBWnDjVrTjsbhgwBa4",
  "key22": "4WoQzyuH7dBwNyFzgRDV4oGj2H82sS6mUvCzxbtuu4FbLLbR9osxCzrPe1F5UWsJMxqpPEroK1XJiQANF6W9hmWd",
  "key23": "63v3wdrTZ29w41magahqNDXHAPqW17uRzUNg7qsa7sNWRAWPMX8E8cxPaEiQcVREumtpQrmXzqq9i88YjwPfBkaN",
  "key24": "2QMB3zA4BKDLXctkWxZutmGpH99MtPo3B78fu5KN9LMCWik5jsrKux4zApEGdSjXa67iqjHxgfdizVnLHcRozdNR",
  "key25": "4BGdaHy73sHVpr4RGwKTk9NRFLCA4Y4EnyykiPajMxRNhX3JsB51kqupQoB4Ye6Eb9tnZczngFVScimwcgf19FSe",
  "key26": "3VTCDCv5gMuYQN9nSsWKizVvvPEei5WHE3ruzDc1XqQtJGeLBo2JujENkeyoFZFXU2Xo8RejVeK3gpXqWxf4T68o",
  "key27": "2T8utFoj3abcfBPuezbhP9UuR45qrDWJs92wtznTLYMw6JWfr54EynWBxaxPwwd1TMyBEXcNSGroLrTQtjZkAB5N",
  "key28": "2tHWST3Gp3i7tpbNu6X9BPc5RYFM8MxhcYwLsacAQRmupcHT2A8fNjwGgts44VZjWG4NFHyZ9B2jWqfm7Vo6R5u9",
  "key29": "4BeRspvUYpeA7amXYvqdssfjBYpfvGixE5TZdLSEygoYqNgRk3GbYonfKwPKeLq1fihbmpTAqqUkUAehVYZoCKic",
  "key30": "3NPrCcrsNvJqWFfFGzW17XEJ5G5itKrANKnBR6ZFh4HofbPZxRLEWRWFZst5p46XiDbPvKTH6Wir39tTQGixCryR",
  "key31": "r1wiBvmyhakVGSjeennqaucS5W4PRv9NLSYDQnLE4pHjozaMEHHuZbz5MxKZB13YmKmF8eHbDUKoCBhnFqFS1uf",
  "key32": "byeip4LgymZRr7GAA95ixKsyFqYcUfETwpnbD9XbrGCxsvc5WJ1n5Jpsd4dWtuQAZE92Dq2fNoCtK4E6TZEkbPF",
  "key33": "23jMHA94BoUpzgSDqbWvLBmu6G2UDbKS6irNiBjUg4PuBLxpzjB1UgPV72vxbUuaThY6YUzscx6bMcoMgw6P7U3b",
  "key34": "5MLXr5NMMWSU5a16cWFhcHAd2DpDkkMe3bQE1jVtcouDcvuTPesuJwcsBuSzH9yEqF4ccjqjJn7uUC3YNhV6QmX1",
  "key35": "5VcydLLgqFDi8vCRgZtUTkggPK7FFqdLW1pX1tsjRKmb3WBo6MJrV87eJoHiUCkQfYFAVffCwStPAL9hndqVh8fm",
  "key36": "3eCMNw92QfTgCXDY5x68qBFQuDGonshX78oP8c4hwcFSkEWDVA4yh2ozGc8HoS1yF41zPrvDP6wc6zh7HrZs1fV2",
  "key37": "gYwuvKdp9zXz9dPYN6QaWsHpoK7KVdSsZ4wgQmsJjnePKamxLE6HTbu3gXG8f1yVqKfus4AyZNjERBGqraNrj3Z",
  "key38": "5up1EQTUhSa41AkxdTX3o4rrTbxDsvqYCfoMMgHxu2fQBJyLHhFu9D8Nv2SFw6WS6iov8kgmpfiyNhX3uYXAiRci",
  "key39": "25g31RX1YH4o94deGbZXzsaurBAnSPiGwRsSdDQvCoFDTBhG6x8x2Eqnc1ShYE2K6kuQDY6in6kTTUUAdQqoTjNj"
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
