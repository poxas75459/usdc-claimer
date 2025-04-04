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
    "5dCgnATfsvwzSU4R2easV9i4ZGF8SMkejF89qGoTfMGZ5dAAsXmiKTRZ7s3ZxXhBd8i1RsCxty8dTXQqpuZGCX1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3VgA8mVUsUXph4pbBESMCFfbgT5h9HGNN6b4ziw5QG1Qq46U8EBoTHXpQmBCifD9bEWHJzdJUbgn9mqq1efcy7",
  "key1": "2wCMC8tnwqxYxnzSAw1vcZCfGXtmsnTj4pmNinpUT2eLbSGu5mDTsLyixEaysU4zvU7WdVLcUmCdeAYxAqXNVoWJ",
  "key2": "4omjM38dYobFRCWfeFZhNBykUMfVaCwZDci2FqxLj9ixERSZAXZ1cU3mh6mHQqY3GeMSLiD4q4D8xDYrR4wYgtUS",
  "key3": "3qGPu6qK9m43Rs9fLbP5rrBjUP4ZhNGBm4o9inPHtBWu7wVgFG9F8RMLXqpPxUa6WmMJ5csQvLEc1s9AegJs4dVp",
  "key4": "STmhCQuxxzA3ksnBJWPrur5XUQNbzE5F1gZbYrqXavCoq1qWVLAUANAC6BYswdbHJxQEWnMYmVq8X7TGiBcRbjq",
  "key5": "2cgyDFVkfmo3rtGXpVxmyhGAjZkJEvSqzq5XpmYsmGqr733GMYhWiiL9RsCPrBrZGN6urVnw7N5SeoJtvyB99YpL",
  "key6": "2ztwZMEjnP4ZuUbuSPmexGrShrbge1Vrwc5h4nZZ5FyghKaTixHQGJabokMJBY5RiYuPSp3vaKGabtFTehkh83ts",
  "key7": "62rz1WBWQK8RMBKiMpgScinQFsoe8LUzfc83wKKMUDSwWSe6zNB1dwM7CgkqSB9Ty2nXSxiufK5B5HE43UsNHedv",
  "key8": "35dWauEGqR8Hf7j4vVcHnDGv7wHbCg26qXDQsjnZJ12UJNrkW1L8bvoAavweHAorqT8C69B5UaXNBAxBT6ch926g",
  "key9": "4eQdgZDEDM4KXNS3fDYfbziVqegLQn6fuVUT4KxNGBSQ37UuWrFSFANkTrZHqq6zsDvzcPxARnFHDd3NaFi7DVS3",
  "key10": "jCv7aAQSJufYPqD44r9zf98RGVfRDucYZbCDZ6Pu5vvFYW4hDGSSkMM6iz9ymjkxudMgyQtiYYYuL6TezS2JAXh",
  "key11": "26iE41AxRnhAEq9Rf8TKbifkodDR2XwFDkfGLLdQs2LvuBgAa9FRCzHPWN8ehDRWqhfEAtUsAJ13cmiSfNX7bjHy",
  "key12": "vWAtwLekTKgw8gzcsoQ3WCW8hrAGKeZZiWKKccXEF9FULJjmqFvWprzkkg53pTmmX9nX7uFu7Lp1D1i8kwaAsfW",
  "key13": "3KvtXDx4KnWRSRpw7BhJQHHykGSYZrEfnHWoYfKHm9NPxyWaFDmsTSpGqsVvXmpXXqbPDUR8wnDZTLfjMAj98UBo",
  "key14": "2ooRFKWovpFZRt6iSJjqHrwYLePmnyDWUd6YmhyasdrKAXm6rvfvHn7mrbt3cFR33p5X4XYnitmoqA2PFs266ADh",
  "key15": "4s4KM8sqTxoZhFQMyRmc7dPswb9ZwNkDp7G5Hnvf9L6AoNzzDjAuzWZeKvGS5gBMTFawGfvDNQ67T27J2VSMA9oD",
  "key16": "4sSL3fR73y8Lr1YncPbGATKM6Z9Tv7uqCGCuACojSW3UVe16rY1Pm9AJa3e4G8Mfcj53FuDkEsp5XpZnVXQpgtaD",
  "key17": "3EdURLKvFkHsjrXnKBMXPuzfNwCqbJRu5tgnUPMHUQS5bPQsXMK7UEkmRvuxpWm49QGRbxjgrfoRm6PtYFYmXU8G",
  "key18": "3okxXRWoVtvYW9w1eU1CDb93fNds9aZ4He1PVcSobvXfjUCDTzmgzSFeKeQUxVstfiQYh289D2YbVBtgk6hCtDZn",
  "key19": "26ms8m2mGuuGzpTwRZRa22JQX7NpNPCSrtBtWLEiLBV1JNGmhguUvS3nPoajxDmPPCtBzPweDiBNbobf54L8FyqA",
  "key20": "2ZCXHMYFpWwS9yLmXBuLiYuFtxY7mgVhvBSz1YiaFoF3pzZgR9eDuhziC9TiUqrVzAzFLaj4S6N9y7HSaT2UiTsG",
  "key21": "5TvzkXUqUHB7xRdAwKwNQMq8ffCsp7dKs7hJF8sz2uDy3vZAq9uc51RaRx9gQVPQPYdEzZHzNGXxvAB5SV5G85Xh",
  "key22": "3iNfuqqyvUECVLAC2o7dEenvHZ4YexLZDLGw4thG3BSvYdHnrSZ3DDYniCddh9qF91nTan6aebXqydowMtyAhe4G",
  "key23": "5TneJxcMvfr2HP7DLYxXYa481UFxNe4io4yUFxx1re7S3SBtv6PwtBmww66FZkXmwcvDFhWt4uEETKdpmkfnVwyZ",
  "key24": "48brbjEVZXhcqkgidJ4jxw9xFVbMJTkB5p1wc5KNZfEpi5YeR7LGZydHxpKMRXKthNezpKoNsmVW7toGNinL7cjZ",
  "key25": "4U72sJLCCvbKJxwAJHQYkPpnRrS3Hf5AibUsDfHn99as5StVqKznGuePrR4ZeicwzCZKkYX1awW2axmt8rq9y6Xs",
  "key26": "5P2S4KyC4y2rNp86ZRoKpLhxaMiTpkPuTZNJXA6e3J8uiR3ngBxHe9Cq9Ud1uuF2NBKgvXarEWetKTZiLWuzDhJH",
  "key27": "5E5JnbGN1qb3K4R4qGUmS8brmV5RPtfvGVReThnGzMwzd5vi2PpxYBwgsf5JZfQkVn5uPXARVVwsqt1598pbSXiP",
  "key28": "3YuxQrwFtDfCyYeQ4XJMUNSBcjvm3FDpT5atC9Yh84egymhAqErthP5TErt4FaVWzx5B8vV8jAjzPABtQPCEgruK",
  "key29": "3sFX6hj7XwepPueR8dvsrv4ey4uY9ki2E5tR4za4e1GkEbxwgDurvcQxE2QPMMDkxgemnoKZKeMApPrzcd5MvEoX"
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
