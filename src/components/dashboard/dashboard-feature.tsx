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
    "2L85Cn71FW9mddo4agH3oZzmDVxWoLSZowaeKkXZNk4yntoKfJgWRQrYioDY8XkNfMmvmVUgDU57wozVurYJyWGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4an8rvcCtp3kXq9pSV8XueSWxRSqRoSaJhoVn4zFBHteBgZstNyScwVV8aq2KdRgGLMNrgYP3QpNSLen9P6WqWYe",
  "key1": "4Xx1ZToCaJsTMcjVNAXZ8tQemrTMSChaUj11AiV9eGiVT61pTB8opiqM7ADg9tuhYmCafmQGnAoN6uLgg4YTjxge",
  "key2": "5w3J3MJQdzpDgnAFHanCDygf53XTPVm36UhwVR6DySVH6XNMyKwwWMnXsfqGh2jHch9wBLHZvXn3GDxC8rgnibJE",
  "key3": "2sA3NRJLkjbzhEhYxoc1LCdv9zincU5Vbktx6dHAFKX3akpkyMZAzM9LEkwYzPDNM49bQbwmEqmgMyUDBjjHGa9Q",
  "key4": "3vGoVbqifsLN9iKpS9upbijBrq2QFgBQgLgEF6dNoGUm5QgkzV127emvXQGaGdyDfo8i53VefRHgfiN41E8jbo7d",
  "key5": "hDF2Z1oyVd2wbSkkodog6HiCX9JhyFNnUf8KKMe4vJ1Ds3Fqy9rMTiHcmY21eytVajPi4qJ42aqRXaWdiBAhVmZ",
  "key6": "4vJc9md3UqRbyDqCVBs6ZiC5Zq5LEhAoTAXLmCFvCyoYgdYoTZyrixn2AkMCJaCSTo6qFnk14tFmD1HboKc3DBKa",
  "key7": "54JDcdwjLXouwyPanK3WiHpCzmLaLUFy51yQtGkRmETnXM74ce1ZE8217Q3XbAez54DPnKLxrbfpwNyNMApAXZez",
  "key8": "4FntMxYbyMkstXAwn9MqNTmwvBaRQ9bZEBWJxEfumjHUKmVQsJU1BSeg5poTAWu7xqMipVmaCbhgeWpQXafbzMwZ",
  "key9": "48ZAExQHecXZpwv1ETjFaam3KArxaBFYfH5pseZb3h2gKibXUyfgm51sGAb7VGATEryZGdvwvGZExfgBgZAMdDev",
  "key10": "4XLc7rrqpJg4MZkFKrdhXf6uNB4ydvZypxZz3fztuzzDcqRJz3C8LWgVbN62xYPM3S7rk7rrPHHeXdJ2CjBP8ykb",
  "key11": "3qxrkdoD1NofShhqqiM2iRpkCJ5cCsJtMtnvTCTGzS51EUwnipiUVhMD8ZsgJyxgij2k7ziJqATqHvzxdtid1LEz",
  "key12": "2fdYtusXJgpRqQkBS2NJFxheYCQs68tYbVFWjjB4rCEh1jAAWEGrR7qvfxWRvRYfAdeCHWhkKK2tQyxzc3J8MG83",
  "key13": "3vyz38wA73gD2fGzYCNiXMPEE8sPpipYTSPt78MuhA5XWY4Behe8TThLgxEJGd842ysdPQKzFcwCgekN27pdPHK1",
  "key14": "5RpxBLTYSUPWNs9As66JbHsGxXwuGoYhLGLxMvHAr9PVZdmgXK3fppxfre7LVSAqrVQQrk3GB6zhh3mS7FPR6KHU",
  "key15": "3fLHxXFZ6FCM1wsG3iUzDKLRJLHRhdVTVRDBPirTinHKojD1XN6gpnDfNC7koQ9eTVH5NqvrLm2JXfALHxqGWcJa",
  "key16": "5WtqTQHCZVXnyvV3TPNkut6TSqLwoCqhrG8wyKDwFKsCbbL9jQmA8msD8oqH27FXG6KPHjSGW21LuzRvsWB4u6wP",
  "key17": "3KgTT147ugW4jXtJ4MygZdRcj6z2WeTJPzGgWFPnP1NMJNkq4BGzym57wkg8cFU7V39ebmLWRQPgPq71PMf7EJVF",
  "key18": "5goA8JHVTqzs6LTZf7Pw3AusjRTbKgpW3xbPPo4idV5w5XRTDxJaiF6iwg1MHr9KdHexJogT1BiHQyrr47UxvxEa",
  "key19": "2UN6tE6dgd5SrQBMfTLcD1N9gxTZJXiRXyMWtp17nynQ3TSYc6VjJCPeeqTMaoXazP4Hh87J3Tk2xpZCW8Z2KLKi",
  "key20": "47u1vuaSFHpGoYHoae9SAbAC4qeiG7LciJycSt5AZM8WFWhzS9mJ6mTbkZj8sSgdRn1jHUj1GhCrsZfqUE9uGvvd",
  "key21": "5v71APkzcNXcVA4et25N54cMtDqoSMVKx4cqxdGM7M9u1qv83HVHeEF7GGhdrEsvXoEnmt9iQxr4xrYKBAcs9HTC",
  "key22": "3ffmkNktgd9NzNDCiagjK7V7TgnYKd5BVf6uFYdL4cXN39RhfCh2rAd3DGscvVx4FbmyzDRcmvmvVpUeHjUohebB",
  "key23": "3eYwbZ2sdibpC23cBxLs9dzm3GZibK9s1GRgVKUUCBqFWizxpu8STtWCaDQUskNyid5awhch8FcJzWGcMMG9sgwV",
  "key24": "QNmyREzvjpSDjP7Y3AspGgCX6omTFycVQQ9nNdfwzZ2JffNvNCzsehEeRZuS8i1KABYesgoFHkP27orGSYDrLGH",
  "key25": "63Vg32LC8v5XTztRNrpywR14J1PtpKeSa7cdB662uew7szvk7bWCXjd4xNkkRfcv2j7kVtxgLGYVPcJNDJ24VaEc",
  "key26": "33QF98iB6i85XjdTPozmsXzD63NCtn2QB1j7j3hrNnMQduXfJpcLSUmuvmGBPXH3DWdWoL8L93YQn64mNTr22ZgS",
  "key27": "3vp5FZ1t6XkcA6uB4uGiyJR4oi4sR65ScaZAh1UpYAsN7oja4iebHG4DeXTu7dmdZhjiq28rKTdD7BmCs16SJv9w",
  "key28": "4QFdReZVfWvAsxMvB5f2ucYjLRsTLeoiUw4iDyb6y2XmonLhnHkbbUDz2khZgiWiF5LTE7ZkrjrvRXoPv3VyKnBg",
  "key29": "5jmtGoTMnS5kmZnoqVhvMKjdcp9n7qVJMEjMrnjfngmjfFM9D2i19UsSUGy5DqxfQeaQNavqQN7Dmc3Uo9PzraCd",
  "key30": "b6C7YkLiAxM6vnPhJY7wiwFYwbh2fxTwCKvPFGmZ5AnUVQEd5PKRGeXVw5BV3hLqE9PeSbDC3Np9vkJ1WpAarUj",
  "key31": "5QwJhZt5Wk7vhR1BHY9MoZy1bXhX2BrK8gEzwQpG1WMpGLJc2ojrjLuqTmSz7DpG4ouVX76PHMF4Y6xb3wDBU9Jb",
  "key32": "5uewqv8ouzRtjhy3oyZqrhEFbEvqC1vGEb5LqYKe9PjeHKP3KjrYib1kBTBJL55rWyGiudELSiMbovkz3T6WN9EH",
  "key33": "4o1yfFgMeWm68hdri8HdFN8BvKcPherB4ge496W5jvdxu23WaA14YNjrYL7cRW1j2fTT3p6hg1jq7QR7mRkFaPvE",
  "key34": "5wpREVBNqaSx6wY9StjaSU5MLdojXQELrsuaq4D7MCwBcxMuV5g9c17ofSFKoVyHJPmd1R9PLqP3q4Ka5g82t48i",
  "key35": "2EvMXsgUztt2Xuhteoff7UU4wzet5YbnTtLUB4LQxtzpYnfGgRPZr31aNE2AVwKw8PbDgf3xySuyTC7PHQzBhXFW",
  "key36": "32o1PysDVPBu138mYQ4jZ3kgKHYYUQXUv94kQLjVshaMoogFBh2quCCezQRke6ztQkWKnUEfMPGF4QaHaUDUn9dX",
  "key37": "3meii8AxnAZSh5gDdPkCc4juSvBCMPhFRebjxFfmj95X67W75hvpbRKWrYts6D4soJqnZYQM4TQkV8GHENBQxTC2",
  "key38": "5S7HCCu3MkwoWBe14xcuYA7enzMP4PBVEQnYxr52e1Mw8uAJHNgcAbxieTybYCzjeUJMMdTMwkNRX7WuNr18obUj"
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
