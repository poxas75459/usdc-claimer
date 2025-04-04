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
    "26UMzgWsFKqkQeKq913hPFHLUFicYSbsoQuGuriL8tGhdpWSt63JPDA4xvkZhEo5Hi1ocdMbpFy38oGt1jz2wu3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwEunnbQtsCXzg3W8gYCHJhtx8B1W1y2y72Ur7GXrW3EJnM3uGXkDGZL6zU34QhKDzBDbWMAhDqa3zeysVVGY7G",
  "key1": "42BCsvQbFhQvgtwjk5CCgwPkNKtMcp2E3f6SfNmehzLPsXGV4XFm4oJnifJeg5ptByMNCHp63GpHEG5vizfsdNKT",
  "key2": "322TAthe2Xeia5pPg7ULwPhboPnaU4j6jQLXLQhKpfh1EJLQoqFjViDTwe9U1JCM1tc7dNbmKLD5rkHvnJshS6WL",
  "key3": "4oewZA37HLM3WKQnijWdnB3YpWaBY4GhhtmiTHAq9FSy31YSn22GnnCCP5EoNaBmD4L8Q4s7rrpWx9KKJEnPUncj",
  "key4": "XQuhoxo4MWWeoEVjHmW1TBnWTWqbQbu1QGYwjZnh8Dc7PywBXKjKX86Fy7MVQ53S8nUP4VqJZLFsxpnbSKCtCrN",
  "key5": "4cee66kMJwQookSYnLpMnPBEXeeELvAJP4QKTyaTFkaLdqzWTWatUbB6Jb9XkHZKhrkBrQdEhM9Thkt8FZWYXVKw",
  "key6": "3GqReWgf9JqtFyntScfAvPY4GpYwAhuAEcoizPRQ2bxDdsHvba9TKbzS8q9EHfuG7Xg4ny34Lod2uAh7fbjiWXfy",
  "key7": "5u9UrSmennZhs45z7bEfQiEfWYpJdp96ajDADN4B3sL2zaoYwBS24pb9hemjM4NoqFRwQM2qV6Ke7ojZWC4734iB",
  "key8": "5Rv93rqsokMUuN3eWVcvU6Vcp6JPWYLbvhtP18W7ZGeNTwd2KpxWGNJH6KYaPo8HJVUgCeWHFu3RjSPbJcr4qFoZ",
  "key9": "41hRxAVu93hhrNYefKqmenSLjNLL2TK4NqWNoxHuuwTN8QHuZ99vq8C3ebTdTyFyq8EPiJFFTxVM2dYqUkMPdTi9",
  "key10": "4WVQFAypq7eraHDAXxN7seA5ND8ppwCKUNZwgF1sijqHER3ie9zhqdnUwxANwHMYeaUJJdEGyTBQq7kqwy3QJPdT",
  "key11": "59nSai9Sa4i6jx7epg3bABjaK1ub4DuVDgZF2pNp3egbosfc5aFUtQdj7dPPDzZGfBhBEAY63GGadS3RqsUJFa33",
  "key12": "2aMSLj62bfth2or2AXak8P9kMfJvwK7SaFF8kEQrxX1LmSzE8owXyaSbevAEwbErPu5G6eFVV4V66swTmuUscr86",
  "key13": "3RcTxwFC3cZcpa5nF5b28zC5KsV69p8oog377e3StwzXi11VD3kzbuQvEd6Q1xKWSRyyH4m28qoW77oXsdSqfnAH",
  "key14": "5JqmkZihtY2N7qBEMXfppoJxqCJStVas1VfCq6zmTKjYt255cCYvweCPgAxE2VcxxrBRrKx3BD6j1StZutWjghEd",
  "key15": "5KSGqj77Gmpiob5BTuacBXtxdcfFjpSAbYihfou5qgCrU7cCv8XWVcZeRXxoJtzKBYpPoUTLqoAwFXKGS2F92YT3",
  "key16": "5sgy7y6354ND5Rdb4vH4oN3Q61sE1PzT11YyyKKxRfUAL74WhmuHT4iwu3Q3ry1UY2souk3b24CRSbD7juaPDpnF",
  "key17": "rRPhkat4g34GThsf5gosT8Y2Wv96HrfmR3yrvFaGbpAgK7VKNSkDfGUSLfQG8w81fNW58bjEjWyCYgZwV8TVbEg",
  "key18": "4v1pZnXw5bP3hnerEfDnwpM95X7YuPpn9EEe2SDfp4qaP2bDefAUDadsovx7EMjDM9nLepp3h8UPdHBVVEF77FB4",
  "key19": "4rmGWPaqGcxvK4oznH1i2gAchrpPNWudQ3AXsX14nP4TKVZSSXyTHEBJ82hWFmNqLa45YhTPJ6FFRzcNrEJebNuM",
  "key20": "4fVhoisGenDBPhvjj3WRaNr69oeG61ZbgncbdnB1WJCb7e1d3ASW5E9VfzDMmyDbW7hwtFySSgGx291akdNgEALd",
  "key21": "23PHMNysufBQE69bErHpWujCYDBgFQ3zpNQRo1s7Jh9Kczv1p88BhKyXJLYUiqC66ceG1vPGmVcGuWoyjPmCShWi",
  "key22": "5Er6R84rj4vFu4MLGCJdK9yAUrrerBnQi6qXFY6sL5DNcJ37m3P1CaynV5ccenuDMLvyrJ2RYSRoAJ1Sr5MCWaKN",
  "key23": "5Ak9UZHuPLEDBSyQMhB9rpj751ryXkogrMjRL1YxKExPs247FRzfYUGjxRdLxpeiPVcjwhtWYHLtV5g4tzZXbNZF",
  "key24": "2Zovq4sKMWJFkGzNeEWcjczD4b5FFRvNN2Jn8edDcK1ciuLWghMwBkPY618rbHBXNuQM4R8Dgx599UPQe4Z35T8V",
  "key25": "24Di5fweQJpVuoxg1gH9m3vXVj8WFPRVdEXDUPTCH6xEGfSF7cVBGqseTViBt45vBcA6QMjrVtooWidB2aVXHF51",
  "key26": "EGDNZUNCgwST62G6CRBob2TiyVVL4CRFhdhdbgJ1tXpiyZ7M7nXuAcesPaA1yCLPK76isBoupvWUyTimycMg25S",
  "key27": "4Xhr3rdkUtTimyziFHQF8R6iLs1oKWTjQmZA2hqBcJgap6AbCSoTkPTBz8VC1EwLLvPqPio4ZENf5kQPyFJHoDUU",
  "key28": "5d3Uh1pDzYKhHif5tWHyRZwj7MVYbxFtqCryLtw4uiK9xZiFGmHLHwowXRS3A2u6mMUuvGp8XuupwRfEtt2HFvk4",
  "key29": "2pPH3B14jAeBSN8dAMbKq85DrWgpcRnU514mwoaTY8TuaBgsoimSAHMGTgjdm7GVTi8eqQkQUDYUddMbmLbxMWgh",
  "key30": "3qFMHPjFG1fraysTFVaYzM285xU5Z5QobDDzGckgfpRcjcLyZ6ZDgMDgEAn8Ra7fB1ZfgH4M455suxXoJb1HtLjX",
  "key31": "jqSbF1VQqrmyHVxK24dXhV2v8QApWMu6LXguArX513c3vQG79Fpspn3MLN84KgbLHX6MikVCTUYwiKrCSTgTJAW",
  "key32": "4jy6JZoCvSUsZX3bXfpPuYgfgtdG4pGdjXRXd7fzZcgGtrHETEwE6no3mNm9cN6nicGd7oVRvACF9Xt9uHdtFsUZ"
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
