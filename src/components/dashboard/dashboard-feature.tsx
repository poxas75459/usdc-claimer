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
    "4wGwYnaRTL7MELMF6Pw8vSUCCp5Y4CsGt67pZmqGSZJWW7VwGuGHz3fL2mQQtGhBeFk1SPKsGVUxoVMse1X5DmNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aoyWxuS8dpfsWnAHoZtYEuBg6ZgxEx5oqSwyZs72djEEW6Z7MkkFX4tQnXQ366mFwxbfuuN2mdgGvX2qVuT9BK7",
  "key1": "2ErAepqZZu35rANZycPPeVeLvskycq1N74dBd4vrnCriUbNEwrVzd3LN64mmvecKTCGyyFqHgDoHsFsivaKsDDCv",
  "key2": "4tqteeQZU1KM3yj4yo2DFga8rjxp65c5agP37adu3AoM24YmA6kwpJMsxEz1iqd3gkmAEBDJLkcA3hJZQ2CjQQPS",
  "key3": "CjzUymt1fCAVCQ6EscWus4LkfJqKcPDz1LxDjtUwvueB1Yhyf1ubgNv7NxKhaAA5BCqsdTFcCQHLaguv75wziEh",
  "key4": "3Y9Uss2Dp1KbCyRsooNtCgnxtYepPjpDbxqnVysvwF65BkP9rtYcByQAkCmviaoA79fRg2pF2SGDhw3GXAAcyLrP",
  "key5": "3uKZmu6B7N8tSL2yt4P9jeacRxf9JM6RWqZzaGr7RuXoR32XdBj6hi1gU2h3XJq7iUr4aBN4tx6gFf7Wf4Az6wmz",
  "key6": "2cJqsGexy48fAFa7XrfYbmcj6w2okG2SEeL9XbiaLaE7WSzfgBiLEt77TpjaNcwUdeTz4gtJwRQZ1FM5kiTLJp3i",
  "key7": "J5tMGDKqwEoyTqZPq6DcfJWjYyqhnbMH8SonsyfxiDYFQshWAhyewfvmo9RAfc1jht31K4ZuYoyEsRudWRyTna6",
  "key8": "3froqCutbzYJXRMSeWHTMK6gvsvziMHaLM9AjvN4dJucgqmEcrQ1wNbJsVWV3aC5L4t9Tzymzb8a6DXxn4abQnq6",
  "key9": "2Ro82ae2uEkHXtAxPeH7ew4tL12BpF3SRrKdH5XzU8gviLFHFAqDXNARbiYVj6oqvLFGogGDPD6kipccQRcTWdLf",
  "key10": "47Xhk7UzsHaZC92vyPUemGXd3giGMP2YiLk1euvseNqsq8TPY7x3nogXyR7g2qdyaiHuFRMJvYWkjx3fgr25ZDTW",
  "key11": "4bYixSfm9fAS8HqZZeR7qTJVZcevLTE3nhBpbRmUnsfktiaSgSG8msjrs6YDtKPbSSLXjXy3RNapfBPf9wvAyfjS",
  "key12": "3gwuhjcCAvGCrA79VsZRVSgUgGHi52oWFsUzrTuNrgCrM8V7VYx28QdJqrpSfDVJq3sJwCNpsNtskRrwTePdfzNM",
  "key13": "2hVZrQ4gE5v1ZcvbedLTQvJAnQKee2rTQKLswahaRCf9ng1hcnsu32Zvt4mJjA6GVeGNJ1m5qMJ9Z6rqERxMsUbZ",
  "key14": "2xfdYSive3Nkmh56b11zCnfWWhEC4rhojdE7Yutni4Qyzpg7jMyQfQ4AsHceqXz9YBfTk9uE7AAiZfmjnuHH9Hmy",
  "key15": "4StEotELVSJTMqDFx9TQk8BCu6k3Qboi5R544UxQLWi3z2o5ApVPpaDnTY3N5CPnve5a1ixRsJaNrX9RWqu9qLX3",
  "key16": "5NNrdJxe3MEER71nTXqUmM3QoWGLY3uptiHcETxyZ23bHHtiaovYH5VkZ7mj8oe2JQHMhWZqJWvXqFUFPJmsnQms",
  "key17": "28iqB75QgRzmwLk1bYwYfdaE5aAYL5mMteGnRJwxGV9FLrAG4Zuua6PV1UDgn4nmNJbnnjYCcRpVfDbeYJ8sHWkg",
  "key18": "qhRJaVBveo1U2MEZUPyub1SCfkYhkT7JqtbQKGPQR7QK6Hr5KmakrKBn3R2LoiYGVgqicidsDBGdgdrXFibJDZS",
  "key19": "32ArfQJUhvqXW4C3WAdybWKiQgmGa7cjmFeVjhzea8aHNqHynKvd4vPN7dfjA41NaSA9tBRTvDorHzpLu8BiX2xZ",
  "key20": "wUC2V47f5RcUw8sJCiYQLKNAMzk14eqLo4dBjfjYJcBgnWnWSMA2vhJWGNShCgMgeRH5hCBYw9NSSv9yVUw9VVZ",
  "key21": "3jX8bcUmC1istrPLWtaZfaBYuVykuiCrYBopPDyxmp9bgppHQCuygfh7zu7m4AsYDeQuhqTu7ZYjmyMnaq77zzCJ",
  "key22": "5WjfBN2FHufQdojudMS85RAbQsUv72fUM2ap8rHxZeLQYyhzMsctytPMYwPqMXCtzP92psBKjbeSZ4rPJZzq8ZLK",
  "key23": "4y1GY6vmoKduvhR6c6FnNmvZWFmY3mAhEqCPHJrVpi8sc6grFy9ycnWe3hvayX8fqZxXGPY9JQkL53TTey8zUaRt",
  "key24": "3qWyaUKk5BEryWyv1NU5aitrBusufadZDsGc9XtnhTVuVPZtDKgxiTcPPB1eG6fGdU3eysqvNGGvhnokFqHoRmq4",
  "key25": "5L8Zxf8AHkxWZuHH26htToPURDzrc2QabHi27U6i6eTYZQkEWLDX67sLH8hmmi1noMiQcgRWpNdfXNbyj2buUfxd",
  "key26": "Cn16qNyrnPcwoQmkFSey1y3XyyPmbRnmVRg5u2dwvgzGrcVYYY1HZiDy88rvkDmg8NzgmmeCsW7NY3N8HhxoYjY",
  "key27": "5nVqbDzyAnTNB34KQbrRvx5w2fYrg5AqQGK2QoGdur9xhiV6bRoMWfFamk86rqLWJnVxT9W5XfeHU6TW7XyTTzyC",
  "key28": "2X9yb8wPv1hBmjgV55bR1N1fMYqb2e9FbYFZFWW44kphHzVUhn8NjK5WEX1BWtEuMwTHw92VJUAGSkxB95WQJepr",
  "key29": "2RVkpDFKjzj47H6T4WszznkHA588Zxej4jjMCGTqAXyX6YH1mMuQvYEYTMbQckbrMknHX2aaoT5ZpwS8vQxJy8Cv",
  "key30": "3LFFP7CEs6NUb5hfFEb7JsXfHC1AAL2oyVxnnpGcGW6AqLkTwXjd75WCf3yBhDKomgGfWAUNM1sRk86fWJr9GR7r",
  "key31": "2itHbn3VzSDunpJykTKQRPB3ZSVMv6kq7USziKBMZVGHEAL7RphFT2Jj6a8duywSLispHG9qvFoS4hcwJEWxZUr5",
  "key32": "3XpYf3o4P7zpHRnYwhtnSUhGqiacycyidH824o3pReBb8afqGymW4VtGvfZMgVY2ykyPTm9FH6pydbKG8oeMCh9Z",
  "key33": "4b7XzH78uRgU1LneH92bNDWM6PPuFm4f2wKYowgco8U6xovj8fLbdSpHGyJtFu6KfGwQfwycAyFvB11nZRqZXJrd",
  "key34": "35ggFPi9Cqm31PLNYntrrWJhWta3tAdyJ5RaNmnWFJjUoKaw4Q4wMWyxVrn3Y36kwyhSNCrr352tnTaZ4n4HCreJ",
  "key35": "5QfPjnEwsPmqgHENSdoWeFuxyLrX59E3T47xiHQi6jacBPXzYkBXs7KfKeumHbMw2UeN5DARj3A3CUTeWHeJ8W8c",
  "key36": "RaTJqPSjkPqi2iueCXH7pwzn3SBYwwMWt4VSPJQ6YdiKZumtUuzrFFRHdPRv5WeUtgPkP7QnThzmaEmDUqMsKKq",
  "key37": "23rhiD3KC7vuwPMtCN4YoaaHnQkPdZX28CjC1gLrJkrLkEaCGRXg66r76Y5CMoxE5LrT1nWkmGgJUTzrq5PjxAHi",
  "key38": "5tT7JG74TfP2D66bSG8UR7u5MRBE6g4v8Kh1AJp1J45xBHe6z3gDyu844bYQoRhtEfj1b8TxJEnrENiz2zavYXTS",
  "key39": "2NXff4WjX6wH99awni7nymbr4W9tJUjG9vcPwLj4ayDMvgDJV4AbuLg6YNiHY4LgsugBTtj3MTpFfpPKvzEHHsPN",
  "key40": "4BxjALoWnDAdxfrAzZo5Ku1DLS1QqRENLHS48mkC1UBqoxkMqTamDneUgocELeDyao9AGh9y3wiVGtQ5eyJ5jtsr",
  "key41": "g57y22HKbppHSLFbXiY1otyRTEb46iDRVYiJASwjCszevVzTFEcU6GscJV4U5eJ7EmiUx7hozKrzm9vN9Jm2Ek7",
  "key42": "FTvQZ5KuWFY5NukhebeV2sPQQy54anBHdRzoTLTz6yvd6V4TsnLiAjvUn9KnwxhPzQaKE6xyGq8u3mFuA7V5YXj",
  "key43": "3mX91vWJwCujtKrJ48qi5c9S4KTop7GKUgt2tpBZ2q5pXRGzi9X48MEXhiEc9eBv9E1n4jKJbc5Q6KR9cwaaUBWT",
  "key44": "4HXhe6pmBvPoXh2uX7AJWbBiq1VrnyVzjgcdo6xi5mVUUVNvVuxqoHF7SnSirscUSQVEGnnKLMM9phhiSrATCu1B"
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
