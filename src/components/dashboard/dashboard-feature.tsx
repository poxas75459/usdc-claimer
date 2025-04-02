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
    "2YcVieaXhGdiQ9BgpjfbiGW4xiGSXmybdAWscTCx5LFMLr4QXbofw2FGA2Krdvu2ANc6zqGietikH2C8WRHoXqBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCk5M2p1jjcxL3TBFHZD3csUs3TAReejcTF1qdEJxmeK45BhLiJPM6xXqi5cu5KagKdAUWSizKaQEPMA5q7mzuk",
  "key1": "4QeXA9qsEXHzmdszhJfdv4sdyPERdvRRhZgMhFqsC9rEQa8fTtrDNdt5KqXbDuUd8Tr1tkddp8Us5nJ5sgthVacd",
  "key2": "5ugaa48YutkFwpAyE37Y8Db8wvLK4ZPKQYCNmUFfSJ9jatYFXqm2QNahWE1vu6GWS4AVZERXHHeoszjroNR6gvoo",
  "key3": "54MsBnxEs1AyDYU8hwaL3h9CqYSBJJLTuTEoZTRNg4dnuwCoDEwkkKMaMs7vv42NowmxxhTfLU1aNgrwJ9tvJEVh",
  "key4": "ATQxUFa4qb7bKkhgDPVLDYEY7EkU8Dg1WTv4qwVjYmuLYo5vsZn7wYj7AxhASe77w22gEhJB5LWyUcVgvuEmC9G",
  "key5": "HYtqpfJx86qu6L4dGkUSNDoTwv4ojtxrUGupXivTfKtNX7vHxjyGPtGte81X9wmfzXcAYkHhKj6iy8UQDedQoxh",
  "key6": "59ectx8DvoGFZUkMgBKRzdX6L1N2qpjHbBik7QHurMdt5v8bDnPaqAub36GYh65dxv639LbZwTW8vgEDo5edqLhG",
  "key7": "21U9A1Y3njfUN7VZdnSsRXxdKjYaJ5DSoGgqNu3pLGtdCtrZZcKWVNHaYajBBJEAeshBG5b8PaK3CwMDVKtYxaHj",
  "key8": "3cr1GDxDJLxYgAhqsvMKqG5nvBXR4vtd3XWzJjBNENyVTwXbZQAxnnifq6joyTvs1s3VmRLCmNfPmcrMxPik2ZYs",
  "key9": "5g4UxkvPHscQsPxYHFWB6W2VT5BWpydk1nLG8gpMrPynGgCY5beb5SuUMYNxpP8U2MwpbQMeG3NQcVFtdhR3pJuh",
  "key10": "259X9QR99Fx7pEv9wCR28NwhSXAFKAuMFEC4St8CCT4XHnn77rpGrMARC4NETENuiqQJYzKYCLsnuf5qerBb9S1k",
  "key11": "2LQ4QgZtKXQC95DLzLX6iH8L66FYRUCPrWy4VU2Pgck2dCeWzcqsAKCA7aPGPE4WKRbyHsZPf4f78p5d5ts3Nsdk",
  "key12": "mD3ZCfQVDAs1hnBKJqCmrxwvf7i3JMuZMcrRUzeZvLRSaYETmRQ7XwpFpSVZzS1tjiCqcD7Nf37uec8aPeMd9jC",
  "key13": "5jLHpTUbUFG5558LcmjFxmSRiYthGv3CFthhZfFAbJirzpnirfrFFC4Zi42q4fDeUbrtUizYpVKbyFBqnfKnD7WC",
  "key14": "4GqEPJfGjHU87szSuE8PBqmn5Vn3Mhwfh9AV8oYbZd3fnHBQa8CdonQx6BFLmCaT5UsMLcQJrstEMgSJbhPiHAMr",
  "key15": "4EVr98Par5HCikkiai9hFw1e95Qts8TGiUarCNxWwAdhq1AbPv5zKP1B9La8YpjXebh6ExssQzUY3yrFRp9eoDUF",
  "key16": "3gmKHXBycrJZhYHeZ6Wh2uRfr5Y2Fg6hUKymmgPRe3YGcRPPnseJ6x336fDXjTXeN7UE5RWB55CseENPYANYrkfQ",
  "key17": "QaLLuZpa5Pndo2Me7mC6pJpLd3gzJR7X3pfH7raJUq5jgG7SNquwjpaMpWAVNNGCBZTdXSKkzSvk5L2yES5HTos",
  "key18": "61Y5ZXTrCNmAwMvpAcSZSMrHKgCYr4pJNYfNjvE9ZwwHEyVcrwCTt6fcKjYfrg8a2dN59FpGYUutn766e5o6yaAn",
  "key19": "3TZoCPapi2rqmxx6bHzJmvmgEnPhX7ar3ByDwBS1Ts5fGb6uRiygKdoETDNFbvehStBrmwJuGTKjCxkhYgFtwiAW",
  "key20": "SkNLNtux6sqre33v32DuTr9NFfLjYQriC8NFgPqdPmhn6GXCo3GdRzoqk1gAr51iwSv9qjrjj8FuYBBNgBBmNKD",
  "key21": "2zWVCYAjjAck51PmPUYHvW9gBqrL29F5XDncGTgFFszG2WzgbKRJdrf6SMWyMUqDX4vLZWMQyrMCLZuqChfTgQRJ",
  "key22": "Nam7JALZyYfcV9v3hVTi1iVVJ5fNWo1Bhsu2UasJSK7WDgyo25nP6NP6uLgQQeGMCLBeo5m5UkfqXicBSN9h7o4",
  "key23": "2KdyFdRdXSjm5WJ2t4U7YdzfDGN8H3WCN6og8iXX7mqqicZX3wmWwwH7inirjWLUNtyTdZhYEeAkcw2eNZVhMad3",
  "key24": "5A2XeDTWhAH4CkaA3KFQreUTyTHoiHtMkj5qpVFwwG4yyWKSW8xgDcNqKEnWHAgRzPk8ZmpDcZ1rPmneZNDZ9Jfa",
  "key25": "5qPAQh3wcxxE6tPQmYVbXSuPLCJUefVMeMaHr6tfcYRRzjnGsZd1daHB83bUkTXbu3TLThPFfboJ21CXqSGM8PB3",
  "key26": "bdfWMooNdMdDgsev18NaCWwQ4uuFfd5ZRAUbYztHxzZBFDnBm6iMfvst6kfmpFd41m9CR3zE3obQZA1Mp9AvmFz",
  "key27": "5j41cvjtnnDnqeiDwjcW6jKfKsHNJSvQvJ6bVFBqS8itk7XQBiMwQP2EowBA1WTKLHr3SNgyX3GSN6nBw5njabyS",
  "key28": "2vWnvSENuN5Ni7fyB4QiuyqUQYfLPNFrfAusfZe6JvoQDs8HSdVKde38Bg3Kp7JGF6sssGXe5LumdimC5ALqXTR",
  "key29": "217Q3w379RuPfUpB2WjebWeKdrWARpBaHyoGPHaKe9stKTUxr4TuTwcUQ65nJsxMi9yLXZYJSJepBhAsqB9QutBh",
  "key30": "YiPYLt1syrJvSDCD5o3u6jyc1QZdwx1FFu8MWZdhNGc2ktr4kACPkmE6F7sRQQzGfMqrQinkFewUcdB7ZKu2sky",
  "key31": "3vxB8wUxsHM917Gyz1ZZjbMp7wZh1J3Le4cS4iKxndSrZMdX7ZbXU3jqbbUczL5LmUW1fqp2V1UMo3ZUvfKm74wh",
  "key32": "3XszFJ7dchYtHY3vSMQRHM2baQaUd5Aaqa9anyoYYjjsGWBE6GvG4FKdCytkK8M7XyBSpqJyQv5CEeDNSTKE4Xnw",
  "key33": "McSUERbatFsftQRtGwtK8Sru8YhZuUZaZCJw4iQdAgPfsMeFaxUYsFZZ4xdGGWhUyzgMkBYNZjd7YMTVtNpxnhg",
  "key34": "5NBH5iXbMuSC91fq4AY4XHx1PkYcAFmFrPCWysmGkQEnhfXpV5C5iREYVEV6AhBrT2hy61FajiB3UMAy4v8H5xRJ",
  "key35": "8LS1QF1Pc9eenCxTGmGSBAJnoeQWpjQg1oUoQ1jUt6Ji6Br3gwG5ALBiPNusPJSDqyexYQC9tfsQtSsMP8HwGuV",
  "key36": "5rSBzTWJ1yURn2DrspZe75Cjeyur9sXCDa16NALRtveXPAfByEczVohjapPbbH9NvUZkNUzbq7bLhmegAyuB8pzX",
  "key37": "4GJTrvUEa8rvT15y4TSn9aTkxsyghHtZg45J1go9fDQ3n1w1ZAbaq2a2F1YcztABD68NqhWF6xJ5EqGoeSoUDcFu",
  "key38": "5wPDE1SMxDEWN4g2w9mtCRCNZTn1rPKXJF4oYdPbyhgRrujxkUrAiwsCmPsxtQXUwsTYW2cD3KotpYsHLQKpVHzz",
  "key39": "5C7xQHGTjbNpjVPxmSbnKjF3Bj8wqeWxTpHgVbDFjc76aZtzLriXqScDte8kKYnXm3gWyFtnfKFw7qPUy4LtE56S",
  "key40": "2gukdgM2DLWnT3CL8nj5TbagyUR5LSnaY2He1G5KvWtqtt1tpKKLMKgd3eDRf5n8vkWySBH1xPpqqj8UTAbpxzPU",
  "key41": "4qSuPopNonPrsiFdHpV29Cz4TF97vGktj1CDYpPBTRgNtC4MMUrBMavdzyFnp15XrFZu9iY53VxLMwQoM4y3dBpv",
  "key42": "2Qjz2BfVVCFv2M4yoLHeT9KMzgmEYe34hPfuzDZvFKq18nTGBeaDRBrdpqFGA3ELMrK28vLgtXdp1mZgSA8usTXt",
  "key43": "5Z4gooufxPYi7ttMHpvkbAfx3cKZEzbSv32UXxk58hMmKgnMznBwUxbTXoNfkp4KU3aktkoq182mQ25m6nLnpu2c"
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
