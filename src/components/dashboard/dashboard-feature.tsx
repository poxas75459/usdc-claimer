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
    "CN3wdQcaq9DJQhhSjN6A9HVGNYEh6DbbSZiyoNn3MBPkkBozHUTkcWjPArJkCcdH7yqemdz6HpRnHtju3HyqBog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAjZ8TraBoRZTidyc6HcDcjqU1iRHLZL9uXEcWA6yTm2yzkyM5dbAyFdfxvvwf71PPwqqiavRW7M3usAEeYAeHW",
  "key1": "2yNvJznwH6baqZRpQjF7TjfCTQHc4kmZrX1GsayJRviERZn5uanqQPJoQgpVkVUvEBbHH8kN2B7AjSzFrKNXjvm4",
  "key2": "4gnPvFGJqg1kfMGAVJtL2MHAoL4euAjeL4jorD7xDmektD91FYzrpcBfDGAA8tuf2ZuEzUGjV9CisgxcgS3JjjJv",
  "key3": "2vznbzLR9WF7UQ79TST8iB9tzTif7GMLf2RKVPbdaCgrwXifgyBgoyNHRUEWeBocVjS1LxFUSV9JmFii1BknnArp",
  "key4": "5xgtid9jkLx1wKMyVVZGFBLKUCwBdH46WpmKBAeFWa1vU4kqwexTYa5u9WUJuoQAY9FJ5Mdi4ZZqLkDHWNkfuMTK",
  "key5": "4R6nQrMxgWRgK7PhThmHtXLfgCUo4SFp1QXkj6ebN5Lp5kuKPosVHux5o7fVJHuUb813LPEKaf39YWTrb8fC2MmR",
  "key6": "AhVu7TE5ZhEFsrVs3GiToeoTdVubad5apbw71mRUYvknqwdCufLUDSCrpVdQnDDrfUPBfT6McBo63cUs3nvQ9kd",
  "key7": "4QsUmmhBPrJKH39nkKZKHxrzW6bLhudKCwUjoYQEdPSY7wKGHkR9oQbE5ChmpCMcMLeGkbsUXLgFLdHhCcAKFeo2",
  "key8": "3ZGUuGL5PnrQ9H4tWmseG3pioQs1HCHWeauTecNG6JhpDkQsbKLx1aCeu57Xses3Viaimq3rrAxwJhkqK87fiqcu",
  "key9": "5Zp8sNcwCLGCdUgC7BKkRoryg2QRbDNdnB4tp6n5Nxn7W2ePYHhPxGuoxxwhe5v4Zs5VyxL8PfzTRDDiYCCbaeh7",
  "key10": "54LyojchYFebqM7h3jt6Q63NtRXKCoseTuMLeU6M51Dzw4Z1oyVegPk9q3dm346u4K9H2xthrrtnHCuArWwwFNsC",
  "key11": "24PL15XaMpkkeZreasTrgc3tSoZGfeuhndPFvrnAe1tr6BU4g6YZh1ao6ykxJTddsRDGT66Qat6vFTp7YQfxcou3",
  "key12": "3Rs1M8gTRLRjTPmndi2A9doHCXXAjE1UQcDLQ7BKUvLgFa3GBSeWAEsCcqPCX5crQh6SwhTdyDsNt1b2sXsaZ4Jb",
  "key13": "4QXSXapctpCTnUq5kSjyd833mbwjVVygVS6iXi6CmzT2DFM4vwJs83GkDQRymECETWL9TmXsXAZzDbHAaRSYRSM2",
  "key14": "2HP52a6BV3jJKs2n7bqbD79bLBwRnPayhUwTQ5NaozZD8ioKLqsuaT2Qwry4dP1zQj2mJA6wGsX6dDmK2XEFG7dS",
  "key15": "2LYYCcayQWRWV8ZDi6SQoNqjbaWGmvpCE3YtNxCD5G1ELibEAXKRM1QgAGFgn3g93mnmJasQUMMaBu8KvECF3Dkm",
  "key16": "5EVccmoizeJJQGLJSFUzZqPXYWUGw6oTJ136G2oNBwpbdvifctU4FqynBvsf8kmVu8BsiFHRaJywai6TsfxrzPjH",
  "key17": "521yJttLcyjqbTVJLQ3TFGw5y2RcVc8DmgKTjjjKg5hT8AecYRABmquJsW3oAdqQDi3nxipeHGoA6pVY4jnZDHzB",
  "key18": "5pmuwzSD7gjeK785L9dR2apowy4M65SNJnPfWKQkWNvgLFNuU7e7eiCsnUgeuyDzRwv9RAogX6EGDtiC1QXLJpdd",
  "key19": "3Fe2hxfWhhU5MabzLxLatMtoZwyma4f7ap5cA6zoVpBFqQhmCobjptot5DqdZk4ZfmKr2GzWvjYN1Xb5oRGyctbh",
  "key20": "RBsPbeMYiUXP1tufmWHcFN12WnLZJzHHSUNkoMseckWMLY4mBd45LQCYKE4btvYzMwXfUoFLL9W9CpjmKT7H5zm",
  "key21": "5HAZ3V4XFoyW9QAEbtMumVMvNDmkm1fgjiGpRnswftU5AD9MnCUtnhXFMEMZWZCH4FRWeHuVXBYLKqJE3tiVpKG1",
  "key22": "dN4aHB5F3Ght6pPLWEPkfuus7sceUv5b33nSfqxXntH9y82k3oPhxPWmJ4gizvPWQVPnNEsYtCaNWhY6Xoq6RZC",
  "key23": "4FaAddKr9B3Ft36UrmJyJJ5d9qUzeQKjsZJYruXjzkhzHBue7JNNCiyhVd6n2wHwWnjEkGMK7V8BkfLruMdjQwb3",
  "key24": "89WyC1zMGxm9todLurzZ2o6fVNvbqC4QLrQvU4HKRXeVmMdgbDZjUXHCD5Q3u2GYJFShSPU9t9F6rsRDGZh9MbL",
  "key25": "5J5eQqBuXXXA3f3bC6gMEHoCusxwaQUQcXPXSv5QArqUzxGGGo7kqv4CqdgM37drhQco6TtvCv3Pk4ePtD1mbToA",
  "key26": "4KxxmzTJE9kowHbYktzaszWwGkDpawjULKaruL8WoizumVWRR6kAARqXLYvpuohggPFn5NLCD8in7p46bXpB6ncC",
  "key27": "vhQvVMaxGcC4F9NHnjHxmFdYKfrBNe4jCHjk9iwXbZmhJNqP1X1EwAyJwfY6qpSqqd9GAc93raECge98TnKgtZr",
  "key28": "2g8QBrqN8f7kw8P9SNNDWne6Vc1sVH7C3oRmoHoy7EgwG1xvY9QwmpSKRB5WCtavAm2jmy914ziyQk76Jn1HGPCF",
  "key29": "3tcnakShi4w6fSBVrAqvRQFmske6G8Ejs7hJDApCpL8GoBizJZn1upaknVR5sSJDMMQhXfWXZzH7aoULinZshvdN",
  "key30": "3fsbwtVbLiA4trE2jQoCcb5bxe6KHbj1SdmXHFQXkJ8ogYUNZKqPvfdkKbUNP7PtE7eBrXqqaN3ALjrFJxeSaear",
  "key31": "vCLxpVuWS7RGJAJ8bkeFJzxMnb7q2AUdL5FXCSH3xt6oG5jwb983DBpjgyoedRhrgq2weoc62BANttj7yBFb5ZW",
  "key32": "BnQnJPBSyMtU7LQwddc7vf1ZrLyjDRTUPSsMaw6bxnxuMhnSkx5BQ9RqcLSxy2HN4n7cj62xvN7e42PHrgkhdae",
  "key33": "5nDhf15FZeHDPFZA6gLH5AiM99NgvHXyj43g3bKpXy8CFDCfrkxcXsZQ98zw8rZ39AmMeDYtzKQhEGhtoatr35pt",
  "key34": "5GZmbPAnmKnKbFbJDQPpzR3Z87aEcR2uYtEigd5MeJ83Afm4fZMhYV7VZXPZWpEfrRjbT4rrsBuQKnPk6jbPVvb3",
  "key35": "5WL6WoMk7GdP1WzSs7bjGppuyrDRZz2wVCKpPr5Vw78LyrFVfQetPZFE8xyoCu5gTmjsGM8iVJcu3JrVWA7KMECU",
  "key36": "3KpDnXenJ2vsGn7cGHeR4LaiHXHyRvddnNGT54vvkEmM7YAyzM2MRQLuqkfhQQoeoDFJ72bRip4Yiv8tC7f6AULx",
  "key37": "KnPXZQfNCjKSdAYvUieK9wf4g8SqH9yW5BxPsZrHNd4kVcuMtfLLjdXxrHm3Vyf2pLv2ArS7XL28tcsKGiQMSjG",
  "key38": "2PAkZsSjPoY21UgnRmgtzdp1UEmpXEfeM8P5QMDce41xuENXQMAXLRiMFVB9aJLpZv5fXjQoTf8NmDC7Ags4VGaG",
  "key39": "4HgQxvhPvHohph7wdNjnx8UAxX5nxN3wtqRxDxLsYoEQhGxQ5G4Nhs9cShiUW3n4mkBwFTXZb7aRUVWpHbRDLdnS",
  "key40": "UWgaeaLW5ZN4VsvgZCTp6ZAxnmajtVo2iRqNxcvZmzWBYv8NJvwXvGFkbRBmBh2vyWddsi64vz3di82hW1zg2iT",
  "key41": "4YckGWKgs9gi2mv3bmS4HvocPh3LEyYj9MKnsR5MJz1iVmbpwqaiigDqq4yy8B5JyXogyb7epZmJo9JH1zh4bLY2"
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
