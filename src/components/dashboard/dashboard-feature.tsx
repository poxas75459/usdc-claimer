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
    "5QCJxhoG1bA93o6QX2pDQwNQbvaf1fnX1o1CpvFruEu1CPL6kEqRk3SQ1jgfGCRBS7iJNumSKSmZ7Rtm86y4U3h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyuQu9dPqgAXxpBiiavm6yXL7mA9EBKytqUoCRWndNTxdRXcGjX4LWtGGo17osTEn2PAJMSVzKvNxktpK8tBpWu",
  "key1": "4uY7iXLJKz4zkQL9T7VuPhegUv2cJSuvsbyJkXRZnknZNKgU7HqDvbZnsZodL7Fa6etFndiTa77tHuKkCuSEfhUM",
  "key2": "beteUzt85VRuUWZKv3GqoGgn3sHKetVqHuVueb4QWxcWxvVx9rC9CrdGmZLRpgv4SMJeugag66nDN8Da3HLua3F",
  "key3": "2thjx2WSfBvjaCUmoLR2GG6uj8kVpqYXv1dHw596ZWK1daxmUNGKu9pEAmP2bMyU9BmoSDtECkxK156zXbNrq5EL",
  "key4": "3m4wzA5sD7vrj6S8wDpoEyqWZQByVTfW55J15ZXwsPABPnFxURq7CLdy9B8GE7ZNHrQ6wfsqgeD85W5RAokRh7hN",
  "key5": "5p6AkWnPb598kDrV8ShNsMUxgDFjSUCymem12amLGauxUEVTd1pS5oPpD2ZLr8tF8Ps8WQjqaiDgYg8DJEAgdZE7",
  "key6": "5iMTU798Tff9k22f3ohjxpg2LYNdQPXNv3x7Azepi4BcGCT49Cf4cb4GB4o25Ez3qEN5fECAA8oHfyofjYiABQph",
  "key7": "HKCbAdoLZyP7zZ5qYeQY7nL79vnHnpEvgpJLU1YGvrwJJu2hF3AGBmnTvTiWd7SDmskuwEhxjdJLyBd1wFhxwA1",
  "key8": "2UxMYwTfEdLEHRbrtFrgGCaEQMBpQGWfYxEoxn4ryanJGCAMvF7KqCichKyuRW51ei4ugrC6sBJn5TnYPjf4r17M",
  "key9": "4fzZmtihdy64LYxdahsBAqrneM1z28EBXc3FpSfxX9Th6gZom5ZYbQXxr2m5cqptpQnkGFPhCaydAojacr5YyWfK",
  "key10": "4Z6ruKhh3MC61itmd49cdvFgqbyuCHGTviBu4ujLgvfGDGPnWsCpWrBur4zVQfX57SFkB1YzhFxQsbE22Z9r583k",
  "key11": "3a3spCeYrTfmBwqSRTRF3mR48PRTZHYwMorNZewbTuBv1eyX418Aprze97dFybMWwmmwsQm1QoR9PNbYPL3xwAy4",
  "key12": "5aSJtStexyy7YjANx1tN78LVYrRt8UTPTrKtGknuMxKb7ZJzFK2Gqkm144wNiJjBdmYB4g6xRDAEcf9fcCjNdK9t",
  "key13": "ZJRdqEduSJwRdxCg4DKsqXLoEh3eEwi9sgDRHeiEJ6up3XvURs6CyeCyU5t9jWLqUtykqvcJ8ALj99Zu7HeL2hh",
  "key14": "4fKCRBA468TqvYwrAM7n2X4TPAnQ5UkjvHa1s3ekmn63uSfXq3o1HoVrxpY9T7rW1zgRFJUd1SB1EiWcd797NzfW",
  "key15": "aUEmKcFoXwa1CbgiqU2QgivnAVj41i1WjMm9fVU19hW1tnbFxwtsxxGVduBV9at3BvHW89qnKG4QkkWr84yjCYj",
  "key16": "5ZWXQ5TFk8Y5u9znzkUSn8ssJMGE3EeHZNn8JnJQRoftyZknN7G1kqdCcpxEgYQtBqM9eHZZt5awfvSbPZSX6pW8",
  "key17": "xyFHShKsb5mb3YPKQEdcyP8u3WwLs9FsSqg38RkYzsxiwkNDuKym356icMPqXbfMiWaTvqWyXWtnt3PoAV6tMB3",
  "key18": "4FHj8eYghHBH5wbvWwcM7nF1oe7Lfkqv1B9SLUSwUBoYRXuQVV7iYNDSKFBgN3HG6SchAQkdDuQcQ2x3szEQE474",
  "key19": "3iCNgyCj2RLYUv7JQbUMX9ZAff3VZtVJYDfhC51i3bmg87NZq6mrhheJtfwvQRmGtqXzrF7uqQmLnQYaFRzKt1PD",
  "key20": "5XeH73fjnFKUg7EUycYDyJMFgMc4QN7V9CQhnw99HTXzoWBNQCUXiwftSQDeBHsoJLx1HCq7U22P92eU929Zh7Uc",
  "key21": "5Tk9PwwqoG3oHpBw5t8UfKzsQTTGuAfsV6rYRd8hjogy48M7qaTJLUCmnX5NAid4zkhWBEth1TspM6jKsX8bM1EC",
  "key22": "5GT1o2kV8onyELJi6TY63nmGmjCpnWtoxJ6g2w7zwiYuEQ2vojefhjx8jbzxMexvdfbyRnSmimZkE19u8XkNNRtk",
  "key23": "Gv3EMcSSyfMFv4mh1qM1jzoV6Lnv2cHBdDj5bvWFRY3p3SH94JErYBCxfwzoR3AqusaTvwzbanwzNd6Z1r8ajrA",
  "key24": "4LGBFBhyLy1vuV2SfwAed8bsPdMCTbdTnJYzVy4WzWL5DtzR4oVPnaNRqeaYJh2MzAfcaogiEtjayLDoyTwFFAp3",
  "key25": "2QJChBCQnTXgj7RfQLSJhv141KQwDTeNVY29vptDrFH74PckQyLHM9YPfqqd8tT4MDnYACskyswSvH2eBhrL9vpo",
  "key26": "3SBve5bM2yk8MVKzMbanRqJQAxNZPAtjegmWLRSYRQfBe2hVCXCPSNqsSX883TKZ5FezhNUVjfBo1ZMFrai3tDpM",
  "key27": "2o1XGtJxxSdrSjeCrvZVCTmDUPAUmQL7VjruioDAkMmToGUzgNALteyKhb4ckDcEsEkXtUtaxFS6XqpUsnrjC3jL",
  "key28": "oUNeA5fqEmqirRHeL7WpK7a1RRuYNA2WUjUPcWN9wtdCGmXhK2b1XSX4RDL4RzFmeCJumjM8TT7QUkxm16eA8yx",
  "key29": "3p9p6YeYoerJKkCfCVBKBaaeLYdcPMPFL5k1Ebyc8hj7dULAfXMtd7t8Qzx5Bs225uPJFeoxnjPkDsDiPfiNPjrm",
  "key30": "5ddCusFoQPk6D8R6QEbKVYewv5w85KoTXjdsoJiKKB3mrxForzUwzoR6mciTKhZn3Xgoh2hR4a91TqiL8EcCNr5Y",
  "key31": "21UbkqHqQ2YzK1LWcHCCc9T5FNBN8UZMDqnRCx7xKs7wNJm6ag7rka2688YnnfdxE3Jytwt3WBQHWS2y7WhxvX7U",
  "key32": "4jZtiAbDfmy341VbcEGF4E3pJo54ScaQdDCKXP9KYP3rtNtsyTnGp5dmRo1RYU6Z9ST6vi9KGvRsAPn11qwYhmb3",
  "key33": "2spMMAiDAVL3fp6exeGZuUc3VG2tUdXFvVkiNsuX8xszm1rjU2qysnmYKjwKHrxvS6ZjwNiW6Ydu6BVwDyjSUaXu",
  "key34": "5tSkHLtQXvidkM4reSi7ap4rhNVyamiEa9PTWNtR3TVAM5xuXZrLaUThPAjpECaC9pLxQGBiEboAn1eng5Nk8ktu",
  "key35": "2Nsr8P7w9aYqU2jQHHsJN1cn4HJYyeH7rUVJ6HinrfokwDnvYfjgHLG74S29wkZUF7dcAUb4eHMH3yTWzZCZbYCS",
  "key36": "nvrFkLixgo5WzJXWsexCT9LxU9arCwJo8CGev9gXQWXXfsDQ571xTpGmtxLVJ7o5RXcBtvweezgqPoNMvQZrVDz",
  "key37": "oBZnGuxozDpJAhC3zWFXTjux7cgs1uzAgxUZRzrB6eXZRRkenJdXASar6PP8p2ZsMNLN6JErchZ36inTGK5WaS2",
  "key38": "kSmX29o9jido8xJVnKzUkeSPY7UDg1VHBwWzr3zvsoPVFB6vryRU2C8Rq6TptBqxgkteBwPVNm9gbwpF3Mi43Ps",
  "key39": "52Wvjn5tvWYVRpnZ8Xo2kguzqqDxzMNh4VrgssUETRxvvEsovc9MzithcJFBTEfEKyMtkLK16YoQ2ANiJHy4GeMw",
  "key40": "5Bu2CFmVnAoZEPCyQ6cmsSXAPpeAoFmMtCjB6KK4SLjZu4nSrdPG8gzWN2hGsWTCZG3smGFSMHKaGGgxwAABx2Rm",
  "key41": "VEH1fHTm4dRQD43BPjADhAZ17yZkdf1vS8CwAwZM7mvGDKiLEtPRkxBktfsZWbosMjiQoRxBTTe927CH6A8P2U5",
  "key42": "3JRxXau2be5PwscxpXEWK7YRL6dJEPvjxUfne4o9Hjhe4JsYj3HhzbrgZASx2nxYHdgQjrTQHrPTf9v22iuG7x87",
  "key43": "3tbHgpj3hTRAsPqWwG2Gn9GTdmXdTmRijtHrU2BhxJZnsKMePQxxg5VqXvERx7TxkK1LQqo1RDA9QQ2WsG1ubq3y",
  "key44": "5MqsYgeSiTNxwiXUYyBzHaRHbfDhDhw7LzWbNhfH3nzff33PoHytEeMhsDf8HvVwh2mJqZm6Ai1qxvqEEDie5Ww2",
  "key45": "5aHBtfpUqRmM9XofUFjhpDGCaFpBUjyZjQ8H7ujCnts9Sm9zqJfvB26zm1AiWuSruj9UKr8oVk92AExf9hCrcV2N",
  "key46": "8yVC55JSwkH5yhd3MpPxAovavt37uexTnG8DqzV6R1mguZGSsgyWEu4xacDjtsxA5UhxtruBw9gxzVDEFG3mj3U",
  "key47": "3czWGo5RGEdqfkh48d8GW5Rbw8WEebT5tKwxDYUShu5vkqNBqm7qrHFG4cou8q7g1jyx3aBVcZsaGYAg1tpnFgpP",
  "key48": "5zp2e1Nx9zHU8mRjkuGNgY9afTyxmZCJYL7dtmCPepTdfsB57nWSfnDqffeDLHzGB1TD14JgnThvUdXzh8ZU3V8h"
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
