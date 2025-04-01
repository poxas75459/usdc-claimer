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
    "21ckMb7ECF1fvEbizkZruMGJmz86SojSmLWP5PkX73rsC7eLG94BTpQFRDZtFVPBui93Z6MSFg77AsTQ9BpNnwF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qVJBTwN3SZExZ8Kk79y6aRXAyuqLJQd8RJWqw8k5V69poSeBRu7GyYeRnp44SxL4NPC61AZGyc5QFhK4WAm1pg",
  "key1": "5YEbLLUtxkxQL1z8N192oKXUeCUSMwTvNpTx5pTWhUNrUqoZ2B95v1UeGy2p9pRg5Rd7JSmKHNoFukA3YJEuupKe",
  "key2": "2DGMJiNPc6Tc7RasxFtyYgJd9FptVbsZqFFU6r29unFZERiFdYDTZx77K6egxx23BZ1YfiJbajxWbxjGrzAq9Lqh",
  "key3": "3zCy6t3mWpXvLm6BKu4H2t9QzxYZQdDuWTiTuF3Q9yZej6MZTs57Fx1YmGpDozyw6TSYQ8gtsf54EMcT49YNes4Q",
  "key4": "2JuSJoLS9yN2UejE2rJhusS4RQaB9y14GAFjsZJEHuUqscDJM81FCscA9pU9GD5wtsa3zmZcdJXUCnu3s9nMUkE6",
  "key5": "2qfaJNF5nn3DHPaBmFWvoH2kakedRNYZ5TyMtW5xS45tNFQAPMVDJNw1pkKs7PC7EbhNWzYsU5o8tUUXKUCjSvxV",
  "key6": "432ZmVkzstuP3HL2cTqaQR4PhCm2rjV7iZSrsCgYeD6UjP3AHJMwegT91dDgfR4hKxpujCYFdANMLEeadubpQPwe",
  "key7": "27GDj67VJNTy3he3Mgjq7KrLRqibaF6tdH9YcCSxGXZpFrUenEQu2NtFHDRjYKAUoUu1BKnLEG2LB8FtD7TiBUz5",
  "key8": "5MAV84o3Wr2Zc4sT39CwZbbLQNGqW2WDDAnt8GtTPXeSTygEBsBHM9k6zeMHdttBPDk9oBvD5BwrLLBt7tWQX3dL",
  "key9": "53cgWd43xAFvp59kn8y7EskRBLyVLkJ7D2qPzUeVxgBXb3qsQ4b9mAPhKkbuUeY4ZgsJgJ3ZWHDD9555msvmFEca",
  "key10": "5sRDSoZRG2TXd6gHECJi1awCw3xMjb4TYixzXX4supnNFumtXw8ACYHiyCPMUWEY9jFqMDP6JnAr4Dtb3zY53RbG",
  "key11": "48JzSmN81esRCD6nj5pcaHKpGXpEFTqxD6CwiCebfcFFm4M6NFyGfKACoggGrZhaMSrgRX2cpcytk9iEYu1PTvnN",
  "key12": "4sGcj37N1DMJVPYrRT69bgW6kuVDpZcQw39EgDahzd6xbQ4xAepxuR6Thdx4UE2TCzJTLxdMU7Mkg4XpJkBcQNSu",
  "key13": "3bQs4Cw9hVnNpXAVSKiR3tEGdDRUjh3JYeLx2MBjTi3oFiwWNVzSPKN5UyFmyi6VMiQD9rKPHdxWt6FsUryAj7Vn",
  "key14": "5k3i26zyQjneBvCj3ymDXDCpf9YK8eZ3dqTKDTRRs8G2dtywuWTkgbg6LxX61mbvpAJBcMMYYbvPcfzqTDjkPfTw",
  "key15": "4SPWd4TK3356MXFsGRGxDZtnP3xDMzkCMip6xdBHBfE5Mo5T8EKNiqT9AGT6S4dwn9eHavL4C4Z7cqrQD8H6AaU4",
  "key16": "45mKX169hxCMB4R1ZWjtLqV6Vs59jRsuKXHHZyHdBmpPLMD1b5Qin4Mtzs7BgDjaMLAV53CfTncct5A7NsYVd9jf",
  "key17": "etJsqTJtzNoo4C9Gs3ARZ9BSEBJnuUBkfmG1xNQN4gVucLssTnGcsEZbfXNkAT98CxZgGFuN4jcbVd7J3qSeBMC",
  "key18": "oFB5zbWaGEWgtdJhQJ9pEbUBa5jZ5K5HRhjtVjKGGccdQPLf64SJKrpJPVAhFQKBVkdUJaduTk236e3tUcqygYY",
  "key19": "4ohiHapcTQ9wqTbonUnAQJG7nhavz4UgMrSspDijKcTkutePos2qH5sW4pDABUUMMFSo5uEErVkPbjCH57NDQRsU",
  "key20": "3P7grEsXfw8ujrwbv671W4fgkZ8WVnKwvMsqz2AyUQ12Y1K7ycVmQee2h5GJYaJKM89efyCzk8hCn5U2LYuUwowS",
  "key21": "2RY3EjVrcrRkaM9FaRSk77FThRUHMPWxJxymiWJ6T15JLbYG2mBUE8Yvn1PAVw3NXFSGFwdpqVmw7xyYK6Z7JmJk",
  "key22": "n5djUNaKN9XFLrHdJ7a1Fsi1oNriHpYcyFgaSNRQhaAosPtJTaUqngw3hUqchjLLRo7YBsWoyyU1PhzMHZ6fDcx",
  "key23": "2GNd9J3PwDrzsDWWrGrJmLjZCWRR6Gz9kFtH1tB5hzKuD5WRbDL3YC9PEv3BRxiUeW8R964R96xC2DFpHdWxRLC5",
  "key24": "45bqTrKMyYUxGBKB6SBgZZs2ffR88Ew7XdzXFvKkt9VUrNT4XFUkmV9wLqiPMAVCBmCrsuN3dfH33CzCtxN62MSX",
  "key25": "27SmGZ5FcAbeSjSYWypEGQ6N24J7t4HLtQvqMP7DoSpE5zqjEQEvhtKtp9UZ9SAyismjiFfkkLoDPYjwwCnVhW7P"
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
