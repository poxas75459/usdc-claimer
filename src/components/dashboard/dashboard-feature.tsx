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
    "3FLGyM5BSp4CjAqPjGbXzCtFKwxYYtpzezisjAU2fJJy85sWy6MvwHvD71gSoJbHtHNT3QY3yaq5Lq5XmCSPk3tS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvKUCu1MTHukmUSJ7cFadKwB3CqMirNJWpsTXLXp5UDNqPevMdwroZpDh6FwAhQi9sWyiuGpM81mVx553Qqq28",
  "key1": "QPaxiT2rTip4jnWYCNwHQVJGVGmD137UsuaWutNQ62Si2HyS6VrCqd4id9BQKWcRm7ZZFQ53PdUCpjja9d4Fw7E",
  "key2": "5iQXaP21UXMhThWLVCVG3zBgmSfPCfECNHTfWvBbFjPMMkmHTMbM9imZrMWHo5fWmo64AsquFRJByaxZez8FeF7Q",
  "key3": "5MgrscYcoGFnRdeB5DUD5mSp1eWQw8jg6HXFpcF6y5UUKbGuYLBZr34sw1YMThivpodtUd4HosmCBpcZSHJXAhpT",
  "key4": "5zfCScHMA76yVnvU8zzrbdVLyzfaKgLYe7SakhLXcNpPrnm4JMjAyGWMm1D3z5gGxFfAvHRD9D6vsaykYq5mkDUf",
  "key5": "n8bKWuFj74xWKEH42DPVzma3veTMfN1qbPGVUJdimFXRCXrTJZ2x3Kw9NYtvD7mraWd1C95uXC7PQs3Bp2ZWu2B",
  "key6": "4dWR2tUEHCYxZRStyWqJY8vaKMZ7MWkAy5NamhzmjcGchb3u6vxRJhofq3CZmTLfN2PmdcoNEvVjQBqsyNURC5zH",
  "key7": "2k1wBMCp1ceuxfcY6hUoRHbKFLcDa67vVuPVLVeooSPd7J3rM4yswXA8Z8tUY1CuPMGsRkRdJJwnJYgW1cuFm1uN",
  "key8": "3K9pD2ep3soB6UtmQm7q9ZShmrufozGk52q8166MtxzfsAva4QREk1T9YzTqzfmuEugNNo2zBfquE3WUkyzYSZM1",
  "key9": "4rtjyunB5JhCDTkr33L4XeDCfFu5P93FscxNQyNXgG9BeGq376Bj4wnKhQPqz9fJY6cXSrT1MmQN7yhqFFKoP7A",
  "key10": "5j51yGuhwwGVUjP4Moxu4cvrciSVHkS6YEZAFAuuo2xuFmrxH7rm3G1gsB61Ty2kRGtM2jMM7fkPCNk94VFqMkbU",
  "key11": "2Y2YgfMMpqpvRC56PvWopBXMryQgst7oiavfXPmsmTc2fxHvwz1fypY6R3i9gfE8soQtH4DWAP3XfGeDdjd9m3kQ",
  "key12": "4rqFu4Xq6vHw2b62TcTrQf3n2S8cyyhX75uUpCcnaTiGhpGAcBjRd25173kzDg1jPD7mFAc4yn8Gy71wHppRY14N",
  "key13": "2jLCbpKRGbV6WyGkNAeTLkYaW3tdM7U27SfoLENRvQE9rBAt4ABV2vjJNn8G2Bjeom5QNsQMXnLXmzVNrgmbe2wL",
  "key14": "3U5gETt2PS73XFv3cbVNN6dE2z6L4LgCVpojHn31BE9WjgcAGvv9ByGQpKaZKF77eJwMwdUqmUxfzki1HLHFAxMH",
  "key15": "3h3puoQ4dao8JVVYqqJfYfqXJtL1sJ8MonXro3brahJu2ySYtr2EyLVx29EAG7HeErA2FT8d6RBApdVMZq6jmNaQ",
  "key16": "5CnGbaRgDNPUF2NxQBX6VuVbYSK4bWwAJBzoH5wcjqyru7hQkvoSEBcsS1wuK7iUhyK7QCsRbrARN2idJx79wVgN",
  "key17": "2Zdim3okU2zMLPEqVwvEHSnZvovmmEQ75dvL1sutYrB7iJxdzbsCzxP6MJHXASmSmQBk87pAgNH9ZzpPGBW7yD5V",
  "key18": "2RANffmUMQqEGLaeKNygZYVJGTBQYR1Rd8ViqPNdyMDFYpY6Nsbkqu6v8gVjKyyhm2zqZGDB2MyZ9YBmnRY3orTK",
  "key19": "2b7wkZS3fhjDx58KADcHTDJgCPW13EAqiCC6DLi3fAQ1ABKnEGEoXE86bW7PuBcgLkcVqkXQDq4kWuhsqLXzBJxh",
  "key20": "5pCfeGJMsBZaRaRGsJSHqaMfK7HEjqX1VTEJy9AWeSs5mF7PcCTjkWJ2f1jYU2ARQcnkb4LNesu9bxLiiTwf2kJN",
  "key21": "35k5nQjPEAnAjSfweE9tf3VwURAnAM8cGC9184RPDyS8wmoKyi4cyv8pV4xpgbsQ5tt7LhWbP5eh1PCdDZrdCFMh",
  "key22": "3BEcgqWAQVwun8MeybsHs7aHkF8heULAPd9yACyMj14cqSFjMitT2BqpEsryGXFPYuNsiz4jdCUHNrsJWgECmnwA",
  "key23": "4mrJHVSEVsSbfnCz4JrwxCKCV6HZ9JxLdSCmaVWgpwdRYGNB4t96r2FUGUjfy726mEGSfLHUbMPDqwc8mcriYWAk",
  "key24": "23ZvvbbRFaaT8ygVKVdo4bZGJpTi9gxQaSgj8TofhJToJxexER27UUYDxewyxyHF8NGGtTqBa18iQ2TE41HE6rpf",
  "key25": "bK7xdUgMt4vkz6PrqEitGdHZ2AWrWoM542yputyBLhgGvN3JeWnd4hLRwkEpcVPQRGajvKo5Q4RfhfSjXDCgx1A",
  "key26": "2ChzZGoUMtUZ2moFgA4wvJ6cd6Gn8rJ7JPVRyT57cqoCAbnwDYcFDLFXbn3zwsQMYgYuB3GmAXUgwaDCLnTKTi3W",
  "key27": "2Qo9GGK5y32AYGHKq7GnNnjoCErYw3Mc4Xzukim1CcAkbf5YsVGuHfC48AEsaEdRi5fnnuYyCo6TsxQXf1BGaYng",
  "key28": "46Cso33dZXnUZmpFJmosjoGhWcQuUYEZXc8a1Fa99xXDaR1iirAZoMTAarensai7E1HP1gXzMANXxxmQbna4uwJD",
  "key29": "5mRfHMRBTuUfPD2fj2orXwmKTkVWfyHSdsj1KJxoSv2cSKfJwjECmyLwzvkG4Ln4HPtnKeQ5iSiSdwCubRctr5d2",
  "key30": "stD7ktrpVNKVHCrWg3pQeizHdMCMFsgXcyfWrjpbztH4K8hsTt8nnZwuN9gGv24o4pTsNRMAZ3Qw2qUQHUdNmm4",
  "key31": "4GTPSbweVgdsoEo2vZowG5CQRKruzwpSiFG3KMSJNCtUo1UygeU3QgMTHHfinDbbRN6Y1dU7ydsXHFrJgoytzE7T",
  "key32": "3RMGzTbsHG9PUFiPEon4uXUeBSbyrT8Fza12X4uWWPWhN7M8YfvB4mnK6PW3afWpNFSNxvmJZfgbCKKkcjZ3XeJr",
  "key33": "4emMq9GTAznxmsj6XLkn4ELxXdbe17cEukFJ9mhf6Pqzk8AXit3Qyd8wgCaWS2Bo5cENjGuTrSLHD2D164kCaPMt",
  "key34": "5mAnfM2QYjNcG58QwWgBs7vWnbN2g41iMPhCLWMuPbQGKxDKUM1zo5jPGnD4LEzyuP2ZgKMpT6KwzewAXSw6CqKV",
  "key35": "2HUEKSdCUhnGgWcWD8KZukAwwAdRc5EaRQigYb1w72EUab4argATMBfFSdxZEH1CbNPtKHbfD214w75hmrt11bcU",
  "key36": "pCd3pvXo7teDU1iaoVd6Pp9TtdnkVDDZfmzA6gPM3P9XwUGLJ4fgnZiPRJjWdWJbodhAsbDtpYscR9xuerhSHEU",
  "key37": "52GYx5FEJ3sJQDvWE7ZEJU6homgeqqHnGQV3VjRiJEcx8ZauYohmmBKzhfC3UbKZjiqnNVCLpvAxFjxGPXeZftpS",
  "key38": "5d3wvxqFxUhamyTHQ6Y94wW7pqVFWo9ibnbT1ad4zXC8dcW8u3FxRx97dBxHDESaU8JdYvpe4HBbU1s3LWYkGZnX",
  "key39": "5cTamzZ859HXfgWkYxtbJa5Cv1p7WgPvE7S3b9r9U3n3QcjthR2qccbFUE4Jqbky2DHmjQENVJVdXjLdzbX9EQBb",
  "key40": "67ihdAMxfD2ZVZXAyup2vXtHdw2XmMVVmGU2fZktDXxtQFaWAxG5ncgg96kAsFXPdxgPJVwmhXKqPMSS16s6hXTq",
  "key41": "4vFAReQ1itQg33tHHy9UNR2ZW8hR1KRPG2Ks3e3DGxW2Vhtz9AJjmmVaCtdsZVjbNDdT9JqYM6oDNfaK12LxEvYo"
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
