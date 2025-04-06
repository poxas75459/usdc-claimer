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
    "3YcG4Y8WA7F8qs6rLBxibELRivtGnukQ4DZLKed427fXxsPTj9f5mWn2E5UesjmvNsZUW5mHarHWZPh1Ny6MFKrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPHjAHx61uDqGdywwvtkhfGDfuuKN8oMnE8p8V32oTwdzhaKRcTGi6kyzYoGwmg9G2B3xBAkvxfA6EWSXeEGPPu",
  "key1": "2h7dMGbdPSpoybtSmfaGgsoNuM6cxzm5DVpDZqmVLiXTEhUbDjSK8pwPJndzWodu2ruGoDh54BuixeppGpxuw8Pf",
  "key2": "2j4L3UjeiWby1aGbcUmwz4mLTzYgxEPSRaFuH4soFn48VsMa3YWbrRqmQCKUjmYwdTZ3bfG4JuzqAkTryMbzpeZw",
  "key3": "41KPpwJv18QhEHuMwN9bwtaBppCgHwVesURXiquPjEPD6sUaAtrYrvTVeSrpwBuYDjJS1mEtanwwh9ZozL2WfKYS",
  "key4": "2SVok2r6RdmXKEmqmZDmYRZAVL2RykHPFobhgwvoVnQkbhJewBsVAyMd7cNnPHZ49rMcPLCMtx8SCort48kVt7ou",
  "key5": "4zY8ETKVwDif1V26k1YB3uEtbSW1TwMJeDCnCcCXtP3zFU3etqK8XdpEEJUjhR7fEXNHXZxVWv56Cj4wVwLfTA1F",
  "key6": "3bwGUKjdBHmtHJtMHb53BhibH6MBAAh2WrPSzYvvd67xYjzhwAEbKpWh78U5SXJDiuZCX6GKuTf6eqm6nohNaiAa",
  "key7": "3FXS5mYJssqwsKo1YZwzVsKkWj54PBZiGRF2ApZCiKNR9rBs67HzdpmfH41idaaGG5GKX4vm7cdbud7d8PWRbCop",
  "key8": "5S9gD5YTT3QeNdB4vt8HzjcaqViq7NcAFrpJNShLmPyzfv4ehiaPE4YN6MbFigWv7nU9jxhdY4sJVdJyaypz3cXH",
  "key9": "4688A8tvh3kZsckNbBnUqrB5bDWrqUwwqde91sxRKJ188saVTt2bHLWEGBHgfoVTzY1mJEoJae4Hhfso75zbhe3u",
  "key10": "3jnyQCz3dobdmgG8ax1wUu9ZyksoDMNzcuK6a9QP1bnHuM4bXiiXDkDhkRGq4nXEytLJLbW3fSbtKhGZ8nyvNFXe",
  "key11": "5pMLd9mzJxqB2T8Ag7vbdDa8eT9Ggnnnp4iRMh2RGpegGYKvz2jeirY1tojxSGF4HNBvmDYybGRpxfH78AwrSKzm",
  "key12": "22jPfxgYW4RmkfYsa2Q9JNhyzbphPfexYW2wZKPUATn3vRiKuErHKErMMtfA4EGTwPdKNjPrMos8Y5ZrxUt1TRD5",
  "key13": "3qQVb2pA7PPUWopP3MQLyAuWG6Q9JhpRJ3yJsL42UXetvKchJbDCAsS91HXxiBD8Uy7EgrKLcVgE7DtBgGhjJF99",
  "key14": "3U2zFEbN5oZ59X6BrB6LV2gvMseoNzn7dr4jiQPuWxeBZBLoJKPFv3suDGJCpXjgSfakdMA5zxn9Nqkk2HYa1kiG",
  "key15": "bYizoLv7HTLCscUBtMqftU6qrX9szcrrsRNB3iXREBqaYtpyLys9m1V5vsMtSpGJiViBvWa19pp8eFV2yVjPyBY",
  "key16": "X7ebS46PLAzDBW7tWyRLgA6c2qSkHUszEgXAQM4f4rHKKTJ3YAfJLNJabV5ejTZEHSuhiZoSBrKSqtLFVNSvGVJ",
  "key17": "47gPDo96e68Bv1NPNfdiHeW3xyjRSibLsRwum79EejDtMTKWHS2vEgEKdUUJjKQtdz1XnaEQhrgfJCAgT4bKoksN",
  "key18": "2EC1MiyE4CK7dQEZY4vBN4fcPnqZ28h14baREAgRVRKFZGapYNtZLYESrZD5JijMggHwN3AopTG6xHYFSYGrdvpZ",
  "key19": "2NsRWUbWDVmkPbdaKgcQDoVDufc18k4QuiZUtKmd5C4uvWT97aT88toPKiKdHfU3UsprWKkCvsrRdpUasrJ4qMaS",
  "key20": "XjVZ8mXCuLokmDzSkwtmGujjEZbiqWg61teznTyhxb9TvnCbeJ9PXQbCQtHUAuEQB9pzwhpz5FRZgjApXtBPf42",
  "key21": "b417Aqf7AiyDaSMgpL45QXaFaxBbVTjVx78UitCvA4NZcd3Svr7i1JtgkFJ2cLvujGRKD22eLte3y7pod6hma8p",
  "key22": "3oCYweK1HA4Y8cwWd7EMeq65KNGePAHVatH18rnV8dtugRKw6cKm8Mhk3DGJ8EgNsu7fbV1iC3SV6hVEHbBDTx8k",
  "key23": "64PWhXsHqyCrZb8VtC6zRhhwu43eRaTvwLEpeSTzeCYjhJ8GT259Nog5iPgGZyTXVsVhW1Ah62ENhwfpxxH8LmT5",
  "key24": "4NSR19VyXVKNXUsmRLeze2etDdz3gfE5ZGju9DDBoPxtLvumZgLUP3KLPPN3PDgBCDqK6o6tEeEu7UHYtcshWHfY",
  "key25": "3TeoNjNjoATEuebfxYuD4axMpM9fbdiMNZzcybdH4txdmW78VD48kMhpk2txgvc5PhpVGhH6Zpz9YNnu2ZpRfiDG",
  "key26": "3FxaTLdB9EpbX1bXYZCqqCuQ8kTYuLRr9evwZUsAFvTFbzeL4FMfcEEsJXY9aGtWNMonJ1FfJAPNiJiY35WN4DZn",
  "key27": "5Wmtqo5sU7eHhWdxLF29QFeeNJGhkbewgpAtipcTK2tfDyo3AttHYMuQNMbVD8gwaxh5XUCg7Ljh15FBUix3exTY",
  "key28": "5Um3377YeNE3XLxW4WXmL85WZcF83ndpaB7Ujo45wNxwC23ZFQtcaLgqThx5NuJZCZCDmS9ZGJ91vi8zW5WyYXSo",
  "key29": "5nHyUQSsYuz8WsCL2yuhKzw61VnCtaBShbvKstrtomKWmtUCe7W6GDTnM9Gj5fUr5NjLSMXqSdjCWfyTMJ4B3SfS",
  "key30": "3uRdDnmTCAstFsYzVi1oXp5cR3fnaePXBXCo5BpMV9uV4b8Pv4KWGBWa1maAgsk1qdmepsRrSVPKCCj1UrmEsqoX",
  "key31": "2MkwxoQvbCPssKE2YU1YyEv7yLiXNh671UfUFpTNw2c7mPiiksRAim9wNxqqZqZAQhM4xQjLc3TuoPusFupiTETo",
  "key32": "4EKNRki14YjC8GjfumGyiCJn7C52teqsJuJ724zD7qBd27Uu45QbBZVBx4wVL6c8H5g8Zf5iYFUMZReCi8KSWzSU",
  "key33": "2qBRkATk5m83yTNBaz6KkSBtqGXPL3KWM71mEn56SVQZnYPbDNvJTygTC5PHHY4hDSVCtYoJndYw26NsmRLekn2t",
  "key34": "4VSk4o48dob8AhcfSoLGUMeJXXCrULyBzbX5qEZQFNvrzyeiVR3oCHKXNPNn5FpYL3mwwd2mTYhk1ekjYi6DD5Tm",
  "key35": "4vz4uNGctoKQT2Zvh5M3B2dudc7qFoYWjUvATsUSRggKUfyj6ht9LDPtMsBmJV8RtgUKnX13hwHh7DsSpz3HzaTM"
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
