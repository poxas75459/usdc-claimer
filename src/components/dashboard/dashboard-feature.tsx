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
    "2cx3Wexk27Jzy1jmgfzzCeNtXL4YDKgRfajhoyYrt21P1MS4s3yxxK9bKVK4ok5UMxeDatGD9kTjNXNDHdzbh7Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pg8XMpyGAx4GthtQKx4NafkpuDQeT5jK8vHZ9p6Wn1pKa7BoxR7UJZQkupp1JhCu4KBNC5tqWQfnxVNDTPn2JEV",
  "key1": "2TtW5kTE4Nt6NZqto1UZpjR9LC5jwbmWj5BQDLmJFMyLsk2jb65bip5xJX7Ba6rugJV3cf7EfBGk5HZ4K7v2Tiq2",
  "key2": "3R5ifT8uaTw4S7vXQcgeKi9ET5msx2JXt6a9jieqXfGQd48wmuPF4kvtwqvgZ63AFi1CbzByBQyTuQEKbjuw5jjU",
  "key3": "3BXNQLybPgN3GErFWqkG9eYFfKykFNoxmeEY6N1PS91UwZmNBRRLofUMree6teofWgpaBpF7dGgjjpApfHsJbjrZ",
  "key4": "61kXuPW8Efu18P7XAPPvd26Km6aAce6pGaGa34jW8nk3eGcLWiqwqLMaKgaRuxYxTLaTVgfFzFYwpEW3ZVQfxAWy",
  "key5": "3HEvDjftu1MUB6hyxNwawXbZ2DEGbvhgmdViHj4B6GSeNsWytMdoaMVsQYsYUgDQQvh3doLHdggRuwCniEPmqQpi",
  "key6": "3cXDQs9FbTnxpRwN5q5VMyYAXpYxZibj1tpiQKBStXK23wMgwRfryxzMpEhsJL5aAjQrT9hP6EJHQSX4qh8196KS",
  "key7": "3qx9FHRoAn3MWCz1qfjFoKimDMtTmiw6zoVQCsDs13tzEGw69gfgWNuJtetooe29K5Wm9YqBiSsSZZDoJbmsuX1",
  "key8": "DLAocb8tC1tMEmvYAx9sYNBje37UCXNjaD6Uvcv2RAJx1U7bfu7N1A1bsz1vhhd5onCXfGRZkEfX3AE7t7qr1Pk",
  "key9": "5ZHRjjjbZNNzwJC2pcVGGgBdyuUmzF3gWH27BCSvGi7tKVF5C8evkKbPuSUhPXDwL9TUvrVMfbdVMLzMXxEBGujU",
  "key10": "54aMQtXJzURvQDUjfr1TF7avLpCwidL5WaPdphed9dcv7BwwsBRqBcc8ADixCTi9G321jUuP37tWBkhyc2Kw4JNm",
  "key11": "4Y666PAcDR5Lqo6jdAv6hd3dC2FRNCV9dWHXerz2648mYCDxgSWfaCuUn1XgrLwTG5RDuyGcuwvvuEKdGPgtgDzB",
  "key12": "3nSfHpBiadJhVD9kwimgL1bLdZdzSxC9gQchdukuPuMFYttWsY5FxSax35151LZfWw2J681td8aKtGSfabkk9qE3",
  "key13": "7p92Nc8Q54uzB5VUVhzftqvaUv35dDTD3pdDsW3C8yk7TWrGP5eFVDAopA9WfXAVoXQqv4kQ7xsxfEnBcvnL7XF",
  "key14": "4WEAWaK8tSX4orGXq83MJRzkcNfvQGipQfT3voYSF7yTAYxV7ByJkMS2owH5AiBeamZWE1Q45FZXX2vH1qDeM74o",
  "key15": "eFhqUepywSvmpeTbuaxL376esfs5XS3oQsqBbY7UPi9iJCP8aqQMp52e48Z1ZYnkhuCYqfyUGbhh7otheboM9uF",
  "key16": "4h4dFsKHUysT5dvAizcEEwABfqVP2eUTy1pTCTuw7cP1Qnp4eJHr2GNH7kSh9fo4RqLSwr7gGe7TpwhW9ZZdDXMs",
  "key17": "24C8A3dH2xu7wUDAqKqHewupWSqw2qLUwKjUmNQFv6F5BRFUb9k6iEeJzPmTng6k8nTwTPfSBaMkNxZAQExnTs6y",
  "key18": "66muvKXjo73Q49NrdxFpQjf8NhzsJK8tXnsa6MbQtiqXhLzckT6vaRkNkmRcZVhrbn9gqeHz2yLm8vtqbV3uQifE",
  "key19": "3z6YjxHfVoS3HdWyot66Z6nU5Lo6ju1S6TaiHFMW13TcU5pcdWq9Q4PF6P4My7sFLDGBKZiX1kS2hYyTEWguCQ8w",
  "key20": "3Ub8sSpmjbLnYpPLwQ1N7BocwKx8vfYtFi4sZBxLrsJgAP3FHZ3KZ5uGqBkRd2VFfiK7Et7yPXCxRXGRU9aKRpNF",
  "key21": "2qikrkaPfeTykMyu4PgtCiZWkx2mzhzccJp6DMrVxwCgty6sYuzR3QPxSQXT1TeaeFMkJsd3WnbmnSvSfbNXPoNf",
  "key22": "56GxzuaZHhxrvfqpbkZ13KDAj2JGd6a2onsX6D7NSK9stGfzTzkQSnN3gcwwtc2TXXxnqAT3Gqsh27sSfR4K3RNc",
  "key23": "57ry6f4XX2hhafT9Ybv2Cx4w4WGCDWST6n3Wx75tTgQjHxRatf35VpTdJrcGwfRuiF1ZBJb9NQDgZyU3oWtJPBeT",
  "key24": "2Y4TeAJdfGJRNJDjQSSq2n6kKKn2ovT86qFHRfpyqpjmRj9AvEM8AZYmXHLYWiWpqgDm7dLwEgQGdvg4SQZp2QDA",
  "key25": "5rnq5WyezqjcoqYLWXaX3sK1VXSRakHvjZH9NcNP3o7nRVP93GGR46JZdd6JzwUNFYRkuk7H2yXKk48zuPh9hRoS",
  "key26": "sR5a6mZwEUdNbw9JmxxCUFdTToUpMJupod3HTiU5tUMRL9NGYEE4qD3JShTVZEJXBDkubFQpPLhd5aX22LRjGdk",
  "key27": "41E2xGYKj1khMjmRnT2vtg4JVKZPGAeNm19pHgKG8vHFGG4FvFzp6ET76tHDU1g5dcmCnm476MzcVZzPWyHGRMmu",
  "key28": "47seE55XksTRduQaSzw1AaF993w2P6xSAr9sSy6gZkwX5Et19C6HzdVWGY4uqE4mBK9isagFme73ng3GT3uHzqnP"
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
