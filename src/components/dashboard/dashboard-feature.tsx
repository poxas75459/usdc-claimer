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
    "WqaTMQT5rz98q6EW2R4NANJ66k6PT1HgWt2f4Lv7civ7jgk7FtRBXJb67BzqGEc4HLFyEhDfmPCjFhWEBoeo9cv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6Vx3ZWMZJx3p7WgBHJ9tDbdy9zHoN9kvrGhhGmHqd9KAtXx6DMkEHA8KLZfRqHJYcaUo69EPZ4CR6kddiBmg1J",
  "key1": "4ZpfSeecZYjgyDPdchkhJc1iyMeVeRe65K9HRxDpLErYyuHBH7EcUyzyT3ufrN79enJ8QocADPLdBgi9M9E7b81E",
  "key2": "59oj4xmNp88iZ9gQ6Echi5kujZycmobYNAHw1actdbV44yJriuwPVpQ9zxTxkoK5zbwstQq57UnZYofFKqNynwAY",
  "key3": "54EEBUED8wsjekfTKHhucDExxGns3GGswqKd8BzzvXmoZ8D7jxRYXgd2swAJME3kmg3HuC1qckwokbQiuNgzqMz1",
  "key4": "ahbpxuCcoFJdj46JdnAa95A2NToadPnPNfNGwcanKm4sbHq5MN33jmNwZudnENb55Mq8DeUTUwiNdVyxxwPj2xg",
  "key5": "bJGEBLJeeazVbJ1KGxs8zMtJJvT579bSfx2R9VFb1D9yJnjyicyxkXGfPTGhoiXwQevpZDuVMUBqfV9krr9YiXG",
  "key6": "ukgmLsxZjy65pQhEDcqCfoEbr3NmDBKEsHhbkyX3iXwpDKxd6yNxcjR4qBgoQPPGWdhvVNb3Szg6a1jjGyTYGfD",
  "key7": "3YjoLujoPsBuEHgaFGLC3acqxa2fAh8gh2PrWFVmHJRFgDukkPqh6uuWLCFyBjJ8BLbMct9DBTEEVEEQASwGvAh9",
  "key8": "4NwoaDB9NW3xDpv2wVHwvsTL4LAvu3nhVhXf7XHsaDZZAJkcmidZpLgKvCFoF71UhtiTgqa3eNNsixp2nZwJYerK",
  "key9": "3p15QHTiSbWUm9ooQnwgesyZMW4HcFfZGgvm9HA3eZ2voy5NGGYk4wW6UB3cGbX6JY5AF6bmhyfUv4isEqh9yhCf",
  "key10": "oDYadyKyy3s3JXspCXbWcrH89zpnaA1kaAnhjHyUDNPGPAMYwHq98DNmpKFLbgB1DkFWzja4Ub6NqFX6XaNWduV",
  "key11": "5AWZ9KNhMJgWv2esrm59JtwhYL85dYBijw81nWfVD3anYDVAgAmMu7caLmrCPtx15GsSvsrh8dEfHC9rpgVB3D2T",
  "key12": "58gr24dbirtQG6tTj7dRFvJKLPccmizbDrsLi519enks5DP4QgYBdVCpfiKkYYJJFTxuE5TErhZJ5XzEuPxfmCyd",
  "key13": "4HhZq2YJjmYW8bH2giwXjT9yEVK26wDaAhFzuhK463T8Viw85DdguNdVEEmFmatjooXoucKdhAEnA3W5GenCSm57",
  "key14": "3ehCAKCzDDipNtQ2oTWLGa6s2eDeGRBGYard3DCweQS78Pa5Hg4WoijVK4FRX5gkPVLRh5wmL46xFtWnnQTXJ4uo",
  "key15": "3w6amy7qfqQmjth5XkDWvWHH2Hzzuhu9Gwb5kdiAxWvceehvbEKQ9k5uZbVg81HpkFq5UuUGpFYGuSUkQbdDhMaB",
  "key16": "2NAwfpLm4jSz5ywrWLKsNkxTkv2wuyxx481qmDE5eUfcxcbsoPc82D9CKzVj51DmJsWinf6Sb7jSUyzSrzSStDvh",
  "key17": "S7WxKMgVTTbaKnbuR3A5GHVRLNzebvbF4BUJCV5A25hBaRzDCr5ayQMXJTb3kZW2Y3UdQmoNEDLoLCd2HCrmx65",
  "key18": "3qX6j29jP1WqseUAjKqAiAXcjnEBuAaZgYytFPZVYLpaTQMWgHhk87nJS1offFpviGqJmQWzbKYa9Vviwqi37jt3",
  "key19": "443FwRAsSRNvsjeJuZ2ePqsmJbevFsyMJ8FMEusxoNEHvdUqH5XRqoZrbTdk3Y9YRpHQMPAtXFLyBpwTiuerdNjG",
  "key20": "5itkTUhDt9EkkwHxvrsjRqkJZvmyUaUFRJFm8sCyCmJ6dzW9ttzCd7rHjTxh7f1x5JPpLZw3tMUq6dfpsVZRYCwT",
  "key21": "5ZwVxgQErds3vwA4CavyCShxdVE3igWpTwFRJParZm37ZNp4ciyh1wGqGrNULjg6mPBmF7WbVbWhDUAb4oNxKvUH",
  "key22": "4scvqqJdVD9K8LN5kuv6TMz46bvpVygceqqgcxvGXzMAJFbtY1B6NercGSMUVAbMS9fdaKJF9DfLUT3EFGoKLQWk",
  "key23": "3mkfdpwqzBf1tm5DS5YwKvbZ5VCVmg8T7wHAJXNrHUJ39yVgYaKtidmsCMLYGvYTAy3sWtMyiuNu1Mq1ci41oK4J",
  "key24": "4zeVfatJSCRFFFQ1U6LRKmBa5zSy656RwAFm3KWUqqDbFbQ65iM6DjHRwscv2mQG2SJ5n3rE6Tjt3ViYTmMb57iH",
  "key25": "XqNn3EZhKjnRGsdWAB1SksZHoeTnb2mv21ccQz3xPLaFV9NteA9WFiEMAdDWhpEJo3N4MGFwhPdVYMitYavxS35",
  "key26": "MZopvVfp6mQfgeqWBBL6QAn2a7xDoACowaAkti7Se7Wa3ui9niLiBpkJJSWvgPUGtTMcYC25UNYvKtvUQQajwTZ",
  "key27": "fPZ33a3F1rCJrjz8QCux12kbMNRkzZiVRwGa4XMZALeueqP5nekymupwscvKxdSD825eXTPVhBMKPcf8xGaXXGf",
  "key28": "hYnRChysA1Y2jMDB1oeBXWY7DtutPAtxxYmCBy7seeDyKjJbR7DCWCWypSxnkTMbuhhSZEphXCpPb4AuLvCsCzV",
  "key29": "3oEaUNd33qtoQHSPFAH3y9UBXvbqMuheBgoGFyYe5hzCdtfqU3KFdD6cpojrQHYPQ9PA6FvGWqgwjcTNY2YNwBrc",
  "key30": "38BZZBakxcKCCYsbD7CRgxMo4npDi8DJ6Rm2QY6QmhSoyyUFvLQ8Xbw8SBsDdLFcS1DFzzmvJ5fpzZ8GHNTcf9X3",
  "key31": "2phsiTGiLnsP6euov8cYfR3qw9QU63ZoFPfMtHintE3AL5bQ4UnYWd9LsapGmACHWm24psbYV9AHaTMxzwT2h1VK",
  "key32": "51GCtG5ikYMvmWKhfuvSsoe42b7dU9rvyucDm6aDpweSWQYdfTzHGW6NNd2snAQLNzAdocRdPLFGe6rPLMorYyQz",
  "key33": "41KEeETn9UkSrD2CjEi7aJ1LkgJaVmFSRbarxtA14ZVpRCq3XUjugiRSE1gk8f56PF1cjSvjgyJ4g6YaFMmzro77",
  "key34": "y4gCpN2y9VcYrhkb12ePi9iv4FDiNWFXQG2jza9SbBSUZP5iQA2qCkEg4RG7hD9rLYC8t51ndFRf31a1pw2AZJG",
  "key35": "39WtRbS52YQEJhF85BvZdSouQJqsTShpZBmJy1WZis9xCmWkjxzdcy7fFHhfZtyKkjDqJuwtinU3LptSMKcsk86e",
  "key36": "48LzTekmP9kmwEwbv3pJVtBZr8mAXEJ9HrC2buUCwic65TcJcvdLj2TvdeS24AsNM2hDYi5K3CuV65keuaADUvDz",
  "key37": "3KGodMFk1RjfR7i3R38RGCm47uwize7ednr7u7oqiMeGBUwaLE4jDAhF7m4cVUtDA1nTWHnWnUpZtmQMDpef4QmB",
  "key38": "4ZdufTWcHwfKTk7JG6koYsA4yzeDGZavPaae3G4F3yVDFUDNGYFa2t5nMBU18eEF2qbqvR8Yu19WvnVxsYzYH9W",
  "key39": "YFkS6JdBrXCo7QsF1vAz3yLoPL75nD2ApA1vQ1HJutLafQ3mR1r7MmrZ8LghhwU9X1bP3MTMdJNzAKkkrAgcw4a",
  "key40": "h63tjsLnn1znbbNVn8snWTdAjA8EPhHP8sfBKeTBuGsqBBtnf1wNSZ7YJL7WUrcntXPFSYYDzNaSCoVpMNKbR7A",
  "key41": "2uzN1PkGXCqBd6BLawQXhdPmeS87j1hJExPs6rXYPEAWd9aVDuZTSt9zEbxGMmciaNZmXYiYL1E1szDsJ1oHKwM7",
  "key42": "4mehVt6ByPKNDZjTMP7yP1mFdM47dcaAP1eLhxGnhzgi13zQdMuzDjHrSkmM4qFVvMkWm8E5sEDk65HTqnJPghZH",
  "key43": "5zNpCQzix3btPj4F6D6H6gVzRhQwLLesGTbNK3yyHfdbmPSNjAjLDGLFBtFbv7umbstGgGqvRqFJCZQqFj3Bpw52",
  "key44": "5U8r5X7PfUgK2GiswuRGzf8ZmKJtHoUnRHa8qgZk7FeRNf93r19EZvHuJ8kyYe4et3iBqdgbybQHA1QaDUzVcgyD",
  "key45": "5CoU3BBPM9izGKwnjUUCpEa8EMggpD1HPhrWAT7hMpy8mpvCG74dneZxewDjShS4tUAdVxAgGfpB6N26NwMxqVFV",
  "key46": "5hSYt1UhMQGA66jNCK44bFPzHkbSNPynMZ5Z2B1xvJQX3eNKz2mLnLNZ4eUGyvhB4HWWpCsqWqf5dqAhH4tHUPT",
  "key47": "VrSdggUieZ53MudJTHDAZCMuDVT3B2CPy38YG9zUpe72z7F8NfX6LWKtBmQajDTV82chbA1KYZLR3wFFaTbAao3"
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
