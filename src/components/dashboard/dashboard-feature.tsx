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
    "2zgfAUBNGsH54BUxpoPWSdu2DmdaCmLt4bejdC1MCwEN8CvCQ5ymss6MzoLMuezLRXBcQqrK1afByHeSRs1xa8RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btFkebSgewWAfAX5gF6AP4JUB5woHdxhpz9hxTcWpnHeYV3scZJzcsg2GPP8Ygy7f9tVWerB2QGb4qkUHUrq7A3",
  "key1": "3kV7oyKF7yyWAaMa4ZMccS9EM2ZPtUMtRQ1UB5DWJCEdSqX7RhFrPxjEXwNrrbwyQUr2Vgo7bQghurMmrqTLd4We",
  "key2": "3fE37gkS65VxQ2KusriuqryamdVGqpbiFG8yWzpGDFzYzKW6GWSKKTAsG2KfiWiZ4XfVFpZp6MPTn7ZDBZn44EdD",
  "key3": "37cPQEAgxahTPWKKGbwt98LamemFFSxwP7dYKa2zULTyzkaGy8hcPg1WFzU3BvZJZxaGpWpxv8Wdw5ipS7pR48xp",
  "key4": "2Zvuf341eUNFEV8vN13nq4rkGjeASPR7e9M4tzCehMydAZsKHECcXTujfAXHkZL3p7PgaF2uc9N7eHcC3WCu1oL4",
  "key5": "NsAcNJMSMrrULqEx7KxMTJ6iEbTqDZXsRo446NGyukGxXubAC7ucyLZXDA5AQLr5LXwDGPpCKddn9J2LLEcS3Th",
  "key6": "4r3jfocJKrzVjtYsgEaKqCkw4P2oGp7HKK7bYguxjWub8qQDx5MiM9XDDdWWurGe53GfnFVatRtRzuidXm7YUknB",
  "key7": "5C12xTCRiJLmZZ52xBpJeAFnXDgxN8kvaoacxAtVYwdEUBJcQmhG7GYiFyH49vbRVA1Z29hcvNnSY7euYRFH8aJq",
  "key8": "2oZ1EmbnFFfLd8tpnY6rxfQtLdTtj7SGE63Lt634xhSYNtYDGaGPczgDqTVMAuw9xM1unWUGTz9PEZ9wpJbnQyTv",
  "key9": "4ZtJcbZCdViHZrGWrMzswQzuepirTU8NpV6Zvav8wHFVgRi9rXwipun6ziJBuTng8qDrpDjBQQAsnbnoSa7TbwUM",
  "key10": "5Wgt4oXBTqzNPjxoPkgMv9FVfn3tTspruKyrW3fSXJx1HMZ47fuTEasCRMeK9M2hPXMBSASMWGtYgZVyu4KkPd5W",
  "key11": "p8Heg5iotohY1MSvf8xGxyK8QmnU2czHpDpwSwo5kKEejuncAv68zX2ehTSqx18gzzMFZqotKd4UoMgh5RaX6CM",
  "key12": "2Q6mG1QLtpu1Mv7BvkoTivHwYrcaidPEyiQFLkbgoBTFHc5D2idWAFrULqftN6v2peaEfWXwkrFZi5PFvvEfqKhF",
  "key13": "2EkdY8BQvnzGJUkUNCWnDFs8yWG73T2jortxDmgWcxbPUdjZ4uEJPUsUKNU9ypv8tfqgDrp3B5P4NHNDbwCwiKg6",
  "key14": "aa9f2BwoDjoiJLVwvZGSr1zH3h3pK7LPhCNtPFdrZhhMt1EhR48AvdVWDRB5iu8hYKj5zSDX4SPLNbWGqNz4srB",
  "key15": "3GYw47ia9p5dGoGREH2TLsxPKBUjwPJDZUVFvHd8xBE6TPzfTyY6s5mJ8R66crUJEm8SFPa8F5DjEpmAMp4DhEbR",
  "key16": "4qrTbTp7PcbKybE1fzqQP1FLdcCwY42hBC6XZyAn22uPPQbTD3Y6tVhQVsjfUaj4MePHDijhX84MwkHYeoDuxdzv",
  "key17": "262Pzt7x9tenoLQBsAz1B2xGLptCUXtFD13b4DiEtHsiFNDFcP5N12rKDufc1mSK3wFHQ3GjJGF2iBRWuvUPrKDm",
  "key18": "26fxTfxFoqs9zYKdXjjhSs4qc1Avksr7FLLmmsYWtFBsdNs1G4zBRpUnF5ytFHzdLHS9aqgqh2MakY5mHsAFKMQE",
  "key19": "2Yts6UYRqF3KQ6CHvtnMwGuwyhUEyhy2difY19MGqMATBC5E7mDTcJtdmmRaPnmzx7m8pS4UjEVoVxLrymzqjKrs",
  "key20": "2RKjN1SvVPRckx6Qurx2LmwCmDsVjJfZ2PD49qginowec9n7iqrnQQW52HEUgf5K98gAxcuQgnsWj891TfYhNTtG",
  "key21": "rXDnWSv25pLWQxRSSveMbyMmpoQd2NG6BLUSRuEegmoJS8W9qacHGU4ca6QpJ4WX8VbZ6gx7Y4k56BEnNTRSWPP",
  "key22": "3kdiFu2iKRiTtPuqQwTrkHNoWqwsHktgejdoGsmpYafn4pEdvaAw6LPPq8ZPTVxCyvmdTAYiNmSskTfV8T6SMcyc",
  "key23": "5iFuQ5T97k7bNmXm89qsndjn7Hvdpnqz2SrF9eCb13yhqYAGxZ6mHAeTBJkm4zcSwVHQBgjagZBKK1LNQ8LDYg5H",
  "key24": "4dhnmUhMS2LcwcdZwTBG2CLnBnN34h4eibC83bva1ZFq1TP21yoxxUofgJKcuRkjY42BhvqpqhmKQnqPGjpZYMos",
  "key25": "3ZEy3Kn3SD8MRh27YMdaZD8prbV278HKnTSj9WdXx2BrrHmHyQeDkMj4W4V6wgMEHXeC19JPq9Gr9CBLbQVhi67Z",
  "key26": "3PyjAuXiArUTD2a1K286JuKLEicvk4WhJjtYLAZBVFKcj6jmALRxxcFKkWVodF3c1uVS8T297idfNRjyAD3f9nMT",
  "key27": "46UwoMjmqsiT8JazavdVaR2k3SioWv8MYS5S37jMWztKNDhn13L7Zaa4hgH4ctGebjU67qqUJuD1jDQo9Dhhdrsg",
  "key28": "hPdYNVDW2PFHcWFdC7rf5JQYaVhMMtdFb8YBLoxGGtMpzazAVJDW4UknkwkdF2Y1U5DdDaaxNrrNkUikQihb5UT",
  "key29": "5mJ7eHuNTGCLBreFn4aRv7Hi8gHHvUtjef1JbNcBTyXh5DdR7QHCNApDEBXzQidb4aSZtgJhrhYdnqduhCPEUHJt",
  "key30": "kKoM1DaEEVgytwYUymQNFgyeiJ1o5ruyPdwBU6dTed2182rwiSokhfuPQj3Z1Tnt2fENnnjd1jYiNFKsBm8HkjK",
  "key31": "3b3Upt5RKmp3HZzPm1mmVF24eWxesKB3KzEXF4V9zuJjVDBy3j6QatMS1cUTXmw6BRY3ipAdR6wh9MkXLUNETQaQ",
  "key32": "2JHgwWTRuTCAfHqyyYENbewDAYXRMxQt2r1w5mEDNiwWGsXGuCRXsSWB78oDrJoZ7KwyfdRAw4Y75Lmv1h2PaApv",
  "key33": "5KbywPqbxsqg3rPmQ2DdmPVoxi4fu5RsbdDTBpzjgRPsn6WL2LpXHLGzsorhrkVj3JTZmRef3iJnyP5gzkRqbxWP",
  "key34": "2HuedeAFav4w9AgLB7bWmgTCe6MqRGFkCdFqXhFPChFWgDr2myUHeokihG1k6xY3Rs5JVi1uLtaD23yvMjEWkf8c",
  "key35": "4SzZfJoZyj3SX5ptCAxx4vYMDTtaLRJhtGF5oi8SgrJY4MgwsQjc3AptcS3eM1pJhJKVdT3mxSwrD8L2GNh8c3uw",
  "key36": "2M6vntAPXLpx5LLP54sZRTrhaY3he2SJHGFU2mQzzEfphK4evtSjGTrNDixTpmz5WL2PH8m4vZ4tAnnusoKd2hVu",
  "key37": "3AChRvRLWiRmivhTWFYFBvXVNkbLYaFBfEPQ9sTMxxkkwKJsrppcFMuyAKtS45nDiXLVS94uNXizqR7ymgBFob9j",
  "key38": "3MLuT5ThFniyCuLEU3wbsqqqpSHdZRYcMkw1YS7265dxeTU8isLnR5uPhiDyifxpZKXfof2UeX6L8ck5DrW26qgD",
  "key39": "2fLxnnLiSJeJCB4y2qaJuyguuEZMq8RPgzMrqrqHRfQM7sGMski7ChVAt5iYYXSUpNNuuC4p13uzDWpRNQ3TWmcE",
  "key40": "cudGQYQ5mcdhoqMLTWyXHuF9X83QtuXwbi1MTE535hcNUB3ruvn1NdSacFyggBPKadD15yNodcjUGMz4G2HMWcP",
  "key41": "4wr7qLePwpsqK91nSr22f8HkkrJjpS9uafHHKoWMdegQBcNnbXdKAXipo2931vtWimwRkW4dJP9uxwK7nBo9ojwa",
  "key42": "5C7hU8i5hH6rKzMd9vLv44TU8XBQnvja4AXKYTQtAu2m65EzEGpnU8EFq2GMKZXGeDnyiA9MDbUCPq2MfkmrCCXj",
  "key43": "53WfDXUNAUBRmw19NjfMGQujwMRBMssgZYoVRKyfAiTcbwj3sWhx9xcHALCNpCegtdjvmkssE7syr19ii9Vkp3CQ"
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
