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
    "oW1eZSisDpHspgigHco8u77AEvdznMnASaWjXkAfGrKJkRo6zL2knPG3gkzWZgMS5631sSyFBVF48MwW8sU7b6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiHHohvh1y2TxpEAep7tM5iAWb1Vevvg7aTPAPQhvb3jW9r6JAyGLmWHWnRswC5HTkX7CZprRdMYqvUVnwnwuFP",
  "key1": "vpmgNNPiM4VtauBbQtXcFgGmvSuYrfnQnhpNLp7tECVxKdmNViiyypp4vYzr49MqYEbkq2d4RyRUJx4EgJY7qkc",
  "key2": "5LGNzivpv6dhbvnR6RiDdh3ddXSoukotmCDYM1fhJJXiJ4eNXinjhz7FoqEbwiFHKjA8z1euQo1xNpR4rctG5DRB",
  "key3": "462mjgz3iLDxkew8zEnLazjb9h7CmkzsdnkM7iukLSRp3Wwf4WzhsaKrwLMBLac48P5ugdezc1HGdvs5kSSKsaXx",
  "key4": "4u5wxQpPUcGjvfmidS66vq7MWBt4nuFvfUpen8ATQWUPpchZUgepY8N1zwBgsJZ9XHQUEotEYwVGa9JKWq2hrYoQ",
  "key5": "3tMF9c2gCJXgG9DNAGjdE1o77toVPq7VrgXwFQXGUQxcBS6JvbLt1AT3P1u67r63uXKibrY5r5waH4bHhrdtXJBv",
  "key6": "45cCFdM736ACGm5nizsPq1Ch3iqf5nytnNa8tSce6s2ZWdNbRtYki9KNTSioMryZz2GYTSfDayDjEokJfGvKVxfG",
  "key7": "4ueosLct3zGRbFmrm5wavYsECj3Q3vbsDCspQsnLNNWgaB4996N2e6EHDPrjBDcC6WpaWLLV1j6zzJAZWaeR3BYL",
  "key8": "3SQEaoG3ys3XdDZ1Q3WsdWZSSLRZryftDr8d1iEvhm2pn1QQZqVXUd5n9FkVaceQSVfk9a2Vr66aLqq2UkcKb32t",
  "key9": "W5xu7GZkE9mJgVDtzdUY7XnoiXZbJZJHmrJvVz7v2H6aNyjkjWXy5Fb9KUWYBfNcq1MrTQgUzmZqEJfmKJ35McA",
  "key10": "2Vw9JnfK8Wx2bGYVnTAN64Lq1mhUSSuEcXuJ7ahihbC94JYnZGcb3MpqaGs8Q743xAmherhQrVFE1FYPqMHnRVSm",
  "key11": "2fn9awoGgZ66Wq386Da5YmMZAZTKCxgHTmM6wj2D7VXquqB5z4iEaJHMChE6JMrnuns4EdhF81u89QphaTVjRzH8",
  "key12": "4M1eLyMN2pV1eJk9U9wvCAjh25Lc3hBAKwTr3Av33hmPa7MSZD5KmNMMBFXE4ujTvexytQ3cPpQRbcSvCUqJECew",
  "key13": "3a843fG4KMKePJWqQd9yJbx8nT5CGp6ZMwwjucMYhsqEVGgaT1yUkDtKvuaJ2dsgMD8Z3EJLbUxPX52WBicfLTd5",
  "key14": "4d3jU5tLb3knunwuFz1kQfmzCXPZNRAzKTPdRBt3jaDoro2C24LSRyrBWj8eB2v4j1ZLEp12YgXHf2QiwzUdxYbC",
  "key15": "5YMbaixxbCELKBeiesXWJzyYXdmNo5KGKkAhrhSpPCVoKHLoZGxXww8ZtktD4c4xVK9wR7MDgnP64LZ1Rt8XWrhX",
  "key16": "21jQeQL6HFv8x27zgvQPupsF2pKJbppEFTasiyoVSTrw9DcP7FNy8eLZVPmgXyYiJxrBXYn8S6gkdnpSm4T13eJy",
  "key17": "4QH1PUNL2BCDttvkGEiE5SRGX5ajmcnFuFCYxCvvs2kRncTVucKa6T3dFWikFp9DUEFiLFXUZZVjm8hkQ4cdMsDD",
  "key18": "3sPHSij7FuvjJ17bNNZbQBMGVECHKKLw12xyXXD9XtVrwarQ25dEdFLBHowEkzwWzY2gcY8WyKmzj3JmJPqoBwpP",
  "key19": "2FKBGGrcAU3QRTm67CQPAYSkbVcuaCgV6Hqy2jtuEZV3RzY4B1T6AHzoFEikrzughJkXWAFU4CL1oJSi2RSaqSUf",
  "key20": "4tLtMpEuHmDEWH6dNTzbe4J1E47GYT5P1REDBPXXHdTGMiZcpncgCYLqAnBuQif4wyVrPo1JNmeXDxGyEJ3zMq1K",
  "key21": "nT13V47Vypt9mz7SqYrueUaoMVe9MKBvput937QugdJnvHiZa51tv4mkTGG78oeUiSP5TUhkruRgeY6XDcmxQfh",
  "key22": "4nVM6dQEoAiJ7nMgTyoYnj3iaLiezRBVP56hr2EyS5h4KFC1mPU6KsmQYvRyBPFLxCSt2uXV4UWffuaYQFvtjfeH",
  "key23": "A5NT2WVW3u4CxZkZf9dpUxau3SdaRCgM7yMZ6GbfZ88PtnqLAFmjamxR8Ys3WLava9TxQNt7M8GYdAJct9HC7pM",
  "key24": "5WTjHF2TkWaqscDsXp6Vu4Agb4ixhaZ1JgCvDHVtTGx64jgY9u3CmW7uaJTo8yA39NAmHCat56qJ9BwH4vM95Zxq",
  "key25": "yLEDiZot5kYf5vmXTdHFfkiG3mHjpNXagj7kAXG4zLBmLi1XeHSPyHjJLq9wsW5qJEoujHpAt2arBsH7zpbDZbN",
  "key26": "3gawhphbNc5awf3fjoqcyfha5iRYJbb15AwABA97BW9rphqK6cMaVhqH9KAEGAC8YDZ1kcCZEXL87AzTHa1CUvZj",
  "key27": "5rXabetHGh4s25RmNpZDKM2KnVwvTXA9cXLN1D5voVby4AfpaEFdjAmeEgjq2pJqkcgX8HTAfCLkWXEbXj2uYnoV",
  "key28": "SE4ngrZmpWPKtUTuCxD3BjRWx1bWt12CrEtGjkgk9EG7ZS2PsgDwCHGxCgiRy1eVrMsvD9fJoTFnEL3qVTCzeL8",
  "key29": "EVzaUw4kQA2EA9KEQk5wpP3mRwyUc7MeLMGv7hLGz7bd4M5dY2AgfBY8fbEdwNABRs1gqKDTv2dXApRJtMSNruN",
  "key30": "2LNX9kSMGxWTDuHQQ7wfNmeN3CpVRaaX6xbUeKENfW1cdjDrcbRfM8SEmTkn7QQSdrdwa3CGkTRraG2oF3kW9C9o",
  "key31": "3DgLdKcFyRHeAm48fteLGuptCpamoLJ5pFwh3PeSSBoQm1AquwdQ8Rbr3SDdniq43mJDRRxkfNxWCxKZC9PngF3W",
  "key32": "M5aqE64ER6GGviaCLjBopWchXJwVsW4bvmNp6t6d6ktRHUwcWCoHcYzmvXAno8FeKFAcfZXniSy8Wxp3eduP6EL",
  "key33": "4WrfPBjymS1wiaDSxu4rYFyXZQh43BeoT8o8Mc8pF6HGgbJi6mdW94BgsrT4zF9PTfkuwhisTNQGECkjCq67ijS5",
  "key34": "A4wrp5Bh9o9ZRX7W287c9qPuE2upJEQ94CWi4NjJNng2gd1ThTDK7286FifM32adfxFLAzkxcPNwmmD9ix8546j",
  "key35": "476Hyc5X92VRPAQz2tWXzGgnPxYK4QjAkTDCir2M6W8SZxDKEqBtFzKspcHgyuV5HY8ELr8ccP45mStisknXyvGw",
  "key36": "3CkXx7ismJT9jnT7uR6Teo51XjwNvcHNXK9hZoJnukuxh7gx5QHS2FDRna3iymnyPrCDdZrDiuv4pWWFsJymkFGN",
  "key37": "2xkrztDeUFXRazPGJLBwmBDjA3z7nxeJfxj5Kwr76EHP9zaw5QKWn7ymoqizf2jKhHoPrqGcUExJJkjgMyUD3Yej",
  "key38": "44ufzLu3GYkL1KYVHxn7gjUHJNJDUwGp4upmfvZa9iiGwSbSRPUZUHgueEeR9MmV7z716RgV6jUs4Scy5mS233kz",
  "key39": "2aGkexLfUpvZ75Fx68P1XGmTpdPy138d9n5VmCer1C2knbbr6zA1ZwnAY2HS4ZmjX1D2AFGWGr4SpqJaxsvZnTtL",
  "key40": "4DbhhNsNbe8QEbA6jr6ELmDkVi5LuaaoPEJh76MMaLtx9ybYUHag4jWHqavq4eB5xNhxM1nFHN99XvK5S6afyeCu"
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
