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
    "4JSpF1AXX1yeqvC2dtAUFMm4n6dUHU2LeziZ7PNg6oquvxU56CXqDH4QkJWSRm9HV5Y6PFbVDcL7TY4j2fvXZrEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wk9UT54yQyRTYhC6tdANA1Qhn8SQWsHV9M6B4ui9h7NMf7EsTVZvAo1GxAGHENDZXCAL4RC48WSkRmUWGteDa3s",
  "key1": "5CovdUbXJreGWaLWxpQp3dsKzgvW3NRsJLjxX3r99xEwpDahzKmTt9t7zJHYuUSBArfNQ9qBJR6ZtvCRuDHyLacK",
  "key2": "2pvDKnKy6igtyxnm3GgGBMmsfWhK4iR8uWQBhtv1Unru5JDYQuAZY3RJyzBnm82ayWWGv2YKWpKHPnnBfg8qDJ5v",
  "key3": "49LVJ34N5XDRRKYhbEmBCHAie9yv4GXn7ZkhqBGYe7BkjaKUevnG4Bgb98m6YgJ38SzM7udW66XSusq3ZPdkNxFN",
  "key4": "4PZcZQL3mZMcQo5rhafwzYLgU6JVFuAhzuLbxZ3R2MwYxGwTDkPZ1hRZFDMtxEKChFa7j7RU5NKA2HGmDcFWAi8M",
  "key5": "3nZL8EKm2B5j87Yh4bThDPWgQLMEkme8Uyomew7XqwvnrMSyZCXZFDFhDwgXwr7PAtrytHooZiwceCAtr4fkkkrv",
  "key6": "5nCRB2RTrMJLer7uL7vnmcQ6cYF1fvRQ22q8jD9hFdNqEVGmqA2CEubbwWmkfpwB6mD33ttF2fvsBsgwiw7yG8Mw",
  "key7": "3EBWF9WQT8rZAcAH47RfB91YxNaVNirLUsn4gWfgH6cj4dVEBTksAKe6WqRzUprHxeMwgiyDCRZpvqmVoy1mrxRR",
  "key8": "4nPzAKDMHVCNCTVzgrvwaPyp6VoLNdZokzS8hwiXU4Y28TRREBbMYD5snA2i5fL1wETJsT2GBCuNFQQuixf7K6iz",
  "key9": "rEjNARb2XqS4KHfCujG8oxnxqCFZ5Dcjf5Md1Nh8dBCkZjKRYkYE4cPjUFbmXzJf8phBsyPcjnwUhEX61scGoZj",
  "key10": "55JAqooaYhc3wTRbqYZu9hbzKosoG9QHHF9JNsTihRFYCwsE1seN54qBijMN4iYNwY1kT8qbP2ceHcVajhnPLEbX",
  "key11": "T4ZvQchivNdnfyyNpzupa3pBnD5QsZkDZPKNppgVoQVCkmuKCF2Smxe4oZnWnMswqUZrX2DdXoFLVhScbTxW2ue",
  "key12": "3XGbfPWhdrgULAL4MTUVWQWsUsERc3DP6TSE7NTJWGhSCZvc5Z2J9S3EM1A2uTADt5Sv8Y4rqqU9iRV7weURPjPQ",
  "key13": "q5hWQvhYj27kF4UPXbC1FgRNpXNiJCHvJem1XaBauaEp8CwphzNt8njTUQEXGpN4eY7TGSQFAh1smK27AfWoRCs",
  "key14": "36mTE9k7ArVGYiDuuakLcqgm7P2XZGrmNzasEAqocMLAmgQQjpDrEr4f1nsPsKVFHba3HYBwAfEi6HbZo9o9Q9Xh",
  "key15": "PzLpdt2uwexJgFciLCAdprK5mPNMrcX1u1uXi5ket8ciRUken2hnCW2tgNXfrNvJ6z7TxKAoXXyJPEziXPDUbKr",
  "key16": "2J7rcUBvh4MAzXTFPu6cTZ6vZL97oimFNaEVeX5xp39JWChjWExc3vQwQLfMnrMcfULwPpXcfMb6Pc9rHVM2P3ag",
  "key17": "3nSeNjsL5bnEduoq1DD1EXtqd4JU1NVH8EsWP9aHAzaGWh6MzQ7pGYUE2zhWqzA7GuHMhmukLzJqW2nNeSoVs8Yg",
  "key18": "33Hpjy6uALrNNtE4QtPxY6NwyN8PbSQN2D6ZoWCBYpN2hcSMunJAFiN2jk2G3DBvuagu587sNGeSTyZ2S3BjDaov",
  "key19": "336ZBfjNoaXML114z4TBU68yj3iPrBdpkRCKNF9DG4uRe6jKhNATw91nNyo2rgohX18KEiXAYGMs1ZhLAgfH4wNv",
  "key20": "2UiWiUTM2tRCwoy2ENqjC1xrKp91koqrstg6zsBdXuRybnAUcwGNk8YxK74ibWHhCdWEpYrcAQ6TMwWtDNcsJvqy",
  "key21": "q3kYjd4ppxavTWdRXXPb7khoddWyGzuYX9mtur4rvvhJBpzM5GvgHZsBDN3SwWPXW7pr2AWPjzxSKdzNaVqqCpx",
  "key22": "u7H5rehMzit9WgyFDYP3vjPqCiCETQs4Jg4DQB1eVkLA7Gd8HYwVYmdWm168XpLK6BTeuXzazsQq78B6oyrsV65",
  "key23": "42LKgbkE919pThwxte4YDhQdFBaPYnAZWbrDqkx8NJJMttKzscgpePt433qBKzE3enpA5w2kXC93FQWW6zEHLqCe",
  "key24": "48R5AAPKdW5exfhQw8GakpPJGSUVxHn44VUwwN7XZ2ERCktyTpntWM3mw3L8LoT2Qav4XG3iybpTDiGQSQkWbETR",
  "key25": "ZCZ51BNAWd6h9dMjqtHQYom36LojHYPCz9DUaFSgQLcPjJRbuZhV1PJfiTPob2dg5DhrE89UBoxLkr2sPkCUVRM",
  "key26": "53h7YdYbLpRcTYQbRb4M2wdfYjLP44Chmf4CweNJUcdanHoProX3ckSic2Ku1QqLWYQ6JTuHGJe4vPsHc97VPQSt",
  "key27": "3C2S3Br8YQggKPGFcePH56s8itL7csEmk6BtEdNZLuHd7hJx9K4RBFPtwGBHxMzqVh85ez5jDnZFCAN3XYZob4v2",
  "key28": "3Ez6Dz6bKdUTpnfW2V4ZdyXkcFjzL1dM76QNHdjF3rHDpQ1KazfyUm5b6ZocUVcCEwfauP9bY8NHVHKWjt5sQi3J",
  "key29": "kCG6E44eYmCNj2ysFtrP17L3YSaioXnqoT1HbUgnkM8xPfhtUw18VgxXfnfyDYu9wPKhttufne7oH3VmzDuUTWR",
  "key30": "53hx8B74VL8wuoK4aNnRGzkhvkHyYBJRkzADzXCUUsJtguEjhQhJxdMqgD4zXQfoNvGUsesW4TNkaFf29oGTHk2W",
  "key31": "24wbrzstPM1d53nhmCaJ4p57xmF86KhZfDn89711A9ybzBddsxoHvfQGqLFWeH5Cwx1K7XA1rpi82FhptqHkvTU2",
  "key32": "39S5rt7A4rhCM1fSUnWxiUo9ytw1JbyHHivqLoWHU1e2F3zFxZaVnCHnSmKxpAsUQLfGzHep1vxHHnyaG3cCAgQh",
  "key33": "vsDCPAFUFM25X3LpmvrxkrssmJD84bLTjSqRhPahwKiLzrN1WJ4t5hr27zWcvjQUhZi197ksnygJF1ghuqEFr5C",
  "key34": "22m5hegzfQBMCd9DJXDJD3UnmUx41dRdWSNJRm2bdnnnQbuBPhpSi8PySEjPQKUfvriP1kJFcfZND6cvVvur4KYB",
  "key35": "qE7Xgmh8nVqRDa3xqHkxwKqtgfFUqVJqeLMGSURMuYtCA215h5HwKs56GG1PGnauz6tS9Q8jHRx1Xybuw3tW1H5",
  "key36": "4Y8bj2Fg6LkqyAuLKPyUKhGu4tDetK99m8MfM9ExEeGHtjzvvVHZFdjNR257PqT5mp2jixbMRLGBTCkzMpWe4tP1",
  "key37": "ygagx6AnAR5jnpPjRj1WMRwhisUxENL74UmersQ5LXuV7eESV1Si5TLdYGw2uFtBKhjtAsPeATQzx4puDnh5uNU",
  "key38": "2hjZ5fTN5G5rhTDYibozdSfoo4UNafb2a8cJ37N3FfDuuGAYJAXx5ua4F3GsfShRN2q1EYAxtN3n4D4wLg7zkAbT",
  "key39": "5V4wYDFTFvCjVtCoujZkDdmAwu9JYT5AKc2NVjDNXuwrhMNVBHAppNgsDV7s68bdcx8ez5ioa4aETyWvGfiaegnD",
  "key40": "22ZsTu96pm3FQEoAMwwakh2jYTvfTrGvwMn2oWDbyr1HQspCuPqGpb3nLHRy5M6mZPoXUu6h2ACKWuyPFow1XuKp",
  "key41": "3KGoWrYBRNoGXYfB2L1zRe3Tu2HP1A9cBNd3HCZCUGhsBwMG7r2gLtRL8vRcz4FpVFz6xrkGpbSG5SY6KcxB2VT3",
  "key42": "vfys4yZFzgDWWEqpWK8QHRgzdAZorcS5ZUcHbKoPC78LZsVyp4sWJiLrFYrDjSPxv9ZmYrb37eepYs4zAEAc7wp",
  "key43": "31h9nsYyZDwtU5dYofP2p8NeBYXMmSwGft6xmtm8sLWrhxfSVPeHvkVeaQd7EBpDAVCSGZjPewWyfmr3ppEy3hBu",
  "key44": "5bfzWPZxsYsm95v9d8Df8YoPo6xnx91yUKFTnUC2QG6tdxUGQCPKzcNWK9zUtzM6xivPorB5sxhMNCMTzbwSLQTU"
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
