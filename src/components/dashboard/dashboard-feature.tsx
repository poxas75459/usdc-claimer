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
    "4TdFU4FZzYmEe9VjxZ8nHGDmAs8zz7G17usE2NpuqjFrLEdCnZexUTBy3CoTTAxdyVuEKDtjfGDEv1wMrdiJiCh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nu7cJVSt5WQ4qd6kqba4qpi9K4G8xkLCLfKZTgNiC94tkEbL2hPx2qQjqNvYAMkAiFsaPYwZssK4tsDhvWVGgwo",
  "key1": "47GXaW6q4Tbn3PUfjF1vEx3RUDmodXsMKsA4gndpWJNZWpztsjtbgdiN4y8SCUbB3sB8nnEXhXbVe5mNNaEdANiT",
  "key2": "2tk84EaNLraS47UwVrWbpDVTL7eYBH4rTjD5T5cdE1sA1tR83pCnoptgiWvipKeQz3j5hvumtUFcnfB3MLXoMP8Q",
  "key3": "2ymNrx2W9TGJt125RGyBaM2KHGnHmDR8jt73gSfBGy38u1bHDULJEz7BSaYnkKdjH4bS3YGDHUYBM6jmRofAcw66",
  "key4": "5wk2BubURaLSUvpefxfcyFNRjyikS3FJXUwQEz7VPpQuHDoUZYg8eCPAY6BrMBWJnz8xBZyxcFjGLAMiErbTq8Nn",
  "key5": "5SduGYLXRRJ6M18D18h5mPioS6od4hwMx2JgqRo6LQqbHkTF1FmDjBmuBoD9ZZmJeucYXL9ruCs3rmhAWU247wp8",
  "key6": "4uZ3LELK31Vm5A9WWFXsVYHoxt4hyyFpASNCnAwMcJoBkaZzfub3tSvZ3FGDt4Zqh3P4tBC4bHVtvmk9B9tySRiz",
  "key7": "4aX9ALb1uALn4358wMKutnTgnXn2sCtBVa62L8DkXdFGDPDtdf2So3UH7gtfrBMn3LLFtiER63jqYmNDVeMML4rk",
  "key8": "3rqcQKkPVyAjsj7mAajEbYGEkBux7E6ZADGochcT1cjFzmzKNadEchD575Krt4LxLHjFWVAQQmRjqijstHCP2TQv",
  "key9": "3t7A3YyPTkJV1upnxJKBAPSM5Ju1sRtcYW6qoMnRFtGGGJ4PUnAKSwZF3Zjt7v3qabSix4e7naDMS2ShjCfW6x35",
  "key10": "2cNLLtcLBt7tgyBsjCWArHYLfGddwRFeUJQeAKCLh5ee52XztmBjYMraU7Mia7Aqt4dCxFSrs4c7NxvYNGkA6rzX",
  "key11": "iHwMXmbxV7H1dpai47HReKoc5ez8Znwu4HPzzESf5etGtZXZ5p655NbWPXuxF5vayYcSFmg6J64oZZFEx1cMV1F",
  "key12": "3SWmZaBasx5mVZk7dmnYnD5ugaq6ATQHzsWNdZWXY5DYE6jM68f9dot1yfQn3T6Wk8dzQNXJWCnmsFaFzF2dbp2x",
  "key13": "dPiuCf8MM3UeUoGDs12q1JAcJY3NWejVbLtkWBL1bDq6CFZV1gDGigZt4vr6zZCuFr95dt3rPTc32cbxbAsuNzb",
  "key14": "5ctuaAe7uw8WzKERujaN1xUsWV6T7WrJuQfzV1JmMsj4akuxZdRcBotaomdhbB1VMaUNuEAEwzxzhGEAj28TR1Pc",
  "key15": "66gqtpgMWkhaNh73ynJT6hxKbESWrMzjzckqSHZsN8QvBsJFBnv1MtsQWvn8MHDWWFFNn3FEoAzfJKveWj49SFQs",
  "key16": "2KRHxpPdh1wfn4JrRxWo1ucFbxZocdL8TA5MLUZcFNdy3Zgh3cbpLZDZ8dwB4xrCbU6y7Z4sXaivzZoJveFRAMy1",
  "key17": "7wy2bnowKpgjoUs2ru5tVUDzaD9J3ZeHnWVsK7vo38giYX4fV2ssgU5SZuSp5SbTWZNntKbA5vuZbWzUwAPqoZS",
  "key18": "5Z19KkVmG3i9jaSNXhgvQWQV2sWL3cHbvWVaiJoUbQRE9BmoUyQdWrZjoRnDq8rvLG4b8XB1yPv3BTCeooiATEuW",
  "key19": "kmbb4Y2aJ93opX7DKViuV1F7Y198eQChhRwVzLTxq4AzcW9ULDrxCWppvZWaMdiQQafJPE6yafuFzgCxewWxWmv",
  "key20": "253nf1a4udXJjYWRcjDhJkA3BtdH6kMcn1sKGFL8uB3r2PdnQuTqngNhMdzy7yBtpUyjTN51dYJA9moMJLN8rYhq",
  "key21": "cJDzKcNBJerSVt6dyB9DtCqucPA7iLPFeEEwJ2SEnp7kzcQJiXWwPmM9HQpEjbV1iKkK668xoxaRWBq6jhcbduf",
  "key22": "5H9hfa9ZhhyhmUBfUV8En7LrwKKf7yK3xtp8kDH7z8L7xM7cxGZGCwaTfeaVCnvG6hmDK7C6Zn5FWs6xA3rWtaNL",
  "key23": "2ty84HSSjHZ4MQFDGsMGGPHFq7gtE7dwuX4YXXgknNewHUACNjk5ZXDPXrhdrhEFcEdN2byU4b8myGdCY2ejDDGt",
  "key24": "3wgqpWEqKXwNeMWg72jayuXqZTk3s3wpAAVoN4R9GPPXN9cYuBBmmiBkKd9ZPajchjBCXV23LgCxhiAjdvrNFCsh",
  "key25": "4wT1RGtLogwCALhU1SYjJcumyBdYc5abqhPS1yJ61WNFn34NVRtN6b8GNLtqM79BnCxp7qM9dHuqEHu3fCH47yVg",
  "key26": "5EtD572dGFvbfjYXhbztnXm6rLDeFJJbcD9sc2QawPPhji3kWQkEEtBNwvv5SPZDmCvyBFauhiriPBzEg7Pn9DyG",
  "key27": "Dwb759awiWbNfRPAwTsdgtK6SubuU2gkWbwyTKW3C3LENzjtCpjy2xG3ueFZrCdEPwz2KNfw7nBMhNGkguCLLNU",
  "key28": "2WtQN7WzJDooECAKjTQapsxjdW8y1m45w2VAuVm3zZXaVGwH9yAi5KHtY31vPPaxwprgKurKgaudxhnDaedJz97c",
  "key29": "AUoPDfu4mtKLvkKkHQPqcSrxqFWMuDMSGSBHz56kmh7DhyJLeBocdqXv23kqTEDJHAT1aCKPi8ReyanhqX3YrWs",
  "key30": "4a749m1jDjsrzJMnxpj7bcDpoHeMb6UCzshNhcdKw2eFmwts1dw87mKs8F7i4gzx4wfF8kFSMMupc9SWvKnpjKv4",
  "key31": "3oMFtp8ZvXGbYEaxN2tiMmExVgarawocJ9Bve1qcmpZHdV3Et9LC7J7PfdDaHeTzFYGi9sYUvM5cqnac1tV6RsWN",
  "key32": "1cG43Yam9yL3cS3nQ4pxv2CKd3cbFUbddnRJkpmfGVFu7rEn29oVDuUEM5gbkPVgyhQu5YBnq8nP8hixjMXJPgx",
  "key33": "5VfaZeoxn7Ue5EmBiMRaF1KKe1ptNfj6gVN1fHwrzr9YgtJchjn1nxu1a7BsHfiPQAZvHfWnk5Ysjt2im1QKyEps",
  "key34": "2VA2oCQADJpRViAmWEobdAE4Cpdne5G7hdpyMgazuWxzRAzdUXcPFwSGcRvgs4DXTUtX2PM5BABhGJNJ57fEeVkH",
  "key35": "3n5jtYjt65b5ByniYNNXY43ZTdkB1SV2Yz5v6vcnvWiyiqDHiNP7KUFBfUDS7Bk9zrRQZu8ZEeEHSqJ8WeWtGiUe",
  "key36": "4KWw7BKsXg5oMBeZuKMAEVv4ntFyFGw3CnqatDypujnnsZWmaxz1iqU1CVVW86Yb9FZdM1vz6HaHbcvyY4Y61tBr",
  "key37": "25xvAnhhkkwaSDbzvQ9G2j4XPP66Qc5JqxXdtxPf4qejzUGm5iVa2PgUCRHJL8XzJj37kW5yztFQNh1JEoG3UZA8",
  "key38": "3ty6mafKgERXuUdiS3A6SSjuAmbgGioCrCic6n6tN4ZPyJekyjYU1Z7Lv9Vz9Z1Ce41tQUwJovLHHbHrk884yywM",
  "key39": "5QG8AyNVsWbcXSXDdWLMY5iXynSwNKYPAyJrC8sgHDRT86Sshmk6CR5bLTirk79kF9mhNX22GJwCpLzBNQww8FpP",
  "key40": "44K1KRs1oPFAH8aXepxNn4QkAWYBHqng9BCwbjDKy5DKyFMPXcF5FrRYNU5UirZdVZ3fsjGfXhu1CpoSHV8JCaFN",
  "key41": "5p7HkZiikg5AmGAEiJcvF6LNYDpE9urN3Kz5r1DPrcsHE8H5kwrzr5g3YoQEsuVansAdimwNht6ji5aJJKXu9ydM",
  "key42": "2vJ2AFNgmDS4yMUaUHAXnmuqB2f1PnodHYJEt3XnqNQKNSV5NqBYf4CcTLx38d1pfQjNsHkRsRqWtq2wEPNifJnD",
  "key43": "3rdwmbnoVcjnR38gJQZgx81PW2bujm7ZNfRYb7ACdQXBrpY2HGL2LTYG3cSo2r9TLHVK18e5cGrAAJpTYQZj35cj",
  "key44": "4NNAXKQ5GiJ8YsfbKHbY1cikikqFBb6vsmW4Hip2rVxTPSU42VX8ycoDJZSwgJ7Lm77fpANgyZMwLcQxYWuweJ8X",
  "key45": "2vNTHkDc8zi3RKq6XkK221xR3iKtZSEws8EH48dyuEKbLtXCqwTRxCL97ezVjx5rjK1ydaR3Yre91y9aQeuAo7rT",
  "key46": "PVkZsqGmSDuQZSW6X49EPVwWk73i4YRLSs7vw1VVw7WYWBkjPyvyHC2ps4Vfc7GgXRyLxEepxnDEVvknc2mT5qQ"
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
