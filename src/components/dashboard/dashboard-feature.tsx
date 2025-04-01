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
    "3VMkKpiBVFuV7Sbtbws8WoRmx1sWJZVHsycrSxVMjMbvGYDfbFWTDsNF7bhNWG1RuM6X7WmBLyHavaGSwHr12kB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7ZqJTn9ofcVdxNecZpkQ3bxTGJtfj3YV1JCd69GuTBaqGkKhaLh5MixmQGWm9rL6JuYNdEX4yi4Y2MsTdXasAW",
  "key1": "4Xrx7hVVURsjtFgjUfEC3uU2tAxXjm7bKFGLgiCXRqiLSJa6XHmvd11wLtH9Vq7Xe8vgZ9hhYMKQeiYsFgX7SdjT",
  "key2": "5d4GwZvfVKQN5z79tvwkzTBtFauD4e1zjYnUyYpEZ8fuks2RHxaZvSQhTNd3Nt8r9q9dTgcuoKFdoAA656VDrE4c",
  "key3": "4U2YodLtx9wxxtH1mtjgYn4PKaEAhBkzqfQdjGsxCDh8hrWqornPrLtPjuVphPCqK6y8BqGHNaaQBMoYJu4wFYZQ",
  "key4": "5mWkqwDbjNu5gJWc8uJqWadMJmH6UD6PpSQnANeL8JGV9ykheypFcEEUhQT45figPPNL7X2eMxLD5VqM4zeixh9k",
  "key5": "2MhMTC1JpJwt4bxgnqK6qAkd7GqkzBXggB3LZcTPgKnS8EQAC3iLS64z5QJtg5ZQM27RsEio43bAqtinJUHnns1V",
  "key6": "4E24udwDE9LAHsGFf8A4UyLz2L3rcvR21w4t2jREnjeE7M5WAkmCysG8dfRmXTPUNr7hqaL2YVd2ZxXPLPvVZuNQ",
  "key7": "5QwsgmDXBoDQY6FfFRGv2WnWjM67JyYjvqJSf54EJpYPjWzUooDzrE2Gwm1fQReeSGYSawLGJXB1qioHd439Y76D",
  "key8": "K2wdq3XcyE67oLk61aoSAmnU1Sw5uKc4QoxoNpfHg9QC4UJW1dXwQ2i8PqJmGSZSA8EXaQd3rgSayFoYrXEivLp",
  "key9": "4Kp4PjiXAe4ezU3G9W8GvL8McbJxEXnMAr3SnL4Q41UMY9fApXTewF1Tstqh1D6AT5bKoFaXEDDDqRuBVTKZL9sB",
  "key10": "3xEeSUqW2YRM7YFePRVcGCzDGkz89NbVVidMWMpu7QePh5TshRaYHfXNjiVAsiVQsjisDkpJgLkDWE2TmbF9xr8W",
  "key11": "2rjGjFWassegEYeQboRygLarXz1EnRP5saj8tWpm9EZxhf6n1bKjgcddD91UWWrc6Nus4RovtJg8RjaGqaR7kxUj",
  "key12": "KR4VvgkMxGRBabDZvjmeUcvcwKyfLnHiS1VacQQrdBd69nsx4ac2LXCBVduUgJ3F5uaoP7UUfuMuv4NCQPd3bJz",
  "key13": "brcXZ7L87hUjtpYfu26D34YGwVyLHW1gK8qFhtCCgEgJMNDSQPFyM6ti67T54JjiN6zUiFusggu2Jf53rnyPe6m",
  "key14": "43a9h2XoZn8RfBVUTGYPWRgRiKrWXXyGvkcbxijaNvNShgkDfYhB8DAr1BiWpTNa7W5bunttq2UHp5RqXPAA3hvb",
  "key15": "4hM64xUfQtgmqSyX5M2ewyCrYauSxJTsMHaNgJoKfHzHTBZqyGmSnm9kozEZni5YULY6h988smNDNZovJmQpT6gB",
  "key16": "4iMHzppxKcCRuBwm6Dhd5HaBZVQXfrWdNPKNNPzdRVyMftHYDGiVcGfksic1h2kuSVXyo5WSVMHJL8sLU6ZsThHN",
  "key17": "3o4sLUYt5x499zmBjB7EQDSAEYXzwA4TJSojaiSACLdRS3ZXUvmSotpwjx97i3foPt15fBVH8vJaoopHRWXD6vTg",
  "key18": "2XZqUKLjKpoDvoHV73CqA6ysxCzXf64nViWBXW3DM8j49oBBvSmfNwB6eBmemBYNsX6dFrbeu2TDppVDadtvCMBd",
  "key19": "AV7G2cQY1bEfizHeZefpDEyuuRVTaK6C6CUP39zqESzUpVsrJccEFcqyFrXQ2oYYSaYsd6aMFFreHVWFdQqTgzn",
  "key20": "2EQC5tBbMJydV9ZubNdmNngiy7TDGpscBLGEhiJ7qSTNMwWnwLcwf9CskSX83kXG3D58VZL446tL44L7ZFF82aqG",
  "key21": "2VgXjDi3FkSi2AopvcfmXNokMrvLEWTMJNk89zcJhGRc9eqpeL8VF1fUJs2jtBiqdHMc9obsFF6maKFNa8AdPJjz",
  "key22": "56jriCuWjiSC1ovYdr1c56rgKj6VtXNkMLAMnK7J2udrknbLM58ZsNnMeKGwSp1aTqYZgic5oNSNoskr8RxLshkf",
  "key23": "2VNVU9vVwiyErTixXxS9GLLVqMcf2Gjm8EdNDxZKJzNmG68e4j6pWV9PGVec4kwHpPuvyL5qE4kYFfUukExU88m9",
  "key24": "rfog7KQrvRjYwzcrntSoxrfUsZDMhhcwXbhvjrWwXuRE86CQJ3a3NBsXEmXz6Dy6XGSYm1LCNyT17hoNUruEPPE",
  "key25": "USMkWJixuvycjoCXcc9qHm1BTqnFhSMx7aXmDQ9X11zrQKCVtfG3HvLTAVVKntHvUnecuYScFhEY4X3wHmbMVxP",
  "key26": "x3pfKgbBdFBBSzyfxb3FJGHnw9wxPDgvyPmn2pQ97fmJvePMAZ9kvZFpHaMC2AhhfUs5WPQvPozJboXqJhnQ5yA",
  "key27": "2BLSg6EcmsqFms6U6qt628tTnNHnAfx3WfyZ2K1bZFD4G8n7CcQfoWt4QcdCdta5Uqf9ZR9Y1HuCrXgZNkXiWz3t",
  "key28": "kDzSEJb7pjJiAtwK1q6rTZy9XSUaGRtdKPRCR987v2eLnFmyAzZMPLAnJwRkahT6SoCLYYZVT4sMzuUM22jWgYn",
  "key29": "3HxJ5opnmXYcJKhYoHkdsYosU4DtQuXfXqYFmrNYTUHqUZgc5KKsHWgw6aHbzG6eNNj8SNwDsiAjZfxwEBwcRC7L",
  "key30": "4Ykt2DP1jAckJpbnGSrkSH5QCMCsg8GQ4VZnk1XjUjtHxU11kvsLACPuddwD246xAAirte2G113KFaPfQYCndNjC",
  "key31": "4fWzGdEYyf4hU3vijQ1hFWigkPg3DpTRBBJybV7QoCte7vDs6aHV8xRHqwV8gjkrjdCn2NW7Bc3sGAVr71vg5mPA",
  "key32": "4H8XHZ9p19foSEywogZHak1cE5pHhPZ6utgTJL3KXEjrqhWf4XyaaKvwXikr8Sv5uNTSbdr61fZAQMDWKq8VwFNp",
  "key33": "4LuRnLdPBLPhC4wVbZLYpmFRoNgorzawyFf33zJjtsBRcCF4ayr7Yc5e8oxkNWdb6FpdmG8vY7UpQGJMEtJhzkDV",
  "key34": "54sntgX4Tn8DPBCufwEgWZj6KhQoLds1cW7Gu8DXWkdmmvVC4iZL3vThMpYCM1xu5nqnD6yeG8UuuBw9N8y2fV5V",
  "key35": "2R25TQSdbmbMPgFULFGCZAnj3tzsqKD4j7LSP5Fn4ukNqqhKjrnwfhuH2ic2seNJD5etApDLaCVFSzgKMxq6jiMb",
  "key36": "4BrP1qaRhu8P853Lcxd6pBVdbnKr8Fi572katJFCozmFRPkS8oXpCMpLUUtj1on6mB32e4qJtGBSjs6DWiua9g4",
  "key37": "2CDadYQ6HEqnFQCeHf6ppscKWq6U98Zf5vWz75DHVyqWzGUAagPARBjZyWEVbemRm1tRcmPiwiRSjr6SaLJHR8h5",
  "key38": "T1HyeK5Lm9FR2ua8Qjju5EYy5biKqx8n318SeJAPExVCk6LMrMjjSEnqfSsyHo7d4WvDKEEE8eJafvvdG92cBrh"
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
