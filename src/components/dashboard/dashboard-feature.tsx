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
    "21cgcGnzDGwPoFgfih4UW6QQZ7sRbbihqfES1abYhhwcjdvQ7bjQxx7fQH2SGQgxmk152SK7yka59puURRFkdFZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8r57u4LGijouGDi4fdCV4K7yoTC86ipybUnJMHRG7KK2aVNXTZAjztxxavQg2uB6Y4qA3U2w4NtTRqH6Bt42eS",
  "key1": "3JmCQsYpA2teLiaSzThc8Kx5rD7tLYZ5a15VycMxsgzqYsg8mmiS52ohN3ezsij5tbwkRpN9HVT8MPqFCLpSPwYV",
  "key2": "AcWNQTR6rYoYigu556f8XTQaQTTpmLGTR9JAEfyY8xCY6LBzpFxZ5uLUDCz7rQXHbbg3jK9LB144uEn28yU1Zmr",
  "key3": "61wkHCDcbs1Pg1j5usToCMDAkU6UoEfNzfgbmDfjWzRftv2N9KL5kg1eCExn67obCgWAbwdrm3xrC7tnbopX67B7",
  "key4": "5U2avoAx1VCtEYsts7ck7e5sw5j75kJRAqRBxDoeTZks2uj6AqgjoRGEN5RBk3B37L5jFRpaFbbSVxvPCALEw578",
  "key5": "5JWKZgSjMwYggAYMvR85xqAJFjeEN7P2U4sMqz2AAWXG8cGtWrVjWsKBZKHQuz814X1ncwvxUzzhb8NGVNrQLiCN",
  "key6": "bqfY7GMNiaJPQ9xMeyBxYnYtC1aZdqYurSmmHWZqMBWRGCgwBXyWMwHmR8cf83FK28djdsuVAwRDbCxWLpSU9LA",
  "key7": "2uVZ9jzyR4rQVQFuT6MVU5EFr8xhrXTZVsKT5Sd4jCEdaQ6teCJoqmkFkEWGEYrPSUZbvEJuixYFiRgfqqXkhE1T",
  "key8": "ufhAfYL5Q6mdSrHwFUcDMsUcBHEzFfnfBKLWcJrbfKvMxptLcyo89XGtvMchHQipvFpZAeuiJRAYjPuMZnHWRC3",
  "key9": "4y2hwSjx4gMAm2UgnYS3oeg4QjPQ2LPK1EE3phxm369S67RQDrdQjaYSacPFryCWU4HSEJAbanbUpArbDtTbQQN7",
  "key10": "4YhjitHtg6sFNDxxEgKeGQuD8J8AXwQkZo55FxX8ZJiQ5PaPa3EFEGosX5mhwBQrgQKcUqrYiJGRj8ZkiBRHCKjv",
  "key11": "3Yf3k1Xj145x316A9AUGekAuRKmgPkz9oSqoibHDFNFfd72qJqeYM2Lx9Pxj5GYntJECpN93d3C9KDXrFuvgQfRr",
  "key12": "3T7W9yjgNX1T5KGzZWiwdW7zyDdcgfEHs3P18bb3qj8JDLVfgbYM2HG2rSMvRHtBtS8VkxLUbgtd8R55n9EVK6i4",
  "key13": "5FMWD25doKE6faeka69pki5FPX5pd1HFRZSg11wxZZq16bF8Daxf7i7eRBhfqVAHe3akdJNCSE9Yovv9vvpYyXRw",
  "key14": "44siXmLPzP6zY4MmMzinj4ZXj7xHS1FpdAd2kLfe6aoMJUAn9CakiMGk3H7UuKhUrHNDSrmCKKB9JTpWMDqTuqRS",
  "key15": "5bUpz7Sssj8HbHE6TEZ5AnfDyyrQxdV7A1aYSNLS4boYktXS9rMpcNndYtEa24ZPTpg9eHKDrP3cdK1byABXqFsc",
  "key16": "sS5BfhJju33uu78emZFUyRx8YNLHWLyQBpU5XysTbSs7NTrJWEFcpQFBcd5Y4TkHHkZD54i8TqBZR5xMy8Qp7n2",
  "key17": "4qhNN2La23mJxiSsXKFZzCZiYpY2abYV5nkvayuMio8ojdawwEQxL35nAgenzAAe9PxeMNV1gSoNJwVauhgjgEtF",
  "key18": "66A1BaXqUunYteUdcQpSrhR9GxZ5N4dLUB2doApubb165Z4g3zapMPz5YfF45JfmBcDdCQVd6eoRRz4VpFcjfzGX",
  "key19": "3J7YHeAUdibvPLPeCd9ZxTZDAXZkkr7gdaQNxZR9dAw5hZZHtUxKzKAPibWPaPj1p6M8VZUARSnSSMftpLMfXUju",
  "key20": "2D8s9xGQQJbEsNqWADP42cfuYdMxtTrdZci4BCDJn4ZfpSfjci9Ya2apQUSgZ6pZLpSY2DRdzGfwiB1tXydq32pv",
  "key21": "5eNe29RZ7i28wGGvQbPMKkQucumx5B39DFxXCFarxaKRuofVTg74ipbMy96HZoY2MdaKPe4LkkmP8DNVsgE1ZwaX",
  "key22": "3z8pW2ZYiNvfvGMrzQGh3zWHs7LKLPRMnpS8zPmRw4HETh8BGiuy62K5SpGQNL2c7uR2NaSWzzSXRBULTyjHiMTr",
  "key23": "n9hSyGhEyS3vnW2Fc5j3dF9WMmqiKj46BzhQn6FUWr1zMfsNS3iR2B76oQWkRLiUtR2336NwHYMciSYa4eFnVjq",
  "key24": "4kwHhkcR83ZrSDQ7AyMeB7hsmubhh8mR6MT9GyYUUg4myGAntw8uve3eTx6boR3PHWkhBrLeGwBjMCT7LDFJYcYy",
  "key25": "27LPm6QewoqoSxG2GmtA1iGY4j4PBJZc8HdEs6xjXW3Bw9WePe6rP8VdZ647sFdQgmahHKmrCc7dGKKaCADywgS2",
  "key26": "55J65C5TwEC5H8BxXzWHVViuUaqegXrvkc9FM8rwGonyK4z3gR5rbVRZNnZMZqfXBCkF8tZpWBf7wWFzx8uF3mau",
  "key27": "3UDGX7aB4Q2yGLxBNzepZdVgUWqpQVXxrV8Wrab5Lw4Q57b5quBdUa9txeb56BErYPSChaks6VfpS1xCKuhkgZTn",
  "key28": "2q8FzxCC2PT6HbWEkayXf9rV644gEDXJjXxQ1tkNuCT3PR7QNZuaEWGGY32momQEfQJSn2ASnekjpumecY4FkBqi",
  "key29": "3gcSc6UVd3hKYGQXMuQGLuMbhYzoCFbMEhBvsRepkZTLFFWF6n3nk5UYxpWxM1fsrr7ex1euWsSD2xroiu7sKTUz",
  "key30": "EdK1AbkaeNWJXiArs7CpPVishUgq7Q51emSnq2LSQ3Qv8rxHFrp6AVdCagVhVsA8FZ3HmZJsy2iA5GrXsxt67EY",
  "key31": "3WJCs93Zb5qApUh5y67h8eKf83SmjqCaEkBbe1gvU3JdUVovnoRjy86FECf6Du86dRqKwhTdU3AUNiYDRxn7ktp6",
  "key32": "4tUybsRbPXwFnHV2S4jEuL8sfTV3YzskRmaxQRy1Y2UWkjy1WykgMKeTbXkddsjPaZfs2AGjso21Cf8CQ2KHaLMB",
  "key33": "5QEjHL1FbbcbK5Gthb59Teg3tkJ9APTePpwWVwKZ4WDRxJ2RSf638f3JSDHxUqzVx55BgLabwMAUauxaAKPiS9vq",
  "key34": "iW1YzqisbDqZxVJ87GsD9x2fEkZ5QiK7EXXJxUYRcbUjtpbtSztmYMxYyeH34S3n7pYFnD1uGYjSKZHyZYh5FKj",
  "key35": "5qL87gHrXsGyBM9MZkh2EYXxYBbfhsUupEtU8KATMVnRHnME2Wvz31B7v6ZdwirxcujoyxLZ7ZgfUF46Vw1apGZm",
  "key36": "3a2xZuYoXXYqeDaeN9TSCzYvszwuNyK42yybJmwATex3Fv7wj5sj3zwRJboqT5aTgzNSS1A2vvkniSeA6HW6wmNw",
  "key37": "4yNCSfsbX9TwPw9P5BUQ74ydwNDaT8m8VBKW61ScMH2ycZhssnVg2LMmWoucKTVBx1bHqJ5xqyZ6EQjB1VqHwAep",
  "key38": "65uFWeceP1rRAuX2ySwZSuQi1h99HfxZHxqT3XSCufchrHVbzromyvYhGLsENS5Xi5jDH4JQVUYXoMB1rFm8GJYn",
  "key39": "2ZmcYXxvDzJjQLcSawR2GHvatbK8tey7AYTL2feqGsQAqc2Zck69nsCqjD3iUUSJNbGCmtpts2FsHAxicWyBShHD",
  "key40": "3sBFBaUP3XrKhkzM2uB6TWy53CgbHMEDdnRfibyYMr1VNZ82D9jWdQmfaB5LG9kRSqoESu6yPurh2xH6xMktBj8p",
  "key41": "4EaqkRJNT7AfjNdWrCoSPx3TKpt2ahv1HfjrkzHiD3NAsCATYsqoLMaodbGVG8urkXBkpnCqNxqiyGpEBocGA5XP",
  "key42": "2atSeN7Y2exNx95tSVDU2LsmjtXsSSSKqyeiYC5KGKNC7Kg3YWTYSR1sTEW81i5C3KgpSwNJf1guXS6kmH4Z6RWv",
  "key43": "65uLh3931ipR837NMr1odNqwaPGfw1DCRpotCt1v5W9ZqRKudzyKmtw7cmHKEnLRFCctaH1vVGhy91urWBApurN3",
  "key44": "3DW4Bo26uJqPE86YJYrBoimmRcikGM1qbjfFfC3ikrcVSua9fqivGcJ6X3JrzoShGagi5gZ1QWiYsNQ9NVKoizAq"
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
