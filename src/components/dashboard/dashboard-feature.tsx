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
    "2P2BiJTYZiJqb7dV5KZfQxEXH3kdDGTeQTs6w5QKNJmEQPBmDqssgTamcFfJFoJ3VQ7hjJmygA2rFctDBZKhSARi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wgJcyWCN5vzEAj9je4qTnDZMinMbcWAij9p6VSfPSr11GkVSQsvaxCtC9vTrDksvJsGWvAitcm6d4iLAw5BD9v",
  "key1": "3Cptwh71K1Q3m4LNuH2KzvF9HkSgxRCTTzY41Rxw2eapF3bz49RHMEgUvaEUY5aP1wbBcN5EZXugvRM5CgZbGvqR",
  "key2": "53B2P2khH8BtDbN4fbVnru979r9r2anUdfguhx9ViXRS8rq2CPkfrRKUcNhWDcEJidaRM1YnRFPDPC2KQXxTvyZS",
  "key3": "2YkdTBEGnSob4VoeNSL6Tym98Es98XzC134YLUapoujL5JNYQZVwyjf6CyXFjCFRgPhj7QWpgaBdGo4VyvQDwSKj",
  "key4": "3VhvW9RxzQpzz3yqXCLstgNtQGTC4h28wmLa2vv3jnr1xtmdFPXY1thU4gsH1PbiCr8RpH8jP1vFgoWNF2YgvMJL",
  "key5": "294CAuzd1vjBfVSwjAkVeVo3CGRrjvV4PHC3ivWBicnoj1vbMJd75QifSJimDBnwJh5HQbsBVEQdRU4XmHePADkh",
  "key6": "2V9EaKtesSCLiUwc9r7Xn8hxZTyMAKSHjV2nZG8qTMgnQYthiKn8rSfXoPdqTFQpHgB4khuiX1RLWeDJPZPu86Xc",
  "key7": "4GmcpfMPKDXC6QEuxmoHaHifG6jAk8SUsc6iD6tMT2D1mkQMjWJgVJS9tBLW2PKVrhAGKhiLj5bzvbww1Yems4mc",
  "key8": "3y3oUecd7yrS5jUWLK4LyndpJSuFUMJrqBr2sUnm5H29DuPuySYPSz3Y7TpHaMZFHGyV2sqdQVagucyicXJp6Kup",
  "key9": "QQxPaa444XXYRZ3hVAA8aFpmkpjQYVoC5ANoDYJobPdXXLM9hpJ8uo9tR9q2U2R2Nk22UEdXkzp5k2xQbYrpEqJ",
  "key10": "ndrrJg4wHFbu3wQnYSfYhQ3nH9nLpL3K6E5s34sEbRaunZm496PnH6ZPYCHKwU8oiwYzpm4irtf4X4RMEQZvBjo",
  "key11": "31VdLNHByKhwdiKT4bANQxRWLLV6y2YzoAwfnV2zdvq81o3vGNFdC4TXtsz2LujMe6qn8FN8UvNsKpdsodKGGFZV",
  "key12": "5YHyE1JkjNU6QbSy2XUU9gTm7YH2NUvqKsFuC3eSaS3bQTFeP9mxR2jvbgYfQi4QohoZmNBhK3xgXNu7V4zheVPC",
  "key13": "jMbjBJXQTFNbQ2Z1TJY4zp4WjDnoqCTCvjFXnAyB89cNxBZu4uDAS1Ar6h3MSds34h88eokyseskTxaxtWnmi9U",
  "key14": "4ZNdQfy67MAUaYKiTwZaERHVk9X3m6S7fKrfQgFd1BBqewfxb3Ny4JX9GdceJvJ89qzKW3hZn3o71hQbpBNSHr3q",
  "key15": "7S2SXie8ajcGQZFwAmBrTQdJ2SnoguiLJtupSj5LS31oP7e5q7gJgvVHCS5FgikmPdkfTKBNNR4Us1GQwdAMybz",
  "key16": "4wUJbwu9PKCB9BVRDoPAUgesh8XDja8diCrhqkyhuXGEdGJv6HZLKSherBikpyWW3fQZkQc5E8Kaz9quxmyzgQ6w",
  "key17": "3kg9RnnFVr6CFCEUE3rraCFzbQ1irdBSumY9wN5ccorecqCBAupXFtCC637nDM528jonVdDSJ45kDSrny1cUbAb9",
  "key18": "22iuCYA6CmZPdQXm9EwpmAp4i8jwEKvFM6kitsbK5Xw6HjPEGer3ibLLzcAgMPFfD3r5ijont89L4zadkddPUDS7",
  "key19": "29pW3zDogFqoW3v8LJfagKDMaNJMnvkjTdnapeawHpfCqT5BQwtDVvqZP7esUxtMEs2mw71amHxXmPj18RcHw2DA",
  "key20": "5rW8GjeuszfGTRfKRRatwnwnYJGCrz3zUD88c64Wg7C2CGMucUxYh3e3G2CcHxe2gvwM8RuifSnT7MmWXtaL1KNo",
  "key21": "5iWSRmZqSnAnXE53wAUwVCkwWqeB5GkGeqP1LGyzp8XXgKA5g99EAfq7wSSVeZ2aEuqsZnjNM7dkSCbGu8cX6v7r",
  "key22": "5FBAzwZtTpPMVHkiEuUP7HWVNiUs57FjmbzSCLAwH6P6QznhpsTBpst1b5QndXVyEMc9PenE8AN2bEoZDAt17Byx",
  "key23": "2q4GkGALyHZTVVmTRaMLY4FnjFjQZRdUXCXhhuaK5DDUZbHhbPwVEYdJn8bzWRcjuy5Xaqm9CfydkeA4JZe9pGHr",
  "key24": "24fc5rLPVZVoHZvQsuL7EYmHR4eDej6UymvKvMEuaCpfnx89u43R6AJrr29HAenHHvX84nBeZUxKr2WQVWauPvW7",
  "key25": "52YpLBmq73R47wbbydcu5pmUM4hJdGoCB8q2CRxwQt4hUmuEE7gd7vq72FXpqBibWQHkNkQ87Hqf5M6KxegJt5CC",
  "key26": "BXakvVD41VHwpP2w3tFtHqZ9ySoZ5rVubmSs9zV78CbMj8ftMViu9TvWSCvWhHHHEeGBWKGwqZGCsmg3ZwRh1JQ",
  "key27": "2yGYz9mUDZfrPiYjkKoEE8ULjFDhdVxQDsZietFwBwhLFzzrGxp6XDazbCeU4YehuM8zx2cRv8t8P1j2q2gC6DPR",
  "key28": "Swn1GQP99GaQXmjopHq4w69pWT7aJY3T1LhtbXBxje48VVseRtvNfPKkkCxJJMUBbfwBx7cka8RXvmX3tHXfHTW",
  "key29": "5pEX7TtB4hhhi1K2PsrmCgJ1aatBrNhFjqAJNXzhCuXsCuTyFPfMeNpuQkgHoDDxfGePTtRTKaC9ABpur4Lwusjy"
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
