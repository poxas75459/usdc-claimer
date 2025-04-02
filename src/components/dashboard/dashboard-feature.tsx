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
    "3KfSR5Wbdym9WNd2q7a6YESUksKuspUGCjuq6F837JSbhvXr5dbcnC9yvBux1RQQv8YoZ4445QoaC2nkhJQPudcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zsEgaecPnHrsSf6UsUtk1ne9aMaAuju44NhVKbya7ASevRfUWnjQiiJFqpuQ6DjGw1RA53TnWmErMG3KsBcmgFT",
  "key1": "51Qp12vxAFeaJ7tsaAeQLK5TmY8L1SodsCrJ3KdDMS3XwU714FcNn5FL4UjYXggkeDj9ycvrVHzYpBir9PE7N56b",
  "key2": "4NBgwZKJvYpcpmtPSvRK2MNcHpj8vT8sSHEj8K5Dep7FPP5GghVzu9XfY8Yo2kvjgsK6wA3vV3GxEsvsLxZ2ugR4",
  "key3": "46F1oRg2UA2TKCUgGMFPN47GxgxGTY2KRae2NPuwapAM8zNd12NftZ1TJTPnn39S2tfkj9wrRCqtLQb3z8FVYdfk",
  "key4": "5NKBCqCmDkbQAEWr4PfNcECwedWodkY5qHiBWbDN4y7ZNqorf7hJmdgYbazGoKMXHgD3iC15Tqyi4TEJCWc2cS44",
  "key5": "P1Gtm2G3b73PYdHYkL1N7ktNQ5cAJPW929poTjZYdKqDobozNQeKYCTfn6hsnvgfjYgb9gTgna5NTitmQDtEgxR",
  "key6": "2b6mLZ5BGBZgMLrbPUW5qA2tk3okRFA16mqyrp7QJVHLX2ft2VM2JfVjeaWBuhPXKL11neypJRwzsmHSgSbxxA8e",
  "key7": "4ESngJVivP3e4U8myrPr6AZymGb83WHdFzJzKbXuZ6ycEGQ9h489jgwXtQsvP7ZiJ3FDwTFNChgc7dzWRYT42n13",
  "key8": "5yAVMRi4jXPD1UecVhYok1WCAsrEMQaRDEbvh72grcCces179am9rbq2VWNMQSrnGXKxbCbdJSEeQDMfR7yNGRDF",
  "key9": "37taT9srRXZxtdaPVobNiSkocQq64xaRz1vJQPofuZSoefhD686Zb78U9fm91cb5J7poj4ebr96Apgo8s3NCvx5E",
  "key10": "56zzodXbSvnyzhZeZD8nnuFP2JoxrrsQJEtDtdbyWPqmGYLFQJjqrdBfEBTeXgEbizaDvhp8oTePa26PFHcMUhwR",
  "key11": "2S6mxWbtMHxZPSDaWCYA1f1kh5TGim24Y3XiGe81RjDB1aimWKgk4AeeKhKejmN8eE4cuuszZcr7pcSAypRtFZfY",
  "key12": "2vpw9H3CuYWm6vgVMUUJAA35Q1qr9QrM1rww6pbVf4yVgfuqEVhujK2HHNro9mMu1tyAh8rfLDaaL1kk8EJEUiDs",
  "key13": "5eCYgGhvNGBQ3UhJTAAjSNFqfQkYAEU5De58aUaFWToamTpqJu6xDkkTzzqCcuZr4uU5FWbG1vUi8TRahy7CMhzM",
  "key14": "5sCNdBZGEjpjdR9gJTwBarcN2xiJkKvCktonQ11hoFvEcmoPCNucqXH3mpzjpGT6JtACbMqLwu2tT92EReF4EcRM",
  "key15": "58aRxWX9W3K7hK5hoYUA8QZfGLtsrdTc1Cc7zxmsyZqrQffwEJx4i4vnA2eiYGVZm1CdZg4kw15VvndMpZA8z91y",
  "key16": "5SPRHatqH4Po6eTwsgSejNRd3umRadcxAsrmG5XKxcNgfuyEg2RQUBwiuHV8LfZmrdd77obKT6wgSnYLzsMM3Rkx",
  "key17": "2v37H1JYrPNHTJC3Bfk8Yg233GrUKvSRDCj9kPqvit1RUZNPenKGoSTrHHcPe1d1yU7cXikhLdjQJ2oUcqubuNXb",
  "key18": "3aiFuz7RU3Yyfs8WkU1CG58qfDmDiNR5EyXckjFkXVXCAk8TN2Wnjgn26Guvo3bTKLtZMabu3XJUcx6uWFGg1Tng",
  "key19": "5gpsmLtKhzSZjS3U2jkjEvhi2FKy6EJWyPcfeNFP3pzKXSEhE3pRzb4DsLmurTTvmZjHBuFgqzNWbLJDYeYKstdX",
  "key20": "35E1AnJwGAMuqD8F5wC22r8ZbvvD6Tc4Unr2E7vF8WuwhzA9ZTQodgqCejA3P2cjVqH6nkSe7j9H6yqeQMzp7yRt",
  "key21": "fGhXv4bngFpDyeW4yEvcsJUx3hYUG2M2txUSpGnmxJ5fZCHsGVGRVeBM1cjkoePHWBKEpTUJDLjqprpo8VZX7YA",
  "key22": "9N28vpmzRpqyxWEbDM4eE7PUweGWKeHazd9urRqcTdTgp6H1Dd2qXfroS37SbJKRr3hBqrhm991n2XoqbqgV5FK",
  "key23": "aMZY8KpboMRqWBUahjiN8BTy8LYkMxvokX1g8kKgDCvnNPNKtabZCtotVUWC4dWmpHjc8TJjrtRbscirxqQ4dgg",
  "key24": "3QnoapK9PVtRCHqJES12Z9cnsNXErkcXGC8DTf9NMw573UbB7afucJ2tNSyQAdvTE6kZurp4dyatHdqPDu492xzR",
  "key25": "JPgj8Zr96QHx91MVkFHD5envNqWM6RCiPzJvoghifvwN8Cu3rSfUbBvAYD9dd7rfxmXrQ4mbfDYUTqwmANb2dfP",
  "key26": "4YqjYbpahFTHsMSLFSxAit3bKANaEeJc3GLCtzxxCvbmbsVjhTwxT92Pa1rZMoee5TcRiw6tBVr4DxV2URHDcswV",
  "key27": "43s57TfvidvETUwd1tiRUnNZDonH2wdSwjiSYnfAB1BoHfrM8auShkXCp1qp4NUDi78wrtyB97ZukHn47PscxhPQ",
  "key28": "BQxAi2kasawy3QpzKg5WoCoJ5ZoF4LXqj94ZttsL1CJBaFDwAkfi8Uq93Hnu1hMH6fszwTX6qpiHyGp5hxKRHmS",
  "key29": "4PhrwYwMekisqNViYWN7okULxKZeDLLhfArgy9eRZ6qViGYwe6NF8rZgphrV75vjczZmMdTwGGqCewf6imdB6DLG",
  "key30": "3E8QeSUMvmef4z9WPgc5ej4g1TDCcvzJfR8sHrVDBphHfLXF3jy8Z8J6XfWVC9NV94VwhVB3N9c6q8sCnQu3yPiM",
  "key31": "5z8GK1vA9qGab6jT4Jnka7aTgM9RC3SdbfAkgeqfSDHrXSf4APAZ4U9rjtb1oCYTQRTsYNjmrMZyAxMYVRjKtCRR",
  "key32": "4rt45cyFjuwr9NrcfPbiWdNQJfZcfsETdKafESwF9Ut8AGLWEnveaaifsByYX7AcdmPEpZJZx27cN8aGPBXvSdnd",
  "key33": "45WNRRNHtLFB6nEDFv3u9achJPfZ9D9658oMVaePJDkVB1kk1ABKotjMiHw8BfwPVcxxN7E3fifu9FvcLxUqEMXj",
  "key34": "3yZyShpVk1mCNKc1DCbXUbZG2iAkaxnYrJRvmkofwYkQVYXmepqkDj6ywNg5fNjfjRhaBi8EfjYsi2SbxQmjGi7b",
  "key35": "49XqWV4zECSM7KVGwRkW3qYKqQvG5vUjKGV9JqEmYttR797JcPRRgXgoKgykSQZXAJHzCAaRD51JoUrApuZ9ZM8z",
  "key36": "4GaYYfsc3sHqFohsRML171JwwGWNjB6sb46uricAeyLdiBybcLca4dk2V3hoTrZrznEWPgni3RoHDCTk6Q1gWN8f",
  "key37": "4VHJEFrwSeCqqZ2UEDEcHGQwvRDj8qMsyokD74qnXddADPcpLczqGe38LCW99dd8Xpj3kg6Uc8bcxV6HwLVgzcic",
  "key38": "4kUipi1q72KS42TGhaqDW4oy1SEbyxqb19oFuYFY6XmKgFFnpKUC98bbiHs9TaoKySGEQBo7gKWEnfBU4RkfoWpP"
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
