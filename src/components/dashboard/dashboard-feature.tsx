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
    "3gQy6B45w9h2KBwcUAcPirVrDryq5Kq1TUcbR9WBU43gr9VqgAakqxd9Q53NSQhCK2rVB1umwS8LDhdHvgTt4YEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kv92K8yRRAstkyBv1wKzLmxMf3QJdJ24P8fRUz1HW81GmALimog6vWW6BiTUNZzTXcXk46QYhYhKF2LbkswsQyx",
  "key1": "4C8pZH7KtwSAmokM2qxUmo6W79BBS5pX9LLzFGrhA55pTPnptWiERDckKFauzd6eyDk44sH42UCziD8C4pDrDT6X",
  "key2": "35CuYdz1ze3XbXytW2QP4pjZG3HjD1mVkougP17YT8LKa6hZuBknUvh4BziRPQtLbfw3TjNjPZqBLt9nJoLFJaGX",
  "key3": "NNmzo9VcK7M8W6GeiR3UG21kpJrBFVA6aT4jiMDrm3mGnvzKqprURjYaK7w7sion1U19XG9i3DKib4x7rbKamvB",
  "key4": "RTRZY3RikEawwHVcfdun1ZGZKUpnMhCVn6ChDJVhgRCDBESk1cS1x1u4TZJrVwh7oxK4pRvAAL4i6LQcidahGEt",
  "key5": "4RaEQu2Qjfi5iCjyQqQpxYVyTUUcZGoa9kCW3eajzREAQDr2UBGB4gywiPm5kYq2KbqK2XvpTmRMyZpmyPwDc7rL",
  "key6": "67JCB3ZbmSX3UaxUtLnjewKKk2fry6ezpSNMU5e8GK224JNY4ZXFdeqia4Sjv2dWCskrGddP8B3YusNqYwqXUVXm",
  "key7": "4v7EJgdkxzNTDWYWEwHZHpBJJ5Dkfa97eBz946tUrSDEcrPxemmxgirwxqHcq84GY5o8jgdmVf1R1X5gztYSuPJF",
  "key8": "4PmfPmJLbaxbmUyJpvan89ocTzduu3TLie5iXSfD9xrjoEnf24CuS3yozdtefxgtoxEXH9Z8aDbsYriaURztEqLV",
  "key9": "32dCaGjzC78wi3XzLryCAy7GzE7e31p5zVp4bmypFygqvmmwzGzoauGQNkRQTxwKBpx77v4Xzakq65fjRc1Q6rnj",
  "key10": "4H3CtfhAf3o6FrbyXQPeW7DGpYP3dyfMh6tc3QBPLWQuVKyTS5UDmnzmquCrdJ8jMRrn6WqezdhVBSBQZXbDdTim",
  "key11": "26UNHuXsMcPbVC1iuTtLoEdLkWSQygiMtFMYdivzwhs1NsPSi6MGCYAg2uLvVpBaM3MEmz9aZjEhZsYCQnZQjH3v",
  "key12": "38mxyhhVTWDLQJQRbbN6pooC1mTNdG8P45Vx1utBCaQiSBNyYSTC1iBiWgw8o97HTXRkH3pcdX1roG3yL5HKrLS6",
  "key13": "29mkkEjXxFtdyJBnsdBQ9WitZh6QGchzYPJqUCskc6tLaKF11CqW19CcvbemVyTwgkdaZnvqKhZ6WboyWcC2FULQ",
  "key14": "3adYHEXkxZz1YZL4oSAon3RmCKu9sh9ELHEsNBbHmsbt37aDgA1gPDVupLtMSx35T8A4FF2jdD6LEBadxB75vgXx",
  "key15": "3mneMhmCBSm5gLiPV5Hxd99gv6erXwo4w3JKg5Kgwzw4vTEPcMQ5tjqYW5xNGCJaLPTFwXHWT9fSt68exhGZuirp",
  "key16": "5hc1ouRbZRdhqayPfDjUWj3KRqC1CAXFc9PcB1yfGGGmuqZXTN9Jp7883vJw7SRSXzfRD7cpY714FzE4NtTZrEh4",
  "key17": "4cK1x1M3u4bxeJMc9nbbzzogoYoWBJNjHaw8TFRS1t3bsyyzCAmr7AB6vNzn9mNgMqA9K2GR3RvwYd3ZGNWAro2P",
  "key18": "36QgeEm6sV4b8iU1ZRhLe8x4a48S37LzL7eUqExiVBfTuUymJECx2Zx76mcT6qVasYNzLcooYWPSwKk6Wx3VPHE",
  "key19": "552UbpjJT8GJjRiPhQauD8hXMpV7cxmfUwwjJFQzofVzp4kJF95PM5ptkS8r6Em94MGXmMPxnwmMuHCJsTwmpPti",
  "key20": "32Qbe92SGaKpTLAY5VYnn4Lm7Cynt7f2rdL7XCKNUdSGmCPnZ5PgqV2GRL7c3MJ3z4j8MRp6FPr6dsN8ePpLxabP",
  "key21": "4ncXUZdSbuLgDmaSrJybNfFxCeNCVUMAUYeUy6ZQ55LzvnfF121g8KJ7XokciTQqkEjCH9ztooAMLXVk3REGFwgU",
  "key22": "DKAnX5cwstC7kWpmQ8TQW7coVq8s1vmVrfioD5maBcRGuR6HhT2w7EJtPCN2vUohW3tswCBJS8ncqdj8eMaHp9E",
  "key23": "2c4QyY7jPJ371zvkxwxmTSNsAjkMgNhN2wgMN64G9YRhtWYJ3tuiDK8fJzwh2yD5Dh1bFS7NttW9dHvE6USUvi3Q",
  "key24": "KawHYQrWdV5nx3HDJ1NkEdKgFDc9XKfRu5ehM1kgHAqCdY5bVhrThY7vNQ2PTMPSByPU8sz4L37cuqaQHQitDyK",
  "key25": "1n6bYLueGHeqMTnQpTq5aQqqRsQTgzuMvQqaaugMtW3tiuKQy2TuupFsQHLj8wuJpP1KBRNdpxGBsZdT9eJUA8C",
  "key26": "nquYoo3kQ23cdaAqdNWFxCmc1MHXEcz4rhDk86LVyYBbY5LJzbb7n3gQKdVWvaL4Z7fNjMk1HPmzRG8N5iFRJeN",
  "key27": "67VLhdAd7dnBXYqxhmnA5ShXyW1Ai96P3miCZgimpBm9ucnGxDnYpbH7kuafNgDktauHY3amSBqS5X6NF3sptbY8",
  "key28": "3cKw8seUYgc122Bp5J3FGL1KAPrCswL1VGiwHjSeV721RXYdnv6cpYx18yLAPfKYniHQcYJjednVxyw7JAyjF3HL",
  "key29": "2vEGdkE4ErF3VARzoyzBceP4cFt2qGmTYai1txWRr2CwSx3TXfLAM8eWHtpFvej6DaPnPPAa3pE7NHtRozWc5PXf",
  "key30": "VAscsj8FJaJwSYW42RzbRXdtT6sy1QQc2KHn7gT4uVR6fuDHZmppEm1STjWb4X3MAmvWzFQ95fr5ZYA984QeAso",
  "key31": "2DSnHetEGJFbMdZUbVoPCpDWsnpdy9w7NupVoeV5sQpTVQNBxtWiop3LoTRVqsLA8zbjCPZMwEKoYxMv1RC2Nt9z",
  "key32": "3Htn7ryWLacEFWUcyLuHxHzJRKJ8Diop85bk697yY8xssfrp5xQrH8RdPE3Yzg9vbxSUM1C21jj6nLD4jeA24EkW",
  "key33": "cdPxwRKsGtXC6MC5nN2DnrP8pVo7cs27K2sWR65Q8d8FcDtav972nCos3x1ZDn8NqPGqC2Q5pwz6E1pgVgKN2TX",
  "key34": "2aCpgvLtKs6XpWSCMxB4NSZAWKthpnesjZYn9uG6p24ikS5VH3aFZB4EyyCDDmkXFgAY7CnAvfUUgmFU7wCgj1Ex",
  "key35": "5t35fvX9928mGKuctxKDaf6MdhQL7s6Fs86R34KDKGXFZm9D4anHH6J3ggg7GK6BJMbkbxG3DhfmDHgu8pLyZUtG",
  "key36": "5Ruy7BGuAF25qFv3PqJ7YtFSHNog39exgezWLYGjqvonDCPVdtcvi3Y224Geq1PejG3GLe9DfdGEneATRdpDrhob",
  "key37": "5ZX5CokZpCPuwJbVk3uVeJBbL8KXu5zPxvq3HgkA8yfK7H57M4VSs5RbQq21bJJuW8rSEMXUgry7J55YKgXn9GV9",
  "key38": "5YcAXy84VwMLktFCSDnZoRbgeXe7XUUmUZrUtYLkv3GTkdmd177bvSjMJbAchisiW8xQiPqfD2NRAixfRdZkLgL9"
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
