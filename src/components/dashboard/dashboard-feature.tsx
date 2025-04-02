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
    "686mDXta5eNcZmqGMfTiApkMuT5K3kHuqBvu4NXLuieaMBGoBSYj5NUwiuPszkcfg5WkeapLyBY3K26bUHy3VnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SDuogoF63nhA4p8rLwqkHRHT5oYZuAUNEDkfu4e3RDR2522ehvvcPH83SMkMvem8eKpL8hpRVa8JQAcaCEmai7a",
  "key1": "5JxfD3yDddYpSdyuKLKWr8vfF2L4QLWMrVs5emiNgNY5yjyD9aoS1oAEGQBFaNKEXXRhcyhe6Tx1zPXuGjALDksY",
  "key2": "V8LJ4SYPhHGjaTd6brpNkPKWzKXHpeMy373odN12zEmvbCvB9tXA3xPgu9XzWHkRDT4eBVUZnF79oCK6tJduGGS",
  "key3": "4bz9A3n9oXG1XuKPzcxwjNM5Yao7Tb8Xc8XwZ1W7fJRCArRNqDH7jCVzhjMqhbudm9hjDJym9NXvGkZpqNJPUSQq",
  "key4": "626F99gEd2DbdT1pozXsVK3beDnKTEnbQPGjkqZZ8GDqmVzDTfgnT8ucBNQiFe1xsL8MEhXx1bcz4he478F92keS",
  "key5": "vthorinwhi7C6q6UEzQiRci1SbT2G6HFmgd2s6tm4rgFeK45i98norKPiXDXeRzEFpqrFHVYEzpi376HChqfddL",
  "key6": "4TUgPjMHGStoxCzg2HJKSHuX5KJ8JF35eDJcFfsXbGpSABU1f1DdPTcp78sneAT9tSF9z8mm81fs4apF8dwE4Fn8",
  "key7": "5xEuX3BG9BFRPpfYtpuL1fU4FZ4PxfUtdxUaS4GckUXZ4YcS96VYqgEeUH8jBNiVPgWSD9vWWGEjrUySM3NpM38H",
  "key8": "5wSZVrFGdEQpMVyKmdW5xgCv7Xsh2Rj2BcdWn3ZHsjnvSzUiLwZLtwfXpL4Y6gJ7CDV4c9mHG76V2kCKDgA8rwdj",
  "key9": "2uJrL5m34fQzcuRDGsYRsDyhPfhA321wkPyX7QPy7tNrhyD1Leu5vfWorkRkeccU13wqx1JxUfdJ2s6Jy6uJAsM1",
  "key10": "5sNHPxashxfJY7dVBimnTsSNQnUR4Q9hQkeqPpwL4RGLpRnPKFtaxqkf7BT8jvTid9Vqfeihjv9ykq925vGhPqxm",
  "key11": "63R6JFbzQgt1uuXGo5ZW56BsPGKo7tbQaH9MZSG5maxVSkGocMJ4J2taGhSKk65vwJxQN8ej5gx4bbaHgmdhK1RE",
  "key12": "BUDLpPvo58Xt29NFxqqASyAfK3hzdhZ1Mu8gKfyNwSjAQ9ZmFB8NrgnXcaggctschMfDZwUg1XZarEfponeDo6D",
  "key13": "4F8wVGDykGJ3QWG8EXTvqDs71kdN32cQucTmrqBtZHMDcFR6DNb6TsVMQ1pKQcwtusApyzRvaUsZU6KWHWanXT3b",
  "key14": "xRhb8dyhZ4Yyn7CFGPnMW7m1dBFH8SxEHEAxWY4CPWSjADfBP8iYC59G7C3b2t6mcXm66Ksj6rUznMK3FghiRyn",
  "key15": "3EiiyXFYB6gKqKm3XGuveE5rqYNfZrCns9p8gqqx5KN28SeBQaMJEFFF9uPytX4j7R2ik8sKJdkjaMtUXS2CDteH",
  "key16": "5j2WCRW9h6rJNYwQWWHxxoVfLBJkCfw2eAtzXUDzwnxCB4mbybsZNK8xLSdtgtifNDcjxkTQCSsxD32nr4rKiddh",
  "key17": "3gQ5yKwhccScVjr511rHP1UwqvRu3UgBNKcH5mZGNUiKWreR1p4NLHCcQ6gn7bhFzBj5kLH5RTfUCyiRBtEUK3Du",
  "key18": "vPZpQsJcJqfauEJyujqfCgnTLEkSvcRHGpf5WMkbD3UY8R1EseRPv92X6RBMHjRtvnFemXupSqZtiZ1okoazCvz",
  "key19": "3bvDFZzCTiCkFAHr37U4BJaVWqtAbnw37Rovsycob7RTbyhuGmFf7qarUTJYiUr9YSqcFMaEcbLQoZHPHguFCfWW",
  "key20": "4SfsRc5giLthkZfRXBvenA1RLTV9NfgZZp461iqMctixw8M7ZzAXQ3DM5PLEJL7ZBUyuDwz8G6whsLjU48X5ANwa",
  "key21": "4JxWmDmtJmth24G1KFNogRrXGugucE1QmWpG44o49C7dGUiqb3zLacvx8RYriwRkc2eVkfKTz7qSqfqKW94AB49w",
  "key22": "Jd5L253b7Cfz4Q8DMVuqGEW1Bup15ztPk5Aw5ed4jzedbFmoyf5hFcxAho4sgB8FTQrMRtBespo5d2fPEHZ8pHw",
  "key23": "43L7a1vrz1HBxF4fnxg1Xsi75XKdL6dQoMiCLuyYF6nEsfQvGiUEgAARqPwWsrU3kT8yUNMH7XbTgtyetcNL5C88",
  "key24": "TRGvAkzCAsbDHBby9wZJYDQ432Qbm5zr1NhVTz7ogscvbjGwau186wMkmGhf9BkafyExvCNriyUJwXWdk2jsw7g",
  "key25": "5wTMgfXh5p9RHz8ywrWEGhxvYf3jrLhT8c8UWEC4pnxr6ZTSiH7Utz5jSANYU51288tE1NJqH1pcE8UBV58mUCtF",
  "key26": "5W52SvmHz32dUjS2vZho8RFwZcTFQK6cyacf6Rw1U5CVfhGe3kmqtqJr9hFHJpMruFnXM3U8v5f6NVfpv4n3pQx8",
  "key27": "3YKE2TBDN1LFfaAEAF9Jk2NCjE4ynk4A8QkENEUQZoUx1UjovPdBcaaViCcoS4tPtHaxkBxC8jTTAmq2wuyp8PCe",
  "key28": "5Vj8DBdbmBpvjch7A3rmJ2rrNj48DAeQBvYcVN58gXinwjTJDSnL2RK591ixVsAYBUHkGwrKCRuNEK7P45D9D9GE",
  "key29": "4nfYaEt12w6wiy6tMTvJsLtFPphr8TzVamHf1fUZiZjwoX8GuLGbAANTq5uqo3e9sae1BnersnLEr5oK2coamox7",
  "key30": "yEtM87b5xWoqiArjLoVuMzjpwEEUrj5buSjVcJcwJmKDKd8JfqAhNSGrPZ9rFpyLU6pbGYyhCbfTkhzU2xFaSuZ",
  "key31": "4yS3jTV7CAQCZRQ6JZ6zgx8AbWhUUVmCoYbRtkJZm2SQYGHomMzbKv6rVFnuetEcSH3JaTtXsFf9dJaBBe3N79xM",
  "key32": "53RV8eWJLEe5AfG7YgM3ry51pxGYa1fBPyLyJHX1eE7CuHusYAnnBPvKsd1vk6XdawwYQMdm5SXr1ckcRSkN7R9h",
  "key33": "4yRbSMJZCs5ULWV2VrLeZroLmqAAy5ABAXLDX4pyTr9xa4mHZHoUzrAZLcj8aPMHjZVBZqm68Bvq7rPweRo43EvA",
  "key34": "45ikr2PQaJHpdo8U46oGSFE3mC3RRA4ruJLCoTzRVG4VB3d1icm5nyipXh7VRg7bMxY5LmzSvQBGKS9NRb7Rvhzf",
  "key35": "2h7ynH2HH9fYbstLgBExKES5Hkgbm6GWEL4u2fXXVzDyo48QakYiuodge4AVDXL7T6nM2wGJM2APNEcuGT1weuNp",
  "key36": "5mad9q6VjfPHjximnnZo8mEFcLBDtVo4krrJXiDAvsQD6qdv4JH2bQFS698Xga2FUAnmYU53Ca3bnp74f2FsH9CK",
  "key37": "2BoxYUt7V1CW9Uv8vzRU2C5usXK1PZBah1DN5RjSVx1zANfSrXbDPJ3LJUMUdYEGR6LpSbEJiiZodoiatmyuhKrL",
  "key38": "2yEYTmCMrnNywPrfnPAr9dGY8od5qRSr9bF8RtgyPsEMGioWhDhkak73BxCGh5mgqBvrmBCKyTNWANVTCGPhBHQf"
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
