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
    "65jg7WGjGzqHL18KHcTvqtYF9P2HMvw9ZVFMhyL8FhVhxy1Ff16Xd3BJavo6gXQCrdpANR5H3PEQEoZkc1pjPTgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVK3KKHK1mGrzN9Ajo9miN9W24GJRJPcZGbCqkNN87azmFAvXbFrniyGm61623tG7qZPt2UTfK67J41mDWZbshp",
  "key1": "2UBVVo3Z1MycvG8Skd2jp1B7MybiDfaMw5YNU9KtZYGkV5tiKQv4TraPGMfK4dgsaPMCGNU9ZZvzdqV1MFBgaKJb",
  "key2": "VXSgsKuVQrMZwgGMAS4uQ2ik5JQ5Aa7S5NbCmgevmzyLpbNBhGd6J7rADQ8WfQfu3iDRcCwtozRGNhDCEZhM8Ag",
  "key3": "4uV8Zi9NmQEAqkeHBdVbsM6XohEgFtSr6mYTh5DKz4v2gxtonhdZAe9Fb7VqVzHB9ZJTfv27nZG7oMNRmtyJm7kv",
  "key4": "5F6RQmFss44nVQ8bKHfEZk8i2FYaqzYkU4SX8XTFPGEekNvgunKWXJy9kHa4uKLzcUcHn6GSLyZXFnkJaSU8Cyaz",
  "key5": "wv5i7ycGPwXs1AxjcmsQRPXUEcz6R2JHhn6CaKhBT8gykTm25Ui6zfDTDUWoUwX76wky8ykx7bKN2YXzcCpF7QT",
  "key6": "4yrrPdZ3QTpbsdAHrTftT66iDLNcH7ZPusZCY9X4g7jjuqochxhqbw3PXn3ti6ysRErNHfDcuyCbmWExTuDSFDTo",
  "key7": "uk6r8LfSWCN3tAGtJPojMrVa6oixn9sXsR3RK9S886V5GMCGfEJNfa9PVugDG9ELGoVpwwcZvVECxYvQUNrXnWs",
  "key8": "59y1FNRKy3ygCxqZZKLXEZt8drUV5Qb9d21YS7REZF5HR4WTsnj7LAo9uS8t8hydCsDkDjxLtUy6ZBSisdchzP9r",
  "key9": "5fPLTao4Cwi2QJmM6duxwkteJzz16CkbJ19GymKVYkpJVKx5LEUed3Sf6suXLCmwCzTwVFCycrRDmCTSgErQx11Y",
  "key10": "3o9HAquxvGZzBvrPtCEBAvkkQ9eWEBFe7WXrNGa74iEJTpSc36YC11GNWmbrGQUZYTysoiDGamfeWupkK2DJTYPH",
  "key11": "4AQ3d3TSCoany1AY3BVFUr4EoiJFv2G4qgo7CEXbq5FPK3hJQcZofcdxRMxaMkpij8WCgNXvvv8fqbtYVVSu2aHd",
  "key12": "2LNGmSy5ymRiYsPGU3cv3TKiH7XwyPdgYbXdcqzTAxrpMAmVTGdECtUCz7xEYiWX26aUp9cykBqgvJrzQtcTyFe5",
  "key13": "65c3mjFrCApTQyLifTdapBkBo3jjy7WNTZD5KYDfHRXBnkA3Vw6GR1oEJokTbocQnbseoMLLnk1jmDP4qr52DSLz",
  "key14": "41mV7hz7Jjf21cdM8k5coZTB4oKTGmMk6Rgcu3jyLvmNccdxHHmfed1HxpSowmdc2d2ZxySHspVpeNVVhbWCweZi",
  "key15": "2vi47AfapqCKJbWt1kroopXHHFAMQpqQgkpGhcr5BWT4mto1AAYjGPBoLXiszcYSqV7hYe9ciwE4vVJon1oqi4x1",
  "key16": "4mvpWgc6eqp1Kd3Cbe1U94X2gr8GAPXVXs1fGDXhejz6DSURGNzfChPBn4MH51VAFgkAUTqKk5NpSnxR27dXENia",
  "key17": "4zHbBbo2bHZRuSwRPy78EAqw5F1nYQbsKxwgBePJrWzcG2Kx8f8LZ62B1Yj7pyTYFWayxDC7Xf6hHL36LZiLe5qX",
  "key18": "T1U5kBKFjnzTK3VU43ioES9pjLjDw3CR9hoEzyGFwQy1D44ai2665AB27EKA5XBTT89bPqJWVKSDvgUzrkQ1i5x",
  "key19": "5AakoqM9hVcqjBGfxoqWgAzSXPunkdspCTQTgag6z7Y2kfkQp8MhXpwFcbxKiGDHgSLp9qUxARcyq2HrSSDNtrDQ",
  "key20": "3sgWm2dpaKQK1cZch6AaZBTdEqhnd3CWLrZaQcfCjHGg1mFo1m6wsjFWr4tnuK5GNvqPhxw1LFpU7ibdFtJAxKGd",
  "key21": "cMZFomSSdFVNFtC8sxErzM3wzZsxoeEvKesuyLfc47X1mEXkwqnX9HKBFrukz9vsEJ6iPRSPYA8V4csMwwJ7B2R",
  "key22": "5uWTCgcB1dqDYn9SPNujdqbQeyMJmhiuqCCHrdxBizdF6dvtWYHCz5s4jzKuJQGyL8U3gBC1cd2RvP2KuDRMUiG7",
  "key23": "3MXFo8H4c5rXp5AvgCmTrpoD2mspF5UKQZa1DuvzZZMkgNuose8CnzUTNmx6h7SLcXLeZKKmF1DGYk9KDqQHeJbf",
  "key24": "66httCsNJdG6MxRwSXggwegohBDPxHekFTdh3QbNyrkF2SevPMujA24SXYQN6TaXckjXbyYhtCDgRri9xz1pAXtz",
  "key25": "nGU91ur8LjtuZLYzrgbbwHi4gtVNkrVKCyupMwybLgayWGrps1M3Vxa7XB5pyjMMyEjvDsP78GoEuz69TtG5Vzx",
  "key26": "5mgYS4Jch6JFfedcnTWPRWipsVnRurhaFTJQdPrgzunU8Z3gD3hdytDk8CZqYxp3ckJJ8x1vAkChW8DihHasKTsy",
  "key27": "2Dwe8ehjxxEwRnh2TrDsBvh1XACVw7x2SwxwkNuuHmnBf3XuH2ow5nUS5UyHyXfJVYFEBjnrjpMwSXoRW6aVjGA4",
  "key28": "2hk8Et5WCKYUsVdg5YbxuiKDUK4aGE7NixEidKmbcZEHwKB5mRKHvytsjJqgGyWrWi5d3EYss5szxZJRxtCqxdJh",
  "key29": "3kYi6Re6GSg1rCiXQex71vkqPUnkmbZ53VpiHztXDMfgpwT3s8qAiTaTvYzZzS53U8uHMuoXfHXG4LiQv8PbM5qm",
  "key30": "3fEVLfZzj87prryW58ZTMcjhnLZRVybdSzBPt2ZwPSAe4Ufnw1zmY4Z1Cv98LWmEuy4yn9hrQm1cZvsnG9vnkHLX",
  "key31": "2RpuziWQCQJxcsbENnxDLk66dme4QvrjkGsiVMzrQXsd2wDqeYUnknNMmtN7iXzCpDQFXZ8FzDvsFdN4Fw4fGm6T",
  "key32": "XJdGNXU1fzQJDiUwb5YVe6vXWynD7DpoAeFWFvbyDsMnCQgeEJ2uPyNFuHHTaRrSPTgdSybyZZWcsgGoQAwvCss",
  "key33": "2T3v36HCd9RDLJga8BXXB1WZMa1ayFSgfJ4WjyLthi8fSXgrgZKi3YaPsvezKYvUfjUoA6dV9F3cMTPSHZvKkTRK",
  "key34": "4EuMd4woNEwW8JXueXXNXbfJkuaemXJjqQSkwB5mzkc3Hx8mSNg6hZju5XtJBeLoyb7TKwoUEJjSniPWBAfgPtrv",
  "key35": "4eebA7eMxNjyFkEK3RGYk6chsRpr7dJMCfAiuSQmo8QmGUc3G2MH9zP8iL4ofCZQSjLguxfpCbf1rkp6g5eskoAt",
  "key36": "3FKXHMSa9wTBv8Cw4w4xQ4DebXbWBNMStzX67JHD2w4UcwVjofnb2bBrzry8sbH5r8cerH9nnR2L7DVx2ydbR78B",
  "key37": "2wQg3c56cKjibsh6Uj8ofqSrcCtJnUgY3Jpz8aHaPb26YgEt69RGycPGFXMjRqnHCNT8egxVgi4pKAwD6rxpMWL7"
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
