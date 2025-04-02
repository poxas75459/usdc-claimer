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
    "4mAHBTiQ48prgDi1FRWatX1mDDGeLhWjk6qbRQmxd1uGrcXZkGKNWbkupPe35h3qmGEbVVPFTbWcPmmtMGogZBw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23P84EdRMKJTVdPW8DJXHyyMLJLk7kceP6f96f1n7zuBPmthkWHzQQwjQ2C95ZzdinTEMscU8jR9pfqVF6AH3J53",
  "key1": "4WhGggMdQ4zvuLeaDdRJXN76uwUqmQgx6Ke2ZzP5MP4CrZbBYC2keYaMbXd7yfYNUM14UEGeR9o5wXvWLxEXq9Yp",
  "key2": "55ke4gqTsd5CN8Pa5KYqTW6pzP7ZAMp8w6JdwPSsc8wnPJi1KYvFJvpcTQQYK1ZjcQ1VnvyVXfEgAMkbMzDd6o4S",
  "key3": "5HJR8kBPowjvc2j34Ag8aZMsAbm7G8wqkBWNFjmJieQyMQaqgABZDZjMWXa7JPQxSo3uMeM5HyBS5X7f3JH1TAPj",
  "key4": "NCprhNudM7GEcoeUv3YNqDCrqXB1PEAk1wzfyfUE9kno4B461T7qhzJfyNAn6QE8wjnAVBi4qiCWa6Qj3XdK6ym",
  "key5": "cncwrw25QF2YrNPtaJSWQaR7pBGuMfaaSaiyX3pUT3uoSWSoKHX2ESLLRN8fj7mGiVm4W8r96muuEUSH35DJLFw",
  "key6": "3EZu4P2gCdmSevseAyzjbjaQuJ8kk2inP6PXaztNBWqdBy5vp7N3gM6FwStJjUJCbmkw1fPVBDCXtZ4kAAFhWzL2",
  "key7": "5MJmCKeRMesJwPdn6Zfwp3GeYbvg9rapQAABKCRZYkSP9Y25QBDXhyQgCVJqwa57m5em4y8yfxhKvvi7VpaZtNdU",
  "key8": "4Bhm7ioduYwFoWd5UUbvayjjaNGzL6VLhmonEhEXqaM4YC5gcNraPiTKzuGU5KxxSRJb8KGMrtdsFsfK6VhT5eEw",
  "key9": "5RdSQKBeQrGdrqArxseUtQa5S99UPacTdT4Me3WxF8C3W4t9gMqPLRpyMGAzSvfLA14MyhrSPgBQDhkRPAZbbU9m",
  "key10": "43bu2twnF9eRWJZCmjCU1zY9rDNountEHLG1fuZtSuAzhyghpYoyEDPEuAuw644d49BZ3QLkCkf9G8aDTqANNMcc",
  "key11": "29q67GGxshFZKpUYqBb9qYRcPeMgzDvw6XStyfKhw1eRThYTurqAdeWV8QwJfa7v7FAEGRXzudZwrt7AVcmjH1j3",
  "key12": "3rtBn5CC5dewKd1SSLNq2SMyTwc8q8x9MjxBFcY461Ab7cDYMZartTTztEkg3Drke8oJDVYknwz3m9rFRTir5G3",
  "key13": "4CC5NSLg7zJBWWgHWHRFqqXxJBFdAz6it51EtzTXPna57xynfzhkGxHEDbTd68z8W55dwQfnDFMnQX1CzdwZ31hV",
  "key14": "4iDRqAmrC23PVSBvEBw38goBcNXHZhMHcCEV4MdC6dVW9WKhFvAhT49KwpvdB2shCZ8F8BXKpkBJW5dcnWri2nRk",
  "key15": "2MmoJGFBLdRia4TzhEadiG57ppz699yvHV3A5xzxmuuSShZzEN8uN2ESmcrRYp2gqnap6dyUzRYoK4RNUxf6eYYM",
  "key16": "5Ene2GCe8MoDAB4yF5mjaZHWvPZGbkS52xZiL3MkHDrCYC8DS5yBQK2xteM1p5ezsRoknHeiXMEht1Y2Xv7KdP5W",
  "key17": "5hTRV9UYn9mJvwWkUpruHJWuqJHWZy5nsQTRQn6knWaSm5NsWWn13caVxXHJoqtTQd61MsFAf9D6BNWkurV85CDc",
  "key18": "5zvba6tVP4ei1TqeNPr63um31yJJTQRK5SFSXe2sX5jAqNAt4617v75hQAuenKkiza58BJLiib7JLUdH4E8EDov",
  "key19": "ep7An2a9kxdKNZBx7CvdGbWHNK1qwqxyEm5s94C3msTT9GrPNnygDyGF1t8PUUJE5x3gesAbaKQzWXkA9XMyYXb",
  "key20": "64Zf2HStSFsoB7bDoQxXhoGSZMBL3koCtP4hJMhMFuDLn9eiUCi3LRgtevR1zitLsKdjNC3iqAh5DmUFyncAXzqz",
  "key21": "3AVQ5nuYvbfB1VwyvCrBmtpZGNE8VZFd1kdnCpZ6qci3psvZYGEKoTwZeidxKaVbzHpT4TCCUP5YU6wcWnmLoaMf",
  "key22": "6266HPEHWLrqZfBcLnSH33tqUZvMeyrXmyfBoa3tdRUxcyB1dxPL5QDF5XHzQVTexhx8JjkmpZTBb2GXeKESiC34",
  "key23": "3NeCiWhVZb2TRovitPgRrSWcebNAxdTv3ehkDLb3Cqre9ch7k9kcWKedJvpbcJ8iYFCnoitf43fBALEaXD2ZrtLX",
  "key24": "5UVRuFQtPhUixJ87nXWPQVkYRYNrCHduSBmRDuphz4f2po3UNqrkSFhKHJAeHMnFJZdbrC78ironiDb6uHYfdCZA",
  "key25": "37YdUGm36y2tyMwuaB9gJ6b6UdqPwntZHYpopWUPwgEMtWJqpLpwzJ6pHNmaaRzRKay4WEHFJp4uUiLMdkWcmR3D",
  "key26": "wRhhdfHPomLbgPB3xLzYHL7VZ7G7UiWWbBuD6Dfn3ED63u849vcT268kStwjYqWaYaxFrGBrq8bNx56qkNZKjKk",
  "key27": "5ZvoxLWNPQygZDeX1cdZMfksNa1vZ1Tu1Ka48mA3YoGqJN5UFGf5cy5uLibQgdwXxNora7rUoGfBMaSF31XSk8oL",
  "key28": "91Nfu31J8GVm6safaTRuiJTX3GAhv9FLsh7g1rnYnETQpffdcoUBC4RwE5RoPEa45eL1GzEyK9e58ADxvJvXhSZ",
  "key29": "4pzDuCJDdsiAzaS7cdXdZDeYV6P35gBffHv5yseGvdacmQBqM3vNPnapB8QW7uuPodsqicSj4Poxd4nPboFqvRNP",
  "key30": "z7Fb4NUv91uvQ3DPqh3cSdJvFBENfjsmzrDzUhrHfUWqyko4r9sRFeHbJvmjQGxhRgJ5Bfkc5aaZGY7Sv3CAXqK",
  "key31": "65t2n8xSkNbQGurbSnZBNP8XCLBHpepQSUtxfFwhMvaQERHPVABNWsoP3Rr9d3cfhqbif8tc2R6bSueUXdWDhuMX",
  "key32": "2gcNTf3zU2kT8ePYbpPJVaLtYhHp6F1yAoiQSFyBtfY6uVbevEVKSMgZKgPz4oaaj5RvAUPEZ7oP15oF4Qk8v55J",
  "key33": "66Bk144kKEDyQ4Uo5nah6hGavBzkaMzNhgnDoBn3kmCbd3hozqNFqcy17yRW1koxdeiL4JXJybvyr5iscS55pSJd",
  "key34": "62kJFEWeht73ecUXSbXdX1h2G767DQUg8SyHJ9dtjYZAvmiwCRLTtJWFtQTssR31tX3f125ZTAtqPJWjV8ed7qf6",
  "key35": "3yLznGGd1CujoD5DeHnKAMvngpvQWHAWhfHbLoSXyvdLSF6oJfiAtf2jPuHqf3dyXC1iR6aGnFeFLULTCsQPf1Bu",
  "key36": "28N2bhzGimWaVapHzqaL46eDbM5XfTsG7ffYKWbEdY26yWXvTNdj5NDb3siSc7NURjNUoGwymMQr3ufbWhqFrhLV",
  "key37": "6b1pi9SyNGp1YKNDnGyfPdqKAuoJHswxiZcUgDFs4gwaiJ8Csf3yvE1QzrE9caCXVifnK2WSBHFHw1bcuw6TDTh",
  "key38": "4KsVVRqXMp1hfdiuQXUW62pijSZA82KtnSr7MJ91VvXXbJCpvKeLLTMnoMSV1mzvsionKHbwp4mRkAP74F3SWrAa",
  "key39": "2eH9DaKZr5tbfPxfBckBC3aRiu3tyYXYqp3p3giAsKp4GL4YDAaNWYGMnovd8FYr9XJkW7S4E3MR6ynKLHW6ydZq",
  "key40": "4w7JHTgRXrTSLi3QW2h2fV5mRCxtyYrvZxbVwAqZDrX8yqAvvgF9cwHzcVzaxdex7FZy4Pww8wTxeMQup9G2yZPv",
  "key41": "41qCnytU9R9Vm3oQSiiVfGuBJH8S3sYxAQ6dpwsScDm83cEwHKMdHj2bVJUGVnSiVZpGyVTxfiXfb1yL5w74EFWP",
  "key42": "2qGnmGD7qJQXxKCbeKBGq4NV3PsjjZRWVLw6bKq6g1gcvHPFBF8XGM3KkU2x9QCeK9uvMzbUVXzmw9WWkLB6MusS"
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
