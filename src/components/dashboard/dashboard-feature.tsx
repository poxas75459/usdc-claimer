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
    "4mX3GFqPqFWJRkKRYgUpTzCMvLNRorfbCY9TNLx44UPaAKxDvUsi1bdcDJEsUgGUvstqNtSJbpHguEVra2NDaBxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ah497maKFZChFR6crrxMprnE3ytCJWFY32mqs8E9cm9J6Mt59dzVTBzg32rer5nUvv54wBgPtJQpejy7xCBwRR",
  "key1": "Eqq5sbkqh447Ldb8wa1gaHfQ1xJsGhghHEdiz3NR3tkAgdMS9M1ucWkwfdt91XDCJ6d49jtmAqkb3vqsTh4N7nv",
  "key2": "2qKG6UJDu5dDCEqB21sGcf1Hg6fVLKid7esmza284YDJ8XRwAfjbYrA32DvKHyP3V6sq6WpstPyHKUnKSQK7ih4B",
  "key3": "SWGH7P5KADbWTkqnNdoAanSjmsJHgecgfhMBd8Q9kE6Hc6aHGj3bR468VGMC49TJWgPbcoxK9fuqMCPa3PivALh",
  "key4": "2JwHH2j5u4ZGaibeAZhDM6XSQaYLUsSTtbufg7Q8xrVqxkySYkDXHaR64ifZn2rh6Nbay7mVjyuiWN3oXPtMhNFs",
  "key5": "59t65ciZs8DJ2dfg8FSPbBweJskZn4DqEVv8q74mnRfc6Yy3CyLBzSaJRWoiUPH73XAK7a6qx3pjf6VjnaHwU19N",
  "key6": "4BEewrPoFoxcnjLrVL2oksG8pdZdssa6trdhVXCfWao5D3yknw7ijHT5UFDkSdgwzVhYSmrWfARGEs5VCG6ieNZq",
  "key7": "jWukGak7r8GQMcncYAF1dW1GisYRjr4oePUtHSvEPctrK2MS7eWXK1pp3kohUrU2F2yQkHTkQtuZW2AVWiE2DcR",
  "key8": "4WmHBZKgpx8wRppwXwcVCvpKRqMts1jtXd61wypsHb7KQmTNw5cLD7LRdgL43C2aXJPWX7nXEobWLBBrNkkecFFr",
  "key9": "37dHfUSdKUq7F2y9tu8dLLNgKRvTRTPEf9EVRgwcYJX5c3hXgLhjyryyDjjGDt3eyPi9N7gvhxkFyNvnM96TaoNR",
  "key10": "orUUYqMWNjHMKLmPgDXh8vr2tjY9cbreQLDgQVwXThJXaDCuMU1bmaxgogmQWeEN7RWFrRid2PKAGxVr2f2uGi5",
  "key11": "389MVBHvDKWntTLbi3SZscivGdbr56Vqo1Xf2hJR1kRj4ZGpcH2NTfbLCNGHQgcmJBCoQ52S4hS34PXuShapG513",
  "key12": "4xKcoMtC1aQva9waXKegHQxwj5iG5B1fjPpzdT6oEou1fi5NrnCxgK7EqKVrrghAVgfM6CNKkyFCKLHZoN1Ud94b",
  "key13": "4ujGtHNbzd5BX1xV1i5Pd4fCvGQrHZUZMejjDfnshVapVm3RCwHsQYk1XArGzcPTpHxB7Cq9zfZiZHnQF6asfHt4",
  "key14": "4RHqS3bm1gAVqy62bSfrQympXVQ7jq1qKY4B7QM17SCLcUFkbaGQvzEcLv8oHdt5RroXYFn9nFnRyd11zVuYm6ap",
  "key15": "4RrirYFYj1T3LTu5KnmY6tLticXNdnBE6KUiGbmccVbkji2iBqLBFgedxL6eVYpqvHw9rhzNvvAs3GLWCcSohU8L",
  "key16": "mATrYY45Atw3H1Q3ub9BFGbw6hG2kucBaLbGa6Nar5mw8ARU7MDxwnt8sBjB1TRrBAqeASKUFVBUtDg4DnakLYK",
  "key17": "5KbjdHNHsK6UX12Q96mytkdZhY845DZsRZ7JkFafJkUn2Le2wdyRe6iGNmRn7UyFCRbo2X5pU3frb9wLHKS7QWKs",
  "key18": "2FHAfCW4dhWtFQxXewNQiyek9ijrCbNZQ1fN48RzHfySuCH31zX2TN61XCrCqQDeqkG1WwLnfgF8eq2nereYnMLH",
  "key19": "5AUaWeRnQytLnYnDRG93X6EEQ8XESv4F77kGVS6y5w58iwxK6m7bsEzGCoS2f8irPP79Za76w9r7f8dTsv1mn92q",
  "key20": "5yoTBAss89xQszSaF2mayvZS6TSCo8GVG8Ejjv26SuaBXFCECUm89eAtSR2E27m2UkUU9ngLxe3gMawxt8pbege3",
  "key21": "4rnqfxRfeWHWaMwGqZSyPRzkzfBCEmBNN8Gp3eNG1aYtmxrzKEKPwgpTzKYR9Vt1wjwcirxa9sTg5xkG6nSE2thb",
  "key22": "suxKV2N4tQP3EAYpAtBCbzgXncheY2xXSe1Wqmg2589us7SYy9HdRV1ND3ieUhawRnGTdCiPwPnHuv3AJTKZnHj",
  "key23": "25NTLuYq7NBovHs8vMzt7Xj9gt6p6UVeDUUqWQA8gL7zHpq11CR4MWRtw3VMBqaieDAxBGScxR1T5MWoD8HWxBGt",
  "key24": "61VpQv58MvQ1FUovXgUGg9kw4dxFYL3opfCTmvVdjjSe94NAJqUvsP6WYGZD1tmUcb8VcSVHM5wvKUtDtUDw4oto",
  "key25": "4nV44gbjYSpokvEB6cnjgT33DXriEDDZb8PUJsnugTGBJbn4Fxpato7hteRkwLPdcgxpp8e7rpMi41K9KuiA8QK5",
  "key26": "2GUxXiTFgCunEhdrNvFxJRsofPQoCcCaWKyuviPcmk2ZtPkecYNTs3KB6rDkcjZU6vT3BBCPBncs7yxKC1KMhr69",
  "key27": "5136k54G1rjqoXQPoPqqDrDf5pnaKNdrBbHpbZ7972tqpvDVc7DVJpcRcZYecq9gRzAzHxPJTxBhFvRfKLmW1SCM",
  "key28": "3aGttzvFCUFiK1NFVGuKQ4PqDSk9qEujfNbCVutEK8KzSiDYtsvdWH1VQrk3XRxa6cnrE8pbLEywwNPWYPe6hTCt",
  "key29": "3sQPYqAb26mePkgx3uo77uajrMwjP4CnVfHjAGjsnjNMpDrdshgR7UeuNUnqeGroBaFSewHfYv9Fm3TA59hyqvFk",
  "key30": "4roRAc7CSS8cSa8azU8N36jNNDmomvdwo6jsvhmDeFgWXpB3rhiEv34kgnYvoNSSTMXzwpp4giZqLnw2dowJ8QsE"
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
