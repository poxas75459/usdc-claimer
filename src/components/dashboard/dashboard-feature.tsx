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
    "5GEVmbEAeNsiA2n1LEuJwzdUGbm5c6NkGZToPnKMyYeAJrW1eAYbRZmcLWskEuBgF13vaDzfTqkKbMLd1cz5ZNez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9wgQfp2xCCts3oCce9Q9gwkZgazt3e4KCHbAwLRCobjAq64mKNnntWmhxPA4dV3GoTo4hPqXhuiJAdT8tQ1X5s",
  "key1": "2JQ49CbiGD9sPsJfLZcJM9WTULrgeBH3juBbdaZSFMYzaimq6Dt4rH1TuzwBkwn4xhoUrZrYQTuTVynNxGJDK9KQ",
  "key2": "2Zrrix4qEfNtniDqYXbN211mg5AWfthMh3uKBj2xwvyahLnZMRXU674j1AmMwWZweo1QbmdSzJawUKeoC82afeFv",
  "key3": "6BYqhjYWatkW76DmmfqJxhLvkhcP37dJXfkCn185bNTeJq69HGzQYp8aiyzB83mRLKVBPa8xGsh7w1duAzRPAKN",
  "key4": "5oSSVHuMqxJp29bgFLJcjpsuNtUDhPBg9oknjGLbUbZT4R5M27k9vDhYAY35nw6K2zPhGRPsmMnBkLLg3o6Rz1vu",
  "key5": "cxHWYZxBayHowY1EtDgpeayGrFYTjwsAosdru1hCdEHxPPY1dCfLsLLWHKBGsEfwfjt3JqXQz8bvXqtWz2bHeTP",
  "key6": "aLpphku246i7R9UKXMsmiKJhkFHX3PseJyZXhk6bo8gqduPSKs7pphfj6r6RBMBnuED7MrmkHGNGoPSvmcUM4Fa",
  "key7": "3dPGKvM67gjT6YH571FKdMNXpNgPyVgscVaqMugGQHJsLytFDMZvRsPpaBHht8jZq8j2gFUi5Uu2iTcCyWDTDVHM",
  "key8": "3BUTK3Se1edrgEVb1kspHj7KjW7PSqaTR3eEF5dT569XVucaS2d2dxJtGAMtMDRopXFp3652h4r7xCwaspS4vyuU",
  "key9": "2KN4ATREThJ7hpRWhv7eXJA6araTdQoE1yssayR1H7XNeFzJrCFJDzTQAuwzHxVGPU1wviTyipvPmrUuPhdiF1Pn",
  "key10": "4oaL2XNib73meEZvPtVcLvPnrQJ9vQ45RT8AqNiJTBtivAD3eUrFKzoGS88YznoCLjDC3ntYKJpaSvVo6sjmjvJc",
  "key11": "QJGbkV2j5PrgMMEDUYj9b8A8CxmxNTgr2iNbSKEJQgAGw4DyzYPjfLQ8pRvVo2x4xTcU8q6GhKM3Aw7W1njndPS",
  "key12": "Tur11P4t6QwdFmPzCEURHGjggxnkAMgrbXYFBhrVNeoH8kG5zpjz9CWdEE27zhgQW1fDe6ta1c3JWeZGKYCkrKG",
  "key13": "5h3puybGnUYt65967zTaFTSXh3MDCrfPnifhacJpPcXM8tomifQMn4JJr3gHgTmMxYzzdBj9auAZQqV4JjtxoN2G",
  "key14": "4TtBE3Pxsnt8PSnAdzuCn2yau7wVyYkESnuL8RTmGEaspQKb3PqqqZ3d9MSzkMJfiNhHJ5PGEc8Jb8gCGwzWJVcD",
  "key15": "5AmvTMFufMWwjqnnvjy2o7hhrfyHMCXf3cLJgsbpGL4JVUdmKh8UkfWikEfSV4pcjZm9SWDK5nRrQboWL3YYZJGo",
  "key16": "51dfnhRdYB6XMgsZcG2Z1cUfFkESx2HyfXhssiFZBGHMwKdfzX3j2SEH5YJ7BMXeE7nddK7D5vrhu7oEi3gvdNty",
  "key17": "57KH4viEs2Aisx3U7qP3BfwSqtDuejRmW3F4utBbuSpDDk1hEG8w3LH9yRS54PVLt1MbfkJMw4R58AF5u6om4gL8",
  "key18": "2RshaSytkUrGPbUx7CM6ifc7zyrDMtB8N6s35aFmvXAhJar6WB9W1W85wUJv884ipQvkQzpfdQ2yG5FMAbLTbuZF",
  "key19": "4K1pvkcJFidrUCjntpFji7MkVmcmGkbSjS3meazPUTx8EUypvCWx9nfHmPQzEE1sUH6GssTtzLRvx8qRtuvKNr4e",
  "key20": "4UUEjjDXd89o3aFE9psrm9xrTngNWgCezo9TkCkzu3xmtygvvQHC8aX4ARbj57KEWTjWwZRbb8sE6PxSzGVg5Hv1",
  "key21": "4cMX4aKdTe6zxkMZbMkfba9NsHDhPE5W3sXMR3thi4ZdiNoziw5dESWcyXX2QV7prMvC9rwbojKzn2SYnLEEdrZ1",
  "key22": "7JGCNz3oZT9kZtpmBN1B9YzMYxLiJZCDeGjVvoK942A94j4dqWNa54CfJvR2VAEGLUc8CxNR3PMVyDQd5ZGvJgc",
  "key23": "4ZumVtsnKMxUBMnSzseXxbPPZkZsxrzpxJNRR5uNr7KkH4AyAgtYuG2zS5xRfv7pP1YzPbeKKoPorjxk1rbjFRQ1",
  "key24": "uph925b5iwQ6cuMY86TZiTDMmfuVJ7yfqWRcqEZuDj6q3QNy8n23xkxaecDVVDLhAwiZDQdyWtQx8hNpTVZL3jg",
  "key25": "4e3jL5MvLVGDks64qzLiqL79BSz3cBnZHgE995ESfi8PFS2x8LPvPKdHZHnSKQk8XkkSH25pKxCBJKKjdHFV4YRn",
  "key26": "2qmyKij7r48JyuvpSAdA9PWtYT7CFUMsiQZGXXCrXRToyJN2XJhS8Vad2MMi4UBoo3QbVoNAKXbgkEGV1kPYCtB1",
  "key27": "6wzeBX6pzqMEECVpfa57Mr29Z2rWM7KDtpcHoq9tzDovumDqxayGXiL1cWbnP1hvikTgoFCE9fJnkAcr1r3jWpB",
  "key28": "2y1P9oofQceBMprbucZ8moom4TCWoig4az2CkTSmH4JLGx7FadNhTg82daTL4sUbfHPUBV6SQfbK1EURTHCi8vrZ",
  "key29": "46ohrpqeeXxJKM9avCac5q6vPLosycLgpubJZZPruAysPXbKiArsQpKZZMkJ3NwpWRefPcoZHMDVwtKoygc9hHMK",
  "key30": "32UKVxLHXzRNncm21DAgLNFENrowjdzpVm4qR5pCpGMyYaXcudhGTxYgKqjyZEKDYZbPpownJWru6U1FUofneaiB",
  "key31": "2apd1xtfZzCjXmkUbr8LVvFNkdqCeV4wiJDhwdkico7uXo7M9peFUkvS8G1e5ChpneBiwMf26GjNhfk9y7pQW62d",
  "key32": "PDkbYxLNjfaPtCW1ttWDKrsoXsJsZ3VC5V69ZiGSmGxQpMKH9dmnZqijZou92qKF1XCfHMQB5QGZgS6gwURiFuu",
  "key33": "3hasQAguPEaVwwnMveG16VcGyGMAYQLrW57d8acUCERnRSFkyBfLmnEN8aTbgxP3NSxob87pSVjbsrX6QvTKkuXQ",
  "key34": "22uxf5vg3VWhk7mzpLa9DF6BDCjxkLmtH79ADCGBhymuxdVMNZpoKGLLa4KG21K3QVh1Bp61Ux7PtM9fCTEYWDwC",
  "key35": "4KnXphUUHE1iHB9gfQnNmbmWPZG2ykErCqisDo1QahguZBMaEnn2p1zBMARQvUQ6HQJBdQVmTgoDb5bv8jM285re",
  "key36": "37zSKPxbR5nZEccgQTP1pTFG5bMUm5kRFZmU5aE2kCB4Eu3S8FQMTqZfvSR43ewaTvZ5VcDzGigFFucxtU4ZCyBV",
  "key37": "3GcSq23UMgZ3EaY36Qre7aC5WTufwVZoPNqPtY8xmc8iLxUmi74wKkCRzKzKEFZ5jAHJdJqnG2d88xfetG2VvB4a",
  "key38": "267xpTLU5jbdVY6xoUgDPyTHJxJGtKLstE1JZkvRpRe8mmnosrFN6ioqkqzpp6JpxfkLFd91WKoNSbbPPDB7kZTP",
  "key39": "4bKHq7gKeinrhVoBK9iNZbYYxS2NMV8MWByQ5Tcrygn7yLDaeRruE7aAkHr54i4njmrRzV8Dd4aX8QmZLro4N8xU"
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
