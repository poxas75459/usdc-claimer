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
    "5rV52BRGPA1YqV99VrnFfH1AUoBFQZbdGCLgEVLQt9UnsJncCeg2i52y7oWi5G3bnbDZ97ZcVYS8c8N1xq4RZ7SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVayGLggafe9b7VNDimgHXHpd9CmXCregjssqxjdygu9nBGcYVhnPMiz6MZAANfCEP4SdxUqbeMrDcPgTx4xLhg",
  "key1": "3CUujTxgtGFXZCtZi1fpNYJy3NE6dZhxUnkEHDV2ysfjC7c2UgPe9unKSqZNU59qtuWBkCnc6TtKC7h1sZUCGsAj",
  "key2": "2ymW2i3wMdMu9HNyHkHprTGejLXs2JDfKpy3mUjBv7GHKqs353UoKuZbjF7aPLwVtaYiU2MpnwqQJdSVVExqFL88",
  "key3": "3VkRqRQZRZyQQWvA97rqmJFWqTTpigEBAdX2UqD9nYcHhTao6HNNrDVcjkkfuqb8GUgKvirfHe5yCUsni1C9syxK",
  "key4": "3BGCbcRHNsnYQKhRrSKfDqwfUcn9P9hYBwNtdnYF7tr9ubBMQR5maZfNMGnFDrPEHTcJjGULUco966QYfDCE5adK",
  "key5": "5Ubq4kvheDTNCchmCscDkoRs6RP3PKhsK8e24YGfnGDo2XHCJJ4Gc6PkdChxjy1mKfVikwcpuAgMc7Edj4pJHHK",
  "key6": "4PiwqAywMWzyaWpfCCHatBc3Lq4JdWJW3GuSymW1yU5FFQVFNtv5g28eHdPnWxErd732kMHubZcH76fATjrvCnMk",
  "key7": "5YhnWsAVHpWBDqYrNzSSheYyQpx8uPzLNQGBohCct8Yd5DzVeMvapCHEuW5BAB65nfFA7Y71ydhyREPc6pr2xPYK",
  "key8": "2P4fmxNUxwrQ3t3Gahkmb9yuenwwygFwHgXQYpt1B3Hq88SPsQHKegHhgWCFu8ntL6MCHh5iC8gNmzR2VCos6qKD",
  "key9": "288vdoA8BLt34x67nnWnJ6H8NRSjQgpNrkg7uH4rcCv5G3NNw4jhhLo91xs2PiEvFNUEhZEcPG8zHySmKPiRfFZv",
  "key10": "cseGGBvwm5pLSgXhSLAE5fyt973qKvMG2eGNqHjhxu23ZcLXx5ZLGjPQAV8PmqaB5ismjedZogfwCD1TSZEZoQD",
  "key11": "4WrEGVLy142svWDLqU6tVM8tGpXeb5bFv64azVduQbRRy5cgLWiS43TuBhEbAnUPWt825NWPRsTp4ZBBBab9okdf",
  "key12": "2MkP6ZYp2mX5TrbWLUWncF7Qo2e4fyFt3m5WNRMe5sFxpEx6UtkH1egWwZVewMNSskmReM2YTwHhMkSoJkGeZxj7",
  "key13": "44326ijgaAijkt9tBkSpuYzsZA4FPZ2taTQnBqHVgBu4Hw2x2GHQHsrh27Nuyq2jFDAYcRhKPRnysHeaiZ8snBKF",
  "key14": "2szmGtmCZrNHmjRb2RJckmTQseke5RY3tkbXqF4FjpoeJKgrevxT9n3diRbygsKwdMfCcnQxTktJC7sUA5du2Yer",
  "key15": "jdsAQ5zvfEoi5oD1UJDFvMY23FBvkcSQXccFT4iFrfZ6AURdRT7SgoGr7RWRW1goYRRnnzxHU7mBe5F3WeharM2",
  "key16": "4yQQXBeAxhX1Ksf5zpvohBcnVfshPbe3U9tXevABoV4w6bv4VR8Zv5aLAh94Q9y6wpECoh7tAALUCLfV528CvZ4F",
  "key17": "5KKBSN3r1uWkyRNMn5bWh41GYGSNujapJ7Rp6suVMRpYsDmS61Ug5TFJwgff1ZEq2vyWpdMcv8SHTUvEDW6XYuTZ",
  "key18": "Kz7WvkHzAbB2KsBvDgD3XS5mqcru3sB5ZNwUd576TnagqYATpXVFhXGpfzh2nDXFEwsbhp8Vv6wWTSM5VhMYbir",
  "key19": "5s7EAUDAXyRePomKLfudCtFZoBE8bjmmzY81LkXwK77QgQ68qqyeJdsAgjvbEG3pA2qi6JdMiefyFmvss8LBrT8W",
  "key20": "3cv5XtX3XvTVkeuhyjwvBGDcds54ApCaySx9roiYCV51XHBcCPojHtUx7VxWi7X9SNtjdaX534iodgRBtD6sS3ke",
  "key21": "5MEfiEXQqDDedK4T628TJ5vvpYAesP2djtkJdvWNU1NmnQiUj1MXeyTWzoHzFN8hjFgN9cYX3qEQ731iFy1XS4Dr",
  "key22": "5RVPyWFq2DfgoGeBnhzDqaiudNdrFyjLu1JSyzMpYUh3nxBuC9r1Kir93NHKVXC5fCUHwaNoBwe6tsPHkjMatJcp",
  "key23": "4FvH9exJqmLL7N5FjxKeVu1rW6fotpYNSU8XygGKkayz1YK4iVqeGLuXaSZ2BWddzBbPdYmCaKWCo19mu1HkfYgE",
  "key24": "4obapqSp9yhbshFFtQYdWoTwtipMCXUBzQC9oz9gPRJC1uXFy9DiFZtBnZaWHPA5aDCPCSBvinJKbvSXeYLYe3iE",
  "key25": "3uR1wEcLjn1TADJZLqd7LrmnZKWVkABALbpwxMbw2aN81mUnMfRLcXDmxize8vXtNfTH8pTGRXz8Vn9Kf6k8qoFw",
  "key26": "5oHp8iwXwUbuUMqY3hssV29qtQyYX9tzsuKoEn2UgkQeh2aArFnC1woR9qrCHMu7fHhZKsKnJSJp3NnuGChNkAhV",
  "key27": "4du2DdZwpKYSGo8REDToxydXiZE6bgHaWBDsi5oh1ouJX5faQUDXDGtN4wGCMEDisKGa1mHSETW85Zsk6oCzBC2t",
  "key28": "h2ZUMbNcL8HAYupBwZoShtdm663dLUae655jC1tnxmiRHfaMygsgz8F8yt3ETFQRipGLeZ3dFcJuVd6td7ii55q",
  "key29": "eqYKkNUomWTBe3hj7u4mFLusaUcDFYa24ik5wSDh3EZiCmvXvgBUeZtxKmLtVdVSz3Hk9VkaZnYkuecwFDGx9Hb",
  "key30": "4zREGByrgVxJ1TsGTck5y6uWrqRGNNTta9xqwGdEk4E4Km3KjYtgU2F4JqgekRyvQXTdaY9aJn6uxrN3Zw5dktub",
  "key31": "Th7A3cMANmYZc8fMt79BZNF33UgySgPkzJk6t5CGjJGA22mA3vLYMwJdBPRE392ZeiUQDjGg9wM9UdtXRmqRZJ5",
  "key32": "4antUgGfs8Pc2vx4j7YRUaLEydh1yMsNjVcALxzWMw9NsUM1N6YXfnqksVGVXRi9Dvidu89HmBKMN7dfKBdNLGuc",
  "key33": "4TrNuTt4ws1rdWV6NuiWe3ENxTW4wqHAHFjcQXMhniCEWZh3wFzFA9PWD4MNS8TiqEnTy8ecsa1EAAbDVTd7ENCo",
  "key34": "3JmuzvsahY6LghPNfgiA4bd1SwPrURv8BM5cVt6HvDksVWUWUdZidLrGCV1iuDb77zzjxNPkMoggWUbc9t98FQBQ",
  "key35": "3inqGWhbxBVPdBJwCkQR7NS6jdMhCntYMyebbzo3uX2yWtdyVsmtJDLxmJCXgvDdBW9ccobig5M2EuXGxngfGMLr",
  "key36": "JAhjYMLjLUVS8iDGf6vJvk7cL1xiNS8yB9RKY4vXtmdoJrYJ9f9sUxdg9pSh1yrxxzGdoZnUxwSxJKQxK5U3iPk",
  "key37": "5UiTRribabkHByQQdWwqXXnQCtKBnNPpjSBno72eioN2ojEYAWjYWgmdJK9PuTk7yzk35iQCyyqDF1ECD4N6j1SA",
  "key38": "2Pexog5ZDi3wZK1mLqEnAE2sZ9K18ux8AitSwN89w5uAhbYMStjQTfxQuB6spqvupeqf7WbGgizxoLddZQ4dJTCE",
  "key39": "2GJDE5d7js6C1ZSg5wwqUJ5nkxzUXaK7aA4DTk8M2XBYxy2wEwvTDav4LsEUxYtJko6WSiqTmfAoxGEvmEJX9Z8u",
  "key40": "5SdPuc2bZu83xEYGWkMEzHe2KmDkfPcb1gnuexTKtdWAC67iUB7JmxedEHUDGdXA9shYUH6AfsuajXCwHGPY3Pf6",
  "key41": "4sU9MyXYdM7GaYtzP3CCsD2Xi4YLCRFTZnQ4FMc2ziWDEX6fUJmQtgqcQh2jATVSb1vGnnDJow8qbAasRqxRtxeC",
  "key42": "5J6288JYCPJQNDGu2W4vVWKjoWD7sGSxfibQCqechXtohA7UeEfxdc27TV6RToNXLnADWbJ2CnTGie1FAVAUAwAD",
  "key43": "3N6rgxqafjyxGu25PXnhSukzjBkyGZVZ25Q2ksRKCPQxvrbZtvQxFNsYpGUWUNagaoRnMg4gsQsiFRu9NBAUHEZX",
  "key44": "4tLibSMkzx8u4jq29UfYrfQ16xTMuKuuf2VzmA56P2pFBQCwAQ6v3C2XdootffRan8zJzKPFA9nnEFN6ov62Uck5",
  "key45": "PuZq5Gd3xiManEkzBoMtnQx7MV2pHTX9ZQ5Qjdtwrsxt4n7o6WPW7HPLQmXf3TTkQktXmkvbZhoMKiUb4NZTerz"
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
