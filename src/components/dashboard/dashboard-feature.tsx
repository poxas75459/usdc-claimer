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
    "4n5DGZUuKZBEkDQXWAXiNBjmjRWTXThVpZM4kihhXHKHpeNNuFBdRKt7qWuCDZPKrjACReomrK4ND9kKXz6ARokj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k9aTakg5jqaAngxzzh4kT1SSUsAG3jpJHTWG3ZzUJsi5LpUnLuhT5j9m9Tn6NMxqDNMSYfx3UrFaXNv368oXRmy",
  "key1": "3twbz4uhLJ1bYMEBWDrfHaYoKqWBYJPhJX4XeREv6ufsaPmC25T6WK53tsZx75vYTtUMNZofW4rGDPWX536mjG2z",
  "key2": "3TP3LvVuBvsnZCBDd2AhQcDGXVajdETAe55THavUQqSnDLpsYn5pL7uyn6wdxG4p6CQ6b63PrVeM5NHLpYE9YCDy",
  "key3": "Y8YVrhHJU4cMazHmTmD5c4gTh1VUkBJhPmpVezcHdryjcZuEDRv1GMZe8i3r9z437wY9WFy4EXn82cUkqwzCcsn",
  "key4": "3CxjPPGFdYpmUf9xioSXHJZr3rHD6gjWRszDqc25HF98F7fg2BgHpd3Ck2o8mpdkSyhFRKpEHvu8gCQTcqvCoSwL",
  "key5": "5WFGMhjvzoy8NwDfJZejYQw3wscGwzUoLUDjCEjCNeZKDJo89qKrhv7LjbtaJtEm8Nv4pFYu6MXQ1mqdhUppw1u7",
  "key6": "5nCMmwMd7nRtBdE3DTdiMLNNioMAo9uUhegPxcFhJMj2g5RfXKmpuvCr9idyLzhj5vBAAvQXE9NaidJbHsv95cby",
  "key7": "5usd6tgLjk6XAs9qfoZN3SF7nYtDuMZ59cUs8oGz26SqYKx28Y9AUrVjTpG9MRFtJt84VeUSpZeckNoAxYCL53XS",
  "key8": "3aJYSdY929oFrayk64fEgLTwGesdgvJrk8WpfJUMyTKJkcQH65N7BCobnFdH89bewBeXSN6ry4Gxea83iWD9Bxpu",
  "key9": "2Z5oWpMjHzcTiUkAmNbfvSzjqtLQ73YijgJSoEVPE21EyeA1cCDLyb7os8xppjuWJyfgAPhinVshVBFxNRVsVfdx",
  "key10": "3nghgsCeLvokthYaFSNpT3J2ry4U5B2fJJpDviffQGVswShPMfxsuYA5R7qQ1s54VN9BVLHEUXpsYvRwqkuBdn7i",
  "key11": "2TTwEJ8AfvqfzSEkAm4CNrW13c7mNLEY9u3AM9bvsyMa3AxbEgmY1qCvt4P9oxry8N3J6hBrQimcAXaCPWm4Gkpc",
  "key12": "3opX2Y7yJfxRXaSe1fk6HnHaS4aDhPyLJY7Y4oMuZUfVFziQTYo45hWq7e2pyXaKD4bzfcTCoWRYBPZzCtkTCsCC",
  "key13": "4A7UmZU1K4axoUKjQs3ZKeArerEMot1NSLZxRMbJ4HptHFCRvgxyfB33H79hYBA9uJyj9rvMK16EKqTCvXi658Pn",
  "key14": "LjAXwoFWHwb2x16m8eUZEEDuSpGgBQALkwaxdYE6qRJaxUcn4F8a482L7v6bvuk3x2gMqirGDL1Eu6i3FP83sH2",
  "key15": "3bQzQd5MMSR8Ky8q83SMaUkUUeiGuNBo8gHX9iin6V7btpp3Wj9mdtsG2ihZmBtgch6oVGSCDUgjgfB9ovdrd1vs",
  "key16": "5vFWsM6YwLj79J2dQSxdD8PEdGzJxRnZiAypAYmv9MRJF1X1CuA7rPwYL19CUF1kJKoqFttnJ26eRRyFuhXVU7vn",
  "key17": "HJo1STE67kv3Ngh2Xoc9F3unN2Eqmwk2fv7VDgXjMcBMrBvNcxfQ9xcaaPiSpN3s5Bma8Fehf7ByGLub2Ey3sjE",
  "key18": "64Rez2EC4xvCs6eLqM8KQutmJXwDtCvXRAZxk7h6Y9Y2sHkHrnwAGYZbsAUFeYjznsvhDp96HqxGXKNvN1WPRCLD",
  "key19": "4GfL1utGkb6pngpnhYdrLupe5CJybMUpbvxkqzYsf2SybroakZEsUjndu8CWyT6KYojwRTsVeocgzCbf2HkvFvVB",
  "key20": "5T41pyNUSsmTkM4RgCCULreJrTd32LY3jnY5QB67zRGrvyBifEAD8KCvkmwnBmWUGqco99wxcue6Rt1NEf3uyiZp",
  "key21": "2qfvFQrgxv1azAjN25PKhvFWsfyVsV1eG2PicqzxrsbC9LGaZjcUvKBZUo2QxcSZkYT53qY5rmgbMoFhYpWwi3nd",
  "key22": "4gJ9a1HKKLBCJDBQd3Jb7DW4NGpmCZGvXBbVKqLb9Ww9tQJtSwWhcdhADB6QnpC5SHBZeeBK8po4SBAkK4MN8sQ9",
  "key23": "2XNKhZ9FqPSFmKWfcus1cEXeQDPvZJqFuPje4nKYPmrBsRbCQfryUBUDodo7oJKzMpjJj2FrM7d7QKn356PQvri4",
  "key24": "5vou1rWn8n1Dsmw7TJ2FGsu3qwvV7dAKyzBDSEBMZHUoyaFdk9mkaZwxgKsyys9nTim8piEDfp9h4s3jN7WeFAmy",
  "key25": "2UuVBJj1BqBXJxTuomnPFegfXxMxzxjToXjbC3Wgmt8ni2Ht17NrkpbGiR6fTyDxuMoJDjvAutBvoNurb4Dh79nK",
  "key26": "4qACR4LxkhLqqD4uKSt44pGEj8Q2AXMQQJs7E5QFGkyfG4kc5uLDb77TWj5TgtGJjgZQziDuYbJVzaNhLev2CqX9",
  "key27": "2ShDd91Kv95Ud27gnQArQfVdJhKZfps9k9VLgDmQNoENrNNqbmpiNMHtgaqHzcNfwGmrRGz7ysCoSc31cEfL6jRS",
  "key28": "4enQfUrKu3XMtf4RYvbj2aER1SsujoNS5yY4D252QPcHzy5B6BJ6rCrhXn5FQeto7Rpjj2jzGJ8N2KkAW5R5G4fm",
  "key29": "561tkP3Src3F2Bfj4RLws93jyAzChos4kTtbYvbEeRfcQSCKD3odj74DhigTt3HZmsY6jWQH2sYyaKDk9xpaCzw1",
  "key30": "TdSp5dF3x5yJ5BexSfgbfFSh5ZYDouM3FFTSBHRUUYMNycZeXdjwseSvpVLd44Rc2aJoFTqYugZUkYwSeeb2oVx",
  "key31": "NSb7cqqwZ4syp9t7Td6HmvtdnVSZGBAxwXNKAmj35QWCCBw7sSkLhSnJ1oMBT4oEAGDJUCVHtFQ6bX6fSLx5KQF",
  "key32": "4q3upvzEhEjQMt4wAfc3jw5B7UFT6K54eaWiuCLrx1fsnrnopBozkgWBURDryonMNG1Kws8mMny7g64EpqVvrx6U",
  "key33": "5EQNCKktCwEqGE72238FWd1kfgkUV6FYz5StSURz6b2MfUvgAQ7eZka1iV3ZwAUK8P8oyVQ6NZbAdFnn2La9NQYv",
  "key34": "4hkqFTrT2wYtY6rXPzGg5kWnSNe1ZxRE73viDGk7zVW549PB9e5AadqHCJTSWu17BGb2NqwauwkfuQWGWFcgC4zY",
  "key35": "WpRq4XLEpHosAfgVnoAEAiCGc71sTsSX4r7S8hDCEi7zaDEMsaFZ8FhPE8goVjKt4QzEUvpU9wdaXTEjTVk7t8n"
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
