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
    "4AtK3FhQebhNiNSfKm2AreTnSQ6dEvpjSeHPY5gQsKMhEQLBnTeca8XWgjSNscXcD6pcDEd1mFRJ8GA3RmzEc4Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frmxhNtDuqFLuSYtJWhAJCDLLm2LS3NDt1TEyHH7shjGu4Sf3EqrSRBydUp9Te3Pw2ZE5XYud57GRPyw9d1bSQB",
  "key1": "41111Pz1ZpC1niBhuXhzz3sfhvvR283c79iNsKsKqPq4Jd5Bn9VUruEy6oWS6HYojWzyNpvEVWBi1aqS68kvjtE",
  "key2": "2hRrVeF9WXbc67qHkQyqjfCQ3zBx4ddwjH93Be9ysHgHsKX3oWxtaWTwmtWEBhya1ghPLjrukvDKttqZPHJmE5Lj",
  "key3": "5u4dEzooRgzSZQHtMFmK9EAu74ciwc7mDZoWjCniBbXUvaiUnXB3ZVqaixVh3dHKAXzaiGWqHKY1G9gdi22Sq7FT",
  "key4": "3RuicnRHFUAjds6vCa3gmhHR2XtbQFvCerr2n23XXaJd2THc8JvWr4R3rxWv5GM9c3Y9skdDPGicSiYPsiSHhf7E",
  "key5": "3HVrfWVWw4mEm1qwRuuooWk6cwDTMde5tdNvLK15PQStxwxEmprDMCDa66sLuDZ9BJPkYXaHW84BQtXBDPonFWDm",
  "key6": "3Ex1x4YNkmMjXHeJEzudzugGfAbkcZ7PXKrrezdHpUayYzHH8qK3ZP8n7F98TKzkvXzEphXuHuvRFPy7qMTLGvon",
  "key7": "5qD5yxnMBKETjGwEU6RZfXKAa4j4ZfpTZUpDpp73vrKtG6sTikSg64hyugvnc8xQWyEjd2j6SNgntZDdVtmmnfdf",
  "key8": "67niDKRzpEwKAUKPaGAvtT84i1JnPUiPpH8BjJcmmJnNgWtoNX9M2RjDJcgf2qbzPmXPbRe9anhUBe9FidwoYfnB",
  "key9": "3Df3vSxuisuyQGGpMYa7ZXobrPnP7F3T2SpNEb5NpwiwAzMT7uCmTNckf3frEZsTiswLbVDwRBMM6sZzKtaHshV7",
  "key10": "4E82qJjjWWfAtiQA3emi32oyxdciTBfVUooZcLBfTd7NXg6pxoXJ9vkLduhR6MsLzdkvHG9w2dpHRTdNNhsXCz9q",
  "key11": "4dmawXTyK8VThPvEpwtasBZxuTJkQTjFe2qu9BUCjrio4N21uUwrwxLj5YVZoW5uM3a7fP1EovdhTKr6gHzb6UBN",
  "key12": "4VCdAKs6Tg8747wH1jQxJqkXujqbYPUynG8uoZqLEKx2tLQgXPbQwtXQYMvPPY93bhE954DvcLqF8SgZL4KTrtmc",
  "key13": "4UzAyNNaczD3thZD4Vr6aMhoWAwd2PfVAGj2wnvJSi3mYaaCoWczMiAd7t3QBjg7XZKmsYSez3iKye7DGpTXVw7Q",
  "key14": "3HktHPhT9fqbRmFzUKZmRvYxJ6KVFa5kEKFaSgzBsnCWyg6v1VGwPY8j4crJ94VU5gemfyyRxBYxJQZbJFGpMUYt",
  "key15": "2oaMfbSbnFL7jbC8Da2shTJNaA781TP5Xu3mY56othKNJC2DyKMonFpq5MJBkGWy4bU7bffb9hGd623QJqhsz5gC",
  "key16": "2YcUc1784mKnWF7GVdJVMugAQrM4y42FeAh9SWJiEjc5VK4MGDkThMcfo1T1Le8jAn73f8ybaaDjj5ANvr6bY3Rz",
  "key17": "3Ecz4Yb9pM28Y3XLjNhymqThjEgexbTzXhkSQfvi2LHDxferDU6HcAyjTwHKyF6E7mwzLbZyRqkiztFT4ZBK5CEp",
  "key18": "uetyBviE1o9zWWsDeBTR8zWhvKNYXRGJRwCKG22CxxzQfx24A69SWzkCUJxy9qeqQm3kZ548ZZC6EJAXFXUYyCF",
  "key19": "1279EHhy91KT1cuMoj3BPGMiQQB8AjNQA8JMUytM29NnaS1zMcGLuCTbfA1nm2PievVLLeGSKmsQyR3xw8DmRdEF",
  "key20": "sAUPkQv4Xs3hSsE45F9eW3ZL4fkHi7823F5SK1mb4JsxZpCLS2aPcsN4P7NJe55s1EYeN3yhtuV7jDzGKWKLX1k",
  "key21": "2Hjty1c4my23z91WMq1EUgdkbtKVQj7pxWm4mgCpLg6LuHPVD5rrhxEMxcrjv4Z7JJZCZMcAWsBtR46Q3EcobCzY",
  "key22": "5yAQT2Q3mpbHE4DLKrboGuwCnXRrWQeUfHUgZt8SVH5H3EpuxQKjPHCujsojJhGa61hxRrvTnBeoLw2VELxeEjgT",
  "key23": "47UjrdSjAsQu5Zun1UExegimxzDfnY4PvXhX2f6X92RV95My74GGKSsXfvhuoiPwYsaB6QEzvxo9hDRZZ1yeXB4w",
  "key24": "ZqVFD2DVUEQN8hbYsCGJ5TiZgsrsT4in1YZ9k3i9MWWfRCNMMgkWjjV9mjUkRH5zTqkSLB1Y2euMD592eKfnzvi",
  "key25": "2QJf3fupCtwbvabziMnVZoMdJCSYbmohExDgUoKGuXW6RNQ9GLe3NUnkaijBdue37vCGM6NVqxu3fLLBJnXyeiCg",
  "key26": "4t7p56YvHQRD1EmH5PUzjpgMW4E5zfUwZ1NPyqiqMqaSEou9K9rttbyVQ2rkF6jnF4ksZfqaEBQmPXu1AYhu2enm",
  "key27": "46UjmXUjNuoHfhP4e2fQboyCtEHiC8Jnmwb7BABnCB2jwPYETtcCC9GiwycDVEaRfg8pJZi9FziZk3RMcFDkEXQo",
  "key28": "AQUHTWhvYreWiw7iWx95kyWBUtymqQELfqtdtMDxFwT52NEQwcrkqYQR3Qb28BXjKra19QZ5osC2pgrrkfRDUM2",
  "key29": "5TMifXi5FyG7NPUUaWk9rfYVn9HPp2MjvcDFi7zqoxSDAeeYfWLkkeoTSeZEQvmrvvsVSn4x4VtBjXdgUx4vov8E",
  "key30": "zPT4Hpz959g75CtooHN8MVcNnWb9btn5zDArb7Vym5uvFTRT3o5XQ1FYg6SzJQH2JrJPNNEgtBMD5q2zF5pLr5s"
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
