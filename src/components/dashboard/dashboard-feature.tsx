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
    "4FVSjYssMs19MoDF4pU6BSm3GzpgbeLcWkqY1VBVLseX5vPRaZS2vZcjb9rQWwW9hgBodfg4BAUHmNQwiEUGAQu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPavpRV4LmjHiv8epTwm411Ph7obwadzhk4AZKw2EHKqmVD7aTAJdADQWddyddhMtENsdJDMvwBChAfySTFv5Bz",
  "key1": "4tcX3pc6c55ViNdgjVctJU74ie3WZ7GgoQhnwAzFpz9wRWwCzBKTFFp8K4YmTRDZeEjcUfaUfafB2fficpkf7XJ5",
  "key2": "5FThaBvoUQrMyjkogGeTsfaH8VcvLW5tUpRUjUzhrDFf7wCeSUtSieHNie9CJZ2x45bWyosE4vf96HbF1UgbrFDk",
  "key3": "5v9YP5Vmjq5EtiCSDYhMsqApbGsxFuNr4ccZ2oLsqb8b9maMxWEr47TPRaXPRyEHkC7Wc6Bpty4TGyRiVPwVTBBw",
  "key4": "2rzTdTrvmZRUdytTkzjXWbksfi6ttKdSiL8QVnQrhu3eRnV4mxSc12oUnGN9G2zNPHctrSvhQXe3PrBEdBCUGBrq",
  "key5": "4vaJxFrXVL2NFxTdqa7pjhVWvvbkVfR1GijafvDR2vjDXKapjctPpjvXNso6jYbGwiQymSsMnvBTzi2gq9bqJeM7",
  "key6": "5QhGePu1febdY8geJVAMb4KGtpWqSzrbjEybp4JmjnMVvZYb7pL9H8LvGfDEoGp6RYAFAB5q7Uzyp8KPYSRGAg65",
  "key7": "3LXfpXGbHQNL6jkNKuverHuB3eEN8qD9XWJD3bDy4SPhHuUXV9fU8YCFqH3AqYz34xP8Yv4bLk3zx8uKyjyBy4ob",
  "key8": "bX3nUcDzVgqudALcpfygrHpqsgU8hzPVtW2SpQuLucXCe2r4bsL3fDvVK4RiGdRzv32ehWsyVUvUqRL52kaJz4q",
  "key9": "4mrRXnPaMTN7KYQUc28Uu2o1EWWxFoZ51Aw7FsAbAVCAXPp4GtzWUz2JtTNyBkeo2UKeCb2ma37m3QC6NT6NYSZj",
  "key10": "4nwj22N6sYAwz5ybpRSxYPm98dVi9vNj75pRE2Esy3HUMwnC3ktMTt4FYcDqqNYeqzezsdGN62jH7xMADkGaahh1",
  "key11": "5cXWXrJjoJNSpZ6xDSV8QUow9eEjcrQXfFcq8n9xYeVijAiLphWmxZup8JuisLAkD7e7y4qp4BtiXCuoiMkzRBRr",
  "key12": "2P2Dpz2sha9CiFAK4aep6i8FDwW75i77icsy1uGFmHCYn6wojmrvtZ9ngX9rmWMy63ttuzAg2bHvEBocQb5BD1ts",
  "key13": "51qmoNi7GZL4Pxkrd1P23thoHwrRAhebFpDvZNsXU2ysVtqi1RiCmYBqHP9WHwqbB7k7ePartHqxCP3ypn53R9yh",
  "key14": "4ZbxS4dWxDu7heQKD8sxczcUzL2ih5n77pTF47uLLHXh4tPccHkb4RWgvykt4eb9Y6REomPxFUmA8FLJjUsvGnvr",
  "key15": "4dmMBbvfJDacbDV7caa3c6nq4JLmyiCAfUpKjktGJ5RufstUxaLVefnjqxw9wQonQpC1ztpiuZrUnP5DB7gAb1a9",
  "key16": "2LKBHkbW8oHzwy2sp4qUgP5gRAa9S4NtUjxcTw3MF7pHYRRpX6FQ7GPFaoSbinhnduT82E1qAFKxw5ad1fA4t8yn",
  "key17": "3FpQN1EPxreaQwVaP4QrYZo1ApCB9G5j5ECavBrE9x8urP4pZrF8KUvNjNpdmTML55Xsvr9n85PYdNr74Xez6mMV",
  "key18": "36XJx9wVWKDmGQZZSbQq1BJqbZbMb28Qj5KHvShJDpXnembxFH19uHNmCdyZZRWMLNRjtRHmwZfUUSU756VAVxNB",
  "key19": "FWzewzLDJBq5M6fuSRwfKmNeZ8Xnb8iF85WhiTH4hM5cykqe5gkhRZEYiNGjQtECrmwjjXXs6AZ7QEnvXVKh4bx",
  "key20": "48gK2FYe54y9ate3YbDotNYsQPEFJiGrxp83DKNGiNFNpHwbWBEDwAscKjib648BtbDt6FBF9At2sJSLd5Rw2ub3",
  "key21": "Cq5e4xNdfxyK6FwBVcuQXo7i6eZMsDs1S9XhBdkW2YDoHKsXHNzcYiP7VMHFjPdsdri9djFUECC28fo45kHVw1g",
  "key22": "5t7yzCdKYk2diVt9sMqYNJEd4A2UkBJDKPptcchBS9xhxMQuM6trtUdAahqKECfWLe5dhUfwQwT99h9WviPcnhMT",
  "key23": "2tfzq73oxtbKdwMnRiK9MLxmrGMFe2fgpYoXzFbRvu23J9o9jXsan2LBXv4jHcViSZWwBE4jD4nvDy1BKdAtqveA",
  "key24": "2WAK7E8bUFQXntohiVoNHEurZ1ymFDR6y1V7d3FJVNbJ9h2R4LbJEa6Jxx2HjiBWe9NmTd6G6FZQJ8fVgVKFot5H",
  "key25": "2h9sDYX1J9iYPMM3wRnX8Bc6NXraX7AjoJ1iKuCWoCETkg4iSXb4BKksTHGjRceKrUEzqi5nLwTzETd8UM3tSeHv",
  "key26": "2QYW7TwK8LGVttpLdk9J8BEguD3eY1gcGz3EedY1KCkaUEjUiATVM59djYWVB4bYYsahQZwB9kkrX4L7LcGnNdPJ",
  "key27": "2KGB8dDVSqNrzicKzeJx5eenXPYNmLLM2BkRmqpeCTBdvAo4aYLe49Q84XYdRYoezLSHePFhTNWdSKteHSvLHmS9",
  "key28": "4odjqiL8TVKfpRkdbTQqBQEA551ozPNDsQQNLCC9SQyTC1bv5CtmLZvSCSvwzRU7XHzyZjaVMzvgAo1CkXyMurRw",
  "key29": "2oGPdHH6GtfxAyaWMHwS49jxyvcGzLtXrxkF7bgg9qtEgyN5RvNn2aX8P1RKs4SszKqxvECdgKm8uVDHYxH2ayP1",
  "key30": "5ipogQuvkadKW7SZP5T6pjMX6Huu3Aa7PT5rxn91oxnpZCNGr6vMdt1MGV6bwG1qU3w5cmXfcZukTXRuNGWnUsMi"
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
