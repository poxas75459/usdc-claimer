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
    "4iGh8Rd15NAXqWmjrcAgMUpnFq6J9JNwC2Meocic2SA5BYUp1gKmxbV6R8SPGdsCVEeebKA9DYshgiWMYF1fGD2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAZ81Yd92CQdM7AvkUUiEc1vgK8Ktg1Wiqibk1pQLQucxctGJDusw4Kgo46L8GVSAWSaPEpnCf9h4tdbpBUg36Y",
  "key1": "3RTqFyWrewwRxKjQTnAqmqsAbhcCkWhSFBoowaYriNWVa8jXcKBJpeM3QDYDaDoYXP848SAsX1gSz34RpGrBiDYo",
  "key2": "f6MnRdbH36m771GrYuMUvDDwH1JT8Vka1cKtntTB4hm7E5W8TiVdMNyHJvSw1ZgpekzbjQCgaVFYVN41T81UGPd",
  "key3": "3rn1cQPeBne4p4hKnGBcmRRZWk9smwwDwSYwcfwqCfRmkZsggnYGFBHQjnBf9p39zmJS5M6AimE1P5NiAR5jUTFA",
  "key4": "3JFps7rvwkasYDEnTBKx73DjCQRuuruwvC9pzr8CLesxHYxTs1ispaS1NSmUq1hZFb2P8BDc7xVgLz3FmouE2r7N",
  "key5": "2W7KUiusqbsprhPLZ9cwY9VzG7Z9Lej8tqYE2vcA4KAqkAzQDP87meD299CLbmvqwyZuRuPnBchd4oy5npQRHYja",
  "key6": "5ToPYjZKfM1aB3cbecbJBfJ1L9MUHifwYvrVvHtHShCK6Rqn7JUQ9yUs1eAnRYpccPzaw2vhMPg1YiFwCz5MH6BM",
  "key7": "4LEaT628UYKM1bFBbach9TPvnhzUm41BJGG2awWLonvKtsnF6mt51Cw8DFuQppxtvxjB7RSccUEkzRmGXsJQYtLj",
  "key8": "5ZNsvBQgZCwS6L31gmJHZFSicmg85JttKrspsqC7EyCmKkLBQ5UGGV72A57eQ6tfA6s21YpHhciGYfDJN2PSSniL",
  "key9": "35rGiVk6DkJtrnJYN1TJ8F4jHgD4NACebaazy1rzrTeBdtufVUsZrhMZk17iZorjYQw7V7ouBExDXjM99uTZMvZn",
  "key10": "4es6fJL3gaJjz1Af9cquZLw27LJUNzrLWy4AXoouCchP1yujsTeBnTjFo6LBXvSfdnghDTmdgFQ3iMDYbiKkGMuq",
  "key11": "2hrzhsf5HybrAwoNW6F55ZmYZ5mFcQyc82aD68vPqdwfexWsUYT7C97eJAoYmcY34zSLYiUeg41ae4DcZg3hQogT",
  "key12": "5ELWP7JwH3KPteBG7rJN6JNjhMw9Mw9wQPYnNbEL53G78MjUgpxzDysdCmt8ViSHT5m8CLDSTKSBibUNkSxXdtAt",
  "key13": "ciMahQSUSarr3zNG4DRfordXAvCKJS2RZ4bAwiNhVceCFJW2PkkaL1MnzsBLe2uxMdpoQXGbj3eB5VJwjRuXfNQ",
  "key14": "arH1i41iuWRBtYeoPjPA3idzwKRgv6omifH5qv2Xxha1wsangfw4VNV6ADpAFeheD1zyvqRENmm8fVZbJ5b5L5s",
  "key15": "2dUZAcYgGsCT54Ucxq42kDHt8mX94pvzoH8Fjuhnv74nd1Tm4GyHqJUSWmQMtFd8kMPFPxSLEyGrTnSZmWmhfd7z",
  "key16": "vhvFh56RKi8DBaLcWUfk3rxx3ew8mCCDegvH7XvEqm3NQZnkTDtsCbCKVFrPHScqGoGh8qwXXWSuEgYqVezXMn9",
  "key17": "2Y8LL1YqTY1T53NDwDYghtguVmmgx3Q4cXjjwYdSADpuLTcq9vEci5AUL6714acHbVsfLK1qL9pVPADeU5FJfYb4",
  "key18": "4G94AqzFZFJjPxha6uG67ZvTaPSh8d3PpDCX6mQmNgYkZZd3eiNyo6rxo4Cp5kBRpazztKoaFcgYJRHQnnAJgyVr",
  "key19": "KkoQVJApzTtveYwkxc8e2gpQJWfrVphXmA2fXaLxJHNeKeTULAwRsr6QfTz8nTfrFJq1ojWnbb4bVu2pZ32qCzT",
  "key20": "33ZJrghvCzzyAFYnyypGyxK2KYCaGDM6M584jeVA2TTq8E1xphtjPaCko4SahN2C6tG9K8uPDfMi24fUK7m7nGnT",
  "key21": "5Re43LcHujiwcJF8pBvFCAYjQjHnxUX31LWfyxcMPDHNfmWkYsLbMq3aeGepnd3JYtbHS25CSTZJ97xJdtZVbNeS",
  "key22": "2vpvKTuqV2UMMi9zaxotpeUtQnzxBNzwA3mgFQxKZd56DK2skjLkbhLFodsdzsYMiKNmJtmjFb6rF5N4kzwUJ7FC",
  "key23": "3YcnHbCvbodEtKNsPLmiGSLJnBDpts4damqFqHr9tdoxRwFEnw8LirEj5MUR3fcMK5asLfMUWy2vcvndRa377P2c",
  "key24": "44EHvnuSGz82rbjiJZnYDDAPcwQb9yec5vm1L28JAChp5sdQoDjovtmrvmty3F1EdYmrxv8m6BqPQATe2BSiA9HW",
  "key25": "2TMc2Cw3iaTsuc7buVG9hVKcFWSx9EVppF3MZnMCmQrLLe9Bnz5r9aMszK3xPE6JC1yqmNytaP4gfrK1F5Zg8AF3",
  "key26": "4U5wHU5UJSp3x2nkKyHMvxH6dLVRJkxjtLZ27dS4TZ6UGgFHS9JXuZ8UKBFifZhXK2F3YRFNcz9KXAmVnD6VqCsc",
  "key27": "2jmXoJTzVrxAGfBv5dNRU8XZmeqw1H8XJB9qACMWUXgvwj1kJypemGPvm57GCFW7acYK6rnTxVKUusMNe6SdKCj7",
  "key28": "u8bPangaigiAZPS3cjctjfEBjneAipRqaGfd61qwRoCABkAfm3pHg1nUNJys9DTXHk4i9B7qWdeiU8rdvawGHKb",
  "key29": "2Nf2yc5xzMovp4feYWKDcheoqbUVkbnkyQjAfYHh4BD7HQXTqPgVxYgndp4V82MFs6sq11LEZtEQywkKQvyCooEC",
  "key30": "y1ENtxGophJpkvEnvq5ohEgTzXC4mMo6ep7BW4BDzET6gtuCZvyx1dWBBdRK6cYmrKviHMZxm4wVcBDETYdv3zr",
  "key31": "rEGVB2Nf1EcfZYQecYg1dYjoGWbj2RQ9V3Vg9vbZmto2dkAboYcCKgUHwjmKYe4XKLgfpSpratQFtcsa9cjwi3D",
  "key32": "52HufBbp84LbXGyQj3WfAyA9MjzvD2G3wkxMkC3wCe26xeUkotZxpYHPEWfGPn47TSWjS3tVdm2cRabwarjzpcfr",
  "key33": "59kjihwx8SQ748KBQkSfmj8So8x1vnTtRogmpgrtfAzHdg7qP7B59cFrerqvuGqQVmAW3rFh66JzhsZivd5ixwGx",
  "key34": "5A9FGCST4JWKnC7L4fckDfHvkP8nkYkKHVgWgSTaUmCp88H3rnBXg9cr7UoiUkLqBptEqamc3MdkJDUSY7Ua4HkQ"
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
