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
    "zszuviQmyXxwPMSzTd6qbiSHQxcRDFDK7tkZqdavKu9X1pprkdpUSwKPEfvkVBScuPesMpknWANfjTL37xf3e32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qevoL3Vsp853pCspE4LhoBCowKTJ6boGhR1iXNtEsabQMvtqqVtoZiZNU3sptM8APXsz4hczVNXW6rkfYv16Bi",
  "key1": "3HMJ1xfNXdnrLzG6SPRSApbExRBSJeZai7PAT5G32WvLuCaKTHQu3f4BatCQYLKCjvjHW7J7Bk4zpXA93FehRJrB",
  "key2": "5dUqDtNTG62tATyHgNcRDtq8Z3qgmi2aizjfabxW9p8MuFanQXwGtXECuk3ZydEUraMVbj6GNxZ6aXYrqywG2Sqy",
  "key3": "25wGq2YYZhN5BahWRFrMeaspWwSzUKZLVhkSWwFVqrBASv9qUBHJ6WLoDifJu21MY2cfWJPeoyu1umF29X6a46xn",
  "key4": "3SY1tr4XdJZD2MVdVkzFkQP2qxZ4xg6VkyXos1mpCAwh4PVYQCy1fzzhgCLgCvWivu48Bnn6bJuBFGMHcJdNgrUA",
  "key5": "9H9KfBvLohxf3SttJJJEMMEFg24Ex7MsEYAQMkfAGKdC5cy5vDkkPX5jQ3bzMowsAvKeK42h9dYrdkKZzRruwCQ",
  "key6": "3vcipnaKfUtz3CerGz5NnTzTA5yhtkT2jnDU7TBbF1p1DeUJT7Gk69xu1rQYr8twEZ98PrDnBHCsWH4CFnLKu1K6",
  "key7": "42TQpwG2Hk7NvCba776LjdVaQPoaKzVNL2qeLgHQR1VbB9kUwCk8FTcryjGEzvWivTc9KV2b7f6cgFNZDwQ1wZif",
  "key8": "2NTmiE7SiUY1NM4MgDHSni2Po91e2QhvrUbKKZzCZZBbS1Nuc3TRnzULVTuy4ezsJ8TZUE4zNJiYcXEbrUfhwa93",
  "key9": "4ADqJPKu7CmLru7V1y47PrTFXoYWWtQoxiTRE3uemkSwSxs1FE4bLYVqDeyXhr7RGpciLE2D5wF3GofFNvrw9aZg",
  "key10": "2Sibak14xK2SuBqDs4d2zqNjSRhuz4etD9wYk2KLeAMLvMimWmSnHep1T1YkPx6qyWHu8gy4Rsa2WeLSL947XrCn",
  "key11": "46adJDa5h8uNR7xydzCBS7HTYt5xaYayKPdEAewVpESRFvsJvLRvKYbeMsyeVKAj5PL8oJeLgsCqkyBjNsgUEAyy",
  "key12": "WiW93hjHNk5i3zBdhfxYUXNMcYQHgEKyC4SNh6FpfZcYgYYWHbQwLfNQFAoPMJfWJ8XRUuhM5BV9jBQxdgvxSaC",
  "key13": "2h72DMfzg6GSAomPv2MVxkwtBB7btqrFDA6mFiq3h8VQGuD456PxXnXqBFWGBe5qgT8VLiKEVJpYHjSis3PLCHk4",
  "key14": "BVvYFXg2p9diKH5SSrA2jpSKzDHyG6cXkNRNcPTcG5LXcnh69xzMjYWnYbVHV6ZghpbDVzCaAtVaYXf7xiRocTR",
  "key15": "8mF6ZGvQPVZFA3gZ6KdLWbZaWXzZSMakdCMifJeUGMXhdSpTDsa6D5ttzcqZDEayarWdWWVEVBzjTEUCjYTvoTb",
  "key16": "3qfqBMPY4GaiqMcYjCYMcPXTCifKhR5MHUsosd1AgVdhipoLBaamWWd5ZvCdRGg9vF4NSMednNe2dWqdXgF3f7vH",
  "key17": "5tt6evLfcfDGQQQfFUnT6p5PwRzSYRnSPfU8WCvMtSg8cB3VmfGDvNHDhbgQSVvJc4xPt98Fnke2jgVuhGSvM96T",
  "key18": "uPvv8xvEFUKdkk7mae7zkSz8Xesc31VTaD9Wj8QE4LzRTySHTpyK8ZoRb5sy45DzkwjujJ3xmpGn3NRzXXE3Duh",
  "key19": "2ocQyGfTTuuUFo94n6i4juayeXbDRrEkJs1NaavvsSXanAbyNfGG11Yq8dHmMT9k594BfEx395oCd5v4jxnLv5kv",
  "key20": "3qsCBYbTLM5g2N5xvUKVYZiBBxMtKStJN2RG89aCK2tHXnW9k4QBya3iFyT8yByVhwCZSLFiTRaRmBW8fgqKjyQY",
  "key21": "n32UggSzAgyH4xmtE9BNbh2b5d8df6An5Rj24VSghMkmu6zZ1UQ7SEKgJnHj18ist1B26DGjdcy4nFs553X3eSm",
  "key22": "2GPQ7PcnNPreFockEG6XRrXgqrc1NkjBfa8Pv18jNxcVoqPmEnusg5SPfFvZV7HXbXjYYtGpEy9QCor4PXa7ggLe",
  "key23": "4XGHi45eCnEjB9EHx8KsjL7nTPLSALwawG3gge9DN8yecQMwtTW19euo1bjJTekRpChwd41yp4KV1pv4yaUkNJ9C",
  "key24": "2Z49HcSfPUCa17wj6vFK16sEvLfeKG2BCudfxkqbWNfJuARy2NWQ7TGJ8ajp8BJ9mFJ748L1nXAc89tEgLBtzYGw"
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
