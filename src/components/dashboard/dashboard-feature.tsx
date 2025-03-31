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
    "4iaybXiKagd4H6dxNzP3ouhEUpoh5GJnbzk2GJKUEbYkj5imf76uvRTvJ4eSGPjBJefzuJHz93g7GaBWbjPP7iBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622hVPWn56ijVtD7YGnykxNbDgBPpaYTuuTtTwQFqpXKL26WAZSV731pPthttJmkC9PYSbQJWyjYphH7REVbf1ud",
  "key1": "an88ruZgGgNr2QLy3yHphcnqCiFTEshXSrWiasKZU9HxDBoBQLoEDAunxPaHq2PEAonEEWZrZeGFuNqKuH6uDLb",
  "key2": "441qRBQ6NWXruPHZ3EG6e5NVmTVk3L1kHUrEwg9usreNdevmJRMfPaDdCoYjStJiNq8pnQXbB3nAxMKLyQiaR3VB",
  "key3": "2F7WziLH1rNHU4ZvqagXSAQNNN2SGsbVbJBkWxxigVeJDkYx3Tfwk86rFVgpaAPrvYpKZDybPY2M6uXBvkaA6QhQ",
  "key4": "YdKCTQjRfKFymrVCeQyoMsbMs2H6orCbam2UHh8MGiiGDtQzNMZvxKjVQYBTvb6vfn8wZUY8exfmNqGyR8zih15",
  "key5": "2LmnrNxuZq9hQv1iBemu6Wg2porvmKd3TUkyUzx5ZJFDRATrSPwK3JBHToYjazEF3D9373Zdsv4mbXFYTJDU8Fgm",
  "key6": "22vWPoaPPPFkBAoYhNqtmiJbxZE3prq9njGUvsH4cBQdX5d6psjCpLYTt2gncWsrANNA9YDyjeMcxSLnSh8MDfPL",
  "key7": "2kw4aU6Ec35Uc7kYDG1HbbhHV9FmnMqvbhgWZLN3wFZ3jiaop5XrUtZgh2BZuCSjPtiu8KEQqbHomUdLGXpNseCY",
  "key8": "4uzYmJrhbdLhZfCkg61zG2wznzwASNyTzzvY2Wc7Qs4G3DtAqfTJutX5ycMoKyHvFnjNyXkAWhyp818nh7g9LGUC",
  "key9": "59dN9D49WysGAJE2UXPu7ALJrUuLJzvyFMf3fCuacbQPq89YD6UxqLnErSSEKfZ8sDTTFty5iLPHqHvwDWHqwKpe",
  "key10": "4b15mquhXsLyHmRm4NkQc2xP827RfAepgrUDNsqZpuWVd1NAno4pJhPMJRizSNRjeyyTw1mw5VrN2ddweCZgok12",
  "key11": "4573QvrvmK4U7JWd4eGtym66yWqPGRdsETjoajxna5VdsVULVtMcKixXo3xDYP3cpwLgJMfJbz9CgbntJVT3xQe8",
  "key12": "2LQHbKxBEkzDsL6ZrQsbLe5Qh6143H3Q9VUQSRnFyL8WBBazL73rm9fTY1VwjaWc1F5TBf7TUjZy8Duv7o9zfrgJ",
  "key13": "66mhmB2UraBmAvtBp7rWxRMpNrfSJ36iYpvUbyGo4g3o7zzJKDRu9AX44ujqAn63bK7FU8VRrPpHEzw9yPdEfdnT",
  "key14": "64ALX23WLvDCs99wAbFDWmBsyEwmRzY3mtbQ1vLqyrmBtBgLgUa5wCunKS4dZgmQA1xXvHF2KWsHK9BXjemyHLMi",
  "key15": "4oJF12v9myGUEctc6uTaV6DoymRfoooNkXg7ooC4MiuCm4ESCRdf8QYS2oHnB8VDwYqAc3mq4JL9acQxgj3kRb3e",
  "key16": "4s4s1Mh9ahtLsD5iobgoG5uUhAtLfLtZCsd8NcUscxq7TaGimMbwnki1L4HK8JdgzCWmbayQ1hfBghqjdjd7dQJy",
  "key17": "3Lzm4qDrFf3Poy3VZbu2PavjyBUDyxoULZzUJ9Ex8smTFX97GKLtUUax6G9tJmmJPEeP4HWLYaMKv9qYJYDMoyds",
  "key18": "3DvQASK6YpP3kcGEcWfJKS421gkZ863rnXhBJjRqAkQGoF45mZrhUpMi2iiy5DqjK9sV7qNqcRvbU7pAirFYLRvE",
  "key19": "33tA9Hr4bS4DNXy7HTBiQw6HwnwB7HezfCHFbF7LYfsHKitqe4RcfLeasUJw6sfw6Y2XkBSimuvwy45FwmiDTtQv",
  "key20": "vKVSxS66QCLiixjb2zvcJTsgTVGmTN6zWcNz1iKewBuCvgRHDFMPrmRQNYaT9ycM1Gkeq5Xo7nHiZC3sxkkwwX4",
  "key21": "4A4msAuKhA7z2FUAWR9xLbQ3EiotmEXNt78p9QEryVhzrRmasGSMLaoYCmUgNXMBQo9uzGoTAFi2fXwHvjWeViv4",
  "key22": "5YSGuUfcKLmLyKqCR2R5qoGE6r9Q6cp1Eurz3tLa9wbP4HnNMSzf92KF7UW3t6zfCQfiGaFHAnG2r2gAYB7oCd4p",
  "key23": "3eDnQ5mFita9BFoRZyn9yBDRha9mBm29HvwkPmewKU9oqqQUrm39ZVrAZc2dPnixHDWKry1kUyrzUhuSrsbvKwwZ",
  "key24": "3WaVwiaL6vRLGqZqTCJvVnxkxTfoMw22YdqRmBRHt6yiTPvvtgt9w1eMzVFxfEDAZxELnjDULiKuRo6eBAoUsTdK",
  "key25": "4hqgYLE2wZYDbH4QxibAsD3cArVR2VG8b61P5p6LpykMYmt5aPW9P7Y7hxJm2VXy4a3Dd1H3UVgo1LWRhATaJJFH",
  "key26": "3j4cRny9tQG7hKCYVan7AX3rd3WbJWpS2NiXwMh8C8DQpWfmWwJYAXpLpHY18AGrArD3wr265333hz3yXfSg5z4e",
  "key27": "4jwnX4axcCuzTgLeEoSFLpYC8RHvT6zf85naBYUEGcLDsW3EovaaKPvg4Jy7BJywPPP37GC9rxhsSRMRH1X8GvS8",
  "key28": "5smZiGiis1vTVEiM8YMJ21Mj17sifSZSVup18JoZHTr2FENS6FBBbowhd8kmWkU6CQYhrUuxdWRunfqPcEMQ8yzp",
  "key29": "jXr6dtx41NBF3qF7pt6abMxPSMWCkdrjvtUQC6qFkpHZyWWPVr5Tr3gRVALAfnUsposihGYAomzpVyHJMSWe7VL",
  "key30": "Y86HaDpSBcCvPDsgjmtj4jZEy7tjQ6UWSPaJtRaLxV34zxAE4a4iNZPSSNRamvXhRddP9p4JDA7bjn28rrvmUAM",
  "key31": "3xYsGHPGEe5e3XWo9UhZjioFen6E3mJf6VkfWFFMixuGA1AJVUXRBNfP6deeqMw4BUA1wKHy1jkyFLPW8xfjv4pg",
  "key32": "NLXgt5YTqdUcToabeSU2BiHPtaLnhtXM6z4mf5CV6tKjtPUBMcTUSXS3AJW1c3DK8gpbhNFELr6RonigsgV9i8m",
  "key33": "2PaaMhFB2yfiAXRL6tYqM6uuUvJUyVsXN2o8gfkyzGUyUUraZHGVFsqGrfVsC49wGDQqU1pvp6hriRNpT2rxThNG",
  "key34": "4LPsgpuZugeagNmQmDUHhEPL1JkMkssZUeT4qvVHbbDd5yGwm4JZXYqc4YTzaTMwsgdJCxjB2DDy1PzWpizvMM9C",
  "key35": "2A8NkmMFtBJHuoTxb3RDZePGXF1gsfTcMCLpz6LpFCPpcyrHSFeBf5qzLxRUaAvNZVYpY3S2R2z2FDPCC9SzQ3Zg",
  "key36": "2dCzKtikFdzeKLFq4Pjag5r9K5DUX91WajNHqaSuFVrwGjtaozczDnBBsRCWVRkZGuijtS8tbutJofM1naUiaciy",
  "key37": "49Nx22ZJk131G2EycT1RtYisDzSE8Uqgug6VQN2iEjXYp139LfGJbxTg2zfoUjHY145btZZ2zbDPfLqPGKzMrcRz",
  "key38": "4Nawp8Kq248N8GA6f3g23hfnj1RrwKdjcXqiaVd4bkXHQJcKwCeZ2chzEW1PV1xHf8Qvmk5i5GJvkr8KYRjz43EA",
  "key39": "Cdr8sEgLgRuZuFVToCDykPHELELb8za9dcKBk2aZRqSAxk92mBmTooGW7Cr7iXdKYXTwcjFgiLps8V83VB73hfP",
  "key40": "qvSD6JNAb9WzZFqJh1oqD52TM7oYsqMCjf9rN1f62B3rR67yPa5KkE82JG8Kh4yuctKZJ7aPvtNWC33J3FXtP7B",
  "key41": "fSZr4UAy1pwAdyRp5d9TysYrzd2tnABPHdFHBZZmtqjiCSbd5J7gvq1kYqHPFusmMwhDiTYd6v7Y2qv1CjLMsFg",
  "key42": "4HLcwQFcsEdNx6vAkEzfpCiiquBnnt7QsPrkVw59M3rujLUJTAaSYFs1PFMaaUmfWKrQiNXn51jag9mzicjmtQSZ"
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
