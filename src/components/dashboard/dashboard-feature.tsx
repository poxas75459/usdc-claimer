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
    "282LZesmggwnYDrabMPtsuxuB3GFacYq8AwgyWvwtbuDM3CKKHDT6STUEPY5js5tpA8Tqbihw4FLRQi8AmHBbUCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Cc3ofqx3YfhpUMentpRYs85S93vdUxgAyyC8osB1Uu1TKjqNwGfaSBjvYcNZrvrKvgEcc2Dy6q8EjmDGxvWVcD",
  "key1": "2nPdTU8HAaViNHtMu4wmirJ6XMC9CS6kKKWpH2GuKMBkPM9SAYwbJ11Uxux9dksrE6zVYstVBUHjRcaoKPQzU6T6",
  "key2": "3TXGUNykLoe83V2YsrvMsWUWGdrHtxX7aCwxhCBWKeha1UDdhGbFFF9P2c3jQvwZ98iUCYU3pfV1rSzqqgqaihed",
  "key3": "3Vq4QRgaR3GtSZNioVgiR4MCiNfKt865QTe2USqGMdaRWZrPGxbKnfQN62ZDnk49JPCc96TvvZAQRRm8wNgjFZLq",
  "key4": "4N6LuswKZVesVodCetmdNkLzkM5UWBAJ5bX9Laed8ycVngCn1yoFsjFVhdwqr3mFLUxuFuKm1LEeG5HBFErdQYu3",
  "key5": "4iVMu88yRYyHnbDx1aQuU5k2r6qfxk2gzU2QbpPE32rdg5zxet7mwsXhkroN5oC8TtkS6gBW9R4drUjJ1xhUccgE",
  "key6": "3WM2SLzyx6fhpCtxti2KMsKudMwRCWpPVi8vTzTEpQNtGbY4c1iJMrqb1qL9AbVyx2qiWTZMu8g9KT6GaZQGtaUb",
  "key7": "3G1M9sN8uH4r9sfp1hgpacRvDYeFRpZmoBMjw9zfnXQG4JxJiHHHmgYJiJt41UDa5GpAyY5mQPYF8Ej6oDdcYusL",
  "key8": "4Pq3ADpVCxLKd4JAgT12W4aijXPoXPxMb366SZhvehuRD1pAktPQxspqhaziHDJfcPzuv48aud4ogDnLoeBYTmRD",
  "key9": "33fW1z8fkUWemLmN5W9X8a3YRVsKjDrLHzQwYMJLm24AyKY7S2uLaja6PPkfZD8WqMzbPkgJcFLMfeccZz7m4Bvb",
  "key10": "3iipXYaietwfktuqbxo9p8g4sMV2DZYtkBLoXuBS5Yyy8fLJoAwZiMxvX29NJLci3Dkb8Mxry1U2orpmFijtEzFa",
  "key11": "66g44dTECPwDvjSnkRBxt1W2Gd8Ephwzi4heKAeX2N3WUgUKrGrc9oh3WC2EWBFrxnSgenTbRwAK6efXQATmPL4k",
  "key12": "JgDtzob3qzLs95Bhp78f8tx5SLa9UYu6Fw3qf6jRQhqeAVZ7eCzrApxjekbY3YChtYzg1bq6hkNc6sUwmetQbbh",
  "key13": "4J4uPSCtyTpA8DpHZHwk8SND4C68Ez8aLhD9GfG4Ftucqi2QcfXzBoBx9XqxiYYooZtrMD8McbMgH6Ln6pjn2eR5",
  "key14": "CTBPwGpcjiqEVPAzGonAzpqxgc4mZZhvcFAdJQhegfBL7VnarWrPfPYKUGCRuVEUxEC3z8EEhmV3TQ82S779M17",
  "key15": "2oY8ucdAsF8YJEEjMU6ePBvGPMZwHVb1uwbvf3j44G1o7JmFJkKjPgjcFvQKXCyN8hfRE4AiJhygwXkJtygvxApa",
  "key16": "4iswVgDYxACC9VhutfbNw277HuxcWqPeBgxWXnyVd7PF36MD916goa7ev31ciwE5fCUtsDmkiPpuHanXM5kdLMKC",
  "key17": "3CdBJvec59CxtCf1kphrZcAYY7qFvi4Wf1kiXVS8KirCgcxX6HBavfenfLPuKeS2ymFsguuEyfD2do3RbLoSp88o",
  "key18": "4xTe7jccPaC1jQqCa9k8S1ZXSoDdQCdpQUBSDJMGD3iGbuFJEGaTSMHoUQRe9tJEeKgkDzF2KsAgetMYCHXnZQpE",
  "key19": "434trLUNh4G7j8wzVboauJmR9abTdEmbGh61VmCNtBjPQB3TjS7nAJiujoYi2pYtTBVRb9q8bzGRmXRkwyBSMtPx",
  "key20": "3UMDVftS2F997p8nvDp6UkyRgjP4izZEKp39jyutndgEq7HiqA4G61So8UmEXWci6iwLK7ppqxToDFFLf2qoyiA2",
  "key21": "481TMMH2ew1uuqS9XatNa7cyjHUeV8uPjmMdeJ8n96gPbnmEpM248rYJkHfxeiyvjuPXEBV16f4GaWyu5igdaH9S",
  "key22": "5FCuaZmVDhhKQ2kDfS8nWKtoRa2Uny25UuUwP7QQrbECtQADkLnGDbZFcbnpaD1H8qptQqUgWHKD9rJhwp8qika8",
  "key23": "67ZcG99CkkpXxdqiXYPYhDXUpkRgf2fKDiZQgaaVSyqiBqFGrDJSmTpe7LKP8ANhkvtemPLCNBziAevuuSFbMD1N",
  "key24": "4jGE2NtMkR2xH3wC5oLRKPyG68rbRjQngb6WZGVUojrcrbgxpCjm14tRMguFn5XKhWbA3JEdT6q3Z9vVipMPXL9q"
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
