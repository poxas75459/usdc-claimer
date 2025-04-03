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
    "3TbzPafi2Cfrpbcc5A2Yp3h6CMTzbs2w7WrGSu3nWnChTY7v9UhP7W7AooKWCaFcX8fcAxgV78nMQGYLKSVTVhWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K5nYKb1s1vydeGzuJNNRaNKYuN34zNpgVd4AAURzPpJPR1RFdDuRwL5bGHGaUUKWDuErUsQ75u6M6tWudrhNAhF",
  "key1": "2UqCNPQMQA2pRTSiNdWQDCbT34Nv6VuHrP3EWY9YTB9Ar5LHELfN1D9VeomaavUHRYWaQ8snf7BUJQQc7BsgiCbB",
  "key2": "5it2H3AQm8uHAFjXcWty3A8RgmjPDQ5rHwTPX2FhueHc1pnhJm7TuHNsUdryBgnpBiWMyrXwhkvy6zydU9yjs4po",
  "key3": "5RKQCAu2A9gJzhYUrUnTgrgyF6VW5sBi3VUUGhsyLpX2yrbBuS73G9J3pUPjjkvL4MSdgJDhzmDzP7gEVB1YoKy7",
  "key4": "56oDugixfH9ZT5fHjspXZDTMjXEedqduKG7JKsj7jKnKdBDsTPR2G7hYiL1EPgmmnjWzZmLUBis6rgqW5XBZko6L",
  "key5": "3yphTjhF5iUPAN225DWYfEyz2SmZkpaeumqAwKpZVnFxdcsA3kpTTXR9CkDcrYLQut9QwTKQiQcpVX4WEuqVcPDR",
  "key6": "RtGGTnHuotw6YnfAuV5gSnVvQJJ4ghGH39KQmXhKiVKZhJHS3o3dzePzdKahNYsz8JkM6cZNvTa1QWYm4MfnQF9",
  "key7": "2a5th6CkCZDtCwwhojaXJYDU2t3qTdpEJdEqUghPAnbwdimCTUmgzLX6JBAzEDZAzexqjnY9GaL5tsgTMrJWNSGM",
  "key8": "oVB4Td2rX7BFnaaJz5tsAhUKeXxKCwXHkJDF5Z7NmC4m93DWiSDz5W6xgQMp7jhUm2G7JGdvRmZj7TnMYP1C2N1",
  "key9": "3eQggRm9vvUSsrGpz9nPBMPSNoVf9iWXU9BpRYxYtuySW3Y3Rsj6MN26WFysWC9XrfJGhQWfzTrHL1amTyWYG8Q3",
  "key10": "dz7cf6nYbRB54PtfA1QbUQ1YWgPj9mKmeKiPDkH95Gm2BuNDKaDzwwCFvyhqXHSaGj388n6nThDYgr3q1fmwuyt",
  "key11": "xr2JSFSyZjuHCkvY5mwN2Trvy7M69n9ddGhy7utRKoH43xBF9hkWNUwnNV92LVUyXkS4ZybN2CUAQjqXB6ht2MD",
  "key12": "2324hvaHQ3c6LRAarsbSDmpuuu6QEKbEYN5zMwgyT7YBMPL6uWmTbd5TVw1m6wHU83DoJcb8EPVTudrjWqVsLLVb",
  "key13": "3E9f5jeiUXtSoY1yfYSLMWyFbhFVeceshAZ5XcL95ppDs4wzTq29pUoPqa17SwEL9N6f9PnL26VL36MqYPJTZ3Uz",
  "key14": "4AYZoGdjecZ44rGLRs3NGExhKjmrbUGogognR7imJpakVjvaXUhjcwVm826j8HMpEW3dpfyD72gAU7YwkrxThtne",
  "key15": "4TvhLakkezCfiMcdkQB8FQPVYaNfwEzBeMU86sE6RLPscPEj1Hy2NF73AWJpduAU8wzQBGzY7xpZoAUmoq8YvhVQ",
  "key16": "NW35pd7hDtNS4Azy29rPxcSLu6sKEhjNjprTy5Z1rhKiZHiipiWmidgbjtfJfMzkEzrrduFQfRpHH8ikijPLaMX",
  "key17": "3dEq2kVUqxFeCGQHnKh14TeXcqoanxQfyn63metypjcy3oYNpBPxYe6o9bW8rhxx3oLV2ZBFpG5EfSp57RQns7VM",
  "key18": "3wpVFEGCuixbNgdbyRHoMNzNDwzUByt7cghWh1cL19oVjzxGsUAA8XTuaGKwLcqxd9iNFYahtc44pT3fHYVcxBvo",
  "key19": "4zWtd3eG3uo7naWUa4yxZtJWtsKjgFoPDAb7dMrX9qicU1DS45c51KnbBnxftcycoTQap9Tfj2nCXYNKjezG6JJe",
  "key20": "4zaZgYyYmcnujBySsBgGgnFAgFEMaezqnnvTkJZoHcU9rVDp4rwSjQxEYRki81Cnq2qRgYA8Qgc1PUrZJDjgJqbA",
  "key21": "5z3ubpZSmvRe96oRY4LoQ97Vp1syxvMmYm8PSS2VVwBN2WAAwUMih2MAdPhjs4KTnrh9Tc27tbWYXg2EhtdrYhyV",
  "key22": "5chVLyW316EY8YqfWUqAuYuavS7hV2WwZ3A5Y23kSUkWgKv2oyRFs4jPscuA6NPDKCYnC8uAeYbzERGDQMxD3trr",
  "key23": "ZYvV4upFgRv8a7GEL8QMB14arkdWqq2M5oUgnyR7qgbQvbubnew4Kd2Hja3c5Ecnx23QM5qcgZSBvR91zc5QPhv",
  "key24": "2hReTxjh2r1FSZkF67r5UNZpaBXt1VHipECc2CJCTvTn4MMgTEeKsxgMTMfEvqsXrP9C5VtKujrikAhi4f5Ti78v",
  "key25": "2p9f751DLNrccAhw7vgwCGEFzHbiMfswP4NsHgffv3xCQKy5gy88LDfWYUjT9Dme9GCYVESdXMufiGDYH5awrE5Z",
  "key26": "3sjDSBpN8DaaRXPEYnUfKvhon5XVCWMb6tdvnfRyZZ1HPvbjrMQUSWjXgvbdrd2TVs19eNC3sAJqdKCFEzr63sta",
  "key27": "65CdC3JfUoudHSgqJFcWhBDQSRDwBjfdz68zp8f9HG11XFbmhbe9bEAaAK78dNWKHAsXzYnDQ2eDUpSA6jB1xoja",
  "key28": "2NMnKdyfypHueE7J1dpc6uFRudnGSmtvKAyyD78GeqaNBRjNQtkpoBaHgm5VFLTdtJS5svDfxe4iy2QxJyrrB5HX",
  "key29": "3C2JHX496DEhd48RtRZTVTfyEZEBEkSP5SXCb8WmnjdHH3P7KoKsEXnibZ9cjyhu4Cbb74zmUzFbHL43dQxLNPpX",
  "key30": "3DMWtoC5UCiFVwXFWQmLzbGHvrkKpzNChRbY3nr6EqMTqtm7xb3k1gwQZrTGpN1ezEuUGdWNDkfmS5xmAHPDudQg",
  "key31": "57PhwmdUM9HaTAcE2uCjADWW4VD1bFvw6nb4UbaDxxqRGdDkdnXTHbJjeyB4fWGk1BPS17RoAduXLqxgYxWeaCHK",
  "key32": "5yNuRik4GSmi35Ae4P5DEH4hYDqfMjWWqZjgKtEvSdjNtLh1wqceXFyVbMrounspvJqL6txhzsCL9FuXY7ALSTct",
  "key33": "3EKS5SLXnTgiiato1Wj4aAMScCbudj3oMZqVdkTC1nhPqJnmBxRfK5GsG7gBQxSaXWSdvN9g4PopqMypUKevCxQ9"
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
