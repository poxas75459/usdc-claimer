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
    "5LvvpUvwGG7FiLtAZD7Ce13LZEEumMgyRshgHPcmArgKXw8s1ub16R4FNGMXvsg3iEfX4YsR1XkeLYBmDVxpWNV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LgKYneKDAa5yijgFQKeqNsqCFFJsKRCAUxj8Tp2DuiA39fCfL1DtvtXB8RtgNFhEB1EvK3QkLSyQFqg8Y7Bbpv",
  "key1": "2KEYam6QTfEF44ty9Pwdgs16JzcH9SDavJUsfbpLpCRywDLP93Hj8G6QvWzqF36RaayeHbiAru6VoyTQn88F4N53",
  "key2": "5Tn5z8AEEMxctwU29JdqWQ9LGwhWgcRraRwGcJgfaTq8MH1GsStVB3R24nJwckLNEEafeGN7xsCCkwauvNFYJ2MA",
  "key3": "65vM3KtYi8sWHmNzUtzdM1EQM4rq2WqsWx9oq1HGWJf2AHmzTKBcUvo5ihd2e6sVpN2e9GUcgCAQd6oSyY1gtwd1",
  "key4": "4UQvXWbKMUebF36q6Bys8AJnkUPJbKW36hTDZb28uSiXaQS642cSZoSthVFsWqeQuToQPANyF1DsNu8cELpHqTvX",
  "key5": "4SBU2HCboPCkwm3rHKN9e5fyvLvYy5eUTwB18RPodVKtniT2yJiZqDvUnA6eh6ynterpumA85BmxGjY86G8ypff7",
  "key6": "M2JACm7fvyBLufVdGSi1RAQ43pSfazttpr8XcmCD2QVZ3iLwgR2zXygRUXFxVKi76xs7riTKM2kYLZsavaUVpj9",
  "key7": "QWvSFCDXPpKaUsvAehkBMsQ3eJniGtvLWoz8RZTXJqnFGUrg4PRfWEL2p6nQ1geA1tjiz3E3NXgS1R9BvqLjwYt",
  "key8": "Eyx2vkayFTSaB1Y9fCFmeXGqM7keTmu2sTYZh9zkGkSK2tZVvUFhFWUxHYb66rLKBg84DFwjqpA42Sivi4bQiKS",
  "key9": "2g9Gbbd2mhqno79LQsL5SrJVdubUfNyG9KysHz4FkgAEcSFBaKAmG2jtT83m1dqiMW9ESafK48B2qbtEHSr9Ehn2",
  "key10": "2bN8T65CHH1YkYgNSJ85F39NE8LECmkR4wc8Fkarh6wQWR9eBbmBUmmXMztadGPo9kdYVWM6JikjZTScMeHukTLW",
  "key11": "DTGViuh3gg6kXpgvo5SUBbjQnFgk1AxorxbH6z8vg5qDJT2Y6aLxkErnWp6sXNcimh9zxpaNAbkVpcAxczGXPC7",
  "key12": "gqrVsfPAGrTAZ8jkAMjfe7ifF6n2nxa81JmcXJKuzc7t8ehecEfVN3tnug39Gjc1fgSZvbcBvoB2CRQgiH5ETs5",
  "key13": "63aLCcNCgEKaCWBjnbKTYpSPi2DADXQpeW95X53WMtyraEg4sKA2ah5WvA2PN9CdaVMtD7rdguGkXRitcKXe1C6Z",
  "key14": "5EQbfqr3frhhRsypuMJ3QX1RFbpPKid6KUDoH7q4sb45CyRH4jts5JaEsVJNA7DdQjrBFdPyVpWKp73xNCQ2B5Cg",
  "key15": "33KXkCmyLc8hdjwGhrwPLFjnGadJqfFJrNuVnGsM71BndzpSfRrBRjmTSkxnRKDTJ8G9pJdNqPiU1RCW4tPyrowa",
  "key16": "4iovqQRzkHVrXbtBhBP7DfXEYBt8KmkRfF2NeJM7rGegRBqDywmKxR4GZjNjR4qmAsn2VyMhSCYEoB1wqAJNQHFb",
  "key17": "5c7MPYRThXg7s3sJW8L4e4Cyogq2ErPfFiHqBN9XQZv9E1hnwWzABn3oEEf85nfDGkwR56mB2A11BJoU8WygzVaK",
  "key18": "56qdpmtyTGZoqm8DaEkknBZicpUZfZhtAMGDh9qc935o258z6b6Kda2rg4t8VatPKJTfURsV6Zr1rdkdjQQxnHnd",
  "key19": "4iF68DwLmn1SZFHZjLrRqMu6k4p4qmVRADC7Rtg2dTb6cZxN1KifM3pHrsNtTMGhrHK1j6VFzo3msmHZba4Gf5CZ",
  "key20": "BJrkptRfSsSATusS1sBWQoVwceSwZKD9NNXx4BNVNobJhbUPSngDjMnXcxT9pXhBnFj4NWLrGrU17BxrNJfX2Ch",
  "key21": "4VyFv9o57fESJbpMTFCVHWLppxjTd6Dv39mdshncP1UGRAJoJePDLcHgYWAXay2hYRZ94gnUTFGZN3BeQnLVF6bs",
  "key22": "4R9NmUbp8DToc7uUu6iPWTmQZ9TfQJVzX52wZyvcbbMCLTTvBuoQbc2GHoA2aeTtouJnXo9BBJpULN1xbyTYJ11p",
  "key23": "5TAHXmM5vn7zy3CVJt5fufg7c78kwz1rLAJuzfiyxpKN3jxwo7ZQHwZyEjuSEXjoPJRbRkLFKup3psMs1ZAazDBP",
  "key24": "44vzYKcDKx8BCtfEfxFYzkzMoF4tCL8rM7G11qcJCwMVBfS65Bp36nbQPQBJiBY2hctMv12fPK1JoqA22n2p9tav",
  "key25": "4N3g2Eixz1bPWQ8s9Gr1w7nbTzAQGKNp4fokzPVdvbfwxwQeSYPtrCztv9nydcWupjCGLrMwAWL26eYYFDdFHGpC",
  "key26": "4C2LdbfbLr4VKAseYUn7irzDy8NjF4JMqo46SHNQYdXJRkqj1TqgevXjPn1nkwqbBsHNc2buf7VyNJij9M9SCVvi",
  "key27": "4YbXM8yXcg2iqQz2HN5oncNuzCFJRpiatHEFAVWER8cyAyLj2cm6NgZxqJQG4Pjx2Pd4NELTGNWpzZCKCD6MbWKT",
  "key28": "5qSXrjPhf7UXfxDzcZ6TP3ZYK9e3K8qC4MGgDWKZnpTBPmUcezTmHcciCDJeMTtQ6Pu1h1kyedgaDVM5NTbJhLz4",
  "key29": "3eo5zvv5P5T1CkjrNekmDh3dMfDp9kpEigo6BMceaGdb978CV1SuQCvvBFZGGHzycJYPQVTkxiFaDss4ayZjDaWE",
  "key30": "5C9cQeicPgpVZeQWtroQ58k8RsKJmvPNPEWBWf7XbDyJmwVQqNz1ctAjFKXXByaQNaHP2SjtVMBZ6XY4yJ9ZT3RA"
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
