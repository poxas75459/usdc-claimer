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
    "3SZyjcbryypdenhQPLcgLxUGj9vqChpWZFKj961jcgdPHoGBS7oR7yT7TP7bwagswxqc8WD1Cv1ZJZCgcrNRzad5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yM38ztvxkjdHMHiKHiSm2FAwDxhcPYkayus5fsu62ZM5pxT4G9SPFKrYtBbSUkanywk9s77qXz9WCNK6inxpZFi",
  "key1": "3mLG8uBNfVyikbczB4EpxrqDGCRETj6fiRppom25TMBoymTQ4ZyxZnqKExqHYvwQF4dDkTr8xVxiWLcRHkFmHMbo",
  "key2": "2rFbs6facoPMRvxNJdrYmNbMBRFhxPJr7373vE82LgDmrwQzFVFtDXKUKikTe8niTpqKWR4HTv3GvGrLoj8ajguW",
  "key3": "643gEMyZRdP3mLGqr7e6La2fvMjhiV81V4ijJMRE4X6mUqCPrVohSufhDC7FQBWRZP2d75oazLsbxLR3pbJiJqXg",
  "key4": "3agwYN2L1eAvF1t4HZBgyRdPxaLzdtAk9VdDPKP492vhNqsRcGoWBQB6zPTGz4EHqU6m9q1JfwBapPvqZywYYdSq",
  "key5": "3bAtd784nXRGM2Dvd2xN6skWcY5LJXzmrqy3941WzdNRfMzySC96eQT5oAwYRoAbati59HsN7iirjdbFt6eh6Brc",
  "key6": "4v3wrtR3VpDb8oQdjBbaf7AhzabSPoApJTM3q1FeogR3g2S7vnGZDnz9zrkx7gDXNthXL8nnyX3PmNcV1wb5w3ej",
  "key7": "3Wccv4ptFWtUjwusjuMzS77TAfbgTECAmnWbBBvfDsmi9tWRaM4x9QTnRLpJdwpwCPWyNC6JdVr1QqyqxLhDhFc",
  "key8": "5qpRQd62wABGitmkXXp4p8RcHu8Qcyp3RXEj3H2TRBDvx2P9AnUsGVSbJ3re3Rw1BWJAaxRZSAQVNfE3PvkYWGzV",
  "key9": "26QNZ8s7qNSp1UZTZV5cQkY6bxsvN5cuCpTmfu8Hu8pPxzfVPg4B3mBpKyKqxF81ZsmsktNikKfpC7XsboVupGvx",
  "key10": "4NZhjGq5EQw3GZQRXLznzFeC3gJF6m4aj4cY1MeYw3p1fLh8uQ3xxK4T1tB9sXR89Ac9z3Vac4yscHsJ6mBLWGXP",
  "key11": "2cH5yy8mynTew8A94erSqgwMarY7PM6JAT9FZMbV8XViH88Gp3KifSHEZndinVdhkwD3WQ1YGbst1rsWZBZWTnFu",
  "key12": "2waUcSw6GfpcnHweAMiTh7CDmJe48uzWrKi6EisJG9M6JyRL8bg5i1UYoeAFmVdcfdAmU9ksc7vCcssGbcyecbkc",
  "key13": "1cTy6AeMP9EgR5NRa3fAG9mMuJi54d7173X9P6dHAqrFKNvNN4sW3yjmZwYRzE9XAKzyLpNDSD4njmNcTJvZHA9",
  "key14": "4tAGTFv8swCWChJtJvzmEuKFfFwfgdVhpzd9G2diYErUBDo4fGFxGkyLzrWpW4NE1A1mf3NcjnFsE45duTyshCkP",
  "key15": "2Ak7iX46n89tmmov7QPMvKU6WT2ZAdpPTrsVbyeQwsSZSmPGFUb9LdbG6Fm1zn4DG2iGN3sk3pRoF4bN2g32rndr",
  "key16": "9yyArUbB8H4WWQWEwZNrxHbcEufX7AGzvaYxXs5vWc7DZzWy7SarSziiR2M1AwZ9FuDy54c3gtqdW4Bo4ew9Z6p",
  "key17": "5apsa1CN4SAKRokfwJeMmFcter6VZT4LDqP3a2gWv6CQDAme5iS9prAvoMbHUvm7ScRJysrXuL1nY277i7fj3y9q",
  "key18": "2udmqSTSkrsoUoDTfWrwHCcGEDMP2AmGm5m4JttLz74Gvz5anXJXb1yw4UaFk6b56U3qMu1Kuy2u77ed2GjcTjeM",
  "key19": "3NYKs9tPswVN4FRUoFMN8aWj1tBwvrYRNAYy8bayMUEHebRqnT6qiQjG2wDtfox3SqKyDHrjnUZTcndgTszULHt5",
  "key20": "4fJJu9A7HaWhtTMir2xchBWPC3FKDy77ioLzupZ7UkogKaQeEzRUFcf67QnvbtQwpkxM4yqyz9FUBacdZhU29psR",
  "key21": "5GRBwGkS1xBtATsKHvGZg521Uj6wxvytzbe6TZkMaTpCtg5AM8GopMnkfMyFS3WKY345R7ZLqP2oHaJxJKY2BxCN",
  "key22": "2A5CQdtV32K2nBorhon6fwCtRp28QWTQGetKnBfQQsrTURwCkgScuhi8CbUXTHBxKoC9dWMTwh9UrYbkgpVbyhrt",
  "key23": "j8KQKTyLXCgmqbRcpLo9UvK51kho2Rp9UMdKG31SHPRq6WBH8v88Q3KxnPWEfHmC1fT6tDiUcdukDZbP8Efhzuy",
  "key24": "4t7CTykCYDELr4vdfW28F1xSs3p49mdJKHHopG8oJP98wzPjJPnZ9tPLYHE4A6ZHHWPhhxLB8Vma5Gg4L9BJQH8H",
  "key25": "2Y33BWBxjWoUJhi7mu2cuCV6n2qZ5RDXkWY7fRqNrwdEFSXYRRUEZ2nc8jBATkDKmuG3pL1naV8sGTVAF3BMfxNe",
  "key26": "3R7xK3YUsEXABYnuPc2cZ4JKRNqQM8mjtkMdFPtZoc5svYRW3N2iLETQMC6hevXMXQu8KBK76Y3rFDSXn2Fysf92",
  "key27": "sDgcKw6bn8myx6DLFmEB98gFJCWiDrhRxJ26YQZ49NSYtrF4rkxuqsKwtr9s386rriboQCbtCqT8ywVKGBwRxvS",
  "key28": "U5RgpBKcr8r7AqxwiCJKXRRSk3NpkeavhqMbf9Njgww9E5GTS41m1Y5iMdMBpSnJvQMSWDiLfExfNmMyXYBr1ju",
  "key29": "d5FFw8ztdqBbzMARvJEjXKCaEvNwNYZC4pfeBXFfGhqKWGDCc76A6uMww9DkkDrtNmoD2pd5WtpNwu1GEsg1wXm",
  "key30": "g9aTEekdRwDG2rb1yaawg5XxqwGpScJN8NMk3ZvQnBChkz8sby4xYEDohCff4ikzdxWBb16YxfUC47A1h113R95",
  "key31": "2wyHDDZdcTQR2QdQru6iBD2ZmoAyBFy3NWcXPDYXP4PPpRBn2Bk77QsCSz7YmojunZnKqP3i38Nk7CWjzkbzLbGE",
  "key32": "31u6QTi8jY8ax8Qy2iQcknBzvGFKZ7rg16dp1Z9a8Jkzbq5vL9uZ4pKCBM8hmzS9VN6VJdvfAdeNCZqxhWcHzRrq",
  "key33": "2kXRbedoJ3EYwh77x6StYAy9RjiuySxwTmogS3w92aHqSdVk7kxkNE6s12oDyVFyViRpLD4aVjAvYsueh7fbe4Fa",
  "key34": "27jZKs8i6pt4u82xqKvsDzadUFTMzcrQ92226bcgwJYog8tuzUP6gqpoEvK4MhmtYdhraJiWnGCMjXdMN5WUJ1Y2",
  "key35": "5rRxVDx58KvJm8KZK9qTvsCXcGYxqDfBRuq6TG9DtkZneNqJSeVsBHam6fdN8kw9zFHyXmBdDq3G5FL8Q3hW3UzY",
  "key36": "3K9T3uM4xEtNbZaL7ZNdueMvfSTLSPQSBYZibJHAaGuZySn3TCbkbEFKrPw54byYGk67CireAaarYoC9JpBYWbCf",
  "key37": "3aXhxZ1Qug3Aq3TCGojnLMUfKGc9oQgVsXPwVRgtoyEospbcNiiwqQzHW8cYeFJ78vHCUjXhSvrq9h8EPS7B8uMa",
  "key38": "2i2RcfgRq9zkMbq2cJnx58m7HeRTPBKBAxuWz66Nrz93uiPSPD3aS7dCzHGmq78uPhBhSLLzUc1fdrfEWSK692he",
  "key39": "58cWrXu6EhqG4nzrLmAjZf9dBnMZ3AzAVqdXJQdxbosm7GGRXFarhh5REhdHqKrUYEdgTd9e4ipscipu31hFZfUv",
  "key40": "5VWVGWa1hkXE2XsK91UioEckRvMUpwEMM612JW5QYVqyjbHT4FyY9tKyqXYPKqe1x8EaN6oFKSdkaLy4UuFtJC3Q",
  "key41": "vt4QUfbzThKnNbqDKpYcmxJU7fzxLoUkSZtR2D6VJQVSY5YrwXijjaq9DWvb63cXKaCVNhQSiv4nqA9UpuQBJH4"
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
