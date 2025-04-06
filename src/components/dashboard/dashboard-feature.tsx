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
    "36qtbtZN6jK9ZfrL3e5zoV6CDHgi9jS3RyFPjt9kApVhsv3d5u9vZMiHLajxkgNMnow7hoL515cUdgd26xJbqUcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2z7xb43jLLifeEydaNSE9vSrPfqFnQJdkmK5dKTsABTV4eC6hsmuaJKL8DzYQEtgdjKEMmLVEzMHyweErET5Se",
  "key1": "3PeaG8XbMJDRz9Ra6Dn9oJxDWe8BDfWE7BaKp7cm5zesFSYCTegSmi1hXDijp5wmoaKKgRm3A11d1tpG5ahWPAZ4",
  "key2": "4pFWFcCHPdUJxJRPtFyid8ZKGRDrEi17zViV5Epa3zU1FFkBBRTDmGJmUPt15QU83if6wM6qxAS6ykpVZrCwsvNZ",
  "key3": "31sqK8ZSsErKy9Ck3jBbPBRCJGnESxJTf2xoVqVuTfvihaTaGjgqnWdzzEqjMQA2kkoms1wjTyri3C7dLmjpnPw1",
  "key4": "5hhZEYueetBmzSjkw3Qa1qk1fnUncCm2vsneBPzK6xRRsnXNLs46ZfahfzU4QSKPmNymYoFfZvrd46E4v9Du7Exv",
  "key5": "32VLJCfjCotcVg7Fbbu6qBoUHHQeERukPKgrSBkvFqNMUG3PMq1dnkipctLtX8rShTMVVjjnZtmfNXCGzKa96smB",
  "key6": "3XCSM2yvQuFF7MXjyuKN7BBN32cRFYryk3Z5fcDDkWv47BA3AfTkfu7aVu7SDCqCUxTdYNtfaYEXu2jxt83R6w2K",
  "key7": "3o6UkMGS9DXaLSNQ5PAwFr7v2MeS3mXoQzTsQj3beBpHHmZvKE3hxc6pivZLpzQv4292yAPN54cPt1fRucE2ZXTp",
  "key8": "DFKVeyMAR43KLaYrgubVXaZLibowdPKGtq4UzwFe1rsAjTY28JD73f6fFEucALb3WkQdaJZuDZp54xWT6JEP3R5",
  "key9": "5VgunAvAkGuguqzJE1exC1Uh6C4QUm32qGFtJcPAWgDAU8YKEv5VW1K8QYgzQEjRm1CrPv34U2fNdXFdR5XM5Ttc",
  "key10": "4RATrf1vkByQbGzxto4Ttqeye7pHmKREz7ouUapmypLvAAmJoGTbTkqubscPJ9Vui3DtvAQmLHky4wnSzQyHYQT6",
  "key11": "33eMthdFfT5M9APv8M6bxgKz3944T8RmFgJQ9q4hCp6qhUPbptDsNp2qNtVtXcXYg9rV43JCy7SRGuZNfxwaUro4",
  "key12": "5yHdmnYgFhmuS3jBLD1i49R3rM4DNam2jZBo7QbREPDYPtKjofXBxooJTstZUqMdxrdpXv17LBgyD4uzHyPdzX1T",
  "key13": "4gMo75i4zY6WSpXx1hSCi6dzm8DC6REeuUbk52kq3rU4fwmSH1wvtkXxYh7q8wvVYDjxQgeNbwWgE96Ae91NBKLb",
  "key14": "mRmCcBUDumabHKSUJjDfPS5WzuAQ53DyZrRz2M6SUgaicwHUpNWqgFg3e28FWvdhVYa6dGnUBHyZjYFhrmzXJtW",
  "key15": "4d8LAkYMRJQ6rKeRT2fdSDWHvWjrmrcwCgkk6WB8e6bt6WuPNZMYzXD1b4rn6kgeiDDD63Kb1o1116ywg3F7aYhr",
  "key16": "4LS6ppLy3shwUf2aTjULG92vzV1nhAvP8mQfEF5AVKEzZn64NoBXun1iqbZuta11wwMnP1MRGdVgJFNTj1nqF1xS",
  "key17": "3sjqxSmJogrPBniAPWdzxpxBzao23NaRckTxHRTNxKhYb1LLaVfcuYRPAAHtqUn4uHXjRNsHxcYgFzCaLGcdap5X",
  "key18": "GbsqZNpdnU9dhwNBXXcuHkafd3q9cCPt1C8Vhx4bVUE8ZG3RGijU4yB7GMbvnLKUC1iGpbmDnuHrPqoeXsKU9MS",
  "key19": "3AoPi6zv7XmAtGCMYmnv7Sr97mjQjkUNHAdDEkFukZpZXtJwr2ZtWu158vBQtbfFzZJp6e4xdvBYUEMAUtciUfhT",
  "key20": "5siPSXXjkKg7VhKaChfp6GD43mztRLQXpSAzCgQsz6uqfiLzMprUXyzAaSHmhAYQDGvp4bhPicdkCwfLQmPLW7yd",
  "key21": "5aKcUza8XM6wK4mt3M1QprCkMwTVTF1X4M8xpSLwCuYEKsrMdSu9p5Qcpft5Fe4h94upRTQLWyrVSGH5dPxq18qu",
  "key22": "3qH8qkQVcps4GM1D1MgirP1nUarTbXgwdfURQdeyy9sJGdw14qeWFH4Z81RFeutekp3TomJaBcYKmKEaba3neTZQ",
  "key23": "naLa1rgaLczR9bJ8BV8P33SQiPHsSPGsLp7QFCdLf2pDT1DgvSQvEr7zjTEPBZqmCMKjkJf64bYjA1dyff8tveS",
  "key24": "5aBaGpm3xai6M5CGd5B5Cafv9xvktQLVfMJGNrCzLjfzHDgVhTFZdMFD8FyqabGCRrtV2B5cGaWf58ACpvrqqF9U",
  "key25": "4SdGLnxyTExuUNWQfNNi5ap2pSM7fDNZkqQpX7UvnfuZBt4JdKFNDfKjB6c51KqA4sDVmLfDbyfFsbqYk5swkZrr",
  "key26": "449wAG38JUEQwehUBe5zaG91NQXfRZgqGdMa6WV3rZhUzthYmWYu11v6bDxsHjyJGWfBqJvotXs8DqwWZjsDik3T",
  "key27": "4Nc4KGQPnwRGpMa6495UGVhkgJmf1PKSBkDAmboQrANMMQMswaJUBtViTiZBXsqy6bBFKmZM1oG94iCcsYFmwRs7",
  "key28": "58Bo7VokpbPkfbUqRubGJQndw1Kqnbr5hzSPvsJ4xqhBwtXHnd4Vj1qCxasfRHQKtPQCjQMczRbvNE4PfNoK3kzX",
  "key29": "64kpvfhk5Yu2cgEfiGPVYFwUB3Rgys68HwmTu3HZEohDRbFTp32He3hXvCj1ExLGamn7QiFCFSGdcqAgUVpoCL1y",
  "key30": "3GWt3neJVGh8cBYU1UaPuzczjy3nY6PFqtz1VBnW369u2g5zr6zn82b5jx8yxPDtkww8tvfPiM7dQsnwB7ahBxW6",
  "key31": "3iRJHQYQei28kyU5r1R1uZnSgxzWAde5tcEMqynVGmD5VifC3gayA7xehc2Czg9qVTCbHwtHe7FcBkVphERcgyeE",
  "key32": "3WxRF68MjvWYyfs7tP7gJRqNKgBtUfSCVbep2TSq5Q6qgZoMZM5rjBb7CqWoif1aShXDxaQXTDAr6gKgFUJTrFSj",
  "key33": "MVVKr7SuQsjHHazsLyGD5SS8EL9R8q5TjKXGabLivxey4R78E6aHfLefbdNbeo2Mq1YU3MCSS4Ly3hNQqNWAHBE",
  "key34": "3W9xd37ytx3mMqg1DTXdfGEogtMQSRBE2F3YfogNHfnDpv2n7QXBust7oLteoikTDbmGXcWSBzama556BGdYYkpS",
  "key35": "2pMRqRWtsUH2xrQKB6TTnuiCXi8weahF3pG7ukrRxCL6kd2R6qB4XZrKSnR3nUUpUzrGBk8u7u5ybMcvoXpsQxDN",
  "key36": "4As111aAXiTFvMjDXvfxyAtJG5iXUZtSLGo71hZ7gjn35tWk9E2RoaLnTgBx5zPGKsUWViUDYRjAawg1Hpsd4SV1",
  "key37": "5aBeQtX6mC2iHuBgbBBRDJ2SHYSf1EDj4Nh3Up52CJ2tEiA79xNMk5F89uT56yywvy8tLrJW99wGwNND5eSRMpUk",
  "key38": "2oWkT8NQg8NjwGx6mTcSA9Ehf1RiasVgtp5aC5qPYZndRn6cCgCAKey6EFKGsMdTShLrTHWzKuZBkvETUixNBErR",
  "key39": "khrfVX5diuX1Mr2UjtcgRdyGHGK2iKL8g4BAqb2W38aLN7BSx8WuKWPVBQX9iX6vbhCkG3YzCn5znpkg9DJY1m5",
  "key40": "4RqpmGWbrhRUCE8TrxVKV2bfzMzFaJKe2ys1W53rCUiJzm29f4viKYBxNjFy47bayKTRjtCSSsmFMWReMbbrz9TB",
  "key41": "3Z336VeTqZ7PAPJieGFxG1NGBVVfeDteHoTEJSRKyQh9HCwV6mJctipczfoxHGYTGyDSFhinBFk7oEuTTcyRhnEG",
  "key42": "2Zhs1JpBvHKP8J5i7e9UBVieYMZRa2cGKjGYiPMR84bySouAdf2GRBKQfTX374aBYe49wmcrZV7B66hq5JYcYpbG",
  "key43": "3XMXspdQygsxLeY8bGAcMmFgS2FEeVASe8sHmiSVKNg8StzFhC3jqhbevvGoPhB53BadB1wdSQRSXmcYQWi5zFZd",
  "key44": "4EPGUDFcsguvdvU8iNSnqqyg9M4eBCa669uQd9kBcdf2LNPzZrPzR5iuiebvcVWnprGyq92M1wwuGxmQwwvnCiKP"
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
