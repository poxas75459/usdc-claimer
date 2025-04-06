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
    "2xjqR6qJGpMcY9afuKHTsLmcep2KJLK1ahqQ5d1dp1CKQqQZrtGdRuJzhGKwKwcXR7xpWn1u2JCWReQGF72yhTbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPrhfooCQNptkmGEE6j5ErYo1PUVFAg3AWYTaxjr2CZoh1WHHF229jjRc8b5ffeuy4mSksMSXWoCP2QRdVQfXAz",
  "key1": "v5vY4irvgQg5SMrA7xXSAD98YecWASzgvxpFec7x5BCre32wiGeVndSKVKtUUKEkcs3c4kPYpd6wyCQMwyGcNir",
  "key2": "2zU5Dq9CtqL62pogbJBRF6CqXxRvLWcp6Q3jRK8Rs7LAsqqiFuaYWiUXcAcEfEMAM6A5qe1sDs5ZXnDDxKnmJmSu",
  "key3": "5UFEJvVDTeXWgPyJShn5LLNMquFZRmb7NQnMHuB1wp2WNohjgBmmACNcumuhnemcmhpb1sYpoFfqTpqpNA3fRG6v",
  "key4": "Tk3HwfAjeqoQTRMASqcqRN9zcHMBEjTV6wYLqzPq1dht9VLJK77R7Zp8mXy1H9fT2eDHQB4G48fEhFRxT7MFDbN",
  "key5": "NBFP46PjuxBNQfqUk9ew9Co9J99DA6FhdjS1p39zuViLb2q8oNFs7EskZyhurFLd5BtKPjNbUjMd6roXJDUpVAG",
  "key6": "59GR5JospDXByDVFy5HvzU5gAYDtGjBV7K9hAMjto1tNo7hVTFeptdSnc36xqmXdGvXF1CxACS77R81PAKVkjVBg",
  "key7": "2UupGEyy3V7pNWrCaGhqChaxXfsZWjQjQaNDib9PGmYBtTcwjckFX2TKUcueiGjipDQB9gmhrdxEGxzxEMCGFKpq",
  "key8": "2hVWDPvzv1C12UpHfFq36XoTeUH9oWzYEDn3MvhfpK3AMVRK7pXH6p8LAJstRvGvcJLZMzp7jo9AN2VfhBd3SHzD",
  "key9": "5KZT9nm43fJeEAfFJRgnQx7BaMYNNMKtFg2VT3hP3KgvEFzpZx4oKHTh2mPhBEnpynSPkzgGQHoURQj4mw7KXCtK",
  "key10": "5WCcQonn2AZa5TFsyhQzJfqdjg1PUhwss9xMAooSLqkBSTUHs2C9Lj4yKhqCRsHMKudnHJkz4iR2eYzALwDtmP1Z",
  "key11": "2rrE2jSwRJPsy4DxHzFb42TrGP27NkhHfpBSm2FDgroczCs3An9uUyBUupDjQPiKRs2ub8H3ZFcS33NKHqHGrybG",
  "key12": "48jqnfEyTgSjyDC8mxpKdos5Crn5gGXY3FEbPHg7EgMCpmN3qUvLemnUSwyVzfafMFuBKxUvRYMMQWTFkkwnAR5P",
  "key13": "Dxc65gjWVN7dkMsuHpVa6uqB3ASVA1Vo6MT9ttftj935cAUvELuF4s7fsYWKGAkuxmsJ4ipzXXjLHizTJ1rRLzc",
  "key14": "2o141E7L7EFTptapQJHA5Q1putJZnxLRVHxViXXNybh5ZMrx7w97fCmtfV6uQG7RqgyZe5dWHr78fXL5hpQcsdY8",
  "key15": "3e54XraTDFCkKKC8P25dM4TZ3yG5dkoLDxNb3ZuVgtf6WXunRAKKbexMDqcamqsxm2SQzWJmcmMnJMaYp7dAtLFo",
  "key16": "5grJQkMhbc5ebw5M6fChonggTNuofSkzkGNMJcHa72NATCT9HjG58a9dU7vo6wi6BXio196CSwUvYnePEv2JPtzH",
  "key17": "3pxJpUKqEWnxER72iXC8Lwwknwj2k8pB1T64NnfBqiViXC6sZAL6QLjSGEEgt74AZbTgxxVjujsDtDXwyx2k21eN",
  "key18": "2kmTVgNdxKHgfBZ2fvPnEjCTze63CZieTcmWQv1crxfeuyx9N7BHL71wdUBGXEmfrVKNJj7AiQnEgQ56WbbN5z48",
  "key19": "2CLHPwNsbr4khc1yvFz9WjQdUo7P3fA4s6GKDuMNp5bRwvBreZBRmVbVY1amLwokqqrRz9brdVPYDC7QEaRW7kJZ",
  "key20": "4WeACj5Un559JKWcjKkNu4L98CVbiWx4PrCUbDaHQk8wrdGFhvK3kjd7q7SvJfp9JAWK1T9CPJ5fBUpDHedCBtfi",
  "key21": "Qwecds5kHEyHUwWmCZ1zneb8SkU6mLZtxWRpdLWRWZAS4Ykk2cgU5m5KVddN3L3zrTRCt89D3qNSVjiHgWUb3Yf",
  "key22": "Tww6fQWgzqSc869WCekNqUeqpPBUarw76SHZi6wVUsqSSntCdtv11x62PgRXTPk4B5nntR5T7sELsAF2zTG9WYS",
  "key23": "2fuvuSbLt6WMtJhfT4HFrq4ozW3v4z6KRdYmdq3UKuEbat7oK5kASsUbvnsBjigU8P28JH2r5Bqv3y2cNDEwCLzw",
  "key24": "2vQW1EDXe7Cd2xPKxTZzH3gGKoA96ffeAb6HMT8BF7B8pWg9GSQxDP6xAHv39hrrJozv7eaNy2XNjHhNcLJmpYwm",
  "key25": "4S6F9jRqmVNjXCy6zmha4YQxEiwQ7cPVGn2JnVeenNSBfF6T2nHC3fWrPenujapzy4dsdXJ1KJpRDJR5z7g5n6P2",
  "key26": "2ZtxRJvAoEkUU378g3wjKEzpx2hV8is9RZgWJh5zC8uxBAUbQ3AWjWR8vEVEc6bQ27nw9voeh2WkpkgzFaJ9gTPU",
  "key27": "4dcZUiwojEw6CtjgkuLQ4UUrC4MaBJ62o9ZjvioasVpWGrU4acJ7hCD5KTyrVNQHizeM4dYdMBEHuBpB2vYA3YU7",
  "key28": "5qK2iHPoSC1XZcHf16h8gQYGz8ZqNwWX967rWKMv2bSsSdSgELd545kjaDqDQoZxVYQn7PaQX3Rzd95PdnVbvV4v",
  "key29": "5k77KbRAktmhrGRhNWzAxYUYtwPLv278JWtPNNPgGd5fBbibz39gxGD2qmmv7cX6MdKLL3BRTt86njUiij44WH9g",
  "key30": "625io6cg637dJyyveqmPxmXkPdjcR1iTz8R49Vj4ZTwMoCNzw9URGjtyMmusRAQRqnpsimpdBYBnQL3NDd2wYxbq",
  "key31": "3rP8snzoCcM2ToK5axMaca9fWG4BS3NGemnGLjtxrdA8PNuL8aPCUKak5e5FNZRVRZX6yAcWNM9vDwyHn1kGmt1Z",
  "key32": "pxfmEifWcJrErCY2QBbiAJXDcGbTZyTMDdtByi9EM7Xzaeix6WnPvfM3ApP2zgPn8MjWvU6Wy2FKUjuCmXgxDZz",
  "key33": "2ovrABvTsjiZvv3oHJHcDg5TFLpuq58wTE2e4Dxnibs7vmRitxGoaRGxv3WKX531mqF6krBXuPZFSJsZFVCq1RZE",
  "key34": "4A3jMmj5mdcjNDqCF8QkCUBEEKBeb4astgtnGfK8rFCGpYG9cBEb2iyXjVVk2VUTC54bPKGhsGvDssZdLT4L1FQZ",
  "key35": "2jQUp6Ky1VWzTac25YPpbmGY3zCVxUwPm8X9fe88JU9zXiXDfEhBNDktWroZ9T684d7995FU44iwi8WU4LXjpY87",
  "key36": "44ppzMKbH2dTbe8K87KtC7BMHCLgyrUA3yKYQCSq3Ws8RuAc2YMmnQnPk5srA4qAKpCQroTVWHGpwBbbwoMQdKFN",
  "key37": "2HKxkcoU9VFLrSUuvQtRebCsbJpFXnb5GVN9CGFVJMxL91RA77fuY8gaAvUFTRYQyne4W45zkMCLboMh89BxiQKn",
  "key38": "3PdsJ6d3Y5CAzRTKkCaMtbnRLCB9ks8voxfjGksvUThc2ASJxX54w1hgjFeumTzsjAX41d39Jrzg6wPDyChTPhK7",
  "key39": "n8jsUGnqwGbGEpLNPJMQAH2qL4essRcFcXxmxonbeRbE9YtsF9y4Nc6EXbGW4SVQE1N6LuMJLX6kqErpUef9J5H",
  "key40": "5csuce3D6CYr7iHrcvs6avz1W7qrdzUdsNvMymMS49Pq6XwhnNvTrTLPJGw45v7Cpn19AmBDFWjaXGRg9sdPtzMu",
  "key41": "4h657cxbNSCDR27mmEAtX49y1yNLFV5avrVXaEuoR4j56qryW2Gqj2XWSjGKeLgtGW6Dicr7tvUJHrhg81bHhg1o",
  "key42": "653YaXGWdikaguLjQ4XoyK1xcaJV4M9npobL7KW4BHVY6fwEHs9j4QjFJtBJg3GDRUhZgsGKzhMWAfXgqmMAxnuF",
  "key43": "kHa4Ay8cvnBmLEkRKrqTjC4fPBVAzNrdstP3KdPxRhokx7YRDhaXfZKwCn4mKoVtsTd2Yet27J4se76eQKVEPe5",
  "key44": "5FdP6Q3cEsrG93Mmc58MDYau4bri3bks61ynDJ891qHZqBjzGAsRtESFxEwUgcvysnqXPk91V9eiSRetyLcPGeXb",
  "key45": "3sT21scnHrwTfqy6FTF7N5MLZRu2RG1P1nNRMChPiYwFXExMj1KeR88m7LfUQLnsR69sNQTC8YjqNn1ynQF1Eces"
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
