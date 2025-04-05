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
    "2jiMLLuDva8wCbeSZtgQqQvRU9A8HAxoZRuwSX6EHwrLzKz2TGrfFVH9NTTb5t8joxhXPF7Md3LTsngXARK4zts1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSnBt7ndcLxUq71XDxXgHtKPS58Rvx73k2hBdDUjtczgJ8CKVcYmoVnKheAUPDWtpFbF39cPdhizwXDdZYMYmDd",
  "key1": "3VVLkinrPHRC2y9ifFokzEVpFj7fVeBwv78NuynUBkvktCgLxLj16LqKr3NaT7F5Q5MWShU9QeTmdcqGM5cvwjUg",
  "key2": "P5icvd6iYgWfbLSoceCyJiJZBDPCqu5GCy6WjcMiNN5cXDeiyfeH8f4x2EXpNkcxHofU8sVH2HRZJPHE9ThPakQ",
  "key3": "ABFrd1pgxVehZX8W3F9ydouk6D5FfArVguCC7zjvDytpntBk28dt6nSLSVNw24s1N6UiK6gnBFMbZznT8frLaNn",
  "key4": "iBj92mRBS27p47LhpJ7zgYTX7m4gLV8ojq4nZBRTeLLiBQQoaUrMpF96nmAGadVJBmSysYPwBVzSixN55Ckjdk2",
  "key5": "3c1AZxS7eBsxe25Zw9ePFstdC1MZMK9Skf1bdb45Hnur7iNbns5XYTm7YXvan4tS1v7TJGUaA2yTgrj7Hr26q81Z",
  "key6": "3fW2R2sbZvBh6J8yPDzhDnrZyhxzMkGJfTmpmeFCKhGKupjSLBxUZcb74btLKFKGAH2yrLH1tncgKhGuC6Nx8Fag",
  "key7": "3nBE22TCYpK8TXz5ZvQDdPaScL7TSnGq1Q28rJ54SA5qPVmEMuAXu65G68Zw9hcs8ktrUBdSycqgk2VBvkiqUrMA",
  "key8": "xRdnSURwU3ZdH6dXqCT1id6HUci5rsU72C2nJoQFmaxV7S7ARsir7neFeTRkCGzR3gNaQUrrtTcb9v7zziVPZ1L",
  "key9": "2nW7tZ1WAJRmCCdKZBWbiCxxHrp5NPJ7bYNLDvDuYKkJ8mq334QeaY4FwWqN3bKaaUivbX6ASjunVMBw2XYFu45b",
  "key10": "Qt71sY4P2PHTcqRkZGo7uyLBaH5B94onyxU4v64Ueea7tg1Rz7U3A7v87MfCM7BP5JccaovNwxTbu4qNmni3hzt",
  "key11": "3wis6PDLVDkkpmfYH5wGqfX9UWVzpCQkGvzv54srhZddr3Kzk2nzn8GVwmUUBhCXEq4BtpRnvJEX2pYeagu3EPx",
  "key12": "2VHz9Bg54Z8QFusYmos2VCRpm8smyN1j4kXctyCfXrncLJxdM9Fv2tRSxrhdt2KZssFqoH5hSnbDLJQ9xG46GmXd",
  "key13": "4LiqQsXtSNZtZYj3qME2czw2wgJ8eRSysEVfhBN1dqWBbEWyCjeM1G3vqid5o4BdyD3tThxv7TVQX9Wck8zsGYXu",
  "key14": "3iDNW3GxgGEmcmN9r5RHhpFTLRo1VQYqtReigQATVug99wQwKUAo62SuHwtD7nsaeGgdGUriyFSCwjAb4FMbBoLt",
  "key15": "539P2y7G7kbfosapEFiEC3SxArPdLEjE29UrDK2FGdYCLNv6seEX9FBGr3d3FQXCZgBAkGVEP8eTAVUXk2HH6Zj9",
  "key16": "2r6zCtQdijfgGqKyY8Ktk1cvD4Wxer6q2fS6toQNGocxzJacip1WVnXqNG7BfcvY3CShzZbJgPjQk8n7oTAZe4hK",
  "key17": "4ruGKr9f8621sSpKZa1pSTouLG5675tWcDdtb7XMfRKJkR4V2FkXkZcLdCiHLVfUgk7cZHN743PJGMpECU8wd8pH",
  "key18": "3dKjPKR7U3zV9ws39Dv1kimfn9poseZszh2YbD2Nv6CjbwksGrtCuPdbmWERMoejmqgfVwsRRQ3nQZSt7rgQkiJg",
  "key19": "4CDWUQy3HnBGRuZPhSddELFoHhsZQdUefKVHnsU6jFao5TTynd7gcBQb7wsHCgPayHJEV5oSAVtjcuNRr1Marwpn",
  "key20": "3rmzsNfiPAmzM2WkUNp4CFvqrVPKKS8aZ82dcaXoFs8V4wD4nU9GXqRZuCgtspmwFGB3xmRFGXgZmPS6yRHFryn9",
  "key21": "5b3MuhQMaX4SieTR5rcZV5AjW4DMNXSEk7zuLibHhzuR46hW8d2SGJfZq7Gct4tSK61e7dtsHvMhfmNAQj6TiFzo",
  "key22": "38ULnP7qBpC1ni4FY7MdEKRw21HaiHXR4ZdHiv9YbDVyu1TCXbC6RUbKRQRyMjTKThaZZFAejmbuEwrfvczXEMpn",
  "key23": "3FSP9fyM9kFCEE8DPY39U2LWJXvbcCzcrd7KsJqAFAd9oo7JSnPsWietgobcWjc4KXbuGxXjYXqNa9FXRPXeP33T",
  "key24": "26NFi2BXvyVaDorNTAEy9guhU3Z87JXegTBUYQCScTbeChQKQZ3wYCpmWFnY8QYDn3zZxriJCKcyFqHKCZLuZFhQ",
  "key25": "5JWwMqeszMyjWErd4S9yfvH5Ad96cXCPdqwg9dpwgtvCQsn3R7DqNqXbXrEz3uBHwTFD4s2njTT9JSPzG2Akwa3m",
  "key26": "595JDsiKro9UZ9SX8Fc3URFBmhmraNedXc7hkxo3CUW5ZvCknZwyDEnm9xN1Uh6yMBPuj8UbV6D4fMv3ZPLG8q1y",
  "key27": "2KrN861GSxyjt6XH53bVMFszRwm9m1BbSsY8jvjdZkkNVVfTQjvyN8Ap2KKb5ei3qnRod6uvoeLQ4LGTrzxLwZYn",
  "key28": "Meet8B48WVMqGJbL2A4FpbQKNsRhqmad923KxA8rFWYLDSNiCMedTE23zwFnwm6J63x6b6Xj2MZJQaFUamkyyh3",
  "key29": "MoWFWL89pHbejdrCxN6VKJ3YQCvFuV6ZiKryajz4xctR4x7e8LjeZ8NPLgmNMrsRQWxgRa9EWqWY1PyLMUBUikP",
  "key30": "4v5q8AynEdsCqmek1kzhQr2GptBPdFzP9srTXMfyBppFBw4x497a38MW25kEBEXSwFFT4BcJhGwGuaPih4CE19Ha",
  "key31": "3y65rwo28jwxWU7w7B4deQncYsbc6UUfb745YhyhvrmBFBCTMSAUrBNhMm83PvCuFF4srHAsLUeTfJMsGhLCbzPp",
  "key32": "3XF5EQM1L21JwzS3AfizSPwhNUi276dA3f7nLiGLgya7pYYhjFybzVC6tqFgCCJ2XQjP8Mrj83Hawdaq44jRo59L"
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
