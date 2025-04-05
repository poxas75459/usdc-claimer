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
    "3A748W2bepcnoAqGgzipyH2Trda1waiwbQru54BTj226VMYHrzwegZEHfuETvtaD5Ye6B4yRWFc9d3D2CG7krA2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSDUgWim6EugVvGQycpciM7MistHs64PZB4x8GvQA4MzyBmihqf9ji6Vbiv61djfD4gB1KBeXUXvNiWVYf6GTtC",
  "key1": "3AE8Wez9SqdiRYWit1WXbQyj7Bm9h3TriYmVrEcuonqf2w1Vu1WKSkucvh4QBjswwk4P4bqKodpNU9TxTMYCbZYb",
  "key2": "4hK5bwtz4GKyZkqD4wXpBgF5GVMarY4fHyYxLFshkZKEPoPwZ2GL2yZSjyrK7LsgC8MiXVMEuK4h9Vbnc6AgvB2H",
  "key3": "5WZa8pHBrWLY7M1aGWTNR71GrxaMQWGEr1mbTpSSbuiszUABtB87p9h7SD4PLPziKs2ZmsTmVfoMohYWix5Uhvcf",
  "key4": "Nn81JC1e9Kwjzx4rsW1rvB5omSAenN2T9xkArHfNySU4eawV6BqHqCs6NDmKm4jzCjXiNzsjYyNqSucd1xt5RGN",
  "key5": "4CKQfFQ5MLeNkyqW4XYAUZyGmfBaR3xYZ7WyfjzsdiaCKBvjcLZi9mSpncfxwr4K3RcPRmnYUqkvgU5nQ1pNdWhB",
  "key6": "3o7Wh6e89DagZTteUXmVTfLCcsR6Axsy5ZMTvKEwbBG7yEniw2x819V7K6XQGUxtepDuxP3pFTk1q8uZn58wYaiN",
  "key7": "P7k7zcLa7M5Bqs8tmzQb9otzQfqaASGCUGHKpio7PbRBPaq2vqdgZSg2s8PWpBDxc6vkU85wJCQsJxEaDPVnsPi",
  "key8": "2RhFtC54qom4t2nFaYKvdHLoSXLcNfF3sujFRt68DGWGwATVY9u22SuyhXxxfhPx6iMGXNTtNXTYEmVBzg9LXFNz",
  "key9": "4WFdGNtGour45yJEU8recptackoBHUMCpeDcHBZT6E6Xf5TnM4gynhBBHxjwrYGmZcnpUdyExLFrjiP2mYa7HqGM",
  "key10": "3WicgkGCGVz9cu8CAqLifhXsHTJrH5R4tc7x9uG4UU4kbAGUnjGF5vmtfWzrLReKBRceB7HMjYvzwhza6EEj2nNd",
  "key11": "5AUYstdWVoM3h1b7zRARiWF3TJrAHunr922havh9Jo1RkNGQP4LXudUkG6yigC5HH2xnTRC2rMco24uB3pjJmUJq",
  "key12": "2Z1SpTBRDWRZNAvsM6fDFrGc6vTjfGobc1SwwTUchz1PbupyFYgdYbyQwEVp15Uysbzou8x2UjMT21TomdyimL5K",
  "key13": "2UpNTtWFLDTYkKUrsR2mTKF5aNEuwKTtJtq4C3ydNLcUhKv19QG5zzMouKivS8KsQVNTucxQ77XKzNpuZx9j5kBa",
  "key14": "4YYbTATHUjSNoHq5y79RCGT7L8CnYCqBZ7dYG9QmvfGWkk9kxyQcXvNjm5aibHQL8M5eXHhxCPodS5LH2i8J75TH",
  "key15": "37V5g55ycX3PqxjtKFMeekcdpfcAKUtagz6BqtbJzUgmsn8KXpQivPXrNgCS7T9stmqG7xpJor2viRssfXuD1Zz8",
  "key16": "5jEm1oUj1tbeCq3oNrJdZsR2QtxAd2bupcFxNZYa8EjiddzZqdBPJ5XVK5KE6N8JS343hARPhJaVTZp2cpiDTPGH",
  "key17": "2BLvXZyh58gFNjVT6upHHyRPSnAemA1ac1oJVQ5gDuFKLscYE29PodKrKJ1iobp7T72AMzMRmzgJPERz9fcHtM3o",
  "key18": "2tceRx5cg53vAKobJzq2iGvnaKgMYZwJxGbzuRvnqSYyETCGhtf7D1J6FVZMioHRUa5g47EJ722tdennj2RgKUXG",
  "key19": "2kySbEaak3iAnghAZHwtvb66ts79xXSF1Y23kuQanBcchTNt3iSBNT5RFPEvBymusdUueFMpFpNbBxHusa23PhaK",
  "key20": "5VWKtFeDQNrZwvmqHCyrLwTWfMhcrH1zyAoKLEjef2LREzBwdTCqFihh9Ye8aTUZrTVrdcUqRqUCVJ47XoP6df3J",
  "key21": "51127uAqg6CbwLxEmERcFG7BMmuoqJkUZymGmR8zv1Lr11QVFdRdCVywbC9nrNLhz4WzAo7WdgKktiZ6ojP9FZSK",
  "key22": "4kNaN3po5zUbctMW9mQ61j8CJxKJbJ6NmeBU22jzrRBhdmGrAba6edbpUVNxd5P6XvcdqS7KzZj7Lu8zDPHebxGB",
  "key23": "4QzexNZ9EoPaGs83cj5shFFBhQPpzcXpPjYDodtsrGcsxHHwSARsyuShCzy2qPnv9B91d8AXTW4RzUtCkMVystMP",
  "key24": "XTA5kpJwgBL6QGs93ceba5yzQnJ6jf1y7sNyNv61gVbjV9S1rcTCGNia1myzfKYiWMc6o8fBbPvJYhgvWD65ed5",
  "key25": "3h2Fct6EdZP6duPapwgkib6F7fHYnTEFq7NvMyBeBA9YphEBFhR3K5AdgbRvxC2z98G63WeCiH7Cb8746xAmruD9",
  "key26": "4gyEo5HiQPiZ2vtvziwp758aEFbN488Lh5iJw3XAHMa1UMLHmvMq6mcdTfndZFA1xEj7WPm6Hwjhvq8u9bnwSUbA",
  "key27": "2H3nc8K8qBE8D3U3dLS8n8ij1hqh9TTDp96LjaEkkq8h1vAEPoCVPwpYXLQes3zwN2GxfRKn3Pe6D2J7hqCc7Wau",
  "key28": "5YRvwsw1C7XMGRUd2Akuoynk79zfG9oegDSKk2EgdRpGRwfRTi5ue6bkEZqARusLFGgyRoXns9Jia9UdRWgLN4jo",
  "key29": "5gdpjcmjrL3NSpBphm7ejFy6vmq8pCi3FCaY3UFwSd36eywSGGRc8uAwRSWoDEjfScJXVZbvnDGj3Uyy8jG6QT4n",
  "key30": "4tpQfejEgbEwb5jzEYAD9FS2pzbdgZYMjVX3vt1mafCEGkDzBPG1g6YMjUPHGggxiDj8RkpdNgbbUfrXpzx2SFTf",
  "key31": "4TXAhio7kbxAWFkuh7Z4qBMZkVr9ig1osjXy3gZpugAkpSXV1iPCt4zK7s45g1JUZcqqGk9fw5PLS8aCuTCmbhPr",
  "key32": "2VDnTLUAYVz7DKGoS1Qz5t9moT2YiHC5bKFkZP5yfNKoJEHcjBFMMmj35wmjJt9mm1Y8i2rTP23A3e7NLjcF2FpS",
  "key33": "Jbvi9aeXTKwLhjwPiDWCNXZpjUzkZGbxHx3aEC5i4m1Zj31EihUee64xProJN7McANaHYDDP9yYzUZhtrczAL75",
  "key34": "3Av3Aq9Bx8cJRK27xGpezNThaqNrhRawx6PtS7Zd923jNyxgJvZwsJ6JCVdiD6ssbAvhYJWFRpvRiV9FhHd25qEN",
  "key35": "ZoTGSALfDs9AVpGUcoacBt9vjwCM2myBsgjoe1vVf78rhWcsZnxq8HpJj4BrSYma6cGc5Bi6SUi4xrFEdCAi4st",
  "key36": "3qPwDFLqammRdDCisPa2QisXiNQQaAQHbpp29GWNRTSRi6Qi6gEQTxbMhjKpPsT6aoTBeH1gpLAchZDdM9LkDxHG",
  "key37": "Ta8vzpCCcu4WMPxEpEZ2DfavddADHo9FgFQAoYDDaPDXgUkNSkAeDuPQWTQznHn8erhsqFcFBxPH2zPaTpVHen3",
  "key38": "9rtdTobazawPFSZ6xgkby6vYV2gevuvVqQRiR9MBqMSVr4acT1QEb5jYxv2xR9pHaKKhNJp31E5q6Yph9JUXzSo",
  "key39": "2gP5TcN1XaS6DtddCF9pBxnwpZ1yUBzmUr6XAPQLvBFuqHDJCCYWXh2erBYMipaXeP2kRidsBm8G6nUNgxXW8ST7",
  "key40": "4P23DZtsavt4gkP24j3ctDyuWVbQAhN4NG2QT8HrwP8uobMqE1iPDL6x9WDhzCuyPC6tN77DUY2Kczz2fyuHcs1i",
  "key41": "23QJ15aoonCL6gXNgx2t1G8jK7yRKwJArxgEmSGSGfR4GTfyXyg7qzFEb7TpGtfwcTW6VV18zRqKkQQ3Fg31ZCh2",
  "key42": "2ryeAQ8QLEfz131HyoMeguQk5sz1uNSAdGLdZUUr7WW9RQQHygeaKi4qJdYqqFYrUqnmETCx1V1jom8EfYGG5jwP",
  "key43": "5GkWEwmxbXuQoM3JA96TrKxYv84uZqV72XgGL86tBxxUSVJ6JRCi178Ln69jCX59n7tutm21oWWXxtxHUniN3tbn",
  "key44": "3BXeqmE3ib13Cct8N4pGnufTnWfPkVsJGJpRqYfpfXgS7Q7aUYWGC1XL7QCca7HNYKTJ5vFvQaZ9zxbaA1ViS94"
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
