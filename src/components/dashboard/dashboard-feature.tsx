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
    "5oyPRAt9k5zawuimQQjzjxkYtZSdfoGeX79CxdkwfnDnjeMo1b5WQ3TuQgUrkFjcBRG6VxoC1ubrgLSNMo2vDbEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cm6RSCvZ1CDUFL1xdxTfzhZJxCNLkXH1tk1cZAeruRJ69NaGwSPQbQECZV39i7urg479iESHmbhZvtKCGfJCkPS",
  "key1": "UVrqTxgHi9zKexJM3J4C1okZwwC5eJwdbdTfri481rKRRCcXYLrSTaaWQGEFcpjnvPDsgVNJUC19MFNrUfLDmAz",
  "key2": "3uUbdjyZooGAig39GYaqD9Wo7tzD5oRdARXZDEn4E2GuHcsxgHfjATZWRLXX3Voz5ZocVxTxAV6Lsd2w5C2Wu7qa",
  "key3": "56hU4tTCYVmYJDu1B4kTym5uWnJTCGgoeE81Es8kc6uLrxTFRDk3vUjyDuaYLbc8Qi5eHK8GporfzX3aXS4ewf4U",
  "key4": "2Mx2f5RACso55h2yvcvXo49sR7PWfPC84344Ve2aVVmFjtht5Q9tQZw5HwAk6UFvgNgAxeGeA8th9TZsiavni6nx",
  "key5": "42ow588Z7xJgmLJvGBLgYN9yNG8vptLcLQdhNR6cyGWecabJ6qfoHuVWqNqGYNdjPnfjuH5taWx3pfTop9CgUUt4",
  "key6": "5YLm8NkLkSukATnhHjfcqhhBWPam2yyHpTyWTV3MhRTKmmisqttjJjo9u4JhsmJHfKcCHuqFKeuqXkPXWPvYgZNc",
  "key7": "5B26SGpGzk11AfaZJjookwXKBxCcsEwf321oGWVAPA7z1mtwmh6ZWKVN6qPmwEho1KD3DmP6eU9LGMRsuV1Jm3ca",
  "key8": "36DC4sRcW5AuvD37qka7xmQbi1nJ3Wowyu3byjtcfGeJKkFyzDM52yVV9MjbE3NQARhK1wKanTosvBrREXBZLUN",
  "key9": "PhA3AdmZnTmex2R34tgf47muFAax7EybN93Zzm712FRSC19JYZXuyLztPoDQH2GdczmF6rrxDDvTvJpSJ77eR71",
  "key10": "3raNteBW1hkzgpmKQWfQMPCGoWJ5bGn6CS6e5ABWLE41q9qMWkBS5mKisPAYUEp8aJzXtNaXY81dfHyPEFtrqeZd",
  "key11": "54FSi8cBBtSg5pRNnJ2HKqX5E8gvEaQQVKaszsUtxDvHRWP9V1SpqkdEzjSnMTBMWVGiAs9Kh97eKDeDJvHhmN4w",
  "key12": "2KRxaBzcQMLanQuHaUYgsaVDL4ZZCxZgJe9Vs2VaocpCk7zrcSyuqG6u1E1yNAeUxtnZ1ydf15gzEaqKNVCBeEYS",
  "key13": "5FnSTVj4iujGRVqTrPbePVeaSqhEZmd6w6n8sUH7P9xNuibs68YJJsdaN7RLnacLKpJcXTeUB25Yq2REAyAfUsFQ",
  "key14": "2ALq46dYdijpy7rpQKmfJfN9dnAcibwCBVmcdbAAmGSNXCcZgkPrA13Se2thciVNBcyfMBktH9Tb6Z8meLyxQYZo",
  "key15": "4M8GCaYWvQHZUa5AG4HjgqtQRy6b1EckEXxri4ESQWq5qpjvQQps3rMzcHNr9H37FmxLwJNMKuVthNxHeSqQPXZm",
  "key16": "4ezL8WeEUHhBr8fvKzZgcjgMuxkYyxWHZbLFvnU2mY8Hz4FJJobthT9B9dnuPeKym5u2Z3nWGKBmTCzme9eeWRY5",
  "key17": "2cAioudmKKE3bSdSMhhxkhYNKR8yPf3RJRuJJcJn1iZhMtuthK5cZd5YKawtSQ8wYD7MSziT5oU3XRaYR5mEqGv",
  "key18": "3YvsCypYW2hBJ4UKDngGMDrNyfacnFV2pGpkojvw43tz39sf7XAVcu5HL8Q2tUUCi6RCQDzc2QzkRFMnsvHqbXVA",
  "key19": "2Q6JkiFsxPHHeWQzHNSUPZCSjvoYLMyBGnEvvg2n9oKE7P1etcgCkBXT1V1NHyzXdfE1iyVwpfLj9rJnQwygRBcr",
  "key20": "5dm9i53Ju1nPW2iTdmKxC9xKu2bwYnrXSci64GkTxqEYfz1iSEEGim6GuEQAzHBAstDyQHC7AmUKRy5W5gQfrhwY",
  "key21": "3HPaDTCSCbLHRQcDQpgm5Vx7Wtj6F8w4No9Raz7GGtqLWDdepCKYQ5H3uuPamiPGycwXTGjFw5SQDcY6tHpo4fRv",
  "key22": "489Uh7Yhiuhnyjbq7y7sEEgaH6woFWFSDmTyUbBbZtNJwfVqbpH2osN7scpE7LZHH2FrnNd5eAug9QCD6TYnh8XB",
  "key23": "V6ZvqVBXHfcAoL7toKPvr6vHhZ5VMgNbBp5VVUuJs2YitxuhouNVvHEXtinuYNT1em5612E8YYxMzAEehTjL26X",
  "key24": "RBWFa2ah5qe72ZbmN5VuL6SgJYq3ifkTiMarqdJNcXMzskaWrcJeG5XeeaTym64YwfNA8Map6JE59kYtQ8pH4pr"
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
