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
    "5sTM4oi8Z5stUri4XrMDHUkq4CG1AC8RwkSePcbFSF67qpXqR9okgYoZp3HA6qNtiE1VncT6FVTRHP5xTYL4u3B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vK5eA86vo11xVFC2sXajkobWCsGf7v8zrj5Ejjh39Z65ABwUZDk39LjoRhnXw7hCRnSV1MKPZ2jtVYoNfWiLqMj",
  "key1": "65q7maYyzwauqozFf8fZmZcGnNgCLuBuo5wMCHkfJzuCULSfv46B1NoZPih2qVqDQZq2BWS1jJ1F2F11oUPKLjmw",
  "key2": "2t2CeEKwJ2zwxSLAv4f3NczWT91BRsWRWPKgUFr6iceqHEEnD3Ud5GerLzuBMgc2FaXfqoFGs86MkrtS8cpNza2Y",
  "key3": "5u5FFvCfrZ9L6Bz3Wvx23CkcJuzhHGf8eddVpbezqqzFazRG8vvGyC442Kx7sXLxxD4rcPwSRdUqZgHLuoQGcAmP",
  "key4": "2VwCny8yxTZmRMBopyThHjzn6FS7PRKuttnLmAMTN4h4s6PJkKiuBVhjNMddhDDY3CRfzgWGCYYu75xLWcfTE75H",
  "key5": "4RM2Fb7kmMGPu5n4zdQ5ZuiD1r4EhgcJgUEM3GEy7BddircmPTxBuYHsFUuCge4N9PPmDnHuwhXDp1bhg5yZ2S5W",
  "key6": "4vsvzYBJnSwCSj3wTuAezyRCsN1BrYo2k9P8sxigAAuPwU1YTGc2SaMdQTycMVcJM86ZUpakCoUMzEeMwpGdg117",
  "key7": "2mk4MsrESL1zoLagSh19QDFDnF8nN49fJBaw5htyS3kekLoR5TAKnixVmGnBpczuREbruxGfmMQ6X7tPt6B6bBQy",
  "key8": "dG772p6VCwknoBDAbv7k8bqTbvxV37h3N29U6Y8auhPXecTt9rrdUoTeNpTBZnwy1wRaoMR6f4VPxMSuE63xCDx",
  "key9": "3PmmpLWqEH1bWtz4Jm5B7pniDZDcB4kSd7iL6qt76nNcyNTTWudS3Szk95GC28BM4uuh3jBi4hDLm78hWovU19At",
  "key10": "5KFvTTbBgBkWME63RmbXbKgEesogyeneKAD6w33okxBbjNB53v4MKy335YL9rZBJA3GzzySgwtB5TrFS3TkN4vvH",
  "key11": "5kybNuPyum6uDX49X8wwvGMBbAqXQNgp4draPmbn9C9NnrVjuYXs454Qbq2bZgXKMyRD8cosugRumhFTBZ9aw74B",
  "key12": "39dHUSiDS27G7pjUq4J3aqBx1vKqmWAyAkbBaaJeAbRbenaqbZNNJptNsmxwf3TR9WVkGSAKjX6hdd9WFTinzSWS",
  "key13": "3CzfqeD7NV7xGve15bxGPBWqN1F7Hy1aMZ2ZYFqJPGsKVQUQWW6boRQcJL7kjp4vh7KQVPkAneW4mSVRcJhYmco4",
  "key14": "26FJKds2LHx93PKicWbhbCaS5RFdKSwN6tNnrC6RWGSQh7P8ckdnjvErghFpk5t591Fo8uqK9i8CGL9Z8Rju5pHm",
  "key15": "4ZBEWCmHbCHawFSCdZdy2azxwa9htvD42cyjK4bFY7K2UCT6dvWa3TGXCRc9CWgEwEZC6LJDLP59d6CSFc9Vem4m",
  "key16": "3aoz65hdjx29dtc21eTYaBYyRZ2kQ4ir7w2tq8RYtUuxFJ6TLAqRDzQWzpRC9bBPCBUK8ZWjJyi9b8LdfX6BwPvC",
  "key17": "8j6vq15wkyLRFLdsKgtic7JyvP9NFMiVxwJqBAUXhVrc2fHqsss1oswksYqw3D5aGbwR8U556iLGuuuShRzhate",
  "key18": "fxJeUbRwdbwa334EgR12o8C8aHGoG5mPJbxhbmCs2KzwtjS2ZqZDUGFsCSbuB6LNuSftJq71X2hbgKKCjZ52ZDB",
  "key19": "24cuv5VEzCpEAih8cA7Agje4WzK4YXGcY51XiyBFmtkKKt627Pz88QPsf97njeiEn9Q8h7eVyfmuHHwdokgUojfL",
  "key20": "4QFVzqgD6rwmkqejc9rAQrge5YyaE9AyWiabVE1BTR41AVSLBDHN2h69cdtyR2jXTSMNixYPKVBeZgu1m2wJZH3k",
  "key21": "6S99AuG2uJKLtpnCHmiiLPqYf2szmpBThBh7HnGESrff5UrdouVpxAKi9gZ6FQAGF7FbynYtmPpY4jcWWZsjnbn",
  "key22": "2j74u6kS29UX3j43JdqKeKCrJL4UYzHjBgJpVNSxGi1NRr7BMLnxS16M25UvUsuKDF22r1bqDBrh2hc72kB7SXLB",
  "key23": "326yjR8FyK16t4JeZxrpK23pthfZeqEyZ4oZaJXCrXmTwxCzHRwiNCxHYfH7CknrLZ6WSdRW4pRDN1gAo9mgTQ2S",
  "key24": "29ockcmpPHTAWyhkpMY1xkFrtgQ9XLAmXwssxmQMF2owbgFq3fpjVv1nZ1LjAN8pm4woe47syg5iokvhpbtsaLCC",
  "key25": "38H1kpXy5qrkqZFNx9T1uWwZcaU5rZUjviiNNMni7bpxgez5w7yv1JVgzyqaqxX5c6QDpXmXRmjJT4QHr9NuWfxH",
  "key26": "537x45Ux3vhLdsSoywfi8C4LuVg8DVuZAt8LDmJZhaD9zjcJcwQTkoWRJ7GGcEzXRMAEko2bE8MqBmw3DjoyhJ1M",
  "key27": "35kPsHJP55nqcBjA1TJEBNgx5GP3WAgiSPzixjxcTXf34UfjEBfLjeh1E7fmSxEm3UyKAtPucgpCKqU7FnVv92dD",
  "key28": "rbjEkFUBXp7Y9aPc3p2UtCuLqX3D1AzBhfHiN5M7LyEpiwYVYjCsLRw4dZccrstNVEzaHLCvxbQ1GiXcBne9hUu",
  "key29": "5Tz2BU6aHSvBrVhMoAwEnLrH6Rpp32mRxGJ6YeFnccMordv7tBdVtdEbWCrfcWqwqDme6uhpUrXv19ofAXeSsuZg",
  "key30": "332YyKz5bLtsVYpTbWYzLVSMH7mRHZRDHRi9kGeEVacDGXMucZkMfxCbGfKNDmfDcPpNhFabmTVfFgdGKbo1JedR",
  "key31": "4Zaqm9cJfuZAahfTA1SEeF1fRanex3g4oxaZ5gEoiQbvE8BmJMPX1pTmDLxa6Ad5JHmBr9yBuzRcknjP58HSfhDy",
  "key32": "B6KJKakkSg8b2rU5wHZnx2Hhjob9Qxm6PhnbZ6yfYyK9sGndkKorpD1zVEpn2NBC4XYMXz6KfL6kq1BBZwFjUHM",
  "key33": "29R1ApzoydoCJEvi5ah15xh3WYBrhv4Q5wdGmUa8CPimcGK5vCUZeg6XgzfjXqnjgM5Eg4JcU9m9jCdcFDgn2FUq",
  "key34": "3ck8e8q3XVd7aru8pc763YZR7ZevAqoQ2uFoE3fUFSyPGj8KJFN6b9SmuqDzG7RmeWiBE6jox4cph8jvqG3hVe9u",
  "key35": "5W2VJepmMCDwBjzfuYFyvCisa7q4hVr8i94rRsa2v7En7hxz6Rq97R24f73ZmUV5GD7aM4PRKsTNS9UoeTU7bcm1",
  "key36": "3WBwXeRtvcXMxn1ud91UHVYeHhmDdWxoT6YCHGnHM99e6Q31uBLnNvaaX9n7WjHTz46RjESVfiGc5ERdTxejXWsU",
  "key37": "5TrDW1DkAQab2yJzC6eqdPmVSf5R3rv39z5kJzMhrbdkYeCh8iySNGMXqKHJ2FyEzwrRMUg5Yp3CK2HWSpEjwhE",
  "key38": "45KN4JSjk1kziN7p9DggXsjLJKhDqyerK5dxS5cpYzJCh7nG5yAKX2xjuLn4wLgRzMf9bnKVdFaycTngxatiVgCR",
  "key39": "5szSvWLr3hGQmJHztAZbtqnruWbuJbABwifuNzS52sgb13NErZmc2pL53KWxMFLQd6AQVhaW3kGKGCRR3CsKcgkc",
  "key40": "2bCtecS7paBsSY5s9dNBE19mQBYJnpyta3uX2aZen8BxqxiWg3xk7RM1kYtMVgJiqrHXxTu3qTtfN7CEQ6pKqf1d",
  "key41": "3D8sWx7o5EBQuMbjZrM8k7XMDvehtx7km7848E7XMJSeHtS5pgGTAyAWNs8vh2gBFUUVBMMg6pQKZCiUb9qACEqv",
  "key42": "5tUbigwP4GrMZFSioKhyVDUoRsYTx4TUf1xCjYGkBHdRScnjASuE1cj91pafbbKNKeBaN56Roh5E1pEgwEYRBCRc",
  "key43": "njXoRSJbvm6v3oqToryXmRADRdJ8d6ZdBzDXMB1i8ScWH8ADzCi1n16H7fK7bJaP9UBdS2Vs1LjZZsEFQHErsAb"
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
