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
    "QvmdAznEN7n84saCzNjEhQeMQ8QMpmsTDE8xZ4HFP4h59UAisor7wATF3XHE5e6G2tvCLTVEqRJYipCoDb113WU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEcDt9j3wUombghpBbpV8pG4tuC9wQxtUMtPjpXurknTieByYpQww92Zfhu6Qiyo1PiPU6Q4UZTZCtsGFsAzVMi",
  "key1": "aYknU2tB4D8UJsWqZttoUb9T9m1GzothiQRYmoByXuTUYhJTYFT9FvN7kSY3jCsiaQwDBFoQ4S1XDnAWzWXMZWA",
  "key2": "2Y51oijGidGFVpPXvSj1NUBge8a6cSh9LBHnPHzkZcgEH4RudnPTxsSnzZQaCTVpocMsroVCKpGbGeRdPZJQbXKB",
  "key3": "5RX5rwghFeep3WrWxfzaNSm8D2V9c75aUXRNkHy1qNqPhnGQof44nz12kpHD7ZY3dkgyx9RLa9qRR1kHfxp2fosE",
  "key4": "2QqSW1smSWMoThTQrKBk8wbhCjGVUaMgu6gmgTrh8zM83Wa4BC4ycxRWauqpRMxhTs8gjoXq3BF9tW6TDSdY88bu",
  "key5": "2UnARznpwwss4nQVzYjTfEF1EwgrzWHHNfRzhvt2oJnjA7qeEknCATdaHNFUi1tMBbFmhW1PArYwm7Nc2JmTQSQx",
  "key6": "3k1A8kv4fdzzpkCdWGsrAkpxZQSZPawzF6hZBRCRX89achQNR4r3ttRdJzz3bTAVmzN2gkCdpTbK1Cw7x6qkJa28",
  "key7": "4rkE6FBr7FZci8CNYb3veUQDq9ZWMXEUskk9rwqpRcvJgatYoFU3DvZwkznxPkFoH2nVxBFWDZiNZagugU4Chik3",
  "key8": "5CyqFsy89wWzacuDhTik18bWAZCqfmREBjPdsv2FqQYDKZv5wscHuryWXw815ci5foixGUgpJ9UysRmymnAYXsJu",
  "key9": "383rsthpmz22eq35PeeNNgfkryBKY5H14TKVbmhW3GbTxdAzkEQN8SPZGTa9hCcDa177dNMHFXwpD4W49XgxEP5p",
  "key10": "55Mc8v5r7eTdZAjWX68uA3TsWtyfAnhRiqU98rxcUVJe7W7pSkCmbbLzLYKDL1ARV1974jYdVpF1PA3eFGx4Pq7Q",
  "key11": "bA1G1rVLNRvKdUNzxCPE9u1RRQNLSGwS3Ftu7a15zqi3hf83o5XUeitknrKHeGrr95HDMPSQMVBxm17vaoXUqNo",
  "key12": "2r1yTb89XLz2oiC5jUViRm4tXd4f2qQ7My6kW4WjZXvbLjGPJNRmDeo8yVREKKR5uhiXsM3CJjzb1BsxsQrioLHu",
  "key13": "5AKw9qCFSD5QdPW4TG7o2CDwhDHZ35yQaKer2DR677mEKLw8nbiyDqTJGncU9eWcREyfT2Qf8ExKvggYMypkeeUM",
  "key14": "5PiDypYhZRYrAUT2ocBzHyWTUej39areDEjGgBPxriAZNpPZBMXTceq9buCpWWTaVCXsJPe37vNBWds75DpP8tsW",
  "key15": "51grcB5HXJwGABdsLmc5BVCcihMsdP9jXUxsSBQ2ABX3d1q1dDhy6mk1pnkuYyGPb5k1PAWj9wu6bkJpyvRkZdCT",
  "key16": "2hoeS2LQqXe1byQhcjgpj4H8wfEKcyUYS4MkSRuwnjMoPCjijtSEZNeidhvFyHoXwktdnVBR3EiNzu4SftMgGk5J",
  "key17": "3LRMT6y6qME2CEezmmqodeFAvac25AMRkKVraZHM5K2u5Li81Mkbe2yHSPZWkyACfa6ZAJxnrDEFzai1yBgdzir6",
  "key18": "fV5yjCoBtRdLSw4Yt5jxCF8kzx3tAaBp1thMpF6GwBtjp6GfqeGypriYiThYVHHU1AtwykjehaKFtsSDjRdtaJa",
  "key19": "2koyK4hrzSKj8aKqZJfEboimUV3eSTruz2kNQWF8bRrS1dk8os2CgFcmspszAKiec1VmhZVoPRD8Wit5vRdvtoSV",
  "key20": "2PJVy1p56q7i2N57C8JYCv14M3zi55y34FG7gHZ4ZEAC1mxTHtUwy6A36K4Zf7Af5ydsLaFAxYtnnvEJLhnfAZg9",
  "key21": "2Xd5VUfWYJnEHxFjoRPz8C2Y42GvXyL9HcCHyR9bMDAMDJYRyo5nNmPAZsSTnYQDSnK2pdqb2EF4EdWGjDLJZaUM",
  "key22": "2KY6ibcNBGLrf5h3KDquTXMbNDyaLZuQX4qzhCHPBoVSoukCvgq4wzpRYvwiS7HKQkDe8GqJuiHQPPasEvyzh4rE",
  "key23": "5t3asmgTVF1hFZeoQRVQAjrtfgiUH3uNZkrtw9VvEgGYhqmddk84Vp9Q1cuMLnTf5fP6yZkBYQ6KRrCmKh6z2W9W",
  "key24": "nEuD85mMQ7AQwvCXQPniRikxaMF1Jc1z28676HvnuE9rykaQhMUBDZV4wbCLuDrmcmx12Fbkz8RQhCn1axerb7w",
  "key25": "2rpK2kXXXdDtMz2uAAjpuhJSCt9ALgBB4ZW9sRDrGbW28PAeKg7zgaZ8VPdXGG1niSCY8GGEi7nTXgZVb6Z69nvR",
  "key26": "2mZHtuBjnpWxKedBxhxGUUJm7tsPCMLc7i1SYWxA3PEUVuUfBP1L1EA3yFZdySY5Ty7r43gyLntNfptFzgh2mv8C",
  "key27": "K19HXSMxPkpXyP8BYCcrw2mFpDcQ3My2YsMDX75dojzTiaQPMXPaHNjewFQit3bXqnxHEi4SfREDiw3YiimzRck",
  "key28": "4jHU2t7Cu4rTHQfPnGe1CZ4bXEF8JuK78h54dYNTPPE7sVXN32G5sXvAcoJF7pBZvZdF6rwFccXhYz9WEcCdMDky",
  "key29": "2hS3qKR1ff1cgznJepdBWnpwhxSCJ66dHDZi7pR1mH7c5ZKwzZLtajVW4M9MX4c5C8qHWcUxeUBq7HnVhhPwCgDC",
  "key30": "2LHPasy9Uun23reAhnhWaaqrvWe1MMBwCkSgjv2GC9vErPR37Z7Qhm1m3ctNxgiZwTesrjMRWK8M54RC5wUVK86u",
  "key31": "5KpUuvVL2DiYxCor4Q7LoJeWfDzFpTt3tHrQKQ293KsxkJ8kMDjhjgYa4xJheQUyqkQZpQX6CtsYRjsWEmiAxMpZ",
  "key32": "3zZXBb67Z2dyWMuwzgzp4tPsayAqdHqXkDqZ12X5aEKh9hnN4DeDmva9oCUntUntamPvEi8hgD6zn22XheHyA44n",
  "key33": "2QZtxy6GZUstEsMxdCxiNJuJDJsN7eLytiYuNJKAV9p2yqz1JGPd8EDbN6kHZ9yzL8ToQThjxEuauUgXgee7jRvV",
  "key34": "PdEUJYiX3FekP1HGm6YFzuvAZcLvyoqw9fvuH2DUzZi9BN1f7NnwTcSUGEgFxJ7MvgvsJVsjxfpdgJX1AogHY9v",
  "key35": "5u2ddzcTq9FmDDbFdR3D2gQexwWukmF7oaQUrpBzvN66B694vBYtoAkvMmbQ55fYt5hMGPXpfWHv48nH33asnzAh",
  "key36": "3GuwYYRrZ5poq1Rg6cfuPZw8ZCER7oh9QEhKbBk1JFdpyVjcRSWiz5731kZESf7S755aWMFQ2oXRyNsduuSZh2p2",
  "key37": "3iTt1pz9sn1Kp4z1qgBjYaaTwa2qXEHMS4G8Q2mWgvLxyR1TGDDbYqsLm9qUxXZAcWmuTxbd1SF7ZZXeRoy63X5i",
  "key38": "62wzek6RN57NRBbe2idGSaFLobYq3AkV4F4MMbbfLEr6GSewSG2BKxtQXjd4v2mVcJpVpiuW58Rha4WHah4Wr2dn",
  "key39": "QoqSzYYWaEQG1Qe99bqfh2a8XGbY8qUeXFZ3sf6AZVVt2SixuvsH17ZiVXZghNMHVWSf6vap3QjakY4xB8UjWJp"
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
