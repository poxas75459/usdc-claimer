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
    "XtsLdk94f1Ttt9HAyPTTzPW5SE5BAwWHJNSZcasPAsShvVN8ch2zrCMYVVyMVdS82oBJYoEanjUTuRqBvEkAzWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vb1RgBLeZPKPMR6AonKoTeWzKFKKLqH1nAvQYXswr79M7wfYPEd5BL3oZqMiEKUiuCDSJr1AzKaCqGGRmPLjZCB",
  "key1": "5y6xrLV1jiC2ouXHMsYV3E72egTEvYbzMRPVu879UAQdoMPgd2Jev1jmrKFDw9msAB61e14o9fZUHbw7q2ZnA1eo",
  "key2": "3fXhgHtTa8hg6uvunRSfCMBhacoowZJRXMNN5UtsVs1DZwXdtDinTJN88WAMZrw5dq73zoEkoTxWnNmr1U5j3vRC",
  "key3": "5LVDcCVN5e8HVgVYFAY3rRXPUiTMgA5iZu5VSWuX1o93XydchGg2tpvZt9MXRJz68r82o7HaFpUYCzxaFBMAnHQ",
  "key4": "5vrKrH8CJsh6e2k3gYmRQK5SHLZ1SDVJk1mdSXNbu49WT1Xhr243zz4xhs9hvPmuY5hBKAssHyqNvXkhkgH9PDsR",
  "key5": "m1gbYGwt8ueoWhqLUn4FAQdJ49bi5eKDtnYhDtfPJ3e7bPJnMuBoq7dFy4unW3GAtf1kk1ZytBJGBHyqNnwF26G",
  "key6": "4jdJ51xaRh9h1VWwJQoZVXE3uuiDuhvFLroCs9XY8jbgHFFK4gUEzpem7u42tmocJTJDxLprbtCTanbcbWk67S7h",
  "key7": "2yM5P5smD2ruc6aE3qF4pS7HvM6YX4QwcLvsCWL24vAcie5ta97ZWzhyn2oM1LwPDvQVE2v5NAPEJx6CAtKn5wWE",
  "key8": "4zRTvd1uRgTc2CgKv2yeYFT79hnekwa4oFbbenxL2DSKAVNpVdErA3yWjoHLxGPdcSPtfhxVGmqemiC7wAyFxSjL",
  "key9": "5KiXazTir8UiQ8VNZmTMMoh1oYoiFofTY8Sg8mx1bQPsaHvfVQ3bvL4RtSnwjEfGU6jeALGojVbyujzwQbssHUeh",
  "key10": "4pvCWNB9oR1BNnJ8yYv1MH9np9fu1ZjPpRAwTgtEgWqqJEw38qAspKg7kZ63ivCicboznfenpYiP3Wft7mzVNGmE",
  "key11": "3eUyHu5CMkdMYrdBTTae8SXeadyiaspeyDHpRwwPx2d9HChJLR1sNDhzWqkfgZbCCQtTVCvtdowkrz2X1AwAht7j",
  "key12": "3Pt6J2MwjEaVTdsiuqCXWcwq7Ge9VGRauso2Aguv7Kc9MWtxsLkNK3k29XBmdkf23AbYRp6QMHo3mbQKx8pUy45M",
  "key13": "5HTZoMZbt7yPuQ7grVpyJiJ5KB9sGdGFvUto9o3BEwxqNy8CCd3YdD7PCCp4CWKMDHSJ6dVKqXKuRAsp5iCNH4qC",
  "key14": "4coUiKRx4UDpGpyXFY8sgSVYdwJSJwJiZUCcZYKGFFtG3yktfcsxj3yADrZLUFRHt2v8ZUTpngtxENsobft4Rkmf",
  "key15": "24nX6uVUAANHzt8Me6JYZpQSVw2HbQ13YTp75G2ompf3UJUPPhVugQ5X4mQwHiS3k2pYhfaNcR5bbwAXzxFPcjSM",
  "key16": "LizokD2pJJoGwXhDso4TbkMox89hduSGKTt9h24eURQYxsYSmbfYw139o5DiAtFDPAQTGaRpJyviPWRdpt4RkvU",
  "key17": "5sVyMHQfEYLmuAozNF4TScgsyTdyfxbugK4SbTeuwk8qV75r7NwQJ4cbpyiMHvrZeyx4cHngcUKqQT8xffT8ZGo8",
  "key18": "4NtVUBBurT3y7asNxg443PpPrV2WAJNceohtCa43f6dfrPQwKpcUEVbNrqL1XXCLmd1CARwmGa7tqtieECnDMwFm",
  "key19": "646HTroQ4zLhPdzWMwhXWNrfzGkDHao5ocPs3DmRSqiWLM1j7vfmRkMwi8rM3MVSa67j849JdwMG5AWeyaLcy79w",
  "key20": "2CYEpCLUjLHabb2KJ7HgjuuGbzqXBBuMcFiuogL1oBQefDi2USG31CMZTKiWCBWLaNw3PRnGimfZMXMgeonndZhN",
  "key21": "2kyaiwB6qzEadgmbJLEptq4bHVE8hMKPYqXYFMF9RDjh6E264HjX64LKeLHKWtrdRdcjbda226pYvoxTPAoxmBht",
  "key22": "29e8DJkhzn8qQ8zcJCJ8yABQiMkrn3F4vo1YJHudc3dsa9wVSdePyK3S53fHGq4sF54f3iBMH2GJuJRtMqe5AhS6",
  "key23": "53uSsJQF2LkRYwyVSuzYyrKJvUzPjNHCjia4uSj8Tk4teajsXV1UhfTP9T46Nue2BK6vJEedNkpLKnfkuKeDdkK9",
  "key24": "3ji7V7mpiZCGuVJJRbZynZkBuse94k8BYXBVWCcrPpxjJz4zE46TRRYmjjM8oUwQypodrgj2pUxVHKmbbQ3EnSSj",
  "key25": "4F94PK4L8gfjKK1pZEXsGt63uBwBfwfU7rHxLy8hoxoruVbupYycjvC5sZ9bzuFSXqWvGNB4kgT7VJdhUBVDxiFg",
  "key26": "4PB3n8KbtEzPurA5GFgUBuogaa9694iXKoGrMfd7hNoV4iofAxQ9ifcjNJPYoc7WZu9YceDpwFBQ5koPa1wotvcx",
  "key27": "2rsfNYMcmCeW1vKWxxLYf8cjExJUpBVtUwZTnANprrnk2etw1X8eYhMSEGAQ8J9Ux2i1kDDw9iNw8AN5CPGz5RgH",
  "key28": "V68N1z7t6MVCUEGjrWqLuUExJw6iYrKpbrg98TJMwUmHkSdNVz9dhNfxupGGHeKXEywmbXfz6wmTLhqGLTR9xG4",
  "key29": "JsjSkqwgRCo1s2Zjyxfm2xs8wB8dS8pwYUL3m8616ipmNGNd7L9yv2kZ78YtFM5RAN6PcDUDvCwPGg8EYh33RPN",
  "key30": "KZrEj7HECuCMA7Zoi8aRVfvSDpHXvk691fLWQis9TxYGKU4qxm4xhyWxXhsB1sTdq6TmhDdZzehJT1dRjQdZKyN",
  "key31": "tUaruNubSyi3L66wowUjvAw5GVccKbdZPrGN7h9x2vNL1E6QuMuwcY5ia4cnheDHcJQ5TC16NXtByuEMixqCt7y",
  "key32": "3R7qsXZyNSiKLoXbpdLQK8gibKEjE3PWVcScRt2EMkQLhejr6ncu4pCg1FVNAJECcPPdP9Q7SbJKdhsZoLseRtpN",
  "key33": "vwJ8Nik6bQWiyngfNsqjjUTkw6uVQhU8UGkTxF16uHGv9xGEB31zvCoLYUKWBAF5MAWYBdVto7vZUcw2hoF7moZ",
  "key34": "582FP2DzK1HXLjFD8cqSb9vtQz3WHXL3VQcU5jN2jkGzntZyjwyFUZhga3iPWZEK2LN5euUCKYP9SwLinYnXd5z2",
  "key35": "4Z7ctv3BVxeM9x4fsu4pw3N5YbNsFBSKzXqSLv7e1mi9sA2JYxpHCMC4ew8ywLVn6wwBGwCHnJYmtaQM4EvKDVvX",
  "key36": "3HF4sQ87sihzXK3S1BgKHknQqkFfyq5JFjd7heu9cvoGx8Q6zTxq9FknrMAHPrEshCQuTTccESTpMqtPecCBY8hz"
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
