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
    "2MvdpGhH7Ka1jGA7FjUXYrLCuvoLBVYnWetxHfAmqSMrZej9VyEAMDJvzyPqxDUAbXhGuM6m8vt6noPynGdgws1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diQFjHvHLymhGNCxUHQSzCYHv8zMKbJy61oP9dgA73xkCmzxFNAWskEh5W9Q9rqYU7jVEnbAdmrRNFkeyWpA8RF",
  "key1": "42PFr7wVBwWb7DZDfNCmpRFAMeUuUW2uYkFxUbJ8yacrjf1uHfBQ8xzBhE4JQUn88ygSALcsSZWT3Xhx82weQhKS",
  "key2": "w1mFwqy37LDywx79gig6SMm16jsjEEL8dFURE13BduYYWcQTGekt7chwYQmu3e6xQGohoBBX2uJcRgwxPyLeMur",
  "key3": "2taTi9UFYimUXucVr5s7Q2d9EcNTiy8c4X7aDQ3HnPb17kCddn493sMovPAmNZDmCpQj4Hz7tL5g8CiXi5Z9kWez",
  "key4": "62vm59senVyFHxqrHkLEfb8fMAxHxt747wtTdYJFQwxo4TVZNUuJdEkEi9GTZ7KrrtmVcEziAVj2yrAFPGiWPenc",
  "key5": "2tY9v3c999f2XjnZWuLqnKj9VVRqBhJDvZbpWdbT3Ec4gMm6vq53bescCaRRtMwgo9ZW5SyXBgm3A2uBebuTHHzk",
  "key6": "3RiggriQkJAh231qkYorrd9GyaMN5xxLCnsWjBAXPWfEiZM5p3Pqv1Ytszn3a9Gx4FciceiCrYVAvWGEfuqCuvWt",
  "key7": "CxRocXiHMD1XyeXY9fuEB2KbeVXtXsyVQsFTSPrA3SDFbP6uGx24DnnRigYDytoMi29MfbgUZ6zziR5krbTJ8VH",
  "key8": "2h3GF1Ywbmo3dVp7tmYp2VYJWDzFpRxiPueqxs7e6Wb6hZ9bbTtsA9JwExMcrELBTFXq5g2PJRrW44F7sbhZunz2",
  "key9": "62mKArDUWzsotMBQrz83Hx3ub2BRLBH4iw6JvofvrXibko3x7LvKkteH5E7HpCxQVNfMxuZQuDvA98SBQETiNajR",
  "key10": "3UcqnUV2FVDTkCESX3TdVS7apZHDEfhtMEfkFq1ouAFzuYkMyBor9DFaXxCUouctcj5sVBRCK8NgiBQ6pU8SavxQ",
  "key11": "5LCc3FbGe1E1zwS39GTJKZa5cktFY2psddDH3JweZCPjXQHC3hr4ruA1cVuMiZKuCRa9U2NNrqZkPBkao5Wu4nNS",
  "key12": "PbiH6bQnrzMBCZpmVynGMuzev4rhyQRk8CnANbFEKew7R2G5teBo1NakCnNSMT6geyzcEx3cnkh73HgXTSySqTo",
  "key13": "3bJntMtt1yNYdwauRK2mPQAjF5UNBZgC4qpps3Fc6DEwBybpL9nDGRvXfYLULZiBdv9Ui9ynAqUJQvXWc7bygzqt",
  "key14": "2RASmPZB7q4vQJt7wCPgU7usZrFUtsci7JupbZxB5baNz2gfcBnU24oZcVfrdAw7PBkL3tV3TXQVAMZtXQ3satZT",
  "key15": "23Ywv9FT917yGbTaw93Xg15xQZH9EsYWbF4Rpg6NbwXwkv2AK89otYxEp84VfnLFWLSWf9XPpDdFHULoCLQN3zc2",
  "key16": "5wN2w8LaH7KpTbxbsegHVWvbh9RxZZw9yvw5146PcXZiZ9RspmGsfSbcDhMWAcrFwfJQ2vY1jSrZsXWuq5E17UTs",
  "key17": "3xBRBREUVJVB1SLBVqPLst7iijE3axpuabJEBoJThAjZ5UtZCPsURELPN2MQJtHVGs8h9JjTwTnkp3428ZMsHeYU",
  "key18": "5tnQ94yw85TSHBfSBJq3MJh7jbRexCuNQ2zUwzndfsidmZor3MxZj4o2G9nqFGFnas5VaHKxjn5qaFFqyetu3brU",
  "key19": "18duisGHzSBa6DZeGZ2XsgmnZM1TD1g7vC4ypXLoLiDRtk7s4aFFim7P2NzLgMmbbGmwMvF3qteA5awEqA2DupS",
  "key20": "4dsfCTBAY8gyzReA7Gm4roozKgm9Xnm8Ae8qLqvgaLAVX6YcVGLsXffRhGdVjHTHGkAt9fJZCX9uWe9yV9aJ2Sfx",
  "key21": "3BNPewmHCFM5s1ntMehvEtEGkE1UWu5RRxNVKX5DNTJCzwgXVKyZzWu1zx5p4RPCC8rNd6ppGsuA5LUq5L2PD1Hq",
  "key22": "4bYNwwCB5nPtrgmxo3GYLo6RkBc9CsJ9gAUFaQnQk8BMru3amLgHmC1d8wx9ubEpgZbc8qvyxjNEtscPaauExXGj",
  "key23": "2PKB2sNy8ZBGZyzu9kFcWwyrLWaPg7iyW6FdbW2JWQexeRQUqgzDVBdP64HyLDLWMkbrvB1DzQ4jBtU7dcRy6nxi",
  "key24": "3Fsie7bGUoM2QfpusWqSv3c8WysL6PnUskUg3swaX7mfxiD4bJu87nwbZjxaJux43vH3EYd9hTDCqsCAwdRgmpfj",
  "key25": "5NvUycpcebH6Fd31smF5wqgZoHZ1xrnpCuAsyMtCiJfCnJdNqQHvYvViMPLbUPpWsaoEB7iYBnSZnLcP6cJBqE5",
  "key26": "jjWfoTR99AxxYRnhx5Rkr5X2X5nsoknstAGhAjHo8u1zAqoF65rW61PKdSkgbVaBtDNGuNy8foks74x3u7X8659",
  "key27": "5oEvqQPZqZabQsuu9uNdfxXBHYW6wpmTMVUB8kfLsxNVDaTn7PU15Woc46vDXfCVXWMVeA5hyoxG4Cq56VscAT21",
  "key28": "3peDpYwRuGD3qqghV3B2GXWkxmuyYRrfo71vS8g33scvMXuALcRGpGCH2MS442EhP6bj4wXei69djAaqad9H74WD",
  "key29": "2wwokkbWPgkncQcfufED4y6iD9U7pVGqtkBSG14NmUTBRVXH9s7yqHcrtnk5kgD4HV3PyPVsk8HMxJLxJYhPBTpd",
  "key30": "bD5utm32ou3asQ4ukttpkNsoVAEmXxSeowJwEEwT2kUymxYuvHKfiNUAZ3sGWkqxa95GpwcXRyAYDzV7wfF9EsZ",
  "key31": "295BMMPoEiY4RynLZFvnFSi2QL5PEcCvbAQswGYG1r8Jjz72hzMhj6eRrBHWrDn1BUp8vcauxKFsJ8Hk2xkiJ8GV"
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
