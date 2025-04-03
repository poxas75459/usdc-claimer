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
    "VWUGfPnF4B2Fogqov1V9iQJ7Ea8uyMWYJzSJBSPC66rVhe4gRqamomm5jAeD3FJF8eENGnjgsNdCHn7BwnagQe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaDand5M6CH663kBAKiSB4QRvQw72FZK98JbX6VdB9pH7JyDZXjr83QwgKgVNM2tAejqp9uUeru5fpJvWX3Xin7",
  "key1": "46wM52Kw9hGFNA17yQsTiQYjYTi1p5pdh4P4miqzgXZRZrVnD47B1PWEKFT6AAJoVHhjrSr5219qdbeUbxhJDYZm",
  "key2": "53x4tH7LS7zLFsYKnfjdRTERrZV2QqYo4fnfbnX6SGg7iLodSAe4uspdy7uGumVFPSkcnEXAL4KW7wdHrxSU1q3F",
  "key3": "3FQSSQmrHvimX95oU4YXaa6K1aqDbDwAKU62YbkKet8J9hCQTyNSj2e8wvoe5wJjR6HAhxUUt3Z8bZni6oMRh7Vy",
  "key4": "27MBY5URJ8zQUYJAWFgDZvYQAYtn6UtY7t7hdk6t1nrm81kqHQHje2xuY2stwRXRNBMATLAg1uBF7wfeQkUsf1ZZ",
  "key5": "bzSEkSMkgJzQmGkoN5qF6SoDqEPiaQAXFWQhczawu9gxM42DJqXT1CHHgf9AsLn3n7bs1rPdE9FZ1CHqectMZ4N",
  "key6": "25JS71yngocPuzaHo6hupyVDTF5n8QBATFAVCUzQrgAmHFZusmBwX1QRaTrKJW5WmAGFjbrAGq9MuA2rphRANY3k",
  "key7": "zZbQYYD6jGWVLYH3qVAWPf5W8UqtR5qV6hfaEmDxMgAiCrUt2osDEq2HzGAznY4kTRbBXK9mnz9X425gFDDNeLm",
  "key8": "2RhUak3BCnWUbxctbP71wr96ujMszWzkZGw2WGg3XbGkMuyDVnF8rvsMA4jciDbafh9iHBZLJRfMPFmqQ5ZdfJcv",
  "key9": "2XeYq6T1ERrd9oyfbdM4thjmyt1SFRQXsq8hoNzi9HAv1dWPRc1WmT5fHXmgoPidx8wLYyhuGb1Gm4PxjfSpBBTG",
  "key10": "5iZgXskRiooTEDAUXb6dQvffy7nLG6Hxj5WoqVbcnJmeFMdKTTZfWm3MT1zEY499vUvTpLc2h4UhPFvYQq3Wcoxa",
  "key11": "3Rrp7juuP4Trso1Asa3ZqQxcnKCTgc1MgsFyuzhPURbLdA5MDX8RL9ExJWMQKhNovPQCHFwKmJuWAxArUW7whx6v",
  "key12": "2Y4o93CmhMuNxUKZ87c6csbsM4ZTAzdAGjcXw6h5ZGvAFm6pNFQa6JroEQH9rakNAC7Vh6zCwqjiBimFz41PAUwQ",
  "key13": "3RNn4BkCwqNsRWJ3VYSqUFwc4U7vL5HL4ekuyiSj2UjVsE27ffU7E2zEcFp8pd8pQnSiJJNyYy53YKnkFBJg1o2V",
  "key14": "2MT7vUMzocLQsuCC6hKfJszMX9LozKhzZRZfr8pXDy5TtEpfzfBDUzeohEY6XFfNbHbKs5EW9epbJfuUnk57E5rg",
  "key15": "4AAzLP9NVe4Rt7tkqyZPGVSaz3YETwW1t6HC2tvp5pC2vKmq5gVDayVi7qjh13fac2LZbBdwz5BXAz6R7FYsJJdM",
  "key16": "5MN7goZN22NEmAF6NEmYBYNrZ6MV4JmcysdwAzn1n6VgJunba3y3Ai9QnJTAxQWL76xfQrwzm8hBH8bPCyzbkzhL",
  "key17": "35TLzt8mMLgSiHWw5jibFpbaaWjkPkoHYTTcZ9cSEcejz5Cr4dVi3JWrfT6pKfEfXQB1Zxjr3ct8RL4dtRLWdafv",
  "key18": "cJ8mmNhjRot7nerkppKAcLqRif1UGHQWLM2jYRE4Vocx5kSi9VZEcLP236rpsK5Mt4Z44WkS9fcgx7ZbwGpaCA5",
  "key19": "27dwi6DerZwswRvGLVX1tzpCFHdA6pwSvn2jVvfabn8V2GRCcjtX8sTsYkjGYX6hATEVjxRJdutk6VkPZ7NcdQ2c",
  "key20": "5zVA5UHNDbh923gLFHmJ79zehaLrAF5oAY6iXoPMS3ZqKnJrUriq1bpLgQrSMS6EeuZqtbTTJV2RJgDPiDGTsoyg",
  "key21": "2n2uCX5dvuEmc8ttSnLpzjBmaM3iW3ffpitaAidypi6vaKyWJ3sDGMnowZQ5DXU4eQnJfTp8axj9MXEh84fXvWHj",
  "key22": "4mAEjyWHsZRYpLc5STa3Dbw6QmS3jPzyGdpjtTpvVVgLPdKucYWwV4sBejPogSeGHdfnESG5ZS4A8RrFMQsWKwPB",
  "key23": "62AgiHqfJQXKAZHBz9KJEWfxUwHainrwyvyYVJPS1HwHNoMKgNEzP6ywxYSJJENKrdqqsScWcKMUKvFX1dzABFXs",
  "key24": "5Sf4iP7F2UmoWKtnnj2r8nJUjxbpNGWFaqwCha6GpYB1RgtZzPmqXng9aG3x9iGquaEZmcijAfhGs1EiLzHpW63u",
  "key25": "5Qfh4QavGSMK8hFYFdcHhsNXu3JWQWZ8ek6dLUdrA24rzQU1wwRVwDjf89Xb4XwEn1Yyb7XYmihyL2iKYBkFSsSa",
  "key26": "5ck9yEcw49L4rbyQwpxAKGgSy2sGGu72UPfyzMar16mrsUUcYxkKJreT2RiF5DSbJGDaMUUCagjpXni5zZggVpYp",
  "key27": "2k53hwKB9TDNL8QNjESurVKq8DJvKod2YPuQcL7bSpKYNYHPhiTPCRT5pRJVHnEFXkhoyRH8UwyKpLcv13EvABMb",
  "key28": "2YqpdqobAb2UxBTQzXKAWj2gSZYK4juEYPZ6oQaqaQyDA31CWmp7xawwKa8WoXhiDxiJZ9qzyUuezkt4PVm1eYoq",
  "key29": "3rZjNujga7uTnWUGv5ZqxoHY7pTmZUVG2o26itZ9qVrzmyxeFW2FqQjHrmmFrNbVcg6CwDroottQbh5soPvpC2uU",
  "key30": "5Kxmox4GyfhAnxe5xrjtLRaQsMyaeQsJXDhKWDwdKg2h4zUa5nB3onxmzqGRqpB5hamqky2W3zzG1G67tTBSGjiP",
  "key31": "4hYoaLFNT1jWCDGp9ki8W6jBD4Yyy4hzmKyim2Zbp79Nqma12KHzjE17UceXaoczsDfcjpQs2stwxNcFnwD1F6pH"
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
