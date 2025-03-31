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
    "4zcZPfunZ4bXKDq3PkkX3UMT6pVCQNi6D3qKXjtjZEjZPVY7enLjNbkCknGRHuwvTmv5PfuVy9gtzyy3vuGv8o8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJ6YwHiZ3rUEnLsZcxssMidL9MMkt8GcaBmeSzF2oYYA4R8qCAyftNq39arWCoBeBW8drsqQTDWZCEvGCxrgMqh",
  "key1": "3Va6CVvFTcnvXDHxpfU5rN1jCzLGjkaghguo8RQ9vXFuWZKsddcs2x4BNJvGedunxq6AdzayGpdNJVLVriw2nzP",
  "key2": "3zGNm7Gmd6AtUfThfgB7HaEp8j89BXKt7RzsRabjQyQrY21NHupgtuRaRXhD1yTWLb25QkmSG6tMmE36HcqSgySa",
  "key3": "2h4BnUHKnrB4hmPSKZnudtRXLMf53WBbtFm8c3VCqASTnJv7vY68zgfiTiMLmi3vqQPsSU1DCW64xHWiZUoweAY5",
  "key4": "5s3ATsbiwWYnXFNtsmXtny89uc6SQY7WEsybGdtMc48x3zaXgTUP8NKy7cPXoMhZ9hUgQDnrGQctg5X5bTSQqJyG",
  "key5": "4ZRyy4g5aR9pdfwGioBmEov4EegdfNXWK32Jun21iPtFNgZwPBVRRVEnWF4WTxqRpztt98jDrYWPmmHcevShocS3",
  "key6": "5phQsUDLp6bqjGXGu9W5fge2kwXUXVVqQMrbnesX9sCW17NMrZKMhmzgygsQjGNdHQLyvnZnnrNuyTmxAiwgMMog",
  "key7": "3v6RU4QYPtY63jAhgnJj9MGvciTdaGXftJYwhv8x8Zj1NWeEgdNe5XN31a5JeNRxj5X15RqpFBcZHbZb4GFKEjZj",
  "key8": "3hj9Vo4DiUHQn6AHLWhTCzi27nPUjqXny7capH8kw2LP5EE5jEtXDeeSVvv7x7U8BRpSkxR5UA8WvuveWRBiR2os",
  "key9": "4xerSXrMo7gF4w6PLnzn1G4c6ymkBJJZjUBxgkwCaTF2F8Jv5qe7ddHGkztiVK2U2sEBQAvmTBwvjT4fcbsFhjDE",
  "key10": "3sGPkSRqi8Q9EDTWMW9kNdwifPKhauhnwDrUgTaWnDFvxN9NT4ABbDZ9jWkoYZZj4cne7tHRSLDtNYiRzG8uPi8g",
  "key11": "3fP8bA4p5SMYjhdKTx76htn9DomTyTB4A7kPrhsdtiGvSUihfgNMZRZbHV71DoNgD63W2GnXuBW8Pwn8gnpFMheg",
  "key12": "2NsdVV7ys7r8iPw9Q2gjEHKNQfUx459nEmmky6PoPrEfpnSa6DEqZ7EyzV7qZ1s6gKAtn4hgCaNtb369fgEjis2T",
  "key13": "4bhGf62R1DJkur1rw58JcjN3ZhxWVa2pL4K31DuGHFo3VcmEZHwGvSg2MUfz5MeZvdw8Q8hQkJHPZZFt1NdH1DZT",
  "key14": "4hNBMV7wmxYEjcJkxPdrBduRkv3EgE7KiYSDMQ7ujgDgf5VNa9CwstQ5pP7h9FXM6P77TvL9BYBwY9aUgn6dfEwS",
  "key15": "3jUCk26QyhYieSx7vaLbq4oQirxTdvRPCrdmGfFee9fAifJ3m4dRNNFLYtDSW4XZAehRQVsUMekUEuv2HMq5Soy2",
  "key16": "5eDCzM8NK78mKs9LWdWmXZGwcpTKUQX2NNYyTBDXQny3ZM6wSTQ55Hc1p4SopdmswarkNrFCpHFA3f5p3omB7fxy",
  "key17": "2fh4gckYkiYFqkd8ifm37b3EVSqrEFUvRpGn5RkzUYkcW3JZ7jW8E95756fFSeRdxpapru4a5Dq1igoeMW3eiWyF",
  "key18": "3YFmzjkSXU8v7NXiUpifQxwTX41hhJUtrJfdMo6pwGFFNfLEbxwzWMzaXtZQG9kecEcpCh3P9FUqJ1tkPA4RivRs",
  "key19": "oxbu5Q4at7gpKsskNzWpomoito5Sxf39PUe3KRJHBVpxd6RLUYTuhLmAsSnem6JxzLobKagjRJHxnMFrkWh6QSf",
  "key20": "3Lvn4R8GG8WcbEPAcEgBtWn5CXRxsttuB7rwvxfiiWKw9M3uxZQQh8CXaRK6Gi7J9op9Wf391qT31gGgLooZZhtQ",
  "key21": "2K26qoxofGbXYTiUDU1GsGpviCnW886f1agyXqJ5CuwJ5GNq3YAjmRePhwjFza3MEK3B32vs2asTwhGvWrMVugYa",
  "key22": "5MqXSzi8VmxEbSF4ZsKiTY81vY1G2HMqwQc5S81tNYjrDFG8k9i96ZiLykPdVSrkRbUcV9WvTcVeESY7Zk1g1fwb",
  "key23": "2vAQr2AfaXZVDgUiE9P45gG8jCx93MsFGj1ewkT6trbrG313vHqhnjYjJomaA6EzyW63nW8goUQc2vyxzt9iLpex",
  "key24": "129eCJH9jVLDgAD176iseN7WyrvXiHzF3MegZnffp5BYqMhXLH1Mj8qwwS5kBt8TwSJ48hojs66Q8eKgVfdTgF4t",
  "key25": "gvUbzDdnv74CMzkSikPLFrqjq4vR1CxkoLxu4rH6vPsfCYSZJopaBNam5kx26FkMM3DfcZ636PCfFpkPQqematH",
  "key26": "QYEwvfrQawL2LSy3XzGcDLekxAwQgkmgEZHsmTqbpjbLZNEFGZJ9QCVoApHiTxJsoJb4x2qDTbVS2ZXahX5LBPa",
  "key27": "2a8Mh3ipBRzFwEzZXeEiZtRmJcXsk2Gi2iV4GC87CsRRy7YWjMNhVE7FP34jVjg2gPkmJBZhQekMA2KarMXiqF6t",
  "key28": "TAbToD4nT9QrVJNwxBJEE4ZpHHsrVfhSAyTnRQSUom1A7kies1nk8bcfXafmVMjv8g7Wq6e1VLWgMQFsaZ1Asz2",
  "key29": "M78xnhtXp4XvxmedDLsnZyQyJHySywJhBqM8UDb3irJiy98itVvroqggMtR6kSUmwAeAkHRfr5XZJZRUcp1996f",
  "key30": "5Ag86uyG9p4K2GBbAQN3teLYrkFMZ618eQN5bjzQXpEWbtnMyug7i6mCgLT3uRnMpba9ozJC9CiwCfwtThPBmAne",
  "key31": "5ebGSn3xnbnicksvkUR3LJBXFYGsK6fRrosRyHVfG6vaLgykw6LpSg5NAQ6aLLDeXoFfJNJQdbapg5rs2j7t94X2",
  "key32": "5czYbeERfbrvtymVWsXVoYwGc2tJNx84EF5aPD1Hkm6hUv2JsSVcJCSJeUTRvgBqg7kUAZgDBi6EM61UK131FsJR",
  "key33": "3iyYKxRinn3svXtmLTDCfRF2LzJQMmKiW3m6suYcQp56xSXyWbmf1rCJLZ1fqho4obPNszCgDUmpWScpWDdAPN5L",
  "key34": "5cqLqf5HWntvrrwTqyyqMJawGPmQgXwFLAApuTogTuwoYw1DPDHuaLVTv9Ghi4BjPCy3eM9uzPE1dbWPBSTr1ETR",
  "key35": "2JSKmTVhX8JM6jB3qNDtRs6g1WeXmZhepVPxbbGm4WkzbQjoGAfR8QctRmMzuKjCCioGUdGWRmu6ENWXoABEPV1m",
  "key36": "51z21H92aJCVgp34nkM78fXDX31Bis1kRfLHyTcjCqKsAd8Ra4QehARYwnP1facnWKQEbFujSY3KgsrpoD4g95r8",
  "key37": "4E4U2impXEKx3peMywZCuaSKvo23EJfpNBJcdNi4vhgb1smwC7SKs88hqAQEyRiYbMuwiUSdiuJRkewudcxz1F4s",
  "key38": "3mSzwVWTCzh3j5i54PJ2Vg4Ec22L5FDp9YRNx44ssjznherXXgnEyDzifazMTUBKvz3SQSpWaSYFbFQ6e9FCT39v",
  "key39": "2DzBqZDH5VnjoZNtw3B7vbpxs5eD8dMZ1M7bBTgYDSJBX3JzjyxuDkGtZ7DbngfQvZxgrtuNyrDBUKbG69QpNdCS"
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
