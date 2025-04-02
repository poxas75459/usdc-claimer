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
    "SXeCJnXpkMFHAfEeZLhH6YkqvGDDkqC92H7f7noMw5z9adg6R9UTGryVvfwRp2HDPj8FhVnwPTPSLXKfbvP9Rwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCpEserNCsPsMv96K2LJKsAAJZ7QZFQA2TPf8refmd5pRoiMHrRshWs5CrPujSe2YUnHfu3SEeMWUDPEdffGjoW",
  "key1": "3oMfxxVMNbFjqBBwYm2UqRqLvPmbXCygKr1DKEzqChLBN6ZoVpG4NGu7yJUpg2NiSua7bao3oByzNMfGePu24kPK",
  "key2": "3bAAyxgic48rWASzmqCwE1B3FiuUj4unLSamNSyvkqAp57tiKjTxX16ssuTo34J19qNx8w7vgpfQxE4hREbAVLr1",
  "key3": "4LFWh98omvgv2TcHB2oB33okwP85porbFg1W4P9aSqrmGoL1xKhAbQAZup8RsUPADt4wTrwnva9qqdBoZwutVVj7",
  "key4": "2KB3RmZaBpvm2hqCwJ62GFAdHDgtUFfJ5eQTTcCJdHaByhNv3cJ58SjgWSzYqEmGtgvbVTA6hQvek6mNEx4gk2D5",
  "key5": "5wZ733TfWE4DyXo1kLKsy9nbVzvytEutU3NxBu7ScDof7V8H3XjK7SkFDK8mkBeejNNYJyBZoDTY3V5BWBuh7Qhb",
  "key6": "4bGbEvag8V69BYu87uZvy1jYQe7Y1kRxCoacCb4FWG1MeiF38X8C3QUB8hD6QHguw6j9C4YwE893XYf1uyihLRCN",
  "key7": "4WcAJwNcHLjwupneWXfMeL4mUiFP3ZDrVHtHPRo6Vj7CdMT1YULvpoCM91BfzbqgKaF9hyuMpffGjd4sADDE1t9u",
  "key8": "44yf9DAyZUfnbPnvaEwDikNWTUvA3UPTuSRX432NM7XgUYpnAMZno6oK5Lqc1DhiKqgUEtZiWpqEa1sg7nSjbW4R",
  "key9": "2bt5UD4Jn8S5gVRPLji72Bhp8NrQEbgtSeVkCeMkuPj2KiCBen4wiCg1j7A1CUYJWt7v3dFkzU7wV3Y9zjdUGCdd",
  "key10": "5Xb7J2C6jwsi49hnTdKh8r4FP8WA1hQJMq8GeBYbA13bY5MAVNsMhBxAju3tTh1yUgQgNTEFiXBTtZ8XhyhffLPD",
  "key11": "n1zFpJNGaW6joeMi32f8fbsEoNA36f1LvEFfV2CpvuwdrDJBy3RLtD5GFA8qqzfnupAZmPyBQvteEoQFH9JFQvv",
  "key12": "BTBMBCYPmEqnVb1y8U8mdaGq5c7xoUFbezc1JtCB5h3SSMnuaw9kHxcH9bUdpv5WepEsw3VSrjihmj9FX33kARY",
  "key13": "2jvDHKsFCHFHnGMRTeobcx2BoTMygNjaMQDR6EzzSRzFBMshNJr7bQnDB7fXWQZSQgRrd46qzHEPYzLcRzmjRUHD",
  "key14": "5XhgshHSsAsjj9XTkz5wdB6vqTXDgpEroXFLmmbnHnxnvFjv6HirBs7oCvXiSZ8fV3RRk8fjHQM2dj6Ri6nbV75D",
  "key15": "bhAqnKnpJe1JTSQc2ovPtVfwzZNGK5Fgq5A5iangR9QYyuVCdUtQ9QdjM92GSRYoePncPQB5xwqW7WjjFp8L4W9",
  "key16": "n5ze6eCULswbmT7ESoungsBq4EcV1ksrdzGJdGrbsBhoCdrFuMbHLMdx9UwigG4cmbKdFpyjY93Ma1kAkraQBcX",
  "key17": "4LzrsDdp7rotaUuBkMAtDEECX86GrwUAXSSmDcLQXrHftdogyCUsua4gGPP6vbKMf7HRodwMhXg5BaaH6MsHQKQD",
  "key18": "gbS2mNfpECPJiJS37hMC2U5KntsEK7KY4SUz8RUPybcT3qaxBdrw2TAnXbhvemr5C863urFZqcLa2fRWvwQvv4t",
  "key19": "1QAxoQqKXsvj5h3PvUbJbhDYashcsgq2WDtNWM8FgfsVJ4fTxYidG1ySLQdfrV6ykVDFrS7pTyn4RdhyP596GaJ",
  "key20": "HZR63w3bxUsQif34gijTZ2PTN8TpUWRyM4ifCPtBbzjD7p2eRn2WPTDgztxA8tgMApMNiGgs4dkrJkYf9NezEtm",
  "key21": "2k3vWEGGban7gKgptDHFhXJdRHZgECQUzVzehcesi7VJDSXKfSEzoEXYCNyqPJnKPnUk1B2Q7jDypfWNfXUfGvpq",
  "key22": "46FsgLcKQNkjboNGkMpkHpPHAdiDCR9vwxSJpDAExJonUXcVHoJpuUvcPpDr3ikWSvNo3e7yrHuPiNM4vY6gYoP1",
  "key23": "3Ja83gB6pgTjjqZbVTqBcWu6C2Svf6sf4NkbjjP7sX18kzWR7a2eomzKRCQsnyaRrcs9tiHsWBn7wJ9kECS1CNqy",
  "key24": "4ed8g5dVFUqBpSUMmCwau7gGYaB8MM9GZnVGaMLjvXKT9gfazVaCuzQ6oaG7faj37zxKZNVCT6szffRC5aijFr2r",
  "key25": "Jk3cziTEXD6xLEczN5famoG2C2szvHGCxvmhgXDSH34Crzs42i6h9SBEwnx2LFyoRrqmEr3QNavPuS3zofn4gqS",
  "key26": "zemsqnGMqM5PL2hZP9eakczi7NAXKfAzJHMMr1wqbvHA5EEGuA7km1xf74ANFeQodL6Ruuh3rtjacgAfNyXX9mk",
  "key27": "5aipx3M88rvJ3cjHpRnJkfNTeX1KZv7NKpqwEvmha7LW2bFNEqHs6zaFdnCr27ZbKQ2Kh2EZa3XiqBYv3AvNvNv9",
  "key28": "cVgLEKaexeAWkG1qjtuu77pkSp8LSNF6si2sW64nZYP1gJYHZDqj9fiYzR2r3dBUeEuKEvzFxpyriGTb2GhBgxU",
  "key29": "jwG91zDWKPfrxNnjkHvQfCGVGhW7kp3bR8EWZRC7HF6zCJ1qu2Q1YJ8RdajWwFmvh7xwzdMmtHZzwCb6aeorN7L",
  "key30": "49XZkz16PxyD3F6h93kNwEDHRdLmvN8RgfFk4aJtovpebXAKNQxtsBdeudn6JqMXzix9cYR1vrWEYD6bjNTP5rPq",
  "key31": "3HEEY8BM4mbTxXQmRZmBmikfeTbicmtZSNWutnTRPQP6LZUiwsZtt3iHEJV7XmaQnn9xREhFViTEsVwJexCbV2LC",
  "key32": "3gHuh7Wf7tpWA7VJhhjCxkt9qSfru46FiqjhhKqnLh65YKrhhvCMpLp5Vik1o8pr3SjxmqSQdYVtX44frke79V7J",
  "key33": "5qwB7B98L5uM5xHssNAgFqWhcepsVLJCmn4XkDCeY4b3h4zQ5VoeW3342Bmx8LSGEkEJm7UUJzjyoxtMxqCJUTj2",
  "key34": "KAR8PpekgfqyzoB96sgEQmZXYCE9N8hL7okC2FfBntL7CCWQ8DUXnoybMc8Nnobzg7oj3ZJNKXWhh4Q3WLJzekx",
  "key35": "2ysa6kkAiS1TiAc3uAqMdFsJB4P7GxoeEA1Zxbf1rNEB9LkUgTxib1pXWR7cGJkYEckWSMMLJqtfzputQUpYjnti",
  "key36": "4nQxSGMTyN4zEUTeguimpKjzgaFNioHa7DFijZyjXb2Zy5BnjL2gbHtmvjEbB5HAwJuThbjBvAKRtynFkycsCZd",
  "key37": "52iHVgwyF86oU4uoLVmuX6rkdddrfvtcVnE4y2wZi7wkNPC1KkgpnxpGw2srb28bpFqxXTHc3SnZDjTCXhALMVvT",
  "key38": "3yMduxju3KDw56LAhGSE1BZtHf6PPa1vMUDhRxbMeorSSmWwrzyLW19X9WDSaEZi6PJp1SWoMSXtCLcfwKjTGrid",
  "key39": "9JzV6656Z9jC2AFoWGTYKP1EcGj13P4azJxUQw2vPh8vphADZq1XLEsRhsf1sVM3rs1DTam88PZH2GdsUJuMYrS",
  "key40": "3c2SJ7V1fzkqrMmghDnKEanVBTEEEwad2NXE4hR5D4icZ8sGXtW7QCpo98FEmpwnJfh4yLBUCCepph3BjohvRc3S",
  "key41": "3L8HQqHwss5v8ZjDz1LsU8j3CW2f9jMCfn2kxCuRoK9R89Qn9krK7KM8SrKPodBUXUPTKfDdEgDjXAjA1ehjdmR7",
  "key42": "4QgtFo9KUdR8o4DcLdLJML81UsXGbvBudKyxNdf7TTieFJkHBbAPvQBj1JCrxih644v7tDiq7cESTR1XvrAedJge",
  "key43": "37nmgjQdTcauLBH5iG1FeErYNUiRhHFkZjF1AJShRFRcnsVowwxbQCFbWaAWtHjwRFNpUgvQ7u92LzrTSGEejvYE",
  "key44": "2AcyrcB2JTcrykKFsAvTD8ex3RFHCCSAbSNXrA13KYZC7MoMjGMudKt4Awz52L9c3BL1M7DpXRS3eDYW6dBZdwxS"
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
