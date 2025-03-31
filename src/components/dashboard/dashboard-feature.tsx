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
    "STq9gRmWYfs7VY823whPpmc8R3J274EyMvbEW8SBiBb7Qg4KSXUknwjg6L1nvt2pQ7qdp7ZnAbzK2x2pU1ukbqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ktizJDYBSysC4BFcm2wnpDkRWLCqGyxyf2TPGTD5s5JJD9iqbzaVMCqpkH7JNnfGkGgFesSd1uQGKZCiGsuM1e",
  "key1": "J1JG85aehDbjSmYVaBK1w2tGGtWbp7WDE3AQEfPAn69y7iegdSp2bQtPZ5mNuBXXZMJwvPo8S3piaZHXDdULua3",
  "key2": "3bEtJNw279QpnRSZpjTZNzFan71e6dqSBBsadvMaTejD8o5uPGXz6iZFDtVmdL5szqvrqsqFvu1taB12m45ZZdzH",
  "key3": "chJwBp5dnforawe1fXNVXyZewtFTWq9FC1kmeS5jF2nh7PYKzVJsnWWmmT3xp3y1x9kv11R5ei6yDL1cErN1jW5",
  "key4": "2yvkGeCB3Vg6LComw3ZfeVJRXDDe8eGwtrEr4mK34iVJUABDcZSR1ta5fQ2qnxh5SLAbJpqngXVMb1Rt3YqfbfFd",
  "key5": "46ADQJsvrHu3zePijCvUFMuKk8nP3EjE1Z1o8upyAogMRhfT75e2N63UDNJrxNw9iCqGUuhkDDHwpQbaPtfwbjuh",
  "key6": "C5czT32VA845ri9PY366S8dReLSbdY1nNKH1oKTZSgQxkdUyLeoS5jF9tDAtUXQnmipUakxzPf2Th3Q32Z7mzTa",
  "key7": "hzcp3ARK88mnC7TtxTns2g78ow4qPxyrEHb3iRWy41vmUveCt6jwzNrQ6NuBpySMK6JtyAeu1p8osc4WYq47Z71",
  "key8": "4iBmeSTKWRWqotfv7ycQGugVaR8XtaS5PTqHUTikNC5RaRp974jzEswVYaZYsFJKKeRJrgEYr9swHM7Wsn8WAhBq",
  "key9": "66QwzwSD6BfJ4kvFd5BJgZcd8L9X9xqr8WX9t5ZmFd1W1wUbcBHLhWCNrfQV1BdMsx2AtiMdYEtZFvWbumThgqPz",
  "key10": "4JJ5PSzbbDmjLyegPYnEny1sLiPoR68jzFc37vzR59isYuUfdybsXag8VBvgVdxs4DNqCWrGh5WkL2p3ifvKurXb",
  "key11": "2Mx3NWRixueSNJQoHgdTTRPzeaDKymzRJWGQMcJPJScQDU1fvTW6FLdqBDS5b5vvhSABWWAWMawW9jYbqYiwYDgQ",
  "key12": "5kZ4GrYF2A2bZA5xSYbSPipmDJZbtxh52Rh3U2gVmrjcmRwR3RePFAAHf2py6E1s1QrR5Ld7tcnncKzvJbDo8soy",
  "key13": "2BaG3k6RzVHKvogNZkFynx4oHiHZbwSKxstnuF1mtgYM96YdW3HQUsQygxXEsoNUVU3XoGaSJnqAUDP8Lv9HeaJf",
  "key14": "zyFQhU4UeZT9zh3xjGHgMgF6BVthtpwD31yc9nYQwVCb3a6PozHt75V1f4aRRNi9EzE28et8St5aJfpRApq9UMG",
  "key15": "2MH3y4nnj2UBATaURAhFL5f6WHtYKsqzKgyahwHn4h8XwwvHSnrPkLHmLNkK8QgGti9Z7fGHzUEETgXTksL9kfBj",
  "key16": "5fdVk4YpoA4pR8oKkiE8uJBUH495E1wVLXnec7V4GwgHj3oYGSnwScxtZPdvYJzQVm5KZTL5xqYPynaW5GMEwnC7",
  "key17": "64k58wWXFV3f6BcXYrNRd8kXpefQ5NvuEVwigQ7pmws4mLM3hzpFoHXbWdkCyFc7Jo9kPaLj5CrniubUD5pw43Fc",
  "key18": "v4CbBBfXV51pukCoQg6qJjQaYGyJCF8ydcX1WdKoeD3RvJ4tWyEztHwvkeoN5LG6bRYBkxc72GJgTo5mS7cYAek",
  "key19": "4mLM2PjDi1W9P7FvCjKkpGNXmmtniVKnLKsqorPDyPTaJCbYscWRWLB4G9QEhFnFtxRrxmdiNJ8MCTWPKgzdGyZ2",
  "key20": "56HQpXeUeKkovrb7B9xAGk7rHmZYDGZEK2MfFvTr5bNumvJacxY2GPcEbTepa7ANXZ9NNr7SWqxJqnarEyTwxHfn",
  "key21": "2PVbTDWXV1ahtXywBmxgPbNNF4JFYvHUmeUApvKjdCsDcb3PBgbQVPEhbaMGQE5yCDuLm8t8U4oUwE8aKXkBarNg",
  "key22": "2TEPuj1ya6yHPgs6RvZKAqVLN6gQhXbFKybtZEDrEnaB7tkZGFvAxFyF4o7GxKSUmirZ6ruz3n22NrLHCBBHTtaw",
  "key23": "2ZSJVj8ricuSRx3BPNf9dNtGHzXJQsU4P5QC7BE4S2ZXaVnGAZ8jnyS5mSndCbDT3NHmtYgB8Sn1AkxDnWJx9djo",
  "key24": "2DqE794r3aTwzJuXrAyW8ivWnzu1dnsZKnNdgdZUB5fSeafMSmbST8X8ymU5BeRzoUWXMNKhSU5LGpYLwfyWFAXx",
  "key25": "229Qw7HiN4CKYeKGuP8fZsZ4bKZsesLryQXxQhU4J6eCvhzdcmKCn53EqcFzyZvb6FHNDGsZWhm6RuoMeKEcQCna",
  "key26": "4rBMTGBHWBduNQJ7UcY2f5AEfGunt4BZesFs5JtCapnWMdJBrCowuXhJ589csegrLgmajw3FbQEQ187gf9T7HchS",
  "key27": "3hf5TSHFFKkTLC9JGFZaK24TxE9H58U5zokW2dyZoqWUuPgc456p1yqVQpYe1AhhvrfkcDCGiZgLRETHwJovfRdV",
  "key28": "DUMKUaUTnkhzCVW4NpsTp9cj7pTgFNtSK8N6jWiDDwpPzPoEqq5ck5ZyrtFGmPsgpKNKmyZbY4mkuyKkGgJU7DY",
  "key29": "4wzSFdvW8VACMk4v4WyoqiEeSaPMU3Ca96EJ3ey2vpHiRLQHvf1ppDzLBwxdu5gkNqEERFAwnVaUi7ebQMCLWtjJ",
  "key30": "42zV2LRAwnkDmDB8NpCbU8jHLsd8T5WDZxtc7SEDc4vFpF4ivHNunyaPYz5kSfGzREFpEwGCRiXjMn627NqLUUtJ",
  "key31": "32fA4v6qnzxCHk6QQJo7yHznhjVTGghYcsNNU8W71kHQpZyG7XW9edtYvBpaXBxYv5pncyAApYBTwXbfTecXoysm",
  "key32": "4YzsacGGq7ZG6XiwMdJEsag1W4jNghVoHs596ojhsk1Wm3p3cECeFb61GMLin7RhGXVPErgbeB4XSsJsUnHeTxU9",
  "key33": "2UFsRQJ6TjD81hTxYqtPt25ZX9SfDUyao4z1ZSrEo7f39BJwfo1hoUEzsU3ksHk2nza55pr5a9tN84Ygntv4tEfV",
  "key34": "67gY1xoUFn292qHBRJ731E9w8E7Wzp7f2t6Mk7DMgEmWvhAC1pC55rwdyjjPQg6gnSVRPmiiq9hfFxvmeHHvJ2T1",
  "key35": "5mw9x4bg3yKFKUjuLSa7Q65wSKwgQayjB9EF3TYDdgYvX4dzM9sw8nA4SPdjeX5BUKxRdm7KkVRymLStoxvWUibz",
  "key36": "5ZjpTZ1skzKXhmRgJnucpf4gpBNapC2oDefKcRMQcXXzTdWrFwEQnZaKdhyc7REYcm8xKqL3zM1AdADomowVxcam",
  "key37": "5pRtV4iTfkFn8KcyLU2RSpthk4C1862tNwQ1THS1xeDd7aoqzw7JRv2FTvkbABVanWNRzd2yuebeZx621rarhUCk",
  "key38": "5sYM8zQTpmHgCdDjVrSWghrjJA2TdaE4rRqBp9fBw48SurRQ2ubqRcfvPf9njjW2Uka7Hruh6zby67W3GDkmYiYb",
  "key39": "4MpqQawZ6hzZAAmXVgx9gjge7GB9whHFbWNrX4oa92wup27R4qPpZbun9Nh83HVVt7Yh4Vf98pWezDE3cMSHgv1V",
  "key40": "3ZHL52BvgzdjbczujD5NM7MJYgeqjG32RQCGyfdHjQS3P4WYAnNc38mmVHy6NYMLe7jiAi2x42zeXyCQ8i2vN5ac",
  "key41": "4qvUqRCYUScWgdSAzLZfAmbXKdpHqtKwE3545jDYLoKx5zWUuNVDdDcwNTMFKtuQcHd7g5SCjE7aJPrEJBA5Aqdv",
  "key42": "3DTcyrERWEobCTEuUnYFStV1pvu19YRy8TwRoXTwxT38grGPJNQMYZddJ47Mn1KT7bWAADYjrecjjNhHESNfYQpc",
  "key43": "43KvWHqaG4UtkgixquYowPzSyZmRTKrGAtHdJKNbenpgJuatBooAG5vnhUhwj3U2xwVqwBXmLVN3UhrpSS5RFYKP",
  "key44": "4i1SoGf94dwtGdcPtvbptwbCj96jkqc4Gj8GFf16CD1zZFkxVVznoALGKdHS6LaZ77WehcEAqyndbXSDb3z2fLLT"
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
