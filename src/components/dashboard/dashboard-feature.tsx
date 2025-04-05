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
    "5i78Z5VxSZArgBFaSsaUJ2K6HRe4d9mMrVHtnY4aWwqYtUhNX6kENyPMHCfPBCaa1LCFJkcqPRMkTC45wFU1bfgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfdsRVcny6G9gcXmAyjWadrrHHv25RTWoBHFt3QXehXLbH9Kd5a5Rwc5anUEkuVV3nGaY58cKNscGgbHNy8gZ4g",
  "key1": "da58RvCCuX2n4zL4ST7C9Hod56644ZFquDcXkTgqehyNdNjGhybTxFLTqzJnzN1SqSnb8ghBVcVYn2u6sTgK9Wj",
  "key2": "4nLppcWBiSUM8FeoWZBNbSYAYUiENCHnH1WLihxvMrnN5hBQFbptxZFzcdXGMRrw4Gv7tjXA6LHwE94966yNmVeF",
  "key3": "2nZwDeohJRzNrqFyt7kfNvnk2myU7aSVY3VrY6y8w6S1ZyvDUbMBfs8Y9hNmEd8X4AeS47jwGhknSVSGzXas8xiE",
  "key4": "3pxnfjH28NjYhwxw2LgPUyUdVKi4hWJihx14HptTXDhpnN9CNEbb7AnvYCZdDmtizBb3figDWpyGpiEEczb5G2CK",
  "key5": "CywP9SbUVjX9avZyRhUenKkHZNhktWJN5p4oV5mHWAbUG9tjS6nreMw2neQKCPhJyp1kSMhUUmYNMdj2QDzdi1H",
  "key6": "5k5KsSZb3KaPR8CJiG5ZD92KJ2d4kaNY7pcdnCQ7f9MFv4KPmt95ycC7WKoRbFZ7Tdt5rmpPEJ9xLmrD9H3R7cYy",
  "key7": "5EDZt7U5sisG8vrvMQJKdYG4nhLAaBRzHY5Z3fycbPs3efVc5JZrDgJCk7o9ZyR766FWMCWcZmXZZnxHya4NK53u",
  "key8": "62JXoMJMiE8kbTB7iVb4Wdmhn6z5HsU8Ab7sYM5pV3ZAmL8ajquskmEeHiCrA4F4K7AVgrJE7K6CXmAkzx1uPQrM",
  "key9": "cZxSLtLn9fkHkXXyL2SCXPZPpJjCef5iqBzqfpQuusv97LGsJoptHs99CYmH5qBo3mTQUGnzY7wsse2E8qY1akr",
  "key10": "3tp5AA1rSc6ccfbBCmusbYWKWmQwGQmtxAy6fV6Kab6P3E5bkAZuAdmDsTJLGSpT4pbYW28KLejUkyhgaUM7FXSn",
  "key11": "aFpSbaESis2LvSA7Ht2cEtcWuk5USgzuHeeGUU6dzDFpyooYTcxZY3aKtXGRAf4m6MDkyDHitoSaoyxoqKXtuCp",
  "key12": "2kLM34sHxbCsuAmF3rr3hJa8Lnq1XbGYQ1HPdkZ96eVZXUT7eGQMSrdMPa2jmd9tdVWLMjiZjo3UJN7KYincs4TW",
  "key13": "5L3ydGTPCQauVGZ6A7XqxAu3ouZkYk51b1kj3281GaUfdxv3YBnvq51VQtM85snmgC9suk6MyHkknF2f1LSC5ex9",
  "key14": "HBj4imAtryK6Bh9hQM8rddzXpSy8mLZH5dyUxBDhQSWw4ngxh1qMb8rk78aH1azowXSoCcroSHseKMWShC3Zjpk",
  "key15": "5pCgUBmDAaFUAZ9Qmd7rxq71r8BaDQ3ec3gnZLbUooLXJ8uf44HWrJgBaJf3KhwJ1EgLDBnESL5yKWBbQ1hDcnU2",
  "key16": "2MSFAv8qEMziqVHundwjRs1EJQuh8NyXxVT1qjhyj84CoC9fnYcbLwwQKQjv29HtcGpRuiCShnxqkXCD86WYFwXZ",
  "key17": "2iWqKcjTm6c4LD4RuozE81j9nrm5GCLzeWbe27BKc4f6Tf6SYMwi6FcwKRfLH8sus4EFKRL7Wdv9CnuNqL5MmJAH",
  "key18": "5tRRHc35wH2dBGJQWjPiUa8QusJyCuakMFGPwsvFsb8HN91CQRZb5bYCoMtjB5gR3CSYVJyhwYKj3f22mKfp72sp",
  "key19": "41zJdGF79V1v5c92P1Nz7XLPHBKmVWng6jtm8rvTNPWKhMzY3fMj117vJAHcfKyr6LpJ1gA1qXHiJyJAyUHMMGhN",
  "key20": "5kPfMZy3q78u4nEtghB6ie6PgZkz3xjcoQckgHgRT2BDMRVkF8W8LrhtB9aTxs4wfj8nLGNEjhGHH3SKNgMwKqWs",
  "key21": "3nDwKrjSJVXZzmiyC2ZYrVtH9Nyb2JZyeBtY9UyauZpZC9q9pmwTYGeZberMGbfdvLaxV7iDWe8LQypwjiQ16jG6",
  "key22": "3DbNTf2wSZ54ELBTfdVe6s4dqkQsaJ7TE4nWyVEz7H4MuW8YrgXFWwbauKHNsagTgVHJnbNok2EjoKqJQA8wbMYc",
  "key23": "3XXMoKQ9JJak7U7uuwDrkcXjg7qo9KPDCM7pCUyMqrZAvASBfEjDFme4gpsr3k2wTZ39ifG6cH7wzq79EPccHSSE",
  "key24": "4KRKu7MiQvDf4Dddhah5vQJFnF9wQo6ot8UeG1C55qDCZimnVMYHwv4LKtrPooWNdoNVCqt7oJxjBDnhnisMam1x",
  "key25": "2YcUH3SdsiqAeakJko4TCfB9EDthRGirQhp8t4f9DjYTi2giGAUA5GLyp9sSiZbEKw5q8V8CmVRiWc59xRtpKfcJ",
  "key26": "Remo1DYDMX26xYn1Xy7rkSrq1Jpegs86b63L2tJMioFQkxZjgbGeKYMXtBRX84wMB3v7pBtiFNYxdXM9AKYF8n1",
  "key27": "58a4LKnNZjxKzZh15Si1hvXwmHBTWeEo6NVuiAwmtUR9M37rxbxfDgJ5Nb7cX87TtoXirEnfAmMbg5LqLNZhAuWp",
  "key28": "5dYsb8J331NShTjwJ8apj59i2PXnoTTEDmVcKwi9pTGPPCetNEHvotwtgMN8ZwhQYtpqyy7hvKRaAq71G6oQCth5",
  "key29": "3S71prvZBv2kf54UvHFjGX37eBiNtodSqstUQJBELkosQFjXvvToszpsXxCsqPyeFPDDxkok8P954MxZ3SsrFbtj",
  "key30": "f1Cb3ZBheSVphrgjaqcnH3F5SrmrRoLtgwVbfn6C5Fcz4jEVfMZnihgsM4Gj9KCBgWMfp1G17zSKFQxnzFieBfX",
  "key31": "2PntZmh4o8sHzpX33MPNYejgVvU5wz4bJQLgHiRXhcvq2oRnt5L2XTpirqN6rp955pM9NiBiWSh3YbC1sRPJrRAo",
  "key32": "2tveq3t7j7ABCcQTvNfxYc6vpWgfcdnWjrzy96mpmTwGge8QvGhQUzJLSZRweRXqZCARwVY2LBRDgnvCKqWfpMNc",
  "key33": "4cUG5cEdhJTCJsz11irHve5jYJRLpCZM6gtGqF5ZvtuSXGLDBQpo6nGUwwio9x47zzt6d574Q2Jz26Uh4eLoRWUm",
  "key34": "3Tn1Qm5dgn7SnrZBAuBF5fTxQnnHitiCuAR4axHjjSHWj2BpwwMWLuGyyrEGYMnBRYahd6UyUcyGC41ze5amwuw6",
  "key35": "4ubUx6o2d8MUbj9oeFsqxjrqzcDQATy4um3EGXywhRBFkTHyQxemPHpiioV88e8ySmqnCfqNjWrCXhXjGLYbcaje",
  "key36": "SYW9KoGpcdaSEeDGxsfB9bXBm1C5dHRtb7qmjHE8RBq6dm5obaTcsSoNTrvuTEc7RKa7dPeuH9FbjcNgbESydaY",
  "key37": "4AepBA8BECR7wYknocJofQrRExzxYV5gR4iPrdvnpJMuQDmsyTNdzWt4VDDJ7tGFwXmrejbieq7jKPoiJhAqUGp1",
  "key38": "Pf53BA2mxS28HSwoFiQi3ZnduticYLKkEpGzFU9hSwVwF4vJ33v32TNuKLiMrc79mPjyrR4pgzU4GGPbegCSTaK",
  "key39": "Ei4Zm5jdCSgpGfjaHYPxSs2EGc3JiQb7HCsuFwwB5bZVg4SAqM8CUE59TDcNA1X8CM33npSK1tHpzwD6fsvgsg3",
  "key40": "3nsXZ9bAhP7KbjwvvDtDAtYpToCo6a5bn3xXJFD5xfrn9ukfnx2vzebYWNAjPNHkChaY7u4mvCnBikDBRtcZvqb1"
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
