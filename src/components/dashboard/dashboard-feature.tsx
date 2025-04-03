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
    "4RwTJAdmNfugBWHaKvFbn5vRGHD1bTTvsJienL66Hf3zBLMGovZCLoag2PF6mRytRHsNtYGUEdT41oWN3RKT5baa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ib7mx9LTLXNU5KnHnpw5oVAGgurYvNHMzv81uQSmvyWZSSq18cKWEvUBV7uSEX8vUfFCk56UXanACcpprJWDQ6Y",
  "key1": "3MrELg3owfiJMQPu3sqdUusR4NT3joyC71Q6xAKeoZELBPUHvZ1t3KTVGr21XV16hQSgsDP57HL9rQKQxgNaV1Z9",
  "key2": "53W38GGfCddpatLtFDQDCy5AA7ocXaVSq844KwPyA1Pc1KEDAfZjuBMamzK1LALkXA2xmgY83aHVvwetVA3xCtQ1",
  "key3": "5PujVyPcfd8RLJvxepDQbpHF23NuM8NsLNPv45ky8yN3v9pfi5wGohnSRjU7Bwe1ZT5rVvzBRHgKqXonHDcVyZ4y",
  "key4": "3ixVB5bgBj2QBMtPsTPkCuKAyAirvdXg29MKc7vHbt6kGhuhpiAv6VrwwHkZ2XgJtJ179t7rMRBxGiqKrzKZkzpj",
  "key5": "4KiY2f4TMNFnKhPCL8ocAYhRGxq8CvacNhr2HMGU5yR76k7eVnJfPezRXhZniu6p6PSLTYhS2wd2aiG9PMHXr61k",
  "key6": "3capPp17tKJhyrtVwh5RN8ntCgN7KvuEajXjRWLVrWYMBvC4VQM67gco1apkb9AoxWyfxju5YkAmtfUbFKtDZpnq",
  "key7": "5o1J7cpEjFbnDV2QcGXBxVspWBxt6CRD7EPaJ8JQHr7VnuGKkxFftGkMLKVeh52thka7iXB33xMK1vFuUURpy1wo",
  "key8": "2ogbD8y3aY1jiUogfY7KERRayWXxuFRUwvhLCbean477FtWuqZxRQjMhhCMuiti4P6ARnqWUqaBAwmvPsCKaTPWz",
  "key9": "Px6VdAe5Edrbjoz4E2iPa14CupppHuuETVsUBxrTsFRkaXkS46HLor7t2Nm1ieoYPruQfhuMkn3gJp52SsguHSN",
  "key10": "5Vm1P21cm7r9aPbCrckVzXe5HaUA1NDC1nPbVFjcZYSEarUBVDxW4vQv34moiVS2hwLJiPcBdbKmCQg11EukiBhz",
  "key11": "3DcfBK4Y9aWa7pVrtgXETznU9myXyA8rGggR1jFMhMH4F7Y8nYaeBYngZDSGRLSVsrfMh7pZwGjF3CrEMpewDtVg",
  "key12": "5L4y92mFjwNyT6fB4yLBAx8HZrASU62BtVENpm7D253YvcoS79x5378dBSVewg3y4q6d5yqvPZyxFnaHkruLPnq4",
  "key13": "3VhnpET1cPqvHeayqesXsFLw1j3sxtSXDc2WV6yZooZCLR6Zoth6y9maziepXhbau5beE3NLLG37Dq98iEpN3T1J",
  "key14": "2Zfm6wgDFay7PiNzr14BFqDfyTFhkshP42tN3HfX5LwvdzaPxTTbwa5JBzVDVD5coK9XkTNjBwrd1HtB6enzLVaL",
  "key15": "64wuWTZHseBx4KvFLNPaU7BfcK6UqqmCAwA5MRSNBTX1wP5aBNgXGaDFN8rgcsAzmU8pAMost8uZQ6BTu3z1fVs1",
  "key16": "2U4BaDdkKn82SKCZ2r9t2cF6QwDDYWM6CvrNCLnS9hQK7wHUVmjaWTktCgNVTfZxrDuxjnYNqxoQp1B5ZEmKT5Mb",
  "key17": "v5HfYEFgrLnwgugQEhfchkCRq6iU2qtzCKdvSVkgUsJidRyD4igTLYGfKXV932iDYJ95UY7eaCKi5hc4mmHxMTp",
  "key18": "3GVBHrD23DHKhkGmxt75tSpaaqQghS1TGM23oLVDxPSwHH5brG251RHtHH9wrhS1hdYUyDbNt8EyYfR7xrrJu9vm",
  "key19": "2m2YE2xirXkeoZu4fSVKCymHaGwh8ypwRcTyjwVEAKJ8wsBjfJPYAhKwtzmbhYBPaMMDkYoqQzrRSF3RBax4fNBC",
  "key20": "21Tz6HTb787rSEKLLihSnytQJfghqxYDsxHBdKBuiY4yBUfYqepMXUvbay43qaxhtEELPBafKCk6j4bvh7fKmNEb",
  "key21": "vFqSk2s1WAwyD2WaN7VMf7mg747oGu6Nj4uXPsRJpnbv3XdNFRufABZpjwtYf2yHNwvCaAjPjLhzVZ6gBNxp1HW",
  "key22": "3gQvmn6z4GHzw6RwCmFucQ4xw1uf6k2ckpMjcQXWDJZLM3gmD4T4DSiJKGUhu7gnkq7KoRh2M51VXnSezQJswVMi",
  "key23": "6qb99bGJJvhcw7taxq6a27H5smNh2yk42nDjsyYFj4A9VeeCgF7dqeWXPe4otY2utYR4j1h2jJNjTY5AiaC9J2N",
  "key24": "266RPcNY9bLuDutWbLMhbrbDLdwjBtcAJfz2j4S9e576LcbUBgPtAjVxkNFzakvXPdqxjc19JNSz1L9ayvBkcqms",
  "key25": "2pC2vLbQmubm9jNDEJtGJat9ZsNaPyAXvK54ja7hKj2WnPQeW631c3Ka5f47dNPhewiyQsCFisRbuvbzA4uVv6Q6",
  "key26": "3ffwWfFvLqcE4hq19KY27dyzPf64bfgVSHqd19e77DUx5ejDA1XpKR5vDqxraZVFP9fRxnAjMBYitYcdqWu2NVWn",
  "key27": "3FPrnu8aTB2YcDfxA6ASXQ667mnKPr7qMLgcVgRhVUJC2nKNTPJGapjaTMDhf8th4SbcPjpeuZ23SJggmHdvrYg9",
  "key28": "3jPHckRB1Ep7P8Hu9oDsLq73v7s41a5VNe86cBKLmWjwdGMb69TAyM6rfjwDuhW7fpiAKpyskqJwHtQzJq3EF7ME",
  "key29": "nFim7BFoARUvXnM7mUyaK91A4Pr7ZytVMEF5swPhHxKxAX1vgtTEjpbEtCPwsvL2Z1JzmkdEf7LWfB6zi3JSmGD",
  "key30": "3uZGJvAqwQLaAvtPCPZL2q8k4nvCFUuPzkSzhVEuYDeHEfqRjR6s2GJq7MMuGr5XDiTiEKnM8PKRuhyEcv8iDT4m",
  "key31": "4VLFAMXxEJqFf6yRzKcZdCvHbh74k7ZGqctkc6zCfiCPSecMPv7Vh7fQgMkpDqh9XqqS4RriExDcXxPSEtWVbHEQ"
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
