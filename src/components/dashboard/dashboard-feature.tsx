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
    "4hrt4ewHcJ2nYc6vuayBjrtydzvXxN3fJJ6m13XbnEFUw12QbsN6kfZ1ah9rGsWtMWeEHaNi8XBDiYuc2ZHzfEYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jccsa9z3U4KZuH6M76zKkHa3TGdNNghZvJVTUpWVK2VmFfMddyokD7mV8oLguzWMpGWhytSLY4tnkqnrgRsCdN5",
  "key1": "6p9eJCh9uaSkZfVGTDVh2ejfkHGvoQDenjjgNX6Sk5fCv514bNCHFBhBfTvihN1Lu57LUzi5LhphVg6CxppJ6iw",
  "key2": "2zUX1s2v11uVpfrHvFog5HGvVK7skUK3cZRk3dx8W6fxFVGeJTCVf8r627YXm3qVAaJMivorqu2qPbeibiuQMF3o",
  "key3": "58EiMQ2Ncox7zBPTiMfyMLsAwnqRvexgiJPEXRVYHfqnXMJnUoV3szKLofVeTWxm1UYkNYbpBUB9PK5Y3qjTtkah",
  "key4": "61KPbeCM8zHsiXm5xgB7RkAs2rgsYnHYpT4QMvbGC6jUxi1ajHY2QXVQ48q4TRBWGxdoCxgwAZjjyk6xs48MNw8z",
  "key5": "3xeD2sYErJkKHK4SpmP3QtJKZRAB17TYZKBSiph2AqiqSdsnChy3irGmjw6YdLS8HJwUNE7GmbiKBMrrPb7XLn8u",
  "key6": "5LYycP3Dw9CrPno2KMtqZ1KbXaRUXTGeEF4wYvMUV9533hETiS3WCbGgVTa3CMqcGpbfP4jpW67HydpmZ1XKFiuj",
  "key7": "4rc88UviyWrjFPqMCjirHZA7YencXqsEsrfdse9h2PskAeJgbMDCyfDELrfZBN4ima1nBfmGyyzgygFeCD3gmCbf",
  "key8": "2Z5BuKEdiB5DZrvYjQZkqLRpsj8RcMvcbuerQyKZ12yzC3UZBXCtZa7ERgZfti7pfXfuapa1dsG7u2YqS5fmbjud",
  "key9": "3bBtpfYMBu3X6PXyWcMXtLaRLoUdek7r62U2bwoXAB62Bt9FwUanrNvFQcJ1uWQDerRtHS3G3qB5sCh79NafR6E8",
  "key10": "2S5nZ2sP2qEjYYnwKTeyr55D6FX89hMGjvMfZ3nBFjzPXMY1UwyfihtmDGKSBQMpcmTDMr1Me5KTRKfaqCS5XAyS",
  "key11": "6gpnc7eCLQQBLWAvYXZVYh51Z95RJpB6AEpLEPTj5ZxdGEY97uL2eRGXhYx9LRWFWxzRreH7DVWSq9ZtMeZRPsH",
  "key12": "1gSvU8gmTYxHyWSQpznKLYjCbWjcg1AX8avYsFoQSeusZ75AZ5jiPwu5jERMvtohSKHA4VasTFBz2L5KHTmy5eB",
  "key13": "ncQxst7mrP1ra1mZCYvGrCwM6X5Yjo7xSat44qbiGiT5nYyCCV7hEzZHwQjiH2gXKFhhgYwtEaCXe43PewLttyw",
  "key14": "NFrBzaEwG9VkhM8e2oHi5eAfQtZDyaESXzveS5cT7DuWUy7y6yoBNsHfBmo1XyYdQbS51m8W22M2uhrzYQ9fXov",
  "key15": "5DoXZGhtHr9XTXCLVp12M3gXSSqDD79Tvzk4GmKt2VD2nzbZjhnBNEevWyhpHCXoCtx3oyAWz52XrzE3ardY35u6",
  "key16": "4QtQtLmcLiKKRo4PNZyDAucYC1iy5HX69hfDSTzcyCRKeNVfikVQQPhHccsmsXbCkWKZYnPr2iEc4SvBJemQnH5C",
  "key17": "4mja91w4VC7pyfXCV5Gbm1M61uswcfcKN2NG6ADdwDXrmFbXTQuPnvmyC72WPu8YihYnrrakaX2LVAYBm5EZr75R",
  "key18": "59hTHQVDWkh8jFtG5xuPtrMtXM4Nc3jwqC8md4gsi1dQwChACU439wE8CBn9NXM5SsVWKsXYz4Rei3317iAyc9qB",
  "key19": "2Lp1Z6bTSHdGMT2xWG71epkbnnoSQgxTJ9fU9aspVAZ4PKe7dSbEjhYwHS6WRFttHmWxqQf4ggZQNRtwMDDtGd5U",
  "key20": "2LzysKFzofkKmXje9WdjoTCsEPzCiajyA2QZBbLnTakjYYWaUuHtabgGcmXTFJrzbce14GGE77LyduHxtbNHcqqb",
  "key21": "2FqcK2q1N2dRAXhVFfGGgbxg9arHVyYSy63p2uDy5tV3xWrYPg8soCxs83GhXyGVbM3mTo4gwgcgwpC93tGMajAQ",
  "key22": "2da54k1McYwm48sqEtN2gQLShtNUCeTTy9Y2LejQ5D3xzyvinNwQiTobm79zDDv72UXSqzLnhruG6PiVy3jJAQnJ",
  "key23": "3e6N8eWW6SCy4GUZontsPz5EN3At8n32fATQngTkCAeFZmq9C3H5GCWzye81ohPbqnsXHtMSYzNtbn6BcizTc7e4",
  "key24": "5c3WqozR8AKPy8N1Xog9fL4HeS59dW1gf4BU4Wtf8gok9ERKJezYU568bJmgFkbxM8x2oaaJrojiWaF3uPk2QPcj",
  "key25": "2pwxbrbbfn9wkUPehdxD4dd5s1kKxL7KMRmnHfJVWRkvtYycKnuP9MZrAPSG7MCv8138geXrwBG7fMrvs17sgGpW",
  "key26": "2Sb7ciyYBKqxcuKqtQTksrysouWE836pZkPjnpkT9sQRqnCDnDP7qDX754hxMJHYze4cDWdExJppKJtwsp56qmRU",
  "key27": "2LhEKfpYc4KQGxoPnw8T6e2cwpT7t1CBnTnC5Z39Xa1mH1BKfDCQLpspdoG75zWx7aL7dCQNqHnaz5Kr1RbyXU9X",
  "key28": "4pKUVgZKmwDcUjcWKThuCmuuF1EHvyLjjatwoyc8Z7QL6n8wQJrG2USwcnxTWzo7WNguC2gfLZ1WJ5y2QQtF8tBZ",
  "key29": "3eZE3TkCEY5CjPgHnczoi5Q4N9Doq7oV1my25ETasZvmARkzJxuktFF3cmQTCh7ieu3piTQqjQJBkpCqb3ppcuFH",
  "key30": "3Mjpd9cjPcxymnXf5gTeb3AJhDiC8QmF9QwRxCpQVkyuGGoh8kJbTytNT1ftmRTyUzFZs84QYoGmcjx7YfQ8DBAr",
  "key31": "5gEfo9e18a7NSagy92JWw4QjsE95AaTYa794L8XJxKacxx3oZTFEUYEwtKRSNZFVm5HgSGh8acBXG4RThRSYw7Nw",
  "key32": "Lw3PJCL8rkf2x1LHtQF7nYMSgSqqVAHusWTEtRg4XjAEhBDnZ56oxyRUAZZJtBDkfeQVDbQGac7jcHfETmswRhC",
  "key33": "5HY5Cn8yWJh2cQSNjF7791JX33xoMQ8wwzL147vxY1arcko22sZj9jNDME4Spg24ha3sDivfHQ2VsN36aDcUfVg7",
  "key34": "XgTV4kcv3v6z5VmR7i5NzL72KUtp4Hf1CtFG8ww9XfGoArwngFh1dtxytsi5VmsVPG2erN8PFS8WioVCaUJj5Sa",
  "key35": "2bDwZZmW4ByVHKpqNtxi3RjgiLyJQRGfKaPSfxPGjgEj2ZSVpPG8grH3q3TeqEHUDajmi1SYKKkaxy6EGkd5iW5z",
  "key36": "47xMFSz7w6Lp7h49ku6zi1aujtoakDjyU5dMDtpLEGwXAkCiF8XFqP918eeN6v7nx1sUxDHgmtjLTLht3bx7Ysbo",
  "key37": "21BFc6MnWHd3n22Ypr6B6SeR3Bhf7osHSCR67WtCmbJoHC7LDzzkZ1Am4No97sBNMCSmdYYaLLihukdJ1AA8UCm3",
  "key38": "2QHJhZXHcuzknDNu1xUe5ucEyT2XgsKuDnSCMoapoeTDYzA5GLPq6NX3NP3c3DY1scH8E67X6hsVvjyS2hVZ33c3",
  "key39": "64ENghqhMCvDYotziTxS5i9rDMAfwn54C7M3eY8ubEobeRi4hPU1gdisdzy4Rzdf2Dgng2zv3TaFxVB43zmPijPn",
  "key40": "2RXvePiaAHV3NxfmL4xjTHKR3aTJtQBAa3qcpmVrZMBcxj1qNGbdKQdaZpNKqbP9eLD9njAaDfCchxxNETkVsqYq",
  "key41": "3nkKGp1qx29iraYtefpVq23XsUnpaB2E84tW2WCExWRH3JH3xJWfFyPxUTp2Ev5P5uKoxckzuGT7cpucUXFugBFE",
  "key42": "5cRFqsffUTJKpr7vcZyy1fteEbq8KkGvS6JqP5T9Nfgm5Z8mjhF94JbriYnN5kPQRpkeKKpRSUBxa91CUtZYC8cb",
  "key43": "2zVFLbE3ta1vAC2xArPoSU2jngP9HEcnep8LgKNjWxvtVMkyqjuVpDGWtsu3vvn2RXyLqMcXJi3NyXTUpMKEnEGV",
  "key44": "2twSnDSBVRJcdqzjy5stbfR11GFLGH4dQeoLz7CGvWg8Eik9qPr5PNMSaRmH6UXA9LLZb4scgJmYbGCNXuzHVpeK",
  "key45": "2Eh5opj4vZfHNUqmvjz87YY9B5LNfQypexTuFk9GHSRZJ4VEqVD3GMZ7n1WZ3WH4zdPjz88gvGf6wu9WjocmePkd"
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
