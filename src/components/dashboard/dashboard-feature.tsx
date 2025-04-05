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
    "4BAZz5dfPsg4LeVb52jJtqZLPybK56yrwA3emDFvTKHrDG1ouqpKWvLWmZWBRnxBTQtmFyBpL3iA2SKpM2ZPkJCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zb2wGsB396UBJM78eqXdLwz66xTZuTG5brrP5nWi1ip8LwRRkoSVUNheNpyrKxBU8MfVf9JkqoLDzLA7DD72qpi",
  "key1": "4gRxUwBug1A8xfWN38wuhQESCHeGMP9MMrc2nAosugvy12jQr29haotXe2d2z9yr9UgchJx8M2eZqkBdAHA5bmoZ",
  "key2": "5RVnnUr318LTf7fo7jMmRyWXaqCWHoTHF9sZjdBU7xmrZWRANSUSYiNNRikm7ucRm3ERhktwDQXT8faqVz1xTriC",
  "key3": "2ZHiHPR2D5UjjJKe6QTAofe2d9YPbsQxgYVkhs2QBC1MDgXMi2PY3sybcdtaP3yaxrtzHTPKqzsxAfRgvoBvecuR",
  "key4": "3oaP5uwoXpoYFNM67Crdx7mCtk637A1HsnvuVDoDXwMfRf3T5oMCAAevstRHgDku2oP46TgehyxNjQ36hYxnuzb4",
  "key5": "2D3NgrDiRZFgSvEypjiMD5StmKFGGDytHEp6yUpcduZNaLah5zTXQWkrGVKECz4sY6bCx3PZva6ftey86tYFioUM",
  "key6": "pqHLFr1633wzc5zPVi2oARiomEPuKe547w5WPth7tsq3FWq2RRz9JGtNMb45WZuPqRUquobabadzqVf7TdPwY31",
  "key7": "2bG8yvqzxYu7D3nxztZCM5vDTLyFhyfnVqQRXKDVpsBAAubMqAt1pYQoSV5eqi7oLrBUiwNTJHirWhC8by5cKCTQ",
  "key8": "3DEsds67EEcv6XhPqLmWrb9AqyRBNeZnKViUjj4Hfs4Pna6x96DtZLjXeU912mtuC2SnceuvDkJdiGDUi5wPabSL",
  "key9": "AGfbKbNMsnoRkq5Ev2KtcJmPsu4h8L63Mojgey7fKgG1qRLgorQxSS3eBkCvkbcJdxQLXS7c5M3FZe95FEHiQCu",
  "key10": "4GM7H9MBBDQthsX9ZCgievZ8kYj9DgdZU314r1RE5gR29MNVMdXsL4b975CgDyqGUV42pYr5VabuhPC1ZbcaiMha",
  "key11": "Q3xUq9C8sdc1BHyLWhbhK9wVWezTi6TRZHN5CT5LwpznNxS9K66WmujtqemETqdEWKJ1n4aot22gChBtMbPFMat",
  "key12": "25EDjtzXbDX8HLcXDPNKUKnLXp98saHy4m4S6jUa2CwGB5mF5f7wSv8vL3SyEMVEG8fD1EL8NLgkhXe33PVEKzR1",
  "key13": "b2FsoreLezEXBTezfbkBHJByodEPCoQL2oKZpUxGRvCGkvjmt68MuX2DvT1UEPBa68KmF183cZwG2p3kZh5E5Xq",
  "key14": "ix7UTB2uSgyGyXmkRNfp8eD7rpqL3vth8TJYg7orFWk6MQkSMP1GyqfqdkHc5A6JxadrqrxCr6o2YMQXk9S5e1Z",
  "key15": "XcL9Mj1cThzJ8x8MECjqfcFrBXGSssE8LTuePEUqRdzjPGUnsYnFV98oakU366ZYKM7PvQmM5vbsiPea2scUJU3",
  "key16": "5giAAFrQqPrwFxV9sKESeRDhpmiTB41xqETP1gywmxvB2osQCANNrYQMvfSHxDFXU71BH1DVXzNpJeDyaatEAfbd",
  "key17": "5CyLLk7wkGmsYnrt2Wvb3HLBwTxrwC71pyWkXnr8LBwoXmMG2a4ZQ6iWo1t2aswaM89Mv4tQdPm58Vd75AgHhuG9",
  "key18": "2trdidc472BwMFaKQjumczttWdHa7XveWeKKwN8XoWuYuSGW5oB6Wi3ztpB58i2RY96WA7qqzNoPB3kL2qRCEpd9",
  "key19": "3prcCK6DHSkENbyvcni9kKCkizBcqerDMmuB8NEw2E4F3y97irdu8TMLhsPkc9MdiNLHXnwxLp8bED6Em9MZhYq",
  "key20": "YZ76QUaUUYNzxJABeFxG4F6CA6kYRffht5NwHUUShAjpkmnP7icjZWa5r1rttKCeDr6KF2auLpA9xa1knLhttBq",
  "key21": "66Mmab3nTNFzT1fjVkRmTjjEEdw1ALjLQ9b3oZE3ArPwaF5DrgPCkQ6HYSKj7AmUttwUqRikvSujSEKVFG67pGjy",
  "key22": "Z9fGZbuZed7nbJxFBqdaSbddv4zqB7P33sq11mfgSaK7FqJaUdT2ieuLBJztuUT1panNUyCLResG6biW83AQFPr",
  "key23": "5C1oMjNQeZ9nEFgzzjDvPpAzQANeMToMxPTzPjhUkWjqDqFGnJ4PiwcDboWR2MyH6h3MdvtLxgZghq1hfmSFBUUf",
  "key24": "4orGQkHquTJcG9zWsFXqJp7bnRhxgUNmL3rYWQoqReUf5juDsasTvw1u2eBWZVJ6vKKrWqvrsgPsysXQkfrriws7",
  "key25": "EUVg2qavbhCeaMpNVvUpuWH44dUvZxwEpRguxdejLrU8JHEMaEeYPTkgewyevpfWxuUJ8hYuWKPqcjXJx7Mt4Vh",
  "key26": "GpvmF6notrG7WndNWHXk44924hgLambTYgJD1tSxSidi8c9DWkFnXdXScwcB1Sb5ZcuuvrRgRzUGbdy3DAjMpx7",
  "key27": "RHjyBjeuzhnRzqossi7QQ1Czg319M9sjYeinRVzNAykjf1AZJ3W3gGJYcyriCjqePUbWDjHYyu16z3yQPpRewtY",
  "key28": "2yC4R13xuHd5ChB33ZHkx523EeTZ8pKgH1tDprgtTioRqq2YymeQisPLbGx7EyPSpJjrr2t3CQtwNbaRY8KmuP3z",
  "key29": "dVf6X9YVneLQob1pxsLrdmTXaqknUhMbGWN7V7mcadjFTuxSvTo7ZJkYdhHvmRgkJ25a216xtHyCGFAxGDWE5eN",
  "key30": "5jfHg9bbSyHdbmQfJftMDNTm9NRvALUZo84NX6z1RVqYFfcqJsDaWgyeC7e6GRRkFdyNSv6DdgHSjmwqa3dRsWkx"
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
