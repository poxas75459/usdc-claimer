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
    "4T8GaXyfcxPBbsswAmyXCJDUJCyftBL98yTtAWHox77o37b1WvGciMEbXUayHDkgom1kbwhcbJk9j2SWhQfKmje9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29U5yTyCZaDQJSMSHL3BMJAyZjid7LFzg32ktT2PFoaAWw8tuue18NxJii2Sq4KqJxE9uTn6y1GnZrudpo3Gppwa",
  "key1": "2e32jFUDuXqS8Db3eu3XKf2tNQy1hQGZ4aJHr2LUBG48ToXmCtZQtrbC6z8KaBYHbjsZTRHYTUBpJnqtBnwxBKc5",
  "key2": "dis7LiNy8LrfFi7j6GYp9JNyXv3VpxnuRfHwrWEnXieKDrKuCctB79kq1QL79LUhDJ1ydVkp5pfZwfn6JYuTz3u",
  "key3": "4xMx5k4BLrMENC3PQUG4aFAZNXw6iv5Rm6beRnXXcH8stRVnw5BP6MXtdne2NDdLM5W1vUjuerVfR9E2pxY14Snp",
  "key4": "2iYZxxAY2RFLF1Trd75Z57CtTRKXPhFFEYpSFwrU6g2LAsvgZvBeG3qPqqjJ4uy2daqrVH2zWqZ4rFVXuU2WfgJB",
  "key5": "3AdEZNJzDexJTg79FSkPsPpJNpVjUVmcsNwn4pgp1bnuXLW9h5qN8XeZP8gZbnuhDizxyPYxpKtbicAeLWU1XkeY",
  "key6": "63Dx9ffFENzJAdxmfEJV9aLFKPpf1YvxXxgC9USrFbuiAjaifp7kcRrU8rM4njENHrX2c4e8mDzNGQ6iTbKFZEPb",
  "key7": "7G5RVBqZS5nfJMCDRnqRDtrMUg4GdEzJdDWzf5eZ2csyMu4TWCpWXKE2nRSjD7ERdMY713LQCnSa7aiPP4SEdmB",
  "key8": "Kja1TJsHsG5nmdWqywRz3NPBVh2CM5q9D1BFtg73qJ8Y49tE7bJ1CcofMSKYthWXiQNLKbFrNt6Ro8ZteTZa6ae",
  "key9": "4XLD9sdng5gC9HPH9yQjiYRnaPJ9jN3SM3q6b8aSYwrRHAZSnhvLy9V5i64fh3FKbB9mDJYDSgc3uW4JHufV6wci",
  "key10": "5BYLSeYYY8W4PLJQCjPMSdN4r5LZBka8VGrXQ3uph47F7MLqcQV3a6ocqWK4GrHCawUkV6LsAZh3S7b2SiAYRaSW",
  "key11": "2FuweNFaKx9kew4KD36MVWbjCy9GJ4uqtZARE9PUygJsW1XqqJ1vnqfu1mccq1uQmPNQiqHS5Dag1w8V1v3mpjTU",
  "key12": "NMpCKNAxXnc3wzmH4sfqcTgp2BXASptyWqvzJsCu8HTQYzpu52DZAwjJxhrifEvqthdk3gtRvK9wVvTkHRvD7eD",
  "key13": "41SYzajigu5k3EcmW9kp6hwWaRV1Ms5GbBRAXY1mYiiXDbJhmwzja3tJwCaQboMY9FRu74XEVSDJKaVEzs54WThr",
  "key14": "2tCiQQ6UgJjohNCPhmXhkQoVFscm3E5Q82oJMnfs8PScscEQ3peSWAfyfCqUTX64fnfvmPWM1Tgz2XPTcP1dPbbS",
  "key15": "3hxA7hBhN3ct7yybj4J8HnagF8U4TCnG2PhK46X6Tr4K7CqiemVzgKGFQeEaWwFcqajtZTQqrAKAZd3RHqUNiF8m",
  "key16": "5GcecEc1jrzNEsb2KByG3f3r6QrjB5NKDX4NkYjwtz6aRg1gJubxwpuwKPRFVWLMaJpuQumytRB2yJ3LEfDz2wfH",
  "key17": "26ZKrCvWF7Z5pmmK1rjcJWas6G3SjD4cK9uwxxTZn8AjURiK7HvvA7LZyy6jQmuvD8MJDAGagpkPndzVvVkVaXQW",
  "key18": "22JuNiqnPRFeWScN56XNsCh3PgRqzw8v9CfyAgSLLGBAyuiqQyqckkqoj4iZ8NKTY2XPDUyMGaZif9cK4m1ok9Js",
  "key19": "4q9q37dg67Drv8pPEDRMuR5qBEdbJjbybqsTWV8sA9HnDSgh6RD7nbcXmfjqvNmBJLcT1y2nNr8icfdpaef4ZUsY",
  "key20": "96ogfFD6P1z4vnbD5KfsLunF4id2hs24Kmd5qWLssb42vVfBKyL9gpxQDVD8AWuYrwtTuWy9evMoSMeKAkgKkLZ",
  "key21": "2mdNMN9Sp8h4USmn57aRpDJd2pVbW4AMWqwB5roHJpqz4qdHBEGQhcHqrLa7D8bNk2qeUfu679EdVWWuKazdqfwj",
  "key22": "5V5kuXFRR7PxYmnGNEHdAaZJk8asyEnsi3CY265Kb6BK8QeSnd2Gr47QUtpaJmVshmUoaFMwG8nsJDpzdvn8R1R7",
  "key23": "5a5377GGGxhEfxdSZFhUpxXHXbnVjS1TP5XHk5df3npRkVQtmCkCcT4YERkRAmJL1rJRzPHUyGpJicEkFBqTatGG",
  "key24": "2L6K9ZRGpXTLDHkZ2nXGb1wsJYQEdBKKBWyidjkX4zYGBb8mHRKCQL8WW5q7FXuNbur9mJdRBM1mwENgABnPFoQ9",
  "key25": "2kVtGXsousq18RVT11Yx9BSgR5gzsjiu8nE9uPT8FDk1bKhLHFZzKxe1hZQPWKbvifg3NuMQBXT2y599SChikEVf",
  "key26": "5XqopSbGGQxSCn9w8Uw7zgJG5aieRwNwUBt12sVpnZJiEexfQfaYWmLYz6xFmudrSsEDJ8i4dKC8gxouoX4pnRFZ",
  "key27": "5f39qniLroDRiwJXRZG7u2aN48RNKTzArfn7gdaCCSMBmfvaFTdkyFk2vRxv3Lt8kFVzrTakoKLbmCWaE3HzKBw5",
  "key28": "5Xa4vg1mqEWa1SPkof1WjBLbBAMMh6mS9dpoFrPrzqFAvMk16rZ4cZBgmAoxzBFVvTTNxjfZXYYuaXQwRKgofiTs",
  "key29": "52d1KsR4aHud8BPr6PmQsiWnpbeJAAxwptAKQsQoLuRaW5TfiAvTuCJoVYfqTKW51LebS2DkhNYtdNKe9JNJELrR",
  "key30": "2YSEThxBmRGmN5QNphv1igpuGw7uWwa2qCahCDzDe8WuqbTCUcfJKF4GxyqSXP2mhkmV47jks3onzGf6sqVfzLwf",
  "key31": "4jxh26VHWsRCLrWkw2wvRNtsmexaADL4eYB8WeqrwDw39w9QRp5SMtuRPyubtoQQKQZa5WcJZXfvUiCGZxXvSGpF",
  "key32": "4EaGyYjU4o7fG6JBSgcHVv9fvMjCzhAeBbNQk4i9LG9s9EiHvYuJG1FiXrbdurGe9HTF2vuzdqgr8YcsS5JHBYhL",
  "key33": "2T41vGZdcUaHrJi3n1Ny7RVhhVAaRGvDrAMqN1hZdA7jy24RTyNH7WKZr38DnNohG17ASf687sNwsuPds1JzD75L",
  "key34": "3ZaQQFiAtgZoaXgN9tSXVsvPZ1sKcSVQP9ShhbYj5gYSByfwVZjUqXgV6JTwS9sXnFysVurDtbsx4oe2UhHHckqN",
  "key35": "3UNgtAJGCCcHP5Rwijch2vqNk5nrWvHVSfafCzXQjszbyWtyB5xLaoQTwMrvkLErEYmCaxAAyARN9Uhwy2WsK9tS",
  "key36": "36F6zsJVgE6dmg4qLDHLdpiEyxkJxcCf2ABaQY4QpKQi2doJg5zFqjNMss93xH6xwDJALVMaFaPsmXi9aJpD2Jg3",
  "key37": "gUJyz9isaEbf4y6VY2CSbriUgUysMAywTVGaWmiEdoLy8wzJHneKbbcdkxwn8Cn4LZUfnyMg7TT4Jfa6YvQAMAk",
  "key38": "PuJXmHMgUg6H6QPHkcekNPXfkoxvEds9gVADY35S8jCtDcjjSENBHiA5Pi7tbEeZdhbwF3MG7VFMmQJrP7NFPkT",
  "key39": "4nWqog7DCEPjHhevjhuuQxcf79cxkGRnm7z7dboFA5nLAJEC7WFjv2PZUHDpFtQthvqHPQwz2up6diwwHR3kDPgj"
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
