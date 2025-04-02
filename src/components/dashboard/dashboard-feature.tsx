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
    "3u9ET694cqfepQu4URzz3WcwDwygvZkjEd4DuWtwDCZBhfN2EBW3q8Z8sJ6Cm32CkeaLVWe1zo4xJgHHJ4b7Vt2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39hyp5WwxQJGFxQdZx7uSBNo1Zs9GoGsMHgjJN3cdvaAQSAggVEQW3d2kNjpqtyCA4zCG8tgJ77PR2512P84pw9z",
  "key1": "4nq4eQPJF6Hqwm39Zp7HLzYP5qZgWsXuztxvzcBjsSJG9kKCfxeGhGDRCbPGbzKcucAwayiRN5si1oWzkP2nawdF",
  "key2": "3nXABY2uJyZCRHJr4NAxKUEW5YyyWHtcSV9KjS8Kjoek9f4QQV7J9q8bCu1FFde9fTkqxRTBuuSTwKnEiYzY91MQ",
  "key3": "3sf92LvgXkNAdpkEkhgGbHjbg1jqetwjTPD6F7ELFKmGEb9LwD38XmCpgWMJH9EnXrX3uvrenpJbUJrUqYRwPQfc",
  "key4": "3h2bkHT4X4cwmk3t4ytGJCkqksQstCc76ocqPM2LzYJdAzfKKjUdqWFLhUR85id8hnbFJsTBFjPwv3MdR2XgL4PC",
  "key5": "4b252UQiMYvSJpB6qv3dmZtKwpRXV8QCBVkrP2vaPKpVnR5GtCcQHQ4SwfEGv8KiHcEMrBdtzRVUkkjwSarTAtyW",
  "key6": "5GwRFfTxoSeWwZvEx8LWC5pNze7vWbwcXDVk8WTvsbhw6AR3y6vEcv1bJCgqzAHaqD5m5DAgc8owWCg82QvYDDYN",
  "key7": "3cdMAfFgupLw6NYhS7GVUHWvWZDBDHDWHcGVdXH9NTmR44oH2R2K6zsJrfp7cjZ7T2TgL2YX438JbK27PeeqzKAA",
  "key8": "3AEvB1JqApZMnAqujjviDYRKYPyy5stpMK7TgEE2hb9hXaAJYHB2U3oce2ZCcPNyxxPM7u2FibhMhtNMdd3eu4Uf",
  "key9": "2L82fnP7TAdZowXGC6YyxSiFfRmEdxMGt7PiPohJ4kgTaFjqyKuV3Fn6yLDhfM9PUujjG8XEnc4Fm3gNvfKLRzHk",
  "key10": "2bLJMGoebjRYs2D2kEvCdsYYqJLsvnMnQcD1hWRLjznoJBpX5bX4PbhwCuKTWQk1zva72o1QZgm37y2yVsnATxpT",
  "key11": "3iuBPVUbfGkytA8FAjsRg83u6BuEdHoPA9rZcTATD5ehmaPoxfyJ4ynrE4mhPn91n9EDrga8SyfZKkS2qHKxQfx4",
  "key12": "29D15yTKSYWjWwhuHHmY2CTpC9Thh8SooEhRUvSWfdadB1iHzNxhqFfLgVA6ugGNmsG9pW68xcycpSCzoXaqsvwq",
  "key13": "4trtSKHZXYkid6uiVh15pKbVaCsjHP99whmTQ85mmWyzo38ZhAKcGGbQFa9RMhX2sGSP8FX8E4ip4KDBztWyNVUY",
  "key14": "67DgBHiGXVjiKL3ekbMqvHQpYk2HDxsxneSvswHhnvuHTykGhvXQDBgqCjoEQn2h3H1N9tDxNew94jqw48xtbccb",
  "key15": "4fNo7wMfenCG128Sb4L1eTQtYp6MBaW1Za3RLqUrByQpu8SfXDcNnFwVRnu4qy2ywd7vKiwCCUm128ZBmGwaVhHu",
  "key16": "5sh7TNzzfjtrFEHXvkSzyqMbw4nT6enKMkXZx3bviHsPfxKP4aCJGYwguH8jLKBVxUZrdnhj3k61FSBvjBAqhnmf",
  "key17": "2Lp2aFwvmfDjkmrn31A24ebs7Brntoxp5fSf2DBEbsmBV799KhAHZDpg1pJS661S2qb2qqb7Q1TKptbmYBopFviD",
  "key18": "42CvK1EW5gftFyethtYCpSnrdcsprCagshgLTguH6WTNGfSqnwjTgoSav47BP5SiJ9EjJhe8mBiGTZw7c23GJxWT",
  "key19": "npfueoSu8x6K6FrzreopZ9vmNptrNDJ3ujVvmFemCWfXnXKFFK9jToXRjfJ2MWSCbnEv1FzLHSFGeC5GjZfbMif",
  "key20": "3cuJbCfuenihsWuHqXiS2wfbCTJTWjiFKJNN9ocE9MziXgpSfzTd2S51tQhoYGaWptg1JdasJNwWCDSdbGcxZ9kW",
  "key21": "82VLYcfm2JtMWBxMRNhEQVHyVeXyxmbaU8mkaihRLoDtUJDr1QoXesEhpNmGqr85c3A4jdx5osAmScmWDhSHmhM",
  "key22": "MTtF4zCfzuFY9iTt7vxHNoGtVCsKP8nhKmDj85iCNwhhdUp8VrDKZjacqLGA6MgStVyWassv1qAg1tUaTm3ktH9",
  "key23": "4M575zPbokyEp7xbqyBo7XLjnNAYHP9pUs6fxocU4HwNhragPFDpnyHG9jVPiay8j6kDtLJtVRHFsBxh8dy22duW",
  "key24": "R3pyVK8z1yZD4etoDFJsYytLCojr4XGe8woMSUyjckEKQRd9fFt99byKADM3MLkRiGqT6BCNrEppRwxEb145ZWt",
  "key25": "4HNYrTGGGXKH9UcKn9smD6Q42X1xMoF7oZam5Cuj5xs9b5yPdn1ed5gYdxnKZc1AxXbpjBbo5fhutcnEb7ZqZGfu",
  "key26": "32bkJP6qLC38EKJyHEBVMBWbjJJwi6T5UVHuCV35oW9j7io7u6NNcdKMuvWRLB2AWMYoQ723ntpDTEcb21G8YGBA"
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
