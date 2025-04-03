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
    "2Gv427YvpfXHMspLjP4z9zMEjZCWzow1DfDnzMXu5REJzfmsNtUX69i25P4ZyeKN7jAsFNRCJR4YVBzv8uUmvvdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YU5ME3u2medT5bn6HbB27VtoadZFhu8s88uF3yh1wdFy7Dnk1vCDjnsSBianxvDXtGQEATicTwMhuh1FAn6hKS",
  "key1": "3k55ezCG4TwAqX5sStGhbBDYWeHKJddg8xP1wSwsJCiyjdWWscUQ2a9Ej3Afj5CYiUaf422E2CmRwMxYXht1CpKy",
  "key2": "3oPpuozJtMUG2MGkMhLfnxf9kXAqJYhzSLZRAChnycVzxhqZtPndbRJfVNkDyJCsG1kCbiDeKvYS7yDjiNji4Sew",
  "key3": "5ukeAvpNCyL1ZSv54v8wyPgHqEbvcwNtraTfMaXAsvwUwgF4KuiWn7iu7XdvuZAGSCrG1Et17XrrHNVDAgtRyKVi",
  "key4": "51AL5J3msFX9Xg8j4Cgv7R2rE9icawa1FaQ9aHXbWmJgePhg8uLXWyxrgi2GASwybMWYGQgSPMDNiVbrgpPhJuuf",
  "key5": "5w1dAdfsFq2u7TcNS4fbrcCXJ5wShdgB34gMoELFo1ESaSoaeruSrcqT4eoJo8fUJ1iZrE1FL29Wc7bRKwrn8dHn",
  "key6": "438ayMEt5vPvVhGU2bzycCQJU29V7GxEMWu4kG8XsGKTFSeYAWXdVBEGdc7cba1QpzLsSdXFxi61pucDmpxZsrk7",
  "key7": "3iv6nKq2NE2ejm7VkuErosRQsYGaKuPUrCbNxEFTZucjWp4a5WSPS57hp34q7A5u8hgL4yabmZcVAPRFvjMoGJjr",
  "key8": "5H4vaJQnAzJzGZfi4o86GKzTZjhnGJhpXAkLAEscvwRce9MJCvGnvbAHuneSnKH79R7akqqKFkTWk4Tn8fPdJa6S",
  "key9": "2Zx4Q2VqK2sM2GfJEgkjei6ba77vGc565BSsHjznSFwSZYtWzQ2ADTYtdnQH4xKwTPAdHbGLKCKDnCPqR1LM1Vx7",
  "key10": "5fQUyVj5KjJF7365ZsTz5D866obCp38TXJktHJGymujfi6Yaakq4UWs56A85FpTCRgjUDf2PfuR8xHWmqfmz4aqU",
  "key11": "3ZkFYoPuhFnHUdXK2DFrnSHG9qadTGzNakHquS4Ng51kJ6PvtwK4FUYLMEEk5r9LEgPR62YZuGRHXdPh87G4JW7G",
  "key12": "5JbVhqHwXFWXvckRg76zg3K5MKUUXHuuGvLo9sQxNar85TVwWd9ow8P7crd6ijcDp5F4Nwtke6xsTjXZASw5thRb",
  "key13": "4S3C8P8JG9Q1ac9CpaqGbebheGNw7PdksUV48f6PPjbZ1fEjqEDKmMHFNytUjKFeHqdu1NhpvNEfQQYV7WYeoJzk",
  "key14": "Fo5A3PLGF4MDqMhEAvtvvjo7dns5gnNsNxi4PDs7my6hzhndcvmXtyuULWLc7HazQs1VcWdpmDJC4QbFcZucZrA",
  "key15": "3Sj9Lop3rtbpUz7dxzwWtB4Qavz83ZoQJ7bKGGU7VUeL9MHkzVEqvsDUarhVCgHWGAYdqu5XqaZHZZoqAYEHJ7dH",
  "key16": "3x4Nz5nyXEp581cdTmTQAvtXLD75cdNpRTjuHLsagNoMHgTfBTVdgBvcCGERyEqfhgxk85aH9UT7SjNrEhMaxPFt",
  "key17": "2xdQ3fCBBoGiGFWzf7pGdvsM3JyEoHyavk4WgM78wyuCbdXtH8fErc6e1TRLpeMNc1DAH3zqhQmkrm56s9Wv6dP3",
  "key18": "5Wqf2rpWHkoaKA51Qh4fFK8vpr8vWbFm1bxMEPWPMLzqaBX6BFd4wjh2tQDkWKpHM2oMnEraW7udNVLJFxDuBPVE",
  "key19": "2Kvr2bLcVuh7fBsC2v6VgSfy2eTPmnWjKJnarV6ARNkXYhPsuYdqXaWWUkqpVKXGL7cQr5pL9AbGe8RsKEj4QWX6",
  "key20": "yKT3VRoTJYsaotFkc3sDHDxSaootE2729DYhNiUetRrVVdekjRvQLcZchTrNmiDiz8fpfCZF3VnrbZZ4xG7S29M",
  "key21": "3MP8dwk4So1uHdxBcbJs6DYS6Bv26dzMvjUE1YHmN1B1JnqeTkixopqkYKRiAjHXzcbbpJVsGfbc3ifNErwz4Poi",
  "key22": "2AmfiTES2fkaErG7ES8NRvB8sBSmFvtAZDCkU4TJpXEiXrp133zuRQw57Cv61ohj4AjGvvP5KBwz1ahUpjxexoLw",
  "key23": "5QAYH1Ed2KM6JLBwMcnJpSMZ1xDPzzWUoEQDkHhEboJM3oCQHWYc82FdM5uqaJDF2Smtg4Fw16YF8EZ41YFEft1H",
  "key24": "5xMttSwFZhwgUdmTVGSv5Yfmk8ka4xdABgMqtySLN7Zakyvq1nWsdTEy24TVgDZ2fEwncd2JUcAVZgc8HQFzyH2m",
  "key25": "272TrheGfNr1XSQCGbEkeWqTAKFziWxLYcijqWxsdjKfMbCixW81H8g3RrwbhmwMuo94PHD23kXbbGMq3Cxc1pyh",
  "key26": "ygiudUuhniTfYF9VCPfi2AQaY51Wa4VDehEQmUnR7iyNc4jPpW7casst6v6zGDsdXPXkLvqVL7Az5AKXFTGRcku",
  "key27": "G6pT9ySJHFrXjmht82t59YRMtnBsZD24XnB7XcQ8tci54P4wxFq2WKvtcrne84m61MuNDAGgZWCKs5YBmkR2a5r",
  "key28": "5snNeqWHPVWQ1hjALD7F3zp6KD6WxtPKTZjBostWL5zbxT2PNy9cwcmQA6RfWToxu7pExRpYW9yar3PjHwdMhLmM",
  "key29": "AxyndK9gTdf9knGUUNgHka2sHDwrjf8pTREFusvs6RCZRw7ZAJetHv9C2sWMfquyzmwLcHCWeLT5gGkouUPwi64",
  "key30": "2JrbYZgYqcVuR4TAPeWDgMQGLpc4yZPgd9LJiTa5Me2QVvFbUcExLHnYM65LEcrmuNANeWhmy8k8phsvA6YSYKxp",
  "key31": "FwwhXELFR6GWBgPAQVJtdz7v8SmedPu5pU2WH2FjXVsZ5GCjoR2no73JSJCREmfJMxuuQ3fQiiaB7iAgU6pwJZ8",
  "key32": "5JrqNDtokAKWSVpptPzeUhiUhHzG48kaxaFfLHRivGuuY68Sk6EBLhAoQNw3yLBB6T9kuQTEFc8vw7GqEAZVzZgU",
  "key33": "5Mtf55FNsT6WvWzrSGUuA3a5YKwdcXvDBNbH11QQgudvUsCmscU2qkz941yei4wubve6R5AcNu79TdUYUZXZhynE",
  "key34": "4hqapo4kJzQyjqWS13wjTbZz1fqrWo15qu5B6Bp1kTJ9CRjbGnbNG9caRrUJabcA417ajQL2FRgpA83GNhzvNQ3R",
  "key35": "2G8S42g8KRavM7snDMFCe2HQRUDWwcNzPdaSP58aZ1GeLCyqPKyC5c5eJeo3TrLxdVMLixznYvvLudbDyyfkuz1y"
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
