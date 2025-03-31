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
    "4wMY6Q7ENW2EbiToU2JLZymMkvUv7yeTNwFYcXNgFuLkvWUducGf25ZbJyKPdWJPCt7uRFFgtoPDwjwp79qXted1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TFAWaUAYFCazPjxxMSRrUUTyCeVbZDgFosvtFqJJx6JVgfyKt2sF6kuGDFjkgzcDThLzdBQtKW7GB3Ki5si2hm",
  "key1": "33xw44tp6G1PbqV3Ryw6bpnj1zgcW8td5RbaHGRoARebmExfMhbnq8RbrUvVSaNircxmEBeSss6wnqQ15JBSTkvV",
  "key2": "3uHvNh9W47VXLMXACJmobRrpawkg4L9QkazKaoTVA9GJaiDUGS44A7Vuib8a6L76GzyvtRD6AkmTzR2cvz6UtNdy",
  "key3": "4WFXEVEK8T35oLniQXEzVhpMtWEgj1iyYf3i5Yq9wq9qjV5rFtzxagFEy3VhSW9VQeJzFSkTnahRKA8nE5VoTWDK",
  "key4": "3Beh3uohjJ8TLNGaABPNKC1191AtbBJDiWpgFZufguPs9sAqcB8MoWUqPSe4SRYGNh3sDzrHV5PkBiHFcRrmAUEd",
  "key5": "45jCPLNUwvZbPQ2NUBywXC8SV2ckcNMrQbFBATWLBBpkCV6vh9gQ38drJW5A1FzRdNVdTz6bDUPv7iFw4xw4ubuH",
  "key6": "39WE5tBFHypeV1aec56Fy8xzrvM4FxheKDfhqR5n3D3JNDXgwwVUgbA85f4H3xgktacHDtpPCEmRLeHd2tMiCSVq",
  "key7": "3QB8gJipkgHo4RvhRU1McXDsNuRXHJE1cmqz99Ktdqu8nDNYoFgfpF7W4p6xxocpi9WMXrUbBNdVR6Focz14GsjN",
  "key8": "c1zxbTTAs4QnqBNJ3Qjxa39UiEjT2j6raECgSSFv1ypdptnuYFsrjDbTrCgmw2AVYGRncnq736besC1HSctYkkQ",
  "key9": "5Vu6tx1Q4tiNZGRrKBgQzCMjguv7jMiFxCMADWZ7sd7ynD1n7PebTB7pQKpnygVyjbQi9jCwL3TrYp5JkyqsEbd5",
  "key10": "4SCGjgReDCZwpBynaqYtjTiLafEtFwnXuGmoGJNzSMwX7msQHEy9RtWTBCMsVgwbZGS39B1TJMerJ4Yjd2m4MWpg",
  "key11": "52JwaT3sDYvPyF1GyEU8Fesp91ZWkfkxDnVYJV3q2eCmN5m2uJKjp5GNzCwDPFBinPpZW1Eidoe46dk12GFnJz3n",
  "key12": "5C9jSnoXyBigTYMPuxctUN45TXfBJmdwUvb6zfbnkox9BNJ7n7NatG3BWwChVrYs1CgomLJEUmvSZPdjmB2tQKpQ",
  "key13": "3D6WhMYvsZAHEcMmebYMXPL2W3bGoNmBVkhVRmnd9Wwi3AcPdibMqAS3qYgXZypSCJQ358EDMDR4A4Bu2mUgcNTD",
  "key14": "4Z71ZWhcq99hJpeUTzqhv1Hr771aMt2D3kKyq7nix5WPzaLbNdZM5o9dX3NFx9MqvXxAoAiboQCZqe8JrujGB4mA",
  "key15": "5ykrDVhYHiPp66GxWMN3vGnzSTYj1WDbu248uDifWdZ7m73oW7q7UpGxqArT4eKqdsgxnmF2Y9ihNLT8qWx9VuhU",
  "key16": "4UrqYi3asv28QZh7KZnWNduapvhqjr2AangsdPur7c8zJHru6khtKqWQqWNgE4C2S5tj6hmzgguCotfpCe4p1dxB",
  "key17": "pfVzjWgtyJgJofrfTP7zom9d7T2PDrDbMk373xp9uU3sQRB18fGVSX1PEEEm5TUaq4jVTjiFwM9V2y7mh7SGvzT",
  "key18": "523mBqnbvYJgxCRG63ok7GaKvP3bc9uzcfgej23hCUmEfpZBEor6pLkVvyWn6BwU4pCwoz9cnFpRJMkm1sPRtKkn",
  "key19": "31avpLWj83pXZ3RWALXJiYNbUe5UZcXmRJvcvd9GZqUBEFvEFBXu3YRP4tjoW7TK5Fyx7hMXL6DPWzr9HqZSMXQf",
  "key20": "2C5Ra19vfGEwmoqJcPdQiqF3E3uzK4x7GkRHLwp9rb3Sf3GVNpj6xHo1rxqsqrnvWTEy6ugBDdtCK27rgaj785cn",
  "key21": "3nW5bvCmg2cYenH3ufZMXSrAEBBgvcDAVKipiMFhPW41Y11yuCZnzHFMgesse8aot49DegsY7zamjp2iN75tMeNd",
  "key22": "kcVxUTXUZV87LTubmyt4Yeko4z1FPfhAiXseFYw9AYopKhcP4mfqTYfXugXkxZcePK6FfEgTEk3ZZTMc2oXxtbG",
  "key23": "3jYDLyDZm2yBHCkcVJEpR4QuwBExsUAXpKCdq7UXodzsjtn7PY3tWoJsoziGhahidyV5CDHsY8zKs3eMzqbPMKKu",
  "key24": "4u3TgbPNGEyJfw1nYUD6fJ9PUHWWYaKnUfbTMptJ1eBNjsEZ8VPNQ85etRKjDDRv4vjsb3FPHJ9xspb1Qrkb74Nf",
  "key25": "2Ek2CkMBBHp5EmcwPiMt4hPqedJW87qb1Rf5JgPVrNaEzahPweNDyD4eXPJbSZRmhjJ25jHE9ubiuudezRMC4qC1",
  "key26": "MrPEsWo6wS9uNDDeycJ3zbfbHDh4xHjTRbQzp31wDHxPprbPNM2k2xrEyniK59Gm3YhmNuis1FGvoTZfJedNEkd",
  "key27": "4PW1cFGpCAdPGrHzDMZS8RFzdLM6wwbSAYD1ncV4QsW9iNnKdG44JcRDNr64iKDyVbdJd2uG8oQvaJx2B7GK7aSV",
  "key28": "21T2V157ip289niXqD1u1BXP8BjHdnD4L8Dggnv7AM3yFgX8rXjLjYQnJuKHxxq5gUQvwn8tv8oKVgqGziXXhVta",
  "key29": "3z3YL5PCBvXZc4XQ9kmkxKMzcF2DvV5KZxokyosfTc3BSgWxBjB9EdYyC8kKFgUxXiX17oKHyoDsvxAuuh1vzSrH",
  "key30": "q7W4WgnY44fL1p7MzRkZQVuLEAeMH5GU1T3fGjRHEqyjU32akdZSqLYK2esPDz1jKiE5wXodX4PEpCzm3wYzgXU",
  "key31": "2gHa5MVZ7Mwf6bCReZbdhLraMJsoWnXcghN1eA2o6weYkKYDUy8LMHfsmvAUBB5r5Fsm1LN2HR3UiENth3jKXN4X",
  "key32": "3HdRUuNivCbmhFRvGZ1fNccAGpmmtb3issyXuLxGQoS5qjJ217TCXVHuLHtxBKfjvpeVwiLX5PzrbUZNJs1dTUyL",
  "key33": "5na6RkfStvYjFAPiAjyREZN6chdbUQUG9SNF2gKh597rPrLu8CEQvcRrDJXvW1CE8mVxBCWWWAjjnhLZ9FgBfYFk",
  "key34": "5sw7rpJT3eRH4eRWNJgo6mQTKgw666hAXfyaZKfr9gKjce7LkDu18udvEjub1sBbTGdkVUHmWS3EhMzFn9BnneAK",
  "key35": "2QH2mkeZiwtLNPpCCiMEAgeKcFrCuyf2hN8ySZJKxH3tbBy7wvTMRA4cBoP35A7vwMGQ8BGMkdk9Jqy8ZqkQf4pt",
  "key36": "4Agz1yp5CkcvNEUVyLTPnErkq6mttju1tdFFJfDbxBeryvYjVZXqxYxgjEdcyu1mtwSs5Gr8645wRi1nhkDj5DTt"
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
