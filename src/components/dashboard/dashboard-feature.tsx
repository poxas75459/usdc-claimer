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
    "3ENSj8UmNG4gGZnNnEpu6QbK1VDDj1weFdngdmiDtPANXCB1VPxnV9n22DEJHummPfGd8peFSWrYhdabZczFpySM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GaxVQ53qbaS9iHk5XsTBM1otR2KmjCRDbDqm1P2h6MA1tYWQvJuyDfLAMh7Rgn6pXsiA1jsX3BQLPU9WfDrGFFz",
  "key1": "4twiVniPEDwsyR3oRpCZVJLrW2DCTQTFiz4kgtQKcR4VJ6fE7qLwJaXRun3us7J4vxSqubPTZeB93wg6JXPSH55p",
  "key2": "JMGYCSmYEhmYho6Z1GTWxjCmTu4rseNJzBUYFb5mxcTrKLVzc78jtRvFX7EyJC5HrAdhhSoEqJmn8gbyYNvEGW3",
  "key3": "siSCnotnV9Kayt14nVWTpwayEnHt7EdWic713JsE3LUysJcbfWHt3LL24GVGz2qXXSj3n3EW9EWSePmAhZk8TF2",
  "key4": "3NpAnVSnEKyCgoY6xouzUhCpsBhBdrm9DjgftJzayyyro93YJXXny63fbx7wBWjbjYWPYVAKkRRGNPkzJr3oKJLq",
  "key5": "JiGMJU8ZYcYTratWAmXAweHS5cKmpuZ1PxMCDnGw4nWtzpz73MSUSYBWR4uHS1QJRYrHbobev22ggzD7xNARCDG",
  "key6": "5cpfpfiLcZxf9EXWGvpMZKhYeKkSuMGnuSnQpykSuriQ7bsLsyEWHhN8QWPcg3ci1Nu7g5vHSBX8hbyVTT8dzWiV",
  "key7": "f58fzgBxBVHZrKg5x1CBuqbNQBbZv9koRq8UGPjZAu5iK1aYY5EGQzwumtjBoyo4LfoGks3yZBckmjfvsVk5xz3",
  "key8": "4KT3VL8ep2PoRdQDRzWERjFm4BZourbgXNsHDFbPoJwTAKNkfz9FatXnsT9zs2W9V9CZGBgS7FDojppioiRMhsME",
  "key9": "5Gd8d754GMf9gvokE8tFWXnAR4YSPZrkGq3kCofQXpLRBu2nHZp8GZ94hAzrYjFtjNR6VBfesnnqyc3yw1kb2qMN",
  "key10": "2jbiN3UzzJ6xtpo4B1NEi2oDALTmyncLdgUqa78yN9v9uno8RbDMKYuYQN8r9WzrmixaVUtmnSvUSW6eRNngDu3M",
  "key11": "2qQHVmmMCURcEFDrnYpmiucwYtdc4uVCesTgFNAE1AvrD35XxMHhmZEsboBrLR3NJFyK2nSzv13PgTJQfkyMQjgc",
  "key12": "2az1YSecsAaNFuvFL59VmFCSy5zQn1ZnMnpn9ZjRX5CAPY5nH4cvrzEhPW6VrXfpwe7XHVM3J4DLTGChqrQXWRqv",
  "key13": "4WHmz6HS99RCGA6YrLLg6Adg2hTUiUdK6uzRnZdJCBK8M2c8TAfbUcrNwqYpKQ9XQaD2yPLmDDpUcxqtR14ioPoP",
  "key14": "5jKutieGWvtL6KcnMaXw9Vqf2pupnd6kykbkjnwudnFk8nJgoXHXgrh65VGaAXka2zGu8J7h5LYTA36uHC9eXdsP",
  "key15": "27A3idhA4u95VQDMNu9vzg9CTj6US55qQShe1m1UdfuJnZxNnahXJifTPNpgW6mj14kjy2jBXJGzGBKpzRveQG36",
  "key16": "41VUb2dhT4g5oiRXNVEEb8HhwQwSm1Tj2kEcyJN13VHD7cSE2kJHvrNSXUySddjYStSVdBpjp93rVbtFFLUesQeX",
  "key17": "32nSBHU2cYYqrFDtFut3VhPQ3afjMRxTdzQ7bK43JvA9oa1gDZTQGrPy5JyNokTMP4XCvpDabG1Sfi9KEZCqVAwF",
  "key18": "33mUNN3oubz2k5nJb5YwyHxpokSdZTXG5WwW3L8Qcr2rYDpiseMqqvhdrDbkLQv4hBxBcaMaWMUqHAERspgcRnUK",
  "key19": "4nS9z3XJh6zcUbtZh7oQjiBeiSNAuPKxMmdwMJj51gJno8JGGPCfR6WkR88YM4Dd6Nu1CaLaAzgCDVCMSNWK2KYH",
  "key20": "3TVZdh5jZX52dCpvG29AF4z6bahq4xnviYYYpF67sv5dFNXKJJC7nyBXquPmCzackkJQensckcZsC3W12727ZnSU",
  "key21": "2QjMrdPPCkhokSrmPgamaM3MLwQVV5QqvjqyQjrEVX9R7SeadQoywXCT12cRREynX5BUWnZHdrdaZb9SEMNDXWx7",
  "key22": "31wyHJYxawg3dBDhtZjFRJcKBTcX1Niyx6RftMJGDhzdYdTf8jGCg7KEntkFoTRDifymcQnPwDHaDfENjCURM9Y4",
  "key23": "28T5B23KHjZeSxXUQtrPYe4zmevYn4u5a8prcMzPNKoACtq9RoPogbjGCmF5op9mxggpprYobenJjBVn5HYaaovy",
  "key24": "4bKZ8WqSzwdzVXxRTq572hqrnKFcByZ8oqbrwELEoL2eFjQHLD4yveqxrDHxrGbjsdvL9kpt8BMNtoz1WQfLAArz",
  "key25": "4syHon2ga4cnPBzQ6SvuijsNa2ggzd3FNPfLBgf7NU9K5vnXbMbCMpYptk7DAJ9GpWx9s2Ww4kEnubzpQxN1khYM",
  "key26": "3DQ344WYssUezMYGJhLHsfDgEVCkuyUFhr18k6sWyeP6EJ64GHZ84nY7Yx2chqAQCvfX7cBckW6QCo8A8BoFAufo",
  "key27": "3ihWoGWCYHjSVH3qL9Cr12euL1BGwnazTL8whts2rpTD4pb3TN8yZepFyHRQZ3u2a8R7q8pQ7HDCskACT3WAi8xn",
  "key28": "2Gj9nb3wJZpoqYHweDkmSL44FykNXApu2X61URFHU4kpfHJk7r1usJLSR9kBrAPrR7jJK5MMmMB7a9mAZ1SrNAf2",
  "key29": "yLT8KJqbjJ3aZiNeckA6HuPvMLQA9WYF4tfS3W3oWXBKNtN19zhDRxAuTPvbgW3cJp4Sc8P6CBhzPB91o1MkdFM",
  "key30": "3xieqkjhP5gpJmqVEcnbrUBUTDPifDMRKYDjeD8me2KdmCLwQujxtAFH1r9jZy8UDSVJJjzHfgsvzsCLTffdrTSK",
  "key31": "59YSddjQ2XVBw96XLqHrGGNgkiSkRtABBLQA2rMdxz5PcDdWFgNszNiVuR4f4qgKgffUyVDmnTofTj9CQceCVb29",
  "key32": "2vprHkXEYArH8Q2fiicwNaGrpCAFkPr7HSxKAymZRhtUVBATrWs1j8JQBz4tngSmS4mKheVDHWXNgxKnWwteCv1H",
  "key33": "2KwvX37KdrP1sBHgDEVaiEv3PAk18CGmvTYSFCRf3GnPM2g89i52ef2tUxdVyBSE3PiFCzN9DXSrvkU2a6T9aBhN",
  "key34": "3EYCCs8Ho3WEd7EDKvtDv9JbJEpXqwDvELo5XMYsAzk6qAjhup5DCgaLmvN3v3iKWFmGmmuL1gkPqzuxyiXqfE45",
  "key35": "5WmoYk58SdQ8ovWP7Cm8P3tD3o1mdHW1ciuKHQ3q4GjUxWVueW5t3sFYxXoPhy2sqN6Rng26Z9fA68cWSwcUJYxq",
  "key36": "2C6SVYuA2cZJd8Qe3pHoXWz5uiNK1Qu4e5GesKxER4bircSLJcmsKLPyqmGrTazPBvaX3zPpQTe2PeZ5u6bgVAML"
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
