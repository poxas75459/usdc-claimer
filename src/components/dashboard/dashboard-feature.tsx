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
    "2YCPJogH5yvgTmZsMLMXfydXQBchtsVJHG5FfsEvdHiX2P5Y1DqhBhnSBK1h3BTQb7iFm8TUVvAYHHPwBKtkeM1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVuabYrdK4pVLU7DmZ4ABRoPZks5S5cKVDoyVmvYYfAQMfvjS7cuAvRzuyCbg69Ec2dHdrc2TYMnNWz5FbBpJdU",
  "key1": "BHS7AmouFjfszPRtf4KUXc2CjZ8n8wjgTfQRpCKYLAzaDeYaHMyiVVEc93C1iXzcRhz938gs1Eov2EnjduB5jx4",
  "key2": "55Z3CiPuAr5BkdrdQ1iwJ8PXSnYfZevytAtHqK5XS9q5XDiRAxom3JqwGCYpVpAQ9oGCMqiDYhejCh8YFrHjhoVx",
  "key3": "3EBfswKmVbcskJpB5MVxCRHVDyM4sh4fqth6yEHFyKrD3mhJya2p3DXZrZwozcYekQrfusEubPTmnzDYJNH5CAEP",
  "key4": "3KfVDWpSiHx7iqQCdUEdSKWTFHTKd9K6dTeExiVNqh7XgE5Bq7fNKLXZGVs7zVsGVMUtQfGs78S1NebFK9vjJvpU",
  "key5": "2QeFiPXwsdXDi1iKb9nX4HqvBnhyzHHMaBs1gQATvSctFpwZBjF74g5nYd9cyxkU9c7zaiudy3jPcVavczdtH9sU",
  "key6": "34yZaXHynp1NZCCStKegy62sv3tGVwj54FwNnrZ6agfnKLtd9DaucEV16eVdsY6KwKEkQr6QUvwZY8ho4M2jnh7L",
  "key7": "3bXmLEerg2TBUoMv4UeZoWCbncvSoTKZXQF1uMLTGFbnaEu1PxeyW6YbJtbtrxEWfV7fFXaFgdeZKxeZdFZvsnh6",
  "key8": "sxGgj8xrWd7sAxM2YS3KKMd3mRDfEZH4vmsfeHTHDLCxCt6hnJHGCJ8tS9Mib4isvTpkE31F9ye6WJ5tvLM2VPM",
  "key9": "3cznTJFjjBCso8StgtK2yERNMk28pN5fAunMrzAMUMqLhuEUdA2QJtaFshbULy2NCQAxTdnpAgTK2g8EzTvcqK4v",
  "key10": "3VZbMVHsysExVFUcmtGUdZVwEHr4khAbu4jpGTR4Pog9r26byM3SXKYX766778QdZom1J5cDfuiiiVfCDyBffuyJ",
  "key11": "3cVY2DG9jR3LnhcvaMUEYRgKf68h8xjxWXubgikXFua8G1Lo7HUzadraa4Pz8YsY25ZEevGcDJzoTRquQtXdD61C",
  "key12": "5ovKau1ccWDXnTtfs5WpN1w4iwL15kFWThc2tWMYtb99dBJphXS2MK5zCohaFsX7F5xigBHBFrxkb79xbkfwfCY6",
  "key13": "65GnYR5YhrRmMTTVSAczh5MigPdwXVBCuPwXoYK9FU1fefavCbaRh82gqv5J9KbH5tqVLmJuq9fmYM5j9Mk3xuFF",
  "key14": "2ZUML1uN3mLZaNRYRUy7YxCdbiT5jP8RmvdhPuCW3CgcgXu15ZjTrHYLMujRnNBs1VrHEg1Tw8FHG9onADYjHL83",
  "key15": "37a2x1JpXicNv7Hxaspe3n41ANMCP32V8S7AdJx7zry7oXShXQFnTkxyqpBqbG4n4mAAUKS4vVHdqjSBQZNkPQEX",
  "key16": "J1xEjT7Pg8sq1o3h1tuD1vxarezMv7ZeDJnfXcL2oJ5Na26SnYdnDBgcx3souM99ZXV6kih9rRFjmTfHkKPRkeP",
  "key17": "B4u88qJ5hQrZpZJUVJfdLsUmxZsmzahdkNzPmuZMbsn6xvtsCD9BMev13H3zqv2Da8xdPPRB8JhvFnFjmU92Nn8",
  "key18": "2gcRhNdzJUnjU8AF6scDDbspkDT1Trg8xEe5pPv3xfsNgRKkkEAen7bQ5NkHAsbHdV1D7j3u4qY6jT5VFa46iqpD",
  "key19": "2maq5JvycKDZpc2tE3aYUx1LEHZbX1GK4Ws7UVyurPrNLMJupGwk5wJr6Q8VxkmayiZ1KKqRLik5kSZbFT2WNCRR",
  "key20": "61Ln7hk5KpAjEVhr5V4TC8hhq3Qzv1LjJwdNpqJP8oYaa6QzxGqqbhcizoMURJLnWpX7oqUwjeKf5KpNgkYSU8PV",
  "key21": "2zf4NBoBexRhdmvXMzivMK2rptVvQKt1sTiGXkMd1qkzUuhCoX9C95mo8HhHHj9Z61sS3WEh9Z88UyBV5MuYx4Ct",
  "key22": "3nrLCxDXabPrz5vntoR91Xkd1FiGLBGhiQx7xQk6BovcH4oRt7txydnBPL4xuMpqtDSqxLNMvFCDcMnMD4yThGVY",
  "key23": "598cc2Q58CGcLAZc3yZEJrVksKbQ4fYbRUcoRJxwVhDquCv6d8AyJFKFCy98Xn65njaR3hjV1YoyzobyCiZogmnT",
  "key24": "3meMevRYiojFqKfrA11irBQ4XFVFmiSEGzE67BadRsyro3XPAVNxns2SAvmRL9k39kbgdJvzidUA9nZjP3btoaeZ",
  "key25": "3jXf8wMGfMYT3jBuGXuq6YMT1sKhSxQKNU2SmKLJJWHRu5WgC6uRXUHC29tr6zTt56ujNmnJMVFHcyKyt7ABioeW",
  "key26": "2RY287yGaDNyzuD8rUnAFFP4s9oFdmSPbEHFMYd1yQCW6Fb6Rwwai3jBiDW3VHbiuQEYYuHsZAA27cdfXzwriRv2",
  "key27": "2oGRJ2gbWypa4uFE6s2g5vgtfSePkNsHosvik95JErWWYTjxVHR5QMwYrVRhDNj1bJcxDmQFW1QugLp3Qz7cjYcY",
  "key28": "3r7jMb3FmkW3R37t3NPEhLEe6Pkp4omnuXRSxvTNRCsUnmL6V9LhZ5sssuCXXZaRSCDNjUUrZBnYacFkzYtSCiLe",
  "key29": "362gz9y2qYyPDLpZdesbgZFPaM2BKZjL7SgLjvy3XSxWmCT5uiS3dyKsiZgNo3BActmAFNphHYfLpQgs8p6N8uJ6",
  "key30": "3WJojkPBSPGZWJp6H8QyUfRThKGFdqCmCc9TmkWtYib5bg8DEU4w99pVgYi3x5CNPKYLHRgEZBNiSGEuBJbWEQWP"
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
