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
    "MrkT7qeiqxVzRp2kum8sfbFc81tbroukdchShVVovTmwadAFC4SDqkpnZn8UwFmemUparrkJBYj6dfAE2fskzzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZmv1W8daBjNCvtbPVuDUBe5aAJrcXn3U8uAXHDxuVCUcfcLy4zWVVZeBDw8sd2DKxD1fmhPHWg76Wv76dwcUFY",
  "key1": "XroCmNoc29WVfbX7uZanfSnapyBXHLhitd82QwRMewnYs1ZEKcG2Qk3qXSxuGksg3GgPgvXB9hYVwnKgoZqMGfh",
  "key2": "36fTdGGkzotkXSV896Se6QVgjccqCQattz1hXfbfzVMf3ezKu8zb8tPRHCmvLiqpbm4FqpQVhLki2U7ugLJKTNsD",
  "key3": "2xVNzXDA7yMfy8qjDW862dMDtkcGP7dYQddrGWaF8pKGpLGJ5qkTG6A3it8mQm85WRZjB4AuSjBrJoi2nhTSBg8a",
  "key4": "JApmDkkq9sw6PEhz7v5MYdiqKDHJwEftqTtzXMauVF2oXiDGE9QRvxYrgh72xqgsZ7CR146nK9yQyD1ukYLmR7E",
  "key5": "4AbFxPNTiHoMmNcGFdqLFhKTQ4H2SySJ9h3Lx63juxzHVKCSymvcXso6BZEAcQKm1KZugwuC7VAxA39HB1CgkC8P",
  "key6": "2P8JHnp92QprbuSj6PKwPPheF7eaYhvUWsWG1xxjYxrkYh2axp1SLVfp5FKQp1k1hi8UWcBiSadF5ZX4a8H8fa4t",
  "key7": "5TfNuTNR5SSdriHwn97KLwXuL9qaV5RY3HBXzUz93694XJBBdB5xXRyAU56dYZB2BCyK8YvfcFbDfvW5AL3xEzHE",
  "key8": "DmZhWsEczVFN9MT2ktUtYB1kLoAn7Y6usEGoief1qK2gBcqGDFP72Le5u3LFcRZS2C9pHnrZBQapWj7qSQtePba",
  "key9": "37xyWkUCvcyQS5zcvZiE93fVP1W1ijrUk1xq4569nc3joEqrK45M2GVvhq84ZjJiXB621kw7XHGPKWqgv1jqq3Qp",
  "key10": "5kXSmCCXrHYBxxJq4PWmDjti5ePEvWM6tKzDHn2WFxKpyHsEvZJQhwvUVMKRZJgL8siGBUuz5WoxaboTuW7g9jZu",
  "key11": "3vJ7wr5GiamqppmemNYGVPg7kC1N1cvpn3mKeFFyyu5uL9oaRZJg7hGkZfEBnnyNKZJTJv5C3tHYP5fEXjx7cXS9",
  "key12": "2B2b5C6LRnhwsPpp6FbCa3A5VYaQ91sKiWBfZaq1VNXgXWsfQAHJWayHjn9Y6A6qhUvcvki11uFMkwKjjCqKAUCx",
  "key13": "4PsdDEFBqzGjs2q7tzYQWmQwojdeoNQEe1fR6su9c1oaDHTrpYrgxaQD3BednnD7VV6GZHESM7bApjkpKA99rpqL",
  "key14": "4irrsrH3cqu848kDzKfbaPUKctJqQREciEvxQp6GnqtvuCKCeYhcYojJyBJaP6HJ4EwF8aaNGfh6JTcETWuJA9SW",
  "key15": "2s6DdxESjypkinVXZUvHsc1yMcnDFxjvTvrXjAvW94scRrP8EXbX6rZsJsTjixK9naki5mmcKz73vczMST4KwQXa",
  "key16": "29meHLWmZRJ9DruLqV58pVSbD3XfyaAnWmQHufgY1jcbZg4TMX427yJKyEEBkmycUdVKPNZ3u8pLcPAR48bYQVwC",
  "key17": "3si7TwJRBW2b7doCGNWzd3xrJudpG9bPAe5tRPC2E3A92Q7zRfERnYqcwU14YUB87nyUfKKKjKbTiCcEarg8s7Gg",
  "key18": "4sXH44vRH9u5v2rxGNZreyru8ZrRmYP33odJG27fjJetRed2vd5V3gAmRsqBnDVF2nQqoCjLNvMEB7Qm9FgCdQrP",
  "key19": "gLPHdo4E9vp6gw7iSUcVcRQHSVLkszNay7UTgcrXmoidU9wrfmup4Uyj968fW3y79aTotd1etZBhKVqUsNSbsXe",
  "key20": "5bYQzqXUtFdkxopxwUEYeYQG9EtJPTuc6DFMgpKjWKfX6yEPH8kP2fgpJjmmaT8VP3MT32auGfgZZp7sMFebc2Px",
  "key21": "3MzpcNEwB9o2kx1qJRfWjx2CV3mQxSymg9NDAJvyriEY7eYxQNt2959tx7s3Trs6RRRkXNYZ9JxYLBCMfTbs9cQH",
  "key22": "wtTnzaHW3g2pc3d446ggUorcTisvCysfUMvu9H1FeA3LUKgAtaBMN1iLrsoDrBStESqkFU7XtAqGhPgrMB3SynL",
  "key23": "3xbr92vmtGSE6gTTeqBNwcgt3hehfWrYxWQhW8hX2FFYBiku4FRidQvfmfmGGd6d23MbxzHicj3BRPuGVURDmiiw",
  "key24": "3inaVvJ3qWDQQ9PesDicf58R6LjTijTPHM8VUQRsa22aVbBkBq9uwrt81QakZvAcbXzrSjb7MhY9M2o1zGZPesg9",
  "key25": "2if1tbsRGVRYdamSRSQt9e1DfAkhB1DLZwXUBtoGvBaWFxQwgdqzpuHeKRP8zWa4AEnZ3BCt4CsmnFwjG3EAbkDe",
  "key26": "DZJWQNRL9pppKpeiVvBiHGw4c9Z77r2Wcksx3XUgHFD632qWiY1jmVTQpsaERnN7wshCTNPL1seGbb2D2hKgS58",
  "key27": "f5Gf3zmndgJsy7LbwdqJnLStRornvi2L5MnSrYXGqjuQwyhYTSSFcHraTpBkpb58FnKGcQgMj2VfBPNvFBC5oPC",
  "key28": "53U1vWbJzEx1FNYXTr6APmahPB6Fcr5bv6xsQYNeBPVV5dFa6H68UQJPk1kQpPF9A9UijBUZ8KRCVpEyL7vkbPmg",
  "key29": "3iEQ1opHGqUQ6RX6houh3Kbf3RQZErs6BirVUrdjvRFVR9jNis1sagD4e78JoRzBcUgUtg1H91F97K2SAQjqGUtv",
  "key30": "2Z9Z6n4agR5ThDrE3fP9WSeCJz58rkXi8HWcgzL8Lo6ECK8TNZbZYEjR2KsBb6G9GJkNjDyr76DqcguQS4TiCyhD",
  "key31": "2Z6qxu86MgCKkxsgpF325eSkJ16P6CzWxrCk6ZVS4Gm1yHbZoxRsUqcfxyBw9F3XKznNatRsX4fKtavps5YRgvgP",
  "key32": "5xjAsoo5zdhpoWrPZ6Ensi9V8uF3YCcg4zKDp8WjB6ANTV8WYU7LV8o15jRsRqv6Uj6e3vLuAq8BSwGA9xGWmMRD",
  "key33": "34fARLr8nZrgMo3XGWtJNcCUz7i68eaUNtgMC7w6Z4MMVBgebX9LifEqbnaPCXoQ5aNdm228tZ3XSiSnQKKsprj",
  "key34": "4spydS34mU3F3wzkKdjrXCACx7Aw9yTYUJbDjfCPTBEnGuc8HYFqU9LJ7BFuDcaEtV9zLrWq6UcH63BbJJEGgsju",
  "key35": "1sKxqk3tocWzySVX86whGAir4TvSfsdAnrvf1kbnsZfXwELwWWw6NLGKtArGsZecJWfbDTByUKn7fqUc5YSM6Q2"
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
