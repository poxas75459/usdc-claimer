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
    "355HRkk4JstBRr3qi6cnMSSBF8R1bqvNRPcWbTvKxbTcrwuHomEmC9Ny7ReJowiXq2mxzyjUXDfF7q9g2K8ADZHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ycn6BQYxB2VyJRMFbvxAGXSe3Cgit6ZVrYJDYXjA6AgiY4cwsGRA8CvftftAy321ZHm2nhqW3uJYi4gT4zPEHAd",
  "key1": "2V7929EYkiJiwWHjC2deQbYFB58iCPTLjVQjKrre6BpMK6d6Xd5L8AbPLxTbefjNqTVZGP8zwwmmHwUAcbWkuPSp",
  "key2": "NBwrDdJ8xaYVWSeqVKyovf2ZaxTpiY429vA3wYBBAxMntTrVrPjmYJAj3UGN6q6WuzVQDHxtprvgvkxMv5PCuGr",
  "key3": "24w4raXrJHUQbpvDRYfjtwjhm7npAeSvKNuo1TaKdXc2w9oEpywi9ttaS9A8GuCJQNECxfDZVaC9fxh7x1jdFWJ4",
  "key4": "2qmkvdkXTQqsV16Fmg7ZYwJRepWvfbfNfwhX11XYq9H67RPD5KaWGw2FtjVBUqhQdtBtTKubnWL3XyapnnHExeSx",
  "key5": "4FJorUbuFNb4pfMUXhzmUUryikCkdjHngtffjKGBLh7tSiHXPHaykEjy5ZAGQjVGif5ioVE12HJZmD53U2AQUZAQ",
  "key6": "5o2j7HUs7TQY2UM5nELpNn8QrYmbPPkXXXrZeTkHR8VaugtkHvTxPPFpr19nzfcQDgYMRed8qTRDKumpzFjc8m7m",
  "key7": "4Urjuha6NiHQfxuhEahicfyiY4ZSiZTGNwJiUh8wPM26qqMCQNhQMVTagQXtf8VuC3iv9FaH7fd7a5HXhixnaTUE",
  "key8": "61Jeq1Ke7PLWvHHFUcunh9AmKkbxVxt3j8HsRapdcTJp6yna8XqE5X8JXsP93A97g5U8Zm8SdAY3iB6UTV8gZWL7",
  "key9": "2Z32FcsdZAqY8UYggx25GLvoLVnU9vS4YKH3x7oEcjo8XvQWGErAQjMeJihuKg9Af8ewHYMeopAdzxPRRjbLEtbQ",
  "key10": "2eUUYywZbQ5vhyApMP3TQCztm7DfECYd1nuQL3DQd9ezhUddg2kh5SkWspj4eUTU6kmPH5VwJGv6rHu8PhSmZVCf",
  "key11": "2qkguhsuUJgQmLSFzQT8V2kiok57kMbQK3QPQ4GopjFETYMbFuFZk9YPvWfn5CLJmnjKkqzDE1fZ6vjEQEFFXWcL",
  "key12": "21T5Ws8LqFxVhzkSiBRFkSVUX3S9gm2GS2J6o2wa49ZtcDEqzLtt1dTNkvuvjYkz3qECa7QtkRjSBzKBsbkAUcEZ",
  "key13": "3kC4N6EXrmDhCoZMAvZ8CCfVoUMgLc6TwreeYiBNnmnpfmuU14v3KbVDaNYKsyBahhT8HJ4bbGc644ZvAyFGE6Gw",
  "key14": "31cys2cLcAbmowpqFtQkrB8KDLQXJHk2G5F4Ej5MCMjvuBEpaegMF9cnh2y1DSyWiVvLDQtvEqTErPiQSnpwMXqm",
  "key15": "5stFGqcLY1RnGRFVERhGzbPkTd99oM8bFKa2dWkZv3dtiQGuWALAVNMSTgFxKfoUyWneUid25gZ98tAF925XTDDD",
  "key16": "3p34UN2LJDnehGSJgzLAAPXy2jyqzK1msgD3eN4KSZTg25CF5uNzLS9PLm5t755hPe3FU3DbfKbBdQUSJi8FB7m7",
  "key17": "5uPSj4BJPi9j8GaNJid4f9MH9KLMABTETVEtxEkCHug631UEWBGyCWpZAcuXGRduBektGXPcSHY74GFeADWScmXY",
  "key18": "3R8a79tvo6XDr81B68LkqnvBEfNGiukfGYDa9f7R87rJwAA4vP4EawTbApDT3Lvzgujm3z8goiwEJn5MNouJCYCA",
  "key19": "2VXReJy1xSsuWN5mGSyPfszqkfh6pveaYGQdY2zviWPWFt7dP6odLHmETBJct8uppRwR9eoagqRhrAiBBZwWVgw",
  "key20": "4M82NSN9EU668kYut36QLbuYcaGCFfukUAC8jg253fhBzvDARCQfg8KW2envvDGeXQfuWTJzT3Z1r2VqHBnHR9Ly",
  "key21": "4kK5WLTtXotE81yneqVXbgNUjx9PP3nv53o9BF6C23P9VcYuuiSap4sBcbAfbxcpJfMgmDZ5eHTRn9E5py36qCEb",
  "key22": "3cQmcSksoYX5gkVi9y3R4MTHHggUH9c5s2pv4o5qxbgBKt91bVoUXbp6DZ9BVRCbTDCgoHr7uAZ8Vdb1okkCBvzW",
  "key23": "2rRsYMT83fd17EEDxM5EC6K3Rae54EYH1hmcSQHgzNQ9micnr9TBnXrsq6qvUHKGpMVuv7mT8jUjWtSBsYSoZqfj",
  "key24": "4cCqQAweiRmhFbj5pJzC9kGBtHgxL2vnpbqe49QDeamSq79W4RPRYNDFgBPk9XAZWZesci2nsbfqtJyAP2dHAMxM",
  "key25": "4o7yxm4SuGbuvsVb22mSohYt6eQjfGb8bXc4vc3eH6K1DeGCUBmXbkydVqW7NrSkDbhNwfyqec7tVJVxXp6gNb1x",
  "key26": "2D8StaU3VJV8MKJJmtzzSaRm3hNkxnzj7uoBWp9a6nJw3JnpbFmwB2yU2x9ZFQPAVTRqwcPCxQejKueDt2E8CyP9",
  "key27": "2MgtSkU2yDoRfMpqxfiwHrQHCiRcurMXALsqqhx9kx6Lu6via8QELi4P8LddA79gPh5tXizad5XMNFKwDQLgjk6P",
  "key28": "53U6p31r4BKtegSsYYP5KMR36Dwkojj8kWb7ZZjWUivGPV9bAqRPb8NeN5smg2AbWHL9XeTaA7uXgyJt6Vo9rhFa",
  "key29": "2YGW84c5Y8J7Rzprw9WALBJjRVxLnd5G1tRaxSN8G426Yqeco1zfcWjPJQQjvHigc6eQVHZApwqAHJgDnKfVCSSt",
  "key30": "3cEKUUPEdvr3oqVkoCRnqefr8SJHGzc2oNd4yjurqPrMKxMzWXYfNU92TxBC2mbUeZHVq2pb7PUMzuUQxhXVAZz5",
  "key31": "2cz3Dsyh5JnPFUa8qfbX6cvF2CsgyoWWpG6QiVodvGuZPgWALZ18R4nwC8eMiADCbWj4bwCdjCn5TYUhTUFp2rLu",
  "key32": "2B2fGapwSsrhbrUdCQ1cdmU8HjuzZZE86KnF2ec59sPVgmaG35jqw3f2PF2NA1HUGHge3Y5rFVUP3UUgcEca1vfK",
  "key33": "5RBfoV5FxBGu5RZHujywNxj6RBnFKRn2p8tSgQ3SJGjXEPtqTieQBAUHZ4w66xcbT6UtvvrP1niBF2AAcTz83tDw",
  "key34": "64D3j2r8qyNZhezrNSkENCbjm6ceHbuJCQkVn6a9niCvDfbrnCHQ8QVjmjhs4GxF5vXPxgq1woTwYBGJMnZS626w",
  "key35": "65K7J3Dnzu3R1L2h9rJPreXT3TWJAfxaw9hMiZZuo84kLUXqMHRyoPRJiMbwqZAaHzSvYX4yQMG3A83rnpPK9WAm",
  "key36": "254PRiVoarcxx9vKo19mEkyCNZ2JSVNQR2QoL3tpiRmasuyjcqKfJ9zEpLaLohNxTqY4yyESXZMW35HEkTacvFRx",
  "key37": "62D1FzepJvT3Av1UsxwMDN9ZweqZbYqbuAM19Vp4T6o8jecdn9KfFdG62pKSQNEQXSntrRfjeVWUL8RF2E3Up6t6",
  "key38": "5v4erm94yGgMdHqcqz8ND6voLBPvDa6oukEE9DFyyuVGePP3zr6ChX8obaQLwyoLDgd95WWMoPHqKJ6G9RYyX9Mn",
  "key39": "cFsFKBeZL7M1Q8nhPZo4FEvQukVYSAympdEbfA988Yj7QA5uCyW2dkUCodwd3QgCAiDb4Q8Dh9cvT14Z6bSo8nq",
  "key40": "386iUe8rYHWY5fPewGwiyeXQo8qMSdXWQgrEPT2pZnrSr3i68j56zkTzBqrt23yi6XRxuUYgzF5ypJ4qvKGqsLyd",
  "key41": "3Djr7ULFeF44WqEt8dk4Z3ZJvkeEnQUH8nixmSskzKr5dvTkzQiZvRLNyso23nATjpe1t5VEVh7C48ShAP1XfBtQ",
  "key42": "52n33vWLJokM7Kgn63wPFdAcLvXf9k9Xa8MVqwecQvQbUFqMvcp7Y5mKAQh5tsQSQQBUj12FyukaRPsbayJQHR42",
  "key43": "47AjQyTWhVFaJsNwvLtMJHpqkwq6ivbtAmTxStv8ZkaDFmfrcwjJWyH6Les2fBMoQB9VqWrGj4onJNPaCYmuYYg6",
  "key44": "2K6D8UNz9SZMP8arGHimGgi1ZVGMk8AEkkj6L6aC432uswgtD9z9BPz3Zhu8GHpNMijV1NAn5jF5r5BjjQfmbwu3",
  "key45": "45Z2PsHQHUi57NSiL4gDgw45M4NVnDSBzb7Dk1X7v4iknxjpFr9unTjCXyJ53WZD6iteacw4QRFoqmSARxX16yvP",
  "key46": "2ZmLM5sPRJhwmjNBj98MhQ4toQZUmqPvykMFWFD1YKPGsQmFunuTxxsctkEerUpAUgN9TzDu1RVgFpPQYi4yVtwd",
  "key47": "4zunNLirvN2ArCY3vghNRgsemY5ECgwby54fb8Uv4MSWBgaNkXnSNFsd4yMrUFF8c1wvxYXxSJusA6Pb2NPZeraG",
  "key48": "3vJPtJMiVet7j218LxSL1Vw2ai2589pHT4rwaN1BvzH3ig4Juupx8UnhF3zisN37B1R1kwbGrJcLsQhruhFHazYg",
  "key49": "3WmFWPiPtigkVKaWp2ya3VrRM22c9MZDAVgXsvTKTEYAbT3wKGfFJtKAVMKSWyZBLGJE73wnwAM1bMpBDGFyYPBQ"
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
