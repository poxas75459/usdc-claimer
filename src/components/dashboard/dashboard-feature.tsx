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
    "2xyTXPZxmRZdfeLEbLfxuXrH1jPLPSQvW1DYpZ1Yc6QqUgmKRfKPwfgzaAWLqbX6knDbf1vM9Ud7g8hZ4bo7hrmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYvsJrxgmyAKNGqvdPkD115Q8gUEJYEJHH1vqDfDCzCT8MedfqBMvcFkocmryvMZKiN2BLuntpwTsBSxKz7Y6CJ",
  "key1": "5nPVNkSswFBVekE2BnJJZMUXomVShofCcSqfmRmopAMa9NZeLsZtVWEVcGNdoTPitp3z7gmUDkzmeDwWQj5pXseL",
  "key2": "RHFVe4xKWK8yAZSgpaZfcDJVWhNnDwXTztgEZdqZA4bsKxwoQQafARGzDxGu2SHmcRhd9KDvkkXX6iEHSTsBss7",
  "key3": "3F7uJk1uMxWYSw7QoXqWanDNgYTNj9KooBU5YjpSHY7H3cYekq8HmbBCKVwW2gqP2J8KDVLaBoYz5CqcWBCmMKwT",
  "key4": "4oCVXgrQ4eSMpSKnP5pcdvzFSyiYErg4yZqFBNNoamqPyNbwE7shysW8RfkCqi3AgGcNFXZFE1rBq9oPHp2a69kj",
  "key5": "3zAqYdzDdEiV1rYfLtR62jqnq5oWTyBe4A4xKzchWK1dxUGmfZ3bBD5TgGb6c8R1z6MGraZh8yHmACatNnc2mQeK",
  "key6": "H4TP4XkVkHtbo864ocYw6CVBc5fFK4GU2cvnr9sxM2geMAALJZMnZb8Fsscwd1AkgDHuRmYLXujPpH5yHBiVwLD",
  "key7": "4oCcCoaf6ducE97CZe9JWy1NLw7joxLRJ8H85uxG3LgPoy68Vky8HmxvJixbTvJpCCoBU9wqmxyAKdDAFBXW2X57",
  "key8": "51vhpvQ834e4J3bDrgrkATqp4UwDWuJz8k4zALyUCVwSSLVvydTUPtzX7K8r7VAdcnXnXXjGqLDyVGGDnFJLWX4J",
  "key9": "s3FANCbXr2RPjYz7CHYAoa2vga7eTeozA9iYJPAH6DCZMfQJxszLDvEPVyAygF6xqQgoszW4gg1uagqmzk46ETL",
  "key10": "M487BYTBj9DKJg9aA4jY2jXqFr8eZswq1KKC2KeJ7yCrq1jPpEkwBFHcUT5EQvqfoa9zbDJvcMkyYijLJvtvMsr",
  "key11": "4oQ8m9ivNg5ViN8od2mGyEcKhy9KMNfbuxRDDkYxshs6Um5Z4kKgtPDSo29n3BdwsKm9msMDHdjyr8gAJYGz3eEw",
  "key12": "2fjD92sd2dst3gcvVcabb2W3rxaPGo3YbADTA5MLp4DfqG4nXJ6B7eCSxZm5SSMSJVWkzti3wXACj2ek7UBeq8tp",
  "key13": "3sWAzgGdKGMiohX83baEfttfXuDuonJuL5B5escW2deh8QXTLq5esBWsBSSyxgp1Wxkfnza9sLxshCc3PnoHyvgM",
  "key14": "3nw4Vz5q5stLSs44S9FCNF7B34Ct7J9uozjR4TJ2ea9qLFcmkQnmivLKgb3JGcHafmVusRrBphcSgrauGYV4empQ",
  "key15": "ENX4obkNQappSY5ZNYbeQBpnuE7WjieYb6nmu3wJzmLN6fy32whB8S1MDGbbXfGerqkc3cEwadCicViFi9pvvjt",
  "key16": "43DemN2b6jKuYjjE1WEmc5cXheoiMcvgDpBzkD57G9f6jF5rHQ8wzeGNrjMG41GFrAYQuC2gV9ntzUeGYa7kauB2",
  "key17": "4Q82UbA2rr3ANp7qsKymRJw9AwihDthhE9yctfVNpHHN32CKAVYGYoKcBESEUzyoHQkgWoCq1ANmFoun9FDAK2dD",
  "key18": "2EpFi7MLWoiWo5D9WTTNKn9EC1pSL9HsXV6XeJ5ooe3jcXPRG6P1JMdwUP7khTmwjZiAnuL4TfC2sHuHnRENUNcL",
  "key19": "2xU4sHMZCX2nB62eUcCqf1o6YfXBAJghi7jBvUQCHCYoDBWouHvWVWBSPbRewgwM7BtuVPQPDui272QnS5oDkhUD",
  "key20": "37vENdHy94ba34cgPsWnubGrdMv46Uf1GFDtvAm1VUYeCsJmzHQ4kp65ZUeqoNcy5fpJfmf3v9G9iHg3Nc8gonXk",
  "key21": "5EPKFR1iMBLkAMverYgqRjG6v1em5vk1aSCnkCVxxrbtVbiqG5qRSA6CLpwgua8gtJL4o3ABqd6mo2SEnw8RTzuk",
  "key22": "2jR1SLdUPZCT3P6E8NLHMiAuLHp7MdVXqsVFrnjrdu2jWYUnW29boknqmUKRUFaBo9NSvV5awGXygDyujW7bZjoQ",
  "key23": "5maY9AEhyAhoUNxy7fDU5MbEaQAzGJe65Tu7DCKb9pukNk5cSco4AoWaufGDxzzHqxJ6khtKbKptzchmSiUrPK4k",
  "key24": "59BdhH7SYJ1QhpP7XBSqYydKJg7eHiy7YoJ9qdpXZm1cpxohefREtmVwvF27589V2q7ycKfpgGb3tBnqZGVv8xE8",
  "key25": "2GFfx5fKqsU6fMxoUh3qNksFtLJjuNMAmudmQeLABNNwMX56TesaVDZRbnxcpyuGi84YzFgmk4hozdbrQPH5XXMW",
  "key26": "nS5gfhYfGjz2DmRMxGi6HfenWqqnSJ7tMVuqM5amgSEescda7BuKmm1LmcKUHYprnv4P7HhCvDpyiEtGJzhSxBa",
  "key27": "3JLz5QwgK46DTCfPRYSzeTAT9LKdfmApwGQVbvq8DKdmqSixjjNNRWG9hhQ5S5Jjm9U4KwND8NQEz2evcJr37fR2",
  "key28": "2FPNWjoXSUTHBM9e1bgVQtzEZYiSGquB3LwHzefgGYo12jgHSicbSaMkUmivGNq2euK9sVoZmYedKRSgcZmqQ2ee",
  "key29": "3pinXKciS9w7GZHz4yH2Ry4sQo7ydbBEQBiBTmRERxKZsJ9bAj2oMGVixvvMb5USx3HeGt6jD99LJXXbLoFdk9eg",
  "key30": "46HX6N74Ct8XQphh6aoY1g1uDGsNeBVeFtG92iFN8uzt4BNSboP9amu3eRoY5wQKc2pngJY1Z99ygnxTczgyMRmm",
  "key31": "5mRUrdgcqN4Tnz5rD4FxnPHbwZ8zZmoK6eTQtesmhr7TpBN63tWiHWkderCbBcYt55ALfMHEX5XrfSuTQz2LuMzd",
  "key32": "3kaddocoMofUUpEoPinCdVQUZLG2EX3WhoAvSJ6GZxx27i3PHZZEgNZpE1UUb657hQfsR6jaeGUjdbfM155BkLCp",
  "key33": "55cQoDjDmXz2rdWvVxhoiLuVjgeaYBKWJDGWiJHxhHbY7WSnB3e3ttyRCwrCRP5FiRJrJ1J3o2ZRhEMfSHcy7Cop",
  "key34": "4NPyoMq75qMmvyBY3692hbBAuuDXeHycQ4XRvaDqZAPSLwYEqjKU3RM69JM1fMBEGvQ7YEPH9dP4Dk6K4hGmXaHQ",
  "key35": "2vEZsH2G74BKTmMAU1DQjjb5SbjD422PtHhw9aMyv8NGEibkbnap1TtaQ5zU1e2PxeyY5Gkq6rJKWWh5KDwTezsm",
  "key36": "zgyPDZAt6mwWAtgNZaUyqfUTvQSYYaVMytVtBDbwv2bGjCJK7bXdNeJaCjNQeMfDipv8dP41kCHR6KXmxqmucFN",
  "key37": "4WNy9dHXeS1eUSTocuv6NUbmisNQ2CdnA28iyqZAmerCX9SipGFy6stN9wzosCrcBCCdM27vykuQmVfyRez3o5hK",
  "key38": "X16YavXBa2yZBLPEWo8zqPnSjeKd4d18GfMHk18WWsgdGjNJPoQsKtiYmA2KGEemGHEn2H2EJY7Eq32g7gnDFoF",
  "key39": "ut1eJJwNz9H45eUxNc1fB35UFvvMkDs7zJ6ie1JXMS2QFtygjTJqRYTnJZDRkaqpLo2ttr5raRrzGrMf2Bm3FUW",
  "key40": "k47YUoxzKkGadyFNZK7SX2V4ePcLAZLvUNoEFUPeBwdDhJ8tpZVyHJNfoJoQZEcPa69BmqHXS4LamUNyFZ1WuyX"
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
