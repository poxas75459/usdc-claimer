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
    "34yZ8NTbXMCPTZ35FoaLkLbiSq3bTd4VkydxPUzSL93sFMyCRcqqViuxp2zn8X142kpk5x9BTpKPnU87USLsFx5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uk1v4MRS8jMGuVQx2KcPzFM3BAP5QbqG8qiNrzfBoFSawGiSk4eoS59bQCHjV3MiZeZpxNuD45DJMn2oyFM4KXK",
  "key1": "5gocmgU2WTisGYeVotFxEMVBXmqwwe12KUidVJXWrC2eEPT8U7syFZFQYZEEehcLtb8B8jjqwBztR8HDMyLtJCGx",
  "key2": "2pUDPvxejP8KuNShrXuDgHYb2UcL8Ag2EkyTZtWtSq2dS92sYVB6yB5tkfvTZ1UpSbzEwWekAvAVEaiyod2GGkux",
  "key3": "4D92Z6EsWEifaYWT9uqqQNUaRxkVdPKJY5HqpGHojTTWL3uU1AGjM7mDdeCHAzYLZYCutZWp6KuAEuZz7i7MPnne",
  "key4": "5oCmbx3HirefFoAc8cvyc9GwGJnGhSqzbQ6Mnr5xAoCijePSrxBLKqf1CYft4Pki8E95bfCcURS5CfVwsukAhRv6",
  "key5": "5G3kVvSHQaF384nPfeinixSZzPLqGwoXiG8ggUaBYSCLzx4FG7mceKbx1X4GuNDoXiWsWS9QfEzF8N6EnMViXbUr",
  "key6": "65uQS7qNkfinyQk7MmuRZxCwoACPKfUtRsp2CjkfRx91Um2tuXzUSSTZmva1726AmxMBXVo4oTUPomtTCpAmzawC",
  "key7": "5NLowxCcqsQLkyNbFngzTT8nvDhTj51LTg3yKLJTLFqc3SKHwkAgRtoo8yrrSEshd3JYzHEc4GX9cPz2gx9zQCf5",
  "key8": "e1nDgY2xmK681CzmuxDgMb9b9ZP9CiLJkVHYRBvJfiWt6GPVhg9ShiDePi6zhMzGXc3QxkCs11r6xkGPyLMDqb1",
  "key9": "5RNYMNdqKAVGeQ1W5x9N2mev1FM6CXdkSWvbHdhxfPCJxcuh6qgTGTc92WNAr5WqeUNH4fgQSmGRR8Fy3wgoweoo",
  "key10": "4aQN4fBK7veXu6xSVfgsetndQwDDzwZM6fxdjhVLcPYerwHuV7SpFMsNpDCDzMQB3t6AqdDLpVEELHEtFnfaZPfQ",
  "key11": "2Yopyj2fsm4QvHtJ5Tuh2D2oQ5AcnzLsLKcjqhF36afLj2Kzsusv1f1XmHy11FAgCMfcEuetcde4e5ZAvY1iUNpv",
  "key12": "2sEifWodFTtoWrkL9k9iMPfHv7K2yvppho37f4VuD7u52N1CcjCet9pGCAGvQ4jE9auCut3fWAZoTwvhamsbFav1",
  "key13": "5fwae1qEeWE8cXDhog4QesErz56Lp11w5WDCagef483kgVGtJAGyH7eJQF9iAXuLypGZ6CNxUBJTeeZcSwvL1Tt6",
  "key14": "atCgoFPDJT5zcddqyP7krctBPN9vMjS73iqNm6n5dKuTeaxUNaq2ZC6PCkJbezhX9KFQo8qucckDqWNmvYDM4Ax",
  "key15": "2XFNAuPLXbXP3EmfsK2iCLdn6aXjGZKEPAJwoZtkyyqxjt6Zy7dWtbtAvGczABbcbmz2ZSw4NQeUVnXkUV73aEMb",
  "key16": "2JpXdXk5dxev7Bc3a6NAkSVdricDNMR2yvRPmXoQKdJNQ1atWWHYM67ex3AASQRCkGwrzcxj5TB2mksB3NoT1hkv",
  "key17": "5UeJj5S5Pjo3AEbnJRFnSHj4ekJLuQMbdLqCmmBKnfXGxS1hJMrS2J57CM7FXBF7jdBFGTCu791YpvLY187B5NS4",
  "key18": "3v1fTgFVD3y64p45eWjHy43JTaXibA6KW6CWvsUjfAQv4Q1h9gfYDWYGsz5WLvXT2mvx8FqWstBHv1L3XTiXUA7G",
  "key19": "37ZFrhPLp7LGxNovJodToofNyDVrcrAEN71Sv7dHPpW4Sn9tSGXo2JwdRZxFRoAhhqdwNi5H2wwgBDJbnDVWXsVp",
  "key20": "5Ua5VtLKFs2aL1ey3iHduZyzAdfmn6KPdhgQwHQk84YTLVUkKXxbRvc6aQ8FkfXoo35SFDyTH19jaLJ3VZbd1pBN",
  "key21": "64JRfkUzSndDAQyoBiJfRF9YCHfJhbvLi86CN4MGN3KDifN6eLsndWsXmMpNTPqnRGPv88on1CLVJDE3gmGKcF7t",
  "key22": "oG1Rtq5SSLLbpu8YwGd65CN1rsum8SWR2PeKssFRi6DTpm63B1yrJ2QiPuFim8N66KMeWtc5SZZYxXXxiL2Fxy7",
  "key23": "3QSoGfQTSFNWqpU9Gj2ZvSEgoWPZufEF87p8ykwHFVNkTv5wBCom8th3wNjHRfEDgi9t9nMsJ8j2vDea2VUTDdcM",
  "key24": "E7MUDzupV5V2H7Rz4PYY2cWGaKRC7w5bGSVdGyxH9oumo2vfKYr5mGYssFAXi8YHtHicd5nTaYPjTXDv4F7oYAq",
  "key25": "3kNxSCDtE4AM6fTcUEoH955GNhL8mzmKX8isQxKZabFjynYvRQ72UtjPhkZ8JZS9hnhWbAAFgDTNJuHaF9e364Lo",
  "key26": "3oRPLrAyWw2VmH1QGfnAdg7i146YTWeKkpk7dVVkQsoKY5G116qVFc2zM9GVNc24BX8L6AgXPi6uYF5nSL7LJZ2P",
  "key27": "4czhZuDcirEExDVWvLMQUGu2zNtvrj3puGEJH3ayud1hwrqobJAgvk43UxPQXwHCE4Vm5QtfcWshHRURpi7yWzUX",
  "key28": "zbj29rfpX3d2unoxUS4Kqcs19jqZnL8zPE6aiNSzLQKBFuYdWEyadGAA7m7wmXnFRbaecED4XW7Haj6ezJh1z1o",
  "key29": "41SD4k6exAvg1GmTsP9ykwqKojfhCZUK4AzQxZAFtWgsqGDJt2gokBfURXvkG6JcEY1TmDRrcS1M1YL5Rfhnjpcv",
  "key30": "4r66Msyyq8neiri9PXAYPTBPVHrpAwPt9UoPi5xvB4THoRxuT5pY3V6GHtLBJHMtEoZQiRPpMoKeZyEeSxmLNkam",
  "key31": "4cET2w3W9xBKFup8BdMsgQRPyft5MTDcyLAeKqoo8p8ZEoFwk9bkgd7gPuAv2jaCdwrH7Exjwp183rDKe6Da3KBE",
  "key32": "24zLWVzr9zGFhPjuhvSzd3nHHk8xfjZFtnhFNgyCMaFLBQbKgeScPfmL36TcuE9ougjRTGUVcpSU5RuN3dGbAdTv",
  "key33": "2MrJ4bLY53FSxW3UV2xVXS2wLB8h32KTeDYP3WQvVcfdTTa2Y49CCXe6moFecrN4DCAd4PNAYqGhujWrm4g2hEA3",
  "key34": "2hmz7tqdLuCk26ssYLSUXpmrCELezEsJrTqCE54Rs4bU43cagNTMiX1s5r43RixwpPXpcUEx9cDDzmzQ19g5ppC1",
  "key35": "4DXMaEegeeKyKwPQW97P3Z1zgyKFpVpqQN4ekR4AX4u3hZ48NkMGBvBDChg5k9X2Q71695n5ULyEzz7uttmoEScY",
  "key36": "3xwcjuwGJSWCiwUHnHJ7vQTdkmr68a1toD79wRLr8q2ckLffdZAHcf9KUAjavxBNDr9HxbkicpwNt1osddJJxqvQ",
  "key37": "3WTgJNagGQvYCBh3BSDg7GASvLMxU96YDfLbFwEYfKN4AWQDo8JAQt9yyrZJkKsUH6gUyV1Fdfaz7rJfgEJ4Xadj",
  "key38": "5xFugkGuKG2NsQgcgrYvjqARKbzg1wUNus4q2sefHX689LUhACG8EmHQAbNA1cdBryCggtP1evT8uAXNC62RZCcW",
  "key39": "49i7HqRqDcMwuQzjzVycbtMjhFHsAVNLAJX2dv8PKKF9EfPUrTMackVrxASMCBAyGJ47BuzBHtF2bTYQYMbXuqhF",
  "key40": "25cjeNAaWkMBhwNJZroU379PdpPGziQ16sgQ63qSJsJTrBybApPFGTTvVzK9Le8NWZXP2xuck9nwx1PE7qgraDSm",
  "key41": "WdJb1t2WKw2CfthiQT9xZQMecT1HvR9uzD1WNykVnmrBdENgRgxGn5QviF4qJoLqGijxJqN1wdFo1iAtqHvVrv4",
  "key42": "2kQfAEZk5Vk9wXVc7qAXR4FsX54LYkDPE4SsuFj7anoCnCxKxjGExhEebyKxDN7nsL6hTMAGpsGx38fjQAAhLFC9",
  "key43": "5RSejAwMTLQNJqaZGudxDJhVHemfTTN3pGy5hPfrchbZrDaBFTHZpMyppjvMdAJDg4chM2DK9xmErb9JfehQzQ3X"
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
