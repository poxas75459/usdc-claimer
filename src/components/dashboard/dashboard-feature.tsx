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
    "PJLxRQ2WvuKH9GYqrnSGWjrd3ZirSpx6T2qP7DnRy3kPQtsnKsEQE4Zamoog2JBxMCegLKjnvF5vA32h1oAXiSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWdY17X5uBHx2uwjNtn3juNg3PfRKL8HvSncDes7AnWhgqmztzgw2F6H86tFbeLrYVC6R3E9eqf1hNCEKPqPVdL",
  "key1": "35HG8HUC4ycS5kAfiSw5mtsY23PTJwNJe84Nkbq2gZUgroGGoCKEBfkjd6w1y6zPbAPBAUds9R9NDGQh66EUP3UG",
  "key2": "xbzK2A3yTRPitviok8CuEdGkdbpW45N8UsPeErTambWcmusHDiAK58JkBmMVquqLzb2GcNy7iN3bD9Uy3MfRRLK",
  "key3": "3GpicYSBYqg2Mc8FQQ3ArWGXCK55NA1UNGw2fpWFmYjb7RzYonS5AmHcwy7zXFahosnwFgx7aKxdnkJBfJ7VHuf6",
  "key4": "3wVBHXkaU6nKUQ1pesqWVn7uhDkui6cAj3cHjnEJ9hQJaambjUW4Fn3osrEKNtdLo7p49APP6joEh5tuwCRWYFaf",
  "key5": "4z1cETTWPDyb1yLLfxkKNWQvywZX3Qk7GZnxcRMBCTdnViyztmcbVUqPiNYWJWJFhrhuwnXy6P7A2W9n3NiENPjf",
  "key6": "2MHwUVRjWypXntyfsWgo3ChJiEoVfCaZ1bUwXq1oc8s5qTsbkb6trmNt83N1K5FirXoh3Mi4wA6HgS3W2X6wriHi",
  "key7": "3wEJQ9egBNc2NfzU53pXStNoyKryK4LP56QfbkT7hxqF5EzjQPUnMEjmMHq4C4yLfgZbzoKUHxFFnGM6LrYXLXTt",
  "key8": "thduQb6ySV1kAAHTuS77NXMiZWJh8wREgtWcTmPehrV1T1wYWWQE1SHUU4dTu1i5msHCsmGHxGg3f2Bx8ZcGkEh",
  "key9": "5psChvvaugEa9k2dgjLAafc1YwumynQLnQKEGCfevt2XxvLbyXNJjopJyxBfE7m6TtHnDB1KhGQdm9CoezLMd92G",
  "key10": "51bBphdN3oNUJu1fVB5tDWYeeAiRaUsVFX2qcQrDQ7aTEWGyyrnhJg7KGGCPx4TDXGkYTJGWR3RVYD5CpHje9AeM",
  "key11": "3vTi8FhNsPbPdPs62kz2bHBA9mDhYKzW1hzDQ2H1TwdaekzkCme9M6A2zbzZHU6mGTR5c6zGbApMKCHcaw4efsqT",
  "key12": "3kwmHKyAdtcK5axszRp3Cc4WRSYVJbyt57jTJuvVgKTnPobTefdYPcgbkVevzABvUr5XDMMindVZkp6dwaRF5UnG",
  "key13": "2WkkfHBoGqacaQEvUavs7tZrvano1iz9S6eGeFD7ece4GsccZ1LiESZ8y6CKSZaifcd4Req9nRRXNM189GKvvByz",
  "key14": "2ZmrceX1i5Q8qJ3WarGfWtFqDVHQMZeqxQfSCoQa64PGFwkWb7kdE6ByphSNhQoJCn5qqqdyAEPofVhis2EnAYRg",
  "key15": "osqc1QoHb4RDowoBawGRM36TfmkB2iHPjDjzduLXT4Xm3NeQqVcTksCoW9RxNZEQuC3LHozNnWWHZ7MyrK1oNdg",
  "key16": "4FZ8F4XZLJ6j4GAFCL6BbBFWAELUHxbTbcTD9kj2kgwvAvFGtDLPznQXcF1GCTzSw1dAQd1P8ni6Y8QvzBNKwTNh",
  "key17": "24SjxT9oEYkt48n8kaU4CVZVajifvmbKDhJCucHaVmzGNk4miPEL2kVXdDcwdhG6TKpzcktEVsnEmeixeJoHS5aj",
  "key18": "E5EPEioZgC51yV1fxnHRJEbtRpQSEtUrkGX3CZ2Hfp3pGiatFFSvcExhG2Wag4789fGZN3CBGX6rpX1pGkHsbup",
  "key19": "52oXtm2hgxFQk5FJs1W5Uc1VVBtJXDkYSHgQshxHHiXdpMmPq2tivgxbiP9JZ2ngX8wVHnhcwAQnAsoS9RjUfVT6",
  "key20": "3WVE6rLav67MZvRw3owr9Dj9XsfR4WuuxxUp9vmrfFQu7kF8GjRG3RNyb6haAmd6WmEa76gtu5dasfq7esRgJN3r",
  "key21": "4sGks8oq8bddryfUBo1xWVSQ5qat8s846zb1tVKG7kbXFBAnKdRWVZS2AdN8XJhuFJh4myCfLqRGovz2a5tQrTFA",
  "key22": "4oS5uvchUgTkKzRnb8E56v6MNbNDCwYzJMeRdbNQ7P9kA1A7rcKVQijnyuKN6GXwUp5ZYkhDBXJpwhjTfJh3Pssr",
  "key23": "61qBFZ6dzQQcPtFr8atQvWNEMSakdhLtWf7YSEsrLQrymuZVQxhSoywm9AUWYDfXz7Z5ue5DbkEjmLikwQxdY5yu",
  "key24": "kAvv5C3EVwj4BoCEb8zm3jNfnK6yvBHcCC6utGQ4fpJTDfi5KMfMjmHQmchdizZVEYK1VpMCCFU7eJasH8rtmva",
  "key25": "49whNXJgySbGVvyQf3PUHfNwMx9pG9Gq7bnfAyZ3YozvmVbkadG6tTCoJySao1a8X3sqjouezVTFcJU9NYgkwTYs",
  "key26": "35ub7nayohJ7PLtMmBh48Pshx41AKbnvnWRgEc2YrXuHMYDfPNHa4pnuoGuAqsaAbYNt5gmEYZSckEydLgiq5zq3",
  "key27": "5z5c3eW82uYkB4vinD1SecYnnnmWGAYkmZYwfN1Z7g7RUEL4yHe84KN44B6pjrYK4m3TMLWKjN9RtikrbMkC8hnm",
  "key28": "43fFBT8YB5XWhsdS3tEpYQa2pf6KzziUGWT6icYVyu5GXyVNRbrcaKvva7X6RbAwQ7zTNYQBHr7dUUZ83sqFE9PU",
  "key29": "29AWxSbuHcjR7rGm8neiB8hi7QiFf5HJwZYgGVJLjd49zsCvHdAW9D69Tnh9xRdEqb7uNDNsHREwZkn624dhyUAd",
  "key30": "54BDbdakamaZE5fZSTBEzJKqynyDPryz2FWMRciGMghJPnv4HqNjqUf3Yi2co7PHqYsomjVfWeFet14diVrXjMLn",
  "key31": "3PtpWfpp5AYmWbdie7DptysHhvx3sXUs5kfUPLi1m5CV3jaNvxosxCLToRZoNe1mKjEjsxrKadfGasneBTw2BP71",
  "key32": "3nP2pwVV4a8LiZYptUx8hkQqwKnWvZ8Q8YE3m2UguCPBTrmFMeze6bAJD9wTR33YkGwxgJpamYtJsYYF4gPTjo2r",
  "key33": "gk8GQpfUyFEd8fEpU39QwVwoM7ZN59XeJi2kHkZSvf2kCo55uNrkmgoZ2zCaCBqBuwKCEUyC1ju8SFWQSwuNLsA",
  "key34": "2ePx2tZ6QUEGVnZ7byyo1tqeq2AXfqjyWqGMVN17tbfjPQ7M3LxaR9PPcDFA8fy3VLdSZysXdy8d6YcfJq1eY58e",
  "key35": "2kjnUn6DXg75auwDh8QRQXU3T2trTZPvfXafyz8J2XFai8CKvaJg5PBWsHpLgyLJY6YyG5JtvoijLqGBvnDhkbdF"
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
