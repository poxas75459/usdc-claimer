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
    "3PaoakFuHJjL6k8pqmWCKoxpeUKJHGRZXhb1DvMAPyBknbtEG7hZjws8adzLnjhJQfuQWmzGAVsPZaHadeu96hLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rpov2RjkW4LaaaMkpVvmRFHm55ih42cqRR3aQqcVbwk4ixx2wF7yuhZwNF5yWX17frNVT4zPf25Yr7fo9KvKG9N",
  "key1": "4fRUJD9jLw9zDPuQLoXPqF2kX1amF6yPUMH3pMfFXJ6wdWfxmnEqZm3XQpR5pLmd4jhkT5WDs53SwcMzvHgxq17e",
  "key2": "2NoCoXknFNBDEAtSdRMyEcWS4MDaR78R4TS8HbD5zkV4o7J6mSdgHXNpSPDxDU4RkHmgDA21DFykaQkiB6MCk7Tx",
  "key3": "4Pcp2iftW7oagBaqFjCAB83nw9c7zTtafwqRe33WKoYQmnVxT5AbsT857sZY3cLr6dYucL23V9fRTjpsnLcAJnf9",
  "key4": "3LeJjazsYiSu71UpdSCzTG7X9RJKNignuFV1BhTG1sUdWbyPNvRZMrkGA6HZ5KqPRQcPr1QBQgFMU5FoaEHd5fFd",
  "key5": "4fHBvTdWRFJhTQhw3AXtptgsW4neQ6heFyoRJgNSVk6B3gvTFNSavwzomkfp8BVfFipfidbXfgBuuuHskRR9gTNn",
  "key6": "obQ7NZuzTNSuKknFF4ohmBUUokJhHmPfcNtZfMSijDESVY6kue5ByvSgxiehA8tbZNo4FuwmTYUTFVtEnG84mTH",
  "key7": "eDqeprK21X4KkoD8PywgBJDpd3oyQUXoy8gmo7seJkArHt6pn9Vt4Dc6Uiv857xt91Lum6envVVeytLo1eearSL",
  "key8": "49BhxWCbkGv1FuhexKxtEZmrzzm2cjU4vRibM8sUhRpxHP7f41HVXyad8AThdVpSMsPmufKccK3oPF3ucwyRGz68",
  "key9": "3Sw97zXhDFPzWFvMWDogihGMCNntA12ptqNgkoDZLPeevYToVqVBZj5zvAoxQasUYkXz7uTw5ppnHQWdFG3c7YV2",
  "key10": "5BFWBJUuxSwTzgJar7fQ7DLRPNa8vz7e6MeH1LGTPrWCM221bfMG5vTbL8UKekK5iVNNGR4WBJaHqiXX7mUB8wyA",
  "key11": "cT9P9VyUP8ofQi3bvC9acsoADCRTRVSKVk3U6naN9wkEkDAHSE6gr2nY5KRbe9dS6xgaDzVn3SoSwxpC8jDCH88",
  "key12": "64jpqKWmdP89jq8t59RTGJAcMkQWr8foegDpWvf8cqSTHJMv8YEDorHsMMnZS61LpWxQfrRYy25HQ2GQW6DpDYjG",
  "key13": "27iakz9X5dp4jtJYK2xcyywbthp4SvJwgj84De9tr6UNBkLm17NfCzncchrM64aNjBV4h9SENdwQB6wiaaaLVovq",
  "key14": "3gxaTLjN2EeoCPyEJsTuQbhGy5vyGvBJP5KEN9zrQNbFm4JKCxdLXxZNpXj68eL94VykL8SQkXraFbiwpp1CBnAN",
  "key15": "xBMikDwXTxWvwT8DgSRUA2gWeUGp8tdf8RaZReDy1XC7794eka52b8YkR7cTnxpa5r3ESh8CKDXPrYvzWbJf4mz",
  "key16": "Pnq1SgetrsyFsmMJmKKZPvyZkeBkns1S2fuTjD5nnhMxjrjBBfXfY4NXQeYJ3uKkEEGhTrfkPmm3fSjazf2s4re",
  "key17": "3S94hpC1k4SobMqcvGJB5DXo2pfqvvvsm1Ab5DxJGQ8qHBjQJHoyyLPAPD1Spj8SpzgJ8z5ssrUimREjrqmUB393",
  "key18": "AQ2VSH92juGhgvHt1FwbuGA2xu5xPpbMvr4qr1vK6L9nDiX1cPEfYUiLQbJxNmiXzYgrZEASocZ964XXwk8C2mP",
  "key19": "5TsdYLPpWZuMeAa9yfs1wJms6jQeSbyq2NoERrmbPzh4RCdsZd6df5Ak45tLuZP7n6THpkfQnq4Xr9TBMAQKCgdU",
  "key20": "98xS9dh5UCDTPCbcgSaqNx9SGvNpZpMkok4fN7jbjBHZGrvnGeDF5nb9UHkjXLRb8QXqJuKZ5NcxJHbsSgTzfja",
  "key21": "26BRusw4pwqitJNaYxmTSJT7dhy48C8KJRE32s8qATK3of9BiZEa4EgFCwaZN8DSuhuorBQDYshu35acGdHXRwPC",
  "key22": "5mNfdF4a5qUWyrTJRxM9RD7eT1WMhVcVPuJzynrXYEKK26JPGxnCmTXxejQMTNB711vuvrGpXcB2ZCpDStwGurP8",
  "key23": "2Es2fYqbTDXxe9ajjB1Ps5x2FnVGuCBkCEgdAF4WCH3TN6XDRbGmXuXY7AbPumWceoxScpnkQGVQBTKeMW9sg5ZX",
  "key24": "4twUNALzjKM9U9DW1SpixGHU7Ut18CwJMfpHW6cfvTsSaxidzSKjqaPRLPYUJcZiPEBbG7q1iBAsFcmNrLBmSq6h",
  "key25": "4vsynk9cmujwQgGRXV2EfEfoptsMwfuEeSfNUq2PfuXHxNqAuY9YGutYGoRhtTAsTmsYdL2G8ZRFSHRURYTgoynM",
  "key26": "62oedx7Bh5rYzgy3ZZT9jhmeCqEnAeS1wzeS36J4Rgrnhntm7khQLgwarKDpFzTmZcumwNpJZVAxyys8BEjXYGAP",
  "key27": "3kvfavKnHKemBV7SySuQhjwZBQ5UDNSk9e6f29bK1JBq1APEb7T4PeFg5oRu9dp2iQi8sZXngws6ixCXVH4RxBo",
  "key28": "5jsJEDavmeCNvGfzMY2MmsS8eQKnVgna1PbyUY7mDzAvzH3n2Z5EMKSKH8sRxGmyREDsGq1CkrjXue3ksCbXvTrG",
  "key29": "3oHkLUc3RkZwbkg5BUnU6QgwjNyghdWyPdnPCoebT3mh1fNvpx3XxMRaeNvQTywEVbJZ2f3tXh9kQT4VZxkgT7Se",
  "key30": "5QVMpjktVCVuAGyw2MRNJUHWBBkm1AKUCGkNrc8VDAmspro22F394MPULotwoQoc7W3KPbFegUGivwi5zWvzMAfN",
  "key31": "DxVb99A8GewD5LcaG9RL656PE5eQJTNLMDdsteR7UeLXhcCy3M95y9j5AmiW65hDa7moWYYswrpZgMiDNatafax",
  "key32": "57yNeRYTr41j6eQHcPRHub6CgBWBn4SKjA59iufdRs6tgTrDdCxCHPwTtf3v3Wp6t8EzFzjqYK48Gapv4EcZEHxC",
  "key33": "64cR23GaPCYNDFDTXHCRU9JLCPTDcRzKytpyMDWyFhPPUb7sgNcJ7xTNrKDm1qDv2xMfwnHTEStAkCrDpehDf5oB",
  "key34": "2iMA3u3VJbw6C2RobdMhBThbSP1Xcr4ATr9qSTb5i8nDP4njbVZgBDxFFCEJrHYpA4BrSp9vkbtPGrGDtCBjDvPQ",
  "key35": "52VQpRb3DCrxob2XsZUwdiagkQe6qs9LiWwp4zm1AFxZpipnaeKYV5G1EEE7KpSw2zorbPF7NnbYnkVeS6EkLc97",
  "key36": "2CRWBwrnZ7v3TuuKg2aFVAN3c8EfiqHNp3wwuUTKRDeKubw6HP5ee4C6Dmcjk9LqA1ZgwhPptFfe8HS3eGHwrF1m",
  "key37": "65JSTiY8XWA5PBorM8KUyeeodGpo3vbeXQJiy4FJGWTE2TB28gjJa5AiSkgLkn52vUgX8miTGmJzV6R3K87LKe1L",
  "key38": "7YzeqKcCbNHuXAdTMGVLi7h8D6wPztP6jjupDjoLdh2uPDkHMjNkqDxjmpjuCxoAQAM6BAvcmcpDfrAsr4aZwZT",
  "key39": "4CUBmU59CRkyNH9eb1AqPhsq3oYdGPsp3aWzsGVGAY5ibBQkfvB5NbusEENVCjkhYq9FZb5U5A5fEhdACDQrRE7u",
  "key40": "58txs9YKcBtCCh3acNJX3EWxRVoc9HDHCkRCwNQ16yL3uC7PRoB2wvxqiVnFfiARbcRk8hiGxCndAW8LZf9zcLx9",
  "key41": "5B9CoNZeQYLhMNz7U6KHkEbGCVVyz3Qv1CAjetUzqUgPySTnZmxgkdY7BPkJ5z4LCv8TwRJt33yG4f2XERBh9kt1",
  "key42": "33vwDNSvmgZZWwzTTCmEg1r5QaYPbeq4ZNZz6bRBw6cbTRFC3KtZRXY6LAtLXt2YVDQcUJTsaKqdXTmLqpnmPA9z",
  "key43": "ceGDwtxFSihBWR6HTuVXqmG7zEqgju9PjZ5U3f8xASvmBwtGYfidddhhBc6CUbAVa982JNeVjWggZ4SFMd9Srzm"
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
