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
    "4bw4TtNUKza5Qcq993x6LdfEyUTR3TgVCZgKyWykQnYzT2v4WCfnrbKhd46QfXfPr4w8NWPmAd8ST37VqFWZuhPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526qpynZXc82pXHpmAtwHSFWtCQKFGgzg8TjJjT3dnEaVjs6bw4FP6g818DSpxcG8NjMoabUEqpZc9MUGKFCGX6D",
  "key1": "2DjNP28kexMwVsTGVAWvyY4yLkkedUMdTgfdVczjC4vGkH7TG1hdnidC5pT4NrEmTrqgnYuDQRzrkdWY9AL87Eba",
  "key2": "2UMez1DfTE9qLBh1WEYSNV3dsJUrwH8zhEdhVPwxSnh2DUCuQRCZthCtpT5aMpEhxDbBEvFw7DA41TiHtLBMAUZ7",
  "key3": "35NWWzYA349PHBmUMkb1PCn356G4PhNjyBV3vmv7YfQQB9fEs5Csy3fLFPfB6R3USNVMtzvwyZJfydMUqPwUMatZ",
  "key4": "5Q67HDxpSPpDE39MYVVadCQaArarEqt5wUGyVTz6dRB3MvLbxnVwmSieoGxRsoxbNa9Czk6zrxeWux2MPhsVeXtZ",
  "key5": "2WxMYbjk9KS7KemsD2QRPdxRaCgvhywDYJbLt5HRLEd5PHT1n6a5avdkk7yFKnUnbJsPQeLKdopzZqzK9EXPdZ38",
  "key6": "2nbhrfwz4Cp29tHKC71wmxTPaTQSXTH2GaTgEA8qkpuBz7181HehauWruJGcCzvSDeQjZcTSLTdKEBF5dHPrAmmx",
  "key7": "5xTDS6JgJE7G52hT5Jm9Kn5pZV5xUxmhQMneq45basGTxKfkLYx84TPqpiDFtTHsBm4ZuLeRoWZvAhQAJthC58mQ",
  "key8": "2zrzWiYegFYt4ckp5HDD1ygjkt85JGWCJvi1ytowTTy3QbdKyveuB6zpBaE3xSZwYzkucC13Dx71hLJgeKKPa1hh",
  "key9": "5LCMHK1Pn57vVqrFJtpnQidiz5wro1ZmrdR5zh9nKKqkapjLQoEAxRKn664G2m7b5L65k2nNpiDFDqssLq7tYw47",
  "key10": "3UvJDADhuq8VUAsnvFvgMZqzZTxXWvVgeiMNkBVCphicvBHVFhYrhiYVDc7Ae6qTmVDed6uxQbxyab1i6dMvJ25T",
  "key11": "4ChsuZ9MJwNZRT6ZexjVbr4F4iBQyfiSo5S1Ecsu66EaMkVMiWWR5N6UeYV1aQvh66J9dnJXBNRGpQQrX1W2diVP",
  "key12": "xDtiRCNYKQArZjEirwscLLjEo8B1Vhg8424qyi1rwrsqngzh6mTeFEVz5jt2CQbiQbPu7ywgpj9FWryByHpKM1N",
  "key13": "5iZgBvVcFbJFEoGBWF7mXvkrqLSRhCaYbh1ithModLnfbUea6mPSSpqsKQ9JmJZfNd6WrWdmZ1fXwAEPEP4wGuck",
  "key14": "89yaHSCKe1v1wFQvWbxhYQSjGeF64oRASrkahBnM4N4hGdCJMexH5tmsEjxNZXjAFwYyrSEwJX5NXQpxi9wZL4U",
  "key15": "5wEWaYN3H9S8CE76ZxXDSGL2LR58ghpkhQaUsYHGFAF4e39kqMYDfiVCh8BjcDdUg6DpJndz8LusMyAzcbbMaEzL",
  "key16": "5P671tjDq7ZztCjcZoHSz4yLuWsvooAVD1qQ7uyNVnFKo4WyfNWmNxAndMpAbhjQw3m66KWm6CwnqBW5yAfapWpG",
  "key17": "2Bu1j3SS11QRNKFudWLEUeaVkuBLNnCi5cKS1JpjJG83D4zTtw7CzefrqtGBHWptjBzpLLB8SSFneuBLCBC8QS7Y",
  "key18": "4rUhSFxJ7bvySXSbhoHDiqM3fAKphokBKgvXu2B4VvRAJkAxjUraa6u4UnRrbs3Uep7utVXcxP1iL6Ug86Tcuonn",
  "key19": "2ekY3VNpHamTUyJeVJtgPLeKn7XrnZzV3U99vrygNyTisjzn6BEN2B2a7rpdU8mtQhxEnP7bLQc4XM3dT34Rvv6V",
  "key20": "2Cac3tNYyMbteZvsM7bXrxc7rKGQYFKP6kRaWdQsYDFr5ETVQRQThjMEjKE3sbnyW9FcqUtLKRYhfX5oPdwzqNYM",
  "key21": "2watWwQNMADU1xzqjvwxcQqpVvadLViT61R4VPxbncaM3gx15727PxaTRKXM88hptSkGmcyJLszkH8qz8aWAo91D",
  "key22": "Qg7oktrPRyhuJaEfpnVYA7cLQAwuukY8iQ19xbwmThUpqSDPgEFZFTmR5sgkDELdUiUEUfTNZQxr5S37ZzFskfJ",
  "key23": "5Thr99hFD43KBf2svGw7SH4DkyLbVoLRXevz9kFceHD4dZWXjxHgfeTZbxGNMkHePWY3Ltr3L7eech4bQxgMHcS5",
  "key24": "58E1FeoBghzVvn41BvsYUVoJLRVZyVEJfHvRN4KopSQdURrzrcpgPMpFQQkjGRP4VkjRtzbRzBi2aCT1oHjzKHBk",
  "key25": "4gARM8nGCQCxcQVr1pN5sVLzTu7aL8YpvyTNFCjEHe37mRrjxcPhpuB4h5FQa4oTuHRj9eKTBDtZAt3zH64EBc2P",
  "key26": "2XxzVM5Do5E1TpTziyhCwAwtnstAFfc1mdeX5ReJ66p4asQGkW62dFYBqVYDBc2kpejb3jUffvTfPStnfqvDP3GM",
  "key27": "AJoUzeAo2DQC9VuJMzUipV8dfQcredtWzpqCHxyAHUTZyAeyB2bkLxJvoZRpd7QDQUXXfhQfuMkFsc8T4dqk7qR",
  "key28": "NxXG9HTJfXArDbLBAjtLtE7EJTbj5MsQUrbQ1ER1eRBjWynxjxmYXWBAH8DJ38m6Br5Sa1n52r29wNK4G7dUxth",
  "key29": "41ZHW7o3azdbUy4aUzdT3WpwkKepCi4VitrvF8rNFANvEQqEERRbippHpw5DNjSLJPcf69t6u1qtW7sLwTx16jC",
  "key30": "2prr95HH4cH17qnY2JoGwBoH1vtLU8MBeU3PGU36vR2w3wdPwcqTX61ZSb8VQgaz2NKzzQq3xhnMwNSG92WZTTtM",
  "key31": "4oZp1QE2Am3W4dXKA3daTT6YW9UEEnYG6rDQrjaRFus33uVJsLZroTEFrjde3TLEJ7o3R6CrYedNjc7WXyCZXWGN",
  "key32": "3w42ULKZkJ8y281srBjZZZQfr1XmsKoLbLbJPFYUaYyTZ57VWk9QFbKmujkKABaKNkDrdHKwCxijKJqP7fcGxLJH"
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
