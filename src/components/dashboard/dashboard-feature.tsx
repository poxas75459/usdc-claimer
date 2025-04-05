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
    "jF2WtcgnFQMcRqfNgf92D7xQoQUuUW1aQR8426w1hhPYRHefo4siYca76DYUqpHr3k6sD1q8EUVwhEBxRs44UHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVcqgZMyTGr1QNQ4fsVAGBBHTQ2HyujCzJDCfr8Hsmczt6FHFmRygFxXtTXXkaoPpk1tJTdYWE1CxmRyfDNzeQH",
  "key1": "3Z3YG6Z5M7cJG7o2xWAYjZScvgjx5AF3iteRp7xsPfRohVnJCMQohC7kbg6c1DtYNzk1ck7uaxbsPZSNLHwWwVk7",
  "key2": "2FAj18F8p837BqLFKrUszHT6kGUCukeSgHmDPdvanyzFW4xmRzXx1XytuGwNrxAveNLemAwuEz1XeYT8KECg5uRY",
  "key3": "3sj6Eg94izfofPDSwTQC6dajnyNoBsJcpX1cKT5DoSbKiqfhN1ac59uvUSXq4bcSBaHbhAKqy2EHvU357a2EFaH",
  "key4": "4BXsDhFWb1HdGHLox9mAeKGagiLWMSN8pPdmMvRWfTKkXfG2AYvGhfefAMBZYuW3r4BK2yMGqAQWZdZDrQu8FgL",
  "key5": "4Fh3PDxopdPK2oTmQaC5bGCCrx5KtRtBftMTyMpY13xm99GwUuL6ZVMYbnCpMD3bhLQQfevRrvhXdvw7YpKp2gQv",
  "key6": "5Aae6CmDAUAFmAAgP2S6HbFt7RV2e3RKpuo5DNtYqeKnJSndogz3p9bmUxV3uurKax4prbiLwpAuXuCCytPLnRn5",
  "key7": "3PY8HhPUaWByb5jo9a45K5rVeyAk7eg1ugkUawESEkDLdQKRKwhkJHBpZpESS7EFhHPySrH3kFJmZFJ94as1BASU",
  "key8": "t6vF6yVyz8EMDPWDme8KhoSbhv2QUJU78PcocDJnusN16iVZfAavpma51dxTz6jBB5MCGXegmQh8jnMyC2omNY9",
  "key9": "oedQcVM8pgqoYGoUgWnaUR5T8DpoGkdmBZABuHM3StuhdZ33YLTsKwGBfM87N5tPqQqFmTG2No7E18UvPBifoXR",
  "key10": "58ay2577UwbKZdu1okGBJyCHMw5sZPnRdNgvejdHy1KCV41oDeNoM1hj1MjV78fDpawrXHy21L3oM6e4uf1ohf5o",
  "key11": "4RpxUeTJAELiHz8B3RHXFpKZQ2d3YbWxvPBMoMJgD5TCSLaE5pvmqxFfgV9fLjhb4G9ShnE6b4Qm9efH1yNH2i5f",
  "key12": "4nzdLuB1gHM1raGy2uWaCauE57eGCW85nFJn73eAV3cUXRSH2Tt6wbLsQbhPtv9EJWjUBbaZmd2uLjmxwcQYL4UP",
  "key13": "95adchZNpvbL3L59hBnr74si5f3Ujwq5evWZFCQnSPcM2UCqoi8tyx15hfVETv8Pf3hRhnibzt5j4C4TVDf9Nvo",
  "key14": "5JBvbPFR3bF4N4Lgc4y2SZphcfBHMuenYkJAMk1VeD7oKnv1yYoSFT4nAiFsZ4DB4abbFRLUcry9btue3xeeNvYn",
  "key15": "5Qy2qdb8mBCH5JiHAPBtYikjK74tZ6qnFZXLHo6Yaj8bexofN68AxVUwAzZ65UPF3w3KNx2FKqw6gnuXcAPDSgPC",
  "key16": "5gagTWyDjP1B1bHRhv9LMBCrm7jJU3GmsPTrfiDAQTQmjGru8AuDox3BULrwDZCDtjrqzMKU8tz71F17aNHREjnh",
  "key17": "g5DAsNWEiSUMwcnuH54NZU2ZBp2X3mxFczVjy8mWNXerzmmzsYz169U5iVsbw3j53RWM4fbtaGZXvctyM2AFtXZ",
  "key18": "EaYQk9zKkoNRh3gRRmkBTh4BzihxGGxERHFF2mR8yWnPU4cTnspz6RLGfPphV6CaMZY6iGWVfq9n2qkbXoJLeUb",
  "key19": "2ZyXvxjAZSAxe7XdyZZXtvvdPLeqSm5RPutV8SXHeciE4dSiUDe1QvNJdkwi8ttGndX4fhNi5zAcc8Ti8RYhLC57",
  "key20": "4iFde4SSS3SKJsqnWJEkAZ95AsYakmR89EB3KKCvWT6pQHgBpnHkJkVy5W8wAWv9aAJ6jPBqfMikEZhoNGjcN4u9",
  "key21": "3DZ2L5vJVaaPkXWh3UpN8NxSWeqnDFdDSSzXwiduWniBMVTLCbBTthXCJiDhJtyScqGKJJtLhb7fkdydhASZgQkg",
  "key22": "2mCpp6eqinxRbhU6SEYUzLqxq3YVzh4HdYhm5VXgVJpxA6hXoiKXuwQNBraFnxRu7rGS5ZjKscy7reehvB6Zp9rP",
  "key23": "5UxDAF1GJVypTdg6ES2vQfEFjDfVvaUtGpnz1FoTpHsxKmenvoTjTzBWsBriK3L8nfPi5vZpB4LsAA1e4BdYK6HK",
  "key24": "3SqqVzJfQgW4XVcvMPLmY41vDHa39ptrBwZd96DHsvWrFLLVEJ84BRxzyb7G9ES9v5wboqx4WYBBL8JHhsGCVrfm",
  "key25": "wheh7QkbvD3VqNqZvkkKLuM41nocwPaQhEwmfAw6X9UBpsegEVUv7sAGyuDKP4kE7kmB3iEgoXTfXJ3cHQScTEm",
  "key26": "58hcp24iMhCzmSwSBnc1hsdYL41VF1DPVVyZfJgyoDC7YVktTWBaoDdVryS4aBuFdggqbqd6KiL55Y1GqLSdAkpt",
  "key27": "3hC1fJYgJoUhXZXKWmwLeFb7waHbEmzqoJoJPfnaG5SRohXWYMndmJ6kv3NPgMc3wfdjWe8T4LF1AQ6Eo6LXenGx",
  "key28": "5XnSw4wATY7EZaULL6CM5D4J9kF9ZpPEnrLpUYyTBryJpEpXZhEbgxHEaDjyAjGiempzkDuuH6TfyrErq1WS437R",
  "key29": "5AgRVFcEbpj4pYVVhgZUwVv4Gqs3Wv4zqkXzUsJWfhnU83EFraTtqRp6xDAnRWmHyVH924Lv9axWZGVBLTdYFafE",
  "key30": "4sbEDC3z5KjFSQD7dezv19FjPaDrUeVPQ4ZBJNe5XXAfFkZpMkd3AGMzEfqnGX4cAeau5NG6rt827T1dnnwVupR9"
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
