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
    "peAbgfiZ3gVNgNLC2KxRBWPkCYfzpYSZuMCkSokiTfLDpw8S4M4xadpvYD22qoXrztB75ERtuBo7SHhaAZs8vC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VA2LHuKvAkhhWRiuAnva924pWz4ZXtUesebsEEQ5BbqnHpxiEdRCn4Ttq1kpyZf8RFYECW2AGQpUbNmcfBzwSJ8",
  "key1": "4uPLuUFab1qx6aAH16VmJb9Vor2dP62UyWqgRkkrDeYbZUm8Eyn4841PtyvFTZos1KEQE8PpMXLeKhxKKx6zJKH5",
  "key2": "5Ui6uygFhCrHXbc8TYSa77pFGj9y5kDbkSPX4RUS7oBqSiucKgfP5HbzXrrm9Bs2FQdZ117SCAj7ZAypqND3SVtR",
  "key3": "3XgdDkaD24bbMZZnhkDhegqFddsXraix3Gf7s5giJKn8K68uqH99QwDZUzKf6VMkuQc4pLpBUq4h6D6fjnUf7GNZ",
  "key4": "4jUND6eaFzFN6TQvALY3wMkcLS71DbvxmL5kZKuXhPebZbVxXHt7PsNxdf7nBZXKoiQJ1zcZT3yF2qTknFeJRVFQ",
  "key5": "55G87uzUhSkWxuv8Yu1rtcNdauZcrMpCdXnozwpSjEoXzx7EtUWX43amrw3RkB5rWX4gxWCvJkWwb88eooWZ81tk",
  "key6": "2smc9XTWU7vFjg5Zodt1uE7tw2H5b6ewwCJMoxCLcagJr9R9j6uKSTpuJ3hTRQQBzDn3r5kbivqkFZgk8n7t4nmm",
  "key7": "5NShjRXiFL3bn98MYHuQWyuZ2ibDLTn5aQtqGmyup8qK5dGH7mENa1mZk6TwRBMnpXZ2kBcmci9y49nuWcsqNFpe",
  "key8": "5VaaeUEJkfqqWZ2JdeFeQ6w5q1QpM8SMpp5k46p9S9A9X7HuSHUwjH9RfPTPNZXs9i33dX2ibHp3YoQDjAGWbRPC",
  "key9": "DNH1jf6GbSVWjSudrRCg75kHqnnoyFfVN85PWTCQx7yQ7DLqvRKCWUGgnWKb6Zkk693Ks8eqYgnrfwZjwHvEE7t",
  "key10": "2axS9koDVB9RGsDVwLpY7EJZ8Sj6dJPh6BDuM5ByFM8BGWKLyJZ23nGsapQb2vQn2QwdRKB2qbWVeqV7AN53ciob",
  "key11": "5SSdEYytHSYdzyK1619hYVttzqsuTY3H4grvyqqhZsyNMinugJpED3o4qq5Gzt1i3tkinu2y4JYt5xVVZKGpoW84",
  "key12": "2rFGSk7Et8FFhgVhPX86dD73JYHvzMycy5V8dziEQ2577sB43u6o6Pd7aLbfnfPzLq8xqcMJWYiEsuBtqVyQKp8q",
  "key13": "EPNzwWBz2obThtqT3pfFmLeTczQ5cGZ4afdk5KgFDcufv57sdGFBzj39kR4pb7XMUwgg1MsnzBsZim1U1vDPbGT",
  "key14": "3UeJ4XrGR1Y8NyVoj5PxzRfRxc9QGEma7fgW88weSoqrhjVZcHVmSyPbMGzu4c9HKz6Nt2Z1Egjp7yoPptm8fPa8",
  "key15": "21HrfeMRNNYxdNKywgGHotcUecgxze4bt5QkHsaGnVemBLXJP962TvDBdc6xP8VhzvWtgAzzvEHEbqiG9xKXEd26",
  "key16": "hzZPuR514e6a5Q3bPrPvJWqSdaWRTqyhpPtVEsoEk4pwPUxYV6FLapywCXkSV2pzH9Euqs2xnU8nD274NtJm4MB",
  "key17": "2kwcdi5qr49cFXY2iTabp3weFC4VMS5xRwzBz5Tg1PmXsARMwL7NGBHbWyhTZQ7reZefxuKwyrY58u742ep883VD",
  "key18": "2RVHCd5BZ7yZCb5vNYqWVmbbLZGJ9Kc78EcWVnW8jxhZDRKUcKXaUFgMJ7rX88avdsNVs8jVxDfkCRhr3KKo5shP",
  "key19": "33RswduoLZj3e5ptHfkmh2mq2mPazmQ1LBaNvtxgaSfjGJ1Gme6ArDRRUDEHb1Ug3SdbGuEpkos1KHxTuNXhFDcN",
  "key20": "3eFLhniPj6Hy1A5MYDvmD12EYftDS7ntCvAGuMXQ1ThT2wDwVQaKND8awVH1NWdVathBw2AQVjU9GkLRsBTwpghC",
  "key21": "5PqG1t1WvDR6qahuwqNYW6vw67YraqGtAE6q7iDje4NqBf1VLa8f9w7zS369umBw7ZhtsqNfrQnrfY11ZV3kbb9a",
  "key22": "3o7CNnd9Qu6TATFBVBKAjMMzbry6ru6zkC71BwxCsuQT7toqCx2vuRQAge9G6ms9Cfmhpe2VVhbs8S67WAHE2o4E",
  "key23": "4qGFvnZ9F426GEXfMWtHbsTFeFukhQSg1T2KpPhC7ASK2eSqeh1uergQqT7gwhzYbk6uf4xs8yoSXpNiEm56oqui",
  "key24": "3X4pf66eCsnkDHAMauqmgkVuwPX2SAzQfE9pqGdxtdjRxbcm1eu1Zzz5ScUPxTQrJWrHTVP4PEKhrLnBEeLa1vcb",
  "key25": "5o68rwUBooFp7doG5jzP8JK62BNTEiP76mnEF6LZQiuL7WNRQVzfVk5B2ai1ezRs4kUhUt8k4C1HVKLdr9Zfuztm",
  "key26": "2RczxoU7ZTzqX8NdeYxEQckYRhrrTME256eKxQ6BmWyH8km6f4KDh5WzfuUaoKZPpNKXSMPD6mxJCDLGFdVuYP1u",
  "key27": "5gmec13WgyMZHBLBNjvuJTkHUsWPyYdQMTiiAiJLVADDv7M7zxB2WburHAMigeq5WV5gVr8NpDxJ2i9fFn3hTbxv",
  "key28": "3gXuuc5ZzWr6nz47QgHQ3WTPhNFNDd99buNfh7s3GbksaR8QERtRdVigH5hFPzZtt5sBfxuX51FYvzYBEGB32mZY",
  "key29": "3CaKR59Vif839oLUDVkhNn4i2nDEEzELXGUJA53iDBqeocLVBL9kZie6sJ96zxGnUXx7SBSZe1Ld3aWQARCtDFct",
  "key30": "4YBLXHBY7QYVHspk1Y3fvbixZAFwaExVGWqqEs4CQcQiUERBMNCAxVvDQ5h5kJMwTb8fXRm1b5pGW35PzFwa1wd3",
  "key31": "2b6j4BMmhrb1j2zy2TZFtJ1xAhvKaXNcCQG8GzhBFJGTUsifZFXGfVst8ynzzhjggdkkHgjDrR7dAuEW4nAcWG25",
  "key32": "5sAq4bcTJM4VvWBvjm1RujZMa5CqHdpaFzM9nwgFRQDG2XpthybgcUZLUkCVnjWvpShigkidyoK8V7vQnt75VRVf",
  "key33": "3oda25XYDvnZ5WTmb6TRBMoKgZhSBxUzD38WjsGynPnATyb8JoSD1MyErMFEs5tc5DHEoNzVbUsi11vWHv4rzzke",
  "key34": "2Km46mXgHQFZWfuwVub9tpXgV6S1Pc8e8uN9buXSFpvqEWWZm3MPbjGFxNUJmiA6DgB1kBVPcynEE7V2DYrLYRCg",
  "key35": "5KZvXHCsBcCasp9KGdP2Y7MYZEkv1oWnu7hWVNJPjkC24KbqjTSce5xDTnc2bkPoHYN1jabm8x8Rs8HWwbxHYhw9",
  "key36": "3uDFenHHSxxVthgpJAmfuyDeynXYTfCrhzYfuc3pmJtVTg9fasWAfGkZWrcwJrAsbJ1377NHQ6avWF32FuKXrXtb",
  "key37": "3XJRuH9VLy2k4NsQVZ6FKE8x4qrUABspAaHJaJmaJbPTZ4smLtzo1HTTxQFiSVAas2YfhdQ4EUTM76AhgH9MHrvR",
  "key38": "tSpz6Q9aNxH3uwRSeeRoVDaMbLThSv3DuuHL18eb32Nt8DE5Vs5f5L1tjRxkTL5HnKothwg7Aa42Q1fZgSDLi1Q",
  "key39": "3TEt7TfVM11go3jv7Sghb9eoqWqXi2cpWJuqvSY66so5MEf5fPodrAVeaz5QmavP2FdPKHszz4DckCi9bPSTyoLV",
  "key40": "2Cd9RCLHoZRJpwGzCmVoCQcDnNM8wCs3r36t1gwaG65tmVkVZtrmDpT2CWJPEQ5HHbP35cKsB1ZK2P8RZ5D4HbEm",
  "key41": "2BpiPKxqxA42J8KK9m4BueE4NaonKJR9PEo88khNtsbaUFojieDYfA13mQmRR16xD2t7C2NqLcJZj1pcK4BxrhnY",
  "key42": "51w3cmGCMVQs4bfoWHr6SR5UVk6edvAGQNxcBBvnbUDYLNMV78tBV4hSLkRhBvkZYGjh6amzdgpncohscTVzkAKB",
  "key43": "4BuwaXZHtRJcmkwCdByMLTSLKuyNb1aUVUtdxxEhvgua4a227MbJPJMdJXM9k76hApPCqD4ssX7dML3nX9cJAWQZ",
  "key44": "3fVwT1DYLqtiJ34G5jfGHYt7rR3X343DBEhrJFswqugi9SDaYcTDV3Q4GuAiXE6DvnYCz1WKjKtR7VdgNoR37FhQ",
  "key45": "5kSATKRfqmHmWXSmuGdWKAMMsAnJRmjdj79RqPdYU4cf6cWX39LjirFqTnhEp4EQUCLiS3t9Y7Zf2Dx7Q226rqka",
  "key46": "3uoYwWiEqQRrbfSbhKjHrbakP5YZUazyQkUHa3pcANSuP3bx6wAFJR9XvLRzZHMCxbymq7uQHC7ivmRzyQBtUGKs",
  "key47": "4cvGaQoHCrv3oBS5KEBXsjtPnC5qL6onW4fYkkUMaBb7DCRatfdZ7oA5DhteBSDrUKQhqMbe11mPEWs7jU9PX6Ki",
  "key48": "5xvoD2Npo3XB6PpWpMizgXJhjFJWMY2MbEMGEUnrTTsb8fieasm1FkzpxaXExoxMcxJvW8PrrBoBnjfU3SujKWNn"
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
