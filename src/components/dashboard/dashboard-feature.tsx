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
    "3pBkuLYEd4iKwwrRb5UCkfvXpAaM1y1GUB1yoL8aDMhpDLNcb8KDUdH7iK3jKQtzN7JkpfNq8NM2EbPxRUGdbkyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kxWaDN9Wd9kpESCEpYjb9Jc9bQtYQDdP839RVdHcEJxbJhfFRw4hCsQ7pfXiBJA7mKwmuDasPEkoHTwUrGtBpa",
  "key1": "3JdsEizMGXSLF9q8c14A1Xu5YJAywpCZjXPPEKXoYgFJoEMmRkK1rofpyeRecQKbiEnTdEm5W5vSAJFdQxjH9pZ1",
  "key2": "4Ct1k5iBJ4zFbs8ap6rqLuXkXQDfJn4uMykEv659vNb9DL5CLVaE6in18cjRa4FnKQ6bSVssTbmV539xW1dCbknY",
  "key3": "2k6oLnKyNzzbJWER3ZraDyR9L98HT4sso72RrpBZCGcFU81ASJzUwG7M8ZD8he8AtkK1ybjZYwFGWbwqG6bieFjt",
  "key4": "eDNU42TwQidbeaYVybSqbGhWJUADxTpw1TejhJuZsupcndkDvF1RSfKGmN5EK2hmerpvujEbB58T689r8giTkTA",
  "key5": "4VxEa1KzPUtLFvaPE9jPL4r95Lr9mPp2M4JxZ5uXheH6u5W2BvjWJDBKC7267Yy8R7N8mahRVDcZ36QJw7gBm82H",
  "key6": "6oUPJwKmFvjwyfDBg6uYDS6rAJ4fr8Qn7H1cVJ9zNE8pgXXn6B6HrXCisW1xjEYMChzQCnikPjCH4CEsP49zP6o",
  "key7": "5jsff3xp5rPWTW9ae5QpXWzwJ776npfZ4U3zkCa4Wywg1JVkrv91HLBZoJxfWQcXavmb2a5Co3hodTCt83C4DyCt",
  "key8": "cc2jNQG3f3MYNgvoQVQ1o4FAtCommFRU97Gg588yEVXLFwekcsojRRwS5sDtEcnD7GAGnAheJ4Q3WxpLx9JqMiL",
  "key9": "4z2fTMwrtm6sabM3pEpqnNbrMrDGBPLf13PmiVJ3vtjkAeU36KKTcpuTZ2i7hhy47m7MJvSNaV5H4ffKSHBjzE6z",
  "key10": "z5PBEtBKEN45bGhxQ77mSicqSBeb5JMeXGwtBn9mKrsqWn7781Lyamv3QbSm86c4KWhSRndDGiKiYFQqR1Dn2nj",
  "key11": "2p4m5oDMSJMTWwqt6Qc2kVe65Vz6GKZchW48TgWvgjtTDBKvAMLzMMdZa91AepsFdTaAWhuaVjiWyNiuFkPdjjCq",
  "key12": "5PSMgQqnZZ5DW7BEL4Fn6NCG4hauXFH5eepq9HPu57D6sJPziZR9JtYXmQjvCxdZcEn9HfR81EGgZr6o3m3bmjtr",
  "key13": "exXScDDverWmkUCtsh9Y8W492w1jCPJK1jzb1nuDWeGrcbMkq3QQUMU8yTvyKrWGzh7d7wFUeV9mXdN6eSHt7Wo",
  "key14": "47CjPfH6zXHCWsHtRPbTPL95B3ggZa7CL1HGGpZ7sLTBZbFpqvYPwWuDjnAJKRbtmFhkrv1WxtEmtPZFDZTuKAvE",
  "key15": "2YJfysnEoyNabp2ft5613g6HgEGbk68zcPNMQXH8NA1i1442prxjzSDnjaQZiha8vcCtampj2XVpCrCekGM59Eo7",
  "key16": "24p1cUfcBJqfZQMwZC3Qz1Kjb7iCWcCgk1dgSN9oD2PHh1bnwBP9JmudfLgg3snJ8uvnEX5Buos6FqZnkRTRrXQh",
  "key17": "5R8oyiE7byukXiAST2NrwLP8FLx6ZbkqfqN8iPAUmQc3RQx2gwEXjb3RMKmFo69hSfHiWEDu2x3Fynuf7QoABpN9",
  "key18": "4fRKdkdAAYEFDzRjRzeyrmLLzZY8N77szNBc6MqvNKc6xqNkW3y4hX91DWkqDaHPxp4PY5izVqNVE5nsDJedDvun",
  "key19": "4ov5j58odQ1pC57XWDP2YKtD3FWETXM1fJN1YgFMfUti7B5qPxBmKLAKWFKPeJRMKkKeFxynwCJ8f2ukp7ME8ade",
  "key20": "4PZNHGnQooQzXCNZeGBQ3jKRDEXsZAkYzvhX6ake4LFi3zdukiGarWvbK7HhBRhujNsSGBubbyrtAmBuj8qB5YhN",
  "key21": "3EKCv9TjpTDY3apdt5TZX4DxiRhbMaaKuXB1uMnJf7SjFuefy8tptfMemss3CEDtweBXvAjZ9YAUvJRqGbrULdvj",
  "key22": "2CvsPmPhZ2euRSjyncBHaLDABywhAo4BVRcTwg8pJ6TvgDwhqsoXzZzbXFnPVnmBrs4H42uaAFdB4W8pGoedoXRK",
  "key23": "piCyrMXZ8GqYaw7UGwzFoMkSTThg9K25jzokHeDvzimok9RSkYHjnKa7f9yypduerfEbT9SZADw62RPe5aV9xNV",
  "key24": "3sqA2HKtw4UNvFSHQTadRi9PxHNFnxPfTkq1aAY4VwgjiSsfxTCAghFsqjWRdPJp9sRQ957ECtJMAosFiBG61X3D",
  "key25": "3mvC5dPWMx9bp47X6uBLWxSYTi3F52WwL3FaS8cborXizFMbMjqEbD7CYqoogvP1Pgsd5afpSgSSxUMy5bNVuq6M",
  "key26": "4GVN9kr8EC7NeTnBJEemafFduY9A5z6RyoqAVUxx8mAF6KLxHa9XpuzUzRx1B8ZUqxtYwUPAKMMLHBBqtdnmgEi6",
  "key27": "3gBy8JjLMQywMTJy7Casg635mhMicJ7cMnSt3AorxoWyTcJx2Yb48YRzH2W2QHLSb6dTFvgvrmGBwnuf1DNzMTD5",
  "key28": "4ZGFfXELyAKcSJjLTRZ4TgLmifNVhYxr5cyWC1MrYPr95aPHPWjFy29YYJ8J9umZDNcJR9ZrUxy8HehYkX947jUA",
  "key29": "2ZrfH3JN8hp65MstuLCe8bnsDXKGeYizE8UzfJ83bJbCfGXqqJzsY6kM2hWoZUaZAvyDmQUFwHnumhf5DDEN7uvw",
  "key30": "2sHeY5vwRiJVZbMmjiwDmwFGdF17Vrpom3DGsrjxWCc263P51QEBtRSXG3RvmFUiYZxf5mewpfkd7axXMdnWWVwg",
  "key31": "5Renz4XiCwWRLE6EkomXwc9XDE3zNguBi8f1nuKrjhxspFAFcMb1u71CpxJjss2uq9LTja8YStMi46oKgiVzr6Pw",
  "key32": "2FjwxPt958EZQpreMwVcz2uB7KJFLK588K3Jcvzwnqnj4hoaBYYBiaHk1AMxbiYJEvSRL2uqkdYTPK8EocqoEunD",
  "key33": "4UWNfg7yfiPPn6GqBXccHnVdZpNZBfsXLaLqdSN8ve9hQLKYtwndsd5XjG1NuLaAR77uuhWYWYEDEqkir9focyR",
  "key34": "2tQdKsPkeXFxfarGBS5PeVnQGZ65caqXwDQn7zsEhuuAPPh9WxF4F4xGVgr7vpdwxwF4bbB9FwfGhHts5Y55PFRS",
  "key35": "597yz3bMVhBFq5vhcvpN311rWEaLrZgQb1H6TXTooAr2uqq33sQq5SvNEg6mbYKGjvgMnmRjHv2Rv5YmhvUogLMu",
  "key36": "3q7t8zEQfXKQSh4aYNkzZHMp3VgHDcijHfiNzLj1EMB6friR3Dx9pfU99VqbU2uzdpahbqPomigFt4MJ2u5NadJV",
  "key37": "52pr4rb5E2euvcYsfqxrmAPGBesmAZq5PTMDC1sCb6wxE9D4r8ZctMXAGVNRinhxcqDQ2bUqav4krA59GMxdsxR8",
  "key38": "5wPpZAnM1bMbZVy3qYfrJXLF3fRUUCWt6NG5uSugu1WJVCjouMpAXvVBL1AEyeGon1FZkZd621MBPiwGYbkEfkr9",
  "key39": "4dQCqh6kkFxT1rgP4BmZcUgtJmHoXCoXFNghYLV5aNFqqG5oL8Wo5QAv5NcBvQkApbywrS1e2yxN7psCrup6reCq",
  "key40": "5yoCNyGc9E78ytSQR76YXvakbUFpMnn8zUa1gi14iVLHco9JwZ53gChmJiP9gNMF4YobDsMQAVq1MgvKdoDkbqRv",
  "key41": "5QnJoiLTZtiyE3Qw93aGp9qyzcV39QvtDC5GCSDcDB9QpHXCePAuKM7YVa1WQutnBhssqaTFwpmU5ydbf6SXGJ9K",
  "key42": "5XxhUyS9y6w6eqZVyQ9u7iVgJSkWe8tgim2ddXVdZAfFFe95wj4ZVE61a8ETC5wyEhnA6wMcGJc4HtLoi6TMxDtp",
  "key43": "4Fna3UFi4T2qP8HgTMUmp989XU5kDWtGN8hj3xyK22n98w1AmvQqckmdaDfL2a4z2X8pubXsjexa9DcPQ7vD3eAk"
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
