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
    "3gpBvkMDNj7yj4H7ns3ugvrhJM2g3Gvd3vwJM4VF9p7Gku3dEnGXbfSWBTh2sNLZGuqaTWTh4fMVxg2qs6fndKSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Sa3HU31GEXtoeq2Sv3xJXV9tMXbTRVG5zkwmw4sSHJwx81jHzgh8VrU8NShCQ1oJTkmPBfkDnRAq8d1UzwBp2A",
  "key1": "3XqriRvvYJq5vrRa1MaA1rqqgTdewNNPuaoTKCUVwHAjJj7Mm9FZYFntEd4CeQJfg6gmtPt3orW8MBKK4Kprpbqi",
  "key2": "31hQar545Y9peocJkNfUAPcsmdUBRb55UqLTB8aLsXGz9DerQL6ctuWeTSDw2CgYCcXtJaYyct33x3faC5Pgy6gw",
  "key3": "59i58Q8kmXY4pFr1GfswRDRX1gbkHQkAego1ApHmzndFVYmKdQ2tPzGPuJFBEifBdjyHDBd3iRbdxeWLwLdqHJ3q",
  "key4": "38wtG3zv19FF5roq7MLKMYNFTEhR73d26MoVcZdnsxFXd6rMZCtEsQV2ZQeCRkLieGVZrP8qjLRDvDczwDBypKrn",
  "key5": "46jDiSrGirAZd3Fu26gcd9uXondHrGiUEM6zsYxhwRozyBkXb6DbHpbe1cMCtjpbmH9qzBKe75GJgDH3dkc3FX29",
  "key6": "3hx3UhA9nYJ2enrrSXsX4VizXoxTzYVj8xzM4L1RcxKtoLkPsTWBm99L2LNFo985kSuxWmBTZZ1QDqhdroMxftgd",
  "key7": "53LGhWCwD2j6UW1QukwBn99i3Atru6WBjXynWprPmWHVhi1s11mKPZmuGYj1QiiyfPqsxRHYh54SyJngTB9ZFHH8",
  "key8": "3Laf8ufiH11trKus7hV8TUYwGqfKV3YQFfoEnX4FkyfbjUb6Un5v3LuqCXuwiY6GkW9sG4YPpQiyk8TeyDYH2sGh",
  "key9": "8C7NuhjNdApnHURUvJY3e6sb2T8C2rVYbehCRTZs8PmXB6syaQWceZdwRFo1XdBDvrEhZ3iS6MZssdbPzhz5TwZ",
  "key10": "4itk6Tbj7ZSqgoRvR676S1fuLdjUCJdrDUBcMMVAgzdDmM7yfqFtNokyj8Pe3L2QAHYmYorcKgNsPQ3J4hbSMjCX",
  "key11": "2JNkX8pcppJLSftFD9Cj1Usv3VhB47qA2SXRD34SMEaJaMwkaaWgtqcEsNA77aQYM8JFSpPjDgC8pYeX1zCogyeC",
  "key12": "3on9fzQSaqFn3vzBzAGYYy1HfwaBEEZYckCCAPbvkGoRHEoRSgC9ftLpYJ6U1QhNfHEwoNyVvyLvyHJzvphnmH85",
  "key13": "XvJkFCGb7474V4GKZfnGuCiRXR59r5Ue8Z8gmpbh9kSXtMsvV6tYapNe3hwqHpAy7JWeziTqDkSu1cKyxeeDKGA",
  "key14": "bsBBNBwcXqoihSfZLAbeLTHWC9qR5Kzt2GYZsjroXFTLQaJ3K1JxARC7XREojV7uYs81jbxyqmsf6yryTgonGMr",
  "key15": "8CudHSLinBGq7E1nruWQ6w4VzRZaAe8pxfmrRdr6CgY9SzA875XfUMZRM1ibRksQ4E7Nn8vVqyM5TrKN4RpV1zz",
  "key16": "4sYMqzFQqSZscWe944xQ1oqAs4yn5cad5BPvbBU3KQaFNVFL12JRBSc8wa4veQc9nLuHUBqdSUT9TXqckk5etafR",
  "key17": "5qjVZkVoi8zNyHAvDuA2huzxyNGuwKfzSbzz9LWu3qt4stCn95Tz17rFLkoYpe8xiqRZbXz3ZrGsGsDygE96qm8e",
  "key18": "2YSBBLo8Hm5pJAZRd2HUF7F8ib1XA8SuKRhX7Ejb361oZLE6v28vNdkaXHBgK3Y7GTtDC7EvEtuHqaYEzjwAMjUm",
  "key19": "5oqLnmCNAeJyyFCf7tufAHunmKz5KKpaFy7ruNM3tUpdMZyoCj7bhzyeB9nzABeV5549yChLXDLaUKYYjxx8stnQ",
  "key20": "5ZVLyKjpB5D86MtZuXsc19sm9oARi9syAJK3piN8QoXXmevRGjnLcFyL4xCF73yw8VexquUB9Ez6PYZkqeykBG3f",
  "key21": "zE64pivRTQWPZQM3bWzyDAYqFp64Yax1yjpZdkCZWprBsgDjoucvpRFyD7LzgQMweV5naYCgXCeAdrtboguhiif",
  "key22": "2Cz2jXfpPbtQw4Mb3K9TTWWbuUfiDytuFqKpfwb8z5FycfUToyZTCov7n8XJsjgrowfxPLrSg2w8TaWEx6UCregj",
  "key23": "uEp4qkomTM1G4hmDJGnqsuXZf7pny8oeR4pMQp6TB7dY1qTyLjLRv1Rnt2fCptmQdy2VpGZbknd5thjAxjuptii",
  "key24": "2WuUCbYpPVMgzSw75PmYteniQQjtz4XBozupVqv9ycUiAKfT3SaMwXkvTyYqojpaivnM6DG28NWH3FYSSfYi5Fwh",
  "key25": "5UNjufwZDHvL9rsYo59PpXztdfmNJF5H5q5AGLA2uuqC33zxRSyKBCg5juUEwSJNYj5sDSMes2HFS24Us5zNNrfK",
  "key26": "5m3SkcKo23N5bCASWzEnmZ8mXsrWYjZBKhNSWjMmpjAhzdpQiB9iEjgi38zNBTuBzdPWXVu1S3XyEgUgArMSnARR",
  "key27": "4DpQqwdJL6qZj2yFbZ2KoqwHaKXDqXruzBc7bhfDpXhYiqa3w2Jitay73zGzjGmjB2TNE42exySXvjqY71C5yZJF",
  "key28": "BFsQjvNfdmEEUXsASFSGYmUowHZbMCLQ89rPub2cQnqTDEGV7uij4HuXuPnM1KPnka9foVGX6onVntdbv8N9bWb",
  "key29": "614P6YAnBKmvhcweXskbMSyNRh1EzfLeReuHqDb6eqQptr5h6xwX6Ru5VcnFGW7xYpGmDUrvGyrgSjnJRvZQ6Dig",
  "key30": "tDmtwgM72JWVA1VdtaB2QrCREA79wKUNY9KJAqCvww9nvcvoFTB3MURaNSXAApmgpygjvqRE8e8duJustZrrbx5",
  "key31": "ca1j1Jhz5bMUNcVBwcrUrp5VdeGGFuSYkM7oUDk4AmnR7ZaaCcEK3AeWyZMRvkQtFBjtjSgk4GmM3jwwUBWCBrG",
  "key32": "2xynWSkYaioMCHMLPW8Fc8F1tmApzN8Yju5uxQCGm9xy3isMgmVHzdsrhvHFhx3HPR9hftyq9h7vvbVC33kHLGHP",
  "key33": "vCDhXfVHcZVqw5rG2V6XTbmZXKZ47Bdp35vBv5qFdq1aFwEuAYKB9cg1S8htmgaTUnNWy6gEEw2tGSaib8fEHKL",
  "key34": "4FZdZ639ds4hPWowFxi7kEN4fC5Zn3u2c7DRS7uxv4w3A9EGsVDVBK76BhuxUYCqbje1C542Hwwv2WKnCaiMp4Xf",
  "key35": "2oncUfAEabLun8puqsJZrqEVcGFBufnG6aGsm8AoaKrmFhsA5jNZpLPk1YP3RmaKf1DpEyhwre4yZPZfb89Cdu92",
  "key36": "2YUfSQmWkqspXQsZVPJF3Bg8PKmpgP7vjJNSPNrDa4pkFyyxZ3RSjQQ3ixgdYoUgUHCYXRDt7oo3wWXJ2yc5ourJ",
  "key37": "BwxLSj1VCAvVoU1Sg7Rmt788FeHh9ZfTvumeyU3fQLGhrYETTdDwvxCjPh9cWFoGR7aUmQK2CWYVFykPYtwEo1B",
  "key38": "4SHoFqDBFRo5KuTQXrir9ept6nH7v6ppRuonChipn2FptkJFBvejuxKQVX4d8gb2GssYaDMtLvGyStbmr2X4r1dT",
  "key39": "fy8VSugoa5F5EW1hcJXCCW2QG5S3Yi3xrVdTREUZgobyEM2wmzdVi1bzpztofZEfcyAX9ZtHWNyP5zC3mCU2u36"
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
