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
    "4shVwGa9D9HKZreCxfmZtzcDzK34uQiA8mKkqhnDpPF5XJpKQuKvkep17RAmKJSvHfcdGp5wEUhFmxTZdvkcZ1BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9VgS5rXenmryMyLnVkS6u2s6bwyERaDrwuM926tPgi6NLYfQiiUpLNKB4Avv7Fu9hPSADN5EB2U6hx12GSpCBF",
  "key1": "Us5mn3DekBZ3ppHqqSdoMjVqyndVGEhvrAdo1sLdQGZEiP4drqQFDX5mT16b5a6TTTTcnJxKdqRhYgRPweVsJes",
  "key2": "5Vc1WKyBV9kxHLPGbG8JMepxMbRVokgCpMYNTJBn4VuwLJQEeDDfRzAuoDngheQ2Hk4K88S11w9ffGihfGgTuQW3",
  "key3": "mh8xa3CdE47mCv9EDbESJcvzmLVqqtogrSW9mZXNuEcUig3Y1koqg8aqYLWYZ4zitvEDuGSjN5NAfPKpizRbLFD",
  "key4": "65sdXW3GhjF2khEBfjqpNAVqhJt4btbSFJWL1vgUDYeGGXA125z5WikzfrZdcWiPntZbjDKthMgchHaoALjtcBys",
  "key5": "5rfGV2LHS9JJcRqiiG5GqCpaj7ZzUFtH94irjniwSAA2Y5qbGbBSfxoPxV2E1LuPEs8P7xsp4DE5ddTEHtUr6uEx",
  "key6": "2CohtvDJEMRJbRYL7Mjv8hr5usfrrbnVbzUYMoocVyWsK9T616BYuYTopWKzwW545wFdbfbUQdpHEjbgbj4UrKHp",
  "key7": "fcQgD8sUA7vASmnNmTRdNwYtUDXi6QDDSH91gdFsDzJxEViJfgmNMoCkP2rkbQcEnVcnBEg9qwgtGzxidaCkNga",
  "key8": "5QqEeMP1FJEMQX551ZaiBy2s1Sn282VN3qxtp7QGeY5KoK2iZ7xemitdfdD5KGcEGEv89JHtqW64DF6ADL64f3Jf",
  "key9": "22Nug9RwMPAWMtNep8386xFMhAD4g34hTy1B2Nyn3eWR6AJNhkYcuLvc3bKwuJrpe5QsJ64qsqH9zAw4hsHi3zk4",
  "key10": "3tyuY2X453FVfuVSC5RrgBFV5rTLYuX69BojRYUHnY2k758JDCADobUXeo2dgsWWK41RZNjXfNYJp1d36QyuM5Xq",
  "key11": "XWsx2e3YgD1mZYZBZiAcpFRHZzSt2iFMmE4MQa4sKk6Wi1L5cqH4nPaHw5RZAi3rmHMjrafKK6GcebKVLrT7Yzd",
  "key12": "MGL9J76yrs4LgW3MTritfWew9XNhjbTpqdjeDjvSC5TCeJD4k7eAnJRYvTGHG8e3nz4HFoLcFtN3GbGn23Awjm8",
  "key13": "2RTcsvxyMgwS4Jy9a7spGhiuosJhwDS2XKgouncPi1mZX69paRLQP5MzJtQ69DdF1BGxvvFrahLjxu9gN4Jegf6b",
  "key14": "5RsQPG6MP66GjwjZGiKCVc54FJA7DtTSjFNrqu3uqqLSvAdYEg9xukU9ykfHU8KviPoKnhqhwJmgBMqqA6mm8BhU",
  "key15": "5HqpNGe2GcYNsURS9xtkzY4gxbfiZCMg7FJY61Ptp9UZwgnn2qyzMKW1RJjNf1GaYhgDcR9B2wdy7FHs4AU1pW3e",
  "key16": "JBnxvvy1N8NFRC7yBz4bF1fRxvL2c6aBxiJM82qEYy9ZakbMLRDpaPetc3Lnv87TEqHP7F2xrVBjibLdF6xJoVx",
  "key17": "5aM8shwLS88RhKfaCtue3ESbTqzDHhMQFavzYQRibyJSRQLu5sShd2yEHM8KaxrczT7Mpeyg8cbL13xBAp262Uqy",
  "key18": "4pSMmQJcbXzofZHUqVWuqeg9f5mUTbRZRzsmvEts9rhXsrWu7Hc3au1nigf1FU9HvJekuvPgCcZU4VqenKD87cbs",
  "key19": "5q6rph7qXLFb4B9q9EJtPiyUP3pBtVu9jHBJCUGbPBkQJrCB6Vxuxs8nxXHqBgcjDUNoKZAvpWge66XGnSgTQtod",
  "key20": "EAudnFKojfq7oRfY1Xw8tXwee5qtaQWhyh5sQfzvcpuhQVGSvEpjpmicuPVVfho4jzN7tMo4DoSEtsNu9dMchVt",
  "key21": "2ZFoCmvsNbbzeDVFnbptPQveEKSNgwjWTayNbP5nLTxE4t9cTJ7ZLEQ36mCaXpnQz8TDfpnA7aiwidwQ284VLio2",
  "key22": "24C7wmvuPJrhxajSLhCaewzKVZQQwQgEEtUkBQMWvtZJtozwUDmY31mF6s9PS3GbJcAzBA5yfvFyGr7WMZBjPQTD",
  "key23": "2uvd3fN5QmmZNhbwuARueYPwt5D6Jfna6UrMheuDQWNadgmaDafBNUK7FVqG1GE9mZN2r4DznmnSRd9V9UqKQZwK",
  "key24": "d8xBisLjWMNV3AhuJcP5PimNnNtG4nqsmpqQAjDunPNtCcNz29iWcoDKJva9U5ki7eWRU2bXd8892tggeyynz2d",
  "key25": "HWgQqJ5uqff9ZHVZEcXrFJNCVQ8scjJhGYS3H26ZnLPb3o6keNBvvt5q8HS2JaKTpr8ooDQWJh1VVwdgU9pm23y",
  "key26": "5zSb2SugsDkYtPVQU1MxXBRUjx1oYd4cMiPPuhCh1GqR8bhZoZ8SrfzeD5ajP1B1b7wHKfJdGeXFis43KxTQyfp2",
  "key27": "2TEreyf4h5QUwLvQipTsyzvrdcajiMLCTTXZzRdydQfCRm43WVXBZWSFTCFhiU6erbMUiuKfPx2ir8TBVUHqjAox",
  "key28": "5HpKMAN5VArY8wqdhfNUzoB3FFUUxo2na4TNCw54t1jpQfMPojZorym7tjHvdY82aWRh2griC98CZRdbWqF4vkzC",
  "key29": "2LFfcMFMoeEkryqzm2Bws8mu9u7vK6DgDfS8Wah3yHwQcDzyXBUDdDqwyzgrsHWRgMG4Rbp97BEFT9HVE9GDFNya",
  "key30": "2t7rp84hWqZLzVVXNuCoKEx9cSQrbs6e78EdqQor1kThvZtEcmVDPyzhPCaPNVsgyLq8VpVqu9bqweWDFe6x5Wnp",
  "key31": "5WCLPTWycjkTpkdsf8RqJrk6ZXGNoCShNzyeFL4nrDtCrwhENtpqCkd1mVTeBTfCNJjSrEH9Yr285PzejwbMkRyr",
  "key32": "4UuFuNdaCJsfaSt2bu3C7Cdtdcf3NT2wvvJSizBR1H2mV1n4r8SEcysnFGtXare58b8aeyN7XPDLbukKdEiEWXHW"
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
