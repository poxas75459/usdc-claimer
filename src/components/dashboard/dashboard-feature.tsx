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
    "4TGjSku3f3T4bq5jm4YGkCFApYypygW4VtbTE3gbEdVfPTNq9UuJJs3ZAvrCkiYZMr657rFsPpKb9JpdCxYqzes1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMQK2pJE39xgbxNWp8J2Gkm7uJ7CsY3azo8hQTuk3RVCvUooJg1J9NimdeVSTSpm1cqRpyx8SqUmoiaqfCmq6df",
  "key1": "VrwNJWf9byhnt4Hp7K1xXjwc6b4MQM3FkCvLmmy14HTdgqW3vGYbsV3XDjNvwVMGLoT1LdXtX6Q2R4XrkYaJcEr",
  "key2": "4G24y4TtEcZ1dSpY5kvpRoQGTtgJpUJyuW62QBEAjfo3fwmMpC1rcuJpbMTDX1uhRL7Y9kWJhavJf7Qd9dNL7gsf",
  "key3": "5VoWc89VfHj6GWABufZoRTEv2fVNGwXk72f8uDaXih3BzAB69ArtiXvKBDTcUffpaQNHV8FyVemo5xC8uAVkQ4YP",
  "key4": "3nGnkYxEs4LpHzpD4xyUGwB7jP4gev9rGzhuTGsu1L5F3FZ3scSU1ozZbM3q86xgmAeYTpsnyQJa4MW78xgzZ7FE",
  "key5": "3JXw8DLDqazrEqG9QHsRmF5zYSh7SfMekxVJXvxihEiPQuG5pz2yYRpFTphQC6i26kivKG4j8ihGoimMkA1De4zL",
  "key6": "2wufHTwJNvy15ySBTp5YbgwAFZH2YTi7AVm1WgSkYHpjEz468Ji2zADZKsyHDaqAcCY8TuwUbrJGYXHqnDx7LyKu",
  "key7": "41sKSiBU653QkqfTeWmrwBbsJ9E2c12rScksZ6kk3STURskN8nHDjBXeUskdkdbQH6gsJqqDisahTgJzADTwZMWn",
  "key8": "5V9pjJEdAn6VdtVSF3iiBmpEYcRVtAATG9hibPiqZ6UB3TYRUa4xfkWWfYDukEFCtYb4D9J1gYQWw1FwaTSMQyfa",
  "key9": "QRx4wysD5snvHuYCXBTdq2htJFrWSQbx5dodCSvfCVSevzz8tsxwkcyMciR7sY6pvgtFVcNhix2ZYdVFQ9dVvTG",
  "key10": "3wXCMuWmGd61LNpWyaducCY2k61AK1RiFzj5Q4uQ7qNFNBSFGbS6aMUsFQKaSEw29AaC2g5GXhwTpFbezKGXNZwF",
  "key11": "3ChRCopMggRsEuBitXNdjCejC4cZw1HxSmrPwcmCVRTTs1LkoLfzdn2CbHXvgMtx5JbFG5HgULMMw7dtwFgmfNNP",
  "key12": "2wwrvrsLJ7jCnkvmpNA86FowbnGsRkQh8g5XzyKdy28eB6z4EruiWAL53BGEC1cjhF7mN4MD9Z3ku2FsMGyi1NNT",
  "key13": "3v4Tzot8dLsamYEtum57KC6UCsucGdg4WgUYQ5DDXvDFz9fKDBhQhjGoKUVNUqfaKxxAx6tEwLEGTU7zdZ8wCGWt",
  "key14": "PKBTxT5TPtqbCJToNQundYBw8xPKJHCLo4HxMz5uLxT3PSggBwQ7orw4HHhx9j2ENtiMZJ3wreFH3c7KMchAZSL",
  "key15": "3Jfv5uZKxVgdQBL3vcYrr2iUdTcZTBNW1sqLvRNJcGxzMNM7z6FZ83fFadXhWzJ5Vbq4s5YrCLBCD8zi4MuTRt8D",
  "key16": "Bsv5KcjT3oqXqAV51kNve2hJ3wva1k21GMkMjwS6qZrXFz7Rx5SA1Vk37CGrVWzxPQFkudtfK84mgeJpXyJJCH5",
  "key17": "3vGKJFhCraGNcFkgZEuZZLiqtnEwmSB3TTgGPGLJmfQ96jqsfeGCG89e47a8xPQED2ymBxQBqsnEcuDozr3FAXEt",
  "key18": "5a4DH6UEuX9cGMnWrSAQ5ay3AK2iFxLWCLj8CPRXYaVHF6qF3J5U5NpGMZp3reSC2ftPmBy7esgNDunHyJ12z3ho",
  "key19": "3y4FJLNq3EVBvPWqzHDdD5ccvYBqQR59LcRvxaGecUoQnbMpN7fGYT9Qfbv8ZvqMHWDWWGUZu1SjFFpschfqBnjJ",
  "key20": "67p62epCLwe6u2U3BpvinkTHXwzK7VkXryTa17CoYRdxEY5h69YnLA5hgBaM5SBMfD2D3FYuimH8wyqFs2q3ohjc",
  "key21": "49n6cxB66TJACzx1zeM3mpToF25VNKcyqB6c3cnzPxWwEvNg3sSMs9nBAvaFVgbRZug9TzBAUTZEZzdqxas9tJ9D",
  "key22": "64oybvnyTUWMRrpP8mHR6GTSYwjR57boQEk5uRwzFBCPNNWcAT6K3ztKzLv1eAe8XnR4xBvz53vDAJJjr6CLT6iX",
  "key23": "2kCqUxyrwpoKCbwUVv1dLpQg8uzHLAbq8onGUVLL86Ff4Ef2nwrTHQDLd4PGWs7vcuQfW9XuFGF5DFkCfMyEE2LF",
  "key24": "39Bog9VnLd2zEHmGcJS7fpG6i9o9oUPWLWvdXwuZrc3tQthzAxD9s4EX5yyt2o6stgnNWfiDNgYURELEua5zyrop",
  "key25": "3xg7TScQ9eajQLcnN7MSnzDQ1kJrZNw71uq3dLGD1GCyQ8HTjBfy67ZA744ZaXZ5ZEioh2ZEWsdCH4gEiYrdrwmz",
  "key26": "331JW8kkQHtYe9d16Gak42FUZyNAiYuafKNfP6jHf6d9mhHW4GU6ANL16AzkkNiXhgjrfg3vWHYk4zvBsB54Xe8a",
  "key27": "2Xagw6S4GUeojgEpb53MhNY7JBxBbamXyb1kvLVQnPUjwvncN5xffUaudAs3qNkWF1oRFeSUBhh9PK2W6iiZ3HTf",
  "key28": "9Ai8xbjyVDHHYrptZqWwyYYpT6j4tKZrMeGV4nN1bFx9VDAiugcso6yZ2PqKFWvJWdezzX28N4brUzwnKai2iZj"
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
