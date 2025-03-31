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
    "Qays5ffgCLnLhzhsRsSJrQt5Ta6uZivaV7zjwzjU8kLpxfx8rZJdQVruPYfVV5MBbUAME7gnBP5JPfcAinorX7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HfVyYZgtxnpsNHJ2uQFbMm3iV1dSxmYSc1rdrjdGL5ecnoFSa6eg7gCo1P5h2bR8Hrzs8xkFf1mMhQyUkUGMMEr",
  "key1": "4VnWjRW7Nmu1wS7JuZv57jGtuiHsPKtLgEJmxf5mdHNR8ctRdMaZr3vjHCUELo2dGAf1rBf6gHDof9qScRmiu1q9",
  "key2": "2LHMKrxLqvPpmmQU16yXMjqwMSFrLfPiwMweL8sRASDY9vRc1EsZhPGiXeWtvNWsTBvgw9WEQV8V8f5jiKNjuaQS",
  "key3": "58XDP9kqV9cwNDqMD7ZMGWTFQXSy1VVazwmAVksCZk1wJ51QMuBprjFj65NDzwTDe4xb6cCVDj41GoevwpnSpyHS",
  "key4": "R4i5dLZnHhXNKD1WDigDr9Y53Z2deeDN4THQhHREADZhV8NusviNmWawaDomPab5vA7BgCMaRFenh6DZwf5UfUv",
  "key5": "4u312r2611eDufuWrTB5neBucupuAeYE7WHXYsBBd3uj36s4EZMWyBfatUnyLevjMy3in7BFzaV2g5b5vRH3cEVp",
  "key6": "aL6dYs8Z5Hby5F9MqbB4A2aeimt6LVShdduHycWYxehC8S5nxyqA9NfL5R7EHxG5ZDAyfHVsdg54Tgca7Qapb7b",
  "key7": "5K6pcwffTRA2ypiQW5Mg2Pmnz5CNDoYqHEQ3fHX3Go4AntmFJorhpQD5FhsAY8za8y56iSZtcaiFEvUAGxmKx3c",
  "key8": "p2yNsdPRthz3VtYcgGzBspV8vEAYKHchMhHjWBH4MtBxGEkfSst7817w7x9YsQPVjfce2Z2aZAmNqJ1ESTN5Kn8",
  "key9": "3fSzEjcWg9abD9ZuPszANYZ5y7jqt7CroS9ARs9FC7H8QF9CcwsfnUX2Wc35HpvocZ477wR6rkqfA6WV67wbU9nX",
  "key10": "4DsrFwXaiYNG7Y6eEKsa8ooBFNeGRWLho2mnJNYSvEvUDeZiBiVwJ64ndr2MdPPN43Lis1ioQRbkTdwbxx2xd19T",
  "key11": "5KDcsnanyU6LYZuHg2XmLSZXRJVeYe93m1cnrK98NoZLDu9b3QWomYd2ZqwtZ7hMuRTRErdKxPogjVPZw6JYm1YX",
  "key12": "HRJGkejActi7rPVYY8SbQdbzWduLtGeBiYN2eUwnvsu71j1SQSsb4c17CevitFLTkUQHCuo9Jrk29MXM6Waeb4k",
  "key13": "yXx4kzTqPeAguzTWqhC3pUf8Vk3SJzzc7WdTvcMUWdCXTFp9gpT5FBRmV25xMDCrSPFYF9c71Eq99JDrNPoVm9T",
  "key14": "4DNoB1fhXk4Ycd2DMCxWs9xgcWPercTt1CgxEe95gu6QG8RpYb4uChHNbrKgqkgAyjDxmd3PqeHgQQ9svV6bagEc",
  "key15": "XzwnK8AzmQE8LhA38n5CdeoFYPUaifBh4fSMcNbBdriVJPaBcKtkxXjtuoC53kUbJJUG88UjPAmh7RQrZ4ELNyd",
  "key16": "5AcmPBgLtDoWhPmdbwCuUPZHyRnwXCNCbpCueh1mGuD9AaFBEP1jQ7MvZS9RSYcyvisbm43fSm39BuhZnUpkGtDe",
  "key17": "AST5ekDM4GB3FEkfxCMGAN9YfG8daoA6xHxGPBiaChjG6128P3aS5kW98nKc6mMbqgDxHNj5pd8Jt3WXoT5nsRM",
  "key18": "63oQPjFKLEPsAQt5DU7etn2oPFZpVEiNRSXsacDjkC6iu4GkLojGprbkTVD91N2CH44EJp4iTqHK11KmKJ19xmQo",
  "key19": "z6mAb4KqaWBSzB3EMDxqQvvp22J5z6AUeqDD6UWjahnjv8i9Nwj94C7keXgBqXYPJyDnb1wfJH3jrvAzuLGXNvt",
  "key20": "29USmGtao6ug5YpLeAi1duEgyiJpJdXeZCK4E5bTVHFvqnwmmW4M1pmhp6PzX4xdZyDpnj5epVparns2kooTbpZ8",
  "key21": "6a4mKZ2dXQgJwCgEdKcE6d3vCXsjmpXKYoQHjrtdoTtSShEtP4zq2hLnHDhweE86vrZa9sYCA2tzfQ28hPo6wWa",
  "key22": "4j5gwtJ85nr3q7NdeuvJ4xQ1trKEQgs1gYYHb9p5bkegaMJYDgGYo9esFYs6Pne8C4sfUF4MXXDD6aY4erMVAMhN",
  "key23": "4bHnNgaQWuuhq7WtJaUufGXainmZhQhKkPji5A5j6g5AagjCTPCvtWcCRxw95iGaWNCSm5RajbbU7ZPGoEurzrQf",
  "key24": "5c8dAvTEpty77TmPZnpFnVoFVKx9ttZ8NKcLTGfSz1NRSM1d1U2NcQqwXfiouszKzutkH7Mq72m5EkMrbQN1qzL",
  "key25": "4wnvHQh3HfCnXiK7bofie3Sh5srS5HixaJ1cqtL6LJuxVmu1MU1FXFVkcAsrppGPccybNBYYKScMjNy3yLYiSFtD",
  "key26": "24nXnssTBRofRxh1GDyhySmXqhd5iwfmMkwH5f4TstZRAU1DeWMbvQfP4JwFkfHui5JqRMmE6aNf3ieCViziTErz",
  "key27": "wqtK6jcQ3Cmg2CorramgXEmVYcQtCpPJF46qkrXVHzRqdjKFk5MXkTBDqS4PyfuCFhgrr9y1XZ3FRmWqYVkDCFe",
  "key28": "2ouRfPXK9h86xuH1n66zmCMEWMs6z1y4Zu4fGZSCtfrZcUvwifufty3pz1ayLZ5n15XQXWEibCN4jvbJxfVPgMoo",
  "key29": "4SYPHwndeqoDy5YT8X3Cs1dJY2uNyHhFWJQAaB6pY22rh9cVaKrRxw1Fw5ivfPkYtNhAwcb1K6AmsbrpXjPPdDCJ",
  "key30": "4U44FiToHa1Vi73g9fU9VfpwVr4bAVHcoMroBMQc4UUBBnhtzigEvUQLNLmrS7EQtE3UhKp9pnFV1eQvDaPb1iEv",
  "key31": "2DvsyCpqqWztLp9muzCXMGjq29zmbtrqBEfuWA2yTcQ1wKbNTN7jL8RYjkDM7gwcW2j2B94wTcCy1iMMtPNAUSaV",
  "key32": "34onsFzCB9ZjHYBDnMLf8rxcdEMsbQMgv2XGmgb5YdoYkaPGSxbZKqDQsuoKMziFQgX4oi6cFryoPx3pzznPQ5Yy",
  "key33": "54Wy9cEwnikyazne1ozYs1jPNesZTBwF5VvNQjR2ZjSZ54ro4vaWCG3VMSvSPtFfNTLPjDhuHsSu6bXB5Ee52KPD",
  "key34": "4uXoC4oKYQm58YqTiUWgHHi7kJqYHKZuVyUHtTE9S5ZG2zKeSgPhRuSwmxHRC5HyzTHmedhwr4Zsz9HLJLSaYeQx",
  "key35": "4LBWkQvCEo3ryGntCSuPqHaSVTGfj91NE5rvhuDHMiDhNY28BBhvR1QKUAq8DSoYD9ijCCyaiGnx5j98rt8Jop3w",
  "key36": "2bh9mjEVkkyRveXbHs9p4u5c8Tp8ppUtWc9cbxHuK4sPxh7gVjbKVT64fwrmgKn6pEA9nag5ghS7ZiS3TfmfxCN6",
  "key37": "GQZEQ6b8Z2mBMxALNdyQ5vkQZrgF6JWrSYZAMgBQFKG9uqT7VA1Gys9WRei5Px3qvdP4yeNhFuG45DXVyZPiKEL",
  "key38": "X5HhuW4NL36Qg3Jqjq1hCTLPh69fSVunHDegpc9bZVFnJRW6VDQgWFseVjP4ZidzrECWkF6XxDdQnFewZSdpMf5",
  "key39": "3StXgmWVSvB4miWLuDw198fDzyEbDM75eFfG3Ki7QeTYq8kCkjPLeVtMwEZDnRwQkGGPmFhKxZaCnUVJSPsf41pT",
  "key40": "5KwpzstX4ehWYS3m8QxfMKB3jvE3eepsu2Sonp1QG1fBkLZW4aKckWqsjKQQRvYGqowjUcpfXwoLKEp4Us1fz4bZ",
  "key41": "e4AgzbQJmS6qpUNhy44CVUuKgCSGnuUL7aneKEgfVW7VxdZ5r8wPpgMWthAch3R1LWWQoaGhkgBtoiP94qHNE4u",
  "key42": "5ha7occYuLSDa3RahukbcLSoVnmYHKUAyiY6GivtR4KYnaPVMNES5Caxz3tUnz2DzjVK2b8YgjZ8foYvv84SFMex",
  "key43": "26DjinZ3XVEgSSUkbeczHDna4QVDCxtzTjw75ChSW6btGV5C8vPbZSnhBFRQWjPJLwohkexC5b5waXuNcX9YtX6H",
  "key44": "2ESRjmdW9XSWb5nzsUBY53nMuBy2Ma27RrLzFCnHXU4utv3oFWFmVPHoPJwbj5RjamijxysX47LztoUrMHCfbcdb",
  "key45": "3nVgquY4uJQYKR9FU5jznsZDJHxkicSjdxW3pfHDjSN1uAtC3AVZ3JzMeeM3L4tgLSoeJrE1bJGZFa5cHgKcC5KH",
  "key46": "5SMUkijGxuySNxUrzbhwqDDS8peHMzMWtt58LkrNED8KqmwD9mLVT3CCNH3VddNx4UC1Dx4HheZS7xmTCDfRczDf"
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
