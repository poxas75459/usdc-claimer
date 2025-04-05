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
    "5fjMyxpbhpXvWnHwDBPaBUwkM3CEzeXcyzSDYXtgzbShPYpMWY6YiZEcqY9AQyM49jbA37cQ2KqqqnYzCJk6bFhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTRD1SuRNG4EiasW5irPxkXefZTziRThXB4eWxjhLknitikSs5PAX78MoXVgJXrdZVjwW6422VQSuVkJtfb8RXS",
  "key1": "aWd8hCCXHycSzBYzWgd1UdeAPTj5wbrD7HGTrdrkaBH1HJ18kcfL6PWEKvDBABT6AvseX4ZgsNQvVk4Mj1rf1ZG",
  "key2": "2GKjkRWroM86JUuwHoSXR1eST8DZrFT8gTB2boe1HFchsSkPZKCkHGjgb6mcULzugkMRyr9tB9gCz3WzMivKJQq3",
  "key3": "4Hs4Ck4c216mYZEcSzhr3wGDKnuVkW4krSeByyNjhkFbFMZBnJSXDd6HZbaAVxyusTAcA616sJcfVxQvwmqxJnM8",
  "key4": "4PSThD8ZBPB6em6wXVWyL2i3ecN71V9zHbmp2wRJkcpD2e8kh7nijw3E9jqx3HV7YZYBx7uLZNXRGpoQdn2exvqg",
  "key5": "3wuNyETrJzhndHtBBbchgyPHQCPGnr5uRP8XW2hAWP8kMSuzdLcgc2MYvEAjiEsNheXVL7FG178XvbYwmXofeAGs",
  "key6": "3duHdsr4eGdxn6dVX2QrUmZhvr9LVw6TnyajbDExFUnzQyMKswskDDJXyfT3WonTkFp84JmC9AduHcKHW5m4YFwL",
  "key7": "5StRfMN8jubJ8Ztgwu4LZkFbUD5VwUFZSHEurvSYnLWQDheNpdDp4dNGmND95j82qWKYhTt8co1LjntGNj96haA6",
  "key8": "4T3my26x35uSsempRadk7CENfNm4Kx1L1853aFncwuz8cEcsK8dJ8Xwq1HPhk7nzx5fvwZSYnszQHbyCkqtvZQSc",
  "key9": "3KgLTJga8ofQSEfsGHVrGAtMEtPbrgmpWoGF2Ax2VYnX8rTGhWZbScZ6z7nTWB6qYnZS6P5rCEdmoMMRWTTj5acS",
  "key10": "54mBGKJLhPPcpPvFrMAaRffafT8cPDrrbeUpmbb3SEjv3Lp12GkdqgGcEgLfGCnmadcxamn42SWJPzsZptNt4wjo",
  "key11": "2BKWcqRVK1NAXdCcc3LDS5BH7vtwYLVokjdJMq6tN1HAxHrn85fzQpqJPsVCohjViK6RePCeKdwdrxXqhNcu8a74",
  "key12": "5F3v3LHkUst1yxamG5MUzm4vS9U8T8Z5jKTgDXEhgQsnwxpHN4kbPcQzvqPzMy3dxEieD8xAUCA89zmzC5rK7iLZ",
  "key13": "2wZ2SqC44nR7bfstBUif85s1MaYHxhrwsyFSL2AoBvcKG531begVXgdxDnZz6uSTQPimtTv2CAt3gupf4aAt192F",
  "key14": "6zjDus8ckZ3RpcePG7KpUsfaokWVe4nnrFPezmiLj5yLJYmSV4VD12QLezSfWsVajVWp2Z49pgAMB63tpasfE2e",
  "key15": "5CBGjoQZHf2ho5M2FbDnhadi5wdrkUttURCEp4prmsA7EQgmNCQsJgFnVj32tqjZHj4ajiJ4fsP7nsYsZRohLw6d",
  "key16": "2kjTWMWKruTprV9PWfihETcMk2dxFoiF8233EYpipHNi4UneWLkCJdzYvhPmB8PPnBnT3sx7eVwcrg7LnRUM2jTt",
  "key17": "5tEd3V7Vi9sweczT15nc6MxVATPmF3SMi27sN3RjdW47E5oPb5nNGubemxnxiV539jNRPFC4Mtobg3rZwU7b9LKk",
  "key18": "4D3e3QxKAMDKXHjTtbtHyBDVqu3i1xdS5VbX94bcFFVmQByDsDf8SsYAf5fMuhotb7ub1AY4xB9nSSYRVUNmx86Q",
  "key19": "3E8avBdPJxSc4xdyrRsqiMoWbWb3T533D1AU2RpsBog93vYC8UVbTa7xgURQ9nHQcT1boA2d6trPYdUXsn1SmgPe",
  "key20": "4qndeCMtQjKFaNoRyJfMfBpcxYNo7PwqHEZrPszZRoFFKB1zfRfvS1sohf6XqZctQUyPsyMKrQ1sBDyxKqiaSA41",
  "key21": "5W8rndpVq4vBjDhR3YcNqXaZsUk66UVZi8CdycCdtfRXQSjZVBPQEWdTYaWM1SFLgi7AdF3b8Gj5Vj3oBE2E5fzr",
  "key22": "5uQ87r3K29GMhMnkdwzF1Fgsxu1zeVVZtne4RYscZVqhUK7ayxfhockEXF5JzL9gCauEy1s5m5CXDZZQhW5jMK7N",
  "key23": "33bjzfjkedgcTh4zN6kuBHDBpuAyQoKSL5gatBnj62jZ5sgLRa4odQoU97bQPy6pWghKaHNHsfy7K3KEFKorHHHU",
  "key24": "3KphsT1vJGcRJXAC4McVEZ2GA93hwravCSHCdSMRyLqEuLTvW1DY6GT5NVqiHC2Cg6vvPXePc3HiTujGaM5BJhF3",
  "key25": "4tNQ4vw6cvYjnwE1q1wMeGywn2tqKSNZZVRaiPhbAnfAshoAzGuG5eZpaemN4N36WzHUgqVtAE85i7Xq7wLtXDgv",
  "key26": "4SteiKarXgVGnAQhf4Uf94RvJWzvpp1wTFEP7VjM95irjvG1ZB2YywYWiWP4Qx2jVzDSjEcXzCfmGkS7ww6N5bjs",
  "key27": "645yFhnVwShXhLaFyqjFo7pVmLhvmiNh7iPQKPBR8P4CTbHQ8d4Vq9cqkwMvMTg45ZxRy4UaRKQK2zCUqAsdgYkT",
  "key28": "4LNVgjkjLPH8sCrehjYAcELo6C3Xzwi3E6XdKaxLnRaQ1Qs3S222DKDRYNd9R48cuSHWC2yV7hW7TAtaRH1DXbHB",
  "key29": "5YNgT8aGmE4iT9C9y7C6ChLWxFPUjQ8gSPbd7fnMrfYX3E6Xie2MbbSjuPBcWdrPpH7Bu2bDizpXCDCQ4HvMquyD",
  "key30": "3AKEKjFfZ93v5XPB8Nf7VE7gGyaq9QN8SHQTtxPMb8wPvayYrwBToLoou9Bh3zAedUoVQm6KWBjUNxCbj7qKcUYf",
  "key31": "4yXkSPRLjkGUCEmWvV9AuKg8k3h3eryye11XYRQGmv7YVdyBgE4cpuEBYtVmT8uN9atpAsaFk4HBaQtJuAyTQt8C",
  "key32": "2ZoaWGRT2QPGWNTXNi5JMoWoncoJ55PWwhbakyH8mjqSnQgpj7wWZgqEUyNA42NhR7W1GStGkU8ryxpx1AHjNDB",
  "key33": "53mi9ZL3BjjqPSCWTJUtp8pEFFS7NCRoBkopBjAsod3iLYyu8VEvt27RVGB9H2nmTxeN4jCQzJhTqRZTxMrSzWSh",
  "key34": "oevUMTTtbMmUPB63TJCXxuSuACjAnYj1LUteb4frLRe19MdNm9YvfsvXmCL9QqbMmuDCN7L28FeURq4oHpE3cxu",
  "key35": "SdZB92978webbCu8J4UnFBgNgmqZxAQce44Q3JfWqt18wnZTu7rKK6nUeR9UKq5p7FRVxQW16sXo8daVwdVXzau",
  "key36": "2XHcV2pKHKN7UdS9K47dt4DpAXTwccLtfG6j44f68M6Moad89jnFgsWzh5gcgUSgYnYuE4ZemuwRGkA4iVWK2S1M",
  "key37": "3h4X7tA5eNmFn5YQtjmvcXJ1umLP2QBgwCH7hyZzNaq6KY3RyvQJQseDfkZUW2veiYCefNQW3viy34vhjVk12kB6",
  "key38": "5bCzdUNiFKJeHgp3WCWFuFFmB8vB5yuejr2pw7Zzy7qBYjLxZMhMGREkcWec6tMuuPMGsUTq1oMpSsGHrPapDwxZ",
  "key39": "34kM9WrC6DtmsBNSivq3yw7kDmWniGd6e7SCoYKaupqS9BKBc5KRed9Y9Ar826e6XXx8u65NyQYQyVuy3nUZytpG"
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
