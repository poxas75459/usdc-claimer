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
    "67KHP3HGXL9ifhm5fArgJSc2JmDXjrxRUPDTjjNRGx7F3fvm4KW7xqmpGKG2RMrmJN4WCKeQVF4YgMU9DL4gnY7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LR8P573A3eafEUY975egB5ieouw8HTMHsgGQBNHr3TBgjWGj5azXuPUAY6xr2Zc6JPysbM44WHDmreuAw9AQJPp",
  "key1": "TyDbtwPejqu3uti2ToJLfpd3bhRTQoWG9N8MASEKtrm7omT53qXCMHLcwhoiNm2njSMUZ4Jj1Ko3ucEp2ufuJjj",
  "key2": "58HR4yN9XYYgX2kLkrX8eH7VTWLzhdYZV8P5cYvRMSmRDQV7vZVhjvEe58yeytyVjmzgf8GiSELxV9ytdyJ1ScWu",
  "key3": "546qWrDA2unHyjVjabp7sq6Yay66ZUt5yJVGE95nwMxBRJ7gS5FhLhpscuocCacVztrr5aHA2rFTMuD8PWU3eM84",
  "key4": "2p9xn8Ca6LSKzWRsNxWmPhrFmP4xnVY8CkX9wH99o9PzYWEjxsc8hNGiCEChgotgDSMtUVqhSaS1Zq28fjhSB27m",
  "key5": "2fmRJ97oiEGZq4MAyzs4cdNsQg72qyRivVThVaCyWq3QEVY9et78usmpPVaT6GjK4Nqus1rH4yV8QptCuLe95zM6",
  "key6": "5TAjUvtfhBvVA972MCuMAThxvhW62vFAqMNtUD9My56bg8qtcPcBobSKE3BcyQkU8aamafVsZPLosQxh98agAAgB",
  "key7": "5ZYpn7WJCj2W4CibEtkcUaRJCQXiXh8YJcE6kezSQ6uRJYfpucpJFv9vEXoD5Ap2FrDCfDzEujcX2wZvhgy8SRwc",
  "key8": "sKizfT4HyPbHG7moWWTga284sptCeP4eY4o2wwHm5Nwc5CeJ76zg7ZqSdjQvqQvFomTQ3rE8tfHNRwK6DMYc97H",
  "key9": "r9FuGjtVTW7UHkua4dU8UK37CAJyqKRCW2RguH4TRDeFXiUBQzskYdk4uqq4Rume2a5pxfwm3JJTkUpfgXu2J8A",
  "key10": "4j25PmT8PJ7g973NbDN4D7EqUawuqQ7przYoxZJAsXJCCeQFia45Tnyb9jLLc2jNk2YxUsF2pnt1Xp7RZDrpo8Am",
  "key11": "rWkUFg3vYXKVpF9aK3hGndqvtLwCRiR69qbr9skd31NmbQMrvYyMW37v3y55YrWBr3SPUSHC1VmCsC8AFyfhypA",
  "key12": "MwC8wW9YE3216dKQU9pez2re2RfeMeNr4bUihyhREkHJyG5311JdbUeibpsDTpheWo4NdAKqDU2rVYzp8SwTNzo",
  "key13": "4goTZ4pDiFLjmuJ8MtuLgF86mDLLRwuBgrp5YkMt2srSKhcnKVdaXCKc3p4TsKPb9W1ggBrtEMnvGNuekLSyrvUF",
  "key14": "Gsf56PyyAmgffFY2o9Bp28wWpFGXmtaTbCueJxa1zbJr22vKZnrUxQ75NavAaQ8RXvVWQYLPYEBmDqgvkLb6VGt",
  "key15": "4HTXa3YDDgceZ3VLh4U8y6fXybKgVuBAgcS5epddLwUPE4SGVAJM5kmKeicUaChaDrK9DeinNHmB4aryhZ4RTSUm",
  "key16": "2bd3zcJq5g8TEgV5oohNKvux4MKwnZyBiWSgcuHZ3bHJRzUuk6hDo8bKKEb4gKecuEkciAVyoxAbgsVqkfTWfPEq",
  "key17": "29sp8AkucHw1hYLdQ1zACGuFWhDNNeaGAwQNtLXZu64v8ns7BxkrA3FrTJhDdfkh9ZLpCN6PTT9eNUpEUXUDC7Nt",
  "key18": "32yGXNnGfrDHBrgyyc2EKmkacdJ4dV2TmDsvPfrNBVcTdndoo1rLADv52siadptmRjbsnm7whzUQBAJqNr86i6FK",
  "key19": "ptWgPbYTwQjdUdXDfsAiLGur2scMhQA3RgzuPtwUEfd1WEugLiTgqBrjZCzMXKXgTsnWzBQa5UtHTmbyL1wTMbS",
  "key20": "xE79DgmHnwMh6fmUaSdutoeJPh88SX8yrmMRexhMz7BfVETKLFFrPg1cKMMcCs3NksdtxGbz1PirotoSDgbPjmW",
  "key21": "28JaWZ24eHZ5KY79ZxYDwtVNBdJFVeFuWBu1FSr9DpZ6j79T7K1qbpRsvEigBHeFufFr9mvurW4UJqGLyafK1ahA",
  "key22": "5uQkRBThMjxraTb4J4MPZkW8bFnDwV16CtC1NMGwcJLTAHTRgggXGHyfMDD9zmhs86ojwmckSuZFqbB5ck7Qahgf",
  "key23": "5ysbT6PPH5AENCUiJVFokv719GQADqActuginoKuYq8TY9Cp9hJBy5BdZqbHnR98jrNS8M8qLGaHLx4j78781tSr",
  "key24": "3vKT4pSLBSY3Mu8PvCfRE5hV6ESrxrUHUYLH7KV53PwSmAhKJZ1McXKr6948Gc4ZASvfuFo8kYBgULiUtjreuj2z",
  "key25": "3U3DgAz2ckEk6Fij41rGVxZ3iKjLDFEhbiBDjbW2S3R7Wf55m465WnJkrEh72Fmm4f2SD6F4yFzXuzFYjxBv1TSq",
  "key26": "5sNmd4fn3UG1dTtQ8HAuPAvJtzpYujyqd9Cy5uWUyhZQ8HvzNf4wiko62jHvwfqEoBDrduj8z4SfoRLKgG3wHUkV"
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
