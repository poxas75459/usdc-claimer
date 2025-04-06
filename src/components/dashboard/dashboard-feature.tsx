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
    "3xHeuqwKMNycX6FTD4v6k8GdEDSPomeZ93ifKHpnaro2udLHDRjcmzz4bkvdeeyfUXgrwkZxywj7XQWuwiKioGm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLTW4VF53LFN5oUwzSW5bxmWAzsmYxGzV9svz1TQpQ6FobZeh2nKM5meAqxSdtWF5bzzvaGdm5SSPX1TmqMPdMA",
  "key1": "4M1XRSafrVjjmX9SkAYqpefsMPhgob5oigQMFQakcRUkFCY1n5NgDYhWmo3qrG8PdocogEvqnHDWnRN1Jff38x2C",
  "key2": "5GvNPTABEy94DVjBTo5hxYh9j77KQ8Y7xuxbKDk9S7f1mV5hHMbCdc14oWh1xrhAwrNTWk6n7k9Qpz2eWdppn6M2",
  "key3": "3mb4F368ZdreZQd4C2ERv4T5Msps8vLfpYjHjXFekWz8yF8cehQZLQBzawDrKYz4p57B24ZgyVSJdpeuipiozwDs",
  "key4": "4WAZtT3YFgZCJJvoBDfiZcnnXTzyzzDB4kAzNj7Gf219azAbT2RUNp4F9N8pfeMnSdHj67D4yCbJ7LNPsEcMLzTa",
  "key5": "5NpbaeGVakty5ARdvTYDKMXnFwzy5tDqrEkZfPeZ1hwWPtFfXhqZ6JGkrqExHJjBcqck2w1PZuY59xxWcT6XAN1L",
  "key6": "5yjLBncHyDkEGrVU9QbHjacThpkAWYZaLZBjFYjmyoG6E2k9yGyJLXBzseHHPGjuFcQHecP5vGzv9dAteaKCUQjb",
  "key7": "3iN7K8ZsBLvR16BkQkpyy7YEapKLnfLoNkxzmYoNB3FEn5LxQW7LG1zdEk6Z73UbCvq4J6xZBf22h7N3fFTirah6",
  "key8": "DdwgBPJBRRdCsvsQAzERwP91w5LdTdLp9etjNSjUXj8XEPsAeYToEjygp1eGQhNzyWpEcSEe3tkYwxHHnWVGmv4",
  "key9": "5NX8Gm6hDE81T4PMAsizDekDDS34ekAFMBe5yjAe14zZfQGMQTgPXMkVZfEDpotmQF9Vj4gygT4sz3GCzS6VMRnx",
  "key10": "3SwZypSV8sBQzwdLeRkCm23xPtuGCS2Mf5cxhacEHN7vF2us6ZekMx5ZQsU2aHCC7A5zL3xinagSpjdi8hw4XJCG",
  "key11": "3YXUcLzQyoAcLe1uJWeNcXw1eyti5ty4EKmqpd3ysj5LRAcYPxWTLt61KwMmi49bvRnkTqrXZTMB8R17EYsqxUo4",
  "key12": "2jiGuBCyqyxSJtKPcZw2nnpnsEKuwf8gEoH33jryGn48ZXQ6eoSqHDViJa6GaF6fQEDVZww6ncyLb3ScebofLGQV",
  "key13": "2EmiXwMtdmCu6oQbzjJTVJ7DWBuVCnyxHqybTswhNqunetDAcd5KPxK12V1HrD2ADii3r4evgzM3MtFNad72qgRd",
  "key14": "dayY4Z1UUP3GVdgV3Pe9KFTGHQiHeYsX6omyL782FLJp27bd8mHjsLUP3om4R4VKwuHCYLxiTNzetcu97j1UUgv",
  "key15": "Hd3wBU3qZoposHYnma3amsAtDkb2jZRV7sQzxCWpf18yvQxnbMJZbw4Uzhcd7kBc3pFaKFBUkcz2eoBKLUmjkkG",
  "key16": "5ZSADZ2GDNVZFGspuRCKrJb1hvDbhGnWhytvVr1wgYFvVEd1ouc7BwhwAL12dHySJoNjxhs39X8uD98hD1vTmkC7",
  "key17": "5RQNVCVtLW147z9WkC4MP1i6QA2cvev6uKLan5ZyLwPcmFuvSnHPu4fkdEd2viQeHJFgnCPhu7T39WwP3p2ueQgK",
  "key18": "5vUw3c6H3QEmWaguvWzQaTgYvLMPdR3f2io91sgqRidWLH2CkuJYkZDGWyyhzWrWhCxBxXEKmEF1q69HLVAQ9SYy",
  "key19": "3kWL2eUUqUKrAnVhBwP2RAqevLhL82JA1bBTxcvrJ9nZaAhctwB8zB63xU4XjDvPtJr3Hrzuw6LBzcxrWJvwRMWJ",
  "key20": "LUw6Z3eEcQ1RNUA1WpS74krvia15zj53FLUPcUkDSKTyYXhJwqCSqJMQedYyrvrvg3UNtPjp1wuu3r4Vu8hBcfB",
  "key21": "2AKRduK8RPna4TwSK5Mn7WZEb5vXJN1Krr8xddWQJYUh8sbVMma8Peo3ufWsvGUpP6umbNAVw7ScrYc1MMdZf1Ez",
  "key22": "3o28AmTfAhcpUiraE29aNMENNxTQiWZNYMVHhVL3uUEVkKzGazFeQaTqdtqxtGC3aw3VAVLi8b3a77PHMnCVuUiS",
  "key23": "5guXR5uQZgeWunUj6rNxvtb9LERUe6PowFbgogdSqP32iTnYgnXxzDmYYJtyxub2912jN6un8Tzo9kp1Zggp5453",
  "key24": "3MBYdLiqDFV4Bqp8UoDjhHYLv6YD1aN19ZurpaSvZrtURhB8WJkXkqPYWwaLnecm14SWwzEz9rGS1rSRUgx9kMFS",
  "key25": "5QwTvuc6gb6YCxNUZi2m4CaEpmDbeJ6cPbgong7YDKpsC9sMuJt8B78aApDiDe8UAkj9qVHr4VZkWwHYvqwevT4X",
  "key26": "5Ajn6Ng54oi8mPsJgRybz6s8fFEuxT5Wu9QuuR8FTyR6HJsnjP13WRzeH6BVH5V9DKYPW8d9ARbq3DwqRKu5sBrH",
  "key27": "Rsf8WZjPmtXziGZGJLNz5LEDtPKGWHZT1ijszqx6fXKeyPS2uWhYRQ1cCvEKdYvqyj2CYaSkwxaM8H7kaXhmMKJ"
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
