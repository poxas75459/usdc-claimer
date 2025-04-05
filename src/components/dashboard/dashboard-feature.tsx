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
    "5T8cMQETHETjucHsCveMBv81hupeFGgf5trrYJ8587BaW8cpa1kYWDuTAxBk6B6nUH4kHiVwVHNiEmHMJ9RpZnD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RtFvVZGUgP3swtcCwWnZFGsYug5ffUnPNXz13KPQWRpCWph11nh7jGnhgnNPoPDnHJJNtpsSBV2bNanhBpYJHuU",
  "key1": "35FUEWjfFEVNTx9VfMpCaXALcP1xP3P5a464XVhXy1u8U28xsC9Yg9jnviC68rLwTQj3XWnni1NFoNNpEeB8MYen",
  "key2": "V5P69RDFhKYH91GNEunEL9Qi6VxTmq6T91vtC4VNmaa9ezfJGEQGzcteahJFxjTvCcmFZ3NVCTSci3fuBygk5nY",
  "key3": "3cp4PCmZnKHdLbqco15si6KYyK2qkd1XKC646Nhq4tSCFpT9XW3prA3jJp7AA84muoYuTFDzjsDabupr4f7i6j2x",
  "key4": "24gxJwTnp9DKFWFjha4WZNPdfbdWpFXivFF5a5eMtQabB5SCgefQtY5218y2CzEr8Ca12WgumKsLik3x5fReHdtP",
  "key5": "29aCzmyN6zRm4qgTzLTbtHKmoch1Hbi1BGYUztoKEGCq1LRMee36UYyccmPfAbsEmrUcUskTv9bsoVGHeuRuuiyN",
  "key6": "55smHcgm4732BacjNt7Pn4nxyk23tcR4WZAxCGDUR4sXZnEZzY7X9PK3WUtfEoCAdtakDWDStx1rRzKtzxUiBDsB",
  "key7": "2ZxAndA6u8Xn7QUbWvznHya9pniBfjbqsANoCUqYc7RLatCcYvTDEY9r5JAY9fRggemcrNPHPaTVPoPXhoNT7jC2",
  "key8": "5iHwrboFpa4mTifbspw9iJ4e4oViRbbqpN62RjicW1DhrABiyMJZmqHaurmG2CsWmkbVMi35SBd9eTVe8xups8Ze",
  "key9": "5YktBcSLFMFPVajrT4KeBreXDrKd4azh7giHb8NuRZaeo7MybasTaR9nv7pbSmGUtTFZrC6emStnn4pUSUZ5mBYf",
  "key10": "49drxLkrLgtAnFcy5936HdwFz3wFCyi8hgWyPWtiMMa6Bab7D8Ug2tS5CH2LaQbR6wx5k8j5jhwkaqJbyg643fXW",
  "key11": "4aMa2SmN2PnGXKZxDrvdvaJDf8YwMDTbq6URRcPQaY14cXJ3hDaiVLqbafX8rC3F2CdRZFZWdsec1FsGGYgg3djo",
  "key12": "43f8NWFrSuBA1Zbz1TacoprSADJ5YHArhGTLwywoqRRDS2eBAPjMM7nDDUhArXsdEeULjGP2W9SfsivhCf3uqZEA",
  "key13": "4cWPuzyKBVi74BoQdNvjJLbqmVD1N3oMUDV6e7EohS5zPQ6SWHtsoLNjJevamUS7btxQLTREHvXWBtzemLUeVarU",
  "key14": "227XhXkA2CoJHDUiunbH7MNwkktcT2G2eaJq9H3bfUYAfq4r35V3ehB7hwayNHRgb8ZF6bKsiGbk662ABZ7Uy67v",
  "key15": "TntGKHhi929h4fNFRoQDkZcMDW2pcyrgjDTyBkfCbzjRQ8u7LyxHmHTbaZrcHfQKnd5rsSSeNXZz7GHk5mkzVhd",
  "key16": "2cHzfP6vbz9C7G7ugJ6XWEXBPqyroY4K7t8NyYoktze3QNnzy4Ft1wATXsEeZAg3G9vpvoGNwhFHqb4aErbAP34Q",
  "key17": "3tN3wMcEd3euyxSJqy7TP9yAMKJDeM6f59HBpTGgcSKY6wjyciozCkANgD6R8jRqYWMHVZKpvyPnhj1sJ5XDt7yP",
  "key18": "44EJk7X8cYWJdNXDrCdAEAgRKEgpFdayA1buixLRsx6HH1LMgAKavxEF8ApvLBSSkc2j2hexfFbVM2eJXQZF4SHj",
  "key19": "3PAXyw4dykQB478dFv8YvMjEFB2M7NYWuVhUHXBN3QSFor7Yb8NueRfrcN1GVcy8zqgsktFVDs1jqk78MGgennmy",
  "key20": "pFJqYV5bn6SL5NDGbEbAAaKAJ57hT4PwLNHYyMQ5nW9iDFC4CUda2brw2Q3a7PFr45v9bHDMGEVZDTzjV5Nd7Z4",
  "key21": "2KxY1iKNu6LZXEGJsJYD8Dy6UKSXhoVxwjQ2k8TLVttjhUwmr4q2gF9b5qYLdhKJX9gP3xhVj4mWV4y9qst6b7ih",
  "key22": "5wo8KkXGJzjCHWeuPnJD3MbX7edyWcsdjcH9KKM4zdZN4SzGuekjY9U1iRjoJFafzZNoiopc1g5ioTJcgoPWLSec",
  "key23": "2vs2WHByQXgHBHVLjDCPkxBxhWr5tfYMMFViiSLbiaUJLnXdiQuqX9MsnkEYYgKSq2SH2AtrZ4SosD39Ym6EzBiv",
  "key24": "62WCbeyyxk3DjqZHUoAwf1jjLzZkUgEMC5HDhxoseAN3BqSyoK9FdddtBroffGfq7VMxQpNJ3mKseNGPGHzis4kx",
  "key25": "4S4LJJr1aev63va6zymm2whyFEYDy1qjLNquqrp8Qu6SwrPoav5qr48sZJrujjPKBQ9chxS6Q6voEP75iheB5zXT",
  "key26": "mhWUGYzAWFEngckV4zddmUn1YSns77P8KmpuVqCjtb5jGka1XrwzpwsdLmWHcKLxhgmC29JtHeyheW5ZB9rTDbs",
  "key27": "44ZWCYuDQoGX77ENmVLR7NTUbvrJxWDbBuiYALUmzYyJ5tF9JPjeNPANExiYJYmKJ82neUgukUEq4oRPXQjHoKQN",
  "key28": "oKXpohFwY2nuph9v29B8UVq8jkWeAbvnVLb2LvgSaEtMd9HvQvibEXFiPZZMrHeYur3gMXeWrFjCD18J2dDE6yj",
  "key29": "2Fmeqj5H68pjJHYp5m8b8rPC3GUhL2hbue5FDxAFRQNA9Mba3pQph2cEfic4tCqU2VYb1tAMMvUpXf1S1c4duMJN",
  "key30": "2wmSwESV52LMcHMADn96GHe25YcoTFMdbftMRz13oSugNegct3jZzuJvY7Ppztbt1saKJb8MgpHovWaWYYgAWyko",
  "key31": "5cacpFZ4jM5afuEYhjMhkHciDDMA4iAucYP6RKgpG8viVBGT8LMDhKs9XmF7UZ2U1yh1RKDfJpBA6uJQqG964waM",
  "key32": "5ojxGKYUqJtdhVKTX5yswFrsfhnatSfB1owQr8bBdrgUVZjTQymaVzDD2CgoVgdzmTt9mrR9BdNzeR9UBtMqpcwm",
  "key33": "5nuD5tADR8Uih4xA4P4qj4uPi7j1yoGv4YJ8wTvBWe6hSpjovyzQwqtUt5EMsFp9ZTaScj2oGuTmGq9VezJFFVxp",
  "key34": "3R5Aa2RWUrnkBEneLWXz1325sMUvvntLaFoX9pWVDsaawyLffaimFHgrymyU1JmwhZNED2t97iNJrbJ7VZwrqDZC",
  "key35": "5DgDoJfxYiJq6JYvnepmKR1igG7dU6EzaUB412M3vPofwsbydVaUixu8K7hpcSXTPqJyxiBtLHHN31QVyijSpgut",
  "key36": "39g1nY1dsGxMYTTCUKq973NUJE4MvNd6kBspyGc8LAzSh4DXmiGunCwBPAX6uu6KA5b673QGFxabb4RYmAwZkAro",
  "key37": "2XGdBA8cWGwm5ooL3RbJVYwRYkR1dzbXNoy4S8zdhWJZGx62qNksRZagWKeQPMtCGcmVwuMz1jgmeGvgFnr27yVa",
  "key38": "4dh6icFofDW5Ymd456vVgXc4s4g8PvDeUXYq3wJrVjyhJ5h2v6fXerCUR37w6pZVoaCoD3b53MQFiwuCrZQMyyKi",
  "key39": "UiSAFNLESN6WwNWwHM9A6tkgRWFUazwHpAbozVNbPkD1YeRA5WrU7RDaf3ikhEoLESDe1hC33nUBRQ6u6L1JHnK",
  "key40": "46Ao6BaEHtsHbeRfG9vcNEZWG5MrNUTJN6KDmNEeXo7UJibYj2T3Jv6ZLtFRZbS7X9bMTF5TF1ZPCWhDcZXakjHx",
  "key41": "3DsbRdQxwbbfDm1SMyHo5yaMebmrAsHzqNyQGFEzuGNj5hDx3uJp68FypzUz998Ffio5ZDJaSxwwiizhX46LFqEo",
  "key42": "4qak59ef3UwDyAYyebJtBfRSkjcGqPKM9PARNLr9titiyKPCJJiky9a4hVRwLQNMM2j5qXUNojLgywVk76YPAaaX",
  "key43": "22UG4zqTJnFkfJG575xWXzwUuN2Q1UYytYThTrdLUHhZrAPMsYvp97e3fPfSTZfQWKqwFygUXp8nFYZbEcyZZXjo",
  "key44": "zDVz94crCtovRzRvmGiz2GaBCkk91Eju7yia23p8CErZcqp7MxG3skV5ga4hq9y2ieywzkgn8eLHPjczpoZGwKJ",
  "key45": "3MFj29xazBUBd7SJRid9jnVenkBVTBPyX98L4UJK13Am77n9h5FjbcxnZtqCdJEfpUzkuiC1FkKGvMDs3VvzTWMG",
  "key46": "5RuLP2GSvjuTRYvcwZ4P71TxUDawZ2zA59vyvHZoBjjpfhihSeDUy42fQA1xry1ujpKCxWspRvs2kWfz9u1naTds",
  "key47": "5djxhWDioJ6o26Y4vqTr9Q6XYCBGRsdaazyoGasuZH9THXwTquMEvRVYSmcAgpw8jtg15S8ZNsy3sdZ7ixNu2jV9"
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
