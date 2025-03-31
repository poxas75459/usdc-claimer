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
    "3hT5iQi8fboZzB9mUrMTtUFh5bLTgNxod851x5zrRKfrsVXNUgbnhYQn69TAYHjg4BDjTEDacnn8WWu78SkuC6dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41oY9Q4U8etn4FdwJoXUm7FiMaZDNdPqHVtCeUfaSUzc4UdksiWEKHHAZkRqAQEj9HytFoXEsjc2RYM3exmSfciQ",
  "key1": "5jxbA6QT4JtGSng5P9Z6ETY63U67UdsRw6cfV11M6YS57T6fgUP5pYsDSF2DgdE76fw4sqo3KVEJ6fb9nKisZgdC",
  "key2": "3qTES1r2yzGWismLD6UWhMNR7gMTY186yZi8pFHyfq7gy6b4DiwVd9kjq2BY9RdkoX7UbWbABEzX8zWJrAmq1EbD",
  "key3": "MpLzxaGTchhzAsoeED3zAUn3m6B3v49UDnWrPTc5L4u2g2QzYDnao9nDCiTJvFFpFzbPUe96sV91v7E5egHUNtL",
  "key4": "2LQADxJDQYdV3MqaV5e8wHGC5V9YUbc5c9hv9Yhcn4k7ymcLvrRhW2EyUML6WYaKbHVxfWouYEZQFCG7FEDUoZp5",
  "key5": "2Qx6PBrcLt6co4R2yyThDNfwoBqtgioAdqgb3uVAnx7jEfTc2PGaWFCAv3y7EqHuUGZMVuCERPwfF6QH3TjvSgG8",
  "key6": "4x7Gq5A1JGhzNbgf3Lsz4s8df4RLDyZ2GRRtHsMokRtXjuxrDyKvx4wVJuv3a8f7jtCFtnwbENBGk4TBCiEZwvqy",
  "key7": "Vz1oGTSQnT4gfHJdd6prrFBGpgsojWefshg3BdsUhCFr2mMiPf1H2EHZEUNxtPYBQbAiSc9DFYSqntRXXBwoAVo",
  "key8": "5J4gjzTiXJVxBnjgvB37j3DLt49isVgcSvQyTaLM6QPVi5Wu83TBrciSkfHiFtoq898AZAv79ZWyuULiPJP37dp7",
  "key9": "4rQfuVQ1uvkX6xFTTMugbm675N9GcSQriGwvhiAdMyMfbtu31KCeEKAt1LUHk82KAGpNh9Edm8RzuyNVDGuSet8u",
  "key10": "SVhw84JWG56jJ3KsC17Mh4HZKWHSFx9UxhRLAUE2Xe5cDvMTeCi7X1Wn4draxy96SVC4T26j8bKKcRFViGxiTdL",
  "key11": "uZ2cjGUhfduUMWekezrQxK1CZ6T3H7A2EjWwumUj3LWiB5mMk8X3WsQTjA4KF8tovyye9RJLqDGuKEFR1LqwbDj",
  "key12": "27UwtsDQU9YY7tkTdYXaLf4STeYb4V6M5AMVoA1bE6ko1FNQYYtTbTHCtcQs2stp5qzdJAkwWC1Gyp9tHMGLkYzC",
  "key13": "2emeXJ4tCHJVV87NaAvfSHApW1Dh1WZp4GaXbSs6F9aHnZeDANfTDxSsd81dG78GrWdgPHH6cFVXqQPVb69U1paF",
  "key14": "5B92TVWCNwi4gRYRybPKKCpHQsPkaucu6bqJXRUKm91TE9t1h3XmYJcyVgxdZ5SJ5xZqAYum5FxjLAYwoCQg7U6S",
  "key15": "LcqgjYuWb1HZLXrbgcsHNidk5RxM1ykm1tK1fniAiPEWEQVVxHVrJFz7DPn9JoLNjESEL2SCvz1Yi7As2B58oxZ",
  "key16": "23hwwAuqpyXspC2Beaa8N67kcvoh7T6QbCziEhvkQzA2QWB6rqggb7jNSt4S9BzixC8nQj1RkZx3KzJoF7SJ7Hh8",
  "key17": "5uCGPCd9CWVzxSyUpWNVwDjYvgztTHZbozPJTx879CXagdKULVFFkGKeSyV5Zta3mm8qxbbz28sd1jXY2xLWtsrw",
  "key18": "2zo2zU6PfpvayAnLPWsw8MChhtqAtyqmkYMqxepxNVuprdU7dw6LMcN9hQ4daczGVkMTHU2cJNK7U3rQ5tpe2EvH",
  "key19": "4JH52XQX74Pf96yRqUUdF1xRaYL8nMX6kV2JhPxCf73P3CVrkyjWCGq2bxgJoqDfyWvsuvyySgWK5Kzs6qSDn1Fr",
  "key20": "3eTHnYb5MVPod81zPJRwAQdqMKvNi9bWdF1edCT5SguFnZi1MJjDf6nVdbMEjemVo42Q4acNhoo6kCBkwaga5utf",
  "key21": "3ebudAHy4wS2gSf7A3JWCXWw4wrZaAUR8CjKVPjTv3qdNhtty9i35YW9ehoHTD3eHhCYuohoTqcF1KdahRADy7PQ",
  "key22": "4RymkyAUTTgEMhu1JWhUnu3Ff5XaGQtX5CsA1FUBhHC83Yy7aMruqNHSHnmLMReRJNqovyz6YeYJpu1QUXreGm4",
  "key23": "57uEC4AXcca7o7U1BHiQzn2HcWMyyABnoZqjbPcjpt5t2pBnhWjULwuRwnUat8JjjyBr7hWUQManvXWxkcW7vaTU",
  "key24": "4qLAGyr8J7d8cSjNYCHv8JNfvecm8oQyy94mFSoe716mZR3yRtLnrtMjVggdRYxXgF7vx2md6wxcyWiGrKwVn8NM",
  "key25": "3FLNeSeRcoKXKgc97LdB6swkbe8sPN8UhcXe9Y1rfDqXXHJ7umwY5Ens3cDPr4BxwhTP5LSSsKNipdqu7wM8rFrT",
  "key26": "5b1t8mHndA9941mySeTouoi4RF3iBCVxJjMzKejXJhp1k7AH2jzezZJj2vithwgekcdeRjNYvaBCRdebAifvHhZz",
  "key27": "5NjuddDngHR4w7tkDjy7hfXMWXZTDKa3w13Yum5EmweSqavs7hTdoKH87wkRkKebNnwBxpaBR5ejo2fLUg79DW4t",
  "key28": "4bSUN5oLWRJKRtDKD22jevNkD2CsgQhHmHcBvfY5HeePVh4fz1Uyq9CCbSKdgAbVeTYE83ApXiTkmSBSjw95uKZL",
  "key29": "2XDwdm2MWSBjRP38ES9jns7Jf3JbyeePNZcVQ8k3sJVEfkyMAtQLZHvtGRgh7SoK2fKrfCVPVsRUGynPJjdPxRe4",
  "key30": "VzjazhKc6o26sB7XqDvDgC9LpqspbzZpMAUaesFchB4PJ9ZURtp9ognnwnMVrJeX4m2aeU7S1pEXiC4amADKtio"
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
