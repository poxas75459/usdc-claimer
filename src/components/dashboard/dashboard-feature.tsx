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
    "2FmApaRdDMbVjUBfp4NPC6CX3aWFsbqed5x5NRZLdrXPGBksAqkUyjkmEFSiQCVN37yod3jQSYt8XgayGdGCqDr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCduoVJt3rpU6bVj5Uq8hKKXaZrbquRhmg5VzB4r3GMjRzTgQzcVCC23USgbGoz7xikWbHhBgqhJNZkUhjoNc8z",
  "key1": "4quyUVjZNX6YywbxSEPtQYdF7uU1cpUJk5c2Xv8E4yNJuEgxHDD1FWtyjNagyEhEQRrZrjydrQH27qzL9nqkeG4r",
  "key2": "4V16D8tECJ2t4zZwPqJGKWDn51ZXrAArswZQJMFGVeSTdmY5KZbyarqrn8xGAioVJs26jtn6UzE7yxz2owpptSmh",
  "key3": "4uHQtbaUpq4Es2JmWfqiUq3rjusmLAk5bkXt71tdswMwAnpaD5qs2mNwXCFzCYm5aQw128KzvMsKbK2BwzxeuEML",
  "key4": "44V6qcxfjnqobYsUMuHQGve8gdo5A7jF8rLxMsMviTu47yXi7TxnTJb9cZZVEfaF5iGVaiNKmH5awGgdLu5XXHwk",
  "key5": "38xr43iiQndA6t2PRVDwtbuSLkCfyG8bCkgCpXFHga6TPu1KWWUBMxMXftbr2od7tjaU9p3jHNGkxh8dKZ6M9dPC",
  "key6": "4nU5fEGjVVnHH55zXcKiixXtnVWyZ4B9h92vfKcCrbx4dZyjy4yb7gN8SK1ZxieXiea4t2h3eWStRdm9RvYvBiQc",
  "key7": "3yi7k5GhARaCQ4a9yhj9c3jWur3ZSAcUXCt3i64pFN9f6cMxonN6BgNc1owZMhvoKBJYw9ot3ptTLXdiWSjKEan9",
  "key8": "2n9Urwr1abh16G6BGMAENbuPWbmFNcHMUeLJxrSpZzbwA8cBQJdfsEgSoET3wmWeZTLmCwjeSF2xo9nRSjuArtat",
  "key9": "3Jdcn1pWd4tiUeqBj8tQXzDyCBvYwKGjrDj6x8cQ4pVVECW4grpjdZqVZiV5iDKGPALb8N8yZWrC5YwSReWPrJnE",
  "key10": "3CyH57iQCVm2f2qftPG1GusoU3b4b5GtJyDghgjZ9wj2vvHCRXX4UV38tR3dgwRVAtd8MrMEr2J79e72z1UFoE9p",
  "key11": "NJ8aQP9Xp7CLSTyxwfQwYNZVu5NTt6GbgfGzTgqpsyGCh1bTA5C4VHjpmq1QNBYuXYnLrGv3kz4myK6B5UbW6w1",
  "key12": "zPgxCUCxuXt6H4CftJZuFb25KdBTyJxUjdnGaqkNPsEcGShn7cNPo25WnQHdCvEohiQLjTT449fEwCGQ6ig71Xt",
  "key13": "bkTyZnsSV5rMYdyEgjztCoVUKhqCkm41FVk4mNFab9Vt9jSz9GtSHcqdQRGH7WU4yZGeJHKXFcbq8BFc2zuV4ry",
  "key14": "x6dADCJnM3WiZ4bRwQ8wjoXZN9SFjP5NsfdauYUgwCKH4f1VQeXpaHPn28q4r1X4tLTh7T5Wn3TwPzTcCnxnvBK",
  "key15": "4K8Kkh2u3Z1D6V8q8QZXXTTN2HZ5n2Ct2y67fhoziGhXQyFw1AaAE5A9aSDqhKL9jscNy8HYfdn3ontmigM6Hvzw",
  "key16": "1mFXQTMhGEewSR4W4R5WZjmhhyioF6t3di11uQmkH1RJZMVfoBjZiPGR1BTRQQMiBwLiZutoSkVCxzKDeyGbLHi",
  "key17": "3s5h4mKHrtBH1CqvNZSQEFv8D3Sn3tYSun6P6SFPxE8KsFKxPybwDuGbPPC4BF9fTSCUt1bskxSWNNwGYGLJWRou",
  "key18": "66ErBkKdUjK4YVxM5RXH7w9eQqi9keAKB71Chpbh9x5UTC9AyWpyvTnxT8joUvfjsVAKhNhEzacZQQw4FCKY88LY",
  "key19": "39w8JY6J1VeBsL9eMuAbJo7WkjXSuWf7z1LiaJ1cM7kA8hMpqp1LEptV6ForLBMP9ou8PY6BRXmgpm8sQvMy4aEp",
  "key20": "SdetuiK6GTneTS1QJerxEwhEk9CW7Z66ousdxCPE2LiP5u1oZ2aDXUjyTuJYAuFYXUcsvjL3KhK2DWafpdtWcNM",
  "key21": "361MWPVHY2C95XwTz35fgrghTq9zgpZwpzoYQeuKVRZo6vChPoQYHcDgUWsrECfXYr1eKo8uXW7SY67DuBjHJcSK",
  "key22": "BFtZS4kh53Zbv1n94PcVFGGqydPySFhyJQCGHD14ebaz3YanuxF5QroG8RQgjyfqVPTqVwggutS4SUFDCiUPG8B",
  "key23": "5j174RS9SRVo4AdVShFa2ek7c5RPprrc5UuJwEb79RNPoFmt2RFW9v1hD26Q6q153VY5tgpxFPKmtEkmZbHxxh39",
  "key24": "23yovthUtR7YjnbYyQP2iXy5fvi6UiBcwpDG4ReGHXrFN1qDRnbauKEhehemTiSfWPeXFRcFUt3GRmwx8yTD2GVF",
  "key25": "4cdZSppx7rSbQMnGnQccYkBSKZWnQXwWnBBa2uN5EZ4R5AqGZJodKq75Ud1o2YmDhdU5AV29uwkrCqipmF1Vvc4y",
  "key26": "SieUUXPam4ig2vQXpny6bSTueEbvfNUnUt8ATZ5uArMVAqxa3iehs49DqyVDTbSCKYdQQrkRt3uvfcLzYFwZ2hq",
  "key27": "2zfzB14AxePCCsBj7f1CeBnzcRNLYSgitBTPFBNDax3uMPuA8mWUc5Sw9GE6TBFDn75U6WrSkV492jiQkHtQKhr3",
  "key28": "4Ywvpo9zB1ETs1jqXLSdECTfFWCLjNawtHtw3vT66MYs4wCVeedk9AsAQntPZD8TfQm2GjJy2JVW2cqvq9yTPeyJ",
  "key29": "vH67n3vjws8mGm7rbbRPXtu4tyb99oipJJgzPQKXViZ7C5mhHiAbmPXNdxtVPvHMsa59JThZUNLXqiUEM62X2mW",
  "key30": "32wffkGXVS4hkNAwPJZpQeTLd2cc47xd1ExfZQfeTLqBamBE3K8sbi2Z1EAjfMKNhj4HQGPqtHrwKuPU1ECj4CuV",
  "key31": "2AGuK7P91btJ17273q5QxvVHkraRLAdmKnaPZhaDkJehpyLKWsj32eP8bA6t2yt2HV2dnHyNyTybe7pXpEEXJfE9",
  "key32": "5Tc3D43AJ5F3DQ8qvZY4EiSumZXkqmnaPVbHRsYH35izgM4nkrhNTooz86GXdu55ueCvK25zX1uRqQfuqh3ejsRg",
  "key33": "3fbm8WYQG3bW8SHe7V3CuRNvXGKy6vZ5iJnH3k1ywcYo5wwCuicMRUJ7yjmD6pMH7fQs2YdT37NaqXKSo4oSaAQ9",
  "key34": "5RkQFc6qKCacTAFUHrVkrspZLEMUZ1qNvAgXEn71cFd1hxc1yWobcpFgFb2k8qhkJQdRTmgrq84434MyobNV3VPN",
  "key35": "1fNzbYjbdnaU34VPweJTeqcT6TnPPJh2fNoGuSVsC94zXZ2fGcxdo1uhR6WD7PdfjqhdHqaw2x6rVvctuYs59St",
  "key36": "3hxE2ATCiNfhqPY3FHzqGEHD1y4Kd16wqsaU4TmPwt8FNWc1YY6s8UeWot5C72fkp818VyzqW7PN2eTZa6fYYi78",
  "key37": "2Hb5SNNbLicdvn8gLzZR4p1hwk3paB5EQ5fQz1kBbEtniqyfdkbDCjfqQXRCAsNyrq52C9okscAHketSNiLqtvAk",
  "key38": "4P3ym2UKqbd8s16fDdgMyRKQGRJYyy3sY3vrEbooM1kBhJrn5Kiysm1pUVxMqtUbDmQrNAc1MzYQTA9DdzUqqhcz",
  "key39": "3JVfBHAQoTfXg3Dv8F8cv9Sub3JgDp1Pcy4E8aBu1kmsZRGz9MvrqbUtnVXpMzNv4FCviuvFYEQz8dTkpzs2RT3Z",
  "key40": "3ca35d9jmK6u9gwK2gXHhsAfuuqM7jUbYWFtg4iTYMbzwpSpKuQCHhAUQHhTfxdhveJC1wL3SYtZ8zBjBR3pHphM",
  "key41": "3GPEcyZPDPxSewyjcTWafBmoofftGNsfbQuHcKmGKQrf3n1RWvFDJUZJ7Sm4u6rbCsbupC5Xmow1EWaRNSuwcEoo",
  "key42": "35izsAoPL8pLUc5fYvdNUH15ygSkFCpoiLz1HeVihRYeKRKnxiaqXwyXiZfrwVR7fuNxDv5AwhXJSKBt5t2MFTTT",
  "key43": "31FBUcjJXFEJAuxrKYQFnzZGJTbW1nsenZzC7bygzcj2RK4BrEH5rGz2sPFpk7afvnUVYcjb9wmU9dqSRS8FXkHd"
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
