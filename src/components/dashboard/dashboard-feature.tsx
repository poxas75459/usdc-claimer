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
    "24QHvfzUYDA21P9fLzkiUMs7TjiTLj6RWcZwfFm9rbuCNRKK6RPbqVYCtmwFXhfdQ9KjvmrQSR4hc7EckPupiCEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tfDC7X4wTnxLvoSKSVbQhq9VcimkWJDgBC6r5nfggzias5nv9DVnN6LDCSGezsGsAtEfH7XNSNvuNsBvzXScsb",
  "key1": "5AwW1J1LB2kpEKsk6ioswsXDcgF8ameUh2kXwzXs3eqAJmsJBo7benoKBFDkoUUPegCPZuGTcksjt6fifbZY34or",
  "key2": "3fxhb7S1PzsEHgPuimb7b7fjR88K5aRrfn188FgS8aEKv1zMCUKUvcNYJm8Ydh4nmwg4nvSMT2cC1fwRonTrytKp",
  "key3": "3Sdp2jmBH6JSWbZ9npc6wNDQxC1CX34Too749TpyHX83eHRhDRcSQxvvzJ3fdPUAuX4yMLxoBeubxtMWJZf6cVxr",
  "key4": "3vtbgVu72hxMbNVPNG4S7ttoHUQXyJ6ojd8krdxsrpWYqynjVXGTmQfj2avfUCrqrVpfsV3XYq3EnEkN2UPDxSSi",
  "key5": "4HMn2cReQD6Fmh8us6uG69YPSrpwfdcN1W2aTkXdQudKt1XHpJkE9WqadJP54HtQEpmdqv3cLpNjE8LkYqNah44Z",
  "key6": "CT5eQ1TB8J1ygegENprx65oNdfzXpDrSbt4SdmMSf6cguLtrrYSkTgpksz267Dv1HsyuFA1yHRMmoQsJt7VtMeK",
  "key7": "2o3ruiFmREjetMhaCVpeD5cfsNzbvNEn5zqCK7ZYVdhgFbveavLy9m39WRTAQWnuk3sLnUVQqFHeWrPsq2JVzZkY",
  "key8": "3yHXeLqDEGPMT1Nyxu77v41NSJKsZbPa1ckBifcib7pTUEeMrfHmSDp1WBFrmPC2xiCfdn22DFZcU34ZWbZJiJf6",
  "key9": "5oEMpGEtpUaXCTg6hx8r3vCnR7nEwi9FH1MN884Jx4SogX5nVBra16soBprkMUoCBTniGhr34QAvxdQWqSk5PjPS",
  "key10": "KmtkSBvp12FeXYjEPCPXwHZNcYT8sxA3wkJkgv8yJfbQUqUpc4kNhqspPfjM36umw5twCzrBSBSu6gfcvL6uRx6",
  "key11": "Xmi2ox2READ1X38LMZr2wGAjDfTZvwnSupBFZZSpVi42YpDRxhWHZswg8UztEjN75RZJpAyPVhJL1VG9d7VujBk",
  "key12": "5v4PxmqWMzbBkCFSqzmsg4PqijRZqyTJmtssA3zEUBrmx9wPprKtoLubQCFFFzWa7gmzWRm3hXbhWUBDmGyh7jY5",
  "key13": "3ub4GQYLoycZQrkwjQm2xJJqhDFZNFSMmGtaqQBK5BFAK7EQTbcyMt6pEMtp7erCTTHQwRku7dJqsv7yCzbEH1r9",
  "key14": "M1cvhXc92VkqVw3qsQysYUC4BuzH6yjZoGbGVu6zK7UKLwJC8F6kdwSsf6UyPyQJcYTNcrLeXAeJnNzQTq3ikam",
  "key15": "2nwbTPyxbWwPMddrnn13ZsiXLBX1vQYh5s2yrye5jJgYDisKZnKCLmLcrBRqqV3Pjvjdh9ckt2gjGcYySej84yyi",
  "key16": "5vdoHXJ4s1wUtFRTkYmW1gBmkPSfSwWyi4XzcJgxpSqiapEDBhbNJdQiMrB9PXs5kDnGn672hYYnfhWsthHj5i6J",
  "key17": "3uWiK32CdV8A7S4zv9p4vWWkgzn4LKB75p19sD13aYCudrKhcWmQNVHaeELjPmmiy22cBsjT2qnt6u32vX4ipyQN",
  "key18": "22TuqxL6FmuTootBkrKs618CMZ4kaPzPnZU5nW4JxeeNSpCPN4RmAUqJLqEp88MKNvcWWyvPL8ae8bgSKAAPDSrB",
  "key19": "TPgMVFqbUsW76B4oBiNcdaSW1Q88YrQozVs46xtvtcyAVvuUncUSuupZ3ajaEU3imEDqumCvZpaGMeJuJy5Sovs",
  "key20": "2jw1Zf7WLa7cuU4niNayPhB6ZFg5UH6sZGfHtpzrFg7aTSfbPA3JsMjduCo5tJi8C9DomD3zAL2KJBMh38HmY8vE",
  "key21": "3mFcpJPHsus8T2sTyKj8bJrvNjVaaneDJ4kv9PJEYe21uLp253oeJwyKSgoQCAW6RgochhoGqzKgYxufVKvnu313",
  "key22": "4BWYYUGmCquUGKEAXQ3T5szcYZcEMKP67BMDZagNGptZBmFAXzp82JEZKkP8Erhh7BQAeL5pVVP2n18tMoxqiP34",
  "key23": "2UMtMSZ58gFqGBpoVTGHyajy2wEVPgp7Y4FXWUzAbgELYrGLdMNfcvM5fdmDrWh9eRTigEDZL9ivqfQWkmdJXU5x",
  "key24": "4KDDndEx27ffWtR9kyaupgAL9xSVvYxxC6UCUtwjaqN3fgvZ6uV6NgXCbgNvgVU1K4wqyencZ88n7rVyyBS559q5",
  "key25": "4qsfZcpYee7iPS6VdRnbodbZ6PHGT36VvPns6xSErg1ZYdn3WdMfDavADHwxUzTfvfp42SMSC1rLqvWJhQM81Gzk",
  "key26": "49gek7MtYpyug48iNjyZDyiiZ7vze6cmcBKeF3viEqac11YBrwr148aacwobe5RYDxh1tqh2SZvyEHysifzCJp6o",
  "key27": "57Jog6ZhgtewUcs9kKnnsnnWGbCxwUcfdNBS5X7esgrPsiuqjYuYUcyL5HVnjNJqW83VwRsoRGT8THyUeGh3DTeQ",
  "key28": "4pAUDRo1xoXi2EWXhN9g3SSs3sU5Vnf7CoW6xJ5NsjchBEgUowKgTN3CMjmftuUBq7JZtV3y3xKVQedhhCfU7fci",
  "key29": "LGh9b6bHgeZQxyTUy3jQpQnDsUAetDnsvgKL7NdGzWv4xYsddjSZWb5qgEJanUGHaGPQ7zHdm59SRg7j9GkjCdf",
  "key30": "q95X9sdgn72jvjwCdZno3ueSMwRNFe95yimP8EMZRtCtNnUzPbJu8BZBj8qkv2tXBtaTptXd7HS4mEJmHCyquhy",
  "key31": "2yUdwewuaoDVyrY4ZDM21YXTSUCXysfgKVvGLZ41feeGV3R9Cru8nzZWTU6LwYZpiz9EQPJT1JFgsLHrYUecDrcg",
  "key32": "3a6V8TB1dE5p2aLkWqWMtp7a9fSc8BKcNtrhQ1q8ZyAdkssHE5hCjo9SVXAuToWmpPuxtcyViTigtAc5tBqERYks",
  "key33": "2MdTaGyA9sm4d6dQgduiwyHUtWnB3A4ByQKMoTT6Ev1U8sKVqPt3X1suXyGnECFhRSLXeJDLZ8bVhKDoJtQEquvy",
  "key34": "3y6zMK91yrv6GXDhiSo739dc5xrkKXPacA4hZbzj996cnVFjZF3sk9THgjSMmKM5dkJuHYLo6QiPjjf93E7yAg4P"
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
