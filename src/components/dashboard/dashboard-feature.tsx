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
    "3SFbtUVhiHugJUuLLExJjupfG4J5nSfdpejM14qpVCAFey9n3JRwiRpLB6NjDP139vN3uVzxjcjfewVercMuMSfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nV1h4DcJZe3GCYVhBehb3Xz2sa4uthEqs1YssFk4VsrT5xiVgPmEEHpFHKGZd1J3NEoUkVGMGCD2c7JahwqkARK",
  "key1": "5VMDPKcPuSWG5uc7Der6MTrLeLr4kmGyh5hx92tuPCEYp8EEnBEbY6CTdzSmbVC3GFRH3Z5QeHmioZiw5TcWf3pG",
  "key2": "orhNab9SD8FUqqAPnBWqzic5P3Dw9ufdpb1gSThwN5TExLhvizuWqKyBe9RCy53cKyxeLwGkxhSMiJ9c1XDtMQ7",
  "key3": "3Ggh8iHMhjdjmtGD2srTgxLkgxQ1GUAkABD9wWEisMxTFoEQ7YxwwtNY8d4ckvWX8iuoo6RCGsQcnhdPH8BVFj5X",
  "key4": "2BcW77TB3sJaWL7tgdUCrUCUXSK1YsQ3dXKmwbC2DbnmrfEPA8bVznjJWTbo5zYgSvyM34xapq3fiDFKg3r7z1HC",
  "key5": "MEkEXET6tYK4wnjb3fQrjCDs13g3DRhfURvBB9uT3U5eggcD25JKMHLqeM63n9GALz8kE6MdweqocawSQFCADLE",
  "key6": "3uDqeSmtui4NwYmytmNdycMGCJCbvsQhQN49iZNQRGiC2gaQFS3btsZae4RuVgq9EhWYbsa1acRyT8NcdpTMrcV",
  "key7": "36nWgtHeo7uXpfieKajymKMdKyT3VQqVshwvMjYCmBZJcYJrfut8uC9ekM9E2qHqcvzBfWoPeh5mNtG3uXYktCUM",
  "key8": "2T92q2kiUQdaEFXgXH39g6L9NUTm7Xnzd3QAskvKstpkrzj1gotoCturkbbF4sMQs4Kv2snaaozstk8qFHv94d8w",
  "key9": "UM9RYZzf3WAd5H1prY2jFnJrg69vDq5sbndTJiTFtAnBLTgnJhX8SKbwH45heedwJuCePmJTjBh1CWWxAsS2wb8",
  "key10": "4qyVzhANEETF8gpCBhtBLdosqVPCbFXc7aE8vcEPYovf2qRPq3s68P1vDUJo6WA4VEsNFTXZDHEg5iiwZDCJB1cf",
  "key11": "2JZDEEAZh7rkbc8w9dGJJakqyk2qKxpwpkoafscGrzYS91htCtF85Z7nGfxLQCKHvz8cDAqVQ39KTaFKZRRemmAq",
  "key12": "45x6dmas6ba5asyKVXqX9KxbL9VXRQaKPTbnS6qi7rPyy3n5wUdw3NJzgcYKdaEY69v4aGgTfEV35p8ZKCvAaCUY",
  "key13": "3brbC37J6tDgRtWEXEjuKRpoPq86Cg29tarXxXCj7sysheLj8GeXshRLaYmxdcnzzQ6FU94sH3XVAskAyDFFZERE",
  "key14": "3JSSxT6Y8oCbdaPehsdqZkSK9nFBjKkVFgVoa4ejGVpMSCGa2GH3zMAwheDD2q4dkg93eghPeaad6YNJkcnXmEEd",
  "key15": "2eW3nUes4nkJ9FV4Voxv4mAnCbSwsdDKuwmnfASuGpeNXL26NGpwxpeoDv4JkAEqHMaeGZrofU7g3PYccax7vQ78",
  "key16": "3Mb6V1ovyukHbQbRAinsFzSSDYW3uSCz3Y8Jtu21UQKTYSZ3gNmuFg8Fd3rRKBSUxxqGQJPQmddJUniWBshLsFz7",
  "key17": "5QptFuf2C2BRGiL49aPu82Xq7sDpQyCxiKMnvsGzeTvrfXWnBvhREoyrjaSjDzRAwzf81H6i8XjvJU4CVCobhX6G",
  "key18": "5oG785HdJaXJgTptNwjf1ZP3LtnkgyYnBR1KrKRQrre42XHtMasHQRKx3c2Qpdaywy9iUn4DPdAKij1Vi2sEPfA7",
  "key19": "4VtWiZomTPjiLToyoLiAaEbppMpXC4i7H2nGFThfw5knr8veVQ96NZ56edZ4swKx7mQmxoA15U3Fnjtg8tMiNwkq",
  "key20": "3jFEhD4nrr5pBzLP38prPZbjP9dXbcKkwrNq3SLVeCX5ZY3ykcFujGXPbJXuSFqYbhEkNXHN2Pnftbqzj4rVVbBf",
  "key21": "4q9mh6NHc4tK5PfemCuDy9TkhBoHaovC9Ugak6Ka6rLikjhuqcfVGt9bhkZPmsnBGke2xYRy3HhztEUkwSbxgfTv",
  "key22": "yp4nBbHiXrCywKhkubD8PaMwZdTR5rMGPE1ZAZNMzKyfk6BxXbLGQ3mr9VT3iGZNhwNcqiCfnSEX3gzxWpLdk7T",
  "key23": "3wijUkw2Expo8maoQjzJyt82gR5f7XkBKkb6cpwRfaNQaf6mykCyxxpgwKoGJo1DooZE2rjcReGHM66snFUwnmFU",
  "key24": "3oGbBFghnCr9piuNWDuN8ay6HCFzs8wXQQVCAcQEhfjySkJNWS3f229xDvfMWVjPDkBLMwkcQ5hXBvnNTmsiJKWi",
  "key25": "3XBcLwMa2NJTeurAuGqQiW4W2QzuacNT1Yo5bcPvWnXhMuQ1YefJWUEATiYFbdhHdQ4dZKZuQsGh1NQ4kQN65wDU",
  "key26": "2wQK8wwQZbLCqtWr13MGKy1QYRxEaS3fje9bhtvrcwjajpUB76a3h5m16mjHHRmgvQ7BKabNJxK3kAGKSci3bsaM",
  "key27": "4uHZeAbSPp9sTxknV8Cy8GYRA3stYnfVStuGCa3Pk6RhzALPj1HXriR12eGMhY46AZhVYhCsaqwQNceDNSs3h36t",
  "key28": "63bUgctHCR1UqKNzATLVz5wWLSRKdKy5VnK7dEu9DY9efbpDQWffNmUAceBWGoTfa88qyCmuy2njBffH4tF3jTAb",
  "key29": "39Y2gDZo61Rm1AaCvMawm6hrkiPzEND6SgFttfy5LXeyJVPxgbh2ULTMruQXYYCj3tBuz1f6CZLRQN3yHkBf8f6h",
  "key30": "2cyrUBk2Kz4xnCAXbcBKda1CkEJtgoAUmz9dx3HtJBZK6ri8iAneoBEY6JAfYZZiExeC9wUMyfgtSV3SKebc2qXE",
  "key31": "2Z2e8Crnxu5NddJRHf8GA9TnE7AJySLLPuTAZCnRA6r72YtGKXgJ9PBo9xyDgR741goa9yv1GNYz6a1N8edZ8j4q",
  "key32": "2YASuETs5mCQCNeg3g37DdSRd2hh7hdFEDTxiuuqPt1p12DPCE6vAM7gjfjkTEAkVzvLqDwJCUmgvR95uKkPHebk",
  "key33": "GsJa1LsnNg2FUpwYWCTVngncLrBmcxhLSydY4jB5mSPMAFrWYYFWjfpdjtGr8uXjankZGNTDyi6Ho9d6iEb38B4",
  "key34": "51TuHDFb5dKBCpd9vqhoi6KSH95nwPT6d7oTujJbQqeeeJvfJSTsfyoeNBhxLbW4cYLReWfLCpH7K1DnBFoVUAFi",
  "key35": "5tME1yqLegypLiEQE9kDTBmiF7NLLkcGWPY7FQZXKKqbpieUgT66Hd5Jkjs3AvALVESkYqMjFSnharNjBzFkzHmP"
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
