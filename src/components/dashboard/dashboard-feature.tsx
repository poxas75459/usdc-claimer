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
    "3Mhb3iJdkiprfJBKBMJyrrWkQ3AqKYSbkJVtq5i3YxViB1vqvi2w7y94E9fnHYZJpiR5CanHASRjFEbDB2jHCzce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECJ75dMVuNrFmfFjwj6R4CPjEvM4o8RSqgqgdLRMbuLcd6khc24WQ1k4q4R7fgxfnWatcFAvi8aNhtURU6VijZo",
  "key1": "2YtejtP3GiZArG8JZcqtSPbayrpx3jNdCB7HWybHS2DVEwqRfVwZZPuQYnEPnh4eCbrhYRcPTWBgdiuJGvMQqF6J",
  "key2": "5P9uktrJiJZzR4YQjW77WpA4WxAQY2B5CCRmUe88tBbJnLwqDRgSWSKA4p7WCep6pdfsDkUVVFimhXiqZoinFWi9",
  "key3": "2XxHtXFkyz8dR649sfNZoJhZSNuUwmYYxECVCpqBA5AjG4vWEwjzu389wk2HdEEn8RZaj5eiXQgattQr2MQjAWah",
  "key4": "5oNus2mogBee4YRg3NmuwvESuXH2NMgpAgGjxR4aQa2yUJceYH1v1yGp6Z814VihfhzszynWEPWtQqLZbnnm39rT",
  "key5": "2Y6B7Pxcm7y3e3QJF9uBvzrV6nppxKumKNNdX7rUMApNfxMSEtY9SkHkH6jmWBwodD11MxoS1EBDYUFBHamGVZzY",
  "key6": "4a7v2K2CZk1yQyao7QhPtgaQQ7pxTpRofMpan7gJKcSZMYsMJYk6iu7YvY7qhEECvLoaHAHuCdRDr6Ke1btndfrb",
  "key7": "3Px286MhsfshUFwCg9wtXP8MrcCWYED3oBkzSpCEz8nKFQXtR9Z9cxUDksWvEGojHHFWU1cw3DchLWa1LG8ZYsPr",
  "key8": "3MvSNUKpqZoBWBJA18ZB6c4BLNGK7Reg2eb2c3D5WaEs1sLeZbqLrQhLyLiSkydeF13Jq2zCXihRSA39uYa8x6ds",
  "key9": "2oKAiiXNSnfcnYveSigvVDE8Xr9QzW855dDddmrYSpmkX6oLGwMJGCSYFTssE4ciDcYHVgJEMr1XWSTtmWuKSkFg",
  "key10": "3kHWhWWxcruPsRwk2hGTfVZhzcSytLW8SqmDeihtQKUoWQb92QVPeBkhzBACnFEBhMKJtzcQ8T4zVkfNN5xYoory",
  "key11": "2NFzL8fgXZ1XZYtTBGddQgMrCwzJg5naWW8HTDVM1bPNLM6zfesnXKMKSSpLEAuuJD7w7nZvmYJEtFVBxwKny5Xa",
  "key12": "3VxFQ5W7KwdjTDw8M7biBRmF2T7grULAHKtWPeg89NnR9onErLHH4eQp2trAncGVtLD4sv1iqgCZVHmPgiRUaDDd",
  "key13": "66mUjPpZH5strBJwvmund3P71aQ5suQgtKFXiAjxdA8bLUvW9BYZw6zKELNkFx4QcoUXZqMhgbLFmui7Z36voZBd",
  "key14": "2oQpKExdAmorvF1i97j1hzdSLc3bEtbkK8CPPKSwrUuj9TLfvykZZyPD6KBP4vVtz5uUdZZLTkab3nFvno46HcsS",
  "key15": "3w8QFcSPxbjAhJKxKX6W34dHA9ntz1iwXEr8eRoYbNjbHYxqQTxn7YgENCEzGMDtYe1YWN76xbTpVv424i8ZVCzs",
  "key16": "pY9T1Mo8iB5edsYg1QGyJhW2T67uJGPp3npembUpkVtq59oJkvrjJf3S9D8mr7z54LtN7cTEWGHuvUbKxMrzRtx",
  "key17": "4NiXu2hZVPhF3gu3z47augJcatX1GeorpkJgegbYtwYCYRxu5v4WkArHGq6HVsSpmn4XopjfRpFmg4GGMKVvTXuu",
  "key18": "4Bc2oHhkWBY6B1nD4MxoUQUC69ZqV9cW8nHm53niLSc55vVfepZpQd75rRKsxpbJmWE3ReUhpT1FCwA2Dofa7QUE",
  "key19": "93tGkzyvJoJ8n6mef7CSejyVN5CM6LxcNmZKyvpR218rX2PNtVexHHzois63S5jUHakxEi1xvb4v4NxLvMcQge9",
  "key20": "2bwXx6DwVHNkFrTkibsVd3LpE4gQrgrAJAjArea8ZmTJcziSnsFTTkqmBYib5X5vKTWSzFNjKoN6jVR5uD2HeVJD",
  "key21": "4ZyfZfXpmvBVjEMiNhDX2fQfCoeJqcrSHSZn1EEu3pWcvWYLhhbwCmuonY84c8isgH7ZQCGnSTx9m4dPpMBjU8RZ",
  "key22": "yiJjvshTeB6iPhKhb3Lomsx6sgMhDQnAdRVMN2JJ5uw6j5ybwrPEyacjsoiUJjFXaNC9HRrhNjU8S2YQ6CCe69P",
  "key23": "5SFJLWLB6t4QTDWWTcBEnw9VnEZAdg8EpxEzS7sMGf4Jisaa4A7RyN1rxH9EFxxg783YWFJQSNDTM39EmXWKRPcc",
  "key24": "3KavA9rBa4oEjpDqEhPKQYAww7YJnyx3T2yd5SsYdhqPEfoF7MWswYga3uruGUugVs9mxzouUDywXQHixuT369Hr",
  "key25": "4MnPoipkwAwXPFxykyTuMTatFKTj82t6SadHdPz6eZp99KPKR7rzQkhjtbHmpVs6WwFWxUa5yjSGiFNFi5RKc7dQ",
  "key26": "sHyBq1ACMufJeYayCqTfjQuMGCTsyaeTUiskrGqcoy7NK91ivkmpXP18UQarmKxNw9rnmyPf3ZjDNAK97iVUjtt",
  "key27": "5Rbr48C4DSFcB7MVUQnzMVKfpoQ83vcrGPvNh5WyE38YofdNYVpQPQE14iq3JrJtTioiZGdvbBvkzVFtnTc8EoJm",
  "key28": "23px8vdirmg8P2hWc4PuvGcEmrqcLssvCCgnU5Q6vfKug8aqtKchLFKWimq5qnE8BNqJ2RXgSXXim5EzAWgMsiBs",
  "key29": "2Vp68XvvXtbX9Gpnm7fxnrd2uaedvXFNPnG7yRYkZd83VHzAaF581ZeWsqsiTQWN559Si9TXSVkqiDCKHgbfv4ej",
  "key30": "2BVWbRSYZPzU2raPH2k2LjZ5sgfAYREWsgeHn1DyUg6Wf15ERU8Dq3Et9tVHzQkmv33C1xCGRqNfDE81iW7fBCDn",
  "key31": "56PJdYvXDnX7xSgQ8Vd1Rzocd21FruYdYihqvwqzNSN5CfQsZwbx2gTULdH4U9XbCnGy6jqwewySbL8SKSZQnjFA",
  "key32": "31WXcsJ6D6iJnYRaJHdwT5JtvR3uNhjaoG6giGn9ndLWj2hTk1qoCb9CxtS3iWztBchD5Two9qD5HR1bRLt8FKyr",
  "key33": "4g5uYL4aLg52vxVMs5KuPyrSXrgKJ24CveZ5JsELu4kUWUm1Gmz8wyw45PCKgmzQZcUysh7rBNt5ZJ726otRdHTt",
  "key34": "kxJPNQvptqjgS4JsFZn3Ty8cuYVT39YPEtPUweTrvMytFnc6wxzQXcw7pbuNvAFsbdXWhqg8TqeVUbgGe4c51XB",
  "key35": "2X5EmcYjmTguV1Az4JmEZQ3SPWavvS6oWfgDHJVu7VgJXHe41PHHgWzLduRzkt5ZEKt2N3Nd1KZmsH2HnGQ7SjQh",
  "key36": "2yPzaJ58SFQxrJnnPtF5CdxHzRdwXfL1SGnowiwxnZHoX1LBkPfLPT12SS3dvxqfrdJUg1JrRUnQ8cYomJrdb1vL",
  "key37": "2hK2zGo8buSb21wSkbbPWPR51TM9q9Ta2hDTXGyfzmSZhn2cfUS1tCQYsHkcMttWtuyvUXjcMSpjeAxyBRMPpA1S",
  "key38": "5Wg3SnXvMRkYvXNAWaDKMLpLreyESKUH5KjEG69oLHjcLz5xLRxNh14rkBKipjGXr3iD7bk9BzjmmNHH34fkQxUw",
  "key39": "5zrs19Br8LbHb17jG4xzU2iXNmuZfwvzKyj8hAcoeiQasVAKNM7FrReo4vk5Zk4vU5AHGvJnH5L47VX7spRkYUYd",
  "key40": "KFxd1kP26Lr9JKcCxb9yQapeNtfutHvBnCoPsPEhh9KoPgxnK6Pt9YVqLtQt7nVP5C6bSBVD3J3hWLjtos5euYq",
  "key41": "39HAvfRKTBTEzotRoGVm9Vcm43UuDjwLcT2sVTgB4NPXnLRwYMvKJffnepiizuWP1iKiapHEAgSo4zyZcRzen5P6",
  "key42": "2vX8BqavbQauiFdRg23VLJCDzshopEf9jittzEk4X9utqgmpLGJcNtJ1LPJqFjTeCUBD9SbiHHwA6kemkwnw8YUt",
  "key43": "2ma33V2Wxr96M27gPxhP8SHj8avNFqvMpWPQYjnnWzYeokWW9FRNfKJwR446pB4zCV5mUniWxF5EYWRjdnSXWwvd",
  "key44": "4XVKooSFWzgEdoAi92UqLj1yGnGNjb4iW8hp68bwGRMgP8xNgmiBeeQLkpu3KsABdH6qVsU9qSrF47A58cSbisss",
  "key45": "AwQ1ngFATMdqYmSvGpYM4aU2HJXkFMm3TbAhmYu9zUYy1hqyTCC9AtGaBFwQNrm2vnEByxTjzwcEqqQgjvqWnpB",
  "key46": "p1FmFoYgRXQpCNbNJTTdk132jckPqosHsi7oAKDHUNusWZhEn2hR5Du9STsH4XkcyRj9u42nFfxACyMs5oaJmis",
  "key47": "5mhvxBS984qiaSy2PBdmB7vAQKRXi5xK9URJVbJA1DG7HRFZTMWcUKJtCWTJqYgWrvLZHnpiedfLKrcxFsMQ3BLB"
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
