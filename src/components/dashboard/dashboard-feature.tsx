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
    "3NDDya2GgHMPAEwQe8NEEX7jK2rcUouYSNq92w2BaK7zZ27tkHzpDUZUGdut2YyUYLffsHDDeXhNKJfgs49YUvnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJhZU1DcYnVbDMtpjfpFdzzD6S6V5KMDdefpDJByfgH6vn6136XNAV2RLk6MUx6gr7ctyjqFSFWVsi3YttXircd",
  "key1": "5pDitPRgjM6v7hYLabkunSzmLhbR5e4w2zNfgbuf4d6psidDJF6kqFGJNHv4vkJozFddmaLC2YzEuatJ4FqvHJ3a",
  "key2": "28zN9hoS6t1ZZBBkv2HYXizJoQQ14FMp8nYy4zwuHE3MzHpcyoj8g7EZncRcgRFcbWX3cPsbDbD2xMd8ZGTknH3t",
  "key3": "4HgPQ5En2Any5VjX1QsJks6CX5s2TmZ2XqNrZSmz7oXSzefrNCYtsHEWYZt1cDmNoefQ8qftAE5ZsTx18HD6RK91",
  "key4": "G6sPY3LxBRRTX8hU9WRhXGxwc3rM9Cm5bq4f87trzkLQ5Cdz6pS8TfWceqrpuzZmTnQZyJ28f5spo39JEULabxw",
  "key5": "4tDJ85AHCAZCMkEMuAfSgENNXjbGNZkos9E6yu4GZRMdiocrbrt9CDT31zZrWPSAMaBtjBGDuEhSJFKnExxbwQhq",
  "key6": "2LKzyzLEqF87DXnCRbDDVCd1TRnRfkLKEnrCbZnJDKxuZd8AXWTeqA7ktwnc5Aun5a9YjFk9m6AHZXZYuAaUTzqc",
  "key7": "tDjakuz3pxZeTbYZ8ki5Bg1UPVkEDxAioRv7um5z7t8tvLmkF78K9VXk1dfNngCzdcnfmWYTjvkgSL7ikjNRB9E",
  "key8": "eUE2SyspAM9f5i3xpodpQBNMFarZNwWeqM1RdPbXj8RGXfRcaRF58FBJsNduvYH9dVqJ8AtdcLzewPXbNPg8fCA",
  "key9": "5iJmrJWQY1VP4tGRZrWsaG174p9Mf9xEQHqJZGgxPLxU5Sjz8n8vEXY5PoHZ14pUUZe3nrraTTa6xYefsZCj8fuu",
  "key10": "5kaoU1FggiPffVXuoJWjDXLbYCi5z5KJ9tdaX67phQ6nuZ846LiuVnmqyRoGJPwp2YkspFDUtKGzsrRtavGejrCh",
  "key11": "Tb8oShE3cnQ6FZmDaPxMoE2KB2KKgoVTWvLgBufWoGv8w1BCfam4Puo6yY7YbcbwaFWE2GRFZ2HhJc9sTeQ5eqh",
  "key12": "2U2qE55saZtBJ4eAG1ADuXoQvBk76u5zk2XoB2ZPfJKWazVdJbM7ETnJJuiahoNKvUZBBneA9cprXWmkD29LBfib",
  "key13": "2GSrUsJ78SaN8hYEz6xmczoVPsDCiSqgedft4w2MQEWdDKqsZ8cJqsoZua5EyuZDbPVBYtZReLfmvyAj6fPDGAu7",
  "key14": "5BDwN6ES5uSBRdvqN5VKCwjLmFrQq6YBc5uqzW2gmfs34J684Wx1BVvaYzHDjo9d2c7HeAMmpXxKiK6P4exWTVMS",
  "key15": "5uZZHMJKNcd4RuU1pp8P1jQk7NQmuzacPH3Z5ZiZm2RnckMXtXNXSLPpunrREF9aw4ynr2rnF5ZsTo5dmUzV9kxV",
  "key16": "4jhshWm9U7ZQ2FEt8KF91iJRi1Y6MGKdPxiJ9NUanRNnc4hPrQUmx26YdZjBo8y7imYU5ZkiMhxJ5edneV8RUgw3",
  "key17": "34vESwJkzSAN3iLszQdVkcZN17bbN2hkrujJW25nzRSyeebWDzTagp8rLFS7wWWrcNHEq5LRh5DDwNSyWwSLAFeK",
  "key18": "1NWyttv5ujkEbSWQNvXktndNG4Umc6WFBmtoDKCDooxXSt1zaruw31XgM4hzKDtFTZhWj6fBeGPYn4MtrhNmC2v",
  "key19": "2cNAEcpXmjRmzPMXTw8uhFSCupD6M4HWFc2JRAX6mAP3q83aCV9bPkki2WcgZ1xEwPVjw5fBBV18HQ8yLaw9X4vP",
  "key20": "4xcPtQGKQ7VTnP19sanuW3k2vDobpt7NaWpRXY5GWfhCtceNcHtX21Xr7F4TU74gBTe3e5Vv9nEru5uEwjzTzbJ7",
  "key21": "iScMJvxFgRqkGf1n3F2fedqSRBK1kFSUeMwnhY7CMnyAAW98otwpGg58Cidmpth26mbvYhrfKHfjLCzyfsuWHvC",
  "key22": "2S7BrmZJAmtDL47pxC5wVtfajKRTac2GQoPG7bw8vZcam2rqVVGdLQDFti9wCPF6LCufyEvUkz4wG5PRZzvYuLJo",
  "key23": "5ihABG53txWPSSPufUvhfySbZN31Em3pKnkqp1eE7XovHDcmspecdAdXLT3Bh2bZV5nWgiGnyABWKwsH4Dp26EHT",
  "key24": "5paTARtHJtYHnhKoi8FuLyMDTu5xV4KmQ1n4hZpvRowutG5iFCurgf3JP61LVt2NVzwF3Gic99ExWEGyzjJ934Zp",
  "key25": "SwDWigdZchSdexGEQA2WUbVuRXgkdLeFUCMkgHJpazPWfhVQHsFJazwyZXpFsomoEtTyX8DakfmNAHKdsRmEYT5",
  "key26": "3gJpTd1We1HSmYJSTY3BGdiVyBZd1Xxt5hPWjpwVFKaSmAGTJjkp2oiWkKq9W8RujGTiPjx6Z3LSuHuMBEn3eWv4",
  "key27": "434YA74ebpoE7bQFf6sV6mNC3fgqxjG7dqEbnE7Cx5WtRg4mjTAGf8eaWyo3wM6J48V3xMBkE9Z6wfD959xpeS2c",
  "key28": "4VYa7p9cga2tM6Uta7ANssuYWK6xDQS3G52HmCAS2jgXT4BnP4W6fYDJ9tSjP6gMCvfQUJQhzbBGEemQ6QgjfNy4",
  "key29": "3pKm3AWDSssSB4hRTPmzYRbG6XaTSEw5MVajyYgHQAxPSKzgKjAMLQg1RBAPwP3Qm2uF3mVLdyxF35vMsFxKp2MX",
  "key30": "4fCokvpPccRaprThWNmPhVyFBNqv9bgQcbFCdaQppRfwfKFGPHTkcGsj4edfqEEzHv7vB5U8pLLQDb6DFpuSFGjs",
  "key31": "h8jwtFAB65q7WRFiRNyXxBNakYxx8dWDXG6cstRFEJ2GTweD4kBUN5fSAMcKfwJPU96gEyZauvvbcqnYZDhxKuW",
  "key32": "4zYmndb2adRLJW2b2VDP6WPQtsRR34hcXKZsSDK29ezgcjR46Y2k1fVQG5imXMSdmyTm2HQD7zDqPPUfzaSVXLBR",
  "key33": "4Lsy9PxAWrG4SAYAzkcwAUYJUkQmusgwoGaBL653dz9sAMvxm3QLjqVtHq225wGAfNXK7KxVtzuuYyG1pQc3Kdf2",
  "key34": "2pbEDHU1A13RJnYhLA9zfj6PorJRF7WRYUw6PWf8gEABupr2qNCZGyPk8wyiZbucmJdCpfRLYgokzrvswUDM5RSE",
  "key35": "391ZLt7ad5nrDmrhmXvLzswfLNc8LzQUcUm9yC9VfDbScgXpdYV9nbW7LFihtuDN2tKFCZ6JzTjyaGL8s18DcF11",
  "key36": "4HtqnqctGvh3Qek13hx2JKQZGCtqRCN8JXer2AKtn6k2Uo4hjfHBChhJryGgNgpPGQt8tUTtCFyViKZ2mpQyHk13",
  "key37": "2cdWJiYNkJDR7R2Zwcb9HpWTiiyMM2sJFN8HT9vKmLwBcbXzid2yDC7e5hgtEWfvKhETUTFrp5gpwoHxCGj54tM",
  "key38": "4saH9CcGRqNqwnRh5LEnFSm5DRFZEr3PMjofEdwyZtUpF6RdHSp61koEccrprT3eGbkMfZZefK3eemnVyppPRfCo"
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
