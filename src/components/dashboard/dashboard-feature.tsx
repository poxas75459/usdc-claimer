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
    "54eJskWzLvDJ2L8m8c9B4PQzZLGugeXod3ywzcYBMVyGiyR19S7fv8ffbXVNWJVRqfqkSBWHVxmpNNiT4kaEptMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjWzhfYTkp633hNoS7PvtFtxBAXcT93yf4m9CeMRVvw384rH7zxVFiRmZxtWJVzVfbsR32hQzP2uSnnnDo6gfzo",
  "key1": "2fAnx94g4gaG75tuc5pK7ZFrbGxFP3pQ9zwcjjS1Z4rmZHwg3o15TN7rrzZXqtaRjk79xTyaceewycvkAFxH6QFE",
  "key2": "36hjcxo3ptAQQ4cBicNHVWVzQoLid2WNp2HqwqTCbT52RsZz2jxMs7fCuKf9hKuL9tDtympqQ4vTynLFVSmBascp",
  "key3": "L4DCYRvxaKyVcG2ueCKXrVW7ge7pmZaTTmC5esQktrhAsQWUP6GugCN3tNYHYYqJkx7SiAC2xaoEWe7itGxZEtk",
  "key4": "2JMZ5D7v7p8U7dPV3LAd1uo8zFi43gi5r8FtSvRuczwkKda4sxP3saXHRgQs9TBZYyZm7ni8fdcwsWbWq2FGNkmM",
  "key5": "25Ru2f7xiApuGq4tw2NuBCJsf4Nooxe1TnKXwNbedLgfh3enoZSfTcneYtbsgZ6jMXE8zs59genq4vHMoYgZRCFd",
  "key6": "r1yFV45EiEVE8Nu5PW4Aq5KFTtu3bES9f3rHfBSw8KkaPQRpRmnEwe23s3ujK4eXJpv6RAUrQSEFXKxqQx1z7Cy",
  "key7": "3sD6g2MHtVjLpBYs8DRubasuPtvRyun8wQoXABtc9oBxbn9z83BBUSAtYuR7ZA9inW7yyg866BHJnQ5Sm64onp2T",
  "key8": "4CC2jFUXU2PmFz8dCHatikQvFxaydbRUHAdoqWtN33MVuFnFWTuo9JN2jJRftYeV3jBZjZuKbsUQSDNFmM61oRqs",
  "key9": "55Rds57eZSiQY7Bxn7ZQiUZFX6NyU8JrbjjwhqC71DTWPZBukzFG3r65TwYeo7uA5DjLAabaRdX1E4jVouvgi5Xk",
  "key10": "2ngTMQzWpmpZg7JNdPovUNHfyDpaVf2q6S2kjk3qC6pkUgR6qNbTnZaZ5pdvpiKmCrafbQx4UH6Z8ToXsmnyxY8R",
  "key11": "3TR7YAkWnZujb3GZaMUgntcqxCZ9TSEi8u35MDtqXhP7ZxFCczDT6fbAPfmqWsFBKQcX41d8Zdtd9ar6CmRwb4mo",
  "key12": "2T1ttKU2x7TxBZYFE9S5iUEDUgvqxvGdcYCkzkkCnfEy9yFzDLQZoNzf3cef9E1TmKxvbpP4d9jJpNC5XZitWQ8i",
  "key13": "bsZidV985YxQy2ryACzZwUkgzehX7mxbjhSb7tDixoRbwDsk49fpUDDFGVa556EFtA8zeFn4yzA4hVwYktFizL9",
  "key14": "5GPf6MmojQh5J4rUw2hQhKuhDtVP4FuzVSrUauYv8vuMe3KQDppCy6EAYU1Dfacw96JG4t4iytX1JAC44khEvN1p",
  "key15": "21aMxdxE2y8a9E9DwSSdm3HTrw36ArmdWFKg6cRvYQWDX7cZpodyJ5HK4onkgcuXLtygqsmVfFMRTr7GgzP9wxGw",
  "key16": "C32LXVKayTWB5bgEJpHGh25XHNPmgbPaUVwX5SroLWrACoCKdEiu6Sg9hE7WFL9rdn1qRxgk2KaUc89zuXcmJ1R",
  "key17": "2kqw7Rc2VQicm1x7maK7cgmHLXyf66zXqSVNCBAmDJxo51QqbDt9NqacuudNTJ4TDSXHsA4GAKoDFh9Y5iv5FsZ5",
  "key18": "5x3bn45tL3nGMXFqXDuueksNn6QxVVd9dGvP6eHTRSLuxE36RY9hfkqdU59fZC32YDbzXdLUrmNb3vwh4SsRUkcJ",
  "key19": "rbXbBmFn664a3y7j26mxxoSqwezWBdRrqLnPsbVXM1FoyumWUzJM7uz9EyCFJxnJfTUGqacmxuKsyBYhjJ6zYqD",
  "key20": "2MByNeTPET7Ea6pbm8Nc9daJD59ykkAPrS62tRxEF6f5pmyUW7CZqskoqo5UgdrFdcxisdYxrA7YG2b6N3xVGcoD",
  "key21": "9wuD4vaMysizGeDnkGYfwWRXFhDsbQXXK8HtG37QDWNjxUCjReKgia67qMNhBFMYYvHCt1bTSh61a74btj6DAnq",
  "key22": "53imunwkyXRqpfFbJidb9uR6NQfzvKJWdpUkwoFUQEqjL8j7MzYEbusWZbBBr5xUh6eC2dW3PxJFYcnce17Sedr",
  "key23": "26EkRYqVUhLJ3AXiEfPbVZEH5b6Mbgwx9ehUV29uc6KXhemU6hwg9ubAheHiyzrqqfXncaGJCQud6Ri8KPRnaM3R",
  "key24": "2YuYTXfP2TN2bjkiVnZDp1rZsHMWg5SS1ooaDmUUdJmvAQDGp7opcNaf3Sy9QB96AgMCq7AiZTLtBVtymitPFrs5",
  "key25": "4mQwo2CdtXSjB9ZiRhSD6vnSDZMQYq31pWskRinHLwWT83d9iG1zuHw7YqbNMrLVE1z4EgpazvrpN8d25BUjGfwb",
  "key26": "NC7xc9s6SzDsHZCqgV1DA2FZb7d1QzkUb2YTVwgj7x3J5n5XYr3jfqsXeKj5ceLnSVzbXccESPW54UZmir9SRwu",
  "key27": "33yUmwfUbWKnEez3LqQ3p47K17ceAXTKQCKiThMasacmSeYTKrqC5X1avbeZUxNNpUmJeej9KDDBAfSPGWRfqFK2",
  "key28": "3CgfScaiaw3yytDZQ4FaHh65edMFgy52popjAkyJhL1CWNUTkLBW8M2ysVB4rHsifsX1WSEu18xbtgjyFscotmSQ",
  "key29": "2bBGbkbBfRKckewN79SM3mcRytxnJp9Nuwryhs6CcQWdXaojVXphoT7mmgm4MkdYEdGWcSk8jDAVAcKDtSMe7Ces",
  "key30": "3ZaLiTqaWZAxnhpBbBpbdEjqCBxkKWbgQcJ1rHSJKntSrVktxevn5Cq1m924dqPSweZmjbADWEoj2AynwMhXux2a",
  "key31": "4dXbDgigQ3gzCnrzTPFN4axwjRuFwyN7WWepr6CUVimkNV6KaVx9t8GnJb3UGbuZ3LJDAcP5nhdnaNedQdD4m1ac",
  "key32": "EaSmZxHTksFUC2uG5dgyvm4dpTSbpdfA5PwNzRARff5YZv9WZkbypfnCFmiDz8zaS46GSQmuid2wP3MUnBgQpcE",
  "key33": "3sTS5mjSWwE6JrUM519mR4cJZStoZbi8NZXjG13PjzUi5f9kyWRwJRbiUxzw3MWLDoS6kyHLfaoF5S8RCgEPgugN",
  "key34": "2yZqkRZRVU1axhbvBUkLxWjoyzFCLinUh4ugW8X5D3v9XA3gGo5jtvVt2njfQLgesQDkhQNZcCoFKLGsopdrnBiD",
  "key35": "4abYkkNqqqRNSzkFNqTQcmjLF91Ad68uPDJwFqRWYTHEXjcA4Rf1AYqCy4CwChUyLxeWR3ubvXJQxnSc5Rc8HFSd",
  "key36": "3jPBfvCfmQeDwkAahmLLap5XfQF5GptdgP7y7pj9yp3CGMwNUyjiEpRbhCgv2QHz6wqFdcAzmHZNs7h4PwocReyq",
  "key37": "ED72obVcCUAjL2rZbQHQXVMWwJtehHWkSVQXBoBAMqEcyroMNdTqFYvxuHZHtvF1gHhEN5TjFwMYvMwxB8C4piz",
  "key38": "5WwNVGdgfcs5gAuyYY3kw32n45zhx44phjR5E1WjFEiCqNjvxFWQafeFwWrsfC7bFTLm6eM5mgiFzQ5hVaRxRVDG",
  "key39": "63ANkQzbBTJkDwNvXFTzpA5FwPUuopjqXar6CAD4UjttRY2GPN1Ran8UwHhxYMLZG8jtjwNSfjEnX31jK7cUajpa",
  "key40": "5tArNz9Hu9nzLHMUgSzpjM8Mb8512dYxPKGRbKsQLrskJvfB11gm4NSbWXtC7Zpp4VzxatE1c6vdWNNoCw7S3am6",
  "key41": "4a1BBaDKw6EtepstUvmkbzKopPQJazBGShbkvahvAmpV3txZDC79VikpCJRrdhpjPTH8QEeHBTgQXT3XaeBYVTG6",
  "key42": "NV6tE5WuxLJVJh16rvXT94gTAPVhKsFWi3MipSNrH4DJ5g63UyqELcWiPux2jkiyN259GrqXtGGpsj2FFVf4Z9q",
  "key43": "rapXAQwFdmhWFksRJ4WxY8Sej5DrvRUoZuPKy5muWyYkaFAvaG8pzGwhutzkU6GfFdvF416wBXFjsV23ov22QXw",
  "key44": "4oW4aQCM8uVcJeTTrsZmvNhAEhLqE4SJTqtkZijg84RoC4fwqLDcNomqfQiroCcW4kPDgP48jcYWSskthKyGgUpw",
  "key45": "5rLBHRwSWtQsBqnX4eRZyQHMSXkxZ8rCyoFef45M6kJhdS6dk9z5asMaiizhBDRXCKt2UhmkGu8Uy5Jy1VqZ3ktx",
  "key46": "31byQpLuwhfrXE9og3x7v5DXcBgmjyA1mmC2q3N8rBdRaHPZjepf9swCnjDgkiYDsjMKWtNoCdXEXEijvPjhNgq"
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
