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
    "4b22rhr8NitsRnMqXG4Npc8SvzJmG1oWi8FdWqVQCrpXrwDzMzRQaNrRj6RtvnQUydu34egA4BcUtangWcFjk7tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfgERvXqACfyaf55PPzTqQcmzQz58bCkV8dxgfviqhstLaKyFrk9ScpSdEEBEUnDSwzPtoiBEPK5G2ADw9ybt4K",
  "key1": "3tzpyLuT5tXTFiewXjPfFrXj7bq3knT6gGoKT6M9b5LdTRxboJQrtdPYxP7zGwBF5bKkqoPne7QK5mb5mpdUd8K9",
  "key2": "27W6XvoAzAhgqEGB3a9za9E8yoDmrgRmWViYdEJ4hrxNMy2b2iRFpo3LNyQrS516GEBWjsLFD3nJDMrDgbRvLphT",
  "key3": "63wzcLfVdxYRp2y36sFzYKvAJyr31WQnVWUJzC73CnMn8BzLY1BBeWJj5fFRk3BTT9KnUb1VEDcvVm3Yqjxp9g3q",
  "key4": "2ahXcC4E5ZhtvDQvJoNH3GGmrpNuRerhWtRbh5ov8Xi5rkPJtK8raPxvPYJJJmUuRtLs4TNrF28xZU7QfV72Djuj",
  "key5": "3XzjmTZ4RFS478uoGCNUCW5nqMUTLGVSB2vg8XkJafsLVLWL4sajYRaXbTFjgxciH8V4QXqv6nT2CYWYKZYPGzMp",
  "key6": "4UjKynCTBhgFFaEFcM1edUYdKpdAGMGHx8PtaRgRoAxq39gvkeQRQndNi4H4PGfVk9DCiKEedNTSp8stKL7PbE58",
  "key7": "Le8VcP5W6yutiL6H9FLQproLV2BiaoLFBwPK6c3YbwZ2FdtqaEAh6xH7vHkRJ9ZvDyhHVsDmiUWsd33x8wq1mYT",
  "key8": "4XstxmFDyjYz3LRuawV9p1GnRm3YGPw4VVAYPx2odgvSgb3xeXh6WEcgm5LA5exrPhhZZbw17cUB3bcrdX1fkCDW",
  "key9": "3dmxMgJzrUpSsQNiKJho9CayjSP57i95hZvnZrufNcbbfHphvzjoW68Dud3RvfTX71QkvMTc7s7uxV2B5VHTvbVU",
  "key10": "5UdE9nztwapqMEB1ZaWkzKbhh6awGpvnukp5gr7ww7ogK4eed8y48RjBuSxqN8bAWsPZqxd3RBbGTthpfJofMMzi",
  "key11": "26WeXgz9xzu7scG94xRHmTBB7xhvKELUSsBeS1ByAv9NFrgFeBgf8HicEH92Q7J4CLuwvaTkXGN4psGKyvNSZSn7",
  "key12": "CUg3bUyX1SVS5e9vdpRPTcrxmkRxhJoabQmibPWZoLvqYcQyWAbk6zMxM6yD86hCCPfTQiWSgxYA5VhrmQpqUQy",
  "key13": "5jUh5t5mHHeSLp7frFRgHw2zsMEfbhrfs1RXW6Uw9GcocDpA1FqmPhWCkBgu9qCNcpSdyoccPvTk6MnqgeVeoyuC",
  "key14": "5ArvP6XaimoaQTyB9y7mgxtmebteGgNkk6QJ9WbopWG1pTG7J9Crz8bRYH1ju8SFXfiE5jnnEosCVSEQRf1Ht4Kn",
  "key15": "577Mgtbm1h9MGrgYVdUAkDz1tBsCFuevFwEoNiWiSKPio9qqmcc5CVZK5HQVYEY6Sfj5Avsawa7ozoTRBfGRUcWC",
  "key16": "4XxBgVePjfZBoMFzcvBX1niPVirEktA3tvnfqXVtcCEMqSjZ9dJHJMYURBoPHkvugKamQzP7NhmUPifT3zDNg5cK",
  "key17": "5B6oXoTr4nrqSyaCJw79UkebFJbnuubyCVJJrmCuaadPu73gQ1A49VpjK5iY1xj3CSN7r2QUaizbUtMq4hXzkxud",
  "key18": "2hrHgerZAkmVxa4UHDC1F6sH3AiUqjiS9eo83cry7SfnTcWMjAXHrg3KdcFgHojKMNuHJVcNAkrAytU4or3koR24",
  "key19": "2LZ35o9CUy7tfSZEU6bxr8dx4F29huwWmArmNuFKhB8CZpXNcYTXiDamY34HMRNDDHbQWt9A7Lr12MXtevbCTQLD",
  "key20": "5tYxmoLubJCBXDBTZYUa8J3z25XZ6jZi5DCQSkynW6QfS8Pirr6azv3bRWk7X9rpPMAQjuY9dwpg1ybBVNJ1NWX",
  "key21": "huW5h6SVCX7YtteE8esFcpaNTNa5eZFL7S59byRBQZD9jPhQSUyQuoZTZPq26fSNBVZo8N6VwX8hEgjeAJqQcXb",
  "key22": "3LHHRnFpKuucCbnNvRTmUrMWBLudTRDUrRZtmnz4MHNj9FvUEeE7REKVFY17ULt3mVjpzCfLm3GChcuvbi1CY8AZ",
  "key23": "2j1DbthoQ2S7S6rfC5oXLZFyfBRw8o7jAxtnYj2cByUFzoSvVrPquienE1mhn2UA3MYLXsvt79ctkPiqAk83KUQQ",
  "key24": "2bFfVoZUATPnW4MTAnjJsEsm23XCGLqqwAejFfzffySEkUc7PvQRkW8Jx3W7TTVSZQMUKWmsVk1mKMhQ3Qb3g6hg",
  "key25": "3gyff39uoPAJuvubmD2vRomDQUNGVa3C89q8SzCQFLcegaZnyHCXjXUtFArriVRLDZpSFVNbx1GFYVu1agzgAq66",
  "key26": "2E8DXoZH2ZkC6VUcRikdDKgJs3sY6Ho2A1iK4DJAHoPtBNpJULLPeRTG6NqQQzP4sNutMAGEiLyTAuRKF9hCrE9L",
  "key27": "4ntUuKbGw522WQV85MmgU7tfEV5sDqimQPdjVCSpk8etsE3wxZT2cLJRdGYeSmc8pBrqHvrayj9epNQnnxwW1LKD",
  "key28": "5kAR6hXRvygtpDzBXpshwfD792U4Beyik3THVsNozjJin8sDmnyWAatUThd2R2kMxT4GEUHKWCZ4p5RAxF7UQq83",
  "key29": "4dzViQdJ3AnE9wWjpnZqFEbUnWPL8o37zxFyQaeTNwo15Qx4v8u18r24a1Pp6Cw9H14Ju3Uc8d2uQiodwtnKYbLy"
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
