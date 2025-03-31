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
    "3M6zFdTibuu73XxeiMLjJ8sU9s9qiaQ9Y2VJu6CiTQLiqzMtgLg9FG5hDJqegarrDeBQhYSteD8n6NhB9Q7Fn76D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADAyzo8chFTfezyS1orboqHMeQdbqHwWxjfNmbyLBFtknukMn64f7sMpRf1p13HVeZKEHQp1cTTv2oAL8nm73fa",
  "key1": "3xZ4BFBHFY671AvZZhBwwGeuR9rFq2YA8g5aopYUqW8GwENZjWxg5cqoqdQurLpPv6oYGVkNWgRMDVCVubiFjH8U",
  "key2": "3V891cMgtkb9n37bvddpsfKBPdRP1gmySS1Q9GQ9aGFyM2K5M95cMHQMbbKjgFyK46aybXdXVwyuSNQEDmoXQhKv",
  "key3": "2wt56j27iMVECfagF3XG94EDQ3uJh2PS9CjmELRkeTZxSZTPoUev9U1jbC5zZs5u5xZbRUP6QbRrUZYuA3MDR1zV",
  "key4": "4RkKmU2onhaoKap7jqEnrLRNpzEvGtVJoBW9SgVGLuZsnNpUKRGVqBhrjxN6TDYnth4QU3zzis5mEyRDYAdgzCCL",
  "key5": "4qgnDSy4bZDHLrWFUP95ZZnbuRcyMXQfXiRoSa6wNMbq4paYAcB2teB1zMMF9dV7jawXzvLjgUHCHjidp5ScdiKn",
  "key6": "2guy4pYJPvxpvkGgYNEwtTUyqPEfLfyxtoGEvbFGL9HrQoe4i7C6F8bVusm8ERgKeUw3SKpZGWT58wZisVW7LPyR",
  "key7": "4ErRJagXPBtK3RM2VYp7HA1pV8uBFuxgqYxbsw14LJhwwh6wwafeWsqinjzDiFN1kFTfo1ApyTVE9USbNdR9TQoq",
  "key8": "5HzUEhLBunaf5T553dzVbrZswREfCAK515gbLa39LCRFACn6MoFwLwVcyTSXSG9nSPHKPiR8sMNSuWj9RuCvq8RZ",
  "key9": "2VczLeBbeN8DqNNQxDqm6YCSvW4jrAhUqZtSLhLgmYV7XBi8aDmStwdezAfEGoxhBivrxpNUg9F8x2ffx8vNvpa9",
  "key10": "cS6gU5CdbY85LBNTNpzEdXZEUcdfVxS6XEBVfgu4hqTBd6qST5UF9n44FhVK8mthczte6Lno5EiDoNR6p5azvz1",
  "key11": "3eEFWxiWKBg3bwhQGfLcS9o8ude59yDpvH3srp5wGbZQQyHFNUgiBK46xtNBZ15zbaXuJRTpPouNAohXWtqYjwEd",
  "key12": "5e3UsdRQ3ve9XV9QdtDoz1JxDzVqDw4iFSxWdaBWNUBxSXkDLbSRNXG47UV3jcJoEBPPnyCG51SMBPCv2xp41zkw",
  "key13": "47LDQD59R7k3y4nWWqEfNosnKKx8QDD9Jb1PXFWb9MF2CHoUR4Gf4Ke2ru5hwNtfk1aAWx6hRjhsxFTR2DYaGJ9k",
  "key14": "4XKmbGQWiZtSuK4sfioJqTQQBKpcpavpPsh5NEbDKLhBMvf4pMrej2gngveziNMLgCd8WkuTUsZRaRX2Hbw1XxnC",
  "key15": "PEfb7G55v9yDF7eTtYMocFKD2ckhDe5uWwp1SHDnzmfJSYzAsJvoSUjt9g3Q7K6jEE4224F8Mi5zX8meUDQSWiU",
  "key16": "2QjBhbphDv1CNBBXSRYWuS5yUoyponASnbPgLGhH4j9UAVLy914g3QSJTKG22YhBTjcpAu7KRyCGQ3pg9jjCgnUF",
  "key17": "5BVhahysN7C5Ns7TdhqLVLN8nhR5FEeqSeppPTdVvBUT56ZC4eVLd3vbx2j5jsz9FzCZ7r9aZERYAo6MHgRRRbS6",
  "key18": "5oYrBhdHoA9Z2XLxH6E7p5hJHHiUBpysiMs4EiwmENAm6ARjadGT67qwpcRdpDzyR5H6uvgJLADiNojkdTCNfT2v",
  "key19": "3cHY4BokXeC5WnoKTtkTKTC5ayxJbw5sT2HBmK6ScuM8oJpUsJ9y6pbL6hsURJshKJSdEK5bkJVEnnoULCoEERVt",
  "key20": "5qFna5dfWDAxtiCEWmWoNQnVdC6oyhjJLJLpCfWFDLj9T8o8A3MbkvUtWQkH9T3DvpkHbANVUyihUkGp3k77kkyv",
  "key21": "3DyxGBNS6EWaXJZQ6QC87j5f93NDaao4szCFATxWFRhfpavaN7oGJhYu6dsWWbsDRmkiQe1JWyETsBuc1iCu5oz2",
  "key22": "7c6etKUh56aUoTPnoxtNcunYZ3nCTiKrxkQJ3Gqvu9PGmujpYMxwH29pxuiuwrEdQse3EqWtfFbnYRtCPRJsHPC",
  "key23": "35aQbvau6ypnt9Xa9VvkBrcBh5B6kCWBcZxj7iTPcogCzTrTC8aZYyUjzUr7iqoLsTDhUHXHpCJ7bmr7hSThnQyF",
  "key24": "2RCrz51Sm3oCpSSUL46bjpq5ZKJuxiUjk4sYfw9AP75d3pRdpUPLLSyi3CeMPf9Dos69kn75iva2dHJKTP8ERUJp",
  "key25": "5xLgwFjWcVqREqQSruKXSotqrFKeqipzAHH4toBThooNQFXchxuFGEZ2GxS4A7EqVxGAPZ9ZaAoDA6ZfEAveLxJb",
  "key26": "3YdfNFsPRWqfp5J19SPRY8S5wehMKamMNsF8AdfVVWzLKh6CjMcModyPHwt48aizMqum1kc3nErwPDetHGyU1ihb",
  "key27": "ids9zLgi1Rv3hqeiZyDKcYPv22dorHiSvSjo32UURViHwmwZxKGoRNTReqnUXperSK3BQdH9wD9EUsGgWLKL4XH",
  "key28": "31eRQnnGq561eAntnT2rC1dVC8VBCN19WrFE5W9qLXEVqokr8tvFJJTu9kk8ymvCC6iFmXRUM7X4uTqTYzbZfxDG",
  "key29": "28mrZpyKAB3B6GtiZUdRHdsvXPX8yQqm9nnea3UXVkbq89FDBLfAEnZaydz3kksmcHf9DCv5PHCHQw1mQpBBnatW",
  "key30": "2JN7t32YAJeEghKo7pCxWbigGDbgNCNqWQ9JUyMjfFujCiFdKhoPPsWaCW9m2DsMArvbp8GemiZZJ3R5UvomtRZc",
  "key31": "1uEYRprcSsgGCv4qt46Dbg2RmupApifVNz3xdu5CPtSLrjKPXUqsyrdRkFAeUp8gRQGk6MrHdKyeJDFCQ6k3yog",
  "key32": "3AtoGJjLDV7bjWG4TV75qjsjTk1WyBpcSjW7WCmuXfYBP5YwaWj8dB1PLorTHCa3tZabUaKMnmX58kTEyegwS4ok",
  "key33": "3xj7VwgL1TziggeyQUo2m9c4DgMbx7rUidhGyTtnD35G1sbavP9kw21QveC7CzrYgn8ECRoY1SbNCupJTfhce7Zt",
  "key34": "3khCusCBxSqKQVNM5LHmVktfBvsPxyKmqDkBgDsWznA4pELwgQGT3D2AQDNYSTAbAoMJiapxdfGgDqdvvGWxAZjU",
  "key35": "2cgMTni9mSab6DRDNZWuLdbdfSXDweP4S9TRHmLqfbeBqEeukDgHCr9j2HLod4SkA9yu5afZt3GccXw7TJdkewxi",
  "key36": "3uQMyGjvHwYc9w3zgG8kSaxCnzTF6yhrEehE62Atx4QCziBJRkKzHuW9zs8wn15gH94GFPnpX8YN7qW8A43TuC8X",
  "key37": "3xMW9G7JBhgSyA5vdLrVFhEUa1bLDGq3i9Nxib3qTsg91CaXifcXXxe3B13sL9YsAmoUZRdvwfBhkps5VuRceHmr",
  "key38": "5S1jCiMvvyFGB94uArUFKPiLu8FFnrsU1CASmzTFoXgtL26W4sMAEzKMBGBu1zRkcU1aA7ub5yT4QqDfboYosd5z",
  "key39": "2XR3PCQr8hMFZA2omccV2v4WPB1k1Cs412VafdabQTcj4xeSYVMAAHR2qxB3gLVtCTMqt7uiChjc1fVzzk4M91m",
  "key40": "5h6wUdd6cqfY9Fv6sJQxXHgZ75FXtqRyzWvHim9wYbZtz6xG6azygH5QfokG6XFrSRkyMdLpiMJgRzYqCQe1GujC"
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
