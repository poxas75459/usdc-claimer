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
    "3UAYiRJnsVsM62BkbZrHM4JF2aQ6wuKLbZDMTqTpeq8aqBFUKrAgfGZJQwFdMqX9KdTSNJ5pH6yynnrYocbJAYTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vnS74wgvQti1qLgmYzWCd8swuKbUu3CP1DQeuBWXnR6BehbpwZw3UJNzP4noVkYcYocsS2RgvAfZCWKp1rbyTLA",
  "key1": "T2Kxhm1Gwc1xHFdhvYNac9ZPS8cgcYdHRyKFm3E1wsrmCYyR27KGxGkgzM6ieikk3Mwd8oJvREXbvvvdMEVVivX",
  "key2": "3oWmZBKXwW1MJsjSyQxg66ziRsNSQD1JQt5R9Sa672TmvNRmGAWYissqAsT4U69xaXLSVjqtUy8CZURmH6M32sZv",
  "key3": "23DxWTuwaAfVsJ4JAqWASLqBy11ugLM89xGVa7LxkuR8pwhJ2oHv99P8uYgKbXNJoc9vqrCK8QwsPKVknjnMScAz",
  "key4": "59UXHFTkkd2VxQcZKurZyxRaNziQczMaXaMAvcphhhciNETSFHUY7SXLHHuUt3kJu7Bnj3UAi3cXSsFQeGbvHYvV",
  "key5": "9cyCp1W2M7zH16nPrD23EUgP93ZimYzQTFrmy4VYc1oCxRkRLmvZbpvv2dyFye6cWvAcjiEBEoY61hL7fJR1QGg",
  "key6": "5tejEC12WxnNNxmWGDxaRBi7BPSWtPQFmpBhjeph8P4cppQoSW2UokRdtSv3Gin1Np3viQvSaStqDH8XLi5pngax",
  "key7": "2C6R7SAycv2otjxBxKpDNWQaNFGbL45E7xgniW1XWh8G7yZwXGEMh7dLBULMdCvT6TwY6PWVGy6qPqd1RkWLuwcH",
  "key8": "361Kes6G3VGT9mv2Hecgx8seN9SdYSEB2QLSL5yeX9jENqWNRqMhiGkrkkQqpmFKndFXEXaeiLcY6N8zXx38BtPo",
  "key9": "dUVFoYw8oRfLgpJHgMgwumMUTFYvuWbTfip6r2diZhuz1WcXng7tjNmHPUU7w2xUNg6M8wy2bQAo8QDJ5TZ3DDY",
  "key10": "3hN5ZEG6XNDAUkhfmYHv3qKGGt1pGb7Nk45eZ1RkAaUNUKsvJf9yEjdT7y6ASpXmMtYrsJb9gUA1d7bV4qkQDKHx",
  "key11": "4gtef61y7L874GTRWG5qdorbNZh6uomTF75aHgWNso7twTZi9T2L79B4kchQjYcMc48PKRjApgkdyNPYCfdDmumP",
  "key12": "BwhxKjvqTe8HKx8wYX5RjSMEHRnS69t4CVo4GX6AYwqBTs4jh3DHTLi29fK7zk4UofLs9HS8rX9JwQV9eypRX7D",
  "key13": "4HGDdjsQXq9MQ33wQseVewsajLAq16RPijsiQwSP1hJ4ocXVMDP45iT1fgWyhwwK9MWEghDUN7Ndg5YQUtz2L3SC",
  "key14": "2Md7dVmHUHq1L99Wqyk5NFNgqJ6Tes1otVCTPLncDPofWgaN15h6EQVSZzNBdZvS4RXceVZCQZEJ85g5kbJvaYRf",
  "key15": "26psCketBZSk5Z8Wycz8viF7ZSG9DSeQjKQ1PNbwvsGHJw2cJ6QRjVU1FcWEakUXJefLxBYD4Ycnf3p7t5dvKuYj",
  "key16": "3dcAKh9gsmAXaCtMZ3BWpQ3hwtw4amoW73YPNEuv8Ui4ehSQAw3LmvmJpCmoW1fwdWSowTAXiunaMzxyyyEFmpov",
  "key17": "4XK5NGSrRcjrdz9VG9Z32kCXh85bM344MuXFQPPeBBqY3sFeq8EoXD33VnJZLX75L4CcGrbCJbJdpYYw4XjVqqpr",
  "key18": "31MkNz2MmPQUXNGbe7c7mW657xCkZdHbYMstsPbMv4Ep4uEnoPH4pUMRB5zZtUd7LjfyKrcydUUpe59JRnP9C1Rp",
  "key19": "4ehFZzvAzJmwQsfH5BAH4w8ucFzoKByrRwwMsVavEDMnDgdrCEpocVE7cFh1Rt2nhaUaNX2jN7jxXU9zspbTzTvh",
  "key20": "2jDLGwoHhSXWoo1TSV1dBrZmV92VvtC9ypn9cyLpZM9hsUdV5mpKA7b1EyHhXwGYkop4q5PzjABnNXY9r2WJYoCR",
  "key21": "3cRCdaBeEyJjLXqZG4EhG6JZULKQNUD4iyHmZS5RBzsG4QKE2EdRLYrJH3QbVGnfdHuRdLoRDrtjk7iwBdh6G5GW",
  "key22": "2iX4zDGvrdELWd9cjpDDwhiz77qf5PefgCvKJH8k7fckLUHb23Xa3v89ypoQBUMU5xeqm37iR8Re5XPspL2LSNhS",
  "key23": "2RhGLaMidPTQVtVDKutHY478GG7644T2mCSwfE7HAYUD7wnBtLeiH3sDb3kU9Pi5ZNvABYDzZ77GfM4juNbB27mq",
  "key24": "5sGTpsaDKDGGaDek1goJ1phTixvPabfdPjnndvJ7XsNn6VL7ER8XUtmxGUG5oPcz5Qvk4yh3uSpncaqNs3PhoMEZ",
  "key25": "3148QPgHiJsAbeFoUHRkG9XCE6irU6DgkMcU4kDFV5n6ymJtb4QrU6J2twMvv6Qzapx5avvGo1aEWcwGMFQAMUnN",
  "key26": "4FxW9Tt5AVuovh8wycPUPMtKNo9h9fJHSRWJcjTqU6Vy22YmUbBLaJcAoytD9BvQwJ3faJhoKKBSSYetQWBPXEnp",
  "key27": "46n4naH73Fod49LL1KTkqvFQWhbnvUwfY5bi2p6DfzQbRsggtJZrLLN2eTrm16Za7hC58TDWNRXFVpKUbwYVDR5u"
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
