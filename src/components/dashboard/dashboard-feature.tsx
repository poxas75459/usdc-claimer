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
    "5pTJa2PhvPWNFVWaVAqF13N6mdfoU6rAKuwsCeBrJodQoxKVTm1kDUK9HHm4DNWFw4ANeQkkuXEqMBGr4D9kp2vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u67FxYG9zPjw4tLxFF6Paai47tBmpu8qt7o45UH4QxeLuUjRKxrHJUR93LHHadwydibQYPTpDmjrxTZ39gdGQGv",
  "key1": "5BE3EkYQaUsvsQZjEAwqKCmx3cPNvxyCHY619iwbt8szTRvthC5zsjDwHk56N3qYABhpqKF3ahSGd7mPwHKzLd5y",
  "key2": "sC7TrfCkKat875246HUguc1GkuaqM6U5r2thTWrT11EBzU3RwnRv4zdPVzmi3W1Hp6fuGMAcgnbGSCrbw2fqza7",
  "key3": "4ZWqhpGHFjncAoLwrfwpwx5N5ZxaRZ8iXkWrZ4yGCY5LhUrkNy15UQhH1pK7ueW7UmuxbWZNA9kyAaeZZLJfBioY",
  "key4": "5uVz7hp28Qs16Xa5xoWDkJAnMCHbA92XR93xYbjefpW8LmPRCPLztDrCDrrp5uYpPy1AyHB9ELvQaMNrYbyjo5UK",
  "key5": "4E99zZfpLuXYkdiqXqPZpJNZK1EtsJKykFfrg3V6s4eySvggjN4oh7KbDkRpbgrWuBoMLnfVkXVuACTBfki4wTMQ",
  "key6": "3VeEkZ8j5ci5AtPpQ9aVn9jygZ4DRpJ9dQ3Tsfg6ctUgc3466rMwWYAXt3Vwswo9PDu2qF73rNjJZVh5wriLNE8o",
  "key7": "5tK6apie45oZDWdgNPhmFdGn49e4GnQ1pTwpqshXbV6cQZLUBSVGv1Gahi6ueFvxbcrLqzhNtEbBGZJq3kVWiiPJ",
  "key8": "5hDj67fXkisPcL86ci1Ckuj5UrHnWA9TmSg5xAAuu8atCuYr5jaVbkRQyujUc3FxHkCEQ2AWh6kAVQKbQ7f83mLf",
  "key9": "2fPBCAL3F98FjzeFLnNoADCp4pCA8QVgRmoLArr1CEyHnGkV2pjntEKysbAGHA7f3KSNp365Hs3DkqCww5jpfyFp",
  "key10": "4gLKV5WmUpVyPzNAeUhRezJM8pMYBYM5ZVuNE8XQuj4Vj4E46NJqxXt5UvfEEiVZ9vC6wqp6Wb7YZYJywmGesrB1",
  "key11": "52sg1CiBLCkKrw4kgcJkxpfWYmSVYuMTZoqnwP1TH1zFDorRYp9569nh1dmE7KnZwK4EkY45coRByyCa7SYnhaEr",
  "key12": "5D51LoQ1sdCNRfGx67CCpvjsKWnh4YnoijupzLfw4gaANiQM7SUfsrtGFqWC3zv9CHPQytdEjoJwHGmiJ2fgKArs",
  "key13": "3qmCw64bD4x3MvebPdZHrD8rMS9duqNVj9G4Bsec7F7Cu4R118YLhWGkLn66pY9GsGHZSj2bVdUwwf146z6JefpA",
  "key14": "27iNh5pS6KntZLdvn85BbtCbKDwLMHpw839ov3GCDL2N1qzCuBYh7EE6vmZafavA2PM8Ns4MxoZV1XmtSthXFamc",
  "key15": "267S8WmREScFW16nuUeSHW3sYDDcFb7SKrpBMLAt7cEuPpR822WBDBUN7SqjiMbmwyNLY3mNbZ6TMRkjXwCyzV5G",
  "key16": "4mRFPif7s2Uq95EZ1HzLv4fwENox1njQUc4vcgMgyiZ5XamBDXtmubU5Wn7jFnujqACFxBMm98aormVt4ZiGPqbH",
  "key17": "4jJ74tTG11F1aeUCNhHTbMgHpo6fQooiJ9pZa5arbC5wfy3H7fzWyWmyMcerS5xxSrmf7oyJXpYSmbejJYDLmfjP",
  "key18": "4z51Est3hnR6k3ngLk9oCF6ScXEkLQyyiy9cCq2aBFeSmDbN64p8z7py93x1M34K6JwkSEfrPY49BgpebTDoQHQ1",
  "key19": "5nDznE7nBQXNGVusGZo2gVtETV4dQ3fyXFarCq2Bz1pnzJbnDU4yY7qSqgEZAub9wKwP629LuGEtqXozKQxr495w",
  "key20": "5wYMfqBn6UFBnGfDPkipSbL4wufY4trzXUX1sdMCY2QSJg5tUrX53HxCnNitWsR3HjT19nZorCZJjM9qMEx2XHTV",
  "key21": "2KxnfNJeF7W37bEqJwdzUiucwdyoX7Kdr7fehRkibgajGxmuk66KCqpQu7CHpPVS1rzCKZmPPoEML7u5sam3YSbg",
  "key22": "T9bbk6cLnEhkCL639NsrGbc6GPKDWdDDwjXHAmVpzxHFsDLWNQB74BGqC1WiLCrZEt1ZuzMTo5exCm1ubLFSxk7",
  "key23": "3PnTebK3CUJ4EYQHRZeCdyjWDRwJv6JbE7vQyCeCjG85u9VQH527N3wV4fpdJd98CJNaS3RiFj9FGbgMwT7dVAqL",
  "key24": "4qWvEjTfA6TB5xgRhaPrFwy8t2A9hPnQC2Kv3ajxB1B4Z515iito1ecKrFPhDFPjbzaing3kmfm17kjTqb6U3BCc",
  "key25": "66XsLMWTAKp7Q24uE9LVFL8sAUGxkJrFyfDBMKoNWVHALHzMEpm8KETG31bQiA8Dpyvo2wyUxwvXwkECMeZgKSMp",
  "key26": "V8E9tvX13HH13st1jRM1yAMuKmHfbp4bJ44Y9XgZQhfWo17CoUTyXMzLekxtNJNzSEzCrediwgyTEjN1HR4Koif",
  "key27": "3ESqziBQwXyxuJ8NFvexFX6xMe7f4AW3pkReb9mWzvyrUvTazAdHqDyqwTGe6DUUtwaH5qj5bLSw3n4qRm8Re23N",
  "key28": "5wspS3pbwBDFHLNaHDaiMWjmD27emdNGQppvcB9Zidjjpx5DEbo6ZNhHesFF115KHWs3t9fkLC3UAZdZ5mYHsZSq",
  "key29": "5ceB6QzUPiE2VS2Q6tyx72TQmDnP7YZ7tvPKN2L6zheWeTnH4RD7XTZA4kiVWMLvQR9cwgTnA2B2QezG553AMSsA",
  "key30": "61mNkE3FdGsnDnRQduQZrVh4gKDyYAExNQioJJyyMMYEfWAehzNGc3TSPcgGck7ogjyZ3sMB5k3cXyVt621m5Uvb"
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
