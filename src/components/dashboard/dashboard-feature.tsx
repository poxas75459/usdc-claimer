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
    "6143rD2VmiBGuoFpYPnyrEZDeJAAP3DEb7Xs6Tn9og3GK8RuLAyWjHiwu1DvsbdqL7nmnyAD149uf1kDByNQZ7zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fo6ZFuucY4c7cFD6BxoeiJ5xQ7i68hWPF8bNroEuaBxrR2J9EFS8TKxXHGsN4JwnJ6JJ7jr7MtmZ9yYRPvrgAw6",
  "key1": "2BeQMZrKogb5ZtixXCcsr8VGRjTZKuMz6ZLL4WKuQamUkr2T4G1pixs2nUvZqtoRy3ZqdqpiuXcGsEDgU132B65b",
  "key2": "4LoZ6kiWW8rLFj9FhwKHfUK2kgVg5t9UxpageYsE2xNzKPf3pgZNMGTGq6ttN8P8t6sySGz6de6WqevN9x1HpUvA",
  "key3": "3bTs4mpTRuhL9TopQNevgZGuKcyiJoiAhs2oWak9Uxhxx6nDB2kjxvtFL2WrYzhm2h3TBVb56Ggj37CrB5E1MaUf",
  "key4": "cpiiBHkLiqfxjRaxdAhqejoXjTM6Hb5pv1hh7LbBSTVXkAYmVsUYa24ysuz21C3ozKwQkXjJLwzsnw3gn8owyfj",
  "key5": "yRQmPz2a1RMKEtDHnyeLCGEDLauYjArYyrnvbbJ1fmugKn9jtaaMA2QvaaSibUC2p3UFfnP7L1FsidMoUKcj8eD",
  "key6": "4zWkGPK3mt2BdwqwMqkTZkf4HodCrVJjFSjYLprehkVADe2jd5Zg9ntNhKM3EoCTFH72MHFFq13NZNf5mqkTotfM",
  "key7": "gvFSVr134QFwcwcVF7YGAVwB6qbZAqDGE2C43dfSmGYZjQjM3G6zv6mYoTex1XTeFspcpqA1oVh2rpkqCd4ivte",
  "key8": "36VXpBPEEgXasHvXM56fX8gnNqa4EDqsLsqk7Zn9VXN8TVKRs1nQuqFjHnVfHr8zKfnn9QwtFv7aKWVkV6hTJcP6",
  "key9": "4Asj4jLMLX8niQu7L29kLaTkVjoPjiYgf6Bg3wMjeG2zDStsLNqSbnhBrWyjubhHYomkADEcJqhtQ8uKpe3UyQj8",
  "key10": "3Ksgdeikt9wqqNZjySdGMMoqwsv49v6tKtAQA4aPyJdAqq3huygMG9yMNsKpF5kUwL3Kfs2yctRrVyzb5XX9Moii",
  "key11": "5YGGrJs2pU7uHTNrgoGFn7RdiNjboBpUGRYjQAnxJeRU1Gun4NsQJHbWTPFyZc38zHKVMDsM2ixD3nvmbLewJe9P",
  "key12": "Hka9Fwim47CqbpRDP2Nw5EL8i3DPNJvWL1vMHceQHeLfbitGqTGGXixgRSB9tUG3d43AR48WxbbWBLoLYMvWS9n",
  "key13": "61ftQjvmaMErSmoYzpNyZArqYve51BjHsrGRPUcW1Yi1akh8uasmT263hq7YLe2dKQmGJc5odFr9sDx1ejDjLFha",
  "key14": "3Ydc3gzbnY8UrD4DDr1ETwvirYfoCQ6P4U69WJNTKhAqd1nz4pw2bqg2pAup9tc1AeMnk9fhS6KYMthdTK4oUMWE",
  "key15": "4Ybn7vxhjBqEP7uzrBZVKifJrvSrZAx5K4cv2xsXx9buKh9VAYSbPUpHDi3GaZcy3kgjJFnebxuf3MuffuotrVqN",
  "key16": "5cYnJeDMcNTwsoq7hEQ8HUTz5atAiwAheca6LAKRNFH6ebaFUnL7RhdxNr69JPL7SdpcPBDSfYYA7pQwf3SZsXFd",
  "key17": "9gFNU5tKsidyKkraNEYhMdJMaugCaqdrta5cbGbfthQbFGVMrGHQsGYVyQrnwFZ6u6RXHEMF9Bu96B3CtpMvRwS",
  "key18": "5PjmJ1BDwumvcM5dYJixpBc2cJ7BFbm9kE9qV9Mhu7eRCnvE6qTiWMbyu9jQ6ChFmCwAAYCNzYMJxssqeAADujU5",
  "key19": "2TRFNGKuZ4Lzv3HEdqD96WPXJ4VopPXu7MLiPwCGA8RXpbP3byFmrjN2UMrSMEiUxAatHPyuvo47Y4iiJVonZsZ2",
  "key20": "3KWCpUtQkkEFqPmdreeHMUMGrujs7WqZM4drK6B8zUgXGAMc7k8twEB2WRfqbWxTkZFnB5DRKheV8bJFrnE15Gct",
  "key21": "2MuMJLQYETLkZzPQUcDby9aiwkUV3koERY84KkuqPnBUCCfvGVaMekjGdxDrhGxJeJPR7Denqupwogw93UpQ7S11",
  "key22": "5q7jZZY9QsbHTQsbpDZLsfYVCAZRHorbtJ5EfZ8XmPWpxLSXGrrSdRDaAAK3tLYJ8HGtywxsYK3q7pgqHP4XDQu",
  "key23": "2yDDm9TtjSXQ7NYmrLEGJcdpcFuDBLr195u685L6toxvM6DabNvy3n8688fjxFBBVefSqUHSJsLRf68hYvyqo4Gx",
  "key24": "28mdLDa8j7Eyapro2UXm1UrB7qhqdiDvR8PQ2kwqF2jo2CA1rTmC9FAoaa26dr1zbKLQYtFSURZVVNxBxPr73uHm",
  "key25": "4ZN76FMgBASZmqxxiDcByQ4LB7s6UJDsWfZWZVn46jSKJN7m3eVVHZsUZ88dtqcrLA3PKSUzXTyUk6LYfcjX3hzi",
  "key26": "57iqqk3b4ozpWxNUt1Phsh3dSuJW7Q3A8bckXiDWSS4hb3UwukVw7DgbMubQ73m6uWHJySjraCuCn5CbTNME4mmR",
  "key27": "36BUyRtXRqZeUPPo1NSSkPU85mbB8sDZsqrjPjBCBnbuVLzAUUCcovvs9MstRM95dMsefBd8v3JLU82S3DwN53LW"
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
