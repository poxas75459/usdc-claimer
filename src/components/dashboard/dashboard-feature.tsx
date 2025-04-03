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
    "4DJbyk1teKnJZ8nzQzem6BXF382WszEVmfqomnbQUsgqGXhEntKGUpansZG3QDWKfbAktYaLawvQ5C7xVEkJppDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ty4tPqsMgfATYGzSZZdwpKhkoBm2DqAjptU3zbMWcvKaZhz7uk94ahARRV1Wp5yhEtEqRuU8mzx7xgcQK2QmP4o",
  "key1": "5EJcSgzL7PZHZ2x1guMfapFEPtFBu5Rc8XonWbTRceG9GvG1q8BTNpcxQvUGZ6H7Sq2Huyyuh52abALP2aUAWPRe",
  "key2": "FZZe7bC1XPQqFs3HdtpuHZnjhnVrDSF2UNqxB1PS7qV9dyUe4Ycw7jgZgFC3yThsPs1iVnW6Qf9KG8e3mnTyy1v",
  "key3": "ceJoR2xPjZgPFxmMmAV4jdNa1vxrfVK6JrZmsNsUnn3YKzNorNMBEenZzzF34VuJQYuSSpyxXSjCVihk2NyyHx1",
  "key4": "5mKvq2cy7hJvRxnF6WM7YfCCYUeuAtRMcK4ds5fpDim3iqNNZAU5ZPUooiP3cSZQnZJa7rBxAmYymnyPgaSKmUzo",
  "key5": "3mysW6aszCThbGWyKG2vbN7BPqguYwT4orY8DHV4N3hsdEkqbdAtsrRx3TnZZ4KqsK523ew4twKMpKA8NS3hxrZt",
  "key6": "4geUc1VseTK8ViB2adPsAMFeAC8ZgjG1aVRprQAJuB5GqC1XYDzAjXLyniFt3CdubfenjtEz6MNFFJi7HpxiKrMP",
  "key7": "2fab1K4FqjD8CwhDv85tjhNLsBsxB7oHuPYMr27Ko6Hm3N82x9c8ENGzqZaxikizCZDHFQ4TyBKAXNoHYshu2oGs",
  "key8": "3HSap6CVX1nVSuf2U1qCAsnwz5RPdcJJkmMPoCgqCVYXx5vxDScpE3QsEueVtWKzjMCRi8x9ZwfDRziQUuG7Yxqi",
  "key9": "h4GLtwJNCLXmnsz4gMCSJY8vAYGnydQd4v6dX1e47xb9oSkmzTMwLfqyiU1BgTLuLbPKQ1ReWq8rNthpkBLQzyb",
  "key10": "3aRFfeHyia4TNXbBGYmSYLp9qQqpT2U1bJGZvURQMJBX7qCTGTcCXKRRvvLV3kFDwJd7oYhNXVR48H9YfzrqSSAt",
  "key11": "31WtR9nhYFdfndf6GjcLWzaZvXAkk6wf1soC8mcwwT2fWkLBrkecbvaaFSgyCSEfsbFm1TnHU2uJbXmaRoDc3ecd",
  "key12": "3x6FmLtfKjtFzyT72CmCyf82pUmHGTrwwgygGsfNubbg9uLbj8iFzRLUhJ2ZRZoaVR4qM3QDGGJ1QNPcjUw5LB9o",
  "key13": "2MwXavnx6tmYktfGPLs6yiMNmDnAQEjgKd2g6mTaRZUN6XZt7Bt12cKqL4D19DcEgiZmBWkN3E1nZBk51dcVNXWt",
  "key14": "5oAATTyguSHn5mo9ivrGWtb7NU5zKHztmshpEafL45huNDE78yufMRQ3mV7iQHbxaKmWuc7Rw5uRVF1YvKwuCZmA",
  "key15": "56Ai6L8sAkG4JcA3i6AqmsnRgn9TtofvMqErsEpeYkSPPffJ1rCesSENp4CmfoQa9P3xaJnZCBX9gBWfYYfE73ZT",
  "key16": "2sehScC6BWcUVHaQXFo9HnM1kXmDfZadRYPzuiPPUCFSUA2tHH2M4cDv1aRrkKZfu7W6kHT2JXsgVEtFdBXjJNov",
  "key17": "5ZM6kguamAbyuvM54JmQRw4q6d6Um61tF4MJsQc3sDgS3hUr8GyFGyf9enF19ToMPKHbZXBfBJFuJGfkyBeMDZvk",
  "key18": "4C7Y3YY6XG4jAPm98cbj3qPY9n1SVTfcj7H3vGgwEh942wRUdsXqRYB9JBavSbvLYSxAjMEyKE1SoxBFC8SVkN5m",
  "key19": "3NGVtcX3BKo1K8k6DWWghQs4p3YnYhkeFgT8mCAUQKoGyUDbD5e3tB3YYA9XPgMGERbc9u8WeMV8uu78hfyj2Rh1",
  "key20": "2wo4hPiZuXqsLbR4q4a5rmMEzRTEBRZihwFUV5qkhVHuGRnn48UZzHkAeNKP7AQbArj61gRnG4W6JxALDDw8UgYa",
  "key21": "5Nns3dp7fpNDJYF52MFB5xSi6aPk15Q3U4CgaL7SpX7o1fMEUhXBYyt4CPWB6n2ULWjyAv5QKdu3AU1eXUAaxqeu",
  "key22": "3MDrCiQWbLGmzYFrQWvd3S3y7iCLNVUavmBZKgQBeTCmfANdqhcggBwuvGApKHcB5mB95MJMKDdMi53dQsZmGJA",
  "key23": "6KNyjUU2zY4bdBa64DRffykfXVYpv87H6kgLaXUz41tbWPF4nZTTppKLtMPkN5etPH1CHg9EXR4TgFd9EBLDoiz",
  "key24": "35RBzNxZ13SemrTS3xyBrG7vfRYxnvBddLHbgQggEntMXBDdvh1rwkeP7NoZX4X4VJMz4LwDNqBFwmQmBsrB3Ys5",
  "key25": "3aa1PBX3QJ6KePL61tpF4UBiZgnCk8jTJjf1wWcmq1m8j5FMj4juwbUZvt6c4mSG1VXE8t8AixFzH3QP5gamKZmF",
  "key26": "4GxQCeucuH6taBegUr1zEYwHXGbqt3623FJEH9JDVtvEMjvqJ6jRgsufbf9wSNzSx8jaDonrPBGtgy9TyeuZ8oqJ",
  "key27": "2sdCAkJ3SKqshDxeTuw1s4xU5Hbh5RvHYFBBVS3iFZnSbPt39BBab2aSq1u9GR7AghHT6PrNwSG7VzxBn78m6Z1D",
  "key28": "2LRnZHxSACfkgqnpjwyvtr65mG2u8axayLo8aTRX7SCy9ZJ8rrRSGe9VZy8kHk6hrBbz4hCXZUS5TmSg7nhfUVr5",
  "key29": "3H6c2gF4YDTVocyJSuxKsSbGwzzc6KEjocwcr5icUrKszeMZBhAgPftfSaLAqcnph1v4tmnKwJ992csGezGP3k3H",
  "key30": "Z35EqczkHcbm5ZcMbgYbu3qXDmL2FydnZ69y1PKScM9syjpgktFEshoWEyKCYt7RT28Aaa5hNYmPMGd3rEGLwGH",
  "key31": "33TMRiEqwfC4skcf5DqQGspFG7q84rpS43dKy3u7AQDjAwGy9vbB8abwW5P8w2tu4EmT73aEKLtX817zT1V27kQ7",
  "key32": "3ytquvg7cNk5HbsPG7bkzLUGaULrhDWpyBLY9Fr559kY89f47TQjTpzbNWrqFKyiQUNMytVPyb4aLKQR5rh7xuYV",
  "key33": "4tcAH95K34ZfbnrdE6fY43hwo2erGkEDfVU8SrspVZmCWEJCPHA1zmFdi3wvp2efjNBjuQoHZfarz4op2Xav8doq",
  "key34": "4HY5GTfyxuSHMtU8eJPpyexeDtZ1ckW6mpeqzmje8sdoQPVB3KfZqLNSMWGAwYWRrV9ZNeTqZo1Tm9W5CkEHmHkJ",
  "key35": "5A3ro1gYSSQHDoiS6Fd1bm8zof4R5Kqbmci26MzmXoHRN5vqeh54f3BbDAJo6NcwCAiqbmmzZwKQw4HFYL9abRr3",
  "key36": "5L5mQkTaqJR8fmWomYMTRjcRE3JL633LfBNPv2zqBGnoza3RwtnaPiWQgTaXS5nSWEpey5UzJBLSn8aYepsGBLYm",
  "key37": "35gTsKMVYT6Ss49M6Dr6ZJJZNuT1RS41DzHGRXin48DTkXuvrhkzkkrxxHYxWttannj4vuDdbGbsQVvRc8ZxnjVV",
  "key38": "2821ZF5ZadB3bJVnggEMwaXLALxrMsQouvtLTvgSUokmmTxA2LHGHtpUwuM46vckZyfa9NyzeUMqqb26Q6rE2yFR",
  "key39": "4bLa9g3fye8juJi7G8vYzVj7JzjtZjqnNDCNLQSzPzR1hFMTh6QQs8C9fK9nDrYxJZWKDozqRcRpuuEodvXG4gAD",
  "key40": "d5oYMPK7qis3EEFDt2sD1B89Mr47UbRFeigMxa6gj7DVuCAgrz78Q3j13h68HU6sZJrm6FGGh4w8XotcZgERSpo",
  "key41": "5nMRHEK953en3uBF3nErv5ZcSfMD8yfEQ82YLQw6jMEVTNu8czKCQobe81d9DDNHw2S6q34bVGXs1cNPMtL1NEGv",
  "key42": "5jfALVQQsbccqsGg58cqvcwXMNMjccsBXRgydxhUzjATbFNm1UVsa4s4a9ugxxfjD9eu7JBpHJhHJxMvhPFLCQkg",
  "key43": "4eqX3v3kiEWhvmj2vsn3sWXxZku6imKFwfjqRJoqANiR5D1P7vCTWw6gLSVmUwPkZWK67V8qKLdXs4hk2y9NBH2M",
  "key44": "3fkesSxEk7Lc4dtg8FS8mhq7jiLXPTNQVF6dZ3pqARsshtiaHtjG3yST6QtDmj26K4vPwAAYdUkHcfvrsd3QBefr",
  "key45": "2hxyGrjBMSgLqNjdkJ7UxCN7TzCERGHC79aV41joxZrwAUfNEWNYbvSfPv5M8635Yd1RrfNKBe133o2e3UMnn6rt"
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
