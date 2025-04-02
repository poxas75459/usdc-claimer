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
    "5Xzt8KGpdK7BbKU4jb9LfEFcu8eigXRMM4o754B3L5P74kKYCrtNQZNKHNGFxsdcUbQDt7wCTWfQKGrboM1riJN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5ZXthU7swAtx8A5aai8JoVw46AV9f2YTF7eJoM8tvWPXNad1yeCMV6tG8uQP6aKQCVme2yHKbaugPT12RNpb2e",
  "key1": "5LXhsqrybq5ZEmTGb5b2HuayPaAa2M7u8TFFfe8XzSGptJt6LdzAQkrVu2HmoBeLPVC3njwt96NzUfcqRzDxrTAr",
  "key2": "2pH8zyx5niJ4zACQ1XQcXmozszzzy712qKoxsNoQeHavQXf3EZu79v6giiVvkJ1vra7MdCJeaFZCp3GruXfPVvzx",
  "key3": "5Ps4NRmt2XmYiSMD7bZQ8spieKUH41FQ7To183o5k35KCLrd1jVX5ErsgZ7yrnUFNjjPhgUQzBz3CsDWmB1RAT8i",
  "key4": "n95Kqctok44KLjFmF8MuEFdw1JgP3qUHuwPFpbKRVzBBYf4VJKC21m9nvXhQWLYJqvPPpBLzbz7Mk5433Cjgw3H",
  "key5": "56U3ig9J6fTsDbg57utdUERE2cmUQCaUpiDz68vtjB2XMRUVtUm2P8DWvQ6jWvk3swrzA3p96bXCyoxEF482UHCM",
  "key6": "5oWrzySndi54LLHPy4LGdiyCEDwBCKrTNboqXeKA1BgnFS3JVuqXNA1dYe21YeyGWtbeJtuGv7XwRatxX3fxiTNP",
  "key7": "23oVdxJzMCGK5pbPh5gU4i3a13pDZ58F18GNZarUnACibP7kvBMQut2Nupy3nPmap2imKfyGPudAYxxPEJcPvXeK",
  "key8": "2xeYHxjYxjeerUknmxCikJSPCj5Ksky52n8PSkqFty5CTdCT3Jsc1MHkNN6cuPL9vAXYi2bBNq6ynATwicYb6P1X",
  "key9": "3yWH5MgiJ1QjyGGBbsyVHdZKwfbFwpqdT2VwA8NzTJdRWNwHvM6k2yA12Pqv39jKRAhGuQ1Vii87j46p9cxjz4zU",
  "key10": "5T9TKkczuga9Uwx7CyuAuHwja4K7PjdrNBwbQzpSPjuD9vwi7EERZZYUGRW64ZuSG8ZT3R1vwMCD8pmLCPobWN9c",
  "key11": "5GEHPk1PsJyyNA7fBQ55TQTAMCHYrA5bitU7HNQa1fq89ruEfKddsUKDURbGPhfhu1xt3JM5Q5DS6np4eqUvuEdB",
  "key12": "mfSpmVB7qh5omWLfne5c1mdnN3ujVKFfKLhKgFJYhvG4wwehXenBtJ28HN4mS2CoRQq8YVbtaNqor3wdpd7Suwv",
  "key13": "3Pk4gCdfFrLen4LSF7j6hk7sKSsNaHZZqFExp8AUDnS9NZXS3AKqTTrSFGkVfNkGEnmGLzuoZYF2Dv8RRhZuqJCX",
  "key14": "4qN8frWxSptyYyq68kpntKnsoXYTQLJJseATYDNo7CSoxGnHfWkQBoxWQ2gPabR7jEKQQ5fyraYLHpBXXAKRvqYh",
  "key15": "5VPAnkAx6pgsqJXG46W2ijghNWhFHbwYDMRAVABmbk68emY1NKVKymxzgZ5FKe4GLMh2sGrmLEZ4F1en1YQUWsZG",
  "key16": "g4BAP99py3tJYnPD1YX2TrTfRQdpnfELKQTTke5sPKCjmjDbFeJLQKGv1ssvVtdQiuZAZ6RNr8FtbSwQar5dmJv",
  "key17": "5FCoGaMYjYWVKdjqv6VvCSht3tMAuaSCH8A7yQUstktkqabZqtEQkGDb3v38AGWjYtHwr9TUV2W6AZVnNGW68Emw",
  "key18": "5rvkjDzKcdVuXzFvdDMoNAnN1tV8qu5EXdqBTdfHZ26xxkzgPPecUWLbD9hTXKFAFMzdox4cpJhuB3BV2qUDT4X1",
  "key19": "5SzFgnCu5MxEGhivfEYaSyMj8VXRVcThf2e1vBpikxXYnQB4Yh4vi2TRhL9iZDVCyAcjRPSZ6DaB31KQUcxh7YSG",
  "key20": "46uuQ2XLVJAZuK2jkUmJR4kyeQRFvGZC1xAgdA62FhE82ebDRoMnVpuG6rrp2s7JAxrryhwVJdybu6B9RR89NYAU",
  "key21": "5ba273QBzNUGsCYCWWLD6VT13RZjBXPUPj1ZT54KNnV1tmoZhg6S5NuVPE2fSVETUsEXGCjJZVQhqYiothFNuvA9",
  "key22": "3rjoa9DDjwPRMNU3BNumAqz8v4JQjorPuBq2HrGyZhgjCjYsRSeDunYmZRXcGRU5C8QQJsXhqMZXucDhgnTaRbPH",
  "key23": "2DtXe3TSnGCJsr7uZB11HLCrS938JRk6tpjfu5XZdTJBvva4Q74HZCK9ummASBispy1XNZ63MoyTMgrkypFqWV12",
  "key24": "5AKmhZKeGwQBt4wfuztjCzpc2aThos6uFtkaxSk99WRREgh1BGudYtjXNNJyt8oy4kyRGhVLEXJyqwrAQe12Grtx",
  "key25": "4c3wdk41jRVbgzYxEGWhfRptdhcKQZGRNSjdMmpBit4qk1xm1HTWBXhhTgUSqSXfJxkXUHhKFdDAaPDvycge4p3q",
  "key26": "2mYEHPtsByXxh2yVYCUapfkA9iRDT7uJKvCj4VWHbnoYuoPBQdAKFxQ4mRVAra1CdiH7KhdrxkBk7q7WQFigdpyt",
  "key27": "3U5WVCgVZvKAGdQC1EX48yfrrmrBjiVunsWaAqBjDqcPPCYtAWqJynJbsGqcLnUP8HjaiFGo33HRhRHkPhap61z6",
  "key28": "4rYWBbAWXZVUkpUFHUaPBDkToFNv2nvtJbJH6CfFLVKXyb8Js6qNPH33tLLGppUnxBThE9FXK5f1MjEF4zPD1JKf",
  "key29": "58uAzsQB9AaVpx1sY7bLzn6zW55xe3rZKjGHKByCtQ3GkrejJXk5REtt4MkSstfno3Tj9GWCPjVRdaHBBti7sQtp",
  "key30": "49kZ8QJRzusLQwALv6mSwmUqWA4ErVPv9DLAE7xVMWETfzpDmJtEPFANuo2T3Gv6p5uJPLZ2XXKmF8nEvLHMKx7S",
  "key31": "imqAYaRRewtfnpLqsHDKjTvZt5LzDkBmkYrNYwRx4n6PNAPn2BJg4dYWwufaiuGnFc6djzLTEpxMdj24jvHsa4Z",
  "key32": "mnM4BKwfQnRNe3DEBGMo8KHsFDwXj9zA9pBDThiMEAf9h76mo5s6QDUdiqERrWQshcZpqGQHyfmv3BNMVs29iyw",
  "key33": "4tCDDPYL1b2rDuoT7J46q4b9fFAGQBf54dViSM53onTh44fohaN5u2PpDip6geBKDKDQemYBPBJECJa9YkPmnkTC",
  "key34": "8y12bu6U65v4CcfVpfQF3PZRqrfL7zyq9tD4P8incyx1ZAg4akXDdVUeLG5YN2HQvGxGTzGzGCQi3ijkrQoaFHo"
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
