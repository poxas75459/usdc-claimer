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
    "43o6cUfs2H4kBXexSgzZjPkFPJ2KdVo4mfTSopaEW8EPLqCf6158omQvL71DBGDxe3jH8w1B1aenBaNr6vqWYxBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBcbtdirivTCPSUGtKNiEQidcY6z6Qjr2bKEUZG56PGcpVdbVDmN1SS3fx4oTbhc4Eenr1qkcN1aHFxprzsTLCB",
  "key1": "YGfnwFfWsWKsD1oKhLKFhKYTUnmuqKwgxKJvE2thiVYZPDfas16boNFWDHtuy62mXmigGuwYKNDqfHgSsDEpVmY",
  "key2": "2gtTWU7zyQHSUH74ttKyfmv2EPzG4SMN7GiNAeoE4hrb1k4LhzwwyNTA12zzsshkuBQTZTNrobagdCBfXUFA3Ap3",
  "key3": "3PLhrtthCqNPTMfRYVmhwGXMkM2LNG4S9j6ag97wn3krcZrmV4xefKc231SKuQSkPY6Cb3szWdugqVZBDprwCz6o",
  "key4": "35Wy7obPp9ySw9wLYMKXmKfBJVcZKCuN32ySf7FKd3Ufhx4iext43D18mSaEtxomQrwW79tqY41i4iRUXg6EJ3pn",
  "key5": "5cqhH3oedDTP8DSVo1vKW3rGDqU25D329XRwP6nehyRwv3MwEFNMiHoxXuaRYYf42o1L6yU5De7f4HcDz6KPzkWM",
  "key6": "4JowFFoS4B4Aunj5tnMAzhgKfaus13ibSfLsDrqb8pkA7PTyBkQdHdLy3rkoV7K6jLxfEwBeYRnMnwQReAnuHMbK",
  "key7": "2bch85A9C2KRirKcUx6jdUs79DvrqREmXErbYUpWXaY3dZrii48d1Nj7XuEK5QXx6c5Znyuz7fFnNTR32s7EYkCv",
  "key8": "45Ahnfgb8DcJg5mG64e7RDEnRrrvbvsXB5A12gCKNBTXFnsJYR8diBCfvNdMqQrFQLgGQ97T1qFpujAss9qJeqkp",
  "key9": "2ayBK3AnxSXvoBmsA6b4zw1e5W2QFPYpBJQzzcP1132WeZaMqJe2hBvyXS1G9Z1NiKAePaPfzDJxhZnai4gDSnFu",
  "key10": "gMFsqgYruGTKS9QBcyVVZBp3dvzxjFdo7jPRYmcpTsSSUf5cPx29LvF7MQxiiUAjbyc3Thn3zsr67T523r1we8t",
  "key11": "3GKrPFKgLJMzmCf6ntWMvPq5MunhvpBFYoZaR8g7pPxoeAT6XVoqqJW1quTAFWmSgJiwBC6Hs4KS9Hba9Z2aeBZm",
  "key12": "NVFz1qKa9MKGhvTgiqRg9JMRtGSGP2uu4sEg4d8eVdupebUrPgLtbFepbYxdzjDodfvagXWdfyWuMpEWzdTM1c9",
  "key13": "4MHNkn6o14cBnx5bwUMdXUX73UCsdfx977UPwRtQEKAejmfzbfm6yGcUeszx3jNgN4NLwthJkUxTK11CeXYqWoqo",
  "key14": "yc6d3RuYjWdwibacPuQtuPvfyMQVwNTobudLC89sUroMukqVRyj69oWJRYCGSpKnDAX1mitufvheyjeoopMMGR9",
  "key15": "4XVLVBkHrhwfqEXgkb2VAiz1KSm4zrRmGTCRczFdP8AFB4zXhBx8jqsqB2WzoacowSVYbnFLo3euD1g7VN2EMUmZ",
  "key16": "3LvHLgre7V9ZCe29ppsoxhiY58oeagFJxfADMEevLrKwNN5ujis7GBaW1KcojFpJMWAWPBhE52Dw2hWizssPR4k8",
  "key17": "2sABdn1ruFmytsrpgfs25G2rqqkSXYixPNmWjx8VHRkDZazNDHkeCwrPsc8PeSe7Hd2ir3bniiLqJriUAgSGPjHK",
  "key18": "4F43Vc4MmmjeBL1VsFWi9WdA99rh61C3KqZYDxZ6iDWQmci85JkhrNNxjzX9VEyRJBq7sQDFf4Z1e5Zigg2UKFW4",
  "key19": "28YHEhf13rpF7tjq9wcSggRKryTB4eXN9xi1GahEQa64rB9cXEtVbm3zhM1e8r86fx6nPpH6zJDudB418PXhfnbw",
  "key20": "4PsNzYbg1cmumf18GxwziTPwPELbnjVBHk81oTQtATdjyVnyNxbNpEErLCJyGaB5DwpkPGy1YH2owSRKkEPpf7Tu",
  "key21": "2kKRB7qi5Loidr35zwMuCzNRmNPjJLVCxyTohqrycYQDJgqQGk5tYtrpWdLDAdFSwEBNF2LjWxwWkRMV8kbGyLrW",
  "key22": "4souWtP8s5T8vHYJ4Ckj6wHCfDUFjzmcr7Be1QzzhFF6it2bs1PPv8qvBj5Cd1eFVW45o1hWxfdJjHihEvZH1x9E",
  "key23": "3WWhL7XCs8F9HzkGACbhybiaFvdud9KkeME118usHBBXKVaWzNPbBhkM2EU5wX5ZRkNA7qG9tm3usNhaGu2HL5PX",
  "key24": "2KMrprLEV5RvAWzn3RKCCnGXKQ6A2DMURac3p73m9TgkDJeNmWARVQvtKKGQQ8Pjkot1jsRV73YM84zKY8HLZZXU",
  "key25": "454fk35QeUrMCP1FEvn9fhnH6ByCt1zFNjmovd9pNb7jAkp37Xf2b3YsExs63q7wEgnTaVvGodQQfAmLkmjgF2fE",
  "key26": "2XBxHHobbNYX4hczH1usKyTaB9rcM2Fxx8NuF3EXTiiRjtQXPUgXWUXyJZvwDybGwCSZXFPavLpx213CBqdmfofP",
  "key27": "2McCRJNjq7mCqfqLEENjaNgLferNWkH8jgY3KZEatUgbAQ42xA3qWojmfF4wtxspB1eWnFUD6TmHvJ8UBAazbRpw",
  "key28": "5nVpoB7jdZPJUffcuR8wL8mk9kZ94FHnZxHf48teH87cWp2haUB1BiWMPDCf6SbRHRY4BkidDjETLgzFsNb5rnZp",
  "key29": "5A8sYJ6J41PqyQbu21Vm5UWGEwtEawcwWZdmQahsSKnhu4ZdCWS9VkBv3QYWsNnPdxR4tx7Dc3QoAVyb23Hxd3SZ",
  "key30": "HP1EWqQPyub5PBKJitYQE3DPsME3ozRNEkPx9v7bcWGdomXuwfb26fMLApkVfM59XvaV2CieQEQdzqANVASncPT",
  "key31": "35FUzpZr3VbcYNQaTz2uGVuMG8eLYAAhiVidQN8ViojxqsfGHbFjGo6Xrjfh2wYXrmVjFWoh5BVDBaipycouWgKK",
  "key32": "5yQ6PuzNfTTp7f295B3us14vAnQY6fNsfwRHNiV3MGPs7Th8cyzps4iwLNdb1L1naBvf4wkb43SkLNgJrWVxbDyw",
  "key33": "3Y5YruVL1yYZ8avfcMrRNYR3oTHDbqZGKHx35tYZHtgtKY5nSPa13U9TX1y6dE2FRZZneQkvitdAmwNJv7ssc84f",
  "key34": "2ABSpZuViUKSZR99bUmrAWK61efLycwCrPVSBxJeVHtaJupxKZLSSfHhbZKUQfBoRJATNASvYRk2q8CNty56MZ8x",
  "key35": "4yqdgUTtSA9yV9R2Uu83sFTgJUBCfYN5M2Ya2JkWr324gQr1FTLgTvKRUx63c6cVgQfzsDq8Gjh9LTbqrSWAm44P",
  "key36": "AyBQEjU4CG57UYHgeLBvE857qxCne4h1Bs3PH9QaJ9Y2Raa4phk1m4dwdstEsBnNTdLJGssjZkVdSsKsQytg6KL",
  "key37": "5wdn9Go6MyvTWUj26zMpJs61CWiBDdUxPVB1zpAtd9dpEGxnz6nqLqt1nWXZw8qB79P7xYfThyhoDzDn59Pr41cD",
  "key38": "5bAh7kUEzuzwTh9EuA96skVpCTMV9xQgvNkeEsrqnxQVxfo7r74a7ojaqjVL9tVrimVjt9wgnf4WgDNDMaW9PK2a",
  "key39": "5sbg2qquHDGEWtMHz5STsucjTiBxvy9UCcU2B9X9vQXk7RvEiJdSVrwqQNMeY8HcpnCJXYWGQmw8wtpN63xXaY3R",
  "key40": "5M9dMWhjYF6PYP1Mjmg7XaqJGrsrhLiwYaDjdbcvY7bgAt4eCFdvgQNdFjUWnCB89uiyi19HLK8iMeEXSapXETfe",
  "key41": "SrE9bsi1mhAVrMbtbXgLUJsRiCswgxZNEAnX2n2A7XPXs7mKyXyhBu37ovX4usXuMBpV9beiEdWzWBjRPRJNecZ",
  "key42": "2hm8DTwDU88qv2V7L9EeMtWxrKsFNpzXMW5Z5B6iEkY2eKZnfX1m1DubSReeuLKhV7DbCVXT7Y5b1K1Tpsz4Jcar",
  "key43": "4o3CtUn5iZUPMFMtRAoprbWWvn697Bm4hwzhFe8tCoy6orRdbpD7BCbWuDnvXX9e2x4y5NoxsDgig3RamU3Lnfnm",
  "key44": "55knuZFjgYhYepQk5iN3q88N3PAVRnxzy9FmCx4182iQt1qkWMEGdznBnFRRVMhAZXBUL5tmDVCsUuW8JWJ3mZiY",
  "key45": "Zre9rvhLDCSYWcVHuwv5iJE6ovrP62iwbz9a4haaSKtDFQ6fGUohGewH9W8jbbWNNoYq4Y2MBmnPMmZVHh9h1Hk"
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
