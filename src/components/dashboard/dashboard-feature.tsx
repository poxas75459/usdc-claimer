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
    "5468eEVUnSzoGvWrmvptPbRjRQKpM3k4g5KReRbR4t77LerRdaseVavSEAtPrLminZB8GifDdvndmNMyZq8Eoh4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhuNp1y4jf6J58rx53QieR4H8Bn9ZUaQcardLsT6FQ6goSdkPP9zEsvv4od9K7n24651fYpB3DicUCp5pThWVxG",
  "key1": "5qzEXSmCfgMGuTtuAmtBRxojMbUZpYxDm7kP2RcAZbHiYhZ4Zty8U7ALZ4U7XBNmNbJJ9AZgurVZN5XxW8qfPZ1a",
  "key2": "22nF8b8oy47J6mQ3d7MbrPxBAv1W2hmqLxywktJ4Z5wfKCN21odztXrUqmwN5vwYMwq7ieZdQaaZ3phg7PhyEvbP",
  "key3": "3vSuEvMjFw3PZW17LA1BddgFX8t4JU65Nyv3PsWLweQMJY1gvTdrQhstStyntXoJpTeD1wGu7gkH9EjBnnYGW6Lo",
  "key4": "3pbbcM1zsDeEg7RsvUXfA55KjMgiZHoactg3129GXoHXHhErnr9Egg8WA6CxgCovsRhJ7S3UMPe7fVWKSQY17oLV",
  "key5": "5UZxhhXBKXkyNBCuoTvtE9XQ3uVfoiYDXrwntkrFE2PymDuho7nYk8HVx3pxxG4VcV9B1mJSvGqNqYDpqrhbfBFf",
  "key6": "5Up5Z8N8T7MVkbfkcztRv5Mbu5MpfSWTBnY4ivWar5HQnrHzmaqx642fcRu1CddSiGTetXXBmR3TjYLGtTAaEhFf",
  "key7": "398T8GgJEHKb6e3rbgZoavzBom2ve9FG7EksVLmgd9z2qDAjPdmg8mUrBjwKe3wy5681ifDdYrbGwGyNaTTKBMiJ",
  "key8": "imeeWVrNqNmaTY5vmDcerPsJGVp5dnS87S8UXZmGQdrZDrzzi5NMhJ1zmjZG9kyZeCfao7g2o5z1Zi5FJzgALb5",
  "key9": "3sLykhuAGfDt51jAwF78mR1K2QXfqXm6TH8jVynLkMBg88P2E9LnBSV57HBJQezJbnmBqsXrsrJFKcsAabrZRiv7",
  "key10": "5fT1jBwML94P4R7MwFho6fq9ew39NCbm22ABW5gLSkTPFyDDHAnVPoiACQmLPqWiVdAEu9CGsC4KBRyWm6Ha6RdP",
  "key11": "4KRCM2tvZD7GAaDrjPEZ36wQrCnKPFfc7zWftBpHc3sjWwu8H4VBa4GBbhKjFDDx42RZkeJ5mdxGMR6Z4E1GG5Z",
  "key12": "4uMMdWp4c8me3VokEiTL4eyrkQ4LCVyae2QfcKFKKmckwkv5NCjm3P2X6smHgrvvJZbVjxYMg1UYeoWEEzXe1DYL",
  "key13": "312RF4Yi8Pw6EoP2g81LNcQ1ZzW94iHmJgUiSA9815aVC7zv1M1SkRaA6Eiq9T1gq6jKoJN7BQFWvjDPjMHajq2Z",
  "key14": "3gNmULTP9wV26CV1N5WqChYERnfLTgnw39PSjzvC2PkQuf4dwujrwuM3EWcT3nAjLKbT9aRXNySJoKEmN8aFvUaQ",
  "key15": "62z9x8vShZaGsRsAPbwh5XsNeoNNcVZxqzjxPNDWavSK1btqSFSakH349WUVG8Jq2YuC2gUvrRKk3mG7pH3F98wk",
  "key16": "3qQSta23uUSyBrjQMnZp5sfNJ7ZYxUaWyqaPr5u1TjCBLJnCnVGEAUt2HX2pmW31rFoebU4NUbL9wqvNAasgimi9",
  "key17": "4Je264p1cG62sRYA7hYbygkS8qSq7fMiL3W5cW87CsbQfPJXcBC7NpZafTKwpnhnyBRySAtFNpRtYJjdFfe6aXQX",
  "key18": "3RQp8uedchvzZ7PkuDnwWg3Tgb2puGbKZAp22mNV2BGwkWA47Fyia1XCgLrAJWfg9znCGTgFdU38bta5RBgnbCW",
  "key19": "2rk45yoCirnNuwFG6bsv6LUivz9BXNke5bhYEV8fwQXWP7AGcbHcgqfmnYXTMPGf3MRm7t9wCP19Y9rGnvGAFJw5",
  "key20": "5XKCm73tjf8TsQmrfPJXww5ShD2NtZQS4D1DjpXQHC7HHXE2yRn2Bk78h83TtPxy1UXm65ij4Hp4htdXrXyLAEgC",
  "key21": "3Rgq9SwTGSj7psADL2NGWrhmFsgm82Cxg4bEpWtB5ftGTCG1Ts3PiQnyuG4xLCeKM4YzCLL8xoxhxmGPhma6V85v",
  "key22": "2nK7XSpNxZoH8hHypqQRUHdkHdF7kuUNbDjhuGVWHvj68owFVEH7F9o8oLsFQPZV7Yvtq5bD2YdZdShrcFG8HZzi",
  "key23": "29QTYF5K4wCKgcwrF3HYgmDyvxN82jZ111iYeEn4C2Ud6WhgYgqGWJBnr4Yk6Y4j8LELBdaWKgi9C3LBAjgDPhma",
  "key24": "fPmCNpUj6EcbjyR3hYLoxhTdBoMqop21fYBH3Tcng6Qm2htJY2FSvLALBEti52jRB1TmPHSJLopf6Uo22jbGrV2",
  "key25": "3YNGK2gupGZEjdRVRHiaG8Ex1B4hS2uAuKVxXxteB62sY3PJMvtHpZuiVQaDXNGsXXDTAYe6pRSLA7gnLAMYNpMm",
  "key26": "RRoyaQY69CBS3w4rNfxgcDSs1D6UnF63HRqv3dZvrpKTfyWb3G3KT4G7HePG6vFCq5g79x7yMMJJoRSu8ekGRZY",
  "key27": "4rrprbAaK8J2EdJmHbXTkxwkbFrofJjfHosFnVd7Sbf7dL4yMy78H1KpHNv72T2wzBCKCk2DpD5QXYe6KFyeKCGo",
  "key28": "t8WCiKwDcr5MFxpekE24nibkPZHe68d3yWvpr6n8nxEmX6vvosqRLCpJoK23quSythPzqj3Ff6gctV9SNq7QLxB",
  "key29": "b1H2UdrLT5J2A33Lbz9kYr768hugog4kB245259XXsFV9a3GJUi729CvhdCVFSVfSJyJxPnCWu3gQaXVRzF6FPo",
  "key30": "2XV4E2k3JKfX7A5Umz3Wi7cCBfKzDQ4eeWeyW2s39VJs4EzKtKRmj6YS4TJvk93LqiFJe3Qk5W5oULvnYnKSwLP",
  "key31": "2moNQ1G2hkCcAsyW5uHRavniEwFEd9RbveQiCwQwAxyM35Sz7cjBQMLMLhyogMWLpCNN2YWNgLw1MpeeYRgFVKJv",
  "key32": "5YJTn8Jq184468ojLqz9P61XJBzMD97y93XsJnTjqzK2xCqLQGeBP8zYVyptpc6DUGSvFiWrVD7yBwcQLGaQpYmc",
  "key33": "4qHwzyFyGBWVPu1XGw7b7X7f7RZrGG1B8t7oS8V1fEKiUPH6EvYeb4MkM9ywg8SUSWbWKKC52QYRzzQQAuBfrpqg",
  "key34": "59DszUe9ZG1ysxKopXpaWg4SFLbv9H31sxgncE8j2iq6UiZ9je2nfP467PMhRV94M76sSfKU9jcVa49Fyf1jJ7aW",
  "key35": "3sk6qMrL3eCvJrJpBcG9MSwgX2Vgf6xSqUoWDtHbwuVkn2m76ApHWGeLPMQd4hWRoWZPCYxHpHc2AFQjfwpVfH5T",
  "key36": "3boyk3MzEGMxV7hRXEFpxpPdaA412FJph5dt2vyfiRqdBf9San7AvhqDMPYPB58ryC7KGvbHSqjQDnmWMJxr75Y6",
  "key37": "2YBkDct8WCtcPirug5b927LWZbex51PqGVvJxYTTg5nXZh6yUE2kGfMaR4kbDgPyXW3BpcMQUFX9HbsnGSs5KYQz",
  "key38": "5AR8RjYM2skKrvEQ2eaYKZfnF2Qi99mUAuyvnVdc6upRma1P4qZQBm2VQEFN4wR8ezaQJTrWQM7Tz5N7rq3txxC",
  "key39": "MhjpNDsUZYHjukRk85PsUarAp8QEYP5FpphgSnLcUK8Z7apKfeowND4YxZ6v62V4r5bWBDwdF6QSRk2vMrr8mL6",
  "key40": "4frfRJjARKF5xzsJQsXYSE938SkQSfNhcMukKHGfRVooUmuGwN5Q4f1cTs8annZQGySK3RnkPjCYHjpXYtXqMpky",
  "key41": "58DxA8GBCNGHJrdrwBSvRn1RKByUi3NZv4dVSjd9ZRGKkXQmxbMidh5X1D55MdgQu3Dpi68dDAiSETDF6H4pKoVk"
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
