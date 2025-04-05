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
    "2toLRgN58htvWbg5cDdnBxihDuFmimM5piinHQGQCsdEbKYhFNZS8PsG4jUM4d43jipqgWmAC87BHXgeGQHPUmqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pc8jkxnwASwT84kJaA4riUdfXkTrhVSBhigtR2CuwrFvViwJN7FnWwv2ERnCj6YsoRHJeMoZLAtozwaaEGjE8Zv",
  "key1": "tDjAyC7nVTtrGGKHoyMJzUh8k74mKF2utSfyefTCRfGBp92PZ7qP8VvL8RBm2i3JmLej2TpAhh6Z1Nw2D7vfiWF",
  "key2": "4Camu1io43gmBMyiuz7V2bKkbugJ5Fk8Q3wzBie9szvcv1Lxvud3sD9Js7RQMe8gZsrRPckn71UvpScF16CqdYEn",
  "key3": "5SK4kAXBS5XLuKsnSBD8km5oQ6tzUDZnaLHq9XqXZok5SVpJP6rFXDW664qt1dtM7kWDLPEk71Bz6Weu5dTJanVo",
  "key4": "5U8mDsgvGSrr35nPAMN48whyMGcSvMJYoEihN2rPqen2obWYjSFBPhzGid1upydnekFUsYPfP5D27FAeEsVP8VDv",
  "key5": "agJn4BJZNUWu2GfXKmztJ3eVS1etAh3xwHCqn6m9DsPxgTuiekVG3dsaxA8rukZ3er69J13rLYDNsaw3CTTZFXr",
  "key6": "DxbyMY8uGTj33cXGTLVZNGAg62KFUrnGJJ51wxtCmSp1VePiG6bKnqX1b4ktm6jEU8UjBuhnANon3qM8G3P6R6f",
  "key7": "46ncWDX5N1ym3C113qU3BwBKNqNDko771CVdzwQCP49mMh8xFFBKZ6E9tktFUoj4nE8B3Ts8hrM4ToBfqpWST8Ks",
  "key8": "2NjMnyc9Kd1XrcbJL6Y4Xcqr2S1MKfTJ9sz2vhFaTthXgCX1wCuZP6pR4GhQ5rgMovMugkw2BHj3iF4q6RCRFtUL",
  "key9": "4tgVJovT3CkJHe6Bv1hfetzqX3Xzp47b7PthuvUqzDM5NvH4omAbzeSgmhLDMNZqErowic4XDEDD2E6gvqLWUir8",
  "key10": "5QsS6GddP4STDz8Wm9Cvopbq4wrQ6HynAmWLQzuprUcwDZ5hXQ7uexQAjeRSww3AvJTcsz8y84XymewiXNGGW4sG",
  "key11": "2HAahbPGuBHuYtjUcr9kkVKzBRUJkUFvyAjEQJSwtNmGX2a2dwuynmZjQX9QUM2tsKRkhDLpVHQVxv32pPsZzXjw",
  "key12": "4edJEKZ9TriASc8ynbQ6xvpmAy41aYqHoDSUJ5ncsfedWv12CZX4jVJW7xmg1GT828FNaSEM5Ui2VxJZQJThQNsG",
  "key13": "2mmf6odE2nxQaJTMUdHkVZdSf63ZKWVtyUAuVKmySpesCKUbQAvTFKu1JuivdXV78r3g3TXzepyVFet7on2RtPx8",
  "key14": "2J2D9Xx8Py954x9dpSA81hTJo4kZNLsQzfrnkGfHr9kYugsUxyXcc3z1c1CwGk36yWv8amjHJR5jx1KxsHWS5Lam",
  "key15": "5kyA6KYySbi6UhUpwBZDL5WZSjtoQoYFaSfM1eZ2t4Pk9CikyXjMTvmh6LJkzGVU1a59UJ8vVG9xRzdMR6MmpWpq",
  "key16": "2Sy7tU8owWmJaiaDWhad9j4cb4sm8uSvhDGd4geNoFe2aADXgVAEGKyJLrZZ9p5VRrPhAyGx13N2Yv2ZuAkEpLjg",
  "key17": "44aKz9r5b4VchmLgq1DaFoDf11pRGEpQGTfCJwRVLXqXz2RLYe3fi4HE4jgs3hUx1RZKYLZ1qAwEms5Z5RpRK62r",
  "key18": "27gfDAjdEazsTDmhUFJUT4sPByZ7VDdBh3HcKaEnitHtXab46W4mbSszrDVWy89mi6hfDahPBghveAupnbMoeWnG",
  "key19": "5PrbZaqKZwZee8Kz1c5zhLNz4pCSCUhYCuQS7RzAhzJRu8peUuiTWukHNX45G9n5xESEivqMWPu5bSNq3mae5MeJ",
  "key20": "5S65fi9UhLXJM4wde7Lmg6cnmFzxAus9sC9KrggqFyEeT2MaxViLmKZYPudDzeyBDtgJBrRJGF5jamFRNwfse5Hh",
  "key21": "3WBxNDqfkeBSvQiCPWx76e4BdvH89J515AW2xBqizF8pP5euu6cEJqFfXNbDQSjHsu4xrVPKmkiqsNUBoUuJ1X5S",
  "key22": "Ju3P4978cGKpW3HwxWFbzZGsEPjAnQst8fqxj6vqUUqdtCemDoRKwVZRYGg6gjYE1fZS7wr5oW7pMVgNi7mZsSw",
  "key23": "4EyjmcyJqHBr6iZtNmDtBE2xJu1N4aaYjaKCuFXpkoPEWyRSEru1SeA1MuKtXZZ8fJVDYEdKQFhE7iSmaNGv4soW",
  "key24": "4Dy9SfiNyshStX2aintJe2WzQPTRbqpQidE7RoRq1cLMcas51aJ2x6GQmFBC8tjSFX76Qov17pUyc2nJh5mw51fc"
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
