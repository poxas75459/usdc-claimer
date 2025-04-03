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
    "QdT5HQaFFAbNfb9Y4JFUwdxMAGQsYKbbuRtQaGZyyaciUtJZ1QvSEX6HNDrLQnJKTdzX1YmZQozRcuyswMQ1r5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zX2oE1rtxXP1UMvThWFnRcmYZwCvsGiJcasKK5Vdt3dAKCkeXgAd8P3ZS3rzUkFhCZp14nGuqkC9dHfz9defrZC",
  "key1": "uKzUyjKm4EEXtqwRGcpRC9JpsaBx1tyWkt1hM268kFP4Nb5dXUdsUCBUhrXg2khUk4kC57irZCLhoet2UMEszyu",
  "key2": "5YdjLbonhTLJtNUBiXZncqpEACxTcQ92mM5JAdFn4K9VABbEzbdpWCf9AFLoUnD3YcUapiQ7NfKgs7yjLy1BuHma",
  "key3": "2yrN85ivKbrWmeKRALryEEU3CKyHhbprTqXcLJ4PTBLHd1oGiD4M3XmCDA23H2WV9tK574aZfwcxxjwCzhmjFimy",
  "key4": "2BAktUaMWTYjoz2kAkWJqoH851RSkejqUTCZtaAb7oybgsQY9kkQRsXhADxQ7Vq5nJhwHvtGVmshMZq8tmsS81fr",
  "key5": "5D7hQpXyT6vdk9cRi4KKPos4G2X84vbZp8MT3NNLdUiKbzXtfKcetyBPAbAeHJmEqpnttSEfwakxADtXRiKYFHPt",
  "key6": "4xj5h3UZct7xYZv7Bi9JBDnxaxemyfULzRKiFGY5NdwkSmKC85qncna7V8FaZbFYaCGJwr1CgWsCkhdHufieB239",
  "key7": "boPv9iKsN55ciMq5UrVTibQBrryBPwCpv4Cg13sgtqhdC4N2WJSqYKzQ38TGCLig4YY6fFtQ38JjsTHMaPwrZbN",
  "key8": "5titVs51suXTaMdDDQuqwNszGtH6cbZ4HGxoEmMwe8afcB1asRkrhACEzwtxLFTeSxvJjjBuJhPL5A5rGxpy6txR",
  "key9": "5uytQhe8LPsPfWNb4DGSZMMZp2WRn4EAU5DMGJ8v7fSCuszBgaZ9pNfg1G4LiTZCgJQ51FnubAUHyXpR1LZ8k3iZ",
  "key10": "3i1ATMv9UJdRJWVpbjqwdjmWF9zZhUWNEY1g1jGmn8JxU7xt7UtiqnN3cikssdbR8dXntYsGv1aWg686q63a1GqX",
  "key11": "2r7ZRU4CW7EUfGAzFPiXqfV3NZS32o3kCvwbDtUCEvwp1MNMnFm5HpUE2xeV6WeKdHX8HwmmHEZQT9k9reMg9x3V",
  "key12": "3Z55zDJDMBHSBrjuyAH9LbyXUGy5hLnnmWXxBvqgtaqPfmCNivWsXB7rzSmpth6KaBrCCZmFn4Q1SbL6evGdVKJr",
  "key13": "2EHdgxGXiGAtPpzcVd67X4zAGVkEe2rUSaggevynZMhwCGFUzgh8fzwrafdC35mUYwdzLgy5bL6tnuLMDJyisuAm",
  "key14": "3ZFBfeHqQsLHHgSp5ayrVwb4oG743wY7ms5pRSFJSmVzFXQuSSv79HmgoABAe1i7dHLUnYab42LL2pZay5oa1cgM",
  "key15": "gefuJSNhv6Eb5Ws55mzpJYqCnJ6RruzsoDcSLjxNpNDA3aVgcZZYWVSTwvaUxeJRgV9X5GnXnvobnM8QajQdZu2",
  "key16": "46DxUsUacKVrUWzZiH9oHmV319v4UrhSr6LLRN4o2qP6eeBSxdpPnYNLR2Sht3vCAk96noRbjmNpWsSHHDLvgSji",
  "key17": "5XiaPzELJeL2nubN34gtTatdxxXR8Hwd8uixgYZCEBpVvSiGeNTvNorwZxDMEow8iun7ErsUBgNFvaXK4b7wKBc7",
  "key18": "2Sa6iK3vZ4iYo2QwfZDndJKLQGbMyPJQt5dHzVc2Z96rJ5wojffWu1Bx2zfsCQEfPm1FKu3eX38Xq7KVmwdjZJPy",
  "key19": "4WMDBinciTUERTvkjmCahCZThQm9SntAotsiTL2JpXh7GB4UQJqeypFQwRJgytHwwxZ7v93jXWqfTMKoJoKQCHHz",
  "key20": "38XBAdphawb1bQQHKRkKweALhFqCYzY9NnorNWrNzpiFs4dBiyPieuzW2MvzvM5c3vMUQqeGLQcGvEuznDzcJD71",
  "key21": "4axfExCNGc5DRsrvTC9R5podSFbvGdgMNizJKmf4JWBfqYJgc9P1kAkp87pYPCXWQSaWuGmRPGHAUietSprSWjxL",
  "key22": "4eofratBHXT7JsqppidjijDo8UQwb89mnUYKsdN6XUF45jtMsb2DhoruuGHSx1T7Z1dRRtP6yzPuJT4c7exXzEez",
  "key23": "FRZ2Sv28qgc3dYwZmVxN28tg3hFCg81oyyMenhdG7SM9wSbBdv8P37s43bFyxfy1BhqXJ54r5XeVVJMPnMPijE8",
  "key24": "3L4DZMH1TwYM8ChQrnbqTuvnTmig26P9wyjf43cDeFppN9sUPi9ZKufgZUxcbpqrk8WnNuGVsFqcYZNW1vD355Fi",
  "key25": "5CjsKBpA9Nh2U3Lv59V6seLjkxev9b3xuYjZdAJ47Hi5WrJHYN5Pe5qVCqXAgoJYYhQzxBg7LCziNWFp6Zqafp4t",
  "key26": "3DiyyytT1Q4wZmPxt5gMVQ75hPBPtZF9MUXJ2MxD1Vtm4ifmG4u4cFT6cpoiTMqBLCodpT7WsiHjbHYBsRwYeKfs",
  "key27": "3CjojyNwLvHEcam57PcFmHZetuYofzmfJUPQdcun4HpnUbrTVJB6S24jMqzqGtQRrR3mNfQHtja9vG4PY9Hi4mAA",
  "key28": "3UppST9e7uHYuaRGWEopC3MMm4CgtWnW8ykXsxR1gukDwHatM63n9ucLuCVRJB9X4fM2drLKjDdeD8mTRhQnMUQ1"
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
