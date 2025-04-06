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
    "4CV7v57bt6XS48xd9CTQ1szcBDnridUMgeoquwXxNe1af4ZktP6d7SmzR233AoBVVxJTj6byji4azTFkh7K3m7U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FodZnHPu7dEKKJVHLVNURfJDpDG8oz3nhbpoTmkHdUXYhPoHn2dW6pcHQ8KRxnmFgrQ26Bz6Mzh882ULJgNeuiz",
  "key1": "22fxM2b2Piv1W8HWqH66MbRPFJQ3RygL8hapoEhPCC8MRw3LvMEpZcHhnCkdm1pnp5TwT5a2pkD1fhQjJUospwGv",
  "key2": "4KLn1UP3N42f1QYYaGCGC2WqXLgi4LeLbNd7zmzManYLtM81mKttK4qApEDQEJwwm2wXpqHZudZJYbuQeCBbjYoT",
  "key3": "66WngEe65NXRp5iVBHeTorCEodGvEPVd7TsFvdxNMKLj2C9E9CxYe9hjtFhbz4WZrJdGR969Hw3UkhYrK8GsifWa",
  "key4": "3BXisQ6m7jLAne47MUFcGCzjwskXmsrtAb8rgG2ABiErJhFSxrqgzo7J1QcEcGo1pKpBUzhgAzT8oDttPMpXhSG6",
  "key5": "3hpzHZb8NpLkajW7Xe4VxeH3cadU87WnCgP1wYpwg5a2cfMbz2hRnyVcMXfaDmcb9dijK9P8D7RXy3eH1fLMVkj2",
  "key6": "b3ZV85djMy9k6WSsHkfvUPfJYUHn8ccqwsaqiy34JmVTz93kyfGF2nKUgEJMPojeJwcbFGHmp4Gu8iempiGE8Cq",
  "key7": "g5NnbyXoGzj2o4K1z1D9JfvrYHzq7GECaUBcGWtThy12ngYeX4FNRngJ5s6jJakvM3uAEL2ZBbuRrw8mr6e5icp",
  "key8": "2MufVAP2Jnhs4EMRniddgLiXADXjx1tkVyK3bKxcg8P9iesz8QUW833M8hro3PCRiDpFLKVfEFk3vFCpSM3UFyWa",
  "key9": "5DmVLZ4UfvPjCCUtHf4pKUZbPB4QXBkncqhj3eb2JiwNuN9vb5pp73hZ7sJZ5iFFG6gqLcNjBULvaFDBm1ZJ49LY",
  "key10": "2gknmbEFxQ13VnFtz5PfYGAqkrqJzxZtJgL5ZNePRExFG6Ffuq57eacwyXQiht6givXGd7GT1wZRtmijb1WTam49",
  "key11": "3bmZcLGWtNTeS9acWAypBScY5xChdGEP3vSuaKWWWG7XFT9hKBr5aRQxYheGi3j9w7CvZnYYdLC7cH2MovRbEixZ",
  "key12": "3pRb5PvoUnWn9smFbPKvmuyKJcDaDWGjxvABDLioyAkuxfJvHUBvzpZkxiFFuTLMRhrNhdZ7eKWZe8kmMvJjuZgp",
  "key13": "5wHEXyMepDaLuE79nJF3SDXacw1VXnN2dGSDszszv1K1bDnWFkd18G7GJBvY9kLRYjko3DSpMSAzGJXKjjWP71Er",
  "key14": "5j7QehAp8VJT6CuCzSW9ThF3onWDsfhjfKKxqfLWC4GCNDmfMVJSNbTEeRB2wLLvCki6PvvEBK5tan4ZkmUrNKaB",
  "key15": "36syTrgwoPw7RHFCoTXg8YWezMTJPPMNFQpaGGZm1i8WF9CirgenMBQsBWBMNav4bCydnqJXCJRmk1oksAqsCkc4",
  "key16": "48aze9DGfrBc4LViAj8G9wu3XgAHmifdKxdQnhLVy2vRyAVPDSVy9zXz127tjzDs1L2JdzcYeXZyJ3bXmCQkPCev",
  "key17": "3xRtYVt6BSyg25L7wg4SxopQ57mwTk1i1dDmK4j85XAsx5NhUTK5p71KJGX27avNNL1jfhLhSDmRdnTeqBdGpGBP",
  "key18": "4P3yfqTrX2GeY4xhyMSWRxuEaB9tMiHJ987VXjSACqpddQUCJ8jMwLyFUsbFztVhh4uh7ov7ES2NanSqCDp4iFNa",
  "key19": "3igTWnvwDiJgVdw3tq21XDEADwYFqRM6DtXfmquia9NxiKqnipF3LkycEukkYLHXRVML2fqkXPTZQMmYVgMUTvhS",
  "key20": "4Ly42USEjtfKFVbgXXnRAfQoziPCc1MwksrwBsQgaFYHM1coowDvHz7pHdLtyccidaRUnKEJ9KS2E4JL8wbMufCi",
  "key21": "2BaunBvFzh2fcYY1kCJppZxdVe7Xf2DmGhxLaZza6WcYncu9BG3tMjZMGn52Z9wtoSMEeitPHaf3E2eop8mncJNN",
  "key22": "5bPRhFtSFVd9JtdCey3vmH3ydfJuuCA3BYkxoqWTFCS2BqhQU5oiCq8WYgH4JGSEku2HfiDVcTNxgXa9RkW9YmuG",
  "key23": "4HqApcHfmq9UtbUXfFyuNecCcGgotZhp7p1jAAzEmncDEH6c72tZpa2CVh8CAjFUrMNHgw7jAkGaiwrTEvQ4RHEE",
  "key24": "27kTEbsmtmPGNVzSocAPMqM7HfjQVy6j693SczxH4ZqqCW7wicjZ8kWujBQR9pmJZevobRSPJmB4QzgPkh2bJkxJ",
  "key25": "5ZAek255p7FuK1tVYWNsTEajD9H1Dn6X6bGdA4qiuQjko7m3XSG86VpK1LCz9wH2QA88NZtMMAubcQ13qReKzRSB",
  "key26": "4znnwzgLTWHzQf9u419d8K6V1LvzBU5UAG1xF61c7sTZASH3tTsLdHQEFZKj8G1szGgzii8mhZv46UToD8QUTzLe",
  "key27": "JQXKfvShAL3SZdigNJYt14rYkQ4cgVqv4Pyesjpe7jmvvJ8MecZCh63FxtY2xug22Ly9ssduKQMWoqFznEoie88",
  "key28": "4SrfmBddoJtWawJjWrSc9uS8m7Xf6h3ih5TAX6XerKuEezm7S4bTcqsFoE7urhvFHegcgYxpG2jBTiMsVebzfxrt",
  "key29": "5Sf6dFj5FBQmjYFJ8aumsw21e8VekAuwdyvN2pEb17CC4pCnjnxmZFbDXwUjJQzYfZqSj92LTobpuxijRXfNM7uz",
  "key30": "4BLhAymFQqU4YHojrqt1RzHnzDaLtgpXnjDXiiwnxrKoEZAeoFn1qjjEM9xUR5w1adB19T4RB3PChGz1Tz2mZMvs",
  "key31": "AS7qPRq9q1WCTyYJxHXnCjUKCHT3BTqK11598YC37hvMCKySu9JgASXFzhFWHLEyFTpjA3yVy9EDx7Amo2CZ8uD",
  "key32": "4sr1MWiCLLZbnPH5pwaRVT9Cozkw8p4j8in1CVT2BagXiG1CpYfu5dQPgFM5kWJEgk2BPUsetrRGNWPqBQDRLDvP",
  "key33": "2MXv1Z4q5Gg4Awyc3jrt3cwMLU4gWUAeQNMytb5ConkmMGTcGudpjB3erN9Qd8XxJud18dG9q3GDWA7XKvXkP744",
  "key34": "2qHuykjLEtKwbsGGtRxpktRPXpQEXqwW6waP9WghgpJoYaqXLHGREtp3vKZmq5B1r3hMKYkLcsDVnAcG5soFc1iR",
  "key35": "4UqvVBfyABzoEzudccTCajnt3efLsN4ripmAJo7cNn53mdvZQ36U16VDbNFHMCG7gAC67CE3HnGeDTcttUCF73DC",
  "key36": "4x9L3A1Rxmv3YjYHBChHWq2EJ1PkSnrE92nwAPc4wSvxLA7i7LEY6frEUyCMdA3dx4H2xc6FHTa3D9CZML4f7CB"
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
