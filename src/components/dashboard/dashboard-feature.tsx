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
    "4NCKi1qpH11b8SzH9HVffuvrr5GCeGauukTfPE6gG3SMq8JrLcKHhjTmCeEp6dqKpWCAeLG9JNdQuqoXFTPvLQuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNXXokWTLkcfPKGyevMz8ogYXS5kjBVBrm3NiSRpJ5kNgqQq3MDUHaFbBPV8MjHLeeucDPrrFNhaGXCrPAjHfZv",
  "key1": "3tDMchKEVUuMXSfNc1AWpZzaNtzvWGtKDJ2YHD4YjFKqJMJ79rKgYeNQDbkmYiAcmtij6RxHrGRLZWbbcrYy9cN8",
  "key2": "253aBCa3DBDiZp9x2EDafUCcQcoMQqU7pwGQqxjmUZZm1CDuE4JVMctL611MrJLFqeTaT2aP1KJJhnBEMmn4CKz7",
  "key3": "tbg9cHscif4S9TsdWeGPkgP1ZjsFrPCJXcWDvTdgW93kH4dZVS7fueGVxKQw64ZSB9z6ykAa4gPy6iJ7HHVoDeS",
  "key4": "62jWHERam6bvrq1dqtEJMC3pArQumzbbtv4Hb2jNVuGxbDjuYiGrcLn393AJ46Bpx9a1o19ygVvsvPrBWbmhycPS",
  "key5": "3Z5opkPPWDb7Xuoq8eAxTDjbc8LvTKZDYUZN2ZSicwwbWJrooVoxnT1wmSemUf9uz4xKQUFti7mEpQyJXvi9LFsh",
  "key6": "4vYDkuDR7WNppvBL4ZwussLW8sBBpuNX6Mnoekz3GNevzMoH1dPgkRwuBdhB1rSfA8cSnvoASsj2r6Gq3pNPMmnW",
  "key7": "27i1hVsxvZZpf9FyxevNayqkpVrfUAWydX1mfNNtx1YCpzwkceqMBxJekDN9ntVnWo3nHBAMiZUByvxkjjFE6qSW",
  "key8": "4Giu6cZiaGi6Jz52jgKQSH9XF1bSNB1b9pmU8JcHVEbANo8Hs9bym8EbDMmPAo8d4QLwxa1DyC84oyqeRjZwywRP",
  "key9": "3uzSCWsofyJnz4Gcok8VLoqVfAiXcmaMA2gpDRsrT6aNJw9czBjSDa7n34Be5juH5swfELoGLPteW6d5awvPvAAj",
  "key10": "61n98G7VD3xPEkvzNhwaGhAUG22jS9GAw5YkkSFwW9opMJbHnevpB3TW8zvSBG4azU4YUxRBMawzb6nRq6RVuDPV",
  "key11": "5akWddeafy5MrfsygAN8ojTh9SDSrVCvZfnsr2D9WSmcYQsS3RjwVhHw2d5L7xsyrebTo6JXEkAw1zxt9iMenjGx",
  "key12": "2A6y2FG6UqH8Y8Z8qEme8A7mxUA1z5TEY8c9j21qFw9Q6z2AL6QFM5kB3UeV94JeaDQ36duZ81n1xH61M2GMJXr7",
  "key13": "2kTQd8g2tu4e6djMRqZDNbx2tDkoB54Cvs5j1HCP394AMmgjvnMkZMbQ64SwfiikbnZVUKru6sQzrQHKXmRFgt8j",
  "key14": "3YtT27B5mBorhdEwYiFXYfi4etBR5VcRz8rrZkrbtW8aw8vTb3c9HWjYSsuzVmJZSeYQHWeKTQedioGQEEWXGuNk",
  "key15": "4f4JhQvekSfw99QgrDBaqGoRMRxXG9p69pPjXGBkujdMKgLYnxCmnDrRWMSzYHobjYbYocEdB5MuX4TrnLtjCCun",
  "key16": "2r1aQgAihcio1x8VisBdRiWhmrqucXmkwLwJhrC1kWPzLdSxexbmQHknSGVSMxFmFXqr4rV7tfBBgdzmb1JoBZLu",
  "key17": "5H4jG7eosKLbfrcqdXnqPkoUKQtRHQE5carhPzXWEqnav52pJ1qaPDqsuVda3AnMwTsG2E9um1WDEg4UXgmQVeAb",
  "key18": "5mzTZHULA1W3ZJHUEytivDFBtdT1TYHVRgo3y5XjnzcgDV9MGuVCMj2GRh7iK6tejroodTQmCuUE2PW95LSfSp7v",
  "key19": "iTrKd7RrXHNqZPAghx4RumxXbbBPGjpdrVJsRWKHBx9dHyhfiGFK4uHp6kwS8sMte8HajRXpxAu1zzpKXHjqBBE",
  "key20": "Mh42T9pciYQBGGMRkcmVH8y9BK8kd3hVY6RbJhLhHaVD264MS8Zuz5Nxkz9WXGSL6zUmqiN2zmGpEGwsebBAEaj",
  "key21": "3vwLwBe4nLsZjRw2sbC6uQH6dPj48xcZ3NG2V9YhVaFmf75LiYfm4VxtK23bLfKL5K74muYdvmMgA3VcnMzsjsUj",
  "key22": "56Z9H4DVEWnbgYC2n1GTk5bVSRzpK7ny97rv2JfJHQUeC1jsCKhQm1hgX8sr15gw2EqoZVKEJGRHQbcdokQ8ynHj",
  "key23": "5Qb4QMqXnVmHmSAmbPfsfz9Z3S35Mk52FNmahBRpiu6DYvnze6fFVnDSP3CJuTeExDzSS1jWnZsCYaEpephym6TH",
  "key24": "3ZcVcnce781yJWmFGwEkJg5VcAUkRXGxUTU12DoeFBp1zmnaASkz1ywiUEahmAhuo8y2pk2hXBCqXMvFAwaHK99e"
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
