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
    "5BNBoniypUpaKVKAEvRoXfscUwfzuJYeiuamEUYxWuRP8u7CQu8F3SmrRnLqsu1GfMjQ85k4srHGiMcnGTyFQrhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFR2NR6hRJ9JKXAp1vv18FiQHuQvcobjPRvBkLxNQPcW5jP56LMrQWAjtXUDqNEkkPjs7mB1v4dFu94wcefLWRH",
  "key1": "4C9YKoEjqiSWmJs7nYudi5mhhZfYabiA8qvk7AUM6bJgDCaMWTtNFvAjYgSnqDxhqypMRhBY5R3ToQJvpTiuz5ig",
  "key2": "3dzbwriykpUMQTE2BkQxeUdT1mJ7qD9smZ2C9UW6C3jZ584Bm37Hrr6umeb82vkqsKhjfJStJR2et3dBsdq4e3Zc",
  "key3": "uanFKXvzFBNhxPWPHY438N1nwaCTY4o8iGHgGRuqHbdfVeYRwbbzyPpKyYRpBysJ4rhbPnh7cNrGRMowSBV24Sv",
  "key4": "3iHbz2aETNkjkQKVJPuwB9vuWLMVMUzjF44tHiXL37UyjRPjMsEya71Vrsm9UoNB54Qs4jpdxPx2pZBY8LbonCF3",
  "key5": "5mEY5SQr1PSKGjyqFadwv2h8CrQZssntbnQk2t9LGz6BfAs5fSs5vPLfWLCVjm8L4ckjUni9mNCCgN48BM9iExmD",
  "key6": "4YYVTtY4hajw8p3mgXmL4f3h9VP3c9fqkLNURhFmLPYDRfYKTq6gkwkcL6ZwkjFT8TaZCu977m4MeP52vFiv4EjR",
  "key7": "3Gxp3Uf6hUTnBWBnNbp2j3xbkixTWpKno3yLrPxhgzS8rn6LYwNRpe3RAHmkLyns2qnQHYZAs2JjVf1skLLLuYGj",
  "key8": "yxNK3xZvs8LBguU1ctgybbZ4vYPRwWZA4jMZFYGNzHFaFy9pupP8dPVuq49wuz3CQ1BfN4Ek6opXnwVo4wkJ3sL",
  "key9": "5DPfcpjPFZouX3N9FSVyscGF4jcx9bxAVL8sy2dJHzFx6wP8oa2Du2UzANYcYmTUDdJiw9b5kVtpEXK4K5nSWwy8",
  "key10": "Rn1SYa3PfBuxEB6q33xwqDvPKdvvHHUViNDNj7jcBefbJY8G7EBakQm2zvLFo2zhXkp8iGAdydx5fNHjkwiX26i",
  "key11": "3YX6jUyxpwkarQ2bxkyufXgWfym7RDVrK7nf8BsjRo9iCHcPT7UXBvmknvzt5xCNjX2eyFMoJiVNQ7BMDYCHh7Be",
  "key12": "5FNYKcVbT2qtBWBaCsYfZ6QW5nRzGH78SAcXmHwDTUpQ7QH985eGwK7g3cicBB6PJNfveBHy6BNFq9shh1EW55Ki",
  "key13": "2V16iyUHfFTjKfvr6GFYukhvDJvmbTxCZxyznX5Rc2jwUNqb1dUUp2cCFTw6hMqxaHX9tcbnYAFmkeMveNm6vury",
  "key14": "4wSGTWFLoyzfBYHseUMnPB9oTjuiAyWqhz7xkoXyKUzyAQt4HNhX1ZZ5bKgv7vhJGR6hXKaPf8Y9NQQ5jDhYoCr8",
  "key15": "34XGPL13B6ZbeDmJvJUqJRvtfYBfMYVyzssbiphakq5xXXbe3ehzGt1raBZAC3RMfZ1FLhSonqsf4SBf5FtGKqPH",
  "key16": "2pvx3aYRoeo6z2NHH2UvsERi5JPwA5yYhtGNQQtqqi3k9ZVs2KubfXTG8KehdcrxEBYrBa9jYMuThKYhbFaL5qdS",
  "key17": "2gbkpbfpDEU5LRPWg81PWS2uEdzr7no2ZdT3K4BkuGpxgEXoG3WBcdzxzY7Zgo3uBDpzTFiaQPbKVv4r8FeUFwC",
  "key18": "5St4td263gdmVLDfPjegPwHr1JjZdmhzSRpm7EuXcHvQs21yqEz2FW95zrck3aNR69HDqhrQMEczdhiwnKjBNa75",
  "key19": "123CMunYwx9DhXLfcKqm1itoAuLayE1QwAMUqfUPkg7ZfSAygMb6pa8hj32NsBSUrSJuokQPZ9T3QeL4dse9JFFF",
  "key20": "2rAmAkseYCm8VqnFgyii647kr6hZ1qDgavdwttA15ZdaV4XDRX2xhyNrWnNstAG5YSgT48eydMQRsyMQXed5LvXS",
  "key21": "4HDNXvMUBVpLqEiAmRFiP5rc2fBVTkzaAcZfBAU1u86EtMZdnLYasgVBx82rfZdaxSsUaFrNuat5oZBhTrybqxGQ",
  "key22": "2jg8Pe9LX3PmfYZ6GwwEfcWnUoNBqmAEEEm8gWNwoEtKd5kTaNtsEXvWAy6pVv3HB3L6vne1w1giktKur2hgPc4Y",
  "key23": "3iejqtnxmk4ncemRiRgNkV7X5LRU4iNkdHYZJnXx9cMGDF48X7Umpecvim1FhR8C9x8VuyQJk2JtCTTG8vpQyLjK",
  "key24": "3ZqhjPKATMeXHYv6zPeUA4u5wii4k3oaSLHRdSS1vxjbk9ZtHAbf3c33RVFMNecXDWQhzUqUT7r6WwDhawyqFHH7",
  "key25": "3bCJdGjxans8kA6YsVbSbkCf4VB4eL9gkEXCDrXkGZikGQkiahrecDkuLcwqZahEHuL9vh8gjUTkm97AAjNaBVaC",
  "key26": "47XKVXkCqXV5pztMHCGM4gN7NaLZmvkTcFrZDD8vKEmtrmGnjHSCi8KJ3VSig81KrtoCEsxewFX93vcaiE9z2WV2"
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
