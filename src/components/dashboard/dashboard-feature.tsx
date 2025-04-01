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
    "3ZoFQhys1vD9VWDGTHh8p9YQ3SYxn53mTctMvo3sXXC3bexT9NUwNuDddG1udVmwE8EQUMWDLXvmoxLYFo2ty72d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMmsax5SuQyDA4xEfyGr1CWejAX3yryMRNkUxg2h8Vzr6F7XUznZhhRkgqbo81Lxm8s3bJgZ4kL7eavJHHM4t6A",
  "key1": "5WaMDfXW3H2qfLBZtzf5wpfp5Xhycxf8tc2niw132umCfj3TY2XCyW4thhrjc8NAyR4LW4SFgkNafY9pwrXP9gX2",
  "key2": "2PPJA5DotXQJPcZjv274CFCi2tkughGYDQQvc1aT3prNii4uxHEbWrwFewPz7jMQw698ZsHPc9ikcKh49WQ9RdSk",
  "key3": "2xG8JAPhAyCgkyANRuzHs52M1SnZwr8wipph7kUnKzW7C4fVbwHcaEuUchn8FxRuYcRDgbmumFDN4FGdMGe9UJS8",
  "key4": "3cyMErn2GLxyExhbuJmu9w7Gdrpc9oCRczXXgwRWia2cJc9zahKz6zXntMgXkqTbQxJxKD7R5mpbdtE8PV1SvuF3",
  "key5": "3EUc4QTMAvJh2isFpLACBepPoeuWZi15sxnLGFa1g933sVsUneT5sj3MTZeN3LBBiz7TsY9bzbbPp25JR5ZuNSqf",
  "key6": "4RoYFXfNC8mXqRjsG68keZVqSZ3qAwdFrPwMwzR6vxwCxeJ9nS1MDDxeauy84URqheGHexUWrDecWrj4tq6Nr5Fi",
  "key7": "2UP27tzPLfzSdcsPv4TXLRkjwJzV7wWGw2RJkp1Hj4ozkCuHfsd7VVb7k2TdzhDGe5YZLqYF4LeakSVA41ZJujgC",
  "key8": "5j4JnNR5C3FN25cjX1c9eVQewhnEHFVx2yKLfaJ2eX68nZqu6HaDUu73CikQY6cx5Fp6eFYKP8PKo9Hs6EEPyWVA",
  "key9": "ChRJBbGASJCmf3mmZEUHthAA31iheJPTFLFPPNd8YDTGQ8FGBgZb1tVNWQ4mxf1EA1B7jCRxCX3JmFMGC2FdrvS",
  "key10": "2Pj3iS4u5rSQPb9AfUPkF59oLxdeCaU8vdHqxqxqEPFDAmn67DByyzBXNNirzZjPbVB1Cd6xbFoSNKy4pogVqtKd",
  "key11": "2ziEP9PpX2R1rA24MvCiukqPxRuRzv9ndGAeoTnvfkCRPx365JCEfgcm2evUouqfrQiLobCfbawsE3Qu6Q3VkMut",
  "key12": "39y2HuwAzHEt5xhopGDMKS79ywxQJ3xSwPx9iZAqUoEx5sxZaRejqSSC2k84yo69E3DP18717aJpEPV6KCwK5QjZ",
  "key13": "3RcPrxRLkY9VsaR5qvA57DLD6cFVWDJordzvTebE5emTvbizvfkUQcegocFfZxmJfrRpuFq4bYJzCrgP11vEWUs6",
  "key14": "5e9CTJnk3p1cAnfqVDDzKi4cpwKmWTJnSHEo3nPZEhmS5KLsx1D7wmBJcriN8262C2aQe9zykaAKvtPdZkucWerB",
  "key15": "3Dz2KrJUW2ZKs9kb6JrGSJLEx1ZjACTJRYQ8seRC47s8N2ADS19maWR147xYbszYuhm9QimSkrQGGyLq6JpomnDA",
  "key16": "2aBx2JwLZMCKpKf1o87bd7Q7aW7CTnPyyvBAYD5FW65BVdX9ZFLEFW6FUEfZXMYA3ZDvrRfxgSsVB2mibGTAi4oH",
  "key17": "4XxYokhdgpYzPfUk3fWJor5Si3MfRiZtV3YiR551CDLiJse4JLjz5QUoA6DhUMxB3Gp32cBvSA6k6YCnUxroxoyS",
  "key18": "5D3Z3xL3HL5mHu2xS6eurMFExaZ3y4yvR9G6bAovnsF6d2jDHn4Gos76c5W44pJxNurW5aHdkxhWG22EqYAoeF5y",
  "key19": "5wzawqGUaX8sRu1U8May8vM2htzy11CDirBqysiCqae2m6ftvThnKMvonG7H94XLTRuxW5Hbb65fs96vEdEahS4V",
  "key20": "3RKN8eQDqZvmvTJUyL6WAquGY7ZpTnrZK9H1Q92teTeMVVsSXZxNidZrCPVS3Epa7UZs2LqXs2zxywquWzDzXoVr",
  "key21": "4rVKK2h1eYZdkxGAonPLnkAsQgkwQRdXay8fS7Gw9q9an1H8VhTWwgZf4QeeW3ZuXUbfxqLWu9mZrNW1FxuWSusy",
  "key22": "yNZzWQyUDsxdE4rDQyJ3juEf7N88vYiW5NpJePgDpHgXc4aJjFU1sK9bPcJHUCq8cf542u464ZTs4QyS8twPxYU",
  "key23": "3TyMqWfQ2D3YxdBbKaGNLjSiNHtsm7r6HqEj9ejkpeVjMjdS7poR3F8CnDodg46S6ezV4k7duY3o46r6BxvYemnQ",
  "key24": "4EjyFvv3KHMi4nRLeAtWTAhCnoL8SaX14i1x1sUirmT4erhHrsB2Nmc4H8voEupfLwN5a6SsTZCd4Lp7hkXbtt9J",
  "key25": "2doBV3fbVYgs4R1ZU6yTQPpmebfdmCEsZHZhBhQ933Z9bN9EN6tgTBYEMQY8cS47UQjtCCN4WLWqoSYLTYNg8Ccr",
  "key26": "2asQWHmDry425hRf4hJD6RDDpEtfGsUPUYYgd7dMgTZaUEJvL75Mc1uLBmXuwYRJWzAx4DmWxxmJmGY3zZi4Ba93",
  "key27": "qRB4qWRJL9NM13DmYUThb8oMNLoGgjvmGMqnEvnmjP9HYymd6hnpV82dSL17NG4h4Fq1XypcCP3W9evjUYzZuhn",
  "key28": "5q6YBp3J79hhSWvmttRaHiMy3r1shEy4JaFCCvK3KoJmrxK9468vq98zBm6mua1je4c6ajMZSoetzGr4N9dh5X9b",
  "key29": "449ZKbzD5YFCs6djDsz72cdb8pVtyN6U96X8FrGNKTK6jLbmkkNbZSgEexUZsDWRBy7bqmymK2ySkHLFvksj1hVc",
  "key30": "ejTYMC3L3uUBugSecCpTrLyRHnpEWBiM9ekafxEW9jDJiVduVXWGBRcZkTR8LHwsumwykLrQm1HYMVo3Fxaotsq",
  "key31": "4hsL2vDBi34xrjtRsjBuZdAZVQdsXfUyjDiVb2SyMUZGZb49xni4togapusuQ1cZ8M3pvaRZhene12DqkbYJCjpq",
  "key32": "2ryX9WZ1G268ytME7XU7SA3APgmCo5uvnG18CeSZmsJenfkHMRnkH5n6sM6H5dvV4rz9q5145Nfbydk1jJRhShAe",
  "key33": "3DZJMJpgb9T4r5VsVmK4qrCYtDyLTaNFs18RdcfdsPzq7iXBcLKd1wAufaD9ffSM37Zt7x65LtfxLqHARLnEV1uF",
  "key34": "3qdxYRy996wiyYq5vnzyXx3HDuRLsTjZsYrmx1GhoM2E2cQi4AYaf7zHpejHkowKEcyYzM7QMUtjg6SF685f4rZV",
  "key35": "3awtXp3i3C5xPBuz2oXmwdEoiMsyu5z9nu5E3ut3ZUE6ymbmj2H4MnEFkxLBTp5USgAkz93xDPCSf47RSx8x7Pt2",
  "key36": "26Kb2B2Ud7upEFKSnvNBpwTSzKV1EvgACMuSuqfdkt2vcyDm867SNc5osyniqiCB6d4v6NhgepbSyeNQmhoiwATq",
  "key37": "3tLX7Rd6gCTrVf6aZbbHxfv5HBSao42ywhZeUbv2c7xhgHAWj3ogStDf4CdZaLAcHUQUd8ZB3YBD6GW1s6jZskrv",
  "key38": "2JEQhGUV7nS3aPuMPVFCkA348wRcD9vVYb18MvhaCRSbj6V2baBzdenGMUUS2a7P9bVtvnEGogte2j4QzoLvYXWe",
  "key39": "CavLwQsJ18krZ5EWgH7qeCCYqsqPN5WxMnuW6YhDzXKTygm2RwotvLgKefVVZBkmYL4ws9xecyqzW4ka4THHdya",
  "key40": "3BfDnUrnUzMYjjYSvCQRDbW3rAWwnzcSNTRbyaTHG7mgYwrhDfktF9YxTWe4QAaGFPqU2bXuxnkysBPimbqgTfoe",
  "key41": "5D1jTSVTDag7t6gRwJgj6LJXdFwiYR746mkjmzRiAaimL9kMoM1y2YjpESQX11Mt4kmCEEVyXRb6WRPTBNJjNL9D",
  "key42": "22Y1qRqdEZfrhY6yiicfTDnfRiemmgt7NhMXJuDFCiAwSRqapWNucbJVifQAmBqnUNbE9nsAxx95HC86eE8t3Fgr",
  "key43": "3Kr3v3chaZ1ZcJcs28U45fYD7DVPb4G4BMTWqzLub5eY8NWFfk3nvAtvKNHHFWjqJu11a2pY8SjntCHmrKV9ZDtw",
  "key44": "3iA5vbZH22sAhWf2PYQP6HR7v2ByBbT1LyKBFUgTEYw9YrZArsYZRtFZgyrFF32vnsBc9j1YdCKXj1U2K1ZmK68z"
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
