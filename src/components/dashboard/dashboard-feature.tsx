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
    "4FRGxbjwh2qE6KAhyHMfSpSGu2Eo66XS371swcsepgXT79DQvdaSgonkjTLA1tGZQZ2VMmmgNELAqZ38rWTXjwnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yibNq45DYuwiVwWKe2Wx1zgeKCn4XeY7hMXYs14YdEJvFPSfBgd3trottJ2PRCegXBuoXnmakpCTp1MQ4oLcCtN",
  "key1": "5wNVn4ZSqCTYuSioxJ2RapPfeFu4PoH5bqKoAfqBYvXRw2DdmJL7owJ4pxd1kitryhhJCDFP5vN9pkUdR396f3Ab",
  "key2": "5mooKCnz4CnoTqutRSmg4bwQsCU9NCrWjmEUdyt1KLW4VDA6c1pwMgfDrLb2etD7XPgFyKVja5cQAFpMpUgo9xLd",
  "key3": "2kSdNnSJpT9gMfWBFBxwDhHVxJ4BJYHom2TaCNVFUyatuhuoxUrofncrGL62dRiYybRvxfoPT2qDv2VnGeBgm9yf",
  "key4": "4rq2srrMgMBTiH4vYTBJhEik5kRkpWcJvUaGBis1frtW681n6jUCrTpAS4XLr55zmE8QtgZzJQ7MHKz2ijtroBDv",
  "key5": "3m5S9b24QecNoLjMBGWiaZLjtSEVAeZCoyhjma99THXXVERqr8Y14bbspjYu5775Zgnwjm9w24phdqgXAWAXC4wU",
  "key6": "2koyNkVsfyHJCEMXDLRnFysH6qGpb7Ea5RnueSS3A2rRdmpJMKSfTab6oFQCUfWxC3XMhXLKrpGEHKQMmxgQmExA",
  "key7": "66YqeLqdK6azovYuQDB3zG8EffVhdBPf2BmqLaMWjRvAZNYquoWeEPB1BD2WUGq25wQqmCFMfp2ZBeZbid7SjJFg",
  "key8": "44oHRki7yvWRiQHgF86CbXJrvsnCQoWGzKEJinQ1irf5mjgmwRHhVMVvcqdnbNz9H34LQGMM6zVEMiDriE5y9x2W",
  "key9": "BvnwPguXHdSKKpLJ7SbqPraGqQjjqNYmikXPeoyAG6D2w4GjBdnouz3iavbvZYqVJrbkQKLqknW21zA42e5ciWx",
  "key10": "2WUD1tMk9thqxtqqd6v3MeefEQxy3pqMdHJRjrNTUcWPe2Wd8zpQ4yvRrnNuoysTQiizdP2K4CgVmMXtdehNxTs8",
  "key11": "1TzPdc8rttZZEBUPMnxM3WUgYfh5bznVGbde8Q1JyNvoL9emu3LVTsnyTNajpV42dykC1wMqFeaR9S1KSUUu4Tu",
  "key12": "3EZYpiSCXHJ9Nrau3CK9Mj1cUEBpEH2e9atZeeYAKuKskiL8X221gDNB5YbEGmRYaJuW63HaEt2CeFQe8BYLPGbk",
  "key13": "3oFkxHsDbDKRkeqesoUiR8Tw8mEzodNFQVxvLmciPNphSB2iV3Dd5cdAzoXtTyd8kFJ1hVVHd2YeGgBMKCd72dH7",
  "key14": "WA1A7VpdDEYyCw17h2iGC8LQbVWrVmmcqaaL6Pw3aFLZ5wtXwc76tnhjnQ3HJqmrZ3txjvVvWt43vQ8TbPMj4Lj",
  "key15": "zPN52RAPAKKWRA3VtGyf8LoM24fESkoUDncYWWnPJTBjKLJPQEr2QeJEgp1Hg2tgh1Pc5mZjzeqnSvG49q8rc5G",
  "key16": "2JXj9hcYfu68ndtbD4XpFkgLQTfKZRWWHK8P7tD3c1Z79UBhR5AeVMoWLRwUv6YLtAJPTk5kT1CtAoJuzNgFx383",
  "key17": "2Q3naeth6fRfNnXSjKu4fXoeKWNUQhkyoRUDg84e6BvkN2SRYsTTE11i66v4wuZHmohitVBdW2hsG1Yf6Mxwm13B",
  "key18": "52bmpinsGA2dWok3eFL37v5jVCLZrt5LWZ9owtPq3e4wKpW4i6Axp8JgACKSGHeT4r7C5B7DGc55xC8bWyGY6Q9p",
  "key19": "NKaz5xF2VtLgxWFcyyq33Y6hTDfQtVRquTxwzUavpjhBZ5osCbCZaDKj8zTuNxVetiF8EWkDSvCDHbToQURgRy7",
  "key20": "3pwyNYfSGdNEWgebFxcwHXHpjdS1M7LVgnggHEv5iRW4FdC981aSqcTJ4FdFqC5hEovHSmYLweaMjEfjTCLRwaWd",
  "key21": "4WpQyNz5A1XgYPSzC2Q2Rcd95NYqxPzq9A4ZJBuqJw5Kvp99wxUE62tg8PAPs8xXJs49UNboLFNLyz8QUXnfPyy6",
  "key22": "o9vJohzTkHEsTT2trBLFaMW4RXtwKyAqiipjLpm4X7koQMZDKhruBDBvkPtKCStqpepE5ER2ach2Gc48geibrdZ",
  "key23": "YWZnWCuMwwCGwPgNfd77TMj4J1V9uUE4n2pjQXK7C3FT9RnBeBGAbh5tp6iKnQ5SX5gn8ZJou8YHCbWNp88wjqq",
  "key24": "G3RnGsajdboWQK24KuEnEKnbDq5oHTjuUSn94XFkPg2qmWj5KT2kcjM4D9hJaorae3Kr4wqumUAM1qUNKAa4Stv",
  "key25": "5HiWfMLXsaYwwjnzMPk3ET8HRdt6z2NoYweorkzRejEchAEzLeAnSHXqs3cmK7QLYqxUXeyLYDWTMeoPQ7kXqR8T",
  "key26": "XqRpMZtVb9Fa3RCL5B89h4sTiFkMFMKyoijHTma9SKygiVyTTtu5iNAY4CvQbUuNs9u65kvCGtqyRy3BtUZrcBL",
  "key27": "3QUrmjy3ja77Ny6u2TXJbdd5LaR7VZpk6qETvJs2eZ25R2nXaWBwHrsznFuUXdZD15dNJE9GDD8vBrYaDpRBpVt9",
  "key28": "PU7ktg9yYvrPn1g4AAQN5PxvRptxLFxskgmparhHWofv8QZ4suBDvwnfm86sH9usgiHmmWk6VcQCpWWwoWxQVoE"
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
