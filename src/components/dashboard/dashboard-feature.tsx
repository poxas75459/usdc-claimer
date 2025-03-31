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
    "3y37iW5agugDnHgTPvAVnkVx1FM8zdsKy2aUzmDsHDqBA7kdopv93YcrGxM5pKERNHR2zbzMv8nDnrwYrZXp4oPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rHYhP4MdCP4Ycqjiq8so38WFLEY4hdDo8D3LC8F1N2c6iA1infFXKyUEakMDsDuUEs3fxsUxnv2CQAExhgVED6",
  "key1": "2n6MTZNL9eEWhai4rjakB36Yqh3Zn8TAmtC3rcAqvXoEt2S9pu8fJ52HFgHh7Qy7xtKHdXXxozz1P5e1Gp2KtGBn",
  "key2": "XeAeB7kTnpze7L4JhzsiyC2yZ1NRbKAqfcqwVoSSZGDwfVKGMSJj8UZkyjCjvGCADB94XjD4TsaTGDa6GpgufeW",
  "key3": "2kRcVjpGsqghhqbByMqh1umA65orYVBh58KteQkFXPxVdV99GyGrUCEG4CzYCW7C4QVNX5vrhjMyRAAByhkmCDpm",
  "key4": "7qxie1cW62bYShgNv4wruDPmJRFJEs5VxawUiBuRNQV9XsFPXT1A9tT1tDiRwZjhsN7GqAMga15LfSyF5PLPdXf",
  "key5": "3aRtQXfTwabQz2q6dvEiPExmTGpUiq2Bwaht4oYrcYWNhMqX9mhKEttgdqDQADSSWjVW2AidU3VT41arZqCG6xxo",
  "key6": "2WrKVHuws9wM88iqvAXcgEvbBtcBirnVrzwT6CdkPN3b1GBZdJdZrswTU5ctkVzgeyfxCgmLPNweXvEgcPnqzHqV",
  "key7": "4TcBfknzWdQX1f2oN9Z8HS1LkT1mWD8DYuN3uVnMpuFk8u3g8sBWX4veiWBNgbKggH8jXqmVaA9HLRLGWGFWxMdS",
  "key8": "63h16XUmzm4JbVofouHyW16ZBfzKcWFRTV8Ds9L8V6M2zoGNLeoAV32bhnaqn3QHp5P8iyaZajNrrSaieRLb7pX6",
  "key9": "5g25NAq8LYEfUkLqq1Anxcc6V2Fepcy8324mpKstqqzJmvLB24k1hD8vnoZwFxSpkaEhoQcCkD1V5uvAeaxC5vvL",
  "key10": "2nB49Cjmap9wQWDZWe4vqyZQZm2B3KJ3uurE4Hf2hAp8D1p5rv7cTyXxcWZ6s7TNis2TXPujnWyToSexix3Wxbbs",
  "key11": "4KV7Du5PytWLVyJkPRUNoSRjbLhXSBmtedv9XmPsRgNgVDTRMLzjeyJc57pGPLG7eUxm7hoNKSzs9zDZpwRSUMZG",
  "key12": "cx1SbFf2jUvJC71CCjq2qtBkzHEivM8pbHuL75piSfmmKAQfLHc5V8yUP1jTgb8uBaZ5g3GZujWqNLwiw3nDrEz",
  "key13": "37yvz4KCzGLbvUdiVKyjCjY8NJ8Nkn8t5tdvD4JyfvixKbKk8krHuckXnDK4Fygh8FLa3kMa8HRiwy1GQPnNosYX",
  "key14": "3bbS2XPAUdxMSVhdmWot8ukcfEMCCff4DbszxdEt3Vu3LFR2iViV2fMPDGskdtjYhK9T2r3gPv89Y5PsukNS1x92",
  "key15": "3KdP5Hdywi3QzyzCyBdGm1J2jxNzQumcQHFpFWwUq67FEtsW5PKdEjsqXYecuCAVEjWaWw1H9PGutEar7vVuE1Yq",
  "key16": "56Xnnjwc5zzqwrXBvUw91rGqQaFNBBibW3fpgAGFEj1ZLXf9Y8BdaVamtsDNvtYUg9m4qzhcqTRHBzoyoTZgrHCR",
  "key17": "tQttiMcR7NNd4QjJiE25238PyBsvnC76YUZGNogq9wQ1xTPy4XfyYRxmifkRQE1epcH9rrSqa5dLUaNXXuwbbiN",
  "key18": "rW32y6qBHyYFWhJq4JResCyEW6ScWJjTQMUcN4YnLMo1zYDRzAdcwdiAk85AuBmN2x9Ai1vWZpwq91bKDCEcYrd",
  "key19": "4GNZ6hs4U1FQ7wSx2j9bBn16bx6eyx9pXEyE3redSgxjfDjCYB6JLX3Cwa59c6fsB9Q3PxEhKiwrTad8RQx768eQ",
  "key20": "3vLTjifBCmaD92pMWDvLnfMPGj1jgHh2JoP946aAa3Ni62kzeF73GAykzcjRZxo68qZNXo7qAXSvn5Bf8yAmCSud",
  "key21": "2g1MNshLqfwDgdEvNxJsVpwZQRkg58FsLY3iBH4Pd5kYrJt8rFek1Ga2SNxgj12A4NLV6xJk2vPYL5PioD5rynHs",
  "key22": "5MnC1MNzA7RoAKCGD9M1BCfCsV2U8fT5LEsMVaNRbP28bKk87SuM5nwhvg5i5ae6up1jH2UZPbot3hKrHuaaevXL",
  "key23": "3kXBJVhRgDyFBra8XMqqstJrieaTXjNnbH46cJtkMYNrYP6uW6HwM1EbSxgG5vjKr8q9ySAzsgcU1CikM8BT18SD",
  "key24": "2RzjoPkDo251aLVh2vZBdg8XLbUP8gwrST5tYfsHMEW4N7MzjfGrLgqUVUk884WqJwozka7TBjq3rNuoyzWKbSB1",
  "key25": "aHQscG8oTWcP5noDFR2rPkgBMgRruEyP1vNFCFBsBiJx2py96fBkJga1mGhKBmT6WJQhBNxzWfzrYEFRZr82bVD",
  "key26": "9ZxeouDAFgp5L7BP8e2nYTwAt4F29Y9kxjLN2VHNKTtrrBerJPboxhAWjMxWdmrCdJoBtzxzKo3PK9fmuN5wHdb",
  "key27": "4k4hd4DGYxjhEZXG3CXwyLUoDLKHRHQCPqHERwg7BYVbCcvG8GbZ8h9LHUw2BMnB2jgTZtsDkvGBUcFTFUjodzF2",
  "key28": "2wF2M2kD687sTarUHmjxHPn5W3WwDbTsGvunWSYURdjzBwyS6SmLv4jRHzMA8J4EAASydYUmVAksiPks7vZEhTjE",
  "key29": "4hhBDfpKm2p17XXXRX4V3JTXkNdBqosZfbL29qsu8eBUNf5K4tSZiQjanLzFUqVtLz5BUuP6GZoZuimkXru2Dwa1",
  "key30": "5DJSPL4tD6bpFh6ke9cAREiESHaNRNCvitFCWUCVDM2WFUxdWrCoyQDazprHKT6UQYpRjyMsAeFsRxi3VmyeqpD5",
  "key31": "4cZK6qdkBFjBAiULjmLbiXDDhvwUxuHX8Lo9ApKnbP4d2mdsT7zqHx9T8iC7KcJEFJW4cCtn5hmvC6fGSEpYbEC9",
  "key32": "dEiRPDAudEJ3bLFih6pRPthUBgD8qsXJLLJBppf32XJRVme5Kmu9GjzqtdU7sg8rT7n2WWVP4CxXRhp7ypCZ6dG",
  "key33": "DAbLkW5XjNnCDokeC6xGjrMpQqxnpnxZRZgTV41VqrvZWXhGgsuA75YESM5Cjd5f6g1DiR52mkuqyLFBeCjEebB",
  "key34": "3zZJqdmZZFYvxTcT5sDJGAUAX3Udez9qUjExUbd4RYUnBwkzTU3E9HL5xHbvpEyzdAJT8YfAjc2Tv2Nz2469cZK3",
  "key35": "4oMLbz8YKVYmxDpRYte1LBPVWrXT8FQwjDssMsrkkZ2Sth2CmRcLUST7CV3E2gL6USfBwPvzmc7MEWxpx1Uf2gbN",
  "key36": "56L1n3ronmvVqmNg5DEhPY5nz63Wb56vyNC2NeYsXCQDc2AU8PjwzscCY1aN2cmEYSmURHc8ywXQLE34Qc975FR7",
  "key37": "37K6BauK1Gyp79y1JBZnMxFAJ5ndUVAsQZknpB1YnGcxcymGDaqXJdhDBsA2DNh43nrGrs9ajvRKsFZ4DZT4tA8m"
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
