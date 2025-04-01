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
    "5kQKNYQYHUrZHoxnKqqs6ue3TnpEoUDS5urVkHDW4TQg6QfcWEW9bFBQiWtL4wLuG4KLgSzdYQT3owRAdEWFuU8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkF7LoZjboFJn9cm5p7KJjqMaxBVDtJaudTkLRhjW8xjUoguuMbtCTjw4fpvUyMSZJtsEc8jSVZVsT6WxpFE68R",
  "key1": "3tYVhrB1RABw4Hqu8mqa4GKUEdjTPFVQqa5QF3jQLXrZVT2YYgDsdvbLUEiXoY1hESLh2LuEfym8d4DUF2qBgSTX",
  "key2": "2w7YvAZcCdJeV1Bj2h5ZwsSyK6jXBhgbj1WFPoUmDdjiXbS4tjmZr8roKGBkvqeVTYngrNL5CxkzJE769MQgHEnR",
  "key3": "55yzCDC7tdt5VGE3pWQR46pMSAuhgZ7GFvHKKSCshcYFDMW2zXxLRoskSC5mTwuJhHWJu1GyRV2kiyWSNtTxM1b7",
  "key4": "4MM5zohpEdqkZXYTzqasg2BNVtDtPn8cnwdR82Whug9vheLHCQ5JccWNkXT3E6vHuJy65HUkSK5FHoNLKvMHUQMP",
  "key5": "5ppnBDw2MJqFHzTZ9V8tCwKNoJ5Dtq7YiWZGuoqxU6SQVzd37YKT1GEo3tfUtN4oxMDbyEZ1etCGvZZzvhCZEfPb",
  "key6": "2whybytWaX6ouCAQdp3sm5WJuSm7esk8uacPZZaimtGXBCHS9sgzgzbYFWJ3jz7p2isPY3f8vVJoGMoE3VTqt8Ye",
  "key7": "2n6e6xvB6rfDJB1xLidN1xtu1DkidGU3FQbSxM6gw7qkvFMafSHaM3Y81K2wVETnmSHtqz81ZsAHepEShHJKFysQ",
  "key8": "3DzBLxULKEMmqWjsKbvZfCHea9hp77nqQwFSWcq8vtnQwSSxHAZ6A2rZ56wkG9jDXvXxq47FBrRt9YH1QJdYoY15",
  "key9": "2EhVMyHV347EvEwjS8cUWSC2iC4Yy8w1ngZPSkVMJrdBEZgEBcDwLh3ckpDWJ2qgmFV1ePqz2PZWQ9RnRVh8Mi4F",
  "key10": "6kSYStZVY8iJSTypJA3GgkCTAQKnWbhmNMaEbgjtV4gj3EqYPrFvvC9JsZS4fn3dxRcXc6ZJ7csV2xp7b13VBxF",
  "key11": "5GzwyetGVeGorhFJMP7c2euSBu5qgkAihieqyKThRjdChGLghzjdYyu9C9xHKH5qYhkrLz65KwjoJVYwWMwEHqRA",
  "key12": "smcWd12U8ajwe4Sy8aa8QRSBxv63fDsooLof2MPK9P3ZGPnYDv54DWwAEGpdTqKtG6ayNhbHPCbs7HQutufjFRS",
  "key13": "5fy3UGRq8a4vfGHwH7vU9kC3kNLfViQYEhDZ7AJwRpi1PnWKK6RFSMrK5gyoDSoe5ravwJD79NVUoBhfMp1Fwswo",
  "key14": "4SNgcoGYGrFspwCXFeirPSncVSVL4bm1s1JUYJEurrJx8BnAEmUF3fWXkcWwjZZB1X7cufhFr3diMyY5tuxwpz2D",
  "key15": "4XHFJKS9yQEwHA9mzntz9rY11b7C8E8tedtkn7oiaJ5j3GQRRSLXEAMRN3iKqg9pU76CsdLS48epmqAFQqb5bV3y",
  "key16": "4igEfKtSR5GBN46DCDy4XCSCkN1U7SDeYQ5eFWyFsxaMLCe3X7Pg4qd3ucqSBCQ8UYMBEBHYpknQh8XyN84uRURh",
  "key17": "XGoe9pSq61RvJSokWY4dKhfGhYUtLStiWmZXTzjtw94muGuud6hBgCmSfJqakWZ1iuyiHuBRpLKCpF2kNBuAFfn",
  "key18": "5X7SwfbBa5QgLXSDVDVhURnD2BpSkGz15VYYsvUFb9UmCnc3c1MSYKQ1unV6zyeyx5jXKSgee9RGeGn9xWPpwSrg",
  "key19": "3G2ViAy2fm7MDinXWmJF1nqpZWWciYkgT4BjzNNaRYL8spgEgESUEDFLSM3KpsPiuZLYQNXXBf79oXVgRrp7s6mN",
  "key20": "5itTUnmf7ggScH6DLCZe5xavu2WshbgyA8iPoEtcJMPZFHRRT3HYrCaU9iNzF3Ei3862zJBy29WJzZ9g6KMVcPEn",
  "key21": "3WTQKRMzWW9dsbASEwPZwzBHCdhVndLbRRdF4jwyFvgUGcM7Rxh48srFJnt9ZyEGtBC92Rd55f9EQpq1LbHCN4JX",
  "key22": "2M25FL1hZbxQJvC2JhqxcWqaLbQ8Ttg136joHDYsHEHyUz6J8652prPHNA6cC4K4CfcBRkGvPUJ1213rmjdKhbbr",
  "key23": "Ec32xEsF8ifCXWzoHZn6t2XZ8mXLVdZzScCY4yQq866VLGo7av2Y7y6WEDNYPM8kLHdftdS66AmDpR5UWqfYji3",
  "key24": "5NCoUZxhED4GmV6ZJSZRM3D3d4onXuRvUTQzkwwqRWAPWXc7LujuTuZU7xuC1m12bLJQ4H36QmRuvSDRUGUrWjfE",
  "key25": "4ssdWQoSe9eCGgHv8aurR6nX55YQLWMfhdi6679Zsw8BHb1fuCmXiTVoMoSGU8ZJs9cfnRPdcxmfkGFJW6LcSHyU",
  "key26": "hARho3QidHBoC8sMbv1x5C8TLDpNpY9dq8Be2mA5QxZNWfMafgh26WY3Dwv4idnvvbggy7KHL5gCyp4FVNh11iC",
  "key27": "4GPkkE8JZY1d8PdwTEv9X7q9Azqexmd9oKQeji9mUcYFP4fgK71qGyTFmyQKkZiZWWmw9FzFWEBmLzfLowXKtJYg",
  "key28": "528y7nGRecFQ54tCRk6EJ3BLEn17kaWVhC86gzEfjhtVvaXm2nGvZAQWB65SbKupcR2XDp6jgHgx8BUSjgWTf4XG",
  "key29": "2fEUuPiEqXP8hzHNPBrwfcWaKKRu8F7sBerCV2odA3jpy2dk9B8FewtbtuDU1KH7paDBBV5nSJnY2GY5KYXPDRdR",
  "key30": "2akuBcbnCao3HLdWeyKm8aepPLJ84u4vvMk7PbvgYEyPrCEKFvBZe8ZGCsVCTreEgstXA6LdmCoKKjtjsrruhTEN",
  "key31": "438BXnBCzH2pEaVB2WYWfyf5H5A7hrzaNK1c3G2vJawFV4gnC8AkJBuUNUyiwE8qXrywD7QQHCVctSE4J8YwhTc3",
  "key32": "5dJZcE482TRXSsgGGkzvZNDconpghLritnRikUREvpw8aYUYPwkvfwBpF8xWWkQnkHWp7CGWdww9CsNRZJsLewCR",
  "key33": "66dGLPtQ12kFzkQCKVgP8HKZWNspnsao6pEQRMh8pu6BywDJ4cFX6c143DrVqAih2itTvok8kf8iYtd4m1Jy2ByP",
  "key34": "p6f7SWRDy156Jj4qemonK4BeVLtNFzZ7GhoVvHVGzgcfrFg3eH5uFEa1Qt6zpctYxjHGon2ZpjzJTHYHtCUpcX1",
  "key35": "5PZVJStSqgChQDySgA2opij7ExR1X2cwTQUNk3nsRRdwcivYH6sKYeFo8XrRdEvsSSU5C5o8pGRPXbNqgDygFBrw",
  "key36": "3gVepdsSc2x6zMzTaMsLSQqtpPffeVJrJqd4ctdYHatziC75UVNYZc58kuhEvdqq9MSyHsQKQNtKzRufqw96M6ZW",
  "key37": "537pdF8TgnbfzngJKkHBiXNiDyxydFwefAEdepWSBXYCakG3Uvx5CLSBVqRj3GpbadYzKrHsKYrrwXLiDU3qzJCw",
  "key38": "51KGXTLTpdawqnQ5Ui1nRLDDC35k5qZq44C2kHMaoqhq5kSAEViSaeAyy1BD4NA8oiq9PEvhqigytiXE4dyfqrf2",
  "key39": "bbjpbYaDgtWk8uQjhpDaUPkdvP7KPXopqhMpgqhcMC2Rr3cg8GQrRtrq9dWYgkyiAcL9rycu7r4EBsazrVrsMND",
  "key40": "9pcTdZztypp5ABfuCAkEFnTWxNSeGXg9vD86wW23r7zVs93BQ2Mtx9og9js3jFockrtJ9TmxJyX21varJ1Mnwk1",
  "key41": "41ZH3UeGoJpiqbyvHocbdXye7Zn21bgRZHkXyMJtkmQnyLh2JkcWEwMyEx9n4SbNbWjxjEBCwgDiPqPp2c8zsm4M",
  "key42": "nAktUdzfWWMXh7odW3pRT1ixGpJbXHZiEjZVeXWqVSzqRTGTxw92vKJP9v2cKPbD2Dw9VtDpRThdTMHCgJosPJW",
  "key43": "CHT5kSGjSahVisYCWffuMo7YgYTStMJh8qLjLC423ZUuRX54mqr5DS8vpgHsFtCETRU2TpVsbVb8qPtW5sLvaWG",
  "key44": "2iLXfxkiMJ6m7tBcHPyRYYnwxL5uFBYwHa2bRpAYr8KP6pP8mupnFLu2ngg3U7K41Q7qgXFNpeSUtQoAhewJiy2p",
  "key45": "48i19LQf4M2ac32knnoNWroo44ws63zZdBCsCsSQzH3BmQm8cvq4zkBSWMQKq2FPRHGyPBxypccBUQs7idFHhpkW"
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
