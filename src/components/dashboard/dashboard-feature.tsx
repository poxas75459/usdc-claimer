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
    "2cddqLPBKcdEQ79ptR3nEqQMyABP32w2mdnxH6ZktjdrLmAbuYTUjSLi3QLUMypnXYVKEsLzYCx9XJ52TmFujDGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZhxyuofti8DLEhSGtcLAjHfbo191Sw6JapJstZtLj9KEkBpLZPfME5riNcmDr6cbKM6Biz8FG8mk6U6HwP1koi",
  "key1": "2fanRGQpJ8KaAMBgtRkxs6Qz92w6Dbq7gTYaJC8RAy7DNydSfnZThFVK39Ks8rBQZrBc1PMKvrrJGbg4fpvf6pwE",
  "key2": "4vfWQuX4qZawdTNfdLhNU9ci8TrpnJhvdLcnTyx8JdNE792KtaEGi7HLrXXAa4FEBmyvYsFF2J9rWRVcu4zKkRq1",
  "key3": "2XCCWb3w46aLgDL5epJ7Sj2yKdaPmYcDp8GhWEDT8C9RFfXhm4PJfauDsw6XeTQ1v3CfyQz2HXqgpdaezNJucFmB",
  "key4": "5kTtL1W4YPjitfgZR6KJB1xm26hZH1kx4b8wd3CZtWLgq5FLPjatAkKx1yqvkanwF8BHgEwTDnQorz3wTkwHqGNr",
  "key5": "5EQLwaQSiz9Tt5LnKfHESb6iJ2b2N9QJH2Fzo5xSRXA9YsNRsGzgYJrmcZR84faZwd4XD5cDc5TTPGtZWG59uwCt",
  "key6": "5ZBw8MBzHgQBdhz3Bcn6jr6bSyZVTegMtbQq8URVubRSE64kAwnomt95cwH7RYZgpz5qsQWuevJr32Mvx2H5B4zx",
  "key7": "2KiRGBHKgHTCFAv6EhxaYFw9E5vGVaf6fykWwoqeKnEqJMncHR1PrUvjuBFuuDhWMhFP9K8g124ivuQfkvR2PXxw",
  "key8": "9KP6Lfien48gVFJxHTU18FJqm1qyeM3LMfdTiD6zohQoymXUMKtRwMNWcHjMfp1hKXKcNPTjemXTTVb78cG781K",
  "key9": "2NBYpeS3tcqdfpGQgLQ5NHp3EymXY5tFyrmhjpw184ywRDK84PqnxFeb6b5HQNFrrvnp7s2LassF6YhtwZWA6c3b",
  "key10": "3eGzQpzqwGjVhj6QXAr6K997YG5CtCg7n5ee5Xsojy85DR6QZcy6GaJq8zQNvP9zXxZUEgcLa8vbdGvX3PkqZWS1",
  "key11": "54p3dSSHUtne31CLfg4MNTAZLE4Cq8watmhqCpBu7xaagBxtHv4zKmoKxygFwLfA8ZXfYxDRSLFy9GnMEYfmfEfZ",
  "key12": "2LWfi7xgDAb6AAg4jUUZsBiz1D6M5tEX858vaZpQpchtWuH4SXanAcQa8dctN1PHs6Ju6aod3igxbFA6BPQAz1RP",
  "key13": "3x3Y1bwBmb1CVsioZvFfnZ8AaddvjgRqZk5sEUDmzJH1ps7aJxZzfNnAZVMe4H52nUWMUuSp2ViJZStG3Js1UBXE",
  "key14": "233QUYcs8Uwin1G699nZMGQQZ9jHN5a6osF2gZPE5JAamJMQPKNSswEUUThAzBuEJcN6gQWKUwRpMWmFikgLNLLL",
  "key15": "Xik7b1rDbo3Mhs5JXTcafXDb7yTDYEfePMFkbgL3mV6qMxM9zKa93D6Kp5dbPnn8Eg376eNJr5BvvB9HYekEnfp",
  "key16": "4dCfoL6nkh9CsYDLs5y6ntfzLCMp238Lm2Qtvg4VRNym1L7Rbh4TsnU6XEc1AToTX8rdJHZWy3A1nJ55VbUH9pTi",
  "key17": "FbfDHjUuYKqbvG4nWDkbXTpiMGnuFqNXgtBvNvZ5sJ68kJRR2EaqgEX8bgQEmDPZGxNuZCRZkS2fHwRkPerV7X3",
  "key18": "5fG3HEjRYYgzux6w9Jzj1BzmLTzmecntmyJxTvUMF5sXszxRGwhTRSnNtAZySNzfFqV5swS51Dpc83u3jDvd7j1S",
  "key19": "2yJuQd4wiYatMGRkcFs3ErUP6CidAhZxDd2Kzt6veThKqqKfTbZkwz1k9NWZjcrkn892gPbGeE1demzgcN2LpHih",
  "key20": "4S7YBbqxHtngR89Pb4Er9KG2eottBLEWg1qaGBi843gCc5K1qfyr1njixymiN5mGcghbQBpd9CqBQ8L8GFfsh5Rp",
  "key21": "2ZRnASMiewe5y6Frpi7r6qG1Pr6DbwhsBmYCUvokL9osydJ2AX3YF5nJWiENT2tCXJWGafMgmswXVfgRTpQmaGYH",
  "key22": "2QJqGUPKuBcvjTShVG47nuK6N8sdhou8dh3zgrq8LA8uMKxF3vzcu8BoGzVch2iP3pwZzxcZQsNHSTLkBf7K7iCT",
  "key23": "L68gNsA2P3iuPWvjFFkML3MFyuwUyDCS1UQXCMDAEioRS5ddiRLprMUQSjHrZWphTKupidLaH6YxD8cE4ofm9WK",
  "key24": "3U8vP1KNJ29Z1njJG9qyzhqCRmkFmdthmS3XrFZXxxZEyNGSSpfUnsVJ9GdkCK2VDokkGM58KuuSu5LJ8ZvZNdEp",
  "key25": "55BF1tUczgRKM2qVEkzPTDBisCZacFyVEeqaxqwKiA9jitPy77r5Ew9dETAdFMX4mnBDQ11a5ATo3LYKCim9uSAA",
  "key26": "5yCyPQkHTUHcNU9zDgZ1UwwVvg6PbkcE1mD5qfoKw7qEm4SQoBzbNMTDdTLjDxiCTRtkrZf13PmRqvW7Wpof1Hy2"
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
