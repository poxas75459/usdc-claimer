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
    "31ojaPLd7GQyMbJEMWz8bAtK7Gu5JMtuN6hGwN944gAxCDDDUCbUMEfVSCaNayBXQcPT25dhHC4tzDCKXcx3A2F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FiXJ3WwuMD9jyWYZcgEgePehognwCC3tFSWi9B3hwWWYzZyXsFxoWU4NiLtgBjto2C9F74yH7qUsXDuHC4p2YeL",
  "key1": "4S1CjEiBTCyHBvRWr6jSV2pgr1izprdVBNc7PHCeP7M8mPw6UoEpEtfyQjrNHrsp9MUaqFgijFQrmRvZWvyLGtgK",
  "key2": "WTWTPdzWms3yHQmLnUUocx3UtJMYRTZDKsjtMXAFhnZmkGZjA4v8SdfZpBY557tL5b4aG7VuNeQW99Jp8RfQ35N",
  "key3": "5pshJQHTk72sM79qQV7TBa8r9yusA2qc7wz5Mu4FjpU4b8cfp6bxvk761CmPtEMUcSTd6bfWczQymge9CgxqoMud",
  "key4": "ck8B3GLAdZCPXwrK21omhgREAhxxB4k9zyRy2jSthyuMt9i8hcPZe3hq11ssZ9bopcJAxLMW4z2nJeHB2BFYp1Y",
  "key5": "WNPxaGetWPqpvv9cYHxZsWhdvqDyAiGeSHiv99jFwMDQEZv6b6caQ2Wf1Wb3rr5DTBBebpUs1ttr6SCT8AswNwq",
  "key6": "4h94WXjkpQu6LJjHhoeeiWfeMPXZRFLZoxk1Qc3iDFZfV94pdXDabdU9xUM98fkuuSsYGtTuhX1A2SWywonD5mx4",
  "key7": "5dCxG2adTnP7phWRdREs6Le77W6USEHY3Eh8aN6HXE1dFXfvQzwMQGdLLE9vwfm1JN8m8HAANG3xYFnVBaWHm3Cp",
  "key8": "2NdjSujg2rXDyGRjruHaDoXGpkVE14yLoVEFWTuxLKKMRntUyjYRN56LCVwz6w395NaitQqQ35VEsELU8dipSDNZ",
  "key9": "8KSGMYKXfPVb8S3gTUUdv4XFczN7i2DK4eYPZVWgT7K2LK7Le8BdWYGTsd2yPrWQ9J9XoGgdjzRujKrXpDukzRv",
  "key10": "LzCxKXjH9KT93qbp8xG3DbS7FmaouH5xf5HRjMDBAP2SVGeGq1iQ1MToDHVpYmFfyAZbdK5vutsRFVFSCud2fnW",
  "key11": "wi2g9jXVwS6RSW1RxVwcTfB35h9gGgG4F6xf3RCYDeQszeMLXanxzzHvCsLGCvJNmF4qXJvacvokJDLtJKQ5vtG",
  "key12": "2vp2YpBG539fHMUTMD4FRrvgZMHovuPvPShzv8sgnwXZ7gU2ovta3iEMxMvtSu4ZynNNNvWfxbc6E1UiRfbURaSQ",
  "key13": "4ifp7XZfnsc4EzaNnQLdXA3BPkUHUjvSqXgJyRPfaJpPjMdBknB5VXdNM81zKzMN6i8bnDeCentoNvz3UGTy2RdK",
  "key14": "48fKmPDVpSSBCLeCNetFegicDLhWkSo1FX78aPGtGWGZGfhJfxZiaVa2hSME84UoDYGiHdg9dqiNXGABZANpGQoX",
  "key15": "5YrqifqUAXwBCTxrQxydwCnUgnRBBKYKCaqxDba2BUPAwKcHKyUkhWYLRs9e9tvTgZpXkdCrVwrBE5zzhNThmi5E",
  "key16": "4JejPDXEGXYWNgdfKhoo5BLomctyxxsmxc44LSo4WZ6Zk39jKsAFLaNHvtj8cDDYF7qdMcHFPioTzRHg1BFHrNhK",
  "key17": "62evHPztGH37kcKbstzWZUQF4xTdJDf5xPHm5dLG6aexn8j2xvGRZHuGT1vcdH2zkrLTmQ4MUwEVYPPAntHogXCa",
  "key18": "vukEbCrsrnj49GzoD7adAAFWAPAPYrKRj9HPVcg8APQ7mwDwkLnNpgdEaNmnrDnfTGdRvk21NDtRYYCCn7i6hSA",
  "key19": "5qKQh5yBeQZjbgsqZ98kS4GLPsEd9SrB51ZtiGaYhTwUiqoDenMmptZhN4nHLKUou9pncU8768Jq5ymznKiKkBUM",
  "key20": "5fXwDD9AJcSza3DfB3PnTZQ3F2SopPcrUxt16oH7ZiGReCFHwPYcZr6R2apKQ5wWgcn2kYBTkFJgJQLwxbyoH9qc",
  "key21": "3BfVhnRF4qUYF4kwz3cxP21qzo6Rsz4rLLGtwD8WNRnm6sczXKGgvpvw3MBy6QD1yWZSrZ2AXJW7bqiy8zTY18Dx",
  "key22": "62a7fN8g3Yzkqebq1eoc2PHne3jkhVdw7AfoGJgLBpgjRLRGZkfUdQBbpQvAy6hHq7yXH7UbjPo5G5H2RfHZr5By",
  "key23": "LSbXtHFdag32i5VSHTjaASSKi4bSTx1tm2sCV3C1ivxm5t9tonWAVtRi45j8fYF9K7Ccsynh1XnKwcAyFeVtgnE",
  "key24": "3HwGnkF6hGcertVJcFY9Wi6BBmzDRWxZcBbyF2DksixJTWWHbaP8P1wAgJtRN6FVPG7UqGZN7cST4aSYimCYxB2A",
  "key25": "caoCvUd43uSJwsKZuKhAx9EcCRGSxFKbnZZtqsZGXDXfMheuv4NKw4YqvAoWak2YSpwRuB7H6cLb1xQEng9obEJ",
  "key26": "58VU6A4FhftxNnx9C4u3EtZrzPA9WaWGPeufYXKe3KjiqL9TXMxB9SSiVsc3jgzPJPqbJcBpVFLQd3XcFr8FT2xU",
  "key27": "5skem2Mmo5vnL9Cps97v5qxGhfdWnz7XN52oyDugr4eeXWZeGyL4PwzWsuAEzgsxqtP3wVaJhhDKFaPfaWytyujz",
  "key28": "43ebLc2VqBLJgfcUXPYzFktg5VsTaTHPUr7wbJssWByGc7vvBkVDFFHHc5wbswwNXixKzJ3HZtKzw5fevki2WHUS",
  "key29": "4gzPkbHgR9otgFUtH4yTPCSaTYaTPbEEtxzFt7GPr7Gpyvff3HPMS7NHBt5NbvY6pJXnBBj4DEAQGkugUn5tyADj",
  "key30": "3RBb4HwnLpY7hPC7WLjuuhsiKoiVtPQeDYbfWZ7t4mpKWmaHZPW8rykxXuzfLcacoz4J6YPm2e2XPV8AVxxxLYrS",
  "key31": "47q7vDyNezxd7563Xj1w6DNDC3XviqiHrWL4RiQ1kCqZkUvS1RqHHCFWPYGLCn4tDrmECj9BikyenQct68JxxNAC"
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
