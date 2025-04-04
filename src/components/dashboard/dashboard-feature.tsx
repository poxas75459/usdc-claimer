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
    "2ckzRZjYndqS1K4FNMCwCb9KRPq2fJB1vYpwXpXXTmFbzUjnn9LKAEgkEcXXeCofNWMazREXzBpZDLEV9G47vmyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9HUFA9w8Tz8fMoQ9ymYUMiY6gWRyX2ogwisfyCcMpCFuJUjzbkPN4oq8yF1B8HYBxDgEaYUWzBi2Bna9kEF5se",
  "key1": "4BhjkLY1WpK72Z7ZGY1BaHqDwUBc15AZMMCfvaE6Vgqt9oDcwSj9YR3WgMRc4CmHeSNqFAFPYesN41ePJAjWMBJq",
  "key2": "2Y8Ty1Gdf2RUwEdsjY1UjMbvUYEBtj9ii8KdkEdNbz6YkUUAaH7XVYnuUmrTNyqojydpYU1ZqXmdvR58W6HswFUP",
  "key3": "th5Axx76gHBPz9mf96C54qzmcaomhZzhLSvjbVMFPefADFQ6jPc3f62M359BLYX5zsKJnCNnbzPGUBu7BREohpS",
  "key4": "5abTKgohp2DsS848afuW1P27x4hiHr3i9ajcKPNRD4E5SFAUAKLAUGf2YNpXUQvi57inY3kTpmvLrTC6fK92xthC",
  "key5": "3trRdzbqp7Sd7ncuGayDx2szhUJShrbBLp24U4tXCCXgBkziBrEBRKNX7FjEzs48XDyULXUL5smxkbhFa6NkF2hc",
  "key6": "43XTK5PMjDQ78yAyTEZYJDTaFEwZAdaMuEvGDjgyLYJpQ811KoFUDrvWD19C1YHsJe7LzwdeikbS4bJB9efQLgpE",
  "key7": "votSrJqtAi6XgzVnv8koXdVgBfVUBUJJAZJQaK9NJGTntqhReuKzBHfQXUYUEjDpaa3adZxzoqL8dGvGp2sW9JQ",
  "key8": "5W1H6DP5kViuKeb19gnjmWkNiPN7QxHw6ErvMDxTPb5dpCvrFJhhfRLPgxaUvmTHKwYjD3NF7dAERkh4ortGZEdb",
  "key9": "4odLiUa3jMk1ppFucZHmLxVPA9upQKzMdaPiRgM8Qb1soL7n1ayuHrcHn9xJkByR6Y5j2RH9GeKzb71ERw4GuBgP",
  "key10": "4YEHVdpm8NLxZFkiLC4yQQyveVRfVswdPTzTM7iNrc5TSm7HTou1GdX54jfB6ZbQLSLfdBQ5G23uEjXLCY5PKhnk",
  "key11": "2j7TxyqBCHemWL4472E7wndC1n71s3cUJuspNaCiwuPGN7dcxA5NGfhBLFu64vuNfdLM8Em2d5wPdWkhYoNLvrUt",
  "key12": "5XCjuBtobA1ii1vUtYQxagZpEhDCLCGXzb69P6gagnrCnf8CDgZv8nWGrZBKxhXmSiQii51kdievK1EWjJyVtswC",
  "key13": "2mLFkVz4qoAZfxSMRUywJGzHzvPsQLBxw21av1tvCzawc4qzagJcFUrPPgDzjFGthbXS2mX4JH9nCgZYq7B8guvP",
  "key14": "42hvcqkEMPp9Np9h3wmhfkAxbYLtQjPuzPmFafVf5RNCRZTU9AdHeForUj6McV1xdr98sk1e6kbSzHiZncPxS7cY",
  "key15": "2Qy7Qq5hd4oRbug4jmpVKWQ8WxtBtkiyEm2L5F5GsRXpppfL212LiEvLeGx7erqqRoKsb6AzNRDmfC2f5Gc53Jng",
  "key16": "4yy8wQTRe4q2VyyGx1hnH2jCKfWCgnqm1TdZFKxuQYX4QQPyqeyajFaYXQrv226G7pt5MpsDM77bp7c3bnj7Cypt",
  "key17": "32HDxLVMHrRy87yTLRk8EhGXN4Gxwn8j2cUapVZrHUNBMugw9pgLETRmgzRQhzEVucFYXvd29tLAhXTck4PPr35k",
  "key18": "4CJVQH5Y3aHFKoGzAa863CcLU6pjfhejJBqnA8v8NdD6Ht8j3Eyvz3xqPYVq38c58SwHbV5mdZhwJLxmv1jbEYh4",
  "key19": "2tQ6hcd2Gaexaa9njk3boffJ1BLefsiufHuQKzDhEBzzbGgvKTkp8ozcghTSWFcZRAhoNqYenSevdUm2bcchG4fh",
  "key20": "YyNZ9Q1AiigSJGVaA2LEoR9WMtwgrGsU6Ki8jEa19KDGzew9Rg8BkoJfYbKJo4dZgj11Cm7vuQJFknnwm89gM54",
  "key21": "MH2H2yy5HdPrSaXvAhKEfCa66ggeToWMMs1CwMVdB81MbTuBq7ukaRNqP6h2hyxLhmzEpqieBoY2Ji2Y6ME5U6e",
  "key22": "2mjJgVxp3o4s4Zgp9vTmqqTkoh4BdLNos5q3JPRJvyY6aZP4XwZrZmq3AFi7vXh4sygEKXePBZJX8KpDXSayJrTV",
  "key23": "3pC58CLSpPxbtbA19EHteY5AqLuii91yeV53ttesEFfzUKXY8WqHCy1HMT1Bb77Kj7oc3xpnzpGAyrCAGV7G9PK1",
  "key24": "3RjN11eMeFNKaav6bb3LT8SWv4FhBFR4osMzX8gdyN3UW46GxzcAfoDQrZvbJs5Pf1fatw1A72PnDQLKnwo4jybk",
  "key25": "3qYuAXvfYHZqfaBReL69DEDxrtgmhDDmZkuXBgTrPmySha8e3oqsMVVbtdXrhzTFEPH6o7z5vBiHLSecP1iEkCRV",
  "key26": "AxrcswuoEkVV1DRb9KFnwqZiWuaMNbnyDBksHP45j8xhACseZnaVLP2Fgw8j8XfKaQGAitgrAo7kYUUFQYnnj12",
  "key27": "4vodRZ3YMF8E1WgkVKuP2Zr5qLkiUFMMe1UjL3cciyBxjqGfJtiPtjAbr9bMrRoXut5rBXwe4EAL8zamRhBb7zpb",
  "key28": "1rLF2m9BdBciQyom7rmk3333W49NLAuJQEV8XFBwDH5R1GFqjy7QZEU6V9wri5U3SA6ddq7k7gaHKiGKLmJca2G",
  "key29": "4DF8uURmqvjYaEVBFfU6oLVno5JQUzLb9Sg9L6vGWbfkGKeQGPUmeNd3vJ7ESTBxB6vidHP6Cjuiadhx93KV2H6f",
  "key30": "46jJboe856Z8uc8ymk6FiTJWAqwNcLkpCxkj2jrB7dTfNDT5Kk9j9f5j6HGR1YzGWvYmrGuu3T4Quqyo7mFQCxcg",
  "key31": "4zSouRXWwKPii2GiXavyPJMtPKEeLWyqAQoK3FiVpK4soZCqeGC4uSjtr6WhUEBSdQFkWNpMe5SAYrikZNzXTSgC",
  "key32": "5gxrkq98sbpA3JhCcFjyzhMprKiJQQ7DgmwiarMdoWmTsUvRhcU1kRU8nxLqNScTnPYFZqr3HXCRbda1mkiu3Bo5",
  "key33": "363qGWVvNqsCfXV9hZ9qSwwf5fbhoEr52PNZRUmAKP9BQvJUxXqaeqJM2eT4xRgc2HxK5zLQ1QFB5UTJQsmi9YFc",
  "key34": "2G5xnnfvEmE8AXxYBEZuom5jbyMyTapWC5zWKN8n9L7DXoVcomG5iD69W9NzuLtpqbCuJn4mY2uYSAKjC4Qz6Fp8",
  "key35": "3BWf34HmjZubiCKCNBN1x4MHpfzfX94CtcEcV1hvBXB1a4XL8eDjTFSd2yZKMo6imfbnAwfpDeDntyx4ober92uu",
  "key36": "5QGtrM6ENcSA1EEaTZZxKKnu2AM5MZqLCJDQnVkHuSdDRZRGBrfDAtYEuAqPY9RzprmSyM9NUBH6UFzBETL2QuvM",
  "key37": "wJUVN1xDtxEboFsw7vix4pXL8bW2Z4cJz15yp3ywrYLHd4HR5kfqxsby22i8HmWhs6fGapSaSeYchKRJbHD7L31",
  "key38": "KGX6JdhKCAZWD2AHLL8jBW4GEvCzxP92Cs9eaE8W6j6KPraHKZK2E8PxuumudepnAFo7e7bbe5Md2EP4e6trKxb",
  "key39": "3Q65bN1aga6x8jJNF8qhURqxpn64q8taRG2nm92SoUaC54herScUpwSg9L2iGTBngh88zmKY1DabCGGsUgD8GH1t",
  "key40": "4ms4y1Jhd2i7MzL5sNAfR52VXqA6ZzGDR3yDfjjJNmcb9xzonpPYcUH76uAoiaHCrio8RPoqsqiNWs6Hhm364NUU",
  "key41": "2WykuDNY19ApGJ2SbFgYicX6Frw8i9z3dJ8iACjxnXVZNDomZf8ipDp62YTYtf2hDj8L4wrvKbYWeTWWorxy94CE"
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
