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
    "59furS8ZYbANYxg9DG38ZNLahMiECvjLRRiAbKGKzLZbt6BzBLqWQSNseNTseX8BbdGWiW8YMcMV2WwJLQNdcw4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcbHFv9RMCys9Lfxe7bY5P5BL8gGDSRuxqu5raUBr43TyvD51rqAFkoqqTUwCoCzkK662x4cFhJPZqqtwtm6gXR",
  "key1": "2wbucyLzT22oqQU5aFUHAEiafJ4gWyvepJEManyqEp5re5rNmCbqoBajgL6vqHm2MYtCDhUqCucUsGA82KezzX8e",
  "key2": "4aKqfCFtvB4b9hYx8thfRXG25RN1kb4N1nfQxYqjGtuZ4eZjVX66PYs2tWCqhviPdsTdnnAi3wzgBkomqEEMv5U8",
  "key3": "5bc5NCf6Vz38sUHEQjbcniWtQMSz93iJyFYKnvhHt41vfaRXW1yUE8aXfCCYDYoBKPjABybX1n9ieph6Luc2uBBK",
  "key4": "5TaV4svEGM56ffQ6bJLpZwiAhY9Kr3Ke6iFv14G8DeC6vko8RggY7GewC1YB66xXgRRjmZGptVkJk4Ka6vekprWx",
  "key5": "2CCTFf1mti9aK38zV618V4HtypP8uFNB1hNqBnZJC7RMMgXV5mokDgJwiWGE14gDFLxYYTTZPadq1EQog5Y6ec8v",
  "key6": "SVhgYr1MvCUAdAEUnqdg2AJzK7uMuKoNsmfvPsRejDrArHPKEuKBJC5GioSzCwSbUEepkKav4cgZYzDxWjYbJfo",
  "key7": "8VauX12NF1BYu8G3X4MGUa6258BUrjjyy6CWocVBSrCv5b4237osEVc6ovwTwnAuxq66RUcShChRNhEqQukq7Ko",
  "key8": "35jhuV5G8o4rB6x9QEcw2wbUt8vB3FQgCKg8SKHq86stg1rvLoQRE7BQLN3yEbPEtXe7nA1pyTzsCYc1p1fgcTzX",
  "key9": "7gCZZPkpSsbjwqC548LMoPohH1RYcrGgMUH7Wfuvveqi4m3W9kBeFKsXbJMdkxCTY4xe8nV6bUWjgediC6Lfp7x",
  "key10": "2yq6jDjUAzuaepzzgQGkMDBzRPKkAaZtzLfqVZZ7PkmfvX1ygqwz88o6ZbYF7qJywFd3a7MCcBhDeTUeVND6quYD",
  "key11": "2u8dcqnz3zopfwQgxAqvc4sjzdQXHpzB1XAeUQpQJF3uBceAtaJsKZKv2nd4ssXXRLv8wdtXHjfB9iCugic1FYDK",
  "key12": "3BGwSnsnGBzXrqmov4cVakW7feU45vspRsqa4x1Dvx25PC5BMoe4xSK4yR4hCWNEUk78wn7AR7dQgpegL9BKPLkV",
  "key13": "2HUi1MTFvfnXGr8sBY8XvvuyTt5PEn9j8XzSQ8S7pwniJTtA22ag8yBFmjWF3TLfdpKDjF9xMHB6nZ8LiiTFHSFe",
  "key14": "1CjcC3nxR8CLHBQAPKJPrzbSCwsLXuUi7uHu2xNZKezcXN9p8YHHjqz9mRh8yqBedftBQw3mT4ny6VGYntyJvnL",
  "key15": "3eifCEuabHvV1HEKW731ToRGrKtuzrxHBGN3VoskU7LbLxC3f6FGsz6LHbV9djA7wiWZvUpYh3wZqiVuJkekeM6g",
  "key16": "4mrB32fUjicFVNTHATkmjikBjNScSDP2swTkiYP3LK3MRLuGYL52rJcRMeEJz1HnELWY8eRkDbc8RqWwTBGLkU71",
  "key17": "2YejeN8t121v8D3hcoy6aTAhXW2KHaMQyKFStKuXr46hmCK2iCuDZanqGaNd2grQk3rRZfhEmCZGRFY2wRSKC7wL",
  "key18": "4ZHJYkrSTqVud8m74x7WDqmMpzJeK638Wou2RuXGc7y3NhDxfQXPoTiswkXPkvqAPqB5mzfs4s2tj699nrKN135s",
  "key19": "3ygrTYQ1W4e1PYJaFog2AAU4HeYuLUcrr1xPpGm1vGd5dCZ1uadkskRwtqZxcMRoa7kH5mQLqM11mAcBtYEnMdnF",
  "key20": "3qLsLuLpydt4ywAHnxaPx9bE7aZ86wRBVp7WEne2rBBsZBwcZuUCAmKyGyEfHV1akyp1LNnefk66bNtqDMHDaXJf",
  "key21": "31A5HBTs7utUgCTy7De1vGq3pLf3G1x38ssiyCf6xSyFVbUVrDaBUBdDai2umu9UnjjXuzgKbsRGB1JsGjYQP8iX",
  "key22": "2DETa3WxbWYQmAEinWiGqGkkMEzZ3F4L2NJND5nRfTv3pFcSEU2aWSY56N9gckvfK16txJpbx6aBphhT9fqRmr8F",
  "key23": "2Aq5EcX17h6WAWubb6woRCTe4qYRGTZru7xi2h4pnTeprUFB56oZffUwMA69bZMDbbQvjf6n7A2oYNoTsdYxWWix",
  "key24": "2J9A1EndQYhipRs2K9Wk63uCERsc3jJPBrbL4V6uMTcwJ5r8z8hQxKrug75KMA3DBFNiztWudgU1321LxS2o9QRQ",
  "key25": "2QwA1ru2BoKDf8E5onA2nZm7HZFSWKXRQneA3LHvQ1DoprDBwLpnvEhyyXCexVj4ekv2YnYJMzMxkU9diPBPKNvm",
  "key26": "3jBt1Xz1ehZYqUn4ZngqBBMoWwhdwBcUEEN6R8b8c3me9QgsZwQFbYiW5TSkEXS1RaKotiQQryE8nCP4myRE1Q7n",
  "key27": "5WnGnj3nkATwp55S93PcHgna6LwHZJjh2rqPNrnLPVZjvCaCyVYLkCMJoCQyMs7xbHEnvCNsvWQsU17Qw4CCANgc",
  "key28": "3wMPXQrmQoWsXFBY7dvRyJFRuCUYBz3pwXQJznLRAax7Qo3xdC19ZYXY8Fzb3G2dSniYHNJnfpV7h8KZF6hdKydD",
  "key29": "5XXJvR96wnXDs36jZ1NV2W3qx749q24ZbW4m2e37ZqUxqyQLTCSP2STRe8nwGEfNtZyHhghLCjAZj5oYaMXmr9MB",
  "key30": "28QxjK6MHvPXcU9neonzqACife467WhinkYKxJFpJyfPijuG6DSvkeCPmiwE1bCNbMu8HzDC7T5yZyzwUGhgMQ1Q",
  "key31": "3FzynV8YeMimYGszq2ns8ZnMahNSWELESDyscFstnRYSutczvMPHnjCCzTfFsAJW7ozYNmazPZFgceQENqGNpsPa"
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
