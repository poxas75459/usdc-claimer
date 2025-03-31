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
    "3SJw4uLmR81BYhEwY4gTAxC5XNMehJVpQVKzeadTuFtV4hnosa3WWZrxxaDwjtsV5YEJPwQdxvSFffHVGtNxxm9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zLQZ4jNtQ6aeUiRDZW4W22eBbez5KexDHv8pDLMq9EGpEQR2rvdzYhF644Jskg82M9TK51RamUwiq2oEkpDBgj1",
  "key1": "3RH5Ffj3feaTudHRFMUhzvy8wNpXwFGGpbavfJ8mH2JjxBeLpCWKMa3mLigqaHXU9cgDqu9GQQkw14diKuT1jYrT",
  "key2": "ZVVR21qJdfXbSN4m1KWJaAnJ1kdMi4AtfUH61a4LzBU8ifSnePYGgQMhnLr8QjaZ4qA8u1AnFCyBJ3nX5fVxmEQ",
  "key3": "rmswtWViwiCeoDGNwRxviUFXicS2oMw1BTsBgtTtzJgE4NKqdrzAToJBqQTX2oBVfeCmu6CBdofie4Ytq72mXHp",
  "key4": "5K8uYLfTCyF1DoboS3GQsCLBk9fgU1tSHxu7pbhkEwo66Vdt769bY3M8Q4wySWPTtLLy7dZFxwgrwxTfZonCi4T",
  "key5": "64WbpTUoBrs2fkQXGDtfB6oQbzHzxb2rN1QPRXmeHf1CKKKqd7HjRdsNCgS5Ud2s3dDhCemdz8vwMbkr1G76SFdg",
  "key6": "29GgPrFhKoqsJJCeZjBmRXpd17f3WCRWBiU8B54t7BBon4N9BjgCfZ2B53TKuRzdaxScpdHMRkmktEokpk4YjdA2",
  "key7": "3tgNeuaUx1vaFADkQdo4oQXYb55nqB3w5Tx16JkPXmDMNp636QT6JKM76xmyKiLNuRrEyV1c5EMZDp1efEevRvyR",
  "key8": "4ovzFzvUqpM9ztzLuKvYKiJV7cwVFbSntUCpyWS7vzzf3CsU9LWgUFdm3kLXNMfZ6qrjrKsEbm8DsUPQeWuaUPkx",
  "key9": "5kMmY74pF71jSo3wo6Fmtw73CFnLgYaRPNqsX7KEegUuSFxsKexP3i37x4Cj6JCXXhQwRzxgrMmuTq9H8ZBLnT9C",
  "key10": "5VT3sXRPRKX9rZv1tANkBLd5nQP3dhRTFzZpfVZc793Hc58Nk4U46A4HX8aLqiRppZo1yo1zdXVjmqSCztSHSaeS",
  "key11": "4yN6T8Z3fvHMtv4htfiV7aRWrGFHez7vbKMr138FVAS2CZgyG4QrXuJZ13C2VXV9wXhLxzcf9mgBjGSa1wwnYuhJ",
  "key12": "5L6xxW3vdJDjhEXDpsZ3nT1otec1jjNQeZ7P33ZMyVMTsmB8QYdB1uL58Sxwp9HRg8chgrVvEF8zKkKh7RKN4KqY",
  "key13": "KpUtqWeHV6qWZqLmeEaw9Zm5THAi3uw5wok2caADiicikhyzoxQtPbJjgQavCeRw6wuew6dxbsg6iXhVKbXxbuk",
  "key14": "3ZrzP1FmZh9tu37jhJjp2b6JRgmKuEqmSYkkwB1efzkExc19yS28Ud5jQkBtHGpHJ7fB1drawfKabPuQRoQuGcU7",
  "key15": "3PnMZmsfvC2ZKMPnnYiHZjVM7fcjfNXN3vvSsXXdSGumMr6mbi2monGT7s6hFuduMjU5gxMtss2y2AgEJoxP4moS",
  "key16": "4H7oeaTjWQSntFnqBYzG6161MhZWGoJWnfEX9Q8mqqyxgSZ65TmXUVgeFCMd6poC8VB5BNBDG6Zgq7Qy9oNNaTN9",
  "key17": "2M6Ss4LeYc5X7byhPncRdRx6cwDAsH7r7irSgpyE1LiwFcKxfVtTCNn29wfvRHSUwL7xmQJyBa43kTJZVCjvSEUw",
  "key18": "5iaLUUeLUyvidFmy1vvTEkKsgsADDuBVb3Z8x5bUzAjFtkvTnQKKrrSvRJXYqMAMmdmY2fkepUA5rLiQsfz64DxG",
  "key19": "3gV6ZuYYyJatRT3mBNVpm9WBASeX8zzAvXRDt9ECmu68PmEgXec8pDmxRxAQX97vstLqzh7i1Nfq1upRpqNS4CJP",
  "key20": "2L7Vw2p3UGsAMa9XKzFxH75HxyFuaYWQtpZFwnzswAQJyacTPesQdTn2uoiQNnDXpStuFAtrFJbBLJdL8fVFTgQm",
  "key21": "3CaJDuveqwHrvE6kARq7KDpk1a75Prqm2Shgibm1m5Fp9AKquLUCbHBx6vkSaQL4PonrcHF3HA965SfA9XdGFWHZ",
  "key22": "3T9uZZWnHWihX1P5SbShT6E9N51jc2gJ3uywqFBY2dUEKg1VeVRrfLNM8gUgGDcPH8UE5gt65ndsbf8LRyugpGfo",
  "key23": "25sbhMhwSru6GboDeYH2vHSnxFGQnG7q7fFmHy4bL2YAVPq2DnGM3rsrYZr8wAZDxF6bpMbJ24XwNuUFUk6HdDzA",
  "key24": "38yU6PUv8saqaXpsNt9brxAdjBGdW62sPvkavZJfGwfEs73FbRWr33iSdyorBJ6CvyZgRRWmD7yJBVj9LnvRqxty",
  "key25": "us4BypnA5BwpiSriGAoQ3qsQ8nSLYCYvRs7RvEXpHfJZYmz64ovWLGfDUJ3kV3f8R8UYX15tkzMdLMxfnw88os7",
  "key26": "DSoRHboDiyF8mtZ3axWa6QpCNDPwCmQe9mofYPzBrSgB7i2kd5iqQSEYarWUkd8VjpFKMFe4JdiQKE9QbCGEtAE",
  "key27": "3WcjMwG6Nsh33jbnxtQD8WQXGAEsAYHf4976wgSf6FWJG5jYNzCPFumvwyAmnp4k44f2bFMeFRwUApSzCR6uAUST",
  "key28": "4FGxF9FvB1mT6rmGrdKKpMAJvUruiYy9YBbAiFW2bq2bLAV132mjTtjB37z8ThgpzG1mjeVXAAnXNsLvo5uprQAh",
  "key29": "46v6cYMBoCLdqCdyGoCpKcz8D3tfYSEHHCs2oVSXyAykMCSAkmWDj5r1tnWudvfiX6WbEtEbVtQdaCqq688hVhzR",
  "key30": "3duSUQVvcaePZHWbHLiPZzThUJvdnx3voETv7qMx2X45ynndznFaGy2W6EJAbD6jbZ47pDuPUMk1rEf5wAELQDu8",
  "key31": "TQqu39kci5XmHgNEoxhYGmEmkkEANfjKdLt6GF4ZcCTUPmujYjQEidRuwW7hTKtafpdXyd2rPGkDRSg67TBQE7j",
  "key32": "652jWtkhryetCXq78juUfzzrdpLxxyrZUm4PH8VhyCnq3LMn4eyrxu8fE3nXmEgiQZ6ZgN3V2PRSpqskCWVqpypy",
  "key33": "2YhuFM1Vvxqhz6zH38i6DYsfU2XkuhwkhEsA6xY9Dv38wJ7DtPaVQbxF116JvEtSASHbgAzDZ4cXMD5YPz77J5QZ",
  "key34": "5iG62Mdb4mYKyZorMHENnPKWeENyzxPd4fn4gqMWAfksuwWFoxi8AyUnJDMWjLAJGQYr3uiHjWYPkidFGoiEvhhV",
  "key35": "2iPCzdTjYz38TPM4jTdihDPV3FPf5u7FRZucpqhCbyLFYiNEX1TwR1CeHYusiQH41GmBZezyeLkRRG9uRvHfVNir",
  "key36": "4SV5iyRwwzHY683SxEUdH54r9onXm1Gy7m4REdH7xAv8KcjZj5zMEkyFoqv2zNmDHSGvc4ZbzgVVByWwixBFhi4B",
  "key37": "5GEaX7UzP6MBmoToSeEvXVNibqd797y7LMmeATfe3vgNUR6feF6zquKP8QAPgT6QVTN1neW5yrRqbhJDBdgGM4Yp",
  "key38": "3Q3j7jkcnXUjcftdYeTHEAJ9SW5gYWw8FtN6cnARN74ErKg8ec9VfuPPufLaLo9HyoBqNmwmKFjzuyMRkdWavyH3",
  "key39": "5ESXS979k9drERNaBNoP7maoCD5PbcNC3vziZK8HwUsp9d3qFYNpe5hTThHZBd4ERSZXnUkscG61UjRuoNUPpNGC",
  "key40": "2UpU22q8t3fSKXM2xERDo2k7hFi8iDiNMKLgQ8uirHn77jA1dDDBskdUekmR6EcCKeVKrUWe4tmYkNGEvpULsYZU",
  "key41": "5WgYkz4ghW92chDZqAH7maEzJ6C9Mb1tLcQL1wrmdETSJxJRApsBfa3bxEwHr3SQxfMhLzt4AvAYq9zBx8eRXFwm",
  "key42": "2q1fYtFRuuby3UkNk2nbspJKAztqWkifruDyjfvopWZMfk3Jt4Q9uwKgWjDpqQxdbY3SaGQG2weMnvVFcCcWa7W5",
  "key43": "3v9H8zJbWfomqqAvrQkqp44QNa6nKJb2yLgXE32Q6jufm7t3BSa9ogyn82qPNZiqNWLCv8BnzbGFHUuLyYpPcr9c",
  "key44": "4FyicY2UNVUm3zjMQ1JCx4gCmavSWXEHciNa2QDxkVy3w747nLz8esXJqVknLKJTafNkC7fzdHBrw3oWcS13Nzt4",
  "key45": "3yjcrvqPpKsWk7wnw1Z7EZc9XEND3d5YEJgWEK7xK42isoMXcu9Qjm4f7yAH67TDMkphZRPgTBL4hcq6TPersEWg",
  "key46": "wro2vYe7eRq36hyA5N4wvksMw2JgX4Drc3ny8SZViXQHgE3nPqKumwAgHP4n3bx596iDzHZyQAnEck6zEUXS4SV",
  "key47": "4oEEeyrctwNWSTK54vC8wRL8oe2jhLV6qaPqKHjwap6H66UQSDKLZPhx9b1Pr4B66588TSqrsTwMeGdcUUhd3X4S"
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
