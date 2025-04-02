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
    "26wN2gcey5uJSJkhhA1zpTpc33sadBsz7m1ULpnTgqb3SVR1J3H76Faz52euy1WxTVb7qEQQZdhypL9nCaACT53S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNL3uCMdT7uynjpqHd83VkZSASpLC1UzP5xJZYbvvKr48LJEfwiP1isWwqbRPQLSvPYSiQ1CfT1x6Ad3xNKXsHH",
  "key1": "44uUAswmNmdUvJbZKYn4g2aL1aoD5Hn9X7FokJE3iPXR8wvCrRiEtQSYazzFE4ZD497p6f9YNQ248UVqa2AEoszZ",
  "key2": "62xga8uYR1nTsnvK2a3kpFPHjqKzc581wNGWmmZRBu97zFMXCB9AHeiLEPKqMXbVD15jiopFGxkn1bvhHBGoccx2",
  "key3": "4f8aNTNh74hfe446kY6Ya3kCUeHYn5doEsmywPbBpW9qkzRNwrQHE1toG4j9usRHpBWe6HMuw1H6mTPnP1jMVqDE",
  "key4": "2yXwiqLhfMq7qoRdWEvb7iyxe9toBUhat5DhAwTrT5GXQm7ThAbh8Dci3SKnAKmU2NenjZSSJA76eD3FtSM9UcKt",
  "key5": "5aywHkxiYw3dms5S7nuy27uQ6kNi3kNhYG1kMUtNLavz54wTuPx5jhNeRn8SE8rRueL1AHEicYztqAfAb6TUikTn",
  "key6": "5d1MvApLCkfcBzJ9H1LjkqWuXxscxHwvCmroc7q4jiyNm32cDuWEgaWDJojQoxGVkxoNp9Q9tweGr5jBZ8ng7TT2",
  "key7": "3e4bnhptJzTsaRmdwGAw3KXSn9pGUF5w4JqeENfu1z6nQGsxFFHG6G67svaXLqFuihEQTi6smzJLGWcqjnnmqbPg",
  "key8": "42rZMVQMfGoLnfduMAxHjF7McrCvsgX1uZ5RC5x7cARPtoCeGV9ZCuUDRQKPXaM3z39prJHiKPPfFe1Ui41jBkAa",
  "key9": "qdXrKW69qZvyoAvqBGmTUdtSvsma2Rd7uUtL4cZkR7vZv862dC5rDX87dcgDqKYNm6QVfdQKuz718pc7i5PNNU1",
  "key10": "2QxVTyhnQ4J4JAstTNWgmEQEgkq6ofuJWzqWg23rPhd3B42H3zk4S7HER3PU2vJFxWmEhxM287UHFTcdJ6DvfEea",
  "key11": "38DVUY1RjWA9fyKXPD6S9PL72USsuQmikgzQiX5XT99nzUR4Qhn33kDQ8sWyVhJyfH3XR7sUJ2sTMX8GEH7B6242",
  "key12": "2ts69P9rkLJxSWueJ8podicARmJYEFFtEmoWyEtnVgBT1MAay8upCUhMAivA8JGTAYYzJ47CweigtyT1FhjyMGpE",
  "key13": "5i9Sxr4RTFQ5u6jNvMQjhCJX52i1eJrUwG3Vqw7A7pM23V7U691xQ7mveoXZpJvvEposMiWbKoKj89tFh5iuY69C",
  "key14": "4nAtnaai8k1h5mQY8LUhGPQRmdtsQDeEnNjHMSpi8oCKe8TCHvPo4HRL7MfeHWTk8vrCVeFYN3HiGb1CQ7KtMwrF",
  "key15": "3ky4V5VK3mirDsEfCMxB6wN9uWqCRcnTdN9oDmx1JFsQ2caFknnFEaGobcZcNk6fF9tvRMh2ZQJmpa2dtz6nCj38",
  "key16": "3cgkHQcANvwg37nh3MwUjwV8kteTi9a6oxYVH8E9GUJRhzP6ndjmVrVtLhrBUHUCdJz5HWNb3N1PX4WasezHp5Lz",
  "key17": "3tRT6BZLCWew8dACKFra9sc8iefYY2KeS5aYiCQRony84fV4GNJKxgbGxKWu15NXP6RHfLcj5GVLWg6mcvgpVnRT",
  "key18": "Wn9NWbgCo5NuMQZLJS5tBBkQ2QcLkSmi2KbZy86UvLpfJyN5B9nKnsBum6DJ66YkMQYPd4aXujmLQepheAnkJHG",
  "key19": "5pKL1hnNeQLbfyhDdvVLnySKGu1zKdwW4mcSDqZpaah9TuodXSTm6mhD1JJ9P1t7CcXfPvro2FtJwQorYcaxkwYk",
  "key20": "3Z4XmgGiVTPfezVHdasWwaX5v8BL8rJiPkaBS7kpuqkkxG6mkZCymxdVTftDQRFMq31gjZWwq4pDsCFjM3LUr9PA",
  "key21": "63WX25Gdk6th6FZW2AJydRo8m4ieCk7uEZ5ytvhnGU7pey6UjBh1RkQRhPHV1sAJUxPAKg7bqRZ2EnRGvBusnHj9",
  "key22": "5TGqFgd8Bynz9HSyxJuGno4HYCMhjg9bLZazdZ5YjiSkVV8V7AqntHVVr56nYrBXbEG7eCC4vJ3o5a5PXASJaRyC",
  "key23": "47BG3oALU5Wgd39vUe1NtBJTHUUYCNudcfrmxcK6UKf4NECprLXSu9URBpruYbDd2G71nUBHg5BgeNaMrcs13sHV",
  "key24": "1FHmWa4zHU3oGxodH5G6K2pkXju1zTm2NwVy6nFV6CpuCixGEewE1NATgBWc8wnMG3EeA8NkkTvgjQeNCKhjWAT",
  "key25": "43b7fhrkjZbQru8MLeU4snPuz5jjZhziWLevdRJkZdxMgDj5F8Lzkn6azCod3PZZz9HFTXGcwYfbVorHfgYc7RXQ",
  "key26": "nGn2d8mvNyfb5HrKjp1V9cuPchsgmUVXDCQ1LdLqiAcjs7Bb9TXbH9c4t6iooRBVGP2ANt4wjkbhgoBRhZFAgJK",
  "key27": "2jD1Xi5PnVkdPoc9o9StHnvMXQgDp1N8hEmaFNT3sVwgPkDyJRnr2vRFUCV7nnpiF5PfJhfTCPkFCXPddaa6MXwX",
  "key28": "624rDfHsBERnegzMMguJnRNrvQMuD65X7F45wVKAPJyFyM4f7isUo3YnGPZkziC94miMsoCRaWapZtnFe85ZZ34u",
  "key29": "33nKARpVUcxfK3sRjwM5xo8PtLRVtBw4HCuKAbHT9oeQZpJ81Ti1bM9MHkCGrmX8eVYnuLeLXLnigHjR73SU8rxE",
  "key30": "527iP1H4CmizK6o75We3t8MfLB1EPgQUHCJUdCPj3r8wqM6E1k7dRzNA2LaHwEFtMB1dfy25cy5gjSeav9KPCa9o",
  "key31": "3QyLiJppQNeVPC9aHkQ4GujRC5iNYADyhPt4BmBDg7m42Uhv8qYj8fRjiSE7PJ4xttpKeoRaEHyBxADF6zXtRGr5",
  "key32": "23fxPhSYVBKE6JVwQKhQVepysmDbSsr7SWGQEzUrDqXyAdbSzu2jXxMBWaLamEKV23Q8XuuX5MooW6QXfrYNLidK",
  "key33": "2jDbQDEoNiSpF6zKkmyy4aoLRbNJyrghC3DFgz13hKiZ5g4TYB5L3X84TPcQnXUBKHKBukcA6sTYD3Uyoy9CFEuk",
  "key34": "5uTy98Tc5zCcBEUtSFWM7dbwdbZecan3ZKwXHo1x52ZzzaPWmnVTwZAdyWaT1vGYFkRoXB7NxkejJybevijQCYtc",
  "key35": "3hhcJCgVawJvoHbawj1X75xsbb3grQLzDRcq97bK7D5oZqzh3fVaFHSbvo9nDyJeoWsxJjS2Dk97etgcv7D64PGm",
  "key36": "3qB7jj9DFrsc5f12HFCcpgpxC85RjtUtVYg7UjZiAWnBDJmS1iPUPnRQHQ6tXhrcavZBH9ow1TLXamj9DYdt2MRm",
  "key37": "3hw3wMJXDuisMAnvv4QSsb2VbswUkx1hk5wZ8pKqVJ6B7BCWexZtoe77ZeBgqV1K1rWnisqd64mkDKnxpwzZJodZ",
  "key38": "2sNDUeKvC1PTu3vVxT7qB8DWWMSBAx84REwVntoLQpiyFSSxUxovNxh89Gi7WrenHGJGsmHbviKP2cTwmiqCPfbk",
  "key39": "5kQ5fQeyyLXhVYcBEiYpJyk2onxEiCJBJHr1R6vos34nNk7C7PsjwBupNf31J3x7V6sBqiPADYxHrKjJD7s5bQgM",
  "key40": "3fXMHaLuiLNvUAVk1HNYbL88DUgH4W4sctT6Cgh3Ta4jsZjuJ2y1ieyXSCrrNjHeQPt69VyDuEPg1tKvV3Gp8JDo",
  "key41": "3Ha1xag7YcuAemfvg6FiTYaBYiuCB2qPGsoyFTjFwuHrb4VcnPn8xcwJSy9dHNf27Mq8bsuCSQjuKidvU1ZsXPHX",
  "key42": "3KURogVPCMYV3pvWbWK4eMfvSi73bLNesPPNuYT9Teu5fsf513xQaZtKs91LJthWWqauTdFeETyXUoXWJb3tVCya"
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
