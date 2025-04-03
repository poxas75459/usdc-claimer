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
    "5B9hYBtnHRfqvSJwoKTnuGKPAbDvnafwR9gtcyZmsnXFxqnLgbhQs7yFWj9rmMzRz2LnRKrK4j7zzucNjEDP5KMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrC16vSGbfWYxH9LxEJQYmfqUBsc8ewKowSFWe2K23rbPK2gQiPSF3cVjrdxZqa21AKFkoZE2wd3JgsTUMwKNuU",
  "key1": "s2B2LoPVY1J5iaTDPEbfYnqJh5y3pbfxmrZ1oju6MiKM1p3Q5QN3YsZ1VZNhQeosfeXKoje8pXVMvV4fhbC8N77",
  "key2": "225Jekp5GaC2jbtSjfAoEtWrz6kYHs69k2QabiQeBCmmAFjWpqAS8XGqU7J9cj6Ba14hauXBuVSvErkSEpg4sWXc",
  "key3": "2t3DfHuBvsdGcHDgtNUKHxE8V555kmEQKxoi1dpfGhSxcf3GjiJA5asempRJqEdJnq5JADEo4nzoR7VDsyyx5f9b",
  "key4": "63MF43yHkdeuCxWaNKDsVAbkBz6pRPwnHPrE6gLvEXhFPN4aues246VRA81gUxh2pQA3HcaYkiY7MS6KjmiuEhe4",
  "key5": "whdQG1YNCoFH6P6bp4LHpUJ4GU7N2Kk9tg7hzAY87zr6WVAhKiibwf536Rx2gbWQmzw1FD253kvpcLSqTKrRcEd",
  "key6": "2RyVPuTjH2sDn2sv1xpvkMK5rWRtxXef3xm8RWbDDYdyHAx2j1cS9uHaorDmXcAFj2N5CPBCA54rqAwTGb9ttBmB",
  "key7": "2wiUP8CB4DubyZ2YGxxdxAEz8nsaSzE3BJrX5erG2PPw24fZPXFhxuGf6i4t9tnmY825TPrdSwUAjoHZJnmRHCj4",
  "key8": "2ppfqnKXkFMjedZKpP6LtTKBbTc8jn4pcBSQnEAdNtCW4oQVWrv2kYt2w4Nxo6be9BS9ygK6U1nQRt2ezJLBaRxB",
  "key9": "oXtvRw5tjkbJk417j9a2woPcRMMKywSQ5FW4wdkhE4CECGstjqsduuae6x3cCw5stjsPVwXTkxaJk2Sqbt2Mreb",
  "key10": "5S4GgMoVABNLsTMP2ELyLkF4xxDYgAxuwPdk7jtDBHmaER6TpF4AR1EcauEub3VWFjg3LkRovFxF4uaTRXKwGC2r",
  "key11": "4PXoPWK8pgLu1P2enoHZrzruLTJyo6PwZG4zHxuGHwyEVHk6sj2CxWxpJJuphryq4wFZVzcTqTLRHtciwRFooZJ8",
  "key12": "5WseEqjWQeccDFgdA2ydXTgZDrck6SfagLKb2AohJx98hRufPPq33EkQ5MWCh7X3a7sZcHQ9CspaYRXVfeXSDkF",
  "key13": "5XjqUwd2iw5pnSeMC6qXF7TgCzUdueyXeXyoC8uPoenat691yr93qCzJPR7gYSJbutPFdj3gYwXCML2CFeHVBoZ7",
  "key14": "4wNFzdiVP6CiGoUwPKwnDHBazJB9Rwu3QjZ5Vwkkjt6qt8sk1gdZNnSdUfVdqK7DjrTXNr2aZSGkx95JRpR8NZB6",
  "key15": "jJ5MVXjVhSCmjbrJiFwwMYSq36oW3LsA8qoU6KsZxeqMcQffvdE6X7RgCbTr4wPVc5oNU8teBFxBmyUA7QPoEtq",
  "key16": "4UbqxEo7WGHGzNd8uBFJkMaLgWLj43sB958mmSep18WESYw1gTM3whEZUbJXpuCigBMqpFN8C1yUy4QyE5AjY8q5",
  "key17": "4LzPPXoGx367Rs7F5vLJWyb6yaEoyvLQ14e9NEd52ovuPcBztEfmZMAQaYQ2kQUHSgkJqu7FLAj62PwvLrTzTf8D",
  "key18": "65sjagx5z8xP9UR5mr3qigzoRFwgXquFBJAVHD75V9D82TFrMVakSv22JNGaNyeJ1YSQrhxfxDki5hg5H3ETfLnu",
  "key19": "5rSEQntPAWntz8A11Wp38KRvrZVpnUs18psg7ef6aSWanzfAvEb7s9Qg8JhA6zKhiY1UrsK1mCgX6whikfawnQTk",
  "key20": "yu7kEP46KhCBpjbNXYUhRf4CrAzgwkMjjJNH9yDQxadTc3uM4f6nJ7hAP29sp3YQDFTfVJTjWp2kKXTS7wpG2yE",
  "key21": "2yyujCKqy8JkUj1KgGNUUYmn5pH1XbbL4qydTLHuvfVY5iPfAWAZSCLoat6kLTi8UN13WA5GioQJ4y3vHfW4VyoR",
  "key22": "2uMrHHyqb639QPpCtde7LexLT7R7pmob6NUxQbQnkbxc4Styk86GFa3ZH2CGtw7FPW6Bo4vRcQDHLomrvG8RXYP8",
  "key23": "4AQJNbXUVeZoQ6YhQtSw141R5jZXUTQsfVuFrGHZwcRGSyAHYcU2CPNxfqeMip3CKdCJCFgRFt9abeH4M18aSvaC",
  "key24": "55dkXm9zrpS58dTgxvkT1GAVficJDUCmGT3ydU9cjSPSVHS1cv4SZEnSW78cZHMB9d9FFLCTXXoGog5tR8QKaWzm",
  "key25": "TqQp1Jx5V6S22dCtmFqqjKcVyVbfMUoncZr4iRwt4RbKPeQuiLMMwoQNMK5Hpqu3CA1vvKyie6UFCRxRJfhPJ5G",
  "key26": "3rQXxHB4NDkfUgV8XfLSFPqEYSngav5Rnc9AyFkPcN753QqMai8Q3TNUfKgVwBLjjiqtEWc6wn6493iGu39VVe4D",
  "key27": "2A3kdge7scwKEc3haeHmHNRGQPE3Q3D6n4wng5iksidCyH5V9DRGpCoA7TQujoDMVpUVTNpvmzvbMn1a5bKrXpFJ",
  "key28": "4GQHFwKg1ATN9Vxh3ysKnXKiwfJhCYNNsJ6GrALPTToyU7dgeUcWLbnmaZKFY6P8pXqsrNRCHaMgVuGswzM2WAC1",
  "key29": "8cncyZzrbSSkGiRwDcLJJ2rvFBLb6kzK6fh5rv5AYxSh9CEm757qNgtoew92S9madj7ZUeTMnMMGDyWK1dfqHrK",
  "key30": "2PLbaomsmf9dCSYDViBahq98svyxVqPXfq6EnZVqM7g7DVuonLCov6xBFzTponsy2zEWmTaVC6qDT7HkpBV1wver",
  "key31": "3aHHT9XbbQDUFAAGAx2cYqyvtqNz8mnkV4zNMPu8dzzWHsq5a3gHs1aR6xNWcrjUKtxn9Gvsqn7X1oGzHNoR6AHx",
  "key32": "55gJ4VKemCVh5so5GovrCaWjEM9WmRijw4ymbScqVu3v5HzWNLjYBK2e18mHa9JFttdxKVi1M5uC8peSPgwEQWC5",
  "key33": "5fpHfEGq4jHJPBFdwRkuXwxoMW32CT9vHRaczyGimc5RFJowbBbm8NyfMSAE4UqCpkmY3NTHB7V3uWXhbvv77kJ2",
  "key34": "1vB23Efc6BjuiwFfekquc9SDrtZXWDx3a3RotjwhnuSbQNwmJmUKAkiqdRkAfDgWFASThfXQFZib81XcBFBQgoj",
  "key35": "4M1AbuWBoV62cew3iSdHMiedjeVdWoxDoqZdtwbhXywbpKZy7y1d2ad7MKTKeHpa35BNn8KbRnpBHzXNocFBjkon",
  "key36": "fZEpraD4dm28MgoXWjTyjnnAU6v4BMeZmhKdT1U9KFUh5pKUVQVwM6gDzoiovG3yJPmCZqusx7YQD6UDPicsXv6",
  "key37": "4mwqcqdZsyaUTSsickbS8SnkLwxbTgZ6zy7HGmzTFYVT5BLYHwZjZyE1nxNgJvTCKNNseSQDuyw2xr9o8GUJryAU",
  "key38": "4qgbwXhVrcYmYEGw7AxpxdWXNETG9pMwagyDApya8gUWikBoUSoPusvKfb6GC3VCTYv5MiS8UoNvAWP9QC9eNzCc",
  "key39": "5rkEqpe93Q2UmNPkug4fvfMpwtPZ2tYZcowvpZ4Jeqz4gP5wHMBz2mC4SjMwc2L3B5fqBLUbC8htmFrQakSGeupW"
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
