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
    "3F2LeGN4oH6tTFhxAoMkMtCmMMTu8Enydi2UUhrSvJ6oEEEjGQJCiV1awGnkiEWBnbRuPqkxvkZ6PcCzH1Vvgw3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mihdzRUCorR3nDMPPUAPpcygngcTStbj4DxsUiPqhPooXWoyfhgRG9eUYRcGMkvP2qwkThp7oYhNAUXH2eGqPqX",
  "key1": "4tKf4U5en1dFw5aoMmM3zLMM6prjMyC2U2WKddtLg6rUwv2bmqybevH3Q99dqnqXQRPDZCpk6eejPHL5y6AszobL",
  "key2": "5g4pxs1hPWwYZG1GL6Exq39Hut4jZsGhnDy38gurXdVhr2bRsy8NWQw6tM6PSbedw1HoZj9cPHmVjKweVf8SistP",
  "key3": "28eK3WeKukW59UNZJCexHMdR1KBLrfD3iK6vWzS9MqRjakYPBaEJq5qH3sQ31RFnaKi2igEkZdr6R11Athvy9jXQ",
  "key4": "3p6iJJoAyu452UM64jHjiWe7BTcygJzp9HAqXqRSpALuznieUGiZPSLTvjn41A1Ee8pvqmDGBXSvgNFk13xaoAqE",
  "key5": "5U15n4SzYZRzEsEnZvSwZ43fGMucQAZZaPHHNZJYiiTPvuJUy5dTzLdoDvqGBN4imwGGJ2woC23HwScx65v8T5yN",
  "key6": "4tgsBPjfqnDfBmdzVSoe44UJKMiXNkeKX8J4gbJBNJAH6sGZCw5AdW8MeHGXzrSxzpRHGdDRKCBGXQ6z3wJ3xEWT",
  "key7": "5qqdFHv7iM7XAybFw8UH483HVfGqP6ZSsdKPtCNrPnEDaMDGUXWM2Fmz4TA4FERHhPY3kirwkpwr6a287CcfgwCJ",
  "key8": "2DGRMQ5M3YioChJmhzrmX8BR1JKgzJCRffwj3moinMCgQ62vqZnQPUKN9WuCsNRdMm5kE5GynJxfU8p3xwG3JFwp",
  "key9": "4i8rJNzJ72N9Mt8HA8trnNT5B2SZsrcn9CU8U4YKsFpD51vBYPqKW4PDGLPVSgcYR1SrxgF2rhxmi5oSE75pjayP",
  "key10": "58kzhWUMF1YWwhXZ2GF9Tjq12o3VQCssRh13czU5dM1gFr6vSAV6zYGJMhGBBt4iCBB2Er47L42JpS2Yo1onS5Pd",
  "key11": "4BJKtSDCMyF5ainjCkSdB6FLnHhTWvso3Mmen7o5tMtL4oL7NqPhvRzBK4BnSUYVzmCaKN5BjN5MN51r6bPEE7SJ",
  "key12": "2PToPFJkzdE5q8iUQQS7zwtEhK4i2bQ2mQE8wtRkffAU26FCzdv5pbjWe3s8TMMkA9LxnTSzYTKpLmxTdiqjeRgq",
  "key13": "5BbDNyzWh5fFt2g7ZpVL6F63V2v1Xq5WmwLBiPAgmEP6fyM7BNJyGKmeopVCQnX93dZ84mCmu2dYrJuevLSdjrpp",
  "key14": "2K9bVSQfyJVahAtBFhFRY7MB3WBAD6U6DK7UNxdDF5qSU8jcN1mHkb7ZQsn4qAyWNymXbbFsidxfXSS84NMfxf9t",
  "key15": "5BLfQZrnafQDTmrtyy7cxDRga52wDDLmR5F5zZ2wj16z9vBRsrPU3BhS8K5VdiSj9ySA9cpWrjjDJGZPBnpnVYAQ",
  "key16": "4DPn1u6RWDhvt746hWtkzyn15qCdkj1BFCGy3bHNVEq9GHoJGaYJhRu3T5ESrmGLNv1X47LWJ7oafAePV7KZ9E5p",
  "key17": "3j7TQi6cuwmf7Zho38CNfnPUAn4SUqBurrU9sTABNncPpfeqQ2aj8ayFsNE4eA25s6ZTGrXhPgZv1i66T7VjaBAy",
  "key18": "2rVxYm11Suk6nEpkFDSKssykRdveAneLpw2dF5ppSFHAPq7UukfrGN9uqi5f1dHTEf8aJsnV8ZaK6HmujMtWJ9vo",
  "key19": "61tWX5cRcbJ4j43CMAoRBRLSYWPQ3WAWwbmb8uviu1CKSKhR3W21NFbNWtQjM93JcJ2bQVRrP8pkQodvNsoouvVx",
  "key20": "5MacPP29AJ5PqfKSL2j4RSFFurHeoYnfLfB7JH44QCNkq6Q6RcYhTFK6P4morNArD3Kbdgn8AcfX5fPN873DHCFt",
  "key21": "385QLGAcaLQb7WhE1FWHYr1mPiaEJQAmsoCKKGP2dgRNzqDrcQUUH1vFJjQPkt1253bTvHVUwRyir7T48mXTkvVS",
  "key22": "bWZEX6VhkGFBg2hYZnmtFgaX5e4DkF5vGtFHihRBueU3DSNZ91jsGhWAESeZsFL3QxMJPeMmV6MkoHQXKU4jZWY",
  "key23": "5wVTfcy7HAUbpC4XFYGfqCww6zhQKhAsrW7xCdABV7tAkh42kZBqqR5z2c2CPcjen1Zk1RGssKkB19MVWG9GKX9c",
  "key24": "3Q9SjeykcSLYor1Vj9KBUcQw12LGujcboaiSuUQHqvkZNgdwAAgjBgevbET741yyNAcnxTft9a9D8cmpVo7PrwGm",
  "key25": "5rWqmigweFrzets4ueMkQuXx7otDWHL13FZ6aLEjy7gPVPUQAyMTwSiUnnuNG66qM829LffcL4GmwC5DGNJUSQ5N",
  "key26": "52RQWh2r7pXKnMYrYavB4KsmXuqw3wQYTPXMT1NznJrtbWJMFRScURWUfXJqGeTW9fC372Vb5Tp6MJ7UZGa8yks9",
  "key27": "4MW9LAkQmw3vcQxNMwxW3LC5i9hgvuba8mLvgBiEs8hRtDM6LLsttxZunpAMNCkeJvhN48Du6eBJnqqYQi8cFu9Z",
  "key28": "2k1axedjUG3PRW6GXGvZg9AAjFK7RBgqzfxhZL3Kyvov2qq7PurBhMoN6vWCcVWHn3rgiSeMSBcABAkeUw2FEdeo",
  "key29": "xwGMUtCnKS9zT7LEMUNEQGC5Y8XSVKdBUuW8D1DkkAXjKGso3scY4J8qmEVY3Yw2ejNEm7HCz4hfeXG94PWvPVZ",
  "key30": "47oA3hJyVNPQwnVRBzu1cVUnNeKBbrPL2JKedh1637mDSgRZR4QWrsFCLQt8MmYUNhbaNNDWRdB8RdpRwxgYroKv",
  "key31": "4ioNPPS9budqWrgua8pYatLHKqqzqfjVDDTdGnb9xJDAVceE3bb3k5dms7eFtyq3YofvMDcVqUXM39bHXprBqjzJ"
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
