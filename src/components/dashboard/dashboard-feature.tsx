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
    "GdevbET7MWVf45j4JnbA58DsrVaq694qxfRvtraeQKsLPhYrvBdY7jov1TTxekf61n3nj4A5WoFG5grfX5sgsbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V44n8M8kXGfCLDeisi66ThLAYPDe8AFHFSpiTuudtGNF7MufazdAJHdrwQ7RGKYPsMzJHitutxf9Y8ggYVAKXBS",
  "key1": "46uEpqGa4mAmgqQwPRkUdgWpGTFSncQvJeyFPDMh7DKaTUZ8uXyHwkgGsmCRx22mGEdqube4kFAfCSKhtmkJJGLn",
  "key2": "2rKVf277bbY6YSLf9KMXCmZsLzLSQR5aA5Uart1zu7UpoEtLNCUZo1Kf2TqjLABrbzpJNwcY9uWhCq5HV3fRQfaW",
  "key3": "spEkS2ZudZQ374o5oiEoycyENRiNZd7ppbLsQbW9Vw5EdMX6Ep1vgY1VPAfYwVH2SvfNAAoqoriYbAiMwDcU1RW",
  "key4": "5P2KDHeGZ76FxSfDkGDs2jEicFQqwDVwPkPw3tQSrNgh29jd3FnjESrZRye2VnM5kqWtJNU5GZbJRCZxJkbA2zQ4",
  "key5": "5wt3C69YiRWmoxov8heHJYv3wturNT3ymHZ3uZCWPR5o6KiKoRFiqYBAHewVahc1s57KTufjCsgXNeh8vEP6Cp1a",
  "key6": "wyrAaSuHXgwj9ouE1uNfArcoPLCkKNnXqC6dVkUUEqwBSPCPWXVzVFQTaWocxFkErVU54BGbaoMRZ6ASq4MzqBQ",
  "key7": "222V8hKp4SHwjWFrU4dL3NL1P7s58zXQ8o3zHGPyDk9ckKqZmZgHEKYWB1yasdKy3HppWGh6xsVePYhCNTX2HMwQ",
  "key8": "3Wnnu6d3xn9kQyq3YF7jmc94x2A1i9rLgdHENBH5axKyKpizvQrDop4gu8SEJZ2ntd6Uhh9VTUwSHTWtBvVZdHwB",
  "key9": "3ZaCRYX3dP97SKBwrDBUPpE8gw1truLD7x5Tb1vaGiFg2gr5Ch448CoBKqiZipDCqfXE8xDtZvthmJfAB1mKRE4t",
  "key10": "5VVS7LKY94RtCMNXm2hSEA3nFiqZxqHXZcYz324aJ6E5DqqcZ2yoPAaQnZp1MMTtVwQPdcQ44zhdPiDbJhsHYNdc",
  "key11": "5DKnb7HDhh3f4PEnvjiBWBDfj4KpcF9pKv6qjZK3ttyAMW73p1ZBEzsCCHNVhAm3TjsG1iP2Tw63vTkzMXxUpAdS",
  "key12": "4QxohcahgLCykD1J9CWwZV4CHYau9ppYyG1bKZPpwc9DomgDgXchjtrDvfmChZRSsfA8zQxkmsnu86aCwHikSXGu",
  "key13": "3FQfYYdQnSboWgAszqicnxs4nNd36uMNryAheohMAc9LVpQH3pCkBEB2WzkRi1kyF3fNsC9b5o7MeHh847j22wJg",
  "key14": "38CB5fXGUSGetWQ6GbMHpJTscnH6NuLNQMSqPjaZBisCqocFSxEtGJSa2AUEinyii49SwmweZtidnyaS7fffN3kS",
  "key15": "4tZALC9SgAygJLcZCR29TT8yUvk9uwEBHPxqNd7Ps4BiSRhhUA6QridNNsyxTXGU1q34FspeLWbUWUtEKEPgfS8t",
  "key16": "2HfwWGiopfoGUtwkt17DEuW4DCz7JkgJKjRUvT8g4mXqqN1DPsfHSBrmjs34iVGHS8AQW493zB3KibuFcfvMMhUP",
  "key17": "5h6LbV1UtM6qRuFD21DLZm23PsT4hR2ytRPaRwdyaU9ent38F3AtynXX8bhuHDKbimUTjihhm4UAX63H6S2TGa9x",
  "key18": "5mwVVuA2U7DnvebS2tw3oWrLH1xKY9dJnUnPS8nL6zosjKkpo9meYBAn1H3Zz4VdPVZMxp8SAxJVujyDU1NdMh5T",
  "key19": "251AQJXExF9wQQJpVzD6ziZgKnosEYav5RVMPVYWaSmyJn4ii9YQojWStRTTbFUwzdoJCg97wGKC4MPqTUp9VDhh",
  "key20": "5zK83Xg11db3D5hske4CcDjj1YSAGJdxB9Y29P2wiW8GSaxBCo4oDaAoE1fFRu2zCpYNwGKWvhbEDvwanEuJ9fj6",
  "key21": "5tgm7shgb52nBkWTQTu9UNBUBuzG6gKgmJ6T3q5CRvzB7kBdYgNyxLeR1WAy6vfHvEENXwPZfUn9J6AUd5qmnFPQ",
  "key22": "45cmiNyqbsRTMwbCfmYiQv9aeqCWyq28q1hppJ1swbYt12iz1F7BeeVZBz7eHTSjX9yf1ZR5Z8SEZsTMTcRjUbvv",
  "key23": "2wiDXdhx9XKJTwxZBzG4TwVa924Mzrgndwnii6szF3AEawgZmcQuJQm58huXc7jmbbH1wLBNeJDcb7ZsQMjShuR6",
  "key24": "3qqPZPTnRs8Pgjq5ZvGx5YCyLd6kLv6PzbBGU4zF5Eg4VF4PAZj77P7xkTWG9HSYzjDu78rnDz5Q4KfufN8HF8MZ",
  "key25": "3qxgnCPQepYBqJXakzmXqr3TnSKDWN2KfxfvWyACRFpqTta4ioT9yyyBifP4WfNCaH2EwqhzD18JqHVyzVf96wbm",
  "key26": "4fsfVPCKDpEr4oCVGkorVFJUrfkxAe51K9sBvFjzK3LjsWX4dVfXzct9HTar9npzVLKrXCzzYMgK4BHcZJph9Ea5",
  "key27": "32diuDTbmfwRjNZthsXfM8Nd466Fm5E4jbJyF5uhKxorwtBcnGF8Xs3iZioajLjBfYCucggHUDPXwZWmh6LRGDpJ",
  "key28": "3dimLozGqJ6Djgv6kzrd6CDzq5YmFBcUzEcwFowqTUKQ2FSy2TGG5MgbMWa5jMAzjgCxiKkDZVGAt2p8g85ZE7aD",
  "key29": "34QU78bG8WzC3rH53Xo2sHx4Rg57unpJKSZNVsMyfoy2trGiAFCyfQknw5nBcMcHSLjra1C8vQXS5xYSC3T2jGoD",
  "key30": "66HYNwrzwDab7KqAeqRmTVw27QybhDrSUiFW5SbYXHPzRBmFF8MqrV5bvEdBgg2yWzXgZzpqMpBHNGogzjn8Ewj4",
  "key31": "c6JvRa2Ef5mCRuJEZKfoDq1Bux4LfhdQRP9hsMqPZeT6qvmkXa25UH81pv75vBTETiPa9mMAjTeri1v9SSbVPN8",
  "key32": "5XhGhaMrkPUA6iH3FHoWAmQCYrDqVG1MzXBr3R1sHD5fU4n6PLA2FyCD9h4ahYyH46yKnoMJTwa64eUT8HNzTmen",
  "key33": "57ppfdAF1yry1E3iSLgDRZi1ny4vLrQbqZQmM2BiwZicwYFVzpaSh3Arks135nN3AoBweP4cXtNTHSHBee7UXUbR",
  "key34": "3mUGPLPSSwGKw2D621FbtgFa5pHttuHFPrMwY5zWMe57kHKT7nBhkQQENFhXVZpkVKSDFeefxLoCrDisGQrHxCXN",
  "key35": "4L9Q65uzSNgUzo7Fvc9Laah3zMGrqJa34jp945eJydBppywhsB4FBiKU143kVdjt3d2X8uduLYvUPCWjuHNrazJ1",
  "key36": "x5wKkmhtQw8Nsf7qdWmCJdY65oTrmk5uT1cSqSA1gkA891R3RQ2xURLptuQXKiizmk33vJkyFbRjptVMb3X3MCq",
  "key37": "jzJZzdkrAJDjnLrKeAvYUL1qfEYXiLUMCTHZGrv9FVBUrxrsRayEXGiuuDhAusQTUZyv8K7bzRZHKhs78Q6jUpE",
  "key38": "pXUpjbsKgkQTPjfaA98tsZujjAamC9r6ARiVvqcp2ao89gDHSJCPshgQq53hhFqUao27qgVtJUwvqqVhT6UuqPm",
  "key39": "4DR2US5MHKMuZaiSV83WLxMJ7C4EQUtomC3HAmTCJ37ZLHcAE6P2Npy3L5PupsiK4ekbM2oonvtntshxfpXzFMP1",
  "key40": "2wToQAuQfzeJ74Ko3BP74nxexneNXpuUd2caogaP7nnvhQiTPJZpUhnBPdqfiTpGjev3m3AQTJosE9LQYxuaiTus",
  "key41": "2c4qCAeRfRmFed7pAFEbrpepkCFfXG6ztDa5XacJiZb6T3i1HJzVhHNN2tdBF5Gwp5DUQTMedDWphhA97ZyPgotU"
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
