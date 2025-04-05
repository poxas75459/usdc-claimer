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
    "2rE6dxvewPChX9wFkxhSLs5jmnazW1sBoqNQyH1DxtrzBrCZntaRQPq1uhqSbnBZkQtNmqYKk382ErsVgCY78Mpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gwrLdBqWb4UzKLBMeLh2qYA4nctkfGoVWmN4ahRYyii1Qa52wsraLr5kuSVykwTBinxQzaS7nXy51LezcyuchGe",
  "key1": "5BdBBjg5iETRi8i2mAJHYdqieHW3ZpXWXBB9yYaSdCDtxnemZsye16ChSQWBQVzSVbKgvi7v1BrdQ1vqgRHkLTqC",
  "key2": "gkx37Tk4DokK9WdEEP7J3cntmsf1CjRpgnw8tVgiJfewyT9SgwaRQsbZr1YvNrxzUMzjt1yNv78ZeXYoxDu4Rar",
  "key3": "5qX6nQaaqHm9NwDqoaUzkz3NSLARv8NtcsH5NYJ21VNbim9Vm2sWCAJatUL2E44YuYykZm7tcaxpAWcVXrB7H4r1",
  "key4": "21ZLrV9wfNb8N36MxXpFRQDa3fkcLQBKzzkE61qDSH23tC1EFFkTpZuwsMgF8h6Q7ybUr3dZyK3a8QwSCzc7Bd7F",
  "key5": "2dDn7B5HcwmaBJRAGEiH3kR6EwDmtHnRhZLKy7efcbNzG7YryhRDvTLSnf7VfAjcsWfnJkT9hyoQgZ17HDeDgFkS",
  "key6": "5rdNz9sUEsxb4diNfswnkwLEtGY8wDgH9iuem2nQEqypbmZoVk4DySYSeL8dyQF2ivNG7nVVTit74c69z4UotyPf",
  "key7": "25RpaTZp7J4FRBf2xBgEkkRXzqApoBsyMFFTjvceLKEdWkkXtREwtDFXqHCMNhM2zPg8wNEFYDMkPAgfLb8maY6e",
  "key8": "aL7LCamB6YdMqkGrpYu83vqpoD8Uxon1EmQ5W2yhKQLKYUSYNqScpBYSrxZub8pvEu5BiMXYqXnMcCKQpjticKB",
  "key9": "5296f3KKp4mt4t32bhLqAe7Atu4fQeu8xxargmqZdSFr2ggXYhF6Eph5WZZaHzY3Ybh4qx6oDbZyz9mypsuSBwNu",
  "key10": "3MyeaAtHe6HYTQ6hfTa7kXJaht9HiwRJxP3SqgouvRBYdbfhsTxrawDEhHXwkHLQrZudmk4d96QZs3T6iLWuDPXj",
  "key11": "2iNvwFx1XF4GyMvDcunVxvDyeYyTtdxvfJ4BHtLwKfRCYL2GViWcVLbapYBNp1YJn8ikJW4pX6W1BS5UmTUS6JD4",
  "key12": "xKoLpGsZVRjdVKe9qyUbvHSSxxA2wkxKM2ZhgzHGAK9nWQf8VUyP1LB5uFBnJGM4oUccjo3wVeqgBeNn2jmWDki",
  "key13": "MUcWy6aWuqXi9w5oC8LSXzP4tdHx9gJXgRPPha82TAFFC3UsHyMveFS8WEBM1gHd6mvGtx2mCDEMXyWcHh1FRMi",
  "key14": "w7t3rPtcvmDQisfKFCCZ9BdX6ysQxirTZcARTmjiPdLxtRi9sCYSfLJhi7quSVwwHy5bV3vAskHEo99Hz7h7duB",
  "key15": "7JP86yT3QFzCYa7jnWTgraKDhr6MShmvFNWezAH1gqpb2jUApT246vH6iEoZTTPq6Rd6XwYAKFkNWkVUHcZDAZt",
  "key16": "3ZN7S7iiP7RQHmtjNopfYa8MRJPxHiuC4CcjEMpp73DtUqGckfmLTCZmXWUuiz4mVFo8ipuUC4ZpUM72wecTbJth",
  "key17": "5yhf2qELf941TqELcXkb9z78wrRTmDLumhhTHDSvdXV4kYUCrnkRuiRuU9czr3i8Y6W11sYkMUu3v1bucDg4RL7x",
  "key18": "2GWDiiRb8mvgAaKbCgMeYs4nej8nYDFkvk79HhNr8SgbiQrJwEux3Au1WUrHqVC8E1Etg3uZAvJbeNmrqPUzz4uj",
  "key19": "2EQKShZdsmvk1wmDi13XgDsZ7SHMJL6poRZw7kbhgD4waPWwghGuTDHqCkF23DgVMy5T2SSaKNvCFn9vxaUii4cD",
  "key20": "376uyjbZW1mKDs8RMDbRGmj716tGWW4m2r1ugmKudSE4aVz2zTzdatGc2KuTb7cbAEmkoSGfa61Vxem7uh2BRwhA",
  "key21": "4CxNe4gsux5gj82DKeNDodVdM3jrELkWX7Hogg5FLe3FUAh8yn1pLzabYUhMjxNihinPkuc5f5QHVrNX7Yw9eivg",
  "key22": "2WRtYyhaav2KwKgR1o3VtHM2nqtKoysanM2DoPeVhJ5qLrho2Wy5vaG2nnV7jUTvCNdRGYLZLqC6mHDv8zvRNfVk",
  "key23": "41dKe8vdAeB5Md9k23EnZ7UsGMRUC1ZZK1imuWHRMAFyhFYpHLmYgntDd6RwNLWccwqGAW9ofP2ciJ4Qxf7uMgRp",
  "key24": "5xSuYjyc69rBhHYvLcBbDQ29DP8oZWBK8E2FTUtBFdrrH3ddWFZWZLR8exypwUvGSQWhqXiqevDLxGBrGat5mHx1",
  "key25": "2LAQiEA5feMYPvCP9xxkErEPcjqwuBSFZhTmzyveBgtZ9zDGEFQeSFuF3rTm7bmzXz7vQ6Sf4RgveLiuyv7BBMBr",
  "key26": "2AWAPnYcgFL5po8ivWuDwzHwziLLiiaYhuQEBCRsyhwMxFpgCZm4ivC2VYrzwm7z6wL8xJrUVRB4Phzk71GwtjFC",
  "key27": "29wAiyqvjLEGp7pn2Qyr7jXpvN4nQz8LpCryCHjGPVF5a38dR21tmm8NHgQtuhQf1aEt7JbzUMnn5mmxdVFfusoP",
  "key28": "5A6w9e4EVUE3m7SxYRu9GfX5VjLZFF37T1ecrBRe9aETsMBjDPzax27bELz1bSsmEhWtRfcqNJNtRGKPQuKgcGTh",
  "key29": "WkKBt7XbnY3BoCXRzQDTys2mWNLd6V19sDMKYz78EjNMvaMYiw5iRDccrwmb5CA4MyybACPkFknaWMkqUA4TbzV",
  "key30": "fkp4X3hdDkPFzkDShYe7utEBbt2SZpiK6WtrLNyEWXtsmxTEWhSUN49dYGoqfnFhXfaTnBFJj1i2NPyuiEcaL3z",
  "key31": "qZUrF5EGUiS1GBEX2h3fTrjH6dEsGzzxALe3rf5RuWmbM4PXmKPVUPoASMykttKzVND77eooCCse6vX4Jt9DQGN",
  "key32": "4rC9EqeHRuJpmNSNcKyVhSkWECmLPtYcFdF3ccHzCc4qzCZnFLtEqvWXRwqzEV936AW7s9tv3vZ1fawAtCMiAjeA",
  "key33": "56mKhLabir2X58FrA6kFgMS6grmVy2KwhBETMtSw5iqAfc3L1ummpGt2o22VmA68XETTiefq2qoJ6m64VTjjwNmZ",
  "key34": "tWMTPXz6e5WxxzKvGZhC4Wy9HMEVX91wZNbvxh6rspUfrWsFun3dWRoSZDf1zJK3NcAUrTtCqksRQgY8oyS5Znu",
  "key35": "DnS14G47Kq7Hvb6qFVoq2arnKFT66Hx21UQpVQHtR8FzB5jXfcoKx8iyd1XJB8nKFQtegavCPZ6Dn9asxnHtBJt",
  "key36": "5RvfKUy8U5t5nZ2rjnvWGpMUwzKyNRTi9gwNRfoneLsqX2bySKkDTyUfZTYJZVPG4iZzz94LnLBBGiJVadBW8AM9",
  "key37": "38zHBpUDWDQ3JCnprnDs6NwyT7PB5KvL6XkP2kcK1daSvyodQcpqKtSFUPC6n5wLMRfX2x3Sz9VGQAEq9Vrx83cH",
  "key38": "2yhWY71LUTok37ysV7UbBSXkmXsvtMo34V8hxmez2csYAcgtirarLk9R1WT7YtHEfdrx96uvDSc9rX99CEzXb1k1",
  "key39": "52GiTvrzBSCpoXvPbpk1Uf9AbzrSxvk6GfnEsewc5LDvFxeoVUjbS9u4XQMWt3Vrj6cc8adpYnUk5zaoNQ7DU79H",
  "key40": "kCfbXMU8RkGPG1DyZXb8Zujth1GeBtQf8phYNnSp8GsCSKr2vnE83Vxqe8UhprpoNnUuSwKWxcJqNvgdLpw57kZ",
  "key41": "mDt9CBmbBy6ugXjkzFH88vsvkvK9NJyAU2nkPwZSmoemhpQcVQs5dUfx8oCZFwEmN8EDkJZpVXtWie2SVd3tLTf",
  "key42": "2Vc9NXUGuk3H39sN1JeVbR13YqjzfcspEYmF732rL1TZujLjdZn6GUujCDQYzZMZPkggzCrobcD574heLvP9WuVx",
  "key43": "2LPuUMdRTGwd51oqbyckXW6hR4EcQRKpDRT2NU15oDFnFVg1xaHKbC93Q4QYmK6yTBJc5NWt9rQ2kot9rbQHamPG"
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
