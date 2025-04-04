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
    "2yAKFCr3mV1kyM8XsGjMPjXXW7n7pa2uQHBna7ytYbGvkKAjD4NDEbF54Rk8cERwzztevMJz2kTbyYSSPjtJgFLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEcjni4zvgA6xtnw8vUAc3m3FnfhW4s76YbvCPvJhLf8gGXef3zjAzzWbB4U1E2GDqhYFaNXsQjemjj3bTULh7a",
  "key1": "39iawJ9fxjfabYhaw2KRWKJLdBz1ub7Vxs9ibGotofEgs4MQ8pRJ1fnaXwmdncm7FAymzD14WAsyWocedMYGsbff",
  "key2": "48yGd5WW17GXhtwwhJVqXSWQnS1VFHhvwLZu76UaazmhENgugKxZPrHLHiF82DEY2SwXfeDyR1FVxZumhF3PkmV6",
  "key3": "5mw32kfbjZa29zsHfJ1gMSdqC2QgByEo4SX81TviPWGpwiySzdybTjvwDytSNPDx7xDbLwAyChL2inkqQM2nPcw",
  "key4": "4WCRKQXVKsStwtnBxFaxKJ8muDae2wwScAzvUzL3iaKvb7rqeTQgAjf4otwYEWDwYepcgchk3o1WLJNmRXfpyT9h",
  "key5": "545R9GNecij1UCm5nahQEVKSsMURTbZLKijETvLRLA9UJPkQFkrs7rzhjUzXTPNgr8mnytdYCQrKuZZu4yroqxuK",
  "key6": "3H1xJDRPtqENAyArFQnD6bAzzX3aEefSY62Ucdh7wAyB86HGc2WEE9193hDHnmUVqk9tkMEAojekAfenpP8Ls3JS",
  "key7": "ziEaXQD1fTxK8tjHcuoQ2E2AqR1X3n425GuEK7ZLuLx5hFanRqqiw7SFaKFPZbRbVFLHztZpWz69jE7DYp3y7cN",
  "key8": "5Zf1n4F6XbsDHGofCha1fanKdwgwssGdxptm4yE9bJH9haBNrHpGbYvyjVzyVQFCwrbQS8GuudjJ58ybHzWkJcbH",
  "key9": "54Uo3Fza65EqyDwuWf83FTU81q8EEnDJ7BZ6Ur823WVui8whAALeG5aPDxuodtxiRBfWr5p3Qpifo8LcuNYD1L9V",
  "key10": "5eKfF1S54ideZ79qyHJyxNWaMvB9ciGYvFt1PSveC3rWNQoPtT7Z7KmQNq3roUFTS6HzoZv3yhYX9m22fE7RumVJ",
  "key11": "5k4ju7npcBgDcDbgq6Go46tjq6FRaiDXzzxogRgKpdXUTZiEQJ12tix4LDc2FVjnk3tgozuNm4niyansSCd1R8D2",
  "key12": "485EZV3ypnXYuFKL89MLXtxy3qH1PbcfcEgRrxQ3Le92VdM4wn9hc1pn1tc6ABBMaNeKc62MzdY6eQGRU3P7Z95n",
  "key13": "4GQsAaGE7KCUWaPeWY1aULkq8kap8d7tcLQa5t1CV12BF5q2NSiViEB2VUCaXBNxYaxPEDiVcpHyc2b82xvoaQ1q",
  "key14": "a5h7yi5JLLVY7wJDQbg5KMXvE7nqe9MNHpUvBxEkN72i3b2xCMRAAhq2S7rYypqqNypT5t8NS6iS8W8jBYjuzym",
  "key15": "5sSCRcChrT24Vjy28TJuRpsrArEZosTzTrmo3MoPczSbU7Fa754fAE5U5g2P5Dg5tkhW3H6Cdh3K5XSvButFk3uZ",
  "key16": "2UWpBStfA8BmcBkGpR4YUoEsv9Sasz7qG8Pav22H2Zw4LFuKGtEBpjB5ysaa6tm8E95LF7MmnThW5gZQ2b7VcjLM",
  "key17": "3u19CKsu1aYDjveAiyU5eDxaUWLcu1SZoAjb9dyz42mHjtFRPamtjbJNE6sFuP1XWNVGbUFeZRSGBsm2jHnzd87T",
  "key18": "rd6x2evmyshoW6D1USTqaTtDpbiFY3HAycZiPKxiWDRAXatbL549CTyB1TS7uAUkpyNewd6uDS9c4Y1M9dMzr6M",
  "key19": "2hJuZX2dME26iuDmbHLAq1G9KNk2VfAr9BAkNKv8Czi3mt7FRS4eJyyQnu2QLWgXszKN59TdKwCrfRKr9ZXn1rH6",
  "key20": "2zeKyavkCNtLWptBtyTh5dkSjntMBX4XMAtnFRsd2Y7sa1w2PSt583Zr48G57nhmMuUixJDUgS5Xu3gecaSF9MBk",
  "key21": "5vdGEESeCVp1n2vPMRcdMfuJqHEuxuySHGHRP9JfvxzXYysWyuQ4Yz7k2ZMvgwgPfYQe4apGqnASwAa19oB3rBjX",
  "key22": "4MzbJkqimkhYZDCAoGfut194838hCLKVqvzgKfJ9XCxjVbQvFZBYK6DMzsFZwzcx1jQmK1PGWFyNiP66eusvvRJo",
  "key23": "3S3E1qEWk1cGjASDqqLcMp42bFVabZAurh5EqX5S7SkJLZCJRUharnTLM7JpxPDgomknqqPCL7kDXRLLP5rDSgSi",
  "key24": "4xCUTe8tYPDmvd4qngUXH8cMv1a7vxzMLVwftNjayrpkyZzt3HDDwaUnUL2dmcXBhhP93UhNx6XqEjqD3EYXViJG",
  "key25": "2H9dyn2CaYakCsn3wbGjmHndRt9xQ75vWPP2CGk2N1BDyNTAN29ZPcB3ty5v8LHvX8ptSMmYeqDnqjwKU1x849Bv",
  "key26": "3Q5vUwbmnmtTSF9EbK8LSeyN1DkWpvGiHenRhr1bP3fYXB9mCJjSBJSg3KJXRfeBKTrqRVcC1AaRnMWC7DqRtzy1",
  "key27": "3ok8vb4S5uTTPhjHMzY2jUC28zXMz1pYram2R9cJFkswM3u5NyxATT8JU2V9XDYpzQAr5k76A8LHDxZX17HrPci3",
  "key28": "5gktvT7biPC7PdHsh9M71vfEtuTyeirt9U5AgMNRNh5SNCZh95a8yMb9gGY7YUJdqUV4ZC2XqDrp5MN8EKkiSUgk"
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
