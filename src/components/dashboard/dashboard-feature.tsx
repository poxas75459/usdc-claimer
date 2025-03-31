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
    "25xbnkyqh8nk6bt2S7awHyTffE1EDpn7cKeCKfKWA5my3CN31mAvNBsxBcESSXdTpcEF6Ms5A3cU6Sq3hDQhUjbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzXMiqGdk14CzCtDLncXLbDG2wsxVCN5xzigNNXB37eoejqjnDMeVPgBtxr4E6ioZjCLmKE9KyrwXqYpv1MHDRc",
  "key1": "3LJGoy3tBgmDaVtuPbqT58mepn4f3ZrHLJ76NYi9EaEQuWQdWpTZZGcEpK5pYxK8kQH16SryEVZAzRbzCsN9iUUJ",
  "key2": "5gmjSWrtBxZZMa4Tr1ywfGSfGLKjZYacN73ssMErdCNfPjnNT35Lo5Cu2Gm5tk3J1RDeC5zvAvCGtb9F7Xbxtcis",
  "key3": "3XEpB5n7EmFWZbHqni6xrr8jPMDmWHTSRc9Ny51M6VJ6zH4NytdPwZpSUkq4jUhUjapn7bW2bExiEhWqMRJAXBrp",
  "key4": "2E5o78EadjCH1bVenutuF3w9DsNeci8erCYsyhey2aLWQtHeadSnz9qGHaXxALKYezVzUHs5A8eQNVQ8Sv81mi6W",
  "key5": "rgMGP9m9jdztgZmSy22R8aJZV2AJu87SxSMNNboaCbZRqM7NmfypAnEUCWqTaXzZznTrb18ACbERSnjKK26bqzd",
  "key6": "5anCBxUv3VAF89M5wvdRtUb7v63cZm4oaCsb1MmgbtiXZL3ynytnJRmxahGwyvfxeu6VCkZh5AKKSTsHAxh8NwZn",
  "key7": "i8dpmb6aP2CWQGfxZx9mVyXbjYNd8f2EA6kiZBAnxq7GwRY6y4zzDXN5zYWgMjM1sTecdPkNQdc1hd893xupJLU",
  "key8": "2TEWdGHW1AUSM2fApRMa76aGjfYtwHS3gq7JDj3SpLT9FuT1zeZwFJ7kJ5fhrh8Vri5qxUbU5ZKjpkkaiA6nFoLX",
  "key9": "Lfg1BrukiQnDgfhzKv4jjYwjyF1wwB14SzjTdY1a5eRh189Qf8BSWn6D3rjKjT4iaw6v3gpoJY6bCXfswR478ha",
  "key10": "2U4awaJQKGqdrwWN27UwjxMgtZBtyLGrb7AenesxgVjZypuUT4fCAwgKynPiJ5nY9hsXFUZaJaXkSbQjxeX4g5sV",
  "key11": "1DReuvTa5xcBdzsoTAbjS83BNpp97qHUPcM6tR365QeswLYSsH9HmhtqKAuzhgyAT4CBUQ1Y3cJPDcqmGcfHGop",
  "key12": "4YgkMGg52iSr1R3f2SX6FAqM5N46fNd1iBxxMrCYMvqBGDxhr9ozjzQHheeQf5o2UHVjeLb6gqRpgEHDpbS3gXJ",
  "key13": "3oWGPyeiPCx24FCkxsti7nbWaZXTSUzQLkQc1Ctd6pTDfDMt2aAtmHCQneVhpGw8vyKS2fendbwAvg26ho1XUVia",
  "key14": "5SYhN28uBKQ9wxUEFVg5ZVvnUopARKyd6j5P5UA1KGPj36Xvzy7hfNT5UTKaNaokwNN2F6eWj3oVaE8CZeWZ7fH8",
  "key15": "3nzq5cLE6jD6M2KMwYh3sUV9PEdjJ5iWgx8yineEYsBTp324j2jiZct8S8ocjkhiP1ELaoTaq1GoSxHYALL12imy",
  "key16": "4dEr7FyhHfksMpGgfJqfNpXdjVm4rLEsg2KUT7ZTpxi6PuR5W7ZhF2VFr6UuZUm4ZumAXB78Jhwv65pnCyN5ujZn",
  "key17": "2nNW2zGqJmrQTmcoRDvUEwaHpsKybobh8dwMJhxtJjTvV2UJLREMzVrfFv4N8NjPR2AJxwXXXCYDVA4B6inuktGm",
  "key18": "EVvrhZHc3LFJBHCBYRXxJFwzSu2LMWNGKX2KpC4gauEfemWYnrkxXNAJLWsBRefyu6XrABqdjsqZP3cchDRCYcd",
  "key19": "2UrQ4FqL1yHekRqekLiCXqwj2bU5NKwQiV71NgBYcvvogDSBb2bvojX5JHTXKCyqoCHJs6wteWqMEvv3r52bRytd",
  "key20": "4ViZdXmeXAYfWi5fVKB1Ugfy5eCGpNDZLafpZh13jcqhrirXLZC11iWY1uXogDCibnk2RQkbUL6wfnt8B9BK1MAf",
  "key21": "3auMsHkLJCRoeZurCv2QGoEMR7b3Xs5JqdqNCWjxMQ6oYBrKC3njQxxUeYzW2jBf4kZukegUuH6GJCbJ2iSmMYgW",
  "key22": "2dxQgoUh3iQ3h4cXstzdFGUNidxRvPV7C9nuH6JGHEoEiFqzS9GwjT2vLRuyKHLHkMrqnibTB5dy2dVaVMxM4f9K",
  "key23": "5njHmznhKZyk9KH95BrJeZHBx1eesyeJsEVddbUp9o1x1kbeTeWCokm1rR19xyDmJnUPvSoMCtS7UPAXhpWqdpCu",
  "key24": "bezJGN58HvGBS4nq79CLEtQxG1U3ZQ1vgHarjCLvV8rnVrtwhjtZDph6EFuRBJdVqaoLiEpo2f3Z8nUMaR6wbDc",
  "key25": "3QzMyPeshwH485i16VYD2Ghbaq3ZPbFvWv9Huiho8kSLaTH4HBcgT9sqpiMLXv9uLjMkPY7MpkPt5nEhJ2uRgDdM",
  "key26": "4Rs9U5yWYcK9dE6CnqA2v8iebBBVvyaGSyxhRkh2ZfiZw7t8jWiYWWDxooHM4ohJX7Xqxj5WNaugky9EfgXf31ET",
  "key27": "49847EmjC1ahF28QPzFaBrSYqa2vhTdjEiqrvrvqzZ4Yb2Hu8vJ7kWjzHDovpUpgFWYLmp1L3Au9uEeSgizoGERH",
  "key28": "2x9XHzcie4zEHhhoPm2ZnbRuW3qLBtxgQP5KvSuWpSQQvKiHQN4reSPLXbzPAZzs4qtwBPTRkcN7Q2t96JQ2mcC8",
  "key29": "3xyJJmVW5yynbw5WBJTbvYr6x2kSssDC9pn96aobrQvs5GNwbcXtMsLRDo1U23MzPNCnmHVYvMwXGXDPDokqCVWQ",
  "key30": "42mhvKjis6qUjU8yn3yAn4sxZYW8pvvckD4w1gAjuiFhxatt8MqZmwAZT6awh51FmZEvQeMGphmctaPUVaoNiCdY",
  "key31": "5k5fu8B5P1c6Gjc3TiKMgT5xwaN5Uoyfioawx9TfjMFZ5oiCeadyUxx8P6Nx5jtgznB4yYJqHtYunMJCpUkKmbQM",
  "key32": "4CqinjK3DGuMDX9doE6g84DTDnGbrCjaxz2u1BMkfYgpTnbWKQqUmfjz9fEYYDpyp2yTzHg5XjndQf6iaKZUDv9d",
  "key33": "5QEnu4kSgwxWJKrsPLJtzAQH48SZ3JrFKZKbMLbnxaTH16y1L2rkPV6bayFY5fDAcHeKWysLHzkmnutrh8Yvn7Gt",
  "key34": "hpYxwaw6HKsRavTreL2vghZsN3feCfSwgpWumVbZs9oJL6PvmTf5hzZTQaZaCKTVzaoqKBiRzFK41vtab8CeiYd"
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
