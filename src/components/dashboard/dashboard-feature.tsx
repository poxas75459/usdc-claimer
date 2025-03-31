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
    "4ykB7b5VmyeDao6KX8uirHEiy8stne365bLXQGeFsVxU4Sm5yvW9T9raKZwzqCRAb3NkFirJxyu8MUNkFR4f9vfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiYWo8hYFXSCqEh8DzRAkuFuGVVRkgwaLq7Pn2iUNWDFSsVKq2hbwZUbHQN6BZXZue5PJAh3mDHmmsRdQkWDwMu",
  "key1": "18Dx1Rce8UCJSfF56t7v7YQy4sk1SRAxpQRzhTwYiuUsP6jLD4WsYWowcbqcBZtGnegGg1PEhykQV62CKXjsssj",
  "key2": "2G5nFXsst1HPjnvNJi6fzx3BAgPQNjv5da2Zx9qtL8ER6quzEaBjAZRJ5nnmKn3PDDGAguuwKhQJBtLtamiHC798",
  "key3": "YMj9S2fbuseL38xjEWwBY5S4MZWCqyuQikdY8y9FcB4eoxESkoNsEvntN2mW5u3Pg9U2XnX61bo36k4gYdS7KQu",
  "key4": "4F88Aa8uMzPNhBq3BRLy2RF1fdcvkM8YhGAbbzmR27WfCsQJhAcHimCSJVuCBoMyjSseYkUMxgPFxV1ZiFvRXUfu",
  "key5": "2XFekW3SgAVD7zbohtGKd7Z4PLmsQSVpM21Tur3DK4NffP8sUhUBxL217Msw4sq8ReVhxJipXDj2DPLG6YtQVEfJ",
  "key6": "yqZiNHffRLbmEzqg88akd3FMmQvERkgenKQyYJMZe1DCaUUUTQMTtuCo4Mq4vQsvVo3SbPz18eQgW3idARQn6MU",
  "key7": "2ZGseZGoLLNhp9QtYHh8W6xdUPpXk1ad7dooyS6edSopvNCALDhv5P7fZeaDauAGxENJMS5he2V18LjmtsWBbXd7",
  "key8": "65pwNfpaUeJtMqJRe9dXKYP8Ae3zhQFDKtC28eYFA19XxzHqD5tMycpLoiMopjnoNMN3K9ax76jRsR9Z4YdeKWsm",
  "key9": "WMMEx7q3eMcFB5NhAJmuJTkyrqotPC2p5RZ7d1BRByoornV3hayJiyuf6pbLsy1Y6AbXBFYL62hmQ5CrAkFADpY",
  "key10": "8rN4LfE1gpZ2gUB1bDyi6nUu3GhFu8MQGi5nAxsa4v7r1jU83ru33TSYBiP2Fmj1zMSivMc9kaEojP3up4iNA76",
  "key11": "42U4MY6LwpcXXfHGWUgqdK6guop9LSD99xwvVB4D1hBsRZw2EvQ3Ho1b6Ebj7bUbP9vwSG3F1TCXk1G9ofLUsCya",
  "key12": "hqR86J5VaMrf5mBUJvZ7UQoDgVA7SbEybQ1SzGS1edKKC2dfuRU5WRLe9bzj4ULwCFBoKUnQTUjfojPda6icmgb",
  "key13": "2BPzcgjEuWibxMaPZgWDmXuPfQBx3pZmyUHVTrU237D14q8ai1evfwWbAySaUoBVY6CvKUa6HCwPiEqidYhJZ9kL",
  "key14": "3qLKMWQubd6QEM69rP16s5qHkHqQ8D6bRRiH3JpPt9kJPrsvoy2ZFgQySEq7gzL3fvdk7kBCq9cXgLPDhvAQCM23",
  "key15": "4dsFjqs5MkWSgSBf7tecC2YGn3eiDkDJu9mrCsJ31zeovqXk5tPV8mHY71Wwc6iWZDg1esW98taRtuJp1bRdmakC",
  "key16": "49RLHoR2EzZLasnba1zoJFDZgFL7Luf2pjWSzoKEMsmZH72XyZJsacg8xKqW3vbrQC5LbgDJsfBv3QTQeYiKVnSo",
  "key17": "4nAnr5B4uMQhuoB9crSZLAAvSPbVqFJpoggCH3iv7vW24etZNM9iubbqGhisWyNLQySVmuziu2NUcMmZJQd1khNZ",
  "key18": "oewV5aygeWAYoCWNwmFMznCgbdnZpq88VLxuuHhqVgizKUbkKxjNKbGT3vSzGUNEVr5KMiWDRnTF5pFMLNKM222",
  "key19": "35BzsfayUySFpaxZdo4ADUZXsAAbzGNXnnWMod5SfYn59ci2mFi45DNdXwzYTFA1URuyDdwVF3wxDJAGAthua88L",
  "key20": "37xSKFnStT54w9vUJg8pXd62T5YRhWzrLZyAhT5vQTtF8dca793ctbtGou6wdFPTzN9SVJh7AGyuaCQuLeQ2iFD6",
  "key21": "4to2mmZAcijcwsH9LGNk6fze7fJod2HaxiwGJJ72NqnzrAhe4whrygLar1ksJtHk81fcBY3L7FHTk2HUEKtAPxdY",
  "key22": "zwT4fvKnzedKvvMPicLCtz96pahBekSiEo8QBnKVKeVHQEuRyZp5VYVXbTURiv3WYUDc4KdMWFHskJsHStqHoBZ",
  "key23": "657agiRKupWXALZbuYvojgJj9GCHMdTNjswCu1cGM9zAMzwAoNNP3tPeAfBN7fqBVHtdSFBdChxspEf6dGnaJcYx",
  "key24": "4Tf5WvpPBUiCf3PhSU7mvS4eVAaGHSC97s4qSJS9F1HLLK6tkxmbsziicGPTp9nEnrAVk6G7gt9eCJ4AX6HCfERY",
  "key25": "2ToPv162ewAZczTbeAwZQAxbs6K4N8qjvZH8PQ5skFVJTrKkurxMii8xVSWuVjLB6rptw1MWM1ScmGr9YhctPUgA",
  "key26": "2gA18mf3Xckg9PqAkWvKSpUFstquxTaCuQeQSvre7fjiK8Jcv3VnPDNA1rwGk2Cj4bNMXhtFNF39TpkufkCHNbV4",
  "key27": "3MLRkqatPJaNR74kSaGJYPtPjWngZHxwn5oUCFLn8ZVRxkLR54jU9JYtbYx3LcUwjwmiZYCioQg6UKEXytjpeWoh",
  "key28": "4gRFTvGJydbcR9ERvJCeDuUVpwmtnjTofA6i7r1DQmcQDE4R3pdh7X7bT7MZW52s6sn4fqkvMcfurqH5P6VPK3Y8",
  "key29": "2q2PyT29TdD5uBTQ5rCoSJ4e6tMVvSvckvXHEVrPZh2hixmCePabR5owu95r64NhxWy4RjWupRAAot2Q5DJMY3dp",
  "key30": "37kUtJT1KoTH38X8zzeV5wBNvMGXaHx4KtFUrW3kc9jBtLHPVnBtqxgM27bVvHg4zPYDdtzd96kMBpb7DfmXnoJk",
  "key31": "2paRLVxjidmkrU67mVQ6ZATX9ivq1hpewJa3T9BxZv4B9tdcCboxV46bHvKrZyDVzg58SgAdVFQ5jFZU93UH3AMr",
  "key32": "31Yy1aBtz8r1j8pLiWFcRhadTmSkcNonx19agbZ3FvCX4R17HTPUBU7WMKcTzhWTq88RhtHLHuMi9E6JMxPSGoTk",
  "key33": "2dTZX4aLbg6nXETVgiBmhfeYR9pbkutpfNfRnwySqZSUtmcYGgt5kPhRmtFPc2g8FACHuQGRe2ntS4FrDRPCMP51",
  "key34": "43RP6RxPdycHtAwd9z6XCiV9Q4KSV1xjSdJLaWeUafKmMirRjZMAs1t4eVew8wLQmKuPGim9u9g6vnKrtv6a4oHt",
  "key35": "4xYTMmhW5KpJKp4GyqZzYynpJ2Gd1RgRnB6aWeJML1dBhWErJJZVNFpsadUgTdXxq18QLV3AJBjAcwJ9qCjimCpQ",
  "key36": "kK7jssDru3uCwZmQyhZceF6sjhEia1uFFBG55MJPVSHebdSd5FRCtBtpYCNbedHA7iy4LFqksgDhs9cK9twMjk4",
  "key37": "5w81yMapuS1GyL3dJEKVqDh1LJDhYfQ4vLE88UgfgzLenfd9YxG7Zn6FKGzzHhPX4FFEH4xwAsHLRJAsXR5p429L",
  "key38": "5NX7fdkkt3KbRokdz8oKhKvmxrRtVM9sTsL37AdVrDP5e1BmnJityHDzxbJPid1LVg6CXfKNH8yWvteUFDm7AoWC",
  "key39": "ZsqXd8yrjbaAT5RFpgXDznH69aXSYnpnE54pxqNW3W2VjTJBakrR1smx9YBcbNPgdb7BdMueQ3oqX15haX86PkR",
  "key40": "1rPnj5BrrhbURrnRVUJtjEuXDvSoMnGHbttRDagKUAdokWJkTHwCSckaM8f5Ysw5kKdmHtBJLNJgEW49aLqLecj",
  "key41": "KaXuCjz344vUyP7KFVTKsA4s5K3FQoiCTagwsjMT3VAr71sMXWjHup6dopFATwmA3j5VWCmvs8V6nufzVZJU38P",
  "key42": "4VQ9E2qJR5feMYQFFTefjKv57kKXDcRkeN6f5UKcP3bww3Htq2gAhghRY5LGwdvcHMkXY8kq4Ybp4BkKJxtjut9y",
  "key43": "3kwfgvdzjnHGQs7hT4GwvS8PEJKP1CqDLi1m29Zge37Msdjjqop1RrxndmPAxBxnd56d2KhfzsV2pL46f1uwqEjP",
  "key44": "43qL7UuSBuiS5ufgb1df7Eh4KFRywm3LaRodcnzaXYT397hZJ95NwWB6SY2vuzvPwdDnSRkdntYnjN6uiFdWXBB6",
  "key45": "5GmwFdJHKjecTWPyGKzxjW9cyhEtxjNaJjbdKcdW8DRVuWd8hN92A4UgUijtSZZj1ptWvEHdvFeAxLFoGdXwKCSi"
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
