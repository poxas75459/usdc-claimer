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
    "2D2QgvRZftF2s2pZmtrVGJd7yi6kLgRYZnQukJu7i99x5hCShU33R1beHxLyHi9S6DAPWJzT9vTGfmB17Em23AuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAqthUxfD4Yn41zkP7u5RZokkBGkgyREYwYQYmzEjtEaRJke5nZH5GJyt9EYuGdbej88MbeNDKL3qbLvfaDVwKY",
  "key1": "3tsrNT9gvsx3xWjjayDg7gmb8GTX7rLcsHYivxRPLyXmHxbc6z7Ck9UDxmvDnx8issfJnNd22fezfUt2YcxWd9zR",
  "key2": "3vRUv8jVjUnigwEiAMVSETPemkC64jig3iAFkKg94Sv43sV74LtftFmYXrMBn48fJTdtoMRuFiuYV9XmRcqyKbfp",
  "key3": "nshQssy42ryQQAabdQYAU6j5zxd6nRxocRdV4fZ4aYfusJH8e27jmVMP7G8oMGUioHKGFeZytWbFVFmtWdSPoBn",
  "key4": "4VnGqQPqqF7ZaCVq4QuaqPxwDY1qV5XtTwgEN3S5EzFNjh7U6Z4NGvWzDf3cgnCPiPZMThh9cvnvZBteTYHMatWV",
  "key5": "3CYgZi4NytBFH9u63PwvmBpedU1HNUij6axS8xFdTbz9CDszKPub8MDwy5PyAePmz2LP1XGgGGM655oRjsFmdt97",
  "key6": "5SP83eHgQsJGhZe4hrK51m1TXVGtCyUsfekNPM3EUDZA8udQsz7bsnxiqfov8ZNvqyuMW3rH4oJhSdEbnxPyG5sx",
  "key7": "5FtguPQcZaJ9r79mtLt9vecCubv6sB4x8rXVZYq8YRncPT6RA14dBuRbE9AQq1b1MtEsBA8eB9ZQQd9DRViHwvvt",
  "key8": "33XEPWuzSS4c9aghg9fzZndpducWh2jKBSQkEEbNcEzQttVmLwhaxoiT8Vzn2b3sHwHeR3pPhX2g92p5S5JAgSbJ",
  "key9": "61E2YuTtXnQarPwKQydVY7n9DiSn3An6NNYbzugcFtTdnMqjV5cZJjpSVt6zkyZ78LTgvyB7srkcP4EjST9E4kDB",
  "key10": "2XJwxFzXiLyDumuqR4p7UxSgfzjiq1SpuuWtMsNp4cuLd67VGzkLaPVdVemFnyqk3Pw69CoBf6w47CRZhXTyGHH8",
  "key11": "oA2RXRbvMDH6TKdgNsePEDxHqTbTJQPj4zF1mpAmhp9HkKStSxNE6xVFrmHidXLfXtVUtUfXedNhFb8Zov1uSan",
  "key12": "4RbBLzEi2gkS62wSJLUrNx7jHjFgdTgrEqGZd86bMTCLXTuPUaVqpsE4TjYteJNZq1gJQbnFs4CHByKhnpGjqZyf",
  "key13": "2WCr8j9xhe26WMo36s7JiGWTvuVG9YLumxo43FHVRwwYrjS7fhzVyJbdBb8jBuXdHvZqUY4BZFG9ToHriXxkjEjD",
  "key14": "5Vad5m2DBNceBu6gcSfXj2HgaUVbEjDFB6K8bKrUqsiXdx2D9THPkypB6rbzG1fU8J99GTHEPdRRu8ZjYJAecGJp",
  "key15": "4pmaxFr5JzBnafssNStnWfiisGkcmcsb2ptzDqTfHWXp1Zrxqot6nczh1KsyU3NzyRwHnpjuHL3FtPQmM2wW4HjL",
  "key16": "3x7d5cz5KPGEkyBv7pUF9WgKeTqZh16ACf7pn4JstKqZnkcV7gHLPZheGUG4onQownhPWMoJr3zhNBJSo9DQ6pmo",
  "key17": "2nCyyCNfHXkbUUCDWV15tn6534LBaygamvoMUyL2yB6yF6LBoqzeTAtZxhrbM368D63HVctbfbsYKxBcCCXMqqWp",
  "key18": "22emafnJzd7GgVf6KEzy32S15RsAUFQo2LzFsovD42uYELSBRk72vHyW4NQXWHbNwcrmsNEoMzhV3covNkjdi2Rd",
  "key19": "5Rc1NmTz7MVy9xiAuNeUCd59QcSndKvFev4Ca3cM37eFCA5c6e8zyju5iN5Q7mvTsQ6g9qPBrcSD13LtesJMcrwU",
  "key20": "5HgHe2R91g7SZpQ2LXuW6k4iE4TEknaUMoLnFLdi8U36XREZkKJXbB7QSbFBvpkbbu2n1krkgGECsgYyGwJqAgjJ",
  "key21": "3eM4a7tPQAJRubRwgNE6iDnTwso9gQfCmmUfic1bfgaE7FpjHfz8Akayauhu7k7sucG1p9xGx1emfCVMJgF3xnws",
  "key22": "5sxo2MpNHUfwZLHXftCkTGJ18tyKW6Kmkk3CzJSvkuUtTZ3Xp5GtdHQ5pA7pxqhRd8SPPRzwLSVcUCyvaXHvp5gj",
  "key23": "4GLvcwNeMCx3GxJasPi6URyRasZjZ9aZv1wxhToqsAZCWhVm9GCU4YkXYMmYmUkAGKCtW54dfCauvR9nNLNqe1ks",
  "key24": "3f8zZo9NczfxykLWSrZurAcTyQXYtu7UFYecccLH2dEQ3ZisRXsZ1USSM2g3pvExXRN5AtUmfDYGoCGFfLHnvTLb",
  "key25": "54tEigHxQWKgkArhcCAnjWycTpyyUoWAbGzj3kUDd6XsBfErMmsNA9hVGtErc7Hi5vGsWUtLEZavoLpHmAsu79Nq",
  "key26": "4X22rZP971HjeMBpqHHkfvZg4FAN17FHybhMWc2Tnyxmqm1ec1nLowZVzAbTECYfGkhLUYxuKKFby2X17cBFr73E",
  "key27": "2DgK6P4CqDjZ58a5zBKTrbnQgmYFTzn7n5p7wEAviYk7wFwaRo4n7a3RPvwEViuxamrHY2hdVSohy4cCXtEmuh1D",
  "key28": "4bQfa46e9Wfyd5MskhtnCTX8UDZJ7AkeeJ96bsttN4Nn8311gYg3bM8ZaBDdEFNzZo5CEvEbvTuUguWBjzGYnkVQ",
  "key29": "5GuQqrt3dkLqHgK2gRaYtXBaRG4bK2dfym5soCEs8vVRDUxQ3RKAmbBGApJbhUozCXfGUJCXawcBm4SAWp4WSP7g",
  "key30": "ivy1y95Ya1pbQ3L9Yo35Mg4k7uUvd4b8CDWPKwvJYSAFAAQC4hPX824BjHhZHSMRrWDLnXVcxdrkp9CxLaMmcwD",
  "key31": "j8GAFw8NvaN1sWGhGA9aUPNMAMxPtLQaYmr3t6xrbPvJQE95QoLjkqENQZaiLBuanViyhXXsf3ifUDdxyJhyJr3",
  "key32": "3oJxb7SFkef4CNoy4HbrhNXv1gWSuHZzVdZR5ebH4DoQLT9RcrhYWP5z9gZXJEZdmkrjAwMXxtaePKVXDbZ1EWhg",
  "key33": "R1ceX3QzDriuv3U4HgZ1j5sez7S1s4CtuC9KVCFc7jLs7qdahMq2xZsd7FBL58cC3KmbDobtMRPutBF6ykqkL1j",
  "key34": "27PEvgphhE47UJYjvzt6HUvaLwXBpru586yBvTXhR8wVeg8HpGmhsqjid9kcFzvoGFtQVXdMdCNSfp4YirJs6NA1",
  "key35": "Raqbpq8A5PpmtAFEQxDtNjVmwJ9cRCtpoJ1rWXTdytK5dvjvmXJtfiYiDRNQ6dzpa6BW61JcWsmLo5UQv67abYM",
  "key36": "4NEzumEuap5AiwJ4YL7NoDA5pV2BWWjpm6VWmVB7VcSUC1eQNGtjazpomAD1BJGFpk7LNWYnnBmgbReMnodEuhcG",
  "key37": "3YCeHjqCyVdz6um7nNxdYyGNPQxt1bAcs7T5zFPqWBd22b63Wkt3UKZd4nKfSUtbrVUzUHmu5oAuZdb8rJehBdjF",
  "key38": "3hEFAZj1bML9B6UoFh9SmAdQRuHMgXVuuoM8dE5hjcL8Yw1m8GCMZGGAyaSYsdc8v5ZoGZjxpVGYiRPkUXqLCdQ7",
  "key39": "3ZQTpA8Murenwixbpppj3f5nqXGT1BeqnhAcrsc4pyeEPMVCXR5v1bQEgZFMCYiVw96W3vB5JsGU7fee3FpkCy8C",
  "key40": "5Q3NmBuWsvXZh74gECoCgUi2HtTBttwDyTi116rjoaQaZPKVhTjgA683XJRGFgJq4hbNoCz1nfMNZsurmno9wt2w",
  "key41": "2TT6MDEsQuhDTGDZARPWCaDxwHXRBQ57okHoGArns6Ytxy8KAhqCpettP5Y9etep1UNPKGnMeT6LV8ccbeDoD4HH",
  "key42": "5ExPPFZs3z8wHS2boGWeb76gqiF92ETGZiJChJjSLdoYJnT8aHtNwNkyxce7ZcT7vM1xWwLuEGZEPAMj2pJXfus"
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
