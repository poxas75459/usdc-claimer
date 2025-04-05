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
    "NZGpSamwZpkZUFxHbJJWW8pquY3xZtJx8vmBhCdRN5koMEVjgbTU7hrwfYxpD4hC4VNf1qC2EJC9JEPbxrFUmAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpSyR16T6RKEa6ojtkYti5TynbNVHytktdpWc6pbzJXzrshbmfFxnLtQjgf3BTzVRPZp32DT8AS91iHQZ5WTrzd",
  "key1": "21TuLd87XbC8wMWV4BuCZNF59QoiKDZ2hWoBfmzcnHDsBZb6r6Qvad9AvLAsnThAtcn279s9PCip8QLZ5aeq17iw",
  "key2": "3E3awmfUv8F1taHH7bEEaAy4752DxCrM4nEfno18a5kvnK9PaKpMsKQzsa1ME8vk3QRwhmymZGFn27QK4gCA8JrC",
  "key3": "3hxFDiWB9X2YjDhJTA9tqYCSH6ycbA9cwR2NxwgMcHZxCLQhyM6sJspquAZ3VpoFK1UhTc5FfvcxBBxbZrircdNK",
  "key4": "3GPXVkxLzfW7MddjuokpbG7ygW7Hc5Bgtfz6G23R4AKags9NbyFfxK5TXiqQNgcTRmkiFUNqbAR4S14QqAE4CCzg",
  "key5": "3t6VJwLDWKYf3HfeWsYXS49pnMewLjNvuN8UCc2g92T5CmJLhnuTkwUc6fQWpGXqsoPaxbW2MDyKf111GJMHSsW2",
  "key6": "535DxJbXH8RFZEDhZd6s2eLmZqFL17NQEgb6eqKKyBaUPtNycsyedhDet4PDwHMM7TBAPKdd1MhcmJU6qWKmjntx",
  "key7": "SLVM9c68R6hz5GB2G9tVFYdP3ScEM4oUcApYg6oaidnzfRZiBeHpdFuBY4suDmRtA24WEJPacTsDrLmf2sRZjWK",
  "key8": "34TT5kp5ZmJ6FFYhnKnvgtGua5dJbPUck7nbZjqSWtHKyjYvyebtPZmBp9Ep5P3RGDa41zyGZP421MesFh97WyGs",
  "key9": "26bauJbCdGp6esc7mEQtgi4YDDSUcYHnRZ9ncfig8ZFuphwjwFgNVBzbAF2SNTDJEZsvg38LrQTS1AcoNWU4YZC5",
  "key10": "2aYNFbAziM9oHYPDQrQPrXpTHiSWLJm99pXaaPwTBU4ii8S2mT9RCn9zzAbZY34nXnBTCB6jtbFjTNfbBpjPTBdg",
  "key11": "5ymcY4QGy3sgKKq6JUUxNt7qxyzmpXSHAc4K9rxNs24e5DLEdCHj68cx3HGdktF5KXwQmR3C7tXkZxhjTnefsD1",
  "key12": "5sFLwBFNKGZRSTNiAVwaf1L2ZVLrmti4Xu6fANoCTuh8LG1a5xGiYpbPRLPBRsQ8S7mcdniPQEFHpTR59rF3Hfuw",
  "key13": "2GMpH7v6hpFKoCjiz9dEExQWD9pr9Kk96fahJXDkQbUrwKVbrWfvuZYJ5oSx8oRRuWKmCkCbYDuyeu5BTDGQKuDn",
  "key14": "2C1zSh5TJBSn4PK3yZpY5yq5Txe5jzMP8DX28kMSySLXxeTgfQHhVNgD2HXjrWkLo4K2DzLEmes93C4WWNaVyGL3",
  "key15": "3DCtVk5V8cSRkFYJfQU8XM4i4oMw3eB6CzzwpSmezzJ2X5AhCxuARNX6rFZQ5oFpcmfXYQ5HfuqYDjULuJquuYer",
  "key16": "XfURVYLJtYogEcpPxDau4epEsNQiKphB6NNPmJhCaos6cAdvbTzyYDaGGhcZUEMMqdnBcGAEt367tgc2q1HjRUX",
  "key17": "dUHArtqxRdJS9fqqg5HTYmTY3UmZ1xiHwAG1KpYqXK8HCYSub3DUo3fhssrAwecuqBhACq5WMwq6qsF2ZiBTTHL",
  "key18": "5s2QVzF8AaxS9ahjVf7kmELBu4MnPQxxC6QZGbzzexvD9Lnk9NY7AaCwf2RkP2FwvoUWUKqAqY4qrdL6vT3qCCeL",
  "key19": "4umaAYXimqMdmFb6UvrpC59ruTxjFaLbJDCkWWbuqig9aRayCuXWLEmZvrZWkzAy9BGvsAgmUer2BrbMpbsX5vgJ",
  "key20": "665rZgziWvJc7dcJCy1M7GdMUWPYTa6CJKbUnzeunXwBBce61fcgbSJUZgZDpSXCppqiXhQdaSMQcHUgFotbNioD",
  "key21": "28yyM9qiioHeSm96nsHegJcR5WUepxj26GVjC23wdTTPmQEeBDhcappm4GEL4P3ayxSbwg46WDEJ3GDWcDHbTXQ5",
  "key22": "4xedmRxtbwgQ3GmgCge4Unp3fBuSmiCFpsizBi39hrM3UTg8BPa7WAFbDyNMgUJ2APNZ19n4jkfnmA6qCVcMiWF5",
  "key23": "5BEGh9wQwDqpwDLMyBPGiZe9FCYN7Bz9DqnJikzu4roQiXPs5KEUA7AsCb9cKN3x7AvwWssbTgHG41d5m7HbkjkH",
  "key24": "4dR87X3VKyNgPaYAYsYWaFSDuUU5Yb4Y9q17fse7N6dMUi82WTMFbm4AeqP3ob5w3dDaD6eJedHkkmEMXnhoSKok",
  "key25": "3VxMCsPcXFkmvrQJvUdxDwHbp1msrbiFx23Puoj3j47qYHkEFPh5BR5wtDrEGwCp4uPj9RW6oLNmhL85P5kDdNS",
  "key26": "HEvPFJxwQFDGa7JfwQD2R8dSfN6HVDQFKb8v5CK6ECUTTDoCxa2BKVQnmjFZDXCHo15aV4vR9DQhdqPZynxgXVh",
  "key27": "4bSWNq2d8TDFGfJBnHNNHbXnpsjy766423e5yTTWBafebtJsyC6QcL4aErxnz2Ecgi8WDMASQL6mogS3c21G2aRd",
  "key28": "31F5yJYgSfQQQ6oQsusFxQmy1Vx9N3LsoC2ZFMf8xqpnd7V9SMiFKWYTcvuVkm1wX7jjVEEosZaLtJkuGKDqo5aT",
  "key29": "57xmri2TAWSABKorXqQGBVckQb3Zp2ZThsTtMcovcrNcrvZvhYKvPvSrJzUgSnR4BhS5b2cu9nwtBGCAqvXCFQoz",
  "key30": "5hoLhfhm4v27F4AbNZd8vAqYR1zwm9W1AxkGsUxSEDBBpQuEM6x1dqf2AdgN843eToNzYTHbmfUCHGspbsfsjBou",
  "key31": "5qZQk8gB2ZBqAzHLfbruXPig5g1nLFwERuU7ubaNBGyZm2noQeLgX1GhAZjSUi32AKcvW8DuPF9SbKRNuygGq8iK",
  "key32": "3Eanynr91Rd5zEZcsfxnQe218SrhZvut6ymGD4L27RdzwqG4jJXnSi1SuhQetFdfC1zLbrEqyukEdn7WFjbBdu3H",
  "key33": "4EVxJ5hZ8HWSdL7cKKkf7GzEXrQpN2bvmn76fGAbxSqwwzmsbF36yjdv96P9Cd7ZsAfTw2eQZ3fD6sq49ZZAoimQ",
  "key34": "hfKcRMrPcRHsYDnxwvFn7QwiTS1SvJL4AFEsGGriikhhQR1GLubCwXNmqnuP51tqTfBrAWMdeH62PPN8WRHGGZo",
  "key35": "bau4wzVG9VgMTVYanoJVMnMpHJ4kb1pUwsqxE5Q8vM8aRUjtq9xdSPirjRTJ9GLT5vT9qRMwjwErxewciGP77d2"
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
