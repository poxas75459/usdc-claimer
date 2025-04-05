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
    "3s8zKSnRSQUws6MHFaophh6WSUkHV3xJda9r9cMwYcmpcmPK3314hCF7M2W2hZ5RPPsrQgP3NLMfmsaefVmGufBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R1Ayvuwz6toGBRE35oq7enEWNadt6wYWnMuib4Ly3Lr9KHMMCE6jxARoyDddFcDSCEWTiJj8ApQGufTgioPpKRd",
  "key1": "3uQBZ5K7q9dMvK9TZS4vd9SQQQjs7c3UEj3FVoMrjp86xDAYSqNP5mh6hdTsoWeHZg8Rf9Aq93efXbhPmgXQkCk9",
  "key2": "8Tf133vfixz8ZyAi1d686aA3JSYdeSeyPnBgRm2gU6SqAfWjFibKhSRviPnkHp1VNXCsdvM2cfojUYiHdaCbR3N",
  "key3": "3xHW2N9jHgGBEJVUUtVjyP9XvaQuGkt28qiSo7h4pYrF4ojkaApfW4VUXLWAu2szeNfjqMxhix3hYTKVx6YeQgvB",
  "key4": "63WD4D6xqADfszGKSUFATFoVD5asBYskCLcxp9KRfMAp5bXKkejCVchWWCcWBrvWtc4yNYjK3wqxdcdSNf1ZmgEE",
  "key5": "bWNyG9Z2YLJwRpwjAvfrY2ky9VuXNic6TzfoU9Yjoob9j2eA8rbibisHzirGDARKa6dLtUp6sqifyfWcbg4hgFS",
  "key6": "u9uc14QdwTAXJecE8rte4cj9ZaK4Y5g5GvREpoJd2xYwCzBW6jxe77WBPS9cRmCMrothFUS4Bsw5aadA6p5aVQW",
  "key7": "hPkFHBySFqzj638L5k4DN9XPpbprZ78nH4ToJQucihEFKg1j3ChzFgmZeSxbqxZu25jcnFNpXpZescdAY5ATytU",
  "key8": "nWPQueGGVyjnMLHYEj83epKt3Kz64EaGs4vqxarYdcWSjth1WJeoEAP2aiRL1wZEtKehmGcRsY41eih3tyqAFFH",
  "key9": "3u5rNZVwTqFMQfegHaf8vvHVLVfAy3FSWvNJLgE4kvT82Vesocp3UndCXV1WC1EYbEpaSZ3CcijSkFMbbBrDYDhA",
  "key10": "613BisobSEFateFPBr5g7F6rtd39JhyAMrCq16r62LkN7KZdYDsnVkr6F9ka7F3Fgfs6T9jn28fJypxLHdDXGhvc",
  "key11": "3M52sHcLhUvKXq9fjJWiVkUPHTpzSHJ8UPG3uZVasosCZiKJNTxYiFFbguvChnyYcKbZfKXddYmHTh5utCjQEHD6",
  "key12": "5NXgUxvXQX24rxz6Lg944PNBxGcWSaPXsuaqX85YQxJQjY7zdDr7wnmuJqA38tqALjzRzA4bMf5VW7JDhuyYixBm",
  "key13": "4SfUVU2twLJmdQathr9H9FBnAocbgGFKNS5csnKA67L4XFyVmXy9HoeSLViT2KeMeFKGXxp8ZHcqESMkecg79H1u",
  "key14": "62Hrn6nMAuPbw7wJew19xCziG77MoT9qds2vwGK9YkskMQNYwUbdudxX1w3vpJy3jzP4v1hqvoC6xErqxn8QnQ4B",
  "key15": "fsSo8u5VTXyGnk4EmKBwKVFfT43fxtFq9cmE9WVXX3TtE7dUqtaQc9N8uqdjkTViKfmUosPUqirLP1aQNXythqe",
  "key16": "3GWfkbSLP86mR26giKVZBkQKAn9XsGNCtG4BRszoNFnr4crSoTVHqs52HM8Hdx2cr6gLournNs5s7SgjbAXzsx84",
  "key17": "5hdDPceNZaPDKh2Nup7GjzS5Pt33r8aLT5TMV9V8kVwX8JTdKMBVn1P76ESN1oPzCzqhM2LxZao5wE2GFEzKP2Jc",
  "key18": "3DXVgeZYuqN3trJCjK89A5SHuD9WdMNaWRqApNyAWpKxWn644nQg6jixpPyLzdRsmMELFLGoTdhN42dDtxmodqyW",
  "key19": "RLohewA8RcdurqST6GgsC4efYhPN6Dv4Zqa8jthPmeeum3bFQ9R2Km5zLUESjFVF29ehyprSbArJ1g1xy86SY1v",
  "key20": "3xr8xnpX9hPVQrs53cM6mhbqYed5jHEcQCpvNoAoxRUESfDogDVqZq1vwoFRt1LpkG2HnLxsuoHZ9axYs1hCGUi2",
  "key21": "2j9cTDuCqXj8m7M6NC3AAmZgXQ225Cc8RCa2tWjDjc4yYE5FH1QVUcPFrZjWYXW1pWRf2vV2UJ1fazpeASoZkMza",
  "key22": "5ZhMULRA5yuyZLUDsYWW2Bnvw8mcMw8Cmg2UKFHN4f54FTrkxy2kWuCtLMEGRTRg31RchEQEjE33cMGydqWkCnGC",
  "key23": "2hGmjAQTFviDTjpqBgpVFnLhx2qVX8GjSbeaPUQL9AxwwmNrtaG9Ti6KU4qXvcUr22C2DBKH8mosA6ieUDw7Ty3a",
  "key24": "1ypdz9WMFM9rzA9vmJbc4XHgEfgPpM8VhkKgYeVu3gH2gRXfJj8NL7NrQiqbYwLJbfb7vJ3epw3NSrmHxsgthTc",
  "key25": "Y48ze4vLZARTUme2u6oeGzXwn3qCrD2uFXjNGFTDZcEQMgCfJGniGYuEbyYeEt8Q7jiwscs2bLtRJPEEQTLoXqb",
  "key26": "5z6z2Po9FyXRYjag47gMNbxJCQKrtiyDnnAmHajyT99VZ5Ky47UftsWD5pnyaB5PXSfXaZWM9ez1tk6sBUPpMcTP",
  "key27": "2WnkezqYWBvTXWJGqfqrrsfVNBDq6XcFrA7BrS9xUJp2FvZFe4opZMztUt4CW3Lhvi3HkjMRb5tx28t9PVLRLHDG",
  "key28": "5EAF3sW1H8M5kj2LKk7SsXgkAcp78q6CKcqa8szyp2vkDSBr1kFeEVvp4tJe72C1JC37HrsL8YSzfSQFdCTsWfta",
  "key29": "462CEpVHJgyWQjrbspYLcxfdDKQTyELaTqf4MWkLrAMQ674JS4KUq3b9QTiSt7y8PhWXtjvbehU5zm7v3H8gdsmZ",
  "key30": "5pETVmTUoP5gVxPGDs9WX3Uu3JnUgLU7BLXnCk3wXBbiiBcboQK9FMB6Q6ZdhBVL8yHD7H7kZN5Va7i43NzhNsZC",
  "key31": "4jnw9vcKYE7uZA96xVUDrKDXMFwhHvgb5Vx5hYhPoK4WPsiMsQfeQjDuFGVCCRvs8DzYPv88XLNiQUjJEVoe5Qxy",
  "key32": "52MYiKJy54hf86jMpM95sECzBMo3ykVA1TXqsKiEXv3zLq3UBfux4jfXjMjcSC1YcKD1PJywyPGEhpbjhjpMoWbj",
  "key33": "4rbE2icSAJLXNmuytp89XA3HN58WQYdFWWPtkHrNtFS5nWZ9YFhUQ4YeoPg2q4XWcAc4KU99aWrcR1TMVbQCpmje",
  "key34": "21Chi9iVY8gRExYXhBxy5xecRUxgdsLQxMv6SZu3N4EC6RW72Zhyj7fw3cntW5kDbefFbLMkkA6dKXyQZpG4RdJq",
  "key35": "NoMNvZ9nMyUk7kX3X7eLf5213hnU5FMM379wzy46eq3DB2XAvguNRP4rDoC3Hw4V3eaDYT3HSecZfTPfQU5UPDn"
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
