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
    "2LtLPUoHz59rWvH2QFhppM3C5ei8GbmRYAaGH8NUYP8VUNo5EvrXeX7PsCpKkKCjJuZ8k9i5sMbez4WJojdz41H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Febtjkzs1Dir8qksCzZcH4FBMUcb95rKP9fpk4A2uNpeCpfusuBPenFo74NWModqc5feRfLFAof28XD9e5CxqjH",
  "key1": "WVDTh5UagtgDytd5UNk6C3m2xTmUHDCtyi2QKnfZWCSJqRYfzk9dkeHhDVR7EvRg8bZLdQd53iZCfpjwvoYBtGh",
  "key2": "4CFedgErWrnKqn315XqtrtjNmi3pE3xRu6ChQWqpigQJ9WAdbASnVBhZQSuzkZS96G1XmKTir38GDT7FXYBDt7vT",
  "key3": "65HzyBYdhSLbTey16EwETbEwHwo34PLC8DmSgp2tdkmLTWGvT93MtCKshsLK4vV4XhHDzTcczZHLhTcajZ9vvsTn",
  "key4": "3u8uqyP5NpiyyKu4XG4b9PFKUtGk3jHSKx3UTJiWr8UmCW4dJEv9D8UZpF6MoXGUHvM5UWoBkRQ3igHJxgHwdu1S",
  "key5": "61WDYbLFmFztRKCku12NrxDHm3LaG4trcuTX1zpBEHNPLb6qYrM8qoSzu2yBago1NQEncqYK6ZmAQTv73wuJYQkT",
  "key6": "4qBxwEZWZivCeyKicx5MCdhBdZKnAQxQDhfH9Rqh3f8AjPCXM7XUd45gMunMA4Lvp5pzKEkEmkcJJXissTvmpz11",
  "key7": "5zXuGqErQRRkw6C8iLYvQNoBQgC1R5XXapYbGdf6UUAbvoamTpPj5JUXHnDqLHSwkYKQzGKZXYrTFyjv2iNWBkSf",
  "key8": "59yGd7d3d38JdDQ4XHa71QFfGEHrLhfkWqoHBWP6CF6FfPs7YcEM7xcFBBbGqGsrjFjLBfXYzGTNKEtRPaxM1Ube",
  "key9": "3tyn7AMu3gy5U2D8oD3ijbjqF5NDMY8Xj2vPJMygbt8BaV2tp8jgsLpNjq79NZCozpPsUPMDXddsVkKtytCkQxca",
  "key10": "5E8PxKhJdtUkiMC6M7wDmUMcFwyyvADXcFfDCA4iS5Y2P289xseCZTCQuzzyaWWLzqUiyP5aQfyJVeAYLZqcVDfJ",
  "key11": "3qDak317mE4Sv871hPrmmNY6Emj6KEcVgaQ4SHD2pahHgXcLt3KCbpzFFCzdK2KTwNuLCWAqG7h3kkNrdrBVERny",
  "key12": "5zwBShnSSzBhc5YtMkRKmHFctgbnk7DmasJS2radt4CNZhxBt4SHYxf18uBKgciomccavKi3TphJai8CszzpjQTw",
  "key13": "61AhVryeBSXi1ckUNKpGyMR9d9mk7bxwQwN44GfFE1AJAAK74rqkPmp2DAY5Pi2w4yvfUxLdRgqHeKcprAJSoRpg",
  "key14": "4yGNB4LyX8DbRrheTcdFH3rG72sKDZrJRPHU1jsmFjHZ4eB8cXmkzGemjGGfFRdfgUmAMWa6KQaZknfimfGVdTER",
  "key15": "5vBUMUj6HUMFysupD1f4FDgtX5Qc8x9JKJxAuQ9PHm7AWXg8NgmvYesDfRuYvvrZEzEfcZJumVemzLmbGL2PBwJU",
  "key16": "UMvJ4JUWqJLfz3b7DQc1xgs84LqN5irEhpQa9bihAvhJge4fTzKGKfpPE6aCrCzd4nhBRgdvJx69vQo6wNVorwm",
  "key17": "5uUPCbAMDcNZQRECj36XXcLJ8zrzRpCrYsb4cosAFVjLqhaEBPts3qKHhyPs54qr3EkaYBsJkZj99wzJVW6RKNSn",
  "key18": "zp94g7RXcVPQ94MBPKz7kfhrvAvX1z83RaRibfqH6PdMRusBAF6nTn6PzvTEAjkkegPgSSbeHpPTrpR6brUvrMV",
  "key19": "5uqu5tJomKNncaLy8C8hDQoFkqsdJ75VgZdeSposqDrZvUu1zDKUvQnjDvxyqfwnymseQBDnNZZ8v1QdWmV21D7d",
  "key20": "3Cme78ZQi1pniYZRk43qC7e6ntxV3ALaSX9ha23gxWaE8GqNmkHZ8jfw4oaLV4qXw2z5CygyiZvKsAuGgvXVhmfG",
  "key21": "58evAf2GeQ3BPXp43NiWKhRLKCArXwCNHmuWiX5fpws5pn1KsbmtgAVtrfCtN5Mtw9b2EaKJMPp6TfknMTnRKUmd",
  "key22": "grFWwg215CjBoZGxASadojs13GQLZqMocB4i7XNMejh8oTDW712rxhcrvtdtLnFH3e6poBRWwf9avhXv5JijLC2",
  "key23": "2aDRnw3QfacGzp6W9C3zfsbc98G2LTPh643Svb55EJ7qFMft8ohA4Ft1Er92ZdBW2vwoufNpH2tqXW2tRwWnxAtx",
  "key24": "4ymm6mV1eTw3Qfu1H7htr6GhWD5KE5TACWboDUeuV6dwnn2f2Kgi8QV8vRF1iNwq24LE8aW7Vx4Z4PDph5bzh5bd",
  "key25": "3VTxhtV3DXYc5D39GX3Cg6XUdhKtz4ki8fTrWb9pZrFgu9F66uq1y6ShSW2ooeSxvAF1CA5Ko3z3RWhQdaEXPpFT",
  "key26": "3AkHwEG2n3WgUDRKQsbNbkqXSH6qKGSdMYGPAzZFojNBadNNpMQvRHdK8xpm4PBYL7MKbaWETeMZ7uALB5e4PkSy",
  "key27": "VTpga6FbcyU8zdhjVVNDTsEZFF3DGtKvkzMqaQn6zz3qTTf3j1MwyszGZprz8XyRX5jGVExsx2uGe3wd14YhRBY",
  "key28": "4nBmpa4Cvys19N8S8SoqMaTLwqUkMYmHA66WeL9GsB68LWLJURas88w51Ro7NaA1GHTpuGd4qdgRNUjpvqxFftyN",
  "key29": "2ivWmEFxySEafNDz7GdRg6zuoN6UyhND5Gj8ty8iYaYe4hdiJkPPaa7HyGJ9zTkdjMkaXmpb5GLEUHR5DcPQX8bo",
  "key30": "5ioWSL7pU4ymwV32ijsjfsKXL49MaveuRf8rwR9aBoxSZjbSSq6LW77EfaFT4tBB99Z7MCEurT5g47EFpsqC7dvM",
  "key31": "5JqYUbji7WTi4a8sJCRanXN2tjusR2v6AKrgUZqJdZ2yBVTDhY9AFMeMTrW5HkW9ynPpPbAZy2u9x64KrXEvqsS",
  "key32": "3WBttivsgqVoZR3iXWvHDZgwrAWGXbzXJ5GxD9LEZ54kiAGhstFWntbA8p5KoKPoyEvPZ8397QztUJWeMVwaXDN1",
  "key33": "4LpCyeenTzoLW6Dz7vrNwLsheotu193bhGGZBD5iEFaDe62jxnPbhamwJM3bThirxKq3XYbH3zzpGRkfJny27k2f",
  "key34": "3u3563XAxHgqEPRLDQH3mDSPTMkkonx2iocrpsJmcxpjw1iYshw2PfG6mbY9avWJbuCN1pn7YLVu3yNazZGnQeAe",
  "key35": "xADDvxiGZcayvtbUK8FxnxhmCJwAPRXEpbAmp5mfaPni9vMi1hs76VDUJHGkDTcCTLA21BnFgpKP6Qiiq89Cuea",
  "key36": "5srDDb73w2tutTaXUoy3pLmgPDW29uuCdUz9w3hKapxAgSRjHBsgYg4Wmbz1wNWqrCh1JozKa7iuHDYKvW4g85X8",
  "key37": "21M4z2Hp3559vRJQhkFdsEEApobbCZQ2179zsZYXRXhSZKKD31kHyQh8PPmRRtMVywNt437xB85kzsDF8TYz26XU",
  "key38": "66JyafcZsfzwBBDzLLfm7JxZLXWZx99jPBw8kk4ePTfU6DxgcUvq57vwsHg7GofDU7qrGX9RKywEFjFkMyPuseAq",
  "key39": "Xi5YqEiqUiFDvvJRCyiFzDyQb8Gtzc6QnrCfpF1rEtWR8ecXyS656JyELmJCHyAF5JVmnabYNYbSBrLU3jEEsJc"
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
