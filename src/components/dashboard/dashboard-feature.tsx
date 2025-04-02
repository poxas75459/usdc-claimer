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
    "4SAwzzg6osQPeeCLGLesqbhSDNuXuMLpgJbtmMKb2Cx6LJNZ1EyMqHVYrBo3eCgVY4Ydj3k6c65MuaSS93qF5L13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEyGUmSUocWAKWE4xXZc6NDukxbajV9aETctXB4ao4BW6JF8G3NuTxunVYv6YCYLqU2nXNx1txAcCAMzpbHrGZc",
  "key1": "571Kf1sZKSH6kFExNUjpztJZuxkQW1odmUaJTgThaY5ipb9uJ11xbuCXwvE973dcSKNmXCu7sYBf61Dt3GqH8r1B",
  "key2": "niC3FdCBeafqXAkZVNPQ2nstUtTxXMomvD6fs5LMJjGbkARsqu45MeDgenR8r2cqw5a823vELKuzbRMfUm2Ahpp",
  "key3": "3KJmsqyyCX28kp55RZgmQQDwfjiboALAgj9pkNPdp79bF2CnjH8qUVmwHNU71TJZrncuEj4kAo94MiuwxrJuwnvm",
  "key4": "5h6ZXVH3iTuf4wFBf1jcSxHxpLpexNymZyL2SYCyEeHTeSkEERwrjaUFxtxU66qJpsPmPu4niuLbT8hynxdtJsFb",
  "key5": "4Gcwc181JrpPQCpu8BsvJBEJFK36rLTrVd4JixttsCq4ApKkCwmSBBxCu32CDZdpaCiHgbSsVpyCEmdtJjede2es",
  "key6": "5FKj6e7EpdJ8hVBnYPLNZgTNvQSx7LhMMCCyXbLfR2AN18et93JB3FVDSdvLJYCvKQnXUCRGvvSV4NdYUJYsn5QV",
  "key7": "5Zw5vfSGNvPzWhnM4y45YhanpFfYhND1sqL5LkuPBH2YiR57e1mZ5QjmrivzEohn6UERWHYMephejg2S8JsUJLqC",
  "key8": "cfDpomREjgjZH6eqBqKkihmdnuBsJkPu2dsreNtbEpsmXXp2MDAsEMnpN8QEDePJc6mhzEim3DPhL3Drxx1YAS1",
  "key9": "3u76RqLP28cQqNdfmxTH5QE7LyHhFL6b4WErbd6xmeqWQgYb9GLmaRFaj2Qw6TzqAn3ww34BNxFP5NxmQUQE4U6",
  "key10": "3KNtK1TDf7zM47Ec4KwEwwhG5VVVsUrMun2guuCBQvUfqYyeAB1WS6PyuwFYr7cdRk4GzqEmiBs7Sh2wd63Q1ffh",
  "key11": "4fUCdHaDLQZwi86WNUiftvse5fDNGurzFfGDYvjcft9y8euVDCxqNSWGBLbhNSkacSrLrBFGsfBthQMav5PqBma9",
  "key12": "5fuWmfGPyTrTxPbj7ahLBtuZbnFZKVrwHvZ1gkoe8aaDxnUs5cZA9CuCMsPkUcWZK2XgMNKckbi18XayrNXiuS3r",
  "key13": "62AXpcQbm78ARfNvLfJ8kUtFWvNqEQ6qAwLiRWNaD2LKD8gadCUkyV7NonZJcMtMbMwjjvWtuFjZ9i6o6QVdq2FM",
  "key14": "4H5ZoqiFbqMi9dTEKWdZeUsWfeAgEgYVp7BceELxJYMMH5yUNyfXquz3b28D4pSfaEWzgdQyAeWTEUe9kdwXYMRE",
  "key15": "2WQ6vNeUycGJU2CBFT9iCePMnG7wc4qfqm9cVJDEbzg2tQbi523W7isM7g45SMzzmi4pGASxy3bbSyCe3nx7xHy9",
  "key16": "397WRpNvR5gNWvTNGGYMZvdy4ZuxGY1qagEbRLz66qpULw3q3vJW3FNMJTXz29DowLhPJXdk8w39VH34X7gkgPcH",
  "key17": "zyYybX6A5oqa1biBZDUwTvoJAmaCaDek7CfJRUyhsEsQV2goHYs3aEHjrTEi1yGptwzvvXkmzyeehWvnz9z7cQM",
  "key18": "2kdaMXcF3hC1ackxH6Fdo6Kv5vo8dKqYDjfMKb8xq77LsZgMwbduDiBS9t781qL2up3Y5JmR27AjVuXJZsrmeSco",
  "key19": "2u5JHzWHVWutbqVkuvyugKtUk22cfgSKZf1mkygPmQBYx8anX85uhdxrpQkCdEEgtkbVWpuxUxAwVFrGBqFX2adH",
  "key20": "aMp7zHYsJjy3joFvEKzifFfJixnYTfRs3T5scxEFG1P5uwhs9t1tMV89Rusmk1SHEqAgbjsN89Zn9D8rE2Ey9LJ",
  "key21": "44SNAXVb2a2CCQCBHUNnEht1PCY2q8SAJtVaY8VY3oKcZApQUTXkgbt9zux7a5JmFxTxmxFEcrDdw2mraYj96xoH",
  "key22": "5KodfXt2Uh9P2Y3TS3gVT3JnQsfWX4gX8259PiEVa8mvXWUuKFjusKKzG2tCNxSqC6fthdP9Et9KD4LrQK53iRXZ",
  "key23": "32sAj4QMFfcLGW6Sh2MweC7SDjVP7f7W2YEN8QeN3Akpj1ZrsYDwDNtFVcWGX6822VN3PuvV5o72zBzCoQ5nuK4N",
  "key24": "VBZpLZuShyv5rNYy2S25LriiT575eb1nL5AT1nPPX9pdcpo7Q6ENsXsbLQG92X2trosNytwZdYSCoyYkUT1en8z",
  "key25": "5CTRD2wYEA66pHj68UBR3VUhqvyFGJJAzwyKdqA1ziqP4aJykyDTpRLNmxnFLFXTWHQoopbcu73eL9d96VhiFG2p",
  "key26": "3mrRpZbL2UKXLy21WtJgYvBJNFuce8WX3YBJJTgvB99UT3sNGt48krabQGXFmApKFGgGBZB7keUYTJ2fAGxyQ6Th",
  "key27": "4i4aESpUEqeZL5sCkXvxFs8GH4yJ2LWibbe4TtEYzCehowN1poLGzhahWaTrVcEYGpLHsusG6c2344tXqb4Yi1R3",
  "key28": "4bhzoAimbb2BeW3GbDPdc23pss66gjbA9Vnhubcbt2srCksLp55xph7JYVLXp4B44N3EFkzK8kDzLfjPvYPw6yf3",
  "key29": "2hxaxg6zgsoGaXh8REb8619U4QaKDsRFumKfYZTxWV2mXtgwrDbZgCKaLoSgHTAnp5hXiMXJjew5Abvvx8yoYyPh"
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
