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
    "5TR4p8LfVLFguF5j5sn2dw8H5wp98ccCPkriPuX9TDz8DVFhnnifxXFViHtTAmr5UW7Kvu5WVQLNoqF5eb5UHaDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJTsvuWhK5rEWmQEcJVrNAMDnw7ky6jDGRYAALx1kQSaVBurkHivqUGWQzd46AaFh2kR2HPvJ9zQ4WsYs3zkZsu",
  "key1": "3s6A86RwvcBWcpFjcTVELASVq3GRcfpJhXnKGUegJ13FrxP9gLAaKyXzQJBRCeo8hecwnRR1GSCxBbL4AFuzUgN6",
  "key2": "5ynWk2pfhAHrg9x8s7woWCxsu7MMVdJq9vWvxZdrTZEB6RAamY4fcZRaXhsPg153WWCzX3FK5eLcSk3M5NhUeadM",
  "key3": "3eHEhpAL3G83TUGzpX5oqcrqhtdGd7UPUkgXKLsiqPKHHaFHFZ6qAQxbBhb4wYs1xeujARpbZxbmj2zhVFv6sfGm",
  "key4": "2BkaCyDyCrZRL9DUbFfJNyWJkcbrPcfSsCHanGLWFcQVSamgyNjZDUbVeMAZjdN5iZ6rVCrMAVnonZxUQzevNKb1",
  "key5": "246DqvAtzJuxMf1NKxmYmUuKsThpMHb19rBCrq75frVb5PtQHz1xaNmzLvkn9waWcgDZ1cRW5MeaHGfSn4LBC9QD",
  "key6": "2neqvASWNi441sMxiCwekUy1TXSNwU7coUbue3DTLoQzGSCpbJz7FD4vBbpenH27py7ZFgdGgh6AjQWmvRoiizU9",
  "key7": "4TtRYJZdSZoaF2hg4Td4jzvRsheFaA2yGPvtYPiFu4N9hXRS779c3h9ZCLgKkGcc5i6TeEKWTJQJhfeSP9SQCHzf",
  "key8": "3TNUKx5TKtvtYPJKBaWtkLCeD3c8FTrTC6gApCwoCmiHnKQwgaMs2gxLJNWoWbHciUjuRov4K2saFJGX36tNJ8BF",
  "key9": "4qxxBJZBHFZ6CrvY1p7Xgxgdnv2cRgpRCcLvFURo6eRzcbY2HhCiyntLo1wSXm7yH4hwtrKPPcbpobmSSEsAna4G",
  "key10": "4hXutwuXs8eGPydyTk3DetD7gShMMWgqYCtyuVfyj4wFhQ7ab8M6TAEcTzseAKihJDFEQBtmkrCjeBWUvj27mqvQ",
  "key11": "14wgdfUXTYGT7zgnmBVsYF25oUb7LMcVa1cgTUWRAsrYvqvCCPxtg6feytw9KxUW2FhvGJGAx7v8b37Tvx8aqSo",
  "key12": "zpjxv9BYe8exGWAZ1y1UJhKfPegGmfTBrbyPgpAf5vjp4Q7sMzQu7UHXLVNS272io5TCqxfoXHJeqmhqyTxWTRm",
  "key13": "2KjqHiPWbE4tSkfsRBroyPeB5gJbxtZDMcRCmKT2G5ETVziU9BajZ45mM929i2wqwqgNft2pVMA2WxdHKYABUDCg",
  "key14": "3pmgDajzahNfeuAKpBQzRzau4bxqM5dEMsjnU8j8R7hq9mf2XVBt6nZCxziBTf44W7b4rcL39TrqQaVLAnrfJMT3",
  "key15": "3QiFai4RRCbN92cNy4pEBxBzur3F3d7f9GDpGZbMt2meSbzij9TQ7pgcxe6VgWarQKouL9Zky58o1Uctk9ErXUvY",
  "key16": "WkpACSPM9y9LDrAM8cRouPD5mBJPmB9mVAxtewfWyUbmow7fnGNjNYSbQKcubr8uo9efbWZrzKb5SipFQSFvJxS",
  "key17": "2X8tX7n76Mu8MuzXEL1ETyMTvdxC54nQYyTbBjrcn5QySCNzWNXEjYN1q948V9E1ndLDKQRHStxYD4eiUze4MZ4K",
  "key18": "4w9hdftSAFhSXT6i7w5vxw5JzhtjkGTTC4GSZ6dYwHkHEdHAvkKQb1MMLeY6Qyhi6VzatxoLfjX9DdqPoqbjNpFB",
  "key19": "21QqZStMfgDfMTbWt51qfo36KCdtk9neBjM6nP8oeLp4vjfLWiWk8C6H9vMo7THN9e4cUARFHgsuAcsu73etGr1R",
  "key20": "4XaQNJhni2JVbNWathXGP6FrTjo6FZNgazTNn8qF6xAjyPKjH7fWx42gAg3TTwco2NDmWogS1rrxq8Aw72wPxZGP",
  "key21": "3BkQQJFKHNBVBhrUM4ThTJejbdpDgXfLSMwvxujxrsCgeHhKWg5ThMit8PiWGSGhgHXJ3DQp6CdYqFTUndFa6Hdq",
  "key22": "4yEMBACuAn8daScbEWnqRJQKmsa7QcD7CfN8SkJYNAbdGeaaBnpWKDGxPLHkUXXvQjSx5eUZauTrSwnZNwHjb5Pa",
  "key23": "2YGDRhoqBU4DfASGTEqL72UFRx353uohRqWnqLwZPLgRtQYMpQPE7upV3ikqfT1pYCM7Tt7LwXUcJv42Qmw3JRCD",
  "key24": "2zbDkJTszE9CaFDmHxoQXHGSEDcXvHhVyVSZ7u2uqaWqpmML32bY9WEBU4hmpeynKMLEH7h9TmuWeLRYhT2ZH1uy",
  "key25": "66nyqTht2LpM6WiJ8BncGhYYYEpGtaDSdb2oaDa5XdApHWrAieBa4KHjnNcDjbthCbCfSkTRUjN8YbmEAiHZpuAv",
  "key26": "59SGZVxPpA7BbTqJM2HT9vtJegSSegMNVKTB5Q7XqCZwNqungvsNDb7un4mDjbvACqaEhSYEC6Q8qxwGdActno8E",
  "key27": "3CHzndRAZKU2E8gAAohEvFWjuARBMtqyn4wNfUzXVZdRLGcQ3Kh7PUW1k4Q1FBUzZyW8NubyygHPaakV6MtnaCx5"
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
