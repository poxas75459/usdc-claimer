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
    "3KUoqmFbgDmtUe7hPmyHmgzo4vVXb9Ke3Dd3j6cRQtv7ND92dwBr2Pqd7iPDgeQStkDNd3D2zWxUFLpY6tjhb9bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hvcJv7nzGkNrc9F3c8QYPeuRJ96BYaFBrKtREEofZuPciWUhjoFp6pN4YHYxHhfp7jqaSn9rVQsCZZeNz8xtEps",
  "key1": "5fKHJG7XNGLBRwPpadiDTAa7UrCLRkisit9tJ5DnhNNi4D3ryFYso2d1aZF2d61gyKDuDnwQiz5dTfkYqB7Xdfhd",
  "key2": "56Xy392KYDba8zY5sckb8pYecvMrcKUfnxG14viucGDEgXStvRDPbYnwAcXeSAx3rNS7Rvxy5TpqohMaNZCY13Rk",
  "key3": "Lshw15Zuyjt9cAvg5vRo2aKRHSUfQduN6gzaB1FVRmTpjhoaip4oCJgEW7LJGfH8v2jHDjybWEkbEzvLXK6HzWF",
  "key4": "3pmbyx3osUH1nPZb5UpZpSymkqXSq9MqxbmWdkyZq6rGGnzdKnK6UFdJPaYcgzAi4hWbbuGSz2seuyfD4EBurSQ9",
  "key5": "2sUPf9vsgata9RW2MQ4c4qNNvwFtkdaf4brjEs6bgZEjxWK2cvpSraSaYXxZ65jPjnaX3u8e47P9xJHLAnTRtvFj",
  "key6": "qZZAaBaTFCJJZ32w7axhKR6cR4mWqvKE3envGwaDo8YWnRjsxeuEvUZuE76KFyfURu3w2jU8KitPbPJCtLTF3cV",
  "key7": "3VuNMUgXUQojNjRreBDeeRSc6WooKxBitRwgHwESks74ECWagfWEq17nEefztU3QTKWUS1etMBrVK5UTca9id8Wy",
  "key8": "3Td4tDQL8bsPo8PXrteUUVTGwKRKAkHKTpnkFtcZznn3gu2rcNeaFNyfgQxabmyBayzszeZ7ui3WywYSbzzPuiTD",
  "key9": "3MWDDQDZKxmjLFmE5WrFHabEeJM3qNJFwJEvNRXSaeyn5fkosLSU26yi58bgt4cEZsoCPFdN5u1vNXiS6fH3rL47",
  "key10": "4XTfdsoAJ6MvSMoJLaVt2stbaGrwdbaXd21VkVqWRqL7Vso2t8VWU53cVBG8ahPs5BiPYHKHwBbj5QVAZYkQLVQj",
  "key11": "4oyCbdgJ8HxV7izH1ZUDxs4rxAbbD9WVpCKE8psdWW2D12VveE5djMi4tpRqzG16c6B4JWsbqHAiAKDdGcP6XkrS",
  "key12": "41k4jYXReXn2uX8p8T6V8axZk4iqeVfrQ9P2ftVLEVz6y9Cqt9uknEA3tPuyvc3Ap1ictmKEvdXGqK2JJBNLucz6",
  "key13": "588hjoU2q12t3nXDhExZChPFQS1mnB7mGx2xszJndjuC34rNNq9x6NzpYLmKUNPTUbPAW7syiLBWNcQ3GGkmZsUs",
  "key14": "3QWL2HoTcAnMHhYuojWYiX3dbAyjU6GGvyZEibQJC6LLpoeKB84ACTTm2CeGRM5jnmeFCPKwFp4zZAx9EfXYa6k7",
  "key15": "7C4LMQvBKzjPUeXQcpeBjE2RGmy5pHaFCdNmAqzqweKct7HaHjAHAFFhbRDssskkT77agZVHJAZiq6RfxRVrQdj",
  "key16": "2Umqm4rXFCv74Tn4ksSUiQZrHR2N3BkXWWu4FKfXBcAjAfa6EJqwHVUgDE4s7D7xPbvKfmPmmMGsbgb9XSoEvvw6",
  "key17": "3bhWsg139L6MMj4adxpVAMNVvVqLjfbY5ioS2cUvbJHM3bLrNN35cbRM8PsKNZYUYXe4KEQoAhb7gQy6vLpAhH7n",
  "key18": "5qxQAp2SkPJeUuyompwFANXF5XasBb94YzQNiePtga1iVUcUQECWRzw3sZ6szVjHpfWSTk74qem9FbVXyCXXiBRL",
  "key19": "MTP1q8z8DJT7PFao5TCQRYbzZpAj6ADPcoJuB9KkHvczCF7RCXmNWLRzaVBH8U3YNGNBNfBrj4uy4ravmcPY2e3",
  "key20": "3pruNHjXcyiRmNS5tm2NStYF1a14RAp8tCBrro9Qt4MfF29uiLBaTmgm49rMKNRYZEJiabvahBzHSgHVvu38AMJ3",
  "key21": "2dZdGr63nuMzU6z9s1xhp744ExbHSiaHzvwSJxz7DQove7WcEb3uu8A5LRbXnGNPtvXHj2XCkj448gco82XP7e53",
  "key22": "37QfYf2VhUkkVo5CB699GBKT3PhNcbQUhrkJcxN7YqX7qKDJGV3h2wbRjCjZgQ7MzGBbrEQRaGpdp1y4BBPBeSRb",
  "key23": "4NxWwwT662ZhzdPytp1RgwUoiX2FUAHnjcfZpt5pSqrVaA1MvWvhc7haVxBxGXqk65NXgMYmy9br2wHfGKA9FrgY",
  "key24": "2GeXRjmYvfSFb5qdWMKbi6b85XeVrdFqZq1uDo9xxWBPvjWVXxdni5PT9exPyQzDEJN7CNZayJYP285TydPJ2nVF",
  "key25": "3Ga1V6L6yKYU7f9T7MVvTnCUXSEjvTFCpniH94jzy8H8s8YZLqM2gBgwiVYW1GuGWr5S6ym5VeMWkpb4HzoxF7b7",
  "key26": "c1BZrLapxTuqj3kisqZdf1Pf3wbSPJxKtSY4cjEFm7Nc6ZpRc8F99PUvTDeioWMjiTvoTDHRFXB7bXhXQnP7FkT",
  "key27": "5VAagWuTeDDHqN2fTdr6F4ehyoYTuF3NGJsqB4ceE4k16gh2HnDmpmFb762te9q7UVYintuj5LnFikgxXiJ868XY",
  "key28": "61yRB1aA1At7qAbD2bKer2K1aYXqWwXYUsxTwwaQEEUHFSe4PCiKoqtqkwSTeyMj5tAT4iUeZ341xQw83MV71CKM",
  "key29": "2ZSQRuS36oB5cNMUkhEbvr7Rnm5k2PscJoKCQiWy4oDaHs4AEajXXVxJaWDLCm6VSMqR4bTt3E5nt3db1Jp23v7u",
  "key30": "4qsY2eJGb6QHdzBhcu4Eh2bgBPMVCC1rkKZQWvrD6GeRVNpjuMVRCa4rb6eNE4xVVMXCdyrMRajEjWXM8hTKuCBx",
  "key31": "GuYN1L1tFqXfUBVd2t35xyDg9C9G75iBHeTiFTDW55Y3ApTynAJuRbBUc8UNgUhEfLBDcDyYeadXQgG8JoeS9Uj",
  "key32": "5GZwFEyQJc3EzqA7BxJ79GNZNvDy929UbcfFRehhqWQ19DTu1K8JF6pLoSuqZ6nDzvEyj9Lgch3YsJXiMK7UYb9c",
  "key33": "2iwHYV78mAM2WCDkeXWF8RiowQZumeZupdJEb92GAv2m9FkgBM5YEtgpjcT4iPqVMsADJ8dC6wGKLT6PC6PyDrfN",
  "key34": "5nBFLBtQfyvS1fQ5KQjHjKRjCxUAtKxzSKAeAmPVSmyaGABdoe2kcqQ4Djb9twcWM9rS35VnSkndd3dvH4HpT86D",
  "key35": "5SVGRbNvvZLGRhkBUQ3yWCn895b5hB1B55wWoJNqai9HqvWWAnPBBMqjqBN7L59xySuB4WHTx9ziyHLvZCrB2pY2",
  "key36": "5R73HnNo8Z4kweC5t8imCv6eK2BXMuYi5GGyZZijnyvH1LRvJuHehTEU5b4q75Kc9nErSyzAt1tFRtAhviwmcPJh",
  "key37": "4jwxhgV691gLvqag4xmDbDya68vWKVZhdBToMUmMoenDedWf8gifuCGJCYcwaPJrRrq8TqHHm3pz89o3BgLxh1fs",
  "key38": "3PY3sg3WrjvNw3no2KZkRkpGxg37sk4f6Umyrdfdk79w1HSGKEsfiQ4mRQo2yBv7acdWxhwhyCk1Nca4jJjX1pVv",
  "key39": "4ZcCk9fPnVVxyvG98kj3J4vUw75zauHDLAZWRhFmnRXkZL7bnLaiguVUYo5WSBXjvn5USeV8fwHKRgqyUGnkGMEu",
  "key40": "28cisGMCGnNTjznT2rL3gwUfHBbeiYc3JYv2GqQ8nybqUR53xzMFeTKmBRRWfUHKJSU674AdPQQd6MNZQ1BRqqDS",
  "key41": "4yHphy3v3fQpefNznaf4p6WeT4irFajW8JdAF8r8zknkhG68genYc7ky6JveUpYKmz6gKJcM6DditcKf7w1At5kL",
  "key42": "5S9KNcg5uDs4AczRVK1EvJHS3DyZcSwBsSyywCqX4UkFzJpS4RRAP8ZatHdTN2RvPBpZJMRGPZbgJjYVSCpQ71dY",
  "key43": "nnCw7aPRhpBStBZvWF8JfRXbvoBxFavGUm6sJyGTxQZZgQoXpitEQh6wVBFzXR1jK7gNzPDPBgw4uMJ6w6Q3TEH"
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
