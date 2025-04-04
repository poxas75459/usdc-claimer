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
    "3RR8E54HAkMpArvFqbXFE4avCWE46FsLw6sKtAkbfdggfCMCUFj8Ep1ybF59oMYyLKuaAzrGsPYjzkTC7NePw3mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vWJCEkJDWw3v5mxjdc898YZGi5JR2559T7TsdQMENYXFwU1cyCoqQxn43h1VuJ6uartgWDwEmo5jNSrtwsP7dt",
  "key1": "5YTWHA6zZqueeRrg85HzrMukh1bWRRWSXvT9PHy2JCyr3t951M9Loku8GENic2TZU6yUjaF9ZBD5GigJ1DMKpq34",
  "key2": "zTCoYk8Q4Ao9jEPBj1tGs4aMArmM12U8mfif73FGy8upmWp3vJK6uFsbsnpfrE4AehwXW9TADRT1LsivPK986Ln",
  "key3": "2cdTcLEBJAyKQNtZC91HMQmfZ3kswhZWzv67uNMeYtmHQKXveAUcfwUdrtu3ZdJgTUZsVm7poDPALzeg89yWdkHb",
  "key4": "4zEpYCfsofoEQ75SUdxggCD243FzxxoHStqHPo4pzkHqwoJQ4DZVS3oM9JxmhSzHFXGhAgheciWErnF4hAtELUxM",
  "key5": "4eUQUfBvy8LiA4v5dWhhFR7qHLFMh165P1QpYxNDj9EUobynYzYFpA35hnsf5CKQfu9P8pxhgxgzMpPDh5LLtKRc",
  "key6": "3AJTNSBbxdGrgHwmjrKoFyTHHqMfdzFs5QRfgytGs8HjYdVhYCnD2Bsw13dAHbGtQ2XtukNdqXYHKtMeeaWdP8K5",
  "key7": "2eg5rN4PHgCEhkx7y1b7QerHLJsBLN11iMmdFkN17QPBK9NVz6LXDq6jWJGAymE1yxnDAcEwctbgoYkd5hZLTLvP",
  "key8": "4RkfGygFSjUhvb9m6BDGmZwmJExRiMLcc2RgW7gBVtp2qErZx9HYCd8YktbBtFHppF2SUVgK7fx3JctHEBboytfn",
  "key9": "3mC6GGZWxfZH4DfBFoDbD3AiJqjBWTFXukEyidKZ5Sf39vkT1N9eZu13F2kZjoxMUVzbCauUqZaygW7xy4iMAKrY",
  "key10": "2kDrZGXM2H9dgW7ZhGyjYEMkm2FbrwDMzPqoQK7t1feGCcDZ8dnNaDEj7Ho6qi8ikiCrgXSKbQL178AohtVkJ6Dw",
  "key11": "4AMCoq5HCYvkuXeYpTvd5NAgVN86QjHLLFupKzsXhXW2frKSuhYHWR7KWEQcbrSTiLGxaXW3E8uzfxJSE8FccsM3",
  "key12": "3dsdJQ8szMMJonN76dCV3cr2UcHC4Pb3riFD5Bkzq5rdVzgXu1iYGWw1UoGhx5bn1BcYcDK9rghe4P6i4f8oEbUc",
  "key13": "5L9n5SRx1PeboDk9dKRknvKzNdbz3jLRzcxuXnvyMXsypUXFGFko4RyoyNUhv3JwMixFYm7bbvcuEBY1DPhn8DuW",
  "key14": "3Zxb9b4HiznNg9yfDjc3CjPRKCoVH2Uf9RyVAwcqMVuALcRnTbN7fCC19DiyeNQNdY5L7AfpHGLNwnD92wfxbr5L",
  "key15": "4ztJjx9YYDkRAwCbVwHDrkCDKheNMfHZ2wNeF45kwR1i9WH2gVQWDjsmyi92E3bpKBGHQyNrYzmQaLzauMB2DcwX",
  "key16": "5hvwRv4uGNuCVPauLy27Jap8NymDw4HtzJHKAkSL2kuQcupto22mxz9Fjf9SraKtrNdMuHMWfituocXAe55YD7yT",
  "key17": "46Ed8G5TJ4QaCmmppXZoTxQKkh3da8Ha8njAqGtjw5U3iv3eEnWBXeDYXWiZAxqK13kRnnPx1WCuHLoxW9yQ6ym7",
  "key18": "3gZx563AeLHUF72XSEbHSLBxo41Er8fePsmLtkPc5bEkyodiLubjjScd783eTz981xx6Ti8uoEYb4vcGp7gH3VN6",
  "key19": "2py32rF6aUZv1ubjZyq2fYpP7KgAw4tJTupdbHWSVwA76suQXnQLGM81caJ8WVhZAS22JaA1iWvgjD2EU1vaifxa",
  "key20": "59mXN3Fr9ajcMUtF7LDGrN62Hr1kX7mCDYYMKJEBmCVDnymaq9jny3xu6pfhhd3P5apkNYiEmHLbohc44guMfijY",
  "key21": "4g27hVuccuPGk8LZxE2B9hwS7x2yBnwr3JhYCs9ZsizLvP5ggDPWC9SjA9Bop1CutsyHkubaAPpViTx6PZAk4dWi",
  "key22": "5qLpHjdCMTtbjEqdWCxw4uDAQJxygN6oATGeybrFzsVFCdQfobct8P6oT9B1HxRuDCWg24dcCTk82dGTRFjAfsGy",
  "key23": "3idR7fkxx9ShaqSh4zLLhVja4dr5rgYrbugfrJ4MwLtU8yWcryjx8UnLUyBk9tqFXTNa8ip9ziUk8uQ93FpvFRG1",
  "key24": "2i2eyQqiPgC7L1gPvPKHs85yezn7obUy9Hn9PhcZ39Hi4ZypJcw87biLFgYMQedxZZZ4QHHaDzu6R5g3c64eFgou",
  "key25": "UzgrBpJj8JaVL1eAS8NrRoYUDJQhe6BaEsJCjaW2QbHqaZej1YEE91yP8Piwjz9R43VNAFEBQyWw9p4d8NXxNKW",
  "key26": "4t6skiXQouZhaf91XLCr2GCmnxuBff69DXcPUhWvrs5SZxXwXt3Vs9cKGVFcb9FeU2PgmivyApU4nKr1nbWrJX9V",
  "key27": "4qL9sD7YTPsfkr1cytuPJNFC466uh9N2UEnME4pBh4hFcnZFYvSY4webhuNbBGp2tUGYwfDgUEpsTmp3fFPZ4awz",
  "key28": "3V8vBhcTgkZNaiKKff8k2TMkeNtEKmZM3qmHrQTUJCtQ8jeA7Pra4N6iH46d4VvrZdXEm2vEkHM1UHAKy9Qtmvhj",
  "key29": "2LbCLRJsHQydzSPvj4XvfjPpbaBw3h1fgYE8wDSq5yL2v7HM6ApfnyYryQjv3oskTcD4woEPotSuttGjDTGW6K4P",
  "key30": "4uCoMupGksbao4zM9i7zqgCJkQzF51u4SNhn4y3x2ZcWfq9xCCYnkm6WoputXVhYAteKcQYdpJXwSBQ9RLBHvxc9",
  "key31": "5vzLaKgo3bQ4iYLvV18aXxqLZdXQxAAhD4RyUvyX8c1LEX6oidV9goWnWkmXWpQ2f5HELLHdSE7oLGXVqYU7sgF",
  "key32": "3NRjQ6zHkmNz15qxVSurERbQvXpu1RKvtrQuVFh8LZELvxVmo37gqpBLnVc3FM8437T1HfPXBUPmD15WBn9AcsaZ",
  "key33": "5GLLeBH8Hfjbi2WNay7QL6Ax1jqQqmj7xdfc1ypN5vbzpTnNyz7zbbtkpRfehtCPkHqK1FXX3j8af9qHFtSZxh2i",
  "key34": "3DgL3xgq8rjuPpyro9pGWHDSbXXo1Bwc6DkToSkkG9vEr8sbQk1dUbso4XWLff239hqHTYKaHeKETbRqxpAtrz5F",
  "key35": "3cbLyj8JJut8dxEYK5cajXHULwCSBYHDPk96z8Sisj3Zcv6rHdEpn59px27JUheikLwcAn9v1FKBtYSmKzCw9eaW",
  "key36": "5bqKwv7hSQR9dEGdjiCp3jpQ7Qrc78BUGALM535WmXwib3hv3ZsX25UEV51MbaommUJUPfqdMmWvoLnHpm1Zncg5",
  "key37": "xHegz2W8TFTYANfztrQaaEi6mx2hz83pMkUHSCH2P3GjVzS2iYVMxp5k8oKe35Co8KuQjpKHC86YnDkFpQEWtrs",
  "key38": "YWdChUGY4NFqwmsxsq2XWwUdUcJqxekGUGgcNYbFkCyzCmNGVuyJeaMT2QGwbATLC7XVhHqkPQHsHesDE2GHVC9",
  "key39": "2AwgBymef33RD8NjzE9whvUdQBAuP62ybygfMJjuc2z4qs1KUkk8Z2Z4mrrWxNHVfeagB1e3PwwHyVZQkR7LZF5W",
  "key40": "64Xhwp7NVzqyiTvSWxDupoSyTBuexysJs7b9zjmdWoNw6TRUonXhyb2v6zmNyhxZA7gHntQgZ9rqXdHuAv1hUf8T",
  "key41": "B7ap7SCjYZWjkgLE4KuzizaHmFHjhsrRLtR5SWaSg1zaoun9tsoLT9ndmMqFS4Spy4c3Shr5G7A3xCCatC1eHbc",
  "key42": "2NNeUktfGCezTuJLvsVKgAxW6APUYwY7U4F9ChtEd5xaSqgdroHKK352VqLAcdCBL6Vxei9g3Eq1vWKGpm4RCDFX",
  "key43": "434JLNGSLrZgysEXdoZGeruNoZ9C7EpFmPx3VuM8V8Vq81xhvt7ovVqiZmSMRdyEUtZ2mPw4QZyKW1GWCTzSSQSP",
  "key44": "5cJQ5Bo42frY3Nyuc41PRXVcmS9pxvzYFoSqtnbVBgA9jWEarALhE6S3GxH6yrCL8WDxjbjiG2pSnSwhU7kGwVz6",
  "key45": "pEQvGG19Rp1VR7KNrwN53UDuxuCyFTpVgPac13e51djY3fvLhpC1yqkUgJyBPCySXo731EPkTbmZ876ssNX7RaA"
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
