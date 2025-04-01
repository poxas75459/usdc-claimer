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
    "2pP6dedumZFFvAKLjnYzLbypKHH9XNWmYnLBMQxEXAtRRbemNTMY1L9iEvfiTqXgp79k2Au7KbR3DvG5oppz3t41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpaGhm5vuXF7YfTDTjnMMNy4qKf8L8ofGfG2bLSbJHFbzC9pHT73SKL8r8uqt3Ee2unWYiBwpNwdriZ3m5ofshm",
  "key1": "241ff2MQj3tZKrtdzAxbsLEqpCPw4NpdviFW8d8vZnLj3jDa6EoAFCakgTGci5hCRyXHme7W64kt4QBi2noum6y8",
  "key2": "5TuiyzKJnJxdYbe94hY7jSMe3GqTTqPARMzcrMsTZ73e9eQESgqL8qZmyZSqCjrUSHVADb3ZT7zC3B4cc3kfRvZo",
  "key3": "5g6xefGXup76unUEowE7k6AQgFeGfJvCo6KbmATC6bLJowFfEWZdxoHUeD1CMgyy2N4Tgti3LFWrb3tHjLmhC3wp",
  "key4": "2CwCJkz8uforCNJtQ8uxEWWyyxzEYnSdTE8xx5b5R4SRDCQ9w8H5TvdPMtNvf91mwuidAndRYPhdscDPZXVDgSs3",
  "key5": "3BmN6q2UKroZNfytMxry1LPkfauVAjXTMVDKJUZqCLSRsoi8WRa1DPEX1cuXyxG8gvUbV3hKa1HNRoTkFDo4Zjod",
  "key6": "2v4ytqNm7eaNYuZx74XiipLGF3aDZsPiG9m1L1qB7Fuz29mYKgdjLDSqjp6HfzrnARcMtEyddsphurWrCQVtkC6B",
  "key7": "a4zRFdh5Jwc3gWRN4ij32gVsXi1JxBotxUH4XYbPvmevUjt3KZdwNMeKQxi311AFS8mA6rKnBsxqiBWSGtdv4Gb",
  "key8": "3X7EkCjJe5MsDUnkXfTrGvvvkepZyqxk9KSq9oGD9yjQ7qscrPwANEY3JwLaijoEawqpELoZpC5WVobEHLouuSVh",
  "key9": "65EqiD1DtnrJe3zRb91yBamoGCU1RbDrwwPRmsU9p5XG1QQNc9rg5m2GN1pVHWxdq8VRwm2WuT94h61CJkGJkSmX",
  "key10": "4TuRuyWvgWGxP2Cw5Kd78CGCRNjfYFT6PLxdxXsGgqwExZXMN6d5Xk8i1KvenGJQAnuxy4cpePN1P6jsNWkBeLou",
  "key11": "5cs8fVBQsoK9nLKdY2DR1v5Vpn1i4PGArFAhaAYzySzEzNLssrAtH9r51ywEu8hF9nZnfbAihiCzFTwDdCBGL2bU",
  "key12": "29V9gQstT5HeBro8R7KD9EzwUfz5DgrJNAu4Q5CahpjWzgdNVTbqVLaehtF8hrJWTUqefJ3oN1P88MhcJi1M2yn7",
  "key13": "2ixc6bqEZiqxFWGFJkGEpePWtKFvYGw1281MJqcjkki5czZPsRLtzgLdKgg3a9R1pwgMRKyY2jVazfphAyhYxF1v",
  "key14": "5GuZLiJYGJfmqnZrR7KH6ooycgpNMLBDWz7fBximLFY2fVTvsUNxWawMqJV9vXZfUtRj9BVg8vJgBTW8ed75wex8",
  "key15": "edSdNGXwEmBw1UqR7rACZ1UxCKtqaYKKD1wZCLUcDDpWU8i7ys3UXSLtGbSa5tRLsB2PmRq711bGFxH8pmrkUNA",
  "key16": "2EMxxpntADErp4t1ZHCTNEJd3b5C6MGmA58L7ZFjcyoTb8S3GEfzc7rKSgUtE8wEpwqbVv7qxDymMvSqa1tihGgS",
  "key17": "qLufzp42CBJXMZfBwFMwJU1SrZ6JHRyn4vcFMNB4uHeUps3D3KnecKxHyQtR1vw2RApVZMNxq2YYHP4QWoGoHLd",
  "key18": "4aZWjkYovWrnU5c8oECNGcJzZKcMHL9LpyJHzj3ApMB9jNgtM7AFn4dzNS5R7vMhGW9ShZWuGUJtiJ9oaTW1UebV",
  "key19": "4gQrXnyUmCUNdBc7onSY7g4JTpHu8dfBPTWdSQ3Gw6QMZxiYzAjcShnUYGg3e4qh17yDhZURVwkLyPCocojDw8FV",
  "key20": "4fAuNY4LZZAzcch5FCNQxJuznHq7ktZKe9uiuDKrdrQtDsu2Az8PRmF3AFd8PiHWiuDH64iDXiNPD1VyWPKL3JCd",
  "key21": "4vzMDXnGikxGAsq5vZiDV4Ts88Nfc1MyW1YVkhkB7yjiivQtHxbGSLd9k2nwZKPYPjL6ahvsAGoWaHkHShKBPVP6",
  "key22": "21bbk9Bi3cDC3yAc95b8o5LeE6uAwzRCVfikTjh9by1yMXrroyNFsfL3NDhc6w11a174Gare2u9p84iMn4uxJdLu",
  "key23": "3v2aSRGfjzP8zTmuAGNm6FWUza7KwN7Bi6AQA21SM1jWwFPHwkJCBc6h8pTURbwcUXjhNVZM1fBqqKJKm3rsSxU3",
  "key24": "3jiiyUjRREGmy7K3yHTjuoxWABs9g8Hx9fkFMxSNXpVaULQJN3L6fm4bLZvKsfK93f7bnyXopLQrzHFYsq8PiZWX",
  "key25": "2FZV39ba4J6A5ag1VGfEPopP1x5jQov8BvBrr2SzD6RsDsDMKmhdJrmM6hHsbfa4ziCnUWuTRCsq2EVugdNK5TeF",
  "key26": "7yCvmJokz5zneGHqyvjkzwbsE8fNxth2P4teKGKMhchbrqWTTJiTGt7VhjcwaJVXNDWADsprSWJ84cUiuX4atMb",
  "key27": "5bGahF8o9t7rALCcWbLTCJ7wfhazYTFa3T6vQzTYf98eRtvcGZK8ZKU48qq3SsokLJRKRVxFYccXrHL7kCNZxmBY",
  "key28": "4J6LejvPo8JGncsLeAoZqbGd3K3k5LD8QHnobjWk4UPSAUKCaufyPLWctX7JSkng43FH2MAAS39tUZ5KbHXuS28J",
  "key29": "hZdxT3tarTmhsuDwcnrP9AGxzPqP67YGMpY8CUYCuXM3uYT8EEXyBtort4Dz6HrforAHkRfoE5USVfhdFu9Fv2H",
  "key30": "5oAkWnEqjJ6VwkTHBqQ2ehx958Eg7Y4zGJ53rffXg5dPdiXYcrAbq9onz5F4apMDh8ZMffkaY2zCDLpXCFnGgWta",
  "key31": "d8RCeCggAw2B3G8KBGkvtLuR5bLVV167FUgJuYRxs7X4pMJxheUHfdvhpSpn3KdpwGYaywXxe9WcTHx5WkzSas2",
  "key32": "bJ3tTFoq22WpTz67R8adXuMDUKSpDKZCfrNN4uGBdw6ePGXdRV8Boh4Y1MZaq7UAeYQ4UasxxSkgz97ZiGr1gNE",
  "key33": "4ihsgA5PFD73Wpm49XttmqE9KENYAqvYQEhxmdXExv3NczidTTa5Hz1hmCThFsZV1fPcgpK3X6VjL6p4H3cihDTH",
  "key34": "2QnZrUxjfWAJX7XVv9gWHVHY6jK9PfuyBou3TPvFXCzNA8FeuLZsuZgLbwPR9cAGujS3nqPSrXSbhAedPysjfnNk",
  "key35": "4oKz4Vu6E2syXBdPqS7iYyQ1cJXr5utcU1iuEJJDrQGpKqKWnPqHYVJYGPYKm6Kvur8EDdDovtpvLoRTgQhUReYB",
  "key36": "2aJYUUsPN3P9gfKYAWoF2jwZ6mjn8pCdLZrFMb9keaZKZr1yhKfzVJ8yrkSy5THehLVXDaMepfMuK47N4hQrbRof",
  "key37": "4VdBcF9RZNtTYouxvG8RNVBdNHXabDSPwZmyTDxwmMSEwUvGqBU7AFWwWx17UbXreVQjEERM8EvfJq7H5SfyYdDp",
  "key38": "4Ba4vMyTePvHVB3umGvBxLYqPr8QU6N6aLa4hKXmqF5cdanxq5Ra6qkUNpnAErcNxG9hMi62HkWNFFdxAxZGDjE1",
  "key39": "onKpeR1VzhjRdojMuSKt4EV6SNV7EhbSwM9NCfcGukk7HrX3AGsPJSQ3KciF5qCvMWQkM3ozREPk9rm7eycjXsi",
  "key40": "61ocmPWb7F9jSzngLE2t4qpJqQt3ukneyztrb8QL5EH5r9MLroJwzE8LhEzTMvYgviFgHJoq9iVSMFCD7ifV69Pw",
  "key41": "31nL9yZ5KZi98NFjaszfmq4YGowPgTQMB3EEm6KYVabpCkh32e1c6hhGpLp463WmrKqhRoUt98cvZ4fA5QBvbS51",
  "key42": "5US1aiZAUnwekPWiufh7py7rq27WCm1Nm6s835w8Ukx4PRARuagg5pbohUShcBkce5jY7xPMDd7URhGN9XnSvaNh"
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
