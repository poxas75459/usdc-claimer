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
    "6gi6GHZhQWCKAGyFdKujzzkHkVvwYfHHYr5N5sj1guHvtWGK17X7W5E8cGdhZ551yyxaegBL5kxsQQmokzidXfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JcvxLf3KWHo4aBAb3U3x8qJfMv43sov4NUyMEKceJLwzcAi71Md49YBSHuZRWS81KoL24Jv9Nh5g4gneUMSwc3E",
  "key1": "5ktM96tEQDPguuehUiv7r1HbYAfHdM2M3G3kXaqyWNSrZeyz7WgNRK8iuDV2TaAUR9M2xLuZb3T2xryHpaEqnPee",
  "key2": "4gjmxGiEn79t9PMRk5Bq84ovwEoxsJrVJbprKCUAwKxbjLxeKyj3WGNb1KxTzWu3i91wbvdj8fBEd68SJmmHju2Q",
  "key3": "4Rh2eTvboL8D8Y24qkSW4q195LCsdNtbXTHxLxa78aVVxnLMx4EL2nJoS8BpU7P7paPrbM4iz63ojDB4gJtvba9c",
  "key4": "C5phUaWrh4Qw2qWnoEqWeU2HypmzRtGv6Um785BzGCpmLrWpQFdxgaG8CR7VuX9gCUqkLdAmqDPGUJncnBbNHRz",
  "key5": "K2bAnfBqeWCX5xPV5SHrqRkTDGzDMFfWXcHoYiJWBuNfaMr6KzdvTG1MRvPAHUYFikmFEvtPVFVSZmNeHQwoyQv",
  "key6": "8dRbUP3WbXtpbhbKnRokbDwCPiBchi5m9HZZugNzedhB7TaudAbFjhBMwuVBCHN1V45fXLwqW7zgoi4yRMxFs9T",
  "key7": "ygRrqmtVNJdP8YZVknuceaTjgfkbPEACT63S3r1sNtWV43gMb9fFgGu2adiNyLTvskTGmt356mSazg6xfS2ngks",
  "key8": "2GBstvCRGTK5UqQc6Uut4jFWd4oS9B2Ta9rk2aS2CzgCT2a56U2E1ge6sAXtBhfwEsCZowEupfVn14kN5ZpyM8oK",
  "key9": "5EGvcT3ayPtEvLmdnV9nLm1oknGQhuXNKjSQssKLPgCAUq3ramoiRk4UPrqBYesUfGeRtRzHGf8cuMXGZQbEZLW8",
  "key10": "5RvRPzLFHSAPowm2AmkiWVGvEBQzCq3D1GoGXiiAmFNxqyquJrDLmUztHrfyb2SJYPRrSDHi4GBv4vwuvknTztQ3",
  "key11": "2mDidAT8v4Np8M1Fy19t1EfqZEA4GvHCtw8fkcg9zvtXJwaG2p9iWfDP7bnGdzvG3WYiUJ9vd5khFjtt8cnw9JPv",
  "key12": "5VzRSupzoDoRhshVJHHDWxf5nbq3U9YT4KNQpAXjFEgrG6i235rDoASpDntGgMeVX6v2xcxbYP7ivMcSjnD5g63X",
  "key13": "3sLGKz3YkwWdMY5dvHmG8AFLNNh58bXBekLYNtgax4xpYxdockXBG5TZbGUo1FmipQPd9YvA2fmptBMHEYoE6qEK",
  "key14": "5yJKhv8L9Tsie4kuE3psxccUe9kDzgU2y2BiyUsXPgdvYPo6wCAV57Qwhy5rqHS75uAa1tjejAH8b6RZZdjEtzDZ",
  "key15": "2iVMb2ct7qkMU68JMUYV3CiqpX3E4HoEqLBv2b4VP7UYsBGshTFQ5uj2mGcuBNpucFCExhkodrqUwQpozhGjf389",
  "key16": "2X2gGH4EuRehr9HfWeXhJf3V3GjckxwY49FGx2sySH3YcARv4RpNQ6oaX9CQymDDfjsiKuhwpadTgC7ejbQEpx2r",
  "key17": "4iu8m2LHucuEvgrBSCTHnBAbh3QeA1iD85Mmv43QCQbUwktFWZifGiV1bmbs3cWVTbCRufYrHB2HJWEgxU8yCbTi",
  "key18": "25MMp8PfE4hHzH7uBCHJr1ZdfzS2vfFS7RG8GuW4sfiMD7iTDGPcqACPAGdQQUwYarnLfX4jwsaToKB4HvJepjur",
  "key19": "5VUkbmsfVVgtkZmBNeFihpxkVwheHPnA6YDL2kcKdwJdA6PMzKn3m76vzzk5ebyYcSUc6XWNTS5vCRDXW5vzMg3f",
  "key20": "2rzNVjWrrqZQdBJT8JUCk3d7i9GP8pxfPJUNDMQ6xBEPFiZHk8EPbNaNrJhmdXYzLvbGN6gvBRurAs7k846hi4KM",
  "key21": "3aJkPkejkiuXSuYq7DYHXrqXe3Guh3QqYuFJRiUZeiwFeoKf3UyeY42TyTQ4YB1yde1qhP9XLtZiFmX3VuGiMh4E",
  "key22": "4Z3quYVZuqY6F27RLWGAuj5dQyTZ8797aoM6pc8dQvoLupXq9Dfrq5tHRvFh4kXosQbb1fpiC8wR4u9YvcgcMa8Z",
  "key23": "5NQMKJ6TL5PkkKZLfuZYLpW6Grv9Bd9WdNkaci6mj2Y336aQnXXquGkdsZAKoRNgeWHWuddTLYHPUiMV8mSRRa2A",
  "key24": "2pSGQ7kCueuyicmZKTKpciYuwXr2vh14STEms8kUQsTaX4BDakiH2Xwqxu7C4Y7htP2smWfZajNJ4SVuTtzT5Gs8",
  "key25": "5LqndT2Cif1SBzqeyFw1sTqu97ScYJzuDNnmhUC67AZJPX2xduBbKfZLSLpch7HCwe5ozBffNfhExWAaheXrHiyx",
  "key26": "4tbijTWbBTCbGfvvbgMm5Uj9YR9291fGfSveVjdECs4QLeR3bYohWP8gsQvTT6CaAwGHAyNLm6B3kNMFP7eaQR7i",
  "key27": "ofuVs5nm172YqhdnAE3dytwja1BSeKikofUKR1cxicze8r5Htag1qWh5cTtHCYj9m4o3pk3Q7BxaYe372QbmsFh",
  "key28": "4DUbUj4XjVrefVNvBMayDixXzBWW17j2Jdf13kZC6jnXwRGCgR7wgEtNwDJ5zUfGkXB17z5byyEPzwCiNkXLw4MF",
  "key29": "5xVkfpqLxNHVPacvyMqu1YRj8o2cYVLye6WssLTKKWuifWWU7W3MsAtsP8ypVMuScTB67vf4CkPfcR58k1h1gHuN",
  "key30": "3fs8HbSzKmgX2YWA9rxXLs64QjmrqNqbxDjmg5cn7CsjaBx9bHHd4s82XdDonNvEwMXvSsBxtoLXzV5CnqUp91HL",
  "key31": "3bMjHtk47Dt5RDfL2rqVhr8hQkuEE4iiNFzYm8CQ4M7LxpH96LAFhvUw3PJ9JKwTWLnSEvhBzkx2RHdwHBpYMgd9",
  "key32": "4JVw4bRNRyAXNaKUSjjgaHKnRE6DomGHSjvSwjGfzN4HPyHPAoSun7ydyqcYy3rp1nD8Zjm6HJEWeHstsGxi4rKm",
  "key33": "2TK2W44udMBRG995csxs5qZnVztUtyVT9WLrmfwsFqqEt9cXvyxR2BcCiAVNq6rtYApsy272EQ72yg3v8i4RkpoN",
  "key34": "2nyavVGuFgNmGxwdvWNh1cJoKx8jSj433xyvV3fjhtnYpmBP3BjBsGLaQBUwPPeo7DMNztrNaCckUD2MhhZnVUBp",
  "key35": "hfkC3QAYtcGWKWnPRo4nJxtoRRSJXePACE3BN7CB8yr5DxvveeH1YcYjnHH6oV1QRuqSWnr1CEJYNuMcKeZzeDc",
  "key36": "3TKnBe6XDpQmwgGFPhduakn75rMwjeybbMTnkzps8tmdqtZtNrqeA9RBdME3saDGeoc3GFt4JCBX5jvJrqpcBct8",
  "key37": "61TYAkypZPWCreWGRAz2sQcDTT6x6Wq3BhK4mFyvz2Fxwp643s4Bty22eMncJFCupVEmmMABzbdSmd6kt4Jq8ArY",
  "key38": "3mgQUErrBEimqLK7VymHW5YmVKRyAJbmwgDnVZxiGYnP5Kvk4PTKB7ZoaydsttbbkiDATTsU149edMuHMmZ7GEVG",
  "key39": "5KDK6Yd2JsZAvExkvScuAozKAuXct5VoJj9vejLeDAenrsxbUee1PJAzGR12dkDKSej2hGQQSfTvAqCQ9fKS2sLD",
  "key40": "6KhCg5dmBsPg5ZQrWK29on3uvs7fS8sx2cieqQWngRZ6euxpMVSpwX8Yezd7uXxbopUP7wXZKTAmfBd6wNiBnNY"
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
