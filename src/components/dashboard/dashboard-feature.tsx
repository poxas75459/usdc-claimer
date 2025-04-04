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
    "2TkemMFD8wXQL82HoU9p2YVRd7i2WVjikyUWcjXLASCcSk7y75o5iWm8pCGyad99Vkxu41NuKE997ne6No9ienBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGnFEo6khqwdXqtGQS1ybZfC84CVAvXpn8Ydzy65V3eUD33bE4Pph4KS5fnRe3LQrMuppaX9c3MKvyXs2Vs2YvA",
  "key1": "22LuavQHSyair7x9iaZ64sEoBJk6VPKPZEqwNTZ8C8Qyv92aRYRX4o1w1jPhEMEheZzYyVAg4NZ9ZY2EGgq5G4Rz",
  "key2": "66mRjAoqbVHPXt3njnTdCa2R6A3BrvLpsbjCJV637QUHMei7xfAtJHfemjGJNntpzZiro5Bj5BVEXUnrBGqHv7o5",
  "key3": "f9uqx79F1RDZja6K4PFC1MjVxEcxAM8NpaqrS4FS38QcSeLDzobwxvHWgpHHHQWPBMJe36sb5aMA4Z7pVEDSysb",
  "key4": "3JDMNbVAykCurqkxgw3m7Ly8ycPvU55F8EqbqT9FnB5MHWJotDyg7YatQbSXJJW5eN9hphgXJHGN9Gtu8CxD3NfW",
  "key5": "33SRa3V2ryyUaHHFmN61jkvD5Hq6n81By7SmXj9sGrCmHTkYqEJuH9EDh7y1jHLkQDayWzsNHjrHMTkCA5eJBVUj",
  "key6": "2aKLrLkEcq2BMQMZSUXNwAqCw5J37cewb8rDCxbaXFxdbzEo2kKwWXdk9wz8XXtWuegjHzMiL38vdwBhuaEGpkeu",
  "key7": "3AvpiTqcrVUs5tLBQs3RwBbC87SCqDabN2oyYmpxDKwrqXC6PorV4Q9wtGUZvdeTHgEX8P3dto8QLJYS9HPDpT1W",
  "key8": "4MLiE1AGCbL9HqekjHPv6qcwfEQbSzPuNsYo4VhTyEMZFpAP2BANXCFWtQzNTTjRHaK2rdPi2LZuws19MCoyc6SA",
  "key9": "37zeeYecUECk1k2uxjDAftysFA8veeDjx3ErgDLEiYCeCqyneDKFMKuqeDex9WXXAj7DybpmeG1hvFf1Dghx6xse",
  "key10": "3VZgMTyouCqN7d46XK8a2Zym8vnJbR2dTa9arrSxv17uGRPujT1RLQGrVEGmLSMK24KwfG4zDvmUCzEi6mtCV6o9",
  "key11": "Se8aCvT8LYHubKeSuJiJDuj2CBm1Fooq1Cfd7cPBZVQnR7Dm6ZYSCQkgVzx4zchUWuDStNqLt6WApuPnXLUS6NV",
  "key12": "3m4KVcjvN5ERkbu2yWwW4tVNCkrEtmk2xH2owaDd61dhyCwoRSePuifdnK6fSDQMUQtguv2WybYNXKM2pVd1oBLt",
  "key13": "5fQdQK3JzEyupfwKDEWkbb4Pp6QngyfVtHSgrV5rYLw57DXktdcQY1We2j8GhkydFgnGNe3S4KcjRgvoEuJ79sWu",
  "key14": "54thZR3MJkqqX1W2CdbD1f1rgHGbFAT2QzUWRDjWBVBD8hNe7R66sU3xh6SHKD5iQQ2pKCHMVB31XamjbqVciApn",
  "key15": "3FuUFZgArLyN6U6cccpmHWUdf21T9Yzg4KuFcLk9qJysNQLoLnscoWSetxx5Cko4VWGWJUHw3XLtV9mp18eXZdLL",
  "key16": "5xbVWNRsfbW2Ynwa2ET8W36Qmew3y27HioYU52Ga7EMcHWH3BAPKHsiHnCsEpeRFn4dUAQMRqorytXLtMyT46e6J",
  "key17": "3WFEyjmtWjKcQR9vVW8uHCgiRjuUAQP4DNffo4t7ZDagrNTGghMF767PYfBnvPHU4xCJfZkCYznfo8uE2UoxqLvn",
  "key18": "2r9y69FfAXZCb2ZdbrfYKRqRG3wssPucA4pBSoocN87XypoL1fwFu3ydgkcozrL5hSmVZ6kkbDPvVJYRB4g2LdM3",
  "key19": "53tq7ReqfgWoZEvkGLbeAEHAFEVDqTXW8yYYqZ4mA4LbnQVqRFPShtAYAcg7GroBGMvbSH4CtF8DgQkvXBWTQjxi",
  "key20": "2jLk7KTvhY8rzm3bP5vPgcvvej37v8fUDPskH4viEsDQkHLivsc6aKoLJpGcNWzvdxnLsTLN3BZfhjZ66CqeKoxc",
  "key21": "4HsxbkkZrWN7yqcQokvEmF4Meh3ntK3b4gzZMg8urFwX2Lavm2qAftKXKmk7c1gw718JuZwDZ6hCqrYccm8xxj1Q",
  "key22": "3tp8eRhtNFaZk6a8hVANJvS8baJ7UYHuMjNKapZrWV6NGvTTKqBcBZXZBogJJhE6ydFMPPt4sLBMXgeSZdTLm1fp",
  "key23": "5vGceEGuQCZznSCZ6Dz2sLhF7k5eCLKwDzaLq4mRsey1nn95JdmyFQxbKJPSNyRn6ve95536otJSkVGgwxnqd7TQ",
  "key24": "2ybiSrjxozud2L1Qq8H17G1CguTqPVnxc5HHDDP66uSpgzWG7azcmyqFDJKzTibMmtAFeMmbrcRMhf3uKHkaJx4U",
  "key25": "3f62NWCMp728681GPSw74aQEWoXNBTVjCd3xNaaHTukhM3asdsN6m5cDpLCCKGF1RkhY295kojcS6wmaC2tWhfiN",
  "key26": "2gqomNb8HZs9e3vXiFbBZwDu7uAekRsk5m2zpK3EpVwebtUWFpAcRykpadttfmPPWskR5ekQ7uJXWcF4oJSCgUvL",
  "key27": "NVAwTy4RiPH8G8KSHc2ps9GYiC77E3Qz7ixLXSQCZdEv4pbFAqgSugPSgjgLZ85PJBeYMCTinNr3nRjjy3gWhRD",
  "key28": "478ua2rHbMz2tr2kxxZowKVm2Xv8SNpLTxyTJEiuLpYMEg3botVJZFSKaFYSWjxnF3zJCKHfosjvpxKV6JKuSj8a",
  "key29": "4DZmiA3hchZmaM8gmyNqZ1DBMULRQ6wmd6dcznanZpUCS7mqbWfwqjS4CYjFZa25FWazDt28aH6K2kbUfaWgLJo9"
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
