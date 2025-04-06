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
    "33n9E8MZjdFR41wAXavZzdi3phnGxTzPKijiRjknadE8QCTE1tbCacx47nxgJRm3JHxWTnCUZQPUr5P3ughoMgtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46TzkjRYfnEa2RUp9Fo3wxUQ6aUpatpEpXqcDunYc5FdARbFuFvyaZfmkz2w8cwVKjZ7NjsJQ42Xvh5J5zhfp68P",
  "key1": "54DkMrZz9BdHSTMZphXes9Qi2rQ97jWz1BpBHNQZpuL29YFAMmFMHD6nzd7nBCNi7qrYdDToqsiyiepwrpNrQmyu",
  "key2": "4fVW3DY9UoQRS1EgZ9JhsHsdRTfyiMfR8RWpLgxG3cwwYJDKaDro75Urbma9fNj5N8UwoErBmrWwn1tgARx5siFX",
  "key3": "zMXrcTre9HDUoFLAaqVKfZgNLVdb6rEsDNy4x7PqAi6uSEoxCoY6eiDJxQi1C3DUhEBQ7uBD89ekiQv1jgFrA4G",
  "key4": "3MMoeokfRCYZoe23AgGnWma7CFDLT43xes1vyzFYUaw8c6rRU5YW3rovtg6oLS8X5UhZdaujEmH2rerBHfE1sQDJ",
  "key5": "1VP9ekQqL3YnpvB1xvNuqDWVFABDUbMSdTYdsdjJ1mpZgNhxEuVkQKqmPFpPsVt6hh5kwRdAKUbteMcr2UTbFGV",
  "key6": "3VYJYp5NxqjWybYVZfC1gUTKeJdUtKNAUjxzxFnFa9ag6dmxiBefLiAch8BT1DqkrmxDG5TzzP8fzXmwpycDBvq3",
  "key7": "3V46Y5a4xntSa87xvQsv8qQvJT8ghBZoiuz4fkmjodenf9uaJ9LrjeeyQMSLppzscChHXF2kEkpbCmDaREBPNjkZ",
  "key8": "4saCRnoDx6GkRk23Gpw77HeBNdWDyHbRDBKZb1QVcjxfty9q83Q6zwt6tnBU7je5FL2VYEkrrtyLChiYPhUCJTvZ",
  "key9": "3euTfkkpmdfdXS7buotMa4nR2Dfvj9eAGWzHYVQ7VL4LciYbGRs3jcLEC3ZLSb8gRS6LyHAF7u4pXmXpM1gHKSjT",
  "key10": "Gg3iNA5Xe9yJTfPtyCULVYesD7uUGdZWbLuAoRcPCB1Aak9GdF7NKivCSXJkpn8vHK7L6FDXAw4J9GrB6K3jD3C",
  "key11": "65YySK4gMwK4fNg4GiHDGWPAT6w1bst3e5c8ZEgbyRjUwqBNV2UXcmT5Few1B87xL7J9cVh7GNkNcXqaf5Bc1k2S",
  "key12": "5r87wBWwf3JFyPMMCYihpiWPFKdosG5egNHUSkkjyJRFQ1FzNAeQTYw5yLUvAQgS7fuuhrN3TqWr9oosbg1jcwrc",
  "key13": "3rWBsiRQEh8wLQPspcdsDthzdPBQBQMENN7pb5dUZpf5G8jSn8fRo6watSXNssibJVCxRue8oCGDPSh5Lp8hW5zk",
  "key14": "36yr5f3FBJmX7N2wAc5aAvaRwojrfLYSo9BgtMwSVUimty1w76vkAsng7aHf7bZGRZboQj9fvxWNbSnYrMXdec2E",
  "key15": "2b1fybDZdqCzw4P9d9NGKhQL8iHG5zd5wmABrUVmsYAoiL9Z6od7wQN5QfjgPhXrR9iWFnbwCNG5iXp3NTsnME7y",
  "key16": "58zXLE5b6waU5rdztJVvuD48oGRDkWNt3utDaznzCVzjQjN6TZRsUVybKPiopBGK4xDZfFvcgvpc9k5XcHotq7ob",
  "key17": "5gXtwo7e5QvsUTpBjq1YjgK4pT5L3h4A1wsVy2dd6KjTj8D7japQcfs7oDuzLA72AV6yH5DnG1AAtcisSJN3AreS",
  "key18": "4uPbZrhFg9Dh9gLWZ2DduQJDminCp4AvFXJEH6rCSVfV2ST7ru43eSGhgT91UmZAppMNaPjejiUg9vw3QKt8WyX",
  "key19": "2c3YGMUCXWNUembZuRQQ1Mx2fWWfcNe6YSt1UPBkRwvxQU1uBBHK1mCSpANsnZgeL5nBzYi4YaUicHSV8nWYYtyB",
  "key20": "4BYzLCR6AKXs1CoytBufPsG9dBJL98r7EMD7oDPW1Wt9FeaUASTHvFjsbk5CAHjsUkYLHVYFPcnSDGkMR3q27Dwx",
  "key21": "23CqyeXh6thcShmtrXcw97zwUpGRjjPqaVfnYC5FsPA1TLguzMV1eC1CSJYRRWHqRdYzXJzxMSjiH5P1kadjewEy",
  "key22": "5ySUS9w9bnhbW4pM8arNuGpGaVpeskm7bbkihkSezDFiNgtwXyAykmNyYxLXLYmR79ZcHLp7U5XrBQXHzKDVsUHw",
  "key23": "4uZhENi6TkFGzLZMTBaYC7qNyjr7997cuKqrwZ4NJF8y7qmcbhzg1BkYKY6smA4xJjmXZEei9xREZsTCBCvviZgS",
  "key24": "2GVAQL8LsLnhR3ndUFsJqZjU27qQ4KEhe92rUj5WJZD2VcpEGxcfhBJALDvTR15g9pWv1tdxztmzXUEacp8hq133"
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
