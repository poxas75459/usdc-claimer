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
    "45HTydQRnSrqnRmPG1oDJicYnfFX3T6BaUW5Bd5f45zGvsQbLe8bKYnSyFAUbh4noZgNBe7MW2X8yfDDAkDhnEWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZ5xMkoMX4o9JwfBZGUEkv7SF1PWRru7ink4CtEgQNanzB8K5qsbuK23A7YYkA8DGKv8ozLZpiVqhctSK2yiMPB",
  "key1": "ihSjXrqv85YRvR2rtkUbGagqKrRjuHMX7FoPm9G5i5C7GJcDwvYvW4f7GLhAwQtfnFafxXZpNCjVb6AiioQ4753",
  "key2": "39Yrhd2ft4G5gFnbA4xtwb7miq9wn2GidhST6YD9J9nBxm2sAQsGAY3nse6WiCFjQRcZv2SLm1qfjnqKMSxovMTz",
  "key3": "3njHRYuYnpYWtoTdRi2xMsgacM3Xwm2VXXACGkWY5UGH5CFGHMCdqxYVcZ1Nc1gdTzhP5Ku3izbiNk4j4vB9yfJY",
  "key4": "5ervY7NJa67L3gvCpPigoMR9doKjEt4GdPzTwcpwP4U1WSf9c9QbXrYeCYAog9XHi2JD6FoPUKbWKk5mwksHETQz",
  "key5": "bWVWRfzZthkvHCKenkxJUPEwbwodvTZGoUgJhMZh4rAD4KhJxE1gkL4iUpuxQBHNpRsn9cHNDWWYjnYGu3uiyLb",
  "key6": "2kyB1Qrn1GZzUrGNVVJUD8rPmFoZSC4VadDNcLu1pRa8ooF5QkUii3DzfRouYLpbm84ZDjiwh3K5DafjN1TY4AX4",
  "key7": "57b8zWEKaL17yf3foBu9SFCYjKY5F3gKyFbi57kBz2mvU15hnDTrw33QekbBEgiQaqyYjPdwQU8UBAZkSCk1q2vb",
  "key8": "2DkNTqPPZHyvWkTZLWGva7MUxyhLRqeYoQJSsntLC3k6vEebPLsPzD317XFmTPc8vQG4xVKRXfCHvaTPc1WNdfeJ",
  "key9": "2A82ZRjQoMPozKJ9WhL2mfxYPPS7GoFuVQ2DpiGCp52vpA4YckpUis91MikJbJAvXnPXxK7FJwKmBBKdvhpUKipG",
  "key10": "3kjbw3RFn9PozQEcr6pGjGvybSMttNko3Breh8GzGXGNzw2vZZYM1AtzFPtYYkA3fCN4H5JC3YLDGMLiiMPqndMf",
  "key11": "4csMYRXgRZSZXiMWCmnmWBfed2ZovfBLZTFyefLv6fXLSPbi5EJL5by8fWCtbovyPoYMqFN7g1wWh3R4bkRRVmZD",
  "key12": "5jLLtNvoehtq7J7hR58CkFaTQTiboEr1EQcHL86Lp9NdAbcgbqBBSQ3HP18w5zcXR1jUq8nP4reLH7zQmqCex4BR",
  "key13": "jcxjeRMH2UUg3cAweU16wD1e4EWYscryo7Vqh9j7Tmo8u3KYW35Nt4G1mVUDSTQ1bd8Pbh7FPxNUD4WQJYbxCzS",
  "key14": "57gnT4bM6wFSCCgBNTTuYhdUrqEQcpPyX2T5DgJhThE2xTzPvxSeny5tB1LMxVneRYt9PvD5GRBrHVsHxPixzJ68",
  "key15": "wHiL82r7hwujnrJXjAez1WAB6ttr3Dc9ejwamQ5rax1wRYJ1EcpXymhA4hyd8bqRWg2aTgK5numsPoErgwxzFWA",
  "key16": "58TAMzADYXKfet5V1k6iCYLstKBqTuA5PkpZ1ZqeiPvUihuHmKxGSw7yKiD5McUG6NJCkCn6bzvCReFimTkwYfGG",
  "key17": "kNivTTfgCpE357hFr6LRYJDUR66QCMtM1wDjovzozkKXNd3j1rE7UPn5KxM6ZHMy2rTLwu8ykJ2R46kjHp3wVcA",
  "key18": "SAtfwaLQfh7CSq5AxhD7xbdzrQtsepYjtykCFuK2Ve29Vx4Ps51QrE99N8EqM83j5tGka4SEMMB7vnEz2ffzz4v",
  "key19": "3GuoqkKuQ166uBVZ9YeKTetDC57U8gK23GywBku6J31aN4pc6rMcu1Jt5JrMY2Cf4d85LYBEfZottsQHGuni64FL",
  "key20": "pmRHiDiwCjbi6PVYz5dLMGvtYm4aTWp2bueMExFfZ8rorjCvpYzXpYEWUcVxYnhrxtdCXYfFP2mcKWNynTkd3CU",
  "key21": "2xsmqyKbaHLDV8rwC98tZHfnRgtGubQpW997fBo14V15Kp4NQh47srs2XK7FCznXgZKaHiyEukKHqV11kwCjBPzr",
  "key22": "2PL9zKhNGcwEoBDbQx1ax2Eaisw2MsH92wV4bByEnbvpGAHFGFMwdUJtMand6Q8AJ5VqU7DwszdvEGyZcx1vsCm8",
  "key23": "2ePLovofhWSG2Rno466ciQ5ymR8GHuafQYxme8fBD3wrBYdmiTdvdL8wn9QujUZit4Fbb2jduruDHY4HB7STEGCV",
  "key24": "4LHhUunxBXbP2wYBkTzfqrnWc3rXvbjPqvGoRgEu61fZZdrVXr3fVYjmwy7BBjTU4DfqRCo7a55YpLrjsNMJAgKf",
  "key25": "611HwC9twipSgxJ6sREVjG9HZhnkH22NAmtTz8Qqe9Y4zgTEzMBPGwRZPWPvP9Abd3CWfvwZNHNgc7LrPQEg862y",
  "key26": "4AWekxfRemGecL61TSZwoyCtAQyuTAN9HRuxW9XyuYJ4dZeNykGkU3C94SEKAtiyD1F49fcYa9ZPcj97PSLVrUEP",
  "key27": "zaV1b5ohBgQzMGbA75Qy2R2CYhkEPymiVaDsWVzQeNQMLrHW6WkC7yaxhQaEvegMzUx1cYbFHxewi1ftbetNuyF",
  "key28": "wxTNmSgtyCKJPTfG8bsQyB1WeC2Ak5fq18yR64YCZ5U7quBKwAkzNzGhFojQWr97zXhQhRLcerNx8uWEMbrNkHF",
  "key29": "64TBLqVXrbjkwVvWkKZGDcAH73K8FYhQb8E71hbuZ5gwupYVJ6Enf3pCjtSJMiGb16QHpu3ruLCfHj7cu5954p3C",
  "key30": "36cX2QLTdYQUk2vyS3QavGHK6u1cZE6adZaVVwJ5FaqtBLSkHn5rTquG2Z1YbXrmxd4bsujqepDrZTiNoKorXZR8",
  "key31": "1YbtHfJJgQo7wvQx2pe8iVsjd1S84Z2MC7jnYHRvDoAEURE8LmNecVA8oHY9gapHjvigtLdMWJscmBqPBvYjUUD",
  "key32": "iDvfG4s6epJ5Ez65TgPPJAmfDDdHkTReEat7pLjh8XmAUCyR4ZWNYdUbDMkKZEjdR631YjLrBQrQh5aYVjJyszA",
  "key33": "4gneDnGFRFyf7v1v29KEfRX5iFLc3CodkxpxnxZzUhCZWVrDpmEqkkKjWyQJHwKhA4txwkoBoZyaqJGobZ2NhEU2",
  "key34": "2CF2D6X4HmwAeuZ7cTXZUNqyX2icVaSDBfwEMRpQst3DAq94vot1BNAkiTmJWvWDCer8zoZAzFcTkAfn4aiXpY4t",
  "key35": "3g1fFCqWGpWJU3b7SDJy5dbE4zJ1xCGmYTCCR7HhPqeCoWNnNjAnDL9KZ6GoRRnBGbf6DwbZMfYwmbXPCAuGf8jw",
  "key36": "4g7UU5ZdmctunQS5EYavna1svKPMH1ebtBMcCLoFEwcLonp26tFCFYbNbDFyWrN4YL8xL6kgydMfYxADtq4q99c1",
  "key37": "2ygE3R5v5YPQKXE74pspvcJJoPE61Uv5YGuUTfvABaRVpEKi5BToaKMPdHvSSi9TKekUJaXtsEuef5Ui87Z6Kavk",
  "key38": "5u6PQKXao8cJCw3Kt7BSR4D2V9pvgc9TvQkSbEESKAtsEWKpRZzjKhRr84PAVvuTsNLV3YaeH7yNiq8iKowZqx2A",
  "key39": "3RVU3XwqfdZSxxRthqPeXNFZHTvBe9kqbejn2wDqFVeK2UR2iM4YkRmTkR3CKRQe8GPSHMZ3HYKhqiyv3WayoqGT"
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
