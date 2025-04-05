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
    "4BtywGUYZMuPgdmTqHMaXUd9KBc2wBtx2NeQGtUGT3YhYYRhGikBeTjtrhLttAqTSwC67U1mshxDbDY9Y9214ykP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TL216YiUxmjpiFCXh9BJSNsf6QVJ5RuSEdCBo7EMQvLT71GTTE6UGBUHCPpnk1Rx8ZkB1yanHNcN3dUR9pekq5q",
  "key1": "2uvTbgYkur2GDMp9ugThi7HAcqcVQUqgsxMY4yRr87D4uzsihcUJRgTXLdrMdByNYgrxSRNFwFUorJii2DA7Bpu",
  "key2": "2Xev8QSP49krMZgyUhLVD67ywVAXk6PenREsM2NUFHtNM75iuoywHk5vXJRChKJHysfR55vuQbicBkACSTTpq2nk",
  "key3": "fkrcex2RPHQVMZNbYyunQbzz7wXiiTwQKzYA1napTjQNhBfYcd4ssS8Wx7fPPobwEGsDXNwsctbg9ZFBwbuZEeC",
  "key4": "2tG4czA5x1ovArbNdqmEUHZ56YSLvQEaWjhhXpSzk9DsCXrkZ2H4MT82v9wVb4z4uWQentx34zpVw7jnBCHqDvz5",
  "key5": "5D23xBZiX2t3Bn28ppiHxcSCY4yWoo9MSTsiGSUkG4roEHanw7X5bESMP85htno3rZG7BxzgNpJMhQDAosYGg5BF",
  "key6": "5xkneF9WwAMZNVhQsjiFHSvBptNJEBhoUevoHu5v65Ap1qrh7YwGmvLDtxbQmjzG58eYEddaphKsEuXXuwxzvBum",
  "key7": "3vWbnwEj96WYjShsRCsGETrJnJSVHWR7aPgNmyx3xFdY4xRgNec8k2pjZb6jnjbWx5RYijWGf7JgJCQ2cqtNgozT",
  "key8": "4HsqFkpFGP7uvhKhem5MByHcU11tf3j8GN5eGTe6envTgCwbR2PAjPxN3e8NouC86DFEkVq4bNVLFiPz4Udnr8MS",
  "key9": "42FetyhRFZFJaPqgqCwAE4vkF9FgmoYik2WaHtKhe3SfUP1J6viDu4p8pMwJQV1cRChcKCfupkpCoXe37JgRDpkn",
  "key10": "3aZZgpex1EuuhygpLe4BQX9j8X1atHnFjZCicRK8V5HKRfPBNonTrNovTLDVgk8upa7Vx6ub41vB2kK6NLFnP1zH",
  "key11": "ifXYjpEoroK5MDoKikiK6PiTKGadUa7akgjz72gwc45fLCYJVS4FGcRRDwJkz6axqipAd6gBnwk1Gzm1ZMCCG1w",
  "key12": "3rWDuJHirXh5fkfrapH5YdJtTYDQxPV8rot5guXkFxRCsF8QxxHbGiEJEemBZA1WmVKk1AWAQwjzQwpCWQAg795t",
  "key13": "3UHFoKNjoF8MvEJwqNhzzYSZ5p2Wd3TWLXxFyNGgB3aFnUoK1WqyTAAVqrXo6WR8MVzunbF9wsaAvqpweVkN9r6w",
  "key14": "4cBZ7SpbQJqCbeMvWj5Ub6QJ1ZiKa5cqYNxzd5WkTm8nrvH9LFM51uTjNhH4dfXCzuWDgP9MDg5sfQn3ELBkP8aV",
  "key15": "2VP6sMxfuhrxrTYR1rbMfmGJFkPJ3tBVKjAghBfkb2La3PnAxKtzvknvr6aeRMT6rkRSuozRXkurnRwRoyeBNFUm",
  "key16": "eijpmvGsDeHdWJ1qHviYbJNPaTLr8SM1tW15gPGvkXD3HLKTszhMcTgR9apfWpZiDHfabXXJEwvMwEUipc1gcog",
  "key17": "34dBSknj2ruzALVNGHAD4WbBHMJBfG53KBquTi6o1hJe8o9r58GDit5tQJHDLv1TZcmjJ5iwc1RsmZmd3SCG5k4k",
  "key18": "263eUoM9EoXQXXMzqLVFS2gPhcA4dUYWcy45gbeDzZKn3vkLSGjBct9SfZ4UzEsPe4hgF2TRnwb9J5GqKsiP5Qg2",
  "key19": "4rB6n4cFWtDgKcd2vQ2YFgUX1VHHf9ZpsqdTVjt3X3UEEQja46nXbm5Ki7sYrJAUZaLmrNt7yMPgqpVcrQcG4i5E",
  "key20": "5ypGrAP6gtDrzzvUGFHy7DFD1Da6Yx55XFLrV33MCZASTAdx2jCGbQEeeUFejUdgkLbrs4KoBdH2AY8JRuXy7pQ1",
  "key21": "617f8brJoa3BCizr444isiLFX1k7igfkpz9PB8NxumGjBP71zUjESoDrCpNc74fkHVcrS7Lj4Bs4Nf5Tzuadwyby",
  "key22": "SUCcFzeVrKpDSjrsJ5PzMbJiJ2QPZUcNDmCGi5eQBayttVb3KE2cvGDPCf3jGAi8xSgckHGs6zMZYJLnNxJWisF",
  "key23": "5QfhDqeQgu9PStpuVeZYM9f1XSRNYudekgQ1Fy9yayLgk6aEMVznRGoWW8AQBdKAKndcJ5LzVrJtU4XUx5YWnKgq",
  "key24": "5TbYRCgpezTihRsaNdj6dEJjiSdhvcRS4mBYhAzeKWBmZJzecSuPQwac1ay8hU5iTyEABrun7wmcXKs7RVS4XYGM",
  "key25": "4kUdMi8N21e92mWNc5CA2CSxJJTbVk2C3KF3GmRYAPpugMZi8Q4Qh4izFxq576Ehy8KX46LcLyT2NSv1XMvmtjwf",
  "key26": "5zjsyvAQy7eVme6Q8pTaCVkyoHJ5YcNDy9pY6VzYTE25AFCdcgBWea4JVh57raFjtia5M55Thqes5wAWBpZUGXaP",
  "key27": "3h6Ntetd71wb6PVAL6ztsScb92djYxsHKXTr3bEh1aySMAKYJ4nqc1zyysoa2DDYinbcY9PPRGUgBz6FPHfLw2yy",
  "key28": "2ZPDgf66H42iuk9ybZaADuVFDQx7zqC1NteJyjgHTU6BMj3iiTd4Ju41a4TkAUtCqjo3FiiMmvmXf4bEarfSiQdr",
  "key29": "2EpTenzEvLazL4B7jxjdMnA3fVKd4NzeCr9XvHU8EqZgxdf69ASeTEUgkxscuGqTg5sNTZrqS9RqiLSF3gCoAyFw",
  "key30": "4yU8vsHTSk1Uhg69ZDVWB9DmgixSjT7romsxaZwMrPcWvCJCRsLd4btoDqctxkbJv2GYGX483nSHvy1MdjyyuZBe",
  "key31": "ttZ4pZKRZbA4u8KfGDAWk9AbgdC1W9HCoxfeSV2fAefegHAbBLcipprZQFbne72FtiHoWqfDpP8hK7S3QsEURU6",
  "key32": "qN5P2xdWpYidncmhMfXMyHT9rEkvGpgw6EJR7CRpCsC4gpjwx5hNqfbyqJKrFH21RcY6bptcdEEAroXzD9FtnuP",
  "key33": "49Fuwef6SjqJ6wcgWwrYxgCp4i9MfBP9stmHuVqNAk8NSH7kZn13hjWGjoA4qf5jyvwUdv2wd3rn1gtRhgJqzCAu",
  "key34": "39xzY6ifgKhvYtuMZ8GiJ5LPHcRHNWxyhXkxfZF7FaKPNEpaGZjAFqn1Js1vHwcMWaB3RDhGfKSXfBUH12YvVrG",
  "key35": "2vmkjaELUzPzRXMw5Uv3A64V5x9ADCHxAs7tUydJj4wX7apjhucfKrYgSQcAsCCc1pSTGJYevV7K9wHd7otjfyTw",
  "key36": "zz621rNygcKXqYDiyPezEPjcLLVrqqp4hFumoC29WDiSSvhcv8G24Sc7f6xEZx8R6Ye7E3MxiTZeAJRfjxwrsJ6",
  "key37": "3yEwhdqNUPNSRz2GaMuiPNVh7bDmNkP2Y6374VrqWKyZeDJww8bpo6wSDBwf8WV56QmoqgvEKzQUV6vrCySKghTR"
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
