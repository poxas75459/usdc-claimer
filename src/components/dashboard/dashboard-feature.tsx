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
    "4zdqJnZQZd49WTmD4Ktcc79h6roTV3Qaj1xMc9AEZ9QiFSAD1xwPGJWNzEeaUvLXoyvW2ttJfj147rbWwED2H15n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBffD8BNrvprHWC8Mu2WgEfDsxtmvQC4bmcvdS3e7KS72GLEyqJtmp7cZb7bRDxLum4h3msKmmVSJo5DEjKD6mF",
  "key1": "54U5t2deFF5qieuBWLWKwggaVvSudMKFNp2EACt4c4shWJDqut9DgiGXBhAwRXEAGLbZAZo9SaGnQ6CX4boJuxEN",
  "key2": "JwdhiYVcBEQhcFpfVwYcabkHDbxx3JSQvH5qyeWA8U5uqabPU6iXyfoCAsspUJ3JhcpcuhepmtUKmVZ4Seum1cz",
  "key3": "ZUzicxtTXqEFfkvjKzbJHcVPaLX5L51VCaGoFKLFqJUxcUW2MTwr3AM4orTXNpVUBCsmEmtQRKuvVcFtXkoba6W",
  "key4": "5b8DTMLB31DtM9fGKhv9Rjvhpdkr439ZHEV8TKrTKZM9Ej4pqde5AUULeYYYnaYeiBLfs5w57tJGrw9iFTxY86Kj",
  "key5": "5YgqF5T1bCcjmytp8xGvj8tpSri7Hwt19aG1gkxwzL7h7LpsyaRSscWUYhFWfGmcvJxsk6Q7g8dnVY5RDwbrpjWW",
  "key6": "55ozM6mMApcCEdUguTTp9Q1ejy4CcKVDArEdU53Fj7oJHT9a6oQntCEvaLbREyDDQzjoUtA9urSG2ELEuuRSZFWc",
  "key7": "Yera7rwe8A9oKpAXdJpLofa2BMGdsGe24DQLw8qwrrkdfouNtf3ZLAYsZL5rebitwxQ3ML4vb7K5PVXpegEgTfD",
  "key8": "2PHXYYxW4boBXfzw4ksPFWaPMYEoQKPScBBf9fqvMzkXz22JjvuY3kiaTvCEuVpUN52qFnCk8ty7VYrEZp89UWkh",
  "key9": "2gBt54M5BEmaU3h7mvGxVL8cNuR3W7nNco6Cff31fH578Whjs3ggsgRVBQXQivXxRmz65mJ3UqT3fWHZaEGREqKg",
  "key10": "5eZBZ5RHbwHUuLFdQPuUghy4MLQqm4cwUeeomnpK2L1pySwc9bG1bPvMbUeuUkRnzRzhnb3GxJ8dCq9Et3iRniyL",
  "key11": "24pqib1RG1eghc36rVD4PCpEUGxsbLEA2TnZyVXjnMwfHwyx76NMnqgYMuJwcPcmX4g4P7mGa8Z2v6x8GaKShW9Q",
  "key12": "311y1Q5bWyAnxos9K35tRZaQG6ZozdP57RwDL3gbohQpdRYArkytbHNJ53PjFLFupJXALD2UrbyGU5Mx4cLkF5E1",
  "key13": "3yrVDzm5eSmCdoSpKaz9SmsNSV7xUDvWN6BCjTXmsmSw5ycrejmK2bWcLz8JuVwavffD22azgkKR7SoQPdXZTw2A",
  "key14": "35udSne5tVmq8f4a8BGyr41i8tkA15jmy7Dedkk6yMvXPXx5hbp4XYq1VaoHKbpAQpKZVuBvtEn3eysTCQYq4CMi",
  "key15": "5GBHTWLBE915qDUufnqrgJGfgmmbhQGUt4VGVLFaWu2it6fJQ99myHbSmSNHHhpnhcRsLb1zuZnKjkE1TqU1ENzv",
  "key16": "5Um34V1LkdfmrErWNtvvLPG86ucgN1A2AJq97fRfHii7bKthtQ7vD8hm6fgEUEfSTBFag7mx88CtyDkomWa1RyCw",
  "key17": "3Kie8c8Xys8keQWWKyjz5No2aYTHKKwKRKPVTDhoRrihXq5gAc8wJLu7SpF2whrekf9nzNrdLB4QLsbYgNCMv1Yg",
  "key18": "4LLq54V3m4VgUv3upQm2hwAFoR6X2MAVSPFvZAjSNtyZrm63gxhBYSXC53R6hSi9eggFSWvBZmErQLLGQhSJVYY6",
  "key19": "yYBCT6TnZQjvgbQeRLyJ6VpkM88mCPYmDQyYo7twrkztEk5HsP4eK9sq6qmEX42292AjsCX1VpA6zhonUxKNnGg",
  "key20": "2M7nuP4s4ByCT7XVukNYoV5JKqUm5AidVkiPEUaZZV7t2y4iYG9v8q4WXQRDBA1Rj8s7Lq19gDUVMgBParggJn2o",
  "key21": "t9Uso97z6UW4dA16jqjH3ScLU84JRrQfe7G96y84ktWXKxS4y8kv5oqJ7YY4CUWZ4maNgkSbZUoXiTE6EYT1tAr",
  "key22": "3WnDbVDLMLBVzvkduTc3hvoGJEAGyhveAAPUXp4hgZwa6phQs6rzPU83nBGY3RCRCvMbUwe1wAVLR8F4LbdUwm7p",
  "key23": "5r13zPUv67Vxg7YVNrWrjjhFMEUTsnyL9NqR5UtYGpW1N15LXkQXwknoi79QYbQhpBDFok2YGhThaPGdKdoi3LRV",
  "key24": "3mFfjR7RYB1Eru13BGkGz7kYM2TmcbiShGZ4tuMHyVsV9ioFzqWwe5C1YZXSxCyRcFy5H5aTaTBoitJMtaQQxJ9b",
  "key25": "5BUdNbMVijTKCydLNymUP4PvpQXRCai4qMwtMskDUewQW37ehNRbZ59QgV3XmgRKLEX8GMLqCUw2HGszpfqZCRF8",
  "key26": "3uTS6UTh3t1YpGuC6W16ZztEZ3eTGdZUYmDuhRc8T27FCH6hKxS2S8aBKeMVVLgzEnyHiRa6q5DedEQPLYqVpHJk",
  "key27": "2SUvx9xnRepj8eBG99fBsPTGJxikgig9RZb6FERn6FTA5VNMiXwSR2GuZhR17x81CeSa6yS7yXLiGBfEH7Toc65U",
  "key28": "5xxnWyPwAzZ28qoSE9b5wJt5uvHqZ26BtsiTsGMydpUCov1GHdrXLUoJrKXpU26epo4aYBKZdPFMJVULYXfoNqtM",
  "key29": "38QSm2VDQbJyaVuFw5G6AKwaBmPyxaot3wvz59vDoD6tYg19UpdXYvBiHiPs6kPwMQuHzb1Xcy1UjjKffuhPtcQt",
  "key30": "2Ap2wxMPLf8btC9eYJ92Snw2Z3C9J6VjHtQDupaRe5rvKQcmZ6DBe3wSjS1WBJYR3m17gU2dUwpELS6uRFLy1swx",
  "key31": "4BRbSKAJMeukHd2SeZmrXYNii4jVFZNdDifaxxYF247JuB1Go37xHZNjdDfz4Gh8JCgKqqTgzaxUHFwdDSqv82J7",
  "key32": "2Q2ThKiCXfjgUoAiSZKhiBhDw4P4r8pfJhdQ6B4c7CmTzGwihhqyW4EhLoFDansFxHM4RnqoaireQLVWebEbtUS5",
  "key33": "39NLyhqHS7KYZDuVg7kUHVa2REXAwWaqVubjiwQJjTA45bVVmzFd1e6MqfHKZwLQPXRg1RqoExVF9C7o7smvzHzX",
  "key34": "4i8zKrJaoRKGQk6YnsuvPwKtw3LRScW5APEiNCcKkRQDk3AfuZmB2AykGxKGH76VXVXRF3eSq9qiUPdKzsyPRk6X",
  "key35": "5iRETmVP2176Q1tQX9WY1N41EaXjYkiEFaSUwbwSQq6jAExRz5yP5iYSFSUxfGjsTd2SQudsAdT1ojy9hce7VdCS",
  "key36": "4vxteMMAtwA3ag4YZKFk9kv2V9ubzXN82nYzC5q5WDsMi41CBQqnEB5aBeY6EEg43ggh96w1EgRmnahTe86JU478",
  "key37": "354cAJGqxngBT5p5ZFjaVzkRMGU3p6To4YbNDkrMhLWP42qtBMCTwqmM7uVh4FkbpKJYbxBv5CSz5npnbkteuzEd",
  "key38": "3LpKE97fqeLJBi64ANyuADRBQxXJAcC6Lxue1ydx3ENitE4SKKYR7N8HYVCw7UqSUyq9meUVAUxHoFQG6CeQ84gV",
  "key39": "5oGbw4ciPW82soFqYMtDu72RvsawsoLLAhsKwyLpWJTALxUEWMKLj5QKCCLzsKYmZ8SHrP534F3oJ9yvDayAasZa",
  "key40": "4f2eGB5WzRWmBAFqahk5y84MGzxsHqRwCD6G7zXDoY65AorWGt9TXrjcfigx9Z9eRpQmqGtXXDfbPD9pUJDPfJW8",
  "key41": "45VXv65NxYHwekoacF4mFnicTzT5z4RusUVu2w6zaWEfDJFDTCVJikTFTWVF4W5uYmboBmVnwdUJerMyVfyLqzk9",
  "key42": "4eSmzNJJqM4m5DS8XUsi2sU1QAii8ujAso6xqfaFRDakBxAcGxynV4NgPmuncBzeX2kPWgYFdM21Fq9qUUgg1WV4",
  "key43": "5AoPrjPRvykyvzLUrffAphLUxoc2GkmNtpmwR4TxmR1hdeCY2bCSbiY6i8mMp5daaVQvSXZwHTiX96NX3gzCmLaG",
  "key44": "4k9FrcoGasNThWtwzAUEZeWgXVaAuNu2xqDKipqVXBEYyyvuzvKP1LKi2a9XXDegbQx8A8L3e8C2KWEA8q8KZDzJ",
  "key45": "GXRDMYvP3foBSWQwsKDmoobbsT8Q6VSV2gJmTt5QnwL8BZinRPS7mm7zx1w1Th85NkiCGDc7wTib9gHFyMQ8uAu",
  "key46": "2hTHr99omkizXs1KAkTBXZ41on8xHsnvr3n5L8Szc6n23p6VHA49QrmfXEuakvaSAndaBmoeKe9KRhSjp3NEMPDS",
  "key47": "5jPS1b5Nmkj7nH1sdt6avqSSXixSemBEmMRvv1bBnaGCkrEDSkDkoBVv4KnonP8ZxXUMNtP4UWgnA6UWCyM7Pz6V"
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
