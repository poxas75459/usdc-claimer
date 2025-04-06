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
    "2MjpxZ1A3YUmQkBqp9UNb5NDgxwsGdCCKg17WLv5xdndkfYAhgCdcVcFJx5RSDLiNYgYjjquyWzVaz6MbT5gXb6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsYK7Tqn6emEHUpcPYFxUFeGGss712Q9Tw5i4Gj6MD8V3BS9oJgK6VWKRSZ33SzK9ehzyLakJSo3DiXBj6guboV",
  "key1": "3vVGeKcmLypBsBJ2MwgSNiuezg79tMvqS5eY53uJRixof4smqKjhr4CYdppm3hfvCmaacpQoQoTW7zvz8jLGgE38",
  "key2": "5Z6r1iQEwPZXgaqpndkETJBFM5ap3aNpVnLR4wD7pamxygNNQMhAfAa77ySW1ft1UksLgg8qyBZvZiXsCcgmDDCy",
  "key3": "5u7wxyqJrrJB592meKgCDZiQzT5wKck6zY7rGLfapqs9SfH2CBnXjrW1E6y4uzk5YdNv1ce67pNXqsoWEfRJjN9H",
  "key4": "4WLLESd8P2SgxwAei7i8LGdJnqMSuVhPvqxJ7uzdFpN1fLECdbX8iR6srtk6pogb4U5hSkkCsd3P7vRLL5ztKA6T",
  "key5": "2U7QhXfwdbwnc9VqcgMD6mv5ABrQ2Yg2TfFmJNSspuRjkAmcW9QEXFBmBcJtZDR5ccMTRE4fDT58FgXFT6aacEi5",
  "key6": "43aMj8Uu6XDJrtAmYo2LweEz9578qWGL9V7w75UnWby5Tz5rNpym8ff3wqQCGKEaZEKFFZGitYWe1kumBn3yBU65",
  "key7": "48HWYnt98G5GBMWx7zfzmPN4RM8Rrz8pobSTfVzDRjjiPJXoRPDrSSH5xDcqddVsFE48EixvSgwCww1YVfUSjZ8S",
  "key8": "5YmYJyAoG3cJQihkeaFBWFg29UmYXeScthvrJtqUjAAj9a3oWN2FVNQDtVVHrenumJR4prNgkZygqzgWry7oboGp",
  "key9": "rVyDcGRyQW2XnejSNRdXQpcPRDk8yDJ8b1oY4eaf5TWrwSzMPdQ6Xc5DEmSpqt2zB2zmDoHwtSwGA2DDUjxFXok",
  "key10": "2wLCXTvZToeGYLtY96Sz8hXA8YpvEjP28GxiGG8Rd6rJovs2fASr7aP6BkRTZSGghCaGL8zGwaLnVJbxhTr5LQWb",
  "key11": "2nSjw7LxhQt5y6scZkK2yRt7pZp8CFFaFothT9p9NbgqEn1hFow6vTCcYCLxK14Sv34aszU4b8GpouChVufWcbvS",
  "key12": "uT4DEnJjsqVqavhpJQkFB3wVVW32PxoiDcYLRt5bJztwaMtUtySgWzYn7BZ3eozQ2RS4K37BoDBkcBU515fPkQy",
  "key13": "iyVatNKJ9D2pJVBen7WzAmi8GWAAWk3a7JHaJMPYdeYFx1VHxDc5CqzxTtPdQjL8MTCbGD7KA8qGaMCDSXfvrLs",
  "key14": "356jbx835WT1aKRNFcMWgcQPPqacbETib9NZvi9EmWzEJp6wk9dzonKTFJSs4gwL1zgVuDehpeNgDMwv58oTeDWA",
  "key15": "2zDftMaxsEeeTDkVWNpF3y8hPRcYwHTZBSegYbHWTKQoKAGnZdRxBPVT5Q5QsHRvy8wArUezJcpF5zoLc3vTz2J5",
  "key16": "WxaKCmB6wiQAzcgf5zzGaxmS8JZbYoMjD29o8XNihWbYQAT8mM4aK1MDTCqZd5PktXmefGsq9LqybHWHwuHgd3i",
  "key17": "2H2ExXQmm4FRw56f8WyyPpdhSnBNp89k5fRMj2ogUA5oZfpFf2SxqVzhuszPic3ti97G5qT1UT6ndiJqGQiXhmR6",
  "key18": "3E5vMCp8PCXBsJBNxh99nRhpxiqSxi9h89bcS31eTK7zfimcp7WHxQBpaLh2Tnx9VzCESEa5E6L5WX8sHtdzefK",
  "key19": "9CQNdAeBCEtN77TLBP1e63H3ctinx5FVZDeRgNWMUZwpzTfurw5mtZbsnAYh2m5EDEsQfWmxCNfmN9pgNPtcfT2",
  "key20": "8TWpqe22i2U6g9vzMn7vKxdfCYu8pJLXkZqafRWqyFiVyRMPTKbQuQfEVYJ5LX4Hoc6aCbBac1fvLmxd3UjDV5M",
  "key21": "ErwE839CzuX5ZFK4fCM1gwyQXx9qXnPwXnJWnh38WVUGj19ESkBGTZczUNSk6XXUqRNEzRTzTXMf2MiHVGJbo8f",
  "key22": "36o2mfMDSyJPfCSkFh2VvPEZayyrd2TFsC1HmP4LYDueh1VftB9gRutm65y3RR2crS4PJDMYEbAyPrb59rjLh2b3",
  "key23": "5TMYNAMZ4jMPBkPNCo3q3VpcwUpiZ26FnStfrvgtK8AbXe2vbELPuWeyN4HiMFMTuAAaM6gMRAFjaPxwYZizgVfA",
  "key24": "3EbzdRT9MgR93b55rGHXYDygeB6fs5qrhVjrwp9amFGm1CCerquZiBn8MsC7NbhCMFNKuQEjb74MSkuUXkuPE9Gd",
  "key25": "4RRnJA6o3k7JZwPSomwt9bCQzbg91jNxqY2X6GVZBw67uotQjB6KLaCJExRG3v3oMrpoHJmsLx55rCS511uyRkFd",
  "key26": "zUx2gpeuFd6VTdqxuoB9XTY4tojN5ioj69wgmGA9EaK4t5FKdtx3EuWkuGTAbHwYkX5o6bfUdfMEn7qiMfFFrwo",
  "key27": "gjYSvdLBt33rn48vsf3aGEaVEJEVbNkHs9pEZUyb9YzhjWSmj73zvvkNR9U7MLzL7uqck1vBSp7AX121nZeLoe5",
  "key28": "3mRJ6pWoV8aEnQwqicVTAnHpfvirvSM9iTAd1cCwKQqDPgMf2RQ736PEtk3L1YTHeccRdsFLxQMFuuPUX4GnHas4",
  "key29": "2MZeqnFSjKwEPnGECwWB9SKX7q1hrLK6WLWMcBZDT8uDV97EWsEgBsj32crTs6tjJtWcGe7HNZxcCJVQuip77G78",
  "key30": "3whg1X3Rkuos2xk2tmfkfBXZvS1eBL3R9jq163dFX2UDZ2yFU2UCPZCN8kZHzhqYYs7mHb6uKWXgcbXMqpfniNTJ",
  "key31": "62uZA7Q6ef3wCHVRU9bUFyh5s9w8U5RZN3surPNb7rX7BZ9NPNY3XycVVMbjAPVjk5SzqEQzmmTrpNR1zcvsXvAm",
  "key32": "hosiv3TQEFvcxzENwTRoRwEDwpPJRANUDPR9r5gNszwMod7rqfT3G11bPPURddkb3T515s3vyXiXsbxSae7D9mq",
  "key33": "42XicQyXmCqTJmkQF8aGH27bVxkDsfCGVhARZX5rAkByqMNHvkfSoJG8zrNAdNZ58BdAhkZiDmTJv99MfnmMtimW"
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
