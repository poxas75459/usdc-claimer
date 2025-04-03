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
    "4owxvL4C5iWCAXc6HyA3Puh9bAtD4UsUCRkNX8L2uDzj3cUM51ZLHe9yK83GfQLh6c9iqpJvzvgc1D5ydDJM8tDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWFkCGeVqc4h61qbaiTmizryEsuJpWh8SfwEdRxt3fRGTSYuG9rG5DWtEYnPyMUvPnFTgNxW8VmZMRFWvofEuSt",
  "key1": "3v5FJEy48iiDs8iSjGZDmLD9JZTtC3DHg2ihksvcah8BxRb4z4wR9rznxxT3qb6WnuUn9XX7vX9Tqj7srLxieawr",
  "key2": "3XfPtAyvEkdMgN7EE7pukhgY85BpvFe9mGS71tfg4iYgLssUPVfjUzaxXom5XzjpfqQhXStWKeuLcj9DVT6QDcpY",
  "key3": "59B65bSyCNPwCxNYempepExTqgFhH6aMEkoy7ucpaBVHJ3bisRsrTcjXGyXAZz7brFLvtGLVrGfmNsMQ8cQaicEP",
  "key4": "s8DFkpEWVB6SYKfw8XhcY5kX6teWYFyqzGN8xZTT6v7kg1m8XMaZ1HRrfxQFsVPW5LbKhtrLMDiF5n4C6JabjEY",
  "key5": "3SjPah1KaYvjXPmqb5aDFtgZrbcJXJoxVr5ajZSraKSTnvGE7bLKfGLWTkJyzMPuMSw4Z2NrEvmFDBpHVL8VTXVA",
  "key6": "7znsbdgjsiaQT8ig4puv7SPa7p7GKjNM58VdZjUkuQktPqKYZYXyjdHfEwnd616DZhpYcXodf6oksaNyDqQp6xB",
  "key7": "3csEhFDMeKaVzJ9j7qBf1TL3kj7GgFEKhbRa2Mi6DVn2AkABtBQVyGF8TQYUqYXKrKpWgqBWZeYPPvFCgvKBBEQY",
  "key8": "p8f5xwfAQXG7DMeRbetsioQu2hXUq5rj6pwDwURVVpgRRsx6zKHhj7MQL6gFaZG3V1RRMgHB5di89Asm34whxf3",
  "key9": "4d1N13ghBrbjrmfQHEjtXhFTDxYkc96vcEh8FzMtkt3FyxjP32boKW7vUMZm6dsrVMRKeyWyC13cfXs1c3jJTJur",
  "key10": "yrDhjJZtX762gwN9Xhw19zWbHDxSsYL1TWweg57ExtksbfmCcMHWSBgZSk58pjQdZR5bQg79ucMnLv2eC7c6kLM",
  "key11": "d2qa91fAdPDbrjXwKfeE5sdzcFS1iw3zEf6j1cZ5WmgXCZrDSWuFBH1GhihBDrXZP56zQVrLZFQ8THkaeE3Q1Wi",
  "key12": "SpdTRDWiwq13hzdSEXZMfBT747pQj2CwMEMxHZPmQuKmojmCszA5qpVWhyZ3eTDmZe3vrqvjh5iHrkyK4C4Sw3s",
  "key13": "i2HQP4FHz41GhZxTkK7vfcvrBMd1k6TZEVk26j9MLAMRTYANoppsoyPsEEBt8oUiXCfM9HJjGEiS4en4uTkZqZY",
  "key14": "2qHepfqD1hBk9teW7uULfPLc2K5HjpRY68ybMinyCgoKfSidwLcDWyLe4g6M8Q6apHtKmUBBDJmfbKQsMV2FMo4x",
  "key15": "5hGGkpFgMusQqGVWbpFvkLDxVS1ckNi4tS6paXBbQFSRxXj7xfrrwyx6VME6eimnmSY5iouHeGuGhiWsVFb5STwY",
  "key16": "4yenmDTC6AQLRyakapW6RXjjwJyvAPzYaG5bPrdRw33A4sektKUqm24HLyj7X2wqFvY564S1hu8Gv2FZb7XGxjUw",
  "key17": "5JYDaNXcC1Do2nRUJZXus2Ymf4FDGdzHeY472K7jawf9JmS6GYjsc2NVaKkvFdWQYoni9Gftd8DVzTCr9RMQC97L",
  "key18": "4VzrHjhA4d62pkcu9qihnnRngD3zksJ8BY992KFVrKJ51SCTFHsVM3qbJiydxLJCagpzegBtLqwaagHpqoeCHLXk",
  "key19": "5soiLZ15CJuWSAXQf5hitrTkLEKGdnjHVNQFZUdvV8BSbbdNgCPGyoFUkRRxuYohywtVD9KiGKBN2Ekm2Ho1iMNs",
  "key20": "5EACr2hDMrCJYotDAiZ3FhmhGNriz6KYrhkPaA6ov6aLMAmpB6x2qmWhdF3k68VfVncBnr6uCWrMRTZkdUPkvCii",
  "key21": "5R8SgNU5vAqaYiNSyLwUMAauR369v4PeGKHfusYHYYHdacP8ruKoY6kdQfRCBiqy11GKDNLKnN4aYkfUgkmUYAbv",
  "key22": "4wep36yR4sBnkUtwhs6h4mkhktow7EJMSPTJn5UTYUG2abkn1PuHKf5SUTKAuYhm4xNd3RQS1Mxqiwj6W4AaQ45g",
  "key23": "2wmxvyL6dmcYEUraTYSLR3F1zi5gmrFBUMrdr1e1iQLiZk1ibRgY9g5DPko7o3cAsjUA3BQLec2uT676nYWhAZTK",
  "key24": "3enu9Bh1NuqqqmksboxqkFa9p1xah5C2NQt2egNw6YeHZQVP4vUHK6ahLTGt71GuDeaRxm5NcUPHgSjJ9TUUy83m",
  "key25": "4SqtTByU5t568FfSrDHFgVSqiyicy2s2hHfoy5xzF83qszMmqLGr5dXTgnpiz6ndGLoQNRZd78Nicsr4s3ekNtYR",
  "key26": "JAGb8JfbrwALpgtNeF2VKKtt21J1KT4KdHY99ugDxdH74AQ6SMDLA1LiRPM7hF9VfENKWSGVhgcZ65bvr2rczf4",
  "key27": "3CZwKs8K9UC9Y6VihWwSxMKA8Ad7vi5Gd7SR35yRfBjjqT5eD8qY6uWxJBLRX8aK3RiKD7tXKZrqrxcnmPT6EY3y",
  "key28": "4szDLy4MYxwuXKdcdm1Ff9TKEMZF6VVYVJaHABCqFXqxow58vh2QJtDJgNS7hL9yoio1SjzAQ7UrLqeedTPiPsXy"
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
