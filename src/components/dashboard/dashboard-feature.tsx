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
    "2bNLviWP8w9TYqHoXonYgKjjEweLm9CxAGJSgo7E4JrymbbMzNuof5MK1AJD2scu12jWvjsrbKSm1UEKMw8MLp81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNSeEaoH4gRLvFKEBg3s2axJjcue8X3xWSfxsuo3C7aCwMH1oWRnZWCgKKYyC9Rpy5e5y7hzn8eGR5tpsGXy9Rk",
  "key1": "5AyR3Zyear2ExH82w4yQe7iELhD4U5Dy3zJUV4tYLUgnDiPEiAefj1M79rhZnwhbMANJ4UjzNa4d9vzGExqkM2rq",
  "key2": "5tsPzBVr9sxYJzy4hNXR3ahiiWniq8dbPT1dY64bTAQAT2KXv4p43nJRzybzZXk2hsZSk2DQiqiCtXs6PoLYD2Y3",
  "key3": "4wdnH9QnWDGn6n5TkMHAzmpFYmxS1Mp7if6H78RYYePndNkvKvyjcGfQSR3sxs7bmLqXHZcSh6yWDFz6CK8ftESQ",
  "key4": "3KXKU8So1n6Rk7cB4uEP2Wt9t78JQu9GjRD3bDqLbBnbvCF5dtbaxtStb37jWt6kb49RTRAeVm4ou7XxJqqphP8",
  "key5": "5PAv2kEuwQsw6q6SJeLjZQ6k4DCfv5d8ZkCDM24sv8yj9aXWjr9CisSp1KeLoX5aABKzYp2FsCfpbgZMnumEG33X",
  "key6": "4eC5MXvqf1owteDgSrjBMSZTMaNzd61VFTLJrDe9VhRj3sEYnA3jRxgHKLzKe1zFdCC7svEnjMDkYqBtHSZAu5V1",
  "key7": "33YkyewTDoujUySomQTVktD1SshapPnkBsG9kyhuBMF1kNSATBVCMZ358neokKNhrpH8wpbEFP8irL6TUz7c23Q9",
  "key8": "3mGfZ9ac5XWqpzwEJZeFDdx3qFCn13yGiQzdcPzcPo1mvBjzRypE7fHBny9Cec2kR9f6u8ht8xnfeP4mQdUxnE9A",
  "key9": "5Ki4Q12KPTX9q4cskNHqBBMRDJScuCSan32yHqHJv5jv6dCcyA2oTuf44WSGSDxfyuYRwq8eSJywkgxhSFEtTRw6",
  "key10": "49i7hWcZqqWqbzspJrcsVVBYNMcHCokA8wKqKNAtM6kJdgRErXJQ2UQ1hhHg1QyQnkeH8Mwg9fEA4zZAWj3LvC47",
  "key11": "4EWJDp7tWnjd8QhzUQs3uRADCF2YFBwhPQHHYR7ZueNAf6MCGDYgAxPjhqwK2ayG2aDuFjWNAgxmPA93rxfLxt1x",
  "key12": "3ucLTbdnbadLHnyeditvZbYPEx3xuVW8oq7UtGkBqVEPWcNvzaZ45PTPkTaKPrdVhcDuVyCCS25wvnMaya7Ro2fb",
  "key13": "55L9nYamFzg5eTuHMyM8BGnVbow6PYxbA9JXJqt6AjVMD5tnmQsENiPmh6e7kT6bvbmWrE1Zup7Z3unjjBYeAdsV",
  "key14": "43GxRrcPZk1p5mo3zZ8aoV9fK243kSsd3UpviMbfYgB2Hhf1aEQttUL9aRijutERjGumvy18sGQkfix6KHaCCU3m",
  "key15": "2h5TnWcCtWs88SALaZnGUYmYyBojhrausoruXAVTqivE69pWUWPTNGzmaMZkp5n9jSTJh3hR99aPibQqf9w2JrcY",
  "key16": "moqhnm3GpprpsFqU4VSj6DMjDQ9RSzXk5Qzhvygapfc6wyEp97CLWwSnTxSkW662A896tPGRvj7ztcr7NxnvNPP",
  "key17": "4noViC5VQtmyvkw1jHHvRLJAL62EpRt3zGGBK2YUtGTuNv7gHDzNoZmbEtLbJ67TAvdukmM6763s8R7yomRL3QSv",
  "key18": "3sVWqNoiiuf1TmFEnJHN4GVGMaTeygLD6D4H8qod8gaeh5WNe63qb59zorCaSREtiUJYWkWk2opCmDJ3vXw2rYXC",
  "key19": "4tgfGYCCw2987BE6APWgSWz4MjgHHUjt7hhzWca9ws5GRW3ZBDGod9cRLnfQb5NfnBafwDtqqNQs3LqDWjxFV4zF",
  "key20": "4n3i9oWWFZwirrPd7555jJUdatdAPBzttyfJMGqQL5GiRXdv9WQcudaDJJJXdmicko4gcG23HZtC5Qse6ZF6rpeg",
  "key21": "2nDgZ7GWX68hUxbyUrfzxGmVXyUeeVDhZ8K3oykrh9px14wbsaSTmuogSNAnDEkkM1pSSAkbWtqob84PDbL2oFzq",
  "key22": "2ZpjbFmWuzgZfw3nCSSFsLa9W7NWyuqAQNPQHWeE4NQ6VtjfaeUVT9SSgdGCDCZ1c8N2m1tm98rA24e1bLCjCqSX",
  "key23": "65WEVbjue2FgfNq26eGf8WaSEzaXwu2N3SgFcfbEMmSkCn9NingEsFpPCi62p5DAvhawFpQxUM9NMWgQrrpsWpsZ",
  "key24": "56PwMafdBKRWCcdvHjQbaxGYp3o9LELhjcsaZ1VXF2d58eQYNthWT67GUHfbPB4WQoT6YzJUSTRjShpM4weJUcR6",
  "key25": "YhYwpWe87mdTfBFqt9Kq45JbwDN8ThvKtUvKCo1dibvPEZrm4agfmELdzLDLrVjrRgSL8GH6WfZMPoADjTR9DN4",
  "key26": "2vvCbWEQK4sUoatYyJrMTBvFhQrc9C3wqwigyFasdybKxat4odo7H2uWNjmSCT2jqcXsjNHd7e5WFNRTdqnfRptb",
  "key27": "2qPuyTkHSFjRTHMnJwzx21wYyzgZW5RxzfPk4TEPdn5dt5ftNrdfbMN1xBb8ut4FohnXaXghk8rf3nKu3PRRF3au",
  "key28": "5BYsKSDsrjCxm1c5txmTEWfvQwPdVksoeQs36aaT8irW3VUQWN4NfN2cPpCnMSZosARw4FfZegCVqeBzJbt2Jz1V",
  "key29": "5FAYPxzMaUQqwNSFMZe7J4EG9ebLvk7wJk7CVLiPcx9qMgLkZpZHUs3BGTmE2CSD19oFReumYpPRAJNGhFoF2JpX",
  "key30": "3y3dEJnkZCkjHMRsH7ij7kqZCMjtbW6j13r6CaLLqU6MGp9MajiwiiK4Hux8qwDiNUEe4Ykc254vFPAWpVtzx2mR",
  "key31": "5ES3sQ2A1x5GvEAfpCufkTfVRMxVy13VUJpF7wJW2E2TAy7BjmwX6fhnqinS7pev1im1ZfSY9PzmmZd2M7CEtgym",
  "key32": "3mbMwP5UUCMKfGm7UtbFLDDmDuM4v8gR5ZaZpcg3x4JYjQz8yRNY1X1gXTepZ2XSFcRYmtCXZwVVmLToo7YMwvkb",
  "key33": "4Nf2oLDNLj5am2KLRD8NJzLcbYBm7yij3pZjPrYXVybFcch3LvM7Bqpj6tvDiNWkw2o75G8WsUe2rH8mus3Z3PHj",
  "key34": "5WqXDCtCp5RvngaHZhHY2qAg6e7sifBkWwPZVeaDX2DQbr62hkdJYZSZzVn3hwwE5qR6DGqxtbqyzKiLLma4Lrqv",
  "key35": "2jvj7CfjHjjmvMwMTEiLMY2aXXrkTDonGWLZhGvfYj4i4QdXct3Ez9a3LdcdygYn7UckqyG6t1JJS3JYEAf9fjjb",
  "key36": "4aUgCoeZPD6hGf4yLKicgCvPzujcyf9Bh7YFARB3DDZxbhdX9mwJL4cCxNwR1asfCxP4TtfBWregXnAezFXsKdzi",
  "key37": "2HAZkL2GiZ911BzcBAdrrKdgaLdq5KSk2weuR1AGAayY2rU37yqzciErbLZHXFc2Wx92PC3YuAgx67oPaVjHMbDH",
  "key38": "5ELr3GmKAnoDuNQ9KuvochrAjFA3Qe5LGxkmWPQj2Vku8ipmhih5aXqqu4rJs4iQLf7HPEf6aSUQc5GeQ5wika4p",
  "key39": "5sN587XtqofySmiuHhR4SL1bLqghRdkNbU4PrM6dw4xtTubDttERzkzbxrRgPkK6cpTJtzPiSYbWfNDQBuSNPap5",
  "key40": "3DCk83wt9nr5PUXD2zfNLybkTswDyyR6mxWz61ADUTkD5feBUzqQUY9bwHhgPp2gwNymFM2n4WdLc9PvzDwZx431",
  "key41": "3fQaMvENCefNfNzwtfCwcn81Wj2s6pEC36jd1E9wHSGsobv9WiQzhpnkV4WRcVPFNoTtKms4ruMihXjK6Pt2xrQX",
  "key42": "Cv2wVmpPmiYf8pQA8LfuRhSa2TycBRWi4MuaETjc6fGprHabtipVicq9hB1arqQ4HgNmP8kaRNrQCRp5Nihk9bw",
  "key43": "4d7TMEbhFrvEkPJiYPjJsjPELqDR3R4AzE3h4i8dqRo3F1E4FC1oHJDTphDYQpasQwBT5tPj3fY9xNHvqyaSBQCw",
  "key44": "4Cbrx6MgFHKDdn7ACzFmU5Ynp7bWnSrK8BE8XfRZxAeCgRHXJYiKezBAAdgJufLssPLQWXFkRg96vy5jwMzEvRWg",
  "key45": "zL6SiCnF66Ee8JhkpUCwMKoDRLccoLSsdJGgLzgETBPH8pSExBg1qRjyUZKAyxP9inTv9pWTpDXw5dVYuMUCRii",
  "key46": "3WSUi8HnZvNDtTDBfLnAKjQVRE8DF6Mzq67rXcnUf8kCF5rZYdP5QnpRexreVk4GoYk48Ae9JvtiYdNApten56zR",
  "key47": "2jL8byKAiYrJMhNTLpuaUuy8pZsMDmWTTisoH7J1gc8X2MCbwEWgB1cn9juSxX33jsxqo3tUWSDTzbcMmNM7zops",
  "key48": "2ZmHCHeSKkWdxQDXTnEezNppKdQArZDQrgdzvFhjANLNP7A9k8W9TZRVk8r925dbysjGTbVCZTfcskCMdbqR7mHs"
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
