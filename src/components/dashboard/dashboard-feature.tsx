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
    "5m2iZHmd23QJV8Lc3ikLZAZyPH4mfkf5rfsqYeB2eBPJnKANTsrLgTJ47nTGafwgZLWESp7QHzKYdkRBYnSDMU7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUWZoMnmxdYVm5yq1PYY5S3TysWofosZT6wSXouGgXakANSVFs8uam5ta9nqsA2GtvGZJNSaM1Q2HhWe6PdYzxR",
  "key1": "62kaftDcXhsKBmQ2SNdk5mVLGG8cMhcxXSmfkU46764JV87wCwH4CWLtA6A3B7cq3qGx5khWHsdm29iWP8gkihL4",
  "key2": "5UqmhQMVBj3PUP9ESt3amrQxJL4a753izXLVmM8r5cQZb9accqLBHFJPUE4c8AtVdftcgvbnQCxok8mj2G7mCbWJ",
  "key3": "5SzKp3zHmnVzmR52HuQJPVFv4kcGiGgniiJ4J39L6Jgc65XfVhDYeH8SYGSbamBhR5M8NdhwCuKstBEy11Hv2RBD",
  "key4": "5UDzFppdvFAGsgzUcGx1BFbLKZZAnsuXz3xVx35pgj8xExu7jy29EUCdoYT7aLmgaKTtFzRgsfigKFavVB23f73S",
  "key5": "574QSorz7TMbGFc8g4PMotgPxxjPgCDa8cU38x3bP4AjzXaMpUuPNCgGZkjUsLzcWu8UrfNC1L7xAyYW675zEXdz",
  "key6": "4RA8j6HpFcYSoQH2GYNzwuSzWK2dDKbzuWGMWQEAtDMkGNVTXTbW9snSEf9dcVxVUvg7k7Hd54khPBmLdHU3MnGR",
  "key7": "67VHQxnkUFrtdoJZqy1y6Sz49DNXBHNnpFkyFCKLiabym9tuNdoGSsBuCVwPEeYvCbxjPwM6BGsXLnApH9x4LTKM",
  "key8": "3A3rihajki1nWogL94UF7j8qTDoFqYgThUnfn9iW6F87DpWWq6fK5kF4jzTsXUBD6qaiy8xVvskp28DTadWRNztK",
  "key9": "4ay9HzMZ2zVePU9pCUmHa76Am6EBkvNcPUGW1twS3iHJ4SxFCH53kdoLEUvWsUHCLikc1F7FSqXS4vKsQJLU7pGB",
  "key10": "2qhb2Nq9uxDPtDmcT9rk4TK2wwLJaNamV8iw4qmW5hBiTJYJYiG2UJyWd4oCy6sWDfS5fCw2UQ1eW81qXrUD8DMo",
  "key11": "4SrjPYq7WJsVzeKaNpce4Eopga6kpF2BnjWnsVGTNzQT57Bgdks4oFwBGa8VfcA1sh9Ns8tkSPQSX1mE6vmekNoC",
  "key12": "5nhwEotFFDQPgweoifqBiSRYjR6kz2FdJrQAaUvPRfnyijM5FbXgfE2dw9nCwuSqXAwdMr1fQPKHeVPdCv9LuJJP",
  "key13": "4vUAjzhvPnsbqd3BsWLw8cB6GMQYgTAmvxBTFk8VnhQyKwt4mghrKFDaNfksquyAEvsD5wFX2aMskwYL7PTCb7Qu",
  "key14": "Gt2FLHAo4A6w1AdVximFft5V7iVbQsFACB9Xidrp4aummSuusc23mntyQwgQpg2xtPu5rmqKz9cqxR41YJntXgu",
  "key15": "3pkr9QqFy18EU4tA3AmAAMikxCNBTfhH87Ldw3H18BfF8EP5m7omMPfufyBLtR17e7KJn38RcjdjYXD8gVuCeibi",
  "key16": "2uZbKYgqd1s1dKCPQGT14w4mhuFHkrNmdWA8hABPeGyAx6h453UwpjAuC6KNYhd3NnxYgYzqJ4oVx6aH75qB3GvZ",
  "key17": "2NEZKDGy9MiZc7PUN4yu3d8GhFznL7hJE8vT2nxtd3UyGQ7NqvutBB2nnGULnhDjaw7ijcYAPAnChvqdTasT789D",
  "key18": "9grdEGxY9QPWsT66iV7XvkQCyUPUb5rTbuxttM52zFixAmUx21oYnU27iRYZLZM6XRvdtZjNAKbkkAgLqwTPKzB",
  "key19": "2sevNjv5jWoz4g3YCvT7sFe3wHpfFrMgzvjxWmUXHYu5DyhgwWTWJQu6fP7ffuU7KcYJt8hMTu5DRaRXCW5dHizH",
  "key20": "2KkvxzfUas55WfG6s3A8mKGaeuwwuga3UkGidUBQ3R2YgEKxyeBdzXU4iHGcmKdV3Hrp8ZhKtty6Djw8ik742QMz",
  "key21": "4HRm4Qmsp5uC4anuyB7Pi2RWNC71jQmNyr3fUia7CzVWbAT7CZpBmSFhqy8EscYjfUFBsT5Qowz49zNfiiCpjfPm",
  "key22": "5TwWfvTEJinAt43P9xVfzAwBsDCo9YXYVozM5PRHjsC1GNH8F4sxM3bWw1wMJDRg1CzcMLdByCDY5VUHTWAbcEGK",
  "key23": "4rAuEzVmAy9yYfBxfPB2Mas8EJdLn9KM6WNmjvcfY11zArjjeNJkMA9X5BxHWLDF15LhKLjuCoUcSnhLhNpRhMda",
  "key24": "4FF2rnP2uUrV4f2GbgVk55Y94KKvqE27d4yneZPdaJxeUJnsTTYQWdYkVJQTn2cfevvGeQN5PKTbcUynnJHdMuCk",
  "key25": "4MtSxHvUgN6ws2tcwz7sxbeyECT8uZQTpenDvNUwYXTYuZaaVYUsJHqRE5HstDdRigmo923UqdZxcN8hQNw8JBbi",
  "key26": "32yGTeMUPkJUjUEi78MRHJ8BaqBbvDs54s2ATWdCHPmFZrs7VLxM6J5T7dRf2mttU6KWYm3hJbyYCnH9TY8RHYYZ"
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
