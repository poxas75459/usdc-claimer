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
    "Xf4FiGYtwhxcZASqVP53SEsTirHHj9bNTLcVwNKLj6P7Shv5yf1sPxcCcRLba6QsSpWZWJeMc1F7LpJtSfe6yzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFNTeFR8Qgn6bGbEYL7NjPL7qrfcZ7q76dcVDMoRFCVc81oTotdPwLCwA6WgoGfVLkZuKPGBtpXrWs1SWu1fB49",
  "key1": "mPDZe4KrpuKahasgVCJfExnPUG92W7cRdyNHdoQrj4ub9sXQrZwogFvSDNwyjkxpcZpThVGoXcjn3NofFoopay8",
  "key2": "628wkqEXs6oey75Sr3qkRSP7KpMrSVGkXMbKHM8TkwfnGohQCqNujh7CHe59ug9LsutsrZwVRhUesXScHA6etVcb",
  "key3": "tcJp39a99MiDcu1jTMKHsxmbWxC2yrfzEPFwRYwHmmnVd9VzCt8mTQzDk4Mo1sgCDWaa2MhyV62mVzbUJLRAUwK",
  "key4": "38QFCvZf5xQdJJxLZnKwJ6RjDtzaejEMyXv8Ak4naEenSDMDSzD7E7pFEU3vQxJLqKmKAf93kMGbLVgXW8Hfi3cU",
  "key5": "45S86mgUMdxSC8ifYT2bSrkhhSdp4Kw6hB8ns6jNTTUcXfhVKW99E7N6J2LtzCPUNS8u5wuxtBFaG6Q6VDnUhUZo",
  "key6": "5UDq9Uwh78EgPy5nwLtheECJKuVW2eCUFAsioJLPf1LhiMS2DDPe5SeZeyw4Q7Y56HUTfhiXbsypnj85wC4EFNp2",
  "key7": "3hWPA4QdwhFy38i7CzZPEnSadmp7RW9r4eJHvHDMmXoXF5ZHf4nqEqzs8eQsuJN45ny1rRQpKFj94tEHWyPUH8fp",
  "key8": "3HdCQoru959hRgFZ5npyQPiwcoc6KZxojGyiNkjt3XqZ1mBeAAZxJ85YLN1vpbVbJeZmfiAuBLwSuJwD7rq5FWdT",
  "key9": "ZzQuA6m6LoVbxwszZhtdW48CgciWTiDF7fC3YkhCexseZNAfcRjqqGWFrBRozPqHRVtyrqvtbT7XyzLDpJHBMQ8",
  "key10": "2s7buormGjjtLKySDWu5CJMza3x1V5m4M1z7C6vQm4C5zx5pzNAaakuK677Uf6vvKTv7tLZ3unPjSbZ1XLe1fsen",
  "key11": "2c3pQRfCB5ru792Nba2URQTz4JG2nqfDjckheGaj1KaT4XofwvH5nmtaJLBo8UZgDFhB5F9C4YD8UJm1NdDrb4Hn",
  "key12": "38PDouCXKSxbGyq6jEe1kQjWnFoidCPs3CyKwemjtVmdeVAPtcqibMFZs7wibjP6zRZymASHzx7Hwuncun7L3zDp",
  "key13": "5EikwSpNjMTPiNsuAqE9XR4LtbDWCUQyVVH2sLY71wwXZ7DjNCYp812CvcB1gBbJAqWFmvNZVdfoC48oKwAqoN3B",
  "key14": "49XPM7rzJJyGinXhDsexG9WdE6N1PTMGLVwbtiDPi49zzRbPE5roqz4PSkkscso6pfddYoTKpjBLWntEiSejtk7q",
  "key15": "5ytQXLdzZq74PVTPPkQB6UpaTuBHCPhc95KiDDUgDhoc8jU6Q6NdFYfBDVszVLdiZAcTngZ4q9fCuyo1dNqo8g7x",
  "key16": "5VGTJovXxnSed7MVi8apVLvZMWpVU7PgcN9iBYA3G6jYHy4pQhcyS4Jrdt3uP2kBG5H9HVHsRT7L1fKxgYhXUiXx",
  "key17": "3AWxWNhwv1MRY3KSm8T1ncLKyHhqNxi6GbXAn3dFweMnH3AdeUnmRiu62GTBoBNgoKegNXBDB7styA1YWHHsB3JU",
  "key18": "2F6gK5nyxTyTbnZ2jxbthpHAcf8Jy66LQR5mAg9tgYBWXGTFh6f56pRPwUa9eSh4guQz6eCcfvDEtAGFtuKm6pz",
  "key19": "2FKhvcG49cQoo1KAAJkMtqcj37iY2g3UEwyqJ5SvXEbw8bREuu4c5Zd1TB3ASzV4xSuLKuvwoJ1Hkx3b3jVpDvSF",
  "key20": "63AdxboFm5AhA47zf4X1Fhtfv6no9dPWqS8Zr9Kbn9ENvMCQQBxqaW4ZMeXZAS2CdYEJ2cAZz4SbzCQykEnMGsqh",
  "key21": "3EEKM4uL1Ui1m1tXei3Q6oSS8uy65fWLRFxj44eCnkhSJ8SL8r4GPKrgebSWP72dEpcZgD2XKcuQ7pA76MmN8jHP",
  "key22": "3cjrnBxezT86B9wdVk9cGMqs7iwxct8yekBjzx1UzNuiMrRMZJtiQ2VvWUJqp9TWBNNtQhSfQSM5wy3YiFUYmRVU",
  "key23": "Rb7NBYL9NMoTN3zpCSaDDEfqAA2Rg8Qyhdqqfj844Y6s5aapDwu5ovuiAFa8UVMAEd5wDn9hMa45dgUVWzbrZyx",
  "key24": "228A96kL9JbNaAA2ep1SQkThwcgapsAphBS3BgjgPfJN3RZGcRVB9ZCYRawCb1yJMsEiYKp1VmL7zjNDfBZjFH2J",
  "key25": "2SzLeHpmmzHpkpTPendnLo7PwXVp4ZauGtaejg7w23cuaeHwFze51hqw6wtUFkTnJENyn9uzxNq1dofa5Rb1KdJj",
  "key26": "2uFM4VCn6LcrCQXwMphBDPnPaaibNxjiLihr7rZtGY4YzEFv68ypViQZwiWFrvK8GikyWV8xeMCjhBPhALc991HL",
  "key27": "5EJWymhL35AE5SNHV8fMPqV4nuBNuPf5byWuQLQ7XnkJk7w8qCUVeABnaX6L62afjEDLvjyMF5jtsrWCQTCt4bgC",
  "key28": "5PvBpW1akj2znxbYgL7u28RJ4PBBzcCgSc4HW1eqSpbfVtmEJHMptsNPbQ4rbixWW8yJ1GVkqdbg1C7XWag7vhYL",
  "key29": "2AytdfFNTrycSGcb2Nm2hi2ZBR9PMZmAaWfFU8Vkouwe7Xuw8W8PKdDrfTVBu9Ys3HzcbRWKKUQ7Gvyz4FHSSSkC",
  "key30": "DcyTvXNaULjGXvM9VqhqoSip3ztUxBjhagVEdKQtDZCf3qfioQfH3gtgr6Sj7UczL3MdzvvrzwJbZeEAF8kjjcQ",
  "key31": "4rFR8ACekp8PvxqkVoTFoU4SXLYnRUa42ZVKoDp2oKn555VHW2ZSCu6jyYaD8xSouroiFAGgDnjT4qbXRC829xJ",
  "key32": "3DtpZzLL7SGVnnfiqjYQSeN8z4emFavB1qqDCjj2zfkQNMaKjU7ZMuX7WS7574TDSGoyWqTAbGSL9iUskKyuWwym",
  "key33": "3Moqxidyb8pSHkfR49RD1MNVZpGbaVi1Rb4YQJR39CYnibH69z64cs6u62xBwUeGToZtbgCouM6ixiZhPthmCm1Z"
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
