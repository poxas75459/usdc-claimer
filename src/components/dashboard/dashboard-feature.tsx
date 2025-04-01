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
    "49WYJcfETAiQ7LxF5Vx6JdSCWXbb3ZVCf6oR57TVZQJKow2JNqjEHBkHFKhdHZ2CMCupzJm2dukoBkd4tvR1CPzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uxLtDDUE8uPbjV11NiMQDby585rWmQmsQo52dFgH6xrigqQeciLUvHm4bniatSE32KHzNcc55mB5DrnWwxYi46J",
  "key1": "67hw4gKseCYgg7MtK6awMiqdkHxiJp8CDbuoqoPzNJCtUiBXGbjWAuFCeoJiwhpGyHA3NKa3WfMs5TSK1zeMDY5F",
  "key2": "3aPWWStREQwxn7Ad9fxhhEBtXwqkL1nHDHv3uZYFuCf2KzyxQXYW8LjVzANVWw1jEwbH2MZqR5mwQooG8i1JpBrR",
  "key3": "5FzSEyuatfV97FTKANymfbtoBdF7xXAqDUhoHk1suYkhz33UA1LkXDXq7tKEHgZt5qdv2BM6sYepTBmCRkTWrksv",
  "key4": "RJLcTGuMcgEomv1aqxRjuzpFn4o4DkmqKJNjiNbCqTVgAndifParwyWZsi4gxViUZjZRLLgSD1DnCGzBzyxHFAx",
  "key5": "rDknfrZWQWtpT11vSsmJqxv12ZJV7Qa52vXy64LsmM5exkb3YMLtjt4xt6PVJHHg9nsLgcQoG1Evis5eRuWdise",
  "key6": "4UpbmMg7VefbveQGfnajKJAqHRnDeoqeU2QaPnLGgfboyPNqZsPrRDWd9BK35SFZWC4peqYrdXCPJuLZdmFfLRd",
  "key7": "HChvdQQ2LkZnRG1Uyug82ditLSy1K3hA4H97k3pbm6mSdbycLnofkPTXEZxe7jcXpgRL9p42aoKztSJwdkadHbn",
  "key8": "5STcBVbzFFkkXfS1gCcz2cfjCdmgE8HAkDcpbXAHtySGLeuErwrSYM29pJMAGB6KkXzcQFdw3BobKCM5Jpn2wwEw",
  "key9": "3f6tkPMBG8zKUFRAn1PFoiMnC23jJVZVNsw7STNK8HPrxXx2hMS59BKWbcBqViBxtzA5DBuiCQys2p2rEYukGsYu",
  "key10": "4GoUQHShC4eDPYdfXL8XBF6b2tUViuNeuQs8fJsML5p5tZqkNpuwKvMahjBXRMzhXL9hg6sfocpN9KtyXrhirFTC",
  "key11": "4r6rGx1Xrx6W27pSci1a8dU9aYGAKB84VTUrCAfM2EMLZdkekPbjtEevo3RiVcKvkTDkeNnapJxoXg6S7QycS3QF",
  "key12": "5JRS5fkonGE9viV3pv2EgNKzyM98hsbdxSyLBXNxzdUa8T3LpBkdUbhKvXsXdbKeeiHQ7iLvMvPSsdfWBCgHddfk",
  "key13": "2oew4SQtbfKKhvWszUjbFdCd2LEzPgAgvLoG57eWB6UrbRxhcjYvvRNhmKaYRJEYNL3Y4RMfetLhgZV4F2wjPyTx",
  "key14": "4BKAfaqhFu9VvdaJo6zUsoSSif3PbZNcRPhG6DgspgffYUftVKTbxk5yd3xiob6vkGvtQUc9eQLPNv4ipLEbPo2K",
  "key15": "5uW2sG5qKSdYk6adECXe6VmYCQcUeTuNg2GnKX8g4UWdaTHht9h54HmCTU9XSiQjeXaW6MFqYCyH2BfZkqMA2kZZ",
  "key16": "28ScLnEae8ebU2Zu7SSyKtGEHYofyfA1P29dY3nEuKwB4UsJt7aax7wzcecijzkqTDbiWcA7hTCyr82XeazyauQL",
  "key17": "4VXr3rHFMBYfeeeM7v1EDngDW6jZTZZNNgzaXAJcZEjZFMwcx4grt4WWvBfhXqioKerehqDStCuQ4ZC2gUY9i7By",
  "key18": "MCXszXUroXCqCNRibDrb1WyA3eAvavhG5xnAZsMYkSYSEQnjAU5U5NS8Kdx6GtB366mSqvF5cCLqPJ8RthEqQPN",
  "key19": "3kCEXjsKVi77Q5zWKvLFDx9P5knxQdTQFcxGnZS7veD5iEJxTZ8QYPfZZpx4JqmF1muy2fXCM8jpzAqS53MZosEW",
  "key20": "3dTkwkVsstgs6KAjHZ4ptL3mpXoUMopr7UkJsQab4s418VKD7nuwvhy7gdftgE5imiXRx26uc9JtAwWr6KqXumsx",
  "key21": "jWGxHbftshTmWisjMcvMeLvQA5MvGWFto7i76fkfU776ijX4dSbKKyQAMCvNmdLn1guWGCUGa2V9d5TAsSaW4gv",
  "key22": "51JaeL9NpiU5SpZCja8AV3AWcBx9Ps3CrRS7PGwCFUVp3yn8KaE5HxJHLHZW6mdgkjvFi57waFp76FtUKyDfbLcw",
  "key23": "3BfdvmY2embYvqKM6uxoKpesu6yYhShmZZMTq9pFnayjwkJA43FxkMBd8zh5G275TVhrHmeVUrxgkMAFVhJYjZAd",
  "key24": "2WoAx2Gy4e5uonr19HdStga35HGGXCXgXKy8KXYwyxbL88iWF5Dn4kpUhK6KJ7tWBSbTZu3JEZEWmXuF3zX7pQXP",
  "key25": "2dge5u6Z1j6va4cUKgcHN4hBqWsMKmWKfTcP1zpgupK5jWtL5NafGZkqnAcDbpDY4PsAuLxGh1RcEvVJzph5m47a",
  "key26": "5QTFwC9VsZVd4PsajNe2pvEPyAGRK7P5HR7PsKWYCN7g8bX5vFmoyD15rG4mWRNzDYpN3asJcgd5g3NyAjyESDmj",
  "key27": "4MGkEF4rPhA6bVVSDdZUuyvUJVexvvXgBmHhgtLRebQQjoDxLiMLVMfLYgsqpQQJYRwNx5za2hjBp3eL8YxromHd",
  "key28": "2PJj4DPZoRoAsbTWT6K1hkmSFPkmbSfcBFb19rvDfnbxuy4pTHFyxgz8vQjNPc8fMqmgDuzna441zi8XqFnADokc",
  "key29": "4XVFZYEAJegELJsr9zHDXBCt1ABxNSupVA17WnGGr5RKMDBRWtbmJGchAV4QUGNzPE3wfgHnQtifiH2zjsm8RuQ3",
  "key30": "47me21pdL7P3AnQggounGJmTKPvmCmAwCJnAaZ3ZRJoThhFyAHmAS8JN5VQKLEdweEVJ8gvn5PDWg7qJT68nUesG",
  "key31": "2Fy8zzR7Gf5LqY2D8mKCxgirsnF5dW7RknGkBcDAUDAkXRty2DxJ27soguRWJLJTEoqk4dNn6JEfZSSoAskgwnSU",
  "key32": "3aEKFtWz53dg79HZUnXr4BYZEzXDTo4QEQXq11Yq61Ajuu44kpwsrVJMehazNd8mgi54sfdfRfABvgqv9iZ99MhX",
  "key33": "4L2CZgwbbAdhetzGjUV6Np1jKqnety8iogg6Z1E9JjypXdacexZ8Cc9GvSYrcBqCcmz4snRmkJMSvmn33nMMH68M",
  "key34": "2WLVq95KD3QCydytSJHXWFkdVgbNLocMJVZqTtZSkNSKuBs1QF4ozBpjFPxe9EcCvGMrrZhxr4GntGTkga4DRpjN",
  "key35": "3zaPjaQWKYEDC8uYbcy2UNCXtnYWyntSRrx3Lk9uuFK4rZJuLYs65Mw9nugE2QtHLhL3hxbyTKE1Y3Ue6yV3uL1D",
  "key36": "3CNqcjPRWxJsvvoRHXCPEKiUkt3E7QUtWUzMMeqcDMXLr58zXv2sB68hSFigXJypTaVVjLyZMfV5GSgNGWaaZkpo",
  "key37": "2PufysXW26fe8PpVTogFqd2Pb8KXT88QBLHrvnqvchfyr1ivUMYK5w5opknanfP6NTqgqhUMXPeHQjRzuLpnNsez",
  "key38": "XkT7zt6M9no35z4aoXM787cu6h1XDVt1QsU6ryRfZkK1mpwKM3hBuyLwwJ1bheb3isGHJS8voTi8mzTsu2afZNA",
  "key39": "5HJv73NDfPRsfjRzorqpcf6CqFT2SRNhSiTkUvVFHD6zh44w3hw9gEAMWkr5iZFdfvFJw63MGs9pkYvQWJjgNipq",
  "key40": "5gZ4HeaLWBamfpC3eN3eaQkiQSTPwgndKqSEdAvQfyMuWi28rRmVsA7ybhF4qXPATvJThAcVuTEvzeeEAMeiKNaW",
  "key41": "41htzENVhXg8jQ2g5itY3X4qPdX38jDb8aa4b7GZU2XniBatypq42UR3n7mLrN3nMpfG5x3VanuuAiLgc3WcAty1",
  "key42": "3ZJAUiTmjqJ71BPq6bPmeHTjbRpiH4DCikJ8vqnMhsyXKN9L8ax6T6Dta5mmWxNxF9knGRzs7uHdkhZUks7XmN4y",
  "key43": "3onaqophkdF81QNEirP6Cr8D6pDV5yhG87Gt8jF86kvYgMgoThfvH56E4NwnPRSXL2KAHnrSnjky8YH7RYeynEtJ",
  "key44": "PHSuQWaNiCrRA5rD3sBxKNzsvYBJhxjYLHqs6FmhysV4ShBBjp43G5EtiTbmdx1SAWBn8v2PSVKmV8Btw6s5Qxt",
  "key45": "5BqCcWKNbgwiAJrL4K2fzXbxk98afsrPdzF6inpwH2PDGLCfJ2HzW6LtovyM8kY4a211WsPftyuCSymCF5qXG6dJ"
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
