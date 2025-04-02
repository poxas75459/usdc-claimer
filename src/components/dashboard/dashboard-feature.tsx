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
    "5GScv5QsozGyPUbgkLa57FY3VDpHPnpLmwkmnTk5km7mnpzAarpPsmdu2eKQBW9YhrKXaoJBxCFfzuuRrTqqUHga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DitLBuRKHYrxSV4PnkfibNc822XNxv2pQg98fQXHHmmEo4FFfYZdwrjNPheD3XFAXqWsPUsQTZZtSg46FaUJVof",
  "key1": "4SV9hzsa85EamsZczEh7S6VeXZyszkvkCukq3qXruYA8yPKbms4CjJKAhrNxynjt6cGLfypdZR2Tgr19xWAcLeQK",
  "key2": "4Z6CHpg3pVA6seGcNv1FSmwfhbAPw7RGXwFSQcUEcZdtpNPvydM8ZDvpDkJPkq2NJcEsD83DsyytHDeNsVFHsCUy",
  "key3": "5zrh2BTgpS94qMYy2JaHy2UaZZq7uVgGyAfSfv7tNJFiiyJ665zZzvjmcDPnrLNyUcHz4Cu3Ae6YEX4X7ymp71gC",
  "key4": "2vTw4PKfYoAh87KActCocz2Ak3am4PJLe4T6Yh4Htoihcf1WkSnVJURfvXWMdomekHfWtKC4HGmKmotJYHTYLuGQ",
  "key5": "479jgfjszzgS8kTiyA4BKj4JTkgdPrFHFYHc2xok9iB5XNDKrPMtTCjHKUkbFkLqGeqUkiSnypt5uxFJ5xVDKyzd",
  "key6": "NWUx7YDDVYpBWgDCwcAcioFnrAp8mte5Q4mYZChDMdZKpSRGNnm2gi9xdZw8r2iJsxdxDNrVARcjt4EJXFVSdNX",
  "key7": "42F1PDtZuPUhnsd4yifDEJvxXZ68z3kZSuqgPtKd6pTuP6hDnEEKwPw8awYXCsiKYWYSp5tpamkUpw19qaZ4yjCk",
  "key8": "2gKLs1rAnRgGSN6MZep4s1U6yjxFv4CDLW5HijMkddhhFK6Ur2Ltgs5xatywaHBmW5MHdwJ2ctshmxuM6pf2yiQh",
  "key9": "4wuYbxh6Ndb3EY8q3m13oEJ11VUACbgHcC4Ww822Ncc6pSMcwHwDJoicA9aYnwFS6rgqotS8DChgMZf6eEWeD6uo",
  "key10": "ZLaRDLbWAn4mK5UcZkFh5BW74ZYUBRxRcFkxTY5jto4Zs7SkN3GdNEmBrpTMkheqVv26zamgx1atRRnop8H2U8z",
  "key11": "38BE6LyhvRZNMZTwU1wu54P1qyb1vUURpF3GgvqgFLqqNDeemTfj2uAbjnmtc38uLiWhnAAgWLXMCAdk4vm1WYuQ",
  "key12": "5xHGxV8gwWAAowSD56nsRXnLbvaHKyBvU39VgPFuBdgSLqRcNmCvam7LkoPd5TidfhDzPZAzWi3yNwUm3uLAeiXJ",
  "key13": "3ccRg68FRzmvQfDx6PrZi3qehQQT4yn6NDHTgnqJifT51WgC1SuuwiHEV1iMRAHVYgokuDp7u5wDioHmexfy4oZF",
  "key14": "53RDA8f38u1aWfg8DYW4A4PoHz7GQ5KJ5SS8FmbDaoGVFkLCwwhyg5kZHykz2U1YSVcQd7ev97xb1yc4oywBFAcC",
  "key15": "47ekF3MZvajxWKf4bC9HCRu4ibi8PoRA71g3GgUCvP9vAcSWvW6GQtG5iggHpRU7RkR9fZdnoSuHcHu3uswXZKbo",
  "key16": "4YiwaWRfowL7vARrBhwLZ49srSaQ9KLTM3vnamRQKhgDye6wkWNRygTxsnXMvXXpbWjTBcArp3iiZzwvSveqAniz",
  "key17": "39Fndytu9w8EhEdRXcKnmmvgPaAqh5BXbNFUBPRNHMzECezVFRWN6DG18AQxz7p7PRuor53RyjHzvyzQfSrEcT3b",
  "key18": "2tKQvgMJToJTk5izRRu2TNUPqC6vGanaxo2FMutRo3oduaDYwWTQzaqSegJ6ReggBcu7fKpTiQK2pXATA9ztQE8w",
  "key19": "nHdS8VuJigRUB5q9e1Y7VhK1LVt55psshCBqBn396mqtrn9Aa9nupwp8ehnYCaM3uQN18BR2qXbH48eV35M5y4C",
  "key20": "9Ly9zXZWk45e5NcYjaMM1TxnZbTa2oqJWQRV2316SF3mDLPfq4qMCetgTuMk18RB3CgrnxRtdvBJqMo1QpcGA2v",
  "key21": "4h8xnVFuaHdZvLmPcfbdFhWzc6XRpzawLQP2koGaR23VvDWYA3LNYzWSEv2ju6YSrmrzJv9fJ5v2DgANMSGRdedt",
  "key22": "3U12ArrQtWowGPvE53TzvvNLidiRsiJmzebvqoujQerJa9GHfPWNQso1gxzQKF4PmBG78xEV15Z67qnN4DDqx3kh",
  "key23": "3JAyTvvJjGVzbwrWcvDDX57wi46g43LiGNEGBPArSbKSoc6d53dEF13svVUCqty8CmWKJz7AENe6nh4Z6mGL21Hy",
  "key24": "5iBPy1xQ1vv7HYFTjySYGrnEKWrPzzGwHEstDSSpnn5NvbWo7zLDTXQxyQDxaTfBAw6VErGSYkLJmxgUnkrteP2D",
  "key25": "219SZv6arSCnNcwVnhQuvThCrUzxMsfqes5JzTeDNnz6xqcyy4cAdDGHKLBp56svRZtSSBJfhjB8P45TCsAuJVdh",
  "key26": "4e28pde8x32TfeDiSfMdxUTE12A51zfNEDoiro6upjLp6aXbtyhPv9wTT7FZgVN3VwfiYnUB2djNrwNUFhJywYMq",
  "key27": "5EDg3ZGbg4sHQAdKTQQ3RkoPDPmbhyLsD98yTb8HdGFnHMCD5L15qGDwaHS1hEw2yexVKhfgArkthfH4j7mMDGZN",
  "key28": "2ysBeeeCyTqWit485Vm2vkrJrQVjEdQem2A4WfkaoCCYykqfAtPfCpx2aT1B5ntpobp51iDV9wtcnoBWAtAqzPhc",
  "key29": "51yccNw9gFWFginbgdZKZrPYLcdp2pBQsNbxaYcr7Tkqdrasd4RGrNDGihpFepsZb6wCidePbCDoBZfD1NcoYLVa",
  "key30": "Yuzw22a54yst9i79HKY7Bxj4KmTBQGXxL8ZZg5oB1PWomifSwXynS2SQjDDP5r4C8itv55jrBJyCL9RKYaWzkmU",
  "key31": "3EM7W7GdsV4D3uh8QcqMW65h6FMwhVFNpd2USaGw4RYwpgijMXLP9WCUz39iAggzE9w9UonaTF7E6btssRud4mEW",
  "key32": "3tXP7Prypg2Vek7ddaf4cPPjaT7ii1xboJDpeawEEBagp4yoYYzcHgdmSPEWhJRhKTzwn1oArXQP2btU9Ny5fqPp",
  "key33": "5UuCeBBmSqLjbUBvRFVcYEaC11Bu8wZRe2hMbSt8s35ybF26HDXgoYJ5LwzYQ6ouXYpxtMdxQRcVowtYgHn13m3N",
  "key34": "nuhHryjjz3qiaNApJS3aLhfYR2Z9rsTZLFuUvimJ7ZmXKyWFbYAShYKtCdTuD2PykmWLhm2XZwCjRV1W3dYnxQc",
  "key35": "5MUfHFzoQySn9Aiwx7Js1w3S72K9CpNNCuLPNUHURNdcz4ZbdvXk12pLA7mf7p1ksHoSGoR8mgNFMksbFd8JpvRX",
  "key36": "2T8RJP8bZN9v6qE7x8SLStsYHrdobtU8jRcTYnXTSu6KLJkntynndU8EpEhGHtnyoyxv3XbAkyqeE7ZrQaD1kDSN",
  "key37": "iENpQeV41et7qvNH8bk4w9nXstcKMyobu3TaUumTfmvySqsyC2Tnt2koepSLNVZ9q1aa9UJwJk3Zbc6DFdzFhvU",
  "key38": "3AZC9JaSj9XTAycmQ4dd88ZSjNhiwoHnKQnaW7awS9usNJWTvjtDsBi4nmhKv6Y9n919kWWwivJGjPRznkckrzy7"
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
