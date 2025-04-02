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
    "4Mu53n3qxvCLYzrDEDxfQRD5Y7hnReQZdR5oefP4FJ8w7zAdHRenoUiiuanH1zJ8gDKph1jbieKPuTHejFtfS11U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tRJKvt1SdrTfs9ZihUmPSEoHWhWsK6DmmQ1DnhssXsCPmASgQCJBWe72Ff8a5fGFV7pGfLBShmAkgDc3LrPAcx8",
  "key1": "5KjsJfVyMUS32iLsPUTwxHDA3smCKvW7aZMoRzDpVhch73k1qaiAvW8hXmD1dfMUMZkb2GkqTWZGni6rj6zi79hq",
  "key2": "2DU7bpFsEdMwRVgNb4KDpsbQaXHymwHAwKYF6fyvp49mnwXXepdD8DCLn7aEKYK7AZmYzi2aTLJBCUXy2JebiBzz",
  "key3": "22nawMqFSFrorqtYjxk6nCbMkP8TyQ9HAxKxtcjYc1RnDwzprsZDUR9TxC14VEfZ2G8iXr6TAG9JhuY3D3RYbZ1f",
  "key4": "2HhMwQb3rqyj8ocDsGGopD9SVCRce9teiSGMAMyEGZt4RJmtJThaSV7wGnkLqngUU6RpV8WBQY1K56GWdVjACU6r",
  "key5": "4BNCpxkYzrmVyHBeauznFsLwa4aCEBiW3bZUv4xrFhKtLJn7LPjg3Y6cku2g3R27eyhSWU35knQqcsFWkNn8eeCM",
  "key6": "qw5rTv3xqczHtU7117pjq3nKL444pwjwCVLGH5qRHJYyzvF68HRUXVHVf84TBFXskfzFGsZBg9b1x7cMe87shwr",
  "key7": "5vfA9Ty69rkEgZSaySdpp85MAj2kzuAMeiy93P43zCyfmU7dnd9qrghuvibrMtAEKw5BRWgvbJFKw3PxFiqY5Fru",
  "key8": "64RaCsJAcYX4nQBVHMvfaYB2mM79GoAPF8nsSUM3arfjTgACZUwujzxgtWULHXRgN3pfdRuUk4qUA7BTctG395L6",
  "key9": "4k9jNppMgaK8k7smnsG7iMGvRT7EVFkCKbqKvEghypKFN6rnfXboYHRTLHS2af4mHMbnP6M4w4sFC88RbrJKFZki",
  "key10": "3XjnEt6Xh4zJTN3jV4uHtNKD5v6MDhJV2CTE7hS913ySYEZpCSgMnd57DHwKSogNcjkAZ1pT7nWGTrzaZphvA819",
  "key11": "5s6mxgUt7FBLA58B56rNvmQjbr8gYwtxjhf6HxRXB2NLcXzLEkhevcRzdtTQNmSuqBEYj4avmVZgZtpcLapr3ri2",
  "key12": "2Y8AL299ee5ezcqZR19JLJsGAa3T8CyiSH5incnc3BJnQuYi6knp788r22kP4VxQ6ezAVFZG7MumTxjMiqz1Dsfz",
  "key13": "4a193JAqrTXmVJFUzgFD8WntcKdXYMxhi5xJgqYiW5cfWs7rfgD7oTpNfWqKiRs7LrXUFFkH4rjpWv5N67Mbs9ZD",
  "key14": "4b3oqc4pAG6r8pHnCDXoMtDxbCRoaFajVVjzqvs3Ls4XbiRXRc2UZd6sijT1fuvEgSMCmNdLddBcL3P3eyquhh1v",
  "key15": "398YqMo5MG42sLpkvcsqKnGbZqVtZBk4yqrmjjdgUe3ef2pQiJ2Qshja4kUMtYieBraVrLUQQdsgfeSFUdnC7R7n",
  "key16": "3z1XHvHpxaook1gCxPxEJDWvj4TQ4RvDwJTuZNdhnnnFFcQsxUhvr8T5eYnGGx1kYfTcxpTepqBMh6MhPtj1ZG1G",
  "key17": "2uJkrvsqLjJ4FhZtcCdHZS7wKSpN3Qy3AfEonvbXWQfNd3FjRp58MmpGkB1iWjB7iksXWTLRG6tZGCiULrsXfvoh",
  "key18": "3tbJn46ZVqXGnmUxaq6B1Z4UuyCQ47uR1CXdQuZ8PQ6ikm9tvrgfUiVJWgrjF8D2DbrDDznfBRFy3aRZoWBFm7X5",
  "key19": "64XCkcWBScJERgMfcGCALj22DtZLM6nzGdvgwCsBgQWd7AtAcg2MiZTF9WtUnHWB1HAGD3eUxjppLx6UsbAK9ZBB",
  "key20": "44bCn1J6vqQiRaxBGsyHudvcKQ3mGJosWWd1jspcyXH8dbpi59Dub5Nab6nK2REGfDG1CuUuYiX4vtCFJbYwLVfV",
  "key21": "3JPmEpp8dNCxjdLNiCyeTe3MoFQ5J5XX8eTM2Tfj3FPCfUxfgF2KovBT4pcA42nNVojc6oMK16DbQoNZm7bFAWKH",
  "key22": "5MZZxZJo6pVhJXUKxWQv4CNgXBayrXoJ6zj9A8YcrG93aKXbJBuqe8MetxTx8u4HLhyQmbtEmqwVwa73qLZPj1Bw",
  "key23": "6499zRAVZVoeUFMR6FQdbdiUm8wu5xRyGbXKhSh25Zc4yS5A4kAcVRhs1GmjMhEqfzwXZfaTsbK7Pqmid6W9QmiF",
  "key24": "XtTMLaFqrmBQhcR3Uncphm6EiJGGatCuK9hx5w6s16ZuBPCaX5wJJJrD86K3xExCcUpr48LQEbtL9dU4rDkeXzV",
  "key25": "5jt49mwsj3JkjL6rMrksCc6STYgau78Pbg7xWsbTLMYNZDrL8JFqD8RR3K93TXV3dewXszk1kwaWCimyjf9jMBTm",
  "key26": "4ndBPeCNuSp2zehoCCzMwtF7Ym7osyqmhku8K2x4F5FBikqguwySWHyHBpS6eBzsMy1mqnxw4aQGxoiwDHdVYnGh",
  "key27": "3xqgCsh5288LtVmiqjhiFHSXNc6wiFEkwGuGpAEJR2nVaipeXL4raLgmrvYjcQ6ubisAAeyZtHucG6UyMdiiMPLq",
  "key28": "4rsEiN1btSZkAwECUGcmz6s1vxbNKuVYLn6YkTTY8K1TbbLAnAjwZqJ8E8ytNfUtwX1KJ2r8hMmDWuFc3gDhfXVG",
  "key29": "3owUKEJLjrDAhWQ2Rq5kFAKCo8jaVJCmCkrJPSuiPPeiFRotd9yG2piPUu5KszfNEkXSs6aHd6MEsENgDgtjfq3n"
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
