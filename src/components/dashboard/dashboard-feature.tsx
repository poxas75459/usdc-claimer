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
    "3vYxt6uDCkMR99AAYSX2LNXYqA4yqbVM3J6S627CcUHd3dtVGncR1YmTbyWKqBeSS875udzuiMC64dc1LQ6jLocR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBYVAwpSW8R83zyc3kT7LthFQGdb9Ed6Ms3HxeYFFMg3szjYPXxpBj17eySYbyLV3YBQNuhtR51k46FYbnx8Y2s",
  "key1": "3Dd1oTcBE9neVsYA61owBeeJZBFesh6izBUXuxaSGrUeYxbE6jGNhyBtApnYRCHvFSRcbAF722h8SLZzdAPP1arp",
  "key2": "3fuzAUDQr2xCyFp79bM5FZCyPYf7fNkG3ktjADXY9DRNQPi36KdmvV4X88Jn7VdBqnMBW7Pzsrn5ucyf4kWRSrFg",
  "key3": "YVjuQiTXoda9Fzx9vm8DfEpx4nNdV2MzuXEfSMbhLTV7nknQgcsF3gyVTBUz81tBMDxZjZm2SzddJexLB7j6ZKm",
  "key4": "3Zda3u4Zra6CaCkB8ghe4T2rRdr5v14LvyfRM5LjVm4YsX43xdqbkjpVMboEFUtTUqqpZdzR3FLCtn267hcQG6KQ",
  "key5": "2vMgKhMoLBgYbS5UukikLrWT1pgf43oYzyAuFyd6gJx7Etu4Qb3PF3NBPirvjrwa6uwQgWvtqWCCVaSAwRE9ZB3",
  "key6": "2cg2QxsWJAnKMehSg3sqG9TLQTbXPrLxRJXq9TboXZFY4syrXjsvF5BSGd2EvJMuVzWDpX1CNY58anicAx2PyDN5",
  "key7": "5hLFv3rXNmSMtu8e8pmRzNPc4YSQnFSok8BRXubJpwfpbnkB3WN9WerAfWijDWcfMiRyu85ZaMhgxFtyhd6x7dU8",
  "key8": "uTSBsuwQt7o1rL4eKiT2qvo4k8WArmusiNyrod4AFu2ivwKBrgngKUHb7TTDebSceu6TfX1fj1RHnsZ3xPgMPvZ",
  "key9": "2rxZa7aP1SeW36VrzZNd91ndF5X252DMSAtsdshLgX9VFhakqGeGuW8KkZrZRGD8Ae9gcpFrWp1uNDgM8esbVeDP",
  "key10": "kEvCuFXoVqWCSdX4zybph1XpvAZ2yEENhbgJasKcaoYrzr8y4BzidFhTiwGsARaSozf7bgfebWPbQ2754iEzc7R",
  "key11": "JdUCCxRiMu3iHotCECiqVo4FjFQxDzqJg2zD7oT4UYPwLh4hPMRuqjdEwZa9a9ZFHGTsfRs7EjR5tpXRLEM3KFL",
  "key12": "4yLpTJRZNtyxAMdGXLJJMGkHP335jnKTPDZBYvfMYwjEVdQkTr2qsnpUb2f5vjcuKCaAP9pjCTw5Mqgsqb6uN9xH",
  "key13": "4Ges9MoJqAcHgKBShF1Hryvs37xskk1VkomqdhiJ1zZxAbWevnhMhytygCmFhDc3JqbyJohwbqgeWyGGmfmH7GRX",
  "key14": "5zDJHKpdL3v3MFnMKptWvQzHXcR42vT2Sm1dNtYACC2qz9ifJ3vG4CEU17ttAVdhXamqR6Nw8HMxMHo7jM9GjSmt",
  "key15": "2L3UFy2AScU21cTKM5KEeJZJzwJwZnWXVfzocEktWf5kFQe6EhjtUQmRpP3He15zV2zREUF4TjFRPkPUwpacTBo6",
  "key16": "4TRa5fWTexnLkjSYaDTcUAF1VWiiS5a22kQdruVD7va2rBfbtP67C7nfm7yRYXzRbTx4MrXcaKNgPKM4ZLjY2m5X",
  "key17": "42zWXWzQR9VNbdUyVtCYR9ZKnXnQEWaxRiJyWxP1ZsuCzKVCGrLrDSV978z5yHHMb4H94FZVRJcfvsHEo9WDjjSR",
  "key18": "2Su7aWHBMUTmJhSaUQMwocNMFCFgqaF7kmQgxAs7ntBf43Q1UtfYeRmGQojRZUp9DZeX2nWY8GSU8QHFNMooHmMs",
  "key19": "2jFyGprtRwpGiyeSArE179jntS58xESd3xmJWj6oatf7wmEeVMci9WWF9CaThe8wjrBEJrUKh1nzzNxRVHrhQopC",
  "key20": "242b6ZbWbyGcKwU7xxAem2RjqJ16UcyGBEjRXCY6M4dtfftUHAJvyxRo4T1DsUoCZkjnude3e5zsgLqHPfgsQpaG",
  "key21": "4EjSxmhu8caf1JaDee513hjzyUdBsemxEGJdVfsQHkB9hLLuSNqeCnWA2xfFcgFW7Nb87chnX4dzJYFvbEUA58vv",
  "key22": "mLLqqCro2KHV1ZUjdq9vZrJWnoEKqSWyVCTeBrjH7AC7pCvZE73nxbaYJNeuo8jw1rCrD8qcoNcatdYwoUnkGEU",
  "key23": "3XWHHFWDjpxnJfpXagSVFUzyrN5ynrPB6PSuj6MFXnktApCBP4MaBdqpkqVsvMb1VvKZj4W6aFTSdJVaDjGXJ6iJ",
  "key24": "5cwXzwLRKk7nV2TEBPJ259g9etWxGkNh2igcWLm82gokLcD24MYHb3BENZRZs82acCALp75qzhMxoGXhRckg6RoQ",
  "key25": "2fVachtmyQJi2drs9q4Q2uxMc7qFaahqBKQavBUQKbarzVZcCYHNZf9nhV9o9SgBVZgfCvyGQqV512znazKV2U2b",
  "key26": "4uTRC14i8YtxhZh3Qr5eC5Uqi33YptMHT3qSmYSrhM6KrcBtKoENGaht4WjSzxmjKYkP9PFPWeiNFQCPUVmAaD9k",
  "key27": "fPg2PTGf9uYnoTRyVRVaCJehVBhY9csKRJGz2cToRGstM4BAXEN8SMB63EyfmL83aeHpgBb4mS4fVFNWe97jfva",
  "key28": "vR3VvoDCA3LgGnqTC8jjckuukMaV7nxu8wM4RdExoGUvy5Ds7vwGWfNPRcH5NJmv4i45uUYN2mnNrW5KNVDWqHP"
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
