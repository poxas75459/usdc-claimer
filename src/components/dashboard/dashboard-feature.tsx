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
    "2nem2BMrhJu7T4nti3gpmGrMZGL9AF5EWkATqUKVQb27wf8L32usfkGHcyYze6dTdp8Mnkyrknewwphc2UC367j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJUyDnCTo6mLeuAS9Ye7qaj68Rj7UKCdw1v4Ktyf9yiDRu1pXZunuGkrdA9rEt9CoZun41eoCidnReqHqkCYze6",
  "key1": "4oaR21L5Qu9h3sM7ymgdRdHSuoXtdrSWNufD2WZN2khBa31LksahGWickqZhHaXLXFmXicvctssLWqctwCZjtTRN",
  "key2": "Xgu9g1cqD4QePtp4mBANsBVUVCLLppJbvsFkVPMj98mqrQcjJ451yBJrkBM5fS8qzMSt4XduHBpBzMcvZjsU4hD",
  "key3": "2psnr7sMre3m9eszP5erzZRpHU4Rbiq6djuTZar5z5mpygK1SRHLuvCFchLN3ksVg94pDCgfXzQXhYyzd6yJPd3T",
  "key4": "341YtYYhZ6tP6ELSBhQY45UGhBKGgDfaEfWFQiGYAo1NUN82Bv1Z51YfQuAanDtD5ZoEbNG6Mii6krRycjYjiuRa",
  "key5": "37tskrBEwhg3fVxc5Du4aRPm3T518YK7Q2hwWsr1qncKUnuqdMYSmXwNTYVSdopWx2KCbruphnDUDYUoGwudyKFw",
  "key6": "2HmmvoBnKirdpQsmiVuACYeG9VznBNQps2Sii2bNKetSBSVhvUDNzRqa1FoWpgUhw6b1QwL4S6c63g1pAXsdQ56p",
  "key7": "3oHoogHVLM32JLFJQNZNaFpp9ib1U4TuZ1uDrjGgeFj6jMxWypTYKNVWsgq28gJ35jEQnm3txLX38DWGyp73zfDT",
  "key8": "4Pfaw6eKNoi4zgcc5j28vXyQRFBMJ6dML4xKnA4P1B3bgjHxNvB14bPXkgYuw55MRaxTDmQuMNaMWRK8ntSHCdY5",
  "key9": "3hz5B15t5v1We6TBSwYf6nQZT3b5oVBy1gPUxAzcFGTzkFccqweBMTaX5St1iE6pfpKDCuGJUK6GV85XYY99tszX",
  "key10": "ko8Qes6ZniNrU4JQii1JreQvmc5EX4gCFCt7DTs3zqEyr4LgCac4m6FyfXNXmgCWe8nEn7A3RwNj3q2a38vmGdb",
  "key11": "oKWKD1sRU717vwhBRoB2d1UtZTqHBuoxnkdVEkmDEbpJZSAYoV3xqM4ou993SB8xj9mibBrtWRERQkS9yXBzNsQ",
  "key12": "4GpHnTXnr87jTvu38ADZXXkAnAT9owq7ojBjBSV63wWGwgRphiaDMUeLky4TvErua4uc8iK8ycPQAW3F1cRs9NFv",
  "key13": "4QTjeXp58wDVCs2aodPqnubWt6dfotoykvsRntQK8k4DkqKCYFyCKXmDiLDskV5iang3ASoD1d2Usuu1MzzL18J",
  "key14": "3MZV77ZL97DviXxLtM4DcwAQa87TmQCBshbdoPkzhT4gLDQeRXob6umMELGhuxSeCUUo8vHrJyW8WLrKN7uSemUE",
  "key15": "2EumXnoTy5cYsaS98Tz5imF6uXYLhhGC7fsQ7uksdFHSQWWtXxgg3JSwC1aGF2nT46a6GwcGx4ST3ReSs4xrn874",
  "key16": "2Q345J3oEYvpHVZjvZHPxt7nT4o53tnmjiCWsYVyx5mo3RimWKZTtLnb6CuV9xHukLYX4MBougp8th2yXmckV62x",
  "key17": "7FDMbR13f1aqJMBg5dgn2ECTkia3fC5bHWFPCk8QxxYAkAXj41csiRXoVQT67ruPPRwpfjpikj2SoeQVxLQ1468",
  "key18": "2EfJDkbLnebZB1DLfbc6m2i3CttiDrwRHyTz9gbcejUBrZHb7B4pNQe3wyPWXf4dLaSKYdG79PQ2A4K7z4n3qSC7",
  "key19": "589R8vhhunP5pB6LZQMWb89bMtCqgvSZ2PzBAazdcgwh9MvQMRpu213XmgVBRYSthu9AsjEtfhyU8vTYeJD7Mbtt",
  "key20": "5NvtvGRgp8JKoDbtAAz52svgiDCQV99QWGhh1r5CdTkb6N7N4sBq4Giz9wxLv5CmAoB5G8D9LUTCJUqqP85GwVgN",
  "key21": "5o5xrAKYEvFg3CcU5PSGQB2Ne7nuFQ5vfoxJjQCQtzy6x9U3MjK8LUSPC2sr9h1vGsdqGr7tJ8bR3Y3eyp4PJw8d",
  "key22": "5vuCDewmsxYpPXfCWvkiH8NUNbqZ69Es8LJm1nfxcUf2xDRSjquNAYeteLYz8BfN2XLet7r1eykpGk9ZoakQsh5z",
  "key23": "4pMV2TG5VWuLyYbD3B3WwFCTyXYNktZ1KGsHPuWT6QpTgdLeiAvrc9Z7rBmnzWjGcq5FZgwzQobF1oy7c3srJJ9H",
  "key24": "4HhuUGWJRaQkZGrB29w5ErboLm1E3n9iPmKbRamfnPhoPtqyMbq1YCw7JcsKoGt3zaTAMdwTak6Q3cCz7bJu2tP5",
  "key25": "4pbWat9PXDy418JnSuxLRaLmnVehyZKkCZxbGazkphQsBAoqscsgHXKNKwbDbqdk5yKFv7UbTeRfPTydzUzCU45i",
  "key26": "4ABLpy82yAJ8vsGih4dBQkx7JBjsic8tGfSVq83d6VYvtfQUngqFq1vPcs1tiP3gz3PhWFC5YvQJ1eHnw4kYfhad",
  "key27": "4EB4947ztDzqXfKLgbBQdTVGywLj6tMQwuMHTG3BssKiv54xmv5GANx5CXWaM2xnhrkN3ZGBjhinFcV6qtgKUSi7",
  "key28": "UKrhBZXCCTW2g3Xph2G7NFZeCzckreh47VnFwN682HgUdKdMRsvZ7UqTC1DrqBjiHc32F89LUYAJ3EJSvRvQPCH",
  "key29": "5nmjjY8cvUre2FWmf3CvWKZPHYsLrTFm2sBhoCdwvRrmtXH2EmXy1kXbTHpe6x8hUgKE6dJ1WwdJDYQYdDuvQmwj",
  "key30": "2dHoR63jkjecffi5SKQtU5bhNWs4MdJrnf43wC7zQ6drGbXLNx3U8EBzF17K4xKxVDsKnQ4GoamWrvBT7yJkXGWU",
  "key31": "4igUeryV89rvjy96ak4L8iSRjkxa9QQEqxLj2E9teF9d6Yr1mxQwTJMSZFThRZzhxrsPGXT9Bd5PHddVY2qCWJkR"
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
