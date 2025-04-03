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
    "5J54FRU4kMw8isdAH3dj5wS8ZJvxAma2rGBKKVheVxzWFAgWCPUgaovY2R5LA5rzuyKNbfEKmBmWXbki3HBHZuoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chEByMtf5spkCrhcwyWpweDvZeDBSAWR9vn6Zub7rCFFaJ7EDXpuTwF4Y22iTqBvU3h19tpF9VbHaBhxmQUX8ic",
  "key1": "3um98xFWxXgYPirX2cxc7HHDebFqTVxTJKgEvyNXVPmUwCrtzwjwFxHkN3ZPMXjJwBQXse9cZcG4n4CkrXKnrmmM",
  "key2": "3tMZYNpKLjf3EPCUjQ7DtbGKwrZxkdnV29xmmhbqmHzWCtTatLp4eVosKJMwbj5kUw2Bnb6YsjLpsw1ftfWuZJRw",
  "key3": "3k8o8NYNUEgQsUNcP8SLT47TMdtr8bAyRw6uzZcoTRmxNJ7MBMEHZ1Ah72c7dg7aAXRADmumUmQneLux5fA73PmB",
  "key4": "2DQV3oViNDiJXZo6U9yLoqugNr6DTDUaBSVvwBodPeHvuiU3fU5EXk6t32j93jUVCSgyuXtRpCAGcrbrTy8ejPsR",
  "key5": "4Uypr6H9oZxk4xtAKf56UYqMYYrKybbWDbsyc1su537XnEukDzYXmWptgLTdvu5mt7nkgEKjpGcFdq88UYhoVJhU",
  "key6": "3noRTwu3pAxbXFM4piVC1yAQpEvXuMZNdgYAcwe1yHbRmz9hhm2vZyawtwhuU1SDzYCjWs5djkEaU5nBqanCyVev",
  "key7": "26gDfBxZ1x1VUWY4aZZsffWEHB3kkijNo2NV4Y7F49s6JKXRie4PxcNscVeUmmyoWfJ1B4P41UJRDXPAq8Sc9fpV",
  "key8": "4Fd59QbcmL5J6yG8cMvnDwDYeZP4aeg6eeD9VJ85WBphrPLUxNNQFL2wqVG17cCE1Vv1coiyoRWAFgqjpPE9eAB2",
  "key9": "2KTxwSWJgkcQWVU18HrXuGXCEUFaknaB5jqLz8vgRWPssrHa13VSSfLow9sq5FDo2NTTCW1NWNLVuBui1jBtqrg5",
  "key10": "2QiCuYzVDSxUgm8rvqNmYwB3qbjgAZ4NU4kVEiGJDc7bS24j2jpa3oyEAirhvKEvUP8ZUbBWwXAbZpNEos8ufEvL",
  "key11": "2TuwoY93Ghc4xaLcPsxFUKb5vSBYsc1ZCYvfWgNNFa4Z1hdpRNv3jjsqMzWBHsg35RZsVCNmYB5Lesh8reuctExY",
  "key12": "35arQbRKWx2GJgS2jjoeQz4j3SuEFEGFCpg2hF1LuKQRacA4wEJVHMWxPCsghtKw4YmJVWqbaG6SuwgQCentphiU",
  "key13": "58Mxs3urt3xR72VQqERSop54PeCw7jn6zbTRgPvBxpkS4wgvMewznBgu1t3kcyfhmACxCs9XiqF1T1AfEe57z5rf",
  "key14": "3aDPyEVeRDWDiJEM54RJNiupqo1QT8D1vzY5VvEnXoiyWJfVAm46dt3CrNhZUFnPgvLu7baftqykoWGFRo674iwt",
  "key15": "5nACGCrqAY6W8JfG6rtSUCCFcB5n5WoHSH7evoPaCE9DXR4pgGYqG7p7XhP2KUVD9U1ifsbVwgxSCvBHcFKTbGrs",
  "key16": "K5N3xJaZbu2wGLWpixwTSxd2iGJGL84PhKeHZpQUKmNtn8EjYGfHnjF3rLiTTBMHvLUEp6QCH6qU9A6ruWA5rF2",
  "key17": "TrWPgDq7QfSTB5h1DHCsYTDVWnNp3EJhTr3KJm62hkAM7DdTw56QK9m4d8QvFNNHAvggBkCddrEg9R8P9hB7AZd",
  "key18": "3YKSUsbE99jDxBccH6Szmfpuy3tz8AT1PH2YgRNcKVZqcLDSbYDQwMskApUd3hkvtWDyBoA7r8ovGME8jMzV3VC2",
  "key19": "52P4Ne91L93Rb3Q1qpc7JcrFWn8odp7Tm8w6G72UdwBhTVx4yPZqfH33x9n8FdjZiBrfMqmUWHgqxhP2NpAFQUF7",
  "key20": "583odgwGJBmUE2SRiMttWpyJMDfwob8Qc5XhHGVrSDMXeLhUUkVxKeCghLhpokkXg8DptPvpfioDm3k4qxLhpvfS",
  "key21": "2yi9FKpWGZaMFw4ygnRR2mEtdfjsnCQAiLStcCBQCgwi6o8ew7zqvV2WoFeDbTFKKcB91mB1XCXP2LWxc9rkNsi6",
  "key22": "Vh134im1BqUUDjnMtsy1PVoG9HFuyayJWHvnJNLF5QmDmU6FZu9fACUVmCDiPUcbfg1ptdjppUpHvBRfWPFDf5d",
  "key23": "4CfsHqaJzcYLBXyBTWqJEMk6AL2RHzGUyD5Eg92TkaEAxV7d3ZhNdc4t29aiaR3yTw1JmcSpUyWVgFXHAGm7fYQN",
  "key24": "4cZR5dcoSpT6DuLagf283sBBYy7dzpCZwY2Kncga8od7TqTC9hJjCruP98NU5qfzkBG46P8ikWWk1KcFDMQzeSaC",
  "key25": "63e1FZu8k6tnKNexQxFbcAqoDfuTtD9QKbRmKaufwLrSSyUKRncCc887J4ZaaxZVUqxLpFEaAPkxecKHKdMXxAc7",
  "key26": "36cTTNbxydBLocZ5CbYH2q7Q3MScEszK6xQ1rW5raCBVyp4N7WRNJKonc21iaiwu6Abn75d5NYjWVJ6pj6XLVgKv",
  "key27": "39Gay5ukjz5g3j1GhfciiNLG8uJ7NS3b8VLuJjrLdUYZggugvPHnmVjnCypKEhkdiBDPLfnVEEvrLgUDaKh4KtuD",
  "key28": "3S82Q3BkNve89JffL7uCgSRGM9fvTEbJkwjKYFPfmhKpuuhhiKxJv68pVQ1yXhUQYxMiGGRAAe6y5uUcTP8QWTig",
  "key29": "2iJPdfGB5fBmFbnJ7c2hQRhgXywoLsVbRxtY2saaKs3VJx9ZjnqHYRS1Nb5n6w1UqffZJb6PafjXgy3qcfUGYfUe",
  "key30": "2hvd6mbL62637hayrg5qDWnGgLawYpA1ptKrJBKJ4jeN2Dz514E1Tc2MSF6ipCMh2aQJGbycoRJGK4Ljs6EYdnGS",
  "key31": "JgNM2uRoKDchF9p8j1UeLhAs4wmMT857xgjYJNY68FGQzpVoZgswVoeVHBUpP6ETEeYC9RYQxWHKLNMmq2oYnne",
  "key32": "4CkXNKaJDu7KKz99PgJDdaWNrc7f449534vNpmwszYMjx3k2s6BXcSWReoiXKShpzHiXc1gMKzSe2taM9KZ7sBPj",
  "key33": "kb4hZtdd8rks8oFi91DEtRegGcEPZ21jaSqGkJBopQYXJRKtqQVacBQ3iFMq5BmWzMqsH26vEv3y7z279rKLXrT",
  "key34": "5W835aBNKJ4zKRaxQmiBgrsyc4WmP5H99potaYUaNnGjrdHrRCesmedNBgvvcWiDj6xtRWF8yDC8BAE7nsN4doe6",
  "key35": "3YhfsQkFGBqjcu1F4iM3YZAAE3RxHt8MPxENJVQZMbNKrHmTrB7rMhKD52fB2nzUqfB6pHQsRPUZMEGn15AJxpxx",
  "key36": "284FDo6RuefJdFcoR4Qkrg9GMGzyHPNpXBgs5zNxNzr25jvU88XwiTca6FajFBGxjFzGUquV77o5L6pV1h94Q3en",
  "key37": "Wnq51YVg3kQKd16VH53XtPNDKPJrd1TUyCZSrqB9gmwsqFjQSbjhC6YyU7De1xjLwJZ9f9YCxxGKtzSENcEtjn2",
  "key38": "3esFekUA7DC3XTRQw67vvoYsd5eifGpZ7Q3MAtjy41EZoFc48xf87aMuQKhFwZL43whRSzVLrMxkVH4UUpU82Bgs",
  "key39": "29DKXidnnR1vrxrS4CZkUdA3ByhYUyeYwa5tKT9ZEhg5ACBNwycs8jgWk8HqiAx9EQWg5AcHoUoVQtawLRxpx3i4",
  "key40": "ooKTCBYNVyVHoGXi4iVNmQiriLhFbnZYopo428nW71pat5JjQYyZTwGGrGnDJ3CG4DiENgeYeynU2Q8pCFsX1Hx",
  "key41": "5JLnGm63nhGb939SJkncKPLV7Uo2hAtMTyNXdvMuFiJsfzbyL77k2miUABkWuuWScwQuczXJhuJB2eraY6hFNF1H",
  "key42": "71YrXxRMybMf67dPoPDVi7WuD5GHd3XPDnNX6cMgC7jundRUujMtB8k6WQzqUsUbf9aVKZbNZTmrwi899axR8tv",
  "key43": "5FK4n9d34MPY9HsoQqwVTJGuuMMsssd2NLN3s6sNje6ukFJTMo9F1UrCSwRcJJBCJVeuh2oaNizUbLwHVXN5ARUF",
  "key44": "3z4g4kN5DJxzjtzt8NRCnNwfYePucCEGFSHbSFVhN7FxDMkvRHsWTRifjAyRoX9Hr83gA4QDrYfiDw5fTSQRjhYr"
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
