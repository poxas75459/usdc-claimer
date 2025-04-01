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
    "3daD1HbaenLB95o2PUK2DLgVL2BfCzgSweh7HnUEqo4ct1JCy9ssqhub6Ldd36CxhA7BL1q4RY7eq1RBPtNUq5SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9Ehtey9654h2aTzgCf7nBUZAjmF1HcddVhPmFWByR6yBnq3vk3dCj4u3AM8tGng8sbcxjtKkpdWaCpq2yc9MoC",
  "key1": "qd6zg1b25scWqj488DzqGguUDa969FvUhcSxqFkaeHrhcfgLdfATDYba8zBvUYyVMJH4mbigYitWMKHdyWwcyFu",
  "key2": "2pZcGkKkv6wzvFXbJUdqyyjEEufRBsezvRBJeuw6AhvtPaWRu7eNn77m7kfAx391Dgw8kJpEhRueJ89nkDaP53Gw",
  "key3": "5EnuWYBxen873qm3Xi9wz62BzQBm2X4Jv9m3DJCypvFQ7b469Y89TB5VWb8Yf9xnLWnJ3R8WcT33huChcazFXX6z",
  "key4": "2jAXACd2KsVsAPKaT94PuHSwz23bDbH7guuqkcVf1CKybmwP3NGKAsCmAEY1btqsU6EF6B6mF9vN14FrM95mHPa9",
  "key5": "5BCNVW9eFkYNxLCMP8bnkMvk8X36LLaH9xdghzTdWCYT9h7USR6JtUnU6NgYNn8WxYboNsb8CMWpTv78qUcgt6AP",
  "key6": "5BhPTg4Z28pxwe9Eskvtxu6nVdBEyHyHWwcpbL3itmPa8ZfBB7TiUcXGCVRXVkyV4WeYqqtbByhbTQjC5D7vj7HH",
  "key7": "w4f7brV3GXgkufgT8kLjQZ2stf6wCcC6JQXz15oyggM9sUXYxqt64Uf5crvwMgPXoyxiMgBTZHdV7QptLQSMNNr",
  "key8": "2id4JdafnsLQzjUNubTnQYttbb86XnFnGjxsJnD79XQz8wyKyjrHcygLEjjHkatWF7aiTsFBw77ZbTPtHeuYfikt",
  "key9": "5CT6NKLbE9AJ7FS7UF3p46dAqNEfs4NCXAVm1YJbQUzHusG2N5yfrU43fBVejrTRJuBvNPx7dVt5yW8Bd7pH6sdA",
  "key10": "5GzniZigHA2iCvtQh8SvRnzvuX1H3zX884YuFQa9uoss9nekhDMzKJ4uKyXKdGmyMAeoYJUpgdK4CMiC8wAtStMT",
  "key11": "3SHSyhmc5Zs1v5cFXqWgPNEHj25vLuiJoLa7bq9pdRwQpif9PzPYsXmihxm6w9zvui2nUW2wS4UZamDcCtRdSbLQ",
  "key12": "3hdqigEixtXmR5EjSyxbvHFZkVGD3u1MUajQqkMuURa1viDaTg9ciXGZCAyUvz7hGf5LpN722mxbhd52HCHnqyaL",
  "key13": "65Q3shPmk6Xi47u8LcxuScGqyUBoVkWvjXP3hMy6sveKo259gausSsJHhM9dAZvwxLaib7PSk62rK4vVyj1X6nWP",
  "key14": "28dqmuDxVST3BLJVxcd4sdi1ERPtaN79ZTmRhHHxsgELMivVpfiM4atWsLG5EVZ4xooZmkrBVAfZtW5wJ5Kxm5ZJ",
  "key15": "4nfqNnzzYWh6L7DiZQMYNuP3HA9iYdxaBiMQbM6sZYicZh9VXif8pRxQStudgLKRxGh2ymM8r2ANQffLG6tqojMg",
  "key16": "4r8RWEGc7RgxEgBsHvvNwsu7ixBsxkDxJKYsgfhFWZiu7yxj9FSnLQaFeK5PHBnAeawpNkwmBdyC2eGd7HG1jVs5",
  "key17": "3XTLSehWqCThFkJEzoEnmXj2NC3SL1S1JtAaoELv2tXvRew5Nx1ejMdxTrf8zzkvNvQn24g8kRCozMPvC8xuLdzD",
  "key18": "4W9F6xfbHXL7AKiKzMhfz2NscRGSUwwV1GoYqU5ESdffkh3CtGNZtCX1zkox7Drz5wAbJHzojTTEwKp62zco99AQ",
  "key19": "5HpKNKadt2EKR55oGmsg7KWpeMzgU1m7rqhbwNmPo645pqNoCSYXxoALcKEyGp4Pji6WMHc9kC6s6Et7nAnZajZ1",
  "key20": "xYbMSHjdMd2RHhtiDr3GPBF8sKgtjNpfJjAZ1ALkza2Hut1UtnRzvZL38MqGkZSA6CbKqX3arWMujU3xuXijX36",
  "key21": "1wve84PetpLFycCMhe32HfnBVSgwqfg7aWUfYMJuwrNXgsLszX7mo6V9UuFYvEXf8vAg6w4n5Q8TX7igdgYJThV",
  "key22": "2n3yoRvVYN8MEtnG2V1aRMT9fMAvngznZfkBgHL7GT96aXwpUGW8iPsWN6LLt2GgmA5GfcCaqoBBYA1p1pSiqpj3",
  "key23": "64gt4rsYu7wPuz5PcVZ5CGeBBcEJNaypuUrjYjevxbsbQ7edbUJH4cihURqEEgN3f35jB7StJp1FnFSwDBg18j3n",
  "key24": "4zTPzhETydn2rABeVbZS3c1KG5GiBbMFNepaKUWinGr8DzofKVNVRGkFD1w1nH7QWmQnEQiK95diM1jUTfAber2Z",
  "key25": "515AH8E134NGBhqYaG1aELyhD3KV1tNkP39RYEB4nzJxS2ckyk4dyezP2PQbrBzjeA3Mvam8KvVLafPKvnwM5VAr",
  "key26": "2xLtBQ3St1hSPWDnQDNTyv4t7FN7j94bFDwRxDYxj1P3XJsu1ErEzSQwDNZo8B34MqA24VJYfuG1LMQQqALV16w7",
  "key27": "4mAZvgpX1CYtg3VV5S7uRCx3yfVB7QTAP3DgtA69zX9DVPyF5diEKvv1WL3YpCsfGpMzn1cX9PQEhWSbihsujPa7",
  "key28": "vXKfEWGk1KAqsstcuQsBjwLKim72NZUza82y5d7T2eEcxdih6255q6vzW4NxHaxnZebGpkcxuPnQTnYmHAMq1jk",
  "key29": "21UwCvuuKV2wexRGtvNe5BpdcjC7CBahtvEZfLxtMsGXA1u8N5boyGqAHtwbnaA6e3XLmv9L5T3ZBHAxto1uCiKp",
  "key30": "3KHAdKn5mMpmn7nFegxukLiReGxaNtezEWwPhBveH3nwzWKpG8y35vFDZ7qYkKosALo6yoSvZyHC7353za7k2dQs",
  "key31": "d9RwdiN21WEWJzEebWapK6NQDaCSCEyxKbwbpEVuRkk53QWGdWCxVGV3oZ9wVk85yZMnwb5aRvQjN12c8Gjc2gr",
  "key32": "5SqkgmkqZUUgDibVkixkqweB4pya7CWXTBNNuKntQKwUBXc1SFPHqi7h4HkNrbdDFd19cfczUxe1nTpSUdLGQzRE",
  "key33": "44yPpTojHmPgoC21vL3BLLWBhmwE2sSvMZ4Ek3SNpaR52JG79bbS1mNzQgznFWPb7pRjLJ7iPq9b742kVK78mC2J",
  "key34": "WBVdfPJJgxgZAXnbq8RVnahaoRhWT1niHQD8XCX2kNyfTgwoA84WK8DLbsrhSFhe9SBnUFhAyMYXdsCFY4cRcR2",
  "key35": "4BR8KfX8vZUuw69tYMZt4k8GKizUS7ds2hX6oCnif11wSZrBiq7SsfjogsDsfKzA23MvKmoxH1pLYPEU2BeMhFfD",
  "key36": "wkXs1bExqKUgVc5n8M6RHvQPAGGPuopzDKnFJsV7nDp36q3UsguzTnG1WZevouN5Wmcefc9PPQZkCKWz4Zxb3CE",
  "key37": "2ByJBzqPfVydh78vxwsPNaq5tkoaPgJSC86eQ4cSSQpV3YeUN8G7jzepZ2udE9eYCezJ8HPi5h3w6utqFviUJYP8"
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
