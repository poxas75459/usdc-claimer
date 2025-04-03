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
    "k3VbiX3rTw6Z3ViR1ejyz1VnBQNf966sYnmnqTnxf4tAi6dYBMawqJ1BS1ygoJyfBAn6aT9XSfhThD6RWGpPZHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pyLhraHJLwS34HKVVmxUvMmofDzwsmEjBLehAWQU8TLritLsCUYC9cCb8x9qFfVme3aNbGrAzpvNRx4jwFDtvbX",
  "key1": "4MoPESJdMsABzq9n7L3RMbDaF149vgotupHDsYw7JiK52aPuPkeb3gHJW3dDhRHt69KX5wzBL2sM766gvcYoVTET",
  "key2": "4raVwrjLToCXWnJqB8qZ2VYbxrkjMdtPfVQJMB5xPc9DcbfpT9cmCnzfPfYqLLngppTFWUGhW5ngHSeghmjXNLLm",
  "key3": "3VDn2cdbNRucm74pqJdy9HsgjhUi99YgVmk1EafFVf77bhJmWAFT9CTkk2M7EgKec3FQPkNqWHzAKTfjabUU8sEj",
  "key4": "3VXXiEyaQNSxepxhdVM6uH1VcUrvYdMpHSxvsvfzdJfQm7bnPhSoVRMupeAQ1SQsotw19mS9moSHUyRLTKgm4a1p",
  "key5": "3dAqvDYjBPS8uJcZyftAwGpPJ1XmEvcYvHp2tXvJ7B43mZ7DbG6YpqBXsYMbscsjk5pK2AXtSV4G5XtpJe5brBV2",
  "key6": "MgUPYVW5gdGZPwT7XPzAGy4dE8LqYWpzuKxkD5yNzf6mTovoTdwUCnMm8M34gLQ49HHwgnFP5f2DdcSuwtMWQKV",
  "key7": "5b3hrErFq53LG8D3UtbsmJwPd6S5qzHhbrctdURso5g6cxZ58V9TsLfD7CgL5mFWqXiComnBzTsMuMxGMRrzhw7D",
  "key8": "2j3ULLcqEp1QZzNdfLwSqZJgAiicfenjwqxV8C5smjLLM85ySEACtt7gjhNqoWhASTzWKparNq64NYYsP5Bi9XnP",
  "key9": "4gigSCebEwjppdmbWBhryBigV14pLJAKs3nzeapdhmY6rnGDbWByd4vQrBjQLDE5arop8oFtCACqudnM4tqL2i2L",
  "key10": "4d3M5Kp4DvP79jaZaqN7923njzpo75YnUztKQAV1TW4f8v58VGRomc227MX1qtURZzE3XeqK5rWwAdfCBNvDZ99V",
  "key11": "pkv723d1c6mvMPNds2ZqKEQxK17xZ1eQGZXx7HsPWj7A7jwtsH3cqDuzDy26GNTeXLWV72TQ4QBEqNE3BZWoXC8",
  "key12": "5iNQuzEHxZa5njMWRtFMDWVe1ZY3nkcTqAfPyoDHKqf7oojuYJPTjBPTEECCjorddGwZgqeUXSBgKfQWKsrr2XyK",
  "key13": "qTWTXJvNrmzCjxyNy3Vy9Zk8zRexM1NEL64JzSqL2cCAsCR2feDr9cCkCf11giyaF2XKuApWFuUYtgaCvqahMw4",
  "key14": "4jz4NJqmrLDECSrJuMCnsKEyansgQSpsQ1wyfbES48iDmEPiEayRMeiMJYA7saHNJ41X2M9Crvs9G8uBCGc18a2W",
  "key15": "5rksjdJgSBE72JW1oE4srq7eVEiYN7jNc2MW2HPKgKvqmR5iyswDSDUnZLkV7qVFDfZZ3dvX9oogTC7cMTTUwMyA",
  "key16": "51myhXuWmzBWe5J9qYa1Dsj54J7ee3hmgD4s4SuNUAgEVXwpcyEWH5nakVMQ3H9Q1K3GYdQjREiqyKGfru6GUr6f",
  "key17": "3n3zc8WVUkVrpgofHda8Qm5YZtSuSjbErDwKNWJF3MQWeRwks19NBijqwXa2LPwadYntvVNQsc2AyGUYHXPJkWuS",
  "key18": "3F9fPVb4vFqeQadmf58vdK2RZkQcypL2nVbNaoHiekPjPVS3LQHWajbxekbzKRecqaQDqYqudJRJqzjkqoBMrcmg",
  "key19": "5RQ6HKLHchjiwrjL9de2eyGgbxGDWoswUbyftxDguvvjeTWpv3TiThT4WVSmkEvkWbzPnfXeTPqZDrSV2YerurEg",
  "key20": "2vC7a54nnW9NQvWipqN1trpskF6iPFWqeZ2S244gzsW4cTbyAzgsfiG8B1enXNN9J1tbyqBLEXFKtqmszbnbmkxR",
  "key21": "2onEzE1F7N2XY6qH1gg7EeXDqqYSseRm2CKCRUYJ8nAcAbG8if6QtKZAHMCseaw3FTBhJySh7SsjdWDkmxzScKav",
  "key22": "qVcm6ZBLzbqxYLPb94wKq2oc3sGrq6LyRrx5fritmev6aCR1zZTQhm2gKDWkwCCyQHcjvwhBgRVvKvUHRSCxDdT",
  "key23": "6uhmULtfeQoBAVmcNNoZTT2c37vrXVow18E7MijzahdLVVU26Aeky1hVCFRaUoy9vpxUha9xT3a2tQRNe7VZcnU",
  "key24": "h8yhGkE8KPv5yjieH2kTgKKk4TVzd2qP7oJhwx6L4QB3wusoxugsopNaf7gzjGbqfGxqMxM5CT7n5X7wmLQLVJN",
  "key25": "gDJhYm1eyxgGj2hTWwHLunSLpEd38EHHUSfX9YiRPBnyhos5Qb9CNGqirNcHSd615b5uWfRy37eoezXN1U92x52",
  "key26": "57ZMGGHdEGEwRHCySnJ9T3GpkLDptg21rLmxwRjbAzJtbaYhBE2XoMqFPCvhBod3Po4xVTLYvpFVhfG4v2Ezidbf",
  "key27": "4Wy9fLeGCZtPLSqe1j4GfoxJwPEXL5z9KFTzj71mReaM3b3L4tS4wgwLmAqdrc7xFUgewkgtMAs4wCZnWbQAnrYM",
  "key28": "rQeJiLtMn8DsTAszCLv94R1SUswGDejWNZxnrWEH221mjCqWqa6yJVkmvogJBxvbUDXqRbdm1XGMfwaUrFp9a93"
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
