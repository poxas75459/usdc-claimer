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
    "nTNZ86sxb4ADtWMUJQm5aVzmdftdQuiMYrKCdeYm7nKaZGgHfnuC4abFfdT2rUgBswHqVjfaUHaASchCs6YpDrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ygFmiKYFpF9kktbCGvwWUDnaPTfUoxFTDD8paUzeXX6NrxFYFXUFD5wjC8hTrLfUHWDJp4BQCoswenS78UUAjc",
  "key1": "2jigN1UawygpkTaHEznxD3QNMdGWNXXWjuLWtamvspRk6F4yfLCS7tGedsioXaHNmXJoeYQn4qdVK7VQe9j8J1uv",
  "key2": "4161L8o4y3yVygGrysKXKLyaGhCSCABjetL8cE7x48nN6zLmRboUCKTEHQzFqT3QzrBjadea1641XMiv7Bf8kmye",
  "key3": "5WEuqAtGbVdCAxjmLS8wMmAesWLs3jc86nkKuTeuSkfFzRAdvMWzqRzakikUrmvtVtyLYorA1qHYwPukDbmfP8Xc",
  "key4": "3T84tGAaGab29pDa6HpF9STiiL5rRfnyr9TnKYabXBX37fPyYkuKyTsptbKkFdPnnSYBb484eskfoEj4jXL1RT86",
  "key5": "4JChJCAWRiC3qALSd3PRHZqFaWyn1uZwXVqXv6tsfZMoME9pyKnEEWH9SGVDukpFT2av9px1XJz3jQaJ7sfvNUxn",
  "key6": "3GU4H76WSnnoEe7QnCP6923bjwSzjanVcfendDKhjVGqKQnPVSrBjwpxFKodhkyMNbT52T7FiiWdTaYpg2UAKkLx",
  "key7": "uCDzwQa3UoHuXMEWpHzmT5iXMUg4q4CgyCi5Gpr7Es7ufZ96RpfuhpzSA2NNTCqPnMTYQxtzwWBVmHPPqqhYTvc",
  "key8": "4hiEBSkBQ7fkMTQT7Trt5fagPnLjKzFgwFbCS166RkgxMQ4UAt5AAsubPjWZ4tSTs1EHhxy5pWP4iwwecA2PGv2e",
  "key9": "2Ka4FjqTGEXnLPug5eiyjo3MB63JgTkWHrhhwWWMBwvzUwuCFB7UebZfbFnZNQKqDFXk8pPBN57mN6xcigUL7HeD",
  "key10": "EFFmTyLpzvurDYbHZtuHmmoHDA9nmzVtPLZbRuxCfzGDud6MJGE7UWWx7rnp96AY9KqvD72YFe2MUJRyDBfUYsv",
  "key11": "5LK6FEegZs4m1kJD66u7BKRzBqbmRRWrzx2Yq3bJX8iXCeqhhyFEAfyDdW8raFXkEF2eHruETop9NVM1dMqDZLmw",
  "key12": "3VUEy7V2V86dErichraphW6mpGejxDa2PHMFVvQjUC8G92sqQcTsf9xVovyFin4iUzBD8XwoSWZHqmdv9Q9xhzEX",
  "key13": "43GnJYTALDw3AU9wHGteEytaWx27YkSyTM6i4n6dT32xmHDojBTrm86Pcq2rQwesdqDNwC6xvPf9gx2Qx7wAegP8",
  "key14": "4dXnr1cHY6mvUqgmbvRs7rMAEzZVNYYkH75VwumEYW4r6MvY9XxDLk6G6xf1Ek6AGhTZfwrdvV8krDhMVBcdzDu5",
  "key15": "4DaSsSazD1wqYVPXyEeAbi8SUyWcvrvwncbfMM89xiYBVi5KcMmRX4T155sXi44BpDJJjdFx12CiQWCcXGg5wS3L",
  "key16": "3nhECvjEwxR2TWSKBJDEsUbhFVHLVLxXMqqoQe79ErPmQ8wAEwp7a6u4aUDRek2mhSfX7Tit19suYYUzG65inTNr",
  "key17": "3pJmRYE4KiowCMijj7LaCDk8ySvBSHuuC6XH3VNNpg2Ja8ksTHcH18oe4NQsVn5yqkc1CQpyMsw9iAkKfstP9oo1",
  "key18": "3BL18FiDdSKWzgQpgXMnWAxi7xc1AkpKFuTbe7QaBk9w6G9pwYn7r26NMn5YSanDPeEqggrp72T3NfdCtDaCaonE",
  "key19": "3L6Q4S6kyaP9SWEoqKyFsgo3fm6UMWhjyvsRHUEePFiJJ3MJEPGRFxWQoCGBDCFuBPXkg2pWyz9RY5VuEyS3xTWB",
  "key20": "CAxa7XgezXrioQtbXmuA95FykkHMRwkQVpwWi4k9cEVNTecgTZ1Hm7vEfeqm58DRcytBRwKrGURknMUpkhu3jXN",
  "key21": "67DP4jsJYwCVxYFDkgEKwpfoRtvc5v6GrGxd7646mWq538QH1HYbPHm9X1PSBMh6itogzr9vXVGUPY9eZbhn66dN",
  "key22": "3q13AVGtBQFgGSxQGgk57iNwvemw5pgSg7ZjfksXNHXXG9nmmUfv49fjKUV8Z5B2abbezRBE41peGsFFoxKFNhpR",
  "key23": "4WUEZVom7hEKTuqtHtJSVeyqEFZXCJzBbkj7d5cVjXjpXC17hEAJ2oaWKqUreo84nb72WL5VSukJwPGNeRvDfagL",
  "key24": "3Q7e97GP2Lu4pkbfia1rUfGKzDUPQacByzpEr4qh1c7WYJQcQntn1bN4xMFKru6oVDQg3LKKNJHR3adNb5yzs9YK",
  "key25": "3yV3tuni3uyzS7Hv2F3GYDd9D1J7otqp7nS8TLjt9xmtawovnY1AbtcqXwToYP2pN5LgUuyydcQQKL6U7DPDv7sW",
  "key26": "2bCZp7Fe8nrQyhUW6WPcn8q21tEUz3dHuz69CdjE9xu7YHCHo7AyiBJjUfyA5VRL9CSFCqUmTmPgfmtcUb8CrR3s",
  "key27": "3axTXNyTXCzZ5bZtsDfCZrGXVFuRm9mAabRhiXcgqZ4PBaAzAMFA2UcpSsSTZ49LUF6TuPuTH9NSszPEzduQEPqh",
  "key28": "5LPakoAygAKoS7Q5KnrvADck5xwUx9qm6mbGxdkNjzJon3RvZre44BHrx281u6Fi4VxXUfnzPVE6MfhKFgwAcjgh",
  "key29": "3rD5J83DEeMFESVBXy9PhBzXR9utdviuMtZWqzo9Wja8m3gXm9qDwzF2GMHeCCVvphe8aD8Jerkcc3FLixAX5H65",
  "key30": "3FaYyXtQN7wPpQs15aGQD8Xv7Dsm4The8CUxTTGCKEPQu4rSRDExGh7FdHsZPigxe7WHULjncsyFy3bLNJxvJsqg",
  "key31": "5RURuSq69FtW6GV1kRDz4j6SEk7e67aotvVS73F6x8eaKVjvn4DvUpyjgrt37f8nEsVtTADf3Vf3aHt9VYEAKte",
  "key32": "44fBnTutv6MWv1y4J4HciXkN46rPLKC5ixfBfg2ieNvSoR5FykjPQ75Vnz8cktWgdqtUKtSZr1yE555DGKzYcqiA",
  "key33": "3uMd3KP1srELw2Y7wGtG7PLqTkqG6toBB5naVuDjic9eWC3uvi1kdvUxjS38opxShF5Weej6PSmah1Ku4bfyucii",
  "key34": "2vvzhPrTSiYiHJPiChfzWcvNfmB35p1V5B2Euy7vYWwftDEuZdwtoLYbLhVnRv258Yngm89e2bQ6DoteH7zK7BWz",
  "key35": "H3vq76DZZXQtH21vPveDyCSxYUH7MCoPVzraHZSSGsTctNMvZefe9C2W3VFJ5VSUs24iCyErN8XiXjxRs9yYpUx",
  "key36": "51QS3cPr9D2M2C7Ymo7BKFVtzRDa2bFVx759ujuwtvFsXRWSy7wYVL3C2AeXtBhRqaqUpDEpNwtpcbCV3a5TQBZU"
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
