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
    "QXM26nLPMfJ9WpLPXBU4LrzABA8D1kEJ8PAadNo3sVoMRpND9hMSXp26fpVkc1wwW6RJ1tw9TFrNPTVF86iFdbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zp2EmbP1FwPF33XVKzLjkAYbnZizXUkHA2RzpLaqDtqGYNqSSAbqaAz97ks4SmZaydF9NtnPNtJY7NLhzajR9aY",
  "key1": "22PJMguLx5jWueVjXHLDVz3ETNxyGK2JoiE7GzRskR77UgMTJgky6gHdzTDhrtpscngeht3THTprcsUqsT3kNzMe",
  "key2": "4PD3Dy5MmQgdEcH7LjVazHfiRc7qVC7HFhbYn4bJsfzsSW7wAgSzLyVozoxQLieZqNcSQqyqJZb89ACM6CKPNNmn",
  "key3": "5QZmbg8U9SDDe9883HyewaKiDbJ2ht69mk5ZyjqVYi6YgZtqStzZyNTpEN5PqaSuSAfCnFasFb5FsVC3B8FGU2Qj",
  "key4": "5WBiFLZ3Q7NAgMvoNWjFHcL7uNQrdyMdLHUK8wNc3RfVcMat9rjnHQfwmWnmAwocG7tPueLYALrfYheAXCzHox3o",
  "key5": "4FCRMNcR3ivXpQQnQ8Z9pWKvmsydabZeBAeZt22y6i4iAKaVCvniDsspEHamYmDWrEucdUbPALzpggRR97tuV3U1",
  "key6": "5SovdbPfr3CGGiedWMt5srZZwEUabWpjcFmLoYDMqGZvNpEghZ3ERxUgKgQxKa7nRUoMhCH8noebYhswe4JgYufd",
  "key7": "3c3Je1CBMdUy4z9uPdPmDAuzeE35rDwbEA545TKN2VLnedHMNZP4XZu8oeF7oL3J3nW61ksZ9BHsPb6fa91fuNtJ",
  "key8": "3kouQNGJdwwSCzKbRXAmxEzGTgmqdUqvsTFMK4x2e1me6FLaMhk245z7Mtv5axErgzRdQMaTagfwWye9gL3hBdBT",
  "key9": "5YLhzhgekHkZKKcNWM841iwdsocCcofA2kZxNpHmfuXBS2wt6a1EBN88A75NzyvR12vk5X2Aqy87QdAWbkdLzCpe",
  "key10": "5mfhaBXWhAHadE7HNuJECeeGuaGuEHodofEGm611uGiERg4uPhgj6tcaiCJ98KpuTwWrWH5Tuoaz4N64XstXA2xs",
  "key11": "PBQnwdTY6KcfLsvhVQ9p362S84B5GTjAnroMT4M6wttGeh9MN9E2jTtzu1ykcujb99LzYkR2QeE1ohKuHoVcaZi",
  "key12": "43nYQRQWe86mEWhKHuDtEyx8f7w9GXwPeizR3wr59jb8NwSQKpsWabG2vvdnEbP4z4GPNQxzfQ9GEHE6gURJNB22",
  "key13": "2L8PMaSfqvZa7fFw98gMaXwisovMQfkfbguJQgQ2CZhgRpuM6dPbQUZs61QHVPTsdb3bjHZafP5nweZ7LNYFm79n",
  "key14": "WSfVEEEVJm5zgXqvZSbupPX8Zzh2iN2zBM27pkfjFr3RFse5zxiMa9mG6oBVJ1QFKuW711TWm4GZ9YpuLjq156Y",
  "key15": "3QFFNHJqizeygzzKsvTMN22tmncEGComn2mYx9gWNX3cqPjAnNwwJfpJXWhVANp3EkedQUhguPXwuBpho11rYp9F",
  "key16": "bm7CXbdKbjMAtXjxXpsRJJbPV8UQ6PPJpvGNsmgZvuWNfCgPRxZEZns7LFsaCdgwSHGSXpsx7w8iPvxYNMVahvq",
  "key17": "4ugb538DVty115y2GXtPzPtcBqo5JeqYYeJfoMxTgCCVcNwAH6LYwVuPJjXchg8YR3zZxa36eK2L4S74dUQMph6M",
  "key18": "UTCBU3XQonpEhsj66LahTCbpaxdo75MuU8ACDbg17n6BwbBnFDswoVucdBhF1LqYLgZhJwUFYyTDvuV5vdcP737",
  "key19": "2dJDBZo59kftaEBtKwLPL76iSeKTKXZJywDLynAiBxT8XFXULeKskfNmzUSGVH7LXZM2HjGFed1r6vMSm1QSme2P",
  "key20": "5FiTP2iTpscihcvtvL7LoANNtXmd2Zk9UxgThGabd9FZaxs2GGJdKm38eBTmRppHNJr2tv1FQVGPnvvdYYFvLgd8",
  "key21": "4nwVRKoz7QcDDeSfynW8G5Scfyt4cvnC8AAuhARkBpoZVBbKYSHgngJC3yH9VS6hDvLwUbGDMqqDccewGQJUSTHC",
  "key22": "2S9kwPuYQ2ZnGDw7zY9owEynhvSbJTSoRZFfpbRmXavvTxckSGkRHCNpCmxq1JT1Q5CbofPUmTQf9gmxnZ5geiGb",
  "key23": "5bNg9eCN8kroCy3pgWBsLJtR7BeN5M2iWTHoqxRXGQQx7fNpnCtVqZLpGGUcBBmXBGbfaxLGv4xSMhHBxJ3CLZtQ",
  "key24": "3jPaCJQvN8k8UGcmNJcXYtyTHwPGvZwnLMXpFe8cokkRoU7zKdk9AMiTR2sS2AXCJm8MKzt1ErzcRWkDL8RbT6m8",
  "key25": "5tD8a42xDhcr3Wsn4V9hEbZhzNBVWAJPJQTuzQw2SLwx27agv6bg79BPAC67BTEKGc2UVFNMQWNbPBkApyLTrDra",
  "key26": "3FECGsHWoee53vk2r1eNQZpsUkbXEXLiVkZHdSuAPag44MrTFUKrLBY2ss4ddVV5Rv37gFbHjRyRTn9i5oqnLsMe",
  "key27": "2pS57iSeA7CUhxnopmrcFuDw2msBfLgtUrqZbRVMGu6PKHNmMQrZcY6J1KU8M9DjkJPHyPP6qHMXhdzwqZsjqiU1",
  "key28": "5wYkAe5gKw85VxT2b4UR1y9J2EW1UEzwU81tKsZVbAizF6eJnwM7Eby3mqgGggZBZQAcRswFqpRo4yEEz4kGAssE",
  "key29": "2gcnAfuojWY4in2jDUaobBEqyWJnmHqPRuNvtqPq2pyvzsRSXUc4iew6QBqGHcuaVquGkjk9rfNUUvJrmhmXJ9k4",
  "key30": "KuTkqVfyVps4SEoX3RM7j5G1Q1rhCiVcT6ASecJbktsLzUkkHAhgS8ACTVXnwZywqED2hj3cbYFYRRZ9h2CDsGs",
  "key31": "5MGkWMTfRU3FnY1FWgjdktDaBM8Tfgs3g1RbUvht4WnEYJv9QiZpSWrL522QMuRbSGkxSxP48oVUGC5yjAzKZRbM",
  "key32": "5Pfr8UNRXxuWkUV7m8ie9VcRFjhz2rcEBPyhXd2FVwxrtyQj3ytDvKHFy3rBQgccG1S3mVbUqgM4VHYxBijv5Dgz",
  "key33": "NUUiH6Fd5TEQpWY5z6bC6ZbzHQRG1K7oLNpuGej4T7x7PJQPjXJNmtVB8Z3BVukZKdgDR2E57TRCqrnnKryKyVK",
  "key34": "5UGsnxL4XDkbxkCELaXFr6JwByAKWYicsL1mHb9MeFfndWJfxekVS9ys1vxrRbmqsCDuQM5RA2ejJLNFPJ4YdCTy"
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
