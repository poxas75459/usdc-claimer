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
    "37JMy6wVuZr52Da8rS1kpetUokNj3hVYGNGNJXiFHCDF7epAbAAARq5W8o9SS6z5aWZki9JEjaU3CfYebP4xmh9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4n9CNDwBeGdim9sMhQbbP2L3xfduAcoXsTB24gZqJPhvEMbwpxkqZJ5LU1kQR5yytgFExAgGVhdbTSnz4Ntevs",
  "key1": "4RbBFc9wF63WAR9tsH3PFoRnGK7TaHQgdKWB9BQwYvMFea6UBp8bBonzyJN1WpUF2VKHKDXMQ1GhxR3T6oP8fM4c",
  "key2": "2q2yiDBHttn1Dm4koU89RwjPAH6gFPjAMZaX5UseLxsNGGXg5TQUn9seKWupBqtBnwuaw8Hu1GYtBc8xk9AWEQ7s",
  "key3": "4Vge82PCMMU5T84Eg8PdW5pkVFijHH65kLhq95KFb3TF4AKDrxUYEtkbhuWjpp1uwG8qhZAk6ocdfZCaXieNNBA8",
  "key4": "2EGJKBwj71aDENnvPNBmzpzTCcGir6oeSZPskUtQwxMjT8U38tYRpGCGVXbMA3nZDVKaZZmTNMYwFWZaHy7CJoY2",
  "key5": "2RVeAkE4uBdUrA5KN3PJkxsGKm1KG49fBLUpQpYfAoM2QncoRpUzrUkTBLxFqa7682Zm8RqDw9mLJ5kYkFEtR8Rj",
  "key6": "22zcfbNTa7yEvRMr1FPnpHSMFTuTKon2LRmZUUQkEW9E6HD22eu4x45fKLunMMXXeMTChgGJYTEqv5v8uTw9VYz4",
  "key7": "rZdsUAZd8AEkVXVBzgRUgEcQahQSarq9pJR2S157a5GjWY7LPufV3Xwsf46qpd7nBtYHerVsjCLJpAjNGVHyhsW",
  "key8": "2hBgdkVjTfLTnLWakf5KK6sfT61Un8NKfD4U2vsNgqgG8YdBU5biVUPSgXjDijPnE3EFLXgFKZWBNygfRXmXHwGM",
  "key9": "AgaPxUooR96dYSUzC2z49WzeWmFYGEWGedvayMofBckJoUttzJMvAfb3xQJaz8VJxw9DbN1LyV9JJCHieHo2Qsj",
  "key10": "2XW8heT6FswLJU9CjuTLRgzHBw3iytNnDd1o8YKFNE1uD3htD9dfW7aBt3RHk3gKy2NyTBdyTRBQAEKQu8o9SV54",
  "key11": "2CMoTnSNNiV4dh4qNnc4XMqjLPf3eY7xsYiDfuJs63UfWmXwNeDSsv4sTFR7ghgdqBVpbs6Y8AUMX14eX5FvFkSt",
  "key12": "2kduTmjAKsEjeqsn1gEzfXrHEQ3AR9TP9VSiuu1JoLRy38bbhyzVyVWF9oiaMrXxxrLvBFfvyeH7HEmrV2rx43uH",
  "key13": "55y3iivwdWkYpn1bwT4dqxzEr5SJxRkHFvEroiCGzoy3iTNT6Fj1sYA55YFn1qsfaRdjxvtUWVjzZN8YZVJQXdc1",
  "key14": "2HHCmPvxGZXNHAzNtpR1SfRAM59LPVAti1ciizgwo2jdy33TyMJRedtdL9WLgzFaomifEd56XaWD2y2XsiAmm1rW",
  "key15": "4jenirA4yuo182cDUW7mwKQiD1G9Qd9KEsowiLCU7Y3vHKYUvXJqSsHNHvsbV1zqfwcMFx5b81vkdwiQErs4QfFT",
  "key16": "3Z4iNdAkVYQixwAsQDATuokd9T4bVLgL9eL891pBKVDAUETafDxjEEFeChjTgbdtk6FMKUu5vTs9aQ4EcYK6dCX1",
  "key17": "cKithGu7oNGvYfuWssoVg5rAR2tVG9fFNECkEo8PZ863B9NahRJaYyPVd6AYJ5YF2juiVyFw97478141d9ZssEK",
  "key18": "ZUDz1aMqNvHwJAHFc9AfoVyYDnqXq1VtCxVCc6shmrRvFUdamgR9Xi5Dnz3SEYAV2dttE6CEbtiTE9UezNzrEjP",
  "key19": "4VdEjdHT4Kv6S8gncQaQpd3PW8Mh2wwq9agmLUWrCdBAxM1VBYN3bR2u1vznrFjC8pH4SSArfNpT7zTzFFBKE21C",
  "key20": "8tUjF4E2qc8AUE4m7oSHjSPJMVjbNxR7YGU81r5ZmQQLjNw9RpKfiqbWDVFVaU56X3TRoVf7QAjrHBa2rmTafEC",
  "key21": "67Cr1Qt3LD5MFgMRRLj2EMAyEcsS1ygXqwqcPeG6wYdrG8iedW243uZcu4kZ8gD69HbDvGNqpKaySszpSRbBGULT",
  "key22": "2ip2ZCB1VEMwPkZJP4XFHx4QJoLF9viuun3ESu62MjKY2mHGoyavAmQ4JgjWt1Wc7ATkA8qcWFVMUd9SVtNwHv64",
  "key23": "3KD7udEdtmpG2nsFy4tnm1rZdeA7qQrGiUhAnVUXeLqbRLTzhY1DiG6BW9MzdNTrNr22UdFf8c7DzRYEEcYSeZWs",
  "key24": "3d3ZxjHhTtiNLd7r1LWde55z5tcRSU8M7gtP5F5oeKditAXNj9B7te3ZpHnhrS4kFKa5ifaQKhQuWtTpEJeEVBVY",
  "key25": "LKs6mgbHZ81NHjyccbANL4TVRt3np2p8cbbRfR36qRmK5t2WdvZ7ErxUTNmZj5Ufg29kevtxum5dtP7KNeXS9Pc",
  "key26": "r7Q3LzvGXTRhiVBhxqLmFmbyEamxb9dz2DME6wCFnxERFpykCBqSXFE4xGbEUMQ7XTmwEHxzmcE36kc615n2CWB",
  "key27": "5qsgmDZmhAz1sgmcSvPtMKBLBUYASXCvcqMokmn9v9VtLW1FmpZDpYt3aX2SirzqhVect9NCgStQM5uM5gei7WgD",
  "key28": "1zy18BktLjnYvRc5nvgjkesFRrJtfDK8piLmBwUpZAedbAqjce9RsMaTjeScX7o6x2vEDDkReG4TgJR6ALTi1A8",
  "key29": "5Pi424s1h1rFhP4rmqpf6xcuHjLWNcjG1hZo8ZwQhRGEYD8Ac5q1uvm4WGUW2utEWpEKkNkogFH2EjuePwweN3Km",
  "key30": "2LJtPskWr1vGisTLvZWWptbuSNYvGebv6T2jRnbefWVEMMjJnP17dXHhcNq51967CGW2j2oeR1UUqJijKG7aLKqt",
  "key31": "5JZMLb56hA1Vpck1LGMMfunN1Fv6Kmw12nzAesy2s3YCKkzLtt3xoWgrqdvF6NhGZcyuWcFGc81f5mzXwkMvt8kG",
  "key32": "3cAtY1qr59mjm9QG32XAyjDNafs1rSpAiLHVVK2jAJwxoXrJptmeHJ8jVvzT2CXrbRPk4p7MY7ZSbBtw5fysZJBZ",
  "key33": "H2M2DXAwqRibGsPNhZtUvRcH2whbQVtfdZ2dntXAwYNgtM5me8M3PrhwdeCwUHfLWQFByekhoeHVuVLVQ2iFrAM",
  "key34": "5T1gS5zXuGf4x2grFLzFYtHkWHSBCPd4CDrEokbNZQ3kT65gpUma4sxyGsxKqdJe7kW81xrzoKYMmzaNYcvK2wmc",
  "key35": "4psFQg79wuHqR68taHh5Tf5w1boSoELTvKBGrXEhYeMNibDhNWBK4jQmJ6yvfJpmBkrG1Mc7jDaQQUq3cK1tgEjj",
  "key36": "2NbBDEqHtRSyoTanCo3anWFrxd89MDfVkhYrh3q7Zv1JF3ramtaYUqJ5Rd2VDwwRDE56Lq3VoqQH8FpLhmdxA6BN",
  "key37": "655maYrQ4v1fJjSgNErGt4ybAdsLzXxZquCSG255UFDSnsXE2hLF4BednBNcfVtZnwNzNqBMsq9zoTgmNsw7tc8g",
  "key38": "5ZS5sfSVTGGHem5mfRNreyDjRW9kmYuSqHfkQdkDmzQTKxrE75eqv28XrM1DVTbY5QgNifDcYHJifGKwrd6cqFBg",
  "key39": "2C53vjEPYDQoGtJU6AmQdiMWnikgwyTpUQKxiKvz8AvgWzbdHtehXusCUg9tLp5tkv7GDriVFd3qc2aRBcadXzjk"
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
