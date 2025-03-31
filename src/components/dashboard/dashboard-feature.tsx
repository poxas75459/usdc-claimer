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
    "5Vv8QsSgrzq8AsmPikdj2yGvuvmx9vFncUpmTpUgMLyifTRVWYfg3diiqgoTJnAPk5TuYyoUKZT6UjtxhAAA4uwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGYcyuYaqK3rexjns1xrDSv79sznmHrJWKNcWDdFWPSw1f4d7adZ7KkcdFwwhbNdGL4s69jMn2YdthRafoGgi61",
  "key1": "4G4Bp5CFQ8vCnLPSzKvg9MGDk89tFZen1wKdYmQa9uhsmCgELb7ZqtRsGN4AJZDauH1FQVBk7BH2965Q64sHZa7b",
  "key2": "WME89m9cuapuGynnJ5QztyrwP2EW5tn34geZGt1qLUQs6VPqb7R9y2qMHWuXnGySXwT7yHuQeXU4sqTVNARtNm9",
  "key3": "5uYUV6TeMJPctQG5wU3ucuhhCMKDe4eBsJez2XmXQGxS6PL6bfQH4ksjGnQuMVsHz72uSkhiq3ik92wDke1oXHBx",
  "key4": "2UapszafWHRf2oFUEp6vBhAbZe2Yyb6V6MJEhJDgicwdLHPhuLP9471d1Uo4FjWiSgtqtGCGUoZdG16X3aAW33zS",
  "key5": "86hE2akERAVnoa9DfezxmddUZ1pvWKjDL5HacbkNUnKp6EnZAYJmzayo9iVCUQRg2uGFt34rqmkXmpuE3wfpYEz",
  "key6": "39wiUHT3keJi2KsZDPJpbhhDv2nDzzCyxN2zyBTEa147Zqu1CkvpEmLep8ZbFvBvmoACp6j5av7o1TvWEufzwyCs",
  "key7": "WaTZTTXyf6r45VgUEmJQmekKdVAjqwL8BAqqcXyBgc7iT5ZzoZhXKSQXAhCFMigqCXLt7PRT4HNLydPpKDuhe9E",
  "key8": "PR3h3jpXzSkumBhUFCdLtKLjaVf8F9gAMUg5bpvam79rntEv5RqEvgYCyYPDrtc8usFYuWpZhiGkKyZy13J7AAH",
  "key9": "4rM9KXZAcJp9TqpkYbpViG6XA3gnQYyPkrGkNJGSigSQSW1rjVfCdVYtLhCxJepRyE3aSSMvYtLCveAVCmhVdHFV",
  "key10": "29YDdU9stM4D3esN89FYZq8KAqtBirWDdK1EWvMjqvdxPKFXk9s1oFEpo3v2tJu7R2CnzUvBasLC8xGck1Re9Exc",
  "key11": "5cLkcAhG5DmYyaL3QQ41q2rm5SnSEuGxjF7A2KkvuSomDY11eD5nw9S26648Nph8LJexdYENJe8iWmBAd5ZZHCm6",
  "key12": "2uCorChTosbYKKh485kt7ipanZuW7CK1MyakgiGnnN9XAEXb1Acgj7KphxkfBu2spHCD2sZCr7iuQDxPbuiZB9Ur",
  "key13": "23ymq8EVcoxY6gyHyeFdgSsCeZF76BvkUZGpMbMZm9eEtqcJHZdEqAF6mJwACA8iYxd1SgEJ2N8wYFQNBDXimArz",
  "key14": "4D3D125yB418NT22SeYL6jzxihjgyjEki4YgiZsy5sZ7uybAGkdD9s2kpx7sanuSZeAjJVQRZeqaMW5tqkhcCxX5",
  "key15": "65UEpQhML6dPusLjnRNLLL5VbpGm72BsA6ruXQF8EdsZwzS6bBPni2em11QAiRj6yno4bsxkXqhs4sAHGtheP5Ch",
  "key16": "2Hy5M6Zxp8LBHaxhjBztASd6op3eeYWAPX1jmZnpou1Y7kqkGVTNGSVujYKL7HmknmsVm6dvDvhUk3PUzyDDdYGZ",
  "key17": "4qcq6dwXv5xcVxM57RrYJ4HhE6f3cMPd8YKbkT14obHNekFHheMEsAn5PNL27iaGTXZZzjt2p9fCFaHJ5E3zJ6mY",
  "key18": "4DYbBboRd1xao5F6iNoccwjNhXj69tDSodNHE5jAx9B1TnNCCd6J23T6KtAo7hU9aeUW9rPdGoUQnzMXHn4AgqG7",
  "key19": "5Bsuondrdm3qc86bU2aiVGHoK8RHdBD22crqD5C7UayaQHoWV8XKXGrqfHGabaA8W7FHh7XkZ4h79Gir49j5NPvi",
  "key20": "98oxyyz1yxScrsVjs8SF9TMBMa6hpTLJiEQCrNf58M4HZJw4UqjdePZXFCxUB95uZmxyYc5MQ5hLEp1kSDAUqYC",
  "key21": "4Bjnis2LNyDe68gaDrmgAB8jefV6p3FcXb9hcLj8xNC6FUM1HrTfyLyB9DD6nt5r6pSK56uR7ixMP7d5feY8uJ6p",
  "key22": "2EudFcmgw6C89k2zbtPquEWFSXtujRUb2LpX3YgEZFvpDs17fNnLsSLrsmTdLRQ6t3fuGYMVZkuwRrAxm4eLD5g8",
  "key23": "USSAsjTXmb3GsG8Bt8eLUTwCJRzfF6qWkcH8PDmcX4QHnkPkQCfXHTSrYMvnjQsGnHtVLjqWr2ift1VKzGbYRcL",
  "key24": "3DsRbwYLi19jUR6oYqPwpUYNJQ2viZVMFZjQ7MeSYPqm7s6ovNg9m2eQBnZVSuRMwgEsg4d1QsAcuXVSpzroSiLq",
  "key25": "45ag4GB6RUrvjCrA2AWYqdeQD7FXXZ64JXJE7iCCut8F6TTNGu71beeMGsUUxZAjxg6WHiF9AzCk2HZDz4CUqP3e",
  "key26": "5VDNm1Db7F2an6pN3L7uqd2UC7WWJkU8bLpxfXbq4keL9bzgPpkhFT6VtedNJQV9yPmEasxdPvsnyHb89KAzkFmW",
  "key27": "4unuCf2T3EM5wLFbyKXxwj1YTYpPeDmGs4roeLqxrD22wyaMSiBBqCJHE2WQ547dqWeESwe7mpkcmQza57wrudAc",
  "key28": "5iXQrA77oQzwmUPkaTv8x9gvEiKSDSt27CKTw4Ddrr4C7iLdPZWWR6oC6AUN2FBvNDF82fX51eRttbQcE2wiVDhs",
  "key29": "eh9wx8GYzLKy83GHqE71C3yqu7DU79dbkwKLSq3LstAiytAuHuDe4PrLBm1dvnt7T6ab7dBhcaYV75RfUxxoiMW",
  "key30": "5M9tzBbHWydFs2iLSGNBbk8KiFFP519DifGvjmJz1No6n675Cx6pvyR5CcXaLtHuNPqe6JVurp1gcaHfNs9oHiz2",
  "key31": "3rc1pSm9EouyGKgnUzAMbdRBtU5ZMHHrBbwxNfUF6RWTzQhrFuZVMhQCn9H5gcRGfcDv6ntPtF9nR4TpMVU54GTd",
  "key32": "nhJZ3Z2G1us5wsQKaqwxtkAFxWxL6aqhbHq5zdtcbfcXYsRq8wPSah52iZHQDGzqiVCZxShp6BpdMUyxvpGoKzi"
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
