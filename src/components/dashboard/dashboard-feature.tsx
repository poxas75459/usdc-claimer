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
    "5Y5Bbeb2kYQBhWjGcSo6NJQ6Sk2Zz5TeNjTvtuZ8Q68y5og2Zffz5Tfjb3X3y76bxX3Hv6EWm9LNXLBgNDK8tUFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ye9jZwQGtTy5CMm7MvUH8f8n3TLfwb7RM7f5E4HxN9cPXVrXwQPjVcRcUdckWZRJPp549DGEMAoEg4SGVJVZqPb",
  "key1": "2GgzYvugeXVoLSRCeVqCCk7WKusH1UNNXY9y22CcxhPk642qy4AkMjWpQqFz7WvwfG11AcrnKugk8cy9BiEfCk1e",
  "key2": "3RSJCsMe9YUSjQ4yKWvyLURanSy7pTFFcu9B7xV4ubsPUZ3A9JUhkKmGeACkcNRWeQpTnUdcT9pPvwGjUpnMKHBp",
  "key3": "3oWX2jzJBEBxwELvXMihbR2uspnDZtr6iGyd2kUHVhpXRK92M9K5UwLZ9ssxkFtSme4Mx42HPXmNRV6kuX3ysdQG",
  "key4": "5Q2xfjL4hegYwePZB1CUYtV3Qd5mP4irgDnk83i6kHtqAjQG535kLLj5YrL9xoNnt5hXKm9vcUGd3AcCpCqppHjc",
  "key5": "4Ti26Lc7raoavBP3kJPjq7LqeAhGZwjG68H6g2bAf7yBetJ7L1mmVqW7GzQR49qJyGZKJncHHbydgnZvjepvHQrY",
  "key6": "5w1BcQAXu4moCig7CRBJcQPuXpYB5YhR85ar7gb7sNh1nxuLqyYCQgCpR8pHt7A122vJ9gM2TvtUcz9QaUPXvTdh",
  "key7": "4X2m6Bva2ZBN9Tp9TZbQfqY4eXxPN3usS3fFN1t9w7XujoPCSDWe1oBh1fAEoeygreuszTu11ETWCeT6ieizqnek",
  "key8": "3SFQNmpmzZmDWPX5GyF3P93MtutwodMhPhPbZ9Dj5X1c85ZAyZ9AMbwsAzayjft5eA7B4kuLsTxX4QzVFuh8b5MZ",
  "key9": "35vto67ZiF9zgJgwzmVdeaYyK1F9dx5J1RnMj1VRAmMphpFtM8vRo92QPyDDUWxTMhjPzwCWLJuKeVvKqqvb3nZ5",
  "key10": "sPgkJFxA6RcVcJdPigtKTSpSyCE7QrSzUQnvK8x5cWjZbUuz5E82BxiMvW8cyRubyN1JvRWoNF1sUeV5KLcz48f",
  "key11": "4KYrRMpYzNvKpstb3sEmzjC3MY8PSXyLiQN1yRGhaRP19VqQm2usHfiwAnmsBKbjiGAN2JLTK2odUTnMA56zMMt2",
  "key12": "3iE13bcPmH2XtoeQDhbGVJMh39iZNtfmUEimBHS2fUhwfcziM3w1pgV41vPSbduopq54oNE121UgPe16jgTc3Qjo",
  "key13": "5FwBFt2kAkAG5JtR93fm6mp13vv2D7q9DdDRURRiiY8UFSEtnePKcQuXvL2qNAfEhf9st2v5jXgPK4GaoycyCNAA",
  "key14": "4sWRC9DxMBPJ24N2938Bef3dUpverZPP3EapWYJuAn7b7Mvc2h9CoNtsZKn5YXSQda14diHEbE78eRmMEUHJZD3h",
  "key15": "28SS9VCooY7tfCmMqrFKs72Fj5Un4VuY5QhxM2xmWej5R7iWp7xTri5QqiUFEmWgEoXWorWTqjHEWV1dEv2odokp",
  "key16": "QRstjPBF1DzvAoZVDj8azgyK66yZQSEiVfWQs2ZYi3yJJj4c68YNzfoA8anSwWVvNiXfCpCS6vJfnLtnWtcFwnT",
  "key17": "4YJuy47sCBydS5jxsefQ36boX9rsUx7NQZbBaPqsHQfhkp5rmbsaLzn5EXYjyt9BVC9sq6HrAfLaVA6L33wGHium",
  "key18": "3JRMhBe9tHNbSc647i2yrkzWP79F9TgFLBXyYZGyHtpLcKJGDjQPvEix1y29wS1gviEtypWhJ11o8RCTEyii3LNk",
  "key19": "3JtFeXbYxjjGxvV6MpmHZZ9jLA25Euu45ATMXrcKN9zW37ou82DmxJ4C5Xt3K8UJijnDLnUj9Jh2uC6TDNAUVBzg",
  "key20": "UuoayEtS4QWwAr2SaYRsf5tp2LEDiaYcYfJWJV5d6xkVsF9gPqZNmvksneuTRSSKHLfGafMzwDN7gdoYyAZK1c4",
  "key21": "3yisNLWG2hHAL2K8M9TbAD61vTuzKANgr1WamWd4pGr7uqj27ytPQ2s5DJu9EY9MYHwsiNGCZfCyqJ8PMtXvx1QW",
  "key22": "2UkhfZEXxbxZyEGM5cWFKi81ZSJiM6AM3LeBQgUgyQHadGCer7WWEk2gLPqFQBESizFUmw3h1eaUqGLpJjRJF67X",
  "key23": "4j2vU1QKebtrVQpj3qqypebxECnaZjPx51bvdF9GyeNrtUoM89F2CDxNN7kws27TXw1RQ8ytTVTeVHD8k84see46",
  "key24": "3472tY34NUCo8VnFtT62BANxHGErUJNaWD5wasxJVHRbPvqQGyPY6dXnc7sW2HMdpap55tSoozBZ2XUCBTB6kGqQ",
  "key25": "67cb7JZYWrPrSXMFUdfSBUNpG7SevnMN1avC5cdjYBJBZhh1vYdobhPK4JNbNbZ7xK7kQL1GdvqMBvHBeMsk1Kgq",
  "key26": "5cVDjTaMdnaa6bQtaEtdNZKk1vVCLLGjW3vU9Lq2qtHZtM99Y4UBsGy5GvM9UcS21b3ia17WNAuBpsFE3U7Yx1Wv",
  "key27": "4yRpDf7p5ZFh44o4tKdxedrk9SuUdpSYDytL8sSwQsoCBpkeD4TTxmAggDHDFqC45ava7PJ6ouZYF6q8tjyLV5Gw",
  "key28": "21VpBxuFSyKXHq3xpcnyhy8GGjWmDNZSzuHLbhRwME9LiWNKsPXyy42hV2AjisVHKKPQtTMsF8gyDkd3XzWF3iJh",
  "key29": "2qYq2GA8WRTytQn4FU6h2g1w5Ee2SAC5fSNG4XswcxDUXJqaDTsnFGCjhhnCFpnVCyLs2yUYSAfTjzYaoH9KxRbV",
  "key30": "3aE2shzTJ4DsiCDAXugTgwaaLQXSpEW3fxdr8dbQzByHxyUKkDf65jC2xVksoeAjqdRMauB9YBaar7C7Tzcfj2v5",
  "key31": "2aANdGxmyQzrM1EYnc4Xw6Zct9LN2V78KoPCAKtfPozfSQSvyN5cKWEfTAtdD8z4FKLoBugy4QqKRo3mxTtPqq1b",
  "key32": "386ApQd8ZGNtNFhA5M8s18WYD9T6bGnwVQEQoVHe4HPj5udFoT1qjB7aNcLVc4DgHNBSF7ajhohzLwbArV7jkUu2",
  "key33": "4tTjPi2LB9YkpM8aebk2QDWMeA64Tw5KCwmQRvAeojKj4qCuLhzortFu3RA1fxDoyHKtKrkyQnx6XLDBhxwr1Y9m"
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
