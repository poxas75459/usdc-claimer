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
    "5nNvDhwX57o7pgwz4rxdT2gtjsfN2WF7G4m9tPEPjcv5Ta5VwYHrhZGBP1rQhUwZSJPL4roCT8bxBb7po6WL1QzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Np81CEufgBc3roiePNj8bmX2ao5gzzvs5qb7MEEe9QKXVpsCtdVpJHZMv1kujAqUnwC7EbdyK8waqcjGH4sVvdE",
  "key1": "QyDdPc7X8EExHwtF6s2AX4PMwimkLawfqicU1QGrAJNDbo4odq2oMxQCKkCJYJ3Y1vXwGfne7Wz6gcpjR7QPeme",
  "key2": "2ryqDHFURFZGy1HyjX83f3uELxyDqWFqPLKkkASDKRyifAZftSfiGDSXYRbrzdehj9MSXL4vV3bSwxiuvggHm8UZ",
  "key3": "26m9pjcJFoz7w4CBYfE2DEa6HXxRET6s9e3fWzRkEii7VHH8sjefuGs4bS9Ay1Vju4htBTwtujzyw6Ex43wtjMMn",
  "key4": "3e2YZEBRyhZLZH23tzTszHozzr51m81uiCEbtz6u4aBqVRFUDMiD6bDvgvevfaBwurzaWQ2HHCStmEBC33DsBCmG",
  "key5": "3qzxMzPoyDYQQ4j7rWoeFeWzdrFVNSBG7oWNc6Zdh6Kktuxu81pLGD8LxfCnDXchy4Sk6gF7JA86zHngvAjigxtp",
  "key6": "qGBPBraX9WArkiM4HexBijgTXs6sBY3RGsYEiVVxqHPFoQ2LhzfkPhWxfrBdqd3fPya4Bh4d93aw4TRvH87dCYi",
  "key7": "5UNXsGTBGquA3GRasRsMQAN9br45BhXBe7aXhf1u5JmwLr6mTJCn6Qxdie39BNGV6wWrnBpK6LSzE5PWJiUg8Tx3",
  "key8": "5TYwVGUDYZWsfCNVtDJFEgJa46NtBvopniZ1iyxiBGZSu3stCCDdqkg9ugmj9Pqx3NMb4PdTKhz5cit3otPpS9R4",
  "key9": "21tqStonS2RfsoGAHLMVf1KTTeu3yVonr9spakDf36BtXZUnvxj5yeHLEr6DfgFnJ4DYSw4QmzGTEvQBkpMF1CS5",
  "key10": "DBNNGaYnRrW9H9uEwxJaPudabePkx5DpDgDuXvFdZNpRAhjJX2i9EBnjPMRG4SNLZeN6N7XLTnzXoMMvCCfvJRt",
  "key11": "4Gj2HRcXpM7VFHocYDF2goS2vV1cbHQDf8MACGYUwgm1BeD8MoEHDnFY8vyqKrUPbKq9H14Vmk46wdbyVj3t1K9x",
  "key12": "3YwfegCpvutWNfT8d7CEKuZZbaTUDcRN8SQ8CnicxP8ySEyxPv87aN7zfQtyc6JhcttjKxSpnaQWte79YK5TSueT",
  "key13": "3nPBZf8CMgw7afCHrSTfXgBi7wSESde1QNjzSpoB3hj3wpmdiaAy6d3REAkBxfsHV3sJnBV2q49G8aN8a3gYpZRe",
  "key14": "5Sp2y9TR2DCjHf3Gos3EGTzSmZ7zeSXVCDTkHLRqUgH6aLxKPqimXNvkL2wgJuyExHrc1Pkp4jMejJWxmr2jyR6M",
  "key15": "5ob9uezrLcBRypWawqEnupMSHxzuHbNKbjohvUq4tcSFnePRu1EQrMx8o6fwMnzyAphrpSdCZrBUFHqxEpRK4c2",
  "key16": "3kZPtGkWNQ7C1caHASQ6Qm38hMhUMqKCxn8mxnHPeB4swjXqoBP9FwoybuQfWrH9FnuagujxWtEe9Trg9wsUY2tY",
  "key17": "2WsAeXZjRbzzKSxfLCCPkQJYBqaH2UCdwtVRuoc3MNioUkWTYDHhUPcd7jk1LLpb1uwhPD7dVca1MfVRh5bR5iij",
  "key18": "67QmQtAaVxMa4yzmbxxj8eKrGdpBx6eJBF3juATbHVgC5E5mtjLSC4ESjZ2cYXxxHvhZGB7s8htyKFGLdGTr4Bpb",
  "key19": "5THjhNpo9oTtDrU85jW2ZzuL2Z7Cj69AHpq3XEmyjuwkGBwG4L73s9o1DnMNJCi9ZXKS6o6HTVB2jAK85LeaCEs6",
  "key20": "4xXyG96ivisvyCYTY1dtSasyeS6Z2LsVFDck1Tqz1GBamK6eMCFC7k5euRKVgbMzgJvZsZixpGNe4dDe6E47XjBW",
  "key21": "2L1WREkxdVewJtGLNDwTvACkDCH33tQUDKwBAKpznCWu6ZrbCT6hHgQAoJTAiGXHvWxLpHfanTSJUGmERJuucfgK",
  "key22": "7q9e4S3SEBkaLic662AYdbmA3u9BK3eRvdDqKj2wDLomvitrgUC8kW1ScEZ2MQJeq1dFbHPycPSdqkeptybCaG5",
  "key23": "4JWt29z9HBnDJYoJ8vvfrjvFJHYCdzH8gddvdAagBJcvoZMrcgwo8cJ5zb8Ynbdh6t4eMNvmA2zLtTws7qEF9Tgd",
  "key24": "3rAPXzf7n3XHo5aiavUCBP3Q42e8szjRsHqufJrtGyGbn4pVWpFpUyvJ1jwacUfUTZoMajgWS3CEiCWSiXqMZC6F",
  "key25": "2ywLcgkkjBPG5GFHLJ2TLM3LSf42wAVNm1Z242meQshjSJR2vQQZUefcNnXWBkuvhYyEv7jvxoArnMjrSmMm4w9a",
  "key26": "31ga34tcfJFguisLEJDgxFYXeA1hQPWF8hyLAADuAQakCnw2uH3SfGehtvex4HfWCtde6stuDAGXPjfXVjCAK8uK",
  "key27": "4aSQQGXG81tK4ov7gajY7efGtFHtcjjE1bKoXN3jgxu3Gy8jYnY8LE3jHSXZ4JLWgSAUXPVQvqpz8Ufv761j4NiA",
  "key28": "3NjR2uehV2uGrejJJgrffuhgW3NEaXWK3jHLjPgJUTEnff4SUPWbBLSNCGdokJ5L9zomWcci7tJ3jPwfPFUHvaTZ",
  "key29": "TLnXhZihdS8d2d977ANGqPyY4eTxQ85aJyimE5iwPTmcssstwpXJQRt3iAroAZMTx4DSoJNsB9anwbaaeCosi4i",
  "key30": "2hGvzYTmPh8cjmiavteCxHgwjHPyC6tVY7q5u34JbwkGzh2Pcn2ep4ymCtnpVxAi1vdkaaLdvmzk7ax4Corndfay",
  "key31": "5WF1sFdXng777hVscX3ga55B4cHto3eQ67HjAJdkaLARC7pBwL7u79HUaznnH3NY1SMgfSnm8qkz1cF6m5ZpyKg1"
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
