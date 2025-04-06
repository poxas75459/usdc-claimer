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
    "Sx5KnxuDqU4My9jTihvknqmhEMBMTwwxhZrc3ohpHJKBs5Gd5qH8gzVWpaGGaRbvAcAttdCje5QzczXABNcya6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhZptjZx3EgVjdVPN3bbhtbao2F7Sc5nsSsZgvpTZbt1KcV7VC4ysZNsRYv12ZhvRi4dbMRH8VDZQabCm7MDxMA",
  "key1": "4eGptrUEjqAsv1dS15h8Si2oiJzfvjwHQer53eUcynmXBDG5FffYBuWbiE45FhGAHJZmGtFc21uqU3vydyddmznh",
  "key2": "5twKumkiFwbrqxfjX1T3z7mJAuhHHtw6GGC9TUkstUjUgTbcyAMgrKjVH86Bk1MnEktFYTpEnt293QcKPJx4ztnf",
  "key3": "BuPPZvgcte4YPcHtXP3mZ8dKVvVktNmWE5VcXpzSZbTdMh4EqnukrS4UiKvsMFewjSrmoAjZhNQdMBptjiZZT17",
  "key4": "fHrMcvL2JJ9CnCYZcxYDzKKJRZBQqa538jbjBV8srZLJMnyPXvMFcen5o62aYoF9ZXWWGeixvzBx5dUVKZ8rGuD",
  "key5": "HxV7Mj4iP1sq59SyQKTFKf7mCHh9ZV81cA3yKF1f7FuTnB1nWrcYp5VLBvPQhBA1sr5gPKcwxyUrCmxnbYgK8mp",
  "key6": "3RhCD8ZbjEaHHKZbxug3s3V8DCGA29pXd11FKxkyL8FwySdCgLtPsHBN2n7dnjhahR7iDF3G3TjnAd6ApTqEu1v3",
  "key7": "3pCMzbwfEZZ9WZpVqv6dgPRS9LdvThFxGfcRscVZNViCKGarLfhchtWTJaihvYdvdXU2dq38bM6xNkakFH91z66n",
  "key8": "3gS2MNLwsabk3oi3inAHkQCXE7nbwtq8vF4pfQtb3xwUto6vsbjh6xLneWtfkLfQLEQ4sxfPDMB4kSNzm5UmvCa5",
  "key9": "2N3VWKAN5hjbhfKnvPZnHjsD8oKox4d2b5CbQAznh8YHcaVLdDp46yvM3J8j4rPTs3eHN7ucRKxat2nVKW6U5Pne",
  "key10": "2veG8F52AkYdmoEfBMpNheA1HWEqGy9UjGC1xk5rgq1RiRjsHjUD1wwQ4qsyMsmMqhN2CFmgWjqkfSHDPBv4q2iC",
  "key11": "3SJokuU5hnqb55iF4dGYqeMfivbBoWNsafoGhwGbm7RhRnbeCAprt5N9QvW6jNsAMSJNtaATXPiazjyiUA5bnUBb",
  "key12": "22eEzCh5v9MDNLJ5QcbgEjEz6wnqqshnqVTrF2XYkkQRAR1YPS8gt1KywH7mgcc8LmpGYMnnQjc5GZ9XXuqDf3Qr",
  "key13": "4kJuFjH6uRHdds7TaKUGzZm1zRpZCHE8uGFbu8JNV9t2wi3xTaYgYjwuDVMTngxwucTHTTW5vByy91KfoAkewk2w",
  "key14": "3zjvwrF4KYst5TubCEC7eG9SVQfH5CTg2SiuSiKf5DJPxHB8Yme6zNbmj4bDGafpZxhPh2pw4hpWV3mq3C2tRgbF",
  "key15": "4TrspPyZgZkNdgYVPQXj86AFAP5Nm7HSr77KYuWmk3vLF8QZvMJNWsrnnPMa9n42YeayzzJ9i6JK2gkpH4eYPBwT",
  "key16": "2NsUbvCcrSqbZAgdTqezzXCxgqDCrCFaAAnmV4KZtTPb87e4aDs7hqQSUX92wcqbA49HkNzpfxD84WKUqzyb88Kx",
  "key17": "8nLrwykiZrPn2zKaKep8TJ38B3U2aa466TrjEgpumzqqZfJ6sZYm3noXNS1NA8oz4jY6suvjQ7oFdtbLFVYTB47",
  "key18": "5Knta4hARrdYGwJqx5QAW58c8fmRgMaQBCqABWUTbPA19o1KbYqujc8TRk1ZKRrFDTAJiNkeYUMLv3uQVWCC3yrq",
  "key19": "VPEPEAqX2GYCkFV4V4BKNHYzdTguxmDZ6KwX4Pd7raLskpVCUN7uMm8JqM19PbSZagQKHnhtY7HxS3qh9AiUDHn",
  "key20": "wCL5drbSzp3VknwDNP57WYSvhEzfGnah8zyuGnnS8GyPnFDqaz3sMS5uRsFmDDNLaNuapdaoSDkRWfQiYFQJ5zq",
  "key21": "2PC7ahKVbxugKEJHysdPJ64wTfneHz1fYVivomoUEEZSAmit6CUMfNcpHExS55W7VLy1diRrTkwMKYYbAok1GUib",
  "key22": "64dqb2NBpnEaAt4hW35gxwroj7bYwtHrgRTV82j87VfKaC5QHA5Sp5HGN6uMcDQntTX7rwtTKaKQjiUkZvusbgfU",
  "key23": "31f6Amdt2ZxLKyeadoy6in4gA25CYbngoDs77nT2Xq9PzHzQvgnbaK7jRz914N3cgoYbvXaGGa7JA1yB4nvi79jp",
  "key24": "5nderuVYtZjahpCGWdiBgmq1NRPC35eNQFcwe24SWHrU3BzqY9u3Pc6vmMdbckQwPwkJnNcSwLK5YqRK7eo7Vmbz",
  "key25": "nNBPWmE1zz7PqYddW9wXFChd6bgxcx7d28TTBiP6UNPt7dXVi5MktSiueCPZaTCoMK7mZRrYaFcefce9da8iA9c",
  "key26": "23aEHLtxctVqPzVTz6qCWeZGGxx5NHLi8HMkEXT46479GEMrmZn5LiHQELh6ZCquD4NpaMXEsimWSDwYeZSP1fYH",
  "key27": "Sv2vFGmrmLGkpcij8ubxkw7N8xLCFWYBj6mRD75uVi27w7tuZC1TWhaaEUsypoxYiZ927vNouyjrw29EtMHAeDs",
  "key28": "DSVZ4GfeALQH8g2JazNbA3fQVkT1sbvybkZjVALWRmu41qav4fDFM5aGNNAe4YDsxzkptaZbT2ca7NvhchDxWt7",
  "key29": "3pwTxF6EzEeb7XujDc79WPiXcTdVsvLg7nJB2uiquJpDWqq9jmSfkrg5C51GP4wvTiK3rWvVbTz2LJwdtcCfCMN4",
  "key30": "41MxcoEagAWyecPXTZ4TKN6EgGh1N939Z7DTRuzfdYMVFMRcXPfDVaSTdvYJGHZp3n93FgL5xXkprVbfURs1cHPV",
  "key31": "2VVecLGAzWReBGf2CSiMbNQ6L457f4TNmd9fjgFfD6LUpkNEK2i654jwWU5q1ZgUfSBAUz1LqTLZ1tiCfwEjGiqE",
  "key32": "4disfXj7CmXnQ13u4f8nkJw4rhMFEeJKNhWNVYoCjXUWrx3CKP6RAPbALbFBxzB9esjFEWnrdPRbFkyNjp16VuN4",
  "key33": "2mJUDEq7cTRQGsidbVZotFFAqkUtj7UvFVGBsoCis8X9w54T3eB9YyPpCwUaMPgchfPzthPxPCNLd3hi5kb91rMt",
  "key34": "2Cs2t6vEnpUBPPtkmSE4eSjFkWmWCLgHJPnp9tJKzJs8AmjMBvmK1pEUTUYFyaaG91vwhPNqcNcnVjMaNJEunWNz",
  "key35": "2iuKUYJPhnmWecQkGz9jEhYAFhj1UKmc3GmS4UuAefYAxZtFTDRtt9iq8Qjri1LCppr1zqe8hna6N5W2h1TF6usE",
  "key36": "3uaVWzoDSt8kX7SfbNKdqYkN248HXziTePTGckn4Nk6nLQCKvFtNuSfVv1hTrKz7s2E5K9gZsrn4J5Fz988jes2V",
  "key37": "3KXKgYqTfj12pUo5fjXSEGqNWqhq1ZuRKctq7m1r3LQKbMJ6ZarQtmCQra4TASr4qTVzjJacqpDQkpaFcjV9o7v2",
  "key38": "3hVgPf9Nmanj8kjZEzBbF2CVo2jzpfv9Qn9vEwMN7brVss8Vu6HTB4Laqdpum923hKArJaihmGXHw99RpUsR8Hps",
  "key39": "4kxguBY3SEzFksEEmxAY21R5WM8wJ2SF8RyCkpRLcK6S3nxbq4Cy8XMYLR9ko7wSkvPtsvnAtfZJifvnctaAzpCx",
  "key40": "44uASfSB3WimbmX7GVpRZcxUPYWu8psTsBKCdgmwbT7dPtV6JUmcsYuYYasQmSBoA6jUKaHTRs3b8GczEBqXgnFZ",
  "key41": "5NRvzQrRC1y9PXnPu6GM98WSFmEXmJ9pHeCCuoiPDX1ruE4VCCZXHzrFcbms5XL9WhK17rynW66Rih2RXaf9SMKF",
  "key42": "2zYKx5YaCHLXTpV58sENvWvJ6SPHi6qCDDg75xJFF83KUQR3ZbtgF5RANQuDYPN2ZQpLQ4Ars6LXoNisJJm3EQeQ",
  "key43": "3FidJAEEMyGFmMgPZ5fpNRUFBMMeMtL3ebuiEwN4rQfCYFNwUW8bhYdhp1sXBu6mk4P5V7J8WLGLx1bRYwWJjAgd",
  "key44": "2n1tA7CPyJ19zTChW6RpvFpSX3FcG3FKZKYmUYg5dVfZv4K1mU11tWWfW2XxYEZ8oZr1fW6sHgzvWhBriPDBpkD7",
  "key45": "2n696PTmhwz2AmmkQ3zJQbVwQZjNaLzHTu9865Vn5b8GxddFaAmv1U1J4aUVpDwUuufchsK2ZZPfpmFg5joHNt1N",
  "key46": "42Hg5mUwFA6ueqgH8aoqptsLLrDB8eisEjNrjtGPCjVoH8HkGAKXNRhdsUm61EBGdBBALitTc3vYm3XC3ZB2SY9t",
  "key47": "2DcA43p1LQrJMYaP5oHMR3ufYr6zR34n7JPQG9d5nrv4jbtpLwJtpwZMZHLGgFbyhpNJHAoXhzg1UnFEDkZQMmYz",
  "key48": "5tuQjhvyBfVsLzp8ZGBADUHqZ45M1ywRKk35EirT1bxTgYvJvHkm8zUtqgwQtGZ6DvMF9HDj25zYL5mLF3T7fX4i"
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
