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
    "2RBiC86HzKwteNMD97ayhnZEaRmTk7cs5oimDDyjAD1PB2wsuzWUwoNCpoBmFS8txArKxSsWV3hcgAa7eH46jXX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5BizTPMU8wwMZ33Q9p7LX3w9fSpxEoTUXi6R1ZK6oKfoWo6kUeniKv2gAh1KgQ7KYwVWs4WCMxpdS9WGuS7UCg",
  "key1": "5cbaQCamPg5bscgnCcksKqGYpKfwWVqGV3zyvVS5N5XU9w6LinzyM7oKds2bYwzCwwnDaYD5G9poXds2EBd6cqdF",
  "key2": "5rNtLxRw2jZKVVpcBRmuzQ5FZTiiPMMewvBBnWDj92i6KxSDJ3dDzZaccVUvWnK2pampJBZb1poBsnaCRrJaZQrj",
  "key3": "RZ1CJUNojsVubXxsAmXSa2BgthZUyJxFmXX3iX3t4kReCL5MKg9EK3UWiuKwkCWFP4BqhvmuGcnAZ611uGQm8SD",
  "key4": "imAvATJP2NU2bYqr7XMf5K6E2pwa4qbUyGM5Sf7ifqmrQbZKTL4UzN7243qyvy7gB3FT9hdkDqp4t1TFT7BPzAu",
  "key5": "4acUoSVYaaE9QwSAQTW3gJhs4gV8J7ejzxg95tpmnA5QPBcAybh92XsCPT7BujuEqNuovXTUdLrn2rYGNnaZxFjf",
  "key6": "26BKRDziFhfuXxceJnJ7mLdxEWSkAk79QpiW8PVzcpKS9oYFtye14hEKL92i9f9H9Ucqfwo4irBUaMm9UAxgprzF",
  "key7": "iUdBdUGsLpWYfBNMnpYFufH3DksR225M8jYgeJQg9rgkxxN5cZLtJwUT2dumr2fCibCb5ZJZzGC3RigG6TQeLNP",
  "key8": "4M2mc2FCaj6bdbGvPnbQfZ51VaencDitv4ZvaJjCqUypuaFoiqB8aoM1vfNyFmwSvLHqC5UxX2ddEi58Emu42sSb",
  "key9": "5YaX26zyy7nv7DnxpWWAYSnVLjtwhi58cfiiXXtzBSUgTDWPie5szFEW8V5s7hfZCknVryh4dmaWQTXy3iNqnwuC",
  "key10": "2u2ZVPe66JggSAN8e1TZpea1QxMQir4Dedzas7idbs5K3tHmfPWRKP8oQVdjiJd8osSEroduYbJyTo8L2qyFwR7F",
  "key11": "58Jjo5rrMfWiyQt1Ldpnqy8qnK19CptXgi9TvqntkhitPWfeZPBRio8Wyjg75x17pb7Aq61eGPazGoRhHfVqxX2k",
  "key12": "Pu8RpRyXeGaJ692e5f3VQVDssqYWjUSXmyvfvxMZH9W88FQMksJg1xh7g7CYSxyfnJFQXDzM5i8F4TtG4UBpN6f",
  "key13": "3TToB3bTNpyhzuXNwMWRpfeY6FCBrDUresUMHHFTMrpfbxy4owTW4QQqUXf5ze8S5Kn6jBgMwZJvDCGKHWtVRCUF",
  "key14": "2atoQgHMA7bziT14ghDB9JpY5NsCgUJVrvDJVFHbX9Qf96QP4tDFNQADfKxAxh83PXwfcG3s9fxjhyhoNQSTV5ds",
  "key15": "4E7j32iincQHfi3KXkoUKw9QoxLpaZME8My4eyZYMyHumDxmmN7XzSVz4Urb5dKJjz84HRTRRmJrDpBy6MUU6aMb",
  "key16": "scws91hEjpdQirf8JTqQovkS6NLHobbYWqjHZp5NXcyWt4kx9hAmoYmD9ZLWsx23JR1zbzZrsELtAkveZrsCzJz",
  "key17": "5vXhSuzWXrsTrQkUv4xx6V1MLeMTHnjTbHUogE9wAUaPvt1wxRamRmHQyTnwTruUGZbs7ELKGhfyo52Y5eDfjWv1",
  "key18": "cppNBbDWwA9f7P8CJ8MPd42iHzyS3vGXV9Kqss4gdVm2PSU3Qivs8EdNcuFihozdu7fYEqCdzq1Fyxt3LmYnYwH",
  "key19": "5c3wYU6HDhXk8o3S2NWKG7sCdwTytEsHGPU2EAgCt3pSTs5zLdByatZbE7si4599sjyah81Hzz61TzYHGFASwMev",
  "key20": "2ao4b82ffuagAGAjZsAsA3qwTQ3SMfdL2QEfooxqjWc9CinoKCMRXnmgmhToqJn9Kc7PBTTvjB5j9nSus69zjUHL",
  "key21": "1rZRqdP38ok7sBpmt2vf6vGEHVNhxJptMZ1mqHyzdMQw6myutNAcKAG6u4h8KgihhiE3C2z6krNJENrAtaent3N",
  "key22": "Wk4A7BRqv2kKg5fGLKYH6awsGiYeqKB53ydPC8t6HwH29R42FEmLNGJHcf95KhThPYTsoRupKkKUm7TJSqYqqXZ",
  "key23": "2ivbhdMTHhzExJoNfFzHTk92FvFpsgkUewwoQZNbXuDuKw6a66oCcmdxdmHngMqe9ZvhMvLCtamkhn2Cbjsps4jv",
  "key24": "KcT5gn3jfjCm1FoR6cqoPP3egSzSWTGfeFXKx15DJA2zu3KzJhCSFh8UcgeyGx71FuKar5biSpk2oa2TJEA6k6Y",
  "key25": "2uJTmBdJzdgw2PCmbnwb8cPLAn138tfCaBiLm8BvBseKpKtnX6D4v9Ydnn6PQzvxHsMq168ka3xM23pEmLr2ioK6",
  "key26": "2jeBFFnfRduZ41EGxqSq32Tzt8nXgJ2x2m9oXsnzfgQNQzkfoN6UaLr55659FsgHvFUiF452uExLL8wRxqQRwSQJ",
  "key27": "4SV6RXxTZPpMgc8PLXVqFuDQvqYmgY6Ehk4J9YsuGsTWQtTBFLXEDhykNTjQiDxm1u1e9FopZMp9k22rLG38rJDv",
  "key28": "2ncLWN6f1VXFAq9nFUFot3c2xDLuZjdYWEZEs2oGDdCcmDPXiErLbHo3FoCZZHXRrAfzWPepQNAE5NpDokzw3UWY",
  "key29": "3LZQ4ZSZ2h7nTkF2Teid4hw4HaXWnE5uuN1qjJbsvarVYGnnYNbJmkJnRp59WAV8mw99GgkB5co2CuF2g86harwm",
  "key30": "3A3w6NH1efrm2gQ6p28fdshffZc9UXkW178g7R1RYaT1ZYPYnic7dWvbEXGTWRtwouXycv9J7FdeGWE4NfggwCP7",
  "key31": "2UDZ8sn8HcyQteVEKU7EaibXAtHsaSD6THiY9PasAGvZU2U2ixVBvfHqAk6i7kBwLdjkLxjLKENBSwMjekkKUM3S",
  "key32": "4UUY6nG4MVrN28Y4oNAdYWqDa4tXfrKDHfNWhv6Lb9cKE24729MYk3CzdDsBSw11fUsvgmN61dCj78GV6egv9EjC",
  "key33": "585HfYN2vzeGK9U8N1Xv5tQrFxVFG1hAuQyqee9z3tML1PGhsu34w59RuBVEQVwbhipMcqTQMkXZuBQVLkXR9oXJ",
  "key34": "EkLze5nfpZ56pDqogu2GQFM4fdE4asvu3oeiGC8pnwWyG7kwBHqtuSxKPCaExvkfD6G4gKLLZLVHHh1Xr6QuadL",
  "key35": "54XD1r8rmHuGBGXJ55SuTCDojx7dhVRWwxrLQ7Xz9aXnzBfq1u26Ns3WvqwxrNvUxnXBGBqUN73zPCx2sRWcRVF",
  "key36": "3KdTUwUmFj8HAmZTp7gJkqiw21XckXkN2Dh4HoC2cK5Ff5yX19Twc4SLjzTBVsUedj1fRZyb4Gxq6kdWXB4oNNyJ",
  "key37": "4mbbdeYgR7K5d6V1yAGZEPTjaGkUnpgDGegdFLF2tV8Tyn24qsoLGi8EtUQU6tuxkiuUKcwjRv1sFprUWApSQRKe",
  "key38": "4RLzXVFppSxZjc8Bea98WPHzCBdEuRKQGpk2sVux65MGhiGppV8j44EFaxfqqkQ1CQMrbJWMGTeQqQqze2rCSSu5",
  "key39": "4m9qMdaTeLANVn9tzYgngGks83dAFucrbE7Uk5BWsEwBwa5hNdm5r1XoEakdR26yHYQGhFFtStnPSjdcHHQDHfkv",
  "key40": "kYJTsQYYaL5b3BXMGt4eTzqCMgM9vCNn4iQ8bQUggYfhS2v3TtaVpRxKxjAjnTnni25qJx3CJt5cCy17onM1DyD",
  "key41": "4qo5zj1rWzN6E61qykN9ycHNyg1N2hwLaLgZ9Kf4JruvxNFrgZehRdnQA11j2F6oMviXytVguSJXUujtH6fgSer6",
  "key42": "5zRJtSjBYzQbMdKTbVdnBPYrPhumuNZz3oCncP5FA4k4Maom2NGm6e9EVrUUV15gHTJM7pqP6gN4D91wNUfiREG4",
  "key43": "5yvGrSwRHoxCQPnQrn6gpRc3pAbmDrABuXUJX9dcbFmkGv5XTcQm2aLGff7MXicX4GFsCTmJHewrJK7yzRb5RUPy",
  "key44": "3GkAKMZC8zAi82enwBQnJ9fVRMfr9ekaomB3sxFsnz8xY1Wd9K9NJ3YevetQvRqi9nzsTDdrdsRFn8s22tv3b4xk",
  "key45": "2RR6RcQCzHpb45L4sLJWAhQR1LBEFGniAVyg9X4SJjoZN2y4ohHGGres84sBsCxRvbxNeF7Ga5Rk8b58ZZrayZNW",
  "key46": "24mtM2Uo8RbxBijeKem7sAe85anh2Tj6sRhniufPw9chDRbbNwTxnCjTdgqRPW8xV6A2kFStM7h3AbfVEcQZZhYT",
  "key47": "5RFQ6bF3bowHSt72v6cYQermiZyJreiYxY2RmrKk2BHj16jNHjk18KTRDj1sJ88fCQEVyCGCMYNgja5j6KLDsGqM"
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
