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
    "5QiGh4EM4u3x12A6Xs15Co96eCjQcATkjJmXzJsHhEPuRvevUTpc9dkKc82qC91kTAHcAvTF8FQEN1dGzf9GugoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2gQQe4gKZPyqNNT2RcKUWRbiY4RNo59hfzN2HwcyXC5ahfkuceMpv6fJjJXVZ5Sx8hRnsM6x2zdD1vScYKW3tR",
  "key1": "5QzxJkEUpTMhiV3Adxhq2Kx9PeLGCq6cit8YoWk6xUETtAu6V8kifLNGzukrnQH1uNZG1318nMVSWcDJdXZAJkar",
  "key2": "pojEUnme7inuuBt6k1TV49JYE1hEgYQ9YJPSXPQMZTv4JnaXr8pxCeQUeSzfs3gMBTVfy4yA72ctxKotDfyjRto",
  "key3": "5R4ic4CnaLMKMVTyctitbgCcxa18VjJGia9tnDvRtm6WxQyyG4NcXkDheMnp7RfCxUN1BDYLFjknftm1jN751FV5",
  "key4": "ofVwMzh3kUygjSmqeCCNuoWyN2VGTDoRvr3srBQVnd7WbNKhwW14E6jm4YUtmkKas87mWk7e12SPttXCPqQoLsN",
  "key5": "66o466n9tEnt3ZHjUT3hBCvucsBrHw2bg8HumTZGUkabeZeWrKSEoNUzgWs8H2jrRJfEXekcNAVxvinxo7Bq8YKc",
  "key6": "37KStTiXeuug7jRtW4gDxP7diydz3KFJXBQbdJNbJKgotYCGEveTnvwt1pq5h4zcv6bsE12CTJae8bSnwKLTY6hS",
  "key7": "2jXnfZTBQ1sgmhLAqZkgyVippmEeWr4ztx5JrC1KX11GodqVPFCzaif4KbjoGkw2MvXiRRLB8N8xvv5F1Rug6gYz",
  "key8": "3E1UrgbjvqjpWgTBg7b7ACKwset6k9rs8tRoVBjMyoewqkF2KmarpQfx5PzMAZtQzjN49B2dxFLs69CcwXppsKw2",
  "key9": "2DfxKd3tLhuttEAMYg9XEyRSEtGbpBeACXCriVJyXxdf3HpWtu69MiYEhJySEJdq1tzEKL69vhb8xXmndUH6qNBR",
  "key10": "2eY19qXE4QtnaZ2Sqf6BqwKGLB1BvvfzF9qMMskDaJs81HcDNR6Fn3rxZXt3Anh95Cb9cYPmgW3VhB9TA1biVAq3",
  "key11": "3SFFimktGbjuEPMLBZYekBhmn9hPiy4Sybyb8XLoCeyn2f96PMawHQDZNyB4xswdPnvkz1JYWtLXxS6fTmoAEk51",
  "key12": "5a82Sha798dgMf5z4p9Qk99vgpVRCWQHwgbMjMmf6rkWKmpjNx6iPnkYAnpN3LB4qSrf2dEab7HZhLKrF2hLG4Pe",
  "key13": "2zuu9MVcGpnbHUJj3Qw6wNh2koHHDGxkEC6JAznr1if7u3cxopppNe1SKcxSajNUyj8Lvfarb6SK5oZFtCm4qHkC",
  "key14": "3idsCBQ9puBNPPVmiMcunUyXHXSuAuiZ2CTWzSDMKgR4o8xc4r1YJW4vZHpyogsXotjNfZ6em5btYsEr9nAj6PE7",
  "key15": "56akfGXU5whTzN1N1UDGuUu8RJGFZmiAquf1ysEMNpLUyirLoBNw5fcyZA3ZXNi5L7XGdqRyHYDgHdPADDFwrRK4",
  "key16": "3nZJEQLw8WBTqVWFuU1Mc7FvSr8VFho316uYGG23U6vma9p1uyCgxd9kozDLe6ehzN9BxDVYiGZQHvtFxSsTZdCk",
  "key17": "3gCW3e2UcZkeKfR8paHqyPG2N8uZiEY54bDFfdeLTZdct483xxCNE7yDzRpQ31Zm6UMbQCspfRrUngcwZqfiYptu",
  "key18": "5HjbqdFWaBGvPQuipyCk5BFYhF6bbwDhKPe4heAyiZZYF5smtxSqFUW4hMYURtFBuMXyhLnVgDFQ14wfrxGLkf9P",
  "key19": "5XEkwYjNuaNHBEHSovgiCesrLGLfhH86mbZ8ARgQkHkEFwRExPKN2UQWM14T6i1zMdZjH8XsCXAZfGumCXzx1YKq",
  "key20": "5P34qfMe4fMkUJ1c4KMLWYU7snMSuWqFLupnkVqN6RJezta5atXvNW7HrMcUR4ZRY8GrQyvEbMZFutFyy9LRhcZL",
  "key21": "5qNLbRaR7RhXWAx2HH649ieEMatrpEgVt53PZUAiQjxJ5jboXHUYjoM9JvHzmvS7Sg3a7TTAetkNfUgbfuqfgrjh",
  "key22": "LKzchYwrgFeBuBpKe131eteNeiUmsLGbme9vyk4fMUdXEZVUtBEeAMor2WLye8x3JNxZdgXjNVX53AhjPxDQ3FX",
  "key23": "25dRjA7LwBhMKKSp3VW8L9UmLuEkNTMxzip4obSS4vT5SqQtowEDfG1gJBTHM8y8rbqDZq9T79N2ec9F3Y71Pf9E",
  "key24": "3MSoD1NTLogXjzLhGRzoGqkwyE62NZtjykEMtpFXWYpRRyEBEw9PpPtHCFhYJqmJ46nAwTiCNiTKfVsdXLeewVXF",
  "key25": "4WkCE7BteNYp9evCf4KVMe4aEHAaYQ2F1Nqv8YEezaRyWE63SaBqgRNoyncpW1qmuwPLaa7u1nFghXwPC3M7RxCW",
  "key26": "VFi676KVRhJigxmRyGetV3AQuqDyoEnTKkb1Fkq5UoGkZFmUW2AdRuLiQWsV6p7u6VpsrvDjjA2PNQhwPDSNZpF",
  "key27": "wSDwKbrhkjisSixpD1hxgKE2Qd3mAtdf7TmgZRV3Sk4C1wwESpg2gUGf7bWNM1UsMxuHrjVdN5z18reGDGdafFy"
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
