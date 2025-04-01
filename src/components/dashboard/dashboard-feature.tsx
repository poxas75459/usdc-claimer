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
    "3C4dY4MnyAqtSqDxcmn6aUG53zuXnSdRFaoUFEceQiDDD9mqCfKtgfbu7uaAxMXdS1Y6VFgUM5nvVDuKawn3ESJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qkUXgHMqpmPzcMfkonAWSWJPLKjuR2nursvdyA1wdFxxu8m5VqzL3PmfnRUX85xdrE1xx1YvcKddA8C6JaBzsn",
  "key1": "5DgeVbg4iVnmqAA8E4jJQZGLszpfUpr4H6XkCYQGs7M2qz7HBBrCc3eJ85wPt8XcdPxDBz1Xxh6F7xEB14Sekzpt",
  "key2": "4A5R2EUJ7DhAT1WAqkMQAep5vg6iqP3X4jP5hCSc5xo6AfkK3SmcRwkjyywNnFc9PU3DGrkb5iFVja5LwzhH9d1K",
  "key3": "DPsLk71zgA4pfP1RCXVC9wJL7DNgN8Ty9TrxXWUZidZbFczNW2rYQafb6mrAhZyJUyQ4NrZNX6h6etdYQWxPLLr",
  "key4": "3ezY9hrQASyy6TpQY5Hz7BPBqy9CmvjEptqRtAtDwAbP9bbJyrJg56jUMBuZ1SDjsHnYjLuZB3B4CE6TkoRaQucP",
  "key5": "ZnT3gStqF7EEJySaSMARCtLAViyXwHEFtFwiYSQHfznr7LC24ESiC5WnJLCxN5Uj63ZxKjVhMho35nh9jTAkarR",
  "key6": "i4YTSH9f1BGHcqXsV15yxnUpc491s3bJWtKxHFM6ekr1qUvLyV8D7EUKkFwuwbjthtGqM3Qw6N4RhhznT3TvZgW",
  "key7": "f3JtDWa1zMiRNeVPayofRxAeepTeFk855rroh5ZoDqKvV7tX4LPPXNP1ECtR8vXA79H15BEUddQdhzEVCEBAG5v",
  "key8": "5Q1rYKGSFTTRiZvRupjoJwVvPHcV9aDLoCddGDoh6aXuNriroTW3SjxGHrCuGqkCdrTMrEMgNgxZGseFWshibieV",
  "key9": "4J4z8nKuADHHe4pHFTknosJxXdR9gHWhYji7GE1U1pvU6g1Y7p4hiR2EYyxeNVYiSjYLe8jurv7dsQTZELxhhsFS",
  "key10": "2BG1Y2dL9WutHAAtXvKpo2GMDS1UNeEYrmThTGK28XNuiNSoMRvDpg6SivTtAubo77DzfNNc5GxTNLEK3TLdP2ve",
  "key11": "3VgDy9df1oWSRUdHnds7FSwbb8gctjt1czRqUVxe1MjStQJTNwC5pA5ZMqoJgg7VHS7W5DQsaLNKjnZcyUzKBtKr",
  "key12": "PTWrjKRU4bW2VnsPLiGPgdTLGqQwsDV7hMM3gYK5FtHfmRHZJoQWfpNbsvrqbe4472Z3ZLFAtyQ627nZWtWbF3G",
  "key13": "4ErXus6HAEwVRqm3gMuY1SyEUtTUKmxNwu4RabzY5grXfH7RhPbfXz14wpoJBrkyucCfHHGHH9S9yvgYrgpTAVon",
  "key14": "37kLXyAPd7Bmt38UPLmAc2drgPKjhQV9PMisiExXkem3CZyVdi8YJnXTGivcgT2WgnuEfaTYf6Qvy9yseTCitYAr",
  "key15": "4exB4AyQ47Hpi7WhCDcxryig99kudTYuMQCWHh2cUFiKEnsJiKp1LtLH9DqDRgXbqGZ8wnSH55tiZwnm4fNJge42",
  "key16": "3mi9Ukzydw4fcEWcYfqYVWfFt5qV7vPhFrPW8S5KuU2gqGQq4FA6XKPUbE6awyUiAymnknMdKg1j7K68rSwegUX6",
  "key17": "4eqfPeEzfSd7YqqyV9qFegu5ek91Jv4aTsrEmHwgqbsZ4YVSPKKmiXx55YeG6TW36utsNmRdVFvmZwZn42mtBwzz",
  "key18": "4nnSZcMooF4AwFyUpm4B7FZGCgXeZQntSvDq2f2vJcsmRoVqXtAaLMgGkY6tzgmpzrvJFDLh6P3j5UYFtMD7kVC7",
  "key19": "2eqWzCTfrRtBxPj35WMnN7HpVNMQFPkMsQhZsSUB5deoGaLbaBk7yD3efypMbJjjUJeN77sqmhvahdE6DKfjDkFG",
  "key20": "3v2B5V5NMpLFmEvsJoqJYwiKo6ZWubCLWESXcMdKBQjSNG9L4Lu9cqDmjTSoFifRkUA15gzdb95YzoZ8LaGs7Uni",
  "key21": "3BiUdhjeAGsPjxr7wRWE5QoYFSLerFMXcxrLt5AtzPsa3BLGA3nUA73AQexrk1fewSBxXkPcULE1HjZukUEXvZjx",
  "key22": "59QZ7Twjf1DGnGVDsgeFZUnZfaPsAFibDdqefSFsH11twnE9Xm7EDMfBtsFosnoRD6fbmpEhB9bHgRE95n5hxHxi",
  "key23": "5DW7MTZQY3MbUJ3yYZptWrbmkJubM4rqxABWbFszUxr1uVqC36oqKmyoAL9B4bCzzZv5V8HhzfkwKd8rUXEYSMYV",
  "key24": "2jC1gtXdWxyeYQtjPbrAGZMNkUeXYDBszKqE7q5GeZmVcmxMtteDhEM7QAkwRULkfzA7Ar5aBD6ubRza3CagYeuP",
  "key25": "5KZVTJFQGsZq4LujechDd3eQDuUqv5eghZvZffnZFUNrPjQ2pCfNbwMvDEpJTQfseCJXLaAGR417cDuxAaLejg4N",
  "key26": "3JyENBjfB3JM3obsN5MKyonSjewW8A5nqvDTAtqmrHkuAhd3hHH5CfqswWg5F8nz9ZxPgEz6MC48Tikhz3V7TKPF",
  "key27": "63X9iKovKN1RtzPm1ZRcPPUaEvAboAAHgnhCJ8RwAAaGsHywGERJj2wTS6ateNu3EiD3YwNNcGYYwiUyT9zrT6vd",
  "key28": "4WZKeKDbW9DXcaXkq36rfqyTsqoCjyMVbKTK1pfLdczAN81qi5YJU22af6MUGrZ9wLiNZxb2BwLKF4vZ3C6Q6Kmz",
  "key29": "5gaesaFRhfKrKf8EiBVS3KjHfCbw9G2ijtirotYrejuxRLcF9vuqpHiEcgVJcTePeRdsvd9EZWAszd8XR5Gu8Rru",
  "key30": "4g6pd7zyuXbQHvBu3ta8MqLHC834sb1hgbrTxUjT1HRAf6qKaCuSrQ37oGAr4mu98XTMR4atDdpg5t4yUNhGxhTR",
  "key31": "5q3kEx28of8ocaXxSkCpRLnT8oqnkTN2my1fhgejDDjdZd8ZzM8hRLM3Ny34LaK271DTzZt4zuYrvkaoSfy7BNmr",
  "key32": "5SYZ4LshRCegA8rSh1VCeS9rdgJvP6jAfjo4Ak9RYi8vSh2SKSGjsmyPrKHk3UvDZrdfec7v5Nb9pD4vvTY48ZNj",
  "key33": "2ncx7hgWf3MuGLuHJPajPSao7U1b9TuL257kHiB6DyPoCpzTTFyqaF4h4A23PyVRv8FDYs8ueqjJg6eGH8iUpzb4",
  "key34": "2ec3mEvFRqozct9mRRXi1m3bVr83yiQKDPZjQy6b8pfjg4YLEQas1oqyTHGPjdf9VuRu1P893DVW9ZwHRQXVWXAZ",
  "key35": "3rrugLpqZjvctJGwW4pVfgZtchMG4hfg6QoQHpDN2YaAaTZjMXFhQukBDPvjR8BCktFwepeVijqfnZaPzzScUtP6",
  "key36": "5pQq2tYUhQuiTEcPhEgyNyk8pcwtaQHNuZjtKQBpVVXgva645BtgvMKmGath9HA6Z2wpq5PNfU75goS6fZxyrBJS",
  "key37": "4Jzta7kDNWTjzYogzrdxaYtfe8eDKg6mi217Lr6FtHDrjFqswKEBytEnjZ7MeUfbwad9wQWeDP8J7Us69nVZLrrd",
  "key38": "3hiekRkt1xPvwC96jw1es5qcm2aLP9gk5EVA5zoWAyD7qeEdZorVQJAykSwiGVbPFNqv2RmG2YSQd6aZgnAo6uhY",
  "key39": "5qoqXmbzzDsyrnG6CqUmH1pDB6pvi8ra4yfzDjVBFeReJwHqbquuYS1Cb9drpo76rvVFAz3MUawVWbxXFVxoPJPm",
  "key40": "2KPtWAK8WHCNAQaXuCBHMJA2HJi7T53GZJ6wuqxy9Zn1aDugK6LVP251pVrWBACp8uaFzsbqe9h8kT5WkC9AQmVR",
  "key41": "4P2QRTQzfJ7JHrZodKcYkUtC6Nco1XbwEYkFjmRmQLSVhhj9dVh7ABzHK95cDWexQpVZNbmHpPZzTLyZiC8XuudP",
  "key42": "3pPePvzRY6opLRPPwPByxrA6wnJQyy73nzx1vCxvUY6u6zSG8gmb6mqWoiGWAjF7e3kWEW8ymFJTT7E1yYiHzySx",
  "key43": "5k478zzUtgbrY9mzgQ9RiA1VzGwdRGRkEiPNCVaeP6qkmJrb6E5At8fxwGiXRi1UmXFgngfAsbcZkzyFm9PFAsQQ",
  "key44": "3xcvn4km3B6aPFqyzGnzL8NEd8oYe6Vt8ptoWgSe1hjnhege6RbLgfdGCH537QfU9C6Noq15WT6zgQVPTJcqeCbn",
  "key45": "5V5AMzH6PfkQSXxjMxqZuNTZpiTCgWX3nYwZcirWEN4wnFXjFss4ThbSUFKiHvPWG4MxUkYqtfmbuTaa9HiqxGSh",
  "key46": "26xQT3Mb2HDQcPsbHDXiWURFdpkDmrxmXZLDsgyUn8tcrarNTHxMwXWozNryRya82KNK74HUkGUu1uBuKp6BSZz9",
  "key47": "4TAykArgEwBP8FdbsFQuHPGMvbqyTSwYzE8Nn8nb48FGidSnYkJNQedJ8Lob6TQ6bJMVniarcejE7cCGZVtjtL4v",
  "key48": "4n4nBrASaAoE65bpnRiga1MAKJanjthZMhRStLxWJkssgimzRyjeDfcUGPHMn4nrRygV9JobmTUEwUKnQkTmAfhp",
  "key49": "9w9RS3GaxnY9cNLjhkdcqnQXQdf6thLqtvyz3URfLM5JGnuhgH7PT7Bq1v9WMpZwEegMf4VJSsRPayzaueCUEKh"
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
