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
    "23p2Sd8o2QSkgHGvrqAbfCF117hiWA8fCG8FrbefS3ae6TbiBDwS6HaxFdLnTh2TuSjJ7PiHGKpHVbbDEZRa6TVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nf5EDkqZnK8qpFUJkm3g6hMeSQLV4iizNZ7AymzZuRacCe54yoN5Wdu19PLswW3DGLNrvev7BHSf6rED7n6KgLu",
  "key1": "2qTwrUJ7K37iEBmeob4VW7F4jL6uTPv41rkpZovX8ak9PqbhnmnGvLJNqQP7RbHYKnMCiRKu6xNJQ3tJf6Rs89vn",
  "key2": "5SEGEMMiiEnU6H8ifpeAc9bgX32wgkNnoyfQZDfTQ3c8zd9LKvUH6w2MSmCmUhvm1eAvnZjkB3NK3ZQRNbyUujYu",
  "key3": "2wfj2BRnu2Ruby5udWK1LvcxYUBuDvPdbu1hYetWJcNUQuC83Qx2aW1hsWgpWBjs5kJbHSDWgZ9kZRwtxYuBF9LW",
  "key4": "2SbW6ZBknjWGkUznopaBvDLZAdZMwSWcu6q364x2yzxobFH33xBkhEgyRbb6G3CDpjGd2QvWT5ztGujhENN47Avj",
  "key5": "32sK4u1m4BSSzMFeodA7uzvK87pbN5Gx6aRqkLqmBefWVgVAiPaAaRQcNiLoUwZfCxCdQjpNBisVZdUGR6ERtFkz",
  "key6": "2ErXXJmV7s7JijQJLeoZHYk7sYDYKrzfgf3pv33g5wq2ywL8vZmDpCUsfeTAz7WTqLRGgLg2krkohXW3nWRNrPqU",
  "key7": "53g5kxj14uY1Qi4YYbkTPdSHHEBcpWEyVQ2rdzGzKrpP9m2MoEE5d6v1hq1DmUPVWX6hXRq7A5635GbtD4pC15JQ",
  "key8": "5sSVPknm1H79Y5RDaQpfGtEEfHraiDCXUcFhAVh2iLNkKTbiDB4A6UEc9jRVCyrrzPsGYx49NnayopMDZqbVTW83",
  "key9": "2emDTVTjc2aBFrvzVK6cbAK45AkqxX5trDR7KQrW9FtkGs2XPcCULHBZXJ22RCuo6xMMCP8Xyg12dHDU2xoVL3EP",
  "key10": "5i25na9Y7B2sQkHJ23JRPUqL25JRrMtKCBUQu71TZCZY7NeqhCvdzC9QpskTUYX9GdH47bBfnQVPsB4EiNK9rGV7",
  "key11": "5gy1ogZQWLfqB4nKNm1UxyyRa1Fu8Nzi4cFCtQo3WRpATQg7qUwdrxq6myDithxWopBVPg1ktJtqn9BSBbHPw4Zm",
  "key12": "Lnp7bbQHjorhVTETDyd6PJT99JRGr9UoZ8Va7vVJs3oecxAsFQeTeE7WDeKbyK5CMZUgZVSrZMWu3UhQwpJo2TW",
  "key13": "2H67Lk5pPxWEZvSNUWHHoMzmacW5Qc7zafnKcC3VAFLaRT3qMyu2GF4hxgzs83D97qtQbdEbk5N9fdQTsVKtKnHL",
  "key14": "2nxu1WKtNh5wXgffww4FwBBZ5WmzXft4nG2MjkwUGCtywCvKzPmmfSkZVgJZr3ESkU7jbKTbHBrSnGCUDvBtisDy",
  "key15": "3eZLwT8AENPx8G6KGE5ypQXP693wCxHcAmH7rGSkPRQ6AsSGXiT79nBt2kUfccbNGzBuGt2bd1YSLy8FANc38nSJ",
  "key16": "5pwshuj4QEKwPH9bfRKnp417Li4NhLeRf77h2yY2DD6atysXUZJWfK8JQLS2rZKL97pw3tWR4e4Fznqrr4qpX6mk",
  "key17": "2Uor3PPTbzgK2ojoQL4RYWEGA7N9jy1fTtu34SobzTJGSSdeFSN3MxYpRCHWFDq8vpVfV6rKxi24ckWuewgaGB4m",
  "key18": "5VmRfzrBdzohRabEaZZrTkkLendPWdpUJuCjbQbYRQaFHdXnPGmF5VWa1iS7BxqdLkogsYQnnLpbq5csKum7t396",
  "key19": "2BTDtmZrF9r7gznUYmAYEPuGBJ57MQM1cghK7dhMr4uGRaS4s6sDj9EcEKCVxmRNTzw481ubqSzMJYzaASADWsVv",
  "key20": "4BHxcWgz9y2BixW8AK7xVFrUY6SiJpezXJA4dVx9P2eDGHRyMPtVwdFwdA4AzeEW2fFfqNgmsNTfp4vjc5Hp9Hfv",
  "key21": "2E2Uyst9Cnn8je9PiVuhL7pgZo32U4G27Aadwe4cC11dH4eD786J8zkG5tLexJM3nVFToKnLwPe5VC7bvnkKoYzV",
  "key22": "56VBFL9X58TJbEBAmtBHtM3sEFh4VbsvqVBCWfB6X96aXE3kiWsbekGC7YQ1fQNkAeJwMTZL1eTvyrFGjQzpFn1G",
  "key23": "v6Eh5Wonyu4m3nUEwyJ8Q8xWmHwEwnAYuAJJHu7qy2zP7xoZ92bnpQ7FoAiymZXBiBt7cbM74dta4VVpbUBiidD",
  "key24": "2aCZg7QbY4v2bzx24kwry34UmXvNZ8gAnQNZi4fYvA3E4Q9AJueYWnLz4crgSZFTudQMnCRtPKopuPtmiNZojCxE",
  "key25": "5UKCeFPsrsgrfu1sbda6FhZ5GUd89QsionC4dgUZphYx77GUUTDhzdGoJcZ5SQDiJ4nNvjG1jSTafmC9SjSqT3Pw",
  "key26": "5AT5daNZAY63KzQdNfa89Y2o3BRikdJnQDpuP9sjxSwzARYZ64Fa6G3AuYoTvYZDEF5TGHD3YDEoX9t7HKwrmSBx",
  "key27": "4dVqEBH4dfVe8o1joYPMPVfbkzwfxLPNVTt76EiXVjtpi6aLkSRPiFNtukpr5cVXSVFciFMA77pT5ineH1APBRuu",
  "key28": "5vojuxxRHZbezH1xqX3G5naqUQKyFhnsjZpvqF9pBg7jJUhq6nCGmNb3UphxoKMhMETn1G2pwJnUQQjFbaKofAWN",
  "key29": "3Sc9xiPk7Wimg1wo1NVF5rh8pYWWKajuk9YJGzBMqfw1HJepJQvkWto8dYaCPbzz2iEGA2mmhytQLa3iEZzLxC6Z",
  "key30": "3qG9bP2b6ZfqDhVVCSoMRCWkb1Lh9gNFpbXY2BoEujAcFpfXhUPNetnrjCwijctLmKr268Q9kcaj3HLKUpHQzdq3",
  "key31": "3D4JYNfF8DCZty1uaEdFZsSQCDyrmChVHdYLCZPhKb2G3osDzQhuLHKHGGsuNc9xoKGgD7m4BesnjqpRFdsYHeJA",
  "key32": "XbDYTuQa3PWKWiZn2Wk31bbV734a1cwXP3zNmRf29MoVCSQCiVaqYdPzkmUVG7D9CmkiuGcuL1u2VYxzmkcx7Dn",
  "key33": "2q3jX4JwcFPp85hDeikvJckzo8CY6iaPaHcUAnTZ39TqhGe2ktmfRWx1jgQEzf2JiNdU2rZ1Yfi7C4mqSxwqQVis",
  "key34": "4JcCwniCiXmXzZrcWuk3XHhLoCwEG97qaTyDcmwML26TUJRVpBEeo5W9xfyhZjVVqCpM4WZC3ayDQadhko1qwamk",
  "key35": "647yFkK1oomtcqHDpHbuA2CGkSDaPWScNLr1KWFPFiFkyeayDbxMqXvaDqkahRQb8nAyfcaFk9S8W9Jp1V4ABXRn",
  "key36": "31EBeQAXcVmfbYrhpEMiDq9V3Ja5FGyAULfRyDtwaCPdDRjhCxvKZWWJV5qAiqwUWxNYVTtyZDycu7CAUaXjujYt",
  "key37": "tztBtrCK6DLJKn2Y3vGzDf8Qa2jE6GqVpMF8GzZmyidBQV6mWNXCr1YBJnB4YxTzf8u48ZrQKWdu9gV25qeCLUE",
  "key38": "3bU6ARgBC4LUsA7jsXcqyNgLLQ5vp4oZdASu3mrLP9AUZBVbL29Jm4TSLCfdgdCAsX66Du39vVHNCgrbU7YBHkBi",
  "key39": "5vtdHi7YaY2ckABEMLKHQJWc23Judy5u9bigAxdPCjRyesBBqpEvh3FWUUDZyT6AoMRL1ZqH6LY2HX2J8dPQfmTZ",
  "key40": "5eC8j33kTaNMtMAGdnNguz3D5YJhQPhzo3aGYzqwxN3Qqji6MyAqHS9oHnVgzH6XY6d7wv4BU8XXu8VX87Ke8Fdp",
  "key41": "4e8Y3e21ZY6Urur1oUKg9yQ2iTq1kuXB8Qu6LkwQKHLdu6siCNF2Ad1cTmowFMTtkc2k7FHdMRjxbNtETqCZJQvs",
  "key42": "A1HaheYEuXCZRZiGBgw4Tjm6UF1tApJAwnkHHg7n43n7btQwgoJojMBzpHaHA7TdzNTX8cUQ8DQebF6HAucSyUV",
  "key43": "3Cn1AJ1yK9jyNjKSn9snnnhGYX7L7VG9WLsqB7LJs3Ks5iY3F1zZRCjK6YyTfZoHrS1P1g8DZYQH2XKNuMqY1Eqr",
  "key44": "34ZdMrTHxRWUBvRNP5rJ5pSzm98Wi9cNEJQDNUpopL6M1VBtevSUoxLEUTnvJawEc1uehb93wPSG7kRBEimAgttA",
  "key45": "3Ef7iNGNQsPDZXtwQCH5Vo84S1LET9Ya9sNds8VDJMaMuSNQkKmrC7pWhJ5fJ8SLhtogJevbdBarAxSwRLE3qbA3",
  "key46": "4RuuvU1jgQngtqaYRzhxRNhGM9tTfcNJU9y9TXTCH1CDfhobz5ZxGwEfgeiLCPwr32HVotzHwYyHCVG6n1VyDiDy",
  "key47": "63du9PQpPJ7MLKAEtQoyy3yDwFncW8bQ51yjmAUh1Ga29ZPmC3Ha2h76uukXNeoE9WGVd7r3XeB5NoNFNRnKNZgF",
  "key48": "2xhXpe4wVJeo8Ev8FXAKN225ktq88Xm7tciPV6smkYgUVMvTW1yS6LSjaRQxJDuYaUJxUwJoBt7ewfkKcoAcFjvZ"
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
