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
    "5yRQcH2qvMj1s6FFxvkw6GgH286rYtbB1iCbkTbUmsodA1fhsLnJ91a4xJvJ5U5AmoWfhiCx5NPtGeRkHSS9XZ3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPKJpsvA9UhnNZWRT5vhjorUKXExAvndhx8yx1fyJezWsnhpTRLk94Kge8KgEzC3pwTgxZXKJbJYKgdPmJ61etH",
  "key1": "5EsqrxtbJntSd7dpP4w4eJg3TqB6EYU1P6TR2pNrfdmrLQiVzQafAbCNPnmv3nGn1YopgBRkRedy3kQrWfHCX1PC",
  "key2": "HxmPsAA9hMoreC7EKQX2Uc486Zac8yaVdMtQUAbSfWts1nw9XP68JCbayYmB3u9FbbQsaLUDSH6DkwsFQtXLhYt",
  "key3": "4CeztCkwSENDvTATahvHh9aqP9MfzN8hP4oYq8Hs4Vjq4UcgdMyqofJCdxJZddcHyHQrg7B9qcZgZrYwMBPhJ2Et",
  "key4": "5WoVvvG1HaD7Saevfns4us1ZZpHjVHvh9bQpL2n2fvCFgax4JMbyELjrj5ksvzuWvQRKoNGJ8HXM1xH1CsAvB24x",
  "key5": "HJjPGnCS9Db1watY7vhbEWLAFczQzmSUei2zxm3zg5xUj4S2TJ55jnL5NTstnWBKQmyyJbaEpH1qyR2nkDMsTsX",
  "key6": "3w6nmywVau2aBSSmHTcXR9JqqAvPXgSYCixjK4rJk3yuQMz6KFb35zNoXCBz3VvZjcSZh16cC1a7JckFsS2wReeC",
  "key7": "2wfXSmB63HiJzyGSb7UdDragvi84ipVyf3QtaznjaMEu4GU2nksX97PmM54Vc1rN2p2e1nHVh5CE8i2u9J8vi4rE",
  "key8": "4VYb2LsfmKUeHduKTUPvR4yyYdY3ZedFRUCqyeiGkmmRhbPpyu2geyDdEufUfSDfyZTXkLuRdzYqEA1sNWxebVuE",
  "key9": "2BaRcz9aGd7JvTNv5HwDn4Yo8T1cTwXb4kuD1B3MCQ8zZaCcUFyWRG5Cmj66c8zmSvErANjYr4yP17VW22td6QeN",
  "key10": "64kxK3fPeKDMgNAdVPUbHrgAdG26StjDuvkMhTStcNfLwgiYuGf5iba7b1adSKJUTLenyzwDsT2Fr1z7VxptMLg9",
  "key11": "3ctGWaLHeGWrMbyCSxXwPgsN3WDHz24B47j5xmjTarKYWARPaXJu8sB26U1mXfTqhbcRAcGprShwsFuErAUZcjQ9",
  "key12": "2UmZ94GvCzUz9M2Kr92H2sERtwLf8T8FWyatnt2TJZD6di2WMdg1X4z7ricAMrnbUk48P5HHsvRVRqgt9UQ4PqqB",
  "key13": "4DAkpYdsbmmWBtcJM53eipaGx4ZQAEEqDpVb1bFMMcA6VghGbgLCDobZEyeJ49TPXpeHiddExjti9W7XZPByZPK",
  "key14": "43tduxb1vzHgGCC1avVojQCHbXEh1eg2iGByzt8jGadgWbGGizE2cAxNdg3GrdvGhxY4xH957Gm8cLMJu1KNGbEs",
  "key15": "2Ct7FqbJdr4Z2N8561WjMSnsL4cWNpS4bHZDyQMxaUX8M466YmtkF82YNVmYzHyPT1A7xdFSh4DxhXYcgMdhgVmC",
  "key16": "4p7JwANjsU5AutATx49wdzz3dahHQeAgxKdcfiVguTuBSxAygyZCAnXnwvKSbDoB2Sn4vzD6evbSP7PrmbUWBTyA",
  "key17": "2fjDr3yQzCKS4o1wigkf6483yPC9JZTd8C2ZaBwAwxeLGhUzUhu75FYeiMBQHWxnotUhKACCM34nC7o18mfdKVwg",
  "key18": "3VvDxZuM43NxaABUVzeSdWJukbspPw6XUvf6Mp69AEuEDayboqVfsK9kxXKJQJ43eYMKqjBsnw41xHZu3r2jP6eV",
  "key19": "2g7aZ8gp5mjciZGt697gHVW3g8Na1JAwkzarWAKyrzNVA6h83v4hjC3wHPLpWjkgtfobN3XC8bBfuTwux6m18Swq",
  "key20": "3fmrGGuWERLpuBQrUhpo8bNfmqq8jjEoTUAdbjLJgPQxjJsPwbH6goE1PEisFs2Hdxwwg7zM8j7qVtBJ1oXUsG1o",
  "key21": "27Ej4UZ4TkCa8LZd4FrJEvrcCZwJSeQ6GEFyRJDgJi6NCEW9ZYqu9eHj7xUiCh5jtN5hfuM37QBy6pxxypHGdQeS",
  "key22": "eJXALq1iFZQ7xA4htCjaGh1poUvDfHi1FPqfs56pkV5Vds9adoLuvnQF8V8CfF9vASzx6uTsprKuGxo9Rr8Vobb",
  "key23": "31iskCegzAHHUofpCST9TdhSXP7eNBpePdKXb3YqWk361cn9YtWJc3j6x9WPLciGZi5FRtPCPC2pjahwbZfUNfhB",
  "key24": "BFF7EgqiECd61J9wt1eNF7vvdQV6UgJcX24akfhNn5REnCxVSGaPfxQzBxH7Zd7B7b3DFWExEAKSqPxYr1uAA3Y",
  "key25": "2u84GKearmDro5BU9K1D7YbPV9vvK5LjcSGuJjFJ5xgoHCxrXagjGeyWxeQXjxEHg985xMpwKuwWFC2T7zUhPTfH",
  "key26": "4zJn56PVT9HuaFNowr9r1JH6ZUjwNLycpXXShEYMuJ8VC9xa6y2984o93Kit9y529ksj5xMDMSqDkfWBWcdsTu3P",
  "key27": "25H3EdbA1iRACzTVhYEwoPFqemzPR8insvh47Fv1VFFCUiD6MsjaUbMN9qGDoKViQhBRmaBcad8uxhx2iccTdj2o",
  "key28": "41fenvhf7BfNvqghMHEqpagE76LGFgqq1Z7BSc4FwaSdPUQQACm9tr3tXqd4E1e5bx2ptjo6QE6Zn6Mx5qqu7Vgs",
  "key29": "559K1fE1YQdUPmsEx9FTjmSycfQVNrfugS9gTeA59bGp1SpUwrpxX44Scm8efBBfsw4ZNMW28R58mLg4cHUCBGu9",
  "key30": "3XH7LBDR1Ei4JbhrrBewidDFM4VjLT7nrBErd5oZf8S9B8ZMBtDjvRh6hmi5kTVJ3noVK1xEQh6FdeBQ1EB6ehag",
  "key31": "gMTjQ3mnLZ1takoQzsAqPBd9LRbPdTXKJhLwmr1RngKFmFyWwDebRn5HAhSPgCoDE3gLofj6sETKc4kSwFmCEEK",
  "key32": "3d5ga7wvN4GJvDrB9y9TWBWfkpjLSeaLxrKYkPSk7PEsPGgPnAngkVLEe2Yzw52khg3fRkL6nsj7vpHV8uGTFfJh",
  "key33": "UVPaGVCibsagtYSmTxvri7uCZrbFLx1Z6TUdUsrUCUNzbXsEVgAB2QftAXC4TDzMTwcmvY9uU4HdUrXrswMDwX3",
  "key34": "4YcLDcz2pwXLZFsj7qLHuJrwrEueuL6fihpE8EmfbJ72LiEb5NTwDM7Y81djAEVBTKPofW9xP6RgnvY4DgkPx5j6",
  "key35": "5ZjsrHPqTRn6dQUSirveSxWXKHeTbbNqkSKkGzUSHvbSoPZM8ahQzP1YAzHEzHJGxRFvyErosMyV6QszjAJEsSPK",
  "key36": "4oTRWsiGoGUmrgcv1nUATbZKxqAFYsyFFcgyGcMWFag4z3pgfSHK768eJjy2wunN24v9UF3uiTz6P5H6W89TDyZF",
  "key37": "2A6HWJohgPvjWvz1byJaPo138GErAivpfpNAdc9AmsjPYWyFVHvd8nGjqH3rE6hijTPfqs13ubrUjt8msU9CVPGq",
  "key38": "3WYgvecreNNWw8NnNDCtj5XiP5w85Fwh3WF4ijZL7FJrGqryoMFwD7KkWpgxohHz38STqq2e7L8kbSLapGd8WUHq",
  "key39": "5eZVbSQopNC8X8r7v956A5mpYGThyQmwooikuU3AM3JAzrwipVxemgrcEwdFWucpafd9sStUihJ4WmCWtwBWprJg",
  "key40": "2MQTie3PZjeV8KG6U8pdLYJGwXY8nyQLoBvjqkw6qT2wVT9KmbiLZZXFXz4SAf4h1z9nWpqQW9cQ94JXzKtrPTS",
  "key41": "ckn7qzXBwnd3kqSECesoQWnqbH9QLqSTYfD9XBva4YAfd9DQj4twGim8v6u6gP3WqErXm9Z7J3uqC8BYzB5vApC",
  "key42": "3Cj2je2A7sq364mugwNFnZ7cXF9jAQu7kMEP2anKXkiMt4TR6qHgWxX8PEgmRmmVNFpcYKGgMQ4ojiXQzQF54oCt",
  "key43": "2EYXWnwLRRnnsgwJWss8pvUJCxrNUgyf2tRZemq82SZevaFUoZ9xhjneE2PToDUCUiEM4mP86TzWhKy5wEG7KcwZ",
  "key44": "5CefNQz9mgLwGBJZmbwAFZVhETaexnhCMbZanNAG4ZpaSzEuDVV39SbtuCNb58hbaSHyqyJRGbgjcQ3a8D5z2okj"
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
