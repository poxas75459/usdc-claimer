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
    "3xDaWYUM61ZFy18nA5kGqmRNR1gCPnKqRfqf2R8vd4jqoSrNpMWFLMk41kzKnJV4LiesMnKm5soQJaAtnEQo4fgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XFnv7rwnzZy5FqBvdn4n81xdbeCmmEHohcXPZroo4rSL6Ta6Ujm9AeADKQDQZfFrsn5qtjT6ZQKMoKYfi8S825G",
  "key1": "2jf3sC1NBeBEwbhnphSyFJiD8cmVn6CJjZZ1uK3zNfaeawo3uvwf9i745UyhiHq3tSYhEJiwNG6iTFWavh8Y6eQg",
  "key2": "34X9Bh5sUFvQCPZpLV3UUdPcUeaRPAWL8XF4GgdR6DR5t3YAZbhEX2ad6Wz7n21AL881A5WoJJRb7jpGsgKyACQM",
  "key3": "2wfqz3D14U4S4GUtEVxcJ3zDNbf7ocDKczfHsRPhTgJW3C895tpQtubnWC7UTWJqbfituckKrDJiBQaBnnBX3wKz",
  "key4": "2hXKfxQeZHyw7DjMpwA8YBg6WBPfwpLSrFH3uXuMUuCULR4WLVYYs2cedBw8vtDLSeidZmynNr2UW1rjZvBZWS9x",
  "key5": "4bYXxg6miQxzaQEHKftwam22ttsWzyXNKzCw2bxEGKxVh2wQbjiaKeo6cSQrah4Z15mUHng6yP25iusRLiSexesv",
  "key6": "55n5JaFBWgYdm21Qr5SrNoRMNVYkpnwiLnuB5L1CUfaw7wMG3W8ij1gJVQLPMKysw3H1ea5ULAuAoZysFBjeyzqk",
  "key7": "5xKMByDfyWsZU8LbcvTJEVe541apxXZeD6U9Xz2xwsE8mTDCimwdvPQu29f2sY4vVFskgkew7FkuACFjgXSJwdem",
  "key8": "5FmAQugtrX3im1B7f2W4i8xdeyWvvkfMXRuFwfSrkwjHQyNs4uS8WsDRKrasTpe1ee3UJPyNKh1Kr5mwzLbvVWuY",
  "key9": "FgAudctdT988N9XChtQp1X8cpeQWdDStZw2dKZJjJRTSUsoL5NTPWeEUTZaoP6TKqrEH6hfwxAjcah3d47AsBRW",
  "key10": "xc1UFDepLZPgeJWBGVyZkyjP7pFodgaqpLxUUxiD4A1heN18vQKiru2bbJkL4oSTZxBGnyyWARBEAX3T3E6qxF5",
  "key11": "4bYAyBTaZZRToGor24Hox6hwbo4AJCsBoBxgoDQkJoBQZiFeo8kcXeFDipbnt2ZCZKf8FFmCMGNETTqeCVA2PAwq",
  "key12": "34mX618TnCzLSpW9LYnyz1evvYHsW4ogS5th7CaPoYdTGzwwqLHnxJJBPicukkcoo1aeSYEyKRXzV43hgNvv1ojw",
  "key13": "2RPz5ehC3BU4cNECTzazw1WLDgmmBekzG8ddqea4zGjAmJmV5Bvb2vysQ5ti3dWVBrvCDH3kUMpJyEHZcndBnMJR",
  "key14": "4HCzEeuZSPtpPxFJ2CSvfgNR4v5HjBUTfqQoV9R2ZnJZPxLE1Su2tZdxvgbcVMYsAT1zrDCwz6JCAd3t3DaTRGfm",
  "key15": "bDi59Dece6R6bhRGrjNadLkPc1F5z5W1QFYvriRLCBTFy7FCpU7VaKxSmKupq5iT1DJBzLjPZLnbofuGzqPUiky",
  "key16": "2q3FCNjBTCR268w2ymryXYe78y5XmBH4YqBXJSuUFwbvseikR3do6sjNc1a7whxtM2x1NKz8SNYGSD4q2enD8t59",
  "key17": "9kRjSHfeUuM1ogB1GqSshfVUnK9mXUxaCfoYnZMTxoP3CMK7y5Cy2b3cJx2pjhjtNHzTiAr3fbV96TNDdA75moE",
  "key18": "3jnvYQdjySSmchPbpJeHYvpz1U1DSeVrH8wz9nDkc4mur4CvFb4jmFGSMA13z6MFfKuEfnNWXcwKpKwN3HtLBQTJ",
  "key19": "4UgGGvSatAu5K9Kpj5WQ7tDD973Jc3a8uxdfZNmxuTdkN1reCVGQnU5GwJuFcCjYiPe8R1dbdoneWvNCcWGCVhwU",
  "key20": "5uEyuXKMLmtRdwYNMgkWLbwyN8yPCKMuehkjKEooKinvtbuMKUjwVyCSnsz5YctPw8wZsMsXd1xso4PZMXCff4CY",
  "key21": "55aM2cQ1eXh5gy9bP9fTrJebD9BqyNH9rWyDf1xhDFTdsELKYdaizAQxQnL6hfs29q4Yz4tE3oURTXBgWDqbHm5P",
  "key22": "2oA1t5CFSELEztc5pBV9D5nJjaEChmRMJCwbCnWdC1UjCyumsBtgswCemHY2b1qtK1jRphBmWVeEsdpjnMWqfj7o",
  "key23": "4YbXH1yG5qSB7itwNjVuEQacurCwbHcgFL3YZkxTy6FqNE2VaKmSvf34rrWCxRZP4qGtk3eqsiZQG6mmfxLhj2At",
  "key24": "2U3i3jkHvAhxPVjdt1o1cahGWdSkUWvTxFiawQwZyzJpNs9hGRiYDTQJKFwW7GMhyupDjxvAAoJiXrwqbxnXBtnk",
  "key25": "TtfPncbfks1Bazn6r2smgeihC9zhuMr8sD1ncsQ9ArN8KFSF2gKrWNi4nLtEgrmvpYZspBeTUhCZZvr8xzrAoBB",
  "key26": "2boCt4dUPx25BAEvMuNKkWMBYy71nrnj62Pfu4TZShUzKkBshVpoY9fJnvXwUWpXd6Lh9FdA8eC239GkydmsB9WJ",
  "key27": "2DjWQAbfQ4QUZYFW9mRi7PKMCheKop7BzPtMHjvbVSxQk7A2cneTwSNZuD8AoT8c52WcMYm1LXJBCd4PCY49xHEK",
  "key28": "3F856iMvwQeVXXSHxQg1FUec4BLvLVQtP5bbdeDPwXGZ4fYRvh65mPwjCeKH1wZ5V1EE674ThQ3LGk95amcn5A3v",
  "key29": "2Ny8nbZBfJNL1dZjiBzJyPF2FB8QrbGTFioa4M2doSTaCK3sSoxyqpStoYyi1cGiaacrUuQWM8uRQWWbDU1k1WBU",
  "key30": "4rMhZWhvjsJrDRxBNWn9XxvBW8HGMEwmJtH1BmDZ6gQ4Aj4L29Wa7x1jnQknkwh7g6PMX42vJFTaYxtEFZKbAzu8",
  "key31": "2KcKM5Xjn7B4qrWaVkwH6J6SwQ7dijZRWmMqx789Uoo7Vx8jDxd2gNutbCLuLMZX7jaG4CTKmyirtyvvaS9CEV7P"
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
