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
    "2JBCvyStUF2Wo2sGbMWjYoZ7De9L465SQJsayTC7f73rtQAaC3jjngnHaKfJz2Pgxfg5zY2fWHCYXxgHsNi7EwLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KzoaZCLnrm8D3uNmLx2UZZBMxWGDwPMz9QWvxnrfkxNXFS3q5i99u7JKxLm8c9U2wUoTjzRssetu1Jkhiufyp2G",
  "key1": "22AFrRTtF4kQ5NCtg8P4Xd5NetraaXDmViGXwqq4qRZEoAdPDiEWJgH86JQaDaRUDt65ATmjH21afCgizwJYxBr6",
  "key2": "sR3gnoSZFJ2XKixRc2nsAEyZsLx6oheZBv15MQiRc2exowfC5tZZKck92JBZi2Cb9M2V3jEwDF2LMgkoPSsRZJS",
  "key3": "3awdUcoEoMsJB3eabFk62MQivjZ5iWKVtQHsg8hhSfCXinHzW6rkNzhwcmH8mK4yj1nTjK2jou7ug1XJNBT2U5eP",
  "key4": "51FwNkyje6FjEDVBfyJiRGmmq6G5q9KRYQP2PoynpHuAd26ZfhkfiaoEoC6yXwLzk7EoxUVMGtBTCg1XDqFZa13H",
  "key5": "5AJwTu9ZBwnJd3xDJpzbm1kMsEcoA8mBN2tckec11rpRwkvf3YJi5E5u22U8PowJa6Va2F3oGuQ2sjyA2UTnxAPR",
  "key6": "7ASZzbKnMgDvsYs94BQLj7ncf6onBRuChAFMVbcb3zXLJN5w8qamEKxC2YRDVx1B4rqdgEpRkZVn8F1fFcjwS9n",
  "key7": "3rgUYeyDNxEecFx4VzWWoQaWYRTwcGAuyn7X3VE7iyC87iz61rdNYEM7UCaVTLBGnRNpJemPjEoa5Tc1DDw1rApy",
  "key8": "2E63tHp9tktpD1A55eLY9G99nvdRx9incm94rsMvugJDUVtG6bvNKPa8WLqPkapwYe2kLmpPpxcjvCWsdCWEbFvu",
  "key9": "5MhvK6mXfJdTWT1cMyJLpjhnEHPF1Y1DWZkkB9QM3ApMezbyn8vo2nc3RDcauucDyrsQEhEUvFtdMQrFDg7tM2dE",
  "key10": "2BrTnDF2CquHPURXLRpKveLy1LpQC5mzt5TM69xMQHLeD9XYYaeaNuytowm66gQzaxK3UJpzFvQ3kwGUA3tLmzHg",
  "key11": "3sunQHojXAWPnNhXbR5uTYBsZQBpveJ4Pn1XgGojbWtVcppXV5S7TAr5hhnsDVDcZjfzA6vyPdyDYJXejAy7SFUK",
  "key12": "3JgUiPBE3RL73ZNJyfRrX8gx26JfT42tW5EADsZPvymcfDNeL8haYzGZjjfULJ9Sw3oXbAbtpZmY6aAg921Kjhvf",
  "key13": "4oUQwc9CK5hn8xn8tMXN4Z689PFY2QkS6WsrjWs2NQ7fxzaVLroNJvmupdwHRhFJejwiKvH85hpPjDiBZ7C8HHMM",
  "key14": "3pzKU6TctekenKhTrqdKLFT1mXtJvgtrMAygXFhWvByGFcdJqXputRjPdq8B1Snt9LoS9wTadptdTzT8EfVXKV3C",
  "key15": "KYAxMMSG6Kcgpm6Eqp8vbwWxUY4JxQ1XDMvA3s4qxNDEMyjYtzH1XGKbWEYthEirdogQ2gUGp5wsSsicDyYbEc7",
  "key16": "3eTcPHvQ827ii69DttGW1mJGLD31ZHtNLxox6KtrmAR4VmyRku7oy2jtZa2tRNmdXZYi3DzwdV5nwebf3fg23zgw",
  "key17": "4kwWds2UkLBn72sAYmTtRZp1LRnm2VnHRVptMT4XJswGbpDkyQQHG2viDhJLhyrSA179wvModA7srxVkmSEPRQLU",
  "key18": "3oZp9DtR6DM23baH4Dvp876D7mXK4gtQcaSoA1x5Ue3pALNTaEqqeB4FzwX7bS4Hr71k2Aw5yJ8SGRKvJsBVauFh",
  "key19": "4uTsrdR4nEabbAy5wjt2A8reDkjQjkSPNfoXCGnTa2kbSrQJJxgbdCxC1sVT7P4u7QpTbmzXWmTjxUMpEVqhuNcB",
  "key20": "44fXtsLGGrpWjbGxaxrS39TZReebxj4qjwKSz79SHvVipvErZw1UhLQBbQTgepXyNFNGfWZMLbdSVRMMSqnqukFD",
  "key21": "5uPLscbBNaLrs1NNdBdq7zD9Pc2fCcfx3Kv2QF4ZEFewcVb1xRgYAUoM7GKVDMqAfMuQqbFCB4a3LXn1xBgDTG9s",
  "key22": "dj3CeNjEdzzthQbmvDWt8Ab5sWC3Wx7SH8wzmV44KforJTYVVWtL5BE5VzG9g9qdnwhcYmiUhQs8ZKrn9aeVG3z",
  "key23": "42nXkGFvrKN2UeQ1mCL5GM556KNP9xkWv5ZuRxTBozFDWPLfvTg3TLDjuBeT9kAkLBDrVUaaJQxW3CY36PahAg4X",
  "key24": "Jt81SGYc5zn6p11LkDWLE8F98a8txSc1r8Jw5PauaMWULpSuzv48p1sZ1dMdDPu9HMYDyXKVFcwuXxyJjJGvoM9",
  "key25": "hK7Z3bkcWWhzrVfCk3GXJALmmTj8SFZLeJaif4wpCuVxLXu4N9oD7KuN1wciWTF2JjMbqkDzmuMxzpHGriUUext",
  "key26": "55mxBw7Syw1QzbMkVTYykanQzMjaqfjF88cNbUXGK6DbYs1VAJfjWKXxFNJw8v43ms711vNrJYaX18hYABhCKkLA",
  "key27": "3UtuwtLfSXS3tbLLzohEYLmimRaG9oCRbbLC7wkhWEnu4mPeypijwAV1xMEPePc954jWJwTzJe4pLihzKfhdAFxi",
  "key28": "5wKoBkYfGuqREPqGjAPaGd25a2ieNwwYSZsjrmPYR59yX6nNBCwKZjgA5d4Qyz9tWGB5D36EWjGQgmGyuqgnd3sq",
  "key29": "3gjKWTEaAWVjMNyEJBNNE5bePMyFKzQ1ywBou9QP32ziKsLMNdtXvfDuU21U8dsRDKavhdDLxJuzJBiHsr5aRGvh",
  "key30": "wSsn6ms1itQj4SJ86a8MwuRE9u9WxXEzZj3p3T2ka5mdg6mSWexrsBpYJshZvzsaKcE4R8xNUKHZbH6RaDYzjKQ",
  "key31": "3Kd2ZN5KXKv1q3dJB8CpfsgNUoYoK2dBcX78tCBw1K5kJoPqZvXqpRoarUAfqGVfBUviWWqJ86mbRx8L64DpC4Tk",
  "key32": "f7LsDLvk43WoPCEZkZ8wKWjxgSThxqhm6LNsudTXTQAd7sCFj6V5U42tnYpvTYFnQd35pNmeGGvgCtG8fsCCZd6",
  "key33": "5C9mwdr6pBtfcmAJt41Jp8xzaNSXEpGTr95nTZzeW5rhSooXmGDXbJXgGMpi5oEAqiPAFRoZhKqpUCai4aKnG257",
  "key34": "51RoURh9TYfgJdLUdGYxK4vxHBhMRqjbjxPvu8DXQrxrAxHvm1UwQtc2MhghX88hU2iTz3UUGnnU6j8Ed9Y5u4ja",
  "key35": "2B5BgnmUhjbNBE2735zsCyFcyYoa2twDCWt4r4LJL7mkmuHGfDXEiSoLmURgjGmAQZF6tygAvzwKtNPWAfzb7Qfy",
  "key36": "5FfNQxxP7YhWSgWifptMLLGuCaCCb3X1LaTVQKeCNHkEB23Nf5MyJLD6GMXQSYsw2oZJrNMFRV19aEXrADEX5Q81",
  "key37": "3n9PWF8m4X4LAXSPwhfxxKh8ayRe3koZCap1JH7McFPhZ4CwFcRowsdzxDuVLAtkWtLD2TvsmyGKTJAbdRTo539L",
  "key38": "57zqMbJ1ggUvmtSRKJ9AqZo8reMcihQ3DdR6ongU5cLkmfEgMQMEBTcMGVYx6wucSEUzzLejeAKTS82FfmvyUPCn",
  "key39": "4KpZFyWCzq4bbsa3LRGBHwJTCu2ia7i1fCSYSRfNYkLLuB9vnVcFNUUsJvwTpo6MbUR7o26VLW96n64YuJEbWuFG",
  "key40": "5fcJKffasC1f1EhDwsMaEArb4FmSmE36Ppdeur82XPXu52jvLNzYTCmynR73R7uwtDVBCcsC5hMZJ27zQQGYsjvF",
  "key41": "3d5rrjPN1nzC5jgtD22B8TTvhKYF1GRR4xW7kj3GKfYQtWs4nAuzLCBNZGs5zJGoKA5Pykk5f7GbsJrycru5hMuw"
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
