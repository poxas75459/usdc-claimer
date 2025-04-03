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
    "2JrYogr4zk481JqVDF2CxknpykbsapY81ED987rn6GZDad9e5T1S6odnqCWHuT8e3WdZrMSYsotZpnhoagkKVdN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmkSwPKvpnJWcDtDqQFRTv825Q1rhekgpKcz9E2yvYXRDyT4nf2nwrmm3nitu8htaqmGiis2NpLaWq5k3sbWwjj",
  "key1": "2hCKMScQGrTCyN38eaAESUoiJJRXKrxotpTAY3bbh9Uv89iKHBeLUd9D3T6QErt7VZUCgaWmURyM4GCE1AKr8XsZ",
  "key2": "mc9Cy4urkMByJwKRuLnVFPKiHa6tAZ2nd9Dkpi6VRbP1ATFhjG3yBjTmAzyyUj5fkoAWqcrN6EUtJfQNzoNsKk8",
  "key3": "5bfzYa6dwg71M284gpRb6XVwGnHshgHMsi9mQgGhkaMmy69WBJvtrHoBy4xChPzE2J7Biwz1q2dKPL2y7zFbhHFz",
  "key4": "48HAM6yMpCRauUbz2rF5TvFQ3fcPsqk1xZe5Xw9rsKRYWcTeTH27FkdM4qv5vfdXySwEyZzPk8QkdkoRmb5KbWaY",
  "key5": "2vJHXYfJvQ3VEAPKJt9sFTyeFkBjLviBnj4H1L43UPjxQ5u5fqbbjSbQTbLprgpCZ3i7cWzUzQ3VpJELKAKe2cAU",
  "key6": "4DMAxjbGLR4MU5fH82aogB8Le4jRVz5S96aZLQwrLEpxrqgx4hpYiCiDJuaT2bzAYguypKHMFRpaGRCw7wpKy52h",
  "key7": "5i9K7GSdzwMMSKfqGCKqvUnr3FoBh4vV9REuUVbc1Fgd3p6uqVncoGxq8TfcrAyigpdEc9Mtmqj6XW5ErpcMxpaG",
  "key8": "5PfdF2f6yzuZWY2KJopKjmwmEuJEk7cuJ8ZX3ZyZbnxx1NGycVLEYiJVi6p9hRgMRLorWq3B3ZuBUTZQ9VKAKNLs",
  "key9": "4c4H8w58XdMtP63JrUc6zxbsZM2GSqW8ub6Xd7v8EZkjbSxusSkoCT156KiuBfnMBy7payJGnRWxRbaDcaKEcjYE",
  "key10": "3MrxCxAfwkemceTUwySJxZ7g1CdWB6Zei7JhWvLQJTS5ZWkCCSWfr4UKVNbrovy9Ao8pXR4MDv9XEbvoSqcsYVat",
  "key11": "2py8DMwwcarLB6VpEV75wSYSFA59wDUzr4D7aRqS3N92xJR8JDEwF12d8N4NvGCTkprMSJdD2BhxDCaJmncjxi2L",
  "key12": "4XwdkRSkF9BK5Q8bDFDhgVAH2Z6tKcymqXWiV9YDoKkeYhvgYyrnuqPi1H91dJH3Gz339BagFNcWQnK3kSQr1hXZ",
  "key13": "2yJ19zahfzHGnMiWoydW3P2AqWynuRCN5Rwmf715xKK7wMZv3iwo5prDBqytn8woMY4sdpLvia3E3DFhzweHLgPW",
  "key14": "3wDEetD5SYQt8LRMtU8a4qxgfe2rqguw6UsRhsEcoQw7jQVv621ASW2VwC86DaSL96fiw5svgbe57GLvLg4htt1y",
  "key15": "2u6mqZiW2JQR568XwLB8MKvDPdFSBPopeWpNdNTpSR6Jfv2zcUa13AXPo6roaZzYm3mRGhnXgJ2CskNj6tp7CTn7",
  "key16": "521SrTDk46W1N8Xbp1vHBTMF43fi31o8CWAboryABfXXzyZGakkLPHFBKHmLSjpDAHiEgG38feK7su4L3BXXDFUw",
  "key17": "2wTRJtDZTJ56Dw2cJmFrFV24pbFyBwf9WHhnbsCFD1Q9LWSwRnhnxGcPJe7FycJmCMDEnfHL8kuBTR1k9NakMJqp",
  "key18": "4XSmSTpY9hdFVNoqn6THPN5J5553Sfz3qpe2An7KTV1DD7wEHJcdEW2ZTmtT1nxQB3nQLfiBxeyUbM9MjMheTLFi",
  "key19": "tRMdM7CzqFJdyS4CmykWyk8GPdVFme2nhWmLvNp1vQvbfutBBWCcmqF1CFajjZb23xcV7yTNqQHJP6Vu3hdkyDH",
  "key20": "5XkxeDye69gowpWSTCpMTE3WL6vM6dradXVrfxG5m9KjPDAqM9F43oAWb14JQp4DCR1sVZ2eqXSCJuoyDfPnHbtX",
  "key21": "bSwRRZ8zSd5q14At8TrpPGnyHSGYfHPJ2LpRmxX5vLhcQCLUC2kbrB4Xx49FbA1WZuzUPzjuqR16pgstvLNo3r3",
  "key22": "36cJzLdfozuAnd4roBBQEd88b2xXrk1msMCaTuXzz14HTL3Y9wi1ePhtAnwmNBxmzQSEj4V3J1mEeR3ZfcHSuM23",
  "key23": "4M2MdTUomAJMaJrDsDRJ6YMTfnzZfMHKGWHX52MdM6pCX27zzeGMnAeYQkuaNcJh7ScWVQAjup8EErWRPAnEmD1W",
  "key24": "26TeW3rcFNsRR5JdcBqZEcSYSUk7vzYNhqwNRgR1rbn8kcgvWtCgh9XoUbWAQWP1aTGRjZGq2QRMAyXTdo6YAnbL",
  "key25": "5kAwg4Fz9QxvQtRjkusbXPQUAx9K9Fn9LpgTkn9Mydd267in4na6d27apTmvB5TJyBM4Sfjw5Yab1uRRnGTauw2E",
  "key26": "2NLSEYfRNN9KzxRJ7b1yy66emgeHN8v22kRDrhyFp7fCNjpeW2uXvWdiar2ogU6umngyytaWWBU6yAfUYHg72boa",
  "key27": "5G8PHK35DEpBz6B7gYkSnNkvRThf6MGkVc5bpHwnbQKEwNAbLDALt2e7W9w43awV1T5jt6nAcDTE6TDDf9oj7Uxx",
  "key28": "5DYuyFNKtvTMhZa3pE6ypcLcgePdfQj2cNJSrFVWafF7gk4xWP3DkbwQR18zZD2KkdPU8WFhfrG1nhv6mmqcqf6Z",
  "key29": "3xooNr6Ts6nzimE41mzAS87vFHbLZu7d7vih7BhrsSfQQm6MNKemsqvUZuSK4JSgtZ9Kq1xkeXdUwnyEhngHRoYt",
  "key30": "3Tfd6fDc78jptGgRuPkZYaFF1VzJkxF1J5ZTy4rVd9gEzShSM9nPyxkFTbXftj6sSRWVYN1GhUpaFaFLnd8Lkjzo",
  "key31": "2mMNYj9myzYzDuYgCpDEbD3d2kDsGFboxmdURBhPStnjn57zCy1q2diQLaRvCwBqdy9fcCAxNzYXtbshqf7EqV2r",
  "key32": "3HLmnnQvhYDYC4SMF1TumBqTQfCTUZa7QLKADts2P4n55J6DHz8Xh5DnyRAgm4LxZBfTyiFbDE5ZWWsWMjxbpcYo",
  "key33": "3WuRPM1rjaWeHwspMDXcbCfvvEPX4wxpQGRc5DhHdvNwfw8mjahmffTdW78ufQThHgwD5YnLi668kt8hs48b4fhj",
  "key34": "L6dkxC38NTnwqnXVeqGFE2NzG4U74hw2iVf1PbZf66NgY7AUbjptiiTuoSDUENkqoqrfq3y5Z6N1C6WJjjEQPje",
  "key35": "5aKUnGP3zAgZLPh5S6qivbzg7TYEvy67wyPDGJFexDKaVaHHuqmtUzNbN7HmzF2YnUTtzyh5jgUkYvAJKWHMCTok"
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
