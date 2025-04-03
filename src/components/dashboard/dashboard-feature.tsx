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
    "3QjK3npnJDgPSfCNE2eXrd2aHSkJeqk99JkSpoPiLHafLTuCvvahCakuZ5pkS9mvWgFXkDqMCq8VBdQd52SsgvuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQLGzr1muds3ExDNCyZduxq8fTGyUKESAk8t4qK5jfkVtwxPZG2TfqqND5S3sCdbwsdxcnXnNsJ74KcPAeE3v5d",
  "key1": "45tg8GVAp198yeMWoXvYmtMmJEpczSuGa5AGiAcjvnJaPWZ9Sn24se7H4uijCwvSKvaYNBEbv6nhESCy6KCCJYJ5",
  "key2": "3pmMDxpTWhQLpjtvAQNLrbv5Q9jS2eLycoHj736FsMdwMUJHLktDFomRBM7h6ZW2z9VCat6u8rgr6Ubavgxe2oDw",
  "key3": "4NnhZex5qEw12PiMYnaKcJdgVSNvuyzYjHSchWP6CVzv4bAYqBegpvGfCFjKDKwinHeyehArf1zCjv4FbrDkCMip",
  "key4": "3xqKyZwjfdgbs4mCcjETzKRu57KTs3mvLWnkgbo2afyTiERchhAUsxBRzEJ74wVourkfFnBsHXuYNTS1X7VJa9Do",
  "key5": "5JLnzh5JkJXBSk1ZXhLFFGSg5HdB6sus4LtzPyECnxqnNvAf6JoUxnB9bsY8d5SfPCfa3D3PJxjWkff2MuTma2qT",
  "key6": "2G3mySpt2gA8rnpZ56WVuKsKsraZfzh7BXHhunXYhXG3FjsqCFUvoJ8iaMYS28HrLvAMhdqofkF5ME9WUTQuFdLZ",
  "key7": "tF6HapGrc8sR4Vetv6CLnuGqqBLSMWC97b8UYmLGmFFHgoxJo2uTLqqjGfKCzEa4Fn4m3iVJVUeyK15GkHMrPUi",
  "key8": "4jALFdN72GAmiSigQTHpKiB5YD7KMpF4912fGZzBfuqaxdK7KTqc5tbg1M6Z9P546bT8GCEQaQd5beeH7Tq2U5N7",
  "key9": "4JzbhJefUDVmPGp4hFWVtbztsc23gRuYesAV3kuqDPLCHUqdAeL4HhkigiHKe41uSiGSG69K8m8nCPN8HHQzJrTM",
  "key10": "5uj2pF93bj9hyn4DmGZ1DwkYyb8YyVUGHZriBxEykZTeVQQZduK1YgQ2CWWiogUrjoVqNsUHoShCGx5YYKqrDVZ3",
  "key11": "2WFiBXnExrSTH5qdceqSe8vAKKFJisN9sZuXBNGedx9qS8VdgXeez9Z4iSr7ae7WcGHj1fNmcEcY1fvsE2pmS6uX",
  "key12": "2yv6eQ9Juhe7SFXK4691DHwPoLRFbQoHRi1CeJQ6vecPnM5z5CzGgDYkerw193sXUrkDiz6gTtC9ihwMopfDWt1q",
  "key13": "4TWNF4JVogJjAvnnsNCYxG1cpDHokTpUfq2deeYCZ99kBrnif8f5MwHmCPis8zrT1ZpnMk31NErBmJQs42iKPLbw",
  "key14": "2NiZSxK9WB8R6uM19AWy3mGt6sS2xgatzo3yNXVgk73Tg1eqJYd8TV1gg7CkNUEAtUEZkyJYqmHo2j7oZGSfbz8o",
  "key15": "48w5rwxt1HjLeTRjwzVqhvvdHifyQAMupnLjbKEUeRAjAwLH5ZBCvagwzgQwuTGy3bnoB6J5ufYpBiCtEqk6RJm6",
  "key16": "4ErKVbDr8jZ7Ak5P7NBqS5kqV9j2DL2Caw5VCpHnrCbdjesLK7PDgueAZqXTUXaeFcmtcgnWH6D7VFmEVgUgvf2A",
  "key17": "2nyeNVGkVDdFxezvv3fBVx67WwEDgy7BcxA7WvVxDyADMiQewV611CZxP3A7J7aqPdR5ezucic1B9WE1w6tVmf2d",
  "key18": "2UaJbnTCDoTHKPASsLMVu4BUqJBECxaRZHkQgzyqq28AqkqAhx1LamR9KFzjnQaM5xH1RZpLh2TjbrEHdMdBQtSu",
  "key19": "3rkWdLZKhnaEetK9ZyLc1nzGRMzEFdnQMm2WRF2sbEkzcyLFao2NHp2HQbQeqt8wTWCahegphDeRM8Vvd9LxXJPM",
  "key20": "4Mm1xVYZUhEPt8G5L3V7epDVxb1ZpRDQPZCEfUh3w22Lt12FD8S11SoN1matKA5QzDGcxx5p1DZ6sBPgQy4yhNc3",
  "key21": "3HVgJvGmLt7PW46EDDKTeqnNNzpv8sL4974F63wAg8hQujyy1GMja1SbEfGYzhMK9zDJeDZc9eqamfCCZHArMK8u",
  "key22": "FML6KGLDtpctwi893WHF4PXBiSGgj6FRZ8BNKRCvxuP2zqjU3gbcr3319hacGaP8SqkZJ8qWW7GG8cUpTKQZtCr",
  "key23": "o3HrFKqoBwJPhwYJRuS525pX2neHn2Ng67eioKtRbJ9PJrBuQn4kb5kJgZv2EbZVgMAy7kbndGSvpyRNbsLeLno",
  "key24": "5SCjcEZcyPKJX2nZjpSWqAfjd9HLJiEBFvkQYiSVeoJfo6Vmva9N8Cm2F4UxjPJipajXSra72nFGth1x2zD3He8n",
  "key25": "4crn186QRFNen9zUYUv5TWwQKo1XmDGftWEP55Ga7iTjPqmMmVsXrP3RMjehSNs8btuvHwBKPea5tNZzNXpwefWs",
  "key26": "3U6qqFgSR3mwKh38WLtJSeiHPhRonTFm2Z3mqev29cirgYLgD88magCrVQrK9VYaRUMju6iAePFRUqp1Uh8seRpc",
  "key27": "sB3zwQjvFQaDjN3rrtBZbBjFgqcaEC9rWYehNaN86PYNyrBAoFc9XimR8roYrdCTrw4J2fxKdiXXJSZPkvRjkZi",
  "key28": "4jYSYHKcoUgCdYuHiT7qphE2Wvp71vfzt8UDxhEKgCncqqdGV8VMSqc5diBBCgLZXnExxUexjnFXyiH5wWYYjk69",
  "key29": "3JRZFT7Nh75JyAJaKzcWf3w94TqL5c8NbiCKTwvMsdpxkeKrN34URbueNEQhi764JkwPGY4EbWizsUDWp2CRBTkP",
  "key30": "395LwJ64zNxcgogq3aLdmAagGskQvxJoNAUeqAUBkeedwT9b3JKH8wtYYYBFBKV2u4JsMM7Xy2qcCAfxyFosq35s",
  "key31": "3H6MXjNvrpLVSJEAQhY4ZRiYbTr2XUdJvboHtZ6FzQ5kFhBgBtgP94zAQxyq2VG6CjSAXQZCVxrH2e6ncoLJRYg9",
  "key32": "2N8GSzaHPymFjEZm7M7fhsaG5h2dK5nWaatWgCjuc54yzwppA3tmFX2xerdJncHLxu6N85ZvECrS6Nv9qTq7RxbF",
  "key33": "TWtmEyu5sTWnazRNHNEfK3xFfBvMnvP185gma9j5CumjQ8JG2WpZs1rqW11du7JugrVGd74ttgEVffJx4rJKnDV",
  "key34": "2NC1S9eGLk3VStNgWoVsaJjtAzvVZyomGMWdM4Yr4yKWeZdMuGvZxmcDXZsja38jFVifTiB39SPRqDCZcZy8tx6y",
  "key35": "5rZrnB1JV5xcFPr6JKXXMLHZcM5TZx9NSpxmUFs9K2qUZ4nZNSQpCfr7NCrZuazSeLmrmA6qVgYvADBkwq8Nte1c",
  "key36": "64Qx3bZf6hYiwh8tfah3cMFWrHJKToLquGAmH66spZXmL4sJHL3Phf24QRxbGqd1eYNEdKSqJ7hrr4tnPHsqUBZk",
  "key37": "62nLsQSMcUKwK9jy2HyzaRu3GBHRP8KC5TrTmCeWtfAzB2q2teA3MHJXCTkcvzj7q1VdGKoPPeaFcTMjTQtWuZGS",
  "key38": "4GP3Bzqzk212eMU7JRjdMLcGggp1HcmTEWLoBm6BG488NE7Mp8MQxN4RhUuHak7Tox6id5eYUUHwfxjSmRQzpiDY",
  "key39": "4D9Yy8pRriJ9S5w5DRYiBDuVPrX5sdRsZHKf3qhAjur3xzGWk2yzW8xU6zXt4ZrAAwudqGFwUR19DfuE2zkiaMpG",
  "key40": "29uKpPhmCcZRfKoQjhtvJBcmmfk9rAR488PnhF56TUttozDBHtdfAUcLRwxB3MLB83n6yvS8MZVTebnvUQvHcvY1",
  "key41": "3n9vi9oSLQHnFPLyurgBr16oUkozKX41AhtJLU8ZRmzVxGdWzLjfCc6Edu7bHvUn3yCP939TPb4epB3gQ3PUeyza",
  "key42": "27JzC6LMDyadb7Ww18VCfnCGmPz8SAQz1aTCEufkwZ7AEk78fnJL8twnTtyUa4dYgL5H79onipFMFC5yiPFM7RML",
  "key43": "5US796axRrsnUBNY9NC2XMJmc7arLxJLCDg1XH2Hf1H8LWbdXjMfBtwTskYjzZgJhKepq6h7o7a9mBZunFQSXXmg",
  "key44": "4p2KR8zwUCHe6ZyxuV7u5FLPt41NcpqPc6U5ESGPfg7tKpHVoXBcMfbYRg4qViqbWQgrZRFTKbevvAgdmwLKAYCw",
  "key45": "2gLDarWba9HdiLfyiFcxiYzcZthap3rngwpDE7mp4rvB6XFbaShUCwZWv2sBAtLhC8PCJC4A3PfT3nAzA14KEUcd",
  "key46": "4vJwPiSmVcMzVfPXpfHLkqUkW66gVCkSt86XoXAHqMupExsvtfQLKnUfwfEbQ6tVogApbCzRGnwcxFpDY6ewxFWG"
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
