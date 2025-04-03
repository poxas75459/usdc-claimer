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
    "2ycVbwcK3YSLXo6d5DoGqhw2JFop82FoQt8ttoUwQNppz9buqwWoifsxhtX2u51LXtQzZpHDfrFeYFatzXqaKQbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2UPpBmX4EjmRqga6StEYG8AbFtRCgVRZunxQsMEwQkpLFW6iDU1mYsUrYn9myTebMQbFmwU3k1ikNXhWYyp4gi",
  "key1": "44Pe6pz6sXZ4w89DzRnTdMXR1wD676Kw299tav4iMA5vhMpiPTVWuojxwbH7eV33kwVeWg5TSsoNUcJBKCv47hpG",
  "key2": "76sUuWixY3zqtZ5mKtV1bwq8AhRxYBVWibQXKsUeRu1m4mjM5KRx5Mq8y5svu3zBMuj3aTUDaUmtLyA5XaqUbEi",
  "key3": "641tWKyumCybJFS9WkpbD5mB9vVdhkADaryaHpYNvPP5BjVuafW5uevCgyuZi2BgZA2sukGoi4WcmDZvWxqqEFsE",
  "key4": "UHAjWX5Pvow8wqRQwLXTY4bMPAMbKEPFmqPeUJuiNy1w198bncjmxrtGgaze2hLhTdY3jidvSFJeHrYv31pPKK8",
  "key5": "5zUysxpeyZopQaiFHjzwmKqri6pfNcteSLUcFbdP9XQiBH7TSwsbnpRFE5H3UZg61SwJSHMY4Y9VuCEYFJPEvKjR",
  "key6": "37Ho4NWrJkmb23hCY6dQVygVevAoVyNCex6ZTJm8Haq9Xa1hH2nneDY8Hv9AqfLZzpt23uJeK66fr7w83gxsjfti",
  "key7": "5bYHeJLP5BG6fm5ozw6gsYM5uX5AvovPfGv8c3gSyD7U6mFSTWHjfKXaGYnYR8Xg2MadzKnHdb5NEUhmWR3VUfBF",
  "key8": "4oSCEqXVESPGjruiDmCLfktuxppyW6P32xxVnhcLss12AbpZjHSfVFoqfZcNbD3rRaGbDLqEwGq12qhEQX4kC7FT",
  "key9": "28CwPMqvk9ThLmS1rNZmyspx7AcwFXHiQf8oV136nqojxYULZ8i3AgxZ85SZYgSiUTJr6bht548WagNuv8Xah2vK",
  "key10": "KHHFUpxs5FUifJoxTNPHuzmTmJRMeXgpNAnFeVAAbZkCnGJRE9gdjabwuq2vADpodv7D1YggAMepp1Txt3DFUTX",
  "key11": "5UVFKbAvopPZKS9orjN6zkKPr6kQxCfpKmhMc3kj2DxeJzFmRNVG7sfejY8Qbp3Zb1YZusvSBYEvjZmovBiDWBjU",
  "key12": "4yHU9J915hmhBPFXFbt3ZfzvDXUj7ak7oBrHF6XPJuMYfKboUk9AdQvf1XrjgcVeuKGiaqX9Y4n52XKfURHQKoyQ",
  "key13": "5RXKCCivGJkrvM3B23AVwHqKg7SRLBmbZBjAShkKp86awo1oKwEMEqqa5tHnDfh7bYEouViM5bnmLUqgbLpsnHs3",
  "key14": "3iPkX814YzRDxtpU2pGcsG4scAAwvcnuoLoZYumYvB2rqMyyNm3UGZpLdRgx8RbBWKzn2imfDnYKGtXAkYEh58Ej",
  "key15": "4D3om17mvsByneW3b16TdsVN6bksWwtUEAjzJgtgketm2BQ9bc3h77C9gWDRQUArrXWZ24owUEpPAjNk1aHzqAZ9",
  "key16": "5k4PssneYuXMCvf7aEWaKdXoq9v3RgpWCTgsyQNJrM9zB3ix1tGpiovoKds7UZbCdKGF84VmAb8MJJfVuTFpXW5T",
  "key17": "trtqyAjgU9LsHtWKd9tjXyNzp8xLB49EBqtk7kxcCMyP1AMH2GFuFMjpy3RnGKKa7PaMsYGLdV7P8nTTbR31HkZ",
  "key18": "26HMHVGtUsykHrPPMSHHrchMrvRPSWZbfucjh2eh3HYRKJtT4mwJhFUJctDiigrnQ6BDv4gZ21pbsHM3tV6VY975",
  "key19": "3UXnVuEYLuSX3MQjWP6Dp9WCzJ26fyzzqSun2kNGUeESzfpXGxPGSTbELy1AvGsqPg8tqqqrJgPHrffbgMMZeetp",
  "key20": "3MQYEyXSViDTuUmZTRTe3uXNpJ48RhBPxNYn4Qa2qFr2TG41CPkN7kb7q8t4zkuuS5LddFTy44YGQQzBQC1uZssB",
  "key21": "3CHJmh1Z2jKA7t5gYLvinQqe2Bym4djscajZwifvDSSqUzx3NckdaQ7aN5mKGMbGpoZdGzDQU9sQZ88ryhY1dZfg",
  "key22": "58vDsvTM6QEfifMUY9FuFRs7JLqR5Y6ybQKw5hmEFcLAESCTfVtRXcgosMZS3kF5pcJrogXL8vyBSziGDJqJrAw3",
  "key23": "5nrBZyqovjXeztwMfUNCXC5Sp1vKcTcVv8WYdDdYv7Xk5cKAER6TdqDtjeXAnnVXCvFjAJw8eva6Ae8r4YLyjHeu",
  "key24": "dVSczuKjg6uFGPzFFUrn6x4eyXJSEBXX7mwkbwKWu2bXYa1H182w4SMQLqtUUhFaPgLwPiNY3G8GSQ4toE8vkCe",
  "key25": "5hp2sREog5hzRq5vXy5Q1xpA1wQ4jjYiayVYop1SMkAg3Q3HZsPJYan4hnaHbTEBUrCGCJ214pP3DrQEbpnHCdGH",
  "key26": "Ti2RhP61w2vm8iQHFbwSNweMMXWYRnaDV3KsuHYTbFSgtkRbtKgvND3FBwZG2UZD1ChWLEmpxPdgs1bcYxkNTYS",
  "key27": "3UZPJBBs9pTcdCyNEz3roLaLRs7SFrX4mASecRTNWc8Ys19gPuRNYTftWE96yhBrAgHxuRsBo4Wqqwev75UgrC43",
  "key28": "5T4jfQpGe8kigoqZrdNPHiuGvF2iENuEA8chTpwBKiiW7r3A8hhF6p22wUkC6GQAEThiFpR9Nhmz259QzwTes5bs",
  "key29": "2ax1Phw8BsfxQYk7Sw8d7zPyyMHroMuyBh7MgJFAqZSQFfZ5gn4yiyvB2qrPPtJmWeBdqsVD7pqL6KC7QNRheeLJ",
  "key30": "3ByfSsq74jPMadLFceAgLk88od2pRS8MGceSJGoTVcpTPdjCuBi9FC7Xp81qWwtrtMbiJqUNmJg5NzZQz8uZu6yS",
  "key31": "L6pp5ruAxofkscsRBNUdgQry8RvYZMkcbNxrMyYMZi5hrtzSLfst9TgEuejKP55yAEv95rvMP2LThBgvJPxzq4J",
  "key32": "5in77g1GMRLXrQS8AZiGRyFBXg1kb935uapuSEiTQgTTGPE9zeMDDdv8g9mYsBUanpWofxcTLYzXLBndkx3WV6ep",
  "key33": "2ukanMJS2aoVmbbCVTafXPavP6WSGZwZ7xab3npq7vBZqvB2xfMKqWyc167SxsRjx1zB9x1HiCPzs72t9VZGJcjE",
  "key34": "2F5m1fEJkmTkENZDWpSpgLMxMAy8xYzhnipddwZTUrkNxaG532T4qE3449x6gFwwUu6F2hgqMYFPoo4ujrwS7Ri9",
  "key35": "4f4gLnXuwYaoKKN6t13Cz9MKvE1eemiscuWjvx4W8CHPipAWTXqo2ekc3nP3GKDjXuq7KjB82GTSCdscp2w5Jt6d",
  "key36": "SHtzW3icu4xpK3zXK9Dq94J5g1Q7xM7AFymtsKnohqYmZmFW8e45KntdcgmJj4Zup2fCzgoHekCdwE3xBdhHjS5",
  "key37": "5Xso4iSUzy2Xq446EehYytL8E3n5tLdPBf1GTXoWgHyTCsLVmhBUSGE7mSEuFh43CM8JUFq2gHZVST7JDCi79UpW",
  "key38": "sSvJ6qnnzMKMqDzXwRAD5pYaPsX31Ma7EwVpzjcv6tzNPZTMrPJrm1ieW9Ksc7Fa9k6a2UNAQx7V87qXaD99rEe"
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
