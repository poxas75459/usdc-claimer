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
    "zqCZtqkUkim6VENiSqcc1jXymjFYQBNMcsjThpLDqUy1Zh3syYaj8WU2SVSkVz4o7ejKR49W7ZSYmHYs7C724sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y6oo8RpfgZfA9Hb5Eih7L2zmmuzaDHRdgFoDtoUgoifysqkNLKAzmbaU5fFhSxzwAQwgHx7dPRMnDLibxJm8wrw",
  "key1": "49iHNL3PKKzRWDTqvQoxYXnhdFHcu2dnZG3gL2Rb9UJGJwR1V7Rot8R5UKVxBA1xN3dYgjL5pb8iHq5NuDP6xkNW",
  "key2": "2mv4neTzY3Ph8iP2mJzVNZqC4bxtM74p7kJfFo9c3u8Hwk2CAkFFqFL7Et5RURQuzzDhWktkyeJu15faob8UYLDZ",
  "key3": "2WEuEZ1cAdAbxpMLn9TUzzrcYDqnE2JLr1pqyB1sVMUejFoJoyYeyCgZAzidQNqKVohnAWv3fURXcAZscqhs12y8",
  "key4": "5Uz7oRV8EuquzgqzCdJSbATgiya1qN51CbfqEkkg5Bt7ofFnaB5h631xBaGfYRgz3TYUEzdjZZs3yp2SrZR1yRgf",
  "key5": "2Thu5KRqXdcun7zeQY7hoskXYnW6xqWbQDh75QSmppGzC15rUFMU6o64pkrgWDDKo3gmHtGo14bLQu5XxTf4Pxg1",
  "key6": "4dZA1PvWffHFvdzCo21C8fVhZRaPnZFmnLAPXkQb6UFRsvpJpNv6nu45Uor9Xr8JCZdqjvtpSrcZPc2ynLzusjKK",
  "key7": "TXdpfgbycCbjojphEn9uZPwi9g194Ywvg2fkTceQQLNQhModLkmFQeviGzWr1BadUxKskadcDQHTZxFkkzXcZCU",
  "key8": "uBP6jV33C1iQxtm31ydXxHTk5MMRrdxJ9nUL67DLr186vg73Jsm9yPNEhzBDHZ1yWgxH7NR5eaeyESzjYTBD9M8",
  "key9": "3vkhX6vApATRXo95W4aUSis1ewwkJwtZXxPjieRaam13M8EUiVbUduebsbqLwwuJJfXvY2nGkH9Z6gAHrg9z2Cb2",
  "key10": "JzEhkHNiV9MQqL8QMRsLKG5ivhQJa8c4u2Ao4ZR5WdnEeyi1V3kEt5uxoN1ufCyP1cXXvhqWit77h6U2uMLiPxY",
  "key11": "3X9Q2KFbXhtNZBJbF2eNu3McCmFEasqsWajwzby9FdW2VixuBgHV2z7jo9mNG5bF8fJgX2VqVXY97spmBuJCsKTx",
  "key12": "3kwiMFFbiZMBkoW19B3NbhZ1Mp3KD5TzUZXfuYU347hyGvpFim8E4HfnCubP6ZooEARStcKxbaGR4hDB3pqJGuQo",
  "key13": "4czuRw3AhYFv7LDoofRgLu1z9vh5v7KB49chLhs5zcq8sYEDYxxbvosXiYsoKeeTRJ1tbgezJEkCM7bFtLT7p3GC",
  "key14": "4ng4Vd9r82JZbVHJjRynPUZzEs7XgNYbUByXA7tZYfmBbei97WsafPEwKC4SU1MqrTCNdY9Tepxqc3qZEfnPVD98",
  "key15": "3k18a3sDEG7o7MrxMCwM8USUPxr6gGtJnAcCyqv77tTMKcL3UrcUR7cSSUZ29vkUW1mXdwGZViHrBJQxdfYpDpZm",
  "key16": "4bM5wyWWQ3tG1Gb116bdpU9cS6FZHGqcfbtPLyAUhAB4eAMAUogTnrH1gW82apZm4jcb8hjjwuKSatBQMWWSjAET",
  "key17": "2w9b6ykzAMbp43cHcuRkAUWSRyTFwUPU5LJsyR9uimWXV2cdTapFmPZ7xsjF1NZfW8Wq1bJSg4a1oKMex2FnDR8Z",
  "key18": "HQysKcLGLm86HiDSp6JmLandRGyAthMvYiZjmwVaNX2MPJcFPcUY34RJuez8XvzeLJ8MKBdQUfnoG7dAzwZP2D9",
  "key19": "5yMgXTcuR5oGbdcKgvDHdptwgfF5xBHNycZChbtbqrGjNrq1dtxsSHp2AGNJfXmTkTsqxSMAL1k9tSs8SAy4hpPt",
  "key20": "Wd33Y1mFjexjKk5yr6SVvDUr6Gy7ZVvFAbFFXZyPj6vCCUEFfyoCSdn5KBkgyXD5mSZWLU4EdjsFpvgT1a6FJmj",
  "key21": "3MRKtm4KAJ12mnriJypvcuKRSFsESjUJ67GZvsJ5omA2NDRFURn9AFZM7tKoaSDyeRq5PFbnBCXZHLDdLjLWE62S",
  "key22": "3dgzJBangKxPKGFwscY9fr1RkHyby5gD8dP1KEyHJd9r9jQexvSPXZ6wTaLC4FuSUY9PaLRQjMxFreVNZnHeSr3H",
  "key23": "2f7VGZGumKYvCixZ6CVG8wvvAa3t8MkjyfnMsKsgLDErURygDYKT7n3y48ov2PNjukdgeMtevZUt55fcHbqpsnpg",
  "key24": "qVzHH9X8AnQCPDe3j62gNq7DNZRUq1tLveJgTyGh6tAAN5d8NTj4EEGgb5DB4N5c1cgaGq3hBGemQ1X7QoiSopc",
  "key25": "3kTUzMS7FJRmuPpkSjUg43NjuX9GR55MKWDtmLqKYEuiGPRSMMrDmJRKGFFGV6bumhNePUab2iz1uc7Nyxbdb1ao",
  "key26": "4QYnrdXHhA83bcZBKzLU9WapeHq9cQmwjrZtM1FNAXeWGSZz8hfa8acPZJGmVsMyXttgfLWWZhyJhih8DayRHgee",
  "key27": "3musaxEYFR4GzHE16v9XRUAhjNar3zNoECBxXKRRR8ktxpzXbQbmxftAJwjqF4jHuy7Za6rzZuvHCj5oPQRC5DMu",
  "key28": "ZxWQoN2gZP1NQBbJPnW6Sm87bkhcGostGoVHC4Dbq41MHvXMqRQixy1MrVqhYEigQPErip4a4jPKwAQYszVG67f",
  "key29": "9FuGocaKrU12URQ8fKmHpA85gNNZg3bVwTBXNCvRGYRi5eV9m8qT2AM6PvoeqAjrUXtEsqpXDPVFQCYk6B1Xo3Y",
  "key30": "5hyUWCdo1Ft72rgR2osihvtC7xazkKiMSfxRZXJzD45LHBdEkfxXz1QQUYsyc9VdmcpXXrx67sU4DnZ5YzbqDhwf",
  "key31": "2BS84dSiYG3YUhC2V8XqNURnrQfuNVDD8XoyV1cmf9BGNxiN684LLnwLtBVYn4jLuyx5PFZQSsb781MfY9krYwTE",
  "key32": "3oSfqtbGATzSs6gMdFqK3uisnJmizUGprdm7gCXyTyTUQ7WyBCnZvXdfVMdTwzkJ81tY4iPmj4pHnjsnzaB8xufX",
  "key33": "3zpcd1TaMLEVMiD3PYGGUL5EdKqJy9Y4rbEG4jDkATNdqXuXH91rAkRfax3TyRYGFPNakSUc5CBdnAQyP8ApEnBD",
  "key34": "2z6zwnyNivi1SYCG6Vef4vvd1H47SRdVenNXs3Cx2kp1k8cwDR1Wnkqs3uAfNhBDkx525cupsqzm3N2mnZH5Zupe",
  "key35": "36z2F1N4s3xxPbWC9zGt34EbGaq7NteSBFpPzrXbfP2kAzzADYh5s1irBUc6TzvnD4cyD3dX71zQsBcsyZZkpSfE",
  "key36": "4Jh7pd4nDpr5brcJeLV6azmdNXDm3F3eo48v4PfY7a2bucz87ykH6iJZwD7rNyNtEP7Qeg45JCdA3ES1TxPSyg72",
  "key37": "2z5SqMnnf2MvdUeD4BDbMmP4zKhF8FWqfDghbPctVYNm6rYbQaaw9W7g6Rd6pDcfoFo6VpR1CkCQ4Vx5eF9J4Gtu",
  "key38": "4TrzJSkbzWs8qPc38epRV3NvDgm3CztwX4morAUfVjDzzArEmavGXAexzvtDNRv3gudXqgHRd3mEmw4ChHPvDK8P",
  "key39": "2Y1eNR4HHwTgX8vpccimSzkHGzjUiRqyTPZwLQtWjArYD9ZccLqh11akWyuKxqAwJWmpPjWtoQL4rNUhTnxQYw4F",
  "key40": "3mVKGzEoW2WuBveQhCheLRyvQwLyqaHP2J89tphBbcdZShTxZ8uxwgGWxjomN1kd4ZByXMpp3UMVPY2WVDg8bz95",
  "key41": "2FZg3k9EosCMoqEarJykkoa6ZarEuv5Bs9rtjFCT2mn1GmqF7v8aegcJH7QVuJgEnstEZWc28DPggUPkhcnf9DbN"
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
