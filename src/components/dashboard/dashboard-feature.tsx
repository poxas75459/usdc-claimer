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
    "3gGQsmRSu9m88ngQNuyUXtdDesHTJGJFfZjWY7gHMnhUD54hqj9MJ2BHKVgP123b23HDkDxfhK8LLyfkv1p4v8MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPtr2YXWLuTKDw7Bh9RAt25iW2MchGHiy7VX4z5ewLsZcKu2MafXiEqwHTz9BadktYB4sdeLYFwakrmzMHWyq2o",
  "key1": "bkrA8GTZDFWF16kxVy2dzhh4vn7ck7yj3s2Q83cdwXE5rFbuPmgqnC6Zw8U8ZbKwU76q7aUv93emaoNqCoMe39t",
  "key2": "5zXjwoEYxH9jq29GmzVgnowEAU996uyBj4CHfSKdkYGqUbPyWpTLhsEQGiciD9J2i3vAg8CFPj1Bo3Evugk3HKd8",
  "key3": "2zfjrSA7rewj7kLgv6t3izm2VPd9KKSfmmuho6LBWgn22jxetWJ4VER3Q5yZiVW5WCBhrpLiwKh2ptYtVkhu3Nq8",
  "key4": "5RJoA7eKrQG8qDYaQLonDJcdV2pJRgP4gP51KibBkk5GCLaowLj1eGc44nVbegGZDDSfmamTvhXGqGu3Jm3c96zU",
  "key5": "2myAUv7jVgVxp4wBSa6YbXxkwnW92Zaah7kNhay9LDRqgu1bwREq4mPNniBiusGFyLMwk1SEqZuPtUNMMHLaDfdD",
  "key6": "2WjQNqyyM5UeETp1KruqWrvaBy9K3JwmAfh3fcJDKMbMyexNmMCaEh69DYUMqLqXvUA5DGsEt3t6jPWSD7XKJZiG",
  "key7": "4u1hp5h88x5KNTrDcbgv4MXbezpmE2VAh6fGUwAqiw9KxWo7aSYPSgx3m2mnvJdJrRz82oCJo93HB4MGRoqMJZ2n",
  "key8": "2oXTDtGXSUC91heme7kFBic1DC8VpxZSa2VjfDhiJ3woSAYs68aZ8xR6G8efgihwAP9hCnH8JQRz5TKSdyQcrRRX",
  "key9": "3aYWHFKbc1jHncUGNp8Mfbx5mCPvcd4EWF7mV4yAzXmkQrM4sPks4Cr6JdkZPh8jLLm3sTCLneYK1NA3igjoDBPS",
  "key10": "3pYzqjk2QvtkZ2ecwWgC9aiKaiA9c7rYT1ZgYfcD2GCT3TZkJFCKz8hV36kNkTto5Wk7n7FnZJhpuYZtcRm7vDAc",
  "key11": "4CYey8CGC9ow2x55q3sv977SJ3CCHbudzxD4fib2AeWr8X6BTbtCUsrbx8RzzfjmBSrxDqEdoFydbosJfxKs97b9",
  "key12": "cUksvZxsaheMCzyLZ2XAkampWge6oZ9xyuFv3na3oT9MGfKjwM8FVtWkrzLMRexMPSfUKJgqD1FC9WfgnYNZRTT",
  "key13": "2NEZLcfv7HbYgviKjjixiNtBo7EoajFLxoop9jTMQhdb414HVSS6mPsStS1Nqf3V5RKKj5rbCjfNMqKWMX8c5JGA",
  "key14": "2DxYUcqoc5u2eoi2N8E3KmsiR8ExW8C5WQ5NjtHenY1GubKBD7A5ZKtwcBx36HDrm8p4KHTEDp4J6MWkbK19Tcep",
  "key15": "3MujT8BazHW218dxK5GYBxZzNagWhHwgQd8aBLoSuNS7Vh1kRb3istGCYAGtVjLchFmudDJBiae9rZykiMsqcf8Y",
  "key16": "4969EVsA4VNVoTkzGs59Zd9iB2iC3E1eJz9zKLSEzYZo5zJCsDF8YR2uJmHqLbkoRqwh43cPaEfs8QYcT94jBX2B",
  "key17": "3YCjt86ysZ4z5TqkcJkH8TcQ2TALgvNYvVutwW5fazW5pezKM9rPQXtPLduvkJdcW6CtU7MVfq2hKr2Bwdnc6MGz",
  "key18": "3osxYgXLn1899h6hUwM2FVHn62tKojvxoKj2a8DesCz3iSJ8Xf2YpQRzXwYpTphqCcMwBLGxFVfT7EHFuNrMCvPZ",
  "key19": "4nT2VFQWca85LQihH7Hxq1j8i3aN4kz6tmWNsmPParbR5u3XrkUP9gF1JehPBHPbGgxKoaRvhAZ8wuauzZTbAHT7",
  "key20": "5EuyF5kozH1RQaqabujrNndARr4XpqkH4xcKPn25AR8Lhd2oqi6gMvGepi5PYVS6aZv2fXDG6F2kU7LWMRd3QAHN",
  "key21": "5VB1mSh734AnxyLwhtb68TYYEJg5zJqRyfGc9y36AhWreQMuURRuiQ3uFuY4yi3EX4TioHcvCKgMxwsDXvBehZ1j",
  "key22": "2uWzPbtdVVAz65zvnPEMRGLz9ge5XKdTHxiVHwZBoyei6FQGQbRba2EXSoQW1TtvGozA21cKEctY6WuYDeqfPw3b",
  "key23": "4aojoV5ktkYUu3Bewuy7fnqA4nHyEW5YvPR7NFJV3wdHK247irnESUbWQWvvAHznnS85NhMkq4eNvnJS2gh4gLwh",
  "key24": "5N9Brq1mH63JQLWpV5gEFvzQakMcfw5LwvnLmfWtp5SDoEoFRYp6FY8BsGJmKKNiNpfHNZyw4E7uogpffWFW8uFz",
  "key25": "4KCS2oZDB5pKfeuM5Gc1ZRnUbQTJ972FTxgo8cB7osiiA1dE8CHUvmCLjiWYcSZkq1Q6QHzJY4n7LwTtG7Fxxy9H",
  "key26": "3RCgP8sZxNTMc8bVtSLv2qBH9MgGJcuDctrJrEExt9JTdV6VLBf8igBGrH9hjEZUm69bJ44x4tcV84tGdRo1MB9V",
  "key27": "PCio1C8g2KonuHSHcR21SUR25k2mTKnkcEMfo2rvbRJGwcYSRtDennGiAD7jYs46ePg8VRkaw6cKyQ34oi4AqRA",
  "key28": "Q6g69fLEvFzYtJELQsi4XBUGGFvQ6icxYbCTH8sqPuiRd1h9a9fE7JL6tf8idubzikjpnKhgrAWbsPAyLyFsPzr",
  "key29": "4bTPksJCc96vnAssAAQ5nEBbgafSGBaeG7nge4x8rnuTTgFZFnwMJ9PJimbCjkMmkWERCiSdaMikEuaeaGeiGdg1",
  "key30": "4qpXjgUz3VnXutAszDRAzojgxdoXRmPzigrRSkpPLLQQUdUfYsrWohiTjJyR7r55Ketpo9NPTLi6FBeu4K6f6yz2"
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
