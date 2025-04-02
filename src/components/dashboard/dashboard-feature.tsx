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
    "5vVDEMs7GZTqwwBhEE2az6HhGLM9iqMooL6uHCAoHCeJR7MV1hpJrujzJwELBp43sGnRTrq8tsHMRfjWbwHRmrh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Py27at5451prY8QR9qoCcR731xCpttZM9SrTr8aPgh6XaHH4Z5aG79tor6VU55u3mTxaTMiyVTd5MqVCZoijppv",
  "key1": "YGmj3rBVoUq43nPM9gVCFC4VBtfwXXhfnwncgrBb5LAEHENw8iqYkAPAumbgnLU75pVwDv69YSKg8uFASSk8Yop",
  "key2": "5PpeJ7wHf9nwhHnczfABGaF5Qco1EoTUcte8hzpVmR5yff9CEgSaBcVNjREGaBzCjLfDiMeJq3BwaNxpibMAKMyX",
  "key3": "25h9C5vDQpFb5VAAgDB33eRpgNZVcaTHWmeT6VfQyxSCDsBcn12sCCCEhHVjZ13RRMqx5ki1tfZSNtcLcoZTf7ev",
  "key4": "4xdhZajVVtuFUEsX9U2Kz9Lg3me8pjjsSP6g9f48nxmqMyTRjqD9QaKnhxENTGwBqcJMfHnVUsatRgtvWr3afwCV",
  "key5": "4GPZyy5TVqwv7rxVQo6pAcmWpqeeSqWjLgqRqfq1LqGdgAwmBpqYNFDptxYLQkWHB9AavNZsUUD89jXLLA4NhEPv",
  "key6": "NTRCWTUbwsvQgDQWqx8xXtQGroCUfnjw6FsxGxrL149KSYw8462am9HVLPoC31C2F6q7MpHMTPv88FzXMLyxfDb",
  "key7": "3Ym2sAtGGPaUDUcRc2tki32HSwJZ4zo8yj4csQwaTVwYj5w79a6bBLY73knWVoUJiyjYfryCM8LCPDf6j9ZRpxL5",
  "key8": "mGLwUz1K3gXs9kGQ31JL9Xp4mRkb47USA7Z3N4EcPWoiGKgfcQpudj3QfyTMAQdhWj2beMgv5LvUVYjuFD9i1UZ",
  "key9": "2w59pWFBmtH2WcJRcgr1AEKkuh1J3TmqL3BQ8QwUc8eAAyrhMXPdszKRg88BoLipfNv3puRa4gHyVBuqWZxaZxNW",
  "key10": "5E3uCSJ9ArevFVi8JNKZkE5uugGg2ecFmxNuEGaiCsJYf2vssq2Krx7m6HHStRWfAJdsb1wdXU8FAeWfHYt8NTuZ",
  "key11": "4h59MTyMPwvkCArAopwPEJf65XQXhVAYoTem4W9cetgeYHy4mE5Lq68Z3P4Wyby2AroPDDAD2c4LN2WJgDuiZWB1",
  "key12": "2kyAGDmcUP5KR2egngfA7Sj5WB3Cd4Q6dxpa2DKoZDfB2CfPgfZN4VkWgcxAzjYz7ckwnkQ2uArjZY4ikr78YGka",
  "key13": "SewcqcCGccgujtYq12MtnEfUPDAjjf8WamzyGBdtYth8ygtW35LU1Gs7cCyioVaJGNVNZCwDnQ89KCwiEjjutve",
  "key14": "5DY9m6N4NDpAWvRMzBZWqS69GcRqkXm6jKhwUvBewTfHWw5fajYza25U9yJMhnHQzxu65mkg1PjkKs8PmyCZHUTY",
  "key15": "4bUF9qU8RRDKkE17v8TrTLyMCbTnc21EUgZNa1hFnBa1zMKXfEV76s1Hobwt6GQzPbo347hEKqqH8vT2R46sPW4T",
  "key16": "AhNpNN9rsJPFxh3Zz1rhpRriRr8FJ4wM9HbxLG2QV6Zq5RMQPtjwjrutq56vq7ssZHNEr3YwSW51rNV8Rwnr2dz",
  "key17": "29VbUEfWFwrMCuvyMoMUBmt1Qua17hoZJtFw3wU2mam5qzPnbMo5YoqfYfJtZzRotpYLc3vxUB3wS7csfVWT52zP",
  "key18": "2J7BSoRN6QHWkKE6tNGf7Gaokptq3TiEYRJ9zGzcWnNm777te3STL36DNf4N9EuhPjNSdhVzLBkTqLnhBHSm3yGs",
  "key19": "3Shbhi7YLehnUYLDtMHbKMtPiKDmKncJjmksUKNc4MRp3itGy2zZgtKDMaJdrPdWaE5F9cYkqJxMwP11BJ1Z1ya5",
  "key20": "5PAKjuH9dnrjWmDLuajxrQAScEs3FdTmAkpQM7zamAs7v2wqwXw5VvLDMZr7roPuXcrnWoHcWe9f9tnjw1FrZv9H",
  "key21": "4wJEgEqfi9dnnC7bYCFmHpS8ihTAdbhMdoC1pgNkeKgZsxpy9dMY7RGRW7XJuE4X8uuwP5Me8aAR8vq1YpNqYV3c",
  "key22": "3FbsdBh2byNC6arpuqvZHXzw8wcDikXYH5WZjyCH4rZDcGjMhpmXU4eWMTCZJB9JpJssqc7319Ui5n5J6fjnCdme",
  "key23": "3jSdaAS6ktxrN9zx2sfP93tC9HHKezwvSTbVse7a86smP6et3QsYMK6FQ9uzYNVGXzVCy7BVkFy5WU14RNZeFbUB",
  "key24": "4PfzYuwW9xeoswpzr2tmdMw4SApSnnXsm4bTgAuNKeHrEk5a433ftsjXah2ZkzdCs5Vc3x6riMirdqsqWTANN7cY",
  "key25": "CC9privjchpaHPKkpMWY4A3pmHN66M24GSLNMUGhiLpUMJQtubzfkF3FftfSRi5YW5JXECAtHDVyaghuAFapTiQ",
  "key26": "58NFaVnvtByWgvc3ngkEjKRC21zfZwuifFweccWxnnSfmb6KJyr2TifgkUBxBr8qLghsRcjrK5w7xRQrCFzJDELf",
  "key27": "3JZeLfxnBshnSYyqnkH28nLeXrwLAxC1pM4tvV4sgR69ffBcnyXVtZBdutimt2b8C59iQVjqEdojqNvjbph5j1uz",
  "key28": "5rrKF2CqACRP252PEaLLLqrt5QQRb1hrZkJfbBmqwwNMxn5K4zTQ1hL5ZKQjPyUgdeunYZbUf8zvjSKXg9pf67Wc",
  "key29": "3hqVZwxvM5wACeAo7JDqkgz444mweZ8BNM4nDXPvo4Px6zG6DbeCcU6dcgnx4SapYppqaw4SyFLwnW4QZNg2CQ2Q",
  "key30": "2Lm4iBY3mAgkPMJTxEBQZ9tBPSKCys426nD4Jwqy3HYGYnVUMmLckYsBPxRBHVnC7yuwt2pxxyhAcGr54aVp1FHR",
  "key31": "43AWFtbAydTD23hg8AtNjc8drENpow1NDuJokXXJoyX1qJ5xUXqjE7uLgzagvfP3D9DrcSYha3vcQ4KJzSNNvi8J",
  "key32": "3t5ptXMEz9WPcpaVjTjc9omoztKLJvodobkFotdJUYJ5ASD9BkU1scS9cdjvxkcwHYkL6yvwTekG1x1BDXfRnScV",
  "key33": "3g8nakhkKhfuzViHtfoKhW2o976q7UPxnzyezQD85zQgVUFSRqHfa47Uo3wZmunoSkgn9PUF5f2Up5TZAd2abLhL",
  "key34": "5VFJYYsDoM3BMBURGJkJSnq8vrGWDFWVHTqhaBHi6qWfg6AZDdhFp4CRAXXuGFykgmA4eoecynCseXudX7mSM1SW",
  "key35": "47hTd67zmjLfz7WpdATpVEbZYZ634wgU9r7ZZW1tcxZJ8vyJjYT98oHj7F6M1YqZB1KYgxvJrLszX27m95iGLXM9",
  "key36": "5j7Njv76wQ42hTp4qawNAn9h6bcVcgSp155JiUy1SexM4sBkghqZbwRihUkyCD2DaUZtTPqxT3WP11i8eLVSh5ZF",
  "key37": "NHMu8fjXKoeZ9j6UtiwqzgWRf3sXgkNBcfj3SGZCLXY6e52p8iABUX3F5Ewsp19NS9pXLBv3Rpja7C3oJAWAGD3",
  "key38": "4tEYtP8HYnq2n957BKkFARAjP7c2mDbdno675DdnfY5XwKECWtFGs6xKQSpiABEwCwa5Ju62fNtJfWKxQBjevc9C",
  "key39": "5sAFtWny8wyZ94x7msoTsDKQLCHri8zXWj196grw7PyT4gREhYBz4PgVuc4PxBsuc6YTnN4dcapKte245wB1k1Xm",
  "key40": "3VToQvN7gQ7K8syFLTJCWUeetzN9m41cjzF29DzaFxhdTYUpz7bk54LDGjVRjp6HVeEXK4xvA7WAW1861DJALjiG",
  "key41": "5oodW3DJ9TffBB3hG5J3KcdQ3Ky3Nx3zR7kHDvcR4LuBYekWKPNjJd7ZGAepVLvctBnVMerBNGmGBXvjhQsinBzK",
  "key42": "3M4GohDhCMkE8ZuyqKXnXnDwN77Qnp2Jns25T5rGVaBogoH1DrJtpHmYNQXm47qzA1mFw27B9vXFKhocEeHNJcWX",
  "key43": "3K8ToN4MhNRrKGTTjk5mDmprip2A6iFrLtvtW1anr2RMYJqAfdaPyLmPsMTKFefevb1botA8hKQEsS7q1bSVvBTz",
  "key44": "2kpYHSkT1g8fLtKHHQ5a2d7Fx78AHs8ZFGJPqjisu1xApAwvaNyyuLdinPAJiQ3h9jDw3RHh45FufKdRDtsAVFUv",
  "key45": "5FU86PpFbgh4LqZQMdp4Su9uiPfEfNNqS5AQdMEAei2uN7sMGHgjHJM3VAJRMFhUJyrMp7KhMiyv8KTFYtDKkcUK",
  "key46": "2cU9xTjZRF66JbHyp89p766ZuDhmnvdymVXcBuHA3owseivRcsYs6rggdMEshZURyzenZCwHYcy8CanUiS73jKkE",
  "key47": "3JkSmKYjTjEMmmpfGA9qCxhVqXcqHSCLn279vdVp1ZW446cYhK3WKw5N8pwKSaPsDtQRsc6XFsbu3nrnCjQBPWfN",
  "key48": "3JgsKqwafKWk5JFbKNx6kibnY8u8foKkzm7G71KXeJpzrBE9eQkPRmrsC83rrsSgiQt65KuXTG6z6mKZ6CcTXgeq"
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
