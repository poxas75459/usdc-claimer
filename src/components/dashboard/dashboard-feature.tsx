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
    "5b8JMV7pcep2Sx5dzkuYCupDNFLkjtpfDnkvAGpyyrVfJZYSMG1xWDjJZmbaimJoHoWpiyMLrMriR7zXnUuSgcWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qybHDxncCSmb1Xiq5bCwSRRSnXbUtu2LKY65qDsrU6zbkiyTBCh5UyCRw3YmSMtZfXV1Sh4LZWzLiLwhEzUeT8",
  "key1": "ynhoYPfcuDNQMYcfVMAJuJK2Ft3to6JbcKfXKAHxAJiZQtsdXPYRu5AyCEPMhVBHAZUrrZVkkmU5EscDG5NsusY",
  "key2": "4TnTSWDKmDZfrvncBqvgy37oPYNvuTf2n1w6w8WZBdUoPcAjpKAG9PhjEG14JU7hK6mLkqG4MwSmdKzkZDVb31p1",
  "key3": "5UrJ77hJEMnTxhJDypz9eqSzy8NSyFdAForj31eZRrApBmxmSJ4Amyasvbq6vcPnTocZVz86dsNhY2xTqyyAnBgq",
  "key4": "4Bf4K7ykBUKPUJKrdsmTnLoCZWHhE3epx8kEzYrcg3KUMYjDSf17U3vgbrE6z36iQJPHPs7oj426QVAMB7YihTGX",
  "key5": "hWbCGaxxiEQvNhmx9WnoUE2GnHwzsxHQ51zc18TGVbsQqQ28jZV6xpGEfJ1fmAqPshdNNdeYZ6SXAr7cNwWYhJL",
  "key6": "5cM39iSE2tFqjULLjgfR2LtLYNJuA8oonUtWvhM7zdSBcZWkosGeDmHWwrGuoyhecChTvrLdAGo4x3Uo6npVx7uu",
  "key7": "5AqvFnx2UZj53BPgSEHRJSmUJ4WQh8qmJYx7XvBbNAhBvZVVNCVP6ywj2JgC6PzNX8yNn5GRDbXTYkXabAtBYxvz",
  "key8": "2EQFU9cG8HehdZ1565f1gtEkU4JK8APmFMbUEke8TH9Gs6XXR884Jymv567rDG5CTMyuorLfgnGqdAnmuDciDYAU",
  "key9": "63sMqQvyXurT918yGhkJztCVdf8jPgR7GADWTVdJdSiyfPE4eVn6Wg2y2xQKJnm4GtmSTQySucbEdxL4y5dPnZYm",
  "key10": "2WPdijA65XrKQdKTPumfmtU6s2dstuftRcpBc2JkaKouCCtfXaaU2F9CyBoUN4h7D79oZCPBVN25NzRwUjTb2Npt",
  "key11": "UzJWKQgtTYu9ysYaJQixPttQXtF3s87nsxXcicqGo4yBAUjHqwhXHeion6y2EYaKHEo7CYb3PpLuXXbUC4WmVgz",
  "key12": "32EVhV3Fkdhb6agZR8VTx7qGwfdxgSa6iKHKZKPocZAgjJTCT1E2sFGNGWsR7rvN9PpyuGxSrNrJbeTQUHbWvH8c",
  "key13": "8bxDnDArVsEYzq4BYfkZ5KbmXmBhXzeW7fympdUwV9Ce6UQchVQnMF6L1xK7oxcX6HcLDWBGe9kQJvHBxLMdqy8",
  "key14": "2Jo6uaj8ah5DSDvcmob2cHRbZ1igR2nmS1DRMFWW1joGFUkf13JgshE6j8aAHPrUKAzMZUXQd93GXNUwn1TxCfVL",
  "key15": "3ANWwmSLczPudRUP49WKqrdk7V854b3jimUkkbod8YGBFZG4emQS44NnCqsgZCUdgBH9btKWwtMhc85gbNgmjjsp",
  "key16": "5FSJnL9p6DmhXu2HLz9acWRRt4WTRiMwXCZ1Pibcq596rWq9AxFbLKeWnJ6fLDNM7xCQYW9tcHp1XfmF2NogbkJS",
  "key17": "3RMwaGVdZ5kBqPnkZ7yimAqAb7w9DQQUsybzLHz9C3iuARgDkF6jjJTt12AJsUJ5y57nxPFdgCHKXmNSvwoayCbT",
  "key18": "3dog8GCT9fAj8ZRLtodANiqvZUNw25QrnCWih9URf857iRswz6wtCXyictczewY7hDfWTjjhdWMPiAg5EKzUACHZ",
  "key19": "3doxEBYScXHTzntDsHzNBAt9BKzWDL3f3iBfUfimErXzripSnnWo2ZUr4FMmHyqfpQ1PhwkJ9fEedLvLyPUxfAoj",
  "key20": "2JgB5m8kMnW24ZZkH9t4sRS1G5PXXiLwTahAXtAQD8TuyMfnX17RPg1jBavQQULhJ18sLyhVMJeifnvYDJX13kfj",
  "key21": "2nYPoJsZWk9sAjPFqquuezfUv898Pbcmrnmn7D3fcRnsay3zTv4NcTESnCEpLhhxZNn1rkEpt1yYLyffeLZCVxaF",
  "key22": "3CCqwb84V9BsB1xnvQjqDqrB8oTczAErskjokCHMWNnAJxJz8vhd6gSLrwMkDDFyMvAh615eNpACqBH7Dv8ft8YC",
  "key23": "2EKxXzExbUceWs8uuUBC8CihHPRpTXVLQN8SHpf6qfL2KANWQqy3DRhngYC5FfzJYy1fEJwHvJNdRCGZWkrrRcoW",
  "key24": "3z1wdZPQXtkgQjA7jDUJSMqMDkLD1x8QunrmURdZ3QJ8vvsCEeKNqCaht226eWXMDSo2XovuDax5wKjsdXz33vEE",
  "key25": "5BAeXMMcVR99ZCe1Ly7Taq3xNGtZkkW36wQurUTzqGMNy35EQouKy5kwMZUmZw437Sxg3if8C8G9RXMa4JetnigX",
  "key26": "4hUvMAYsG1eSRgY4iKzmNrwUZR2rLvquNFYVZ8cGBazuCyzMH4QH666FKEhPMgVM6QvaAKyPnYVnQzd8nTyRMgF",
  "key27": "42suz4b2tBziVddi4F5Cfy1fB6Xb5trDFQNufqBc1CiCgHXcFyXNmgVPaMrxFVwA34DNPZqS8ZDAtuEmkNnEQEbS",
  "key28": "4U5LqgJDht9QS9ZNm6JrsxaJW1ffVEWfijJmLYPnTj7tWZZ5v1JAJJz9EVkbrbvYjgekobpchLYNHVArLtjRvQde",
  "key29": "5ESH88xFSxQJJDpPBahxa9Xwj3yqyBP4j3ZMSMBYK39ruSAn1u2k6iewuxUsTKCQAZSp2qdj7fv7sY7SAnRdwHRm",
  "key30": "XawT3ykHR7zt51Mud7G6ioo4W1S24k4gMC9K6w1vuvKjbcHRCXNYNqsCgRGrApHYS8mChCYKQUAJ3CFdqAMyKmX",
  "key31": "2bfKtW1diRYySF1TDzszUFTF2S5vVq11s9AQjnh6YQRkqdYpJNH9iiZ9Ld7fS8NZPXy125JUqV6QafFk1gbdUh91",
  "key32": "2WbA4bm8d8Me3WNQEtEnjxCvi9Z4qvDb9s1oioybaXtRqJney58JQYr5cgBuE3s4ghbmxtxshbkgsQAMJeyG3ZLH",
  "key33": "3es9uxvzmGWnE5VQmNLbP5DKuok1v6qJ1mgrtDDGPBkh56pZ2sikYB7p5Fx8kEXSju5Hb13U1dpmL2bMcZ2eK1q1",
  "key34": "2L8jTMhQ4xK5iPXKRKDhJ9nwibzmSeTkGWVzHK7AzQEXEyAxJ8Xh5PjfvJ4b7wqmLGHnqNbUP6nzGYrApJGHFnid",
  "key35": "52ENkiWiePrM9zfST6biaAexR1MM6N3WaHy9TVWuq1QVuXwswQJMZwGy6dy1NcdLo7c6gt9KCEckzsLpSX3Z3jvb"
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
