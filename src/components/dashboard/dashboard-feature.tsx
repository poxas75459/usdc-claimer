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
    "5dfDW4ZehYrxmA9oKVg5RLbUW5WhsBLpECGKaM36sSpqc6v2iVirdkrdPR8vFofzS9NxqHy6iFWLbLucZ27fGg87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWH176xXvVUYFbh8diyVGnjZ3q8azqpzna6TYmhxQDmjEe1GmzwL23tTuqLS13SbMHoEbJrgD4hhi7fZ9hrfsGW",
  "key1": "5hzdb1uJZF5KBGNKTVGtABCu58NJRyxntXeX6bD49kZQBApQeLgaVyLRySfMhCwrxA9JNy9zQH1HdPwqTHrQa46S",
  "key2": "R5y64tcUNQQ2HTdiP3UnJ2iw8YCqe92RHUmVxZsEMWjaT4zK5yvopwyG423QqXKH1vXAfuTvWgXbKtZ18JhWhUX",
  "key3": "2GXH69EFZLWwit5wznWBztgEFRG2sd8K8eUo4GFY8hhNNfJyfKezDM9v7PoHCLpzXdCa3Njf7guEwnvHUEUrJuou",
  "key4": "5ZXUm9ruzUqiG5aB3Eu9KHJtbszWnKnRnsx3bQSr5HBwetx55dY65FreVXr14gvMNyJFPrHJAQErfPrq634nEuVR",
  "key5": "25sTQBckEDEaf3CK33cDjDXfjTgjUKvaNSw7GCGZHTto88n3kMxWdbXrPt2BDZD3v9DMbtmKXeUjRJnrFUgXz1HK",
  "key6": "x6kSdXMskEa384nx5HJFzwVKyjMBLPf5nGuFrEF5L8XCYMtdXnZFd5cA3SqUvqJ2aogRiLR6DL7SzvPZnnXTCfz",
  "key7": "2UyrApRuLDDH4JQ34ZTMkSi4LWj9RQVEhb8W8ZA6SUH5ksPuoRVbsYspxp5YhMURZwTcQxeH11uCtjXkATZtD9cB",
  "key8": "33qu6pQe7gxtM4gFRZLBHUsnBMfwDea6Fg4jum2JSm8FTZdqT5eD1reoKhoYxQAUuFEGRPVDSMtfjzeDGQoGDSNy",
  "key9": "4iks3ixsLTU5zzcNcWUZxhvA9B5FTBu2nkDRAAxF7iYsn3hJNPcBmKLCE9aHtHKHheMgGA4s1PxKy1ePx4F1N5Kr",
  "key10": "5X8nCPcAfAW4Nbz69kfDgBrweBVHSnQHXUZXKgegXxrcZ5B3kj1L46D5wMjVRzgxtVWFh9DCBpuZ836q8PyXwikZ",
  "key11": "2XwdhN9XY25rUh2r3a4khCpMJ4RPPyHucMeKATo4WuHrCLXwHUgA6MHZCrkaWkNcpXoG6qtEHbsWT3YTdc1NLzMs",
  "key12": "51i94jk6s5MX7K5Z6r8bntZ7P2owJUYkPVkSosm2U16c3dkLtyfpXRWE41ArQZ8qpt9TsdYc9TEqmY9UboEzdWbB",
  "key13": "5VyJeHwVQ426Ytwvg8woQS6FjievewrwY5PnBFNRsET3cyA9QViBn99RVtDK3PHqSKvRC6HkVXhEV8PJJ3EEbQ5X",
  "key14": "23dcizgQ2npuS5HYAUAXcsu5rN85DcFoiojApQNAHGbehatWgmxbuBhbRcPvU1phc6SJaL9pvtTgwEFb2qtqYjeS",
  "key15": "84hvqsyp7Cyq8XPRXp2U8HePZpDqiDEjcjHBF6LNhF3TkT3wqxGEJfKD1yLoox3ArL3mdXix77tjYh36YS7v2sX",
  "key16": "3KzAmteAKM2RWBfeQehHR4qqsm2MDNhjJW92UcyzzeckCjPK9PsqDvLL5dRZYbxYCNAUWLLUAzXRioXRt78S8EQD",
  "key17": "ygV6AQWX1UANUWUKmyozABB3nqVBZfbfJru9p481b1Rgm2xC8wArW7F9C8r1tzifSUnezQYdB53wAtMNhmunAoj",
  "key18": "2ukXho1qX5zJPsgWjkwrpqc1SCuoryyanNZMWqnGvkmB1wufKyb3imPsayJcG83VdvwiLqrzbcihZBNf1YXUCJE6",
  "key19": "64mQamCakjtxUQQm34ECxVF2WFXV2oPGMahD5GHKGiZg8srTDz2x9m7SYzNuEHs1jW13SBm2MDySoWWJU5ZSVwXJ",
  "key20": "4aGmMpRWtmQCC7PLprPQ727vQBqnLLvDwczpr7K3aoNuJJM9y7ksN4wkMUycNUxbPcEjEcGSi3VA3cvCCcMFrgYi",
  "key21": "32dH1dFTeDBSVRUe5HjpGUmS2SzbfxYb9jMvFzAsXbhrwCDtPBCGupUqGNk5X5Bnph9U6Bn6DFHdQU161LEUbNf7",
  "key22": "5A7qgPPhKXQ7rPncu9fRRCcvYw85G7eRG7ejFMfaPDoXLgU8HriCCoXcadzUyYHKFNz4FSiB3bsJXg1eFvtFL8PQ",
  "key23": "fGgh9LLJqtYtWPrPtjqpdAnz3dMbVhd6sJuHr6xWtEb19BwYLZyVuHkzzuWCZxKuWMCnDQFn3D2Q6Uy7EjwfYfC",
  "key24": "KKTxgxUobMnYNYPCo3DS4RzXRnasFD9JdcsLArYMdQi8V7Fbd3a6EHFEhFQ5JG7QFNXH2eKrZ9NJpqnEWkGNPQg",
  "key25": "3YqNK2axeUPsG3MZ7HEUKdp37KZJpGt4rztSxB7JbHHnK8LdJjZuXsFuhYGNjK5ZqEKA1misa3p7auYfSxjBoN36",
  "key26": "2Ed5Xi7dk2w2dbNEswxTLpcscNTKNL45kLkBBbtd5GUovoKj5Bh4ckKfCcPf2JgHkrFbarhyR9Q3LoTxVMqxfshx",
  "key27": "65zx8SHqsK3BoGPch7GN1oVzvXmjd6nRaqV89R5jPqBBVsiAM9375QiEwkV63CswWPXUzU1r6XXsqYbNsKP283je",
  "key28": "2JtFYnWu38kij2oGjm8xiD7bYkpEwTNnAVGYPVkwF2ra8gNuJu27PRejqh1WMfj9VFY53Engc4MswTsya1sfgdH6",
  "key29": "345S2o5jQcdtfyePe2LQf7AzNkRAWUu8rSMqWMciwLmKh8hpjrLYW9zRCxJ7bM4XvtimGxYwsDBXUtgqGVh8cr9K",
  "key30": "5VmZZQ3GfSUjU1BXHCr12fSFoiPFgXGJwhoHZcb6CGurjR4ugVUN93eT9RGiqnVpzYMCAArTrveC3egrYTxWyHf1",
  "key31": "4BugkTQijw4kAq48FKBwFPmSWPpPACRaGHXAYvsxGnYvb4PUKCZsKJWjRsHLHnrB8bG2DqP5P5Ci4JKx3e8MTQ8j",
  "key32": "54KBhU3rGRooJguiZFpd5wSMYVmnF1HxsvtNdvkhyDHiwJLGimrbWk6demg3376NFwAW4U2hiwXAJFSspXeAAubi",
  "key33": "5SnfCsw1HGnDNAX9Y4vPR36SxyJwd57jUBf6Tph2hHXjqYnDvmTk7CRzHPbG5JASb1obZuSAYvkgnXcMeTnTcaE4"
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
