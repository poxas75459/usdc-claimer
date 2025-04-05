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
    "k9RShMY2uUsAbRXWJoTjYqMyJKmHUrpQe3pApPR8bp81PkYom59oE8owruNuhonHpp99gqXaS83bA9ZCtyfUcsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBeg4PN7HFKh4mPmMzvREqFoTucLywPctHzH8mhiWmHnA56LF6cGtSV6wkGunEi8AeftwgL9HRynSXEDBFMJHLT",
  "key1": "4dypbUn38bi6hYhViMMd9qxrrkaT372km4XL8zj1TkyTYUep1BsAMS7CvxDMchnzYdR9ZCp9xhSQPVjM648Zc2Ar",
  "key2": "5eZGB82jV4wYXBfvyV3Vg2CEyKpoytzhmQBfH8PcEq9d3Lp41Tmtt2L9chJjc2vhjGyqMaP4Um9dHwL1gzXxasJt",
  "key3": "2zwbZhQHzFK41WS359R5tMuDkqWEz9LkqybD1u1NCPjZVWcV3tKkuX3wfYBJ8uf8fmnjbRTT824fWANwPmF2QnBn",
  "key4": "4mEGMsMpp7kJxzVVjreVLQj1toH11ezxEriks6eTYeTMgBjYQbUfcxRoa5vCQoJJHdXWVk1pxM5CFX25MQ9YmVCb",
  "key5": "b62tWab6dqgAwmyzSfN7fnv9gvovBZ3gFnY8smezEYBkjFTeJxKUNB6E8Z4MKV5xLD46drMHL8qJVW8ks9Vxq7p",
  "key6": "29NVbbL4oGtTytWxFU7dcwg86xRzohsYgUJKZoExVEEdToeMRsax4RfkAgsLyYZZFjm5r52hkLfTG6eJmSHQJzfj",
  "key7": "4rKYv54yhutQmU1PswJc9UMPgGmuBzz9jC2f9s1Jcdo4Hm1s5Wx4LEhrK8C7XdY1QrcSwibPERrfDhFCxaSFLwy2",
  "key8": "2gE4nwiEgXA3tP7f11AcNr94hc4bmRb6Km6MmoL6C8TzA9ZTY9cMYuwEZstha2fgCGiPHCY5yMcVC8qCNDTdALri",
  "key9": "4ieUtLduLUh4ZsY5SHgzTZbpqCGDinRKu41ECit8PHSbJTVghSgHLghwykSmoM9SV5DjrEfkZoMZKF2C66EmkyuN",
  "key10": "2B95N13E4TYkvwgA3TBpgiBiYskbRVQTna1upmNV5GV5VoZn8yVaa38dC8SSfBJv8gJkC6AVBQZEzfSLq5STYdTs",
  "key11": "126iosoGkoSTNBtwoVpANzdcyK4WPf7zV3QEGHzm9xtZP6sThg34wnQKWWuifdDKut4nQLgXh1wX8Eo7jwSj8ZpY",
  "key12": "HvzNmKLmqWgeX1dnosJUUZvz1KNBcvBkzo1Dk3jMxh3DZBezoYdvEopWropLumabGSX7GrndrsARcsscnM6yEH4",
  "key13": "3dNcqpjC3FyaLRYUWQBCvXUgWxGLXzqB9EiJv1AeMcPKr84s1TnDdwhSZ2KS3MzBLDEcsG3aZMEr6WewUWvL8arN",
  "key14": "S3PVyjABJQpbDzs7nCRGj89YyR7tv9YcKmCZSNFipL3f2zHN8ePcNyGDmATTChuwqmXPpfZpEUibqXWSYcThbo1",
  "key15": "5PvFQ2EihuRmffW7iG4KozB3uizkrqBJ9EcpYLeSQgEpt1x81AC9eGVod2aQrewWZZDaEQBqn5ydi59JCxn5sG9j",
  "key16": "4bf49dPSEZLYdAVNxMXd4ngVzDDKwSztV9SkDgvHVfrF9hwyEN8JFwBTJ1aRrJJqdPrm4vX3J5C5tVye4znPz2Dq",
  "key17": "4M3WW3J3huK2jxsbeoaaWcikLkewubC2hJtQfEGBhL1uoUpaXiLUsmeVkNz7nLG6Uai3MbYrmwnU6AYsTuHVn7dY",
  "key18": "4Dc9GZaLQgkKsrZaqFkGdMphTxQ52ZS3ucHNPjbGd7nBTpibwgaQ5AEdbEwW52assySEVTrrDTLsRvuuzcXvxLUt",
  "key19": "2cZCTwTk6hbnPD9UrbBb3D5bhWqhDsjX43MeXmBBJJuLkCVJkDaaE9wzXbxLp7Ma2C4DwsJCSqGkdFEhqaxLtGbB",
  "key20": "61D5MuDJxZdUU9hj6d8Czde1ii5HmZNFqHjmjgfDrrrSgwWfHDVNC5t94n4msNF3LyeV1Shp591msNmWiZTVgBZC",
  "key21": "3vrWaBv3dRATUWqLaxJDoMX6bNwYFgqYWyRuV2RD7MZcRopRgPj1zEMP81K6vUqYEp1JeMT6RSZzKW19w8tH9FyP",
  "key22": "66MovLXy8ExdZJMo7iHELpuyvxEckWcMncGxa7kN3gUN4r4VwgZVicVWRoqG7AK7CcwXtZ6X63b3rRLoJYDq3yV9",
  "key23": "2cRt1CNticaGf2sZxFMfxSqYejing3u7XTyvSicrfpmu6g5J11Jec6S9UTxPLEPripHWw7L4c1WBCPNEm31AwWiA",
  "key24": "h63Zi5z4n63MRT4ej1FH1Q9Jg98tFuszJBH26z4SpmGYsMZSBf4pyrn3ZpLZHz222q7UCnzXAG3r4gffu9U3Skt",
  "key25": "2VfJPwtbZo2v7wFXKuZoazQMnVRV4mbkExXKZkUuLvJkRZ1Hb4p3cmcS9QyWNMwb5UmYYBtuArLH9uHDviUSvXj7",
  "key26": "4CaLaQ6GGYaDVCgeqA4TMj8ZB74LQopPHiJjJyRWW6eeVo7A1uauPMsuCX89UErFcoLtk1PJtQuaBuMXBp9hnHBf",
  "key27": "5BfZnbJJrctnTP5MF4Wn8JaZDpaSzgdQhqh2VaVNMuvzBf2MMwnbVs7Vy5W34ZmRzKsmohkWtgLw89iYFGseBLxL",
  "key28": "pXgiNNxtuaFT6PGqC6Qti9vbcduGkrat3Usiqot7uck42ZVz5JZLcK7tbLhvqtDfem4UreumiLGhg4Vpc1S9juS"
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
