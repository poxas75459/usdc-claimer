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
    "2y4fn4cvZpWPLiN5tzm8vQ2oApsdowUsGF3A4BivYAbKyw3xn3FswQTtG9HRWZ4y66EGfc6TzjyYYEM57ePvkbVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqWuxu4UQ3VN63MKFzrwdpUCxtAxQ2kd42avinQgdrLr7EQiSppVbNXKWUKxuHacmcUbbFPUmDAxpUmwoQ1gJxD",
  "key1": "2vV2o443sy5cLQiFRVUE6AoCfhBUUDkAoTaCKqFwbBC76BnFaXSZSdW8YTxCC4YvKbvHnLZXH4JaNvMqG1SsR6Y5",
  "key2": "3WPc1iSvCLncsuqpZ8H263tEe6427xYSiG5WLu1JHXjEVwY9uwxQiCfBzgxQnawg6xHyA8EwA1u77SXpmrUC2VsC",
  "key3": "4hQRsSr3hf7QkmUKayFTECvAXKmq5tYgKGytArUZo3M6aiEq59wmCxqYvSXunfqxCcEsg57v2AbhqRHj1NXyHZfH",
  "key4": "2ZEyR41FawrcDZ41JKfmGMYDAuhULbXXUG29Uwn96mRqkFtwdcmGFC59EBvcCRdxKZHvc24NUweGikof51Cvdbyi",
  "key5": "3QXBmEaTWzcdXmDb5DTgV9g7wJCPjY4tF7N3HVWo575HW8M5dy1kLj4VWyvNgG43wZvNPoTfuC6RRjho6WduLLfy",
  "key6": "3ZmtyRznxuCpWjBeB8PNQLKt63Y8RrqkATct1gCsBHQ2quweF2rPpMbGEzTrvggtz3Zt3QS2BYorEQL4XfUJQFCV",
  "key7": "2i9Di8wygeZULbLozMivgkt7P3HffKs1aJSGDwypkNjXP4HB29GXqnicm26puyUtHwwGGCtHQu9RmKJUp2aqqkkL",
  "key8": "5yrSSw5M5A1RP8sYH7UMN2tsjZABRUndX1jGBxUCbTiBMwtRNkPq4LrY3SLU8mnrBQS1ehL9H1MyFj8vp7JeqQb9",
  "key9": "3BZvcLzavy7oHR44UTzadPxBw4dmUAt4FaJvWqf9hxj9nECdo8mi1wriRaDSc5iythHUuc39DgFgi14iWZFbq5C4",
  "key10": "Q8GPm1edXQEw6RLej2bkoduATw4fWJFCWxi3kB9WbNKcDNqD6mT1cyk6pKjUKyTsn6iaCvYkPNbDwkk5uoPp9T8",
  "key11": "2Rr55aKrqstrCgH95dhdCsxCXjqsJD4GAX9bGVMp8XZwJJdCus8kyiCBhmbkjRvkAXAET4kaTYkioY4KESex5kvw",
  "key12": "3pytcwJFCcvEWYGJ7cg7X8YTCx7XRomj9skKyXKQ6MTvvDo6p9AoDw7Lo3EBdC8P7gdPykFfWJa5XVnAikh5wtoV",
  "key13": "5BXgEsjaX9DP4MMNnc3Gw5MfZeVB25FzuaK5yKXd3HsvEYmcKX7YS4nY72jTNRQgVxMzpMcp6cZXzn8NFDPv1e8h",
  "key14": "fKBorRM6mEGHnKdvd3xhmW83y94Z4CzWL29zbPhUdT9KmAfBtH2EW78DfeARfqpVHnCARjagKYHbDTwVSG9S3EG",
  "key15": "32BSD1ZpSFSVVr1jwhhXhZTjryzXyaJ4eBWroNVSZA5yYoieAk2nWrvURr33dW3Yeh22GR6PgZk2nwzfr4XWjKJ7",
  "key16": "3R4V69akjSV98VC2hgof9AQz5F4NPtBUKyHWRtoeR6dXwtkZDfLZoMqfvhRZQ7Gusvd9ZruSajt9iiqr3AXdChcD",
  "key17": "56r6THXeNaH2ZdrBXos9i8hkPcQDYTb59mSdY1q8eveX7dYZFHsHR1xkmctd1rdtJNyte3Acqa2nGJyNyyKYJoEQ",
  "key18": "2KvNVcUxaUyqt9UWZBudMqkdSS9g2TSPMGMdomHWZ2bLnQVnEoRrCkFLFfe4EzBr2zV5jGJUArNFmZkkdnkNwisd",
  "key19": "4hJAkFN4yhZfWLfpdc8ncC7rbR92hWEMw3Z9qaEnAcDkMrqk3wZSQNZAkTSREQ69F3K3t5YjmxYfqQkaR3CE59a7",
  "key20": "y81ohe7wNtofWrmFY1aGmpwk2LcT4hMvXdFPsTRqoKB5RC7ScRqKpnKKvcivpANtvDmmKVqraN5WVek6cJiYJMe",
  "key21": "5sv5K2cbpVuWraZhNVTYSWbWRC8D9cDKrWwGSnSxZmV4b24DBaZY1PS8WfuuqdCU8Xrv4JZDqwC2AJ3GpFhZDFY1",
  "key22": "2kzgVvKv5tZ5dG7GdyXoSqXqZCDu19argboyna8NRoGBFFk1us8KkSr2re7NrVcveT3H1Nsar7Z5RaYRiysM2dXS",
  "key23": "CLDYhrxheWNBB2ibPc6n7bzTet9YWbK8LNvpjKp92eQw5gX3A7SJW7KWETjCNLWe6SNarxkys2U4kpPnccy7UPd",
  "key24": "3QZtxCpNtJ9GfZDxRR82wD3Qmg4jUSGJdhtbatCirC2nEevHxmK6dHSyiPsBDm1PaKcx6gqLr1BRKqSC785xX4U6"
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
