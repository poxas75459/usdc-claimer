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
    "43dgTwPRd1awUPmN7Cj218wivhd1dEcbMnKUuhxX12eDzBKwA7YT4UcAwH7wZYbnPK41ww81YTyvdtc3eM9keWhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqk1F3ZUd1DPwbag5C8NSmR5u4QLgBKSESbgN2d8nAxjsV7fWCbW3QtaciiycB3utZBhJ4TMWEcatvJ84bu7xXA",
  "key1": "4jBHQPRLPEM2wrZC7vpxLnnG3qsxo9uGQxVuNa6KpKbUwfPCSRJNb8DcMqzPT1BMDdwV6547pyjmUELKGdvfehWg",
  "key2": "2uuNecwQjZUBztf44z3tPs2BnUzwiHbNsvXPfW9Vzd49LT5PSfUtM8zi1EyevrdH7vxZPEaUcVu2hUEyicB2xHoM",
  "key3": "4X6DG2nxQPZmwoYDdBSgt4XhZvSb7gReNaHWVg7mZ4ZKumrNx3XgBqCE1tmRnwYfSahEhysH4RTovwrYzd73Mati",
  "key4": "TUZsw693KxHEoiHMAi2843NrmMjuQBsYwrUoa2YeqYKS2VXZJGnMkV9jK7f2Vw1DEPXyu72MQa3xsFXi5T7kqdA",
  "key5": "4jJ5iW8ETHo3RbYQUkZzR5oL7nonD6tCjRgvhrTivbCmii5MFcwn2ZDrMngne5xec33r6TdFc3rubmLUkjeZCBtj",
  "key6": "3dvsBfDq4hxrUbZ147a39E4zq87Di5Eq19zxgDup7TSrYnHzmeSW3zUKjZLcbjbFPVtuwtujf8WnD5oH1Ad8DJzb",
  "key7": "3pHzthAme8LtuFrCVtRcoAgn26AUD3BLPwP5maRxaY8tStT5VohNvyZFfGhNe2KxMVsTGVEebFT4BbyU5kLqLAaj",
  "key8": "57ThFce98vxuC2nSh4QCZT5fs28tcAFBAXMwsX5RTLR9LS2NMcdvhJaA6Adu2EdmDyAjEpWbaLtetz6vZ7sSspmA",
  "key9": "4DGg3gou8xnmjyutDM6nRqgDjnf2EWq1WrhPRcE2pX6FG9Kdo1FRombvLE8JwdAggnvC3gAsdgvxrE3GzMUGXR3h",
  "key10": "4YDvS7AvNn5jNrtGhK8c3RQovqj8Bkr2SGVxUGHPyPpp7EzBgHbYE9XqT4vwV6nUWtLcERPLdh9BkQcEGbYAdRyh",
  "key11": "27LeSmK7tfTwnKogZhiHp7PTd7eGuyzi95yVkGX2zbX7ESFPitgPrCExJGFhESPaB5uxznpXdm6v43NZYiQpkCmr",
  "key12": "3ErCvjL7W1auqYsYgnxdReAou3FzWDGaCkpiyE4qe9dnL6KKsQomtdyVmLjVKugPFt5i6qyfUQDy7oKgSe7Zf2Ci",
  "key13": "1KaS3zoKJMgqDTzhhzK29Zj5R7sscXGDkp7oVXjYnt7j6X3oDbCn3T2sUQoAe4HL8BEVTogKZinjpVzSQRPaANJ",
  "key14": "4wjbiC9WVQQvRgeMrpas8RfafeCEP2p6avwf9Whb667CsfpkPvmWMUiPXxnn7BipLpKXrqSqmcAaQdc9eofqe7Ke",
  "key15": "2vqvaJKctsV7BzivhvExnSBFE1kMpnyyAXATTUbVrFpkd13g3GNi2WaBewMva3XrZJYL91PuTQJA9NfE3kNPo5j1",
  "key16": "3622wbt9yLQTcbBuhpZJFfvFykNQ58w8r4mtjzE4WaJS5rR6KzkZWRbbtuTfiXvioeanUEBRTt2LTQHa84Hm1bis",
  "key17": "N6MF829usWRx4472JQqadck3BZ6yKPykcpCScdqAZ7qAmLFuag7BQhADRJ3AsQ8TYjLcDujhBx914GL9BM5Yx8N",
  "key18": "2dmsttgYHchhD4rDscGbcUQbUwY6TEQwudF8ndbBk5e5ewoDbPmggTS7RGHBMMyGbMoPWqEXKBeqDwxM6LTQ6EGV",
  "key19": "4fzJJvTFhqfJk1BTcEeHMBXV3d7pgnSyw4iSUzyVbvmT9EVZfx6tjVGg9Mm3wzXRryNTsGHCki9TdB3gQn9yffqS",
  "key20": "2bingxyE6qAsfw4hqskoPQV2fSec9EnpivqUBzL4U26XULQTpjnDJTBjFVLFDi4r4qGZPMj8KxWT5s9H7wFnidEt",
  "key21": "3mE7LthUiUTY4bS9UJkBXGy4WKS6pKNTpkKH1zn9Qvqnjf1jURo8VUjniccZZzw3ejfyJm2wTjE19q2DeAYFNUyK",
  "key22": "4BBF2Fujtiy4ZvXWjX32f5irTYHDJfyuvzxDbitzh4UHmmQVBhChpNCLUurxjvv2snw9ACbKfb2LPCgDwNfkEYFU",
  "key23": "2a1f9uMNpPpRMs9YG64jD5hzorRh1z3AveSVEETpdwFPXezU3qNekS4hsxNSNRikBqi5foigotiVceT6wF4YuA1s",
  "key24": "5yiYvZchUjJ4ouBJPVvgZoxZLAQqnBNAj1PjzngpgrcsADkwDB7gNSbHbNcaDVedu8m7eYPZdFzJbXuS7SPphZ2W",
  "key25": "3yoYgYTKHoVxr16dTTa7iXX6zxb9USHxtZpMja33EJcb47vqFW2HksnqHD3nb9P77NQcAWLCn8L3segMkFWio5QF",
  "key26": "2zgxVN3rVVvpxfQXzFUwPYWJTDB4qvJjuY7j8hYMLnD1NekhbX6rCsCXTJJMEcTt31PQvy1iWm482P63H746bUcp",
  "key27": "CEjyz46dzGa1u7hf6NKWVHUpbb6XWY9K3ee4w95Nitp5qUjDDbqjXid1SmHwakb1nsZm9KMKeU3XD4eyAySHW4S",
  "key28": "24rJ9xo7pPXRtTyXQ6Z4njcy2GCjM1NBzAXxbvAN1gbg9TG9Nx8qWmPrKpE4WhiQ1WbQJ2oqAm7eQYmM3cCExDp5",
  "key29": "5eyjA7Huf675gxpZYcV99jVZY4tfeCcmNNcv35gDqXrjhDm1XzgsSoWhXi7xKGXvxnwsAEGQDZP6qiDZk7qYzM6c",
  "key30": "5Edfq36a3NAJcczCNyUz4nWBP4YtLfToJSKySbTynVYkDFvP5dNLA67xr4vg1pdLThuiUP4NddoZeZ7LrSkhZToG",
  "key31": "2HCkipLsTKoUB5MctavfiTXSNwmG78SCFTnPeKBqpWVoLB6E1pmLJm4Mw3g7wVSJ6mEs5jt9QyNcDvuHm9nWYnSj",
  "key32": "2ZoH78r6Cuvk5f72LRDn5e1jz24n7gNNDX2YbMDHrkqpg8MJv7TjuWTpc9Gr5FsXf4VB4Uye61YKZwQhFhzq2Ypw",
  "key33": "3wUdUoaAmtW2g5AfB2NP6kkfe39VRsmeFFAvU4qXCTK78TUM5DaKsy43rFt6s1irWUbd7UCMNDi2fPRigrRJNZ99",
  "key34": "5Xzg3C15pJrUNjp4ARjJZjZHdMCNdX8FVNqczh1ADr8ctZcyJXR9zPUvnSQyRkehwFMh5cesc4wWXhaXGixL7LFo",
  "key35": "4T8wfL3FhDwo7kgMCjdnCMqN43XsmAB3cuVnjxa115YTHj9zPsa3prKAfpozp1b3HFAF6PRXWmA7SCuJwppsdK95",
  "key36": "2fRxU3gy81pn921gEfSiaM2yJGLGWnREW3zGW1JwLZxQqBPgoETCsMUAaPtrKPqcdHY6bTGQpmzbWet8uwv6hM7f"
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
