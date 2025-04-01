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
    "477JAh6E2xvtJK24T592qVjpRefoLCkgqTgtkqbBVuRWkc6JveSr5G1wANVcu86Yh7ivLdbANQFirmCKF4Li7Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KUtuRZvHhbjvcjRJdZirSHbCmBBJT2WMHWWjfi8eB2HHsDbr1i9tdZBP6hMMCT1jztz3VjESJbGGCSyxEwetYQ",
  "key1": "3t3dP1xZ8aaVV3FMzmt8AJDytBPKzGAjCy2F5prVNEehVgAVYSG1iLkJwk8HQ3NhMAvraLfFDwzDwRHQnKDsLwQ8",
  "key2": "3aS2SxJE4EzwVfm8eEjdqwWrcCgdnwmhr98fAtDAs19Jvn8M4UMnAYdUUvcgm1gKvB5tnvB6J88E9zZfZzqDmzDk",
  "key3": "31iudKnkQhEySSEjrQxCRmEZSXR7ExqJxAbvM58yeJdoBRLy2owy8kEmFJbXqk9gb3g64e2RxAyvkUNxhPKMrn7v",
  "key4": "2WA14TkCNrXF1TYSGZfAntrPzWywtGQft1zi1rhBtxNjrvDJp8XC735WpZeZKsfKp1rLiQZyAXoKWsyjYdcMEE6v",
  "key5": "3vi35wAPRL4vjnZQpj6nvRZfiBMSPdDy9uNwUjkYSjC85RU25ktv3GLAN72TKSwwmgX7GAAMYg5Eoiyw8kydiY4s",
  "key6": "4zufnHf32Tn9WtFqZyoGTWGqQQoKhhwKzKULgNRDRQMKMwQTwma3iP2DCQJtXo1FL8fthCRVPMAeLEAozvc4Zqqu",
  "key7": "fLnQodgcTWdH8MQDPZwLywCFJWEk2YJswCMwzFrnm2qkJnMngWefqvCAv7tKbYiFpNPEkVNXAWcsQvLrVQXHpZY",
  "key8": "2ckuvdybaBixwp5Xv3uvgvZ6T3GcDMjPbpfCNsVGpW3CTrLoRXahdakF4cfcHnGCkoaVhnT8gCvqaAWCtrKFuXEh",
  "key9": "r2AEjxm5opJAszsTcyJ9XHagDBaX6w3UgNFfvFgwx53T4VRN55PFReX6xxu5G3zcLAsC4bR3szYBnmThBHJM1tn",
  "key10": "3VxYRSxnKCBtHaxGkLVEMXugHzdTJcN7FLq4ZaM3BHJjG7UrXmzZiVqV9Lo9K3VZWnJKcrzYBhV1SKJT3V2JoqdG",
  "key11": "5GnT2tsoFxc4WVezrGEhETSgs6uGoyCNDEquHXCJqEPL34C9LYxYPA8tYcuLeNqwZMY4nMjsQLka7g6gRvfwPiPk",
  "key12": "4XLgzpTD9QWCNwyN1EX4duX85nCuJPHEs6rUFv9GyC6SnJPduQ9qRj5ymcTPBnNHctREWjyWfa49tX6bFEpJE1o5",
  "key13": "4X6pJsHkgukHTwtmJyWKTG9Sd1p5MgDYumMFmo7nfNFwoMmupchrreztKZTwnWAnsg4Z6fDwFE14XZLvmWNkzTuH",
  "key14": "4GB591tm1DJKciS5hXsqhTD8fDHPbut9MeecCLbL5TnVQwBQ2tqnY5H5Uiu5FVMhY7Hh9AT356YasjnsREtVae4S",
  "key15": "3KwFTXmSejqnURYCWH4vNJ5XorPKev28Ee4oKwpdGZmRJPLgCDv76G7BBPF6zP6o6qe8NzdcLREvWwineHDDCBKC",
  "key16": "4Dn8bLPv87ioPcG1cL1DyDK5xkiRmhnwnDbcYdP297idm3j1Dq8dFv8brugzYgPtCWEB1a782p4chdvowAKxZEYB",
  "key17": "4bwLs8SA1ZeoVRgirCUyJ97848pgLzCodzbLQ1C984RE1jTcKxV8txUrt7qdT5ZZxiJijnSMBPdC85c9jnFuM3Us",
  "key18": "2Tk2cTWVAQyjTkyraienZiXyr14Q8ucC7tG9TRgJUGiFZYUntZ6jmdTpuhrThfBXTTnbXSEwD69rT4tLvPQ5XJDd",
  "key19": "5LxETfHdy9YzYs9WHJWzXindTmQW3bKFRiASDH7op7Q6puXKXAupgK4oRvm2N1XFUMXdaQoosuCC2L1cz2PJXQch",
  "key20": "5yw8aHcPbt3TWKk4SU3mVvcv9rshW3cXmMKGfkFJtuF3AskTqDeAdDcptfsQCN9zt3WMWWK6smySDuTm3ixerBQ",
  "key21": "4hXcyXZbMp71grmDzvojqYrUn2Bw7N93UwLc5nwpaZzoPDdA9Noe8EtVtwju1GMJ3CyAVspgmNuZyuQ22Z9Rxeq5",
  "key22": "5fUAchwkgKrvPQGXQXGYowZi3sgTHvzNcehH1CxniinAnxuCbqF3W6WTAr7FTtHe3hbARGBTibbQMKufsQh8hZYq",
  "key23": "3iYrKvBiALu4XvqkrkgUGfNhkV1atWYoDNWyo8schzbMJJpG64MQutZ68dUaDUyNvXhcwEDF1sF7JkQbG3aeYqxE",
  "key24": "2KF6EGQkqPGJm3vhLXNZcohjznMYevcdWEjAzzeo5naPxS1cFH5YR3X6epCiFEBZTVoMb4QomgzkTwLYMVsq5ocr",
  "key25": "2TbKb3ZjHDfXswKs7NrAC4TgMYbnHnog7qBGan43R1G9pSqW9tFng6iv6kFUabLFFi2oqmf1fvkFWdvjxwF2Zr7g",
  "key26": "3p4n5xk7cLFkKWe5sGqjpP8i6s9c6jqsfXqJph7d4gPS18UmWF3hHoNmGH5JNNwvDC77aVhyU1UvVFk22j4evb23",
  "key27": "3S1BNg7UxEQFeP59N7CcShxrkv4cQH1dizZeNQXomc1S1u4FjxqwUg6Yw16wEyrR167ZT58wuw5iUeA6uAzYaxQT",
  "key28": "ysReJA378mgX1HUzFBvaHv2W2zWSZmb33cgod2uqQSZ86tD1WH433eYoBvWUD3WdnSERXtCcjVVfS8mejtLcQKf",
  "key29": "2ErR2SbfT6BfkHzLj89TxhwsGxqyxomkVbq7BviZZPowujitoFnKGQMKLMuZDRLb3edN1zKmBEQdAQ3iPzFmTpid",
  "key30": "vLgCBqGT9KzzzPy6WRDFXsuo411QmzUHL8kx42nr1QDg5yWtQWGTtCfa1PJTJh9YBLXdULWUYbpkfi16mSSAre8",
  "key31": "443B3TLYApSNgiFmhGemwAoiHPE8qyhiCDXcPsUUpyev6mpRfgykxqvMBtwHxW6FxqkN51ruX3xvLUPAn9jMuUY9",
  "key32": "4GRYfojS8XhjoYQSL1oREFcRfHcnSQh1zJZvHgsf3mFdMCdx7E4yP7P9wgayy2LAbHWShZq9mfBf2g4PW2DKorkP",
  "key33": "3Gev4Rymkw6rHEnrW9SChQ5sJS8caJqC9arM4xX2ETKJBQwCExS2b6NQL9SfTRE2NMGob1X64mRkweARyWAJuB8Z",
  "key34": "35ALwK7x8F5szFteYJuqaNnCngNqj8KzzwFwBWf5qzyQDUutvzPAh9MvPdMu2cPhiXf7rJAaNvib6jMZq2vK6BMT",
  "key35": "37igKeMTphzgjp1aL6kJsVKJVA1TUNg1DoExYrTn6vkhg49csJWwJt5N4wiMNnfvHWcMFpELWc4Dr8jsFFfudA4p",
  "key36": "3emHBrvRxQA2WCM4t7FCnQCK8pjvEZjzQZF1EfsPzEUATuMdw1LLT4PMyZCFMkm9EWn26Ye6sah8mZohJGiWE3bX",
  "key37": "34TLEwKrHxit4UBW8NzRWhby5U8imzpiht4XrGitGoK1N4RDiyGo8PrMwZPkTke5oT7DGr4Wyo9QASpjtUD3qqS",
  "key38": "5Sew5UQB8zpHEuv6Fv7Gi4NYE1Q133an2QNcVrzyzq1ZTwQJKmJAUtZAE92UcxrkzSizJwF7kuNRAqraM8Ro2ioz",
  "key39": "29aiZQvNtr8yt4ygix1Kuik8wtAmwtzJN49HsPMPo5zGVNdVJ1DhzqcqqvgTdtaSgkMYHhxW3v5H7BW8Qq9G7Lh3",
  "key40": "3YmCAcM7oY8Yu8ajMBD4URHd8ha5Rpca4d84FFZtZxxip3bQ6oremkbMALwxugRw81s5W97zMopiiydEPawWu5MD",
  "key41": "3bCCu9HguY8p3UhqfXGP9TMbdohVau2Wo6dgRgRvFotSz7y8TfChxLyTXtnKNFp3Kfs2dbnYbmMYakTqvQ8dGXeU"
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
