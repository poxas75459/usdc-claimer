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
    "5gRe5WnbeponiVJd91yzsG6Xx8tw8HaUZ6wUTQ8EWynPa9dwD3g9J3pPUA91PMttc7ej35szLChPsmpEb5hMh2iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4mTU2Fc3wwazsVKjW66GgXh3NgXFgYNdGEVkEHvpr4bdvvnvgcJjPZQRz7jBdnkgC8PsRfWbb5Eb5SmetNR7DQ",
  "key1": "deCenQ2DaCucLpxL5Ps4oWLLGYyCaxyb3VyvVL4wPrfeqAP8FumStUkpwnPYKs59MF1YvV7uzVh4Jro9wYAvCrh",
  "key2": "4HcYHWxDin896PWMHR7McBGZpdz3SBngWgSdS5DFffKZHGhEoPSJhScZF948QGgYxbmzg6RYt5B7bdhxQpnjRJgw",
  "key3": "3Gpfu7FgKkkVS8i9H2rtPFxJK8t5b9BzWVtdw29Z29AK7qUAbrYYseBTLEL6VPut4A3jBaEUsEwGD4Hejc1qSEB4",
  "key4": "5xT46537fVpjnVLA4FRmeRq85Esy94meTE9K3cZwCTTohzCNuu7cEbXaWvZGi1urPAYSdUeNunM5aPTHsvAyUZJC",
  "key5": "5SAUfUELMGy5SyS8JrQCz7XQAZCGcnRqfspCGv1cfZ3r8RSN8wrawNgQ7xU2h4Ns39sEy4D7N8JB88oi7bxRAc1D",
  "key6": "iMGwGJN8EXdz8xiuqvv4Kd6MaaPB16b2WQoGZNQmPccdZTJeNwVYrzrYHXyyyZqixdTTPY5NAc1Cen3KMmsh4qs",
  "key7": "y8JbLWyty21rDfzaz1Dt2DnwFRbnn7rhJkhg4voG5dEZLnZNebvGx4pbuMjiCdJXM78ut4aGj7sPsxctMqYR3WG",
  "key8": "2pAFQTeRuF7qFcTAUjtZAiiPeU398nFH6uVK3kJeBeKh97uTv2SKCz9kjVAdkwvj7sDiErgZsPwZp96naJvChJpG",
  "key9": "3nvo7W4nULBqtLsU7FM6qPigvWnVgxfFXcYaThi9hwg4Fhs2Sq6S9ApH86Ksq8SsVN8jkH6wnGoLEPX1ndbYwVhe",
  "key10": "2yZUaSgo4XRpQdWeyV9eehgmnZ61CnqAXMJJF5KW9RiLbY7LjhCKGNU7VbXUURjUbYtZwuDjKG3mGJBjwiApCPFT",
  "key11": "2tyUeK4cPWaGg21erLFnzREsBps87NvvmJ5KRWXREgtEg2FF2iom9hT1hdmePUJULutSZSCRZG69XRE9ASMeNtKB",
  "key12": "5WwvdNdDQaddo9FAT43QYVqMAjjZRzFeCt7JvCVQ11gnS4PKcn6E64HmKWPvpo9BqGxcLGTWwGT7P56uwFMXjMPg",
  "key13": "mhXBywJYktAsMmViWs8gdSKNZLF2mJz13URN9Jc5fuX396eKQhJGLWtrW82f2CKCatay2vdFehSrGtZ6NMdRiCJ",
  "key14": "4sSjDtzy3mDuv8Q3gmubkmWnGWHGyk2e3gXYcUv42a9mAQTM4wSbFHvKwgya8xbjKCchEh8KNNZM45TUqH7DWG17",
  "key15": "3Rav5MYK3VbF2ZMZDjwpPZ2XTh2Y8ni6UNwcCQsnHqVyiCp3TB6SVywGGejHszkjGEB6XJV9rMcCV1uF31iLMdqu",
  "key16": "4rHy1zfAVvkcv1sTHouRwYxeo9rwKYR2zY4gKgmVwvwYUzBaFZcUP4BDnyFfVwLoxstJzAXKAEAdUe6f4HnDVRYW",
  "key17": "bsNPJqYbpj75AxZBi6vpn9sNE1SrR4YsRj4fV9wvHQCsP3JesG85W1g43Wdy8y1wJ2FzK6i1LoR7c1DhWHWTyLr",
  "key18": "5do2AQJC5DbQ3xBeoV7N4PUds7FzBUgbAEuxv9CVWtk5szp9y1iggqocmsk6pgUq9bde9rp613jNpJTXLcVWe8Xv",
  "key19": "41qgbhkuv1on3CNBaAeWVJ9hbngJXJMBeUZNkaMB8dQcFzUuDRT67A1ykxMsfoshXV5YWH9as5yyC8NVsaJ7UvUF",
  "key20": "3rnAUXjTTvWotdkp9zMwvWC7hzbioK45UA277tqiJb5ee3RSyssYFJnb3XhimHgeG1vTp1sjz1xkwN83ECGKmWuv",
  "key21": "2xezK9th1RbygfSpg6odjNijbR2DAP5j37a4zNfucAfzrjrSn3N98zdUFJz28bQpgwoHA9HKbXc4QrRq8dtTzv4s",
  "key22": "4ivpsB2zbzbrGWgW98BedLX3iLg43Lq78Lp1njDN4cUvWiL5ZG1XZEaz3Wc171J1VPvM7LWF9CgMFrUZu5V7c9QA",
  "key23": "5hknZxNwyQyLRNh8vXcPBHS3AgooitscXZkEXqxmQZim1dCgGkPBeTMXKQLvJtK3XSzDkXe7u1NVGoUbo7NKCHVK",
  "key24": "5u5kwsnh3kKnaWSff7rpBhKxF7Mo5NmBTWQEsyXcVa3PuMEpZTLkgmNKEUF3byzuMA7336vH3s926jujAuFwGhqx",
  "key25": "5kLnfbP22sUNetXxEW8jzAknRRRBaEiz78n5fSXdwg2P1tKqYA4uT5H9uniXTfb8Uww3N4vH8hFmsg41gZb1bKwS",
  "key26": "4DucYiDED2rJXZv1wbPAZnyjGEL3qgesNYvsSeAUk11iGi1GHc1cH78aY9NQzrtJ2Y6F3Koeif1hYfSQrpnXKNjy",
  "key27": "4zcPBvtPrSXfMxNqjLa3wjXSaCu5iKMqQaM47iAc5kmpLQgKpK2vLcjgqMCapJDreLBnCgMaYtVQhAMUVTqFuuxr",
  "key28": "3AHXwyNkoXni33JxqBnipCvsszNpdHjF7g63fbv8zhZEtpp2rrv4Akm7VkZFfg9cWvwhRYtXzJzYKNSpu8dfpZQE",
  "key29": "612foJvYmyqixZSSQfB4hadqNBuMGvV43c8UyS7dXdMik4x7syydTQoKjaZxDGy3N3BLXfT7j3aGj3ZYKwmH1pqP",
  "key30": "56ZGncuqt61hpSQgjW9chf48DkpCmXRigQ9a5RiKGWyBAg1dmaKYDXpVLHhyR4ZLBkMM6XR1HBMa6iZb6qf7dcbD",
  "key31": "3UZvdgn5Jjko37kqfgJeh5U71DaGs9cxKtqm7EgKAN5UAAJXqRn8dsQMs4VTTUqsvRjku4augymfErpsvUjpU8hK",
  "key32": "63h3h3dXWnC9kSQzgHFBy8dGjDqiwcVWyYJXq1WMzwLMzMUDLD3HFB3RUmf7CSjgArMzGAVanAvBUZLkMTUKRbgX",
  "key33": "2VvPbARMKfjRE4Wp6H5AHcBJmf5vRLeJFZF5KDCvEMg49qtWJhJibKNYBQyR6NJHMXDdfNDss7S5df6KcoRTETsa",
  "key34": "EMz47k7yuYYjaPdb6viVVKZNLUbsyDVkD9vJVyoP9Xrvnt97rtFjtZHP9UgLDszykMvzRryxLGU4ZsWcSQGKbdx"
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
