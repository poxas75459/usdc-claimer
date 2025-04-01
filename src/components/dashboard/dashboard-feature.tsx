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
    "XbHBcRpqX3G2mYK3FMUHh9UNbRR9evawUBQdVzhkQRqQXi6kfBM5zuxo4TVb2AhxDH3ky82PTQWSHNXMQV5ZuAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jxW4QNxEHFqFFGP32j1mbFjWQKm4uaH35DwMgpyLaAeWjdJdCizURZRz2KWRck1j6CDYXQks14cLY7pHjtaJuc",
  "key1": "3vEhARUYSU3R4VmTrVnPz2xurt1CGok2qUx4YxMEffAcEsd32zQzebweQoVJN2nKaTycBLpasLavkDipc4gwpu5T",
  "key2": "TcE4gCX3jSXt5d4X3tVY8oT4mr61D7tUeoBbR9sNN92Fkbsgeou1zKtHAeTLQQMC37Kwwg33tzPE4aTn3MZLfEn",
  "key3": "2KrsMkWjRZDFswkcQBMMkKDnBfFPzYSXcntLbXo4Sn4qFwhK7aHecgrLDjzh3vVo65PkDYmBx79yGsbfLNqYG53C",
  "key4": "S3CY6TFbfoYBtSrp8ErGcwy39JE92f9mx5FGLoao6W2YdQw3WGjei4iqadhbdkRX17pUok4udMyF7wWsrrSVtF2",
  "key5": "5SyCe1YELvKN6sLdytnATdwEUJcQyYS5RjfFezXfyBkxQwZrLLyPpPGq773i2HoSvtsnFUq5a4kozfqNo5e42Rg8",
  "key6": "m3LZCx7WWMSxp4FpMe9dyQ3ZpSosy9TZGjF4WgXxaWifQvsmrd7pR1saBj7L5kESsUEA52wmyBoLjxnG3BS3L3E",
  "key7": "Jd5sXNfUjmvC2vM6eYDHHGcvAfHtDDY3Pq1H4QBcWd5is6y8haTCn7t1v9ESFAAJCxTDc8SzEAaRjkZjaMbM5Qe",
  "key8": "5WqgsBcKzXZbhgfUAXux4WjxFgnsfphiUuFLDtEx8gbshgCqo4JDp7Wmaubpga21jvF2qybYCuxKXkyBuhgAK7Dy",
  "key9": "5kpjoaEnpf3sDHYE7uM5jWutdzjt296BERTD7Y6nLqrumJnwaeihYF934XZCEprJrTheKgma7Fo1YQEYQqj4PsPe",
  "key10": "2AN3FLvUJgjbfy2UkJuCGjH7nqeVd2CNugniKYRjAjz8dQrC88zzBva4nzC9kMoPCqWpSVTSVoTH4reVwr2Gj7o1",
  "key11": "GYc1GfqdkRyVQPEHPWfr4oupBbsmqpi6JijtfptZJJ5WqeCeUK9Yp75KrxDXMhQV1MUodUbFLvHMAmwawJFtbJ5",
  "key12": "QxaufzUPZfWhiNWbpFWsb9c4PgkfisUKJWHRgk9eN9gphrEZ1mcc6BnLTNLHDE4swBzFVsD4RbX5hQaLxCNpWAR",
  "key13": "Frq6tTahaJmxcWC9Lxxc7cfBwx5Px8CYYYJA2916ZvFhdDh3HnNqnMTFaYchQ6vBiPq3v2vwR5M9KtWpcXVoxAP",
  "key14": "4Ja9oDRYrEgVuVQy927TvAkQwZezcpNVDMGgx2C1s3hbVGw6CB5RqkzouWs3FfceRUy32hLE4zs8TTFyhmkTinNM",
  "key15": "58AokfJLGDAWEEHxmA4nkKmgGyfJRomBT3cQqaXZQh6avn755h6bteRVdTq7rv8ZnpDiBUsTGF8nUKT6KEA7sggb",
  "key16": "2ztkxJzKr8hHD5s7TcdJ6didkLd1acUGBWo2VqB5vvs33GG6RHwcDwPa2a78gTgcnGF3zKMHu8Jkijf9Qv7vCdV4",
  "key17": "2s4GDKpKKeLWnXYJ2gFrY5zHYTSv3XJsSTkzurwiaM8xGD7cbZuFa85U36mpKmXxi4x4LQrWZWF4WEXBBLGMDAe2",
  "key18": "3pbgVc97yTvdYLsGk2iPvUczg4dyYccAx7gCCmLei8dgBok1MiB66Vp7ZuLAffDKKNvDxwAdBM517KqhQYMzXNDU",
  "key19": "62mpR4qdfQZ9TqycXFzdG4D25biWMGc7yA5mGCc3vpRvcUfZJS85AoQwrBnLQ4KV2zHMpy3kcP8z2ombTAjdxSxP",
  "key20": "55XP1BFzBTkn4qwpQr6Qa6Qkbp11PS72EVhy843Qwif9R5dxbLtcobcLY3zZAfcxLEdRNSDG8X8rkD32dJxheYbU",
  "key21": "3cEY4uVKsNsiFxi3CzaMASecBoD76NkYNoeFnLRUpmRALZ7sy9bW8xCcB8bCJDna1t6j1esQ5qQXw4yuWmwcEFbS",
  "key22": "4aMuZPMHBZf8tofbsLma8TrZoMZfZS3doKLS8mwXwXHKcgiMBk6LaGVmeV42NRZbXj7FoNomSWC7PJBGmKLETM57",
  "key23": "g2Eafx3HgXBtr9yggnPzQs2tYMUjv1S2e8DPsHHUqeAaTn5vi8cfooTbknnKNv2yhvWTBFY3Mu4PxEAhi485Cb9",
  "key24": "3JRC9erRBn4giDBHAernbav6whhfxCEcjtsWD1qWNfLEaEb1uwhYtRh3AwrmyU8SKkfxB5DzaZwB275kC6X5Etcy",
  "key25": "59aqonAWF1Q9WCB993Yy8Bp1k1ZuVwQ5BFK5vFhikr9WvpF7yyg7DcsEQCmLFgoYGApVgwuJsTXtcf4ypuyBa7bw",
  "key26": "2ydxuVMiDNJUZw4HZU47vRQecdAkwYdDeUXv2BfunLSGVchzhE17wf42fFPeujy4zhFgdr8fwNUob5mxfoVLc7pj",
  "key27": "24xEEyPGh3aBBYxuNnMkKX6d4HUVzA4dXTrnRLB1s7RXDDyEwgSfCsD5d49SPUKS7BNukwywnYY421UG9iL6QkyN",
  "key28": "gsgCHzdk2CHeeU3upxRaM6pi96bFYeeYicKqCmDVHmxVih6tZhZ9x7xmz1esHwedvSa7h7r6PNwrMxY9gCqjJvT",
  "key29": "3zmY3GuNNBxNvVYviJhhdoDYDezGYiWGBxW4YQ1X4b5M2x9C3prADDvx8FaNZuf2ZW4e8h2pyoLetMbBrkykWCyW",
  "key30": "4itNSQcaBj4TkLXmVaEANKZu64mYYkEH1dMxikEkrtM54BVCcNhSkU5J8ZJ9LS8JWjk1qSiZcCryMEKmZN1sv2Qu",
  "key31": "4a8GeuyRqQq4mZRU8EXRZ8exnxSd1hVEfcRR1SsrMd8HWqSKhNaj9n8bHr8kkr1cYStQ466HeHHx1yJrpSSNRSqz",
  "key32": "4UqRtnj2wayiT8YHTkCdvEopE12J8EvonQtQ7XVkVc4cnMCJnzRqWUoHssBq6LfizgyruMM7W8CvhshBk4LAftbL",
  "key33": "5YPfRK2V96mhVVfsWV6c9qXSWXuFb4TtrLLX7yT5B494958je3kfDYkb8Y14PdskoKbGjhZQtp296SKPGbFpH63u",
  "key34": "j5dBAbM3oBagffezEpdFEjy9YPZ2ghQcWqaM3hKif7fssDMrkAUCDWRyUgak1K9ToCRL1wU7YPdxDxCYFr4FhC8",
  "key35": "3BPc3mFbfMFY8eHCojrzGGNMfuuDr9ukEo5U7xe8tv3LdXhTsTm8GeG5Ath8hFiD2kGV7MKuywX2dC84YfNUo3aR",
  "key36": "5nn5DJ2atzoLV1Sq8JNE8fty2gtti7avQEemCtBdeaT8xdZYZvjTju1MJJ9DLBB664aJG2JMqgwirMQK3xkJJkTK",
  "key37": "5c3X5gQFrv9dQoreuL93JRcFpFrjnsTaD4MEHfbQdhFD6sTiuM6yojtfRyVyo24RL7CBbK2bTfKbo19ZVUx4dr1j",
  "key38": "3fj8nWZ7bxE5yXLz8zSMW1ZFjGzRGMZa6R2U72urGfPi9PP9QZYNsN9rSWSgi8jGyBYLBEoX94N32Fxb3ePRZsut",
  "key39": "5bRRURS52HcJVAMRVqEn9mP7uLf6Jai228jDrjC92Ea7X9CeoogVcQvxFxPXokTYg8YCSFMxsf95YTc5X1Tvyjjf",
  "key40": "3oeKdf3kpk6jxma7Be7D8pmuCWoWc4AYd8b4An3hSh6ZZyH6QLxF1myHzGo7ZqW5cH7e1V6bqL68ydZAbckpTep5"
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
