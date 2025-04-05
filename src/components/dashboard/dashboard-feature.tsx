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
    "2vVAwz6RRJdAuYwdp3Eam4ajZj18fGasRayVvzn5KBS9NiXGwoB7MT7JvHFx2TwUVuHTWX1YEBjLb8AN3NiXJ63s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W8WNw6wgmoTZ8GkpCkWKz61ENRYdozkuViJBFhAR1th2TFnbhvipiXBndsks8RAkJrkxAsPi7VQcg4PvRU73oEe",
  "key1": "3YHj21Bty4q9JHa9NvkcUsefdYwW76YK2LEkk4xr6EcqXZgb2GZcgog8UZEkyDLBwqB7QHuTY1QpQ4j1TtSo5SJU",
  "key2": "4Le4ZLXRGVd9Lf6s8obxm5rk22AUWayb7Aiz9CxPUd4rRa4RH8tRGp9pZCoeP9roY5wsFYgwZ4KbjqJ7WrbDBqig",
  "key3": "54curMH3stKb9Ch5pu6ox4HhaJ56rfKh4RTi4nH4mqKkAjqHanoVCHXzDQLbRYU6cjxcAz9ADJmevgho53QHKbXs",
  "key4": "3ra3gNwgdrvQ1Lt8AxwHAnUKzSnLygrQj1AetyDmELmRLtXb56PEEBhviHoxXzDh59fKgRJBKw7XyvF1kUNyDEng",
  "key5": "2yKCFUZtFcCiT2vNiwnuhkvCpazxs1GMZAWMJKpszWnadww1Sp48yHkU4FEkZ575BxzGxqFK2gwkrjC7UUqKQamH",
  "key6": "2jG6X5N86tozf88yRsAhdn71wi883hdcz6qXN8RiRP5s2TzefZB4JNGwXDSxfrPBEX4VYEZM2vEG9BAXfnvcRcYZ",
  "key7": "55D8z6mefgWedNGhySaxHbK7mTB9ycwnMcbAk3RFcwgaumgxi7C2mMqfV7JPjwLqNNqWk6JpminKkD5eo9Gp5UAo",
  "key8": "61DtHvCCbdHQ8pYsQugpNfSzhYF12TLxa4KB511oghnRE8EhLYws19SuSBRitYQ3V7DPqBXMBT1d5ByhZAMjHzSW",
  "key9": "9phj49Hm9D6sapzU2UB7GpbPCzg8R2RSGzoV2Jyk3KcausGfK7q1C8S11z4zVAfVwG8iK6fQcu7zMT6QSaGwezt",
  "key10": "AJRH9DRkB9LznXKpD57T7GFsWNnkHFkRPjRpjcdyubn5KQPczigortQ5xPYLmUM4cZBDPGzV6kyRV4yVBp9q3U6",
  "key11": "5LoPY3EmxA49Fb8NEy6ce5s3BXVoPqxaYuqmKsoAyMxn73vGZnBLdHRZRBQTHrfCnYmzmRfw4Ra15mLU1TxiSzsP",
  "key12": "25zd2k4zwreLSV7Ao5fM6b3zRzxfuSEHB6CyayF6eEosp6zgCiEPLtovXCKNpzjVZ53nnC92pHdoPsdjsbce92Jc",
  "key13": "5Aa3mAdsL5uwLj2PzspbVXSNpg8GenLRehZG9HjzupaeuXixsQGwgqcyn9Hq5YbyATemhoPdazLb5kZHpiGid1Yi",
  "key14": "5Cmq53EVHy29qiAhk98dGht8VRv2VEoBasEVEz8ksTUxKvrwpDLjDifxsegE1op3P4mU1hroYSphamEHbmfwz4mR",
  "key15": "48z9zXTuAZzG3nFEbuj8jRRYW3K3JHY8hX6E1jAnNrRuATVg7LddJ8mqQffHfshJ6DnuC3NXRUzJREC7txGZ7AE8",
  "key16": "5WcL1tvS254EFwqnafKLFc83RgSvsqeke9ET3GCkRA1rz6sZDy52aRxNDyw6EV5YvEsN13mQdJxBE3YNVjSv1wWT",
  "key17": "2aBiNUdoKvrCDUdAUcvhm1tUj7dqCor9172kejRjnEeBQsPfxfyBJj7bNnzQiSdffQ1V6QjPS4B63rQW1xUq6r6v",
  "key18": "2XjCCaoEV8Uq6cnaSXYiRpSjvvTy5TYcskkvafKLVNuA1PbeJNxFF6L9ScANdjE6G4jfYtLxDZ1NwrkhTSXuCG7L",
  "key19": "3nh8q3hDga5ZJix6Kd2F3KgoYkhjeAaDt3V53pwrQSJuj4yNoRnS8hc9HUCa2A2Cw8CidbpishnjQkQjucRhupnS",
  "key20": "Q47Z4fM8wBTGdDVnRidkxSkCkWA5mRYREMMrwMBNwjGv5YBrs1rva2MmoTqznmjzXXbiLTkEm5HUNmfDEWGC3UY",
  "key21": "TzMngGK2jtXkZuWBgSW5AfsomjBEfVWTvyGUm2ABnAVfUFb99JwGkKureQaPADyhMFZBhZCG5EBjkeHHSDvhuJT",
  "key22": "5SVHRADgG58ghkWJf6toW9cdBeH4mFrWAEbvg1h1r2KGMLFnRCyh9hQ5oAs1QpBseoDpZGbZ6A1SCpkrjZqjHnd2",
  "key23": "4aGSoU4s1mSzXCVyTo79jnqaxWfXJCpxAvCzo5cf6kae2CSQQ7kEgBaHLqajb63DVCVaQVFakFCVUnsrjEwiTQzR",
  "key24": "2oXBPG4zotv6Zu9mxAZJ15DFKShWUxyRWa8w48zMcnvYVjbzgLcH9zj1Ktc9FQA2jhKjh2MsM2vW6g9UrUfkA6i2",
  "key25": "418U5mk55DoWgBKukcw81LhFhDjEUirouNYYrD6EtHxRJPsFw9SLc3Nv3joWu55kL7J7Z9ZSTrkao4HWqCm27NoA",
  "key26": "4bH8Kf7JgupX5qwJhgj3xsFT9uwKK7czWCRetyenDEMH6JrmmmnEa4csACghRPmYvcNvdd6fjXRN8KH8nXqLjAbm",
  "key27": "38Ba8YP9pqxEL7ySRobiTndXt8EPJRyjAcTFWNBNvfjwhkg4Vvv2ecQRWNNa73Ak9JKsaNcbvUZ83dQ7hUsYWw4J",
  "key28": "zimUv4LRf2hD4ry1G7uAFSat3hHnZua2FWx4r9uudRMEmd1SDTsLfDhqfePMb5wMufioZusaj9EJyiaAcRP9Ng5",
  "key29": "2FfwbmcGfgixyG4CSGXHuiZtbuDxqAbpK71iZmvfJ25GwykqjCjw61a2tDj1NymaRDnxBtbrG1Btg3vJaMcD8KY9",
  "key30": "67XSZ54fPCZdtPNqGFV2TWJUcgCgnNs3AGi2YAhKqyBhucYKaifzLYHCXA4XjazJ3bBnW3BvyBzifzZsyc5eDA93",
  "key31": "65PXGjgYGMDe3MZyoDLe99Bjaisd6FSwEMWePYVSKPoandQL13rABvqTbrZ8sfNH3xsevcjSgv5Qwmzbx6DVZBdU",
  "key32": "269kGyvzwxhgQshUFP1mZ3Zr6YdqmpzpzQrZrNeDZ6Nkx2RaqPZ9bKZVx7eGNuswkBE2zbkEkEQjL2kM3FmWfd1t",
  "key33": "sZrpsL2ZcGvAFLhPK44ZLXGG723MXkeFnTrJSQokuzBFumeKU7cbRZUJa44D3Q5UFsbURLRugTMJXBDEu5cr2Pk",
  "key34": "4mcomDiF6X668twVuicsFTpLZsUCTeH6opWU7zDtevQXaHrNMTh4nPgyuBBvAWKszgKbGackwJPQekumMbzGEBcs",
  "key35": "3feBFx7mKbRaKgARMzGQsWonmCLvVq7gkjzuxZuK2oJFUNtR1chwkqx3Y6hkfs41kVvLWYkpGJDGLiPzoqzzUf1j",
  "key36": "5jhTqzzpdsjQKdJknMdyR2LUyAgEecWPPVV7xZUsPgdhUrv3gwadsWBkqz6WUXnWBsYhcGaK3wFYTjRaAeajsRHm",
  "key37": "45qgLPhd24tq6vNESv8sZGYN3Q1W9HPnRuYbtNNUkuZGKY9AsJks8FBcfHYg1QUrdSHV1o53VT5bPbyvXKG5rbqQ",
  "key38": "37LZgktiumtABU66xcw713Nkzp3NifPfEGLChum3vjCGCxpKsEGjTwfd1XaGGWQKaK5PvyuRrYb3rzz52mroftsW",
  "key39": "5AZAB7X1ysLSP6KCphbU9GbewpfstBAVr2XnJv8i6RhadoCN75SCTYuUTLm1mcP1SiZ1Yjz88u6ofHh3ZFdUKAwi",
  "key40": "PsXai5tHTewxLSBWt1U5nQsaNVoC6FaXxhdcskz6m84DDn8h23d8ZBx63biayPc8621Yd1vK2vHi9LDBc5J5qaq",
  "key41": "3znvGCRonGTSWwCmPSHbMEkx6i7aqzUgPTAuVQ5Cewu7hiVU4SXnxgvW1BjQXY9xJ7MsDVPUgkuvHRBMxrHTwMoG"
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
