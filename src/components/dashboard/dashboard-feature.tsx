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
    "5pZB1fTCcrjWKhTznWCA2xUuSPViLKqDfPeSM8xiajh1FE2nJdiz8ddb9NcryTPuZU923zcajkjX8Gi7oiV7vdt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66quSavF6vqmsj9pGMcm9JEM7FwJCAjrtj2UB4PVm7UovP8h3q51JrgrQ845NwntScTPzcn2U7TkC3yVa1ezPHUG",
  "key1": "4XHF8orPeT7gwPoK3zgiML93hCKWi6gsbGeqcgQ1BNr8mnj2hr7avCBVZNGreqZttbSURSrhSLdkP6cWDMEpYChp",
  "key2": "3zW4nCLUwQM5AjCCsqhhGY51YbqpXfWcdKXDYEw7EWRqsALT67shKeD5cJVsProJ7u6dc82qj6AW77t3pUryzsjz",
  "key3": "2a31C22iixJEHKBaLLzff8egzzkjzs6gBinXSUByvNSeKE3kQfk6pMc2mPrFiQynVAjAsABFM87LDbS5RmYc9ds7",
  "key4": "5Q1sWXqP48aAjsAHunJcjRGTEzeqshZddNUK1eArp1wfmREivdWQPCySvJSgPEwdXLS1ByQc83VL7pkWzVxFmUKX",
  "key5": "566N38LYBuMvmXrzMTCB9sFFXhPwhqa42r3p16o51NEQRd27QxmdyDe8XesGXWfa4iZVcmwWH3Uy5RNVhJQTuqCy",
  "key6": "5Jm8e8HvpbQKXiEF6NMSDaxu3aLta52DEnSqBQM6HRRjHxzaZtjSxgkmAWnDCct71sSBrU5LhXbWQUZjsfjhQFrA",
  "key7": "shLQgfjBp6APnYDtuqzjNwFnv5WaGfrKJgAjTn9gEoiq4bESLXjEHmmNp2GJDDvnfKt37dzKa73pArYMdYBeebJ",
  "key8": "5qJsgXSzLGo5rP41cMUNXbHbXopwcoEwRsbH8Voy9wt7uZPjLDJyuFH3ubCPLmgYJ8GTmATHpvBJTRKJmB4WvW5M",
  "key9": "3U6xjrJfUGdcD2GRvRM8Tm2emEo4HyPoScEsjDogua9Q5t8zCWfcX1WCMW78yD4fkoZe7hmUNRxdR5gVZGaqCZgw",
  "key10": "4sHcYSfmMfyzpMVCPHrMuhjwjksGb6hfJPEmDboYrdBbkGYoZ5hbzf5rYjzuFhJQjkPeNFMWrsPeA4AwNjGZkyDc",
  "key11": "5Q8g98inBvrqHfSATCDEBJ7fsCXTkhtYnjbspvkyxdYQdbKBKhJXCZi11YG6Y9iJrJVvxFzNrbrYu6Sq4AwRFyyH",
  "key12": "X25xRWuF22QivRCLGecmJZKg84HsungQnwsts1BkQoi3SezMDm8YuRVNpBhPZPHxwzvbtTPNYbuvbsvr5xHk8v2",
  "key13": "ZUxwG5zu7bVbRDF2F7ZpDPipWQEpiZLLMHnGLdbgbGHVQwTELVDgUFFuCtjZWunYjkN2cyVxf2gnURAkqavXndZ",
  "key14": "35JS5TSqu49UfoHiXnnqWPHt6gYPry5xrH3A25TZ9aTuuBcJQMhUqApCYCPjD3wsWicoPuX13tecnD1hwdwXSGBp",
  "key15": "4FADGkrqVHUeTMAoPgYWSn4WE9BJf1RnHqRn95z9AyEToJTE7tWVSSi92bmeLoj5s9o9TyJZ2GvEZjHbvtNcfFYL",
  "key16": "4hTm9nt3FzR6s29Gv2bMG6dEZCqUWxm1ru7AeWmNcahEg3ScfQDEYrkLS5qtfyKXr9S8aiSVJXbFshgpam3AaUuy",
  "key17": "4yQG5m1enuPU5FZSbwPJDdo51XuS9daar6Teu5xBj2yF5snq3T7YcZPVsaFUQe9urJrwsrhVy9HRnMLgNMnrkcM2",
  "key18": "3ZDeBnkX1aT1sRLBXjsdHMps83m1TAZrqbWfL8gZzHSU7QSB9EJXY3ijZfGCUzpERmUpRDGoS3dbm3bbsKPNEQty",
  "key19": "4rMrfESkT7mL1E5k7P4VXEfzTki3rxzz2KuAwXaaPEcNUDmjWjPD6d2qRqoPRQKaQ6mNgKWQqTcS8C2Kq6ZhVChs",
  "key20": "7XusRMXtHJtXPK7ohKUB6EBzuCXq5Udube7A9Mj9k7DAKkUHkLWb4uxq5GhFpyQWCkhbijCG8MgGDouyadLucQC",
  "key21": "4oHnPxZ2JBzyix2n4CVopKekgsi7346gNPr5gHD5EwdJkEfHAQUdxyPNvf86Rvv2QB17jzpcLiv7FJSncoHTbSe",
  "key22": "2Bdu2wT4cUDg8h8rjBFVgLfShpAF61y2KpXkbch1msw2mUK3f7PtumHyn5yEhQ86S3ruydZgCKtHo8S92Xp67S7i",
  "key23": "5vYBEkzRHoorYnYYTwSdx69kRZsyTXcRxTbK5C29T6eM65ZRhyAYR4iksR8FgVK7PDaiCEux2RkzzehYHiqg83cJ",
  "key24": "3Mwt3vCDoHscVn2Cs6ixFXezCD4dZ7uAnbGbyFDUqfB8sMPjK122wqebeWsNgkoMBchy3WmDTk2fHYkG6hvyiRE1",
  "key25": "6pafRVXjNAJkhbH8BCnCLFHWodftjs6p7nGV9qRRQRJHq6nzURAKVJPrsReuLTynGYJ9ttwzF4HWnWnzuj431UN",
  "key26": "66J782BcsKrYmkSJH1Gg5GgXoQKwU6N5s2zTrXKragaYwiiWc3u22tNLrCufLPk2z91eD5BmmsKJLV3tu9tndWm4",
  "key27": "4An4f1Yfubq4B2ts3i3usDL8SNm8zteWV4iSwJU1G5azZUrabUmHz9PnQBkP2Juh44E35Z2k6Evmd1Td9AYRwK3P",
  "key28": "5V5rDTK9QM3VdxvNawraefEeoSEoDPr7vLAtGM8sTWGg5Xud3rgqLQJ4RsrnuDdtpAgAStzZTZskfWd4rqHzF6iC"
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
