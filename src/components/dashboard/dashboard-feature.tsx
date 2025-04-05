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
    "5hwkB9FvQyDrjSoucvdgtCDahpuvizaavwrA41XyuKTT5yQoahz7xEDBFFKvtquyh2cVPFNLnBTentRZQ68hwMES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TXeDhkfxW14xiJiMCsccmCCmB3pKWNbM1qjZRPqcczzpTjpGgWyzL11C1doC4JBUW6HxN45QUk8HWkK8E7pHFG",
  "key1": "2RSezZDQ45sK1djxSsHS7GAD1M1KxPZQMpqank8Eu7jffFMTjbsXx95EoDSTFbG4tqj5EN19ppLVUukVhs5qGjRJ",
  "key2": "213JRgujyaXs78RZ6TfibvuWffu3EoKHJKd9HjK6MPNHPL1wHR8CzMq4p96KpY9CERq3YsHnTdJhdtRoJQ1UGsMy",
  "key3": "4sJn6VHEWSTR2bzUUaKPWxd9TY6w6vtFRwvr1kM2zHHoeZ18BhZVwT39fowGAzQNqHXLYer6y5VfCbRgpx1MmxER",
  "key4": "332nFEwmvVSACurprrp9JNwmXu3arjpTELdaw4RRxzHctdGLj8xmvJ1WpEQVSZviB8HypshJzWyDAroYjR4BacTW",
  "key5": "23t2yJ78PEEQijxt8cVCoFa4UX2C6auUzjTsoizujDtrQsULxVxkHaLG2VRfdajpVhjebZzRUSbA5uxDgEeuYEfc",
  "key6": "YZBMYoh5Q1yBPnooT1DRNGAKjxNDGd1PKRLakCjgkbg1sSqKReVj63hpckcjXU2UdQd434uGySGneazeD9KtHqV",
  "key7": "UyosGEUgyQbxwfezxwrdLM4sRsCshL7JFDtBQeCSQjokqyRUGWDPrudGKzsGtNrn5RdA3XTU7kFJNZSdt3aXViG",
  "key8": "4cwRFoyVq7BSfUZkPSeKx49HmDHzS6FAcvHmpKMb52ubVd2ygEBoEDiXTxFGCxrLVkHYET3uMnTTBmTUFunYf8Fi",
  "key9": "5U7dLynLyWozSu5aNysAw2oaxEFGy8oQTsDrUJJoDKY971xYapviraGo4HUHNtMFJVAUFfHv5eagh3bXdfn71wcm",
  "key10": "2E67MWknZbdBD3HHAfsMamCs9NKD5xELYT5MvG3wG56XpCHojspJZhSxRFyudUghvZR1ZrsqoLFEe1S1XFSeWRU7",
  "key11": "X8z1pW76YxnE9hytdazq2EaUnuPQDAxVmUGCCbJeJCdbd8kdYsjBjk2iqCZjJPciRzSyg55U75kLnUorzoY3QrC",
  "key12": "4gkApntbAsYLEXzyk6z7qqXhG26beY2tahTJKDdtVcLvRQQ8pjiXR6w6qYFUV1ELHsT28hWK5CUS6UwAnzu4FF4m",
  "key13": "41AERRMNaZH3ffozY1d1z32dvZeCABDJSHvtZh3XaJEgxJXsWAEYNZQbrtNwERVuQP8ECpySW9733WEM9cnDukbH",
  "key14": "56XfGaYxzgF4uApXibGfqSb333UPELUqSpMRhARrxeasbtHS8P8YzAPTwAQxEvxxshz7vhsHKmjxKQp3dYvbtFzD",
  "key15": "7U9VDjAurP4iquJpYtqnaAhUNcGHToCcvSN3f1gFo6d9HUYMMLFYzCWsphgYMGoFAecvVbX3gHQmMyZUxhw8LmX",
  "key16": "Kts55fiwU9Z8QoNsUELbsEHUf75C2kkaZBgqoHR3cpdgWaQzYJdHs6dcDHFUcEeHYHfX74PydAjrGHuWFzBiupc",
  "key17": "5bbcZzTSaMNuaapwF8MHxsHFKKFwgaBXsvtETtm7NrLs4TBrXr4DLMAprvrU1dKZizeG21an9LENiEX71DowcX2E",
  "key18": "4bmev6BVc3qeNL3sAB6Gyuhpaoem6M969iaGrj3VS9AkC6nJghndjRuPvJFNxr43GQjhc9cMK2nx5YbGnumBrh8R",
  "key19": "3mAmmHKgkXtKiB1J3WEa3FWyZs9o6pdFmaVvzTma63sGgHR79kKFQBt8NdVA7MYCnVDNDN4V4p8agXeAaYMsNg3Z",
  "key20": "2JadSv5Kx2DW27jRMAuakKDuBevkKbk1VfJQ8y1fAr9X6s6Njh1jbvNnHpWfdj6Uxyge4N3tebTPYxwqajTY5fB6",
  "key21": "5hTc2cLtDrgTucVuZtqXkwx7kYMzQwLaWDYCZrp8gU3kM5Z8YS8ujhQJ3neAqThqLdA7BnkMQ9Kz8ZBBLnx7fUvw",
  "key22": "4L7PemAdVsmCEqvZjSC44WHdRKKGe16ckFy39vgDt1uZr8KkSLLLUkqyVpmvUiTBYgHTXEfmSUgTfApXFuiKQdtP",
  "key23": "2yG7uKQ9KrSW41wSSZE93hHrFEHwWJ3qs4PHpZm2g7gUxaUPx6QbSSm4B1DjMAfFzQDJVUYRTj1gjpQo2TK9zfrD",
  "key24": "25CDikVorj7pQxCF7QTEEf1AaTK1XHPqNThoGHmwjnLmznCj143a5EekUrmnaNHE28S1bAZ4fgsmCmwfuX4njTGQ",
  "key25": "5VF9wGV8ePAkSTP28wE3ivP7Qat7T7mZtW3Kyd2UZa53zh6r4QaJx2XhaswRfWXvPPnzCc84yrdT2jBghuRSrjdR",
  "key26": "3Ts3cUpKBaRajCp3jxPnAKVfR5aF4RcEthc2exQgqoJVJSM5NrLhXcBENeLbNJMzC2UMQQq3UnfC8DqsWby3dBD9",
  "key27": "4nhHVmTJuYJXCjK63r7AJaWV1Ufr4mMA8oDHHKikB9CYNDLDBUdXQxPsTib85qJ8LkD4CyCR7L9vpnPXJ4J7SLkR",
  "key28": "3hYvnmGcqsugwXUb46yWq4gFgGCqS3TJYmsT4LrhWoGp42LJBgxa1XsYouCirh42iHDN4tVbcrAeSiqKb8VxwnqZ",
  "key29": "4bPu4iKJebSBuM7qjigSgS3p1UwG1eGShE4jSUWmkCNq8uKGKKeRT5iMjKGGzDHXiQsyB4rqb5BAcTAZAxzEXv4T",
  "key30": "3D7fNZA1hboxzY7p6fVrhmRHYTDZNAxE7krZ6diyedVH6t6v3A29VTjuxohwzMopC6mrn3F85qHQtZGAJ1wsD89B",
  "key31": "4Bi8sFv1i5kchtTEvz2Zpfg7gnevjJ8EvFDJujuPc4TvCBXfpNnYZBdSsgCQo96d6VW279RQG3V7vwTJtqWja75j",
  "key32": "9VXLmtEufprx5bWwrWtJLxrzFBY9ibZzYhtFjHgmDWnvtMgvgzm8LfEUimWwTRAELxm69Yuok7LBixdkWodX2sS",
  "key33": "2FbNSmXrA5peTmqTxoHkMM4YwwkrFD69JnPJr53Vsgiv327W9os7JbTxuEFDNK8YZ3oLDdNN2mCASwmdCHLPrucD",
  "key34": "4rkAANXegVLt72kuWUepD1vfYcQyHwaBaW7fc7VFE5ghX31PuYD1r69qnQYXZS5jqACfH4DA7v831UGtoCcVwBDU",
  "key35": "ZbjTrXHkqCtL8Ybow5hTd1CYXxvQ1HKoTwSfdZrE2oaj4cos7DWo8FGYB6d7X6mahKFFTi7G9YWEzR1JjrAaFYm",
  "key36": "3TebMZKiJhsPeL7EBSsqi6dDktw9SdzEweXkT6CPczNhGqTaSaudZD14uBPQkVXimdYAqoxzM3xheCFiN6Gv1w8o",
  "key37": "38MfFs2pnwSkK5dGGoB2BDuabpWwJoRwQCWpSz4TAEjMcANAe299ttQGma8h7K3S3RJSnnkmHSy1CuyGysj7et6S",
  "key38": "4HCqdsrVjL41RLngM5jsGbPytu4wrTewJsATkKHUM3zfJ6qcCxfPH79PyUi51xeP19JVo5AxVbTpgZ2N2HeDFXvc",
  "key39": "52kKQaNfXgTqu1BQcgp95doRfNP122D4hj2oSQcAibCENuixtEwPTdxN5Pbo55uKK829fSXto8KEYW3qy83MCuYr",
  "key40": "4takhmNcRQHUZ3GE1UJ7KX9JhSt9VA9iw5xa7QNdDWieQmmgbDm883XKc2jK7vwZ65bo9SNdAayVMW1L67oMz3qV",
  "key41": "5Z5fNAExxWcdk5btswixnhDMyJ5jhFsexwt6mNVWDPtD6Nvrsfh5M9uTxTUMvxmc6EjF1KUoUq7fVbfs8NjTwFG9",
  "key42": "62A8zJt9PE8p26eBG9jwQPvBVEwvsQj1JjimVhXNygTUcM2EtXeUcGwbvSFaJvaouwg6VxNMphSvmcjmCNkN4iWF"
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
