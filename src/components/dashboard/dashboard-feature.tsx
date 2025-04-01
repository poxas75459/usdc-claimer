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
    "2ubDGm9rQsBT7AqF45AoP6BtxMLtPoekWyJVhCX6Wd3qZsNiwndMMjxJ7YFLHfifP6FV5FaPAGVKVtSXnevRzzcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Tx9jVwT837tnmsaiTb2Dfid3Pr22zT6jVtRop1BovvjMZteKx3LHqKTnf5UrkEEArHBSa7GKJWTxREtBCDzGtt",
  "key1": "2pxdfwki8SpRU7QooMWPnY239tknhyqnYbydgf58FJAof1BBHSrvDAbzrjcxsXCztPkFNiSgrRpVeuVfSVWSiDCP",
  "key2": "3chB22SScgxqYzXuL6EqgNNA8mzcirta6aEJWWkXVnDvRH71furLDoHoPB4cWQxmrrHqswznShLGRs1LKGcf4qbB",
  "key3": "5sLstxRUSHUY9HVrSGfQovTVEEaDs1XWR9RKNJNgLyVh66AjDwfpuXC7sUVMvxMCyvy9nQE4E1czNk4dKz9jL5Rs",
  "key4": "3SyN4HLEnP3nD3ZReC5AYhTjPwUHNxnn3hKdZMPwKcYJT4YAKG2VHT5Be5DFTd1CxAtWUuhRYmTw8kiqduySdZzg",
  "key5": "dTBAVam4JGZY7jfE2EJvoe2irf55c1VaCBW8mdXPntFfnhkQmEk9FJYPUoxNHBRHNG1FP5vKCcvEfcv75AWQHdx",
  "key6": "5LKktgr6SnU8NAY4RRZYJiNurLre9MYfJeZWAkhm3j7WmeWSzi7a9Aux887gqytHGJ7w6xgFwDmYqW4hYYbExsiM",
  "key7": "e5QKZC4sZ9Hv28XSXL8PbazKtMuMsAxT1qcSLC4Ysvoo64eF7h2mVMJ2qB17NSeZ5XCZF7rkTMDgU2P8Y8ScSAz",
  "key8": "3S1SQDAqzv4UEv8c4Bjihv2j55MKfsejSbvmBAHty3FGfLncyn5EBN5wdJFpRKyg6DFg5aDWu4rHi4rig83ZHgqn",
  "key9": "4uqR9CcVrKRe8VrgPz2s6E3eaPvzigcik8ZBRGqh7xXDWN4ikkzNMeLf9hPoFkgd4mCAc6ihfDugsset3H5sKQEu",
  "key10": "4SUkdgr1bAeNGy9W7WmEjp3fUJtoWp21qr3bWwnMqdEHePQQKk8coD4cDZoZ9Rw1u17aZRwvyJoTxPVkx5n17f5k",
  "key11": "412foCTGv8jcwycYnbomEvm1x8CnfpeBM2nNePv5wLyWxzNMXd9NSdrdNDMx5WxBTLack7b4CsGKPQzQV73NtQV7",
  "key12": "2HJZMPPAGf1EUdiJRz39s7uE4zLjw3bZjuuFKkbZpSY7MQyPCRBU7MqMbxgNuxBEK6z9d3wrhabSJTfvnJcgrxUr",
  "key13": "2VueLPb379tam9EsDAfkGEJKhhBE4efQrYP9cX74VYQWufW4jNfrRUohgye3KrLYFM1zaGS26bitTnazt6qBSteJ",
  "key14": "5V4RNRHEp6BUyLrqKfvS1jB8hwHyViXLVV7j7ynbik8uUiUNQMAzRDEPihdoqQ8Qmg5hjzSC1LHACEBPQo1JUcA1",
  "key15": "3nXZ9N9ft854PezRWXh2mjfrss9WRSCsiDgX1Zy9RTShzSmqxEBMsjrtdkTC7q5vMuarQ7QbPvbAPoMNbLiJquTg",
  "key16": "pyHLnvhv7bCgRwTpmPc55fWQZ3jqGpG2W7TCgDtb5GFLfaZY9pcLgyJS2ERYmggX5ErbLn5XmYhya1UyTAcRLZX",
  "key17": "2tnGmJWa6H5XfpKu9YZvYi9ifXJ2AprqNCexEPDeZdKbm36Uc3jSfsZzNM5Th2Nhaqp8jeYNeLhqeadVJBuNFjqN",
  "key18": "2LLstmpJRv2jMFkcMvgk7iQxME3La31e8TZaNxzL9qki19jpMaHZbd1mce4jCvhLyvUsyLxpBDKVi7ra5ujcrR2j",
  "key19": "5JxfPy2QKxHuTEbypqxhh7PyXWAtkpoaLxZuLc8mBqRpZXAvisMCj2QzSVjbSiYfYy5KtPnkLGocs3UUBEUdsHUK",
  "key20": "5Js6HSUWiLhwN8MRUSvi92qhRjrQYCq86WyejBF7WHgnNQN9V7m3UJoaN3exgXRiRG8Rtv5wgWquE3mmzuZbwgZW",
  "key21": "5X7d6rQcTQrNoP7h9mAUs9TbNp87S9owFrnphw64KWvnKZ13xSmpLEuNUwkPSPmBT9TQpPYZVPf8YNwVeauaZmh9",
  "key22": "4GJgY2zctW5GgDXCDxwQhkutXufUiEEVE8jpGbQVG5F8aZxkbNhedgsAAn257bqRr9crsLQTqsKcCvuDqDMdtBej",
  "key23": "3CV2b1KX1c47BtyqnPog5EKqFE9AUgAr22EAHbDWojHqJ3Q3j2LGqJLxZBNCYfkzUo9CjNr7CfJMyGSMKYKdhkYt",
  "key24": "5emU4KV4uGxQc9pJAE7YLWUMubrX3RpoFTitUXNgt12AtwJxKHy4xa6KQ3jtab8jemaAnB9mw6xLWEnHJKFS5hPx",
  "key25": "3bHx4fE9Sy6qQun1iNk9Z6fa6HTpfj33VqQvk1xfXZY7u25bNqXeUbwyNHNU6qRTPmfsdCoLXuWjGaZFQZzTaanW",
  "key26": "4GQGoqhwseHLAmrizZJtf1kpx8SEDMRa6HKvT64DWnDLJvWpnrpGKKeA2nrrBBR3SkUjTeT3ZPyAAQeE7RRfmtBQ",
  "key27": "5hEW395u85ZbkCkAhtehdNf47krxfE6GVbBuFxVyPhHUioXG8S9dKqNggwsCfxUVAXKaPfRhjKM1wwjqxgzWWQ6h",
  "key28": "bYoYDnKUfTvvVkMXZFNSNKpM4dPx7AvuC5y6mCeUViPAZGkD2adau5Rm5ZzSGygHCGgvDsu6fCH93AVYfXUnREg",
  "key29": "3QEucTbXApKcYHhXnZK32aSNaX4hfSt5wBqLAFv13oSnR7J2W4W6aErrRvf13pavCkhFWPNM3nFPXNDJyFzM4N8b",
  "key30": "5D7TamJCGVB8aRV5zaaQfK9yUHpcuVAJwsNumYXBri5Kn92ZDdnA6B8t9vo7zBMQoqyWNq6TMahETNe1SC6DWYka",
  "key31": "2AHVro94DyKHczLDvAF79k3LnX2PpzuWCnDeL9MAJeBEvTZ5SVwFcE2qBTztiBbhfAaWrTTXCeXNgMrvbWr7Ajk9"
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
