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
    "5gE59Ho8CHHdS3zEfiZ9vT6KHTEiV2KzR9i1zfTBS1EVNoZnSe4fD2TwtJ4dx26PzjyeAHTGabsYzA5FnVtCUZk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WEWURDN5BCRdtKcguYGPSAUnkPeae43vLrRVwzv6Z4bg2HmnLZvpsZQYEbEH6TuBNXVHvq8wNXWofvu7skTimSg",
  "key1": "ihYgHk7bojeXYjkjE1gSXxkof1GQZxLCB9vhjJ4CLKvTtSy9XSXGQAWvN9eiCMXxHE7Div21ezUtqg8wSWP78Ub",
  "key2": "4tTiamKY9BeofWaR8cBhbJFaeH9wsaTvc9KyUkzTLCdwn9cp4fb7oz4P17oHaj3pmmTy3by8ypeuK35mrW8u1mSB",
  "key3": "2AF6yqYJHr8mJHoADF5SZ6diNadUPzQGSzmTJHEKsevGzcXFZcBbXNoS46i5eocptqmLXf1EC1Rg8LbRYiuGe7Am",
  "key4": "4SYwhvTE1HGmikEd5PV9GK8rz8CoNBy2hFrCEKDHnFMLwpg8tbDcwM1jH487ixGKcdd48vu1u2nxxxAm9b6HiVw2",
  "key5": "3y5ECtjo6VMD8STWpgWYTk1jhHk1FWuQZsXCxo29KBZwSuJKcxNY6iZVR9CWoayk9exFbmbPQYWS22YNNdWkReMo",
  "key6": "fy6KtEgoUb37StRix3TRrYNhM89Vx3PGG5E4updSnvs6kN6KhYHwnGAmijcE2qYZEck7En1aqzLFLM5imiZswcW",
  "key7": "5bpLNeot2hD76kycXaqyH4X6qFs1eQJEwuTBo6mpKjxZX9dF9HgxHR7WyQGFJgt9SNWfqKdpKWRXh1oVP5uYEjWU",
  "key8": "5jPiBfPS1BeVXTrua3a1q4yFdyHKBnKVokHPB866iWqfBqRvn6MeCTJ6o8FdKajqbGvUJ2chup6q46QXrFG3gDSn",
  "key9": "56FdiQnJtWPEt79WAUbKaBgWjQ8573Y7mYRK3x4H37Q8eiY3dtKiRoo638z7o4Y6idHggZTmYp399Qa9GcUfgVgq",
  "key10": "3Y9xjQJAqcoWTkkZMRGphiwmBb3SA7DktZ6R76nuGP5FYqpNVmUZ5voG3thef8TJVNnzmWQkXTbgkDp6c8hWk1ni",
  "key11": "c3akQbXLAM6ujKJsqh1erhpExMjtGcyGDBeRF7z2VRQCvF7nJdL6kWtjP4oTcWpaTKeoQUMdqd4wKULs74nQ2FU",
  "key12": "4cdtKExDQWKTcAgpM3EnvHTfhL8H7h3rgWdNAwvpeJxTdamLd4Xzrr75YtcEaF2M3VQYsD26cVYAiQfhoyXeaFxo",
  "key13": "5Qa9tYu8PnHvPcwrdJijUV1Pe6q1UykFodFyjhKA7EjyC3jEjfgmyQwJWCgJ26S6zywrDtP7Souti1KQz5vM8bG7",
  "key14": "DsiKMyAYxWXMDsRQbypngo1AntwdBet6At8Kv1jKWkySt1VHcaVjJLRarSZYpkX1YVMbHbsmkABjp3W9VBoGp5o",
  "key15": "3bv6xXAKbcN7xbwbPKSt7pm8LoQ7eA1d8eXiCfxMbVHvU4UtJitVX1hFG7shgpCR9nLLrufmZjmKaKsytrwFAhmg",
  "key16": "45yBscacyUUK3CQdXCamKVs3cFs9WLypS93Af4KLqfkT57Cog7HBhxkeE1gfyDoxPV1hHwsPePzrWS7oR4YF4egd",
  "key17": "2pKhmV2pxqNFxsXFZjUo7pys6ZkHRWy342mvWBruPDXf5gfKf72AqpjGnDjJBs2cysPo7vsafWz8MuWZ1z3jSY76",
  "key18": "K22aCmtMpbbU9sqcrTMig9BgJFSkj4GXY4EQBmDLGqy1mfQRLaLQqfi9YoJjFMc1WJktg1YRhYeat4iazdzdwX1",
  "key19": "5PVTiYWkemt5dMr1PWTch9uNqAG4mW3bnyz1oBJbBh9KcQiB9ZuNMHgfxxjFH84UoyvtxvBhztPBTMthjSqYQ2py",
  "key20": "VakvN88Kdt2aVmbvFAKYeSpnR1ci2ABh7HZjNCe5WkBqwo4zMzRZN47ZjshZsbwiJcZprAAeNDTxcrsRqBbHmFz",
  "key21": "4An3BnX7mk5HxpWK1kKHsGDjpKM4R6N5cKgQmbjX5n9knGVKFjBXQQ4jMRUhVCVz76UYs5H5W19QPxxaT3Edytf1",
  "key22": "Ejk5V993Bwji9y5rg6AH4KSKexL9jPrFEBKNW9Vx3HfscX64rgGJUq414VPKfcxekWuE9393wn1ZLXYnebMA7hb",
  "key23": "64HtSAxf3qGHR9jUhesRwTtHfJv14oduLg9hDeACMhyEmTHDKGDNKzDGn1tiPpC65AWBstxRAMKrEivA4H7nr5r7",
  "key24": "ttJoHLvYxjLkVH1rA62NdrzcMLpdWhSFrw9nh32EB3GuoWYHhLxeMDzS7nxcZ8zRyYhs7YhVvjyUsghFNCu6pEA",
  "key25": "5pxjBaxY5HkiAuY3nD13wUSxYCT9oz1r26Bry54X3G7rJAUoyZcCH8hXTajyhzNznEUTSKYK5jXneo854K7BoJDF",
  "key26": "u2oN8J3r3AGig1oS6A646TEYNtT4ogJdUCzAHvbbeD54iKRB1Q2UAYNAv3EogeAyWDuXv7ptBw1nT5pMb8NR15h",
  "key27": "62CRUFBkYdvpi8sWkpNtYw8PHSXKJis2kjcXe3moYYZNfadBjPJsuvYphQxRpq54Yvy1GcW5b2RWekwthYUm2Cj8",
  "key28": "2oSYQVSenMpMHHy2jKHit238wNDnHqvShi5kgE2C8r1aASHnL7xkMfFWdiwiuA4fg8Dqtwwue6kKhWr5Y8sExCeL",
  "key29": "5EUzCyjveAWLuKD7VpJ9CV2bGWHr9473aydMRJhJA62CzWPp91ZVHJRad268y1Fk6mu7Fdx6qagDPZ3SfiSiEeHp",
  "key30": "ULWMjWp37uVgfSo4k97djggj2j4GzvidhiUghttFNtic5z19nVwZwWh4DgMuZjCXJwG57SAWDmXZazsGSWaQyke",
  "key31": "4Ha3nwfLJVYsb6vxW8WSaPZqXqnHh45J5sLqfo5BgGNDUWjsvZ4Ur9SDikGoDhfmJk6XmbbzuyBXzuLJa17YrVDB",
  "key32": "2TqSTnmwRCQym93p3u6fgmQXPpAzMDk2qdPyysFP5G8jRo61xPyqkop4AzCZgevr5HnTqfdUu2FZfGUB6j6q3L5C",
  "key33": "3igzqRcX5SvnaXnN7NLLig5PuuAsAEzN2BFSuFDd6vqFbzT2ZU1ZWhnoyMQg5oa9mmvQvLR45rYVwfKZwJEXX7rU",
  "key34": "5bgTYGMo3VHCmAS96tmAtMFXboKZeifRcV6akTZT531SNB1YariC2rgFC7HJUuBtXjBvD2MzP33Nu9sTKkR8BraM",
  "key35": "5QFpYkj4owMGkgZkejKMwjK6emhgG7PXg8DW2C6kn6m6ZvG4gmPurPcwGyk2vrCfYyArcULgTKo76cndBYxjL4rX",
  "key36": "4uk2t1wCCZVW7TqszrRR8sJbKiDboacF9koSZ8WU6i1KVa7H5T2XWA2k1kKK6ogDEQHa5jtamv8JzJ1Ac1M1NFQJ",
  "key37": "5YfLTVLSXCRcptm8Ljttsqvm2RvmTSzTtwuQmkTdQXgDHtosjFREDhhJD135uwb1CGaTxx3YytDRSTxNPeDCLAHj",
  "key38": "3wUUqwzovKMo8SvrYmTkpwJc7WrdRS7GtUXEFh4p5RZDtq7cPmEvMwoqFFayrS2jAMM6f6yTDqUbjXbnQSvxVpL2",
  "key39": "3YtxZq32xTHU6Vq3DqcUAdVErh9DiP5GsFPzeRsknEebMmNuFLtgBk6G4kAzR8GVSJzFxXkg8hpbqJTkSgQEjwSK"
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
