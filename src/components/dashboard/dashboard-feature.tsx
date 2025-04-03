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
    "LbFFH7RXzGcYEtEAvsZKTq72hkoVVpKXcQrtGhJjraPJehFW2g8C4RDHoertgCdVSJMZ73wZdA8ew7zv6uZAuUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Lp7FnZ7wgM3GPH9tmvmT79sbjMVrFEpXFyoJG2NRCJhyWrUmofWFz76Z33CFuXBvy778pKfCvKaFbjqPpQfcKp",
  "key1": "45MZwThTx2nPNiuU1bgM45b612sYJpxSsiq9nb6UW5Xd566JkNH85y1LFaSqHYDCuLZc4QGsZUtba1osLYdyZ4Lg",
  "key2": "21VaaA9fMjEdZX2wVzhdHiouHWN3THuao2HMqjmMpAwNnpN99f6MCVtAxsEphF7B5Gm72dtrFnJPCgF9W1NBD5PW",
  "key3": "2dbdJRMkXnMNmsN1r5jECCTRXJcRnBTyVqii8BB24oUGdY6ZBLrMx5EZf6n9dufqekgTvoWq8WopiYSrhnYEZjrV",
  "key4": "3ajvBbx2Jmb51zJbuWqj3Sbq1xRJhZED6pqqJjgViJTpTs3wrDA1P8TGQHJubcmwhXAma5hvydNwz5ybgyYfoWGA",
  "key5": "3Uyr7tRAJn2Tju2q6KnZQ3MStDRf9ZyfL92VX6pwxmAwRdDNE4sr7qAUJ3XkjYDjbppVWp68ZnqkJzQRJTU8E4nX",
  "key6": "qa7uqRVnnK9aGrZkpu2ZcMDmoM7LsiWK4XgcHqEKQ54JzrcuZJXuHBEk7MfzbdJ1ix4FbpkxbQzkCA5DLLXgD5U",
  "key7": "2ExHHFEwnDfNFBkc5qpsrAis5qHXjikuH9DtKJNVeuQxhc8dxufuBUaLCkJpot8gCkhp4GZpQKz5cqPnsa8rwJHc",
  "key8": "2kqdivy2qBLWhKmzuPbJT7ev7sSRmgbdXHoEX7Lqq5akpjhbnafGBi6N587LXmLMT94iLB9jkuPUeT5AYtQtVP2H",
  "key9": "57Jp1sTj6qvhbm1ioeMZjZxn5wcvo5eMoTZ2SffpaieHnw26xNgR6FmJVLMYz2B51ULibn5A76sWoNFP8Y5JW7Nj",
  "key10": "4rXpHKDU5Q6cMDkNn4Zp5ehQUzk8W9gbK2g9shs7ZubocoGJ9VK6cZdenak8CSiM69A9SWSWSAydqreamoUVEc9Z",
  "key11": "gV4dPvd52HNUUnusnDo6jVY9B2HUqVeVooCMobcq3AjtYpgsUmKnwMgrM8vSwGpiRaTvz9GyMhzKzoaH5U7uXvp",
  "key12": "5zXQMVUK9ZpmvMVmqphdoEUiKwbaCY68gH7HpfAH1uBVBSF7RpTkd9eDstywd4C61uRYgLaV9etgAdVLSDryULhc",
  "key13": "2uyMoveZgUqnbyQbaXRQy8oRqb8t8964pJKiurNZM8jDKKt4EUDb4uMvPVASZQbwKuvEJd5GFdHv4gCgt1CNkfdm",
  "key14": "4h6PtNqP5rkwy3o1X2ieBsfyzCMUQCQRiGkRam1xgBJeju33TAY4tMRHYePGgbKFbgsjMX12d36mXsM2PV5AjBUx",
  "key15": "4YvzqVqb1n3ZMDJ25XG1sc5CM122ju9AWAAAh15kNER5ZY8w3miUCXNh8qVdupqKQQHviSNa39W31kaf1ZocqJF3",
  "key16": "xTpy1eLgBa7RUF3gjLn9YEuvSyKC7mpMyZ94RK46NfXtDcc3aQkT4b4LuD127JBQu3SLrSNse6FiDiEaZ2XEM9p",
  "key17": "5K8SutnYCsas7p1t5CVsi3B8ktWPHNdy2B1BxmfM37b6U7HcmE3A6rdxcUGQp5FFHqsc8rdnq3LSrMrKDiW8XDCV",
  "key18": "3qfvW6iVBhEoa2BkWzx6Mz37hdf8mcfpJ9QeFfQUoQAjnc214ay3WYzbgYoGFzkutDCbqwdDWsoaQiznypSYHLaX",
  "key19": "3tsJJ2xUa3cLKG7VkbVEVRpXURNGgCfrQJFGACtYHikS4tbcstgnuTCWz9mGKVqYrorC7iLREYFuvvastJujdwRm",
  "key20": "2XBicJ3xZpo4iQpNZTpYXTNbXANFvG2qaUwmZeSdB9Mq3d9JQo55R1xEurmQVgy7SDpRVcTMSTxRad6ZphdDGY52",
  "key21": "2GLxcv6LbHUr1YypW3Cdi1WB6pFSmBkZ8Y4eKuEghPyz4KUu9hSQJnmrcAPr3qbDgZuw4jRuaSwYN73sz3LWjDKu",
  "key22": "5EFBpV6NBLSbAFZb2Jsx92CikyeeonFYEZ2cwzQqCqT3hJ648aR474CnWcvv6y66g36X79jdhjqs7ZZpoSscK7vs",
  "key23": "2SHHExutcTAQ4QK9YzBtdTNDxFqe8HWTQNfeNeAQDLJVgS54krtbZiz4GTdp45Ujc9BQLuacUeSaKatNjLZqBDby",
  "key24": "5xsD59aitpVyJa1uubuzQZ1r5MTYMfk6xaPu4UrUJszJpPPLHvF2aLwhdBeqq9GuhiHbrF2SQKFni1wnKLqw7Fqb",
  "key25": "2E5jCNGocrNbptsNa29PoeYg3MSkZ3obC19T4YAfesP5JtDb6wZynn4hWENcKkFBbbzC7X85Nw9iqtWz8TWegraz",
  "key26": "3B3hUDTPXt61QMMTjKd2QkW6Fh5qtwR28he8uMKJXE59K9zop8gBaBE71Yc6kEjUDbQZGW1KkD8RKnFa7t3UqhyR",
  "key27": "3YgWNdXAAJjfro3DQeGxLRXQQMgf67qNxuQm14EActGATSjHuaKc9UVeAF2TTJ4QzSjY71BdFKQR6wWqk7iBVwnb",
  "key28": "LefKreg7puPxyT1MaNbzPFATEPUdCnWFwyeuUV4mhU1iNNybgEfEvTLoMvjLw4TmwUZgqfPqzKZez6955MJzbyL",
  "key29": "2A7ioH7e1zjxhTDNCuPSX7LTmoiwFup9XHAVXV8g9pbvaRWZdQHH7SEhnCaPGrD2Y41VYQq5V7H5JXxgB2fnfVQV",
  "key30": "65HW5PdEz8SUFcYpzoWuMTzTKBYgZgJAP7aySkCJvteRDJ7iFSAqSnDyjSfsT2BCEWtJrYp3hqKYjbWxFkLtVZct",
  "key31": "39G5RjH3TmUUQ7YEa6uHZ5TxYSdhHKCxYuid1GAQQjW5P6KiPb2u8irXPt5AqeWLwdm3Mkd9uQm7Ez3sLXHuNQwb"
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
