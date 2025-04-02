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
    "3VHQw3tB3oTWy1V92DTfz3JZPwgqWzZdhdXvKZLc4UxEQdxQmzYAga9bXcg84fKZ2gxWGHTenF1GPgRaLPfoi2o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "426nH6UTPJW3Wsg966Jvyvs66TQEohBJED1XfSe4kTx1Y9puSKjPbyUkNX71DnkeDYVkmPKjXuYyNSURvFhCwVZz",
  "key1": "nsbsdNQSdL9QBZJpQqnRP42Y7C3sBPXd84zvQdAbxAR3Yz32TMHsFXhbEDkin6yHqgb8CPnoA9TsfSwvCWrGQcS",
  "key2": "ZXiNb62e395GeYLKuh2neAzmDrxaQnskd1xxwGzKr9Agfvg7NRYg4EZaZpJwYnkSJzgdUuQa8cTq1YUiazkZdNC",
  "key3": "2cryp1Ez9iVupTmu1NEVaWUBRDhbVrDhq5j5qpPNQqksAdfdyS6WqjJPyqfh8KvvMUr5a8jBf2UUUuQqTK4XAYLU",
  "key4": "49ZxFJtpKqe212YgZj1p2tfiM7b7j7mKnCSUfhz7z9LZWHQF8y4jYqUCzYsQ1MhqEXz9srocbQRZHU78KhtETYZg",
  "key5": "2anWE3bs7j8PNScf98y5tmhBiqJHL9WueMeFnU54pjjHkaPsuCFr5ZDMgGMm5HkGWqfBscb5fz8cLyzraVt5Wnea",
  "key6": "2SfqozvWgwFEPDRoV975cxQpxX2TRF5774iWDLmn6ijwucxhLb3mhvYmAubTFCAjguKTDyXAC96f6YvAGz65iGN4",
  "key7": "24sE3TesoiY71NoQFz4aBoSJM9GzT7EKvUFshD9Jip879cmXh8Lt2wuJPsCuY9ycxxkhKTbCT2HC6gkTCXT8DrdF",
  "key8": "ph5BdZnhv2HADoBG1QdXkFnWCrf6VmWeTczHLxUCUGhASMrUXnZzNRkw464Gja5rDPthABNhyPypDRYhSwsGuRR",
  "key9": "4KWqjomQuTQmjeGPZg78RRSHtRRiZ9pDGfHka2R8bbkkcSHEPM7W5nLRygXNet6vX5aAVVQmDrLrCHQrWNypzqXy",
  "key10": "A21yx8Q1jpcCheCDmHrEcvHUQcA18XU1RWBBdtHFtmm3LrMnjaqoDhhchssxi33nXcyBqrHkGP5KHhhoEEpVnkB",
  "key11": "46pqN5aqMXiQHJoAuDiuv5bxX7WQ9bjKPMPs1AW3DypsvHJYf2EMfM69UJSM52K8Y4iFf8eEL3zdo7FSWRvcg6SZ",
  "key12": "DVmfKLQGRm5d39dV4uYrUtmmdENop1Fc7K6NxV5SMSuqGYbASqraoWJ1RkD1zqG8jxipKcnvK5xAoj7wtxNzz3L",
  "key13": "2DMHa9jBZKpMf3tx7i22xFRwcGziqYtUmWdiVzVEjT8cFSER6b51CALcURLJypECs5u6PgEUg2L6mt3fcFwT5fe1",
  "key14": "iEJHGXDmrnWe2gko9E6vLjd6WVvi4jjc4ckTsSCukv1Rd5b6pFMBBnH27HRsVsq9aEDwRZLHkPPLr2E5hvyYCjS",
  "key15": "3EnKJfYGvqKbNPxmbpJ32bpanbgrGfxijJdzL1v6Tk6S76EEsQdryYKEYg77T5wcNFoJcf4zPbGAQCBqqjuAax5M",
  "key16": "5s86pRhUzVtvq9Ex6eQ3GojzQJEo1EVfL5PXVWMVo5DzydhuSYsPKnGD4sJd3tP8NjYJzjo4wFWvbwpMeWThT28a",
  "key17": "5EKKkXXNBLAwY5Q1SongN1RRgrWqDfPoEuQxWZwLWq1hsvQX2u3NFENNGLtY4m33vNFiLW2q2CoKj9uBhBqzr35i",
  "key18": "rmd2hDucnLbJ8Rgg5SZxcZWjSbkcpfZsjMkiwJxZu4RC1FxcTAAoTRb9Wrk2MZ2UeChPs2a5PvQE6kc4B6u99a3",
  "key19": "2BT3rjeYzmCkyEmWghWhuTjdRVPTZjP68CnU5AiPmsich5r91KBJSfg6Bk7jD8WapeqXrbE9TzjDigEQzVDcwc8S",
  "key20": "4k3zEKew2uynrhg8k4J5qec28hGeYAgXPvaxoeaCU6SGYxLLX73WWVKrncSdqcvjb9cubHFXr4bj4HQKFZspWqtw",
  "key21": "4ntguaJu7gLcYtQfQhaRLi7e9AhP66KGHx1gq1iFd475u5W9veeKhJibXtraBdACfDE3NFZBrJ7goitj1Ch2mGBQ",
  "key22": "2pA2MQxvytiLAatYMdGmw7nWc1trmnABpiu76oHgDPw2krC1pXqykwihQR87sVeHfZ7MMJhnucNmNtfc7PF1DgLr",
  "key23": "2TdYs7g5abdnTAdpCFNLyzVDwyKyF6kCSSwBxvErgB35mRQzRFGEgyeUkfwxpY5PgaZW1QNWJLwpHaGTEVajk9qK",
  "key24": "5HHD3odWRQa4XjLdZt6x4WFK6ov4TeKNNjwUkEcqCAzyUtdKSBkkwnXL8ukf7BqLrEbT3akPDrSAPwqntQbVct2z",
  "key25": "RBU7HjauV5eyXzrCjc9XN13UWhYjNzcrjf3MRnKT67G9Fwag86r7xeKiqhcN6iLMfQMqvMxQJHNPA2advh55pfn",
  "key26": "sXi74jgiSkMpx6z4jpytXQWEXjxLqA6H2gCSHEUDVocadW2yYpoC3Ufxr6LbrXbWicDk9v4PBhRMoJW1b5X2CcA",
  "key27": "2k8cpCzbAnrSS5s8B9JRJpjpuHaf3MDfkY1Hj7WakvfRsMWz6fukEnGGMZQtd8YrdVxUQEYk9W6AjYYFNXdJqnGQ",
  "key28": "4P5JdNxkhdMgJo3gnNn9utY54AQt92HSRd78czdTDha3Rw7cawhwTG511nDAfdDqg9zmae9GXgRK85HbKpvAJBGd",
  "key29": "5hDXuUdiyhfCKbBLMN668kjCShCyb5sWQpcKPtz5D7WZLy65ybx1KtWCebVW8XJ43vNtkWKL49ZsUKN5k27e4DVB"
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
