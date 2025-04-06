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
    "28WGXamg92UNdqthuibP6EWVGhgPq259eBNJkzxHWC7PD4uXnNEc5mQFF3zbfvDTwFxxuhcyoxQYyjsusxXYczy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSxMR1S3cYHzRkjk7Xg8rnmM8i3XoCJNjMR1GefVMSaYsUY2j1n9gNdJrNimiA1LWg5uGbVYUcMN4KZ2Py2wTtY",
  "key1": "2h1z5pNF43TuDzrdTrsKuRXfW48f8hR1XB1r6uYD2bbTkcMSfufUh6hqV7GcodSDx4f8QT9Cf9U4XFv1CLRu1Lvw",
  "key2": "5Ks6xBY3Y1by9f19W48JF3P1GfeX6Toja1fw5pwDbv1uA4ApNH2dhf3UTunfX6mnViLapnrUJL8We7X2xJKDwCry",
  "key3": "5Y4RFbX9m2UfooRvucWKNN9cUzVohMJ8m5QPUTncd2uaijvSquMYmipY6PjqRDGfg28vb53M4GtcnKEPrTq1DJWz",
  "key4": "4XGjFuu8qtKCQC9xZjBN1R6dv7qCDqJERpwN4jPEnr7tRyaqjyJGyG1XLMQoLj3ZpHuHqcaawbQWFboG2gTxnBW7",
  "key5": "58ZWbZBstiVGkCFTh7k7GfVHLZgH6pr8yc8ZXy3jkg5DNBAoP3by8TUKv2AwChv5uJWNWzNSQSvwSCm6z9xPt577",
  "key6": "438KiMfEw9QrYSLAZf2ccPgqHtkREYW4y91ZAikRMzEntpPkrUXFaV1aCYnEEhHBy2exQrDEZbbjz28wRxkQ6cwd",
  "key7": "45a4yMjsE29FzHrn8X8pKmih3YEUEPAaDSDN593N3MRh9t1E3kdUPdfyu5EGx789ZR4QRfdgPcBJP2JzLH9TrXQk",
  "key8": "4Et4m2cBcbbS5FTJ12HNj8bBCsvTHpLYSdGpuCgh2pZcBMsDxdefaii382RivEZoy6rghSC745bL6QCU4brWkg3S",
  "key9": "9e41o1USg6HKPT4SF7aBLbMbrTwHQgHfmEasgLStrpEGfWCEDnbeBPrjiUiW5G1GAec7P4KBKLxDrQgqJCRyUwQ",
  "key10": "2H4fQcsXysoZY7A1ceomsszJGQte8CFmktXyz3vZyZbR2xgzqfMzhDeWuLHu96ZjiWSWeUWSAm5MRB4SLDtRLxuF",
  "key11": "mfpdegzB7BMMWVs8Fgb1akB2rNeTdTHWn4zLfG8sJXQcRSzyjVrAmFNLhWBAa3QSxbBy5Jy2ASpNtag93XcZfJG",
  "key12": "Rrd3q7xEHArGEsebgrVL4ohpkG81K5Gc1rM7Z1vQdh3MxXgrkp4HsRaRycbn89ZrHj37pd99yFS9Zuo1ZJYA1z6",
  "key13": "2fzdZqGD61wzdxejWc4E54CLmLarBHEAjH8cX2YooV7kPo9SEHaQRx6W35x5YbqZx6aNepCe6wVeyXi2HDk1ragH",
  "key14": "2cs7wr9i7PNKKiLXT5erLJzdQyKet9GsG2C4QvBp7Vk8SYp5vugswimVqGqRn3woG5T1R5Stnaaw1xQBULL86B3r",
  "key15": "2qdifkixCGz8EdzAgN6sousMyBiiUTaPi7Zf3fjU4w4WgF8tJTf7VpwB4zsam8rEf2EMz4hUoaPaQJRecmmWpC4X",
  "key16": "2LU8aHsPnKFr5LU1tuZ9u8TPUVUEXa4n55wNTnDvEre2TJ2A34gMxGjy4nWSJeg5pCYY9hVqN1eBF85eokYtdo4W",
  "key17": "7aFFx98qBvJ6uqBqq9hx581wcfBDgxefdAHrGF3sSSrjZDLeqTpJG8dQJVJqKXKMRkxjojHCbe8B5a5M15W62uH",
  "key18": "3megYMm3VxwXEYKLJWrutM9L53C9hJWtHJsC15tPNrmytgZHZwiW46KSR7dFgASv762CdjSzLggCJvgRzJ4RUkhY",
  "key19": "2E52hsNvR7EcgX5uijqTZdojaP9uMnquuTSMt5Qta3K3Bszsuz6zQfwuVbYCh1TgmtRbJaKTquA3qDFYvNYgDcFQ",
  "key20": "2qz8M1DE6T6K1kY6U8kntpa4tHdyw2NHdGibMGFxAiBCjngBynnDdTssYstDBSAUjmn3ywxuXTCptZ8S1Rebbc79",
  "key21": "2QfmT99VAUCm7U6ErfGxh47FKTqq3vHbGnohuJfuxuLx5BZczURDbgXmysHoraq8mCjdMegJGwbTFwXgWf5VcWvv",
  "key22": "2QQmtbBvcTSn464RdHp4UKGZH6JvnstbzuddqSkEQeoB2Z4T7dXws6GS1BYAr1hwf9JXiiKsPqVhQdBvMSfDdyXu",
  "key23": "j2tYk2G4jgWj3LbRWmBXySfpZj5LfBH2wWGfW1x22XjooN2XWinGUVjP8KSqeGfiJZU4F9e9n4tWMhpvE8JhVVG",
  "key24": "56mx9uUWMnFNYemqo4BWyyii4C9p8YudqJQcEKWt8zboBjf7v5KyDsvdjhyMg8nsLtjZXoZnKNhtcUhGempogmiH",
  "key25": "5ekfVek14cpyyoY5TMosjJnoaNdHJZPRymJAMEN5Qdjkwd93VFfMvgZSA7gCHHMiwAoHpjeYL8twqWZcL7QQc7wx",
  "key26": "4PTiXziDpKVttu54MmuNK88t2tes9BdpboTzanUPqYz767YZp1NJ5hX976Aa6s1UxyQNWwyNNhXoCBTBgsRuZdex",
  "key27": "2LBvxCH4W9vGDF4irZafb7X1Q3ozmtHc3L6MbaPVuUTA25Xf8tEJn33v68ZqcM68ArM1FyzUmy4seFLdJieerFCG",
  "key28": "54FbZCk8yXbtWQApR6EnCo8QaYKGBXWpubyo6RfFSdiAFUrc5V4mQqL9bYPawiet3mdZ3pCFFxyFCE1Gu1SK7eRF",
  "key29": "2J1spAdQCunXs33pXPSuB3ZLrTH3yniYheRUV387nBgEddWNcoyW4ihCkBFCWeXe9CUBYKdQTNrt1hU9JeHpmQyg",
  "key30": "i6XzF47vjYzc13HpQmAqxs5eYTVyy3n8ni1YW4Tp1KEYuaRLzS2cVA2JG9ataPQk7A6ZErYwGQmfiPDjCWdjBws",
  "key31": "ekcc8qwDgNLLwrVU1RzDsLooeVUsA4cjqpwsXj7ggeD8Gr4rVFyjWTm7SRZZQ1ee7oSm6oJx99d9xEkeHAgPaRS",
  "key32": "2MiZ953JB3u4H8JGW427xJpeAQmkGVNph1NrHWGyjhF5dF2c6ybfG4vNfBr3VuUhHPtUfhDBz5FALRsDH89WErSr",
  "key33": "3qJwAzDn54nq9YLdJ1fE9nS6TDbkvzRCyofXLzCT2K2NTFRyUzeDgZjdh7UDaPSZ9bEkSZKkuxAYwh7f25MNq36g",
  "key34": "4ay8ktaob4EQU7a3zAtV7wRkxP1WNdkrRF7koHSssLK5YaiPubq9h5L1vkbxdMEET9WTYNze8Mqs89hh5CwrsABT",
  "key35": "57qQv2nBcwdydgw1ZEUGHiFnAUM4jEwr76xeKEik34a3YYYySVyBTdPRBFUMTeQXZdRay6yGPeq2ydNvr1ciJAuv",
  "key36": "CPBbh1AUeNhNcomVgVzurQtSqW3X5UqhVyyg6nA3N91oDqExtoy9czYjh2upYETDAya3PUTNkhv39rW9i4jy18E",
  "key37": "3KyimSRVZbmVfg59wWHTWE9LmbAtdqibmjCJMDkhKbCFN4KLUdkmTfTeaNUXxEEymfYR4bCQay79Et6mMci21HmK",
  "key38": "vC1fw3DJZZdkHeNtZ6KNN57r6BJTq41cXhytMyHpBG3w6LnGiMdAB11cZFRwq6wkFi1F7sGo1NFPWd8Jk8hSuQR",
  "key39": "3nUPAny9KVDybsjq3MW1kiESfL67f1ittBE4YKw1JwXZQKFQJTnKg9hhmFfrGtfqqSFLxbzchkwmnrKKhadVaDH9",
  "key40": "56JQQwZQ85PVKVn8JFoohNLNx6M6sFGPUFKVyVpj2QhP5EXKDkwBzCuCX389if9kbjJDdohatiVSixsjJg3rhRBp",
  "key41": "5LK8brLeuXhuTqiHomPT8pHdQ3GQdiA8Brtz9aSe9ZQTnXP873GNsEaDKeQnAXqYNA17ZDqCKrcGtV3jTmyfQS57",
  "key42": "T23ujZtC5apV38geCqm4vhoHHH36BVnif7UwJJqzVGUYjRxqw1XnCAkUnqanZqXVutd3oxkoLnMB8QcVdTsjShm",
  "key43": "K8iGYcipkhFbrFiDjQP2MYFW92dPSGYudBgDE9uXVXLSk1W1HigSn9TRP3WBho8UxZB51B7ajCs7F6ZFnmKdWBk",
  "key44": "4MjQd65Sy4dPB2FyHk3ud9eMS73PeDzquRNQ9XpsbokWxgQRXGo7zLhTZK6deeBjdBA68B3pSoSsRcwaueiswZhc"
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
