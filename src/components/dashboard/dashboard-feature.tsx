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
    "63xdWDQm3p32qBQeNYFGo1rwTUshJWmrW3hx4dCbyYjWpEzVcqnU4LPDpwbRgaRr68wPzn5STBEK7zFYVEcLU9g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQ1hSJs6LKcp62a6ySeUFF1oEsbTTaKWnajJNvo3QUdSnT79Uk9jGpzuwtu5auQoZYbpgZV4RaZ7n4j6jN4nSjo",
  "key1": "5LgwNMrCmf259LHxvKYZRiuLh3iRerGjM6PR6u3FgxypV4jKeRbzJREePCmFazsbjhmQMMk8ggy15phD2eZNveZG",
  "key2": "4L9Gt7UCfaQBsMbkQzXZxGqPhd24rhx2sJL1TTLcr6CRUBEB2pnYmSYxSZcjFJtNZPnyjQ3cVPwHJNXF2XEum9PW",
  "key3": "mHJBbjvAQ3kErjSnBn9qzkWhgAdjLcPXkeTBKKhWEGGCjGAt4jBtTKbwf4Z3QpprsqEhSSYCX594VsBZinTdCKf",
  "key4": "2KUabsEJ8TLueX53u1oee34MGJK3qccQE3DhMLEVVt847qwhAHFxye39SEScGdbJKE28neGWYupcBdKf3G5DsZJP",
  "key5": "5bPYnDW9ywy1xCH1e6Qm8XHReJKWLYb1S7WjJbgiJn8QJWCbZ2z2gqEBozrVTcyN22Xx9oam4QdfpkiHNadjUURZ",
  "key6": "6bNnjEPfRLZ8vhhMDYiYr9erjMr3RPEsyowMRWS236Zmx7afuMoamjCmqX5YR5QzunSspg6HbRALWmUxKRzPJRE",
  "key7": "2w82uhpYRVsTQm7hMWyfaNV5m6TBPqq3sZV9zEKW8FJSsj1dD2iqotSHD8D5bH6CWmvtdQcsKHg2NatMFCLFkX5k",
  "key8": "5GX6KnRwbGyxRh5DCKRk8agztDoAVLuLorKKBpqroyf5Nh1RPMGk4XqJjtEQuW7UqHW7AvzERV74cNUUPJzPvcaH",
  "key9": "2738B7ttybkUqqxoijRYSx2VGney66afEB2JmJDY37x3QagXfpk171nVZZKtKNdzKKaZn61nkbjyAfuEcjz4nHmp",
  "key10": "2UuqfGy7fRxAze1wwx1EjrPRTNL1eVuggKU2yUwMz3oLTrekXn6cg6GF2EmThfdsqhmKKfwwJBCenrUPBsw27g7f",
  "key11": "2vG3cedJcmjdZuPu6Zn41quy7bd87yhbNt6V8HdEUrJx8H29oTg6Fz965WGs9v9ASQQooithCDjNLt1aCNd8EYWr",
  "key12": "55QyAGemTwiTMLcN1CibrpqwpwsSy47rECXGDQwP2gxJf7rPkeXsSc5HVJsqstxvfku9CuvJZn9UaXB3cJSkvuK9",
  "key13": "3EfcG3iGsrkckTbZ3X2GGyF7PKxnbjULYvnXVwc411cn6XD6ZFKWv7DDp2FqHngtu3g9FjD4MCxGgaFkpxxBWYuF",
  "key14": "3b1VFb2QhThYDEy96Z7i1UJGvzD3NTnDjHtMfgbwHa9yAqfWCXpSredorbn2pdLAA4taCMqegfsSqWymrqUYrxxX",
  "key15": "3M9vFVanqHchmXaN26MjX6cK3B8fY1AnqGpxFQ3J86vYVTTstzHCtSwL62nRN7ZDWqozAkGKkr2ejdvEjBHFWU38",
  "key16": "KzVkEa6EB2gUqMkUDU7VeCbnTccErJ5nnfWEGnGDjexf1gdL9SjJCvQFR2upA1KeanF1aCDUpJpcBazG58bMpLP",
  "key17": "63CoaR5HzGXKAoBymUzCHjTJsk24ypEfGeEbUcFWfPDbWfKohETrwaZgyPyu2G36vebyj9tAa4fYDX8voR32tAFc",
  "key18": "5zuQPAHxDofi1jhwrJA8G44DeEJSFCJZKr9VqW3K4fRErtGzeGjGEsZVXbe27HNeStxWzGYn9m3VCkpXSiJU4wjy",
  "key19": "5jfZUmZwoZib7GCFdTeCtMhp5MdEHH9eFy6tJYBdv5ockWU33crjCs7NMUB8aHka7mSHK2zwYaDSTD9bELe4SGYD",
  "key20": "441YZ5Q3XEF9dAi1D8cnk8mdUcG8GEw325p89ZH7v85YY6WLo4hwgfGJxswYnCDC26dtVXSWPqTLb73Ph45ikg51",
  "key21": "4gDe2ynEDX6vjZbNJY6DRjXKdQ3sKgLoMV18oKVD2wa3Tfat499RTCT2tL2gC6Z7YZg2pd3wPYcg3NAbgwkRNLHq",
  "key22": "quN18brJ7FEdzY6gG1CdiQkEqb9qjQNtRNjPYGpL9wKR93eNiLQQhwVBMyurZWEBWhon9z3vpRBoXp3nrufnALv",
  "key23": "59KrxdzGhJ7U9zQ8xycb4DeqmKgYkLoYuB9xFZMbvLx9oMzt6pGZ6AFUkFzrc2hbR8q1CUcp8jkTN6FEadSithNH",
  "key24": "3GXzSQ1iWCpQk7uYfpM8p4LLNNT2JuUADDcddLWF9Z59AGVX3SnX5cqyWjH9aHd4auK1CVMEjdTenN37J5GU7wPJ",
  "key25": "4fU1Bey34rAGSUVxM9h5g7BtXSjVvR3b73st9VQMShquTYwpgW5R6FMhBXgvhyZHwt39CHyuUvpxG6Jw72jiEujt",
  "key26": "3CxnS6hDz36x4aRVbtPvZ1DsVx3DxywcTGNkvbunX8Hrxfs9JmATVwSyCmdJdWXQLHAzd1EEsRox9hzrv17ityP5"
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
