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
    "4UKZatfN7ZjiFay1fusqrQBpNDXnBG7BMM7HFo2sPP6DRP6ETVCt1YEzFChHufAZ8Lv6LE8sS3sDAkY2ZRZbaebJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQRgYU67fb5tb7fX5Sh5JJZL2LR3Ph7cuwcAo3DsntThzD1qMLUGhXHrrodtSM2J6Ta14DbLf2EnCG4iuwkdJ7E",
  "key1": "2gsRLyMJ1KmABon4nEZV9F1aK3niDENsABYXoD1FgJqT9n92LDGk1CfcyFsszNjZ62oVCrat3D9bpoz6EuANhjE6",
  "key2": "5yTPKk4oFaYsyEdSuTR4zzBXFpfvGARPcdrCVZQNdFyU1SFSYtWvTQjDMgzbzU3sxAdU73xSNEWu96hmzdyXfo6N",
  "key3": "KrVPCYtYwq2u4zMUZxTGfFo3zgTrvsa36QDQD7MppgbCoPEo4tHkVtP1ZGnmZtoxHobd3cGuBSNPZqFqzh1iLMk",
  "key4": "XNnTww4YX8eHmc2VBPS869fspioYK1aLdGdDTHBMYkk3kEbwGAnEkiFBTpBVKS3FTtWHHpMYVovDFD94TvBcC7y",
  "key5": "54ztmZbd1ZvdmFURqZTEdQ9hetCWwahCawyJ6RkmcXSR7k9gV3quskZSW9EAagSiXMoFSPLnCGV35eDwsLfGrao1",
  "key6": "dWfsoEwQfwQjtGUBY8dteLe9qLprA4brNeKokSXCiY2KkcfmmFZUFnGh9s5kdjsJ7NXb7TcsAFpV6PDGdntfsCQ",
  "key7": "3Kgbyw7FShnQ3KApVNpQPFNjJS1bhsEvNxNgSRTymT3WX2CiJgSsnQ4UpYk1mmMUai5EwkAR8c5C3hRpCjqCYYSJ",
  "key8": "v6XGwrsMg3ZvPqRj4Y3nofEb94qvUMMbPLgZnGtcSR1LjtZeD1U3rmJ1vynTvj6gDAWexYiwj5gbv6e4wPGWb8K",
  "key9": "5aKoa1baZpkujFFH3KDm6nkhtfEvzKTFKEHJgPrNud2NvqQqKVjTrDLQQFrqfYKgJWpYyropVgZSieCzzGsZ13VR",
  "key10": "5PiNBE5ZfVNGXdsMx8ewpDD5V2813PsPrfxTbozv5aPkMivswTsvSeEFg6dveDxRvzsz4wVds1P6nLXhWEueTRVp",
  "key11": "62DupBxzLF1eCMCMMAHncGwbnPww9bWSAPvsT4Ewtb9oyGGvkRYCi2h1Z2DbSasy2yCmXiBRBk8NzusBbLaHaERr",
  "key12": "3Mqe3HFNhJ6sorTHk6xE2C1vQik27aVdDaTiU8XEQ1KBb9QM8Ti4tD9e5jJwcrQ1HdxxFujwXujyrxaiyVemAkh9",
  "key13": "4SLrpMefHZU2kP83ZeMxVoM8Njx3uQRvZcFufyrtH4edcKy5Az5nJ4ZfWbSu6DN77FuC8XZPbGt8vNFAscNLe3yw",
  "key14": "5MFDynfrfr6RcxoZcBRu212bvsdf8j1aJxe2bSeizUafEnYsDMhbZ2WQot3BAw4mWnri87cDXeSPzAKdtxe9Hvzs",
  "key15": "2Pc2ZkV8ATz78PNcExRYxNoH8tZRZJq2w47jv46uTG6iB1WBaLcaXA8uiMsU8NFbA1vfG91YJQDCofqEUwk1sGLF",
  "key16": "py78qZ8GG5HzANSKh4NiW7EzJY9H6o4y4tXUMtRZHdJz5JGmXvMzKvFR2BJAiSNiHrF61RkfgmBkbu1nL42BJCa",
  "key17": "26H9aG2suf11w6XcETTH2CFnYihCpqjSBRG1SUz6DaVugCYRp7EVsX7P5NAyG3pmrnVK2YDQfnjPAnAZX4aiG67q",
  "key18": "3rHm5rHHLeEZ9gPhrCXbjUtZoYF4D4bQisCbdgqifNTZvxdhMbaghSzrnp4ocy8frvC2cENwa1wwFNGQa6eREohC",
  "key19": "4UKh6pFdHCckDHSz34t5RgDaJLeP2xzaNXGaDDyckMRHqiQYAH61iU7uoiFXjVmavKkwPHY1PLY7HkRercJqeTN8",
  "key20": "4G36wYP1p1DdWtx14xeiBe5FgmuQSvhMGoZVhV3iuJSB3h9HoBpNU7DWnHxGKisGaDaZ257ESJ2QKebWTq14crJJ",
  "key21": "5TzCQAjDDVNQP3XmbnEnUK99kdQQ32TdW4B4Z2Wq2L452wZo6s3GMUo24HbLK3cb3edeJkmspALQVeFxAMnPF3JA",
  "key22": "4Jege1N9NghWFkfoNPVRQbVG5pT97JA1bGvdQLjVxiUhUS1p5FP5DrU6LXr8JVD5J7uZTNXXs9nPAwuCAwR88Czo",
  "key23": "5PKEsixxkAcX6mMA1vzgNTkFefx6F7n6hMmjqon8YVZe8Z7iAGCKe2na86JxA47d2Cp68yuQJnUaDGx1uR8CCxv4",
  "key24": "3BdVQfNvJYAuGwA8yotCbokvFQbCbYTkFaQZfkeySEsxeRA1dSNdu3AQTAgeXfCHYDyA3zcvUjJrwwVEj4fUyzjP",
  "key25": "3yUeji3zz7KwT3hM7ktx6iGqcnptWDo2qkEKzwgqSThqL9wZnNzgXTtdKmQorUnrHChz72FV8MmCdUKRynZA6E8P",
  "key26": "2ELvkCp9MRQdCnVZSyRSX8VbEd8YZYdwGzxcQtQtN7NbJU3siBmvMCAsWjFLunhgTiWKZVteMYGxUZZPh1dNchMv",
  "key27": "5K3tzPrK6UmLceZYVSXJxvdEgTgDkYoRFmdqzmv3FY5sybpPXqK9QFoWgvHYrVbLVyxDUQUEtHjW5WjWEV2XJVHa",
  "key28": "42dR4PRw1jVU7q9MaqFRg97kGCRMbSrA4mSujfe2VXnHf7H4foFzqMhYCyDjRHezfJ3ct9P1f8cbKVpK4saLW6dQ",
  "key29": "63zfdjTEDysfTFoyknnYEY8d54C5UbRLQz6DAkpuBUKeKobTJhyo4WZFWdDNfQuqJGKPVniHzpwn9hz4eENjKTAD",
  "key30": "4FnSiBsVPZQ9EAg5XH25WT3KYDGJkgYL1CAxJBJdym1kuJJYTJfo7ptWhEyJpVcesabDKwZ4J3zi84f3p2aUn4CH",
  "key31": "5rJu3mi3pjmjRk5FxVW8i9vKY5UzJ6JnRhcDvCBcgAAkAbaUgx6N4TwBt8tvfW5sVcVNdxDYs5aXnrz4wAVku7Ux",
  "key32": "2JsuLyysJspidBhSaZ3i35otjPefdJU5SuWRBdbhnr9KQfSD1RxuAnWsh8rM94dF7Vs9EXFnKGr2V1gnkwkRo7MY",
  "key33": "x3TTZi2Sp2zbjh52y363PnEDxV8sF8NYrQFZDTKtj2cUoXTuU7RFFim26rWDmys5KHEyN61mM2SLu7tJ6yPA1F7"
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
