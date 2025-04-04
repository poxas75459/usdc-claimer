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
    "2MCnRJm2WHagWXG3h8bP7oMTce8iR5i2XZ7iS5J3bam3F2rKsyPfzVgk7yBS46iBMFeLDfwqM4rYADMRGbqTyozZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55p3YZromZVjJQxLhdRgoxUrFqCERosxzRzhdg68tpdkBEdk8c43UQMNcChXRk8NJvpg4eoCpLKy6TxTLLmfnRFg",
  "key1": "3NffcPMtdt1Z6xaneV8Po4r5Ew3JApEy1E4ZEYQpf72T7JS4KYSHS6KwaLRoqznfKzPUteURpM5Y5oUJi8it8Tvb",
  "key2": "2ddmdZrpM7nkcWUfFEzssPKmiUtYTWcdK4re42D5Wbq5evmXBAwUuh72DnD8LM9uBVBp86jPtLcPjqyxXrxDvuQ",
  "key3": "3GruJcKJPwonhjmm9eYch38EXCNXAf2eEfz9qpndmZzP4LtvQCdQZWWPhQPAAcL6x9KGh1aKCnBTWP8cj9hn6Hyn",
  "key4": "3inXZ4U3DgkAXhktE4soeoFEBi3q6FhDUzJZnuH9SxTanLV9fPpZ1mHHhySMTHau2ctsGQuvkKWQdY9gpuGbgKZQ",
  "key5": "4ZYEnuM8JHc9ksDMNTH8SXcE1ehA1tWLQwq2B8p2mzSG6qsYiGRbu1ceDbCQUoveJiYFYgkGXJKAaULwJqDua7QA",
  "key6": "yenRkmdJK1NUAsTsKQyKTzPeSAQx1EYU7NfYMmScx6HJHM6GDh5pzzSAZ9h3DhsMS6zhCLtnVA1XG9uRncgxMuY",
  "key7": "4giHtQqjnU3v3VbhiH37LhKoMxhDEtVZyysvKG6WXLkLmir54MX1fyBKTMRMqRjXCqZBAFmktDujYAPR6Qt66WYK",
  "key8": "2vWgp3aMurKTfFUCiQJafXZoVg3Vr5PgsqVq9YLSzC4VFYAuV6eB1NZGLccGrkZAgsvX2kFGYjeFbPbVT3MroR55",
  "key9": "5sbUWk5bbE5u6MY3Nr1YUUe2UsB3VvMzAZec7KZ4PM9VmcT1BPh7sQyFmaPc9Z9NRQuXeGv3rpcmGAW1EwZRMDf6",
  "key10": "2x7YmhmbSyyyDJaqBmbZuJKpXs2qTb8Zz671JNBjfQ4Gy1uUCQ9RgxBJptwm1AxHin5qPr9bPz9eLwffRikr6WkF",
  "key11": "ZjzP6k1dGfr289g6ND3yjSmXH9v5UXFRputKzVKKMtVbWPa2dzwKWzycrgnph8pv9Z78d3U4R75wg3jxMwcNi2U",
  "key12": "5dJtYDvH8A7GseSwuSUqTKESP1jSqzyW8HzyEm2FRH8ZmpeMnuaDKPicVJ29ABgftQkPGwfxsjooviXsgxxEszPE",
  "key13": "46uFdoW5JGP4T7n4QvHQqVVrBsrodN1VbDbMMsN41oaTZDArMs1tQojMRc8qQEsuLiba5jxm27FZ46UkzxTAiBWG",
  "key14": "RH8qMKBQKyTaAYMKCMsFBsQRtqsfQN42poxbrWnfp1gUbEsPWaBfmo7Ktq1HVcEEhwDHNN2GbakR1LQqLBQJJzk",
  "key15": "3DUh4mbA8ygnZpPa7RwHmnM2NS7fVT5rtNm2NRUvVQ1Fy8xoxM3tkFrvmbdG5yEC7DZamyCR9PVYAT7iZ4WyP53f",
  "key16": "4GqRbGcUJqTVN2P9hsi8o6yruGHo2ZVCmCYenZwZ2C6CZ3jZahLksjdCcze4MNBWRKHXEvdjSRZoLsVyLuUrghJL",
  "key17": "3oX78NTLHRzB3uTuuCm6HsjdpsKqjXS4viWtXT9cQsQzqvpFsYWueLrwAupecg9LJWXPGteVjMGVTgAJKuwqf79M",
  "key18": "24uxUWzrvWB69L7rWBfGHiba4fsESgjbWZg9tEVkypFhGQ6tqDw6xaovjzyM7R56Hdp2S6ACJWUgxpVKxa2iUwAU",
  "key19": "Dhth2JrkHm36TwS79wcGP7dSepmdJngVZCmd6MLsmH5dJLQZ2GEfCxrb2i4z4JHiRtT6DbHKXFKPzg88Ypc2uER",
  "key20": "5FTu9X9Eqo7pLsuK6Ggc2oTZxKo72GLxeEn6ToUnTWU8r3xoin4S45jFrhV827t1Qzt163MSKfmXehwqyqfpDMb3",
  "key21": "5Kyu6XhMHFNawFWgDTiGDYh4avV7LUZjR5Df8uaHBZcnumSgFZdCbHstYxLKrJzdgRDoQysjjApBtarxm7Jw6sUh",
  "key22": "3ghqX9uhmf9jVYfuALNjji3LebawtU7QzzjrLHz6pKbUQfxHFZdePXW3HGG6VoDwk3jzwXvojZGSHG5V6JqSsJMC",
  "key23": "45fuyTcx8bnQujTvET7zGEVmyzDBPfW4EJopUisdgioYXtQi8Qc8o89m8crW8wGfiRQZt1xX2inbbYZdp3MVhj8z",
  "key24": "2sW2RCR2mrh2ZoK3Ht7dxdMeF5V3uvtXF5CNFVLQuz1KdrbuFKHNx5z9nD83yP6uRWmSBTedHvTGJoadiptnqr3A",
  "key25": "4vopvtyyDnBargiEkWjCkDxNFQpU78jTPFacU33TC6MprBTEGKd89APbNBvp7pH8ffHBqrTswmNRTkjThCtxcej9",
  "key26": "2gXEvR1iQXWXXk52e2iMRsN2XH1BJJYW13Nz1EFXAGqanGyvPnWeJer2bkoerS7pcvyjxyiLNxHF1zoFsUvjcf9g",
  "key27": "2sbWDcvnLsiLTMDYg7Midi2Jo746wLQpoFWpvUEYuyKPHCArti4bAJm4qvJ4s9bYYpRUS7rS12J4RSSbWByXoCoQ",
  "key28": "4f2QYRJVz4bQtZJ3h4VGFmexfHFXdhHQqGEZv6raUeuXe97mo4U1gKyQD8VvjZ8fHCozsbtZfbhsNETmjBnAQ4Dc",
  "key29": "3dwTMvHBtQkLst3EenowDDpWdmCWzdH3bq7zZWf55iLhvC5Bos1Uvk5taGnNn3pm8SBxV8jz63wFPQ8VqX3TwZU3",
  "key30": "3uu6fdMScK5vK6GNEnPVDNBDbZ1savUDURTC6TfA9BX2yRwNYsE9HY62xz4XZ91VjiteDZ67UCCdrhTxv4w9wUDD",
  "key31": "tTwwSSq3vLQ8inKijdxi7WkmHqYrCNpn3XhqnZ4uMQVge5xLBgRmXquDLWNvXUBs3hsr1dTvuJLkngHjGGbT2cw",
  "key32": "29RDJ4hakeneMZGydqyak5q22TBvpF3u7SBYQrREviC1c7vMspB9gdk1xWEbNKbb911yPe3ppgZSK8v2VWAkTS6b"
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
