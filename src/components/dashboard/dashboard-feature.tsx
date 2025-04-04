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
    "zBq22XJuToZgWT7Z7Kkncr3Npwf8VRw7KdNKbkDcgYxQ4sVxrd55urKnbhnyrkJDbEgyWzrsJ2KHAqMsvGWAt4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdrRCLy9BtXseT9PUos4nnGfXwveMTHDRX4VFoXfrWmEPfAG1QSnqCrsSgoJw65X3Qj7yH67nBQhFz7sxAmX1ui",
  "key1": "sbQTXphNuvNL5hUsCD5Sk6bCGkgbUVaUnZQCkJMLkC4xFqtbJtJLZgZpYEg6xXhGD7DkggyxSVkJP8a6ZkLmBUv",
  "key2": "5ABQyg2TdLyeax6e3FqfJxyrs7bjRmaK26cUME5C5G3ySbv71S7G7hL8sFCCf3wdjRutprvLcH5Zok1ZJKNygd8X",
  "key3": "4o4me4YJMX9G1eUQ4qVeXBmX7j7Qos1fkbVeKVzu4CiV6VygGu4pwZnjUYjY5bjTgG3H74KfvPDvy29p41sybjEs",
  "key4": "49ZrvUaLb3se8fYrsb5kYKFjS4FmoqstGfB5RiNwU3KM7BShYwAQeAJRxuszG9ysorRV8ssRqnYiwfMVHDAhRFb",
  "key5": "2iuoPN5khxhMywFmvY9usDfQ3PFxPyYV1Ki4vjbacyzqsu5ksx2Vh6RF2BsV8WqM2NKUbvoEXGLTGzNf2pi92b7p",
  "key6": "3S2kbQWU4nCboDGuMicRRs93K96zjs18MdivHs6wCG3qqRrAug7y2neXhkkdAE7cikBJ74j1jpCx9McZ9mvBjPw9",
  "key7": "2ZV9jMZU1JMWTBZmADp8x1EQLbsMuRMKsriQ8MG4eMtZuSQFvtF8r7AHzM2nCWMRp4wC5H39cshZ2oj9a71TMUac",
  "key8": "2qb7FxzNgdgNt3cKuW5sgrNkgQHhT7XBjUXK9BqeBTByFx9KxydpSzHAmRTfw9Xdg18eKKkLc8uHcnqpiyU8m8KH",
  "key9": "62ADzMAQ9vArBeXdxH8osASkPcjzVytkZFyp8C7iqCcKZWhehythezE8m2P4f97mrMUZy5kJfXAzzPCik8AeVpyz",
  "key10": "aoPGetg1TmhoSdUD6niVSz9aVFZE7vKbaUrGTcykbuAS4fPbWFnozGPRBbdYHf3GhkiFjZ4AGetWUE1bdzjQYWa",
  "key11": "5tmHiQPKAGoA7ADagaJQyWbGMWdWJmF3Cg1QbXRTM87WVDY8GddfWYEjVAhbF15qUHEnPAaAFXidim68ERQLNx8x",
  "key12": "39FyU1FGK2hSoECiMFvxGo4JKqbraGFiFvUqU2YtmSXM6WoQ7GUiNJF6v8RE7xFNGDq7JBUVLFV2irQ8T4zJ7wcE",
  "key13": "cZ6QBy3GJ6wFy2xziVgkkzKoLKBWbH9efBgXuHq3GBkqP6eT2cKhoQDYi3oZMGfSb3NqA1BG5hKHBBP4FmWkNd4",
  "key14": "W1BbhnSxqr2BtPjeiEx2TApTeEt8x3kmgsYJGN5epLkNyyhTtVdTjdDoQrBh6JcC2cuuKYWR3JRGYKLFgEtNUz3",
  "key15": "5U2egyRDanbM9u6m4p2x1xdVxaXnf4ruLEA3e3eSYunPEvronxkn7zzUGgbeSAiU7HeoJ11VRS6NnKxbHK3xuggE",
  "key16": "5qpEQTfwjVhE96jQzMxPZvoZLJrXafqWaWLkvTgVtNTjvMgzWdiQxSMKwvqxQfAvtESDoA5P9PR3gprJGr3H8tLb",
  "key17": "3QoCAmsBVy8J1F5M8mTLCRBeGo3HrTV6VsxTW8WuXPkXw3VF731rr1HUytUCGyXXwyXQ9YjV6Jj8tS8dGPtzME5v",
  "key18": "5vi5iN1DeDFw2uRbzEQsn85Zh76RkTbpVrj8GNE2oBfMB2PUMhd8i6132oCar6iHiJZBfeiAtKhXXKLCNP7d6DH6",
  "key19": "5pnSRW7f49f3gQJFSj5koAB31PESG4YpoeQuvb1g8RDTRZDKjubmJJGNPyM8Pesn6CoqdgXYsjH1PBm7PDwtyL31",
  "key20": "4h6dSqNEcXP5mXtRir7oMU9MScMKC8exm5T65Xa9bEUK4w7sC9eNihXbhCdQE5npg5MWcAUHqrMJBsUQM4f7HGkX",
  "key21": "3rCBgydktfgPFmVh1JywMjZcGYdTBASKruC1HFs4yp99j2xGqjtRqsRtdQ7GjyxJEagH6XpQj1N3dHTnzgeupqAc",
  "key22": "3hHsSoR5xqQhDrHGZ2Amvgbrrp8FFhwPbsCDLkG6qK8SbGt4NU6sKQvUvXUoSv74Gv1AivKwupV8V9FpS3RT33Bu",
  "key23": "4fDj5Bt8z94oZYYvyDzZSHs51am5aJdsMYekCwYxYsT9fh2XitwaUgv7p3YaMVTPPJPKorSmPvitKCC1w8UrFKsV",
  "key24": "wvpGEL21Sm2hdivghwj4DRfA93ss75U8D1GshFsmSHJQtu3dNCaogzzo8fGaMZL2L2GtcZAP8UsKQvt23RhMHSA",
  "key25": "3BQXyYusmgKAoNwvEBsF4QfyiwabEWUWSoQ9d7c7xJd8WhWVpcHEi1bzJZ98S5XgwQSVJ9a7vFCDuA44XPCojz1W",
  "key26": "4edpaSadsNygsKCDSxS3SJFkUTULnqQd43n7A1BmqBAmLibHANNZjvDv5K7ht42bSA3qG7gPbs5G9Bjf1pSoX5Vp",
  "key27": "47nXBtajxiz1BmS3Fc13MqZ5grxgRxTNNpr2o47vHXaiTvRwpfnG9ETsLDRA1f5KpBVkqgyQGitjPHka1onzFYLt",
  "key28": "3p7Q2tf2fqswpQiRYF48SkJ56YYJZzMdXie9MpCnLYvUZbx9qtedWMqkLbqYSqQGivtCcVVcFijxNfEDC1MdCnGm",
  "key29": "4ccD1DeujUKwQFX2smHqfoXWgVbJHofXjx7M31m6KYF1rcBoAHDZHWuVuJS7zSkHw8tiT2dtrf2P4E6Ap3airS6c",
  "key30": "5H9jHiMmqPUxUN9K1qpUQz9UDA2dAwPhptsrBge5ViJDtcbnHv3TiawsdgAPiWnS6crKFuGTEVb8fDyWB1p589Cq",
  "key31": "648JcV1Evujq7uh5cyj1DRg1NmCdFQGTepy6wZ94iQAahiudcFTNJQDvLNYny151EXoayK8gvogBuBqMBLXoPZDm",
  "key32": "5tfvtA5GPEbRepzzq3RCcmQrzsz4ue4Pz7bgY7y19AaNEgTxrYwBWmNp88WTdUYpoNHYMQ3GXktmHvRKQ3trn1rD",
  "key33": "594RZQ2ZpJ55Fu5jw1aoH5uhzm2fq7EouvjTgLKJ1jdgSEUo6LFL7znfBtpwmjwNnimWnxe7sRNS9Ye8L8cVaU9B",
  "key34": "29qz2BZwdXBLoJg841HYNWKEEHGJMuTW1kcPppxrsvbJR255Zq3RhThGQy59Gd5VUS6NoCJWgwzg6zSmHA21H7LR",
  "key35": "KywmY6JTAD7rPhyszM5UyccjbCjjPaSrJFjtEqpfxehMwkdPG4y8KxNFBTaJ6z9oRB2ZKa39mAuH4MD49SfCCKg"
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
