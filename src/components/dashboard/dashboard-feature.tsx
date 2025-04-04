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
    "H9FaZZDf9QHAh46UJnvHTxtpgwwznZSBpcyaSMnQrPok4iv7s1Hi26UDjDomTcyxpPN3UNd8vWeFtgW45EmMUpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUMqADswd4KHGGR85azdhqt4vi9fqTZ5RFoh2Pz3QWtPE77QCTYZ83pKEet18inPhUZw566bMqr4CZqp8sk2dEc",
  "key1": "2PpeKLkFXDETCPQBmcMt3AjW5EGwbkF9TfiriFE3KJXiyKvGPM9QAdbuq49bsdkKRkkAXdCCurC31h4QApE5p3BS",
  "key2": "3bpH2cNLshSFcqJKA4sHHA35enbmiaarsDrHxAzRLtJbuHB3JThvgSf9Do2T8d2p2GPHAhM3dPijG8gTH7dqXda2",
  "key3": "44S7wB7iyKsxtYTqovgNNbu6CzX5BMaZMZAE7GXoUhkZy4144sFvC6rNAwZ5ieHQc3E65aCcaph3enSEr9SqQ2VT",
  "key4": "jTcYz7Lq7EuBsdQX5QXntjUrjQpcbgZgwXuopxUKGiBHjE3nBEikB3EgVboV3vEJQtj9N3Hdm9ERc9GRPFhwbGb",
  "key5": "3h3eynzcTXmDm7vXVDzVWmBA6EnNkmusXZ69paU58GewQhXdzZDfSmvbF3UfNWKLLwqoW1gwkWmH4bz14HHLqhSK",
  "key6": "5b5c2Wy4y6SBjuRxiHLkSEdZHRJ6pFDGhj5VW7d1LJNDVUh2UNtSWvH9ea7DJVtMiKx3K6KzMYMWYrmM4w4PDL4d",
  "key7": "3ffayJvXbgSK2D6S9xcWxSmNttfo4wciqnRz9CEcyaA26EvPPgNNnWVzJrQU1uXCNM1GnAELACspaeFNeff8NbNo",
  "key8": "w4rSTRZJf6eEU4iuCrFudAMMiXveHRQP4zJLi2FRAJewo4d5TfdKGCByQsg6djQu8ktwKrVi1oZvgK42NnQh1hR",
  "key9": "kGTw9JQPMMsyUrUVcGG6ssgmt5j5t6AjotS5s1xU4nRVPQGnxWrWdjb7RqaGuQQF5DBZ4ZbhxdQFXvhUDwu3B1D",
  "key10": "5nweHysivi933AbUY6AQWZwqiqsvyyWRVhuUt7goc9AHSCNAKWRceza6nEHrqRSzHbTjAScETxuBikfdHQ9Xesej",
  "key11": "3mJ8iBAUp5cQFpt3G1zL71iiFTA5Jot7Q2tV9zPBERcYV661e329ewUtTRAgUFSTUapuvm6JNVkFA34ynjGgNomp",
  "key12": "5dPjLyVj4FXyyEfsN4nTSpfAmgVvXuL4BFwoF9wMeMbK9p9gaYexAT2xyYZexKcsFiZgFsYKVZqBtU9xT1aCEK7k",
  "key13": "64haAhZEq1xvX3V2b6VxkaWvpV8ZpjgLD1rufumjqD2phYtSsQnVEfheXaAMcPWZUjU57GLdqfUTMZvnQLiKWMgb",
  "key14": "59aTQPnaxHFt5PXZ6ERrDe5K7wVJGQW5PypUZJrf4p7xSDHiuE8W1qfV81Hqy3KUMitEbHqGcmqhys6bghTLBdgA",
  "key15": "QDi43BGxdyToVorrow1t6HFoUbC5hvARjviU1fyozYyaeQU43KYNex6vfpRKNZk6vcXPmLB4akgwfFgjQM9awwr",
  "key16": "4d4aDtYgaJ54jCXgvaykz3aDKBBWVGci9h28ZAvHbTkfrMTKn15bqcbFyDQyrse8J4KTHhxbCkGEzkAFoKYwAUkN",
  "key17": "2QmGkbSEzuoXvCkkMdfcQnrQsoKyiEgTopNL8Nu4yjYDvDBwttw43SCWdcmkL7ZKjU5FhJrQN3jPPd99AwqMsGxh",
  "key18": "4G3v9XqDBLCU8Wqaz6fkz33NuzGBfuq2k1GV7zMVhmrKA6bCZkX3cB36gDa5AFUixCJSktJhyoGcRozP1ELc7mai",
  "key19": "35T5JhnV2J7ccBzSrjVUNfbRMdoN6BBawt8qBmXcZpWKeNqAVug5s7M5gDrkZe5opTZsjpVmCEiSgZJkuJosYyw9",
  "key20": "o3dsrQhUD9Bh7ob1iUDk8vUSc3N9APazBwXn9LfGFTSKonb4jeEAaTd9KuAMtLzPfhoTFBhgfKtACfGC8u3QDax",
  "key21": "5QjcQRWJCqknRv6tJ1xgVKbwXnd9TVrZXTh4oTHEA3HNScf996bQuBQt3AFtpZpgKwr9Gbr9eECpxZ5Csf8cTneN",
  "key22": "231kgNYBNraN4CkHwwhvECb7xZLMjMW592GVA93TEvwSSgqnWiVr8bb8KGhtfcYcNnR2Q2n2wHKxHq37aF3gCzQ4",
  "key23": "FnRN2wZ16aAh5v3XAA3EimgwbxTmfs1z63GyRmGLPoUnaYEbF7zabpHo2vSunaCWpoFPEMQG6YUTHiu3iRrBFYZ",
  "key24": "2a2TjdAzreFrHGxoGRHopVF7tUN9oavFDDtKBc9pgPQB2u2g4dhxo3Vovt2qLmqnr7rgu9MCKFMLQdmLp2jSqsR5"
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
