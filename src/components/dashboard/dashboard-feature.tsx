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
    "3EzZxCS4UaxpkSxByTvsxJKefdQiW2cH7DYR7n5DFXuWiPebhfucFnZEx7kHus5BNqDdJQWwneLYCqidppS48G4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFVdAAP8CZnqucKFpLibqSMxaHZ8MwEFwxXvxk3oJyq7pkvPU44bRHZV22bAC4mGpwDUGS3NtA5SUzVwfbiihUq",
  "key1": "oRXfgjbWiUB1dgoFJXnKxrHZcvodaweBET7NtYudiGPAagao3wdg29xpXpGTbCC4qm48yqT1Axxg6pCXrMByrDM",
  "key2": "6oMrrW7su9ECujtYGh2BSfafiAxokrUMsbxh5JiJYVgxoyLdWr3pfyWuBeSTjfVCLGvwMsCJhiFkAXqgaRK2Tyb",
  "key3": "51dLR8WDdfeXGddwnR5Gv4JZTSXgZhThvpQDoc41pa9rH9SK5ApX343XVsQsAB8a9UJN8TqWwQHcwG5fEKNLms6A",
  "key4": "2EF8vD8mj8fGR9bxh6vAkzkKdFP1dQRFAjvSuKKm6KExC2QPq7o7by1iPGRz5iP5UdtxnhR2W95Yno5TWQqkYL1z",
  "key5": "4kYjFHBqrs4fTNDH8pUgto9u4Xo4thJVARofSUMqdH29oSHxtEgdr2khCu5wtGcfJWrkjtU1FqhFA5EhtCs6Bzz7",
  "key6": "2xd4f2ypmzJh5MHEQmJXTrxQSxStH3vSzPQkL2jxdECAtmHz72osDwvKMBQVzH1o2y257aF2KPWJycNgG5DhJRPB",
  "key7": "JgKEACbfeToxLUH4e24ZQq9LYzscPfds41fka57gwi98GEAirDP7CUgJsLbswbLkMTxApzHeKi4ek1NiuikZyRe",
  "key8": "2hggLGBvTuJZyiU8LFCpdmbgonbD5DZqdUSKMggD96zQFfpJQTLSR8AWecpaP85z5WCBQjisZxcjgj785cCKkpen",
  "key9": "67MuXW66nubwfvRS5kLmRpBhT1BhKmS8BQHtTpV4yYMzGS7VkhHyLFm3xE9eyJ6dedpYjFKR5xMLsuCQXzg4wQHc",
  "key10": "3B6dMRWS5MxExWqb5c1kPKjdveGpA8Thy23E6fUg61cfhnbyuSwTowKFBpra7Fdvm33RhAmAu8gSik8EmNgCHQJp",
  "key11": "3NVGpTa2GnoeEvSsksZcPFyWZnvPdXbfL8WB7jTDD9MFtBeJkgcwAbNRD9BJDr7pFGwb3vJMYugk5Yxks4g638xw",
  "key12": "gsz683jZ39H1rkeYWagMDgh8NUgCvPBYN8NGroAaMBwfEYym1e1uVxjUqHExHerCZXhzbHH2ZeNBbHWYkzkA6Dv",
  "key13": "5fwMqcVmZC332NEq67oVcr6W38bmKvHs64JzbapVF1aFENDRi372V1nuicjvT6YL8NhWmFvZrFaSC9aR4qvx4i9t",
  "key14": "5XucsbVxdqaEGVGsn2RWm6upGvNuEtJuDEnxKDa2QsPt5rTwzTGzq8bpNT7j7t6S6GsD9sdb4YkRjEopC6LnAfMb",
  "key15": "2DG6J2SLppkNEz9RkXPtUagBbp4GS7iUJsCC9ja3KxfAbrSBzASYtRbGLjVFKbi91cNrHgyNwJZMG3mkKes9N3Hr",
  "key16": "3CqFkLkdvdhsSVySZDvUMM1MrrzbAWzPJBLdEzCfnSXumAMRFnjqDfvbLxzAbio9oQiVqKtdLhG3qA4E1D1hx6yq",
  "key17": "aU9rrwsw2Kg2CVqsF7WxUDnGDZAx1maqQdFUCemUKFocQQk6crCeja5h5fxvfHiLUkT4jptiK1WHutPPYkURbhx",
  "key18": "4HEksaPzScxhdUxHppLpNmkoQeTn4PfmgxFGh43fcKh46mSJc2TTFTQEe9PWKvAf2ubVmyyWw8saUZa7poNEmbj7",
  "key19": "4Lhn8FHhRkGmmPjE4Z9LrNWxwZKjutvYEfHs5zYAb1SnHQKvzuCLvBsee5GTuM2jejktRn4LKdAGhcwNopScv9TY",
  "key20": "3hJQ65rK1HTiSfSeggKU5qqKyd1wP8LFQ2sCY3ERVTo66yFRGH5W66bHNbrtsDUH7e3Uj48SxpCMmrJfUZ3z5xC6",
  "key21": "5PcfcnNMqtcM6JAZkKQ9R9ZYLa9yPiS8Ttpqw6arPRdZTNC84TS9cbzsB45GyR3hjLroGPVgGMzzfkBMrq38iQkb",
  "key22": "5qJukXNeGLJtTSnebLQhtt4DgS9TrYLoPn6QCoNbtah7TaGcgfMRCksXPbdjbvbF4WwB5EskUbqguDKFwEYQEJnT",
  "key23": "2a3h7a3bPZK1EXazaS6iqsQad2fx2FckBhY2V1BTZWwA5qj1aCFVmZVVobG9NYryzKyMr2zzxQWLeE3rax9ATEjV",
  "key24": "2tNxyY9RY3wgoa151qtBs9EbTfEpwwj87J7CC4Vu68SVmG9n2iUMjb8RiMbQbvAYtu6R9yWTvibrpUMbvJmuGEAP",
  "key25": "s6PaG7DcRFTkqYjbd3MdTXdbLefUbsAvAdriHpVt3b8CM1HBJQj9GeUK4pdukhndndZczz3bNXnH26h9Lmzm4ob",
  "key26": "3jkdnvD2ztuwPDr5xpiBCAT1qSqMnDnGHJXAjRJtaWJT8xmNXsTJaoJFkjZZT9W4XXvyEcZo3vYHPWG77apM3EGB",
  "key27": "535k43bUsGthY6pDat8uSwn6NUQzrKPfVdMqG57AWhLrJzhT1SN41mHcPnk1PTGMScReWj81rThXsdyQ8gFaFwFH",
  "key28": "5PREngUkSPgajqHPRkxBoYPaTxtthkp7Z4eiTzXvZhSWmqyd3uG71jkB4n6fTFnBEipAeFF2W6uajt4s9514LTpD",
  "key29": "Ai3Tec7Lq5Jndu1PdiNKCBqBAXMg7LhdJVwRySudzEiBFnMGruwZ5xTBm7V2bmk2d8exrtMLiDcuJvQtEaFDZEN",
  "key30": "5do2jRWT3Gbi5R4y5BqQWuXAGQyEvTDBgYytHf1A8ieYoWj9GzxHVpX2ezNp9oiv36pQrP9bJaVCvo4kZ7XfyELu",
  "key31": "S7u46f4q5mJeC2GpVdr81ne6LUFuxoZ3WDLL8mu8s77cDnGJ5YEHbxJxk9FajHJHJPyxkuhJrXLirBu5CF1v1R6",
  "key32": "5ahxHtnbNtcZsXnALPrPtKBSJxU6GRnWh6S15Jr7qQuuZ6Hi4px6qhsjubveaEYSYeJCgbLmar54MKqePgLAngHU",
  "key33": "246rjjCBx7LHGH6TMXvizmpx3fAUaTU2aEZmqGp4ZVB7iDtQuoxFugtc5AP7F6EJdDfLnhzt6g58b6cR887ZyC4P",
  "key34": "655bd4YrBLRQ7JqmtKSTXgu8Q8W3SxwFgAE7XjoauUxcwXNj76PSdoZ4FauD9H8Z6TM5unX9uuGUd7FE7oMxHbin",
  "key35": "zANrLvLtz7pXH4jNwR5bXs64zErnZ39dMQMHTscz4PdKKvAgNMNGvGL1mVD1qqZ4Y9vbCTBkyTswLVVEeWcdh3f",
  "key36": "3ELYeef3V95ByjggMRNc1qBM6MxkdPGiFr7TW1VaK5ex8jTxYiPn6R3moUxw3UmDEAvtrQ1UuEwX3XsGRXSkLd5r",
  "key37": "5ZtuLLDnvKttZMcEu7GMzuLDhmE5zdy2iwkqpmgjPfX7KENbLhMwYxNZwH6euY8rc1kCSQdJKFPUEGZ2ESeRoyHh",
  "key38": "3U58ou5t1nJNcPNCbT4BJua24iyci65yjrAKaJC2L9eeGRjYTLXvTk56YMJ4X7jQp6ceAGmwdrT3y9d7aWLDMtGu",
  "key39": "o4dd9xn6qFv6SmTe99rirD7wrRhaHFUYTPxTGYJzovCdcnPnziMZmNYm5DskGgdW9dqFF4dygMGimtgQyaHqTKd",
  "key40": "2RLDPYxgsTPtKQgp6oANUs8x9bZPJ3nk9sWCAtsA2cNDBELzuTsAVWiN6F1Aj19DzC5jG7BFKLXqWPrgSy6x3q3F",
  "key41": "4m6f45GtdjjAUeAwT55cxVKB1Gri8XMSQudpP7s5FPb2XRoq8ZeGo7QXLzQEvTtbjEa7k3r3uTKrGg2wW3KMyAcE"
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
