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
    "2z7T7FgN7rVbvr8rApD9x2C96TQ7hu4deLKbmdvKXXK9q6u1D6hRmkFFBHKfggCP9Jnk2j7wT2QGewfJM2a5BzCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcijahfrbG4oWT2pHf9mbpgKKNFSm1oNyuQ2TZD5t55JPrV4d3dkUJjoFeByw41mA4E4SjSMwUD5pTos77K6ggg",
  "key1": "4F7kvUFGeCvLogVSQkgkuuYX2wCTFmZWBqtRxZWwtk9LAZbnnsz3SZp4j75u297meLCaQJqajyWEjACrpaxzRjp7",
  "key2": "4gLJHf1qeYMp9cLXfDgL8kkBGFKsYZKWpEWxrUTjtrCBQkTaeQS2Voj5p1pH28AZn7iRWdkVpToAbEgXMNcsm58g",
  "key3": "5b8qkDzCLUTdAYAWk4MRU1GRWyZULzdBHA3Qng1B4AL8LXxPorwC88tLvcn8yp3N9iekTzjvraE2ruCP3aqbFh2H",
  "key4": "3unUjqYTxawrTgozmBvu3vMNFp95c63DrMVSEvVqaNsP9ejeKKfjmcgwgmibM9huqacAQzrXSPA9JqY4d6RfUfGr",
  "key5": "3nu9Sxqt6Nv5cW7arCstBCXaCHBPEnPdxgri7qJ8gHNcdTdgwJDBbVqnsDUiVfWPTPTVXofREe9WkYnwwbG59Wur",
  "key6": "4gt9hwZTjJfLWRze2VFsZT6XFtK53kFJkAfxTdS1sdMmi1bcMQYLMDbXXULChLj1diwt2bAa43kbT6u6eiXsYXEX",
  "key7": "5qkFtrKeKvvW6VcYKvgpmML8sBm4btcNrG4rxkzyW2pVfnjR6Wk2MxwYJ35G9kDi9UqJMe22wvuPzx56R9ap45Vv",
  "key8": "3uarxGrxgYbdrVqQ5j5mtRBLhwoVPHNSdkNLiTnXe5QW5aes9qeZyiHDCus3eC8Hi7xpTehhth1BsTcwWBRpmyA8",
  "key9": "5sH3YpBpbS5xhfMGuFqwLBYdtT4ywXXXxfasxnovEtCwCgF6H7h34WFoH3TkFwQjggMPyMB6Qq8CHjw7YWPewWx9",
  "key10": "4goRra3YfBp3tpN79R6zDhmA52NR6EMHdc6csrJqtRXm8koj9WgE4Fjek2YjTcgw7BmiXmyBMni3VfEZAAQUzvsx",
  "key11": "2XAHXDVQPaqWCCbqyBeHdaCkBDztio9oa5ioJrHzPJVs7Ltyo2J5dqtsV1UHyektRHxFnxVm69dGULUgd7oSYYmP",
  "key12": "NPwLEbzB4UoQrLT4sNWwyCD7VqQLMxty1D5H4vbgHfEpeua2EpnU6SJmZnHe2XPnFq44TFSFsMSmoioeieaSFgm",
  "key13": "2DbvWQRgvSHSqFjReMPffJ3VpPtjbQCF8S1ZvEapxqyhA5TvUWSfBecLLbzKqq2z2zfGrprv8NGDFNkMyb3ragJw",
  "key14": "5jiTGAzNdvf5MSPyXTNzgViVyNRW3W8D3sXLTKNeiE7iYEAHMAHG1efgVtHG528cUF6tNUDAtg8QtQ9injZF1Dhy",
  "key15": "2qxUbS99j3Uu9NP3W5QKandwK2AmTZwCp4Qw6TNQEzqcPkCk4eZyZa7XmUd3eJuPaFmc8YUsvjyjyHx23cM62MvS",
  "key16": "5CrFQQdgRBMyHEJzCykgiQXcYLW7cdtmGsSSbCBnPLHkYV2gTdnbk4Zb7Q5tyiiYFJKMZYgRJVN2gHjaDnyxg8Bb",
  "key17": "4duYXikmsLY2hJRh2TX5VaZGm4K6VaA7Ga4TMqqjnwgqcacNN7Ue8R7FH6JnS9zkw6xxfCZsVDxMZ4aYRnzM9e3L",
  "key18": "3dQBJQG84uU5SX5gYxf9aE6Gua95ZaiDWoAXUrhKtAn5RjBuF1hd1eDvzknGqa6eD8V9jmxiFo7c3TecAsXSrUyP",
  "key19": "LnBovrrBvPau6Xgv7RvtCVNXaSzaTBQn7i3cW5kFdaZ1Z8oaCaTe4DADZdhEgs56dneHbWZdNsHVfxfaFkMS6oL",
  "key20": "5KGekB97boYvAZv6ztbXvdLUiuCM2uc9s154JDPmiR7Sdbc8oUFfCo7eYyaGGHuDECArpqo6AybdzPrVHsj2cspR",
  "key21": "3ZC6U852LYvRwzzg3Kvoq8j695Q6cSn9w9EbdEGSmqo8NcXrCTVsLdnEWXj6Ta2m8opJhEkfmkaQNmhE8Ljrf4Vc",
  "key22": "2NzMEKZ6mRPBeDpWmgVfbyc91rP9ZfSEKQDgPRkvWf1vmu69TL15jhhsCHP496tuRs5Rvenb7ny7P8euhFUi4cX7",
  "key23": "zakzwyz8ezFE75UVwSKUE7UX8KFKB4B5SUmvMdKrNF6M4mJUDZsF6TT1pop7qXuE3yZXrpV7JE9ckKfJptXbUsV",
  "key24": "2kWK8kcVNud9DorqBhxAwb9HgEKyEDABdJfMWGU1ZeNtzqScuVDJs3mwsL9hwsXsAeL3wdjXTn9TqkBK2kBJUsj1",
  "key25": "2gVKPZJmXGWJZjWjZ6q8pV2XwovbKX1aUTmtWvRoDE29Eua2QygKkSDoEyenUY3ZLuZorRKEktNKw9Phet81aMaH",
  "key26": "2b6qhLMkCrXXTYk25TNxTwvWauneDbydRCyxvyf3CzbDqfyfiCqidoPPf25FQRimYmEgKdWirmYMABzMauWJi1xo",
  "key27": "59H1YP5YUpGYbRJKXhCXyBpU7vWY87VqxFQSCnN6t52VEZXU3sBtg9gV7ApF41FUmXArydKiRDT8CcuUQtKpUh2h",
  "key28": "5xtSytunMHBiHRSyeEMTRaBKGzSXN6TeALB5Vn6fXCXpVck7vyB1oeUTGFjW6kh8YP7hbQvo93zyWqrG5nQdGvuL",
  "key29": "4aTQEE3E4buq4MJrZZ6GWkWKN5yaj6FxAtTFgpLBtXQ2rj6EtMMLenAJU6xeL3G4HdCA2bVyNqiNNUMbBMtoxtkc",
  "key30": "4wtMgx7cCumLUviRapdsaRF1Ea8VQUuK2h4E133Z5SidX6eNmLBx3yfWhCDbPRz9Sx6ksmX2xcUnkCAbmE51oepM",
  "key31": "5nEyACu5V4hWNaRTDAYFhMkvSsPhBm1zJnLSQZCn5Z1AmgkphGPAYT4JcapYDhgbG26oQR7fNU442j71YoRiuEo7",
  "key32": "61adxNX6xfTkVszUJ6b5Kwkhqu1J3ySSUfeL8SHKjUefXMtqs4J15Pd3Z2n42dQoMPg4bTiMJfBcEd9zrow4foR5",
  "key33": "uc4u2aMCC5HCahfETKDe3bQbvgsNsY8u3j4GCSD529Q4rMCNSAJvdrKgR6GqszT9tY19ARxWQnbPDoJwpzjknpm",
  "key34": "4BDdNJ95mmXBDuy7MjLbjg6h1VHkZAj7nezvHgTGTe51NzLJgabRLheaxpNJ39FexLH7cY7P1bDFyr9EJZPtXgLQ",
  "key35": "4MtzKknenEStbeUD8nzUXudZiHK8oGK2kFZMd9uzyN3YouCvfUbNu44C1SeJ6PZEVFxhfvsuN63nWzLqs6Th83ur",
  "key36": "4DvERsjZxJqVdwEHwXcMEu929ZYPsqr9YZU8PB2NNFpNKDuQuDQPwW3WDmBSadh1EX91qrezswGKs9EstJErrmWH",
  "key37": "5NNLGKyJDfjTW8B5C5Dfn6TzRcBB9sVc4afjVZP18RfbxdichGQcYD7s81v54A3LF6RcGuGMLMNXNUd3CABXDH8U",
  "key38": "2LPJhRs4ep2v3JceQpPVUuw83nHXFyREXBvazVPKJiu67YZEBpjXWiAupHK711G1GTWgNgjdq8TE2gSovufGtbMm",
  "key39": "5JasQs2ABdKQphzBfmSMKV5pmPx9gHfrqCVXba4FPE7n5VmbbgMc1RNXeXSfPQTdpYDmzNytoibQQfHMFF5m3DWJ",
  "key40": "2GRkDFbkmzEBfUeqVEQH91DZx2jn182LefspH3NHrxAjJP78LpUTYS7ELY7F3A23vVFvCAnv5chCh6L7hwHvmKnU",
  "key41": "3XBye9nrENHhw8U1hDyEXzQefC1tMqYrDKU1ivrZ9N8U4gfNBpdTCtuXFLcxTbx2HcmJb3LW9amKSUW3NKazKqPn",
  "key42": "2b2ikFtsL4o8jZ7G1oyQ8cMZJri284gzF9wmjPrt3ZYRp5kadg7SHcVX7wuJJMFCHE8q42nma7sPDyZEcBxcgCFB",
  "key43": "3Q66XFg6F1Ys4p776jkmcqhitSqnwaHGSwL6khxwLrrmwcGQbUAAKCEH9FrHbY8SWGQXDJb6mjhwuiJraY42fddW",
  "key44": "4UNZE9VbdtyBxfWdbf9vuQHeygxLLhxXhUCvDvB6NPr98G2ZrojzkYJ3NHjomskiC9U3fHLgvtTaEVRCrVt3Rqoq",
  "key45": "4uoDgJoKUuLoGg2kU6WY3aEXC4RzS5ZiEDGUgacS49Xfswm5NsCZ7WFfFGX4uo6iFneYjThAL4ZC9X4sqYxo9iSr",
  "key46": "xMMFtvfHTGCYZUgYktB34G1MKBXjFLvXVnBpjJpNh8Wgf6b7MtUGd6fgXvJmxe7xRZWSFLeg1MhAporCcKSL5Eu"
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
