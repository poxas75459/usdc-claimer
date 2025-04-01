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
    "1q3x8XmBJKQgrmSc2eyY3x2J4BCharjszYDxm5KUhh2HyvSnLH3Z15n6pwJZvwHUXrXNS4JPUXsnuatwAjzH2xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNWV1XScjLVj2TCvCtNML1bPDvJFHEAH1emxS6zNEsvimmiWPe5hhbHCQVtKW5YxYo2Loy6FsdmsvE1nSRoG97e",
  "key1": "wsosBaq5dYPyWsoHo6UC25AiRRknSc5GMqRZTQK5wUeMdQyWZZEwpRLjBXBJpyzyaDWR3XH8gXkT3WTrCsmE99M",
  "key2": "5LMg2vWQS9mDJff5hoE2vETqXUtTbwn49Fx5Qn8JDjaj1A7wp8hkKPDEUwkgu96VEdTwWaKDtYpnrvH7ji8a7XQb",
  "key3": "5DjTEwaFyfDi9o5d5xLiq7jS5oHui5eSQJNYDCFDGfVYG9c7AaKFLiVJfXZUcz8YkXZaTNAuN1ZZBN4k82KxLLRr",
  "key4": "3fxC1N44B1A6ebqDz4mzBR5HdkhNvGmEakgpzFdftbgmMLQW8HwHVmzJT7DT1jx4cqmHqASZbBgkUSpfReJPcZtw",
  "key5": "5hnHcKFxX8q5N9uyZCZBuo39DuBmeVepqEXiHkFsGG9BKDSs21AeP1dHLQG3T3X9M8XjLvAXcNmwDjkGeC3voPqh",
  "key6": "5tnG3TGREMzArbZze8yznfqErFgA9NoNNLFvQnGvCMeyJgF9b14FnV4iZj321cCpLXQFXzCHTbzdmpaYTbb1s9Lw",
  "key7": "4prKgeZmbRsUW5otMLV2xSaYMLnKfmSEjbaoRPampbLckj9QpU8PxAkmVXzQXJheZT6H5VwfYabsGVxNmMo69EqZ",
  "key8": "5fc6ZUhgaxJzjF14BjB9jYxkpFXMvzRbKhAvMUWE6Xbk66dG6F2y3AThRWYzYKbJERCBZd9UWv65Vv7ERgyAtVqZ",
  "key9": "2ZxdvnZGZ9Tvwp6b47htrzY9ecFU7VTYea6w9tevpz6sPC3gV4JYW3J5u1Yv9WXbfAPADEvZffaSeQHGfEUHt3bv",
  "key10": "3pkQbHMdReMDvGe6VCGNNaQwfiVbWp1oVeArKvauvqbt7ZroR5vEovZHC5NfviLho6Ga2HtPGJhCHwwEfJYi4dAj",
  "key11": "3zMaX2ekLmxRLdi3gRazANoNBJmDa27hyzLW96KEodUzG3VyNhWuhUoGwdPZASYTJRTagkXQ77ZxSqCS2r4BUzgz",
  "key12": "3wUpJaG2kg2wmPDRNSZkY4Q52NuFH4HGDq3XNzFfuiVmfWJkGAUC5sfKU5qzjfdDLCh2FnWJn6pLXsFCcYkbLvLU",
  "key13": "GdGFLdgW55ccfeeGXvJKjuNi6u16RRgjFWQCr43q5YovagoTUhim2h9W2WsETSMNcPArGwW7miomrfHRwyZ1Go1",
  "key14": "2LoQiB5LdWg1NN6qnm4YVTnH4SFZebaaAtdPYcgvEfZjuZbiextma9LRtUYrenBZz392udf2kkiJom5ye1FZtuMs",
  "key15": "u3g7bAf6uafvNZWQH5Von4PbbixFkxxJLi7ayRDgp5gw9KdS3N5bEeQ3ZGeNKhphTWwRKMNFCh6hptogq9DxJQV",
  "key16": "2sPmQTJJeygFvUys39BjG9TqVUaASKxtJGCvR5RGCfpCTnJRF5DsDEVyzrZxjQgL2yvhLgDZiz4nDbwdeME7irkP",
  "key17": "3VTGcBbNfQwvrkcTKPLMFxvXGGqH8X4L198roqAaPccTDXugEDkWxBLeXvNxwQw5xnZZgXG2nCJrX6WF4PwELfKn",
  "key18": "N6xetdXLcGpjpqV8NySbb5X371JjBhTL2J5PzorWyZeGPWvSTiFbGBtSNXJnHzXeQHDp7NmkgBg1VpTETPtkSKL",
  "key19": "4qWBpJoqf9UucHG1bwe2a1kpFGzkUrHZ28ZvULmifMtTpMrY8cDq8xXfFhJw7dcmA95JtaRhmqrikAhWaFHxwvCC",
  "key20": "24eJxMoc8MnyTdc85PBp9fLEetTEg6Ez1naAo5SC5AjhVXidVwc3ox31sT6VBfbyPTAgpfAnw1FFPQRcebnz1iHQ",
  "key21": "3xCtWajqA4fnnormm2WtnLLfeYGKcA2aFNKKvrL47UA3tJ6VR2dxmxrKrBuUiJEnfXVvCiqtqJgyNsqXaScaQQkW",
  "key22": "61Sxb842MdTkDarfqhMDmn89eEBNavqeTxvQFDjTQhpu8bZ4YZ36n1Tk96SBgTekDg9kM6HAD3bZCBmxqPAETn8H",
  "key23": "4Ex54zry74C8iqTe17vkXGEckP7wy7ZN62HoM7Reo6YgHUbqdfB9y9CUXDPjQVsA9zhBa9f7NyDguKLrWKDzzWbu",
  "key24": "ZjDY88kA8btVnQnBTXtfud4W2B8m5P4HeXKuZkj4YVD6AvK7cB92eu2vtZn6SzuLCC5L7iFQHw8VUexfcHi79TL",
  "key25": "5nMThpRbkJJktdeq2Be5rMp1PvdVryxHBiq1hgvmAKJ4QM6yz1ix1pTi3FfeZW7QKQ142jEn4MaA1pn65jUAxXu3",
  "key26": "486hBhLxHPXhihG2GYcK6D2uAbUswTj9m22tW56CxDpD1dtoYuSrt94qPZULreCo3ziu5TY42eu2rCs4b9fNgtLQ",
  "key27": "4AmNm3VVN7BKCDmcMRbKqhiS1o4LSddisFVFzCzcfr3jqbpLHCPPmJhCNuafrjDQGZii6xiXLtM43cWHirWBgKCf",
  "key28": "25hjGUu5vmE24UUKajyWiVeLF3vud7bSXvsFXs4iJhmVadHX8H7WJz3or5TzkBXu3HTZthYdwPz1PUa5CrxFP5p7",
  "key29": "2drV9CnKrsepfAGSpzcn8pXTR8L3TRHCbAR8mWd4WYUsSUKHX6bKyCSLThxE8X1QCopviK85hpakemJMUcSJy95g",
  "key30": "3eJLPCQQYRjU2sQhkDHZNiPi7TjH33zXZbxAt1LPEoZLXB1xaDcJhmhyRfzv6EA6G9Zv7Cv6dGpMnp1x1Xhm4jhx",
  "key31": "62AnaySBaT3K8zzUuNJL7Qn3uufKQTXNJ3tgpDkWWWMK6qp8P2cdxLQvuMBpbvfHLLZLAALPoo5GozmeQWVVgwMC",
  "key32": "59ssYuDfMxbCo51ViicPEfoEMHPi8xRMCXc15XmE8NaunfZJAa2sSXBKXZFgtLfnEUnmryUAAQTt5ZCmJWtW3jfk",
  "key33": "M7DJbZqQxSrT5HijjKz1anS6ygqitfA6SnQ6Ncn1XAx55r7CFwtpmpt1U4SrtcxfDPeNBmpFwdHegVCBrMhZyZZ",
  "key34": "Bj3eFLLGnf4Ggr6bnLyUVM7Gwuxiyeonqk62yofC9Fzhpw9fDKWeAcbfYKnHzHx3k8xr8iCsRukphB69b6VJ4nM",
  "key35": "5JhpnKqn7hEnBWBiwCUDXL7g7BSSAZWJAzLd4be9c8utYwPQjagzH3FKxQT1tskhZs8vNiSyH6X7m7ysdy98nzpS",
  "key36": "3ykirBfqhbHxFB7QAHCyymz5ocNZDvgfvhqhaog6Sc6dCTUVRe2tNSAzXehfpMQZFGpn8dV94THAt3CB8fnZ4r3L",
  "key37": "2JApMGw16swSLyLyscRwNEP5i4DCgLDMzvhTpUGbJu4qpXeuo13YdbrLzu1jJEDKXfj1t4nGMZUTpz2iHodfTv8H",
  "key38": "4oVLZHJkr7GHaMaq3xE58f87iz3JekADSrwhvYzTyaVdyWm5WGZAKPowxbFQsx9yqRRxQFXdDwY2aLhybAKD4Mo2",
  "key39": "LFJneVUGYqrMfhT6PDUtuNBNBSr5Uv3Jke2WeooxX9TtdPHHRgHy8mYy1WFBKipSeDsKCz6KY2Prg5DqTi9976Y",
  "key40": "2AnHEri61Uw7NuafWgcA7BFdXJNdcSt6GhxNurPHLeKPSSDr8cJibr6ZnvuTbgq3w5yPnbJWhTCrWA7ZNHTf7SnE",
  "key41": "2M6MoNgqUDzG4XHA3J5TA5ZDkcHqweSCt7F2fng9fteE8zsCgLsoLeqrU1rmvY3yNYnhAeBPfLoqXFXp3VcrPTRq",
  "key42": "2GCiHKVERgMNC8yhHzFwUxmY7ZJe732xC5EQ9picb4jVy2BwRtoKtMb9zxMsEHqA2fjcXsvu7dYPmhVhwicj8eUR",
  "key43": "TCPNqryzCMDFMkPYL1UnHVLhZu5YEBXc61ny7r7otX8R4FqMizFrfvidgW6Fo7bVFYeRW6mGBFsgbQ8SdosmDoz"
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
