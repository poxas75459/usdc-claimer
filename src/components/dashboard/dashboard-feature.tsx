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
    "4PDr268EDoz9bsmedYPqtskJzu9ECduyFpupekJcmrJ8nbRAeRDg3rSgbwFbHZUQKE7RENv1C8SaThQvaQapJhbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CdUeEMygzj22XyriLHJwxTEEYQVsdz6wLvbEQFhFgjy8SFqoeT411dfTRGKv2yWmt9mTFtCwzaiou3C4gQ63hk",
  "key1": "5gqhvBRU5NTT3jqEkEJMttLa7MwGYpEQ63WSzaZACSFWQKtmGmrykCYLCHSNUtHuhu1B8dWr4B6LTEGjXWCgaqGB",
  "key2": "2D8cUBXyi5jv1Luz6bJcL4BPkbUQuCMWxMKFdGaBD9mPQmRQQycY634vYLVbGeEASgqU3LUfVfuSzN5sx3NutpvA",
  "key3": "bUJMRTrLiaqxXEKgwtkafVWvYVXNNXcXeDPkRD5Gqrscz43BWxSbgNPVH84fjHW5cDx7yAdhH311o4eopsKu5uj",
  "key4": "3LMPB1MZcAm441iEFCzWaoCsaAia2BjXf7KkGXb8ekkDGawQNF2bu1TbjfaeHdbB5RrWvLai8kY6vD1WH3qgdiWM",
  "key5": "zB7JPqPNG7YtD5K5tXvVNYHubaQgTNMc4A9r7Ze2x5FQ7JBvzUP7GSXYMCSHuPyJVrsHKze2NssfEK46D6Rwoyh",
  "key6": "3pVPLthAw7vBdm1CVvFaDm8WHm8CZsm3A44Bba8WuB4wAP3gwDHThPvs4K6cZXGqAyQxNEKA3mCNhAt6fj94W6kS",
  "key7": "5T7Ah84EHqJwKqX8tqag7xSbxMJNp1pbcHUzDWMy6eUESTaJWAkJgLmGZvppJZaaDi2fUCRzxbJnBtxiwhZoF3bU",
  "key8": "5ATnSXA42FiQaCGXH635395vLoGZUXN645Tr7twYj3s481Dyp5ZtRLnHtsbRX9mz64xRA4iuVJ1QkfXfuicWquQV",
  "key9": "yFxFvETdG19gK3y3FitjLG1G4xFLs1UVRPpW1ibgNfm4CsWBgLSqsW3impAkmvGZbC3fHHAjZDHgYydZ97jaYRb",
  "key10": "23zmEpCHkXME59bcK5PmrXhLzYj7irjHYUrcDqSRpmzpk6ugSJsz2owGB3u8UYV84vpz4f8iDMUnmXiKKD44wLFi",
  "key11": "5YvtdjZeGf5xvPPeZpZUPXCu9ax4ccBchTDx2keiDN1PiWbc2kWUPXHL4Ctfi5yv1SZ9BEGK2UrJeDCKU3wj2gdS",
  "key12": "2pHoLW7h4CJCbAn6FagKi2tmV5scLzkLy2KRNhDnw5VjgdNa1XwxmCnEYysqhdXARRQfQMbQ1QujTz4bJPEmroKa",
  "key13": "3xWrmX39WwcqiBNS9GKj86nCBb3y2YVMfrYDbVb1fnFmz1TRbiHJcvfdxQ5vbEXmXiB5N95myVjksbiMrjm7kx6B",
  "key14": "47RoQqvmmAtfidJZMuQigB3DWGH78NZUWChu4xP3kKifN7ZU7Ywh7kc8iGpdmnzxwfgrP1ZwZ42LDB5cDrFkp89A",
  "key15": "2sXrtX82KwWwbBUQhCfiDiX8YipeizFHouU5eTsnX4mjeHmWtwQyTVgbG9KQxHAWkuWMrC9aY1TogVmRT4baBWRr",
  "key16": "2FWygmKBmBLfPiYHzDEzFEWpsGMtRFu8HX25DYJmyEtfnc8765Td2ksPx57yTajXVKAY9zorh7tXG4AW3ZBbBVoY",
  "key17": "5KyXVyTDkpvziXn7mc3U2Pc4qm3EWov7rvtCpLMdD6vYoH6WZYcxWmGREw54HNkoyR1ne8k1gV8ACwXWTwaj4RMe",
  "key18": "2V65FGHfytmSTAK44qg6deQgBn2PnHMcwWmzvt7kVQib76T4aRq6zMKzzvtALB26UMmn6A3Xs66VGJ6gYurRN5H7",
  "key19": "W9gJ22QZuoLj2wzwE6zzNMaJ6fhufMLMAttzTFqjPZzK6eyR1RMExeBqvnf6b4gfnKwZ7ieX8xyfHuPpHEfwPMV",
  "key20": "2EsBHaACCxSE5KNDdCtSJPp51JoQYsUwXxrKhuM4hcfJYoPoEsU3B1khQ4qKmWBRzcDbp24Jo4tfk7xcTm86mxdW",
  "key21": "2woDtMiDH6HiLiq42nPeXwUxTMjRDeA1PFViaGxkTebWvNXuLKpw8ectgaje5QGmgogSmf1DnnQiEWdH1dUaqJNn",
  "key22": "3TNngB3Cb3xqvmDbpTPYgB4ALHkHR9VUqUSy79nqgYu21akx7yXRuxLKHNcPw7GGx1LrPQYPzi9isbLnLWHppRkQ",
  "key23": "4xqJBUirvhGy23vrrRE5FWkM8qfdZSWe5Euijcr63uZDLfpYjseL87a4srQPAn2EHaykVCymKaQYCaYRmTFyuKS8",
  "key24": "ioSzudcnvkgThc4NduyiNwyqMvFhSzc5FRaXL7cFDfwzxDYp7gupUBfRx1nBQHrwk47oL3KAh6PPTyoSuYN795t",
  "key25": "ZadH7kxPuxYfiYs5G7pgKuhex7zKKbudFRYeNyLig1bm57AkRce6q8pciJs9uvmPH24Zi5ohvRsfBxJHKSXumMY",
  "key26": "9pVkyPkcUBnvtTQ2t5ynt7h5dTefKKaBHKEQDPWXMXC8YJv1PwtDdg8Vz6FrBix2MSkPuBUTzgwU3CVyTvi1LhE",
  "key27": "CpstnNXMJ9Gk51TmXAcBax9SyChUJspe3z2suRVUAkxbTvtqFHVYLgBorASHTMXzZQV864ePk6rhj5PCYpF6emS",
  "key28": "5iVHQENmmwzv1eo96dH8Q8Yw2djUAG2UbnupLefVLMTMG73vdNA96HHWRk6hgn1TrWvZvYVQaE4Hy6c2aDgGRZ16",
  "key29": "AgoEmq4QXFqPu7a2Rc9FQnkqtq1kiYBv5hx3KjsKukJUfHe2WvMVjBAo6Wmm45q47mmRbHT3cV3cFiHUSNLRPV6",
  "key30": "4Ho9zdxaJGuTC5MhV3ziRQSE6hd8gPTSgJH246o5jMsyQhjg1teGqhFvyA7FtcSzwCqLUKkcPPBV5ZEnUsYPAENZ",
  "key31": "3CgbrEaKqSbZ1DshusRvZB4LBgUuHG36DGjDEebSXZngfbEyqrBZG2EmUHmonDPq9ipGGUaz4JKVNXk3zA11SyPW",
  "key32": "bnP4UsNmvqG5vW5r7h1kQ9YLpXb1pkE5b6L1Zs7xfeScRXunsRoZShc1do4f1ss9LEi1z5PUkQW3QtXwgxutCXt",
  "key33": "4EhgvRWXMxzTPm84Ywrmc8H4Atndy1AGEVUxWmzbmbQUS3n4yzLpX1YP1RrqzxQ7zqrA3ndDXMEXKEtUWvwMx5nz",
  "key34": "2mPmrFqger4HWkRq7VutiaQFD3fTXyUPexUzo9Dk6zXmkazUVqrvy21xcE8TbsUse3wYUKDQsr6mPxRwp7z7b7C1",
  "key35": "2QhyhEHmMiULBjCJjyH7FzvXHoEr9iqYenx7BifmEiDo7nJhkK2DAxCi68YJEDb93woEL745sNMNhorpTm4VeeVn",
  "key36": "4KgjbrHEQpYQjCch6HYSc1cUeHpq6Ga2pp83BpY4QUKqtpkyoXVAWnTDavCuEzL1WWKX2mHRy2Mqm5An5tS99Mdf",
  "key37": "N9dwNMkAU3UED2BWEJeg3SBcDwPJjmvaFX57PJLMBwGWHKWqdDZHn1b6PvGVtdy4uL8K93ysBk8WFrXw7gi49hH",
  "key38": "4kbRRtnNShYqdr31W7athzP3CcHq9EPYuigFBNZv9UPYPz71dPA9XnfAyvm4djoWMcoBmvnd3EmhPBqrdHwHzZST",
  "key39": "4AJrQma1vWU5yW5WHzULcK4A7j9q2Ss13HynGvWT7SpAFXMzqWFdVnbGottY4tp9qFAworSq5EjJ6rmBjTFV2oBh",
  "key40": "HhFPYoQbjhWxFWV3cnCSUme7qzYHwqU3AttSG7NH3a5Q4boKgH4GgQanCqS2f2MuPBXr6X6DUi9DN7hof3W1TRX",
  "key41": "45dE5YfX6C5kkZr3iTNprETiuTdZsWQXH3DkhwVHGZuzMHhi7ok3JawHsP5bC2U9UVrRd8SnphRYgCX4vhPeU2Ns",
  "key42": "9DvFRZcwNjPjzbHURXfuuXvWWCnATkR5fVJXARa9nnEW4PBkLadR1W9a7pBvcYQBLdGHWYz66Keu5uUXsqfHodE",
  "key43": "52Eoo6CVgFpMznksEDEa73tZcBYrbcGjFaRoL8Siv1YK1YaFBg1mkYvUm2zs3vcrq2vZrhsx2HzP6ijFNnwpcMoL",
  "key44": "V8cU14veiB1FQZ2XLJXdWn72x58n1ifxB6riN6UngHyPHBwgzH5jL5jvdPZzb12e4ai69HUUHaSzfY4UTxiPqXU"
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
