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
    "5koZG6mrnUrKcYNoYB3vRXxo1YPdcK78PAWHbH8NKwdr1px5nr1TSc4jNAT4hDaVCuENDsN8iydDHsAbDKeHXvxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDbahFzKUL99m7PvuDn8Qq2HKUNfAQVA5uZs4NaAMDBHrHoLArRCyvKQUgGboG1248uPFvpGfz3FWdCSN6kxybz",
  "key1": "2XyX4otjeaxYncaYB2xQ9HQtsYZriVWTcNLE4bgbUCniYVMytpK6jioNcvgbqHTvZXKdD6B5kvKw5mrZXFHVaxjJ",
  "key2": "2HVN3h49ua1cRtKsjTXYZR2saiT5WufrmpworAvwDX8eUV1VGYh3TrBHjyqmWw88zPLhTE5dn4L4kXXzuUuwZKhB",
  "key3": "5SP6mngjU6pTvdbrZDPLYFTXyhvxrHccchAqRuaJQeeJkkmoftHp9AQhJv4pJynttneaYZJCqLrjWkrBj6HYR9A5",
  "key4": "3BD2F7Nbv6fSiaUhhmsARdUg3AxywWgDGPAFKSrZaUenyYRqSV9CgHgPGaEVv2HaMR5zKcqUqTv4JzbqFLyEYmEH",
  "key5": "5yWj3HsoZkVuBYU1U275ztu6RGonEPfV8Yvg8emnX5Yh1XZ47ZTDQc9c6qn3iwhW6yX7npX7HwqdgyJRhsBLxY95",
  "key6": "1Lk3twjH2ULTtApZZLT1u8ooZiw4ovHYd1VNfm7TqR1BzgNRPuybbS6DXjb2VWnLHGepgHdp59ibxtJRv3KTgBq",
  "key7": "4dtUALarnx1QTaHACSB6tZMMEWgrkPR25nATJerimWgc5UFX3AtVY53on8VFZx5H5tLV52zN7UZdgqeFTJH2R66D",
  "key8": "2bYjv6p28LT4zMQwD6dfsqpsEzKhdQdt5usDKXY5Ww6meyzHzU5V134hTxzRGeArJPtZQfct5wV9RwmtbNrLzGQP",
  "key9": "4F9jvHDYFL38LXkfqBpnjYuC92xYz2SQAxC7s2ZsCTxVva7uubyssXhT62UD8ukvw6tP1TqoTbpgCtxqV67FeZXC",
  "key10": "VQ8Uf5QeSvb4QseUvGeh73dUd272rnHFXbxqE7qFUUBnQDWRJAUFQDxrEqr1ssBhpk5HA6L5vuDFA81Yaohv6Kb",
  "key11": "5vPyoERrYC53VEi6CxdBpmjrNaBosvBaexpqro3YmMitnW4yi6KYoyGSHadYrxVsamNNz7uhZxjJFCkwPDftLy2G",
  "key12": "4SSBtN3TYp4a5xpiUzwYmw6keDeEFuyHNMVZUB7zXXJctjqwaAdRMCmXk2JwZKtfFegvu2SCFbCYEeAD2EaEE3MZ",
  "key13": "4bkzZJ6YyMcoq8vQ3G1mSy5chfbfkQBbyh4qoiaHVgSPJ6nqKP9iwXzxan7JZQobypnc4xLrZyNheqDJBZ3mFcg4",
  "key14": "43av37MNG89xoNSRAXBvfEQ4zyBCN7Ud486tkKJy8LZmNZTtioHeYtfkQiYXMd3mArhGSrNHbgBroCWwU4VPrJvW",
  "key15": "SEV5RimXZ2TjGKvpXkXfh1hFi2TuDpwbNSjG57q9JJoaRFPD5DYWR8pbvTyvA4ZBqcpivvntqWn8M8orWqjVC5f",
  "key16": "2EpHrSe6wy59wfLmakTscUZinYujY7ePsgH7YnJ11TES56SG7hDcaWoxTxse933hkfG5j6pdfTMhgpZMS1U9eWz2",
  "key17": "GcCAdue3HvjMj5dke2d9xL15wtFUtt6bB8edd8eqfueyc288z6br2s2EL9fayjisq3AcbZhEiqVxJFaS5cUSPtc",
  "key18": "4dKokTLx2yt4NXeN9i766UknCx2YUqPLQbeAio69hc52iB4VxBDVFdLyeRENAfr9oGYQmpTwW4aXGHeA1WUoANy8",
  "key19": "2bn8qPXrZkwWqDaQ9Cb1eZ7QWS8uEvJLuu4roePmB8TVXvGcmszzVXJsZSxnBA1PgURzYdJF9XFzAYr6Sk5JHF6o",
  "key20": "m8iUfTKiFd7xJp7WTWZUVzgmh9beJ3S1i4aSD5Pd5LBq423nc57SEhkizosSRnHbFsP2CN7DngdwuB5Ghk3pc6V",
  "key21": "2KHe9ERKxdEdJnL141oeKHZorhFiLpVPps39ubHzEMpW69ek8TpZhNiUBLY6iWaGDiwqxHQQ8JXEtsjGbTuNufzJ",
  "key22": "5VHdxTvLgwFWgVkcBWH4SCvdAYMnL4zGPjKLRMKp2ND5AERYvs6kmXrb9m3hBbZgyzCUPjyTG8LpEdA8ePZUkrD8",
  "key23": "drQHsgux7BA5PEhicLpv3uG5rBkppD3gdYbJ9qTfhcyzGHAYpHgSGWG4Y7RWKTjikPSr8rkjTjshVqXHQy1Wt6q",
  "key24": "PwwQZ2B68xP5kFvgVoT3xUccYeMzrZKVNCvxT2N7AuJqjU8xgwef7bppVYkbwvqjePFi1Dh6hYDbR8LPsdCkspk",
  "key25": "qANoedWMNwKpyjZnenz2hVA17yNZbZF5zZwLpZ5R2munz84ojJCnBtAHLj5Z8g63iX5woQS7DQ6osJVxpjKTRDj",
  "key26": "UPeHdkGg6gP7GpmKYM7wYooGgBi26vxiUzwnyE93vCXBH75kaAj3ncNvhUR6cDyccBjZPxfWKw3Se8Fmn89bzob",
  "key27": "59bmh88P6YSZPjruXHSzrgGH5kdWfzz3xkVttgsuSEyRcwyS5yJSmZvoQmsxVzRQQqA4ZUmnVaEEiWghAkr3VGgK",
  "key28": "3zusiRupX8fPEwfU7FrMm2pjzzxcavTQJFABhMHuY6XtC9LABTVkDcFhXWxyYZ8pxCm5Tti7QDyc5dUzycvMqHoT",
  "key29": "5u13djm9bD5vKbmjTNmRM1bkoCA2hQHbGeVLE2CTGb8S4cG8GoaQfbQf6hDF28xARRkN4XRABbeu7MoMmtUnHnDX",
  "key30": "21zz8rGfuTEHBK6PoLs51VTHQPPdjYaziG69CC7KZhvQgq26xKS8YUBnaQLkYYT1ptyKQHHgxHuWnyCX2Ccyd9XC",
  "key31": "3hWzqQWrvhvkYSHasuwzZv14RkgNJz7FKhibM95JrysE7EdHS8BgSJxLKNasvna1gVgyJWroYatfcY5CGVp84XoQ",
  "key32": "qiB6JUAjFhTK8CnndvXMVawR4eh6Vsg6yq7qrLedD4HabNAveZeuZR3f6eqXhmoDqqhygwHPJJDyaxCY3MNMN59",
  "key33": "FA7vuTyoPuKhspq4p5bsF1nR4egRMGXx7LnRbLLohGgPMaDqWMCmxqXp5XUWRDK6Zcvf4AFViij6KFxiWpSF9Hm",
  "key34": "3oFWQts5KkWHHakDd1Eafzek7uG4nmSwKEHsKcTCkSVK24FKMkT8qmr2Cepr1GHveNUTiCBTfNwCgJeMPN7r7GeZ",
  "key35": "4cCzntQ2cddRuz3jBsYfBbEGeiURZZfqCXLQyMSq62e6DxhWGQXF2ujAAUy2jMnhHT79f6MfSV5EW417HEQ1GF2q",
  "key36": "28Yi2oH82CcvPiHc22P45ha99jg7WwzSuCn3PKtMxM8FrKwoyBGwaUMp1YpFRSAEokYm3phPMQe2e4Ez5vyg7Lzk",
  "key37": "2U1E4fi14B8bKhkJbGGgyV4UPCWKB5pgKif6ctVQURDVvKYcBzt4L1qkDWEwB7T2E4etyxQfyvYhGLDP8p6iTGxZ",
  "key38": "32PCBnBa8geXCzVan3BiUUs5XS94qcXf5MKBVuyTVS3ctLpmAbeo2ediALcamf5LxRcEQyvnqJK2ndECMNoPJJgu",
  "key39": "5adce1cV3oz6z2Pyep855LMNZ9vmkcjBPYVFg9zAZe7N7NgUYNyBvM6G35W4nC24FkfyLoZEbiVdHVSH7hk1CHtM",
  "key40": "YdYbAtb6wQzAVvR3Run8DUqvk9eL17RmKH8fdL6kRMF46JJQ4cznR16hy6HRnbKpQFEbW1D6HRxzQRZnnti9PTW",
  "key41": "562HM4NuRC6LqSVfc7YfoJjbZGr8mmur39PYcgyr8mtyMZk9SKp89kPvN9YYkZqZRTweS7v1H4Mc3inpMzQdTktR",
  "key42": "4VWf3PL37X8T3CN3YJEW76hxkAj55Y17HNHvqPcy5xSiBoUTNWktYiJuhmVG7ipitF9WW5xGgphuw2TCA6DFnDiv",
  "key43": "23bHsC84EgxebmedfCECAiWMkAg8i5sb97ya8i1CCtrtGkfZwgYWwhpSfK1F5B5pUCChPZvfLFBYyH5aBGRsAMKN",
  "key44": "5iP2nCZGf5NA6xMvLFxstx5WVYUtYPgddTts3L5DFDeqQdqcHoi2DV2YDbBWrKCnvLxBTYJMdC7WriKuYH2rrUk3",
  "key45": "5pvZZ6HgjQWFFEd8VmvHWfC1ibkcC7Ynr1eH7HchPz5br1DvvZbQ4QYd72KcwEZVuKKkCSNciVUivPBXW96FkKNe",
  "key46": "5GToNoULCtXshmGJF7poqjRcNfNBQLY4PUTjJ6YuxDeLanp6F2qcpt6ft9LUjix1MpACD16kZf2voEzDbg2hvvyd",
  "key47": "43UzF98q6YYf17wqr1bbGtnrBfvHMhyBb3SJRFsRhgPvuzvbQjyvG1NRz9GyouyML6jjDHH8JY4hSTW1NGTugR1z"
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
