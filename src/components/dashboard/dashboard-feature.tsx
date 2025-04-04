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
    "dG7qSHQvmcb1vTfwEnk31mRpRLs9EvchgW4C4Au7eVUeP54KhwRHDQ66eE9id1jsZecVDLjdvqMAbew6BSwUyK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suNNUBmN83gGYz1493UWXqW8niqp8RYa31HguZgs7PwS94B6wKkhmLSUsrESg8usg3KKqzpWMFYMFswUZDXsniP",
  "key1": "5BuLZReo9vQ6tjt1rkxLoyumx3qjRLHzudvBzWgYDehWjcAHExtfzCHYFNQziVufaXNsp7zDwQc2zZpewb36x7wK",
  "key2": "5vs1DAWB3Cz76G4cin44juC92ZeLh4w5naW9kBbJtokwVLo6cYNpZC57jvHDZdfdzNQBGCJs6SSR57M8v5DWAHtE",
  "key3": "3KPtidaFFJwEGuWA5HstUy1cGKd5BagxQdFn5ci3tDdD6oZTkcgMtpERqx11Te3jcWrYLU3BRZr8wVyEJJA2jxEg",
  "key4": "2EG55LHXH6xxFbrgooq2jUAkfQnoZTWEeCFUfmxBpnH12AX354f7JPMLLsbuiidJZXKG7MK53DuSUMtv89kPfaaF",
  "key5": "F6Nu1ghuAJoa9odPL7qchQNQoF5sw2PyfiATSvM4d6PSt5eRx4QS2axYnZaLeomykGRow2sK3a2689UpZcfyzbx",
  "key6": "YCVjELKpbDPx5Rs5AeLjDNnEKUKknbNCc3gU7okiwpQdSayBbQp8rjfRwgaTQA24sxWpFLdtw1DCCfLsA7Cn6xA",
  "key7": "63ksWQT5xY3GvdiZ5CwjYYT4VCU4W6Tjvq3gcj2Q5vr6JXYK6Yv1X8HdAPMeeLuGwSsqL3MUsaiEikKu8rNohwcp",
  "key8": "Ao1CFhXJ5S71CGusDog3hkBMPm73rv2ucAWNcmLug92vYAcEMTHHQRKpGi6c8rsjGJm2T3z4RUCmF51192G8AF3",
  "key9": "4Wygw3Zzi6kGCE4nK33CWyNYPJDP6GSeEnWsRHhgZEPdSGqT1eEVHxVfxf6yqiMHnZ1DsfbXWpx6R1vNFAJe4ZRg",
  "key10": "46TZKmjMYFpq75V6ibDVo5dh9KxXq9JVjyqFEuuLFzu3BErto4mA9H4xK1XRb5W3iDXcmptz26GBsWh8SZvZ6tNW",
  "key11": "5Wo9JfsisTKJNR6pPupNtFaWTK2wQEKRfqoTYT75MHtyXo1HdxPUo9V8krgYd5Qmj5rWbo5hL88keU6zmssRm7zw",
  "key12": "axVb8SYGcEz49ZkaSTMBQdiBGXJKi21S89CC5bKWX4eYCuu2Toxb486HVVwPNuq2vYYTkp6a1ufYYzQsgqwZwFt",
  "key13": "2ZCdwWLpPLn2v8cx4LTr25ypQ7kukpGuh2eZ86B7ioZUidTp22XTefa6Vq8crbzFhdiV7bKftJ6stkE2zkzFiQFY",
  "key14": "2TeUaoAybeNn4j2LVrAMdVhaPBtFY3iDVWZzjf2JvL5n4RaJWQHhSUbQDRsUmakXqmx54Mzrp5CD16haR33XibcC",
  "key15": "2z5vSsUnLq6LLYjsVmHqAUq9636rvVSCcxaADmXXsHRo3qUDR1stTuWJC6XpaHGjcKQEDhGo4DtCDfv58HL15RHW",
  "key16": "5NuJ9vmBH8R477WF7oLciJ4W2rKd67eKzRuSTG1S81u9nC47AxyVYd6J1mCDnPSGQMEwB732xRuhuK4VyaLq5q1F",
  "key17": "qbWHuYZMe8AA4ZEEjtEZT9KfkRrJysUrQJMzD2W5Y9njy7Bb4pmdzQsJrqf2gsXgrruh7GvdQD6dT2ke6q2SaCX",
  "key18": "5oofFJhjGus9CGwf3CazknNs75KDvQ8MXb5PrCMydJCUmpaaGsxcvvdwxoSQvKAYemB3dxLhECFcQgGEHGq972Go",
  "key19": "53FK2M7yf1aKSCfJSJ1H3xg2h1EGG66T5QtUB7mrRccpnsRFgmQqkytfJGNDassMMKwX7V56XyEC9vUuWbmwH7Az",
  "key20": "4ysqP664ebDiBrm6UBGnDy7EPCwaW1bs4tMNoEx6u1K4hSrg6vZsR4zSm8PxmosY9M4yQ5yen9oFf51VeBYkT4ix",
  "key21": "3dcSDuuRy18zcGegfteM2Vah7oxNwytqL9S1cw1Ay6B7XFeb4Mu6N7yeaJqHJgBWNoCDmNuEAi9tzf5WxXvF1GkP",
  "key22": "2PgTNxTFrMLncyiGjXSoqPDvqJVkybkmCZpiDFRSoueaAFFQqPytpJfWtDjVce1ZR8pNZWyjeuv9CmsG386xE2ER",
  "key23": "5rMzJqEyGYr2HCqNKqGkpmGMmYVmEbmjXbSSmFjXxiDBm3kp71yJKdQJL3WvVJ5nHGdEpeQyfschaZdfMcsZ98eL",
  "key24": "4DxSVJwDFRSQoHKKY5Z2hA5KNowJXedG9HtJMAmtMjd4k8XArf9wPyBrLmTc8RaSfoiRPuXgPpp3n54PaA8h9h1J",
  "key25": "xL6Fm2T9nBsfzmipzAJGGsPWsdZ2vXjHfauCL73e7BJTg7eJWArw4fRDTXzdF6jh8AdZkuJbDtKEsaDWHUrUjC9",
  "key26": "3jf9pNhPwM9f2ovEA9abHNp25YLT3GSDgi1HZpUam8K9K12nyerUR4hDQjGkjFLbLW7ZuoNUR9J5ovKaDHCzjQAT",
  "key27": "3owYNVXYNEAhagtQr6aqY6miVLpXCjt3L7NLsE1Nb4FhhigEiFXQVD7YDQuscrvBM4B9sJG6T7EtoiTu2J7B16VF",
  "key28": "3Bu8fbkZLKUjPyj2K7kFQ4f8Xha3s32Ekkpo7LKLNHepRqtGzenSjdAYyAaswjPyUnMR9NZ2smPBrqT9wL7E8xpo",
  "key29": "58xT2KL2dJ55UuFYYovo5sAhfDAwczCzruTr6PgjrWk2yZELwnLVvJ5bgFELoZoaXeteHra7E4i8wxJUuFimseGw",
  "key30": "5G5R15S6yDA9wYZptnibjcCP43GY93Cp721XcJVwPjYFb3sPprShyWq5BDcJAATDkwaMvHtp7ef5FaLn3QNhsD22",
  "key31": "PWUgVbxW4ELfMXDsNzG8ZAgYCMWMPqorEu8Lj6fDCXBzScBGaEqmM7qNA8GTvLMjZH7WF1E9mLhfreRQ6xYwePk",
  "key32": "3FJY1HfpM8eTnTfCYwUag2dw1GLqKrJpLhEuC9RVtLWsLHZqqH9P8ciqiNNjzWXex7tWoDkYVjSGLpYQeSCpysUq",
  "key33": "5MLSVdf5XAtUo5DFrBEEbyf1xsk2jkgzHmCgqyQLrbBrFtgYkY3GYSrKZf4gmgnxoTY3GgF7wromvdeu5m4gRmsi",
  "key34": "5fvkQDaR37EzVkD8R2JyF3ccQ6Kar27qvu5x9K82xTm66uLqkPzsCtB6SsA5TzfxubgTdHCyxFa1c4BhEjmnSKwV",
  "key35": "3sd8PK5cPo1aJk3a5kKHbf935abdGsfM5R4cvoUbVB2M2F13jff9s3LLhWLf4rCjrnx5rf5mXrcMMmELVQU7w5wJ",
  "key36": "r29fqvMqPUGhWVFAbyMhRQKFLWp5xs4rEVuqB1xsHsFSHC3NJ2aDryz2yKohR5KbHR48GTsW5154tT92Qjd1aKv",
  "key37": "5ZxusARq8bJ5SpV6TsrQ8wG9eujekWB9qyMo5MGZ1xU2RnJg2GkdguQvQDxCsiXeJUCeaBZRzmQ5Ncd2YEBHFVE5",
  "key38": "5DiTuStT4PM7Cm5h22dZJ91nA4AfXxr1F5QepWyT9qjNie6rvtaLRjtjQCtzKsavEWCFYhNQfq3YCv3JKUgvWBQA",
  "key39": "4MfPjEazoZ9qCkxVGocFTTgfTC8LZPDPNx7gyiwgNGqhUR5e8vkWnkZWpFui7TAgyvjBo8n8c79xmi9n41h8M4u4",
  "key40": "SCZhyTwZ1LhoAWZtJJ8YcKkFDaH9iy2CQhsbM24j8P7rtaRpfmjDDdNu2svc7BbYkUvsbqMg9NGG7Ze3RGY9a41",
  "key41": "3DeWuyVdkrnxdaVuBrK4pkgqzNpf4woex4dqAtRC2GgB1FBcxrHuFc8YXCo7QD7f3P4K9hLMUn5MBog33ovJUnGG",
  "key42": "4Mypj1bLbfVGtCV7XXwAFtSoAXjeYYqSSWmzw7npp7sPZSZpn1svpB72a8z6r3f3BZXSgoEVB1mSvMziPQMQmJrV",
  "key43": "9GichT2cgG3rnoZtDmVBtQTtEH8mEayiWs8DfGdV8SUvFVPkK3UtJGEfQxD4sE5nEFvf7saPUmRxw7VtG9RUpXR",
  "key44": "66YtTqxpNeNM3SwYmo7rne9JyTg78hoysZy6zR6JEKhqEDqqjENBa4nJPGMvDeB1vuTwiGLuzbRPN5USNhQGboLz",
  "key45": "zvJSjSof9xCQ5T2SDUmPnur1E73JbF3pK1giA5X2bf7mzCn4wA3qUb88xhY4fVSPpJ5NEgsj6jEHfwwTpP9ZKYr",
  "key46": "4QRBFgmZYyqD2fjfNGKfu6Av3Nvfu8AhqdTyF1ZJrva7REQmqziUQ15bEToqN6RkEiQks1M2CXANvsqEBZoT3g35",
  "key47": "52JL2M6q6o1xYaR4a4Gmx6QyxEKtFPmeeLtbnoCsEaQYUSiZsowxyREkNPN3FtP6u7skpPqSaCHtwd58odbA4GYy",
  "key48": "5TmpiNQzbBDXWZfpMfcMxs4Wm4PDJ9gW5yzEM3VGhRRYoLDwWvwjXznDE3NRXTkj8iM1DaaT6SJAuaVhggU47ZWz",
  "key49": "3xvrZjqFaBNnSQEfWhpQkBi3rnsHs9jsYgVEChjFXw6dUQZngjJYyfGKStQ3BykZK8oaCC5hBEgKUK6GZsRgmzYw"
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
