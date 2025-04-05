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
    "yj315Y9G4vmSZKS5c6VRwSiRMicJeHKuxxdHZn6umF8fxZgntHHEW5K2ZnAGApmH2Gb2gmPJEdaBZySua9jeSay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ip8mWDWGL4A35XNumNNrPSpy7HY5CVANpRZ3BqSDjZdxBKLibwjZiDa3nKSB38FoQBFWtHg1NVZcoLCDCBZpfLG",
  "key1": "HRAtxCxtx9Novxtdmkn4ga2v4Z39JUvUZm4453JiipEuen2DrQYZ382DM2uCHgY4DBbDPk1n3jLCRrkYN6PawW7",
  "key2": "4fNr8rV341wJRY5K48nNcgSX9abh1BoSnHfTEwGyG9pjVryGezhGm87NnP2ywCp5Z1YnYrDBEGmrT731SJvNj1tr",
  "key3": "3E9cqkTBcZa94sJvFKjs1XZtSdFDLq9nmNXuKffb4bGeAvF62DEthhFrEUW86UnnNzyEE8QhAwAWkFSpRRuvn6tp",
  "key4": "5GRTwmYoAmjGzAPppYzGjUZJww6Gb53eqeiRUVSHMMrwYwt9rRQPqBAiCgtzrEkUmPf5DCgkpNHar73Z8NtCVHNS",
  "key5": "4DeAvSjTtqDGT9QVbHD81AE1YirEcx3ZYdKsv4YbKzRfnD5Gz5zzK25FjRsTVNe7z75wPmFLhdPd3sfuBTdrfsGj",
  "key6": "2p61PpGZAMWkhkcAhQYG7N8hXuq3vKUPu8z9LT7PB7VSx8bsQD8Z6Vub7EuHqDyE9UQH3WB4irZiA17vCNRuEdHm",
  "key7": "3PGzGQXuQxw71gYx2wCN2XL4ijyFGKqGLMvKjHYzhj9gPvnANcABwGf45dTx7zeeacFs3fvWjEQ1pEiFPzPNVKE",
  "key8": "2wBVRcpsQFKvqbxYF6fomHQvJomp1whdj4mbKPtNv35dcRpBjZSGRHwLBQrJ55cb1L3hSR3MLMwQysXtCG1ComCP",
  "key9": "2R1zdLwAbWLHTZDcgycrZbnjA6GoxcvFBYyU1vYv3DTPVGxMDeca7S98yHgLUKTXSgeNc4JftmY9CA1LRLuAaWAc",
  "key10": "UAMVeHEFoMYekB7Zi5pkoD4HRKRd5CkbZWWNjksisYPSuDzJMAtwVGzpbAEbZ3wXDXVGqEZVuhWrLNupXkWMmbF",
  "key11": "34q7tt3E38z47sdxGPJBcUTf9hE8xtiLUqTQfZTwo6jLBK9wsRxk2DtBnMpYc3aL4AghACNXVtYYX7STXWGPEq6n",
  "key12": "281tgBBhTCLAokD42pT8WsF1apjV9rJHtCxEarH2s1jbvKT24h1cWfuKsBepi1fLta6C9u2WFfTizaY8wDHKuYg3",
  "key13": "4en5B3ofb2DHEJfvJw3LZwn1u1FRDctYPYo9YA6N1HC1snM75GWXCd1SCyfNUMNTK4y8Lu3t2gpxdvFd3EEGHJWu",
  "key14": "4hEPSv1QszXcVy4XaJHZZ5jr6v8MvP7qq6nqJnzxPdfjetkCDKZ1uP6UKtYGxBqUjikk5wV26ufCQeqNjz34Jkt7",
  "key15": "2icucs9WAaaVnwtKAdQhHTwygcbJW7Z8PKx6GGtGkwaP6SugYyahyPh6ntrMNzmafdjVq8CVU5xXCqzt5t1LahZa",
  "key16": "3Fcf6oC9r23hRJjUwYFvzyzqAk557KngNFeagrvcQzNXuxWo8i81NZEKyQksz4VYofCtPwGgyX9YveBinpqNCKWQ",
  "key17": "3YBxRjMGUHj5FDj3AxfRxqWQmcXUKynZRhcEyuES1sokYtUsjdHfjSk2A8Fs43DCLVUGudn9sk2EZgLGU3bXi4jH",
  "key18": "3y7crgThhyh9ff6kaWfDqAorUFyPW1gzB18AMcySYXpEdnPeWst5z1dQsY9DL3E6aihJ2g1nw9jrctJhmXvAeeFd",
  "key19": "5fAT63mbxDvnLQcTiZhuZcnK2sVA2zShsC7vou7gR98vjJkubxuRZZ6n3DFybpHPHzrfb1R3DvGgorDJduvCVZ5J",
  "key20": "2JrM6bDwHrpYViLEi9SBdnHzWuTsxDUKaFuTEDpDm8xaE2Eqo5DxtFqPpA6ZPYHG6KcyRVWMwDiE6GvRW1C9tjXt",
  "key21": "265VY627eRRBEKQRJqisWTn4bq7rWYVDZh9d9fGd9hCrz4Nr669SKEV16gyJqKQZ1Y6G9U7S4eCataDQ1nacjijD",
  "key22": "voP3furjPcsM9TX6XaKyy9Gm8uCNp2bRr8pkJzNs4AY1UXGzBKz7y1tWoVwzJbbw5FqdujZ46SLyruq6wtvrSK4",
  "key23": "VEXAJDqjJMSenPuGfqdunp2MzJCYYjW1QhKp61n6ACwKXtDVhtpsTZu9DmTuRPqGoo5qDkfcYfFXBqFzkHqFar2",
  "key24": "CTtLjsDYPDEe4XnyGDaBF86Gtiiao8CCZa4pTQPkAxrNF7PZP6afTqj7CxJRDaPa4yNhftaPfWf6EjGBYXWd78j",
  "key25": "XphZ8F9X2kweWVmZ3hLhKjsYCjZYKm19TSNBMHPVJvbEFWoQF68RkAtmwCUcbb65t6fh7Gzx7VQhRUDPjhHP9CX",
  "key26": "4jYUY3Xz11NcsAmfQRyATxD2Yc55YWC8DnYesLFJV9QhWfMvCjvzc3gZEDq34ze7WzaoVnBR97jKkBhax8fdtagp",
  "key27": "2jcGKrrxSTmfxzBHoFvxaAYTjGtFd1gFC2ramsV2yvB97LWs81Eh2tDoPiuaBRNZyuvrwxJMJKcmAf7MF1HSsQ9d",
  "key28": "61wMvEvYi9nce7MNtu3k41gG6UYwTEQG6RmXRrUpkGAwmSaogTSZiRnJceeHgA8UHcSo9VBXTt6RHS97ppedA2SF",
  "key29": "5RVi1NDdbsrsSWagM5dD9k6tsk2HUf41EmZVUnamcVw1C7RBfLwauqQCc1tS1FinSLwu7PpKCkKjaikycBrV9D4V",
  "key30": "sZbCbUM2oZCSkyCSrKPU668advhf9b3y7psPXE3uF6jCkdgu9t16xXYKdT8tyV2AJ8cexMLpvPdeVhXmu8GP7A3",
  "key31": "4vg5tcYPqu3t5R5qhVp61TFgMed1iVUiXNPEjPC5sRxdzwgdKddvpv1yQmkdYzcRZbTkxHZgkQhadmtbsF97M3kG",
  "key32": "3pCHSegYXhvd4Ba8twjhea2B8q8GwiHRAb5KVHww4gZ2Nx6MX13mRHm1FbCBELiFYzigNYQscZVQgPJdKNFsvzZm",
  "key33": "3KYmPva4DbzUTthN8gUQKoTyhhiYVv1gvwXJjH3bZ1KAqKYjj9NdHXTDxDTECak7tzh4Dhjh7DoGUGtFcCKjMHzU",
  "key34": "2ofmF2odmVMpc8533GRRTvbh6LZf21S7HYxBetuUD5bizT2cdncnXk1FhSw2zxCX6QGXzGAr25AawKDWWidry1Hh",
  "key35": "3rDewb3G95NdZmPcakWHgivbpFGNWjAWh45kdHUKYRLJ5ctQjd9c3qN3bPSkLpGpdGFaVKM3mu2AD76gVUQ1bwwv",
  "key36": "2wVpkbnMqA7yr68YAvkinCYiyegAYKQsGMYutA9Yy6uvHnCgGaRDzxxfC6s5LrJ7Y4awwu3AKPyZCaVDdE6mq7WE",
  "key37": "3WNzcspNuomSpudN1zM3BuYKfr9v8E63dKi3E7ZnjykZ8SdeBET7r2uneKCmRjmqeLXTDtXrPtGLDZRYMZBdsyXe",
  "key38": "3JrYNSUwEcJPqsuE2AjmUuHsQA4pEnaF3s6zYAcbEGccbbKn9QX7VBDNrYg42AvveN1iM9whSaq3gZidCyQAp4vg",
  "key39": "4XgREanEU1XFkVDfPHjdoDXEAvCHW8yYSmorxNCLgCQhKn5CHbKGJPdJ6ks8qSSvGPxRasJsqB4ka11tyuNN8864"
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
