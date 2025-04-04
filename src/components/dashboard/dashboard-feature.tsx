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
    "Rn1tmvMMUq4hcrRJzyk3HLMGjQxEe82gMDHA6gNu88TuLHqWEBDm7dve2jS8mpjm8dNdkxRmqifgm4dRQVxbT1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMdx8ahYBCFqE5sGx3FDEkCufZAAsPf8JTgCHgzVRGLSax16yT5znj66QjVzmqTD1MUnw9U6KecGnMT4tAdQHdN",
  "key1": "4byrPBng4xmG9hBi6Bs1e1fJRK48HgBoC8q82PG8M3CiB66CBgwc8Er8ujKYJMGZwyVFe9jWdbxrmUPHQ7njkM8J",
  "key2": "uNNHPwreJ1ZJ2GtkDHkaH8ugn2d7o2Pe4B8X6NsKG5k1itA6S4P5bQtEXLvGcb6JaRPMyPpZtKdYpHffK5mD3rr",
  "key3": "4W52bE3zQakhyDk63ru64Fg8CJaFgWNtEH7Hh3RXSVZKt7NScAaEv4VVv63V7LFDTYUtSdAULFoMSmNHM4rRk8H8",
  "key4": "2bhstm6bmrFqCw2ks3XEbziz6rEKy7H7DXccKEEFnWyCXHhh9cEX4To4S1rC2sHy5Cw4E73hLCr4NXiqHHaD4P9G",
  "key5": "3vnCwipHH6pU7NfWgRTakMZsXMGmTJzoP2sDe38YLBmvoVTrWDtsuLXiapfoDER93BZDoTQi6e3UF8WPZUM57qEo",
  "key6": "5ACWTfdVq3By5gRV3ruWZJcXLrbFEGmtS2D5zVhH1q8fyeWzkL6c686cQZcmCFxZViByuQFg8LGVGXyd2FfjV6wv",
  "key7": "3JMZCuFfTJrJcqs7vfyNuy2EeCpAxHgUA3omCFc1GdVykVcUsZwZ1nBCnDkYZ2428npMjAektfkP3XNfz3nDDSf",
  "key8": "25DMu1veV87N21ajE1AppemGyTFos82PBERk6zzHxqhEbTjnHXKn9xQT7VWn2eXg7zsMSxwqX1zmraKQ4Y3UiUWM",
  "key9": "ibB6Fs1HvDYU8wYDswoPMRzSPNeyQbJ4vsbvMYtFW1in1CdkvaUzWFchHL8w9K93JDDnQ1Dbuur2arCmd5VzWzu",
  "key10": "3ARCdi3wBZb3Y7s4uKJs1Nw2MSAyru38EusHa7aD3idJdz2JMikUzbrBDFn7FCWRsPaFTtT5BRMPFWrVCiQFAjrh",
  "key11": "23pxaeKSAgpFRU4ErYU2RjiL21BUf87kdbxMyKWmAVLF9BtLgNyeP6FAqwU3jgdkpeQH9SdgbPgyNH42qiEvuRkj",
  "key12": "4pQnwqqtAWjXo9DUG6QRQhbsSxo3aWw8dT2siGNUZ3yDx8oCDhF9cQaM6jZYg15PWttnWUrhzYJsYGFh5ZBzKeyi",
  "key13": "5iZ7iaMqtqnkqzhs7jgCLjhY7HtcH5w2UVCoBzyv3xeKNpd3gkf5ebtP8uGx9r9cza2xygnhg2XmHVMMzyYJq56k",
  "key14": "5pBK6nkT4AhxZt8pRtgEeCWd5kGCUVn8WeuZds3Q5MaeoHGLKTHkJ4vv7xpujjq8jTANG93ZSDRx4nqGviFtDDKJ",
  "key15": "9npXv1jPWcph17VgbWKEAwrkeKcgCGkwGfNCUWr8EPegBwb4W1RZcgYJCsqjHC47LgRu3GitJfbaUGwCgaRPUzH",
  "key16": "5PjV1naK1bdAerYTRDx5T69AL9ikeLJRiZF6iBivfqaBA79LqadiNg9Ni7EPZdqa8kgTSZaR728odfoXekqfQzuL",
  "key17": "3Thf3xNjnTjyp19U11iG5mh8ufNn4npjg5RtaRU9QY9g2UtSPoMWBQTrTiUWFpbzxxB319u18bEPdbQNcMYhszPK",
  "key18": "4oyXd3kHUwqXMa58XCyPfGjn9irnbkcswFgk4NwDq8wrg1Vw3zxd7WwEo9SLmLoXavPGM7yJU6PEK3jMpVEVZ6Um",
  "key19": "2NRXPYtv5QrPUbj72eiy575tnaUvUSa9JjFKjJKGodraLSucMhxW7zBQxctVoKJudp4TiSyvabb6kWdZXvdoJKw2",
  "key20": "4C7Mdd7thBxKMzvoVN1jBDTydS5TvZ29R7PV39occ8hRWYY45AK1igm9Fuhpj9agq4CfPcfj6eQkQwHygLbsreBc",
  "key21": "Ec3SxbiQRCp7mLaUSUaZzEryDgwLLPHwNcNpRgeThTpC6h2YacQVJ11rPfxBuCaZyPomyv72onGxqQvUbFCLZPW",
  "key22": "3cdddmPV4CEBjsaruxTpJpxNaUpo2S4id2vYd3uKvmp4CArZUCrF5mxSTFpwEPNNAwFMCxqZNNfKH9m8GtiZ9PJW",
  "key23": "5x2sTg1YfUxbzrcFgrAJ9kFA5Diq4w3MT9hnGn5MJjGNyGJ9nEas2rMVmdSqQ8RujacJwon2SQ6Va88Gnfp6M6Rs",
  "key24": "3cmGZZDcJLQKy7vSbnzafhnbnRjCcJxEP75sWV4VVAW6qoyLAUhqMSqF9jhFPViBKRdzbCNGiu9RpathmM4TjNRp",
  "key25": "3nBxHnrH5U6ztpMGtEAA47ftasGHHtVwKLWPTtj26MoQUUaWDkZ4mJ6MFBzqSSsmAP11ETbVeCCMH2iRyDoT9KbT",
  "key26": "2SdYqV63GBKLqFQWk7nqdQvBYagL5FtzaESz1jzZVLgQL2DgKRe8hnMGTVrTnp1gFaNSTogCqxFQ5Q13sXG18AqC",
  "key27": "3BzsDX4uUw9sGSxCpLdvNyiNRAxJQhmZU7CwWK58uSNmkLnF1sAxukfMjAs3eA9Fwj74pVXZ6YLsGuQRj5ctxgpA",
  "key28": "2s8RuYQq2TyqFB2wH5HCZkweazHTxgTWMfTqwr3ibZUpsMPjMx4Tu4pCkVLwEtGTrNq4SoBvN6JxTTCMb93ya662",
  "key29": "2udyPTBQhEpLGtaHtJA8HdoNDYAvYxi3YRazPRtBppL5Cg61LuMc7EMoMrjzcQ6ktQhfYxMmGxees4aE4qCF14jW",
  "key30": "3ibd2k1HyBcndAvZKdQrQZyYtFM7ubYHxxoCvMqW8Wb7J5dJko7tDhxAsawQaLsGv1URh1U5RCuhXiCMHLFZa7UX",
  "key31": "L1CYR4fnTPRjuhwgGwsRUPoEKF5E9fkCD5WKTwzsyy5TtNqTyz9ne2zisFE36cXbbe5Ykvh3Tc1EsP7nfqyNu5F",
  "key32": "5JTfiXSePpmkZZS8bZpSmtD1ZDyH3n2bMNsnjM6QZg1ZPsmwSVPo34oqQRYwMuRxSEmwbdivAo24Ms7ZoXpNKMzp",
  "key33": "3tCDa6Jstp6z3NULJZABo855AYh24o9uqkmZ5uMtRBbSHDf98ZN6tuYjfhnRJHGJXRhyLhdSySHgRvAPX6WiNW59",
  "key34": "2UiX4HhQ66TB9gFGwksxpyeZaJs5dHHLocLunKTXYvDv4PNhAhTZAZ84yQrQ475hj4LuX3Jr7F7NF7QtHEHyPsCh",
  "key35": "JVMuv4msoijgRFU8EDjhBHh6xxGVSsazvUtTjCn8iF4GH7NB573sSPaEktfGSRWzcEF68bABvkhyR9BJ8t9Z1dC",
  "key36": "2ximfpjDP21JpxyjSnPXVvQgverKaAAcgsAUr9keef6NGZJthWG3zrvLtdWnkvumLg21d4hCt27QnuqPSfGnQG2x",
  "key37": "5KsdDVUor3vGia7bi4iy7kTqXHAJHew3HgEPmRpHViXyKyYkj1RACM6pzPGc1JmgW1GLUiy3VqdvcYroaunGigPe",
  "key38": "uz2C4MF8sb6SDaWyrR4myw9xxE1SNSjbvkTsnxzjq3o3oMXAe4EJ1mAdSCzsviVkyA3L5ozzuifxZtoWFX8pPpE",
  "key39": "3FPB1iVF3WYuUSdEKAjTqcfF5KUnmbHwZPJF13GsrFzouHw17qisUKWnorb316T6DAqZoQybzdrFthqyBfofEZrY",
  "key40": "4DAcWZHEmvQAKaA9iV9rmBVSEkECdYJs2Nb6BRZ1GTMtHy3CuWxtszL3LtAkAzqs2b3hKK2dd5m4fBJpWg6GqbgL",
  "key41": "38ypgH984KuN2mBhTrTybQzYeB2JufBag1uLVCXpUnHjiL4G4oquXg1ZZLWCV3zT72fHH3ewUhddjb7UQtiGaWWH"
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
