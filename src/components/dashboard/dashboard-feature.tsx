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
    "4e9LtnfcuF9NhAzT6dgmyJu9Sn1gP8vA3tEW88kGFJFqa125XwmFRMXZc77mY9KoNdzGsgtmErqwP2y3kqUUbe8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqa7Ku8t2oAA4qWa4igNRJLx49dTdNRrghK4Jkc1KdnWXVDP4o9MfVRoiKkCYJ4ixHQsj9xvitE2sLKe46JYZR2",
  "key1": "4uYp86KhPVRscgZw6vCkoMnK544jkUbVtHGJSXRj3ndLEc1bXLmMKExZ2Jya4nbCkHVnSWxSd6guZWm2HXZcxvBo",
  "key2": "2mrpXB9cRUE9mZpsEpdwxtb1jowv5muZLzKoxcmexEt2fZwEYbeSx3Vct1vFJ1bY1VUjFniYznBbjKhVBpWdtnNR",
  "key3": "63zHNHjsrXkg48CWUcAF3pRw6iBft33rrB4F8sPDEoKS4PtL2oVzWoEKLDXzfWc9GHanDLHZaofTYyCdtgQoZpKb",
  "key4": "64Rwh25kcGME952oahYHfrZu1LLjFVHSKBB77FhznFKbfMuUykJyntpYQxQkvmnRh6bWtBWozeTBWKH3Kj7azio8",
  "key5": "5KMp1zy9Wiw9WVxYRhrT8QVJbSFKHiL9ZDqHeBbyhUbiDYGvtf1Suq8LTdpkiGFca9W8xGvNT5JGmSgwJviBdy55",
  "key6": "3ENa6LevtjDYgPAKfFtEXCbz2dZMtxvtqJ7ikEigd62H3mxnjhsXqvZqrdmvBnyED3hG7FsgYx8aa3bYtGkXg1F2",
  "key7": "YQEYmBtf7UQFsYuUE3sFnDrWmEW85Hwh5QXXEdAjFpvgUQfKFNKwTrSgDsDs2jCbZ5Khes3sThCxDaXXEgTTHXk",
  "key8": "4gTC7ieriuveEXDSksrzzfpwTPKzDp57VfDyTWdr787oKP9bdigvz8AaNkVf3AKyB8VegFJMbqG6G4eJFKdsAxTs",
  "key9": "57AoyXdpypuScVnazUPGXTW61m1ogGrRQZa8u9gSJJS3SZuTjtynsWSpUinSfSciKXgFZaUqTPfsntdaPzpShccm",
  "key10": "KXHDiEvCbcPswYpZy3FKg7sbpbfbgwdo1S2vq3pg7xAbVUPXVeZJhK7mVocwdJvqcZfa2dtEpLCvHvpu9t6GaXq",
  "key11": "3XtiCM1SKBrzchWR1fJ1AbP8mKUZ24phe9ubz92DoG9t8s8g3CnZ1RoPV4U5hM5ANaGDvRVRYJXZgDh4m1JaEbqu",
  "key12": "53JfqLXMdyppMfHNhvBvczB9ayx1DDYotMxMZeAP9cfbPjMWw14uF1o8WaVM8aJrDhhmaGtxYouesTyhgbAmqU4E",
  "key13": "4Uus7Jf93aRFg68AsviGGAXWzQyUxtFKzLwZGqrVnxz3nxDFdtmAvLm6kHdQWvubfZkPdifC5LUTF3JaHzZu3kku",
  "key14": "5avi9kRVy259kei8MvX3d1GwFkrgLzWAAGC55zsksDDyxKREJvGGVLxCqFo29XesgtwvQowR61p8G6foeiMmg4VL",
  "key15": "5agcqGeZLWpcqT5tNrSo9gD9z4Q2FEUmAthYq1kqnjLjYSNddMCY3nJM4uYruft9PabvFrkjdamPaKLmHgFheHPJ",
  "key16": "3ZVaFLis3gSBbQGSgSQCzhs1ykS886cRsudZJ3Wby42kp9TRWwfzrBpCmQzQkU57A33ViagxHUxHiTK9pJWnSTgw",
  "key17": "4bKgWtw5Jpe1VM1vfASu1sLGTaxYhqoYr2gyAqmsNu3nhkUuzFNcDX2G9k6NWeJzmjxDrxB81gnvQkbYBMCQQM6m",
  "key18": "2FKq6ojBk1JK6WyeLf9Fy7iAkLPCrGLuR1CYGpsG7pVMAgYG7yswJCdjjxbiAvNjfGv1xsNPvSj8ndtg3xFypEBJ",
  "key19": "2XACusKCyoKWCWY98Td1CaQufe7KFrwsmSLSXHQZA9LNkpnLzFAJpZ9bSKhLD6pLyoVH2Q9Mj2oMuGaz16WHu6gM",
  "key20": "42oCJx3xSMvbAKKFTTjmGyHdZ5uFTF1A3NFdaeVKQS4UCpuhgqez8jwuUakUpSGXMRfhHWDhKUj1mqBB5inMqc8g",
  "key21": "3UP1BT665ngy3eqsxJVobRKoujpva6vpLRPM17ZS8CmWsAjsNNWojB53fm9cKWrrJ81HsQHYpApgqXpMRKPiLwTg",
  "key22": "m89FKSPcUVDVduSQZRf1fLHUM72UJHVzsAeXzyWBBm5m7seycjVUDUyHfsDr76Rqz1seiXGn43iSEY2miL7uHEQ",
  "key23": "YEZLMxMhdV4Z5tHhfCfAkdbhgZb2zTahd9mjdGWT493vHjWid3kPPD257XucNuVXeS3rTu2jZWmm9ntmyM8ire1",
  "key24": "4UXjRHo6gnhL6kKrvZNQGaSaCVdx5tQyf6P3277vwZdjqRDQsWaH7PBpiyKdrnTxMvLNS6b59zc7dgVkLkcvaX2j",
  "key25": "4L6UnTJ4WPmPyJvaFco6JAJgUVw5MBpfwieT9eMjvmwUsRJat5WP9QYUj3hHKpo9e1vs2xSkyr7jRt8hfuskX1w7",
  "key26": "2ccxFmvo7QccMTi8x3J88payXKCTXuWAiEo4eK85XLSNyk8FtQWu3W7KW5RsPZKyVCJco2eYecRNzi7vk3fF2R5R",
  "key27": "4N1LVFsiLXqVNKHS9v7RBh2MN5hJ4nUmMwGZjFqswK4JVcVYbqYJDz7wZQLGxRiTuTwYwJNAfENXMwcoXTczHSdA",
  "key28": "HHiiSrMze2LAtTcLZ8RFcEnT2fWXHRb7toeFkeRTUHfASmCZtpbtgPDgRBcvU9vc5xGyn2gecQpTm5vYcS47cig",
  "key29": "532zWqhEWNTFkNcsKPstptsuC3rakZ1ajydCYRgzXHkhK7SvvRkBS5bayfVgb9TGEq4TgYeRGVi4ctMqEnXqebCR",
  "key30": "5WBFyFqqKM6uUSV8bWFWTdzNbfFdniKqFFiQ8yyfeBAoBLALbto8fRoruPTnyTiLCoDuk3CoEm4jF7jBiqPGzMRP",
  "key31": "3rt39hWMtJS3DUVsxaD8WTvWX28wqQRxRuaS9uC38FEVxGw4dVDSWcPzcgNDhkyLQC51z1JEGJzdggKP42LBMCjh",
  "key32": "GbCk6JkhcbYT1pW3h8zCBDg18SzNU9dhL2zkfUeExbxCjiccsUUHGrrSwxJyCSXY7wZe2Z4rqi6FXcYCiJLZLcr"
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
