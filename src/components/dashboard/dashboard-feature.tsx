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
    "4zLBHzFc7MFpcxj9j9QkwtESFKbptCzudCjK1kSAv4f1LeyKwDsjNEVDqJh8CWAZ4WA8DdBLqWSavZWPQ1aJyY9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxaB38tnW62szAsksKacwud7CtXboEUsLqqWafkovaKrEr77Z8j3DBEnm1wUiqYXEddFTy1iqLvMbNBCJEGKyJm",
  "key1": "P6ksERhTwvjKoy4Cn86cFDLDXs8r2ctwZUWxFmPc1Kpw7xgARjhSMYaSnWxKo4yYFQmfkdWt9ob4Xi9B8CQcdM2",
  "key2": "4wL4LZMcg1FQMs4HwuHSpAeeJ3LA3F73M1ZDCZLkkdDapj7NNSQoo6pjTzAyvsjYURb7cPasygDRKwxAgF1AiKvS",
  "key3": "397N41zHbU1LJMz4iVZxtQH9z7KK7LqxwbyqTrRAhD3ZrzXX39YW4pfVLbsFqkQX8aABDdLa7omREffBPyzXJcbK",
  "key4": "3NFc9aXBP3fQEPDLhFfkMaE2kfK6gVEh1ZVPjrnpRXM8qZXUEm7yQ5UEcHuKU8Ag5mbxqDHwfY34ocyYkv9kr7MG",
  "key5": "4Becm4YquDWJdPG6pggoUL5HhbH4kbpWGVC3dfEt7RmVHFgvcVcVPGtiqUf7MTfiWo54kPm9u4vYn2vovejgCyTR",
  "key6": "2m4FEQtVH3iuAHFcaLS6vCM5935n9jbQaZg9FLizrZtt6d5PjG196xUNG5u8wz2bJMxBjXX5vSYZaKtjCH9endsg",
  "key7": "3XUE43CZCNN2X1EstgWSWVkfcG6PdKRcQWDzRMWuMwAswqAaosBNW2JeNvV1z4ounoz8LjWf8YHHV4QtqXaKpv7X",
  "key8": "5mYr6xPwuTejW6sgpQiKqg2c98Grmha7zZXC8FcMga4CMRSwtbS9FcLLxj3W3M5i58y4Eroe4kPXmvo7J6g676wi",
  "key9": "2ppdQ523bcpNT7aBNgwumMgFtjyh2JrLDFJb2KBQUuNqqUhhAEkeSvzWvbLfVMAsFRfEqLwTmaKFXXGZRuS1r1os",
  "key10": "3eYf9LYBXDXukfsWDGjbvkd7EaafK7Y5Zrcf7uH2zKGckvQqhGBhsDeGAAE4AtGbszWYG72tiuPXBVMd1sZdSDoT",
  "key11": "2NEDz8FJ6LbED3AaLHtMKBbaAucmtLhG3JGUNqahzX94AUbLzh8fP3npc5YYGdPAfHaWejKZLNPTcfqJSGA2WzBj",
  "key12": "3cmKMC3ZfYACaANdxgTd1nFz82norBnmxRQxomkUWnyQFzzDTnNPzq656G4kqTQFoXTfYBfC7GAghWbA2vXndAdb",
  "key13": "3nisgW561dSSDdiT4Wyqff3PoCreFQEadfCfTaYPkRsxTjfaLLXPi1puYXJxdr7yK4gHdJ7ucunxGRkKXN4RXMGY",
  "key14": "5zwfJuwrEEqZUYdHUo8Tdww9Fibr6LiYEZx2WkP1a4VdU47N5jdKgYyA3rCoahHrHSRUwRz4i8vzTDGEzjs3aWBK",
  "key15": "aprHDr4AN5okW7NvcsFsSKiG64r5iVHKwY2YGfJj5gRsSeinVUDKfou3iYzLShCjcbszHZBCe8yHXtzfHQu1wc1",
  "key16": "wCJCG39EcQZbTsdCzNjxSxFY4dHoge6nw9Cj2vknup8VcZMr4yDBknKQizPfySC9durPFyTJ9tyxbVputw1EzJa",
  "key17": "2XsabauSvY8WeENYEkGD31ZduGaxN1YDnJhw9DyH6KSbqyBqvq3TbZ8bUhNez4JSLV76VX4CSg27UeUTjxoWuVrh",
  "key18": "2UdqyfTbzrteuUN42srvGsFyPg9GLosPUQfECiRkmwwPHZqe37F2F2A7qTPqTWN2VoddEiLPxhiTVBVMhci2Mzk3",
  "key19": "5h69XP8NyHiZCACD2AX11mKTAVRy4sMewnttUQ2JUaw7q9yKLjcaNVfMELXpFLcyCUZ8DzuBQMMZoDNAKJ6EReRQ",
  "key20": "3PaXjFPPEbJqYMrx1m4oAXCHEa1uDnHvxbEFx3ov9aCaDiNPDCYwo1u7XE4CHwLHWfrYGhoybYzawXxcCgDDGJ2b",
  "key21": "3FQbeJ798ZEk812M3TaX8d3rWiAM3jUvxDdopp7qdn3gziueGzxQRgNKrrAdoqAAqVoeqxH7ysNt6iqJna1FhmqX",
  "key22": "2pYH6UJPEZqbhT8xpY2byV26Qs8zjaPXDK98PDN5LUU7v2T9684WjGfySqraTMqRsZWQZFegtW6rYfpuAS4RRkhu",
  "key23": "5GvQpYFF2Udg64UdnZUwGEHWhHKBdZn4QgKJdbyL3iz8tjGS1c3szfnLFnn1oCeXMU5CNibwHy6pagE3rvABg52h",
  "key24": "4kyQ6pJr4hCQqR77hDVxAqnbghbsEtoydp3w3MFGqi5SRWxmvg3eYeunCzvP1kya9gdQokjDpyRrh3okSBRz7u7h",
  "key25": "3ydVvJoADSkDH4Q9emKcnVhSk2NGjnZgHarN92Ue7eCAs9wt9zQ4xxqMPoCvXD1TJve2MRPzJuDAyFujpYmAcW9f",
  "key26": "5oWsrEi8tvd8xYpoQbH9sBQnHYgGxipfe5K5hBthGPZE4hfZ49V12Tk4Zaicuf9wkkAxEGfnqDZEfRTaNjrXAXdc",
  "key27": "mtxJ2H9mKeumhNitko3Z8C7rrEQVuSKSMATjmQRWnaST94KqpoLBspGKfz9NDyE6Mbq4MaUR8vkdZ4bETnHcWwL",
  "key28": "3nWtP7JtRqFK4aUxu2oj5Nqb5qn23D5jyDNvEfsThiaXgxtonKjhaNEacX41N6BtwNF3dUuD1b6YR6DvxjhDbEeK"
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
