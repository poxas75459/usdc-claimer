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
    "52CHURJtHr1paLtCL8keHzpfYC8t9AYCWBsf4CDheZGe5V6WwJCtGbKwyuwauUibeeA9x7zCfami76GvfmWQ5KZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399H2qdQXxKsGKMomSyu4wjC5PEsRMnhix29Z5bxrxPzSjax9RUMMbhioexgmDwbDo7fxP1jL2d9Brx64sXQXdz6",
  "key1": "3NxcM2QX6mkumozYvgoA1ihvsgMCcA6xdMusSVaJXV7Pw29R4TExVrfLdMCN8C84ZDhDtXmWn4HPJUr85qGnP7bs",
  "key2": "j8xrYWRZ4YyJ1EjARUHzfeZF6uwTPu9Wp3hQAccJ6JahBKT9LJNkgpRgx3z1MsRUMUpiUVGpUxha2vZdUieAc5X",
  "key3": "YX69de5A5HL8yZcQcCtR7aFzeGqt1GBPmocnvESmvuwdYVXyBP5iuN95NP516wcXScXYNt7QYrWdu73eLANeyak",
  "key4": "5dXdf6wrWbyUEskkqP53p4te5KR3MB6beLUL2E9SQMVTgot7P5t9eniRqdhrs1cKvmrKNuc31L6VAhbGmZHBhqES",
  "key5": "2onyyYyUxAS8aWPMse26LbtDjeTULMgEzbJBdRzb4yLoz7RZy5o8Q1VBppKBNEma1n4CzVma6KFiKT31Fm29awPr",
  "key6": "1Q9FxjVuckCAvCjJJ8KZrxMqi1dM8E8rRX89DyKBspXBBXimMZoJTajHHg8JvXfo4cgkxd4yHXkcp6FAadgzdnF",
  "key7": "3s8MH8npWqSYaBjAvwBfrHEr5r62mFNxxrc3RryCz7gFkz4rUnT5Vbn9x251FPbeCWUoyybGViS51w9wgHgQ6X2Q",
  "key8": "4MNu2Kz5jhLzRuo8mWsbK7gfvrQAaW96oVVWwnTKLu9pbCmBozrS91hbojSwVLqTWFwN6Ev4PMH35P65YKwgJyME",
  "key9": "2XaTgtSYWVxnw7bncGRHa3yceJebJNNp4RqhJ7K7yoxvT52L8ebSShohEeNHcp4pCGKfWtkF5NpTSzamdEe6trT8",
  "key10": "5TyTYLortpZvuo5oz9dwxhgsMdARAUjNoNhsSoHWut5E5aLUjhEaViLWsAjjoe9opqRKJsivrw4bF15TQp8xru3C",
  "key11": "38FmcggGiPCdwxy2HBr1Fgf79CHz8f8i87VEnCZy48wHfjJ1FNU6aA1U4moF3bsBCadvFoEVwSdXYcMxBab3LGz5",
  "key12": "551UhYgH1CucBKydZ1TKmYmSo6E8tNgKQLQNhed8wCbRMCwh9fry27oCYWeDV5WCj5wThR4GK3CkhPKrAobpWbCL",
  "key13": "pQ7sHV1FEBR3CCk9j6bxosQgGsjKNHsivXCNQsnfDZXgzEAmXKyjFBktyyprCTtrQhveTBEsyRLPbM1MMJp68TT",
  "key14": "5364r7PCz9ZRjwDUSN9EiqkwogaP8vekXXh7PPT9a7ngzgREiay7SJGu3oFHWE5Y3wYFdAJMcaFgJyytufGD7okG",
  "key15": "4FphXtqJ5d28mhHaPAC28229Vf693dZRbn4fLzy1gVfN2pvDPGexuspEo4w1bE2pMkWWhWZFxNV4t4kTcMWWWc43",
  "key16": "4xmiV6n8V2wqV1jeX3w8G1XSPgL5Nt51C5AXHqmN4GvpQpsXd8jh7m6EHTC8wa9BbDn43odvWzNDGFjXngzkzop2",
  "key17": "wTzMtXNnbGySTAoFXP7PKDc5UQZQsFTCK6PXGwZD5ETBKAJ9pXjoSDX7QZRHcMzRv1QKWLmZKNPiDg9wgZgUVfb",
  "key18": "AoTZbL648DmEh97c3GvWcsQu5zraSzjBrn1qtEcWGnqPsHcYR1odtbUrv7G8eCLzbFrzWZrbkjLkuWkjG1hP3Hn",
  "key19": "2txqtu2ZicrCmZyzxtqNsxbVV8vkvJM8CeQrrSe7mDyoMGkxhAqp1cTaER4jPJ5kwivsSkUnZKkTXRtAojT4p6YA",
  "key20": "xYEjnYSUfkdQGzJbBApfAN4q8gAniLRAYxCfdjQy4TTNH4SxqgZTk6u8wuGV7bofie63q3py7sYaiG5mrrSkN7x",
  "key21": "2RTdERFiiuonmKWymECq8wXDnfwvQL1x3rXQJQFuKqiVyHikps7JuwqNpK3vceP7oikXswPvKaV2cHaCF9dW7TM1",
  "key22": "2ZVTnHoGqsCqh4LLMELv1egqjB8tpCDdY4PjaJ57joWTPUhRMLToFLriWSg33dgD5byWG5jvX4Li1dsYzoYgAENb",
  "key23": "3ghmL8CKqyNE1XgVfgcSh1a4B45SY11n2XuBY4obvb7V6TBo7CYy6vKt4SKQeCHybMuZckBB4Fs9zixYvdHvrcWM",
  "key24": "3HEDL1Y2CJhRTB9DxkzV738vR2op8h1ArVZHv674CpnfXh14KxsWQ66UyTbLnqUD8JqntrGGRmjPC2nQREPbeKPa",
  "key25": "5kz3H5rmPJD1bVA5ZXPDkJVwYtuXYM4KZ9ZTS2keSLuhKiUzhGWdPAr18Jyh3x7Q78oVzLKASQXMksisW4MDPsWe",
  "key26": "4mEVqodoWKAyh8dFGfcVBv9jiWApmMZbVN1vYxrgDXAPtnFMi9YqqKzCNDWYa6CjXkZWRXco4E6cxq2RNKy3fC3P",
  "key27": "3xqhy3Cno6sdqHBVnZP7Mu2UxbsiDpZ2GWko7pj2iw2vaw7eEfgiz8zVBDLsTH1SmpNnN8Jccrm7gAFsp2uoZCoA",
  "key28": "3iUwS9zEkuhLaP4CPfgXfvwMn3hF2w523Xp5YgZSnyk42xQEv5Uk4sdNrx3S84joCnjr2LV7xfmz5nDmQV21f6DS",
  "key29": "2N5n1xygAvqdnNCHwSUEuKy63jFkhGRHHEyWx6dDwQ77s2UQmbgkWtLEj6RuT9vcSTx2iTfafTi9bpHnnxNPgn7n",
  "key30": "iTKujCLtwZXSu1LoLMARxQZgGYVR82WE56GUPqwnNEA8kzj4FBw6Hv9cSci4NH6Dz7LaaLEBuUfiRsFQ3dhZR5W"
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
