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
    "rf6wrx3WVt5H4LvbEjw99f9yE8uygEMsmQMPqHWof1jHed6WSWyEGVLDWwgDnuXsrFxCF78EFmhXTCqhTf8sw6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyL1bQjD9Jo8u1PuMdS38E61WR9HLVc8pWMt8HQmriNDgfr9dFjtqzpuC6ogPPn6KxtbhZ95AYbmbbivcsBTmfT",
  "key1": "XbxUmJP5brRWdhRfWCHbEMdvmfUt82VCmVTK3y6Uf887KxajFpr4gLxaZStLXw698AYqYSoqXRWKADp55QTG1f1",
  "key2": "WCtunkHqmTXaAZ1bgph6hBvDTM5NovCkmDeS7rY5xzFLE1af5GyeD5JwVtuSzLVgxGrSqCcmNitTiMGKxDHBDe3",
  "key3": "41VvjsT7UPH4MARzMRfScHPYchKqU6yrQjAtSFHZNrgLAwJeuryp7vNTZY2GjFEhsVXZDcMfhXqvaXHxkSisGPFA",
  "key4": "22LQSyQxgmVD47JUbnzJkJsso1esz7eReeECAYheosa83V3RiwE52A8ZGk3i766hWeDQSrmFdPXnLqfcD9J2eTQ2",
  "key5": "5JP6k8vuoVYq6RFtHztF9CktCAFb1CZbQ6CGjYArV3xMyPFhu9hwMUjZj29jzrGFFBpegT821zeJMWgAobXbKZzE",
  "key6": "62VHKvtUrqpUwv2ZpBHzZMYVPmwCSTyDMNsbpnMPj2S1iSvsTQ3MpkBxbkzn6N1TE2Q6cT5Hs4VCXoPz4R4L3NTf",
  "key7": "4LauozgGdGoLhS3appHj8mG9YDTcadH6eeSRqGfdsaTsRW9GiGEF15TFmULauMPGEDf6hhCVxPauod8Fou5H4mqV",
  "key8": "67kHEddjnhhYs9YEcGfAKKEVgbMffZNSgGm5FFU61iXtJJK4rNdG1QFcy7hFjctwkwKcq6qptaBjsSu8XFM4iP5Y",
  "key9": "5aLscri4nfY4aYRG17SHVwakrmuyBZXgcxZMJEjUcoy4Q3262im2zsk98NZuxoBkBpDZgqLG7fxGFBjSfs1pJivV",
  "key10": "3abEZpbwB572ztegEXbE6bfm7a8XAhPWv7Ne1bZdAQre2zADuhqbZR17FBY3pcEtLqJwE3HkhEK7bUYtPwyFszZk",
  "key11": "4J6SnKijU2eTZhHEKyyJhBDgS2zkmSeSrZMKU75BGwYj8MrXsPGQWR2Gy27B2sqD7HuKyWWLeL4ay4D8MFskD93b",
  "key12": "2pjBgQ57YpLcjqf39tc64gq6fWGRN96hwCeZxA4qj23yyhDAEK7EUeurR9GXu9N7ngCrQzX6f2UbqJCrqMqdGCFK",
  "key13": "4YCmLSGeConhgaonBg9X7xrn2e177wt2Yja2Ni3KXMwX6XZFYmpSL7V4kdFzP2RhFioCP9Ha4UPgV2t7UMMiaSo1",
  "key14": "A3ssiWtNDW6D6dKSnmtM18ZJRG3dvdXu7Aetc27PctRbgpLaH1bbWXWYuSn1j1ZFGEEMp2ZK42NzXBt6YkwqmkR",
  "key15": "2CBUijkJ3xcXNQdQ7nyFWpszvRuEPKoiF2fGNigBe7qy754UCQuf1p3GgZ8penDsui4CSJHcRSYJThkgPCXZBhAj",
  "key16": "4YJLnMVSViUD6hjkRj5mfabVSWjsxdGKygnxR9XkpndmeoqZzW9XUqkc3oxstPXwzB26KvgukbkJpYfNSJDfmZXY",
  "key17": "5oYU6D3qoYyjQFhnAeKEQebzSgAkh1VHCpYAtZ1DpgHauTHMEsKdQARQgcRVYzYasxU9WrBZSUUUvAD4PUY9dmJH",
  "key18": "2yjhrjXXJmFYzFz2fZpokAkE9XUrabyTJjVwgr24VGkNsiugsLvyXyRxJL6wvtf2kASFEBFAydowETqMLMQQ5r9R",
  "key19": "2retNChDCXruDUvhDs7T8ytgCwu8iWLSZcFbenC1YvsrJgPFEnwdb6Kd48T3qWCeTDGgfwSQcqV1U8hbMmVPagg1",
  "key20": "5PJQcGTHuWXXECn3MYGrXeEdh8sSHtyZi9aDZrzdqEPChZfuo2RQGKfuPexY2sedUTHM1eh1TUoxCajEgH1UdShC",
  "key21": "uUEvkpRq74oFanPhVGgSxqd2PcvPJUY8ZUcSr2WEh82wBYknEoA8TftQUqLdJYWyjXvmnkTptBStPWFR1VzRtCq",
  "key22": "4YwKTmW916PDRiDDrLXfL2cLQRN6XDhfXwgE6cZq6pixxyuGLHB7Fa3GncP6bXQA4Mob4ZtsaqTqgXAJVMBKjiiz",
  "key23": "mmXRr8XG89PRCtzFxWf8WsXTQksu7peiRNBdKhYcPFbSzgpAYkUTT1yLMxWzXMaw4v4TEExezDmLajHU2a8WkMg",
  "key24": "219c62TNsx6GMK8M5ZPp8V8XkYb4YKom9JTqZo9VaiRVufpM1RYeBiCtXBYNqywvUDXx8LcaocsC9Un8pQMP4nYg",
  "key25": "2B2B4aHqyAAEAStbvNeQJbWHr1LWbh4AJKxvbUciTa1mVjtha6yoxigK8ydRT8XqFhWiBjZbQU3a8Hf9oK1QXWWC"
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
