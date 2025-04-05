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
    "3gr5PzxkthwZM68YTqXKLWizR93vNKYLSGBhrALwTjgf6k4gjCUbP6gNJthQT13LnXabLsVPJZcRCXxf6mznHV2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgoTt8F8sMWwQ8qwozNTHrkEZjdejmxq1PRgNNfW3MUezqwvMdp3jn8JUGs9fh47sbbQXMusv99cBLkkp2k2whT",
  "key1": "WWarn6WCS6x49YgetKH3ch4csw1Ah1kSNVmrKf33CgXoSQuaxDMKvWigvYCJKsgeJY6gcdCbXYvzRyKY1V1XCT6",
  "key2": "4gdAX3h1NzQWZ5Da8HeCXo8uqme8a25oweFm9naaoxYHBedWfiuVXa4EGdyqjcbmz2SRC41y3yMfvVz6ZSu3EvK4",
  "key3": "KqVoGyrBN1wv87ENVvaV3BK4CzotKMLSsEc581SJCFc6mc11cJRHmAWqWp8xpNAXqWjU8axtCbfyRwMRkxtsipj",
  "key4": "529JjAPtm5Sm4EAmEcu22TsFn2rU5UR34gUbQCZy1Dzbi4KQsaKYPDrLTJxeyHTijZyEXWEPxEEAkbpJKFFaMbLC",
  "key5": "2dLV2nbCDw77WrjN3VrxoxfjF9Lkb6BkUr5Ddyp2N8nrDfra32uanAMTEPaUeCWK2mvgVhfJNqUkddfF6v1ZARUD",
  "key6": "3fMwhHfnDpw5xpBzrGX7X9GbxZYcLT94kNtX5vvoyi39icKiK5f5KmgfdqSAvEG6YmneAwKr7QiUKHzSxK1mqUoL",
  "key7": "5VGLsVHve1xUpvjCUYDUdvbRHjHqf2znhj7Y5JQD8tuCA2AgXYzNexyQRK9vwMfYFVwNyDZCerAETaQuYbPfGaYc",
  "key8": "zgoFpSh3GprUXAbgHuYAQE2deTyf9Y2z1sfHaHFemVgzyUyqzixWguNGidhBvW7FBgtNRXT4VzouAo73fYEotx5",
  "key9": "3itkHEYcC3Csi98NB7gYR6E3bbCzsYHkgbFBRwVHfmoNEqqNHp7RNZNgRwKWkM2QbNiKpbSLcmtmade5vBkr8yXC",
  "key10": "43foxqEcY8ofzwxPCuQf1ShqCN4SFs8dMTyfGKtNF3ZJJWvjJJRp2RrHrfg4JWFi6DC7oo2QhuHRRS8RDaiyPp6R",
  "key11": "3aC9yNAJAHmr7pLVgcaQ3oX663giyPPHrAM7GWgNCS4nmoPcDgNz3pjqs3U6dhsoF29qBw3QQ6pbNNVrFKf4kkpV",
  "key12": "5FbYiQqBHYUMLkyKC3AKhj8ZjkwhkJHGoYJMhyjgL9krBuAqJdXonPcREBY8zx7YN4C5btVY7tEW6WwcqfgCpJCG",
  "key13": "4ALXhcXpCkua79qxa92sdcYhv4CjQRre2x5tRiaJ86iUNHDMoex2orUNuKAQcohbQPJDRmrGL1VTsb7sekqEigKK",
  "key14": "XkoHMxTmeK4FFBZroPhj3UyyNTovQ8NuebcebLYR37hiBNExTrfr1b2c9DQYcQKFVNKHoMg6Jxtju7drKn8Sww8",
  "key15": "4oDm4b4hopg9XrfGnHYRBgvjDR6f6YwYMdsjGw8EWZ4a6ygRzKTM6bUsyFUVEFwpDaETLGUMeWhT1pL8sRpj8TN5",
  "key16": "649GitrYDBVFc7S8KzfSMBjNE8Ra7Lo4WkyE56oMy14odBuAdyeyWgGtSTNgZqUu16VjrF4tqEPCv5g6SCQjtDSF",
  "key17": "4txAoTWRweDh2BWhLSHQZWJ82CMESpL9PoJpjyBmAmjyxqfjjvHA3FEKfbG7vKkV6txNncDDjHUn24icQkCxYfnz",
  "key18": "3nVMVBbngHEZkFz9oP4Uidd7NGyTfn2vB1TWSzmCxY2FFvZcBkhKf4wjnpqq9JdukusPaZm2d7Fa29Hwhfv5K91m",
  "key19": "5QecD7S5PPST7ZxDWksqbEcBkBaYqZyQDQYeudwXHs6riMGT8HE1MHC6UDASHmD9gQpvMWNJjWE5Xzz5dMkhrihk",
  "key20": "4qf1DTEdvM9pJavyTPo2Xd4RmCXaHg5ev8ab9rWHSPwgUxZ6qeSfwCuagWREmaXRsbZEuhCprzwsV24PpFBsU14r",
  "key21": "3G3S9RWPHAZmDMsa5eKZaVQhSm9u8AUnRWqn4nFyzj9QRJ2XZELvCA4G13QA35XQS1orrW1PNDSgajsz4igAYNKJ",
  "key22": "4SSvqX1wTtYHgw3aztwFhQgVnXiWs2B7LKM5kqojn9hyYLtdxhK2FRLkC2m4MkrfNNG4jVoe9svGshHghhGv7zt4",
  "key23": "5Xqnanf3sRhFvF8AvyEU9H1GT3EygwiTUVNrKoefAERvQMuVvAqPXJcdprrn87RBURu7V5M5YufCZLmzUaxjxCqs",
  "key24": "5r7jDg2Tx59kfnWuMRPo9ywn7pL3auYjJ92GwRsFzBqcvEVazGv3d8jdtC2e2mDqQ8JrQotmAUD14JSnpLEyhZ9a",
  "key25": "4xaBWH1XzDCe3e28Roy5ULvNoCJqY8GxDu8QUf3fS5egVB5rTqX8mbb63DVL5Lforswdd6Lw8BRUc23Hy8hkU3NE",
  "key26": "5d3Fmg2b4cb7ik6wB4K9rSErPnJ42gLK5Z4oMhNPHfRR8QKm2V25XbkECJkrKPvJkD134nkyXUXdkSiJcmm5rzyv",
  "key27": "5E7kkBrjCs1v87Fc24XnxEfk84ybKHcRuTZUyBkydKa7gJnsUANPnqmKQrHqUPw4qZC5tMziAsL8hK7nrGvRgDXj",
  "key28": "4j2zUDFinwAP1MwT6ZLrhLnWArys1egRviyDgYStvpYT1q57sTPRfEfasGiJFbJhWD19mgZVJfqyYNqJdAduag6o",
  "key29": "4oBPYcorWTRvQrPv26P525umPEemrfP2e7gKLuajFQ7AQyPzpE3CX7GuTvPxHKUBsVpoW6yK59sA9qsqEjrs4Vag",
  "key30": "65ZYjrBNLJeuh4WQXtkad5WyYz9EvWMfhpbfjY5t4aas75s6CZCtC5WdQHUiV9BJukKCNaz3WHbc2B4SGnwdUz9f",
  "key31": "3HDvq3bwQTnexxs9o4ybBqxeESMsoHZWZNDxNzSyCifF1Nia4sBW8mt2DP2d2BswG4dLWWBSFHhHJQwoa88No5gs",
  "key32": "2WKdw3va9pqmwxzjgbNN4xWDd4ueWdPKvuKfcaWV8KCMYM1jg2tCQBmTKjRtL4HDSpAuazrgWCGrzUnxgQubEmZ9",
  "key33": "ybjPrWcGzTqBox8GVHD2VgQ7hUfoTsGhaKGEmAHbW4iFxEbND5KnpArTj8m6bQR1dtqWdPXCK4hqQrySumhNsmK",
  "key34": "3mkcrcfxWYhRsBdUJj18VMQquLo3MC56wtfhG7tNjVjeXoUUnKtX6YwoTjckCqhRLEtd1ir3FaPbsRtuZgCqrx3r",
  "key35": "8GkznNyaJeHCc74QzteAf5safi2wSy15hFcXRZNdCds2DvBpA7uwDnJKgHJEZbwkcFxSaB8JWwJWBC7s1mNn51i",
  "key36": "3cdwmnRpvoEjJfoGpuRai6BiZRtba5XjXc5yeNjqURUxn6bFx7FpQGTtkLzFJNFAdnMViGknkohgF67qZDNNvfhn",
  "key37": "5RwXruNx7we1MdhdqEXsgv8HczESkgkVyj7v9aB11XjUWToU4Ytvtwcaym4vLpxparSf2F4FtvbGxF1SoeRQg37M",
  "key38": "4JXD1B9q1KYFUxfRwHMzNbTSNkmk9ZkobGCws7iD26a4kiKjTZEHFFANKuxkw7VarvMmjgwNtxZHoj3sjrsrKW28",
  "key39": "65g9nZMVNcB3cPhykjdEfxi5Lwiqk7Mu15K6F9k1BM9ewFSRGmvDxgtPFKdXnbhUcNmURywQ8BXGFVNJaNtsZ8Us",
  "key40": "4Yp1Qz9kEngJoJrAz4oXerUPFV9hBV19jUZmj47JaHTBYHQBvx8rvp7xkenv8EgCDpH55kCjoaqyvEew12iP8qWA",
  "key41": "42uq49i8WcENA7NSWUmmBvePNAmRqBEd5uCraVnX5SvdSwxkjasogBdDEoeGCCgewAmyULg48LmxfYRnpuFKMxyU",
  "key42": "3aSAjR2SCHqs3KXgTwgTtxRiycXChdJ1tuFJVLpyE5yUajiPTbocvLAsYH6xz3ep6c8tz7C1SmJLUNnpTqdKwjwv",
  "key43": "5jn7RyXU7VCANjJsTuFWVrWodDFG2qkADeNddwZCFyJ4Zzv8cymwTHpUmeHEuyFnixEpb3dhFFt3Kr7GqzQR2vK4",
  "key44": "3w4gQP5VpmhdyJXu98BECppZ2dM3XdAXhLLaFZGQA9CvFxtDqNZz6EPwAAJwMYsm8usgyocvjSb5ewhcr9uckwyM",
  "key45": "3CKKPyKMHGHwD2m3dUc3Ey6XBuqzUvGFTb2GQKQWk4JvA5xZvCkjJCyMhGJJaSGfZr2Ms1AwDyVamsJkD3iRAYu7",
  "key46": "pj8NXGax9TverqzE4ap4i4XW7S6FMhkEMAbnAKbm2HbKyhrq5NfDcBF5Zpk9NWWy4vAP5MDKyKVqtfMmun3j4Ru",
  "key47": "2gcVb64FJjdjqWgWXBBEgePWcA4iMvThDiaaajsPBQxoDbPiPkTnY5cV8HySEWVvR1CudVKiPVhoTjEycY1wEE56"
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
