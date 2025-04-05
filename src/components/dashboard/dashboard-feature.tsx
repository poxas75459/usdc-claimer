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
    "2TSBbD8Sd7aYgFxNDTR4mDfsm23mXcDvpeDZKUYaHJgUSgzpmrfjxuiUQsBK8vXJLrTnzN8BLnP3ztDD6pDEr5rH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwzGX1vhkNStNphA5JTUA81ogmhkcDCD1AGbYLVw6G6X7xkgFFyUq7G2xLMHimsvb5HWUumXZqiRsF6gzrqty7p",
  "key1": "5dKaaLkt8y8HvbhAiCHLfJXv3gUuYBrf8grdTivADdh7w8kSnzAZvyR85cAoumjvtc6EXu5PkZL4McFiTDeLgdAS",
  "key2": "33LXKEJr88yMWAKJDrZoAfb57fQhfJMrZcf5E9BCuXQzdJQzWJjA4KP7C9PDXv3dvJBNDfCaXch69XaSSjsmmbSw",
  "key3": "3RtJG39JbkHyYivhx2n78MpP4a4M4hA2DzxmMQ1LqVvNyMVrTZxdsDyP4KjLbyhjMWRXpQaTW8HE3Gk4BpU5twcZ",
  "key4": "4jcKzzHbF9Mgt2AyW541Ak2quMWxZkZVLcNDrakrgoDCBGLRmRnRN18vTFdTs4a9s5qLLQNv1LdFLCFgvyyYWhKq",
  "key5": "2afMZvQx1TQmELvTmQ1YgBhPpw98iiBma7vLzZ8WmSrykXeATxECwJjN5WqqNFAZCTHLU1QgtFAbQAM7TLbgpsGr",
  "key6": "5sbmyibrpH6VAEw7NP7DqHWAH86eZJGkWPYJSs8Z3PJD1U8Y5pRhGwvbmhEfpsZh8yHPQZDNot3FP1rkybSUrjb1",
  "key7": "zUPsTbNMEcK8HqaYRFkbNavHps6xobpZVAxSn8qxvb4bwz3AMm87k9Rs2wWCSyR5MMz4UGmeWyrXJWj32Ny8s3j",
  "key8": "5iEww9GPYaRWFKgPQq2nuihYoFBByRY5jrTnnJvBRL6QhSX4C5nAefmcTavFWYqwQmuUoVogTZ8q6XWevrSDphK3",
  "key9": "Tu6urn2akmfAkV9wtDHFr5uc3ToqdnUT9nrupwm8eKAtTDETAWSSVqGLhLfDp52XtjyAYYVWWHMKpDSG6j3cXkJ",
  "key10": "4z5hdtrhA7eAAtQuS7xK4pjKu7Bqh1E1DTXcy1ZPZq3Hi25mFG4sEpjqk9dyhQJyPhuVCbKfGB9SdYz62GwD2oLk",
  "key11": "2AzNV3ssZ4p7KhxDsLrYtLvWMkB9PRh16LNvDbkCH4Q4sYEBBY9v5h7f8xxDAqqC84TxwK9SHeR8feHN3ZaxXydt",
  "key12": "2ooHdUCwXQsu8TWKspDpLakY5uuRreUJtVq2h2Ap9U9m2qBp5K7S1B5qbwXV6DuiiekgeRdnaEgAd6bcyJyT2D5V",
  "key13": "2oQ8os4Z6XAsHjiqiJKUD9afrbcUMtmzTS88CEcbL5zbkihJfEG1E69ex6TzzDLCTmuYFRj7nJ2hjHgVJj2cMi4g",
  "key14": "5AuAVfAWGdNYj2uNUhv7zmKoVChMihMN6u5Hp3igHSuUTRNyTcQQaMPLDKFcpGntRFpbTgVyD4faTECRMofLLXHr",
  "key15": "2fJwsiGYdvL6YrbENzrJZtsQ2FCrDeBXLhQ47mbtoioJEoZQKREgv5916P8WKRRXik1HwQEvuQQ6fZSDiofNfeuA",
  "key16": "3E5o5SRvWuQpynnqAsxzjVRzd6yPTEJbfroHjpZ7CAevMs1XaQtKh1RZZpYShDJdrr5pm4atQ7nnWicydiV6F1L7",
  "key17": "2GJf89N7CpGxoUdgrkkpRWY56iAsh4pubWZ5Wkn3bwd56dZdpKLiSSGbqGGhL7vCjs13EHQjoA2YhyecGJcKCXVu",
  "key18": "P1vYh9gxS58YYbVpeVZREpEZbksBTmappYf34ucpgGYFho5GX79dn4E2nQaduLYCnvv3itLqic7HACqqehwyo7b",
  "key19": "3WD3pQTXCPBoR18z92bsiirctmmR7QBf9LFjUMJJDnqpn71k2m3ZKf126b8uuM1JEtNQ1uFM5hsYiQ3jSPV9xiHp",
  "key20": "HAWVFsnsSbjrhm9aLwrzkeK18w1cc55ewHHbRnbTqfkEAA9GKqGaiXjZQaeJY36i711SgAEAuR6gsqd31fvNbuK",
  "key21": "9H1YvAmXXur4mWxzJQuSWgCpJaNYbEnfnsKq8ryF7wXQot6DCzwsxEicTwizq95NTWXmTpWgnav7gjcBbd7XwbC",
  "key22": "ScnFVoJmYn5n8W3X3pDLUGdbBB4DP2bhuwhGN356xsoNUDkTEysqGH1UgJoosnwx1CcLccSPRRW5h21ySgtgDDx",
  "key23": "4vKdTpYC6iHv53AoxwtT2qmMW7ifBgprPNjv5DqkfQzYhjUewCiqNuFRidNZdP7Hiqx4iceLwbEHowSR5FratApk",
  "key24": "4HgSzRRhrpG3XMkbTC42GSHVGK2YeFTY1K8zDW2YfFYfLbcTGZRgXPTx7LUPXdSCxzR6dr5BGtVVqh12W79Sc31A",
  "key25": "3GDSn4zZYiJe7gJURWoS69qg6APrw7K68vWDvibosAPLwNgkfYqUBkREa8hPuYUy7RoftSYET3Ba5eTtcM66wkWX",
  "key26": "5DsG5Cy6nefzXJsBpTXsdXyKUSrkPybGgWAsiXZHpkgAUzocPUSMpnMJh3skF5YmBm3UVQv2AXGymBNvk587kYQX",
  "key27": "5tSvqhXHNypE1vBSooaB8NbY2XwLmYL5Ztx6sJESTEzPLy9WanAK3EE96g4FVQW34TUavRR2cFM7sgxqEQg9GevP",
  "key28": "3a2yUqcwNHFGvNJZBcoqYMV9DYTvPqYVECiMtYuQnaokJuEiue1CL3BBin3q41yWTZPH4dTAz9i1gkeufMJ5eCqA",
  "key29": "42DdwhKWkERx92tvuzWQnLXnb4S7ZkwiqD3F8YfGVerynugVjg2gNC14vS3VBazEKoy7nK2frvF9bXHKnr4mzXyo",
  "key30": "2c9GHWCb1cX3HYQ3cRmFU8SCgSG7afKpN9E4xsmRyyWF3Xfpti559PRyjAyu656gwJdtAWDcYc7FDYWV8rxauSMD",
  "key31": "53D1BgUkqocVjEopmXqeXxHFvXzk8S5PzAfXgK4d4MxCH7ftWYJymkqJdHebsPVFEAvgvM4kgRVUgpszMCQWxPfC",
  "key32": "2PijLihtQv6dFBBWchdGYgEeCSrK5ugr3qo1pgE7hetkHgpPCymWVHiNSvLscwCvwDJa7JLTtxZYFoPmwfXPGroz",
  "key33": "pKKqFmDbK9ep1FmXc3vnZStmuerYkg865i3DaTKX3vJxCStJ6wNQnLTFMtyt5rCjRwQtqn9tstph9Wn4BKHa9qV",
  "key34": "Fz9YpFwwKn4qdL6UHTCf14f6C21QcB3Mqtp2tjNjKjJeiqr3TmojQ1xhxBamBuzAtiSbmsBaUR389XDqhAeQ33M",
  "key35": "2GbAxd3RiYHRC9nzxdzYiqjMeSU6RTvEZsLx1Ri399KGDH3AWSH9SFM4nkx7LWv4VLqjtDsPmtzK9Yx5dfbz8BMa",
  "key36": "64i1ziEtTnWDTwq1qXNjWZM7pzPjBLCHS28bkvJjLAiudzn4fkFaDaScF3BcRsQ4KUUkGahwsfNGdP6aTjxtX8WF",
  "key37": "5qyk561yVNMNnP9fGPbRmSfaPVegj5ggMK7dWbVDuGAD4vv498hdjtkVe5Sc7KgwP9SAaJHbnA81Rb8YDgV4AZr1",
  "key38": "5X3pXctwFhzyBJMhMfHifQmyjU4AqSPg4QRz3F9gqHSFiDvTxaX1CSQkx5GPJRnzhUWsd8nh88U8xuxCthm6g7YX",
  "key39": "JGH7SD9GHpy5J17hwDfbrfLDt4Xg4Mz9g4wq3EH18VpUBk5ds4t19iX1LtyaR8HEjUh95QFJSz1ppCtwWMQwh5P",
  "key40": "3Y8arEEZm119i8GV2QRHs4ihTUQsZ6WywS3V52XeANcFNBLqykPhJSzofUY1EtMXVJojQMfZWwQ2VFz3PLQnedwK",
  "key41": "vSWSMRht1vnrShgrd24ohDEb5hFNcL4CiW7QMyFqcndnjRcAcgP9Rs4kt2D575mQMsTAVwCLj6jPb55rPTBgDX6",
  "key42": "4VPdHS3nkvmcdJBPKE6frH94xxE4MV7xUmnBW2gukZ1H4p7hhoq6deEous2kit6ysVFr3vQKvf8j6sGeVXUqBn16",
  "key43": "4kd1vSmRQYhhBWYAmthnNmbajsV3FTYmUCdeFUVR3h15J2eoi3AEEk59JQFxfdkJmaQtT9AtqHRwNWyHoLwiCMPd",
  "key44": "39c3iiYvCH53vyqYjPoJM3osNfpofi7UtyAvHjert6eT1qHmexY3gedjbpVwbUA68EHmTqzBbGkCiJsB9ivCMSeS",
  "key45": "fQ5wmFvCJBaCpHs3grhnCLUKR4TSThwV3f3RXkbCBp9PgsebcrBxZ3dXbvZQZcvxnWHUVMPoRFoD95Xvcov9iuj",
  "key46": "3yZfq1DDa5maepZQC7m2q9trVK7aEtTqSD4Hbc8XeHfJX3LE1NKKRstwRSyi5QdFtevv6iyKr9XWzybJpYas87Do",
  "key47": "4k3AerqFPtDXUNca1f6yTK3A6mdRcT4hqMjiba1RD7rBTF3k3dPUcNj1ZzLm9Yy1vPrz7Ev6MCnV36M2fWkg1sXN",
  "key48": "5Ss6TcwvAfTi7SH8G6Tj92wiroTtK6GDQRZ8cjnEaezVqDr9Zd2RsTa6o3K8efTdViSgr6ahKXDsDG3F5XevggxY"
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
