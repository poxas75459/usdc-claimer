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
    "NjK556UjUHcqR9Fc343krhZQYMajmQca3CQ9XXVPvrXuixa6hS5St9YxRGqq6kEA4RPv6YAWbYsab3KNKU5NW9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWJYaXcX5TP6HoUMveuo1nbbHdABpDBtEpggHDwt2GDmBuaDCKkYCFrfWdmPJJuH9vWWq2ZAUF2Vro4XRMSxKzD",
  "key1": "BNSEt4h4k2q8HDuGYRcMnhHaS911Dx7wnGLFKSkuwHEWie5HM17dikMubnQ2aRKkwwmp8D1KRvY79mQWguE3Kz1",
  "key2": "3y7or1J2JhqczV8tpW5ZLTvMAJdWaN1aqcewMpEZwhQXgRz8wvhXMJaqKTG6xstTkkUG1RcVAN3mzJn6askEMLjP",
  "key3": "33u4CjTUbiuv2uJBgCjERsMsYvWPYn2afnFVZsGH8FujTKhBFXkwG7TjMjUjW7AgFGNngXRYaLhHRMpGDPJ8mUsc",
  "key4": "3WKxhtj82Rqe4DegQPutVHFZtkBe9LMJsm5sTNmUXbiwtJ1irm6jEuxxKZcEW9j9Z2KQEosHSHv8FLmUw3pwXueS",
  "key5": "2NQpSYXwhceLSMiCFGkHhuM1yG4mD2ckp7Du24mycRo167C8aqUmDpCufWChUzMCkmvitNARxwQ1DBnp1aFXk1gt",
  "key6": "2R2DUVXz1NvyNLzBQ3zhN6HbFQGzWN64YPJ8ZaRU5jYn5ffY3aJsFygrn7xtgxQQxvtyUt4aGqCXTaGFwGnpWufr",
  "key7": "3dNzRYDu3AFiducHPo3YsvCtfCuBvScN7euxdmhF5LC3XxrKmjvxQAZTNDvra1MAiVnnB5H3i9PsnfQxBEwRtDAi",
  "key8": "3sLajmgXLMSp4bTS9s5pGtqArRGZ91y6xMwMHUvaTdhux2FYXzCgFTzC46WJfXPvPtRXz9Zu95MYfaeJLWKS3G92",
  "key9": "5ym2Mj3h6q3bsG1koRJaeocAv7S8RTVYqevxoZUuJwLUL5QBnzrgziFPdHSTxE1zf9EoZ7PU1zEmm9hhTdsQQBW",
  "key10": "2v1MLBgNNfpqBMR3Kui2h3rXpGaZrmyKWzrz7nupbQBdJ5YHR1bKuesTGoRgLY8chswgjARYkLBfhE2M5fSCFKpf",
  "key11": "3eq6wN3eJMNxwVVFYh9onX5MSVMtiEvN31rMjsijZTJhBcAeme8opFSAfbnzvNDoCq9To3JXExUFsMR5M1grsMny",
  "key12": "58PKS5kGSafnvr41mU4kJNDBptYHxuVVRoA3ybbePhscZVR82qY63upJYn2V4ViMEkLm5tBJodboa2hGDzjP1ydz",
  "key13": "3W1Mh314bjL1A2jx3F9Y5tj6ZKN1VwWiFtAT19hSB2SNuFxZgqs2E4a1ZEMht7wcMcUKNnCnQhikcbZsXzf11ZJN",
  "key14": "25Y9Fn5b752AptFz9v1asy9w6iUGAFcnaBoZ5G8rX14Fkq5RkT3uQf87s6E8w3Ho2LqBeTnGehFXTnsvXr5mAASU",
  "key15": "Cs3B19JgB5M7TeQbUQfTSDt9DUYKW9d6cDupayKoGcFeKHqVaMK3acqKKCEfGMhMxoWmA6fuP6uUwWZTSpVMqGP",
  "key16": "3mXyuvdu3RY99sKKyywxpKVFPmxYVKhXnSaX5zi8dK9njJBMHzDqyz1wwWskeDtDtvSRi1kj86QADyPGh3RefgZi",
  "key17": "3rsFoFX6opA5K9ujDDy7J2vbVogiW55SVRWGNiAQAUWsy8W382F6fsZq3ZS7x89CSUU7BMvmDALsK37VAwDzvau5",
  "key18": "5dD3nBpvTkvdKBiM7Pukwe77WRQ9jE7UBkR4Hu54dtQYQBHeQXK9hpf6F3metDWWoU3RaLXJQYiaKE6xVZDrxSmp",
  "key19": "2ssXubuay6FG3nfEsup3icfLgLHuLJnyAKr75hyuuL7cTNC8QFieG48vGAcB79WtPCoz9PoAVGoZfTWUKJJ4bNxz",
  "key20": "2WDau6uU5NPh5pzevqjujSrh6HdekStY4dgw9sLQDj44kb5c8zd5fPZFV5uXHNH1gLxEVk4oUjX7vK2XHZhbvd7N",
  "key21": "2LV9faAA4moBxMyEwhPZSGDjX7kR6o1NA5nBZFTtqtbtxThk6vaDG9KqqXBYv8jQLxSbX3hhZhfyEPdt1EsRxGqq",
  "key22": "C3XG6oSZ9gyKtJcTq7YsdPrWhpGbxsp5kejebUN1BTrLnSGvfEUAm2em493AhGE8KT3gbLjV8tqCjPKyUbzHjAP",
  "key23": "4ETnMgHXaHa8RAZpjnv9JYbHt6Q2YwfRztjFtfSde76hq9vyHD55vHxE7ivX1L12a4iucwdB8VLwsMzEtbU8iUzM",
  "key24": "2b18tkfff1DG9pg4RgNmxvTjqBXMrpGkRAoM8mCsoMer82qNSrbjKCZ4BWLyfUBAdTVuAWNU2xToCZhCAy3EjPBV",
  "key25": "4w32CKenu3SDCgWKVgDcPTdNCbzjd6SaWzzZg31MGo2e1fPEzD64QmjW7o7yjgCN7FR9aHbHRsdN3jaE2FUtJaJL",
  "key26": "322iyqY29fhJuCYFMRrQz3cW9qSMUvGRkz5LRS8Jz17ZZcMV5vG2j9xNDnCA6PxZrrNNrEoxiNEzXbDjZXMkAfKH",
  "key27": "2yQkeoo98vGyo7Vf8UhTKoM4XzBpX1ibs9UR8YHSojmmyyhvRHoRP1HWyFrzU1geECMVWPgYpDwhJ64BgFyKPncu",
  "key28": "PZYsNnpuZwCtB1pZB4s5LfcKpx6G7y6QqMkzT7rp3uz2CyR5yrxN1mA2xyU3FW2hYy9VrEdxXD9LCRUdVQgtZ6n"
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
