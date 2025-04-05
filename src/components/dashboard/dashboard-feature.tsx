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
    "2MnbTEnvjEmheRWKB75Pm3488TK3Ju9ioEJhbN59eEeRhJwYm1eAvkqbB7gff7wcaYod4xKM3rkReRPgcYnDNLuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c65rsFA7eGSPCgV4jZZ165ptnf6RrmC8Xgk1g9LdmPcyF4QJdT2tUq3D4gqdjtnR1gn8Ti1xCgWNQnPPehH815E",
  "key1": "2tke7mHTPYPfQBGfVCGQT1P9QD5cVkJcBd21pxThKy3qS4miv6RhVU2heJxtF4mhC8hV77PMvMKkiNqvdxYNFnVW",
  "key2": "33iQid4LPymrPyouRfTTw6YtLQW11n4XSPH9ymepV6ihdBvyHfBP2K18yV8KRHxxF7kUPndv3Hc46kbviDcbCCCa",
  "key3": "5MPTKAsUxuSw5yKf1adb9yFMK3C5ApuxEJVr6T8mXhLH9MM71LeUtL5hGxeiJaTMzniEVgoptLgWiF1amC8Q7dcY",
  "key4": "49acWF1EnSSTEfbbx3xsMeQ2iMfW31coef5xBVbLcv6SKL1qJtGqswzbupCLn2pKD83Mzm2z3i8pZrn8vRsAnnJs",
  "key5": "2LotVZ7QVzyCYdoM6xH1ZuJ3eyfMjHvtyyLFo4WrKSAhQLgs49C97yBx9DD74UfU8HMQKENPB9X4XAMWaQ7EyMGP",
  "key6": "3pq8wFZS72k6uh3wkxdCo4cD6vt8Xt4EpLyikehXBuHYHQq2y6YCK3jSF9uhb1sjB23akRrYMgQoL4jaCjAhcM5o",
  "key7": "3P63Jbh8mnPkUr2xkXNajxUt6JNMnNyePgs3Gohg9fvKsvWCWpPXu3XPpw6hgNLBLFqALnrUsBTWroHDs4kYN6fq",
  "key8": "44QJKXyxt9T5xioeyCSJ9Tua2MVNPR7EEX3voDkRfLmufYS2kr13kJFXVReik3cp9nwiEkF298ZsPhHcfs7GsYsA",
  "key9": "ivbs2iM8NdEQBscEa1z5f53BPR2fYn4ShGzZLWYrMtMTxa3Vabi1HscAGVXo8c4yYyskP2dAobhSB3NPQoJKQHn",
  "key10": "3dGcekZSb6BHUdWKACRWXhK3zbcoLZ6tQPXtzHAebj7GJPjnTpgHVsvWDAfBjJx7dosm2AVnqXe9ed4LaKdSy8Va",
  "key11": "2ZS5WtificpvxZ2byDiP2Gc2CpmJSvXqYsddbk9dJnivnqmHQufFgj2XmxYJFvqMgWNbBbiv6pMdZZVQcT96rrSb",
  "key12": "5q8jZtp5vFXw1LHw77bXhc6NYjuLmS9jppYpMsN8W16YdakoWqUSzFJymWb9tMaMTyc4Xccv5XAWm2gd3FmC3zPb",
  "key13": "48CinwtCzEnESxfR1vuQoMrAwQ1LiHX6hiRczazXzQzEiDncYoUyYaXejSZVDNR2KBzNnioyqTKbz1GGU78TwwfV",
  "key14": "5kHxgXE88a3Lov9ynYdcgBPUFujeGmw1uKZtTYHZR2QiMe6WZkMneTv8tyy3oVrJxATRDjxxfssNZ7pMzDB1Ktry",
  "key15": "3eDgwMqb6pMkCNQjUb7DwMsQzxn8G1HuwghDebbWkd3DEPgYhEU8hEyT1MrzQsSxRS1KbE16DU9q35eqEbwqoqfb",
  "key16": "2MADNmmqrZpcEtMDojsj7HaHS6NsxehcTSKza8xddqq9wYtQwbccvcG4ofDX3cVAq1Wxr4gAuxzQf3eZ2GnJLpSn",
  "key17": "4Lp5hgUZwz5JZtpZRnbmDF7ZnYgwFVjLBnkAa3E7SQHtZMneEPcLjVEcM8qwzvc18xLeFWDMmwzNa77eMs5gc5pg",
  "key18": "2NEfeekctJinxzSg1cusZSb6JyrLGJHbiGAEaVPnyW82eMazkVZQRQ6Gu5AVL4vDp5FsKoC8fbAn1ctWakBVqPPP",
  "key19": "4bPZHAJM21esF59Pg6zU65DoBnPJWtbdzibNH9r4t9SgmpNUB4ENn2BfNAYdpf5iMTVwLqL2qpCC563tMiUZpseU",
  "key20": "4a5cxZvU8MAkoMLhnYZEW8oiyMZnKdu2mJA9NYG65VPhwmb9BLE4BUNB5YWq7TYUaBBvkgeUGmSJW8mmZJvhTVpN",
  "key21": "62CvhhcQ35G9CpGubgzqVy6TjjjT648x386uLQHfTPypDMyhP7SSBBvn563aJoa25vShnLRybPPA3X95VM2oo689",
  "key22": "45bZtaYJczTH19sCTHZn6sAJDzoDGnpvNqkFfbHLDJq7UTZEEmY2i7UvAkbxbpV9xdi2gG8DvoWutpJgDBDiWxpY",
  "key23": "32N1f8een8TUwQTnaKYJDy3nJbFNg1DyGGZP9TUTzWnn4UoxfcGeKXb4hrz6Cdgk9xCzPaMguqdi6vw3FCj8fAyd",
  "key24": "4hJxUC3rKwJnmF5wCAFKo9rqNdtZEUPsv2BYhEE83WCwKepfU5UmrDZFz5HtMFL2Y47UZ9j6L5ALp27Lky8KbXMr",
  "key25": "iANB2FsyDpwErTWYLjfY4u7HGC4faDPgQu29oEipXdps7XWD2SQPMHnxDXxZh4U5WCdwzxmcCpc8ryLm2ukyURg",
  "key26": "5oNt1aqkU39MbXqddTvuEyxVcHwGDzDA5tfX2oytCSCQBJizdWfewdZ4xsMAyZ7Gf46e4Fr48vSVyJJDTHKEGyWH",
  "key27": "3rgwrMM1ezfFf9vsW5UeWDAd6xfGx4E72vvzQoWv1CkJ8r5RiXZTmS1F3fGL3gx6x4RRH2LvRfg81RM17WAVsUAW",
  "key28": "4wLfuE13pgxcaZAbGTfZ98w9vWkteNpa3xJqhjsnzKyjG7Kvgket6s9YDNEjcY77Mm1jz27rvXu9EogqYqSGPeib",
  "key29": "2L5woMZeACZ2YdJTrzJkcqGhQTVmBwYuZoKsxFARyZyFEUtpNnDMZCQYZX6NUfSbD1Gx8kK53kkLxbHBLif62SRQ",
  "key30": "71tT6aaWxgzLVeVX1y5MqBHChuuTbCgfKw3o47y96GrvWjywGHaWLqwWC6mBvaehyEhqgfwndtZ3Fwgk7hAAeJm",
  "key31": "4mPhxUfNkGJDfmdaJNPnc36K6zP5id76NXoFvpk6FzQM8dYqeoosqRueNdbVCmAksHYCg1yxs8euaJGQPopSsD2i",
  "key32": "3BUQLeeviPe3FFjYhEfLQMNnedLzS7sqtoWDkURycbs4muSziAgmuoBEmXR6yANGJU8rEktSEnx19Ex2cj7wYTbF",
  "key33": "2HPNYNwTP9Wigamtq1teHxLAudtPA1FpkgY8DUA7cZFWZuhj5Q74hn8tErbrmjWhxABqro3qzxYS6X2yqTpzM5im",
  "key34": "3AVwEtPonTm9m832s3V1uMz9bVpuzFFiD51mZYmU3uWuHUqaTrm1mjXddUJNPRe4DxjYWrvxfZHd1T5t26MzKoo3",
  "key35": "55ydbbdRqcfRMu4dyQK5uaXJaR6YPM1sUrdveku2h94RARjfr8Mi6par9bTfH5itYS4eyNbg9F7iDDF4zA1x77Uf",
  "key36": "2JrciH4et6RtxTkbdwCM6NqBNH3h1pDLo7gC72qR6WBqaDFpmbqoCYhg1teuNtyZ7xgfmAnySRBLDEuoF9Dti4BM",
  "key37": "NaNHphBU8kw7KqziQP2ckCunHsApXc561wVhtoWnDAEyQjdz66SUZcFM296NRo8FTKHggqvEv6u2VczJJ1cfXcT",
  "key38": "3ZTaHChBFwvzPmyR6NJgZfHQqsvD9L41NuJ7TEvr2erfedmWBeaesJ7aqGhZDb914nhK9vKjeEbzCSBtQv1nfo8j",
  "key39": "2xsGmDoqzth5SjvPxAhzMyttyfFeGCYVYXw7F9V8LtekrVBUMBMMHi3G19GUR3R7DBLD5qrfZbJZYNJaGeBLGmyS",
  "key40": "ytAnBNBgUZfxuSNp3Xe4PsCqKa8iKjDzbQ2En9S4maeHm1X6TuS2wyRjUqJtKaSgSPvYhQdLAku54fqjDH6BzMd",
  "key41": "5Na6B4DSADQtdfQHEomZ4QiUN7uWpHFZeLapSkf8jueJvWM9L7PSd5ov5YoZv56RcLMjkDuFhUBFxFnvESvQxN4J"
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
