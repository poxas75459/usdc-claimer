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
    "i7gDTXgW4YVW8LTeWcjMz3AVUfK6H3RaX4d2Hy8Tc5DEYzo4qsLTfDbx13jmBHVqVdTdEWcaXgGZkZx96pH4PBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmh96YHrjHap3LqembTFobLapHgnanGyRa7XbpxVqToGzUqBAqvFGzob5ESt2uKvKTokR46vGzvp2tQev8YdhtM",
  "key1": "4Hucmy9DdB3qUxHNhkrhQaEsG8gE1D4sZRfngLoCugx4r82SeErwCBmDhDHJN55tHRZ5cvVMc3JX1NuFVGP6WJW7",
  "key2": "56gH7k9rb5Mq9bm7JvbMg6sP8juKJWUEAj8NXmr9uEy8K5jWMxJsrhcZFtTLiKhZVqmiRR9v5MRfNFHVQXNNxHi1",
  "key3": "4W6HrFDLVjvnPFthBcWuRvKrbSVkXu5tcVmMnP2xpEYHT2wYYBK5ZoEEu97r6MhGfhke5pStMFkxn3v6tPQGb7SC",
  "key4": "3XeUAwQeTvuPGLwYXedv51fAP7Kr3bjFJSn9MFafqiHdBSPtc2Ka7f1NKWboVbykgiFLwHKRCda951H3ZRqYdd1q",
  "key5": "qzZHQ7LWy4MA6KYMW4Rw9yVgXzppPjJgGK53TU33WYwRzdgwhNxa1298WzDKZv6MekpKp2PMTdxtSp7EkjsqAsM",
  "key6": "gJYF4nHMnHWGd6Vy1J3xtP3ewg7613mKxbhvuXGce6DB8ymBtki6FZbkPG2t8YrbZx9U9fcuapZ77TdYaht34ZN",
  "key7": "3FADQbxR1PZ1aTCiBRPqx8v77BcDzSY1rm3RFE6uVqwiRB8fmo7hQMmNWd5zQGLRNuSxrPXKv6hbk9eySkrqCQ7N",
  "key8": "5Map5DdubVgFfdjhEgzgG2yNvdz7HSbQce7EocA5cnTbrtEedmYsfxXRCFMzX4zfaCHtzA7tW95NY8MtoyaJHL6a",
  "key9": "3uEkpFHhRvuLKtQgVT7rHhCNaUJ8RjLbts7BiqsgcqSwEAKkJ7GynBsHc7GjLccpxb2EpWuCEdsAdNVCU7kVmygk",
  "key10": "5aNk13VbEq67Xn32JRKV9A1QMWj4dvE9pVudosWPjkgwma182XqZLfcbFMw3yL6X8t7GHaKu2CGTkntHWpKXegUg",
  "key11": "2U6rQc7CiRacWri14Lgs6JegpsR4pSb5P56FC8oFEYLNAwuuZnZvKAcSLymBE1SULVRseScJq2v8tyeez7ctkEwH",
  "key12": "C68qmz8CGcyaVsTxnDnMy7DXMRd3phdmMiPAQVG1aEuyg4sqwHbyvHBmQXVTP8CFFFHqWWWZcNDWB14HFNYg9hw",
  "key13": "216mL5zqkbxbaXSeayWmz2GL4ws9KMKGyRJJCA8qR3eXpMyGGvpdnbADX4vPPdcsWLFXrtbdrjQVoqAJFNPzGkSd",
  "key14": "2GkqDxU8Ls13nH5RdbnSum1XuJvUhzCRFmnLEzRkyAV3UmMcszykvhKwqNb8wdvM2kmS3HK86NoYsWQwr9yZ8yjJ",
  "key15": "5xPKToEeHiUKiPpKDc2GhLutb7mzQ9ffmGiMXF9eLL2xPhU4PXNoM8Pko8BrP7QCPUHjvQGPkX4hWLDSRoB7h9nZ",
  "key16": "2hUiFW6JYnG3Qyuezw8JW6cdAkbWsanH12UAo995iPjkQaUgSk4BJ5rXUxtuUaTiFy4DrpBLqHGF8THR2ksDpqio",
  "key17": "MFzwdHqSbP66nH128xxkub42zBiVeX9eQLVTmKGoTQu4rEfMLXjrnTuZyorSvNHAQuD4jNp5NuZWUhSDYeYzNKg",
  "key18": "23dSzCmQ3DnVk7HV5PzyvDYamHK1SewK5ECRikvnhApMVczvExjoDsEpWBgLKS5ZKfgi2HEcRPjUgdfeLssbCPgt",
  "key19": "32dbgzUj2nkqfxRRSyN9nArLvPsvYXH2whFVF8QikJjscsDvvQg1sEMyAhnfws4ePJnHZuk4B7bLnwFLp9XqMWX",
  "key20": "5FWJssSsaymDrbszp484AjxupNV1Hees3ra7JwebEj5vqUFD2ckmdd84puC8iTAiZHMuGK15DgKTqZf5CyFoGDYU",
  "key21": "2unBagavWvmomYJx5HUweR1tWNZqpyUDjpPLda2syYcgvLdMXKKZscwkD4J6uMMhn9cu8fuW6Z3jph5fi6Z1LPLs",
  "key22": "xAHmomvaCMALqquVj19ioQGmFMaU1vx4M8cLFZdo6YUXNjjmrqev1Q3ZwsHbEa76sWadibvNyhsGcH63pnEiack",
  "key23": "5jjp5sjRmvK3PG5FboQCs5XaJevghvEocUPXuc6wW7bxQADmds4abfrZypwkuhZLne43DynSCAGFtpTUTc5WWiFT",
  "key24": "2ThY4dXA3YejQUTHmexshMLep7bna7pSntgDs6HB1hQvQyoxErujbea9U9RpzzqMiFvrrSfR75XJCQtDbwxsijct",
  "key25": "4caMWzoe5wHzQpt4MzXrA5dT5yYKWP7Aacosh7WwWT3gzmb35WrchdE7fLTDJa5ckTnpL6eQJYHNqRjiXkNUZWU7",
  "key26": "2Um8DXBr7wRWMAiCKzWqKYAViHCrNDJj5vGnCZVdVKLduK291MScAvHrL4LQn2Z7tBAvEMRbeYFCcrdJ8zMHmL9y",
  "key27": "125CMfBfubuuevfu5UTLKXsBqachsgmyy2cHud5EJcKtzY7R9XY5az6nSiVBMKccLu2Z4WKtVgRRJV6k8GwT43H",
  "key28": "7AByqkDD8RMao78Bhb3yogL6191jCrgWHSMKtSfB58BPTZHRJ82S8MWrehMB13HHe3ZghptNgEZLyb6zoMiZXfQ",
  "key29": "3gbNyUupd8NYD6hVdBsbn7tiQ4inm7mw2QGou4LSHASMBfuLNrHAnYbBeWzhkaKiXFR3Er5LgEWh8UW8gWWnzT44",
  "key30": "5YG4PQQ3wzjAP57HhPeAtispN5q4VxZ8zjcC8h6xBYAfNqtEtgRnrwUtoAZ95ZgTtxfbABoLoqB2neQavnu9fyiU",
  "key31": "3PNfxuXik3Pba5CvyYBKn3G1AzoWoMSmzjUahDPjMShFuCXRDyLRvS1T3CVJF7FdAE43to7Z6kzWTLD9qDL3N7su",
  "key32": "2d7gAML8JW8sCteyKasTKZV9bYf7YiaDYeUe33XRM3Y8mwvpM1kxQmWPK41YxjhiQEgPFMGdwuXj1eHnEaxBHUS7",
  "key33": "4ujdVesrJWzeWY79batTPZa2FBmoohPXL3h4e4w4pVw15S6udqWFoGoCQkcFSAt9QPKk3G3mi89fRAyLvaEzLFL",
  "key34": "44W9tYRw513FxAXzwZzgofgUjBF7GKkdSBY2wmYdL8Hb5uXBU8zN7BtP1L4ceBRahP8Bmn1J1wN5bh77z8PeQ2ZF",
  "key35": "2YDwVE1S3T3WfeNU1tGFMLvNDLgVt8FoMCXMwar1UwdLt7tf8M6cNQTMLP8VU7qaBeEYhqz6aCYiEvqzMng31HaK",
  "key36": "5piDC9DKydmyfaT55LfJxLT6ZobWd4vu4v8LJeLtxvViiWx5izRs8qo4rGCBAohKRtNYYepJDWpzXkrEucwRz2Jr",
  "key37": "5A7FUriJ39FXJDQBnpqs5Ckrvy2ZTQibHHGLCc4xuk7PudvydLowURALZMTPhVf4XNzBcK81KAerMygvfKy6tHdB"
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
