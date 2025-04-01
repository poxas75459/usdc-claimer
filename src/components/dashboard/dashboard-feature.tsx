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
    "4sWRXttU8AKwLbRVxfX4pSbMsz4PHRBeP76DcPxTiMXThBbMLr2bsbagzWrpRf2YeTGFXpDGDwreH7y787Led9ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lqz9eA922EpXTSB3yJGuDnS7k4UdR2Ju7uxR1BdmS9L9Xj8eUP5ingZiTxcUiRBJZXE33diPYWPuue4zjD7mSxA",
  "key1": "4vBfr3b89GmZrDg8VBYiqk57HuN52NBsaSgggFzJTsXzwbKGFpPhVgpkhvXSjJKJ2x1mhKtcrA6nZgdYzkq68QjE",
  "key2": "5FHwmipuMv7LRknoPNH2kAh3zFP6kKnHkoi6zBuzEWdxVUuzetG4Jtrm2ZyxLCMRDg34EkCKSNM11QWtAP8FrTrR",
  "key3": "4vntSSYxVSpqTqvy3kXtEfhhtte3W4E6VEUu94djpfNoj8cEHTrmqM4pPKFUSizKtCTutomTws2aWEVHMq8oAA3P",
  "key4": "4zCHnPkerfss13sKTe4EcmwEtifnr8sHmpEDKbG9HRSozSuychdox52UVLxhvos9FZxMDbPqdPJjEFb6wJc9st2g",
  "key5": "NuLdJeXu5wDkBrmVwWPbPuYKkkSjWk9dgMjKQX9sNFvKscrEa9jqCUW2KZ8m2KJsBg799zHWEcNJ5ZtNsMz3TYe",
  "key6": "5HLVyGKBddgj6xUY4fwH7dTNDfguLcGvcwb3UhTLuzTJTcQy1UKhammoZahCf5iaRYjDLv83KsnrnFmVfCMok1tH",
  "key7": "LBPWSBU6ivBZf5izxxzhaFqq29rotqu9r9CexKc9rEmdQ5JRtTzxZpq2xXrQmP1w9C56oLAh9gej8PfUYQWqSSW",
  "key8": "2b48WFVxqUPB9REqMrN4mp9bEf3EwFSuLmChv3DxgFropv1dE5TLD46PrUxLULHgCHfN1wtA4dxzLARUBF7wPbU8",
  "key9": "DzpbktW5VaKZtomgUCsfCivPDaRxTbPAjmB4DUrprUumG3PddUayKpgFssTp1c6RH68VhbMYi4gksSkHYbN5ZTq",
  "key10": "4YoU8CAKzYGEVW3xNzSMaFPPjz1FGexMF57bSPpy8APVtvdkuAuMMTkep53PHSo5fehmovkRshZxcEWEAidC5BLB",
  "key11": "65ysBFL3U8TC4KTyqHtVpbYR7G2akdLirxtEYohbVcn1hKkik8s4CyTP6v1tQWj3z9fJnbSZ9tB3idH8MXWZqX98",
  "key12": "HvBPfimkyKDHDZiWL5p2iciohRWZhvCwLftVxStJfjnJjUxHr9heZFt4a28GcuuhqggYVce3oVXV3AcpQHeuCCL",
  "key13": "5Lbqa6GgRxUcWXDdbqd6edc8B8MheQT89e51uGu817SesQnVGXRuYrWbW63Sy5snsoLxN6gjBHMXfEq4FGe19Ney",
  "key14": "2hqtviD5GxnfLoM9vP1JgE45H4jFFq1MnsAQqyCgeVum1bMe7QPcjZBeGM9AuKmAscw522czaVQmjR6FQg4Fi8AD",
  "key15": "2rVYRKhBbKTtDfV7jNdk8aWKr945g5CVHqN4pNtT4wyJREqGZJbu46UoCbVJLK4nUd6rKm2EhwsYNWETpY9VBnqK",
  "key16": "rPnTEyS5UZZ9iSw3adNThoJQMkwnJtv51kESUyaN9XiexTUFHgFd1GtPqfebvabmqjHZEj54XF6f1x5pQRs2StV",
  "key17": "4VD5yjFJL1ryCf5p9Sp5s8FCzsQZ6bKep9QJ8uFjRLsB7RUXyEVKSayrst6Dsisp1Yf6SL2wGgSZMwydmVZaKXJe",
  "key18": "4VqCdhkwTfSVhy6ZhnNj2e5xhP2HiFfawKXjdQmhFepA7EUfc91nN6KpC5yy1djAMH2qPKfP6Lwc7HhaiRo7XW3i",
  "key19": "4CyMGJrDPv65iJAfYctMnsAK4KjgEmbLfv9GFeaRgsGb8EzU1zsihcVY7TJbecgkU3vyTUzKH9xUHCS9F1AkxdZ5",
  "key20": "65YZxLswCBGSpAwXWCxLshHF8YXWYdTzpEipn6g1PHYeFspFCFNR7tVFhLGn19WPVPF5JxDnQviMcqGtSopWVq7U",
  "key21": "4dnzJKnfhLPttjWbUXhw7fnf5svzGn7huaL9YfpMPaU7qYNnpXHQzTSymiH3wNe3qmDbjbssudpLXGTgnMv1zzyK",
  "key22": "bPtfNebzYp1vDjZcnBVnWuKJKfiDL5Qx4Sv5oCaMdP8oLTA1zwjEyj11NNnqaLAPkzJj4Xq8ECpmyUFdJsk9PT5",
  "key23": "2vELFYugLEsV5VNmmfuPhYvMUeKgbErmQHCw7mTdcUsGYDh1wzE71Pngve37EmUYFkNR5W7LnR8NkMGLtWnGWYAY",
  "key24": "396FkHxED9NYobtwiD6yhBmQUbBb8n9PjZs3AuREm4S7dbZcX3uCntxUeVaqtWbUdKJMCQZ41HpoPvUScfQFhZnc",
  "key25": "4NYEw3uuKtxKXoJ9LwugVuStKKMDZC5usgXkr5unZUAhjtkC6de4CUYnyxwggYhvgvWcrTHT6L49RVxc5FNtXbig"
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
