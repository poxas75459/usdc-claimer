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
    "5si7SyB7BZzGXKozL4BYcJtGSBdyYGFvCPcnB95EWpdCAf2Ca6awe378cdwB8cVjuwF2sncr7SFx6q6SJuqkvkYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhUNxuGC57kqWuLHyLDGB3UVqVvVGvPhqD69Wg7oUqkzWnYFzFBZXWgpmmoorzDkh87SrCJGkbxq7M6xySHUuit",
  "key1": "ez1aMY27QhvDdi3j4MskWvFCTxZS5zu4E8NU4G3csFAfLHXXEi5axVrBtkEAwSV9DJ9E315bg8v1aQTX7v4ZgU4",
  "key2": "9u3NuUGaptN4g1MH5YjHeKmkCCdGANNHfF1Xfojf7mwsEGVcG2Mw72F5ccCtrb9n45qopDccytdVNZhycqQCntP",
  "key3": "3aFGBBDBAQTkw3ZmKfsY36487JTT5ag9PLJPnLPqhRSkPKP5is9x3SdXp2YCPoY3GPog3TssU2i3YFWnsv4V4gRh",
  "key4": "3MmNyMBm96LfEG4xDkMqe6m2j62TEQT7NUXXuoB3AKgwZaVTMck2K76pSFKRbgiZFZ6yHEzwWpA9Rqjr8UUymQqX",
  "key5": "VzVgXVTQnj4dPmUpGWg9MTbNqE9TAGT52JYrZzzJXdc6FYwn4SEEhvZWEstojafbcexHU8TPuAoUznyZKZjw8du",
  "key6": "qTXtupQYUN8K7itjLS4x5RfDaX7YU11gtaVTbsJmqHySzG4iWygi7px1Np1tckUPurNwM8e1wWTCwS8gk44819V",
  "key7": "EmNGiGgZM3WHLZfFpn6D6XUYtqgjUdqL2p2X3JMtLez5U7qsZJ9bwGe9g4CGqdefhPZJG8guL2TLmjPJXkha8SD",
  "key8": "5CrcTSg1z9Wsmav289RCJg5323PxyLwt6vLfcZxxeoay97eebE2UUZKyXf22CSodvQdLWJQzf61oXgscNbkYgPX1",
  "key9": "5RmhZ5akxEkDSSrn9dFSiqsw3y5jDqn3Jxg67fSNyVmXi5tz8m33zFKsQtBH3Fc6stwrdDroGjXcFRuE95AYXkDN",
  "key10": "tdvrVD4HXcoQ4X7nTHQJWAa6T7VcwWu9R4NDHH99sGbbbtFujC8bdE2ekGbZcHkNkxLjFKviupzqXjoKHvsF6MP",
  "key11": "2c38qi7N6diZM19DAQS7Tz79qExqmbqi4Fr8ZbFmvnamQTyB1vwGMZqBq7WrWC9a8pC7twfU21TmLUQYxCxaPNWA",
  "key12": "XmETXRer3xqWtfxhhQRNCAwh3w85aBzmL7i69G9wpaNrZA63m5gpqHuB5YMLayS5U4NtrcD5tT1jK6SBLFihTQb",
  "key13": "4oJn2CHosSbH7pQ3zpgir9z4Ux45tp9UV6pDZpSP5MGBUvpBiQpoWpHhtFURUGjSj75rAKiMyLnRisQZ9WiSiwuM",
  "key14": "2hfUibxnYEqKPgPNSnHTexC3DzdAGvMxPFQ5vXyw9HTRe9EKtY9SHYFNyJgkpJvRqefXPNpogmybCyMGW7ePmnjs",
  "key15": "5xMSEvcR8ybF28zFrYkKGATgiz6JDHpgp5j5J8dVoGJs4AM3Jb5QPNjCUH2FodhrtzvhNDsyfmJvS56C8ntkAwXd",
  "key16": "5DV4Uk45xqLMisiemuvhpW71pkjNFwuP3BWZjfMMY68QgfEJXHy7KPD2HzcLHxWrHqaHBvUnXhUMw7Jz2x8uNe76",
  "key17": "2U72oANDn9Q2WBXovscRpT4JPAu6topGQRzoSQqLVVEsD31vXGhG56VbU4249hAhPAswty1PzLWxrJ5cB1SHazps",
  "key18": "X2rFrTYrLFnn1nrvwdgR5jMoLjYxf5g63mwjqCbxUgcsBxrWDJ9tWTbphFooYtSPs9ozrQAuky8YSw6WwCbQuLC",
  "key19": "5PFSoDg1newZYLKYdoqU6PiUvhNn8pdBqGWBtk7SiMwgzEFjWuhoM5kY9zdu35NxA4kWkMRNLUExR7oSFVmgLJfy",
  "key20": "23y74DX5VUAjptMoDKkoPc4cDd2hcfZRg1ZG4zQFFnKoxULS3tmpFaCFTaPy5Da5Km4uRNgH8po56eGAeTrtHPH5",
  "key21": "2Av5ve4BXHVNTYSkBto9dWEBpXYUQmMebVfMPBNf2JmRYRxunJiXGxQRJxCU8pHhFFGxHXBVHdaPUHLS9oJ8LZJL",
  "key22": "4fUFrRNKoDjvxHAR75Co3JcoabEN4AP7V5DKatkbmGnnN2wRFnCitcvmsi4pEtvcwUVqSQmjjoqeyHTErzdwAgiZ",
  "key23": "4eQeJALdkryfP4ssPM3kz4LJNJzxLD5NhYHReLY9zMooL7MmT6WST4nzEkET1m3QYKNVioQ179o3J4894N1UF4zn",
  "key24": "2syW3xJ5r3P8ViswLFgZQZ8kPE51WqTwQP41iZWyiKYbBWRffvyKdBuuV1Ju2psvw4FsqmJKs6W8PMWPznwxLmjs",
  "key25": "3Wj8TNHqXvjo9vHfmzAAqCwdNaA7m7uMiDEVHAK8Kt5YQ8urVeoqXmYeKGMgfbBHQ3rb5xeTZVHGmVdd88VN91bZ",
  "key26": "4ePbospE9s1Gu1UfW5Mtu3BWzvUPATh6mmnXboqLb4YG4L84EdWiEq3AZHVacXG8NvXcrcCRnWnbfQqEAA81BkNS",
  "key27": "2zfV3eQuTfqQNnXhdXtvSsuiUWJm7MX5ZXKJGUooHentU1fMkqjY7tXjzbHycZLjrU4DbDgEAj3nLm58m2NtYxAv",
  "key28": "4P1UA5my9DPnm9JDAtRF3gtYXvHPU9aU4eVSmYQGsTVx7hHRo9dmDkxY1gSohpnAN6BFauxfXjqxGbdr4HXSy93J",
  "key29": "3R58P9JF4k2fXfgUt5sUGAmuhpp2x7c5RW9NiFveQjiLGkjmzhCNZyGiamiz8uwbupZqX5NVoQm8nEceTzPn5xYJ",
  "key30": "sJksfX8xKtCoj4hsjsZ2xyhoANUcfymXPcdAgYToezUh1EAbYULN1EE6b7ovGN5MUB7CP8ZmoTJsyKdP2zyfTCB",
  "key31": "5zqx3oww52LxtUpqpVa3dab4YsLQvbi5vuDgYLE89B4CYrAEpCp8dBYTk7bMTboJFupqipNpnCbQ8kxGu6AaRpPA",
  "key32": "2AudeJHLpm9KzuZAfKWFgSCgLD9xQm6ssQK4ot5JmC53bLJhW7vcFdWUwhqjbrEjF9zn3FZwibYZsfGgEdpmN3aq",
  "key33": "3iytimvnSQnpmhWEcjEkV6jX5ZARz6MLJTtVDt2FAjeTumNqS7csVUQ2zU2rarBSpYP3z3coyZXv739R5e7ZmPVu",
  "key34": "4ktZ6Qe4TuL7QwxNGinJTEnN6xm7KnUByXVXJJ1suPVB9YwoNiiZn7zFnaNBTtN6ojAM5PmF4LGCq59q1wvM3Awx",
  "key35": "ddxnDzJo9SQize4KWXs29ajXRkn5n8bdCBgRycHxrJdicmf9k2oxh4iZgUjKKZBT5XfECdi2SkmWisLv9UAPgzR",
  "key36": "94rJbkvGWAAf3fvP3rCUCoMvj5iuRKbx25NQhhv4W4XJLxDWxjCu7GjfBZkyqwmLsWjvsMPqNTR887P26tdq58s",
  "key37": "4pW2CehucDpSb4oFVc3WsoL2hZnc6U9MnYWRn89QxaWTY81cu7dfnWXZJJkpqGRSCpSdiWrE4UtFwEndGHfwu87v",
  "key38": "51hTBD1b1WwpPjuFJK5s6qZrcLZ74GUsBmDTYkFazaSKuWRJ1NYfc8zzGGuwSwzzkZFGKoPVV4aNMCfYJdBx2Gp3",
  "key39": "63Yvawz8E8neghg93kuyEU2m4H5ivSwCu9eAJ8AodHgNh8E7MRqMJSFmCDB1mwP9NYmw6JVmxRDjmNpxbRPeF5aW",
  "key40": "5MrLJDcbW7UZ6nF6e2mydhLRugyGvmM7mRjzcxEKDnfaN5NwintvsBmyZwY2s94v7H4AsF5ucPjWHXeoP148UdRR",
  "key41": "62UjjNbS8Mb2eby4UHUe6dBS2tgqSJxjj2vJnQ3GzWbcrpU7EDTtjHJPtaaS2BxBHxUFTf3nbXngUrKE9fqWQY3a",
  "key42": "2XiDzudsm99vQWJTd4irLTqcR4D83EyXMK92BSC2XXLPsSD9SVSn87fcDbZfEFKDGNkCvh6yPPcjtfFjsb7Uytp4",
  "key43": "62swpg4TnT2D7L9K9u5qH7HLCqG67FQeNwoXuJrE9B9WHtbWZAqqRwsXmTephmSD4r3e9Dz7JHVT7DNsPzWxS8Eo",
  "key44": "3jrXfGkYgPD1rxHRFSCohGweE8xTmGNVDKFhtwYs3zFyqP3i5TdDEztKoBNyJFcUpwkdAaY9erxSGrvcooZTKnHE",
  "key45": "4icrh5Fg2WzGaBQTksFWgkKkGhvtvEoj3DmugsNYWjA8MsW6tCa8Yi6oGADMRT8ryf8K8eMYApRFKftbrtai6xdT",
  "key46": "tLCRHjUMednHVMRwDvTrk2J7rHbW4ooTp4RnX1DkdxZkuAxvnUYcVDZGhV8zBvXEjoRRGKVFmrYiR8noNF7qNWH",
  "key47": "29nxKXH6BFV7qYaFxiYJqLmBNFdpuLgEaTe3F2L8XW9MfF1XEiaLjKeceXshVUXjXGkEavTbu4qmKLQ15Vy7Xktf",
  "key48": "5bBq2sVXoAvQiZw9SVqrDbyevvMNe36wphk1qFM6qxwZDCYNV6Sb5dxedmKeeQAthq8FAqboW8tRg3TNenFxH4he"
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
