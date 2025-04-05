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
    "5tV1g8qHCxGcJjYYXUhLNNAX7KWjH62rawuUkNU3kXZ1YuH5ebpjta5B2MGnCizxFV3AiaGbeW5dibzp6eyNsNLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMuiziJ1FvMY6MXbE6v8NU3ewYsTEK6PGSiiy1XS7aVgMsECmrisR99BeoLhMDk3F4sSrXzGwBRActA1XrkCTi4",
  "key1": "NXT1vBAY9rYPASi1u1XCHoiEV4HH5FNRKyqdZquLUDCUfwf9y1gFpq9hHBiQuGoXQooNEGcYtpsvH7Fv2EJYqic",
  "key2": "22E9TuDXxU4La388tFLvgQAemdEyESeNMkjgoTytEeDkAtxj8Ngc9dbQKxXaYVUjR7gFq2H3Q7FtaRQ1cZx6guTv",
  "key3": "3MYe3R92QeaCzGYjx1ABhffhFvLPvZ2n2sqTiA8E7MenECu3uEdBQGABTfS6c8zspXVeezWx1twLHHNaTJnKstYQ",
  "key4": "2e4qJKoBBsjvuc35zFnd2uWomxfRYPxcdNESTakErS8v2MpQh5ETqLMtg55KBh9HstkuAucWvdgwUv4pzL2ijRTb",
  "key5": "2FsCwJoDENFwX2HNpaRCWheak36LAggegfGpYSVwNGRcL5UKU8xEmpZ8xkmEfmATa3tY4vKdJqDMtRxGm56BphaQ",
  "key6": "3wCXc6xJnZSs8GtHiw96cEb82qN6WP722rGTRb9eBfkopmbn17WFdiospW2LSsjkfTDv12QNsyhBMoy1GJVNwx5c",
  "key7": "5yxmXJz3mD4WM7QLDEoq6CD9ZgDZBoQTdRxJ8diQEuhWegj8TJEsBY9ViRzAgvFxYvoVYDtsCKsQUPHnLQUpqzU3",
  "key8": "3N7Pehj7xwRjyjRWMbKrCXMuT9MCkc1XhX7Uw7qyjssqbZHekvYx6pNvDF55qW6KamN7hUkybB6vYbq3DQpG5EMa",
  "key9": "5ErCKLF34Z7XPnSeQmX3p5fcopMT88nK2F2GLoe44wJAkiuDJ5NpxUC5AXo5Eqf7eGfAef1PQVqKAnZyUhUYt8rV",
  "key10": "2k8QLkoAeGb9jX9r2VuiKgWe6zV6RJjApSNDMA97dpszw4gWybdugkQXi2rsZDVC1imSqv6tLGRUpcEFd7v6QaAC",
  "key11": "akPXmZp9VvYY79jDJBVdhPZzoKS1cKVY3CwJe4wHNsKMYCUYacK2Fi6KjrrztRcz8BAVbemaGDLzHpyKGK27Wag",
  "key12": "5WmB6SQhzM5CeWhBEJGQ8BtMJ6Jq2ydnAs3pcH7WYMYfYq1JaeMbCB6sfgSApQr8pNsSeQKEUMqNgG8gk33xjU12",
  "key13": "yWpwqWufqUyo567WHsFXQxAmLX3Fh91jWDuzK4m7peTmcWTCAPEUchnxUtwjCDCnvHWXePMFyrqNhfvyRHZyccR",
  "key14": "2CKVsrLocYYpWSYwQPFasLir6sGuPqAEDwjsAXpcWUr5BRbu6w5NVVeDzPiiHRdSixAnnfFVegQAPNVE8Szjz3Dg",
  "key15": "3Gdhi7i8UTkjm2eHxvAZZDcFsws4HJ7jMcdKMPUEBtKcNHg1oQTcqjURWUfPw4VfAnmtkjn9iUkgY7Cms7Z9h4po",
  "key16": "615eQt5TqeJXABTvnTfyFE47Gq1gAsFLNXRGp5MRFpDjW5zUqPWFmm4kiuQF6jxkHBkQZTgpA2RNuhRuhS7eNu9A",
  "key17": "5oWGk4jnAf4FfekpVESKVmXDf9wsthxyjfTmaSUEejxzPsnxaxpXz2yDmDkqvtGUzJYb943QHnoYuotHV6zkULPa",
  "key18": "5rYAcaCQfNg1zJphyqQ84hrJUE4Wg6UssDRCFVbXoLe1tVATTmaPJrUkucF43fEzSkpM84rW97j7m7BCXoPX7WFn",
  "key19": "4zuYenEnTVQ59ijATEfmdqN4paJjtDeejU6tk9oqqQkD2ifjVYB6iNuaQgkmBuCGgLYVZCk2oqrrrQ5hZgb35EbL",
  "key20": "5k558x6kKNi1WzJkMfX3viwMVDS96kaNDReBCP9vCmLHSVaeLHb8FT7twxGv71wqKXbaef9Fc16K8mEWVSh4eL31",
  "key21": "4n1PWDRrHB7Rny22pgVxwska9NCp3wjesRwZyk48odnPnVap1pjQAg2H3DYW1KmN4ppxK8xRfUTc4V1NrmVQ3kDA",
  "key22": "2eiX6TvquppwxmSX7MDmpV7f1d6hTeYfFhY7ZNvE1qzL14oooWSNqqV2sngzEB1PBDbDRK8d2NijQbtb5TUtge5J",
  "key23": "2v3Ctr9Un5nfafTBDMSMKxgeKJEpL6pYhYUfXbLVu1MZEiktf9pEofbqZAmQZf4ag8MtY9Z672jPiD3BfozuP91E",
  "key24": "DEp1mLJxJABH97MmNvZ4VscnRmkyeDXPqNLm1yYC6zmXBRcFKUr6HJiuqNBbWt52W4ZhHAvBPLDdRNPBqp5NETr"
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
