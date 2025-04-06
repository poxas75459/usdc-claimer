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
    "5ES3ZbhVKL7F4VzCbkpwLKgTbgH8abjBSACouUR2Y8uEG7Du2QtrLEZqoWUrCFAcw5wPwq4FKqJAs97DBKjoexip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCDFYgRsxTiPBmoKXDjVmSLrh1Z3iijVJvdLsPejwpQaqUREWmC6y2iLPoRF3Z3zeubAZo4hfSHjPC32KtCnw3k",
  "key1": "5GtJ8mUw2WRfnB1SXH6QNpzYURtWbHHZBNSVw7V9deNRzdf4Ly3XD8RNb4J42guHLnku81JAUfq8RnGGKWxVJays",
  "key2": "5zaoecfntDFaMgGgZ9yQCfMTXsacmr9p39pPF51jtMp8VDTUgS7GhW136gMLFXUyWsWUCwpoKYQ4Mdo8S8RLdv85",
  "key3": "123sYHpBAarvtDmSKEYN2s61exkVB6BW2HHZkUPMCGxv1yxYZcrJFfXH3kmvZyhRT5Td2vD2sx6pZwsCqQvDqowC",
  "key4": "5FHvcuo8UKiXjXNKL2hW7vxWoTULxBWeSJYk2jHFejtV53ZfnfAc1o545dk9pBp69QrnGo9sGqzrn9f62g44agyf",
  "key5": "44q4k9tuMbAJ9aeJyCZi5BZPbRxS9X67zmiDZydnG262tBigugC5yQnArj5YJoJVjPz7DLBrhPQN2czzvY3bf9oT",
  "key6": "jG79Vx7D8k15hbL81N8xYhnh5Zh1hBzzmtFrsX2MFoGQZP4t1XjHJRJS1Xx2hNtuc1n4TmQVC7QTdLEHjEpjfou",
  "key7": "2iZHNtBXUvcDombmHhobLKKDwbbs2SdsvC3RqsUS4kgmwoA4YESnqRp3R4bjnWXdcWJbj2kooBzc4tkr5Z2sKJpT",
  "key8": "5Ama5gV1zgxV5p3x2iCXS92hwZUT3kFR4zcm7iUqKfLvDqR2m6sY12NzToWUVa1ArC79eup2gH7skJiVXWkiNEwg",
  "key9": "5Bcvbg5hiDk4VAwt9tMch7sd5wyUJZXbf1kvVjQEMtMnrCUfC1WbxPTqtUE7WEtXmg32ozKQ8bN2Uc3zbFS3Bb6W",
  "key10": "5jKJQruKrGrfa91X2cLW1xQ272ydDC8VhwD3HuQcjcqDTZGxizrmpypmVqHSQ93uQh9Sz1UEpH5aSJAiLcahKUo7",
  "key11": "5Q8q9ebN9cohYirSqBJzAZHjjx3bAx4yhPTbjZeEX9HcFH7itWwvN1avv1snm8jh1cnfPE46dudVfXxV6ym958EW",
  "key12": "hGTmtFqUV37KGNhJ5bpCrPffAuc4zYDbNZhS1KvPh9Y2twi1EHzCbnytj7GprBX3GoAZ8rjN9x4DPjjuwgpzPGZ",
  "key13": "5KnMiay7Pti2S6mQmV3LQR8kW8uUQatTFgGnTrhkCXfPavgt5bmJUa54SZhsu1ajXbqURpp8B1FEu3b1PmjFWpWo",
  "key14": "4m2AtDhwTjaopFJe25MhcgKrSguLxV1QLhoBPDqxeMHCTgdaaTsA4v3zWBGL5KeBHsZdaV4zDZmj5sH43gKsqNhe",
  "key15": "1xjxHjdKCLUyEPsuAqrZqjpqmnxr4NoPDq8zNFxsDZzXKQFAkXDLuTaNwvoe2C47AtDcQLStDwGB5QS4WN4gJXR",
  "key16": "495Ef3TndpyJfcBJVDD2DeZBSJt4D2os5PJUn7zpixiMxiAa8ZubKT7KL4QNfqrrucwcWtZ35ayCWGXNwfkfhEfY",
  "key17": "62BRcbgi5wAB5LhWtpJYBXPAojHANvuaSra39LQtg5Tebxr7xjZykzfjt745fUYm2zjLLuigqyu2dzGgDXhZ9n9C",
  "key18": "5ABMGCj5RPKa9uFpurgFHcZpzhCwdydRbnvDKK1CLS3PzqdD5ZPehSfS8VSuaqWMC3NXuV5XixvB287UgHj3TNW",
  "key19": "5qy27qGEmWKB8nKfVSCrCBzz8tNKWzvs7EWeJ7VrHqoRMx5tUmnzEEJ1THsDv3a9YxvAA9hGJM5UbNY9kJNWEost",
  "key20": "36yEkWmNX87JQiJei7mRVojWgai3ihZUUtdrhzHEQPAWXAgxoduFTJxNoauJNSkK8JNMt2evuKkqpByNiZX4yXis",
  "key21": "mpjrzWHDRcKNzXZNDJ8NsGt1621xQXv2rZViT7U1ZmLguFqvfp9ZjEmnEfwzkGmZ8jnrouHZFj8kkbTSD3Qn3Ji",
  "key22": "598rrjCAxFn916kxfKBgbYN3r1TN3YHeWXYghqQuKnY9TXzLKEoudwGyR8GxR9QXSXh5PopwNZ4kGwxiHRrJU1wF",
  "key23": "3KsTWYC7KEaRqUXLrdJgzbRQFJdu9D7Agjdcdhaoi73cnWhdrGk2PwLJdSjZ4L4ihzQfDS6jmYDkDAFX5YugFeAU",
  "key24": "4RK9LnxS9rh4MHZuB7N8RbwjHXY8gFQFreMQNeFqNpmFbVTd2txBdfLnANusUTcwwymwL29NZKWMYWwHhetiHkhy",
  "key25": "41YLE1WMscHj6iML3BpG6gAK3HAEz2AU4CpqaAJWP3EFaUMAe2dv6VqXvkhsuN3PTG1yfhCQrBzsMoQqtxr8FKbR",
  "key26": "thv87p4Uo5zhYK574bB6GRFg2SA3Lkok1KrpPqg44sWojG6mDZtBFm1xw4evvVDgNkcKTFmMaPwEpZge3PNULHH",
  "key27": "5UCULTg5DYFenbmzCz8g7WvqEFuKfD89Z2ijQnSgeWuYmD24gGZxmLaVJcz6C3HMHcKanN3DKF9xs5abPvwc3ThZ",
  "key28": "2CGDkXT99pWojdFD8oGnXgesU8VrJQyucy5waeYQp4igTDTwZQSy7D8dFZLU75YXG9C4WokrKy9Zo644xE7otXMh",
  "key29": "QJnFtDXWyt4XbZFYYHPz8ZW2VoHHc3SsT8ZdBPmY6P9ZUK4aoWtmXCKVwoZtPz5PxecPC16P2Vbv75eVsY79DN7",
  "key30": "4K4NJq3MaSVmvEMwo5a3j28NFvyH2J4ZeToDDGcPn6uiwwDojMMwXqCTbicfVNeqykTv5tuUkdYfkyz8AfhwKqjN",
  "key31": "3WoDroAi3pW391h9McxvuDuQGPrVwvDrRvZ7BzdYnuwqfydzu25dd1ipL94q2Ad1LSjavyKqfS3rCTBzUw9AegNG",
  "key32": "RrtV54bz7XWDZB6wUS8yxXpMFeVWT8hdxLzhYdyCi4rk4Tm6qZkdzrzdg8Q5RhwFYhQaaYB7uocPAYFSXwkVEVb",
  "key33": "42DbkDLvZ9K4qj5p31486gmQEdp1D6CKudb7FvYK4KJjH2Pj8adfSeTh5v26ewh4guyRMCfyX4uu774A9q2GGNff",
  "key34": "3aaz74QiVbqFvSiG8hzvpRsuori39DMEPMNsDYyYKM54FrK4pRz7iEaUsuc2mQgPmwhkrdEWe5itrzeWpek7MuiY",
  "key35": "xhgCEAmx8NPnEiu4czhaGPMNyVPhwDvRepf1jVc8oqJKSmvS7v6HYqR6MPS3v2EyH4iq4b2Xomkv2auVg6odhRd",
  "key36": "4J42qgwWjQ49Aa3o1rZcNqBwQDGTdGLSCRpDbRNmR3du1HcfRJZBwiHmFuXpeWHqUb1mpF6rSi54gVtmesN767wX",
  "key37": "53RHhdg7Lw1zmDhsrLmCpFVafU3r2P8T9kPTVS2R53p1VkCT5C8Xd7aJ6rcx9aWUcqvHrn5jeL6vp9gsPpjGej3F"
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
