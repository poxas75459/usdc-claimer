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
    "3Gay1Y6awSEdCZhn4R3JGC88vX6gzgE7W9j31M6tambeh23KubTD7TtUh5exwUEZvV3mTQ6vNjrYDVmp9QXmtNGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V987y5BAnbwjo8TW8VBCbiLLKvMdSjTLign3LgnQ4aJrkLJ3BjnJXUHYefPunG3bwsT6pEhU8oCCtUbtZxpx2PZ",
  "key1": "2ych2LiKYctY22KBGEGwCU4XbHj7Cdfay9Uv1BQHcjem9EbEP1XQv2spN7sQLWEguweEwmULmRT6i7NW3A4Uic7r",
  "key2": "3zA1a9uhABFYy65K9p5VS9GugYL1uww2CExkiEJkrkJcqM6d1Z5m7gtHNqHgeCzSBoEMkNFofWCBG25B5MfCaxSb",
  "key3": "4CSYR5wWtt7tm5SNkBHtn5zcdprdrvXn5fab28r1kmSvtwbEgnowJWdujY3Q9WRDbnoByoHuafs62HuQQwv2azMZ",
  "key4": "5wcAC7RdvSiewxEFYBmVfWNYsVRtJ6rE2TNKSK75yaWBRBn4dCwz91wXq3H8qX12qiFVVn1tJ9TKrDAmmGaDSUeq",
  "key5": "d2XmQxWrygLSjZS1aHYzBZHC41zP2LXB9ZvhxD3HxxibeeS5jVsbiZqMgVCBmhJrkGDot9SxfJjVxJ6DqugXKu4",
  "key6": "2vdKdBVCLzHWG3iopJPpKvpVVxkcTxKWG8hG6NDpjXeY8sv9VfYNMVfesuTKKrE9uzokKaH8YWQtpf5HGsL5617h",
  "key7": "5pYzfGn8uu4ewSv7EgyWYEh2JonVgQFYQTDP5bh5h3NAAVUbkPvx6rQ4VQYzw4Rhdep7v1Lza2cGkmaEcu2trk6i",
  "key8": "4nsLGw8QDdyJyV6KmovTQZv6hcYT5fUA2kV4bA6us9ioQvKikypaWHj4HYfnKePDNY9Qoes4c7doRLtvJie2znoi",
  "key9": "3WqbMc8PAuMxdkL5xn3QgXd4rQECsE24w1gAjsvKwJXHfbn6RpETZd84QEsBX4d6hasmUKwwk39yubm4NfqbCuHz",
  "key10": "DXp84XFW5iRmQAN8VJvEYhWra3M1jsN42c2YjxjWBHtsUbcG4QSQR4UkND6KZfMXS8pkTqMy1aCd7kHEtrnWZr5",
  "key11": "2T9aE7ASfB1oUdYPzZUy4VdJGkZqrSRs9CLKAjrkkRuvSo97nTBYCNUXs3b9ejwnTFLpZuCLT7H3mfUATSKrd26P",
  "key12": "2CBRNBjBbDWAADfUpvAYqhimKZhNTT8aYMYdXUViyAphwkp55J6m5T8iHo1G9EJbqNvr7s9ganSS674MxDj7BC5b",
  "key13": "424dV4bGMMCodAfAoHtUbrZehdEmvBWm27pRH27bDAa5QhNMoXRUxWCFbdecx6j3F8jMRHVtgPw91Qe2bBKCVUy5",
  "key14": "QXNajimmTpdseGXzdr7dLQmWKKDpa9yxmk5Ldju6Zk4jyu9S8zusk3xrur8FvxXWqPYzQ6U43DsFo8YWYtffAPN",
  "key15": "5NP1VdVxx68LBnjUM3qw7ztadLbbnSvrW11NYrbHBUgfdQ2SafgZKgdWRcabH9ER1suVY2fQ9ZCc21V7mFgYMNY5",
  "key16": "2PQRwqbBjPoBxfbVMb6QbDXVGywFjtMBncXQYPjh72Xy8goBXmmhJRT96TJH4rxufgr88xyQzCJ44mvLGrtfF2yY",
  "key17": "3RjFpKrg9u28itULyRyAEAwnAhSthcwCbxcJGJDBmp7LN4phwQjm8H8bTtmyqCAYkwGLPP73iHWqqe7wJbY282cw",
  "key18": "59rhX3bMbVzqMNGzCxSKSJ9T9sYUxVLNTExgFF5S5QdciEmEdLkFSo2NxgBsrdHvKgPnTjFefhWucwNyfLGZsSpw",
  "key19": "2k9VWtXQiJG1oTa3C9M87sURRbaJK8UecVQioYSz8X4ozCxQrK6Z2tWAth1SRmrHP9EfKdCG4r5SbTkJ6FDA6coZ",
  "key20": "rLpkSqnthbJPx7UefjNjoAxgSPtawauoPPBb1zFdGZpWSgtbHiy79Kkei2DTZQwg3o2TWjE46FWA2iQQiSc3CD2",
  "key21": "5imXZLTXSr6Fg1AypwowdeUnshsQJdk6KFqtfizjxWKhMByD4KAi2d7q6s6T1Niu6GyQX5MYFXfYcqZCGafrXvQW",
  "key22": "5X64TDo8jtCE5fq3Fds58TRaB6oTDJMrW8nYLx2YbiuMoX6fpvP71ZVahVEMuxTh2QKapifjZvQCcrMRwJWDGfG4",
  "key23": "2svjSWbNbTBctZhSgq4txdszsH4i9ZtBsvE2ev1HMCbCMzLezgPKmaDimqKukN3j44jfHQ25mdK7qsc88nefXuAg",
  "key24": "3ks8WQNCYfZGA3gSHT6eooah8rLk18az4xS3t6irxfJXvGiDx8c27f1cYgk5K5qdREcdsDAm8gq4XjT2RtxBYUnX",
  "key25": "5nC1Z7gCnauLAwz8EdWQG6EZDsV23o2w74Z5WGg7KPnts5TRvTKPNEchXvDsCVjiDNQdZPUqJkn9hb7rC1uokgRS",
  "key26": "jTpkW2W5PUFxqrrTH3RiNMgf7RK6p8tnikXadDDmkszrLfaAcvAWjKmTzLD8nZB7FRFtCgqHKJWroCt3zkPWA53",
  "key27": "3G5asPsgRNteXLA2gds5WFQVQVey5y8oXQJu3M1K64HLEPaWEyJ6jGcA5wV1yh8asGAhQ6JA6vpovwdJTLcoPcSp",
  "key28": "5VVu3Jm6KibtLCXm89otqnn8F6Rowmy7EZ6RJUYbJKVbfpVyC8npJhp4dcYxBX3Phkmjqdjw1D7BkZ3dC4Y7A2sA",
  "key29": "3r8QuEEZvWfigbsMve5Yno4Gbeg2he54RpNEd9dHKJmtbHADdPZGVB48qPnm9jR5EmQVSjesCyqwyfi4Q7gkSMt1",
  "key30": "3w3XPan8rMp3PoEWC4pHB7WExe1fwWqJjCWPoNr66BTaCyG6Dh71PVVcwJDZo4WPQShAUvGBcXJDtP2yLjjrVKNS",
  "key31": "3vES7rmiA6Jk9XkqtRJYN1mREv9KCNFA9WfmxdA2KPVbvna5665zcubV5SUPTkbdtUoZj9bs1oJckryDaqUct2Kw",
  "key32": "3YXrbc3K6jLbHMGd22e9abc5ohgtxLMzGD1JEEBtrpWQYftcjZ1pvBtzmeP9xuPMJq7NDFaKTcmxwzZpwUX7QRnU"
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
