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
    "4imx3zys7U7VYJ7obdADRMnPJPDpEgws6pHSgi1pyRcYRDkfhup7yWessWzfnasUoPU36JwV9mRMUtwzi9frRtpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVSWYwc28XTeCX7BGYgqYd3UrgohW6jJJNxHBJTEm7J8N8oT2fHRijjCsXjzteoPfSZmZvxAMrShM4M6ZqiX7A6",
  "key1": "Ejgvu89BfgGCui5JGK1quBQESriJqw6jQiy6oodExgAdqcK6QxrFFL3iwsAdNqSVsXbZtG5jjs5SoLjytHUDKqx",
  "key2": "4XcKVJPSL8StymnxmuhW4n3VjUEN44NPukYpjwA3hdeNa2PpwJ2m2YoqXAsUz6P1M7VbgsaLNj8w1gpPXhyfW1JC",
  "key3": "3ddyjEvpFCUBzYJxkZMNcumxuBV6fGJfPjRjcdn9NDkcgrrwjjK69MSA6XcNVBFZmJeR7WUTdcahqT52RJHP36Bu",
  "key4": "5Q8VRdpWGMfDWsFijJcHhpiwcwBJiLFZodfX3whbASSZ6e4BrcZhACm7Wjrbe69qDDWLReBQq76wNg4vME6nJenb",
  "key5": "3kDycd8kMrTmeUgw5QbEusH5nJ5t2uBW6R3mec8A3R7gh47o9EufN2WaJSdTQnLuGKdkRHua7n3h6hSEZ27pyyiv",
  "key6": "FcRonNSyi2g2EePFvitPhszq7C48XWFLwun9CPSUKQAPPZk4nZ6oHsXsKAQWHA75wLoiJcGZ1ktGktnAHdfsNFX",
  "key7": "2bBGjdoVoiVKS51xuMdy6Qh8AQ5mV6FbAHAknaPyTgUyZoTaYtLdowypLWb6cfSwfLS1zWCQTTpbbq9h67Uzme5Y",
  "key8": "25cxZcqMs2zfu5h2c2DiAmzTsWiF3yM9kqzsxqSYVR9TGwn2SwPsRHfF2PDgPvY2jJGjK5SUwVpJUJa2fUkQAdAA",
  "key9": "55oCMJRifqSdsCEUbkoqrbso9YmCpzBTrZKf9uVkMSoyEsX6xyUGav3G2PgKUznuoifNxJdwQta3meEJRgJbWiCz",
  "key10": "3CBqa59rpcs9SQwZLaMrDKFUTrwcP6Wxc2czXNqdJq9FaX6UjUyLmZjc1u2MNDRZW5qKYWdDvv8rU3k3viRwTRuC",
  "key11": "ZFFe6QtwPHYQqLfLoHGYfvT1iPFWckYA2uWRE64GQpM8u8eFKMWAststyEyKy4JLXz4bViSjei4svKvB4sgLVBH",
  "key12": "3XtbPKd8kjBr8gtPjRrgoSoMpBxMcC4xYK6Mk3sJEeTkePoqaKK7t5iiGR5Wo1ETxSC4nm2SggXPVvwG6ye7y9Fm",
  "key13": "21EoUy9L5APnS11nVaeSJCHSmLPyUfa9Wy59C5r7q8CkNS5ssQvZRs4bV1kAEn3e2V3V9sFpjAdJWuqXUuHr8L3x",
  "key14": "2T9o4sTvNJ2DnjyTGDD81xz2vky4HrsMiBkjewuoTsUUUFvuKvnKfo61DTFi6DaJhuxXLsBM3bifxnk65uoCTHXe",
  "key15": "5yoBA9BTkQkod6ae8GsDrLuKZii4LtbpdR5mjwGmbKKLohfFKG4rLHoLeJEmSpJjFfyRUMjpoXHdEER3LDvh1q8L",
  "key16": "3CsAt665qC1eijeLtBbH9Jgc5tqavkWKuKy2d8yBGxSBLEjoH9qib8rK9xkpknCgpUj87AifVLfn7RxA9p6Apkut",
  "key17": "2S12dij7cKJFKrpcW4dAnZmozi8HNFUmXJ7fwFBycnXMcR17xLL6Px9gVw3KG2uPiV5atU6bmP2M8zyyLcHQQh3j",
  "key18": "3ZoSPxhCMNeLvWp7rjwEtgSQ8snmA13SdLqCkXuj6ydAeMdQVVj2tZLZSCCBe9FEzgCspfPCCC4RBWAp9yx6Zsyq",
  "key19": "2BhkVWcSZFYFhNbwuSVXbuAF2kk6fzJy7Px48ah68YSUP5qqHgewmTdByqq9fDnAvVN3ygbQiwGzTD5bFZU1S5C2",
  "key20": "5BcgT5AsLcrS1NWLMHM7C7dUcFipAjt6h7Nu3K2LPs3sNXW4smxgUrAH2f1Pxy63ytNEXwguxRayrWrhSYmwVnnR",
  "key21": "4QpwErCLhqgVc6kzNrieC94oTMdwDF9GMoVV5oeGjSs9XH5QMHfymfrWmm1BM72cSn3SnqdmqJrYdZegJ7KQboif",
  "key22": "2gPqHSPMdtaxn7iUytVKXxGXZcJmLx33L7FAZL6o4noSwLs8hL5GmS4tkN8eLAteWfxPQTpuyd28WKr2TwKbGCVT",
  "key23": "3gkkEKmmVLMbrk9NekiMH4CCYSmwRmTK1LjD95JcjZxttCfjWKob19V1pfkdqyGk431XgVmM5XMMJNn5Xjpmf4Sv",
  "key24": "51DpZAHoBiUHDuA1bdYeLQqvd96EVAzBiKv9Q6LSywsG2W4ZgL83b7RA9kyDNC4NeSBRtUBMEY7zuc7sh6K8C6UA",
  "key25": "PM4HiDZmn1dnUePz2g3JBhNvUBC4d58CnP3g2sh5jFLEtbqtx891wSCpyNE2QoWgsz15aF1d6qxJ5tPHX2Mo5MY",
  "key26": "4YAGZ7QtFVkPWXNaVycJpbVLc1dd9E9BSvcn9RKqadd2iS3F9811WvgWUHizAvhs2rFPoe3NN76KhDaSJ8u5wBrN",
  "key27": "3qxwSfAJ3pKbR1kmErLgJWUduATTNwfx1gUPwTZgVDoTxUDZAHMwwtcm2t1f645XH7duPCfLec5aVVcQ5mkTAaVf",
  "key28": "62Nw3WboPuYCyp525YHUkixQbHJGT5hMskZzo1EtHmCXrKvNnhkrDkS6F3ULhUot3JYYhpKC4YN7gmuEde2ZBgp2",
  "key29": "Tvq2MWFBxdZyiRKPVcxEpEUrywdMnL9yreG6hUUT522wrEqSTQwKWqYaaNaoShL57wjqyFFBxLjjNQeep8yZEyP",
  "key30": "3nMroVFzkHY3R8R5QxWcYtUSdFg878e5R28dW71rgLHoAoV4m69EDeZNwsdvCXev1bwvt9NxMnBM5hM6sQzazfE6",
  "key31": "4T5f9e9YYEYwmtQgYQ5uVsmPU72XPp4Fh5SAa6hZXSCGJq4kCGzDrBbSNCxL4LLJFhKJD9TPbij6urkfbDnhvRJH"
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
