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
    "or9HDGEA8dHG5TfupFEVLF53zDKrQVDinPyEyUpKciHW5wWamAgB1NoYADeCBxpAUQH26stvYwGv6KBTwQmUhVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kw9KWtArianKwqEZhwqJFztkmSMG1p27gzaP1ySp2e86bfpra4HR6NyBFiwCSt4wvyo8eEvKsgsc3gmV26KeCN",
  "key1": "2G7hXWvfVb6DqYW5XGc5964q56LmyASvtnoTcNaH23cRFcHa58GZdgkejUJmcWCkcHBxgbxW4jbjxzPzjiMaKNrd",
  "key2": "54G2hfu1ud8HN2Anrp43UjHTSVGA7gZtioTtDhKdr9mVxgvvKJXN28DzMBodUaP48NQn1TqXxD4eEkoXESt6rYY8",
  "key3": "5uUkRqjUxy9gLGrqfKms7FdsuK3kL1vnC3yhHEbugKbkxCEvjHPhYBBTCxxC6Dvj5tPL4f1x6oQiYekNVUTQmpf9",
  "key4": "51K1tMaMjqnvFJ3B8vnvJ8kNUHChRfqHZz6k1bMgm6KLNRKVCT1MAMwWVetjtyRdtmJy7Hd9Tq3i149H6wM4V7za",
  "key5": "2wzYz4kEXdiBfrJjPt2TR1212fvcgi83xJ18f18wcyG5WbmKAcJ86NLzn1eDb1TaUJBGZXkReHV8sSCJ137QxU5G",
  "key6": "i5ajz2zHE7EYzTmQFGnX4qwVGKHfixRJPsy9jPsbUEaMWNzGx2xRXkrBmrBhFqMkD5k62SxZQJw5VP79qaQkDyC",
  "key7": "3ewJSr8F8NU7EtsAyJDt7ifJfnWR6wCGR83kyuVz14zBUtKdc1vy3FwV2bsjj44vuNfvbrmdvLKuS8hpErLZeNbG",
  "key8": "3cZ4EYUBk99XERRwhTv1UKSW1dXCoYxKzkHrb8N6icq3TXHjtEj8yBtnrGhUrtQbBc8UdZCvhsENuWZsKKgkKYH2",
  "key9": "2dzJzVSMqri4KgESvBEDnMpS9y6svCa3HrkS1L4XstJhSDYpj7uDcDoRyYefWzXcPVy5sYHsfWiNbXg17fzknVfw",
  "key10": "3VQMhvgmFbGnTb6VjAyUuxzYMeLCzshqsjy1DcsuRaRhJp5QNmPY7GyY722byH8LePUj1Vc2niwUFbJMqtoM68oQ",
  "key11": "4eQzHvExyjmuJQfctMJNa5zJwCRC7cR2YnX283tmrU1SEzz7wLtr6PJqy3jiLvztCQkFaJQuGFc4qLXhrT7cKZaw",
  "key12": "pmv5iHefaUVCh3jHp2yMfQxnesQmwEqEfL1F12s94YWzSC1UxPkj4oaE8cgnVxWVTYM34dk3798Ky2SSVfz14q3",
  "key13": "3e8x8gGqFdTTnm1qCJREnfC5nenrJK9k2ZCNmKWuxe5KB1RVY2BjKau78TxHDsczYAMRWuk4UvRk2ERD7BQHVQPi",
  "key14": "2ykSf6YcYGhiaukEdAkEgavy1vbgHTJrKLmSVUphXhEfxi9bZ1QxYRjmTTotjALrAiSurkAnEXDu4gMGFM1fSWzb",
  "key15": "43rcdt74yVx8HyJRC5AR2oSz4CXLeCbHMETHA6T1cHuub1Wod4H3sKzT3g76USvSoKVMrUveVrjQcHSAFY3tyM6d",
  "key16": "2qpxU5koPxjhq4T6KGh5u5N4DNpqTG9Nzryfb7rKw1JQyRPfKGvKBjypKpoiSyLxt71gn7MiMHb3Wjw9mB3bucfW",
  "key17": "AuuxnKdckhXojkkhXoYHoyMSZv16zyCGXUEET4fAnWs8bdfhL328vxsfXQa8oZMkugbwPasDsdLuDZ7AHQ3CdPp",
  "key18": "4fpap5xkoToNgcwz7sWwWarRuv1bZrkBdN8XQaNvvS8Egkn1iJq7iW34dWSSFD5FrZtVVPBJ6LWY1pCB1pZo2ebN",
  "key19": "5nwfPbUZ1ZemaqrRju57bHyA5Td9yurUC2WhXcsEugqQcBKR76mpF7YjFbZGn5psM3gyszv3cuDg1yQi5a6sJVsJ",
  "key20": "2ZhwhzA5XyhSjJnzBaHqUmVLsfFBHKy9uvKVLPzW7jQWHGrK15MVbfUec2qqjf4q9tL7QpjqJaGwmGnACuwo7pzW",
  "key21": "5bw8vuDNu4Y2C7Q392DZeNQUbgq35BV2aQvaiR7xX3NqoQtFJFFkM5wrmCFehNx2h8FeFR9gma9LVae9YZRsjkmf",
  "key22": "2Zz9bunGH77psAcvWSTMwmf8MNUAtEqHs7KiWWYAT2KgYY5uy28vPNUc6BXKxKCtRyz5zGy5rYK5cJQ6N3cGQGV8",
  "key23": "2psciwTjz9gvV7FrEAbQiWXZTBwpGRsCc4sFNTQAz85EMuibjXhNZ5UFbzA95gj9otWUmn8w21mQvNZJK21zwWfE",
  "key24": "4tqt7xPaNGB5ysQn2vQGfC9zjePZtHzkx3kDm9iYcZCoVQnbgQaaMBkd7bUvpPz1BEHGh5jmQkiYZBe9HKnEMVzA",
  "key25": "5KW9E9MS9K7KrJfxqhTcNiARuLT7Kt5qwX4pHzGecqap79Xcm81Htx5uDDwzGWWUAzNz7HoTgD7vTA5aZvYBpaT7",
  "key26": "57Ta5tCDv7QQgPhTMsdEHHtcMo34EL4HfKEkYkFnywmayiKC93SF79UnLBPAfiGkEKUfRK3TTpxX9tHEDv4KkHsM",
  "key27": "5wAKZNsZZaRsC4LxGRkAXGAbq4maZ9Gs44gRjKi7KeV3F6bJZACKDHWAe96CMs1QzgTYj7pnTvgBZ5rNZ2mE4j1Q",
  "key28": "5Fvfu7W3cEH8GizdsEhRvrpdYFmojduVRgn5b9VGwtSAXuQfVEAxsjKQ31AeirKLaqQLR3qg3L8KhDc3AX5CptuP",
  "key29": "5BqkJGmTP76hWVyoqgWviQbeM5oFj9QrYNFjPjQwuemZNkgQ8pTVvQDQP7kQXRL5CaHXHJrADfWCQw36fDpa8tLP",
  "key30": "5PXMFsMLjrXunHasYMBUX7ixEbwXUiwYNBZb7pM6H8zp9kmb7egHL3bq9J7KeNHe1cB3Kd5YfKKXv38mmaiyG4kG",
  "key31": "2U6dLFaJ7EbvZ9F1m1Jj1W1U6DsdFCsobgthjZMUgPNeStxRtxGd42tWyuNZwuaXKNNcbmFqBturkkgnccgtWXRJ",
  "key32": "5UFUZYneraARssMCSwkyg9zMFYFBQRbJqnCeBSm6dWJgu3twETEoiDJV54tRLtnR4WX5YzSbnX1GgfNEKWWUjsnw",
  "key33": "2kbMyWXK1XNNLPgm5qoTumnAFy7koyLunW7ZX8rUhxEegwLenZ4jLM1w4G6nPKDUQ9XyELkosnGCPCkBhHnQvRkk",
  "key34": "3WtzbEPecEKB8YqBi2creaSdFoHeqruhiB5a9VUL888Spb9Xq6FKRWh7w4uf3A1RwS9DNEbfFmZtc6AuVar42E2y",
  "key35": "36zJ3GSiCq73AyxbD1fFDfbE1Egs6Ta2URpx8z7XJkEFbeVUxwp6mPEeJNZPC8mrhMQb4VGRLkAPFKnBG3iCLKkB"
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
