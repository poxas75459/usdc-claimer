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
    "4z9VwNxwW9uf8o4E1eQVzK2Hg3473do5HudPKUgk467wG3H4UbCBYWyThVG3tK1Mn56o8AK1hd1LK6YmcYGUKeTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYbmkkZ6LpeNtXb3XRy3H7SPbUeBdd1kD4Xj3DSZAo9y3CmmV3W5PLG9AHExwQV88uxyMfqHqMHKw4Swegb16j4",
  "key1": "2u5fGvXCcpJypQr9QSzAKWT9AUxJnNooubsA75p6UodWXey4hexeiQKqP1VjKvmkyYGgdzx14RTab3vvN7p76NRq",
  "key2": "wWgS7bBdga6TUKZtLVspeiyxoLyijAFBKChs9ow3YZPERUJu36Ghm9os4ziGs2iKLbXcwrNDpYwAmTXkRZdReKv",
  "key3": "PKgDBi6mzsZfdBUr7q7E2g5Lw3qq4s5YhP6GJrigMmtaVJvF9Mqea3U1xifXfwdjpytxNmj5dFyTpdKM3473PNw",
  "key4": "2zpRwMNwcxdox26xSBiWz9foCqH5WNASH6764D1NCb2eFgAPoXkfjogaWFqTKRFS1RKLh9rx8DkC2Dychp7f3uRq",
  "key5": "3CqDUs1i2Ao3VuSDeoQcyFKhs6FG8YH9C4mXJJo9wWjzwDpB2sbAHYdRT6Hn8mZ6morfDseruFM7HHW8sB8yHRyS",
  "key6": "VKgHXQLwBrVnVUEXJZzuJCFRAsH5uhUAD37bBbxHNkJ92Diecyjpr8CTmvz9yBmkMHCzFDaU8DH9nsvHMYjaAr8",
  "key7": "VRcUuAvdDZgRrquh2Yreu3KNQomBL6F1BbHFZVRrV7UwZGMvNPtN9Wdh8hz8HeozABJVg2fnfaJVCP9EC3Gqaau",
  "key8": "5HcNWtpeAdWcEiWPCtZB1dQGytH6TqcghgpGX1GD89vbkZXRpRtcKHAmuuFB3ruVW1TAMNp4dAtLYvJBRKnkWh1J",
  "key9": "3osvqC3vFCkS3NbVccXZPfZTNi44xfj1H4c6GMLRTq5t8KCMYBcW9M7VfRrbDb4K2UsrAWVaHE7KTQJNfdHpSFab",
  "key10": "GEcNKnLBkht9jMKfKTcciebVr6m6jMZVonvxog33281A3Fvr7TXtankq6TA38dQUrNiGhBSEdBwtJeFXXtfgJvJ",
  "key11": "32f7akiLCunC2JryBHwd14er8GPUagDZhjZQmJM7mbqHvsRNRKGE1qnh4SReLgraUjm5fzT7xGb1P6mRhFLJpT8t",
  "key12": "2YFr7Cy32UFT2JNxkufsHjmVEfDRn1b2PmDtMfCSn7t7JVvqgHmLHUPvbndercpowjyVYJibivX2xgCSZ6W2XFdH",
  "key13": "3ZGiNuwfhzfX4YLaCXuDJT9czyEmGJeJuaC2XFXY4SxpsABaQqJW6NKk76SLnVsrVHnTpW98Lxmodcu24DPBsaux",
  "key14": "XREF8QxNmuphTs5QXM8gNnjmedRMTk6wbZumeQhdqBFubE8KZvUwu1Yyj622229vx78ZMGtduV36yJ71AaMePig",
  "key15": "4LRUsyUYXgkBwxZj5VAADwKfK4qiLGtRD6Wvj5RgjtkPVBy2aCpnSX6byP5aHuoUimuykd1jpc8V5pPhKag1y8ib",
  "key16": "53KhN9opUnekc2X2m1Gv1rL1Ap5p3zTjuA2J7nK4zejpsP8VrxYqRtwMAePHsLahrdvoLZZpuZ3QqXDFfPCkJmdc",
  "key17": "5MQ7mcaksVQ88A8ptZw4s9kmAULTYEYbNBuCgsT8EmCF1p92B5ERPE7dWDdnz4rJtTQDQ2y3WCnRkTqLmVpJjvXQ",
  "key18": "5YddN4JcwsTQfy9LmKPSRcoedWwntVzBuJD67QULeqWqsQuJddc3xp1y8yfd6aRRSRGGUdiAtXrZFdQZdizwhCJ3",
  "key19": "5VkXWKGvheFZYk3kizwPRAWpPvrcJPaW7ypHHAVdWfC8jMxL9fpy7KevoG8uuJYnoAK5xxexfVxz6zkhEw6MG7c5",
  "key20": "4tWj6BxbpedodD4DKNi34Ww4h51Rkv6xQQgrvVuSvRDhWEGQitdaMvz1u4BbdGnP4PCLehPRWFQEVwN1KMNHWAeJ",
  "key21": "3L4Xw4ZBJt1UQF1FGsKVT8oQduCBronFK8557vzknMzDYxg1Ban7eNsv1JYT99s6mueuX5pgcTWHjsV44aC7qSRG",
  "key22": "5Y3jdHFUJ6c8QFr3JoofNgE2y18ZSVS74Homepq1qN7aq3jeT7AQ75odD8hQGysZCD7we2HRo8jqWJXuRZxZTFan",
  "key23": "44KYCBB8QjkHJVfGnnywSaKmbz7gzzZS5iSEW7NMCRvN65Hp8SvdXYJafH5bLvewn9CRYCTqnybm1Ys4FVjnFEpM",
  "key24": "53X6xChN57913NGBm2GoHLspnMkZvcTj1KYXYQp9NCVUhxPAQsjfip9XcigVp5gSA92ZWd9zoXzxtS3LxR6Wn9Si",
  "key25": "51C2ct8p7SaQzjjxCdCyjTT5vqC5TqVjPidYHmB3tsWVykUY2XrhVs7WQT3rGLujPbc4xmhCATjUpf4sAYRhsXY",
  "key26": "4YwFr9tYH5azXrfBxRdyW8ZDFKMH5pd6fiv2Y2mvZstaveYTsPhsMBDGALms8wG8VWkYrHfTR1eVCJkg6tFYE4eC",
  "key27": "5mkjqNHNatrynxs6rb8Vd9qJYtzdReHz13DhMZij5Qh5JUMyYLDAzPMaQ2XLpttvfYRzS892MVdjzMLpy85MYgWD",
  "key28": "67C3AejHRrZ4J81Gtb4xKvjAG2PLVb2AZtBKTBbHPm9zr7ebwDXGsmZFaLkTVF1HijWrtpLCoz4zFpDcnU4Twx94",
  "key29": "ZCCFRyxehsmtxSk117Pvf2oRJ1TL6UTo2M2SPRe6W4R3etXu1qpva1R2xwcJfAXBvbbdZbkrpTuE9ptPjZ9pJP7",
  "key30": "qpJjBWBG62H9M6e13E7Mirgevnyrju2p7ETENWb3PRLt8TXay8aZsTRLDKgi6GJe1DDKZ6V2DXYuJ6pV9mnvAoh",
  "key31": "4mT2hVE772b7vq9wRBdo9XnR4gC7HJLq9N2nLA9nFo7DRzjyxMokgWLbMMkJseK96RfhCVkoF11XxovCFXr4cHag",
  "key32": "39tN7d7XK6o98XiA9hB8K5nxQWRXg7wFVe8PQcuHQHJPQ7KJHKLXqkY1D4HJP3PV345M6kkN6ByGbKUkWwEPx4gp",
  "key33": "51ZL7MSejcEMDWnuxvgdHS8wrJFkmV2wqWsDm1GtCP3dA8RtJZYTow1869QagMGnfVvqderXFMc6C5Szd8EC4ACo"
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
