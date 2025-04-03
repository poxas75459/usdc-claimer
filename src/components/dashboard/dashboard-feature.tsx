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
    "3LefC9p1nWEhAJusNuWGizGbAzmb5Yiv69kYhWrExoGLmXGjusBS33mjcMBUwzgjeYWSvn8aYhs9g8Q1DgNFFueJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ypzt69YDh6giV2GEcppTEJLDoKpVgY271KnazzMkgKfoQcC355FRNXkHrgNAbWWUpNrAKYYpt9CS7hj5gwz8er8",
  "key1": "3PHvjvbkwRnbDHkTSDfBkMxKdab1DeNGiRqWafDRshTv9WHpyvRaUhj9hkhwwZmfxY1ZrWwHQhFSt7nH21ZgmdvF",
  "key2": "5f1AvbnFkDvAxJQ14nhFZArxTUffmq8nndJnrX9p8zH4bxvLNksshrE3ZxWLvQptHELQQz8efnSjMDbMYMhej2wC",
  "key3": "4LcCLgYayF2qf1GJKnzVKHAjyu9tsY5zV4DHTSdZsnnt3UHT2K5mLJtMghyWaM3dr736Xxtk6BNcPm888W1pH1RH",
  "key4": "3B7CHMJWW3iVRnB7A4wJzZqPwAnWK1XRftWapCjfJyHE7JLXahdyft2oHK8qsk9ic1sqHkixpUUwKXPvbst2gLRy",
  "key5": "9SEEcJepfwFA3tEZqP71KBYxPnj6HkvuSPTo2afGhFXXHrWRppMFiZXnYhvyTsrkxmNNgTLYS9rpabXu3C8VnvU",
  "key6": "32AcQoXngKmx4sheYLCLuJgQWW1ow3r4YNff5p9Zig9PYZawVtnxmu2ZAzSvDM6sRq2Btnq1oHGt8bgVrg9mWccc",
  "key7": "3ZhCD9yp6y9oNEY5MppW56XLndYigCixvQkWLbfFZwu5vpiJ6jcdTdsK6e876orVCtRiTNuFRmAaeGYvUf9kKWXb",
  "key8": "42Y4ajCHDrYMXrU7srQRVxnGhdEu5PDCCRQdjMgD9wiKikgD454VjiAYDisYz75gqMuWKQTB2goRoa8kbt4ZPw1h",
  "key9": "4Rk8qfL9RrMtapmcHkx3VGBs8TPwxz8sDBR7VyPdNZa3NdVoGhQe8B7LftTonB6xy3oWvahQEAk5P6msX7yRDAao",
  "key10": "29WgnFdVrpsAQoq1EsbmiCybbwYsqd8qcbXwUWap3ebj8EwKJ7ifCLhfEJ92E9kZdbUrtjNQr6UKbHCzUG7rc3fE",
  "key11": "kb6ikFZsoNmRr9CDna4jKnGzyd5jSyL51oQ6YSh8g8DgqybNWFhNQRkCR34HUwYuS6Jc3zXh2q1vKhi3Q8nJpAM",
  "key12": "4Hd9NgBsZ7Vd5FcRnGBtc4ou3XGqUb1XEjAdTphmsE4jfLGDyrQsUMxYvpNtQrysFFEdYsFJ1Yh6waXt6JCBmy1D",
  "key13": "2fXvYqrqXya1UJAxsLJXrN8UMd1Yjst2tWpwxJMwzj3GNarvZB83ffHeVaA1nA6occgWDyp8uf8mcGdvmT1xzgXC",
  "key14": "375ntJdDWpL8YaHPyjAVFpgSgKkFVFHkPE9wwSrZzgFzKCNZ6fBr4N6Lvk6JX3e5i23oueKgsE5csqybZA5viDRW",
  "key15": "2JeRH6n4a2QHPKgkLH3MX4MRud8fRgDG9RZkNy9gkt2PgQT2xtp4N1fa3APGkpG3P8gjieP2ytMhg7JRZp9TuDnD",
  "key16": "BqEfkQcLDy1o6nBxDmXbZGGukAoS2gZGD3iJomuK9KQWo8ALbHCGadswZgYD1i5iT4p6AqsJyUek7GvKQJiB58Z",
  "key17": "yhsmS4dZ3MeukfaTcXP5epx9Z2F6AMi5Z4mkQPx8ueZmYQZLdbyjrgbkwep2mZ5VaBRvm8uimFibLavbehP6As5",
  "key18": "46qZUUr4XYBDL3jz5SZ8r8T6y8vUyYSMor6w6Kb78C5LHYvRMAx4Lh5fJXBuhLg9AkkNAr46g6dZByY9TwFi4z7b",
  "key19": "4u69vHiY4UoYTRpJGTYeMbuFB2h2sSvkVcc84Ae6ZjKkF8qwWBgArRw8xFsFdTQSgh9cZ47uXbwicHri3jtgw1mh",
  "key20": "4pumh5uWeePmBSLRQZsHQrez2qq64dVteKHJfTznQUBdoDTfEgCkhVx4YqQmPreSRjk6nug3E3Nxsm6err98vumR",
  "key21": "25dGgKfgbsRkNDDNYxzkwS439TfisABcuWjwbWs2qvzL1kXnwhMX7CbdukynfLESznbsFZ9Uk9jedMeGPzQoMAcG",
  "key22": "2uyyomXEXz3kTVy1XspF88oJQPkfe5BbPeN52VDAkXuQvgczM3XyYTvyUHi3BdF1b7wQJQmVyRGcvmLGt1n5AePB",
  "key23": "4WtpuohZRCtDkZTfm3PFxmvRCCabr4LHtJZ1pKAeZLZMCL67anaR5cVjXWz3FfR5RsrnkvgnkqCyapV4Bt7fJ6P3",
  "key24": "2fCAZPRmx9PwpverLaqqRMcrHcPQmwVydw86A8rU87CVz711A81nvh3DAFshHhGuQjKkVeRxo8DpQPjZepRZ5sEB",
  "key25": "22SFPLSgURwVBhzA4zXRcUJbCqujde2iBRwZqvfwNVwXoRpaPwWjUUYJ4Ht6BC8MAJHczHf62DkSF2kGbec3z2L8",
  "key26": "3MBSGr6RPHikcfzERvNKRcbaBNoaizHdtxhah8yLaxYbWTdeVVtbuL1hZmvDYgsuDyPcJc6JxqymZah2TcZeizdD",
  "key27": "P7mrbGHdmwN2UrkGQwBFj16EirSXvkVW1iehQsNCEBQxwUFmGdwqMhpsSnTD4xhMu4iitUZZ5kKtqX43HJfHJxX",
  "key28": "4KquodRHM4Xs3cGJqWKwynnVVWho7Jrke7Gmjn2Aebqm2ffNoD2MxPWpstDNphTr9C4zgMbrxir6afzagbLfq8om",
  "key29": "5PKE3VQhe7g54LV3Hna2r9kCPjHURPuqQT5qZB966AptTGwes3GWWpMUpjE4hTx8nSoVFVjZ8ZaP42GpEsXw3Zt6",
  "key30": "2KbPmT9jcfUqUCB2RBuyc5trrv5v8iBiSa8TH986xtmzptRcNbTWpmWHcifZEc9WPjrrVTrPKFxAGHwGa1L1nsra"
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
