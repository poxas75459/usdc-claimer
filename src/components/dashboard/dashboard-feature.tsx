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
    "37NEq2AXKTnyjBkQWKstZYWMnWJsTjnsqye5x9oVX5P24fSDEDTgc2GcY88CvSifv4VpZfw83XvmN8CmaJZVVPez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NHRSmLYbfDN5UUzpKb5fUwidZU3A2xLvQw6q1woCCnsKHA5fABDVapbdzSxmBriHa6gGw5qpCsufqGdfMniLRy7",
  "key1": "2DorF4CYXWf9Nqgn9yRJYmciUxV9J4XFCAMigRj1iG6UYmQacpcMfW1r5GhTPMo2SXMenduANYL6WQhMeguXdi3H",
  "key2": "3BgPJxVb3AUVrpz3mKQAyhCzfc1XihZ7w3YQ9X7jgEJRMGyyy2VSkBHwWhwGz7aaRs5HEDRhYdnXhcEJCqEod9md",
  "key3": "453PHLKTtBuRJwLEF4xXFZFvMkwaEvPRnVxW9m1RyvFzXzyJu2HpEaWW1dJ1PHAXTnUpjwJKi4wE1K768LgC5ioF",
  "key4": "3pyUbPNGuxWP7RBvm9eY3m4wbRvJyaFCaV4M7DyJUY2963N1vMgZbKjXFETYeLVoYUZuNrWTL6CpuWPq1wSURVxT",
  "key5": "24LPUnFPmsPibPGxgbwx3a6wn5j4fjjmkZuuAw9dv6LKBXdan6fcLavwLgQeKsQCRZcVtdcjdHcudMMtK7LsEo4J",
  "key6": "4SPLZrGt5L6BAD6wWbKrbsADbvintmxWGHuGyRZagS4CvqoJGXGUZgoVQ1bKgvMC16KcWVxGPdyZJ4E5yuQdCZV1",
  "key7": "2HQwRQJCRxAKVsY4JCww15VtiVVBf3S4848hV4WkFWdKM2y1KyLnRCjwakMYSqGfFzC7apqd4bMH4bnSR8hKw9Vt",
  "key8": "43VuCTJRV3dLUAw5caEPKjrirDUVLX7omTTennofgKv3qnBEFP5UKyxGur4GKYnRqYQXiGFhdw8TTiokKn2EebAG",
  "key9": "2DRirunPKKKLrqfzmANBbhnYUHVNRyoJpdgJSKpG8gVYrP4vhugPrsSTq6YuB2LpwV4nkVRvjHwrFsgfv4Lje8rh",
  "key10": "4Ntjr9Ce1NzL36dAj5eLgBVENWyg8vEBF3SuTisEcrc58V6LKyZ14YT1gtHK26NWYL5dPnGTJXPytzuHUxCeTRCg",
  "key11": "2pzNFzrUVGmeNMHCQYy2u8JBKTGS2qTAYBe1DQz3Et3RCVZWEF3JXj1WHKsdaFBmqPTaoG7VXQprLYtS9oWYhVst",
  "key12": "5VjtzbqyjtWydYg3fU3nhCC5PDhw5vV4ypkMBQwA2frnCjA4KoaVGqnn1j8JVqLVtskNfw9PmG1T6ZbwMZCMFHLo",
  "key13": "5QutHfZiP2psxiuhvJ1wb9CSEFTuuJD4MZLD4Can9P6c46x3NXqCcjuv3djD45XiXDG34TGpooEVK6W9d1iv5k13",
  "key14": "5XtdbZbvStcPRYiZs65F7sUxCvDPwdP5gBrA8mqprkPKqjErBrwas2e8MD6wkEbxTuL7M5B5pUdf1pfRJ3RzQBHZ",
  "key15": "65VpCiWx6VNSx7M6qMXAJfe5JaJURgQyBbHYv4yXYN8u3fErsZry2BJSZ1uhAkBx3iinZryPRTJxqbn6idGuxJBs",
  "key16": "53RXgxdRv3FH9BwLiDQd5JHZcBCZ9TYkPGkHoUjVF8v9K8DY2VsEx1VewN55YzpY1BApcFGmDRzpDrf9o32sgSSJ",
  "key17": "25VLyLrgPyNy7QFFEQygsS2mGoysfDmyTCacTWrivr4jmQFgDQQac9i6CrwK4PJXUZhCV2y9EBGvBVNMMoSgX21g",
  "key18": "41tWMPWsqHjn7qzo4BZBi5SNdBZh3GpxcZe8d7srjMVxxaoQccg6bAAvaeXeU2ioLhpXMessNR62bTH4FVjUfZx2",
  "key19": "2zbZLzgYjDF4y5oJucE9AA9YTUh83Ns1RCU8EQxk1RakMnSAyF3vLB2BVcvVc7gY5XQ1U7wK9yRFS72WgiJTBtAg",
  "key20": "4zGqonfqkameYTKd1NFZ6CniaJxaSpt54ajY5WAUQnuHLkELEC3Yn7JU8qftbwNHs69op3YGSLTdsgvztiLK3SBq",
  "key21": "4L7474Dzw3aiahhy63wUdbMX9UVUmM4HpW2fKVTeCqZRJ34Ln7eof66BEo7qejfGGRzV4pkkAmJwUJNWogEaroML",
  "key22": "4VFy9V5zHat1fbfFJoR52qvKgvmHjFGPjgGnYFyjitkmmYGD6sG59HrUHAnJP1hayFduiSJJKweA2impHgabSzKP",
  "key23": "F9uhkCD1ZkJvjQC7AszMSP9xQffz2FHLzb9kkZikcwiT12xWjuiZ3XQzettyf9GJsKs6TqUotB8Cth3BGdFKG5r",
  "key24": "4GnTnxAC6TbhU5MButUTfpbWuozaLe3HwdBXXffSWsftRsyNABy2uzmfC9qNcPLRCjETB6xSTfbuREnJ1eyXRFiC",
  "key25": "4ghZfznoQYD6LLMkcGMPojH13SCrXQrbuhgDi7gqQUhCbeTopyhTZSvHsUjqii58LozMNXmewMqSrVFCikaqgiTR",
  "key26": "3rURMNuJ8QxYxxToq2E87PXj3H1tUzkRebWbR7CaGPuC72Y1F3R3iMaqTbiXe35Fxnt2SPkLAVAh4nr4dMGKZzrJ",
  "key27": "2NFSpzTXbQQZ7pWBgR7UAA5tCEHAUNirRmh2sAmWuSLDpynivncDJgSjGNUANhxe9TWSpjWRarCErsYmXiSDQcu3",
  "key28": "2rZrVZS9kRqUzzbDeUhpxFzGPJL2jicyaVwgRVToKVnEf7phUmgTWWM2eGUgEgdD4BzhbBer1rBCZqmH4tX6pEVq",
  "key29": "4RfcyweBSrm6hDEP2sbdV3ivADs9AFSgfcDcNB6JKpDQ5R7748EWPjG5autMSvFMPo4txbpxBGQhyJgTpgy3caBv",
  "key30": "3SKhD5YFMpAdJGdmub5tEsg4XekBqnCGssQJyu3itGdVP8KRb3XKgHj316vA6EAcmmrEctiZAofPXUEDPjBmAxJK",
  "key31": "3LZBatPEuDViu2fNhoS3teveDFxjLgwMLSdrHwAAg3krtShdDTt1QCBwFkDTnAt7846JYmWhjSeP8nbQQ9jfme46",
  "key32": "52H18rpeVLqN3DcRcbB56o68h6GcaKARLRVvUR8i6HNRbsDxZq67eZBzT5kLe61c68kLjAazm7JwAZGGXzEZEUXk",
  "key33": "2wUwAm24swmr31XcESAYy2hfCbbSMCm96vYL3EuryohSZByDQ1nByxBSSA1YXGDf9jNMnZNFkcxEUjvy5B4E7iaJ",
  "key34": "yrJWjvS5qcmLrFhjCvMvMNLETTZ5oFKUdMc9xwRWxygZCvgmwXu7mMbdCg6hBKE8A8us9V9RRUtah57A6Yq9522",
  "key35": "5rjfAK9xkkhphnkELjf7cxfzYyPHcpPUCLK3NCmKAjrssrBYyoyR6CSY9kYgzqtLJxuXKNZx3DUHRnmChRxoTwBo",
  "key36": "aji2FR3JfMzCcQiz5i5n5LB5qoUzQkeokv3yJHkmbmbsZcnLkrov8RiNs1vqwSNqpj4wJjpssCSdpNAvTYy4Nae",
  "key37": "35myy66tcaUBAqBfvVjmUPxB82v4TTxUhZnkVGE21N7JjA9bbwKsdgEkyJ4CixTyqetq1EgTi6exKcrpmtMCYL93",
  "key38": "41KYauJBNwsT7aZ6XaNUuch6WPB6Tf7bdm34k2dL8GjM9StqQAmSMQp1d26SfE9Z9LNcpHkPkrb2W6aCTPbLs2t"
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
