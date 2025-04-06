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
    "4zQUSM455ToLjradRJHRvAMXFVTAdYFGJCsoPnDe8MGtt8VFecn6NuozcKBhVnKa91ou3e6pXRC44kMgTv8wxDfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1ics788SQa4zUnckkuhBYqUBmLspZhH57s2zPzYuQSAVuTPrrqVWyeCgL4m9n5oM8FrgPX3zUvaw75nDCgMVyg",
  "key1": "KtmWHzncNjKAg4PoBVU46jwRYqvAid9PiwSE2LQWSwmvmvszNZRMxxpwbTxiNa5Ap8RgsYahTkdpdvYgQ1cXUDQ",
  "key2": "64AJdy9YAuPkYS7uTavvugHVfSuR8FUPjBBtCuPG5k4FWDdpJt5p8aqqDhPjBxLJ7pnTSS7YKdyAokJFcNwJpQqW",
  "key3": "4G3gEgMSTQZWqdV2bTyFEaWzApFGrvsA24XSKraiMip167A8tntEi7XLuQRZmHps33sX3Y6cfErwCjA1sBjttYcW",
  "key4": "47rPeDBy6UCe6HmBn2X5pnp9yhN7g7WQoQ61sFf4Xdsfj1RNq5x6DcMU9gQjTWv5YcvGKdFnA46BkpijkTDg4Mkw",
  "key5": "4z5hzuJC22DCyjMWxuvCZ6A4qTVX4bLcxtqoTrq2rx382m9Ud8X3C954VQJRVuUU6tjnhrEFUHiLsD3mF9eLpy81",
  "key6": "2EqYBK2gL2h2bhTbjAW6ZjX1DoJ1yKvgqxiywEgfS4n3aFnoYzzShmPaKoWZzRttXgzesnrT4ydqinuaRKv1kwFL",
  "key7": "4SNjwchcWsh3kZPuAPU3JkZCxin3EB63XE4B76SoP7n8Vtdtiih1ob5SfCwVg5Abnm94DSeuJYiSUQEVJCsxFh2R",
  "key8": "4hPXCUPwztXwT73rztgS4WSRE5oVjdZsfRJydY4vvRf92AaMUVWQs5pjQotxcnV568a6HVTQnFfqScZcABZEDPBB",
  "key9": "2eWHRVBDhtwT6n4aJ3JEdM5Ky52oftNUcDA6x4eLbYVqz7f3DucWiU4pDGLnZbNFdMD865KmkCYo4QjMuGbR1GCy",
  "key10": "2T36p6gYBDRCvtah6LJ7paQgdTyZEasTGjRjrQfHX3LTBB3WeR4C7KNCfKPTUtMEbqRoTTeudkCfNjtLDXYFMegE",
  "key11": "56PBeoEgbgdkZ2YdeompQSv9UabLrDE9e8qmpCRCqdZDtRbFYR4SRCUVkvhLwZUXJzTCiaTo2EECY8HPZiPAMQpm",
  "key12": "iGQypP7avsWE2FhMbAwcpScPRWqKowfvp6L7swxT8ZPgNsSuS24DkxqnpCh3SGyuWYAJcevHBhitoX6AB6S6zWb",
  "key13": "4aLHKWWXMsvKY4Q665A69sBKMVq4hio2MNZJjnyP96BRsfJ8k8f9KLwxEWTfkrzsZ84Ax1mt3XLcijzw51ZLX9uN",
  "key14": "5oxGvYzm7Pwk4h1UjehfMKEFLH7Ms3cG9rf2Kug5Dns5AxxoJEAfmwZgYRTrHGJ8K2HSUv9qGp5j7rPaFWbwCahR",
  "key15": "5C676Urtq7aMgPbxSBvQtn7uPJfNWTVtgFV6Hxx9LMXt9KSi4kJYQphDCM8Yqsgz6dXruBSk7jCs7sr6ui2zaEEM",
  "key16": "4qEqtTSqH721zaccEeWBpbUQN2SGCTc4AxTkMKsUMvRNaCoX3oab4RPDcgavMqYcA72bdKwfgwoCwoTDsFVytgqG",
  "key17": "4w5BJB5GKudLWwyAYRuws2vic5RBsFwbjR5Zk5dKFB2vz2jyZ2PHuaqRyVJAz9tUQPyUmnj7csoV3ZX4heyaS1VB",
  "key18": "4eowedhaEa5yoekB3JLuzN847CZri73JetK48W4Jb3KvdZk9xdPG352CQJRq5EeHR8tuQChAXiuNPQFkDvCCy7Ci",
  "key19": "2wojt22kEqEtr4eDSC1xNcN4jpYSQXfKTRw8nVvf3Z4ZmCaA11sm9AEZxLmSbANwfrjq3MG27mynJeZDxW9wbA9",
  "key20": "427CB5ErCU2Toepjxhia34SQ1aGzZVfdavCFvRryzsta471Zu2eN911Lt5ujd57tXY1LeSiWi1XDvk2yK3sRMs29",
  "key21": "5yps5MqRWh2AyeNRH4cTsoAQFdbiNQ7kPT6J3FP4Dk3CFgGQtiPuPyNFZxRsEe3DjnxHRe5EDaDriaJLQAR5Hf57",
  "key22": "3FS5sjiUctWqW6jt7oxbRzATP7MqDomYwh8M7pDDNQ1PK9SrDDBDVCBLa2PzYawiH3RnUJ4nwNtLZztbpB4kotyy",
  "key23": "3PLRdcg58wRp1bXt66p7ShGUWD3h7Wbc9VJr23tyLYWyHALvNgZm7MvhdQQCjoZsYCa1H1HZQcBrcCb959Md3xZW",
  "key24": "2fX9yms6m7YECTEpJerTNPEAPHerSrncWkdrTJnAnhBFno6BwnxM9VCmpwafwT2jhekHVyjHuMYhxok3ehcNT7T2",
  "key25": "4PPe6caLbhkYfNACg3VgX3G8Ly5GKRWUcP5JLCw5v4PmF4iVZURYqrJ1Upe4jQRpA9xBzdvQET2q9iFUdHHsbGeV",
  "key26": "4HCAyfPxhpqBmqEHvgeBvTYyBMuzRAs7WU7EygrksZwKnmeyLVQ9LCk8ahiLTRsaAmg294cVvpozeiozQw536LM3",
  "key27": "3NhpSKmQfsosoz7CioZGHE6sN77FXhKM8daYDSucxotmjRZuhNkFDqq5T3s13CDfYmJnnjnP7e1BzXT5s7n5kaLZ",
  "key28": "3ftyohZfy2Dre81CySnAtUBhbzd9Xc6A2fQHh5MAUzw6oRoRNyYT6ddyX2PL6vtZE8ctXVLpxb99p2nWcNxuYm8E",
  "key29": "2r7jUFzYRtwLn7NvXj9MLCdg17vCc2Aj8Nxu3uaSnETsH5RTptzRtxAGSb5R7aL8Pnvz7n3Zo5NJjBSfBWcFrUPz",
  "key30": "uxbgNyYZNqxLN3rFPimimyyYpMrmqnesg5zxh1ftsk2ocxixieBCoXZ47quEpCS4axMzDFFyrWXmZ9Vv9UW5Dcq",
  "key31": "NWgFSN2krGS6Xj1vUdm2oktpyocAK17Rf9SZWTnnTReNcf2QQ8yLTvqssP3yZ43C4Q9wEuxJWKZteVcKHk8cTJe",
  "key32": "4dAb75YNDdsTbjwe5AaCSKWCjbVtoDebWmpGoVeQYNSud5SmALkznJLVSBNSSK1cTZLGut3K7sNMwS9Y4gDTrAZT",
  "key33": "5KjZSryAfKkpuDmeTywJZuXFFo56BWwrxrivchSCncv2ojZLgBDRJEtgPgiXgoAeqXQvXn8mxqo4C7nqxAL44kRo",
  "key34": "2xWiocCKG4hUmq1E7djCWppPEQoiX8ydbqkTti55iNqv9qpabLsGcNFZwhUXaxXnYs96xzNNf2QfWQ8P2m649xcR"
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
