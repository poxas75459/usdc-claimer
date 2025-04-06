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
    "4ehL1ZkFFELuQ8oJppbGjQn6ehxxJrcw8TBUruDAT4bJsZvwcbvWLvhjdfWzcjK95BPQw1rpq32AgME1fPRtcXw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LF2hEXvsVPGb9UURTUNu3g2LvZtaasJ99q12PXYvHyTwJCQ6yt53TYXQREDFJDS7dgUwCLLkzma6syDp15X74LN",
  "key1": "L24hWCbJTeYQ7FtC6pom3CoEweA2ZpZpY5RB9FBFFzYVjWDL1t1pfLA8o7oG96XTLWN3i68rgDCRs88sDkP9mVH",
  "key2": "5L2mfbUKx2eSJcGoM15TEPb4msGDoUKTs376RLhpknv1j45W2BdiWwF2DCxA5B8RXPJC4fCM9ztGZDrMBxPUPB1p",
  "key3": "9Yup9Au6dvvYsqFQ7Myg8c5t5GX6b1EwbsppMeSqwZEqyxEszwZJ4NDt2VGw5vtfg1Txny4uw2QfMMxo5NT6ctL",
  "key4": "CxHR8z8R2Fmcw4LFroLMK6Yqq13Vr1D6pmemAQtcVqhrPMcST9PkfBC5CW1jPutHfp8KRszCBxaQ4C3Ayhjjt5p",
  "key5": "4onwJaBzA45GiGznVBixfBMknJDUPomW1edasP6odStoNbra2zD9xPyA6xwe5mbzuAzJ2n31rLLKTzaPC6Mr8SUm",
  "key6": "4koBwnj3UmLxCq1as4B9TxBiksiZvGd8ZgAHm8S783APJG12VmuRm6V5Gywh8Xs81D17Wq5JeiunNLSBFhRGRJwS",
  "key7": "2s5gDbA7EDZ7Aa729aVc3ogyFKZNo2SUkrKZc9k6t7CCLzzPzY3aESr24ProMjyLCEEPeGSyJUqiczRBcC7a6JQc",
  "key8": "3ebe6TrDCYQDkbH97eUDQepCTdKrGv1zvCioCLmFBg9GKtpikaP3Xt3oLiZmZmgLWVSFx11PPmiE8BKYatdhyxNz",
  "key9": "5ooZFCB7m9ixHoLti9RQzjMFt4NoCozjMhuSKzmvZALXmv5DueQwsg4N4XpNk1x6ht7oVvvnGbvUvjCiUR1FAk1C",
  "key10": "4FfquPEV5fgfkQXR3g39X1fwkd8ehm4G7FP2y6gW6NRyedTV97CxGQfQ77QTzSLxWcZZ1uSCDjwFogGWBmfDcGrz",
  "key11": "3g9xqBVHYVFvcJmwZj7MPMd7bh1vExeQbYnqofmf5qctzDSr3uSfQRkcrSUCcdcJgK5JHdWtpExwe8xLCphwSEJv",
  "key12": "4iYCHb2odSXA1iThbvVRVaQSw3pcCS8dLEf6o4b3Mpf8wAakrVr3hngjA7ByCsqcDoYUSYHiqqR6CZdo2Yde3hc9",
  "key13": "58cdK77vF5s8u3hT5QQik4N2tdvSZbtp55aFVmmNs8zUR79FSk5s5dGsJXaUZaWRqm5sbTPkENvQujxd7BEmLzPY",
  "key14": "2L7WDmzfuM8MNfJU9j9eeb8sS1tmZMeVYcUAP8pGCVAe8HM9jXNMvbuk4WBnwz125fnrzTfWCW6ZLURwHGzsEfdH",
  "key15": "jv7tR2kBLUPLKx5DCjsYycNsAt7kvCxukjbwqeJXBMMxTDA7TsZt7Cf7Sxwxr3jtGdMNUe2MKCrn1TGMdkKkduu",
  "key16": "417Z4rRF3qUWfevjQwfxqeF1Vzd9QqxN7FWSafagELxaHnk6ZG4oZyAe7JidB2RTgJPBmWGYc8cbn7hhrAPzuqrH",
  "key17": "57K4HjMFR66tSkdoKmXJsiiBYJC4wKUeCrpErrzThR9ZGte2P72KeF4hs6Z1h7Q4kGEhKhD5fL1zWVq9JrGc9jEH",
  "key18": "3N9Gw2Jm8jrWyLKdg7u6frPtkaf1gUDCDfVnq4zKHh5x6c4iYeY24WjpR9g7fZ8jkS85QQD6sccamACCGt5P4z8B",
  "key19": "5rZ6B8DnP1hBbZyyEW219PKU4arBLR6Uvpm1pU8BdH1tMjp5ywvj9eEr66hu1hhQBicRmKo9j1c2xJoD7omDDLdF",
  "key20": "5ai3QipW6CLHCCpXdmsMmGoZ977Af3uJjyy9HQAPdVY1syQnfzXuw4zEmvuR4meuFnbrwb3Zxac2arfHpyeVeUzU",
  "key21": "4CnBFmhTNdkztVarYSZHi4smSwGnE9FXcNnWYRo6a5RvmCo2vMHJsPVAuYjP3HEBVR2ro5KVP59mVRopEtSrtZyj",
  "key22": "3vWAG2S8r8B4hCVzxq4tVTtRjMod2t3QaxW9BqYe8vcUkkGZmviXUrbuBxXG9iTzZkg1Xq4iCEfHB4iXvuWss2qQ",
  "key23": "4UbeRRZSEsJ4z5j87es4u2y7323sVkiYbV6MqiaCQ4hYdYxNZnaZAR87gVcfdR5wiH4e55ztVFTW1dekgD38NQbJ",
  "key24": "5oqAooJavoaRnTxr5Hh3NsUu1MzqMrnhkB8WKANYEW1b57NFRB77eGL8TQiUVTJhFtbbwmRbTP9VNp8iA623dzB8",
  "key25": "TdCtbVqyh6bs2mckqkXfB5u3LZqPXjUx7mCwu61JfB4SjCdJiF3iGGN11PUyA3yag7L6M6mB8gGf7z8CXm5Hpjp",
  "key26": "2cgMf1m88xnbXCwHN9qXupzRguseytdL8rJfE1XKRgEi3Z2fcuaodvgwi6pRv8BPuzfQNXHjNs4j8CVzNBjPWRS5",
  "key27": "3GhUiZ6NT7x4jRY4stVD1muKNkXhZSFDME6frdSfkXYbLcW51FkMJMQ5DgmMetsRbdkKDV6KQuaEshcNdmM9AGi2",
  "key28": "4nJzwJBjYNhpfGFXbYRXJogsqvHEjAWZ3gKTJ4YAabMTWC9T6W3Px2yYBRNFuA5FfGXCS87ANuYgXwPtB6hKAMBB",
  "key29": "5CgKU57WoSQGmUaNs7UawPeFPMCqDjhF9u9f9zqG75MoiPWfoMEpHHduKQuhFP8nX9NGsntGMYtA6fUtqdXanEY3",
  "key30": "5yoq4uJvFhqgubxSW8egPBpgjvMLQfQC62SJy4Q9jaYg3KJS15vycWY7h3bjGDkZMiH5eCtkQcmKgpmWoSV1Qziq",
  "key31": "35pSH3yQPvVf5iZuzDwEFSqHP6eufRiWf93Gag4zFiSUvtrbXbfXZ7zG6o7ZLBtnqE9Wifnq9GpCACydMk3aoACm",
  "key32": "4s3JKsT5DfcpYRFRNeKh9vGwLPPnNFyWQCAUDfvyoWBYfkTdmc6mD3AQXaYA3knyKMhvdPuB3g1V1b5i6UQSEumH",
  "key33": "3G3VsQJLak92p1Cqygb9EkzNsT13QFiNmDb8oxcyNjoMNDkBgHo4jo5tQioPJXmoE5cynnJVeQvMZDYKXjsdS2JU",
  "key34": "3Dr8RDSN5hjdWdML6rQkGm7DaU2HgGkHM9AB36iqQTjCp1rdURayV3upWX2mHhcd3NZxUQHHJmvBpptbrtvdx8M2",
  "key35": "2tdwzWMRXFdhM2NdwkzwaanHWopJxCqrhMQYiYWVgQqCtEUYYFAaxiU2f6mmBEgovtKonnYWsQoCpseyd1LXxCtT",
  "key36": "5M2jsvz1bomEM4obbQKSR73gVxEEJzwT2KQXCHL4Gk7Uj1KT6ugR9nLehwB3wwn8YpJtms8sEc34QgccfUCC85FS",
  "key37": "hVsAPAiDZeuZs5fwwhHZKvGB4vmcGFhTqsnHkjRvbdxDyE4Et7jrHGCnEwk18khCfyNPMjBwGBD3QAm745upMSw",
  "key38": "5BPmALpYwtXX2dtRkNcer9RGpYWiFLG6BtzBa2yy6KpKZGEc3mr6p9EzNBd19jHCA2H3j9wuxsRLLo8huVs5izDT",
  "key39": "4kZA4te4XjWNrwzJTs7xaDcVgB9JZEnG9tYtRGJUStkYBAx4381St7RvUntkCbQXZfdaqFCvstkXn4woHvUtUf8W"
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
