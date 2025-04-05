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
    "5AZqsywYKufGpdoFwDmg6J3UqCaVpRmmGAFsxZABpVZG1XzPMM5xZ2aZqM1QwzzqtBYaVbxztB7dAUDoXTvGcEg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QTFDkrrxXrQcqstu8Mkgf2XYc5hXXR4QaFyqfyMxrYKKvwaRobgpvJJo7gGfQzPsusPgVpqxCqucRUFp2g25ty7",
  "key1": "46mwoGTrmHZiZWWdjKYVZpsBPZjxwRi1AKdUaTVLE59UUEA8qtYJzbfPmVyqvJoxaBPbVQsDLeSRH2tPLHcUZpMZ",
  "key2": "3S9bP5zw3yqmtKhAgPT9P5xvkFkDvKJcKafm3v7G2sNU58grbxc63CJ3gPVLgWrhdhDsD3q3JndtL2M5ZBBoK96e",
  "key3": "4nHa1USsy2ZC4mQauDPWDpGSPb7C1uz3mRnAH23PuHFMXEkqHakLFkEBtWW11ia4At45VPMMWVfAn5tB8pJ2ToBq",
  "key4": "32v3zReYQmmeBJtf9aVvQXCHSqBw2B5QV1JjkvedLTRjZ1yMU2mLNFFkPTdSWLtsuopdCnXj3QAeJLqBJQ2kA9Y",
  "key5": "3amDz2zu2ivCKbnr46XEmuzRvnAgk24gxCAi6ZP95qSwpqRSMyrcjGqhMWVbazBZhFvTSuwMGjpDe3aiH8tvUgYb",
  "key6": "3tTfMJoeeiNFSDigRnjswpswDWTmsBxxjusateor6r574soeePyDtf7dg8fNHakU5eJuKL2Y4bfMSZrWR35iND8t",
  "key7": "25WDnz3VnD7FNa4xQXgNV54kDwNSJWUAwAVVRsvQBy88PEaUGuU9xMtYgtsnpZrdS4ZDLBfq6DjpkK6G2CGehZ7n",
  "key8": "3ttLFGmkn2ZiLWSrTZLAQbXtfhkbR7j6ua7W53RyfS4soY5Z8UTpK6pSorm1Qcgd2cBjDbHvjcidXDKLknfPYmCC",
  "key9": "3UTUksDdxshdWAtAv98NZphVPiS21DL6gyhsujU7G9na2yqU6yYXTsirMFmRSAzoBuycczqPgwPWCkBaWscU2jZH",
  "key10": "4s3oeb8Va9qXCHUXzUqbA2PMYdQpD3xnzLhJY8Csj1Sj7vamSA2QuneYqKZ8SWomN9cPDJmnWjEtVLBDo6DV3CPo",
  "key11": "6yKgCxWiTog7bNTz5kTfpsoXdGqN3vBX2eN6ynxG1jXteghAb3n7pzgKf5jDAj3A2d5Y1ZhFzgSHHkvgzQtLiXa",
  "key12": "3QhjDyV2uRX4mqF6m8qNQobequmWe73n54ws7S482oZNeFoMvWhhEoSF4g2kp4dQdNrMdnK7vYNN7ksHHzf6W7gw",
  "key13": "43WiLg6m33hr4n844JED72Z5KHsqLYwq5Zuz2w7GdvLZbvJGDrMqufWbcVxUZZoc6mYxarhbTeouD88oixpn9zqi",
  "key14": "HHkFvRzRGJei4XfkEq43Ks3wd3BvvjDUpMb4WeQKQJjmgby1XZkBVjxM62qpkbA8cdwF7ZHKmp9G43Awg3UDCKo",
  "key15": "owB5cZbVxJ2E8suMs16yrwG7zQ2DMy8aTLZWhsTxbHkKQBTqpc8apiGusErJygrw8uybX6wVAU5G1gfwHxHnHpj",
  "key16": "3t9raJbD5NemNJNx7WqZHDgH96BWHenMv5fJWpwrtTeisJLEGqECSWYDH6n8R2mvuKG87zjg21nMAoTsjm7BiYXL",
  "key17": "2wst4dCb6K2gM2ANTAzcMtf1usnWC5qFMicVtTgT28k7VKbQ9Ps6iEnsbt68beBRFJgTaxG1K9roR6UoG8fcZ46p",
  "key18": "2MvtUANDNCwE3zujn1apneHBZUeKVyQCuHkqJDDZAScPepE35K5okV5AWSf6Q77h2hiaG919uJqCChd5iHxDqxi9",
  "key19": "3RyNrrWH4YVyNjPcG7FJLrP6TSGQtN1NXHRLWwnFxQATVkwd2ng9k5qG3dWB84MdwAuew9gVFT99nmZqA4Z8kLm5",
  "key20": "5aDNbRMd1aeU3HkrRNQmBfWu8ZMJ7pLQ19ekJ19FctkBQDpZ1XxeMLepws77Xb42C55CqkSJkv5u7e4yvYC6mT2b",
  "key21": "2hRk9Gu4ZuEVS4aW51XGLDHYFf1yaGeMbU9kdj9awR9xBTcdvmhvJpBai3PckcShfJvkWXXWiSwD1k1s1iN6BQHf",
  "key22": "5dG2PqkKhPxDo3EkYexmoH7QQcBweHW5x5noUg9JdxBF5czSVRReZS8n5nbRp3LCzTJVyDWpYMNNu9MLv65o7xn2",
  "key23": "4rJBABMmM3uyj4NMJvdLAhLezMV2Sp3PFJtyDmoLNzsiS3f9EqKyn8SDkZTqHyKNbrHBs2YwVPvNucN6HDeSy67d",
  "key24": "2H5ZZJ3HabSyKBcaw8p8pS7SRsAfm6Bn5tkXAHWTM783wgD8JJsnTuEhWVjc4hmsjXDbmNGLAS8mG3qJE3HLziPL",
  "key25": "4WTe7BfQ7Lhu7n5KjNM8fhuw5vUEk6iDHWhYLckainZ4436vvyNUdG7cEp8Q6MEhdUZqrLvtabUaVQFxEmCDt9N6",
  "key26": "2r5qA9Uoo88fdWNRp8mM3yRBCHYpwNL5AB1ei7CGqxhbCCiXcN3Mqi486Jrpnkz5PNXGbiadZxfEP74EGetbhLwi",
  "key27": "4PJ2nLEL9ZwNaA4wWU93ddn1tBwBQuZ7M7hDxv5vAr4eKWHtg1gCnCohFXdCmRQLsCjtTSe3dAZwFWFW36EpRxq1",
  "key28": "56Dcj48C6pu2i67LQmJvnDs6ud7AhcERUaWpFrcfuB4aaHQzf5dVdv7jYojrv4xqpsTXHaxSwEeJ8xV7U5iyGw2j",
  "key29": "9jxr5hhMvVAsaiMu1Kxe7aDzpqgzbpGJLRkg29bPZDDQiuPDpkqzkbDVwccxug1L1TfVptBUU9CMcFuCfjVqdbV",
  "key30": "rsvfssEwuEcyXn9S3A4LE8dU4GwzzGENBuzHq1FsmXnpTfPBPz8iHTpJ8YPKV1mjWivaLbTxE51eSQwKzNZsUkp",
  "key31": "GEN1jr2p8Kwpwn93s9z5ZrYZ4NptfKThakyAzyotqffJ6utzs23p5r5bUWqTYo1c5AVZrduiHBqTucr8qbzakLf",
  "key32": "41tnSoSEbJ958FCVi1Y3m5BQJxEgwLbgM46yreuTMJy9x6oSycqAstHXQ198njPwT37Ww4DFbpYqTeKFH9gUrv4k",
  "key33": "5FLyYwGCG2dt6nBWMxDGk613wEKdaR3VnXQvDo6ibpumrZcTHVh1RMtVYWEfwuktCPwgHm1Kw4ifZSYCwZvmiPq7",
  "key34": "5ijo9ynM4yU1eTsE3fWf9YRrhvHjf7pqwupWwE9DG5EmtxomwW1AUAuKMpmeN4hRpMBEFzJkZUgzKpsCbi1GvdCD",
  "key35": "3uoTBY771dtjSDfm2HNrSKjue7PDmo6pezkg6Px2yvtuRbLGNRNcpMtFuFShtKsjeJXXbrdT24gQmp1GsB1gnTp"
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
