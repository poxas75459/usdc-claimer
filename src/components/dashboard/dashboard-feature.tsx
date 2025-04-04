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
    "RBhDyQbvTifWsVpnRAAiR5My11LxeRPvnX5YGYVvUVPEjZ9LdzCj21oRWfy2aGV72rNTrdhcZH2egr1rj8sMnbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ecBQaPJKQbhLzY7UtpHTD9GHViLL8u6cx9tjuTFMZo62ayr7SNqKS7N3ahxedMMaS3DmwkEMEDQDQMufE93PJk",
  "key1": "7qhhPCtucDTYepjdABYrnHoCFMZGzFJjwHZCeSafjoyZ6Z2miAPN2pXsSJCXmqvqYHquLmwVUCzq7fYuJWv5ZP9",
  "key2": "39ssZeZMak3Zdu9xUHhuhckPQdpKyiwja9tsEnosd1eHUnHdFdM4fQHZGgcsWEG4DLW7v319VECkqJxc9NaeC5gk",
  "key3": "2zWT8CZdYQMo8QYii2ht18732yL6uGyJWLYjeq91HCCR2C2Qwx914S9pJryB7MQY62SkT7MAkc4QwjTLRnr2nhBn",
  "key4": "3fDMG6EhCu186CbXVKU6AN7im78DWQESx8QWkFtf1AYpaowD6oQsU2Dv6rxPLybPL4xV3gH5S6SyCRWXTdVJZyY6",
  "key5": "5R7f3zM75GWqkNEuPhX5gRUedQdLqn54a4dFwJBKtH8MTxwXAV3HhZ12fvgVQzeUhVuYboSAppD4jznaTTGjYQwr",
  "key6": "674w5C4nK1CDv8eV9QNCm6Cw1iCjHc1YxtJX8JWm1tqop7xkmsDkLeqci5zB7A9VDWLcMEj8FXBXQEHpLXBa2m73",
  "key7": "5zo9YSbccZzsbGHNLRQ18kea873WzrwYMeAD8aDUeta6e4MWKRp6yrYB5668Ror2iD3iZw5DnVyWyYrYsuZ8Nq8k",
  "key8": "4Ae7WyNMRARAA8QLJSG2TzFtiUB4DvfE4aUFTcXtyB7qB88gid9P7KxK5KVsuLF113Vg9Ce73PySSzstZEkqAaT7",
  "key9": "3Qy7Jg34MtknWfrb1kAc1RHUtmFx67Z2ER6ch32PX64ZgQDWBjmSSW9zNrq5FeUzzo2WXghyxDgAm3pQgwfxitQ6",
  "key10": "K7ewWDYkcWD12CaKfFirC164ByvU9aeWXsfxmi1Xbb89s2pG97Pkuw18VffyaEjkuCjoJme6WHToBLpGcrbXfWM",
  "key11": "QBS3rSY8D4ZFUy2q71ozgCbJofAxZPEjz823jAYWpHQDmogbaj4TgpeazorisynYtj7Hz5tdvASYiqceyN8Ww4G",
  "key12": "52ixFSQ4n5SS2XPZWxJjgVhyAaGfbtT3wxQEety7dEoccKHnikvF69xiTsZnyRzwzum1paZQjJNX3cVAPj3yVJwq",
  "key13": "37W9X2QoVnuCJBiBxodT9Dv7ysFyoQBnqZwP4StWBKRm9UFyVg6pbteT1o5Fzw5RKYcx98mVNosRK8kyp3s1gHWw",
  "key14": "4c2PP4jUvBvYm1E6XWFXHVLrfDjCPGcWSR4QD3vb32yKbaTMXPNqdcRcHmN9aRWiU4Da9EJabjXE66ArvzXuqkG4",
  "key15": "3BBwRR27XBH2rwfj6DkpTrF1sJZWLd3NhtNYHr5NT4U4gyG7fCQxthZDfGp7E1HvcvSPaDtx3qBtRixyWkz7a8S8",
  "key16": "61e8QMqELLLssD6UFPLEySv6WBjGKyDHYoAq3KV64ZaBR6vga49UoqocxokQmsfECr2dwWpA78aYvHF5ChzYujaC",
  "key17": "WUoZTcPvqLzkvWtA1ZLUVK1XyZNYHm7TBaYhKiBBPUHVYtyS8JgjjBPr8GkfrrWcUaX5Gn3dcFY6R8ndG7JmznL",
  "key18": "3Q2ey8u9F8JdusBd1aZv1asUXBUgjajmvEpuKweH6jq2gzvrMZWbKowxQui4kqbfAaAC54hsQtqc7997jQE1NVKr",
  "key19": "zvS5vAeTWJFv4EA7hDCPdcydCXU45iTHwSuJ2JvCnr24KLWcNZ71KNhZaibVJVWufTVaXHjkCubMWFdXUvLqak3",
  "key20": "4rQuF1DwjY4TKMZPfsUSNXioqddKC4oFLN1NTkXmtx1cZKN8rWGqkyHsyLJCLbUrn5WXufEEWJmJAWNeqBg9pznL",
  "key21": "3sRtVpfvk57cGMnMcsnMjwEskWduWoHXZY2FsjnzXeHd1N6oivVfdHVBRSouDHcNmQSJysR5F2DwfWNH7AyQke5s",
  "key22": "KyjAPSkPyoiMPU6pX5rEQUshtRAu43knCgRQxBhV5qrd4WaKGQ6i4KBL2UcYY1RN8cWvCq2WNUAR94s4iSM4CCY",
  "key23": "3sdkNdBQTTR6C4D3FtCgmJZYmH281HXPde37RNkhnSgtVquMm3UAmD44eUSFVee1Jms7NJ6qYdJdzXKtuJgvPNWS",
  "key24": "2nzod1WSp2AcwqcNVvUF53TZ1m83CVQo1UmMMCj6d49S1hK4Ld7Z5i5jkeWULw2yTJXHqXZWb9n27KgoEYTwSDiu",
  "key25": "3nwfVp9X7XWXveV1qENzEBofWvZS5t7ZH2qkNxcEGciBFZXkBdeZ8coeP8o1n7Nsq1sQMNKW69TwFm71TStiCBap",
  "key26": "5SjcjQmtPTfTEbxDqh9YGKdj2haEcsTzz3rm2FxYUVksjQQyeuApMJCRDBA5gyDowsmfKAZ4KGLJKXwgeCaq7vwa",
  "key27": "5tsafyGjtCevx8CJzZ89JFGNSqYJMRj7TzFDwbSWUcoUg3GAJq83W6dcC1tTdvozx3Rfe5TpRizPFf71e2UegLCm",
  "key28": "3XCC3YrHpVaab6sYJf8giynckXCVprpp9HhY3r55i4RuXuxqqPVfoy8j89j4PvpCV6KSfUaJkRviAini56o6p5Tj",
  "key29": "PFn8acmJmiR7dxgP4Vo2bDkqcm6naVdfEhaAKNbSbeLbxfeZmhMisPTt2iB2kTAcZtQT6hAxJT2vieArDJ8d9dz",
  "key30": "2d9gRJGLsRVz3UHY66YCRkzybLKn9QaJ3SW68i4aqW9PiMPfrjvFxdHP9g81Cw4ntdwHzmAWbPu5PubM8FiaqdJB",
  "key31": "2Np2hdvJi4ZVM3epapZd1njxC6e1LDJV8KGCvB4kMBLAZEQhQVYf1WmsZqJmrWSkwPgyegrW6V2Rcz7bKjDESBiS",
  "key32": "2N4PLWdHpApSDvfEuaH55RGM78dh4dAP1fDUSKbcfNuxYk7srhx8suGFx4XXd3jadidandQYWgisQntygbz1MuCk",
  "key33": "4bznr626NaocW7H5wcwBqy6UkBhafVAMkhKKpG69Lq4RQa28d1nq5ETk4oAWaFPwULZZmqfbMkvX5uPbzNbuG636",
  "key34": "25UdA4QkemkHkLJ3mWJPtQphmqES93B4X99SdpNqBjUTtutUWmcak2CJqzR4QpaNNsn2cfzM3YRBkn5eE8S512oE",
  "key35": "aELQCVsJx4Q2mruh4jtiihehQs15ekYdpUSqhCS2pLDZBJ8u3hNet8xh4SHQMc82EMjwNJzhyLHGX93BApJfC7L",
  "key36": "48woANBKFMHS3RQWLzkapvCc63NGF3SZS6EeNKEt2YnVCPfCdKQRHf8EcP4t9PPUcf5gSHaedYZPwvXqoobzF5HG",
  "key37": "3LmE5kXTtrnobKtPD9AJ8Td6RnJX3UfVbgaLQed5X7TNaBhFyFcpVRDoafNJEFgvcYCCL6ZuFggdCKgF4XPheJkx",
  "key38": "3drgDUioJUehT4yftiy8CSjMSBap1g7UkNfTr3Jzqd9Ft3AZRwJUisPufGyXsP4RitwrhK7G6ahecxbQB4SAF6Aq",
  "key39": "3NzW1XT8oW122nysTKxrqb5jiHwH9rrLdTw5tQhAQTXTQ8eAtXxY9qvTUhi2LgtieRLZHhTLhbUoXjgKsE48nunD",
  "key40": "4ZR45VBKtTNkvJ1ATW88RfpMcoJAFAwPqzQbMqEAEY2UnmjhD971JZ8bDKj99XoVBdHFBWshf5gdpsTuXBWmxFdH"
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
