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
    "2NaJWfR7V88XiivTPNDZxrq4THz8apmGcEZWNB3xurb8NiG4beCZD3ExfRuKwMo4ofJDiQuG1EJu6QFNeUEyLaK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kc5o3pHisNYX4bKoEMSPce9DsvVu6QJJu3t5JuyVcUvNybPFeTGzBnJX6Q1eccegChRZxw4cZfKSS7qwrh5Q1q3",
  "key1": "5jpWxt5JAJmBpAbTw5aiAAVYVZmVtkcZ8F4MM7enkf1A3dd3PwcNmuVmt1HqQZdwxy3sAwQ4svL2kyNX1XtMKDjr",
  "key2": "2oZvTc1u8za9sN4cpq686HJUWWYtzijEC5a7YQiqfvBKvHsnsnvB7CpdmJGn1BkT1scU2UZ4h7eJBz6g5fKw3REm",
  "key3": "QpPArat1EWacBL4DLhQhjKj5xPNBdMoBzTyK5uttXkrp8nMwSiNuKx5yFu6SAY655JcyVmRNe2oFHsKwNdFFYXn",
  "key4": "2jQtPgrfBzJCx3ndjCm3oWpshjq7u3tg9779rBw2Zd7GpFUyCDtqt1H5BSYTRp6cfZ5h4aqwzAh2HafR3etjrYDm",
  "key5": "UDGezyRtcGDMfyFrABwDDSGWMF1941J5PEByTywpY2C38KzyoYzWXcaZwbEJWyWrdaiUMZghNn99hZj3FZuJmWZ",
  "key6": "2FQG2mX7eb4TsmdLKn3Fdxc2Ys5jWo6R7rz9dfot3hteZFLtuQcouzEaxdBWUAPFaGnhiqyJjMWZRyzwN2oRszCW",
  "key7": "3eydx7av93kHnB8iosg9jXPxVGksmhuCoSqsnTuGUTqDrYpmU5NwA7WArebcEsXHcxpoeoXzUC6V6qSrhMRKHSzT",
  "key8": "3FjX13K7KPnMowvUZbdPvUxSSPJDvwbDLSnynZEQiTkMPAYT7MD8kYpmJupVnTw4Kdv3dYFMEkGKJYb5c3hsS5uH",
  "key9": "5aWVhKRg378rPFRv93yQfRTkWPr2hAWLF6jZD7vwfVKLAm8W8NKY4s6p6XZrYh4oSkPK5t5Hks8YR5dDGRLqVyTc",
  "key10": "fiXYWyMYFZketPcurUy77A1GpBT6ZfRDfEH5heWUwrYVhPAgYrNS4HFDM6jxYFomqDqM7vDdSRN4gW1itk99ps3",
  "key11": "4dXdoEHGE3ve8zfJN54ByPGUR4rgiQBc8nJs2jRWkEeKG7AjuPqPoY6wYKZL5sn1iGv1nwAAhWRXpdnGLXZsR7CG",
  "key12": "4bR4P5NmwPGLG2r6mfZjCgrJ3L3WpTyf4TtCi4dG6UjJyPe1HYCVFsZDFLXg2i1zfuFnaZyb5iT976eVToMyDvZT",
  "key13": "2AwK1ArdH5QppovcpnmnrwMEswq7xVjfCXSi7YSGVEvndRDcnRxwejiUkA9KsEaXCewuHoGy3NzfGR6AsawXqUZ7",
  "key14": "2pPiWmDVgWSm78navWV7iXdf5P7WEkCfFsxLSQjNxeWWTkbBXRU6sichLC7TUTvaUSabZhZ8XKKFkXGuKUu93L9d",
  "key15": "3L3AgvbeGvzfFMqVGTVZWUZVSC3RYuRxZXNusoMhBAYZH32KhsfreA8XE2wZWsetNpTfUMAn5vD1PjL2EHNuf15t",
  "key16": "3DhGrAtvKeYPWCoaV72Vkj3dZrBGeyC7thypRBKM8PnpAMsabgTPrT82hhXcXRHxsZdD1Lz4M7ConXzoyn622Rdy",
  "key17": "25tPc61MvCu7JQ5PgV6LzjZx5t5kuf9C1RAeWLwc9XkLUpjtKVvNqrXUF8Soou4cv52wLBvFkdMpZvLrbFEbhEJx",
  "key18": "4uRSiET1nzekuYUQ85UCrT5PdHb8QUmsAo1pDowNTChCENm8kxKnwLeBVMuUVLAjH4Kgxp8MfwgwY9pEtrmxnqxR",
  "key19": "2fh2gwBcXaBqW6g7CP3yGn7wdRq6aHpgnYvjy5nEvs1bBYWb4rPTTPdA9iwjENKRHDnFn8ecteHZinCedSHSVC8g",
  "key20": "623ESLUi5tW5J8R2FuyDBepNTkyGrpBwvBkf9pKHCPFYaWgfRzijfHPEG5kbjJUouhcM2WKG9bkPnCUhrrEURAp",
  "key21": "4iwN4SahzaY3Fa2RE95FU8hL4MrMLWk1f42aRxmBBZJY1QRnveH42qgMBNkBNVHdT78Ub8Mss5wrFDtQC2EXR5nQ",
  "key22": "2cGZn6JQtKxcXvG4mobjsSxsdfeNAkZtKAqdWXfxe1hwAacH8WLsqL7FKiU9kXd2rmKM1pHfeGHsQsqeg8c1rzQR",
  "key23": "4C8TistkpnGEDYTMT8fcwwFVf2FTjuVQooewT3UogMACYqjYpzxroyLa8DiW11L31thdJGiArg1YxGGunJa9F9QJ",
  "key24": "iHvmg2478JtUCUWCGWko44vrLMdL49PwSezRbYBMeXqRKEyH1KbhCr9n3NgZDkdLz9LzecNsUpQsRptpkXqV5JP",
  "key25": "3tQkwN1WJsQcnmqwEkosCq5XUZVYewroAZaosYioQEsfeBV2PUoMfCytnrC4298am7Z4GcjqhA3YvwNa5UpkRXzr",
  "key26": "41bfTA1bJK6has6Qfkc8JXgMG5idNwCvBhhXuwJwn5MTeW172P6PtzEdTQGut1L76fFcXFm8zsEKqUzb2Wc5QNTv",
  "key27": "4u5H1Q1Weh26BF6HNEB2ZJgYf7P1k8q1YVKBa3ZU4bssY6B46iXR4MQbin8JDbYrFF7ruiHehKUrUMZhEEoM5h9t",
  "key28": "jPf7XamsSVzZ1rwMvqJjN2Dw5k3NTNNZqzzLbt98UDAMdqq1zPJcwEZNxddLUrXxw3S2Brj5gyoGYtNUmqPLXGd",
  "key29": "5Z7X61ByjJypUZaNXZxvfykwLVoHb6MQMkjcoB5wyXpRYwejn5JbfkyfJTqtSJjehbRvnuJHoEKHTVog6P3aEqqy",
  "key30": "2ykEkQZg56CDboAsTZhBVfgcHUejKr4Dfj5segmQwDRPEQ8FNb36GwbR5bXvtkni2ubcxJBVAfk2h8dg2jEcD7Lk",
  "key31": "55iK3yioSmKGZbG8m7bKNrVYcUChechjegyc5Xp3FchqpbAkj6NXhXn75yVkqHCP7zdHfjgx5zcbo9ZxfoPiaT6A",
  "key32": "3f1M9nv5DN2h7yULJ9VXxbUNwur8qk2TPpD5AT2DfiZeDVPkMtRseHmn27V21yo9p4uod9uBuSaSaU6YGjrKLHMa"
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
