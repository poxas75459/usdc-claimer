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
    "21VvAMSnQQE2U915xAvYp2bBNNvJ2ZY33BdmTEMxEe6AeLBzokLrBLpuDHevFDTBijyqFnw52kLVrXinVA2bhnm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXFPiDmyNfUXCX8YdRzjpC4qSaEgubgPr4tgvTDTj8ukQouRbNpmYSTbuCViQoVKD6k5EorfDwPPFFfs7uS9XQ3",
  "key1": "5d3awJVJM1kz4fNab3f5e2h4ijdt1Y4nGP4FyZULk24fLg5DVP6NzMTY8mma1f3rnCHyS7j7cxHSYwHAViPLeo9u",
  "key2": "2hmmxbJdpe3xCEtK9aoSw56hTy7AR8Y17r67tZhVHXctF88JknLL9RfQeYDSpqTeXkb4zcNLqmGhhNF2EeYZREwD",
  "key3": "2LG8fVsLYUC63m2foK2uYDh9tWnZfkbjP17KNYax9gn5bLeWYnVrxtwqe2FjtJiSjkfdBDjQfLrC1Bo9Z4nyVTBV",
  "key4": "5uQdFqDGJH8fja6Vp8XrKPJDiw59CnBCznyPZdvkqBNA6XZxjrdTSufxK5ADJQRawJ9rcvp955gx6T6WYNmQwLpS",
  "key5": "3xF1Rygz3wNMP7kz2STLPQcEFs9GtasyoYqUQxMhMud6M4k2amUZoJtUFQ5QLNmQVN8UYfN497nBk8HB6HN4Zq6g",
  "key6": "4CLyk34EddsREpUmYvNpdrUy82FDEmRa1XwY7913RCjzcZmoet4bsxUKprZc9ppdGqs1GWzvws12dsTYvZySDhiE",
  "key7": "5HTLq9kMC97xAxFEkC3RZN7mzrA3VLam2SWGoeqDR4pcEFz3gwRUdgTDvZbQF3FU85iGRh89zMayJ4jZCGgN2EeJ",
  "key8": "5VxPshzUqgcnc1RkAfvUVxLnsxUzLc5RT7LevjMEvMdw18dnKJ24QzLGNYp3PQaEg2ax6u6ZaUAKi5PEce4mdPAs",
  "key9": "BgLYo1rMuMs9SScXqeGGiqiddNwzuMWf1ENjCZUQ7Xd7du5LCHoQp5cp6jdoPEdgHsYk9HqTyG2v73mVGsPoAix",
  "key10": "v27at6PtBUXukQtyzvx3yH8o4aqSwvV6gtCWCoNz2oVCj6qDWxsrMxcyEkBytzpZKheKNqFeGDn1b7nX9mx9sM9",
  "key11": "2X4aA1dBar9zsBuAcQRJtJDaEFVHKEug2fVxCe1V9HTsiWvkMsFktuezm4MSDqH8j8xGdvzQUECq3PRk79t6xKXp",
  "key12": "2uKCMDGJxhgzGZ2ACT9gHEwwP1p8JfRdLEswnyZX7xEkkJwaXyxxbfmRGugESxvmuJ8UC9wU3ghEewADHcoSqTKu",
  "key13": "5GSugKC8pSr4usARcsGCFeAeKsmzePdbbuZuN55TdDUiSdFQDJgScVDPNWLWMxP5fXBADs2FwQWpJQGhQvcwdZ53",
  "key14": "2ckzLucacZedhifqj2RN7C5CixikJzz8iETVYf9uou1pM37p4Ph8aBN6GSicbBMz6B382nocEB4Au4bSMB1WDCoV",
  "key15": "2PL2SA6Xye9j6SMVJTi1YBCRNsVkvsBERYfiA9ibPigjgcXqZdNtU1zyMZtrPUzLSPnHHBU7LRW3JQbRPovtRdt7",
  "key16": "4PY7QfXXQJkYajy4Ktio1ETN371uYyiaA9U3u5cr5fKzEVCmCAG9MGqpZcyWjZqDnNTzAvJqGPgLMphKR6xTj1NK",
  "key17": "5kwNyw64R52fUQmnzC53gqzijsyP9SLimd8KX9sCnfAnffkiM9irgaRB346kSdbLQqeh7PvKVsHa5iCow5PCm4JJ",
  "key18": "81TqofKXD4feZsBb7izqdw1ygfbha84KjSgFTj1oNPeRwjS5qConhLuLKW4d3u3ATw7MntJhkvtV2vWQPdrt7oi",
  "key19": "2khpEWx8yqv2rQ3yKAFYuzRrH6Gf9wVE5nrikneU5JGw9bdXShaTozo7vWmhCcP9qSfKWTdVKf92w4JWjVKaUM6r",
  "key20": "2VtwyzExmNnkk4H6iXY7dpYzv4fKFs4uTfqLVRRAfX1tEReGxswmgnGwMQgSHZn4USGUTgHhVSWPaDEUAkoeHFAp",
  "key21": "24xsHdwBDw4dZhyQeiVs8k9zQVyCErPZ5X39f2gTZk6zvo7hxmivJ1BPs56ZqUUYqV6gaBwJ69yLEDnuuYCspGKt",
  "key22": "367nFjBAkARiYUKXv7S5rUD7hbbxsiGpszckM19rMecrK41Y7AkgL9uQcGN644KgzDc9Mi6TM1vgAXdvjzMT4Qfn",
  "key23": "4SRkqmvxQb67Hvnm22rUy8z4ePBv2JY7mA8UtF8myQci7LDX18s67DMdyZTCpGu8eMPgv1aYWW6TJMQzUsJJjvWV",
  "key24": "2zt3j59mZGyZAgWrkAHS1oihpvohSDQ7BCK4f3VViLNAsgieM4eQa53WdaDkXp34neZtV6F5K2tJGTWruC5CLqpu",
  "key25": "5MRcgNKFWqmnQE2aCDJ8ohEXDBrcesAU2PJhkf3a22DGx1HBpaAtBzh69ZfYf774PJ2f55JcfBM7MArvYBKjms9E",
  "key26": "2R1r8MvFty4pysCHBSj755eAiGbt7DBJBjwnNn3fXjrWrTTwhB6nCqwHCgoLv4KBa1HEsowKiK3MusfkogJmbKbp",
  "key27": "49PnWLsgTTTftdXSij4cYytQkYcaErakJmV23a1fPStCWckpHYFGjGbD7utQGydNKsy8W8RhYX57A66WfrpuP1Sx",
  "key28": "3Gq8g11MJxGdRhxrPEzLvYueYtaFogBEF8kU8mUXMmNUMQsVUG7hoqqSH8wyJAHHUSrrN2VBSP8mJuhGGemFNvNV",
  "key29": "rfZZkmwyNabqwzeSkXvhFaj6XYKKukiB7JTnjy1hgDFJxNDFzkZCL1Foak99wXx6tR3FSTKjsqJe2BJrgdkehHn",
  "key30": "3z8j4yeaUxYuqHFEN9pPGDdto6TFSNn6912z4adEACNiANR3NJsYwaUV6mPjXtTv3XfRnpLZ7hgCWHbb9YPvzR6b",
  "key31": "LQt4AWg2Bqr4Wr9iMdFrncAxqqXCRUhGVuL61wBH1auQZY86gVPrArWX9FNLircBeAAozQBv5ATCMYSTXXgKkjD",
  "key32": "643CdDoANT6ozhzQ5wvGnpC8kLEBztWsTfiUGGRUCHbzFLuMKvxUa2B3vxHFRyXahgm4dkvLSz8Em6PZ67WoQWo3",
  "key33": "2jhz2UxXbPaMhoYHxEbbMWxqfQeNEhQ71axUE5tHdUNyTc5fZ6TqttsxCiZ9akeMaWUzZSLvqJALEWiUtb37b7iC",
  "key34": "UmSqVWS5Z8zNRr1GDjXWX3SbiyirhR7XFAhQNpeWpnGXg76TCSHimFSZti7zEkyk1nkgz1DwwMv7xqDUtj5p8iL",
  "key35": "4BAkwhZmfPS53btyuUzQLDmJ1RDFUxsSuG4ukEJ9FLxBdokcGGraYNQkKFQyHk5ARTZ96MEU2Z1uev4Z2QAyi5VT",
  "key36": "kBJtMNbv3JeRMNypEXPCHrThG2zNCAEvWdaPxbgNG9i8VkpUsjj3Ak23K3pJPBEAghp2WjmSLSYkqmM1aRkTE44",
  "key37": "3N6iBRcKNyFbKgnbdXszCi8rcUkWdMb3wcyoTt63wRdveGPYG9UhhfKuHt3n9QtF4CfHbQmRqQpjcV2kWTk8o1Rv",
  "key38": "4Y3Lh8Uu6g5iUKyPHQtjsJgiUnJAugvZRuz7iwikJQ57qNBmVFNp9AxMKCrATjDfrjjJwWv4bzvdYar5tHhLttXQ",
  "key39": "4z44ndva7iZjFE2WsxWkdF68b1qMGjsDz7fQChAUQHgMwfFihkGCnwgWHpqbkxonYtFSMFmsFoiMGLGb1zfYEkSX",
  "key40": "4FxSX3WTVXEFQtcuE3wAuZLuyAih5aETSma6pWQMKtfajLw61nPCRwmspNJrJJQJd66q7BweyaTtwGWL51JXwSqA",
  "key41": "534TnvM6bFS7XuYCNXbu7WaNp1V61BSdUN2oAcSQFsPwQpBHyTjR5RX5HMUaAcjsE9fEimRKrqMyhEiiArZqAkR6",
  "key42": "c4iadWZzvaNdNKhB6E2E9fsHXsXsayQpM55jvGz2juUUeQomgKpz3uado3csW9omGuU2SQaYNF2aWyoZzXbSSie",
  "key43": "4TkDmDq2qmDsMX8SfiVui4Ynijw4o3osHCvkTPYLo9mConpaxDVS3MF2135YK46hckmJjmuFUrP9HAyKs6KsBuw6",
  "key44": "55x1e7dYnEEsoE9k7ZtFigw6TwpHxAYfzqzBYzE428XKanzppcXFU6TEpAiM5Xp8cA35efPg5qSduqDnrJnadeu5",
  "key45": "2KnG7evdCTDiPGofXNCYPam4HYnWaBJQBzT1zvB78yobYcWLGzUJnETroWvJUGajAA7JBJQtvAvnpCEHFMFaYCLv"
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
