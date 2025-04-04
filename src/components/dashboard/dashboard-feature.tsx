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
    "sYasWpEjAfSXYvxwr3hTYQoxvHNgPGHhXxQZJuK8aRYBR4arkbcVpSMpnz3iUznG3nm5XU39CD8ARLfyFWPYFsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7DkHttefRQNcKdyuzSsXph16YRiLyvKPvK3NMEnNuxXRN36VznjuswL7AzasQsjK7uRkybduwmqdnFuAHzs5Pf",
  "key1": "2M6FdyX4dGu7NQXEoWiebPKCWnQ6agg1ZGuViamBDWj13pgtYZS5K7s2A6EtdUzFf1QcKoV2StcXt6XvcpexfJ3B",
  "key2": "TJFXRHYQLQaqmEo21vCZQXvUg1uLueESNktwAkUrFWWvaAuWEVafxrbxmxc46qNniDgNo7BdeQm1ZbobnWrEbbU",
  "key3": "2qyYsMBZAknnhFnxDpL8A5wFZZHrNTwRb8XtJKkyaqVdb2qim35sS6BPxbmuW2NNiz92yEw2NcvCCD1dL5khE4L",
  "key4": "3fLGE9nJkTXpbJbMQbb1woWxKGdQsDVQxaC773iWu5ZecMQ9NhxsZ13ePVSpaeZtu3G6nbSwdT8rzgiajrgKMHdc",
  "key5": "2YLhXs4q1E8LSruCtoLR2emvCUeXDHQGW5n9mhcfGUCdR8TdEELH9N9zNCtBpxgczugcRFfi912MDv1bPFsCsZWD",
  "key6": "5oZGu2QEioaFRXuD2HNdmUPVUyX6a3UQsahTRbEGJmAArQ4rcbTsVDuLj2Y3BmeGCwcbF1o5ZkjAQm1KJCiSJwwq",
  "key7": "4vv3hFKGts1H4YDpbjEWBmegWMXgcpXTCvWqUBKtuZJo1BzuL2rwrXPbL1JrLvFdbno9s8vRkeyB6yMHFsnZZiNZ",
  "key8": "iG8x918D5c7xKmdaP1qCP79pnhv2YC9DduaYJezrwvoJnw28qyAopDcAxYE3KpvzbrWfG8huBWxMg89gfm1SAP3",
  "key9": "2KGAXcBkiPU6kWvqgJP6cHMcFzDUmDsb26xBhVFpZrfFhEAefdrRdAFb4yaKJra9fQYvDRbfhzUXzfXvfim7MxjU",
  "key10": "5LpkHzPQveS42ayjLtHtLyz9HkZBKoBdsKQ4gihDjRH4RbsieWccCsJBUr1wY1YdCsXRB895drk9us3npDALydfS",
  "key11": "8QAqYy7kjFxYyaSYYBV3mWQaBpJoQqShtV2NqPvML58Ngu1CTsURV1C959NkTGcQAXaeXc1j1ULEjzyVTgnV6kn",
  "key12": "4i2Ek11odVG79sttjquD6ZqomDTpCXyiQQ442HCXaZXu21K5zad9BumpQfq5CXi6qwW5N79eHUsZV1Q6fF7qH8C3",
  "key13": "3kRRoWNwpTvxoBZ6afweTWEbta4Hg3YUbdWuXoDUwBG26HthMniaUrVJAFKAzZjuEqF2ygDMeKwqh5tfRzmbXz3J",
  "key14": "HWsGt6SSf5ExLXEAxPosJTT3QQ3TiHn9wjg8dwwxkqjmySyaQJBB72c7sKemNepU8aMaGpapnV2GR7UfwEpyMvz",
  "key15": "57RicVzoQmUfLEbaEG3CYapUB7P323LJcztBq7SzpCaAuLXU6Myd5dS8Nh9ErowHVMMUoTsYXyMwjjzYANyiVcRV",
  "key16": "5R5UXqVqX1v6zy8hS7BE8aA4oU1cBCj1VxdrdnqJvW4HFQwNipqQz39GwqoZuN8B65iZTjtabtBWaoXjFo2sV3oq",
  "key17": "2eiVr3xdqK5qztzpP9SAonCdwJJYNbAwTst56i7DUbuc2RTsQ4ussNMPkGQjFqBshVu539UwqFL1724hVmuZNrCn",
  "key18": "35vAYhyymEEtdf2zHCTia96gSzKZjFGrmegEJZUmd6NdWg9qms1oyR28kJ2owDFBLSPszRvbctn9JW8iuzsiYmbZ",
  "key19": "4tWXPpJWWLd7kJkyGjxmUdMFGi54PGz6fFKU8LRuJEyomnXg3kvGnFXoEn8eL7tJ7vEkAdBU2v8whE6y9n2YVWsX",
  "key20": "5KnQAikPuTF4PsQMu5xAEeWTgTEGXJgD7oyBLKkcZ5LEvWgfHUhV6MTkqpCra2nDfY98SgG2fbj4PNFcTUWENffM",
  "key21": "44o9thWdzMox44rk3ak4njDhTKcQuiDWq2JoBLexdDykXftiDbtYDsyTjRRsUeMZJc4N59eRty3z1mhfhqaQMZG5",
  "key22": "3RmxNZV6nbkB5ZSK2EgEDfAPt4fEw7bjYTm8skiLSg5rYBSnzEFsFJwx6z3FpoJUpjy6G9ZrEaNEqgmAttVCcBzy",
  "key23": "33DGfM3kQnj6DWrtQwTeSzjyuGrD4CcMiH1biq5Ho1gH6EE4FbgnhX5RHZyQ2vJ6uq7nfiagCebLECS3DC6cmUqq",
  "key24": "32i5Kv4haihq5Rez2swPKSCjYDxu4bTfvrzoyGvzGag9oHxQtyDTZheaEi28un61SNRL7ZGtYxrb1oDth3DbXnb5",
  "key25": "4kTAcauMf2EoAbQ9yAyxBMBhnTCMe8bhXwThwrBXnTrqSXPPM1w7a7A8jaxsXfgVR7xNwaniXMpnne654LqF4gwA",
  "key26": "2zp3fnbTmoAZBcvkbU74ExmHSKWmHe8Y2NQThiTKJF9KR7pKvPuWz62N95quKkFV3coGMmPXLNjGuC8ZtnthLZCp",
  "key27": "2finGkRnBQE5k9rNYGtF9gZUt2MLefQmMNgKKgkLTESDzU6divMjc2ERa7X4Ks6Yk3GJrwxx9BTQ8zzoz1XUgm5r",
  "key28": "WHWR8Rnn9XS7XSUKEjeLTCLkUEkrwRiwa2FjDuQgTZRb8wGD42RBS2oHqCUxmEdRJSHrqLFP8cuoHsWvPAv5heg",
  "key29": "4DtXFAoYj8S13f9VMsK3oEfbYnUuDDzFnWkTj6NSzVjHvxLg85Pfrh6dz6g2KqJUTFhb3K5jnrz4QUz2S8MfXSaJ"
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
