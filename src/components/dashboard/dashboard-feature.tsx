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
    "4z37Rn3HkuidrRYH6YTvXkJ28XN9VAhstgTK5imvJCXs3Jx2tSRReeXKxeY22PvWVVbXQxt6p9uWShyPfW8KrX1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9uBRseroyE8qquEqDxwx683DnEZUmx4fWdhdckwNTaQ3Ej3eKeGF1HwfkmjEPAFBx6eJZFN4eGETN68t2KKKmR",
  "key1": "3VYp7dUgnntZvWTwDsJ3GcqxCHgcxZrbDaSr8oy6ciKM3B3S7sbBZJR8ttumjgbSJVjHZ2TXd88MjrAF3ab7hYbF",
  "key2": "4HocFbkw1GUedNPDmrPRscxrJLih2mzsMwHe9AZQBE1knHuKoAMA589EuQgDp1wbSTzSugby5xHmpA8sh33GxDZQ",
  "key3": "48iy4bwfkFJK9YPyTxxS1mx6dJbWVckF9yR81drkTg9PRZxqJYVEMtH9LNKRniDbi1Xc9XSthRYcFvfLLQgDZNDK",
  "key4": "3SXhRzZE4yAL8Y4VUHQFCdr8SomKWU8Q1m9mgpgghMYbVLpjxZrqX6ygMZAQcTPMWPhNTb2es6XG16kZfRVdM6CQ",
  "key5": "3LE4GqNEbyW8UGNudbx5yfiedzcBawi52Fba6bV6koL2wuL5Jm6jukQ6X15bUG7UJX7dZTQiGuoZT9XcmvgBS15d",
  "key6": "4UaBYe38zT8wexDURnfw2CnJpGT3qrPMP3fHwiwwqu8ibkhj1fWXjwYzqds3y4uW6L6MS5uaKCkAHr6H7czD3KNR",
  "key7": "4TVcvdpAWJuTLJGXDMpqqT9Cn3NfCT4ttShkGVobWFb2XuvnWkD8cJ5Uteyh3CdDjSdHLs8xSj4ophWa778LGqWF",
  "key8": "48ywXABd7nJcLpjDWFGQZ2LTL677sU8HvW4cVGLiFFKWzZih7UFTezaxLKmAyxK6piaFArck5DXPv5LtyRvSuA1L",
  "key9": "24fvRpMC9zSkdNQ6DufCqFPyWVc79rd88CrdbYP8zUamYobavz5y6Suhvu3kak7CBW9a4HqW1vkkKCEnTmKJnWnF",
  "key10": "36iSfJXt752Vy5HTrDkZ9ATEx2vaSQAfuwPdbtK9X4fZwUxUm4F2DT2xhehCYSgcoo1JtW7UrkDRo5J7pg1cZ4Yd",
  "key11": "4uNyou9yo3FLBoNqLyypkcx7wCU7YYELZcAxe5Ms61BEucHZgJzPy7f41CRHk55dbstsS9VMMkokL9mTW3ESEjYb",
  "key12": "4MJsKP6GtFhn4M93TZ6mmXxzVbfefJ24JqAXVd7bxbVbbQqoSJmZngoUUJF9NPWbZu8KtzG2ozZbnFzUvhHVCZHB",
  "key13": "H7LSGdUUV5sfQWAepJEE9x8EG3eJaCViFc5TWwPb524Thnt5SJRBfD4uDJes47qQFKnWsWiGzH3W2aJrP7gNQMf",
  "key14": "BhJcCVJHDCm3VEazWzR9xVbLaa8JzpouJqPVoQgJeNBZDXs6HZ9RkzVGoFFhzgzwQbcYH24b2WLDfssk8vnbXNJ",
  "key15": "336EYiyZEPzvULWWXLE2yu8iw4DiRMA4fJ4RX7pyPAyCFVR7pHDZFyHmZE3bdWhQtGxXjzmitpnfJH1SXyGpqEWn",
  "key16": "2sSgoD6ig4iCS9ScjQ4Lg797RetjZxyyYLqNUYr74Qr58SAzJ1zW4Q7twpTJohNayfp6SgK4JQjQoFi1DxEnRh7r",
  "key17": "3nntXA9qqHhLgc5EokVxd4st6432eXsm4s6oGCWULZEm8pS8F2KKP4V6yimg4HuyPrrVPd6zQSedcNriVoK7y2Y8",
  "key18": "cohMkgXf3GFqQixyBoTQETF21i3gCKJquRaDr6ERG7rb69FzJAMEcQATJhmk7yASrgtAHJNjrq1Z6tH1HyMjaoM",
  "key19": "3iGNxbzCZsPjv5Y6qaqiaeyYhCyq65neScKoEEAZUnikGAcNfmjZCDRkuBNFzdgCc1JebKgbBckpDEP4xd1EYaGb",
  "key20": "4MEyxqRLHadagiuDvjArdCFD9PcdbcVoVb3sD3sWB84f9VpdFtTR9rEUkLgdM3FLMh4AiH5UbLGVWNHLVdE5549p",
  "key21": "vEKNHfcxABgZr87yGATYcdFoReCUUjbNYEJHd7SL9b3XmFEy4f8BuPc5QfTEnnFGgMaPesxWPRP1iZMRiSxQHcs",
  "key22": "3a7CFiTQpbjt4uLhx4ciLjR2rAhrCgWXYYutXtRmBi1tqMAx3m2SV5Fqvj87ZVoBXMRbLh7En1nd7fmYLa9vcdFf",
  "key23": "4W3cqfBdVzEYiDmXYSJ3BY8UfkGHgwp8uNQL2RmxshEeFJGYqRqFX5QX1RQvwDWWCzrRrJCZX37EfYzwe9JWspn8",
  "key24": "4FmUQzQCDyTffYe3AsGR6VBs9JZxZGtsZwc5fKVxiGF5G4qyvTsz6ycTeSZbyovnzsVXHffRVsHDW6p8SMrNe4Au",
  "key25": "2uakdHuw3wZ444qoPqn5N3QyzkBjakDTEChSmo4iQ382fSoG6TMNhqMVneEKaZ7QZjr818aQ9hgBZETHcHK39muX",
  "key26": "XeuqSKUD9k8YQdhBmZXNPPDQ3V5qwxbkj4Rai3SmxMcVxqyW98H8czfaBaENbY7bWAHxBfzTDtLKThHXUBCD7Fm",
  "key27": "23su1zL9Z2EyRMxTP7TtyiFGW6fAjqXqrYVVdU34YaFCBaRBdYyNQafRBG4ghrftHLFdxAFYbeq1EmJQ62NHGExF",
  "key28": "2WRodQNvLGkjx1Zm9BtSxQoBcfoei4da2kW7mVmhiCNTFeBTdKTKDJtEQc1Tu5tkHGetMHRu9FemLNBkb1TgGcdv",
  "key29": "5WErT2MochztGYWostaqZFganQUKxunU1diH45sbntQVdBHeiP1TEgQWkhsacNndkVdRgbsT6and1jMum2sqxuGB",
  "key30": "3bX61RaNngiwCpaBjjcjDiWtCuQLQ4zaeemgWNMVAw28hoARhjKPgLYwa7bAVpgCT8RPozcifyBbbEZBwejGdtAc",
  "key31": "2wagq3c8J9xd8kr7FTcNBPXbtKrqpYu6Z79N1UNwMuDRyXUacTBgjQj5tMZzgMxBQBP7dYz11dzMscBzmFEKm6xW",
  "key32": "5pvUbRPbxptHioqo6tzXcHCNRrwUw8hzTiewc1Wvv39n9C562NeXRTX76xdVwkXzsVcJDDhhSGfBTzQD4F8okcg6",
  "key33": "5UKkSLGsXt8Rhu2qX9x5PRekQZjTctcNFX6TTFQhGPi6ky8pp493NEEBsKRaVBm314nUL5rhaqVocHm2SEjH4dAA",
  "key34": "4FhBLvwzUgS2iB199H8keyybgVDXm5KJ7fNhFxZ4haGUHqsytzdWtt33otmvC7CB86ji3rCm1tqaRUAjfGHyFP1o"
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
