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
    "64FwD62GrgVtzptCFcFY7XExc2aiu83UPkAsLcDN6iagiCHsPs3NvYUnh9t29WZ9PSdawPksqQzyfgHDCen3Cm1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShjmuMkCdkmLqNUCQHGMVNaUEpywqJUcnqdEuc3kWzxJwohSaWoFUrGArBsWaZvuE6FTsRKA6EKunxwpP9owoGH",
  "key1": "4PDMSawFW88y5FYMznfC4X6QnZbZE6Py2RUeRM1XLduq5SWYjteyL5F6RYoEpoxTNEnV3rPVHfAENUvTSVjaGgo3",
  "key2": "KD1eFVqfHiCnfUF29gXegf1fLS4KUhREdYo2qBUUHMAQK5kJzxKeyYP1u35vLdyFqejJSYgN4SNBdiWeyqxeowf",
  "key3": "2uEstgtNowi38mn7rFuZLSZrBXPp83wZVDxWcZUCZXJNHaWP5YGKFStb9QszG1Pxpz1kvj3ZcZ4dcWfkYUSuboEq",
  "key4": "2VtPxUwbY6EU1HJSxuFia32ZjPZA9ZdRwzwvn4vkmvJ3eZZsfC1y3hHceaood3o5ZQ4re2W8ePwhwveUcnLQv7Zm",
  "key5": "3onKf1zpNNEiz4TRAPRD6wnudxVeEUffN8XeQUTz5ttGB2m53Tnh5FT2yJw2t6vvJ72w2BY2PAd1CZMv7arfjTj1",
  "key6": "3eKFdGqjTdauFFFKn6McD2raDRV1Ky5JfCXzYTMExq4nLiH786LajYXezKB4RT9XDVLwmFQa2gJnHbTMdf3BXGQV",
  "key7": "63r17HGdd7pBviXXgVx8jhsNsaCsnrcLxbgpdZbMkEXiLTN4zwsJ3bBwwkcQpmx3H6Tj46vtq2DvycNkiRJ33jR8",
  "key8": "4dV8c733KEA6p4WQoYpGBdf26htLDFM2BCtD3j31pp19aBBk9rvmuc8erRc5BVm77PMzeUwXkcN8GHqoj62S9F7x",
  "key9": "33iYNbcvBw9eLRNbbFDWJsNsbUUPnNeeJaWBCaJ9FN16eDx96hvqzSUQ3ZPT9xDrNheGyuz5FaJMSHLcfwX9FS4u",
  "key10": "2egWqvPjL6omx3qDnXMuz75rXBtGv6isuocRyGH86k5u4FzZcAwbmo4AZfCorkgQ89snDu5U4bjameRDTo2CsJ1u",
  "key11": "64LBr2nDV1fPrFg7SmS54xFvaTqYBgGc4Krp1ARtLj9QsswMAXBJxw5wxbZSvHk3PGqnRQh8oXZBm3e4HKesxGv1",
  "key12": "4THZGxj39Jyv7EUakt2xLyx8tajKCdCAxhBQ3WLyBPzJsDDMkCLEbkWj8wt7DvW7qnrG8gbrB53hfduudPUDfohy",
  "key13": "4jjYBKPaLU9bjBS54AMxwiWtfXES91729ygWMtNitZtb82VpASrD9c2QZsaZ4Jjzx8cnwNqPPkhV2yVQ4R9Bh3Wv",
  "key14": "2EnUPkkGYiCAwwGy9XstgsQrm5Uj8ewXkq5AFLUZKsbA78JzA6x4bLk92E3p4p6SfqMEkqDKzNezM6YNajpf14r2",
  "key15": "GzkdYaSfttXTYv1hGF3mcrWTEeGK97TGHgxcknTRQ3DXzLZRBgMjAMAtnh5bdUzANagTzoPa3GY716mD1AcPUXw",
  "key16": "yKYEtDSxFT3frKxbFspbwAidKeLJWKBoBeRwihNYRCHZj4xeuYbmG44mNDuDtyQ9bnvnXyanabF1FC5RDi29h1K",
  "key17": "2ja7YAj79ASMaRUuvk3fZ18Mov2ap5eSQPJxfzsryan6EpHg4raoRjnXUiC2jTQtRkJ961v2Z5ekDDpukZ3uASuZ",
  "key18": "fafQbNtN3MtZAx72K98ywvcVpK4EVCpUXFQSzCXREhYYzTdWJ5Bt8Jk9d4mX6ZigdezaaRu64ejSW5xnzeXy9s5",
  "key19": "33JwUrvFLD8QorW4VvQ1NwajdLQSy64mB5jTq33EWJ9r9u9FfTzLf7oPu97vFpArD8nSnQpQqwbnQ8TNHHTHxrYH",
  "key20": "263HK4PHtQK3NStmosoJ8ykWYs6LzWpDYHqvXiq6nMdD36jygx1Pbj3K5mBQu8ALt2WgoVtGfPRWLrAE1CExF4WM",
  "key21": "5fBKvTG9q3aFqKxNQ8YPXB62YU6186Roug7Vtn1hm6uzEdk4oGnyafUSwS5bWkHnYqV2fsdf8QZJB68Q6koKcwDa",
  "key22": "3DrTh95T6mEnYAU545RWsS4uwpnQjHmGBQ9oD5AYrakF88YzCuMHiiZZQwHVWcfAt3WesKRUMNrMUh6Ddt7D2wHe",
  "key23": "23hhrtEPF9gWcYDAknsX8Apop2uipPHeZse9Q2h4pVLMP9tzp3sqBxGpeexVuVcwBnRJn2fUtBvziAok6f4tCsEU",
  "key24": "5BA5fJ1zUHC4mSAeXqHtCT1v5LR2eHDq5PhtRfDD1VDszMupqvSrbhpVv4UEAX4g9Si2ccVaaqagBPqB1W6MrXK8",
  "key25": "2A1zNXgqVQPsK1ynVRZa1vVZhT3oFt1UHtTht5H87FVAD1HU51Z9Xzk4jq8VHdsFKGcG1qmGNCHU55TBcQD7u55q",
  "key26": "91kvk6f1EyLU42YVtUpQ5EytR3BnjeFLNXdcoJY5V1UeYYgZeCqzgBUevhhXMBgTtj1f9at2rc1nU1j8zzmNcDe",
  "key27": "4ADk88KY7SJBDtcHA9boh49r1gSaLmV6F21w8ngEVapHgj4t9agtK5MMg149VWrUxNGR8MneMZDwGnHYZ7sHbAMx",
  "key28": "4hKjofAqnodsNNoFvbf3eP2FCode6sMm4SNCUwQNYERgEPTVYaopKcnH3nkk2cjUnndRHw4yazhX28BWEtpPCJmA",
  "key29": "2Ba1nnAckLjAh473Y27yx852UxX7NgHt3SJ4naCQtvCUe9WJQp8qSaHDEzRv1Xqj8z4wMau9RaDgr3EmRMbDuJvN",
  "key30": "iTSBXJxspqqYgRwwS9VJAdzTy1umnQTqxSJnrAFy6LWw5UJbNRVoHySEA1uVjf3uUYSztk3Sa8LHmxRSNEbCXof",
  "key31": "39958duk9kXAzsM7zqNmq3qrgdqUrUPTuYCoiifx7GrWP8uRpAp2rSXb1fo8em17BZNEnWR6r9KiHC6GwPxrps4u",
  "key32": "33mZaH2hTCyqYTrJv5haDaNzvYBvYFvqTTpkRvCigDHT49fjB1tohc2MhA8kQRWrepgc3n6JNi9j2Skf2Huvpwqk",
  "key33": "Rh3jRm8LbM2iCKzd5GnPsM69Vnrbyb9P7Pkav9fVCpfRUydiFJc6Rik7bTxXdXSMDmb2qXN9Jt3mqkYucpS3m3j",
  "key34": "3S19vu2xMUdqx1Me7p12QsLSVzpjiw39wyUPxuqaQtTP3F1oS3Nkch918KtbvtUjKPBCCw65Ro5k4AWpH4PsADku",
  "key35": "4KpUZKPn3Dczx7xJfCxALjjXtFCpU6QQneZCFWpXTE54PeW8WU5iJFsbtCZv5WajCgDrbi2pNCmbqfdo5Yu7QahX",
  "key36": "4aUkSA29q42xoBCzomFzwzqcSmnq4Li1eBVCid5zkPWyDAKUVP41mQdNaAeBMVVo82WthB37ttBf8YmR4DHJD3yJ",
  "key37": "3MA3yrXbmPPhPV2R1DcKJxJm7zVGYTE7KrHzRr4v1TNCAnvKNvALzk97xAeVJB6wyiQZ5y9UFdtRUvtc4Md66pa3",
  "key38": "54cGjSEQD2YaQ18WwbkHXdHAFvmaiwv5Bhc5kGcHzPfZ24cfJ11WTmepo7fX59LducZcyvNrYB8nAVJameM1B1Bz",
  "key39": "2r4MgHsesv9irQDpqV7iiB8Noqh9Qfk7Jo3b9qsWpr7p47cGrCSy9mg2F19C9QJU6WdMcWDRRKMzyYXhNmPT6fqd",
  "key40": "3PuXyEbUbNaCVyJ95YQnP8qQuf4EDS1BXFR8Uq2fG8qPzcJU7xXJTjY3ggTWZiYbY2EJYCSb1Q3KwPbcXWTZGMPB",
  "key41": "4mPFRDbUipLnvnUvnqTyeguECUwrprN6t2MmYx6LnfikwWxfbyyL44jqLxVzJJR8eHwNWPcNimWT3FMq39tQddvE",
  "key42": "4xTFGETiSQ6yLokvVQakXtxgcyTF1KZ8KcZ12LcKrUJeHHQXPYvnK3kjSBhASCwztRDeNNFjV7NghS28AD6iCNRU",
  "key43": "374bbmMgQdJUbn17GY86Hi1fBmZL4fQabJKYhapb5fNSkJfb2cg9wXs91iQ3gjL3KRHbYes8AvAkKWHmsZK6jxqJ"
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
