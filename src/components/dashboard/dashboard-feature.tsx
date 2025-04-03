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
    "2Qxq9jYC4Bqr6kK73Eas7cQGGEBdrEGKqECtVRUCgM6c5vJHRYc5qRTq9NMkeAAkzj6wbnF3m7rKrMmL5Rnb1tKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hofgrM6Uj6XRFffsxgUK2n6kDQGAQbfCodiaNXKUPHXSVYUnBCsKe1fGjuc4CMtb4TUE4R8urvMUDKmAhhGX5w9",
  "key1": "ZtRxvjx7oY24WAeWWLM8Xafi2hspxXVbfdLP7uAG7orP8w7dbTBWC3gfQRugbs9nAoBuVifrLLD2Eq9NC7ciDeN",
  "key2": "3SExN8ugEySDjm4qp4WX2ceNmTNbJ21gykQNf2sEyhGDauNifrgKdp6wT66zL7EiQpE5Fat85trbU6S1QtnQ3bcs",
  "key3": "4doB9HjKx7uUJFPRfcWiLrajrNv4QKkLbs5PSZ2Fit1oHFMzP7F7rFCszKmq8w9C2mcY3qeHnTDa6bGTwyfZAeH6",
  "key4": "4TqE9tDBRD2eqU5wYV8QXrxH5nU66AbGkPhYHNGxhNZN2yK5EXprhQu8HfhJk7yQBvGoboGbehiCWzCjxQ17hgj6",
  "key5": "41ySKLDQZwgEBvSzeG2jZjb5NvoMhyBPwuydvEARpJdzMdwWMgCTQU4BDwiAGMAcnzvGghonduD7kHs7GtmBCtPB",
  "key6": "5N55kEpL4jFJwokkSRPunbhCdP8dRDhypGAd6LMbV3BR7KB4hdY1W1XnhHLw7SjPpCQWou8pFRHU2upxmGchyNpJ",
  "key7": "2pkZoZNr5vn8dJAsPB51oSjBUpqFNoji8RMQ8E6kS122zDgR3robA6fSiLNTecCZbennJnqcne77wKFfshP7VmJb",
  "key8": "tLYoviXHfCpXR8AkTkiM5vyWNyb1ZMFWFVW4NHSbkQThdVi549hhdnUHvoJXj9TBqve2xdAgkYQE6dMtNKZ8CTL",
  "key9": "6Q1pwRMTC49BZ7e9VgU6x5FxKQVfDu2qRSmTZrho8RnTrWjBw6sYhA8JHKTA5bAx1CzrVsHFtXZVZK63wj4KRMA",
  "key10": "2YakPbj56cXzjrtrnQGMi3ySpCvd4gwWMsmXGbF5guEQp2nM6DxYFjirnSmVhmuPGYZcozQW2t6J3MQWYFu4RAjR",
  "key11": "3xCyZeyUXLZwvASSVBnhmBpYFzjhCqVtxLmyqnNSAm1fahy21j5Z7VZNvhs5YQEVuSkHX5tTJGGT1hEZ7kKHkPTC",
  "key12": "5WPr5RrKtB3unoftpWoie873n61zXjSohxhktGKs3oArT5QGmr9byuPjdDEDALvgcDEpedi7ZGPaVFrUf9g8MR8c",
  "key13": "2hLiDUjzKzViDtDRbSpx98Y5ogHoVpPUscUq46c3T7aCnAvV65t7GmSstgiiSjye7xhreAT9njuTy7QM2jpPmYsw",
  "key14": "1MtAJBE1PnFfkzsbGKEX5qrddSbu2vLTekk7BhijdBJgLwEkUEgEaiAkMjBmhU5kddWzjwfyTGr5w1CbxZcZxsY",
  "key15": "5623TKYZvGrHTxaqnHgCgJB5ZFBxrz8c8kk5PXuCAXCq2kNsP4Nw8fSbBZpPb3GHNpovfvMEU7z7XoN26PviMcuA",
  "key16": "66a689RzoTy6wkaDoz44yffGKsw67W6F89dzGUWjdXtxW4FKNVQ4Xfn31n8cE2ECVVKxC6J8DavAQhDLWsBFA99o",
  "key17": "56E1zZkbBR6VcGx4q9Rcge6nnP1KZ868uqhLw6tsJCaWALXN78uNPNnaEG4EeV6vurWPuKa7eG1Gv6difhkveBCL",
  "key18": "CYvb6FDk57yawsdaXpdSz3Pt5SAnVuKVjaNgySxc5uscKbvtoxYePHJxzWFS4T3C3RqxUHB7YiyxYAPFJmLoAa8",
  "key19": "n3tMEMqQGF9ujY55GkTnr9WJqE5sMjGYp9WeNSz3XbK6BoguNPUj2t6iZAZvLnxbaBVYmekppv427nDhge19dRM",
  "key20": "526QSsq3jvVRmac6eYsMJvy4y9NwCCnemwYiCFwNJEK5gxMzoTEnrunqCL4HXcM2Bz7gLMWj3PSdQsJg5ESZoSVo",
  "key21": "4suuTBM6HQ4YUehabZbjiXWUAnEhkwxesPPujNwjkG33XcavY37QvKT1FfRL2nq8Zw7TYYtghmjseMqdvoKeCce1",
  "key22": "4NkuU2hGvkfxq2t6oshYb5ouiq1RHRkUvBrPPNEe5k1gsi9vpwVNkgC7q6aZPJnqcCPpNNkyLUEoGd4ZvNhfyVH",
  "key23": "4wjA4N1Fh1RiDFmXSuv299s6cRbWDG6ZhyCxsenS8rbpJisL1qAseM5uU8HMMXFEcCoFe6Lu5qBV65qigu6GcFTQ",
  "key24": "3qGhVPnw9zmtGsLZZoJhDW1q5fhXZRq5m9nz8HpR3MSQB1XSs2nV6dHqy5Trjvcypkx1d8MKQjWF1A5G1yVNk86Z",
  "key25": "5qzySqecN9uACLtfepZZX9R7NvxH9VBJwusr5PR5UuwceSa31tnBBTZYE3rLjwDRojQ2CYoGyqKVyEE3RBX7y8sy",
  "key26": "3C4FPBAzWn3zA24vUmu2MHqWLRbTPMHM9GEpHJE63gSP2XxvR1WTQNMbuJ4nca7VSFyrBiQwWwRG1dRrnTjerfvH",
  "key27": "3G12amSrGadrkF5NYbXDCc3Htjrb6FSJCVnVJkTgpQuHH19pKw7dJe1K28XMf1Kk2UjSCs3cH7vtHSFrWH6E29yL",
  "key28": "3ipxkAbMRtAzpTQJJ2DUgHGP3DETVRVh2QfXWqPBjggLXvStfTqUwWCmDWeABJtzw13v3vDXHz33hJKZtrTurZRv",
  "key29": "2BSP4F7g3aeJVofKQddUeHJgDC7Ytu9VTPmL5DbkrU5bC8BoTYui2C73KsYrnWE1rSnr7pTEd2Bp7v4dEoUNDM5e",
  "key30": "48XdLC232ubzzrX7zZMKqqFqbNfUPGVV6Si57eKBSeYoLyKDvBg7Wk4Uh96wmrraXDn2Uj5PiemtJ6Dan6nBX7yL",
  "key31": "2ExvyM18ugTzfYfUFuJeESg19sPEoikA2wBCGS3SZ2Xrqhe5gc4bGhfxWNGP24qADGAuFsm7XytjMnRJnb4ha4m6",
  "key32": "4mbf7RrXhmL2pADhoxZY6vXVkS3RfMHpeWVqQoQCXFsSTiKhVZvmEsfxGBuY4rZLSRscQxumtCWpmbPHjdYCgx2u",
  "key33": "5QasTr83F8982ZiB2bcgkiveTyA4PqcxR4pcEpn1fXM6rgbtLwikvB7nd4trRyaz7Np4srTKH2txFqeSQVxgGLvE"
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
