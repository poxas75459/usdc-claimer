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
    "mGy4Q7ahhrzDcBY5LLro84aTzmpVCYPdabmnXvtv4gLwLu8G2rmmcD1gFiZvGCPy9BThDzvXxAsHmgGKZdAtPTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCipvctGA5myDd2HVUS8GDTKJ6gtFuHyPfM2A8bWFGLyWahf6u8W5wiqb5q6BC9UyVsrEk37tGP4tTqiHKYJJep",
  "key1": "3qRj78g7R2KCX5bpza32nXFbFoPXCgkeTUGJSJy2f7GSXMeBgebdXShdLzgWnXNta1pPdAb7KBjE1bpniKfXafHf",
  "key2": "46ksQ7fVwDBGkChhANYP2X1y2hEv1xTgWHN168eWEgqg9dd38sFxX2cw1AKw8P5z4L18Eromz545bUxqQ3spLfT2",
  "key3": "3S7DeHt8Qep8jXb3tchFQtMENHC8YcauH2Apo5U99AGArJzTfKrJsovSuYsTyemdZNu5Jin297frn8zJWJUAGp4s",
  "key4": "4VP5uR7EwQD2hbcNqnyjFcFXW28M4JTdtGRZ9GiAtVcg7wqWe9XvjFQ7PR649VLybeZAvqD7ArXEzDNdNzrASJ3b",
  "key5": "QENzTpcjjxAzamHwenrhhLYfG4H5uXFeRD78itZQeUQgmoibdWtBKjDoFXsAdSwr3ypw3GEZcXtJA7YwV54qbMe",
  "key6": "4tV78DAPg6dX6cuJzg6mvi5bg21ecCNGhCzQ75BEQBJPj82gJocvHuUC8SHc5AiWiQNsXzTCisVSn5cdW1priaCf",
  "key7": "5x5WYqMPgxduPRHuDwqN1Asi5QqWCt1tGYmUXakek8AudAwQa3yDXCACU6EyQtaxHJcsA22votSiFAvcFxJ9TdEh",
  "key8": "3Q5zDW5RLaGAjge58gRit5gLKXE8WH8Z3pFdCSANDAn8JrU3wT4oAEHY7XFtiKE78QqpvUY4B8NYyq4Eui8x986q",
  "key9": "3AcayNrw9CQt3EntK4ENEXkaohrNeP97PvPZDe7NVtXxpPCitUq1zS66WmQeK4V9MbT8LR3ZdERaSWxzPJ9tzPpf",
  "key10": "5D27ZF5BHctyP4sN7hkXg5RDJsC7x6zeJQ8MaZiSZ533LYtLfYnDgwMFeZMPvtbAL4xnSEMd6fjZWgHT4LBCgD8a",
  "key11": "dbdmuG9CvVzpvp9bkR75rLpjZAvrmnZQRT7gEcADz3GEefcJkzGKmaEtofGuc3yx3RAZ9JhAC5jwbcZZgZGaTTK",
  "key12": "4HbGQhoYDxoWx5tfcQ22sL4m1SjHb1Rf5qrfdxtAAduwPrWYV2nPmhGiP9ptgcDvB1z2tacjWgJDo18EQDybmpro",
  "key13": "5QzNq151WyPLwn3Ub3Jw2Tz7cAtJtzuTPogamjhUXFdCbRfHWfxtUExWrv5ZrS8dHsmCE81MLAHFWiNN8kqFmiFm",
  "key14": "2Go343yUWwQedgqvmAqDsApPCBr6Uizp7CZ4YCd42PZ6HxvJfuoor9t6kfD3aCx4J6UpoJ6A8R3XsR2ZpocU1mDr",
  "key15": "3Mg9CyopCzkwQBucWT42FeNPnAX18Y8BxKQVFe7rH6ZLznfWRZpmrcgNBrxqjZyJdjMKMGAWgty7ThqbxKHAAXEm",
  "key16": "mBe6ReQrUGaK6JesdPpUZdFPcDDyVcTfPVrNE5AFb3Q6H8LKAbGSjp3bGfexF1D9sou8BhDfJC1yor2nhvV8iE6",
  "key17": "4Ub9o7cNBoNAqm2fmdU7iPtQX3KMrcVifZENGgKzoWtaiGsmV5prVdxNsWBDXw2J7ezEq1UMg52xq6qPnVRQwEDj",
  "key18": "3K7JuJSKgVvEEUmqtu7iHR8YDC3eEghfM1o6fK8z26xKSY4fL9q8sEfAGffZdJ7VxMK2Q9h34hupxav8ARR4cfFg",
  "key19": "57jj6nSuS293mx2z2BePTg6XJ5nrc92XcMySdAXRw4wjMpNdvj8U4bGDgNhB53Uro6pujvh6hxbqDAaG7na9s2q",
  "key20": "5cNEQpefurksQ5r3Ck81Pcx1Ck62mFhmRChGDFjAN1VmtHQwQmM5Spf3jquSbVkEQLJ6ittQfjPGL51jbruYunQo",
  "key21": "2DdfRPGVLzHjCaJsbRJiuver6FhASsCeosZuxWMTXf2cHeyztxm6tjfiBn4yntpKQWB467EspqcrMG3rDGfkKKnH",
  "key22": "cZDrwbGBKrYMKkPKYKfvvF8fhAnkzdoqqPPDcaAKSiWegB4xUF6faH6qKkfHzLyjRaxgKire1AxsZKvAbED9rKg",
  "key23": "5rCRkxrGnvN842XHwKQHc1ifwvd1GdAVBHaq65woLNKXtQYgkKc44D1gvrJiR8dfERNEFjCs9e6rRqYV6UPF3kK1",
  "key24": "jvMLWq7DZaLgMqsDezWmZhGUALtopDtiMZpA5Jw3bXgsrwoMkaF7F1a37NH3wiQcqBZK96bCBrzoC26pmqibono",
  "key25": "4uB22rJiJmJQyPT6v7BnkNHMU979CtD4TNFpdMQNyfpJvRdDwdFf169CSMgcjRNqHHEDqng3LMyxN4T3xjFGdV8r",
  "key26": "VeFbgnRESZ9LVYZs6BmW1Weg9qmz4zrgykiGKtY2GpLvvRk2Fs8qV3BMyuV8S3kLjYohPpgDcfGPzy4qitHffYX",
  "key27": "2ey5Fse6SNLGx67wkBA2biZqqnbW2S1imzkNF4CctYKWSqt85odLPRSiEv38JhFrLWvDGArj6DF1NAAkjKUhpZ4y",
  "key28": "5itDWByhwc4sSeWfrZZMkBmcZhXvP6KMNme3PCR6KGDKFKgbDeVr2HBA5AuoG3SM2mM1ayR98duwzzCMobWKgVi3"
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
