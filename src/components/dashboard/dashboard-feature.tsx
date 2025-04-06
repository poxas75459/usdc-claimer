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
    "3KvrT59mjRTxDwRApv8CgCywywRrEAjb2WgC87hQGGior6hMj9jPGkGvuNqyptK6PJTGsm6rcvXPiAU4sLTZsfA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5sWQCnujYknxkb2qPPNauCGFy661wCYAM9By6FCmSNJ9iSd1yqBtr1qVgdx5sSDAyapX2jc9QgowAJmUo34nxG",
  "key1": "mFjnqVEnT5eRzngAxJF8611Hjw2uG6pYTLALXJLX1NfVcoXFRyYLnaBpUvzNxDYUgRQmJ1ob8C1QXgKusiWnBTa",
  "key2": "3LngTRcLo282gn8BUqXpCVmwURBFhy1hijB2T8qY2WA6tpXBDyvA6q7Fr6vADwoVBdJiy55vjcAdByDTA8cce3if",
  "key3": "5yTDr5xT8qA8SkMJJUnKbm211dCbnGnRFHWJmu8jEKUQocwi6JdezY7hER27SGhYRFXs17KGwpFPqdthCsgr1zS1",
  "key4": "3jPXd2JLwjrknpR3tSf7pCEcvc6ioh8GMzNeKWT3U1K8UsgmYjFGMaViMeMSwXWxZSPqZmz9KazufTTqRYSwNehT",
  "key5": "pWCX6Ea7b6fxwUvgLTTqBVjvK8MowLA9e9EkZZ5NEszabearzWEmPy6x1wvdjrhV8ahKx8J9QNwmw4tAWzTh9C1",
  "key6": "4CeR6mSmC2uZgh48Pfpc3QB7XSGSRhQXtgGgUcx7P36yAPpkxLzB3aqky9RdGsu6tJWCTr3PnZDdbL3VTxSeJtMT",
  "key7": "2KytFg7NiP43HsYDke2MBKvZdgwF2e5DYyT86MGr8BaFvwASbr48jbBiJJZfGy85YpYYFcr1g5WApEX6BrtVdBhH",
  "key8": "3X6dCogcHP1exkt8XXMYxRw7Pr6LLiy42sAuHu51ULwcj1ZLnVJ2MLNtYPcJ4U17UdvRY2pgmLAgMemyNYAkyGvD",
  "key9": "2BFDtG7CWSaRfbYo5FNi3XqLFt4vJxH5FdwK6jarzaAJrg1udkYUi769mZuo6xerogC9HP2FZ947PYsxaqbkKTqw",
  "key10": "4WoV9UEx7poY2C2fdqv1NqytfGnwdLoQNz95kBRdQH8PixcCy87LeWEYh7TXEfGHvivvJf8pPWfJmiUKLn8URAGW",
  "key11": "5aW3NRTVg8RKcTud53FnCh9wjKa68MstG1eiaMf2Z9QiocqNfp2pgxAzqDtP3Xz9YiAaHRwTzgPKU1CpnKPaa3B5",
  "key12": "4v9W1qxdgW6YZdyDkHmJEpTm9PAaGnNMdxHv5YK9ujzhXQyAWAVbAQhcoMAuAp9qgnRsj4v99C6E3hVvcYDdjn4A",
  "key13": "3MBv8g8c6wXNV8UAW3S126HBcu8mQsZSec3Sr5erFm4usWMHW5w5Mz9naAVbZSsFahAkZVyNdHVB1N5TEJ5jXtXk",
  "key14": "5UZ5j8WqvM1zMVAgiG8J2iFyG5shbnHbJWLUnMsBiyoUd8Y3Gp4qgePgFWe7dGQMrWxjy4YP44DwvKQjgTc15g1n",
  "key15": "5FpULuTBeGpdGuTK2GM5U6q14sgtuABUJhXryw3NYp1FxS3b67edW46RsSQW2CByY32QBRMa9bjAxA79z39nAe5U",
  "key16": "2fzzQNniubAqviy6QccyN8NuAMrzTsb92YHPzLsvTVMZTaNsYtj5S2LjwrX9vmJqXSzWpR9kjwggRynsm5Rtbw2T",
  "key17": "2Q6e9S61Bb5wac6HQiB78SxJE2jG7mQcYZyKHMfDUDcttkqRhbVvpFqKck7cePHrRNktKmCEi7hxZcZu57e4Vtcw",
  "key18": "TpLPYao71dydDxiDVeNgQyGoay1C9jYPtDS2tigvV8kHkffmEHs1mkVksxoEVQhUQDDViNPGxfDLDnMEVY5DzWu",
  "key19": "5861syPq7fq1qqLXS9Tk3e2ng5ED37EWnsUN3x6etsBPjJyWUiSJwAcnQTdGbx2LGNq9YGNuPd1UJKr89oBMsGtU",
  "key20": "iK3PNAH7vnTVZqfRPybD95W7xLSwQ2XQq3RjSpGyg3oCSPQ3vycSPWrBYaA4SU3rAADari4xSeRYYz8NbUXBY3k",
  "key21": "MdtVUJe76gH5yJ2EDjQ6ivafnj3UMPehf7MR5qkD8fAakeUrv7XWGk8TzBcM6oFqsE7DuuPHi6gitExxNxv8cuT",
  "key22": "Yade3QrPgNGgDkRGswqsndc6qgp18B8MybmD2Md6AD5nbhV7Nya7npjaPz5pgYibYpPCQvN9XyuyfEa7eetL6PG",
  "key23": "3ZjVWdNk6wMmijWcZVbtcFJvT4Ld3nig8n9CGWePNRPV3k1hdDvSjAmhxUixJJWFJt2b9XuciYCNUSPKhEFusMkS",
  "key24": "5UGAnbRaAmMsULVJu5k4F3kR733SVFGnvE4h28CV5Sz18VKqWm39trRod7B6Mtjz2p716CP7HEaRmR5LBF17Z5z",
  "key25": "3L1y1ctXaGfVKvbfwsmGtAwweGt2fPtbvMaiCuuAjWiyoZ7J7D7Fu5GQoFPMUMTgQBudMRPpJYc31U6qNURP32t3",
  "key26": "3Rm8bHg6qQPFggEARPGsKs2eosLM3ezBk9VEomDizeoQ7L2Vvf77AQjwTqb9QaTwZGsLszKqAopgnVam5jpiKT6W",
  "key27": "4qu7Qpq2ZB7FbLQ6PKn57pHx7bUVac4dpU5oD9DGzUSByqiHAF7itiZG2JevdPXAUbZqerzmXi9sCe1uf52DDXCV",
  "key28": "3RV8HtEpWRJdUC43yzvbcYBZQrspgsJUFrWQ7ucoHrP9D5ymrm3h5sxYUwTdsW4Lv277iKofzKznMgJ7kgdL1B3p",
  "key29": "2BG45uzZDcXewsaG26dnoZ1iL5T2aZ7ngTWbHuaZYVdPwkTn5rrCLrSKkWYECNQ9GE9i7iVmVCixSUKPg6K7d54R",
  "key30": "5NQSPjkB11hu9W6zhqxEu6DhCoj5Crcp1HJpvmSrQLYqZ3KfYeGUVNUx145BGRW8QHb6FhcaEHiCkoXjgzRZTBRK",
  "key31": "4RXWb1rghZMsbkVKFkqWc6DN6WCsXvAbikrKsnk5f1aWtPtMqMRhHbV6W58jD5XTwgscJYdn3sRGwDfdWF8aowvY",
  "key32": "4eqVvmdwap8fbzev5vbx5L9FnZ5CXJbTB5fWyjyA1RYWZ69o7j8ZMEmFunpx5Xfeo6f3r8P47x3DMNpKeCZixav",
  "key33": "2PoM7XTSk9qffmKS76PypW7BQ3EzN5HXEzKSK91j4Tj84hZbD5gDtTrowZUdgUinnTKGf6VegQqGc7kLFSnDPnkd",
  "key34": "59k1JKo12uTMCTejggaZnRxcxgarypK6YUmTq6MPvjTxCpUyCs4Y8cVuaGkpet4cDsKZbyywdRKoj5zm3iE7jeXC",
  "key35": "53QUzuXfegjBaxTqEHtG9QwFQY88chbCk7AeFQR52sfvPNeHZb7ehrjDbM2Lx7dRcqxSs4wWTcsszPjpbhLqeQzQ"
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
