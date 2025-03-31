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
    "5mZxC65V3psCGkWhwLXxGW3kjHzFwQk5bHjVmaosF2B78c9MZWHSzXTYgDg3uP7BqvBHem2tJWrtAqt4wfLjUAHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGUKf3iBr86rXMmuboiTAJ8YPUN1MWEfokWUKvAEYX1maYLjXtwJW33ofabRJcx2aBCDUJgbYp9XpD9YiiLuJ7Q",
  "key1": "36cekVBFkovF3i9r7XNzp3iqdgkjyR3cRcQbA1tXZ6CtpJXAs3uDiuPDaZ8ehQvudqjAUzVvQKjveKTAj59WQKeF",
  "key2": "e3WywFnBS1ngcn1T8Z1HBWB4aATJwUJPR42Gy6asHsMZ6n67whKNXiEr7JtTHt4ZC3xojpg4tzqpNB4rSeGtedY",
  "key3": "5Rn7dQnPim6aDTtzJFTruuRTTPD7dXUapPXFqfyFs4VXTat4Dce9gpnKhR2mQGrmFxJAVSniZwfGm6Exq46pBgao",
  "key4": "5XSTnr8S8eu7UU3dpUegYE3pgoMJoG5RPEY5u6mctyhKSXkfrWBKWg651tnL2qrXSWiRJEzfcL6ArzvhXxK8isZk",
  "key5": "CHRykanyJcbcgPBnCnFcvVraVfUaySUSBPmfHRXYFWmsoXZoDkmt6Hp8ycCaLVAHQ1oozDRd2VqsJfNf3GaUiV7",
  "key6": "gqD745KSP7HsVBhpqpPJUhk4hQFPS2i9KbtyNwdNtFFJsRdLg8MbKvaamVfGyDcT17CHDbTYJZwTag8XBM2WkBL",
  "key7": "5jJz3BPpPzWPxBi7TzNXp2KXqYTQZNu8gQ21GiHQbasXoKEtDukQ9YnkXCM2uJDQcGf6NWsZY3YTexMjvF2fDyd6",
  "key8": "28NW4xUDDnRSh92LnkKzgktfBhLDb7CUn8Qcyo8B3od2AuuX8c4m9LaGoPGjAJ9f7R3HkNa9EjWNUHELWYjYjw7A",
  "key9": "w5ZrtCCPVZ41HogLJKfboQ68udghJwGH4NejgLP1hZRb7U54dtGM8B54an53UgrXMu2dVPcXFiGPBKfA6WF4L4b",
  "key10": "2U6AsaQ7jD3VdWYToVkiE36gb2h6rEEvq4x151c3rAnaude3SuXF9KHcyB8UHbuY4UHquM4oun2R8UnQ8FRTWVm",
  "key11": "52NZUvWmRBFRLhadQD5TrdRVJkRiHPHEvm3PSPfm5ZFW6ZLXiqLkwpMbX3e1YByaK7H3N4pRBTmTQrZQS56qWD6y",
  "key12": "3EkDdgjkx2RnBj7wodNmEartKb98G7au1PNj6hRLo97kYYDTF9cBp4Zbeq9q6HvrzUFC7fqsbSPKQiUm97oBb3PT",
  "key13": "4nq1L3W2fn5fus5ViA7M5VRYSksjKMZmbeSeGryQWRx1fNnvKkfEu3FmCid5RSBX6hwtGK7KQHcVCAtcXtcPBKJy",
  "key14": "26HDXqF8f88FpAoybxt4s5NanuN7Rm76kiwPrFBiWsFF4bBMYnF8SkGHPsKHqxBR1TKe8UWy7gv44FXD48mai3Aw",
  "key15": "3A7MrWSpPnkuW97Z8wMoZb8C2W9sAXHUb9sdzNGrFBEofVAwY8FFQsAWDVnBMXGodiCWC7kbU5xLM5b1JtKuqF1j",
  "key16": "2aKFTVN8wTzzY5cHNbMCnNCC9pGLoeF3hGQNq83fKQkNdyzexy1sFVeuUQdbhfzDEz4YzPGQUSr3mGXhe8acF1SF",
  "key17": "5uB9AEzZrv7ko7BjzajB81UnsTdmxpBQApbhjn3UAEZMi8kgqfBx3YLPf8eAZgaYMNEU9TxceU22L2jVArrpDkz",
  "key18": "4HRJMQwa2tX7K627frvbzLcRdpxAb79okhZvL3cwbw5PrgnPAQ7uXJ6E536wW1mzgmG9DjTsrreAeoN8TbUY7Hf7",
  "key19": "2JfHhW3gYsC2Y2wm7NoqjBDRCiNfyuYBuBvyd74KccUXE3ThUqAiN1FCmYANqStFod2RBNiWMnHanFrcpmtcPziM",
  "key20": "2Fis3ap3T1FNo7v71VRf78zomstSiM78YCUEYYigNv8YEsWr7kx7tQwe6PaFi1tioknmQ9aAwp3tcQskHAWSvagm",
  "key21": "4bU8qWcHWE16dNBHAxaqsgagp59yf9unspfoh5CvQTEsRCG3s879KCEqusiJzL5uhZPXfHZuSjv9vEXXK8mpasCm",
  "key22": "5HEfNitNWoiKpReB8LnK9vtXmheYiwQY7JoDBXqrHVYQf5PhQHy4wBiscSjCiyA2TmTy5wQwCBY8Ey9SoHb5aZYp",
  "key23": "5ni2cyFXgu4bYvTsVYdFPBMjHe32jwYgz2pGNmhL84KRDACUndgQVaoUb2Q2BhFvwWGqhRvgycLor8WPLQBDnixN",
  "key24": "pioDGVCqMoZZJYWAc7h466caBzcxQWyX7DFB4pRMZezXp5mL3dz32rv5nQF9iNxDFdNQxMf6XHpErUrfdodCHTq",
  "key25": "63aDhRPsticbWsGhJVFGumkDLb9UKVMfe3KmRYZ39iNRNdU6bDM9F7QDoff7G8yASiFFheUSuojTFo2BhUkz9oQs",
  "key26": "4PrtZSJB84pwKQkjtqXvLgr8jrYpcdLeBVmsH84tDcTQf6L93gbL79JRAsFqDB19v95gd8igY52xGPHvAd1vBB4A",
  "key27": "35GfMkzJs2ZypRvB1Zp9rDpT91Ap7w5ARM4ZGx3MFpoQZKdoRvRE4d8n1DA1tuVhZtfYCdb5kath8Wj4i7w3g7Q5",
  "key28": "52Jn4XCgBy2378AE4qn1ryTNbBGubHDGx2vE7owNsRQZdD2yFHNeg5mJikd53y16EJGWdtrP5e1o6oQfAsEX8G9k",
  "key29": "4KSGtTZBFt4oshWfTxNKue6RNxHCeeVU6A1ZbbQx46itngwyb7B4y8ijrGmD67gEeEb9zp6FpQPvzL8G8tBUKqDK",
  "key30": "5tgVs8jWnZB8h7pGNXJi695P8HRM12J91VBA9pEo1koV2U8cVyPUARAVyp1WhvokeMsLKGrirvMkooHQ57xNPUah",
  "key31": "3ju1FgWgyLcMpQBhufXrCBQd5nLrD3DGpGwDo2EMjnqe1ixKicYzqzRmoHSBG2NZRqZ4aDdkyUWp2cCzGGG7A8Uq",
  "key32": "3MTDAenP7rSBZMHYZAhTCr3HamikcUz6gQKtYRRdDFTbfHhkQjf5DGeDnyKaCqhUoJ8s6GgrCjkn7EpAhdQeXPfn",
  "key33": "4vHZ4RoVAJem9fy6m9SYWJ1CyiwvYPkNyCnp5eHWrkZfT1XkZJ6pM5gJ4jUyoYwqKngg6g9KCTp39jPUiAc1c3q4",
  "key34": "31CoEYdERzAa7LS9Wmrtik9XuEhtasNXDZfDhu4Jcf2v5jiDmJPbQSXJx7YXMY1yCNv2aqpBM6n6ixtg6FNbyGh1",
  "key35": "4QE7NNfattd4VruxbK2497z3cqu72823ifWoEWt65rGTouNtkTYTyTfTYjbqzRo7m8GKk73HSyBTCh2htjPC7CDU",
  "key36": "5KbM41ZBfeThCeF98SAfYP1xAt9xT13qTznyr3dJq6kSEgfzrveqUtNXfK1phwc8LVQfUPHEsKYo1DyBQFWcjBgZ",
  "key37": "3hgwi8RYxiTYvxnrLc6hxqmUp32VAgJ1vLbkQsNy1Rf4KCvXjWGnARLtVLetuR3ZaXp2G2p9ay6UUtBSEKKnW98X",
  "key38": "FF1jt8ULynjKBsac7wFdDM6DbY8cRYg7moVy23rq7twQapqWAt1c2ZjiVF4iS7nvj48LqWHNnWNpnapEHG2QYQH",
  "key39": "52xVWXLKtRbYaEJ1Lt93FKNgcLJCdUWhoLEqgcJJno593hFvMRHeMLnmiTKvtQypvqP22tu4zKptqizwvAu6XQWk",
  "key40": "3XRNRwAC91mwkHogBS54cHbpkYtjNQAWH7oQ17346kAoqpGcbmNyLMmZLbkfkhkeQ5TKSuQ8yw7Z8XcYu5ER5rw9",
  "key41": "4PqRzGstuz9bRPX2XvxH5idhomhXHpXPEnRKBtaFaQpqmQN32B8kjH5Fmznv46ZmENtxLKJcxdN4Z4xAbYShqWMu",
  "key42": "4MSTvgcBjQwoYbUhPvc8QnzoCFd2nxPfS3qnBHPRz9JUekgCW8Fsr4SB2BUtyARMbSqSbBpVTxHWqCoWpWGo5mCF",
  "key43": "63ULVLMyb2MbV8USHVRB2QRRJP8QBxiUFb9WS3GQtx6yLWy2nxVn4EitXFuMb8PGyiLtA3soqaVWn8mDAVb7eiXh",
  "key44": "3aGXKnxWzWtdRZy6MaqGkNdgM7xiY6GMxJ6cAhsb691XZY47JteJTF3APxSZhHwYMTR99nLUi8ZnDiDcHfegwNMR",
  "key45": "3jHQcPFgQhNT2EtJNsXdKwP53iLXNEcGrvWTGKGu3GY3vLQEfCuvnUw5k28QCCZkdBHrzKLcax55KyW3CJdv5gtL",
  "key46": "5MqGe1VeqD4dQBMHgvNwE2NP7d7dZ7fDGBSUHkYXCvDJ81zA7EoiVX4h9Prss4gwAGLvjFi5oF9uZE1bQf67erzb",
  "key47": "3kPa956Ge2hw57xDTYY1wGveAKHkrRZZe4UvNrf9QcmX4a7F78Z9PwS6SpvDvbb3c5bRJNS3ad4nw1j7zDmgsMm",
  "key48": "3gHjWUVZVxa4CxnDij1KZW9VPaNacZq7CmdzKjpQm5fAGe99PEjXJPnBf4pCUtDbzrJWg4oFxhRDbpjdgZ6VQ3wJ"
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
