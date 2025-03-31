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
    "3C2Z2Ka4shLJgbhJvShPREczhbSRFrjP92DpRRSksonMttcorU4Z8UBSoVTLi6fcXwy9KUZTgwxkUTe6r3W5wgUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kinnS8acCq1rMKvYd22DiCNPMuzC8L7e3Qpi27R1KY3trfrXbF8FQnBF9AfFFdSjYdHA2A4pazZyu8FDEURUGXm",
  "key1": "2TY4UQesSiDKxE5iK3qGSxzBqf5t3UQxtbp9sMuHG3QNCRkMHcpNLnWW7wjebduLfrJsCAZRPMv8wAea45zt5wfE",
  "key2": "23Xy43cf56TMSbBrVnbe8QFLJoep2g2hVHsLQkvoUivkJFGutBPsuzciNGQhkrHVhreFAvGm8xYgw8Fipp9xeh6r",
  "key3": "3hhpkc6xjr4hQYhPonzdzrMCaYHzP8Cu7yePYJzvGfw5MywvZRxcLTawLtHQKoFcfwSMePmF4jRRgZ3MwxcqrKX7",
  "key4": "4R6zzSdVKxXULkHXFvdgbQgd8XYwVHExHPM4fR3vUauGZp33ig7yvqQ5mTp2fRV4SwKDn2GtUt1M3mu8kcpbHNXU",
  "key5": "411WseTSzuoq9hCgtQ4944AZpQax1xm3n1GCuw3Ts1ptWBzwj6A1S7s8QewmH2C6vnFY8JqoXEwqpz95c73uU4hP",
  "key6": "3Hdg5wmcwYznFybndU9MbiBM4HbpqFxfWMHQH154HDZ3eHAiZXFCo9Tn3XZDUrag9FDBrg4sTCgchKaLXvtV9owy",
  "key7": "4DoZa8rZQmqb6KuFHT4XnHmXZgU1xBJMU9NyXCqeLzwyDLJzoqkdoodUr1bPVeiNypdZzqxMMyXcb5Pp4p8FRw8o",
  "key8": "5QxZCCbLesjURd69EkX4Uth1VPS3NxVPofnkPUsNXuw2ekPJs4FQgD2p7XDMSouXEmKpoXbofs5vDtN89Wj4QiWU",
  "key9": "4DpDQX9gfLqsR1cZadpYDen9DzSxHy5k8BacJ46XQVyDvKyiAQ1zgDuF9eGgRcKQdWi4o2xJSwai4Xbme85vvndT",
  "key10": "3Q1DMaCHJUBZYR46FKRPbyd4qy1B6MZ8VuMsKrQP2ZhzjDoLRxQC6XL29KoG4h68G8o3bszDmKnMSev9PVoUe9UV",
  "key11": "2ZEaPV2eBgVPUjQiXcHYGXYwqWh4KYdiyCEUZPHyLMoLEVXtx2VtJfTTDYswfuT76UM4z9qjWHibrnrYFFfLDxZ6",
  "key12": "4xrg145XFF53dEpMVqQ95XCMFA1QuqttaNAT8JFojKr1MNncKUV9CQRJTdUynwFjN5mdAHt8Kdf5TMuc6Sr8ykjH",
  "key13": "wMuYR42w9e9sm5Sd9zaKwHAgwVMwYGkMXNFjSATeKzTjvj4ix7oWG8767an2uBkwY4v4pKcqMUCgXiDAbnTjbUR",
  "key14": "418GDwQPncBg329P9A78VyhL8bugvW6VJpCCF41Njh3LWQjfqtNYgLpAf4QpEWTnDu5Bv9tv2iTjCx9Xa5mhY7d8",
  "key15": "58UuBocJEj2SKSbaTRtoEfUqktH5XecfLPwXL2hcfwkA6h26K8bLRzYTdtqei71AiyJoY6j1rC2H41WEXX2aVnNo",
  "key16": "MGFtdcVc9zzapYXYuktaYurjG87tf7kYULkqkXJfmH81XgVqEzBxEyAAdFd1GMR8mM1AjPXLyDxVMRibEjSS3S1",
  "key17": "3MzW6sAcJEFHYvASRiVQUiZBepndugddAmba6qoVkR5ZqHjkksUuNmW91wTynDCmLcWADQ9VcJbeRRxaXNAr5X9X",
  "key18": "38KfxidsQiWLUYTqXMhkrYzTw2nYZdrzGzN6diqHdkdUy9N1VmBJodJkRamp5XVpRsCVMNgeUyGxjLL1m79TGf3F",
  "key19": "9CBg1RUqqUyMGPkkKSWRArdigJEzU7XkC3bEkAMfoefxM8ydVDbxzZsvZmNR1e7twWbFeF24CQ4NtzpDbF2wzGV",
  "key20": "2eeqpaFPU397jqKZLc2pYGahMBReWNgQSGua8dz4GocQk4D5mN9qK3tVFxnZG96w7xNj8otKqXRcvaKtm6osCfZp",
  "key21": "jL2DGR9zeNCWnBb8L8bewSx6juhmVW3RpWx6W6GnnEL86u8cgLCoMCiT4qsewHibRgcZKSFHf631CBjMSuqoW33",
  "key22": "2jLGxciBXJYW9pfJcSDUy14vGgYqN4VFkEjfi3a69AVUK2N85yCvBmbUNWE7zWBQfVUvAb4z1dqgsqnmhGDYSCdh",
  "key23": "4cAHtoiwmmGJq3KJ3kCZLvZXAqj9Hyau8kgw1vjxqxKTfHNRWYpSFBC8DqpwYkf5LLPZmRSVrA1TqoZx6XR5p39z",
  "key24": "VjoubuTJ8RW8S91Ng3UHFhZPKSUsZMQi52971wkHx6WtZT1FwB8eJHE8CVoyBaRMHD9WUpZkVB5ZDHHD4oGAw1w",
  "key25": "5KahgJzLYke3oTvffSXQ5xhcNELMb86Nfs6rW9kDxpG25qSAgFYRGaRPUhLuRbKpjtZjn7iUrk8rgkFagn1Vjg2c",
  "key26": "45MDghx8gThttg72Rxi1q2S3reyf2RtXHj7NEKh51iMY5wbi4aFVqVgySLYuhqP79aGXvGj8cWSkjZhAmKKJcnut",
  "key27": "3kUUybHtMSjDLpzEZcTUTQwZrXT3NCFnmgukciGeKQEEg9TErJej9Z1Be98RfXaXdVcGn9mxsfieaibbxp4PARry",
  "key28": "2UqAf7M5fv763iPCJy9bNvVcHVwzwdWBNrzveKkW4416uniKyevnDyX3YcgQvHWjCFUkq75q2CqrtxTa2eQ22MGH",
  "key29": "36ivPgsSDmHfCu8JKCRhYCVhe7RffX13VGk5TwEMhq2tXuAGxjWpgXQiv55eD34QfRCXtuNH6rmpYC74JisobXYy",
  "key30": "5BW8AttiUYFBZe34Z6kFntebhgGfRgrZwKGJR2hphbrxCqxJXpdLuizWQa1KYPgNHC8hATbcdm2G1GrJP5kK7Cyg",
  "key31": "2dVWvY3heJq8uudK8nNZUbRzdaVsU55erprfhxZ6Eaz2AG1MCyRMQp5DRZy5uHhTBweudT5Qqx95oG5gReWq6rij",
  "key32": "eMHfjYY4vATmEc6W9ws9ofTTaje6sGoC95DaYhGJMJzea3XpsmyT7ZzpchZStS2hRJsijfTfhxH1HMXgMLHdqER",
  "key33": "3dtWzHUiYuTfVq8zq34p4sJZQYTHHpD4yeaoe6zV4PCc9Tv5X2kbDyXCG7NFL9PoAJ97nCM3Ee2jk4aCJ3CZTB8m",
  "key34": "3ApKcG7K81fJqBL8etKcNhpvU3JmtPaJNuGJDfbBzJVoGXmgJFF6XM5jWUek56cVYThg5nLsqrLHD6yVJY3tFNi"
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
