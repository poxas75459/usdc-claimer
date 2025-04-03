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
    "5A2BMM31Ut34THR25s5GtrCx8bbB3q4TgfS3iYsTS8tbK2AnWYdFVWtk2ZNjTM12g7Cz4mmLobbkJk6h6Rzzp616"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K43J6LHDrYKYSBZKwDWwvLvqWcSAr3Wku7ChBEcJChZ3TDe6pQ1pMtyo2CBzFguWvTZsyXZUZuu8xg98deKFf3z",
  "key1": "4kPVySgsv3jwm31W6QaNhVAMe9mQZfvGyKLpvcGamnRkn2CwdXPQnER4w4M8Q6qPTtx1gXHVw7gLE2mhS5WYDeE7",
  "key2": "4MCB7u2Xe5gp7GvcQbTAMm2sT2wJMUS1pYSw9H9SiL5YrbNTYJCoJ3SHmVbBBWkf7QdzuzwfwEyNzrEyMF56AraV",
  "key3": "2RRXEnipHG5skZ5En59aZfy1NNg6PDh1GimHiD642Tk2opMY5QLKHyzDxfjoux6Jt1VY1RnSxvx2TTF6BaDZR6rL",
  "key4": "2M8HCYzgV7uqDcwjDEMPvF4U1wWszePQeTbtc1ZxXNnWBkhny5a72PgZcn4VaaqtbZGmL8XUkr9UEtFvWhcScsHo",
  "key5": "3jFZXCv7Bf8gUAbonXB2gPcZmqLUjp7p6kTK5fAqMdSzbC2de8asDDWaqsC2wwp7GD7XvsRMeJYKgvC1oSj1wm9t",
  "key6": "61FE3abizmpshjkJtmUh44mZ8Fbaat3NeKnBAUk5eqj2PxwgPfRxYDKNzpZqwG2HouTAvAuB62VvHphK5tt1CK5y",
  "key7": "4rHb2JRS2Fu4twnZQCGh7G85WZ5ZfFksALwNbqf6YLq24QKBDLtV4vSe11X3zVnNQzmktuuhWAoCzySWME4GBriP",
  "key8": "2m5tpsR8TNWGLL5kV71NCYCTCFaQEfDNpqzjnBCe31eBWKuiaPfRF3c2pDAWxN8prBi34Pu5uZaJYfZ4RVJvPRTu",
  "key9": "3ywQMzMztW7FgtX5PEQfkoVZ6BXkhKRMUvLqwpYzEWLRQDFNYd92XNqGBdWfN6HX4zowY8Cn4sVu9EDa6CUw26qG",
  "key10": "548onVVQCUQDbRMCpgjx8tgp35LbwAET6hNm5qqmrYeTr6sEheEw55GPUtHAzLeiYWPDAioeBHWAfyFw79eYmdim",
  "key11": "5fAJxcj1HRnB6GB4nnJ71RDpHE5Zvqz1kanm3bHGdk4zUWsmiderCuSUEochEsSRE1xntqzBoHaQbmuj7U6Q4gA8",
  "key12": "vSSrnTw2KM8UKo4TAVeR9nJRmivj1FQ2wMrj5Q8YdpJc3UVmNntRNEreQfZCUdsZminB12M8kto4kjQeT4Rg6r2",
  "key13": "51toZcesdMcPTqgYrwMUoqa7DCbGwYfCJVMk5f5ZCKHGvyavwbDZe3Fy1dMbHojCatGyxTPMkHRCpiPZTRMLKrr3",
  "key14": "2bcbwyix7w7Vk4X3K3ntPh8dgtSBcHmX17DZcD2Sdj24RcCxBaz53STzzVwz2hGuY89zhJcnKfY6DVpNrePzoLKx",
  "key15": "3HuLs1gtkHcDJWeJpiDRZCWjRvWpncuUgnyfZ1homyhc1JaByctJz3Yza7bvVBhRhFYp6YPFtduGNNNdhzJ7zfmx",
  "key16": "46TpELpmFZ8tHJV5EWx61rNE9SA9SRB8MKeV2oY5zetnu2pzoKtmNc6nLt6W71VAQzwCuW66bwEU3GZWU8Ys4oi4",
  "key17": "2BTPi4UDdwDcMdNkxKkoBzNLmXRK6pgAswej5s3XZpEYCZAWY5tLRr97AXn4ZeVeV75s4GhKBjrCLGC7msASgUgY",
  "key18": "5uXqFkqJ7vSWw7o2aacLyfg6FdY9nviubaNMktRPVDh8sq76Gb5hnBxYRko6Jw79oTbq2zVka863Z3iAYvDsfwCz",
  "key19": "3M68wHHJEKoYgRSaA3ZLa1QBY62pwhVHJ1aB1yy5SswRuQrXhHQVt9K5qwv83qvH2M2Whk7sGiYkUB21kMEQqtBK",
  "key20": "2fydVYPGuXbG9c2G2nJNafMU3Av6m2EEBVqPDPvMWiU9124LSaineQyyHSHfHVztf5DZSbaoZx35XAroAvBR3Lcb",
  "key21": "57bdtkuXbMvvvBLCjMCBLmd9yKs94qaU66gqG9V71TgBUGb5MvCXhn2vGKVHVu7J71UpD7hWiaq7dRaNWVStepit",
  "key22": "4DLn1bkepyM7n51hMGTKj2RryqYvbVF9CcRouBf5P5RBU5HVag2asB87MdxdLB7EZXenGqYunxkZGpqodPq5YQ3C",
  "key23": "22ML58GkaejsBfgTwvMUwQEHZisw1KfaVstupJxaUkDYkxKFi4TNMZRbzb6QaoFhuejjcw92YYGV5f95oPHxEt5Z",
  "key24": "2Q7FP9iz1eajEBVafNYd64Db3r4t7uzQwUMEtBeGso8ohfRvwcgvnwGbDyph5yXTpeRuSuUhGR21HfchXSD9k985",
  "key25": "4cEpFnsUEmDLeKnGh8YUdxiy28i6bUhYGLWsZ85dHEvn8qPmkDTRCMSZHBZHp8fYYteysBs3wkuJcZ32Zoy5FHcT",
  "key26": "4Le75YTQDVALwo6Bx1WFEUyPzzJWz6yVz7etUufDc7Ra4aj4D5gsooLps6wanWRVRPAp8r4y7o8KQDnqaJTf2JiA",
  "key27": "qBju74V87M2JjpmxFzqcjv4zuxfoVCDTgGCsV6mN3qCc5sRrKkWedyPE7EcUUJDQvWDaTjo4qJW789tcBwY6c5f",
  "key28": "3noVNuFreYwrmYw4VjwycpZbfGbWEi9H1mSfZe2BXVtCUCRG81EqgfCnQCkCvsLVLKm64iYc5FqBq8guFoLtRZkk",
  "key29": "2WAELrdPE3PDM2AD8Q35PMmeRHV2wm1XNbvSuUAL4fBMhyZDLFtV6rmeeMnhDgzdqybGbYL1jbGTkaDpeKtdZmMP",
  "key30": "4P3RVS2a8Ahtnyq7NeXo1FnsoaRQmUr1jrH4dVE2w9MJa98vhCCmrq46XPvMhs85rCKcSwW9c8och6p7TYCmUQEi",
  "key31": "hTVT7Zqc1dZE8f6QcW3aSYxHRNPcmzJZNFiv2tv6HmzQ91VNWSzgjmnZz6BLbgyviAhrcEsfXgo1PU2jBsVxRbH",
  "key32": "EfaHWJZnmYPQdB1DumbCnbWJf2CtiMiWvdEmskZ99Ve4tWiMBwudVda1D6WniWpFfEkKN2ggm2jcN12GnsZJzMf",
  "key33": "5kUgH2yHGSR8Zb2JdVf28qAER3vza6EhCPLVy2hkEFm3oBDVGi5NE1CAWiA4RtH4EehZF8tCyHe4SnevkvK4vLja",
  "key34": "4AtZH3peJCw3HxzGgjaHa8eRYFDTyWhN6nmj82knFpDkv2FHZqZQmGRCWu9UEkYKtCiQdAMTrzZskWb6FYx5qgd4",
  "key35": "54NakrZKeSem4fyVyhYgsSm2MMZJqSfbpCpMR5rcPD7eup8SnevMBwzKumXnZxm5Y9QfLEKdMmV94ofwhiPRiCD7",
  "key36": "64seJF2TLBRNvLFoUW3sEjUvmG6JNiPnmfVvtAEMwwAzrCtU7oMPnExsfmhCM488jNw2dndXef5aFNYk9caLj5tR",
  "key37": "2YAERcXpMw5gkGqeM3qWqQ4EaRGu8SrxULf2DzSCnts3GW5kyPcnt1BX6kwQDJb4dG6LMEXjbjxzmXCt2W4mPyJK",
  "key38": "2QoP5oFPjchPZzNgwGVnmdpDjDEgUoMy1NotD9KbSji5DJCFLWMEk72mrtiGbmYh2yCpW2C6ivodqesSqgyTT9cx",
  "key39": "51Cd7YRztDP72HiRxu1hZPogxsMdH8bbtkEbqTLdUVaFt9FngtBSpMBAvsD7noeFVDGLaYDcALiz8VrBvaAzXi4b",
  "key40": "3Sg5RjM8jiospZxNAnmTcUKMuN5WaxTAcYsnoC9HLxfxiG6UVx3qcg6q2iB8i9mQsmc3HRN1wuZrFp1DdC8pZ7pC",
  "key41": "23ZqwnVinYypw4iEW6XfYpHFkBo1aXgeiQXsR4u4Y4ujyjtF4p4QZ3CFEuBTqiH9rjSQLKLKvGgsguGudV7jW44a"
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
