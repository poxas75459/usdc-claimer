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
    "5ZnJHkHQbxsqJtD5AWmK8wRDfe7rNR5BXEfWK8W9AqJG4zP7fKGkr1MDdv7GaGLMtFtKHEU6sbiqCxgTtky2o7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdUKRcCj5sSb8amR7gNrAVM7ToMCFx2PhBsjqvryWJdtrwAAe2o7HwGi3AihgWVnu749e9dCA4JDV1zkwPeKtSE",
  "key1": "4FDD6wovxzSHqaTLv3cqzQQ3EL5PiyCwyq7iQsEEoXPmR1Kn8y3EbRTwk4RMjiVyxQNFL7yCJUnmcURMz1Yoarou",
  "key2": "29sxJpNcBr8DVciY6B73zKmeAeRzFQ9TqhfLCT48A174VQma6dNMaoy9W6KFyCrFLSxCK1nNWQzCC4sU1W8UmvDh",
  "key3": "3h66RN5ST3FoVfpYZyx4sJqiJf1q6xb42kruXrx5itDyjZP2X1onfaXogD5HsZAxMvFCGYKnUL23B4HqvF6Yb2XK",
  "key4": "3WoPxhpQhdhmcqyf8Me71yeofHLm6t32pBfZcG4hQqNRBbgUZAkYMqFuq8ihnbAJPBPNAuqBm3V5N84KRJbHH3CL",
  "key5": "5QUdMDgYDJ3zGjHY86PRg4qDn4vrnyUiR5FjN4YtzfiMjaFFt5xSEykuqZ3tXgtJZorwd5f4JZ4N3ChG6xnqEjYi",
  "key6": "66uXXtCyzPLiHY6uX3zQzh3jYsoFgeGRXYovF47cQWsEcdhnXsazvLCWAtJGTa2efurcLgd1NReiGyyt94fYzUCP",
  "key7": "wcVYhhTL6DjvuuHWL3ZoRAYB2JBaa9sbS7HvPDY9SusLZA7dMs9BTsMLbZ6uhGyjeK4vRx4AdG7tba5MQ2H9NHQ",
  "key8": "2YPakf3AdJVFHXizRZsfhgxFMMwKYeBtE3iWQw9Q36iVPpu4QDRh5MU7AEzmK4LVcxYXkCuQsPjrEk3rYobRfsZY",
  "key9": "4rftqLWxDh5XR76Qb6mTBjm1Nyf5RE4KPdDYQbE8kfdX638mdd71MDUY87zsqt2EsYY5Em762qdNupYyBQn79RaZ",
  "key10": "szJoSPrreYcFJTLcrmAobzFwvcCixhw7wqDpy7AN9dnTW2LBeMxxBGQ25gtN1vVaWPCJm3wpCKkg8fZ3FNsYBCk",
  "key11": "5vV4GForg2PPTzrtZaAKrk2Nv1RBYf9SxB7mnvpUm6pfebmDUeDEpD3KXe8uBrgQvSVrn566s3MeG4g6PANF5LtX",
  "key12": "2vfGFLEdc1bVw1PXhg87kicNECWoWCE7QTbwBUfnupNEXov9wwrC9d1hnkBmQKSZJmyDbWgFizAWrXqruKiWW2Wc",
  "key13": "3iTcrQXi9r3GVAuW857JYsPe5xLNPNnRvkWP7sE9VghhM7h3QtHVe1WWYRu5hcLvfM4fm4z1WuC5gTE5HTyHQwgC",
  "key14": "5BfabJccH3EEuzmx7x48rG8QMckU9yHXPZj8M81FTJdTigaXQk6GjPLmtJ62a2Rcc3auneTXp8iDHgZ4NYhkKCfv",
  "key15": "5G73mqJWryx1uYAGS6dCasPEhGGprhntBGGbTSJreknrPewSBSUme6d3r7eEJLoWNiuSdTswjcRABMubSKqfhKUe",
  "key16": "zBRWkTNWtn2tjZo5nSxNDBqFDe9Xic4bfBTMmaFvhyVe2juYa2vSKbRPc6VatEassA1FKv6xtqAGUTzNNHS2sDB",
  "key17": "2ahhFbxeX24cs32cJBzFQ6Z5gwEABMU52N9mUSNb5FzZbSzxvKs5RhpmCM52txmqwA5LuqHxXGYS8j1NWg7g2s8F",
  "key18": "Tw2XBdbHbvi3dGU7im682oCaRYiVrfzadiPoCHfoQuSdJL4CvC7hfuVou9hYRzhGVoHavLTNAzbjgqcUK4fDt9C",
  "key19": "5e1ALQ63RLuZqUPuJ9Q5BQ3KVnsaRVC1pLPETw9XbcLMwvgCz1CMRg3bmJ63gwJqDMRQcR5SP5TssMpHcfrPM2bi",
  "key20": "3Qr93ZkkuMT3ST4wAf7JKWZgdQsYCGoRkrTG1f5sByTKbb9iKm9Eu4VN7duYJM1TiQAQPQc77pwRdNYn9w5vUbxr",
  "key21": "6qy8RQXfXRUk3s3r3fBLsZQBV2NpVkW74b2FPheG4Ybke3aw3oVb8LWz6UVFQSj5EzQzWmpT3hw1QPor19vu9Mh",
  "key22": "2932ZE5VSt2D1LynrmBKCyCZuF3wmJZo6EyYkCt2PAznzKawtbsYAYcKqjnq3rJ3JspdDgj23o23MXtWpuv1mbvk",
  "key23": "3587QD5ZPMFas8K3Xux727PKC7PCLZqSqJ6XvQFwWrxPAcZLpXRpo3mt49sbjZ5SaA1FUKJX3U1KP149CA6QFrqC",
  "key24": "25bRNcUV9hXWa6FcD7a6o8orH6GQTEUEzo8tzB2dJiq2rmkQ1FmgcipfFyJ7RAL2ZUMJVJYdwNpxqk7H4b7SdFD6",
  "key25": "5HuiJruh3Rp2Qbz89iy76VF8DBzkSFkWkmofAwEyFTKQQa8MFkjdS5x11E3w82GADb72DgoBfaiqV5XJNGPtCZo9",
  "key26": "4jHxCU6NHfB6P2WZoSsDn1sZkQoJFhFuPiAvWaPHJuEMT42vzAzvFiYUpionoq8AZoNgVTyim3wi1EbhwfH3N9JF",
  "key27": "5wJjxgJjTakmhvvLDRFZSp1Tt2yUMwqAHDi2c49eEPWUSJAWmpHyRUmoMw8EKAG4dywCj61vGYpeE5TQRrSzpNS3",
  "key28": "2dADDVYnxqNbz8nHCWf2nvrmsdmgwpStp8AvGvjyAkuV4xLqhu6aqL8DYeskvCrHC7PNEa6qEKCKJkzDCJna76aM",
  "key29": "2vQXwasps6aypUGUVDyFuPDHZG9nbyLXHyo8ChZSUurwGrkuL92RjpEmQVGez9oB996z7eCHc2wizQaGB6DWkasE"
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
