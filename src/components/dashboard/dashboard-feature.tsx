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
    "dJbpFtQNAWdorz8hATAqEkhfmKkdAJ35LYMbWiiBBd5PoLZvxzDXCK8mY7u4ALRVrbesxbXWobbfeMMFE1XuZpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UL5DEzD3FE5SrZWT1EceB5j7gRkjchFmahbzKUWFExjZ3E5Zc4MGNgwqnsTdDsn5Dd8VbHoABapU97BQox9686B",
  "key1": "2idRvajL7BNsrDq2HT4kRXaLgXiy6H4VPExi26yeiUuGGU1zMLdvbdjYLxpxbEwxuu2s1uvTwxukVAYuogwFEXDp",
  "key2": "5MBrtqoXkVwgr4Q9gZ6YRDKD1Tg49TNKFQMsV3UKQ9zdpUgp7Tvu2is9dNFbqxLD2mYnqKmQ3haYUHC5PyPQUNw6",
  "key3": "21hTK3cDMPxk8QVZdrpigTosjFb7ixwbGspzTBUL6pF5sAQQGyVsESinzHn7jMEeyTqwGFa26dHS8qFtfTZuFz21",
  "key4": "2uTT22C2JThpeGHvkb1UsMJoqv18SCV8aV1m1EsV7KLxpgbEWud2CCVZuqKofFGEMvKiqo9R3qWqzojm83AAjmJm",
  "key5": "5y9q4oanDMtZq8fuQocZrdugwDdieiZeBJecqt9CLC7hgECJTFbdR3TKJxqL9tPyk4TVM7wg82m6EnT9nvzNP4iT",
  "key6": "2GJSvrLHSpU8WoQH7nCjFH3sGZLcLGW96naXU98v5h1TbjJZ71ziKVYW4UrpKACLZDomASdBtzoEvJ2unzEqL85M",
  "key7": "5mBgSVGiQGkaLcXfuz3TC25N4TJnJkFUBnCe7otXjeWdHRE7Pvfgmh8zuo5rdrmUdn7WFAzAGnkcixgHZxUr1Rr2",
  "key8": "3iKwYk5HLYtow3odP9iUUATH8CUGWXRmsRLnz2XCfdvvKX1QmF4NRD2E9HDUH9Y5WCzfNp1ZhsBPJzARWeGCbtQk",
  "key9": "RSbZPpPif8cABFpv3JoriLdCsegnKkGzrMYesuen97rc6mN1NxPZStFvMhfArX1rHVrX5853cZ8ScSzMHqriiCP",
  "key10": "2mdVFHNziaH5UFdyXeqQUVJhm7NmeCxReL5bqg6UWEWXV8DmqnjxwcuPHNpcsYALNYLmcewJm1yUAV9BbuopX1At",
  "key11": "5CHGHQE9UVmwAY2LPcuheeNyptsUZc46uJ5QQVHLxKWNd5M7yMuSNyJGSmEunSb7Eh8jL27CJ9M4dXbc1egFQMTj",
  "key12": "2YgPDe9oBPwE7HPDZXLTU7FZw5omNphDYeXE7KNUuz3cmjWniVLyyRFZQCvcEVpUvzd6ibKStsi5ZeoZkvxSQ1k8",
  "key13": "Lv3Qx7T6KwQsQ4oFLCgE1n6u73CbfqqErQC8mKPZb1S5y28PvJrt4PgrN16PVxqYBvpQGk9jJ3THvmsUnwCigay",
  "key14": "5zDmFo2LuU2Wp73gdzP9s7QDUdNjL2BS9VZWDcvsgYfznTFuAPVu9boZn1cofDZpbp62pwKuFcHUUpTYLiaoaPPs",
  "key15": "2ZuZKRZp9ak78k6k7DvmDMYZHdfqsG9G6hfiawoUHGnCJWsQrbJw4rKhY7akzJz8XWYx7hPJKT8xSvc77qPqMUb5",
  "key16": "4qRRK47g6vzmLyJ8MkpoZevfSv58YxxfZuCgdfo3aaFo11fs4YSWTm98NhyAzoyN3ERWVwoQ5gSwEkwL3njoABRP",
  "key17": "g2YsNL3a2TAa5LyBauT3hhQebt8HYMsg6yx7X9rdMHymRNrWP7Y5D9zbjtBzAsAFbTEQ3HV9kEMkwVu7zD7mF17",
  "key18": "2JF2EQx2duHpaBxPJZLPRi2gvQMbxtTWwwHfHaKbqHfUtbwmc7GBUj95rwMGE35pJnP9DH1xtW4pRTvbDoB7Fs2D",
  "key19": "4rru1h3Y9GRBZWYoo89PQXBd8hvLJXZNr3LkjKhjynFEnB6KCwzm5GKTmmS1NgZMpXaJadP14xGb341kGdQU7tCb",
  "key20": "2bTFuK1awQKLTwFtkLX6fTtFutMksmZZZMkFyRMcnaZLpwDSVRkUgzsXqS8WoM3fg2mQ6CAS11M2pAHtGS27ngt1",
  "key21": "38B8UMhviL7rXPct592EoCNWuBtmh1P6LsAaXr6A7kFRnTfJq6YkKamcvLuTTxY4T6T6cGZ4ZWFBJyDuMrYzaSzF",
  "key22": "2DUncVn5aLVjWpFCteoBWsiaqRdrWZXaeYcQLjwt8oDm1ss6sj6qmZayz17Yjp2C514mtfPGA9i8XnFwqiLtU9JF",
  "key23": "4DVvfjTf4Suq3Ayb28LWbwNqwLAkP4YFhyYwFk5juhTJzCPRozWcU4UX94PKzGM9SUhJ66vGaMf1uPpPb5vJ3BR1",
  "key24": "rmUimwcKfwfXj8rcb2ukV96QX8zz7AbzeQQyB4FP6MY8BY6sTsxu5woHaKDstbbWVdj7pTE5t83y9CAHBWYMqPh",
  "key25": "46cEewnimzsbefAR8qDkarBnWafZPgFDALZJbsdGidLpQ9gZKZJmJP4sSf4st9Y7rHeHR7kAHif3DnCds8txDRa2",
  "key26": "5J9mE9FKiYcyQUNckErPCQg79tpQneaQ4ygTuESqc99vQMtHW7XQmvb9Kd4twWPwBsKjgfzWQh3HL3A8PR42iEnh",
  "key27": "2qPCeSUG3x2FppgRiAqFszdzm5MERKNHFqVu227ygD9rQBW3159wcz1f17kkC4d15synHL6nyL15m87BndtpokPx",
  "key28": "5nTUoXtdkaDnrDYUpASusZFymwUuXSFrmx6GKCGWHQrRyC3uiu7y3vpuaft3Jsb5dWjSwdKmvFoaK635fqRgvSnC",
  "key29": "2VCoYuVcMmD2skobS2WgH8HYRE2eSPkmg1igiXgEfwig2Fvzbj1kECcaAVgD84SSPofBsVzFPgEXu6LuhqnAY92T",
  "key30": "333cJWAXPu63qwPPCztdkp4qaL7M5G5zaovNwiydTKU2Ddgy87CMKVyFZrn3seXLdBdVsb6N7w2Sc7KBCQwUTXB3",
  "key31": "nZfbhGLzYHZwwEFLa2HFvcv3iFDZdqckp7Qhjg5tSL382S82efi9YGXSt1iqYYHyBHKAEUDoZba1LHfVhPb2nPA",
  "key32": "5z9hU54mhkMLf4FdV51ZK3EsEnqScygPyRmEUYvouSd7nrvWk3uoKC8G8Hj5E76fjyqZ71jWrWZy3raKJB9giXRH",
  "key33": "5eQCDSW6pYK8NQBh3HwDhT9aBCftT6TUKoxbKc5sn7MGeNaoCayGBKxjKofX9i4oWSuhQH1MGao1GLDXdzKx2hBr",
  "key34": "3nWRVJnnfFWpHwf5hYzhqLuFCkG5BzRgHR1SXdZ3o4JK29GGQ6tnMWVGPxjsccPtQnrdrVFYrmGTVxhLvAZKfNBk",
  "key35": "3vdkxNqmWNcX6rBZ5LLtLAVPfVFx95eS9TSeVSChiC4rrTFSZeHHySkq9tdvGopTMmWoQLb3nDk2UNrZbdm3ur31",
  "key36": "s8bxs589vPabKbCvUmVF6aP2hKMmWK5rqTEkFzhJM6wX3yM9jCrq56VB114V198ZD17V6ExRSNfwTPBUQJ2rngo",
  "key37": "5L1KMAryMunWUJbTJDfeU8mf6Msxm2ZmPC2ETYcKsSjCU6JrUvonnhfA63xSrGUCXthS7ReJQ2papT4fu6Twy222",
  "key38": "37m2e3ivRuAdafE2SiBZ5BnvieVtURycGNZTW9L1PJFBp1NUo6F8cuBoSm3QMHMyDn4JHeZLbmULteknrL2MGgD3",
  "key39": "2wzoMxtQLj4qU9yo8AKsrFTzGKpLMs1LPFqrvnXmNH8Ko4uSEb1JPKhxoaXizLpxtC6V6swPgp3e85Vs1vBFYmLF",
  "key40": "4GKmnNRHBwubEyuPLAChNWtdjuSye9hH82MTpqtwJ8KC7nrSjPLBPjTHJCxxQiVeV3jefkBB9SCNEVK4t9Jd96Ae",
  "key41": "uSWG6UNvNdFnRAr2aik71hpWt5yY14QRUXtXnR1cLeBMyJqvYxt1s3oba185p5d4yUBPTXdGrJhCYU4Peiq1dW5",
  "key42": "39ArytPnS7eAYYjqMQRBJRvamYbzmoDtjbsDdwFWkK2F6DtTZg1QGYxpZez1YiuHB1MWKCcy2aEqETqGZn9274y"
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
