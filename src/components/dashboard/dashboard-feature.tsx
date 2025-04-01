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
    "47VChk1vvPyDCjJ4WrUa6BbD6kTjbin2WBoGYQ8ZcEcJtrztPCzGeQaQTu6vUwcMCKqqpWKfUJqmYmGHsqV87bqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XT18TcyZaW1zSGZGfGAjzjsvSKeo8copcPkpmyq4dNg4DEK9jXjiYzsEPUZJASPP3jLCKyYcQpJtPzpZXLab9P3",
  "key1": "4VUepad822kNaHF5LfKSGdaQBib7U5MdYhGQkRDJmdxTrwexnSSVD849X9p6VEJZzXFzK3nR6AVuXrsFuq2LkELJ",
  "key2": "na9RhLzLB2oNUdsmsuUQ3ivH8qBJSnjCK6cz7TmjvRAPvnXBGLQEQXp2tuCV9rWTpgn6WSFaKNBu81LnATaEqJq",
  "key3": "uYfxhbiezQfz57MUaokHWdoN2nt7CZSz14RTTa4URsCe8WJsg3m17QYPhZEPVxYE1XUjZFMvLdqmGR4vqXMBhgY",
  "key4": "463KxxdJGZUgHJnuW76DeQch3kqQF9frPi6vQgJQka3CTaXCdyTNxeukUgSiF6CJY2dXwsG3pFp2HrZthzo5M7Sz",
  "key5": "2p4xdd32Wb2vdBswPjfyPGxMjnQwLc3do1ac8R53bXZHfKNsoE2o7CWukTmZCk1iAKggqmFstxJAG6pzeBeoE86Y",
  "key6": "2a3G3EYCH59oVwxZtaNNqpYhGBumdpbpukBu1PZQWm1bADr5XuDKhnZq5omoBzNQigDQwsxh6Ke6yYV2vRGm4Wqr",
  "key7": "5Y7zuqhe5HFNsB182rtD2MbFNcX4oaiH597NAzMMzUFKDXUBwcZDuZhPD7aWVdbvPK1Tnhv8XsQ5fgbG4uTWkZ6B",
  "key8": "5Ym2ebfBmQGsG8FheH5N67D88YFbA8XdEhMQjxa7Z7JMvUpHzhV45qK5QxVh1jsKZXdmWobe7f5Cqeyit2RZotF",
  "key9": "pRG4Vf7PCUb1SXin2d9o7omu3uxXNDKyuaRCQAiqAxer76Enag12yrQ2AKXJeV93rYmadEk7jFdEp5NenPwcUrk",
  "key10": "2pR4KjJL3LJ1dFseQYbMMGujMxUbexGhWKene2nuNfd8DcYjanSeFPTrVY4qmwnWfnfCjJTTxNHV8sDS72sNbxGK",
  "key11": "3e5GypXVWpnubKim36WNdu98roP1LyUgca3wm46nniREXLRBFuTbpGToXNyhEbvf2ZgrtCfZM3z2hRrAdirZwGfR",
  "key12": "2Tc68RHtC746rU1mQ3W2GcNTnGwXMPd66oQ1Bs3AnvTKQ5EviTRajv9ho6aaPmXp5mvSCA2onRc5ThStjcpvJYA",
  "key13": "3rrb7cQUNJfJ6GDMMYXCTx8ZADiUfe54uMLG9PUTeTtcw98WQzDqnLxapYPpTuXn4KvbcP1JpasdaUGPJCQvXJkH",
  "key14": "3j5SyEcismL3T2SFXsUY4w3bWqfZCJzHCX59jUAY8GVg9WEMSVg1W3EBqW3YZwKo3V2F5caoaMVySUcBYXB5KTiZ",
  "key15": "y51bZ9PZQwrPYphyKhS2a7cX3EWNErcCk2FvNdoXaKj5UPBh3V7tS8QvGqhcuRfLddkSPHupNcQCJcAS63EXG2b",
  "key16": "33SPGtzKdkePCjgc6YfapUdALzx7EhLhfiMWZE23oCTaGqAnJoLB5Y3frMRTuCLVMpHsRwfnJ6SuKfcL6E5TYMDG",
  "key17": "49wLYpurnLP27EgofEhGSXEquEAKiqWeDBeCggZfJJjS8qHFhtU2ceWN2did3i3RTQUmGmoP617A8ZozaGWCpmKL",
  "key18": "AqQUwDVrwHGiF9a43kQPNCLaGMQFs7jw3MA3GUg7VMyLgvJDuihLJ5k7XvEWB8x5WzrVMn8xGnRsUep7XbwPCJr",
  "key19": "25YWWQz1X4ziPHYQvpKtq2fwJKeujD8o4qQp7BpyZnWuaLMEpCMoAJrepZDcX4Pm7dJHJ1k53i2cnS6UL95Ar2ni",
  "key20": "4A26JnhKQEsihW4kP4dkdn4EFXyG9BaQFtYCyxie6Vvhc5aVYD91oymhoAhBtfYhtdSD5EnHyPgFioyhrzXby9BM",
  "key21": "5j5zHEPCwb1sS89kFczLnWxEiPG56eSpBYog6Sp73yqHNzVumLoTULdejdsoCa19MoPoYKrX58GUvYm62GHwQkcJ",
  "key22": "32qeUrn66R3iYUkPMQeH77pLM2qbBuGqqwXbQ5vptUJzkz3y1L3pTn8Y8mvDbPmc6dMUKCix9pdRR5xo3v7AgrWV",
  "key23": "61TaSHG14qYGGn3mErk42hdgBm94Aptcq4VxUuubuAL9z9XfCEvGh6tWDtTGNCqW2QxbpdyvQgh8oXTs2WT63hpM",
  "key24": "3HXbR6ShTw8uz3hrfdYyKiXLd5cjFYbnhQi8wbaJXgbgq1GRN8SvB4XvkXC1G1icLMuG88wAbAA5d7Jomhr6Hq2A",
  "key25": "4K4QqCF89naJnL69TkqnHZykX4Au2CEsbDxftHCFkSS4dD3sSPSCUFcgeQJdcuXjTbvCTSfknwMGCsZaA24rvN7v",
  "key26": "rGin79Fxn6mTJMcdAhzhtVXy9URQH75Zea6NRw218ygddUTzjF77GKFMfT8ZKHHPcGeTPq64VdZsBZofqtWLj65",
  "key27": "4X5spzbCh168NGzGSS1YbnMVQAYRHdwvKhFski73ujpPgcZhi4hnbB5VapBoeVD5zSf4f3aP21BSb2LUBSeYmE29",
  "key28": "2VLzMzWR5pBN5eDdNYfBNfyLPyk7F4ekxZTLyHzrAxgVJEBKjWvhiFuTkyEqyKqEt7MEw4n5tW2WobSg7ZWgNQec",
  "key29": "3PVserqbiawnocNnhhKZkbUJHxqtQU4iCwmkMcJtPWDuweCZzNVNKyP7A1W9Vqxw8tzk6p9QUEjUvYKfdRJnZgMe"
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
