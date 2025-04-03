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
    "3qtrMDPYU8fPTAQ1USrPK5BfGfj3YBA1dbjvqk76stcyserefr5gBtV2X4awLhr4zKap6zLFYbQWBErvLzHvriy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xtffCXtLzWi31CADgEfA4qEhQcZccpemFVrTB4bHmVkSvQSPqTa5ekUNTNgL1cpbnVRZzHc9qTcE8tNATFiBkeY",
  "key1": "5sQFKxnYws1157GQzZuKi9R424GaCpECKA5NGm9yxTP3c7gyvL66XTX35tX6unysm4xRdZinraY2pMCuVTgZjuWY",
  "key2": "5i6Bc4qmFehqJh6ykdgaSXKV7vwzZo8gTKeYAbbiKDoazHCa8AFVoRBLrJcUW9uoPUdDgab2hBM4Dq2XkmSZscHp",
  "key3": "5SCL8tRji6Zt4oQ2HfVyaWnToAnrztPcdSF4aCYjenhpxC1UXMo9U8EuBn8fnb5XNyXDLSTGB3exrQhcCNMRLFDX",
  "key4": "w5rAZyvuNXLhybN7rAAey99AfKiudAxt28yrfpit6DCodC3gqPXRNtg5SC9gTQos9nu3k7cUvZyH2vAHSRevBC3",
  "key5": "3hEapyXu99Lz21EtzqcbuEgFyGs1R6Sxw1t82gMc9i896RCc9XCmJtyXjiqjXDq9EPvXU9t8m44wRr6n5NYb4ezE",
  "key6": "ENmiCd2uzeVP5exgh2Mm2A4ht1xkojNYv237ZJWNj4xzKA63w7nvQN92cM7FMasvndNyJf3XZyRaVfyYnwZUo2F",
  "key7": "5PUNEEAq62wqcrixN2Hg6JDmboQUzTBMGK1ZhdTDF9D9fQ2X1xanM6dWVarpEPPEhq4j4ZrNN7hASz1qV4641uuK",
  "key8": "2JGMVZSi1HAMCXYMyWppesNmx4YjtWhi3BxgHLbYw3CqcAwfLBeeT2bLfLCors6q59tSsRc9XozRAfjW43HMKWdP",
  "key9": "mLexBWysmcUsoGTKPXz8hLXD3iqNAuGGn44Sh3quawJ5LsY9sxKRyRTJWCQ3kzVfhtqbrFmpc6BiYy6gnYujdp2",
  "key10": "3cMqMUgtcXNGFD4psQT5W7ciJPgD8FfydbQQE8GGCFwr6p7UdULUr8z27ivGxoE5P4mXQVtX7899Yf1eXoDiX1nF",
  "key11": "TBZRf4p3SNHxuXPR8AK4N8hkXGMkGoeZfzCX6FRcxFkaHWAjyKYw3X2VcMcsr9UHEneHFqYViLJzJu64oydtL2o",
  "key12": "4NtCkvMmyoCvNUHZVMnr248HMGqMo5ydZsjzAPJNDDcdr94NBUPLTqkTsYVvd3Xdiq4hR6gqtGuMcChG3UPpPr6d",
  "key13": "DxRVeUrWA8nBNwvWYbQ2LkruwunW5Yw5aS3wyw8FQxpQVL6XDCMyhzm7erCgsvaWYYkWArmVnDYaZmaCfbM6RvL",
  "key14": "3f92XLq1Htyw25wo5ykrMkuzoYDYRkMJ2hkMg58sMQUTwz9oSRrPmKgBmwWkhSnaKGcwZNSCSuArh5rYwCSbH5tJ",
  "key15": "3sgj4ypSsjWMNbCQkPeyHK6HikZQcZCZXYXFRrDSvx3pkkafiJiEdHoc6BFFDyD8gYLqsQnCYqNpb9xJgp5s6QZ4",
  "key16": "2bqG9uxyRkrtsVW8qJgJBqSzZQ1MQkXpaD4m1z66wKr9djXa9n2rw5yci55MUquy2BwsisFQWa8VY2nS4DmhkhY6",
  "key17": "2NW8i8HZKLZReJdCsYzUHbDdpmY6tSwGTnMaYfRLCJGQJAa8jedznVi3vVV4SN9YHf9R7iYYZLNBJCv1SSu3a6vX",
  "key18": "3yGmkAoya5gTDLbG1mWLfLpT74YexAWmd3LgYzGeeFzM2TbP3DzE6BtHdDS3k7HKYw59KYjm3jxGVDrcoQJnjn39",
  "key19": "42PbG1ruzq1jFNuchA2dvuvoqN6NpeKvhuAToFd646mih6L5JRWM3Lya2uRSDJTuyizXsFU1vhUP7FoPksQYBmWx",
  "key20": "i8g95MicWRUTFE7ms22rYxyMCQ1GKe7oZvbaj2WZ3ZGATccVeuZAtYT3EMtsP7GsD2XLaxTyEYGMvJtgnbp4utp",
  "key21": "2ePJZQ6MhNMKvnvYasDoNxQTWyRfXKtk3PbitJftr6DNxMTWtyTULWxswF2yj8Mbx5q9uewiSWp9hhbuHis1mDt4",
  "key22": "LdLt9CTMPH5Uo7dpPfVbJGEnSYGfTgR4SrN9jM5jp3MRym79jB48xhZQw4eZ3aJjji1qGUQz9R4HsTVNv33w68u",
  "key23": "3NarpQHoyuG56fzBh6SQDZCwbDFCK8YPBdyutJa9E4j7HzwAvaGKYcUFTPXSi5Nx2wNnBM34CYEUYhsqQWA4mcEj",
  "key24": "4FXiGU5vEXFMHyQbKA8K3GjGkQJTcTsUA27iUfw5Jc9y4ABD7DtLcVkX9CJ6ZUfQwbkUus839xSATSKLVn2qfpcj",
  "key25": "2sbAi82LH8WmueEYsupXBqDWJa5ogU2W7RwfxKRADt4uX8p1ALe8S8JyHA19B1C8g3Y7uf5e7scYr3fJGPdiZRdw",
  "key26": "5sSHLEEoBLCt27fBQNnkk1UXZ26nZcKZRAp5HuqPfEVnhnBxkrd7RWP2anos8XAUvd4JnztQpDVmE7E12yS7BV4A",
  "key27": "5RYMerZDXpjJjJ46U7Z5DS9xqQtfJTRo9bdzVLxnCYZ9P31aVmEcNZg6r5oF7rod1hZ99fDstgsZFtPHXr3GP2rr",
  "key28": "3rPR9wqwqsRhSLtzCaY5w3TN4arYKCo6wfPdo8C1ddT1EFoCVtosjbENXezeGukK58wjqfncW4tGv3HMW8QhwFx3",
  "key29": "3Ramd2PFUThgtsH1YahKXbtLi2ofRVchenyv4v96YuWeTC9WwZNNd3kpW4gRVXiw9Fnodr41PgEt6EXxA9yc6L23",
  "key30": "2LTtiJbAvJSXEwEvvWPhd2xTmS86dKUZN2ZAkAaqxF9QsWTsR7fhS5VkUMoSBmsqVrkkJZxhTobgxTjtHGHaTrga",
  "key31": "3qNMgtiLULnSC7VjnLuJETPuFp6p46XVfWWDs8rdVMQ25a6qDjLKqSk9eJDVXFmE77WHeQpYPfB6AKg33Pa6Xjjq",
  "key32": "B7RizyqGm8LShCpwRxoE1oN2yTMKdcb47b7PbEbJoC6PfxnhaEba6MEeizFc8zkNK1V8mB73KbuSkQB3ydmVyCV",
  "key33": "56BVbeowxDiWwSo3UzqqLxq35HK1KMJ36QrM4n81VXsvFUdnrgJA6FRwRVdnS8LYUMscSmYbTp2WdjNbgHTpWfDA",
  "key34": "3GoFMWJhDehigftRkienmTNY3hg32uqm8cmdMrtKtkCh1CyZ57EF2vxvwW3RMiWw9USxDjChZq2YoRWNM5W174YQ",
  "key35": "5fcU1zx8ZWEYBGpgvjMBG3NGtKwpVGkg5W6SMzoq2ybsLRXqzGWgwm6UvwmiA8fza4q9XK2J8V38EqHwDtYyAbNt",
  "key36": "3oMMdTWSh93iqRLHWTStjK9HjxuaA2tmz2tahhBXCxVfsCiWjvDmD9pAQWfiDpH3fJx6FWAbG91Vsb1KCW1B5SJ7",
  "key37": "2iUhD22yPHwJ4z22fmdiuPpz66TgZJkeDyuT4DkjPDpkpwjz4Xntc6QnDByu4KQ3rSnzwhBEbvHNkDiAXtsqNV37",
  "key38": "LJShzpPGymePXZ12FhhvEu1zJ99xnpHWSPyXQhJSaRmiDRDkpyZ6Xw7tVN8PwcAY3gRzCjNNVaemB1pvLkc8LfC",
  "key39": "2Az48h2rG5PG7gYvfYmJJTSKbvdcNtvvqaya8fYQUchAR3jDoVG3xEkAFPw62smd7dXaJsZLd4wSt96nDs2dDru2",
  "key40": "5JnuiYiMcQ9Gp4W2w4aFpA1Ucdq2zNLZ5BhNvFCfMPkmLJ6ZABkmCJ7cA4ZWikEuejgTbHRm44ob5FEzBSSuqyY8",
  "key41": "3RoEGomVKGvku8Cr19beTXHqTxcjA5eTsaGsZL3YJoQiRRgmrNYDo2UCbMEacYfYyvZN8thZV4BXBhrV7Yvd6CsF",
  "key42": "2xrDKFPauFux6tumrP95EHgMdwmothjyivvd39HSQGRAWWtk27SeTrTnqafPHmmCGKHohoWqBPEFf77zmQsvBkvR",
  "key43": "4uoSPw3CnPMvvCzhxfA2Ew5mEk4BS8foQeWfNAfrat9zjy2mCgo8RZhCKQxhtRoKVP2sYSz1vLtWE9dUVMhW6BNq",
  "key44": "4bzoQ4Tc5UCuAGAcUv4gVUY3XYHYnKwJZwHTgkvMHx7XHN9qnt7Hk1MxU6mqnJhWDrZRdu2MMTbgz3yZwauUbGGM"
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
