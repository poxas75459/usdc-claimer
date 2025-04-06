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
    "4JQn1oi6VDTigr8FiwgiDzoHCPgcBdSSTj6hUPzYPHmfY3MuJiRux76xSMkzikqppFQpWLGRkeD7hn2LxKG2jVuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1mpAdCArZwoSvrwRYnUMtXbxS4jJEnQ7jqjxT99mjkZKZ6bAq6h15E4WF2AtbXsQsGk8TsDGkzNKNirFZpJwZ9",
  "key1": "2NFkSHzW2ZYb1CcjzpH3Y9tZEADeP1AWBc8y9sdwbVdEt9NJFKR8ZdvYUgi2mLAgN8VoQ6Lv7R6dVY7HeHvriMGJ",
  "key2": "4jfUTSGgUXqDHVxL59ANUiD2j9X4stpDkxNWiuW5dCfeJyJ1hoZ9ksFArUn61DKez2occE5ttmounJ3hbvsQi9mS",
  "key3": "AczFKAWPTGxaBXYipox6kywn5Lh66zh6897Gcn153KAMWyxxm3JTCobhc7Ek83NJ22x2Cow24zDNyYa1GqpQd3W",
  "key4": "4zHgvUnLfR28LcpA9xtT52RGnRh47WJgJkm7xz78T2zJbwSvCiYMGtvvJhBr85xeM2GdVRGRZnJW2EbBpy4BUwTT",
  "key5": "5eTwEBJpJzABuRy2wHmofQWKQxvZYjxwjoTd6F1BKWfT5vW7q4ve4jFX6xw5Le2vWDnPBBy4N5QU3XDeGYwHFX6M",
  "key6": "2FS6K4viRaLepa7kKRAbQFRbXZtUmooafhdVyL33yY6Qk1FdCHRLP6NCi8Wk1dfTL6aFyAAjuviBmug6M9F7rAq7",
  "key7": "4ALRKSUh6PLw2aJ4xucWKpjfupEQmgCmzetJTuEQdc2tiJfG7PnDxXRZd4BEfvaeZUVDA5pj2bhRzprL2NmDNrs6",
  "key8": "Vcds2YUf7UnL76Zp8EmSyMLCweaWE9RUmT6NNDZtvap4JEuCw5kGbRSPDiRzE4XuQj3gX3kfsFk3CT3xro9Exsj",
  "key9": "rhnsS5eyPVvJJob642NJoQuoMpoW8Ltxcjfnus4ny5QvdSWHZdDfJ3UFoVocmyM1yzigQtkBgu68oxdRmvCUiWw",
  "key10": "3T6AFuYdpZzDCRQTPSfFpoySNA17MvwFWDwKygaPikwdQdZeAq9xfB3M3eHdERpecX5RvnKG7gFuN3Ly3iWXb9MG",
  "key11": "o31rbkHNUzWHVo8GnGx7LeskueorzEShHbCgXRmjmFKowBUBAk2aFhpRYMguKdWyPmcMDfX6TGGP5JXS3J1JVQX",
  "key12": "SABL2v7sHgDyRoViHzJDBj7BssX5QduoVYgGnbhRWJcV9SKGmddyPZ9ngZqQNPSoSib1JczLNtvKs8D3kdhcu9Y",
  "key13": "2zCEK5BwDPzBzYNqrPzb49mwVjp9rfSZKDdWx7ZvAcepR4h8yY3XPLUQLoUNtnvaQswnJqAay43U5Wy99jdPNn36",
  "key14": "3KZdS3ji1v824psBCWBVxE8KcugNUQq1V8pJ5VZNJkXCj31hfR7Tpd8GnCxLJAtsgGFc1HJmoP81yFmXZiFGxpgn",
  "key15": "4wMacbZVJYgeP51fCUFyC9H7WbJBUKAtJ1vZKHDsZ2j9gPhiVFd9Qa6xmS5STmkGV3q6Rh16g5vLtyfmod5EtdgZ",
  "key16": "mQmRLgHETwaF9iMLuNMcyhbugNMesrRb3jFZZDQFyLqdnjmK9ohHrizHpR1oAKSANSW8Wz1t6xTeYbwpe6AyUdX",
  "key17": "4kHaYnaNbrXqMx6h9Miwvk3jGLwt7TTxXXH5n3nM2Zu8QCjgKiNjXDodPo9iMYv2ZmbqaszFFFUBqcpnpwXecQVR",
  "key18": "3hmXFbSBgMJqnM5amkURMMB3MLEoS4TDV6fRGAuHt1EkLFSHhwnt43VcpQhTsnZ4MjJdRFfbjZPMB3kWSbKwNHjH",
  "key19": "oUgSvHGj3aJBy9PjHTxJVvgE87t63MF6FQKDaBq1pfFsafVk7G43P2aJqrWGPmgLqiDhF4kZTd5YpaDTuN7LvqM",
  "key20": "4hw4TAavpthcbUMmrxNVLGAnGkRt2USjGP4vpcME8bJwzLYVXKASj66RtVGaprB8NF6v3BXZ19cRMRwZq5VN1vzN",
  "key21": "3YLhkphsYKu45cGfEoqbTRmJg4hihxup2rs8ohteHmTqdSY8WkRVZ7oU54YXE7DnMPiVh8Wjnfv7BYbDwDuAQMp2",
  "key22": "4DiZuURdwKALeH8NkRRXThqEydBT6agicLRuGY4gQKSX4ZuWvQ9Hbw3WE5rBUA8F1DS6Fxno7MHjt2ZcTuKCFVdK",
  "key23": "5rPEEvszBKBezrAed4KBoYeVqkNB958jSoLoJHG1Y8yt2wwQzgGdpoBHb2AieZjmoF2QsHPRzCbdBbNbNpiruskZ",
  "key24": "25RVv9efitzJxq8pz5yfsQbBDF9AXMtsbzWRKX5BcUeWdFzTFPu4UohHjJ89AC1QrvVbn46SE7zCmWCYgad5nekX",
  "key25": "4X3TGsXacT3EAT2knHBrr3wBt69jzXRTHwyoQ4JQS4VCmHQ78F2e3D1Rzm1mZxDM7pmiQjS1zDSL43afdGsbrygq",
  "key26": "4iDZzjo6CyMTtfuagQCcoJAzs2ACpm7KHMgm7YqxUdb3grwGh6qc8V1i4DgbGcQ42EcsV7yexw8aghjLDYGmMbJ7",
  "key27": "3AdPUUy1sD91VgUBnaqmbopQG5LhkbmcmB6A4asXj1QBQyVWNCGAwoND9whv8ddZHtF4xzfSQ3aeH7Zx4oy79nTB"
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
