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
    "2khF7Me5GVJ3W7mQRBuKz4mJVc1dgoF1GCDshjjfBQPCBuvGPyRN4JqhcGS2YfgpHxeC1ky4DGp5yjhAN1qeupEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knDKX7uU414f4XDcDGzBtfSaofU57QgvziZ7bqMTnjR88Ty3HqgKE4UvYKk9xpxb8DiSVGeNwN4Y5hZabfU44Rb",
  "key1": "2TBCgqGyXtaSupgEiK3pshaLWC6yf3jgsyAtgLP1tTwFJFcd7cwdKKEeZRxGg8AZkws1rBu1S6exLjKus9F7hav4",
  "key2": "VaSiddnFgeSPLPykB6Nd85CyWjmdi8DkPEWvtbqEaSmYRUn6PecyUGP243XVm4aWVV7tGcjh9smMB9gCfAWDhkp",
  "key3": "5cqDZ7sAiFf6ayzt45M4wgAhCXmLc5eahW8dki55gHJFyuaumFKYKRFPXBLL6xWimK2w6bayjEG1tt6ntxTP6Tzy",
  "key4": "6ZbuCjf9M7sWbX6a4kghznshtRj7CPpnrGixKokhVsTaqVLCAremAWU2bjRY6apaNiQ79duTxy2C1a9Dn6gZwbn",
  "key5": "36MxgvcN1uszWrgXLN63CEFUJqrsewuxdXP6oe1J4DJUAEXeNGKpvsU33kjYdJgddH3emhVmQM66cQWABYG5N6Dg",
  "key6": "NViCg7SayqojJejRhdQi3jGk9ZziZw9qvEn7eEN76bruPehMEkNSWPKFX28A4ggydaa2NGRaRwjgUEgbNaiSfvS",
  "key7": "3G4JK6mukmUPYzMMKEnZhmajvix2VFR7LApTwSPAs9zeuGDrcMsbEA9NGPRFnzneFj8ng5edbuuU9ipMGwjCXbdx",
  "key8": "4AzcwgubRQosiNBuZqLCsv5Pbjd7G6jLBpJzxBkvVz7yuQTpuoyFbJNkz4ixLVQheNmT3zFJgmz7eN5wNruwq98d",
  "key9": "2vVpGeSZhk8jphMRMFxBQJXNVL1xHuHPHvqjZh4FFeLqQ1sycdmFVF6sREQtCbsoqEtXgqtHvzy9ygZHAEZnF3wL",
  "key10": "MvrrZhJehbPwUV27Co77Gbou5zhc3Dtmp9dnHrn3kXQnXeCQJsA9SJLfPiRXG4sjEtjVhmN9ew6ZjmZKEcC57GE",
  "key11": "312RY371mZb6BoWC3CAswiWGF6CnQpcSxUPvyxvX2gQSsAHLxrdiXcwV5UAGQLYDuipMPK7HVMMNKq5tQkfhG9t6",
  "key12": "298QoCSGmhB8u9ot7PGTsjJ5qQ6Y9u14bFD6T134nRGejHzcb8zX7kMmLnhf4JShbgFWkNjLZLPZR82WKCu3TFea",
  "key13": "4aJTimpJyp7qQgqpGmAtWiMcKRXNp3mbp7Kxc8wkrHowZE9WARWcvAXrbHfTwzhu1aWgaAaU26PvYqm2XQZgrTQe",
  "key14": "2kSM83meS3Q1goV7Ue6Y3NbD6aQBZ2Mtr12c3yRffx5KdY2Fwtusn3RDTZPnRNtPs4rj4iYVYu6CGw2h8MQHatV8",
  "key15": "5ELoDEpbRyEQWSrHSbdM8PKdmBNhCjo27SMzP4imCB5cvjvzh1CnsJsYrkNv4MF3NojxnS1e9NLJug7fZxGUtLw5",
  "key16": "4uzdMGxqtKChrKkcA2m6mSQ9sv8av5rXUoWMbCG62ejn7XymkyPkEYLj9ib5jbCkcfUqgRLrE8mHZ1KyrU2FstFR",
  "key17": "oMeLfo3ZtosWeMdxw4z7TTS56r2BXmukoDHoRR6kqKJcFrgVJymxSmsPm5tDuXxBtwDPiC9WFMJYWZRgvps8AQw",
  "key18": "3rD19Nc3yduve8HuVqS2MP4JRwCh5oQ9U1udddXam5PfRU4gYqsFm2fKChZML8rdWHgJtwDkTRxbkG3sg7VKNnmY",
  "key19": "5zXLPT37pbW3yVpEF95KbnGrf3QcxAW4eMpvoYwrDrhQw15yXnmaV4roFmJz4fGUKUw9n1MjNhTBo5RMfQ1aT5ZP",
  "key20": "5dbQfLrhx8rZhXN2C67ERNkH5BhjSk94mD8mUWtaFsQ2iK54VFWqtAbFULdfuecoVz8huEpercx2pNQWTN8n5PsG",
  "key21": "44LmsGKK3idWi5saVDLY5oziZ6vTBhLnb7HjqjYbCnaAteM5ePLr7xs9dW6DqbrpFhje4ke7oEXnJkSF69a83vsf",
  "key22": "3AmXx2vfT5x1WCoBrL3z2CtJmZHNm8fman7Voa1F1ZikxqoVVzjsKGjxbD6iduKsjLfbUJJ12ygcHdtcULwEqRXL",
  "key23": "dqaKKAJEffW28zAzqUZ6Zc73qVkcx6qTmPaRxCzvisstAec2nqMeP3EeRQK7dsLhAV6zzdJkgaTMFKJEp1rteNr",
  "key24": "9dMNtqsk6WLk97UuAh73BuCQapFzaEXPznaAM5t1ZGaDFjQ9AafDj4oGcRqwtMw5CuUVQHT4R9uJJLZH9KfrZ68",
  "key25": "4dSxaiRce8fcV4KGKjEJnB4Vb95ouXDKbESGWX74gxxMf78wFTJXTLHKJEFvLgodCG1RNCkk8AMENuiRWC3qmEVx",
  "key26": "4WxFS71ebCKMChHtRsqj1n6qnr9ycgafoswf6JhZ8X4TNxmYecvFijT99w9vYyEzzfgDww8zdWpK19bZefpo8B4V",
  "key27": "RUfSr5Sa9oVSTpUpYuv2dxqqSFT1LAzkoP5WcgKz6T5YXf9tS7DtubjwpyDVrwoiBv7oJ8tYgLSzCcrorZotp38",
  "key28": "4ovNPuEKR91qYbriksooEsvzht39f4eGfRXpKH4RLKdvX9ptuRD93oozeDfXcBh2a2ZrBUrtp9qEXpwCXLhq36w6",
  "key29": "4n3Xz5w6qfRZwWYSk2GbSSDygGVbZnEyLrh66QvhdTva8LamvPV1eWQygpzvxPWT27jFqo7ucE6V8mthZsRH9K1t",
  "key30": "4msZhEvcsHWdXwn6duN7A2Qwiwdugngf1QBcUT3EuMNqVRCCvCg44H8V97KtVSF9Lx2K9XQibZ5gLKhTh7Ts2sdM",
  "key31": "2Yyj466ZJyACD9K8hCAor1xfPidkMKfEH9LgK7as5bMy78G58Jj6NYyizvP7JmSDxx9nZsZFYKhzGVav1UBeQp3X",
  "key32": "cu6g8tnTpRZtyBSZL8Ri9AVbPWiEiC4AKM9YqQ3jGr6JfWqcuo2AJedWhSufsvihFUx3KGRuFACZ1sQwibBFj3t",
  "key33": "58E1BtNwHjpwi5jnH9VzfjzzmSqwW2C9n1dTydsS49dX64STMCWuWJsQLABEN7DGGxihpfcecp8VaigSTBFcto9D",
  "key34": "34b89mufgtfn5LTrEL61fCmeRWUhK93VtQHdGQgYk48ZR8QBTj5msAMS6mLH5x2WveC73iUDRSEhUBxVu9z8YkSA",
  "key35": "47Ru5jcf4CPYsd3ZNyqVHA8ZthjySMk3X6uX3HBoXrszGvvJmQmaJpJnv3Qu9LALSp8gocrWPW49bcdcNSqwHhuN",
  "key36": "52A3ofaR1hsTM9U5Ub5oKoM6RxutfEGnso82CDERFKUzDr2zM7NaS392UQVJuioa2mpzRB66os9AdfXhxrFRLZzH",
  "key37": "4Lm92kx4V7fS2cN9KFqqYAkKD2LgwtjkQJEmJpVubPhzLAMGaLk77hRXkyLi9Bhs4emaHE2RBzqWtmoGP1cjMVNg",
  "key38": "5zXAVFGyhc7VbgXC6vczX7oGx8WaPA7K1wGw7WuUHsrbCQipjQop8DYv6MsFzwFuHMHfAmCyYWW1krgj6PzzPe6t",
  "key39": "5PMEcTNzumQ2EGjSNCq2LFy2BwH1NGRDcMM5F7aPJESJe2pJyohHHkxs3dtM6JNYYAHCY8TJ6MxDHYGvvDRJWPPU",
  "key40": "SiVMxqHu3Ttd1fRVsz553vRxUpHLNQfBTCHMZusiTd5gMAc55z9tTZdC2Lr7fa1m6exQYXaR5DB35AMNVW9d9ht",
  "key41": "4RxqoXF7QcN7LAajoNK5xm2HfaQR5xHANkGvWhEArtwvR6yQzZ8yNjL3svXnA3z8J7ESboAcwvKVqUUtk5fawHrS",
  "key42": "5WLA9YUYRS18kf2SruJbzpB3v9j3vhRvT6RB9ZLzZeBtwvxpwV4BhWFJUnLLarjupkXc5sfUz2LTruRLrXgHG9A8"
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
