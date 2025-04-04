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
    "3wp6gkxzSqRWKfrjL6xvXdWiG6bGnbTKEsi8vfZzBEaYDPCi2tnvjS59Ek6BqAVxrvCKxSRy6W6iuc7KbMijmfER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEDthw87Fq42DvuMHMDYaDK8neHibnf21MB1RbJ6CSCqXyX4CEDUin8v8JmaryzuZdGtUSGMujCRJqdXPyt7tWS",
  "key1": "d3iKuAqDYoB8yGCa34fteyixdZ9JCaQXxegVTmAZFYH1ubqRyBNBhoN5wtc8rv54vhcK4upVQXpsexLKuACeX3Q",
  "key2": "5C3ktRWWxJp6p3hy2NeQVAp9i15EUEvwbae4tAR4NdaL5mL4MgmB2ivC9Yd3gjaH3G5ZxwUe3bLcFk4CTTt6YSZX",
  "key3": "2uR81Vnx5nC1wv7duFy6uWv1wYAz5V7odqwLjvGjAQ63AD78JJo2MqeTqZCPsz2uZgvGL71wwriDXEsJHhzrTNQX",
  "key4": "MZZZSMVXEmvb2ZrveaEbfGQqMpXNAVgPGxBQZj66Dp2xjVVBxawB3g7FUmvMqTq1vncySR5XzxwpMn9rUWH3wkL",
  "key5": "3RvGf8yRFWhGrPdKwX5U91jvMD3CqcstvuLVkixYanBR7CGA7ZWdN6gQic6GsNMukQ6RdxUyRtbiXtzzMzcRZwxb",
  "key6": "5vCKvgh4a5jPvSHAq6Tp3YN1sAVhz1JkibJkxEMgqWnFJ5V33Uor76Bg1jqhSKAb66Z6Z56bGkkP5t5sQYPT9KqP",
  "key7": "6EqdDgNXPttHtqsc7injW4mUiEyKGwekxMdHB9W6XvsXMpqWVL1vXWJQoVS8CYn2NUrYjE5Vyz7FsegPexvvScY",
  "key8": "67XzCmWPTskzdm4tMJKwmACcR7fkY2yXWpmrVBZV8sd5iBkdhgA1RdB8JhspKdh5eRXfUA5HMqJoTGdyZ9Rm4dEW",
  "key9": "3XjtQbwfmqafjWtwBWG18vxeFY8HHQ3eFKBNSBiWwisvCiy5h9kc5gNUScEj2kHV5gAF1NiKHKLbRr9DB2iL4Jx5",
  "key10": "3yLQQ2GF5nNXS7vVDmKgRUVmJcLeQ9ZUyUswFtPnobZzLfViheKBseowoBLeTaUBUDoTBNnNd8bczjCw4ZB2tip",
  "key11": "3qVxCUWtK9npU9CLx94S2AkdH1bd4h74eGaEGeg8n1s2zJCnRa1bqkvgPY468tqg3J3ueVkhuAKH3aN4fR8sAjqd",
  "key12": "32JJQszACwhSqRMvPqnusJFRWXapL7yKGQMLrRBKUWHb7ro9NdebBb9VUAx8SHqqcv5WHeEUhdBsRrmyjAQqtWL3",
  "key13": "4cs1HvF5NF7L8ecggZCDfkfZf8ja6Xds65EqyYnqrL4bafWTDbGghMUj92cnou9oQ3rafkTLxrFACBTfaKkBGRBs",
  "key14": "3Qj2hVeBopnJkbTw6BUCV9EUKiSqM8YuPsMLyX1azY6zpsB7mKWiTYJwLe4UHS28Q5VxDC5GnygcF2yiL9WNRNLk",
  "key15": "4RtMVHbX2yJRtokTnA7S8UtS6DnB1bGr2bhT6y9nEmGRi3cwog4yfY4H4uCHuNYL8sGRqmAkkCm2Sdb77QWkSQAa",
  "key16": "24aaJBveQiYjXqf4ZhDjMAAGVLNWRqeWpNMEpdZK2vDtCLSVGcUxeZcyde971Kf1KfK9RCrtLp2aGeCCRBuQ3otg",
  "key17": "5ooQkPnPPQacjqv77yuxjCnVDLYMb4PhDb3qafSob28ZAq5vVCEFTzRvkS7Em6cqo8U5csgfYJMpUfgXqRQrhwk3",
  "key18": "3RLNDJHZRquak1M5c44SEpFz57h6RvvAHjGvrjnY5FEdWmcVL4satWUherL8wVKiPsGN97VcUuDux5AuFoUPCNcs",
  "key19": "2jxw8PTeAuk4L9QMHBLJiJmxroyeCY7vTGA7sjkk6DtWyAFHnULaoEQS2e7jF5MfeirNmwbJBE7A6BLWfM7fBKtz",
  "key20": "5HZdZFFCWXW1NYjP71eiw93eoZtsZs1cVFJLaehXggpTC3A8NjGgpmLe6gJPgfWTfPYGS5Nju1fez6dg4zG4LYdC",
  "key21": "3Sv8YVDpDMhFCWgRiZhKJCXJRo78WnbivLYzyva2KF2sMYXWgTAhPcrNnKbNKnvpQFzMabxHKsTLmfM5B8gfEi5T",
  "key22": "447GGkoVWvHXtMb7xmJwKbnQnscTJsJshknJ67hcgoqam6dyRVP6AnxjDeNWH511eT4gpyrJ5MTnZX3LZShsfaBY",
  "key23": "62MNHGFJYEzfWuJZGFm7vtCJWDwWB3iziyJSEWmo71bGvtWLb8114Qj4dMT2DRncFW9WdrAwZFu2EdgbGTsJTfh7",
  "key24": "2326truSdze5rRTdth6Lm4Pg4yNhShbhBFT29wx5ADK5bTLzGr82wNYHZUr2xyAiCGEe82tTj79zQ4PBkbrdKN5a",
  "key25": "3HL2k5fLRRux9FBAu9dhXYRmqFsPnMC7Z3MGdJ1J7fY3NUJ5GckCEW4Sgq954e5s6nBFNE2HMziDYe4rXCwct1Tx",
  "key26": "4MQUB6bQw23FAzRWCCckbuyrjdSdV8JaZyiiZJCt47ZTVwCa3Xq7jGfTD48Ut27qnrpR9ZzugiKyZSWCyh8oKEJ5",
  "key27": "5kN6UiQCPrj4SZK2VHXcrQV8sooRm1AyQYF83WihtJVm8KphuX4zWiXnm1Jbe48STGqhXKqv7cG9UYCeHjgMrfJJ",
  "key28": "2GG5JboDmanFWyYW18B9nj2z33CEFYg5mJmccMUXeaHfoasCGmfke7z4bvbtKucybGXo8DVwpn5GVdAcirMVPE5Y",
  "key29": "2PY21ShKFDAGn2iZdj5HVTweEJJPquVvF2ysNGufsiMVUtdt6qqdgt46bdjAsfskhaBpMSm7Qo5ncXVpgaoHhrTy",
  "key30": "5aDNPXiGJ9P7HbvV9S6KS2z4zjzLBBy3ZJumMABrYKLiJtG8Ui4D5oKSaR1Ghzh75F8B9AWp5sBtvb6Ut3shsNxj",
  "key31": "5XxiV7niZgLUY8v1knsUFo4HUssyrz2mitRFSGFfWqhRsR4ovFgLj6ppV6Q1HyF7ZALQK1QC49q9fKaTURjfTXjg",
  "key32": "2zuWmt4C43nef7NkPL9D2MTssZko3TLir1tjD9grF3nXUW37KNhHiT3Jr4jq3QjiskqXaUMAANweEZKtXMu8ZMoc",
  "key33": "2qDY1X61u5hsk19juV69TcNnzgS2dZdgGBRQzuH99rM9HqfdrC6mkY6BqhYf4e7D2um8RgLXU1AbHdWvfo1GF4R",
  "key34": "2wZmL6fuihafzvub3yAVoKgLcMNWoTMDF8xppgsF9txcbndJ5vh3ZL5tjVei21maJNz5VyAzFFsoT9y7dENmKeon",
  "key35": "2bRmXTgjHHh4qATmwUgNoZ7vtYncHYkLjkGPSRdYkfcEB6ig5ZLpmDGVFpCoEjNjYUkjPsyH2kXiQBzJopTRmUQR",
  "key36": "m3Cav1vYwmaYj2Uv1MUWvJDkH65YCuN4K9S9Nn8qVyFJzZrxNQ6N3EFeQ51wDZmTKTZKAHAFc51RtzXJPq4xUrJ",
  "key37": "3SE4ChGNU7uFMtg55PgnH7hwcbpAy85KwsQMCSpeLF5vNWfT3mLKJNX5A47gQ6USRdjXNdRiatbekMh5fuM5xdNn",
  "key38": "3L1kZswP99Gh83hFQmucTehGGhR7N8DizVsTbKLcJVdMfgDTcLNqd9czViLmyeeXPZmWToA9CEro2Sx3ktpRbLf7",
  "key39": "8WUi7oZLJTGgwSPjDFxch9gvqJjrNFnvsv6ohdZ7YdRioNC2GsUkvfWkhTtW6xnUrzRgqERn9GP8RVUAJhQb8eh",
  "key40": "3HkgeW9YjuZkKVu4esUPGbR6a6vDg4VK4Kd8E21bfbCzoLoRgDid8nHHck2YwU1CTuz7NoqQyEsJA1qW9ysogeJS",
  "key41": "5emPnoDPoZD9ExoMvmo7yDBB95Z3dDAPAtVKZqjA58nZi4trUfHBtdAC4Q3KXcFz8hUx6iCu36Q5V7cixbaGLK3t",
  "key42": "5f2uAW4ha7rR5S6Lddzm2G47976DtmXoNjbQ6ABwQKdD4nxRYAQmmuWVwQmgaYbTFuxjrYM44UXv8imx669k1TEy",
  "key43": "4NBFNu1UUNo2RLagPSbmF7qMD7yr44kGXJqVetznUNsYG7MrYT14hzaf31YKuCkxNQek1fRamGrq3NRcu6qQFndp",
  "key44": "UL3nRpM6cw4AyTQGgBV9x1BAaGCytUYKkK6Nw1A8VBQrVYC4rKmcyyrq825C38yMcutfiTHjzCoUZRakGZ5tfRW",
  "key45": "3djcZ2wSom1f2YAmf4yMPwPMBMmttKPE2WisMXvGuEkMC8bmLyE8UUmmtG9ganjNmnVFqVpFk3LosbU8kZ5qac9b",
  "key46": "3ZMDNEsbs9pznoG39NQVToURneb8kHxHZq1vVnqjkmmAUxWd1xt4xHXKBjS32JXjjKenuxc1gg4qqc7Z92sHGRrn",
  "key47": "2z8qm16WN4BoHS2PfTdBDC9FcQYVdDMkyauy9rrsuRnp8R8udeUBGYVXxnhN8cSRP4GCyyzivcq2AvEaX9ye6Cpz",
  "key48": "3AiZbGQJbH3ETwumMqvnDjLXT2VMF5uJEsnL9k8ZwjBYf7TwP6JWVDt3Ugpk1tB2eTz5YcHNXvZXJTFiuVjYrd8m",
  "key49": "2ArngdzfybxF2hddZHMSgFqGJboysy8a6omkaT1YPZgpCTQ98AFdZjPU5Fjfq8KRXAEViN3S6ofacuQfL56oDsAz"
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
