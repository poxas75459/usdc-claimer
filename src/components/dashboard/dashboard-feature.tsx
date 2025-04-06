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
    "qiaXZ4yNP7p5DNsEsS6qhuZNpUpXwDxUJzmuGyXMtQRaTeHzrQ9ZUJYhjzoUnuKPjPhL8BRxkcrXcQWXbqeAPsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "apbpWkCBeG8qzoHu5xAPrF9NTvFxMC48VuaudyLvp5JvaaDxdpK6fXWb5Sm7EYR8QxbaDAdttN8QjnUpFXQF33P",
  "key1": "5U8cFezCWwhBZj3dMsMrJCrET4esGoFjoUPGB6fnW3ocj71fcL8Gv4frydxjoNotuSRbzuXfy32zN215zK5RqodL",
  "key2": "5HctuwrgNNGzx5FwW7NcsFn8yaJpU8fXKMeh51QjjVHLA9icSJ85RkwvGFdtdyUuqGUfnxi3GYjeJqhFFq1iotuC",
  "key3": "3bTYL1tsqq73xaytBfu2myvqwCu5WLCXrwEgzwYxwmX2T8iZn6SXxJGVgBaXqoh4LnzcxYaJdDH6yZe3KFWBi5CJ",
  "key4": "29YmXdhqdqriTay5LiH173zKGFM1PkCiFgWdh2pJJhidfqQYK1DbwMMmQBaP7ycXbuuKnRXNRDxfqyRJJtemGbH5",
  "key5": "3qUgCiaAdHX3BHw4aRdp7mYxufbiBGs3CiXNSnk9HQHkmJ9FUi5nXNpLieevSf2ygR8tEEKPoW323Wt6zjBer6qv",
  "key6": "Y2s641X2T3aMDbkTGrr4vzbEHWSvo7dd6MsgKMXJKynznhxxuu7a5mXntdCUPwKiiZRY34J9mTGtXipbDXCFa1u",
  "key7": "5WK8EWokmYH54wTXVdDM9L3HdT3ND1HCS7Uh8iQQPosWzgD1paXRT6QCm51KKoUbvpPtuVqeCJUwyZ3dJjYZSDT",
  "key8": "3qqW41LeFJBaenHLx4utCJvvQnQd4Q1HGQvdfQeNjgtwJkLj3a8qVH1mzVaB4tjbc14UCZTeyKZ3WKgsoMcqnq67",
  "key9": "3JMxXjTWcrHnMdQyzAYPZquCX2qUbLnR6pcGK6L7RzpDuAcjfqcKTnkZM7AUgKmE66fPfcA5BthGeM4ekb6QBybP",
  "key10": "5rDHxM9aDHy53Hf1aHY63NowAjNEVvD3iUz35JA7YXJacJhGPJzkTFPVrWnb1kERNSrHt6sqmffETLx961BLvdeY",
  "key11": "5aF5A2bhjX2ewSvCxCHLkrQjVbXZKmoDdtKPY5EtpFAViZHRp4bY67RGXZ6LWBetRFL54pUfBcK8qQLYwPF3AycA",
  "key12": "4SrqVz2um58sK6Jc5TGXEUTFRbPpzvzsN8gdFKC3hP1RbNHEFrgDn3jzjkdJzbxapPXvmSUfCE8YHdTDnM4VTosL",
  "key13": "4fjvmcrtfNS9qct1Ud1Ne9KgYZoPk7cqD4gBEdRnM6eZpUF6G9QMcgrMwp6pUv3yk3XRbQLUrraeW9GJCAygcctk",
  "key14": "FyAKfy3CPa1fRuTg5YGaqwB5hgeV6CU9GyiZEkFQBc352efZMdu3a8KfT6ammWc4dJi2CUk1TYvYvmSRxf3RJet",
  "key15": "24K8NyXYc6MLBbWgttfrUt3YtGkHsa17RbVYky6QGd1sXyK8qqtWNCH5LuLLssVFTVvHSPqFG4RF73WkmxbSYTCo",
  "key16": "3iKDLpzbLA3UDqeAQCzMKjrj4x8ivvoPDyz1zJ276LvuCoa7QdaetFS2QcfRRNk8VQ5iVijimbx5iMyTDRqTxkpA",
  "key17": "3HoySEQb9trRE1tVCtLXqvJ2J2tWnWRhR2T6kD6TVKSwNDTSEQ8Yswzd42fXqcPvk1DrGS6xMjS433Baw46Qwety",
  "key18": "5ZigpUFGrqxsneYHtpAQzU9qN7t5waivhaLdJTFaKkJs433VewA9M7p2W3hkA4JUsyXkBryavAU4vxHrxiFxEc8j",
  "key19": "r2s6uZDdKqYh64a3Rt124RmC1qmdX9LzjfTn4PppRKLynunh3jAyM74JNo1797DZ8kWYRgm75RHdKAm89NueAZw",
  "key20": "49RxrmwTVPqksKfXisnz2y1Gu9a8Fn95rga53hnrRmF7cueDm3q6B7Mu3AnaqtPq5xYJ3qxiNigvda34aJpKMjed",
  "key21": "3ykXguhgzWCyA1CJDssEwkXcLQF66V6vjmE3vnLm7iTbUn1BFnXXdeqH79XTnNTKNG8k46Xy1zcnffe3dJWJMprP",
  "key22": "3ubaMwgrvPijcEcb1d8egavZC9L3vPKs3F25bwN22UgbFNtAFuWkh9896Xy2GeoPRCsC3At8RJmP47VrxKXYTCkY",
  "key23": "53Cro8FRUCo8UFmsYGsiT5ibAgCyEqA9je4qPw8RZMoCxA5m363VpCLhNYDPENKbiWXJAzuM3y7CjcmhYJrMFuje",
  "key24": "5x3feMGsZ6iy3N121sicRykD548Pn2FYdLwauLQEDDzFW2ujsYAywoCwARTyheuQLXahg5gxNctBmt5n2BHeWLWx",
  "key25": "s93Xk1r6vMkVQd3PHKQXRFWoP7CMbMvqtVaxChvUTJ2yH9yg8DK9q5o6eSsEg8BpjctS1DBRSvEEHMLoAbraLKb",
  "key26": "5Zz6C7BgwjbdQK2v7rjQDKDsu1WwrZWg9oTRotigM8MJUKDeZgFmcVHZEbGonAhcwdTWJU2wYvmdXsmvb1pXNa6j",
  "key27": "4eDSsPhjBsixgM1xxwVwepRfzvT3XLmq5S8M3khF772HVHy93reSLxdH2RdAxwH1tfcfHLXFavYteiAAoE7yj5LW",
  "key28": "5McdgUxcjVzXaPME8pyW2Y7g8tqyXQe9ugujW4jhZQzGy8paqnXkmwBvzeNmmUBxEzEE5mF2yGVafZTdXeK5T7Tj",
  "key29": "3BvwWwiJRWmDrmBqYWSrikeUR8wuJ37zDTaYxbCjdcRZyNg8aFNHnxf1952dQhbp3H4eEnfkYxGwdPSwWFUAJgaZ",
  "key30": "5DpBW1XbykH5DjcPhaGkCfnSusC3Kp4fasqeWFo1Zu91EEbQSZUVqTHy3RUx1AVZSDahFftzGZx8ymrF3QkBydED",
  "key31": "2tbuf2EMThp4DB2TbjLra7yReP9EZPjS77YPKRiWPsDaKhCiwYsxkLjPgtmhUpqdFWzZu6MEemzvdgkBz4cvL4N9",
  "key32": "5VXyAYhXdrYDMZiEh34dQobdPpPjqiTJaXcv29zjaRT9Gvfwfd85AFA8f6XgBm7oQDMeJ29umMc9mi8ApiKH1ANW",
  "key33": "xsrPzQEDPJ1W4oGny4w2bCkzBhWvBhpY9qXLuUMhDyZRMtZei8bEHmABKnyo611rByoSnVrDQDYTi5ZSFz7U5nu",
  "key34": "48VVhhJ8ybzh46Xt5xo7N5FTVCWytqW751oR59MM1n6y7ww8CxJy2t8c79Vu13mjT1DgwdwMrLaL9rpDM8UZ5xwp",
  "key35": "2kxG8kFzcRFe5JmtBWt4QHMNi3MzG86poEjH4XDTjTCTQ58cj7GeKoGjH3rM1yqBXanpkCYMXdkXpzRj4gCeCYAh",
  "key36": "2FnVt4RhQ7e66vjr2Vbx255GH7QWtFuF3r4i1n2CkD26gLpC2XZxKf45M6Nyti98TJhrteCVobL7L52rJgZnfKis",
  "key37": "3vKfdu8FsqNb6DDggMFW4sihVVtL6VdFbd6JpHBGUS8TKANGe7vhuzhCRXa6LHw8u3fgJZD4hrmXof3F6hjWBNYc",
  "key38": "VZzDmF3aRidPP7aduDMvbp4mQrPHVYNof89xi53yk4CyoRbV1qCoEZ2ZHqtGz4zapD9svMJt6uWpb4b7URFv3kX",
  "key39": "5ERDSPLEPZTVKXwJj5tPVQhhUgahAr9GzrS6tb8KpWfSBYtGdBerydVhK4PA6niDK4gquKbx9qvj3gFeQdcQtiKj",
  "key40": "4UX4ydcSYwQ6A8vtz1Z2ti9QSnz9RCkaZmiWzWcDNBgUhsderfzpurnJT1wxq3FVhoSWWGGLg2Vifbfdcu7a4JEF",
  "key41": "5evzYkDch1SfBKouKDU3C5RqF28aaMYPGkRHBt3eXSupzEwswgdxFJWMKjSqcE2uS3x1UXiLSkoJ1bHJBZA4L7eC",
  "key42": "5NVgSDJJgNTE9FH72S35pSQrbGBEm9vju2j67c62xrugAu6wJxyP56zwVoPrS8YQNprkMxmo8hRrDwh4RCwUwBpj",
  "key43": "4j5S656jU4SALCsxf5LGYbsEcxAb2iVNV3QKBbq9TcARcs6KYGDNxZz7oyEk2XFowMcADL7bj7EHj5o5V2qooSgm",
  "key44": "h2xyKBzjUEok63iLhge7gq3oJBBs2AqAUoCQNx6RasrFh6wScxabsrWD72v9fGRi3tweGsuWQgFaPMHMn2RGwsw",
  "key45": "Srm5yChdiLhYv5C8WqJb3cpHQ45YSQKxnL3AN9aYkGUjossx9aKbDS6pJRqUvWkQpywQLzoKABfZCJqGX16Ly1Z"
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
