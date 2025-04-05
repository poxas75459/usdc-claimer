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
    "4puJXPNM9qbde1prwS2Jse4MHxHJftgn7ziqMSA5qpLjbvEnz8bqA8dWGmAAg4W4iv8mHZzpJFR9Ar8xxqien6Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQykTqSzXnxVW43LJRbBrKBxeSdHnEgdooevoWzcg2bopNPJRpoymZTVP6VJepsN1g8XYBzTyLnvAHqKW25B3dx",
  "key1": "GC1Q3Esyb7giL6DAr3MeUmReJny2U8fj8zyKTD8iNRcyzxvnnfDo1H5bm2ijQsQi2g2pp4LAoQUNn9do2mHx54j",
  "key2": "2cq7UCZFiUnzbSPVBB4wpbFT457ecBJxzMM7PKJkKA2teaWwv7v8C8bshRQERkSHfEZzcrmtPzYfBDiUGBRJSywo",
  "key3": "66ovYEoiR6yzQsBV2FWrr5E2cQSaKzn4xR4w2CHyciCKaMkXjakVRtj843in4HzGSftm3sbiCbMwsxxHU5AwCFLN",
  "key4": "4e52gLQEhEg7D5cRUXGBQ3MgzhikUNLDGNjGMJDvAtpw35WgZG5abCqxLae6evRw7KfTdxX6zjGPZaDS98pkaTam",
  "key5": "29eVBQz684WrSt2SenTS5Bksgzdrt3pcPk9yQDyptRzv9yRHSb5iP5V3aa8n9M3NsSd2cusAkx5hmaTUAeXR14gt",
  "key6": "4cYXP9uSpN6ZcozJZXbtX14qqxA1MaKCxAWSscwR96Txws2xtMkjmyjGrMpA577oN8YYeeC5srahoVCw8o1GLY1D",
  "key7": "5CpbLp4GHanKf6XKJ47eikDmjfxFfLxtS7mG456HiSQYLZHAje7LrxtsqXV1MmtNrzu45Fczurx41xpuYqwna14t",
  "key8": "54GaBK1rib893MaYcFYhY1oT9hCJGwLRYvDhNY88PkUuiKhY5JwYFHy38iQgj64VvZAddU6PuYT53uUCgAwuFWS7",
  "key9": "3DxWDSaJtkmquboUbUnkAH92HkPQMrPxwfRKNdphWF4fjQray48DB81jSeufSK9kbUMNsktQDpNqdmJUiutSqTvS",
  "key10": "2XMDu9Npfz64VcY4EJCdXDWkcMEjRjEcQKUCEHG8EpxWJQ8kK49q7tEky4YFKo14V6KvD8HXCrYXjn1hL543GFDf",
  "key11": "5x1bkbnKqCmWU3cCmffobX5fNnKGrbjLc8YgPFPGZRJjp1at5xNseacegfvzmifLx1NAF8ivVi7gzqR4oFMv1WGo",
  "key12": "2FyHAG1CPphywdoBr7KmGFqVW5XkyTP7E2uWveiPjnHKbjkwzDqzJ6skiPmGe8RYVAvvybmEUE1q1VrkcDKYowJn",
  "key13": "9gWe3H7P2xM1pT6Euy6eDccS6PXsDL8RSzSjmToRGfkMR8yKxVMuwJ9SnozdiBskaDiKGAXAgaSezBcimBJJeXR",
  "key14": "2MbitHeZDtBG1DiM7FoxnMVCqdeAHGnA2gJUkQkvko5Tbtin3uyeMogL9owXcvT3C5Zsaj4kLtSKHxyykQGjhLUA",
  "key15": "4sw4q4nmU7x5QsE9vQkhhSb2W85hojs1NvGfjMfHWRw1zXt7BTf6BrSnEG4XRzQCenVRGgps6wcodD4e3kVU5EN",
  "key16": "cFBvMzGDnNmsHdMRyb9jL8M95sfA1aLQDyQLxd2e8RkRKjcGkUiZDac8cY9GZpvdur8PwZP2EubYgpHTBN5qKei",
  "key17": "5iMWYKMEbRYyq7DQrK7EHfUCLPkndoQSebVEzh5LHhdWbMQ3gjv2gLCdsTimT1sKPCKPdkebnkdHdyg9ASjb6MDP",
  "key18": "5paJKEHM4dcydugY5tfrt4zMNvntAyfFJ7BNZaeZzsrkr2xaz9f68LQvwGLUiuz5ALfun5wLp8hFcPCPyt1dLtbg",
  "key19": "3JDUW1eP7CjzJtGEHFpJvkVQCCnbA6JdcjGXkr2c9awSApxNGKWozNK39MzwpKhGvjZNkUX3pVpYMd5XAe5fwEoC",
  "key20": "2dL76AX4zApbLkCSKM65wpMY3Aguv6aLYFuZxPHZp2CvzwUSJD9mY6ezvAs1qv1nW2kEycv8t8RAJd3ty4KXZFvx",
  "key21": "3QxrLfXwAuxJcop3kDMndQcQopZUj6CkurMatNp1VfebAwvxP6zfgMDMheiefbhoYYuqE6NpvfyDb8KT1YJQ36J2",
  "key22": "3GMWaEYws73pM9ie89Fc8gaiMekRqTLrs3TesPB9DG6VgAjB7NoDzs3VpB2WhavwAfPLyKP63XkXpJmQ7gkK6wGk",
  "key23": "reazN6U5AdnKciNCodz2xBXBtW7mc2Q212GAQe6WNCozrb6qBxoW2s2czYSYihEBmLxStrsWVHdJZ83scuGebSr",
  "key24": "3xjuhMnbYp4mAPBCukQLiQvCTKBdqSNcUSyn1qbB7zZP7TNozgL8bJhv3kqCemqU2o19rmu8GUYUwAeAoovD5VM4",
  "key25": "61rGEuawGgzGjo4SBBCAU6CeeVzAGd1hrr1EaXKz7VG3PtVVa5dEiHc1FK6RyHkU6vuiQawRgsTXN8P4hqYaLfsr",
  "key26": "2zxDJKjrcrNJiEGYSo37k3zH7P8v8sQnTPiSt6fDhnSMptZBv2Pu3FeqeDgG6zfWLkE28Nd9VMFsdWsZsAdJfwyo",
  "key27": "3wcAXhv2rFsKcStKCAjHGJrPfaM7emNrHbj4wWTny97q2bgLYsf95Jpo7ooUV2u767T6fwsdzkjv7UUneaVC9RtF",
  "key28": "5fsNyJaYoL7XVBgoShxN2hwkr32zUraELrAg6QK13aS2Ynx2P2i79jnr2nh67TCJxDXebu6mhAUteAqKXkc9RqNs",
  "key29": "cvHVekHn7hFWUJQFBvfkbt2jatBE97tcKDtpaGzqkPHVHgBBa9k4cnP3tvYMz2ejNGGhgFQRSk6ptP6qCyvCPGS"
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
