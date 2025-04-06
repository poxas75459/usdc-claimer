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
    "279boCCwnZ7bPDucEDH5Bb8BTF6dxnt7UMfwNqME8gd6RLQzBhW54cZdwnF6qkoanSGowobwzufLewSKJL7qW7Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whusL6JpWmKHMjT6TMm2ianmeZN4i2yhuTNqaDnngtCyRCMBy6miubHS1fxABf3V4kmCNcY5xgQaq2jPdDjDNqi",
  "key1": "5vPymufMT5NpEg5DkgaQ2YRTGsQbP7WbEuiR2gTodYEinVPevTyaCquAmhRR26SC5Tm174CXUDhjc2w4fMzUg4vr",
  "key2": "guhKeTrnNi4dqUn17Fw1o6WyxhUbQTDF9mRUnqK8yhLu2siLiuQ35GAuNeiPtW4f8aGCuYocumt46BZGc8jPWs7",
  "key3": "2asKKwESB7FBdradFkvCugmRrEYjTemSFrYktcbYjesUuShkkHXZisiTRKj1qY48s4ZgScyWnVn92G2TVjCHmaFr",
  "key4": "355v99TCpDgVUxsnxKit4YgxU7keqstz4GtoFBV3A5HsC7nfvt9ZtyqRp5TNYdthMhn8wqU252HrHGvKkufjjWDd",
  "key5": "5NpzKN5drrVmybSxqu9HYDokJodXoMhV3LeP3QW4ux1KzkDdTaKaKH3uiRPR3XSSwdYozcjeKPcjxwPUs4pCGHRT",
  "key6": "2BaaG6VQN9eJT7uq7UiE957Fpkdpibih9AEMe9QGQ6bk3VkdEim2M82uTJ8v6WSatRrLMYWt3cTgeyARYbYA7nDr",
  "key7": "yH3EVKZCMorZ5tFksT97JrvDKsqgEEHGKdaYXi6j9MiCuRDH9TbpAkW9ViZfDzNdbzgWXcyGPtHe1TAfSdZo2FY",
  "key8": "3Vu2iHbyDsAUYjHZZvbHnMD3kZCtP8TTKRvEJywobH8e456jnBNpPoJGjiEhhvFdqaMxf9g91wsJsjjY9Pyrjw2y",
  "key9": "5ncZ9ruSni9y1Htyq74zT4quqdoPpocPyjdTWHpBo8pBcu3j4oZLmHWToNcPU5mYgY98B4MHnJUS2yWvknV9hPnD",
  "key10": "4jHtKCyqMCrW2AZKiB3X5pq7KEdubvDxFg3YHEmqGpmgENK4cTaZngT2FVL7G9j8trePbK6YS3Lc9W1SPbC6zXaw",
  "key11": "21wn2nuY7kHDLDce2BcsvsUURsCobZWQigqCPqLoDkqckDLGMfg6ET6Upjk5MPvvFArFqmH2AqiwqFuQ3kQdhu9D",
  "key12": "41ZgGJmcQVkX3hDewvKqS6ANAktMsqsmqDJNaNcdahcsxLwbYLwL86aojMjkbouWknr8qWVEn3oS4J1wGw6Y3jwq",
  "key13": "4dMDvfQCsHpoP1g5D6dKcs5NT72CvcCTo6cuvc7WcoybyrTHebXGacEqRqBgGVDm9ZKB2HTg2HQSgYfuewFXEnaH",
  "key14": "4bpaGHTCwkr1fb5J1ei8DgnCD1bVrQbSdy4HKXpdomRTPA9c7hc1iZ1Hy6sxkyNNDUQmqBuCo1xXX4bmaLJpHkdK",
  "key15": "56fYJLiQzeZAHJRyeduDrLrdy9whzmjXM2zxXB6jeFUTYEjvDDZfTa4wS8FsoKXuTgXX7oQh8VpbfRT62SsdbEiJ",
  "key16": "2jFBMEpPLqDvgCRZLJhrz8yr9ZRpCYwLeELkRikhSskG1r7C8GSHFKPGjsTJxaSH36Cm3HGkTcRBm7WZ7ny554cQ",
  "key17": "5bKDmkhE6dzwhjUHVxNnTFcUTYpoz88EF8D3Jxt3JLMG8z8vaLLZnUAb7wj9MG2EQqm8JKNFu2GGkdwueyB7rFC5",
  "key18": "67SWL5oWaWnfptPouLAkYn5fu9YRFsDEq7jt1MCaXwQ9sH7FrossWqvVzgDN8ffFrv8BAhiRkpLyVEDt4wUhHfBn",
  "key19": "4ccfifgJdVt6wkaBLHchojapyjmsZWinBmtXT2489czVMncJC2yRVaT2c3LW7X2dxKzSs54yXst7YjYtkpmuVHNJ",
  "key20": "3XJ5kqYT4MRVzgHThx8xEzbbMaSABK2e5PUEeDyBbiU6PxPxWiVHt7qwQKh47vt8qcqzzkuD2SEvpuAmk5cVDWtP",
  "key21": "av5hw5AjTxMMb7WJoXmgJ7fa2UUg6Ae6ZTjp2u14JemuifDW3i2V8fmusjXn5bTRLs2FqJTGQrcRViZ3yeZYbqu",
  "key22": "2Uar87MKNCcuHKv7rt43YWSP2hoqeBRPX7pP9aByWHmKz5V7T8RryRdVsVgE3iF1Mr9UaPqFhaDnnM8dSWuvUFEG",
  "key23": "3fu9xHdDGPxKS83RyKhuShT82GjFrBRtmvpeGxrSf79ooGccnwhaTjTsL1jB22NJtcFKwmK1yomzw4q5tyroyDSY",
  "key24": "xxAwEFSBr9mAVWvTHktiiTR7UErkMNaT8Zv8rLTmsFNTJoMhReBmV8EiPeiYPM6Pz9nGz62fYQT8FBbtEzXJtG6",
  "key25": "5CtJCVGbQxssiJ27TjVXEQyB6s11N5eWv2jcV9QYGpqbFk86QcXuHYdooVbR19D4RnAEReqs8Cw65Ax5fJtN2As",
  "key26": "2Lu73pi5wekX5fp5RJAwGfWeQkn2ZCGyd1sHoy2vquSAxuTNu3KikXY1Y7X1k9PJFvHsTBiSsQLGnSo7Y2pdhaYQ",
  "key27": "5wVYbznmAptoRD546EL1YpC5jfKcjaS7zQxoSEnKypBe5DbB8wFqDBufURatqZAjJr6rtPFqAiKbFaM2GV2BdK3z",
  "key28": "T5hhaXie3RyHNK2CCNvutUjbtZDJyRyv7aAdH3aejJ7udkwXYTqccWwRDVtJubXuJruZYuvoSMELYdhgQF785bL",
  "key29": "4R898C7HZspUtKj7L8CtBrtpk4p9kGShrZBT4eBC1zHCdZPMMULdKq257D1oj8eAyErYRYvDx4dsSprGCyvjJFdi",
  "key30": "2PWYbjo84hBHcDGCovuMVpBAhcWASwhu215Ynfp9odwhQ5intr7VAafxMaMPP42xU3bXtf8cRzw2hCdjcgMvwbK5",
  "key31": "2PCRvtnYB5WqpGgRr6VFpyPCExyYAdxp3L3N3pttnVaougxCo17rSMRYG7W8ovk7kRyv8H7EkiaKfCHr1Pof5b5R"
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
