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
    "4s1bsQVjPgXt2muXqbrfNjjRRE3XyE3dTbRdD351SfTprVbiTnfr4c8Dmrdd96JdnZ23Pv13daUCKjX5FxjLZu9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95ugye1nvQRHLdf6fvmYSrwt4Jogb4imMJ2GAyXc9Aa74rHeR1iA9i1JA44GKQs6QzUjxF8niaYkTPrGxpc8du3",
  "key1": "2j7Wi8nAKYkG3NJWdka28scfsNqXXbYzTY7jijt81Efg9BQiknvJvVca3Seu8gWegaz92VYfVaF376yDkokyc7ev",
  "key2": "XViq6Hby3ruoPrhtpiofQ5hsW6BvUkeNvK1PLvNxQAV5kFVcNHAo59u6vqoNT2waV2tdkg8rEcVTcevy1jsd5bn",
  "key3": "48wpFcAortoXySsVuooEfLaCMbHXuTzWRpVWr2WdHxyn6ePrHi4U35HuvxNDEEkaezQLb5bGd3VE5M4FGj6DV4iP",
  "key4": "4XDCzk1KehRGwwBE2Y8ubK3AmTiemhT3svosXpJGzX2wnLgecWFM8Hkeu9fGFELTLagbhzS1uhRoXybZG71Jrby4",
  "key5": "5YAnQcJsNsh6NCWZ3DbPEb55gU1o1abkWPfiV4eF6sqB7aKkfuuUBLa1gZ929rt21ZqR5SXAJM5YAWDrEUureEdH",
  "key6": "2yrFThN5VZuw8FRmD6oyPDccb7CAFzbVY7F2ioXArB1YW5CkGpmshEfXjAyyYDqGq4b7BYwstZigzraFRX1CNQY6",
  "key7": "5fxSWJLbDJCxXJ2wr3LnsTAGNtynWtnsUEwP9xLFALEyuCQzB8fBBf7SQFd7NkQjgMA6sZYB4X8KNZgry5qPckKP",
  "key8": "2FaseGu8C7e4BJnDCKZjFmQYrJDShGgYmfg2SogPcVcuyULQLAHQdVDC3ztnLBQq89V16V4ykarMzfoXrixYNyP6",
  "key9": "24TLd1CCdEpvLGWMxs2KRGLhKdfyn39q8ySWKci4k4jaAURGu7rHcnxerHUuxeF4bJMvWH5NaxgjGX9fTbNMDfW9",
  "key10": "9zu2Y95mw1x9axexPxnPteLRWP5nyyrWP9Vt1g2o6qNzB5r5QgTpZ2rrVRYJ6jF3JogNkwNTUQ52opkB9dHBDzk",
  "key11": "4uL1HT3RV3qRab6yAxZze4ZJpZ6FWiKnXYkpZC7616j5dK7hvqiYapEc2g6BEzuSqJC8bSCSAYiTdyowAi4hpAi8",
  "key12": "3RSETWTVgCE8Lq4k3hE6e77rEZfiYg6L3ZpSQGux3eT6UqMpV87d2a3rWrnz7Md6yd8xDcYXnCUrjbJ5jmugcHaD",
  "key13": "5hrpfijAF6qFLj4iFW6nhF4onrEUoXk2p8fn1nvHYwbyipUZXrn2fwsChj6AEY4dLPsuZ5zuAU5tU4FZmt9WLMjT",
  "key14": "5Y5yW7wikY4j9ueQTKABrsNLUmf2MweRpGg2BNz79UmDdh8hTpF5fnZYbxLd5F7h5v87NEr754NHfhBr1qpud6wx",
  "key15": "4tZR78Ex19rGw3CX5vtzL4WDrfv72RsQFjQYk6TmFQTewFV9WWrwBwAufBKkzAvrvj5AZnGNPgc5QhXMfAYZfRWA",
  "key16": "4PTS3FpxKGmdcW8yXVt45PsS4pp1Qi4KphQRe77hhH6f6FvrpprNsMea5psntS6Y886RRBPQVRjio872AdF63bT3",
  "key17": "DZyK8S5fE53LGNeNA5nJLvqeauUVXx5EuGW3JywXeZRykrKvshFqYMdBg5DUcNe1UuUq4RGVUHuZiFea8qJ768u",
  "key18": "43Gshi8VJJNb3reLy1Weg5gsPkFsvJ93BbL8iS5rAwiT4EFWMULpmzXLqT22YazR9bSpd4Tv2wQ9mQmWkuMJJwEs",
  "key19": "WDRuUNNq8dqi6Skh3X9qT4x3837BnxCMuJGewppamZYZ6zcJ46L7mp6K7nhFK2kyTekjdSocdw83GkakEcygdVZ",
  "key20": "2LE92D2ghZZqNGEh6odVB1vWwQdiPtJwv2kLCcuRikVSkDxpPZNtmYQPPJMuqmfcQrGrT1Zi5a8eZMcuyAL5Afuz",
  "key21": "2mzuK5tkiPZvKugjLs5Eu6mqwYT5wDbhLnaXnDCQ7oyeEgmeMQGSHLcaBvu8NU4KMu89FFxRNZRQ72pxekt6NSTH",
  "key22": "2KdFfHUkAdJbZGTTsZ3p8QpxHzkE1AUzMVEDpnePGAr5cqLRAfs3oxhAxUSR9RGfRbgpzYGDbhTfDNaa4QMmskVK",
  "key23": "3uW4ZoPkFUnZ4C9R6Y1E5YaCByTjdo7Vu1hoHMHmtRrA7NtznHVgz2aqsDRsF9Fg6rerMTeiLxAnYAWjQ93mETp8",
  "key24": "62F8mro6LwBmJm8jfjpUvKMrQquLAGx2kFp1yt6VYL4RiYe6di9TpAExFDLNo8PV7Y2naUXzYdejNS4HA2dvjuP3",
  "key25": "2LRCJVRAHpgzVVqeRe9Kgtn58u3dPDj8vx2ffUHtL4aHJjhhmNJ6SpkBHxQaa7i2KNHXYd5pN1ZBQDqSKZ8VMsUb",
  "key26": "3saaEyUZjSeMYgZMTseYCYe5gPrcBMT84pjtXr3gT13EfkEyWsdRVBQRRY2YVWG9ejuPAa4NhiHaBQn3fsFj8rzd",
  "key27": "cZTRCGscBAXFp2z9SkxwUKwSEA6uystiChF9eHtMW9Nrp2PMLKxwEzumQQgGcrjxttAGdfTfykZ4ndPKZU3mN1T",
  "key28": "2BGTkXLrBcMW88qeqs869cXKiorkuWPgJEL2BNVKHvDxgufqgocsULwfnLmhgTzHhXbzUVyCNy23EivRsuSrBN5C",
  "key29": "5zrVEs5LA4wtBsiNEfJuXvdG4G8Q6Fs2KBo1rKtQs9KNd2au4R13J4vrrhQ7LqvvGZdoGyr3UWmW4sLgEoJc2wZu",
  "key30": "3yHJRkFrA7SZBmJEmtdkmx6HbuovnaovLUXY1Aj9YBh5gJftuhNixszfTCXfgGytDFwBSBFFb8LSMGo7SsEToinr",
  "key31": "2Uf8djg6PfyrUzyYt9mDdUzdQjgA9QWqGEZXJEtkhceovCwU6maLsx58w92UD4G3G37Dcz6en3QPXW2H9c4im3E5",
  "key32": "5BXCmSyZeq5vypLyMyUAnmQWcHCQFXbk9fLuNm5hT1d7fmYrNkfnvbt2TJ51o9m9zqwukpc28bT3YujwuJvR9HJN",
  "key33": "3AEz3bEkEK4mWmYphGcvK9Nmhh3du4oh8YuPkjUw9NqQ8pEhVbtigP8xWDpf9zm2jfAjjcWEoBND5P1L1v9i3FZh"
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
