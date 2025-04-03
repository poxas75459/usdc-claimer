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
    "3Yjy1J2d2cShnhu4C4gy7diXqGjrzt1cQZN7fsjHe9uo2TFenjBWYEtWqqtXks5MCiUpxHbVSFYCbXBm3yzFMYZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMShL4KszZrmPzLq15Anqu29sAZfqdeNiwyCrHprL8nd6T7oUxvQHeWDNgoci3gtgkvTGXXHyF2A4R5iEjaVuJJ",
  "key1": "3iqFsKd28swBF8LNZWMURqcKeiGSbGV9Px2RbEK8LEAkRBuAkhgKXnQYCGQK9p8wExqdL614jPC8yS7WFcwY2o9A",
  "key2": "2UvG2JK2u7PmhXKDCwc1qxiwPKo45Aybq2VLr761SoSYS9Lwn2cwfEDVijvNjrSJZNwMnZDnny59qz81d5Qxc6KE",
  "key3": "2rf1NeaRVi3rLJ1EZxfVk1gdJvo5dXJ7DadLxvDRnQumoWuA7KDBuACvmEiXz4wKKn8v1nmYEE3GkkBz8nsoX2CC",
  "key4": "3VV5AjrFFjVHJiNBjRMxPRqM5uBJjrEhHCwFKwRU2ALHsVwzrPBXFLywNhoqZkaVYYTg359m1NspCXDATWwaCQiA",
  "key5": "5ktJEFuFdt2kd6NK8TUSk4PiGAhoDFaQ5G6aQs2iPcevnxzoav2PFeWU3boxnii2bvURpPSMPwQeGBAjaUthCPdW",
  "key6": "4zdgNRMMhjNqvognXHJahqV7fAD1U35rfnUVwHMtMkxxdHhh1oQg3UvgbYJdbA6hUSXGqSorbrBFu8tFheR1fo45",
  "key7": "S3PV1xSye3nYwXPGNhfYdn4CF7yG8md8m2P6PyNZR1ngYJxmuW5RmuwkrbVu8BCKLiKNPM4rqVSCRMLiA2YmRmm",
  "key8": "4aDQCtdjAndudYzvtuQsTfVRxhwr24yvxnSsXLesFFVjGoy6KB5pENgxfUP7CEosPdedQUemCzirpKKGvgN8ie6G",
  "key9": "9Jx6fTAPEqJChSL5aXRPdMwDEmK8gFjAjkDMxzZkx4pmeRkAQTgGbVtyZUbFDzWsb69neRjdnqrAwTQPqLM3Ryt",
  "key10": "3tz8PrFrj7JuEmpE21PZNkBVvm7wMQbAFigHrTqbtQAevYyGYbvWsdS94iLgmQrj4JT3vtfUMzzBAJ2ZMTCK57FP",
  "key11": "599hrFen1BCN5AdWKUTvHVn4TA2kwCYv7NuxXw4umpUv6vSceCnc8iADTkpj1pipVHGo7Gv51ZqaFTv8VXzFyajC",
  "key12": "Yfn5iEC2qKnsxrJDi3UtGukfnvvNrKYFAYiJQGb9PJY63aq2HiSLw1f5XB5w54enUaeCPTUgV7tTSJmK6Sxe1nj",
  "key13": "9xUCkdDi6M9cuA365kCMckGtCLGRM7xvz6KHyuzjHqRxzRPrEz5jsZX5qfsGua9KA4DQtid8rLay5QvS5rCvhX1",
  "key14": "5UU5FjCsbFKNWyMu2err4ZhpaYwZ1sWDpNh5Vs9vxoLdsC8gJTj7E7TqquE8Nswbcic5KcHmXQQg7pzKzUKd6ozn",
  "key15": "4q9FvSx1hvCKdCrw8H7GWwsnqz3D6bqBwbUezWwE3iPSVPukbpummewRtPMQ42XhZ8FBWdLraTUphCvoUaTMm4t7",
  "key16": "5EKEMt3BKR5FwEDpyDywTJwkqQCCCwyEbLnNYBuhTcWx8nDpeNNZoUjzcqiWFtyzYSCXyUFu4BQY1YceJgKc98YU",
  "key17": "5RBRgFSWmksJCtqxFhD2kGxJMfheBiDmK16dMxgkNa6k7ArbLa2kc77bGw3KUP42XNzbWhkn3yKrqEn41xFDgdop",
  "key18": "55tA5z6tjGEgNiVTGHEai5c99cBhNff976XXGVcNxKuxsy3PLVSwKHa4sEwwzfARKvr8ErEJiw6GT9GaQ5h18ZtE",
  "key19": "2VoWp7VHJ45saywr64merSQqAYdKEa4ki65PaYnizyam4ZJXzUG6YeMWgp4kCnNrFc71LQx8xVBTDfUVQoMdAkCj",
  "key20": "3Zu6xBzWwiUsJgwNN6V391zeAdfP8smRE8gBCjrqRRyAQBy9p9WSKjXZ2dBHU8tEYbzDKAncLt4zEh76f2ZqFo61",
  "key21": "3SV1gJsYQ9w9X8VoPoN5jyZPYQid5QBiL5yz3ZbVAA7VqdUcqFkbK6AoyW5q1SBxmYCQjCbJhEimoGj9vvSDEesW",
  "key22": "3a9VhdFgDe6B7a2eoyMoBVDpjwcFdNd4BgazLG9QgKYriHWRhFd6yPkDexfTjtqftciHgRrnFtaMqvnbMF993GpS",
  "key23": "3vpeEjcZzwwB3oo9cbP4RideRuoXg4qWyAPEAFzZqxqPCs49LtAiTk5d4SpjTp3DRrUuNFn6r97sJjCr7LgbyzHr",
  "key24": "2Zp2aUpW1M1EU34yj2mDFKKnqrhpX3WRuonbmyutNGAi7pDt9QmnqZCpso4XrP3zscFpmhreySJgsYkRefk6Cj8T",
  "key25": "3bzPjorUxXFgHgeX6JnSgo9NfmG6McYi916anBtxsd1BbLn3jYsKwaTLSxckCXCiYAvXZKCeCjixZZx5Kuq3T3Dv",
  "key26": "57zdoRW6yvCesHEeFs4xqdVrio3NWJd2nKpZLWtQLKKXNdjHA8a1ALFPZk2T4EC28rxDufGcyYgsXKCCAAG8LG1H",
  "key27": "3FcUTrQH17jKtNmSrTBwiojeyMoZqifSLbo2EtAE816J6jU1U5ZtEAmsb9ayQmVFWreRPPG45Kp4nc7SXZhTLeiq",
  "key28": "5Q66ikbBBaMmohqp7DdsayeCAcR59CzZC8Tz9zp5ekWYKxp6ff7cuNE6tezh4wQpNcSxAkCvt46NPdFdimoXVH9j",
  "key29": "7fUWN6Eh39AfmKSbBrG4L6FnVipY2Bi3sF5poH68p3ockE3ygh1b8hd9K42jszCVQFRM9pY6TrXdidwp8zjHWeK",
  "key30": "46YnJzRYAyR3Rk6bTthf4Z6ZWVqeZQ3kLCnbnq2MUPQTm1HRypzD2FWqxaZC5x9rSmVcL6sPBDWuusDhYAemHp8A",
  "key31": "5BbNfRxeDQthkY272BLNrLZpVbQSStFWBBSzAM6jkKiNqbeLZYideGPC3GnvPUSuhkX6PwCrsKqFdZqTpecDSod5",
  "key32": "62dCA13nSsBrGfbKzrnPJxrS3F1ozskZxPCd8sLpUB3pyk3snJk7EuTd26kDcRyoqeDbbD7DXxbSYDwjDaczcHVq",
  "key33": "21zKn7pu19y8moiRC1yiSmrP5maNXqizTDpnDDDxnRe4LdQETacWHokzF7dvNb5dWdf4vd72hKtFN1u7MFYebNnL",
  "key34": "628dtwGxREJZvDoN94NRfv6fuxwe48iBUPwmoYGEBqNmTGaKCJPHcn364pX479PRSqFh2HnEpFYZhDf87SEd4Gy",
  "key35": "5rZHv3SwWNBDed1YWEHZnvZwbnSm9obD73is5fYmLgh3XnhjWMsAhEX7cxfvU33tNYVrK3zuJobPrRYK7awTPTv",
  "key36": "45AURUEHxfLPmYxFhgNk6yWduj17j695pHdLV6cSdCTgPj58Y9APmNLCj4NcQnnGYQ2FQJzMKzHFAyrrBtKaP2ya",
  "key37": "5pUaWXm4dAeNEbRBVueDX9h634PZ1Xda9tiu6Mn3fcdT8oPjGSDYPLmW4YQLx2kNj36ZReW1QQpPbyVDjJHMibRB",
  "key38": "8C16k7qY5RdG6LpAxW4F9af1A7gmA5KvqhJyXZPuB1oHnnw8fiHGRvjEsMxzSeFtKUFAExWQejzWVqgr5Y88wYS",
  "key39": "UqnUgc8JZFr7YDF7UwyS3hLJQSSxjK7wyiMT71mt6WH1MSAbSqeVAAxDPnotvRshgaeSamAmf5uj8dc7RtQt4eU",
  "key40": "2an3QYGHDGafZ6iYWP1PwTwYYa7YNSQPHY9xfejiDxN36rhuVqv1xjV5h49r1VazLeLSQgVdjU8Lg2xDrbHMPkUp",
  "key41": "4GkLkGCX1Z5BCe6LKCJ1wwhCjT5ByJJjb5tb3hktJ5mstTtZZRgnTLXujBX6aZM67gkJvTPGA47nNPNqQ9WgNSsW",
  "key42": "5pfhop3ckAQELUNUhBpi2khGadkCWbHBxcQriFe6Nex3uVKdXRfGceN3GGg1QiqXAoHMsYoEQYCs6MhNFeK5c9HN",
  "key43": "3K5nWn3PSEgBcsSWzYaLgtyR7LnZRgTRAjiKRYirGZktw3qQ1wXcUGBgLF8HHeqYwQFDfe7Hr1HycEaGMVUD1MF6",
  "key44": "2QCPo7kZ4es6gfczYCDExpnLNziGfVgpX6usoDKzWzyrAbF1eEDrk641puaS2PY2Hx3xUbc142XMsB7KFkZbh7RY",
  "key45": "uN5FR3UUfca7CMyJnAuVDGmgTbQkLY2BYzeneS2RUhwdNdihA9dqPVnYiA9Baq8NKoncyXciFK8EZL2ozymoasv",
  "key46": "AUJ5cNny6ZXNaxTY8wwbpcAPQrihfSiRbcxNjtnDQN98J6X3ZxpVArXPw32FvkrdfMwgkrNkjPBqo7nBhypJfVY",
  "key47": "5TnY15k7WgQskS2qMkfTAkjh1s7tyGXAWzXZ23VHyd1qtB5YUsFuRe1WEo1Q7hAPPJdpgHbCn28XziX53HGBip7Q",
  "key48": "5fgYAohZnNjbicVmhyh5YAeBoKVpuQWXEd8FxJ49xuVNrQvLnd8dVEzqnVMeRt66qH4A9rdDGN2CT5qSSvWikEYU",
  "key49": "4APLXNfoz5Vt98Tuo8LGMjQ6vRoENb6ggQgM4yVeQoWSpQQ9KptbBUnRff9rJtm3x23KsXJKW7sfiEQQVGbYpbw2"
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
