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
    "4BWGb2FsqAgZxE6mCZjAqth6Nfc2jFKNoJyoYdTERKCuy3KjHS2LkkmDGG5MSnA9Edup9Q3TVQzGvN2swCAJTDVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHwe88pw3SCkpZ1ByimKsZZRbUQT4i1NPTJtvr6SS34MshdVL1hn37DtAZaS7aVGwjJkpkHzPYPLTpAUFy16uU7",
  "key1": "3iL969nBriywHYgJV8mqTXehQV5cLYjyFbxxzrWrchVrVXcCPjqnWBmhmEDdsGNrgzpsZ8Koap9JT4q7cmjtt4hc",
  "key2": "2LYigHDzopgfmvkbM23GYHwAyzHD962wgzRMJ9Vy82wTk7FnFgoNsxWP6fUCtMAt3qAbENkYJdzgJBWqiivmkkYc",
  "key3": "2FXeSUs5t2RYdmQywcx9odRb3esyRBigkNQwC6ekxAE7ZVSzQ6VHLx3PiJYrX6jMNXFYqVT9KsfKDkLXBAjztYet",
  "key4": "iYMskCZNwQAnNmVtXR17vV183wULPYSgq14pHFxwL3hf8uFwNp3ZEyqJTUCv4P8dmhdPscUbbZvA1LzjT4qySqg",
  "key5": "AqrAK2yKzRXcKyGaCRsiPQDuGcGXsjHfqsaZYzg5f5DvcgqptWxkDkEL1vEVJ3VwzN5AYG5ebX5muQx79BkiXCp",
  "key6": "2A4XswBoqhfokwrSVzF14dbZjhVVE9vdQkW4jKx8Ctmv8VyesmG17pHfUfSxWgdvezRHcHrvPmLrwB1mhNkkmfVP",
  "key7": "u1BEaLELcdz7LkswjviDM8MiQpKicj4v2x3VnVZktrAr9SJJT2nf2SbgpQCYpvSqG4rkr7iPv4jgkjxWttkVbQi",
  "key8": "3fYxJVREEqENEQ4HrXMnEQTepCdCJ1eYB5KKBjYfKXZnBoVk5Lb9mFaQomEXbikotdpLw4o7Q2yHiVTA9xWDbX96",
  "key9": "4TJtXyc4f3EEDXcsC3eUX1W8uFBvSJh8Y3LQNzZt9afJkD2DMPcvzg17akkqM1aQcMXFhQT2xuRUqMy7GLGwZFsM",
  "key10": "V9htDxx92XinxaafACcG29tmeojMn3jDSi6xtPoaAtevnnHS7R1SazELrXs87Ykvq4VKPGuP7uo1EqyLVCyk8fk",
  "key11": "5cKPHVSgmMThJLDuyTuSEMj57QiqJJiWMiHrzSmxk3E9QhKJTaBQFomTSLUB6GWVd8jeBrTaXy1oGq8teaEuigaQ",
  "key12": "34Bixt4DU26ycF2nz5h3YpxTZqfAp5FUspz1P5K2hAWUgRGfr4g1nRxu7TkN73Fso7B3Ugc95d6HN35ZpA4BwxZ",
  "key13": "4UZfhb9U9Qb7MSnjnkSF7HghXedtQSVnbPKABGf7eoUBCGC6tc6cAQCf46QpjuSdvorgtJqgrZYnKEGKam6LVjci",
  "key14": "fW8hGqHq43iL7qgJJGu6pBnRNBZiUDSbxKmvbxoeMn1oxParB6QVoXVGyrP47PED5GumNpYgBoJRtEganxD6LU6",
  "key15": "4mCLLxgkwVDCReYC7YJ2YKrpz99LsLP1fsRnRBAqju8koZzPftf8KLsZQWr1XNrsxfou7JY25LLwv8htF4LuvDnd",
  "key16": "2M2ugnguAbiTjqMjB4s9eiQG6ngGEok3mu6FiEdzX3Gr6rdEqMoAJXHxcUW6vveM19xadhzPMmSDyLGwZrRM7MZQ",
  "key17": "4uLcVjUdbRj9DxiCvhHMKxcMrkpvGXX4dG2dZZFoSV1JiHrBfo9D4GnfnJydfmodiJNMMJiAvgKfYwNMQ3ESPYsW",
  "key18": "54PYSJeGvo64Wu99E5WB1a1vSkEzm3AYg6rjpjDHeSEWStmmLH4f3GxEe7Eqo5w89uU2HpztTTMhKoa2LE6JRfJ1",
  "key19": "gyS5ZUe4w15ac1MNTXxD4Kuwa1KuRXKD7wiFidQEz2cxquTKDNcwq5zjHne8nkuou1gSECMDTyJZ9p2ysGfQFxU",
  "key20": "4XoD9vCmhexNdMoP3prH2puWsqzk4Y9WVsGfmaptUKtax3FhGZozzVYcPN82WFFkPgF7S3UgXJkYNMkoGPMUCTpc",
  "key21": "2wXApkkqLNEQffftuJXvcCySYgzcjfRRMK8zoiKRwLde4Ci3yFLoKJk8qejUnY34XobnqETEK5LFnacF1nsoaJGQ",
  "key22": "2LEXKLFgLLa3v9Ei1LK3EqWxoYucvW93Sq8DcyH2fKEvdKe2mQ3q6UgJZeKfhkqEMgyY8KSXtz6zcVQpyzRasahM",
  "key23": "5UyhBMvURqLuUcKEuGmDJQ2QrAeG1RYxy4wCgMiA7JVS7kdfEnykYg6M4NCN7jr2fsQXFyTNg53PZpQCEP2msst6",
  "key24": "4Nk3EfPmyRx8Nmq73mFtsN7gNE4wSsntXCcCvRCeg6Jwb48EZj5uFBPQCcrVsN31VW9KiLhWEka41Z4UUuEcQxG5",
  "key25": "5r8kFvnw4d3f5aNYLd5hWcGBjtPmrjfwH9MtDBC8ZJomkbDTZT21CAnxeAPMCXecaDQe1NHNNPKAVCjkBoMS6gGj",
  "key26": "2LefwzvKfKNYN7K7jz2L1J8a6BYf3mUDLVQEJMTVeKPxDgDuGmEkenAweEoDnE5QvWd4qVqUeg6Avg56wJ2MWLfY",
  "key27": "4b1zUFLqRGPFWqFDrnZ1iSYzcGtCmth6ANJxgSW395BcmwVaKmD5uZ6kaMcpne12rhBSFRSXgayomq6UqtpvGQuZ",
  "key28": "5chi5viB7t4eJ7icPE7cDcP3iSWxGdc5o9N59t6tqcNSqu4nZr1jkKAjSNfJsS5swdV6vgYJJi9zRuuhAQzRJoxW",
  "key29": "ozoSRXh3XU2Lj5f8MY54FV51G2a6P4oWrVLeMAJqVYC3mSt5CcVhsZEQJF32dqqz8KVLZx2GZr8kq6NN8vzVok4",
  "key30": "3pYaDfEazai5aULQD4g4T95C1KfYzKcJxsudGtxsJsDdXqfBdtLFT27meVVVJtZ9kQzSCjezFAqmWRm7bGyME7m8",
  "key31": "5HZ9GnGSYPyB7iyFVb3azRLeYq88H5PiCHBYcuNY4ZMwRZ5wp1yanbw2RHmxXcVkMoV7L6yHJudVxbBQBJeRQZMP",
  "key32": "3CBeMgRcZt1E2RZcEvLvp9es7Hvx9bJEQNwvXRPJnMfjLjk58wUpqajkF79hzvp7j1v7L6ShrHaPXKQJVxjZEpGz",
  "key33": "2qHBS7nfXKSjpyJxq5boWxSzBgJ7YPPtXqet9cHsamz2tibVEh1NZHdPKnXrf4AA858527cefxGQH9eDiwuph6Fc",
  "key34": "3eWF5J5BuiPJQyGpoPZ2qdyYsCh2mD2UJV8ddDj7KvREwFrxNcn43v6yNyvxgDyWvRv3DHiys2au9bNsACgmK3Sb",
  "key35": "2QaPMBSjuTSHhHm8XsgJxghmJa58zAhe35vmZSWXHYVX4X7jYd13bMSsCiS9QmAmpoqpPHsZbAZsUPQjYoWPPDUn",
  "key36": "41wuUArUfxp59EdzkkptoMJwuK9wxrEKEFXNtBZa6i7sP5AszgN3oj9sq8rTVuuhJ3f1nosEuvAD2naJxjkgHdAb",
  "key37": "4cYEGEJqZCxYmFjzfjzpJjVBgFRvhdZ78Xi2Gr5BDHntPtZHxUeF9qjzwtEZtZPM2i2JJSAnEUeeA1CjZcs88zGq",
  "key38": "Wc6QJDGzFFMDFJBs4CdBo8KMxFmSBYQ6sqh5AQzKe8SGMxtDufAunHMYXBJZ1dJMxcyjuANvAthgXymHCKZxWaU",
  "key39": "4m4myuxXDt4DBbg9FnvFyng1sEZZcSMHrk7AyVqMME1BhiYXbQ5dNJxmPd6cudrrcJQ4t1iHJjUYbdR5Wdnqc4Nb",
  "key40": "5rnqNUVi1kUm48uDCnLurXQPfq6D6YZEorLLJhZWGu4q4x3cu4MHVD21DQ22Q7NLKzUab81nbTcBjfhQTZXdPzqn",
  "key41": "4BTCGvpeLdh7GBdt8pCSvbfMqkuuomW5NRyUM2mPbemU157nY1LHhq895YsTSAWoqUGeVcSsxrr7Lo3D4NAQATHB",
  "key42": "4qy6D8oRpN4tCpXLW4Zs8KuBWUNRcubVERfHPtCVWNP6BW3eWbeWLvuyakMkXuLtA2hjVye2mrGcy8U788ACqjfq",
  "key43": "3LMAUuqPC5eBaSCkhikZQki675hLan2tVDtWifFeg5skBzMuinAvzMn4GBHyoWmYTBUQbq3kxZL8txxWGrFZSQw4",
  "key44": "3Dg7EcGs3hKniFGiCJxAJjG7tXZjQb6nFo3XsGc2b9LUEhM8okk38sqqn1BWK6FQJsZiRyo5q7aYF5qDDzoEEZLn",
  "key45": "2AR6BD58asNUPExZeKFizygetiwCyYFLRoVm8XzomRFffehHzPBD2BAFKjgDwRDUiMKVH9n7ThwBAwQoAXstGrLK",
  "key46": "3Fnd9KGnwjfamTQztkpbUxYXLtWTTUKW7xB8rcrVyUgQxBKkac3kdtZ6ZQ6bHDaFrn5YkB1gjSEEAsFoFvdSnwQS",
  "key47": "3tQDFPivH2puw71n6EtJAn2Wm7XGsYdXSGeppz9v5RwWLQTsTRXXsErAT2SpcYCyGmD1m9kyveCN4wYM7bmNHgk9"
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
