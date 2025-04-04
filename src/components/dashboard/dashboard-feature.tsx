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
    "5WfjCcHF6Rfrn6WvuorErJ3a5VZoku1jU4hkLXw81wvAgNnT15jib7e8fnJ3UVWiKKfxZAxU6DBYFrVchmayQNPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsTqDpnFTv6XA5Vo3jjjzWpS1EWP3nChLxZEH2Sd9FqFHC4dhTRtu5umMpkmqxYdRMEMBJ3CBrnXNoZckb6t5Rk",
  "key1": "3CibtVjw8sjG9B8wyKvmaiFoWnAr4rFwfXgcwGU96WL8Bzp4eHa5R5scMb4WXG93a4MBu8frHfb9FMD8rE11wt22",
  "key2": "5XEneMdDaueP2Fwujy67CvcoVYTccsW2BrzR51bEPfokBYD4gcJaZkRBqR3HUrzoGefer1w3yoVsgKB52SR2w5wo",
  "key3": "HmJbNCQcRVg6JiAMEttunX7rCTy8iPrRuxPSauBeNHAKQT3Bua84Qef3uziHd9VD7YGJ2LcAPnz8qsSv9SNfidZ",
  "key4": "4RygmiE19JEz9H5eHMnGsbw88ttNeEjsZrv6yYVgdCHbAAtX7g7HZTQ49cfsmnYGVS4HJMiiPK624daV5D96qZxS",
  "key5": "vCjBThQpQj2szTthcDUJQd3KhjP9BFtke8DzNcC2ZbmCDvtwYXT4hinvEyXUcCyUZbqQ2Ldh615Go5cMFXDoD1b",
  "key6": "49W7GmGSAWgfLypZukrVGSXtGV1vdkMraz7n4qbdAnDsC2nKxcvTmjsRvMErYQB3JJjXZjfZa8g58NWpQ8NkXy6D",
  "key7": "xw4skKeJj5qFUyp2JwJrpMDLDgqvu8zmfKeE9wwhRr3EXwn6WK2hE48krtn75XyJg4nAijCYd33NjMo2CfC3FEN",
  "key8": "51TmcHK2VB2K6gxtG1kKpbDDETNnPWPRM9D2D4e42VurueuMq7oVJCkWBxTRTzuqSjMLEvqr8YZ8oDFw5DVNC36o",
  "key9": "5J9KXh5KhmCcwnx3JkguRLLYMFu5XLc629hjbXcQnPkbUnDhCtiWhF8WCziHjVYsqnvZF1CQxnL6jiEHDqq9rtke",
  "key10": "61mjgB1RpHoA4xZZfa1nyan2Vha3i2RKxJzkPDHMFQt5nhquznkxu2afjEJcooryMLTEjDNrvSi8JgERkreF7eNF",
  "key11": "27Twcm1NHw5f98C57ebmW7tQhF6p3r3NjfgzzxEo5GnjhMjuWnRoqchkyFkffXHPVUWDu39J2MS7f4niAkcaFvfi",
  "key12": "3h17oYEknS7M5EJqNwPYZeHAx7jNja2oJtLBnJRwJU4z4BAWTb8VTHRrswHvMBm4gCmGnc3huiCtgn7zCQ38JP8L",
  "key13": "3aeXmgVDT9ddf3xHZNQ5Y2PSpaWZbkYzsU3efZyauE5LDdEm9kEcdvoMRiM5fwwWDUEKdUBgp7r728uoPSMwMsU4",
  "key14": "5oAgAsCE6xdzY1biUfRYgiVdKcMa9bxpTh8jvdoQmPvdbpJ2izGr2BDHBRhHAFnRUNd5Ey6xKDbmVGN6QoyiLThi",
  "key15": "2PhcZQUoAe4WxFMCRXW1DVg9y7GamrueiZ8LTGuQ8ZN3BzrGxzd7DDBtpvL4YPci5GRDuPwCo7dRkYcnLLE87hFJ",
  "key16": "66RJ4HDwcFcGyXwJ3PHvFx8DpPBVkMkpTgnRxnhKfYHDGNznvu29VgJAr2brFu1S5x3XzNthNQUZ69CncKRqWUrX",
  "key17": "eoo1Zxy5q3NVrBjRtyfAHbTKBDadv9F7mAdduFBjkV1P1raUpNrtegARwcNnaFafPHxWHPkJYTXRCkGENekhH3V",
  "key18": "5E2ydqRLzZKf642GF8MPhKFNdMRCQfzNXbu1pxSyGfJEvEt2iVpaTS2WHW8FdTFDxmREdxCmJEKacAZTPbkNwWBt",
  "key19": "3NEzwWh1ng8LX71pebPBq53jdvUfRUr6jv5WDomqsKoE6M4rgXbVsmueema14ab8mihNhJ3fkZdBg1GMynfHs8nw",
  "key20": "3zP6G1dkUd4VBK3b8isjmQVoCeRqh58VdLZxJ9x8xn5vNaT3ZHgc4yMzM4qb1hxb62iA7sXEFhfbLRe6WuHLaird",
  "key21": "2CR56BsMnFdMJF7QBgb8fcxZdt55pUaPTn4DTH4nPPrqiGNZBStwozwSPXKuNBEXzCVty9xDHYuMVPwW2j3CgAbX",
  "key22": "4GDzrzNif4fhsZDULiAo9ZCcaZeMKSPPfKa2qZym2Gt315Ax4zy75QwBrXDenf8rBfBCEE1b2Cg897o2Tv3uixZZ",
  "key23": "418GSyMxNb2m1iC3d4kJn4JRzgqqByTJqc1rP84HmaTMzpi98aqB1o59LiWxFSqE6iidNXjL3JN5tcYp87RjTwbz",
  "key24": "3KoMoTarEwpUM7ZyRMCpQmx6pmGnDqyMuFAoreDcNd4BCdrvdAQrvBRnHriRk4fo2TRpmxefAE3t7ho6AGMsLBRR",
  "key25": "5CPyapTSqd3DaCUFANkpk1sRRWxznB5dvQKJHh1Qa75eqyDkLnT7SXFphQhJUpftLyW66cAB4h2nVYhrw7n1Sonm",
  "key26": "56Q6RjLmHwUmA4t6mLG4MEoqCa8xSLiazCXK5w8GV4KTCSkCz8vySdPz7Z9UdvC82jweikLVMjNLvJy2ncjpAADn",
  "key27": "31td67Q3Ax7zXXzTTFM7AdNdVnJEATwHDBD3QtXBasDYkhBJvtBviS78uXUKtdzoLQB4GrKXGNhuYACCg5LnX7B8",
  "key28": "4T8WfgMZpaFUaRtEKJBpmt6CWfXHiWCdbrZTTBVUAdW1wox6SwhevE8Cmx1KSKvmxA9zvDb1LvQFuG6VvDN6Qun",
  "key29": "4UGdW1mYq39SF3wZQWsLH3d22W1DP6C6DfSUNxnseLJLGkzMKTbMZWdLmy4NcEujnUDYMBHRzVp3w7fn6F4p6q5e",
  "key30": "2iW22RgErYtcmvgnS4CsqP4tBkytZALzafGM4LzGmZcj148oW2FgfD2RshesNQhWYw5xU3MZBMggdXDNNJrytZ4x",
  "key31": "53HXMxcwTGBJXhEVAoFpx9Bbf36oiEwb3NZ6ZH4xbiBWPgmDWkwMRaiUCcwe1ceCWvw7XHtBvkbAeQuWho9hx8LP",
  "key32": "4xXyooLd6E3r9A4Ghpq6B1RcvQASMvdF7pzF97KmZHKkny9w9X419ZBXcYYj5FdYDxtm94faMJVUW7k73Zi6e2Ha",
  "key33": "4hfYTtJWEDuKBFfGEjdU1KuZvueQZjp2s5kytKhFF8MYR2YpujvdmDaUDKxSdHU32J3XNGdQX2EM836Ut4b8nUVS",
  "key34": "4gifZ5vsJYH8ptCxknK8WEmLPs9DkFepk5TLZVZbf5XGXQ9ZoaNPnmv47FRNY3qNC56aLbHiXyjJihnTNpERxn5i",
  "key35": "Ky8ZXjLh9StXTxzTCKJyRs7pbpw8cXBXHtSmcyA99XVJGx76bv1ernSvcnbsrnqWrKUXh9tvfa3WyuRF6fXTEgp",
  "key36": "55LWyJ3u4ZgKp6TSdtXeGYuprvwrqtkTgJweDr2xKRtWAfQ2agkkd4wDgLHhiKkNgVi7LZV2W7bN4fT1TRDLFrT9",
  "key37": "5w96dH6PJB6V3MMd4YZRqmWFZazjDwgAmRgAQaQegszQYmTrzuit6YxSGGRVQX588K15NWA1PS9PZo9eAX4aeSyL",
  "key38": "3B5ygYm5Kouec2PKt7SndqHJB1YTQ7ezffF2Boky3prd6w8TAQXZWZvWfkNgeTt79Jo2vnKH9oJQxQ4unUhTwk7n",
  "key39": "X9PftqmcmqxBZ1qQmk8SWQbU2jX2dwkXqsw2ySLy7L9XuLnjbSjVWueDSCDQ3ojwpqTBigfHFVx8uLoJ2ZUj7C2",
  "key40": "bhbc3HqzJ556m8baP7ax2XeVoa9whtzTURNpcUyGUDqyY61S9Ra11joXP3G7SsQnciEbz3HxsgRoze8BZaY1qcx",
  "key41": "Te6LypcTzrZdbc6omxG2E8DFC2aVVRj4pK1ovf4ZzSsWzrSKKNrBXbTxASkKv6RmxTK9NJWHoeE74YW7wHJ8gvy",
  "key42": "3esSDG9ocPscKbM4saMa3CcZZ7CbTM9Nfe38c8x2si9nxKvKiEm8k6k9ijyeivcRTmgsAkYZ48S2BMKNV3x8Buay",
  "key43": "2rVwCDjVXvUWcFZ1qVqv9KJFdnkF4DFjcbLkkEoxq3ocQoiWMAumbxh7Jd5TyoxBN8qCqyYNQLc9SmX5odxHAa7E",
  "key44": "2s3Vunxpky8VJXRGjXfhbaamJarzMMq5Re3QXKXgpeXqGD3AnR5RnducFg7SZxYAsS8AbaZsSA6BLEfWgDK2c1Qu",
  "key45": "2n2W867gNrZxRNc6cQ1FVFxwcEmdvtretFBit789bAqpJVLVLiS16PUtxW1kAZjkFVRv1jkkn2ZBnkP1MnwukMfG",
  "key46": "bq5qA8NkEDt362kKxBrXcPNyaEumeNEKDQpENmvWP4ceursUpoJfgPd8ps4fJynjGXQgAFPnfD7ZjHV6FDCJagy",
  "key47": "2kHWK53ftpzqS9xybRSZJFoxiZAUk5m3U6BJHSNEbV5FNq6rkcJJpT1ZQrr7GC27yyJNoa2qwmPFpKCvWqXjz7nx"
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
