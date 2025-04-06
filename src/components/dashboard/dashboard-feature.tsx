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
    "5sjPtNpX5RnBF3hvSMdxMX16nS5SXUSg42TXm2zYXTtZQuehethUYgBnYkpsJxjeQ6UfnxU9xkMZsg98y9ttQ9u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyiJCYmhc3jzVjNVtNb5F22aoXw2qz7JS2Uj6p68qdTKSo9kuTZZkFChtuWcbjeBPZkoJvUAMskYALdy6d6zvjT",
  "key1": "5vhH6K8LdgCSBzkudDxDCfxqJdeFvJK39UqybPivhcCri3yiJnZbXWCsee8KEuWXVPRy36p5W6DwHYxQv14WroZc",
  "key2": "Kpt1JNUQJKJGn92unewCE4S6fEA1KmcN8BsFtCmYGDxCSHFLCJkNayovstxc7dab3zvbhtr6fqq7ff3fEaALkt2",
  "key3": "2aGfdYtqzmD3NavjYwVpWoCeHm3MvMCDJG96oNsrZBFffwTwGFbVKVJQnM6CvuukYDtvfVGvcCamQomRcgxh31Sx",
  "key4": "ZHxdZLT9UUbjuaEf6XRQEKc44LKLLfzwgXRC4J3BMBZzo1KxdWep6MhTknaE8fF6xFcRbTYPjwdxUQn87svgtkb",
  "key5": "2cZ32cPvJqchQAMcPyZy4Q8wUbcMQUXVbSw3kpa75jMPsJS3VQbsnxLFbyfKnuam73z9gXdwDfooW3VxRxoLC8SS",
  "key6": "4mcYNKDCmti9KtJDvzrgd5WmkB5z1WEWLVq8aHThdyd1ZqDWEatrUrHUiqWKJ2CCT1izB72MzZiecjWNBYWWYfxV",
  "key7": "4yif2Un9xyyFtoj77g9kkPNtanT3Ambd46Tn1t7JWLW19W6bgefuA2ZDQwaEP8MS9jLGg5y47aqnpJCjVYMcVZYt",
  "key8": "4RPoPnaQhjRAss4gQ94rbx1mo4w1K5WPwWEnZB65RHqZ5KN3MZxF5qDbnegYWCXGC2Ru7hTmhXFAnfrnKtRmqp4S",
  "key9": "4W2pJZCBRBzkaC14MUYBHhqksfER67jnz7ibWYKJDju4Hsjowb5byL4nUrDjMYLV6rhXWLJPyFLh68y5u9Z8Ev1k",
  "key10": "3275x9RCMLE1rikiFedNBoRUxY3DcUziTZsojZHnqT6QrErhCPze4FjTc3QHsgVgftoYX7wWx6Y28YdYKSq9nJgT",
  "key11": "4v7zLtA3RXWt1cELyWnmh4LxsgDEy2mRFJ2A7nRAn6EyfE3Woi7ZyekUvwwiKP3zeCZno2NYAbDhJEgTaCJEgr9",
  "key12": "vLyvBZXcFVhToUbQKyz7rYHmMqWuKxpw8xQFfpwd8fWPmpv2Nm7VCZmFpZKxBr4pRguBX4f2PGvDLCdniesxuZ7",
  "key13": "4KZ3Sya8b83F9ehyCxoQR6imhBon9ESQ7pX55qbuUQKmySTUEjebTa5VuiSe7KdvcgDMkeHwQCF8J6GhHbigGqDy",
  "key14": "5epSj6noFDhdcZBDkVk1i3XqVKQZ1cihpJ4aGG62pcRgetLdmjbxZUk78GNToDU6jBtQivbDRU1EBtJMSjC14pRH",
  "key15": "5DT6zcvZm7t63ECAiZsiNbBoTJhNJJDxsHes1e1iYWXbKDjR7LxLhDEf78xzBf8va5DJuyicbpBh299gyWvE7mkd",
  "key16": "3c82ENKTVQ1Z2Eh5C3MGbX4xCUhvMHJvwrhUcpFxrzEv3Uu8aFD2wCgHEi8fTA3WADvXia9gSLbMhnE2nhuXrzdL",
  "key17": "3kPY7XudRFxQwV2iMsuq955D7yPRqGhST1ubgeQzfgRDw9gWCHD13HHv9HxBr97izs5hWJ4TQKC6GXZc6M9zkZ8u",
  "key18": "3r3kkRVCQvczHCZZi51HmeZphmDgp6LE6VpEhz9XNGic81oD6qhyKjg45pG5rGe3UmWPKP6DAPaEtQcdw59zeyQZ",
  "key19": "4mCWk65PyiwqvM3nC71kXymnU3V2fRakJM6iCQFRiA9QktTTZjZoiefBXXg9sEi5ADG8pADHjFsWnSex2XJVb3JQ",
  "key20": "3nXDRPc7CaM8tHCqsJFXCnzso5UUx2CMWYhXmcgfUXBNP29jZQyvaTQhuGMvFFEtvPvYzrkBSntMRoaLmgs42AHJ",
  "key21": "uSSDVtuxfy16Dz7P4p1QDEuKugga78U1oMeWKJnpBk7CdwWRKvi4YRmSjTcwqEw967SNxDE2kz95bhK96c9uTnc",
  "key22": "2xBhVMmRjgmEvSFY1LgnWtaVF9EqwBQJqe5mLyx2MXYkRv4L1F2vGpokrJWxN8Qax6J7aNs362EPnqmLgEoApt4P",
  "key23": "CYkiecQssCWSw1BgicWQ5QmihXP2ENeKt1ESvUiM2AMpmj1jFpM23NhTTXDtzf3D3ehYUDyveTWoXpbtst5NX23",
  "key24": "4GVpFaAu1sACL7EyxNXQwTG3L2bhDMkoH9Sx2D4V9yMkqrMnH7gbB6PopS4Rs4CRg7Ybm8aDDSZae4R8xJ8mg1Y6",
  "key25": "432NtqAEPJQZGb9D7WsZZXXSgJRAkVjRjqoJAHPwoGPVwLxisTZFhtTZAWnbQmRm8fh2EQ8fvyv9vJkKBHtw82n",
  "key26": "2kj5mFJWb2S15VWSbMPfMViMiQG9g3hA5T9ouCeGTCQs3LYYt4yr67QkWbzjgLSpYYNhDsdC28CtKVGufJ6KtJsx",
  "key27": "26nHKVLfcj2igAVjgWWsJ8tFzUkEPHPz346qaH8Jnh7eoKYN2DSPa6CFtMxySpEXHn48gazgDgW9zpdhf9tEkayd",
  "key28": "24RMsWKwvwxb9bdXY2C8SBnVSFhZNp4pi1rWrNJ3EYP2VpjAGs4N5mo66Hr6zSizg6HPAAooFv1uCjDaPhVVdapq",
  "key29": "39phqRoabLYLoAeH6rM2ScXQ2LbSvTqdT6S43MjFvHsrTaBrwkpNVFR3FxJWUVvFSjPvMyMQVjcdzV1PsQhN8Cge",
  "key30": "2azx1XhB2B2RQRARmYRYsAwsJZeBeBsbdQ5PApsZtaCtyctiffy7aUtxB4PmisFaL3fUE9zaVHbJGcpvgtR1s1nm",
  "key31": "2PbN5md4NJgw4zLtF54AoaezfppFGMVohTmSif3T4nET5hEq3DCzbf1QDJ9U2vQHX2qfvpLbCA6ckekcSdTu2Ltf",
  "key32": "2rkKAqv9UWHtwTRqvsvbK2pLv8N5nHmFE3RcoWuQgPfUfHP3aNxeobgvxy1dWk3MiHmiFtHwZchD96EVX6x7Yrbu",
  "key33": "4bFGkmS9Jg5uwbiSZb4v2thD3hRVhjUDNUaP9DHJFc96CZdYmUF5CkKHTDthkdgq255YWsi5MQQoK1fTcAMj71eA",
  "key34": "5KtvPErFXwzSPNRfJed1QMmunYc8XUXpFG6Voqwskwapag8CGhzJFsQifX6VzvhAUpUBek4ANKMkeP2XsENQLXbg",
  "key35": "4zwN3irKZCRDqWBQMq7jU1EZo4qrG65mrHWkaFPe1xz59KhyzHMEUhz6j4DAoir1132HqqpafEFWd2fCJT1Dait3",
  "key36": "5sTusfz3t6yRsa3ZvvA7AxN85voYcg6sL1SU7zMXi1eCdvKVRxhttndh5wcSaYUWac6gLmXHW5s7mpnuw26awtPo",
  "key37": "5VDt4tdbfybkEAQrKzqLDw84cjhQ6DvKDk8HMNmzW9Y2rr45DbTU6jdSf3Q4Lav45zPSovUqF972gTLRPAtBnrXx",
  "key38": "5iHhQWo2Y6kGT2dVjQnYKSLEPgwHk2S6RL1a3j2ae5gEX3YPKmHz8y2X8ZcokywGSurf1hF8FMECQzdozykvXrs6",
  "key39": "2drU7M1NWnsjvCwvRFD1q8Qr2UwR3mNGTEzEqzKsoX3MZbwU32hMKh8md7i5LBNN2Wx8WSrtjjKJNHZwEmc9kgru",
  "key40": "2xE3DhEEoW6xiJcB3kH9ofssY8PbvyvSN573P8EB2zSbGQyjEsNBgPodj1tJa7tApyB969ePV5SPZaRLz9cyvEqS",
  "key41": "T2YKombxw6otDpkUpEuMXZeaLshn3Z2hJsEVgRWEKWjypQV2oJpnCNNFnjmDpUCiYdrdngnWrjoZXZv1mY3fTJv",
  "key42": "TiFfzzY82cfTXMFx6fcUmFGrozxQ4TuXJfGUkL4AicXxbGyoAq1qbdFwYSwZRrEpsh8fxTXfMRrsts6zTgiDP6R",
  "key43": "5j3CdFvwpZeJ5YbtDRDVx1jzVfsi8o7ZPEK16e7UEtr6CSHbfDt8iNwdDiVmUToj7M5GjToeNVM9USqPAmXdx252",
  "key44": "3w92ijNM1fArzMgpQsbFrYe1wJYmS35FqmubifsK7DiSaHcvruTgYUWxLAVnZsHWMzAskVRraeGTD6eLh255ctzz",
  "key45": "Ya1CC8Ac9mUNrAsi5NrvQPhAqsUiXTRPJo6PwLoTxnJw2iNyDDhN5PPYBwQWiaoddVJknJKW87ShBi1iM9a2MZg"
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
