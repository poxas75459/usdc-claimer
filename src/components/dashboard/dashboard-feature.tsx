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
    "3XaJHLRgFV8Fb3VMp8RDDtD8zJhmbPgBy5UR36t54bGue1j4NB7ikDZwi9PWmTMDSe6bA8ZFMuVr94AJeupMnWEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JbKVwTcQCq1oka5GLkd4r8hXTqLsH3TALTBducidzjyn3JC9Z5hYQjPQ7SfJ9edv8EyZeEMGL3hj8aixVWoSpK",
  "key1": "mWgHwFCzbyfU5z5Z1vdhG6EmrnTRxYfMfhqGAmtmxuuAc6kvwjdZW9t933k6i61kMfeQDp9RawbgKMidQRQPnos",
  "key2": "3wDhdXZKp52WfQCrvuLurVtXXg7wJ9bdDdizGAg2CNvw7xKBQnBez1WsJNU831qeQRFyzd1mnzm4NccAX93emp4f",
  "key3": "RbhycwqtYgxUnLsFwaqD74vEB1aWm3VNz8GZxzPDVBvVf8zCKc3ZiTk22JnmbNPMt6MfrtkktC65fVAfhqLXFwp",
  "key4": "52WEshLfhLyVy8htbVXLGD6zfqbh3EhGXVVHufDgDU7z977AdfDJEX52WNJEHC89HzKqLpYFtLw7qeSLezDufUNw",
  "key5": "2QgkEAxuMAfVNcnBzCktSoYEiGQaoms9qKLL1Q3redfGRJyEd38N7wgYdQWLew5reFr1FuRiafRvu6ivJGnAaKoW",
  "key6": "5MbBqp6RgH8d9rU3KwDDXXPwD6APKqPieVrqEaUfiD8JeoZRdMWfQo5mVojtHEvn4gGEKcNYJ2djbJu1W9amihDe",
  "key7": "BkVF2AmDssQ5HeLU6mX8u423GVFJ7Ujcv61VMmCVpLqEcfHfryA75X6egoiuG1JNXKeby6iUTb3F8NDZvcHDhNy",
  "key8": "2SvaRocWh2RwyRpZENMZMykzWYzSTZycHCoqgWnQHYTUvxSEiSNvPvxNW3pwiKu3jp7hdLFoU5wXehoN6QypRrGi",
  "key9": "mm9LeNMqZhCpX4j4zLUUCvZZie4p42cxNxBdEBm36Pk65Jbp3qAE8PxWzhzGZPQy7pKJk1Mk4sjAiQhcrDY7sEU",
  "key10": "3nmS6gMNkjEeTyNV5t3ZiwE7iZhu5T61xXgYdJ3KgJa4KmECqqfjQtr1sRfTqsKZirNgkw3kVaMx2XG3foEcBeqZ",
  "key11": "5mJ6LeZpscHXA4Fy4KHKPRA54BgYYshU8SZqqya8ikkS3RoguRL4SSanx8S85A8w62jgDAt9T8hXJGfwCJJ1b25t",
  "key12": "5oXAnhy1ZHXT8Sf9UBVdk11ogSyDDDBY1pwoqDJqRCWhdKznmH14yAYvrs8KL5DyQtx8Ys4Bzuy7XLTAUezWtvcf",
  "key13": "2hk9Rr5oPm7ZLTCHcDDMPRA4uf8cRzhvPaoFjocXcP5kjWuPEosHoPvKkA9SmLeLexfQC2PPVMDkH3qNYYb7W5Hc",
  "key14": "4Sb3hv6mJQXVbPbDvoBz8fm2cdyW9dK9y4aHEj5MNoCJwT7Z8avnDMRzU8xf28u8BxvFpsVzjsAsoe9QnzZ3xtY9",
  "key15": "4kMRXjZ3zGHep4naRPfBg418zw2k3KTxfYPBSreX2fQmYZPcBvo2qSKxMZzKbhWZGyuNa65QZhbm72HZD2Wn3jHY",
  "key16": "23c5w2LyG4PoXpv4CvAc3iCiYBM4wetjkbupnpK4LV7L4M4BWXaPw7jKZeQxioFKX7pPdjeCH6ZdNxtc2X5N7MaH",
  "key17": "2vahjDF14CT8UBjezfcFAfDR4re8Stpc3aPRxngN8h2iDw7PvE5afR5qFHRrT9rzHyouojCKcBu3meVcULAQ5MxJ",
  "key18": "4d8PZ3eo6UYgMosQVm1PFc2B98adf175fsTspSD8h3RDTPU46v36PQCmGPyCEbxmVjnPnDjty5bvFNSN8qUc11mr",
  "key19": "4fXsrhH2AiAeJVL3YRbPZ4uec4ygNDwgMTXRe7eyVftaVzZJGaX4W41xD4QNkWWALDf3d1TghsqNQwZEdJyyMhSo",
  "key20": "5HD4V6nxFU42KaLJxS6CSpkG7sAoUhtp3ZLdDe1zEKwSq9KdpTqo84YdpGnpxEwCanooM3dho9uCYHNp2XBpTyUg",
  "key21": "3xA1ajUGU12ZcQVu1bcagNV5Vedu8crWtLoGdWG4xPtGtCpnZLDpmmobzTqL86Cf7p7WpMRdeEuKinAwVhdquCYq",
  "key22": "59FLcTrrSPYVoZWYSyL9xB7HwhhWzpq5xvt68oRzXCJFm4He79VhPcQJq8GTfzuf28J7gUmjX4j8MhSV6hsLkvPJ",
  "key23": "oybbrPNgkxyPPGK9jxMsDxnWVwAZ7sNcTTkBM1Jn4utCHPRMd5AcKskAv9ZVVzBxEj1TPgkXCzakdGvJ2bmuFre",
  "key24": "5KgE9Rh7M2kQMjDjgeWr7U5w2XqBYLCjbuuQ2X3LBwg8r9tmGXktywKViHmDDTvTmWSudMgQ9TTu9NJGdTYDq63N",
  "key25": "36bh5XDVZ1KT7c1tjbpvNqJvyhkiRhdU3CfxGEQ2o7MwL2Kdwt5r6QP8JvjGkWGyvXr3PaUJ5eKrraUAUPxZqtNV",
  "key26": "5mhRtNQLDqqm7zg4smC1TsobuCuXwpox6JUYUvSdisRMzuJNi5NeEvtSThnbWyeWfhvuEi4VveF63FJjsbA6ePue",
  "key27": "VTvuFpDGKMwbyErjXFkhq5TiauvdLVyrGhPYMtH4TdqP2Nx5uN3RZFTxW3B3TVVZ4Z6CdvZqvVp1rwmQnp32bCz",
  "key28": "vrsQWUFZxbmKGYQ55JXNWTeL9gQ3MmDT8qvH6c9nLS99V7NkDQWg6rrQaQMEBRcMegHXTCTijUUqBJeBFmXhsyQ",
  "key29": "5C8Paiq1mVeqbDZPu3Wvva7tEBbZYjcF4Xf38TcE5RCnnFVKZ21j98o5uVvLjadDpqF2BaWTktCjXxLmRrv5BVt2",
  "key30": "5Wqmfz4aM4SDbpDD15H9fiNsnFgacX4YigpwFKZfuAd6KxtHvp1QjjAQ41oupE78YfGDkFVCGDkt5wgu5pY7oAvp",
  "key31": "4x2PoePvRKhdNyfWP7wDq7FGB7BsK8u3yHi6NXieK8rF5ETWwW4BfZh45CFR9zN32fvwq5RfSUWwdzTcHKtNrjHh",
  "key32": "3ew87tpdqQw15HRXc95nMXEgBdm9EsXjzke4iqmxYsMDnNnvNykUp7e7tf7iZRyw9fkutFMLAw7xA7wEjNt63ijJ",
  "key33": "29xnaDa2xpvypyom3hxPSFbiKyFr5xM2yXvzstkAbhFZ5DiRb5dMosAQNsssxEt1qsyiji5m7xCzCfh78gqgYbB3",
  "key34": "4wur4jgbhCJ68G8ustJcRffagp6vMn7kh4ENAsjoWSCAGq7ZDfmcimbY7gDat2xzGaUJvAeMmhfpeLydw46tkg7W",
  "key35": "2oGgna8Hm6DRuEPB6evg7JW2NUJDTxDxQMaAwpRuWvSHit2Yxbjr2kQhFeghvuxpswb9RK1BrZGHmnsg8xGXvGoj",
  "key36": "3zsX3a1cC1AjUEpfiAfSfPwAwGnkuEBfw4XcYNYPJJYX7Ar9FJWDjnWA34VzxwRb8f9QoCNGQ35zuwaAvnBioig8",
  "key37": "36fixfce5oxRxqU3bnyursykrfDYCGYZbZ4hd4NvG5YaPmkp84pq9peynoL7FjezXh8Y8YnK5kCG2xr1xZrJLwWX",
  "key38": "SD2nvrMCntkfAbiADoPDoJn9P23aRpfpQS4FP7PJQcdAKi5uTikf9bjpvnFXTq5KnJFvJvVCFtcKADVBLKfpdcM",
  "key39": "2swrGnHZce9DfJR5hL2LDGoSmvopobUsvU3DRJUoFCogYAjfz2Ure8MyPCz8kmoHuWMen74in3dgdQG284rW4gui",
  "key40": "4XiZx4nitSkjuu2X8ypyypia3BzhfAsDR8i3o2DhDndyDJQXbN8CxHbmfZTNcjbmTQPxnuQoQCNShW4HCvLsV6XK",
  "key41": "657NzVXj1YE2sRS1NMgD8QZdikVRQN6iqHfRxmhhX3TtGZe7NqqiJosXcTuwQYMPNNVGkUPEtazakSj5bQYSXGDj",
  "key42": "4RY2RCHZcCNSegrVKXMmqtFeKtdhpm5nUioCRobuRCtzpcFUuz1AeTUAz2V9FLmk99JE9VyJgmmAgtQrxpracJrL",
  "key43": "3322ujEZcpFguZumj4yfNCcCY6QbeNH2GMxTKaZQtS5XQnM4c8GtMJYhAb2MJVXLrDSA59iRwS65CAGhp28Y4aHf",
  "key44": "289mi3SRaBmtRW8BT9LoZ3UgAJ5HVZtd4sd6SZsLoxGudou46vWRWGSzKXQvPUTeZBwAor9Aaf5fBxeLGpv317mk",
  "key45": "wRwJa95EGmQcS4UKN36rZU5tt4e19smrHcKnE8T6J5UbXEQPbfDAivabcAvoG8kogxmYTkvG4LXTpxeWuisrcrX",
  "key46": "3yV1zKgGR12ZG4hzjUMWfZkEJmRhXzKMJ3zhwudNE8p8yd7decL2AVPoJTesJ5Z4fyS8nnCUiLSk7mHcbM5ifpiD",
  "key47": "23tAXUp9pm9g31VJzGsuwzzbk5GmK1Seh5Hgu9S8upeFiwLhgJndzxYSJUwsmGsGThnnme9cn3uX77LbLkmp24Vv"
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
