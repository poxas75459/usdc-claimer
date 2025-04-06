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
    "3qVmeCHHoY4aWUaxRgjoovZ2RJm2RKmjNGATAAE69TQtrbW7MhXFBtAWpGvTbpNiodSkg7VrEEgXHEgVTjJB5viy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3woMbWRe3VmHaYwe6D6MdYtg2kFubsXLq3y5wmJ5aNoPWLsEdsJ9RYYV5q25Wao2L8vLLuP5ieT6Sr8bA5iZMU7",
  "key1": "4z2Yx8C2esP5BF3rMdeUKZiX5g51t11j86aEmxvDMtnu1tWhJExNm5pDL92waLJnA7ipnL1H9rhcK4KAkpm13jV5",
  "key2": "Bg8tp47ZbFCE7XmVr8Rd39dJ1VbionzgEmewWwFMWhqE5okgQu7REA1gF3YNs3s8SM1wk5CNgeurF2CyusXrwjw",
  "key3": "vPpyFNpmTwNPab16dGGy5pNzzh4pc3r4HYbFKcQeqktVhTL1WbdksyWTXQMHQyqS8ttQ6Xk8Y2k2ncrxZh5WEfn",
  "key4": "4ckG92x3ST5FxiQdJ71Kj9W32TCSxHTmtfmMCjPMtEMtEMFKv6uEneN7o2be8AJ88EVyuzwKfDLKaw5EngJoD3qc",
  "key5": "5Uvs52FREaaVXBtzS567A1FkSRNcPSLVCzvouKn9wfCvcD3HA8irufahnAHwXB6BZvT1koXWLZR5JbnxXgwbVhSd",
  "key6": "4hDHLrkZpMJ22SK1PKurDV6kq1sWBB3WMGAsTiGg9TsbfaoY3aJQ5jAZYsteGuKzDkF6S4SXTPxhZ8g38nB5gZST",
  "key7": "4ns7dqDDaW89JP44kBrhPs9zJnrxtdBJ6xuS9Ek5G5ZEjyjqo6Pe31Q8hz9mj28w5Ac3xiLN7aK9RUeswejxAjje",
  "key8": "29yz3hzoC4vMoiCKTHAHTBbvcY6n37cqFjRF65hR4AKLWiFHdtXonFT7xebU2BA2CQPDpRd4587455svkwhCYRHM",
  "key9": "2HJrSf6P1F2QeQudYWWk4HW5JaGJcbd2nkdsaqu8QgjNpWDmnWSLa8msrs3UL4XcUGmBsjwEc7HoUZyDTSyaYeZo",
  "key10": "Dqwiqzq2gpUaDSUm7c9aXvcwEyDxbeNHPoGVqLVr5AJ5NQ2dp6DQmKkSrDFGVrhtw1SQqdrA5d1zphoeSSBwLuf",
  "key11": "2zbK1xfcfSXvtY5T4uHRgy3rQ1nTKx7Sx5doiu2fkJ8mF3xD5C7ms99H7MuKhNVsshUbJp5HpvvZJVyiK6MmSW7d",
  "key12": "TAc3JxVcbeuzM2GB2B6uh4oSv5rJhRtvLdHRDCsV5LdwQJxD4vnfx2rVGP31mvGcCN78Gv8EHcLy43vRSyiXRM4",
  "key13": "4jWAL21D3tXPFsmoKgYNyfoP3XNMvVs9Euq9sGBMNa6hKbJYs5by67h7dSPZbYMPY3xkKJajKmJGMdKwNjgXeUew",
  "key14": "vmPmif9aipu6Lau8wAUpfa5pyzbNyE1qJmhPgCFrXNdro5NSguP4DtsN6UDArc8N1wX4rWR59ANX2JjriTPKHfE",
  "key15": "rD38jzvQJrPK5QSYXPK6nuv5EmfxPbeapTNDw7iiJmgPChvRg93er5BRrVZUXfkzKzrexCtvBBTf4uEHc5xz7Nk",
  "key16": "2swrTeJoKcpNmvoxvUH9NAw5CfNmnMYSXz4Agu5vk2qp7Eh5ar8ETvCW9XtaXNnYupos3dYcKVQAqYf4KSbtfjgk",
  "key17": "55QepyXqpWSm4TKhqDhoJXhhUgQNYmQAJV8WLZBTvHLFWgWtjhpNmZt53Wn7dsRJV8ygFAdP4auMJqPDZLfi5Vkb",
  "key18": "4keo3LvFakMkVELpwgjHPsGnXjQ5w9zzfXVCdjXm3uTV6WWvukXDJzDf5KWfo3vXNnFuYPXBLnDGQXXK7Y6Mjz5",
  "key19": "4veLfwgm3ruoy1NizJrDEwTtpX7u8rGbHVDsxGqNUVeJbppurwki926AeYrwg4hvQyJtKGom7uLFdftmC8x1iccy",
  "key20": "2KHexzEU84SveQGBWwYS68vtz7s73ZzE67FQAy7PRs6fNxGL1G5JR5hjLJRW7yhXgjdJ7j8xHYxY1fyQCbGWE63b",
  "key21": "c9pqcjX1ngUZuzutZe4wCB9mWPrC3kRsc1pA9JhysgNV5MkxVyhAPMSsR2q8CyeZNXDsrzNUShj6iSvgETN3vDP",
  "key22": "2CpzRQaMY4H7BteuGBz8LcgNKJzw7fsvyArzRGFw6oEf2ANKWqf8FuTVXGLdQRfGAHFmeFdJQYSAzzWK5TUkQHdb",
  "key23": "3Z5ZuCZCtmFgtunX4ttstfEtzGBK4fidEWFVhZ1kUtLpLSw8UJ3VNyPXAnWgywwze88eK1XrRcXrMNCXmvj84V6p",
  "key24": "2NHXSB4z6xNQVtNGtdZnptpRM1HMHhSdifibwpp1FbLWU4xkKjc5GTef5WHKLZDVFBkuJJx4hAUwM1JAGTUr7uJ",
  "key25": "49Uyh5h18hw33F9xVd9mirax34XV3kqpXwokCKUpXkw1nGgG8xy33ku3Q3zY9wahUqEeArRg8M8hPS7KPjj6CeYD",
  "key26": "5JdAgtG4wWKQxuXqh6fjejryctFgpXaXhPS75D5iuXUmKJJRuK15r4QiWkWaWf4GU7Eu5LQcTvCxJZwy723R2asQ",
  "key27": "5GLygyt7R2mJGNWg7ZqjBka9NFjqwN2gUDeaGGkiWy8QpZvVSc9qQKze6hsuauHa3jkfV8HYGBhy4BdM4qFTUAvn",
  "key28": "56C6N82c5W5ExqMJbhphx5E2B6H2Lw9yHgqBgkowHKyA8VWAENoXLUGjBH7PoLese5VS9QKa7sWEt6noK7Qphocw",
  "key29": "2RTZGyDZhNcNjpcFcfoaAGmWTNYkg7oDzsXWno6FezjxdMgapoXSEQkP7ZnP8MnB1qJGu3UpsVBVNPVz2qDWusmx",
  "key30": "5EMv8e2JP51hNpjjEhaRxAoSXBwhkgzsAX3uBsxJ2K14yKPVn25E8zD85dxJ4mmLaq22npgerUBg8UeqiVe6Pwf4",
  "key31": "HHtSLVeukFNBnVqUcw5Pv7g9nY9YxX42svSTovdmYdFdQzXmu88ccaidphdYMuYNZ2ST9hiHJKjyKAMho4KUiDD",
  "key32": "5thpiBbGc6CbPmY2mSAcxBHdneEdjknHhLaFECNL6ugpCgqwLSmy7UjaNWkEqy4BnzojESorh94oz2GZFVQ8jSNo",
  "key33": "3mjLfuWGNbgrVv49uiGDtQgHnkgiFWiqD1kbQqCcvJKKC8167dM2uQdtjM95MWw5JgJFWyjQMqs3S93zNp2UKFrt",
  "key34": "4FY6WaucjhmixBEMk2pUqrbphNVeoxa8NiTEQgborjH4eDEXGQSeFNcn2ppYV82Gx69fpBBsJZLgo2WtMBEBeFrm",
  "key35": "4tadpCNCbJMcRvdBWj6iBNpTMxm2su9U8LZejCnvL2Nc1Y4fCGxzbhNyhJA7jYceAMy8ed8VwL3pEzGq1nh8j3pc",
  "key36": "4ToWqPo9i17QqueL2nx8aBjnz98CCb48dWYQx4xXmZUcr3zjet4x5qjyCGKgXzAVfkHPiSAT3NA4Cm3bVV1CGNTQ",
  "key37": "mkUpvSQ3SiCNi9123Jo2X3eJW1ugNUgYcmsgJMtLK9XxqsBak464jBoXSBogKUYB4qrgMj1arPTuWCv3pRKNXaC",
  "key38": "27mja4teSWJVL1PCXCqHUHJhi22LfVpfXHWdEqcVy63LojcZ685kCggsUGCmifKzCSWNhj58PfNZeygWayF4mYCy",
  "key39": "Cbw37tTj3MUaAhZGdFjAASgNhkNd4k6FPS2CPyD3pMdTz35fgAscXR4gk37U5mmPHsKyrsJiegA5VHL8Va3PFam",
  "key40": "rkD8JULGgrqsyjVcgC5DC8mD7rWySj9Hj4PWmec391WEU9qBNwFwxvPEqgi8bDxGkTEq4qnLVyrbz6zRwtgkPfk"
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
