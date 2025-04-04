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
    "49FMgpiki9DpJhkdaqGc6xZF9SRQnXi9uH1f8bx6k3sn9d8Wf2sR2AYibKnnFDqgqQi3oo4YujhRAV7RzHnSL6Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lg8mebRhd2XKgmVMQgHoHUuh2sSGN4acWBJJQkk7jLVPA8K5tihjmECkqiWUeHGk12rsGEwXB2jtWK2UQYGANo6",
  "key1": "1ur93H64f9XUU7UHFUW5RSAQjoqHN6LaHuahaUfgqByvtFKgaRjHvQmoHG7LBwad1qvnrhQSoPAoppa2Cmpkvqb",
  "key2": "j2GojE1KrHYhyfykWXmstHwa2EMr3eQLPoj4sLNeNz4rcgsFu7d5eqBJbTw2fD32gGpxognkVi4JDFFvG97B4Tt",
  "key3": "HNWTwRjQPU71kjfoRaCCHyFWQM8NrJGbgeUcNq77q7hkD5NSW1Mj2Q9o5XwAbyivSX74AaGygTrwrZvqkGycs4N",
  "key4": "JafXB9oGoZRaHkZaVoEY6HiFKeUBWH1p51sLiqcKzfoRe8p8NP9CKG8y6CNUUMEqDFTrFMormWz6zd1yQpfr8xp",
  "key5": "gVLw1MQQvKV8CMMUafiwx2kbouYwKjLf81tN7wq4u2iTz1aWkV6mdfLTEharnFjvzCUcC3Sib82dg4PzNALcBTs",
  "key6": "65wQCJUT4pJNNA4ovyTnB7Bn5BBcGWSKAyD4SDEs4HQcNXMiPQB2Z1hTpScCriTXtTrXD2BmXQf3c9f9PXqsjvxK",
  "key7": "4DiD65FuHfeZYRrngLEdutr6vk6N8zWG85Re8aw4ERswaZKNjiXuxoj29YbNw71G7vtL9Ne3TpsRtNJQFeAMDUnR",
  "key8": "3RFi9nohzzwzwNrgzzew1nWdmt5vRMdvCX1RpYyfJSTDBmVYQeZLexb9Wi9wwgVi8RB1LjHjkyaoAGCgwPReEtSc",
  "key9": "3Cwzq73KJd72eYmkgH91chJBu8dcJeMFRjEKwCkGaRJWMw583CsvSSjn6Nz7gj1C9PJ3kko8AkVnnCdFXjAdiH1H",
  "key10": "vfmbpLpVArZS9jLokJ5hVq9Zw7qzmTAK29bWwo71PNoAwuZNXZMjau3KTEFWWAWwgmcVoynwcBb3MzmjfJmQGyX",
  "key11": "37JP6KNUg3FaWBSKeCf4hvvpFCpkvW3pX4CXDQshtMPgb1MKo5DsrYQvEUAoTd5ogu1VYtS3ah3QQAUukPunqXnt",
  "key12": "5U5FgotiGazYfv2X1uEtw23wDKDe2LuNbbF9fM4zGCAw77KTK9jxvjrqzPKsgUwgpZwXUgh4w7XNeYyAeRNpeHXe",
  "key13": "2GJmpzTztJiQRvgVZs2GBFxKhsuhCYnhVdhxodhDnbCrdiuoFx2Fgt3eZHSXKpNDD24kmfw1XyjMY91b8UZqhWCL",
  "key14": "4RdSjR5HQAwtDFJhEDuuQxeVArAVZQ4BTvfjjCLDLgNpE3pVvUrKiPLmSkCc2zyoXBigJ5Z9pMWmsviur3TKkoti",
  "key15": "3wfFpTKbB5zJLPBReyWD1TX4u19TT32hzNCV3vPkcLpFURy8NsuR1t18zZzbX4iL8d3yQkxXZ4sbrptaqf8YP4mP",
  "key16": "4mb8EUf55obUi8RSWh4cpXhsiEAmUXc2fbrQ2w8YWBA4JUnFrupJWiSW5za7zUdizcBdb14d9FQkMgUBT4k4z25B",
  "key17": "2G8fyejwrq3GD8PQEo923HHAA1HT6C3FWf27bZvRPqUhSnPAN3y9ojEYNzR1C5jdQeYPWYpip5g1DFTZNoMp5beD",
  "key18": "4wUvDbw1n6uSFy6ShZoEcGFBxB8WALaXUe2ksYx6vJNBfiTfKjXePizx33rC7W9CHWY2s9Yqix7K5n7h6cmZMFfA",
  "key19": "3fTEtzu34Su1kY6dS6gk1QVt7bux3GdThgRRzwgZ2V71ctcTzZ6UMJH6HkSpeHSua3mDkuFovLJn3eQEwBuvyhPW",
  "key20": "46xToPMAnL9sYiKfRL8dyXfdMBQSbcUN3tv15i7gh33brt5PQWQBkfQe5z1QixAkPLPPCCKWpQSFdhPYPzutjqu7",
  "key21": "4PQMPUsKkav2uxZJigU1y6zT242L7Hn5YziTbnSWcs98xBsS9iVYd96AoP3RG7m6YJEWqJrHLjGUXUoeQnVDAgkQ",
  "key22": "2ZteuzGnx6KLMBFhy4vJ34J8Q7Bxk1HAeiS9oTfabNNpmoMe2kEjtn95EveRMczNHe1tZyh3ZN2uyXF26nXzq9Vo",
  "key23": "4ikJ1CCWQo9JFgNR7BBJMZPidH5uXxTpS93fxxdi7XvKELHNehQ6AmQdaLDJwXGTJXFQ6nxrnHnqPX1ik5YG3xBN",
  "key24": "4ihAdxRnGMCXs84MQrXzjkVG38xX6HJe4oU99PE1msWtEz8gY2cpEdj1fBwEoim9nzQHr1XTKNzUQGe7ZMkecNGC",
  "key25": "2pAJ5EeQatm6jKbUbtfFe4R9yMRYZFyn7DhZzdkSRytQPGhrsYS6ju98yKEUaEK3JtmkWA58wToYA9T8k2fudXQg",
  "key26": "3fhdXTrKkZmRXwtVQ72M8cuTxZbgNMLKWGtHcZxHFVEtZJVQrJjQST3cpLBcpmUPLto616pG32hmERNZwWKgerq8",
  "key27": "3ghKTmn7SYvDYmu9RFMPCK6ZgfwodUNPJ62HXK9zMy4LTSCLY9jZL4c4HUfmckm8p5vXo37N8Lddptn7MMp3H8JV",
  "key28": "329ewMEvc6MZFE8d1sibKvmiSgZhEgr96dYaMToiiC9vgDAM8cYHLLEamhyw4xNLCFNvoLt3mnoZ9HE2hXkkvfTg",
  "key29": "3kLE5hcFYassQ1PxpALHKGRDHvZkWXDieir5DmSe3r1GFnrs6c54ycXJDrk8UBjekzQ8yQboayxQdzLd6XiV2Bft",
  "key30": "5mfVXSQjH87pVXnhoL9V5o6QCpCGGq2nuaGtn7adRdXD6ZXQ78TsvZSK7pM1wYMPBArVUrcVv59JPd5HwwpT7mC",
  "key31": "3xiwU8tbKbFV8BDBcCFHq7HcoKR7Muf31vwKXgf9cnz9oTd12LGxZaaKU9yx4RUrxuQieSaaHgE5HkEv67zzV7yz",
  "key32": "w7YHhT4isv2LikW283fiCUjoyWm1o7q9oTb4YgYw92SYPVPeCamPcFYfMuGXDzz64V7LirwQXhgKm1mbDawzGPh",
  "key33": "hgGkzERUAQNiBGRUzsGcBbGSup3GWFTvhokAz78zooJghJda7oQTZFCWQ7VjQjPenHDs1Bc8SN6ZhuCMm1U3piz",
  "key34": "2KGXtfMsMRbLPrbsiRfbknB4FarT7LSj59CvUhGsgsckyzh3GAQbuj33aKnSJC7E213fYqPWZh2fMSs8XCFqUnmf",
  "key35": "5pDQW7r1bdTf6ySuq27V7fM28EYcvrrDzAfWwiiTekp1o9QmMmbvUjctmCQBw9GFDkCrjhZsHgRXvU3beMuAKwJL",
  "key36": "55mqDafKW9oKXTTfYwxQQd9EHWeSZWLP1HnaGUx8uM8icdNeUZbEJgn8udpiVkmP1RHstX89QqeAgYJgSYwHTuhR",
  "key37": "F22DSAohSVQM7BxdQBpgkTyKU363qXdorfJeEma1ZJcJDUMop1c4GcSa5RyxCKC7fm9bpwEQCymsX2PwakGp73u"
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
