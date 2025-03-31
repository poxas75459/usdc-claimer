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
    "4BYgi6YCRrsSiSFKnPBj5c1h566AahGmJofMPbdrMz33zNVyt6Z7AniXouS89Ue26HSg6wGqPUtMnZxR9ELiu2jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Yu4EGjVtQVPiJMdw4yC8tbnM4wy9WkDmkkp6N9X4y9jhxvtYRENnpzbmsDDnu8NXQa2qVfe6FBftwcRn4En9LC",
  "key1": "33qFgVhvhCwWEw2R21eJt1yD6dfg4RqS8Fv1tCMZbRGhst43DhN8Pn4GiAuMZkSDwEq5raXwrgGBtxtmc33tg89v",
  "key2": "3Xo3UQBrk4tiWksUEHNush5JVErdR3Yt77eEW87AAetzrFyydbxZ7nGvXiEvdj4WrWHyDQdpUdML1y3Pxd1nPjLN",
  "key3": "2brRrJQHe1LTR7iKHwSvbcdwurHXjCRFCRfWrkPFwtMkvwHfegs2PRDfdgjxbHA7PyhnuAZaMza4Rt9oL5RBwj7d",
  "key4": "2xP7EhtK4993ZVvfiL7QJCyMfsDE2z2231nAjAhD8SvgK2Yt4fZv4oJGYov5KmaiQasdrUPjrBGg7xDXq9hdEGpV",
  "key5": "p5noja3qycVfjePi8nr7haM5dNJ6BmJViQCq62b7iumjRL5qVhL6nWccXYDNkYT1gxSA5VJgX6MZCcTkdkk6F4f",
  "key6": "4vydTxFmKCi5M68yHHLbPbLRRa8QzCf2pXKwqu9afHbTsZBhWdjmvaXFAgu99YAHkdn3J3jvmH2PWyWNCeJqbtxh",
  "key7": "5q93KRvk9VUgFXjCKNfWzUKArdpip6JJT97k7Jmcyj9ZnrJ23xyCDnLg6hhArQNkhhWpiCXrV9JQg4TwUAki3tFT",
  "key8": "tiVtYPPSmAeyXHmg97KnZ53rdZaaXR9fV2NvHw579HYSTrSxzXdJ9UaS1atpRrkYh86qDSYyHXq29S5Gu2cqhcG",
  "key9": "48yN3W9HRRigw4vePrKKj3NP7rNL7MmZ1ixJk99sdWa3bNYihG8BuwY28a4pnrVk3QhpNWP2SYM9CM1SnZL2FVBS",
  "key10": "3vDTkWk1t9kFTnCYwj48jvwXhyk5rMGb9sqiTBW1cA6YXB3bvhkARi7t3k5su4z6pt98kk5ZTCPn2ux1gYX8oKtH",
  "key11": "4RbQQztayXxV8hxFC68KF1JGCk2muXifjQyNC3gJiZRvPknoqaFmPUC63bkky7ii7EwMn867M3tz6oL3u7iVETk8",
  "key12": "51shMBv3QQPuPQVJ78UJnHFv316ctjRzoh5qdSxJaz39BnxB911owBEZAZNTAtarTrKL5wE2hfUSoyueuH4DkEuV",
  "key13": "4faJVt5hPsbuStR3VjTe6biXWZhLHK4VbCPsBprr8LZitbkhrSbqVsYHnaXidMK7vvTax1KQgpR1C11zMe3zvAu5",
  "key14": "3v82Rp715jwaTwMpHGmb2q47fEkEeGrazBtkwFHfdrMzivFb2ubxoyUnGJ9cDL3VLBeDFsVTbmsXDNiy4BYSVTqt",
  "key15": "35xCDgkeRMcyoWrzo3Vxry9jAfrwGSHfhy2WWA2WoVa3ew6N7Y29J5xGXupGZYmbDhVLeiDuyYVThrJgZuyP6vPA",
  "key16": "5FS8FrchQQTrYeXfAFHawZtmPKywQe8nE7iq2As1fyviykjCN4xwFgEbjZ8F7jPz5h3imY9ZdYzQ8mP691VnVvN8",
  "key17": "5AiUkzFm4ePaWaR7GBCfoMqh2DBroF7ysQzTvdHiG7ZVP49LbtXPR3vgzAoY7WF8PixCkPF3uz4791FFuVLmeMgL",
  "key18": "43P1ZJPwuzN7q8jSULyRKdV2ti6NXLGLnEUnqjJaF3CnVdHCAwnZaiL1kWKNX7Nfk2VWXp2sgbjtSAJERFoD8dMf",
  "key19": "zbvSyc7wbihMcTvrhTbaeURbAzokXZrLZDNoXWFYDTBnUAe4ZPgjGsi2GZndyEzSBDPLVUB2KSy4XVgDjBJHuta",
  "key20": "5cJNmJqBbw2AfEi8djHNAMtevrfykds2idghovjKiZ9F2chYYFSfn5PeSmo2osF5PE6e9tXAorTsDY8Jo1qMSFKC",
  "key21": "4rA9DDXP3zXXi9DDoY2tdvzMhqC1HsaYyL4AZNDv87VCiQkvKjwcvyU3vHJcsv6JngxWFU6i7o26AbWSySRfEy1W",
  "key22": "37vrhHa18UYfzH52EHWpoEWRCPc6M2S9UTRx18fuSFB63CCSsFJCtfjT5KxboAjcfYig3XgP5DJqSBKCNLsP9UVC",
  "key23": "g2K95nZhbYSCdrJrTSbMNtUtw6P2ufL3b8wwPt6SYTP577CpaapNPbEgi2BUtToX92aDtNEbC1TKHYUdccibfnU",
  "key24": "5oNvsWrwGnctqi7yMX2JvmbL8o72766T2E8FhqcEH4PKYP816D5tg9vdUGjTpWSBfnmXAuTCeVqLxnwJRtYwBNyW",
  "key25": "5Y54EGs5bMDAqBMKoFbXMpGNGsHAZRcKxcLhVbfQ6CYnF8vPcszrhrebn79uJrdGNDEF8YLXDgM72EgufCWMBqme",
  "key26": "5A52YvMDz9MvGPnayobz9UXqbAvESmKBKNZdXj1Ggq1TckoHxG2d6GrDJYZvAzebYeUWtXriK26QikKbFPQuZJc7",
  "key27": "3FxrRmARHfFBhrCvZ3emNNigUv1JYrFVkDRRRR1WDTeuphP7HJ2dUNNyxB4ap4KxFz7oFMTxj7nNvDGjqvFu3YDL",
  "key28": "61gCsr3o6RQdDa1nuVULZSjZrepFroE4trwpm4B5H2CmQxSz7UiwrXomZBfKfnk4aSZhuUcF5PzJYi2SQEXKksr8",
  "key29": "3nBPkGjC5KpYfuWWtsDSb7P7cdMcZcWFJ858SLyANdn2v1gJyp1wJzjJ6CwqFQwesuKJVXsX5TRioRFrURJqQEdF",
  "key30": "23h7uQ6CgvsC1AAuBxAWvYeSCUwQ1t4LjVvtUot3LGkJ8vThHb7Yfv2jbXn6EhzZViwG6gjYGNkAty7vnffRwgs2",
  "key31": "5LeNvAe7RJgTZi2tRoJqM6pZ9GtnHGfCnvP3TbkfonAZvE3yveq5fkSAwwfpXP4Eg92kXAH4RTQbh2gxBSrFoGQn",
  "key32": "5gu6sRKCsVTZRGfPDDq4ZQpzfTmHNpLzntysoHB3wAQDbko3YxAWr8CV4a2ajQ6K5MLP3XanWjniKbCpJYKX6aVw",
  "key33": "5iLJKBVRVXkYEaTS9QCqyqswsPc4YyLZFcJuyXe5bqhVsSmdsWZSprWbSrgSroTrZGjfJvvNK8nPSnBDogeQ21TN",
  "key34": "2EYA69rtyEaPpsGtgmWCVtr821PPYkXcJ6Wv6wf6rB7RKimKdsJNg8HDfqgsw1r2iGoUn7fxDnpoNfyL4HL7wasQ",
  "key35": "679rXi1NfeLaQhnaAMwUcMydPfFx6qZyLzseMmryd7qbEKpKQKbkP9SJ5PNUevGHHzzDyxJHVk6D4VZDrRTmuEWe",
  "key36": "4BDbwTojtcFN39Ph2c7KtHzARqGTJmfjUHx1Zvw77PQJsS88CHsCnDAFMuWgwWueq9VhvFrj9CaW2rokSRiaRBs1",
  "key37": "4BaiVtX6kLfFoBn4DyjV9p5WhaZJcGGjcprBQAJTf6Gwur2Dgn8hEHtBEFVwkSykg58TwJfNCCjE6trZt8P16Nem",
  "key38": "2CsKJm6nRZsrBA7TMdQ6cDiUh4wcdJHUERnMT31uRcUzAPVKVXQjuWBzjqDRJ1VyHa63qa7Epqn4K2zVTCgmzKQv",
  "key39": "5iVhe3L7y2iCXvmajHUSdDmpoN2q1Ya6947VqyyuBaJ6wb8iDbsV7KMsALXpGLYADrAFjwspB6wWieeimF5uoJZt",
  "key40": "4mxZaEEifsnWmdoH2gU36aaXjbtNqeYDs2znfuLGfuEHSdJnbhoYAWbsNbSU4AQBzGXvm5sYifXcPiUQvVa7Gu9c",
  "key41": "23PxZTP9UnE5Taeuhq1vFHFnM9Er1JsK91rigy9mkuNWx2XH27AWK9jTAR5YcENecErEYY3hV24kTKK3eanPmfXB",
  "key42": "66VYhY9rbjRUgizzLU1hWcKQQPdiagnczjgzHUAebCHvt67i9iF7BmyU9TXDgXo12CHrfMo5v1EsEQpLBE6brAUN",
  "key43": "RHkLesQC9cJrRqYjV8V6KqojNfV1MsbHgjngqBv41nLCVpmuetqsbSs2kSe1bjhKzzoQZdgKAEyDAr4sUoS4Rtd",
  "key44": "5cc45PCMfz6PG2cuC7c1bPVdfBVxdKfMgtmiC8i3QbHvC8jBPU5iRs2Wh1xgug4YHaknvoXPvsdtxrNj7V3yJBWs"
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
