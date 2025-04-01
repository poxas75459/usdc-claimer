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
    "niovXeNtLa38kTQ25esjSwJBS7f7XThLkBaSJokt4uYrnTouwBnkiNFyBec5aDcPe5LPAz3PUqFbr3ctdpDUZ2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7RYUgLyeBqsRvmA4EeNj2e7158VizBZ55eBhyKHX5paEaqncvkqKBM1Khftuffmz7sCAQqRw1qpeoFxoxLEc5E",
  "key1": "yDWKar4t4yvfouo5NpQHNy2B6cAF2yqzL6d8KVx4Fkv261xUJaj1hPqbBEhCDWDLQZKEwoT2A6GYyV9pwpTaEJt",
  "key2": "225x4mjVFFVb4THgDv7VadKL3RdEUMwZuTuNvJp5hGf2WKQtJSG3S2KhpJWm9Qyt7urpSKgtMkhsYVjbmZMDkozA",
  "key3": "2eXhzQo3uKN5t9BbYfa6HC45gxs3zSSWJwGKXJpdo6D4ozPVKqtFvrAM3B5L23aSwqpXhYb6PfJqgyYjnM2et4cv",
  "key4": "4MidPmn9NwPSfpHmNJnPhm4ioHWtzFgkVADnZoFcuubLPwVSvKGxCJDTHMfgiy6HBxLtLp9wf4PYnquKkXJTZ6TZ",
  "key5": "3mrYMD2qTyWzcsy4k5Uo2yxmMTsLsUptCfnHznc1mFgXFYvoQMQYzShGe6ihHv3gwWtFk5mRrfXLQyEkm3QQEKVP",
  "key6": "5QppGybv7kxdike5a6aDgQtr4s655f45BXzDhsdkdS9nosrueMMAnx62GfhbCbGrcrXDDo1S7KAHg4wNxU2bpPhR",
  "key7": "5S2tN3tqCWHn8nJvFyR7msnhgm836UprTpbsmXaGuRGsamGi9W3xJGPktmKNR36xYDePYNxU9iH2xdTSCUbPaTpx",
  "key8": "8c8QoVKEmKUcvk8HW2sz3hwLsjqS31s56JbL4VQ2EAAYerVNXtw4DrMDxX6X5oU4MTyBzz3FLn9Cse5v5XrVW6V",
  "key9": "2WVTH69zrQqwhpY61RNf9dnshcQ7bbayJ1fben2Hd6BTeqv1FvDe5ksgHeE8MffhiqWisgbkV9WNsDVdJ9Rhf85V",
  "key10": "3rQUwqZoRb31mJuU5kNsYJwZMDpJhbfHDHNqQqz6Lx3nskz9uA1i4K3na5BJFatbrMUF6J12tnUGaorEKoQTJQxz",
  "key11": "4D13vyASyjScZfvxYn1FWKfwjKk2YfhcQaQYDYVJvtVUzBqiSkC1rRPQTzBWcFYV7u689UyHse6m4tyCASGVb6g",
  "key12": "51VefeZA1Q8dY1MFP859VamR59RktXR7YQNtrSH9FYPe1NwrhXbiTFqoJMfbn3GymCnB2zgRfSD68y3iocBonaSB",
  "key13": "2zWo5gFHdv84Vrghekm455Uepaskf4DoFXhp6VMeppr62ruwsH6vhBGyJ4ZqKoNMpFHuzEesvdUqQfpMiNQsePR4",
  "key14": "2PcMKYZ92C4YhS6z5dNRwGASVwTuba31sP1BaVmHgXsByoEYwW8hZ8L7Qbc75mcLavXJvi4usBvqnn7Z4yaYcPiu",
  "key15": "3YCuGuzzK2thjhNnvUjboAuEbBcMXH13nCTFnUt5sEbKnZ8dYf4bG4DfrzgKHZT5YYTm7gwJDBBL6nSx9gAfV9yr",
  "key16": "3xVVs4puG2hgCURrYLY2ufFVbXQ1VMqdqiRc3kP5JUKwWiFJeDPyPFnf4SgVDDxE51oQa2kXxNG8CSCnq2xybnEE",
  "key17": "5LeYAz6u9qz9sr8SPyyUNDbwidiZ9UoKkAhFAxqguhUxZdkaGjK1zeiU1jGhALtmEkxL5rKrXugzDzKkA2rfzzfa",
  "key18": "61fzLp6JVjnm9FxKiKZPh6ZFdhnpTVXtyPNfwv3hBPFdGDpxC5RiApbxZtj9K6g8wGiJ68CDL82WoWCNUHwZN5th",
  "key19": "3QXL5kWTuFLp87ZuGizryNdKPKGDgPnKSWWZT7Bzfp4Do8mDyrwz9DHxq1DqYJCVAXb2JWSdZZ9Axewk1gVhnJAu",
  "key20": "3FPmxbhp9MCUKFhPq3QSqe3smJQLT7uX4auPatGNdaTXPuvSHKcfYQhri8ZjRw5mwXhCCEqhk6LdHeMz5tzUJ3uT",
  "key21": "5m19gHmrVi4aZkVcgU3VDyqxEwHogzyTuzMCg6fJZtNZcyn1xKvwH44oic8szMbGJ2FV9Ks6wuqmjHW5WNseaedt",
  "key22": "3q4WgDpK9XkD3e6tUgLYVAvnAwLrkdUCKGZyh8TnAaDvP1Tu4m4uBeyNiKpxJFqE1YiyUzBTZHmLi6YDUiR2JnVG",
  "key23": "8ozodeAJPhjDCHNYPhFiBARgZ55rt5mSWngRV2hMob2hgRPk4iYmrA2J7kmH3aMZL2kJjB9n4L9vbSMZt61RJ33",
  "key24": "4X3XLb2bCHJUMLfWQ7mt9Dy1C3qFEYWj6gTZ3ifB2WBPKMYoAvf25cQ1ZEVYENpm5G1CmUHqcBCQHpu3fd4Sxhxr",
  "key25": "26NycAGDoU1BqaX3NLQ1zLJ1wQ5rMCdQAg8c3qCr6NYQLSQXvRgJBXeycXbMc24DdyebSCK1cCvEnaDQoM3CzBvM",
  "key26": "5nFQ5dqvuWRzws69RRGFi4kEdTicoT4UzvuNGDEoPUb6b23sBpToTnBECwZicBNGgYWinVyrymzo3rK1LV93CKhp",
  "key27": "39dogbeyHQcmBu7thv7xTvFrmF1jrEiZWtUT7gRGVeQEjBYL1bMGs19C2j5cgaCb656nFqJgt7nfAWSGpSqknKFs",
  "key28": "65ARebSJ2KeYkQkLr4Y5knknuk4Pb8ozVyXtqF6sn4sak5sRzo6gv2KJmUvjtmAQ7oNbZdZauhfqhtEB76Fv4F6M",
  "key29": "5yfoeZsPySUD8LCLjWAWuRwiQYjCjQv2fXRQcgvmAG1bBK4njh2pLsWcPFMc1sbymdLTuSTzNdsBi1sXyb8HDe9M",
  "key30": "3JT5dqkFrSz1Kxmn2eKPhehgMK7QiAtfLaFnrD4t6YJehkBHtY4B16cxog14RqgXSkipjWXTtf3haYMSGD365krt",
  "key31": "4UyHCKSE2fgkSQHdM2bvYkYbctNuvihhRjf2tvQE9Ziw23C9jbRK3urE7YgsDeAZXcKkDwgEHp1USyHiR8wDfTw7",
  "key32": "HMtJ5EtJLmzybangyf1rJDv2gPuBAbquxwfTZGhJZ5crqxgzJRWgrDFuoMXedLkGh6ePLtgVVb3eoB3Z3wAEgU4",
  "key33": "4vrE9rbwimPNFBpt7JrDCQR6wbZWdYkdz4Hg3UUajJr6SzJszURUhcetVmQTR4HJe52zg6BrEu78ddAaMus5gnGD",
  "key34": "5cBbGh5FUAgzdToxHyD2suFwkdjBxMzfx8fDZyedS7Y6K7hSoKctyVswLwpr4UdKJevqapZZESQyDbA7BeapPDBB",
  "key35": "62HqVBBGrrWzW9cRN48KeA6aHGJu6gYDTjiCFdvaUam7tRzeW8sR6UbPJQVG3ZJwi3tJwdW7tkvnKgzuwwJ58hgB",
  "key36": "3dxvYreSttx4s1DGFUUsfXNQLhMCaA2ctBb7DhK1eGmRf7rHJvkJhECoSso6iWBgfD6AL6jqWhXgDi3LfAzjHPR5",
  "key37": "5VjYFPmmq7K3U53PMGWtqLkZH9E7A3SwJ3qnPTVRfxKGGrhtouCh2aa1vdkfSV1ssgaxoiBgkMDkcavi1z1ukve6",
  "key38": "3VFppbJXs5Mz4w84gXxpDdTr2kLaVAP27YFTvni947PFrr51pbVdPTwAQA4ztZyvt3PHvwUcNrrbtnPZFcUFPPzt",
  "key39": "5rrmxGHcoTpEo2w3kV95JiXNWcKBgELa9H7tcmexexpozHRvC67mgpdnm63WgxzUjFsCrPbW7XxKFTNvtBo8Da2B",
  "key40": "5mEP2GmNshokkQGFiNPqs7tzCV1AvGybUrMQbrHHJtsXhuR8o619xeN9AhNrPjqvjnaLy7k7ornvZaNFkG19JU5h",
  "key41": "4Pdrj9LmqDsU33cpT1WhRLToqgFPFt6diVBfVqBzPDtDsPyoUzpBer8d4h9MdoYYPbCbJSL782gRyuWNUmfCVjAc",
  "key42": "5ozTEgePGsp86nTwRwjEFfaPP4MyUEqgbe81FaeQStxx7QoafnfCqf3guDvMtZ4jKq9JVWX2YRDygRp3AWt5TCP3"
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
