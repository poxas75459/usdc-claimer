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
    "4tWHJdVsTQDo1s9gDf2RmGTjq4HtydFVQtyBF3bND6YyGCHE4G9NnXbe49nf7FYCCBdxRejkpzHqquQMoCbFsfRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCeLsWKH11V9qtjDvtRfjTB1kJzPFRYdW8uGvvRJukdGTcjcTtmKw3vBvjTaPXsQH4Ve34XxpwQeHGZQ1vwi3qB",
  "key1": "4dkDkidVheE4ikxanZxQQEtfqzAMtVvcME6bxaLoWhyzatCWHAchKcgfxCoLd6UPiVoECjXCnNAykrfTn4E3uifN",
  "key2": "oUm1mdRZxE78sFA2e7XzWjQ9byo8YsjNFSXVxDSvSWEZDx3kPnx9ZogAk3T9RBxRUijDS16hpHdxwL6hWiZbGWL",
  "key3": "4BEPCBPfp6H2dE4aQBYcst1BWeSaM3HKVtCdBoR18YDSPUeV4RfNavYmXvL7hznbTYBeZjLkVRBJfrZX8PJ8xmvd",
  "key4": "5uQdNMGrCGqwnvn1ByLvF1AgLpsP9DwyfG6Mtr3ME3Yvvuf67tksqkK9a1DZwiBjm3n6EE1W9PgeoWXWCPYjmAZM",
  "key5": "2f2rgsmL9iSzHpKL4VNYRRW5E8csCzUoan5W5fT2kDv37ssCRmLhxDE1kbw3moftH4ehXsGq2gPDXg1jaUnE16A6",
  "key6": "diMLmxUcVFLxLHxGXbmYDGYMHe8weP57YS1LPgivx5oihL75WY2WJjwmwF9R8UTFQiyDqDnJk41ydocXqMjcF4T",
  "key7": "3eSHwfw94Scf4DtuutyJyv9TRe1y3Ky4e43ZFh1LzsocMWVw1gHf8xUUS6sX8ZuazVDahYLzYCt4YeQQ78MNa6ED",
  "key8": "5BNJW6jSBoTc9oxbEJwsu83reHsu3WZkELJGEaxzgS9BoP6DYzgzy8P5fEaFsD6PB6vDbxfiW3xiGoh1XVUhvU4t",
  "key9": "NryDjfFuHP1NC8wadnwaZJYTmkPU1Ca94jXLHPsgFnmASMwrdCqppGDZqJqRC485SzbrUvQZYDrGydTgbXyDVSB",
  "key10": "35CF9odXaij5hAkvedsCS2DrMhJfKDNbppN87TY3Sq98YSPUiEdHATYc9GKWovHH8uKpSoZBM8vxADTKJVLAeqd",
  "key11": "3ZPeHA7KkcFvMe4kfgiSfvGRGy6Jcd4phr1A9TkGP1jLdtt9d1LPrUdrDzdsp1qeeJv8TWDTC9Pfnz9LSFVWTybm",
  "key12": "3aEFs5x24d18cSzZdsS3Q3vJ175aa84NgMNsaXHg52NBCbjHqcNDaq7Gmx5eZTFX6m7kaArgx1FYXQrPe4PnrKS9",
  "key13": "3hyFiaJguWX5rc63kAprezVyRtVcVisW4nqPrcMmF3L1rrnSQ1qPcbdoazzJnpoZU2TdnENj8Eg2gaZjtKmaJEsy",
  "key14": "3H3XPVSLFRjgjfTYxQEEfABTAmvCsPjtY6vXn3hhgw1sUp2FLnN9msx2XKrPgBaXJbwvnPpYgBUzAZJKiBC4x5xE",
  "key15": "7sCqgWLdMHVG5H9Ycb5XxhAe4bchBjmCcGBqYWvtik5zDAUDMnqzNf4WDrSg5ZJasHRmdsSpa7ZR5jRPAnDkNh5",
  "key16": "66jJbxveoGD8maPLs3oCwvCf8ciCPzRxcPFGiJ1XAbPGhE8L94fcoZXt95JUBNm5uWAX7QL7nbTDZE9LFKbmunme",
  "key17": "4N1NvtXNb4EJVW4wP2xckk64LcLZWijeuYWj8ag1yQVV4dHhvbvW8jPiXE3HQ6kctvjxXztGzEC6KVTf5LbfwSYq",
  "key18": "3dGBXsuQ9DtkSJsV678ENDuV1X2d52i3hDza1s3wDQRJpPyviV3QRctfvyjWRtcrVYkrGBJGzBYHopbtP1pMkxy",
  "key19": "57NvTAEMJswq69yCwdkyWX6cwQXYfHHAaUUdqGRqaYXdRRdNjJRf7MVh3ndpo2WpudyXQ9B7dAypnEvoAzdZDARp",
  "key20": "3QGZf3UZ4mk3rV48c21ASMwd4aRNPtAqFWdLcdkEWnKEWcvMc9rytnWG4LznE6XGeV3BEbWk6tuqwKGewp1WH4Uk",
  "key21": "4LEiiRwEBZYrgxygrqw1b16xMyhmnQyQmgrUJZsf5xiZpirztANbAMrEx2JRDvkkiHGSBgUjpuvDM2ovLQA8P14m",
  "key22": "3UhxpJQpFEmuHHpyXZ4iPsFx9uYS6JeR5Jtyiovxrs17amsit8VuoNuaTiNr1mSHsZrrrX5kE9XfgS2uxEneQUCH",
  "key23": "4rJeBcW4EKELFW59XdkrxjpFha5q9898ZFAKAw58ap3vkX9iGEsGKDC9cU2v8bxgdvZVrzFXJE7fRXceNtvs8DEG",
  "key24": "61DeENzJ13ewidBphNc4cdqR6C7168Qs4XzfazmHhcGAQmGLQdMiuUYwr4kkCVeXMVjRAezgCsPd1siouo6Fg6h4",
  "key25": "4t7q64MHgeHMAxgTGZAuqZbcPNNqffVPJxC4ufezrUH41FLEprTmEk7Tz5npFiRQDYXqXVabQThShK7eBeCnUb2M",
  "key26": "wLMpv6zLjFSaiSUfoC81xMauVW96wQhHzcyM9w7i7itTatUdLs8LidMQxhjkyD8DWsvxZZ1SaMpMtVhDjsfXw6p",
  "key27": "MQdT3XuFRPK8BoahmA97BxdoEDscQaWtkRUdgDx9QFy5wvYzCze8st1EF5CtBFexrUcH4zUHDwoqmvUaPHSFAH2",
  "key28": "3GdLDA84iZaF31hwo9VFxb14iEjier5uf7das33LKX5cqH1N1XPok83wJj8zx6YpJB2fZgqL63qGDvryzSLahVMB",
  "key29": "4ta7p3aqtZT527fbqvMRM7ZcebXtQvTfcFN4KiELK3FJSKqAoRPWysBzUSiAJ2kEPttaJ2pYPUwkzeKWa2PkZBnX",
  "key30": "4uyC1XXjzuzDMKN7gRPKFALvQVmnf6VjToRX4gjUQVjRbo4UAJ4gAtQA5nTqypzczAt445NBZbERnwjG4tbnZQnk",
  "key31": "2rkC3jK23982yt4nawg8gKRzXLtAYwNkbPCaqg6zJpnmB931onS5v3hjYebidiLifu6xCWP4Yn6rf6fpaL1x5RN3",
  "key32": "2RV2reimj9bVB1WE56ntBeoYrMFNvBaw5EMpVHow9FSGCbVrXKtwnLiedS3FTUdvUnw2CaQHbto6ApxzpPU9VzSE",
  "key33": "3L4PWanw6RSJ6FaFu1SQZjnhDRzUvQUkvjFFyZfStdRRuFmz88tCDFhfbgo4Gh6ACPXGxjAQTTXgCFD8rgfkshdR",
  "key34": "3GrVimnAshga2e1QHBTD2jntr4bsQSG2b41rPBPfqn8svjsqYtZeBEAhRKF5efbwCJnAkLUnJwp5GwA9GH5ctC5R",
  "key35": "KPJ5H7Scvymm6HQCbXtJ2qFDYayEEdwMzk2LEywwEroHhJYmgBF8GuK1g6qeBMDccpm79CgSyVaWFLYwvXW5Lne",
  "key36": "4JviHtYvrgzisbnvTJ9qYot83TpNX7UTLdgvMfGgbzvQZ3jtndj5VQeoBWAaSkpnC7WmYpv7abX8DkwTv6FGHKWm",
  "key37": "65FotPBKjJXFrFWrMc2xAVhszBR2ogExeahagj6Z9Jo1qCQ5UESQCeCLrH26z1QpB7NwsTpnQR3PMTRJGx7S9zSA",
  "key38": "4aUFNxhZLTpdYGPySt1tmnagcXKA68xUew4KpEbAdmd6ka41tQPjLXG3MAyVt5guzWRpFYL85g1tQRYe8ctX1gYC",
  "key39": "45tKXzew7LJDhinTnKVA1rL9fJPBBmaLbghBQ5cUYPffZRYag81E66RUEMdRud2ZxRsY6qEtfP34dLwrsMxzfSeX",
  "key40": "3MwUFvtJsRdTSrgXkmF7j9vsUwmr43E36CdrP1bX6L2Y4FgA8LDvTTgZjynbqo1cYrhjpZzcJjeKEMprwTReA5Ca",
  "key41": "3g4x3xiiHcLpUszTvZrDNWMRXXQzxGcNMnwp5pPA4aPoxP14FonB9yvdgP1Ny2yERf38yAQWfRcsjMEqdqkBMwNe",
  "key42": "5CXGcw49hYDc5wuyYdoZwhPmhxv21iSzqnmimPzVT89ZBA4eQ42kNHNZ3F9avEKT5Ag96PXQW4FTwTnujdLuhMDv"
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
