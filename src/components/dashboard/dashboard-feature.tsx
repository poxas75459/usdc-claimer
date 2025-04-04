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
    "2F4XsGajBZ4RRJgcAxLMJX3wSXNNsJFMJG9oHhkE7Anh6iAvya5kJdyrfFDXoDtDteeYEu6PHuVdufyDDoqg932B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Emuy8DtcP8hpbsNWoDrDnyHXAUnGcLn4tFpcSqGpW9QMs411diG47DYjYV4grpcyGWAYEmTzmXP9eFN9RxXqq5",
  "key1": "2EhVwU3nfPGy3nFrZFDeV4xpRPLVJNYaYMwCCUTEPmhSXV7Mvtb6ZocQ2zvk7Z7am2AgUNoGYMnDaB6eTJKDWkno",
  "key2": "3xo9hot2DLb4qi1QrHJ7vwCP3wJx7d3LHv1DLCKpSn5SoisRGanupju4RZvBJBN2kZvPW2Lp2Dn1zZfbDWUTXbQj",
  "key3": "siDdEYgsmG9Kqb1ApsFGoghP8PvjC88hmVLsu1wM82fRPgwmTYWCiHoTYFemTz4DyAXY4trkk8Ss7udKhv57Ls1",
  "key4": "5szoGKhtxSJBvTuaHfDF9skdMHbhrNGmiYtYT4WGmPnYV9zDNwrfxfrnxwUxBTP7Zxsjzdi7yTN1cmeL2fEephnc",
  "key5": "4TcXkrurS7tsWuPdnS62RwgCEjnDoBXnDco6Han3EHUbVojRzPAhuhSpZhBweVErrkaz1QAB4CYcaZtCbXdGVZN7",
  "key6": "38q1eVCwj9P3BhUiRYuJhA6bTRsL31oC5Vg72qGYbb4aENATYMSSQm9vcB7Gqp6KZvGyasFNe44sqLqjmQEbUE5V",
  "key7": "nGNeeRLjugXNFozEkujDeJHA2x8uaTbhapJUV8s3BgtawRew5tp8yxBP2zmjdqFyt8vX5MwP7CPoch15kau9N31",
  "key8": "4jhrXc7KRsp8xkKij4koKK78AjvTadscQZKk24WVsmypJYeXeDLa7jAgHwjPLb1PVEXKuWXZfypPGMbkHvoQFSP6",
  "key9": "3e5ifxyWCobnfqwKzanGMKTWkiEzUM1LzAnFNvkE8jZgFrWqUAKAL2jbJyDX9i3PicGVvoZaaazM8Jc8DhpNAuZs",
  "key10": "cyG9GnhVKSG6eDWyk9kvas6wLetFpYydukNddDaKnoUNAxpS6VHfAC9h7bFnQnxYNHEkqWELCe4Md3ZUZs9PEZg",
  "key11": "5tDDY4a79SViokf6UUw3rsURcGnJozBm9M8gdqUNF63N2rxVrBboYZwE8Wp5KXxGdHhrig8c1Bosh85t6ujB62gZ",
  "key12": "3FWaPue8hKQU9W6MSXXD8U3s5dXsKY2yLNdCvhdTMmyixsx1cgdg5KdiBiytynbg4qW9Pnh4g68r2RG1ytQB1aT",
  "key13": "2SMJHiAtEa54pVZBMfwM87V4usbMeVf1CSrGuEgteHVbZpuBPgNwDU1XSft15ExedpbH3pB8bbwLMVkbY8nUFLZN",
  "key14": "4zhfTRR5bvHhXknuCCEfsoYr6N63iyEdWYQVfRytTKmpKqjvwXtPucCgWmBuh5fJ2F7oJCEcfC44x69pMakBepLH",
  "key15": "4CSfCKeEvxEHNTaK6JZKoD9Sk26JPQ3HX2KRc732u5vmUYbVXxU9FWH7MzUx5pGqn9wubQQiiUigZo3CEDypxc8h",
  "key16": "25Zg9LSuFW1FstBMHZxcDvwk9uQM18KKQgeG76tHTbcXp39HQXeKaX2zjpgGpiSr3KzSjLmzWtYanhDDNwDhLCFa",
  "key17": "JL2WYm3bSScqzGay6Bq9psdXQAsWWQt5E1knXjMQm2hTbwr1K9NCL2UKThhWdLVTtsEDEEyt7awdm1TrTxUNvWY",
  "key18": "4F6TtZ4mrXRse9eAFS7sJwZ2JSAVjEVZ3CY3rroJ2ytittnZqCY8EKvH1nXk54maCkbjA4iX4QGDLh6Bw9rxXiL5",
  "key19": "2p8RAnwMkNHwhANsHPDkMGgwvR4baf5YLQezMj2EXrZLxJkpaNWgbcpeAvsy4dDC4Nqk7thfomnB5WNX5K85Qyvr",
  "key20": "t9S2rrYPViZ4mjkvr52KppHfj1xmR7V6pR5apPH23j9E8XTQ6hWfRH6oneHLj4uoe5J1AFyjQadaDtaPr14YvXw",
  "key21": "DGfgBBR3hEZ8WAqNR8fB56rChR42yNprg8VhZtfHbdv7jTHXri8y9FMUb23pyMyiEPBzzE31Dj1oZD2gCWzUxPf",
  "key22": "3hRUoJXsy1irKFDVnFrcgUQwZpZFaMPsDxp9o73N4hqv5hKgDcaxAd3AHfguQkHT2AbkXiux6cBtDKB9mwWnRJJk",
  "key23": "3qcnEf3A9wpJqB3S8UyA9N75vZXsDuZ5dN1f6KUtgX3dgJkMAYgEEw1KEbopD7z1TbmBSuUCmUhr2KdgzQvqzhiQ",
  "key24": "3gYBrCdcVQ1BmLEtg1RbXm9zUfLA4yJa3H7yNCwXED6uTaFSzKNhP6quhwRvXvwdDGGSSDGiBu6n6AvtkhA1RJJT",
  "key25": "5yqx2nbPcETRicKnfDoxf633ngtYuVyCK99BrTjSEJoGMFHGJaREb1qcTqqL9uQabYT1JSHGS2dsNgVtaztZfRJo",
  "key26": "53Xhwwc7iQmAFpYD8rvhqUhub8m6HPg9axcUpvRoTF3SbpcNbrZsp8sujf9vCUUB7tMPmGJdCHfBwzQ6QNozjLXT",
  "key27": "2t97XKDGy5Lr6W5vTcpX5DtRPaN28z1Q2T6L6LFuWepuFCcBmGnu1Wv1U86GrtoB8THsnU3V9RzhjYv8Y5R5q41R",
  "key28": "4jhh5bq7fJt8Lnne6SbFrkDN3zJtRnLwHWGW9WizJ8EHV9zafiGhn4rShEcVfmKAvxYDdQYUnhRHsjWpkb3J3S1b",
  "key29": "3kFUyp8H7bK3nBq3YDokqph69sUpFWMJuRwbfKxTwkhDeummXGJ9deJzYEJJfw7bQhJqeCprJEr1gTwqxu6c2woV",
  "key30": "4LQLAWJnrc3UQQD9qzhp9qCERyw5j26MNqGfWa3PqNfeHw3oh6DwA3h1dWdJHpMZuU6EB5bQ62KUcwrQeCXetDWe",
  "key31": "8NRkxrwf3VHLXHkRpYt5FsGbGhPSAyVBSpRL5aZ52DizT6zg5GTMawkbTCG2xtVpbN5MsQEEBY6Pw2tszNDiGCY",
  "key32": "5vg8Ajq3cXEr7EJ8HAZxRbMkeoj2qYvWNnLjNrk1ksnX1ocC9yPS4EuiDSmXY6fq69LejJvXTPe3X9XRa74LubMp",
  "key33": "5cCvJXjJacpa2Nxj3GZo2Ubxz4cVBh5LWPPi4a2UDV1pUvjhy5rnnLJfQRiocu4zuAEfuRZrSCi5qgpE3DUhAYA9",
  "key34": "28RH9Y3WQ75tDY4dJXw9sXvn4YoJSWEPr8WFHicZMZT744EcupJmXWCxbt3NhphyvCConzRd94AsWGnyNnnRQZf4",
  "key35": "4VQ8aPUDPnxgwZV3Giz383qwnfXhJ3qxcxtXJRVj1UM5k7gMuHmA1gQKTZqJTzrefV3yupi3RreVVZeRoMCL51Ej",
  "key36": "ZpLHWQPzpNvWT4SWSq6tsoFt6Hnr1JyoJgfppEMHG6CrBQV95Wr57bvP8YgS6spbpeWYbtWE2k8CFyPv8jZ9bx7",
  "key37": "5iAcV8GEAp5KufcLxsTYb3YXUSzBpuxQsTrtiTcvjfhnBUmkbPvFMsW4G4uGsNx7zjSZa9q5NmCWnSFuyYGeLqAq",
  "key38": "5SMHD5CDDsLPvr98quskmZKdGVkUD82LYdpPD3VtZxUZbS3guZqNh5w5HvNCae9jEdQYr2vVsW4aH7wpHQAYRSjk",
  "key39": "4aemmBbqgBM3g2foPZA16BYDi4CTPx7roDT559w2fiYbN5sUu48cbfvmG7z2WtZzWR88qXo6sECqhz9C3dxcaG89",
  "key40": "4J8Zstpupuu625vjdSgyJptLUzUt2kh3d9oQCQuNBYFPv1RGPenKYQoQMyBD9R6gRc3aofRK4itG8yKB5QBwrWgJ"
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
