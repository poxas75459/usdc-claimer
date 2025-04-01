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
    "5qzZpuKvVNnhcJG11j8w4kKpLRQNqscZQkBZWiFyFa6eXpuUsfer4rH4phVPX51JRfGqaUbo7zQa1hudDE648KH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jM9pgYaNJVVWzGAWF3Hgnj4MwRsKwW3PcQLP6cgyyvZZcEmFhnUdGqqnzPPMFuhv7xtBtyKgMvTPKffix42SeNP",
  "key1": "2hFtJ9CirBXe22VzfBcXskLjNT2qeLdmuEa1LUDF7BTeGyezTinaVHRHPhuDB6VAajDNyf86c9skFe8zvWGG78JR",
  "key2": "4M6nw6ncZ4Xqxn5vN9c8hKiVPzstmJGLQsessJebh9JVE3WVQJT1pPsUD4r3H2fP29XymbCbP1dE4Q9bSUupBrZk",
  "key3": "3WkTcwCpnXCFztTuQma4koEKQztmpy2Z4rUHSxqR3Jgn9i5a7G9nzta8K3bR9xWPhrCCEfCP4mdv1RGxibFjmZiu",
  "key4": "5ch5PYeV9NGdYuoJYe9w3fYaHZcMQePdb976en12CgarcS8P2vXHr6EYYAb6kcJefai7DiDdFWsBibEA9R29DZF4",
  "key5": "4SbUWEH5SRe6boc2nL3PZpQKdgk2gUTZvvn5qJSiJtbsghz9aVVW1Dh3PbmmMshtv8GeqZFLfZJN8ze6u2SakinY",
  "key6": "51iKovQGYVzhByXzmLKG6qsBwUtK8RyYJkwJxuCydiXVcanZT8sdVeZiJrNbqg1KcaTW4B1GJUqBYaRcrsoJLZLx",
  "key7": "hJV5tR3Bb878rfoePuM9MWDVxALDt8rzAHzwJ1Nk5NkNbZrGeHSoioK6xRqDVqDvV5MsWoG2Ker5bcRoGm3kTjM",
  "key8": "ALjZnKptqQ2ZcSx35XXFzu39a9pUP8bzmSjruFoh9KPHK3uA729vKDS84EbC2Qo1m5Bx5ZvpThPTYtucw8Ag2MK",
  "key9": "4HC7GiZtpmsitiGprhFtFhN9SR79sZXfS5z6LGFCT6jrtBzCstWGhqnZzefB175Nxn5vJCRMGbVQYENgkHzivmVk",
  "key10": "YYRcuhwWXBTBBnx6fF4x2nrTqPG21qKqSVAapqXeiHQprSSNA24EcZHMLiUmNTmssWkZkN4n4dpCepd9jAY4n2Q",
  "key11": "55pF2j8qiDYhbZRsqfkvoEMPsMKh1M6rUC2sHyL8aT3hUgQUYF6Y1iKJRJPoFCHE7b7SfkQZjsGG7ikPF8vrrHqd",
  "key12": "5id4xmpCyaCRG9rfFe6v8YSiEbpfDgDmgmar1bLEdDrnSxuAJDdyVgS5B9hmepiDzoL9beQVLQtnPaEcXVunbmrc",
  "key13": "3r4bnJpeuoHZhHTFJcLRKL3VTwdF3dF5WrSenotqAfWArMoBDrPw2qWupozVE6xCmz8WFe6d21UUrvWHQd7uG1zu",
  "key14": "wQEcJfcEt7KCTXugkTEuFZf9BSkvWiG2CUiiqXogeneR6N72Pwab6pixGtvCM5UuGiLPnkoBSSBe4kRQKjBn55w",
  "key15": "3BKxMYffVti8ckFsLVnJXg3GZWy3o4dM4KDfAzaE2na4G8KHDSw9FdRCWN442ckCe72Vk67E7nMtGvnyUN3eKmbi",
  "key16": "3xNC8jgKHLmgwVqbhosdPnBCDUzs42CoUmjLyd9Tu5GEnfkSMF4ud9SFBRyVY6gZfVUgfnHTbyxAZpPLZBfh6hwf",
  "key17": "2J8DP9KMVP19qthg42qrHgRy76V1Jfcwk4UPtpWyipsB1duzp1xuqGHo2tpX5Xg53yKSjksmPP4fshEMKpStgRxe",
  "key18": "5eZ3nzYbggja9iKFX1KS9L7tAqSUffSWPu1iuSsL6abkDoQhEbLtfJKJ5nLDATbdtbDsaSWw1smvHBqcg7pEuSro",
  "key19": "64MJXxcf7ZCxR5uxoaUVuSJLwnyXCHMGbXfCtB2gb5jwbg7GGh3J2LdgSE9wgunj2oxFqnsU2EfkwNadMViE79E",
  "key20": "gxqiZsZcm3Pybtnu5n2eKEhHpQjkAWd6AUsw3LvedtZiiH5UZb4SxdGvk5rJXcq4oHcmsSBd3nKiFa4v9qNyYGN",
  "key21": "4bxhir1Xi2LFCrxzvTeMAT9zjBsA12tfkJ6WkSekzk6wfxZTAddqyGfpB3dhDGTNSSh69HvkgQXHbGTvt2v4dpge",
  "key22": "5ckFPt7rTuhqjKRwVop3MzNLH6hX5REUGui2qMHh9vfeemjmmYxwEDYr3JtCwZMt6KVdBYaBUsvyq6ERzS61AfCH",
  "key23": "3c5gfqFLfN2Qx4DkYtrKxGNXp1J2cfJuCeVGtrDsoGTb3NXaMnMA4DRwtmP49GjtMbsnLKpYbCMxdYqgxXMUV5NS",
  "key24": "5uNa718szdhinYtsJTRTbFmxQBojAi4JconHqHWRKkym5ZsKxccUoxRTCE3Q67zuT4Uqyevw5Lc92TahGZSPmusv",
  "key25": "5T6sqUJmqeFuBJgB5WtgB2UTef8FuEVGskCw9GrVpDLygNoJMnAJutiQtnV6quPGPdCxe18ZWK3QiWJHNsRY5B5o",
  "key26": "25ztY8cim6mU6y2gvQc7vmjdnRbYnaWAgh51U65PSuZ4SSfsiYZUWQZtXUFUMWRpafKipMT9NbiB3qinjZPPh5DD",
  "key27": "47fcAV3ni9XM9JyjVWmN5gbj7daqX5waLYPns2D3iUocS8jkfmbt5hWY2TTW9J7QsiCLcHSR8NRES6eZstauHMgK",
  "key28": "2en1etcD1DCYkmzNPiaYJfuTS2SPQgsQxW8DtvgkftSzsSMobFcRMZ6GgyB2H3MLvU3yqyZHGSwxAGNdzX4dm8Q7",
  "key29": "4Ff9HkUwQMzfBvYAaWWrvvdhuVMZFMcYXqr47RgAqG4QsyxSzAuBpDEyym6JWJ8GX3UeUXkg1oRXxJwBcPnCi98J",
  "key30": "2dHMv42ycdDS2CpURjoZXaqhTAgPDkSEK53U92AsQm4xzcvSugKBMRpwvz5jp5osEwgGbnxUiJshHFXw3Ni5zbHC",
  "key31": "kTX26eh8K2CY3hcxniTGqBJ7cjwA6LrCgpPwbdQSXfWfHesFczbvNjDf11a1g7VgV6DUu2mTrkjVrathigK7YHf",
  "key32": "2ztaLzbkPjEb7X4kdoZwzY93AvFSAwq3NoJEuMtd7KxC7j8rPJMeGcEjy9FYdFKyggmzEc9MohpWGEbWntzDLs1M",
  "key33": "5FNrDAkr33acYfKGB1ZzBtoNf8LmPcxjL2HpdSUgYmt6ufQJ21ZrwYCQrXnSayemQhe9F2CAqY3bYE2iiaeSFFjc",
  "key34": "5gSPVU9Gjy1W4hRMGqhECkpi13ZPVH2u8pd3qfTEnc5e4msrD5moEAVjJxTV5fgMe4kFxsBvzUr3UiKws6jKKRhi",
  "key35": "y1mwimJR5tjui44reC3xGzCcJX2WFqD15MFa254dyFJ9Gy9MELv8YZo7nM65K6LuPapa3rUXpCs8UXL6Jzju9xr",
  "key36": "36ZsxpyMQTqTnBqYFcVnFg7suPnkqHXj3exTWMCYRjobXkRfHwKF3Fk2BLhumtQYGaixLzZ6uiauXxd9FiZZZmCk",
  "key37": "2Dw3N22gFzQ33VyGMPxfm62RTAADeZLpDru2ZaxMT5iWobLogqmdw8EQxMR2ZKGE67t7J6omuWFyBpUHBsuX2Tax",
  "key38": "5VfSffWtzTMGsZGbYQvPmwWMwNWpTqfANQhDDu4ZHGbMrK2Lc2UJbezogPKEp2jBp3XrceDnwupZTXuLxWR5NNa6",
  "key39": "5eq1iiFMyBpwbFeRM83sHMVQEdeo9kWEsNwbWttqnmVVaAhiNrXpYez4XoonhHsCVPPbFgEg2V8GukT16QuPc8Gv",
  "key40": "21ih2MrJG6LaESHqo1ATs6mJqTYPAB9djsGFSUC3LdwJiryR26Twvbs9aCrESzTi8zfnBiqggXRFQg89hEu8JbJk",
  "key41": "nHF1io881WLrKJALU3BT54Tksg8qce2nXxJSaLNUXrG9a1eQhpDWVFmvRF7e66RMsaF8tovpuiRdWPEUNttfYV9",
  "key42": "Tm9Px82HF2kvE6ifD1dWd7544npxe1meRGwLKmZj1M5xz1ZXeqedgWfhbgn53yuuGZ7PHY5KRogCJjDn1fFj3SQ",
  "key43": "4Yejq542AdAoWGZq3tpHXvotG4skiPS8NmF6usqMiHupfNKAMF31a2AX9rCYqqpdiyJ9zdmA6oSv4YiRwjx9WKgG",
  "key44": "3pVVjawKBHC5aVAG8UU8CvPM51GkbfzGyR5d34RYeQBksieiREDzDEevKTDU3zr4eVPyEheSMdSjtYmtWbdiJ166",
  "key45": "2Vb7jVWFq2Vyhw4rVQ5pr9fBTgsqTqCnACaqNB7R1pnkL6gQQVqn6ZwVfUXmUuDijxgJPkvmqVwFiWZEutrKjHq7",
  "key46": "4xDgwSkf2LDDQWjRLPAKxSXmqnib2LZPtCgBxAVaPyHsCMt9cLHnbLURYvbnD7WwSt6tCKG8E9Nmqa8q2YsNRsDk",
  "key47": "Ztsg7LSU2yNqHTZCvJwbH2TGV2S1y9uJujU4KZGJNSak2UGpzksY4Tt89csejA6u44Bc5kVguUM8YqH8Tz63TWF",
  "key48": "2XYHRFp75ttppqC2yLi1k9p2u8KNSFEdhBM2aMySJWZnWWar6TApfhCZwx88aRZUC2EwqWFEtqezPUGt5KH6DATQ",
  "key49": "3QrXKuNPii5KhLrZhXVwyp2q1iDGTxe1ZyQCbts3y6dyzVkv8qcoP5SXaiMUS1HxedEhPesiDkJvmzZYgDvUQFmG"
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
