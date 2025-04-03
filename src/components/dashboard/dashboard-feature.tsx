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
    "2disc7DvBznzoRoYjrQkcjMbT5LuABHyUkhVmDP5f8joxu5SScvzmfAhAK7ZyHPtv47Wf12ScD1cCesWMC3Xbf6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytpeaYjc7Qmtzv4S5ozC7QiVzjc3oD4f7ooBJfgdJFuQu1S2axX72pooRguSmsM2WNNUex9YXHttk8RRtevtP7C",
  "key1": "3QiE6xH6HJEQWKEDVNR2kXf83B7Xw7H4tsrrJKDAbh8esja2UmhcaXiGYjSww9shS37kL28d6k79gD92GKNTeg4a",
  "key2": "3PZzJZEdrsoP6dUbny4shr2rfGevTa56UgEiS869ZdLj9MUZqTP5mivqRNdcgVg4GmJXmoQkDgkWPVMu4YvoyRy2",
  "key3": "48YkwZzGRLoGmGQBNwqehHQBVxxckg3sti9eZ4pCiaDvA83beGLD6fXiiwtsCafYS14FzYTT74hS3Czt8WBtEY6a",
  "key4": "4LkrshZMjXVrgekywZqmJZxLQnXqD7EhMS6oEqMHgUa5p3rfruP8NHZE3fPubh3MrxxabsyG2u6zrGhJAiWLZCxs",
  "key5": "5u9ufsKDimmX2LXqpkG2mpBp1ZZcBLyLF4qrWGTpGvVoAnw2JVjYdkzGBBE3z8HzqDJ3CAyixeRyYXF5ZRNZSLRz",
  "key6": "52zKyLHpDbVfPgC87td6RGnCUVx4oUAyecd7Qcwrwu6j5tGwF4PcZ9ZmDoJLs4qRcSNyXUtR22nYvP54hH2TfYoH",
  "key7": "4gsd4GGi5eYwMzqJUnG17ivNWBVrrjuNM8RxLySGGqCSzfmTw57psyy8AUoay5N1nKx8uPnyPLmh1Qu4v9N3X6g5",
  "key8": "3SyJGvA6LkWGHGenr78j7L4uF4C1abdr9XB9XsuYpvoXrjtnuirnSnMtqVpJPBw6HJNoVQvo57VgsjFj4ZvMyTPB",
  "key9": "2WCoWnvYHmsck3XbKqupPwc1hfHsxHZozF2RVXNW8NP2t96UgMxM2psv8zWPhNpvCxsjRra5vEboCPReE555B1ji",
  "key10": "KFZgvKNuL6tzrrwSmNoJEVzrJhrNLSZnxoc3zuryYLKEijitqGTYYooH3Qj5yGQNviAhga8BLVbnohyuxvjqvuF",
  "key11": "3mDNjdE63PbLWkWPvBQaJ8rqzACcjSN6HxpBMJwabuToDCsKiGKoFbWg1ymmaQ6ioC5uFF86s8NdsynGMVi5PRTT",
  "key12": "3ybLTmJuEakmnTeN1dnspypdGXFhfCQQErQg7rsMTKrfftqkL79yREQee4DwWguFn6yNyq1RC6n3g9jjvYHjh6u6",
  "key13": "2NwzbrJTkqR5W8QUaFF7UyRHZu2hDHLYyGJzhfKrqRZYi7sQL9ipZ6pPCDx6XfbYiMgJ2Gih1ZtZQZ5hCsF7Jjd1",
  "key14": "63LLQ3MCAptRfu2b5YpwJLipiW6phAbRt8niFjALH4N9M93KAVPNt2g6TpGVKFycMja2Nn9sZkcpY1UTo22SyevF",
  "key15": "2ZfSdputjzrw2KKmoP7pFGZJoeRdiA6wgcFLqUYo63jkav6yyJ4thFWP3ix2NtQfSVkHN8nv5RFGqfDUdvGB1sja",
  "key16": "4wXFPzwZfVmbryL9NjJotMNkbaTqrcqDiWLpvE8CHfd3aDpK8fA9n1ymkfwmqERw1foGGMYhyts5Mmyr926NCi8b",
  "key17": "2E6BVPF6exL5YHaQ35JXes6qoAG6Wnmo2csVNxqmYdW7Ma5eedHY4VVnzkcGRJobEg5KySZrTLvUPNpLBGGfgffA",
  "key18": "21Rm3s22bZcrYXxpaAB654zc3GEi9s3mfxcvJQMNbUDLcYaZn4Bsjn1WgXhHdRf9KzAbAFgK3D6k1kXcxpcHJV3j",
  "key19": "2rytbuDCgU7eTBUaXhrjGKroFkL7YxxYLTBKWGAPRenok1eCAPqsE7k5kBqpYfXjFZopE2j9v8HcRWqqnyYUTkNh",
  "key20": "5zTCb9LHXwJx3VPGxZB33X22pqHzsBna7RKgsKAtSGYQ8JM7W7RhD9SopP4gEM1hJZFEvRhzE7U85CqxUufzF3Q6",
  "key21": "4xeeK1kg7Ej3nFNJbACkDhnTd9Kdr6ZTWCqXnoJN7ZBm94cpkHUsyzT75BHrMQCUwNB4zQ1GrA16EoC1Btdrecz7",
  "key22": "2n92w5qeVZ23zgGBq4588rcB5cfeGn3vfs2zDo1PcmBejU9RW6QAsAZeMqN1r2yL8xq1ZXu56fqbMhTWUtwDMN3b",
  "key23": "5EiSS3jVWzrcSxZBLApQzX1BSZm4WEbujNvrNz9GeP3mqaPDurUPwMUdU6z3EuQJHfmCrMffhaEjWmbS7Q4mndDB",
  "key24": "3UnEzuc9KoNQW7ntkaL7A5wWKJVVTKX2nMCnqppFbCAep7EDBKac1tKs27znDsiVbJG5og5Dpnk99JyrRcPbXZmS",
  "key25": "3Vz1rNre58V5xcdkBVLCCXk3rkKWReLg4aAkEpsjdYrfx4gCGtnMd6hDbhzuaeasZjyEaxEnuLyawvTmVmpybp5F",
  "key26": "4n5MiEXu5vSqUqF9TWUNR5L9asYUrfmv1W6vyLXYVWn81Xa5i9JgqD4Zjfzy4rddfam45w2M1vFoAemGrMWSZA4n",
  "key27": "2kge8VRi6FQeVM41eMUavpm13qEVmtN3QhDiMKyuXZyZ5qo7dfwNgUboffPeCcozobS29iCMmBkadgzq9DhYsEVo"
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
