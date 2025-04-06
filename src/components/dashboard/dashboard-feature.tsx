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
    "2knudQC7w6t8Hsw6mTSMjGi5wEUd9CGAgegnsy4p3Lx7Tc9NBL2s1txbYuAVR28AQiDj3vGLcWNbgSQtLde191AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksUjgbhyzFecDYzJEXyvHC7z1btdsPrc6z2xVDKzFnPEVT1f95JhaocZzPR2NbvDKbFmdVTqyqhWJnSQo1GDAEd",
  "key1": "4Nw6ARRiGxJpK3ko8wS9NbphUWH8JX422XqfVJYaJ1oWfubnqZKAffoA4Y423Xxifbj7KMaytXy26A3EUMfYhSU6",
  "key2": "JGiJrF5qeGqZ4F95C4aCtwNnPZ6hKcFXCVm5eMAtG6Cg8HHbvX2CpZwggACQeNd9kJNpBor86p1Jm1vf2LwhH5E",
  "key3": "5SLZyaf7q5QryGaiENVRrA9qnNj4kXkX3T7WvFXywbQrQEkSfsH9PQhBBQ6V11mJqpDG4ULSd2SdaSsQZuoSpBSk",
  "key4": "27UgQ87ocLmgRCj8t2XPTeJEDhZ2YYHjV6PtAh5rNMoFbuZiM5JYxD4CA4EsCfWpS8ip67mS9eBEDdEWG1LGsPWu",
  "key5": "3tegEvHaUPt7sLGTv112xR6s78T3xe7dLez6XxJqVFe3TSw4umpkVE4mDAVNSqugHgAXXXhzpg2BuutcdJNJx7hT",
  "key6": "4R642ZMXXhJ8XhYEKCdkCAa1hgpVv5etescRFF61tBCnoSHMKSSEf8c7jJ5Xvjn8YfYNRYDapUbKe4eEnGMhyZ9L",
  "key7": "2AqFv85FZT3pyjQHdLi7HYdwtM7Nhoiep9pFF79YpYG6vX638gTJThTQdqJxFKkuv9QsyUekQTnsHTsttC66JRyq",
  "key8": "MFHQBvrPJjmeN3SrLCCPjjqR86kuYDr6zMf3p3mNz5bJ2d9kPjqfrDoVH7JDKpZtpycYY6WbnXrnAmQyZPMCBBz",
  "key9": "2T2sZ2d2gXWvTfPtCoUftW51TB3EBc7a7ECK9mbj1zzq1R2EtTffZBiiWXMa7u3y97zUkGSSzFzBCe3x1TxBhjU1",
  "key10": "4TSsZo9rWg4wHiEX6DDzKWHRLDa1Did3Raecid6vhiaqdgtzBTJaskGU3ZnNjMmXXBGsvYBNGa4ZdkrcuwXx8vys",
  "key11": "5jbGyidzzti3CB5TGi5acNtR7XZbe6o1aEAtpnwEqe3UKeqFX8TPJBAaRaMvwXQ9CiQ5gXg7imCeoh46kG9gjEdV",
  "key12": "3mcFV2GnKEiRW422bpvkMbCtewRo1BMCBB9X2Tacs3G5AieTrysz6ZZSb4ZDMGYmdcoW2b9zFbFPGFUc4xhuT8FJ",
  "key13": "51AGvkFacDvkbrjU8KeouHk7EoUd4t4TbihbC6YJ4EcLGhdnjrVeLSFZ68pfbG6vHqtsd7ornimhDKXEsESu7Z9J",
  "key14": "42hawjESxgcsCHAAziSJ118ZvofKG4fCLJBEGvG9gDYDbaikAg2xUhevncFu1cab1jPaKXhAgiHjcq4EU1yXK8bu",
  "key15": "2qZQiuwXtJc538vtFnFWTRREmzPCh8BerLZtAGxex5uzHXqxRSiQ7k52LjGbN2wb3tTbD9sD8jUgKsC1Gr4aqn5K",
  "key16": "2aZPa4gd91vx2a8WmasEGKA7JCTGkgNsrgyJZeEXz81fivPtrBd6ZAWjbErRwhznhHcAAwKoGWMzQG9r5zqnxB5Y",
  "key17": "4ZcjBczDN3gidmM6E988Wkbt1Uu67QmykyTgQm7tBBik2QNSV4VQLcB4WvNBWakEyG3w5xB7FVEWkPEwF1y9Q6Dg",
  "key18": "4JxG2RMjgwrKmtAAK7kBV9aJvdoCqycag3u8aLti6Vz3TgbAWq84Yb31B8pjWcFaCetWq67PrMoFznqXkzPzbvHD",
  "key19": "5nsZjHCXys6VP5A7w5FSU9z5rsw1t3AAwNckVJYKoTgZi9zBo3MQF17tGLFAkZs1JUqDx4Lyhs2X1Lbqczs4LeBf",
  "key20": "47c7PE39WW2iF8x5yoYcS3FQS5imVKiTbdVLRak1cwZC7Ei2ZqJhZD2hKr9g6hh13iJxAx2gsLvHXngksmV6H4Fi",
  "key21": "jAjdziocAbsdkAHzzQDPCEprP5BkNbknU6k28SEPDpcuxac2GhY8ANFv9wkdSCKwrHERMqY6esH1pe1vkzTkUTe",
  "key22": "5QHyk25eWkZRgg2TNKai9T8mrdiDGNS53UjQRxG731ri9X1FrNVah6xRikLQEhPUQV1MQntn2pGg6cNK55bZ6ns2",
  "key23": "2WWdbcxy4k2WiZ8m2aazdEVDfZXJ5gEHNJU74FUw2ZqKV9LtA6qSa4AvXYQHFKfS8ozmX4XG4UVLfUcY2no3rz4r",
  "key24": "351GsBmp2yanom9juVrpuCcYj212zsgUmD7rHSpb6eiBzVvrJqxLJ1koMfDybtYgA77tFKebvmsebm2LPLTaPNbN",
  "key25": "25PvivXmtdH4DmQyXfBJWNvpdFA49Ba5rpgfdBqgwfSsx862u4Hgxg2RDQvXFrzKtx5YQ7Z3gUBS2BTVQtCuePpL",
  "key26": "212VxCJSREPJZbXZZXZoZx1hKYGdgRp2VJDWmTntMw2xA3Dt8DsGJ8R72Dbe6pyoP8vvjiRSCVHVXdiEcQjdnQCT",
  "key27": "4rsCzSiCF66hvKsC4UQnGB6geqoesvsckTYbAfQkdmY1AEpP2r7uaiaQHPedyByiqTULgKgHkEgVR1oggY5hmrm1",
  "key28": "kxBaXCRbRq5T9oJDZHjHPekv44gChjpWJ9Te1Fc6ekoSETe4KYyZ5Dt5jAQ2fJ7JrN5TFJcC6PpoAujKn7Fzzy7",
  "key29": "5TSaAst6r7JezUUfseuD9JXiFk2UMdcAKitwVMT1oe2ND8gtW3pjnBdZKCYdhwVw8ym5be9zr1hcJNzs8XwhexJ4",
  "key30": "rNgsh76mA3787pQb3zF128LTXza2vJL2ZVzQWnpDyXTngdZJ1yhvKPPEumNSNVSaHF9pkaZyQD9Qff23cjsDvyD",
  "key31": "1ttDFiDUh8wXgjiHBuqrJKCMMJFVSuiSwkiiaAB8gG5vtsb8ZsGJRYSEaiTTBNS3xKTkypobtWkNQ8N7mUgd7o3",
  "key32": "36A3r8C5aw9dpMD81eTPsVKAxP3btHkQgAeLZMtwQiLegQTfNKZBE78p2PYPsa135ak6LKa9gMEZmNorgCts9mU3",
  "key33": "4dywNX75bceMvKP3VSkknP3rLBXBvKzVLq9SamRRz79W2w4t97V5sAd3i3EtSeUdHPk1a513BNoWu3ZVwoEdqZAq",
  "key34": "5AudHxHB6GjcG2kH3rJMcYuj3ff6do5BpxcZnoKkfqzTKnwjq3dfqYfwUUrXF9CiXburwfsrB2g1bPcjjXpT9fhP",
  "key35": "3QZYRtsvSrYq3UhhHwxpc1RiZLMzreVy98X7cpDecqy69AXj3srpHR2b4f28iszBwQ9VxpB8g7dCnZPeWar53cRe",
  "key36": "5AzUzukMoFZLpRKHuGVpPNgM1sV6a2LiWyVYAy46YrWzS5ykLucHpfz3jaVjRysuhM9NUkqCFm5HofWwngB1qsH6"
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
