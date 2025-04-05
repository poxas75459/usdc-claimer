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
    "4kf3n5HiY3c7khwXtfPrBnxNFgh7CuQWEuftj25iuv8FfHakEZY2jZ44XsyVraGwyUSdfZhA3Tmz1bwHa2nUiASB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3HXxkrbvQsKHVXYc97S4Q5HGW9rb91n5fk8A8q3Xcc2RNftTSPhbnNYxHCHMiUgbaGwZGeL2yFsFhEPAavDZug",
  "key1": "4Dh3hDjo9RBvf7niwX6HWSzFGTyNRdnadsRUQBWAXe6kwn6XWmgVocNU8U92QsX1yRFgixgiRNmCLU15tWtHiQSg",
  "key2": "5weitzaBE2CkvywiA3ndxG1tZe7rfZekNkwZ5LfhaC87rK1CyvmYQREt67hB53R9KpqWr8WDq9hJo3ppXo3fpgrZ",
  "key3": "27hUwJNWhA2AchGtDGLAQx5aEyjGZ6whff2m2a3uZdwnsoviw15Bk6RXdX65iwxo7Wo1hC2M5YMbQocBDgFeModd",
  "key4": "PUhMwiJZ84mr3wy6Wq2AxquZ6SiB6yww6zkgH7w2yuQJftwocE4ngxcr9e3wGbbBG6dFmeYBaESh62wjZSqFgNw",
  "key5": "5XbhiQDjXvV8pahfPHENZnQL18ch9iSSDZpydx1kLRPoUsNNLfF4Qcqs1w9NRaYH84Cy1HfLUBSsV2xSHGwQgwL3",
  "key6": "2bEmbo1ESXb298D38EUxudb5WZX4Gca5JnxMJ7cXYZhD7oDicryAa8G3vtvofYq6MGYHTaCtxKzYqEFeKsrsTDed",
  "key7": "HHurGSdZ5FQqGoMjd8kAZTZzvAaMn3PwGwm3mrytx1vWY9W2947U3vZMfv9Tdv3ERja1Gu9A2coGhCoo8sk6s2a",
  "key8": "48XWX4m6hFp7kY9qSGegd1kgD5yGnrnXF293V8UpNffP3hEcUKFtjweuJnCpqr1UXDuJgh4ajF9q5Pun19jQbmdC",
  "key9": "5M94wZFrWqTiDGpC3FMemPFUeb1pBZ8NwW8xme2oQiSUWiT7u463ryWJkLuNjEX1fpud4715CWZPDnmH3Fs8xazJ",
  "key10": "3zddna9Ps7aT2onMQ7DCjvDVJjEsptecuRKfn2E9mMFVgZGVzNW8f4asaZFRFhdiYnF1HXRCvqEqxzDRE1Vu3Pf6",
  "key11": "2CbyfAph8vFVybfbrUTrc2PFqx1CHZuAyM2A6bh7yqjKYLtH2dPHghdi1XvAWbeByEbzjqZ3s57we8WrURoqFDPM",
  "key12": "5kcxistCP9a4nJHLT2ebZ47EcXXYQ8x6hG7jANXVLXthRUuTW3pFBUxfcsv3nqyhLPH7L7vAhThrykdrM7Q5UwEL",
  "key13": "4xncHDJ3BSPSjinSwm3Z3g4PCVnvATLviKhoyL5iGwU6nXnC36vX3qdn2aBRY5ZhCKXfosCqKQR2bPJ3ri7NbmUM",
  "key14": "62mwayEQTo6841kwr4S7vWu2ybnmW9Y4JqZbyzvYWt5CnAJS1nz6id1Qr7LWLcYrYVCJLmFf6D6At4SF97F849VT",
  "key15": "3SPwoNmium6FBzLG3hGgXKN5eui1QHorm7gnRsEjrdgQmZ7zEj5Y5MWRPCdewm5KrMYzezjV1k62BX2SrWSj3yKJ",
  "key16": "5N1BTycAz7dQ87uyo1a6xa6CrTcCuQNd1WzvsiwAbnXTKH1J8nbLozKL5CWSoyhEr5FgW8AwN9nKHnumsHgCw3uS",
  "key17": "3cVsNBnR5v9MuQPEqc62w7Qhw53i4raPqZz4hCNMUQgDo8WrNPZADvzAhtUDtG6NVVwtVnooEW1ihsdmyh4PDaGH",
  "key18": "2jmUo7uNshi7hdSavaxj8jtKNknAvtWswkzPPVxbjr9qRBmF6i7hTGwMggzio5QXsn2J1xLShCH4PEgKsdLtE3tP",
  "key19": "65nP1Qrdf7Nv8ztjWFj53FEEAhh7YUTBHXo4aWq4Acf4XaUEZL8egzGxcERUfFp2PRyQu4rshAhvLyEcyacdsbof",
  "key20": "2yoTS4S3p6atEVmmjhH6VoKKcYY168ddY9qfoiuzs7EininF2csQDNTCb8c37MTqCULcZrJF5KtXbuCUmwMnWSYh",
  "key21": "2ADoHYQs1zxvcDef8BYN87ZrrwupHZKFYEa2Fqhy898xFsVrJFDWyLBYCvkEe5c3KiVZ2tw3EzEFTACskwHHk6v5",
  "key22": "5mNNqAd9ZJFoKFrKNpHrDFWxUw4ohNdrUBZg2bFx9KuUkrrUVjryojpJkJy3nfZUzGtwL1pTNZkdF7w6vi8BeE5v",
  "key23": "Vox6bUACAEF8briNSPpgoor78gMBBnBPKcPYnmfAT7pP4EaFoX5NhDzpiVjoymsicAP8RAskW6mzJ82GQUnzMRQ",
  "key24": "3ApW1pSLaeZCgAZQFPXzPK3VCRpVE4S3w3JvqB1YuQscsCioE3Sy8EJpwxZn5fy2ozoko8wtKruifQ8XavHUyTeu",
  "key25": "4nJaUak2D4vtyiBSpk9v4jiQBMPQ4XkUVDsK77Zet9145iLXMiUAK58vcjMVMxvUDCtyLXXMJLZV1KnKZX5XwgD3",
  "key26": "3z7ZykZwq9HsRs54KkAcecLW2Ru8mm4ndGBK8tiMAoQsfwmFFSs4Pqz4o8kEnkVHVjVLQno1DmMeYRi2J5MgQUau",
  "key27": "5G946P5zWki82qYhRTqpDKa3JK2sAs19BPAeHPWiCtKxdAT73PpNHp8koQf3HDcnprEjXqJXLznNyeYJ61Fkv2QT",
  "key28": "4bfDWW87oRDsf9Yo88s8UoqT9Map4uGszekaJbWMKhPe6iPTGWYsGKjTrQWSWkWa3ZbQM7m2ox4ihBrYCiYNkA5V",
  "key29": "8P1ap7CttMJBSTumk8qnaXYJeL7VVJ9vTiUgU8cQknpJEJYxUNkdLQTJeHHn2w2TL5pdsUVAorzsXsmqysG736a",
  "key30": "3sHNNMAse4Ep5EaxHEHvYdybeJuBrv7yXVQLzWf7W8UxESHKU57oud2TKHSzqzTgWCFMbiGbKMYadB6gKQSPmLpX",
  "key31": "4AE6JwGTZTatZUVdzkyghSw3FLBX2b24DkwELkPFPXAVDaGrAQPp4RshBDQk12ds2PeXCfPkqY2CKJ5YcgNwrwg6",
  "key32": "3sNvcQUquQSbRjXvtCK3LUVhCCo2owr2fb7PYpWp64Prea9cfhtZXYAc7NkC367YyVEQvRdki6Qs1xwqZwPUjTHY",
  "key33": "4ZLBbYqU9LqGeGsgUhn4RH1hJWKqstnESoS1CdpHyvGCZnkrPjq5euJdqdbx7cdAKPEce7VQTkD6J9GP2AyHwttm"
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
