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
    "4gNKda98xSGSpqWGcrzNeQdjNCVR4fNSFB3NspAvThhCzcDCD8Z33GjSP5NyiPiLxN42au5c1nzdDQo1ZMXViRD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqfS12wjBeBVWEBwteqsBTNRWd6Zq2h5dQEMPSvhQpmoTG3hbQ7GuyqPCCaUe8z4JGfZVH59opHxuFimR4nR5fC",
  "key1": "44ujikpWMygVZyaZJrb1ZRUAsMtxhjVCBmQMag77JwYuWpDtuesmYfh5US8xsBb3tCa5roNG2RyTxEHwQbG6P3Tc",
  "key2": "42y5Zs1hiEj2tF23cWE7UPtUyaDxAcXkKv1YBFZcfVqhk6bTqgrzdWzh9B9hKAouN29fWZQ8JY1pXSwrqsvh3Zjz",
  "key3": "nMES9ceEz4yaYyqMrs4amSicBmot3VZPgei3zXBf7zqRXk4S2irMZXYKDu3R2RM6NcSurot1P3NUM1dp8w54pk2",
  "key4": "4WBBfQUYmgQkHrPCJEgSHW9GAUrMvqbta79TvHVh284qdJvGhmQVAKCzn8NfCLbAegbzDzM9UHkkX4xV8oYKakc3",
  "key5": "5ZawJyZBQ8oHkWCxRANZj5DPnJfdEEcrPjB3mDQwdnnZExxMJ1EhoNmfghnwo96yD7m4926WVy2LWEJ4SJPcx4rJ",
  "key6": "24YBfvqkCAYdmoiCMZaorzg5Lh5tohKg1XdVoeSURQ6zzwqdAV9uiciqc6urZ84pKuDxyrZzLo5GZ5jYtYvbnXa8",
  "key7": "sh3q3nvB1ZwyqpmTNApt6HfHhCXu7HaxfSVPU5XZNn6KTtG99mA3ukkCiw8SmCWPaTX7AeE55gDojtwg1ns2M37",
  "key8": "2NMDPo6qfVJgJwwJSmMn6TkugJsEy9HfnmEvJzz3UGB9xKjDcLptQkXrqxuKbTgDv3XpnLEvb3BUBh1X1pPsGkoH",
  "key9": "4ZrU4PjrcCYdUVPhUa8oE1NSiA6BpaKttVpFKMa86nMinjXw7o6pPRHjdik3aw9w6NinjS9BBLNDJ2gCZyhNS3DG",
  "key10": "UdjWZqFxPJnQCZ36eZ2CL6WLcbZT8gTfZm7SJo3bN98sqcCF8Htnjr1yuPuBfx4m56Ap9ogYaMpnytmbPEeKGCk",
  "key11": "2dge34exsngdAehhN91Mm3Za8T3qyePDfnFxwkciqwXXX5hxbyVo4ZR9aksEuyWp49VZ4ErsZuVe2r1RxdcF5zEn",
  "key12": "3MzF8kvTJYMXY5G9C151TqjT1NNNcvewxq69wKK2EC9P71p1ei8PK1Dz6icFuBnEBYQf5CbGS66dsr7QVXTmMLRJ",
  "key13": "3U3LWu9syf9dzFZcyRXZ42P2JA12iiNa7ZKWtiJiMc4itSHz6GqcnPFjbYxgzY8EckAgTF8UMyn98r7uE64buxfT",
  "key14": "2sybwbaZVAvZZtmaQdM9G97cDURsHsiEhJoi8fYGwab3593MGYEMJQEWQKEZrABNS6heRFoAYgx1mnoBQyKHExSA",
  "key15": "2tZkHNF95RwMCrmyP6bdrrKKtx6M4tg7SreUQAHGgTEiMpktZDvorEdukPBE2m3dt9RDMV9HzsMtV9rN6DaVfXHG",
  "key16": "51ZGMMwkuD547oktw256pgAX1byp1k5uAs3qLh5h7yUzuSARv1cbqspJMiicc73uimtWFKJygmrekVjGKddFb5eh",
  "key17": "3spqKsEVwhJcFk3hvTsj7pFaSL66e12wWoWxedfNkNdCmwNPMML76cn4taiBZv8aMi76HDeyReYewhwR7jWmxVUX",
  "key18": "H9BhjY3kXuxC3d4NGLafCcUQQqKMiDzSe5EajXBcU59tBbNq4vZHR8EmxXSaeTgWpVsukuCBZMJg17e3Cdf7Fc6",
  "key19": "Qysr1eEiwoxM2Q9Azw6H2hDgHGWVDZmRZtWPi2XDyKxJFQNouE7MtQ49pntpp5QULu7C2NZn2MXwvAgr1UjoC98",
  "key20": "3edi4Qsdu53xLU66qW3Zi5ghNnmW6AkcfwHdMw7Uh75Mcun7hSPWzSLksrxpepRNRTmcuRJkZ4jxtyityFodW22Z",
  "key21": "3qFG3q867xD6KPXCSExWQUd4LV4nW3mvCv9QLkwgVBwe21Fmj89sFLZNAhXvQRrujquRwAdz2yfCaAs8pXkgJ6rE",
  "key22": "4CjgA32fw6AGFNxB1iVVcC4ZcGgjTQJ5oXDpVsJphQW19CktSVb5Npuv7mmfuVvusskc9xkTwCayaahUqwkiqvZi",
  "key23": "2SbApZ4YqrPSjqMXHjkbhNHyRahE99oBkLmie7rt6CVsYSdWCsJJyWpry2SdV7asMJnHXY6rfcU7bauzAibXBx3Z",
  "key24": "3toGQCMvHfnSZTKaFQF7UUrb3H6JPEpMX2S8kfGZ36x5Zdnoc3HxP5KYeqe3GEXWMdp4dne9Eu72vwh5JFfo29pZ",
  "key25": "4MSC4rC9xG41b4rb5vRQoHpjY8W3ZUh9nZWHKKGnSH8k7eE1D9uMLeBNMPWJc4yUjBw9eWcqrXb9WACKnSUHw7Lt",
  "key26": "2CSC77zPzJZbSWhVkBCG2pGgVWATXbgtSYtrHoqFSPGu3kFaScyjyznpSTE4kQ7pDgvkdJm89nPy2s6hDYuhwk5h",
  "key27": "2Z2LfzWASGbHmVAKnKBzyaNrrW5jHQ9jaWjWSxGsnLQRmHdrD5sF3ZuTXyXcvuUA5rHfRLXqx9Ktj8z3tcn2ktab",
  "key28": "ifAEtSZCYRyyhVjq4fgAKnVrn3NMs3H476oCoVrSGSK31XB53aAqHgoQzY2QWBBQrddfxCGUvtZgcJnzcTrWqfe",
  "key29": "2sPpdG3a6Pe3RYuT4Mmr8tP3WqEoMCVFwN14JpytCxKf7LV9BY1eHbmCwvESw6msE7dtzBzfR5CsXPydhc6XiXki",
  "key30": "2ieEZqcggxfzTRpo7pYJkdu2qK5o1Y1zpVNQ4zS8vpusTyT1HMB4vhmmviVfnkapa1oKnCfcuqnN4VGBWTmmxmW9",
  "key31": "2o754Su3A1WmTMpch8Q9xnnPpkHXTcuzaZauXdpwxVJRkQkpixego7qMUszVNmR7wG3vVqBmvfq8kjzTJ5Wstzi7",
  "key32": "zARPJNLitTqvAQ1JaHgQhZbM1CMeSvLqp7KqJvnaJajy3B8J1EL7g8F28sa5VsKtRcx4nR2aHd82dyCrBtZy3hC",
  "key33": "44J9kHtRrk2hoa4UcPnMgPn1aDqFrmdgo9xwKj5dZUS8mh3A2xV7BmThtSvzT9n2UNtTVB7amvppTr774Ze3dKN6",
  "key34": "53XpQVYgmAvnzSyKKp5ryqHACmZQ8C9FcpW4oSKQ8WtGFYKXPB5x26azwVz8YhtoGQs3VNzEpsmLp7hpSvMarChi",
  "key35": "2ft2yLPzPiYyiUdYsCaocXCrKkVDYfRKhB61dShpx7wnFiovcwqCeVKMZDnb8q7V8BUFBM4YCwWnQ5VrCUNsY4Q2",
  "key36": "5cZerrNEiNast9eXhWLthwHn2aMkjkff96sgQTZw2nVVtiRgQAdwAbBYEwfYmNoq6zU3nWpBmurghpWWDH924KTK",
  "key37": "5xMxU8tbR4W7PWcKwbTzzrECzQugrncU3nxwkk8wWSwHf1TVqe4fWS64TjqLfrXG2cdYqY535YYYZDqqKH1UaDbG",
  "key38": "5SgNVVoybovrkrrYU5iB8aixXTRZUc6YdFjmMd9SpyFUsU5LQ2iMcwN2W53nPK4Qs2SuJHFz6awbEsRzyBG1F4nV",
  "key39": "5L54kWHTiLnFi8gdfBskr27XeGQT5E4eDTtPkEScHWNwGY35uvsuorQ1yWtwBDkpwtr8uKUmfoUnbWHGao7WG7uB",
  "key40": "5SYTytvuw6F2z2SztiTHhYaMvtdUqV7qmRR94Bd2cgB7yuTBS4yAq18rHQzjmMQW8g8jvkD8TNVbZE7iLxvLn1NK",
  "key41": "4mL57rKwFtWEwKkd1z1P23vw93HiYMpTrQdGGRqKHXWLBCd9pfdY2zfa39Jz3HfkQb9LKRCZwhaxXC56YVXaNq7j",
  "key42": "oCVkUWxPxWgDc8MGyKAHbY7ZeuQa2cahSwtYoQrrfbAqSEBxg6ivLwYEQHeLHv2qJbT9Qct4id3u4T7xRzBTmrB",
  "key43": "44h25c67RwiDsQXnvB9DtqFCbqb8akqiDVyY88qne4bvZdJktWkNkPBLxjgJpfEnQMYfhqKDm1qqorn7riZvSYmm",
  "key44": "63VDUPuQ9pcLs2fnEYsfw3rsQUdW3t4ALeTSSPiuidqX3tkZJSKv7wRc1xYaeW8xiHZM546ucDzefJM8DUPx519r",
  "key45": "5eBBJs8pVtietpnKcwNvHEEmTCFUGReE6G4KhR7ZCoR1XGT5AxMVqMvRpbWpezADaaDj5UYwWC9pTV5Gvy95w3WS",
  "key46": "3wgDpaYzFBKNS7MU1rq5DYUn1VupDPDoyMHV7a3bX1bSjaCFYFCT1NSG2uHzqtLN2myBCi9vb1fmj9bSa1F313kZ"
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
