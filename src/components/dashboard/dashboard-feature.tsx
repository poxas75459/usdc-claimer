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
    "5Wfd5RdekhMzmwMBxJQwWrPS8UENbZZToVM2Pefettc7DPcN7bVtvRMRVis2tZuGgYZYThT3EN8tS1irNLoZzGqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbrJ294TYB9d6JMAYRTKrKwvoba2BdJ2QER5a44hMzp9Uac9GinEV9JwS8GCTcM7zQBi7HJuRtU8Q7tNU5fe6cx",
  "key1": "2552fGwjvYux6uXa61VpEJzNb63jN24uiCvF1p5ZgbcCn6siehnJXkkbMpLHNQgmvBRAXJChD96NMVe8RiryEoLm",
  "key2": "56AGmBcyFqAY2zixQMcex6dePkY9aQnwMiCqFAY6scWKjkApV46hVkfPAHp5NgcQAuj5xJMSdRz9ZxsvVzPcQCq5",
  "key3": "6vkdaFRrGuJPCHgEAuxQ1b8knJcRZRodi5eCnztaokmNVy8tNnfmLxMFwY4H84Fpzz1chr8LH9bCHKnw6sWyeUk",
  "key4": "23GJ1PofK9WyJoE9MR3JRvS1oJpHJDE8UztN7dUoyDPHixt5gkn5ghgUSXzwxYVjmQJqPimtc7NsELV6VDGjryB6",
  "key5": "5xFmexTZSKYchqEzemhT3b9dDsBA2tsvrKcHpLcayPckrpHhYXZeKnNP82K1bvnpSn3boXktfpK3TB47RGMiYDbs",
  "key6": "2V99eodLKPoGBQAyw5gKfHDKdQBQZ8M5CbUAUw5b2orj9LZkbsqR9DLKMGPrDEAqXwabgnxkYaMa3duwBXnM844y",
  "key7": "5Tc1dW2LS15QvfuxhVYtnhPm6Tm9E3nQrshJntooB7oJyRBAtzK2FFsW4eS2noZVh2WMbUk1Lyr3eMbW3ViGE5b8",
  "key8": "5PMzpNdBrYbBBBf6irYdBJyMYFEN8cZXCTVMqoQCESz1mv5FNT26GEDhKiEmFCW33QqWm21m9YDbdwzRo1UnTu8E",
  "key9": "3VZZAz91kCkCiRbCJMazBbtCu2emmYTKkzihtfimTVesAEBTAoRGctXRM9JYwEiDb2zVcG4RUvV6s6Eh4MWzzvAe",
  "key10": "56Uobb3qPT1AZEPc3ueuA5m49d4HBqxyznxpo6TuY9w2KNU4pyikwAEB7ySxVe5gYgPmNNXKzK2EvAjVKuPUPNMN",
  "key11": "2pHp1yghcJpfxZ6svUkKD7tpKA9pfpLF15URTpJLkPmkrt15NJ35NbXSq3SfJvd988u9y6YzhbQ3byBJc8i8zpBF",
  "key12": "DEp1iJPfHEimA83arX7rLAMsB4WUodahiENvH4knEz4bFp79gMFBqiYDTEHf7iE9WxNgGcS5Gtg7pEWMX1Mt8xU",
  "key13": "34wTTSLGaZtkM7AAfwVdfiQMdctdTTWe9nWNbZfkhwK6ToHHwBegKew2eWc1aW64fMNS87RsLq1pC67bc8MjcfrJ",
  "key14": "u1S9H3hYuihEyoHLBQuXqCyweFcLdSSR51PQ85wmwt9PxQ5MF9xmRbcrNb1XpBXZiuDcHvrWrAaSJMz9JZxoKHA",
  "key15": "67GPBefbNZfQkngX587ppJPEum22gxgsuMsXiwduqxiLLXszS4ysLS4BmXY78T6pAFzkG8aUruUPLaswA6VNs8zv",
  "key16": "4bKpZdDvseNkgcinvZxKETGmYKK42cRas5tdywWytoTLqYDnApMSXc2RpYkkqoM5hfswEV4RqQQSFBPvoaehEsgJ",
  "key17": "SMHi7fJTdi36Km4BA66UUrXe55RKBJPU71MEqUbMN3EvfrBRboHXmkdcE8QrVsv7SXWWDw9g5mHmvJ4RWLRgRb3",
  "key18": "2q8jkrZTiLeYafTwfyJsUNSK2nB6qhJjCo7Er44f1Km9kMqr5tbEpopo9APhfzfQuEyG2Kx7wSJgKborKrnTjcHb",
  "key19": "3iNWij9oAndLi2SzHunnHGMmd12LUFueBctRdyKG8ntdBvDX5RgTByvVtcNfaADyFd7qbphovL6uyzu4PN3pjC5x",
  "key20": "4qsDELM7kXD5NcMGvpEfGSWhZDhjb6WK623973HmZtAYFmcW5gbgPEtyXHhGqYRDSKw5oBFEjLZqke3RUHieBEFS",
  "key21": "4pjf7xPdm5hEP2AgYcBEEazg3vX6jTHHLeFVSwZwLCq3BPmd6Q2n7BFbktnN4pPByTx59wiNrrQtnDYkNow1WTia",
  "key22": "5CG6jrjxZuK6y52p2qReCiS5DSF8gXadZ55C1Mk8qcS6J3aUtZtkcj2fdSvozWa14FJzJo72UsjaWDNa99DMv4bV",
  "key23": "5byw1zjyexSuUHyJhs9SSZV2pEAT2zKz83uxWUth3CyUbHhpD8YBCgoM9yiMxngeCktRbMfNBJErUM8CjL38UYes",
  "key24": "tJpJv8V738mhoFEM6e3NPfBB5xaaRXYrHaQyHi9RVmnRbUCsdypgRS369muJoXZCjKYDFM4YnDEHBYK5Zwfi4VB",
  "key25": "1vxNBGepBzkRxjdqWhCGtV4W7zrycPpdy2xK91b2hJ3TCPBMJF1WEHyRvBTpQUz2Zfix9TcdmXSNHaXym62WuSn",
  "key26": "5ZYfdf82VZ5NuQz8PCidLUuHw6MArTurYmB32K2cZVhtY5QxRSZF5fjx2L65MzSXUf1U8tjRGuzNJ5ThuNzzVUrb",
  "key27": "5MmQYSkWWS4Yk6Qa2FZYjtmJJuZkRiHGWAg37VXgGjbEqfJ4Wwscfu4aR5rB8Ujo5s2xQtZQ9QcwR41s7R5fejDc",
  "key28": "3RrvtUQ8yHEDy4GhZJDQ96FnV4DYeWkdVaqUMSS9iS1tZS16qv49FMXrgSpT6mz5H3XtKppELfQKg2bAboSKMWmz",
  "key29": "3NkJZfp7QoqFiHZjExP21iLWEonj5nkWwNzowgQ9FM1wCqRduqdigrmRMUqH3QcjueUiHx7DVHybnHP7JQzvRUKe",
  "key30": "aDE4xQTQMsmqPzyopocFq4LhVWmTzQYnxV2x8L9zmceAQXjc1NyUycibyr5XLtpTecPecMTSLt86xCmofqrYSFe",
  "key31": "sLmmNawNXQi9njP5xzfJBpsNgU9q737LkWpaJRJviRKHfYosbnV5Xn8tREVtAocDCqUMhtaPmBxUFDkrNA9Hrs4",
  "key32": "2ho2RJesgnd6J7EAKX5xyf2Uuse8GvYunoFttTJV7SqcQ4tiUv45w563DSNCzsvm746kJAu3Gx5Fdj6wfy6dTL5e",
  "key33": "5zd3xmAzvPH9ptwbtRFtsfhyxE54j8EN9c7s1LJxJvCSNF89mNLhXuwE8XEkReBa6TMwCihZDFTaxw7864YgieuV",
  "key34": "26bSmsUyAu1q48MWbu7YXaoCi8H8WFjqqN8BtB9w2PF71oCPN2fSv4kacLGAf1tnVazCDQQJcfNVPDiuSefDNWvc",
  "key35": "9FYd6c5p5CvtKwYPYhfBbQnMTkwh1fURqmJ5RyqNDAtYFFrdFdcsniNptEZ27PgTBBhbGiP77tC6w5QmjFR2aoA",
  "key36": "Vh2CtQvq3aJ3XBDq55tdoFqhN2fu3LJfmZyXEcciNS43D5TRhYMUZhXc1RyCTm8nbXPZ2c8xEbNk3bg3FbGfv1A",
  "key37": "2ZUk74b74T6vSxc9T9j5n3tuDu7VfbuKsZmt8bQw7G6nK7i3kMTRJnh2iWhTbcDeuH5zGKUfBkv3VxS9nC3SaqwA",
  "key38": "5WMCXt9nVA9reZrbTJapdSZns2cXpzFuc5YcJV9DWYC7YziiDANnh9kgD2u633SW5cUhHUam197a9kv5WjN8Jkwy",
  "key39": "5LmxbUN9pN8gFfRuc7rrbAinFWqb9HW886xQ5MmWBcvg5hfwBLeA37QXzY9WP1e7e2qyRBaMbDDpqu7sEcX4frbZ",
  "key40": "3BwUi5TZUkx5qd7DQWTMJ3rvTt1UYgkyKNoB7of6tXmnCE97X9gyXHhB9ZZdtr3RWUJ2erF6qYaqwcVd9yvwJ8oi",
  "key41": "3Xv9PJ8raQDeYb35gxivXKEvjarQbB9vyVDEYcj7b8NEWhFeatfwyxg7tY1bsKAMvP4FqCUaqbs1VMkwbk34jg1N",
  "key42": "Wo9BmDNLaq2weDKZF1HnJd3c4q89WCNJqystWc3BPJTBEUqgHov7rQKQe4NqZFfaVtwTjetWQuhmarPeQriayp8",
  "key43": "3hi92zRkwBgsymnBY8LoyJn5CsDUV3epnjPJfq2cUtBPaUhXHgqPLC9gmw5htHY7PzCKdrEa5mrMxQt4AkEnorjW",
  "key44": "38udTYVNAKdW2Djz3KaPajeHSN9nFyXPfsRPaf7MATWFqAMzJMAWuoFXQMteHHz4mnKrQzcjQKbwYEnjMisnMgu7",
  "key45": "5J5P5a4KPXfC5xfJb2JqWbxy6eNH9HKmoNENLPNrXXAApGRK26wWwA2NnNEGhkWDnjnDmajiUFF23Lau3LyejCqs",
  "key46": "YPwbsNC3J41dTeDECDXp8JWFHtVpJ2SEih5YDCJ4XyxVHGcrq49o3tTTyvWFWQdTVHH6ytg3ZMdhbGQpgCzHtw4",
  "key47": "45gzpqNTPhPP75gHx3c3pRLcvTVYE5pUvmi4MPR2TiMD2wjNa1kQmynsMJ2Dcja9hM8osWL18cBi3dLZsfV5TknE",
  "key48": "52YP3Twi3hDLmvX5SBPBN3NeTpKb8VgLA8yACnxC76cNPFDWtHLqWDbRCsLM4dgDebE4w8QrRWGrSUcq7Ys7xkkJ",
  "key49": "2LB7eTSdtwaRaaQ9vCvAfQckaea9jXauWQ9VbvkYb6FSFX9jL3YTgzPJcZwqmJFUhR9B82uc7itKMCRAsyCxVJRX"
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
