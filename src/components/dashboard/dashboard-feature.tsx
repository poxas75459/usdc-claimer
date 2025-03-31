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
    "3YGorDZnGSbpmrESQuMnVr3bijJSLG7exoAPxF5g1dnz3QZ47jQTGCBYjDQYdRYKTVZ4gu4yyFC5w75uMU9VqSxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGHdUm9FLJxVZWAB1MW5LZ2J5aKVRij8Wz4yNPNX3LxecG6VrGLd2w2YhuzKkd94KBi8TDBxVRf92XTJWeNmW8S",
  "key1": "4BpACkHD5qFYG75EX2jzfRgq6vyuYfMgskxhBprjSdcWQHB8pUkTb7z4NrpwHVPkqYFWSiqXRca7RemKfPMY572F",
  "key2": "3KdsENwnknGbGJFDxemRgJGd8go3QmzqCVwNhQa8SshuKdG7cWZGfgG43yJDB2rFKhaBZzsBboaJnMWWhYXhuiwp",
  "key3": "4Gb1AsxrKWuYgrq7yPs1JvNMGWGZBgFPNtWNmjyWEKiqTYMWYKCXfZNqZJ48zRXe4UMLPPkXmrWXLjj3daqJjb4o",
  "key4": "4E6F2uKvgYAMVCGimyYw88uek8xMKSn3puahDKebuRgLHTECRfra2Zh4UXjTeBi67cpkV63RuE1ARm7zoMfDJu4x",
  "key5": "pn3YDxrbZ4UiNRsH9t97Vtff8jqnbdPSqSWhEhVeyiRK17VkdGdkLK7JSP5EipKaBBtMeQWJZbdgXbH3naNTCxv",
  "key6": "4dWGfKvR22wXcJk5LceNo4QzLr1PedLjwQmJK2N9qErvBthhqP4SafUacnBxKwRLACibvKZzHF28vWCYqgTX6do9",
  "key7": "2Mo97sgTUnPS2MTtU25XFMuSWVYXADAT9KcyAafsfhuKxCG85E2rQQjrg8bcoAz5k2UXeibpLKv8gokg3T59SrxT",
  "key8": "5CkNhWXbascRhzdBiaFLa69ru8xPNSakinbyMzkuVRqsn4A2egQzf1yaBfXhkxoKUgMAy16iddAt7aFFU9ZjGT74",
  "key9": "r3yUjfwLdKjJ552EUKcb5MyJqCG5vu2shLt63pZrXKJGnsx38g9RVZnBZNBY65BZ1M25pDiDHDt5wx5XurFNVaF",
  "key10": "2ttRx9B6oKFNQaUq9MGBL9dMtctTYKFSJdCBPrkNocfuw2cz5dVcaSKhe4u7ZWHk4Lxpx8Ja3inr2UUcYQNn6HDv",
  "key11": "4DNcF4SRuRsuLiXo6t6muhQo7b1tNT7sZ7HnimNkqhVgT1w4BBVd2fCxXcG3E2AGZvum9wuyBRp6nTT8V4mf9qUy",
  "key12": "47MQKReYh1RTBQAqHu34rAF33fqjh2ztXopFzwpWY3jtWkYRg3RycbZ2heqsBtYFtpMWFC2WmFJvifc7WPVwBeTY",
  "key13": "34vdbaqcf2CrZgchjv9o1ALQZEyVULY7SW9zfCtweKV64KD94r8EBpvadEWY9aS426uADxWR3AakgbZrJkxFv2Xr",
  "key14": "R8Yj92rjd8YmHzxWvdj1K7Np9imzWR4a8tp2vwTWamG2LhcaC3LiLixEQo3feYnKzphqF8aMti9Rx2Bd7iFzGBS",
  "key15": "5X11kT9GYTjLU52yHomQTfqiHzsJdUZmqhUYuGENgv9NePQirRkvPXvQJb9eR8fem2q1PjUoaKjZemBe17VPL4XE",
  "key16": "DgWTfUjqxSgwEtPqHoiyJGKU4HqLcLKDhdb2fW418PNTqXfM8QCiezmd6CX2SSTLxcUdUHQG3pgHk1AzMDfobC2",
  "key17": "BgzVkfPXpbXdNwVrLjKDgJF8vVuAqv5vWMnK4goNDYz8ArFBXmMV55tm3yVQ4U1y1QjhkzWnaWJc3LXVjpCoeSY",
  "key18": "38cj3qtRBvEarDouS1L2iJrreJJh3oWcPMfLGSZYwgnKrfKLVsvu4Vemafa1wdQLXPNWvAbYs5gZfYjaBszNKRAi",
  "key19": "2ciJhfGk7MYozyougwsWi4khw6pq7HcLBPenck2dYoQDye6tr326PaHJcrTMW7BybiQHjpiLECN2KwbY8n1xzNAf",
  "key20": "3zA4LfWGL8YwTJDmUGoi3SSCZxDJQ8dN5JNaSqNsKa6kmndpZ1BxcogEvzothfUCreKzUp1yifdRJY8cagKw4Wjs",
  "key21": "A68TZ1WE4qsS3ZDhw2eUW8FB7F5DMpxKCasMNKyddc2o1My1krAiTq3PrXEeyFZaAmNXo81bo4cDermxp1dJNqx",
  "key22": "3qktwiqevWPgL4idJZ12ehSph7YNSmQ1WpEVopwtaD2vLCkvut55TUSY2Df95zhxuitwaBQpCdLFJYXyTzpnseeQ",
  "key23": "2jKW6uygaDKBVRv5LvNnum3W1fXzyYuuzdDXjCpMHYJDLqyuNDB4Jy8sxoshAk6XzfCPNCqfhi4yBsoBtDaiDN7P",
  "key24": "27CkrUw95PHjizJZ6Z3APwDppBgBR3xLK1pYTgZHAaQFbsoRgDPv4NvHezztPZo26dtjRy6U8zKmt1ZHY8spcsvz",
  "key25": "5GYxdytQpEFi26uFQ85N1mYaq7QQvtakoSMJP4Qcer5j1qKj55ASGc3aRjYHxYDzDmYXeiUZaw6HMBmEhZgidLkq"
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
