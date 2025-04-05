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
    "4ksc7bCEaE4G3f7PaZUh5Z7bLJUR7wstwXED9QtfuJENP2bKuuvcdCAMeCcxrMZxmxf6D723eas85Xj95dH8odPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4bz2hH95tnFrer9HvTLNQrBQxUEKmcMHCW2ywRpVtY9WRdLubMt26kHxNYcQevzUwAr4Y2Dz33hz8XEb9hjtzL",
  "key1": "3cY9MuBanckcoRf4RWA6MBA13MyL3Mz4FdnUEywFppJpuXKQSYsKWqS52Cadm5X6Qwib15rCjqwUqcEABGckycbu",
  "key2": "Rbs2gmFCUHZhAjyviRNiz6gaVSHTTbk28zG4cJyXJTx88xtPkEiKy28Ht1REGB7NhVJVQXXdsYHdWhyee3wLrfo",
  "key3": "3KU3hH1LsoHJw5YTSDd52AkXuTzyd9ebSBvXuabUnYNwgpkZozTfniCBNRGrzedi7EoyD8Jqpb8aA43DQLMrZ3vz",
  "key4": "57TAfos718XBfbPJoutLjh3VKNhzbQp9z5NP9JadgRdqa9qP1Un29PhFmd419UNV54N4r6Kf9HcFMFxwgfsv4Fbs",
  "key5": "3Dzfk1SXopt5NswreGjkdunWCi8rv225doxUVuujGhUzn4azv9e5beiJFZxksvmDP1ndvY5bk7i5zfRajYCgLUBR",
  "key6": "4jx65MR4dpMNDSrFNq8vA7zd4wFA5fZWWeLrGE1Bf8qawADwGUGtnVrXEtZQQBxjpGoY3kN5b9gdjKESDpHFQwQs",
  "key7": "HF1LghcsrN3n8p6fdxKQBDBkmyczY9FJtUouf8hcZs2ABjW3GVwqGqHmyQuPX2nB8WcdXZd5UDKjKRcgUf8VzoC",
  "key8": "5onYKSCwg32NM7WNdEkw2ENhRRBWpg6C3anBHMxHseNTzRkNZYpsC79LEyR9kBUxPJno95vCSC1ynusmHMqAyUW8",
  "key9": "67WdErqj4hbR9WCM9qJdnDNHFWhxTX9nsa7rvgBjhdp8Tk8kjo7D9izNpHhrfrjBbLyoM9LEW8Mavm1b7YrgPESF",
  "key10": "4w6biFU4RfGz8ind9yLihiM3AWAGCkZyyx5Ym4oyh9SuU7bWDdxdEcvQnV7hZAGbEAj22Z8iUEt51gzoGqBTt6uD",
  "key11": "3D1XmGaBYTAkFbVALbYmhzUsQG5PBGXQe17HyEzRySU9M9ZizTRuDG2nLSYcTudkNUKjUz4u2fWririaYkELdsQL",
  "key12": "4fumc5MPZZvabjFdUfn8h69pqcV4GsxZvJXuvu3rTScpdfKvbv7drZmu1BBQqUYex2koSJuvCji4k2V9KNk928Cm",
  "key13": "D5bj7cMN3gezEXihFRd4vuiVvUkzx9dyqMjmXi2RCu5gtLNTF3b66fpGZp4DveJ4dshZeFg3nNjKj1RiUys1SHi",
  "key14": "fGDga1no283EYDgs6gA3TAJKxZmq4SfVkEgecCPFvLp2Rgrp3eZj71NqnKDtmSqk43ERfNGDocYv7bBkb1ZuYKC",
  "key15": "4xB8PE3TzheEGXcUAxnadHULo7rsYs8mUB9RofHS8Ztq8zPkvfChiXvKgyDsfUnPum3DkNFmVGFrNraSTMtn5C5i",
  "key16": "2agAEGHSotQbdNDR5eh4wkkyV4TZTemLULKyuGMJoeb1MtNJQE3gWWVXXptUbVwhqMdWNAA5wwi7xyGJnWx4uZQ2",
  "key17": "3eyT33sczuqis1n4pmyewbMy7bpcwKj8dUyqLbXG5GKphhWzaxr5UvN3VZCjAsE41acCxtTsAB3Yxw3Grd6vb8LW",
  "key18": "239utcKKwTUYG6rtJJZEiWoBPwm9QH2WVSVc65qAN63vrhX5n3rhnQQErx9HRXHZ3VU13HgFnhkVtXoxDuF5UANv",
  "key19": "62wqzZwupn4mkyQQz98H7Pdbcuit3gr1BZwMwD8SWt7gC59v8pVgTSNDVJqUUnSzEH49HyKESbC5uswctXMFLnPL",
  "key20": "2JdhsgU6Zn2DhhpNFiaSYVpERB72yhydL8K93a3JZG8gsssJUzq7pDfakEr9TNF6d37dtTNkjpWjYgiq3qPzZJx1",
  "key21": "XJnHTTpeRBv1Cgw3Yu9ZbrjbhH81TM88z2nwxtsnM3Gpdrm9wsAXT4aM4VWYouhJ4SPcmbZ1vcav3oLrLDZNz6B",
  "key22": "3TTjmcgWvwsjuibGo2uKxFpw5ATiom1tC1FhogK6CiLjjoTNQ9b3YxPg3qKzffWytr1HcL12n2HyZFZsqQZMBbaX",
  "key23": "3PeUK7KHjjFeMANtDmkBJLiPgxfjiPN42qckcVC4CHwaWQCaMRAdKMSrUTdBVrgMen9WZdKnzwvSh6Sxt9fqgaPT",
  "key24": "3tLrsaWibHYZJFB75Ghz69G8JhwZjNkUn1kvZhW9aGSQh6kz8WAqEPHRcaWrZK3ciZXnU66ikg3anfLUrxEQT8mH",
  "key25": "2X1NTqAF3dyoRsyarj5KaxyiFWBtdtjqxZUGTyHa2wzv1i1CT1Cr17Vneyi8HBtNQvGLba5qByt8DqUJVHdTHRgv",
  "key26": "3jQwmSi8MVnDRtFFd4XgmXhJo3GHbC5htCRGLVvUQEpfWRPiDepahQNwhFsspoZT9dCzfX32xtL1KekhG3Knntkh",
  "key27": "3odFMB2uN85BL6JhN3RZPu4t88SLHMhEaYKg8JWniNscFmAnkgY83BLvqAvfuSaRCx9b8PYoJpKSNZWkG29DedBY",
  "key28": "ZohcvXPBz5fha6XNtJNTtaDTWH6cLjbTqsceTMNkZPaSkpiNFkAXBJRDmFn7tQZ8jcyeDj4bm7rp7N8EJ1D668y",
  "key29": "25jEeBLQgECKkxTdBz9BVvsSsDfBhUCC3MxHwg2zxR3MXLpUdtPqvX8t3yPBrVfessQxtVpEKswwDnstJAnwX8Gk"
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
