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
    "xhA72uFwMGwg1aBouQhAswjUZcbA1KXemc692VjYzunNjQ8kBhPj2nGvbvvn2iqbbUKgNmkao3H2gpaiMGHmhMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvjNcgVKjNi9iNawXXboKGPHyZM9etL3e6sSs2W4Jhs1oen3a2Nidbqnnj1Ghrw7BEDBHFDTgoXvsQnz9eni4Ar",
  "key1": "7wU8m5wuJ5SV3TmPMUh9iCt58bGBZ6FuaxzhtzSwknnmAZNxp5vTY4F7xEV4yVhVDsQpZANqcvb1u1dwh4H8L6s",
  "key2": "dqWN6WRrxcLpJWUMmupSZYKbBHF5LkiABX5YNsGLMM1uhXGN5g9vcjRKaWLMFVnYXdgQeQdvVpmA629V3mXfV4B",
  "key3": "5rwiHoHZGd9amjGhijJr38pmPG9a57LmYycN2KeSZrUH1jAuNbHEFRmHjwH4kTHwxaQYzkQMf3Kt4SNDdV1RpuNv",
  "key4": "3nRZoFzgXP6cxvSpLqNpT1FU8BpNsJnB3TatxWKUdRzxeJV1tiK25CxmKCpo8MV7h3ihvjm7xUQhRpbm5gBbP3cn",
  "key5": "1PXeGpYoJSC243qnvHRPwtThxJYhJeCmDBWWY9YRaZsyAWJ618xNypdJkZbKZyejfH5Kv3bAXQtNzwnwwTxWu9",
  "key6": "4YPER4UTLPrhun2NvjdTCmLP5kN5cjkfygZTYxnMVEZppVm7ZtLjVvtKyJggo28pBMpqLRSFwg7sUTP2SdBUG73N",
  "key7": "5EBDPPnyq8bsB2F1J6BfNfxEsCnKT5CwrCvBwiTqAYTwsp8Xonqq1QuX4sybAp9z1DQmVFY8qHWjd9p9TtaPeiML",
  "key8": "3cN2aMVupiGkGZRVHVqxCzYC1g4qCAyFsgrmq3uUkei6NRy1YZJMxi9DW3odHrsUKJfsAR39qJj48jMsrR4ZWxmq",
  "key9": "2XC7eK9dZgPC63ScoysnHdZ5w4PVYUpC8Bkhd7GbVHVkf1ESGKGdieDEQj7YYSMomXrwHPtrC6Ek9M1E4AvfTAGs",
  "key10": "2mnxCFe7BnzFm7vf3kt9YsrCuG7Jefjp6Pev1VKvxAcAexVcSV4hsYVZMbk6HKu1wuaGjjFtxt6Q6zaXNPLizWFZ",
  "key11": "5qcsAudwp1xibQwdMX9Xdc29UAAHJ8NHjhhdjmjZyzLW5pLPxsYzmcec7JxFveMgZQYrTurx6qxdayFvwzLHB8gB",
  "key12": "4sb6JhknAALoUao8WRdndibVQNYrsKpkpWZjyMHepFS671Lcg12HQbGoSN1cgPbbTnwcqirpGkkzV7powR7nhj8M",
  "key13": "21giTrzzHRb5b979y2bxyugtUNm6BcuvW2pLJcNnpknBT2RVuko2ANkcNWgER62y6EJgpt2WwiN34wyVzVP6UuHg",
  "key14": "2Uv1TWv6wQ1HgQVCzGPHA2zLJeESxpA4CCwbNW9wDWRasGZjteMRqcoxHH9xjjcS1e2YHoGeV3uqguvFcXheNFz1",
  "key15": "5rXdamECZwHxmWhzRPNonhFdQnLUjhZim2KmszUM4B6acYhfAdmcbJ66kKu6KW4XYmyrLFD2PUKUqNmfsVrpRzNA",
  "key16": "3pMPMJrut65A2iEwpNosJbbWhQC5jeTwjChwgWnQjGVzqWqzeieZem5gkforBPiQ5b2Qhz2yFDBB2L13hJgRcurS",
  "key17": "3nxnY27KCy4AAiVHhxAs4BQWkNv5m35kpVmXSESs7K7LdmzU6HnXDw3SEvLAbSUxTK1Bs4Lx86TMk6FuuEjBTLeR",
  "key18": "4DWLA5rwJJqguUad7wGqFMZToQ2hjFN2dsHQQDgYWXojhzAuVUGppiRjA9MGhdoZ19zefKk8hqSXWwtrmkMH9KxP",
  "key19": "5HqZ4K3LZ536uqtc9WLWPysnNc1yfMMX4mRRMzQktoNKNzATLAT8DGNCqHH6hMV1yQ3sYvTHzdRszQgBSCKZ7xNe",
  "key20": "56Q3RsSCjM5QKTV5knN9PoNgitDnXbR63rf8muCU8Qqc365Jv7CqXHPc4u6EYkqXLu2udvev7F3miBhcd58bJ9tE",
  "key21": "5SWYGE9mLhqDDaCpBn5s3v3EE7w933WFKvg3hajgcsvGMvcmxMRrJFVLEQxd5Cf7fTwUpJNdVTbEfvhBQmvYuHhf",
  "key22": "4cuwzS4EA2gojdmvynGJoP83LX8DYEkAiYmMDsWQK1vyRvRML5SQgGTPDfPh3mpQ1pXUiHC8uv848QVGQiJeH8Hb",
  "key23": "2GW1yqmv9zJb7cBbwEcFaM9Hq47RztXuCj7tbfKKLy3mV8qHhDQmBUL2f6RwJho1rW29U9sCUqEWRpYEjEEbRQus",
  "key24": "3dPXmbqrgvzrAUHZxmjchcXrEvWr2TpHtd5V3jC4NXgiRpjPqydgCqVkKXxFM9hARhRHn1WGrT2twAR6kckvWbxX",
  "key25": "3C3a1yJVgfGxVrwkyQStQqRiXPGgsoTYX94zxU9n6F1oTLtVgVkNzuVaxss5zmbdZ68KGdZ1xRA1EKN5nbHy7Hqn"
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
