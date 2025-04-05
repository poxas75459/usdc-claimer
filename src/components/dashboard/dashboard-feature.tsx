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
    "3HnaUbEwefpSp3eHS3jDoUxre1HcRmnDNZ8EUfucxAoREzFJJSWfzCBSyzqvePAghaDt4R6Mvj7HheHAHa17y17G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fw6W1Ha9wSDUAUjjDz5ruMjN6tH3kErsnQ2p2HpzYrwkgzi2iDGLirxmkB8Gc2KpGsxzGBtuTEXdp5iGVHLy2AE",
  "key1": "4P5tdYUtu3zDWquumBMMvn6JHhRmLBLRytPNJhdLyGP9ishjUsVXdMsrWLofvy7vcvZVp4zBuDZtduKmZ7fdsU8j",
  "key2": "2p7LQiRY6rRiiZVnaKu17ufUzSXyZ2VXvcFPALZmcGFxKPYPzA3pHaHa97PQe6GsF8iBVxQXoruiSRL7HjBWfaux",
  "key3": "xRRe8nJwRmLDv5jg1kbrZUu7cvg4353qoxVYc7sfimYkDWmogmmSbu7awL548gN6qoCZGVT8pLMDrDxfq9f56v2",
  "key4": "4fJCKKMbRL6FsDWCu2RStvWnMinfTUNKmSVdRMRyXnxD28TCVAPwgxxz2T8tauUFJ8ex5bXrULnfvADoUPD9RT6W",
  "key5": "4nnpidi6azvj81P1PG1GSwn7QDJHtK98JkzweY4meuNTtiAadDdzWQMV54qJs2PNB1SyvtpPG8oiAXwiZMNDgRMf",
  "key6": "66q4LKH9AcuAwAEkyqWdvw73emXbycRURDAA8MQXpRGT2RjaFTg83Nu77kwUmKqcCDrdnCUh9MPNJBpmqqUdfv8Z",
  "key7": "djPKnY8mamQ475oGCCCPkv7aenuxyJNdH9Z8gWfAPMc5tcvMHVHF2JCPPC3c461y77kTwAjww54VdiX255j13fW",
  "key8": "2BcoHjkzjqKo4DtTNpF55xUwVqN2Nmz68JMSQ5oFmMD87xF8K2SoLSbeB1TMJg5HrcrKZJRHQVa67MFB27eN3Whc",
  "key9": "31ZV4gq5W1QdzeT9znGuE6CHsFma2CUmaMnarP8xgsfAwcpPosoFiN7xRZD6jC23cYPNyDQxmpQfH1v9fEibaYRv",
  "key10": "59r6u6hPPPeKgsatRk9GqAAGfYRnNYo1tW8NyrRqsit6qyzwzLJyumPvq9oVg3MKBtwMFAXyNbuvwCnmq7gNDqv6",
  "key11": "2sW9oMZRobXEbF7n5BjjT3fwWuHcEgKUUnBmCYTPCnJNZf48o81kD2z2Ncx1NQNadkDLGpT8z8uiftGouxFwFMNJ",
  "key12": "4xrZ7n1km6usaaFNrGavx2RnGSsz2X2qNGm8XMEVk8yYquEUUkika9ajrRb8T9ubD8GCiNrZ25fM1Zmgq4qjPUuP",
  "key13": "4hjy2SV57zzevLYwyfUvQRVwGncJYVxJTPQuV3iWxDFUwUUSQwHivB4FHUuKHM6ZDzk6PDMrhhTaFy5jePTYr1x4",
  "key14": "56WHQ8znxDGiUeJdnSrMvKbip8Y7uWijLmmp5Z9n9ht3Vkds7CMATfism83gLeSkU8EfK7ituw2DFN6MtjrY6B9S",
  "key15": "2CwCd3zukQuKVXZyNNLbnkwy7ukC5wqUJ5hEsCRWNgxDWJTt3B8GehsDSxxr3gzsA1BmGdczsXJqvKXbcURub5Sz",
  "key16": "3CPixTAm7GeSsXkuhykMLUdX9ryBSX2WbTR6kUEanV5xatCLBtTo1fM7FZz9X9Zo6Fk4dGCxUuz22J4K3zhkMzPy",
  "key17": "3thga3qKoHoKjbjJhCvvr2cFqYd7nw71MMkqSLSxr2zFzEsg2X5vMYNK9gazeuLJ7s8VKLtdVEhu1s48H88HeK5V",
  "key18": "SzCXfnjMDQHPbFTYmoSZk366tDN7LBGhgy7GSPMREJ1BHkodj3WLtVCpsGpJMYEGaUUmup1TpuSQVZUJQkc7DMr",
  "key19": "26gtAbPUb3sHrxzXgVcdi4LDxFz4W1DejeJg6q3L1Ao9JXbym6uRjcqccM3TGyGS14HeRhWDEXjto7rTwuyVKrK8",
  "key20": "3MoswwAuDHdpjSxfrJr3KPi6bEVfwnk82BM3bcP62L9Zd5R8PAGm1SQYtUVgEYaFqtpoAF3Wsf65rN5g8ttAQRRU",
  "key21": "2KAaAydQpdqer7rBBPFLntmr78YSyWcevr2H9r8s6o4FiMYAam8vwkNJxJvEwgQtMckboCz1Z9yyyFzGBMYbJgje",
  "key22": "2b1EQ2b2RtJCz568DHPfUAgUum6bne3qyd1Lhe8X7aXhWwFJ7DGCRRn8mhdkxRNHZ2sUw9PSTC2UUPF4nfUWE6tq",
  "key23": "3sht9bXxe2vtNq5ybrjSFxsoqsmhVkmZY5oRceBZw4uVcJHiP5RATSraRGRbfBaVNSDfcxPRFV6hrV38ng7kb1M1",
  "key24": "55A1x92kgdBweGJFCKjeYKsJmNHjEg3SP8mhtfzy2vHvEiPNc5iUFFVrXNzGA11mAC1CgfYSHg9FsiqVLuy9Hw44",
  "key25": "4Sz1bS9aVTniadn1cekC5yyp2ZiryR53v71kDmjn2N9aSsZYNkkoK6RjwXhy9Rg6GeWMDW2JX4rkQvGiHuKgTNY9",
  "key26": "5dcFLm9o9NXAZYcMzgPZ9SbKrRN6cP41i4gfjUEdK6HuXsxLUZBJJxL9SdEMFf3b8bpppdKxNuCmKwxNrEMUhJEy",
  "key27": "4NzTFyazJvvxTCNVuXZ8z8mwCjUbEZMtWtrGHaHmSTkyFRmE9YbenpyEe5UJKPNzipxpdoisnYhBAKv3offGMMTf",
  "key28": "5LXamQ5ZYjnAY8xd7myb9N11goD5k42264WbQfrQHsEze74uUUqS6uCJhtQ55wsWe5iPny29oaHd46s2bgwMiv8g",
  "key29": "34fGYuuDn689BCojUtGtbQ15XWZHybbBk1qNVjpBRbcDUYwW5u9JiKxDSvixnEpnGKGgkyJuhQyKQ54jWGrBfaPr",
  "key30": "5UUa1GnLGJCQRCjDyoCE3J3y7n6PVLPhqthKhPisv7L68jhXT9cZXzjNgEaW4VFzF9ZmFaPhv1XUNmLsvHQnkm91",
  "key31": "4J86VovwmsRyzMVDr14FcoLpifuK75XMJz3QjCikM91jnqttLnnoWT91WyCvVka32Duf9cXF66PizddZzscpF9K7",
  "key32": "intWMVdrqZkBpLBVZNmdYmT594TtnMWfyriGALxbda4sSB44U7az8FJLWDcWeNwYdN9oT2MCd4nEP8uv1bUC25G",
  "key33": "2AUgC5aZpewXG9gqX4SUCtyMwvrQrx9N7LiD1PL1sqk3aZJ38bJ3wVLty42EUjonZ6edJu3Q7VBCr54hcEQUSf9h",
  "key34": "3iRnakA71yPDF1sMLDrpqqzBxCUiJ9vFoz16FBAFZmj9TTA67Sgk3626J1swUERXWjVTFR3rks3ng23etBmGJmZD",
  "key35": "5yfCgW9wdHPrnvifqBVU3JNc6EKo7LYcYRS4gGxdBcFyP737tzAewWK6LLA4e9KZPFdK8YDBVTSQ6gvpyRmYRgRF",
  "key36": "39Ndzh6NX6mijd2uZg14KcspoHqThExDrU6s5s8HsNyE4AsvLN4DZGKab79aCaF6BXp1gZCDaHLTcUE7fExAxevm",
  "key37": "44fbqsW1ayEnEHkyr41q86jmXM2vnDo45CCnSQfqXKfYumMgE2PiLo3oSF7AQf4goeg9yZjyk36Y3mYEmzzyvwWd",
  "key38": "7UE774qenPsB7TVxkkYFYwBrqtCmcKQBwC1NLKBeCGB119gvopUqABbwGPLHveT7meQs8ZAEywXZVCrDGgDEFSR",
  "key39": "2aQYEAF1akh2sURUPYBmenWwVRduCfn3AqAJizE2pw8nU9RG1TAHsjgt3iKTSED8ixKDNjXAtbhok9FqbBzi7zTb",
  "key40": "PujXVit2aruojer5nNqcupwDVxwpvRH6VyW5gHXZBd3qJ9HQNiCXmW6pk8J4yaxGvv324mgyQknzDEsEzQXKR5n",
  "key41": "5NsqMMdAJy88TnKjAeSeiZWAzKaWquev9GBZoh7Zuc2B6Z8YnZ5ujCnVhxf2NNg9ASgDyByJTkCXKuVomreeoyhR",
  "key42": "2BKhd3zUcS1pU5FEqsDfpQdcAoZDbx6UJE5fWo1g1M69UGDaRPo1DWZCTZz5X3Nay398QVgFB4wzsJK5um4J9ZAx",
  "key43": "5vXZpwGw2VqD2aYwzCZtJjbifU8tuAA3ZvD1uHtiXy9ADn4J7ZDbYw58zMHdiEE24xwFDx1J6oGeJTgpWDoyQtmF"
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
