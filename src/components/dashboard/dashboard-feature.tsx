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
    "5hTAqPR3SjHrG9ZqFyoW1jHoE1QzJvCyuGP8vQDaaPYggqY4i32rkCod7YF9kMcWu2wXNmgyTy5TSMbKSTYi8iLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZRb1kvz1ARMVDqFz3B9hCFcN7RVLmRGWU2psxUoEHz5vrkX2n1d6rX32zboZdD4o5oMr6dZTuCU1ThEon21knh",
  "key1": "5nGtttzWCejhTbPzZ1fH2rjAhzVGLPWRE3qfd35RnBf8gSUzzqFWVixBJrjJdL5HSnbtJQbSZ5pUhhkwSEFhLFzu",
  "key2": "4x6vJtUUUkePfQn4iTsfiiEGqiWU3NHAV48YKDaNMijfywPej7HZtG8JgHShUtT2z44kA7qXfuZHWGTc19MZnsdQ",
  "key3": "48dXkHVEMNeTJKMQPjX5ZpPANSmeFYuwCcgE1rnYEA8cUhNKR4zDQ8VsgMeJxKB2QarXXaVEhDEeEWG78oZUxiYL",
  "key4": "3v7ZtXjefook5kUssXcAXYtQdhwSMKRq2LL8YbQLL24ZEUaxBqizRbzBmbiGNQ6Z8P1a6pG9couKGV3MHAjRmPti",
  "key5": "2d96cMnDSR8gtpTJEh4TKGXes5mwgCR6oKMePm9wRKe4uwTRBzFYtRAT1Pmgg8YqAvypCz8rWdyVAGH26brESCFo",
  "key6": "KtP81z41BVgszMr99Z8LpK7vxfW5JfETXVcLKMz9FpxP2NicGH9Ztv8fv3VpeYvj48v2tDisMMDSvKcS4P3Sk3G",
  "key7": "4BxLs15PAiMfEZZwv95G6suHqhMeNb5LTQfvYMRZwZZdLqFyn3dcAQFXm73M44QBahkgCAZuJ32jwdyrXYjD3hTX",
  "key8": "4oMswzWTG5MFz89hWztX8WHHeccSpc27a5wfdCHqkZP3msjdH9BAtCUqdFSE8yF4hiHFgoMvzkeMVNMsaZdPreb9",
  "key9": "5MH5UvxXFVEWsL8Z9YoB3PGNTZQSz8XFJhGa3BEaUnrtTvsNqXVX1xbeHr41ZuXtstwdzagcsZx7qA75FfT8GPe6",
  "key10": "4v5GxiG6iGTn7fcxGHvBh3DaERCVCmQnJhkVdVFd6Bnn2kcmAdUweQx2RbQgzCbD9X2yfV9RQtxTx1X9UqTW8pHY",
  "key11": "SoCYwVfbYBA61B92zrVwdHGy5i2q4kjDFgdAqhF1Nsx1ojhkeVmnGwYY9mh9jJvH4sMBAQKnEwkiGHbPBipfr69",
  "key12": "7eLvLJebaFEU1jBZKAipK7GqJv7PTKEyEpmpBpy5H2cHzVQUMwuUVmWzTrWo9LxgrNSztryUF5aX4Zo284yfokk",
  "key13": "2KVw59B6HVvTPybFNooBoVPisyVJB5axUqe2HsjAYh3etYwps5ornoKmymwYxSA9WUUjk5R4HQsMaKh2XFAMuBrE",
  "key14": "3coom1Q15Q3bMJqhhXwWGxft6qoAeS85ZiCP1Bp5Sk41VmSjTpHiMs3A4q21ummmebGoViU3DgDn3N4JJFfkGibU",
  "key15": "35VHNNkTPsU2TmSfUyvpJiq81qkNKrJA13ke1qs5tR9Gd6vpTnw3dBs4RzGRfiC23vXTpEiH7tg2w7brSyCBaTBh",
  "key16": "3vRc23kmsw4ZA4rRJ3jEbkqrp29AjL8cbTmr9iLHquuH2Dno7bKpvuE3xNof7KwWN7Fird8tzLvSgggK3DkacPYt",
  "key17": "2baaceMRjQguHTJGMaCJzX5JZyLvauaLa1TQBx1Lzgdt7WkzFeebWcpbXnB9yHdDXwDwvmoP7uTQoA7NdqgShcF1",
  "key18": "62uivZrgMitLepFp2CHWFf1q3aTNEp715y8Ua7KVVViheXVDc6kHwzE3ohCUXf3E7Mmi1FnzWJHjs13WDBuLc7Us",
  "key19": "3xk62HEMY8EoHoCL3TueAiTudqyjbHXAvkmbRdueDXi5LxKHWPwNtbC2TkBHt1VMysPo8oTtohos7stz5gL5PwE1",
  "key20": "3p5jsH7Kr9PZPsmARr11bT5gFHX7fE5yBHzF4yFFNJ3G5fQtbj78WUXCBZFz32nAnLmdieBN1R6sx9VTZ3CaKjS4",
  "key21": "3ki4Q2Qmahkf1ardHVTDDPjQeeVTYyVwf8DihfYFpohRsdubaA9RRzLKsf56Tp3iQMaVJBhZFsMAZsspWrSbA85b",
  "key22": "5j6wQWLY6bkh4vCdDkyHT21Qus68VU1UaYwJtzDKHdsP5FzCQ1cox1DzNRFC5NBeSEUdFnZ54ApcZ7G8cBhgbKAz",
  "key23": "5nfa6RiBcV16YNzSU3tuAuQh7xJiFDDPbhsCZ8WCnYMaKrkSbP3CatbaX7MWxiqp36Hw2QpxWkisCWAPybxSPZb7",
  "key24": "3VcpS3qEaVNsytbUd8xL9frvFmcPJpKDKR7ssh933UnGcAmBKkn9ff4LJC7LG1CNMjJjVvHu7t6bykaKiQgyaPCC",
  "key25": "2qRHJVcdFVjuQVBV35JN4PZ3Ztzfg59BDwzMhbi7t3PYuePsNLf5QDV9LMPXYksAraURLVosMdEWVAbgLLucfCv1",
  "key26": "4NTH79jWTKm8GDxR8t9HraieLJ6SK6FwA6cquVknWSTbbJiBjdQVy2JwXqmtxpkx667aP9AbNWxa7FShLz8DEhjC",
  "key27": "4fbtBaG9KWYuKBmNgEw7g6bm7QNS2cAcvwuE4crMSGq2CNSgfCDdxXwJX94emff5kLYMvetTaUqKmBHUFdZpSkUM",
  "key28": "3zY5twJr2RDJFPdd7skoehWpTohrNuzAhHTBUuicntGpdPMyAwNFoMfmGomj5FAkEg1Trd2DRn4Mx7ixt4vnx2yp",
  "key29": "4RfVKVvBisKEq7g7tfkQevbohjCkXzFdsyLkgDUFbQ2aVa6CFYrAuJEj23bk6mmJhd7jyL3mJcnFWv4Av4KKc111",
  "key30": "5DdKqrR5hm99DCYmYmePrk9a5CmnRYuR1eg5iJDpFxBzJkv3EN9W4255x4h3vYEc2wg7EWABtSDw9Uon4qg6Jehg",
  "key31": "4AD8JTARqh3RB8CLjtVWz52jb8hck8su8Qhy68zhYV4Z4wYLPWnMCBAJe3ohzsnaLdwffVaXyR4cLNwydPEszyZs",
  "key32": "382NP1x9wMeGcctvpDpjUUUHD4tJ2w6nrBAAczFW3x892irFMsLV4CZQN7ur7MaRnvvbq7Zv3X9RquEryfRr1d6V",
  "key33": "3dkpbpPnkvthtD4aGZax8VGnd971Zz9j5YKMg6aTjAmjigm4SaESNLeSrZeZqwjbZHkY4odrhk6pTjftXkfTeBMh",
  "key34": "3EtYXdVvaKiRQqxPzw95zcq7WLsh3zw6gmaGV9AHDuRRQ45DEt775EmvorMPomEA7uBARDBQCLkcCXqGwxwabDTa",
  "key35": "3Em4qxhodSeRfQEsiuBUajf5gg2wjTjgw2KAGjgzNhD9EeYEr8k8iDBpAaNboND41EvtgLybsotTNg6TMJELvJwj",
  "key36": "4XLSZsmQAAUjAWXbWWEyAc3Q4TcqjdCYVSnoaJjW8ZWgV8c8sFs57P48DV8KKkvdABeYh8ujK2C3LZzkVXw3NNG2",
  "key37": "4gjCiPdGZHv7FU8T7hrmQ7c7J5qddt5KSBdwhxGQVb6ia15cPgW5TEiuXrg5554dZarabZTMHzfrfxyHnMpCf8cK",
  "key38": "3vA52niJ3dcSWUSmbBBKo6AhyvNRbgdpTBriiJwt9iz6jqqjXgxYuF5cbdWtR1p5KXvqL4y55qShPYpxCvsoH24T"
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
