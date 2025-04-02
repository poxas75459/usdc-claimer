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
    "4fUYD3gQ4ij26WDPygMx4oTRnmWj62LwU2WVUn6HWDVY2UdS7L66wwyHEvyKmx5Bk2AE1Bt3L73FnhpQVhgTh46T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uaXt2JhDBtfnAqR2savGxkf7hpzfqSWoK1mQPhy8jizPREGXmeMPfo2UjQ5BnEsvmtmkQuTt5LC3Ng7zNCYV8mK",
  "key1": "4DGN1FVJaVDgvWt32XPxfLaeJFL7oUSWG7iq8PGPkyXZmUmjYRpwB89JoZscjE3qhCAaqkboE83JZmqKai9GjprP",
  "key2": "dpV8EY3pRgo5o1oXa26XBBEHWQxR4nNcFqdQe6s7yeVqayUH1L41HgBxkdJeWdhBp7dSp7eFCvoxhzhSdAajbyJ",
  "key3": "4WYTCaXZhMABntypjJrwsy22C1K1PvxKjivBF35E3Seg8C5oUo5YbuXsomBCVL5Cf73qkVAENGBfidowz1TghBTT",
  "key4": "TYUGFpNdL68uq1qBysU2rQZJjaiMhUKQQeG3in4LFqYS7Cp2MYuqziJMXQSVptqT4J7VGZLSM2VkVssMJLUB4xk",
  "key5": "4HbwHmDVnuWWtw9kMFgFTPC69wCZycu76ft6dyu91XVkWHHHs6DvTpUqa7oSaohx9F71fw75ydnS7wRHQS5pWHEG",
  "key6": "2CtyHh8E7y87grdnMRxaBBjHGcq6Z9Wk8ffnHFAHa2sxxJca9D1ybHikTGbkR1JZcEcUuXtNVB4YLjSPwW4NAZvK",
  "key7": "3NgHfpfraYThQeUjnrjoPKBtzF8Z1bwtZPyFLoMdXUkK7f6TT8oabJys3D6TWPD5zvRqpSTESsSX6F161128QB6h",
  "key8": "5ccxB3QY7Newi6H9cdpqVGbi9JwPTtYeatr4L3rqzHNcKe9Kkvh7ECSovme5dk4ZfdETKnFFG7xozmMyoPk5LFsU",
  "key9": "31tYo55BgWCx5pqdisf5s25SwHDCkhTDTo8cBoUbuEYV3Zyo6pVnUP4ghkwPD1Cv2bQP5VN9WRax7Fh9mrv9gWZ5",
  "key10": "5iHtDd3Kph1hQBHGqPfmbeW7rJJe91bRzmumcxfaoxvspJRp5XwdBHRTpNAUKU135rVwCD4cyARDMD9bWF5agxCR",
  "key11": "2ythLRVegHTjsUeVm4cBTL7x5GDgGzQXSSYfLhXYj8MHGsRt9jNwKBTeKihvoYewR3xcNGYYZ9ZS9Wpk36KHhrEL",
  "key12": "nS2E7SuxD5vikF8yuoBjWVVvY8JBRytq2fUCBfMAtyKugfYdtqHDxvrMkHmFcq9wcKSqKfsDrULfDPhncJ4CvLL",
  "key13": "5bazib9LzcCH1ZN9pQgHbKSNFacvKSdLNgNQA5tZk5BsrsVeTuzB3qYXoBUpdCEXbsSKdvLXBEK6TKYYUFGW1KiA",
  "key14": "63VF9EWyN1rb1ZQaAbTXAE3H5cMutC7RP5gTcLT1Vr58RaYq6pauwfagsZdK3VfkWTEfTwUTKMzsPeQVwezBHqi",
  "key15": "nvpV7QxZpUr3S2fdNSBy7W4JtievHfCbVEZzXBcktRhci2w2GLmeUQJEeQ4Z3MCT8Nf2T2QabY8yX3AYfRKYmPb",
  "key16": "35KDZ5fCSvsMh2C53B5hbfVWfQ8woZcj8TtbhigG3Wt8kFKd65BYTLyDhhCy2dtYHXXebCYKSQtBkme9P5PcuTR2",
  "key17": "muF7gYP6VubRaNuPxYmdGmT5w6BLMhyd54KjGFwsbSX2objs7x9g9JzA7HC6t6C62mm9cwWDG1ZgBtx4yhYaV9q",
  "key18": "DjyhtMyTKbYex2CqCzNnf1p34UVCDvE74uoTwLmGShSuHV5Y1dgg6eP5zeYc3KC5HZwysMmYxTMBKwoDtNHBzR7",
  "key19": "4WZYEzQwEYNYNNcCXMBhEKDdCHyD4pHiVv5kpZVxyEq2Ez6vsakxLFRdT5NopTPZZVhGHpt4b2E27r8yS72ofyig",
  "key20": "56XjMrCXWMfcKahDizd1zonpkJ3Zs2d96nVz367xqtButANpniXAfLAcU4zf43ES7xaqFn8LkBPv9PEvtc6fvSnt",
  "key21": "2FujjNkhtPtbkrFtySmHuUYhk6zKUHeo1AVFzLyrw4pFK5hxLaNQT2RfwfnBZkdGAezHJHbM3iEHi8qcbBdKrytm",
  "key22": "2pAhQDpxBWb6yD4jfak9e3vh1A7yAKE338pdBsazYPrTb96k7ghVr9kxpLZehwzEMUxJzCkncQ4JmcuD8E9jWDN9",
  "key23": "4pJ7iBpSHqN8E33symMNZ4cFboRjpATDgAr8PFFATVbijqesbmBTNyMXWJB4QJHztvfNfN7RXvEfyxEGQU8GWFSb",
  "key24": "d6QvBKVfY5AezYTmY6eG7RZXma5dgbwcmQDG2RfduN7PMerkmPJgUcgeWsrZfsTMhBx6Xjd5EcXfaZAuBcPjd7P",
  "key25": "vEyCuz9MFhuNpeaj7FjXHtmZnRx1Zeoh7ER1LT5r8xbCynfeUuJjZ6exGNtE2n5C4NAghAascDC8PASTmgQ5vwF",
  "key26": "Yxqm8PDR64T4ULMp6af1hVwWrAnKKQhViohQ3iBnrMTdeh5Pf43CmBXA6ncGvF59a8Cm6SKJCjXBpKJX34pMm3N",
  "key27": "4AYsGA1RUvsxRYz9EdtXHeVvsqBz1HKMmirRmVHBY7zzv9HXCbFTiaKkhUzFYxvpKzidkzqbvpNZNLw1hGa4Fyr4",
  "key28": "58b1teiXnUc89bidP6Si1yp5R1YeQEHygLjzF7PbgwwsegJf7mus8G5qAKVzbqBokLgfpbkMgjVPnKqE5bL6q6HK",
  "key29": "3VxAoVtyZg15xBtVszCVmQYp1anQqUQorjkvejGsHBMWn4P9zte8LFMHHH8z9s9gEHC1axf8tDkZhX92g6bsLygy",
  "key30": "42oHoJLhVRajSVLJuiocUdrozjiSZrEScbod1oEsJ7MYoG6pVsmvB32RJ7jeM7nmhGBw278SKyudJznagihBAGuc",
  "key31": "NkKzFkgHWybhmTS2GrTpVwujSNKRKz12NipD2P8cxaLdSnagpuzF4LBmgkxhp5UDsmCbkXAhx2KTxbuWGDNKSBk",
  "key32": "5ppYgMZoLibbJtW2i1NkiYwxSTDM6jVrJ6jqXnFCazoGvCZYLGcFUFSau8EuNrZuVnABuheRum6KhC7dwGwGENYA",
  "key33": "474B7KQ434kdwrtm4YuAWPXeN8wq3AGwj39x1cgmiwFYVxKfLvRKbnxTUcHqZT558gTJZDAGpTYcBFin7i2KCfP9",
  "key34": "nVumBPLDDUa84TPh1fWpL6LGN7r91E8p4rdHYxwcBGHTFaLqs5wduzu8mPHWYg2XDHxt4WWe9oVXC7wLde4RXUb",
  "key35": "5xWr6S9qSsvxdWiE6heSbDmuCzaoM85xBikLexd4QQcvMZL73YoeiK2bHVstfqpdbLLRyVuFDeCytN8rpdRU9fFf",
  "key36": "2XxkAmVQUQFYukyaWSyoTsBGAo16H1D36v3PeY4mvQjpQUiEjf7za3SkTchPDvRTMGmv2FaRCup9C3YUpNzjD6Yp",
  "key37": "2xQ3YY9UzsEMvswAKcv5rKjNfj43Ns8s4G1zQzsfDiZe4MaBqvtK9HQD2d8m56RMmnmTr3af9aPCUeGWr7HMyBEf",
  "key38": "49LfJ3FzGWUgJge6jJVivEa2YS26yLCLtQWc6dQ8pqzYYdtVNYSwRgagDXWkmKn1YCcjeTyC949JbfCVDSM8Fyvd",
  "key39": "3D1V2bUvhKJYC6XizV7xHhYxx8duT6WDsicRJ6CmtTdCkFEpw8CcMWhKiJ7UmgtYi6jKvyuNsMtcp6TLNVWpDtmn",
  "key40": "EkHkCGBCTF8fj5QREKH5KNCcUi4Yoa9SaxGY5A65Kv3UTTjxo1iE5bYUKH8b3yUDtPr6pbZcjB6SRN5Hwhcp5jz",
  "key41": "4VbfuSPLSWHHcMrRuqax8qteYTigFbvJWJLAqxUAo8kA9XXhwfHfaXE8rWb3CdFKpiq1Xqr4LzNzApN2TJyjjvBF"
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
