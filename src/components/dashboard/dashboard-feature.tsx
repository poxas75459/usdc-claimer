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
    "5yxPWUB4RKnwdBdLHeMTokeFXjJZ9SjJuHV9hnt8APm5K5WKCY9JzXLcYB3jcSe3r3A7CMGjhCwhWmqEtAgdmUSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MUgDB9hFbkVbPVqx64hqnKDuTBPHJjsKcB4C4dzYTxwn3XtyzueTqfwgc82iQBUDDpEC6Ywz2Eg6carqaS3ce66",
  "key1": "4EQVvLNwH324RbyXb3mzVqKdPJLnRgweg2Pk47deyiHzoUDEGkvCU1FjWjYy54n6gBQFjfp5fp6D7hpzz1Y5Ks6x",
  "key2": "2mUVzsLwcJkMXJv3He9MUCc4qALAumVJUxx5pTfhyRTqAZUZUaUZvqBGqNWuMw8CdH779S2jc5imCyrSTUwqoYBC",
  "key3": "3KCdUavKQpo4sXhmSqMjDfcsDTBph5a7mazMYg12r36WNisJv484TVRAbo51ZsfhgdywGMxntXCyrpRze8sr3s6G",
  "key4": "42A2Yae7h84A51a2WJCCGFZtmc3tCCGqSjgQEv6mnztLY7VcZKudh7GBaGkvPy7fCMYNWGTPkdpZdk8DvjiUUu97",
  "key5": "8LAi3iJHmdgK6YuDocHcwYDw3GMkoaF3YqjhYWeQGKDRpikuhHL5zKZw4wXQC7PanexX5B4JPqA8zDE2y7NBxkQ",
  "key6": "2Cpy44PkbByGTiuZBd7oxK8aVk6Ybj9JD1w7Rx489zDQXQiFYiHpPpqPEHHVEBR3TfDs4rasnhB7C48YAKGL6bsX",
  "key7": "BYwUpyCcVnseqYqb7JniPTZ5TZMPhFua1NhpLQn3ymsk7aPkfk8MgSebc3EMsUFwJZnMKQwSRFxM1Vkc3kr4D97",
  "key8": "Qn9LMFqttJpRyaf2ewRBwo3CPUnPt7fYG4mZxpzexGPa2ynMkFHR6XNyhhHANeKikrjsYXKyQ3h7ZzNnWM6DEun",
  "key9": "39RqaCgeVd7Z28mSc5F2FLGf2DANWuaD7A5tNEqzddbiMjD4kiDbPk7KTSskCpdVAbCtEbvgfRgtCTJPni7w3Rwk",
  "key10": "2uzpYXqpLh4T77oStqwGFZQp2qYgkHiiudHwyEhQ31ecqihM9x4kCHPDkm7VEDfuYXkAaZWsWXxjWALqVpG8KbF2",
  "key11": "4v49t3DDSwPbVNdpTvTipCxKkyS87DsCeLrzGkVqXKZmFVCZSZUxwHLCfTqW8LJt4r1DmihorLtJDGnSaArjbYHp",
  "key12": "4dWqejwwmD92NCDg2txUXX4UnyssvX3MyW6uuh4K4dXFf9JXyMNsSXKxjtQQSfBMPix6xDUEZCUqTVf85BdNakBW",
  "key13": "28fEdE39Axg5KZBzMAAeo5mvjfqMzY6aUQNfzSD6HssHrWrcoF9oaPBonkmhSY52DC29Xa5SobLCfFC6LWurboWc",
  "key14": "4qUBwL7KGdwyKXpTmwPsgZGZ3RysQH96zNGx1FBvkxSAhvsMSHphadxVYJ1bhUgfaroXGyEDqpL8C8h8eek7rug6",
  "key15": "2T3bTrfjjkTLQ2xCrR25yDham1FATZrKkiE4TLVNPtjpECnKTyiJbABETaDoq2Wtjh532hySRDY1xUCJVE8Nkwrj",
  "key16": "5eNp7Xe5mAkvupEWqBBvXtM8igsSnJ78m6NvDWg6essQtGXTkMNwFiBYYAtmdL6Cin2HM1La28EWPbEYfuyNQE2R",
  "key17": "3Zv4AU4mq1xxSQcnjVJDHfkjBYKszfJ7svKkDKXHF87yyy9UAoKETQ2BDZGGXWG194bdwduuVC99qPvAkwfLbSS9",
  "key18": "2eC1FCaqyzZuWeaWfc1JMePqVPUX8YSiYHF49edKASCPiH6azRaaJGGZiyPnbhd2JKxTzvE9Fj9gDsjyT3f7nXuQ",
  "key19": "5Vpu9SipeXf3FEMitfDuW6SVKzmadLmEQXNrvreLTm6rcdyxgFDsuBGdxa7B6CX2cBeV4oRJzN9ZqkvMShXT33Ni",
  "key20": "5jQMunGCoGMf93AYRhnDN4Ewn5yMbAEz71NJCLrYx4gg6Sn7fdjwZj7myUVJ8qSBWPGgZaysFXwT9LA2qEtKm6v",
  "key21": "3xWSatgYAEx2uV5dEsZ8vArMgWSWhbHF3Zy2rAroYRFXsc69KTCZ74YLsoYoBMWegjGesuchtqvujHvj8feg9B57",
  "key22": "5yjvcXgqGG54wBfon236bgpevmSFq4sR4o1wvF7xgiVU38rw5ozMnjq84Y9fX5ASNYmwT53H6HCZiPQBiTNv1sxt",
  "key23": "5pi5HFK4JkAdjpWKus9dYnkzZY9f7XiHPUBbouGLdLNsRpSt3Qjmsuz3A4upxMmuVTEL3FhMBzRQSVzB91kj1awS",
  "key24": "49R7ZXwjn4V1bHzArFPzsFw6MHBpQof6JCdvejmvdz6AzBS36WW6WC2rf4LUqGPuUzxULwYXbRTyanfUdpJu4Qku",
  "key25": "a3ZxQdt9JivtA3WT9BKNFQteDFrruNJVj39wpxwgjM1mbebjoQK1mALjao9sTsVsihGUmzwN1aYmsWeQhR5akjp",
  "key26": "3nBmhxPrQxkrUhWjJEygPEmJi9Y7xhrVMUgoXDomK91t16W4yM78hLqUsJVeUMnNeNRuauFCNHXdDVZwHM3jEJck",
  "key27": "5yuEJ9jJedjSMPLYesfVDWCvaYnpiQWU6fesUwR1ppvR955fqfPW2va36FBbymiWVzFYVTjTBizPXFPjfYEcTNaK",
  "key28": "51BoR5x2RScD9PAZpPpX8UEMtj4KQ77Hj7b7YUjJn1Js32PpJyBnx5pTDhJd9dJvayTYW6qxF62ZzBuBfoimZb3C",
  "key29": "2vdiXzYscZ7C1XdRcjPzRjDz3MCTJ6h8eKvo2Ly3m7zzxxNS2W7TxZAKn4afMg36BqPEfhePgDvJid1Q47aATj77",
  "key30": "K5GVE8WFKVvHTgj39HmoRg9JHrLCATsjwDcmNDvu9woU3FisUSdSpThNLUwJeQh3RR1YpRDdwbEUQ8UDGgici5p",
  "key31": "4NPdbkY8gyBvZMNhqPD8aq6TVgkzakEmaQVSogSDjKiPoBxmwU5iigfjuHC6uWV75vuQjd7ios3q7cWmDBcUfUtF",
  "key32": "2or6TnNZxVXpzySnjQZAukQ1AFU4UPVTrLXwDKUcrwVJEagHCEJQwpSKvRRSa64RzXBKa3mNkFz5RvsugknK3DEQ",
  "key33": "3JXP6EWbfPvw74muqD3zEbFV36kUWVNVitTZN5eBEU48QPkU6LmrnG7TrZ5LHUThc7Q3gNwfy7f5q1jfJ7338ngf",
  "key34": "5P8iBrtgTU2D8Wr5GEao5C6iq2Jy9MvkbiWx2n7CMicjjk7bpTNtRNPAwNHV2iSzkwDEzk72g4Vajo5quL7b2zaV",
  "key35": "2bwJSF1CgRye5MaP7By52B7pjdiibU4Gp9s1BAr9G18kV7GdnDenpTg4L2BC8DB8qHXq1xVCwANpZvPQxqHjgdt4",
  "key36": "R7aXds524vdjDrHQ2Hwa8mmJ8DHKovtcmuM3cwEG56XbNyQM9PoTNsqVxfsALK8REfCydwGBZXBCkCUuXbEJpUc",
  "key37": "4SXN64UGBcLwunJd51GjrJM7Z7aiAn5dDCovLMyqN93v4uvELM5d6At4pZemH4RYz1jef5DNtPhWWZ4A4fUSG43A",
  "key38": "34VS7J3cZJGwUrq275MDxQ41ex2sNzPRgmr3xK1n5wT7RsdQV45RnTVJyc3y3d2H6BHH8FpfcJHcTCwtH5LgtQS6",
  "key39": "5LqYXEB8NrpwATTrTjHmcgxdZf21GvFc1hDWvgGBDnnns3YmLKUbMhbAbuiYvcQJ8yoSRUZAzpDDjhuys5GwGqL7",
  "key40": "2fCySVU232Q3zF9AmwUj7S6DiaEutFZ9XcKucnqrmk3kx4jkReTJymtH1GNmbSdfmPEU9WfpFwMpNckauHR5s9Sc",
  "key41": "33ZSvF1d1QXmTAgTdLav3rgsAc86FY79GiAgkiK2hx22YdGfXyF4mH8VwXVjHpfNzm4Q5FM1FVQ6bGkfwuKDvmEn",
  "key42": "2UngLp7fiT8m8LwXMa5WAHnCfYjygoRoCA2A6e4qr9mKhYWMsJjmzRr5Vc7auqbvA4Siw77JBT1Ks9pT6wAkG5ZH",
  "key43": "VERFBLKJwg3Xq1P7fTucorEnL3C5bE4ay8NET8HNbUFULg5tHpog36Noe5b61LragG3PPiDe5nVWBQjZiWrdjpu",
  "key44": "31JaqCn9bCNtvmRBVQQpFCVw6TfsMMdiRwH5CWsnUUSqp1s2kkT1NbmhR2UzZAoyQkr5StAPHN6LdDdWWsRLmP19",
  "key45": "5bXyknAc4HbZFvvXWHCDdUTB3mn52e2sTTtng5SqKq9c46YHykpuNFvoLXctSzqQQsMAn6yZcMhK2qxpeQdA9gXE",
  "key46": "2hvJevxTcp54PQ3qLF3St4yAiKNhhyPVSf61cZwNu6iVfQtv1E3wifCPpGmyere1dqgEG6TX6NkJPDz857gcBvVR",
  "key47": "DCjr5WXwAsLyHUvQtadbMXXujSumxt3HqWA2Qq2mBxCcyW17EMfU1eDcYvUzXojpiZ8o5Cdqsz1Qd5gVeBTvjKG",
  "key48": "4E9FLRkQy1CMq2fGPgBXtpdwvmc1mzz1StoTmGo9g3qkLSiNjSvRodCtEXB6R6qMc8cQCZYWXNcmZ6qau15UCtoW"
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
