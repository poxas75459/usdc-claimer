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
    "4od5UMFsZ5jUtiYUCiXHu4DEquvEa31fog5BTWaynXqtUrbnsa8rQ4fRoZ9skgejmqAZwDGnWLvJiuH3mDFWJo1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiAw7sQsnE45HSQqu6G5gHyZawpaueYcu5TwbWCTpXz6ydDsnxUh7BGf8pQQQ53PqsTTYgEYkjQBW32APXmiLU3",
  "key1": "5dz8gRsXJdTPfUCDLq3VvBToCb1WXLCdKqucPfcdiKLdpXWtJgqoB9xJQtfmoPsHVwWwRGeRAdngzfv6kUQZ5VBY",
  "key2": "3Q5A5PRDvAnb19gEyGd6Goqc4TAQ5Qp4ACCsHruL8rxRCAhY8cKyduSpopxFNdfJMvzAK2pGK1DzdpHEz92QustC",
  "key3": "5ZiCpgxMGWuCQ5Y5FJZoPgqS2SHFKZ2YXFd9rBEVHCffEoegvyeScHVMwZ5KzqLyt4LVAPBahoEscfJxCwv2aW43",
  "key4": "2zcu65KiTdh9HuZdnme1pAdc7KtMQqPxrc21GTiMfkYYBPsDZFedfHsJYuRYLnQGFT89md56tHuJixhdPC653Hjr",
  "key5": "KymK6d8AqNNsPCQZqpWHVnXTTDA3B3NCGnkeqQYnPGvSUqPvgqGWiUXzPJF4A4fCwRmGM9gVzAEdzcWiLgDJKxT",
  "key6": "uHgcJ3onHKcvGEhe6m4aTbbg5LZX2nMyotDDHg839mD83HuceCdkZWvtQQ17GHgVQ9GkiuWm37qM5RC1V524HH7",
  "key7": "2rqxq2CtACzYE7EAZnKpN2LJ8dsqb2tZfqKiZKbx6HFdexy5vS98awj5gVaWivFgSHCKrpNVdQsdCVkKWJNRLDGR",
  "key8": "5QuxsZcKmUK5fp6JxbeVycvknk2nMxYc3Ag8hqPpv7o6XU9Vgm8KL4GU7mm85z98bDRt4Dqiddm16UcPq7qN1bB1",
  "key9": "5d8pYq4NphepiaL8iLiSKjPGWuAzTpwKH5WeFhJJf71A7tGwrbxbiFYwGC2NhkJMWtSJmnvTfPEoMj1v9shPK3QX",
  "key10": "ywGYVR4te5KP4snnqLsoQFx4HaSXYz3kfcm6MxXKVW12wxKHAGTaFxWKApcXkScvrYyH2AvUwGbJVGfEQ3isJFG",
  "key11": "3AqjWxaceS3eJH7zBp7F7xFCJ6Gd2WKqtjGBjxY9iuXoB6Vhy3zCdYLwq3u823S6pKx96fZ3AKtjnFdMtJzTV5kG",
  "key12": "39fotfZF9JSRgmWUf9jicgauLuNPVAvUzCfbfbgN8BJGTjuTjjywLifRo2nj3RqARisGhuJH2ZQibZbDuMW8iHvC",
  "key13": "4qiBLKVemv5vAZyzjeZH1TnQzLf7AYww3k1khrV6Ant9sTSN397Q2pHautKfdBiDSUTBFDkgBgTWMUTesVXkjpH8",
  "key14": "643ufAd5mRzhpHJ6JKHc6Qfkm2Q56aNJEFYWktMEdyeBfn9RSLMsntmzjgPo8r1dpiQuDTBa26o4SsytAmCLFoo3",
  "key15": "6zMwAtzUSafp25oqDjhi7iea8GTK7e9W6gUzSw1HtUvQFnMny1mRViyDz9WbP3KmC1y1wxBAqWMHdBK53NiaRVS",
  "key16": "4vA9m1rfdrKcow4SUQAZMYmGuFhvfX37ifK6qgVeY9d2NSf91mywfWN4BRi9ocofUNj3ZWeDfqqWEDJRki1JU2st",
  "key17": "2WUcokfkgUyvzJwgJ1k3hHRgMysb9WmPSxHDKP7vpSX7gd3DGJzKbv2vB4f82PgvKMFmv3M3DT3v4dmYgDyxC5j9",
  "key18": "3wuruc1hdiuSx7Vz89TmFvfHyvcHSWmWvD4XHcWGa114tMSDwgAnYXbhoqxV8ZJ8X4Hzst848xqN2cTDQHDYn441",
  "key19": "67RhjeCSMDE4sdeG9QrUpji2P3Kcr6wUwNR8AgnZ8XbHuVoHpXSaXFSU3PQLv1pbTgJr4tuV2CegPwHeKTzToPNP",
  "key20": "3SGbTKdFKH75N2Fgm11LNyfjeHisiPWZpspMBDLZffrUdZwzPbSPTz9PRGdeza4NB89LPQbchspEmPqF2byZpge7",
  "key21": "4M3RBHxxwmSegmpW5gHMfSifJShtRyUFx36jPU8QLpoiAuASZeBvDo8Uh1sJpJiai3sBeyXaMjWCQkp8pyr1Hyho",
  "key22": "2sSHqejGbww4Dk7STDB8A9nSdnY8LabZHfqdqLxhDUym12R7Co3G6LrBgX2vALrVFMVZNFMxiooppq6VrKWt1d8e",
  "key23": "dcNzqF6xrR3dtBxGVXAy38RbjratqAZ9pqdx6Ssr98cPdGeaSzH4vrQu3MCJZjFCxdQSZ64HiDkLMD2GNJNLhHt",
  "key24": "3Rujk1FyGvy8CPppfjw7NQKaoPJcyLdHREycd5J9k7JwBcBnkxf3DBbGfQuo8Fu12wM3p2LewGQLpHv9YimZc6yR",
  "key25": "3HHNndokeyzCPFb7S71iUeKji719AwqMDYqfFkf9Xa51PsUu6Bko2gGKNujs9jnczUoRjfEJ69thMVGBXka5h2vd",
  "key26": "2B4rptcUvq7EfSTgA8bqXYcsn4kzfXTSUVffs9XKEWa3HeuH5z7DR1kbcun5phESaGRMuxiuU8kpGDeworrfuCvc",
  "key27": "2rEMZi8vxFafwrtyrnNw3A41U4AAvox3ZVGiw9T4oFVKpsYNvLivf9izqp6GDugaZukjP3HeYARp282L5ijmarUZ",
  "key28": "4oajMJ2D7BDvfixbArdxFRzmU13bffkLKvapSbJYZ57sQT2F6u4WjarUagKNLWGp2VgCLyYjam5SjNAwvA2pMm3j"
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
