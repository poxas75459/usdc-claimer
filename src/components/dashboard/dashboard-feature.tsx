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
    "2qXWwyE78tqBv4x9d48VN8Q5FkgPFGdHGtES19NuN5Vhj8vs7MJvDTbbmCkFTF1Vpm9AnhbbsvrsVYF2nS7hTvK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLHWHK9q7M6fDLfdwbNhcttR3bjb9hFXrSpk95SSp5hMkhyvrrwxtnKkzzSQJGWDF4niMkwWkztEZEEeC47zdLf",
  "key1": "8MHykAmdtfoZ3TXtKqh1r4RGsxpTpmucPskpZAqUV2hUGRZg2ibh7RBoP1R3t64VGAmMctzZozE7g3RhqDhTSAV",
  "key2": "5sTS5usVMYQw6t3Du3r7HsK64gurxKgVsXyGsMBYFuz62DH7pYGuGZrRDPY68XHHo8Q7yf3odeYjPvkNjhY17ats",
  "key3": "5CGTSt12gczS7ofEU8PiZVVF7g6vm8Nad8SaaxRsFUWZeaRSC2xNJw8CCH7GNLivyaQCyyyWt84cjZDL5LB817oa",
  "key4": "GoJ3VxgzFcUQLnQmRC7k7MYMAjt6Ph21CWJLDTFqJDD8rqWVroq3eKmmVVRviWVJQQ95g9pkwSr5qbuGmdC75Z4",
  "key5": "a27ztWuFygbTPceThzY1fvvoozsi49qU7b5eWf9fQA9vwPgtjiqxH5x4DW3XjVP2jtdw7SGnuWnztNJ1NJVUxqA",
  "key6": "2d7QZQqpDqoogHHbVkHS6ffsMPB3KCtiF8fQVfpRYEjJoZX4t6Y3smrSB9ykLAgN5tSAA6ucYwW3LWVnWGt4CPVh",
  "key7": "4wgBpjVHWyB7eYCfvsdxbW6mWmA8N6JFxSKGC43fDa37TuV2PZzKKxbTpyCM8qvyGyoHoP5YMBNpN53xdCFw99RY",
  "key8": "4XURgyDnauSBP3PCRPs8cuJucguwDgRD7yebeaKjAGkkxePiywKLj4s6NSUn9KT5pNdCqkgf6mwvZubvYaoKncqN",
  "key9": "5JVts1fFpStqfQdT1JV5zmhTQWddwZqyneaKKWWjnnW7pewaaZ8fnKM5NqBxFbGSEZY73MWLXBzs1i1VMmHhoj7c",
  "key10": "2H4WEGfd79YC8FVUZJ1EwGPnZCwcxZamy3YzP5d8t2ZNS3Tp9KaB6ZaLdoauc7UYSS1DdGorNCzdg5hAspa5Bi7t",
  "key11": "Ay3eNQoL1s9usfjo2bRLhfXMoY87x9b4ZcuRGZdRMuWVcq75vR3gBrkbWJYpPjyCySQ9VA8BZCLK2NEqZsFnt9F",
  "key12": "2vtT9EovMjZFPuwHbWTCLxWjkHE9cebtJZWNAoM3hy4xxC6PVcGW63CuN9CsBzKvho5PyiVEM18rGp33vShv8GLR",
  "key13": "3AMjTshEK3VmJEUiTwBszYPSpkQ7qxYYQQqJmVUAzwPJE5RpAN8raYPFLbkqGh9JnokfYJTCj4vXsznawEG7iE4t",
  "key14": "3wxtb9HGH1hzHUsy6Qqp7TBq1N5HnucmyRu5jhfYCgM1PnaHFx91oCc2KBXjAAE1bXiPtVCrA2GvUnxogXyXdxyW",
  "key15": "272igPWPwY9i3CeEKsrp6Y89cQmPio42hceZen9xyGaujo4ZavX2EsrZMtKdnPBKnpdjTvZhbeHdxTnds84ZBFa5",
  "key16": "37knXfGdJ9uhdFam8bsJiEPzbERQ9AqyjufvumoGtXtwS2Y7THEuYTawEBCVQR5h8jVibLeAxFtaHUyZFpemgmFx",
  "key17": "285G1vVW1tfx86SwbptgRqKT86S9jdFp2JwrE2XQoEqzFcaSJwxhQSX2DmTeoyeY3xuVyVJBfafmP8W7L8rbiGvz",
  "key18": "35aUCDwyw1YspcuM36Z4GSrY5YYVxrKYgNjkDR24RYcenmydkhAzCpQfSLAGb6QicmqMe34bBW62jqYnfWWyz4my",
  "key19": "4qnYVhFwHYu6teZxFHFbkBBDjyCUDKcukojS6st356ikP2zVMA2FTVSt9GyYmVYZzXypyA8etqG5V65ygjxmo6ex",
  "key20": "3a2toCvAymD6uBVTyNKmBcFxbLiVmfHuwBYtA2Vv5fEqMYKF2xoENtfwRN8a8jPGeDDGR5iWAhqVma19m7wsEBck",
  "key21": "3pfcmS1VamHYJ5tFCRLPg5pXcsaPKMvTTBjGhBpPeMFPa2Nfeg7uY2dhbjeFGE7FHESNgHJH1cvuiaepspF6cUxx",
  "key22": "4GqQ4gVFuR7C2kxWrdrNuKu9pAtgniCjoUcfdPe6VzKsfgD9d9sgPq2AXnTuWhWivvhDJts6dfMACsSNYKmZbhjJ",
  "key23": "5wro53Ya6jw89vTTwjRYg191CqmYDStDTX2aftxqwpYZCdMFzHKfvD1jdP943bkBjs71qe1p11siGhKF3Fb96HL1",
  "key24": "3zgCVMYbqMft4tQkTdXEqGnXE3sVJeGXd2Dxbrs9q6DQGKXUpNnboSWZhAYsVepTnKfiarw3CiFF8M14CCjGvUpR",
  "key25": "4bcuKdPYAXZxiPhCW5S1gPX2iRxa2fgsTNrbkq4A4NsZcGQUG5xnQQNVuWwSm6sF68Yk1qPPSWcZuoB1S7tGpJYC",
  "key26": "3drkSLBQ39rwCKJdFWWAm8g2YP38n9Bhdfb5gLbF3RTv9uhST7Bv5DjBnttv2L1rYTdugv8GdMi99qM4TDZYKz2q",
  "key27": "3KLKf3Kc5t7hc1STNFbN3kLb1X8EqVZTYHH7MxKccd1sNJ7xpXMSj1iqd7DGgXzAkdSKhrES51ZCfU5mT64T458V",
  "key28": "3J4nZFmV3dMXCCzvVxZWrdGXNDuaKBzTSdwzxALZXZZm9EGYHmybPJboRUxdzMKmusVJgrMBJLq7E2NWnAusPJUV",
  "key29": "AAwgMYe3i5tRtmsB4vLvhfX93zqaCgupkQ3wsUNiAabst25HReUzHmfSnuciGNUH3crmv41dGkpFkrVNTrws5VJ",
  "key30": "5NEaTBhkBEAh3or9ejBiULAjTaWivRqAyf7Wne5ppoZwUNYShb6UEA3FAWJ8NegX8VUhu1NsHDJwQzT2PAA4MmKy",
  "key31": "4PniE5fpKhAH6GfS7ZaEAfT2akQ9SBSMLVHDFUZ8srkG58qqXS1twkLfJNsoAcirQvzB7bMaRP9zeme675sxZvS3",
  "key32": "3ovcZgojuPYnvBHKbPbSbN5oD6xBy9z2oAW4p85MH9zrZLnGzGgzEKa5G4vt33RvJPQF4Lxu737JPCD5AcpBri29",
  "key33": "3autKj9ZrEEnUB2GUSU8FJp4MkWDh3PUZGs6kRjHPzTC1aEJG4m6GjZNXGtFZbqxCAExoEUPSqGpwdZpBgKCLjDC",
  "key34": "3UF4M3zTyzP9z3aTX57MBtXKaGKQzM19Rr8XLhdNjzh2kP41EsAkTMmSpJFTGwumZCsDMgZssoZNeXmPkKw6M9N5",
  "key35": "57aLmBT69f7mM7Ek8H3QxNvsBbqZLWUbz5U3SZJ9cKBcRb1gkJcsFQLKinj1pG36wNo8G1aEzvabAK6Ez1CTkm1F",
  "key36": "5mZUhRmGb4ZyDKgcEEdsrWPPSjPpKUef69grTYmrzSn7dBGDDh5em8R76rMBag7h9vCjbnTakUPYBys1yq3nZB8Z",
  "key37": "47SwtNBEAKY48P2Pn1dFJnDF7w6HrzN7UZSbf2UCKwYM35oMcTzy3GcbpiGjrrxBL8awcQXkrUidBatPagAYbHLn"
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
