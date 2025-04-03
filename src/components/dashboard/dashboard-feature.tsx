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
    "3EzguP4TJc1AJx4U223JMH56xXVaCZPbUaasXMHnCrLuiWcteUkgoC6bjCBk573WTw86ZVEFPjLwqT6U9U31wKs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMkGU6EjxdL4K3YKjdhcXkukfLKvBvEGamdzCrTqq82AW7QFYnQwUvGTkaFmHAiLKdXeZTTAdecvuQmNNxkeKon",
  "key1": "5N1Tu91bbzHSYyxAUAmCaHcE1aG1hhdtjfqrPRciVvXJR4TXHqiYSocgG5umVpXjammtvW9RexvHsGab5siDZ3P6",
  "key2": "E9XD9cu38y7PcbbrRMWF93Bg61NseJJyjs6pc8XXVW69gDkcLPF3r7ncWgryVdRsK8BySMop9hNMQxzGFPSEYjP",
  "key3": "4pVSYAEqBKYamavGiqZ6Q2utDQKJmWUoBYV7daMxud8KCypVsSWpZYX9VVVSip4kpauvnWu4SM2KN7dche3pa9Fe",
  "key4": "2HRvKGhy1vPtKdDw2hFpfBopSUTQpLLanuu4V6hVLbekgYhH9SW5kasefuA3oHcTwFo2Bad7bbrsDKw3W2FNE1Zb",
  "key5": "547J9sLDFRynhaRQsmHSsyWYJbS9k8tZ48h5SX34gcVLAoi5EiWobva4yg5m447wpaugHRcQWrLavbpQFZxXbVC1",
  "key6": "2WfGXAX6YbY9Ha8H9ucq55qCMkt9bMGWr6e236usDdMnjRb19CM3PDvaNkdPHiw4HUXJvKSHfZrprXuMPofx799v",
  "key7": "QzB7WawpJmu7dLVGB4tEmqifahPPYAo7YysGVpmSWoW7tETaqvhUBDob3K3W5GEW2qk4a2Qq5DZDjSCyD7CCwUb",
  "key8": "2zz3LBi9RSpGmUy9pwZeDv3GqYhsVcznsFQ6RygDRVu5Qtu98Yv9NcHege4G83QGLGACTwhBhBpmzjnfeqqMq2zC",
  "key9": "4o6pp4hdDAB8Bkoq4WxFCBmR76VTkKSCuLpTWgXsVH3pm4aqEPKHAVc5oyGFLUA5THx83MY8K926xZZSNFb9646N",
  "key10": "31pfmE5FTvPHQu6CsHc2XHqP1tjnjCWpNEeMSJHyzQCopGsvUkdkxuUFA33WCz2LdF7dxAbUUZc1MkL42pcEHghA",
  "key11": "4kSmqSpnNn4weWDEZgfpLFhN7JSvZVjcFvUwVqyrc2PA4nhXosizupw6Xi7SawMnCh1S9TEtAPDtRBztfs2duedg",
  "key12": "4eqUQa9ZJ9PU5TnYgy6NRMbEpqKJ6NzVYVutwCzHehfuZu9vjbNKKwB2K869pgSEzaJwWaEm8y85QZF5JRcSPV7B",
  "key13": "2KfD54H3XZSva1fMxtkb5ATb4F97rzxah616WLy7iNSHwH1tmxiZ47RJrp6M1QP8TbzpWvvH4bTAspPL2NBG8MHu",
  "key14": "3pMkKRMeDMgP3R2VNjjhNWu9sW4QG4Sx1kVNVDcmq5MZpwPB9sTPeuYypJaAhX4MzN1aCPwx8bfCyBzT8SPq7g3n",
  "key15": "4foVySnY6Tv8R1yqE8Yso3bnRZLccZZqjkBpQXmWCp5XtdwqUoynJfS2gMKbtYZ8NJrx421na1wJmpwJSug2ShWR",
  "key16": "34762cp3W9e1ogRiFE8dzhJj7p9Xf3EqLYtBsDaHJPK24dY6HktUBFMxT3qbwCY3VBfHcFnLYac2QhGGgffQcYAc",
  "key17": "Qp87H7S6fBAbgQKQ7x7XtTVjB6X5bGeo1secU1586EnEXeVZrWcLsxNi4uwGLyjVyCCENoKNzcU9VaJ59ytLbaT",
  "key18": "5AKMpfeFG4TQZeDE9nQVSp9Z36EqrKMkqGTtgixQRvDtMEcgzHfQ3d5iE2pvpuAUigmpwiga522MVW46TxZQvZK8",
  "key19": "xByB6zuNYS47tLWemqcvfneERLWBK2NaRqKznX5XfRprkFfYVyp2zUiLNxAJR4PptbCj8UrCaaEbAVeVcz3yL3e",
  "key20": "4AwCPDHQxpxp174rYxP4cSRsLhb78vvmmUPdTUixkst8giMYspCS8wChbzzTPckBPBAkmqw5tPJgmtmZiy2cPoPm",
  "key21": "UjErPWTbmQbaVSj9bKTk2UMouu25noujX15gSqFr85TrLLJXGDhBinjeBPuLmk117JoNSXpYwyxMeiTQq4gXRkh",
  "key22": "5Sx2sqmv2gk6owpWQNhhzHaRCPqYCmDDWra4iUhNCFNmmf11Ur1XQdVKW3WEXxNiBY3mg8T6evVitJGbTSEzHZnD",
  "key23": "23NL69iBUmPCscTGF8oqJUnrjwHFBP3j7LERJiWmr7myia4BZ3ZbncA3w6BKxknV3KcqegisZ7akUZGCNv1uZJXH",
  "key24": "4TdohFGsXfEmgJtG7A6HsK7dVFcguShSyhAEQZbJKzFRLNFBytRaeBaPDMqyaR7iMxYaf7SqrPT7DabdqP46Xc7t",
  "key25": "pTBBJioyDviF9y5k5vZyujqVZHjLU21j9QbnNpimeWi8NB6iDidqL3kqoHqTYV49T2PGDJtMmi7k3oP5XqUxD1S",
  "key26": "NBDQFmoP5xbbNRkF5bRupzHWuKB8kJJJBWnuo4QngoQ3pCp89XGBnZzKxdvWxGcnppqscJhaCoAViKNjdDoWPSo",
  "key27": "5oHioyoHZrtVWacYdpmTYRu7dgMcYeFaccVkF71fVrmyvhH7bUPGqSHZrZQMd1AerHAShrD598PLEj5omzMMiZod",
  "key28": "24XiVBhYkSrgEGNPLcxx2dwaThnNU8oit5XnRnq4axT4X4hdA3k4JG4UZexQeKohFDbqWUa8Ywdzyg2fa3Wbxokw",
  "key29": "3vj2TEsMr7A9cMsZdCaxHNMixQ1L1xWhi7oRfGssv2oUkEdCuRKmSNySC8YS4dyWhWvsrSbBertLHZ2CWQjCEa2a"
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
