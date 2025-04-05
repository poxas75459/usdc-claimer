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
    "rSUf7jA8qkZXNwA3CRDxkuBPwCm1MZFiPVwoaCxfzrLvmqi4d5jqtkCfRWVHZX5nrumta1GJoijK6fgWpvJMHku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LwVdeDUcFbPK8vp6wXFHbv5pSf6g8o54VPNh4hjrL8eRNZA1idSKc2ZaiktxzVp3sJg6fFjQ98n4XcWDQeBCJDF",
  "key1": "2crYx1SPPx49KRsKhki2TpUcrBV6S1yE282EHbGFfaQbQfk4Cvz4UgJ5PLyfncqU3ECjT8pedb7MqdFGk58QF644",
  "key2": "FRMvMXcHF9RrXZjmVP3CH2D7YxDhUW73PKBkoGd5awupY74wrfmJ3KZxaqEx5vAJWcr7YVUrVrhWtSQu6A9YP6S",
  "key3": "WQzLd8fSZfmJfESmMpyWzpxn1kfhiFZJY7Q9ywGnYZKAhpwpoXLZTrXTdLXeievrjjKs14Z1XQyc5p8GFnGHHNL",
  "key4": "N3CXcY2Qj7U8KCM4XpyiWV1a7SGrMTiYGAwZ7BUDmPdWdXHvJToJZchDMkm5iPUJEDZWsuHPZQ3G81LtZqWpYVk",
  "key5": "i7rQd9ZYJoNdEf54EHe1sgrH1YRivhY9aSrx9o8DLEabCFJ1seFi5WM3MNRkLZAAhZdizFDAA7GgM4p78xv4Vpo",
  "key6": "vixrcckwj3xF2xq24zNDnZPtWoAc52Zt2zQP3YoqZ9ztgdwL2aVHDSWBUVASou9XJdYHPQQaHRPMkCQtPcvKNfg",
  "key7": "5HqJkVzP7yBD5av3XiX6CSGmGwyej9f5BUvEfCt7sUriykQq29kmYrrTrNuLzDkhgPYEh2bhCwwET4ZmsvZYM8Ax",
  "key8": "5zkxk3d3tx8xDAKKGsWaQCXnmDjMBGWzDUVhMp7khBEugSHqt2iXR5WBb3rudnob2zjut2v8V8rbQ74cjH8xh3JT",
  "key9": "3mi6pCQvC448QLFLX9gmLXkk9zGHvYbta4zd91xLccNb15XhGR8TqEZ2yQzG88f4j28nJBtyCeYde5oDuC6VY2dT",
  "key10": "2fgmXCSxnQr8vAS69dAvB9yXh6thBWWZVH2tYchW7VX5vRJQ3ffkj8gYWxmsMKj8hD715YGDu8LE5kgNG1BxW4da",
  "key11": "4tjc662jdyHRxYPV2v5sYQXYJEsZBti89echcppow48LR9NtFjLpiSEH6LLTXcTW9Yf6SP8nUireWXkPoCqKqvf4",
  "key12": "4YiR9pjwphMLB3ddHCxBjLQxxq3drNxHf31czkBREitnYxYHYLUfMNBwS3Kqyyx5jCSxXxdVy7McJVHCw8RRTvMo",
  "key13": "67PoPS3qMwWevC6U2Y3KK2ADRHfmFTjvvS9Wv264g7A5mKdanCrkT5KaoNGbk7eCDkckRcDS6VBodSTdwWGhF5GT",
  "key14": "4PvxrtqAYd9DqSoqJGRX3DU3pZsSxYCXA9x1Bdgke9pEA8WWquhtNVxmKu5qWPvfFfvEg5WcziM3uuRy1fRWwHsB",
  "key15": "5uDpB4p6XzhcxPDhoWY3xXPwwiJNcwTJkxxTUeTVZ6nWgY8Vqe6gQJLegg7Qs9AYvtCtGQdViyu9Mns7uk5MjFiD",
  "key16": "2nj1uLYAJ87fYT4iQxhCLFCZgrGSyTvuLxU4BjrUShR9DAqW7ym9S4EjqR2r3ZwbMxCEFjxDuDpgvAD5s9C1HtXc",
  "key17": "2dRKm2rrmZnDusAcQostW2DbAa5XmKMG3CW2FEPymGhWuRrFq662A4mJsa7YjVDL5mXyt2bg2Pp3TPK6wZbyWzyB",
  "key18": "2WkMeuYz8au3sEckAh5NVYDRq8GNezmWesSUxJKPW3kb3SxnRihPxMgPkwxLNzesnYuaPhBeKhNgAEK3Fvqp5CET",
  "key19": "4AmB5maKYj5cH6ryZoQxqb3GEX71Jp8GEy5sixsJVLtWJMknvUtKXhxSosoC3SQkc6hy5TzLY48xaAMYuhNcnLjn",
  "key20": "2yYtGKUzcgsHfTyX7HNzgJcrDTqAhBGpd7qKVJYiaAvh4YQysGeaoP2FGy3ZEtHmjPkFchGvJWTdEhG2LjhH4jjn",
  "key21": "2vo8bseRwj39S6oq3TSxqVtMcGRXVcdbL6QLzh1qsum2QwkS79Yw4guEhsjcHWqSnCuUD6BU13nzZeskJ6VP12sp",
  "key22": "2YWZLexs5NS8Ba4GDMPGD3ro1o24CjdfhczUqZzdgWvDZ3TaefLqK1mYtDHNGhagSgRDY7mf3HPyn4PdraoZshyX",
  "key23": "64BeLkKWmxWAVMLMHSz9mRrCjeNvLgqEXryVzSndEkRjhv7wwE6Yv9pCbKBjzK8pZfAuy4rw4rjVWnpVH82qNBUX",
  "key24": "5dzyV5esgmTtzUjSddpJf1dvvZYGvpVCu54sJpspi9D4qUmqro4QSYLTTc2kAdnfVNtVQDiuTDe1J7P7xy3VZV3j",
  "key25": "4TuihUxc69u3v21mxp9ZTc8UhcUriQM9QqZkrvzhAM7NXKLw1j4ZU1EZ6JZ6A5yLspnBxRG1h24oJ6owMCujXtVg",
  "key26": "4regopJG98bQJbbxMUZyhuLboeeyNCXKDWaXHqabmvETYkwwUYxivRE5yUtmiuh5e59UKE6gh2vDj3s4Ed3tqMc5",
  "key27": "63dMZHpgoh7EBmULjwrjnL2bbCLHwDA7oNezK8hHKAXNbZJnuEJei6mWCn1B1cPpS59h2Nq5MwfjtiEoaGVayU9B",
  "key28": "5KN5KEgYhTCJVjJ9zDEhgn9vzNbpb6q4NLUqRP53QZuCGBtwLKF7aYduzzqDAj43eCt39tubMkkY3W6JksfkR1Hz",
  "key29": "8TyDY7F8pGioHC6yuvi9kbpHdoa9KTaZr7ZePKzvXYjbKscSx83H8FpezmUKhDfrdp67dVKCbYUMn6nNEXZwED3",
  "key30": "3p2pYSGpPAvjW4nSFsBCc2gSGn2Ujz2qnTvgvbQ1U8irMGFC3w7wqWxr9o5t3vfn1gJ6m6o4wnYoxNSB9uQNgrs7",
  "key31": "2E9RJDZPWh9aaXgJeXuxjiG87Kgvxff72nT31DtAxdyfokVdS5x7ELauMkauoKZRK2U2WtCBBnmD1uuxCNsvj8d4",
  "key32": "24Zm3Mqonm4bCktjHY6oqnAysQcTW841XSDNB4Di2raBh6FN299ZhbPJ9wfrneXumGtty37FL6kHJDN7mP7SZoDt",
  "key33": "3NgBktDxRb3gntffC7MLd6jgbFY8Pk7Bk6KbWdU7Vs7vqrgL8bYdG6w4twy9jYNizpcf51Jp82YgRc7UarZnFZk4",
  "key34": "9SW7hHPGM2ruBrQVUmjbwbUMg9DAfvaJiMtuteJfvNqHgzSHY88Dc2fsFdKYwXZ4qXZu3J3qxASJkoufdQsSfxF",
  "key35": "3rPcAT5PMbSbGkgJjWpb9HiiW72VHH6vcUgS4ANjSDSw6TneAwMULr9DH2MHtPMvmBQUEXQfii1YiZKKYNyjbH5Q"
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
