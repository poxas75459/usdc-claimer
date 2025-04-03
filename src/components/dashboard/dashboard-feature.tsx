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
    "2Sd1VpcCQdz7VJxWf4ByN8VLmC3Tb61kGQaPSZkD63zTVuDNzW3gZdsWEM6yjuyQivzfPH9GLqTCRG1RBBv2MdLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dY5eMZGskK8Ufg7an5Bt43afJ1f1DuSfNcwKFYHGdcK2bQhbS78gYovBhTWbKRj8DbcukLmtKpY2RBEzQQPeHoU",
  "key1": "2mXzRxBToDa2tkFJwDfxqKqNVxF2TSiRYNG4sAKbD1ZzW8h97iZqPSffiQmxde71S3DCrd6FX3UyJuRjK3BD7NYq",
  "key2": "4YjMQK6GSNN9LgrkkJkyuYAneUYRVD1Lx7k9D21kPiDzaCyAf1HJgQkdVGr83NPkuQnap241gTqNPocVeYrukKyk",
  "key3": "2wycw34anNbm4tKnfVfBGGKiMxDFSK2wQWRHQLR58aPENScC2VhWhsJmJquti2Aywepi1EwsusJGAjCk659Wkq5Z",
  "key4": "59VWGJ6aiprxzmPh11u1A8ui6pm7oAerj6eppVaUxCc6XuN9DPVZf5tRo5kevoVjC7UcAWHAbbxJDTNAmEsMnpPv",
  "key5": "xjvksA3766e7nRSfGQcm1HcezUDAGMUACP5HHUrTnSDbCTZfytJ27ugzNHaCcdBz3Dje3vHt5nPMYKGotPqAJCV",
  "key6": "UvD5ZabHMLdJj6sJu4pMB3pQyBf23FyVMXFb596MTzYMdaUVmuyE9t9oo2kctwXaL1SC5ockzK6V8Ffms3w44Ki",
  "key7": "51Fphwko5GoRPHnSeA4cbmCLfKa1vFEkWd8VMMyyZnj2yub41bkWCUz4wV6RCKDVz886HND1pPWcGsP2qV1YFmdS",
  "key8": "jsrvsZEPhj4JfMGK2fvT9uGGTqRWuwg9cnAvKGnS2wA43B8d84NUSf1Azg1bPHFEE8VhmNTzbLBr9Ed5JLAn9gT",
  "key9": "28cPfjModRY85fGerc6hCnUbKmrzgdQxT6JndwrUKLJ5tx3JmRF95jEdXB9K4AFtWQkbXCozaeTSy8YsUEsAfPjH",
  "key10": "4nLM7vNZGYxTSbU5AogUPFzhuGeYSeDnthvFqsYscQoqpEsY14zMoJoi9utFnphBdiS3YmeZBDGaX9QUg8S3gE1M",
  "key11": "5AfsRXpmV6uiKciLqti6pUzP5KAGneDt4YM8jUUXo4czJfk7FXYJzDqHeFAzxQbbPCNpHUBkVuk1N2TAbhhXe5Bz",
  "key12": "2oBZq1vc29pFMohaKa55ta1M9a5WZ9sQWn1bKbuRiPnkv7Uc8p49KQywgjsGqgUuUoRGoQjh3uQr6bvio2QNVeKf",
  "key13": "3nuCGRHpiB39HrAwsTZrMTWFceX8zXNGH3jaY6CptHyuqEPwkjUp5NMX9i2ztamYwbuuMK3FSHVnN3d8xZedkD5P",
  "key14": "4EKG1eXLvmVFZbuS9Dqiwpx7xqcXFuS7AxUnY1G5PafBzd9j6rZhP4X8fSQJZt67GupQbgMWVu8XxwnsnpYb3dhF",
  "key15": "35pYje8iCM1UfvT5bUC9UPpuEWhaBgTWy2BdfymUcdm51Biw3K5F7dWw6ahc2urb9FEaizc8qwGR4CPCRuU1VWb2",
  "key16": "2hJwAMom2VCAk4FVFtvz8xS5bBEmUbEP1T7RQbejF3VgjcE68kTXhKK5UwQsvjd55VFW9xv62eaU1q5cMhvTHF1",
  "key17": "3LpKYNvdtJoQ2V2ZAWHyP1GLLNsVQ3eXVGPXpXeiHATZzmu4np4wqx6RXxDnuw16r2Ffpejyz74dGE4Z36hkDZgp",
  "key18": "33E7osL1sRNDrrAmDV7tptkqhx5fbqKGdD7wx4NTio78dzprmFuBm9VuZmXeQo6mWLcA9VJAURWMs2NUTY8j2YV1",
  "key19": "P6BxyYntEA5eaEhEz15QYVCXHbumVMrZxMTpU8aSkEqPMW53tD5oFmw2DojiMAC4y39S3DHGEXgWMXSTwrM3XkS",
  "key20": "iMSECMFbfXMe8b2RynzDSvfYY4BAuSo43GJKzPTJmSTJGYBKwz97AtcarBjsAgqCK1skiEn5g2UnevAJ3c6MqSM",
  "key21": "32JAYxqE7n1TjvxoAoxfAfUm4fTgUmb7SqovvztGvhicHTUu1tQxCLcRJn1eqSNM1fx7ZaGT3hvffkyq9WKDfC9N",
  "key22": "2JRHYu2vh2Z6H772iffRTzwqVKVKFkhWVo7GAEGeZTmu9vUa4F8vDrpBqj1adUcJZTdtenH31MP7JiNGkQKiHFig",
  "key23": "2uqvmWSbWiog34rBJzDJDU8HrRuZkoejEh4vr3YyTXLNeJns9R3MKeUJbdLzo1z2xmXg7fj17T7edvK3pFbQyCML",
  "key24": "4dPUFrg3qtqksJDmX1pZR1KRAAQkQDHqeUkxzYJqCR1wbVsJ7V4JkJabkzJA6QhchmA9jFt2Nk1mXNUAgzt3g89X",
  "key25": "55tgWKtUfj7fibrBuX3jMn6E9mxtMLqDKK78iW8v42sKfNCuHK1XVK2rttzfd1LRSYpaWNku8hRzTP9cq3u5bP4c"
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
