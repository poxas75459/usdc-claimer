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
    "4QhdRS9U2rsCLE4eh9XcjWTrsgTGYUDV8A59EvgvDgrMvJr1Td4bvjMZqwkmfnh4GBGYLqeWwWkycF8XWdewwcUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2TfSnyAzSjtR5bQAKHHCwaKUjCGih9HsPmwZs5PsQP3qrBMWkEQgvL1zBeKtSGyyFK3WnPgSoXkAZcfrV646NB",
  "key1": "2eTdRVRoctdq6JqbktvQbNZUjamaz3ZvbVdntZ2MGb3VXZQYdD1iuQqh9Q2mEQgUtPLGaeZatpx6KgHAsvPqHPfV",
  "key2": "2hWFsmAmXdn1iduDW7NZnz6yi2JXZzUaoNGJQSEaSPdLSirYWWoZCmwHTDGnbKphR3fHQKM2Pj2Bn47LHi9uozbm",
  "key3": "5y7vYrWFPcH7W3tNEA9jCpbEeifK6RengHAunJoGbpAUqzPehkP9cydQYtX2rHPNeTnrJeiCWpeZ7wk4nBUtECK",
  "key4": "5M9bZxziTt1gAy3nAPt6YVVv1pp8VDYrbBNvrjUuRydtVkT4iwxYCY8GXMHYWGJAGf8t8VUUKfDVWtNFwLsaTw2R",
  "key5": "5JFHsrJUU12QCDsjYb7PEZq1fANYqnY9x8py7ekyauFnByWuKD9iCHQGBzeSqK9UEzrdnixYpu5K7e5FZajiHrze",
  "key6": "doncf1VhQ3mwZXkMtUcUG7ZXdHYgtDkwiNGtNVojMVjsdCExZrnuuVSJCrdLDvw5EEnoFHnTxoC9kbGeuUecxp2",
  "key7": "5NWqaoKSDEUmVFFZSAJdkJB9US1gUA4oKaHZbGddvfuqjueG8ggriDS4cPXh94sC8Jee2MMbTCxNce1etg6Z9ZpP",
  "key8": "5LAzN8zmYmCnuwavHvJP6RzonaKNSGFEjmKpA8g9hiJdpouSeSR4RGRqzwoHvXYZgP2RkByiYgFcC1gqJ951LPpt",
  "key9": "5pEZdfuZvYLRxme9EbqyAvNPEXRUremNaEZAh1NnDykKf8CHqkTBeakdGEStYBaPvyC4JvHGRLzNXuJNwY89hw6N",
  "key10": "c4vkFmmxZVu1C1K6CWcipAGHz9L5zWdyPFeimsfLFkHHhYKKQLTzJ9rqtnro2aAuVDZe8NYjXfWpLU13Hsb3dCv",
  "key11": "5B39ynsTHC3zpMAAbmtHkpPsYzJ4TEzXdkpT1MFgwSZawwG7MNqzdbeKApEDyNR3duT5SjBCHUDtPm6eeFBx6uo9",
  "key12": "FBJMPtFsFRN6S46WDy1jwmFHV3T3vBzXM979txyqcgzz3icVdivRwmeE7rhayBsbhgfhxExRo4WAb8CZNEdzRZR",
  "key13": "SkJFkZTacD9mUymbhRubxDPdQsquNKdw8Z11vVtNwgqQZ42uhzwscEBADwg5MRck2idjKU1Pu3uCAXbFNKEQJB6",
  "key14": "61mLMXV1XESRvvFg8uASx1oF5fB3x5QkvQE87MAiRs2VSso8GN2pVS884VRtR6XyC8BhgU1p15QcsztTXbcdDuUp",
  "key15": "fcww5W3kLFPknLauBcU8hwhGicuvKP5i4vZ4kaEzeayWQAoMz5enLqEjmva21XYiWxffqnVxgNEZnZeSNbyq3Sy",
  "key16": "5KFMvxFybx21EjtXo1LYNNBq8ErBzMDZHkSScEVU9VhgUgFiu7ez8Ru8HLnrMJ8dzwYzUWpXduX6kq5pimGR6ycp",
  "key17": "PCgUBw9bgSVUKmRadWgkzdYBwixaD26vhLRJhbkHfES9fzfBnUk9s1L9bvcvU1a8TAHzCBMFai9e7sRb8Q3LzVX",
  "key18": "2N5JxVotctXhnXhiXHX89dYd3AmiYtUdQPRh8vXdyR8GNj1967T4BvkGj7eaNjKW1UnUPmBqqiKDLb56fkc1b91r",
  "key19": "5oAdhyi6uueNpjiWhTtUXzXGWvgJRf7VG7WUphYvDB1wrvFqFEghPabhcRV9rczh3M4tGrqPF2umD92H1chqiGeN",
  "key20": "3x8a3izPBcUcVp8UFJsfexVSPD3eZMq7gTm1ccqVdY8YfYdHsqGk97xh7fVCgUbDYJzq6qwXpk7yhBbBCMoXthyB",
  "key21": "59ENuC2ABGepBaLgDvYdKfuQoKGLhz39HPwnpCgu7gs52xQVkdXkASVX685rZF7ZGbeYnmZBBRnsqFW7bQygBTqx",
  "key22": "X6awudQKYYy6eybnTZvVatSupR9JpvQ12HD73da6MUaiUTHrX9Pztocp7CP4UzAw98qgazXJG4vHPmxmpKvZEJi",
  "key23": "3Pf1G7q5gwJeiq36TdzjkhoinemizyUbBr3xi5hi6ZzNHBZ5mf3VThKdCdgzScJk6D2P95kWmER8WpUP7pBQfZq3",
  "key24": "45LwXYFdc9AxqiCZFvJ4fLGep62aqQbjth2EQrtMVThdntqrq2Zb6dPgRCxQcd98LXvF5oueiWTsBmU8FgADZvcL",
  "key25": "4XvE5EnexQJv3cyn8fE1dyWCnH4V6eRhTFvo5iBAVnLjnJXJMtGtMjvPLt2gdFJUAHEtJkhgzXbrzPRjHC2dhE6Q",
  "key26": "28JAr5hBTnpKFao4U1jEtrz7Uy2AcEefGnfk3XVyRHSWbeKArKZ9gPfX8ho4f44gTDGPLSBRVxgS7PvmKYNffv3Y",
  "key27": "2F2Y8KH1yfgbZeP8UVrQsMKmEHBWNe4aMtoHocASqYCB9kt9zHnJ7FJXvxzKvPtPSW1dgQWa1mxp1zSFgz6rXie8",
  "key28": "2DoiGteeZXRYzNCfYqvdM6u3XHyftkFeps9qkLSsS5sbPK661t32SryNgtEYE3KNLNi8ky3uQkRcKP7yvtBdQSpy",
  "key29": "5Lw27jBLkmXGESCFx5c5SkgCr21o6R5LnviJdxz8eRo2wMStSeypftmytPfmtJ924SnQbiB2uNJMpt75qavY4NDV",
  "key30": "2boFSAHZrDu9f2tR9XBjYSh5Xcj7UUCBSYZFZN8ZLz92tiVFkJbEV7BiBEnWpDecP1Pj6ehbaLZfgcASx29su4VM",
  "key31": "e9qJwXVdsadLXCWVSdj6fXEZLya7ivv65jkm9WNeHFkYSj8dfSZ2KWHkWTGUBMfdwgVM7ck4cdQEiWyjufoLbL3",
  "key32": "5ceYSjKZRVPEqr1gEqzTr38v3h2UeY5UEFuBKb9sJeezNcLaoEE2k8bqsoEV855kUxaTmHkR24BFnSmKYTsjn8Vw",
  "key33": "57sWEHACD5ukY1quLvdnK2P6E4cXkzs3RT7yaE6QeDYGu7Ai7Y1YxKNPSk5rsoDUQvy3ud9rCqP1yQvZZdStij4Y",
  "key34": "5rkZeLHD5UjNC5yrhnVBMhMr7h7NBLgfCYD9mmQNZn2apZB9MmrXuKGwNu61swMHBYXqaiXFsLMDNwPx8gjfZkv5",
  "key35": "4JN4hhP6a3MPqQM7DDYP6ikqyZ5GusUzRQfHuG49vNiuxckHTXye6nmNkGfA9V5rmutySAKU8XoJvmii7ar8yaBE",
  "key36": "4sAPWe2ynedyxpJ3ZmXe7PFBbpfbHfQ63PHFZbmkttt8BXtRGJYanmEJrezQjBeBxpg3S1bwXNtiYZ1N2iaH3ncX",
  "key37": "5Cm42yJhJwjMi83XBEtr3Gq7Q1cqL5R4gSkN2uJoRmfU9MZU7bdvhWHGHKn1YXJmZSnUbHdbps9TZEG6eeguQnj3"
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
