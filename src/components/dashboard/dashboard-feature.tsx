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
    "5FzrWTvhMUm8ca9PnzWxEXCtjqU7FSiZzGaSrTocbt4ccdJ4DCvbqATW27v4ZwsnExdUcaB9kuYoaRHNRdyF5iC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9UQALugsK6JTbQjubTSbXUK6fA7oFgBvbzNk3sfFA6SwNeohudVP5pM1oADT1tSzTUqdYiWKwvvDbHPME7UAFV",
  "key1": "64kq5wctSRTsSnBVi1ijPb6JUVNPneRf2GxY77vhfXdePzsnKH8cCnfuCVDmjg8rz9W88QZsHKR5dTNnGLdWUAR7",
  "key2": "Sb1XPBvDsMvo5YPskdS4FEfBeaLPfYNAZeYjumbbJFuW84CECceh3DhSqYCM1Mw8rWzmauXf7ST9P693LCCdDe5",
  "key3": "3ZSzFKddMB8Ji7YvazrF6ZN6mdbqGZNameRBx3HN9u3ws4TvBBcBjQELdKUWr1TTe2LkoP89xWS8g7HhCrQoGzsd",
  "key4": "u1Cp68HEoosdRffzwvr364YrSxYnpgFiz16iFqF1C2uXybZ6f5c8dDMHQVEG2yBHqPUkE5r4SjbRmMdfevYRiTZ",
  "key5": "igDvz8sZPdkUM5NgfhNLkULThkumg5bFuoCjWpoZ8sewYWyRXZ7BGKireXu9T41S5EmoDskqMDyBasEhR1VvhYY",
  "key6": "5m9j9Zc2XZ6vfdvtdUTEjJXCHAdrc4DQdgzoSiKUbFR38z7xSTPEVvZuPsLca67tR5ojiguNhAmJZWpwzPuRuNU9",
  "key7": "4CwYbhd1qNLsrmo4SFjGC1YbiMTKhn6assfDq9SJ3SxDpbUsuHsSi2hG3iFvuFNE7iXed4kEY3NDW4p5TkwieS2U",
  "key8": "dTAE16Bj31ndrSyNaT1CZkxvDXMjDTdto2B6UhTbA9Z25kg6Mj7FvpoFYungFcmNy1f4g6kEZPpdvfnGtz7VGsG",
  "key9": "SbAjr3wJYAqk4Ca6ATzMdeQKoXnZkwDseiLAFCjBP8ukGJmw75F148aSUncZj5spNacWtRhZhCaWHjaBvhVBMLV",
  "key10": "5K31Lhj1jdrXYR6PwwG2c7M1x7ekju8qsbKHksAUsomsuGLxMsR3dvusQ7WFobHg9dcMgz94RqsUbYjARQFa7fDr",
  "key11": "3eko4oEMGPsMENZNNFyHU1MhnjuiT2pSjy2x9XXFWR3beQLKDBtJMuMipGpWJP7TKKpkcwaPD7CCLQsmGfLMjrEP",
  "key12": "3fF3nR9LhrsvqvkYGzzqrRhKbhRfayitx4yygTqKKu8tNP1NmskhGLyMAzdUswcFdKfYCn2DtLKu3BKnnL9R5Ds4",
  "key13": "SKpFHkrHDuFCJeojeD49HiPnKAGVjtk4Bxnn7ZixfGRUYYRJAaGqVjkDMcK6e13YLPnUxujJDDydwcpEHNcA53H",
  "key14": "jSdVSfjBYNKDtN6iGCJzL4z3tD8PXuoHYYkwcmC16mm2QmMYg1x3Y4pH6ExPjMCKDjwkfpJirsWZHvQe53zPJi6",
  "key15": "3rzWnffZtUr2HAzSNCB2nbvMVq9obVFbHgTND8WnbtxvGipesjV394r5YyeSaZ5W24Cr18FJ6SAEGgUJ8LfA7c3g",
  "key16": "4BFe642ymwztrZrWQwjYLL8sWv6b7zgvy2ekUppyM8frUHnbJfkSGRjYW672iR5RvrdXrTkzGWNtRgWw6YewjUcG",
  "key17": "5JGZo9binnGNQj7ETRA6EgHPjsfninbaJfRengVdD55iT1Ts189be4b5BNDFPKmvmBLxQxNb8c8TwAduZGCUnZro",
  "key18": "EENWmNBJMXvccWeRSeW61eQrng9uPXcJWVLw1pnQGFXBgxzEKpgGnkqMjpdmauKrzF1cHSXq8FsjEf1WrNh1G6b",
  "key19": "48jaCa44PxYk5rxiSBhHQssmvfZBvjZ4TBj4qUxhVHXYnsq2sGux7xfcRFSXPkXcd7hKVEgu29dRHkc7ngnEQgPv",
  "key20": "HL7rzdAxKuZqoC32tY7MZNRNZY1gSuArzj3BBd8Hjoo6o2Tum7Jxck5dzUDUfcbFJmPxtQpQKXbMCTf6JPagCZA",
  "key21": "4Mzxg4M4rqp7e9e9Eig3dwTVPKUJ8weegfXC4VPcRE3V5WAVrj8KFrzi53oKGTCK4FfVLrW5ugPpE1snsp8TCDSb",
  "key22": "4gWUKwMKP9akoNcbjkfEG4mns6R2wmqsCprz5Xqcxz1xPbeZmXsoWVo5Pza3KfGiJfXkpCDBuXhHrjhpw3VmQBpN",
  "key23": "5hnZCvbezDjz4MWFfJX3ip7ejcTUXuQdWEhzi886GVLKPqtjKMk838utmBEzGNQZkXuMzy4Kgtz97hLZYh5M1jT8",
  "key24": "qFfjkn8uKoBdGTYGxoeeZRVRRaifbhh6wJXzehMMPVQGAxeSro5E1R7b89hGL7Vqnjb4QrUpPKdDJrrnZgHyh21",
  "key25": "2XjiPqGSebSQHrvEzi95K9HX8MTCEtaduCpJJBTvFqh5VmNvz9bKWHjhmYyU6xPQXAREzEE14Pkfy2wZ5fujDYMv",
  "key26": "5KwG3sexJdsoQsBwab5iRpSynY1K169Kt48yqLw9j1QaL8SWA99PjoaNXfSemUkJtjtUad9AoX4zXUuogGL3hCQw",
  "key27": "4ncVmaUF9LRhcu1vJnS95gyMze2qt7T3QUPW5hT4KdgUei4xLJN6xMAJ3L5kLWrz1Jkoo298cGo5XqP4Hn6g18hf",
  "key28": "5amPBRLFyqufVBUyoZWjqCNnfU3zozfHpNcBBG95ax2Ze6sHj5vfuGackfsEAWe2q7gEDWsoaMqzW3TRWoeAPCoT",
  "key29": "JQPjaW6DTR45avtxnkvVge8f9DAtFHWY8kp19va4eoypbpbXH7iYv9JrmbYjoCUK77YoCRspKmU64Mi2tvWEMXc",
  "key30": "51gmRLR7T14q4htpAygR6fFRw7CyysCX8q6Wp4tf8rGcuFf6rupQr5tzuekujVhpdEPN5AqPp6twnCsZNK1dHMgy",
  "key31": "3Bo38xvHux6hNNBWjFmv4hqi9UdVa6sVeHFb1umjoQ6RCCXGSjVWkDiNBT8onTtBRDHqqDFV8sEdGuL3zvdBLV7Q",
  "key32": "81j3NfMr5h9cM7XREaqNZMYKrJ3KE6Vj6y9WMeT6rHn6iRXt9u6r8yKNajq8wjaP4BcdLpvXgjyk9e81rYcUPA3",
  "key33": "4sDY5CFRS8Xk1uBsLkcYq471yGeR3KZzBPGwpvUVkn8x5v69bXUZMRk5TfMPqpHLnLScrikDSEVeknRMhnSy3vRA",
  "key34": "4kwEATBePntArnyYFumV1vCbzZhVpokMooc2iWxj1JSqrkDzLtQvqH1GcERxkjWtp2eG4GJ64Gp7rbFx2qmhAWQ3",
  "key35": "2SSUYv8GTP6Jp2dtXiCw6FPNhP95BJCzo5q9gYXszDiFkEGq6gSdsrYMqaZCqwnr6xAo6ThG3ANdYWmLs14x3MLQ",
  "key36": "e8rVA97cazrsCc7oV5ZmGsACqSKAJCF3roNd9VzahGqrJ1rDHRj6numXJ7GX5ubEC6WKLjVoQX6AnqsibRws7NV",
  "key37": "4w5VcZ4ezstmXPLBzo68ZmvH4YSRoDVowjEWJSq5gupppkUi4SUDVvpwMRUuS9bCVWrbRbAx4seGyKo9ERdG19xr",
  "key38": "4BxxTCrGZZB6qUrJiGAEnbpqqtGLnA1EFDkwfrnBhAirckYbETtCegHUBuzViSAZMtYQRf5njkcSq9vNsWPX8Q5i",
  "key39": "22fL44ZMcmSxp5tydezpWT4TbBp6KQ4PvZNe8cpkSXRm5QPH9Jf3wge4utcYjidLYSBpPgR4YaJZ6A3KvWUhf3R8",
  "key40": "vx4UBYyEsKYF7aUtkcNDnrcEjrthC8LjUjSi5N2sENtFnMVrQZf1o9QBRMaEhm6nndurxphcq1PXL32aap62zHn",
  "key41": "4KJ9T7jj2nwX4doZW3g89MLGgv6zBj6XPNJyxPjp1DypZozqkZZCAxtJiq5TKFjUcZYmogJC6ifGtbMmHh4JFFC6",
  "key42": "7rPurNrGrDF2TJiDBk4B4qihmDX9pgLSY8BnqajLWUhAkPvTq6cf8XLVdUMJtEgQyi9mTySfyggJhRfDpFQkEFS",
  "key43": "5XQBG3BNhoqfC2YThgAtaGoVzbzyrLAp7LYBReBXvHk2hFJdk8W5sbHJvXGgHAm6k6Hv37H1TfjNNAsxNHNfgDV9",
  "key44": "2zNiu9QqdAZHLGkYQ7rQkYP3ZErYWVwe2afFxcmA7maogJdPy8GhHPMnePSJoTVheKdd3SNrN3MWAbvd4jFJucD9",
  "key45": "4BTsCeZf3zCy7DVoJeDZkj1zrMJfudhf5S91QDfR9PGy1dAp5oHprseBAiE4PyafkdLmtshJZwrXY5Q4moQURWf1"
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
