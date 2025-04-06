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
    "Kc551qeZHsxHGD9Km15T1fMe2fqHGWz6DZ9e8hPsqKgWk2VazoA6y9AyfWvVDZDXhs7hKvQCUs3mQZmWFjfMXPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtCtjFaAgXMxsoT4TEyPnMqT7VYZmXgQr68drrgMpMmbDUbtLesU1a1ezTg36rWkn4YaeRSq8LUpbiXEpfS8JuT",
  "key1": "2s4dBhCWHyUykadRZW2gWfZuAnBMKmrCPdeCrRC28Swkfggume3UAopM6DhB17W9UbCc3E76Xoa5LCuY6gB5BnjM",
  "key2": "Aots5eMZLaZRZh8fmt9iAAG6fmpdbMWv3AKGDm557ryVFXhEDn4C9r2wRDL8M3MiMpgDXgzt8oz3S9Qcdf68Y3q",
  "key3": "4ohwKeccf5ePjuZFufwR3kxGuia8S92vdxVw3m8rbQdk7DbpkkKu9mLRXiBNMN8eVY5Dd7jvfNz3yQYoScC3CJyR",
  "key4": "34fzUKCNCfFALrfej6XKEUF2YcyT2EBqkzqvwkh5hufhr1ES1qAAFgFPdv3eXuvvXUJLJVaotFf4hVrWgXEfC85C",
  "key5": "j6jLBRgmu17zK7M5LuFbhAqLFNzrYiSR5NfdzfaBvgCx2aiJiF1DmSm73bYjqj6NJvMQLvEe2Ai1fWtsigiq4Fn",
  "key6": "4kxUst8DEHRMwTTLjD3WyrJVKDGvFj3WqfTYg8UZKi1fcjz2ZYDVbW9x4iDBdgGo9MRqMt9QbEiYDsQUrLfKzuN4",
  "key7": "4QKNETgvu5zTPBntV9Ubmb4wwEVd1ky6ntS2WHBHJSUQV5XH8NoRpGxDWsddHqdQhn4QpP78vw8N8eQ3FrTEd7Pk",
  "key8": "4BDHqi7qrYFzkvTm7CwY6GfiEfWRGZN9mQhY6MBhPFKtRPo5GjdhsvwPnE4ortUXwofg8K3GHbfwa1HGBAoXhd1B",
  "key9": "5EC3iax533K3fujcShjTbg8n9dugRKXuLmdpEg55T1vu1SeL3bG6TFmdcGASCVrzWRTG6h885sefnhaWVk4cw3rA",
  "key10": "3itssUBTGGBGGGzVj7Wuq6JKTEmo9SWKJaiNXpjPFwNoJCbt6YdR1mc2eCRCRZSGRdvYWvGE93f9bUewPcgwhsmk",
  "key11": "4zAizq1Pom1dDfhW8nxtNixBZ6u4fqWS7TVm6xHidoajR2F6RBzetrYARtohXSYGJzZzpVqKkNHeSWsifjkx52UM",
  "key12": "43ZCpVVZb1mk2WyNnAbY9bBevUTc9oq9HbcmrQ3gdiTXAw7y43jsP8rkUvuv4gWSJwLCMwqvAFx7YKSJ5duGFG6o",
  "key13": "3B2DDRMTg6djVXxpWMwwRpkiqotdrAFYyaYfAxPrZyF52K6gonB5CuJeU9cDqmL8cyFGQoo5U3nW6ZXxHa5F7Uso",
  "key14": "3n7Td4295fERTCNyHxJ2cYFpvnLWDHcUiXg5vJZLjzu15b54QJUqCjDivqgwJ1RyCHnEp6p1XYWntorTNZD8uAJC",
  "key15": "5Q7T1Th48VcCCQi9hPsk2UHbYojeoddP3DGyTHYnJF8c2aTWXsZoKTZSad4jv1WWWZmws17b1EEEfaLSLvfBKwmi",
  "key16": "3yFSuS8hXBWa1B3qaiiBGcqvAdqoFRVgRX28H55TQsdnkWTcgckWHGJtu8SY9V4KGJqVBAdnVsEwX3wHj9qA8iVp",
  "key17": "4sEtaiqD1ZD6T7DJSqynWZHky7MnfU7MmV1xa6aaneqxBWoGDubeSteM3RVbCGB1NXEgPLR2WfTMU5g2cJ8qvghT",
  "key18": "XgWpFkQYjsb7JHLatNxQiwQ9CMypm7r9mcFFD7Dghq5a3GQYxH8Z5tcdJX7XrG9eBVEo66zKDEX1vw8roMASdqC",
  "key19": "5eD5QyQucNmanRAghpcvk8pfw1r9h9fNCWBHKJaVjV1RQVqi1StzTE4tn2sBynbwPdiRqX71qu1TMAMud752UAsa",
  "key20": "3nsDKx8zfyBAKANDXBmEsqCJHxXJFwqewWRQGQSbrDHnk5AC7ePriaXcBFcfJG2NCLbqDpXS3YoSRcQ1ugtuUDXh",
  "key21": "RMs746PF93ECDP7RUqpgeJYAD7CrnC8sPNkFhqixvD53G7WehtfxFyDZtm1Ama8HmVv78cvPPqsBNX91ARytnBz",
  "key22": "4hhRw4NPqcTJMEEpJyPMxdCiUgsoPBQsweGoKyGfEfmKjrcXmfLA3SLwqK8Dtwo6WRyEZos4Sk21btSoGQQjeeVC",
  "key23": "5hhkePPNexWiYCtJ9VXQmMUDYUFAFafPKmSQpNcsjhLTqgacN6kwuhCZUy4FKVi9UN5eHHKjUjekJE22fta4jBEB",
  "key24": "4TheLDKjJKQGviuwom5vNpft4791dQGJ7iGUTxF6E32Jgfj2f3sX2Lxov7RS5z3JFoBsX95a1zjconbNmdMXJ9wD",
  "key25": "557uZt2BQpyAJTDd8HQKvb5PRcAPme7SUY1KboBCEbrVpG8vgEpM7oqNwW7Ejz4YGNQD6uXKjHNKhEtodLTAM7od",
  "key26": "3jukvAW5MXgmeLuwPY7RaXXvhC26VEe4J5pTNH8LD4GYwqL7CBZ6oNKHwW9p2mqsswAmGYRd3yAtKbm3wW966TLk",
  "key27": "2H4NZ2uwL7YKdqPDfSuXFpTfUJWUVYEw8nREwaWxVj8bpwk7HSsg4aFe45D8ehVA8sc9fuMmSjrgd4QcZ8DngeJA",
  "key28": "4Zt8mMEE1GxMDeiRSuj7cmkDgmnf3cyPL2oje6fr2TTyju8pbqXCCr58wkiSvsVPqxH53ZLKgDApHNTvqrMNem9n",
  "key29": "2bGYYY4rjiFZXQCXLUYTxCXzDBuGTqFdto9w3DZa64Mp1LaT933GyXyEJhG8MY3EADLfZw1ivFqKkG99x2gvRHgj",
  "key30": "hxqc2CgD7mF9RWzr3BsADBAXBv5z8rbfuqecTVMTc4KUm788z2ipA1eY7ncQkzh9BTb6uWa6ckYAhz8i3Ab6GAR",
  "key31": "uHVn1wBRK669cEriGo9TPUyZzL1qJkysqShfSsVgom1c7G2EWKnnwhHrb8Hm2vLYR4EXEr2QmV9iNnHXrXYuy4k",
  "key32": "3v5h8rtVMpnk7vn75P1UfgckwwuyERtgmQt7JhZtWyWtL2cRVdGZtjdcidGfXeVYQs4CQYx6CrGckjwMPSzWbqw4",
  "key33": "4j9s5v5C3bjnFgDzzbiYxJfGueQspfE2iEJqaPJai6yYLeTAPjNFddtkdmA7u1opLDU2thiPrEFiGE67qSeRA263",
  "key34": "FxFr1TqfK3wZ6RhEKE9iz8qHVhDvBBiMipARUmMUDqSjU2CFYJrJf9cdhQGYrCiQdCJsx9K38WvznydbkWW3DNt",
  "key35": "5jq8kUy9DEFR5WLSaJD5tQFe9XGoyB9RWpUBdnuSpeH7AvVGhLD6JWuwCbm4WL4KmduaGdW7rDbMBwXDfKFxQiHN",
  "key36": "RyJyuNYspWyM3yf6CTv7GNUKEiAZf5frih5wdG2tfAgftdKtAkTkRAnoL1BpsUdy85QaaJMnaVfFNw4CVxLJ4G9"
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
