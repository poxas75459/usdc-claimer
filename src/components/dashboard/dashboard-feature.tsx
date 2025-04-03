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
    "4oG6puRuaJm5BuJZuTkhpjnEhhgzpnJXdf6NPV3W6RZfQA4jrfXeP3YybZZSMS9aAomiu1mz5iHBubPnuBfyxPM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvfZhfC2AkyU3Ph9ibXrLFSGxp6LwsoqPQ8aCBgewTQa166TCq68yLUyCTuoWUqoQxsnvassTt1Ed6LHQ92PBr8",
  "key1": "Q1GvQsKGya8Z7caJHAHZGmjmrEsUuAJkwTAs196mJpy8E5cH6DGibWGJk1ipytg3zD4oxkKRC465cMB7sMfGgq1",
  "key2": "DkXK2Rm6XhgGC7iWk5xrtAsaPR2jWPkW77qT8uVii72hFyoVx9iUWCPnuAZ3ek6NGpoKRoWmkPyM2ByLVq3Za8X",
  "key3": "eudvzwRL9Yk2GyuYnmPs5PF9sudk332jfpdo3q94LciqwF57F6Muqj2LG7zLGm8RePLs53nXABybWZ7GhdV3VCT",
  "key4": "28cKmtY9RBD7HghYciVmjUdM36RrPAoJYfDExKPYgxW1jiE4rWHyKdtTcEVhtRvJnXgJ762b829nhrfnuQq8pxxy",
  "key5": "4ke3YjxRjiWUG58ouuNjgYyYiQFmsaZA8FK6HxUq4oYZnWmqE2e5W5zd7fgPNfhTQusDWf1apderJf9V7P6kCPKh",
  "key6": "5qhc5MbqXTNGQR8Ak1gUdUAR4GGxr2j7KELT1YgdMxj7tEwwDtWxdByANHy54FeXvbje4FJFtFzxa1csvqrKtKTC",
  "key7": "31oqeMEV8UgVZcpyY3w9T7GFB2LpZrEvyZBVjU9NAHzWd31VWsp9B8FsRxUBH3NhoBMGBkezgVaYcRqgp2vYJVGT",
  "key8": "kXPAKDV1rwUquq5bpyJF6XWovCaGwYinfmXP4hD41vmLV7RHVrSyDkh4XrftgdPpAsgZMFX2LEgJHAYRbyuejg4",
  "key9": "3Kfqvhsd68RqYwVDBdzcHnMvvqcqbLG9CsYtk4ZmnRhpgo49epggPdfAaQWzrVbQjsmHNMjA8SapEYHg5TA1VXse",
  "key10": "ESNPvHMyyqQeUGxnf9AsuZuMfnovknivuZFgGBBvPpF1SbftC7wonNUChh4oJgnf1nhEVXoHXZxeGRhxEUDfcZ1",
  "key11": "5yrrvB5twBJf1T7qooTFfVHbq9ed8JfJbFT9CxU9HGySTyo3JSQ4EcbiAgauttyRfQjUGw4iLtYDaFn7fyhnXS2e",
  "key12": "QY7vRJ2BCvZCgHu1HMESDgYEwnKJsAKHdqS7vahSXNwgsSCWjk6anCBxxerp2NHhQvebeAZTPjhyxfaXMjrFtgM",
  "key13": "5nR778YKofyFWzHpXcWA5rTE9FS1AMHuN4mzGmaxn7YPjdQTRWqrgWSYiLQrCRghhwBD6opfbaJ9woWBHVfrWYoh",
  "key14": "2tTLcvw2fZ4LQegw3QXpycUN7YhUxB54mygoW2Aq1YLcKNY1Jw3XaZrrbShiy4EZPPdLGHsPqfFZCk5QZKi1TD1P",
  "key15": "2dehMvwmZ3FQE6HaZF8qDgMeTkUz7H6kQa17cg4mNq7gq6DPB4MC91HgwWUSaAYCDQiHyiWUub9SdbGFFDaF2hBk",
  "key16": "5rskbtnxgiMuRBpXn3GotYt8ei6mFFfebzRaretmRkyoroyhR4pt5RFigkCvgfxw3F2qJwRumU8BatFZYsZxfrUL",
  "key17": "gCzprowzapShL2G1fgD4FCxETmadSU3kerTAKJx4oEhm9YZuRvtvArHCUSepTWy1KHgx214XmhNYWEwSxGRT1Xo",
  "key18": "26XdyQU3rRMxnuyeScKdSyWychPZHYtJycCMAbtBA7eAxgYKZHd6RP1zf9LbTGzTb6fznT53bbF1GjrJiEWrfNAS",
  "key19": "4BAots3cUWWapE4G5k1DF1XhsNApqykzio68z61T6iGW3g9hRqtT2t1HjeHUxbFDKHaPFg2pZgRXoxVKYpDn93gW",
  "key20": "5ns61n5YNtRcvwCcG5hk8kUP9XptXthcQkutyuHSRxCXnNoXLiVDnfLxV69BQd2rurdy6nkLmEESjhhws23e5N5s",
  "key21": "64XkLoeAAYYAsHTAgJ9eF1dTQVettRD5KhoL2UTnj4u1cUXLg3H8H9aUV94BbjLBK5d5kcaHjsQN6edLcbWabvUx",
  "key22": "5Ngbjcam1oYb2g9Gdu4wcGiYkvHkmzSxBzmufELj4t6CPJJddGgqRn2dNE2DdRtwD7FYHa1SDqLWaFtMjnDhBqm8",
  "key23": "4k9nYjJCZw2uemYi7d8YwYErgSwVq5f7XXuJzqvqFdwSvSDSFfMZz2eszNeqrxRv4sWKnimJKx5GmvHt7kkMQzjL",
  "key24": "2t5JVF6SPs6vNuWy5JE2f9qnTapFsxTeUHDAbfm3cFWtw8JR44jrWz2KeZsU79CCrf8REpvuveTo8aAbFwBK4yMt",
  "key25": "2boaj9mnHh2JAV2XmRaGmEp8VJdMvy39oVEn2fHgsneuhyCTfcBnDHLYAJWyEE9Q8UV3UapWAxJTBoyKyynMHQH7",
  "key26": "37snU48fZMUvQPLDKzjcz9dUABxTNHuguk7H1eANDJwdLoWagadft3zAnScs9hYmLamdPF1sbQpGbGCnkyrAkP2k",
  "key27": "4WWHMbj4YT8ukMVR7xHYQBRr5mzaPqYhhsfNv8jCgRCFys3Dn7GfKWLtkoDfj58cBwjNYayDDGwhZQgr9snFiuEf",
  "key28": "3GDFsxfijYQNCiUfuu7VY55hG6d3UEt5eGzqtXSmJuaPKrpPVFpuMMD5jrF1JFRpTBiYjpKM981xPN4RHWUSDFGq",
  "key29": "3fvt5xhjkj7Nvq58Wu9eTzctjxHB2uHnWs6PqHt6cTGzN74spSd9YbL2xSkpX9Csf7PYVFE2Yn5aK4rqsehbPTJa",
  "key30": "3PKwg7kYjxyoLLR97WYpytdCK3cuvKcU5YvwmCM33YYFrsTMpM2zVg62ChRmxk2kcVKjB1ZZXqRJD39hub5fKtS6",
  "key31": "3DjQ6ifVxAwEUmYTL5GGVVJweihYVbCNxTGbXiEtdemY4rP6d3Cqtg5kVDcQW3Y7Sn5JGM9fk2JxCWCszgijLZ2i",
  "key32": "3sFncUbL6SirYqF8wEV4mVBa5tbFvnr4eWUoZoy9rTKN3AgNLvNgZ37RyisGogfAUGXnq7zkihgaqdhdJSqdFgK8",
  "key33": "x5VaGPemmfCwfFjLmdwWKR769MX3bjB7tvvbKvUk9aga3VawTk3CQAjREHGMCBwd53cUqMeSRmVp3g82TP59LCn",
  "key34": "2vh7SY16Z8h7a5jQt8YVpWJAGxQuDZx3cufE3S2acra956UxiuHSWeiGpucChdaxTBxU5hkSm9WUXeDi8v5JvCF9",
  "key35": "3Q5F4iG1V8tV2PocsqEKGBBZ3dJtZVfnHR12qPZ7B9rHqdd8Kw8GetJa2sM9U3n6qAh9FRdmbCu5j3MCd9njkyTR",
  "key36": "3VdbqsuZJt2yDcUKFhZz9F9B2vbGc35qBHjFo2qoVLwQLChkGeVbJggR87ZrQWEHHaKVsyJXackDnZNTEFmcBG6P",
  "key37": "29J9ErqWmhPLXv4EYqxfQDiCbECfupwoAcgkJ1m51bXjqLjo3xZVnqn2tnCNeJnXrnpvq7wtw7KNRJtALGnUQ3sE",
  "key38": "3TnDB761ff3jrojsaSGk8JspjE366ZpR4WFo9kzc7UEVNktTxWrHbXQCk48ckp4r5zBZfYpCgG5UE8xNiN11GDLr",
  "key39": "4SZqfBrnmQF5gbE7iuaqqVFqN43W9SkXRaXVLii6RKWLeAwg1yE6BmW2tqtmSCRhAUG7EBrm5nKJMsyGwERC4wVn",
  "key40": "tQ5bZD8bL6tFoHEm48dn17onYEJNtCJfakBwbLGZXm4YnP6hKiLDX6eA8HdSdTQDRcKsheiyx49BbMHPWp4rTQG",
  "key41": "2jMCDzb8e8jno5fTZC2MzULXNxBZ9ygcKHAyEJwfy8zBsGejuxDGiVb6noMgekJCQ63LEYyoTEUxCzpiWuEukyYi",
  "key42": "4oRDi1GpNXvyj6QoLBHkajoB5Qkk6tE4XnxNdwJZby6vMdotWjbU1C8z5j1CXNLuhc3uERGt9BpVzjVeB8z78ZRV",
  "key43": "4wqZT4ANRg9gYfJETgvZZphMB852jzEESBftqzwDV3urbqZBPsAHrQYxb9KCGUHMGkBfZhBxqrZMQZLuJUuNqJGj",
  "key44": "xc8f9i8HCspztEZ6DqdBYaohTxzUz7PxcHMvcijCDvbAap6ATMFp7qvJQogWozQW4LowH3tbQXB1UcfTLqqygRr",
  "key45": "4ntjKMpeTprbZHCBfCWZuFmgYGHzJFdGxMpXs29xhhZfRkSCco185U7whRttrroXZtvMfWMRFfLnZUhNzwfAdFHh",
  "key46": "3woDY384DMmzC2qr7tmCMWP4vXwVR6WsmW6ar4Fu5YYzQky1Sdt3SwSas47a3VYKoL1MpYKvmYpvDtFKQmVTFjZB",
  "key47": "VMo4wxXuNjjr95dN8bbAAJ7e1GcfUyM6GB6EM8i84U9U11aG9Lw7Bmr2yV8DKhup5ugQKdvR17T3khaJ6Gq34io",
  "key48": "3gEHGsv2Ah7douVAUpxmEL8wvUKp6hNY7QXBzSnRs8rrkU2RNbYv8FYNQkRmQ6W4oCLsCujMqjC2myn6adjqqBAF"
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
