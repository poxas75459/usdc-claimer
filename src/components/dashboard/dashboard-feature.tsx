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
    "4UocxG6KoWVyVDBE3SWELHBkDh8fAfxRR53o1qBFhxACCjyH41W3bNgrFGrAjo2kyTdiWrN6kiZk1jzvWjBYYWBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29G2LGNQXbXWYzWujxojmKTst83CiYGCjuWR2JQuy4VNPeSZgm9KeccYHyd6QgTk4zNZQdnuAm19jwkT4gAdPzHy",
  "key1": "3rKBWDDTMJRzhacvSXZjuuTdv5ywNK3eWz2Ve2P5gjv6NKBYjoq4gBD5NtCdQ4T6iNc5NPfmRNkXFojqNTcUa5CQ",
  "key2": "5RjXpjnGKzY5gY1XKKKMZH4FjduK6jsC3bhhxkdYJ58FGD3c22J8yUBRLpUAfLye1v4Uz3TskNe5RF2xf9NMoZLR",
  "key3": "3qFzGReVf3KD6TAZsEt8XZRS9uK2B7Ek4VbtXybQUzvAopb2PTJr96JKPpN9doTbS6z35Bmf4yMmU71cbsgDp6D1",
  "key4": "2CwTJ8qqZsWnugqg47bQhRV1J99nKiWhKm9tuq3AJ3jx7jHJUwpKdwQja6jmfdF9Q72XpwLNuaEVdNPRTuBCsZJ6",
  "key5": "2D431Vai6E3DAHsHvQkw2rfW9N72rNvQyZ5UkCdQFjtmuLE7LqnKvCSMActKhdhHkcgkkBDoxS5WhEuzpMcMU2aY",
  "key6": "48eErXGDyLegsut1dNyNGjWZUcQhRuP81wGupCH1KL5zz3bBddwKHu9szHWJQtFMB45GpkR6EgRHuE7VwqsYqowL",
  "key7": "3UPc1EDVUwmqyUq3V3vkUGK9MTiDtQDT8kph813oweo1Gmi6M9papciZzyKc4o8Hdyb23LCpMcUnTktypywMbgY7",
  "key8": "4sasHCmLfd7rMkpk3foUgX6ejrpVfPYMytZ75PrtACr9KFUs7D8ndhZ4tjQ4fxmWDFGp7tEzcqv7jZR7MJdREkTm",
  "key9": "3sbUso8zQKfU6pqCnR2jRMNWJcJsmN2fj1NT3cdHS3Fr7P8taw27xN34C2WABrnzS9s6FjZYKBrYBvrogYhLpwcv",
  "key10": "4oEQ2wzFvJQ2UzSUDnzHiGjbGnUN5MTzxiWad36TKqxmD6WvV1cYxusC8ETCGDSYmxSMwTmr43RGPPrKyEXSKyMU",
  "key11": "2i4vPhdZmwLxmS7RHyb3VcHu6oqpyNwQkkEHAZ6eM4WMWpnhWpbNBzuFvLsGG2cfoUahVF1SDWsTaHiZsADBLayL",
  "key12": "28MxeU84dc6Tz3ZEp7HS7Dh4CLHY8JfYTpbJrLH7G6W9XqquBjJs11ARxcGZCuuvmN6M7dcPSm6GMqwnoMkEGnQL",
  "key13": "URPrKmfP8reThRqPrndBEVCyd37fJ5z4srHBk4cNLvwZd5jvXbFYPfyoXsTD6diBQjRbKZR3PatNyBwAqQm3VLt",
  "key14": "46QdU6t7dJHmdTtyFcsDFByntth29rfQS82yQTXj4a99LZ5m8JRQP73zuhixUQpSVKGXDs2RSP2MS5d7y1qm9719",
  "key15": "4roAbFcbATLupaC3brD64kDG1oWJYGWsqsoi4STuS7aorfwLZ6Yj5SvxfXLoBohtRE38kRBwPyNH56Cef7BANeZN",
  "key16": "5ZA8foxYyt3cyS2f7cmgQ9qefAvmyjHVC7qxrHi2ay9iXJJaijWCTsmwpQUwsn1CR9x9Zw9HR3fyhvr5SyP75sja",
  "key17": "24qQNxQs8MmW7kqr2iJe85Yz2P2syKDiu5Mh4DYz6QtuRLS8aMByaN8idgsFN91oW6YYQVC8sRwT7PvV1fPsMuWF",
  "key18": "3fir1UXAtpna2jU4KaVZXKrigShbuRQzW6aegXTU9udXCosd2VrfSkBw3SLEmYEn64mvKFTLk7D7ZTJ95sPhiJNU",
  "key19": "Y7iVktSxDEtBx5KzaVyPLUGjowUUewe7ZQc9tmufXXFh9zi2NFcbpbefPowZcb8pGd7ezmykFsGwdnS8ob7GqYx",
  "key20": "4rBCu7E4aUNrYjBgJXRSvKwJVbs3z4ma5WBuR3rvHakhnbRdk42uPgdk17xgCihrSxfMjegedtxc2MNgkou8tFXr",
  "key21": "2vvWRNor1tAudwQnfftFkHhc6UeuCpLLYUByYNn4qhnQ4eox3PFtGzUwxc2Xi4RJ4Ksn8bpbTZRv1VTDYZSJBR2X",
  "key22": "4oz5PCruRMDuDiZrqEgP2rLUwzoDF8YYJz7i9xZCMymPJhcuKEdBhybc2a9wBBr3eeDuAcsQWdaWxmheftF8dhG2",
  "key23": "k1K3F8XiEDi2o6hn7vtCDKQCNNsUDTSPgJGCgAQxuErqsjphF995sopgRa9VX1tF5wyCUSq6iqkKZvRakJMKwTS",
  "key24": "2nUqeV8NnKc4W5fn4ALDPuyPqryNtHfZGWSfEJKSiNymMdz1fjenmru4MLW6Sa61wiiSD9B546Bmb9Lz5zNddwuE",
  "key25": "p19CLbhXckBgmY6sKVSYgtvEwZXZRvzhnVTumucVtoYaHVCLqAP55jwGaN6bwVpByzwrKomEEGcVUJxGP2Yxx9z",
  "key26": "2Ly6PuhkCHkP4jaa9U2Xj3GGh6rDuXRLaLicoEaBmcwJdYJcMRxPVL5zReFi5bs7e71pX88qpy3JRbWqiqGqfvFW"
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
