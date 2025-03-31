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
    "5yUZiC8gPhiq6QJJWdKkhDAeMMTMbuZgVSACRLPE1ocnBsb7ujz1bMf7aFrZBSxJgEdVuQnekwkbBChtVt26jCfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGdHP3M15NCFR8vo64oPGM9jKKNkkMaZrXbEvYC9Qy4udoooBU5FCZmndrABXH4RRDuACfT412S5Xg4SVwgbmvp",
  "key1": "5HvLKx2UcRNfHX7WPtNB3JPSfPVjNvY6cAUk3KPoDd3b3D7Umw1RGQ1W3wkhCqLSqxwRwpCqxhnywyFFREKDmhMP",
  "key2": "4k7PC9RJ4sWWnVJCU5z41SSMXmMiX3zfYF1738Vg2E9Y2Y5qgZVoHToTtYSwu64g8EPVCjir6ogUuvLNczjDPfT9",
  "key3": "CnhKwrcouFFBZedUVofNegDiTnrtMfzHtfhpdAMMLZ5g581yvCc4BNc7pdjzUua1aNTjbeo3R52pidNmjEdH5MW",
  "key4": "54Jbdxt2k1g9e1VVYqXURTxrHByTnUY968RJQAGv1MNtYkwZRLZzgxjENj4U53sKdevpFzM5GkoM3spKbNy4YcTE",
  "key5": "32XAkD8YxFKKQc3cbF486ZnC5xk358ZpnGDQ75L1xJ58R2SLE4ntJkaJwh9BrKDP8yG5LuVGuyERih1WEb2eeLut",
  "key6": "2XB3hDSrfd7j7NX42WjfH6wtnCB5hPag6agcB6DQTKL2L2nKbPhSBHavSgVfDkBZMn5byz5qVwi3oopbXP2TaWHA",
  "key7": "ufNt3T6AsA93qm2jMo9dyorHB177Kec7M9MTgbwuTNmvLf86e4itfCPWcUwMCm8mvuC7oKxK248fbjsKNDDa4rd",
  "key8": "5mEjiG8uoqiW59s4KHbJ3x4cU8G6pQuat8sFgEBzqbkxfMmeUiFDbB5L5QXUd1PsAPjfUbGxb3sAuHcrXcdg4reG",
  "key9": "4noHQvEBMfdJJhAcHCQQ3WoNcEVQ9sKvAutehcdg9vkPY7dkNstdL7nYcoVzADRTQMdr7HmPeveBv8MSz5Yvt3AU",
  "key10": "2XVdtJYM7tLfpnpbUa8HkNnZn8QhqFdcovQrE1iMKYegg4qhNs4crpMnLCFqUdT9qq1kiw3FDWbnN3dN5mWZbfW9",
  "key11": "2jos9dAVyx7sJbHGW1dnpQxHWp45d52kJtHxHrYq2F4eA5V9Yitjw74AgdjMvrqnP7frSeBzBA3MAHTV88Kv8Uch",
  "key12": "2JpTwtynMtCyudZiJypxhRh6494aceFZe8PoGEuNoXVPKspE71xzVMTkurScMTkTzJywnvMg3uhDVp2rwVM9n8Un",
  "key13": "29ndNPCrFwSktwFn7NosYQXGsHa98iveU1Rn9WrZjwALDEiGxyoNMaJRBF3CTckfLWXTBamXWJYvKeNK1Yoxhmvq",
  "key14": "5LAGsHVcPo7Qt76NtkNwvWLMVYgX4JXU7DaiEHhtauT1jQHH9f8gmfiMTvTBSsez9KTMZ83ab3VvMUJKY5tgRbDn",
  "key15": "4TveTjSv3GTf8DLJgJ1m32cThZEXFgUaB32zAtFwqtn8EraTERRP2RKrMKqxrMfHbvYhULsss5MAFgbGMKRLxHxp",
  "key16": "5VrVfC3YjjbJknoJYyqaRJ4ahzwMcGuVTW4gL1NWK2S3kH6b913apBvxDhHyDsiNPjjQnkQXsiaftJhZCNA4rhF9",
  "key17": "4dMumfuaLXStBu6fTe4kCUJYdpEUbZZum3doNuvjzPPxJjUcHuRfrsYhYHX73Xymw17JZ6m3RVhtjYzCnWZyv137",
  "key18": "2hBgM6YDxT9YZJuZro7RcyvNtR492ZiLVBfMifarEvRLgQQuhcboNThDUeuhiqwjmmht5QJPbiQGap2KnUsBjKC1",
  "key19": "5LopyzrdvaTqh3SVN8drBCgZXxRr4SysAF7Yhi6oBY4R7yUnXFTfCiaf3pErTJUWvekWZWFZRkQHLw2T7dJuToCp",
  "key20": "423CsshayKdu5nY8HV3DgdSK9TgdnpwBuJN1ftNiA6hdpoK25g4jwGTwFHERVVfYyQXYzUvicRvLzLktQri8bguV",
  "key21": "5cbnwVxUR5W2t7Lt9yGcwojhi74ZYukfdJK4ujWswCFyq4Qm6jG24uTshwFX8nwmD7hisXZFPxVKLZL3mWYxmWhm",
  "key22": "53MgLq5QvuSQ6JMaEVXGJ5EKN6mSQ9dzc5PD1ntivojrTtvDZRJTHA4o9DwkTo6Z8rGkTwvp4KXFWWsfHDzXAsEF",
  "key23": "4ALyfWM19hozGbtwgceU6vPLxN9ZNCvwHxKMNgRMc5Jn33ueG5SM2cDCzJ4X7pPhjxbdP1rUA8Aehb8TmuWpDfYh",
  "key24": "4c8Agec5KEyhCwPsZWFUkFQU8sFfwcqe21hYqQEeLVmy3cd8odcwUaoeSEiVTiuD3bUbCwVMJCTPcJ62dTALjtog",
  "key25": "4nU8Q6UUUxP2Ee6bXDzvC2FEvYboT1NMT2smEHMTAWJqZm7j4g35NXWHyLr2LdUGXh48bP9wTNcGGQ4ND2oYu41A",
  "key26": "5wqpP3E8izg2HxoSXZGr37VU2fTYL9b67GxAmESFqk7KuNq1z88Rx3GPKig3F3bJYRjiSuUgZP4B8yAskLJZoeFG",
  "key27": "Qd3hncncYDkGtfKZ1SD7ykMSx6HK5aPS1RX6hnAxWpESMPGTjAoMBEx9XStBRRRxWtMKMbLYeHhNDbaD89EfZ89",
  "key28": "2GWTSGrEmztHeSGF5o7urDEEeLNzj6ZA6MhqGd8dkyWHUNagyBEVVNTfYusH32WnfPXQzbrAp2gZfcYqvCcsBLFW",
  "key29": "53LigaeHhn9xJrMer6WyeiMY2kz3VTaj1ojR8tzD2HPiRG9Z22pgPVcdagzausKeDDuYQ5CBko4C9Q65D8M62ZJ6",
  "key30": "4KHpUoxqz4RwA617LHLJC7uhzM7JAEXXFDWQMrRvdz9eKc9bvPB3zezmC3zGsgoYMHMrqRcAdGVDgTgG2yZJeWph",
  "key31": "43zkSrAxGUM7RcB7GMzbvwBUuDR8Haq1oyhjKikPW8dXXsPCrsBtmqaAUcKqAAgWfTMu7xL5m3Anvc4rB6xfDdZ5",
  "key32": "3HEzVxV8ChD8c5syVZiLbvPNjWNjYNkN6xcvqEPa1aYZAqYbuk4Tg2bzUiUvRneMSDbNbot2rzJNq3r7Fuj9UnK7",
  "key33": "PmiZFBrnAem5HswPVt1HsYAgqyL3pyy2VvA6DCcJSaRicufJzUsE2V89jmVhKEVJH792Tjk7RJ2sFER6uvjEwc3",
  "key34": "36fh25Bp8R9Br1cf8cHbN9d4qdCsXHnh5U2NHcF8r73V5AQYCgUHXHpJbfc8t4zwMHeDitzvdT57ju8wRkTXDL4B",
  "key35": "4D2uDDJt3WVsjFDWGmHcGfhRMMqxGBpHe5Tpzgt3BoJd31osU2HfgKnrsAGGfoqvHaroN9bcfoxyvom9SoPjbTqA",
  "key36": "4HjSgpZm9gLP1tUCsfW9BVxZnALao5L2wTUTuQSkWnUY2jHqhbFwqpA5weSt8ZPi8ZHadh9hfyFKEH6ihABS7Eh6",
  "key37": "59GZQdKegNDFs8WFxSLb55HUztTuX3fzr84an1j8y697qzZHZUamjYJDvG2976XSzwz8bgc38MSTuk523aqm1Z6a",
  "key38": "uoNh3DEt9fhe7V5PPqNbh5C9DmKSr9sbsc1WYUCReHkMSZ8z7UU8g78ss1S3GViJ8e8B29sRVUeCatbYcWQ4KJr",
  "key39": "3CWJ6oVD6cy9N9xKzcqAk1f1RswrWLgFntEXW5SZG5Rt4cW2a4LjvfbYLk1GFjUajFbrPEWHgFohBzM2qnS5SnMB",
  "key40": "2BeCKkMKszttNbzRA9VYsCUjhJkYjKGDAe4Cb5Nf2mb79nJSrQEwsrZovTBvXN5mZFwLrgCwKMBiTk128P38hJbe",
  "key41": "4dHAy28whQfsyt4uEik3cWMPxGSNQv56k1fP5y9W2963c8tzn898Qb1uLQRvRmRgEmgeBhZdyjJDK1cCVDLCcPLt",
  "key42": "4bSx8iePGZmGC5pvwSD3LSBZNLfcTQcpDoUA3gDDsfMneTQx8cjCHUod6p6CkXyR8ARCkJmKXyQR224ygEv9zCML",
  "key43": "3PVuiADox9QkSmoDrpy4Znu4AgfTeGRwMLDJMGj3RRZLKB3kWKXcTWnst3kh3mEBthbpnTfqvRmShJWa1gMJD6aj",
  "key44": "5oceCaXPLdkZviu9XeNo2AJso6viigjf42jmJe4rFH221PVqCV4eg5YjJCBjvCBUNK9qYeSBQrha1Q6cYDjvgAA7"
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
