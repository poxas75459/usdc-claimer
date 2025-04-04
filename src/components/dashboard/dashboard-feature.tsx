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
    "3VQKUmx8UpWrDtqDVQ5na7GQ5CtpSYRXmW6Kt4XTeuEiPN6zfEjuWLSw5QBSuoWT24Gurz7LvSWAw2vR2zECKAqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MsAQgGkC6pc2SmWVQMKxAqBwFMGiByjGQ8wKUyCKfhahxbrkELRo3VCpBkQp4AwfoK2yzTKHN9e1KJmMi5YJCck",
  "key1": "4eCCvcVtfQpoYDw8oLGWLC44oiycJAcTjW2NRhxSbg8T1tRJQBdUttDzayR6Nx4n1ymtqiFjKaCHnJreTyNEc9CY",
  "key2": "2gTv6kJPQNU1zz5u2sG3ZURcWdJXsZ5gs3unth6TU8Xz9XfPsXafAJfSm294kAPwtwqit9Wa4NG5UxWEVBfaPV2w",
  "key3": "3okaSuzcCR8xAsyUkHwDJLTFm2kpDtZFUWNJqzEfvXKCuTr7Zz6qzTxj5gqH4iCA8kmuhHQjdbgq7oQa44vssNkE",
  "key4": "5JhoZrnZmL4tsT6vJy85i6pNXXgSofCBv1FoKTB4BpQ1AbhbMLDCVCePkGDETmmcGgjMZmzRafyq4cxMuMHjS9xE",
  "key5": "3sGWeUK4iqyuS5TuTV7Kb5X76NJk8FZ7G4Rc1QWyyGKmeZr5b5TeK8xtSJxmpoq42uSArSdG7oHq9oJ4TEWxuLoN",
  "key6": "4iZ9uPkKrdfqMcyzdsqgcoTdYkoRz3o6wZUR5yMyYcZh1mU8ESHUZ17QrjWid9T98VnUmW4NPiAEpsYfACLfg9JR",
  "key7": "56WAWWpRWGz5oEwTnYvJhfPy3BaGVHAs5FynpphviXqEQ4k1kBHnLWj7KrnN58kQLuBAQaNite15F986HsMDA8A6",
  "key8": "3fLts1T8N5jXVdoVrSSnJYSauHakLgkMX6EAp6aGaRWywt7ABAy5pagtmUA2SfEgGpE58dkpziFfyaQF1MzCSMzm",
  "key9": "L8MVe4fbryvkU5TehmmYK1McciLnBi48VmsUjA2dfp8ydPEca83SgGDpHLpcNQfrxMmpk2LoGc1k3CmDVsiQCZi",
  "key10": "v9kE9pH7AfEx8PFaAcAepenEnw9xo3hkQ2EtDj8c2m2FAsLg7YfqsKdmo1hD9qqAaCGKCcWZD9oMKafpktgyEy8",
  "key11": "3xCnzqWLLjmyKhgDCVvWuvUtXAffvJ5ucA5P4GL2TKrARMAmd8dUCAYH7A4r1Fv5Hw2UEJBP74kvNvvmSBk9mZtd",
  "key12": "45mmAykDbDGpvgmEZ3dmQkhM5ciRh3sgweTjC57MpaFJ79YN1QrP7PcYekWcs8ojn54mqAP4GRiRY3tChZobiF86",
  "key13": "2GeY6QJ7irD6ePCWUGtxqRYy7hqYBKfqfQcAC5Z6rpk99Jdn3tAq917zS84EFYYesytYWrDuDwvYpc5VYj1rtTK6",
  "key14": "4aiKmEdqFwQaxjwGAiLMcMXhUnGamkyxtrqwU9cDPJDJsShNPQn45K2XhjrN2VAyGKwSQDGNuCrvdAKCPa4177f6",
  "key15": "CArzzPu61ce84vrapaWnKjD265qfsMKF9y4FpZ9t7TX98aLfxxeUAaZiePZ8roEcybQbqeGRrAV44ZvwfvP6wYb",
  "key16": "7wEpaxgd4SNiwaSBzVmuFXWx6fV5rcDz7m5H6TnqT6e9UDCnvegBWPRED2sJn5cxJqK5yMcddr6dLhQgfbdbNMx",
  "key17": "MDH3QcdwNSkTBxkKpyuxfWkXCGSRRCb4g9o49NvG24G1XwQJguZtzBvw8LM9WxRDGa9ik1kUUM5QPysB2Vp8zyS",
  "key18": "2r8xvMb77eZpwXZHaGbxmrQzxgr7othh7XbRX4jiBpbGVVjjLcLiEh9SE8UMb2LuXdpkmvkFkBiWn3tZS3xE9Nu8",
  "key19": "C545KLBm1sAqCaK6zwTtkrJco5AP1bomcuxdryJo88GXgNrxGHCbbXGBBC2Hx6Mq8WB9y3uuYNPBPjSnshg9mY9",
  "key20": "2ooyTe6L1XXp4LeH1m6SMWVNVj62idQz4P423pHH7sKnMyqY9h8RPrXLPz4nZjDMzaoMTomUbojrGsi11b6DNhWR",
  "key21": "66DnArZ8MSR52xoF7M84k44o4bNH1e5fxv24KhBfVBcqyy2QrM78YHZdvp7stxAQZ1ETVsqeK9JtDQsa4HUZikpg",
  "key22": "gF1NGA7cz5Vm9s7W33PUxYP5TDCCoPZVEFeS5i5tW6tPXXapauHKdUdkHfRYfEMjzbiD5vFUWjFnGoM9t2AS38W",
  "key23": "1Sk1CLjmQX2uSfjo4UCYQZrkWRpBamumKbpqny5qX6cEcXwd9ANLTDVuNhcu1H39XhDzJu7svgode9cGZBkAcM7",
  "key24": "3Wor5oyCyxssmCYgY3a41axmHDAtw36ju3ytzFQUSVeNimP1ZzMMgBFCdF3Fjupe3Mnab34YDXcLHKsPYecTsTQN",
  "key25": "4vgo9DcpCdFoeYjxbz45FQV7txeGDnbboHisi453uRYxieKXxCGwHeGTX5DDtV42FeS9msv2ppaLNxckimDBuTTG",
  "key26": "58XsaQTRbqmZ9kug6uUh7v9eY1dUEVAT5B7cFaoECFhsJ1DJ9owUeTbtShZehoYUigDxee9FNFhSPkdhKv96EYLS",
  "key27": "SMov3VQVQPCXkZV6XL6HLJG1QRNNVGJvkjJeLQJQftQ67rYvgVjKUWrGu7sD8d2ABsJHH7PVfzxWLuA7XwaKsPx",
  "key28": "622Bns9CjjwZCZ6VU6XQDA2z8s229BrCdbXJZZkDxxejoRBJiQrKDq1D2NVXXtEfqjLW2E7Kyi2SeH2MWFxveAP5",
  "key29": "hwbDg7MpRdDJ4fa26T5p4PdwQqN2tStWPKkixcWMEgBSv8p9mvBH7HrQZbNXgUhwzu12TbLGWbHngv5VdWyxnS6",
  "key30": "4S8hnndu2beT7uGJxLhyi2KuzZc3tn6ihnPSoy5o6bP2hqgJdfrg4bou5LSERbtL77JbCFffHqRDaFmrAgwnDAC2"
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
