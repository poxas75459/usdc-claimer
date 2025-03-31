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
    "4jegFoXCyScfU2fQ1fVEadtZEim55QtrSRoxoFtQCdbw3zuNUNQ4bQ1KfxpPxt6rm1rA4JreFtRPNfEGprLFM36C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LpB93bt5zBRmaCaQQbhxgDAmF9zana4J16icRz75ejpYVAss5oPGFaKA6VmDU7eecEWumVpbYDbMDNt47FRrxX",
  "key1": "2JZ8WDgwj7iukbjXuf3u5zNKzRFeJgJv44qQmLwt7ejgLstGSY3KJJF2MkXiJS8VE7xYyvCU3UEuu8c8pH96VVZy",
  "key2": "8CQouXV1ytLdNtcHbdCLVxrNpL37TEJ46ZNA7wZkwQnEjXaZRcSh4r2FaoA4WsF9TAZpH6qsDJ7uqLqPYij316z",
  "key3": "3pAXmM3gcmxNvhiE1zi5vgGfcpmraJfNYszqvuNooU9XFr1ZjZrUwrU9mmJJ5X4wNu8HHJGJKVeFgnWJsgETDshD",
  "key4": "4RWY24LCasttqBhsGr7jiXDLLszUReMG19dZXd7Pu2gVJ19SM4Mxp6xCK8CwCLM2SRZHxyompPM92hSxSUzr4PJm",
  "key5": "LQN2SCooz9PdsicFHFbV428aAfSbcTUMxBupo64YwEuCTownHu7cFETjz6U2un7vbKv1McocJSSufEjSyUUC5xn",
  "key6": "33fyBzWLfYDGfVDXAPHRBUJYpphCGuYJMduZb8g3bnB2hYnYii6rApsdPnBrfPiDR49qfVPvefK6crgbNY4MoWDr",
  "key7": "46MfqRjqfoNKrWvwLkCvZFWk57wtQ5SMbqm92Wdt4SuJhtv3EU45oqMM2WC2n3Xef27Mhkb7rqizaxT9bK1HC9fg",
  "key8": "2eWPhZBzCXsoUpffDeBmj2rx1Hx9RqNPULvMwh2M1FjP152S6ksM7WBQW5KGpMqrDRECfNns5wH52ipxaQm7dF6j",
  "key9": "5wska9h6NoyVFWseH2JxCVAE4VqraW1DdATYgtYKP4NH83RimSuDk9g5JnM29vH2X64ZiZg2ufapb4GUnVsCnbYN",
  "key10": "49owYsBMPJbEwxxS9nb9ezZh6YYLHKRAP3F6spZGYkrYgxFgTc9nsz69eu8mUNCLZMHd6cNhTmN88EFh5Jb5TM86",
  "key11": "5acrdt3ZQaY334Dp2PRbZnvaFaigstuApSWqECV4ryQXCSYk9utRgNtgbE5QM4CDtqXe27gLKqM7soYE1rFy2iZi",
  "key12": "4P1ALkiqNqiBRQ2PNL4DV4eshQGBTeEktQ1RH7JyWcS3tn55verfjFD1SPz1jm1oNb7D957KSBaYUSdpRNvwtmhb",
  "key13": "3N1fLDi2nyWRdsYqzJDyFbsavTFhYa9PWUwUjDQAxvp7ZKWhxBLQEmrDFdX71gpKwt4yF3248VofBWZh7n5XhwV",
  "key14": "4FwkL9sxvtocGX5HH7uqdHnaTqJSCsbwRPxDnHfKAe1QguquogAWMHZoC54dNG81teo1FuagM4R34ZtCFkPTGz9V",
  "key15": "5wecx9uftuNe3pxuF84BZe45iVGgYT9sBCRe9r2pig5mPXwgL4tVyts27MND4vPXi9AQ5WL544pFicr54ZDHeMjK",
  "key16": "31bDa9zeemSw6E5TTsNUM1PYgSXJ642pxNCt4m2GRXFP2ZXWx4kV7iYvebc2azG8v4Xa3zmp22MMsPWyLViPSXWh",
  "key17": "335US3mMbsERMRS8hze7bZ396UtyxTFP7ixQLNJMMJvgoSBzeFvHJ8gyazLqhFAaUJGgPc6FdKfL8BmwbxGuJAEj",
  "key18": "EVtn9pUx4zoweaa5ZbhaQjawxnE8MX8Gtz799tzmgTZgw8YxkvKz9nLDFBgz2Lrig4ShjDgnXLHc7hF3FcdcHad",
  "key19": "37dVQSfhVxTAZyWse964mzAKWtULzGBuXB6n2geVduzyEBDfVbF5vKB8o69gLu5aruTuMJi9iBJufUuKMdfUa9mY",
  "key20": "8yBypzpVZq6D5G9YL4NUrHmFHNmZkQLjpzVmSajDReEn5wNaaBtAo5VtByBzSFcjPDkfs3J8Zu24aSWCxJyoRNh",
  "key21": "3AQMyLyntpDowJKvBYjnCezJDekZhnokpWA5tvpTm3K8NLYvb9LNCJt6WLsNoqqJH2QSTWr8JErNNpANsZtbG6wQ",
  "key22": "PvQJtyKazqLU9HtY1dU9jCx39dddws2SL8jPBcESNQ2MsySHyzgvpg2rYJVfBYHPkDYc4Kne9vBcnGtZbdUqbEX",
  "key23": "4v1LFpsBFXVQN9cmSUn3AkkgHxdsE6QCFe1uhkQGopuJfZFbjJ5SYDPqaoDRdaUvbwN9dVMWY56THLkmX8KtgAwW",
  "key24": "3un6ec9bLeAYNeAocehXQ3G54v9wEacJv32QpALnp1f8Uzz7hMp5GJopas8cGPjHDySGXESw7UUVGomhiZXmKPka",
  "key25": "3ZrhZCLyYT6FSkGQzVqYdQBPdrtfLjGSdM3D7g1Lgwkn58iptSVh2Sp8kPbmjBkHMjaehp97JaKMCmD4Y2k6MQW7",
  "key26": "48K2etx9kgrxtNZypkDLsdPHDY91N8YoJZzR5kohXsTUPMhq6QJohquccmL2c3Cnoogso9RSYbJhXAJzxKLCeL2V",
  "key27": "aVrrTh45xbLNnV7nTd8FHQP45dVDe745X3e8wxm2MgaDmJvPaxMep8bhBZtz79k7CxzuZjNUa4NLVcJQJ1LZc5J",
  "key28": "57553JJMxpCuPwgrbYY4PBbnEcnbcc9dyXg5Pg9JgiKkTJmEL8mXGoKEmRbsbdawdQ5Z2b5i9rDnsgDUG89uMSxm",
  "key29": "4t1jBWR6yfotqFJM2vvKELEZ6FRax6VxWnvYresmgpN7gF793s8CPjzkTu7zcxPgyBPd4thm9FBWxi4Xz7GURJTr",
  "key30": "2zndhovBE2mJNpzCuCHEPkoV9Hw1D1yoBb8DAoozEWNULTsRbRu1fq8euAu7ax6B2qaNyenTqQ7K3Y96dQQzHdrp",
  "key31": "PgVGe2j5Tu9UyfboWz1x5BrKZQk7t6GebhKev9RhWuiPETJXYTrkFJRCZgzNvwM2sU1DVSUX3DcWzBJ1yD4qUy9",
  "key32": "3fCuj9SiAWP5b23WRsSm2EHQ3zFit8RWRHUdwRBgYLNcRJcETovo93Y9ZtbozDA1xa2WfJD4WtLDUo7wxuS5EJEe",
  "key33": "3j71unhErDL1EVKkz3nKsx9EvK3KWMuhbqWKC81KMKXYBY4WEymNCcTbdjzHcnsFgkvnGWqyHnkvNNzMSbzhR2mn",
  "key34": "4niSEy6hXLaKYWnd2LZ8CnGr6yvv5hiQNETgv9YxPnTn1PgpY9bbDZhKAnu99Csp9iNaaZRV2gqC1JsdefhioeuX"
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
