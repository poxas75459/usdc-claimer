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
    "kYnc52dP234birqKdwgN1qCjGsVTQiawKoAejstTvwigCY2c8r6FQy7QLE9ywqJWwNLHiJafXEbKyU7c9cY13Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfRnmwQovwHc8udunWZomMipZ6orfYFM5USNpCmvhY2ArPNaSvNwQup8C35X2uSZPMYGeNdLcczHSBZQBJoqEGc",
  "key1": "4Pn2bAcGYt9YBiXYiCpBgtnggsSfiLrKigcnxTdFuCrR2yRFkf3n8Xumo1mh1msgWK62hxE4Savtcz5HiyAYaux3",
  "key2": "2FBkbZoPRgVZUnikwryAathNA7Wr73HA3oazoQLyo9viHWw4j3tfrn2SppG8pC5cucJMqpaS2kbfuWg59EgeDQqG",
  "key3": "XSvLW53zEFHTSn4w9JGtvqinvgVXAL2Cjcp9pGahrZB8TbQSSc24xv6uQ9eL8iU8e1HchMvBGECFSeog3LE2ZwP",
  "key4": "4Pg9TxNSx2sVWp8wy99nMRwbQCU5F8W5RdFJtoCmE3vM4kJwtRQgUHLmx89kHNyevDXAUDN7SXeTHYVBv21B7yyN",
  "key5": "55emk8E2ozZD4ix9mhSEDegQZf4Hhf5JRe6t7LuYedWx54Xhnb5etDb6i7qAo3fULQV8M2ooSGQeWNSJhF1iAT1x",
  "key6": "2eHu4bh56U84f7TRfqZdLX1KZJYQjPTpTAk4HpwecjeBZ7Mz6xkwd6kfzSkiRsgUKf9n1XbsBrcBxvRFPckLk1gT",
  "key7": "3wUEfuZGSj49JSda2CkB936AfgWSgzURcsGdxnjEEWUNbr7XqfZ7BwXb4DtKt3UDYWdDVYDsTdfMXx4XKCNddqBp",
  "key8": "V8UnHekxPko6UHH3rg5v69EKxDPzQrK3uZLpa9S1SETiJFakWY13eadS9eqgp3XdZumpUrRGoujBT33YTWMu1s1",
  "key9": "4Yv4dhqb92LPk3R8bpffMV1JzK7eBrMgCq9ZdjDmXkBfCUbqFbRVo3121gmQuWkkGQe5H8fFMBgBEXkzRrsvU6cZ",
  "key10": "2UprSuyvnXEYFHVdHbpm5ZRjYfDbiYMm88q1RTfUAMrVeBEnPQnsg8ZCaJZJqAmzzE6hJ9vrtGCabdfEtQ5jL5u2",
  "key11": "suBnthbaU4uuLUMeTXazq8d3Wy4xKEF4q66QXs3uLZyEamRHjMuhEFx5t8ukBaMMYLtsE7RZJvxR74oVogQ7qyx",
  "key12": "525ZSAJyujuUi1o74SQKazx5swXFVfwCpsQn9oUzHgTEHAQj9wPvQV2aFS3nTcCFqjCRe6DnJGnSQMLCftz71mhk",
  "key13": "2roamBJYSNJiQDrhcd17D4rWwcN5C9mfJtQ6ocUXbpe4VebdAJjSYDQs9BxYiUdrECiE7KbcE2Kqdr9qpuCYKBLw",
  "key14": "3dfQqPY23h7pfmy3nMERbga3xRFhk3YshrGsPJLWEurhHh9TsJC4KS1cktNjaGgpoRTT3SkNUH9ej8JvSVSjFk6u",
  "key15": "3Rj1Ti3o77qA3AbMBgJ9TcTGFGTvNhxG7Yv1qo2FUosdhLYGA6GZC744psLGVtyAki6WrqaZGpGyFZtYNrLfYqb4",
  "key16": "62VzgD364vMcWT9Utv5EUhBK8GmBSeE1V5k1PZovqzEW4tLS5EDc3XJ7nMsUg8xsE36BrDrMCHAQg1zQkqtoZ1SQ",
  "key17": "DcfBkZeJkvSmxECQzVtyrsPCvGtViMbHW1Cmn5xcmke9nf5wVFVGd4Sf6Pg57XQynr7pKghSaAf4C7Xz6ZmQkEw",
  "key18": "5dB6g5WPwByMSyy22dXBirrtN4dW2hj7x86uh3CCKKGhC6Wc3HWj4zHpv3sV7yw5jMwhoWDpD1WDxCAJuZfyrh7Y",
  "key19": "3dV6N8LHwKPMAvVBqM9oLpf7jcd5pFWBAGNSLM89EHtYfifSt3vbnh4Gvosqm6Jz86ZpdgnzLmu327ausyXcxPeS",
  "key20": "4uYCaSoQ8wfV1Ct6F9iiu47mHcoJkEZBrVN4XyQyzsc4CRpSziH47WZ31jnunzA7UxZnfa7pJLjw8TsdhUdXoEKy",
  "key21": "2e1T5cau5LpCGKpvxH5cCRTYqaPxkDfpiGfxCxwSkogYomhxSpszDdQCqiZZiCv5ipBxHpnygZhRGG9wh9zeUCjd",
  "key22": "3tbYYY14FBX3opAg8NX1jhNZ3Nd2o6eXgyV9iY8iigSanvN8hxqFchr8PjMu9k5C1W2HE5Jvd8PVMKu6XRWQ1Kyp",
  "key23": "5TP28ZhnVothP3kzknMsS6yctm6KNq46Z17DafmnnqgdNJY6k9EUp7fkTyTX5tktGu1M74WfDMftKQ517YArPTU6",
  "key24": "43ngH1yLa26staJUWWCBLPsM3nVC5iDTYG88TyCm8ZfzKiCfRpRRQjFMB4mTd5SWR9MVyXHcybCvopWZSLXyrVqj",
  "key25": "4okTtqRcWfpr6HS1AqR9GJ4haxYBZDjEARXPbn6UjU3Jzdi5ww1xFUjm3ZtNz5TqHTRGnbALizPNmKkJXTgn1HKY",
  "key26": "3bANSHYMy1ch9NwQVrhoAyxpHAwvxcEUgVDmXGhNnjk5WrYiXGd3ZToADFhPxfzDQzvncaodGcrjuhpcn64h3D7r",
  "key27": "4aGxNUk7HTTgH2xcw1v5Rr57vWoHtJKnutnMf6T8ejf7GPRqcZUuSC2cnbELpwsbvd8PqdtAtKDtmt2NZ73kUQQg",
  "key28": "49EiNW8swSphfLDmD5ggZNje4LmYVr86cUJGCMu2cU5EoAuR4diBvdjJCgJVmhXPZpLewHEwKmbUQE6kGhFd8KpB",
  "key29": "3VJTWnqp4gAXrJax2Vtajj8PT89mHYpAaYXZUn4ZuAYSicz9GiNaZFewW5wczxmBkrqqHUBuzUcCWZRLQyRctRCv",
  "key30": "36hcbKWWTAPnFJkxzNjYkWVxFJqMhS2uGt27w6mSdfdnjXiqYs438rPyHCmn66EvGsE5s2iPW8dCbGjwcBEhit7v",
  "key31": "4125EdLkEDt8om1QPJxgU9cPwvEcFV8ocTp7ocP5jh4WRbC6kCCunziWTy7Z96nB3xAkujjQX5nNkikZaev5fu4i",
  "key32": "4JaAfEmghRXZCGGkXSFCyaikS3NuuUwZdbGZPmt7yMTN2QwTc3hQ8CHaAdNz5M4TEJKG1rhAQwp3Q4annfMwCTVL",
  "key33": "5XENLmWH3epuB6uGTvgwKsXPR2dDjVYrYrvVuDvMERW3Y1w7NepdGZ1pPtRtm5LQrJ6iTsBLs8nKZNsQBAKGn5HQ",
  "key34": "2bT8q32Dnz6mXEqAdp29dZBKy9uC32GBt61JCiWtB24uRVqkRULfMDswVVSS8C3hmvfdNtWn2oUnyC5ZiNyxyQPP",
  "key35": "428L4kLNSLAEYgiAtmud3P4bbTFLs5ac3VTmdsWPUG9oeh996XJQwYGfvADmP8pThjcKxtKUK5YXzthAZ7XTcbD4",
  "key36": "3mTiWHjiKSme41SnGDTH711nTnxDgXaiHYX1aHiD3UrCtgXew8y1SsVyNFarJJaFwBQP3eX43yVmCviQTzMTZMVH",
  "key37": "26kBM1xZHLU16LUgedApCJ4sfkgj8iG4RhgT5etWpXF3G5i8pppsZq6EQREWQFe4YxjvEk4iVxQaAZyVNxfo3f1q",
  "key38": "2GGzPn4a9QnLkgtZ681LQ4cCNmx646zEye3WKHa9GtvAHhJFZuEbp6u1Q5QtvJBDr6ZouRT32JJAAMc7RGnF5vwU",
  "key39": "3o28PX9iu1mpQbQkmjC1GvrhkXcSFe9UEHmLqBbUv136u6EvmcHR3KwfLy7vAzU8Fss3ZUQTxCtkzqGk4q2QSMk9",
  "key40": "5EFW5gbRKh7LLatWX7ptCpPjYy5Dc2Gv1pcxCQf4H4fWjyz75QKpwpKPHANXTTiP7ypwcNx4M3NnA3maJCqgG5ny",
  "key41": "3BUqKmbaiXh3n3eE5BHDK6RYiCiFTWkSNr57qw2jdqkTyJFKFCgv6eVJ4burrPHJ7bC7N6MGj8HSu9E56J8CyRbx",
  "key42": "4YPSoWpERcqJZ3GP337VH8gUPnQVA7hQ4upJvTYqpAHRY5wBkgfApNoaqUGQaDKVmYQbMRWWNDcPpadNZ542XH3F",
  "key43": "4egEJbgvMFvwCLeUk6gcg5ga7FWdFtL2U9KyJaiDqraGn1cLnigVwX4Qnhk1gUmbdt3jtywv69csWXby6hwU5StV",
  "key44": "45kJ5QevkhZu1Rw1ZGJTyuqfmkq8WPDu38x4jAdAeyaLA7EFhfnQxWxFwxmyfNYXmZMtcrEjyGJiFRsVKixwpQKo"
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
