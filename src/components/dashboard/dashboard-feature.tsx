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
    "21SddJDpJ9WpAu1WviZ2qeBQtvQ2nm91bvNaWoCf2g26L9s3WX1asFxTNmuA7hjSa6hxjUTqGqgXFXrz5owpucbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orC8AM1WrbZLHkERv8M2QDnwfTn2BgdGr1NNbEUVuQTXht4Zd3WM7QwPQRCUETQt1jJSbd76hmC3U5guWhhWxYJ",
  "key1": "2hHiyH7Kt85USisBT6Ljjxru931iAQC8XG5hAeXrjbQ5jDa9HHf7YdywgPCRqFwFcJTRuA8wLKjzvi4SVtWiM6s7",
  "key2": "4hdLRbpTg2CevppHu7aokwUGyS4P4c47TYotKEvqzhwCrQALNaX6wLSe95E5QmPRdGyPGU9jq2GGJExrrzm3tJBK",
  "key3": "4VMrbmTncgCKSx25PqJbszKkcxUh6QXu8WRNj8B2RW8m45v7upF5u8qDhZWwVcnZytY85rN5C5q9C5SkyrpvBHTV",
  "key4": "3Q8bz9o4f3vndRpitsdPbYQcXJsq1YeUNsiwSvBqBsiFED7LRdU1Vui8KE16biAew3WTK8Y8ZoJwT6VM5RTEztgE",
  "key5": "4jFi5H7m3u6wc8dQ3cQPkK6qD863iBkhUn1JAaQB2qk2czFhELsNqfAGoR6U6swEyv77Tto8oETZ2bKTxQTm3jsX",
  "key6": "5TMcMSGjaeo4A5afk79c6KuygfJfGVoktP8UDWSyDXTYEhH97UyqUCKcELNzB6dewdtwzwLYrDakbTc86b39WYb7",
  "key7": "2KRutFk5m9mdpuMVXanumuah2NsFwW1jHeKDF3u2Nj76Qj7M9Cxz98gKemd5ZNzYxXpWCpdX9GMpw9eVupWVAVnP",
  "key8": "i4nXJopBjfEWN6hAxgLNSz7bFUQzCno4zmdWYtaznwpC1VUyoWre7qaHaCsPSVRDEe6TNzzh74BE26N8Nqou6Go",
  "key9": "4A3sNvUFp8XMfSB2CuN1LsLUG4mwR1Bas3KgvpSRLD5hcwNLba4kGLTh8qceqdYtJDP1hKJRPYiWfTEhbLNiETtQ",
  "key10": "cJAKnThZS98rKU2cvAptmogxTgrhpWNUQyHPNGbJSrxbHu3Z8KxtVERF9GJY8Rx9Lqcw95DtBDB5fApSZXcNzSP",
  "key11": "3MdvFVgpCUuACL4bQzERyM7UTPzfaQqrZa7sUX7wyxRTcLo8fEnRivf1L8C2ZMdDVtgHX5y9SKd2DafA8E8srp8",
  "key12": "4VVh2RMckLnDkQEsbR3PuqafXKCKHVUdYd7xBPNHZ1QgFx7ffMFpeTNePgSkUxSKMijVJDDpxFKDspwFUc3peyES",
  "key13": "64x2xdMAqkBFPtWUjMi5KPsGrjhtKjKW7N6i9v3KqyzFQ3VesHV5VbKaMHuXfcZ5yT6864ceCPberiCX3V2E6yJ1",
  "key14": "3dymT2f2JW4ynZ58cB8uTdDWWsoSAbf2VNR3Ptwnqr6GVwqhL3Y8jccz8bvqkbWKoY9QMvdEpqDoN2YuDNcKDMTe",
  "key15": "5a2DvRa8nSsKkcpSTigUaMQd6DwJEfHZYyH263numaaC4tpMU5C3QqpgjSigZKFvdvBRoQBbU84te54R2MZnRLBg",
  "key16": "2qEEVSyXEN8uELH5RE3TBvjcjjgyz7LVMBniqPvtpS5BDNWPy2PiqoxqTUZJbVDuSBtWZrDWj7Z8YGybFzbsQKH",
  "key17": "rbQgeAP67EbK8AFDaAn95THaXfPUewGeh1XiNZRHgwDAzCVxQAbwVdzXHtWjnUti4aKv7t7h8F8Bf21JgmbNKzx",
  "key18": "445paBgcMKhFfPecLciWzCk3E8kn2YzhpxNJbd2aMnkrW3upwz43iSFZGr75JroBYaf7Rz1rgfqzTKF8CuZnZUiv",
  "key19": "2hMo3RxTkayByzFqwc5rofdzvrnW4uo9VeTyjCrrLS2dQQBUBB5Y9ZFV9tWxP7TavcgBD3S4vJ7g8eGf7ZAUCM9J",
  "key20": "238ekmoRCkrctmsNS9TbRAKSSTCdEqyELmCQZm16h6XYpj4DNYDV1MkXnFWEUEnwngPAgXF9UJzxS6adnKzXo7od",
  "key21": "29zivPyksczZ7RXErqSDnTF1TAKsajDMRdgh9zhG3Xag4QsbhHD3AjHjsuDRGgVitxtijvdxxqSXMbWRzZv8Tytm",
  "key22": "3bxWLoSBd8PEBbz1hMUF98yEASPnZoqM8Py442j3BPCB5fxMVrXZsR2rLppeuQHsyzo6421G8CT7GJuyoPWrUSMw",
  "key23": "bk7ffAKqpPCPcfsCQXuUZGmteJDyFko8UWxmJ7vcjvHM54RyCvZF5XgaxwTeaXkaB8RUVFoQdbkntM287FQcioY",
  "key24": "8jEnaexfj6uxnqrsxGjyRJzAZvJHdXy6A9cSALcnHKVDhKxYPjhcnNAKA9SArRSpCagtiZykKoQKgNK9PBun8yK",
  "key25": "4esopvy9kYLfvHwtH79x5Cwh8F9QfksUVhbASUFSG2uSALL7ADs26qGWPRHpKwrL8BCbZ7XLpivdY7QB7WWZ5RaB",
  "key26": "2qrZqiMdPM3DDh7Lvwb1kheSDT58eJncnS7QxsbiXabD82UDLTmUm91sqkKyCJGVXDvozs82EdAA9EwEdWd8fySf",
  "key27": "45bWqHQSi4TE8sFdF7939bcSXrtPiWpnbY2LWLU4DkT453gjxcBSRnzdwW35As2XgzxQTaoRm4DafbRtEotiB7Jk",
  "key28": "5MmJNxwUihVLJhBYdxRX2CGAqWC25vjUwNenyGFfnYcdJ2Led4HUsCXuEm9XCLAMw2vReRtaJpGYw9NAzGpVteQg",
  "key29": "3ekdMR5QZWmktMjSvmoq5Be7kdPSCQkL154S92wx2wk9FzHxmkU9va6hwdt6rona4yQqou7tGPtMRhJ3YLKB6unV",
  "key30": "3STvDcTJ1jtPBYvHVZpJTWWDX39SDa3KcZkxY6fPbeZD6fRXxz3YujayosDDeD6ftomkCHCKhsdX1A5E9zCrBR9d",
  "key31": "4Ke4AVxczAC4Y8JBUuHafpMvvetBd2gk94jKMJMo9NF81Za13njFGih6KoYc1tgkGwmD5EKeSEh8ebT4UDmkG9Nf"
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
