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
    "2wiajQQHh3HcRm8trbtMf3NULVRK5RCFJ8RhYDmLGEG3LbAdska9nZNTH1kSRbm5xpDxbaSz3eiBUkKPRR4AvAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZS77Trgs79vuJuUoQH94cD5Zy7a59hrjpNLKrKsnyz9xoaFJ8rr2zFx4Dh65K24AQRu33rLtY89d6xR3XHkNYw",
  "key1": "3xiXGNQWPkzCiV6XJ2pDPexzpAcyQ1t5ZnNReixPcCHfuXAZRFVJ7Gvs53mqAvSHGGQDhJ4bVKnAPxkNymDodqRS",
  "key2": "5gEj3fsXGev4db11YDX79nBxbbf2C8cCEJeosNFDpf2U6DyFGgBKwj5Djqgk7R4koNi1fPEkf2fp5WgGD5HxpKDp",
  "key3": "FSUywTGBCffdG8psKKcvoWQ99fULAf8NFiSkFATeP7SAczVBno9SpPTSvMh2PZV8fgujKNMhrk6jSYKSXgvb8Fd",
  "key4": "3nRUHpstbakGFBgnbADyGtNYip5zYWLKjpgYaakvteiSmzs15t346SJB3RHjhQ1PUdJpq2VZskb1mtjTFp8Nzgos",
  "key5": "2o4osxWJXbVygsZE3hJefaYj4hT5c5pouKizNAbHbgdFkaTBvPF2oix5eiCvhE3VvTRS242jVBeTTWvHf2zf2J3W",
  "key6": "HpD2P3GePpeVihVNPq2RTJRir4S1G75JkVRyqzncrAxQtGk14FZ1HHz7iv6mq3TwA8HFgBBAe3cZAuqQpxSdj5f",
  "key7": "4DSBQkT8vJLvjx8XEt9N2YWD1TYKVyupxYL6Hu5DP1BcvWWK1MX2cyjCBoagqjS9Y7FjUYvtxAAhhZqvWd1CxPQ",
  "key8": "3qDfwG5uTA6yzj1fj3uiMzpUKR5dwNKRo1qUtARM9G3r89ouHvbwD9s8dZ5j3FzNBjyqZXZ1b1gC9KdehLizL3Zq",
  "key9": "4tzPhxce84jH2PYEdv4Qv9UawR8btBC2YqEJDYodkZxgGEuYBbCP8Sy8k2LAdW5KpyN77Qgs6N7k2h7fWSpD8v5k",
  "key10": "57G4YN1gZAXdQWVgMWZ9B58MhJbsZB7DLwukT1GbPE1gfUHQcaNiiz4ns7euewqvX13sekWWyF2R8AD2ChLbPaw7",
  "key11": "2cikB7RBGK4nk25JJMCuetN85Yx5qjYb8zq7obN62aJksdfjys3DBwB9WvwzPG7NWdTVQEuX6c5fXk2EZjFUNJED",
  "key12": "4EiCK8p1ej72EvpY1t2qRPGDAeao4Kt7EZZjNUKbwSzfZMLJuGLPpdmY1GmkGocGXPKuPfeUx4tDR7TwWvDgSMKA",
  "key13": "eVtXStZeR13QiSU2dRQZWMtqAqpNG6k18pfi9xJ8HeZ2h6pAPKHBKsPBzpYjtPW1suMEoX7TQ3XAqTuRNCasAea",
  "key14": "44odBXGpuRhj3cKrxtUAuNtbT5mAQcUvBgPfhCPiDYQAPMHeypX1BRGUbFZ7FLpjZnbaUWsLVkQhHY7dKucDG2Xe",
  "key15": "2Vac2C43YHsRYEcMAMqSyYcgAJ7ySZabeUhRXbQAjNVZLfdYNZmedMHscQt3Hhngvchy1NRbF4A3AwudEgMDxtCm",
  "key16": "EyYjC8hmP2yLDXbq9TQRCJ5QqtJedMsxzs8bBeAYNnx9ETEg5Rcni75dUUhDfiqVhHRnM5hyC9okwoKeptAbg24",
  "key17": "4DXqFtSxVw615om9ZZFY6gVSCZWVMj7mRVjKNFSukC65Do2zZ64PvJyVoaPM9WG6RvcePvUkmMwjo8b7qCCUKiez",
  "key18": "zimrvFixR2dKLhfydwzWSdhay2F423dNxH9ryC51StjPnWzLbGCSsB9kV8Tr6jAZty8mKXC146iR2vqNZDPn3nJ",
  "key19": "316NNmSouuuPTvjZQJacwNQscfuzgqPUJh2N9K4oJdbGxmTvv18Yn4ZsvrwTLMeVUxnwV8DqxxxmpUY6nHkf4Qpe",
  "key20": "5mqoxyJFuQigk513txjCisbSQnDG3cWVcGwCRhm7xqi6gvyXM4HQ9tYndQutrhT2zCSpwV8wVnYw4jPRsHitPcSD",
  "key21": "4YRVVK5EYAECTwL1A32xsZGKgXuZXXY5tdFpUpnm3xtU78fkJvdSEw4HLoUrnZqYEtLyZQK9isNsM3mPfj9ctAEY",
  "key22": "58sbJ4X3uTwJd49T5Jn8bk3EuzqxgacXZUnEzpbgzenMi6eBbg2egRQySArSSFYonBsnoUP4q7kLUH2mKQT3qcdX",
  "key23": "3K6VJjHBTc8XcKa8V2adrtpipN4S9puNCHudEpbUXf5YAbW7wTLrTrHHvPXzx9twcMswJkWXNyEDUnufHMehbTLe",
  "key24": "3PVVWSUt4dqheSR6BZe1r4Vnzgb1Rg7DpRZ2uz7j4HX1Z7RSbF38rKS4uD3zvpowKxgGbZGN3umfEtyLWJpJfjAx",
  "key25": "3UFmF12eZTh8zKWAJPEJMUhGDThG3SbKESHTMn9D7sW8wmwuH1QYg9hBJRzgWd6K5rXsGXWptQdrGVLqSuA4pcg8"
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
