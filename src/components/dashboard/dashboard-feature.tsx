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
    "dmzKGsEqSf4x7dGVFnZyKTpDCyyh83ZfgksCNwqXUcJP2zacwwejjuR84YDpNpjPZ4TzZtBmyzaUGi5fGeMzW6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwpoH1oKXWcebR7Mk9mLiuAR4PgSjypht7czAH7QvouPY9o15XvevZKrnBq7vykS2XGgUHnyUVENCRGy8i6c6CV",
  "key1": "4Q1FJS6bCmELA5aaYQd3549TkWe8tGGxRMiAcNcf1vTjqSXp6QSMQC8pKsbYygZLi3pzjLHqCYccSsujzALFh4mi",
  "key2": "32uk3ntqCW5wkyDQnYc6Nxi1NT7bzqU2zGyrveKRHwjPvLYjv6QdAf93GGNQRxHrJA6k1BqbLL3sJgGfWjjNHg7U",
  "key3": "2Wubrg8DG3ghYuip9soo1Tp2C83iAyoyVaT1ZPMX4Q5yNzH9J4nNiwhF4vkrBkpuC9xjQvEymLRN4ZRS8hCd2sLt",
  "key4": "4uc1V3WNMM1fjj6DsmMBLMyaw9yD1o6pKgq2caoqqB5cAGq8kMTjKj7HYExPmghbmwwis8GMDPK5v2893Kui8tME",
  "key5": "2md8dXQvydFZo9h2AJ9HkzujNPdX3Ekjv2977bCGNqaoY6bqwgCU5oSacaxK3smwqGyMSxD7ewRi9CuHXGZu5uay",
  "key6": "5dbqs2UEH5YxSVJNXtm2UNHhzwgABZKgJsySgEotREiB9DU5nW3dCaJQ21t2QksxSRudNhTsQeR5tmbAV98V89qk",
  "key7": "3mwX2WhBYXAyrBEuMgBN5r1RW3csYboEKBZhSAoKaj84pj4BsD2FKShestWe2QKRQVBmVVLZmSsF8q2uDuwMby31",
  "key8": "2JxCvG6ZaymrbKPqM6bVYoriRx2RW89sooVvB4fGY18Ac4p6gLtX4oGXUaQZsFvaYpBduAddVBuoy5xnqunLxtqg",
  "key9": "5EgvigFyM4R4ZX7wvsG1AQqrymukmSepS2JzrJc7KB6EWuivW2CZdBvk2BbJ7pSmcs9f83JhmZwWHT5YKwSz1HUa",
  "key10": "qG3YdpGsScZ9pvob6sLbTJMxZ7EJYQjfPYLwgEXsDin8p9Wfybcecm3MYNkeTQ8ir5rz3bEHCkzFuPkrCDJ7oB5",
  "key11": "5vGjp7nz5pkSdTsewhrFkFVY8KVVxW2NhhHuyodMDHmrpRbDrD3eAyNtkun61SvwDVc7fs3qVQc4U64RqvB7iF2c",
  "key12": "RqQPoQgHMhhydiLuyKTwoM6BfvyBiUgbtPc2yiemmxCTj8PHGtnJopAcBr2EHYwb4Pb79mDaowB9auRYMLZjdgF",
  "key13": "2L3m2sH6kxUECG48KLu1LCvocoDCVrDoEdMBmmGo16NQZP6Ypae4c74me97zHhC2W57G6iskKEPkTXj6QdtnspzL",
  "key14": "3RvdxQNhAaHgCfxuHfDEirVMrTLjTLKcMJ57TrEAcJtoUCMEktbUiVPgd33WyiJjT43KHQ7FvL5VRCeMPthKhsVx",
  "key15": "4nv6yNJLsVYSrX5TnUwKP6BKWaZVMVqmfmV2i66qEp4sFyG5ygrVMvs4YZvLwqWHMMSjXyTxqLjSVogKHoui7TbC",
  "key16": "5Ru7CWXqQ3N7nrF8AimoN8UW3SQjoEFceT6DRtoZ9kBAeMkdnuBmuZZ2R7vENtwrZHQG2FxaV1tFzcfiXm9tuXoa",
  "key17": "5GJjoE8CWjyRu9nfyzE6aA7vXCJak6q2hYCAo8jaaXDfpUznyis8jq92bRG77a2bjzWmnJ5Um89gaB6vwxYopvWN",
  "key18": "3pyD5FJa1523pYWtEVfa9Tsji7p5A6ZTupUKa1b6kdvde86ovHdN4NPEVhnLJJaDKg335vVbRYft8nKFUeQ8ZRr1",
  "key19": "2pJ36dMtPaaWCkRLSYFLPpGjwRxsnRqXjCXTfLs5ga9bkQLDFfWELeHe9rwqhLGEP2uHsX3oRN9Nk96SicBKBN1T",
  "key20": "5tUaGiEKkkEkEwekxrdAy1mNYE6zcmNFd7EUy5QrT2yQz4zqVySaJJo7Ywhb6LqxEuCdpJdtGYyRVJRHC4HGDsy6",
  "key21": "5xyrixgCpabJMaZcSUMdL1s3Rr6HTV4EoGGAF8W5gKpxfEAyRL2FpueV8hp76bD4SdaiFvRfa1eHPakNpQE51HLM",
  "key22": "33WSNQsyraAb6xPyYMA34EjRixLSaKtYzo97Y2W4XsyKt2aXVvLwvWfzzttuWeG3PXspwmdGT9Ceco6c5v8HH3UM",
  "key23": "GdcG5n9ASXogeUTSkA1v4ntEAm9EZuAFYwN2P1HMrrqyFZ4akYSRx83Jo8Q8ba3Zhj8VSkCEGxAahVhyVJjiNSm",
  "key24": "2cMGJV9vy1pJDfr352hmTjrvoQUZNyQWCKFt1PSoMZRPT8njDTBGqvt7pxfrcin6h3enz1gJuKE17RHNzXaSuEnC",
  "key25": "31cGdSNC7cVt4edX2rNaiM5WTYv4xGQ2YA7MppKrj9HybRnxCvicrvwF9Dbi8H6BQpLkeZh7Lgf4NRqZiBgX1wim",
  "key26": "49sPQ8eiwP4vsNm8KBp8Lv7CLCsjL1pYCTfJZSbXgvVveczkDhx8yC2PZKrTKYhu6iPZJ1MDovyUajWdvdnBfMAS",
  "key27": "2pbMAaaAGieCBVecNW1z6WgTEpkRc3DYAgTpVNJN5XxYmBk1jussNy9b4DjrzubzP4m1etziwh6aExssxjy7X9b",
  "key28": "wQL8NZEoJhzyZkCMFYe9oLFbXLaw7cFfAQgUBB2eSHsVRdGsXiKpa7iXkVka1gL84gBkvNrEpRp6GxwGAMMDnwu",
  "key29": "2pTQPXRoSeJYkdcSXxGVnsHtA28QSiLKtUWTLgQTaTDgBfhx6M18xVi9Z2Vj1acnTJUf1cGFLTZBzKUZwLKsnY8Q",
  "key30": "3S7Ak2DsYd89uvoUoaDYz2geoh3MDZeur4uk4Ataa6xymSUnBhBU1VzDQkDSp5pzuBUXqQwiQm1FynXCA2VnmiJ5",
  "key31": "PGE6u6SaMBHvTmZvCYKumSvgQXy2BzshhzXX6XY59b66eW42CuSARcSsSxiNvMzwGPS2wRzwixsLR2fcDntzzfv",
  "key32": "3Xi6t7QU7eWG2BkHURVzYVtoGZQg1gXTgiuvjVLe3KhENizyzhw8HJwEvLZZLe5aBsEQkS7t9KppUN2WtdSNHCxn",
  "key33": "2Vm5R2xg9xXWEBJYLU8V79aDyhcwoGYyQvSKVAf1WhmU46zk42p7xDsN1kBm7t9u1KW89fhPEeprYZjaUnBF4fMt",
  "key34": "365wgFrRAakxZEB9qyNcs2xiHQvAnqtTowk6weWoG2j86cj2wngH8sHzmiB7TzgVaAHukZF6iZuVptgoahTdHS72",
  "key35": "47MmzsriWavpdCoVHR1cnmta6vMiw2ZuF3j27nnqrUXKMQkFHofX6T2D6vSCSoHcfs2H7oMpe6GDNu3UhEZX5PFa",
  "key36": "2xcC6PZjHUCrn82doTVY4qrE72aaKm56WAA4J7YhfLtYU1ddMpt8YzPTY6RLMC6VuatFw9MUXCW7cXSVWcCvi5KT",
  "key37": "5CZmvj5MXoztVjsHJ7a36gzYif5PpYYtY1UsepEa494Rj2NB8wmgMC5mJZ4RCpbPjA1eTNQDdbQujaeHk13JhA15",
  "key38": "2pAjwXyL7AruxmdcxY79km4ZoSBg9kfbup7ECyMFVr1iA1isxE3gvifZTmZ5SuxLBonTqAhovpHr1br3n372EpWT",
  "key39": "4FWqEyYvZMgJ22qtL3ZMuovmRQQZiYjYpmJw65DPKhG2pDgRAMgn4gjJczwqu6kpuYG41vy8wsyLw374twg5y3W8",
  "key40": "d4dC2pE45Y7NvZZccuV4SXEyE3nbd9H9dt2eaeY85xn46Atnguk1XemUT1hWSVsnVWnbBmaDKKFq9cYmRoK46hj",
  "key41": "3nL7sevS5SuFkTw1icr7R5NVxd1QbMV2GYVFL7KRr4ghECiBsd2AuZh4uAezsCoh8hK4TFcwhVE1rmL78KdVMjcB",
  "key42": "32SSMCK9eo8tAZLpNLpdY665512R6P4FqZCiJuT8cTpDckhz7uGBGKi28wvwaqi6uwvSPbCtGv3aByRL5JJpZyZa",
  "key43": "3svq8JRgZ4YSgQyyASax1TZ8L7JhbrDufVo2zWSvT2PE61R1NkXoCzwWJWCKrDuFpsHksRcHcTMEzZBrbjCzviBg",
  "key44": "Q3uUWsp5sS9F2PmBCotQeJCndmB9SGa2Kw1ReMEXEquzyxmKiX83etR329WEoPYHHfo7pX28obbyromkDHm6PXz",
  "key45": "4wNsjKk4d6o7H8Q8NstGzRT31orGRp3MS2LCR3yqJF9Gn9j4gqJyvPaVARA55LvnCmbcSQUc5qaCfuoDnpfdUsn2",
  "key46": "2obj6ECTeaPCoLdYNZFsQ8Jn7HvUNymDQP8ku2RbZYX1RvBtFDDaFhir5rbmPEY1kdQcGW2ATmG6eHHY319Qd4Xu",
  "key47": "3R8WU1wV78ZD2mLwiLyKqmNTXoFy78qVWsRqWnPcE8RU13HEGQvQyWf7Riknm9T7eTMMcii7r7udF78iUY8VqkLn",
  "key48": "4e96jrJPuTqf5cF4dM1srfpJd6GdtEMgWDdkjSTTsTN9fxWUhQvG5Vdxcn2oyBZkV1S6nKhSma1tXPCjwxMpwWvq",
  "key49": "rSwfevnKhyBjHgT3eqjDRByfqwHcWGvFqZAjjSgAwPWzD7q68pxZgwqEZMysHq2cMEEUsXxw6igtbzb7xdcn7Kd"
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
