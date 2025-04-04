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
    "4mxbyB6gFKbPTaiCz88TV82Ed7UecQjGGcKqC87UXh5mCm8pBUgRPThnx53WMfcN9VymjPJGGiztWY18AHhMiFAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yX8gtzwq1CnQjWhf6FSw64EJ3LqwJP6Sp9tmUSarTXc12D2UbwvZFzAgpMYiqvSnw7GhFcJbJXro4HXv6RKids",
  "key1": "3aqr9uPSGPQexMx3xEDrbgzSoEEifeUGR9eXC6KoyJWimUfjtkby8qp9GKxjbBUJAN1cHQWabRvFmf3Wg2SYpcAq",
  "key2": "5L6eYsQo4T3xsMqaEKaQ62gq41GAWZ3A7AU3qYznzaqBA5eY5eY2PS6tjKPKo2PZ4V3Vhmnk5HXWcBTVnVzzGhC9",
  "key3": "DGWNK9pYMLyXBrXdcFHQYhmGvm4tyGYdtyNpAC3vV3im7fnfjyR5hniGtsjCqkfhHbDJt14q12wgotw1vmXYStn",
  "key4": "2sJGHWw7fLtWBQA8unKoBeaJVKo3FHZiqZZUYvv4k668jkQUNniJp8dHYCA14cVNEc5GVVp3xCuD2TW2eYNnz2uR",
  "key5": "WA7eTAzojAZipxyxS7qivLG5dZiZaYbCFMNqtdr8RjdXf387yUn9TESmPrSiM7zSm4zdq7Ks5cSdkYnSFDrBRiN",
  "key6": "54iRwWycvAXmwqbpoBmWSJNjKqDDMu5TbEfdfYRRYw3rLfx7dcXxeggTs5ZvVb8hsbofdK1h195xBE2CapiLuMkU",
  "key7": "5eLQZt4bW5Hji9QJb6J3K1iDkvvNpng71WNU9YqTzr1XcoY7GfiKUs1KHWnUJgzmbj9kLfJ85bN1oqemvvLrLHf2",
  "key8": "PgtRZmdGc8G96CzsbgbVZuzxqMYmZvbvwqUETJ9EDiWEgZ5qdjD7hH1YFsDSbGQMX4Y694pWTfR5kvaVWXXQmpt",
  "key9": "4GkLC2W9jK3K3Bcf2sU6SST39x7gktcqtJfxPm384kouVJrVDsSRvmdDoTrCuHeyx2gtyPspM4Y6fzvP8UeUE3hk",
  "key10": "3YvPm8PsR1BdUcLeiexS4dNPoc8j3m19ugEBVpReuiqyBkq91bnFs4yHY4aKjJstY83S8wFM8xCAfSEJrejy24Y5",
  "key11": "py624brEBJ8DG5DfwfQyYZKN1BiK9zHCRecubKB8EX5iKb1oP9E1NP5qSP1c1NEWgtArNUpodsk1N3dNTjTZNdD",
  "key12": "3jEyh6hvtWjGq6Hk5Sr2TvQrZUypoKPFnbD6mZM5U71KpRMtSaGzsdXUs6yVNR4M2ztWT9xoBuDdGgUyTgJwTL25",
  "key13": "dS1kbFox9mjKBUef3JpyJBXGKgovsntrAKjtzKecg8w2SK91gs6mdhLiKYmzQ9UQ7KuWjB7SdXBd3g4BFpWZ7ab",
  "key14": "2djxad6Ki64cKioUz7vHk3Lb8btE1EETYXDineAdYehr5SXtLtZBeyqZ5nXC6WnnHawSJW32idJ1AxPoVq6CotFL",
  "key15": "3GeVbEqPAt88ag542p3Z5Hz65TfaTj7KcTSYs9hWBJJ3ZHf2uKcUiykfy4DXMVNfML2X2kouZRb7THfJaFN8TDcf",
  "key16": "5xMeMH8XcFWf6kF3Rfwa2jNqxUGRaq6z3L9SigNPpWHRWmzaN55cVjiLX1ZDXDJvavBpDBYs73Qg3X3nMx26s8UQ",
  "key17": "fNsdk2yRJFnYhGyAqMK2YumJ5oDpf4XJDeuaHuhU9CvKADnTvtB3QHnoxHHX4QUsCXVBqnuMDYtvGRD5TCCyMv7",
  "key18": "3ALxJ3dZYMUmpfjEBWw4HUa3M1uS3Pbf8NHm7YALuGCxiFaKEgeCRCm4Z9531U7Ff2hFUxDtiDbqxkaRbKhuovpD",
  "key19": "5PvmndB6HxSECKaW9f9t7tJJMk63CJf4LUjvcojH8DGuxRzRXDjXfRyf6mrjFdTguWqxoNk5B596JC3xLhEXHQLK",
  "key20": "3FAQt6LQm2PR1uJZRWUcS2t1t11fcutJPn9aD53K8oBEVzKqVVEGhtsRkZN3h4Aez8u1WYX3npAZHyaMCpfauDXk",
  "key21": "3AXp7yj4mqmCDLZuBAQKKb9tczzKgCwE1GHnRuadeNMijWJjrXe1e1Ksbz4f2mzsjRBLi5XNm6Tw6RaJFMssYo18",
  "key22": "2j3XXmUS8vUXS32nChJ7X3rggT3G8DgYsLfoY2TwHiSQ33gjGXtgXvBYBD4V3jF9MM8gPrMCZ1okJMMp6MV9UwYs",
  "key23": "3Ci2wx4BHfKAYBiQCSThnU836uZ5EeBv5Cc35tDQ7fAnaAn8uYqH3gswU2Ms69Au3W8nLMSyYUkNL5gHCeCKcXgs",
  "key24": "3cPbZe1p5MEtbLmy8CNpaxyK5bXagEWw5aRBhGkYqVSYgNCu4MnBpBftkVKDqiQ7zwtmYHXJ8AjLq5CX2RVwADAv",
  "key25": "49Bt4uEdtHLu2AP9Gr6C8jTCdCH98UKHfYbKwugCeUZ3CUF2imYp4X4KKf2XN9EiG72ibqB1Vv7hu6414kdpBQfm",
  "key26": "42QKQku1FJ5R2gExbciwiWDz7XyCTfHuK49ZjcKv3NugoFRZ1bjWVKsRtATaa8pPE3U9j3PKQT6ao9eUcUEyVAvN",
  "key27": "5FnEHvBP89rDx8ZQSSNKGjrqXtFeuzSVCan29GGRFQMbkFA81r4XFC4NBTYPWHXeDEjCpSKtbaiPBroscLRUM8er",
  "key28": "3qdvo48f16N3pjMdzKXv2pKxnXtHUQLTiU8DeSP2ikBL6S1JuKakckMm3iRnCbyx7JiwRfgMJNR8mbBNbJgyk6en"
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
