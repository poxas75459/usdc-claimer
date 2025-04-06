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
    "DD6PLbhCqHQSKHRnftH98oWyu6mSNvvgjLwvQBbsgxRheG6L8dvErfKt8JcJQ7qCqxpj582vXygRXNpK38k2hQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzrndF132iEEctUzX6EshK9astq4snXYA12a1ekbeb8RJoXWmbHNH4H7DwEe7j8pd9XDG6H17PCSWqAcTjGRoE",
  "key1": "4TokgWkzqxTRu6ckHYdbUr4zwsv3dNz6K1WFjP9fyNd2eh9rFr9Hi97BSncdFDptc9uUk43XJ2wRvWvNSZsc2Jmi",
  "key2": "3hLpcBcVhWUy1JyVNLr4JR5QuCYiVEC7awD7CKHEAZwzmMV1KZi71forQojJQXbn7rmXyy3E5QM46uAX6wzvmUqm",
  "key3": "ZsPnC4NhU2he3ba9oJpyVHF7FdADmSfTupTYUVPexQSkexDgDf69dZihAgmQ2J3EB6NfM4vJQ3dbH2j9Dq3ufwF",
  "key4": "63eYnjexdzwZFXFSn36RVAGkAeg95n3HaFxExGP4dPZftyfexN9Q6RXaLbQFFXMBwpnk5Air9XZVmbzQuBXSr9TN",
  "key5": "22Kjzz4HyDMnSkLNuYxSYqnhC71fb2HwkgkGepE4tkNCSRAZHA1Bsv5RLLWV8b35QJEj2gGeebKBdF69DmV5WLGn",
  "key6": "3TXY8R26LTyU3naiCHXi3bFbebk3KkdtLfwGHnp92c8KHemK1LUKuNE28NmWFyo6Bvc4xSTgSjKDUwWmgqhfQiKY",
  "key7": "ghVQZethpubXyke1HiUizBwyRcV43nZJZxMUV7bsXzrqjdZ4kkDZFFUQJ7bdFskMto6BHx6dcCHRvcKnNwRiiQy",
  "key8": "3rdsuV3bQ4X5xtAV9cFbZX1Zc4zGrx3qkYLzoYvegAk6zdUcf2hpbZJC7reUbdwGLR6VEbARU91YVmtBftnd7fhX",
  "key9": "4sq4Bts4pUsNCpatWucQWS2ZmtNxsJmoRkyb4ASSNNyzcdY8qbFQcN12tcR6kozor2joUuvKXQPjnYA4uZEAouJp",
  "key10": "4njAs62H2dzi5BY2k2CVDdyy5NxFhJqA1m6FgGmHqEPKEYFcKGUZZh22fmoxzraJDDYUdvUt7eqSnixWs98es1Yc",
  "key11": "A16Jyq1nKsWsb97nWbJu9VmCNtAHZBW18iVHg63uagZWTGzGSEa1ExBxxddiMJfAKjmDtgpnnviqA3GLvkPpHE7",
  "key12": "5152NnbQBdYuzMTt15545LtD9noBu5Q7jSfakRqAtpeyVfn8CoS8uC8nUAKAKmP89XwpXjbC3ExA45hJWThdwYEp",
  "key13": "5QPF51xfeP7J9AbgTbMWU18JedAuEAMUijfBfavdxdHmXWUXQwKhy4ZC3GmvxjYGDTkBjccg8NM1h7Y1nMjzDg2J",
  "key14": "3KaB6VNuMAn4RRbwDaZCfckUKaT7JgEdCevTcDgAyinZfpmn9qGDy1TkyNHdntTranXWpTfJqnhMvJ5RvovDZBPo",
  "key15": "YSFmewVncjWDLika4AaG9PZpT62bhkaZxM8xopX59b5CY577CMNAmk338GBbiTwBeoKKEYMNz5qLrMgim8zQEVy",
  "key16": "47RiUPbfhPsjw6XVdG8vNr31kAHnKwzCP7ejk6zkTaupv8ZHJL8Chy47wWPmmgoqzTBp7QDewUAhohH9yjD6nkUF",
  "key17": "2DzMLjKZHq6XGUiUr1LRr3fx7FiLdsfJEaNmqtVLUQ4mrS5zRKT3EhWnhW9uvHAseMbDnMapuAdkieioBgmCC9SX",
  "key18": "4yTaW6xWBLRZ8GnKKggNaWFF3iU2MReq3gvPnEVb5YMm8JVh4U2Y4swWNogDGpUnpv6nc4vwqaBHXPyYTJ5uVELb",
  "key19": "66tQfE2pNaAVLVPPHqs969Wx7poehpPU9tgb26Ke2yFYruTUgk5jUbdQPnMmZKjMryKBGdRUuX3NjeXBMa22CHwc",
  "key20": "2gqDrFPZmCPZ1NxitvLYB4YD68wpsKPEcE6bR8gko5PZEVbqTzT9iWyTw6r9RH6GuMSFBZ9TLY6ywRAZ2aG79XGL",
  "key21": "51pU4eoRYAuJ6SuDTpDuW6X5ugCutnzEzEfPqfAZZw8wkT6rfhyxBX426E7H8dFJD7BPXYSkXgerLfmjTcAvLjyV",
  "key22": "63E7fxPeFNXZ3BXEAwojvqdpLx5vpJJnDKTFTT2RyLYS3pjs5hfLn1kVbiS9cpP3EJ4Kf3p3511vGRjkDmnwTJy4",
  "key23": "5eadqjFzVD9hRYCSjGkMyLPWa3uW8m2xWAaeYnCHK48ZbCBaTj25SST9aJwvesey1c3hqKU7JeLSHwD4RWyZzfD7",
  "key24": "Ycgg5xqBoQoJdviH1mLoy1fiyp9Tkscv3om2Aa1UUmQ6amJ4M4L2BMe2rpYX2m9rHCipLPwWBgyyw9m3kQe8FYg",
  "key25": "5Zzd9TV6Az1U17HwbwG3i9yxbNhMToYzQAeujZLNehjMwyMriysgJpFkrkSmM1x8y3spEm1KewboP4UG8BDZ1L2o",
  "key26": "5DViZrmw3ehvS4fcQKpTWTpSVLNh2upVcvQe5muakh6GxCxDg7pgMqd2ygR6poMtaEnkQr4JvLi4CdJ4knAnqsyU",
  "key27": "5YzQyxxrXtrfXNcAvCqN5uQbCwHqyKTVxiCXEqpoDvDG87V63vT6pwYDDgFp9sS8yMzVnwdsMnehJWdoiuAuN2Bu",
  "key28": "5B5Qj3UzqLiQTZH1jfesdCjbLvzXLEJUp8aDuhAiM5VpaPhwLfNvZfTpKvefhM5Sk59rxyubJDmoUgPFb8jF27vG",
  "key29": "33riLFWSKKE1LrANXMgF2BT8RJkxfco8rTYWnuQjKxz6DtcApthZH2UHxkVeN5bLuADj9h4msF9UXVdP5KmJkoAt",
  "key30": "2sNUBo6fjvr9H5XncHTNeMzjf1UYaVHaEbtQLFiy5NstpwZun5UhKpyDL9D45PRYRUdwFd657721r6JUh7KySDZf",
  "key31": "4udvU4WsLfxzofojEnWEsTETSmGczMYvXvPrbmf5xpPAS5YjRmQ65ZG5e1e87vPtb3jRn4U1rG9F4aG7NEUSNE8S",
  "key32": "65LfUC3avWFC7RywGVAsi3mFVQnUrpRminzwRSRxiuihKntZwd9fBg98CH7g8XBuJTma3inxh1TnifWQocYW2RPs",
  "key33": "3DaHf192drQoMmYcqH8KnCoYtmtKcKaeaq3gyuTizKjtCuWYGa2UcYcVE7mCmYjaDDNcApxYEeVsupCFik1s28j",
  "key34": "3nytWBNnnBsB4U6KjhxCxbKMbsYcR9qAwsYDgXtrhaMLcLJxBnG7pL46goRQpMV6RaHrUj75wmgPbmLBf5TViSir",
  "key35": "4XPfWNw9UZUcPnLBoinfPuUQsAeJK6StURHcE3dj1kk4MCvrgE9wYWQznTwkggJE65Gqh95QtBbGAndkaRs8niMc"
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
