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
    "ZjBEJe2zJBzTbNj9Gdw9fa4yQupRx7mPQWSeX1Q6VWqnKnqRigxrX96JFDa8JJ1ZTLfLkQV92c2de7JemWmpRdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvjXA3pvmrXDpobxxwZLL27Xe82cQ22eLdoe8c6VsM8nGuBsUrPWGuuoCe3KYMvwUqD4iHHkmd7MfyT9Je5inCq",
  "key1": "6XEm59yy1yR8RRSL9UQuP3EuMmPsqVsyYy43bX5YXnbMN7Ev2aQpRQwkMw7g7bjZiCpfKqrgCMwonBQfBu1oozB",
  "key2": "4u9mBMNBixjRY1Phup958umCAPDRJkB8PgwZR1brVbdQkygjknSWiatMHX5i7fppifMWBKeh1M1EdRxjJyE4FZsQ",
  "key3": "27pUZEfdjmaqcibgG5N1AYNNXbqNouNSAA141YnCNfsevHLHwj95oHy2ZLj4BavvBrQr23NiYRYiRVyxysDeDzfb",
  "key4": "4UaoCFgLpqU6WXHUVHTtbynQKxtSsQLanvRaM1gR6H8tHbbiAAhYBoU4XfucQUkDPPrKkE3DLniRji3GNXSYv9fz",
  "key5": "bX2FrT7AJpSsHp8HTgdU3zWGVADpWJzEhJ3ACNW7gURbXLij6B6v731ayustZG1VWERDoS9YF2GyZ2cbU1e2H7n",
  "key6": "3ZyYfAbTJ8esL1F9rg359fVBkXenysYUgnvgFrEJYzrcrb4Gkgvp2VacQEpXbEwudgxt4xnJc9YSPrr8bi5R34vF",
  "key7": "4RvQzFS6P9VE1dVNB82Ed5TNJUdgiTZDad2bMsBABy9NQGvRCszSBixdg5LhJi6iceK1cfeCWJHFj25CBbCFp73R",
  "key8": "2hoyfjKcxhWptmHtZtDrqw7jPS9zk876yizcuhvbTHhmLX4yPv9J9reKzMDeuJpJUycYZGUzvn4N3XdH1ErTwZuc",
  "key9": "y7sSG483dQ7CVYPVJ1efdmWUjzSALriZqJJmzBYXN23eqNVa59PR5aAMpgwhCRuuB1nvv6gkihvfoV6bjsG8TSF",
  "key10": "5CEH6BGDTjyvxer2YBykhgXX5fkFgNLch145RxyKQF5pmTRMAte8a1d5DUaB9qjEtpAEWN4119xeSxHqVgxn7CAH",
  "key11": "4FYF1waM5WeuYHo1w4iBQRAK41rdQGnZkpjkrcj54rQ9JU4pi4mRM8Hg3PJ3aRW9SjCYnSbTGxVt5ctaW31tnKFg",
  "key12": "5mK6o1LWnT268fc59Wi6s5jycxZHNbZfridQVjaHYcfCv6AHmPVUY4iirKpWNVvS5JseKWs7rHWX8oUsGZcBYx4L",
  "key13": "3aUeqDLEBaC2PV18eUEzk92rTNGDQgiBXFJtfVxTJBzGucx1tdWxG7HpknssFPp5GwCiELREFfTbiVGJTFqSWqPd",
  "key14": "53XxvtpErRyC8iPGzFm3X8aG5eYSwTnBoL7ssZasbWZeDLSHtRvfAWbo3bwPYQ3GUVT9Z9pjCtyxs1q5t1s6na3j",
  "key15": "3JN5KAgM5ib4vumbgefjhEg8Q5pk7zrSin2MUziXQwnEmHLk2CvzgRxLG4yi9KAtFi15PGKXSXrkQLPtszw6ZhQ8",
  "key16": "5U9euVJkZWhVukiVR68rpoqx4ahja5H9cJAshFTxKicRfQybFSXMSiFCTn7ajeGbzPe7dt41FMBkeMKRTfvLfp1W",
  "key17": "HFVMi72YtmoDMJvNUaDeSSVe5NY3L7WsYxeWGYCoXWbfYHNc8fnwXjnoCTDCEjAwYQAHBM3Xodn6y89tziuzY4d",
  "key18": "2gR4rwzuWK3v88hWmx1QFny6vvYDtUAuBN5QLFgog68HF4popXYgib4r7eJsDSEboM9BqGzH8eyandWa7XTVgDvZ",
  "key19": "28WerfXKf3nsfT2Jjrn4TJqApqbdZDnEB1VUu4o3RjUA2offQmzUjbjYGBmR8wCdXEubmnMJ19N55ayebutuBnes",
  "key20": "5PqwXjPF4FQBZxqgWFL873KQLoF9gCYfAoihhdshRWvJE5hZJAF3BKSsppYhN6nRGFRjbSzWNWFBLmjnthgXz6YK",
  "key21": "3tbYPsS1zksdUEVgtWYXJSHSn6MzKusePRMWcDYiKnzsxBchXKk5wDerW3aVnQKCGcmb8vxMT2Xz5dHrXNjh8iMk",
  "key22": "VAeRdytnHQuC9FQ5xZQmMDx6z48Jki8HP2P6qHMPAQ4tWG3mKmZ7WTkimxHt613YjiXFYnpqHN82z2bfBsuT8aF",
  "key23": "4Qh13r21qeHdF6MQu9awZLqaadoVdY18tcV6m5EM4QBYorYuogBtCsmidi2y2k19kcHwZAtp9EbmmdRsVs9C28FR",
  "key24": "5c85qnSK5Q35HXrAm25qVA4rhqjgCGQ3GMaZSi4gDUpfqW8bRstK6cD3Y8ZFJXbdCno4bRVmJfBAxjLAyX2WBLb9",
  "key25": "Sc2L7WtViBvHkLpLf5JGugrgbc8EnRVNznm4PxxKCLUJMCv3o3VvVv79WZvCasXW3NU7MsxLFc6PMQAK9Luz6Av",
  "key26": "5pVPQp81jH57HKFrUTKB6mRvRPR5psTxeuop3BkQjbh1jhtsqTvjxmfJ3M2hcpSW1zkr7iUqngfQoJJ3r3LWgJAf",
  "key27": "ra2TJ8sjmcJDQxWUhAnpDQN4Uv6128HZob3qCsqpWXPaybL9LMoh44Vf1V2fAYh4mXgbiTc7xFEaE9yDYd2ygrS",
  "key28": "5RZXkhvZsvbWhfHzriSV9nd3W5pjBKoQf4nsu25Lqquu3LGhqmhbV6XdvYdteZf2H3a9zXk3GGSgpDgFv9ihjG6e",
  "key29": "2qbN9hpHvVyFRHGvcEpMexNYeBDFcvTU4gm5RgeuQT7DjoGsAjgQShxCrkr1vxfwL66bCDoqpFo9BK7P8LopgSxG",
  "key30": "eqToaE59iARyQ8SPLVo95dr2xn4EfpzHVa44YgoK3b8rRvEYMjWgvBb7vghFBtrjkVbmaBxBFAzqqw9TxDonGCe",
  "key31": "9bcH5ypzLyV1tcSP39g9YujLaPnRs57HroQT5aupwvSFqJmxZGeQGRXCAuM61BgUiNQEAmS3aRMDyjaQfnRWwVw",
  "key32": "5erS8U3F8RFJYthgfG667YsLiAGx95hJWS3939kLXid1NZfyiPT7HBZiBGrfSbSfG5orzbyUPXs56T87RvDjYKXA",
  "key33": "2kgAg4pVnDAdoAwdotbidon8AMhrsZaKVep9jfrQ2HtAQ4eqFKbFugvykwU8khyERTYq5Kfx45Ub7ekuhDgNJVXj",
  "key34": "55URD7oNZ1jxanjS2X6BTd7ycg2nk1NJ4DDr6t37e2WqjQgsNiq94fVjGuXiq6Yrnwu23X67UCKEvzKqVvoBC6vm",
  "key35": "4RPJawrUyU5AWo2FCbz8xA3eJ2CE4cdA5fefqT8xJXBGb8BqLvDzZ7wYjmaaMMkeF6oW9s26b1RUUMbykxyuFMXj",
  "key36": "5jm1A89TbrBREs6BnH2cyZgtUcEa5XB6dFWtvQZHnjEwAbiyGv29CNhYm4BWLarAhii939pYSQ8jcCRVmSSWJ5dv",
  "key37": "3kLEppq7azTYaZ8H1xH1tbC74YBBYSTjoREWqoqcmosC9eStwPz6x7njXDthDbGkt42wjacoRwCY4gk9kGbNttwP",
  "key38": "sdFxuYM9VJ73h6CfBbeT4X25oMxj9SehZYGN68Lyr5yD5bGHo1hyTBi7nd57E3cz9C6e79vrYaWXMqRUZEuHhJo",
  "key39": "4Eho4AAKyNBUGGAw4xWVLU8CocHhSfEcqQM5PTRa5FhEkX8jy7m9e6Fk3FLg5gprTa5Gh4yzwNBNfD6JgNTSsp2r",
  "key40": "4YkBMJBEVa2thcsdTxdgMRrHf28YDihWRewJL1JhnFD3CRqbabNbiR234znRezfJCbJnn1Btr8Xes5S1ANaAS9s8",
  "key41": "4XiHf87b37z5dFHKT1yTYFQiQKTtGspxCByXifQ2LdvZgmC2yhEKJByf28C8gPTAD7hG7q3GtpQBLWAWT3xb3C63",
  "key42": "4nDngSd728XqWfU5a51nza3qTZFP7juup5AcfeSqbPUoeqfE2eYmFmSrdbuwRZnwr5aF6a6TexpbFBAFtfExNDyv",
  "key43": "4DJ5SdMRcfcR6Q2PgbVkgP3fNdjvtCuLqJooEwdgepWeTRZm7Ve2WWwdujfTwoTUNDgsmPUeLmqygGpGpsdjPcGb",
  "key44": "2yywcHbyWTbU4AMtBazee84qduHtW74qwahifdMMxyzWPENGDz455EiaemmiU7dDHmkNn6npBQG82UXnHiF3vxSj",
  "key45": "BGyMAXEWobJrUaNsAfpfABHi4YXvqWtfdERvBMD2kM9twznpNamfEqqPQ8j9qNPTGBMbwCdcCtoNPemP9mqajan",
  "key46": "4YdBjtt8ii7FQyq4bo2vW4jHo2ewNjEdV2C6PxAmcVaeA1m4rVmBtiWefWXgRuMDET1Lh97gbpn8FwMfugLvQPv5",
  "key47": "5iWkiPxCgYWauquBP1yz2ceLb3kxWKYZ36yxWLyA1c3aSF5yXAFA8vUNqnvkE1vpzMMAP5YjtDZhEupgD87zigot"
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
