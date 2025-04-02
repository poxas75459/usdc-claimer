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
    "5BGRGd5SVoYhcgiMZKWaF4zxsBcEcpe9CFHJv8WdU6cM8HxNRaPXNXdWQsVbWqo6hDZVTyZg37M8F8TEnjZcViam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LecC4TC5uJGHxb9yX6uK34F6qcgE9TJaTV3257E68uHN7bW68U2JzUaQuEt51RgGcKqeZBjjxWjusMM7SeTN49s",
  "key1": "1986KuropiboTdoGciV1gD3ACrHH9AiyhXbKB9XvmfsygbHX9vdbFWcgtpppg663Dr9KE2HTLkRkaoiCVkJXFZY",
  "key2": "1Cwtue8gBeAhquhvJdfTA9H4WnRXvbSryoouVjhjx1ert4MJLZu8P9bfsYfY37H3yS8kBLKBfiW23gbTGr7c3Yw",
  "key3": "4FPWPRkUPkwqpjesUXvRPpYVA9MFVSej4npuHhvUbjb6qw6GnaBddm4raq3xFXNYVdNd9niDTv4cN2eAwXjnDJEV",
  "key4": "57eUkFrrMZ19dZa7DmXw6jerT56BvFyg4BtsADqcCyWouzLuzNXj8oDnXVZPL6ZADFDHnhFNembwaqCPMKZXCxmf",
  "key5": "3gEnheezNtUbz9oTRdT2EKyQHPCV9hj812PXos2aSEeT6Ksvdbj7A8wEhaPpNDiC9L7RfekJeygo6Yh2czDBzvse",
  "key6": "3XaPHJSfaDeLMQHYZDjihHp1uwu4gzGgBGuogqvY6DN7pFxPqHCHGNV15Ti1b6XCUFFQ46pRRZ7M7Be7uZCj1RAd",
  "key7": "4KqZxi4UCmQ6ybw9JU1udgygafHYAgm8StNvC2NguN3ZdGzGy9XYFmx15dfLBtP4MFGPGVZWvNvsH4yR34yAAHeT",
  "key8": "RNBc6oW68AmNiDMeBo7QSbeDNzgMc15wcqAsgdryqGSfTvQ6qSuDki48iJ4q4khwS5YxX7FoU9Htp5ViKK9rgTT",
  "key9": "wT9m1SMSsvTkP8awZgwydPZHUv1YDeTRyt833G7ojbHUAvFHV9y1SV65QjyoLp6kzZT6ckKa2C4qnknNHusZsj8",
  "key10": "4Mmttj9dWGv94i7Bi1q9AmBQs36C4FyjMJ7kbxmd1dJMMGGnsBaAAtPUczKqQb2Yx4uDeCsnBEVSDP7itrK8iRm1",
  "key11": "3uvNQDzrA2CjboawFWhcenPvnUYfXh1zVPrZkVDoJ4iMjpDJ4LUisxHoMLcwPCDFYhpQs757vuz4Pidi422rndSe",
  "key12": "TryU11Th7138ychYtcqKVAvHE7uy4HLnjhspjfMTyM2w16nvQYszzvrrhMz6CaMStMtQBUWpQaEzhr9kYHQHxNV",
  "key13": "4foB3KMoPatBbiMVd6Nn9D9F86EtUkBHRhMVrX7VLdNMvzZWuwa2dgmFE4PeSu2SyMgRGhfMyhpGin7N3wTA5nSv",
  "key14": "HF9UV5XBoGvBF6ke5QJt4P36fZNP9FUnAmQWLowKCA8ATHzAinnr843xXZLXbHnCKqbpTrwTo3caLsMGUe6byVc",
  "key15": "3qFpEspJLB81hE9UhCoiNdrna5BoUTzsm79LR4P4pgUCbqVVsxqctmRLwXFXFuy8rgk2mBUYDjhHXDM2we28H5LG",
  "key16": "46z9Erz6HdyNbS5peAFPvkpNF54bzYh7AmhXXpVQXheBbpurb5qGTDcWpmzVvphvEEoPRDCSHHa9Fr56ciLyQZe3",
  "key17": "3xe9LKvoCDDoCL6tRd11f5p5E9mhmA7jkG4ufaiBxh1aaotoy7Gh93WN1PHBbZQL4Mt46N3Qu8pEzZumcEp7gWYU",
  "key18": "2463Hj4GshASfWJjUSQeyZ3g96wRxc9H2iHPBaBjWEU2Q52uaqu5QgRsZuWjraqTZ3cU51y9crBNQRykA6fBqUob",
  "key19": "36Yw4SSGFLBbRfKDbCdHiojC5cu4sg3ofgcvmMtfedboULBsBFyu8PB46rwm3RhgF7MZVmCASZY9jgxVApv7P2ZG",
  "key20": "JBG9PeBJdGesL6XHGQLzdTLTtwzJjHYTwkRoXkcwxn8YHKMxWBE8zDpcZuQfPC3QwWUvFrqmNLK8iyDEBWiWhtx",
  "key21": "65m51BKKjJi8ABvYixRTDGFhGWxe8aEwjGSZSHfNVBBbnh2zEWEVgrVXWXxCrdiVc15hNnXgteWXnqAmMLGHfXU6",
  "key22": "5V6jqaV2RuYCdEd8QcFs9m8pqsrb8pvVqtDSAgWpXRKQu27fUpWbu1SmGvTxswSowwt2e4EHRR2KsitmiukndknC",
  "key23": "23gGHxbmsTM4xuxvKBYcApFkdqFtvkBVrWsVwhjpKrTv5u9jgfWnZr3HYRNayDTr6foko13nDjsR2m32GDEsTLc8",
  "key24": "2nS73ZpEoayyGQCjVTR3etj9W5uUeLk1AQkvZCDMopH9sMCyDiWXLRaeuJGs61F29U4E1zEXthMzuCA9VLBEPsNp",
  "key25": "sENPp6dNUcHr8srYR8JWL8mg1JHssmMWKpA72dZ1hdPdDMfa1wZZWkU8gG2j56fAjZNoTj6mKHSPx4WNJsZrJnJ",
  "key26": "1Ky1czUVoJFpG8cBRrh6yStEYqeu8azQfA9Z6TiuP6teGkkG3a6RjSWF3nkEXrTsz9MCmawL8X7b1az37ycBBQz",
  "key27": "5aPnMyw2bPEFwHcFw5wZZHXXwVUKZYDou9nhV3umoi6F4X876TDjay5KEmumiUYW7hUbQJ2xY9xcbdNbdGUpAVRx",
  "key28": "HTTag35MX5ahfST9SikPs2A4j2sgvGfE6fcwEssKtpqjMkj4sHvzu5qP1DBrF29XSnoMwxBoog93KXPC7icpNGD",
  "key29": "5yNm38f3Cqtj9PatnhVSqCuxwxo9vFzkLJtScysw9nLcyjC6vtzScueiRUPT79BfFo48M14ishkWcvyokNcyPhFm",
  "key30": "5zLvAzMdrVTXeC1ydYRkjozMP8VkD7tmrmGyConab29tyf3fcqPNK9wM6nBeH2J31oWEynJPWo7436GY1nAKiSoQ",
  "key31": "3FH4XcBRBnbQFPkwTK21wDnMWdCnxMRR4GDHmv8QYGXcG5eBvQ6nUrsSJuPyWLS96WMUPeP4bYUzkCC7AQ1oHHE5",
  "key32": "2EvNGPnfpDEJCq3W9RS94Fo6rGrHPay1nbAmTqRRsVnBMBE4HBFb1fjAKjnNbWnqL8D377xMwdCviqkQaFNCC5VC",
  "key33": "2HMZHo4CKMC9mjUg55gy9NVYxaR2E2dJi2XF5qShEuLjDFGaHkEv3N3uroNHUetiTJy39dxwdwk3qy1d1ML1EuN6",
  "key34": "4dWdUf678SX3iyC81odJWXj8T7NtP4Z4BaTb4vdDdZT7T3V5joPVnopa9jmWchet1gh55oTbsib1ckcbEzdXbGkA",
  "key35": "5sn7oQELZBFtHZkXpTogNYFiM4qDMc9gEZJdryMsuK7EgU491spMVjUoa5t5aNWvxrGqQtw8h72LdAfMAnB9CZGn",
  "key36": "4Y9mKPzQGZVodMpjFHo7UkgMoow3axhMFVe4JexPDkmFeYpDRSg1i6tg8QjsZba9yNEV4YooDoY2tW8TxZjiroQa",
  "key37": "53t4yAbt9RDC4RYhBdBaAYHaBwECWPxcqGg9k6pM1Xp5to8neUb3AfNCrG6NC8cPGDof4yr1bc8pXPeKVcV4odeT",
  "key38": "3VdLCdiukNKtdNf64Z3Kx5mAzyjKt1j4rTr9AcYP5uUiLBq7NfJUv8rS9TdvVTQT1YbVraM9HWBtGHbUnxZATjFd",
  "key39": "4zcCskhUDoVHaCRrCo2JYHW1NKYUuaJgnytbo2F3ExnYqGCMCBTMRNBe9rj4dj3j5eA9qcbyWuJAwMxht1w8LnfC"
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
