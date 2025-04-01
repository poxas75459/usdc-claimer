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
    "4sqdf98FB5DqxBoBgn5YQ1aKseWJsNVRL4wHfNDc5ZtJTuaJv5HRRhV3n3FE7yRDtAjeipjYEEcBpvJXKK7jMdD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PbN9Z4jteQsSgquSQw8HJ9nQw4FCE2GggtkAWB6Azs4fGq3jGCpru2F8WdvUitVS3QSaL2YbQxiXPhirTPo3p7T",
  "key1": "5PxR9G1LNoXJt9iRgFShRfrZ3guXea5sZhZovPyBzK34t4NU7CmVhonMkgPQ2ouLV367fwnzBWSAhWkJhf9zjuTG",
  "key2": "yKZnkZvHrZTNJB6u7K1CH5RdEMXZU25khjffAtFge1xENa8GorTdAWv9kFDnX6KH27ybtm4GCjwmAa8jNyxGEPi",
  "key3": "2qMAcp9ty8Pw4eEEjyXcabAj9APvcYt2ry4fZ5XQtV791vLLsAhVfx5wgxexWMmPLZBTjgtNbDzWhzdDz2AYTk3c",
  "key4": "3RTwPGmGo8vJ9BzU7qt78BdGVBeq9EZBNGBrPUCeZ8CEh66sn24zC1pVxyou24amkUkKKBScGdPoYEhQLV2vnCSv",
  "key5": "3KZYKY8XPsoqV2Y845ZkbWUfq27YPh39vD9XukWFyggQX4keiGGkVEtC47pEyJDz5XETmL4A7SD3EHfv62bLQ9sA",
  "key6": "pqDhFGY3b56oD6GYD7JLrQz9tx6yjfwmDx7YhSBsptSUp3r4qRxxj63FQ5AWemW5KvNEDn1k9bA8cqW5QVjcsCT",
  "key7": "5aBhMjM1VsJ6LnPHoLEt336XY7Txs1bud3cSftbTfw52XWCmXLXuj3rU7zX1wa4UYmq5K572uxwceyFDFxKST9Wk",
  "key8": "2zEFHYZUKPtrSHdtgERsZYQHQ5vDWMS8ptLy762M2itT1e1kjxrNF7wnHKdu1EfkS9Su8qUpdPXJmL6MinvBXNds",
  "key9": "5rcVVR1hpJSMm1xBvLZBPtD88UukS7Lz7td3sorK85RYPKoU1PM4KFQB52KS2j3KReY34nZXZ2qLRw4LdmhZB7w8",
  "key10": "22hbZEhrztgcajfzpDzzvYr1UMp4b9VezB7DeTmfgRVeajvJEdRREmiW9no8KoVN8fhbhNUkFczL8BcpauimHzR5",
  "key11": "aEJh2a49yid4M91a8QbfYDEGcHwrLr9JfQqmgbiqXk6t7EvuoxxyzyAL5JN6Trrysz4eGcBC9zMyBkapC8tWFjQ",
  "key12": "2Vd9SmvhFxpvGT9J4R753LWpuZk7Dm4nAQeNu55LGS3DVP4uYuGLKfhn6bctJ6PkaQMgKrUqFD5cfLwTHbk7cuqe",
  "key13": "3Q3dKpv1xxKCGinKjqR5MGesJq618MF6UoWhpfoc9Py3483Yuo1P6RVizyEH456Szqz31AuEN8yt9i5xUEe1Q4sF",
  "key14": "5pYGjs1XkBW4tbiKdqs83CzjfbCXQ6sSVyoVMuLWj3yVqyseuHK1W5V5gjXafcu584i5JaHchfJF77KZfWNo2Pz2",
  "key15": "5c7b9yb16qDumLcuP5cUUcAzPFTNFddAvekaUfWDALNj9KFnmC96paC5wNxrXvqh3G1vGXSVxMhUprQFJ2BwRwZ5",
  "key16": "5h4pg3MDNcVLEzpqLjymUX8VdqppMifJvxgxpGz7V5MpdCoS2c8jBbfKKrMwEJX7p5zJcpJxoJ1GzizqX9hNadd6",
  "key17": "Ko7bYih8p6VpuzvxNAPYpNDwihBDRyHJQn4ZLZhTiFjJqYrDWyAL4fWeG1JjJsWT8UK5UAREbou8ZgDzW7kU9vk",
  "key18": "5FYitmbkWVEAfhYGPhpr6UPuLkHPon5U6pEwgp7tpGb6r5THNkNhiJDtTz7M7tx3f8Dv61eYR4bm8D728E7qao13",
  "key19": "4FHdXvDLYm7LtPyFoGCEYTtmexsTP55E6bzpbfV2kkvXo3VnphuzX1x6cJPVumR8C3c9kDbfeXPniNsdYbWLXfM8",
  "key20": "5n5UQXVSS2Zx1avc5igfcCTdRKpfJyckXySWJBxbqCkrRNM92XuknMJtXXPC5WypP8XPAXpZnsm1gbrZ1DFRxZfh",
  "key21": "3utPU4nWBPwEBddku7XM2tPTnjxPn36PpLPE1p14ntC33iigCxZnM5Hkrv1XePvmQVHfgWSnUqJnw7YrxuiVYSqN",
  "key22": "5MtgK9DJUonFfk5xra4j4PGUQv2gB3SFeVwvCnw7pRmsHbrmjHS6jnecZ16U6iFeXfgD3M2qSWHgWohWBieGcKYT",
  "key23": "5DNAZjnQi7zYZVK2FyUwsvBsswTHo8LQt1saPMQKsJJGzPDaWK8tLiaq7MjPQnLJNBMdsVMZiVWvhGvGYLVWKNSZ",
  "key24": "5BrpuGzAMWByrSNReWK82yaais2GAhvqgnozh5C13TYSbkbe5TbxTnDTK9EYscQzRECXWobb5Ld98ST9PipYWQFo",
  "key25": "5Ha3D5N7ib22K9JANGS89hyXjAkPVzTyYxWfLx5HJn9qcDCHd8p1PAUfAcSD6T3mGmWRv4kGQ3WHsygEWJYqHrya",
  "key26": "5eVaafn2jeTFvAVNaNQYjN3yhreNZgVBCCdb5MbdadRkke3kCLJKH5gxBbU2jiBayLJRkLTNmA2FWnXGmPDrxA3s",
  "key27": "3b4qMry1nympT9BvG824E4r58bjFDDvrE8tdRgjAuFbKDxUpSK98S2V5eEuSUqCGbpvpjAbTBVTbZFR1htwVRcKL",
  "key28": "3qbNQpFXeMeDQeRf9cABGyidz6EpYCPwyCGfdJyvg8uoHPXgS3JYoEFYUKRGZnSpVffW49B2MCwUhZuJKYaki7ZM",
  "key29": "2L77b2dMvuAPkQ7U85d6APmQ145PFJ7YwcUfFMJezoGaCxSGHGYSvMez9Vc8ZbJrFqDzDoc3M1v1enZVbr65DG2T",
  "key30": "5iPYLLdy6PJ1J9UgJFYgmWmaooSdnNZ7Ko3iYLneV75iqGhXNb9gUKEPRPnVbTFJscucjQokoqA7nezC2B2dRQCs",
  "key31": "67bLvyQKWJhWVAtKC12hLD2NoCfEwaFFDDgZ11rwxi1bSYryRqAd13QbUGMsPAN9JCD6csoRAnD88ihTRh8ujigz",
  "key32": "2v34Zco2u25U2EgYVnYXTtX7Nq6p1NaCsrFMykVdNkANcvzQiTj82MW2hpsw3czpg71p7ifUWMru7kw2eQafCPXx",
  "key33": "4m6Jx4aZaCnsZAnVjU9CnfRFyQ67aTEkBPYrhbnVZgSjv2P3VmP2TqD4qPJoAUJdoRGvziHn9nuQJqiwWbsUDBgp",
  "key34": "2WwE6mSzAAcUDYKdZZMUo5C5WqFUsSRxbhUKv5idYzbiwrVsRKYZyXWAWGjbAgWPEWXwnAtxZ2vA7Uwar5xd5R4B",
  "key35": "3x7dvd7ADNWjLFBhK5igcbqSuzPzF4GXFFEEt2zPehK5nPsGoYNC4CYC9BVFtHfErEZbNzgFVxmRvoxukqnWuQuz",
  "key36": "44NpqyoiLoEfA8zn8ibUvqMguZKupdvtVGDREHsW3nNP2728xk2FwqySJCs6zSFqZEpFkX4yVK3NdbwzyK2zfuvW",
  "key37": "4Lv7cbNindfjkoawk9nhgJyU398KF8S2tqXdfnAciM7ss9uZLUnDw6i8ffV7EPrHRwRAzkda2J2mkquWZUHJHFga",
  "key38": "4ZJVaBMmw4tzt72mcot9myUtH5PiCY3eXFbm3fn8tuqT35t16wKX7AUppDxXiYLqspkyAt6HjA4u7tJF3u8pQxUq",
  "key39": "3nKWkk98jWKBneYM1MDQ17pUZhi2996XWrM1B2rwc3iYPP1YGRGBn5sE6Fmjhqz8xC7WLmbSh8Aap5h6SKQszzgQ",
  "key40": "4LGNX1EtHaW14aFacvfjAZExHjtho8LKp8z9jJoVPkiotxmmaeeqXK2g1PwBBuu4pMsg4WV7RXBtLhXJEqk3W2CR",
  "key41": "4vbHYMoqi2rvr6QM7PjVhn3mEvGaa9wrjN8Ee1iATUmWYzdubxxJsmVFWtjgM6SWy4rCLfEcfR1rv9oa4dXJVfcj",
  "key42": "8SKVYuq7HrCFyuP22w6EWQsboyzn5U4QQ1y3S53EENWVyTsvrHFZ56kMtRTvM2hAxewmt5W3QoXoYD6Cv2pgL15",
  "key43": "5sJo4Uo6FxvUSLaFuf92g9R5EUjHF8FBLAikY2LbcdSHxV7bE3nzYVanpwpRLzm15SZHnJqp93cTuxaCrCJMJjiv",
  "key44": "Gij5GfzYhVhd3pZ8W3wpsNZNMkrj5i1syHhvW5dKK9dXFtbAEDBbYReyF6MPdKQkgnRUKT7x3xn3xBQqgDZZ4Ha",
  "key45": "4HtfX9N4w15F4Wv75BXSKJnBPeezM6CmZnjjk2fP1grGEvWdwgCn6MVKyzNhfyGpJ3DDRFgkir5xgHcZnNG6qdK9"
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
