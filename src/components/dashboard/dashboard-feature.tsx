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
    "5YaPVbgpUEvdE9jGMmBoxs4Kc8kiSarzX5jHHdK1mPWBq7geHmCsdFVrmphPjHGbnZT8yMVK8aLVutpeUVw3vziA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rYpi7C4zZ3smUohF6ZXnMM8PiNYEXus7V54wnYhge7iTxbonaNPae9U9KwNV5mjhPkmz1wEWw9oJf7rKSRDP5hd",
  "key1": "4owGXZMkRjtg19Kt2rT6jFrJ4VDSPhFtBWyP5PKNPLwnnE29Z1w5pzovQ1GJKkGqYVRy5JhrMbW63NmQZTNzZxcR",
  "key2": "4ffRrhxxr5k7hRawhc46rsaunDEtJoprYuxZJVBWK1f2eEZxEWX2iewNNzUVHoZtrrmRUcustoHT6wHa2VvVWzTD",
  "key3": "2FnRU3dx2A5Y1JMozo9ewQLrQt3fgbrnkuJoyvK71pX5hhuxuYXBwKudJo4WsksrCJqfKSd61Ubo5qfkepxY5Myp",
  "key4": "3qPHmCnj2ApuvTF67qtb4Yb8Tgziy9GvQ5cepi4Jj68AViV2xbjHnkX5dxBq36rmSpAPEgg3TbF3atjnpEgjSMsb",
  "key5": "3PVH6m4HW3y1CAKmvdzHs9Fb68Tt1Jc1hH2FEdb38jxurt5U5KF36HrZhvCWmTwDrMXyibDFgYKXNimUwvsqSbiy",
  "key6": "2EVECAnSucWQQwaQETrDD9UvszhHG2fQCrYggsDfvAQqDFXkmH2vsRAmDdei4VuZbfTfCEnNzB7b8HyA5WXP5M6T",
  "key7": "58t15LK2Qfo5oNjsnUuMxU8bLBVhKGHdqTDAoK6q7ArDfNeCbsbqKuEcpca5YbseMtDNUQu9xsNodYEEg34Wnros",
  "key8": "ZnQxt92vsAiFyxCU2oVvAxPyWsofAEgNimwJAL2PXnSokXUTJt2gnZZ8Bj8CeLvRjvcoxacAHWSJ9df6AdfWc29",
  "key9": "3Shfj3p7TiZk1vbrAXPBrkozRE2iyWXJ4LYF5J12GtwCEvqtW6T2vS6k4bykMDZ9y3kmFY8oKidjvyvGbHGpnifa",
  "key10": "4bTfMskqpKNXrnCCM4dXHG5uDRYtmbA8RpFrvgCmXUPm4nTwBBmZf8ztSP2Tt4ygJiRESnCd6fhAHUPtZm8vRN57",
  "key11": "5sArRbhwfsG318VVd8Z6QzSP4Pjnu2EmemauaCLwpi6MoYS1vSw4xUDUqidJfhwrHzmNkKopiK6iz6bEAHULFgNz",
  "key12": "2MwjkHJEoywFJgGYoXPeXKaCmK383cofSeLhEG8xdQ34WeBa4tGxAHZgskxgGzWLpTNywYRfwNVnT4Qy2guNeEkR",
  "key13": "4CSHZZzh1aJn78yN3KUSatEJ7z7SX1NtW11iocEUvD7ysAqxowpjHjiyBWdESGvCBR2o3u8h18F17hNpDVdLvZnW",
  "key14": "5t4EDLX4ND8d9YSouTzqEcgE2uHjS4LdFLu3VNKZfMdHzsSy1KuGF3K4o7dFP9NBMusW2wiP6KN8HjYrzPv6RfxB",
  "key15": "2zsb2TjskFDLbSfouyszhdc76bKcEqM6Prk3v5g7QXCeYhiYrrFWJJRTKE5EBAocTM3DoLpZ1LMAdyoooMAt3WLt",
  "key16": "29yzdierfqMpUyL5bdLc9HPTWkmv4uz2g438uSczzyPh1wGu53nBnvNbZUgDmCEqeLMVph13FnV3D5VJabybkWfC",
  "key17": "5zvwrYWK68f5RpMmUVXePRTCuHUyKmqoAC9GBu1mZupwxmjV2FmQJ4HfZKipBKHEhAi7Ko4kGvr1cYs8QHZ5G7KC",
  "key18": "2ab4RsKzxLQtGFTtJE61pXSrosWhdYLHEWuzwUkp3oZLy9MEHu3ia8XSVUoLTVLxeYK3gqb9oDAEzgE1u3ffvoMK",
  "key19": "sjjSb9BrfRNsY9wUPnVwT5tBZ3JagLkCQ5bzLyciTRGdFu1MybXm8eEvtWMhVgcY6Dz1k53UbVeBwm9Tb7utUKQ",
  "key20": "395cQ97d7KHJ4YTU7YN5mD6DXW7rnq6nJrCqVgc1448DP6QhesZ82zXr1w7XRLH3EGdJwTh3Ljz4HBhA9DzVf8s9",
  "key21": "4mCZC3y46GnT81WNydwndW8j7Nq5iWMVUtydQ2sX8ZbCM1JKDJeeeFmXJikB5NygiDUZXp9Jn3nk1DbEJUSbwyWX",
  "key22": "3bHn8RoW5JSj8SBav2FseLnXphW3zAAko3dXjrk9b92mwBXcyEXS7Dp2x7AxDkpoTDxd6fG8rwANqKtTQEAF9KJU",
  "key23": "5JfrSPrs3oKxK8yoxYRAyVnuuJPWsyUrgLQjCYz8hUmEBpqUGid1watXLQu3WqCaBkPBKfFMcrYmU6NFTim6LbaC",
  "key24": "651EaznkxBjxVf3cENug5js3toy2XezsKyL3xKMs8XtMV2FnU7M5jNAvS7EpdJxhHhTBb3mecvKX9Uk3Dq4cZEdW"
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
