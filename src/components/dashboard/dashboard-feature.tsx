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
    "4jT4A37izVxhu5oNgBKAVRXYA8xkuQ169eacuvPxeJoXBoMxSaPKqwQYnmjnFMXFgJsDVJjsCLuNDa8i9cgTzbf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJXNBez11UBnubPTNT8hhdpyKxKYRADPgraBspBZVRuPo3F9LD4poS31Uh4gK8ozV1C1ffwYMiaWYWMurwETjFu",
  "key1": "665D1ZNyQgcYRV2FQdMkEv9bkE2NvvdwLFnQ7AyoWxWrYxiwM7LBcD43vxZXZHdSc1gT1tT4BG9ikXTWE6C7y9qb",
  "key2": "5KAFUchvbzpREJN1msABp1ymsNv5NwGWBYEiqcSR1z2gv6XWRPqpzm3QyDgFuhXSZZW3ArLehVNwPK5iZAEBqP3V",
  "key3": "2R3hkARHqFqgj4axmpe5rTnqCiPodmmJbBAiNUcoXjo5KJfcDvLsefbrAnBJUVjshjxHXtjSPjHgxBA9dNXvtWMF",
  "key4": "3whZG6sSymVvGGDBexrof5r4Gx9JBDrxo2oa9vYkpPt11dSAAsstxpqdAaWh6SWHCPAHmtCx59virnXnUJ2HqgZT",
  "key5": "3tChBzTZgoTdemfRwx4BiGf7p5PA1gg8b8zrDkbSquiUnw1juvV7CgAZ1DfUEaQA1LjAY38XQE5vWaMtc1WqbvoZ",
  "key6": "67AY2UYZR6cvicUbdtSn4LX3qYTohZfcrJYtUvAc11H8mRKL3YSLGNJYbpTvvFXZEh353p1ZYuHxnNR1wsexRF1p",
  "key7": "2mXV6e2s22V4sjx4A5w7qRFiQBXPNvgLYJF8Dy6vQtk7LWy9StpKjAajvgm13GaHLFB8sQa3B2frYa9bKH1vL5NG",
  "key8": "3L8rAPvZM18iD7wfQ5ePHCnJ2LkYj7daH9TWcSg8R8qqGsBB3Jt9pWf56UPwXiWinPrZhCer9b3iMWnpJfHydg1T",
  "key9": "5YZWysKen7NAWSY4bd8qpTs5XZd3s7t3gekfL9eQ4x6aNiLqTz6ioc8WCiMdwECaDQBVbrTH5NFvipd7TxCNAdNM",
  "key10": "2AsvpiA2UqPPkT1LR2SG7uy7hYFsmUnBme8Qred2raAnj9pL9U95b7h9idjaeq7ibWgGmNLnUnqMFNnqpFsMZozx",
  "key11": "TSNNiB9qVX7MoEhoYrWx1cXQ75ENRZXzrguoCf1vSM7gih1KFt2KQLmrYX3arnZUAbtN5MWCDabSSN3RqdvL3R5",
  "key12": "3JWfjngcB616S5nrn6PGseEKHh59nBFunfYLoAo888T2zoVnm4RhSRehqqgSEAYfXF6hGkH2FwbXa5ZD31HW7dNn",
  "key13": "DU7cwjPveBiU6TJjRe34nvHkXAPhEt4x262saVU9zXAWowv3CsaCoamFRjE5S2SYSXodEN7yTuMe69nysjQEyWF",
  "key14": "5ra9ajuBqf8LpGwF92rL3LY5UbbZ5Z6kx1VrbwMnhZr214133iruGKzBTAhAyigZbUKMqnd91B6qk7iNQxpUCXxK",
  "key15": "4j5MtgcLcjyQpuDsJmu8TKmpUqj44s15Bu1ezQaHrLeAX5SPDvqgJoh6G6pg8y8XSUhRBscfPdoBoZpZDRPZHU8C",
  "key16": "4jY83s99R1btNuwiCzjtW7K5JX9t5PVbMgfs4mrwhctZRgK26VbfUivzQbQucA3Vj26dHJkbwQamxzfEN8S19MJ5",
  "key17": "2aGcQMVmeVdmwohUtYK8nCCe8GxAeWALc9yC31aQhPq1SjdYc6mnyKxH2rqAo1Fr7atVdUy8wcLTDzvBKp9NVcpf",
  "key18": "4KCrprBPkwLub57rPvktJEYjM5DMSoHj5birM39msZWeLvwmE7egesZ6Axx2jF1wKkWihGeYmtbyjUaizDJJ5NxT",
  "key19": "3GStvjwmtRSpZjvmtQdtQkYzd2b5pbwhZywYpa6rzGiDT8s32E1oYbQ7ELkFNoNAQDMh2UAtwJiEy2qQW7YK17bs",
  "key20": "TRwXcjL3GVGvFwDyHuEJtRy8HqXwnoxuuTkTeqEtHhPwsYiVpquNUDcKrqm9okpvfN1scHSFXisuGK5V9SfjNmf",
  "key21": "63VSbZzVqZBdZ5L2xPG7cAWa5b7A1PtJeVZPZRSLrYzr6zfphwYpwRrLHmhFa3P7H1SdDUPiZCdAcvUhNV7383ww",
  "key22": "5UzLexX9uo77HKcfDmZXmuus8kyaZQtLjRihsRpqVjdn3EPQVSbwV1Rb5cESpWG1i6ReVq3cUQBp3XTkqYnBZDNw",
  "key23": "2pZbvfYGX9GZ5tFo4ccpv4iFD7T1cZvGw4ei4ibDpov8hZg1oAvXbEARGH7moeTcmBbaYmWknf3bkP9di1A28CN1",
  "key24": "5cCDXyHDSSBJ2giGyATmQRianVFzwEzUdnSqcbj85dBAn6m9SBmSrBnqV9nhYwskqvqktPFZsuWwG6pVvt4zfoKJ"
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
