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
    "3NLdJ1QHprNPJwawNttSAgA1iLmvBKp6FQrZAs8iaMu1fuB2yTwRmGNkZBvg6gA7t7w1eg7iNdQr4BXWqswEAFfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53nRoUrk7LFXdTCnjBhZGHuxo7TKpfnjNTcVctB8s1dBXLFizDeSDRyioAtAGqebZCTA5fSWaGm1ypa9zdHMcLNA",
  "key1": "4kAQpFRRRkuWp2QqExdFA6YBqrDWvrMng9aN8rsde2cZ13t51edWQiuSZEfJDYaq6iSntVc2PFtHEJmKu9FgPvqq",
  "key2": "2yf7eEUXM2DyK8umN2B3QTjkqAjcYEnHoxUXpaoqeBGZG1mov9EH3bGQwR2YpZo1iW6E8qCA5U5AumWU8StARrgT",
  "key3": "2EsuMkXPyPYmBiYrRh4xM4waumRkmkHhNmi3NafrNshUCSb2AXNSY5x2muTpky5ouHKSi1Qv8Gc2huC5W8FGCsqj",
  "key4": "5ZRNKfjxZnKPa8pCtQ71HWSA42aHyEXXADixWHwVazGFQF1hhqNfQdFC7sKzfJiWrVPN2QTwAg1jcdG7NjgtkTsp",
  "key5": "2Dx7qPMEghGM4Vi11jkTNpTnAwsB6BwmC7zjLkenAMyrUX1YGP39SLCfG67HoUFZHzEt94aue3xmQEASU7nw4Nuy",
  "key6": "3Hd9WMbEDvfpVEPsdtkFoa8ZEeG4zdt5fEswoA9tuv8BngtiuwSHPGGYRKDEXeBoy7HZMM4m5nU1fzfkJP7raYDz",
  "key7": "TVhwd9WYimw6GzDDu2qwjHoACTVs75b449bXqCaF7mAz7u1NuK9FS17aRT3CNzsGi6LjNGUqHoY2rw5n2VdtAdz",
  "key8": "9AozMoTY3FJSMQHu3htxveRMp554hmPFaUaYa8Bf1qSxe9e75JscyhmyHVcPpQ5JS9Nfnf5y3D9epJZZ39RzdVZ",
  "key9": "2uw8YTWQwSgts739YLaNKnnbS5qwzkxM1iH8K5iUZUP9TzpKVw9y2R8ahNiAs62NZfXF5Yxtwaz7NbMgPmGCyb98",
  "key10": "5StdzkaEMXPLKjA8Tek5xeHHBgYmi5u5FsMDovZbtN8fFf5MTuXa9iDQw1uE2JntfSCmTKNG9RGg451Lnz8ZPCyi",
  "key11": "4Vu8oroiHD1ddE6xFSSKtsaJyL8fhg7dEqWvw2DB44ykdeVRW1hmTZhCouu8mCgRwCVc783YgyaRkdAENorw8g6W",
  "key12": "n21cEiix846ZHcNiayEK18gh6BCNr3ifFs9uun8MddSdNznkAVdvZZw2QsuzfPXKWrMDMmxHH4gkHPxyWwsgr3f",
  "key13": "4fDSCcZBEaKixhkP3vPi3keQLH9v3npUToxj6SPNVmC6CCyom1x36oRGZnqgx6fdfSAeA4BCkQo6TJZG7iMkAZdH",
  "key14": "3NjoFh1oQnisehdMBmu8wzmWVLkzKtXcB8rQTaZ2JYcWjbXCCs2q1fLdGo6y63ywb7t68fH8d4AfnVFcoNJkKnLT",
  "key15": "2LZfRQW96u3yxJijCDct76M83U5zvBYybe92T1W5ZbnSrf9SedxYF5VWA6zRK7YqbN9SNnmWWFvKTVLUrBnXdq6o",
  "key16": "qV8Qcc8jK6PbN2qcDMN9otsvnbJqPRRJLfAMMtqKg4MzsbTy6mE9KhnZop3y9xnzJZRvWEXjqD2sZGCHteNzEeB",
  "key17": "5FaQnGyo3w8784UoCYNNmNemnJWgxgWwoRW54rJ51yPHha75uqRjH2ok6Q4M7CJrLziA36PghJhvtseorTMxHeqr",
  "key18": "5Fbwbn1KRE3CGN1svTw2Tc1vYK44PBKYpjYQiLDZLgGtNb7BeZvbbzATudGnu4us8LtRtakKpFJ7p4o67oJPHySW",
  "key19": "2bC5xbXsLRfNruSTGvQGvuPLPAkXBnnptahiDFksNZ9WxojEatzZdFMRqVFmSLPmsGZa4pRX7DLYALuiCqy2vRoq",
  "key20": "WXbRAkr4yGAAWNzSpLbjSYbekVx6s1CWaibokcVSoWe5YSGscy56EfrbcMN8PeDdY4DH8ivUfx74rBzT8Sw7L1d",
  "key21": "316tGtHhTdDNMvHM39TmQaMRhC4b1dweECUSBLVmytgnm8S1NZ6CaoMyWZUbZy7cntmS2a6vJUkKEnq5yPikeFrs",
  "key22": "232tCckDg4UhDruh32b5tz1A6RLmXWPEEnda9VyYnYEvGwfUvyAXb2cXd2wkNfWvNN7wx2oCrQ2EXAb3HKYfyCVV",
  "key23": "3xyGxXQHDjHS3EQ1EiN9UBumrTXMPfMfNaiHJqTbEg99Yar8dSCjXNHApnTzreeURnzZ3qMjfD4xN4MkLBTUXrsR",
  "key24": "YyP1A2Up8WuRnCvdZ4YdnZdtVkRxAsswXXeRGcbqibhXAQo6WDxkv9YNMqTbMZniBek79DFLbdUphW7V1PaFuQK",
  "key25": "RLuixgBcnVf3ecpUWJDoEaqhZYE9Whyira7GhTXpHdU9NSZNoaFoKZpVrYuTv9wq9EmERJNo1LZ49DjzG2tRsXu",
  "key26": "56s3MsDEo7upV2pw1o8E5QUZ77XMEiEKsZJxwRqUWHWy7K34AX6dJQZrZhoyn8NYLXodHxJjwJ8MfhLHtCJoxEMg",
  "key27": "2v4ah61jVDZCka6PjhZ33Jzi4vmAFnn78yNXaGD2c74kZvdV372UdnPeCbMr2Cu9EQB9Gvji4G5tYqVdPVZsq8qA",
  "key28": "2zD4uMYr64VnK7B46grEkhkgKM9NDgaG5uLAJ7adwzeJt8LTzD9fWjreHWJAcYYV6zXCFSJzVuj3xMKkQvAcACty",
  "key29": "2FQ4bXNGQj1wE2kkRa3eRKXUYSvx4hpqboySu5FfjXnEk7Y3bf36h8MPWnkbcHrBP6LXUoQBwmMa5LzSeZDMZkuD",
  "key30": "4RJ9tmiPaE2tJ8rKtfuZuvyBkohdjxcXQ64gpc3UUNJL5h8oUtPN844p4GLY41LBX3yFnr8txoR9aCCjhsX4PKWc",
  "key31": "3mGmqskszBQnmFtZw3P1UH3U2yRJHds6EXcpzcUM9acAmhyumVGBZmZKeX5KUSu8aFFXbvmxCCXiegas3oShjAEJ",
  "key32": "2EyWfDjVJP9CBt7cswvQY1iumie2LcuPnqjucgUeyAztWmUjWfmEUKt2tUgVa8Cptk3bKXSsQErWDRjQqttvfvvw",
  "key33": "35juWVQhr6285EwQze5MKAyxRCo6Zxne28YfCbJZnrFfBCXDB1eGPbjzC1WjSdqry5QpPjagCuF1mLh9eBTqpA2P",
  "key34": "5Uf2g7vgUhv7kWPrf6PWQtGsf4QdnJJ38xhPxGcrQqMcPjTV1tRYgfo9kugNw4gsfTdGsJ1bEJfSJUJh8MPQDFDN",
  "key35": "3YmuLeFkRuiJfufwAFC3PiYt5MBMCMWADFbdGoFSKV6dGyw61FC59jhRVJ9AEnPKq2gjYyePcp1WLEqJmVN1Y9L7",
  "key36": "42xMaJUEeXDH7ko4uRijHvXSVxEnt44p7vrkmZfgmZuSJDUcizf8jMjUAEFZEERBcRhVviqG3gkxf7WrSGzAYgQv",
  "key37": "hTUBG4QUcSP1icbM1XcuMBQP4MEFCCNf8DvHzUd2yD6BwngAddb6WhAcvDfoUVMhfyKyvXoSJZNpBbYwifriHGL",
  "key38": "3HTE9PUvGW3ZRjAcKuQrsaEpHPX3fmihPRPRscNuzamUcZtM8XvDYeo4pFNDDBCmrZaP7sN64GmGx7ZrU2rgsASZ",
  "key39": "31J86JVzoEvKJTqCPV5vHgNYQbcsY8KwVEG64nEPZPYcUKgkhftzqyt52nitrbwyhaxXfQhu7RnAbRs6dTXrhNG4",
  "key40": "KbxUxXEMxo94YkQkEYYZwJJPNZYfHa8wNog8J7X57CzZwCGboWVxC5A6zMmfi4NnXbggnLhphMEjP3bzjup9fL7",
  "key41": "5FQud6iZJPNeW32TCVwTDk6XSoonQbsz4yRiWpZzhQHMaDuCue5dgJkRHfUJEPpg9G7Rx2m4tsXDcxuDwMjLATQm",
  "key42": "66UGZ8Jc7zG91KqMHjR54SUWAtsVDsaJEJr6JysRfTZnpEf3Z9RVTZJ1jz6pVUMiqZC8M2hn3m8s5g5cwN1bbyDT",
  "key43": "2pTTrwdTHPvB3fRxdSLFGerTq3eLhpr5M7Qb4og1juzyKPgBdcdcxJ3KZzo6HU6DoHyycEAE6abFZzfRYYY4ZmZX"
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
