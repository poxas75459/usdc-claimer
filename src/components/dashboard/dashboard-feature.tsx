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
    "2wvNHeEmVi7zAkrvrxBTq4o5mVDDFQUZskVyaZoPyqpqDAVPx6GSnx3ahE449g6bqM5UrGTwQtydkS1Ja59h9x36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWsABrjX4aXJ7MppRcxawqngoW1NmsvGkiQyksVK2h2A6x8G6yGBcn5JAzhRamVaL39Nr1oAiMJzuJRi6NXLbwb",
  "key1": "5B2iTWESzBb46T2QUUk6Hptn4e2BfMSMoQJEeMNH3mAWHyNS4fKD46gCxaLjqYxDVHJb8FiuzbBQnpcoPaxtZMeU",
  "key2": "2uTseMU2iHhqGc6Gwnp7E6fS2LNUxyK5jYzatKwCBUi7RX8LL3FpmXceei2cA2ynnVAT8Ej7LqPhJJ1STe19fJUc",
  "key3": "3CuhpxyK6C5JNb9k7wL4duWgz4FMdZ3FgVV8ntGpvPnqrAQPPbL2uFYp93FgJskgopsLGfLXnC3Gs9VkRZMt3tBy",
  "key4": "4SLz6ZHmkVcodX3rypHDz7zG2kTQE2rDfgz4yMH6iATmyXMvDHVgYU9848QeoG2DL4yue5MrLFQ3GYu9bfvoscVe",
  "key5": "65n3hP24dD8g5X24zZrhvVV3CkkAiWAtdsgcUH7ZF1D1xs2aokrfoqmPbm1P1RtHsKyM5FeHMhP1fi7UiVM6UpAu",
  "key6": "4YXBKMoeTmgtfpMGPBY58YBMfShDKsdXY8weP1waWAZkD3TAjE13hYbaGxf9EgG9HLznbKf1M2nqUWuCA4HghzJb",
  "key7": "Vi13m6veHZFck28Cwi5LNxrEu4ToWzg3BAxWVZurameet4K1qkZRqjST4c4V6GA2SHeeDCYEeen52mhxbeww68f",
  "key8": "4sGGAJW5FvvPQx1WN5Feb7vZ66jjPXx4n2UQNbYCFMzZyscXH3uhwzKt779ugmU69mEqFVgWtdeA8B33cGkkv18S",
  "key9": "2LLmMQT7TqNAk3rRfj48RiujmKWKu1sKtWpxUJuEDD7QJUhz32zuJVVNKRJCLigDWTibBCyfas2BUBZ6RGTzNFdm",
  "key10": "4rqk7Dqs4WGujNsB7rJHkYfDMDL973Jh36Bd6Uc3izaKhhGyUxzazCbf7yRF8zw7qYjwrQH6oKDqMWdyE5vxNQwt",
  "key11": "2oNuMPFpNkEjoHEij6gfEWovsUcga17FFoAsqBA9LpuLjor9TN6LdqP88cxt3KFEpuWT2fJQvAk6NqVmJz4DfgC2",
  "key12": "3Bmt6i7xA8tLSQPRgGAqPKbKzP49xvN4E1dC3M8s7Nv5RGzsC6TnLsejUSJ2GUYichnpWb7phhsMP6tU7utLPAqv",
  "key13": "TWr2mhN7r2A9oYrjvoZxazXTFYY2VVdcTxhw5JYTCWu7UB9g2GMyHN61fQLvJFcGZjBConAmTo2PBXDhmmwvhZ5",
  "key14": "5hKAdAxKAUW9Cvs3Fceu6Wcf4AiCjdWg824HMKtGpfMjd3dLDZseyNN6Wtvk8WjUjZ4CLhtLym4VeBiRNvRxrFXY",
  "key15": "541m6deCn3u5E7xKQCbMXFT9fykQ4EjWoCqh3CfrfdkXv1stHqM6D3Mt3qEaVYmbnbbb5qNvVkU8omTuVQey3NEw",
  "key16": "3Q48H7snLxYvGs9rv483fZ8vYdhmfNTC9CM1Att5ZW9yUUUQBN9FTFRaVhc7k4ozSvxVJBvFJt7wtK4hEM8kKwog",
  "key17": "2SRKQhQUxRqhewNRasQvV6YqmLPmozPNrgYmSuDQhxDgnktXekFpVNJxtQ5TtDDUVYSx5NZvD66UcCM4raGTidtL",
  "key18": "2Hbpm4CtuKPrpFUefvJRsRVUg42rnp7ufbFBXN7VH5D6W7Frss8ZzgpHbdxJpmDK2ANc1MUjnVf5EtdUnxuVgSvY",
  "key19": "5AxXeQQJcUZa66vE1dXDMedtaqpbLZkTLuKogMJjP7FYxo6fkGNqpzir5TVwevdSTWdprorUonnVeoDryTtZnNwS",
  "key20": "5a5wZQPTruaxQyeTmWGUjFVjdHU6fehTJNRdsppUmuv1zJVNBkJnPsQCWjsgDhoxnK1BagCMihBHdbutivhPJhQR",
  "key21": "3bFTAm8ZVntsHTYY6LjYvTUhddFx1r5wZ8Uhez3Q9ADcxi2HBZgJRVUjcFJK4BLEkhFkbLWKCVHZvAwZhk3cMxm7",
  "key22": "4Mo4M14MAe4oYySyWmYWFak7WVqZRfdtFePdPFbgYyJem6PpK5i4Q9eN5RAKYK8hVGDxjTUmNnpXNPGw4VPdgD1E",
  "key23": "3Nx1yBaX4jbhLGizbnxqJr4KJapGitJ4k7Nrjfiw5jPeCaLWB6bFAnXk5X2YkfBofbeZanmKfsey3LnBTDFas5pu",
  "key24": "2oPX7QWsEpTzZsReVe8MJ9MDxdNCa95BFBPFXe1eG97AuTrGiN9EjPfuNKXYo6kfd5ANEkEdhMZhGz3Z57ttvqwn",
  "key25": "3FuLj73HiV4k9SAMCbhQb2NJdoJyb1o2KcBnJk6vpLGw7JgwHuHWjnVkPgay2TjDwZMEvnrj5ZpoA6tXMyYrPoNq",
  "key26": "4D57qkQsiufmCB7GLEadtaR82dbTZr7Z9Dsg4JwDV2S7tJtZUTBytLajas8aphabTT6sS9khuPxRBX4QbujBGk63",
  "key27": "3aL8gUJf2YuLNbaEnA5Gxq8yG2vcArb7nrC6ywLN8BMaQiGiEGV7bLJVAd4eWEBQEpPCh4xyALbNgrDrKc48VtC9",
  "key28": "2xGmUdqauwktzsyACP5kcievrRujh1U2Df1MU3YuGt5wPbALhBmaJzgVCdXcETt1eLKc1CUmpCXt9JSKSEZWeckB",
  "key29": "3nLQRLU2TvHGaXty8D5V3CFVKDH7Zyv3dqsAvTFSZUJcwyb4QH6vdFMKCTHnhg4CMQA3VerMmeitdWMLUqGRpocv",
  "key30": "4Wn791GhGXnrSzQTHSJGAMn6RdZZsVfBcZWuiM3fh5DAnKEqECvB8EfjYAo7EniBueaSsQ7oeADowPbqhHewUQ8q",
  "key31": "2wbNdpvMDVKuMid4Sn7CZneXCcVdwhBf8DPrprEFmwBCGUymRJPxCHHzhqkgwGZqMyRzv3EtaZUdF564TZXwDsGJ",
  "key32": "4tvdDpcEXCbsmk5FCn3KCqbNqSTYwLwQMExQBeXEG1zpJVgQD6PMSWNnvgnzZvdfVkznypeTViha1iUj6KQAsmfJ",
  "key33": "3yrVPKa1TS7tjBR28SGKwc46sUjRPsTyP6j7W9cGifHs4VoLYXarreLAgKVQWcnCQb61AorHndbxFLRZBen5Ne9K",
  "key34": "4Ri5ASHpqofDdtL1B5jSGSLCjEFYCsTxjBqDnPxmdNdeNrPh1ioDpUXGChrZzpjTzdscZCiU4wWaVKiJ6JF5Ev8G",
  "key35": "YrLBDSjP7fKdaPde6yhDMbMxAuSesHnD1s4sfG86ijWRUB1dKJRam3WfUeXmA1rhJd6RJ2hT23djHURmeDrwasj",
  "key36": "vaWhanHxrowon4weGJHcs3JbGxAyZ3V9p5N2nrCrW5fxyDipZax1XriqhsLsZd6pNG4xZZe8qTipxpUcGhk7qCz",
  "key37": "kWHzj4VKxniiLhkgKzJhu5dFqy6WfwTxYX85yQ2zNS2Z96pPnnKUXxXHSEmcPvaUwFoE9bQG711MqCoEHL5XZBR",
  "key38": "41rCaZN8hBq3Zs6uVXtH1bZvxgwJ3tuVYYmh3FxRH8U4uTmKSr6CE1wz8Uk6UJ8MZo9HUYU9Y2fjseugkmy2tAJD",
  "key39": "4YkuiSa2abC7WgPRn4ptXSXfwWmNmbEdo2djSvdtf1sRr6G4RmhdAkgKgTQV5Q9dMVZeST4aGNQdwYcaDXafvRxd",
  "key40": "2j689TnG8VokVd2hxctQKyiYx5SqwkMJeZNH2knXAHrg5gPRQBRvXaqyDYZZ3h7Yq9tnsCBNQxViJBdGaGwjpgKa",
  "key41": "3NyKeEHzcfxyWPKC1QeGqbJfgHLvMnA6HfT5PCM7g5VyuXXqreyhLdpJV4mPvNyuVdtQLPfFRCJ3jXX8xjz1BSML",
  "key42": "5EZLtohEJDgGWVsgdkfHXcro5AXUkwehnB7ZRe6pPGhRTdskjPDoFezgzwLnk8R7EoucSvnLEzhEJNsXLyV1M9Xm"
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
