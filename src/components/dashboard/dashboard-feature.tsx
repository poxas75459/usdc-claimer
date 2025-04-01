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
    "qU8zY9n6sYPYce5P9N1LEmndJjBswizqN7vHDDxZV3pWoGkRHdo4jXZxFdKC3RDy6w8qPZTt4TY5YNxQbrhBjMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzuuTKeEX5JwpcwG8WevjeHbYd3wq66xhLvByTWZCt3JQ2VGLEsSY6x3wLobQJEchMhh6zhmavCwwCiDYbwW52Y",
  "key1": "KRh32nkPE3TB122xZVBUkSHUVqPW855N1uCBt5h99rLiVRa4fm6DBNAmtp6BSJpKUoPNK6vF7LfEXHhMUMwMoZK",
  "key2": "3TCFoLjAMoQUVAEWS8KcNRTVZYqZkt5WkP247t7r6X4v8r6WSi53KY8AntosBuGAJrYWKj7hB6ZgTuPMqAj48wQA",
  "key3": "3M9Jv33RUWuaxgYjMsDuEY315SiQV75S4sCKoPpi248bY5vLgggZRtGx9CDatyit9gnPzTTxv5hgHqt8SbgJS41M",
  "key4": "VojgcVtej5Krj1r1AciRBfM9Uc8q7gGR6UHmNuTGF7EV1pBSHQP53terrH3JsuhPK4KWKuiukHHbhs8peDzEka2",
  "key5": "58gfj5saCtUVBMQ23dnoomACxadS5BacsaCuRWppXATm26HFaGtn18cWdUvNNyAC5YWZ6kLjqt5KB9SjoUkCCSKq",
  "key6": "2bPM88q3c7zw6e2MM43i3W1hkim3L4T17PtPraYoheFDaNxMnziHQSo4NKheqkrXzFV5ni3PWPFk1Hd6GvZZGmu4",
  "key7": "4VVHfkDdVu3nyHxJCznQmFjZ3hz4xi65cKgtw6y2YNov2eg54esYZoPkFTj47LPEo8XdjibpryTrdymV8c11fwiH",
  "key8": "3w3PKChMNCkxGehof9F4CsNRkjfjLX2hesw2Nea3m5dkbGTtT9kHZHj2rXCEP6TSbnNFFfJwgn8LEp2vak9Nm8h4",
  "key9": "HRVCtbP6ht9rQz96JYUz9K7hATW6pwGeieBsKn64x6M2JMCmboekh3cmBugD1ZBqKaWj9YCvzVuYQbynsbsSKKh",
  "key10": "4AVzzJwwU59DFi91NtYNAN7dv79hka4vMVdHm5yekUYmMTqzjyTY9U7VhH5daUAH6rPam9mnm8qB2j7La9BUbS7E",
  "key11": "4U9yrV9ucD7YMGiCf8mVsBZBqH6ffhEBY75CedcrB6iFV4eGn61BcKujChTY3gSGTrx5Qbeda4ZkG1BYWNyCJe2h",
  "key12": "4ZKiV2bVtdPjbLh9V5gjZNHrBAwDVVDuBAzkdZrTV2fYn5Czx5WjD8GvLVpmtK85ArfGSUTP1hPHQWAZB7hGu3Vi",
  "key13": "33dFYRosBXq2bfa8kGvvePJ4AxQp6SNdwNxoyRg2PhQdfKvy2GZAuWzQEHbYH3RqN2pNkDJCSawvGyD6GxwTBpj5",
  "key14": "4Hi5QCc1MDp6ohT8pRNB8jULV4B46NirDH19jZSxn8BGjRS2NXXkKPxLb248Uex35yuXpaLfNYq4HhJ2vKTAUnEQ",
  "key15": "UqeCkytEQbkyk3dPuq6riiP7sMLuUpmhVvdQQDBBntkNWxSo98KGoTPv6ZQMQVhv3fNwPeGakgLvjtCLf4p4hcH",
  "key16": "36m8tuueSNwhNcACFphKMpLWP6MEXHdb22b9y41uCnPDYb5qktqqfx842mVJ2J71x5Kwv8gxgS1Q3aNYaMsE3mpr",
  "key17": "2gThmT1TsSaDjbnZgTK6Qx8u8BkoSLn3Bq98obSMnqesPXCHtwTsPRNMaYsgmUfwbqeAFUerH1GDpkySVUevzYH4",
  "key18": "AQK2F7ta9EUQ73B2jJX7G3deXjjQFnZX1yvxQekWR3ZmNjkZq9wcgFgRDSqeJsFWehwV2ydzafiEqhBLoBhRbSh",
  "key19": "5NpitLhYQdHw7w7J7VE9EJWVisGJAseDGs7FbMQVrGRmEX6pr4Db4F5haZSSpX2uU32b38m3vknXSPwFBREXirv",
  "key20": "mKzJMcw5HVp7LFqJHWQTtEEGCzkVNnwtZUYw1byG2moby6iadpjuW4wUYrkDHLSn9a6dLD6V9ttrPdXnQv3HGsa",
  "key21": "5ZnjW2oFDrfu2JPx1UgMN1eVBwGFFDGBd67c46uPWkgC8BMhzVSaaAP6phJPvPwLRvcPchpgQ42tsBX9iqDSsXxZ",
  "key22": "4DdCevAUPg6DBDwNKebjunEwjEpz1HSMQVeDEBV44vLkS8EiisvFU7VGVCvCcecwqmS2b4Af4UM9BneodTzp2ntL",
  "key23": "5cFvQEfQMJY7yBokaJcjmXq614GHJkpEmdz1BD6HjW61opgxE1N9coLTugESkESpKvgmzpyz6Fy8wK1EnkdViC78",
  "key24": "3GsGfg9PMpnoaboniMEyGvWyWZ4APh4C9zQhTFpWjqX3o8r9KuwtanQk1589dZNyQiwke5fgdDVEQviHnzMF2zRF",
  "key25": "36CXTixhmsftJTdm6Z4YqqyAV23Emawat46WcyVJEbEfgyrK6FA9dqWa83NfESddQqgoTM5jknaj8KSwXx27AznS",
  "key26": "4Yfy1AW45pnksZvZZG8fCVKS6VeUcmLUQW1PnVed3hMdj9UtZMWoYofyosz2my8HCr5SZ5pPxKu6YSn5oV7u1hz2",
  "key27": "3NpLZKt6rZgnN1yxvGxfHhuX1fgGpDHPz6L66tY9XcLqZzTd8V6XF3x5frx7nE3FHMG5NPcCe4VvPqzmDoNNpU17",
  "key28": "4eMR1uPwjbgZssx4soFv2mz2bhCytjN8Rm5mnVhyg4UgwRMoJZX4MgzgaPH3LnGCXVvbpbegmhKoVfYrmssAm9Uv",
  "key29": "2YJqTXhBdhxd4XWt2p67DzgYCjpnzZJAMSpA8atA1GWNjWEcDHre8Nd5yveCVoP63xNejPwf4rE1nJGM5zVd7pVV",
  "key30": "2zBaVmbQ3bEpUEQ13N5M9bL3gicZcGUA3kKFN3fQtkakhrzGkJQt1ikFrutVt4M7DUJTYkcCrG9jagDCgqp8ixgM",
  "key31": "Zy3A9na1A9yKVjfDWwW6TzaRhJj5XnS9YkTZ6tW1BsiEZ3fFYsapdBiMJsqZJJUm11NrqYUWfZyXHT2GK2Dqe27",
  "key32": "dDD6LURf4UFEyCQ955QffVSdikbWfYreaSUNYRRZZgUb5cCQFq2B545ZuDdNLv4UHSLRoLgCBVqSBcobYQ3Dydt",
  "key33": "5JAkCGrhaWbZn2UM7Yb5e97DeB8j32akQ3oqfws3X3TecPR7BRpVfcCvHpqNdM7oMtp9eQb8e2quobZYAXEo9hwL",
  "key34": "kFcD2qUyXAL2QxV5wSxM6u4exd2GpJGtc7Vi2zURw9gZJQY33mJRd64BrgXNVuBq6MD1Md46TK6AvQxbuu2hA95",
  "key35": "2vuM1WKQjpMrA3zoY5oL2kC6JPDft2vPcMpbpf6FG1i1rEuTBAr334UJAG3xWP8VHWKTFfyTWuD7snBSaD9NLX5D",
  "key36": "xRxSSb8onEvxnwL8bbzeBZ3m5ayqR4udKQfkXLYYbuW8ogZANiqeNb1359jLvkb21qG8951C1kSiNUW9fZ4TMyf",
  "key37": "2b7Ee6JAktbUFbeCE1DdZBQsP7J1vqm9tfX18C1DHVqhsjvv1CTQUgZp6oPV4hzSQoYkimUGRzpyR72uWZVSRsZb",
  "key38": "5iqYbC9TaTGMUymn1RZU1JbWBxii2tgvoUL3AbxDDE3kvtuE8e9gCaohnoBNrFXZ6UbD2PUnFKVaZ8uX9MEbw992",
  "key39": "2igbgnzr7s9XSYok7bv4URuKBmMPr3mYFwEwE7syDXRzqKSMTvAsDyeygcEa2Yy5Xfnx1L8P2K5NdZ1YYwHz7xbw",
  "key40": "5ef2Vv1YKqwxwsGqng266U3qfzUoxiJzde5nWVhzu3yTSUtLifok4afUdzj3yWcXMwSzDmzyGmSjCHptcXFtAQzD",
  "key41": "57uNgqDfVHHZVLnkuCRjEg2pzySoiB4PNmMZnEcsWTASqduGNXddkZsPKv12kX3wLBQwacJkKxuGKEhck6sf6Jkj",
  "key42": "4X93QLvH2PTzyKrwfAkHPa64cqKejQVJQU9MUAcXZL3cipQRbd6qRvX432mdDE7gwAfc2XdcNv3PqU4mhF68xqZ3"
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
