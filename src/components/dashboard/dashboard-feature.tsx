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
    "5iZFNwy4tx9BDripKdUKuNwYUDirjDm9hu2V1FXTnXNpKUeQ2sQSTWGtbVwJCuyjAWcMnDzhrz8DmxFLjEKAHs3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8fcnS6sqYjiT1wxNzxSTfXhnuV6ByvKiECYfYvW5U46jC1asLw71U8DLsFRo5C39bbJ5XLXWkTfNKmGz5uGynq",
  "key1": "2zEVRT1vJUD4yHV9cHUvLQL9gkCsGnFSyPDEMsM1PfKYk9hFV6bUqz1wuiRpuLzXcSuHUkLCEcsuhdC192RN91R6",
  "key2": "55usnUzeQg3LQFSyDKiNxGbgctcVw2QexgD3Q1N5jWGDULnRKuyfee5SSf7js7CR2rS9YaVBTCT4LUKv3GqwUdYh",
  "key3": "3c51wpWYBiK8sAKUYrq3p77t4GX6i45D6buESsKJWj43D7hdZ8ko32pnMYZS6MnfUtVTydGfC7xdUfsDXXtMGw8K",
  "key4": "3V55HaEck5wjsnUZ2zu2VQAu7132ZXwX3yMUSgq4kur6pwcBwCFmYDXkuW56VGrCKfJss1sNByE9yeRJVTpndVmZ",
  "key5": "3rkiYch9JTJyeDxjCxBxu1iRizqs4FMtdyyDKAcXAzFd18S7DDrzisngFttYi5zztg583aYfJsbrK1D1Q1Je4d35",
  "key6": "BR4DmnLSfkFuZVjMKX55wNmDQosgPrfuTg315qeTEm1dv5Ra1uQsar1owzL3bjNHBXzdhDk3LQFbcoCMf1st4Uv",
  "key7": "3LwjdcnYbxqGWyRYhNgqnejWzdWiJcGQiman33CZEumy4LnqJpdqATMtfh1R7ZkMVzBypjZHp8synQasHyRV4M7t",
  "key8": "3xKzEUbSgNjpx89uGtcX44mn9rWtfybdfU9YgVnCw5C2wC1oEDiMyaAKNpGfdR5HXMpPkfWqvCM1s3DoSng7kKoE",
  "key9": "2z7T4tNKAmdHRK4CeZuQKNcbiETpkHMDErdGucGZ69oQLZqvmBfvHGMU74ZzB7u9J5p8Tz99bccYe92EvQUEgTu9",
  "key10": "48pmUxzjwLrTbrpbzZf1CrdcV4S5LhtpQ49Sy4viPFuWu4Zg7FPYcDYBa6Je6CnTRGACDfm6uCkP5oSXr6aHVgfi",
  "key11": "4C9GYduJUYVBaBj52i7ZRvrv83NU81gC8zJ7zswyssiB1AtrQek2zqTtq2WiZbv22i7Yeto4WnLsrBsEKB4DCiCr",
  "key12": "2KQPiHBQDMDoSX7Jz3afYkNkbS3jTsVkTNoa1UPwXoXBXEkZHPrKVjpnmVXKMTuLqTBj1gLkXkMUpuPkDNr5GW9J",
  "key13": "4CJzRSryEp5yE1bYRbqYkV3ipsGNmpF5ewr2Npu3UBvnLVwf2SJ2rbHKEL1Yvbp5Fei18PSQ2NqGPD7PDH6PPXod",
  "key14": "6DmZGvD2GmEQDWtDnT6E8n41edrLABngV9u2Q9jBc4yjJs3Aeh9jymb92nZEPMaSJs5exkRZVSkKZBa3TiBAG9A",
  "key15": "31AUEBjD2ghdsweHhHcecrFjYtvarut7a5YjQFZ8H1hZtrofyyn3PBBgbJPhzZ3ZqUy3tivUGmUYU4yfeBF92McX",
  "key16": "3NmNhSUXHLNzikPGTvGQZBg2kQBSreTTkwFpMyHsUWrY2dQxu2yQLYyvt9exvEvPdWomoTErFVh2wH8RHyELLCsK",
  "key17": "DmSnVgbhHisWPjzXCmry2kopS8hD5KLJp1FQwLiMqvnvTSgnGH9SaCZTTbhaaZiojmZBs1asonV66mXhkLRqKyc",
  "key18": "2bUb4uTRyVphWuT3z3YhCUpvgRwN3QC9UAThzocZ2rou4H21mkwK1RDhDG9zbD9SkyhM2XanHegkf9avGgTy8MpA",
  "key19": "2mgAPxiyNtNBJanpAD9Ge9z3w4ZKiAZUyweCnkfi6e1YjqBZ6NUtWZKqkh6Ggpy8FsQHetU5yDRfbkLeZbDYWb2R",
  "key20": "5LQTPYu78CNvfVbTGrfNaFhssy8gxGQJ22pWXJjNjM3MtXK2PohPiUo5UEncvC7FuSER3kAaDtDNBunag3VADmg3",
  "key21": "2Jr2wjExwyf7VqppaSob3ckBreVWQLUWgn1MGkzZ1ojHeYjqZL2vdbyjMwbsuCgz8wwbpi8yLzxk2YPR9YvaALfz",
  "key22": "X65825tFLTqfdeqS4LBUS55btgdhbAJTEhDZ2BGxDBFrrSZL2D74AsK2Qz7ZwxrAXkjsLNXkCHgWUp5G9oY3iGJ",
  "key23": "36uPaZqxpo9EF5UhK2iubiRC36xKPZbQqwToNkLhBZ3Wqv1p7ff8rXWChjb57wmwaiVgWiyLRK4RTD1nHgqd8dta",
  "key24": "M2n1YV3JCjaDp7RQgo2fyuxD8g7kPk2SdPALHfsJxB3obGMvRCg3RTThKMKBonrLybQ1vegrubg38gxPYScpFqf",
  "key25": "3QfoGcxGqMThHBamw9dnJG6HfrMRW7PuvhAMcnLaVbKjzs3XECZF3zZCfybk53uUaKHgptBQQJ17gJRwwsMq9EMn",
  "key26": "TPAAu8ERwfazUnYjB3rZgzoXPWiLf3iUYXZ4PNvrtKGKztExYGzjGhEuXsKKj4X9Rfq56t8WpZn2Ut9v1kFtY9v",
  "key27": "4Bfr2xPBQAswcBXF16iFrfLcEaHgxw4WJgxaQ3cUBQa7JxeQ42ALUBepPFbMHzWTJtJNvQaYvVHXLzxoGAQKwt8R"
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
