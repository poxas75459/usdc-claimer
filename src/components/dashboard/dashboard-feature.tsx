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
    "3Pp2NS2QeSJe78nkkHdNEMwwfTNZTvo6p3PUDsi91nPm8YdEpFJ6WKsqqvmmPpp293xJuGH6F5TpnMY4vZdWT65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNnkEfoyCWcW8FBeHqWQDK9MuSaDXRFtSiWeB8sGtP9HpSEYcvjnEAK8Q5oXjeJc2rRLKWoRptN33F5sUwv5T4i",
  "key1": "4WULUaT4mz35ka3RcePSdne2EV8yMZnEFWkdozjQQr2McHcPrLoCybxLWw1bJdZpqaf1yWdGX4LzvwtgUpXUpHzx",
  "key2": "Wr8QRrEfv1dZdzJ8tAxGZPxT9BUL1MMEPhQzcqT4JUAQB7QfYsQj1Q4DvGZuzMdWbYopDKs7rrj547UKyZ498E6",
  "key3": "3Lj9JLQKuZGFURh8JdWk9zssKkKeksykR1Fd8uKdeqYALFVGH7QZvbkHJ7r1FJhb11sTLMojkvZX1uHiStM3vP4M",
  "key4": "5QtRBE3re2DRZ36Arn2TbfCAA438q5pWmXQs8TUDM9E81872DDxfjiGHaNFAJmgUjuptvufHU8CYgdqWtbYH4zRR",
  "key5": "3mVWxi1xBTGyuvAiWLXHddR2SZtsUQeLcyZ5nwckGntjPr7kSmw42fJ92Z2Gm2T3bnQbJNmMnD5MDY2PnrmZxNHa",
  "key6": "4bGmQRJsYzg3YL936dhdx8y9h1aia7aA1BLXBUAyotgsTjmYYMyF4Xp86VjyRTAMrjpoHWpF5sRWdSyuVNQ14sEk",
  "key7": "31QARuLTzUo6GWJTyQjQWpUd8w9Z5kFS5jVuts2uvP5d58toNLWYeXr3yicnCNfNZ8RiJWFcZ1aqaXEN5uFfX8QD",
  "key8": "3bbd92LpcKbQMGZGB3KM3XaAYmSC8piJCUDpfQyMABUokCJmf9rumdMyX3aV6vbxZdf6YFeeoX5x98ejKpmyV5Lw",
  "key9": "RXuy9hdddyM2g2YPEub1vC7kM1sfxVoXcyHNBMb9aZtVFuggDyXR1qKjEXaNJ1g7E8uQmKPor4BXEotBsy4i9YK",
  "key10": "3r2DxGYaZcgaYn75xfsx7Sq21msQBMipGUi9PrphPCBNdSrP7pVcAnkr8Ki6deerZNHM4zr6jXwEpwmvDBKjQzAB",
  "key11": "ZL1TVZaiCRbP1vvbByweRh4QiTWQEM2Cda4m7VhCX1SoiHqeiNNYBDkjXkUbrTZJVJmdvgirprokKBkHo54Tvyo",
  "key12": "jxFnd5CzaMhsKpbRR4rru7C2kxFa53Wfj1f1BQ7hDwUpqyZpG7JSUzrd42JWVWcjCBeMsEGswRuAb33W9B1YKiU",
  "key13": "2D7qmf1ckUQ2YMzknPn233kRVV9coShqeXLG853UCcVXrwPtyN4i7cC35zud8MKXB1jbnCj1JUdapQo1gSSu1pby",
  "key14": "5x38cy5AqMsXcscLLKnxCydHhSrSRAxu9mizsX6RQ9vednmmwyDJndhD1JqZJAG8SFWATzaPhya2DG89tPGquUcU",
  "key15": "2GzkNpLzMoKz2gY86CYjCWWmxkUTdP3f2ZZLRDku63WTRj6rkHgMTo5EgqCaGLbt3heV4XNYnXnCK5yQGeHzW8NS",
  "key16": "4ShZAkmdeyVwzRASengWp5myv777x4zinY3o4R1FbG6iT97XrcLAtcaKwQjAvBGs7qpTPWgPtkmHp4k4bUQgifXK",
  "key17": "3sQsFnPspLGjYVtXXbeL3bJ5m4v8XAVfqJVbKnxBowo5p4QdCcxxZn5qA6C8bURHNANiNp4LxzJge2hsanvWCw8M",
  "key18": "4JLh4DWVXE8Aw1tSkok4TwzyZZRHL9sGnh8zWvHFg7FJ3dAEoL7fquCv6Z7Vg7rTFaakKbXTugHUrEhkRcuVuHWY",
  "key19": "3SWjXT86dpfAwXCuZNqNpCYEPWniyJr6NwUVd5BBNMtTDky4udnMchZRP1VsGR7oJGDHBePPWR8CsA8N26xUKyT1",
  "key20": "49B1j3vcisuZnEM2j2cnzZo9sJ4pV1X41QrvLRmBAEKMtLs9B8vs4ogVeMtZvzVhykF88wD5moJVA6EKz1xcRHNb",
  "key21": "CPfbsinPsSGhKzqqfBZCZQfrDpbsz236zviHk35qEP7zRdXxMPeKwdkR6dXfvFSzoh1bnuTvETtthN9NPEQg1Ff",
  "key22": "qXd8h3pahXMy7d1PKty5pKRRgKeFv1ymMa6Rp4UBRRwRsEQxez3Sb3JNVjAppuRQU2rHDc1rMKhpDpc4q3Jcsxk",
  "key23": "5TwaXkV9aTpajoSduXydAkUHDuC8myLYftvjS51WSUtmVxqJeJMTKLAFmtf9GDBA28YTwvNXdEbFcA4FwXdTA7qV",
  "key24": "W2iA3ZPXptMJNW24vxXc4EBXnb6fiPionvbbFZLwxTsGUhK6G6qPKtQhQGiSLZfL4LP5e3X1THzaqn4dniEjBCs",
  "key25": "GE8PPDx1Lf3DDCPcpZUpRQmaDURNhNqmbXsh59EzyvvzMCUM8djwMz41zXBzcYKUHFdFnctLey4rFedMnATf2Uk",
  "key26": "5qZYB3RR1nHUJyRMkpSB3B7wwQx3YKQKcVrWKxo2S7HojrLhvLQyQTgzZFYUmuiNQMY8JSgK9Ak4vYydfYecFTSa",
  "key27": "kcvj8iMoifKXr85ChajzEhkidtLh2nhk4R8rnvwQ4fX631GP1i579phKVVtz6h5Xj1zdYaydTj9uT8hozRfnoQa",
  "key28": "2megKMqW9qhuHDAi77HEsrgmkgFQX9vZtTgmSDgk97yBMFqEGhxcNT46w73sULMUJ2xK56UfRBoY6SuGjhcZcX3S",
  "key29": "26KTYzgvLxCgGKavwnNDsv7rdptzWjzhNWDdZYcWKeVyryfoQ7LFXBcfKRJmhJtt2wDRq9z7WA8Yb7PmDzJorMYX",
  "key30": "43b7Z3Smu2pP8nreTgDAo4GkexSpbL4P84Kk4dfyFkixdNN5cZ9AUG3ZNTtxjywGM55xrxPGuQg6L1zZzstCiEtv",
  "key31": "2qhpJUbxY2asgMwu2pK222sgsZCscW2meCzP4ws2NM4jXthtoBS5wZpv4vx2ocCMBGW9BFx28PQfE9Rcx66r6HGN",
  "key32": "iUeu6wxTTKUB1EBdkujjVjeBsYoHd7wHCcNpA1Kbh2eaisssiTCfojM9dXZuYFmcP3DRfAaqLVPUvrBagpBXMkb",
  "key33": "2HJpnWpir55ag3iTojVvWUicU6gpoKiPxbfBSBvwC3fvaPnzxkDq2K6ooqxmUKf3R652EybvnSqrJYGjCVVgTXst",
  "key34": "5GsfXdUak1gVxaPbdKLhnngf3vo4SSGiKn7dLP7jB1BcrDCHMAX3CameXke7Zamdtgs99rfeAmW9tYLDJQ1kYpc",
  "key35": "5Qkp6apBGy7ZMete5yjc4ccWDXnJoywM1dkyLJ9EJavVNryTcBavwsbeHBWwL3BnzjT5L3WAq4wDKtRw6Zy13vEN",
  "key36": "2d8SQ36YKGsdSx89WY8SGvByxsSm5FEQu76TAk6MZqrPoMgDqryEzTAsomWRSZS5y8X4XWZsCSooF2sQdf2T8oHW",
  "key37": "37hBrCnm7xugeUauaFtNLHxFhsvv5Mx8MNCiTCnCuLDL81vVCsP9mumLbF6wQixUkshdmqbqwQwJgqFYGWPXLVwd",
  "key38": "3ZaqQGgGcAKDLetGK5kpHzq5DQLiDMEL7mGDSCi5U1Dr3cfvm7yCUwvEbUz1f3TmdVZJ5228yLMWa6mcJEyjZDVB",
  "key39": "62GKWkN9jHTNujdeiPSGdDgT8BvbkVGQybKBnFmrS2afgSuifrkGq8fnsgDTYJ9zRNBePRBZek14N2bBV9XvzZnv",
  "key40": "5QJZ76FX6CtpPK8Mn9J18uTnyRAjf4e7mXg2hUhkf94RPFGJT3AqiNDKqCdu5ZjPaZ34DrhjXmgZjrHVcjpy29e4"
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
