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
    "4xQT9DMd88ZhH3dLMjzVuutKCnMykka13GQi5DagJEVFqx8qj2hw1nmh4EkggLLiTHL64RnFKMp3vJWknCwmCYrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiVDtaqVGUzW3JX4aziHvM4aT4ETEuC4MstJzaKA1Pparhi4Vn12ZEcYSgeJueYELQHqA1xHj6uqsWtw12rRngf",
  "key1": "BHERrLwbUR8krxkJTWi2PoJLxTYaLqr7zW9QBVinvixKJ5xnhPz1A4xCEuLT7EiGCjzmKBcLxKLvCd8k1Vy4K1L",
  "key2": "3AoWRBpVX8SttbVFXeGiLGhyPPjaW88CoQ7PwGvebYZtMHoqZAoyok9XYFRkfrU4tU7TvuduQB9zw9oXoAJRjcpr",
  "key3": "4SUS2crBfgzkVzVpG4CMzkrG6nUtPMwDnivDDzz7KyHavSnuLt8mS6pAFZGZy45aJb4btyyHi1ekVkGjLFk8S8Xb",
  "key4": "28hWTcZkTWBHphcD3prUj8FmyDzmJY6FfxBLaFVdtNf6VA8n3nM9cED22WN3qkSpwTPsnaDgqrj4cGCEn67zuoma",
  "key5": "3WdWpAt5fwLBWB7kmtjVgV5mnhcHzAG6biHRZfq1QGJUbQ2qYSjUz1AZLcWohkiyyfDZr1ZQAMmB8fCJiwziuFna",
  "key6": "5c1yfrCiZtP9jErBwTGv5DN3mfCJptbfMJVjLmcMV858ZJn7f47rr3GkrtAgtuxWQEnMgc8MqTXhe5WA9Yn5XTrQ",
  "key7": "2nwaiHVaDkt9Nq165tjyzvPFibDraqnfjytdbHJABQV5Jsgpswgrg3fupSBEHDWgYPnitja6txicBoUE2vQtj2C6",
  "key8": "124yvs64qzRkVKSCYNkMykEDY9xKL4YZB2V8VPwiCVaZJCF1wMjueMMD3D6qyxceS8Bzf534nx4XNgZm3qRRXf55",
  "key9": "5Zowy6Mwt3b1Ec34ZiWAiDMTM4BAQVydaRmX7DSCgae7qjfwKFhCwECz2aDX4Nc24sUjGvPk6kfgoa245YUUqbKP",
  "key10": "52B3wdkbuSPKNvv1cbfuJygdBFYZTwjbxQMpxVDQTvqNoKYGK3q81HHpNpXH5gekWrmnJNzGxKBB5oPvXQeWNFSL",
  "key11": "3tekp2wQRTnmVmgJxWCM8LMqjPuGTZGsvsS5Ek2iUZJu8HTAWX5gtfMk3HhAiEYukYYeRRtMpsKy8aPTv8hhsRWg",
  "key12": "vGtLgtjQ7HoTh1QSj8RzaHA33j9WaFPqgd3yw4ePZyrRa4WeS5PFfaHFXrNYvHd7WoLdzY3JmSJqgN1F2kUf9P3",
  "key13": "3r75SeUViqaNG2Tf43t3i6JdtDeB3KRshsLdkh1oPERiDaRG7oKbLdzzTMQALdqNG33PAMUfmqh2c1fzBQ1fUafJ",
  "key14": "5bQup3ipQrDzmVAk5dLmjkL91FFUfJEkewUbxV7J3dYyuZzWzMP6zXeShhPUT4A4So1QXhgwc1zwY3ke5CbZHFoS",
  "key15": "26RfoM57nNsvZyvXsmC5cuWjpGW3GHr8m3bRJHGrrqVMDreKWHqkKAwCc7BCt13ZzTLqabDZwtsD8XziyDHxVuY8",
  "key16": "vgT4R9tu6ajHQXxay6mv6dktDQ1DmDR2XTy9fL26eKca945tM99UBZVBesP7LP31bvq6nVjVDpRyvXXHDDG9Qe9",
  "key17": "45kQLKcQs3KxfiigTfxuvK458WPTx9gEVQ6bqGktWyXtBG6tfKxoEVCJmKer41is4wA5r4t6D38mFMGh8YHxEbwE",
  "key18": "3U5J4NNKHRYtKcLP12xSoTi65MKzri5KaRHarsTnB4SezVr2AtGkHm5Dcc8SnQrwx1GsG5iPfQRbdWLYkmkYwGEK",
  "key19": "5gNkB4hunX4nB3zzxywHNM28tT5FjCsp8Zk3QdpFF8gz567MYCnCDSvvPGUk3SdytspJEUxggZNP1LKpF5AWsTKQ",
  "key20": "mottBQQbsXbCvLoDMYS3wVYvB83PPK1GncyWiscuY5tp1MDEBtLteBecj739JE2PUr2R2muRv3ei3q7AxnwgPXj",
  "key21": "4C31bJFKYoUjics3LVRTa38NvaaCgee7ebjfwGk7J9732gKFq4ttncwJZHkKFZTSP91rzqpCkHcadpKmfXrpEGwx",
  "key22": "MeiRu2Nc4DyeR86Wo3RQoTr1VzaTr518fLrggn2G8L8u6wRcqLgfrKhqoMJydFJsiZvjKWDgLAGCSK2tRayxgBE",
  "key23": "5xa6F3UYorzQwwzyh2bD5hSYqenyx7w8bj1wMtwbhMkKZDj9FoWA86LppE33qyAmagtqQ1hN18NWQoepr1Kp9Weo",
  "key24": "3Xf6d6bba8ehgUWaoFyuJQnV9SbtMuBAHXTmc5nbQh6f8mZj7uQTKNk4149hhDtKsvaN1axFnarER9ubbgfcekP5",
  "key25": "3QYHDy4hDEmJu2VL4yBDNqJiQoCUcnR2Z194AtgGjtBYFctiRoZP27xNpBb1TZhPMEYxFbycaQgRizUMDePD49hf",
  "key26": "3HsCP2HevGEKfmcVeJ8dzCxbXGd3c8G5R3E9RPzWUYx7XL5Uv7At39ksYcDPjYKKDW32yV7SmsDdXXYb8vTxXSkK",
  "key27": "4neP5y7gmSSzC5bVcaxBp7CZU92puF5x5qecxy4wtXv2XjSSy8eubErxZin4fSPsaS7U38CcFiwdH3oCwAUHAY3H",
  "key28": "4xojsxXZ7xazeGyrknFY3s4ksBuh88sYKrAY3LQFtTFtMkBKx27rBzNtWZrCwUA11E6ke8SDE3CBm2ijmdyqX67h",
  "key29": "53t4keSv9CVmdoa6Ypp8vnR5YcizJxA9RqCXLNRShTNYxhTEiz4G6YZ1GmgJxBcamzDAJUs23Gi5xVvxaQHA7LK1",
  "key30": "jR8tK79g8veJq33d5NAroYezs9kq1CCg9QkZT6kBEEFwo5xk5AZuU2rof8pD9q5zGjv4nRZT1zngA4fDQ4S6PJT",
  "key31": "5wxecrVzmNXckUmoE4N4BxnNZEnf6UK7xwTjmnFSRV2BHwcCtnju1YZGey7R6hSJfM7X2qNPyXRBoZnmRhmWNaXh",
  "key32": "3FrZD2N9eGQRWyEXx65uE8CuFR8diWb26HnBsn6GVzSLHe49MnHhsG8wF4pJDMtf3niaGxzDxekNgeqaL4fPhqa2",
  "key33": "2oaA2cKLChT7HXiueGWCDHDpXZ8LV29EuJEFQnZ4rDGKxnWwEvKAXzTBMjcxVpBtXrYELVZYoJUv4UogYcrAHbC6",
  "key34": "2fipwvwiG2tHvSPPG99L6TDh76AvihiBWtNS9xf9Z3GHyaDq74r3Ezydxy1jCoaZCjUVwXsunL2BuxFKoQwjTPW7",
  "key35": "2VNLGerrbdxij7DvXyYzdeTCwHfxkKgLRL3XfidqgtroaapKDkVSyP6hQifs6M94f75XpTTYwXEgn9RXcJKp3ESy",
  "key36": "3ZTELMRpmNV5E9JTSGCnXcTZi8Cn1jhS7V2Y2anBmbxQL7MWXe7vP1HcRKhQ1JhVQ9Ungt5VoJuCEa6P45ipGQr7",
  "key37": "2nmhfjsw1HEw7M5qJhJkLVr2439qDLva9tTTCtQNiy9nJedKsUYyZAL5k9bYm1ENBZn7pAsRcQeGWW6TbY92TMrt",
  "key38": "13hD9B89avFqFBsfXzpJdKR25tpwFuWZMUZ72DoFg17XPnSmkTHCwmBHYW4g6vtfrhiq6TPvgnDPUNDBAJjAwRd",
  "key39": "5FPy4DVM4kMJRvEsyBEf8Pvc3QVeaft9xB5QTM4UMyNt35DYpHUi58c5SaJKt2uuqYGhemioDmF6LvZfsfPU5WGm",
  "key40": "3x6bMUWhGQ6NF5eCSrQz7PevfYDZ4wGBQ7nDKi6DXBCSm8QPPWaUseoqcTLcgAX2569nKXdi4jwGqMUmgWL3xxZD",
  "key41": "RbsaXwvGd6DcvjZYScN1suzXgvbqtHb6xhbTnavqvo3kDKyMDkuzzDhZrWAxMJBtX5FShop3H96h3MPPhY2e65J"
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
