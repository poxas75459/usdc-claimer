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
    "5v2hxWucFu1g1dnuUMgyiQa8ynU72dumMn78SSKpzFUkEoA8n1nEhaPx9AbA7htkFCvVQcNg9gHaCUzBxZNXj5a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BYZdMUhn3GfAdc1rEctytHB3q3szW7KKio6r1gg6SVFVWi78FaXcB2uESTNS8E9n5qUhzkgPN7CDXXX7oZiM6HB",
  "key1": "2N543TXhv8NncboTVz9tWMgtCeVc5qRJvipcXTJfyGC1dsZSvfgmBt7CTvddqrftmdb7JaZhtj6oFMgDYyEXDQL2",
  "key2": "3HaoiHHgnEawrgYSoM4o5bVzTg2ASnx5bs5muJN8mARMVbR1nSfd2Vp8DbXgj5G8czAmPGnd9yuyjkvN5ta8Fkg5",
  "key3": "3M9XeDqBUdF1xeh5s5TRrr2CF1xZ3U6yaAEdSv4Zri71T3DwR5PTcCSnZtYLSJ8SwP4w3NPopQEhE4J7qReHHFiv",
  "key4": "seMTMVED6qujFRuSRmC37DvFzLHTNgpACYJsPTdUCMcndWp2eEwBWdjoyMBLb6X28qomcUkdLnzXPzYdwb65A3i",
  "key5": "po7SMXxefrfx8k6Mv2Yfs8mG2uQJNVMSinwTVUgaPEQ32GZqMrUEguyN1ufQeBDfSheNCUTWNopErSpVmmAZjBF",
  "key6": "4KwFiaQTh49Ztj8hHqwqEtd2RK3fpqGDnBcNopYUeRP896Cuf85asLDFs4CCBRHKHswmjGWUeoMgyBdTMt9nfypv",
  "key7": "53pcEybivtER7Dh91FqyXCBvFo813xrRM9E2tRwj1289ke7Sfo8mCLR8fWR5mYayFsXQ1oAsKKyEi1AzHF4jjq3F",
  "key8": "3e9joHY9TRXFHP8uJoV9bquifaTmhGUzid1UCW4ruon1tRy6Ank1Mg2PuNF1jyDBZ9r5CUugg7BdNT1aiw6QWnon",
  "key9": "bYwQyowcqzTfHKiFGBToQQMpfcp1PvxxwtA5uYQ6cpaxojHasK5xgKnFkS2C7EBPdjgVyDbys3VYZyKuZdhLkhm",
  "key10": "3sfu3MXk2xyiss8jsZS9V9ZeLfPjoVWa2WpJRTU9k4fvQKTpFDrEy9G4JzyKRfoUKjvYZ9KvGcxKxMpsNCeuTSHQ",
  "key11": "5g9JUfBxKQAYkN12E1ME5Uxg4XQkZnUHfdHdUbB1Sjoj9k3fQ93mWM5AVzbg8cHsBbk4F8iXoG2KDXyN33d7fSRQ",
  "key12": "3FqwBDGoCdHDyqgGDVv3DDrJDzs6KUjxD6bHB18XB6Drh2zkoUtjqpszFHjQvfVEd1Td7uzt2iXYCakUsqUW43yr",
  "key13": "gjF5HQpeWVBtnGGAarc63r8gJebhdY2QASdUkaQuYtfg9WV8j5LFg3FR2A1V95KMhj3URLGUdqekoAzAM44p2Sd",
  "key14": "2EKcFqwgv47W9a1ctACQ9hRBLrGiu9XjAGWgGgj2A9EQpU3a3ygMwDUWXL12MDzLR5jLssP456mD27m6dYmz3kKm",
  "key15": "4vwN3pDPXXCEerKTTKKz1qQN9WLhtd67UB156w35NJfVJq3g4jrALsQJvhwvM2ZSu1ZsjFfggQDjca8LfuktK6oN",
  "key16": "43GqSkuW1K7MxS3vU4CAD48WheG33pNqr7XfGx4UYnRJkG1zM2Lk5jnyLct2NdT25N2EUeG1t4WFpgYGhS8K7oPv",
  "key17": "2PnewrD5Zux1sRgGWyABpN5GwacrHvdGvbNnuny9QTWtqh5DuSuoSpv7cPVgYpB8bptiSjZEuUMFoU5Brp47n9Ai",
  "key18": "5nhhf4nU9W7bDTuYQVJH2YND5Hprea6exjRYZnt3ESjM4nVX6N6DJQrVWQD69FPKMXXJpr1397Uan23PNVWaxggn",
  "key19": "gTWh1Q6BRHZQXyoJu5upRAj7oUXA3t4jTjAKLFvNfpq4zbtU4TFGHk5i79LFsThfsVH4j4qDqp6C9eCJXLwXfyb",
  "key20": "3GwA9MSFg76LvUguouPDhMCbqU6WVRcovFkXDnHe9dNuojURyEn482RCaocEwHRsiSJjp6VeFeQxfoRtmw6R6W4P",
  "key21": "5WzvwTAZtufJwLQWcfXTYXEvDofE2KeMzRiE3HCPXoPwkwUe8WouxaJHHXLS8GXSWwJRcTBkuQmdibyu8Wj5j2XE",
  "key22": "2G3XgB68E4zafTZK9Y47fW7x3w4Ctikjoia9txWw6XBaMaxkgiBdxLBreHg19C7N2GB4KjCNaFapks7nuuYY4GU5",
  "key23": "5XgtB3DAb45dXtuATNcSJsSAr6dUH96v9nbvvF5KSGa6kbtZTgw5n9DS9MZQqmBPmqGvdvkqoYQEu6tNauuvAhqh",
  "key24": "2NXs7k4xraUadQFBniZGw8NvgHGHJHdSGzfjsxTXkRtxQQTNnvexRVxbvF2SvgKnFtZxNnUpYm7sfhtM76FyWNKW",
  "key25": "4BKDgXsGjxJQpfWprFTKDVgarhC5FeNT66Ecaym5ScuiDDiXo9FxWGrUk45rYSvHgQXP4HJA3WgHn5cwxLairjC7",
  "key26": "3zZ2XkZ7tJf2L4SJezorSrffEJfyL1WT2QNxqt7RZ4kdT2k3dBt6Xk3m4hwbLFMdpVymkrnxBss3msHHdDe8X9Ub",
  "key27": "gdSNtSasegvpkMj6f5yY3ofUW7tRC6aigeVDrai7HiPbzoEJCyWWQRaXrmFLQh2sVo9PNVhDZh4rEpDqyXvkGKt",
  "key28": "K1ZoGUXpAEHhnGqXdM4ovdM5DKrVTZw4a4jvebaeHHfbTDzc1KtG8xEGEFNBK4p1GogbuSRMgiEbvccTu1RRbvn",
  "key29": "4ndK94eR3AgxUT56bnAVd4nagr9v5TSMxTFSnWChXqMGBEznJebbtS6qfcRoTbmAR58geZh7isifV9iTVaSgza8T",
  "key30": "2Ndk1GRwaDUsG7onp5ReNfr5V6v3YeHaF8LgJ7jin7BoAntG79bpSZpi3Hzih4fFXzpRWSXssPmMpniB99ouukmx",
  "key31": "2rPqyT7WgCnfAWqSuXLw8pHckmHcYxXQ8mHLuumiuzzWh1qFihXPCLFth4Q2b8ZvKafVJuChpyLFuLPbhXAztHof",
  "key32": "4A1L8kVLUP3RjQysko7U1RrvubLqZUWVyRbLfeQqXfrwR5kuwsTCcPLJqTxSuFoFNoVAWwUMa9e538tpmKR2sM2",
  "key33": "4QL49Jds9mekkmWPwTghU8Dtv9AhXyYjE2e8NEJHqUUFxcDjHaM1FWhv5rz9AnxKVBZotPw9N76kLrWtxgcvH7jU",
  "key34": "2BzKbwhHd8rXhsNfretFJG13gGTBJMdggoxhxERVuGxMPZURpdGW7EakMjmQJj8cYF3pnTd1igwMDfXx3Y7hwTf4",
  "key35": "2ThTYBJrune5VtKG7h18sYd9ugVRnZ4vTjzSdAjmecCpbo3AAxXsDAuA6UPnN1AJAx4frAv9rQck8Gg18HzKox92",
  "key36": "38H6VbeYN3EhwN219fWcimHuCcTnQUakRBV915mP8JH8bAQSgc97jUetSj8UJ1XJSEJidC1AfKmPgSfbCa67vnxo",
  "key37": "3AVxGxu8Hn6SDNofbqHfiSfhb9cDzNxtrys3EWbT3CPDJZsy6Ry573TJC5vEkU2cBGXydMTnWMAmVRBzNTECLJsj",
  "key38": "6o73i2HNGaWVA3HG73QAQ2iKBDSBRqeBtYBHLuhmUwtFQhi5GXbYnn7EgkpY3qmu9onQKMfnttj3jUUf7gTbkos",
  "key39": "5r9np7NNyBtwpi1vmqqkJ3mhQX3ZvE9gpmoUyTtNzo84mgMXjs99vmPQMLA9JfA2F9dZ356CsxoksKsxUQJBBzTT",
  "key40": "5zVAP7uQ7wPCgmPFW3qpJNKhoZJDNBxA1j6jvPDGB7Bj1q981gbXkeu6d2svJvSwskUb5YGPkNgpb3WA2TW6xwjo",
  "key41": "4v1BLhZhFNxu81e9bCABMm7L73Gu85xWBidm1Jbv3fC3Y1aRKLkURVUPwZtuhdpjGutXDCBVfUrPwjCZpsH4HmsE",
  "key42": "3yEuWsZPcEckcGYuuDanoi7UBhSXsUhDAbrjYe3DkBwDDsrawXxdBW1EQp8gywqLgV73oQFHJ85dqgJsWbft7nNT",
  "key43": "2wQLeEGVBGvGMvgHi6nrus8SRAieSft9ebR9biGXvqvVhN2vx9SYJxYKWg2KqJ7cmBYP5xPQ8fyuCHGidLcy57UZ",
  "key44": "4snU1qrGgpfJFLQ1vjGG8oihjQHnffn8qChJbvjTrbt8D4MBBrcLgaVpapKudqa9GToedQEt5iJqkEFuHWDK3acr"
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
