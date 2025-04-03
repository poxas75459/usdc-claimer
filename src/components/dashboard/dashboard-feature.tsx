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
    "4WKupp7JKpCqe6YmdVP7wJ2YPxt3ufguVeZjrkhXvG2vH5Ebgu2EvyXCWvhBQJFSqqx3oqZupUu2XFSQHSqPrGwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTfqyn3foSxN3xnYs6iNzArGXjn5JciH25V7wNQVGbx43a4J7roM5Z4tx9EcFAhfok5ZFL8gpaxGMqPewjWmfVV",
  "key1": "Hf8HemE8ysU2waRMk2aKJfPSByR5d3WrQ21wQDNrdadc4WqFo1aqrEki3QiUYbfxXt6L1KDKYEMdsScw1YKKyym",
  "key2": "2U2fkJHFhaGd4W7nyjZAvfyBcxSQ4p6MBaVbecCQ8JtbqDncVm39XZUVatxjRfpwFssGhgVJNhwsWFUdrQXGfFer",
  "key3": "4PSvNxpfgEXcDojGPinnpy8AzF9tPFsyc7AEstGA7ooCJ29gafgLAovxdhPqvxjDDhr2YdsVf3rJ3Kggtwvc7ypU",
  "key4": "5XSEy4tH6Dr9LrLsVoZoNHEF1B2bFhxVwGgC4neiyJvxR19JHGo5GqFg2aD1CrPcVTFn8DjD9Na2ZzHaRwXCa7cu",
  "key5": "4A15vndHBY1SnJBtkgc6GRGWdL5xArBbYpuQMxqhoXcmjpZhaKVRTGhq66g4wGhVTzo5PKE3HzKg5EUCcawbiGXq",
  "key6": "LBv1Ewg4jxX8jz6PdaZnbj2n3iT41hmhQAXK72qbgyjFUC6khw3WFmSpDNHEiFtKk4LCPm5bf8kPagrMMVQKdDQ",
  "key7": "4jz95VjsrvFSVhE11JG5hcHN1BTq2A1AGWwqke39BwDHYsZeiCvtoupz3SVEAvVPru7RRTtvqEb4NLwJio5dqSxv",
  "key8": "4YFqxGMNpM4XDSTp53zRRcCKovmgRfGdJCP6UPX4WnG8UZcCVr5MV3nwU6o2R12oFwRD4puLifevKFk9fxBSzfJB",
  "key9": "4WKeCAMdAJndYfGvpMUjLRpqZEeBZ3iqPx1LAtzXcSZmJMjZpCrZzKeiCL4WS8gJnenfKL5NbvfE7aNCT829otgH",
  "key10": "39BjHNoa4j2Wv7hCKKbbJVAiruCFiG9dXK46FKTWkn65Rv74rpsTNNNEBsDogZx5tX5j1YGdupMXLcGNoQ861g56",
  "key11": "3ygcTftLAYjWH3PKfZEzRN45voNKpHmJ3roec5RqBFDuhYtjaZY3Kx5wFx9UZFPx6ppne8pAaxhHibF56MRpc2r",
  "key12": "3vcGKpTmuiL2DrsRnUPphavacqoPghcTA8M8vC6pFyigSvv5vkCAF6HcRLkvkq6Hqv4copp3RtEhsqYtEkifFXgf",
  "key13": "4YqPAaLbZBGgMzamyuxmGpLB4s9vAEYiHzN26jUCG8iuZFoeWuHHgEafcwWZV7GrmVQK6rgERqzpJrpJTqjwptos",
  "key14": "5cmAr27mBJmbcivkkV3ucgAtUkCHa2JwNJU5QBWqVP2wwnJMa7LuhZgUMtE1XR8qoa5v71gjx22nWD95A27psjqA",
  "key15": "3uPLb12ZMqeRES7EcNAFXN2o7pfEXX9Wxupbqawnwqnssq4EJCWSvHbwgzgiFjRU6E1HX33h81mpGczGzjA8bRvn",
  "key16": "2yToUsNAV7URUf3RH9RD5tGsScpj4VkrZn7yrxmc2FQMbu1uJhbZLy6WjKGYZzESNyhX6kCspNy7gxqMdMy5efXF",
  "key17": "4tm71y8BVoxiN3txzYdSc4i6QXgqzXTdzYsKK6dzB1b1a2sN1Y5yELLPMaDLupanDREgcyyy7kAdZWXYyARoPDJC",
  "key18": "58VbR9DVBJMmuXxFEKtktU4e7ixq83bHcMwTohEVziu1tsUtHz15t4Ns8Sv2uMbifhG7M48jY9jsZsfz4JRGXnJR",
  "key19": "fMiprcXDAU9hmi4vhFzBXpH5ND6fgCdjvMzeq2i4RGyi5hQ32SJjujAA8qdggmz9pU7T1aNyNLqfPy9FxkUcWNg",
  "key20": "2cwrDy7htbhX6RzqnHhxzFhmrjZ36bryHj92nF3LVuPVMmBjLgo5Edcrq4UThVVZVLtQ21vftD8LFC41PJdr7HGF",
  "key21": "3iXuZKgqFcFL1ZmzUyXm99G9wnmmyueUc5uzpQAfChx6NnZtTNbvyB7Z2Eaj2idxZT3uhDvpswvhJ9iuusgFGgj6",
  "key22": "4Xwc2qdYRjj2SkCRWtanc895KcNLbctpQF5CMjihtYwEQoXqMiS2dTvbPY8Mbw8takZa47ZpKVJJvNQHmjd11SAg",
  "key23": "2T1M44q3jRVjb6ceHMExzBNG6WHmNhQTtidc5dbjrVFWWDR8XA18Y3ci5UfDoiraX8ufAKGx4RHhC4LdqVYszXC5",
  "key24": "aQkJ93ZhhNp65xK1orLGHyU9Udr7KtAPAzbPiGvAhpGNo1u7QFJGhoAmuzg6Zuq4Q31C3fGRyhJ8ERaRwjHUrzX",
  "key25": "3RV4mLfFFyKpVzsCcZVi6kXecJeJ5BLw3NYkLM6bjJfSLPCB9AwArqHf31KBx4hsUFf2m4t9QDYTZshAZ5L9BnBJ",
  "key26": "2iScZLc6x3oJ3ioH2VxovYmer3MSynMidweV272EFbRz36j92qXz6ewKgqpw8J66qwGVxaaJLZCxo1LyKZKU7c4s"
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
