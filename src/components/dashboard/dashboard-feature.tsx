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
    "3BpVJF5ferfKzMV5x4qdbyJKkBMrdacPKAcyMq99h8gDT1LRuebStW3GMZEPzmSPuCQ22i6H8dNWhD9tnD7V7A4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPwzbPutnPXKFbGcNZEBXMe7g1LZ88SkSLQNYSTeQEVwZHcRUJbeoBM4NzFWZxsZqyHfot4ow5e47Dtu2BM2wPJ",
  "key1": "3TXgjFoSRwKZAHT1csDrBqWFWYpoma3brZH3CESEaj16NSZfgcVAf8MmfydKWbXzyKwfUbrTjdov2JQKigu5Uqyh",
  "key2": "4Mya3G4KVA8mExZbR9fghB2UavvhCUADV97wGuMBUcXrm5Eq8opZQjxDEuijzx2SWUn84wGLZFsXq2vrsuYcuCQa",
  "key3": "4oxPUYjwzaWCyeh5yD9GaChQsqvFwpSuAF9ayMNF2MUKoXtosbiUQF9PDeGjmrY5TgsQmMLsUjjjA7ytCXBitP5n",
  "key4": "5UDWQCCN18xmLExpfnjZ8RDKCzJJBeAuwJEDmiEA2qU4ryg7SbHQxCgpRM85D22cihUtVCikx8kpyDRQuxbSuY5f",
  "key5": "5jaq7ovVc626e7hDAfmEfkCRTqAc92Bzv3R2kcckhx8kdMaXYMDeYEoriQw4kUTjhr78B6YduBqsDNMvEF9xsCud",
  "key6": "4J3Mjv8AsbU5EcBevDc3AW3kpWutj4bHXrwMyrs7a9Uq1iCG9FZU9PCKBgn3vNgGyKJe28LBi8sjGj4jjtMnznND",
  "key7": "nNWc4rGKbpjGZLGSvDJaWcgg7tpgXRZsk1kiCmCrgBngo4uzt1y2DFzrprchRpJi1d38sxZzV1KF4LPGv2BjqFj",
  "key8": "5YgKtE2Rv2xYfbATDFZp49UHt7jhpovaAgGWK5XyzumRiA7pYzzMrqD2gWtNs9WaRs8E4rP4CX5QufPGk7VYfoAZ",
  "key9": "4haWiTWYChZeDG2ztuVLyGcrPxrdtueUNs55u8GfLEo4HB4oYDTMHNeZwpP1jS5FXVh7ntZbr78DNEiXxyvFrokQ",
  "key10": "3TY9uNT8p8NuheNMHRh9jj4GJaf4dLjhAoFjEhAp5XZQbT2rkGQeLUcjnnU74HKfoxpr9A8W9LWzD1NpoeXa9Wuh",
  "key11": "4oQjejnMMTiK3prxBLbxvx2cd8ztBkmTB62MxzSMHEt5yVxdxc3ApK9wzKT48uyPA5uzfDiZs4Yf2R3f59M8r4qa",
  "key12": "3NrzfyFjzFXFJoeFBG8tG5SivAHAy23htCteMDdQLKgHVA4cvCM8vTHqG8u7sTUF4K525ZzhmwHpCXWnWi2m1Apw",
  "key13": "3NziJxAdnRkHtXcY9Kkf9TduTrDxAjcNd6CxCBnhTKLqcjwaNwFZJKmaNh2N53uSz3Nsy4ikrEcB77tuHWJKGpx7",
  "key14": "3bu5PaQSGnBXyc3ivrLM9hETR3XfUsqnbUDb86JzuxUu3hHxLtjS8ftwuLJzgSnD8yRQLmVVy1WDKq8zvSheZKzD",
  "key15": "3fZeRkNBGJZGYhXrLq9QuqWCUXvx9chkzKhHyRVgADMpyJ7QRKxeSRNEBfhVJkdDqYnrTeBBZQtFNCKTQS8bZfM1",
  "key16": "5rVV2DtBAZ9PYLVb5SboHDAmn9fB78NYvPNqDk7k3Rdzson62MnU3zHKaGkbRXNmZ8fS3W7bsW1Ear7Fmmi3z3hG",
  "key17": "3s7euhqe6jGpy7GjfCLkmAQAhjU17UvqGokDzNjpAVhqP9SN8KiE91qydMoy5PDW7684dsRLdgQjfF3dq4QWShvK",
  "key18": "64Rg3BAbwWVSC6uPNUGuCyJEu2rXcDjmFGCyRZ5uRNVUuJ1eZQEAhjRR7Wf6w21UAS4RaGhJW8bb623HafeW3SpQ",
  "key19": "4JA1RfyHCjuc8m5hYDm25bpkordTGjA6tWPBMuSrnQ6KenDKPUrDuffiBaTJyMKRQmc67QcYHHTki7d4VkvQwGns",
  "key20": "3oSkWzhMKYvGy1AnDzgRqKzouTGW1awSwEiMsC3qN2hrPy82MwMmGbhbCL3JU3H4S8srQZvkS3dFfH7QK7jB4Lf",
  "key21": "2LrXpJPXYTgMX2Q2cbWJK4397ayPiWLKaYREGGoEAajxfcAMfth7VbsoBJ6GV9cyS36Mt5Dv6PyKSjo9vvT2fmFD",
  "key22": "5cZKo5YDqdnvxsDHhR3QaknNZaWwFQT6eK79sjZdQYMhurK5ycY2sRxsmP63xzQdQJbvRuPztY914Wk1kau7ZSmC",
  "key23": "4gq1Cwm8moEZDWW2M8qVAYf2N7A592PDu4THTw15DVSwEBsL48dJA5g53NVHbshEJMBjWDceDcvZgx5Zs5MfqH7o",
  "key24": "43C5msienHwxnVeWgvEuRBSP6HDipD1Tak7iSU15zjujw5TMZkdUCESrY8FcBXAzwZCHv8KEc57ZpTtAXKPc6Dix",
  "key25": "3SVLj6cXu94cAXCHK4huyVLRwXxF4ZJGxMDQoSKATX8egVAFQQQgy9prfsnmRQRTHF1Y1b3RkfiYqgj22YbNieaP",
  "key26": "wBZFoER269gGCv3ToXGoJhokRnypF4WFhhArXFy4wBpBvpSXPJo1BrgVzaGm8oYAe5qQR13mKstqE5zCFw9Gb96",
  "key27": "gbNmWcWjma41hisXRxYr5vJdPpoA29QzVSWF9aW2qYdTe96QAiLjgHcWNg3FgdPaxN9xvsqLFChCdP2FyGuznra",
  "key28": "3R3Z4JuW4neo692Rmo52DoaFHTBUitbmNvV21J1wWDFy6ULTuuVDn5P4X9wKdHeXmvMXY87QAqYxkudiprhDhhGH",
  "key29": "63wxpzV14Ef5eCDD4yxRxp3Jb7VfjwvvuRAoCa2Vod9j8AgKfR2dATJaQHasRnSfSPsM3ouCPBRg6u6fumy1iLN7",
  "key30": "NwRSqEKqTuN7ehYC8L5Sy9q8LiLRw5J2wVfoN8EuNJAD6Sg3a5xjbf3QUM7VcmLTabBv924VWN9BRtxmjFiks7v",
  "key31": "2WaiTnuJbNBXZPzhewssELFhJGLcGXuvzyShLXLnhFc9sfG9c7nGnQwVF3M8DEYjAqihfVEgctWYcsFW7WJzVmBk",
  "key32": "3VS5GMRD7UWuspnKiqUi9SMQXiKDd8Pxn8oxULxWcyPaNvVap6KZNDZAdCRxvtiCh4LozBYGukNRA98Q3BS9UWkk",
  "key33": "56jRxGnrGFaAJt4Npzci4EjCySBLfwLfAVJ8dT28gTEt9R5tA16ea1rb3i6FXCwFuqa29PstYpBaYcK1dKX9eMqP",
  "key34": "3QX3ct1GpDuAnN8cnv2JepCHyLwB9rEEVnUbKkWPZhsLtE8FugELaSZH9gwvgh6LUeMiYFKByFZ5TNb1G66HYNrd",
  "key35": "3ppPqHfZWfKBShA7x2JoND9sSCd7GUG9rf3kxbpvnWyf2mhao4MMJzKG2Sx59EhkJnEp3JfJwirx8XgMn55Jzuim",
  "key36": "ujjaahZ3LcwbibkD9LsVfpkf4mhY2Mmuqbs26EUdhYRPn8DPTrez5GxVrfR8wKZaME9Qf5sYd9AWh3GUGQ4ZmEe"
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
