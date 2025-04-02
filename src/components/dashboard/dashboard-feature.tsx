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
    "4e4P6T9RBv5qznexfKLZRXdTf4T8AEnGv5kw96ppDmgL5dWZQ9dMsE3MLjjTrWroyLyXuspkV8kQBLuvKEt6epDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPDDeDG6vzF6Go4TXHGASpbwkzr92vqkPEpQEaW6GBNg3Wz6KnDxegvc77FBJssw6uhvFbTbfxhHX5nh8n8AyAi",
  "key1": "GTaZ7bFRMGBaQvTths5MYe5WuiDdCcBfanKMTt92GuMF2eKPyvwBuV4hXoeE1XQANVV7wHoiBbak7iSr9ZfaKzP",
  "key2": "2XarzgiCJxVUd6HoMugggxRWnBS2gnifMLkYAYr4FDDhnRxc53KktVjEAYvmynQULUdtth4CPoGJDGiNcQdHbuaw",
  "key3": "5kFoSFXYk14i3h6j8nzdHz52TGYPhrfaGfN4iYcD6XJWS9JPo543ergmAaGta5iitw84xcCeNTxXcBqEYawrVQ5P",
  "key4": "32gjeuqTLgF2RvPwcarMEzuvy35UpYfuKi1d5z58MsQ7Pk4wPSgpHGxx76LPQUXkPvnAp34PotHgXtqewim2q43P",
  "key5": "5Gsawf5bwds2aJNRR2vEtWrhsjk8hhEMa8HntFUpwwyfB218spy6CaGJZSQVYtFUNWqctEWVVj1zhygq6HE6Hnow",
  "key6": "5BfDuL24WYKLV5r3S5rV9eGSfCEaZJp1tg73VprYVThauPnimT4pdtbZ41hj1L4Ph4MG5DAdPQNfZoL9UzpNc5Fg",
  "key7": "2siBuW9yfbWBvhumqPDxtMfxfrKNnMo3oTKffPuPXj6K5NdouorkHRU3UQh9kQycj2okT15Tc6AbqEYTVEu4UnoJ",
  "key8": "5JupvZFdej29Rfr2HYyJ1pcJMtybMCWBfoVafMwpGfok2mWu7R8grGKTxJ2RXbWraJTcCZPzfJKJW5oyWexj1SM2",
  "key9": "wqNKfwB89nczgRMkjWcvXUJbbDQ82466gnRo4SGkNdrR7JTKBd6vuXAjqytwvypcsLkWPPKtJmGe9dwG5vcPsMt",
  "key10": "3DMjKkejtgY674qpD5H7Gq7mGUyDTrKPRrwogp6SaHaRdb28ErhoUGnCUoEBPexnHnPMbgQR2bGztGfJhrUhxC6V",
  "key11": "5xmfQDuRmLKwnTndEKUiJ6jC9M5NrjQUhFpHTZqGLM51VA612X83dzRbhZ4G65Ewc44epozoYZYN3BH8e2C7mziZ",
  "key12": "5wAXcYtrY29txrSY6iV6iqz8FZ8oAEcQWkZmuuAZ7e6moZsyepkGiQoT3sBUHAhpAQFauitvqfJAXo2C4DqgwyUH",
  "key13": "33eEokbEt1zRF17zgEXPQAX8vYTWxNUzpcwAyaccJfLpSNuMoFB64xRoWVuNAn1vA1LrBcdYAnvir92zE43MWXAj",
  "key14": "3qj9anfKkxGWNMMdJbTK1cxHSSBupbVUQhcPcAowoBy8fc3fe5yLuCgemQFPqrBcpZ5fcgAFrjMXWrVEKvNdDCPe",
  "key15": "3b99vZeq9mnpgsmT8mxoyuEE17hirGUdNqs3iffRna1HLnp7mwWCBErtDAmhbCbuYaYve8GtULqyiCTXqtZwHgRu",
  "key16": "PHEK6HNwZgDJMDtQ5YF1J3ERavXX9x6TySMs2NR2r81qDHzW5crPJjWhb2bq9bAM2CzNWSyMbcihxiPYDFx1ytx",
  "key17": "2PuaLzqKqYidDjXgxRPT4A6aQFwawb1WrbaPtpLscFLJX8gP5QcdwbNbuJqXZg46Kfm6WsHyYmMDhVScj4xqfE6Q",
  "key18": "5HG7s9hfu8QnR4z1vTiTT4gkxU74Wbpt25uR2UMdZ8jjFH6SNWcsQzQ1sDytDXKkcU9f8qM2sehEWNABQhBudjdj",
  "key19": "2rYqJJCKPwZ9sD6HLiSkKkYG2rpgC78GGYkXWhYEMs7hTRQJZ3FUH6AkXfrFKbh9xmULtKG2E5GB3ccgD1hCkxyb",
  "key20": "Kxh9ugy5aZydCGBMiKj5rNNUaBeZrCey4DBQGnbonjdkpfu8cUczg1DrhXJAaxGpxoWJXXMDyr2CMV9gdj5BYa3",
  "key21": "mcg9ctQNLNpyWstYgTuGqTjH6uL2BBnNMe9izJBBoEfBWGcNAt2VqQgikMWjzaVFnxh9ztfzqTzCXxAQb1ysmUk",
  "key22": "3RzrZ6c7sETvw2LzRNkxzzGZmM7WG51z289u3EeTFNcaUtkQ5c5n2ps1tWH4wiT4sqkRdWdse3HAs7t2pCvuCieH",
  "key23": "5jQJbkwKp9jdRczDEpDZTZZ7D58s7r2jLK72ZXWJueCmECkzG63arTh8raehkdneM6ycGw6fF4Xpxvq8ZomSt3VB",
  "key24": "4oc2ebBXcX5ovtaBtE5tL21rFu7ZetDJzWzwH6JHV1m2RHBFVWjKwqP5RKysvcAS9zpQzHE1z9U6e7Aw1gpbeoLq",
  "key25": "55zGe4KKv3NwPH7s9aaBCz9fAvfJv4H6cjeGp6wf32ii6iq4XAL5SZnxgF2SK1vkR7qwW63n9ntpDWmCy3gLxkLo",
  "key26": "4KbCwBiAXPqotYgDuGnNAJwmVDPHi9RiECj4X9cpbBjPSWudCadVBSKTgxsEhPmkxfPLMVYSDobaQcPgizgEuSgE",
  "key27": "4fgHQBzgj9VievDCbxJyzYZk24eRSBjzgtqzimCsNtjPzAEz9Cg8Fe57jV4kGJ3AeQzRppKr9oR7c2Vhz71yNYWL",
  "key28": "3se6wVnapFGMunbEaEhJutAQyztvhK32pSoZScmCkBihDz3S73ooaPakj6KjyqHUNmm6oEbhfVK4YLHanUnmmhwc",
  "key29": "z2aP5tHfvFA1DG6DuakN9LFdqJ2VCGcaX8mJjGnmNWgnss861FVHr29PqwXBHbSBFk69bERJToeCjhhnNeJXTb8",
  "key30": "4CPTWDmbsEJdRqps2DUHX1KnN1vskV3E4nsP82cgimjRG71U19MF9TyFb4rKSCR7zxH9HqjM8g92MyQyRVrPXKZo",
  "key31": "5sStAVBmZwJsxGkMTozVASH66cUs2aUXe2Vot4xEvjfvnK17Hj87PRdDq6ds1dHDrDuFVAwjwEZiFaEuo1cEhKs6",
  "key32": "3qdHMt2XanfjZJJdkvCdwTfGFVLtPvMZhxtx1hz8W9zZemJ8MLmvVxVE9kDAZPm3xEaFFjQ7pEEnbtrDyVLhGbJF",
  "key33": "4EQ21nbf87nEiySug1F6d1RPsZzBYoVu7nr8nwimxykiPFGisu4ZUjJQq8mtNbywLnEr7aEqTn4SxHENGXoPqfmp",
  "key34": "TbZphuoDy4aTBVy4WFFxcQqUDyEWvnMwBL5ShKQKX3p4JWG7yBAM4M5mMnsweamCzkg3PLd5gmCjiSuYxiddkdx",
  "key35": "2Tf2ViuJAHB4wRRFL4F59TWvU1fhACoHgopf9dMvRNma8PyCEQGZuccZDbKVRJYNs2hNrXUb9wTSmt89FQNJpg8w",
  "key36": "4JaFFMKCifMdbA1S13nKW1NmUUqio7Urhne96VxUccPWWfbjWmtFB86GqWnHu27pNczEjJuJAaH7FJiZUK1ekjhg",
  "key37": "2ySFR8MvnDko3aqajH5JATQgHpXYuLNa9tPxN6hKUJu6YHsu57CearDmvtFwhEBVCu5wR1XVESXi2AJtXXdW4eGk",
  "key38": "5TgZxTuvArydtxnqHaFYyLuMEktk5z5xzZFh9VPq2JKZMjzZ7BXTsga7fYUV31ZX2TSwqkPiDhh1zBTwT6z4NhU2",
  "key39": "45CeY2BAEbw8KJWG6FauMJ1pGRjRbMm64WjFpt8myhMzFDNzRCZrBEQgKNygHkBG8rmYNncL1RBM1pfiKu8udtyt",
  "key40": "3MkX8Swg81KjA5DCzL1hqT4iBbPgjMnnHw5qcKaL7VtYWMv4hZn3N3MEbzLHLoNkrvFYo43hYpYrrjdUcTtcenJH",
  "key41": "2XxZqwEuEvZ9bPKNPbhJuEuEMyC8Bcxi64YWGAcEo88mEnHz5tBEtWeiGke8gLjLBp3D7JDGSZo38PxoDHX5s9g2"
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
