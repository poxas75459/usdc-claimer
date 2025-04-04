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
    "4KcXP4kR45h1Sb5dH3vvzM9fGaSZpLgW15fhiYVw8HMgsMpnWi8zxkarDEwtR3XFMPEksFPwXXri23G5GbSk4Eac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSFAoW41VXE6HrFHUjRhz2gJKKCRNd5Za2VtDgmVFtAQEPeuf3fyPDcbp6oQxzfyoSaga8oo5n2gYqAZTxChNS5",
  "key1": "5XTHfMa1BrS523p6FFVe6UKRbmdHe5G3qgsf2C8jjzgyU9ergsVHXDAqURw92SoXtyybHbbe2pPfhB19yGieWs6U",
  "key2": "3ycGKdgzAK9zU8BaanWJtmEPDxf3SkvpMFDAudYqXgF7fUdEnoRy8F1qFXxEgUuwf59CehFMXt8XgWcmxLuhXuWi",
  "key3": "3BiP96nN7erzQdNjtVgBE38AhWj2SBSuxhB2Z1wDTcyaTJmJQHCFtoaEWbzTCCnysRAkvAQpSxw5kdrbnVxggFi2",
  "key4": "4TW6iZz2B2XHPWQkb3jBZUAHNNUhyp7D7zt8LDwnPv47eGD8TS46TxtGv1U3QYgGsezYGxSmYvvcE4EqqDpvHhGu",
  "key5": "2B1JNLai5RURWZ9MSh8de3SFesLoeWGVH3d3o7cPj44Copgwhew6xZtJro4MuiZB7VPtREZC35HQtNutLnHXWSkp",
  "key6": "3VtmKnQNSk6HzNryrCm69bAyp3jyGk8HZbB6ZUFbrispLAc4BW6QZUKSKmzipx8d1MDKzq8wP5bXsj4hCKkyYrYC",
  "key7": "2KFMoewFYfYYMYtPNZa9Fk5FWHzwgVLmphjTdC41W8p9Z7UNJeNJGVWhRn6DavpgYwyLqgeAQwLq87d1kBLBudrU",
  "key8": "EMpCA5hFjZYwma6XcdjJyCvfSREXAmKhKySgegr31WZFuxCXMuZ7ro44G8GEcGtswHUQYkgeAQvbK6Nw7fPh95y",
  "key9": "cNyizCUjVs3MmYAaZ1EZNBqE3bDQ2Ttg9HZo4yGE1tVVuX1GXYx9dvuuwzkyaj51VQSbZFdtVzaV3SR7TFEfCAL",
  "key10": "2MUUpGbrMCBJtHLhVQCRbZwqJCj3wzEt1c1YFN7nP1FTX3HHXz1sH6i7Xyf1LC2KWzbvCrUNrjFWGW6Dx5WVauGu",
  "key11": "5ErjSXMXCC5UQK8PE8rx2VMM7dErZRfG8Bku3y4kTpedWLs4S9QPqaTkAJhaxaMVLspy3Sxgci3h8CNsH26unKgP",
  "key12": "465cpPrH3JiCehc5ECGbGXaAEPoUSm6m2AHahET3ab3B2fzxNQsDFSK4TdRVL9URARzTf2Swkov4j8gc3QtXeehN",
  "key13": "PFFMSZHjEduJCU7mpb9o2kpximVMA9YihKHCgf2kBLPJidAhWto7QRiCdxbShQV8ovxxaQMDyHVJfSbTQvhzotP",
  "key14": "2uGYc4QmRfHWzEZPaxdYTRn7gqSySEtpCLXr92M8d78ki4YmBYDDoV7d1Zxd9sZ9tsn9tkgJDVk2dzFBjgQRgWGg",
  "key15": "468SWfYLmakZK9m8TYuPNTYbsm6LE4FvFWUnwJ298Yn3dPNRseJHGUgKwoFqB4rYkTcEC8TDTaqbg65DQwzqui86",
  "key16": "24nMkBj9Ahg3bK5VM77yYEqRfUQG9tDKUQnLAPGkTfyhQBVUBPdvSCC9uQzzmFYJRsMCuWJrsP5Mnpwqy2kFCne3",
  "key17": "2XiLtzzVxxWuBLePkiwynsda95SMRXgDN3RrPbiwhA2M8gxqPXNuous5H9sDykXSfwbovMwm1NgrqjSuNWR89Gvm",
  "key18": "sL8Pxb64PX39TH67PR4RyQEHKGYqLhKcF9YVu6LPZx1tpQxfxSWZpuWrSdiaB2FnvVum6SbqLPCUhB1YJg8SviP",
  "key19": "5N9B6t2hi56UA7mc1HRQ2wRbQqmFNAitaxndUNwBXiquEjoWHGw28yLWL9Lu5HkMhbBUekyBWKvsjkHzZzMzxZpd",
  "key20": "3fHVCFj9bxJmtpLdkMU6FEVr2dxFqZCGF9C7S4iiyLooFYBaktpRovZYren4tqgcNWwn1bFCahBLD5c93PMJG251",
  "key21": "4L6oAMtk9mTU4VfzksSTijBYbiDuJbQ22RZUzrJyqopNj5Zke61oEo5mbr1npbq2N9qiPpouoD5PxHEuB2LwRejq",
  "key22": "2Aojr9fCDdbzS3XA6RngVvEusH7B6bUKXsmg4EQ8EwhsgdrMtW7JB13HvtzTmYgNn679kEv7y1VD4hw36k3dfGX7",
  "key23": "5iMBg61zZyJQAfMFWbncAecSE6mt5ExSUF95Jat45VV2nNQqC3X6mfjN8gmM6LFCDpekRqsS4TRdb6ZRNf3UueVX",
  "key24": "55v3cA4rfMXYWAYu5HdZ5FXf4SQvkopJy6L5hy4wnkyE3a3W5yTJGVVUh9eE6ptCv12UpeiAjHLEBgUMWSbVJBJy"
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
