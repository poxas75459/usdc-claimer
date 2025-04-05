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
    "3k6mfCJ7KMPbc4yvUyhMfscbmbnDXhQUycE7DSMC27BZDjkYe6P1yJG7XqniwBYuysDtcH1mqNWgvarkrc2jzB6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TL62bCxZtj2ua3iALF8uph4xS79GYfVJNuA6YtPQoeCzSuoSCnLLuNom4fd4NxK1oiFh2WGiZxSAwXM6NLd67AB",
  "key1": "QVRiDSQ1RVV8LnLHcV5rasy2oa51VzzN9XVLa5jVtm5qRa4MLBtAd6pra1isaykwGoc9CAcsSvVZj5sN3Q42rqY",
  "key2": "vaW1sEUcjVLc626R7ujMPkiM3RVJuVk6VUgPvVWuiPWsf2j16JfsDFuyrAeMkJn47et9ZuPF1UXhBp3ibDm2AW8",
  "key3": "2rTe3vNLgj855wcuLZ6ip8pYYDzgmvBExofc4avWZaAXgeiChHnLjpdeYqsLFUK1A23RvReoz6dRrTGgf18mpgEf",
  "key4": "4v113BA2L7jqkSYu1cuyE5UiHBh2j78gHqh3LBfA9NpwZJShtVTvvNcyYTdvGanN3VfwVDbRca2HDeEvPGbDoR4Y",
  "key5": "3o8Gmxjd5boJQZbBRn4Myk6hjGauTTYPWnzQEkFre6s9Jra6ikbhngxBQ9hsP4qStRMyRqrtkLHXEWtqHpjaF1df",
  "key6": "3hSSAtgQuCtE5bSjjJeBgcE3UXdfeUdw3nvJu44LouEUQhMfZv95qQjYtB6B5VUbFd91aRM7EJQRNkvrDdRfzmac",
  "key7": "4Ksq1G8N1hCSJSSaKnxgfWMeWwtpRuGyEQqoLGXueYkZTyqrDsfLCJD1hN5zbk6KHDtemBQdrtr7CU8SuNoiZyJS",
  "key8": "XRaD2tSvCyCLJuNYsaxn5Frw67xpWc8XVUkeYH5vzD352WQMgkZVNqrQPx4NzmzYFr3bai4oNi2kvp9ERj7jZEn",
  "key9": "43K5bYtY3HfS8GTamW9JjztmtFFt9ujnj2T9yHmPBXrRQmBv2PzaEtTFbQGuc9CBYhH4FTqdo38mbrewCfXdYadS",
  "key10": "4ypsepzyHFTQiUKeuLxCUi9wyybuX6qGxmpXwRrgRSXSJxxH2jMH4L6PyqB6KzVqdcWMoWWBz868zYhHX9iZridQ",
  "key11": "9mRF2bJsPq9XbxtvoMFuZWK5zVeakZkz7fFCYog3NQcF2afn9kDQxQnMUR3rYvBSJzvjaVoYFBoFzXt85EWqXmN",
  "key12": "5TyNw2peQDDHJot3qjvpCKMEbUHpA426P187Wm1qaWpoExh9XpeefvQnuLc3Q9rUkZJLthTmohTgZWUaufNaDebu",
  "key13": "3VJNrvaFj76eNYb6k5AKrTHaXM5MAsgbgAqjygqxvZ4mMiZ9CdF3q26N1evLNNAKZcJcUoYaGLAZWGbAYshkiYc7",
  "key14": "2LnF9DfHwgVHVKxN44Wo1ArKQ9633XVZrJzas54vtkaaH5JA7APzM8Rq8v9D3gPPC6wh95iXg57fD1EoKNVuokwC",
  "key15": "4ZQJsQj5EasHNBUUWMDCoJt1iUwtS13BLV1JYWV5Cz3PuoVVCAe5AB5F3GQKN3tPmnw235947zXV6PatqUmZDK3U",
  "key16": "5yGDjShzBN6Zgkw5avkBLPKvZbbNZ2Ms72FjF7XHjkxr3ZUhruLKZTgy2tkdoreoaU8to5qgaoF5GQmtiDnvQjdg",
  "key17": "26TFez2QfVVNzb92LJZkaTkqFePQrSzTbqVrmJMjtUCmyxPFwRudXNwjPz3bpxfwoVdjTUqDuNAWZ8vw1Kg48tqv",
  "key18": "Rp5DphFYuhnVtS6cXZLN8HFcVKuVxVSiGquRJDD8ys23sbVFuePXtwxHPi82iBw2muvd4d1Y1AQJoLcFY1vAy4y",
  "key19": "Szsjv64nEp89xDW9zmChwv8JtWa47TyufnWDL5jZY6BkMt8BHuuw7SdnDE2xBcB8wdUz1x55rqqYYYvT5GJhs67",
  "key20": "3tPTCTLdHLHSM2ArirmLftGSdEtgtw6c4unka5DhuLW8i2Cbh1MY3AdgangvRmZLxBt3KiynGJmUZvF7GDm8v6iv",
  "key21": "5LvEM5Ug75duGXHax1Fx2cHj2DWorntdqwCzaSYc8Hrk5n8WbtqUx3YLTDWbebDDEuALxFmX5yViW83n9htGKPrr",
  "key22": "j7fxGKuyNiircxzGGGFY5zSN8jdmK6jzhXYSSiz9TZUBdxhdEyi8st3KXvxFfrpAD5iwPwCMCY3Bs1c9cLBQ539",
  "key23": "3Z3eJAYgk4NQocBkkT6mpVz3v92GCCJ3pwfg23fXqCxBmpzAKNHFLu3Jy5VsBdCdiQ1evwCzQqSGbDP5msV33aVN",
  "key24": "GDHhDfCgeUMgx6UebxbxyCUY4AgLZuZEohy28jDUuDT6trv2ef8Q1vVpsS4Mth5dRzK6ypwtgYdjYuStxK61HNB",
  "key25": "i14rQHF3fk9GwSLuSLyveSY64kcBFaeYaLpxSy2NUQwrmmH4YDAL5uvJhdXGoMsEaksQ1owxtZ8ajp58g3JSjuX",
  "key26": "42eivXUg7ttk1EXSk5u5ha6wMJzcy6jVjuHezYRA9DPdPYPjrqsKDexX7NCvcfCg2EhCQp4J2gifZ7Wj7gu3jv18",
  "key27": "3JUc6ySzgGNyGhtQiNaVxhh1g661mNAGFdMWSHcRCeg1Jx4JWHsgrrq3mV2a5ujCxr4LAJppQQ9CsuVqGR8pbs29",
  "key28": "2Bm1ABTjpqMDFuvyviiuSRw4WfkjbNUWZtHavfP1d2MEpG7X8oKWnV3YLPxXQRxLhEFTFAVXu4kqz3rT2EyiSrQY",
  "key29": "5M2TkoyVLKQ1BizjwUBxLD1X8W7PxbjjskemfWnqbRekqGd1zRcYAcgKcQYZUMxQ91EbDqc41GfyMUM32Rvc8Ng6",
  "key30": "3GPfgxkMQMp9Td5gGvCeFhkZZGXbmAVQKbBZW6WkimUWRtvAQ3Vi13nJQJHKKmpqyPgmoCVCkTRBxyf5a5Ftg2s2",
  "key31": "AvXttVuyr21BYjed4GTabnavx8KrJ6jdH8AocDmekeqsbHNEmDHqzLPRPMaP8tZrL18Qb3z1rWhPhbP3JHcBTc8",
  "key32": "4PXZ4Xs5sucgPNbz3AYAURP621Qqo6wYeGyNjEx15MFBMT8dC9fttFquN2ECmCuZa95nNvKjEKQyPucMu3NJJE57",
  "key33": "56toJw6rme83jhT2By7hkcBPvVpZeEi2FFgHYqgh8F1k5jNSxsHkD5AAK6twaLj88PxEeWoz8XjzaKYzrjKzti7x",
  "key34": "aUxZnMnEbnrNyYG7Xb44aSp8LcM1RnyTwW9YVGEYquMgfSEQGgn6m9gvsUhpXv8sAfKpVooKXScDVY48awja395",
  "key35": "qREizCA259y8N9KjZqbQ4vmVSw4B4o3v6ineoGam7vDFgt63gtnKn3iyp49mtwHB5sxCQ68A9nhNyK5tdndDTDt",
  "key36": "4D5RWD51p34iknDMCU75xRJsEzK1m91LsDFEbZPNNKVfi6f184q2nBNrQ2M4c4cWUW1Ur7QVofYapaJ5arXb1vxV",
  "key37": "3oJks41Ycpy3CQzepVuoFbtWjcjF9rpsWawQTqygE4m92hVrnun4sLdGJrT5EWqZGsxWpGnuYWzq78EWkWB3HHL3"
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
