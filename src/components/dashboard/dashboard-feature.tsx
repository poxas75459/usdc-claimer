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
    "4n6x5GdywJRPfa28YgeGCNvLCaSMUnkheo2Rs6fyXtu7XiDBPUPy6fZNKv7iCSCThw5QoYMGkuEnGjuR3DnGGp2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1gHBsCgQxTihX7PTqz8XNz8GDX6Hxa5cs5HbDzJpFVeY5V9i56MmZ1hoWv7XRCCQSgMkEdSYzJp5wpGA87uRPV",
  "key1": "5DXi9v27aakoDB4su8V9qqY9XnaBqpbJmnBL3P7LtSdeixRYfgXhjvYABqPRqgCUCtMSUu81DxebBt2vRbwznZCq",
  "key2": "5VuZoSMCo1VK9xg7sSt1j7DumwiDrj1nHTEdDfrSUvehr73jgjjMPDJFQ11yvKp5Rk2MwEFWDJy8HvKmCHtiKzFR",
  "key3": "5YKa6SW59bHfWGunAqSCQhHthKvKhCe4Hr7JDMCxQ1wQpA4QhV1vzKHT7oPdPo38qcVZUfYYrSK9oXHHknpHLRxa",
  "key4": "jFSq9V4BN3v75BmyPxSZaYyn2rhSu2EGB4FSLvYmpsvi4Y6adQZDtcsiSkTukggw5iV4ezQtAK9s18SQXWNW1Zi",
  "key5": "5ok6awUEMD6s8AtBBRisG8jzX96w4Yn3znedkMSkMeRWGQ26PDXVc3RZ7djnQcDhTFbJNcHXzp4ebmq16QbsHmA5",
  "key6": "3syYs4WQMeRwRmhsd8UjH8Fkmi22Tt3Cfu3hnfw17fAK2YiRPLjfKnSMpuVuZ4NyzAPCTMQzKbTzAQ5F79UMoGRB",
  "key7": "3pR2iEVTtK7WxDAd1uS8i2f3aTAeMRRVFyujJ6EUmNMFWKt3YHsev2T5ySvMuxnFfmQ9zKcVNX1QoEKVZUdpGRCH",
  "key8": "5CUi9UXsDdXarrYYbbgaSNrhvxNTGfn9SgXLx7ZYQDjh51He2xjScxn52vHKbBcxwFiwDfXv1LTM4QQVLc9eWXNw",
  "key9": "2hdirtTD39wXYHbNAuozBNh2tD9xZ2eNEEyskHY9M1z5c6keXwtGteCmeoxpXLQ26Qxk1kFwyMz7LEJX8mUA5yWF",
  "key10": "GBexRvwg9EgFCsbqAhfe7ygJEAPfyMYvpdfyyk2XswmZFDs7fPGF1mZEZf4h8enxnqVm2d7ebdA5BFpWUdWCdbT",
  "key11": "3LeQTLBYx22a1fJpP8aNurwna974t1bZxmgUosSDb1Wat3gyfs9QvSsNtV33rndwTT8JyFLxFXVAK3VrQX2QfE2w",
  "key12": "GkW5mxHQBorZRqmskWAmq6sDtvo2JCNWbkwtAzRgTpj9zkQbUhshnBKvYFZ5sJBxABLVPx55LB6b8x9Dm99atxk",
  "key13": "5xddjoDGJZ8co2wRFdBMuMf89qK4UbHtkJ2k2VpoZXA7CAZS3J5xdcppheTB7jBMdjBceSoL7NR3XQaB1d9QNNqF",
  "key14": "5ifrdxFaCjScRvesBcN8nB2qaAhuqKcTDE9DDzEEk36piTn66aeT53tjNxnMxELb7eF6Ww9sMgh5BSMQFRfJ75LQ",
  "key15": "3UWtmsWPXc22uBpb1AJvUhXukF4VttXju541Yi8AgmtxanqW9tqSZr7x3K3Cj7GnaKLcMo6imQdKq6yGyqqn8T1L",
  "key16": "4xs9BHjzYDQhqjEAsh8dPt813N6fjvNp7qebrJ3t73FDa8ynaqL3ensRrqPGCX63s4AKKfDeCjqWmCL8bFgTzSKe",
  "key17": "Z2VqWHdS8AMjBKSfq1fbLcSAT4NhUs4Pw1uv7hdQykg2fBVaCqN1THjauS1ZwfGTF8KZMkKkR8FUKzLVcb2iUer",
  "key18": "64hWkYXUdHR9k5BLXkRCx4vb13nTuxCnYcx8am41RoYRfcQTc8ounN9qGbzcgNM2KaWep3taJuctrDjJAAWNTCtk",
  "key19": "4SarNa6nNsNfzpwUyVpDEuphHxXTqvQ9SbyXDf1K1CdftiK5dh4yt6xoBBDgBN3tkhwPR1qwGgNj6j9BHQHR2L1C",
  "key20": "6ZKuwbiLQPXMkes4ixjjZEWssqNfa6Hwqo6pavRWT6xqc6Jf4whspLUo9D7ogYqdgPmx1dLKV6WT1VJAHyceAn3",
  "key21": "45BzERBhRb3VSAmmktLRcotqyznW9dwQrmC43n4jJER4Ak2MkJyDk8nm9KtpG9G9rGPgk8nZF6pXTJA2AS4exL4A",
  "key22": "4jfQSFEGQLQKW2JLioftfEXvb2vpTKLWmBuXRbo5opkmkJe6gGuZKNfzngYK7SdH561sCK6nSqbgrdV7EewASiCQ",
  "key23": "3r7qJMeMzhyJaevn8YDPWEnvuhNooxt7hxVhZnZwL8payGeTLaSgTCK1KxW9FJkYcRyMCDM1NLzTXJJVfiHzmwdW",
  "key24": "vcoMnZ9A2Fg4ynDjnapHCsRi8jGsgacHWMs7UaM5tSqQcFZLb7VexdYnfYFL3wUmjbQE8H9rf2uPoxMCeZRQ3PU",
  "key25": "4pvKAy6aXmLgbcxTQUkvZQz2cJSmJeaeDLRc7gtff3pgyxSMeTZFgwZjovfVjJAxPLk4zTNKDk6K5fRU2KNx5zXA",
  "key26": "34sTuFNYff7wxJrMvx1srtb13zw6iEW2cdFTiLuFa9C2S3kv6iPkpZCPokc89Ts9hP6z9bPS7hzs8eiHdstrb5Y",
  "key27": "5YswhMrbXyFEXP7jPcyhKbVd2Kgt4qaS4P3gT3D67FbhocH6j8bKExxEw6VBenLYVgPWQCtX8kjxCQeZyDcCr9fE",
  "key28": "4tKHFb4K52jRsLxB2Rp7rdbg9VLN8MseKKqWKXWMsrZoPzrSsu2HVXhiYDuVCCaU41pxQof6g9ZxhXV7GxHSifHp",
  "key29": "3UvYDdDkEHQwEqJnUrHKDG34qWuuv1CXh1A7EyzFksnrmDc2p4P4pw2UtWeuBoFiYTDz3cXm6ronG8Qx28vHJ6xz",
  "key30": "dTi6aBW9RfCjb76EXT8n2tsvekJ7FmcfaFa8nPbTrGqSiwpAAtjqUQz7WbLfyfzsX5ucfZBP9Qu7D5o6DYMFRrG",
  "key31": "64TJA21Q9PCZRMAVvDHQy3FnQ9AKbY17gr5XasqcRsYFxZug8XEuaKUJjTiwNhBa1BbDsBFjCDQQzWznJHn3jRbo",
  "key32": "2sUJ55RbyrgbsUeNve9X394oVQpGc1g35uA2RRgPdgmeA98DP2fKSLaZ1ixhKQjrPbMcu26EXbq42SzLQkNm7q7",
  "key33": "3UNwsrjy3jr7441T69ugNTcrXZHjHFZMYXs4cZDYTczU2xEFFuxEVJhjRyQiznjahvYoBvwmqTCAx6M6shkkwiSD",
  "key34": "3fKS1uZnCMK3Nmep66odF4AvqvWkPosmsCXY5pJeH7R8QsDP1uFp7xaQaSgoNdRcSYGuCcbYRcEtxmJYg1z4e2TZ",
  "key35": "32oFjvjPD9yatrJZ5JRozb8FKW94RYjoqkXmDpDzGmmr2PBxEPnsXWPxd51HZoV4Gv7Fs9FBzXjhkzmBeVXqPDS",
  "key36": "48nHCKfQMiYK8ASvAJJL3NAxcBMpQ4gkW2NyZWJbe4Nikor5TuAcJePUve5jipv6Cqmg5u6KpQ96cs1Fzzwbtwyx",
  "key37": "442raa21d4exFDAVq2oMARgWwsPg9LTE1YEf4JqFaw3gsfGoJVcMwabAAHxuaUAuNcropndWsathnujHsMdwz6UJ",
  "key38": "4asnskFxjWjeeKoeuNnqJAoTRjX9b62DdtVNgChdRA29fz5rJQ85qwkzS6PvADQYGvVvzfEqrF7223cYHSTERvCR",
  "key39": "3sU7yrb7JM8Rn9TB2Gsb5K7a3RKvuT32m6sbkWyQ9d9r8KSxiJ9KebheQf1xcRGXvuCGbtoA8gHNhno7Q1xG3eLa"
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
