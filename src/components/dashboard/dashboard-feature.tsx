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
    "ht54aYzyTbzugnQaTsoY4a3ABWHBzNBcUR3phPdQ8gQAcRUe6qCSWvp2ejqxHsDdBc3ccMMcvxUex8evoHSnKa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uetMCdsra1wr8cXhYDCR47Fubb4cq1JjYgAh7tPL6rL7ypNTKXxFccVHbSfqP35uKLeEbetAacybkG8BLbfdVcX",
  "key1": "66k9BSQQpCRTQadYWyuG1mfsUFF5yJo5VT7kh9YtMoHsNdHZGRShNyXrR2uf93ZppPoLVju3FXcANRijTB1cu5w8",
  "key2": "3MnYukWhZwfD175qGVvRdksywaVicRKXuoT6ALuWTkQ2JUhHDmA92xy2GVagShYpXTZnDkSafewB4wK4xheM6JKt",
  "key3": "4tBaTdAccYZ4juLnDL5s8RiZKyHb3B2ehMXVXuz3DjqCmsWcEhnpFNYRA8XRdHJYEMrPTSUmaTVpZkgTomhN71WK",
  "key4": "2kL8LZnxUsxnFoAtB7qJG67cBTgxPLioyDWvKX8zD3qsdhpAA8CdupKx23CvW3mRhbprUpFVyVaKgqnysX8hyaDE",
  "key5": "5mmQXfhBfE8mgsjoZ9E5Z4h4WvUpWoJachAvmLx41nDASoT4LxkeUoUFfu51FfTxArXJfmq856tvTkpfWr4CE88Y",
  "key6": "41t7n8HnbPVzvegKFwu5AEmM4m8RaXZEQbP2w7KM7tYBZJ7xLZ2tvH4ArDUGt8jGZuy4Nex4gR5AdSX8LQbKes3Q",
  "key7": "FgKPdtpHToMriyXkAx8WeqF8mam41Pe7VfGkfky5LHhZvz5fxxzfa93EfDe3QC5roxxfGxr2xA7RRQdFBaegsTB",
  "key8": "234odCQG7eFGdnJefK4mYG2xkcQKnpFYZoC61avmc9PqCCW685nT31yeZKXfDnahzAxYcEGGxvWZW52Fkydcc3yD",
  "key9": "3g1ywyjXoXqKghrRa9vd3NpHMKcEDeJUaCY3XFhtKDddqvmzM6vfXBPnkP7wcu6SN4hsWJxnGH93cQDqybyMA7hp",
  "key10": "4dbbLZgwHEtjFCuzRVGqh7V4uQzRqJF1QwPzUkNLk2saksQwNDBTqPZPYzeYCEcRG4RoJUnEyLhZe799P9eyyWj8",
  "key11": "261qtfJR28urCWpcHSvAVDP85XQv23Ly7FMfnLjGiY6B4HqSPosdjUqBoBEVTyeh5FQAcMbCdc5tNbmJmRMVXB9x",
  "key12": "4ewuNEn5tvATrNVfUmtcKFGmskYEtH6BSk9kmZX9cTXRoY6MfSCW5cPAW9CtsDANgbSXVCqmU22oVC5h5sBzTyAZ",
  "key13": "4ay7BZad8RZxcDrcWRs2aFaQAr9YL2W55akbZshMG9s1e2fmFBkh92guJGUZSw6bvwBYvQd54iC6ixefkfR8Zsvb",
  "key14": "rTr6k8fZc4gEqFNnsXNqBGFjXCZH5uyCKko2LxTMu1WgNUjxdPYsXqWPP7MU1Q65GL3qpysmadVsTVBTUPaDSTE",
  "key15": "2bQqXR9eoHesWWybeqeZunBumW1y4PZEYeVGApTroRC764R7hfPM9E9G6zJoKmiZ6EUc5bC1vujSBq3QeaEQSJe5",
  "key16": "3MSA5wBWNHiamC3FLjuMSC4HFXjTr6qernxEVHd81XeaFmZsuL3xsmSfjrnHuAFQWprqFMWkZxhjnXbo3rVbLkwV",
  "key17": "nUPcpc7Q1CG3SCNhxZbFQEhLxWZeqzh3aH8Koe2P86LTWRQaqVp5mnQk9hYUNHg6wxAGCMeMw7zLGfnG4TC775a",
  "key18": "3B1SW2J5VNCV5oTu6z9bCwF2rU47zT5b5Vh5CqkHU8w53aDfd56qV7ASq5H6JvUK5wQhcyGQmbNf98dBhFEZ9jHS",
  "key19": "3phA466BKcMV1394qiYPB9L1ZscQcUG4rqJKSh1TvVrVg5qE7xF23rBvSu4jwTgVoEuT3DPK9qcPDo9VVakGDSWP",
  "key20": "2dbcYve818DNkHpCCT9BgwGenW4PupwVu4hCcsEbpsvuh6mabaK9KF2xkqVViNzN2MDM3tQNcT9gpU4hmF9qU3GP",
  "key21": "cfMeukMapkuW9jeiLnM1J4gmHTsBAzs9Zk93wzKjRJC9z62ENDu8yVpLjYSJsCuvXtN6xPBeRc6DzN9YQnXb6hB",
  "key22": "3L65abMCJHLqMsbLfT91Jj6FqdWetSKpxzCrDHJpjpSEsAxdKDRUz82ceNkGoaU2nntcsX6YrB7aLNmYvAuznT8D",
  "key23": "3WMSssdXeMYWt6VWXs6aBA2N6P35xaj4634iUSkHbVoSzve2iekGEjNW4NadgqQrPuCLYDpWhF3y3tHqV2wY4dQ9",
  "key24": "4PR2ULmQ4D67sHk86GFLjAtNYEdbP4SzvPkXuBZPPHfYvRFKrtLUi7MbsYA4PWDq2GSwtRL47ZNzBzWXBXYAeyY",
  "key25": "5SSTPeGK6P2RF2YjdnVrq7x3J529fpRScqQV2GQT1WbmRx4WrC1oCuxgcHEUfv1Qfi58dxBowVBiSkub4C1LZu9h",
  "key26": "4qVrCo6n6wwC5GgLQSw7wE36H6wMhjeVAKEuzgsmBk1qgfvQotbVqyLEVfyYkreYu2eLAnnuuVRpueStmezhWEFp",
  "key27": "56TLf4Q5m4cvVgc5FWZcPB1rEsE9Xh66MqjQbNhjXB4Cy7YPRzJDWB4zzHkBEweD4QVdwpzv19BJF88uzV3bsQAz",
  "key28": "5kWBNbRdqt2cmUrVigpdrap8dMSd7gAV4RG42PUJuspKKP2rUMmm95uAW4BAJ7iEY4G626Das4i5cfFXHJexfznD",
  "key29": "26DXXNzimkcDDRE7vbeYspzGxrHsusXU8JihLnEaWgDFpumDPtwLgzcaB9ZWyXdGaGd1BQ4XgPatq1mmpZaSQUdC",
  "key30": "2dPAgaeMEgixtmTBrxssjnLKasXi6qUvQfRAtxSBV2GRu9ifSLH3DZahVWWiSKRSmy59HuzjKaqMtb9rnY7Ma6hm",
  "key31": "525bP5akbPkxZX4f8vnmJUuMDqz3fuGBvJWYYpFds9RD1WLvHMenBKah5tcD6m1goh7jnfwobMYyxxvX3vM1wraZ",
  "key32": "5gi2N5Rc4xdydLEA17ZCzPUBHh7JQxaPVE6UgZJSgSdZoEv1D8YmFqFxQLb9QXxDnHQoFBgBMVUrou3oBcCyVxHb"
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
