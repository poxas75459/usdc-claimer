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
    "5QVaYAWn6NHN1cZQBBUgEDuLJRwUPpnLJZph7SZP18u7nQiRRwS9gbiAYao88YkRFqG5CA6gcBPdpA5UM1BirYLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YuMaVYsYZbFG5oUxfzTofCR3mQ5S2vpQZQAi7ciUySQWp13bWsrAM82iquX2c4o3DJZuNiv216toZX1nBB1GAzP",
  "key1": "5HQUq9sEC8z1vetusdaKEGpzF7LiownxRihtkyurhLBUKJnxhFNXtPCmoC7pWQrPt9fkjg6uGZAUFb8jiJwxHkVH",
  "key2": "5zAQ3YKA7k8BRVXzaBxVZKpjA7WJ4X215XeQwUUXX3EKPYi14eXu6HgimNzszN2HXnj1opHfSQaHAP9ynokfBzDy",
  "key3": "32J2gbg5wasSjCJeb2WRVb2cxbk1uQUihJk99tVDpizxPtjqimR3ijhup2nLZ6kcnnqwhnFuSiBXoJFQnMrt1ZPx",
  "key4": "23hEYVb3o6KWpjUC5n1KN6aSKLqZSiXq3C6Xgy62NrurJDCnn3spZGSncKrzRbdATHHr9BweKB51GgkFaTe8GYPp",
  "key5": "UnHi7K31Zeo597s1xNamgw4W2iy9y8KioRZwCo1oEj3UzWwe63VwRk5UsmFnbPZd6oe7JYnWESMGJuAYHeGVizc",
  "key6": "Vjit4Uh69x8wecwCEe12PrVK1XYpe8VG9hvvJKTLEWy1SYR5fTodAW374xh3pCuVqcG6nvoYfz5xMdmvuu5ULU3",
  "key7": "DvCV9Ta8jKroFAjp2Jzny5CgJ9dKJNoeVqBUUc4yZJDpvyP2P3yMGvuoHsrhmGHaZkYfJ46WyZ6ZmEjawZQY2Sa",
  "key8": "4wUKNW7ZVLie3CyRMJMnm2FsgJHQZWPv5BqaeVxYF4g3FkUe3i8HWEZMbCNtJWcjDzqy3ytB1GJUY43T6sVxmKn",
  "key9": "45nnVhjM9LJZPBiYuR29k5iMRAnUKnp9jeYvUfoTfrzMwTTRSpuJjzL7B7EgAtNTZW6dNj41x4Lw3xnhDoKdqeeU",
  "key10": "2Z157EzZjjEAbWDD6KEW3JuoP4WKAvA6egpW1s6wgjHJ47GGzDRtbgyXuJdJj3mSrtx2QBE8LM4oo4Kb1Zkkqeof",
  "key11": "VyeZxsA16SU4X2RwNeY5zJkYD65wDiT3AUHtryf2YSybUfXQRoJS3m6EJqqxoNYFD8QPR1guapg49kA6y4Pyff3",
  "key12": "3xgq8FNzb9saRVxfRGe227QmWthCv1V3vRcKrGK34LV3jRNHDK2qaP2DpMweKEQ7nNtG57c2GHveDq85piqKYfES",
  "key13": "2NgRYahyByh8Wcy4B5yBovjmQDZ8qgCQVbA5vpkL21Hi7D444QCeXgHgjLaQCvih1HgEjXBpMoE1zXhyZhHxSbf6",
  "key14": "2AMNFx73WPufSguz74S1MUSFzXs6hP9xQaRzzoHq2FtNHti5syGXBdRKDcvr9do3ZxmEkEapJWciCeuR3yH6yvg2",
  "key15": "2cTLkzMn3rpoLYWh6HasoTVtyvVBA47nDoymfQbr2xHqTRCH4RFpyy4DwW2s47vr7Tx6nCT6ns1wrjZRZGwyc4dq",
  "key16": "2itkW4Ht2s8Vu91653zsTvz8LjCmRNH6q3PNV7vrRvfCyfp2subqaAs125Wexofbxbuj4vd8zmQT7WjEcFpAJJqY",
  "key17": "65piXHSTPXq8B8dm3ktt6J3Ndk12wkqPBjyZE5nWtRkQe8mdANRkTsdAcniYR9oimi2iKT6iRWbuEfUkpcppDcbV",
  "key18": "5U1eD98JtEFu4yfNYwmaxtgi6ZAi3dJr54DQsHNgsBqErDhriMYd93sBttEmKjubYhWhiDwDFhaBWcib5BGCM4cd",
  "key19": "5YhviQ2oBQoem5SermqsFS2MLWPewkXwYyXAy9DKGoCB1vaWuvtaEnED1fJdWGkiqVGK7jnPzzGGLAm76kBbjGFV",
  "key20": "2CT5qeSwDDY66RT3KbkcESJT3TuHqK1MEt1GfkqPej2LfCyqLvmTDLx43e9Kp2qgTWjkxpNE6E1u5HhNU28oQFT6",
  "key21": "HJLnczwienF84jcf4HEJQjSXjdMJC2AcnXV5cCRVBmYfHmJM61h1qYuKWFrEibnGEeBJNPY2H4xurxFD7UT9ujG",
  "key22": "38uHwmqc421xEeqrFbk6sqp6kFXp4KNKAhJ4DbJ7Xr4UP59iD56TjU8uxD9kCXZHWsKqLcTNqXPwSCGnXHrXXKNu",
  "key23": "xmepKyaHo3dkwmn46zZ7qQx7dyL8ipfEWMGyco4KsuPXQoqEzDeuLLSyYs5hnbhtcx6we53q5PMeBtczcdp5jPN",
  "key24": "4V2PaCsrhrmoS4EpTKDbkzuFWBzkecLiW42cNmS1otMeYxiU89cBZvx25H65cWjC55HoMSMEGwkUQWuofhqDCjeF",
  "key25": "49cfQM4TY9i7CS6bC2EoWQxAuoiCRUEDwCnUdbRbxNxiSHSdpmnheebjS1edYyqeFtaZDDhHUwwmxyawH269UQW9",
  "key26": "3VSjDsutxJXATZ8afBU5M5vZ2fSMY8439mFwXDaDj83ZUbFmtmbqjGjVKMLMGS4F17rUhMFXWkbXdGHBcDnS7y5",
  "key27": "2zX893HQfGGz4GyVhiuvRHbmPCwqeGeUsLZYzjWSNHiJu7QetV9DV8h3qNtwL5vhAmRgTHyzUjFuPwsHB7CaGLhv",
  "key28": "4C8ufpdvVJej4D5YNPBQDg1CToXgNKjJevSto3oT7hseVofXDJtGrJQ2V9rjvkK68suqPGxoQBifLKM19r1ZLzxz",
  "key29": "2sbQb5zhLGi3ejNjRheXuG4kMqThbQ2tYR2KgXbx6JqeNnE6EGzPqykjnk43dGywokYo9QPfBAKkuB43MaSpjqed",
  "key30": "3fhDkJuNNYYgkGh14kuJY7gSdoLuH9sAPaQaAXowhhfGoxKVHa1UBczwUfFn3FucXg8cn88Fmtec4pkBZsaahBi7",
  "key31": "3avmr3DwaMGXt35VmxnKUo9UDFo4EzhnysXFwaNg92t6KvV3ChpY9BToA2WbqR8iVHBwxGnoTKKjrxywPYYhXnj9",
  "key32": "Ayfo8h9eyDzJeEgnEZy5j7ihxRa7jVmDD4dhFzm4jKBBW5FNTpo3LDNg9PftQk9HPQiDEj6PM92BQ3xCYhCEypt",
  "key33": "4obv28Xjin9UmyttCvZrFF2uTMr4frUf17cKeW1qkafDFuFF9S6CfJ8UqovWzSrhhSGRaYW8FpfwJ8YnZxkumizS",
  "key34": "2d2LExG8NbfCxu86U3M6BdKXJJrpHc4zmPXD3gmyM4AAMMeJ1yn9jayxwTDNsf9rRHk1ikELXaxBGyBtXWqVmtzQ",
  "key35": "2Swa6FumpDnvrqYGD2dMjZzCcA7DXPAzAMNFNERUMm6qKh8joPwsyRrAT9mYCwoSEhi5FL5LZXxAVYzR8beKGqTR",
  "key36": "fd6mMi5HgB8pCRhbS9LpU5mvesZbHmsL9ZRKBVzdPfH1Uau9UqvQKKTSAhq5pGxVZZ6roCcrAa3nKphE85sawau",
  "key37": "2Pp3ueXpn49h2PsDohoNTCvcHdMSU7qC56Hn7ZiVi4mDB9k4Mk6nH9E57EQ7ENX5W2fhYMJku5jL3a3hptzLDSC2",
  "key38": "2sYNzMkJwfvzCY3H474XkcswuXv94jkm7TmZSdPtdX6CVPPba3cifRkq5BoeUSBERgWGvc5TrGaGyu77vunruKQW",
  "key39": "4qofUJq5xHn7cT2pSRtykjhMNkdH6uTYhDmqqCXSxMUS47GDrhB2JWh761Jg8Gv98KVwb6ToiZBehcYEUvYTkfPD",
  "key40": "4wJq3AadD3DChhqD2q5KrbyBQprzNf8wnYg64UBxS2ywXsHxXC4iw6WRPvCRBu1QpppR7bvY4qJxxLnt3LNUX4Zj",
  "key41": "29HMXdDFKmafE4K1p6io1iidVxhETim3jquqMWB3uMX9YgY28tLE1wB3Syqmsb3aWGcNfkfuTXEwicCmvKyjPsHu",
  "key42": "25tofc9nNohx3nPs3Ehsh5jNFTyBikgNTN8BBY9CK8cbFSSrepwv51X7g7eBycCLWRoCFAYL3coTqEZbNg5U3RJg",
  "key43": "33PdBTbDzzJ9T796tyvkHfbUxcshBYmgeewG1syz5aoXBQBWvo1oVAH66dYgaHEnUY6nAETQpLxPS4yB3nJHtq7R",
  "key44": "3AatCM6xYENPE3VoXap5buFX2fy3D7DyaK2St5DHHH17xAZgjVQnREoCiVf4EE4GBJaBaminMGhKHzXZvn5piU7"
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
