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
    "3FjdmZsPRWawm2Kgc58kuDvq9qFzpkrAeX3UQpeQQd6CQ4Q3rAWnXS2TQ4SKCi3Ap3C2dHzrqtaUgqhBmieQnFK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66aceKUw39mtsGW254Bzq3Qvcm9zJYugmGm6BUAszatNgs8nzCrsrA41zQmvr7mxKMnsk7tZL1ggvtpeAbd8AHdJ",
  "key1": "3EmV6PzjdvrbsQoq4tXroeEbgK6kRvSzRypqZm38K9CfAPhAWZJ1bJ7YTKEpdcfNJa8qocKdwsokpYtPtYjFqBzG",
  "key2": "49cJXKwTMJmCsq2LLU4Ur3rWkjJ75Qz3S8SBQon6yU9rRUm8kZh7WhbT72vT2UXDwPrrS1fTB86CVNm6qdNuciFg",
  "key3": "43RMs7JabQgcZ3XVFQ5FF5KihQovsUPfgYji7EhdKTprhyNcyJHJpoyhWspawFEXRUa7wzEFkZ5WeQSJWw6WvTCR",
  "key4": "LcekWYXUSTMNxHPgvpBmtby1Eca4abFfTywFHGti2MjUye14BFLzLEXSrTbCRsrKUw6Nmmp3DxGAVbDp2DgtVLR",
  "key5": "2ZPT3VbKNBWkN6rk335JUfvUMHsMRRrAtbCQy8DNh2Di3yUaAaHB4WMqyQWaAFFL2QNfZAjdFmAdzQtNYnNuNyVF",
  "key6": "2U4dC7W99L7LcTG6rJHdDGZgaotbVj1vFN4ve3ykuCBfySj5XTP6gjk9CJo7NTB1MDmPL2Z2zSNuZe17SjhfTbTy",
  "key7": "4Z8TbpMmqbAq6P8PZZ9XdaQoUY9yDxFx9YKnN3du2NLzUWHtgnhfmY1QZr5oBNPRYGgkNhWYrs6xoCbz47NptQSy",
  "key8": "3QubM7Yithi3jNoBtPUKDYNjWDtd6L2ngcBAf6gQ232XWVGAgZqXPehhoQaRbWq6ZHE53u3BiaQN7wgcLFuqxTuh",
  "key9": "2hywZBvTZvgzHwDESzv8QC9FQfAF5WtChjpboRZQGXa6eoBP1rkaGD6G4X8LnkUvz8GWS2kH1Tdhfjf5rLDLrA8A",
  "key10": "5ERMfKBk1bwh4N8YJnZ2iWrKiVxnF21ofK9vjNWTYGpkzfKVKaooHG6rQtDrKLmbdhPncGfgjddswU6dEYoN2eYn",
  "key11": "4uQNbQYZZ42bDNVLYM8NerWJdeQRJu4ypSx3RuDncVZCYhmVQ8GZoSK9BLCcsD9jfEPFwbH6sq4hWFStsozQa5C4",
  "key12": "2aaMkgSnqfgYh1s2GDDVXsYy7D9hxeGAX3r78wh7fvYFiqucfeZ4KJ5ZRYTwt1bo1QDHMpDKrYddb2gSw4yB7cvu",
  "key13": "fMSKFAxYctDMC4aMoShj2adnftaosNZKD5DvTXcb2N3rM79UoLaTuYneTC9WvTFmwcNqBJAD42E8hggk6tUQaGP",
  "key14": "i6fKreNGDVXWbYj6ffM5VPAsR2go6mKxBRmicmcXRDd9sjmGPGURm5A3erJcFJYKG6jpo9zZACdujnfPCeqZbXA",
  "key15": "2MDbafuAHzv9t68ChbxtZVvDPY4WHZRDAGZZ5sXbzomTb9uFHRRZ1nX3tCqfcJfvzzfE44MVjhYg3e2GKKfEBKTo",
  "key16": "5LYTRvN38cdc3gRcDFjVVogoJhfmQV3Mjg6QkVTWwmuPn6EmmjG8sqgcNwJLFZfWBzANL5rvut3B6gXVszEFmKfo",
  "key17": "4p2quQ2eCYr7G4PYgTv17QrFyrZr8ZkYGCQ2wMJVUtc2JpytdD1CEMU76N5Ne6gi9xiVnX6XonEu2yu1wq14TPKz",
  "key18": "2hY45jEA3o6LksgHyq4wYv45SeDf7fPdZcc8Ms4CgWWtYkjg4QHnjejJGSeoPr1QNLXqbRhXmXwS1yNsd3GMxULr",
  "key19": "56CakBHAAgPJPKtCjRWnZuoQadRurGdnBCm7ozBBu8ecTGApi8eLAkZxSLC8vtuRDhVmRwcb5YNkdbcGHMPo4tjs",
  "key20": "2oaiC5miGd6bK5d8mEoBFWCiym6EFH17ADsCMN6UXcrSNbxf98yFFBGxPwbTMjuP7f1Tv9pfMUwpsppsfgJWMVwd",
  "key21": "3YD2n33KpxRtWMVFY32gV4QBxZVXbzeTQJjJQ74Sypgyi25CAMPB5YcGtWkpJSyNRYgkth9jgXfNtMYT9UfheR1M",
  "key22": "3bSbrHvVQAsFJK9o1Vy9fne9wNDB5D2sqNnv28c8sqkRQoKAy1MbozwRtJEAbj8b4b9s3726VK4dPaUZhzLMtu8J",
  "key23": "2ytAvLDuvZsbPedJZLKUyFCth8zBgnYLbWbUqWf9R47zPQ4v3FDrfHqKJJe8LcnM1gZBop7t3Wp7eu3hoQoCns8u",
  "key24": "2nr58KeNTz8iq8vmvW4pWHQKZVR2rqrBuQMMMDF4AE4zEd1mfnHguvCm76VXq5i1v2hj9ZY85LEy79RNSCbh5MeB",
  "key25": "3ieNjmHxR4Gerwaescf9kJG4cKvCv9NMBKuB9bQ1XdYeuyjYHpnmU8Rai3QkmBsKP9LLbB7SqmNZBvxikiyJsEft",
  "key26": "4eUaiwYeNq6ckU6xBJfqez9rg5T863xdoRPTLeX8BrQzFdeT5xPgwzFXqdAer2M7oSnECtVV8ggKDiMxB5GyTzqd",
  "key27": "2D58WaM99uZCbuhRCHFZyDmWQWd3A5jFSJQyZbxNALGHVnhXaBLfGXetaeQpGH2AtgLrTLaesvnH7zKdUVUXz2kh",
  "key28": "39YrfoHftmycNPS21vwHEG13ZiPbN1FAkMfkzUk6Leydby9PGqVRU2moiycq2mnFjLpSVMuZD2RjWL2hHXye6aq8",
  "key29": "45LyxcFKzKxmcEsSjmCDgTbKsNaedye2nddPyHg2JM7bgV6ehtmmbrBpMjgLtiSWExK4qiNzF1wGMBNpKxKetzta",
  "key30": "xVwKagGeCN2anKjpsKsgrYVetmaymVRVS1AdTBB613SoRxKTSPAuzidPr8XQgHooXWTyay3zmPo8YipL2DEM5PY",
  "key31": "4WWxusNzSADKnFKkHQhXwvEbFK2PfUs3Sudq2Wg7KNCRV84xi4fvoeusejk9hZDwVTu2hWFRN8g74JUSPuhkZ3ZX",
  "key32": "4muqWmrTwUasRbA7pe7qofsN9CiPV9xWGpfYrs79N5AEkb5b9crzNgYXiNBfCqJSgs5FUXfWaNfRPHLkYFCSs9Gk",
  "key33": "9wYeP6579Rbrw2FyF6hiUBjGLRQXs1tY5cEKHqQCr3MGKYdXpBy8Kz2kNT2awsMdL2qUz8Wiw18PzJeLjTs3Wd8",
  "key34": "5N2wKXkhXGQeQ9gkBCY5PKGWCa5f1fohNJPpYBMpYAdZZ5tNdd2JuNpvjw7Ua8zu3dCJiziXQ1w3eFEf7y1KHsWQ",
  "key35": "2ZTB899ApW3rXWAHdcnq1Tw11fZHZnBJJZgCaVYZ33qVZYy3seNzhbYDanpwkgLPPb7D9qsVjKDCueJnkQ9Tip9",
  "key36": "2XV2AhuXzPAKrg31VLLXncP81PWejwLseB5wfZrKpeZ1GFrjct5ys3Mvbouy5qqTMH6imjXJrFJUnujJxLaMQiuQ",
  "key37": "3k9j3ajEwweUcgwSmEvuUhhzEU2SnLNzWJgqbtt6d9gVMfV5MQByyTsY5FzcPRuMuSW8V4ZLHRdCSWYZRQhps1PY",
  "key38": "5bbgmoXpLW1L6XxJhmZydvnoX2nk5aYk9T7u8CW1GcXd1g6Xwpvuy4hEuZkxLCQwCDzPAzt7zadfgXLn3ACR7zFH",
  "key39": "3CFkLKsqG2Hyg5Nin7kCH6rQCzS4V8CPBWxwJTDMZV3vRsDJf3KK25RhhrBf2WtNBp18bHT14pJY3tXJx5Kz1vsJ",
  "key40": "5ow8s6exXSUxor1pM6LmCDkTETFpcQiB1iD1VjRZyGdgHQ8JAWDBPYDEypCvaZVbR6nxP6QzkhgvwFk6veNBMsHp",
  "key41": "4P3GiA7uhFAkuQitk3JboJxnoXmZTEJFpUmhsjqBGgDMDV3QFKYCgsX7bZBjiL9HrEXYqM5QxTqWVbYHPy7RMXKL",
  "key42": "45bbR7uCf4cygugXSDMoxTegCmHZ41xxiixXrUK6S9F94o4KHJrWCg7hdkYzezqUqYWHTda3R7QtJzQqHogXBsmt",
  "key43": "4Fp1hoVeCC2SE2HXzqxJsKvPCTpz8Bw2Q1hn2b6CjaohXtVrX79vGc2jLzMrEpEZgLgf5RdUxeKUThHb8P4rxXKT",
  "key44": "2BkXgWfn9u11DhgBEt3sb2whMFLnEUTXS7L35U5G188qkqAkNXmAm71GT9xLAwJMenAwS8C46g7s7Dxpgfn4Yy57"
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
