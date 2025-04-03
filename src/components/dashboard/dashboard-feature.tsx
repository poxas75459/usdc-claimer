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
    "2CQzoYJhuwbmizAvZaehwXthENzUCBm6KuqNJyBChn9T5PX3VSKjvWaQs9oc5Hf5Q46iiw9EbrrCZEZ6UNqzwNtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52peJfr25jfxegtiG1pdBCXuQeKfkcsGVL63QKQognsKBa32gcUR4DSrPGzvSPE8LMBsvFJmotB8vkLA36AFeJi",
  "key1": "29zLGxe34uQK6TNsDWxue3AKneL8ajTgXUZZVDYfZ9c524XL83gtSU9tbtwFb6PM2Fwt5v8mDjSWCduNCcdcGcSL",
  "key2": "5FEqybnctQSebm1dKNg3fzEoPYNhfV9Cen6wosuNUBNymdrddh5s1vQPmxHBHqknqKr3WTAuFbEqP7iAMMMknfZf",
  "key3": "aqsUEzbxhWx6VN8TqYEeYKRd8RHcyrQgK9usmWUdbwTfPPPA7eFBLAGZJ59H8EprbN1hxevxgX4x8o3dU1owr63",
  "key4": "rLS55tgrKjrqvLgbBjcVQT2Cs7kneY26yrbHyJnKe6UyzagRxmW6a4C77oCneHaL1YivBA9diSKgbjEs1dS9N4a",
  "key5": "3DD6xMB15P419GnwEzsudtsMzbmNdp9rJCcwRPPpNJU622SZHFLkE4hwFqC6YFzxKktzEJgyTeB1cS9QxFj9pnB",
  "key6": "2f6EH2AcbhsSzZjB94D2ofxoro31ctHVwdeUWa6DmXqSpPW1z4XTU4NqmxUNxZgaEDdqdoL2wgmas6jL99qmFCQC",
  "key7": "3oLYgGMYo2c77mH4Mvn5fnww6TDnbWEDA8ZcFebpBJNYf9W8mvjRuEC6Eo7aKk4qJT4wC6SobX7RKRMEyr6qdWYH",
  "key8": "vg5Vd6o83AZoPqWR8ij3KBG9DVKLin9XGWfpegBNBVixbwigJmtXQAfibTdGenrXzwGd9CTm9BUKHxuLyezhGTU",
  "key9": "5cEj6HmZBhyHND3mxBjcdxNrXkBQoEvwRsTnKPr3rXPumXCuHvvFCGL5SGZqgzn4JdtAiivtowUDYFkpKsptBU5Z",
  "key10": "5FCVnYUkDWrVuN7UeXeQBDjKct6m3v1PSDVC8Fq6jhLnuMYG9WMRqUx3c3fUKdK6Ej8G8zdu8mW2PjRRT8V6hyzV",
  "key11": "57uA6JooredTBHwfwU2FG5eQAL4kUUuH6MZyrmqrR3ZN9nxGq3XVBZacTYfgmriaFJBtZz3xE7LgiLektRD6V7pv",
  "key12": "3oPnATuqjGMGfzqjMx9SJq3XJ6Ju45vzNWCYaTpmzGYXMiUEt7c9CQCvvBsBTw6Waro8hEGZaWf3rnVEnRrFoSbY",
  "key13": "7VKemzXS3uvEuLVscrVVs8gQbXBRT2Y4S9L361bPPK8RsL2tFjQDJVfKrz3cgkzZYZbNHfMSDYuMFhjXvWumGMU",
  "key14": "5qLLyMvY1z1mGLghPShumJakLDmx8Gxbwtu3CcZuwJYHjxWc81C1eQfQzc9x6mGhgYM4kUbKjvNvJtGQHzwYXDNJ",
  "key15": "4FWfzycVBWYZWEr9mSPacSwFTAktb7vXVKgchDbQBycjEXKZNTXsQHDLaVzEKU6v6yBw1iDRVgT4PFNjeDbR4WYk",
  "key16": "3Si1Nvg7StH2VeW7NEZYd7Q78wuY9EUFwCqee7XXFyP1AZgDAvC5BcxonjPcC63tGQJycpY6TkrWSG7CpVTvty13",
  "key17": "5EUabW9yzVqW1imGiWQTmFsvncsVz1R2cLpeNkANCmWWZ32K3qnh4HoCjpuCfcooNYVPT8F6k5K9meuM32xpR5J2",
  "key18": "27wWxwqhBYaxpJHBrakz8R6pDdHoZa8YM2TRwn9Z4u9Vq4Tftu3gXR5MGPxep97UbqXPK1wKZ8V1ZAMTvF5EcSBN",
  "key19": "39ygcixpACYpCnYZyXNTfYLFiScxa1VbtubU2Ra3aJQrDjxYwgZGqyF3UMNyn3MAUoV8eqUczNHWq7VapyUNZYUx",
  "key20": "5YB2GzJhNBo2m9jVNDxr12yMBS7L9RNcbdBrQuw49ncgXNWPLnKiiaPvfh26cfNiYfE3pfW6mdEuXaCBFLE56V2C",
  "key21": "zgARRsQ8i9oH3DahTL2xXqi3GamZWsgQPkTcDABGW8U4WeiwxYzBKTNRhR9Ytr2fBd1Gg5Ebq2uJWT2ZD4KpvzY",
  "key22": "5RRLehu2N9HNGKwGnxxHjvBELJgnaFMCTqm24P3XVvRigqsh9uyGb46mjHkvompmjEe57ReqWGbqrzHzdmy42C89",
  "key23": "4ZcsVNUX3Egzf2mr1S7bvKnnP8jDujZAQnsw94hPamcD59UyyWkD7W3AEw3Udp8gJuVMTiCoR2XSCf5adV1SCvw",
  "key24": "5mBEe7BwXeqp4T9RxBW7CDWttQjVHrizbNAvmSzhdTLXzQGBgyWPpBjRkk9SDnkmMHA8jTP7KRM18YBF2VPJKTwX",
  "key25": "2KcppnZjCrD8GhNgZVrgmLAtFYcKExV8MhLsPC2c4ey59RGt2yVvSWjenYEkXKj4F3YRRYyWXujLUnPBDZX5ryHv",
  "key26": "5SeV4PCGFYiq9PSFtzgFhuhwBJo7Swz6eiV16qDcUW8CYQVFes3FZ7b5Gfu5mywwA3pnFoZVMfu32G193s3aDSzY",
  "key27": "4ePxFg81CyTYCHsD3fZCPRHMSfPGSWMPZt69kM6Asx8DcGveQAA5ztDtUuUecVygXcjRakeEeNqfhaETHA1NFfzG",
  "key28": "5CtLWLhNxVZfmATB3g5SPXsquJUYrc7B5zKfqdxGHmUiDZTdP2nv29HKknmvbRmZwnBoL4FiZ7Xgmt9wgLX39txn",
  "key29": "3GDbQqK5dz85BETMn5TKdcn13LM4oYSMEtMnFseJV27XgDYHRCFoMXToGAFZ3HqVL6vSqETQhQw6RJ1ZJH28orVo",
  "key30": "517uDt9KhVmasP8g3PjjmcnfLdWmcV9FJd3Uids6csATbtTk3NPF1TazccsgeWZzAXfBvkDNwtJ2y8johPGYKiDe",
  "key31": "3xXZ24Z9vUjuxXYaRvgdfS51BKZHGhB2WpKxvmVufmf8mLszYWSD2HBFTFSKdupH8Tkvy4n6PxPGyBoMzS5vKC7y",
  "key32": "33enTcUwAL7S5N96TFd8gucqwoCXmFdK7LmFNqHYyqUkBXUehfGCZ9ZudSqr9Xw2gB7dnTmHKYHEEDP7DEGuUULy",
  "key33": "bJG4DgpHMZdhyGUENQejzN2roxBhnUgAmgsfVfFQD9J4QNHb2pEpumu4keBxUb6LrGjf9hwUeKhJDojF2W2tQpf",
  "key34": "3M1TzhKauYTPkuxibBG1c24gJHu9rcJmb7ac8r6cxegg6NUjK5VPkbXUKB6iDMdD7QQTVihH3qw4GKgKwVZVGVNq",
  "key35": "3wsfuaU9haA3AZHwGnXNo3KQLRyXVX9BhiZtUQzQz37buTJVSkQAqMk2pEghU53Td4wHittS4TdBxyzy351Le8Vn",
  "key36": "4Hrg1xgkxgTFxpAXFYefCUVqQwJWFdUrue2BTWf1ezzz8narbwbCFDvFo18jhcmGBgN9x9MnxozPGmJPJX7CDLuh",
  "key37": "Vr8AeBeNxs1S5z68wVXbYBhuZRcJXp3WNVpXwcJra5dSBzoRAvS9Whvrx8crGCrywm31RvD1aqvefDo3V6QfTai",
  "key38": "4nut4c61oAyNUGXcQF9a9mqeHfaELbUbri65qBL4zXAc5YubvffPRydNbDGfN49Te8i41A1VeLCkNHED8M2h6Qjn",
  "key39": "35R6e9rzWVVVBjYqx56na3WfvKpiP3imQBPKPaiPwBexxP8mivhkbpbBAfesG4GvP3fHMG4zHsg6HGJsnejH3yeG",
  "key40": "4H5upvAJmZuXdXbvaH2xhYY8cECCLXn2yk66c5UboYLChrZUfmHaisN3GXrCvLT75BTMZ1emcTL1QmpawnEjkMVW",
  "key41": "5UTQbCBU8qJCuJHk2TUU6DjC58qAHHZTKHsskLUBx6WwzdczqUX1AFkHt2PtjJ84mtFtLYEzKu4cNwxjhxnXPuPM",
  "key42": "2j1xjrksyDYnZBdhxic9V5gt3pmRqPdFSXuYRWHbzQyLe2H4666xPygjqShgGgNLAnd3Z4FmDi4ydmuKjW7Jwi4u",
  "key43": "5TXWTUKWpKUj3meKLNCt3J15DCpv4BtFUhcuD4RNtYgwJJqzv5mzeMTqPMnLF7WV8VYPvpD4omUTnjCGG7Sqf7Kh",
  "key44": "3riTkkBoiNstJgXHeRGZ24zFj3GpEqxxCx5KX3mFXdHmPQ36nkhDNkpurSSNBHznGK1JJobLS7nWL5yPPBUyS4xb",
  "key45": "4Av1x8VDkhmb4NXftTWLMS6h8hfKu1k1pUFV8DPkS9xc6JfoJvMnnHq18zq7VqA8qWKgGv3bxj5CfKCj7ESxgWGU"
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
