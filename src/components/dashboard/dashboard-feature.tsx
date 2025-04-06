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
    "4tNSnw6hQRtJ3BjLV3g7b1ycawbBKQrK4RRpPuJY9uazfeSEeRJ481Umg2dbpAXjy8A76oHqr8Ptf1Qi5ZkjX2cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyhsYYffAqKu8rpzQ7xLQRCaCe9MnyxLVds5z16Dnx1Ue2cdQQ72VgWXbc3Lhwuyu1KpqSCeNVruuJ3K4nt5Tkn",
  "key1": "3DbNqwDSPzMaSD2i1Qx68r2NsMCSyWhZDTcHACgdWZEVnWpC2BtCXn9qZxhT4bmaNxtwdnmF2KbyPv3Pp5cRy6TG",
  "key2": "z68D5LW3RZj8PGZotVMXmWhC9HNqjNbH3W7diRMRwR98HNB6TLsEHBQsJe63bLRwKWAUSEYyJyLtHAgLiAJNnhG",
  "key3": "57n8CLxoyXbHG3NhdHiiHna2YMgkFsaZHZ9x3rvMHF7jeb1NQscXLDD7ozgddTvStCXXEoPcKZJ5Gcj8RDaJV3Na",
  "key4": "4S25RA1f5U98MRVpNL1vFrBrPbz7mKjKE5BxZZeTkaMMEQe2KJ2QDFC6iGAXsfSzHHCr94dspSVYaPkv3mDW1H6s",
  "key5": "5mrFeaoP9Sv5aeLJoSZjH13i9qHZyCyKjLsJfHdb8d366DBndyUij2M2a3uBpKRudfhu5QrS1d6Esg7W2spD6Sbe",
  "key6": "PnoCpmHW2DeWaqqnFBsBmyFS1rqJnH3xEio6H1ufx8WKPJQrmHHkjc26kf9Enuf5KkWJemfSoek4txeKiwy7gqj",
  "key7": "uyuprKibfCJY9scW46Ev4M33iM6U858wbEZ8cSpBPPAxfbxbNgMk51Ptae9k3W5RRJmMGMJUYuoiDcbpndwcBes",
  "key8": "AYhYJ1q2UX7QhHw1Li5YWr9729GxuuxgjQVV99z3PA3UP88srPwxueZdKURWBXauuDQE7d1D8VTA5HQiwxrzBvn",
  "key9": "5xtfzuJxmKUGCELE3JHeN6HWtttP4LsL1sk58vS5Jj1pi1socHFoz3Rq2fvhiaKjryRmVJsp2qrbGbRqjGQKfrNH",
  "key10": "cJH9Ds3Psa4pc4MfVJfERgNYH3VAVtB1PrqGfaBWEWR9UZaQ5GZuWrgfDJtL4pmoUzEWRxAaSKTmY2RiS4aj7cg",
  "key11": "3TaHB2f8uvdbRgEepqm5rYRFtk35RKGH25NRUM5Ei1x6Q4MBSzxKYMe7tsFYvTgSZvdH91L3fGd8SuMUNfbJGxXD",
  "key12": "4y2xCdCnohcA5qA1X6Vey7TV9aJM8rGYyKT6HGvbC7k54nVXtP6R9ejUCzR7cYofJqXHjaH6gp7KGYn9qptARwc5",
  "key13": "3bGQkN5wkSyJVUs1QfRMgzBf6TGc5s9vvMKBvQS4PasEeVhBQ5U6VemgVCPj5dPVczaaVwsYtVFNKJQP3cQ6pRe3",
  "key14": "5GqDsRtUvsBftcpQY7S7kZU5aCaFknuaQRYYjz5MSRtinMawnkrJ341hZA8PDXAco2jmGLbnY9H7rsj22RPcGT5L",
  "key15": "5THGH9aArUBj9mpWYBMu3nVPBWgY1FSHsXZKxMZeX5z2FDEHGfh8pEzuRpmQXriUCukyn3HsDsahhbGCtAqUF9n3",
  "key16": "3Q4XF5GtZfmRCzPumRNMbTnDkCATL7G5d8L7iDXBuiBABNWFdx5qtB9WVfxgNhATvU1ocS3ACQbUwQKcZedDJAt6",
  "key17": "5XQPufdHB1fASWuT7R6ozhpUqUUB3oPNSjLLGq3jrt1WEq2Dz2HFqxJr31kbtJ9QqkzFD1bCigPGCi9v9Rt6JJzk",
  "key18": "TCV4tjGVPBGHS6XWYL4bQFeGxtuBwxBCb9bjJs8nUkfCLF1gRpCaauWpdq5u7gQpgAvDC9AxQCHuZHPth69LkS8",
  "key19": "35GesMrzXQRspmx3CgWLs8L2uMUFExn8GuXmW4JCkbtWHKSn9hgJcrEBEMFA9ysWgG4Tj7KaeCNgGtosyY6shDvp",
  "key20": "ja4VhSkceQkrmfUyAjth1nVjhDVcFCw2DS9BAPh3Ch9kwuh9oEtpgfYDdyHM6sVY8gWxVdYzYw65GnVzMZFZX6q",
  "key21": "2XW1YFtGSAmnsKa6SB8wq2Qbq5h7ngBB5huufH6gqPNVzUraXjyE5JRL68nktco8cjWKbsn28W9ZLZ3kV6wk2PS8",
  "key22": "Aw1UqLB2Q12QvfAUxytmF63UsjE1yj2xePR38Gm5SV3atXfpaHgwbvHg9wMPg2y1HadsK5ANyLPuiJpdNrmV9ix",
  "key23": "2M3itMzeiAaX6Z6sH9izaao3qJxcNG5RBWLa7t7ZgEjGZsXY3SUZYJrpC2bKMgg6jHEGMULaV3fcosgoLJE1hJKc",
  "key24": "5gSNLybvVu3jD6BFC294dkMU3pJcgZMjRNHw49oqrUkDMYrikKaeYD8SKwLPWYcv5HnAYqsDd1DV58ZMo8VJ5nvV",
  "key25": "3EdyyeuYUznRJFuwvJkr7g42oBHcDKySQCubDQEkLwVuWHbNqwuaUT6EgjESCsyhuxnXTxaMuSEB7wQgns9arSSY",
  "key26": "4rafVbcExVe7M9cBLuUu6xNpaGSKJeaL6nVKsx3CMb17Vy5znpsuXKS7SRkt3HE4sLQeQH18UHRQMcLpR1c4M8Wk",
  "key27": "3pYHNg7fpbZa2UWTTok7K5yUHqGHJ2gxuLdPGgqfrhz6XwXgvw6upkrDZqRKnQNYs5xC2ngUmSGKZZhc2us1Y45r",
  "key28": "knRsjLFtGzfUemu2JuESVs4Ycc9sFdzDr7AHW33xJi1kot7eHp3VeziAE3QMxpyu98v5jEA3rvxy5nJBui7rMoc",
  "key29": "3cLsjwSFMGkoJj6kA8uRxkKJEdKmhqSjU5XAz27wemuDkzy7cQrDPJW6GQ5GeRwDFdPR9RUTVtRSUELuL6U5RPZe",
  "key30": "5bpqUAi4erMyX4C8RdKBd2xrup38rySSpL9DvjaitqbSJGVseZrLUSkHxSuhBekmwSnVnWgzdjifEQT84EPVZYFh",
  "key31": "5pjoMaW9jqy7iTRdhWwez52VxsMEPuEiAzzxC4TYmiAWGYkwDF5FDWq1KDzbyaU4ViEiNqFhDdGDi8fMftoBpAqX",
  "key32": "4pExkd5LZEhjbRRyLonBtKz2JUa9ZGAd5xXXH6eqpLwuQ5BL5SpB7KjFafMwMcpDibDQZ5cFMjtEsGKTkic44G7J",
  "key33": "ikYj5Q3KxuaZU4pzhW4QXEBuExzQddYqD4QFQhtAidTrUYompLvC4WdwM4Rz6fuardVY8e7uRV5qX9pvsZ5cw3e",
  "key34": "29nJRPUUCMPzfoLYgD7UFCzwNMT65WfNDkF6NzQ4ofcnCxh7THsq5cRiH9MpBeBAeLizhV13ETQBP8ACsvJtT826",
  "key35": "42EeuW18iwj7BZt45BZ1AhTB1qkhpPV54E97gHCSLp3FndbPLeLwuBQLZLaMCrUZ6ynm27CdS8mYbVhkZ7tvxZxo",
  "key36": "wCecHwYJorRgzLawhFhwN8gTUA8dQMD3jiZK479qWUCXmSpLeKyn8ih9wTpxyDiygRHvAJhup52xk8DGEBprXrb",
  "key37": "u1ExhjHBrjfhBvdvui349YHio3Q37wAnfijXBXPuSzrgfM3ACHFXifLYwiVWttgfdLGRB1mwmGyATjgidVrjuzY",
  "key38": "2MHLo6p2xELtiSGP4MWA93vTKuLcga6wAXM8Hrs8xj4ARZzeaFH6Ssz95U2qJLg21YMKziJriC9q5UZseBaheoJk",
  "key39": "3dkXFnDiBe1A8B5hr7rrCTyfBMciknX3ghZn6x8CdLSRMhtMNxLjrzkxJ6ZpJJJQSjVrGwGeVXBSvvSb4vFbCjkN",
  "key40": "4qgv9WYHwgUzXtnWvChNBpwoNRTqNQ8VT4rVnpkHWd7YdDo7RtdFRnDYAYgWxZVhgcLLFNM7JcnwDASrMvRPwNEo",
  "key41": "2NNdz1PYoLFhEVM8iThyy5uuSCj2m6VKBQ65S5sCUjCfnUYH9FiwQi4nH96om5jR6DrrErZxJN77j85y4YE7MbcL"
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
