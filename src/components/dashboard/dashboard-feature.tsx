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
    "dszqYTzPxJzqqb1odfgDSAHba9RWjeUWUsWetYRTT7d7QPEXGZJfE5BvGJNyTVVJeyZv9P6ETSWhsszNpxxuoBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvUmQV3PNZeegujTD8BKMT1A1wYTYg8ND32TBPyjMyhRsQ7hzNNZu18fEf69Jw4MchRFwqeqCtFJ11VAkFxczjC",
  "key1": "5VJGzYVNfNQ5WLEHxn2vPvPJcM7cUNviPTWjDQV1e9P84HDowBANkkkdNznoshn2p3Ui7XWgCGkAYECbbojetkGz",
  "key2": "2mP8cYb5MEsDTdN9kXRprb38PSNmodsB4j13MGoLtTE7RWPsaTfh8cbuchy69xFaQuS6uydShXo8e6r43PsjCr8i",
  "key3": "528ddZ7n7NgJYZHaHp5nqiNRThYTchtNZ9raDH2FwJDmQAC527o5bJfqsB6xGvmnU5VmBKKLygaHCgikYtm3UpyM",
  "key4": "3ieExjozDYE1yjYJX5WJeNA7wQDo92ACXetjo2CsVv2RSmRgW18ZUuVaQ5VHpraw9S81yxDw28pHNabwctAQvoMC",
  "key5": "2Hwzp2MrayTuzJkseuvNtQWAEwKj4Y26WVErCAuTeqHuhZwrPzik6U4C7SrmYYvLyAUwr168b7dWW82UfySbGFpA",
  "key6": "9rWMy2Q9FkbDGWRoKVXPymkartCo41oZniijotHPH1PLnXAxVTZDKxdT2cwdSuuEtuYZwRxB6eJc4iUD5EPLbWG",
  "key7": "3927wc9rDsCb5Y9oNeHRxKEsRuwEGzNFf12z21LaoTvrNGfNHTWX1LTTwuRTrwUbAT4vGxBfFpC9hQ4TZTeGrYE8",
  "key8": "2wzsYrBw1vGeQruCiwHXUH8RFPSC3qGq4wRJvjcPm5kbhjqLtRAXzNyKm9hZJ2NZPfpGQyUHCdZXhVibrX6F3w52",
  "key9": "49Te5FydRmFhLPkKBGKuVbVLHd8kdNTvsMm5JmvsXcszaTRcnyhCJ6sYJReyPQX1ZNjbbztQBKSYR2B95N2qPgdq",
  "key10": "4bzroqDcTZvatzDqiNK9wchk9oN2iZ5LWsHdsjxUWwiVgknxbAjMBuMKEyxp7k6c4fFiPScmHEukctpvX7SS1Jtj",
  "key11": "3KhoVfQT8cKrYhjnqkpA7kb32wChwY1z8qQn8yFtXW5dxZv6KFde7cSfBMw6T3u36CjPepS4GDwk4PoPo6wC1CyN",
  "key12": "63VyjsDEUfUQU6omowCdzpwmduNvMBRAk1JRj5aFcJaki7QbKqteLHiphKNKQoPSGMmTR3dM1oCkLyp3JJeWW2Gh",
  "key13": "Tn4uX27SfXMknvpdwx4QFgqmG1PNdVpPf86DKx7B3zbYKXJmP6yZDcuTcERasHTDuodcjYsub6gz41NRZTnaAEX",
  "key14": "45v8Z2Bx58fTsrcVSRq8gZWho3XPEmX2rdLLyACpga8JGF7SYA9jgtBRrvzd6nW1GeQB2Qb99zz7qNuZ1ZvHF5rU",
  "key15": "5CFX3hwhU98Yahitt2phAcrjw1M9H7dSR4jpQZ2VSGLVKSnCecrya6HYa6mxsh1RY51bkoLpyfmmJWBiGsWcPfpw",
  "key16": "R2hXpnWv48Hy1WA98mTyR8o8WKmvo75yE6dXA9TWz9KRxyMqg29VDntPrfE7X2Pn7Aygqem83guU85btQbEwzW5",
  "key17": "53asX5Nxhj5JYEHbPCVQRoam2ExuKo98RD5PPosnEnFJ5BLNLyPSVzKS91K39CM7rJPQLAshe1ohbrPCJedi6ppr",
  "key18": "zhuWsBFkeySA9Z3yJz4uk8gyeKHvJVSQFb6PeHxzcX2CWD6ighKfADi6UZfnFLv9E2R6npVPLqMFTXBwXfVaLRz",
  "key19": "35NjzRKCJivoELWpc2cqN9u5UfqaCPrJtDUkKuQMLsZnAkU6r1kZNfpF55WGMZeeDniiMbCzmg4bpwdz6MTRGKyV",
  "key20": "34kmZERCKfrhteJSzTDpeA6NJ63zeY5gwMaPRhZTP2ndiRW45EpswCknVgVC3P4Q9y17LnZVTUC7hcMQSxzUQDxQ",
  "key21": "FswwpfVNLNsZY1CjGegRpqwTnyVzxNmBcDZVjy4CH8PEqoWm4B45eh25bxQhnt7YqfS5vkppazqz3ys9JbgArmS",
  "key22": "j79knJ1fmZVb6SuNGxHEzY2mJHnu1E1cyjfJfxb9yTGS1z5FezZTewAy3RQjaEgc2V7ezMcCg7nPJF9nonmmo7R",
  "key23": "4YYPHktYMb2d5LemfuszY6jLWtCgbFXvyzNzE4o5LANyxCnJLtEmGExTQ5doHenyRh3bJUwzTmbVCXm7fsctwGct",
  "key24": "3Qp7RYRErqf7nKzYeHDx1tUthDABSrPBwfY8Ts3r8p7NaCVWCX5TW4yCYwNxdHqTaRcLBCCdRMpg9STsvyjasV18",
  "key25": "b5WnqBuRptpTS1uMNnQAfG9ecPJqBfZwsPvJETpjmYQYMUAxtfv3Wq8muzpzsSCuQ9moLEWv5cXYsUmLNi2yJjH",
  "key26": "3vXf2YGMd4hTzMv57jQUcwbUFVgWpVUn1KTC8SKGbQTkh4wRkADNAJYFhvjwPRpet8rxC7TjUd5mJmNdUk7K8D9G",
  "key27": "2FurXoBG2EqjmnhkGAT7gwD1iHXmrNjCQt7cP452Mc1U1TGieSWNJTRrPxfjLRzgEQYTtBuHY88WJ2G5gvR4aUmw",
  "key28": "4QadR9seLXH8iNq4jktWaNih2H8Dn1pheefeYDSxqeXv42FNWWzyUWHp1PeVPsnZx85RXsAgdwKEixyfr8fNy5ZJ",
  "key29": "3Sxwv4gnvNQDYo95LrNZy7YiFWpSxMS24o99hNSDYfoDn5T2Vn4Hj1XLApjL5aLDCJMrVmEHVuB2UVzEhPjirAse",
  "key30": "htHueYYpC7hX5YwRAKF9GPzxvrnBm2RixBLbDtKhvXiA4TPgquZDMywq3M6tTCzGmfTz3yHAj4nx3vpFJ4hZXss",
  "key31": "3ZgNQKkbXpnbphd4nCvkHJWMJJPDgrrA9VEjkwQsKpFSGdHXQ7mHz82fFvicatHbCK6m6qqtPmr2Jb1U2DxZdTCh",
  "key32": "5vLCvS1KkQtLYZB3m73iVptKPaSkngSLTUcZfM4APQ3YRKsqGFQ7edhAnkygYybreEvcCnKhif2vpcVZTcWpzd1X",
  "key33": "2r6LB6YmcG4MKXeEigkicao6mFMiioB7o2mdssAPYzX8hWjWoJtwAbWX1fnE1bNtAey8tEQHrRLiwUvcfNCXFmtg",
  "key34": "2yPqQGEBpAWSw8oRQq4uZHsooaT9H1A19Kqwwpp9xmssUFKtowwKA249x4ZtQjVkf1pvJ63HwziM6WhjHx6hVwmY",
  "key35": "3N2UPwTZaM8RrfhD3XRQTScn96ZcUmKMrGBJwi5eMmJ7WNF9kVhqPM3SnyBSXk8uCX4TxEZYKQktgDbeVXGpQhMN",
  "key36": "ausXTc1QAqJpY1k7rnmPA2ENiHEr97hgqkDrLRxb56FQ1a4cyfeRxPRjPnxFbX558L8Rb8F93U75YP4j3rznRHX",
  "key37": "3XJTd8KnpQ3wNV2r1sFiY6gF5tnjNBjbaNrS8MzLMxb63LjaeQMVN3aWtQ1sbgu6gdXeiifCUXaXMCgjyoW2h9WR",
  "key38": "4iW56rHgAhf9W4XzcatANiVsfxzgkPTrnA73ffgiLouRGpbjBZCTaQpSQJq3o7LZ8LRo1WiRSdskCVcKt1nGWD4J",
  "key39": "5mum6Hb7idYYkriusc2zAA1CqyzaggzdAbVNk1LsU8RUtLzN1S2u3PzsoyEMqgfTUcg2oz3PPJKcPioRz6YKiqKC",
  "key40": "2rDEJJDksj1YTPbi3aGj3G7sc367FpJ7ixGFabqyQehXPGRuwXvjs9ypjnPEcYq4so3w5tZkm2qeiSVyvGvE4mPq",
  "key41": "TphHQ9ccCF8KY9MUTxZjQeFVywN8yVSppzz4deWkK82L27P9DznDeRDmeuKp5AM6j8FWZcLgedBQjTYjknesBmZ",
  "key42": "4qHp9XqZq42jv2bs1SPqE7vDKG3ArfEQtZ7fuxg993Ui4F37Fa5TprwKw6omFvcc9FWxwNiobj4omhmhLW2CijUh",
  "key43": "o9Kna4uQerBhJwxb7xVss1wVVR2mKyvhQs4WEkkgqqatms29xtHA7BCoU8Am9JKXvUSDCC31JuTH4mR2CHznjQc",
  "key44": "591oiH9nfvzipwLbqthfTYMRTtyKYfPe2V2bKVJCZXjPsh1DeqS3d8P1QfSMwfbhziRPjtphvVtoRr2KrwubZg4q",
  "key45": "5bfKKof36fJtGaNSXADy8fiyuanvNyxSxXKbw8v7RrPWshLHop6mGN8VNyg5zsiWo7w46gUrGYFqUaGRSo1ipsfQ",
  "key46": "581cosVk2kcgFW72y3RBMce2jVR2vCmBAXSAKLNtMFyPHPuv6F5PS8E18YCTS1d6jqtrKT5xgRLJAsUc1wnB7XVj",
  "key47": "4cbeAf2cqoUi4xKWCo54K4gWTodKgga4TBe3LfGWEit2LpoDTgnXmugHz461N8Kbehq4AMUENw7QLg7AvbKLqttn",
  "key48": "37be2ZRXpsHDfyt3K5tj7aLzQRx8ZeB3WBkKqJh3eequGoEjVqmUuQjnRsZ6VepSMTcv5JeqES5cYfWAbzqevnof",
  "key49": "5j9RzvdsaHDmZHbJ51yo8CtbVanNBQrJSKeVCwDk5RBtCPfvMp8THbdoHX8uE3y3Kh2tawZzpLKrPkQxm2M2wiED"
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
