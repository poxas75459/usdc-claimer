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
    "VJvmc1nxSkZmv3uvc6yxVyaFY3frcjHdYD7mGs8aec8HLWZUe9WxZrCRa5S4ihiwxHbKH2eo6VmF5wBY6o4W2KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cY6GFSUAt2cLeUF2uSzq4vSV52yDdEtma2MyBQfUWs71zM91nXLWYPqhQwu6hZxCFo19NRiQnGpNrCFdm4QzzW",
  "key1": "2zXnNEgxcAqUKhhHRUd4rp1TKiAjkgEUKzmi3vNQ5JifsBMCKoU8MQwXMezB3kLzCW1TB4zAsdiaPHjNYoiCh1VG",
  "key2": "5mvA92kCqN3Nf3htmkhHbQHS6wrz3Bs3ZCDMSAzgvRkZBgc9jjXvbaSXVFxAJBtQeG413idc2tbi4nZrvBr6Uhwy",
  "key3": "2csJNtRqNBDB2EMghT7MLbbd3RiqcxANFTQAxuJzLKysSVKdk5mGjzLQqicenUrDe87AR3BFrb5h94aqZqcdLXRc",
  "key4": "24E8ommEQwMvAoMbwsS6ushYYng6xre62asZwsfVPi1QQuqEyMuVBtETQp4LJjoEixtjwHt2mtHDfC7BF8uaZTM9",
  "key5": "2H4DWNqb4nZkQbG8dkY1ERmg6Ej7HVs4Co6fNfF4GPWq6C6VEGrfgjPMtkvxwKwErsLD5ZXg9wP3AiHmqJGHZV8c",
  "key6": "414AQ9C223CDtqFfiNPkQckUMPEy9LVPJ6sBFC5yDACM4JxKGu3a2rEWnJxU5bDWZ3BjGcNcJ3GtudLuVqv5Apw",
  "key7": "4vRQWAAocw3QBMg2hhagxT2xC4KL3ZjeCeSiE8wnsWMVr23RLrgaffGPJ5HM8C5RFhbvPB4nXXDisuXJDH5fWiU",
  "key8": "5YrwGqkWx2eCrVhDwRQjtEyiYGCEBuNCvMK221FcCNSN3A2UT4qVsC3WmygRUKbdZUoZhXv3Q1crBewBK3RX6Xiv",
  "key9": "46TrnCFAFZSczErNY8UYV5AXiUawLuAmaDrXadswA7A56bNM3XkbLnKSHbScUS5QS4BFcJTB5TiJK9V1TmQhJGhJ",
  "key10": "63prF9XUNJXaUwyW1i3J7Vja4nVqWByexwY9wmFPjznryErPSBq3YiAXLm1xefiJHD2HMR9md1ki1DQosm6TQct3",
  "key11": "J2Eh7JrgMEA1AQ7qfYZwTv6WXnfARiSKQ4XDoevcnGktn87JQ4uPqy4WHqFaWG8N4v7b2W7vYT9uTdyMHiQNmQE",
  "key12": "4Q6uDQV4DPcKJ4A47Pppj2LRpJJjj31vA2sRkkvbozoxgSEocifu4wuAGHF3CW9Xpe8aKvNRFeAJdEkWXixHSs6p",
  "key13": "3gKkJE9nvwdtSNKiZut2DZCCqFFSLL8hAXn5e36wfvt4hg4QsDLN5yjAxPgo7F2GDoSDk9HBMnVqMdDafe8UAxm4",
  "key14": "CQ2PNmMERmugo4WYNi3zB6Y8APHH95gafC2ygErEfH3EaYmvdnUa46Eg3cPqkpo9bXj7WrRTrWBS3B295PcQyou",
  "key15": "4xy4AQzgQYVCoWZcd3NfgsSivJSAF64mbMmaux8uU3zWZVi6jxHLHVF9Qu4GY1yQvJXw6HucvYA9vE1yNc9MAdyb",
  "key16": "4JjPJmbGDv1L1RSo4YrDFosQcRu26eC3xs7K9P9eeiGVWJFxgfp6DPJQYVbfSoi8KMZ7aYiorrccdCXVsSBP7eog",
  "key17": "jEa1pPDvv5SECEdgapLzngedfLegGDmLzqG8L6vj3ej2dn9MWBdxWq6qmD1cVd3N9fSApwcEx8LfWcR9fFCZSEy",
  "key18": "46wZJ7MBKhAuVnCYS4Qe2AAB9s5sciEcGhs2pE31xWJcDXLBXsQsvZuNo9eSTHmACywHpG5Vs1EjqetfvXo4FN2i",
  "key19": "PwFdZYyCeyCB22VV2NLvmSTJHHYnfhF9rCPzY84PhWSUa6MaA2FnUBLP2sSqoWqxxU57JbmMKEYkCRqUn6m6qAK",
  "key20": "4w5Qm5sNS1R5uZgJH5z6jGYWgbTS8z99NrUrzJs5gyVMW3FcUUz1PxaRziwrgtxMuX9CxTygNeaKVCcSVEXvCwGB",
  "key21": "md2CmTboEJfkKEryrszP2o9aEE91apvhBbaTHAuTsiERDsrLFAqnaKWe42giK7sLAZP9if4jYeZcVgihx8CMzfZ",
  "key22": "egx3TX9Ep6E7ySDJYfZev9Qicks1Y3Q8eFmSws1z22T5go58L4e83SemfzjauG3p9gtBGdJDqjQ44bnmKLuWH4J",
  "key23": "LpEuZferTsGpRLrSXbw14142W6d9XwEyLZisUKJJ6QqnsSTttLxEar6ey8nATU7iFjDbRY8irQgEhKYszcvc9xh",
  "key24": "4Q8k1NQZs72y2YrhydeHj87ufrKrTiksb2ZjbW4pdhLBEEJ5PqKrjGdkhneTuAAexMyS4s8jnuA4hoyirBoPSjtY",
  "key25": "35zPeBtbN5MWQyvGn7xM8gi6XP8LFfjnHZ2NwjDGCRiiLYAhpLHMR7VrUcQQvWfGzTj4UGrHFQ6fNXW75i42LQh9"
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
