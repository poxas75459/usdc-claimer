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
    "5TWTgJFdSmBvFNcLPSpTKfEnSGeshfNT5kx3FCskygGbP5tZGrxWKATPfKn7ST2zb7dDCNd7hKXFUZdP4iPbKpdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVN9nzsULVWPPJeZSERJsJL81qhhV3DGEscnDtN59faSk7Rfk4eU3YaJmZdWeQRdErKcF3AKXx49bGAcgN4aXmD",
  "key1": "4kocJCduTsmXEsdK1vEu7faw2zRbNFxr3VR9BNtiKzbU1t6vKhWm8Tt2F3haxSCiQNkDgCR2oKviBSEiSXoMSDFB",
  "key2": "62paz8hQRHZNLX1BjdRrb9zn9Z4YRRBf5YFyDD6YcyyACNb3NNuqm1vYaE9zPnZ4D8938MG911zxE5ooNRs3H3CD",
  "key3": "4iTdDkCjEgQqXCYsMkE6hPMKXN1nLSkrXSWVWnJ1TciAbxsX5abLZW7SWmP6AdV3P48GUSdGw3h8HXtw1aGS693R",
  "key4": "5cTAGrwoFR1NVVhf8628bBZXw78uWm8oZkJN6LrEXK7QVrgrAqfQion4mucucEtHdKhfmvzYfaYVPig6pptRN2KW",
  "key5": "37FfvvXD8J7j48V96AkGKxA4VdGnRF9P2qgBQYpQTM6LU4W64uJfnZHt4KCUTRxJh9LsnjZyC6zvr6jpCQeRu2aN",
  "key6": "3EJKQvYbpFJmFcmJreUb1AcDrNT3g3moYNg4QyDhkZYRegoJKisHvbEj99CvBhx1jAeuHGmRudRL2yV2pFEW6EMb",
  "key7": "9bMkkJ9ubJriyRXxtkN5jjXonTrESENLo9hkjehu58ApNCyeRzsrpEM18Qd3LHPmeCZGL8ztZ33WrzNLQQCKTGg",
  "key8": "2ZRKCQ8tosUMpKNvtHLKuiBeKnLD3GFzoREqkL8SzdmZDALisNbYbNJk6L7sSpgcgKc16P7GzSmkszjau328HGA6",
  "key9": "5CFTJTxDbE8118FyveDHkDF2gMMEV3wnEtw3e1ze4BELN28QRoMv76wjSPmvVntNjfVFNnBjMxhFw4KNzEe21cKs",
  "key10": "22gb1J71dxSkH1NSo91kNHG8M1ZWsyfph56oBe3dvq27nFNL36ER8t1Avkp1sd3Di1vA3PFTvbdiekbkh9gmJJyq",
  "key11": "4Kar1TMjUnjxamNi27vRUY1jXvSuYK1NQjybMK7KXGY4YKtsK2qBmebz7T3mWaohF9V2q4XLnxjhZpyoDwzjYQ4c",
  "key12": "33HR9ppYMEoiBEzqJLfXvq9aBcyJYAbfF6HDPrn64UnT2918HD72pGwN89C8YLyk9CjFPD4rVvA2XssQTs78AjjL",
  "key13": "nbwnQmhJYq9MoQR19uxQgwJA5NuoTGagAPuxAt2hhhPw7Ewi1FTL1W6nh6nSvX6Uqtg9QiM7VrCRNtYnV5Vsqb1",
  "key14": "62c9NVJndewpACUC2WsbVMFFLtnFv1SkBFd3hj65pHk1Kju18mdTv9aLwRBDbSmvVH3ZqHSgtMkK7DKvRzTry5Sg",
  "key15": "4HEU8LynTv4szNduKKp1A8Cpmizbg71CEGBfXi3AdvDrvUqo4u2FjzDfw5AovF63ysYKuxSxqDyf8HYHobgC2n5H",
  "key16": "26CTzNJfNbcfQdW8KTrp73bbRKyhwWcuebEEMBCjXkoMyTqjktgAZHuouD2kgU45eiLdQmmUNPwohxRBZczT9maK",
  "key17": "V3hDqtEdGbh9g6dafkM3KGR13jANRDDradmFMiTWPL4rZ1AYdTh2zqNJfwczZrx6rwCayv3qC18RWTeW5PDRVSj",
  "key18": "rEjomsbqGHHuKN7F7QNDYBvQ2qEeBTyQtxfYP1TpogHkorHjytsbbgmUcA7rHZK3G8NPa2gTRA4uVSYgN3obfdb",
  "key19": "5SP2p7sMsjSaLyQ7o1yXP8Nq2JZ4k4jRB2XaEpn7WWTnRpLZMup4UicfNVNW2za9hAXCMVjzAjGkkQ2FVxZYjSTc",
  "key20": "p2sLxTHWihXgv93HsQ1kscGR7d9ANDm72X5Ljx9fxdQax1nD5CrAjN751CaN8W7rV2b8XQLd51KvtSKUKjmUVvf",
  "key21": "3xzYckXyJz2QNgst2pt3CGCs5dEGvnJqTrvV8RZPSMXcJPrRQgGTTRi5UTZAmMxMLtTvWpXUQ2JaLXMZxbTbUqqT",
  "key22": "63Ej3ikueEAaYjcfHyH5bRXvEq6WuHWPw6wejcUYoTkjJzvqrgA9GNzJoUJrPgij1Gs3SjJrC9Pd5HbhHRejTWAh",
  "key23": "4NNMueD36bx6p5eNA4ceWV6eHWioQZPkpeeNoRZ83M3DbdiUN91gn4jmdQU73CDhLH4QqCLJRFwG6t286ZpaHzYH",
  "key24": "3F2yZ42TEYvCNEsgrR4CLpBYXG9oZrmMsXzYvShCkpR1kvqaAFABAgE5pButiaSZm66g5wGbzB5PVFr8SAnDM5gP",
  "key25": "5iVQ4aLcEquFcK9TkRWXC9zsQcp73yBP9oPdtBDATJt1V6HKZAfjmgJBAmtw4bEbbfMaEnqk7nFrPydotctgaxN9",
  "key26": "9QiqCBMwSEwDEZaicHj5sLWxXmo6jEw5vzYVMzXL5JeeS7vuqaC5GBj6462dnbpgd7oFbzxoNZ8PewB1k1mbMAS",
  "key27": "47zTzArU26tu77c9GpYRRDaJBFuhpWV9qLcMj728XQhKZqqctHzQZQLWqXvzpChYyX8qe3X2vmfmrcy587zrztih",
  "key28": "4MJwgFyZSMAEXq4ojXfWBUyzweGDUxdPCj23yBb1jd666qY5XFnwHW2HMcdNk3iDGd9Ziv4yvD76riW9Hz1DyX3P",
  "key29": "3rW3jSnC2QB9vzcUmpVbEHSCGsyvEpkZ54zTpoaVB28ddpd3Gvq71N9WFvuHNAsJjqGAVfFexYC6df7expMwebfL",
  "key30": "5JzoowwZ8TnmzyQQg53PhytS4nbbTvVv7oCuGDqyro22ywbTs6aYt6cSw5PHteQNwKRJME8nFjgWhfpvrLqK3QcF",
  "key31": "2CKUtoPZ19kLPcmvVKhqYCy6Fd4Vp8CZu9knzdLRNREe9SH4TdUtxDdSjmPPv8dZ6LCbPhyMaAbRZ9PMS24q5HLf",
  "key32": "5VHXnVgsxYejFEq8VgTxnd62ottsf2FJ5Nb8HYAYJosyBY3Zq4mh7SF3pLGpDYDTVFYAT1jL9DkbkoifDe2kuqJT",
  "key33": "gwbd78d51RHJKLsXcxzDGGEwsChTdtKx8nXTFG9Pfe9ZtQKJuzmziqsTHDXPdZ6zpyKcrv3an5oedqcFAoPLqLF",
  "key34": "4Nx1Wuds4P7SKFUAsxVWSjtnpCBr8XFXBaKUKdKTXjuJ8wm7xaLgovBFWP7VUaYpDLYCAmUtVDsVUAKKJjPi9rXo",
  "key35": "5Z8E1tZTfWgaMF3wTUqweLyPYE5Gz6rLWjdTKTgybWxomgaUJGuSTR5GZFr8pF4Rhkbdt5qZFPJNZSTAdGFDiV1J"
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
