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
    "2JByJmvDBdKWQk7BWkhqaP2kTZs36UXp9tNyqcdYBVfeeqQhYQHs7rkivuNNBvejwKFmk1Z9rSqkpULQaR3GEFhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fj577ZdvBzithpbhxdyD7SSGJztpfUgSHSKnnAwafhgcwy4gmEiUnTSPFFMQBR4ip7rcnZsXvXv92cDhuPTGTQR",
  "key1": "4hsDYqzdrPG3GEfGiHqtMSqootoy5R5PLX9wwz7HZh6jKLDZxEocHDSguPUjQhgTYGn32nXmNGEFDkPECZK2mEBR",
  "key2": "4g2BdBDd92RxgH7dAKJ9baGcDgH94p6fcCRw1fQ9EkoCQZUVnwUGuEfodsqZS9nHGXntDD7dnt5vSiTikFd5nbCs",
  "key3": "4hmcGYAHCfFLZjfqumoKGe1pJcbWTxGruxKviJdbA2zUJZDWDbschbCuGTeXv7vkC42C1By4V6Vk4zGnvPR1Qvgc",
  "key4": "45GuFzshrRFedQW7qhVc5Yar6Dtq2TGtSRztVE22XTCHSK8V9h5nJXd2R9LXrjszPLArS9jWTwT5VZLs7NqfbxcW",
  "key5": "4QjJ6dghWYdQqwwL5jgM7cNLcaYc7fwPRQbqHKCff3Q4Fpso1fdPvJYPTCmkse7Nfznqnpp3x71Ar54CzrbF5XKH",
  "key6": "2a559zqTt9h2jwSEp4MCUULnZxDyhvt1WqRAMFUrHwd6pbu4szRCamFCJb78cYpn4vJcWxeZZNmPPMvB1aWeaq3J",
  "key7": "ZXW2bWZNuqPsEPGaWY8rsEypbxf3optsajsVUiV1FXX7tyVbRXEPdJ1RH4AiPYvDDA8cdzuQU8TBTHzLtJyMuFo",
  "key8": "3WaAUaLp8k8yJq4ksqyXPXzk3PFa5xJjVGpZkxiSFvrSEUb5mF8tzHVbV1i3VxNde9sLVi16PT9LEnNhUhB7RHow",
  "key9": "4N4BhCVN87vb93J6fDMkxchu7udPyy3ybF4v7Ks9ESp2MK85N9CdjXn1UuByPfnmggDjEnyWM5Kh3pxAqokuQpcj",
  "key10": "6un6hud31L6ycb3P54iqFV7R77nAbxAim33DAgrKxtoKe5gozUk47bn7qTpYxbM4Sc5TFeZ8ssYNQkS3WtrFG6t",
  "key11": "4VAHjqjNgzPr4HQ1VWcJ3tnkRHNuwNXd9hioWdr5LzUjSG1Sh2xDMp6wnCX8MeVVUK1ywvi1xtqHMw3QNbLzHctw",
  "key12": "5TzhUo1vQXSqXrsAVT8NYcQvHX1kXMS19k9RxapF1zQw7jZGnu33dzbw7bPRcNbTUdtYtdPDgBB3moVf1ZG5zxGj",
  "key13": "39xBynxS4BgavSpLJpdnsXyi6fNbggikNdWm9U35yQidC3FZ7tccGcaaJERy69UVeAVK2ctp8yRxPELViCZdRG9t",
  "key14": "3QKcLpHKeBvobYMh4HtvG7pDkd55fzoLkpnjhCaydZb2puFqNHUpoFbV7VusVs5i1oGxapyzjbxRSQDsMpWRk9vq",
  "key15": "2e3wtccG2G7w8TFpyLEo67pbb9mPZxUDyRHYToLCQ8FNMkYuCmscDZjhKhLvVzDZPfMTUpC6H5Jc8oYd5d7NZLDv",
  "key16": "5e6CTDP7wBEVAwuWtp8njCycywCVuccq2nTdMuEVWgi7umvFdymxviyk2DLMhUC2zkvamzwLZnpBcb4GSaE6v8bx",
  "key17": "3b7u7j88FrRDfR8YEAtRSSCusKmkMXfQpaoB3pwUb2982tJMiDosgSFnAyj2Ud1xrsCYRyfGFNV1bNxpqDEiJznM",
  "key18": "2Fe7Qzy4weBQ7AkTuWRhnZiLDrVHHXi8BTm4FqsgtjffmBkGpXQBNVi3i6XNeTcuBkD3Ydoz6xZkP3ScNR8gNeVP",
  "key19": "4Z1D5mAN8sSAMAnYovZ8QWHVBqMZRGe6CPA8DwwoFTEVdVKfBouLYvJDgFRq6Uk6kh3AEgXWW5qB2XCLpp9SvGbC",
  "key20": "3vMUWtT1g6DWaQXqo9b7X1ejVtY958xLVzjBWB9Y9zffmT9FMriNeqFbQR57Age2RQfd6sQcNki3F2d8eB87iV6R",
  "key21": "4nKaNpCJ9yZPguekofvBcL16wD41akdFag3bEyTndz35gdbPnf5hXb2QeKmw172ZQsD1rwV6emrWeQTHYPysSCkK",
  "key22": "2MhXLfuPSULCNqkUtgpLwDbnWdA4knPfprKNYF8Ms4WtGKTipjsbd36ocm5Qjfi4rrKjb6m8rJeKGsj98Qwwsy6q",
  "key23": "3FeqyrbjUZ9UYKwUvg5Y1hR7JQjo8utYYzJcrnviY9pddDefcz9iwgYnphQCX6AtT3wcVBH1Z5nUvPPbfy1YiKLo",
  "key24": "4HxCY7fSBy1MsEPBfXgFYqXma8YKCzsBuBiEUN2UPzzYLcvQa5i9rfk7gawmU2JadrPhk8qAMecKcXGHZojP6Wyh",
  "key25": "26BvzDHSCX4JJ799cBH4RjGifZkP6nsNqgB71EYCoaXw7tTxq68C51WLBhMmCMDLpVmTh5RyQGZ4t2eBJciTZwzG",
  "key26": "2FDcAv9SHzrRpn9cuJwh7nh8gKCzv7nUBUpL52uPGuyM2WuSSgGEAfDUEDCvmCiS7mM7MKwr9YYbQ6zemGyzdjw8",
  "key27": "2fzAGGUWtk1BryZk3WpfMGM3Hrz5ewm7DErd2S9YGmUvGW6wNSa9LfsLS1yArEyvUAXM43GT1XqNNaini8oC1zg9",
  "key28": "4hyYXBrnGJbhuRGvPKiX215KU4hm8gtSw9ftqiGAJTvTxnYjcSFBvx5A1bTThqt2ATTzFbr66AewSfRohF1pMxQk",
  "key29": "51ZBSNw1CCM5UNi5cn78ZuHDCZSM5VVybsW8JrKkWpgDhgMkzq89ssWJ9nHcDUaadw7kXg87aVYQWqWin3CY9mZi",
  "key30": "5mLtGET7b76LPHFDk8SHG13D1rBHi8XjhuuaYQtpkbY3MBXXTZpU7Wdw79kF7fCBz4PBdAkedCHVefRuHCQW1CNR",
  "key31": "2MTkrKCjzttEtPZtwaizf2rWk8Jn3NgJS9mCwZKkBJJhuPrru68wgxN6eWuCSVcG9J5qBcCtQD8sKVWxzdXPwodT",
  "key32": "zvUmDbtqZ2RDZFtyToudRgjgdw2Aof4iSs1emN9PN2uuZYBT72eGp6vf5MznTMyuUq61axZk8Fn9Uyo6Fcjbqeh",
  "key33": "47n2LijPt7X5a6Mrmm6kLmYW3ag5VG325CXpJSebK8ea2VpAG9azFZqvF5hTBh3eUimyWvxb5i4VGW8uZRESwBLi",
  "key34": "5q5TfLboP5AbiyB8GAZbdjx5N9cM6XgUiSuPKzBvo3irW3BbTg1geoZAiS27ESNJ5SJDgbRCUmKyckW9qN4GU8Px",
  "key35": "2chb8rS5Mi3AzkRSesaGB8NKpEfApmmUFm8PqBxvqGbhFMt4jw8nKkgVUrKTqQGByUNdGCGHbFxWQpnm8eL2drcH",
  "key36": "53RhGmfCeXVUbJ1gaRS61JQfFJ3RaWaNZ3ryF5fuzMbsHu2iavuNaMMvndmYb62AV6o6yNcpLvFtKvs6Z8cZE9Yq",
  "key37": "24DkQkCHLg4HkgmaYTXbp9WxzxGHkpXRFDp6jrE6ysNXKMXRdBKHGmj8SKidaGaAHDswEvYrDi1XBEoAJf5Jcs5w",
  "key38": "Z1YW7WmGx4ZzD9SnwqbFkjEVdqZkEUyx9K9ByivNuCtuuAJ7ZCgA7ipnFMiwE4apYxrWLEiQaQfuNZfRkJfnbHe",
  "key39": "3AG9rykmPs1K3JWktiAFRnXrBrJbQKtfCAoJEDD6A6gpAxCKNNoX9ztxttvqVQchtdmGxW7MqKvxR87cyUtT7oju",
  "key40": "5ddPT2Jo5wQJsVwUByNbsCeqQxu1ST8PXoQaH28hp9FY9HZMPdeqHm9ne4mP3tM9bYWCyWntY2MfRKa8WTboUZfa",
  "key41": "36dZhmS4XsninDG3vU4EMkskKeA4ZkgtAJTMTcgWo8QAVAGFWEAtvZYxixwwJ6t9jz1oNYFVPno3v5cSTD4eiC2h",
  "key42": "4aNTb3ycfaq5WFzZxrhqbD3nMap2BP7QEMGi8bYWoYcuacqgJNct9TYmUXj5saLhutFbAPE54FNqA5DxDgoK8TLH",
  "key43": "2ArWgeraWxqKMucTsunreGrsYTjmvNSfAouSX7sDLDh6kesfZY8a1jP6ykvYw7eJdTtNFUqSncZLhFefbNjZ3dww",
  "key44": "BDTi1rcggXuGHTFofokBYNPHPqJ1H7c8SMbPd44hrYeiukjd7mNWtu9FuKcXuSiuJgDko3MuFNw14e5fYymxXDi",
  "key45": "2Y4ouHNGeqA4wPoVb8joBQ7FCKG41kMhQUR5GXhAMHCGorNSUELqvZKXewfPAwsHC79ZMbDwBuQVUyh6aocittXR",
  "key46": "2mzq4GQkPTm9111Wx41SJUm3xKuRtivLk48GjJjn6Qrui8y8y5XtY6suYVmRTVu3dRpYgnbApB6RMTxrC3eVFrEh",
  "key47": "2XpAX8SZC69iuTGdbqDMZALzAthAFNbjzTPMPWshmTwfdRhftQKFxC8kfSpaounGJaD9sXKepU1D4J1YjsmDDU6d",
  "key48": "5X1ZgXQ3Ssj5qkwvgZ3pLskoxoskS2LwsXy7haXqQj8yBumisLHQtNiMcntA3mMArSsSp8BKnhfH5HsLTEnVyWJY"
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
