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
    "3mimvCvtEpH3R4VkuKBdiD6bm7QPkko9DYgeCUwMBJfYe7isusfSKKxtapHshwDfREtq2R6sdKxJD2dqKXc7ADoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTcoveX5td4Q9Fr21NMpPz9R5WcahCV9b7euhuTdosGkZx3hz88UvypDRTQ4NbiKY2Szp4JYzRtM9QUwEWvQWsA",
  "key1": "2YwZESrHgPtWLZf7sehnWVtrErYDDd5uQWXbsXNBEeJ7ybsZt7Hz19ynw2V39mvEr836m8XSCJNse1u9Zw56UyRw",
  "key2": "3AGxwxE98Zqg6ExvkbercytezgcC5J3sF9jGsJTACthiA868z8vKzyh2eVoTRiybytFs2WnRcNphsivJs6WsHrxk",
  "key3": "4MR87mrTPXpjfc6MFsvJamWiQtcZHFAXb9ddw6LLzWxYiGVMGm487WCxiVHyjSGtMRFhgE45itd3e6t59a3cs55a",
  "key4": "5hsR7X6ntDQXt4GAG6KCWhgqzuGAPfxcCXXzmDwgcCpSDU78c8DukREZxYLEGdAGYRwJrnfFdqG13DCzuLBTi12c",
  "key5": "549CboW1bUyvLSuPnpSnWFpuntZyzhyF6JnwG1cUP2eVePyseByJB3i4jWnPQFdhk1qtgxdCG86fuXA2eo3i13Pb",
  "key6": "2AfEc5764oiA2aQN5c9wuMJnFtxchTFVHM7EBdWNYEY88NXyzTQCvrWatg2USDvyargkzVnJvqb8gDaLzhtCLYUW",
  "key7": "2dcDJhmRp4GZ6gpuk8wMHUjSV7uDQqb4ozr6qA3jJhgvtS4S78tQyCXV1MheYjE2N5wfkBGK6R1UEoFEYECszzoy",
  "key8": "5SG2YuFBNaD7WuUdHtemiRBNCxFYG2denCqqhhk7bcp7fvugK3LXGQXVNkMsATwqU4HouirhbVcf7squ2HtgWtdB",
  "key9": "uN2hPHtfeP5jHoKPqgQbhcwZcCyrkGznMpbAUjyPAs5hFnHvRxnSQgWKUV8dTQV5htM9TPm8qaYsXv8WJTxqCCk",
  "key10": "4AuiRz5b3rHZBFQSpUiNFCJch44nWMjPqq25G7VxQ3DrZoyxZ4a1y5AMfzXEbcEb35Ep3Fv9RjqXZfviPnpPMJfk",
  "key11": "5LWY5sxgP6caxfv9tayP9Fuo8YfWhRUuwwSKZ2WAu1RnNKqYaJ1cFAtFzZj1KzqqmQGLjDaeg73Wmx87oYnjGdYo",
  "key12": "5dTqnzHzArnQtFjge6Mk8WbyCL5ECGcpdKmGco1AWv47kLYnBAqfforxzJV5Vtk39inpY4SKcUTKEeseSoBac4z9",
  "key13": "5KaUTtGDuG1DrDcjbsrQfJPPhmaqsMYRNJb21bTRUGx7sfWZXeMxwUgAvALv3fefECQHLTirTHH3z9nbzYftpB2w",
  "key14": "2eHg8QqviRm6yF1kVdCKYkJy4RAqAFMooY7yMiJnvcNx8nEyFMwdZdxFpqFu9tpZpjW5H7Lv1rWjskkdWwiSZ67r",
  "key15": "2XGPwweB3arYCR1z2t4JCz1ndcWH8cs5Xmua7hRcPWjk9U3NNQ5dmnY8n7AtmUwCfyU2rJkF5ahh4ctmzPX8HP6Q",
  "key16": "i2jpKg1B8i1fHUDGB8tde3UvwLtFS5k9UbMgGW3iGx2VeTCTH22ez2zmurH6C6HrcGfihc6kETKp5dJwY3kSXGr",
  "key17": "2zGufwwSyZdoqGhi5pNrK4JHb5asCR1t3TTm6GsMr9dL8i98yK3pWAox1LWUkLpQd74MxEMkpQkjnMcfaFTgggQ6",
  "key18": "3NZMBR8nzG9Eps599LtWt92z5PNDh81ES7c7yTSCX7zDfQpsvufXbascvhQetTiN4GnHe5nsYKF8cUj9u5JZyyqN",
  "key19": "3P4EwQjaizCCXkyzQKgY8W9Nwy1ACnuwSJwK8Ni21xVBLttbJiuV83tSY4GDqjfDV3hs9z8PpW3UD3skCh5mLqim",
  "key20": "qcgABfia6vnQFj7S4wDCgMY61zHqDGaCTNtoCVMxrUbnTjc3N43PfQjQYE2Vke1RikPc2RfJtQdNXSDG5KDCQeZ",
  "key21": "fA68upTDSisSfq3mmzEod1aVVWvEvNFDRu8VHYc4mq4pnkp2yNy6RBDUu9qbdEFsaD6CBo1C23HKJf9GPZ2TaTh",
  "key22": "n9h6E8E3jDf4uHA3tdfRZnfhJmJpQUPx3JoufzXpmVR2hYMmXomioYM5vwG5mZwugF2gw7xZM3yPC25M13SNgJB",
  "key23": "3iLLEWwj3JohzJWGyaPhWKYFUqFr1ugpmMQrHMSg8xkegR33m23t9WGbAWCv1bhKSgdafCsLRzYC6X2UkcrzRz1G",
  "key24": "5mAgFpzy8FLQanyhYUQSpvP4Fx8t5MZbZXkiiDz5VYRmZHjJ9nzDBmeRHatcjBrzuC4GQX9FPhswkZxvmWGNMqqf",
  "key25": "5EnmSra49oneJpYduWrmcRYL5LsBGE4sVXHicGzTGLNDVgvNxEQKpAbvSqG7Ny2v2cEYqzM9sY9eKJBudKyr6k21",
  "key26": "3jHsVd833dZ6RRkNQy5hjKZA7DbVgTjhPvwt567hUcatH1WTyLMjCEy2ujt6xL2wqjzor5eegnMycxULEobF2zTX",
  "key27": "2jhSdZBBbghuYDqPh6HuZdyjmeupYEXvpLx1sNLtt6tNUPgUPkifwDgTnn9k6TMxZwRBg17Q6HJM29Zsj4eWW6vn",
  "key28": "3uvvspFFGXUzj88ECXWFBZ32s5qN1VN3q8CwnG8S2iM3m9wKPfdnLCGkCZcGseV2L52VRLgz73jZBQTfrScdV81G",
  "key29": "g3gkvZDxwgUN2q8MH9kEzcAJdDVs7ABK3XiMqdqaKcFsvrd8aW6KsHCFQQgi4WHEWRFqAfEqW8G9v1J5Bj634Nz",
  "key30": "22tq5if7Ax4FtfZwraq5DYCRm7bHwbisHJ5FgtdEGVNm8tWUqoLAG5E3cAPaxfusWFH1YDmcX48egCxqdmZufVBw",
  "key31": "5BkyjTtdzSt6jtz8gNVkasiuXfY7LeW8TtkQmL2XwAZ8dMtRbchoSiVm9HWy4R7ffLuuv1k9Szv4mycrUHg8vXWb",
  "key32": "5qNFEwPwJaRGVoVaSUCzT2JTKgLeFMcSsiWfpGTrsp6XyAR9HVZwcyhB2ddPG7pNGVQGPHzUHGRb3rNUx3VJSvVa",
  "key33": "4oHWVJcaB5FWVyuUxHDipwjBJFzWrGoyDWgh1i2rpmTvjCf564KKdacL9AGNPernwncCwaoZNH74XxGpwar6JFg2",
  "key34": "cJqkPJ49xs8YrbjNM9bC1qWB9mCxg2y82zjehycJ7sBcUZK4dGoD5HEXkYvt5iyoJyM1zU6xqrD3sqLTy5UBGmp",
  "key35": "kdXko1qtVgUuDV57dSwH6JzxazEvquUgghPw4A38cfDscdDqCER9TwSWq3mKV2e7EBr7PwiDsCrZEwfoTXJRedk"
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
