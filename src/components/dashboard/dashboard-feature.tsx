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
    "2rJnWQyX54E2prTQYAVeD2bX5UDugh4a1uQD8DoTxiWUYy1FopJSBx7NP9RkNGS7aRsvnP2joZ3YkZ9kx2YYXfSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZE5Qbx9x9fLFkuLaZQPDXTD6d6oKoxjJKawtX3hv8RnQhSduMxRiucPwHMehStiYPFWhUCoo4Bbs7rbdGzdZyu",
  "key1": "5r6kYs6sqEsKxbphfsbUicdmCjK3AX5G8f1fEQ9G4cTN8WQASsLTMKqEsVNDkVR4mTTT25zYPx2rYRBYfH865ux7",
  "key2": "2g3vGycoQPL6BhonjgHQAYsBq5sezR2c3UyZMsramJEdAc3taXZSwKhHQTTcNWgb6WN6r44iFFc8nYSbPfz3165U",
  "key3": "31N9bHT4GRXKGrD8HKJSdspRhXmACHvNcYuVhaWqWUTyjjRybgfJYpVBCPQDUrQR3mKktCHAiRmuuBpwoHZZi7Mw",
  "key4": "5hQpdTL1HRpWsRRuU3Tnk1u2PfSjp1WitkAWVfZnwMG2aXMP2Q1sp2A4oxATqxNdh9UQ9EAocympheSb8dy2SJo4",
  "key5": "21hDWKLoN9Q6nFLBf6Y4dSvjb1FD6WdqgQBjvK1JAxXxrDhRpoTQGR28xG1M6YJ8eNJRp5714Mo9rBMWKFLipRwR",
  "key6": "2fHArqJTnKCACZMedCPEyvaj8BkeoiBAaHeWGNMeT8f5udqG37mW1ErwNNB54T3QQb3LXm6TFbXBXvXkpaKTCXmN",
  "key7": "5ufZeA3yJJAsD9rJ4YxrQvyPvQq86K8eZpyZULL4Cfo8FFEsgxkPChFhdeR7Fjio3rSkGbHCiqcnBfi7ftvrNq2e",
  "key8": "25ku8yyXDCjGzmHWTLkESvHnK1dY1ah67VD1EdFFwMwCDQqK1X8VMVq5nekS5MivRNscp24si2LJL5Wx8AzA75QS",
  "key9": "2eCzNbrN9QwVCjv8FZfCLZx94QpiAMvvJqaV6m4mG8zDC1MhDYjHTANXTUX5s2MhCUHEbcjW8f8wfghwBx3ojNFr",
  "key10": "BhgL1mNHzqLK87P8DoDEY3pgzNsz9zeqJQ1ZEVpr6XYYchTqCKhzFg3dUyD8SyW8FW7MhC4ZtWsPX6wZ8kCVceU",
  "key11": "3k2hQHAmcZcrpn1CaUwHL9hCGDFjbRCmRtLmiKndXgZRGZeQGcW78scK2RCcJ8vb4W9GkxpsPdMV8X4nBUcgx1e2",
  "key12": "5pNCf4pPkDtidRcR7kNpb6UDHFqdu9jGYGcTsMSKyrA45ZxiD91HYhrdLFQ8g6vtfzgVDpVMfQz9SHNxpP1B4VxL",
  "key13": "4FbstSsHcL8bsNqZHg4rDU4hJbR4H3ke3H1DN7vGfWJqmrVWD8QzNEQTTb1Y9bD6KSA4R3uS9qdoKaKDDcsu6c4T",
  "key14": "2779dZXTktcsFbJDmGHrFs8187vQ87tLoEf631GQ7NfKdLJApDpn8PDbWC36gXaJYrhRwgU72RBSRsHFkokeVpjJ",
  "key15": "DwyEMaF64tc3yR2pU5RFpPfqpBJGawY61ygNiXqKerWRDxEshFui9ZbBpnrZ7CGs8irfNBpLo1RtREnutq7Noqn",
  "key16": "2wPAwgd8NeG6zTarBhEpq6sUUBHCV74w1jXvMBa8bYaU81y8fpXYfAMvGDmt3fUy7GHg2yHRJyzfRTALbKNRbMv7",
  "key17": "2KyWgrJhQ95XKxa5wcAkSd3eGk32YG7qM8iE8cg5yuLPFfCTo32s3wxuyAp7xv7oNn416LzF2kREeqeCEV4qFE7E",
  "key18": "2qaVqjuVx5zUU7VWjj4UATX2e1sk5JaX54axJYArBcMQ8VSex8kKEASRL1anQFZ4hZd77zcd8vJ6dn195DuPNJEA",
  "key19": "4v3wn2njtWF47RU5a1nbTC3TD2ULTjoWCFmNkRMGpK55xgA4XHDK3WyEKjCsDTuPStTswuaf3yATfYFoEanMncW7",
  "key20": "34AmtoBtq8gL4osiqccX4kuvzoMRGFQEKnCrhfZ3vj4i1PPiAKPJjZEwn8XUsfLGuWGHZJhoVeUjq9tsHFE6m6pQ",
  "key21": "4BUXwt5kYjPPQvNkgeoriaKY7Md3YSjD26XKV9NGQy5F9nDVm5nnuvNhjkywFuySSh31RrcxjAZ31KEUwFAG5Nda",
  "key22": "2v8yJgyA8hkCLcmxrwWWZRxTyQtoPwpvGYGrfjWe7kD4SKvTSpcGHvGvZqdk1TZGn17ytPRE5r8uKvF3v1MYGfU9",
  "key23": "23YJUCMA4XusGmeufQzhdSb4TL7B3DC4Q56iisQcG1xWvpQMCRKcr87z3MXyTdkbkKmCQbQcinsa22GiTuZYJHo1",
  "key24": "4pr8UVYHkzmb8Dyzd3GenEL81onRV3nj46YaaCtDEdCjPA7ZFLH6QPAc13f3MwzNQCV71DUtm4Zuwaj73NfXLLg7",
  "key25": "457Qr7VNiUVb7fF7duwy5t9YXdoo2qEBod87NYAMFzjVjtjnhdZRBfDfXMN55scfhGEjsjok9zZxRZhRFnmMMRfJ",
  "key26": "4zEt7sBK2Gv429h8hjTxdwq3iPBFdCxnxibpocadqcYA6F7AxEArQMwKkjUe7hk1Yr3njeeGy19P6HV46cNwi77g",
  "key27": "3h1sFjUsjG2U1ZexvhXRFrqHZGhKTdpF4SuQVvay6xCzgXzsDzeT4qEtsGbDC8j8yKsJnEnFhXw32BFvof2pfMhr",
  "key28": "5LEJZ6uVkDDhZwUjc35KcKgceYZitVnacEAgr7anTDZ6JgeMZ4nxajKZFT44kw7Nx9k7VdBRATbCMQck1R5UoDhB",
  "key29": "4qvLFZdP1BKHmfJzjsrdcLGKv4ngFrYEYs17ESHxiFY2Jnes3Ja9D7xJWRmc1GKjDBDnuqsdQm9XznztpN8pmJhp",
  "key30": "36qcWPjBSqP1zsK83ujhduCRqLVQ1WRizD6zQKM5XqN2EfFzJm5j1PRBEoGLpy7mTXXML2vjdm8hKWwX5ttU73HH",
  "key31": "3Eyu19BYVTzWtZBCEXAhAUKm7D4W8wLm1CFqNuFbsxFo5BBDKdpUSRtz9qCkzDdU4Pzbv2kwYvVMyr9F7GWyEWiY",
  "key32": "4GjdVVT51Egso3kE6CUoJVrSsezfCGBdWHcCMdXSMwLQs84uaYPmKGMoAkyux2xX8CvKaM8vfLdexs9cLhDvr469",
  "key33": "4SdnLLQ7aCKQyTM7RvxBQ2honmNLwKGPF5m5kvswmZMDS4Pv9WCspA9QUnmdX6Y75JS8hr6rd5h64J4BSfU3DbdQ",
  "key34": "Mjr9eGPe11N4JFfDDSut9PKPqKf2tFtDC2fskMhzP1D98GQNXBF1bhsbBMkgkmFc8tgytTzpsLpU5XS67dDYTyp",
  "key35": "4vWE25GqU3Zh5sziWmWSaLBZLHYgqW5fkptvKxUK6PnAc2DeBGCV5YcEbCZNPTYuELFVyKuZwn16kHsY6AvL3v1d",
  "key36": "2EbVBCqQYFrgSjAMWwAMDoWjbjsZVs5NvkHjCq14nEq7n1TfxBGgZjh7QDWriMsSG4G2M7gFPRa2dfh7tbHAcrM9",
  "key37": "38q8Pgpa3JqNbNSTBdHCRK8zaaRtU81QyBfCCJvdsunKNLXTqUi5B98LL7UXdZMaJh1WVMw5HYmHWnACQ25waZnM",
  "key38": "5jd44k8cv84R54tXtUnzqpHixHw7UgYXLAsmAKxwzorErTqjtDw7Yd1pThiLHM2rBuZ6Tk1rFYQp8DUxGZHi9UH5"
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
