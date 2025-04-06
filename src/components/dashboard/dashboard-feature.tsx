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
    "4FiaaJ2QgGndMfQ4fNNUdChSAdqPSaK6izg8yTzkVAumkdmL61zfo51UfVXT4UPAoyc3NKHeZb6VCdYEMgDqsyAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MdS2u6MQcMDiFSGd6qnGcYAjnijBp5pMvUz8Gr7k7SC19FJEqWaMYBPMvHKF12SxzrV8hCZiAQrAfuQzj8CDqXy",
  "key1": "3Po7wTHpfwkrQ7g44FYYqFfyjFXGfkudPgaaZPYuLvgdL96hHtBioCq3ocyfZtwhHbYsQrtfLDcLUrPCucJdDRtq",
  "key2": "5CHXmPnrZtjhYNhbBrr9HgcN21x9yMgQzE73gyKKet2qbMH5MyumN1bEAycHJzdDGHjrNHhmnykxh1gMKmTDLMGu",
  "key3": "CHMbLbdGrvpiyTKg7ZPnSM4PrPLMt2ozQyna2af4D1BtzcYzCxDsSh7JPp6vABF6yRDw3WggYUJD8sAGsb5owyU",
  "key4": "5uaxRY9uWZQyGpcjHTe6fW3gUbEX7fEnbhTMU7VNnWtfevoLyM9gjwZzPQ9NJFJG4WhGLJoYVfizkvyUM8JoRxXs",
  "key5": "3vhxgjNCAa5wbFp6j9j9HuZWnjm7gpRyxCozR92arUq9PAaJZKDGhrEsWZa82JM9cYKRqLC9BEqLTCJ66yL7RnRF",
  "key6": "3GJRq7sFaJPhU3yYhh24tVvFYFfzw5XBptpRaBo739W3qMeqTE43JVrhwNVn4kweyyfon7tZo2gNnKUFwrdQA4sS",
  "key7": "25DeScEwYn1kmFNqCzWAe1uBZxYdmHYcEte6YnFaWGvMHXZVQyu5ZZPZtUtWW939fLJaSjRC5WMf6YHTuCVQGZqp",
  "key8": "4vkTjbahWnUNjgbpSrbZDmQhWWJSRL1n1wnv7P3tG6RQtrFASqXaM7HUYcPmzsT95he1VW4BEHKfqmEjaEKDVP4c",
  "key9": "2SgkdCnhBCpXBmPweRddnoNZJ9Jsyw7bo7r6PiGpF1M8eLu97A462rFW12SCTwQgjU5HAwhuXK4bZNLPPthqKySC",
  "key10": "3FmZueUXYvTrqLvUKBoqB5pzDqpCb8MhyXGRoSN53V1MRKSCNTYdrjDyomwMHx28cap3QBsnKQdnpkWQpX9FWZwX",
  "key11": "66FYAffdMwsFyU8tzFAx1VMJAHnB5KZnQPjjGTG6F8rBHVsMgPnY3m6p4jbH7HXcFzxJgJfAB2Y1ksKot6q2dc2D",
  "key12": "AJsDTkZxueGuSUdE1W5eJuHbnXQjKNtKVZStxgiXp7Bwvega8kGxMTVET3evZBf3wmmDapbRS89xckJdDqjfaT7",
  "key13": "67HnMHT4rtBUkBnKWFdKurxX3xZLDq3q4paidhMD6y4oqfbAsfZgfVfJLfHub6MsjyNoP3crGbbKUAb5RmJ3mzSj",
  "key14": "4Ygk4kb72dKXk1Z9spxTvqLbQFYaA7w8DgjVqov4GkaVm2ZdgR9Rb81pgy1DT8Wppy9gREPbudLDHifbr7FUgJV7",
  "key15": "53vZvkzNVMvqYyEfUCkktCoYfoufY9661AdPu5ggFWfeyNDYuCveWUQupT9Lz5ZRyTpXo3k8uJUvuZZ8WQEmEsQq",
  "key16": "26hYZZfYmBGK8Ub2piqHc8ziyNY6zGs7uDJacUgKYntSEQhPDzoMMr3p2ptmhiNhST2HJYa53NvnwWBWvrhF4Fxe",
  "key17": "21zjvHh7oaprUSxeo7RDcCKE33tPuZPhZPXbXQNnfaNvTVkbQdzCokkbHi8Xfb6xyy9WxU78pDBA7sp1A6ty1Rn9",
  "key18": "44TcGFUBtE9kY8fPEdEtjkWbHp2z7QbYjzqdS5siZgJxeMrbTdWG5k3HpMBY1KvFwXDynt1YqexJtauediP6NczY",
  "key19": "dw2fZ3TCwkVXLXEdYT7Kz3yQ8srgwEM39hiVUVzzpymb2eB94uYLr8hCLVHzy5AGjzp7EYN3a29oyQLouvvD2ts",
  "key20": "4L5cnaiU4719bm6Qntn96sq9kwGknqkbnqoJ4XVT92FDvtkUzM7Bowmqx27zeGAQ8S5DLLcR5pnV4TdKZHXrG7nQ",
  "key21": "xHHb2Qcq1nPtnxWZKSyoDFa5AUjxj4HzwqTEn1hBiW4R4Wmps2aAGDUPHsppk3XxeXhkGQNSvE1C1wadqBihEpi",
  "key22": "EnwEmm6VF5iURPSaRp5qiySWgGvh6j3kkBAJVpNh4vYDzj8iszJw2NinFhUJCihvt6RCsa6ZWP1HqPu3tjUVZjN",
  "key23": "5Ux2uViZHUnc6X79UdShGKuP8WQu6XqXxpbUcq2zFZnUdW3xC8nNGo1tisQpRdUbRpLzKm3WpTAiT3GAu6DWkeiF",
  "key24": "5PmGvFabuSTNXHGcie4TwMVxm2oLML6uvR8P5mZAm8TcRtf64pbuUV65891y5ZdBr8Vjjo7Q1Y9vttH2VtDa32wX",
  "key25": "Tpuqr86JRn18kPyaEnWjEcAudrG7EZzwP9m6VfYFk3WmzYhwviJLCYkz2jVwFw9MQnTF4TDN9CsRiiZ8YpavSLK",
  "key26": "2EA2SoPCjDRUBiDKCn7vaWxd8KQcK7NaSdHXwGfXcAb25uAFTe4LPSGA2U8zycH8Ls9chf2bsrnBMqejDfLKQCWL"
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
