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
    "3fau5F3dUeRgDSw3VBvCmfv5h7XhTG9UGfjG4nj5TUhZERE63y2DY9atsCmfhFcFuPd5T4KwWEbBc7X9phJHnigX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6TondtWmmCicYWS74V3ZVUpb2jQN59BbJx1wEK6HPanzEx1SNtDfkeEFaLV42W7PbSAnABEEC1M4v2UG9t3Ufr",
  "key1": "5ZHkvLFbnA5XdgX5yGZtfTKUr4JjLoGu9tYNNWPAGTSLC5ZwWrgaSY6j1Tbpx2vZn1okfRju9xMap6TMojuKKsQx",
  "key2": "4cGw4bUjjWheYFp234uyfPqrk9uzMUfV5MPMteLLhH6gG1v3NDXaoBLrUGCFasZ3oTtWptgFgvYbDyxqR3TFccND",
  "key3": "2Voijv6MPLWasPFgo43HdFgBZE1mCc5V4F9SDFeqKqLxnsT1ZtjpDsVSCCnf5HguP1Yp5NgmNBXzPJzyi2xgHrKM",
  "key4": "eZFUE6jsuBY8Et7dWkp1Ghh5EdZdkfXGi8VfFmRrTvFNHGGFvt9k4Kc5SE1ory84h4rjSyyBEqY8vRqdznuvALM",
  "key5": "5NcN2UCGM4kGfpLhN5QQ71gMXQ6BtafYZe5iHr3QL6a8e1UXyDfndH6BytVErcaUu4RCJZz94ySeqv4yb1JD5YkG",
  "key6": "2c1ZcDQwJn7eSAmRvJcFPB8nexquBw7FyeGzBcaQo1BCiMWQZk5AedShoVrxMYqYpz1GicvfkVp3Zjh1nqDC13XW",
  "key7": "5Tw4ReYw9FqNLF87A62BWAB2etazkA8EwToXZXDWBdzJFyCBYnvDPbEooXaf5JX9aLpAQqPY5rsBfhrVcWUU9WVp",
  "key8": "4txYPFj4UGnxSnatVMY5TUL4TiAGEoBcUeP7AXmUsNptVLXwdYaLTmKmQ4o6U3ppwaaTxSs4u1AthXNENZQEpGaa",
  "key9": "5QSac5BewMeDMoC1am7FW8S4x3rz1ndUxUUCxUJG5VXmDLfMetbMjbN9EDQ8LT915RNSf7U9pA8ypSkAaKcFnPFd",
  "key10": "59mNCgohQ1BXAprLcVGKL4MKtxKH67Bp3DSctVG8BPUxETUYV6Z1tv6gBoK1wzN13Vk7RH72dCDpqrLhugvPJfVq",
  "key11": "42msbBiTPdz3jvvaQw92NCHHqVPLFPR7kJVS7JWhpM451RqD5SGueKPSmr3Zzk8YnHDsob2rqtDP8zTWSGP9JM6q",
  "key12": "56Arp1a583C4b39W38GQ3WogbZ7gorEk1SwFHm4FVy562hnozknC43MQdrE2WJDD9RbbM7NUagj4U5iRm9wzf6Up",
  "key13": "5S3rAWVRUYQvrJntG4eXLVkAoiyKPdzCa2pjQewG6KPJNuVgGajX8mgKhzfy6SKQgrBuugEPyatticdLu7nGgvRG",
  "key14": "5qKHDC6Hg9v6MX3UJNTbHRxnfyfxE9gxXKNRk2D1whDX5dBPU1NFp5VAhLR1ys6UcD1BdhGAtF6A7Keg6boAGZPx",
  "key15": "2QB5tMGKXstJKyqxxFEAofFxCSQ2HAKsUe1Fu5BjSCRZthnompTpvLXjohx512frWpXfqvvXq3oBuMurswHj9XBz",
  "key16": "3oMvG9rZcHfNpQJzzQBK6rn68MbiDoVhFBXgUaCnw29h1dFbkzNHLAtRv13yZaDb7WvqNU8DXbDa14dyfKE9VsKa",
  "key17": "3uSZJvMy5ih2uvqywnuGiDytqw9uFTXr1nxXEf9yKDUhfhYMSQWoz2vrmUkPaxYHhaCtoyo99tbXLwKf3jK8Ygcx",
  "key18": "4Myhrd4RtQmK2hYAFCpFoNdRnWxaBz8ayCvmxcBTZy1p2gdXnbVnQGCXJf9SufxTH1HxoYAuVkhyyJNiU9fwNGgc",
  "key19": "3PURfa7jMv2Nvd4uJyLUxJqUKdLqWpTwdukXSgkoRvJp3HGUGiu9NQif24QBfKw62ptDvd5xWhD142b9iR5SsYo9",
  "key20": "2PDbqhtNhvsajuCzSku6UvM3ZFmqFJH5pu6b5YfmckwnYNqitVhuB94btyGqFCcbpbdqizuJZ5eVCWFFocGjCm1v",
  "key21": "W5d1yNnFqWM8BUwV6TkF4eH2kLcKJqDMpe3mVobbAqaea5mbx2mHiaekJfumUpTYDLjBuBx9TZbvkLMZvcRpx4C",
  "key22": "iRfRa8N3PExho2SJrmW5WzTCdK8FB8KqGDd1A5bprfd3MaxD1FCkjkn56eFvaFoMtjbtEHCKsGeebuzJXboktyf",
  "key23": "GnQr4GUNwKasyEsELoZikiSBL9f8yxKACbNeNrHRoMFQV3RhvYvXa93rTvraU65ErB9Th9ZnfXrjFZ5NEXmgbmL",
  "key24": "4BxQmv9e1fE7Aop6vnvkMDySrLqrYsf8uL88GVUYsX5EXuGxW3PCqzM5U54jKTdDUE1WgQMfDDJUhZPnYm9xfJKT",
  "key25": "3zR8H3WU9qEi1gb8XPk3YJqHitqBfQYunjJwvXDeua27jmRT14NSoUXqJ3W1tWDvFut3yGbBazfHcFrj66Rbf26u"
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
