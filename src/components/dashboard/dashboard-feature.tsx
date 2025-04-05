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
    "MaH4ZkcUHHHfweALTpwmXw7YsLVZxLBJtT1YH3EyqFUwtTpYByDq9t4Jvgfewf2snbmEWSCJYNLg8JLjybMuH1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2426Hwg6qy4w9czgZb4UCCiXYS539ZcY5C3aP95eNJa6WUpCUBeNhD3tDxLBkimb3pE81nws3pij7dhtLag9xLuZ",
  "key1": "3jDDh6criTVZuqizfjGnnM7BFxRdeEtPnBP24KxsAcnBmwML5qvVMKvvdi9uWbMjGAmHS5fYy9Q7NRMquDaNBsn8",
  "key2": "4oHJHJvAWNh2u1hZ5on618ardih8xNhoufsShgX7EPjWmfFeaZx1BaDbM4c1EVWDZvJmyffqJneEJcfV1pfnKrdU",
  "key3": "2qkyEwcXTRgsu84UfjfZ8BRixgfXmJFTBCCCDbysogJ1FPQ12oXYmZrDHLwnxn8wYLwMMNm2NrXob6nFiw2ruAwM",
  "key4": "3xp1p4j2PHvFTmTjBigfJAAVzr73FdSGB61d7jgdJBdpoWA36Up3g5RrkLUYKyZkE88sebmx9oQTh8GKm8DUZ2kD",
  "key5": "2W6TLfn8zkMRrfENJv1NpHUDEAkmndUH4qxNq6xC1sJrR3UGquy6GYEQ1CG5ikpmxKqsqvTh22HejTpaFHs5JNQH",
  "key6": "3rg7R84pXBzxwaGYxNT4pdUF2AjxFTDPFr5FvZoxQrhZ9fohjCTmRX7wB64eT4E7QCnhwkPTjtstZgZCTWwN2oCM",
  "key7": "3PQHGgvwsjmAWA762xf752MEhKiM5GSGEDkK9a9gU7CahumsjtwzoJoCsLxmKWRTGEDxYa7A4QPzC3CUqNXx1FTb",
  "key8": "3Xxy6WhbM5YRTPdPk7Y8WtyZ9325iTBB1y9F2ZNb3gAVM57Z4ts917TTAfZyrEuWAf2uKAscDvQ9cQDJgxu1VhfM",
  "key9": "2xt1dhwezM5WoqBSzUR3YZN6wWSYBhaCyPYUwS7Bj1VoNbp55DrN1Rh8DqncJ9A3K4kD3ehYBMpL67VdfVm4tQAG",
  "key10": "5MRzuPRSo8cvrbsy65jepGE24SprB4xxebNoctw4ERCi8Te3RimpqjnVZw8m24hbgitUaYHF3tXrgyoEAMbGniHi",
  "key11": "3Fttn4yyjW8fojosgRxVJrw4NMz9LDJtGiqxpje1gph5uJkCWybukrJhPvYLBRSNgwQPSfzMqx2rSM2mjqcFQahU",
  "key12": "cjnP3Vx11cQ95Wi3e1SYqQrATzH9bqBvBnkEUcViMuVeSX1YB1D5ovHfdXiLWn57DRx9GekCgCrVk3M9AGhXhzS",
  "key13": "5kHo4tQqAm1x7WM7EGdwRHaiWxb2MPeWpqoD4junE6JAYyuQbtKdSAJ4Q7oSqRHLdRBJYoQVbHfb7nPHZ3yGxHaR",
  "key14": "3cv3rFXJwphEKCXvqELNrre6awE3mm4Z1on13ybU1XRUXXqFW4KTeGx5vsrFeHcKJ1sU7tLPG4ErUUaKXqDEzDgr",
  "key15": "5192zm9ksGaKDro8eFcYfcFxryRrxigPuagRa3cLCvVjPv4VbbLFq4chmEEHiRAJ3dBjaeGb7XdRDxTSZd8nsAHT",
  "key16": "3LiLWdkKXWHqyB72ZswD6AyqFJmzQnUDWWxs9d4EnNDtHDahntAAW5XLcFosGZyJDM3BkyuU9TrbbMgZfT6oCAqB",
  "key17": "UUTGRGkDnEfkzfCXPPGeGuaq1oZP47njH3FJ4VpiESty2p2jN49xjCBXsUi7BkaMUqm9M1Sqv4um6RD36tjh2b1",
  "key18": "5PYt9NEQevYc9NcxDcdqe4Wtt9sYMe1L7rrkU3J8RfQ9A3EMNfXrJ5JiYkSDMfn49t5yPyjjuhPeaGaCmMbGScaY",
  "key19": "5JEemg6g9YGy9RzRHVMcZJrStxEhTKHYSPnYdP5A5RdhjyLCTKU3XvvBzMPGQzxBtpJBiaNPCz3GUFshwhctvhTN",
  "key20": "2uLfdQmijyXwk6Gs2YDdDbL2H2j8gxwHbvKJNSs9a63Ckbu6FBx9bQSbxZhy74x3x4ZiJ9inFrNTpwEabPuXdTbj",
  "key21": "5J3UGBS8FWhmAKn1dv8FitV4S1j9WspsF9HURuQZde44F1DrdvoCHY1z6r8GQe6yZ1norCA5Jd1Bz6eqijt8nijv",
  "key22": "5RQb2BDmMEyjZxSvbirPi7PLESHpGgvE3qHp7dddQgfSSbVSkoe5xYd9wYkqmtXEayjEtQ2y9BPCNCr2ik9UQWNP",
  "key23": "6EhrkYCAv9BLkD8Rdj5c6wWcRVtXkykCzii9pi9w4iykdTNStP5u2CoEx5m89edPct9LKrVSyXwXR8mXnabKHJR",
  "key24": "37LnERHWXFjbFcb19BXVW3UY7D2dJgEmjr7V7HZBKjyxPdCADZcoRfCUNEr9AmTJgWXg5trZzVGC7byHMUj8SybB",
  "key25": "5aKUMddFfAApUY2MvNeGhvAUNPgTor1BEn1GZqGqd8dzZ5LFnBuvVEHNdupptdp9nf2eLC49FG65mcpFfU4BBZXP",
  "key26": "5J2xjFdwPtmys4em6EKbNCquRJwaDtAskYgdUL8DyJ6jh76pnyxv7KEdG4AYk8sBGNUJmEfibXwCNE8KYF5C6JW7",
  "key27": "2Axq29H9fsh5bhQojVej6eyq8mhnDghQp9sLoxvmUmR1Q1gypRQbXBrsMVrfSAQL3AtZV9dS6saw5eUABWhWgSHW",
  "key28": "4t1ncwuqZinyhBGHHAtnaHnq51vhtQHx7PAEJamcsT4BSYjJ24iW6ba9Uc4eX7ocU6MLPRjQGHcss1BVEcmcdNoP",
  "key29": "EnauJUd7Yqha8bKjGawFPrH9h9TCHcvyRKPfoVz1mP3gADWFCoSqDUPv2ds7SqehC9fDGrKWxfZ11a5bjbA3mGU",
  "key30": "2XYkzXEM9E76zUvSP8FVLuWbiGjXb6KEB38xMFSFV19jXJ4147vWV4fqL9R8B6qv1JovCt4Wa82nk5Zbi9CxF7Za",
  "key31": "7EX12PscgJVwMJDZQR5KFLCoWzUhPcfJ5a93LLwyQH6q29xphKt5bLccWSXxDmdRpcDDQWRB6jSUxQJLP9kBLUS",
  "key32": "2G6GL4xARQi8sjiSQcpBtJtfQNfcTC6xoCjVEGJGEk6SDrhgEdaV67jeArAptLZWNexfNVia73BcMj2UKfAqL8uK",
  "key33": "5oSTiFGgurzAWKYWKuFz8CTXpQiPa6yxpm21jPbXGXo1uXfiFZHaRDWG9NUyfEAwi46MUnnXm47dBUWXaJTU8s5J",
  "key34": "2UdHR3N55aTusw5JZNmdikjwXFG2Z3pQ3TwGSYdkhenpc58BkS6rnWP1W3prqVthiv8GF2bAL3fQgDiUKmqa4AzR",
  "key35": "z5mZQCznacQPXqXHNicbJmHauGCQcPwuowHYkWNcMehReC1SWaBgQA3LCppfnpBDT1ciqSgLZh9ALcwhvx5MEdq",
  "key36": "21KmGtYuFrsrjEXLuBRCidjwQMcH3GKbCcvFysW2WX9Xs6EnzjViPy2KsP1URPQMCESyJQXwWmVwzJAXpcQZFZTF",
  "key37": "4c3gW3r3BCtCowvkBAmLGLjfGRvWg3kuG9GxwHSD8zh55TimJdh8HJh59D6QEbaVZhJFBSF5VHHC4HQZ4acgK9iL",
  "key38": "nWanYr4jkhKv45TMZGKv5oyD9jWH8zseu8A3iYW3CkwqGzSdMMXUgUTJYhJwQXpPjJfcLTkcASMRJsbgPzqwEa3",
  "key39": "5XJ4k8JP5f5bN92JxiVaRWQMSVaWyr4Ee74iymsittWCJPBDcAUC4hbmKRLf82Hx91mkhLkWZGE6YTci28sAW2QR",
  "key40": "5gLuXLzJ91Ry7ghTffcAnv8pNNRdHstSD9vCuZNLAhj2SFdichjHiSaJ1NYRoxQ5a1r4A7o3ZEGY2tmNyQu5oYTQ",
  "key41": "41edEW28Lxj3q3F3C79EJUZV2BKFLc2cPFJBSdYSFaqJr74bQQQra7Lmkv5U4oBqRvYca9VJJrnsX723Y4ZezmRz",
  "key42": "K9zrxdNN3GKEZeR3vxKLh3poRzAwhMQH3um2nwp74k9sovp5uc7JLXyQ3RbMZTbrXBqWtByDHF1Axkpddq6Z7hj",
  "key43": "39iHb8u4pf5HcEUyVourUSGosVtYgwVuQhRr5hcANVhT5uAyF8GSQSwaCmuYnYSpnyoJLobDKPNLPjCUa2bgUkL4",
  "key44": "3XF3JHtfpq6ThCHJ78EfjHHSxjvJeP6w27XqQMHgVRMzS8jaomFCAofEeXpnNEw1zXjmrJ8WXsDtmEtpg6N8etE4",
  "key45": "4PLAtwSMxbQsTVnjWQXoKju1sFcLpL1dRKLSZuVWDFH5y7xigqBqZCAYgdXBJ4VAYLamHgcMDjB9zHhwxFtfb8yV"
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
