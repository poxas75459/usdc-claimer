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
    "5sSfXwoebUjnosUhBG6vfaK1ysXPAbaG2yB2rDLyoVnpd92LiEasCd4dwd7NNdkwScfWXtYas9Qzfh8nZjE9yYrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGWdjr3tbjBnKptnUFMLP9mynDZfYfmN3BDXCRA9qaSh3Ujv1rjCPBmYyA9FfQ9ifyKGiEv2QQhrDjiSRfKwaxW",
  "key1": "24uGUF6YF3cAqypDYcCHxeoaAqtmhTenk6aD8MXxBVcxdUoXpgL2Rggt6eDVovPWcHmkn8cA4xt4zFRsG7QFz8M4",
  "key2": "3ao18AvcB4MHya2auGMYxHuWf4NZtVuMVysEUxSzXDavh1qZxzf1ffPaxmMvkHwAczSpZgKVoDZW8LamWYsyM2Ux",
  "key3": "4pBNXWoDuujxCWkwdDp1jwXM4NUg394JEPyyyeBJKgKxcvNGExFA1jpwfhHi6MBSaeMJx3STaAZ1XFfjs46sqfZp",
  "key4": "53BDfa7Sq6nX48CcQJYuVvE6yiu6ceQgDP1q4LjdtQ1Kjp95PSmpPq4JYd971BtEWRQbuaBF4hZuwuRp1LpZLfvk",
  "key5": "4aD3DdK7PaJx1bDbJdZvkbXcgVaYz66SJUpcMLtNRkL2VTHhnGfjRrb1Yz8PEBj6EYHY17xE49DNhDdFNGQ4mrS8",
  "key6": "3pFYY4ebgjM1QGWiqDcr2Mb4gTHJLLyurExMr4nCBgLCaiEs4f7TSjdxYV4aAnjHcUJKszPcY44juwpsrJTsjEm5",
  "key7": "2mdkmiJEXvWyDZ8XjVAteQEyBaX7Xjd9oeKm3J9do46LHypzfqvKWuThZ2btqKZYmXyAuAXGjVg4FHFbbnsdboHd",
  "key8": "3timj54LzkEG5MVZyFn1tqMtTHjyEmotXR7ZfWXjXRkLWQPCh9NwSh28ewZpzavoeY7hhRWM6E1hAhFJ1eG7kEmZ",
  "key9": "5XdRSbooNJp3q2b9UXhSf2RR1F2sWURy1ZieFiy4Qh4YcsZFmXfxAbr4hsGb85yAGXu7KhWvkBaCwLNCdiYnvaFx",
  "key10": "2eDePRtXJsE6RHsG8L7c9SYcYH3YBzf1EMdsKRucbh8vLCxiMDXCD3yTJfCwQgLgoQpv2Dfgmdk48hZvYaWwLTeJ",
  "key11": "5RBso8aiFwsqqJCPEs7ozTi3JAB65VKsjKPsk43ttBLmX9mvFeEpfpSLp6xJiF8GevCJLBTUbomJKeop61ePDRN",
  "key12": "4eBdHqPfvfS9Hc3GVQpR3JaZuAd1KUpfLbAB71aYzzzHPLkGuro7osCNqokGRVTo1jz1WZBJXQZu8dbcuKsDpRjQ",
  "key13": "2uK3p5XcUBHu7bCb4m9kd2nW7ZkpgtxHHgbCKrvHKtELQAx1TJJLiEWfmWL2D1AmFUybSPTUMmsB2CKm5qLtbjZg",
  "key14": "5iqBRZu1fhJz4JDT2Vb5LFkBHx5TudRZCrMAMnNCJoQ7TYsASNbVbYpQFE5zrAXCfUVWhnWMQWLrhwoX2VV7RAuv",
  "key15": "5QSEtYQY2inXhp8maVTFqFGPo23PHfShPbrihruy8PjEL8HrfnrzfSXCSSYreDmduUF6nuALNhfbVQhD3ZZk5LJQ",
  "key16": "3WLoRkfEhRGx8WZbzKW2B6oiRveo2E8nMM6UasqEvceM7okjDLcK3UHpoFMmKF54QNvgbN4P9K4MyPNZderhnMkF",
  "key17": "2BnrUmk7aYB3UiMZdW3KgsF6vsUeKE1xmbXcxCFwZ6NDQ7161zfbfjtKaL8DyKL422JzKefJdVbhGgmgNTTw1PLP",
  "key18": "4jWuZ13CpNUAGK9vncmzXAcSoxxSJvpbCigXwJXrBk25EvXTm4XDDWfPo6eP29tDoZAzVgbyxc397f17AWqTDPWR",
  "key19": "4YegFAoarn4C7TztLcwr1rXKndptZvpEcQokeMwtdsaw7u7oZx72ghQikY83pH8HLeUACWMn1Kym6LuCRDpiXg6a",
  "key20": "4xNDKcMFJFqhQ9CT2NgKw9AxtPmV2cUsNUvRrxy5QEY5DrhEHTdfbZEDa5T2Nsf6f89UHFw3JUXA8BF53QYCqd2Q",
  "key21": "34tyXN8G9jyvM4QJNcKzCK9NwTjGKErpBm2R3PU7kCLg1kXUtUhcBAUDF5yCFM9aBCYuXEQFag6EZGae5Krv4GMU",
  "key22": "3Ab1ETWdkcAKfLxs3TC8uLVB4Rnx6sKTjxhTZMMr5C9CnRdhGoA6yZwq6Jpze656cF2CMA7ePu2uwb75i4Xt83s",
  "key23": "2pWmqmDCZtP4n7YjjsPZSsu1ztLip5wySsNG2evqiDBk7exPXwzyiEcjnT4RwSfPKTHnYoYSRJigsUnRie1aMX5v",
  "key24": "5wLxqRWXKAgSpXDbegZLWM2czNLLc4tT8k1MU6g5zXjVmPbiNn4iRDTuuk8VWQZw5xqoXKxwSGQtVqFRbScz7oRU",
  "key25": "4LRANMaBiPd1c7Rd4u5gWvjY9odiJ7BDB217umq9DFGmZAF5XMv4Prp9C6WaT7nsikTuiwcQHsr7vH3w2a1xVrnJ",
  "key26": "EEdG4GsTggKiUKfX19AXzsH9JxQdzruRCjNVzVryedqN6GEfHAnmRJ6mw3aBxGeptj7pxcnyitCfpXsQRL3GQbY",
  "key27": "29N4VnRDJqngNZwUrDP1Nfy8HmyVqAqUcyvRbdcXdJNNiwZRYJsMZVurcgP57mmskCvtcHkHgFgCH37Rb6gnmYaG",
  "key28": "5KwbQKfsvTdnVQoEDQDfTbiFtHT24ReW9f58MqmyDcNbYNgQM57RuPz6b92UAs84gyqGSaXBJKR6uYYaE4PWHhq6",
  "key29": "5kY9YpRqJVhhuiJGmyWSDLMkexip3Vr1Basg2jJSiXqxm8k9Gwa5cXVuBoadHJYhJBfxfHmxX2gU1gJEeX8FFniZ"
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
