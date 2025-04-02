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
    "36gRN7rZWpp7ddSu8LGrQstgiL49UHMKEStPP8e7thEs51x6tSdSrCpJXWnJKJGuuWSqvt43YeHxdbrwARa7VhRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRAH8c35DAcjGsv9BPiHtLkKbFx642EbsT3YxTavAPn3hLbrk8WCYs5CbWWnswbLFvCUVRSDVb9r3ADXdyw9AQw",
  "key1": "3p5JE69Peaw8tbr8qD8NKd9NmsweXNuQWD5PNPbUz3TpF86GaXGcNsQUJd4DcZCe1BKjrhpEPA5Sq9JnQBkLx2LG",
  "key2": "2N1K6USQnsJ4Z7sw6hdp6xfyhB7EeUY3dAs6Lw9dRVtEaBYZwnDQPs4kpu7h98SGLc3v6ZEMwFygpDFQrcY8kTee",
  "key3": "32peCMDLa61mgYhWApirJgNwaduHGUQuWsA8g7k2G6FXRxhxKYpcSdq4FnbhDoEn7Mob8wjwKKK37SkY1KKRWJ6f",
  "key4": "2vQhAobSQsJXJGi2VpT1RURyhukXTAFct7UMQkB3xckyV7o9PWg7UzB1tUUQoQ6xB2JAiobUFQoQSe6GyCrYsKqy",
  "key5": "4NMFnQafrFpq4v5V9ujkyCX2qQdE3oywcnd2xGRqojDb4FgNYGopoPK1beUUAHrKoGU8FCocf3v4quxwBwMZKsuD",
  "key6": "2vdycZW9djQmsAxYnq6XtzYHzATZDrVvKGgVFiWgWk4wPMdpCX9KD1GLShdbELdVK8riARFYMs39HKr3C8Ykbp4u",
  "key7": "3h9XnYR9A6CgSKAw3RAoTUEnpBR2Ps4sQN7Ho1aav85aFGXADQxHeSyePkrJUQqyRfTqzFnAKNA6aSCqBXrXKTPG",
  "key8": "24wpsSJqgknHNRUFP1qPSQsCCHzk69ARPwBDHeP72qVxyUZVGZyd8zLkbrTg5Gzoa52mDsJPoXknsZQ6Ruh4WhCn",
  "key9": "5nN4nnW8gjyCqUCGUnCaXNEWEdPZNwzAEDLpZY4mvyNZwYsQ9mh3tBqutGXark6YNHYhu5TzxaLd6iMURRKG4Zhs",
  "key10": "2nodAf6vguraVBhHdS9iBCS7JCV3G6Fj6U7b6memkNYr5jiMY1dw5KB2hnoqE2Kir5K752Qm183QAuc4W8R7ujzb",
  "key11": "TaNmJew5edQKAmsUqvwAyGPCqyiMRQpGfnPkkSFRtN7wmMaydGvNqE3NqGoWQWqffncPG9paBt2SbiNkkATK9nd",
  "key12": "4tF2nfhbbwTLf1YF6fUAWrwXaFrJcJYQxn6RrDdSu9giYVtmry9Kc9rkQeFU8p8p84vuq5C6bHpxo85ybAoot1va",
  "key13": "3WqUj4oA6DnWmiE5sVFJnzujF6YNACYhWNENGQVtJyCq7WgfGUad88waAFY5jgU1p9upcdhWQtw3X3As3Ue9KRBt",
  "key14": "43Aw1oEZvbVoNYKykUwXYejinGbFBGZrCdwWhoaY1BRvyTfRFUwJAryxAVddWsLXrAPPQnj7mRLsSjAMK3BtWYq",
  "key15": "22oQYpktdFcPrKv3U4FdV4uHr7bgBkPuVnPKSd5KEBdoXydWQ7sBrmg8V7VoBa9zMSvEuKjSfcTeomkPnx77bNFR",
  "key16": "33W8Pa5XmQUnT91hpF4aCUxTG8yCEAeBVMnf4W8tLyobHzEmoFhJjJ1BLDkeZrTCQSwm2scjuVYUKdsr4nM89PfY",
  "key17": "55e6FHqrRbHduj8iTiTZcAYrXMtodTH6dQqPo7HNKiQjaiQLWSJY9mvCJPq8kYZHoBjfypJvrB7cLUV6bp4xhqWX",
  "key18": "3Zjn2JqM1WxTGFXeYEUrr3jtX1cf5tkqfnK4FBeFJK6Q9RpG1F4vdFqdfnwHZAJSqQpA65ukp8gh4TY5Vm7PL7CH",
  "key19": "2EErFyPGAaZiS3Ng8QPK6jLWZCHSyNo2HAxpDrUbUAnLXtEd8e8TKqaoCZ34DrGXxa117dLRShokzhYBoqEt1EjD",
  "key20": "2Rw4qRsvx68FfJ82emXPhMnudPyU1MK3eskc9xpKEisVY1rDNcD4LxuqNPm9g4d9JByk2rPXo98MBU59JKKBHmXw",
  "key21": "cNQHv22uqRd38AjZZ7rnSAyM6p3RoEEigJPP4yPW5QaAMPt8naw4UhcHBeRfKvdL7bbpTHTe8jaCRMNV9VymvGh",
  "key22": "39LFxs8AjBoKgyaJTzBg8C2bVmoemWrgtRLnssNV3sczXLP3yQQnGsLy8FkQYxjw3BDTdp6sS4uJmvmW4KmEcRk6",
  "key23": "238siM3ptiU4hFF6AmESRnTydutswNfUwQcLdcND3j7HgovXanin5SnverMQENdyf9ptFvL4oYWt4S44vXd3mH6m",
  "key24": "2hNYRNJpC8wAef67SNtEWeiwRbVpMZeTGxPSdUan7GxxmXBAb48zm1RpG1895sBJsZuFM1hoYqQf7uaUqGr7mCBb",
  "key25": "3gGY7LQnZvZBZGVFe5sdo5s81tvNrk8CMfPJ1b3K1LLU7GqBLeXUA2Y8DVuc9xtqeYyogNpksWBZYmWgMRSiSkcn",
  "key26": "3pHr6GEWdg1nyBUmdqNrTUWD77KE66XpkYNaMkxveRvFjbC9wVPoRwbE1YsDRY5zbZWQcmGVG7Cj35eatgEUzoHx",
  "key27": "2dMSW3RRg911EoqmmEpao1jVcZ9F9zwZqRJwssMPSvHjEtyvdhpQ2CFdee8VsT5zPDs899gQpZb9YyBYYoDvWmWb",
  "key28": "okDBRPcri3bw4JhC2V2zgXRZ9mNXCXTVaHcwG7CXUXS1ShTNFGYTrCsBzjfRKY29awivCra5eX8dkqwqk4bPopg",
  "key29": "2ajmpP5LVdWu1XWziMcPeRfQ9Gx3Qjx8nLV3ZvD2B8Dq3yTg3c3XGk4WttEzQbMBuxECS6FbhajsgfZqyh8yZxDA",
  "key30": "4qaS1APDsYvs6yCm8vseX2cAmwM2TMZFuwKKuPtYE9ZoVBe4rzbWrGb7pyuxBUsmLK4NxC3cxWweJTvEXMzEFCUx",
  "key31": "5tHyLVG41iBmJbEF7VKCuZqezW2ko1KFkrbJdDvCWDn4pfoNW3WeHMKhoiJNwSEssbBGj5efaAHg2wTuPb97Fqaz",
  "key32": "43f8WmA8v4hurhde5a96oSdDF1HAzn3WF1u7AjUcpofWMHjpPxRvm8dgoWGruCVfvg5WiwUArL6wKCY8JruuM8ad",
  "key33": "4CjL6Wg7j5rVhTjWWPD9Ba2LLapF3LX3dFk8Gh9sJBVNcmmxoa1T4nMndXenh4pcMxKXnnkiNcHbqF7W8fzqq5XJ",
  "key34": "4ESjKtayoc7N7TSyXynbdkPsvtLvqRiKNrPfTNdpHQc7rwQJrp4TKT5wYD8GAUWPqFbq1WUQai7hzHfbrpaEYMfq",
  "key35": "2m9CoEVJx2wCWnyWEqtm2JThe8RjqKq6pYrG8BzwDJ8q6mknvcYckHhGbPPvahx8KjJDkG8uVKhXx2XpeCJYcpKP",
  "key36": "3Vro7j4bymHKS6hYWG4pGmxRQYNfGHQPQLzzbwPKd1WoMtoUUf54zZiRvyB5fFYsaxUtBgSJL25SskWJVmVN4MXQ",
  "key37": "3WyEaTQm5rQZGwbaYF24bec6QYCHKtK6NWLD2up1oqyZyjM2fGRg1wBjfzLZZPG2exLNPaoga5mXrzAMiUR7SbZ7",
  "key38": "2PPam2Cu6Nq5YnqCntVRSkPAhdwkcUmfGCfNdXjhS7heio4D21aNvgDXVyfcAjGUpqQqy322sFr1n5YsG47z7pZF",
  "key39": "pNaSqpPuyJwgVZy48w6Y7SQUdt33bVnRNoqDAmmL1Yad5F43kHWFFenfzGxZQRsv114xXEnVe4VSqY92aWdZQES",
  "key40": "4T3mbi3JkJvuFge3aHC5NroesaUGmpYVXRussnmyuiZqa12SjpY4mGTFQznvDkva9N8mLde7TYHjBYo9NiD48qqP",
  "key41": "5ynHeJV8hKTE1tUPT3UG3mAof6FjSKHgBK8pzvANSXHFpZiVM1EyQXZbViahS3gSvUkHW4WChNp42MFd9Gmt8452",
  "key42": "gJxCtnNDtYuLafPtfSt5RdghekAhmXmon9Ut7sYAErQS2v82hSLDsjKTBjaYuw1n9dtqwZ57wCykW2CEigTy9js"
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
