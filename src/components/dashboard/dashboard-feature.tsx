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
    "4sFf9iWYTXKDhhckBKSbGj73tBzZQwCV5oTuQV1iTC6eyXngTSP1Hdfho2RaGVcqGmpju82Kd5NhsXWV43sAexex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PUBmMkmoFBXt3QepfJ45HrvuaE5uEVbhS7TY3L6X1N9y7N2WVX2sQPjwghE8FZpCabrxKNoKdx3we7ujxfodFy1",
  "key1": "3VWUqQCtFDFS8F3XydFjar3PvoXWDezg2zwp4bnSPggBRVMbv7LUUJmHv5b5vQBQ6rs4ybmCSA6d7A2KohbpvXJb",
  "key2": "59EDtXLZUsUA2vRQfy37x9SE3yaBjP5vkRsDWfTdFHKRmA9Zk4c6W2bymWbprWTs38ghbRDewNtjcdhoahuBfoGr",
  "key3": "5TLAc3YhnRPcti4tWdrHPrTEf6ZQPuccRd3AFZG2EHpCLvHqhqjoiA8t2jsNPcKbE4diaesKF7naE93PK62eMamH",
  "key4": "5jWyvUsKGTGah4tZURqeXFhtG5jWsgaDeBJB5zpR3YvGevvJxTHwswyqLKfcy7BUDA76B4CK51EekH3ZrqQn3c1Q",
  "key5": "24WzkwKtxDiJH76ms418teaD9D8pbSd2KgMVPm3wn4MNSFQ5JyVhoW2Sv4EvqFchczAqm2iw4tckhC9G82kMXa3H",
  "key6": "3eCYsPCJCZJ1YvKi9w9qk5trYHuUFhV5NwBejqLkQkCvmvbbSreXFsHUDzWuXLR6ypeKL2JuqKhWyDyzw4kJDdAe",
  "key7": "2M2QvmRhds6ufAbnaWfR4pyFhpx7uARwJ6zrWt6pQb6ABnhAXaitpx1Sy4W6yEJ3tQQ3YkraA1VvVwcuASWvfn2y",
  "key8": "5fp9bUHp6T5RcDX3RSTzLJ4nX4m5s2yLPi6GWckyytFQwVcjraqLg6NqzkkpNWuSLJ9M4Azp2DHSDDsS2qGabFf6",
  "key9": "dxA7yPieLoNfeAQ8Uc3Pse61zJhxvvdfVMuJLjsymznvosXhJth3rGK5WWHWDYDZiUAAPnH3kn6ZGQkGr5JXByz",
  "key10": "2J1VbmK8cREnUwSnTvzzpmjnwVJebxvuc4hXE76iAg2JV3GqLTqtLmHajFSmFsfnDMnr8aXnPgG9YYyz6AV6pyjv",
  "key11": "2xfrBq4MJM5mDYHKSJuL7VDmi841pLetmKyKNcj8miYziEpLAkQ6TJiKiLW8xoMzxrnHPkV23gWBT2criXoF9B71",
  "key12": "5qmR2h2P9vGbzkaaQscwdK9srV9QGeiMcjNqtTEpwtgxNErP5hQkTQrEoi3oXg4vwGSR6gYjHY8s2WimwqdkAPmA",
  "key13": "4CAcJFH8NL8Z1m2D1ESVT23JtqreRgunqX8SjShEPa4d5fMYxympMGP1fzE3Bjdm6Kv9iQ1vkrAyRgSbLTke7jo6",
  "key14": "4aEwLLHfbfyjRgViPrENJhpTDjkywsebrRWScLXGELQH6Y4KKG1rYZm1uujp233eFz6E11EoXfJvRqLk1KK7aZbW",
  "key15": "6rdPJ9quqomjvqYxYpmnwJtKfZELc22XhYDVZuoDR3UQg5D1UT2rQM3z6GCRYJmCL42WDeyLzFJYjAkmyA119Rf",
  "key16": "4EtXrhKhhiMd7mpzxKbRyuYAswsLVPXceaNWDuJy4msTZiYE3Q84KP79Rz4BtXzCxtXQkskvg9HsE81RWLZ2Z7Xp",
  "key17": "4LSz8jaJ9zT5fHLsCn1XXnaL7yGjtsGZKRKjcMZHnvXQBQY4Sp5hNYbHKEwg77M2GpKDoMHaEZA6HioVb6rao3Jk",
  "key18": "3cdSJ3cWm7J6vNejhZYcpzXeyxF4bSTtkGKYGPLrjuvrQuLy3oG8nyw4PjarcSh9wdBuiXLGtWybeDcUAh4HtR8p",
  "key19": "mxBeejyXiiLf1Jmq6LysMoCqyCLdHVcGVxfq8HcApaMMDBs9ekGgQaRQuuBRHyynWr78tyM295Faz6A112PC794",
  "key20": "4VTCHHjt8Q5vosmUp5nrBwrX7kWUobXyanQbHJrR9szsSTQhT8LTygSgNjWHXxBwmS5kZJU1UvfVMWZjNSsp41U5",
  "key21": "4VQpwyRF45oxQnqgEaJLtabGRJswiAoMWyFVpFKa8jtTSa6V1MJTrY8eqmXw4cBffmAeknGNocUKPXerGshgbh63",
  "key22": "HeFGqVkowzthqotToNCWEkkZ3k2Fh9SWvo6cmotvDUDKfTxmuC5eeVUCz5aVrJu8SeRRvn561RJc8Ark83SNkq1",
  "key23": "2nxcz6afEsuDxgLesFWF1qptEUqT9ozKxXreaos6jKKTYDMmYyYkU3pENdPvmcmh5Dr9A7MXApdifTwtzdmNnwzh",
  "key24": "4rdeuCmZVY99LerDfmjspvbUt67FEQh1DdRD2FdAMYu79z8ouEHg5bvF7wBS5UkjmecmG1JtsUPQjNCEPC5ymAqQ",
  "key25": "FK8259rAXNCSojMPJbZLcigompR5oS1xy32TV3mEtCdyhp8BZWqYFCmXcWWH3EY4YExtDQLXbXhfsRSbie567pv",
  "key26": "4K84Sh26nZbm1cPaeqNDWas8PoewnNnwyhogVv2my8hTv286CYpQsMu35NMcxxdGg8BDuSxwEZaFYUqo7yifxoeN",
  "key27": "4rcuxWEv6JQuBysHac7ZxLRofB8FCLHkELMCs2hMh1mVMwWenDH7kbg34JHY1vKnFe7qjrHhJj6muHoeP7VB679h",
  "key28": "4pnz6WxVmD6kKJx9yauvfG5dLtQrHvKxkzihg6qaC7kiGnEpJjUreUKk96DcyL5L1DUd6YDtRmGPiEQa5tcMQoRY",
  "key29": "28wfQLV3navtTET9iCK4iQ65RNxk2FfSSgSuGZQAzfaphrb8zgraYtmTLLzqqPSEh2vM1Z7dkTnwCd7raargV8yX",
  "key30": "2NripbareobpkKEdWLYs3ZaE9ZRYa52DpgaP5h6uEgZ6hXsN6T6ivEe9nnBtJDUvQJvdP5YGpsfs3Lzw1djLesvV",
  "key31": "3yPi2jMoCWzff5pXDmPJ6hmHdmKTY8aqAChU2RS5avAzJYhCWRgtvUPkwRovg62VFuFPXasdEipMsQK71daRP2mx",
  "key32": "HnD4oAdNqts6buNWBPSRP2qhicwzSqwWhK24Yf41KZQ1VNRPsA5GiCkMT6XxbrhyzQtJJSWU3v7m6JKe4cTAABp",
  "key33": "5zW6i2sxtDMnTct5Gzsy8jtvgsq4tq3n1zMEZhcL15K7v38LQniiuD4A44U6q4W78trXPbymEHdpoLGRgKFwKGfb",
  "key34": "5DZUmBk1867Try2rkpq1AZvrbRyZHqS6W9vqfJRJE6ow1rdT1X9s78kvn7BhUjw42Jo9Vix77CYL53Ygp72M6DKD",
  "key35": "4gNiUwgBRqsdriKtmrgQzKZnYGsoaMQE3xvVQjZDGyPjEEMGgrscfQBYEYhHAKbUU448yWQAWWt7QiMGBzkNV1H7",
  "key36": "5dZZjoKX9sC9hKqSQGFmM5CpzCu6WX6B6AqNvkexGbLRau6oTNJSC2CZ83ydvv8iEWuzrchT1C9vMXL1QaFCjsoJ",
  "key37": "5mc9GcyrevDVkszzoXfFwFf3ZEbasNmyRsYBwHYhbNaZy1SRrYoUcHpCNqSvtJQb6GmVbjmMZsYLij8LufirdXSq",
  "key38": "B3dbTqiVVEggr9oNnbqqRZfQu9B7ygv1rFFkUyJz3FEEfJrB5uocogt26ABQhff9Pp2sKeLtUqc3qDdzHhrYTBC",
  "key39": "5apbnw15ffuptpkS721aZYLp1eQqeVjQqV8cGeV5Q8z9oUeJGBMftseYb1ppvSnqEmHj7eq1NYS2wWPyRQKSXpqj",
  "key40": "SUC1G84cHcdteHstj8QZsTRQMJyctPFSwzz8Ks9pw9CxMd1aBAX2D14mBGFhppC6mEUGyMPCmZL9faUgBfMAWKM",
  "key41": "3au9K1rwpcdC5c6hLrfwZqDK8sdymSt7BZUmD3LP3CXCe9QDKJTYaJhLKCD9Ph7VTx5zBCJCQ6T7dWHYkDqPz65Y",
  "key42": "5ZTbKNMTuCeL4K4wuMPMTTrbUKZd1jmCFhZgEXhvfrGyN1ei9VQsbKvnvw8F67YhXJXGK3gk4ci3fUyAyyXEGs9Y",
  "key43": "5mSZdp7mVfzrdJnW2DaXNe8zw2Q1FS9C74zYHGuXxfXvc3zw6MWasebfxLtGgBwzwCSdqUAGFfjuuHnJ5EPaTFpU",
  "key44": "3CiJ6akmNrYrzSkj27ZpydXfaySpedgn3NG9yHtaJt5gm7srCEtvog6gqQTnawPGiNB3dY88YMs1P7cLuxDrQdob",
  "key45": "4xrn9fYTu8LJp4xv3mfUS7Fvo7j9tZP6NrFmPzbW6hmCFHpvZi7ymy4fUsoceCtCKzwqTsjUdyB7NWbGnctJLkzv",
  "key46": "5Y9fCD6W4Gx7wrwKRKZnaas3Pj7HqQBFhuGe3i7bovk7caQ7X9rMp8TE4vXaddyWC63JebMhwnwwKouiSH7iqGrU",
  "key47": "328JkiX2S4FCkNYpLLBubJD2A3KK3PENw76A9Nnik2dMaFsme8KgwnYUSP4zyjUzqcSUsrgzNNiugMZYbBKo8fYH",
  "key48": "4cNW9GHQyKAtGB3CbSp5VAgQqQDuC7njki7ErvMbumM25swxRYtcBsywtHxcCB8TD7rcTpwrYHtyS9a11oaAMoLM",
  "key49": "55hYWczQE3cGWZML6dcV54NQSvds8mFZJqiH4BEcyzfzKNevwDztaWJpwAxLdBurevGggojhMDe47QPogH3Pggv"
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
