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
    "2pFCuhLDHT6XXQonLuwmJe8sCxfSgMtKrAsAJX8nMkwa5AYnBV5Gc78VUmqivLN5qmdtiyBmmBKk4NZxE5NGH64P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwUmSeYZSktEEVRtRDZXp6KRSF7KQqGC9ZH72AdKoagdAZKyCVi2Kw4h8Ai5PM3U8gWQ3EUGc16vidMHbRwMsZa",
  "key1": "4q4MyPtudjy2wHtvuzwTQLeE4isY552PqGxqDHhpbqg5Zc1Qa9Bun8xsTRDkQK4ZB2RGoeiShPLEtVziVREPXhAf",
  "key2": "CAWgeJywYsixfXUFfcYxrKkX8GfFfRFvqmkoKHb1p9HmNvdHgVbwcKCvmid3Rv5hU8x2wTWzdKVsK6MNZznQgoe",
  "key3": "3mRpGhdGPqsP5zCus1tP89J99m33hmYARZKTSVhBTsiNawY5FEF93A9qkGnez9ax69vSQe9aMtTRmTWYgTKpqYPh",
  "key4": "2JK2VFdKAy7SamXoH59xmuWinDdP44bXAH92hTDEux3NSXwTrPnrS1wxAjHYRY8igYkN3ETWp9XaW1QP2PCF6jcg",
  "key5": "2xrLH8iSgttw59c6SE2fY4oFyTvQcwr3rKRuyv87hoXPcrNoW1Z3rmAvWihsQ9SsEwLMEm74orSzgADe8owp3WZG",
  "key6": "2xpdPRDitstahkgnh7ZiAYx3KX7W9WsP5KCuqJ3bLuBDxU1N2K8u8gQ9XHGGWVGezkuZ3jatvRypXMVyjqYMDK7V",
  "key7": "obGN4t5M7A1tzRPVRjWxgJvZCdv3v35LoAPPuu3gK4uzMTjFRPMQStH1DgquuHWRSxBgB5rgn9ToVuDG7otDhaQ",
  "key8": "3TehjGLcWdNLNSj5PtdBbJo1YiLzYLp94KGH9xgKpnDKS3hVNAVtVnYT9muvXNcsgTe8TKikW3B2YP4qBTU48s6t",
  "key9": "3bC1s9Wp7d5Bdm8TRfErowq6nszYs4LT1gpgVkXYxaTFzYtJqhTXcdUzikpnPmrrr7TgNujHeVBj8dixVWbVHEg",
  "key10": "4HNWt5ehWwo3nrG5UcSw2qaF3nry7W3wXTLPThVdtqoJ97HnJP34SUupSSU57ZUNeDAxSJ52YyFLSdK8y8k4SK2C",
  "key11": "3vndHo4nytVbQZH7ANr3f9B9318USUesnhQirkpv52biZkehiUaFR4RY2T5QHz2idnmyViLfKSzwb5xk57rfgMjw",
  "key12": "3BvvNJ78BG49kQEqARpKDnXqYodeJ4FvV8Hbo1Mtp823TSXdXSXnQ5wtvnuPeSA5RtHVRS6tgzVfq5NYQJbbQRPf",
  "key13": "w9AFsJRTMWwKVoNiw6X2s5wNg62LdwxDBziNzY6o6qmhckGftMQKnBUXoC49RSFtkW6Dr3h4iu6K7MnnJA4QR7R",
  "key14": "2jfPyPphY26FGrc1gLqH5V4LYgv6DuK1D89dYPrXcCrtGovTxwkfbDDYpayV4sHrEe7Bsw35MwJa1ZKgFFqKGgAB",
  "key15": "4CUtstEYcN6t9qWjtJt88wXxHhpqkXVEgDkzTzQp8AZpyzXoeP6pMcPYTwnK5EgVmFkYK6MKywJtKHqjcaim64UA",
  "key16": "gb42Hfi2Dtftd11BKPHh8mPkXTRo5Nfz7dMPBM7FFZgUBvZWBUQXVGWc9PvFa26hQhFBdHfJpLZ6uFNtddzz1Mm",
  "key17": "2GCobzEJU557exS2ZuziCwE6TqgPR1aw8EpurE3E72ZcWpX1k6t28SiEcy6QdnPJ6FVQtcS8idS49hejZaRucm2c",
  "key18": "3HUju1qAxAwJWjZvESyVuVPv7ymc6t1ZPdt9tiZwAXYQ4RX9VhasqKMJt4FCvXor6eP1SXGykFXHZAZ3LEVLHFQG",
  "key19": "5ZbbzJ8CK1kifY3un3dYPUU6aTCBx1ouMpAE4sfSkMD16iqPibogv3DYEm669TFA6rutQFpnBmeFmm3hUG1Rat3A",
  "key20": "2ucUmXPdRvig5AcrALJzNnUaJHvZvq7GjrfA5tb92tjDy4M6nsKZsxTAhosRdtS2vfevPAqDoTpTb2UYY9ZsGvQs",
  "key21": "4ZyzHSQbh934Q54d6BBa7kFVmhKCqAGjwcDpCAN5RhcwU9e4GtmM3MTW95eapHsVNJwzWvmGCQRpDsH1ujDRj5hr",
  "key22": "5r8k5F8ZTtx9Zz8B3jybvmNhFVKkmfMA9TpjM7L5CwdAkSDSaf9nNZsiMktEK8W64Z2irjGHcwRpta7uMPVjZ6Xm",
  "key23": "5GifmyHTryMD3FfMxpFcb1v37p5zJMnFsBAGRQT7vbd4r8JjdGGNBPZaDkV9VZAwJWr5Q56hdb2kn895WAgHw4z7",
  "key24": "5jctHQv14Gq4EHvipuHCbzd4yujbb67GTf18R2obmHrUPiygbZWsisuQQAaYEERDJATumXzPx4y5nej1TQG2x36C",
  "key25": "kHq1LDKmqefsYP62bYqgSyQ6m6q7prY5o7zZHzTaVs19ayCr4injwviVjQJ9FLmNKtjRro2gWS7dwCjM1HmcpeG",
  "key26": "3LKGk1BTcxpjm5AinJVKngkfj7oRvaq2sSa6NQ7DfA6ng8oy8oyPDcTTuQYooNrU5royy8s4BXJmAuPF1Gk3fWYS",
  "key27": "5vSPvatcApGKoSPhuc1THr5SHeQLbMEt5TqgwsQMzPsp7RPE4zbzeq2PH1mdVQ7Q9ZepdApKTkfhJ4Z4evusSi1i",
  "key28": "5ZPjDgBDq5o3edfmeF71eJNrGs7FzA4sRPWnL3hvgTWoNggkMyRnC4yw4EqF8tMwyvtYzYSmoyfxS3DgWwzGFa4P",
  "key29": "38GWoEMCuuskoc1Ee2P3iXeLBYK6uhBaNCQgm3witTjV75oMxj17gt6LHE6gaGMt711sECdJ92W2woXfbQ3Ee8CD",
  "key30": "5gcNoNy8DdTKzgfnHQvSPxV4Lz6TVwRsp2NR1f7DcYRz9m3kQr35PDsxZSVFRPjdBefT7gzLLZTMnTCEqpCH68DW",
  "key31": "3C6txoEfG79A4zAq6E6yVNudGMBYfBX9AfqJZkHgYBrxLxGha2NUMdqvJLtVjAL99U3rJiX4phjxgXUEHPZFeMxV",
  "key32": "58JCWQJu3C5ToKRycWRzpVGBHcwwScHdxbCGPtJ6koqQh5TzwthiXPHPnrJkbfh5WEkJjPwfQzVUuUtFaJnMKCiv",
  "key33": "5wp3CAeFSNUNuBARyh6SB9RFXkw7xh1SsF1s2GXQQLfXqVrW38cqikZfFi4N1LpGjDM4ec91aKDNCB9ZkCxERrMC"
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
