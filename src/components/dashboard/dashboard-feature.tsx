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
    "4mdi2CnUiNnbHsyDVfHRFh9Haa4NBHM6KBxxDkcZfQ33siGvrHrN5VtwpDmcpLwvfQKmENke39413umBC7dsYMuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2datwsJizrbmL3TuKEJ4ToYAd48QQVp6zJQWeUTC7JQDn8SXLrDBSrUGHoZBHv2sEdRQHBPSbBsAUJMsypnSZPpo",
  "key1": "6Q6JkgghFsPNgmdA1MY3m5VMTxd5XGikfxPYuGH7ykUg5bm4LbZvpnYXxQBqzFZjTsFSgg9NmWWqwxfJnq31PUw",
  "key2": "5YDQU43KnPVJXknkGP3TRFMJLF9rH6UKi2oj8ig57Xpbb3tfdxh6M6GtPxSnfENSFH7ZACDUyv6LBNBbnGS1nekW",
  "key3": "3Fkgwp4j2bLk9GANzfbtDCayn1B3mv2S6DgiMywkZFoovDBSz2bFSXr6PotTLHJdrHcEAZJKxrNWsNVMWycLKn1N",
  "key4": "GmLwmE6zAjdFiaSXuocWxg7RfmX5nNqi881Hpts7i8vhcfa26kUGzgTzTGrBG2CNMz9o63EPf5hPg7wcJSn5sTz",
  "key5": "3RyP99kZux43tRFmBxzC3tESGJEVczz8e9b8T7CAWJKHPL4nz2orYnG37h32aa7SrRSzqoMiGXaKXjas8xiTCnif",
  "key6": "4CnMv32wpLCHodTMniSSCoSxMGuY9D1u7K9a7K4PaTv3uKCZZf6s53A3YGm1acX2sTeoXTdFr3nPqk47pR9rhAp4",
  "key7": "XsFayMBhwxqgAksBhQVeguMajmhhocP6Vrzt6GqnQvFSaRYF4vhy4ZLgqMBT4A5LPH2TNG9BXzAzdNQfEPT6r7w",
  "key8": "2iyPiQNQJVjAUWEkVb1wuPjUubE4mwPySCb8UHzoLAgDAfSLUNtboR5toZ65XfRPxUHh4rjsq1GU3JKPuSDJfviQ",
  "key9": "3ah41WZK9qN4CYrMJyG8WgjMGWPDMpYAifknMRQQ75vcJxLG9Dg2HinqNNGhqeRe3UbbwtkKtXwpDMuzP6wqLEkx",
  "key10": "26tvW5z3RL9bTKkp2A1AX8S891vA9rsh8EawnbPZsXgDgWfp5Xg4kbKiaaAyBRiWZZrrTpRfqDfWXgPUYbudExm6",
  "key11": "HZ3fkFhLuCYwEkRusZYrchPDRGcEYMcNG8aqbhoH8FfXUB2tVsaNVwUK2v4r5AHQ3LtvuoCoehP9uq1TZGp6ZJx",
  "key12": "3p1iQSN8kpaPxYJDVpen1vhj8kQSXntgPovTLGPMVssjfX5K8rnAAwEvt4zt4LLAa4FEKqRuZnY38rnnKyfszZyG",
  "key13": "4C2nJYiN1TsREEw2vGSCR4NCpS6AWzWJJ2gCzdVL53KJd9VZGaiJqEnTcyoys22B3GoHZR2pr17i5HGWR38wWCit",
  "key14": "3Bd9U1pPU7tVdkuLCRWB5A3A5oCHsfFX4Bfgoszr53fS8txrAZMMDu9Fv2ZkPgWqBPJazjRLd9ea7AkiJ37q82RS",
  "key15": "v1rTvpgDbbfTuZDYx6ALF4boPEzWxfHqQxfQ2kAL3ewHM1Z8YUdq1XERudwVH9SjtZ4zV87PzugGVDPRW1NEqX9",
  "key16": "3oQMhUCPErGmRnxnBqrwA7txAqCDyY9hNzycrrUBBiAwpFbAgmZoPp8cpZ5fyuZm7ryZohuGSzz61MkUxJyBQBGa",
  "key17": "ZTgEAbx6g5ujeAqbsBecTqSfDGSMYuhKt6SeoqJiqkr4AnEAkRNuHy5Dab5h14Rccdp532hzGqPzgxmHWmXAAA3",
  "key18": "4zLSozAZN5YudiXb6R653xj7FVYDR6YzjCNpHje3zMAPVwTtAhvuKAsx2Q1QUQW9XiyG2gge4wRApVB47mombVaR",
  "key19": "4oFtcwHebnWMDoXVN8qDb4Nf4GjTc6vx3iyQcg5HP34CYXbv6scWpYJ45vyHnUjzUsgV72db39FCVi6qAdFpJpkZ",
  "key20": "57FWmhweb2PEERYxcYuw3i1Vpp8f92hfCdxQ57s3uVLTpHKxXzaNtboXg2WmgxT6oYzJYWZJdqfMwKdKKsRdDW4i",
  "key21": "4BmHWw4rrKc6fotpwnqP4SZtDiWkEPMyQ2M1brmLUfhBCVLUk6N7Vuq4uA21e71DjmRLiTzQiLUDJAucz8a1gCDm",
  "key22": "4fDKeFPEFXbXcowZPee5Fvt8pPDLXn8v2Dwk5MRhbwsWkPtHnv3yQoXWo2sFuHDJJqZpcmPFEAQms2L5MxrPaywp",
  "key23": "593g1LXrqwm7WeypraNKyk6bR8H4QXvX8LcgWXEybjRVRrcxex1zY5aE9dnC1Huas2882DRSAkm5CAqM2P54frqP",
  "key24": "3qJc4ZuByobxzEPu3YtoWAoGHGEJDVooo6Uy5sMfJmqCfcrjmZVruZ9rs5wK3i7udLSoWEszoadQXQFYEGNP1X3z",
  "key25": "2FE7eBDVX8nALk5Xdj521uN3eSr8Bjh6yaGuBFbwsZ2Eddc4fTjSYaJ4ViSDhmYWt2gYjdVpN7uS1t2JMc4CAM2j",
  "key26": "3Z7YmwU6SaoRnaqd53zcMehnVaxMFzf5GDxtM3dL7TaP5LMR35MZQsGLqRTsevMUHMV4Dxv4eQsBcEmkqYyX7LRp",
  "key27": "5othixwknym23D4LbeeKkgH3uaNguBYKm9yNdPQJPDsqD7ds3vdTg3gaw7xvynWMgeSQvh8WLfAznzLh2LKXj7ZU",
  "key28": "5JoLX8Kvjr4GfzNYkeK3WDxTd9Fj5xPkA8KRSkjjam3oi2NbTGhC8ZYMdBNJVxdxYyGY72ShmqksfQ5ctFJtiCpS",
  "key29": "2zfwMGSeruE9tW9zL3vrzmH5CC2S8AYpJ4JYWKxP7Yug7b7pPd1q2EaUztrTC2zpa6oJN3XH2cyquiE8hRYmVgHZ",
  "key30": "4o74JRCrVC6FYdp8XzFVhDvL4YwZAfmFVYmzmhRkcDiVD22FwmQKeZ2AfLzmR46pSMppNTDM7FnbDXrUPqBPsFpJ",
  "key31": "5h1Mnesew2EmDuUp1VtknhA1ZgZwxcxQmdFAVUyhBWMiWKQaDGy8jfPYMsBERM4v62htBk9euPrLEREZhw6B1Rxx",
  "key32": "ssfVxBmAg9ssbvGwCUNc5g1h651EWRn6V62dahfuLxs4UbTXsnvW2D71iKvgYCFCKoRFA3xUnr47SAFf4QJVHsu",
  "key33": "4CWgoyQLjk8CxXEBuVQo7FzBW7jNhrQs4tV43Qk1rzjTzxU7aWCgB48EfzGEx5oPT34mwp8RZJF7TQxpKUtKfEM7",
  "key34": "YiWXd9sRdn4zzV5GuvWePHPgv2hYZXZNvWvzw5a1nnTYaf8zj6waDGEUxm5eWa9b2ES1uuTG3zrCBFkw7UYEHrn",
  "key35": "Gy4J4BPTrLTVpscTnQbVgpWBaMS5SXSYxQ4gyEkSkxFFQX4xpVyin7mxhtjhX9U18ABjAkFqXn9YJL35V5ekns4",
  "key36": "2WzK5PrJUPVadGZfLEDzUhkKghRgNbGgxne6PzJzD94yJvEi9P6gmfw9okWcaxBoy5u3ao111bxJ7B3kYeHxbDwo",
  "key37": "2UdYtynMs7fWe55D6WN6uQBKaFfwMxAzryy5zjKqvnFu4EZvWNBQygsnMAozxQxxNXH752NFd8ny5K9WrTcCnZUp"
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
