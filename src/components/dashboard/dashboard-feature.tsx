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
    "fxeBK78FxgX6UfQrNJ2DgZ3HSWuoTGXAEpLixRf59jtcq8def2yXKjhaNwjZSmaz6LN1QFCzcViY9jp8PBo1dhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBzq5tGm3h8fS4Yq4sRwFdaQxBLoxovCe9fb5exzT2nhDaZ4Y5aHywKb5bPVEKV6omQbG1yCLaC7qyDJpLR3DrR",
  "key1": "3F1Y7wqiPpqC46bKoPc1g81iq5h1ZrfQvFQKEgHrguobQHYkAGiojxbA9UgHmGkPRrSrTSi13dfg9MUoq2Lzmz4S",
  "key2": "3NsiNMzvHUYeivwZNhjzKJGY2X7eqtK8e57iLzLjUNA7jStRYdhvNuA3cJQFj8kdZ9oRbeaTzkiK6F8wgKRqZNSW",
  "key3": "34MRKpwi3YbQxDUCjk2RhZL6QR4vQ2ryBtoVMmSU6zRCbk1HjmQTFcyip2hLa4Swdm2cGX4tHvADscr9RbxbMKVS",
  "key4": "3gQGAFXKioxtcdt6ahmZCBPcNBAmzjYFCFnNshg8smCCFVXLLonGzyGJFcvYPDe1rkvSQWZvsDGaqsCDG9SVSPHk",
  "key5": "Z4AbVXgghZ7JaAsczBEzJJ4WucjbZ29BzwbhchJpwtJmFPW6axHFpoghWyjn5FWPUqn9nfNTWMLtEXscajSJe85",
  "key6": "H9cPkaHTUzU3eTQFPACy3LBtUgT3sR76325j3qge45ZhNi7UhBFa4RyqKRhyai3DtBydrvxB6hJ6Dk7TuL46wZe",
  "key7": "2ZYd4w2TyhL4NoADdGKcYDZgJ6osoUkp9nPkk3yKmDphEAkcUsS3evzKVCoz4ZijtFcbVFsS79Nzeg7GHf4SiKRL",
  "key8": "5FnuzA7Hwfxq8dV265csiNbqdKXAL1brKu5Kaw4fbZkZCLoSB99C6wPR4kp7Raj7v45uh9uBqT5nvc5sas6kox6w",
  "key9": "cnP5PyryMAby3zjGEiWm1VM9HAJDirZRTpSpGnB3zunv5sRoZsX2z16TM5Kk6bRZmHvuMGc6Q8n35aH1HuBQWo4",
  "key10": "4oFdoGRAL17hwtTEYVDq4fq3fxZJMPxjNANWostvt5RjpLBgPpXZCipyvZn9X97TsKf8XBs2UYqLbtbbKVpdTwvd",
  "key11": "25XTSXbpskvw9ytEh1uSWJRJg8LSkQVpRjkjtAacMKdWj4v6YS2AExkLbLvjYFt7AvRicr9WGFSyepHQgPm4ku81",
  "key12": "2KFKKyox2EQSGBmBVqW9vqJj2GUQnY6X2FRxPK5VL852sfGp99EjqvKy9upWrZPzXr2YVXV5JJxTrsD9BZQWADwP",
  "key13": "3TxHa7tPhSfE8pJG4g4KTV2nYcmyYEQR769PA7ycWfmw1Yaioosk7Wi1PsVwfNNDaKQ3G8C6C9pNK6cnqHH48FzN",
  "key14": "3iDxeGpYzLaMJgFbnV88nDwDKHhVVeiLt5dE6NAiVdf3qRKJpbsWgZKNG2ThhtPit5c3gKNVvXTUu1FVdN1aG6u3",
  "key15": "2cgkuC34pdj9BGbM9pfL2SSDVSbRRku25pJRCAL31RBTwV2kNVBH9MmaTwRkA8cjDQb6ktS2cvYwgZ45R9UmoRax",
  "key16": "3VkEnyrViUYnrSQMxxiYMHeEuiMHp8nbxRCCCEon3edFFKW9ZSi27Y42a6y48Rz8cEeBHFgW1maAgVsFbSYQ5qm6",
  "key17": "5RtfnwqFjoQ69Stxerti6QuoPf3KnJvrwJWzHEguzuqy4rYTSDJgt17rRpsebDo5wWTxbzwGGKg92UqauNFHD2oH",
  "key18": "adtYfs8ASfcKBiKqKv1vvV6nurSb9ZUrdFHwucF1pQuDAaY4grs8FUnM7X9p1oHp3orpN8cE6zX1b6xwKRAwnvP",
  "key19": "4TrKdpg7Qq3yWWKM1MkR6dLwhPbKi96YkGfah5BsR6c7F89kA457xFuaeq7Hgzk31ZQFVhYcedw96mRJyJMiC5ps",
  "key20": "25VnDeySGHW4aBkVn7u2hro2wNsayxrGWhtnbefuh4tJ3m33tSkKD3Y9cTf8vDnqmcxapToadBPSn8fygdQiwqw8",
  "key21": "5emhp9DsWjDuFs1tg3LeTEs7JJYzUsmjLCEZkbnTXWkoWcJN3em7Et69Rs9Au4k5hGkQmTHZkNoUy7HcFG36m8tP",
  "key22": "2GHYiQet91nMBNDy8oGSVVi7ANimnhcUF2wfZPJB1J49TwfRrSfW4zo2Vi8Y3tMxpeC5CoFn7ttZgZRdwczR2vSY",
  "key23": "4timm2dgRxAcLRA4BsADi9FejgaDE6V1vbm5ds9qGWTm1hQBTw2PY1G8yx6rnXSEty9Jzp1eiVFuGtQwpyLAWiUx",
  "key24": "2BVp583mBAbNUdz9tKKzC6x3sXihLzANf4xX4Ur1pc12ZUx4XiDudpjAWprKgq8essE8ZLxWr8XK1zSWgbDE7dJz",
  "key25": "4UVwQ4ReUysoobuxy2Uc8N5xdC24X2PaG1x2US7nLn9QuBEQ7vqYWz4qmk4Yn1qpA8UXaD4VkmyyctFbHtCJd8PJ",
  "key26": "4JLoimzcSkgMwGCgArmLt9Lj5HSoNTepcDvULKkb5HWYC2PFsBcDMJkw4zbuMJkoSzVAbMD7hLtPinshnsTW9Spn",
  "key27": "mf7HhUPv3NV4xzHeQtH7bwHaeEzATt2LL5musXK2XW8QwUdgcrd1PzSfHfaBBqCErRM6bu7dZpGzKkbmZZh2xgz"
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
