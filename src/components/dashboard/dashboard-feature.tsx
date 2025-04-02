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
    "4fY8JenaQGZeQeHZJKLnXuhjSb7C3F4uuwLmMV7dnDZABBmYh9ThrkbQyJQ2h3fApmSCgsFz24mUG9LM1f9fRK9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YrT9ijDe5aNKFb63mgWoWhmrE79gqoGxQgRbdjBs3Eh7Ze7R9GVU8aCKbVh8MGKJxWE7RwobzUgvjjAXv7R1MS",
  "key1": "55c7duG2cRMNHNvjCQnHHMf7TDu5FogGxfWMfk66X7VpG4f4efJa1sB7Q16jXnN6HBZB1w6DRKrEux9Vdbuo33to",
  "key2": "3Dhb9c47e7MFMnkCTG8pWfp5YjxX5ZJx9LomSWWhmAwaWnSW7DUGxjGbmkgeWHdLrUaRtFdgeWHB6qfBTrPzqm9j",
  "key3": "3oaZDwhDtJsugTUkdtx8HNABUjsSjQev7MeQSJydkjAQgGQwVWSdidtsJ7yhngiSYZCPLA155eDVEn3hLbMmudu1",
  "key4": "5svtCN2LQSN57Egptm2MvgC1xPRMYiedphwYWT3BFRTNLnwM93DKa63PJSABLxnJWHUVCFZwfSDHf2VKcryarZek",
  "key5": "x7aLVE9JyWBd6gbemDUVf1YTqHiDEyqdztHCmit1GZ6hDM6zcJLfUeopRU3xXQ5tdcaeTJiv3FnP4C8kQCJebD6",
  "key6": "525C92MWBpbd1uZwuMnNjeAfSWaeo45rkCx4cKh4bmKLyrbekifPGwnppRQWsc4ZqcMfGijW8Hfg1MdETdsLpYjW",
  "key7": "2kBKb7ynUk6FBBzPfaSARYrytstHE72i8R7iqZfdLM13YLBeddYBGDzLWxPj9hEL7v7qmbznEsadSmcwHwSL6D2i",
  "key8": "3r4xD2TkTtwFQyxzYLwFNKfLh7ozt9JYCmRebiMSMDbZHpADDxfGQuZQK4hbatYWkcxiS2b36zBE6i3wyix1goNJ",
  "key9": "4UGPnD6WMahkycaQHxNEveQ1NofXJaayCxzq8b4DDvAp8FZ3BXEq8TKFBUDsPWKpzXud8GrABadKMLFMK9Yf7wxx",
  "key10": "22dPYnDqBSEZeR9RzvLLpyUtdgiffC4xngj1nXwEFrywVP9LxbiNhxb2hj6mg9PYitxDPhg6v1FLSjyBkfaMNjuX",
  "key11": "4RGYisB58bHucPH3mcajU2u91nrRKoAyT4n1ZSVF7vMEm1dRNXw4J2ckJL7JR1nm6NeXAp21ZZspN769tDWXRMrR",
  "key12": "4QSRikM64u8vpoW9tthsDDu6zfHG1C1JjEM5ZyWq9k8BAedc6wassrSLxadruziK834KuGWYC7MKG2TewQgsprt1",
  "key13": "221YY8ApeuE6dogZhkx5mvgVZCCN2BamseeNLc528Q4ar4ezVS4e58n4DnUZUFH92ak3XuT7LFrrSF2rqEv8JpWr",
  "key14": "4o7KdgYyMNructSHqoWQJ7MEhEgPUSvNTzWagxCsvteVgv3ywUxwykg2qejrRtAcggPgLrJQrz2k9pk6pizi4x8Y",
  "key15": "4YDjdSqRUpQfzr2u3jRpxiTbn6LnPmPTrSScWADNB6wSjXQmAXSooUL6ohRifTeCNPGaBor2Nka7DDpkd86TJtmp",
  "key16": "56NEDx3w8hbfdkT181zA3H9LswgsY9tGg6WPQAVzbCbB2e9DM3PAbBBaLzMuoSaYyvkjP5gah5HpNyPsmkBMNyXr",
  "key17": "3VFGVB56jGuCM4bQG3wgEiz1PwKurpjXpcjgQff8qmkSHWy3BEUzHxqhCi4kzT7fPy4Jiwzp5N1m7f9YkPu1RWax",
  "key18": "2jzJyFCZSFcCqqPSnBGZwA5aNrvSfx5kM1189bQ7jZGhB8cNvDKhTH9c7wAXvDa3cX2UaDrMgkMH8GL1aBK36vYW",
  "key19": "5Qiy2zvJi8yGudBTYLwC3uYg4Qbs2fYYN7bk9KoEuQz6j5qov7MvhkdjrgxVwtFRab14QHG3rYAftfGtG1PnGB5X",
  "key20": "29Lv1XUw1Ucytnseb1GkHr5Qcsf1Uy9ARdkpmw46TnGgvvwQWf4gEawBK7zaTazJAfjgirAeNL5ywpKvL4Lgm9PR",
  "key21": "2uuGy7nedDoEZex7MN67qxJxb7AzCAv5LfsSfMVmVd95rctGN3KKesTypCKe65wTND5vWdUuc1cYiD6RX54yNdai",
  "key22": "RxGyF78PtiZYnkZip3RUdUJpZzEbyhKim8JpUS2K7iHUrwzRBPZGoXVuHP5wiKFwxMdb5SaUeopn6XpCK7W5QY3",
  "key23": "3Ny7MHFj1n3ugLTQVEZMjCMqoVYgmLCdsyQweTqZoKtPxqBCBNeDHjaaRNh17UwiXoF4GK526zxgzsmdGsTtPebs",
  "key24": "3ndQyFTh5eP8Q5YDJvvtYKMDimF3TmpStJUNBUQuDspTvfAYwbt5ECx36ybqhJb2knfCV8owDdZDdMAkLHxAUdm",
  "key25": "36RCsrZL81Y7iGDHztx84w88RG9k17eJiyrehi794koJj1N4ZLu3bJKEd8bFNFb8oJSGsjQtLbM2DTmARjdJca3U",
  "key26": "5xq6utiAr5iK3JXJweEmzkYx9s7RhnwuP2Kxk3yao4t1KLdqfKko3M2oCBgVyLXTD7YX9Lf2ScV2mq3hyZySoRcf",
  "key27": "aSPkRQvxj5qeoz55n6RW8GHFn4GkyxXA6WpRkSwDzJvSAvPaBQLPvmgByq9ztsHV8nhyM8NLxZE6HojRQ9Ypjko",
  "key28": "5aHgBsQU15TWpJXZu27gHc1McU9AVxbdhqtCSmSq3BkPxzni1KXrjpy6ohr415Jr4VudsDcSo2aNTJRwrpKF679Z",
  "key29": "3sZZoBn4M4mnmcqMsQxoXethUHLVFv2EzZTTh1gpjA27ozpYJFt4rn6NnEG9gsndH9nUDLmvqv43Esj9s3kzo719",
  "key30": "5qHjpQZm4RVo4qNPvvn97KvEnnKKWH9LjyrKVTWygjaB29Hdgt1L4uE4YDNwQsywd6BYJ11jb9GQecrLuG9YLNkG",
  "key31": "2np8XTXNLKrbMqxRKXrLt1uvUFjYQYkw7ZYHeQo2y62KVuYyi4ZTWrcv3CwWGwgEWLrGWAhgzA68MJ92b5cdsPeb",
  "key32": "hFKxcVhsgapLByYhRmBh69P3KK4c8fCgLMhFnTCCGFsATRq9xXFM9k2oZqXfU2akfkKUUjbeW6szoUgURUnXGe2",
  "key33": "3Dk6ikhgXt4v5KCGLdLkLjRXmV3pPdcWmec4RznEqenbZcCduvxxgpagEGoA7R8zzHztHAf9rc8pnxii4TW7aifJ",
  "key34": "21K7GJxgWY5ug7ybudvZBCwwBVzTU5BLJ9ZVYujh2c7fT8z67CsHw7RAndwsWwpYseQBVcZFSYdFckTPji3jm8zf",
  "key35": "3ZLNg4rk5AfcRRu7YbPgr88yhqNvKu6wFYzMENgvrcVzqfrEB3X9ncAPtTQiMaGgG86urQbAPTeBw8tyMDdtTvK9",
  "key36": "59c2brGk5KA8zq6LpyrifRbn6DG8S8CaXQr247JDwKY1ZkmCKMZ6p8vRj7QPNbLCuGGm5BJXcTmETSMxa4pUpfb7",
  "key37": "26K7QuEYeJJE69MtGKcPZoBArzBExgtmXF6zs8BcFRJ6dwoU2HRyFZkRivoH7mZ7YQF2nVeQW7tSdzzoTPJH8BXc",
  "key38": "45Qg656j4xvNHCbEZ8hVH7B1qMGD5n2hVQs5k35NGAAQ8GN5S1VY1XcbJ4nohhJY7pwTZWgBiwqKyu15jf9aUUo5",
  "key39": "3dMidLgcgSFWMuU4MQiTxNUcttyUUCWQiYgjKxhTg8XaTqz2gJSEwSxFJh86HwDb6rb3WXBTswfEtNAwkZrDAoSb",
  "key40": "Ty5t77pbea8UKCgM9vaA5e9dEK6GcDaj3PRD45TwUEH1K8MRTkCgFoCCxwEFcUy5svv5Xz4nqxWsCmEn72ynwuS",
  "key41": "48pG4JmSyhXGwfN3BU6q3Dx1emRiVmE9jMEVPuAGzNYJrxp61Mu6keKGJJJFNtskMXuv2rFumoTvDQndJWEoQLA6",
  "key42": "2vzypaTHpRG2e8m4WfNw3CwJpBU8woCWtqzzBwh13J2e6Qu1LTX6CHznA2iDDeHyakcsYMVrXWJZm66oYNw6oypV"
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
