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
    "ma8oSiP63EQ2jj2YgTNA8MJXYzmmG34gJoB7gUqxMHjr4q8zJhenA6DoFZaAMCiVefo7AFcjdhmVoGv6cvrcPBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243Sr9WapgZzSFFo2yqECbo8E9fDwj1Cw8zVmeVKQuiCKLi7Nq9ZV1MxnAZrW4PBo9UdBS6Rtx6ixbhV64MvZtGG",
  "key1": "iT5DRXfkoBpT1VpFiwHSbCU6C1a76t9LCXBXaV31pXMmujgTNktwCeyfKGkBZcQQwJysWpu2KxjZQw9zpiDQwXf",
  "key2": "4gCmFEABd5mJ3g9CirRkNgXbxhFjdRF7SsasQz4PpTM9RvXbWEzGQb4puQwvNdSyhsigeyS62Qp8nR1uW276ehFP",
  "key3": "3bW1zMPrdaXSCMYXMa6CtS6JjGVEruYBkdCQFrwuqhm5mnk6oH9AY2nvmyKkWaWkf6Xwv5ovmJ5rtT7jP5K39gSW",
  "key4": "2wcyNboP5Gb83X8gWwoXzko216bxKWX5ZAXVj8YjdECBuvrfWRMgAgbWmjhnyw8okDeitg2yUs7dHfRPvtcPVHdG",
  "key5": "2FQE29tPeb89wwJuDuKdrFx3tqRp5Ffgmo7BVNTo8TbY6qYejntGEQZd5Toy68Rv5YTWTinhKFZpwnffuZEZ7SS7",
  "key6": "5YSZQBxQyQc1e13j6NmnbE6bAYKbCHT8831jg66MDk3HcAdEVqF8E3r9mXpNqFsiVLwBT1UBxzVjK6YLtyv1s1Uq",
  "key7": "49W85b8adHdZ3d378dfHzy5ZEx5NdCFPcybhS2KnZjGB6FDEag13PhQVg5AUrHDphqXYc6yE7xtr4q2McxeEMKZ7",
  "key8": "53MXRBHaEt18Z2zkM6Qzj3sLPcWc77fYB3YMmbVbBniaypxYWqZikWu3CV3CpEfbKQkAhHS5t34b49pyUZ3ydZEn",
  "key9": "4fzrAKtpdtw6Hw9oUJcGMu6yRxHsp4C1Xyb3WE2Pz9uoPsYNFyCCtMzyX9PscpGXp8QRVojMJbjKP4sAhBK6HPvN",
  "key10": "23HCeD87bTz9MEutK1jmeCBp8r6Up4Uuc4bcmRQEydZZjn16anQaT4LdYzskjeDLZEGiq3sqK5mo7ufkJVDy77Ew",
  "key11": "4hy1cnimaTJbJtzqqmrSrNwBDfHiRTDngaN7hnQhtBLCi33GUvmD1oLfiX5hcBtHudoETryLh4ZCTXLT4CCpqPbi",
  "key12": "4GpGourVbB5z2apcNe2XGmL1A53sp8RAkiNTsyuTAcgGnDFZf3WrUqZqvryYrQaGPCvs9UbjpYVs1XxetP4aZCEZ",
  "key13": "5B2TfQRLreHBv6SbvAZv1qio96YFYgfHAnWRASbFsakaJghVrptyCqVJ3b4RDGtawq8L5jaAZv21wzhjafif76sc",
  "key14": "hLJJSh42ufXhvrjC9Ti6Yx5oBQoubEKHMCHjmBvWQgum9tqgf9aYg87WDdFg4StW5EetudkUGwTZCu5LZhZLmnd",
  "key15": "38qQ6SgaXvzoGAUTrne7LbVBKUDpvy7H2Ag9S6tVYbxpGvcuzXDaMeV8Vc7sU4HqHY6DUj8dgXXMzEExbJb3chUL",
  "key16": "44x8kcSU1hKkLARn27D7Fg7s5wR59oFgy4GRbdcbAvp5eyNKKksboriTLbyAt27tDDiVkTXRj4JYjsQrrjV1vayv",
  "key17": "4xUfTJX8LkYjdumXWRbtemwFjnevzRL9sw8khaCkEBnFERfky4TwkjLezi2QaKwLyFauPuC3sc9aa98ihMfVzRmF",
  "key18": "4Pp69Lr4iN2GD4FeZeg7MiBMhDp6CnpGwariUnnk1KZtL2Y41tgf5iMVf3WfFnndRzPByv1A9FwXypBudwmCv8VZ",
  "key19": "4DVbvECWnX7bfjb63mESZe6Ru7tX9cf2gz273ycGKpeAihfiJpJW44aLsujmAfp5gJPpU46EBhDyHZdLhKhNQK5P",
  "key20": "2vUU4EcEL5BdHXUpjHyaRR5pysuzaqcmD6kE78s8zTi7MXQv2W4PZP264fZo9PBHffxvKgUjb36YqcSDRY5berRC",
  "key21": "5ZpjKijWJTFkzDRspRWL8gGc7CLRnwJjvQc9bpnxzgrhHvowkjkHQ4iaEB1EvKhdoRjhmk7Zy89XBLMBLc2BBceY",
  "key22": "4QDfnSmT2TU8rJC43etfdFtMdhMkmtJa8VjQfJ5iL7FMEB4EnCWhdactp5sHJ2kygvK6UVHGoLzLoczHEhMKt7pt",
  "key23": "5XmFQ6DTbpLrVxa3Qo1euH3oYZKMDT6VpJ9U8oVvAipVt5gmuCxe7y761LyqsjAUD58hDfnLostY7hfWRH5bGXLt",
  "key24": "5Ka4FZVDXyrYuLzjzm4KLW4DWCirx8zs2F7NDMgHEDme4np4pUmY8bj394FUJhD7vZPeFYrzCwQTYSE2FdE7Hu6N",
  "key25": "654JyspEVexW347vpyzATR7FuU4PNF79JcGbyAcTr3ksrATuizSN8CKKsixvg1W9E4wUWVNgBZL7YghtUYXat1Pz",
  "key26": "4vj32MRL1FRGxsuozWK6bJ9pHNzevzk6Nj64Dwag4edvT2bdvgiXfBnxUJzaDVmsVkxqSYBrbGQBeM592cRn7gGK",
  "key27": "PLxrpfp7kfKSG1WfUqJpa3cDqgmb6ocLBzkzk42SHGTF4Cv6ZFxHpv1aHR9WEUYW8XVrsumJMhsiWSPkRkfMYQH",
  "key28": "28oXAKtNcxsEzAWHbgZHVj6oqyFrEHYEcXJVDN68GvMKhDtVR3yQjXqrzxuunzrsDiMcBYvR3xhFxwLbiNn8W5u5",
  "key29": "5RPsduuwJWqMnsB1n3jc7sm8rhsWP9Lwuw84RNmosLukRHzi5wS56DzBQfL7aKJSVWdb2hmu82EfsBhAkG7nSxrU",
  "key30": "5q69fcb9jNnnSSSjfY4FcXxebD3y5M9y2ZGC2iKLPNPyQWrDYjRSNw2TnuGcCpsbs4n1jp89AGKukNTFxsgFY81i",
  "key31": "4GarZ5Rt96k5EoEhp6PW43EyoxrzhbJRakP2s9NvAjLdZpFCQCTUY21ikKn8phqCwyVx5mo36SJg1tUERWgqxuoC",
  "key32": "4DDFeL8qSyaPCUDXuDQMr2f4s6kphV93SC84QzYv3bQpX2286y279uEEY5UJKMvoF5Qf2s2hBHFkjhXfdsSNNqJ5",
  "key33": "3v6D6NXKy9wMgB5edz7PgGrXr3EZjZNQ7Ffpait5mv3iddVR7tjRuS4gX5GaDjygZd5pRtTQqmUobsfYcsJyaAii",
  "key34": "65g4NFANNRa3WseQ1TeTBr6VxY2VYF1m81MS2Us5FPdV1CSZeatoVqLFmandc7h6KLHyHFiGA6XbrujpNtvrX2E2",
  "key35": "46CDpqueYKcXFB5cdexy9Lgws3QZuuS8zs779hkJzUv2eDn7Qs3xwiJN2ZadvYzm3bcttnyKoZfEx9r4eCYZrRBV",
  "key36": "Za7YTMKSVy862E17hjPkqXJReRb6DjzYxcD8adYPXacWvjFEqFAQFN1w3XwX6CgtXJAcvygQTn3EvpsTxMkt8Vz",
  "key37": "3pQS86zrsNNe1owssL4DEX4oygjqUWJMdzeK6L35RnsfWNPoGqW8Cbkufzr3PofSe8fJhkf6SM2pEC9ex7onqp23",
  "key38": "K3NhqZT9exczyzWjqDKz6so5A3JrkqYEfRmkVaHHxyXiytHemFT65gbcGWaWCuyX2hGdbUtpbzJiwR9snKSbbdh",
  "key39": "3LVby8guLwxTeTn7wdQt2ZFro7nARmdjatDT9qwGRsfDK8FxijERmEW3MSErKT3yJmZQF5BVu2JYaHuNUUkvkUuh",
  "key40": "5YpDEDZzsQsayR74aaKrrxetS7RLGJd3eowQHVHtgh16HZ8W6QPyExS4VtmGToKVWEZ2LV2DHWkfbuxYneW3sfHJ",
  "key41": "5WqPAoLSYHvhSHsn72qoHqefpV8ijukSwMLKFtkVKWurwEdwnLYmBDGsarFqGT4VheNewo5ozUvi8SH6m5dVA2Tn",
  "key42": "3qFVovPijSjc7kdMNZ6QPw1UUbAYjucyjNLvqEDiQcqEXnMp7pv5zB3WzMH4ckN6MGAXjKDjsgYoNibgdUazV35S"
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
