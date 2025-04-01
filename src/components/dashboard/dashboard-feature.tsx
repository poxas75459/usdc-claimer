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
    "524inLPUKoVRgKVpDF2iRTzstehxyFzBwBk2va4au5FuGiRFpgupWGMADM3omKNRsRh4W6p72jyReE7mfB3iwN1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fuz2zp1wgtMSEczg7Gnyoj5PxGZNnPXZJBTAm3UF7v5iG3hhb8Qj9mkm28FtRG6EFQK1c5Rj2anbpP6YXmHUXv8",
  "key1": "39mmppJDENRobNaaFGJQ793hM6URLZnWo31QPaGqyh4Y8bBhJF4CchQZcdJKnDFDuUbWciQoK8t7Rnea33Zg6vEd",
  "key2": "5uvc1Hg2ZmKpsMC8EoKJubK4FxvxLwkvKBUKmvvxU5sdaYxT3YKPoat7Fd8wHJderhBetR8Pidke9Rz4RaPmDMRx",
  "key3": "2TQYnMEw9JnKJscVcMzwAKrwdnLwRDZQZwNWUHuSB1mNkKfaWXxCbwmvvDudnZ346hh3D62zhvxTK3avbtyDXnE2",
  "key4": "3wup3uUrGZdyw1CBkqJe1oCJcqpoBjPTai3UmhQhet333Av9wSGMrAeKozwNvfGJG9uoWWWrb3jgRu6DrwAPkurm",
  "key5": "62nGpcoMafN1QkyDk5nnp13MSjAgeCMRYkZ6cLX5k5XmMZnX6PvHTojBXnG3123LkEHerrMbAdrch9oAFxYbyr5P",
  "key6": "3xYn76oLp2zGxuYzA7S7x6VfnWW3CY9QijgqCYcZ8myXn3KjEqEEkpJBR11axK5qcSdYPsDBQSJMDtMQG1o7B9bZ",
  "key7": "5CkMg1C7uJJ3zUzFezqpiBkTuFzxwyaUBYLwC7KH4Gq3zrLD2WRvxAMdSRfMyP6aBhMxnHLNR8dojuok5E7BE3wX",
  "key8": "5sNnKKPL2qw52oqoVbndwqZKZJF7DuNsUgSF8iNcCSPFp42ogaQ3hg9RJN7fLW6vgq2PYz6h1npuzqoFvv7vEAYx",
  "key9": "65BnrQn8YDoZWfHZnWPWPJsLuHCH7gX1QFUkLPYy4w7eVy9itHuGBUpMa9esFaZuZ4CisR4RDH6mvLfXyDUaYDDH",
  "key10": "2XZWWhCx2FyYg5NvcG5sAgTZ5TZjP5KFR9AwVoHLRq6yhwJEorNz6rdL2Y7PhRvpKn7q3VTp5pua6gWPrLpQEu5M",
  "key11": "433nq2FeUd7VZvWRiLpAYDxysmxvpUbHetv8yL87GHMpNCuN5pTUe3mtiP1mfsELfVBm5zuYdHqfYk5uC7J7rgZ7",
  "key12": "2hAh2MpSuhHzK3dxpDUGL4g8ZL818Q35229hkuDzG4FNJBk3TDLWNbKgryQbJAC43sBgoX7whdybqGuNtRUJQkGK",
  "key13": "4CzFzC3WPGMtTe5xbMFHRy2HTFnf7jhx5BcsxoY9F6s4MgxgdiiLcBK4cp9LNqZ6eW7VpoFGKcEhmMFyXZYjiJfa",
  "key14": "2gEjgnnqX3eYuvNcZgFe1BHtkA67ysCyT6gfP5domgPrD67iSPHvF6yTih96R1o2ZhSjyuAtYmqcwd7Q5AWLPWJP",
  "key15": "21yVw2QENpvKikY8cnBxaDK9Sja1v8YSQLqDTdeGRQqgpY5j9RfPwdDbzv15sbi4q5FHe3APZMsop684GPXqjrSQ",
  "key16": "4YnzeQaR3tdgxsvZzvSbrYxjhhR1SyW5mEGrhmnaX3U9BHE56Wm6SbG2CUwxw6o3wvbYBH3ofdqDFGv2MuGcujb3",
  "key17": "3CB2VQ1sSjn3K58EmnojnqhQY5PsBvLmunJRJWoH5ZaDudrHCJgRZ8pmREJYBgXtnt7FkP6tiVsAmY6r7gtQDw8Y",
  "key18": "5REQwcWoPY8aSC6qf22zncxuU1t6mvsCE2QjEVNUCByxXdGMuWQc6FYd6ZR5kLKDDtHQzRXPRCag9CefsLPSeqfG",
  "key19": "4J5AhpDmvo9dfuyPb1TN4GLYMjeTjZKZ7iY3DXCYNYoDfVRjim89HxxjjmgqbSR3RKSNTCoCGLZgn37iEQQyPbNx",
  "key20": "5JVVRVp7Xq1Ywev49swMj94FjJJmj34Ck377A8zQJ9uvbSRWo2T7M27wxr1WVd3oSHHgoLdpbSNBY34GZgKxkJqE",
  "key21": "37pwtcFecaGSJsA1creqXGFs6J9bRuc6aNZhZej9svuMbErEoHAi6Sa2QkLE28fqocgQAWTPTyJgQWggAmbjamiK",
  "key22": "4ry5NuaBFBY91qEWpCgiQcHvLe4AXQM2UdDAcACcMf26pcjwyzLgm6rhWHsqHeyCCv76LdSE4v2sziFgTgfpfpRD",
  "key23": "d1kX2h1HJA7t8tbacbMu4J1hZd5nqQozcMY5rnFUxBagJ48XppKrM3fWE2fRd3Tw8gGTEn3Jh32yDp9zoaNRw5z",
  "key24": "fcEXn6wQCZT48fub8s5jauxoSZtmUM5t3hfYhzEWwuoqGcFmn8FmKP9Jo8p8f29vZo2mrL8kHtWyXZT67MvYWfv",
  "key25": "4G1B3aQcBeMKpwYsa5yuTkzrj2KjD2h9jejn6K4mB7LUHJzhDNNbdXhgvYV97AyqJ2UF9F1g8m3dXGuTByFXAARc",
  "key26": "2CLCcBkARdqfu6hzMeHWptqC2aAqCW48qyz4tfvt6CF25Cd63fxPqhMSrWFqfSFTbUUqqy1vXpSYLeYitBWKJJ5u",
  "key27": "3ASuhvqNwCR7oWvxtJgM2gX32CbTqJ2RX9rpYEKUwKKxCbGzTCf7kSz9iVCtfHwmEb1a45FytrSmUxTfpdeSzvA6",
  "key28": "2racFxNcL2p9BQeFvQEeVH8GrwaRHgLjDiHUVCkbLAudbuWwCwnHcXgc2vB9LbFTMBLNnyeu5Z2tJGKkX1ea8eEf",
  "key29": "2ZomeM9DH5irWpgQHAK678YzHbdpKivp1d8u9rK5Ta2RtVopGnXQUjxn8ec92A2XT29XJuZ5jnaXCaDL5Qk2gsCJ",
  "key30": "qdmY8rJm8bQe2zipjKrSpJ8yRLELpEPB7HTQbJ7434JhjBZc9QdVGvKNAB5a7qGnNF3B7Q7Zco1vhHUixQ7efcj",
  "key31": "2MoUdQkbqjZ8KCb5WaH2odj2QHpwYqUCcH9STQWSbVhQJ8n3Qs57vnEatThv1b447V2KGHnASkmN7X4hVFJWv7pK",
  "key32": "5Aep78hYQ1EFd7i1TMjZDvrndnoXqBZWgNYyDNaQ3QBhmRSiPpZNLpHafnQuuQKXxtxkLSoZ8qUyu8G1aNjKbdtr",
  "key33": "5FLA75MJHhpAc5gzcvdXMHscZxacDsmGykkRWnen2mxFoQR9AkRn8RJgSS9cgtcgDWshE7kk1nRarAYKwKfMSSxg",
  "key34": "6h5nfURFT5bvYvNwREkM3PPbfCeAnm2997rBcJBXkwyML32E1dmykvG4AgnSTmMPeGJqH3w3zLEeL9MPEFpi7eo",
  "key35": "3mJHQHQX9SzFse3EW9Q8f7tKDJV63HTCHmuGf2UeH6BXc9LuKMMkHJpYQF3gT4Sxe5My53qowL5F5ZXFwYW5B9W7",
  "key36": "491XD2Jh93q62kaVvotGzCjy3Lfxve8Z2RvrdJJKzsVZqpGv9mmPpJATBXq5jE1Eyep3DRufHP4aKFgWX9gjZJ4z",
  "key37": "j3i3TinR4cQfpXHzmEobrizX3FfZyysyZ2TTeK5JCUepqRp6EC5z41HT8DgZk8a69ADgxkiVXkqgKn2siAD27BB",
  "key38": "66LVGXamoZ8hjMi65Zq6JrETTj3A1aQsAv5a85X7sZwK9ZTCEG1EaxVbNbSG2ddtR8vmCxGFriiMq9eqhfmajEgm"
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
