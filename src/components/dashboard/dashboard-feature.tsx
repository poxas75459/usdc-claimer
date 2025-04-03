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
    "5bW26WgBXDhJ2BFLC4U8JH6AVgddHg1hSBCMrTVErRZ9Vqd953X8L4aVKKj4KaqXWrnHS3mn3eBoHXPSHmRCsCQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SibK7snx2YVTSwHXsuZo7yLyveJ4kkbyrDbjo9kc4AKhsqNLLsCbQKFti2CaxqUMdXEEU3T15737Xouqi1feCRS",
  "key1": "55zxoD6CWt1vC3e9Y6QWYmfN7wj54CbULesRGFSKteGde1mgm9RA5jErd7X1xsqZUV2iQeFu3skqW7wprKgJiABU",
  "key2": "4Xdqtnu5R58snBZB3upqfPsygdRmSUTSKV7oc8GQv19eQT46yKC9bk91YnkRTUGWDbimmA8451FZ5tENNa3Mk77H",
  "key3": "51Y3b5zp1qTfSXjGZr1MzbrsVtWCvmAQFrNaQ7D16JtvoFGH3tXiiFYha9FtNW1vtZwN3EKJJinjkdnduCqzuk3e",
  "key4": "4AkH7gHcXrW89QTehzwzeqHFfzn3P24aeFzLpuCh54HKtZoAXz5RnAXz3e67QzXqWiA1AdwPv9ghQMwMbNiYMs7",
  "key5": "284uqfZNfcU6aWetK1Mu5XofB2kV8X54hfpmFC4rFCCrQwHwYFNfU2hpaM94oaY3VWmju6BeApzSqAVhBZyhfY5Z",
  "key6": "5bJnSshEu7R2aUjvVuqi9KD2uFw5CkQ5ddhVUeXwYUejTMZYCHkAB8kVDgNC7j1ba42UfhMxqWfWpEbv1AAD3kxo",
  "key7": "kuMSjD6FVecyS6yFSdhi1kV8SwAp64iDdnyPQSUuHiQL3mZ2V2oyTaYS9V9VuxWoRbKZa4Q97ERCsSsX9QwGwDK",
  "key8": "66NGvRgowtGQqi2wrtHADLK24shCfctitt4ivg2W6r3nAaGTQXDwWcvmJVTcGD4PTKcrBwU4BE79qRfVs9SuiECT",
  "key9": "3aapqMcVT26FY2QFqDs1kvoyXjBjaZEBFX95orAHqPc32B8sP3M2R5iL8HhfRaZ6bUfux8HrB5r4HuDvq78dyEos",
  "key10": "2sjczyFXGrXmGMMWBy5jXHKQhUN94ADBbDULCE51bEMWxSJocEALBz1e6atDmUbAEHA1xxTtXQCE5M7oyaN8pxaC",
  "key11": "2Vyp8mufS4sqtYyDRY5skrq8LL6EGBnFBBSdXntP6SGWdUj3g8GoboPhX91utSYFQc2Vbmmv3zjxjY6cpeWu3Kfd",
  "key12": "2ZPVaa74mapwaK4Qvbo4dE8q8gFeSAP8KGDxaWidEugH6NRBxhy9Hr7JkFnMswcqYVotBHMaFTqQoLRxdrhWyWgq",
  "key13": "SoyAWa8YgyZKG1ckAdJHFXsATmPTQhHXQYmmHMbJm6rJUxht3Ld5ywvRwiyYTXtrGj2wig9yjxKscqzG1dHFBQg",
  "key14": "5X9FhwvHDm7Nahzn7uMcRVASgeZPLfPuqg2e4YevKvQY967zksP7HAGYf51mMqXfezN2AYDUEUUeLPMEonuFzzvS",
  "key15": "2Wkc7PV6e2ZfoEsboMK6zNG6dyRLNSMbt5BYRNmTbS5gw2TMkq7NLNZEEby3XujfTAmYaCUkTh9VJjSTDS22CtRa",
  "key16": "62Kvh1i4dGuHnJqm7MtNKe266s6pMFQZAtvnwMVKn9wk5X5TxeJoyDSVwRNtiWudaQgVj7Xozj4EYWmQP3Q5gL1S",
  "key17": "98ZXLfgMQb17Pb3ftqtN2mLypCYJii29JMALc9r3ictiYKyeYXqASBEd33J4mxA1b3zmgcpd7c41WTKvxuvgQv7",
  "key18": "4oCv4PkKGehDJxGeXnqo1mAw2kEFD4fJJfjeejocJuoMH6uUd1euGR8zXMbfwfBhqvdtb9RKAEw2TxyUi2KXsBeB",
  "key19": "y3G6PsLBmGQZtcdxaMoEBjqbuAXbvMdyyrPAkXDB6rJW9amTPPxixuenq7y18qp4nsvWZNL5GR9C1WhQC7P3DMk",
  "key20": "5Ndiy6kNtM7mQTTzma92wpN1v9BPoxAwJhwfMNAnadAPqBHDZPL8fgAWN2s5Rj7AgvviXAqt6ZfMutRt3TLNcYbR",
  "key21": "2s3r8ZNvKMgfin4EfSfv3mTDDwAQwQMWxXzv9ZF8qLcajo5ZjKKvEr5UKGxzYRp4ACMnyCT5RzKsKaQtp6bFczKD",
  "key22": "3SvnVu2sXgjbGexaZk6ptsAPAjkyMPfARZDRThWhx5tUC9goeQHWjamHFVMVfSf5Kk6wFVidwLVY42hycWP1TSxV",
  "key23": "EwJ2U1KQMTV7gQvvJvJVcTW6mHQGtwWhYqgxKgUD98vBauBASMqSNJe53KzN8xZgqVsqhJ7HrMtJK4msdPW5JJ2",
  "key24": "2Y5JYn2YaGMrTsdGe7imHe2FiaHPV9mJicEankzVuHoqCSZs6SYrp5gShmDMZAXzJxTQveQt3amFksK8SASSNmxF",
  "key25": "65Q6NMn179CSgqNyF2xoYDi8qgugQb1CCP6YsjRC2pEAVykZMnwWha8U9ALKNQkfeAZTTwGCW1hemeU9RVuKoYS3",
  "key26": "4p4Atw3TMgn4vkvEgdh4ap43E5WKAo7N4xtmPNE445QorDuE7C3xwKtbnqdjPkeLBWBoXwVq491zdFrAQXtitDwF",
  "key27": "4gYN8rR8YYPBRsquZLBC57iJFmmy8jwFjwY5zMEcmuArn26PavN3A1G9ZBpSADjNW3btL4S4SfaSpSmWT8Mf2nAn",
  "key28": "5o68q9GEwqbCqPepKdY42Yq4bVZMHHggbj958m69yW9Zm2CUoqpSoiv62TM8pdY8ffVqH5V9gnFwXwivnVkYxgJU",
  "key29": "5EEDauamtmA9cVmN2Ti7oKeSce5YUwzBBSvRNF2NTuNarDGNmZYkcoQ3PdcEpWWhfutbwuF62L7PFvbaJ6CM8TfZ",
  "key30": "u9hLi8DxPeRpFs6AHGThtp1Si28g7FqXsRTovy3dBX5Usde8GwPfsXWqxz5fLFyk7CWwZHA9FctG6PzoTgbWD1L",
  "key31": "3zArV2tKnhCagkRFzBREnTFqjC4KmreaVV6483YhjQtNHGWAYzSNPXGztWaDQ32u8Gt34Kz1AmKvAdbDjBBTiM5",
  "key32": "2pTB2wfKap7CdATar6FhimCEVPAusCnAB4s7Wty9HE2gHbrdZB55EaL9mgynKTsZMkYjS4B4mqiNhqZdbRCsc8MG",
  "key33": "5hiQsaLqY3w6CjPoWmUMJ7T5mwsRrnowNgXWCyZeGxxLAkdV8syMU8McSHYqq9Q968Tz7uSusR8V7ERgK5r61YFP",
  "key34": "5QEzbremLiERUN4LT1HSzzd8Jx1RhfiBgrejFseXsBG1AfjRNGPaGqFNk5TH9xHKPkqX8LUXkPEPoGaUMX8oxSHX",
  "key35": "34fpfe411PqcmVAbBpcAVaGaaBqo5Sf9JddAkgnreVbTECx75j95MUsPnZxS1618P43AhfA1tCTgowErMJjzugA",
  "key36": "3XaF6ArzrHdms2mshuUoPBPQWyprcbpg1dUCjTaBhQDZA6nx81PPju8HgXuWsUjtuTwpd2RGi6rJvVKQyF5NxNfh",
  "key37": "3uT9CQjhRDAFJh4VDktBVhjfHfnPjytsw8WUDF8bqhj4qfGRrKqeJtVEYkBwKUs5881tFx96LsdxJbrqZSUxvdBL",
  "key38": "es3XuqsMkfSqJdW4bEMrbYSA6DgJ7awAAGvMfvzQP9pKjnxk1QEdqd5wRU69KnZHedMsNyX1GP7uKD84qQ7j5fr"
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
