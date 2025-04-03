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
    "4buVZjVTbsXoUqkepVZKV4hQz2LcJn4Ms1i8DeTumWs8qfbZsc5mZkDhpmeNrBbVZyYa8yGhdfepf77iSxJ51btb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8NKaQCMSVyfz8Q1wSrinPenJ6LWUrgxdh9vCwQoue7mx39fsAMFh5M66kvFg4DQJMGd9g3ztwTV5UeATdZnJUG",
  "key1": "2SEiB7QYdpU9HkWcWAsZZjfnYkNdUgCMeRcMS4yWumF161tYDHEFSgnUCwph4P6J2mjDG6JPjcXfhipVazNuQSEW",
  "key2": "2jQzhYhsiHDvgedLEuqk5rugzV5EZXfW646GeSMx7bcZj7r6cd1Bjbwm2uzmid83GjhNfithHGFyywckoxt1x7ze",
  "key3": "41BAnz9nJQy8ayKVkGM6ZPYdAucdLx1jjKjCmLfEtzYv1atwMrLEsGWGvHsmK2NQKPMKWKG5osxteU8HwQ61hsjy",
  "key4": "4KLJyeTrSUWDKoVGQZ64M9gYhMeyunmFsiV2y3MpdzjTMCquwUNXAAwz3msHKii2LruZJ1FPrUTuxA516Y3LNHa6",
  "key5": "36frDYBPQzKmqfKhNjT5wipx7SSmHnT9cJ1XE2XTucE8qZ7UyDYif3RBdUUQ92BzbR2mjsibBPfPfoKBZ5NEifWd",
  "key6": "3sH91A2BSR9L3Ff81Jmw6JrZzKFg64qpMAsJjnA1jfHUwa7QRFM9u4RfbhjhDGof3YTPKcxUuuAnWwdA4iAtahJz",
  "key7": "5KGNXxeiVnmKZSMerAaLM6YamR59Fr5t6MKxMZCqWAdPqwC939dcbDwHJqGbjCy1iVSzHYDoQTQHFty2tgcgdt4Q",
  "key8": "2WxXC3H5tCbhbtorxX4n2saxKNQRUWtEUv8KV7H6wQt4roDpN6dT7kSytiBG27TmjdYaQABu8kyjb1CDwrbRf8q5",
  "key9": "2HxSF8jZTX1rte254az2bzUVbmjjWLZCSNDANGHqFaa9g5XUTJjrYrsa3GM7p1AAeRGAyDR3qoCDfbmHQhfqyVMx",
  "key10": "5jNxmBDHaUw17X2nsMnASd9You7FPPfwPFedp6zHqNmxuBf8NBp61j4kTd4FruDWCuEx8cDLeYbtHJURTA8Jp7xg",
  "key11": "5wKEz6sLBpyhHQLiSnQHbUqy5FqDJa5hfhn3rFhz8A7tdkyyNKxKvtHnTV9UbnZqFYufgcMRUnGXkmonhtyiFh8v",
  "key12": "3PUNhZd1xVVgqojCF6mqb8wXLqWhwv1jWin5S3bwWLEmotFqk2Wz1a5bGX15dKNCrW9YoYQLaE1ueDr6QJLu7gUx",
  "key13": "4kvmb1yoZWfG2L7iaH7AZrkXmtpdnY1GwUW5igsDkpevxyMZwNiJNqCLV9Nxgm41KURpGo2TCBygkdDEjx4pNFiq",
  "key14": "2VTCGpaui3jJ3nxDyBXjqPkhZXySLnCpupzzEjnX4QZGG8SMjBeS3zSuzAxfU6LYY78ir5BXdJbXKaegQCjWWbyv",
  "key15": "5qzjJZZCWVdLiu9BQNSPFUtdiDtjsUeBcgoVDSeNgr91XFPJwFZdt93HB39KBjSrzYjTSEKmDc7bUR6DPP6xfG6C",
  "key16": "3KMgf77ZUCMQiqdYsRRSCM4BJiaVUYWbV1mkJXt6bH1SAJYLDgibnQiV1iG9YFwKciFkCVbXsmbxsE1gvCtqBQvZ",
  "key17": "2Nwp5F7uHMys6znfpMfMtRQyb4kRLAvncoAN6NU6pJQuoQ8LjWg18K7BnqgwD7fZH3sxoTXMnq19stQknsuoMLFT",
  "key18": "3q4yKouNB3CY6ML2vPXDxKpqgL5sYvwTcfgDvjx7dzAmFmmx5YCCMAusSydEiHondEe1YQtUGTEyYEyovnRpNCBA",
  "key19": "2w3BTwRxfcpysUaXgRCCvf7fb4hZKZL2hhoLLuvswTTY7uEXayRDPhTpnY4WzntFpXXUPcw8eZuvL2j7HJ7ozPss",
  "key20": "46pjhcv44oMHUiS3TxFuSWVKEWqfGN4DoSk82XgvKePYv9ZCeVvCthLiednLSfJUM2Qo9p8TCRQKor7wJ57oZhtS",
  "key21": "3BG6WZF2EhKovyxmJmHDgkSpr4Ji47oE2hfwcZpiBX2d3f7EUTL3izsVkJugLGS79RVgnM5aKy2eTyEVpLijSTMc",
  "key22": "TY6NAiPFhKut98S3gzNVE7p8p1Nv3Hh8p1NG7J2u4NerKwCrhzx98MazNA4hTuA9eFsKPxWC2jBcv6ozcLEdnVY",
  "key23": "4eXbczw2HderEf58gsaActg9EkNKaTXLbpFEC6s5XdqcPwqcwLZwDBwqebMM6E2ogBZCFrnUrpZGaNJ5C3vAof17",
  "key24": "4nHfAjAqxxeBjuhw9GnH7e4haf6CBEs6PsdUaES9XJAa8vumMjDraQFM4nYP7RKo9gt1zokdPnsjaKSwdmwJrsKc",
  "key25": "66qcsora66H9voHwuWfqRKchtVYvgf1SMtKVkR3LBV3JjcFM3XefJzqe9a9vNjbe2TUmqUUpbTxYCv9WyyzzUDiM",
  "key26": "4F1W57EdbHiKPK2YHATAEAJW91vLBbugd1EHByFQbcUCVLVCcm8hXuwHSqo8SqipFPz7KbqXEvwF8FyXkrgkg5N6",
  "key27": "5QSeVASdCS7UDcBcAhQef1bt9rVJ4ZJoTS4iuHB1XFgA6pm3sJezt4wPKxf7GnMV7CN3rHB7PmAufSX3WBV9d4CN",
  "key28": "223CTW2gRtMLVYiLdwsMyRb2ioH55rppuioB9gVuzg8D2NGzcskVSqrFReeLZ5YcQP1ZLrcjkL8doxei4Tpo5TTV",
  "key29": "4HbhD2FgVqVM29gViaGH2vTAyQhQfJX5BUpRF3PoS1tTmNoWWk3BxtEUJxfExFRjJ8aUbB5FfNNGsCx7hQvTj4aE",
  "key30": "27dTDsEDmxyotQicg2jALZ4HWKq6GamSXpjpMkxq95WBLcrf53BkxA7M45CmEu5PckYoi2pz7TdvacB3iFPA54Yd",
  "key31": "2Mu1x981fGDhqHdQo3KHWgLCWtNrQN9FxrnZyQbsJXNnVaF115nQsxsQXHL2bCEi9urUELFvWjjjbC38fPAZBW26",
  "key32": "3EYAjg3KN1HypvcirpYK9CiKmydf5rFWkDZLGZSwgCj11iydtdY1uYCLajVsMLzPwUHkPQ71qANxjo9gFaDMf9v5",
  "key33": "5Khi89QTd58HCPCyRhXdWYYLFsYYnXQmteFsPWQuCNcY6zoQSYvxPVpHrPznN1ZMANWrj1xQq5ELVpEQsaV2ntiT",
  "key34": "4jP4wePYWfNwwSkkVP7qPsgMTEe2toAsyoLx6Pkg3nyC6degbuW5n8HX3JWQ6YA9A2wQu2pDxkJMGq9TfrP36QiC",
  "key35": "2ZY45xnnqhxkm2jmPsx7M91hzsExwSz2rjRKwgPjitXq76WSKea1WKarR2T6YFszF8Se9goprDrBBzwYwtBwrVkQ",
  "key36": "2N1nKUHuJTHCz93mnLztH8ukVK64KjshteD15TKm3n9uSQWLGzWY6Dp68ZCu2TBv3HdjHayGEFfEqyBELJogrjir",
  "key37": "5UTcZr7gEEgPZ8LzDpBmS8cHvDyBRVPgszynQABdM3Aug23yAC9HqHBYcA3dEUG275a6L1S6Mc6C41kJoecCfpFW",
  "key38": "35B8iji85oQpXjAuhZHoCFifd6C9HAr8Q2phet5cAE73tohTWksdyE7qmYfbL2VF6KyeRkf75Ki8HwrZFGYBo5Qc",
  "key39": "2ak3AMviAS1oowrvJMiwUEug5tbarJbvw6MrsmNg3dQqNUV77KkyAtkzwvcehiVf7E1Y1ez4cfruYdwAz8AaXT3b",
  "key40": "5CfGV69zgoEFT3jg375CPNdwJ1MUsH1Jcat9MA2CMncf4MmFR2BnW7JZr2Pxc2z2fTkxtP5J8aq5Rk1TTdi3tZKL",
  "key41": "2g5XU6V5JeHnaMcQhAY4u8iGjv7vj7a4Uhme6FzzNay3yq6knbguyaPSJsuQpvWy4V4DDkaUPqNT5kT1GrHPhnix",
  "key42": "5XVCyfbaRtaH7qNbCBfEYCTi5Umtqo7ryo3GsbF6vqFwG16W9Kvynpphx1bDNa5miKn1mAy4Q38bZ4mdQb2BZtxB",
  "key43": "2Li7PU6z75nsHSMGisYME3NRGY2ad49WCczFrU4T8T3saTvKdjCmNaPaF86hFfBz7GAgzAaZHhKz4X2BrCRhLuw3",
  "key44": "zPmwTq8Kg6uQGW9RNwJwv6cczFMSiS2fPHu8EXJar2GKWjZvmPzhJwkNrk6pVW9cxTvnjxaenNSNQhH3U6B9Qwr"
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
