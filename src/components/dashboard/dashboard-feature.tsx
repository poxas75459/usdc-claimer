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
    "3xm6ENJv7psoyPwzRFc5mMSs4GMJAKkZPWHCaEiDsE5sszdbckpXMgYwP3yufrF6QP37BFrfbEeUmEEdJgzkxZx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDugRrY93DEeQuhGoborAuZQpydmAUE43PXhADqwarzcsmbybVxx7zST9aQJ1fxfhu9WJn7T2o9y4RtuJVPeNMv",
  "key1": "4TibNKzhTeEzzH5g1Ja1RWvHg8AFS7T3zs598ZjFpWvJpS7UDMvVBCjAjHfZ9UoCvoPS5sTAxcS1wHgfdC9NzDhu",
  "key2": "47NEHiN4hChnnZJJTHZz3KS2LpbbwdDxczkh7gKABXm9LNDvWLzs5nfimFNj3hQf9NVCkXNtURu7t2RzWccDRcxW",
  "key3": "3xHXJZQZy2JyQP9mAnQ2Dg7uFu873QQngtdnoTPzcn4tpaLxRmMdMWBWV4oC1Fv5UK8eDhxvMxdT4btcpLMab3AP",
  "key4": "Jj9d4qWYVifAvJf2uavThUUnwir6UaRwaVDnB8TT2Ef3f1ozYYxyMAGDPLijtMqQoLPv1nZXLqXSnq4enhKVLnQ",
  "key5": "kttMCJzc3czr5t58J7vQvQf163VuCHAq4b32taCwb9H49Sw96bEnC5mPNz1gxTPZSYpfu4uuLYL2XV9RJ9xR38w",
  "key6": "5x6hXJy3ZH9MQBEv3N97cKjzCn6oMLErfM6QQ4Ac9j95k5Mqvz4PvbV6xRgdGPQjHnQ8DNmZgtsWr93n5ChagjwE",
  "key7": "7syVWNReYdTFA5Jkx1ocSEdZZuvQwP1crymNm3f5MwbyxPuZ52kFdTTcCCaKCUxJna5YaVphPqsKnik2SddyEYx",
  "key8": "3tj9WacGBoeKpC1UjAKQ8QzuwEGob95uazoqiGEHmzB5jczC3v81iPGDJvkuSAXy3sPQnAfWM7vzx67Nxaagupag",
  "key9": "5smfgNTD3AiZmmZsmfivkPActYaRFRJL9Xxu1F3GgSF5KWSLdhXguZu6hNUTWnSpLEWmgExv38gA4wgRH5duKkFM",
  "key10": "2F4yMYXScqHweaG6K5F19XRRPuYL1XB1gWj8SakCEu6zjtrKYVEoshpy5kckwHv92SaTWbjTtrXHSgKcZ7pDwBXe",
  "key11": "Ari4TAHoV2JLWTUf4V3nVGYwKVJZqqzYNYC5zkk9QagJSVXnZG9aAaXY4FYMqLb96HLr5MjEtdK9YnVxquoVHvv",
  "key12": "5zHjcVvRqSPD2WvC1HtvKLfA3D3z5Nx21GLE1NgyAPc3fEFLj8kUfkcUkRViRuC6BorvdYvu9GVD7CSHNQ6D47pR",
  "key13": "YoS9eAoRfADd5MVyx3uj8RtjqfxKYsSEBnch8FLUcrGBWm71ggzq2bGgw49vRFWzrtmu34zScMyFUEQhkLViM3n",
  "key14": "5CVngTZiWWg219C7vX29D2T6UjZjGWr57JH7e8cCD9xWS6XeQdF9D9JU8JiyVWK1gXk7oA2apykGNQDJgjJg9Agd",
  "key15": "2UVNNmhGQTC9VaUcMP3tfYJgbrgp6hfCcXa4oXV2Q3o2sgRr2A9W73m5aKEn6j7vS6wRTkcNNFCMKnekEvGktZMu",
  "key16": "5FAYVTyQVV3z1fnZHH7yhxcQsZ4EwSn3cpatFRqEbQZqFiPg6a9ruYtepZw3JU5YmNkRRhDACYSmDUVR1YFBMwek",
  "key17": "2s45ryM59qiYgZz9knf7a7wivwRJPRHBGBou2CZTJFAqKFqhkCvK3Xf3rc7JBttFzPS8RDHhRtMczsLDAzcL7YYp",
  "key18": "59XdsJ3661BnGU2C1JEESXknmiaH2b7HhRYpb29m8XDTjtRujMJeU9gqPMP5YezkCMnC8gJq9vrx92TphBXmcJU",
  "key19": "4QV82KWzAkc2wbGLRRW3q2fTDuZH39ACNWoZ4eR46fvQzHgyZaj7WNxnBq8BNVnbBjq4VQqACmdvgkz3aqRBoe24",
  "key20": "DTkhDbitE8E3YkovhWW1gQkRkvL5uWF6wnLtmdRFE8UVgpRguEZxPczBrscMFunDzNvwLQCoY57EmVwNENWXAPT",
  "key21": "NrKsUpzMtf9ARuJw8y5o7yEX4LqMWibw7x3Lfosotp4Uw5HuyGWeXm6EqFr4exwMMQGs78infVpANiEVBjAYVjC",
  "key22": "5mjeweYnUkQ3fER8g2rRyYcWU9D5uB6djNFW5hvBHHNo5sYtLXVMCFtgfjjojtxHumLDL2se3RXiU8TSUQ5R4iVp",
  "key23": "4Cc1ux8ozDQFxBnSa7sYx34odhzcNaEG9jf4mwRE7NcD1JbnUVrEZ3D9dVFCHZYVXTTTTo4az3Dko23dujaHdZPR",
  "key24": "5UcW7AHZighXvwZbFes8NQiK5vtRCW73U4Qyv7n6KnMdkRrFBLwtHb1s4cA2hXMCouE1WSi8kbjqBSzxx8R5H63F",
  "key25": "3GxWRfhtgRLdv4Xi1gB5YKcso6dZDsGB1Ur4RporK1CVxSsskxJYuVTsws7teKaMTh2jVYF3SanRX6DNAdfo4o23",
  "key26": "2cRJ62p4KdxYAkr9VwUQ5qpxUFrW13bfGnXxV1ZCDcEZ2XCDHgJ5imgRDSXdD8EEjrA2GMUoaAGjdvtR2tym3cXA",
  "key27": "5URfh7bvbeAEmpHqimfSM5uPWo6JSwErXTCHbc8tsMTGJmBBB1iJkRsfE2uHHCyvRtXKeice8RpT6nrqcxapt74u",
  "key28": "4RMb63qL19gDm3gNQr1ubeM9ACYkdybn9rpC1Ya2GSKc9EFCxTwt4AHLYYSAvLYGrbGsdvMbNiEuHLTEVbphdkdx",
  "key29": "4jFKDUo4FTi62ejrHPcAsGr1KpX9hvoFz5kLi7RDU4PvHs2jGXkUd9d3zwVtF44Qj7MdjztvCc8K4EAW7huiUo2U",
  "key30": "3YGKxUPPgDtGhrCY4nwWZiFMoiuKCN6A5Y6pW1broJ196quU15yWqPXM2cms3HH9Am9VKYMxJuCw2bQJVC81BSUV",
  "key31": "53YsGQB6xtsG7YDwgntJCzNm4EkJdGjRysFUsHdknVbj5xv1RQ5MbanXhjbQy8xM4ajeTM1B8gGW9cehJaZrp7hP",
  "key32": "3H8uzeoBfSgFz31equo3WM8vxZiQT16s2mU7VapaiH9PMDg3dFbVVTvKQvPhgojiw6HX8oLTegXuF61LBsgtyZUv",
  "key33": "2DbNbKgPKt7oXEVGGmEFUvaoDQLCrZY4L9uMc1yK6uvTuCWhZVFSpJq8P4KCBFGkpMr3PEzxkAmbXryYfkXytm8c",
  "key34": "3GchatXxvp2EgbjhLYztxJU1niBRcGMq1NFjqDrrCBU1joj2nYoffbPKbCW3fX3obV12kpA9S54BR7DByjzkjeTz",
  "key35": "yTUdZU3Pd4zGmQe6iHLE2f5K35XguUKLaBfnmge64M8CaJkvykmrrKid9w31C4P6FBcQoEczodCVUXtG263pR9a",
  "key36": "3bJewSmx6cuLS7yrnrmNk7Z9nB4E3aWWNbiXR44nTWJ476fyea5KanAXSBGkdyCeVC3NDiUUrLHGJkyn77CpmGWe",
  "key37": "zZp1J7nxenRXBzpq7hTXj2o8JdSm9X9nLWyrfeWufSGgwwVvtjF4DKAP4HYxa2UX1DpJgH3WvfTnsyfpx3mpkuZ",
  "key38": "4uH4Hon1NYdM6Wk7jQRJnqUBCqyvJpumSQVL8vfmefjxzs1aDpbUUwZ6yZBePQxtjpSXf78mhHZiaE5TPgMzgCRc"
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
