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
    "3qUDNW57JMazNKGesc7vDcjrTKtPEdQvyufBCyyeZbZiXFa5eRmDuGGU429BzYcBxCgpvxjrEcCQNQKWZs1GevSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeabDndDNSVCHiNpGnRVUgoE8dTWSS7cUncX95bR2FUPSKVXmoDqdQWSkSsyJ6kumZ5dzE3gZQSJwf2pQXczJCW",
  "key1": "2W9xkP6mKmofTtX9zbSxHujMdwJmqEMGcihErgDfrHbnEDxrYxMTui4kmu1VXdCPxMVYUZGsPDh9hU7pyigEetKP",
  "key2": "5vgkKvotTq3U99dsAYGm3u44mRSLddjqEKwWs6ud4ntSGswrToURUurijB8m9vAp5BWzABKoEdEvttFMXmmounw6",
  "key3": "4wpAS5Tn9pTZqAYXjc46Vo4B7d88Bp3RcgTw7gZRMk8rBsT3ibjDyssN8S7JSPV2Ah2uonCdZoUXvE6a2zdzb4nq",
  "key4": "3gjBbmBQNR9DknfAL44dF8HB69bkem2Jyzwy9whqYjv3Ebrvps2uYfXWvu9FG6V7dExZwwXBBre8zqJ9XbpJs5bV",
  "key5": "2wAfqJNMyrRxJcPMc9Dv2jcCsk4FgjtyYoXQAVAWPJQExDsvsuyAs7bCg3s4kPotn44DHPR8tA3AnnerhQsnSdqe",
  "key6": "7GywhofaV7o7GLVZYb884XDLtywU41QrKDSe886SCNgGeeWVJhKjqPVxtMkWjJjkyoz33X9TztTgUnngkvvD2gr",
  "key7": "2ZdkS3UX9KCGrs6yDD3BLvCXRgvBSnCrWTAXFqC6vZs7aHqvj2Ap4NEbwSDDa1h5jHNhf1kSPHQnCYZipb9eEjwN",
  "key8": "3BycCKsPZoSqKFQwJU8qWaLzjCemMvayqKa1WxxJtuaXrqEaNrNGnkUAFC5aHMF474Q4o4HUqR3KhMq3xJ1KqB6T",
  "key9": "xHecpKR6erRDMD3RqiQ1hPNDFLymsjbs1TaXXYmwVpiPC9D6mjXW34EDihkNNEXE3aUMcJksBhiSffhuUqz9wgK",
  "key10": "4aXFM499SvUFW7wEcnQSHiYyTAiL8HaBsscccNA5533jZN68vWSpuuATJ7fUvacPtBcfHjL7KdMFXdLRhDQFkubd",
  "key11": "5x8XuK8AnDmGaDbHyPR8GjfapuShiobopBru6sdwpEnFKno9t4BPNyTq9ZMHrhvUAGKN7Ji1ADtjeKeZBsNuzPbX",
  "key12": "5JXKeap1R6RJWqErgzuWFrSwJAik4ffZc7sxbX4PuCFGhYxsheMqdiA6vuB2tK61mLZarWe54JnBeGgGgZgM2u8u",
  "key13": "3w65ckLDp5bMNL9RTjCN8K9reNnDkdEGnbYFJusrpZFqA4pfJVjHhX9kZTyYFDe5HL11K4AZVRQEUiZa3jVT4hPD",
  "key14": "29xwnyM2iQ4UwZ7LoML7ykk37v4afRg3zVYbN17kJfpkJPZgD9zRVLfXCfotUaBsZHQeoQsGvDVuxftGMTcaKULE",
  "key15": "4dHoELjnX9R5chZz8zvttrJi8Qs9uybiJb4MwDfnwyWcxdCojcSuwgSYbLHbHJSYz2QmJE1zX3cMW81twjXNiD7x",
  "key16": "4LLWUhgmvCTcUZ66rR16ZXbJizXgG1SUE3trMsqjfYiwQyueSMK7HARBpxQaUENoo5hXnjEXwR3KkU4CnXMFvWKi",
  "key17": "HbMrPYBakdCfneRFpz9eL9UpX49Pzw4tjLcSvBQP79U9SGQyJD8WDedV4VFW3qXS6PnSFCGgN8RWzvvGFu1dAGp",
  "key18": "4FVBm241ZAAehYhCmhz1g4Xj2g8uwDteqwWPizkearxQb8iECbHSAipXGPueD3dho4eW5u86i9G8agAqjTKjRBjR",
  "key19": "4X2ALUyFTunDvcphxPsUxv9VTc7kV2gCvHufBNyUdTH5xuECUm8DxLtRwtVPKda8bFTiskNEuezjYGZtaPiAe7jn",
  "key20": "5uVCHaTCujeqZLp3oFoX2MPHN7Q7BH9DxFoDRvsbYCwk3AhqyqVkR7NA4BnQB5dGtZgCHCCCMQUCwPHW5AgvAqfN",
  "key21": "4YauiM54BwzQ8p9jCBJjMuhkbJ7VjNuN5WKyhjVtzqWTHQtHnQHoJP8bq7x8bCt9RFdMJ5kfMjEF2EKkm5NKAu7f",
  "key22": "2hji7PwySb3A3U2Q6YwMBo3fhBkeCjb8uW92NFjZaMTRwCoDJKu7YkRmZdXMe8qLaBEJphQtpVrqT61f8DH72Cwy",
  "key23": "44bCzJPQMzboVfvMzY4JzMYEgt8KZeVBphRgMyjZ295UFWveEjrJghCGdMtR98de6v6XG8DYFgexTca8DM9hb4g7",
  "key24": "3m97GgSWV6TFS6x6UyqYtcX2hojPdzcSg92th5m3MzT6SaeU3jQ8GmguCWwzspZtcNC3XWxouiYaMfveKK6QhCEj",
  "key25": "AyQuSbPLoyLegV3BL7p2LnbNbRxGwfarvKabpEQCUsK1VAnoUHwm5SUtTQ3eDGqEJQoCvwFDLtFVgNW6iRJxKwq",
  "key26": "5UfnVrqNvpg3CpBvxyF5wdi6YWR5QBiGJX1MKxZp1cYNXtNNy4Vf8LjHPAAn3uMFpoHvDUbwCKpeZpGWmz7suiwp",
  "key27": "2J6UchhJe6uqtTtiRYm42pFpAKXkxtPR6FWs5SmSGf3SEJzgpdCXN2EktXUYxQfBKbzsNvis9WDxk1ezWqdxhb6N",
  "key28": "2R9vAUKJWCfY3CaMXnsqPJhakeKiUFRYoeudosJ2t74cbuc33x5DWz2C67WQanocFtr7ajGcm7qsET7Wo5GMhbbA",
  "key29": "2Q4SAJdmoavxTWeUG9Jr9HRmNbusQ6iYqF1yV1DbTfZXq37scPYZRmhXWqvgwRYVFqmVdxR9UczWLWCGSBFEpTdn",
  "key30": "ESQ8H1suoFP8N5s569DrbcYQN2mrzkdaC4DEC51osqwdRrHJjxijw6pQCzmC2asCMYmWf1ENKuMnp7EcquhWWXm",
  "key31": "2YYrRLo1zBqJrrMEGUUET4iRTB7oyPDcG9oRpeuwD3VNcJJHZaix4avvddxGtJH46a1DGPb7t1nvReikDQecGKnT",
  "key32": "G5wUswXm5LcxYxgzHUXe9hZHQ4Nvkxa239r1ZMoxXe3S7t7SJR8NPxkpouupP64ZWZmouQdhhmmDLV3njBEVyTu",
  "key33": "4eJ4tZFca1PoMpuq9uckwoMEmnksEZnmzzA2EGoQmCf8W38yhC14zeB9JfsK8vkc5Yo811n38ZHJkB8RYxcz4rR3"
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
