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
    "DwZGdkDW2XtNNHXqnh94auwptrS1vfYiSpeQj1BS7aW936HJfSjx92yhhopmFuZT8czrZZ7LC2NLoXhy8siaokt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRbzFN9vhraKquVHdgHHh7Ddju1BQFocyZJ8zKL6wULFJuA7pVRTmc4Zz1McPPZKAThVr7tQHraYdVMBXrFCbkJ",
  "key1": "2CgnE7HNXPKmAQzn8SFRUsy77PrNPSYTRNQRXxMAi3d2mZyicCk45skzSmKgYiWQnEsBiUUThhaLXKAGmbpT62Ej",
  "key2": "57QRojpc43PhpwCyck5chYRdofqpUUgFjcvTe8PHxQffZhudgM16jJNMMv7pZErwUHkG3kN4NDT4Re75Jg5HmFsT",
  "key3": "2sJncrYept4GK4kn9sid3DZ6MPEXRsKZ7d5eezvJpTjWE4TPbF8yUZLeDByyoeFf2GTYJ7zBZ9V4CMe8miXS795z",
  "key4": "j1LrfpvpDzYZ1GjfT3SpcwSQcAhBmWyGMZgvwPdkeaqQ5dcZ8EezrwRXPi1Vgtypkvog1VRtj5qBDw9XEFKTJWq",
  "key5": "5x3SacskV91DxL38mKWakq5spRpuSPFpkJx2wPnJvdPsVFQi9vQsiGZiHZS1sEUgg8XGGHjHMeUMtcivggKz99En",
  "key6": "uN8hCf4D4odvPMpE9gcaeANkWuBQzkCeJ7NqZxchrtsuNeXrC3JTM34Cc1ZcxyLmAgnboNkqtWW42jTYSpURk7K",
  "key7": "2jZ7AsjGPknrWMDNGzVz8VgMQvDiL4QYmTtKpfZ1h7uWuWJZDYiHc7xcB3ZfBLa4uBvTkcPanYaLS2ahZG9WNAWZ",
  "key8": "2w3yJJP9npacsJ1bSjWavnrJ1bLZe4WsRW4skQowX2DADYUZ6YbJpW8xPxBzz86rpCNAN3yXzd4T2K8RxRBZUZ1u",
  "key9": "2qN3nASXsBsrSGbwYmhmyCTi8Fn3tP6SQw4qVcp1cjayTEQ72GYBGsinoZLzkaNbwd5F8FYrBgNPDKRJ2WAQvEFZ",
  "key10": "4zwWNqkkBJTj4Yn2MeCJ6KAcbNNUVVH2L98B7LaYVReiBYawQ7pnnUo2yC4hbz6B6HMt4NpayqNnkUa2R2G711FS",
  "key11": "UN4pHz7yfpXe9oDnyZen6nq5DgEhGajr5AEzKg9kX9NNAUwuhxmPHE5FxMcSrDJrTRC8jTTHEwBBvGAD2CRb2mS",
  "key12": "5Fi75xrERdsrcog4PX37vQSvBc1TwnF7yT3azhUPJ3q1pG6XZMTNHYcm7AvKMifTcQSiB7PqsjrDwHw3fyR5SDZY",
  "key13": "5U7hHaRoZhMtZKo654b9gvKpzC3jcgPtKTU22XEizpSGmqDLK99Meb4NadtigHtRtRBhBfQctuS9NRAN2gUfdyxW",
  "key14": "4nAiUdhxkw7TUjJbzP8umkDUkgab31GScqw3DxLxfPbiE6psCDHR8f8rKd4gWSu6gJn6vyC5BWRehUF1CvQHVTR6",
  "key15": "4EAyVZDVYzdf4ZvUXLE2usqWsUdaaNfutaVDsvAmzua1J6XLSJTDxp8QURn2i3QRHcwMTyJsuw4GpDJ44zSMwneG",
  "key16": "5b8XBHUD1Vqfjm9Nrkw9PCgvZis7yV8dSerE7qKPqKhoKwPDX9GUghzcnnQ8hx3KvGy5fChqofbpCdULseEfjQN3",
  "key17": "3FoFM7fdkMSuwgXcQqGaTq6MxGN74oY454eNF12dwBS9FaeKw9S61o6TAo53r3JoC77gXLPFmajchHcn5pc2LPLY",
  "key18": "3oHsdsJW2aiE8CSdzLw11DmPrgDyNT7FwnHSubtfixyR8SkZJ7QERvHR8q9qykddWJTS4PxVPDP9MRvvCn2Vpopw",
  "key19": "3iox7YK1sGQivxPcREH31h8eTEtZXYPBM9EnC3FUJ61L7nWrzyr2pgtaL74uBoDR2LRZdUfczXEAP1JyTn6Q8KEa",
  "key20": "LpgHYKKrkinPCeaFg94GzoTZehriLWEG11SRpsbXixMugUKCqyjNeBNxkwRgAxPzAL5NSf7trVa4rwagauQcSM4",
  "key21": "5ih1cWAfvpqS7ntgPPPTJuasYyaA429X4EiPpXRQZ3aF7GrC9w1yjVsfmjFMfdL1izt95Uk3nc7EKt3ufMGViHki",
  "key22": "NhjZ78xZqS5D4SZi6uLHEu3DT6sm7bWGitum5iRMZZ43dVP1bcTfsxcapJPtRWGRGbFbiJfTyh3xb837mnhoSfL",
  "key23": "4CuPthHNvZGGUW6hbHJxf2hrorDBLhf1V4zEJuabe4yfs66jgnYh3CB5WS1KKPYajoyZyzm7xgLHp73QpJr3Ww6Y",
  "key24": "56Uzn8YQeWACyHD7vWqrUc3jtYFFBr8sB1ntKsZHxudbnRFcHJ6s1Ku6Aiz6NFhtztAFJscGXQmkz9LrWqf4N2fW",
  "key25": "MUY7766EisdGb6GtAR2HT1pQ8xuZR4za34UmKYXvuZAf3x5xfVb68PESbYspYJdgEAuHae1C7rDJ5hioJAMSMaA",
  "key26": "3hMPBTJ65skhFDregsEQokx8N2Mcwn6VcxPaUowpuSJmgfo6dZLZb8eudbN4uUrkumyAwLfkULixUXJ7D3qTWDfA",
  "key27": "48WP7J6zPkGbJoWngjhowgcC24o9aotmerGFvub7yxtv34rc1rJsdjszSahQBuz6CswyR9v8e1ehTyaK3774xgSf",
  "key28": "4bZp7FqLtfxA4VA2DPgRDerL5ZY9GedkYk7RbiCNyLdmtzABkppis2ahT6tYkDbHnJrhF4w4D2K3mq7jLu88azBi",
  "key29": "xDoDVaMgfr5gcfXZDhuxPQzhiKprNnTNUXv8YscWhzjZrRqJ2c2jnfit8ajUoif8ZK8igzzCGcbsyC5uGn5Krq9",
  "key30": "29Pvc3ei5Noek6o6yCJSmnis2uYWFwWFPw1SEbDxjuiJwfPxd1h9NRnnukThgSsj1degmkQDdyKMpCegPmbFBeGc",
  "key31": "4bYjVai9n92KnZWAEtWabVKZbb3DtUG7HLheuTtjq5TPKk5BzpRKzYL5fyzJebAs35gNtZMioDxGcAMWqdrAdWnr",
  "key32": "3mh3rfr9nRmWSxJsSvyqZGPPeqih4ZsbmmBjzfRjGtZ72393kfw31EAbc2pkN1zaaGWeVUCs25qyjjMqrK7Wb8LP",
  "key33": "2Aoczx1skkjTazEiLu5i1sqSZA1BpgNnDmbfXckDKbfJ5vGSce21xHdCE1PT2C9assfZTaNzdH4sw8ire5Q1a67X",
  "key34": "RFcycwyheeyHo1DoH8vvHdKyDsRL62dg9PbLJuS1QSmiyvcC5E85NoyNmVrtPTsxJtVevfdbSMsQFfQzuqVnmfY",
  "key35": "5SKjjtTjREaLNpCLGF2DpH6JEciEwLSPELnpngcAyFzCgCqdKEUWeYLmYmfCyBS9erRMAL8t4uimNuf5HbgSSBXt",
  "key36": "2qc2XUFrL37NGJVAWxUzL1hPqiZyT2k3pNWnvBwb4hyvs6knWNSqrW8At4vENokR2Gth1PDZJhrJrZFdFiwAsnBz"
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
