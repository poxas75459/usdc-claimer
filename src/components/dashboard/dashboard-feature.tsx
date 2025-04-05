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
    "2igr6Fi6roapTfpJjy2SruVPtmgzCBRreRwbzW7BWwtQVZ7QuqzwBE56hYn3Ri8NMSNWCZfVDrHX8aN1f7hPmzhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuuiizBGH6EnVGxbSUa9Nx8BXCc1bLwKjbboBj4XtXofmko2TsWQgwFJpvYhVtzrgr1ychc7KTHpzCqfEXiS9bL",
  "key1": "3aUH4WJsiPwA9nXUXM5KkNik1HgT74ujtenGmYG3ibT7qxe7hsY9dq4uan6VsrqqyNt8E8dpL6oFsgT8T2xVpKoZ",
  "key2": "YnHFDQ7rco7YirLsj4dZ6pn8yikMsQTFx5MhLjTij9n6xEAsVSTvujgumbxhjZVKcDWvXM4Btv9EspZC1JNq4BN",
  "key3": "4nsyieXeHFrRLLSP7YuUh5R3PKqLjqbgHwrdXyFuya5qVUBbdFcUS33b4oDKTafv4LzHqt4SvQuwJLJMeLBYxCTv",
  "key4": "5uRi2MLmsS4syKhtBBs6Smm87rQRVXUGqK68CqZKuLiGCrSeJfx36ajBnfBe2V7CMP1faTh97QLMdNgBmL622aNK",
  "key5": "EWy6utJLQvhte64Lbtv9yxfF4hRMBCjBVCEyZpaeJTV87xE2fBrvaH4GvrSu6GvUhPMNEmj4uVATezVeH7zyEew",
  "key6": "2WujSxrL9atomCVg4FuMrPLfvgk2SEqwpHfvBnDZogJ6znZmdUvWpWBTDNFb52gVDbuhi4ddsDhzKT9Gk4HxUxDf",
  "key7": "4vc3L1MYfEDMki2Y8DDuqVb3nYfdK4vnFZXeW1Ufe6FUyttHFaXuBGDu3qaQC6YzZ4FUY9JQEaFBdEWZxK45JomE",
  "key8": "67eWjrQuAcoSKMwihKbUCsrYCuzjVym44QHa8M4Md1CBGAPdxTwhfHJnUVHGbcXn7dmMALiKoYXyx2geDXwDTxFQ",
  "key9": "5pkU6qGVi7bXSMHdW4MhYkuKncsVwnvUa85kmQKvfbEZ54Shvw5J4LA84keNjXHkRVSAeRpBucD2hHJRQKNJyHQv",
  "key10": "4r2sugbQYPGo3fKytM1sNAyLwEGo7gpQXkYG91ci1HR8SWjaiu6U7i3VPgpXZerwQxUMXhsmeU65nYnNboEAuKZs",
  "key11": "3QhXEMabRsvWygXzWNHQ2AYsaethraobYoK3vzk9JQBY1kpFiwpxfRPC1vqRRCCa8Gy6SJug3dpDv8oRNhYzKEfQ",
  "key12": "2Rp8Sqi2vPFRjXWjEMkhWAR6FezkhpcMDy3iUcBSf9rZgBqT5mL8oQsFboefQgmiVa4ATvqLWKZ4Fvs8yP7KMLHj",
  "key13": "3T5K1JLqjQ4QJVk7HQsCAGKHnte1qbmzFEQ6z86d1cbPowgxDox9kWUG28TLaHRMVmtr5zF1cyTLPXhaxR7uUTrp",
  "key14": "2EFo8SiDrEKpmExddHTN1jqEwPd2dqmoC417XM6pxGegCYJHdtMrdiwd7hvBGGGsNJiCpfPrPtMMGmMhwBX3LEx4",
  "key15": "5T3vdv2ychpBxqvjYHdVyLQV8frtFKhgUpvNLqSmjeKLWL1JZMSzqogqWzqEotNqShs13s1Q2Xixd7yqR28HTFW6",
  "key16": "2q1BYyrm3saiRwKX4dCx4EVPhjTcX8CYf6hTxDktYikc3Nordgwx3wDhKVtjzNrY7u4hbDhD7Ne6AY9dRWD2D8M6",
  "key17": "412fQBDxxoxQmxwiYdBdVaC8SbNNzTZ4Hvi6QjszqhddVZtHL6zaZnGaXeKMbCt8zjFnYNBmVioDLfc1naNEGMGf",
  "key18": "2SeGMbXTMtwesrf8axEvhVEjpwwz8G1UwVpbHLPmn8zpHEomKT6qVy3wdu9bGbQXZ2Upr344HvHnVuRwCscnHgKE",
  "key19": "583NNXzyuN4UUN2K73eAgrehUi3BHpWcrAE2cfUeUk4oDHGFBH4fzScTury4p1afgLx8j25bXZMrdsWuNYMgU7GZ",
  "key20": "2VxXnXbRCP5ewKAPLxV2H8gvuQcNTsE7EgpK3WFBtxxRd3huVet2z2YULCgpD5RRxJSHufKE6CJhtMiRNMC5ju1w",
  "key21": "4FBQpX1waeoZgSzXjLWKBSDwFKHqsEqr2BbV7R5q5fgacng1FsKTKdNYGMTp6JWKfvDoFbqLoP4YWjYgGFd9Bvfk",
  "key22": "5jqAHDWL115LZtgvuzuyaqMEaUcNPRYnpU9RoYJ7yZthofULNAByjFLutbaBq9XHVPXvsueFUgyhsXiQE942AfGB",
  "key23": "59Gpjv52xwed8TQpgSU5jHCcQFVH5KZxpUYcTXetLxpsG77re4Zpt2q2RkpVfzkkVRNqQupgx2ZRdJ6FwxYhzQLt",
  "key24": "25o43mo4whxhbFtbaVx5zPjaCVHNNJdhf7xPbKrG7qVJZaafCPPciBsvB7LTczbfpE1hc8zJHv5xK7jgdyVN4HKU",
  "key25": "59ke8KchSBQQj2r9EKsqShngNmdEDzUC4nNLRuGmsmYNt7BvZRdexnUwxxNvaxHsLAk57RdFRYeDV9Au6ijk1egJ",
  "key26": "r1f2ZqMKhPsTWeHZzmjLMjtxJjGstitCxsJr6eiLHGWEknWxQ3uYANXZPqZHhgQGNAXwNFwV6ushHAq3vNUuG7D",
  "key27": "43mWKPRJDrtFhVHZj9j3xrLVWjAr9LHLr2y1Q29Qvtr5rrEN93ardhFW3twJWDAMJJrFxQ4Q7Wju574XBM3NvybS",
  "key28": "37UX2nLdRRdozVk7V1cpLm1EXZgbGCigGmiPGw87eb7rsHoJiXVy1Xesje9bBJ5eR66Xjym7wBbf4gKyW5fzc8C4",
  "key29": "3pNq519pU5RAmnb2yMTvQUYMwV5qFeHeVWzfFvLqoV4uyq2mnaxMXZzBHXbBu2T7NKvFLixprRdS7fwcA9eS9JP3",
  "key30": "3hAbu9SfFCtppY5ne3XEo6HLiaSZGKUHCPQpRUDD2Gt5GB6hhR8Go2K3neCX4RjKBtTRitphuVWEYk2TpNfKtwZw",
  "key31": "2LGQeVfn5bSvDAd4ZJTTesuxXcxoHH9JsdRA9kfL1E2u1RjYwT1xxPVauznoejBszGSB3bRqLoo3ytgsKzvrf3Kj",
  "key32": "3fscm7EooRu7APptthZCp9FgAoKTuF8w7WVBeP4T5mabdAADEFSZoPwJrt1LaAWjYig4j7sxKT1eNqfn5Lf5m2Bu",
  "key33": "EUE5Cyn85ApLm24vtMHabk6u9jwCTsRBt1jaewMhf7PkBh3KUMBvit4vLQxaxm6e93a99A6ymtx2VtghHgZJjxu",
  "key34": "2zmnDSrBzGbioDXAymmydRmtzsSvp85hXDCCSejF9JqYn2qvAmgZ6J3b2FRjMVyKnJXTkrU1YXnisPQe6sJUT5wx",
  "key35": "4f9MztYfp4z19UBZfx6YKUaJ4WFWisqBcMVGqG9SsixS7XavLB4MzevLwqXnChTKz1quz9DYCak2WREdhp2DffAX",
  "key36": "2ye2xSKLkxHf2PurfEp1iRBHZtQSgDnfL49EZVCpbq1zQGhCSfoiopDUw1FyBcu7TGv39EdpgaJ3xgaDXG6Vjeiz",
  "key37": "3Kc2qwSkL9DtG6eVVGRXMQSBvqUby3Qiyjhe2c9PcRPocJRxfFtPfr8tfwqbzncmQca4vxd3M9MtXmYJSwgGhevq",
  "key38": "5DFacrrZqvpjuGSE5JXwpEx24ufY6U6EfNRxvVk1kUAgvF8QwFnE16WrYWZ6FWkThHz2xxr4oWemRD6gGRFVsqqd",
  "key39": "4BztbnF1Y6xJPmZaGYUqbgXByQRc1P2EUjgJg5LENbp5teUugL1cABqoD71XQgCgo5wfc7GsgjKnvGAKBzUiCJE8"
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
