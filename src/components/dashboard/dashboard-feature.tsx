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
    "NQHfRMSdBMaWNvCKQJEcJPmV9kEnA8XKhJZAA5N7GqcGUhNNjfGNnsD4umBAmGW4jaFSNnchjLC4AdF9yMci226"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvUFDR22RZftFaRZG6AMVarcdm3GVfWnBQYoo6DHGSjfTyvEDoqTaeyg2Swsx4duQUB22VkKFtKZWRcgGvJ1wH6",
  "key1": "5WcifcjW1MJVP5qn4fvhQhKfh9dyspJgTchZWKdMuSs67u374u4LfLXSTZSGME2J645qgMTCYvP1RnPHHwQmBWJw",
  "key2": "4osEWe2eKYM9pDh7pGkg8BsGzVGzyo5UZsHBx1GiWeCtj4pbzzBnV7woJuGjhfh2uFGBRN3ew6KaKDgo1aL6rr4R",
  "key3": "cvgdnMWjnDydeWMKSFLhYJK3rWgVGYoQ4w1JLEUZ69hqC1rezXEapEcGnYw137wfiGbu5HN5sBqNxSTGfWuoYNZ",
  "key4": "5uKHJokYLEZTiAHCKu1yQM4REQcYkgmoUxHTN7ndT1h7ifA9PA3bqa1mKxWJvDmLPPs8fjM1ycyt1C6zDdoxEq2v",
  "key5": "624uniYHqipRabjTE3XsmD92NZCA6ksmY2XV5QdtErFahoc4iRto4Rr4FnKhnFV8LyrNQcki1Ju5gpBdxbpUN74u",
  "key6": "sBMXpsKT5SdhDPFNeF5t6RP2mxBN545F7yVheYf6urifJUQ2ssy2i6SEqofrxtJqqRC4vXhRAbyCRhyq4CLAB9c",
  "key7": "2NN6HiLkMi4t2NzfMUu5F62DZk7FGeb2wpSFnjVHYFA3V66Gbuj1aBqMkXLkj9BAPCCM6RPpELxxdcm2Nxaq9avg",
  "key8": "5BJhoAEAsFMJmnpnkg4VYATCU44QotNBczjTtRd5DwPV5y3V4rJKLf6RXq2JyvGLwM7VxqA9u1DxhjxvgLNVhKUg",
  "key9": "33vkRAGSitDwZDEF8cbuYyBCvfSeKWWoZzzaz9JYzs9RCU2KfszQctMhBpCVQLovWq6Xr9hAH4nwncic1U6CzbeH",
  "key10": "5xvvppPacchgMqLrEPJWN5wnWwmzZjvS9PHRoAJvpsm4q11D2eye6GFnkuz9SqbQQVzZkLuJeArdu5nnAPEg4Xep",
  "key11": "4T2KttFvD4nFDchkQDMwM44VcN7t8LeZsjWxX4Nb8Sjxk4SWNcG4YcbqaU7knHeFVEqRNAy7Pp3v976MYmHZm6TN",
  "key12": "Ta8UFApjdiPXXw47iGP7XwKoM44nEyUvyK2vw21Ls1qs4ghgZmA135rt7jLZ53gHeeDgDGZnP2BbFy33ZBorjH2",
  "key13": "4WF9vBKt1M7zk1uux8aVfMvhsHpNYDa2dEBj3aQwrDwRaaQY27uq7kPN1SKzTtWk1bFpTXZ2sh8GWFLiQVgGHL4q",
  "key14": "4hbPynsiieEp7CxS8FtY1ti4G3x2VRPUx6Zz6VfQJrTx9PWtwjHuJJ8sVExifTx9meWZVDXuZx7tv39JAtcmqx3z",
  "key15": "tNQeJdUoJb51BPVoL8aowms8SDEyuCKxoUsS6RTQZ9aGKZLwhuynXH4nykGtWNT6VzJaj4Vdm9vTXPmgz6BVtBZ",
  "key16": "55K8grodPBbfqNpPee5cA8GLga9L6CZtRLcJyrppZfg5dX1Ya7FRhPWhuW2LCYbkr5obMk2DPZULuxSZQnJ2obKz",
  "key17": "4uxn3WFTY9RCKGWLabYG7wLwTEFjhKihUWEbAcasXymgR1kPfPpH6uM5H7ag8pE3RJzo7pAHChGBfhG7TrUx2jCw",
  "key18": "55PueEYwBAJrHkzUtQ6Tj3uavy1Nq946sa82yep7C5ybvhxcER8Hgn4ZYxAMEo6aYRz2dnxfpYYhP32SgmxSdutk",
  "key19": "3ycQ8v7cjyMhDSzDpyhm7z5r9F2BaUgRxYpyq9wCr5ywT7pNmNT8atgBupLPSmHmgWfnwWVBse5ZxbSrCjo1c8oL",
  "key20": "3NtNbs21aV8cyr9Spm3jd73N2snnG52ERxiDurJ3UjNkNmzMr3EGZNzui4PDaqMmCwLX2MBn3mMvf8eJYNE3ELBx",
  "key21": "35Yt9yR5SjWbVzq6NP6LZruWyJTQXmeYW7hrid7k7XnxKqx5dwhfV9ryEKyGU4ZQ8PydPT1ojWFqbzZS6RrndpSL",
  "key22": "2cHGETQ5xCcMEXQiKdMZ3MgUMfXmB9bcuAN3Ld7Lgd5FevR1tLpL2BZY1LFCvrB3DJWReG4pixC2EskKvTz4mT4V",
  "key23": "2vY3BpD6u29ynjMeePVaywNrPd4YLdKz3XffSB2SHJMwPPvZ7JVpWcZan65mtgL7Ri87cD2wnPLPD1kQXeL7DASg",
  "key24": "sEy4XPG9K9itULDxwg51mkPN518asfWqqcd73wFw1WMjbCnN5sPydkQ6j2Psj6U3UVtbRQcBdA9qjNzqzwdXkdV",
  "key25": "5hzzGP4RT7YEnnKnin52tu7mGFc4oKPxLS3dn2DDvSaRRYSRtPgxQVypqj5vBv2P6wwWoFiLEZJZUG8Lzugj149e",
  "key26": "LLaJTFeT1Z5fbDvveMncPbrutKLt8QCtBEi97MoyscqFoGDJXsHzEzCUFXayRW1MUuTdF48STt4HUsX58PFL9vd",
  "key27": "3iWo2btFmLfupGn54trMdWVbJeFYWp2Fib72uSHafhofYgDFbao3ae7nYZwwt84Mo6WHJzcfFzTmsGaRZQ8CZAhk"
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
