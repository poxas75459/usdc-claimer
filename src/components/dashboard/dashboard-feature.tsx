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
    "5bjTsW1wzSjW8BeasrQ1CakuJWYc1DWafgaKfvVsbQeUY1bFjHsQj7DkJeCvySvEANRrhAcekdnLm7hrFdy6dWsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCRQjsqwpfsLWi8ZCAnQwAGB1MJzs5aKpLyTy67WgNUi52t9S2nYXvPN7YGvKuPcWXjce9oSrv49VtaduguEDFJ",
  "key1": "xoV9JLBSyKxS84jHKZr4vYsG41f1kue1GSkVQSqkaJdgtPbAoPgLfLhFzbm21XhCVJCQK9gMFCEFcXzJWvr4QaC",
  "key2": "4Ac9BzJ54h5qiogKEpRPnUQSptLXZZCYzX5y789uvATQnGuRXrLQZzP2YP5wdrRBvTJn6aWfPcqc2Go2dhsSMQQ9",
  "key3": "67epYnDMfVgPd4dSyD9HWK8XKXWKEmtBZDuCckseQYBscFCULhFxtS7r5uvWPt97o3gXEerSdh8BjXbRCf7FXbvC",
  "key4": "39URHUzXyLNk1srsqK2QscFWVWgKuGVryPzqqFos1e9QwzzJ2Umrehb755NGDQVjjufwXRmct5zqnvYcqeogiLSy",
  "key5": "5nrHqpHroF1Ao1LWC5qEwe3Ktc3chrMPjCUAnLgb1T6XEeVXZutzszx2eYrUZ3tcgXcbxQRpALTAbmeBMH9VERd9",
  "key6": "35jyvuxzyaRDnu7WdaAb1MCyNJ2hatqHEJnAL2XEEek1HYWEBvnYUGRPxFEkuKCwDsKMiADnQfjdRLzzcwJp4Toq",
  "key7": "31rgA9y7wPq1cVmR4KArwZMMT1jPpiDTg3gMuWkBr8oSEqy1oFwh5vFcsFRCQEJ7oDb9xRhnAeTesd8tK3w9V9k5",
  "key8": "65Ekqe4s5hGKhM8bY92AD8vjFxnU5qttLm3ziUswCkeR7GVuiSPhyzTY7cMDPZHfxEg5koxQyAgyub4gm9Sc58Vq",
  "key9": "3XysegwNsTmQ3em4S3tdx45g1uSwFxoAPNioB9XLGvM1BWY3KjP5vLnQ1ZDoJhFGCMaUtmxg2atHLwD5oJNbPMtc",
  "key10": "NQ22PxNbeojTi2Su2KwHgsL4tGwrz6TZdDxubpTh6S7Fhxk77MsVZ5xNkmUMPgWwJRZviUPqUVGmLajsRrr3ptt",
  "key11": "tMKuJbxPTJcxh9tqQxfMj34owgDuQ7P5uFH3Wc1KekRFCM7UUTZXSLvhiAqGu6DSDerAMqAv2rxybJKTY51wKJW",
  "key12": "51v5qNMB9rY64f5gLuWGBQqUcYi2pYY8a8VcwytJeykjtxeHEniWxwTfzhaX46G67pSHCHVCdoFFhhLjzKcGqvRx",
  "key13": "52iHD5go8334TuDnHKnWNjDM19EMoPwQW85Q9VLh6uoBojsZ8qLY5xpqq8ChSYabjCLius4VuVDtg54KPKrCd7xE",
  "key14": "YMVt9NzgQmsnxHg4uVPgqUEZc93PzLK87UFDrJpLH4nLJ8DkBFR1gNpadSqUebF3jNQvRYqvpjvCpaALamN9yjW",
  "key15": "2d6nt6kGy9z8abvqYUogAmgAk1j9D4DY3rzUhrBNv5aL6HUZKSzjs4W3KXUUd63XH1YSKw2aBAELzRKhrvgFEkeA",
  "key16": "R4ABiR2gpymGgGVQ7K1x3QN8UeBNb8tPUZUZsJm2RqYPWEv3eyYLcUfa3JxZZzRyGic9gaUrXmNt4vVpiGz3j3G",
  "key17": "25oRPJK6yfGAQBHchLFLWb5A8W7XPnKjbReR9VXkRX9dQscsCCW6fLC4EKzRBhGeZPKhmkxRzHvHWJrKD3q9SRMb",
  "key18": "3mHNvipUvnGxHbnY4qhPBf1zuLQTobe918x4D9YT8v2ZJSw3hm68nx7JXKQECMDBvUDZbhYGLGKof6sdnesTkHqZ",
  "key19": "57HVBCSRXUyvNFdvrbBEtpwpTJym7LJT6UfxvZdErJvWUJUukCQ2bLeAaTNZnQpdHNdDSGJt6Vwod2t89jFkd7uH",
  "key20": "2WaSeoHpSTSsNhnrAM6vjYRKbnKtwbniwu1yZgbEZREW7anqFVFzZhnxfzBp3huNKDCrNsJbJrEXk88z9YT3hNax",
  "key21": "CiBWB6MQqB8WNDwpC46RVetZqnMarCqi9SKagy2Wounq1rBnJiZvCXFyoGKFG7bJzrjQgB3g2PZpRYAeSZtT8Uh",
  "key22": "4f53VeZT3HWy1U6gafZNkFPigaevVK2gnVygp6oLYyw7LDvv2NAt4h9hBgD3xBt8DXeTZp6S7PFHMRKRGzwbYHpN",
  "key23": "JEinKGH5vHBgF312fbovZHbHM19tj315YSKPQEcwugVqfwtY1fCRK48mkSGjV2wc2ansGVaur5EamGcQjhT1qwu",
  "key24": "rfMdH4J7aYjubsHhYXzbJbnNF4CW3mXSkAyS68hGzT25UwgzDShkqEVjSCL8gVwq8GrFxJL4AXYnycapw2LvwJi",
  "key25": "4oatfsfdY1Aw76FEzkjVUMPgEM8CDfK5smZcU4DDeC9nfqwirCgP4GEmCMANK31DogECG4py1fbYG7XJu7TpBajf",
  "key26": "2o2NTyyrdYLEFtiTE7MpKJBcHoaxYsP5izRn8hsTdQiDRkH2LqwUhfd8PpFyWReTx7ZKfaRKHAo4HBFJ7hL7mnc2",
  "key27": "4MVhXiEiTBBvpygAvEEfDtopBkoV7tnoRyYjqTMqMAHmHcL1NKWEytz7p6jbmFZrJHZqGtmyJoVTbcoYo7amE8W7",
  "key28": "5aaGrxGSiwJ6fYnHUuXXMf48nmnJNJp5m8Yc7QBuV4Ks4HKSdX9Mqvpq37FVbShpfPG665SLHVxCy2XJZoZfwFsT",
  "key29": "2mq9nfq6H84Zm9QEawPHvQ46kvcqZePrCdbrJJwzZQVFPHtKTpDCKK4jQKEHDpxoxEoNHTjKrov9bwUD8TUQiHHF",
  "key30": "3NhaehVaNDW9Dmig83zrvVMyV8HFjM342WfLtTeTdn5jZ6JFGoKSFVuyCXZReWaYSe26zDqXtiqYxV7iTJAdtysi",
  "key31": "pCEodDmK4mF1ZaxWZvHAuVcdyfHpfnmyYWNRUgkB6g11dzCYc7ta9PLWL935mXXb2GuwiSMjyYnnW7qWpu2mHPa",
  "key32": "GZUFNSDZt45QRA8jNyvRdxxeGtCqaPWG7ztfSbhJT6baU9B9iY4AqcbJ6PyYBsJ9TSFTkjotEHcZdGwFkYuX3Wq",
  "key33": "5AY3KRrkJag3bz58fvQxgkBH5HDvHBR2bZvBDZjh28nktKwcWvYjhmt7bwqUq5F9U3SDBpDXVVC3G7dTGRnUUp5",
  "key34": "2Fq6QKWQ1G3pWU9ay5wgLbEcNXEbPszKXwm6z8kxUuUHeGnRiwNNnG13kPJJytvppeStsjdawynLZzxHNZnT4oJJ",
  "key35": "4efioMMYUBtihWFn4bSRZHe3Uij3Xae5mcLfjFZW16GsoqWnV2msN8vATcurZx7iBHaECmQjBw4NcXH7kZQUkdpv",
  "key36": "GVcWmtFBdbrrHDoyovaEeSTfXpXERy62ykMptReLF9r44gvzxpewXspAum2mc3VNxyQ7cAduyjB3NrL25WFY9xW",
  "key37": "3xPYBt8YCyqm7Bg2J2pe1vz1xYCqhbjHeS1ZkwnC6kFVNaaDLUmeqYZCWTShG1zxDgyQTH4oEy4aYGYxD7f79VcE",
  "key38": "46GzmaaztFbCV2UZ2CobWHAMQEx1XmdyoePa58qoVBpdxNevujVHGtTveg1cfCoiuSMiXZLLoBF6dJRLjBMMKH5N",
  "key39": "4XsYD9TQBdhNePn3cA2npTMKCfPZQe5q511N5XoZBnGkzhJ6HoNsDsTeN9GFX61s35m6U51pgWBK1T5nY1b7ZuEV",
  "key40": "42SvrGGHhzAMb2EWPE54xUCTs1qXrCS7MNwpFHHLEdfF1NkEywLk1x16zTo6qAM2ZBPxzWhoXkJZHZR4iC18vQZJ",
  "key41": "275qQVU5GWXh9VWSLBqvTZXTMZatwKAFFtfDKhkRdW6frqYst1QfR5syDHWaUmDMhKxeKRxRpiVNnBoN8rwHEDQY",
  "key42": "n1no1JQepiPMCCRdQpdhS2EE5tagPk18r8T4stgsocXEbEvKAKAw5hRbGwDpXGwSJorcCgB19pLRECwG6JNLrao",
  "key43": "2UomEpHWBPdJDiDcoiVmFFDeyFEgMuFvwY26yGShzbC3Z7U26NP3nMzKmHquss2CFN5VqJJExuHz76CAegQiqCjF",
  "key44": "575nUNjVxRKUs8okXRyvGUsq7WbuxgTy52scjkC75GNYFoQ3CSCUGsyG16eL51hSHRbPTqyCAFa266AVpXu41ycv",
  "key45": "4ViDQz9yYgzjyqfHtrwZgXbBjoqeqSjeFQnD5ytZUFsiYqxD4W5TZ3HpJiNViTg57abyXFGsX1PVcZ7unPLXMvWr",
  "key46": "5d7PmxVeAJGj3xQVDwFZr8gCYBCbRUazRSzCFiGsUzAgmtTDcknaSZnJPxBtiVPEonduPQr7D8XKpUCZ44MsUUm8",
  "key47": "372LbrRwn2EiigEbUD3VCrBxtCneMBD4o2fGYsvsC3gJSqwK6GiUWUhHp4HSTeJ5G2exVion6P1a927YPXcttgHu"
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
