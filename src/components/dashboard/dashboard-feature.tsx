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
    "3DNAAtbXu1uPdRnwCeuYibRHP7Sd2X7bT2yDQAT56X9qcUibgnoaQp3LmoCMKyiRoerm1it8FzHwJz6VmMC4upPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYN1F96spBvFX4YJ722bLj3Hn4gzJvooX2etmAwqZrc3JH6ZRijcDXSuPmZ6dwBhgjMHHoXrx4fWzWGq8qSYncj",
  "key1": "5DhYNAD49hweXeUQganNqR6AHhNLo3YH4rYi7f41KAvRainCrg6qB9MnXsrmuz6UhYKTSewdk1ZX6NbuccdYUcBj",
  "key2": "tph86eRkiAsmcB6fwrufe1gF13gxhALc6GtEmvjiNaEYNgkJjiR6VqAF9T3VM9GQboU9i57njFfzvEMHvPoT5qK",
  "key3": "yjxNeBMPwtsewsfGCLDntZ3xU246CAMWWrWbDZJDDWo9UbdmJXohm1YfMsfewoCaCjVZHDZrB1uR2cArWfuXuff",
  "key4": "2dYUQpobAhucLEVref3yFgQCjG6ixXfMoqs3E8623b1Qf7EhWYCZxyoh6eC8QheabENEGVUKwB6H4fRtsiXEaUgp",
  "key5": "mnjesEvqnyFMbit2tx7osJxNLaC5crNwQACoezmMSxqYYdaZUS7e3q1bcTbVZhWy6ZKbo1E5ZPZ8s9Tex49VtdK",
  "key6": "saoxTshgL6rhpXp4Y1aTJG9EspBexkhoeo4YNcbrhzjz2w7b6t21g7xM6Piw58vSwcCSdUL2qVtu1GapetUzSgs",
  "key7": "4QXh81HwJ1j7KXpakw7CAGmqgRSW4cMafyKSakLKH4AGYaCppSc7WKn9yvs6sXNsBbfT2dFvz9bjMkVNXtb8i1Yx",
  "key8": "3NZoYUBD7WdfqpD9BScTheUdfwpQgXwmVnXAgmYWUqV6u6BsaX2NQgjNB8c5BZCdthX2TbdRFj97hFK5gy3gps26",
  "key9": "5YTv6zjkjBtTdjPVF5nVVup5rwD6RRRjXcGQMDs6GLuA2gYfDzj3vfpSFFFK4ssMGNBG9ojGreYSDtBPUwQdfH5L",
  "key10": "5KcBVZg34tTwXjzx8gpK7Lcyu7QoHRnrqdpqacMgQMGnBAGr4j1QWdDG8DhCZ1G51p8gcN7jrWrPyv1djwb9eJD5",
  "key11": "34WsNefiEDKQTdhjmqKxupbDbW5CMrh3M7Vma7tRmHEAvX53usobCUBHW7ghGkJkCHuaaCZNqMfQWkBAhzPCcSR5",
  "key12": "SGh8D3SmzFezDwnnh7hgitfaQVdcXTa5ZvjhfWfbzZJNTgwGtbFdf2JUTqoaYdBQAoUSsm6NcVG2LYy6LwyDn2U",
  "key13": "CuByRu36G1sxEx6dRbJ9hV1wbaLiSmABQxZvx2dvEgNjNb5vYfvQdUYffTAK6YZRDysKHWMN2t1RhwRbX5Zj7WN",
  "key14": "5PNStZ3RaBXQaE8S9ZM8865BDkifKUPsbpvTD8oynTPppZXiwhLDmSFFDbSd69J94wX9h7yTqSjkZo9f8W9ZSvcv",
  "key15": "66JvaGsfDGKsKDRr7yZYtivJz5BBa2JaaEAGHuRQ1fZ3ShvxpCAXXxuWnwHuWkFuJLWSNJkes8EEcFbwniFsCvCR",
  "key16": "2yNTwL7ukGU5otPdvnoiSeb2B93FWEVuvv5YSnCWpfwGWGgjkpN4BsbdZNbZLNXAcD3QHD4dcrCGy897cx32bzqJ",
  "key17": "a9EnPJovoDzWGhFzxWbAQX3KecEKYBqyoAmiDBcAfCdgFYxRT3zD1iyXCwfJuMHfs1AnD7AiySTpJPT7haDmu23",
  "key18": "3HiuduBj5USbMJvHBp5iaA3DYWQVumJqHeud3a6JxCu9jRuyy1JbbMBWf8gcEaNDipRFaavXv3Qr7d12sP1hjKVk",
  "key19": "B6j1z4vdjUz9rxjPtsm1mrJ37gE6vVQwcRZcDB4rh885RqJuCP5mCQRLfHedV36u6qxZ15sFyMyPgyLzzxDEk2G",
  "key20": "2hr1nKUefWqUtGiFgVAe6pJ8zZAGsBwvQxVi7hVikAeN81gCXBUcSNXFvwDnWeMfxpDS77inovdtsos89pVZqxV8",
  "key21": "53dFU5Nb823c7NggwzGGWmwxVLx85YeqqY3AS59aRAvGNHD9txUXGqjUdQaFUJaGPtREfz4qCipCb5HgUFHWfaqG",
  "key22": "2MBzr4WFy2RV5etPAt5ssxuuFNbUt8gqCTTuN1zVbUQzVEiX2Wvovho8deNvjQ9kcATzyR4sdeHztuMR7wZFiDNe",
  "key23": "2Msr6pcwFEKwiGbdVpEU96k3QYDLHHxp6PgNu7YH7EPNjkJ6S927v2LhmQMNMpCSjs7AYo5EZ5Jsv7LrQU8yquUK",
  "key24": "31wP9Lg9neGTwuJsRwyHtji91Yg1ohRW92mCpZnKGeXXvQWfyaf2DrzCkngkWZL9MguwRWAuhifvxVeEus2qD9Zm",
  "key25": "3AoRfaqSM5XifpQ23k5dYp92dS8STx4fvgJXf6sNrubqfs77caEXcALUHp3Krv4P5hUz47CheoTyJRnDRfydaNfd",
  "key26": "2PZKnqsx9JPMqvL2x4uPzcSr8sF3WH1h39A6jFfWhGapEWms45unqf83T3ZbbGjQpPgv4ur4qGQT6RsWFnUMK2nB",
  "key27": "5KKYBS43karf5VS5ujv75zhyag6A5ZJeGDM8Rsu2c3Tg7UJheryPAMn3BLTSemKWyEgzi7VChM7Y8N3Sp9JjSy5d",
  "key28": "4DS3xpZTxBtbGCWcpDeM3mfLforVrN7jKzp6RxFyC3uFG3ZKVtKJPPswprE5A7w149Z6iXugBxkzzN3qrv61ZmrN",
  "key29": "5aHwTGMQ5AHPhb7fLxy7q8dRBNJw4D3ux3eSFpehqHNQEsPdgDNRsaVmuvAJndvkp7d97dQEMBjNsDMbcaV1LFjz",
  "key30": "5kqodTQ3TMHmCRNBXTVihsmtxoB4cjWEoKwPwLR5iuzTaKcfX7gVV4KNJjj2RxgYpCDBEHjPA6AnamCzsf489dru",
  "key31": "4YHZA3z3NpvhHKbF2sVx8cFRkf4XEjBYhm2Fc7gboggNatcvWmvhRG9DNwPUn2EVUqk3axhMkiQ8Z974skFtFeT3",
  "key32": "52MaoL8SWQBqER4bXDwffjcS5psRCxbAyySkc5kuc9AzGiGcdAM2CT15sE8bHLpFz8VWM2Sce1FbLfed1vQubkiK",
  "key33": "5GpzMv7a7RG4n1GKs1PKcHdAPg5xCeWMbb2VVdF84UU1NjeGASrHS3nyLPZy9QJSyAQNGqqpVR2S23j2XMSBD9pi",
  "key34": "NWcV79L24guYvVaNzwE4aNttZFhpeUNN1WVY8JCYCkTjQw6aeTJf2ULW9db1VfZ5yWdoaeQDVJbw2vpoHb8ZmzR",
  "key35": "Ndf5ycXmRMi7PnZWgWJxvhK4wsugL8oGYhssExpsdK4LbNDEYuFKum9a79UEkGVMZhiQAniL72bENbgMwvSrRpX",
  "key36": "4YZQxx6X8X78W7VNoi9tHXYST5JCZDp91Mr4tT1YWoGsfmoqpv9UeSUaK9VhTWvM7BTSYFRij6AfSPc4FCp1AJQD",
  "key37": "2FrqEyv9ASCdE4gy4Rn5DabTBYmi8ium1t155Hn294ukyiaMdmP1gBsoow8VCfekqnJ3LEVdMN9Xj6YstPaFLfxq",
  "key38": "4Ro17kwovUhWTjRtkSt1SgSfwsYj4nqMKZAAbKiBk5UguA3vASFHnsCnzFPfA8TC5WTpL7sLYvBaP4odn9qybpTE",
  "key39": "d5Cm1bZewbaCzwiQC5gm1MED9oCbdyxV325rg5JXEg4NyfpRxFFHcNEhpJCEAVk9P89L8aAQUa3MwEzxbBLuhr6",
  "key40": "pEChHUjQBEKz5zgRy42vcPEzg3sRR9jBNhJm66EVF3oLTNthMYtda7CKH4sWSdocv8GYFtFPVrSMJ79S3HHcwvG",
  "key41": "23wfosLcbn6sATQ7bs4fmWRzGHh6sqJD4KppMa8fwy6ioMT67SKqFBMrGH7mQRwmoXmJzEeEPikec6u3n8Rvp9vX"
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
