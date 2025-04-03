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
    "2fZuyzvGebMDiivFjBZKRSf9qsBrLCwfkCgfMMXj538mf5ogp71hWkMB3BU9CRJpnngbXz5rBU48A9TKngVzw636"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEV7Vhjua2sNvcP6mgg3sriTLydQ51TdJirgBgZ6VTtSSuo4jW2Zea2tBrL7hARSE5vErfTmhEDePrfa9fBmRJ5",
  "key1": "4K5Xw79uoh1Z7fHAtLHjRAPG3csgt8eNNeCztxsq1BZeLSDPFjy5GPknEEyYt4uUmgvNavNGcAiL7iCnjR7QG512",
  "key2": "5iTN2nYM9yaRpbcCQRL3RiADnsAYoQCg8WSkvYjSxm9ojKVcR2xmZ6MVPxsjDxJ4J3Q6Ft1MB8b4aq2MmSihqPfk",
  "key3": "PWU7kQhHWyirF5aaY8T1CFEi3dmsCLx8SQrqheiwcg93C7p5rU5MGSn52DYuJb2vaDDs5zUkCDwAWHsmtAHzjtz",
  "key4": "5275SdwBNiLimovN7NGJWGQrp2QDeJLJ2ptNMk5eSa5wVUz4F6oiaiGHuMwttSPGK2B2BmkevEKsXJHc1YgxR7wV",
  "key5": "675crrmRYubQt3S3PnnQatVEj9aAdELAjyN44qr3bm33o3dptWdo2RYvbXg2p567mMBLgPvD65PgZCvsdWJE9h2F",
  "key6": "2ar1AEE5ZFrJEyzbxbjRKQD8gUCKAa5wuPvuQViZaVThmwz3SgJigPhcki6yMCrV8s6WBAWyzkFrs4tC4DUDKhBQ",
  "key7": "3ModNUaPgrJVZQ18Fx6gYgbVWSzvjWE6AZP2hgLuQEp5pnFpzBY1PYa26qMMbz7z4toX1LVE3UCEXrDnsJZV5wva",
  "key8": "9A8R6YmPCXhgbihrFRCUv3AjMQrsAdz8jPQAcJhhCSG6Da8p5eXWaCEYhvBfd6pbcD3ahAYBfappmaPaYWQetkP",
  "key9": "4QEFSQu5CGJcd7C2bEUSAfXkrhVVD957oTYB1tPW6VqGnXMRMhTin1HgnEk1fFbQpDaAyRVMZC4PLWVDW6v86NV2",
  "key10": "qiUMKu2F8MYjFf32t97FXRx9qxjRXUda4hRL1veJd2ug6Gk1dHZcpKYk4115eJHuSMbvQmLcavMLdq5nx9BTnAJ",
  "key11": "5r65JQMLUcAqd29JKqDzAMRwocRWf9JkzQW5c4ohjsC3EaLhKxF7CCvPAhDH5XL3cbVMH3TtwYLEKJW1wS8pXf8H",
  "key12": "54yJYx1EwB1vmYELMMRZwFzYGZfJVdBBjYv4vGt7oyEMYeDiwLBgWfHEwqisf58yMkRSLt9u23jbww1KByb95hNN",
  "key13": "5LQYxjELcCotmK4rEmvUntZAUpuD64WLg6kNQhMG1QN2UBesVN3545eVajCRmxBM1q8tr4C5o139moSRWTXZxopL",
  "key14": "38sac18UVb5iRuBQysiYdiMnypy6midHqunJ9gmXgmafjDHDFeZr2uHmkhuZ7YmCtTiNskvYFnrwrvbJMn948dYw",
  "key15": "5b5XkeWeb3iaHztKpHvpgAaSBDGxL181sNZ9kj6Vr4iBNVnTWdEeXLWJqseHcHTihFuePJabi5jRufZmJbhn2h32",
  "key16": "3upAgRo5UdjzrCb6VzYNFQgfv7yXkvy3qhPayN1BZfYQZvj1hxiLoozF9JG4eKJFVKHUip6F3EZ1KmgzJF29RKrV",
  "key17": "cYYpGxt9o6F7d8rsMUxLKhG5dwbs413pWhzLMu1QwggaPpoQu8usLoM59bbWAjRkD3CPbvUsYLzuRGkGib36231",
  "key18": "4pJorAuvMFNaYzJ7MvqdbKzD4qFUht1PRq8nabyaAcP988KNwvrUG2D31vYmNyQGGSiQz2YHAcxU5D2kQPKwfv1U",
  "key19": "2sZK5jikRogKNuikcCoBvP6N7cjHkGreX4pM9bB57zv1fR94fF7D7HKgqcZc1R9bKyfqPBNcP7HFfJpEGWvpCcZM",
  "key20": "ttAtZp4KsjfjXRwPSh1zuo7dKSW5pFXnx4e97tY8MbPJ3ANmeB9pBQhwPtJ8LA1Z9mPQYeM7LPBvtYZxM55m4TE",
  "key21": "5KmmXiu1MRYG2gi2yt6kNLvsvT9VqWbRjWsxyDdrr6iSRweHu7xRSg1wSLG1tfDjRhLg1fNnBc8GqHLwarHD4mSu",
  "key22": "54oeN7X9QJtvwJwoRevTczC9TkqQd4ESU76Tx4E834NMTocp3N3Yy8qx5X1arZnRSfoHT2u5CtqLJ3FyLmmg5WDe",
  "key23": "243m9Y24NUCrZmhNygRp15xG4WrZ7k97uETUwFCxEG7JVTBBKnKGE5fqyeEE2TDALcLv6oEgMnECThpVbrvqnZTm",
  "key24": "BmQBofPSp3io1jcJQKr5on4FFaiaVNUmq3U6VAWQnvtBugYXmQMvUQ5SqTvFTSwrBBPdnULB1fk6Vp1LB744k4y"
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
