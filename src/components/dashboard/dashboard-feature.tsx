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
    "41KkNUrLBC9uAhV5VJtM4KL3KQ8axhoTEZHqtov3vzokdPCdktkbDFLvTu96Xa5f3aEgj2Ym6Vis6nzmPMVRiysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MNDbJKZahn6Ma6wfB1ApqcdhWHm9gPKGKbrY2aLUBhcetfzWm2s9VHvbWxwfvwkRHcMdMDDUTNBcUf7ZsJdfdWT",
  "key1": "4dSxKsAjEbDKdmmj366PZNwfR5h6LGx8UK9eGqGdcJUnYxJtFZk17pbgajVdxziFqEcCfSckyA4npHqhLszHGEGc",
  "key2": "4xG9MCN9r6cgLYXPs2J6yfXAmj8zUyU4fuYzcpXiuL61eyBLkfndWKuwUN949fLW33jAhpPBa5eDoqYFQMuqi8ME",
  "key3": "3X995nQvkaxhW6iiaPMHVozdR451zRZeCYbX2UwG4DtL3zUEGbGifrJg1drNxAfifVcD1jA6uLAu6ErmTGG8DFbT",
  "key4": "5Fris1vXCBXBALzLYsmD4osZ5Bcq1vqnKFgG62h746rYciT6M1jN9omVYhrKPphb2tqG1ef2JmRSTtKQQKYZENqM",
  "key5": "MnjzWhwmwiym9NnN95DZMJtq9r2yRyB2GRjJ32EYpDqgES3o1r8FYyCfpgzTKF8VoX6kh11ikeVvL5t9VhcmXE8",
  "key6": "3KrBpyJU2bJDpfXg34a7KYSdycboyc1sCTCnjn9RePURZ1QsxGmppvB9xiaQ6nUSZAgNybaEBuUk97ADcGGdXwJJ",
  "key7": "8RFZjNWS72TcL4wy4zHYLmm1M4j2CjaeU3dYjxB2gYh6gMMbabkvBc8Jh3n1dM7HLbEZLhZADF2WBPGkAwv7TJT",
  "key8": "fHBzJc7BwBaXv9MFc9pdcqEPU8ibXyAy5razAS7yrPKkgviPLvWqNTFVApezjBMJ8xq1ukNK5HMA29qLSVhaMzY",
  "key9": "3TVizCgj5JjPHysSXAcY8tXkczPA7wPjJYSJgkjgw6LGgxhZs9D1ibABtCXh4uuuXKxgdN4NcaBe3tWhDWCzSRBN",
  "key10": "3o6TQ53VfdGqBK7GxAxiXS9zgjWk9Pp4XPcffmfgNzHFNngGZEYjhENyFFFGi33WQK85RabvcDaMxvLBsL5vEq89",
  "key11": "4eS7wro2uMwoMxbg6CK1gdtxkD3kK8mZjUgCj2PubnARxFixwr2rsyXNVmnPdFVYHcJvd8aEfBLptiQoLizeV1MX",
  "key12": "5kvrf3dQoyFHSPzA1eUG8sXX3gP1NchQznfoDZiMpWgEf1XvM3AwbdNP8TSVB7zkvggNtEpjnRPvWa8A4bHLEd8R",
  "key13": "4YiS8zN27kefEBXyePub5yYywti2DBpcggyRCXww4q38dkKxsH9H3Nf5WnRvfWnhWXVg6a7ALTBvLVWdCKNP5BeP",
  "key14": "4RkxBLoHkrDAoTbt9arAqPURdvwVxKJeQJ8DGeukcNi9SpWaVuqtdACpT96DzKwoDvPoSoRjTEnZnmwEso7rcMEC",
  "key15": "4ZvzRuvyRFUTXESuE1FA5Hj4xek5h2Q3Bm9cGFEy8igZ7erqeXbQjYVAGGT67mzV8Ey3qE9ANVXKVq6XAsV5FbZ5",
  "key16": "4wRED9FpUscRKiHBSD6t7JmCM6ZxHDXsBqVuuPq1jo3TG6iGhsEgGSh2ZRTN6TN6RbPCnNFMgv7CcmsJGrQpvKGe",
  "key17": "4m1h38VWqhpANL4euje2fD4bVbPwKdDDvDDXym12cTfiFRjvnAyiMhD8nKuUPHdR6A7sFja2jiToqFVVeHacN386",
  "key18": "2oqEvBzz2jbF4uxFJX5ZwWVv5pbGp1fD58DEiciTF3Hv3RkE9ED7yd22Qh8XxTWNdGJeD89UjtZJ6cEYVAHNNjDN",
  "key19": "2dM9PtMtCwDw8zk1Fb8mbuMaZZWxmHnT6G9HneYywrmjt5goqtACe5Arg1r7sFv2QZMxFXVHVazdcqfumL6vBZSn",
  "key20": "499GKD3ti4UnLAha4KmJQPVvay3bjn3YbrkyrKRXtuvq3g6XWTadkcXd7762ErovbeuJwPHFcyEHcyguz6e6wXKp",
  "key21": "2A381LRCbpUzk459FUMJbyQnnaZ3Mt6pzfE9pdb1tFCGBJHe9pcdjLs5VmtkBH12gZsiV2Gkbp84W87vG2ztZBWH",
  "key22": "3jV224nZq1PSrq8FCJGapdf1GBGD5mjY2YC6Pz8YcPYWN8QBzbrshwQRLmQiZZsw871X3g6pBFcuPkTWoV6DYHms",
  "key23": "5GCXg2CMPWRuQcr4uvE5kV5nv22ELd8N1uxjnvtwG1UvabyZR7kzDAxWTUQ2gj17iumJxPHEc4YvHrcmTSsNNrxE",
  "key24": "2Nib7nhnMbUXYhZdw1aFxzjtNJ2cM52xE2NXDqqBn51TyHup4CmykDvxJFK4HCG3BLRWLvnss81nFtCR9EWg7Yie",
  "key25": "WojydqSbNvKUCgbTGt4gLuS5mhC27Si9aaUbdXtSTPHutxsguRPUpBiM6x5xQCkk1gS45DsHHFmyqCtsiznKDn2"
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
