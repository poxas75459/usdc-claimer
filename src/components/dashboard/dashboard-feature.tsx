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
    "5scAFWWkkiPAjrjWiF7WN7WdbuNXm6dcjfDRENh5oQZWbtmf7TC7qfmMzvK7EyztRrtN41jFQ4sjeWnMvRE8ZEmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSTG853XeJFhs2e7zyYdDDQhMWSYh4JBpt3R2mn45ztf8fiQUzWNuA8CL5L5o59axpZ6SFkwKQGXQdV8DaSibgZ",
  "key1": "iz4YEFxuTbo8Ds6z8xrzXrcNy99ipZfrqrmqBKvbCZPxYo4wn4NNhJisJMPKv62YtytM59d1zmrbPCYoyW4w5Ft",
  "key2": "5ZJRGuGXVt7CrSYmX6tLXCz6VLpyDbVY5JakHP42tyR8coRRraQjDP26t9E1vxijmJUD99fiVyMYRU1CgsDshsRU",
  "key3": "24k5jtTod7bVi7qroqH6nAmYug4AUKU7HCMMueWPtasHnBcURxeFiJo3RPVbmuUtivHitMuW6AhjUo5G3nozascq",
  "key4": "5QBfV9U3ERGgdH6whzxJtvPbxsJd1tABpVapoe6RuSCpkUWPCknwGs1pC4VjsvNRkD238H8GfJLiZfaSjzcqYt9a",
  "key5": "2Kp9z6xfHqmnZSDy18UHJHUEwbKEWrzVpbKLLd8dTxgswMiZMRgengzctV5cJ2qRJKyfHcEWzFCcZnm8tNjZf9XA",
  "key6": "4vxiesbfM58aHFmdPpk4Zb8iXyk73FpsZkHXJvw5hdRtr6qPj5L9c9yNBBpW1c8LUi8W31mz45vBHo6LfGkz5u8k",
  "key7": "3NTu8AEHAhoJMkcV8QqKRiUb6icjaqZX9Bho4TCPhDGDhQw8E59mKt6Jq6h43QPJec8oJdfcZxcihEDPsduVUqhk",
  "key8": "4J4yAsivLtNtKBaiAM9LNyfNYSNb73R4QkEPK3dD6P8ZJjipFgxQ4CbtQUsxiLpqEwqKJFgCCukEtijScunjSQhY",
  "key9": "2kXYu84txAxtoQt3nTfG41qd3DYYuiaeu3U1ki1tFXGZQHQX7Ft48j8nbZ1wYpoq5dqikqwFxUP3LB3tb5AHiQ4r",
  "key10": "4X7KByp5C5bQvLCmsrUPbRf1joe7J2azZ5NPYPghZah2zx5hDstD3cwV25sptzAz6bYFGWqyx3d3WgsjCfwtnbS8",
  "key11": "5JWVSm9xswkARWL42y4kb6HsTyTcENJmsHj5dK9MTWh3ic7SjvvsVtB97UuZfFDMDBNQ6zprwZ7ofr6ZP8wZhKTz",
  "key12": "5W2CpSL14gQewnsVtSm2pnFfA17rpCvxhok1aDjyEJBBentu9MhwgBryV6kzRvNsE1LajJEohbz1y8rE5WwmRmtN",
  "key13": "5qe2P9Xjpr88ixFSRzqvWemLyBJoACxYaPSUiUmmvzRErJAxqjT4fekbvV2kNFiiec4tddkD7Z6kXoQx2LXwkYH3",
  "key14": "C17wJjdcczVomFLGtYbvtd3HvK2N4KsWd3fg62PPLaLXPp8PQf5PuipuQMam9eXVhyQKqCHKFKK4BeQxfdRFtLg",
  "key15": "3MVDh8eHSPg8eGd4Lmzi47TuTZQ3nnExuaWGWEWsaJ9xgJaEqygfw6MyaeARq8xcjpq2njFyzR8SjokdJTosr2x5",
  "key16": "KwaN5rHeWqwdztLMTmE9KAXWUfFwehPJvUFyhV4u6CqukkLDKXKiSrhVs2NMKM3ayXgE7sJaifzqR11ahuWhBQg",
  "key17": "xcYFp1THurb5mtxQ718N5cCufS3LYFuZeocB7XgxtMiD2NJfQYCfrJt3ZqdkJysFmCs2kNFDA6NoskofzTx1J6s",
  "key18": "2wBgafm5uKDeGkHzhasHFPyy8ZX3cTXpHDhRUFzD1MPmHFpnMyk6ZQsAqGApJiEoL9REg5rDdxHUfEKbgNDBFpR1",
  "key19": "22WhXMqzHSAaA2xM9uso7N8wDvk3qKeA2RYwD4cYvQ4SoXKrEjBympra6MsxteCDY8ctZZsgwzDKEZ8kCPcpKrvs",
  "key20": "2L8LYz7imRPa4LdXGMCR9U5WUpJtJuxE6Jm8NmQq1scAFsxp1d5mPePyLMDeHY8GZhUax47N5TYqeGRfeb3oiRLg",
  "key21": "3byFwJ68McCVdp8y7bFT2zSYBFpdF7gLq1Hx993a9pe21BQtoEyBbS1pX7Rumm2naYYfBJXLukCAyCWmgTfNKQhD",
  "key22": "4VBfvGtMWTMXuQFr2WMPareS5hfFJLTNMVUvSXXFzMmz6m9rec5LKMDRu4F8Ur6j2Zzp7NJfMq7hPoSHM1F426wY",
  "key23": "4Rj5bVQZyxWTAWkMii5krwPK1seKFbHfWThQjVRJwUBHURLyb3iWNwpyVeas4cA2ZNAPJcGBSYgV86Equ5HckJtB",
  "key24": "4jXC6xpMsAMtntBW8gZnwVewoUGazqLaTny6V5WdjGreuUNxbybHxK5qjegM7WG9q7MfvJnNn7vvFVudMuVnR9y2",
  "key25": "9pWB5t6JDcU82CPhXVYkF747bpJet8c3vdyFpNEPvmpdXaihBrrzE2xr5Ko4AD3gdJ1KcRgfWJjZTkMr9EmVM1y",
  "key26": "5x575HVmNwMUoEFPeSH8GMEoQZScUmbTz77vh4oxVqUT7m3ZGn2XLt4oqdyduqs7xocy8XeYptefkNo55PrrxEi8",
  "key27": "2F6AWeeed1CaR7SqrQyBfioAYYLdTpEm88SnMj9a4BxEoELf9ifxTcpKhd66kiYTuJrEihZwGJ9T6PZXnmLpoUyf",
  "key28": "62grauKUKWXMYsxvm8aMMo9doeGDJcxDAqgPRBWbfPvCnqpF6hu7BM8YdURV1aYq7kvynaUUU9LntYLVcYXLYCgL",
  "key29": "2X4CYQE5EKg3ZyMiCYCWig9US26TBK9KQiZeUgxsTtJ3o699XiYrp6GyFv5mT12rXTxLjiDQPJVbdK6QGo3H317T",
  "key30": "334QbpcCdDvBhbMZoKpbphFVrcktiTk6strvy1YztB2ELpRUmeZigLrS6gmpTWHTnDU6K1JgBwov3fU59V4Tc3wL",
  "key31": "k9xAPwDbi2QszzTqUzqFsYLz69TCMLSvkbmmbAb5H1yjYZgjdi7mXLHVQGxBEDgCiAhRXNMqHLk3RPHn6DR5VW5",
  "key32": "bvitcAGr4ADFtNziB48nSomSZLiyfeuKFoWExSdT5Fvw2HrctrGD9cZiGaHTuukaEbkHhT9rN7PdVsvWfUwEGtE",
  "key33": "27NXaRinkejpnRdvJ3RpwypgAjVeZrLjYjQwmybob5TNawcWaJJxf1UF3Bft9Nb7tKxcFivFCisUCM2ZVbST5qot",
  "key34": "2nEB8ST6unaUR3hFMFawxyqvuuaNc89eop3L5v2g4xSDKnHGU8MwgaQmCAzwRbksGJCHcMPPRMzLcS4NmXapfuqe",
  "key35": "2Gu4NfRkWxZAXDjoELVvyye96hxEnsFrNZ7GAAewkyY34bmJ2SzPCho8Dbc3eWjrkKFbTAojTZRLo1H3Fj42y2Qz"
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
