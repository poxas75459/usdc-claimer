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
    "4EVQDB1BTu2ekNwsFuy7pJ2KrtdcXyNZCsZj1wrsoToHpzuLh9VoCZK2Xjy2ud3E53QdGgE137eKSsY3AM3Qd2Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2geqUYYg84uvt4m8LNofN66TJ528bCfKoBozaiG7hwuLmeMh2jEeErcUnq8gpebGfiCQX7iB7EgLJ3WMVnKnHeM",
  "key1": "4wmkZWzmFEKd5tQZeUvMS7NbXNdJxyXRNpcUN3Tw6iSEhD4JVRpmqkbpQKbXUJWKFBrH66gcSYZyJGYee7mpyt8z",
  "key2": "5dzxgVXcDySM81evSD5SizEnFpFRjf46vVJVvkEtfH4KbQ6ZAw2HvZcEaH9K6CwbHTaNw2S9d9QrZxGR8haQUjiE",
  "key3": "221LcHbTcJ7m4C1dCvqrwFYJNnrfCRVm2sgpRN2THHKemhSANHEqcBsEn5wck9J3RhhnMBwEAx5oSt5FrqpZJv6h",
  "key4": "4k8u7NUZLPcR7X5yQsPGMMH7RBqkthHAvfWLopB9mYsje53XDgjsDgdwUQyvryqH36nPrgEDD9Z3BEcpfskgUbHY",
  "key5": "4yXY9nRZQLicNj8vF327SRXdqDErjYQLXc2fLZRY7WVUfQxVLKfwgUDo6ByxUetzPMRjcsNABWgHYrYSu5SJxyrV",
  "key6": "FmJvvcKA5oEZisgSbKLL6jajkwc9Cj8bp3uWxiUjgQNN3NqsjGEkeUr9GSgCksoPWHvimdH68KLPn5Yq65pNZ9F",
  "key7": "vkiy98mcjcZJYzKNKs8Fn2AaqWUxPQxikWSG4yEnhjdViVeRyiQEj57VxUma9kBm34AA7Paxz3jp9ughWwqGaxR",
  "key8": "2Fz4fVDscxWJVYoke2zhDGeuJ94TrFCEU1QhLwbtkpbJDCm9gwqm9tUfJtedFNWsBkcQ97QBxe4BwGosa25vuuc8",
  "key9": "1YzReVftbySUnBkd2DPEBL8GTwGVzRmM81pW6TMMYXg1iaMvtgxUD7sZURtJ7ErFLPwaT45S46vx76VEpLab4Yu",
  "key10": "3eCW9Yz9oS6WJw3WGt3jbCCXKgw41KLEhfRTWJcoY3GPreUuBvtwXFAevqFNqkY6wqsEVery4XsAof1wZMY3TNo8",
  "key11": "zt9u9Asdie9VaYRDQnGDxnGDAH8AhN37JS2RC4ZbeiUkTppm7RYKYxFnufpJgUjmodQT6moMMAThzD8CMtZkao9",
  "key12": "62tTpWa4XFHfvWF2vjKFjN7p7xRZ5yvdXFzmBntRe4BJ5LfV3x2nUKKLeRWeCQPfuXuiJ6BKtpRntsHfbRKfTXNB",
  "key13": "56HX694w9ena8QQMAH5ywQs1NasejZmSMrKBsQzfEBsuDiKmmoKanBztcRrxeVeJ4G7zQNxLX6DHXhXKkBrZ8gaM",
  "key14": "3x9XM7xhE4Vmr7byADCFJ42B6yTXuQ1ZtuaYash2Uwqi36s4VmondkFBaYFVdUzXFg5efJRqgM6drahXJjZmHoGo",
  "key15": "5smxGAtxiwaadW2L3tJYQjMYXCFb6muRc57Ue18PSa2KK4WRhij5HugZ6UHggLdEuBeFibZ9cWdkiMhgq38hXC6Y",
  "key16": "4dsEY7bQi1cJMVMJxfG26yC2YVKYE6zhnCfs1GhKiJnxmJnzKqEAVayRQwzH3KmogmTS2AsB7Sh8HjwS9qHZGQkM",
  "key17": "2bFdMsneMdKxZ4vvPPb6iXbzp1Tzjob3kUZitiBfhPHmiGexPmj1F2Y13q9cTfsLHe7MwUezjHWcJnuUVp4MFYCW",
  "key18": "wgoEN5PNN9MXYuX2bd2uzGgxUYt4fCr4kazuwuxPftbXbdpKVxNRhbAWhsU3mennKE44gkEnPaTYAGL4X19RKqD",
  "key19": "4huygLk5D3FXbpTGqmUnv8HZmUkWqSioKyugTqSLhmzv5h4f7RnXLtvk96j8qLLhRGFpECGuTaBBnBC2dNesHCAM",
  "key20": "2k82WSqepPeTSWhsjuBW9X4Zi9TGfH7qvPEKhXEputWaMCUZKk6ELFceZG1w7NSSweFbBDrBEzbxG8Gs1nfa4D4r",
  "key21": "2ZhxK2ewSnhP4PwNj4rsUaxd7AuRPBS8WcrKRgtQ9xa7m6L6JCq8su1ichqguAXPjMdxPakphECYas5vGG8B6Fd7",
  "key22": "23yu9jYBJaBUFUZ9MyxHv7sgp4xq59wYBTzvC9yWArLwezsrB4g4oCAmkfh8bRwJXZUPxxfYstmKBiGVHmFKsU5v",
  "key23": "8WqJ4QTf6HSHQAFfLG2hc1xWy4VbWvptBkuN4YSqMgkvuBbghpS1NBiQic6evEquS4gQr3MUZm3ikK86YeJuyGm",
  "key24": "DJp9uGyxMCFWzNVB8fzrnJT77Gc1pMzuyUX1gvZcjx5BtkRmaSkSzRzAZhJ56PpvM9TVJZk5HVC96RNSMrTALxq",
  "key25": "5yYB1ncZWKzGt3MW8xQnNCHWJiqHkp138ZQuEodHC2zi8vaZWXtujgDt6XvRysinAjwEhCwTTEgPYfgr1UufXY93",
  "key26": "35z2HajMnN1QcGdtrv7eBUBTVZZSCjpN3Kw2NGiHkUpQLJ9zCrUBRkoXS3P7Pf7t1RAwhkZZiCo52NAXdfrHQJrF",
  "key27": "3gxRD7bLEVUfk1B1UZsS6F7Wn3NHch9DFP4qmC519HSyg4FEu6qzXV5Y5SnxNehq327egb3M1rtuC9CVgTTRfbGS",
  "key28": "3Q6QdugyeLH6UUBoW36Hgse5513q8kSUAzqEzYuyaJ59FosoyvKw9NsxZdmKdomxkhi3nRzKLee57UgbCpJ6cdt9",
  "key29": "4n822VpGKdgiGsQU4WGSx6TqC8D5iY789Y38KqseYeuZRhgbjXXGGopFpRXMcRxmphaqFD1HZgghmbq4q6RKexok",
  "key30": "5cG1gJzaMs9rqpXhqsHbmnTEWLkUkMfAzJAPiPTAdaSXPtNPFAHCSQep8QuGewVYvtd5HAv6msDnNJJiTaJxeKd3",
  "key31": "4wH11L72VqSAu3Q42gD4Vk56ea2J33jZbxgLJNWTN5U8Sx6bpUa7JrPM5avMZ7UDe6GAmY7FGA2wEjiKZJS3Xx3i",
  "key32": "M5BVCmDpsG3JoCJoq8xbkfbxDBC1AmkrECP5hQz8UW1BrTY69YhbkgH9sc3RQyA5MZVvaZnMsjtzmTzwVMmWPAs",
  "key33": "4ettAme4n4TLHLVZrTLiGEk5kFrLvUxuDgHNXYAaa6SjbmpPYwAfWiBxi6SFNGAfuHVArKNPDwYdqU7W5B73zvMU",
  "key34": "4LcnajCC4LFK3RKTDDMMecuRcWieZCRJRQVxkrbNmt5GMXYd18zafxSvspRNrELZV8RXSQyrxJLp6N4UyCuezLVc",
  "key35": "5AHD24jXLzgSAo8RGzwmooGTwL3BYSLn8TJ6nR6SPdQ3pGNT8o6jvPTPeMbm4f6reYjDprJvSyDJ9RtsVjCjJjnj",
  "key36": "4NAjhAAyGT6zdb7sd9UsApM9PkzcCStQwsxh3hskmE19yivMyA21rqioc94QteGWT9HGHng4AZMX7VKriEKLzSqN",
  "key37": "2qLSyosujqndKGB92kJviGQdQJEqKs6Cd2HmjSmttT9Fx2n6sLsyfermPhoCGcJRokRJz3V53fMefRRAqfmjNMNV",
  "key38": "5x7RQZFLQrCBuS1hXNE889g6uMSeSoYR5i8Z3Ym5RkJnNoytjfCKCotb822GkKzL9mBKxmgJEgkJH1HWm7yApxmQ",
  "key39": "43NqyuCPLHRjhgmY3eBJJqY1SPwMdn29gayA3xdroPsPBUFZs5neStKKz635FSSsJbXsEaDyTRdLzogy5sFFyA2n",
  "key40": "4iyJmSeaKbfTgimfbyLfoGFdYKYcR4MuBrcp4TxREfNX9V9H3PnaC6uhmdwLrUveEEhG3idjZ6pJb89GLrwybBaX",
  "key41": "44YpqgXhTBXRz6iyaFi4A5GVJcyS3ocn6ttvr8LUCB5Pj68Ptpdj6WMWXW7omRpoqm567HKrQakpuDzYmWSRvJqZ",
  "key42": "242JLEUKMs7dUrncfsBRjZk9QYipCifVacz9AKGCfrV7uXZ6bJXSASnFYP5JZkVXHXU4U3Npuu7ykXASeT5XNtRf",
  "key43": "4oqEKQQeetaz73hFGJKktHymN6ndVz6YBi4bQpN6ryssj8BPqxXQsYyrzQ6RnZt5gMMphZZTtE8rUrfeqUKAHfnn",
  "key44": "32edQFc7SiKr1AWKmuHHCpKr4amCL6cDgSJBU1nxNgfi5DUcmdpz6wuC1JzVREZBcznDy2EkyjWQrwgsGxQA1E4b"
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
