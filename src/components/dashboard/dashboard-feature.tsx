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
    "5HJu26scvN3RC8c71fWrcVhexwC1LDsF9iW7jutVixSGa5gRmphq1pZ7mu1fTdEWDHTQnpUpEsJSWJt8o1UMMye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFr4eZUDth4geq4vjoastchjhJy9nXVAL6kZHUZJR2fiQGSKSYgdWL6wS3T9tSm82gNMWtg1mcxRHGphJqmsftq",
  "key1": "5WREMeLBGRMrc19r5jpGevEN5LpVTgipWxmAxWtscjPZ1xGG9b2qqvWzyPaekv5cu82JjkJAuBiE4oe3XFD4zbiD",
  "key2": "26aJxJufVJP8NCScTUZDyCkcz68ssydzcJMZ7G81WgtqkD5bpGv2spi7rUrmLTETYhjttVRZhjJHcafzijDsbvvV",
  "key3": "4nW7wWXGrWUzLUowEjCsb2k6gSkh4dwckhnyb1qFUG4ERzrUbsNccu2hVB2HhUfsmjFX5uvtm8frEtXUWrDUMEx2",
  "key4": "3x7u9Zes32fbY5cYL5sg9w6uxd6owurrnwoH8RZCmTMyoidZijDMyqzTKqnVCu4nFHLTTyfVFDufVUJihjTxCfxd",
  "key5": "5Dv9ShEQRHbnUyx4dYhByMotANPmFHeF2FKHu4DKjWZ9aDK3SxbfQpvXLXUvc1NdJV8SxBZm3UB7ZpLvksyM7XRz",
  "key6": "gJVN8awLxgGh289nqhUKLWc3RsKaUv5fFtMZWKVTgdQ6e2AjwjU1g1oe6Lmxnm3kzX4fkNPJVRe1Fb6R9N4aomQ",
  "key7": "3nXwQQbhku4Ax4HKbSUmY6SYsyCuCmzf54io5DM9ZTuF59RfnoNFrA3d9BMJW8W44856HTSZqh2h5kXRZ9Udq91A",
  "key8": "PsAg2n7uKh2SbRUEaa8cQmKivtwHA5S5JnCDY5tMSZPsk9jBQ6BN4Yb5Gmp5x2TDW19PKDXobVoTbu5FV4hcAv6",
  "key9": "2syCZt1a1pAbYGuCrHxXWSzKAGydz7HMhJyU74Np2m1yQ3QttVUNa8TMv6fVzas9xcBvFtfeRJjYYvzKgcBWeQwt",
  "key10": "25ZhjVcQ4FGjP4xSnsFL6rQLBcvcz9k2eQV9cZpXTtPphD8M7yP8YQzEnijSqkVhYQpBRUKLVzfE9sZW4QvkErf6",
  "key11": "2FaWBt6BpKikiF1ZXRtULjZgvBdLYKt4rcjM5ffAs7fDEnowhoMwhxrw1iCHssVoAp65JsFWkCC6HZPyJcB1V8L2",
  "key12": "wuePCS57incsCc9SzZ3RNT1B9hd1EL4w3ZDTSKT6WHMpcuAgxgVN86XrHQmGCHuJ4zP95ugrK45CnVY5fHw57Y9",
  "key13": "4VxBHEQYZJBhUfVGpzRoMCV33cYhkdX7qtYJdJmrK2rZ3YZfa4jGDLbAwtgD9UKFxXjBBeKbWWTvm8cwEpgkUS2F",
  "key14": "SMpcBLx4zoTLorZA4A1h2Lwj89aYTK89CQfV8FE26BdB3cPTMiT6hacCo9J5gGXWHujU8V7A3J95FjsPZtCfVo3",
  "key15": "Fh183izzZ7UtppKLDbFEVBu6vq4Vr17EkN5LGbosG2rg22E4EvbhWN8Y7iM2mcB3hbKRHfkGSb6uZiPdBvyt31w",
  "key16": "uuhBNPu7emPcbapdnurLD9wnVnXDFLQYu4tHY5M3HRqdzHhZPNkULYnokZVVQdByWj4MZExqqjkxKjVnGvckAX3",
  "key17": "3gurJV4ydUgyXEgh9zySH9XQSuHRCN4nA1QVyFb2Vbtxvdmtafc1LAXr7A72yTEm55a2RSxb8sZp65YCru4389j5",
  "key18": "4ksUd3xUMZTdzu1EQR3vb4aW97ayi86SjyS7T5KtRkdY7JZfu6fo4zFPztEFeyrZSp6yC1neVeFb9r81HCGQMnsi",
  "key19": "4mMk8qVt94moTeWdDpYYHxVWZeEjbGJRk986fNCHRhBckSYQZeyt86XB6uJdqP48Ec7RXVodvFzzVNSbDuN7meFT",
  "key20": "2PWrqMzps7L97bjkNSqpKGmDwgAquuBpPtHC9Ch8P7FsisRYXf9AWUdKfFb7jQyzSPSgNDYLrRM1uFm5Gsy1s3PH",
  "key21": "33QwPqNedES4sXNgGvjmSpPqYU8HhMQGxU6q4GU5zhHqAYPNiq1FteztkfwzKadD4XKZWXZSy2PPacZGmbWjcqG3",
  "key22": "McCBfp2nvXaPo6YPqjpxGrr797oL5zQPCKFZWk9hwMKSrYrvjtjsR6r3UYqkrwSnJshYQXenLSaiZunRriVkrgc",
  "key23": "3mbrMGUWzYs6YhKYNgHGKokiycZSntn5wHwZHstWVTYGVs8zGfLKX344s6kzUuCpGZH7pNjJXnicKR5uA9PQPqk8",
  "key24": "4Nncd2cBUqKycWuQTrHJfZmiNoXfjSwrdQQf6V5v69u83P1oyKUq8gMkNUoe9Fn4R6saPDLFc5fM1GzSdsMk4PTE",
  "key25": "5Z9jnmNSKpppLQm2eLDwhuYcVxqEbz87zHXABViACpzRCzjSbkxFXn5J4eaCpBzvC63FJb6AXhRfgurKwyvSUqtN",
  "key26": "3TFXotvx2qSBXBp4eAH1GYSSdwspixuu58wzi6Vvgu9KyuEpd6XWu5PUQvH4vi4HhFyNbQCUpmgyYxgB9GaHKgyD",
  "key27": "2wsugBbeEubz3EpoUhLpzPLg569QjnvYCH9qCfRnFEsY7CfizAWirzKx1A1rENE4LXTHwRPCgLXano64q7Qe5gse",
  "key28": "5ka7P8wxwH2FAeQkqpc13m3iJ2jxAUpvnugwrxWrzikNQJNBNiqt4G1Ld8zWKu5o5cXdaP5ALvLw8WwDc3V8xoEY",
  "key29": "naz4tEMt46Zh5hhCqbagbr8WxLhWVn5jtSUurg68txoo7LYTwMVRyfRojFRTKMz35GmXKt6qmkxnSKHpwtwhXPJ",
  "key30": "23B5Q8FMy35JpTUF2h6UqnjfjoXaPFtf5gB6gsCGcrRFTV4f96u4T1RK5AprNrPZ51nFHn1nd5z9zZAtj6aWZF37",
  "key31": "4Ln6VJ4t6HHX4xm1AFjKuGz1JwjbPRwDUdtH1t6w6PxNYutFScVsunopDw64g6yxXUF17jbYEDeVFCtrTTVfsQtd",
  "key32": "EuQXU2ntNpC6Ka4qjiWj3WEpDSnnu4bGwaTXvhMYMnzmFKZbm6yQgEdH2uANhgtSLz7vA2kRxQC8WnN4g14WysX",
  "key33": "2BjBmdj8RCLX6CtzAfYLJWVGt7Fi4TdoZZJsnh9HdMFnQcef7vpBgCky8Lv7JJG6pXFfm2FsqfY2ACcUkWXCYuZw",
  "key34": "5MFUR5yP1YmZzA8oWjkp8qU6yjos8df7gjHHfrV5kxNSQyyexAUbvrFpzwt16YDeRWCNtwXcsPpwZTBGiVTRTtid",
  "key35": "4KXtZJn5u3WcSRQL5xrSS6HygKYFKSNk62bvF6W614QfuheC6AVXqDSi7gY5b5BdvJ23cZJb7keiFoeDDWeqMgsf",
  "key36": "3p45cTW6fkNW7orWEqQhBCJ748aWxffjZyg5sL7n3q8yc8Mn5QhQ9ExXu3gs3CtbKoTiDMFazMsUxs2382hRAaKf",
  "key37": "24M75sd4pWYwy7iPfsnFij1LiT4yPcuPrye841dTYyWaNHx3svkySKcykQYZbwfsx9fV7rBZ64ZhPNpvHeLF91km",
  "key38": "4qWgVX4bHMRtux2JREW3SM8grgtvb11LgVTTbqHgsg87GGLTKv2nRsS2AAxMPySCGJZ2V1UC69D5yNgJxstrLuha",
  "key39": "53QjHmx3HJenbHa4Bpu2hWiErPAR7FUFGuQUoUQ6GydLyumSsHVJ7oxix6hFdpKQZqssTaWdTVQmve3GthXQbLmd",
  "key40": "4eGqLbRJhN6BvB8gTnyc5TWfRjqDfoMastfD4qZtffTwfvsdQZbSAxfoKE2ganfJJTwgcKdDwFFLqLK7xybApSJ3",
  "key41": "2SodbU9cEdvU9oCoirUo7LqUYkazs6K9xcagWrv8tKyMxtxe4J1o7D4ada2FHkzbqkvbo3QB5a44bzpB8UEdyup4",
  "key42": "eTQV5KYEnjpQc2jSRLc2ysgPCrE2Yge9ru9T2gimNVo5NqBXXMNyN2DFdYtW669qgPY5VHFmJDJwdnVPaQ2bZwv"
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
