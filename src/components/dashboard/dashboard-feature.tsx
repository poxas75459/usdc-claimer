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
    "3SwoqHSs5v4bSFUDAAxfk944AcDo1aJ4frtgJxJxPL1HTfnZZuuCqEDSKiTDTFiocDD7Z4GCDjK2pK8pRZm75YLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMtsQr6eV1SbThwpmcbXyVaRaVPvanr11BWsrGqfrz92B3w3pU8vk4pg5FwknPRTfXyVtk1Sghag7vSVmdMucA5",
  "key1": "QTiUywMaBV7L1pdi13TLjatx8EgfR2T2hf348ZuG7G33R7LYC329cKEVtd1EtYj3vj6HqKZeJWb6UcjGSwjYfZT",
  "key2": "57GFzKt7TxGRu11MQphntEkxgnZ3pbcAcJ8b1esPGYiU3EEhNtigrHH7McYArxmFfufrDiRifge9ECvR4vyn3yML",
  "key3": "ATaRuhAGFUhKLnWfQZkMiySMJBBp6K4V5p17WFpe1YM5ffXy4z9aLEzJj4WXi95T6X75Cds51Qz2NieVKwxH31H",
  "key4": "3v3ETJRRtBW87TNDasDqwaevqC5P2AG5xZ2wbAcCCfJhosDAjJskfegUVDm6Kd9kHEGshSzc41SMSyyTTwHba69Q",
  "key5": "582AwxLEBFZA8gMsBE6ipp7d9HeDTyeA8S61KpqzhgCMRRBRRaiD4eT5fmYn8MTXYk6juBn2h3PSBwSDrhyk75QS",
  "key6": "2i8kB1fjzHnQjk6kDnjj2CgwLisdxxZdPq4kLVKbnsigJ91zP2paJyCvbCaTRYpKAsuATY8TARh7UYZnMk9mzgTc",
  "key7": "1ck2oH4RqMcyycSn4QsvfaLid9Gtn7NCXuf1qhtfaQfMzBbJrshb1MCwJmcTs9aa7LTd7s9oWC8zY1SGG4AM43Y",
  "key8": "5AXsYM59f3QncrPGzebqqU9fnTrZ1X8SFDsD3xNNxi7TpeAC5664zK1yPsudz5mY6eXfVWeL5caqMv25EeBPTx7k",
  "key9": "ZVshnFEQ9tJjo8pjiiJKXBDJ4Ytqnqac6X3JWVtiUygYkUuBqrQbiCqxgqXMVVeAzVDz5wdehLW2BxSPgxEYnk6",
  "key10": "3cnCe7N1P4cgFpBbGEqDx321L63Sm7UyTXTCruqBVxeNFb4M32Yqua3Aw2RoiFiNMM3N1cn7XYdiAwtFnoc56mtb",
  "key11": "2ApNdNeegEGMJqVLBebn7koXsSV8p9JRZ76EbiiYQHEPSgXAw6wc6eWmxow1YXLjJ1EJbhjnyNL6LcUpVT3LgxFU",
  "key12": "2cQe975xQDFe1nrYfvSFBttLFs1h8vsYPxnxY6xuztGCvuUGBrSKJvAYvJUAuFWnZzEQ2w5MYdkGw817qiVfJXFA",
  "key13": "3i57fq1FuogxeJwQrZSv3bARLyNvwoQbot7kZr4vCJ9SDbBVUTgw6ahC4pAqn8eZGMMBS2RcqscywhaSEG59v2bw",
  "key14": "41ZtMrPR6hwMMhkPCQXgH9Sb591zhCXu3Vqw6fyzQJ6N8F6tHmaFCUNWV9esjjedpKQi3qSYTyPKFPYCbsp8GeLE",
  "key15": "5t6haJKTPDrbAUBAxGmaidHFpP8j2R14r1A6VgY6GxU4XUHALGkhjhepjirsY5yCpu3jJnVgG1roK42AWPYfan6A",
  "key16": "W7vZ8CuPRKbnDnNkvCxxJAhovMu56vPmcHaFxYVoZEER7qFqzPYKJx5r33wHM7Yn2ZMf7m9xGRrVHovddNQpJV4",
  "key17": "LBNMwFLN3KFTKzmUsJZp7s7wUrdbuaWxnjeixg4qRVv3UngNnjeTfNgmVch15NB5ZoqWbDnpdUS5qTB8aiGVjF8",
  "key18": "39roBpkazm9kkqb1npXcE8XDdfdgNi6c3TD84qFn1PgAXqShT3YdWQeguwjc5wcxEpxDT2ZNwPU357sTE8FbxHak",
  "key19": "2yeogdqMHEf5waBjopjxkKm2EMhiWEZZt2ZSQwjnaDTFV3n2oFCoN4wYQsYkti5jbe984YpoauhdVWT8WVpMnmyN",
  "key20": "JRxX8yWDrpX4m8esppSKVZ2Npi24wCjs9VVrQ9GrU7ERj2DS5g2YuQdt5xBHA8da6R6r6FB7VNHEuNxwWfVCFkA",
  "key21": "4btoYuM55nqkvGnF68Awy2FJhv7uMLiY7837oeDaw1dNRuw9pQFDja15bWw55m1f9oNa6xthHucfknAv85XyJpoV",
  "key22": "3btVgb5eBV8FhJeCMR1y8qjvGyAsR4MyQ9JtR2JEUfY98atbdAzuEtpV6YFUqeSpZLh1pcQ3GSUCQVv4wMmqgNAR",
  "key23": "4oge2pqgrdaRB2zFRwPkNAWLN6P7YyFP5up2jwYrB4cH3D4XrEj9NdqbUFeZnMEp2PVRMURUyh7yy7jVPZjNVx1d",
  "key24": "XdfjUCAeyY9SrRVrjoDeKanTsXwQc6xnxqTa4w7mFiCR9Aq5qzAQxXNoVZGqxZpWCrvRPsRh3ZpuzNqnfPHkgx4",
  "key25": "47Q6gsvMudqupkNnKHCwYaKPC25azDsb6T9jt4EgvoBhTvEPpXEWKhMaeVbebrDR9DL2Esiap3Jjgj15Jfmc7BFy",
  "key26": "4Ex83QWz56DcWhk8ndwgkNYNXGYtN6bcadcmLfJL7QP4CwFMG91hGPznR5QbjeRAriTxcuiQNfCxxzymCJgbckcC",
  "key27": "ZgtwyKhHxyUdb8qrDQFrG9MWxqRD7sU3SRrKPVtXqmU7yJAAY9Na1zZ1oPHvrfdJK2LGbEmDMndfT1HjaMLGTNF",
  "key28": "2HiZjZhViFMZqk8GyXxvQLTgpKDDY8nUjpfqyJ5n34Q3dS3KmDHefKHTJSBL5FwSzvMKPRVDmdji3JeVGLiYnKfb",
  "key29": "5JVsMLLQz4SzhxYjA4UMaJUzDgUbFTDJ6TbeA7ohCMMd6dgvP7d5kkcn7cLcnZfKmJWYeKhMzSy5pFpxjx5afg6J",
  "key30": "2u4ZP42331LLgxNTrkpy6773wMZvCtLqkPfuCyY164AV3NAQ4XTpbsJJibCmywc7i3Rx2qxhrowLh4NAiAZXvxLA"
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
