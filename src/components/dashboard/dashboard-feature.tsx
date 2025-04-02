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
    "27EJqAYLAZGaS2QuSBpLisD24QUfaXZoD4aJtPyAV57TqVAuxkwByzK1UmwaQm2rLcGZKeTkr5bAdnUrRcmDpaDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVkGhnxAZvduXqofsW4qCSpLWYQa47JsUqjmj2Z8Gc4wSM37aJC9fhXuW3hQRJvxmUTb2p47soYHXUaVBTREpUP",
  "key1": "ehUeDEC2z4Cpebd5ks9LBeiiYHcfpQsxQqjdYH54LjcWJRatB7ftWxva4h5yeMh5zMZg8T3apUoL8eo8CHGn6V4",
  "key2": "4qEuAhqJVP6hzb5EcjX9d6p6y4g1Vb1LzjoqjbGhE4T3teenv1Vs8Qadf5xMncNEoxEsKH8REbYNRjg4kExKWz64",
  "key3": "5xMRaqNnU8zsC4DG9FzodHoHysmjVi847Empd1Fcewy3jywpaD5Ew5WYnsbpGgz9pcsexRGKfgwCNZbGSCwnhGho",
  "key4": "54d8uXfW9XLPXMh5fm8JoGuf1KwkWYECMN7AkWoNQdeyLiCfwNYoBRQAYBB7YrqELYENumQ8ACLzx3jAyrxeQ6uk",
  "key5": "4dzzYF4cy1S2TsbRkpPEHER1DUhQ9bfXHGJyG5CoWLSDjkZ7rmCdTLfvEcFo8JpCt8dh6fcM2bXD23ZWiiC7M3AX",
  "key6": "FVidCydwyoA23YVhxtV74XiLtBVqM1ANQE2GowqRFksp49mXz9y8w2YaoGZsxtYyxp8J44LJKLqMmN3fyPNAdfP",
  "key7": "2BPHe9tDiUq4akEc77TYTFPWUTD3f2NFQtJFD7KfmGdq9GZivMWyVzGc4kwxBmQmLe27Wm5V8s7zg956fBjok3Jm",
  "key8": "66fr4KfJiMRFHr8LnyW4nDo27ZAeKejAiKYpTkY4kFFqmhYCxiie1ijwaoNUknekmkaisWXrkdFTRbJL7kVVkZsh",
  "key9": "3iJvF3Et62jshKS5MqkL4SZNT3GV4T3o5Ecck4jaifticrWUaFyPTNf17DgVvRB7BbELq9NhUHcGMkdrBYbKFJRN",
  "key10": "2i8qk4sP9MkTmASwamwo4CDJSx36ePxK4VNFm36RG6DqEnnpXRFrhKsvTrdR8EZGRezHJ17ziUPmedQ1q862HzqN",
  "key11": "5BiuRcuaRxZoguLLNzycrrWChCgarQfvXPHCjMRsTSXCcDXboBG3eJPimXr4d1ar6JQ9HFuCNtvyy2tRUtHwUdLn",
  "key12": "5Npojmm4vxFdx9eQGgyZfdqNTQkHfpJcSNJi6niuv5Ly6uQvgQSuzUJwNK7bqfyyb3am6Yk2Qxzu2B2psEc7AUWv",
  "key13": "6644UJu6DtsxaFDL6vENP2CzN9XDzTkAsYqcLcDqHugzZQFCejiqPuzr5YMA3j2f63wHioomoAvT55nceXBF1UZ7",
  "key14": "4sfq4guJ1Xxj2iN813wu48HcaYyjkHdyQr2ZNXZYpSUHVJxs6b19uwNwEvRRQhsBYHsb7iVZXQMupASqh4wTYSpY",
  "key15": "489i28zFRbdKwiZRUzm8FUWeQv778NzYARAom7DHZC8km4ssTu2DyNPiNmT5ByQcp7NrA7zhLjcBtH7cDrQfRFCn",
  "key16": "33tP8ujFTFzUs6DLngEpoJzQX2Db62qZP58CwCefJFACviiCPErMFbeNtvF8MVk2fKgfgnSPvEPLi4BRee8nFgVH",
  "key17": "8R2XDHa5UHGzzzbT13BxiUHCpjhBpkYEprt3y5Xcoo3dpkueyLh2FjGMXhkSEAijFh16XH65GpVuLXBRy35obv9",
  "key18": "5dsS59vN6uGqE2X8vk3LCHULY52UTvh9sH67LUu4KcCX9GWiWiTxLtXmstpznGt8B9E8YchTAs6zDFGRtjB6XwwZ",
  "key19": "39WxX4C2KvDdkCEgEuQWWi3xzMESLsRPx89pS5e9o9mHGci5tjqDtAqNgQ1Xd8Y67aVDgWcSjEP7WwmniakqympG",
  "key20": "3ztffPH3FtSLWxjPtgYVvdKAHYuuiL5SLeA2iVALs4vFJbMZdoCR9nXD1J23jsMfXH2MR78vqpx323C6bHssC7KR",
  "key21": "3BFDwiUquaNmmWdxeejgvsZNsq3MyifQo4ZGGs3NVZ28u5tgKfVVJ76pU6HYABPE3smadbva3ZoBtqQC4MFcvanx",
  "key22": "35yCvc9dJ15thNt2RHxcJuNRAcRM7FXPTrLGsiWMy84H6vTHFyQGqUh7ESXvRLuCAsYKF5aarbp2PHpKoqtPKixP",
  "key23": "4hqFxGbka1u5zFYkYpCoajGPzTpT269kjF6ezBWdHw5CX5Kin3Mit4qb3wJEi1d4LmLKUFpn6cP9GnRaJ82SBLVX",
  "key24": "A56ezLzmMCGCNfQoAk2GPyWfLKTRr4oZJceeKPnxRnkWwWXpD2Ni5M4hHNQFavw194HLbwvEYFoQQYUwfcaGzRE",
  "key25": "4DzoGg1AePaA5Kkzt52GERH2aX4CrFmcyVNxLy5EPLnsowkUj8v5Tw6ecNoWJmD5S3CexuepUubB2ZgNqBvJXSLQ",
  "key26": "yjy1TyYEVH7TcMUBgrRPctZizRcgkcE1wQgd26e1UioEoAXVLnNhbfzzUj1pgiLqk527U4ETDWobJYZ5okWMAkt",
  "key27": "3eu3NDHoKaECzdHkJaRqCTRwmUKQtHSE1YbsUSUuFYcmUivsjNQTntfQYSKxazoUYMCtbFvfo1MsgAwjZ7oeXVy2",
  "key28": "353beBeQBsoAnWotEuoiwv5YBbxzjv3RAEwTJaQ3GA1EmLSEXsUifYGeZP6jUG1ownPyde1F19VbBZ4JH7wB6KtM",
  "key29": "3WKx8qYqaogr67WNvohYMK6VwhQN81otMYti796YfyTgKJgEyxYuMz45yUNj7zUzXeBkRpjs8CoU8GFrb72Ad5Cd",
  "key30": "5WaXojU83hjNQuC5NtjnSgF5uVdYByQtsLGM19dwX7whqGTu4whZdnJ5WoKWvuPx9NZdqKm8e7ubjA5f2XybKfy1",
  "key31": "5R2AU2oB6SiUDggcCJ9TzZ6BkaAMvfo48CKnfytZG7KtTyXwRwGKgcVXJU9fwGYruFwh2a1yCFiudMHLmJvRK9Ao",
  "key32": "2czmMxVzzBdY52d4CY1irZs5pei1GeAaApfvJy5T5drogZgBKhe3HNs3d8jkYCNcZwAY7a93MS49cY9pnZ3peMyL",
  "key33": "2K1ynppVNUfrNd1MMqE7G1ybCRRT8XiJahQbfiqwwd1kQjUQHP4GzZiJMnHf148qy6mpP54gKqG9MydV8tPo7jiU",
  "key34": "3trSge53KTncVJBmtNdJfZs2kq9Dc3c5APAXfADAyN1sGDTweEv1UkeDF8RQyv9LsgUtVYPSCe7Jfm7ocsD9a9UM",
  "key35": "3EhAcZYaW8pCiAvS2tNwxEpHiUJiKZ3fPjR9wBxDtP7aSj5mGh3tcYGnBbZejRLQt1CWzT6c3zFwdXiwTmW1draX",
  "key36": "DkCMjNaU75CPJF5ksUwHLEgj7jThMHLJc92Z5FfaE4RPaz8QRDbiHDJysfSZzRURRUQHaU7ippnAdAoTMrLQGMo",
  "key37": "pXrQGdSb6hYS3b2Vpd7uCet1povBaoCw7vmNhFWUjZf85RoTVtvcdR81ztVpYJzzFZtSYv66LcWyZdRb77fYeX2",
  "key38": "4m1H6q2xAPYX3Qk3ZsyvEYJ71jyzj61Zv8zH4zKFAv4Air3EsbHfkQyQd9KQmiv2a67p8YV1PRBPdQAjm3R3PA2k",
  "key39": "52knSFr1UtiaCWgK77gxVMdt2dKKf3L22oJLyQEGpVoT8pXUWApk5z3cnPWJjZVEmAKmCcvt6icYqiGKoTt9tJNm"
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
