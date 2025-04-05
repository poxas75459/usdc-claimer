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
    "37pCkfasjUVpqTZyChbeWBhRGPW4jUg6rQ18ymSLgmBX27UTbd32w3GkdXsXvpRMt9QX3JtmnchYWrrSTbM5UZLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFH2F5Q1ZYLRA4n9Rptu36mkyCS6vEn9n5X1xnbFc2SptZBqyut553v1oEE25qNiWku1cgQt93GnBob94dyxaQh",
  "key1": "44GYT7pLKTCDJsPAdm51ahhw9vPmfJiCNxSnUpWs9KCLcEtZUo5zx53B4f8H95p1n58pqjkJ2ovFkB6B44pC2fdc",
  "key2": "5Zh25hDRMb6fWby7kytzeuA2YXqHLMdiQG1XdDsFPgnyFkj48LbzgiQ3U93NDS4iBucG9P938gnvouBUrFhbfjey",
  "key3": "2ZQoa8aKgd8MhAfsekfUdqnDe4ct61ykE41yVWEr666pPCPe9bkzJb1y8urRyfewLYLMFndBUQTxa6vueS7iEsxo",
  "key4": "GY9yTUGLhFEBtntRudKGxP1ZCUPAut6pfapCZS7E9WpqFCqJVdVsFnpVKYtNmZwCBN5HZR8vQHyqXfnjC891rHU",
  "key5": "fw7YFTrRTvmnjFo13sTQGPdWefvoTBdUyeJPbbWYtoKsKYXA7961oEkjs8vYNLBAg2SpgUnLD64zD4qiGpR7BTa",
  "key6": "5X4LHKD5DRmvWn4q1YP4Y4b1BEm3kWCmu6kt1ppbA2us37kWEW6E48W6oBbRbh6R1MmK1wN4YNGxhkS7evpbyhcQ",
  "key7": "XGaXjPuFrYXdR6m9BmY3t8bwq2ktyr6cvV9P2pza5u8vhaMK8yH1Gx4akRDvLqp4AmsmTc3ypBerE8aEnQo3AAK",
  "key8": "5xym2PjWA3tBP4nu2J4qBPmDh8v3ABnFrSPoF6NfoPnvdyWdCtQpX4qB6RFaXXMDjL8C4PCw1suWjMMaHC8w6VR4",
  "key9": "VYcfpUNr8U3zMLXMvLqxoTrELQPcLjdEEpKaUPVULcWJWapPsXomCYbgBXpiy7Tek3Lx88eEBGfs3oMm8CHES3H",
  "key10": "zjNq7V46XhMZa1moPN9bgrkRGNHdEyJEWgGQR7DoCPv4D1CJjAuXJ12LMn6E17pmMvXinqdZdhxiw6MPWvYqYdT",
  "key11": "VBqEvbQU11ZoDQMesSwPPYejuE8iL6gRhWH3xZRFYTcAxYjhKy7ML3t4D22JwkGyAnvdeANdknYv1ckxQrA7jF1",
  "key12": "iA6LL4AArx8z1LMHk2ezjbRW4JU1UQTAQsur9N6vRGpkXtpxVDvhXMTzFAYSD8ztJM5RfZtNRuZQh2c2ujAZqU9",
  "key13": "2upgnSbj4V83kC26xKSvz3y8SSyMqdDZx4wRMpcbqGsT8maJeeg4wgoqeXF78qssVWAM7DHgBaCe6JkupszNXmr8",
  "key14": "vrrJaUZeAdHw3V7PxbhNaXBSsmfYmWFBxK4eRLyeFGJ6ZZr4cnz16MWaDAAMojaXbQw6v5jVA9ox4cPk4ic6cRk",
  "key15": "5zLuLVU7abgRpahYrMVqqMA1t7fYzNzZRzXrUSD8baepy4MP3a7ViRXbaFXc5ij7MXvPH8DU9p8mZZDeEhWivADu",
  "key16": "2JmSuq7RNW4Xb9AqYVjjnaLQCi9UXDCtDn4d4f2i1h4jgevjc3CcdDsxtay973jwnJmyRFDSwKBifnQtdGaSXjKg",
  "key17": "4LGHK3kNRomcd5ec1xmTtti7Mpmy9MZbTq4ciCWM5GQMgH4gkMXG7dDHc5AnNbuRPQCVGDLLbzuKrpm8Q8qXYWz4",
  "key18": "3UPyKV3MWMnuYCraEnGdipamKXKTMXzqB9V6JVK6a2PyGRiUuLPL9Qm3AfKdqQkVcV3m8nPxpD8UE8mTXUiAxuaq",
  "key19": "qMJJvWcTzgy3WXpJ4W4uWrJc6x85JqBWv3gs15PcxNaDkmNe9viXyRcvkSGQuawavGVi6ruy9uL8MwTRL1144Gd",
  "key20": "2gnxCQjPBDc6F4Ur2KQTmwL8GTpB1ZedskKdniJok8C8aKG6JrQ5tG48QaZps2hgPQKfMA7pb5zT5uhVXKv4cDWE",
  "key21": "3vg4igGc7yC8Jbtcgmx3NTEB5QdSXcEzvxHFhYTNoPrnrubDGDL74Xs7hfhK4NwRggsERNVeTLz8UbfjbHUmZ7AL",
  "key22": "5pkRPx7z7wfkzVH39dd2NT8kxyVaBFUb58UcKn8DtHuzZ8Lq6WBc7qSmU7gdct4z2ahsmFqFR6qLMuycc6fJ4Qtp",
  "key23": "5FFM3eu1agg8iovjhAp8T1UVjytYucuQGgaVrVquHhY7VUX2QKGkn3swfg7SSB4aLmndmmkagGpESV7ReBJYYhfy",
  "key24": "27tDpb9fED9326XCvCtMuHBVZUcALhB2fg9k2mugzjkKgFiu1BcoQm5RR6h9aZEd151yMkvNakX3WPf3q4Jofv3G",
  "key25": "66G4hQCN7FAFUVoD6kjiThALmDTPt557qhzX96oK4wyJXsH98nnhU5KYJWbFLhCS4PWEcuU8TrngYfiDCQzB2Hkg",
  "key26": "37j2WiUcoWqi3Hb1RUz2ocPKz4ygYAYL2cJWkr1ygwFiRBD6GrPiXxkNKFwfBesLmKba95ifRz7k4F7BsWLzNb9z",
  "key27": "5p1QVEFfgNTobEHuT2SoKSbkmvXydEhMZSpUsfBq7aEShW6q9cT9LM9M4P9fQLrxsKqoCc2GtEThqK7GXXnrqtBS",
  "key28": "27xRJncHT74VgJkQ6f6rAWMHS9Qr2AAdTZFymY6RaR6suU3tcHnQQ3eDKGrYwEFBxHQj17TWjaiyrcJZ6ngwzFXn",
  "key29": "4firUp4HkAPKt2uWVaumyhfYdXCs7dj7XgYgLsBpCUECr5cjzCG489BoFHFU6BMpGYoETiozBqfueTJgKKRhDhHS",
  "key30": "441fVcWPdg2ZFWNGD9nxC92cseF68AF3LjGCphJjkUxTTqEuTZRwRUZFWkzSC5NJLGG186atdJjkJ7GtzMkENAZ5",
  "key31": "4KvFw6X6V25BgSKfQL5GiVcPA4P16FfzNfTbtQZJjA6ADbi7FgG2NHt4rxmmxCjxta5rAf5rsjRCaweg6xDVTKwj",
  "key32": "Xkzybhq5KUu5MaQVf7c5cHPB5E7he3ft8S6WPkNcr5AUEJ3uUEShk4CVK2xZ8R2pFBnmmT2eWTLpyTb5n5cFBv3",
  "key33": "4SNHpGzWsTJbY3msb9owsQCmJFGeAriYL61vsnd6dL6wai86FeBFTRFpATEyg2ZtkxnYru1mchCTohNjN2fV3SC6",
  "key34": "4wAXQUeFQUrLZjUBKdS9S9k48NKWkcpUtR8ULpU1HYW8S2VyBtYapepocd7HGAAJ1qCxasiJyNtr69arBqDjbHoA",
  "key35": "4HrP2WPqaKdr4sMfYXYENFEoDgHcwNMMNANwaU4hGjNtjaRwsvXVAPcngDrQLoYiaYwbAJr5TPdMctpLdyzAxp25",
  "key36": "2EXgc2aoozd998wgQesPkJ21jDYHD8qJH3Xfz6JsbXjbCBFZbGNB4VdgWZZz7muCKyQ22vRZbNJYXjq1RyWg6FFU",
  "key37": "4ZccLATBExG8yg4MdiksHvPN9ioTArhXh3WVtoX2chGeRkMxNMRsWp5FhwnMuCJajMqTiTsubvV4uscai4j4Jjra",
  "key38": "3ntZnme1emYv9WB9boj33CgnUNoLXVCxgWtXgroeprqXWiZWeQ3xk4Hm48v6bYDMHPz7AHKu3352HFns8PWaFK3D"
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
