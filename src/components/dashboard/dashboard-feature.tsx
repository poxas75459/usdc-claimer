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
    "4KEWWymYqGodsFmtv44KwaEf2ytQ3NC9cGQC8Wc8YsaTejLabRJeYyFy6hLYStU5V5wpbGGGYtdusBtDiWmRg4Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5Tkj8HzgTkUvYY52JGxGx13MchBcy9oWj6a8VBueV8hxTJ7Bco1NNECzpeQnEuPJMzX5RvPq4C5LRrwPZ4SpUG",
  "key1": "5M4rg3xsScad9pHRVXNmkRoKsofGMxFpCbSkE1ktoSY6CzWiGuFNFV2BzkDfmu1VYaYJhrnieC19AALuft2Wy3L3",
  "key2": "318htafMFVwRo6n2iUYHfhdLGSWVQER8mdiujSKhgkffiLZ2giVmVhygs1pzPGsN9gWTZEm1HqczRrobGb5Coww",
  "key3": "4LceiSjoxWye24qMU7waCti96TAEiA9k1ktUsvBYefd6QSgyv8AvfAdBPqD2omaFbmy8d6EeHpv94yoqmt4VodgV",
  "key4": "deR5Hi2A32VmBErNoDM8hdBe7MomdUk2QiJi6nBG3Zxz2q9dsoi3HSaUbBdGFKPf2SWQ2NNNxzBZMuaUjDU75TW",
  "key5": "5JLNVrLSAd5JHja1uLrt6XX6BEgRKDEd7o8MAUMENExGECU56oRehi1YYbvZ2h6QNQk6afsn5VijG3rSaiY8SCpT",
  "key6": "2XLv168yRtFJLkwBLPqhphe7ZVG193S4B5hiU2Fv7cpqZvqBMjXh4Y9DHEWDzyGoakpLAp6ViuvGGfa3kuDcTJ9D",
  "key7": "4wuRkqUTV49DqMbYzwn7tuhhrhBjQWcsL1zdEwjgFShoxHTF6cxiadq5fUQKUZuUh1uwqGEHeYEmV7QD1rrz3A8v",
  "key8": "4htukw1NxeznDeBtf6AYAfYL6ong4ApGRFAzFQ9NxYzfoug78G9Lo1CN3Ez4WBc3CU9KMbQ6ndUZqcLxhAVXBiVj",
  "key9": "3pzseP1J6cnp835rzrX8JgVmu9zayP1v4kCJQK7ZPEPbdpSoDZHZyv6XhwfvkmrBjcSa7nB1VE3F7VnfJNCnALkF",
  "key10": "4h7NPeVRsaC4L7eoctFj38NCH8SDe8pYXwYHKa75rbAj6bSbvxsyyrnkARsKcPEJYwPgWcvPqSvxYBKtCoJL53jc",
  "key11": "2iKF9LQBYBBdZ4GmFqvBXWfLbfxoGzx17gtyey4vod2AbqKtHoAV8796zpdkxxvgQBwe9gbd2z2bXx9nRYwyeVCA",
  "key12": "vHyX8MiF6rowaEafFMhusSJBUHmfCaZFaKTQdDqCEt7rRHYx3e5GULrC9knvSCEhEtELDoKuy2XgvF3VHdSQg8C",
  "key13": "4Hm683zFVw9TegdFZHiqMLPvZU2K8sezSGwPhvP8xsqGypt774CYc6jYAxBW9A3wYuFfYxnzacxgD5uT9fANeS8D",
  "key14": "5QZMxEH5Cj1R4Kakynq6156S7o2zVq4nSPbfcXhp7H31AQaDPr6oPXHmNUP2UJYUfcVtgVUTg1SyTmb6KKjxWsBc",
  "key15": "3mVgmRTrz7kFVxYVQPEiRLXDW4NxsrWm4PtzNmQa8pTr2bGRh4LEjkxPCom7dEtp2Pco5rh48uw5smm3jFSJUeeY",
  "key16": "64LBQe2aGqEnsrA5imVqvWe5q89126oNSwhioo8PgxVse3smgP8MaMYHP5ADpxBMMF8P6HzBigEM3K5FSfFx8tAK",
  "key17": "2fdKmpghwpYCxpatLwtfxGt3Q536tRvYVW4YPEcX9S6DxdMAfDnBF7kVxvPaRo2zCY7czj8dKimGByMeRBUzXJGo",
  "key18": "NimXoDVSBsb9UYt7xj4YmuDEUtaiUrrDwiTGMe5nVrzVbTRhfYghS13fVXSMPsjB97cpDXyfsqJKHyaZ5fhCxdB",
  "key19": "4Ny1LaM54VarNvxWQH6FiB4Ebz1pF5DnUreNw7Y7ZYDS3jnacPitnvdVDniHCdtZ4hjkMNXUwNzmPCMeFWNPGPwd",
  "key20": "92xiYNKML5nHzuizxfUfGV2HUzhVmqQZCgAw4RroSiAQdjKCXm9SBFz3hXiELUxB2ogyTC8azRHmRaMX8K4uPbk",
  "key21": "dGg6zAEjxHvHYPeQoxRHZwL9vdBK6SbwV1aAcJ1wXuxZ1zexvMf6e5mgmv78t5c59WrRZZDVBZ7Yowh5qwqePA6",
  "key22": "5tishrfaQjmxVa9iBqquRHA4ZMWrgNjasgWL4UDuBLbpizbdf7jzwKt2vW5UNb5QRoUq658iQBcYVpKCbybUwE7u",
  "key23": "2KUNEQFuK9dCfEpehLvvMoT5TUQaGEa1AE3NgE3YALVTnikgV229yHsKTfnh5Zh9X9PXYD12jq1kBMjm4pjXzuzM",
  "key24": "4zxRnY4nWd8Xpc7gqA7hUrZtsBj1ThgzdKxeHt7oeiF8fV5BTy4sECpAs8NQbgY94i9kvZi32vSExKpf5W1UAiKV",
  "key25": "Kiewj29KtGhRpKdE94Kt8fQK23RMqExtzAXJ7kCEiUXjXPMBzSyzxRvzZrtGXwKqSHvRskN4gtVHpF44yGNehhB",
  "key26": "3NZtHs14zrk588Q5uy18DQrBYwyMP8kTt3zgWoHwM3Lw2PVmwSyVBJg5unmHKzvgmcAiXbyzC5oRWTENtM7mhvJn",
  "key27": "5wmMxdt4rCkgX5t6UEAWUAfKgVWZcPUQYwh2yLtgALBLRHVqnuSuQygp2az7c3XH7MPtkgmhHVJga4xf8YghNJPr",
  "key28": "5o9AvcvhGws8aYyLKMBX3utuABJhKd7P972ZjLBU6dGXUQCQpJJjK3ZQhQQWaJAuzWuwwCXA1J2wWXqbpUkTQy1y",
  "key29": "4Lb3u9a4GjtNPcLoCxkwFYWHBwFPDi5CCs1tS4a2Ns9WEoDCeoMDru8jpd1jtrPpdmkpaqmBhPrMsQSeT7SpXEhd",
  "key30": "5rGCTt2KHnjwPipcYcsa8EivUsgU9SyCDjSayXofqjSBqrTytBxfTjZPn1VWuyC9fTtUSLkL2yfeQ87ThKQtXDpL",
  "key31": "1y84nm7o7vhhGqXqvmUtybGwGfkdKaNtyj1963z1t6JsaxUhV2BanKTiobSKh4bBs1JF3cyD3t1gJtkc6ytrQ4b",
  "key32": "3x5m9Nr62Q7Fs3oknf8ooZWJKhYQdtsF1M2Q1JdUKyDqj25hr3DKVJqj9iezjkZmvumVmru7jSoRvNL32v9QwqZf",
  "key33": "2VQYdXhk63Mr4jR6yBTmfVYwtedUK6EqGcX8Wj9WiJUXewCzxye3LWjMYxPVF9ZkP2PM7TqcJ2bcTPNfT5jkDfc3",
  "key34": "3sfB8AvMB61UfenwaPYbsxp9bRd4sS6Y89n9FKpWEkAkaZr93g7tpcPjRA7Jq84xvMzQ8ATrC8tb6UQAhagYd9du",
  "key35": "4WHX2S1zufKLKmb6vDcssFRGYksHfcvtfND1hcfAGpZk1VJN5EsrtE7GEaKbxDxP5p5A7SqNyxTxDQPEU2pQTY5R"
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
