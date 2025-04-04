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
    "3Cv3Jc8Cd6zYJM75N9Sc3KYgJFCyuckGUEUmMzGeDkpkWPNzZT1L3uZFWEzhkFKxRxxHqsch2Bh5QnMCQnHcffwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGtibkWVFzTDBW2UabHKWF7j6tMUPjmfkF6PzqVnQiBH21o2T23nBxjS9nAkSWGvtRJ2rKw7mwQxy8TXvxZ8QN8",
  "key1": "5Zr3nCz6HpV59ZifKjxDEHL9hNWhcQdS7EeYSJ8rowFZz5DYxuYM5fiY2u9hWe594X8qiEs61RBrLWmnxcsp8dh6",
  "key2": "EW18BjWYYFNJv9wdRoQr7jLmyAm69wjHCNcUxemJgAc7wn4nQQxA4iGZA8ekUfzw1U3oo6ZLY7rjJ4dBcPg36yK",
  "key3": "3GP2Ay8otzNbx4ALgh2XSVaDajrc3TQbPgcLDmuns3aFdMaFNvcN2AuVLDmkGfbEgXrx7nHiNSvHxFJunGsRmqQm",
  "key4": "3jsqiEW58Yuf6KRBoX1HCWgjj63xfrggXeKu28z5axPfZ8G5Ziqev1pT8HLcbCpYQ3bdRFW4GcAwgdkZyYDFQJrX",
  "key5": "5jFKwcFG8ywFs4EVdxnbBoJnWris4zFgoDW1669SzXMX6jhhJ5FYiuHDwP6buBU8mPkix7PJEi5Wszj5VrPnpxFH",
  "key6": "4oyWFwHWfwX1KePohHESwGxZjR9AgBBWtTsjkiZB9eayh9HmpqYQMkn79mtJdXNAWkh7UYRyJFggXW2qsSPHyLVX",
  "key7": "4bHr6EdAYNghDzwSreVyTwVDDxrnj2NUdTPBmqkkYaJmzszTGNJUSPd8xm9d7Fjyp1iJnAJD3VKuyVnvvtsTaM71",
  "key8": "be9jWrFYDwk9szRQUNmoC7nFzv1suLhrbegizX9UX4p2jours84o45T3XXEexrDu5hW2wiFM2u7192bLBPkxSJZ",
  "key9": "53pbMfC4C8aCVcXG7DjVhcYtta8QBU4Zyo5gNux5V4t5PZyyFNAXTKmisb1Fw2FTDs3CwS8Xb2VQVjyDg8Pifr61",
  "key10": "4edCu97R9sZuBbRHdqK9SVZVCkkwFeV6W8DXNsHcsJJCnVawoHHfe5xrTov7r2AHEQCKtZVpFc9wFEGdMfJEtFfi",
  "key11": "3FMekocFzH8XQexwr2q8WQjgoqAq1X6pBy2ghAiWfU9tEygduvyTEkyk72ovGo5CEuzCDS65L7AqBDSrs1X8v3n7",
  "key12": "5Xw5ES7xaEr7fZZAnupRs1jEVtdzPNJ5D1WJjPCRZp9PDuG68z9LFmsKQu68id348gfLhd3Xm6VDzCBVPjdCXbA6",
  "key13": "2SCGSQNteLZTeNkZaDDRPVeftdXiqmCvdPKU2PemxJKpiRkxQyGbG1mSTeYdxEX9FgT6MMNLsFXv39CecPGfzx9p",
  "key14": "2rM5FU7Y6vu81f6d2jMbUTtMwUsTHBGoMUoa1uU8XrZNXiAnD7a2dVRBU98SGGgSBbdTAkydtQP4yALqXW4GsVWf",
  "key15": "4XZzvqEBhS3hoVpdELPLZu5ZBmFD6C65NLHMi7fGQ1LwY985EhdHTwPzY9RjtuxEqTN5jej9rkj1bnZdsnH1Bfcb",
  "key16": "65wMab8aZ8qnuHx6tcD6Va884B9vE3qHCzRHFdFsLp4Dh4SRuNpCbiFryEukjU7fk1uiiMvygZeuz2YSFbVUHRUz",
  "key17": "2A8V38c5XG4NgBwbLvNN6jXxAQifhZHmjwu7yFA9BzWmN92sT1NVtmMHeBydtBKQqi3zZpv5yR47SEwTnAAPCegX",
  "key18": "4NMSnpVXgCVbC6MCuwjgtHqP1FPLyK2zMBkU9TVw4T7wLn1oNvhP5Lp52ppKBoFhY4vNUk2wjcN5fn8auDU2dVUS",
  "key19": "4LZ1mdmNmY9T2qPLTYtDhiRgmx68SsJHgY6x9kosKRcs9MwsMgsrMviqsNCtYKecaNwJh7QpWWSAuH19UF6dXuG6",
  "key20": "4DknfxjBPi4yHF3192LpcheNHb7e6ifRNDK11kTP26mT7nUmfL5XbtbRNTE4tJNTpuxLBHBTLhttWmJCDnqxoK7y",
  "key21": "2VCejmzKjq4qHDBt9CoUzSW8HSBFcdvzXwGn4Ea8YgPRDsLTNQLzHZGTaAEESAvHxwCQD9nRaKEVpQ6tJNez642k",
  "key22": "SCtjpS1zW8AJ9iktWYVdN1FzaKVUnreTRE7uZ9g4WbqaA9meDaMRRhD8LaP2toUqoEAwyUSiqRfTXFwVaXg1oeH",
  "key23": "2Wog94eMhqboPGBZNEvv1NKS5tWaVkhrkwjCJww7CWNFiTihCVCWDudYg3PC6Z8j9fzsdjQQjdjszLwjFuNCJQC",
  "key24": "5DS9mcdBnb5FryFJxSbc6nZ9JkiS5Twv36xEBMEERHYQ2acVZbzfwADEhiUU2Tsww5FsXZENE1EfesooCsp55L7s",
  "key25": "mXC3GHnLJoFfmBZzeyS8wLMQmFYVNoqcv6NhyqRWsCvFcS45DV2XRga9dCPLeqM7zUCN9TU1cH9bSujtivPhUUH",
  "key26": "5Ugfcqc96821H1e95RC597dwsDH9ohzuJ1yBt35UYKc8294195NHHYqjAiSUhAAD3zeEMJrjwFcd3SPLfmCP4pHv",
  "key27": "3ew5BSwMVRLr8NSA24nhT8QLQt7zBvQtAx37JXGj3Miiwc7K6vrrthaBaSGr5NCUv4ExXcjmTTmYiDSz3zQ1iaFL",
  "key28": "5TCqJnh6FxQTJ6FCm3kyuxsf5stY3tvCksWSzeXaBnc1UyS8EbJrAz6v5LXDRgs3SKJfWwfzCzGdiTjTwTzoHWQa",
  "key29": "2Zw1xUYw3dU9N7GWstpvMeMzEUzkYoGnzDfiKyy2MimTYWz1gheA85LEaVkLBcfSYWs2QJSBb83HmcvJ3gmWqdLP",
  "key30": "38EnnAbXzUniav6pnRkbTkMhjxpujJZshpYmQmMgMe4r85ugFcADHK7GJjcVxSiTKbwhHdSDKg9bCABQ3JFhGCCn",
  "key31": "5jJqaL74djgyDRw92ZRmkMTEPoeXDKahevCTTFuJCaoU7fsWu2SuCdW2RpQSVVVp9RTkooqcpSxHRMyJ5qBTYP3T",
  "key32": "222ZAq9tcUPhMoxAn5asWgEhbY7iiTZUKcqqWbBjpoLHYY6uHeN3uzh6ac4PFEjPyvz7FqzVZTT44LFUwmX6ByE1",
  "key33": "5kk96GyueRkqLWkpqCA5g4wPp4S5kL18ncHfFsDAgjmjnw8kjLpy3XjboSAEgLzxYQDhCYHRZUMkwhJs44Ax9E2h",
  "key34": "GmjV4a5F3G8Jt1G4YJBdaoDzbYiPEjJQGTSN2NFEJ2FYwe5NiYVRVZxxEivJ66M2ANgjr4FAg8PFTqUGM6LzBdo",
  "key35": "drHXWbumsfdBAqcuXsEFc7cDH2khm1GAjVsyNto8ZFfjDjBMedj5ezNccnrFrC47vjwqJ9SQHUwxyjhZFBRWsTL",
  "key36": "4giAZg8WhEsqSA1ZPDmCyqj42vyyz6H5SzjYchUyyF4Q1mC1iMuzQiUwVrQvP4LnnT5xXRHufxnbEdxNdpk3irMj",
  "key37": "2WWQoT4s6QRHDC1PcKqu6TqS5mBxPpo7s43TFbJfc3h41Y9r4HtX8VEh4Go7Jw5tNUJnW4A54L6fX6GUYrWtTdBh",
  "key38": "3FrgZN2C2soL1NnbGq9yt4rRtg7bFazt5s3VNKa7y3XCPCpHb4YjqziVYhY3u9yq85Dy3zRvT2ympTYF6dEwZBn4",
  "key39": "5hazJvPx8rxDuHFkpFgGeaVgUYYQXQN2jyM9Kfm1r8XtJQGBVAYJ7j9L7aj588H5N9EPTwG3bekwJiug5frf2cUi",
  "key40": "5sKUxbyJ44YEkUVFwMcYtqxzHuAYJ7YotjiHGx34KWfHjHsHakeHEi2Hj97gUtCskH4ByVxJG4bjJwvUuNY6uXRt",
  "key41": "49aURUjqSemfqRPoCE8ZotUweNDbKZ7tzEoSPQLqrq16CxnyLSEZwsaQk8KPuAN5ukg1Nk7abP2ywYawTXY2Ysm9",
  "key42": "3zPJDoKhysUHrvv5iFSNfrfgQrskgTHWXef1GkJQEqDH93VV8tPYhEvYjmNABXAPxC4mxMR5QPpV8pgqiJC5AZti",
  "key43": "5Trv1EeS4hE9NMJXo9hHVRCw2nJsQE9Z4UA6ihtVW15DZcKPu9YtgvhR6r2AbSrQdqzbCENqaU12UeZCGPzHd4Mi",
  "key44": "3iXEVncQFQqKbHmZhzzvyLiV6YjLGpqWofSTbPqx9sG32QjPMMkBzHw6cySzscSR5nHdyyTdmNEHJ6ug3WKwsVpi",
  "key45": "4yisJv8rPFMUNdQ43AirR6RDRfE6j7Rrdi5RWoaiiECkV6tb3xWt3LmSdzkfGpw1CfNTRpeMPixBEue9d8Pe7aoY",
  "key46": "uPEMBG5Rgj1LZFrhNZEGXBogdSAFwFHcHML15LDpDhpk7AWXf3Nxzyp3bTHdXCM4oKGrL7Sqj6r2MNAG4zWNnfq",
  "key47": "4JCTAubg22rB2gnZww8sE2gKXq94p3ZGaFZvzWVWdPN89YDJit6FHnohFWe5zNipQfEWoT6ZMaVaHof3RQadJdqF",
  "key48": "4JPEMRGX7DY3yqbmnFuNv4jm8fuTeN5RsG47Gi2eqQaqc1fvQ6aU2pDMV5ihDvDoASgTQDJMGvkjrk8AvMCNnSkb"
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
