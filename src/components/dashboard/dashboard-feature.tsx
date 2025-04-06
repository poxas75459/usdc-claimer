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
    "56z4adCbvbdtmyq1cBSvtfNVNpKSwPj1BNqGhL4QonHbEmXHJVvBa1pjFgmfVcea2WZSnkspVNCromwgPj5dsGM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Chic32fPozvdLiXFic3y8SaDqVp7SQvsYauzMgihuRwTjFwEsDQ1UHAwHUgqzng2apJu2TbxTFyJXapXGPAA5sr",
  "key1": "66q94hEyfh2TairY6VRsYyMLHyowCCPipujR43tAg5zZr2CqP9MdD5MzKArj2ST96QXzAnKEPAQXdCdnSRWkeGf8",
  "key2": "4Tdu54u2YscbWRqR6B4b7gzVhkTkFRvFH4kJVUiVHwtDDdpDgEutj5xHHJLzXGCc8c3J9CV4PwPcXtexESYXkQ4b",
  "key3": "4D5f3FnpsfWSoCGQeDQFUZSCnTsefY22QtmVFYbqpwbZYDxJr9csBeEtK8rnePnG7BR7RygjVeZ2Vc9GgyrZZZtJ",
  "key4": "5oLmvbbFAJsBsimUgcXTtYgvZyLLYas8LqXRwThGtSFbZntMzTFYjsygJFQeR5bJsXUMdHkiC7Z2kmegtZT5JxoQ",
  "key5": "3LfFYsoaNgudsZ4MbwSuK5w5nvNfkFPXCveUYumec8vMucbFm4gSAikPfNh3YjAWP8hioMVj4mZFGcxHqHixjJKY",
  "key6": "3hH7Tz7AFV8HBPd14y4QAtL5oxvzERAGxfzZozURvJMWdxDeqWSh8XRXcArhKv3c9K3yw9UQ3CqDbsqocnQkrLLP",
  "key7": "4KR6UW6LcgJTwuXaXC8vrjPBc2SgCBKsFE5UWvLpvsRKxFLR5Hgf4SJFmeKKWsHZd2QeN3TMZEQzKHx9vwnUnoxH",
  "key8": "3YnXSCbuZG8PA619cWWUpyTZFGgSTgbWPTsrMupa3BUviJLWohGkLYrr2ZD7tpBrJ7ukh3937zSYQP84wNR7tZ41",
  "key9": "5wGWqwbbJvS8ewxNUKRkicUa56tgFLyfM5A3fQpgXhNuLFsJGVh2wL5Eo7KYip2NKpnPok8FsJt5awCj2N7jCpqM",
  "key10": "43kcnomp13A9d6KEDWktzQxVSjXgQ9tmuDVwaYY5sRpyf7hhn5oTu7UeDuEbqmttdsRmvYDA6EKvNPueugaigCrQ",
  "key11": "3RR94GQHt2afsv5uJDfxACbF7keFziXXbcrmVNtbU2R3CeLs9QfBRgDCTTtWDYfq7d4ShwxHy48HPy6BYj5jtS4N",
  "key12": "5BXo8djGzndwasSU1m9jhPo5UfEZETgUk47yuAWHCkoCewqVegv9EqH8ApmVxBEG9tSfzB2VsxdqMHgyhDM8k1Mf",
  "key13": "5VRsig2ZjSBUsfxygit9pvkR1k4Jh68cxvdKP2oJVTWKRKLxijDi3RMPg38H5dD776bSAUzVcedpQezBzcBHsq8y",
  "key14": "5ExkC5j7mpyELSzYavaBYoLPqA8vrRuv9bhYGHPp3aYFhAnoQVT7Tavosb7FfE6Z34t5Zo3kpGSB81od7hz47Qet",
  "key15": "35QCKgA351jKthr5NDvy6F2JSFYxdY3k8BCLq1egu8BsJ3YnTE47xMD23aeUCgNm1kZPik8UpoazeetVm3k7XNh4",
  "key16": "2LTfVWzk6tJtgbH6vVaSKsUTXZSbsVQLWdkSKVJ6XbwFRUuHcS5tDTbUQrKvxjxCy6nrGoNSsTjkR8T9Yww1YSX1",
  "key17": "2RoYArfs9WsXH466yWKYxjrzA3dHGQ1CM5ZiFPZkiZjNrRHVqxriSk9a2V9jB98WW2r7sUWSzcYjyuskVYC3RGsT",
  "key18": "5T41REzsFds4x5Vs6mbPrijs2zByJXbzUNYfrpU4dX8b1MQZFFRDgpJX9cxWZbkrjneMd1vsinL8HeBvoPnEo5FQ",
  "key19": "4GCNdvEZwSsHKi7dLh4vH7nUDYKcdsXatAAeZUBrscHDzthyC8MRt2ZBDjqiXmwEDYB8Y2prj9Yrnzqi6jMtSkic",
  "key20": "3a41g9cvVEi3qBfM18RXApZs5yTE8eQTCHhFy5qgqAWC1SzWR8yDpDcVsQrinsEBa86jXfzggWpeLuveMYUUxyL9",
  "key21": "4shPXny63RcjvxXNpigLQwSVTGgKJC7Q8nMxhkdsvuqyFSaLEVuEq8rHWZnQHFMzfZseupqz4B5iFdtrSPBxjyDL",
  "key22": "5mcJAE8s1tqPg7xUji9au7bGQjV5aii5f19YLNi91MfkEw8u8NwVwFCt9JSC48a4B6BLejaHQeudCJEydLeFVKi1",
  "key23": "3YwDiXkXufZ7JdaqvuVmEqA6NghQ2vdfQ3BJZS7uG3kudvRgSE5cb5oWutvH77AbJzgwJLDCeUBaLcsUUi94VFfu",
  "key24": "4Yhknu5TjGAHQhHeX9HvYoTBc7NHtGLs67ZpN4TNtUfBcRNH3wHU22Gs4M5zwmXLrpXCk4HTFs9Vxs1aBJXm7yZJ",
  "key25": "3yL31DRPiy5UrQJ42Eqt83Wn1AKXF6vUHG21G5Wok5vozLyHdnaiBmWvRSg2gd95mqcUqgKwbM7TH9vha1D8Hn7Y",
  "key26": "FuBntmpLooyLJhVWqLzRtf7cUw5cxDSvTUxW4HFzjLTWm84cz5FFkq3JvcrbaHVTZWpTxiuTzEQsC3e3r2VTGsZ",
  "key27": "3ThhwmGQLQpLv1m353L4zD1zKMFzYw95eHvnLQydniFrhc8xBzxxmkFm6gtdZ32RywoGmB6Pezgi9f7oynSfzAy4",
  "key28": "5RwRWNE4eAT3rcaLiNcDWbj32mAR6j9t4hPAeUKsNi3LDSRCuqhwU25oSE1V3qW7sghbUYudSV5AqGQT9zZyFZwz",
  "key29": "54AC5zK5tmpqdtXXmR7vSZ4oi9fM82NaZtwd3hGW65SLqWPvHfP19bCj8k2Xp3B1Fh8t3nnB3X346yN1vhCWdbQw",
  "key30": "5CFDmhK8xMAPtM14y3cyignuv2dvMxYipHZderS6ZsdqKK7GHxM2L6o9D6AVrV8eiVQ6srtBeFARBNFUfHCer17A",
  "key31": "3c3VGWJDqvy3tEGCKVC6pz5NRq2DG539XQZCxaDybd9Q9qTR8hetc585z3ERwEwsfLKJqcdhGsrBmUTRYvXNx7CK",
  "key32": "5ttpNHkPuNL6whmU4Xn6u15V3SbvHDTrzLZyHJtNT6K24ESXSazo8gsxoAGyipNzKb7uYsfm6dpyKWFWpBd2xYR1",
  "key33": "euUR8LomrixFFCain4eKv6g5hvRGFDaymEdxR7L1bjPpqN2G1xfKuwN57DrTJXogSmPfwsP4GijmGMvRQSJnDB8",
  "key34": "33ZLixvfGovhVudD3LvG9M9ygtnAAP7kES17aH6KbqKEdw24o5idD92m3dpfS5jTYepqnJWPcscPk2AiL3rrnM1F",
  "key35": "2GEuEofFxMhh4kMr5AfVaD58QZzZ7n7PknMHVwuy3TfiqeRGmcgQg9moSHpPLx5GjxiiKWmyqM6UpY7qPUsJLrR5",
  "key36": "5Wcxy259FmGRNP67yQzpJw2BXqeSxeSqSVwswZUqLT8dLuTPZnr3bZpVVXz69f8Hei1FsVYqKRgW8UhNuAhEmVMU",
  "key37": "4Vgakuz6PoU7UzPxnkg2tjTNBX71YCHsLcfLmMHoqDLaR1Fpawv5osyamEJz5WMWKnbsJxLzpn3QpagDNQjjp7gB",
  "key38": "4ft8BgKijbadXTNuXzFuEF8UqF1cFRUkf15tXeaimEjENaoW4Zog91hjpACvMWPYrxji8YtGqrBAcLW8VZpNeGxw",
  "key39": "3ydh25nxC1WHJnjJMRoDRitSdGnFh1WSp8bJvr1jnZXnPF6HCCLUMus9JAfk9WXofFYn7rFampK9gnjTaMtUM5Na"
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
