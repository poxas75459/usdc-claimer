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
    "5cwoTioeye3WMirzKMcPDHH1jzDs9hvKUTtpae8PdFzj1sRhGCwbPpVFrSNqX1Niyq8JEnXLyktYGZfe5QSVuDRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kTJxjBMBz1VS4NSJmETKYpji6FSyNtpVkm8iwUsa1YyqxAiYCi393YbBjgcHf6CrrMPWySDP9GiBPCKNm1GJeq5",
  "key1": "3EfqNg5GuAFvrzsfazfQb1ThheNqoos8M1MPjWJiTcBpmMFaubTMzftxsghNzb1KuC96i3pNMqEQqeM7jBw7Ugz8",
  "key2": "4DDN7AKP372gVzdx8sLTVug5MgcwsnDR4PsKHiHGSrCdnV38KuChXXGpYsJabdDdUcsYn6ZCpMXRxawHXnkiX61k",
  "key3": "5FtUNC7FhJvY4AEtzDHpgULJHyqApKoaed8pga4bEaegLiqS7BwEQ6YQ53urJfVz3mcWTFHxWayUfmfeUW526L7t",
  "key4": "4juracTRxh8Hf5tLMHfcR2ufCtZUqt9W5vfBWVjwA2KRJTXRWHffPNwX6fCn6GXKmYoT64v57FWJwVpMakGEPxKj",
  "key5": "4PQAFjj5xcp271tBMN382BnFrDiqA5ndJzCjE3Akhzr8qrw34EKkGCuzKA3DPvZdAzvVufG9K8vx2f51UVPAdgu9",
  "key6": "2rAskHgV2w5uieNvckt8AyaWRpq3KyikVyqkuQLq8VUEHQG8dvqABrJ2T3ExhZEzbaqvgFWVieXK33GfibopiFR7",
  "key7": "4x38wmkxuET7Lfu2NF8F6r81kgX4kDD65xm5jktQ8EVRtZcF9bakLEEQiopURNAcA7zo1UBR4G3UbaLYH9d9btiV",
  "key8": "5g7fbLsJyekeEhNYTpT3c2NnvC8tQvw2nSoqi6beZ7cG2bqxvMDr4s5ij4CAGHFGYvrGbpSwfFariPGuW7AwDApr",
  "key9": "3VHsfs43wj6p96szfQPv8mfzEhCWbr5i2FWk1KHhHRuGNzyg8NnghhDo6UZTyc45JwuKps9tsyME46beaRET3nV2",
  "key10": "4qQ64VnH5bDJU4Cz1d2sec3tqEexR1kKu73PJV96nWYUTNemLzuV4mJrSL7ee8LF8o2KnfcAoQXisM7VFs7vY7ej",
  "key11": "t8ss2bZECLRNWbWAe1csQGuzJQRXgkgLq3Zn1ujPCwhgFsM7N95Rw7xmA57TH67hYRRqfWotJjmANKq4hSEkvfj",
  "key12": "5uJY34GErrUuiMm9WuTiSSCZvnseyGGQf6DQJqxibnHEjdrVacBwQnzWkRajAmxfcCPM4gwxwmorKBHFb4snYV1D",
  "key13": "2Kmqr99LDXAG4KwAJL9QPBuMJaBWdow37bz8Dhnq7Yr2BizihxxDgfWryUP42pz5WgED4J1DiK1jLMrr8DsmvGV",
  "key14": "fqz7gzZw4z9xLgE2XxbiYskK57bYUQcPHb3NvvS69cyT36gWUsy2923Q3bFkAmarmtpXKttaSmKyT1q4mHqJmYP",
  "key15": "31LfAb7Fbbv6rFdT9bUQXuRnotcamPR1RgA3i9uKqSFbZtmUfaqvAVc4BdeeXPeXomxRsHmi4Um2ycfE5TE7pCw5",
  "key16": "uR4NpvYG97tzGEL9biD2VGaurVwHB7xMVENVvGtCYvNai6Re7XVLG6eBUAisvjqYcoeGSWpHXJbrtKprN1bhfrT",
  "key17": "38ePnFq2XeNtZVFp95RjdZ8zaASRMeG4Gy7QwQfeC9pa7ty8KVuGZukFq2VYB6dR5vwpYjXnrpDU7TBt8oniSbLC",
  "key18": "5nAm1Tvw7q6VEaYatrtwgdecvR1LmFxTBp5fMfujcB8desSuAdufeqUv1FNomBt23n2x9P3XeqTv4WjDDZa47bh",
  "key19": "3euyqcufjpAuJVs4doQ6wUyJkefnWcFwb7nzoHM8fFDXUJR8aCewepGYV1LD7nJ9WwDLsr69vg8gssQYYv5jYpA9",
  "key20": "5caBJCLQxjftCyXqJVFKKJDu6xYeFmQYxWrUiWXUDXjm6Ptoeojd6wnwtGgPjAkofSuR25zGByBq6c6LDDF54BSM",
  "key21": "53E62n1ez2vKADVJzMmhHvzWiy2N2gEDqaTfnPiW18UJuazsqTGPe3BiwzE3rKWNX6ddVEzjYEnYauxLoA1aoEov",
  "key22": "3x7QQNU1QJ4qx8SRcQvg7ARgGSaqBcNtxVAckH97zQmDtmqHhXnp9WGUT91d229f2rF3WBDw1pUfdS8JWJRoALvP",
  "key23": "4gjc8ppAmDyLJqMS2JcFTzYLKsXS3RPk5yPoypTymY9DuKBXnjzbFFWREtTeHR3foESk543JuYMjVu4jmy1GGBmj",
  "key24": "4AU7zztbwemi7iUvsjBMJzJRP2g1fA7VBetFjoXab8LVSp1Jozo4UBSLioKdYYkna9NN6mzgfTrCp7Sz7LdY2vbF",
  "key25": "znYzc5wrKSiZwxr9yBpK27rpK8ez8VtRWL78AkJgAxHEZTABge51tUk8Z1X54vrhNxzviZAbrDkzLqNa9nJuSsF",
  "key26": "FVHLQAMGmA8W1jhxARpyurz1jMQAjfmU4y7NJkGvs5t9hYDDSJoCefuMDC14PxnUvfz6CSvYWLQgsmEszvQagCe",
  "key27": "PDGvnrdFtTxfTY213opUHeEGE5rHWhXjutrkMFNxKYML5KW8pfbZpH6XSCvQ8VSNfRzpjQAgEK1VDuDK62ADGSM",
  "key28": "G5zLycc9BSqpiK5FDhWwhNaNXwPuL4EAyMTEwPbsVxYUbKMBFsuYSbsxxn2KRGyknuQ8qTzdjiQoNWWx5C1H3NX",
  "key29": "53yLXmvT8D1xb6c8q5gFgmRuPKWy8m3yarWJHyMeLrCW5kbxzwqt6Jye6PRpX4GEHmLpWET6y9CPPUbBkCuBGWH8",
  "key30": "2zitrUHvGZW2LtwGeR2MVoEg6AHVazBRkkNyfP7sZG4Xrwgx1CJLY8bZiixXcL1XQ9qYX2nJx8rpFTqhCt8jZ8hR",
  "key31": "BHnqW78PPeBmFFVwmC2hxoSU6yCnwspwCSFejX26hif7wJ8d7o6p8yvDn7vJ78M46TFen8CiPd2MJAPvQFjZug8",
  "key32": "42xneZniPy5Kdh5wVb6FwN6fC5zW98GWHoNEXQAewhS3S1yarMMCLNULQYwMFa8bzZvtgKR7nvsD15z9oSYnXXjv",
  "key33": "4xegxQRQWjawe8EoKWp6fA9PGWJr3wWoevmTU21Y6A11ukk7HM7AVQZRdLXHQ1HDg6SqbDogHuDWjAhaaZwWeZXA",
  "key34": "4c7RF4nNukEZ5bYTkLBwf3TK6dN9ws7S8a3iFuf2HzHK7d3R7av9cfw1RwYMvPLcpne9RAkABCkb5SH9j2hhjinW",
  "key35": "2njXFYjMG3GwGhKn75q3afL7vLjgWdF42PEvtt4g3ap3djGWuLCM83StpKRqonZtg6f9SX2UkPdiGFFGQWEXgqpz",
  "key36": "4A6eso2kb7EfxegbDMzerjB81Xu7C3C4qvXQQPnA2Mj6CZbaB1LTXwSkxNA9GNjB2Esmac7n4xW17HquRrsvkwCa",
  "key37": "3m9pL1EGo6XHsW8zEvicxnAcHyCrETESYdmqGgQseGWAkCuJpibdApwhXX8KSCqmNaGw6FYaCFoqLnRHVcDjDHWe",
  "key38": "2i89SeJJXGvSXsuAQQTEvy8wjfPUhfzLpGv4Gn6Ebbi3AHbjBK63b8VT7EtbPhXM4DpUBFvExG7worHUv8XeCu8u",
  "key39": "5LdvsWFaM8pCyc8UYUAgcr71PxiRFFpt32z1oUPyx5xJwVrEQTabDmwRzW1dKMtFhvgVp6pnQFrXim8jDcFQQkoP",
  "key40": "5r2gaggSL5MQuiUgeo5NVmw7gbWvk5rCFLc8dCdCGVKxjYEo7HzLy8RZRFGNpvEzeQfLy8YWZQnzqvED1uYAyCCp",
  "key41": "2tT6j9qaPMQKDZvEmZ17nvByE19ja35gNE8XSWZ2yBpzW1rQ9YNN4YF969KNujHpHoNnMsqdropjU56HqVQCYpC",
  "key42": "XHTfYY4rB6oLpqXAq92K4wwAWCj8iw4oMK7rpFB4G6HJqbz8bYBqNThKGiq2GsBkyHc47wu7GSVw847uoK4N74s",
  "key43": "573PenYvk97zYdN5gX6cv4LJCPqKoZnxN6SqUxKmtADTqFoebZfJsLdBUMjeWCtXrZdrQstYhA9wJ7kmCVmYGWJf",
  "key44": "29b4aYUMWwKfnng4PQwLJ4qKcBJu8793pNvLS4EwVVrUmK6YTiQpEmeRuv6gLrETWD9XEYWKskJdKBXj26E5uicy",
  "key45": "4ueHwGzoUuLQwP7VPncEqrpPNw5dSyJe64NYC3nL9VPJbUbZRdSYksNeSdKzjUBrdPqWb6NSsCbVv6oYKLFq9y62",
  "key46": "3Fw1Z7jwpp7gvRsbEvzGR7mJGJJEYHahk3mZDp32hdhSN7T4K6w5iTUWxXfhRxtjDTvzy8WPEB89puTtMSsySdX9",
  "key47": "vHyWakNMS9M5YNtPs3sahsHHR4cBG4hmuxazMs5xBMR8qoi4EoQt4jNw1UfS6tmWhnQo8GSkCwaShRr8mPfHJKu",
  "key48": "4dZ3H3ZE9kgvRQoV4HY8SXfsnpKA3dnphgqbtvCtLcp3XmHCToC69cLfvDnWPEyP8RSTf9c5Fj4BRHASHKrjBf9M"
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
