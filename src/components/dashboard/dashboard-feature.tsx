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
    "oKguiUPzPAK7CvJtbE98yHtZCt3zNXkedff2tYJbG2ZpEeGfz4eELRANB3JtvZwLqXfsqvrbNTNFiKMcB9cir8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWwbbLyoAuWCu64NjGhcWEs14DS3DDfV6Kfrtez4mjbPpvxbJee6b5FmHi7ny4XCR46Ytwrgs6jQMk5uheYPMa4",
  "key1": "3kGZCFZSqMVb3xhNYZrkKpGY32csW13MnxpkcozausxFsf82AEYfn4JMG4LrPCx6pJhJ58YQTAizNiHVSzm4sLmU",
  "key2": "5gAF37fqGdvaENB3QDWo9MuSS4mhqXJXQYDMkkQUeRypbw4US9AGpKSCi8hSL3DbZXMbT4JgdJQ8zih58mao3gxT",
  "key3": "4gVkiqTXc5NPrjxfMtnLJpEL4shv2SvAMT3HZCbE8vHBj4WoLLfWjRP6x1LgL2JSqWeE3jdqTup71r8bULEquyR",
  "key4": "4Qkq81xGDJpyC7bPJjP63PWMSjr2Rmy8cW97PbVauJf6JVE7Q9rfZcgBtdkXHM5cXhtysk7vRwYXp8FunLQWGodF",
  "key5": "63YQey8vtCaSECefYNojWRrSz8UbKH6oHMvadsJFPKA99w9rvzTveEWjaX4EzFXpN3zE44qCw9o43QLwKpS1HBx6",
  "key6": "3WhFf2uV4kN3VmnNaRPSo8NhjAhphvPMDmLBr2UTFiznrKBaKYAEgaCFhT8PYuy2BiNJDXDs49kWXNr2GuA4Bk2V",
  "key7": "RaAAdcUMbzdgtTRSbfoXe5mNfmifF1G8PqzUkr3tzo6xca8GQ1AgYdSCxy84RC15SXKedgz8g6aQYFu7w92WZfu",
  "key8": "LjBwRKsFbHmutQbRqeiqV4WMsVhnid3NemScXh7bAySc9osd5HMwAQ1WBh75eCvfmYfCAJieR5usm6vSg3unP4b",
  "key9": "4FgRbW1HpBCV4iPDrs7LH1m9vg6PucUreadyWGDjKtE4K7P59Ekp8ytit8SsV7GA8C79xFVoeTmy9szBYi3nAsUt",
  "key10": "4RWNB3FKGErJaPUhZMybYHKXY71KEn93tN1Vd9mChtJb3ZzGcSMFLsvQ7Emqi7d7WzP6xNNEMx3gb6d1jkKmgBbF",
  "key11": "4LMJ5RsXRLV3ZMHbQkvoBoZzdpJEeoqQ4mWQz3u11o3hqSWZiH1zKzFZEG9qZaQG5inKuv6aBNxP3zJewqDYEAzc",
  "key12": "2oq25ZMfkAiB1ArsCNCQLtar2zW6AroF1cnaQDKdphJKAZdw8v6AoirTZmL6SrEZLLsmPFKESnKsfTwJpi1EbMNr",
  "key13": "5iAtcmtmUDqdZaUYmg6hAG63H82cw2efrMZ7pJGanjh6N5LzNTQE3AwxqcrgZs66H9KQ3nUM3k7TmZKWfPP7kBhc",
  "key14": "295395bgBehhEMMu5QM9DQATeokgXNgYCHFTEWCCJkV1maPuXAdA2foz2qXDDZiJkfZgPVQddDouBtr6Ti3kNaTh",
  "key15": "3Nbspac8uqjRtEMT6rDSuq7HsQmjSkukfgMC1JyVgsoPRduaSYECeqVL9y3Lqs7xM3XA5xi8kruEbTBkF1eVsFz",
  "key16": "67pZ2Nb6SzUx925UxkFiS4oHtEavqJ5nH4bWppSh9zuZxXtwxcNGZy1HhVu87QqCR1DrRMyMYkh6G7DUr2Prvj6s",
  "key17": "4DSHCFWm5B6f2VTsz8h2njybrnqiYq7ahVxyNzVKXKqrD7j9zsmEKZNn1KN7WxdbHjFm8MLuMnxUcfRuVJ9ebjtf",
  "key18": "3FYgRy2rmtza4JLCqZ6UYV4KjEZYnxe8ECJdemJgLrernMKPREdKZeEZyezmvdnLkk3JBQuLQ5vXwLETRvFeBfK",
  "key19": "4BrHmhjE12pueM6PaGcsPK2xCgpjA7aRfq6U8UD9ctwkeuHV9squXFVCbWYVB39z5SUGJLsiGpJWcwKnTBLL19j7",
  "key20": "5ZRCNTg5JS7jEpPbkALQJC5QFYtumjKardMrTtQrvFexyqzNXxDBxgtmdELdg1dsfY374CZJ3TvR3QcXekB1XKcC",
  "key21": "3jSkDvSMHHmcoQ8enF2JuihWcopjbEJphABZJVZD59ptUpnfVSqm7ny5Xw6LMameUjhdWDR8ywmxTyusXbNp7Ki2",
  "key22": "3qB179AazrcedrHAUkbBhwvSPjfQVQNjacLcANVZv9S9tWvoHU19KfdPv6kAQFDJKWtVMjFuaSGpAqKyaVwEyMTD",
  "key23": "61Mt7F9YEd3CfTLLGYt2Xoa1iBzgaYqWB75zU4xoFXshdEnbZv56DgN5mwPzL7WtSUhB1Y5vdvkUyYCPSUpazXL",
  "key24": "49dxoifmtT8251C9iPprLcmKDo4ZYaeBXB8aneU7KqgxSwjGipmDCoBFFWWr44U9PhynnJr4FXwCWVNpTm1NuFUF",
  "key25": "498QMAeNwCAR6pUYRtQkxZeHU9KzYhHxwSnEE52fK497VzMHtCiEM6yAEgKBGMdJTR2h4wRp9Ei7SeMbyJCnPXLm",
  "key26": "5kCyGARPeMyNbFrDJNNPj8jrGzVWsKVWoAUM8NbMHmSS5HPCRRoqtua9UxH3uQhk8dYb8bASYTUwLt3mVt6STuis",
  "key27": "4c6LvDPtpM7VqBvU9jHxgiVpL23hS1PWEq4LWyqSivyZhTPSAcyaHp4vp4iZyp5LQzLx37WNbNVKWZqNkzs9eNn3",
  "key28": "53GtKjH5xjTLq6onKdqKuhdCmqJWeuRYWQrLbLWN2qkuvs3uaPrt84sHHkY6k9uLQcxmgeAB26ty53ByoYi6sc6V",
  "key29": "3UtGR3rRUqfopecXH4JrhuM2qJZ2HeGs7wUDcRmA5bfDhQ38JS9kh6mExxefAndPG6NP9y51FoC5kxmCuc8KYvvf",
  "key30": "nK2xsFgbNjcY8AhaA4TkJ8iuKu26dC5g4nrwmW36JtAofBBNGsqdQJyRAG17V7T8vmGnytT2tf8zdPUfpD537AN",
  "key31": "5xgfLf7FEtoMZ95RWdMK5hfkPGHtkqbe4Ek9NizPkwT4Gr267CLXSwaEJTAK1gQDpFsro8tZ2djaSieMNuD5QK3E"
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
