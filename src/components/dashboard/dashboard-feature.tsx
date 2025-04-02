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
    "5PxbL8bXMsACtJgxAAqNoQeghyijfgff8zw3X2dkEe3k5T2PiCR2VMdC6YtRPgVa8pdbGvknkVANb2yHNDVoHjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHDP9nsym61JNAVAvSdiBt3R1RL1p1LrfWQxrEdn7iySDMjuuf1zkbyTD6pGyYCGTbHdzzyehPWVgjii5dgRvYb",
  "key1": "4fdQTJPm41Tu8YFN7XAXrqvKnRTaE92KCxZYKgvBmqLQAV6ZeUBWpwTBL64u8VFCwEifbxKFGaebTuCwcN3V9es9",
  "key2": "4CPPycA9BHBLgV97FpzpGx5kBoAA5ZuTXefe4f4EjTX8Zk6czaZhoQ7ZtJjsqQnphd18jPeaNXKu3EQMVaTJiWAc",
  "key3": "3yoG8vqSrrUREMzuGNqT8wLD6Cpabm7ikY16ofAeGkXymgt9DJfjeFfKRhiarkCf8kbugASZKhbBLtQXbfUddr11",
  "key4": "3TMc2qHLCJmP8BJPjWDrWdZoApJ3rfZKYg1bhzUj7BzGtowfmZnUNQ8TwEvhEUy4xxnL7zM4tZHqupsAP1kJkJZi",
  "key5": "itHJ9aDuQ49QJ5EbJBceo2phzZTUhqR2J41ZEGysKWhfHSM4bw4fcTKAV6Lu5vY79EW3G3tU1D1EGapBnkuiURc",
  "key6": "2Rt1jypsUS871T2JHyUWQAJYgecBRCV3pnp9Lbm2qNHU8UJikFkEZBZGwPVAjmbVhQwA9VYed4WGW49oF3HdJ3Y9",
  "key7": "2osdSJ4xbAuiPcvBu6XCgzoxrRY4Bx5ou6kENUREGTwQBCQdBTq18uEDcak3E87R4zWXFefM7UNfojkVcQt1mXPG",
  "key8": "5YSX81XT1X1MK2eTj9irAEq9rbbKK6yN5V5UkYuWfmF4qxzPnzcpvDJuxd5c9TzSjmrZMcgo25zzDFeBb2NZnxXr",
  "key9": "4fNwhRNKDL2WqNmaJL8BBpp8UbHyLJpFtkfxZNUuTn8EQZeRwEMsauBe8VGWyxbRidVLfoETRuHdqCuZP2Rno8q1",
  "key10": "4153Fdxg9NdHX5m96HQ4qnB2auyhb3F4rZushyoA4hxCCy2eoXdpUpeksgadAWPVGqx4r1qvoctjtKoirguJ8WQX",
  "key11": "2KDzv26owvo1ssfTav7ULnka1gjd8BrwnSRhbHm4mxnoPnYt3vQV8hAAYLVE1Hj58vxjsZJ9NDjvQPSveqP2WFLj",
  "key12": "3rkuxxGeVCWGd4EmaEfxWyi1whnbcuNSXJJdGjVtzsp79XSVfSAZWAusdPkz2wyDughddwsBZPCigPnBDkWNmbH9",
  "key13": "3PUVh8ypNDA38yg5Mvm9a9kbyyBPDgyiafmnn1TpeEYJWaTXAnDwZy2CUgYGbByE6bWMoGQFK25W9AezaBrPYAPf",
  "key14": "5UQUism1z2TnCUCtNvCmir9oaU35fRM8Ta56DnS2128n7TvzNWndMnFfQEZzpcRiiGpvVzYDmYdUJ2tMoKHdAGHt",
  "key15": "2VS16ULE45qnojcvqW5UJXHNmy1Ey2FV8QeDRGqDGPpkLyfgtGFofyZ7LnSZbjMHpYotpZ8DkWiTDK4msN9QfzEJ",
  "key16": "2VDskJ6KCevFoutj4KAsXq4Li1aAUYS7V9Y4bsGgMsVA2adjoEs1kr2GRhXu3YopRYUYhcbq8k1TXC1TSn2QKkAK",
  "key17": "tJrtrtz9xromTxB6QqRcuuYTrRT9XbkGyVBdgSJeUYJEX6NGfuRriorPd1EsMN3P1Xupb2NMDP8nHuwBHCikaMs",
  "key18": "3MvPAw1vqXN1Y8vCDkHCjSeRWxebuANbu8JdZ9HXkMbdAtSvKHRJ4oSVn6tVzqzgVmyJ8hiZ3T8dgjsEikK1atzj",
  "key19": "3bDAcNptxhrZGcyHjACiW1fYRaDNTSSpvFbLXxHbGJuheaAGZ6rFJBATB2URpvSbcJaaFnsYLA965vWbWdpUmBJT",
  "key20": "MGmsLm17g3Y9PbAqAyKr9tPgAN6eentsPBspscXG1GUPdWPHUeySTJbuje2pXrMNucHJLJcbTTVyDCZZnTdm9PQ",
  "key21": "3oshyqAfLMX7ZKvqGwMrpkfzfWwn1791AkMM9qFDaaPdKp4eaCeqoYJx2JXB3pSKSYqmPAQKZoEiFuSLZTbReogx",
  "key22": "39uWYFBerEn6hAHT6EmLcTnZL8ETGPRAijNMGtk38snsmpbCRRMBmyUPp32v9GWUniRxneM3BysZbuJw7xsMDStV",
  "key23": "4Y4xkfTfNCijBN7bWpoJN88n9qMfa9STG6ro258CH7y72hxz3SHH1wWE3sE4viEg7DvoiTwjYZGSfpFRFVCPkt2v",
  "key24": "5Mwmpd8jigr7dUTsvWqMGkJHnxJfLcbKVNtqrJ6HbCAH3sPr13DZzdcopY9Z68AStNciXVvUFf56yPZ4eY139YBU",
  "key25": "hJE923Cqo6PEUezMooVC575oZ9CbPS7BLwDLK6LVErj7AbUcyzbFoEVTUPDdrsDbXduWfxapLa6CMxi787YFYPH",
  "key26": "3FoRWCSXxpqNn9QS8P1vxRkDgDsAsdAsTRu8adtfxRouv4a1m7UE8Yg2p1dVuD41SvyxBwRsj4tmCjNSfm2CvAX6",
  "key27": "5BjVRhXA6j2LLGPBH9vfi6xJ6Q3tcuPL3zJheLr6a34NCvJvh8YgrWpRKfNvoX2KwwWS8RSekCqX2ZwXPSFBozGN",
  "key28": "2YuKneF51YWGTyrKW7vzZcUT9P5849w9yKY5yCian4kKELXUsc7saaEVHjhafp3xcNx1gvx5S6kKnEE2aKAFXMfq",
  "key29": "4g9fGXtMuaoj51bGntnJbGFWax3tZv6QcthDkuTfJzwHdXiRVTiuUfzxALMwDpqkppf8B9oZcvjjmQxTF3soiSZj",
  "key30": "3bvHRKQYgB6tAWts3oJafSMcxNRAyCzkgK2kVt5FaEfHtLxVt55AEZ8vPnLwEqc2mrKdMV1mWj2LX98s1M6soq4q",
  "key31": "3rV6ALxtKDL6PfVQNez4U4NhbC1su66UFxzibYKTnp6wr11szv2x9JSnoGd3jzc4JebZeXMKCXAWPHoxFCWFb38o",
  "key32": "4mEvNiiEsS5Eu5by9mP3zgMvuPmNiXC38F6cYCJy9SbWz8Uknc6cSzvFfkiyjRg8dLWjGj7ry454BimyGFFG2rrw",
  "key33": "zj7fGj6fELhJNXwVraRqNLNBVr5Q4hLwv8q2qL8BKFd8Fbp6anW7DdTf8dJezPhB6V5xMWgHfK8UcusGdbrgE3i",
  "key34": "4HGVo5hkFMepfXNZZbyrwUtd1CENoPnQJkFGTkPm9m9pYCTBZhMEreCGrbZXtxAuVTFk7V2dqg5iYK9EaA1gs1cp",
  "key35": "3RjvKtmd55ia9WreweXRmzLo3V1StxxMcPPzXEBYkaKbzjnnBakYCkL2EoLjqQUYCoA4MgRaruCnSwPi7U762E2g",
  "key36": "3bLiiZ3JMTRiCY4S6L2ERr24R8ENWJw5fL51YNBDJWNSW64sWNS66vq3ru2ts5NrPwTwsKW261VmcQTzDVt3pXVb"
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
