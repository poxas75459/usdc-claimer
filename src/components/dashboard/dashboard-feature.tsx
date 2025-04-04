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
    "3Gyj8HopXovtS5j5bkoo4p7k4HjKtfPGPGs4SkjnXb6Ye55DG8Gx65LaZ5SzapFERZWc3mf8XSdJshfYkPzywPnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dwcVhPPWwem4iGsVbYeEJxxpjXZaXYGeffiegCjx9YMg5Zs8xfJ5C6kBdhgV7pdCxniiWb1io9BrkSfeFsShe5",
  "key1": "QKBhUhj8ADQxHUS4g9DoVXkdJCbeurr2NPaVnMT33sL71ng5FapnmkmSfR34H4owtYYeWqRwywqXpHKRL3Tji9m",
  "key2": "5MExLxLCGmFbovdjNtEutJPLRLKXYfKp2LShdjki3ot2CyQZttwvWG8Yp5ttckQZMmsqixrwVn7CE4yWmonRWCzb",
  "key3": "57HrR42HvAszmXHWa6XrRtj9LhfTmLvVyLQ8Uo5mVfVX9P8voKyJdNzGM4RKqptc2mSkbidRh8iPra6XSMGXhyeV",
  "key4": "4iki4MbscVDiGrmEmWrRGRVcWv6hyj9Rf4bEBrSG1SMt827LLgry15gSLjExrEfzWakxmjrvtj8dKq2mziZtpEAt",
  "key5": "4RguCmGAdsCKwB41Bkct9GK249hEDEk9Spu7iRs8mqF2vZA7EJ6hKmEpwhzVgGHc8yQEjHu1JKZrcrtz25ccmwvZ",
  "key6": "4BvkukvxcoC7RTXnn5ennJPV5jJWNh2q3WBKe47hNYUBnQrX6EgfMbSmqnYbseMTVeykQuymuAZKGnp4eU6sj9jE",
  "key7": "4cWCSLqAFC6UzhWWTiFypxaQE7MVJRvqdirrHxkJsqpx1an3ncpWTC56qtmfyPt9zQ9CwHpgkRkn8ALBpMbkpGWZ",
  "key8": "2mirNmVNFxVzcdQRETZs9xSQQrorRkEtbEKFWutnTd7vFRGYUoy5v7G33MtGcLgJr4yksKyg1TLkZd6o82u8TtMy",
  "key9": "4JHk94r7n7UZPCy4yH68LSa6kvw82uFquCUmydBfysGkwK4vHXt5fJkiQ8iAdZNX2acvAoah8o2WTqsouGgoPJCD",
  "key10": "5H8CEamJjUKCgikiJab8rghEaZwiSG4t6SZCm8KNgezvNQFxzxKppLn1HsU99sZyma9Lb4mwWZHHhqU12nFDRzwH",
  "key11": "wkoK4pboa3CTi7rrmJHwrBb3DEK9c5EvVPrFe1itRgohrXqXzxx7NQaEECe5jVNpHmAYCuxLEUp2reEi1QzJhyH",
  "key12": "2P9Vt26QibKTZMGbKgGmaCPvhpXAcVhVf2yq6PHDEtmfdH6khV1WiZGw6VVtrCMAwDurpRy5X2piKfkYGkqxgGcy",
  "key13": "4ZcLNrKuikYKpbBjmVmujgkU7pAN6FRymtHUjbPb23DS8ZySmAHCfffRX6c9BX4rL2v8GCKapf68sV6dv8UaYL5o",
  "key14": "5aSWWfhvY2kcfRpHVmv4bfnQ9JdzXzu35DyQtSBVFapPydoyHmX22Nz7Grgkbz3n9H5psbjXrmyjWKUiZ9Ti1SbK",
  "key15": "4kx85t66Co8Fj516DzHL5bGwaSv4gSMiozirAxviGWwaozDcj3j2VdhKjyDh3zeS37kJL6NQcopskSuqTHQNfXDW",
  "key16": "ZUXCLsEV4d6SUHzkHrfVdKraRynYKpxSvTEEyi9qDwNEvzThJfbsapGTFridW7xJVwJPCxhQsV66eppAfCzacEb",
  "key17": "2Af9tyLW678bdoXh16WYdDaRjFiBarDWVtg7SaYDDYHaK7Cm3e998M14EQmVKpig1r7zXC6LrTbaZL2WCzxY2a46",
  "key18": "66V5SRCsSEyrzvKpdfnFYyXVC4DMzt4gL8upeoFkDnHcgh8ECQs6eg7etyQUrJxERDbsSA1ngSQet6gSn4ww9oPo",
  "key19": "3aeX5MuzYHen9CgWMzrtE1mtES485pBnh3vzNVoqHhxvpSNXFTQXAK8EnhVK7ZHPh4hhZWAquLfVkjorkFiu4YuB",
  "key20": "3g7EtCNYcviueR9mJSPT8vZbrZ5U4mUBAi2jv9JBHaouRPjqNP93CbM9WyPpyLaLp1smMw4WPbHdoLA8kffJsQ2o",
  "key21": "612aMC8BHhxqQuFZzptjEcJS1tLzpJWQCx9F63QjXun6ANoBHeC6P8tby5ZEi92yvNngqJPbAm4pVYBm2e7JuKWj",
  "key22": "3L9WoCogvMsgw6CdVCzLYmVeLAxBeWXxp5FdS41Uut164HdA9tVfbk5xt469Jh7NBeCACS5fk9eeaFkd4KZnupTb",
  "key23": "gHX3ozNoHxCD1uWDzrg173FpgrxcbnnKmgu8wnSPuQLLzQF6sdBb7eBx6jrJkATgLCMjE2a6LUQXMigKbVX3sKw",
  "key24": "4tuGeP4o3J5iEPWQ7SLiTmpPDiTjS5kW4TVakbngvJwRU5CLa8L5MNVjDGZugUZTCHni57FmyHEBPpVUZmjnnHg5",
  "key25": "4A1kiJTxHtHTwiwaFbLrAzGHWDMtFesaXrrXnRHL2aaHzpDo42B1oAWi4s4NthVi1EkakezXhTVsaGYzRqf9CPLu",
  "key26": "4zSHSFMEtGtUjqs8XHEJZezCaojifSssEkUk4G1XCxauHRY13Grd3u1h4cZFj86RsEvSyMwJ2LVD9PXmJpeSdTin",
  "key27": "3ZjpzxHJ7HmbsZK4wdYHcbHvnCTSP6GUTbope1fU4xPjfiocaw7A9gt5Zabp3vj6KLMWrgBkLr4CWBwJPtCRdE5V",
  "key28": "H7Q6YYY5hgeedmWsiyQiB24W5eztZrZRUQymbrcWkznMyd2wFFQw8SSjc2UgRA6sDDrw2HgQYeJ8BaU8wLp5tS3",
  "key29": "5EkLRgsWeLNwkg8fPkDmMbSGAaVCJtiFRTEcPW63CADH6bMZkbNc5cvaV7rQQhNYaq1DmwPwsdsKZQWEdXABvdQM",
  "key30": "3kzhoBazuEQ3C9xYF3PJXu1ivdnydJpqiyokoQMLgRiptpGvM5KHTvYJqUroQytF71B7fFzMosR3chG4HCcZCwyU",
  "key31": "4XEe6irc6mGyTaK6ZCgU8mtUiX1JQurdPbnzWJURJZ99ooRZCyc3ranCGhCu2E3787jecT9di5K6ZUf21hNCz6Ld",
  "key32": "5Q5CGjYk2zGhUaBmyYKtRNT6tB8oHSrKHzi6rMgP9UPSQG5p4Xq3PWnCGttKLe5e98pibrkgu26H34feQP1jx6up",
  "key33": "4HfEMgpQYQr7viERiBX8JFYnA7vpZy1ax2mhZbF9k28Ywx6SjgEWxbeKsizedz2Wu8jrVbXVD4DUZFN8e1MJbd7j",
  "key34": "WBWUhkJKJiQpfbK2b8KyPiLjsuS4Y7yxDAfhKDEC3QHF6Z3JqoZnAu8xGSaK5DAYLiQKrBo1z6JnKFaUqBkbCyD",
  "key35": "5hAv6LiCrCC9XNQ7Lw4Kgd5EcXPMjr7BMKDqGibdiUKUQBHtqTYL57DM3mtwCX717nKwYXWb8KXH9PfS9SyfDVwJ",
  "key36": "yfc4Qi6MF5xwpkXKdnwHjGyGE7kzo2HkqQudktANGFVq2Yi76hirwkUei7ZxbKFBA7CRH2M5Z52N8oCjL7o1e3a",
  "key37": "4vWcdqsvE4X6QancmvMhsFCrdC4XwVevggnjAXF22MdahtDSzUWcUYZo77MVnExRDRSCY87wHxDW5CsZv9nsUXNR",
  "key38": "2HBBUQSyU8HMCxt6GaJvWdVyih4rAWTAbtGbE9VVcYrtJK5fWx79s2RRpBF4byQECxXXevG4PiX2fWV3zBSskMb9",
  "key39": "SBacQBnmxGdA4nZaAkziwYFx3HGmtK7rqpA6vLJJXZvUBe3Z1J8yoxZRoMATfxHmHa9LYLhx7m7FCeDpCeENEVR",
  "key40": "3HorT2MoL4z7pf8NpXeidjX3cEYQkFsie4T3gyq25ZRWb4r2dvozs2xPVAMhDrtAfbRw9RSsUBdMVM4V61AVge33",
  "key41": "5n4JCf87mEjdpe9xLSHtwdtNsvYc28H7RYJ8oHHouJRhaPGfqJyqE68aX4MSqa7DutWvq5Zw8bP3DF5QgwH5y2hj",
  "key42": "6141LkT52aqrMXqJzwEudtzuPDKW8DHjwNAhyb5cEVC7BPvZE3zddWVb2aMc8ZTiaBWsx7ksfqs3CyAruUdbCSfi",
  "key43": "5o5vBBpTwsn59g2ACJy2UUDpLFQNVRYB3bsvCESwJmEHr9qLuXkxd4wcm7muoaqgYLT5vBfWNespkq49tcx7QDH6",
  "key44": "2NFA9czPyKmfFfS4sBLmDQ1Jz1LSwRGRFEpjyRTLoXsoHWcLfrVkj76n9sCR2kNGahcYUuUoKRhv3brEU3z6VeF9",
  "key45": "2QWvVHczBrd6hEBJioHQkHcWK3YXF4nw3gLpu6B1VGAakhX2LGZaZvV4bub4sXryMfJB97p5yrnQYGvey7tCvYct",
  "key46": "rHBp55gFb5WHzq5mBntnpXTjKNwBStjLZ4H4zYKbmGLZDjpNcJKkp5vSir8sYq8KoBrTTdrrpMQpmAoPeoh47ME",
  "key47": "3M4doG8waWBST6E7aC6bBW1P1NEp7dTrC4pW1FQv2ZZWQhpkhi2FXk6Jx7dz1bBaBiHXugFKM4bSJC6hL7F1fCah",
  "key48": "4zNKpsJtCxehBa1v6Vw7dd6f5c8gjqLafKxAK4HLJTgHvrCgYMMeHnvxnwAJeWmKFc3gHC5NFznn7j2ukGoejH84"
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
