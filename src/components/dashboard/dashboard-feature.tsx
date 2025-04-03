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
    "2zKGh3buyQAoHmZVYb1FY8NnGXRJ9MiYoWW8rSUd1tke72BydpNM4FXKUREjhTSxSzsmY8snrxJr1rfxL5PZ4Q4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JPSwd9WyA9CMuv3fcxaz8NaZxQVF3z63vU7FLwtfgfsgZHkrYHSUHwkq9wouopuDTi2urAzBvAxmb5g3qqBFV1b",
  "key1": "RZg3TJuTZoF2hQ7ATFNnQMVKhV58atuC5yRoJ6BQKqq9rVJBzeBsasWFQeLMizXteV2sGVLFneStS5vsWJeCh5M",
  "key2": "3ixNrzKqevyGhwJw5Vu74s4C1rnab8Yj6tc7ApciZWiSwfY9Rf8PCrF8erfxCNUJPpJSU6tT9LbRhpewU6sBGdME",
  "key3": "4bFmMfJHAggnDd2oZmsvfPKqMdyFyHXqY5u5QbUCasfo35PiUcXYmZAUdJibowqHB3A5UTuyGt21N4ALrrM2DY9e",
  "key4": "4DhtkqSUH9vBRYJ6mAPHNeWj6KyKukSQ4uTNJbE61CUX6yongiLsSK5GHSpPZikfRak3Z3GqM6oBUBkWo39cnn5H",
  "key5": "4zvZa4kYSZYcXtGhDY3GS8tSAUF1UhFa9VifrZ2V5nwjJUqmWwLstEpAbt6FmExp4K58uTWpq9h3yG78bY9dH2eu",
  "key6": "22ktr52y162uZg5i2gnNncePaASRyHgJq5Qt1J4TyxAeZGHJYsfHwhnVGnnn9tFewtMoEdVYFHrBpbkdsmeZh4dW",
  "key7": "432B4Nn1T3iBQEhD85DwN1ASnKS29EN5XyPpkD2LNkbb8hATfv7L5C2gAat9mDVVbw6LgwpsHHNVTtFB6nw5N6Q",
  "key8": "48UvnWdgJRRZgUdLoCKBm6QqVveaXch4uFN1DmjcZobkNBcasVGfdmTLcVQc6iYPBgVp7k6cMQ11TtF5qeN2e9YF",
  "key9": "5RLvzYEdywBZLbv8mw8u1d8YJwmLMi1up1S7Nh6r2q6Bmwh4VVqfn4pUuUPgFaRu3wSqxFHWFciJdEGFkGxo1JoA",
  "key10": "63xsWUq2trPf6yycYKxWfdosQdrfyCX6Xa5ijdHJUnw7XbkNWBdwe9AnQ2Evxd3tqw97hA6zd9FiU4Cw6EceinT7",
  "key11": "BaXk2V69WbTGSVJKirSHmzqDW94gz42pu199XyszbG7andmKkJrwsAwczXpR3o4L5mZGpA7LjoXZrYur49FgVma",
  "key12": "5KWWAJKsp5K84wsRyZcjmkvK3aw2xGkhKcG42KdvupmdkWuVAudt9EHX8YkBfGxCz1qDLnXCbFaBYcqMsh2cuKdY",
  "key13": "2uDSctFtsoM2pHqr3XSPEG3DR5nnNJXcCQ646KDeE2GjjHXcrXXXKfUNe4XJFvGiysY3HUaR7KhD1mTFT99s8F8s",
  "key14": "ro1VMAF7B296XKq6tM7Yjb5wb3ovGbYx3DdXwfzgH7uBgjdyZjX3Jrdtk1iXBgAuBTPRjwvM95iyeE7SUcdUvKL",
  "key15": "3wMYnbZScJw9Zx9uKp6q5TmhBKZfcYMGU4NHThRjeBmW5wNMLD5GBBTbxEX9yvAW3fm3FSVwrxtK3ujPYugBpNpN",
  "key16": "2tHVm9m33gyg5XYnh6UdzYxH8yiDUcmwpaEUGLyCprq9dj8TQdMcA92759v1ACcgWBaKVTgoy62w85YqWekse5pC",
  "key17": "4FGspiY4Zgst3V1tz1uaoE5nPVuEWNAySBYLku5r4ZYiDViiti1oU8swyPMewUvstrmaYoTfBcVQQcJQmiNhF3gm",
  "key18": "5992C1QZS8i8UW5dHVFbGXweBLaYFkuuuiNNHKNMivPh8xbJ9fijGLfYRag1p5NRT6yeALsqvbHbq6byauReEHie",
  "key19": "46Fn33jn8hJQtgE8yTx4TLZ3XKC1JurMiMSgwQVTQ8Tf5Fd65DiXDizqgSjhyZUw9MTes51495YBqTpz4wuEcLnA",
  "key20": "rrgMGtMX5tkQtZjjvadLi939j3QDPicNHFpSskiPTACeuX5hCK3VQiPvahQukjXteF7KPh47Wouifk3aNkfCvc7",
  "key21": "2YvaJqmP2aTDsFnbHb37QpLYPiUvveyh8iedCCZ8VA2YPfyV9NfGHaaLptnYuGxHM6Enk6bVxR3CW64v2gNEcSSo",
  "key22": "3HGziPyUNkdpjbBe7nsxfaamErQtqY2XEnizkkfbQxYmYM3E5anyBh6gx4x6qxp5FK95ZRouHkVuQLp3FdTqYYSK",
  "key23": "4W9DBagkZXUEjhNnax9WQUwugmSL9mdiUEvh5wZjAY3YDw42fPGGu1QmF2EnRJaerEU6mkyHQxCD8jN5iDuTAYen",
  "key24": "4ptFmBmAEDDjetUtFEe7kvL9stsJYTTE34xSMP2gdsdbbLhE5MKfiAVU4mGNN1ym55Yrz5XK9nH1CadUEv3obrTj",
  "key25": "3WJm3gcXCewACVgxEDtwyk3xCD1Cfracq9qk9cT4FVi3NXMe7z4egYbn55tjoHQBBscQDXgRgQANCTbLewrjHjzi"
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
