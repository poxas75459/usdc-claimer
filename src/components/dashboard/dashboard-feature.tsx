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
    "5CKMh4WgmXg4EVDASzaJsAfwAv2SMhKh7asfE3ztPxh8PK6HnTEM3xuZN5MjDpB765XyqZHrjtQHXSG2S1YUWazm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uskoXZBd6R9nPBAhQcPJKD2WG6wojD9u2R5SLcXKChfdepaKYDcdWEBJJVBmTSjcCTg7FcgUekzsfvfTRPhY7oB",
  "key1": "3M7bLpu2mPuRmdFMuFQeWhuAXgfakRT1M225ESbB5gQwQtKUANWeEQWRnKruztPeoRf5m84MdxfJM219bHWbG59Y",
  "key2": "5tDV7LeYdsbNQKi7HViChnTjSqnAxLCCjVcT4q4TaknCcxUWDVqLQgZnWdwXm2q2x6cLe5AwtLnr3KWCvNhaBi3n",
  "key3": "4z5MNLGiubHWQDyovv81uZoXdwFxtpgVsrLHaprMFAExAnae9WL3mtugthRVfPKhMoNRNAGdgshyiuAH7QeKuf6J",
  "key4": "35BWmZmxUDaoabVomNvaQWBMXUHXCUCeKRA9nytQgBwkNbFRKURNiLPdtQFgR8ySwvAhLxJP35j5otuehMwSxRat",
  "key5": "6Qd7zbhgR5ia6irUeDFScAsdv3ECAyMLE6BupPpUEkDo9SSm331t4Y74BASnsEMUQz8gnKBhC3bpVnhmRT8M6yz",
  "key6": "XWXwdCbyCtF5AZZ1qQewBBpoLBEFWKx9ADiwaAKEYrcpPDYqUPrMGFKra9EYEYNr8uDeJULQkc4tcpawy2iafDx",
  "key7": "22NLv1bNJm8UQVunqjpvvvLVCZjnToJQPbvg2peUx1FiX8tiss1ZUNbKvF9oHnHCt3en23dDvVFk1QD5sxyyWDGk",
  "key8": "5iZriNct9GkKS7BtmizHwKb43ZTgzMMTfKt6zmAo7nF7A7QhmNAQM41EE5yWXcMTvepPL1wkzGzHRct52LCUzQ8G",
  "key9": "2h512j7aN6uY43mgfPGAMppqJ3nZvkGYP1T9U8rDMPbx1RHfhsz99shVuTPtLvpi4WNkwv7K7Ebxf71JFqEwFZi4",
  "key10": "35UkCeWmeM33ZWaDYPFBM7rYnzbamz2xt5ca66TsPamzZtLyTAuZsoaodofaCBCEHTGGnPAKnsHmQ34YJt6ftSDm",
  "key11": "VKhmDc5uo3HLxrpitCuBysdGcv2gmmVTaN96wx8GYCa1QAwPxi9BPT3Z8cEBYWQiLCLCyi7YuFjYV99Yk7iovYV",
  "key12": "4C7m4JZEZyqp6UQ2uT3wxyJwpPV23r4TT6qhprnrq24278w7FHNSjw4NerCXynxAGfcorcDeZ9nmbp6qi9Yjq3u8",
  "key13": "4g5PqixmNqHWGM3k5QZnQ9XeLcytinyApD7jL6VrK6M1Skbc7wbw8TdDEaxSduUK5Bh41CY5jbWLGrESP2XHom4G",
  "key14": "nfjxUSdS2EQ4jVcFqpSXp9XAovmNkqrrDnSWS3cmSCoydqzq5nkFYSyKWbLwkhUugFLn7sPdkee1q7NmtBZ2GJG",
  "key15": "Q5QcrcsvgWj3ZWvHZyq7UoufqbcCLojwayPcUNaVFXh1TJG2tc1GuwTJF3PGjmSHvYNcg3YiWKpbZVmjwB7sSv6",
  "key16": "3nRSrex4Jdedbhhj7AafvNkonNP1FSdVzrxDD6LeYxZBgJXZetnFyHpQomq8TkVEV3jywwNL2MWL4kwLFXHHaKFP",
  "key17": "2f6PLunhzHgKWz4h9oNLYNJVhv4dovY4CuaH7973uf4gQ92c8CEDmt5oUfjvRWD44LrZwvbDTeHkFG281dwWe4Lu",
  "key18": "5Smecpactvo7ZC6LmQ9L3ujBZg2iuZF8fkMMS4at2tc9LRfwni6NYSbViY21Fu2wAtR9zvSU6ib5tX2YS5rgRSgw",
  "key19": "2Cuf8LChRsJYFv2WNgWSxB9sBn3eJfTstY8pNWNzDU1J9Pvy3AyaZc26hmU5Z7szpuAteeDr9RncE5dY7kTuY532",
  "key20": "4D8x8rmmWi8W67Q5zpA53sZSPeBfyLxPbNdaJ44rzc4VY35UkHn6ftEhBqKHUjrgqjXDVqqYi1X7hT46WqvoWkzx",
  "key21": "2tHoxxnk3T4xXjWcze5SmzXRfb28YzdofK6ELcWGPqEXUjzWfPpDnpyc62q7ERTBfgmHWXwy9yJ2KLpDhEtGBY5e",
  "key22": "3qMCHE9Fq6g7V9LLmER9KWrwFPgbSV2JeQsFroxuw31aHsWnnk7brmfsxiLMnkPQttKq6qfYMftFkQsoijDWWf1e",
  "key23": "2GzJ59yZxhyUffPRwuD8NS62BS6HrefmFAGHTL8hgWfn35FMTrFt5t27ZZM5yYgn9SVHVN47eF8zPYXFKe54fVeL",
  "key24": "mQNZk5Nuy2mYQHmh8trrZccwpY2h8ibqP19XcRwLkon1E6riUW3LcM8jTiz93JYoXH7GRrR67cUVTLNzYAh1Uu6",
  "key25": "2xH653Khm8BrdTGQ2XGgZcGtkBkSrwYeSHM4HTkYfqrmxDW3TfJAX2fPxaEhDUwRt2bvWZJP1sHcSKJdNJdaPZ3i",
  "key26": "4GhSa8Qqgi6fx5A2KziZRvtG7HZ8edz41L4BJ4UCJdpFfZJoySTtxyU7Qonz8wPKvxs4jqA1vBuY1uZREmoSCNDk",
  "key27": "675DqjsdqX9oSn7owY5q9mzVmSsyctHcdx5L5V5nbLY4EW14NNmdpsr3dphSzRr891y95m8RNdy76e41nybdstUL",
  "key28": "4LtfSzM8BaAmHokifRGK42GtGxKGoMCZi1oMVCtNyeMWtydYn6JvuYP6auR2AznUwdJD9PLqQ8hJeQ1Kd1MwwPRD",
  "key29": "24rttqZyTyFs3FdXuSVjRsp6rjT5EUVUrsGb2cTSMDihGBx3ma1u2wKKHbWMAKAN2aJyjWHuj6ZhGg2f9iFGEwgL",
  "key30": "67Cucv4vjh5dwYWzDUKmYrjpEqLDK5Nfv9gyo5W3NmbFBKnK69AGNE6Gg2kYCRiREqwdGUJpSJFFeXBt5nGdEvdd",
  "key31": "3ZMhLWgD4ASGDJtYXiAQcnHYvmgH1apjb3d2WQYknCNGjRB7ansnqnrKrdbBdn17kpRfa4k3bB9pHuhYbxpSHzWC",
  "key32": "5KKWxJDBf4KrkfMJV8SKG5SGzW5Fb7WsMrsf7ugDRcR8QdFUHWvkiJ6A8SwCmTWd7GXPDN4jZHMWkv8DRwQTBkCn",
  "key33": "2drAULC3q2AhKtNZHwVRQ15i64PecerP4ApRLuqWusZDMtiqWTmdkBTmodgjrpsgySREuMDgSkCqbARGMVhrnKb",
  "key34": "4rdQNGMm2vyEy9fkZmbcLFC2qJXTfoWVRtW5bPfqdu6d2d2Ja5D7FtJq5eYWskAo3C6DbEM1ydB6bZoRHnsxHFS3",
  "key35": "3acVk6tjr1fqL7a6cbB7KRkfY4FifUcEsZnVuVMxg1uZeHu6xfKjo5FUEVkRd5gXDwAsjMbR5s8Urmxtp35M5MsJ",
  "key36": "3FXjj9inwCsfdVvrw7jKLbs4iS6ZXg8e9GcL9q6dU1EUWeC7KSUjwrTv2853zQUapi5To1wHEzVNYFhHbEwhkN5w",
  "key37": "BuSmqbg2rH3qkWzeyPAScD4Twn5tyXBpbGoiD2vuquXJvPp6ig56vpQLvqJ8ENdB25XTz16f5FirMf944obajuQ",
  "key38": "5NRQM1bGU9GPSzLk1r3FvEcxiRFj1K3dxcPrEeLnwrxC7J5ZvDADdYL4PvFg8f9raStSm3g8ZCFwkEDvEwxxUN3x",
  "key39": "5R9CSRAP5ruvMTFYssWwZc6dCQ887KCFGbJDwpFXs42HaZoZuzHSAgXvZSA3Bo1Egdjshoz8JrWAuGL8UMjgbLFD",
  "key40": "2pDRRVCsWaMaS6qTcpTJvQUokJBPdB6QPQKpYs6YTraCsXpLo5regYC5VvE8LmpNPHFtN23cQ3G6hcMjngbybYPJ",
  "key41": "3AfE5A5z5Xd6DAGKRFYJ5HfBTEACKhi9Fz4oxPTMyjzWzjMRQC4KkVATmVvuqaHg4P7LSApySHS3yKrNASBqKT61",
  "key42": "4mtaBxdTT14ecxoFFRB4gXTT68b7LWteDSVLPr7y5wUgaAXYoRw95mopEN6XbKt4qbKze3EXxjH8jvS97Rj6A8mx",
  "key43": "D87enVfcJBGkxrihXW3YMx27kY8mRFcXo1DgENXyX55cuiZu49LnN3Vct3Mrqboz1pUQc5gNmn57JJNfNpkP9En",
  "key44": "2vEdnAbBFVqLvd8SE5jioEAjckN3uL5sdpaXbKv2T4SyUVb4acbiP1uPQsKcjTLnqSwsyXpUjFPk6zvjwasGktMV",
  "key45": "2A3kP9nzuGWFjrU8icCmAGtc3AjDPhYiFHypARM6ChxyVcwCL5Cjfgd8FPa9n7LWahvCW3TTXmPdkVZodzVtHEVP"
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
