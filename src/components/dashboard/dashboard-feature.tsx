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
    "4EmUcbiqMQSTYhW74iHNaNEdFLVYB9Kgks1GMCiNwLYDMRCP2xxSyCE3cxJZKwWYLqBgMt8gLKRrtwce9ZsGVfvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EeZoRZPHSYUn4ZnyanyEkiyZnbHd1WaejUnQYdHCcFrNtpMHPDnmrzHvsjMsTh7XaEoPFw7FaGX7YgZd2G8Jc8B",
  "key1": "3RiZmCSnzVgrsVYNM64ejZkwwLLDRLB4hsdAMNE4yCKFwpB8BLj67Hte3tLK8ydgK4zFZ8Jr8j15S6EiMBXevnRU",
  "key2": "w4CpuSzJMXkh3CtRiRtNCYrbocwRcFY6N8HBVKtgaikxqE8TMEtfczv6954GRmTJi2TsB5ktnKyCasZZbJjx5WZ",
  "key3": "3fvoxupWjcJxR1Sb2f9RnMU5oPSHrJcVPaAYunTwmENXi7emzhuc7bLCaJS8zTq67iF6iFXz8YTKCxoiWnyishTV",
  "key4": "4y6SLwexJyuNrSiFjmsdT1zJtkywGsbKB2DqgtqQHPFzmjmSvBYQ7kyAWqqS3h9eVfhB9aDkE5pXkSiSDJYEUMBa",
  "key5": "5CAetQjYVPaVG64NT7oQyZV5rPAwSNDwMhCGzhT4Vnz2dGbsJ332R3EB2erF9mJsYC8CSZbcwPwUeGbBpB9wPk69",
  "key6": "2hKdNhcMfXARKY244AiA9vqywAfeR4vdV2h9F9i5BP5XUZEjYGWRuwi7tL3txRBQwRBEMgJFLM7VSwAqmP1atDUZ",
  "key7": "4aXfrmKbwxEParBLwhApHudDBmsrkDN2i1wVm7FkQrtt4HYJRC7ThXjQS8g5uPYC95JZ4P7K9HHHGhjXojMRw9RU",
  "key8": "3LRRRUmE2AGy9q7yZ9PNTTqTt66kSu57zRmGLany7o4VDiSYnP4kRxjpDRENJcYoqsFN7XANGfU9ewZwNsqpHQSY",
  "key9": "WrmQPmggE2YGrFKmpRkZvNumnU7nnVDWXRLk4UyYBTPREK44P5M5BqQBbB1wg5f34DmGbf8m2jskFRNbC3pzKsc",
  "key10": "293M5ikZm3b5xuVxBXSH6LfatMjs9TYb5HggJ6NMzs6ngjQp1vZV5ZMg7UukxLCiBGTAYXHCh71SFwpdgJMqdNEP",
  "key11": "3MZBiwwpc1PJCa7m8aSt4k7fb9tEj2chrPYB3KK7KvHXRBdJZ63tAznATXbm3QGyBAPDCbGnhFmQkNY3R7pSK53q",
  "key12": "UTG4a4MT5gL7CvkrWVTnnUnqncPSWNjoPA4fbymCNrCGpN5PchX8znokvexJKtXGUm4zRmRjG3d4ZtBovZgeEPC",
  "key13": "5f9UVTSZruFfwmqEVnVSEpvWcv7JUKFSgJDoQo7FCwvjzPq7HNaTbQD4m2BmHkkcqsS5oWxjiWMfFj7bGjdAH1VB",
  "key14": "4Kt9CrefkGsXCDPMuAoHcUUbXD7H1xtdftrM8SgNKSjGV7wPdzSEA4gcwWCqjNq5jfPoiFpctboeM1CGYiFqs63U",
  "key15": "3ackNSmqMyFZQhnPiNS9Jdo7wEiAcpXXNhQCHrSHZGqb3SprEXrsYEdke4fLULm3xmDhzcfssmteXJtbRRvtPmAs",
  "key16": "4DhpN63uDa3XW4fPvKMJNuuQLkjHfrGpN9vmdJR6bRemuSYiiiPjnNg6LCpEGLQdH1ANnW6v5XHWGiCxWoJU5AVU",
  "key17": "ufbWG7TCE6ipEpy7WtR24RYBnNRBpjq9K8YEo4UdZRxFF7sBAEuXAuCrJoDvMcWnJ88XwNmQSiy9WkUGyhs39Sd",
  "key18": "3Nnm1R5R7hHGTARJGxfPEQFEaCmgm6tUKi5fEZKE1XDf1LazajMaJKk8WA38ZCiKMS4CfjdcgtrBNN8uoDBk1fLP",
  "key19": "rKuKX7PvBHJZpf89u5e1wZ22hZna6BhN6zf3FXGLGNpdhxmMxDQGPkHzinkDBqpDKMBS6AE2k46apNJpXD4TCTQ",
  "key20": "3i3DDeJh5EBF61wuDEBUptwNCp1SNyx4tstig3rCcpT1UDGafCSsvQ3hEme2qJm7KRddjzfj1vD9v748m3h9AbTo",
  "key21": "5kasyb3oiLQyBxJKtiZydN9v8ADPAA1f8LY84reigUBnXSbBfEUH63Nc5bMHGdXpc66mxmdP3ZVmiQ5r8KyMnbUU",
  "key22": "5bqAfeG7SvmZPmCinTNto4F1kRuNUuzrdWguvbGSJgNTk4d9XCyM9RrgkEynpFNZAbjKUX5q82dD7i4uGsQ58trV",
  "key23": "4RcmCy9Ch7TSKFRp5T3o7w4XWCWWu33RM7jUr7nNewQUjD65YNEwEafj6xvyagLGYqah65DaWoPL7HLB1oVdgCqc",
  "key24": "5fsWZLZhSWX3AavygnrEqb2CrkoMwo1TFNY5ZXmUimzHU167QCv6xFWJpxZfpXu7TdsS1J5RGpr7Fyy8TRR8oL6G",
  "key25": "3N7553Kc7SdcoUNNuNHcHNAiAgX26qqmsEtFrciZNcLDjUvLnMRTz2hZ4RQhnapQiYyxhFami7gW59X6if8TaUM9",
  "key26": "64itRjdFoTycgcJUh9Dq6QpSSJbcN1xH7P6qGoj6NWZrWdYQLSUz73B9GSuuXTKVsSx5PR1EwAenUJf2enRGnnJR"
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
