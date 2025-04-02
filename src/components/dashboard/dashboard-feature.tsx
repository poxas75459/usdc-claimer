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
    "4nn69RwP47p4vNhTkoxXT1edWd8GGHfwwwgzibkp4fu79PcgDGT4i1vru6eaBuKGyYkEkzTLfbBTe8FSXDqykC62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nLEXNzUc3sSSy6K5KE4ekbsFF2CKDRZDZ1qJnzMB7WmduWyPUPPTJpcTRRmHBaDtvSjisSHBnyXWZUrtn9gju5",
  "key1": "2dXPgp6R2Q9b2LBgU28jPubmYk8jeSFwm61GtPhextotoSiYRoUErxRJ4KRQYvoMeWSN6sGAkopZSLYeF2rpbYng",
  "key2": "654pmkVqfqpXTReS811MJ3F8vt39SPzaR4ZjhD58WRsydKmLqh43FUvMHDPfQBkEBg5Hr511EJZSJbXGsEGkSjFj",
  "key3": "ppUXVvdaaZvCMJkjokHcCfXUTrGTbSWbMVsRhbVzUNxeBiUciDvhQ4KRQ2XWeAJheq7FANQyLZmG6Wa3dUZh5N3",
  "key4": "26wX8PgbbkuRMWEjdSkqLLkNSbi1tLxnNqzvmtqfGPJCMWimMVLrFpcT8q3QdfPwkGYnAQrsukBBVcmxC1jwHJU5",
  "key5": "4EHr419nC9FjTrywqarRHqVfqravYhM1jJPFCHGVmhAn7Fuf9j9e2mgXHjQqTbL4sTMEhDsSQ9TCvSVros2MnGbP",
  "key6": "2niRK6vtFFJ95yzG3ZnrafJZzdbLkzivFpMTYktYeBR4soQRQVyurtDLm7aZujNsF95nFPqA7eGSHcihuZLfoYYJ",
  "key7": "5NaAnfupqyZS7SNd19HMzJuRwB4nanDYViARdVHSykK8SyYCUozMomfFpxPQ5R8Cd44EUxxgcdEcKEFmCykmgMqw",
  "key8": "3ztX36P1NNzqyu8SxrpDamfjqc1AWyT1hnEBJX8LhaygMhUKqQDxHwfEWixos9d8zDekVeurWWBwKeotG6cWpV7h",
  "key9": "2nsoR8JVy7Q97rd828YXiUrcseJJV6ytKtYx7xRkhx957sTsocaaB3pzSYaiy1zEbPZJbf2hjHdxdPbyKuUsyaL8",
  "key10": "2Sn8vqhu8kojPrDJNbYSkhMtz79c155fisy8ujcJMthj5hT6QLFdGadZPEcNsbwdpqPCrFQ5EZCoNtMB9joVjfXm",
  "key11": "5ASHC6U4F6NPh5dCTsy2XX8wu4wejb6Ww3wGvwjg9Zh3xuhhoDCPfdtowDXYphyznbpjRb8ENTnLJNEJYbghCHGy",
  "key12": "2D75UTpvDpfTjYqiSgnLvCKM6kYQKrn7wyacpbpRPuBWnd7uoVjpyAobMTE6mLgiV2jPxYbTL2knu5HSFb6jVnXa",
  "key13": "3iugC2kPp1RQnpAuHMf8z1AUeMNesk6VQAvivFviqLYmthcrY38a5XT8Krf3UcCvuZuXf9H6mqo3qL19sf1wM13V",
  "key14": "5Kx4vXRzqE8LXeWuFpB83WQgkTzMSdBxXHTPxEfZfjSUefAjzu2fBx8LHoqEU8viqyJSwFX9rdQQBs471x6DgQ9E",
  "key15": "3m2KUwLybweiKQ2UXXrBxvMKRDrE4cVEcE9Nb8podZwnBgdM21kUptvXKd9wA1FEz5jdg5mHugHGZU3kApJJpENi",
  "key16": "5z7Vewcv92RKvMSy4kF6ffEFmtcKoAuVLGzdSMBt5hByZVDSBNmPvzW8ZuAygVzzLaRVRFRSpSbStaMdutALgicW",
  "key17": "5vvd6X1tMDiG4CXYiQLoJEZUzqFTRX3VpD7Gj2voNTzraBAfDbuCrB43ETSqUFeDThHApi6uhphT3jWeBtSDi4Hr",
  "key18": "2gX23j1VnwiBwysDz31XYHAAAzKUmmQsvXmNKZiriVtMpPddii4oK4nKe7CBk7cpvi2Tp9AuQeiNrFsDcC2ZvMxR",
  "key19": "2cNfGYsHkoVEVSuPpKCCTtdhtHUz1qpisj2YLnufB74nEu8KvG7CrzEV6CacS8cBdCzVpPQwSn6NrdPPsEagKhdZ",
  "key20": "W9pYKFQ7Swz98yFVdTPVb7fsCynB9sKKUYCxeVGbswCSWc2c92qGEEs6xzcT8SS5wbgjtgNtXt2RYCZvjKEymYh",
  "key21": "3RstQedeRxJsWPLXwCaGJBaUsngErQqJQhiHHpZ3wD2EsomBXJCP9QMyC2A2Dt8a1EwaTNWGJXo6BnQvjYU5sJbh",
  "key22": "3GgCVnF6vuSWN39oNZdwvFkCsFXVkknqucvcMz85wBMQ1ctpUM6v7yMHACg8nFXUs4mQ2giYf22w2qgBHt3XC6FY",
  "key23": "4pXPCMa4Hrxe46d1z3nqwTarfqMbYk8w9jWASB1aj2nWb96KcVy9ERxJ6Htk1juskNoyERpYSJASoJBqvyd994Y9",
  "key24": "3xNeuZL38vbe67aQVFhBfgQp6qCqursEQbYzaRtuGCjNuWvezggBgDNApcyGTvBBuYafnqJSYfViJy8rK7YvBH4p",
  "key25": "4r88u3JqQPpUdmYAwtY8AwELGxaswb8y1e3rWf8mvNsDRuib7GjkmR71AYzaYkH11EwNNFG8NcCxFpjkRe2PW81D",
  "key26": "4RKPx2r7JnZ6vH32kj8UMrV3tsbtHZwX8gmNKEvvJQJcv8CdUfgofRwa2zpaonBHtbkG2xvGQjd9R6GJFb5TWRoE",
  "key27": "3HyYpEuNxz5Vef7HgELyaDzLiJVvjminaWnGAkChoG74X31T5GGqPii8gV7Fz8zLiE2BMgyP5F5wUcPERGo2XKdM",
  "key28": "3C5w9z7gf3d5zgaanrNMwSdj8FGHDizTzTQmtKQ4Ju7w6C6djoXLwMPgSL1KVM44cmdgoAKTTaBhifGuZ2SAqSnw",
  "key29": "2ZsVpnRAx2p5xWjSdz7MBUNvLeDgYz2h4qR3D3jdFyxXj1wnmVSR62QaHkjJUkEBUv8oq7G9ZdZwjfRxZPDWuwLa",
  "key30": "EGvyhpc5hH2PMwD7gzUxrPiLGR7EA1cUfkqXtV2gjmj2FNssPQ7UA1HCssFBTAJpWQoXAcxn73UGSbM1TkFt4Qi",
  "key31": "3oZdiuUY5dYScCqLERzNdjrXUPTMGpgFyVS3niHBUJkZCqSDr5s3izRx3Qvc1d8BU7MqR1nscAXh3RnUP8GciUDS",
  "key32": "x72QRPuJSbv8q9NDQ3ygWQYEYywnEcrhq3kNq1bpjm2CycKYPfopgqgR5grd5PSJPsfKMMb5MTcuihorvrhwk2e",
  "key33": "2Q44cQdUzWgxtSjkALYXTbSS5hTfdY6CSKeFFPbizJEM5VCqbFgncsAqGNQs4U6qnufQizkv1DLRx7KRuJEqHthz",
  "key34": "4e7TZZfcUvKt6DBNL6pTeLupJ7sGMh2ikiut3EDaxZ8w94HrVs51okfVJiWY9MN4pw74vpwRFXPtXTPdzmR5Kt84",
  "key35": "eawE61AgapLtGCdFcCy2sLu7Aop1A623PF9vtc5DzU6X79umrvjHaPhP1QFw6WWx1Uaovk9n7Nh9tFoYeG12YeD",
  "key36": "4iMAHpzXcYRUnSsTXKbGLpFifxFnXP9GxpZYuFJmMYndRH5VqfA2no7yytuE8r16rhqu6bKDbXTjCxR99M14imPB",
  "key37": "2y7dcRRq1DdD4Th9mCXxpydsHUXjQiyq2QTWXQTLp7z4m4wEud6pa7grWHAqNbQd1tr4MVkAPPXjeFM1mJuH5Gnz",
  "key38": "5zZwUt6s36aaJ3WQu118umARMR8n428EEga4GViHb2pqGYoX9ZgUAhdJtsrgXXcKajHyLcWhKfuQFUs93sz5ryn9",
  "key39": "4m5rDWZuYFkbYzd7iGYPA4dzhsftEYiSNc9ZNNQ4d2NRWH82s8QHmZGpTj44b5jgdQGfC2sMrf6tyAgNEGcMYhse",
  "key40": "2jSfFjDvYTbTEjzreyrmNpLbgqp8M6SSSicNCGY5X285cSMBnEuXvfW9tQEtky5zGsRHKt4hVspi567oD513xe3e",
  "key41": "2n2tjTbugUENYcNv4aRH5Jo9kFx9txacLubCHQDuxiieAyNXK9FaHCrSyejxMd36Pf5CfDwaYhNu1CyydLcgG4pd",
  "key42": "39Kve7rz8r33YgsACH4zaMkFdTdEFnaNsDF2ANjvHbVFDdmGmZzhTXdoobmWuV1NV5WJpFfC6ewYevnb5wD26rHC"
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
