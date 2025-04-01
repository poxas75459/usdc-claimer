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
    "pDRcvvSWwyhxEiSrFNuQSaC43RnPiH1YpDEXPtc8UyczjTu6PneWRQqm5cJeR2qVXJtHUM3FaP5vnKtR62K3o2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDs7Rq3izEw8Yg6UB4cYtV6dP8XSqBvwpzZicRkVK38SMshapvTDQr5pDZSogXbtiZViHmWTjNWMnkcduTxnzow",
  "key1": "4wciqkZVGBntv2iK6tSXVHhx5CdMf4x2B3A4JNkgSWKNgfG3GZcS65hYEfFsWFy2Vsfh5j6F1Tixxfkkm4xBvw7t",
  "key2": "3DwFGMFQHWnVvFw13MMoM4gQC196JTwsMCXEH3f2HMXTbRK8HurAQYir5V2tUgaQE9eDYGubRxV8s7i48ZKkXKkT",
  "key3": "3zrYFZciHBU81GQwUQNRw2AP8xkMch7i1ksa41L8soB7ExcYsVc71h9QmwoUzEuToKzTEvU2EMLsQLrYs9e66t2e",
  "key4": "2tTvgEaXgqqaTyrbHnohjLcnwV84RUGuwt2WPowbYUeFQxhoVMjivGgA5Fq1TQyN1admjRZhqgH6hE8bJdxR24Xg",
  "key5": "5U3E1aBsfHQSGbjK8V9JfFB6Lgko2qHmHA7Sjiv73zZRKB97CqjVKK3x29qHhb3k15jxnuqC42g5WvVpXLdaH55H",
  "key6": "5DNWsbbQn8bEy3uH98NkaVGcfc8SwSXpNmCNkmZ38BZ1rQxWAArd3aULXDHYZ2pouTNmryEaG5BttAGtnLFsrAGu",
  "key7": "3n2xnV2YFRruUFcfTYdk4wgGTFW8eUCpiYA3Te3KecLDEkARu7JNoHZ2cPPop8fTfZGEb9f1Xm32V9USdsahLyKH",
  "key8": "3YnqX1FpteczvposmQELoWRHFjbYHY9Enxt3qgSxuRMMeAPWPQeRM9NoLBFEA9c71QZi7oKHh2sCcfRczKKWcndV",
  "key9": "4wywpRFVjYZ6omo4kjxPS5WY1kYm9KH3ykWjrZjNVANP2JZteyJN9Rdhimzgz2jSygWKUGCoy7gM8eV4e3eHBJJQ",
  "key10": "2ffRL8qHEfDunX1Ekr9mHqE9xUPLeCYchMFF2PdYcfre31xiN4E3N3BeGkKFAdsbp8eXiYLnx5khTKCt5KPJ2CRx",
  "key11": "3LrdsV6vMK1QTs7DdcYK6XFQzxDZBJMT4Xb5aPtDKp1xbrboL1txog21jqDgMBsibA9eyTLZ6TWPeY8o37RnW58Q",
  "key12": "ZpBpk9QGLMVJpuj1EAYirn768eVrX8d63V1pByEo8LuteYWBbNkZH8nLp8G838oHnmFwr4kfDPEFnfBAtgLB2Yu",
  "key13": "5FG2jEf4ZDR1srYeCH4Ed1CT7jU3k5jwZpQBJXdDkdURs6T29fPEAU551GgGooPcrFcjANDztpd8QEqBisezgZae",
  "key14": "4wSwYBJz3XAEveBT3h1TFpZUPLtMdMswre3R4RrqJJizx9499CRcqHUPKhcmuhXw7tA6g8SPswENYz8NwPvZTyLg",
  "key15": "5aaGb9h5TtN2UxRATDxWrEZ3SLqwZ4NMHxJc74DCBJCRFPFMVRbMb1CVwgXpYmtnqYLfxMGLUCcQGDnK4pqQynuR",
  "key16": "MWVoptCzpj6CbEG8XvKEx22iVd9F5Z18tDkko5qdLpFoLBb9eGKm5Gmxn3n7T5bbS96zGmmmNKkMUPCAHZyLUfw",
  "key17": "5iahWuZREUp1umB2oU58LGhR3nswsxjqCMa6hNv3wu4t5uRS7CQTuBfoHLgD2VraJyoG82sBHQfa1E72FyKrmoXf",
  "key18": "2iTsqQLKNiQUumvyHe1vgWWR5e6qzuJmPWDe4aWDAxSxLCR1YtGR9X7U84k9WDyYKZQmw5HxuPhPfh9iYYvNFGA2",
  "key19": "2t1kpFu7UoX4dA3Gerzok43FtHk3ZW3h6HKZMRsRCxcB5GjaetpziKFec7wbxSRzEEfKaWytdYJcdypYsAseVma5",
  "key20": "4j12kasMYRANNGsKcQCgqKe552SKXvoHowHDXaqbgVdjnim3eVVbEgmLyWQjnd2mygQxKc59hGm6W4PDCNxXq2Pc",
  "key21": "5tL2ZiF3dJqBBrxW3kcd9Uj868uck27qHzB9vv3gbmsvd9wJsVj97xYwdwoctpgc4VxU9fcACUzykLYWXewimvQ6",
  "key22": "5eMMGGvzdKt9VNR3NyQEXmX46hVysq25AFfNLY6ByzoiUGw12FGnfhGhiQjnH4HuCffhYC88C5WTvF1FpQcPsy5V",
  "key23": "3AHEjSwgc2T4vpPDCFA7E3pNTtUs18tBusHLkjBpTdQoTdPpqQPvobcpxDtDjnLVdquGsogXFASFmS7XroA4M3Bu",
  "key24": "4iuN1VEmAThNPkVYdhRmKBp42xdmDf3teoEr4NP3h4gR7fjSb7ztN1bPndZ4w8YpSVRZFjfBUx8QZjmMusRHPxJH",
  "key25": "3i6XACnGB4KCdVYq28oAJ59Uf86HX73B6cpuRrPHEWh39WHDksEnWSWmHAwxjg84G9haaKaiL1MfgW1A5S6VpTxR",
  "key26": "MRnYr6jSTWUPL7CkJHLVf7u9Ui31zHrjkmY4Wq48HUcDQh4oQYgQvNbjqYM7xtfohu7cFtGsd2UGecgQ7eWNWAM",
  "key27": "2b9gno8hHTvXH6XcLZpjoMZ3V7Ryk5tc35BDcFE23jMyazdMhHcJifpNqAuQ7RYn719Fxxfb2xpYCk1Pp98aTMJg",
  "key28": "UAH9EXGDMPG7CMBwobJt2p5FGfQpHLL76yj1uL5zMwaXJLeASCETCzWrVdiZm6H3yT7zzuXYDuGg7WF6qpQ5rsi",
  "key29": "5Td49KLpHAZGMvMwHgf7usNoF72m5LkL6TcKPfAHdRbgMZB3cMKCn3PZVqzeeMwWWzT5wZqEXkXpfK8ccqNoeQxT",
  "key30": "3y319PPZBDiKuhiLavEhvgoPQEcJqpSP4kRwKBbB8MiZKUingtMPgrzkYsERcKTpC4pZokkzYtTQWyW8Tc52tHVN",
  "key31": "hrEYPEG4invt46FgSUg8RUxvRYEpon5LLTLbs9SFfeauf7VAYZhJkopX69Fk6KzkrqUkqYgmhtsnFKqfuEgwjSC",
  "key32": "5kBT1KkBx7bxX44bH9kuKkH9usbMuNvPFSBKmJBzs1pbTWQRfcRQHTTiNQUzHtCjNBRH33qUys4y3vdkQUzecGS3",
  "key33": "4fJycDHh5fnfNAmDt9yFPY8LqCJx1Crzggx6Bvm8ct9s8Fcwix6bRjP9fkXgFXLZtsjLAfiEbybUQm9tRokATZpC",
  "key34": "39fGwB3S1PrT9NSUrfCFaCf9MDgaAdncURfi1JWd1oaW1EAVXyJAscFJfS6Z5kTL63MBNsktCceqqQJgF3Vq3Gzp",
  "key35": "Dq5Jk7XEzmkWHunBRbtVK7W5Wg9HF3PSy7q7SNargjJrAyx231ERonu3wx6wCj2pY1xtsd7qHGFgNfmtPPirDVz",
  "key36": "vasc5sBcqetbnba8dSMDejnSEopYLn83aWUgqh2qT2CnkjWR5DB8UXiwhYjq8SzAEaPUAv6ZuESzWY1Xk5SnpQc",
  "key37": "27GXvqR9LUp36YjmWwKouwgC3c4NrnVT86xDiJma4tSdKoVmnegotMXgCvGLKLB2nXT3dWP2fEhuyRsJ1S2iLjbC",
  "key38": "22srx3AEpjfhtH91q4Bx8s5HSQBHbbzHeWwyLLVGu49YJ68jrexV4C39W3W6HtQ7sFFyfwLyFyeVv55bDUdcaGe6",
  "key39": "4VsxFW8Qm6ZtpUddbZ6g7FFBJQtVUc7DF82BJrc4SabPoUb5jPQEFMuPpqjuuD4sz73CakCFNX7QMtYtTHvMLSmS",
  "key40": "42DuAYiS5DoMK7tAxG9gKA1p9d1pcgjrtthj6CewcqE36UqJEA2yxdjeaMgU6nSyM4Lb4fyR6VMHwSZuxEczw18v",
  "key41": "3hYWjA4kZzumujGauGZYeNy3TUcPHEJWuQLYUtLwa2tYkesdZ9wbCeNmXNkDpGcr8n4brLELnLyCqNyPmJD9j4p8",
  "key42": "5KCWYD1oKZ3R64qngGRWdeQ9toZ4BWYZWeYAaDA6FVqjHGi2ZoSzMPDJM8LYmyLrmejG2XcCSefTGutcf96T5xGD",
  "key43": "3XbiKHVDHVzqqvzMXieqXH4TJLwSG8xvQy4MhmwURXY9867qmiQebBXRehd8EFtSqTuzjvbBj5BPYz1a3xRsB9Md",
  "key44": "4Xdebk6pS6CEgZJ1KsfhAfbQ8szmwAthKr1ZqZ5af7NYcJeaT1X9kR8X8yz9WSmZBeFeGjm7cFkW5nUCyFAQXciH",
  "key45": "4TdsHTMEfyBaof9bfUDjXg7CzCvS6eUjry1b9zWmwjvTpJeJwjyhizZYDsET8MZHy8e8EqxQ7mZ4eyiKKyk1x4qy",
  "key46": "2UG9C367msL4TtSCDh8gdU9HoTxrdEyNPaqAsSoBEZXC6UGVwXKGNqh5DNRtXg8JbASUeNYFKzLqEFbcf5Vkmbxa",
  "key47": "314wBiwyq716TXqdgoCXriG82VEuq6kxqX3t5aqb1UYZYG88C9Q1nNjQT2BP9ptaJfHQCTFZzMjaD5jQaTY6QU3K",
  "key48": "6YvMDFpvVBcjrf48fVVn1nq9vh2a4Caz7fdGVs94BqYcAReMzFP6XjmgSSsmH7qk2Y83nzozheEmFUt5ZR7XSbt",
  "key49": "48YXUDwEKxTHDjM9auDUDNv9gVTkfu4Bqg4oYtkxEyRvQidJnNZ5WtWMUckRMMYFDPToUcLJMPPWErUN3AxC5erQ"
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
