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
    "27Ngivrdu4LDuioXkDVAbXC6erAaLEns81svZLUHzbYeHhVgiYcNe75GZutQMtC948xjza2jB4vv2m6QFUJ2nrJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCnBFsarYEyUS6nAdS7o6vgzsbTQA38BQb1ujEUV6tcnHR8pWE9dEtZJJz2cmNhyQoY9tnBUZsam4QqdxbjKdFb",
  "key1": "pjY6JN8vxP7Mb9zCSaneKGuavSzHjUyntHA5b4kefmxfNRjXrCC1gmi6FnjDCLig7vjBVEt8yva9ndGDF4dHRyr",
  "key2": "5Q859TSbwZRKCdAJk2gMmbQjNrFuiBc2NoNtkMimrip5SrE7SGtBNLqMjyshnztVCutAAb3qrjcKXVsLG9UcGbcg",
  "key3": "2USi47swQRrAwRTRu7EzZhw7pXVQmPYQvpuvWNoTp7roWmFTvn61MsEyrUY8mijDpvFuFy8KfSdtUBQnjzx6b9Sh",
  "key4": "uNNzR82mJ7sAsqy2cRXtfN7dUnox468YMxviMNqkZWrbGcn4t5vsEa1okA8YsEbme4m4TcvhHEzEGvRC7EjBeFv",
  "key5": "2756FUnR8hVCek6HdH7Lz6Ymp39h1kWyqEgb2T1db42Yv3JEGKvSVApCbr2y5xwhtHK3n8izTo7sQdDrCU9w2Rre",
  "key6": "cLJrD6KSmSzf8BBbKmcvRiH5tGEe8PpWNY2YquEcWCvqVsEzCTPsd3CtcvUjkcytQv6AZCS334ttJGJ63q672e6",
  "key7": "5vZ4gmoCi2FduM4bdJzWtGGDikToujwA3UMoQ5ZQFmyfHeNL1wddZAQ6MWfoeuuYC8x2Y1wt1Yevo9Vg1tJfLGWB",
  "key8": "x5MWeZpCVCbL5xdujxCPHmYmc9ppjb6i9qhAZtoh215we3GkPhJw75apBMZiXwiobDxjBMoXhWEwMagpXh8AdBm",
  "key9": "kP1Kmwn16ihS4gR2t81VfTQwQJ5BEsQEBemiku4rQFHeKZazdEGRNzLrMJMQhY5KSXbvTiZHNnkd3J5tgmS5WNK",
  "key10": "dFAsvrudjzbk2kWTrzJakdN64fsyYr6mnWqYsdPhXSdeEJfdw6uc29vnGmSbGviUHNaHGn8RgqUagD3G2okbJdz",
  "key11": "niWGighEP5TvFU2b3n4skYKFvyzmdQXmMRjZrH6nYFZbmbWGWXWqNEauBMx3ZWWf422Bx4pszTDBABUsh59yFjx",
  "key12": "2261iM7CHV8d3UNzr7atbpEFArSvY4uGPPhXee5on23yW8c1sGWR5CPunJWUPt2p2GWXL7rvdV6RywiWjMBbrRmi",
  "key13": "pGuXx5xxLFZ6xE4fm5Sa9jAwspbESDWRrEYfhcXb4bYqAS6tGipzawCC4qJMfyqSC5UpTmPJ65ek29fJ7Lpnk1Z",
  "key14": "4GdENM7w7T8dFpXvtbtpYXxmtQKyWvMng7wgi1qhK2sa41TTF8onLCCEdX5aKMfE4UsYdV67EfprHGFp9NdRrLc7",
  "key15": "3jmwpEq4xaT3qrHyo9cwySPzcgKoP321tdiSjwKorgAcsRL2nx4HymLTkSsNXposocFTK2Djww3JhHavJpCBbQJt",
  "key16": "3m6sxGgBcLVLjJVrHcv6aFC6GqQectayNKzptXMwTJw2JvVuhM8gvnDUbubceb4VLTy1zEhqQMNpHz3hHdVVn3pU",
  "key17": "5AsaKbTdpHQ1bNiLJpTJQBATWgMbu6PMiJPjD45bYvt8BkLaBhRN64spqDzkfLfBCzvUQ6DrX8jHtvGBqPHaYbz3",
  "key18": "2BPsM6E49mfgZ6p3ufswPFYvLVJgQEbRaP4rLp78mHpqpE5XFjXeKWQRLj4QviSkDmSW7yHEkBdBr5hf5ctNbSBv",
  "key19": "2yBPgHzh3Mbc1ZSqNNfAeUwQriAtKwhQXXDVff1is8gka6bpxkADhYr5wzQjV7iB22pA5nSK6ksEoXvChUD7RYiz",
  "key20": "3GexmW1KUtyyf939iYegeo6kNY1YxgnboxgCz48LNWnVZi1k1AYyQcQEDXerFTEemFSgJWCgHzfpueMZQsbMoKfd",
  "key21": "5zbzUJFdTZpW58HhMyAnQydioynPkztGutbF4DcEYh9wpqSwNUFtwM5rAJxttSXD9MEzv2kH9fWEwr4W3hKgEYjM",
  "key22": "eCZGqE6MUe7Wyp4ArJGJwFXKQdjw1BgBnwitGmm6YaYc3sXtoF5nJofSuCAP6Ka7UYi4zz8u8ULMvEoa7LBF474",
  "key23": "4FnfXsamSQ1VZVGx3E3QY3F6dg5f344TfWe72vw9NcFnphEqioBbWJjQxUV1vRe44fG1orbh9SVqBHYMKy8JcgwB",
  "key24": "5LrkxGePUGfjkaUrEJyKcDrCcftqYk8x1ckUTZMi4nNGa2ufJjAvZXd6FMkyRG8i5Sss5KzSdtponkinhL8BArvs",
  "key25": "D23n4HJczkADzuvbyBH9FC4a8y3DswyrqAeWRw8CXyUL2EHxonYWTV2e5EVKPjaiFt6F9SsWMdbWSKGYnDcEuGN",
  "key26": "28ycX4fKqkTupHvrSFozZqxxSjUoAJCwvLMWH7dubRojdArNpKNW9o5NGPCfCkenqnCNUJD48uJwEYD4dmwfqrie",
  "key27": "385avxr39hZ8Ye8uKgFdG4o1xu1N6x1RSsCnX2bisAoWP263ExMHhVDgHyMxuCjrzhyNwfWPyu5gZtcwHbReM54n",
  "key28": "yLygBXF2DKxtekcjf4mX7LdvoxoUqeaavwetJBASWDEjwu2fZrfzk8micKk2URCfp8jkTxF9GMcZRs9Du4ju6rm",
  "key29": "51Cipu8TnemYNP1re4ogTxFJktTVm1gH66kXYtBkevsNFa8qzmXVnswvE3vDMR8bK4zbzV4DJwFDdqsoHQdhK7WB",
  "key30": "dgPh49EuarBkLGRrU97p1CcasmqNAosGrGwrTJeGvMuK34V61LGdK6giU3D7wcREgYkc5roouRTPSVW7DmpKtkX",
  "key31": "23j7csLwFH8tBM8NbKZoRxCiALYJzpxouSj5BjPXQaXHMNJevxXRChGS6GNjLyUVJZetKW9ioXVCWPzBg6K3WqZ1",
  "key32": "cGfAxQNc1ABxBtoxom3sY6yBmzzYBXjmNT8Fmy5UEEWqsVvfX8H8Yvba4qKkVxXWM7cnri7LmtCco6Lkc4pEbxQ",
  "key33": "fKPyQZEuMkXeA6mAz9j5p8zjxUGuKUQ7ayECqvi1p2U8gxrv8N1C5KM3RT7r6RHPAMZhQTu9KyLqiDsbquuuZhy",
  "key34": "2Y4hWsFH2tbmVjo1aUZpciSnMijxn8aVjcpzQzhEP8x6aAyqEqx8A3YnFnbvoreSug3x4wn5TmHu8wdtzjqBkq1W",
  "key35": "31oSf6ccMLkfV5ANAcqWBXUcMUxG5N6JkwAcn4bnVtPy9Ky6mNSgVix1FakjjToJXBiyBcQp3b5p4CW9vD4UmGEb",
  "key36": "52LBdVVDMeFVwnKqGoraqe8Vk52fH3Xt9MKc9WR3YkGvprp2Q3GN8Au5nkvy938vhfBFt2ADkNoVEyTMaF6vhPX1",
  "key37": "283Gywwj1T7d5xspuBNeWnFj8Yn8gU6vrzxq2NFSp7wm4Zq8hxWmbr2N8Mogg8AAwPag7WWL1jteXgf3YCsSonPK",
  "key38": "4rCixATtQ4dKAYW8KGmHELEkHXXanUowsiKMaGEdr2fpTiW3YswNpSY2VNLs8Mja2gxoKep9zHnAa3fnYAL2X9xZ"
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
