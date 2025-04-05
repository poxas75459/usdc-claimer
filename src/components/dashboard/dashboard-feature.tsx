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
    "4dB69jV7x3vcbCzusy1VsxKy9GxdyzDSUpm9DK5wcRypG7DWroHX9xE6frneUAPHVEokvbqCoo2CbnWNi3vYdvRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626MxpAwCo3TfciAZytxe1C3eAYCrHfwLogLPeoXZHEiQ2FicmxDsufwGGPwmvKRChfZYtXKbeJgH3BPJdSKA6cU",
  "key1": "58HGkuQJC8tNpaHnN3ggm4p6sXus3cMYpFsqeUfpKfqZv4D1H8SZ4eudbt9SAkMabZrLqoeMQTmgm9qhTgMbP7dD",
  "key2": "nEpqACs24FvxZd8wW5wR99PxQpJtmC7xPqcZT5LBYqrPrzEuVeCbEmhC7rc4areDjH2FUvABpW3pApGK6pL5bSk",
  "key3": "26w9BHhHWiM3DkrcBU19Uv1fEZJKhdbVdGMEvLsUKMksJrGv7mKmwuiXi4ktZDHvof7YR4ahXj4JojB435M29nh7",
  "key4": "2ktoyh4xRP9ithxSdo8PNWhbkpwt6CfDApkPxfLoGv6osyuGzkFywnh4PRsqh9yhmGGyqk13DDKd6gG36L3go7s5",
  "key5": "gg6XmgfmKRf6BncSxBC4FGZmKPW1KRrjXY15ZF99U2FniupNiWzPLhYXWkw1jd8zp3oaJMgeMXPGpHua9trKQ4y",
  "key6": "AqodHow8AwCs5fZAUpbNTuqKwCFCM4uDpeTxTboqp2vMxwuTEGMhMtQyRihHZp6H8hLwDxGNczVuML32xEkigWD",
  "key7": "5PE7CRr1mKTw5xWqH4M4UQ6QPu66A54NhBenBQefjscoqCzNaXwQfDfeUq97sq64GpXmnue8k5mhBNTJix5h4HVP",
  "key8": "TVVKdevJ3B4KV6gdqwDX3f4tMs5JN4pk18dZnAbXJzUoQRmbCMehTctxHF6ybT8F6ZzXizJpkhAo3raeUx4quq6",
  "key9": "4dvucbMubGMXrSCsSm5tjHJ7oKg4uvxrU2pLgVPuMWtEVGU84PTHTCuJ1QH2p7JQX1GmzF95Zskka9MjW8ThKEbm",
  "key10": "5gxHuXMh3sk7yhkT3zt3qgoxDNzkZkqX6ndZaMLmUcbcy3NFxZ1aqz9zBRS1bTkFqPL4G2wtcefs1FpCWq9WWHnR",
  "key11": "5yvowQL35DcUbtuSGH7bN42Mk4xtyZXfM253v1BanQFweLVoWH6qAoQrNQ1y1FhAvUtWekQ16jbsJAgT28cw3Peu",
  "key12": "3A7TVmeCV4yHovaQmdcbbW4WgLJ3173YaJupCh4S8nRfmWCR9EG31MqvSFKFJ1qsM8nFgPyvNCxE6wFPuxouwS1P",
  "key13": "2q3UKtDM2pL4RZK7D3U5YgFquwXTN5DpGzsUinWvyD8bK6HAYfuE7GzT185gpEL5qsGTrfU2z63X79P61XRnFas1",
  "key14": "5qxYs4UyhxhCFSyxArFGiVAL1ESAdUFv7d96ab9esdW3nppRTBTtUV6c11xW7vYRfpQK1ku6vRNFRFAxoyWzwHq9",
  "key15": "Kxhmz2Nk3ySEfNbV4nvphS8siQ3SjrqFQeQBi8d8ambuNvrDqPKGRPSwGCYMWkFhnYheXez5dnnBFcTFUaXn3v9",
  "key16": "5NwPccrB5KZBzthX8WwGxEesqzhjh3tEr6py6di9sMT1DcBJZiwZMiFLaTR3ZCbso6pPxRqFkEff7dHkwLwLqufe",
  "key17": "uSPJxgQeGuQknyKTRzdGCjiCJXJ3SHiVs2mBpEfm5FNYstipjzubExhCiK3ZQgjf48r4tH793sgzJcgCHLitktb",
  "key18": "5vP8SBu47dRhzpwe5v2xwdQMQvXkoz9epPcmLgWYLasCGi8kdQBXtavqtEDZgYQ8cyaMf1w34wXquKbHUfWsQB3j",
  "key19": "2ypujVJ3GVxivnZLdoiPQVQtJXzMbgWrWA2GqE8j1AxKWZzmCtB3QYRMkjGTiQMn2SsLAbzmvbB6zfcMA4gKyeGg",
  "key20": "4QfxFw3G5bwXcAn1YAYMkYn31HTnEy4EfHhCbqadbyEwMyayWCo4viGxLZSDEQX2aayVA4B7rth4foY9LcoFgY9j",
  "key21": "3FUQzwjzNg8zBgbUNBRQDkLKx91abju2S2PVio77WQLEa1awAubEiANjKbPAazQBboBYmBTSb5WzBN7ChA5uMXUA",
  "key22": "5GAiewEXz7qWwivbPRL1oSBxqRfecgjwUAB2VWcYvVPB4VKiV1cNofSmgsEmFbD9MU3STRYPw1iAmLBqG4bpr2Qn",
  "key23": "27UvonAchRC4mNhQJiTwk4Ljh1anUaQN7fvgPXeadMLU4stvU6C2kKsxqb6bBWFipEXKKhpcinpbSG1CfFt7DyTd",
  "key24": "3zbuVPhrj7uHQzuZYyxWfLdZu95dWuRHaWoST1zGax8HUYehZuUEk8zEv4ZATAdnNkqZqwh9HB5bENPZ3y5Q4Kgt",
  "key25": "9wx2N2v22pp3VNUTBhLB48XLDNmkSndE9jndN5fDbqWYBB4KSLHCxBBZuAF9h1oySYd7WKdiBqbJDBAvJ4CfuVn",
  "key26": "58iJWWG1x9Pz7m8zU94qQsUckzZTcr85zJBPwwojzh6vFr7UMwCadjc1twk2vrpjB3MMR5s6UPn3qMqd5BgtKNqD",
  "key27": "539w7ocDMyuLRcE2AxR5PSBKxnv6nCL3ZxZxb4AgMCfC5CLbXvjDfzCYo2LNUruscGLW3dj2yP1P7E5GsFYDcMqD",
  "key28": "6281WVZzpiHjyTrNTthuWB93U3HyhVWuogqfYNyb2DfjBp66vpE6aCSxfSC8KWhrtB4Uga9qhbccQ1eFNFXNnEeK",
  "key29": "4ZZ1C3469hm2d3NwRMpiMbXssnKxifbSJkoyFG7srQo9gAWStwFpqFMtW57yhrV5pwQnZYBQbh9UfUewk3NX3dox",
  "key30": "21c9d8y5j4WrVifwRF7HBfwEF5TgX6PM223DkTpcSb2pYQVxKdMPhWaYzKJW1xRntjgj8cCF3MaTLGYBnsNSX6wy",
  "key31": "3TwE1y3t2sDqbKAuttZhc2yUZ1ViJGTGqc3jQFnM9EwFDpwY24si3m3xXZoddbmtac72vW32HVEbkyRDTCsp1maL",
  "key32": "AtJuHoV9g3E9uYHYWaaHcjDsECrBQxDb2eRcnra7YW1xbrZG7zmXRRAeQQAWvudL3MKT4waoUnymyJaiPKE1p7g",
  "key33": "61k3QzZuA9Csq5iCnmHhqyo9SSaBSb5ADff2oykbwHEBfYSh5RqXUDJB3gCYuXWdvHVgYTLFRUyTn5zf7kfzjbqA",
  "key34": "3YV7GayKnfeEQpAaQ4zBfzDeY5bTaaW6uFjhSQ3FLDoQb5wQVRGSf6DbiA5QanP3okghWfiTYviwhjupdeQ6TQPu",
  "key35": "4w5qpckB6XxHPZfH6HvTPQYxrSMnnNB3cgYVXRA3KACFmSo5G8dwxJpehkr7FpKay3XzdojFUDTiAMweoH4zbA5q",
  "key36": "iy1ofExGUZ3esWJJnFWxbnJzciajCWwkzD5VafKYcZP3ivezDcqiaTuHWY1P7m16mY1iGUJpN15xwrvnkKMeweR"
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
