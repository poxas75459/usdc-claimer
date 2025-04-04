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
    "UmwzL6c6YKqRhKXSMM7sihDdfdPm94Ac1tUdYjgZzM3R8tqy5XmdG1BXHxtPtTHAwEoxc7wFtYJUaft8CxrjcVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5AMYAQbuXPb4X4MGqXS24Q16V9218vuB9FnrXKCCRxd3N7u53Fp4RUHjqZH3vCWj8ZSR83YuWVaLkNWYYNkcdv",
  "key1": "veG6HXhu9FyKW75Wu6TRWk5RhjJqf6PPs5EgYrs1djB4619tfvLqR4B9ZnYP3pP8jZXfQQGa7oiBq7qrnLrDZm9",
  "key2": "31R1CZpucdNbbEKQUg1rVGXjE1aXgYgndcA1DNBqxp8CatqLoiwXzoVrK86GZBGhy8Rnmb1GYSNwbrUy5AfWwLbm",
  "key3": "5Q3H53BVo6hJ5LESrbWMpUsYrSVVUSb8ajdAwWXBmPWets8gfE9jVhhrqyW9ugyghuXUcLcqP9L4WCsj67nLvffj",
  "key4": "5uM6acXsycDfzUgZ2fBWkcBTwYrv8ndMaL8PAsYYGTDJQSQrxZniWVwT7B1v9UYJJSsMYwRDNdQQX4UTWrNiRRf2",
  "key5": "mGW7torVo7kCA5Pp9YzSjLnUE5cSCPtqEYfgYV7S5gRF8jzEX5pm5ayuqemNRRYqVLeNuhBRE4TUVVXb4DVMMq4",
  "key6": "66soD1RkvTrNc2yhGuFz5SYTyczdxZcFzyvddW3pStyeLfZc5PjVZ6eAYLbAb6AkWjq1subDvnV6ChfUvZRZ1fAy",
  "key7": "2FDT3C4dVSXcSA4qKSEP7Wd3bTXr8DqHa5otxXnXRvFA4iDZWNVXtriWEnZ8EEDEjMZmhoY8qAsvqEJs3KDZ2Nnz",
  "key8": "4k3bU6oB28bqomhaaevvWkjjuxNjYouhKExWaDJ9dw5TwKBWphMzyCqn9t3fiF9Anu71HqqwZM1iWC5tARZx7Mc2",
  "key9": "5qTATDNhM64Bjoit1zD7zhPdUY8PxvzRJk5s2rbfZL6CYfR7YqpUjtrVpF5smRxSE93vKWxqZbB5KsyAADM6LX2b",
  "key10": "uheEjaZ9uXsoFLBEL2ZFYY7GFzBadfeEwkzKFufsTH3KbiUDBQJb87RFkL9d3Jzcf1S3qZCMzGTMy3Lx9K8UFU9",
  "key11": "2M9cUe8YZnX8tZXHZEKJkEvr9PnuwY4mXbsB6AZcoZvE4tTv5xs9Grbd3tXpegSiab5cFqYnCRjB9MeUDu81pQ1a",
  "key12": "2AK5rTxBksPtJRPUSq8FGUrfo186RzoTiXr3vYq42SebaQ6tN3QAA1Z8E6d15SBv1XLmajpicaUfFTbW8BFiEiiq",
  "key13": "4HLvroh5vD6kkqkfQtW96YBDS3H8NCo9ZyeurhRy1MG8nQaKuRXek4pseW3TB6tv2XMZ2A5eAuCixxAfvxt5kvnJ",
  "key14": "3P3tQ825iU2AxZYMLQarukqfFPSbKq4u46xQXYRfaHnjvSiozqiQX5WBNvPhPpe6v5bfWJjyJuGUFojdETZzqfZZ",
  "key15": "4Y62zWwbF9pdryiBtZxe1ztb1rgV1fTSsSx43Pbg32N9aTokKDmJxRFvvmy6C3SDC7jRKhY2MUN2zCVCAcEKiLXu",
  "key16": "2Yy76wrjqRdVPGuWhtkqUXVf5EkQcZGjHRQWUE5jGxbs2gX9ae8kHDr7Fodht57CeyJxrkfVwgYzkbpjgvWRPrJg",
  "key17": "4Hz15DzaX48QvSEzqvLpjXcyuKw2JKf5vjmNQX1mkCRKWvxQu5cLyXaCFVcEVRAg5p5PiYER4BCUKGPE1P5kcmxa",
  "key18": "4DQWYA8yCe7ATxebtxsS4HN3ZjyiEqxN4y3ZrNsJFHavHJMQcpdfPNb4v2T4WczNT9GDs4iZdvETEMTpNeWACN9p",
  "key19": "5KfGUEnJ37NeuCVh3ApsdVneYXa8dEYSJXsBMT9PjokLLWf9vprywyp6dsDPYqG14kn6fCTCKAAk98mgeUjEuhK1",
  "key20": "3Aso23BfiidPjdc6kajrbphKK3fL1KH5L6Dia7g7PxWedLxn59Lcunp9ba6epPryU1KT7CC1mV9k8j7vyxnvGKPB",
  "key21": "4hGm2BF8GcVbyb5Fe4uAqopgx7guurnpzUNSc4BGTt424TXGPGPe6HxYj5euTGZVQZhxVaJjEF4hNn643c1u6XVz",
  "key22": "hcY2uyY5LbcxskzTVQSwtNaxyHGqejY461AHnCPWu5o34oq9j6N42xwpZbn8ARKi227WbGTUnwQaBgpfeFtGDch",
  "key23": "2VMEySX3F9iPxZsWKxfV3gqeucnP9FWQr65igm9NgA3A5F4pmgwprWoLnFGoefwYGwPJxchqoJinri8rjMdCk2JP",
  "key24": "T6oCPvhnGgcxENUDHWvQ4HK8cam4mVLCkdkppjjKPvvyAQE3A3PxFPWsARimTDLHxD6X2CyFAajXrEdUjGvxSrf",
  "key25": "48fW3T5g5NAtW2eykdqhHY3PDEMybrYRMgAp1NASsPoezQy3ZxycRMVCgcNmznQZNZc6PJbfT569Vn9GRbkpkRYL",
  "key26": "4qtnfPuhUw2Zwpra1ejtbdMxGC8pLunQYLqe7YTVM6vMikikBJoCsEonZc7SCfziD6ZkmkS6HJQUewa6WzLCWiXv",
  "key27": "2p25gRVKDxGR1bVQ7rSbeUNkviLmoNiSvmxmByf3mHm4SxkUeWYCKQzuWybNu1e8majD6Q5br69k2yYmMfJ91XGu",
  "key28": "YH1Kr3cnDqSenSXLJ8heotWZwM946omM4ehnspYEDc5EJfTi3cpjLCuqchy3agLMfipFr6JrXpT6fk9YEwnuyXu",
  "key29": "5k7UtX8HhjeRrfPyfUeshAjqRwyeth5Sao8JVYksGjJSUKh1x6PtnbqKDksghDiwdgyP2G1tDBGXp7Ugg3Ws1v8K",
  "key30": "5GEjGGiYyX4FyQxr53kJ5kJ754coGpXF9UdbhYmZgmQw6gHncrWqDuaytf9WpR779KHtgCLVeqYrABwEqAoq6sEQ",
  "key31": "sxRiJS9j2yoRM84dFP1qm9P2fhG2o6LDrjJxwsMrSSbwAzBc3yCk7ayNT4fMbKpJhvUUAWbbhG3zQewsaBimHCd",
  "key32": "mQqyJv4WyvKhHviEcXLfQAJPJapT3MEW7RUbB4HNU5EW3pwkXZg7ZcysU8qMVpRbH9oRBVp8iBmMXiZG3ur8dh6",
  "key33": "5FE47Y4VHEfi5R2gGNr1B8R3s5UHNGruENcWL3xBJayLKLa3ZMMHGZChMArCqHpaccU4FQv4tyugtYqjZjkkaGpM",
  "key34": "62hQ6YDgo9icCn31h2ECZo9L4WLmnu7M7XCRSZ1ZWzpwL34DWFmxM7rAkErpkVLRcDXRQEWGMzULrwgT6etcouS3",
  "key35": "4wSFh8XjjMuiLcvSTif7u2aK3e6NZeSPpzpse5AzwLjv31JG8NTMLhbTHbjBpV156AqyPdHxudnPex1WreTgxKL3",
  "key36": "4GKXgfwS8P5V5XgkCHYv1yyREuj694NZZbueG6EarBt62Zijg3AV5utwq44HtiA8XRtyrZJvwoWYso6vReZThk4C",
  "key37": "Guopnq5WvM8mzRSPbnWEWEqjP5BD5BjkmyEut9kwANkRkJn3cm5XNwfviZME19W7xqVx3SmWRqT2LEVSBKDDoiN",
  "key38": "2LTvuQVsCpv47NzFfB1rELuGXbmKgmw2HFEi48AqvFGPe4qf17XpqqXYx2qFznLBAJg6S1xJocYWrtSHuE9gdw23"
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
