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
    "568H6N9JiM6Z3uyqyJP1v2errDBcCLFVimgHsHa8RtTzaTSxPDmz3gyzdFrnqtZtbiLCq89ZNoZgCHTpgBz79rYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56qFf7RTvR8VYP2oeHE6JPmUmBLdZQboLYETZZ4XFA6Rd4x3U5xsLt9wcvqHax8wufvARbdU1GjLnUxA4ogKXywS",
  "key1": "yUeYNoAyaDGAj2byPpN7JfoxMH46qvw5gEbZPbpCpbhSG7nc49pVd1UJeZayFsCcf94xorYgoqP9uG1vSzpzmjY",
  "key2": "27mLmhVHPLTM7BmVH2x84u6ZsgjZmcQ3DYs9HbFsWPSN7gnv4YzVW72MBqGcg49ECUXgXWDZmoXkC3Us73rfH3aW",
  "key3": "4jN5Svva5TVjVwtF79vTfz4Zzhk5QPQTW56eExP1hL7zn1TgGcYRP7tyimYk1hJQsWKGJzQod2zVUMtvVJfW72Cn",
  "key4": "4HhwA5GdY1jMN3AKrTG15krPWN8QP8cWqZfapigesVmVyjQeei699dP5mwPvScfKEdcnSyLoxA4J5s23J2JpBrk3",
  "key5": "AQ1Ay4QUuvBSCA2MATuSEtg6DR1ESXcEMrDPjP2S7NBLATKkQBM4vQJe9Lc6Y8ZmY74wcx2Nmrxx6zuyavX9XrD",
  "key6": "2XW2gyFi3bE6PUvuwregzsSDcEeRsGD8QyheNbAerGv5u3tERmfR9JYsLwgkfCNvpGoHCKoC35BhifWNKFk3MPTV",
  "key7": "5wNy6YTSNBkPf8fkAH7gW5yZznzkT9GjEvSfYHQDzYqFNsgjvMJxgXsjCkRpU2NVZ8heaxj5Yp7jtibM1u6kHiW6",
  "key8": "o4XrqmLNdMWHztnEGzvjmPWXK2j3FivZPdaiifSir3qqBQURZJarLWJ1fMJx73BB3UXMcLtVJEn4JBGwEU8ptrN",
  "key9": "5dxvUwwvbwQV1uRDAPGYttMGFyhKzxor89csHATCKVKgTkT44f9xvMAbuTn1vC1b7WGrDxBkk3DtPBqoubm7SwN1",
  "key10": "FmqtJuWcniKnVVmNZckMZEa1SkJzMqXWhHat1tQM4XW8shWwBzuHiwCyNbmF9cXQEWqZ9h7RF4R4jAaaVYve3LU",
  "key11": "5mVz7dDMHjuc4A6tECzJDD6sbUEj8Wot6u7UrDMve7mVk6WEoE5Lqhdi7EYcKWQikE3AkKgY6d4rs32yQVr4qk68",
  "key12": "4fXvjDqCM8nPVoFahU49pRHoi5s9tPEi3uyLnQUUvFBSE6MDmM37Ny3yeCebPBUJDdrKE19QMYr5q3hoW8LQvPqH",
  "key13": "2Yg9N7DvFRZGiwAR8o1rjnCe5FRnzFhqNWhteT8imKDcoHmRPcCgUyertjC3QEcriVRPQUuriXpVSFQimEgQhr2h",
  "key14": "325aHWAKsZt78gqdYBQLpUxgjxT2HAMxp6cBP3kHMi19i8WrFbQbxdpLvB2FbvF5heaoTAcx7Uq878U8Wy1kTPDo",
  "key15": "25mtJgwQo9kGX5ppEyGMh2mobMDS7ahPowGCZJSDD7RQHbJP2FLMKbekRLGxLTtjKUrmhLyzkiKFw8NRmTCBrxna",
  "key16": "3vbeaZyszc95VfjTxrAdUNV2jt7R3f3D9J1HNXmYrutQVaxFbFFy7FAJSjhWkLCQLJtmcPKVXQ3UAAb2PiKLBPTF",
  "key17": "2ZswV4uYLRQpKe9dyRouB57xu4HpZPDan6o4SwMc1Kckqn1Zns4MmnaBKvVoGj42DwPjZb4WXs4iYvjySEZxTs3i",
  "key18": "9JWzRBCwtsh7rM4rxn2XYpqMfVx9MKj83F3ALiWvGeuh3gA32Dunuucnj1HqHaUR1b7AjaT2p2vLjpnf1PQ5CcV",
  "key19": "K1iFNKFRZC8wW3aXAeYAUNEKg1B643bpePgzast5i3GQCMPLYpbgFzaz5zafMdeaJoHV4EMYj2NPzrgS3GVkk4r",
  "key20": "58nEcrKQeDC8XCNk1WBzrnNwL7rJQTVPBHucbJ6sqiUrcvzAAejQzWsBjRTf25EcSyWM2kdPRuBvGr9ex6aBqbNH",
  "key21": "2Yqzinsw6SEwCmN6Ao3gjW7gMLpnRqMfD25c1fgeirVtzhnpQVKPWWMf38N2cfbiqLxTVBcKb85tx1iGydeuXfZx",
  "key22": "2pi1wS6CrApC5XjJXVLWimBbGJUh19k4kBVNGPzj6fWwKXWq6E5VyuU83HtU1EdhFZ28fhF5viq2Bba5FX26CY44",
  "key23": "3rFyrzB1fqSL3JXfXUBjjDVgryYnFS4DmzgDshqzssyygTo94xji3cVQDZyarjQV8TMg8WzoGRj7vvEEQBdaQ1ct",
  "key24": "3H5JSknzfx32na42HP7AyPQjZCUCd13WSNc8FP3b4MXEmonKEn7mSYEua91QutoqKgF7XhBmyBVi39G4nY8tvwYX",
  "key25": "2fKZLXJuNqAx9aKGsscqb7dFzFg8Yt7KoZdLatijY8zizbk31F6nZmQzCSwdRsoiDYSZ74sHWwgmkvpFGu3kPUwp",
  "key26": "2cUwC5gus9NKejXxcDBja91MgY3FjyfMfX6vfwdQAG6P8TCHUvvMqFAwW1StGGqaAcdWyb4zSRKaPUmzSFUQwSqB",
  "key27": "3BZ2RK4LjsbZRWZCnxXCUVRtSUtEAXhU8HHJ6a3BsuqgfKFRQrQ1sK4cNCTTkRPbE2ffw8VKMeYmXhMkZ445GbfP",
  "key28": "4L1bQBrsnH3DPyaiMqupAmDEhDSDRGMuXZrpoHahFBZKQ3NhQdm5aTKhucxRFkg3fxShzKsE9ie2z3w8mYdF5YDf",
  "key29": "KVtjjQ7ZG4HrVBfTYjJYgkGGzvJyJp7hFCJRoP3wt9fhy4FNcGvkmhV2kWVGF344citRGVqoa5HrTa1Az38ax7s",
  "key30": "2bw3KXFdQntNG3PSR3i1ubRP2v9y6s6qZSgtZGxCYcHQa5G5iRMzWAKsGhz1GK2LtBYCEYF7ANBAMZNsrzqJu6hc",
  "key31": "5gSssJktLDzhRMiaQMjuqQqiAm5EVkSmWTCBx7MxANsMjpW6R8vkQRDDCSg9YRYJc4dsXW3vS5b2pbDyvVWDZmRK",
  "key32": "3BEsNvKmB629Xi1sTLjLBpz4p65r4A5yymd7pP7K6WWhpK51CNWZGCDgUMHVpDUvdd19cqx5K16q22gRMFmmxKNZ",
  "key33": "281uejbbSGD1CgCaedWgSKUjXmXv59hg78u4d34GTaijBkWYCJ4sji7YNxtw28VfRGgd2cxugozZFTQyQZmnk4f7",
  "key34": "4eNaE2KSdSB6FVSJSKBLSn2BbRwwj53SVKy5UmcJVXwJ7o11Fg8ymd6nz2tnUPCTHs82caBR76jtSATViLBYnZkQ",
  "key35": "2ZX4CK9xaYpkjTFa5z4R32uVw6jQ7dTWJm1hVFm7DNu9vRvJFnDRiUBysuvhfRe1XYyEcx4Wdu6ExaSvP5m7Nr3A",
  "key36": "3fTyvxtgiY4xErCwLHXDBttwwKMmLMUPUnX5r4nvdQRxacfPHLdZzovZAsHqeae9bxHGysRum121hpFYvSntiA9K",
  "key37": "hGNr1wzh4uZoFPPD5QqQ6nWaJcMygM4UWMorT7H46PrYCL9eaA7XYu4YiXdbzeRJg9E2d4mSLcgf7dmuSdd5FKF"
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
