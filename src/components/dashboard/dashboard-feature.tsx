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
    "6QSmi1oJkciMhQac8ywV1khLoWQzUoHsarWQ3k6CzLRaFkg9xJ5K1wYjk25vK57Gc3tsMMCo353vdEsLvGuzXys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SP8hLuLE2en5WW6WTaNWhQNVsSfrgRsnrLKAwT5Y1vRic32UiBAwY7BWRvLsCEwNQ5w15fL6FL8zsGsWEM2QPCJ",
  "key1": "5v7CUGPZXvH212PEDKYJSKqjmq6AN8DjnsMdHifjmdRQAHoutfvDc1vQtnCpiQAuKMUtod5QJrKdBwH1SS5yNPab",
  "key2": "41xU661V359KDd8f4z96awvuSHc3CcGf7L1BLUzpL9KKX3QwPRBPojSybdWmpiD1oUup88MWbCsRFZfnKW5CeJNj",
  "key3": "cane8iNJoCpkf2inMqhF5xLJ5ZEQni5YE59o4gnZgLJvhLW9Ns5yocyYPCAVQKb3Sa9XgTx5NfszPed4Rgx6bec",
  "key4": "3R3TMMnWA4GnFBwhnmdBhGZsda6jebpgUHvGUHRWKX35eFo98M3q9rYRCJWbFeZuTgo1J3XdDnpQKq6swAUr1R1S",
  "key5": "5MBbzf5EKjdaVtzkrPQytGxDJBKGGbjuhQxE1M489hX6tSJAHHTa6xeotfhaYmHs5GZTHzhhqgnAyCXzRNy9A9t8",
  "key6": "8Jto6BC2a1U2kysHg6WvZuRgcbxcLwoqvw7oMXfxrrhm4Wi1Z2pTgMfeFCgrsnsJRZvnmajpsQLVxDm2q4Totuj",
  "key7": "29FKnqQoHFU2J5KKp5iBqJMRc6dH227z59FuQ5nF5grL44sLnT7gH6D4deUAqWQH7pp3icA1n3nbqDGQsBHUGohu",
  "key8": "wbfbCDi2NiivY4LoG38suRDhWp18EwDVT1RbbzWprZ58HNt28YNtcLHJsjyq974gRUWvTsZu8Eabf142W2nbizX",
  "key9": "4vgK9B4XihqsUNFPMwojFXsxPr8qpBd4T6H75b3NMAGfjppkKZFLzz8z1rdrANQh8Fpqxiys2hdkwgrxPQnBQAje",
  "key10": "4upgtwDdgoN1mXztgcVc5oN4oGKHxABdyc46WSsHtpxP7oTrnzWoWoC8mnFdRpBiuotzyt14TiLsjWLG9Hk1RR2w",
  "key11": "5BjUb6adEw99PntnNgRncM3L4438s2pB3fwNCrZbRM6pMsKTJGHPS2kfstHYd5Mv4JFUSXPQPkb7aSBAiRCX8VJe",
  "key12": "37dQ2F4hfweZ2GdnAkqnvvvrer3mQGJk87PrEyDizBhHUZEbg2euB3edeC9gw8MgvfZeBnvDtL4YzPscyvWkwRF7",
  "key13": "124fxiDKTqUFVh8ALXUDiZcKHbDjcKzMoKb73tK3LmZQDi756jZQij4eqJJAKZ8zH6K52UcUdoDGi9tE6S1eztos",
  "key14": "2WUQ5rYqi2L54azpcUv8cJLLtc8vfsHa1LyR25RRoV2hYxx7UMY2YQGLjhJ8NFg9dGoBsk8GDwPX1471ADcjxcMJ",
  "key15": "3zPAyP2WWsXokiGaE1hAnBALangJcVsh78ryWnmstJko6QQVhjEihKxD2Bi9ukLNK8BuspbuwzvrLT6LtbsvVYRZ",
  "key16": "3dyo3QUnuoUohE8fGQVpa58L1mjLcFLCzU3UqZjuZ5Kr4gReVCMTRUKxC78hrkHPNBTMV9qxT4eBRx6AfHiYEcXa",
  "key17": "3CtjC2J2fhMLcKfFSi6McFD1Xiq7vX22eKUQcPaG6832pJckNeYBFre2DrMsFbXgrnp8e9CBicCjz8HmWnJQp9wo",
  "key18": "5nViCEcoXwXujZbM7RFnysCkKRhfSDGRMqo921ipHx2Vh58Qvj2EB941hsyohrWWN9VooceevtUfhzJY2QQ5Pgjf",
  "key19": "2s7Qr8MCW1ynBX9RKay7LsruRMyn8AyFHEvnUiVRTxp95dxeRoNLCLcNjoVSXonudcSVfY5TD1yQ2TzGKUhGw22Q",
  "key20": "2rpo5WwqqRYx1dGquwuGPhh2n5fhvc2wCinNuibpuVRRFXFx8YtgMPspgQtiyehQtc9n9KVAvCBgRZ56UBwWGEsu",
  "key21": "UZUeQ1eVnCbmX7amgEqKhk9xAeHv8iDJHmioUukySWRBAHDQQZNtSakkfCQf6Un8MyGeBjwospuNNVntG8WUEe2",
  "key22": "31dGxCd4WZEYs82zG71AQcj97aH5D8iSVSMp54K1du9g8d4rkhpprc8WNa3p7q2KEfo4ocMAWAQUTGue7tsh1nnW",
  "key23": "jbwNRoUBhABcyU14sKNvzQm5aU5YRi2CHBzZ7gguWUPW323dFSE29sxxB5CqfxpstuRuXCTBUhx5ajWAei2M1T1",
  "key24": "626QDDKPq7Zok8gKfSSecBWGVmqLMkEty2mT73Pnk3Dv24cWG2TXiNs6NgaJxPhkmDLzbDHRRASpxiDww4ziX7og",
  "key25": "5CVpjsWqq2btJ3eBGLehvpULRqdRbDqi8yy6uqieFDvB8y42tH1TWw7uVurrbJmf4zRq5HNmPDcAYHUXSKc4Kgvv",
  "key26": "5cEQBjq4DQ5mQ3dGThgc3XUyDtSmSJf7hqmihrpzgybt1RnH3wwTsxPZRTpemNwDSM9v6CQorQLxPMmzqFSxZqBb",
  "key27": "2Qhr3jQPAa12zQ3pYFWcD7etTHnYNjyCbmZhErvLfwz5N7K7QrwNjt8c5WHakBh9GMFdssfYezMX7jcoCq2qhuqU",
  "key28": "4sSib1eRthSvVUu4BSautMnYeoFBazvnQzBMH8kPqz41bbbec3j7u9TY37qm6mqx85ixJx2LZrds8UGnKb7pQGBn",
  "key29": "36N835P47hXKRidqCgG6uX6uMDGGGyiJnj8jD8qDfZ9qoMEMH5WmC7S2zikyXNirrj18nuWsdRV2Aw6VhZ6kcdBY",
  "key30": "629cx8ga7w6NEzw6R91hRzd5t2SsKyAxhhLRqWxaPJAmAgL7d17wJEuXpzfcF9bKGTWXYjEPRctzbxiHJ7wKJDKi",
  "key31": "sCc7Dc5JisukWjw8MPqyCG3mSoPSZu85pfWEb79iufQ8w7YFG3hCR6kV8JtUscoRx37zvNTrW1nWvFnA4fTGGmo",
  "key32": "5rvcgmKk2sjWPzd7L42XmjJQ2vVpjuzeaaxRHfqGtoF62ESmSpXCuWFhGyiMgMWNqyuyHKaQC63ioJcvFKdMaDpD",
  "key33": "467mqRsaSwRRe2b1v2w6yPeM6joSNETCUmxixQiWJFDwSBtomHZdSViJZiVt3VhdV8SJfdqYmwUpQp6CsfZTRPNX",
  "key34": "2zvdxKAUjhTFzzpWs4buhvWLuFcgu71o5xZLNSQQ7w7DXoTLKNWc2SAg4m5jBGoWxGZkB4JompuZGPUHhnPr326f",
  "key35": "EJm8mVgY3Ap3zsf17tDMSRAipWRU1KiQhvLp55Zxs89fowXpFEp6k79BtTHnA1HM2KtfxmNjmjQuw6d78pb7opJ",
  "key36": "46dW4euGAdwLqZfEF925ZLmp9FhjCsPzp2jn5BP3VjToYF4AStpyemLrWqngoPDLNZXkFsZwZbFsAFndakEKcqgF",
  "key37": "uzN3BHi9uA2SjeEffXAZHTmRUf2aCvFDuCtZZww9pkbrq2MuKZkAXMS3KYqpJPuXe5XJig1XGHjM9fSuBj2u6H4",
  "key38": "3KmrN8iMfF2njQqpeq6nuYiLcFLY1np8DVR4b4hMboQUqA6pCb3vujpLaEduVLP3CxR7FPiJgaJkPn1gWjh7oGha",
  "key39": "3tr1GguBiG8fmkjwHzHWxnLTDW6LVeHqBUArWV8FwgF3fZvCzYwG4vFKXCQSRNXHyK2YHJCNyCGWqK3hFQL2jQPn",
  "key40": "3ukRhKPN76xRyF9E21C1pnreHLyXoCYG8Ub5pPeRSj48LYp7YVatng5GuaGyXgix36kkn7pXTR56U2NBQkXef3eA",
  "key41": "41TYetRpPvrCCbdTzaEGuFxyXJAAtf6SPdrDnckaJNEWCafRYpxFHUCAUfPdKCv9bMh8Yju8d1k5ew1z7Bq3TNQ8",
  "key42": "4iPzuPoZXMJARyK6vjoWwSKNwEcPPxjNnqjJsryPj5VmTr9EZ7nA52nEvZ9TSrGYFP9EfAowhyMnKYL66DT4ZJcV",
  "key43": "5T6N7NtiebsXaJ29aa2hQvRYGY7CSPLh8qCJzDttBsrQFpDDdBAfFXhVaLiKpUBZtm4MVd5cQL99iEMoCP7WLe8D",
  "key44": "snoeJe4BiaaytYNNmVnhKXrz9Gtwdx6jVTnwZFfQv19RDBCsjFyQgskExM1VNzP1Jryb5De7urK4b7NyC3Hs8aR",
  "key45": "5uBVoJoFpS561eaztwLo7cRbFQfEHTx1KajZoeMGXXgK9Tvu5WuSzzqChd3g5gwRhfkDpRYrd5oo6hGVh2tH3Xjc"
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
