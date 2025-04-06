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
    "5zSYWd548DqfdmScoWFkaGbFrBRekPzpccRiKzYtkdkrAKnpXdtJkYWYsahujWRirpHg3FKeCSbwXL2ZSJD7gffb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bumx2bosckwBvUU7XLuzchxeGKQfMjAtt9G78Pz1gNq1XdWQYzf3iAWgj9QwxGiwj49vAm17zYrBehVoZ8fzStc",
  "key1": "4PzWxF9kNmZoNGUoyXbDLDYrSjd4c2kxzcf7ndGQtgZEwrp2xLDaEcTkKjrayNnk11iNUZazuW8MyFnahXkVVK58",
  "key2": "5tNszk3BHUiPP7co6afFwoUVChL4M4KQzENdDFXTit9PPJCy5SJU4XLM1idzMfcMm5CjLbXcGbRBV8kF4KdrkcoQ",
  "key3": "4XwRGcMcG7W7BkxqzVqKrF4jBxsffgeMXhxBJk37usHgy3fZQ1J8Dkb39pzaGG7FM8uB6D8NtU3VSNwfuMeg93NS",
  "key4": "3VJ4XGNKFFv37BTegydCyWSMwKMmCBQjmW6b2dGW63i8koQnYCx7Y4HPdiWhCdqDWoAwyyeNkSVvce51WLawRxxG",
  "key5": "4w2gNFGCbd9xF5cRXRQ8RcHGC9cK2qrX58WxBA7nrbGiGpyoamCKb83KCRx7gWJgeR1zcQ8omTGnp7T85hFx1Hi5",
  "key6": "Ma6LdXm6rCPyUp2PTXe9NQaVzgJ4qpm4HzhkfUDc8HGG1jVQ4kHejvREQKU6LNyJtYsDx2U79KTq3u2oXuqTkDH",
  "key7": "uXTtgt4yMqyhwmLXxVWPw8SwvsRc5BFZMpvHenvY8XBmedH8SchhCFDSPGsK29BnYHLyCfz6B23njTE5L3VbPoZ",
  "key8": "5RcEpYt1qfe3QpmYjY88rU3UiXvC4NPxRK96mJJdtkYQRtDEHAePjS6pChnevhmjWDaeN8oPoU6kocMnPfzRxbqU",
  "key9": "3gnrxUcB2nBPHdrMU6YdnLB4MHSQ6eyeZXDB9vFZMPj7Qec4N1RbzwF6vD74zFWN4fG6EJ662GLbbsGF6aQWDi3o",
  "key10": "5DmKUVqGbDe4Ty8LbFUYvvnfGUPa5tduMZCXrUcJwBvyChpdkZ3gedhbdzXDNZnAEy9FDLzDGBBNeK8UDgPdcgq8",
  "key11": "zkFuTWpxV33YgYpn71ydX8A6DrfmFkMiqZ6QBF8wuhadUmqv3CsdHrNyMrX4SHyYACb1RAzSUhDwWykMe8BouoY",
  "key12": "5NtwhDpHuBrT9V6QQDwdoTvKiwu87V9QkFPJoj2qb8mjnedxcvCku9cD5YGThXhGm6QVzmmGSpm3mbASoTzVrfnK",
  "key13": "4hBjhEZ3FCwVH6ch99hDdoeJVU3FEKGQpNKm5udE3h7C6uuwiDvy7mcUyCiUPqUsT1vKyGAzfj1pvzBSRqQ3ETpU",
  "key14": "5yBqQfGQZP3k2ZMGvhNuYVKtyeLBQiuvjAQRsv6UZdK3D1z4rod5bxywCcdS5PMUJyDMzPgLK3XpZLX5KVaG6CDu",
  "key15": "26AJ9uT7AKTPYBuMbquVg68ULhJXkQcc1B2wQGxoX7iRxFVkN33eipXKuG2ZqZm7tZSe4BnvvovpJoYXWiZPHvvs",
  "key16": "3i3ntnpPW9sdWC2QArzVHuLWoWvxnFZSQtmvPcmiSHH24QPKGfs2Zk51PowSSMZzaDDGYz1uaLEGofzqpfKprt5x",
  "key17": "4tWbUgq7WGY9tFaFtzSLKadYbrNNuaTgmJJvhtGW4pbyrU5exaN2pvpcLZDMpi7gjJSi3Z62ogVQxgkFnDq75o3F",
  "key18": "4afXoYNwWVQPxpv2gVrJPakQGzcJNFTYpnd7UbzNtAzrHJAKTY3cW5v3So7VJSv5YgE1dCCczFcEfEuU4jgTW65k",
  "key19": "42KKAiMM2PzWFdCufn56FNVyu9oV5keaaG3uFPesAwTfPyUZPJ2SVt4DJcrJNRE2dYQZoXakKSAb4GWCmkuPdVAk",
  "key20": "44wcs719ZD5Lyhur6gkJU1gXENAe7Nrctbs7cK6h84zDeqCmbQpRAxWr7ax7mCxbZvTe6YYizmTWHwTYMG9WmPbc",
  "key21": "4Xa6n3PZSecubtVp9K3kGx9ofeZnubzNnsBtKwwxX7Ff1ziWu3UQMsNraGEPtRPcmLSPbprVaJgmnDGhThBGfudr",
  "key22": "4PA7pcSxN1fuKoaHh12WMwnL5JegAHPiZ73ZN4spobweGYN8FW4awHUEBxcWTj9ajtmK81zZwbBzu12cSwmWvzFB",
  "key23": "4sj6r81n6L91nMYVKTAWcukbpcYfKTGEXojPKaWMck6ZXWdSnuozPzqwn939oyS6pxSkWXiKj1M2uD1druSoam3j",
  "key24": "5but7qXTbtXpKd1QBmo4tf6vhesryjMnpFVZQ1BaKfSP3s3xsCwz6frQL87FpXPdJT13X3f8A2LT5ChWgUErKqRp",
  "key25": "4v4BqMk9UH9QPLsLTkfy3tUy8TKH3s12apchpPSv6KDgoT4UrKTqFdc7pkmtXC77Spca3wvAs5x5F4qjiNevLUgu",
  "key26": "51PWN6hjZmjR1zRXTGQBZDojQAjnWtHXvAPFAMpDifwbKNQdCvpNtriFyKuRRUJ233oJSAWXJ3MowLg8HfsKLN7k",
  "key27": "3Nh62RpcewFxz1g3aVrf6P1U4sB7JgzhfXAdPuGhLsCzBnNCJYH51p9fRWFLienSa4ihGjvny1HT2u9Km1coXrWh",
  "key28": "56ptWe4b42TmKQVCdtdCSK5yxZQURageRWM79WpLR3ZHVbuRyffBvo7Y35mgL1e36mS5imAHJSQztF2Dz6FznX8e",
  "key29": "2efjLeA7cRWxBDmGgTLetkJ2kStdKnM5buMP6PFcu4TAnurq5RBWaPFi8HyjLvcaxA92R8hK3teTgmc8dSnxeBAx",
  "key30": "5K6gsKNP83CzEVjbAfm9o1gHkC75yNuo1eCG8bB9TXWSmuGFM6irkiaCCppJSZbAKFKtRsV9xkWE3P1batzhFgj"
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
