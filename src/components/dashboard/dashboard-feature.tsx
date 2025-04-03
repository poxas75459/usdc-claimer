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
    "scf81qg7VwzqXtwAZLyQ95eZCW7NYbp5N8k1iVmpXCocjyDqcJ81WacF2unTFKkVVk9YZgD4pZJRRizeKTtPfsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sR2sCPns5Nhuf6jztsNi3HqqScgDmqjoUhEuyVAkhDUYmXkZwUNeAdCtrYiFA2hxhXtQKcYGo3ou5cz1iL4J7aN",
  "key1": "3d88mBVKPexeM8NmsJKS6NeV6SQJ8uT49S1RZ47Zj4CVNGnn2Lw9nHxHgHjegwN9LvRU4gNXn7fD3brzD6vaTegf",
  "key2": "2faEuwjb1BU1wJymJQmKWgvjq2wzgx1tuZFVgWfS3TQKZ16VMuiLZimX7beH6rVF6bwVGvgNYnUwb7qcseQs6Uz3",
  "key3": "kQa3fkzeXNrUcb5UuGqLobV3vse5yPL7FeSfwQ3oxhMShSSiwo5wjy7ZPAkZdjnXUzdapcCzvTP71vdKmYsqijf",
  "key4": "3DhPB1vwR84a8St5bQcmS1wJJvejJAbZ2PBbJFY8ex3YZqKWxsZYDK7hX8dVhrGnxZAvKReRFLNa7P1wFwhh4bPQ",
  "key5": "2qyfz38nEcNNJ4K1TpPGpsk36eYarvuV871KBenWhL7dLMsw1PFdP5tHMFf8cfrJ3xUKjoDRvjphHF93ScwPbUKa",
  "key6": "2GKUwQLm2mRY3pBbFHjo7bxn7bvmnNZGoyPdVqBHWSpb88zC2DU5i16uZyoEw7FZm2ZaG9N9JnaL4Goz4JpLEk2m",
  "key7": "6ZUQBgnvP1tWNUDC2qnzwqTqyEroKxFvMzcrgcjGDS7oG292JxKSokiCFpiFZfUmtgoMMdEeRZuanHiqYcdwntx",
  "key8": "3dgGRKvwznKvuyW7etSsKz2nmuBabTViEMorLgLhzGfpbUG1z5VH2w7Z2dszRTDxdwGPWXy4F8VceekWDT3vLQ3s",
  "key9": "3JJfMXih7WxxJveSfYe7WXED3PgRHZpczibGHdHTJKtpqCdAxYKvHQkpozbuYdvZ6Q2SQyKrZ59aCmctgocAfqgi",
  "key10": "29J6vv94cKMJATy8zjmQHoTxxRezq68YLGLQa5q1TsNDXNm1doZu5xThnRd8xnTjVXvqYmQxZYazBtjjCuC6cPWj",
  "key11": "2X9fecKfGVQ7guaJMqpXXh7ZnHFWVAAdscEDXGyQT9TSWRHnFhYdfH6DCt1ym444koD7D3ttTQj7aR4D3XfaivWi",
  "key12": "iJqtQgGq6d5BdtnYKCVUpjyhgwnUjXye5pqVpbJ221qyMynPPJHiz6prX3uMbwFjaWA6FRCmmBAFXi32utGcSe5",
  "key13": "4Lcm2Ln25tyUsS2yaSpBUHuBEtjXuvhESRQE4GEGnemA8i3FqjQbarQsxwC61fSunusdtcwTwkGLwNe6pby2eQ1M",
  "key14": "tWZSpFdA5EhdrwX91zV3DXFKsAZAXQ7qbT7XB6QpnCUa3ZyrC8wu4XFq4NCPWPpU7C5jzefsnKrEkm7nyJQbb7j",
  "key15": "5cSwQy4ETm7b3K4BqhMfJ3H8FEH2jvET7xPtXupyyDPRL635XtQDLEJH5kCuMTw9q92vaERkujsHtaKqigzTaaKJ",
  "key16": "4u9DL4ziWgrR7D61Gt28My7vsC8zBDaMqxzqFePwSwNhYn6M2t13oEA2UMXMWVrgcCfKYw4zZa9pr7H7DVUkGee5",
  "key17": "zAz7fsgccdy8UD5X86Fc5vAnEuncSgpcraTWXzbrpLNwjjt9mmqpEQgDGwPCX6pN8wUdX28niGtGt3BsVDpMMxn",
  "key18": "21vsYp8DF1hPzmYdHc7ju7BQWJeuwhF4uiqEwhYLiyimYXHWpBeAwYtSXbKVQ4RrEihY8fEEJxA2bcmUd2pZ4eKK",
  "key19": "4rG6WVpHRPdpmj16du2yyqjdhgpi6jT7WuRBJ7nsKhb35kGtNAzr9QbLKkZsMqVpeR2bwC4K6NZsGRA6X4xDGPpW",
  "key20": "37hc35MUM1jSML7Kn2G3bv7eBaBSUmaivJy8GTXYQPTZVoookYMD8iGkJkNEX78yQekw9XHGWRMoKCHNRDPjVjYD",
  "key21": "23YscGvX3nzvQAp7ZR7ejnfykxNsw1MpGirYixrViUBmZznpenaAV7KiCAjZgujxnNrZ27dx4GQh6BdhkcsqJMPv",
  "key22": "3MSBZGjWidEQN3F7HgZXBZZaWEM7bPcvHKCCpWKcgy8ocudJFFwQJzbPRpRmyXR3uEftZ255En2LyXaHJxmcvfcu",
  "key23": "624qHwnDoP13vJhG8BNSwDCX6b8C8QZqsbCTedVa8juiMaANSzxZt1E1dShccw2oTmRr72jNg2MjEn1ACkuYMzg3",
  "key24": "2rYZHfgs8aP46wW6eSpk5rQBEenQucvQnkzCyFYuKkXqUw6WYSkBRHx1q3FRo7yvHZa9Kq86cskFWpB7NjFyWw17",
  "key25": "3TpVmud5htLJsjcwvx8YZA6QbTGTv7rDuLVKdh6t9eSL74E1StvW8trNtbzsBwztmw9ewGVo6hHQKe8CPAfZCehu",
  "key26": "4cST7tzLzLEu97PzHT7KZPXMUzqgKHAEX8Xh9PSaBLzmUGAUJJCwMbtekeEePZfq55WF33nEoT2RER1fNn4QkLGj",
  "key27": "51urtXoepFyJ3tmZ8f4pMaXupEuJV3gtsgjjG2Qevdm752MvKn4NRF8STKLP6aizyrqha1cu74qD42p7AEpvY2gc",
  "key28": "435AVjfLp3xfSEMw4C3yxJmpNyvqSJvhMFXi4ECD2NeqWR5LwrMfXhNvH12nPzf68jSznMiN5h24srS4211AB9YH",
  "key29": "4j4rTQXrTWur7cUv2pVpDvni3pPMeQfUphmVnqPmcXqHKfztLNZeBmX4hPuQZMfXQE5jTxLLyBRxqZk8eeFcj6Xn"
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
