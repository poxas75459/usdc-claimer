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
    "3sAX8HUkxagPgTsuFBsUSMuKmz5hyY2KcLPqWmmuvcToSPnqYBN9Pi3HGA5tNXS39xTsuHaoXEke4XXVxBGkAWFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVr6QF9cDRo3rJuAr8gex4A2ZFjrshhxxdEAWshQX6bkcc58FeCnm58A1pazqY8XHbDVaA4D3TVgz37FWE3KCAa",
  "key1": "5BoMFexKEZh9S2Rq9Aj8NLzTjLiKyCc5ZVJGE4YKXCAgz8FpCxkJ2RAXoxz2G5cuZJP6UcARqSdGmkQUYEWCvXC3",
  "key2": "5HiaL5xcrVeYJCrTj3rnDD22FUrRwzpFFRtv2kzqmNUU5bi4daVuXKYLSoiiAPEWoQXjHDNyBEFX6sk2NPQQA3To",
  "key3": "51J8RiUT5ozJVcwhgSySd3uGTdVBWZFgKipe2J3uzQoQGEjQ7MKmM4zzTZAhm1Hwas4Ma66m57seY5KDJGpuAFYt",
  "key4": "7RXCJjcjopU22uJ5u26KAdW9YdRHGdxdPr3u2fQBhJ2S2TudcWxp6h3kLRBPxz61Fh2qkjxULrkYRXsFaDgND1x",
  "key5": "3fb29PReA4q9xwTj1rpevFf8TvW9ES4xHfi8W8qyDinjSkcBANHwvk2rC7jk7P85U8j4ydLJByfk2c8x4MbEs6Sd",
  "key6": "41UeuuqyknNC8BJBGYb9EZdCqPVBdSwcCCxmntGrk9mk89P6YPUmF8bfumteTBYr2rrcoQPtqoMwJ6ViqAdake96",
  "key7": "2bFjqcAi1yGy5Gdzjy86CLAu8ctbGuZQVMCpLCPxnC8AUJKej4hVDEDvGoQ93jEfQE4ayiDmqjw4wvAX4zNf5wk4",
  "key8": "58U9Pt2ixaAR1WPRYQcDFBSdqtu7JXsR4wEb3Y12w7ewFcKKVvBMy5sHvoZDq2WHtPpPcQQ87AaLPofXkiyzXP1Z",
  "key9": "4bXdXjZvPz6MxKUZNddMWsTU5su87nPZR3FeLU7sW6PHKKH2UPoECrF72ahn9kvMEtXYbyP4HiZCRk6ECZNQ5BoJ",
  "key10": "5vQkMUbG3oFhGMgVqLwzefCkyK5jEHg5p6bQvyDyeXtCKDmnzfpithpKwaEvCFwt3PruN88LLXXuvsAWfJQP6ADt",
  "key11": "3kZHSmgecUHbSj1p3HCdDPNoVy2HNKptvMHFqd9w9CCJwAQYdFoJprLpZK1sBkF15GCRu9Hukj8GSYj6GNXHCRsC",
  "key12": "jtwujpWBQVT6pnN18wiDfyw4nQBmCpkbxcvgJdB3Ldqy2k9WMxZPB78ZTmiuwfDGYgpjuiStYyE5MwVQC5KKdt7",
  "key13": "46qBxF35XJ1s45yyzNKSsMtZyva7ixJKR67AUVb2w9wS2ffL2ZpK7rTJQ3b1nCwwacVJ3biwM2quDaxMkGs7sj7U",
  "key14": "mFdpMymNJWKWczsRwGQGUKb6KGwvYzQq9EggB6ZfXRm7W38Uize7DfXfu6kZcFBJFNcKxA1G7y35Bgk5dzAZghn",
  "key15": "2uNbqD83bfBewzG8u6f4MzZfsz8nivSRnwikVE4dak9MU2gcFsTbm2CcqknPV2BaZNgmNMuDWScof6HzuMbcYs6G",
  "key16": "438AuPpSJeXSKqQk2XbvSpbx5FMs92XVqveBRuRSp8XNZ4aiNHMvXBbWzZVrzS8dXmdxG15Vnbe9CrVuW7ZSj3EJ",
  "key17": "5FhQEMYzVJccZZ4oTABJPHfFGKLrXCvWaiTRbXUoqMiF6GMSTSPAmcmN7tj2GsXmcFSWhhanFguUfd7xEnbbqBQS",
  "key18": "3AobTk5wrNipysDCcLUSjbBc4meFB5iRP94W9KtXKszUeEwP9okdso5Xp2tbCCrowYqhdR4hAhL6QqXWFA7wxCtt",
  "key19": "5gvuRTswUR3LxsY8UNVPUo9tpPYpuVnorQzBey5h4NERgtaUVkVUby83zfwNqgGgdZceHYEP4SfcM7VLp8MNh96j",
  "key20": "3bZdU1jwHS4M5hVGregDCYm6HVmJBaz3jZNJ5K8tkY3RzWdVEBqGsJhHs4oGvjkJD5JaijAu7xjts7oirBzEBCXT",
  "key21": "5jd4XZsWK2suTjReBZdQv6tuyxpGosDUHRtXwuPbbVczvXwmP1N2Bg9tQgJHmgbryC4gZsoxCNNcP1DwJrptDusz",
  "key22": "3p7UwGCubFrytKjTjWrMNjqhDZnZ1oJfUu3RPWCEGg5qt4idz7Ha14BUmGDyLiVeKGqDjH8jgcY5QQTTRqRaUoYq",
  "key23": "4WjAZ8KVjQki1f5HP69M9nfsGaYAUkKwMYBa99vyS6XWcqPBc6m9QS85qziPK18gXfgHRG3eEzYxGiZ83BFtef8L",
  "key24": "qt19uQ3x8n9uzc4oJvTFsmxnAZ1zFduGMXtZMFoCJBWu8ok9gRcf7yinFMUo6VoXij5KCy3yUmeHoK7Xgn48MWw",
  "key25": "3LbxSmSe5FsTpy4o2ZhwAuvTG9v9EFh3evWcSWbtJ8x9PA7TKPPLe2JYCpVsq2woWfxsvwthgACHDWkoXLPcGN4T",
  "key26": "4MMf7HyYsjQQuxaRuXXiumLP3UkFXACUPHHEGgVBW2ZeE7EZ6osfgSxWbYhyAXriR4r1oSDvawcwYKrhamuq1G4J",
  "key27": "43ST1ac7HnMoeaky4CucJhn5PNbN12p4gqQpKrB1u67VTuuQSW6to7YhqTB8NWDxfJyGcXMGXdkT76guF6EDeYFF",
  "key28": "qoDh7ywmnMLgm9kGjf1gfmiG9WQ388QSpCgpJrCJXXk26TDvvgoghyycaLzwmQAw7QMfiia9Pez5UZuoDcND8zb",
  "key29": "2xGCmj5N7hxPX3FvBpakju3d3QyMRzWYB9yWN1ScEkKPvuAzExS8o1MC81fsAC3figwG3ztRLCDkBsHx8gGM7DRL",
  "key30": "4s4JPaNxpi4A5bZsQgMH9nrk4dpvaGDps2ZKGLaaMGtTiMF1Y3iAm5z5WLEVmGBGiGCwA2VBUVCuxPLDR6VcvVAu",
  "key31": "44HPDYaRHt8V35PKETwK2pURxA64iciMA62fDjrhmEQBkfdv4gMax8RQFRaNtm3PofUFrjBNAmNMGoVopTXUs4kQ",
  "key32": "2xLuBj93cWqLmhEsHmM6M5iL7NKJctG3C4dEJE6dxKST86iw5pTwf6q9MymMBegA1xWv5DuHPcW77RRCpWg6LonU",
  "key33": "ijJKsTB3vKoPfgW22NTEHvw28prxvwxM2MVpPDeJi6xE1abtEi3meAa9pacfFgcMqYsWijgqmopY9ngBr3vGywD",
  "key34": "BBQsnkgAQyHWL2jHEV7GfmRWn72n3ZqA4aTz2Mnr1sjqvtjZ8PFPCpyjJFWesNpZD1QKjCU5ZN5e8hFcJdPrVqE"
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
