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
    "5oUGLobLrx3tNLqTGUbryH4kUCkJEojRNKiStq7jLaAL8EGciLsXzKdbP6U8HYZa12NQAf6VsGmxT1UWxtkW7Ny6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBiLoG4FEQoooq5KfFHfFNUq2c1hQ4DUmNQcREtccgEKDPGjG3fau2yRiDdnpkrMbAMmxRKZzH7HQAPGt9kngAR",
  "key1": "2WxdybJPvD6nJLVxid6cAt4pYuoQeHEeyrwxkSHiJ4qXoTfGBp37oHYehnBCSR7mS3KnacNriMAirVraztNRu71W",
  "key2": "2WsZz5mwygXe4aXr81H17uFst4REaLDmsGJ4AnaV6hr2EffLiZppor8MNFyPbLNZD1oE5SYNdLN9tVHrf6PuhX4R",
  "key3": "2w4TmcvGRN6sS2mme8NDzZ1sZQecutpyMC9EZx1Z3ytPkvrJnSbXGxw9jUVhpVS4DPB86S2uE79VwsXBzybsR7aC",
  "key4": "UuFuuPgSAEB58T81guj3ZNruHUMLjuL4gG5xmWUxrbSR2kTbo6Da9qAb1qwsPT7VzKpCJ4Lns6YMiniRMP8K8nw",
  "key5": "598EU6rp7Ez2ifnRwWuwxkwa8pQiXjzv5Dqj5bQp2UmLoJwgvX6KPrPducyJiARb7r2piAcxC8MAKTCrysxLJd8n",
  "key6": "4zRntDHGGp5ApWbVMhU8rE4US7z7P2kt26jzm5KicTiXvqhg1q9j4DaDx6Me15Jmt2Bjq9g97PkpnqdSDe1tmNM3",
  "key7": "4LZ3N98GX6sMxk1Tb5m5t36nr7QYuqbaNZv5FuXXWzDUEF5vST5rxW72TgUYZLAmy2M6M7X7F3WJEmAMcwTKRV8u",
  "key8": "2noRk1p34MAioKzKt6T7496HG8jK2M5FxgZmiMMknywhR7iniAw3hHaQunJD5isaBoQ9AoYbRsmwpeGiiTmoRmh5",
  "key9": "2ZFNZqLkz6zT4T7pKzag3evaU6Yi8Nq6h7rzs2KPPRFFbJowd8SWotyS72sVgxRCCzoF5CFEnTjsHhLcZteFujQu",
  "key10": "4m4kGNZzR6zX3uM5RruAaG3Cai3hH3aXhXdkxhfhb8NrYidg4mwTsPoBJhnaVk5VVcwnP6S6dBsG4QAVxzyr3QxY",
  "key11": "3hbTdtxu7zmhZen6vtEMPk7kMPtbShht7LXPDCDUFjrRpMSbJUDGnjwshN8fXqy6JKekvMS4MfvCPpXXnGdL4SAk",
  "key12": "24cu3PzBpT2QkRqFVyG7SmPFRAe4bdQ8sm2xygnJBruW1WPSamAqdEdnoHNf3v4muEfaSRCZnr5HkfQfhNDYPzWZ",
  "key13": "5afJxMbJ58JxyMqy5uvgXkN46FczFsDuwrLPUF9KsMDZGjSt2mcu89oDghUyS7dwQbcDMZiH74gwEtpn6rEAUMPs",
  "key14": "3tB7TjfiZ2kQCoVjiPdfAPe17KpxzKpeZnayKErHftVgNi8mfRS8mGrWBFVhd9dUAKK3rSbdmugW9V1BmArTzLoM",
  "key15": "4Ch8YFxn9crde1R5xskumX6Bi1KZcNDHcUcy3KkL7K59nw21TbTycKB1n7hsML38KULJqadd1czC17y6LibsCWeb",
  "key16": "s8G5fAiAgLkyt8k3TDP4Jbwnwm1PgDFP6RkBZa8VAhkdkV4MHV9orUaxW8yK2yjdwcDU12h4gqJkiM2DWm3UXiP",
  "key17": "54QbhBFLdLp47RoKajAS6RwRYGYT8vZtfByQzGSjbqnFVyYMRUcAuDvHfsc9pR3zLqnxRcrRKGUaKZCoB9dauBy9",
  "key18": "31886t88d4LrZTUvhfg33UMvNdFhabr8FLexAnnBfdc21qgwCygEecr7oJXUgJMMthGefA5NSJfZHMxjEs8pCcwa",
  "key19": "3yKPTd1i3KxuhPPvTkxUrqhrsz9vi2kx7sKoXst4ZNA3Pag2WHoghszKxdwjy8ZT2Ki8KRgaVfDQeXhK4GyNRNjK",
  "key20": "6SJqppoXRxaobAvo4RvNo9ss96YQBoR3u18afLdyH2ZwYJchVrFMJVcFHN5tBMyyuguJDUwhHzA1uYscBzmmkWa",
  "key21": "2TCheuzh79cTnH22e9hTk91svvR5onczhPgd1eyLGni76744xoVhYZ1bg92kyZ9iv4K6naJiTFwzb6aazBroiiW9",
  "key22": "36gcMd6HX4PE8ifntDpLwomSGvyogZZV3HfJV88xHGN6SXeMRyKPask6zZyWEre2pBXFyHSYufoXcpFkonLhFYhi",
  "key23": "Kmx2GbZCZqsQfJguHaxmaBf3d3zSXvmUcAQmJ72SvcqijVX922Ah6szFqvJPn4mSArH7EE4WNsvPuGZzny5yDai",
  "key24": "4voS9dwKEpXKPoQpxwp1XVF2dMJJnZwsF5Skqu3fWZrVv84F4D1MJUzPyVYvyVBXJRuJ7qQqwYQ484GjXQRWshk6",
  "key25": "3uBRGoGceuHT1zJeucs15nraQNiaZaL4gmpJ2D3VwtBTU17ieucMMZ5Q4vcc4acxTZefK7NUBeEeUxx6QcRhgahV",
  "key26": "65gjxLEu3a1YKt7br8pDXa997kKZh4zQsPprDDvCxFeRt6pAizHuirwsWc8EotmWHxgJsLLXEyonEbUhqPKkLhRT",
  "key27": "376wFj4WEakXFDNhUwTTQZbyFiV4Vk65vZD1qcs4i5AWQj5wkDk2SvgVrpXxCgQ1a31jyLyhRt17RYHrkRgmK8XS",
  "key28": "5oLArKRntJ1rinPMNHMCRZVwBcmsju4u3JZY1U4jV1Jc9yC1BxJkWxvdcB7LtJtxYUsNhuriyAHGMN9kL21riidw",
  "key29": "rjH6xx54x29TMGWftgydJzWPapBEYMMp7E18giWpo4aL6KP32bxGijUyWojF3djeJeBTK4NvfdCfPe3BCWnStvC",
  "key30": "5DzZQ1ivvRUZMmefMyoKnf7hUg1ktTL6BTQuhLfCaAd5HQriqpzGQe5KcaoehGB82EnpDq67fC78ydcWzjwjnBHB",
  "key31": "3VXT7WpB2aeoB7mMFbRXTHqSUrAmZsHJFxMpAMQ3doqnvfGq1zPeTgKX6gZfWQv2foxMRG7VMXBH7G9jdH9879VU",
  "key32": "jA2Mzt3Twg1foPNBsY8WMUPPxBWyqqAdmBe4J5jjATXMEVxRSRNKyVhSq34wt95Fjrqkaq1NX4JMGCuEijhK4UF"
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
