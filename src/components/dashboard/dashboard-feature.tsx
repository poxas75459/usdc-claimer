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
    "4wm3s5LYRz5ShtDtXzcGyPe5FxHS2j4wjGjY6KjaGJgiP516pNLWsYxyZihb6YabEenjuN4KWyXaG4bESNxGPukJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hy6rw8TpFxeGvLNcMBhvwNHobhsZyz6Xjx3qCHimNKVT98cVwFqJAxLfjNWS7RDQWFQ3o8KfEMWAdVc9kdCqJ46",
  "key1": "4fgPAMxZJWt4GzXQkhiKkmV6tEHpmjr4vKqUEPcA4TZ5XaWjYkEQpKfq1SNoVHKfzkcFyVpNfxK2VEfXT3DC4SiD",
  "key2": "4rgns26Wk55MyAwcyvsEQwrC4dZqx4QJ6Cov35Zw4xYL6EBp2EU7jNubq4usDF8LC2qikKexQqv7vcsS2AbNn9jy",
  "key3": "JbtNpw48b7QUqw5EbWqj6pifiCfbeSdaR12JP9xvsyP7dwTqD4PiPcXmF7mYcGXcDZmojJ3fiyfiVjKpYPABYcr",
  "key4": "7Hvwfwy3BU9Dt2hwpn1Fc7SkLQxoSpnb7XxyXYtE4tHNYU29fBpSn7ovZ1b5Kh11sm44jpoZrV4CcmHYfEhkGs1",
  "key5": "4hetDwdC9qKGcLGfUHSqn5HpMSSczvyWxY1HPb8DKCZ7xQ6eoCy2ETq3PaTqU7JXnnnPxwLmNBtoF9VWtG3DBKAR",
  "key6": "4wwSUiqKQnWiz5yH6izTEmu1S6p95U6YehfrbupwaMbqKxA1cNjJGiNJgZtbvEvijYp8WoeFcRVjoXWmEstrb4hN",
  "key7": "5s6FNE5JayhLD362joywK8PP6WVRqjaEWrSi8xWChK6rFihUfaDziPwuFuCZPzDeenNdVFTd51bjCC3U2eDFBn8R",
  "key8": "4dytNgkRm4egvoYudipaGXw2smPqUTDwh4C92xzDDo9EHZovDn519ufCV1GkbWiPrcbxgAyTFZZMkd4TwSSHyRpD",
  "key9": "34RQy2MKc4pzzWXYJHX93LYsbHAm3RkpoG3Xefov8oSEW9yTVCLfjnLutjtYkc9KBhyzYhWoT5ki4sSu3krCoLhG",
  "key10": "5cxFehhzWxKgeRHEPwZXtPKBYnTFbQ5RcM4zbRPFsaTFcqzPUwdfEhwC5QtyJipHZMGAkAiSEmHHcrUj8v1VaL84",
  "key11": "nnqCKEAYLgPPbCNRz3HJbgDNTXnSEamgR7ykWpkNDerg7dK3CHb8vpDdnqeKtcLWGFY4y1RqRV6CCVpZBU7sRLi",
  "key12": "59gEM7EeK64twMWtbd4FQfFivAwLp8xiH3F7tjA1ErYyXjvZueXjGAREmdNWqmuabYY8czo1SzvEi6wjrpvvYnKV",
  "key13": "3sBXnD22VEyBCbgbkGxqV5BvtRdknB78TTQxocgFy8qyKrNt59XaNinTLTidCba6FVjk68CgysTYYd2tKV5oWSjZ",
  "key14": "vhF6gWkfpA5JxXqswwa4zYVuRsVkA9vgCmuaRU2xhu7EyyqvH9jDkq9EbfzVtjCWsS8Yv1gFj4oCKbjhrJPsMsg",
  "key15": "4Uhq3jHCpo3iCt1Emg3jVXnFVEBL6LCkDhw63NmjXQkJq7JPRybvLsk7kkFCykMMRdAuMoEFp8jv2iXECZS2mwuU",
  "key16": "2vj678oy3FP2i8qm8nAFaZrX4qSAKSGkCFcdZFcg9Xz5UjtYzUfqdR8eW8pKaCfphAmHJX8pD8eUzCnpGoR7htad",
  "key17": "4KVKJpFUvdqgcpF4NjYQeKJjAEkMV7hXAff6QzVHusgjS5xyJRXRtvipX3KbKJQFBdk1p16otG8VWeF2oLSrKdzD",
  "key18": "297jcUuewmW9CPLkQR6aWnr6mBwzWeA9YY22BJu99PLNHGkQ3TH87VSekJdpdga9UbiSYJ141HtAf8D3fdrCdszL",
  "key19": "2iNks2LBrqfujw2MvBtPXKoC86yzZp3m9TJ5f7cwFZE548uN68e8sueRGS6ndRdTDh86sr12VAE24LpUG1Su43Hm",
  "key20": "BNTHN2XQPtdj4o1SiiL1gKYBA2DZvyXwJdYEHjyckppkr5zNDc1Maua9TVbcjMEyJJRrxkUQaKy6mcEwmmw6Tot",
  "key21": "5oKFdDXHg7EkiDaGgfQjU6QFetjhh2Nn4JJ7iGC55d4CdRqiwhT4Xo2zAU1cp9GWBNw3AmQcRmzjZfAb2DiTtM41",
  "key22": "4tb9V2dMhLuptyxu1hVjfmJiyaQ5z8dy8deywgCjdmoJ2Mu6cdFRrZMfu5XmzKTirxzC8ZfGJV2KTCx2TL48bWPU",
  "key23": "5f1TpGf76FxdwL7ahwo5kjMJG92bfnA8KN5hXBkTSMg2Dn9z2hKX14b4LYzpTHnADvNeTBQbmqqAsaXV9S8RV5fP",
  "key24": "3hniLgnq5qbdhBLmvb7Cn4iXCmXynk2Fuu2rJo7LsfWmf5CSZjZvtrttWFxUnbA4sBQHrwBEUq4H27jRrhTJtyt8",
  "key25": "3osjmGRnF1MEhkyNsCEqABaK75Fv26k7hhqkXWfaq9cu1vGXv6G7EdeGLrZfXPBNpoijQuV4QRuuhiSxZQFNm87S",
  "key26": "2C2VUFM3q2meAE1STCsGpAQ5Z8KKCNhX2ajat7kQezyvffCo7C1YSfcFzyzb91eJcQbMeyMTaoooVrFSGkEefZV7",
  "key27": "51XCiyqYBNKNNtHbyuYvjYaqg7QRfAuAAh6J1CotL3CF2rTe2zw4XEWXxmW88iMzJrepV6tW2u463bVuTUCGC9ko",
  "key28": "5DfHFGu1CSxwxj4dYtbiEV9SoLPmv8T2UovsuFUZY8db27Ki9iRWkUCaDc1rDxebgUpyv7imp7vKrVmip516W4mV",
  "key29": "47gv8JDAUe8f6TymrQs5fCLHHqELRDq8PBsHGb84F1TaBEUMtQ11JEKvywvbNRWqe7nipsCsxZFPoNeGRTbH3s4s",
  "key30": "32pUr6Xgg9iksnqN1YwArXeVrXg24fYVKAmGNhR7nJkmcc17Mv1Jomtq3uZy3cX3xTGCVU5qNWLFdVdidwaDefAh",
  "key31": "2rtbSaF8iBcweiPr8xAkbRgkrdZVqFC5CKTGQ6ZZShkaC9gmJa4V4devH3UNQ1fGXo4SbXQiiiAYh9pP2eE5Jh5M",
  "key32": "58PqTRA2TgztGHBgRD1DXhEXxpiqUXeNZ2my4dcWgjTE4FQhDaKAcfRbkLu4tKrSFsgY4EFb5wTEnWrUc7AdwtW2",
  "key33": "3GpyLAgF7BbCvxWEZspddFFtDJsnQspuxgPrEhL1T9bRkCzaQbZWw1uRYEuGTU8kjkVQ6dGbuFUR3dtBhzjeLxZu",
  "key34": "27UVeJosVMt9SjW2F3vQMfH9gBnRXRRREHDBTRDL362cCL4pqquXLihX8mHKnUSyKrDSpCCD9LQ9utTxdj3NW5yv",
  "key35": "2GUPmjuQZGDocJ8FPXqP9MCUtoWhcTRHUozFYeys1jqqAdKn4cvxZ5XSukgmuPzjm8oaU8wtPfwb5Gp8ahPeSJ3L",
  "key36": "ZtfYYywiEHqE922XUnrs4Rs3Wdnfp47rHeZzfdrQZVNFSud95bohkxqR1bciaoM5CHEJibTReCDjmuANiqijH8s",
  "key37": "4y7A4j1e8gjyMTuEe6LUrdNXdZa1mdAQLgWt1ou664kSoxFuvmQGThxST9KnRQAYu84MfKnCdnSXiNARMQy4x4aV",
  "key38": "66r6W7oHiMMgyPWxJ7SNv18AYogiTnAXQz751PHbU4uJihnQnKCfT8HbZpjq9WHzifH4Ad2rGbxKXWc8v86pavz7",
  "key39": "3kNuMZrSXpGE5KW9tMRzgCRDRBm7BH3TACyjKBqmZYgxHb47tQptohSmM8ruRbd7Ts7xwjKSrRBCkfSnAWJ9byke",
  "key40": "3nNkeqCJ9KtFBSL6J1M4GNMSBWTHpFvDZR4MYckNB6Tow1wfY1ioi9SkcYMeL2HuopcsQGHKmiQEgkzZcm2vYT46",
  "key41": "57XuGSmgFkg8AzpiFGNc1MGqLSHms4227oPgns2ScRB6EybS24Jh5JfZWZ4nB1WrFwgdvFKoEiw4UQrZ3oo7uVTq",
  "key42": "2jnPveY2VFNJgKkuScmavBzeNrpf76LxhQtNSi8hJdbw5RUvgU7pkHpobDfScWJqqd8mHAiirbWQz1Rj3iDw6HZ8",
  "key43": "3VJoeedH29QBjCuo7JggcrZ6JsT6coZAtNgDbU4NSgKHZhaFZKeRXcCLcT9MxHe8kKLDxYtbPnjgp6koxNXPmzac",
  "key44": "4zi9M8RYMmxgkWYwNqtYyASDA83Sah3m9kHhnnEhrFyYNQmu1UYz8xgMjpsmgFXE3Lygn7as8taya8y1uDrLpbZC",
  "key45": "sBpV8HwtuA9dohmxRp4SNoAVWbc9DKZkCKqdJzUWmdBMGUS3paeRx39b3QxaauXW6aE2rRWnFRRReLWioRVqV3L"
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
