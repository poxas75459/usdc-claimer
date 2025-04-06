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
    "3LXLjuwbF8CfbSLWVKtG11sBotwtM21RzB9dL2FkXHJaxAPPvi8dfDd53ydhbGL174P9YJzP4CakrMo5AE4MTW6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZzGKhVHh2isgwDUvfMLZr2qzcUbZw9W2BGDkkwsXiJNCHrHrRK8fYfaQKzGHFFz1opbXqDrRsKtq1aka7nWEBq",
  "key1": "66u5bAJWAveC6czCV5pkqsmA5ADjpMKatonj1AkLKeJF6KYmd9jx9uvsnCBsqJphihztxFjkgXuCosmEyixgKYFp",
  "key2": "3SBPW1n8rSiZ9mGL4rK7YYTdR5URqKuQ1Z3LNTDSAep4oDnr9z9x9qXQGsrJ93UaL65adiL1eNZXLYSyG6KqVsgc",
  "key3": "EKD5mUDkWTzAjN9ebYZq5rrRVJ5aKoia6u3nXX42hy66YXNANSM5LQv2s32JLjYhDWgu2TeLtzYv5on7Y1DzjZy",
  "key4": "99g7rHFbqZg8mNTW89D7VGjFdm3m4EMYvmknkhgxi7x9gJXdTna9NTQJyBhAksjQEVWGS87RS1JUn75U2ctWiEA",
  "key5": "4moSbt4B1CNMqimYumVwc7EJea5dyBga9NhBvjws34HRpYEo4TR5g3hcCan54mwGf4MpV4DxmNXYP2fosP9UhMov",
  "key6": "3tFdE2Cj3fBWvCSBsxLBUSNkizrtDWJytDefs1EvsJLvmdEe6FNt8owTQAjsA7X1KnFBfhYPuwxNXi2b16hwL9B2",
  "key7": "338uvxBjjdcJS3P4LYtzL8KHNSQCj99jtFmN1WPxxmMiYGSaeDD7NfRV4TrsseLq7kt687fCN6tZKQktSqgZNAm1",
  "key8": "4tfXUwSbbqNX51f5KCEXrqzTTRCP5MvAUy9XHWHNJzVdrmuvTdvkdMLSJnWgzC3oxFUHtyzua4mxF66pJZTTDaoP",
  "key9": "uc9ee2v726cGUh8XtKJsyoFFRAhzxeC2YkRBt6T6ERsUqQL1ayYbauHBda4UtEjr1NSfEYNtPMeEMTxrJGoGRh8",
  "key10": "28Cy7CfBofUiDErcKSRpNVmiSVwRcLyWwWwV7TXSvGCdxapwiJwNLG5yScMyXJpfTXUAaKEt4AMiwzzKFrugTrFg",
  "key11": "2YoVfaW9Qp8ScbmiPgWFX7pkBjCs5tP7K1tJ1v61o4z7W4H1EE6ixMPgSTta8rngdJ4WQvavMDe8eymz6R8LKhBW",
  "key12": "kfCUHusXMNpWnPGx6nGQsPpbQHdWkwM86Rq5ygo5D6sJqY1ze69SRrhgFXaoAN6ooedQnuK1egPjWrmJ54BfGMr",
  "key13": "AWGKtQJmAGkSLoKXC8opq34VyKYfzURrVevVUvWP2duvBHQvFmk4wAA5EjzoTN5hm8G5CGvngqK2pEoyQ9fp8rE",
  "key14": "65mpSkp6piDLZgMsLK6tc7LLoB9XBg4yhseDhxM8fVZF2Ca1ndFvYN6uiZRh1XaGPktJy9RciNiLaFPv1oSnzogf",
  "key15": "3z4ErVDwjJ47LoxiLQroiebfq9wiFSV6ZsN2xaM3QEfNWvZ16aUTuBjkKP9wBR8gHqdV7dGCpMBCtZmSbacysgLb",
  "key16": "2NMGRkAZHbT8NgffyHYXVJNEcTPh3qDaPf4TN98MCd2Qwz4B9MDf16rhQ4SYiqQfcTJcUNe5YzFXhx9J172EyzyE",
  "key17": "3SBUnDiHoxkoDskcuopsahhfqCCbEqi8NvjWXv3C6gQwPidaeLW9bfgzBvgcPXaCNJQGV7QVDww4zpbk9TnTvBQX",
  "key18": "3YHZK4N6VKXVLM8txvHCUKtZXz9pZc4KkrVMHmx7f9Lj5p4cmfgQJZb7GxKET1rKxsGugNS3X9FPyPccDjJgcHpP",
  "key19": "4fY4DzNqvqgXabjhtjc8qLEFyBmdNcdMDniUYcyvimPxfCc6D4NGhJfvejqnJYvyjY8MFpjPUv1Lzbky8xDkXh7k",
  "key20": "LfP8vsb1d36q9e4AkDBRGfcV4VyPnbAnwiDNgxWMP4Kjg3tCghLXSUqVzW7L59CNeUhDs7jHeAryFNAoie3ufmY",
  "key21": "28JKWY5cdhUYiDLNx7kqoHtJfs1k7UKZHTrd6DrewL3pJk73SQ6CD8H3Ka3nyfwpVHNhGbLqJV3gjEMAqzBQyc1r",
  "key22": "4VWoF2VBv4VtmYhAQm4iTAdz7CmTraS6XA2Ejm4WQar1ykBC7QjehGLBin8ZAdzggjJGiJadTDfmWd9nAK16GUdM",
  "key23": "5D1hVG5iqJW64mLjGheU26aaL97zCSguDFUTeneMh29TjyYv78v6VWV3nHLZxo75iAitmrzXgdL8hGq9p6FDV2AZ",
  "key24": "3peWPhAuRd9ajnhShztSyYChEubyKdfiKDDN5aWpJh9wazumCpLsQU4iWTXMtqUhKXmPbhtWHm1kyHNTBS7V5U4v",
  "key25": "2u1dHicc9Dpdvu6TYPcbJbKGdMW2UJCSwREZ17KUxc2xdJwZLEeGvbXF87vF7zRkTYW7jt9od4SoLCFoYKKQLbxC",
  "key26": "4G1B55cHag6hDLfjT4nVq5pU1Zk1UC7QUkHcGBwFj39XcvP2GC9Dt2xSKnhK1Xr8SJAJwQJ6rYwmYr8GJ3GZr5oX"
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
