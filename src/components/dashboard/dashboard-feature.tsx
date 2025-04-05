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
    "26fZSwudgZwwviAcny8MjBHN5y1qakuURnpXYeqsc3ZHtHyu772wr4bYUZscB44AabJ8zT5wbn8apfprqLPxLUBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7r3VyK3HrWb6aMCBwgXzRLiNYeb85FtWJVvhthZiFaN4vQxkBmuMLdvRCxg3PiCeL29ST7REzPBBa4MaBCMXAR",
  "key1": "4EWzmTATCUQKX9uJdNz41Y7aQcaFKQCf1BtFgHs4ToQ7JXFxZpfBhwAMhkchVtGDPWXF2MN4MN2PqRKXkwpVGwTy",
  "key2": "2YwbKrjjz5Lb5eR5e9Q7twNwxLisW4jSKn19QkBmbpNXu8eSWCbxWBMFEnYBoDMQf2sfFwHPXhsWvjyDdPvhD75n",
  "key3": "4HN8SP3cPhZEjoVrG8jbiU1kKe18m4u4np93MnV2RdXw2mraUNePFYkU3n1SKYQcgEKT1Uag4BZ3oj2p7fAHhuxd",
  "key4": "KG8ZfSZCK3DHe5Eysf7beqQeWJ7KymqbEL5tHPc97dzyABN96szrGLijLmi9MGZnxZ37omkganDJcLQ8gsjxgKZ",
  "key5": "26t99vKgMPXyVo9KzW6FKEBM9aJnj8xeQGL1bcWhAvWVZ4AJCXhYYxEFA21yZ7msUEJfE3bh3J8FtAzzxBwqjSAK",
  "key6": "5BF5GkkQXuodBTxqFosAekaDNdnMnCTCAW4U4x2eiMbgVWuj8Fsq3U58JDKXvXRLjpf6Kt14B3R5T456K11GsJGJ",
  "key7": "4ZKdhwLpvns79VButQdtusFd6uzRj4Q7zHAPg47hgtTg8y2GEsXwHTZYn8NpENr1z6GKmoEvQuexc536x3Md3sCN",
  "key8": "5wAiFGdrzRfcjmY423RiUynJuNUrCFoRjivYyZBHnC9HQBATtcEd1wCECRf9ZwPCFQhvT6e7sPN31KD6PAVHM8P3",
  "key9": "5fqXAqbFdGsK5HW8ETukpiQhDBoQdjFvgHNT3NNZutgudWpptF7fCTwLL2obJ2LCRLtxv9WbYonY7y6v8rG3NZmL",
  "key10": "5P6m47hxb9oHvKEuMxdmTZsNR3V85FZGLf44Cf3w9hQK4QrtYyFWcaVHTM5anWi5Q7Pym1S3m1QHVTgTsmevmDjj",
  "key11": "277zgxRZEcqvxvXEXGGL5zbeHpms4Hx7wuXJxPG21Em3SpuAGTBr2uWN9K5R3fDvmRSLPWdgmqECNmoo49TVBnqs",
  "key12": "4WXwtcZmiG2zBq5N99G6XtxxBJkNQ1et3vk2BWTUd53Afy34o8cHfoBusy23tju1c5Gas8bj6EhTfEmgr5EeJ2Dv",
  "key13": "SP8vPP16ZvmK7YLEyWqKxNteLUNntMoDRCjAZvrUBRPbeAXi5nSpetzEG3D8jd8MjVLr245RfnvSyLy417xMsbe",
  "key14": "5MdtFog6T6nAmmqrCAfFns1o74XwKPWFH446aciX8wU2XefXVUHibmmw1betUKmNScrX1hnP3Yr8Y2bSbC3Z8Zn2",
  "key15": "3CjMEgu82CXAeEcX34rcaccrnY67chTGtanxSYqciJtCSCdAW5jx8KexZBvbBgWWNzCtB1iG97dQtXWRUbx7mAed",
  "key16": "wbqGysP3XooUmu21ziUg26iBuJhZ7upaD9gBZJEyFqZ6AqzwA8u7BCCfTL85Af6v6EH3BSvPDw161gEA4WoApdw",
  "key17": "4taFo1bxDv2fB2rVoiwaNvLrPdniAGmNaZGXvUVXzCT8xi9YJJj9NTNLnPCi2URUvNwcYkeTbDLiSuCKBLWiMLgK",
  "key18": "2TCs5f2J2QpRsW4xikRidzeKoSiwMYrqeTZSxRG8YTF8yMzYWNDt8Bsvvvoyui8q5w268RsLmgH1cVGXkV2TmV6d",
  "key19": "EFvGjfqqz4jCBjNZpVJ3PZU76115JXmpMbrrN43vuY7nkaGALUE47rPcxrvXRfBz4iHDfUW3PYXSYmMuBGdU5nx",
  "key20": "4fbCTjtrcFgGdNA3tVFd9Gb8S1gDz83WAZQ1vmr4BAc739ShA1NtcyHkdAPNN3pzEH1ibYvoygLVwUv4g6eHnFbz",
  "key21": "4hgmZKrCRffhnU6S9axs6yjeKMtpeU1DMRVG3Yd7GHXsdZoZupnaaRpA2HGjGaMBNc9paa7u499PKFPFSfBNLdTh",
  "key22": "5KLRPw9xBoCumiKX4v4pL5jzdsqFdCTaApKrRvmL4fEa8CETSVQFogfGn1qeswL42tNfeABMDxQV8UjmeZ79tJwg",
  "key23": "rmSgdSfmk5wjrAzLPZpskASTzivBih6ytF7UcHPoZf1HdqzZ5RH3X1oimPNcPWdHBh3SgGutQax3RFFMJCYxWFu",
  "key24": "63WUqJsQqEtSCuYXBFffm8SXUhgNMTmgeuix752whfM7LFDp6mHwVritsB7VKhXiVABRBLstVDk11VYwqtXoqR4S",
  "key25": "319VP7B78mXKSLUMPU3LQcBYnCD57ZK7WfVLmooJrmUwh96VvoervGSDFosqznNYrwPgjkG21pbygmwrWkjApx3G",
  "key26": "3DjewQEdSvtZs3eWoHfRyNB55N7fVFeS5prWZEz4Ppbp2fvbS13es84kecSDd71NwfTwTU3wzwNaseE9sJgvu6xh",
  "key27": "4yb5gSzxFvtWHAB4gDGz2uBzysUjFdtk1YnTXsCHPo5BNmVnrvmS9LeZrhLYHRoWTSqs8dQvCTLK9cdekNEWgoMN",
  "key28": "4haEVMoFfKPSxA6bqFvAdCGU6ZR5UWa9UaybPdu5SeEyXZbUd8L1ZSFr8pNxM9zZr4aMeUrxcEjGWSq5x9Mz1P6v",
  "key29": "4FSgmKgPH1f5E6TWZBAY58ki249d6D3xowABxQ5qAXb4Qw3E2hAC2kTzZAYoZ57hFXNuPHdsnUfMR6A7LEmrDB9v",
  "key30": "3vSffMT4tmiMtTfzXFjbzRbkiCGFDF3sH6YwFWUXNrk69GgFwDcdnSdZjwV1KzSQ3ntFg4AtozGEfbaes61zsdSR",
  "key31": "4564ajhkvCqXPwAgmoMk2W7826ApBHNRFey5YdnFNcJgvDXvmQCQ2V46b4Du8R4o431CAzRKvLYggbJ57gUQ3Mzm",
  "key32": "4cHH7b4rquhSX3rzVy48h5REUNfhkAr71LJfgD4TofJ7rQnQMixootaWvpwWNW29rRKXtgUt7bW5a4ZyLJ4TG3xS",
  "key33": "2VwQc2RLEUnAmTRsq9ChUfSqjW75sUezbtzFRbxUnj9MRvUEJ8NW25KDWSruu5VfvxugTXsZiCBEQRo8uPU9r6zf",
  "key34": "2EHz7gRmgk9ZDo8V3dNcyt9Je5ZsuA9sfkcnYTQeVASjoa4Qehwfirimxe4LbUWi2bTqjDcy7FZoCWzgbT2119iT",
  "key35": "2ucUojpW8wBkQLAmE8jgK5DYQknq5okc5NbD3CNhVRHx2jCDuXoMKL7DWn3F2hbrewmTDJ9q56HYkhpcQ73PLnqk",
  "key36": "3vr5ho8yxUdwSBhg7vrKGvVn5nuxPAgNdRbJHNRAGrErCJ4NsqAjD14ejjuH49NxtAbzTJap4eC8UstQ5JTLZ8yG",
  "key37": "5sMdzapr9WBF8WdprkVzCqvjwvrsEQSmRxXaa3b1838EmkDJZ9e4b2an2YySwvwyWJGG4NMgt31b7nVAdfE6gShZ",
  "key38": "3Wx3hvvqnYKFYfoUUn6hosxf6mYBySb1CKSxoBS55DAs65HTyFMvh7QxMjXTN5r1Gm4fd8vs6mLQjAqjy4ZA5GKq",
  "key39": "4q8KK7ujZLDAtaC1prRoje7QJyEZrwixkDwVjNtPQQseVdNKrNJDpZYZhRNqZXzQgytkJxgayGEHLEq8hgzNusY3",
  "key40": "3t4zB9ZLK94NZ1Q15U1unnU6KLmnLB9tQfJV1dMaqia6kJwBZ1LQbyzzNRPKJVKezZVGJWcHKbFQGhn896GcWHDW",
  "key41": "4aFJ6jJYNQAAdipiPkpxpUVCM7kZGZXXgAEWMopzRKQ9SzgWrZeyt93gqDJffrhdUtqT3PRc6VrHhv4Xebo9kVWR",
  "key42": "5duBWqKRmYCwjVqQgtEkofUGbRstBiqZxmQd5svG6Fu1TcNnRvXt6jSc2oAxKTymkCocyUrfCACMHeq8NSbyMUNU",
  "key43": "5zYRQ6GDUZQafe5HSXDc7ktz1xzw6cRfbR9Ndvz9L9RPQjsSv5x1nt7XeU56D8XXHnpGX6UPxZYj5aHuJYyiB2Mf",
  "key44": "2VyLL65AWmpkNUsVi8mcLTwkKwayydVYNF72oTYMwF4AtR1Y5GN28Vx5TGUxVnQHXT46cQPvVNBCo8jCKdzq1m18"
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
