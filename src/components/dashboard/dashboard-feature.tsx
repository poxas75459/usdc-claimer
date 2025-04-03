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
    "4niL9ZWwYPdqfVoZ4omZcW7UsbRJhshYJXHyrj4ZLAuB6L8vZoSshiZPBGW2jjm2rTjLqo1tJJJ8uFmVgQHdH8BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568nuNMYDqq6JduQ9bRowxqybuY1A3TuRNun8J393HSyzwrfjya1SvTxH7ssYmJkFE7GdMmS1WZgZw7P6zQGee3j",
  "key1": "5tFHDu1z69TgDLbf7a4S1CMMVSwTbQJXiXKvnAcCRfF85D5ExWRUdo3VZp9vqiUBzmWAEWdXYcA3EWQKjctyK8uV",
  "key2": "2yNBR5jjyMtJiMKaohT8PL2wbR2JSUSjA8cY5RhVZt8tN6KSGDZjaY7HsRmRkZV4fW2r3qGd5m7Hir3672MWqorC",
  "key3": "2GxgPcUGoCwMXJKRnfv2LzKpLAkCzECmu9U2omeoNdkCLNsvrDwNDQzxhtgLkNBvcos2Uc3VAVPRXqrhgUjtrquB",
  "key4": "3mfsVfQjeBzBzJQSYxGaq15SBtA4LruoqCCwpfwYFahHU6b5Wp9pheryvMSUf7FT5JrZX4xNtaZNm7xLXABjFXex",
  "key5": "2xP8nu6fMQjrzL6EKGKaqsUvVcj7SBwfFpD9buMqm6PNbp44GE2tRorter5tcJaVxtdZwWqSaw2MQNi9tR2t1Mak",
  "key6": "4DQLzmTWfDiT7Q95bXcFqwB9A3bNf1rVcL9qT712dfocjFWKL5uGUQ1p3bm6kXQijLNjWKp2bPRLYgRsnWJFn34s",
  "key7": "5QQfWc6rwd3TSHUXgnotJrW4bBmzgVM2kRtWxiU7K1gUxuNk6N9eMkQDeJBX1T8jFaseUzV3EnFz4fAk45yJc5tr",
  "key8": "pkRfLdE4j3Yx8sd1DHXqScaZJM8kjLQ2gPxprEzdZ66djbjFq5NGwFbzysPkUSXxyMtzdaX8EHWu1GhT1UUJiib",
  "key9": "vStvsi1XonpZ54FAt4euWmJNYG31gdb5vpWZrZLT6ohkmhiFqUYEsrrfsdpfhHL5LHGXRGQfo1B3QiriqLs1twk",
  "key10": "pr5itivmV22vtLYdHvv8ebzsiGFHRZv5UybAVMxvHfTTV3HtS9PTsEAJ6mnxBEeaVYADuTB9VVJi5FtK4jAvEpG",
  "key11": "YoCMDE7ivcwEarqg1pjs4QVySAVzp41qMGrem2gzU7UgJhribD97G3uDu927oASj2aGWTQ8D7o9LxiJt33uy8d8",
  "key12": "3t2sGZF83XqkRwPVtuxjoj4ujiWNugxyGFmBAna89Hb9rX4x2XFitgZn3wJP93MgbuJXoC3HhaLrYwMs5cTUy3BN",
  "key13": "4sgkNJ2sL1fzE14bSjFEL3J7DYt22d3TBFkFp3rgxjYfZYATWSp1roWbPjEAiMeQgHRVb27FU9D9LAmMJAchd3Dd",
  "key14": "3ZrCGZSwaMouVrhT6SaEUaA7SAfc2SQcGPpVVYRFMkndSc44cf93w8q5zF7GhcvPPUSoBJnAUUTTjL6XzBPoLgHH",
  "key15": "2kuBGi6QTfntaf1EWGh4LgJX5mLMR2cvTZZx3VpHoVnbz52LyhMtCmSo5f23gKSrf61j64edUHh527Yg2CQuJByV",
  "key16": "VBhQcYfzMGQAARNTH26PqAJ4T2DUj1abhu6gu2y7Kkew4BoPFS6sUsq6uyC4UvYWGtkAs4dqHR1XM9xsysCwe8X",
  "key17": "iPjzXzaJJ4TppXAW1aV8qf5wH59ncj81rFgYVm82U7C1MxTRMDgHNuRN22UVATfmZQNkVv6bjpBS9KBEoePzKuq",
  "key18": "2z5EGSbxhFGPNJSFMF5p9NdJhyLHo73De4B2FznWz2etm4PnGdybitYYPUhGHuhXZhbnHgixhDFXvsiZVZu2zcRp",
  "key19": "5gjXhFWscaUqR8MHae7w7tEsv1zLfgjJf4Q4j4mQ3jBVECYQREYWdaYrr67TpjKBF1kL36ARpGAS6CPBhLk72Rz2",
  "key20": "5Qzjcx8aDLp2oy6EhQ6Hj4rXWw2EVpHxqUWYiF23BUQTwQ3scaRwthqUqFKeLZbDUyBdwJYNxN41ctFKDVQE6Y1a",
  "key21": "3bdn8QrPUbryWWe2SDGcg99L5nuoADMM8PpbTqGED1n3qzHU35hacCx7eKNJz4J8JhTn6QUresL933LysFcRU6E",
  "key22": "ehHr67dHnvUN1t5eETuKnvHghwHudtMxD3CaSZXZ9KxZE35TaUH3W4j8PQTAkMQPmX2zugkEjzejzLSPm4d9kf3",
  "key23": "2wA6VhNcEhXpwBLqPkY3j3Qw3hRwhsF1V5GhcvaUNKrBtDFardTwTU4iN3jEboXEXK3n7tCrsvzTDcLHR941jn1F",
  "key24": "4zJqUzYTvuhomvDEsLVp2JjbWBu1pMsEezzBFjS7XHYjNYcNYNHdAwpUWrfknB8b1Gg9Vr8PN2kmxipEBmXsaWJJ",
  "key25": "CtVXcPQMYPyqwcVtYfhwP1iVZSurkKUU7fwxn2s9u3du9WcrWGHr29KrdfyDb2CurygeW881271yQ58mEvCkx1i",
  "key26": "gJVgpEibEAiEatu7UhJqqJFdwekfQJtMLQDDWFuoZD2qVZE3GrKy4bPgjoAF2PafJMnPB5t3NBNrMeEwmj3qXFZ",
  "key27": "2h41W2apgmyjLmeis96fsSC7fMnDBntTEvenJUAmh8KfYMuj3fR7cKwGeFsRSUcDNgk4HqXnJZ5ErgH9JaYJmVde",
  "key28": "4EjWHS7h1jEfcYWyURx4tEiLNwXpEm7HbHZZD5Sjyk9T8FdhU7PpnUjXLWR7r6MgMCteyZqa4rH4DeQT5vR5KJSQ",
  "key29": "B781MPREE6mFqABpzRQRMkEy3yHxxYFStx8RXXDz6Jup1aUoPWSdJk5gW1fNhMG3wSiyddPygg92QVCAssAnu8H",
  "key30": "2q7GRY6tEQ18Nh6kKs6Hjd2eXVWBkTaT8qcXNx1GaJzqZzKPUeA4ixoQmvJEbKcjNkHYSFbFjmeqMzAXGfE6sbRT",
  "key31": "ToKz3uSLgSXK7euH8BSzpEr2maJb3m1Hx18i6XNDaX8rEa3EmatzR7qZGLiA8AeXg3kTonoCk81HX91qkvtJxtz",
  "key32": "5CNDTXWnrDZYbbyd3b3mJNCJkQEdRzpjeWjHmpVZEjE8TYyhCDwd693r8usLs2bBhHjNZ8PbdWaLsqUfPjyYt7o2",
  "key33": "4SkBadXAR7RjoKP6zqMndL2NkDp4mTDcSEBR8m29ARanguoXNBCtuQtSyoaXiicVKVp5ZDvsEFWTnWmWS7TBD2A7",
  "key34": "481PbLEPSBihnmiWhqgFNhpxoSK7BWNzGYXLk6iapPrMAmpCLqcTtxLhwHYX92JgSrsYu3dxK7U1quSyFVuBWQd8",
  "key35": "QLKkP4fdczLwamN2JzftTJtKbDFyNDF38EW6j5zUZaJz1dqT7suoV4KgaDDgiP6PdoTPoq7heyEkDtK9vG8Usqx",
  "key36": "exx63U7nh8UvNk6G1XqFQZy61b5sNw6q5Ci5qhAoRL5hjJTSo1hSAJpbWWDL2Gr7RvdHQWviochPVkF5UnKvCjJ",
  "key37": "2do4CbZwXk5ePaJRyCu8QQMwoP8TaFPypdFFaimKHdsPfCYe6e11iVew4EnqJSThQ7Es4u7cShg87nkoqiw3TdPu",
  "key38": "3FEvLdJbdBCcczi5o2eTJ1uGG3FwN7tH3TLGPGXTyb7Uy3cF7WZRxDngz9xdfPqVRa4AegLVmAHeKvrdGQ64F8SK",
  "key39": "2hQu2ePZeqZhQGZ2DMbaMoG1VEkJVyCGzJGoDWZ7iuawi8PTKaLSsVnmPq17FnJgbGydBzz6R5aPwV6RWwoG1Ciy",
  "key40": "4igfFPJAcjHxM1Qdi7fbLQRD2fCND2kSdcdupgXe463rZMBT81ibUUw38somw56ASX6ZMp4GxL4vwYdsCWap4pBY",
  "key41": "5pZ55G7om8eRZaAmgSVg4v2YjtmcEqgeHKfFCZhqTgwPJj25c5nH5gS31W1JBFzg3eV8Zgd3R8vuR6Y4ZZccsYzo",
  "key42": "5BRsUaa6CuY2R3VJyUEJg83zem8jbXivDVV1d6FKgzzNFhCN2hfr4sDozBrXrDGqLbtxL9KjdJNvPBpU7i1bwagu",
  "key43": "2hydvqfdPnwkftthopZTczAjRSG2UJ8tW6L6p179jR4Xvw2n2UrRM49HBkzHGjGPbzGjYL3hArQn95uBu1rbbwSK",
  "key44": "3UJMbnSQWnx8PSKJFwoy7PjFXDmg7DxvVNaLWLAxaeuPpJDcxaKwKkmGcS7XnXGSBxeip4pStnWjbsK1efLYqQ8i",
  "key45": "3sCyDHsFNWqDKtKZ2RfqC1ok8ybZC9bCCWhBLg4Ehc4hNMkPcYmRHPi9X2Eo8tb3BjJm8Fzqvks2ycwNyHieNLox",
  "key46": "AxBKuafEbYNpHoy574U8vvcw2zTaXKRH2nS1qZzh29G4fSS227i3yyLquM93HBerN727BdnVs9MXbQNvRMZNiPY",
  "key47": "4j8jcRTPM3HqpxZetaRwLGhYmqh2e8tx9BMaVNMoKxbNxqSyypNGXukJVhYNnTzWDT9EbpaCZcyuX3C5UACyuVty",
  "key48": "E29aWBtTxxoYpx5dfFTzQYeUw63PT1aKTZHNe2qpZFAxiSgvkVB79Ap12PVN5vHvkCRC6JU29gDFhMqdU1Rd5vt"
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
