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
    "3LGitVGM8PEbqbRW23YoLumkUkUxy3ZH2zSCpLwE529tc16GmrNS58AjZHZuNbeV7aqWR28Pe49mBqhVa6jURsEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GurJQkp1vudL1eakNCRaJYtQ7hJQQGcvfbjAjHiBWgtArpt32WwZiozwVbUJeB3vJDTPu2DCnwGyNf4h4x7wsXx",
  "key1": "4hNb3Dbu74nUEq2QfpVwLvJUHCusYCjT7TUkwgAPbHnDgYqVMMDhhzF6LhJRXTMnt9TP4dQZ4qLxnZwdWmHuzV2v",
  "key2": "XzS7AeKtzWX6wPgs2Xy9cN6Yw8kN4wH2oQUAJ7C5J6i74RUb9wSUtTobWab5rCCJ5FZkSeDuvNmr6yuMZExDYZk",
  "key3": "2c8tsyrCaGKRSgWtTZWWwAcVswgC2mFK5Dht7Zqo2cFs9GyKFWiV2kuaNm4pyTJRH6WNaNB2AE7WzXtciHvGE6xA",
  "key4": "4iegYa1jn5kSFrpqL9Vc8gJWb4eURuhFVQW1tPZs1zGTptJ4FiGHBrJ8NqXXpsaH1novFFoBWQW3qLjENQk39qCE",
  "key5": "4uRxZgmKSGCYSZh9tixbyDmM12qv9WDDuPpUDkzohyDJ1CrKxeeTML7RYoU96fQ12RTS1WXFtPgaAGojkWbKsxb1",
  "key6": "tSoSuqntCWnSsuaZLrP94umX2BatQfHETtNgjN6wqLq1jcfKVtnXsTZLaydX4qt57JEYXM66TxUebz8MYP3n72q",
  "key7": "5ym8h3zm69VgpRfxKtSannGk3soMZYoHuRg71AXLg1gymRVMso4kyk48Pn6YMMJ33vCtTvZegAg7RUBZdohyW5fy",
  "key8": "23oqe49JKWybgNFisLsPAcAj1fQ6TfHqnXgqg2knwKgamwqZJdNxtqc6q4uSfKS1P1S3bU1M1maKZXsvkzrgmdoD",
  "key9": "5xkuswD8bFTdmwiQCQhag1AEeHWzbAgkwmwEts9GXKPPG3azhqdXcf8v5i9tckYkj4qAU5u9t6n2FYvNesUvXYxs",
  "key10": "58s5YiPB32FdoqYaDvkBZ5LEg7F6sug68xqmoaBuuZPPAkAcM2ZqcjBsyxqutX92J5Us7UyvJgGQUuhLqyMR7qs",
  "key11": "2prUc8qGRkggLCvc3k9r2kFm1Q9vnmzzo2sFV9s9SEtQcu9XTFeZtCHBeig8L2F3YaXnpYhUsT9dHVPeWXp8s82j",
  "key12": "3FhMuKFGy3JsMfcvYY4JQvHyw7Vo6iKsk6F7woeRj8taYNF7jB54VwVW9Pu6njpxEPasf1s8WtdoCnvhQADUVqp3",
  "key13": "L8PQajog1ne1D8ENWFtkGHMb3KuEmjAABSsbB7hs6tCYVk4riLMQ4rNyTy6TAgzJNqyTJ61mcwDvzigeMx3K4hc",
  "key14": "37JyMM5tNRonc8VVn2kqDaQiTUAR1vEUtqNp6QnSj5WYBVGomdd1GEmhKeX5hwnGz8oCqNgEE4oycHHobpUrwRWy",
  "key15": "47svcQvrwdcDmHiekxQtsCirtXmLJ63636SSQUmk1ffVtEVvgnCwdQgu7nSHg8cSmyVQF8phfQ1pPQxi5UYrSywZ",
  "key16": "46CULPssvMFXjc1C8MCmuRpsBqvUwX4e4CQfQ5HoNGZDM9TDhFmFUFhZ4HGFdd6nLYy46cHhVxpeVE5Ttt8cvgYQ",
  "key17": "3Bm8zbtwJuWsT7pJRYfZPXXU6gew7y4ZpXhRbbyMnsvrq5wSUQZXpWZZeBeThZMwDbxr7c197bUxT9LqvYdfnJoM",
  "key18": "4CNNvj7LcYi5Mx8NwNkA7brjJ29Fapa16kB9PXmzo1gKeih1P761PoXooJLXU5ibdKkJFXPQhdiVSyzyz6EDvxkn",
  "key19": "3gmuCY8PMVbLZcQVof6VYbzjp5yLWhzNgpZchaQPMf9u962sJV1KLCETxxcd24KagTv1gPcikpVQdR29Ai7aEAT1",
  "key20": "ZoiynJgdu542YSnJVqeqrCKNxzsPbKPWopApm8PMSC3tfqkAJjiNdxFamdWXzhZfxZMyPBb4zkgXiWTBmH75wgq",
  "key21": "2C12mPE5zAbZCL9CqjkZeueAWpd96AS6bP5AocEggibsdvqYDpk6Qk7bV25AZRYEMpgwSWXpVFLkrXmVW8xrA1Vu",
  "key22": "2fYFt8QbReLitzjYhm2c2CEsD8HM98Z1MVqg6CdFhr2ptSPRwjB9yg8PJqt7M82BTTsZcfiVwu8R1GxXF4oaYLet",
  "key23": "3navpcFih97weFcsNQr1YEYmodN2KszozKCouaXWH2BSew4BvLFuubKYndwwHjXbRjvjYyYM7gM5qwbxS6QsLq3L",
  "key24": "2THjHdjf8syBw2HKDWof9yTVDurnT2kEsZ6F3bcB7rbAkDMHNM81BkRUY17c4pq4pkV2q55VjdaC3x8A9ZTSkJio",
  "key25": "3bytYHESnQ7UEoPUxUdBDof85WMrYa9rk9CoeB99wYSR2y9VhYRLyH415Kq4fJGmo2o2wkJ8APDFFH7g7xXa5mne",
  "key26": "narpocwbo8BsK4FBFhmkJtLFucY4vzSqqhoiNwiAKwu2BRPqx4LfR8sNPzMJur8YkDASfKX9Xy32GXNvZAiyuek",
  "key27": "2ExTRSsqifqSvaETYJ3s9rdNfD6QLQCjGVnPC75hJZZrG1nzNui2fkfTyH87m7z6Xxf1bKiGh426wR6iGitDpL9w",
  "key28": "7bCTwy7xRndgBnXkV7UfUe6MtLX2fH2E7VuQ4Jdceg5YByNpjQAkAPowiWjGLCerWsPZyjz7ncRxUKLR9QiZaMv",
  "key29": "3Xyqc9DnPGdBEEy7bMsWgB3CyToVvo55d4WEQSVEdNEXASpGyLcXWV9F5Y3xGzyJ5wVZZPsjoSdZ8pXwdGYhGwhj",
  "key30": "4QppCrESqZHLDT316nYpSmxnHEynzjfDkfC32mgJ6LnqM7CMZh1EEC66P8W4mRJHVFm8F5juBbeA5mcpjixCyzDv",
  "key31": "VTvnTaEj3kYgFps1fLDGPNPWpAbtNB2og5sCsEEVAun2mWG8j3wGSAyNN4x2ctKoZmSPDPH7bqpaFZP1Y9UNUW3",
  "key32": "2ibsq9ZqxZmhRpsN2W9dYbr8mp9ew9docRJh7DvzSJF4HxqoSZ6UuhPBDY8Hr9NkM6i9YxpXhXfBhywFKRAjMWY8",
  "key33": "9TAELb581FC2QCMJxcR4B9eP8wv1Gnks9z5zjaMo58JCWBKjR8FT43BaMUnmR5qWpp6z4bHi3aEFPUB4MfVUQbB",
  "key34": "45QxSnuab6WCJhuxvbFASS9ovkVzNZYQpN6TCAq9ueeTWMSjcgChH2Ke5rScyqg3j27QAKn8noiQh2hW4ci8zj54",
  "key35": "3ztk873FNfVWbSf8hep4aProZ1xemwZMt3NaNKAKC1jPaooSpjyeTMgbTN3LB7zkcZ66gFmrqYJYtfypmqnYepDs",
  "key36": "4tpCAQt1HfMhBiwRejgsyzc3qsJ7QHCy65tQCNARgjBmrABL3LYuEEsNAV5eewSzpceEkBd4qiQZohuFH9gcYJz",
  "key37": "4G2VRevcepEKxvrKBc8LSKYQ2BkARvPZwgiY8QMNSm3xBp43wDXqQu1kWravEb9EDvWXzgtAoxHnUhhd9AwXP7Ar",
  "key38": "58BV37TZYzqm5HR558LmGPLEG3f7fLquA2ThEBTnQZxZ73HkAgbNJrygKZTGumngXpDnMgACLvvFLAMP2nqE2Fxk",
  "key39": "4uoLH4HiCSeHniQAsjsozSX9255x3UxYm3AmSuVfDwXXKGrg3Xe7PPSh2tvtTgogyE9A5E41VCooGqbnSBT44ScQ",
  "key40": "S1Nhoi89ADuwoEHbpeJpX3PDVdoTBpweX7QR48Ay9iwk3oM6ZH91HDxWZBczk6jHSjzbkFRRGi8fYHNA7VRrFu8"
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
