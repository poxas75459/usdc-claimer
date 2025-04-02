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
    "34v8oyU2btpitFWDpzUeeS1fNzkvgJ27eHMgHwfGb9xvJdvxB8gxYQS2LBCZqZZL9Uk6eTg7ahSVoFf365PxzwjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yh4K7d4nRDhDjiSTULBb7YEBf95BDFxeSmTWETYSXhoLsrDRF2ys8R1XYSjWFUZmRro7vSMD5J4pMvNCaTs6AH7",
  "key1": "5MPHFmLYeRQHmWczaVTmoDDPJBemPMjDaUcX4GzHKEhZawZjZkazwinA26s8Yog7uSJgUB7kziZNj8CkJ9Q8xxz6",
  "key2": "3185qXRwe53YavzhXkRoZuN13xLCNGbuEmxUfUzKhGLyxUj8j2P4kUxPHaoXSFL9BKJwoYqn7FEWB7retnXAsgLu",
  "key3": "23cdDjkZuA6nPU72WLBH2YL7J2dkYzpExWgGjeHNkmnc6BCfGmiZF4xSDACjb7zKi13DpBTTHTioePGLxNtr6Tjw",
  "key4": "JhSub4FdBqhq81HQSxUipVaBuY41iRdHxayp5xPEfW5QTZU9UwMYVvZXZ6LwkBsj6qUDuJXQA6qUvZN658itAFf",
  "key5": "13kj3Ue2GBjV6AhMmNfJX5V65axwWUkUT4pPNHWztG95UpGE5UUMYTVuLZ7rd7Ri9L1fe7yJDFV1yx3KmmQaCd8",
  "key6": "5Yrs4S9KcpCzaU6krCoVM7i3G2EiJm2gZVjMpDQMqxS13qYhT3GNf3h7YyyWN3ubbBEG9dCr2NYJMMjz23mH29jF",
  "key7": "5WTwXhAqwq59RVHsVVVdwqcixtW17G1hB1LBnJ23iXHjZpRHVQiszNtSYJkvy9txdZtCpSZaRRFazphsPEVEFPHL",
  "key8": "5YJuAZGwHtRT4Mk29GXLq2XSBEQpddddcQmLFwXmbYGVnKScM3SLCErdAL1rZus5hfGCGMBVi1xhcSB8YddkQT4z",
  "key9": "59ydndKR5V1CCh6fyfy9HmRxCw9mRfkLi2BqYD9MHegoMTTucC6n6XBbuQ88Tb35e8GsBh1rwPUUMFWm8BHfTtps",
  "key10": "55PGjtgp1ftkiv9U5K6sPTW7MhLu2wtqzhYPYhozH3JGNdyXh9HdPrUw1rsRXy2vZEaxCo2uDbAKKVU1VMKXrDwn",
  "key11": "5BuEUNFLcfgT3RAfVeeV6HkVh3x5nDDP9FUxPnRk3xqcEB6x1mbPiwesmNsyLVok3gGrFQsV28nRBycACC94fn6L",
  "key12": "ZEpNSPsLWCwBwQuiuUfDFQ9nKoyCWZ5UjpUab9XmK6AiFpv71iJhcfERUgoACJWGjvBKsFEr776TzRPoaHzp6dj",
  "key13": "2PTq44n5q7kjwiFq6ASR6x5buaKRc9tQddXVZRM8o5HRbkUcTyajbT4mqHtFtYGFD4Lt9JYCKfeDMsBhCwjWqQ4w",
  "key14": "3w4t2726ccKBZLn6pLHwKjBtbjeY7pnvuSPvSbzeQuNP4XzPyDs5qetnD4avYk6RZH7AbkDaHeH6BdjKZmU1tcZR",
  "key15": "2Cecq61Aci2CmJ4nigTrHHFUY7xVzDC9QB47ZKzXj32n81t1QwnXYtuMrzX2LvS2cBJ58pY8xzE3ePSTPKRgS5J9",
  "key16": "5j6XmzKEXkykcnHLBEtF69fA7aUgQ275WhprqsMKD2ePVqa1tanCDedQBZFyn1op9gdQor3bV8w51jPiDZibZnhq",
  "key17": "4VaATbHqA4y14q4oDxPXkDbzoxY14wbnRaWHQMvBmfUnxHnukWebbrMt5qasNAfRSspyr9Z4Hax6tqyf2Ly8KkBh",
  "key18": "2ksenmevEMneVQaQNCsvnqSdxB3TBVSNK5Rsn3bRPdKXAwmhiTMGDEXYKYciMhNGa6yoJSNUoAESbK6J2GHp5Lxk",
  "key19": "48XSKPwggSp6HWs1Kx74ccyAA1JdtGSVyqyVAT2sw1c6L3LnGJCYUjp4VeiiCbFa2KAYSdP1UtKs2PDrcyDXezY5",
  "key20": "2t5oxRg1RmjXHoGHw5uPYi6GFmjgqSebubmaZ22FTcMCjYuac9E5xGtzy89JKfVtrNWjyGzqtCFTvVJmnTgsyZzu",
  "key21": "5RQpYvkXUBrHYJRhMpGkwr4rSSK8wfF3QHHQq1M3QVFVbgghMayJ7kBA2wfrqb98hxajYQbdc9e66m5q1kHe2s7m",
  "key22": "5i1wLx7UqwKLQdC97Z2FA5AHQfrvj4vGouKNYnKNQGDChi3Lo1A49y93iwnCaFsvdG2xGzwBb6qc33ZudHWgzJsS",
  "key23": "4TxG9a35qh7dD9zudANt3F6K5tzFzq8fyD4fZ39yPXCtW7fJTw17YxnAxPuq8DopBMHdXa7KJp9zjV1iRqxV3hPp",
  "key24": "vgSG6tDwUJLybu4dDQszmzaJxunrWVA2EteXuJwU2BdveZAUFTjz2j3eLzVtYqjoR3ra2bRYNiJspcDH4eUonH5"
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
