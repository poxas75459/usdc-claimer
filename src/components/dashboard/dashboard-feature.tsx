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
    "QrtTnRTrQJu6qDLRmK5ZBawvbg9uU1niTUiDyiJqpoaaDk2Hd8Za2SCFHjeFzMpL4n7MPLhXemrMgw3TNbe25wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGBDffSfVdQxZJZWqLyBhMSuw326PQhWKYUL7oGwa88VKeQv8ofpXWjGcbQWXUe9eTDYRXjYpFPzuFuScDZZmcM",
  "key1": "2ZkPriuYb1j3kpmfKUgNEGkTUyo9zGra8FtLfu4LJ8T69WhhyE3Pq4Lp4tWKPmwBfNH34YhWtzQFXRezvXudgwqM",
  "key2": "2y9zEp1AZZF6EBQpi8YUBJq9ehiNZzn5KsHishopPeG7wX44vuzuGSpfaVHHWmk7gs6wvrhQPEBYnnLaPaZS34uH",
  "key3": "2f1nar8waZLmEZqAMyq4Xd4HaLvbC9ryV1pAQMxj3Wb9h6XGcUJcn3R2fm61PPE2S5wGcwd1W671Qe9vK2fUGGvL",
  "key4": "4oYZ3X6sd3xgDikkjQyg3Mc6vaf6P74KvDjTpcYPZWvMLtU32GC4oR4h9QGFn3jvsqp5i8vwPBU9m43Af97nLHVP",
  "key5": "3Qb2CxbYHtPtzVcTQV5XvV3nv86MQpEnDJW7PMcJgLtzhpAE65mWRmzCxrrRmVhffr9CT37tbXQ1wfCrV6shoYPK",
  "key6": "2Yuwf9gJgbvba6XfnH9yBZJjNd34epuBxKf45Wy2AFjub1vQuxFtGCkP4W8ko9BcgWJPQALDy7LD82UHwNGCgL1C",
  "key7": "5efihTkema2nY9PqwRu6nRWDBsNHwsZhgc5mXsPQgEFeFmzXcHfok6czrb6rs8SECLteotZGCjHkwM6ChLkztgdZ",
  "key8": "35GQCnzNuSmcw4gM3QeevmPawSBTUPVowfF5RDn3wKnJNCSKVDmAzmjT947U6SWBJv3MHi2vmgqNr48ZdKUS3rGE",
  "key9": "5vG2s2HEYjohrQaxRnAnez7RWwLvFh1CVxtJnjehin6Jsd13VxH37fnKrsUkLPBzwoxL3x1uJovgpk8aj5KMsQ4W",
  "key10": "616bd5w1p1vX8Hth8cMydoHeivDwjC3UPtMvJEP8a4rVJdd3pSYwRQdpZ5xSMGmKHPpaLZ8MT7NXFoKPK6KzXR1",
  "key11": "5b1XK1aERBHGtBPvTxUKFCMbrz8aru5qGGtYkzszysaVqpktx3hmzNSY6JfKbSCSaH8krG7f5mNPS1AdGeEh6ryR",
  "key12": "4UiN6p2ckCPvUnGwYKPHScg8PsVSmuiSTDP6wtKg1EKggTKNeEK6s8m6zyFMXigyUJTHj7Tw8yd6XLTy3A2QXeGV",
  "key13": "4rR6PYExDZLHSYYCbuqpxEVCg7Qw71fr4yWv28i4j8njJFya1Fq6D9XY7i5Po81EBYy8oVpBd77Dso9eGSx4Yv3P",
  "key14": "4MJpG65JjuWermBCeBet8q5y4iDhN1YX573wif63rNhzZyVFYufTRcWKyGVsnBg8nSvjwBqxmQequ3SHQPKvz5aH",
  "key15": "42oh3W5yab2UjhxvKsYQsCnDzcXLadFcYB7iPSgyZfMPEC3E2stajUZ3G8jQU7Xz4wgVSzYd9M8G87dq7xT173Ev",
  "key16": "4EaPLrKoJJiFMfyD2T7CQozpLYo3XpHktfFhs6CtQGbVkTQqYUckr8iXXjkjCuLQFg4jeauuZgr1XRq5BMWmXuKT",
  "key17": "3BpRZgLU9hgadxqtt8TAiVTrKBJYLBGudHtU3UwrnqRmcjzetMY5Cvfub3vjj3MSu4NuBhUjnzZ18tJPpPyGfajz",
  "key18": "593cQ4GhUARdDGNxxuDAEZeGM6isDWdQETy3cnnYJhPxBVCABaRpcBQa2NsUCJxpfn8YbXbXb35vnHkMbG2WGwCN",
  "key19": "4Ypt8PBhY3TzKxQPbBPPBdWUUshMowkKbgucrJZMdhJVwmX4TSYSoVjuExasJRS6b4wPyayqrfW13VtQ4WifKhj2",
  "key20": "3CLHVLPY1VV6U8FfbNL9mTEy8YSPhgAV7vAzkGndu4WREvrgH7WdVD6TgCnY6W25xRC4pkL9fd1DfuKJBmcvQ1rH",
  "key21": "ZKMFiHe3hG5oxmLRYFYqsB1zZZbkqi6qZfB79m2cCxEyruBQKuZw1RGthqppYVCmMwn7V92cicTRSsykiMuS7uW",
  "key22": "2PkmhkdXGHCuEANBL5UzfR3p8z63nqzyk1XTCsdTfBwnGMk22h3HqmNpUeUGn146rwmSCV1yUrFQ5h6tNgnakXhB",
  "key23": "53KV1M4nGiBXmqR4U721FEwqZhDBPVM5UGJ3LynipN5mJCuXbN4PisByMsQ8VHzS3AoPFXV1nHFV9ywRxRSh3Xsr",
  "key24": "2Rb3BhETx8mMmBnHgZgGpqKqikSAPFHKFNL1Zu9ADoj8wf69tkGfsEWdpbwDUrQZrQ1EW9p9kuFzcZdRuHqfJe7K",
  "key25": "2H5J3ibTfBDhDmwEUTcBTvzGRsy1GgmfrZxfNe8zZqPrtf3oDGc95MAKZLu6pUhmXQgc3GYLiJcGoTFxJTJV43bm",
  "key26": "3GEceLiVKxuv8yUQm3uEe74oUq3WZmJ7eaLpoMm5yLgJYY7ikxzRCKz5dfK1F7VCAN3FZwcYDvaJX8BUggEPU3Jq",
  "key27": "2Muhh1MtA15RgwGkW4oKPBGDynpW6wFegQXtpo6dmj2UWqjzEqcsXbDzTaMRcpw5Y4eSG5bDNWRtV4UvsrSs2mRd",
  "key28": "GBrZUcvhYHQKrtm9itbGBVsKcowcRdNN32Fse7BMGAyC1vxLwmpymZEYtJKdYjrWT5KrEAn46anQKPdaT9pHMpu",
  "key29": "4ai9wHTCpuuYUmZUM78pL6YPGKYZXvBABadjEU5QQ5CUgEptzcsv4imjLJ9dLGd153vVfWHArGT5H2pSdD17L8ve",
  "key30": "fn5VMMDUYqrSyurQbrGdk9eQ98UDEUQzn7bahyeDJ38XhtEruCKJSBGrfevd2pKBUJ1qj4qJtvbpeKCca5Cx1WU",
  "key31": "D1r3TsPkgb5bte64j5LQWLJKbr53x5jcKUpJrjcum3R4dY4X6vH958XS6do8hQ11DUDxXjN8fXtUAigN24rx1V8",
  "key32": "4ZsMnoBZsX7LMW3KYBrkx3A6a6D2pMNfhexqPz5jfNcLx11f9iNwdfHXzZMrF2XzqXYbQykeEpGGA8XwAJb8gB35",
  "key33": "25rzJXpH4HRdPFv4HjhK8nGc6DR8gZdPhZQLX2YMQvSrtthoYc662TwgzWFDiaqwXhSRJuRmy4gdELHdYfUWPzun",
  "key34": "3cHL768GwDGba7EWEnHLrAN35N34hTbjVuynFbCkMGwz1NDRjTDXChYjQbN1Bp3xzxjaXwBxRCpJnfpox7uYLGzd",
  "key35": "2ZqpTqWn6oLykZRpABNkPRnzWbeKAW4V6nyEhgPomgmRg7H2eJmCpdGZtMoU54xnvU3XoN5bGqpo3nib45KaqZma",
  "key36": "5vFEZ4t7XGKCDtUL3SJdw1UARfG8aps8dvpdxVPjCB9y7ZnXrh68NzyKk1UTX3Sj469XPuBoAzwuoB2563qoRRTK",
  "key37": "3KyL4gERtCjiSGoF3KYTCUFwUWowYfGqbJype8aWCcYZm2UE1qgk1UMDc3bDk3YWXC6aTJc5Ymfhf33xp95wedkp",
  "key38": "5uLgQ8pmCpEuL7L6mznTg9nszXcfKyEai57gXd8hssXgx8eft2tQsLwH9WAbNvjY1UfdYUYj9ohqaQS33oNwgpxQ",
  "key39": "84mmYqriZwQs8N82nGLYNnnEVp8YrJfDtXcKgV6JHcbJfbynS6UBUHphSwcjaMDLki2bS2bUcPnQcPMmz1Wm4yh",
  "key40": "3Agk7h1CWJ6jH9V64mfTkX9GJWw1VKPTYwBBVuNom1X9DG18RGXQV4XEVkijk6tE567WqCXC1yqZxrWxYnj1bH2e"
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
