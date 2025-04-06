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
    "4RpBaY2iRpPR37JYbcScgAh1CcfQjfs2c9W9HoJPCHYkKAtDNboWAovx3f7wRNhTqjgP3Cj1v54vmzSTjpQXhtm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rc69QwjqpZLz6zWLQnYxX81BFNjZ5KpwGHLvEEqRB1PTVKe2qaoKjLp7wHayZdrFxd386kGZ46S1XRXrQdT5Dj6",
  "key1": "4RLMo6U2tiNdszQffHr6ma61eH3YZWMjUvtStFR4D4wTgRAAe4QZnLRH4crqdGD2PoHZwCCNLQb8cCFUQWPu5f3H",
  "key2": "3CtcyuYqyiFbyfpjmemxXsnK2eoQheDfdQgccUuC1AnosgSCTNudWXUq3cCVtnmhmVxZAkDXALum3nhxxtPpnwgN",
  "key3": "2Dr5pQDL6MT3hmDde7YKt82BZt5YQBy7a3JhK1Z4LpBArfm2KnwYGZULJBaeWLYw1RXwCC22b37UWEihBjrG99tP",
  "key4": "YbWUL4MsaVhRGP1x7s5d1Aj2JM8aJGyfq3E3indMzV4Vrhe29Y84E21otXoAyfN6dKDRvhwscgQngtd5Rkqbfpe",
  "key5": "5LuYzPtPuQJpGRP3F7G8fgugDJCdHFSKTdgjXoEjDbwRxtbDgHRpeLNsqLy2HFkGQ7udn51Jtx1t8enSm9iWvsR7",
  "key6": "a4r4g2QvU4pTw7rjrku5tv6QTMBA7fdxDLoWS7CHKbRYnRnz9ztaTHbRz9jnpFFBxRTEjuVXJHMWmnWXKKZ3BKL",
  "key7": "4XFsBbQ8HfNf3KNzoht3bBY1kGeJYKeZhF3vrgqXWdQiXuXHf8Fn8y6k8yY3vSB9KtHyW5kawTLX4xzTooAdDacC",
  "key8": "3mziNNeHPyYCvc8d4g5j1uEswPK1mBx7Xbzo9B43Q8We5GKVb5Pi4rtZbCzEdNBGKmUdxv7U2z9uUMkv7GT9VtAt",
  "key9": "4wYWtAqZRkZdxSDszvujvkTXNmZpvVoZ1ZDpdeLMU2LGG9FbS4wQTH2rbkD7wuSqghty784nn22wL1e712RZXwJu",
  "key10": "qBFBb4hjsD2AgBvyxuiZx1VrNPu3XVEwDzsjde58o16jwPgknS8Cujf13vMVQ7bPDjtMS1zvCZ37k3mkyimLUjo",
  "key11": "4k5qfgcXBmffgKYEd1fSejg6uir9aQ3Jaz1bzmiip4914qafLXbnMHcPwyYqQZTHEVdrYSuGxDXxWhcJHD6gBE5h",
  "key12": "dC9z98TAiURTuLc8hxpDzmSKyFMUXqYAFHaC3exytEUdmuyEGWzvZD6Ex8VdN9doZN3anZSv64GTAUR3nHVhnss",
  "key13": "1NswNEoLmbZ8FWt6TaXLVsPkGvgfRDQUB92ERCBcX5Lvm7bNBytWKJQVcadAPRbZnSs6rZYBTCbuSF6TmNgr3VA",
  "key14": "LChDopLyGApouZX4hd9ye5gni1fWrqBQomf6vo4T2qYfvAveY4JLzeLbDk7uzBB4PeLz8xv9TXwP1P3Hbm5Tgaw",
  "key15": "3HG3qnLKW1mQPjtVhRLRCwS2Yt1PifhaxZcbV2LhcJpe8gZPUjcWNRmfqa5gosu4VdhJyRwLfvWZ9k1cLZDTrT7v",
  "key16": "hCETZfG4SPnLUwbyTz9K4xD52kcC5TphonubyHLRjuPBgwoHDZ2KmHoWr1SBWSmarMEA8pVoaAuyJPpHr5nnPdt",
  "key17": "5BDon9mVvcFUFCmwn7PEUWagFUQamTuHaQwDwehHH3GGX5oxYrCKdbox2mEmd9AF4qPGNU6i4nn79ng35Pqo6JYF",
  "key18": "2qArjHUafawTmAb5Af4mFLuGNrYo2VKE4wHjYmNUhoi291F2caWsWbgMfGc9bYSv4Rombz9czxMdKxdStLFJWRHW",
  "key19": "47VtcxwqDLp5xUDwzbNZ92m1GruKsA3i2KZSk8Xv83vPk7k1dbuRkfUchDMHHVzvzMdpeKgvvbHK2Ab8N2D7mgK8",
  "key20": "3wdfxgkZhf8c6YE5GBamEC7yzxxt4oXa95kMvB2bKitJrGD4RRVmMshvS9kRsQNBH4uo8ARiPb8ArbR3xfrmCZEq",
  "key21": "67hUhCQqdtKYB2iDFx3brYbyVrezHPHiQA8EC1haKL1PZkWGWVgkWnczZmHA9zzjakqog51opmdEYwYUyMWgtiMR",
  "key22": "2msU58DWjQQTL1QuCzXoCe1KgAUvo8kKwzgLHBtWxFUBLaaqFe98Wt4dxtRJUA9NHB9HJ5aE2xtrRxiW158ZnNxH",
  "key23": "4cLjoH9td3jwykW6iHgBiPMUE3xRxd91vEzYbkXFFbo7JksGLic9wMzf6xixpmuYvc2SpU225yH27RAx64jkQByZ",
  "key24": "38T55DF3k8on92NgXfNoeEbJyH1hNaGs3CMiEufeCRemBe21Zjbij7ptLhubkPdm3WTLD61cPBKr2EqcDHzsbe6b",
  "key25": "4BuxVosPvDXma98D583gYCUCjTUJAGim6K788MejviR84ZCmG1K8AK6pJZTAkMVPK4MbLAnkFQvgddKk8x3iouao",
  "key26": "ui5eNJxKCEpepXikH3SHsro39jFTDwwriL1ERvRYxwbYQqagStwLAQTkrXr8TJZQTU6WSDzZgjzjnfqTTnjVT8R",
  "key27": "5P8aXrWeYXyStMKDLvi36VKdLqnPvET5ZbBDoYZkPdV33WWUA2JXetZF1xHNwkAnXxCwX7xdwQHtkCtn6BmyCkkN",
  "key28": "5gzCjznABGWqHvRF9MNqj4SGYywdSBS51D5nrvjHbLn3q73rHb2UpbZ39NLvnCKm7EqdgTdmwWaF1TZJVGFnRccf"
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
