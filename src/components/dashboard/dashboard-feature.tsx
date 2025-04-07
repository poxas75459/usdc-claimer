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
    "tyiah26orRu7ZZkgUg9JXBa7vPZq28cWyaUtt23FXxiogjSyfN9gX1f9qr2fLsCdWA9w83tCjwLnLzhphU8BVZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WxXhrGAhRYgKhqakgQSJJGehF2YnwWJhQzNCuJQGxLCtEDJhyahXaUV3bq7nUe2wa16YJVSyzQrtBgpAWHeR1TS",
  "key1": "3U27mk9xnwNcPRK98yAs6tr57Ptxr2naetGpfvZ2orMKqNFRwhNRndfg7bAkgpGgKJiZtxwqT6KTrw5bfuuBuxhB",
  "key2": "2ZsXh7LXmaPPniEWhm1FV4VHLnC1fGCJDBzY2XzZzGdDYC7Uq9Hq8b78CHBkN3tJ3LwqktkozLxqU3FMbeHrwv5y",
  "key3": "2i3hHQWfQ1kiyY7kp51z5oEkdhQhu4nzsSNAE9PwdRYtcWMQWrTvVcyt6apunLR2wKkwM9UKT2NPt8e6V2n2Vfuf",
  "key4": "5LjRwPQhzfQAwCu4cJyVjNzkKgk2nWzewDsv7okT3nLgprxbcmiNZ5HSLXnDwHhsDQikzh8jTgB1Ti31snX7UyDW",
  "key5": "2eDQB4aEgNUt9UF676aZQh7FvhucjB5x5otR51eDh3acrMDf2zppewhHi6MEq2CDUusj3PyVT4dpXqfzcp98nXwi",
  "key6": "658DHVfYYsNNXPPxr4XZ7wHv8wSsF6jFZwzMqcNMQ9LKtnvDtXVqrMmKXFwJxFgZLd2NkvViwvniGWg3fjC4niz6",
  "key7": "wxv34wE5i42j65zYchTyUNkmamoRPyhNqta7PA3tA7jxB536pcLSKCUG5nYPa6YEdTgAWSTZHjWcE2nkYfikSRr",
  "key8": "54j5hseYhS6bP3aWBUU9TQKMNFUauz4h6PWDEvz2ugK7HY5jHCgt5gFcKjTHWZeaxdmQz3Z2H7iFKmEVqWTzyLsC",
  "key9": "285PxLgaMSoY8vcUmbLfqc9Q9QmPjPc3BpsRWq4KYGHnnB2dvgwXyYyejA1o9NabTVHW3i4NouDn72hHDEjRUKxS",
  "key10": "3MjPaXCxEaR4BR61uSU2XKjfa1mA7nEsCt3WndKQMXi45mLJC4ASLyUNMs7FtsVUFjrtXo73BKDDAkvj5XUTpXw6",
  "key11": "3UAQebMZ2BekyrbVvNJuwarBU8QZi9ZCFu2hu38Ff3vPUg1qbzyEHgVrdn2qC32Rgiog4a2CYrifJaCeGuWgLU1N",
  "key12": "3uoAze3xkFy4ssfFZ9G9fhTEhWNygTRH52yG6RE3WaFUDr9NdAMvijCu1TVB5xemNDx5JUBfYcBdbA6ZYdWGCUfw",
  "key13": "5CgEadjmCc5ES8ph8fa254YfAb3uHUGAQGEJ6QQHAyt6QMkLTvMnb2vLmYoK744XJZdMjkUf7ovpozhok23r9YkB",
  "key14": "3MJDkyinYTavJ6LhqRBZbh1t6Y1oevSpkaeok5qoMqnk12H29FDkSf9C4zx9GkLQuY4BJ1FuVzDUSom3xrYPzdgU",
  "key15": "5c1ckw1XTfgue8UoDCQCMpB9pFxZT42tDkptmrCxLgVj2TaYAMTwKuGZASkRhRzYwSuoCgDwVmn89NFuiYiCbJaa",
  "key16": "4851JTnEjYKgh6cctKDfsspbNyyqGaL6giKvBgejSUrDKanoDP6MociiLw6iyHsnQDMpaqxP9KLeUyC9MNHTCMFT",
  "key17": "3UKck188vPMAqPPuQ6ACPXep5EcfjhQKb6Jz5DV7EAdnm2V1NtnrnRwwaKfXqpNCRNBaoBoCuBosLcqqkmV3F1BS",
  "key18": "39uWtrbFiN8AxJPWf6Tfmez75eWEcgQenwVnUnkRpihSdn6yEfuJ6Fny6F9VnmSQUsVmARUu2v7DYXBiWyMT16Wa",
  "key19": "5TYqPVFtK7cn9muXN7RUwU7PXexJWwbWwJKgyQA4G8u5X9U6fgE5untorxdfq5SmpBV7kx84woz6BQXVDx86Aru8",
  "key20": "3a6BVMd7VHVWWeN4c2QJ6mMCi1djUt2cSot3Q34NzJyV4t8MyCwHwkwSxVqfjj2LjtDQ5nZKvsTycRPg1D565zwm",
  "key21": "2Rs5hi1nYW9MjNuDJGdRTuJaYBNTpZC7LqR6d7XnmLwsWGpTcNTNgbGZbpsbLVp6gPwZp7gaMiAARVBWoL51vwbv",
  "key22": "2D6J6YSqPqVVEh3YZ7ah7VkEaWSgLCa2pG7KsDeZnHmm9g9txmWgwzWhF9bkzNxjEvXNVAbo2yWMdQVDtbxcbwi2",
  "key23": "39TpRPMehECdYB3B1oF6kyJZJ5CYsNtTEkYSyowFKTVnz6fiybj8hWPDQL4L9KmebgdpMf8m8b2NXp5yNsRSqXPu",
  "key24": "5mgs77xyy5mkpDN1CvdBbP3h9EHhPLwwnop6Ln7wvPtw2EUfDdx3fvM9wAnGo9neQEhkdtmM6AKBJXhw3hqiXGY7",
  "key25": "WFAsQnhGzc2VFwGWzZLj2tHjWhB37XC9beSUex91vDMuAEKEWeibZsrFDC8yGmKmZngV5g8kmHn7P6JH3H8XrCb",
  "key26": "1Upzq76N1QSKgUA7CWFhVPFpbtXw29JVRHKKhU4k9WBS4KkFzda7u8m6bns34381SiaxQUueYy9yDb47Ba5fGNX",
  "key27": "k5tJxrkgDXLLxJWPADNP4w37uCzmuCVwEtqLTkH3ZC6NsQieMsVFYb9cajwscvrguWKmDxbFiC1cVbEToGdvPUZ",
  "key28": "L7zqxRGYpZNfuEZnoJcje6PEVPDNJpx9X86xvw59ke3GFswfcCvbdPMXbAenSLQYHYM53BrH5WrmgNQLJuMkVwL",
  "key29": "3YSHXDhvogD1UmUdEuUghDpYSyfrvFn8RaiVqaWb7Tre1Ney71DWqYANTeP2ikoPbWYQmg952ZYAqqVRaE7YP8LM",
  "key30": "4YqZCFZyW4KyYSa1G22qbbrx3pVvsmCGMyZj393H1jA36LuuracQx8pP58ah1hTTMZQXjivybju8vYUgjSyZr9eG",
  "key31": "B3FCE5AApftkzmei8Yx51Ft68voRQEndZKtNMSJrjwsSwkshnH9MCF5Rh9kKuCsMVRdcmG5pFFXvR8vK1qtDSYv",
  "key32": "3445LzQDNn9845A2SgiESZiKtjQFzHPXZTYeubBvQrriGuw89VhQFdAM8dqnvEogQtTtyfoKeaTkQrfX4yV3vG5C",
  "key33": "4vntxXdyYq8ewgDJ9H5np8U1c7jfS4iqetJDpLRxZYnZgQaq5e3GaKLA5ZYLEkoe2fsTjhuMjGznnG2KmkE1aqjE",
  "key34": "66wiHUj43p3E7dVAv5vaKQ27FmwGtBpbFk3JnRJvCmMdWRzE38AuoURuDcHKkjhsbiThAty4uesSPgTiMo3UTfpP",
  "key35": "3PsGym5oyfYoUtjL1rHYXr6KHXCtnHgSFnZ3F3Sj6uNGfjzQr6exmS2BK9RARsQgWmMQSGMRzwPGXhmA4BjfqWh1",
  "key36": "KFcvtf25urV5Ltg628w6Hz1H4B13LnteFxYTaH9SgWxMfqQgZUFwuDtWNzkdcd8RtXCEFj31G4p4jZRR9p5fcFm",
  "key37": "4MiYtxLGRJBhikiSy9pePSSEo7wUf5WbZbFd2v2UEeMCdUbj3bs2JBfjRtgRw9jPDZGcFbmZUGuQxDzRWXmV1SSQ",
  "key38": "4dRQozfF1q9dhhL1cDFpkG1ogmc6eXagUucUiupjgkHBYm6UPYkLBsJmKwDxPKdoi4XGbi68m9meXuZyMxBNpDKJ",
  "key39": "wPSbtubarDX5eLiwjiZhe4aqVEgr6z4jNNrhAqr6pGgFXncQFGez73xfsWdaRnKSngLgePvTRra91ycjKECiYNL",
  "key40": "4j9pdNXrF4GQgxqPcdqFGQJC8AUN87yZt9weqYWCSCmBknvkZ5eQaK2Kfv318VpQk8wo7yZNC8w5zncdngws97f3",
  "key41": "4ivn9d2X8iq7rdLvKtKJ78ceEDb4WH61tT4Z4attdJ3Y6xEDmfdh4ocs7RDZFLDr9fAikB9uWnpPw6CvfybqhmMK",
  "key42": "z2tnP2H76TyggfXXdWPmQac7XqZ6iBPqBkxnYXcF2eRegPEPTjJjydiofDQmqaYszCgBZ13d5vVZEEv5i6zVCvD",
  "key43": "5ESuAtiYJsmjpa8HNzEJ3oN2pyr1vJvabmp3f4tRi1t3x8z3kfu4t5zjQWHnMEvbbt1tJjXwBXTT4VZ7UMdLPXJJ",
  "key44": "5SUMyL6bZB8MR2dH5bCHFMVYoKQHwyDKAhtvtEwaWEhmfu55dRyPDtwHJw26FxebZcEo5ZSgCGJEdftX3vcSyuE",
  "key45": "5UCdqoC7pfJZhK7c8jDCJi5zYstsYyZ6yg1phgbux5QMadiAj8E4vL1YouawrmXKtSAAmhDa5qi3cbsz2j8NGnCx",
  "key46": "2FoCzRFxbJyUiQocx2TrCHnXgfsBd2syH5SSB8MPcexbWjtPzr1Lf3RnbwvxKkPQojbCFpJ1Wt81cZgWEnykeSZM",
  "key47": "5toW2uN8YPZQ1YHA5r5E1owRGidnpZZ62qCkr462MJ5Beiu6RY2MgAK2u3xiqK1kKjQC5kWYHnfkA2fLfdaAUi2y",
  "key48": "55qLHqe7AvbQ9EfZV5HShogN7arsK7iTuTvuKRd6rPptQUgNenA3mFkN11exUCXJMezeypDudo68cVKfczwkpNQb"
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
