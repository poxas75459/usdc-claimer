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
    "sdzRbDS7CE2AosjApo5HaLgAaU5thCTb1WTh41aFoqshzJJY9jUZFqLbpPLqL1atNNvnbEUgCsPfaKy6YvQG4ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48GwZckBnZEiXYSAh34Pz8WNzQrTV7VJKzP5poLf11jdqmqvZ2tBihnNynUBnAEZc2bQojaYwQTpwse2hX58Wz16",
  "key1": "3e8D1ajxjLy8z5x2cTpPhnNe1Njm7Z943Pmc6T6i7va1Cwgyc5PggjbqGrRaYCvNY2jybWWNtRFjqjnZD3gJqLw6",
  "key2": "5TvS5JktQ4Km5atAtZNiUAugjb1tR2ej6nG9Adk4XNLmH75M5ajZD29bKPJPbFTBsUhBKCRhemxaeuC5TkpMB5jA",
  "key3": "3cJbZqnYvJbE4YicMRoN5WenCH2yFNQV1myziUAYKL2k5WMbC8bWQtNbTZ1jFChoU6c5foGapKTWNyP4a44aonrg",
  "key4": "4iugTLRLq9bWFdUBmEbKgMzkDY9hjD5NonFGttKjQ5CGGJ8H1wXgpagcvRLQJtmxfR2DED4e8Vhcxh28LviuQ3Wn",
  "key5": "2Xrwi5XX6afPRMHCELhfatYEXcPB8WLAg9GqsJy5KxETwmEGLgAgBfcnSDFoQ38Wnaui1oDmNcEEAyKWthojyj5w",
  "key6": "3K67cNHVL5hhHtuEzWabBPoyr8Mj3udPU7SBCdEoWKaCPG8mmES7xTf8Dbhmd274oTGSSLZYqMzHPJeDXN8qXBhW",
  "key7": "5pAdTX8gZk4zdqFPZd5bgfzXFCmnwXr2tVCJZmanrAyeJzLVYJqSLt9szJoenEG8nB1YpvXqY3iN4cy5HLKCMkxY",
  "key8": "4jsm5cMz3nug5yPu7mL9g2So8nExTfEuachTpdpsaR2uo9Dfq8mGs4Cs11eWbgwJjkDXoppMs9BiJooH29tdqQR8",
  "key9": "617cVLpW8qgg85rwDTCWruF9LhahAGx2Eh8HLS78rV3KzPicjnhMSvSeNESGm5q4CdkxrZVXXxKEXbd7oFYjpC1X",
  "key10": "4HRZSWns6yKLHevgpg3pCYcjK6NmBcvLk651GjXj5ubVnJeAaG4Cu2P7cxHVEpxhLPaBTbQ2catsoPynF4YGa8T",
  "key11": "3Emh7pbVeCGpNKfxGqibEib7d93HwE6FPQrZ2XFoifDebmAnT55CSB55a3SMFCR4mYgRD82N3Futp2qkwZfonCb",
  "key12": "4PQf1ozRe7NFVJxJ8SmxN8VKJjDv9gYp5c1N2EnsBrp3ScAbsKMgZXP7m7oiXcprMFvZjY74LdoRjXtVJ6S7FZuH",
  "key13": "43X2dGuXhS1wUJEgD94ThNZqhwkM688HVBxfxWiiGxPtNGHLQtbavNDfcgazDzY5ekikarJQp4GY2g1wEj8b8cCF",
  "key14": "2X5VBY3b6pWEeqvn1SyzHTArpBJtw1yHzzZVQAs7VXdAZFCYNNwyW2JerxoNm1iPSp4YhNKhEnnVGurggqhidfBy",
  "key15": "5tNCGhWUKYeThTw33MrSSCnxTTzqzYR5MjxSpZeay7CN7f1kix4ThR7rXbAfyunRjV5Dh5dxeZj8wsRRRCtagQUY",
  "key16": "3WY4PFGKp1X5nnDQT3xjuLV1sy3wfkgEArVSUyhhVkspWY8VYtE51j4QYRrqBRF27DHCdoazpD7Tr5y6c5HXuXs3",
  "key17": "2ri1XbBQ9u5wCSvWBjFKL5jxdPP4hzbGBFpetD5xxpgroSZWoqCtn1TmUg7pteJTU7LFceEaiNbHy8PrBHTqjzpe",
  "key18": "3SGdPWqqD7TCCqQjmTEqbxZbJFPrJr2PbdGkTYLgEx4aTqmiJW5fndecx54dv3SsCoaiQRSKoGLmC6K5bynxBGcq",
  "key19": "4t6mBdQFNFUsH7SUp2UvJHsuRVN32jAKCmBNttCK3xzg6hDc8c9LsiGyQ9uFwpUCxwadncQN8VuA63woVYqcRJRR",
  "key20": "45wCWVb5SjWhdkZKtmYEVQfM4BBBLpu2RJSXrZahv49PTprJmR6DX2QByaYMFkhRqg7LyqdVj2HHf9jNy8jJWfRg",
  "key21": "4nepo8zwmgPDb9xqV37ebUQMk7K44pvJ3khA9HqtT9FbLgipNEiRYtvp81cBBMYgQgrjd5PduaG4c6oGfWtEQfWk",
  "key22": "3PPTYABt3qBV1cjUsDuwdrCbdfmsEeLTYb24MuwgJCpaRUUMdah2xp7kYxhPGHmHyycz1LjSfXxo7E9B9hvqPcM",
  "key23": "3wVoTYM38LPQe1LhAgTo15HNCaBMo1yfPmy86iogQGQVH8PwewXooJ4n881YkmLRSxVCvYDcbZiqncH5wy5bLRc7",
  "key24": "5ppeJ718CJ2E5QRuv8THMzv4dpUuuEubq7J3mZZNf2p9tSsrWBFPbGMeyUbY2uTRjUwpKLg3956nva5EwZW2GPt5",
  "key25": "4iSv5tGY8uvRvwHBFc1dxYASDtmZYFbYkXqReNY3kM3JUgqXhRHeEe5KHDgPPJK8Ao8NjvQsCVar3hrQSC6RsX56",
  "key26": "3RxMWnurwAMMwKA3eefXa1MF52qhr2b7uwyx8bJBcfNhk1Kt8PCjgQC1CiGnuUrsKrTGcbJ2oMH1zA1NjDV3qvFc",
  "key27": "4EGku5xYpL6BXgTupFiKmumvDTQsmbjwXpERR7uwfk8w6b2m97AABp7GLMkWjE5JLToWqNZaXfxhDdqrnCYqiP3R",
  "key28": "47ZkhGquADtLpaoRFhPWxvfxPDvR2qNdLRc3NAggiCRvn4EXW1XcYGXgqgTx1n8Ni2jqkRwjYtNBceErvN21WjfS",
  "key29": "2ViwmnqR47ceZcBwxtUth4ZaskbQXDiM4t8p6sQu6Z4PmqkjqfHNECQbLkwDALFGbVn33JUWjNjN2p1VuQDLECQE",
  "key30": "49LT3rzu2MTxjT7p3gDcjhx3V6fnb17rYars1pCsrzZ3SnooF4moNdsZ2jBrDPD8BoafLcurrrLWFvqgoXQfkpQn",
  "key31": "AXr5UgrHTXHkyJaMni4JUF158D98Jyxs9ds7G8U3NcZoEJMcnk2kfAPoGQkms3yoNSKaShYRP2EQcQmUQ7N4rjv",
  "key32": "2gu3p2hVbT9vNXocDLkuVVPvwQFfUFk1isQn8fJD5FuKmtULgwd2NVrbsMmJHocQZFEsYXaKFMo3jfCw1Jmrgajm",
  "key33": "Ehw8e9rugphqFWV1m2gSBju22u1hCNdacH3HnufiZW7gqF6L24m7rs1SHHazYkUTfJGb5VwQbK61EqQ3AJsfLVP",
  "key34": "4zNmWn8sjJ8ZYjUsrscuWsfuedZkHzX5iTpeDwbbzB2mSqxPquUiicHtPgfUhrmoyeTjkTCgAVxps6D1AJLhr9zn",
  "key35": "5QRVYENcU4KSpdmkMA4wG6Fc22PpUf1pL6pTbMHxXEuBHVHGDUniEtBP3g5tyUFxLwFcQgah7vmdhv2QkwvWpTiV"
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
