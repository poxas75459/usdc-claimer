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
    "4cCKiK5FgZLt4283PyDpXSHs7CX5YmcsHGPqBXHBd4yQNX1U1NpVFV3ntVZTzvaUVtS2BeB1ojTX2dXKmTbaEuo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4LLtoDas7RLXkQuS3vNd5Su1DH19iNTVaLLfBQ4hgztJLuimLbde1isbMRVuEYjVrELtf6r5vpVPUWSPuJvZKg",
  "key1": "3qCekvkTKhZkoSa9ftpQDHuhuqaY1qGYtMnNUfKayHALFxVKnq8PiRMm8DR8JoXhTQ8GrsCHwomCj7WKCufVw3Zo",
  "key2": "3DZSyM8WJ8GNhNYFcwe9KjujWt4E2vrhvK9X7Jkrr1f6DCuV6e2JVm9QhBhsEk5yod3HFTE3nUSckCFocF2zj3uX",
  "key3": "383YjoSdk25bTPL8VVboFpxzzbZ9aRtRFsLaDHaCu4pdVRADaayhtQw7kbXEQvSPAqx6aWH4vwr8yy5hbHEcM5cb",
  "key4": "2gmXPX8MqWLHhSCU6XFzHBgem5hbBdQJF56bN7LZXeuARoEAJBpyUPLq8piNa7DnQVrPjZgzzY2TftDVy1hxQMm",
  "key5": "5Q5aFirsmyXroNqS3iTFtFYqE1LZzorACTX4fDA1vjKwAA6dwykAiccon8uCgy4Xzg658gy1j8Nqz4NhLRVhY5tX",
  "key6": "2As2NJH3xUDhmFDNi6YBWZywmvNxCWhhb7PLnXSPGTJCxTAgm8QuhEkDGnmKq1xShazxknTg1afG48UrHonm7re",
  "key7": "5TkhJnAD93CMMut7tWopBjJPXuKDch1Y4EdUeJSNhHt9Jizx8SZkQobEdDEuZmjSF7PMPn2yrHCZy1NMuPmpheaA",
  "key8": "4YxacKY3Kz1B5SKKJLv7Htvw65TGWRqqBZH6fnKxdgtLg7Ht4iDGxX7gTVQKKcTq1rbJZsCk3CwVq8ZikvqcU11A",
  "key9": "5RnNN8P7nDytVQKPiDu6HfW2nXkE3wjs9H2fhpBrg92KMFjAjdWQwH6DbjS1qBHmobDfW3j5zDNzSLsFQ6H2YRos",
  "key10": "5cjnvk7ETyaGcwC9vZJiGUcrQT39Zrd6ZctkEV5YDRrtXFj7N1RM2kTEUhJ185N3coyo6uS1wGG8FPGCQj1wdXnz",
  "key11": "5rFiHtQHftwfkbsSNgCpc6VbLd6URWAPFzEhqwYmENS7Py9xYpwWVr1HkrTKGf8wyDRb9k4Yi9bG5gCsquHUtKw2",
  "key12": "3PPUuM9zxNwo5x87HgQJTpzwUUuQ6sjdAnTEwHFEKKnC2SGXqsUWXPJpuMnMC7LCrXHgX4px8iCRdCEmxRDY5vgU",
  "key13": "2Bm7bGmAxnTVPv2qNnFrWojnz6eEbokQUeH5YccuBTL93kkLkmKSzBMf2RkxrtbijhAJudTK989hDpBWhGftRRvw",
  "key14": "4yKqWsym4bGQCWKfsA8GrBjSgjGkBr4NLZKUsScZN76tvhbXveiY6aZe6kHs4gvuXe8ZuoW1f9Vc6YomxtcM6RfT",
  "key15": "4RCEwFdeoJyfBtTbgrxR7HKxkucxuNfzUagmNxoBsTHSmvVAkqPSofe7KaCDR5HRk5YvDdQnsUF9AaJB4wbnBymj",
  "key16": "4fpKAAzqKqa46P46qZNBQ9uRB89BFJL57BeBzqJHp7cWCPMKMNEM3oVdgnF9rcrHB4ukM3Gqy8rkrTZq9ujNRQAL",
  "key17": "3ospsoChqLqGoZD7Y7Vk9udYM6UW9YvXMCMUACuXPeDkqVqYmAeoSgDno3SPjicST6bKpT4YK9bZCsQDY8N87k6F",
  "key18": "3CDuHG7i2G6fxjS47uYk4qGVewcurBSFDU2KwBYdpE4WdJsjtGq66BYGdGydoyHYwCMj2AXRXcMgtMmSaskLdcTB",
  "key19": "4BVp6n4UeCei47SSACw2vpsKyUktT276REi4gvByvDgKVcaxzkyr2SpyTsEpdkQYYan8QLs6RT3ahBpDUPzQJ31S",
  "key20": "5UxJL645Ain53LxoDVVufeVySFBuz9RwdhEBzDJf9J3oNMx9YoGGkPDRmsQpTU7XMCT5Ei3NDymMNPDVw9H8oqMx",
  "key21": "2TjjkDHeGxTJhmZui5AnBPR2z4pyA7DLtViF4GteaGiUVSEGUUTtbLzLCFYeADZVTopo12D85s8fi6zDuNp43tKh",
  "key22": "65G9ur4RZ8fTDJckiiKt7ZVPyDCKfgauoerrM26VkVm8eomGVGGW3nCfvT8aimjKZqPcnGcxzkBhqNZS1VpCn4xX",
  "key23": "3nyznGdc5yRD9JxxpvJBpQWrvVR3rZmnUBcLMtY8nssYfciShHss9TfmNunqsGUP2baJSgrzduC9DQiMnaZephkX",
  "key24": "47BGoseGeQEXhwZ1XPYvnYFK74itFMDEfsmo33aQdVaxi1po2FPBH7UpKHTacNRZtakNaGHNzy9jAykc39zkJXzj",
  "key25": "3srp3RyJ3YL9aC19gYPNVWQ9BpzJf9cexvs2khogVcxxBPq73iZy595aN1HJxSsimsuVXCs95sLVDEZHyCg9oaFe",
  "key26": "5qFzbRez4iTxRh6j5JyXbgQD2w6hED6Hm2E9Jd8d525tNPnGd5wDgBztpmKcswtrRLWRpsabihGQgzyF2PqyMNDN",
  "key27": "3t75J7ShBpj8TC2oddU9FuUgRyrpurdtay9mXx8YZhWCPyFYHcBWnrnygySzprvmZBuEQX4z92sXJ5qRSBu8VUqj",
  "key28": "3Xvu19VLVEPvkHsvvvnagpw7uM7ec2LsweyfFWZCGDEMZ7v6zZaX9SCdTSnaJvfpY33VzMgBGZcB1askQ4nNCcHe",
  "key29": "546bkpCiuGyXZFtF9Dwv6ihiSzidK18CNR3kde1Hm3wdrWoeEpmynnXvcvC6vxcwCaBu6TTf69gyPpx42RdLvaiQ",
  "key30": "4pDqQaKTB1ej4Veyyj9G3hGN8nSCDPEYadspQNH78fBbvQDDEAreLh1dqunVyLnkVGw2pPQtMYcBdUJExHi63XCj",
  "key31": "61bQ2gPq4V92p7RyCB8mmiA9Mkq7tWWnZcfzX2W1b9W9eeRPRoiYKABUf36QbA8eHNWsmFuB7fXFNHpE3FfiMHRV",
  "key32": "5PvLRYPGybz1uXBRdUcaZXx3u3zNWuMZnPQ7xHvL5m2MZj23KzcgpSt9H6dn4wGMdyiwxnihVeqCHFS8A9M5tkD9",
  "key33": "2N5D62Jb2nwj36UCGUMZjJo5UMDtKabFhu9EGnHUzbfdBD6Q5MbygPdCS5fbTdmhktKXYdFhsQFUcnjEZy3LFvhG",
  "key34": "3mgihSda6iXKAS6ACqKF8ee6oN12mBP6vYcM4DRY2HV8SYBZQfRFbmc3NDsXAyPrwuJHkFfwfmqWxqhXr8VUVVJk",
  "key35": "9RUPLGCp2njzQoQxPpbvCZH33i3kGQP6aok44N2HtkS4yugYYn18wYidmufSZmm96y8jYqGiurMLCZJaKzXSPfY"
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
