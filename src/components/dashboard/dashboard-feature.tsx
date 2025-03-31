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
    "VABJKJsufA9iKxquxCTyvzpEBsQdZYYemUwVPPqEDwaLxare8TH6wjepRXfcDzhQp3ssDX89bWZxGdfj7VgPvb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWdcwWYbXVT7K7ZgLF97b5nDZRYfmGEAX3r788oabJWyQ1brP66q2VhTFEQHBErgprX61qDmEBtrcwTMTFJQEoY",
  "key1": "4rbEoVv9YjVoa2qyG9SP3jv2kR6HJZ1uRFhp2Hr74uGyksF6eCBTrm5kvkaCs7igb6HXKTt2wt5WyHZTCEfDRo7L",
  "key2": "4AxLSz7xS77pQVTtbGChRcrmY1AFSR2W9NpCgfW4ZUXboh6UujMKFz7gMneqgoEoLHqqoSoHdgiD3x3z8Yz7swX1",
  "key3": "2df8sriUfTueHK45vNJCgK1gzACDgmxPKACYxKDZ9LAnvXnn28Mzfudwxrjiy9njTntA2nzbQV26ThxBeMVVnpkN",
  "key4": "4rfYRUKTDq88CVhCiRjBZxkLHi2rBCxvdBQnsGzngLocfX4HRYNfJb14wv2k4LHrF5teE5WSLf3anhC68y6tauq9",
  "key5": "5XgxrhZUi1AJ6WbnPrb3hr8d3jhVUfDg22deprGbDkPsXTgWJTarkfCv25caiaSR6cp1hXogHMWApVK8zJdqS4zZ",
  "key6": "2Wf9wQ6e6GTUBVFrnCLtY7VL6EgvNP2JZfRGtdZCfyoYwBw5pkmTcUgbHFX11sAhiZN2Ee84ekg4GUSdAvxaPxcy",
  "key7": "YEt3dFvXpKzKWREhjHyRLq7TWwWfo1bMcyn8eEtiNd22TFTWNziRMXXu9vRjDaVpzpQ2MYzNn7wzRVLjofQ4gm4",
  "key8": "5GsaoS3vCRRcJt7fQJ4UojBFiGkKgHzDafVmbmhzLaS7HmpenaYas8tqeizNYrfe9RbquN5hkkCrj6kseE7QLion",
  "key9": "hdupNyDRntqPDSReYsKdB7CkUKdEiLk38z5DHbLYYg9NvssFdipr2PwjJSrgVJwejgUwvRCw8hAgMK9AkhwPuXR",
  "key10": "ZaZWpgEmrkV17zpDwZCpxZtkiU7hVHkCsn9qSak5n4LkTX9tfCXHCkWaAQuXzxBL1gt1iQeFX5DhKKKqEHyw4X9",
  "key11": "2JnUywLNSit2Jxb2tTjcuB2mU91g4Ao5kzQn1qdLERhqP8DqwMQSc1VYvMSwqntmJEPovJXtZwT1D4cEcFcNWfNE",
  "key12": "44szLaSt14njs7MqTnEbdC9jRCuaaaQsHqEsmLDKr4SMhG6zbUXGWsgJSNMpvWWTrqY8zXJLsLpGoJsteLExWp7M",
  "key13": "dec99yVLXyTbKZeKj4Ds7t2VdcAVmgGNZbhrbMLER8iAv6W7kxa6SSa5rM14N8Qx3Ak2cKJYRTjRsU2HeQWZyXz",
  "key14": "5cbZG81XZmsWELFhMRp2VgSL52xc7uZyviN1ktAm2JP4KzRdNU8yPaBfEkdc9e4c7iupEk8NiZyJmHaMubUxMpo6",
  "key15": "yFLyCyZXchZ1ep8SCgpuyBnxwJCmMNCFseBQGG7ULGE6sVfMqxYenMVtJ7cCguHPWVCjFvPwTfJNaeU2piSUe2e",
  "key16": "5eVh7WcF9Fxza9gYda27xjYADWouV8tQh8HZZst4Vnfeqqif42gXB8QNycMrNG3tc4jd4bEEcGgkRAhvV7kwLVAF",
  "key17": "21zP2BZY6RPLeBuut4v7ivHNddsxzkroTVWpMu2bzw2qTkCeGrzXmHC5eL7JHq4LcKQK3RK39z1Kmb55rMuH2yLD",
  "key18": "4gc9oKTZbVNxA8SDrHGrNbzuWaCv158iZPQkgV4hDdnFRiRh9pPGM5WyubVN2sQySwZSJZdLh2d5zGh3tHGU7WzZ",
  "key19": "2pN3w5cNG3rPEHahKCu8ozGJreTarDCcsDax67FFMAMTNaMyUuSEL4gLedUBcyHWZwmCJV6N3fEHp9J9BsoH3oTh",
  "key20": "5tNQCjaFxNvp3ttKNr2WogcUthsZPpbzfkmtfBzN8Nt8vB6voVwPtmbbTuQtNBsvKBCJXiFfbKqRj3UqkTLdJfCX",
  "key21": "3xXZZTEMMwbT1xktAw5HCjeu7nRDdagAkcZgx7kccYZEoNi5KFNK5ERNQzJkVt8jqieTwvKQzExxVe3MiTpqbBAm",
  "key22": "27oaMUR8ri9C26f4QUEMLUAHkVFeTcnKaNyPT7DeKadEVgnBawoPrZ9YhWKfjWoLp8nhMgHoQ26HnHf5484x1g22",
  "key23": "a6qT5ifJwJff6oGZtucka7jSCDpKBRzRK8CvTFzVfWJ2pip4zBpqXjvW8LF8UxwgweHpAjeeddepA6WjkzTyM9v",
  "key24": "2mEGkNaWGw9XyxwgWSVnfByCpuo5ySYUrZivtGs1GqxBsKmw9mz7inc3PxbSuKz6NZPg1PQbxKxiGrdwN4UTBC8k",
  "key25": "2ARFgMNB4KUpVRJ48QWSfYp6yseZTTpfgYsgni5aFBMYedJ6YY2VuKQYKyGgwFtc3SrC5xAyv7MPiU5Qbiq4m9L3",
  "key26": "3Tv3UyfuCrzYctXpeCUw8SA4wBBUtiRxqDqUkkoanSqZUuZNy3J8bNbVRYFU5k2amTRk1EEHfjBki92MRuPRpqqU",
  "key27": "5cCB27gnKc5Jxq8CKVj16cB4NwBKBSxcAWoDdS9nZAs3n58YrP4znDkso6rp7ii75oFBx8CZRWmtWRXMxHhsWz29",
  "key28": "br3kU3K732F6WSWwJsnMH9DEVxsPBf8CA7UmmS1EuPHd2pEfaopc6CdAEERuuQf2368cnFuxeBWN4rjLkVphnmH",
  "key29": "5J67hpD8kY65hYjTvBpURjJn7DTwXK4GJh5VxmrsxjyJrYXFgMMgzsVnWeyoCb4CJDXCLyKqqJEkdfTGKzoo5dYC",
  "key30": "4PpiXKqDSqCqZc3n1NGL8XSVYH7hSWrRZgRV6QAVG2yatsxShmZQTR31TmbLGy2TVY1DcECAJxPKQ2EXT1EMBPdR",
  "key31": "5cJg2xYsduSVRpJCY9cD1s7CmHuPkmJU9KuXmU8B2TrVx8jJGPw8AkT5iozD5EMixhSGfj2jgbfXaVeyZFe2cYoU",
  "key32": "3rdutuffb8Kde3XGu9m4QHebN7LE7DDzknuVEJEw8hAVsGyG4aUQXVtd5ayBiN1KTNpjYaapbyk3MYWivtuHnMJB",
  "key33": "3AZ3U6GsC4VSWA9Sj8FbhrgGe4k16mtyVJ3PAotdKm7ThbvdDEyjYG82VrKp5bKFp2v2MGMPKcEXDTVviXVoHQSA",
  "key34": "5kQWC4izfRYrtihRHAQyGJPXRKvwHirs95Xy9FvREpuHSAq6dU67pMVZmwzkMuEKcQRv4Jctbdh9BMZHYJkdSjCP",
  "key35": "5JQvK3qevbqgqN7tBTzpE9WhxSRDtbfPtReYBA9D914qhZBAjWi17g5jaEFKCNfYF6HHztaLinAzbufMDX4tYFyE",
  "key36": "MybvjwzL65qexosa1oKhiHsgEnYGsf8Go6wKbvW51dvviNH7TEwUVTERcsnbWjwhVoEmyNxbC71cyUhmZcc6wop",
  "key37": "4peg3KCw13u5Zp5YaCzhmrTa6eVdsa7c93miT5MKZMRc4PwcNP8wLnjiJvK4yB8a2QcMu1WfBkWio1Yh5usDrcAS",
  "key38": "44G83yqSVR7D9B28H5Rd2DJcWYirfMT38cqv2crpkvn9hmRctD8vxvpbtHSfeiJrYu3yVe15Eu1ECLNNhm2JhHUk",
  "key39": "4s23qhtzeBXaRqdSDK7C3MFoWSDnUBQH6k8tyhMoQJTd5pYtKHVFg8vJbNpE7ZYR2xFshVpbSdo8GxWkZde5MWnj"
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
