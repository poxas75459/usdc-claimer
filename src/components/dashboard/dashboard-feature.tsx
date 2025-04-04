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
    "2Tye387M2zqJv8stZuYo3b89qj2HieP2cEr2Me4JC3iqaTmsADz7PDhdCPswV6ouxu2co9p1XhJzkPk6CmUF2QuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6u5eDSPKTwHDr5Vd1RXNJSPMVpuLWtA35Vq46XaiV8tvjYPt35vRzWr2mvfdy17x41jvtMS3PJ1hTcUVvADMt9",
  "key1": "4z8YVepyBTXJrtbouzz5LDweoj7raLdLXMhurbKWJGBdnux5cL8cX7j61X538gUzZdNv2KpWeZLX3qife9cnwCUB",
  "key2": "3bZ8P6tNbqfoNqagmAoM2Kg9ZTRToraqmMJZwwR9XK18uHbskvUzShUcmp7eyjvUsLKXvb2JbRe82YZx8SKgCGYx",
  "key3": "3GJAiK4oesg1Zr6neQbbebCNesQaPhtrgjcubuWuiwmgdYnsfVDQfi5xfTCDPJbZ4xSjJVmjRJp2mbc6NPNA9dqS",
  "key4": "4691apxaaTYPhbZHhWrpLPCuWdDcCCTitDu6FTuALR74hVgUztqwGHbFEdae99oW3DdcNTxTfi1cWzuYXweKSQnn",
  "key5": "3XwbfrZqbyBQHEazQT43Jr45EkXYaTNAHt222hjbAV8hPphqNuiSbEo6hQX3Hbx4ZXXVpf5be1uNd7zStH7DCK1g",
  "key6": "2Nnb1qrVZ9gmFdKa8N7P44eX3yJGaxBgavdiNJyydkb3sjSfhASdC5AmbxnjTByvqiyuLAeUPYC6c3fQyFCJhmzm",
  "key7": "2AhbYcNYe8CYHEptUnn6uzJDr5wh8c6yw6JjZm1eje2XsHC78uxPKPyH24Np7GjfETErPTyfBgeLRJziSpz8xh7P",
  "key8": "2AprMizLhy8fQBKsZiNEykjG8hneabMPreNHchw3ko9q8RbSfv181XuMnQAHtU7dPqdnB4CGZh43nnLrhhDWR4jk",
  "key9": "Vpook9otR8oCaRuwnmEWbXcrygkbgw87J3q7gVRPLNXDcJn4GBTY3GQTW4e8RSeH6QWV3EXy6ujYv3PxFpbx4e9",
  "key10": "2V7QuMEdfx3aJ3wjTw6q3wSoryjiKkQ51cBKGmtzMiu58M6svsoXc5717JkqMAeHNXGSSESGkhrZ5RkC6yeCNxCU",
  "key11": "4njHRrR8yWAwoMj3ttjEosVwfXmMaWYSPU2kSRZjjaPNDuSeSLnASa5SKdGriasuU55NfzLe2YWrp6GfQnHZPS85",
  "key12": "3DSegGaFuzgE9h7wgyihYMAvnFADdRUG6Gz91bWgpuMFfpnVesTnio75UfczfS1A6tuPzehrKSmb9AwfkyWfEcdE",
  "key13": "SQMgMgq1LcTLAxvXy3Wtm993vYujLEmmkH1nyr523NjUC8JEa2pKYJNmRfTHoJ43Xex8aboMuTRP3TKrb9nBk6E",
  "key14": "4Eyt6NSBedi2iom2bZURpu1BAoaUQWi46xEBHaUkFae5ZrnWTXjNGyjSZeTKVYXssSdPaYRFKzAqmDjoBube91aq",
  "key15": "BSV3vMye3pErXV5ExiBEBuCMeDkx5WuKiNYK8Hgmw1dUntzY28icHrVYoLomVijDPRPjXnfKNVV3K4u6qaRW8xJ",
  "key16": "49VNVN5SRZGTetr3FjGtsh63msGBjKxM4yurkrGdYF3A41a8NKsmsYkktQxPvt546zX8ABZX99GWZopBhDCD6miN",
  "key17": "NiCq4RqPKAv6Jn9LokYA3WaYNGfbdh14GGWkDm6MwyfqeZqge1pzMn6v4zeMiHBg8zUfQMj1EJPUBLAXRAanUC3",
  "key18": "3GRQntSAj25UCGsyygqfKWdVUZJZxNasJt458SVsgr2wiDdRKe3LEYf1Ft4ccKtpWDA4nQqnVK4sVdjgvxTVP1Mj",
  "key19": "Gk4V5faosdJCRz9gGXgtVHaeikZmYyzEmCrdMH3vruwyULLMN35NorXdvkQqk9dK6A9pKUHiSLUc3E9ycAQyUyT",
  "key20": "2QfLkpLoFLRU9jRdDemmJsadRgP96zKhwk4UVaT2zJCiJo16qFUiy51oR6EL3jdaiff1MPCcCHuDxjr2bWQgkhtH",
  "key21": "4uRp4hriQj4wm4qjzr23EvBKMsg1Gswvto9ic1hRT2ZqrbSxjAQRr67dNe7U3n2Yb74LV79zdEsQM9mLTLfrhXaN",
  "key22": "35DLUNeQ4g6qGPEK2DaUFUcK8j7gswrKzuZYPxNaYgzbprCir9ohBDXyKVQ2PscbrDboVwvh313zc56ZwuLyUjZc",
  "key23": "4She53L4TaGmHdedQ1QB4ei6hv2nyDbNrtvVkEu2yDyFvCUBdnJVm6VLxc44oRPLhg6Q1Jh5LVsy9ySs7muRJqgx",
  "key24": "btaJRJ78DwT78CiWVR5WqFrmkiEBxDpPuiaPnbxQqsgMT1rqjTvb7A53B5FiJwiEwa4j93Gq6yMPkjKaRDr6Jmb",
  "key25": "3Mauqj7kA1GCCAF5Uw67RYXybpAUwzuihDxRq5D8MXMExS52DRaovYxMtoQPY6JXduNT7jJmTsC1hjU4KVPpvukT",
  "key26": "4nw4cbpiEeE3AXN6RdJ4w4Hwuby1A5jRQwj3WSHZ6oFpEcuTd8agGqzyLiJRvQXXa61VEf5H4fzqza8JEVSCS2cu",
  "key27": "2VQXLfPkbz6mA2qNK3ZJ3vRjg7Tn2x5oXXwSrpfhxvmExniq2PouA1vLKxJnjfJTVxcrRUxewCcRTZcWXw4FwSz1",
  "key28": "3XwPY1vCyqjYuSuutMSsdt3bt1FBZbH44WftnZxs8jm47r2iGSXkhmmjZAWNEXspiERPWMMapCw8bQ8xqLHNzAr5",
  "key29": "2odfHvTznhwgvfffyfpUJyPZU4PwiUC9YRhE4AfUEqQFY2DijV9wpsNcA67fJYE1yyhFQXRXnLZxuFaWSqdmLM7K",
  "key30": "4AXRsg5erzQWv84nmicRb6B8hK6pCgPboo5mga4m9mcDTZzzodfgFftaNiVyqCVyzg31CgUdrSkVsRpcdQyGwRLR",
  "key31": "2gLpwbLPTRijbLRqNJ3hPsYJr2i1MadCcKMV7zC9VrPPSpGxE66N9y9eUEeBUCjPppu421syUgtWJnsFMmyApdy4",
  "key32": "5MSafKLxsAxn4LsXtUFgVJ1yoF6L8PqthFRCm1wQbFLxUaRBuo88ZpJSVYMbDCtw6E78aJndcW7AGiZmRDMNsJF4",
  "key33": "GxN4QqzFx3bxLqMxacmQTSsM1GioYjcwFAKBMbcxGKm1Pmw46JNGoJywTJyjV1cd4xZfscwKkH4ApA6aww553CF",
  "key34": "5QiPModymjL3SEjmati7YnpVtLN7DPWM6X6QEXVRcorzFd5yY7h13CSTcGFt9tN9Z7NB22TDPFQTdsX4K9wnnHqf",
  "key35": "4cFtVtoQuiK2PVzMN6zSFeTTtXFRsj9vAUuKnGCUQnb8gNaqkctRXUvAW9DhZM5F9EXyAcDreFTmySfUToQzoRLn",
  "key36": "2RCVJ5y3FdMY4qz5NdfwByXeRvdteq8jrw65xAAWU6cRBn84TiEKAF7W9bsR6H5yv8hMPsMEW7FukRA2V6UoKStx",
  "key37": "5UyH4UfQXLy3s636yYfP56NUaBqKwkLWsfAnyUHzLGGH9ow1wfTqye74FhzSGV43b1ujfsiexGLPVPa3akwBpoXT"
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
