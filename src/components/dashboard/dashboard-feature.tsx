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
    "5e2J4v7Ho38zufGY9EFb9FiTTdxur58WL397Tkk1yE7NcdqvLpg1q5iNLJDyVXuNNq6sYF3pd6RK5BCZ5naqza6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdKncVFc73cqotssQTrfHw9jZmmqvqmxs4eg7ax3d5vZWRZ5KLapF9w9rRcUCdSY6EbCB9HkXw7e6kgtBFBGww9",
  "key1": "3H27hixEVaCUNvMCAZ1tmFA7yjydDSWpRgq2ponzXLy8A1ZnXBBW2ipqvLzFdMdyQLfzsgmFuhSaco1QwjFNwgWA",
  "key2": "35LcgdTzydxazvrF5r4DgcieSENqVTBD6AzYaSUfYCSfRAUVWLLMSgUcrrqqLNnbVPfpFkdNBZjMEgJ4VdiNhuf5",
  "key3": "5mMEg5eBQRX2PsCgnGraXu9i8NtYcQJyhNAzP9jfoX4v6woLVxmr8CYkm5rEN2hJ7KBqvp1ieqD4LVEDuct3fbXo",
  "key4": "W1rJ3Woi1m1dMuwVJJgTywwy2Ke3R2vvnZvU1Rb2YJFBroE45Kd53Fr1foczAbQhGoquX73mrid42QVJVYFhWrg",
  "key5": "2NT1RFcnY9Z9jf84FBvqaRch8D19ibrUQcrnWxPpntYGsW9R65RbvBmzQE3eRgFGBu7VB1BMxhMS2C3NeLrgFpqU",
  "key6": "5iNXYJhBrwAUdfCtBaE19RWrqppnidzm8E5Y5YVKdxFmtYjGrgujykkj1jJFRhXZBAGhwu27z1VLLkfXxkqzVUxa",
  "key7": "2J4w3saroXDucMhPwA3rRF7WnQAbfSJWrsknucaDV7R6oYxy5GwxQNzsdz43JMBfBUATALCPNDq8Msa4ewJ6Ynnw",
  "key8": "38q7YDMB53wnWnfbRJuvnqpjQv9PjetqPEZrSuJZYPBvhZfMc3FinyYAGC9hx4P7AhKdgFe9Y36AxnYFz5detAG6",
  "key9": "5b4NgFGKJdVe9whVXMbUin3YK4abWmbTYPjuWW52Aem4SuQKKP186MHwv7AaoPBbok8f4gsi66DmKKcA4gbHxExV",
  "key10": "2s73X6gFerdSfzgKGojATyZ23z13v38jpB6m3NN7UsBmqeWA3qrwtzW1AExaAGB5D431bJqvah2K9rBUWDDUponi",
  "key11": "4xi8iyZcRmgcAzzjKtASQZBJfqBaA2UYkyhSmuNNoKZrxqHXMJAyoCywHLwkFpmpnc6SMMRP87XaWr43YnsoBEw2",
  "key12": "3f4k14Tqx2nuDSQLGJE3U9n6avAGZPaWGYHmzWD7SFHfp1ip1D6rpkZtT6EVX5QwYVwFjGioX87ZUENHhQB933me",
  "key13": "4RR3zah3KQTj8TQJmd8MnQkecWbKjKx3puFPChWCDPi4SuTdLHy3tx2a86k8TsJ9TqxHRKWehskzXKMhM6V2jBtY",
  "key14": "51ojaAemmiA57cnCUMfUtc82cuXS48rdAMuojQpMkrJQh9F9qo9PaparGizAYdqnwCXT1nZbV4TdvVRG2JJrFt1e",
  "key15": "3Fiz3LjnZ7G9BMhTSkqy6DCjsVi2w8S1KZdcqk9graLG76AXwrsfu3frHppzydx17DxePZaNwmxtHmjWvW25J1sw",
  "key16": "63uLWc2SnZ3A2rFV9Jjtww5VMTTz47JgdepTWz8nHtw6YdnojXA7QZ5EXW4xKPgtwbsKHzaEujAchJv9nWUUW9zn",
  "key17": "5EFrbjcSPs5PuH9RsAKvzo1xWa7Hq23aZQSH5LfFK34tWoXxvkqWSHWkiArTV8kMNZvXnQu16x6PgZ1yi3cmh459",
  "key18": "2vvx3kGrvpKXNdcyVmxkCmMBboofYEPgeb966ho8RSFcAJLEKLo7xc4oHnTfZKGL1cMx9a4rNDseaBp5K4UmZcGt",
  "key19": "2bJVSQLQPfC3ae2q6sHumGqALPAQRnKEvHvUeStwP8v8VYMtzEiqaV68dDE3frHFvR6Na83NQk144TjWGvywpQ2u",
  "key20": "2MUxPhneaNUQ94oFGGgDH9ZE1918Yt3gzYLxCKikY2pDGMtoCiLeDXhsb3QLUy7P9BMMJzALnXfU541NXULQMkC8",
  "key21": "4oDBs6M8DkCXQYDPhcTsvs38QvmDHNKaLDYYaezjTjK8piLG14BsGx3XenfDwq9cun8cRUvuc6AyQNtFCFYqKqrA",
  "key22": "5gbuRmtTJ6xaNofacRJqaFNh7gT8ge2uvbnTDMoAbV9EwToeYuQXRgHkUguS6tJvhC7UJVsPALWrMhFVQ5HsAG6r",
  "key23": "4DJYftesio2p4u9CxBABJojdceZjFrsTMQpJ3nJYGuSXcewN2azUSmC7MNy32Wr1HfmQsjuQcJktfP378UhguKsy",
  "key24": "2uhLthBjpW9Q6PJ4UuCuNKTV5QwVJKcisq9i8uYFEYMWtTrTMP5JVDyWowCYZAWtfEKAhnCaQXzwXDHc5bHpNHjr",
  "key25": "3DiSPd51wi9DWFAdyg31EDDzF8Emuh11nnQnpCPH7xqQECfUnckxgv6CwX6nNNP96rqisSiXU5GpNLKZL4TZwqzb",
  "key26": "FAj8dUue2fCGURNHQCet2J6sYnTW8XuBMJFdc243nANZkdppTvNf1DjXaiHtGCYufTeEAtTE2VsFfJv1Mru1Ry6",
  "key27": "KfLt3e9EWA7U9aCe2xY5oC1Sv1E1B4hgt1WU5sf1cPReNH2h2NQmVCZXSUqMQgnQf7xNtdQMAoPe9Wvgb779HAA",
  "key28": "3iNHMwL3ifUsTG8M1cajxzQXtqYTP12xM9r15sT3uiYeBiyCSyKczsjDw4R83F36iu8xHi7as5qfShmerDZ59jJm",
  "key29": "2acjdNsmaSEj7dohFXWtWLnDcx3pSxTyD4MB5AHAb23qRZCeNYMUhSzwGPKzkpQvs7Z2oSfHx6TRw88ZfegWDa7i",
  "key30": "2e62u2VZpThi2hVnivH4sqQb3vYHySaT9BfG3TXyDBnYxxZjDjERHd9DHJhbHDVyTnHvX2oPhx4ELm6Lx63YLv61",
  "key31": "4Px4uXzYYeFt9rybMLDMcnk2VwHowHtFNSuod7jnr3z7F6djtqufh1UGYGCc24YSFB4w86Sf11SA7CdWVnbUxiMv",
  "key32": "25dW1nZkFPie4nH3jKtiPDQouwqmtbTTnqWszuYgjn9gQAT8er2wjBv4fjNbC6FtiRFeWy96RDa5xchWDcBLh6kh",
  "key33": "kcmVw4ot6ds2Fqgn2qrq7o7vpSqvu9W1jaoPjAExxBq65aCKPhAszWhEhGhyWkVHfzcUDkjxyKPvagbZAWHMda7",
  "key34": "3ar6RTFYPSpQEfBrKRXGeFr7GCnmVngyytzzcJ1Eyc6GvJtJreb2bEYfiXdFFz1We9cMUVDJTwzVCRyU7MQUCCkw",
  "key35": "271TrVfRiCj3obzrwC3A6oL4tZyvS77t3ueYStmWdVRZCQm5nuytVayhURoNhKdh5K5KoLmF17X1P8ZMpDy1C6FB",
  "key36": "5jjhjcc4roe2BB13ZhNcNkWexpuSSjGJ8ZbQANggUcTVCCcvJUV9rF24oUxqKhqFeeAqMLy1QLX4iYQjJjWebWzj",
  "key37": "MNVPxotz8RinxGGynMakas35YLXZoabGwUhVBTeb1aHikCXVfvVPTQpL3AZRNcHEUHb2QMNZbAmewibuUm6w4Wv",
  "key38": "KLVueuc6MkQiXwKV3rrX7mtkt8eJssdSfv33nB3CL6xZtepMNPjJ7mWcbx1Zg1P6ifsRXBGF51nq31dFHqNxQ4T",
  "key39": "33BqaJG2eoECJCPQPjihB9rFfxtBAhZkVGGnTa5J6VEAmSF98UEHnwyaLyEb4yraP6dZ87r7roov9c6fv6cNnTaj",
  "key40": "5bEiWXdzwY52wSuMexESiSQCCBcuRHnbSds1MKoNmHKy3HFMjcBKPsbcWmk2GdfkkfWPHkPkdsK1fDAb5Pjo5bP",
  "key41": "62omiVkDgjB54V6iK3R6LXDwrbXmTwan6qm17ktw1uGvkBkKEgHZkzqMJD7L6zt2gBqCNXJGmXMKeGynvaJjR4aH",
  "key42": "54k22aWwyEBsh3ThJxPafsW6AAn51yCJE45LxneGn7hcaQnKHGB89op4B9mZjVVYncvAUBHEptzWzcXoz6Hd7zsy",
  "key43": "AqH4411Yvq9sp5r5cwMGjVyMPxteqU5QmYAxmZm8KixGVHAXEPEsrqfEaavEJxU4FifM8r1NVCkiFNQkcWV5bhQ"
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
