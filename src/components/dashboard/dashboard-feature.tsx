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
    "t7NNAaeJUGzhor2hcYc94tFoTS3ACPPtmxiXENn9puCvpFp2navew38kuz3LrZ11r2RcsbWrq5KfV4HQjSJiBJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zCAu84n2JYsWy5L4xWk4LtQjf2kgJsKYQyZhmLr8QwEL8DR8TfXJ4NyqC47ro68qkdrQ55uQdfP75KWxSPfpsh",
  "key1": "2iErm63Xyvo5vjUoLDjUHPSqbzi6Qo9Do6SgJq4ifHjtEgv45DSkFXQt92f3AH8wrHB8pxbhdewkznbu139zxe9H",
  "key2": "3Qqz3UGUwxXxStndhiia2LKPKUTbVcoAu2GHAgXbbn9UGADwCbiDVLbYqgrrwK8UqUZeq8XPLYPsbUXM4fBCf1tf",
  "key3": "QBTT79QQueGtxqvLwGXpLNvU47fG6yetJBfYtQN7n2h4YiETr6Gt6BgZ4kxSdpRwwFZmKmc2TPr6duQ6oAwR1zE",
  "key4": "66pGn1oGyQzzNsyHvmyEgTEnShSEGoAj1eeLWnNS8EdNk74eah5HVpb9GUnXG6ha3cSTPbguGvK8DH7w3nxdZb6w",
  "key5": "4U67bho5cywdHESuLD1uBsuY7drv3UK1Hx9AKnac8PSij6V6Efdxj4J1y2fGmZ35FPzzE1aBpRfrZ7PAFQAvvpor",
  "key6": "3mxhonUU1o56ESxk7KZ2VrH7qHMbhqKXhuvCtPXQxN53vo6X1HPcvpZpa84iZpxrq7kx3uifPp6aYsNQU6vYVmyK",
  "key7": "4xQSEqVeZVkMw37Q8hayL2bBPP5PKNc4JWYRx31Yc7asS5qQSCZXJE3Wm9vaJLj8ViX1Vt8CTKURQriZBuCnhBEw",
  "key8": "2f5NUfRSWZNEPzdPcj3UTN83XdiMPeLUZjFkGoiQg4HsLLczkzinVXWJTxxqptW9R55mJFbEYVhRgBCtxbhHduTA",
  "key9": "3hJmGZsAuePeGGoSaLyMF3wecSoGAkWX5zXRGGFRjTL2g2k5G6prCH4nDLctBmA9wLzjcLA65AvjJyDDj7GE5Z6c",
  "key10": "DFYDeLYmnbhbcU8g9aMaQwBheYtzuwYPxX8ZFHzcjCAZDCQMmYvWxhQMur2v7PvEtRiH16vD9cCWZJJbnjdZSx5",
  "key11": "4MoNEgVLWqkUz6uXbi1fKihCVDC47f9XjXsfmEsLZFea2y6rCcyjggjXDRSMkAAxwjYtstpMYjM8AhVk4gYVcWZ6",
  "key12": "4J2TDKqRNZCkDjTgbnZsca8wUTREJBsFNRbBbb3at2vbZ2k7F9HS6KVXHj3KwvsFXv9RhM7DvBxDbFXZmKibVX78",
  "key13": "59B7JBpbLrkA7xAhdfJCEWQFcvKffQRUjHft9Ft8Ew5ZtgKKLgajccnitcuykEQvWZERTd8ab8PiBTDMpviuoHji",
  "key14": "qDz6RT2fkVfEMFqaT74w65w9ZrtWrUPowRXNQe8TmzEnjw9LtVepbqJSsYDGTcwfEcqke6eg5Pzo1H7c5BmmMVH",
  "key15": "3cAWj2DD76RUMXWTMjvSjkab1pQvhEhrznvqEKZgK6ZnDfUXwmHQMPCSRhzjT7xN5pzrKPEa43mrW6EsdMssBMuK",
  "key16": "5msBRdrqCH33BwttztpE9KMbh72uYE8DRWxMAqxJDU9mzWW53494bcqdgRLmfvMAUEzrXKVP3N1X4aPmbWw3t5Yi",
  "key17": "TGmFx1tnjMdttp4BuPXtZbHD5iJv1xqokc9VsUMUFbhs3vdkCH5ih73yA5pxJ4aytHgkMeYMoUmowv7ECHUXQRN",
  "key18": "4p1Hmhknq3nfwVihh1pDL48qmfzdnK33xic4UfDUoNeAK1iHfjAJM1NRwEEjAhvaWVMYccu9mpZzTT1H9siiBwD4",
  "key19": "3KbHcGtNCqNHiWQL4jGqL86XfVicskWzE63X4rgXm7BvHKAjHEqiDSeLP94LVCvyCsAsGytBourkXGRfKzyd5NAT",
  "key20": "28VU7BijdU7WpTfSbGQZExosYYWVvBujNpeB2iMLjTswYoTbL4j1dgHojC8b6pwC4AkttFbCCGeom3wy5CP1kLqW",
  "key21": "4bucE3Htqhdnk8qAF9acfiX3QcFA7AkU9nUXvKJNQFhBJzWDBtNu4K2GXLq1fi14iEpNE6g4jSvhAM98EmcSvvcW",
  "key22": "3RTFxtxvuW88dfibV36aUhq5U17VkYo7wp851sH9WYw5pbEpE5oZ3kwKHVFErcqG8sGsxg2nfKSLXtEBTFGs5TdP",
  "key23": "4rHzenWQgWqkXhxepALRSprW4svE9eQVMeY4D6WhTDVPkGu7eeDnxgK4uwkWXSS9goBv2S6axt2q6mMhFReSAoqU",
  "key24": "MN5BhP58otwdJ13QFqj3VqX38KvKj3zTX18cA54yQ1bBz5ai5HeH2AMRdiPFTN8pRs7Q6PkbM2qCj8F6RgLHtCY",
  "key25": "js22gJwbWBkJ6CW51NpXj5vUJdeTV8MkLJcz6y9sBsskiSHnzDtAYdWRJnJNZKLWXTHgDBz4JVfqVgojFf7Qoc5",
  "key26": "3peNRqzgLEUyxABki75XWj8ifEe55g93TLGi2NXthGpoaEUAZw7CUF9uWz3VuFsqBUDp8xxbyZUts6mYn69qorfJ",
  "key27": "2izWxD53kg1RxZh4nrMg5heHVELXKYTuxwBB4RbhNGTd8MvK1mCrjsrqhMhiFNa6Z1qyiA9owZaxmxcCerewY3U",
  "key28": "4s8XUmzHnNCBXoapJd5rrTGyNtRHGC9eramGSJugsscjwkd3HgTRCZseLTUvJ9Sj8jKrCtPBxpZ8oNwaAVd9ox3s",
  "key29": "5hUHmoaN9CdccYFtWyrSPHooeYk7DatjErcWHNrp92dntWCXBEHzs5JjW96Rksgu8YRAe7zPMmzGCNYqYjRzGqmp"
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
