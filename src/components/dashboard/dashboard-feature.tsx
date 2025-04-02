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
    "4bmrFQ5EGmYf7HJaSvAyJVgAApZybP5CycXfYXrYauk81AHZYhM2UKp1Aut39uF1s3422iUbEQYwEoUgcX28xYUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQSpe3wrjFeu49vpBy9fNZsZg3DVC5PVqPFvCKdAh3akY6gm6kM3ENXgSgX3Xe8XorSbGQZasm4aNVffu92cWQa",
  "key1": "2XB1NjyX5hC1sbjQn5vHntBo96ztj45ENPo5D4F4ik1vuf8bRuhQu79GrhLXcMsbonoUi8QvrMB8DQFZyD1G6y89",
  "key2": "2BmQM4W288g2sqgqhsyrwswdzdfUAeY2EhbNYFHaBCEox3bhFN6Xs3So76ExiVhCe45FCkJAM2RRFBYCtkiMeZw3",
  "key3": "3mu8CEakABB7bbqoVEw3UAkJvm5gGqMQA6RyCgpPURzgVCXmpiCoRHF26V1gQGnhnVDhANThsjZnqBXMffzDmxow",
  "key4": "d9TKoh5GcgdPgs9FEVoreRGTqTJ1eibqwDLU3y3MhrV9tvKMXvZnAMHt63R8NgmMTYwNAtzUALGqivbGLFsx5tw",
  "key5": "337duon9uHTQogvyDppRn9pcJMSHmhhEDawcMJa4ZX5uUuhoAEauuDhYJf91Rn8gGqe6sPHnQGuBzPHXPmPFfHwm",
  "key6": "4iMFHqCwKeJ8gBCemgX6HbCN85aY9aEWkPzZRqvpd6gT32P3FZ4iGCG9QQEtWxoDNH6WG84bQqoifxQP3JuKELv9",
  "key7": "5FYFQ7meMdzbtEr5TNzUvyH9bVuMvyT41pK4pAQMqEtphnYrkTKBUNBkj6tLmBbF3DWnnvQrBK46XwY95XN3VSz5",
  "key8": "5xHv8X3iDMPUjn1wGfRuUjyw7DiFedYLhLAskcwYYuc72SYzZe2P8uCz8xUTZzRinJG5P1Gr3pNGYeM5wtvVMccM",
  "key9": "3hzYT97zydZNrJ3guw9AxwyvwF74rGBEr6H59mAjyDjsWg1Cm3u3fTdF2UGUNDX82QaKiLLTU1fzK9YR1py6Rfkk",
  "key10": "3rxgBiM5JgP5m3YfJUedxndEmDWwG5cVnvF1n2KNVDTHztAWTCQFEhxSNqqU5BUNMbEdm3yPwLzfjpEweFRuau4e",
  "key11": "3jtrFTYktvSwRx6cPgdiy4XVqeYAhcf6qyw7Hzm8uFqXgdLqHeMkPS4yniQNAGtfRQCdqxVwWD7zYdP2Yab9pmTR",
  "key12": "43NY8AtErrTbBommfo8h86oHeKXKUPNwfNNPPVugxP7icdFhDS58P5QXWW2tL4MecjYjF7KeUSPteUBXys3bC6ws",
  "key13": "3a48TMNuwZ2ZgVAxqz4KG6KkMK5WX9RF3CNbcHBhqqaR2PaTp89uS8YsRAeFY3bpeWy95tkcR43JtCCRCQsc4ntN",
  "key14": "GCQ5PhkB8X2Wb8w1DxZ7YbNiBxarfBobzN1sRojvQfBu3vkBEm3ZFas5ycLJ1XkmJtMiKbxEQPumv7KdNyoYet8",
  "key15": "j6VyuMpLaikr6HguUMhnF95piTrSEK9vVUDk6i7uMxQRatgr7TXLV1ucwaZQoLBEbbLWMt7dubvv1v1e4bfwf9M",
  "key16": "5CwJTwSztx5yPFLeMpsrRoEuvfMkdNcrHarm7RX1gKeBbJehnpiihq6F1ympGXNBFDFwnjpMToA6LYNzGGFgjYBk",
  "key17": "4oiufpifJmkJTRXLewrPBwHQKqxneBVfd2UzSh5L3GTqquHzybqFbbEGyryc8HwTh1Jo48PKf8vmKoYpgF4dHLDV",
  "key18": "3U7baM8z65rCKGtr17KsQjgMKeKPeTUVAdR4Zx5HEkm8qEj71e9jLPagwfhAmv8pNSBqPpxY47efH7eLbiN8JwBF",
  "key19": "59htQCU7XpnF9bKw2SAm4gxSUApqngsndf38EN89z371pKG3EJJg48duBTT86L625cADJj3dkPWAkwtPE4VB1z1e",
  "key20": "3yJVPPx1ash2PQJ4M5aoPemEakv9opZNH9nJjdc8AMibTtUbPorCt4iYbhPx1yYynU5pnEkXNXXYrowTAZu5txR4",
  "key21": "NpxF99fifeSWyHA5efowxg1LKMzpqDxhQP9GQwGjuPe1WU2F27VdLYK7fb25bMTGL94KFvMcq65KTTV27G2GiVi",
  "key22": "4XceN5PxCRpiidFdEaSDC9SvG9Dx5uPn45fwHdxgBVNkZNK8moeXqA3pfZpNZWkhfcJYSxbLNvir6kEUfQqqwihL",
  "key23": "3UpcmDjaSDKGQWEA9yuJmYbebBfvXdfHuc1kh81uYTfgttUD4JyMbDxNC71tPWay3FvJP1ytwujYZEFn1dFhMquU",
  "key24": "421gVG7wqiu8yS7NzVgrXMgS2KcJANHa4pFebyXWMHnhWhC99KAScDWs1hx7hxbq8dzuwrtaKt2hAt6CFBkwmoLL",
  "key25": "igbQJCyVUimjFEjb9kaoHhjQHNjTA31rm4nGLKQJc9fqMRYAvSR4v52S9MpDVrabXjppTkUv6YeU7UxYCq4ZXVF",
  "key26": "2qa3eDmarrkJzMq1kRutQPtuRzVDReNrTdHb23FY7cTyBSTjbQKRzw5jNS5xGF7wdww9tEdavpnTyT1JLw1dxuVB",
  "key27": "464v6kGUpJbu9BfAdPVNCUBsKN5YcRSa2jdp6fuWouaSMVAk9bmc3n7WeXGmWSEF1TauaubFWnKR99Lsg18iaX7V",
  "key28": "4UzMLUFGD2faMhxsfkqAyFpyQezTTNhVc9ZNngeJKKegYXaJ8kCM3xjCoeGWW5EBqTM9h3p1yrYKZrF2U9dbayw7",
  "key29": "2m9RrPrwZQkqJDrzD9PKuMFFyXyT5E3yrWyfCGd9HbK1JyRpjEBLjB1AHJoh3nfP4gjHuLTrXzrWwXYWow2x8XeT",
  "key30": "dNr6ut4UHyNmEMfftnSh6iYgRmAbRhMskeyTGZFzzkTj58kYBHEsxU5vSt3WNSZtqgMLWM2sjrvhv2kKLyMrq8g",
  "key31": "42eJdAYZVq6G496QgUtQ2J21iCfqqhjUA6uGX5Nm9BAAaBWBqVy87n5z4aaaq8WHLF4ySExZjLwcPUSh6uWGiEH7",
  "key32": "ZESq4fxsVWLy1V9WYHbXMZfsWcMQVzWPNo2A7wb4MovhKFhmPcLsZcQid5ng8swMXPsaaJWzSsLyYgVyhLxXFTR",
  "key33": "49dwDMkH28efANyQCQN2ytpwFiNdBR8khmV6JpsUHHNynwTC71RUqY3ErYo5xpijEGUbUyLPbZS1TozE5AtU3bEf",
  "key34": "57srNrssgooHHM8N4ftLPvUJGpRgrzwr1npbnT9Gyi7ZuBJ7iN3TQ98prL6S8RzhHQZ5DQypqPjACZWj7zfcREYg",
  "key35": "4Gu4L1wgNTTLDCXrd2AA6KexPd9qH2idaSV2RFaENQwAzWxDbZWuvQeKbLzCnSk63AkbexravXGxXnnZB7hUQP5i",
  "key36": "5jXYZJG3gUU6HaPToWNsp1mDLdzbS9XgjTCF81PK4915kidyiu5EWAAYXAk5sE6ZW9VjM4ywgdfDeHfLi6g7dC8C",
  "key37": "2wuBKCSgs3QDux6XzWKWsfNvLBW5sMowmKCFbMzDpAQD5CxZ89f6HcGWPCQuvF47WieqN7QvG4fuydbdriBwufw2",
  "key38": "3qameS4Y211oGxLz8DDfgeGiqwbyS13xnfadNnVpQ2fHsijTNPxa79dosM9hhbYVMFqPbWEfXUPxEURqwPhoPhhb",
  "key39": "3Cdug9VYKMb5jzfiKzsj7CAMFspxygyAiLQ68KXue1W6SXhz54zbrh22ZaB8VX3P5WzVg3oZKBFPriaiwFBRUTMe",
  "key40": "3kgEGA5mYyjn3Ja8ajZfyMK6stUTStsDusMGRWFLdg1RiQouSfy43TrB41DupbGf8eQ2YCoh6cxx9uk8kbHhhHC8",
  "key41": "2GY9Sj8xKH45TZ8nX2YNKCgFNdT5ZboN2Xt7GSwCUHRxrxdnc2w85y1zp4U2X91i3DNGfCXjjV8zcbUiWy3iMrJ",
  "key42": "r7wdz6Abov6tcsMaTY4drpjauKrPopwwLkQN51utrtqyj7Et8nMJR7dHGy2VCgDMyLo8fZ9wbFmzuaUyZyCxib4"
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
