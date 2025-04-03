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
    "3kXkNwYLQAG3pBeQDWE9FZjRGrjBKfqV2NcFLm2Do5e1HWTf85tfJAKXCEgSQUv2XHAEBRD8yfVRBh4ZzQeDxZqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zpGwh4a6AxKbu8Cn31wjTvzdkxAbSQg9kLmbk9DAb8nF5xR2tKeSmU3cdfLDdsh5SBsmkejXQeSuJh3BsCtva8Y",
  "key1": "4m9YRNdmFqSnZJ34YzEfPXSrNdmur8ezMmKJPLmeAk2PamvrTJNm5gjzgzo4q3gLgF6X8CzVuPsmcXcYoEJ4uG8q",
  "key2": "4yHrregqWgAahPav6fc3SzHpxdTE699JC8Rv6uvHzGWTNJLzNMF5WXTwkh7CP7pWwx61UMzqQBqVTC9FSkG3mqke",
  "key3": "2gD6JXEPA8CjJjn6vREuEej6Dc4i8nsvUiinmPF2DmEfAt99VFAipgEC1r1PsrZhLoUp3cazVCsMzpLwZT6dXv7Y",
  "key4": "Qqzr1QqMCA9jfWBgtMEGe3ScGUj711PfiLfqhRvJGRQHoKNegEkE4CxgNf8dN3D86Q5rExoQsauiqeNxHVggcPP",
  "key5": "31zpR8edWNUTampFy7My1wcoAxNufYAhgfX4fqWYomFVGcmTVrBQyXvYpN2ykzbzThsk6xYnBbvjTHC5yo5CCyH6",
  "key6": "5fiBBQpw8NAYqiZPjv5X5nKEJYtcueoRCHupNUjvkb6AGWk6WuwCkCeb6DQRAB7otX6gb9sz3tmaNkRgFcpE8rH",
  "key7": "42moNTjZ8tmabYch2y3vD9WY3Fu4vzw4GEePKUSH9KydwAwSGpwsL7AcWTwEq2NrwWnLyhg4pGrQbkqjbwRpTGR9",
  "key8": "9GByCG8YPNptbsL7wquXm5PNUzdhHeaE4hJde3oe54HUmtvuCj8TdE8axmK5HPpQnRjoDUQdJzxU2rBrn6H7HeF",
  "key9": "62v1obFsrPGiUmVmC1zUugCcXiqaexd9RJpAUUMKofVNSSZzoH9bCHfYUu9BfmBz17b1qma6mvpvSzFejyimrmuv",
  "key10": "3DCb2mHrbLPxQegQNyRzgfYXiG5knJ4wVfTgMS19ctbL1YQmGGsknBcpNfzUZCoeojjMbjQUZa6GiGxASSSzP8ec",
  "key11": "5ihaACB1dH12aJUAe67E5bWGXaBPweexqdHzZ7r5iAoGcFy7Mp5rjYjJ2emvacEHejSeUWLsiGwuwFNW7aRZ8ZgL",
  "key12": "3Ts3UuPvHujjoUwdWh4jFoZhp9pAiJdwFfpCJvms8R8Hsq8hVoWXDHC5c3x55Hw6jQAduaNjnAzGb3vVLX3133UC",
  "key13": "noLAGBQamJcxMTDcjd4Dy7UK5gAJB2iNZJY6ssBcWzQE9a8M1K9HDkUaPvQKrbYpvcAjykw9ocfZKLM3zBrXz1Z",
  "key14": "5J3tL5WxSu8rrmE8SQhC3k5KaMRu8o582i8yuoV9vLNEVBiWNXTqN6omL1aMLjY3tZxedN8X9nyxUKyn26xuC1kA",
  "key15": "27grGcsTFk3UD5PbqsRPCo9TPjYqbEZTH5W3BhbKLKDf4jwASPaQJBKFRa7LUU6NLLxD5zdjCTcSBW38zpX2VCwM",
  "key16": "8dsEhNBaHh91pqEjDTceuouAftw3tCFWzFLJeKyERQ5PXPA3irRsTDtShNvgV5ji3GFWx1161EHn2Aqs7VgWMhq",
  "key17": "3TkGrB8m6Ap1Y93F1aoXGAWhEQgMNZdPmffddRzBRHhwwuJ5dgHbRML2F5UBdPonPqbanKwQQvPoEncs55Tx7z34",
  "key18": "8nPaQyqxm1kYgzrAUqtVSVm2gT6cPXoufKkiB2T59LsUohQqovY85zRDJbaVebAuw8h1DnAuDUBkE76LjkPqe1X",
  "key19": "48A1vnCYTxiSDzgac3nnjzGWh7xad2hYM67rqz6B9uNjxKqUNDAchBY1gi41ziQEScHWTyFGm7oHdzYuMCAxQVjK",
  "key20": "41iJKjmm7a9Sq7gqm8VsXiqBbbtbHgV5Z83rNeqy9P1f56qRovMhmV9apESNd2jAtbppuo9UnZfMwjn2YfoHSdS3",
  "key21": "2s3CZZgxy2gkmQnmC3Gj3VxJRnxLv2pipW2Q9CxNoHEgYhR355z9sk96nfNyBtzMKM2AVU4BuWRPfYtUpwr2LMSm",
  "key22": "5w2NAoLpU8aPZZ622j4qqNaHTyhRLNjNvAGJbMST6fHhkuAxG7xBxD7pwt1NaKuptuxxbFRdePxkVcrXkTq5yiuj",
  "key23": "3afHKXxryJquCNTrdu38TVfbFaYNUrcNjM3yt2yeekUY74WN7HPu7BmkHtEFa1aNLnLwHdGPqvFMrAyboi7TGQi7",
  "key24": "d1vgNEi5e8UQViASEi5prpNh9cfPLoWMK25AUiMJoTG5YP85SUKuPJKkBW5cy5JWN3VTx3MXKUR13vo4um2az58",
  "key25": "5ZcLQWU2DoNcPJnkcQCsCdGKTDS5uxfjPW2BbzghztiWc3zwbMGptacLDqLhh4UVBSa4Rbq36ZkAzLgaBKvbma47",
  "key26": "3pjct3bvFTzwcwZcQfpdV6ioZyyK72MiL3mqoo3D1mDpFXk3YwxzYoEb4SXQLjxEvyWpH5RrdDNS4R5P8LgtrgpZ",
  "key27": "4Hf5ftijFmg11BQByJXsG2TMsNeV43o45PJHph5tMPLJCvWwBjkcBW22MY6x2GgniCewEFFB3aibfdiSksLytBS7",
  "key28": "EtmZSfqo3ZatZfxxyztQ2QuvrZt4e7gjHPAtNoPDF5GAfYZTnmDERgYmQQWfETC6aVLyENYdN3PJskW1SjXGLRD",
  "key29": "4bwG3oeSpW746nqyLZUM1dwj7YSXYbMPi7oqhHwdnAcoXGaUZ8vbDahzoqgyNcBg34AFACZP5GR2v9Rf5u9Jzi54",
  "key30": "5KY7bTRbJiAC9PHqgwiykftgbJ7DpU1bZ6RtnxGWqsT5ndqTw9ayuRbp25oza6K78XaD3irq2VmuW5HwEkrntAPY",
  "key31": "26gmN9i2ZNtgpaTRdq7eRJDiE5VH5GcWNVFDTUeQf2ts3WKScrihSJx7XYUwHaaNYwQq4YQxFcgGyvTS2iJtiiAL",
  "key32": "2W4s1TXE9bGRaqp81mibGLPRUyN4e3efm9QhxPQqY3dUeReo7rgxxT1xcv6nnxcUKnt1vKtcKC3e3Ptvf3ZafYt",
  "key33": "UsBTJGnNvaidgN3deaF4tzwQ4dy24bTwRmg26gb6GhRRTrTQM5CZJ4jqnxLe38HS4XkTMWXg35EaR5bdhJi9qPa",
  "key34": "3GHb3tYo9GYntuX2oqiJaQF7vJJdqhtjQSAQAQd4NY9Fv9cvPH3DsPaQPi3xJeWk2HuMfnQV97gTnTJrUJ6fnnax",
  "key35": "449aC9baQRnswxhsBP7M8Dgdvrgq3J3TkJa83PiVFuP1yqqcbMQVee2kJMM5V4pD3UsQrpeukRAJqLi2ME8fusJB",
  "key36": "47XqotLeNwPptvtoy68EHuwhfQW7WGciWgV61yYGaHsJqV3N4bptiGHDTc46hZ5KJPFLboFd7ik2qLLC79nEKC5j",
  "key37": "4q8PEQQCMpEsWDS9Wdg6VbAMx8g3Tbw1XiJ8oy79i4T3mgZdJsLVaoSyKjHjLrctfNFfAr7JwEYWK9A3f68ShCzd",
  "key38": "5ZAEqomiGdiZMGD21JXafnXrEjQyutq1FZjVonCuySghM2JAFkk1JxJa4sijPKizQz7AJGr7VpZrBhSa5uK3CB5v"
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
