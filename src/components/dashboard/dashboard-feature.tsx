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
    "4dFZRR1xaFm9BQGwGUsA91G9Gmi7ksHgTnzstB6jqkKRMgFW1AQQca959Nt28DKVJUyxV4SrRrty672B4esxDBG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVZyrdhnyf9Bq7mquzBWPriapMcxB8RWLKfWRURCbhp4j6rzGD9aztDerA5XXUFX3mHEUewPpCUM38J6MFTpuGC",
  "key1": "4eAirTj1JnnNXC8sQ1rucu1gW9iGcppdH4R8RVcVBUfpkeX84Fyp9f7fja6Mj7DuqApuUaxvqH5u7KFkEGhchomW",
  "key2": "2xLAJ4J7pJBiQvypWkWaN7maUpjKWfERQqMeHk5FKhy6ZstvSydcUPyWwrpRSpj9LvHsDKi2VVacnbfGP6T4z1qp",
  "key3": "37xN9sycRPhF1veTPckrMNyDwPNR31x3pN7eL9YiZ4nxzthkbGAP8ud2ykbhzkJiCuzTAqkNmtAz8zCA5asUEDw7",
  "key4": "ExTWRTFtercULY1cobp1j7QKN3McSCPjs7p1ueLVkQaq61dZnyYeQbpTKQGyunxqLEwYBpofape8xQwLUahGVM9",
  "key5": "2eXDxwoQULiuvwhoSS2zrgFvfBaWaYnrWAjXPwXi2QKBL4vn7rkbV7Fi3TcKbRd98hzQPBEEsT7b7HxPnvPRWWPa",
  "key6": "287GCq3LhmNEqMHcrz6q3gMDdGxmEcxy5LVnhMbbsrVGt5LgMq2yGv3h9BuMB3hauFedLck9zJCAJHk3hhqisniD",
  "key7": "2gMxAdAYXAkJbGcRh9A8XzjTVv2vUfP5utsQUvr4huRobtmHkLauxmAes5mjp43wvmHmc5ChWHmtKfybVuW5d5R1",
  "key8": "5MhPuNvdooXFiyfZFkE8wqXBse3XoFQYugKYsiScwGFzQ32dx6Rze318VW37CNLjcuko8bG3napRgUmocWvV66ig",
  "key9": "5pyMzz7Z4PYLJvcLQb5aZxQwt3gk7E4z8CGKTjKE2fREBux36UdCN5o3gkvr71QRa2veFnVgcDuEic6MwMRtXsag",
  "key10": "4Gn4e6ro1PGHRGWEx4xWBuLoLQkfsKi7yuFxLXK1VtrY3f5vyhfpGv5x45zotBiNBgYNn8Wo6QsPYwEhLdCzQzxC",
  "key11": "678DVQGpVquVm7RzpPbFS6SXv6GF3iWBiqYrGowPGBT6J7BXepaaz8YTnuTzsATaDGo1cUzauDcyV4xwGro6HKSa",
  "key12": "38YDQgCTjFau6KdUs72RjvsTHJDxjUgnuYJerNjdnU4ot2F8HbMnTCpGRZmaKmhUmQNNQzNHE1dXSRrEmtsvi8g1",
  "key13": "2zVyFbxzs4VUSrtoTiBPY3v7wDEhE43aFyt6NyYMVTvNvyYQa97yNu8Hcw5iaDQ7VFbCX9wha39yyv9CBSxPHo7M",
  "key14": "2d5wfefKxBCjVfFYkCDUXQM6tToCyZo2kkYNnbcqupd7YrxLYa34riV3Kw7rFWGVzs2sAGVBr3xA2PEWGg9B9wfq",
  "key15": "3R37X1vC2MKkMenHEm5v9KCyhym3z79Cv4VTqnTD8ZE1yxQx3WZ9Kd2TjYFHbC3BJ37gTgHRwTBxpKWUzyJH82WR",
  "key16": "tHZecc1DRBLDrZKoi8VVxjUM2hcyDfEWbrtgfn9NF3dDVJz1Qhp8uXE4ekSgoGEkAPuELMPgNMVYhPMC5hgCgKd",
  "key17": "2XVDdzcJhZm6ngwvk7fCPXNm4mvidHdxkkUDex1sfoYYdeqT4CFmQCufVcu2JRRLEMPhG7fbHqUSBvzaYdWm7r71",
  "key18": "3TZ66pfaqPTon2ieHybto2f5xY48oHubYrFFV5VCNNG2N4nr7XgELbfuHda3gG3xr9ZNhHTHBPjxcTJmYvukg2gN",
  "key19": "2xzyHLBQV38VgfVPXBKZk79Ar8FNSZjQ1WH35EQnPeKyLVtzfd4N88ZWzaZugkCfwi7bHnFuqzdNdP51gzJyGFFr",
  "key20": "3u3AHAg5kAY2dLhr6o25PZq7YJFveYrTcaDbACSD8bGsStP5S497yinEdf8BF7UUHDkxzJybVtbJuhGLVsTNf4MT",
  "key21": "4S4jTkBPZnZVRZMnBcvdhZrP4kvNgfFjiZn6ZdA3Ljt2CGnpJZJMyjjw7khj2m57LrDryHBL4R75iwmT7J4DnjP2",
  "key22": "2fKx6JhzH48cb3S6VHtdkRq1Ti2wUbPcxLQM9kPa9qFm22KzRha4RUcwVH85pgJBfcCGPVFtv4Qm84DmAjdwZe7p",
  "key23": "2gnEgPd9GmiVAY5LtMusfXHC13ewaUk41adVR9hNaj5zHktAxGezmcBBMnGt5Youej7Cpa2GB96u59x2n2XV2RPH",
  "key24": "3jhBqdNCznURFLZbB7VBRcK1ccmpP7ehJy6uvLQjDbTEBwrUkor8ekTT7VZCsMDG9oHjMLPRXWKBysPbESUSPxfA",
  "key25": "492VJjhrVe2UdnvGakoFJqHcUVYB79RmexK9Rx42QX6ZFtwXCX7VF7RerqAtT4CVt7Uqr2jvF4Gb2RrUaH8FKTt",
  "key26": "55Ytdga4BpX8Ma4zN8qceJ32f5vNz3yfBihEuH7uwEngNr1XerdQiTLvSsRfLnpmyzfZuJzHbYiUo2oTNgTDguDx",
  "key27": "3Gb9W7TR7QJetvRSJPj5eVRYpHkx4kudoqz81huqSqhibrRsQxDtwcSXimHPjskkNa1G5TMUypKTj76RRSDz6pqq",
  "key28": "2SYaYBVZrxVAxmyqBqPmF9W9yhXb2jKhqXYKnBe7L7pmN2DtatJDPEdKjZkqjmEkuqzXxGwxPcMzFc9JAC97Fcsm",
  "key29": "DY2hJS7q7rTFBCXPNR6SPKE6xcuVTE6Kh4PUCQYAgun8hSqSnH4nAc5P9W3oXEMgmH3MpXGG1BsQjx6tjrvW68b",
  "key30": "5Pxa8jKQthMtGo9c9UUe73PtoxLZSnRL6ANhe8by1VwWxanyaHJJdqrQyr7w8jXdS7M5XbzAV2MFnU2usvdCKfQb",
  "key31": "4jPKTLKZA4txPppTmhUVDnkTfYCo22PLHoj5rVqUpSatxC299788tUpHTQKdKmV4tTMAMyFGbjVkRpBQrHGfC7mp",
  "key32": "5HVDvBytU84Gk71B3znnChFPcCv2RYjdzsphAuT7dpiazk8x8HRCZoT2LbGQyShdDCLvNG3mNzA4d3HJ6c5xPAhd",
  "key33": "5my6s8YRkVoENiFRHA3KmQAfU1xXJwwJR7sLpqfsduHzLGfr34FKwwbs72REFkFs8bjqYnwqfr6agJZZ65ENBdVs",
  "key34": "2JrYjNMXGqTA1yTtspwRNLby8Z86uE7siGTwguPcRa3zPLQtbtP4Pab6bVEY1VBbKHm9vAWPd7RadYpFdkPEB5Co",
  "key35": "4y6iKzAbzJWoDvvy57WBhLdaLMvx4FiVduffzvGh1RZzkhTbKQGvFmjKaDFp38VYjPrTUUwGfGni9Q5ySsicJVbt",
  "key36": "5G8mJHkkbmUvkTbaZRr4USYTo7KQ4iEjfcDoC1Z1jBoG9tZLNNwRZortuwPFUK7mNymz6QDa6CZTAYyDsFc1cznG"
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
