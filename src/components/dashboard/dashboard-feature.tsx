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
    "2oC1z63buoJyT23DkAoWtC6fvWwP9sN4VZ8M8JVpYe3KpTKrRTsxP3Bttq6HoBU8yaoj84x2q7y2ec5pNH7LpaDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kqNxGJz6fwQYXuNVqnLbr3cfZNc1U6tHVnvxjz4dd866nSxWx1KP1SkS3w49dgCKBPp2RaqZh6w9a4aX4YCjPhg",
  "key1": "pSZ1jAcvVoufF4gQAYh31F56wTQ1oitN3NkTLCza26tTFXYTTZQV2Zt4VLLF3zZWdqdF2BW9ooeV4wqnx8yitf5",
  "key2": "35EUemjffYeLAae9f6gsS4Z4pXA3n3aEaSUKrd3UtvautTyxUQiNwhZAFEtQuGo49QRSjXsx2N4agFqt6LpiTLSH",
  "key3": "4zpvP9MLZL8X2gFMHpFanM8kctjBP2ecEgHJQeHeTneBfvPbCN9H43cNoS8pCPRtyoPDHuBeFnQsEBcjafTYGBvN",
  "key4": "5JgPHUjxKh82ooRN62BKptbkVMzSYHxZhYZLWpZCiStUa3FaokZ6uxHb9ru3cSaGVcaa7S38FXdyKbTHUwMjihcN",
  "key5": "4fK2zXYnMaxFZeme8qCnDvCTrTpZveyj3KX5ApQunkZ1mKADWzn4ZxmZUUBPraJC3wBsQyga18wpwyQBiDEFvzpf",
  "key6": "3v82BSgkGG6sM22UAfWtr536Ei9fkKb1G1FgchCvSB6hpLWgLeyW2mHVWiW5bJ3iBXsYhz3sVvDjgJYNQGNTNwzL",
  "key7": "SjAc8rtzYoyHKU8c3ydkBYF8raTPCEUf4ZWwo5UrEJ77SYf7eHnjkz2XuKTJTsbBLam9MUdhMq8ZwjtrRZXE6rq",
  "key8": "58k1QGkYtVNGS33p3i3CsENi5PmefunAars7WWQiHAm1DGqqAR96zaWRtcZXpwwihsRwGW2DvXhhgDscZaBEBfZA",
  "key9": "BCMp36oTnnFGdPopYhFjDJD1CStsJHqAR89beTLLJKdmtGSqttyURGEGrNHPkEMRPbY7oLfWLP4hcai1LfP228T",
  "key10": "pirBkKQ76dwpKiwh2AssGFBLmrgSraaznVJQnUQYrWW7mcqRYCSmo38XEAgFDb6wPMWY5Xk4QcFwMvLu56T2b28",
  "key11": "2rHpCmBSNqh5RyPogoyxDi2abSXFf4XEPLoK7YeKuQtz9Egdw8JQx7R3syXDPTuakRR48ne7kHYUt91GSHv4geCY",
  "key12": "2PxkRxhco6KLAtrhdQ4CgZWvhzHiq6M27EvMnfL986iVMJz8JvEvbZBcvJ3RENdeb1dNzGTtycRLTZ7WMUvyKL7v",
  "key13": "3ogLAGjXfjtLTePT5vMc1cpzbMKVtVZnNfbFQacupHfdYbYsS8ZwQgNnpqHw5dwQde3hdy3xqkEHySk4ieSqoDXy",
  "key14": "5VWKJtdf2nt4URcyFNLKGF5PSMsQN8e6PZK4oN6EWEx4W7titbVjeLZC4egqPycujF3qDXPkunM2fX9194nb4bHH",
  "key15": "eVYw56nXrL1fX9MF44nyrwWjYjLWNNx6rRev1cDhtSqGW9N8pL2oFn8i5xfXJVVNKzon6ktfaVF95ZbLnbxzsBy",
  "key16": "5AYHZTa2h4E7STAE4CbWyxd1gC2HDrGKH2bTyofd6xoB5akvYAqFrqwrCjE82MDpDYCC1XtVnexDAHQUucG7aggF",
  "key17": "QMSNEDeC4LBfv8nUYxfhkRFXRdE8Db3nrZExui69133SipkUb9hZcEkSxs8Cke56WB2URKmsTbbmLHP7oKxPaHu",
  "key18": "XyFHH7qe1N7mjDySXMujyEkmFfiE68aWR5FhmVezhbmSngXN6YPQUe3yXZxQsKCv6Rrk3mhd6N875uzXdqo6gWc",
  "key19": "5DcuVpMs4u1pWf1YQEDJhKoPjicuRPq7uCSesUxRiBPsGsXPSi62nERMNrMAv8cdZzySkNTcZP38HGvwxDV7BjQh",
  "key20": "58hmhFswYZ4tvDdyna5JuPhxZ7iTSKvooE66JHDfpxzuQyPQAsinXewWDp1UCbvxXTWy5wGNGcvK8wKa2ZsmDUt5",
  "key21": "4sKSjmgNsg49q6ddKySEN2tkAocrtxU4zJzJFwE4YjvXPixZsZp5zfUBXXVCfRtKAzrhPy7FeF9Me1LDjUcLTNPK",
  "key22": "2fTCMseyYNpAJBcfjEyKvcFBiz3rtJpRKS9DaZd2ucY87Wgw75xVQyTS7eF1EfDX4MYn4gmqxBMVz9u1LMWK2Vvi",
  "key23": "5Y7nfmCved3QJUg7JWSmE5Hoxoicjj1jGHWzUSGqGDuw9AuxCfFJUZ2ZcwSE3Q3z6Cj7xdWkNAypqE8fgdXoJBBZ",
  "key24": "4LtB5bT3Am2xe2hpCxCpN5ii3kv48dMddvQaHbaRq8LofZp5SDo9KqYFsuvH8EeL1SKu9iisgukxZccnkm9UR5iD",
  "key25": "DfvebLFEsA86gXxiKBVJqbNugdXXjA2oFmJKoqBDidYgc7Vt9sz9njuyhaLPc2YJfgbpzhv3hHjSgHaCjEyTBhi",
  "key26": "2B6TjuTs54KZi2GybsXVnCzp59YohADaJwSwS7q3FFFusu4ynmZ9Cnz9JV4dbuwwRbYY2RY4or7pXUpHKFnj85kR",
  "key27": "5BoRbtjvEdUoYvDf435orCmyuyS1gafnwpx4GS7txNfFkJVrLqccfPkLM7KkK9YkLz27t5VDaBjbZ2jYRziNGQgu",
  "key28": "1i2aWdRie3bZbXw34ScVwxQaW6r75tU6i4rDCYUMbGd4xfqjGfJuaw4GYtcCkmGed3QWuUSd8tvXnNc4NZ4AVfi",
  "key29": "44JhkRrtTuWwJyZA28xgeQ3eCZCCn2BdTVoNhd2LMCf57RcyQLvSLnvCZ4VW5Xwqccb6w8mcFno9z56o9J3RvDae",
  "key30": "2oyr4CWkhkK6ySD3HeD49G1MhLNL1GSMgjG1UxZsfCJfMJrtJYeQmDKSAu3NAtEMqEq3fAZjTRS7W4z89ZRRrYSG",
  "key31": "Yyt9KJsqiMiKcec3eETbEqhpL8qGGxx1UZm8UX2tPLhmP5vQ5Jh4ewyVtYt9oPyoqvAuT4QmWdZ4ZLTGjVAAwvR",
  "key32": "2upTWMkswE5DDEYD9PBodjrLtY4psFJj2ay7TzeAwzXLrcMNxNN6TDgrM9AN9fqzWsufmuPPHwVwqKvH7aEp1mbk"
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
