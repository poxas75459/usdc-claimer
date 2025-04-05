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
    "2YPCQ4kbNjKC22kLa2RGiU7xYsciJ3SatFmR3azcvB9rgWySVsqY2Kn4PdARNTTpEGYaSBnJnrMcJAapaipMQFK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tY67FELbviQ9KyTzYcU1yQPMQr6iH5nS2V5FQjba25TQ1nFKLdsP8FxVKs4imRahxw9tTuRZ15UoEPGWQDztwBq",
  "key1": "9ah6JCYV1EWzPviZRqsvNUPS9Gzvbt6VF2tvs1kEC2juxzHU9aP6PzCpckjKu3fq439TRfQSKCNn1MqitBPPSqc",
  "key2": "3DtYirZiRwTpDz8jUPzc7gqJ37g4Tg5mw22m2WSsq83QJXBZm2RY3uiymynXC7U8wuBNwptfSEDXW3oYzhJakYco",
  "key3": "57CDchHHuGYmfxLUfjMGBfkmcHY6eNWPeQcobEUkYSivFVCKebRKXv6uPJ7aqDzmBZBY2LbqYhQ7MNKumw4YdhFc",
  "key4": "3CcpP4tVXmL9ni8fAh9NBZcgJo7M7DKGW4umZ5cF98TE84FYjMwKsiEvVSWdxM8U32dWWFxJMaxffmMQwpeaoLzR",
  "key5": "4YmBGJohbp7ZH4qH9P2pGwtsLYbq9R2dD78QCBcM4JFCShGPr8fQC8gjXciGReHvbnfjjkNFXsDmdiyW23xaPMpN",
  "key6": "23U63hPwUT1uEndQuzjuMLsKBcnVyaipwmToxPTYASGbnSX46F3y5J4Qg36Vi663Syc72xh2S3qnzZSsFPDHmiio",
  "key7": "tvyiuEXYYuh7QXAftektDaKKQXRuy646iNb68p3DjUUak3AMQyBWyz83GdoU4CokAhCKxxdFzYXdrHUFnQhMpE8",
  "key8": "5JCAqfqsXxK9t6oUVFoyY2aq9R39fyvtaa8VR2JNvmrKxLjE9QrXoUffrdeLeH9so6h3dBahptjZgmntzuG24AWb",
  "key9": "3ALAgjwuTxAS4XZAdAJehLqpuGNEu5xSG96hyv1CLB2v4aJK4FK7g5U3mNopw4x6mx2PUpXp4zs9QDmKfwNpKLY1",
  "key10": "4RjzyEhbYzAvmPcc3am9vUoWDuXqfcigqJgvkpWu2tGnUye5AVNuoR48utsrCg3Q1rguh94MnonBeCvFwKcid8cD",
  "key11": "4n5q85aWgoHGYucdLUs8Eh9UwwkqGepEenRY5vjmLXRSuQ5mi99GDV7Vbr2bLZSqVndEw1xHs6ECoq2wEet6WrwD",
  "key12": "2CdCBr6BVyKX8RiDJdZ4odVdTxMiGzHqe4A1hkrLXzsSopwdzmqthypBhsbCWeSwUqVoAP3eggEu1VuRZr2vHdHU",
  "key13": "3uMCiDxanYgDcRJqQ9wSzRJcU89JQPpS2yVnYbB7sKK4tNnX5R5z4NjHJ3RbJui1WZ8zq2hXVdjY8UBXUAyRU7oU",
  "key14": "VRmczGT7tx7uBuY4aQH69sKfes7TqK5iA5fFnVjAQ4vvScMAdvLwtTGc9gG7BjnYfFmCNwhTYXbb9M8YYqgtGVN",
  "key15": "syo9HB31Ke6rKCWNCazHyaYB59f3TTvqaR98ggW8SLJSvzFGAwyL8RiLd2v874uphPsj7tchMCfPLg5NgQ1ezJy",
  "key16": "25WTBZuqrp7oHfDWVij79NgsYB7WkDYwfixQph7ZUaS2SYwBe9Cr3ZQEWdoxqBTwMuyCn8t7veDcrp3rTajtr3tz",
  "key17": "4mWy5CcJGnNPBVjrjMSktj5NS327QSFJpitEnesRVPM5puNc82g3HPWzSTamU5LgYXiqbYbFu9RiYzx2Fc8E2csG",
  "key18": "3Xpvm6yEmRXUyySRUKiLGpyAzoZiXwa9GUXNTPD4G9vNi1SPpKgQvhgqg7VjhzcjysPVvNGRsW7ywLLirXLs5Gic",
  "key19": "5ymZNysfWD3kETKJ2x48L1ZG4cLCX8uapMi5HwaUKV1t7mHxNmvTGd5YHe83Gev9h8dBDVpR9KtpYeA6WvUWjvHK",
  "key20": "2BkgqvymHJgfjxpNBtQSPLVL3qKua9kEA82CCRaGE1PGmpZ7nGJC5PGcE7kampBKtzarquEz5oCVrwR9dTEkBM6P",
  "key21": "5sRtARuN37pAjpse1cHJXG3mXPW5Gk2ScSu236ryQUkoAkztgMo9acyti1aTERnaYiUv8NSzu5LpGxnU9voqVs14",
  "key22": "2tLY3JoeSrzdVR1vH14nZv1S9ddwc8CoCph9fQy54BgRM669qBp3njpMaPwZYKptavg5ibBZvbePKybvZKpuxE13",
  "key23": "62HMJYBtYTowBm8AGPm7jPfuWD4K4LKXxXtvBqsWWxkfn8CHLAd68v1s9s3eriW7N5ZTmDqNtHrRVMbpUy2bRW3w",
  "key24": "yKAxCN9r9vBGvWNM8Am5E4fJKeaPMbJi6QMHTH5MGYQC4Yh8QdaudCYjkGzAP9nzbezJFePREs7f4npW9b1LjiC",
  "key25": "5JpgriCkULviQPbp4Y2ucdj3zmEGEDjMebbGDrAC6dGgtbRiFHJHsN8GLw4kKfR6nPxdBsoDrBdYFkMnR6hB91DH",
  "key26": "2BC8umBeBjtR6JWTbxUCfXQQ6xYDgF5rAKYcc21UefPm1wQcrQijX9brzCwFqRD2zBBMDhrWPg2TAK6YeDKHAJQ",
  "key27": "2nQzAY1Br4C89qWGLVWqNZpipKn9ZmFjzhUeBdZVTZy68yqMitm9o8ZxCikLHwP3HXuVEjaFPysEF7X5iJehi3WZ",
  "key28": "j3DufYZgYewwvHGvyRns6Phg5hkRXqGR2mxrhLvYryusATxmfx6n8WsjRKyvPioebsfMo5gVR47NFeSHwSGUbMw",
  "key29": "2gtekSsvtzfdVvPpJjvqeb6FqcdHdyks4BDyHoRpSg6LBpTk2CbkpXNp2FwAUr54tyzmSMXW53FKrUMvXrSBqxih",
  "key30": "23vpLPVEwRgDESNJG86PcNUicR5KP1S5dV1kARQqHb1Ufmdpt26ALwKGkmhdptSvopZQFBVtjJp7CHpMQMaKSNYX",
  "key31": "2kbrtvJtdcog6zxFH9fgXoCN8VwH1vDEDDEXzuY3TLg86axfV8baJRXXN5F1KxG9mkYX4xK7Do8MgRVr4jPcTJxN",
  "key32": "3dj8DdMiaYVi34LRnJimdNhw6vLRJ7RhiFp7xRspdNTjLY7dLK9poDrwVsZv8duj2QBhGeRfhFTX9GQMeCy8QS4z",
  "key33": "57ohCX3v9mhpHmE8GKXz5CZ9jhB2qJJGDuy9JCC4P9XCErjTC8DBnbceHosJf3n4pEstsGKcSSFTcVY35k9JukmZ",
  "key34": "66KQ8bgoSCWmiwK4t7QZ2p9QqhNnkBtNyXvEXXHX1YdDHbfSfdxevzyAXSymBbfCm3fME6GYtettFjcRujt9yusp",
  "key35": "Y2qzBbPyhpbrj4hA4YACixhTXD6tD7XkVntd8yuTEWz1Vm5rPXWgCHpJWaKNz4kjX2dsVyXtzAV8pSGm1yptLGF",
  "key36": "v5XX9UdepP3DFw2wVri7bs8BwPm8Bc9Pqz3mMF2jMQPSpo86MankVa9ucnFZhdJFwaxLL4AWbGe6GGpaq8eWhFo",
  "key37": "5V8sKa4drxtSU5cCagYU7Bz7txTjkPejPcffLjVuNthWXQ1favPD4j8ka2bDJ4BF3h5DupnpVeHYBLjTK7KBvPid",
  "key38": "643jjPfEZ3kKWB5ukrx7N5UScbgosva6R956ih36hYwy8qVmSnx2qy3c13nrXGY1GLfhDbW5rmFJ9ZaFzcSC4iw9",
  "key39": "58WrCPwnD44egDmnB665b9tTso1gyqgqe4yQ6qpVAsHKRBdroZd1XJBzdbgHinXfh3KbLsJLYxQHQUpBS7EgTyDn",
  "key40": "24fErzV3aSSz6yRbbqnUCgtFU9hFsGF6tNnKBLhFKJ6mqAAb3PjJ8nFQhLdTM6XpRqbJkAwvGVQgtEj3vTo1ch4h",
  "key41": "5u8R4gYTgZJk4XS3xJpJouGbNtk6gDNJ6Tbm4U2T5wkXac2ZrT1FSjVUeKvUAB6a4zvQihpy4sawzoZJpM3qJBWh",
  "key42": "do6eDWg7TvWSBZetgiLwWjtVwJwERpHy3JBZV3t1brqCMDYcoamEF2L2SGyoLuakjR33Wed453xFFA6asaiumeP",
  "key43": "3GpxZ2pEEa3XQbPCpfbK7RFKBffdbMGL98aLJGbJNjkRaevNHCr9PR7HbDY3BkRjhhny5v3vFxGt7m1NqHgqFUJC",
  "key44": "2QH9zxSN3Xyy2jshDBfYtgKeLNVYxawzkQZi7KnYedDudwUPDVPgTdXxC8V4Tqht5TzNrrXznEoJ6vbwRb47tafY",
  "key45": "5UNZWvukkMsTaiLi7eVSe3GsL7iyg5CtV6pX7hrMeEQicbMdqi5VV3BuBW5gLXjthb9aVYn94rpETqiMA3rJkWKn",
  "key46": "2W5VxjY5yiCVEzm2fbQHyMJVBGjKR4359MgWA3EMW56F8V6SLCMmVy52ZByfhuZYkuR57g9gvcet4eCx9cDBrSXw",
  "key47": "32CU5VHopPkQ573ivBkCYes53kjzGk4C2beU1GmadiryWcyH5UVaz2PWqtDYotkXgZcX7afwiZb3cwZnLqDjsU8z",
  "key48": "5oSrETDED3qscNESnXeFdtnYQVCiFE6j8WjeUGiZKNFiftvMKJ9uLeAzhgYK7UBw25A93dPqVYxTMUKzaMzHdeAT",
  "key49": "4R1inEQQU8zRGfGdaF5qrZdW5UnS6mnt5gLrcbwJcCmmW7tttGzvU835vgP4AgRuyEF4tsPJVxQq9rFLiNCJ3Zdk"
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
