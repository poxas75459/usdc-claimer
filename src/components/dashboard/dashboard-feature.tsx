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
    "3j8wW3jcQ8fr1jJXDsT1A2q3h9VxA4VzpkXDyK7GyxznuXTeTYJ24r5MWW46n64yQ269QKt6mQHJvTN36jTYJRig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLHBqMhvVvzWEXLHXDenfiTzet4A6zqbPsiarsfaGYgrqrEqQmsEdyMHf2GTc7WFnNvTE6JbjojJoaPFYL359Ep",
  "key1": "4CaChCxahtv6qf5w87DybFigdB4oU914qw6anpvejrqnmbyVBotrjcdZ6cj7wBJk66uPV7HP9HXWw8KnjccpbR6J",
  "key2": "9GpJZhfH5CJ7qBgRWYrhKYdYQXJDCApv5cPz9cwkeAxD83vB3bEgSHvD2ZzMmYKyeUYg5j2QVUtdifnKekw1dCv",
  "key3": "5bvmWuYjwYWVD42uZnEHZMgHEEAL5Vim1eNyjcrr4sp5QBobvJLQttruZ6VyFayKrDsjQpLqwr1QLvqmMZyeHecC",
  "key4": "4neAxPHMvVwEcZ8TazGKVxyPWJkywNWJefYNPNMfRyLkH2PrZPALm9zFoJGvnjmSH2rzgrYkS4eVtWvwCo3DGXZU",
  "key5": "2dZYXK5dxmcjdG7JNFS8vv3aeVMbWkMUz1LAGSNLbXR7UHxWxMfknaGDUj86dM5ue67ujFPRL948VMoGkCxKb8yE",
  "key6": "2XucpRK1AgGSQF4HPKN4LXCcehgqXFGxrcLDJz9GRxjrs7Z6LiksgNoVCou2UsyZHsmqGFDsYcsYdp3SwQmDUSe3",
  "key7": "2ZSVSNS62mQC9zoYViyFfQyDKNwWYU3btvKDUsXdtS2GEgvF3xvtWVCTks8XMqt3fttba7VJRHEb8fT1nkCcDJbA",
  "key8": "5345okJoDUZghdzbsvUddPFJhXRX5aJsXznmaDmhhG8R88F73NtKVfL45yQGs7qN9MbqwNW7tzwdWGcr2Y4zaDKN",
  "key9": "5HmbLTDoyw7LV7A6Ns6PfRoNQFKMcKUKcm3xbka7vW2y2Rf9NG95Qm4kuqJL3HEEXPBoi6nRUtYbUTaymdtekib9",
  "key10": "6Dg9Rx7yyGfyNwDeE272gdCXfpq9BmoCmAbe8G21TjLEEKkzoMGg4uZEzrrGWuCvwpHeLpvD9xNfA9LMmWYHZCx",
  "key11": "94W9YEWTakx1pPpdyBcnvidsCJbGiGJXtrvCfdYBjSaYYmfvr8E5VBWUEV3WyqNS3US74Hhr9QMMmqnvve5ne5F",
  "key12": "4hPJeYKdfyB9TRLm8pdtJNZzuwvVadhKSttmcTeboWv8YT52kVKP6JfQS6K1MRzcsfw812qyWVhQnDxd63xGZ9so",
  "key13": "2a51dyVfxKNhyoWqD8TSPzBBjBLqQXzSWyrJbbHBqwKAXCda9VWP5cycfd2PVz3skBzGHQWBaajdMivSexF4EnBx",
  "key14": "2JC6hmUHDdn1Sr5GSUFvwpiQLP28WichmbDSavoVCuwAVCS5VidaG87cJf4WFjgvpk4ScJLUP1H73LZVZd6k4PwY",
  "key15": "V6rfqMWG2p3vbuftbSZ9BabmGNqGsH2jqFozPSqgUzRvnbMDKaZJNwdo1a8Ne4DEeT2TPoVhzB2V3oWRDj9U4UG",
  "key16": "3AoYbHujy2PkkpYueA7djnzyJUvoLiHWpXWkLXvhuNwTWWfb7FUgpddse2zXryQmYSAV3H1cupSfQZJHXXwNpXQU",
  "key17": "VJBhtP1QU8nS1FfNFw8GLM8iwUWsAGcgjmXwHwXq8WoFZ3aYgmAnVapfBETeW6xM1TMU4u1Dg2ayVD9ezN9FxhY",
  "key18": "3ZtsvgfWQXck8tWgpc3jeSo24H3mB8jEjxieWnS174b3VP5boJxUR6fSanWwzEMese8nkEquvLmHj8FPyg9tmSwX",
  "key19": "NAnXJfmqH4netubF1RxYh3WZwc3i3buFczdtCxN1ALMxzfpFzNHiktGq53M1kkCpMHiNrZoomdGnGnvQF7AFFG9",
  "key20": "5gBPenPR75zG9yapkQ7Xih2QfXJTceXJpipYT5x189BKAzze7gH9wFSWn9LBWbHC7ZaMEkquUz6Jgkuwek4uKwPx",
  "key21": "4rSAcn7WTEDnDgDrKTL5N8MaznvmyVJaKPh81RugDbeYrqGqmH7Zqatm1QchoZQmEnqgt5mafUexS5sNxhArwbX3",
  "key22": "RGHkPf3LbgHEXY2vgdruorbWLFsa18sG94sZwjGeScRRguLJwSZn6inbKofmkWszDsnkCyYdzoGESuNQhVpWrWS",
  "key23": "2RmrUF9MxxtAftEfBnp6ULcSuf6PsJtRQhzYKEHteUwooWXaDUVW6NMHHYXaZEHexudVrCfuruqjkuY6vnrXPqSc",
  "key24": "2QGw4idp5YaWhrbHHgEaFiWPqvv2mYksfLhF8BrGTwdyh4DJXty8zkzPDj5xBU2kYRQHRAK2FkRUtSRVbN1eJuNQ",
  "key25": "5td6X2kTWqbdJSNmtjSHrvrqR4PpBo4fJX2JcAXLTk8yProUkr8GvZFX7osVvDEoJF2gvVpu6mN5xVE8hTgMThbP",
  "key26": "56oF9AXZ7tp4Vk52nXHpQGZeRKF4kGx5aY58C4DUgm9PKHru7t1bkchXTVnUyQ27wgdv8DWqy5iG8BHTxwjNFwTf",
  "key27": "58cV1VRtvMt5oXfqHEpbofu4Q5Gk7QrJYjv4YzjvJ93XanevA78EJFNUTKxW8ZYzvB7diAxT1peAsan128mstUr7",
  "key28": "3vGgex4XpadmvaCihBo9z8wRnaAoC7gJ4cMX7MdNAeqjtQvM7trX7ksrXEfNnCDakcrmBUZqsoT7XP4WCyJNJiXT",
  "key29": "4N5D5HgfDVXbWTLmJa76TwBrCMXXihK8JjWSrzP7TeQUfgcj4JyygEyvVSNLvJMNB4eHoyBqKtnsBpFJWGmCQ3gB",
  "key30": "3XPS4cHCvAm2UJMFv9kuq7i4B7QYV6Gc2yfLGu5KmK5iNhjgDDdcgKxuJM58ag6cDZR8ZM9sBX1R9SzkLK3W2Lr8",
  "key31": "Ac2Uhh2JVgfL6SSy8NBtghFUGVzkDTwVa8EMqUEV2eVX3MKtmPeaUGfuKr6idHVjzew7LWcndaVrfkKiYyb3LRE",
  "key32": "2uKqLMKY3NRUxogYbE8QE3W4ykDcvsztBvnfYX4Jzn61ruatZhChthq6FmzF2W867JrU5coQX8XaLBEjjNFxxmwD",
  "key33": "3tbqtowBdsxZD476sCWWDuPUCHgEafHk3TRzdEAYyc8P1qeYmyVvHCrrqggP3BkEJkPgWWKx3qEzuuene6GJMYb3",
  "key34": "De8DRZTbGe486uRwtPN9PGPWS71i6wv8BH6bMhRuz4fsXeDLFRMgnGCUfUfACqgUAnmS8wRYsjfeSJeBNvwmzgU",
  "key35": "4RjzaTDiPvQatnQvsxMAjfJ429mAB3Rdmd2D2gJZcRHYbC7ztEBAsSbMJEaQJCc9SPhC6Aw2h4M2j7GPoAC2dYfR",
  "key36": "4fkqCxeBQbJHV4e41ZruarevResxhy3Q68jbtX69DudUrdXJLXgVxAfUnX9itLqLHWHMrkbsWibyS97kAnB66v8s",
  "key37": "4HvujgX7UzSjsur8quZ6qJyWakJ2yjT4uanmn37uugqsaWzX8ojbqGtP7d38yMQn4ezEeKZDUhBRTvp2bwoiCvFk",
  "key38": "fFML1i9uLQcUywDa3xB9tA9vwAUL5wc7yCAWGXLaSMrbV8m8XJMxUAgFPiPyj1icJojbJChrV211RcYipDtXeSJ"
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
