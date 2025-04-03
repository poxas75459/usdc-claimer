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
    "rEABhVGdpQPfEjcyBn5mULi58wJCkbdgRRBLe6M2D4FErLkEN2tAS8dtHzBv8kj5yXNJokPxftTjkEMH6AhQMiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQfeQy4RkrAmtEDebQpGz8U4NSc9oPFCyGTtLcYzcQVedddr3iDgC37p9nd3DfUxZ3f1t1T56nD7FCJK763ZFT2",
  "key1": "2sUk6gNGS643eNwXYXJAQw2Vd7Mo8NuYMNocsyCUft9digchDRHhVZNjCHdUADknHu5LhEgTAg5q4NhLSdSie72j",
  "key2": "328QNcVSUgLCXWnxF8y1r4Y2Am1bFMxSNTWNhn2yhMtjfc4kHivVwGJzkCAkdHTGCvfaSaETXyxXBEG6iSyMgV99",
  "key3": "3FunkJCYTXwtFAQk126ux52uXN691v7sv4cg94RFoYZDXnVzEEohRJxTEEkdxtZTyjRq8PEF8y8vs89DGxDR2E4t",
  "key4": "5XoKp3Jb9QWbTeNj47F7xSeW72BrSahxprzgedyE68pUDgwvdyVxBTazsjNejeeY7GwqLyuCBSApeUhTePX9gnNa",
  "key5": "3VcdPxTieCS1SoBjCiov6U5bXomZRkkZWiMGBGWiy4AVcpG1NGCCumFBZgEkRj7NHRGoCF8LrtQZUt7MTAdkQFGG",
  "key6": "3bKf59df4amGj7GxN6HBYeb9wCQQbQicXeBuqxTtSZgfjQjHTvjf4mytqZtaodN8KZcc6VAzBAQSNy8ue8n7roWM",
  "key7": "44Kph2MvC97DotusMQ9CexFbzUa6f9aTAh33aSn4MgwYp5zJbFyx4XnFDb3YQjsnJfFA5quJ1wrER775iVX8ZkNN",
  "key8": "2R3dab8bgvpD7Mt5irtVu1zhiSvNtF246GK9sLKz8W9ZZRppbeBdhpsDj5KALBrpUWRxwS4btfNZcdMmxdpG5YNT",
  "key9": "63XLf4VK5ZjbQv8sX9JryUeAcZ91tyQu7aYp3zkUtSv5Y6hgHFdZUf8drpHv2YgUiDdNYFnwsCbPFYoAPS2Hcqef",
  "key10": "3FDhZGVKEx1P3t9TcbF84WoXvZqsxMu35FVQn5jxZdSHqvuS1AQsqWkm8x8jyKKqnqGRt3CNmv9wPDQoTgWrKAVH",
  "key11": "5rSBQcboaaz5MKcSkxTWkDEuhreDBkQJWBNGfNbMY5gPQRiKsPkq9UWun9JszW9qDaeDVp9sCS9PG4WB88K3Jqgf",
  "key12": "3rmV8XjULpbEGxq2ma9kXzRSeDfXPVvKXPqWaoC5Vqqhcyt5oxFhFzLndCaz1WfqC8W6Ypmg33iVq2ojUhUunzVz",
  "key13": "59w3mshjswkyVdrxycFSnkZ1DRPhtW4FQe1b65daogMgmJMJcLMS54i8jkEudjKAymCY5sq4q7aaYUuBecCfSTz3",
  "key14": "4U3wMeamxNZckuxH3NJXPf3G52RHjfuJyok1nrbdFL8rZj6aww8GLU4EU5zcK47UtiXsUzPbiSswFBKRw7UaenXn",
  "key15": "5C5xw2e9DQFGaAqWzsD2RkqZAAQeKW1evEbeqqp4S1DhCpWq7bdyXCtgbV1zjUa7jhuQMkhoVCBWrcCQkJrQvMwK",
  "key16": "i6rrteczNN17BBeKvSBJ2UFfZLMUtHREeXnrCMHqmKJg9LTYWZJgK28MyJHs7SZg8BzcCuxd1mGVqyun5M3q7xw",
  "key17": "3kfCyMRL8kRKFkrLoCEwTNCuaUUrJx5S9Z1gtXtocADkSfzA9QJz6UKGJEDRMZcehPWcydJsvgf3FHQtVdnZCAdw",
  "key18": "4b6tPNoEi7ExbuAyDgMFhQsdVG9xMZcqjb9x6Wgh7MMvXwx54uKFMQhNL7476QA1WczQ98toziGsajJfvkx9tMM5",
  "key19": "jzpnRf2LPt3BZf7tuuSw4tpQb621yTutjjaeacn56GNgQKW2iguKB7A6eoRNGZ7jfYauNMMqhdM6QkQxJsQyUs8",
  "key20": "2W6N16wqVEyWwxHNCQ5LmN8hP5G1rXZEhXwmALdHKKSSajjDCKjAammK7vhxPzeHUDirwHWuNHQWGr6A21Zry5k3",
  "key21": "2DqgCkBBBtvreApvw9jwV9exhkvub4jBzAfFctnRyApV78b1nP8E2AZ887fxfF7kwysnQV8kw7dB3vbcMxDdZ4GK",
  "key22": "5rZ1TMdgAzf1BtLo4gcd1Fr5o5z5SHMq5KvtG7ANXhUrL9eEzX3NtkbHAXXxSoNYL3K6bB6W4cHLanuB7sAXHLjq",
  "key23": "2NDj57TXuZAZJmGZ9gS5Zn33fA7Ya8E1M7ShJp2keWoHe81MCoegMzbXqegjXSoV6cQwQj7J6E1z1HKrp92n8H6a",
  "key24": "5hGGFcrTMWsrS2R4Qax14uPLrVJp1usfXoGbanB3XCbqVbmzVxGM5T1pwAgAutZoJxu4vT9F2LWAqSZz4imEPPq3",
  "key25": "4Soe6jbY6Z2ZPkzPU4CfjsPNzHtQVJbTNxLvAPig7bBRS4U5xzU6Q6nWHArZWZDzeTpPdnFSBSUxDotc7hVzWndL",
  "key26": "59U2CVqaXs4eXYu5FbhffNNmUDjtHUjwGnb7pZrduHnw4UR3AWsF1WzCHTWED4hkuJH3kwp3CUW2vKX1cjQaKQnu",
  "key27": "3UABkyxnAgECWJHyg1gQd5JVMpBgckHT4coKssFoa5eM7E95MnP4FmEHtkiaeisytgkegrgu5uZUCFuCjDCa1DCM",
  "key28": "4WWSGbdUj1wo4JwRGMRtHhUS624YBaSh9yAwoow8zHkvfU7SY33MdrVS7tYHuZ4bAMjRtv63FeDUtknobsjLcH6w",
  "key29": "4V9LM3taVAfJdXewU4LyYjuFa5YJ6QtgTA5LE89eTLFfphjKVyodzSbi9bzbDhrfAypbYadJ1NXvSG7anjdp7gi4",
  "key30": "335X5fG5rkASBvKAN4TTLVXxVZnpT6qx1t3Si3acBe3ag2YNUBk829J5nzDYovhzwXhPixtWDhtSwRJVtZ9baJ8M",
  "key31": "61cBp7nhKRJ1TSPKSgrVdecHxqDHWbqBiHNcMDdRPqRX2Ny1BTCFAczbGQPn7grRWkDsTAXVCJqTnkiuWW5X84tr",
  "key32": "qkfrgwfs7ucxVuKxEacZ25ervMtYh29kuQC9Ho1sdQjsoM74sgSeMGjVK6EQD2sPmXiGMEcHF3zkhRXZDMuCpPu",
  "key33": "SxyNB4eoFTu8fdVDA17wtDa8q1X7qnmPSnVTjEc8bdujhtY7vjb1VJdN3M3CnkE8hzPGdTyHfDLjftRHCR71ie2",
  "key34": "5NCtaXrSJz9mhfV36JDeRgNzec3Pzo1ZtK5JcDwDE7g1QZc74hAZ6o6Pu7zaM51ibuK5iqJGZUf11Miys5xb5SMK",
  "key35": "5M2LwqvZdZuoVFLwTpm6Pkh67DP3XK8izExJAnhtQqaRDQjNVHXh6beqkJV1TA5DQn4ZJsNx3v1F96sGhmwfV7dr",
  "key36": "4qpdcVvTJhHh9Vxh2P3VoxbHziBuHwmZk9xYTkdUZWaJPG4HfpKHtu6vebT6MrT8Gk3eRCQu9AtiP1fnFHqdjDtP"
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
