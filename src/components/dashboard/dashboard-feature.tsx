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
    "2zmskFAGpWQo1fVBj6pijC1QMjwJESt1iCdGv3TRqAhTMj2r2knCoJaQijLEudcgNB7VJNiuG2bbJaSFJFVn33DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvxKap3F7vYPg4StTf5snVvPBjYxrdsQ1Pi7oQVwFEmgUuo3s1jKd7Zy6RgCrUaPtReEkqJfPzSy5E8dD1r1VR5",
  "key1": "5gQBGycoN8yAQqXKGmuupbnorN4xzc6uqyDiqUHNbNj8vVXJAy5RYRSfnvpTBitnqfUPKL5qkRqLs1bsa4GjN7EN",
  "key2": "25WkoHC6pdRszFcvwWhe6r7XSWBJuawTP237aP4adrSAodLBYBfX4PjnMb24VhsqPzV3kDq5UmXDSNLJvcRCcPZS",
  "key3": "2SQeSSr8mG6k6qpA9q3YHnXAF7XDRifnHfjGroaPShHDneVSzHz48oD9bxw3zH915WzoRm7PUCmR2bpBJKMLqifN",
  "key4": "2oXKQbF32mw3etAQXeinGgYYrzJhS77cmDeRK8TvcYhqXBwBcAJFxUwgTWyZGn8wUY5gGNNn9UZ4jLNwY4ZecqoM",
  "key5": "JVrjtqD2JwSQzVncZavpHyW6rtsZRHnniotPemXyRsx89k8uYra7NcBAAAYKLkt6ddwBjynNkM2iHfJWgtdeDZY",
  "key6": "4qMMbTC26Dcp7HjB9Dmch5HqY3pY9SyeZugSgRbLKgj7ELEfwecFpcesXbXTGwMq82s4tRkLtsRhs8cWwU3XBdXX",
  "key7": "3MUxWSSekQnATEHq87wKsZQeNbvMMu2ErLBvH2pyF1jvA1hEKDENBNognJLKxgpyQeVaZej5wGDLwtxhLwiyRuVQ",
  "key8": "3oorJgyuQDEU6WEgSVTaKmJfzMzHSXwpVxNnBH4Kj8EiKRsLDECohkDtpou6G2EQ3yvc4THGX86FTEnQYwNHGoSh",
  "key9": "431KrCmPYvK8iBkzV7PUqTXY8s5pbnwq18Rs6RQ4TdKXzJEuc62RPeZscSBFQDUCxYPaX95KhwK99yMYg8caAAP1",
  "key10": "5xdvt9NY9zMJfgjh2DcQeLeTtSv1qyfnA22pQoUkherBApC7sHBvZuj99EEruBYqgqt8oUVip6ys4nZUGCWDxYyx",
  "key11": "2L61xpNyr3767XvpoPhkGv3A2FHePdHCQzNGzrU3NwvLL1J6g4VZQwwbvWJLKHT2XhHfMpb3jjQjKtd3XQSVJbH7",
  "key12": "46y95eMEQcjQVkQsV8knGJKyf3pJRWVfkXTUkRkWyVKFs4rDLZDrzscsM43yUbHybYqxdnZc7hhEqcwE3Mkdq1bX",
  "key13": "Yjr5jj9fTY1jupXhrAkHQJYfAQstvjqpmYGXKt2Bsm4XDRawXTtdtwYxP3mF1mH82x6thEQJog4o8M6iVXHpceY",
  "key14": "4tYTXsrf5RdFpSdcEU1afgoC55MMzCCudstKwaVn4VDN3hEtNUBGSsgWPPEsaWsWyfKn6MX1FFQmwx4yXEraTziR",
  "key15": "povxLuwRcy2X3gxQLmcRvfCswLy4SgymaVkeeWRBtaYhrRv56YcfK5Mi5Ss7Wp5fbGuc5QzftZdTRG1MjZ6GjVP",
  "key16": "35qC16HFxwbDvMRfKX37214qZSBkpzkVtwxe3ZpEdDchHghiVH1ASBRw7cHEmT9d9eBw9uPKLKYj7GgScarrhfhw",
  "key17": "2nGEEY1wWiDokbRcr1NaG5th1NWajWpLfBYFuDjGagb2J4Fu4KC8bx9gQX3o9xBLbnP9r13bR7dykQ7QNoPFYzSc",
  "key18": "4ACTh8SuteWF47hdQPKz5MbrMoAPy8eEp2hJqcipzgHnoYZVazU6wHUuKenykDapQF7Mfn1yAUZZSqyT88b2SimZ",
  "key19": "4v9TQ555ZNVUu6wYNnQgeiQyv7SSiSBshnRS8Xm1d8i14m7hRCx8A4TvoJqZax8VCvNErs4BFfGSzjJ4iubEYgTJ",
  "key20": "2iXpZyzd6Q9isz5tT66rfBgtk6ZUoj3edZqrDZVhKXhQQ3cKwNzFPE2bHrSfsycCkSAktVisBk29fkNyq7XC9YDD",
  "key21": "2iUhKT4pSTbcDxMCzYPGFPcpryn6wGGkFWXHRk6zV6Dtq9LKZPaUQyXeotif3ndzPMmQjAUMDVNGLGbFPiH3t7yg",
  "key22": "EcKqYjGtT6mRLkhzFczqVnayY25XzN5FiCicm12QBzHzgdaiFt45g9MhyJorHiR2B4Wd9iedqRNjovw4TLghtFK",
  "key23": "2gqFCUp6iqB5Ec2aDikzeQwYR8jQxLsLnmmGPedfY3Wy4kaiJo5UUm56Bn2ZSNdTMWANfVxtjsKVdXi7JCd8yzAK",
  "key24": "2qqYUtnqzLRQp6NR818dgmbopLwaKebsun5LDVDSrsy42LPhXos88nccVMDsz1ucmjSmEPYwYvimYJzjqo4Laz9n",
  "key25": "53soEEwb7UoVcLPh95Mf5HanqQ4tPU29dLfHJQyesG56PYQfDFLBqGFz8fEmD7NvQjBKcKxYM4Yky2HQNxzvWL6W",
  "key26": "2B8XqANZnp5QXYEboHLSQ6mWTYM4yjbpA4MWo86A8dZAFkDSEXujmBwBGXBnYEaiedZPjJE9kZ3adeTQ22zc7J72",
  "key27": "3tsSpyZwP7MY2NWAx9SEHN35tRTbw4GFALrkpkoSTYty3DgC6vQYKeGgY6WrTfPcwvfc2RFooTmDvScfEzBi981a",
  "key28": "287DWdNEzVfaUT1tkjPzsJaj1WhMwLBNdbeQNtdrFFifGrakaemRcagSoUXy4mbnEeue6HrsPStDYCdjfXM9i7JT",
  "key29": "4V8CReTkSuZ9Jzpo81XnC7NPTpxUM1N5rcmcCwAkGoUkAjUPePNTdBtmuJeoFXSF7qHaiqDPhPK9dcpQQzMQW91E",
  "key30": "5iGWCPUBHYF1ku28Et3JUCUQqPChzhUCAR8hUHkPQtnCdZe7uv8fvcVdPeVCKaxbkqNz8mWBxe6iDyg7oPDHdrkA",
  "key31": "5pCWcLKQCSKDAUtWNt1pT9zeWTevm451i6sDJSKue4t1LSzKN7YjC8B9fg7nVrL4MhC44Dq3f9CtjY2zgBvadpS6",
  "key32": "348oKaCBucUHHG9hVEdJXvTmUwzue4Aw9Y8DXLNU6j9DGTg4Se5UeA9U9QDUuXXnSigDj8tkxygNbK54XyHf1Gh5",
  "key33": "4R21RJ9yUE7a4SxQsHfJqWSjzFgBEB7EBbfELw3REVT7rDtfLbi2aY3xzYXr1qSAEBueZAc2P6jTZZazdgaFj21P",
  "key34": "26W3g54KkAvQVQrC1XJjCrcjF3FX9BJVaQBZWB12nyjBndkx3zqTQfUkF9PzAFZ2fC7cr6neP4WPHBzT5mkiC62H",
  "key35": "3LLyaHvKD7ALtcDuodoQtdqxtVsE52W5ZWRidy7vASnqqX1bqbRtb9vpD23Nmwr9T3R85ScF29Vq8StnXAAJ5w88",
  "key36": "3CKehuKmUGicGhVS8EvSp8NRPxwZp2XZNLkfSnRghqqLE8ZZNqYqGBEVwSLw9YNzAZduKMifN1aK7HMNe45mSsLP",
  "key37": "4ADWFvEPMRbyzMiXqDDykkyhPGzUWZM1yrcHQYPzrHpvbtieq6fzy7BkHaXcVPXpQcf4S4wPfiK3WDiJxoGtDyZX",
  "key38": "3HWoUKgJWq8vYLgiUNWfhVQo3WyPLkBK469cwowdXbXxksQzsWaj2TDgU4X1TYmSURKddiUm1oubgPdZXPsZfqMt",
  "key39": "4TSHnP8stMZvN1urCHg7FUhLx1HStW1ZCCwbuVy7Fc6rUusTJPn3YVR3JYMF6zpPAUGXXbqZNQv2EfGwrruA2arb",
  "key40": "n9LuzLV9cn1ekYoFnYHHCmabeTLFaJpXwuiewzADc42EmmszSs7p5BV4HwDMaamMLMSzqTRqodNhZ9mRKFjSQuy",
  "key41": "28Puv9oy7DtzArxYw58m8T75tpiN9Hq933YCu2DoEpiHchiZ5dgcxaT3PN5mSEc6C4FSE7TcbJs6r7bsjk9io7WQ",
  "key42": "yU9NejHJJVMLg2atp9cbMHH9S6WsED8Wtyz4QwnaWmhx6vie8eGdDiCgYrH8gfdjZfJXH8v16RAFDVD7pdRyyE4",
  "key43": "5hS5VDvyFNQcA2REVxzaGMPinoNk16ppkZoWvzgTeqZMJYT9qpLdxzDPbfBiMvFYDdZ65rTuVwbEutZudGRNbgdD",
  "key44": "2eY14DztKstWKh6BfRu41FXZEDZuttjT4eX5XKmWXfdFLw7YqTZBit3YBgxCHSKDVqmM88qmpCM34BPzC4hfR9KN",
  "key45": "2vqqQZTcstgm4HyBzTxSPZW1MMikcz6UetZjAgoem71wvRmjPUTxBpTPHDL1bFv4BfCPxctGBzqKFAXBgCHVu8DE",
  "key46": "3Ey5Usfctp684gpLk3bQEZAiM57yK3xAbCT7BhTbFibq9wxDQyqorc1kABbqHfFfHPueQ4QYmAZWHnAVRr5ZBudW",
  "key47": "4HJNpi7MrfVvKdGootMvcYN4t3wPJQPfGZpqK8VUoC9hFTkd2LHqwjZg59GXSJ4aNRTpWkGvePgQxCJs1y7qF6DQ",
  "key48": "2FEQ1APr9gFxrvgDStPoPHEdoL7TaGeDvpu2FQsfDvHXqSfrSgTtVU2t7Wd6AgHTsnLpwisdvYnKjx3wM4s7NaHh"
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
