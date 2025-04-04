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
    "3WzeqzGWikW16R1jikngxG3AscHPDi6NxdJcTAN8GwEtuHX9u28WdJu87xdVXpWvwVApvdFfjNkRM6s1GKcoYnuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSsHhPCYysV7tSsJ4wNUGhQENLqChJXBXQ8aoLZvC7cSfdFq2JMKeJceMv3DdMRAet2dtPy5AMMWCqbiYMCRZbS",
  "key1": "64rwHQ6MqQo6dfgm7BMTWnK2r2u7XAxfruqbt8cg6ncB9jQSXMBZYBBsBqYhqRMJb2XhThyYJTaY1ivWU7QuGWD8",
  "key2": "XqqA4uhQN4TZBfhxyw75pjDmAEmgsVk4yBNtrF8b9QJGtLShhFrrmP9k2NbuHp791P5ALNdJSnDXR6vKAWaDTHw",
  "key3": "2Nk18tazhxEHcbc2ZnWSCxaFyioADmG7tJPw56Lt5yLqTkvvgooFkoCRaeNYs92WUMbjUFVYc1MudAhKzFmJQUcq",
  "key4": "4gRB9avbc4YbJT6i8wdF3z1636uhw5QjQXBjhCxLShEE13xSrKvENzJsBecUYVTTsFWhARnLa9jNnmpdYC6dMxSV",
  "key5": "3DqcAP9pVF2ENw4oy3gQr8AeSuweq2bjieTCGKqQgqqcN5xxQk86Cb7FUbcfDD9ag5jGAqGJ6FTwmXt4vXQxQ5Pw",
  "key6": "2z8vfJk46kJwv8DrNU1FyvhwxekDm6MM1r6rs6Juk2DPAyeRNPRPRkDpr7wq6mLPhyEsxoUmY7X1g2Hczj27s3me",
  "key7": "2XmJAgSoDsB9P8fsrW8yLgXxYFjXW3rumVwTNw96HqeNccxDfSo5kiCzdFkC1iW9yc8P6h94Boo7zLdWZwD1iyFT",
  "key8": "28KCKQtEQE9XtPiZietof7BxMmcALG2Wz4kzppJBJTV9jNbY9FvCJGByV2FKE8cFG6KLMuVocCQra4cArhxdyg6Y",
  "key9": "2DfG45f8aJ71mUxfCz31TBuq8jHgbRGRPRqTXtg57ePBtVsb7PtkpFoc7GwmXHxsTNAEs7AzoNGHB6972Ta9DQ8p",
  "key10": "4BUzTadLN6sTazRm41Nr2JGz9dr9d17d4VbP1X4vtEB3JApBMNHLzxWCbwdF7qdrewiQAjxkvZFE86RWnSkSEY3d",
  "key11": "2o3LKt6JHZB1ycyXaBvJDd3rm17YMUfMs5G637HiVAhwj8Pi2QbQRe6ucP2JmMjZm9h1adRFLfUKNGFFj9PEJTa3",
  "key12": "UYzRdNzfDnAH1F7Kb4u59a76TVCbWGxQk6nKJYx1xbizRHg16eLmJVrp6AYBPgLGQMdQ2JAhLtbLArPpuYGqjKz",
  "key13": "2xgdFBi4r4sadu5Xz5ELjC68mp1aqSGwmyWuKBxRVV55bii7YJJmGqHbXU3CapPNXxPrgyNUFJQM47vQKGtSB5kY",
  "key14": "5r4YNseLzYKzZ6QePHFJuQUjK41mP3YczDE9ewvWJwQHmt6SaxNz32YJAo2Gtx267k98NPUXL9Wfywd3H8L4Hb8d",
  "key15": "47Be25GPoXQz1DYR1QuJgJ5BmMHgLemsnk91P2VAtAbySVHvKyFnSbCcj4vgC222RfC6zqKMz5D4q2FsvbxJMW9z",
  "key16": "MqiToTC4pBaFMKGAKBqTffeUMgwj4EVnxGGPtzHiEktDdjXBgpvsUEjLVTbsAeAohQrbGMt1Sf2Q6mcEpogDaEM",
  "key17": "3Zgb4rTC3HDNWwK44sG8LEfqqPsSvBSo7gzdbpqJDqbEmeJfA2MEtorgmoJPLyKaUt6FUPPP33oWZzbLUen1uiAf",
  "key18": "2pgxWtqrfShBYmtV7HUViRB8db8YEZCmmXEU6pymWQoMCAc3jSLT9rGzQYfPKrx1ShBW29heeUyyEJorf7ea55r4",
  "key19": "MV1f3TxT6SmWUevmQ4egXY5MN7omgvcDAk4JuNnhWzT5NBx6bVtoxxEdzHdqvF5Rz5dapvHfDsbRMRwtrPRxuU3",
  "key20": "Yp9LQ5VM7KLawHGfUwQg2fzcFSo5bygL1rk2JqCzEUFCpqo1KnLkd2EoCgFjZKLn4RppsQYRWYsfmRKGyeyS6dV",
  "key21": "2V6PCBBGUWjfBgt5Ay41qtueUoGef3EhJv172QeK4m5H5u11QsVZtTRaqmALA5isEDxEtiNYvboGQXcBzLN445Cp",
  "key22": "upyrGmJ7ie6C3PbjnzZ9Yfjy8DBhgzBSfuqbFV514ertw49aCvLjyJ1wyKgJpVddWFFr73LGeyojc86NrEmekAc",
  "key23": "phtjv6TsgSmWpDkf6LNjfgi7MWAh9Jx1x59wxVP8sdWCDkJDY5BxFq8zMCqMgFrUUZfBRcPJxvUNQ3rtUetUX7Z",
  "key24": "xJ7VMEiZXKwAXb7c18CKQ2Ro4KdHBSEsKjGRicCYUTNvt27D2KJMs5syG84T6HFriYTNryqeZ3w7NQ6N8r81k5i",
  "key25": "3y2yu9wh3xQPD2obEmo6TNGHcPFQpoe6DWVgjgJaU5jFGsnQdHnCUifmv8p2ah8TA2hY1UggmX2MENx4PpTg21BH",
  "key26": "3zwZNd9vfxNqspmWPhzzJ6zN88CUowgSG1kavbk1vfR3JaMFdgg7dwapdbbhdA4wQrP8d6mXwaixMruCVbk81tAb",
  "key27": "3YNj9ohsAF7QtvdHcMvz1B2xK8HDBVAM6Ecd2U3a9V4mZZutXSmnfaVbnTiCL9jSbv8tApnHERTdYbaYo7x17qDp",
  "key28": "5u9CMNpTfXALnPLUQY1MbagJxAsHNiMqqb6ax3zQeBaAkVapUmxWuenmx3NMrYskJPAmMV979DCeYrjHSnTe7ZTG",
  "key29": "fvG134VJXVqFpCqVGNCQo3LQB3PH4ijXbwmeCWnxsaTGhuAR7ys74TU8yExyNjzmZXRSrEkDHL7GDQJiEq9GeKD",
  "key30": "mFcc8HFEc6owxTPNQLxGCmNAWFYtG7AwuY5DC92aeidfMtjAEg1CBH4UTptgvQx3SABCcgKRVGFqS63QP5XVnqB",
  "key31": "2jaCH25JM5bMyeeqN8YcQ2wP6m9xPmAYpnLgFJ6gxy4mBms43p4mFZi3WkTwYtVxZz3jSCK2JUYs6tDtgucUKajA",
  "key32": "4Sst6Mi1JRnoffUv3ZGqjFDXibDrspNXDAodieNyxptZ9KbUkuRuAxYLDHvLkPBxghUirajEgKqQZK84C7ZkJ25C",
  "key33": "2vuZcds7MXqBAS7CDdCto3p7GD5HRD1zKciZWbZ9Rnz91vUb7ZgreRDQKrHwKBV4ENcmgScZp48LBAsbxt983kq6",
  "key34": "5AswspbTQ9vTBPLSUUzUV8KmDvqaJhGCSoCQD1j9nBQKaBvWK3bGqnZxYgQGewboK7WuHP5B6ozahF52i57ij1wM",
  "key35": "3KLuwCdryUmbsvzGa3ztMKujj7mPUyDe2oQF3MzVXWvUJUwsjqXajmVfjwyTGFuZqDL15Yo1yifY3JV25Vghu1Tz",
  "key36": "fjxoVRWiQE5oJWQDxNFdtUNHHRUR7YW6Gm8umFUttG4XfgoNps2cYVpdNK8XywN4bbhFStGLbtXVxT8xLnhgVcw",
  "key37": "BqsmbzaAcxaf2tgmh4PotGjcn3wgC9mUnBVf8AXys5q1JL248LnVqczc7cwLsr2kXgx3zPq1ZdFoBuhQG7BqnEk",
  "key38": "5b34nZfAcm7wStqqVwZDYAHQhg75dUHy9sX4n6yDB21FjxZJrtLwszGJm1fDn2Z4YE2aikgfyuYnTCiBDCq2Jqoq",
  "key39": "4cbFHRvWt59NEffKAeQbeCqd168ixe7rphhiTF5Pf7xu1Cs9yeLAMpt7Eeb9HhkPgQX3v8ouo5FCL9Af6Ctq6M3R",
  "key40": "2yQZZqHss63hBmWmeqT1p6xWoqL8xAgxPsLk4jC2dmq4ZmuoG9oXzX2yUvLbZoce5yGU1f5TWWiWYdykeZ2aMxkC",
  "key41": "4uSNdvX5sDR1U8yVxeVtztnr5xhvt9GbJPtAB4hBPUi7L8EezFWiRpX2fmTcQQkzUa3dDx6N2upLotgwiVyEhKnW",
  "key42": "5FK75ArwDTXB5y8FB2sc1KoUYTeZbLiKwkLSVUnw9yNDhuSwpWjj6cr3FaLWmffUSXpEYARbQobiCT1QZeXhrKPN",
  "key43": "486ddKkMjFH21sdhHX87F68qf5zuCFhhzX9HVGqMLnde1nzJVqvUB3MGvNtJyW4eSGR2c57h9mF9R4LcHPvtT7n5",
  "key44": "2MHyGZronBoAihQTeCzDtLEwv6RLnLEkn2mF8QgiP7fnMNYXLhrLviu8N3BEBAHP8cdCiN1a7sPt1mgFGABKhEjs",
  "key45": "5Zan2dmYeYXjXbLJiddEYXNHcwjjyripKD4PpA4hnJdnUFhLXSBBxa8wTP2QuRHhXvmMWF6ZCVUcnnZaYjgXehTJ",
  "key46": "5BTPZvC1CagEFTWAbVMKXgngmCTWfXYxWmc8R6XaRK2u9tiyAKo9PMwhzVmHUWQPGSeXdBR9YqVQmdM7Xcq8G7MF"
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
